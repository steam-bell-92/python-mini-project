---
name: flashcard-generator
description: Generate flashcards, quizzes, and study guides from notes or topics.
---

# Flashcard & Quiz Generator

Generate study materials grounded in memory science. Follow Wozniak's formulation rules, schedule with SM-2, export to Anki via `genanki`.

## When to Use

- User pastes notes/textbook content to convert to cards, needs exam prep, or wants an Anki deck

## When NOT to Use

- In-depth research (deep-research), data analysis (data-analysis)

## Why Spaced Repetition Works

Ebbinghaus (1885) showed memory decays as `R = e^(-t/S)`where`S`is memory stability — without review, ~50-70% of new information is gone within 24 hours. The curve was replicated in 2015 (Murre & Dros, PLOS ONE). Each successful recall increases`S`, flattening the curve. **The core insight: reviewing just before you'd forget is the most efficient moment to review.** Active recall (retrieving the answer) builds stability far more than passive re-reading — this is why cards beat highlighting.

## Card Formulation: Wozniak's 20 Rules

Piotr Wozniak (SuperMemo creator; Anki forked his SM-2 algorithm) published the canonical rules in 1999 at supermemo.com. The ones that matter most for card generation:

**Rule 1-2: Understand before you memorize.** Don't make cards for material the user hasn't grasped yet. Cards reinforce; they don't teach.

**Rule 4: Minimum Information Principle — the single most important rule.** One atomic fact per card. Complex cards get forgotten as a unit — if any part fails, the whole card resets. Split aggressively.

- Bad: `Q: What are the three branches of US government and what does each do?` (6 facts, fails together)
- Good: Six cards. `Q: Which branch of US government writes laws? A: Legislative` × each branch × each function.

**Rule 5: Cloze deletion is the fastest path from prose to cards.** Take a sentence, blank one term. Beginners who struggle with minimum-information should default to cloze.

- Source: `TCP guarantees ordered delivery; UDP does not.`
- Cards: `{{c1::TCP}} guarantees ordered delivery; {{c2::UDP}} does not.` → 2 cards from one sentence

**Rule 9-10: Avoid sets and enumerations.**"List all 7 OSI layers" is a nightmare card — high failure rate, painful reviews. Instead, use**overlapping cloze**: one sentence with the full list, generate N cards each blanking one item. The redundancy is intentional — it's extra *cards*, not extra info per card.

**Rule 11: Combat interference.** Similar cards confuse each other (`affect`vs`effect`, port 80 vs 443). Add disambiguating context:`Q: [web, unencrypted] Default HTTP port? A: 80`.

**Rule 14: Personalize.** `Q: What's O(n log n)? A: Merge sort — like the algorithm you botched in the Stripe interview` sticks better than the abstract definition.

**The diagnostic:** If a card's ease factor drops below 1.3 in review, the card is malformed, not hard. Rewrite it, don't grind it.

## Card Types

| Type | Use for | Example |

|---|---|---|

| **Basic Q→A** | Single facts | `Q: Capital of Mongolia? A: Ulaanbaatar` |

| **Cloze** | Converting prose fast; lists | `The {{c1::mitochondria}} produces {{c2::ATP}} via {{c3::oxidative phosphorylation}}` → 3 cards |

| **Reversed** | Bidirectional recall (vocab) | Generates both `fr→en`and`en→fr` |

| **Application** | Understanding, not recall | `Q: Revenue +20%, profit −5%. Why? A: Costs grew faster than revenue` |

| **Image occlusion** | Anatomy, diagrams, maps | Blank one label on a diagram per card (Wozniak rule 8) |

Mix Bloom's levels: ~40% remember (basic/cloze), ~30% understand, ~30% apply/analyze. Pure recall decks feel productive but fail on exams that test transfer.

## SM-2 Scheduling (What Anki Runs)

Wozniak's 1987 algorithm. Each card tracks three values: repetition count `n`, ease factor`EF`(starts at 2.5), interval`I` in days. After each review, grade 0-5:

```text

if grade >= 3: \# correct

if n == 0: I = 1

elif n == 1: I = 6

else: I = round(I * EF) \# exponential growth

n += 1

else: \# forgot

n = 0; I = 1 \# reset interval, keep EF

EF += 0.1 - (5-grade) * (0.08 + (5-grade)*0.02)

EF = max(EF, 1.3) \# floor — below this, card is malformed

```

Grade 5 → EF +0.10. Grade 4 → no change. Grade 3 → EF −0.14. A card you always rate "good" (4) with EF 2.5 goes: 1 → 6 → 15 → 38 → 94 days. **FSRS** (Anki 23.10+) is the ML successor — fits a personal forgetting curve, ~20-30% fewer reviews for same retention. Mention it; default to SM-2 for simplicity.

## Export to Anki: `genanki`

`pip install genanki`(github.com/kerrickstaley/genanki). Generates`.apkg` files that import directly via File → Import.

```python

import genanki, random

# Generate these ONCE, then hardcode — stable IDs let users re-import updates

MODEL_ID = random.randrange(1 << 30, 1 << 31) \# e.g. 1607392319

DECK_ID = random.randrange(1 << 30, 1 << 31)

basic = genanki.Model(MODEL_ID, 'Basic',

fields=[{'name': 'Q'}, {'name': 'A'}],

templates=[{'name': 'Card 1', 'qfmt': '{{Q}}',

'afmt': '{{FrontSide}}<hr id="answer">{{A}}'}],

css='.card { font-family: Arial; font-size: 20px; text-align: center; }')

deck = genanki.Deck(DECK_ID, 'Biology :: Cell Structure')

deck.add_note(genanki.Note(model=basic,

fields=['What organelle produces ATP?', 'Mitochondria']))

# Cloze uses built-in model — second field required (can be empty) since 0.13.0

deck.add_note(genanki.Note(model=genanki.builtin_models.CLOZE_MODEL,

fields=['The {{c1::mitochondria}} produces {{c2::ATP}}', '']))

genanki.Package(deck).write_to_file('cells.apkg')

```

**Gotchas:** Fields are HTML — `html.escape()`any user content with`<`,`>`,`&`. For images/audio, set`package.media_files = ['diagram.png']`and reference by **basename only** in the field:`<img src="diagram.png">`(paths break). Stable GUIDs let re-imports update cards in place — subclass`Note`and override`guid` to hash only the question field.

**Quizlet/CSV fallback:** Tab-separated, one card per line: `question\tanswer\n`. Quizlet imports directly. Also works for Anki's File → Import → Text.

## Output: Always Build a Web App

**Every flashcard generation MUST produce an interactive web app as the primary output.**Do not output cards as plain text or markdown — always build a React + Vite single-page app with**two modes** the user can switch between:

### Mode 1: Flashcard Review

1. **Card display** — show front of card, flip to back on click or spacebar
2. **SM-2 grading**— four buttons: Again (1), Hard (3), Good (4), Easy (5), wired to the SM-2 algorithm above.**Grading and accuracy:** grades 3-5 (Hard, Good, Easy) count as "correct"; grade 1 (Again) counts as "incorrect". Accuracy is calculated per session as `(correct / reviewed) * 100`. This resets on page reload; review progress (intervals, due dates) persists in localStorage.

3. **Spaced repetition queue** — `localStorage`persistence for`{cardId: {n, EF, I, due}}`. **Card ordering:**previously reviewed cards that are due appear first, sorted by due date (most overdue first). New (unseen) cards are**shuffled randomly each session**using**Fisher-Yates shuffle** (the only unbiased O(n) shuffle algorithm — naive`array.sort(() => Math.random() - 0.5)` produces biased distributions). Never present new cards in a fixed order — it creates a false sense of learning tied to sequence rather than recall.
4. **Session stats** — cards reviewed, accuracy %, cards due tomorrow, total remaining

5. **Card type support** — render Basic Q→A, Cloze (hide blanked terms), and Reversed cards correctly
6. **Flip animation** — CSS 3D transform, keyboard shortcuts (Space to flip, 1/2/3/4 for grading)

7. **Card difficulty indicators** — show a visual indicator (colored dot or badge) on each card based on its current ease factor. Green for EF ≥ 2.5 (easy), yellow for 1.8 ≤ EF < 2.5 (moderate), red for EF < 1.8 (hard). Helps users see at a glance which cards they're mastering vs. struggling with.
8. **Leech detection** — track how many times a card has been graded Again (1). If a card is reset more than 4 times, flag it as a "leech" with a visual warning (e.g., a ⚠️ icon). Leeches are almost always malformed cards that should be rewritten, not drilled harder. Optionally offer a "Rewrite this card" prompt.

9. **Daily new card limit** — enforce a configurable daily limit for new (unseen) cards, defaulting to 20. Store the count in localStorage with today's date. Once the limit is reached, only show review cards. This prevents users from overwhelming themselves — the review debt from too many new cards becomes unsustainable by week 3.
10. **Study streak** — track consecutive days of study in localStorage. Display a streak counter (e.g., "🔥 5-day streak") in the session stats area. A day counts if the user reviews at least 1 card. Streaks reset if a day is missed. Streaks are a proven motivator for building daily review habits.

### Mode 2: AI Quiz

An AI-powered quiz mode that generates and grades questions:

1. **Quiz setup** — user picks a topic (or all topics) and number of questions (5, 10, 20, custom)
2. **Question generation**— use AI integrations to generate N questions from the card material. Mix question types: multiple choice, short answer, and true/false. Questions should test understanding and application, not just recall.**Difficulty progression:** start with easier recall-level questions and ramp up to application/analysis questions as the quiz progresses. This builds confidence and mirrors real exam structure.

3. **Answer & grade** — user answers each question, then AI grades the response with a score and explanation of what was right/wrong
4. **Quiz results** — summary screen with overall score, per-question breakdown, and which topics need more work

5. **Weak spot feedback**— highlight topics where the user scored lowest and suggest reviewing those flashcards.**Link back to flashcard mode:** include a "Review these cards" button next to weak topics that switches to flashcard mode pre-filtered to that topic. This closes the learn-test-review loop.

### Mode 3 (Optional): Card Import from Notes

If the user wants to create their own cards, offer a text import mode:

1. **Paste area** — user pastes notes, bullet points, or prose into a text area
2. **AI card generation** — use AI integrations to parse the text and generate flashcards following Wozniak's minimum information principle. Output Basic Q→A and Cloze cards.

3. **Review before adding** — show the generated cards in an editable list. Let the user approve, edit, or delete each card before adding to the deck.
4. **Merge into deck** — approved cards get added to the main deck with fresh SM-2 state (n=0, EF=2.5, I=0).

### UI/UX Requirements

- **Tab or toggle** to switch between Flashcard and Quiz modes
- **Clean, focused design** — one card or question centered on screen, no clutter

- **Mobile-friendly** — responsive layout, touch targets
- **Topic/deck selector** — filter by topic in both modes

- **Progress indicator** — card counter in flashcard mode, question progress bar in quiz mode
- **Progress history** — store daily review counts and accuracy in localStorage. Optionally display a simple chart or heatmap showing review activity over the past 30 days. This gives users a sense of long-term progress beyond the current session.

## Best Practices

1. **Minimum information principle trumps everything** — when in doubt, split the card
2. **Cloze is the default for prose** — fastest path from notes to reviewable cards

3. **Never make set-enumeration cards** — "list all X" → overlapping cloze instead
4. **30 great cards > 100 mediocre ones** — review burden compounds; every bad card costs minutes over months

5. **Cap new cards at ~20/day** — the review debt from 100 new cards/day becomes unsustainable by week 3
6. **Interleave topics in the card data array** — when hardcoding cards, mix topics throughout the array rather than grouping all cards of one topic together. Even with shuffle logic, interleaving ensures better variety if the shuffle ever fails or is bypassed

## Technical Notes

- **Fisher-Yates shuffle implementation:** When shuffling new cards, always use the Fisher-Yates (Knuth) algorithm. The naive `array.sort(() => Math.random() - 0.5)` approach produces biased distributions where some orderings are significantly more likely than others. Correct implementation:

```typescript

function fisherYatesShuffle<T>(arr: T[]): T[] {

const shuffled = [...arr];

for (let i = shuffled.length - 1; i > 0; i--) {

const j = Math.floor(Math.random() * (i + 1));

[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];

}

return shuffled;

}

```

- **localStorage size limits** — localStorage has a ~5MB limit per origin. For small-to-medium decks (<500 cards), this is fine. For large decks (500+ cards) with extensive review history and progress tracking, consider using IndexedDB as a fallback. At minimum, store only essential SM-2 state per card (`{n, EF, I, due, lapses}`) — avoid storing full review logs in localStorage.
- **React hook ordering** — when implementing the spaced repetition hook, declare all React hooks (`useState`,`useRef`,`useMemo`,`useEffect`) at the top of the function before any conditional logic. Adding hooks between existing hooks during iteration (e.g., inserting a`useRef`between`useMemo` calls) will crash React's HMR during development. The order must be stable across renders.

## Limitations

- Cannot read existing `.apkg` files (genanki is write-only); cannot sync to AnkiWeb
- Cannot track review history across sessions unless building a persistent app (use localStorage or IndexedDB for client-side persistence)

- Verify generated content for specialized domains — confident-sounding wrong cards are worse than no cards
