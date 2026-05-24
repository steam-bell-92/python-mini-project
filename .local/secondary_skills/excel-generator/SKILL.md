---
name: excel-generator
description: Create Excel spreadsheets with formulas, charts, pivot summaries, and financial models.
---

# Excel & Spreadsheet Generator

Create .xlsx files, Google Sheets, and PDF exports with formulas, formatting, charts, data validation, pivot summaries, and financial models.

Library Selection

Need Use Install

Create new .xlsx from scratch, fast, large files xlsxwriter pip install xlsxwriter

Read/modify existing .xlsx, or round-trip edits openpyxl pip install openpyxl

Read legacy .xls (Excel 97-2003) xlrd pip install xlrd

Dump a DataFrame quickly df.to_excel() uses openpyxl/xlsxwriter as engine

Generate Google Sheets gspread + google-auth pip install gspread google-auth

Export to PDF LibreOffice CLI system dependency (see PDF section)

Key gotchas:

Neither openpyxl nor xlsxwriter can read .xls — only .xlsx. Use xlrd for .xls.

xlsxwriter is write-only — it cannot open an existing file. Use openpyxl to edit.

openpyxl uses ~50x the file size in RAM. For 100K+ rows, use xlsxwriter or openpyxl.Workbook(write_only=True).

Formulas are stored as strings — Python does not evaluate them. Excel computes on open. openpyxl reading a formula cell gives you =SUM(A1:A10), not the result (unless you use data_only=True, which reads the last cached value).

Core Recipe — openpyxl

from openpyxl import Workbook

from openpyxl.styles import Font, PatternFill, Alignment, Border, Side

from openpyxl.utils import get*column*letter

from openpyxl.worksheet.table import Table, TableStyleInfo

from openpyxl.formatting.rule import ColorScaleRule, DataBarRule

from openpyxl.worksheet.datavalidation import DataValidation

wb = Workbook()

ws = wb.active

ws.title = "Sales"

headers = ["Product", "Units", "Price", "Revenue"]

ws.append(headers)

rows = [("Widget", 120, 9.99), ("Gadget", 80, 14.50), ("Gizmo", 200, 4.25)]

for r in rows:

ws.append(r)

for row in range(2, len(rows) + 2):

ws[f"D{row}"] = f"=B{row}*C{row}"

ws[f"D{len(rows)+2}"] = f"=SUM(D2:D{len(rows)+1})"

header*fill = PatternFill(start*color="2F5496", fill_type="solid")

for cell in ws[1]:

cell.font = Font(bold=True, color="FFFFFF")

cell.fill = header_fill

cell.alignment = Alignment(horizontal="center")

cell.border = Border(bottom=Side(border_style="medium"))

for row in ws.iter*rows(min*row=2, min*col=3, max*col=4):

for cell in row:

cell.number_format = '"$"#,##0.00'

for col in ws.columns:

max_len = max(len(str(c.value or "")) for c in col)

ws.column*dimensions[get*column*letter(col[0].column)].width = max*len + 3

ws.freeze_panes = "A2"

tab = Table(displayName="SalesTable", ref=f"A1:D{len(rows)+1}")

tab.tableStyleInfo = TableStyleInfo(name="TableStyleMedium9", showRowStripes=True)

ws.add_table(tab)

ws.conditional_formatting.add(f"D2:D{len(rows)+1}",

DataBarRule(start*type="min", end*type="max", color="638EC6"))

dv = DataValidation(type="list", formula1='"Active,Paused,Archived"', allow_blank=True)

ws.add*data*validation(dv)

dv.add("E2:E100")

wb.save("output.xlsx")

Charts (openpyxl)

from openpyxl.chart import BarChart, LineChart, PieChart, Reference

chart = BarChart()

chart.title = "Revenue by Product"

chart.y_axis.title = "Revenue ($)"

data = Reference(ws, min*col=4, min*row=1, max_row=4)

cats = Reference(ws, min*col=1, min*row=2, max_row=4)

chart.add*data(data, titles*from_data=True)

chart.set_categories(cats)

ws.add_chart(chart, "F2")

Chart gotchas:

Reference uses 1-indexed rows/cols (not 0-indexed).

titles*from*data=True consumes the first row of the data range as the series label — include the header row in data but NOT in cats.

Supported: BarChart, LineChart, PieChart, ScatterChart, AreaChart, DoughnutChart, RadarChart. 3D variants exist but render inconsistently.

Charts reference cells — if you later insert rows above, the chart range does NOT auto-adjust.

xlsxwriter (faster, write-only, richer formatting)

import xlsxwriter

wb = xlsxwriter.Workbook("report.xlsx")

ws = wb.add_worksheet("Data")

header*fmt = wb.add*format({"bold": True, "bg*color": "#2F5496", "font*color": "white", "border": 1})

money*fmt = wb.add*format({"num_format": "$#,##0.00"})

ws.write*row(0, 0, ["Product", "Units", "Price", "Revenue"], header*fmt)

data = [("Widget", 120, 9.99), ("Gadget", 80, 14.50)]

for i, (p, u, pr) in enumerate(data, start=1):

ws.write(i, 0, p)

ws.write(i, 1, u)

ws.write(i, 2, pr, money_fmt)

ws.write*formula(i, 3, f"=B{i+1}*C{i+1}", money*fmt)

ws.autofit()

ws.freeze_panes(1, 0)

wb.close()

pandas Shortcut (multi-sheet with formatting)

import pandas as pd

with pd.ExcelWriter("out.xlsx", engine="xlsxwriter") as writer:

df.to*excel(writer, sheet*name="Data", index=False)

summary.to*excel(writer, sheet*name="Summary", index=False)

wb, ws = writer.book, writer.sheets["Data"]

ws.set_column("A:A", 20)

ws.autofilter(0, 0, len(df), len(df.columns) - 1)

Google Sheets Generation

Use the gspread library with a service account or OAuth credentials. Requires the Google Sheets API and Google Drive API enabled.

Setup: Check if a Google Sheets integration is available via Replit integrations first. If not, the user needs to provide a service account JSON key.

import gspread

from google.oauth2.service_account import Credentials

scopes = [

"<https://www.googleapis.com/auth/spreadsheets>",

"<https://www.googleapis.com/auth/drive>",

]

creds = Credentials.from*service*account*file("service*account.json", scopes=scopes)

gc = gspread.authorize(creds)

sh = gc.create("Sales Report Q1")

ws = sh.sheet1

ws.update_title("Revenue")

ws.update("A1:D1", [["Product", "Units", "Price", "Revenue"]])

data = [["Widget", 120, 9.99], ["Gadget", 80, 14.50], ["Gizmo", 200, 4.25]]

ws.update(f"A2:C{len(data)+1}", data)

for i in range(2, len(data) + 2):

ws.update_acell(f"D{i}", f"=B{i}*C{i}")

ws.format("A1:D1", {

"backgroundColor": {"red": 0.18, "green": 0.33, "blue": 0.59},

"textFormat": {"bold": True, "foregroundColor": {"red": 1, "green": 1, "blue": 1}},

"horizontalAlignment": "CENTER"

})

ws.format(f"C2:D{len(data)+1}", {"numberFormat": {"type": "CURRENCY", "pattern": "$#,##0.00"}})

ws.freeze(rows=1)

sh.share("<user@example.com>", perm_type="user", role="writer")

print(f"Spreadsheet URL: {sh.url}")

Batch updates (faster for large writes):

ws.batch_update([

{"range": "A1:D1", "values": [headers]},

{"range": f"A2:C{len(data)+1}", "values": data},

])

Google Sheets gotchas:

API rate limits: 60 requests/min per user, 300 requests/min per project. Batch writes to stay under.

update() overwrites — it does not append. Use append_rows() to add to the end.

Formulas work the same as Excel (US-English function names).

Charts must be created via the Sheets API v4 batchUpdate with addChart request — gspread does not have a chart helper.

Conditional formatting requires gspread.utils or raw API calls.

Alternative — upload .xlsx to Google Drive:

from googleapiclient.discovery import build

from googleapiclient.http import MediaFileUpload

drive = build("drive", "v3", credentials=creds)

file_metadata = {"name": "Report", "mimeType": "application/vnd.google-apps.spreadsheet"}

media = MediaFileUpload("report.xlsx",

mimetype="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")

file = drive.files().create(body=file*metadata, media*body=media,

fields="id,webViewLink").execute()

print(f"Google Sheets URL: {file['webViewLink']}")

PDF Export & Print Layout

Method 1: LibreOffice CLI (best fidelity)

libreoffice --headless --calc --convert-to pdf --outdir ./output report.xlsx

import subprocess

def xlsx*to*pdf(input*path, output*dir="./output"):

result = subprocess.run(

["libreoffice", "--headless", "--calc", "--convert-to", "pdf",

"--outdir", output*dir, input*path],

capture_output=True, text=True, timeout=60

)

if result.returncode != 0:

raise RuntimeError(f"Conversion failed: {result.stderr}")

return f"{output*dir}/{input*path.rsplit['/', 1](-1).replace('.xlsx', '.pdf')}"

Method 2: Print Layout in openpyxl

from openpyxl.worksheet.page import PageMargins, PrintPageSetup

ws.page_setup.orientation = "landscape"

ws.page*setup.paperSize = ws.PAPERSIZE*LETTER

ws.page_setup.fitToWidth = 1

ws.page_setup.fitToHeight = 0

ws.sheet_properties.pageSetUpPr.fitToPage = True

ws.page_margins = PageMargins(left=0.5, right=0.5, top=0.75, bottom=0.75,

header=0.3, footer=0.3)

ws.oddHeader.center.text = "Sales Report — Q1 2026"

ws.oddHeader.center.font = "Arial,Bold"

ws.oddHeader.center.size = 12

ws.oddFooter.center.text = "Page &P of &N"

ws.oddFooter.right.text = "&D"

ws.print*title*rows = "1:1"

ws.print*area = f"A1:F{last*row}"

ws.row_breaks.append(openpyxl.worksheet.pagebreak.Break(id=25))

Method 3: Print Layout in xlsxwriter

ws.set_landscape()

ws.set_paper(1)

ws.fit*to*pages(1, 0)

ws.set_margins(left=0.5, right=0.5, top=0.75, bottom=0.75)

ws.set_header("&C&\\Arial,Bold\\&14 Sales Report")

ws.set_footer("&CPage &P of &N")

ws.repeat_rows(0)

ws.print*area(0, 0, last*row, 5)

ws.set*page*break(25, 0)

Print layout tips:

Always set fitToWidth=1 for wide tables — prevents columns from being cut off across pages.

Use repeat_rows to repeat headers on every page — critical for multi-page tables.

Set margins to 0.5" for data-heavy sheets, 0.75"+ for presentation sheets.

Test with landscape for tables wider than 6 columns.

For Excel-native PDF: the user can also do File > Export > PDF in Excel after opening.

Financial Model Recipes

See `financial-models.md` for complete recipes covering:

3-Statement Model — Income Statement, Balance Sheet, Cash Flow linked together

DCF (Discounted Cash Flow) — FCF projections, discount factors, terminal value, equity bridge

LBO (Leveraged Buyout) — Sources & Uses, debt schedule, cash sweep, MOIC/IRR

Comparable Company Analysis — Comp table with multiples, summary stats, implied valuation

Merger Model (M&A) — Accretion/dilution analysis, pro forma EPS

Common patterns across all financial models:

Yellow-highlighted cells (#FFF2CC) = user inputs; everything else is formulas

Use freeze_panes on row 1 (headers) and column A (labels)

Currency format: '"$"#,##0.0' for millions, '"$"#,##0.00' for precise

Multiple format: '0.0x' for EV/EBITDA, leverage ratios

Totals use double-bottom border ("bottom": 6 in xlsxwriter)

Use named ranges or cell references to the Assumptions sheet for all inputs — never hardcode values in formula sheets

Always add a section_fmt for visual grouping (bold, light blue background, top+bottom border)

Pivot-Table-Style Summaries

Python cannot create native Excel PivotTables programmatically (they require cached data). Instead, build the equivalent summary using formulas or pandas aggregation.

Pattern 1: pandas groupby to formatted Excel output

import pandas as pd

df = pd.DataFrame({

"Region": ["East", "East", "West", "West", "East", "West"],

"Product": ["Widget", "Gadget", "Widget", "Gadget", "Widget", "Gadget"],

"Revenue": [120, 80, 150, 90, 200, 110],

"Units": [10, 5, 12, 6, 15, 8],

})

pivot = df.pivot_table(

values=["Revenue", "Units"],

index="Region",

columns="Product",

aggfunc="sum",

margins=True,

margins_name="Total"

)

pivot.columns = [f"{val} - {prod}" for val, prod in pivot.columns]

pivot = pivot.reset_index()

with pd.ExcelWriter("pivot_report.xlsx", engine="xlsxwriter") as writer:

df.to*excel(writer, sheet*name="Data", index=False)

pivot.to*excel(writer, sheet*name="Summary", index=False)

ws = writer.sheets["Summary"]

ws.autofit()

hdr*fmt = writer.book.add*format(

{"bold": True, "bg*color": "#2F5496", "font*color": "white"})

for col_num, value in enumerate(pivot.columns):

ws.write(0, col*num, value, hdr*fmt)

Pattern 2: SUMIFS-based pivot using formulas (dynamic in Excel)

import xlsxwriter

wb = xlsxwriter.Workbook("formula_pivot.xlsx")

ws*data = wb.add*worksheet("Data")

ws*pivot = wb.add*worksheet("Pivot")

headers = ["Region", "Product", "Revenue"]

data_rows = [("East", "Widget", 120), ("East", "Gadget", 80),

("West", "Widget", 150), ("West", "Gadget", 90),

("East", "Widget", 200), ("West", "Gadget", 110)]

ws*data.write*row(0, 0, headers)

for i, row in enumerate(data_rows, 1):

ws*data.write*row(i, 0, row)

last*data = len(data*rows)

regions = ["East", "West"]

products = ["Widget", "Gadget"]

ws_pivot.write(0, 0, "Region \\ Product")

for j, prod in enumerate(products):

ws_pivot.write(0, j + 1, prod)

ws_pivot.write(0, len(products) + 1, "Total")

for i, region in enumerate(regions):

ws_pivot.write(i + 1, 0, region)

for j, prod in enumerate(products):

ws*pivot.write*formula(i + 1, j + 1,

f'=SUMIFS(Data!C2:C{last*data+1}, Data!A2:A{last*data+1}, '

f'A{i+2}, Data!B2:B{last_data+1}, {chr(66+j)}1)')

ws*pivot.write*formula(i + 1, len(products) + 1,

f"=SUM(B{i+2}:{chr(65+len(products))}{i+2})")

ws_pivot.write(len(regions) + 1, 0, "Total")

for j in range(len(products) + 1):

col_letter = chr(66 + j)

ws*pivot.write*formula(len(regions) + 1, j + 1,

f"=SUM({col*letter}2:{col*letter}{len(regions)+1})")

wb.close()

Pattern 3: Multi-dimension pivot with percentage columns

## After building a pivot, add percentage-of-total columns

## =Cell / ColumnTotal formatted as "0.0%"

## =Cell / RowTotal formatted as "0.0%"

## Use IFERROR to handle division by zero

Multi-Workbook Linking

Excel supports cross-workbook references using [filename.xlsx]SheetName!Cell syntax. Python can write these formulas as strings.

Writing cross-workbook references

import xlsxwriter

wb = xlsxwriter.Workbook("master_report.xlsx")

ws = wb.add_worksheet("Consolidated")

ws.write(0, 0, "Region")

ws.write(0, 1, "Revenue")

ws.write(0, 2, "EBITDA")

regions = [

("East", "east_data.xlsx"),

("West", "west_data.xlsx"),

("Central", "central_data.xlsx"),

]

for i, (region, filename) in enumerate(regions, 1):

ws.write(i, 0, region)

ws.write_formula(i, 1, f"='[{filename}]Summary'!B2")

ws.write_formula(i, 2, f"='[{filename}]Summary'!B5")

ws.write(len(regions) + 1, 0, "Total")

ws.write_formula(len(regions) + 1, 1, f"=SUM(B2:B{len(regions)+1})")

ws.write_formula(len(regions) + 1, 2, f"=SUM(C2:C{len(regions)+1})")

wb.close()

Multi-workbook gotchas:

External references only resolve when both files are open in Excel or when Excel has cached values.

Python writes the formula string only — no values are cached. On first open, Excel will show \#REF! until the linked file is also open or the link is updated.

File paths in references can be relative ([file.xlsx]) or absolute ('C:\Reports\\file.xlsx]'). Prefer relative for portability.

When generating a suite of workbooks, generate all data workbooks first, then the master.

Google Sheets uses IMPORTRANGE("spreadsheet_url", "Sheet1!A1:B10") instead of bracket syntax.

Generating a workbook suite

import xlsxwriter

regions = {"East": [100, 200, 150], "West": [180, 220, 190],

"Central": [90, 110, 130]}

for region, revenues in regions.items():

wb = xlsxwriter.Workbook(f"{region.lower()}_data.xlsx")

ws = wb.add_worksheet("Summary")

ws.write(0, 0, "Quarter")

ws.write(0, 1, "Revenue")

for i, rev in enumerate(revenues, 1):

ws.write(i, 0, f"Q{i}")

ws.write(i, 1, rev)

ws.write(len(revenues) + 1, 0, "Total")

ws.write_formula(len(revenues) + 1, 1, f"=SUM(B2:B{len(revenues)+1})")

wb.close()

Excel Data Tables (Sensitivity Analysis)

Excel Data Tables (What-If Analysis > Data Table) let you vary one or two inputs and see how an output changes. Python cannot create native data tables, but you can build the equivalent grid of formulas.

One-Way Data Table

import xlsxwriter

wb = xlsxwriter.Workbook("sensitivity_1way.xlsx")

ws = wb.add_worksheet("Sensitivity")

ws.write(0, 0, "Revenue")

ws.write(0, 1, 1000)

ws.write(1, 0, "Margin")

ws.write(1, 1, 0.20)

ws.write(2, 0, "EBITDA")

ws.write_formula(2, 1, "=B1*B2")

margins = [0.10, 0.15, 0.20, 0.25, 0.30]

ws.write(4, 0, "Margin Sensitivity")

ws.write(5, 0, "Margin")

ws.write(5, 1, "EBITDA")

pct*fmt = wb.add*format({"num_format": "0.0%"})

money*fmt = wb.add*format({"num_format": '"$"#,##0.0'})

for i, margin in enumerate(margins):

ws.write(6 + i, 0, margin, pct_fmt)

ws.write*formula(6 + i, 1, f"=B1*A{7+i}", money*fmt)

wb.close()

Two-Way Data Table (Sensitivity Grid)

import xlsxwriter

wb = xlsxwriter.Workbook("sensitivity_2way.xlsx")

ws = wb.add_worksheet("IRR Sensitivity")

hdr = wb.add*format({"bold": True, "bg*color": "#1B3A5C",

"font_color": "white", "align": "center"})

corner = wb.add*format({"bold": True, "bg*color": "#1B3A5C",

"font*color": "white", "align": "center", "text*wrap": True})

pct = wb.add*format({"num*format": "0.0%", "align": "center"})

x*fmt = wb.add*format({"num_format": "0.0x", "align": "center"})

cell*pct = wb.add*format({"num_format": "0.0%", "align": "center",

"bg_color": "#F2F2F2"})

ws.write(0, 0, "Entry EBITDA")

ws.write(0, 1, 100)

ws.write(1, 0, "Equity Invested")

ws.write(1, 1, 400)

ws.write(2, 0, "Hold Period")

ws.write(2, 1, 5)

exit_multiples = [6.0, 7.0, 8.0, 9.0, 10.0]

ebitda*growth*rates = [0.00, 0.03, 0.05, 0.08, 0.10, 0.12]

start_row = 5

ws.write(start_row, 0, "EBITDA Growth \\ Exit Multiple", corner)

for j, mult in enumerate(exit_multiples):

ws.write(start*row, j + 1, mult, x*fmt)

for i, growth in enumerate(ebitda*growth*rates):

r = start_row + 1 + i

ws.write(r, 0, growth, pct)

for j, mult in enumerate(exit_multiples):

ws.write_formula(r, j + 1,

f"=IFERROR((B1*(1+A{r+1})^B3*{mult}/B2)^(1/B3)-1, 0)",

cell_pct)

ws.conditional*format(start*row+1, 1,

start*row+len(ebitda*growth*rates), len(exit*multiples), {

"type": "3*color*scale",

"min_color": "#F8696B",

"mid_color": "#FFEB84",

"max_color": "#63BE7B",

})

ws.autofit()

wb.close()

Data table tips:

Always use IFERROR wrappers — edge cases (negative equity, zero denominators) will produce \#DIV/0! or \#NUM!.

Apply 3-color-scale conditional formatting to make the grid scannable at a glance.

Label the corner cell clearly (e.g., "Growth \\ Multiple") so users know which axis is which.

For financial models, common sensitivity pairs: Entry Multiple vs Exit Multiple, Revenue Growth vs EBITDA Margin, WACC vs Terminal Growth.

Large Dataset Handling

For datasets exceeding 100K rows, standard openpyxl will consume excessive memory. Use these strategies:

xlsxwriter (streaming by default)

import xlsxwriter

wb = xlsxwriter.Workbook("large*dataset.xlsx", {"constant*memory": True})

ws = wb.add_worksheet()

ws.write_row(0, 0, ["ID", "Name", "Value", "Category", "Date"])

for i in range(1, 1*000*001):

ws.write*row(i, 0, [i, f"Item*{i}", i * 1.5, f"Cat_{i % 10}", "2026-01-01"])

wb.close()

constant_memory: True — reduces RAM usage further by flushing rows to disk. Trade-off: you cannot go back and edit earlier rows.

openpyxl write-only mode

from openpyxl import Workbook

wb = Workbook(write_only=True)

ws = wb.create_sheet("Data")

ws.append(["ID", "Name", "Value"])

for i in range(1, 500_001):

ws.append([i, f"Item_{i}", i * 1.5])

wb.save("large_openpyxl.xlsx")

write_only gotchas:

Cannot read or modify cells after writing — append-only.

Cannot add tables, merged cells, or conditional formatting.

Cannot set column widths (use xlsxwriter if you need formatting + large data).

Chunked reading of large files

from openpyxl import load_workbook

wb = load*workbook("huge*file.xlsx", read*only=True, data*only=True)

ws = wb.active

batch = []

for i, row in enumerate(ws.iter*rows(min*row=2, values_only=True)):

batch.append(row)

if len(batch) >= 10_000:

process_batch(batch)

batch = []

if batch:

process_batch(batch)

wb.close()

pandas chunked processing

import pandas as pd

chunks = pd.read*excel("huge*file.xlsx", sheet_name="Data", engine="openpyxl",

dtype={"ID": int, "Value": float},

usecols=["ID", "Name", "Value"])

for chunk in pd.read*csv("data.csv", chunksize=50*000):

process(chunk)

Performance comparison

Method Max Rows (practical) RAM for 1M rows Formatting

xlsxwriter constant_memory 1M+ ~200MB Full

xlsxwriter normal 1M+ ~500MB Full

openpyxl write_only 500K ~1GB None

openpyxl normal 100K ~5GB Full

pandas to_excel (xlsxwriter) 1M+ ~800MB Via engine

Decision tree:

Need formatting + large data -> xlsxwriter with constant_memory: True

Need to read + modify large file -> openpyxl read_only + process + xlsxwriter output

Just need data dump -> pandas to_excel with xlsxwriter engine

Over 1M rows -> split across multiple sheets (Excel limit is 1,048,576 rows per sheet)

Common Formula Patterns

Need Formula

Running total =SUM($B$2:B2) (drag down)

Lookup (modern) =XLOOKUP(A2, Data!A:A, Data!C:C, "Not found")

Lookup (compat) =VLOOKUP(A2, Data!A:C, 3, FALSE)

Conditional sum =SUMIFS(C:C, A:A, "Widget", B:B, ">100")

Count matching =COUNTIFS(A:A, "Active")

Percent of total =B2/SUM($B$2:$B$100)

Safe division =IFERROR(A2/B2, 0)

Gotcha: When writing formulas from Python, use US-English function names and comma separators regardless of the user's locale. Excel translates on open.

Number Format Codes

Format Code

Currency "$"#,##0.00

Thousands \#,##0

Percent 0.0%

Date yyyy-mm-dd

Negative in red \#,##0;[Red]-#,##0

Multiple (e.g. 2.5x) 0.0x

Millions shorthand \#,##0.0,,"M"

Accounting (neg in parens) "$"#,##0.00_);[Red]("$"#,##0.00)

Data Gathering — Use Web Search When Relevant

Before building the spreadsheet, determine whether the data requires external research. If the user asks for a report, analysis, or dataset about a public company, industry, market, or any publicly available information, use webSearch and webFetch to gather real data first.

Examples that require web search:

"Build me a financial model for Tesla" -> search for Tesla's latest 10-K/10-Q, revenue, margins, guidance

"Create a comp table for SaaS companies" -> search for revenue, ARR, multiples, headcount

"Make a spreadsheet comparing EV manufacturers" -> search for production numbers, market cap, deliveries

"Summarize Apple's last 5 quarters" -> search for quarterly earnings data

Do not fabricate numbers. If you cannot find a specific data point, leave the cell blank or mark it as "N/A -- not found" rather than guessing. Always cite the source (e.g., "Source: Tesla 10-K FY2025") in a notes row or sheet.

Output

Always present key findings and recommendations as a plaintext summary in chat, even when also generating files. The user should be able to understand the results without opening any files.

Limitations

Cannot write VBA macros (.xlsm requires keep_vba=True in openpyxl to preserve existing macros, not create them)

Formulas are not computed by Python -- open in Excel/LibreOffice to see results

openpyxl auto-width is an approximation (no font metrics); xlsxwriter's autofit() is better

Google Sheets import may drop some conditional formatting and chart styles

Cannot create native Excel PivotTables -- use formula-based or pandas-based summaries instead

Cannot create native Excel Data Tables (What-If) -- use formula grids as equivalent

Cross-workbook references show \#REF! until linked files are opened in Excel

Excel row limit is 1,048,576 per sheet -- split larger datasets across sheets
