---
name: meal-planner
description: Create personalized meal plans with macros, shopping lists, and prep guides.
---

# Meal Planner & Fitness Schedule

Create personalized meal plans with calculated macro targets, shopping lists, and training schedules.

**DISCLAIMER: General nutrition and fitness information only — not medical or dietetic advice. Users with medical conditions, eating disorder history, pregnancy, or on medications should consult a registered dietitian or physician.**

## When to Use

- User wants a weekly meal plan hitting specific macros
- User needs a shopping list generated from a plan

- User wants a training split paired with nutrition
- User wants to adjust an existing plan (plateau, weight change, preference change)

## When NOT to Use

- Medical dietary needs (renal, diabetic, celiac management) → refer to RD
- Single recipe creation → use recipe-creator skill

- Health data analysis → use personal-health skill

## Overlap with recipe-creator Skill

When a meal in the plan is complex enough to need step-by-step instructions (e.g., "Chicken Parmesan"), the meal-planner skill defines *what* to eat and *when*; the recipe-creator skill builds the full recipe (ingredients, steps, timers, timeline). If the user's project has a recipe database, link meals to recipe IDs. If standalone, embed simplified cooking notes in the meal item.

## Step 1: Gather Inputs — Full Profile

### Required

- Goal: fat loss / maintenance / muscle gain
- Sex, age, height, weight

- Activity level (see multiplier table below)
- Dietary restrictions / allergies

### Eating Schedule & Preferences (ask explicitly)

These inputs have the biggest impact on adherence. Do not skip them.

| Input | Why it matters | Example |

|---|---|---|

| **Eating window / fasting pattern** | Determines number of meals, slot names, and calorie distribution. IF (16:8, 20:4, OMAD) users skip breakfast entirely — never plan meals outside their window. | "I skip breakfast, first meal at noon" |

| **Meals-per-day preference** | Some people want 3 big meals, others want 5 smaller ones. Respect this. | "4 meals" |

| **Food preferences / cuisine** | Build around foods the user already likes. Ask: "What are 5 meals you eat regularly and enjoy?" and "Any foods you hate?" | "I like burgers, burritos, stir-fry" |

| **Cooking time per meal** | Determines complexity. 15 min = sheet pan & stir-fry only. 45 min = full recipes. | "30–45 min max" |

| **Budget** | Affects protein source choices (chicken thigh vs. salmon) and organic vs. conventional. | "Moderate" |

| **Cooking skill** | Beginner = fewer techniques, clearer instructions. Advanced = more variety. | "Intermediate" |

| **Household size** | Affects portion scaling and shopping quantities. | "Cooking for 1" |

### Dynamic Meal Slots

**Do not hardcode meal names.** Derive slot names and timing from the user's eating window:

| Pattern | Slots | Timing |

|---|---|---|

| Standard 3-meal | breakfast, lunch, dinner | 7am, 12pm, 6:30pm |

| Standard + snacks | breakfast, snack-am, lunch, snack-pm, dinner | 7am, 10am, 12pm, 3pm, 6:30pm |

| 16:8 IF (noon start) | lunch, snack, dinner, evening | 12pm, 3pm, 6:30pm, 8:30pm |

| 20:4 IF | meal-1, meal-2 | 4pm, 7pm |

| OMAD | dinner | 6pm |

| Morning faster + pre-bed | lunch, snack, dinner, pre-bed | 12pm, 3pm, 6:30pm, 9:30pm |

Calorie distribution should match the window: for 4-meal IF, roughly 30% / 12% / 35% / 23% across slots (larger meals at lunch and dinner, lighter snacks). Adjust to keep protein per-meal at 0.3–0.4 g/kg (~25–50g) for optimal MPS distribution.

If body fat % is known, use Katch-McArdle instead of Mifflin-St Jeor — it's more accurate for lean or obese individuals.

## Step 2: Calculate Energy Target

**Mifflin-St Jeor BMR** (validated as most accurate predictive equation for the general population, ±10% for most adults):

```text

Men: BMR = (10 × weight_kg) + (6.25 × height_cm) − (5 × age) + 5

Women: BMR = (10 × weight_kg) + (6.25 × height_cm) − (5 × age) − 161

```

**Katch-McArdle** (use if body fat % is known — more accurate at body-composition extremes):

```text

BMR = 370 + (21.6 × lean_mass_kg) where lean_mass_kg = weight_kg × (1 − bodyfat%)

```

**TDEE = BMR × activity multiplier:**

| Level | Multiplier | Description |

|---|---|---|

| Sedentary | 1.2 | Desk job, minimal deliberate exercise |

| Lightly active | 1.375 | 1–3 sessions/week |

| Moderately active | 1.55 | 3–5 sessions/week |

| Very active | 1.725 | 6–7 sessions/week |

| Extra active | 1.9 | Athlete or physical labor + training |

People consistently overestimate their activity — when in doubt, pick the lower multiplier and adjust upward after 2 weeks of real-world data.

**Goal adjustment:**

- Fat loss: TDEE − 20–25% (typically 400–600 kcal deficit). Targets ~0.5–1% bodyweight/week. Steeper deficits accelerate muscle loss.
- Maintenance: TDEE ± 0

- Muscle gain: TDEE + 10–15% (typically 200–400 kcal surplus). Larger surpluses mostly add fat, not muscle, in trained individuals.

## Step 3: Set Macros — Evidence-Based Targets

### Protein (set this first, in g/kg — not as a percentage)

| Goal | Target | Evidence |

|---|---|---|

| General health / sedentary | 0.8–1.2 g/kg | RDA is 0.8 g/kg — the minimum to prevent deficiency, not an optimum |

| Muscle gain + resistance training | **1.6–2.2 g/kg** | Morton et al. 2018 meta-analysis (49 RCTs, n=1,863, *BJSM*): gains in fat-free mass plateau at 1.62 g/kg/day (95% CI: 1.03–2.20). The upper CI bound (~2.2 g/kg) is recommended for those maximizing hypertrophy. Confirmed by Nunes et al. 2022 (74 RCTs). |

| Fat loss (preserving lean mass) | 1.8–2.7 g/kg | Higher end of range compensates for the muscle-sparing effect of protein during energy deficit |

| Endurance athletes | 1.2–1.6 g/kg | ISSN position stand |

In imperial: 1.6–2.2 g/kg ≈ 0.7–1.0 g/lb. Distribute across 3–5 meals at 0.3–0.4 g/kg per meal (~25–40 g) — muscle protein synthesis response plateaus per-sitting.

### Fat

Minimum ~0.5 g/kg bodyweight (hormone synthesis floor). Typical range 0.8–1.2 g/kg, or 20–35% of calories. Going below 20% long-term risks fat-soluble vitamin and hormone issues.

### Carbohydrates

Fill remaining calories after protein and fat are set. `carbs_g = (target_kcal − protein_g×4 − fat_g×9) / 4`

### Fiber

**14 g per 1,000 kcal** (Dietary Guidelines for Americans) — roughly 25 g/day for women, 38 g/day for men at maintenance. Most plans undershoot this. Check it explicitly.

## Step 4: Build the Plan

### Food Selection Philosophy

**Adherence-first meal design** — build meals around foods the user already eats and enjoys. The goal is to fit their existing food culture into their macro targets, not to impose a "clean eating" template.

- **Use their stated preferences** — if they said they like burritos, build a macro-friendly burrito bowl. Don't replace it with a salad.
- **Flavor over restriction** — use real cheese, butter, sauces in controlled portions rather than eliminating them. A plan that tastes good gets followed.

- **Practical portions** — specify gram weights for precision but also include household measures (e.g., "200g / ~1 cup cooked") so people without scales can approximate.
- **Protein anchoring** — every meal should have a clear protein source as its anchor. Build the rest of the plate around it.

- **Vegetable integration** — don't just add a side salad. Integrate vegetables into the meal itself (peppers in a stir-fry, spinach in a smoothie, roasted broccoli with garlic butter). This is especially important for users who say they don't like vegetables.

### Variety & Repetition Balance

Rotate 3–4 templates per meal slot across the week — enough variety to prevent burnout, enough repetition to keep prep and shopping simple. The sweet spot:

- **2–3 lunch templates** — repeat 2–3 times each across the week
- **5–6 dinner templates** — one unique dinner most nights (this is where people want variety)

- **2–3 snack templates** — these can repeat heavily; people don't mind eating the same snack daily
- **1–2 evening/pre-bed options** — simple, protein-focused, low effort

```text

## Monday — Target: 2,400 kcal | 186P / 225C / 84F (16:8 IF, noon start)

Lunch (710 kcal): Chicken burrito bowl — chicken thigh 170g + rice 200g + black beans 80g + salsa + cheese 25g + avocado 40g → 48P / 78C / 22F

Snack (310 kcal): Greek yogurt 200g + honey 10g + almonds 20g → 24P / 22C / 14F

Dinner (710 kcal): Garlic butter steak & potatoes — sirloin 200g + baby potatoes 250g + roasted broccoli 120g + butter 10g → 58P / 52C / 30F

Evening (630 kcal): Protein shake — whey 35g + banana + PB 20g + milk 250ml + oats 30g → 48P / 62C / 20F

Daily total: 2,360 kcal | 178P / 214C / 86F | Fiber: ~21g

```

**Nutrition data sources** — for accurate macros, query the USDA FoodData Central API rather than guessing:

- Base URL: `https://api.nal.usda.gov/fdc/v1/` — free API key from api.data.gov, 1,000 req/hr limit
- Search: `GET /foods/search?query=chicken breast&api_key=KEY`

- Lookup: `GET /food/{fdcId}?api_key=KEY` returns full nutrient profile per 100g
- Python clients on PyPI: `fooddatacentral` (simple), `usda-fdc` (includes DRI comparison + recipe aggregation)

- Data is public domain (CC0). Branded foods update monthly.

## Step 5: Shopping List

Aggregate ingredients across all days, round to purchasable units, organize by store section:

```text

PROTEINS: Chicken thighs 800g · Chicken breast 700g · Sirloin steak 400g · Salmon 180g · Eggs 1 dozen

DAIRY: Greek yogurt 550g · Cottage cheese 450g · Cheddar cheese 105g · Whole milk 750ml

PRODUCE: Bananas 4 · Bell peppers 4 · Broccoli 1 head · Avocado 2 · Baby potatoes 250g

GRAINS/PANTRY: White rice 1kg · Flour tortillas 8 · Oats 90g · Black beans 1 can

NUTS/OILS: Peanut butter 1 jar · Almonds 20g · Olive oil · Honey

```

**Aggregation rules:**

- Combine same ingredients across days (e.g., 3 days × 200g rice = 600g → round to 1kg bag)
- Use purchasable units (1 can, 1 bunch, 1 dozen) not fractional quantities

- Group by store section for efficient shopping flow
- Note items that can be bought frozen for longer shelf life

## Step 6: Meal Prep Logistics

**Single prep session (Sun, ~90 min):** Cook all grains. Roast two sheet-pans of proteins + veg. Portion into containers. Prep overnight oats for 3 days.

**USDA-backed refrigerated shelf life:** cooked poultry/meat 3–4 days · cooked fish 3–4 days · cooked grains 4–6 days · cut raw veg 3–5 days. Freeze anything for day 5+.

**Prep guide format:** Number each step with estimated time (active + passive). Group by what can run in parallel (e.g., "while rice cooks, grill chicken"). The prep guide should feel like a cooking flow, not a to-do list.

## Step 7: Hydration & Supplements

### Hydration

General target: **~35 ml per kg bodyweight** per day (e.g., 93 kg × 35 = 3.25 L). Increase by 500–750 ml on training days. Signs of adequate hydration: pale yellow urine by mid-morning.

Practical tips: keep a water bottle at the desk, drink 500 ml upon waking, have 250 ml with each meal.

### Supplements (evidence-supported only)

Only recommend supplements with strong evidence. Do not recommend proprietary blends or unproven supplements.

| Supplement | Dose | Evidence | Who needs it |

|---|---|---|---|

| Creatine monohydrate | 3–5 g/day, no loading needed | Most-studied supplement in sports nutrition. Increases strength, lean mass, and exercise capacity (ISSN position stand, 2017). | Anyone doing resistance training |

| Vitamin D3 | 1,000–2,000 IU/day | Widespread deficiency, especially at higher latitudes. Supports bone health, immune function, and may support muscle function. | Most people, especially if limited sun exposure |

| Omega-3 (EPA/DHA) | 1–2 g combined EPA+DHA/day | Anti-inflammatory, cardiovascular benefits. Only if fish intake is <2 servings/week. | People who don't eat fish regularly |

| Magnesium | 200–400 mg/day (glycinate or citrate) | Common deficiency. Supports sleep, muscle recovery, stress. | If dietary intake is low (common on calorie deficits) |

Do NOT recommend: testosterone boosters, fat burners, BCAAs (redundant if protein is adequate), collagen for muscle building, "detox" products.

## Step 8: Plan Adjustments Over Time

### When to Recalculate

Plans are not static. Build in adjustment checkpoints:

| Trigger | Action |

|---|---|

| **After 2 weeks** | Compare average weekly weight loss rate to target. If losing >1.5% BW/week, increase calories by 100–200. If weight is flat, decrease by 100–200 or verify tracking accuracy first. |

| **Every 5 kg (~11 lbs) of weight change** | Recalculate BMR and TDEE — they decrease as body mass drops. A 10 lb loss typically reduces TDEE by ~100–150 kcal. |

| **Plateau (>3 weeks no change in 7-day rolling average)** | First check: are portions actually being measured? Calorie creep from eyeballing is the \#1 cause. Then: add 1–2 cardio sessions/week OR reduce calories by 100–150. Do NOT slash calories aggressively. |

| **Goal reached** | Reverse diet: increase calories by 100/week back toward maintenance over 4–6 weeks. Do not jump straight to TDEE — leptin and metabolic adaptation need time. |

| **Taste fatigue / boredom** | Swap out stale meals using alternatives from the same slot. Keep the same macros — change the food, not the structure. |

### Weight Tracking Guidance

Daily weight fluctuates ±1–2 kg (2–4 lbs) from water, glycogen, gut contents, sodium intake, and menstrual cycle. This is normal and not fat gain.

- **Weigh daily**, same time (after waking, after bathroom, before eating)
- **Use a 7-day rolling average** — this is your actual trend line

- **Compare weekly averages**, not individual days
- **Expect a 2–4 lb drop in week 1** that's mostly water/glycogen, not fat. Real fat loss rate starts from week 2–3.

## Fitness Schedule (Condensed)

**Beginner (<6 mo): Full body 3×/week** (Mon/Wed/Fri). Each session: 1 squat pattern, 1 hinge, 1 push, 1 pull, 1 carry/core. 3×8–12. Simplest progression: add 2.5 kg when all sets hit the top of the rep range.

**Intermediate (6 mo–2 yr): Upper/Lower 4×/week.** Mon upper-push emphasis, Tue lower-quad, Thu upper-pull, Fri lower-hinge.

**Advanced: Push/Pull/Legs 5–6×/week.**

**Volume guidelines** (per muscle group per week, meta-analytic consensus): 10–20 hard sets for hypertrophy. Below 10 is maintenance; above 20 shows diminishing returns and rising injury risk for most.

**Rep ranges:** 3–6 strength-biased · 6–15 hypertrophy (all ranges build muscle if taken near failure; hypertrophy is not rep-range-specific) · 15+ endurance-biased.

**Progressive overload is mandatory** — log every session. No log → no plan.

**Recovery:** ≥1 full rest day/week. 7–9 hrs sleep. Deload (−40–50% volume) every 4–6 weeks.

**Cardio:** General health → 150 min/week moderate (WHO guideline). Fat-loss phase → add 2–3 × 20–30 min sessions, steady-state or intervals. Muscle-gain phase → keep cardio to 1–2 light sessions to minimize interference.

## Output: Always Build a Visual Web App

**Every meal plan MUST be delivered as an interactive React + Vite web app.** Do not output plans as plain text or markdown — always build and deploy a visual website.

### Design Philosophy: Mobile-First

Most people use a meal planner in the kitchen (cooking), at the grocery store (shopping), or in bed (planning). **Design for a phone screen first, then scale up.**

- **Single-column layout** on mobile — no multi-column calendar grids that require horizontal scrolling
- **Day selector** as a horizontal scrollable pill bar at the top (not a 7-column grid)

- **Meal cards** are full-width, showing meal name, time, calories, and protein at a glance — tap to expand for full detail
- **Bottom navigation** for section switching (Plan / Shop / Prep)

- **Sticky headers** for context while scrolling

### Core Layout: Dashboard + Day View

1. **Dashboard (home)** — overview of the current week:

- Progress card (weight goal, deficit, timeline)
- Day selector (horizontal pills showing day name + total kcal)

- Macro rings/charts for selected day (protein, carbs, fat vs targets)
- Meal cards for selected day (compact: name, time, kcal, protein — tap to drill in)

- Weekly averages card at the bottom

1. **Day detail** — drill into a specific day:

- Macro summary bar (4-up: kcal, P, C, F with targets)
- Expanded meal cards showing all food items with portions

- Per-meal macro breakdown (color-coded: protein=green, carbs=amber, fat=blue)

1. **Shopping list tab** — aggregated by store section:

- Checkboxes for each item (state persists during session)
- Progress counter (checked/total)

- Organized by store section (Proteins, Dairy, Produce, Grains/Pantry, Nuts/Oils)

1. **Prep guide tab** — Sunday meal prep session:

- Hero card explaining the prep concept and total time
- Numbered steps with time estimates and descriptions

- Organized as a cooking flow (what to do while waiting for passive cook times)

### Multiple Options & Cycling

- **Meal swaps** — for each meal slot, offer 2–3 alternatives the user can click to swap in. Show a small "swap" icon on each meal card that reveals alternatives in a dropdown or modal.
- **Rotation plans** — if the user wants variety (e.g., "don't repeat the same dinner twice in 2 weeks"), build a 2-week rotation with different week tabs.

- **High/low day cycling** — for carb cycling or calorie cycling plans, label each day (e.g., "High Day — 2,400 kcal" vs "Low Day — 1,800 kcal") and color-code the day header accordingly.

### UI/UX Requirements

- **Clean, appetizing design** — health-focused color palette (greens, warm neutrals), rounded cards, readable portions
- **Mobile-first** — single column on mobile, expanding gracefully on desktop

- **Tap to expand** — meal cards expand on tap to show full ingredient list and nutrition detail
- **Bottom navigation** — persistent bottom nav bar for Plan / Shop / Prep (hidden on detail/drill-in pages)

- **Sticky headers** — keep context (day name, section title) visible while scrolling

### Data Architecture

Embed all plan data as JSON in the app (no backend needed):

```typescript

interface MealPlan {

weeks: Week[];

profile: {

goal: string;

currentWeight: number;

targetWeight: number;

bmr: number;

tdee: number;

target_kcal: number;

deficit: number;

macros: Macros;

projectedWeeks: number;

};

shoppingList: ShoppingSection[];

prepGuide: PrepStep[];

}

interface Week {

label: string;

days: Day[];

}

interface Day {

name: string;

label?: string; // "High Day", "Rest Day", "Meal Prep Day", etc.

target_kcal: number;

meals: Meal[];

}

interface Meal {

slot: string; // dynamic: "lunch", "snack", "dinner", "evening", "meal-1", etc.

name: string;

items: { food: string; portion: string }[];

macros: Macros;

alternatives?: Meal[];

}

interface Macros {

protein: number;

carbs: number;

fat: number;

fiber: number;

kcal: number;

}

interface ShoppingSection {

section: string;

items: { item: string; qty: string }[];

}

interface PrepStep {

step: string;

time: string;

description: string;

}

```

## Best Practices

1. **Adherence beats optimization** — a 90%-adhered B+ plan beats a 50%-adhered A+ plan. Build around foods the user already likes.
1. **Protein is the anchor macro** — set it in g/kg first, then fill carbs/fat by preference.

1. **Budget a 10% flex buffer** — plans that forbid all unplanned food get abandoned. If someone goes 200 kcal over one day, the plan should still work over the week.
1. **Re-calculate TDEE after weight changes ~5 kg** — BMR shifts with body mass.

1. **Track for 2 weeks before adjusting** — daily weight fluctuates ±1–2 kg from water/glycogen/gut contents. Use a 7-day rolling average.
1. **Respect the eating window** — never schedule meals outside the user's stated eating window. If they fast until noon, the first meal is lunch, not "late breakfast."

1. **Make vegetables invisible** — for users who don't love vegetables, integrate them into meals (spinach in smoothies, peppers in stir-fries, zucchini in pasta sauce) rather than serving them as plain sides.
1. **Protein in every meal** — every single meal/snack should have a meaningful protein source (≥20g). No meal should be carbs + fat only.

1. **Evening meals matter** — casein protein, cottage cheese, Greek yogurt, and protein puddings are ideal pre-bed options. They're slow-digesting and satisfy sweet cravings.

## Limitations

- Nutritional values are estimates (±10–15% even with USDA data — portion eyeballing adds more error)
- TDEE formulas are population averages with ~10% individual error — real-world tracking over 2–3 weeks is the only way to find someone's true maintenance

- Not a substitute for a registered dietitian, especially for medical conditions, disordered eating history, or pregnancy
- Training templates are generic — modify around injuries and individual response

- Hydration needs vary significantly with climate, altitude, and individual physiology
- Supplement recommendations are general — individual needs vary based on bloodwork and existing diet
