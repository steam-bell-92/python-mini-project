---
name: stock-analyzer
description: Analyze stocks with fundamental analysis, technical indicators, and PDF reports.
---

# Stock & Investment Analyzer

Analyze stocks, companies, and investment opportunities using financial market data. Provide company profiles, technical analysis, fundamental analysis, and portfolio insights.

Primary deliverable: A professional PDF research report. The Excel model and interactive web app are optional extras — only build them if the user explicitly requests them.

When to Use

User wants to analyze a specific stock or company

User asks about financial metrics, earnings, or valuations

User wants to compare investment options

User needs portfolio analysis or allocation advice

User asks about market trends or sector performance

When NOT to Use

Tax-specific questions (use tax-reviewer skill)

Personal budgeting (use budget-planner skill)

Insurance coverage (use insurance-optimizer skill)

IMPORTANT: Disclaimer & Compliance

All output from this skill is strictly informational. It does not constitute investment advice, a recommendation or solicitation to buy or sell any security, or a substitute for professional financial counsel.

Every report, PDF, Excel model, or web dashboard produced by this skill must:

State clearly on the cover page (or first visible section): "This report is for informational purposes only and does not constitute investment advice. It is not a recommendation to buy, sell, or hold any security."

Include a full disclaimer on the final page (see "Limitations & Disclaimer" section below for the required text).

Never use imperative language that implies a directive — say "may outperform" or "could be worth investigating," not "you should buy" or "add this to your portfolio."

Always recommend consulting a licensed financial advisor before making any investment decision.

This applies to all outputs regardless of whether an investor profile has been collected.

Optional Investor Profile

Before starting any analysis, offer the user the option to share their investment profile. This step is entirely optional — if the user declines or wants to skip it, proceed immediately with a general-purpose analysis using the default assumptions below.

How to offer it: At the start of the analysis, ask something like: "I can tailor this analysis to your investment style if you'd like to answer a few quick questions. Otherwise, I'll provide a general market perspective. Which do you prefer?"

Profiling Dimensions (ask all 5 if the user opts in)

Dimension

Question

Options

Risk tolerance

How would you describe your comfort with investment risk?

Conservative (preserve capital, minimize losses) / Moderate (balanced growth with some downside protection) / Aggressive (maximize returns, comfortable with volatility)

Time horizon

How long do you plan to hold these investments?

Short-term (under 1 year) / Medium-term (1-5 years) / Long-term (5+ years)

Current allocation

Roughly, what is your current portfolio split?

Approximate % in equities, bonds/fixed income, cash, alternatives (real estate, commodities, crypto)

Income needs

Do you need your investments to generate regular income?

Yes, dividend/income-focused / No, purely growth-focused / Mixed

Experience level

How would you describe your investing experience?

Beginner (started recently, still learning) / Intermediate (a few years, understands basic concepts) / Advanced (experienced, comfortable with complex strategies)

Default Assumptions (when user skips profiling)

When the user declines profiling, use these neutral defaults and do not assume anything about their personal situation:

Risk tolerance: Moderate

Time horizon: Medium-term (1-5 years)

Allocation: Not assumed — present analysis without allocation recommendations

Income needs: Not assumed — cover both growth and income angles

Experience level: Intermediate — use clear language but don't oversimplify

How Profiling Shapes the Report

When profile data is available, adjust the report in these ways:

Cover page: Add an "Investor Profile" summary box showing the user's stated risk tolerance, time horizon, and income preference

Stock/sector picks: Add a suitability tag to each recommendation (e.g., "Suitable for: moderate risk, 3-5yr horizon" or "Caution: high volatility — may not suit conservative investors")

Allocation section: Add a "Suggested Allocation" section at the end of the report, tailored to their risk/timeline. Frame it as illustrative, not prescriptive (e.g., "A moderate-risk investor with a 3-5 year horizon might consider an allocation along these lines...")

Language calibration: For beginners, use simpler explanations and fewer technical terms. For advanced investors, include more granular data and nuanced analysis.

Picks that don't fit: Still include all relevant picks, but flag any that conflict with the user's stated profile (e.g., "Note: This is a high-volatility pick that may not align with your conservative risk preference")

When profile data is NOT available, omit the Investor Profile box, omit the Suggested Allocation section, and present all picks without suitability tags. The core analysis remains identical.

Data Sources (Use These — Don't Guess)

Python libs (run directly, no API key):

import yfinance as yf

t = yf.Ticker("AAPL")

t.info \# P/E, market cap, beta, 52w range, margins

t.financials \# income statement (4yr)

t.balance_sheet \# debt, cash, equity

t.cashflow \# FCF, capex

t.history(period="1y") \# OHLCV for technicals

t.institutional_holders \# 13F ownership

Sector screening: Use yfinance sector ETFs (XLE, XLK, XLF, XLV, XLI, XLP, XLU, XLRE, XLB, XLC, XLY) for reliable sector-level data. These are more stable than third-party screener libraries. For individual stock screening, pull yfinance data for each ticker directly.

Note on finvizfinance: This library frequently breaks due to website changes. Avoid relying on it. Use yfinance sector ETFs and direct ticker lookups instead.

Primary filings: Start from the EDGAR filing index: webFetch("<https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK={ticker}&type=10-K>"). This returns a list of filings — find the most recent 10-K and webFetch its "Documents" link to reach the actual filing. Read Item 1A (Risk Factors) and Item 7 (MD&A) — this is where management admits problems.

Insider activity: webFetch("<http://openinsider.com/screener?s={ticker}>") — look for cluster buys (multiple execs buying same week) and P-code open-market purchases (insider paid cash at market price — strongest signal). Ignore option exercises (M-code) and 10b5-1 scheduled sales.

Short interest: webSearch "{ticker} short interest fintel" — >20% of float = crowded short, squeeze risk either direction.

Data Source Fallbacks

yfinance occasionally returns empty data, tickers change, or rate limits kick in. Use this fallback hierarchy:

Primary: yfinance — try up to 2 retries with a short delay

Fallback: Web search for the specific metric (e.g., webSearch("[ticker] market cap 2026"))

Last resort: Flag the metric as "data unavailable" — never fabricate numbers

Research First — Mandatory Before Any Output

Never show financials, tables, or a report to the user without thoroughly researching first. Before generating the PDF, you must:

Load the deep-research skill for comprehensive web research. This is not optional — every stock analysis must use deep research to gather real data before producing any deliverable.

Pull actual financials from yfinance AND cross-reference with SEC EDGAR filings (10-K, 10-Q). Do not rely on a single source.

Search for every company mentioned — if the user's request involves multiple companies or peers, pull financials on ALL of them, not just the primary ticker.

Bias towards tables and numbers from actual public filings. Every financial figure in the report must be traceable to a real source (SEC filing, earnings release, or yfinance data pull). Do not estimate or round when real numbers are available.

If you cannot verify a financial figure from at least one real source, flag it explicitly as unverified. Never present guessed or hallucinated numbers as fact.

Scoping Deep Research

For a single-stock analysis, launch 2-3 parallel research agents: one for fundamentals/financials, one for industry/competitive landscape, one for recent news/catalysts.

For a multi-sector or thematic analysis, launch 4-6 parallel research agents organized by theme (e.g., macro environment, sector rotation, geopolitics, specific sector deep-dives). More than 6 agents rarely adds value and wastes time.

Methodology

Step 1: Pull the Data (Python)

Run yfinance to get fundamentals + 1yr price history. Compute 50/200 SMA, RSI(14), and current price vs 52w high. Takes 10 lines of pandas.

Step 2: Fundamental Analysis

Valuation (compare to sector median, not S&P):

P/E — meaningless alone; flag if >2x sector median

PEG — <1.0 = growth at reasonable price; >2.0 = priced for perfection

EV/EBITDA — better than P/E for capital-intensive or leveraged cos

P/S — only metric for unprofitable growth; >20x = needs hypergrowth to justify

FCF yield (FCF/market cap) — >5% = genuinely cheap; negative = burning cash

Quality red lines (practitioner heuristics):

Revenue growing but FCF shrinking -> earnings quality problem, dig into receivables

Debt/EBITDA >4x -> one bad year from covenant breach

Gross margin compressing 3+ quarters -> losing pricing power

Stock-based comp >15% of revenue -> dilution machine (common in SaaS)

Goodwill >50% of assets -> acquisition-heavy, writedown risk

Step 3: Technical Context (Not Prediction)

Compute in pandas — don't just describe:

Price vs 50/200 SMA: below both = downtrend, don't catch knives

Golden cross (50 crosses above 200) = trend confirmation, not entry signal

RSI(14): >70 overbought / <30 oversold — only useful at extremes + divergence

Volume: moves on 2x+ avg volume are real; low-volume moves fade

% off 52w high: >30% drawdown in an uptrending market = something broke

Step 4: The Retail Edge — Signals Institutions Ignore

Insider cluster buys (OpenInsider): 3+ insiders open-market buying within 2 weeks is the single highest-conviction public signal. Research shows insider buys outperform; sells mean nothing (taxes/divorces/yachts).

Buying the dip: insider P-code purchase after >10% drop = management disagrees with the market

Short squeeze setup: short interest >20% + days-to-cover >5 + any positive catalyst

Unusual options: webSearch "{ticker} unusual options activity" — large OTM call sweeps before earnings sometimes leak info

Step 5: Comparative Table

Build a pandas DataFrame with peers side-by-side: P/E, PEG, rev growth, gross margin, FCF yield, debt/EBITDA. The outlier in either direction is your thesis. Pull yfinance data for every peer company — do not leave cells blank or use estimates when real data is available. Every company in the comparison must have actual financials pulled and verified.

Step 6: Web Research — Find Existing Analyst Reports and News

Use web search aggressively via the deep-research skill. Before writing the report, gather real external research to cite:

webSearch("[ticker] analyst report 2026")

webSearch("[ticker] earnings analysis site:seekingalpha.com")

webSearch("[ticker] bull case bear case site:seekingalpha.com OR site:fool.com")

webSearch("[company] investor presentation 2026 filetype:pdf")

webSearch("[ticker] price target consensus")

webSearch("[ticker] industry outlook [sector]")

webSearch("[company] competitive landscape")

webSearch("[ticker] short interest thesis")

Source hierarchy (cite all of these in the report):

Source

What you get

How to cite

SEC EDGAR (10-K, 10-Q, 8-K)

Primary financials, risk factors, MD&A

"Source: [Company] 10-K FY2025, Item 7"

Earnings call transcripts

Management commentary, guidance

"Source: Q4 2025 Earnings Call, CEO remarks"

Sell-side research (via SeekingAlpha, TipRanks)

Price targets, consensus estimates

"Source: TipRanks consensus, 12 analysts"

Industry reports

TAM, growth rates, competitive dynamics

"Source: [Firm] [Industry] Report, [Date]"

Company investor presentations

Management's own bull case, KPIs

"Source: [Company] Investor Day 2025"

News (Reuters, Bloomberg, CNBC)

Catalysts, M&A, regulatory

"Source: Reuters, [Date]"

Use webFetch to pull actual content from SeekingAlpha articles, earnings transcripts, and investor presentations. Extract specific data points, quotes, and estimates to cite in the report.

Project Architecture — Reusable Modules

The reports/ directory contains shared modules that all ticker-specific scripts import from. Never duplicate the ResearchReport class, chart functions, or Excel styling helpers — always import from these modules.

reports/report_base.py — Shared PDF Report Class:

- sanitize_text(text): Cleans Unicode characters for fpdf2's latin-1 encoding. Apply to ALL text before passing to pdf.cell() or pdf.multi_cell().
- ResearchReport(company_name, ticker): Extends FPDF with all report methods. Constructor sets alias_nb_pages() and auto_page_break(margin=15).

- Methods: header(), footer(), ensure_space(needed_mm), section_title(), sub_title(), body_text(), bullet_point(), key_metric(), table_header(), table_row(), data_table(), callout_box(), cover_page(data_dict), disclaimer_page(sources_text)
- cover_page(data) expects a dict with keys: exchange, sector, rating, price_target, current_price, market_cap_str, range_52w, analyst_consensus

- Usage: from report_base import ResearchReport, sanitize_text
- IMPORTANT fpdf2 gotcha: bullet_point() uses cell(5, 4, chr(149)) then multi_cell(185, 4, text). You MUST pass an explicit width (185) to multi_cell after cell(), otherwise multi_cell gets 0 remaining width and throws "Not enough horizontal space" error. Never use multi_cell(0, ...) after a cell() on the same line.

reports/chart_utils.py — Shared Chart Generation:

- price_chart(df, ticker, company_name): 1-year price history with 50/200 SMAs. Returns saved path.
- revenue_margin_chart(years, revenues, gross_margins, op_margins, net_margins, ticker): Bar+line combo chart. Returns saved path.

- segment_chart(segments_dict, ticker): Grouped bar chart from {year: {segment: value}} dict. Returns saved path.
- peer_valuation_chart(peers_dict, ticker): 3-panel bar chart (Fwd P/E, EV/EBITDA, P/S). peers_dict = {ticker: {fwd_pe, ev_ebitda, ps}}. Subject ticker highlighted in red. Returns saved path.

- All charts saved to reports/charts/ at 150 DPI.
- Usage: from chart_utils import price_chart, revenue_margin_chart, segment_chart, peer_valuation_chart

reports/excel_base.py — Shared Excel Styling:

- Style constants: NAVY_FILL, WHITE_FONT, HEADER_FONT, INPUT_FILL, LIGHT_GRAY, GREEN_FILL, RED_FILL, THIN_BORDER, INPUT_BORDER, THICK_BORDER
- style_header_row(ws, row, max_col): Navy header with white bold text

- style_data_cell(ws, row, col, fmt, is_input, shaded): Applies borders, fills, number format
- auto_width(ws): Auto-sizes all columns

- write_section_header(ws, row, col, text): Section label in navy bold
- write_table(ws, start_row, headers, rows, col_formats, highlight_row): Complete table with header + data rows

- Usage: from excel_base import *

reports/data_utils.py — Data Pulling & Validation:

- pull_stock_data(ticker, retries=2): Pulls all yfinance data with retry logic. Returns dict with all metrics, formatted strings (market_cap_str, range_52w, analyst_consensus), and raw DataFrames (financials, balance_sheet, cashflow, quarterly_financials, history_1y).
- pull_peer_data(tickers): Pulls key metrics for a list of peer tickers. Returns dict of dicts.

- validate_data(data): Checks for common data issues (zero price, negative P/E, missing history). Returns list of warning strings.
- fmt_val(val, fmt_type, fallback): Format a value for display. Types: "pct", "pct_change", "ratio", "dollar", "dollar_b", "market_cap".

- Usage: from data_utils import pull_stock_data, pull_peer_data, validate_data, fmt_val

reports/generate_report.py — Single Entry Point CLI:

- Usage: python reports/generate_report.py TICKER --peers PEER1,PEER2,PEER3
- Runs the data pipeline: pulls subject + peer data, validates, generates price + peer charts

- Outputs a data summary and tells you which ticker-specific scripts to create/run next
- Revenue/margin and segment charts require manual historical data (yfinance only provides trailing 4 years, segment data requires 10-K parsing)

Workflow for Adding a New Ticker:

1. Run: python reports/generate_report.py TICKER --peers PEER1,PEER2
2. Create reports/generate_{ticker}_pdf.py — imports ResearchReport from report_base, chart paths from chart_utils

3. Create reports/generate_{ticker}_dcf.py — imports excel_base helpers, uses Excel formulas (not hardcoded values)
4. Run both scripts to generate the PDF and Excel model

5. Present both files to the user

Data Validation Rules:

- Always call validate_data() after pulling data and print warnings
- Negative trailing P/E means the company is unprofitable — flag it, don't hide it

- If yfinance returns None for a metric, display "N/A" in the report, never 0 or a guess
- Cross-reference key financials (revenue, net income) between yfinance and SEC filings when possible

- If a peer ticker fails to pull data, include it in the table with "N/A" values rather than silently dropping it

Peer Data — Always Pull from yfinance:

- Never hardcode peer metrics — always pull from yfinance via pull_peer_data() so data is current
- Pull at least 4 peers in the same sector/industry

- Common peer sets: Tech (AAPL/MSFT/GOOG/AMZN/META), Semis (NVDA/AMD/AVGO/QCOM/INTC), Auto (TSLA/GM/F/TM/RIVN)
- For the comparable companies Excel sheet, use formulas for the median row: =MEDIAN(C5:C10)

Build Order — PDF Report + DCF Excel Model (Built in Parallel)

Both the PDF research report and the DCF Excel model are primary deliverables. Build them in parallel from the same research data.

Step 1: Generate charts (Python + matplotlib)

Generate all charts first — these will be embedded in the PDF. Save as PNG at 150+ DPI to reports/charts/. Generate at least 4 charts: price history with SMAs, revenue/margin trends, peer valuation comparison, and one more relevant to the thesis.

import matplotlib.pyplot as plt

import yfinance as yf

df = yf.Ticker("AAPL").history(period="1y")

fig, ax = plt.subplots(figsize=(10, 5))

ax.plot(df.index, df['Close'], label='Price', color='#1a1a2e')

ax.plot(df.index, df['Close'].rolling(50).mean(), label='50 SMA', color='#e94560', linestyle='--')

ax.plot(df.index, df['Close'].rolling(200).mean(), label='200 SMA', color='#0f3460', linestyle='--')

ax.set_title("AAPL - 1 Year Price History")

ax.legend()

ax.grid(alpha=0.3)

fig.savefig("reports/charts/price_chart.png", dpi=150, bbox_inches='tight')

Step 2: Generate the PDF research report (PRIMARY DELIVERABLE \#1)

Write a Python generation script (reports/generate_pdf.py) using fpdf2 to produce a polished, multi-page equity research PDF. Do not output a markdown summary as a substitute. Do not skip the PDF.

Why fpdf2, not jsPDF: Python is already required for yfinance and matplotlib. fpdf2 installs instantly (pip install fpdf2), runs reliably, and handles image embedding natively. jsPDF (Node) has heavy dependencies, frequent install timeouts in constrained environments, and is designed for browser-side generation — not server-side report building.

Present the PDF to the user in chat immediately after generating it.

Step 3: Build the DCF Excel Model (PRIMARY DELIVERABLE \#2 — built in parallel with the PDF)

Always build the DCF Excel model alongside the PDF report. Do not wait for user request — this is a standard deliverable for every stock analysis.

Use openpyxl in Python to generate the .xlsx file (reports/{TICKER}_DCF_Model.xlsx):

from openpyxl import Workbook

from openpyxl.styles import Font, PatternFill, Alignment, Border, Side, numbers

from openpyxl.utils import get_column_letter

The Excel model must include the following sheets:

Sheet 1 — DCF Model:

- Revenue projections (5-year forecast with growth assumptions)
- EBITDA / operating income projections (margin assumptions)

- Free cash flow build: EBITDA -> subtract taxes, capex, change in working capital -> unlevered FCF
- Terminal value calculation (perpetuity growth method AND exit multiple method)

- WACC calculation with clearly labeled inputs: risk-free rate, equity risk premium, beta, cost of debt, tax rate, debt/equity ratio
- Enterprise value -> equity value -> implied share price

- Upside/downside % vs current price

Sheet 2 — Sensitivity Analysis:

- Two-variable data table: WACC (rows) vs terminal growth rate (columns) showing implied share price at each combination
- Highlight the base case cell

- Use conditional formatting: green for upside scenarios, red for downside

Sheet 3 — Scenario Analysis:

- Bull / Base / Bear cases with different revenue growth, margin, and multiple assumptions
- Probability-weighted price target (e.g., 25% Bull, 50% Base, 25% Bear)

- Show each scenario's implied share price and upside/downside

Sheet 4 — Comparable Companies:

- Peer comparison table: ticker, market cap, P/E, EV/EBITDA, P/S, revenue growth, gross margin, FCF yield
- Pull real data from yfinance for 4-6 peers

- Highlight the subject company row

Sheet 5 — Financial Summary:

- Historical income statement (3-4 years from yfinance)
- Historical balance sheet highlights (cash, debt, equity)

- Key ratios: ROE, ROIC, debt/EBITDA, current ratio

CRITICAL — Use Excel Formulas, Not Hardcoded Values:

- Every calculated cell MUST use an Excel formula, not a pre-computed Python value. The entire point of a financial model is that users can change assumptions and see results update automatically.
- Input cells (yellow): hardcoded values the user can edit (growth rates, margins, WACC inputs, tax rate, etc.)

- Calculated cells: MUST be formulas referencing input cells or other calculated cells. Examples:
- Cost of Equity: =B7+B9*B8 (risk-free + beta \* ERP)

- WACC: =B10*(1-B13)+B11*(1-B12)*B13 (formula using CoE, CoD, tax, D/TC)
- Revenue projections: =B21*(1+C22) (prior year \* (1 + growth rate))

- Gross Profit: =C21*C24 (revenue \* gross margin)
- Terminal Value: =B42*(1+B43)/(B44-B43) (FCF*(1+g)/(WACC-g))

- PV factors: =1/(1+B44)^n
- Implied Share Price: =B55/B56 (equity value / shares)

- Sensitivity table: Each cell should be a formula computing implied price for that row's WACC and column's terminal growth rate, referencing the DCF Model sheet for PV of FCFs, terminal FCF, debt, cash, and shares.
- Scenario Analysis: Implied prices should be formulas (e.g., revenue *EBITDA margin* EV/EBITDA multiple / (1+WACC)^5, adjusted for net cash). Probability-weighted target = SUMPRODUCT of probabilities and prices.

- Financial Summary: Derived metrics (gross profit, margins, net cash, FCF, ROE) should be formulas referencing the raw data cells, not hardcoded.
- Cross-sheet references use the format: ='DCF Model'!B42

- Test: Open the Excel file, change WACC from 12.5% to 10%, and verify the implied share price, sensitivity table, and scenario prices all update. If anything stays static, it's broken.

Formatting standards:

- Professional header row with navy (#003366) background and white text
- Alternating row shading for data tables

- Number formatting: currency with commas ($#,##0), percentages (0.0%), large numbers in millions ($#,##0M)
- Input cells (assumptions) highlighted in light yellow (#FFFFCC) with medium borders to visually distinguish from calculated cells

- Freeze panes on header rows
- Column widths auto-sized for readability

Present the Excel model to the user in chat alongside the PDF.

Step 4 (OPTIONAL): Build the web app

Only build if the user requests an interactive dashboard or web view. When building the web app:

Design it as a native web dashboard — responsive, interactive charts (Recharts), scrollable sections. Do NOT make it a literal PDF replica with fixed-size page containers.

Hardcode data in a centralized data file (src/data/report-data.ts) — no backend API needed for static analysis.

Use the react-vite skill and generateFrontend() for scaffolding.

PDF Report — Professional Research Report (Sell-Side Format)

The PDF should look like a sell-side initiation note from Goldman, Morgan Stanley, or JP Morgan. This is the primary deliverable — invest the most effort here.

Report Structure

Page 1 — Cover / Executive Summary:

Disclaimer line (required): "This report is for informational purposes only and does not constitute investment advice. It is not a recommendation to buy, sell, or hold any security."

Company name, ticker, exchange, current price, market cap

Rating: Buy / Hold / Sell with price target and upside/downside %

Investment thesis in 3-4 bullet points (the "elevator pitch")

Key metrics snapshot: P/E, EV/EBITDA, revenue growth, FCF yield

A 1-year price chart (generated via matplotlib, embedded as image)

Investor Profile box (only if profile was collected): Show risk tolerance, time horizon, and income preference in a small summary box

Pages 2-3 — Investment Thesis:

Bull case (with probability weighting if possible)

Bear case (required — what kills this trade?)

Key catalysts with expected timeline

Competitive positioning / moat analysis

Pages 3-4 — Financial Analysis:

Revenue breakdown by segment (with a stacked bar chart)

Margin trends over 4+ quarters (with a line chart)

FCF bridge / waterfall

Balance sheet health (debt maturity, liquidity)

Peer comparison table (pulled from yfinance for 3-5 peers)

Page 5 — Valuation:

DCF model summary (show assumptions: WACC, terminal growth, revenue CAGR)

Comparable company analysis table

Historical valuation range (P/E or EV/EBITDA band chart)

Price target derivation

Page 6 — Technical Analysis:

Price chart with 50/200 SMA overlay (generated via matplotlib)

Volume analysis

Key support/resistance levels

RSI chart

Page 7 — Risks:

Ranked by probability x impact

Regulatory, competitive, execution, macro risks

Specific to this company, not generic boilerplate

Final Page — Sources & Disclaimer:

Full citation list with dates for every external source referenced

Full disclaimer (required — use the exact text from the "Limitations & Disclaimer" section below)

If investor profile was collected, include a closing note: "This analysis was tailored to a [risk tolerance] risk profile with a [time horizon] time horizon. Your actual circumstances may differ. Consult a licensed financial advisor before making investment decisions."

PDF Generation with fpdf2

Use fpdf2 (Python) to generate the PDF. Install: pip install fpdf2.

from fpdf import FPDF

class ResearchReport(FPDF):

def header(self):

if self.page_no() == 1:

return

self.set_font("Helvetica", "B", 8)

self.set_text_color(0, 51, 102)

self.cell(0, 6, "Company (TICKER) | Equity Research Report", align="L")

self.cell(0, 6, "Report Date", align="R", new_x="LMARGIN", new_y="NEXT")

self.set_draw_color(0, 51, 102)

self.line(10, self.get_y(), 200, self.get_y())

self.ln(2)

def footer(self):

self.set_y(-15)

self.set_font("Helvetica", "I", 7)

self.cell(0, 10, f"Page {self.page_no()}/{{nb}}", align="C")

def ensure_space(self, needed_mm):

"""Check if needed_mm of vertical space remains on the current page.

If not, insert a page break. Call this before any section that has a

title + table/chart combo to prevent them from splitting across pages."""

if self.get_y() + needed_mm > self.h - self.b_margin:

self.add_page()

pdf = ResearchReport()

pdf.alias_nb_pages()

pdf.set_auto_page_break(auto=True, margin=15)

pdf.add_page()

## Title

pdf.set_font("Helvetica", "B", 24)

pdf.cell(0, 12, "Company Analysis", ln=True)

## Embed chart (w=160, NOT 190 — see chart sizing notes below)

pdf.image("reports/charts/price_chart.png", x=15, w=160)

pdf.output("reports/Research_Report.pdf")

Critical: Text Encoding for fpdf2

fpdf2 uses latin-1 encoding by default. Special Unicode characters will cause errors or render as garbage. Before writing any text to the PDF, sanitize it:

def sanitize_text(text):

replacements = {

"\u2014": "-", \# em-dash

"\u2013": "-", \# en-dash

"\u2018": "'", \# left single quote

"\u2019": "'", \# right single quote

"\u201c": '"', \# left double quote

"\u201d": '"', \# right double quote

"\u2022": "*", \# bullet

"\u2026": "...", \# ellipsis

"\u00a0": " ", \# non-breaking space

"\u2212": "-", \# minus sign

"\u00b7": "*", \# middle dot

}

for char, replacement in replacements.items():

text = text.replace(char, replacement)

return text.encode("latin-1", errors="replace").decode("latin-1")

Apply sanitize_text() to every string before passing it to pdf.cell(), pdf.multi_cell(), or pdf.write(). This is not optional — text from web scraping, yfinance, and deep research will contain Unicode characters that break the PDF.

Avoiding Common fpdf2 Issues

Chart sizing — DO NOT use w=190 (full page width): Charts generated by matplotlib at 150 DPI are typically 1500-1700px wide and 800-1000px tall. At w=190mm, fpdf2 scales them proportionally, producing chart heights of 90-130mm — nearly half an A4 page. This pushes the chart to the next page, leaving a large white gap below the section title. Use w=160 (centered with x=15) as the default chart width. This keeps charts at ~75-110mm tall, which fits comfortably on a page alongside a title and surrounding content.

Section splitting across pages: fpdf2's auto page break only triggers when content would overflow — it does NOT keep a section title together with its table or chart. A subtitle at y=270 will render on the current page, but the table below it starts on the next page, leaving the title orphaned. To prevent this, implement an ensure_space(needed_mm) method (see sample code above) and call it before every subtitle+table or subtitle+chart combo. Estimate the needed space: title (~7mm) + table header (~6mm) + rows (5mm each) + body text if any. For charts, use ~80mm. For tables with 5-8 rows, use ~50-55mm.

Spacing discipline: Use tight spacing throughout. Recommended values: ln(0.5) after subtitles, ln(1) between sections, ln(1.5) between major sections. Avoid ln(3) or higher — it adds up fast across a multi-page report. Body text line height should be 4mm, bullet line height 4mm, table rows 5mm, table headers 6mm. These small values compound: a report with 20 sections saves 40-60mm of vertical space vs. generous spacing, which is nearly an entire extra page of content.

Auto page break margin: Use margin=15, not margin=20. The default 20mm wastes 5mm per page (45mm across a 9-page report). 15mm provides enough room for the footer without wasting space.

Long text overflow: Use multi_cell() for paragraphs, not cell(). cell() truncates at one line.

Table column overflow: cell() does NOT clip or wrap text — it renders beyond the cell boundary, causing text to overflow into adjacent columns or off the page. For tables with a wide text column (like "Details" in a risk matrix), allocate most of the width to that column. Example: [45, 24, 24, 97] instead of [55, 27, 27, 81]. Also shorten text strings to fit: abbreviate "Medium" to "Med", truncate long names ("Valuation Compression" -> "Valuation Compress."), and tighten phrasing. At 8pt Helvetica, a 97mm column fits roughly 50-55 characters. Test visually and shorten any string that overflows.

Table alignment: Right-align numbers, left-align text. Use cell() with explicit widths for table columns.

Font availability: Stick to built-in fonts: Helvetica, Times, Courier. These require no font file embedding. If you need bold/italic, use the style parameter: set_font("Helvetica", "B", 12).

Styling Guidelines

Header bar on each page (except cover) with company name, ticker, report date, and page number

Data tables with alternating row shading, right-aligned numbers, 8pt font, 5mm row height

Charts at w=160 (not full width) centered with x=15, with clear titles and axis labels

Callout boxes for key insights ("Management guided 15% revenue growth in Q4 call")

Source citations as footnotes or inline parenthetical references

Professional typography: 9pt body text (4mm line height), 8pt table text (5mm row height), 10pt subtitles, 13pt section headers. Keep spacing tight — ln(0.5) to ln(1.5) between elements, never ln(3) or higher.

Color palette: Navy (#003366) for headers, dark gray (#333333) for body text, green (#228B22) for positive metrics, red (#CC0000) for negative metrics

Page density: Aim for dense, information-rich pages with minimal white space. Every page should feel full. If a page has more than 40mm of unused space at the bottom, either pull the next section up (by removing the forced add_page()) or increase chart/table sizes to fill the space.

Avoid forced page breaks between sections: Do NOT use add_page() between every section. This creates large white gaps when the previous section ends partway down the page. Instead, let content flow continuously and use ensure_space(needed_mm) to trigger a page break only when there isn't enough room for the next section's title + content. Only use add_page() for truly standalone sections (e.g., cover page, disclaimer page). For everything else — financial tables, charts, risk matrices, catalysts — let them flow naturally with ensure_space() guarding against orphaned titles.

Best Practices

Timestamp everything — state data pull date; yfinance prices are ~15min delayed

Sector-relative only — a 30 P/E is cheap in software, expensive in utilities

Label facts vs thesis — "FCF yield is 6%" (fact) vs "undervalued" (opinion)

Bear case required — every analysis must include: what kills this trade?

Position sizing reality — no single stock >5% for most retail portfolios; if conviction demands 20%, the conviction is the problem

Limitations & Disclaimer

Include the following disclaimer text (or substantially similar language) on the final page of every PDF report and at the bottom of every web dashboard:

IMPORTANT DISCLAIMER: This report is produced for informational and educational purposes only. It does not constitute investment advice, a recommendation, or a solicitation to buy, sell, or hold any security or financial instrument. The information contained herein is based on publicly available data sources that may be incomplete, delayed, or inaccurate. No representation or warranty, express or implied, is made as to the accuracy, completeness, or reliability of the information provided.

Any opinions, estimates, or projections expressed are those of an automated analysis system and do not reflect the views of any licensed financial institution, registered investment advisor, or broker-dealer. Past performance is not indicative of future results. All investments carry risk, including the potential loss of principal.

Before making any investment decision, you should consult with a qualified, licensed financial advisor who can assess your individual circumstances, risk tolerance, and financial goals. The authors and publishers of this report accept no liability for any loss or damage arising from reliance on the information contained herein.

Technical limitations:

yfinance scrapes Yahoo Finance — occasionally breaks, data may lag filings by days or weeks

Cannot access Bloomberg, FactSet, Refinitiv, or real-time Level 2 market data

Cannot execute trades, manage portfolios, or provide personalized financial planning

Data is delayed (typically 15-20 minutes for prices; financials may lag quarterly filings)

All equities can decline to zero; sector and thematic analysis reflects a point-in-time snapshot that may not reflect rapid market changes

Closing Prompt

After presenting the PDF report and DCF Excel model to the user, always end the reply with:

"Let me know if you'd like me to build an interactive web page for these findings as well."
