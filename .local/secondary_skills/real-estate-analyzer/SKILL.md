---
name: real-estate-analyzer
description: Evaluate properties, investment returns, mortgage affordability, and rent vs. buy decisions.
---

# Real Estate Analyzer

Analyze properties, neighborhoods, and real estate investment opportunities for home buyers and investors. Evaluate listings, estimate fair value, assess neighborhoods, model investment returns, compute mortgage affordability, compare renting vs. buying, analyze HOAs, model exit scenarios, and assess market conditions.

## When to Use

- User wants to evaluate a property listing for purchase
- User asks about neighborhood quality, schools, or safety

- User wants to compare properties or neighborhoods
- User needs help estimating if a home is fairly priced

- User wants to analyze a property as an investment (rental yield, appreciation)
- User asks about mortgage affordability, monthly payments, or how much house they can afford

- User wants to understand PITI breakdown, DTI ratios, or down payment scenarios
- User asks "should I rent or buy?" or wants to compare owning vs. renting

- User asks about selling a property, net proceeds, or when to sell ("how much will I net if I sell?")
- User has HOA-related questions (fees too high, special assessments, reserve fund status)

- User asks about house flipping, BRRRR strategy, or fix-and-flip analysis
- User asks about housing market timing ("is it a good time to buy?", "is the market going up or down?")

- User asks about closing costs, what they need to close, or total cash required to buy
- User asks about flood zones, insurance costs, or whether a property needs flood insurance

## When NOT to Use

- Legal review of purchase agreements (use legal-contract skill)

## Methodology

### Step 0: Verify Listing Status & Asking Price (CRITICAL — Do This First)

Before any analysis, confirm the property's listing status and asking price. **Never assume a property is off-market.** Never run financial analysis based solely on an algorithm-generated estimate when an actual asking price may exist.

#### Verification procedure

1. **Attempt to fetch the listing URL** provided by the user using `webFetch`. Try with`renderJs: true` first, then without.
2. **If the listing page fails to render** (common with Zillow, Redfin, Realtor.com which block scraping), search for the property across multiple sources:

- `webSearch` the full address + "price" + "listing"
- Try Redfin, Zillow, Realtor.com, and local MLS aggregators

1. **If search results conflict or are ambiguous**about whether the property is active, pending, sold, or off-market —**ask the user to confirm**:

- "I'm having trouble pulling the listing details. Can you confirm: Is this property currently listed for sale? If so, what's the asking price?"

1. **If the user provided a listing URL**, treat the property as actively listed unless you have strong evidence otherwise. Listing URLs from Zillow, Redfin, or Realtor.com imply the user is looking at an active listing.

##### What to confirm before proceeding

- Listing status: Active, Pending, Contingent, Sold, or Off-Market
- Asking price (if active)

- Basic details: beds, baths, sqft, year built, HOA (if applicable)

**If web scraping fails for all sources**, ask the user directly:

> "I wasn't able to pull the listing details automatically. Could you share the key details from the listing page? I need: asking price, beds/baths, square footage, year built, and HOA fees (if any)."

###### Pricing hierarchy — which price to use for analysis

1. **Asking price** — always use the actual listing price when available. This is what the seller is asking and what a buyer will negotiate against.
2. **Pending/contract price** — if under contract, note this and use the last known asking price.

3. **Estimated value** — only use algorithm estimates (Zestimate, Redfin Estimate) when the property is genuinely off-market with no asking price. Always label estimates clearly as estimates, not asking prices.

**Throughout the entire report**, clearly distinguish between asking price and estimated value. Label every price reference with its source: "Asking: $629,000" vs. "Redfin Estimate: $661,000". Never present an estimate as if it were a listing price.

### Step 1: Property Assessment

Gather and evaluate listing details:

#### Basic Details

- Address, price, square footage, lot size
- Bedrooms, bathrooms, year built

- Property type (single-family, condo, townhouse, multi-family)
- Days on market, price history, price reductions

##### Price History (required — pull the full timeline)

Do not just note the current asking price. Reconstruct the full pricing timeline:

- Original list price and original list date
- Every price reduction: date, old price, new price, percentage drop

- Any delisting/relisting history (taken off market and relisted = reset of DOM clock — a red flag)
- Previous sale price and date (county assessor or Zillow "Price & tax history")

- Calculate: total price change from original list to current ask (e.g., "Listed at $729K, cut twice to $629K = 13.7% total reduction over 4 months")

**Why this matters:** A property at $629K that started at $629K signals confidence. A property at $629K that started at $800K and has been cut three times signals a motivated seller and potential overpricing — and gives the buyer leverage to negotiate further. Delist/relist patterns often indicate the seller is trying to reset days-on-market to hide stale inventory.

###### How to find price history

- Zillow: scroll to "Price and tax history" section on the listing page
- Redfin: "Property History" tab

- `webSearch "{address} price history"`or`"{address} price reduced"`
- County assessor for previous sale price and tax assessment history

###### Condition Indicators

- Age of major systems (roof, HVAC, water heater, electrical)
- Recent renovations or updates

- Foundation type and condition
- Photos analysis — look for staging tricks, unflattering angles, missing rooms

###### Red Flags

- Significantly below market price (could indicate undisclosed issues)
- Frequent ownership changes (flipped too fast?)

- "As-is" or "investor special" language
- Missing disclosures or incomplete listing info

- High DOM (days on market) without price reduction
- Multiple price reductions in quick succession (seller chasing a falling market)

- Delist/relist patterns (resetting DOM to hide stale inventory)

###### HOA Deep Dive (required for all condos, townhouses, and HOA communities)

HOA fees are often the single largest recurring cost after the mortgage — and the one most likely to increase unpredictably. Never accept the listing's HOA figure at face value. Investigate thoroughly.

###### What to gather

- **Exact monthly HOA fee** and what it covers (water, sewer, trash, cable/internet, building insurance master policy, reserves, amenities)
- **What's NOT covered** — if the master policy doesn't include HO6 interior coverage, the buyer still needs a separate condo insurance policy ($50-150/mo)

- **Fee history over the past 5 years** — webSearch `"{building name} HOA fee increase"` or ask the user. Annual increases of 3-5% are normal; 10%+ signals trouble.
- **Reserve fund status** — is the reserve fund fully funded (>70% of recommended), underfunded (40-70%), or critically underfunded (<40%)? Underfunded reserves = future special assessments.

- **Recent or pending special assessments** — one-time charges for major repairs (roof, elevator, structural, plumbing). These can be $5K-$100K+ per unit. In Florida post-Surfside, milestone structural inspections (at 25 and 30 years) are mandatory and frequently trigger large assessments.
- **Rental restrictions** — does the HOA limit rentals (e.g., "no rentals in first 2 years," "max 20% of units rented at any time," "no short-term rentals under 6 months")? This directly impacts investment viability.

- **Litigation status** — is the HOA currently involved in or threatening litigation? webSearch `"{building name} lawsuit"`or`"{building name} litigation"`.
- **Owner-occupancy ratio** — high investor/renter ratio (>50%) can make financing harder (some lenders require >50% owner-occupied) and signals different community dynamics.

###### How to find HOA details

- The listing itself (Zillow/Redfin often show monthly HOA amount)
- `webSearch "{building name} HOA" OR "{building name} condo association"`

- Building's own website (if any) — often has meeting minutes, financials, rules
- Florida: `myfloridalicense.com` for condo association filings

- Ask the user: "Can you check the listing for the HOA amount and what it includes? Also, does the listing mention any special assessments?"

###### Financial impact modeling

- Project HOA fees forward 5 and 10 years at both the building's historical increase rate AND at 8-10% annual growth (stressed scenario)
- Include HOA in the monthly payment breakdown prominently — for condos, total monthly cost = PITI + HOA + HO6 insurance

- Special assessments: if any are pending or rumored, add them to the total cash required at closing

### Step 2: Valuation Analysis

#### Pull comps — specific sources

- `webFetch`Redfin sold filter:`redfin.com/city/{id}/filter/include=sold-6mo` — recently sold within 0.5mi, ±20% sqft, same beds
- Zillow Research (`zillow.com/research/data/`) — free CSV downloads of ZHVI (home value index) and ZORI (rent index) by ZIP, monthly back to 1996

- County assessor website — webSearch `"{county name} property assessor {address}"` for tax-assessed value, last sale price, permit history. Assessed value is typically 70-90% of market value.
- Adjust comps: ±$15-40/sqft for size delta, ±$5-15k per bedroom, ±10-20% for condition

**Always compare asking price to estimated fair value.** Present both side-by-side:

- Asking price and $/sqft
- Comp-derived fair value and $/sqft

- Percentage difference (overpriced / underpriced / fairly priced)
- Automated estimates (Zestimate, Redfin Estimate) as secondary reference points

##### Affordability math (compute, don't estimate)

```python

# PITI at 30yr fixed — webSearch current rates (use Freddie Mac PMMS)

# PMMS reports percentage (e.g. 6.76), so divide by 100 first

P, r, n = loan_amount, annual_rate/100/12, 360

monthly_PI = P * (r*(1+r)**n) / ((1+r)**n - 1)

# + property tax (county rate × assessed value / 12)

# + homeowners insurance (~$150-250/mo, varies wildly by state)

# + PMI if <20% down (~0.5-1.0% of loan/yr)

```

- 28/36 rule: PITI <28% gross income, total debt <36%. Lenders stretch to 43% DTI — don't.
- Closing costs: 2-5% of purchase. Maintenance reserve: 1-2% of home value/yr.

### Step 3: Neighborhood Analysis

#### webSearch/webFetch targets (name the source, don't be vague)

- Schools: `greatschools.org/{state}/{city}` — rating ≥7 protects resale value even if user has no kids
- Crime: `crimemapping.com`or`spotcrime.com/{city}` — check 6-month trend, not just snapshot. NeighborhoodScout for demographic overlay.

- Walk/Transit/Bike Score: `walkscore.com/score/{address}`
- Flood: `msc.fema.gov/portal/search` — Zone A/AE/V = mandatory flood insurance ($400-3,000+/yr, often kills deals)

- Market velocity: Redfin Data Center — median DOM, sale-to-list ratio, months of supply. <3 months supply = seller's market.
- Future development: webSearch `"{city} planning commission agenda"`+`"{city} zoning map"` — a highway expansion or apartment rezoning next door changes everything

### Step 4: Investment Analysis — Run the Numbers

**All investment calculations must use the asking price (or confirmed purchase price), not algorithm estimates.** If the property is off-market, use the estimated value but label it clearly.

#### Quick-filter rules (kill deals fast)

- **1% rule**: monthly rent ≥ 1% of purchase price. Dead in coastal/HCOL markets — there, 0.5-0.7% is realistic and you're betting on appreciation, not cash flow.
- **50% rule**: operating expenses (NOT mortgage) eat ~50% of gross rent. Vacancy + repairs + management + taxes + insurance + capex reserve. Beginners always underestimate this.

- **70% rule (flips/BRRRR)**: max offer = (ARV × 0.70) − rehab cost. ARV = after-repair value from renovated comps.

##### Full underwriting (build in Python)

```text

Gross rent (use Rentometer or Zillow ZORI for the ZIP)

− Vacancy (5-8% typical; 10% conservative)

− Property management (8-10% of collected rent)

− Repairs/maintenance (~8% of rent)

− CapEx reserve (~5% — roof/HVAC/water heater sinking fund)

− Taxes + insurance

= NOI (Net Operating Income)

Cap rate = NOI / purchase price

→ <4%: you're buying appreciation, not cash flow

→ 4-6%: typical for A/B-class in growth metros

→ 6-8%: solid cash flow, B/C-class

→ >10%: either a great deal or a war zone — verify crime data

NOI − annual debt service (P+I) = annual cash flow

Cash-on-cash = annual cash flow / total cash in (down pmt + closing + rehab)

→ Target 8%+ CoC. Below that, an index fund wins with zero tenants.

```

###### DSCR (what lenders check for investment loans)

- DSCR = NOI / annual debt service. Lenders want ≥1.20-1.25× (2025 standard). <1.0 means rent doesn't cover the mortgage.
- DSCR loans (2025): ~6.5-7.5% rate, qualify on property income not W-2, typical max 75% LTV. How investors scale past 10 conventional mortgages.

**BRRRR stack**: Buy distressed (hard money, 7-14 day close) → Rehab → Rent → Refinance at 75% of new ARV into DSCR loan → pull most capital out → Repeat. Only works if `ARV × 0.75 ≥ purchase + rehab + holding costs`.

**Rent comps:** webSearch Rentometer free tier, or pull Zillow rentals for the ZIP and compute median $/sqft for same bed count.

### Step 5: Sensitivity Analysis & Breakeven Returns

Always include sensitivity analysis in every property report. This section stress-tests the investment under multiple scenarios and identifies the exact breakeven thresholds where the deal flips from loss to gain.

**All scenarios must use the asking price as the anchor point.** The sensitivity matrix should include the asking price as one of the columns, with discount scenarios below it and premium scenarios above if relevant.

#### Three-Scenario Comparison (required)

Model three scenarios side-by-side — Base Case, Stressed, and Worst Case. Vary the following inputs across scenarios:

| Input | Base Case | Stressed | Worst Case |

|---|---|---|---|

| Monthly Rent | Market median | 5-10% below median | 15-20% below median |

| Vacancy Rate | 8% | 10% | 12% |

| Repairs/Maintenance | 8% of gross rent | 10% | 12% |

| CapEx Reserve | 5% | 5% | 6% |

| Tax + Insurance | Current estimates | +10% increase | +20% increase |

| HOA (if applicable) | Current | +8% increase | +15% increase |

For each scenario, compute and display:

- Effective Gross Income
- Total Operating Expenses

- Net Operating Income (NOI)
- Cap Rate

- Annual Cash Flow (after debt service)
- Cash-on-Cash Return

- DSCR

##### Breakeven Analysis (required)

Compute and present these breakeven thresholds:

```text

Breakeven Rent = monthly rent needed for $0 annual cash flow

→ Formula: (annual_debt_service + fixed_opex) / ((1 - vacancy) * (1 - mgmt_pct) * 12 - variable_opex_pct * 12)

→ Compare to current market rent and show the gap

Rent for 8% Cash-on-Cash = monthly rent needed for target CoC return

→ target_cash_flow = 0.08 * total_cash_invested

→ target_NOI = target_cash_flow + annual_debt_service

→ solve for rent using same formula

Breakeven Purchase Price = price at which cap rate hits 4% and 5%

→ price_at_5pct_cap = NOI / 0.05

→ price_at_4pct_cap = NOI / 0.04

→ show discount needed from asking price

Breakeven Mortgage Rate = rate at which NOI covers debt service

→ iterate rates from 1% to 10% in 0.1% steps

→ find rate where annual P&I ≤ NOI

Annual Appreciation Needed = appreciation rate to offset annual cash losses

→ (total_annual_costs - effective_rental_income) / purchase_price

→ compare to local long-term average appreciation (typically 3-6%)

```

###### Sensitivity Matrix (required)

Build a rent vs. purchase price grid showing monthly cash flow at each intersection. Use 4-6 rent levels (from below-market to well-above-market) and 3-4 purchase prices. **The asking price must be one of the columns.** Include discount scenarios (e.g., 5% and 10% below asking) and at least one below-market price to show where the deal starts working. Color-code: green = positive cash flow, red = negative.

Example structure (for a $629K asking price):

```text

$500K $565K $600K $629K

$3,800/mo -$XXX -$XXX -$XXX -$XXX

$4,200/mo -$XXX -$XXX -$XXX -$XXX

$4,600/mo +$XXX -$XXX -$XXX -$XXX

$5,000/mo +$XXX +$XXX -$XXX -$XXX

$5,500/mo +$XXX +$XXX +$XXX -$XXX

$6,500/mo +$XXX +$XXX +$XXX +$XXX

```

###### Key Takeaway (required)

Summarize what the sensitivity analysis reveals — how far current conditions are from breakeven, whether any realistic combination of rent and price produces positive returns, and what would need to change for the deal to work.

### Step 6: Own vs. Rent Comparison

Always include an own-vs-rent comparison when analyzing a property the user might live in (not purely investment). Even for investment properties, this section helps frame the decision for potential tenants.

#### Monthly cost comparison (required)

Build a side-by-side table:

```text

Own Rent Equivalent

Mortgage (P&I) $X,XXX —

Property Tax $XXX —

Homeowners Insurance $XXX —

HOA / Condo Fee $X,XXX —

Flood Insurance $XXX —

Maintenance Reserve $XXX —

Monthly Rent — $X,XXX

Renter's Insurance — $XX

─────────────────────────────────────────────────

Total Monthly Cost $X,XXX $X,XXX

Monthly Delta (Own - Rent) +$X,XXX / -$X,XXX

```

Use the market-rate rent for a comparable unit in the same building or neighborhood (same beds/baths/sqft). Source from Zillow/Rentometer rent comps.

##### Equity build vs. opportunity cost (required)

The monthly payment difference isn't the whole story. Model two parallel paths over 5, 10, and 30 years:

```text

Path A — Buy:

- Home equity built (principal paydown from amortization schedule)
- Home appreciation (model at 3%, 5%, and local historical average)

- Tax benefits: mortgage interest deduction + property tax deduction (up to $10K SALT cap)
- Minus: closing costs at purchase (~3-5% of price)

- Minus: selling costs at exit (~5-6% of sale price)
- Minus: maintenance and repair costs over holding period (1-2% of value/year)

Path B — Rent + Invest the Difference:

- Take the difference: (down_payment + closing_costs) + (monthly_own - monthly_rent) each month
- Invest in a diversified index fund at 7% real return (10% nominal - 3% inflation)

- No selling costs, no maintenance, no property tax
- Minus: rent increases (model at 3-4% annual growth)

```

###### Breakeven timeline (required)

Compute the crossover point — the number of years at which Path A's total wealth exceeds Path B's total wealth. Present for multiple appreciation scenarios:

```text

Appreciation Rate Breakeven Year Notes

2% (pessimistic) XX years Renting wins for most hold periods

3% (national avg) XX years Breakeven in mid-range

5% (growth market) XX years Buying wins after X years

Local historical XX years Based on ZIP-level ZHVI data

```

If the breakeven exceeds 10 years or never occurs at realistic appreciation, state this clearly: "At current prices and rates, renting and investing the difference outperforms buying for any hold period under X years."

###### Key output line (always include in the verdict)

> "Owning costs $X,XXX/month more than renting an equivalent unit. To justify buying, you need the property to appreciate at X.X% annually — [above/below/in line with] the local historical average of X.X%."

### Step 7: Exit Scenario Modeling

Always include exit scenarios in every property report. Buyers need to understand their actual financial outcome when they sell — not just the monthly cash flow while they hold.

**Model exit at 3, 5, 7, and 10 years from purchase.** For each exit horizon, compute the complete financial picture:

```text

For each year (3, 5, 7, 10):

Projected Sale Price = purchase_price × (1 + annual_appreciation)^years

→ Model at three appreciation rates: pessimistic (2%), base (3-4%), optimistic (5-6%)

→ Use local ZIP-level ZHVI historical average as the "base" rate

Selling Costs = projected_sale_price × 5.5%

→ Agent commissions (2.5-3% buyer + 2.5-3% seller, post-NAR settlement)

→ Closing costs (title, transfer tax, doc stamps — varies by state)

→ Florida doc stamps: $0.70 per $100 of sale price (seller pays)

Remaining Loan Balance = compute from amortization schedule at month (years × 12)

→ Use the standard amortization formula, not an estimate

Net Proceeds = projected_sale_price - selling_costs - remaining_loan_balance

Total Cash Invested = down_payment + closing_costs_at_purchase + cumulative_negative_cash_flow (if investment)

→ For primary residence: down_payment + closing_costs + (monthly_own - monthly_rent) × months

Total Return = net_proceeds - total_cash_invested

Annualized ROI = ((net_proceeds / total_cash_invested)^(1/years) - 1) × 100

```

#### Present as a table (required)

```text

Exit Scenario: 3% Annual Appreciation

Year 3 Year 5 Year 7 Year 10

Sale Price $XXX,XXX $XXX,XXX $XXX,XXX $XXX,XXX

Selling Costs -$XX,XXX -$XX,XXX -$XX,XXX -$XX,XXX

Loan Balance -$XXX,XXX -$XXX,XXX -$XXX,XXX -$XXX,XXX

Net Proceeds $XX,XXX $XX,XXX $XX,XXX $XX,XXX

Total Invested $XXX,XXX $XXX,XXX $XXX,XXX $XXX,XXX

Profit/Loss +/-$XX,XXX +/-$XX,XXX +/-$XX,XXX +/-$XX,XXX

Annualized ROI X.X% X.X% X.X% X.X%

```

Generate this table for at least two appreciation rates (pessimistic and base case). If the property is negative cash flow, include the cumulative cash flow loss as part of total cash invested.

##### Breakeven hold period (required)

For each appreciation scenario, compute the minimum number of years the buyer must hold before net proceeds exceed total cash invested (including selling costs). State clearly:

> "At 3% appreciation, you need to hold at least X years to break even after selling costs. At 2% appreciation, you would lose $XX,XXX even after holding 10 years."

###### Early exit risk (flag if applicable)

If the breakeven hold period exceeds 5 years, flag this as a risk: the buyer is locked in. Job loss, divorce, relocation, or market downturns within the breakeven window result in a realized loss. This is especially relevant for condos in volatile markets.

### Step 8: Due Diligence Checklist

Before making an offer:

- [ ] Pre-approval letter from lender
- [ ] Professional home inspection ($300-500)

- [ ] Pest/termite inspection
- [ ] Title search for liens or encumbrances

- [ ] Survey (if boundaries unclear)
- [ ] Flood zone check (FEMA maps)

- [ ] Environmental concerns (radon, lead paint for pre-1978 homes)
- [ ] HOA review (financials, rules, pending assessments)

- [ ] Property tax history and assessment

### Step 9: Multi-Property Comparison (when analyzing 2+ properties)

When the user asks to evaluate multiple properties — or when presenting alternatives to a property that doesn't pencil — generate a side-by-side comparison. This is the most efficient way for a buyer to compare options.

#### Comparison table (required when 2+ properties are analyzed)

```text

Property A Property B Property C

Address 41 SE 5th St \#1116 XXX Example Ave XXX Other Blvd

Asking Price $629,000 $XXX,XXX $XXX,XXX

$/sqft $488 $XXX $XXX

Beds / Baths 2/2 X/X X/X

Sqft 1,289 X,XXX X,XXX

Year Built 2006 XXXX XXXX

HOA $1,277 $XXX $XXX

Monthly Payment (PITI+HOA) $5,799 $X,XXX $X,XXX

Est. Monthly Rent $4,200 $X,XXX $X,XXX

Cap Rate 0.52% X.XX% X.XX%

Cash-on-Cash -23.8% X.X% X.X%

DSCR 0.09x X.XXx X.XXx

Breakeven Rent $8,XXX $X,XXX $X,XXX

Own vs. Rent Delta +$1,599/mo +/-$XXX +/-$XXX

Exit Breakeven (yrs) XX years @ 3% XX years XX years

Walk Score 98 XX XX

Flood Zone AE (mandatory) X X

Recommendation Pass (investment) XXX XXX

```

##### Ranking & narrative (required)

After the table, rank the properties and explain why:

1. **Best for investment:** Property X — highest cap rate, positive cash flow at market rent
2. **Best for primary residence:** Property Y — lowest total monthly cost, best location scores

3. **Best risk-adjusted:** Property Z — best balance of cost, appreciation potential, and downside protection

###### When to proactively suggest comparisons

If a single property analysis reveals a clear "Pass" verdict, suggest the user provide 1-2 alternative properties for comparison. This transforms a rejection into actionable next steps:

> "This property doesn't pencil as an investment. Want to share 1-2 other listings you're considering? I can run the same analysis and show them side-by-side so you can compare."

## Output Format

Always present key findings and recommendations as a plaintext summary in chat, even when also generating files. The user should be able to understand the results without opening any files.

### Every report — whether chat summary, PDF, or web app — must include all sections below

#### Every report must clearly state the asking price (or note it as off-market) and label all price references with their source throughout

```text

# Property Analysis: [Address]

## Summary

- Listing Status: [Active / Pending / Off-Market]
- Asking Price: $XXX,XXX (or "Off-Market — Estimated Value: $XXX,XXX")

- Estimated Fair Value: $XXX,XXX — [Over/Under/Fair priced by X%]
- Recommendation: [Strong Buy / Buy / Hold / Pass]

## Property Details

[Key facts table — always include asking price prominently]

[Full price history: original list, reductions, delist/relist, previous sale]

## Valuation

[Comps analysis, asking price vs. comp-derived value, price per sqft comparison]

## HOA Analysis (condos/townhouses)

[Fee breakdown, what's covered, fee history, reserve status, special assessments, rental restrictions]

## Neighborhood

[Schools, safety, livability scores]

## Financial Analysis

[Monthly payment breakdown based on ASKING PRICE, investment returns if applicable]

## Own vs. Rent Comparison

[Monthly cost side-by-side, equity build vs. opportunity cost, breakeven timeline]

## Sensitivity Analysis & Breakeven Returns

[Three-scenario comparison table]

[Breakeven thresholds: rent, purchase price, mortgage rate, appreciation]

[Sensitivity matrix: rent vs. purchase price cash flow grid — anchored to asking price]

[Key takeaway summarizing what the numbers reveal]

## Exit Scenarios

[Net proceeds at 3, 5, 7, 10 year horizons at multiple appreciation rates]

[Breakeven hold period, early exit risk assessment]

## Risks & Concerns

[Red flags, upcoming expenses, market risks]

## Due Diligence Checklist

[Pre-offer verification items]

## Multi-Property Comparison (when 2+ properties analyzed)

[Side-by-side table, ranking, and narrative]

## Verdict

[2-3 sentence recommendation informed by all analysis sections]

[Include own-vs-rent key line and exit scenario context]

```

## Best Practices

1. **Verify the asking price first** — never skip Step 0. If scraping fails, ask the user. Never run an entire analysis on an algorithm estimate when the user gave you a listing URL that implies an active listing with a real asking price.
2. **Pull the full price history** — original list price, every reduction, delist/relist events, and previous sale. Price trajectory tells you more about seller motivation than the current asking price alone.

3. **Asking price is marketing** — only sold comps within 6 months matter for determining fair value, but all financial calculations must use the asking price (or negotiated price) as the basis.
4. **Clearly separate asking price from estimates** — every price reference in the report should be labeled. "Asking: $629K" and "Redfin Estimate: $661K" are different numbers with different meanings. Never conflate them.

5. **HOA is a deal-breaker you can't ignore** — for condos, the HOA deep dive is mandatory. Fee history, reserve fund status, special assessments, and rental restrictions can each independently kill a deal. A $1,277/mo HOA that's been rising 8% annually will be $1,875/mo in 5 years.
6. **Model three scenarios** — base case, stressed (10% vacancy + higher repairs), and worst case (below-market rent + 12% vacancy + inflated costs). The worst case should represent "tenant trashes it year 1" severity.

7. **Always compute breakevens** — never present investment analysis without showing exactly what rent, price, or rate would make the deal work. Breakevens turn a "pass" into actionable intelligence.
8. **Anchor the sensitivity matrix to the asking price** — the asking price must always be one of the columns. Discount scenarios show what happens if the buyer negotiates down.

9. **Always compare owning to renting** — the own-vs-rent comparison with opportunity cost modeling is essential for primary residence decisions. "Can I afford it?" is the wrong question. "Am I better off buying or renting and investing the difference?" is the right one.
10. **Model the exit before the entry** — never recommend buying without showing what happens when the buyer sells at 3, 5, 7, and 10 years. Selling costs (5-6%) wipe out years of appreciation for short holds. If the breakeven hold exceeds 5 years, flag the lock-in risk prominently.

11. **Offer comparisons, not just verdicts** — when a property is a "Pass," proactively suggest the user share alternative listings for side-by-side comparison. A rejection without alternatives is not helpful.
12. **Permit history is free alpha** — county assessor site shows pulled permits. No permits on an "updated kitchen" = unpermitted work = your liability.

13. **Price/sqft is a blunt tool** — lot size, corner lots, and basement finish skew it hard. Use for screening, not for offers.
14. **Cap rate without appreciation** — in a flat market, if cap rate < your mortgage rate, you're paying to own it.

15. **Sensitivity matrix is non-negotiable** — always include the rent vs. price grid so the user can visually identify the conditions under which the deal works.
16. **When in doubt, ask the user** — if you cannot confirm a critical data point (asking price, listing status, HOA fees), ask rather than guess. A wrong assumption cascades through the entire analysis.

## Interactive Map — Web App Visualization

After analyzing properties, **build a web app** that displays properties and relevant neighborhood data on an interactive map.

### Property Markers

- **Color-coded by recommendation**: green = Strong Buy, blue = Buy, yellow = Hold, red = Pass
- **Popup on each marker** showing: address, asking price, estimated fair value, beds/baths, sqft, price/sqft, and recommendation

- **Click to expand** with key details: comp-adjusted value, cap rate (if investment), flood zone, school rating

### Neighborhood Context Layers

Display relevant context around the properties:

- **Sold comps** — recent comparable sales as smaller markers, with sale price and date
- **School locations** with GreatSchools ratings (color-coded: green ≥7, yellow 4-6, red <4)

- **Flood zones** if any properties are in or near FEMA Zone A/AE/V
- **Nearby amenities** — transit, grocery, parks when walkability matters to the user

### Geocoding

Use the free Nominatim API (OpenStreetMap) to convert addresses to lat/lng — no API key required:

```text

https://nominatim.openstreetmap.org/search?q={url_encoded_address}&format=json&limit=1

```

Rate limit: max 1 request/second. Batch geocode all addresses before building the map.

Always generate the map alongside the text-based analysis — the map is a visual complement, not a replacement for the detailed evaluation.

## Limitations & Disclaimer

- **This is NOT real estate, legal, or financial advice.** Informational analysis only. Always engage a licensed realtor, real estate attorney, and professional inspector before purchasing.
- Cannot access MLS — Redfin/Zillow public data lags and misses pocket listings

- Real estate listing sites frequently block automated scraping — listing details may need to be confirmed with the user
- Cannot provide appraisals (licensed appraiser required for lending)

- Cannot physically inspect — photos hide foundation cracks, mold, and grading issues
- Market snapshot only — rates and comps move weekly

- Algorithm estimates (Zestimate, Redfin Estimate) are not appraisals and can differ significantly from actual market value or asking price
