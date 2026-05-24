---
name: supplier-research
description: Research, evaluate, and compare suppliers and vendors for B2B procurement
---

# Supplier & Vendor Research

Research, evaluate, and compare suppliers and vendors for B2B procurement. Build vendor shortlists, evaluation matrices, and RFP frameworks.

## When to Use

- User needs to find suppliers for a product, service, or component
- User wants to evaluate and compare vendors
- User needs an RFP or vendor evaluation framework
- User asks about procurement best practices
- User wants to assess supplier risk or negotiate better terms

## When NOT to Use

- Personal product shopping (use personal-shopper skill)
- Competitive market analysis (use competitive-analysis skill)
- Software/SaaS evaluation only (use deep-research skill)

## Methodology

### Step 1: Requirements Definition

Before researching suppliers, clarify:

**What you need:**

- Product/service specification (be specific)
- Volume/quantity requirements
- Quality standards and certifications needed
- Timeline and delivery requirements

**Constraints:**

- Budget range
- Geographic preferences (domestic, nearshore, offshore)
- Compliance requirements (ISO, SOC2, GDPR, industry-specific)
- Minimum order quantities
- Payment terms preferences

### Step 2: Supplier Discovery

Match the directory to the sourcing geography. Use `webSearch` + `webFetch` against these:

| Platform | Coverage | Best for | Caveat |
|----------|----------|----------|--------|
| **Thomasnet** | 500k+ North American suppliers | US/Canada industrial — machinery, plastics, metals, custom components. Free for buyers. Filter by ISO certs + CAD availability. | US-only; no pricing shown |
| **Alibaba** | 200k+ suppliers, 200M+ SKUs | China/Asia, prototype sampling, MOQ benchmarking across 5,900 categories | Many "manufacturers" are trading companies — verify with customs data |
| **Global Sources** | Asia, audited | Electronics, consumer goods. Stronger supplier audits than Alibaba. | Smaller catalog |
| **IndiaMART** | India | Textiles, chemicals, pharma intermediates, generics | Data quality varies widely |
| **Kompass / Europages** | EU | EU-based sourcing when GDPR/CE compliance matters | Limited free tier |
| **ImportYeti** (free) | US ocean freight records | **Verification, not discovery.** Look up a supplier to see real US customs shipment history — who they actually ship to, how often, what volume. Exposes trading companies posing as factories. | Sea freight only, US imports only |
| **Panjiva / ImportGenius** | Global trade data | Competitor supply chain mapping — find out who your competitors buy from | Paid, learning curve |

**Agent search patterns:**

- `site:thomasnet.com "[product] manufacturer" [state]` — direct directory scrape
- `site:alibaba.com "[product]" "verified supplier" "trade assurance"` — pre-filtered for badges
- `webFetch: importyeti.com/company/[supplier-name]` — verify real export activity before engaging
- `"[competitor product name]" "made in" OR "manufactured by"` — reverse-engineer competitor supply chains
- `site:alibaba.com "[product]" MOQ` — quickly benchmark minimum order quantities across suppliers

**2025 geography shift:** Vietnam, India, and Mexico are the primary China+1 alternatives. Mexico benefits from USMCA (no tariffs, 3-5 day freight vs 30+ from Asia). Vietnam is strong in furniture/electronics assembly. India is strong in textiles/pharma/software.

Target: 8-12 candidates for RFI, narrow to 3-5 for RFQ.

### Step 3: Vendor Evaluation Matrix

Score each vendor across weighted criteria:

| Category | Weight | Criteria |
|----------|--------|----------|
| **Quality** | 25% | Certifications, defect rates, QC processes, samples |
| **Cost** | 20% | Unit price, total cost of ownership, volume discounts, hidden fees |
| **Delivery** | 20% | Lead times, on-time delivery rate, shipping methods, inventory |
| **Capability** | 15% | Production capacity, scalability, technology, R&D |
| **Reliability** | 10% | Financial stability, years in business, references, insurance |
| **Compliance** | 10% | Regulatory compliance, certifications, ESG practices, data security |

**Scoring scale:** 1 (poor) to 5 (excellent) per criterion.

**Total Cost of Ownership (TCO):**
Don't just compare unit prices. Include:

- Purchase price
- Shipping and logistics
- Import duties and taxes
- Quality inspection costs
- Inventory carrying costs
- Switching costs
- Risk costs (what if they fail to deliver?)

### Step 4: Verification & Risk Assessment

**Verify the factory is real (the #1 failure mode in overseas sourcing):**

- **Customs data cross-check**: `webFetch` the supplier on ImportYeti — consistent monthly shipments to recognizable brands = real factory. Zero export history or shipments only to shell companies = trading company or fraud.
- **Certificate verification**: Don't trust uploaded PDFs. ISO 9001 certs have a cert number — verify on the issuing body's site (SGS, BV, TÜV, Intertek all have public lookup tools). `webSearch: "[cert body] certificate verification [cert number]"`.
- **Business license**: For China, request the Unified Social Credit Code (18 digits) — verifiable on the National Enterprise Credit system. For US, check state Secretary of State filings.
- **Address verification**: `webSearch` the factory address — Google Maps satellite view should show an industrial facility, not a residential block or office tower.
- **Alibaba badges**: "Verified Supplier" means a third party (SGS/BV) physically visited. "Gold Supplier" just means they paid a fee — it verifies nothing.

**Risk dimensions:**

| Risk type | Check | Red flags |
|-----------|-------|-----------|
| **Financial** | D&B report, years in business, customer concentration | <3 years operating, >40% revenue from one customer, requests 100% upfront payment |
| **Operational** | Factory count, capacity utilization, QC process docs | Single facility, no in-house QC team, won't allow video factory tour |
| **Geopolitical** | Tariff exposure (Section 301 for China), sanctions lists (OFAC SDN list), port stability | Sourcing region on UFLPA entity list, currency controls, single-port dependency |
| **Compliance** | UFLPA (Xinjiang forced labor — US *presumes* guilt for flagged regions), EU CSDDD due-diligence rules (2024+), conflict minerals (3TG) | Can't provide tier-2 supplier list, cotton/polysilicon from Xinjiang, no chain-of-custody docs |
| **Supply chain** | Tier-2 dependencies, raw material source, seasonal capacity (Chinese New Year = 4-6 wk shutdown) | Won't name their material suppliers, capacity claims exceed facility size |

### Step 5: RFP/RFQ Process

If conducting a formal selection:

**RFP structure:**

1. Company overview and project background
2. Scope of work / product specifications
3. Volume and timeline requirements
4. Quality and compliance requirements
5. Pricing format (line item breakdown)
6. References (3+ similar clients)
7. Evaluation criteria and weights
8. Timeline for responses and decision

**Evaluation process:**

1. Distribute RFP to shortlisted vendors (3-5)
2. Allow Q&A period
3. Score responses against evaluation matrix
4. Conduct reference checks for top 2-3
5. Request samples or pilot project
6. Negotiate final terms with preferred vendor
7. Award and onboard

### Step 6: Negotiation Preparation

**Levers ranked by typical yield:**

1. **Volume commitment** — annual forecast (even non-binding) usually unlocks 8-15% off spot pricing
2. **Payment terms** — overseas default is 30% deposit / 70% pre-shipment. Pushing to 30/70 *after* delivery, or Net 30 from shipment, is worth 2-5% of unit cost in cash flow
3. **Incoterms** — know the difference: FOB (you pay freight + insurance from port), CIF (supplier pays to your port, but *you* bear risk in transit — worst of both), DDP (supplier handles everything including customs — most expensive, least risk). FOB is the standard for experienced buyers.
4. **MOQ flexibility** — first-order MOQ is almost always negotiable down 30-50% if you frame it as a paid trial. "We'll pay the higher per-unit price on 500 units to validate, then commit to your 2,000 MOQ."
5. **Tooling/mold ownership** — for custom parts, negotiate that *you* own the mold after paying for it. Otherwise you're locked in forever.

**Contract terms that matter most:**

- **Price escalation clause** — cap annual increases at a named index (e.g., PPI for the material category), not "supplier discretion"
- **Quality SLA with teeth** — define AQL (Acceptable Quality Level — typically 2.5 for general goods, 1.0 for critical components), specify who pays for third-party inspection (QIMA, SGS), and define the remedy (rework at supplier cost, not just credit)
- **Lead time + late penalties** — industry norm: 1-2% of order value per week late, capped at 10%
- **IP protection** — NNN agreement (Non-disclosure, Non-use, Non-circumvention) for China, not a US-style NDA — US NDAs are unenforceable in Chinese courts
- **Exit clause** — right to terminate with 60-90 days notice, obligation to complete in-flight orders, tooling transfer terms

## Output Format

Always present key findings and recommendations as a plaintext summary in chat, even when also generating files. The user should be able to understand the results without opening any files.

```text

# Vendor Evaluation: [Category]

## Requirements Summary
[Key specs, volume, timeline, constraints]

## Shortlisted Vendors

### 1. [Vendor Name]

- Website: [url]
- Location: [city, country]
- Specialization: [what they do]
- Key Strengths: [2-3 points]
- Concerns: [1-2 points]
- Estimated Cost: [range]

### 2. [Vendor Name]
...

## Evaluation Matrix
| Criteria (Weight) | Vendor A | Vendor B | Vendor C |
|-------------------|----------|----------|----------|
| Quality (25%) | 4/5 | 3/5 | 5/5 |
| Cost (20%) | 5/5 | 4/5 | 3/5 |
| ... | | | |
| **Weighted Total** | **X.X** | **X.X** | **X.X** |

## Recommendation
[Top pick with reasoning, runner-up, and suggested next steps]

```

## Best Practices

1. **Never single-source critical components** — maintain a qualified backup at 10-20% of volume even if unit cost is higher
2. **Sample → pilot → scale** — paid samples first, then a pilot run of 5-10% of target volume, then commit. Never skip to full MOQ.
3. **Third-party inspection before final payment** — QIMA, SGS, or Bureau Veritas run pre-shipment inspections for ~$300. Cheaper than one bad container.
4. **Back-channel references** — find their customers via ImportYeti shipment records and cold-email them. Supplier-provided references are curated.
5. **Plan around Chinese New Year** — factories shut 4-6 weeks (late Jan/Feb). Orders placed in December ship in March. Build buffer inventory by November.
6. **Landed cost, not unit cost** — a $2.00 unit from China can land at $3.50 after freight, 25% Section 301 tariff, duty, and inspection. A $2.80 unit from Mexico under USMCA might land at $3.10.

## Limitations

- Cannot access paid databases (Panjiva, D&B, ImportGenius full data) — ImportYeti free tier is the workaround for US import verification
- Cannot physically inspect facilities or samples — always recommend third-party audit for orders >$10k
- Cannot verify certificate authenticity directly — provides the lookup URLs for the user to check
- Tariff rates and trade rules change frequently (Section 301, UFLPA scope) — verify current rates at time of order
- Pricing from directory listings is indicative only — real quotes require RFQ with full specs
