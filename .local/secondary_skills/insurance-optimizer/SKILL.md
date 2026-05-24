---
name: insurance-optimizer
description: Review insurance coverage and find opportunities to optimize premiums and reduce gaps.
---

# Insurance Optimizer

Review current insurance coverage, identify gaps or overpayment, and suggest strategies to optimize premiums. Covers auto, home/renters, health, and life insurance.

**DISCLAIMER: This provides general information only, not professional insurance or financial advice.**

## When to Use

- User wants to review if they're over- or under-insured
- User is paying too much and wants to save
- User wants to understand their coverage
- User is shopping for new insurance

## When NOT to Use

- Filing insurance claims
- Complex commercial insurance
- Specific policy interpretation (consult agent)

## Methodology

### Step 1: Gather Current Coverage

Ask the user for their current policies. For each, collect:

- **Type**: Auto, home/renters, health, life, umbrella, disability
- **Provider**: Who is the carrier?
- **Premium**: Monthly or annual cost
- **Deductible**: How much they pay before insurance kicks in
- **Coverage limits**: Maximum the policy will pay
- **Key features**: What's included, what's excluded

### Step 2: Assess Coverage by Type

#### Auto Insurance

**Minimum recommended coverage:**

| Coverage | Recommended Minimum | Notes |
|----------|-------------------|-------|
| Bodily injury liability | 100/300 ($100K per person, $300K per accident) | State minimums are dangerously low |
| Property damage liability | $100,000 | Covers damage to other vehicles/property |
| Uninsured/underinsured motorist | Match liability limits | Protects you from uninsured drivers |
| Collision | Based on car value | Consider dropping if car value < 10× annual premium |
| Comprehensive | Based on car value | Covers theft, weather, animals |
| Medical payments / PIP | $5,000-$10,000 | Covers your medical costs regardless of fault |

**Drop collision/comp test:** If car value (KBB private party) < 10× the annual collision+comp premium, OR < ~$4,000 outright → self-insure. A $3,000 car with a $1,000 deductible and $400/yr premium means best-case payout is $2,000 — you're paying 20%/yr to insure that.

**Liability floor:** 100/300/100 minimum. State minimums (often 25/50/25) won't cover a single hospital visit. If net worth >$500k, bump to 250/500/100 + umbrella.

#### Home / Renters Insurance

**Homeowners:**

| Coverage | Guideline |
|----------|-----------|
| Dwelling | Full replacement cost (NOT market value) |
| Personal property | Enough to replace belongings (do a home inventory) |
| Liability | $300,000-$500,000 minimum |
| Additional living expenses | 20% of dwelling coverage |
| Deductible | $1,000-$2,500 (higher = lower premium) |

**Commonly missed:** Flood (NOT in standard policies — check FEMA zone), earthquake (separate), scheduled riders for jewelry/art >$1,500-2,500, sewer backup, home business equipment.

**Renters:** $15-30/mo for $30-50k property + $100-300k liability. Best value in insurance — never skip.

#### Health Insurance

| | HMO | PPO | HDHP + HSA |
|---|---|---|---|
| Premium | Lower | Higher | Lowest |
| Deductible | Lower | Moderate | Highest ($1,650+ ind.) |
| Network | Referral needed | Any | Any |
| Best for | Low utilization | Frequent specialists | Healthy + want tax savings |

**HSA advantage:** Triple tax benefit — contributions deductible, growth tax-free, withdrawals tax-free for medical. 2026 limits: $4,400 individual / $8,750 family (+$1,000 if 55+). The only account in the tax code better than a Roth IRA. Save receipts — reimburse yourself decades later, tax-free.

**HDHP break-even math:** `(PPO premium − HDHP premium) × 12 + employer HSA contribution` = your buffer. If expected annual healthcare spending < buffer + tax savings on HSA contribution, HDHP wins. Most healthy people under 50 without chronic conditions come out ahead on HDHP.

#### Life Insurance

**How much:**

- Rule of thumb: 10-12× annual income
- More precise: Calculate total financial obligations (mortgage, debts, children's education, income replacement for X years) minus existing assets

**Term vs. Whole — run the math:**

| | Term (20yr, $500k) | Whole ($500k) |
|---|---|---|
| Monthly, healthy 30yo | ~$25-30 | ~$200-450 (8-15× term) |
| Cash value after 20yr | $0 | ~$50-80k (2-4% IRR after fees) |
| "Buy term, invest the difference" | $300/mo in index fund @ 7% real → **~$150k** after 20yr | — |

The salesperson's commission on whole life is typically 50-100% of the first-year premium — that's why it's pushed hard. Whole life makes sense only for: estate tax planning above the ~$15M exemption, special-needs trust funding, or maxed-out every other tax-advantaged account and still have excess.

**Term life is right for 90%+ of people.** Ladder policies (e.g., $500k/30yr + $500k/20yr) to match declining need as mortgage shrinks and kids age out.

#### Umbrella Insurance

**The $500k trigger:** Standard auto/home liability maxes out at ~$300-500k. Once your attachable net worth (home equity + taxable brokerage + savings — exclude 401k/IRA, they're federally protected from most judgments) crosses ~$500k, you're a lawsuit target without a shield.

- Coverage = total attachable net worth, rounded up to nearest $1M
- Cost: **~$150-300/yr for first $1M**, each additional $1M only ~$75-100/yr. $5M runs ~$500-700/yr. The cheapest insurance per dollar of coverage in existence.
- **Prerequisite:** most carriers require $250-300k underlying liability on auto/home before writing umbrella
- **Get it if:** net worth >$500k, rental properties, teenage drivers, pool/trampoline/dog, coach youth sports, high public profile, or you post opinions on the internet under your real name

### Step 3: Identify Gaps

Common coverage gaps to flag:

- [ ] Liability limits too low relative to net worth
- [ ] No umbrella policy
- [ ] No disability insurance (protects income — most overlooked insurance)
- [ ] No flood/earthquake in at-risk area
- [ ] Renters without renters insurance
- [ ] Life insurance insufficient for dependents
- [ ] Health plan doesn't cover needed specialists
- [ ] No scheduled coverage for high-value items

### Step 4: Find Savings

**Deductible break-even math (compute this, don't guess):**

```text
break_even_years = (high_deductible − low_deductible) / annual_premium_savings
```

- $500 → $1,000 deductible typically saves 15-30% on collision/comp (NOT proportional — doubling deductible does not halve premium)
- Avg driver files a claim every **6-8 years**. If break-even < 3 years and you have the emergency fund, raise it.
- Example: $500→$1,000 saves $200/yr → break-even 2.5yr → clearly worth it. Saves only $50/yr → 10yr break-even → skip.
- **Bank the savings** in a dedicated account until it equals your highest deductible — self-insure the gap.

**Shopping cadence — loyalty is a tax:**

- **Auto: re-quote every 6 months** (standard policy term). Carriers use "price optimization" — they raise rates on customers their models predict won't shop. ~22% of shoppers who compare find a cheaper rate. Early-shopper discounts: up to 10-15% for quoting before your current policy expires.
- **Home: re-quote every 2-3 years** or after any claim-free stretch
- **Life: re-quote after health improvements** — quit smoking 12+ months, lost significant weight, A1C normalized. Rates can drop 50%+.
- **Trigger events** that should always prompt a re-quote: birthday (esp. 25), violation falls off record (~3yr), credit score jump, marriage, move, paid off car

**Savings strategies by impact:**

| Strategy | Savings | Notes |
|---|---|---|
| Shop every 6mo (auto) | 15-30% | The Zebra, Insurify, or independent agent — get 3+ quotes |
| Raise deductibles | 10-25% | Only if emergency fund covers it; do break-even math |
| Bundle home + auto | 10-25% | But quote unbundled too — bundle discount sometimes masks one overpriced policy |
| Drop collision/comp | 100% of that premium | When car value < ~10× annual premium OR < $4,000 |
| Pay annually | 5-10% | Avoids monthly installment fees |
| Telematics (Progressive Snapshot etc.) | 10-30% for safe drivers | Can also RAISE rates — know your driving |
| Credit score improvement | 5-25% | Insurers use credit-based insurance scores in most states |

**Comparison sites:** The Zebra / Insurify (auto+home), Policygenius (life+disability), Healthcare.gov (ACA). All free. An independent broker who writes for multiple carriers beats a captive agent (State Farm/Allstate only sell their own).

### Step 5: Prioritize — Gaps Before Savings

Fix underinsurance first (existential risk), then optimize premiums (efficiency).

## Output Format

```text
# Insurance Review: [Name]

## Current Coverage Summary
| Type | Provider | Premium | Deductible | Coverage | Assessment |
|------|----------|---------|-----------|----------|------------|
| Auto | [co] | $X/mo | $Y | 100/300/100 | Adequate |
| Home | [co] | $X/mo | $Y | $Z dwelling | Gap: flood |
| ... | | | | | |

## Total Annual Cost: $X,XXX

## Gaps Identified
1. **[Gap]** — [risk explanation and recommendation]

## Savings Opportunities
1. **[Strategy]** — estimated savings: $X-Y/year

## Action Items
1. [ ] [Highest priority action]
2. [ ] [Next priority]
3. [ ] [Shop for quotes by date]

## Disclaimer
General information only. Consult a licensed insurance professional for specific policy advice.
```

## Best Practices

1. **Review annually** — needs, rates, and life circumstances change
2. **Shop around** — get 3+ quotes; loyalty rarely gets the best rate
3. **Understand deductibles** — ensure your emergency fund can cover them
4. **Don't underinsure to save** — $50/month savings isn't worth major exposure
5. **Ask about discounts** — most insurers have unadvertised discounts (ask explicitly)
6. **Read the exclusions** — know what's NOT covered, not just what is

## Limitations

- Cannot provide actual quotes or bind policies
- Cannot compare specific policy documents (recommend an independent agent for that)
- Cannot interpret specific policy language or coverage disputes
- Not a licensed insurance advisor
- Rates and regulations vary significantly by state
