// tests-e2e/math-quiz.spec.js
//
// Regression coverage for GitHub issue #1592:
// "[Bug]: Math Quiz prime questions still show random number options"
//
// generateQuestion() built a `fixedOptions` array for prime questions
// (the only valid answers are 1 = Yes / 2 = No) but never returned it,
// so showQuestion() always fell back to generateOptions() and rendered
// random numeric distractors alongside 1 and 2.
//
// This spec has two parts:
//   1. A fast static check that the fix (returning `fixedOptions` from
//      generateQuestion) is actually present in the source, so a future
//      edit can't silently drop it again.
//   2. A behavioral e2e test that loads the real math-quiz.js in a
//      browser page, plays the quiz for real (solving every question
//      type so it can legitimately climb to the "Hard" difficulty
//      tier where prime questions live), and asserts that once a prime
//      question appears its only two answer choices are "1" and "2".
//
// Assumes the Playwright test runner (`@playwright/test`) is used for
// files under tests-e2e/, matching the .spec.js naming convention.

const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const SCRIPT_PATH = path.join(__dirname, '..', 'js', 'projects', 'math-quiz.js');
const mathQuizSource = fs.readFileSync(SCRIPT_PATH, 'utf-8');

// Minimal CSS custom properties so the widget's inline styles don't error
// out on undefined var() references; visuals don't matter for this test.
const HARNESS_HTML = `
<!DOCTYPE html>
<html>
  <head>
    <style>
      :root {
        --surface-color: #ffffff;
        --border-color: #cccccc;
        --text-color: #111111;
        --text-secondary: #666666;
        --primary-color: #333333;
        --secondary-color: #555555;
        --success-color: green;
        --danger-color: red;
        --transition: all .2s;
      }
    </style>
  </head>
  <body>
    <div id="app"></div>
    <script>${mathQuizSource}</script>
  </body>
</html>
`;

/**
 * Given the text of a rendered quiz question (emoji stripped), compute the
 * correct numeric answer, or `null` if the question is a prime question
 * (handled separately by the caller) or unrecognized.
 */
function solveQuestion(questionText) {
  const round1 = (n) => Math.round(n * 10) / 10;
  let m;

  // Prime questions are handled by the caller, not solved here.
  if (/^Is \d+ prime\?/.test(questionText)) {
    return null;
  }

  // bodmas: "a + b × c = ?" — check before the plain add pattern.
  if ((m = questionText.match(/^(-?\d+(?:\.\d+)?) \+ (-?\d+(?:\.\d+)?) × (-?\d+(?:\.\d+)?) = \?$/))) {
    const [, a, b, c] = m;
    return round1(Number(a) + Number(b) * Number(c));
  }

  // add / negative / decimal all render as "a + b = ?"
  if ((m = questionText.match(/^(-?\d+(?:\.\d+)?) \+ (-?\d+(?:\.\d+)?) = \?$/))) {
    const [, a, b] = m;
    return round1(Number(a) + Number(b));
  }

  // sub uses the U+2212 minus sign, not a hyphen.
  if ((m = questionText.match(/^(\d+(?:\.\d+)?) − (\d+(?:\.\d+)?) = \?$/))) {
    const [, a, b] = m;
    return round1(Number(a) - Number(b));
  }

  if ((m = questionText.match(/^(\d+) × (\d+) = \?$/))) {
    const [, a, b] = m;
    return Number(a) * Number(b);
  }

  if ((m = questionText.match(/^(\d+) ÷ (\d+) = \?$/))) {
    const [, a, b] = m;
    return Number(a) / Number(b);
  }

  if ((m = questionText.match(/^(\d+)% of (\d+) = \?$/))) {
    const [, pct, num] = m;
    return (Number(pct) / 100) * Number(num);
  }

  if ((m = questionText.match(/^__ \+ (\d+) = (\d+), find __\?$/))) {
    const [, b, sum] = m;
    return Number(sum) - Number(b);
  }

  if ((m = questionText.match(/^(\d+) hour\(s\) = \? minutes$/))) {
    return Number(m[1]) * 60;
  }

  if ((m = questionText.match(/^(\d+) minute\(s\) = \? seconds$/))) {
    return Number(m[1]) * 60;
  }

  if ((m = questionText.match(/^(\d+) day\(s\) = \? hours$/))) {
    return Number(m[1]) * 24;
  }

  return null;
}

test.describe('Math Quiz - prime question answer choices (issue #1592)', () => {
  test('generateQuestion() returns fixedOptions in its result object', () => {
    // Guards directly against the regression: fixedOptions was computed
    // but dropped from the return statement.
    expect(mathQuizSource).toMatch(
      /return\s*\{\s*question\s*,\s*correct\s*,\s*fixedOptions\s*\}\s*;/
    );
  });

  test.beforeEach(async ({ page }) => {
    await page.setContent(HARNESS_HTML);
    await page.evaluate(() => {
      document.getElementById('app').innerHTML = getMathQuizHTML();
      initMathQuiz();
    });
  });

  test('prime questions only ever offer "1" (Yes) and "2" (No) as choices', async ({ page }) => {
    // Prime questions only appear in the "Hard" pool, which requires a
    // 6-answer streak to unlock, and prime is only 1 of 5 question types
    // in that pool. Play generously long enough that missing it is a
    // statistical non-event (~1e-6 chance), and give the runner enough
    // wall-clock time to actually play that many rounds.
    test.setTimeout(120_000);

    await page.click('#quizStartBtn');

    const MAX_QUESTIONS = 80;
    let sawPrimeQuestion = false;

    for (let i = 0; i < MAX_QUESTIONS && !sawPrimeQuestion; i++) {
      await page.waitForSelector('#quizBoard .quiz-question');
      await page.waitForFunction(
        () => document.querySelectorAll('#quizOptions .quiz-option-btn').length > 0
      );

      const rawQuestion = await page.textContent('#quizBoard .quiz-question');
      const questionText = rawQuestion.replace(/^❓\s*/, '').trim();

      if (/^Is \d+ prime\?/.test(questionText)) {
        sawPrimeQuestion = true;

        const optionTexts = await page.$$eval('#quizOptions .quiz-option-btn', (buttons) =>
          buttons.map((btn) => btn.querySelector('.option-circle ~ span').textContent.trim())
        );

        expect(optionTexts).toHaveLength(2);
        expect([...optionTexts].sort()).toEqual(['1', '2']);
        break;
      }

      const answer = solveQuestion(questionText);
      expect(answer, `no solver matched question: "${questionText}"`).not.toBeNull();

      const optionButtons = await page.$$('#quizOptions .quiz-option-btn');
      let clicked = false;
      for (const btn of optionButtons) {
        const label = await btn.$eval('.option-circle ~ span', (el) => el.textContent.trim());
        if (Math.abs(Number(label) - answer) < 0.001) {
          await btn.click();
          clicked = true;
          break;
        }
      }
      expect(clicked, `no option matched computed answer ${answer} for "${questionText}"`).toBe(true);

      // showQuestion() is scheduled ~1200ms after a correct answer.
      await page.waitForTimeout(1300);

      // A wrong click (shouldn't happen given the solver) or a missed
      // timer would end the run early — restart and keep trying rather
      // than fail the whole test on an unrelated flake.
      const gameOver = await page.$('.quiz-gameover');
      if (gameOver) {
        await page.click('#quizStartBtn');
      }
    }

    expect(sawPrimeQuestion).toBe(true);
  });
});