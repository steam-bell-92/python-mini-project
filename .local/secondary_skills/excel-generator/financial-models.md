# Financial Model Recipes

Ready-made patterns for common financial models. Each recipe includes the sheet structure, key formulas, and input/output design.

## 3-Statement Model (Income Statement, Balance Sheet, Cash Flow)

```python

import xlsxwriter

wb = xlsxwriter.Workbook("3_statement_model.xlsx")

input_fmt = wb.add_format({"bg_color": "#FFF2CC", "border": 1, "num_format": "#,##0.0"})

input_pct = wb.add_format({"bg_color": "#FFF2CC", "border": 1, "num_format": "0.0%"})

calc_fmt = wb.add_format({"num_format": '"$"#,##0.0', "locked": True})

hdr = wb.add_format({"bold": True, "bg_color": "#1B3A5C", "font_color": "white", "bottom": 2})

section = wb.add_format({"bold": True, "bg_color": "#D6E4F0", "bottom": 1})

total = wb.add_format({"bold": True, "num_format": '"$"#,##0.0', "top": 1, "bottom": 6})

YEARS = 5

# --- Assumptions Sheet ---

ws_a = wb.add_worksheet("Assumptions")

ws_a.set_column(0, 0, 35)

ws_a.set_column(1, 1, 16)

assumptions = [

("Base Revenue ($M)", 1000, input_fmt, "rev"),

("Revenue Growth Rate", 0.08, input_pct, "rev_g"),

("COGS (% of Revenue)", 0.60, input_pct, "cogs_pct"),

("SG&A (% of Revenue)", 0.15, input_pct, "sga_pct"),

("D&A (% of Revenue)", 0.03, input_pct, "da_pct"),

("Interest Rate", 0.05, input_pct, "int_rate"),

("Tax Rate", 0.25, input_pct, "tax_rate"),

("Capex (% of Revenue)", 0.05, input_pct, "capex_pct"),

("Debt Balance ($M)", 500, input_fmt, "debt"),

("AR Days", 45, wb.add_format({"bg_color": "#FFF2CC", "border": 1, "num_format": "#,##0"}), "ar_days"),

("Inventory Days", 30, wb.add_format({"bg_color": "#FFF2CC", "border": 1, "num_format": "#,##0"}), "inv_days"),

("AP Days", 40, wb.add_format({"bg_color": "#FFF2CC", "border": 1, "num_format": "#,##0"}), "ap_days"),

]

refs = {}

for i, (label, val, fmt, key) in enumerate(assumptions):

ws_a.write(i + 1, 0, label)

ws_a.write(i + 1, 1, val, fmt)

refs[key] = f"Assumptions!$B${i+2}"

# --- Income Statement ---

ws_is = wb.add_worksheet("Income Statement")

ws_is.set_column(0, 0, 30)

ws_is.write_row(0, 1, [f"Year {y}" for y in range(1, YEARS + 1)], hdr)

rows_is = [

("Revenue", f"={refs['rev']}*(1+{refs['rev_g']})^{{y}}", calc_fmt),

("(-) COGS", f"=-{{rev}}*{refs['cogs_pct']}", calc_fmt),

("Gross Profit", "={rev}+{cogs}", total),

("(-) SG&A", f"=-{{rev}}*{refs['sga_pct']}", calc_fmt),

("(-) D&A", f"=-{{rev}}*{refs['da_pct']}", calc_fmt),

("EBIT", "={gp}+{sga}+{da}", total),

("(-) Interest", f"=-{refs['debt']}*{refs['int_rate']}", calc_fmt),

("EBT", "={ebit}+{interest}", calc_fmt),

("(-) Taxes", f"=-MAX(0,{{ebt}})*{refs['tax_rate']}", calc_fmt),

("Net Income", "={ebt}+{taxes}", total),

]

# Build row-by-row with formula references pointing to previous rows

# --- Balance Sheet ---

ws_bs = wb.add_worksheet("Balance Sheet")

# Assets: Cash, AR, Inventory, PP&E

# Liabilities: AP, Debt

# Equity: Retained Earnings

# AR = Revenue / 365 * AR Days, Inventory = COGS / 365 * Inv Days, AP = COGS / 365 * AP Days

# --- Cash Flow Statement ---

ws_cf = wb.add_worksheet("Cash Flow")

# Operating: Net Income + D&A + Changes in WC

# Investing: -Capex

# Financing: Debt changes, dividends

# Ending Cash = Beginning + Operating + Investing + Financing

wb.close()

```

**Key design principles:**

- Yellow cells = user inputs, all other cells are formulas
- Income Statement drives Balance Sheet (retained earnings) and Cash Flow (net income)

- Balance Sheet working capital items use days-based formulas tied to revenue/COGS
- Cash Flow reconciles back to Balance Sheet cash line

## DCF (Discounted Cash Flow) Model

```python

# Sheet structure:

# 1. Assumptions: revenue, growth, margins, WACC, terminal growth, tax rate

# 2. Projections: 5-10 year operating model

# 3. DCF Valuation: FCF, discount factors, terminal value, enterprise value, equity bridge

# Key formulas:

# Unlevered FCF = EBIT * (1 - Tax) + D&A - Capex - Change in NWC

# Discount Factor = 1 / (1 + WACC) ^ year

# PV of FCF = FCF * Discount Factor

# Terminal Value = Final Year FCF * (1 + g) / (WACC - g)

# PV of Terminal = Terminal Value * Final Discount Factor

# Enterprise Value = Sum of PV FCFs + PV of Terminal

# Equity Value = EV - Net Debt + Cash

# Per Share = Equity Value / Shares Outstanding

# Sensitivity table: WACC vs Terminal Growth Rate

# Use xlsxwriter data table or manual grid of IFERROR formulas

```

**Formula patterns for DCF:**

| Line Item | Formula |

|---|---|

| UFCF | `=EBIT*(1-TaxRate)+DA-Capex-DeltaNWC` |

| Discount Factor | `=1/(1+WACC)^Year` |

| PV of FCF | `=UFCF*DiscountFactor` |

| Terminal Value (Gordon Growth) | `=FinalFCF*(1+TermGrowth)/(WACC-TermGrowth)` |

| Terminal Value (Exit Multiple) | `=FinalEBITDA*ExitMultiple` |

| Implied Share Price | `=(SUM(PV_FCFs)+PV_Terminal-NetDebt+Cash)/SharesOut` |

## LBO (Leveraged Buyout) Model

```python

# Sheet structure:

# 1. Assumptions: entry multiple, capital structure, operating assumptions, exit

# 2. Sources & Uses: debt tranches, equity, fees

# 3. Operating Model: revenue, EBITDA, EBIT, net income, FCF

# 4. Debt Schedule: beginning balance, paydowns (mandatory + sweep), interest, ending balance

# 5. Returns Analysis: exit EV, equity value, MOIC, IRR

# Key formulas:

# Entry EV = LTM EBITDA * Entry Multiple

# Senior Debt = EBITDA * Senior Turns

# Sponsor Equity = Total Uses - Total Debt

# Cash Sweep Paydown = MIN(Beginning Balance, MAX(0, LFCF) * Sweep%)

# Exit Equity = Exit EV - Net Debt at Exit + Cash

# MOIC = Exit Equity / Initial Equity

# IRR = (Exit Equity / Initial Equity) ^ (1 / Years) - 1

```

## Comparable Company Analysis (Comp Table)

```python

# Sheet structure:

# 1. Company Data: name, ticker, market cap, enterprise value, revenue, EBITDA, net income

# 2. Multiples: EV/Revenue, EV/EBITDA, P/E, EV/EBIT

# 3. Summary Stats: mean, median, 25th/75th percentile for each multiple

# 4. Implied Valuation: apply median multiples to target company metrics

# Key formulas:

# EV/Revenue = Enterprise Value / LTM Revenue

# EV/EBITDA = Enterprise Value / LTM EBITDA

# Implied EV = Target Metric * Median Multiple

# Mean = AVERAGE(range), Median = MEDIAN(range)

# Percentiles = PERCENTILE.INC(range, 0.25) and PERCENTILE.INC(range, 0.75)

```

## Merger Model (M&A Accretion/Dilution)

```python

# Sheet structure:

# 1. Acquirer Standalone: EPS, shares out, P/E, net income

# 2. Target Standalone: same metrics

# 3. Deal Assumptions: offer price, premium, % cash vs stock, synergies, integration costs

# 4. Pro Forma: combined net income + synergies - financing costs, new share count

# 5. Accretion/Dilution: (Pro Forma EPS - Acquirer EPS) / Acquirer EPS

# Key formulas:

# New Shares Issued = (Offer Price * Target Shares * Stock%) / Acquirer Share Price

# Pro Forma Shares = Acquirer Shares + New Shares

# Financing Cost = Offer Price * Target Shares * Cash% * Interest Rate * (1 - Tax)

# Pro Forma NI = Acquirer NI + Target NI + Synergies - Integration - Financing Cost

# Pro Forma EPS = Pro Forma NI / Pro Forma Shares

# Accretion = (Pro Forma EPS / Acquirer EPS) - 1

```
