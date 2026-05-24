---
name: tax-reviewer
description: Review tax returns, identify missed deductions, and suggest strategies to reduce tax liability.
---

# Tax Reviewer

Review tax returns and identify potential savings. Flag commonly missed deductions, suggest tax-advantaged strategies, and help with year-round planning.

**IMPORTANT DISCLAIMER: This provides general tax information only, NOT professional tax advice. Always consult a qualified CPA or tax professional before making tax decisions.**

## When to Use

- User wants a review of their tax return
- User asks about commonly missed deductions
- User wants tax planning strategies
- User is self-employed and needs deduction guidance

## When NOT to Use

- Filing taxes (use actual tax software)
- State-specific tax law questions (recommend a local CPA)
- International tax situations
- Business entity tax structuring

## 2026 Key Numbers (verify with webSearch — these change annually)

| Item | 2026 Limit | Notes |
|---|---|---|
| Standard deduction | $16,100 single / $32,200 MFJ / $24,150 HoH | Most filers don't itemize |
| 401(k)/403(b)/TSP employee | $24,500 | +$8,000 catch-up (50+); +$11,250 (age 60-63) |
| IRA (Trad + Roth combined) | $7,500 | +$1,100 catch-up (50+) |
| Roth IRA phase-out | $153k-168k single / $242k-252k MFJ | Above → backdoor Roth |
| HSA | $4,400 single / $8,750 family | +$1,000 (55+). Requires HDHP. |
| SIMPLE IRA | $17,000 | +$4,000 (50+) |
| Section 179 | $2,500,000 | Immediate expensing |
| Standard mileage | $0.70/mi (2025) — webSearch 2026 rate | Must keep contemporaneous log |
| QBI threshold (Form 8995) | $197,300 single / $394,600 MFJ | Above → Form 8995-A with wage/capital limits |

**Always verify:** `webSearch("IRS {year} contribution limits")` — numbers above are Tax Year 2026.

## Commonly Missed Deductions by Filer Type

**W-2 Employees** (limited since TCJA):

- Student loan interest — up to $2,500, above-the-line (no itemizing needed), phases out ~$80-95k single
- Educator expenses — $300 above-the-line for K-12 teachers
- HSA contributions made outside payroll — deductible on Schedule 1
- Traditional IRA — deductible if no workplace plan, or under phase-out ($81-91k single with plan)
- Saver's Credit — up to $1,000 credit (not deduction) for retirement contributions if AGI <~$39k single
- NEW 2025+: qualified overtime deduction (up to $12,500) and personal-use car loan interest — Schedule 1-A

**Self-Employed / Schedule C** (every missed $1 costs ~30-40¢ in income+SE tax):

- **QBI (Form 8995) — #1 most missed.** 20% of qualified business income, off the top. Check the return: if there's Schedule C/E/K-1 income and NO Form 8995, thousands were left on the table. Amendable 3 years back.
- **Half of SE tax** — Schedule 1 line 15. Auto-computed by software but verify it's there.
- **Self-employed health insurance** — 100% of premiums (self + spouse + dependents), Schedule 1 line 17. Above-the-line.
- **Solo 401(k) / SEP-IRA** — Solo 401(k) allows employee ($24,500) + employer (25% of net SE income) contributions. SEP is simpler, 25% of net up to ~$70k.
- **Home office** — simplified: $5/sqft × up to 300 sqft = $1,500 max. Regular method (Form 8829): actual % of rent/mortgage/utilities/insurance. Regular method also reduces SE tax — shifts expense from Schedule A to Schedule C.
- **100% bonus depreciation** — restored for assets placed in service after Jan 19, 2025. Full first-year write-off for equipment.
- **Business % of phone/internet, software subs, business meals (50%), professional development**
- **Tax prep fees** — the portion for business forms (Schedule C, SE) is deductible on Schedule C itself

**Investors:**

- Tax-loss harvesting — realize up to $3,000/yr net capital loss against ordinary income; carry forward indefinitely. Mind 30-day wash-sale rule.
- Qualified dividends + LTCG — 0% rate up to ~$48k single / ~$96k MFJ taxable income. Tax-gain harvesting in low-income years.
- Foreign tax credit (Form 1116) — commonly missed on international ETF dividends
- Rental real estate: depreciation (27.5-yr straight line on building basis), and QBI may apply under the 199A safe harbor

**Homeowners (only if itemizing > standard deduction — most don't):**

- Mortgage interest (first $750k of acquisition debt), points in purchase year
- SALT up to $10k (property + state income/sales)
- Residential clean energy credit — 30% of solar/battery/geothermal cost, no cap (Form 5695)
- Energy efficient home improvement credit — 30% up to $1,200/yr for insulation/windows/doors, $2,000 for heat pumps

## Tax-Advantaged Account Priority

1. **HSA** — triple tax-free (deduct in, grow free, withdraw free for medical). Acts as stealth IRA after 65.
2. **401(k) to match** — 50-100% instant return
3. **Roth IRA** (if in 12-22% bracket) / **Traditional** (if 32%+). Over income limit → backdoor Roth (nondeductible Trad → convert).
4. **Max 401(k)** — mega backdoor Roth if plan allows after-tax contributions + in-service conversions
5. **529** — state deduction varies (some states give nothing); tax-free growth for education

## Output Format

```text
# Tax Review Summary

## Filing Overview
| Item | Current | Notes |

## Potential Savings

### High Confidence
1. **[Deduction]**: Potential savings $X,XXX

### Worth Investigating
1. **[Strategy]**: Potential savings $X,XXX

## Recommended Actions

## Disclaimer
Consult a CPA for personalized advice.
```

## Review Checklist When User Shares a Return

1. **Filing status** — MFJ vs MFS (MFS rarely wins; check if student loans on IBR). HoH if unmarried with dependent.
2. **Standard vs itemized** — if Schedule A total < standard deduction, they itemized wrong (or could bunch charity/medical into alternate years)
3. **Form 8995 present?** — If Schedule C, E (rental), or K-1 income exists and no 8995, QBI was missed. Biggest dollar finding.
4. **Schedule 1 adjustments** — SE tax ÷ 2, SE health insurance, HSA, IRA, student loan interest all present?
5. **Retirement contributions maxed?** — If refund is large and 401(k)/IRA room remains, they're over-withholding instead of investing pre-tax
6. **Credits vs deductions** — Child Tax Credit, Saver's Credit, education credits (AOTC > LLC for undergrads), EV credit
7. **Carryforwards applied?** — prior-year capital losses, NOLs, unused credits

## Best Practices

1. **Lead with the disclaimer** — this is education, not advice
2. **Quantify every finding** — "missed QBI" means nothing; "missed ~$4,200 deduction ≈ $925 refund at 22% bracket" means something
3. **Flag aggressive positions** — home office for W-2, hobby-loss rules, meals >50%: "discuss with a CPA, this gets audited"
4. **Second-order effects** — lowering AGI can unlock Roth eligibility, ACA subsidies, Saver's Credit. Model the cascade.
5. **webSearch current-year limits** — do not trust memorized numbers; the IRS adjusts annually

## Limitations

- **NOT professional tax advice.** General information only. Always consult a CPA or EA before filing or amending — especially for self-employment, rentals, K-1s, or state issues.
- Cannot file or amend returns
- Cannot model all state rules (state conformity to federal law varies wildly)
- Tax law changes yearly — all figures require current-year verification
