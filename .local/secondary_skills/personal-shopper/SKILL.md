---
name: personal-shopper
description: Research products, compare options, find deals, and validate purchases.
---

# Personal Shopper & Gift Finder

Research products, validate prices/reviews, and generate gift ideas that aren't generic.

## When to Use

- "What's the best [X] under $[Y]?" / product comparison
- "Is this Amazon deal real?" / price validation

- Gift ideas for a specific person
- "I'm looking for [X]" / "Help me pick a [X]" / "Recommend me a [X]" — general shopping

- "When do [X] go on sale?" / "Is now a good time to buy [X]?" — seasonal pricing and deal timing
- "Should I buy this?" / "Is this a good [X]?" / "Is [X] worth the money?" — purchase validation

- "[Brand A] vs [Brand B]?" — product or brand head-to-head comparison

## When NOT to Use

- Market research or competitive landscape analysis (deep-research)
- Budgeting (budget-planner)

## Upfront Questions — Ask Before Researching

Before searching, collect all essential context in a single round of questions. Never start researching with incomplete information — going back to ask follow-ups wastes the user's time and makes recommendations less accurate.

### Universal questions (always ask these)

- **Budget** — price range or "show me options at different price points"
- **Primary use case** — what will they use it for? (provide category-relevant options)

- **Who is it for** — men's, women's, unisex, or gift for someone else

### Category-specific questions (add these based on product type)

| Category | Additional questions |

|----------|---------------------|

| Sunglasses / eyewear | Style preference (classic, sporty, trendy), primary activity (driving, beach, everyday) |

| Electronics (headphones, speakers, etc.) | Wired vs wireless, primary use (commute, gym, home, work calls) |

| Clothing / shoes | Size, style preference, occasion |

| Kitchen / home | Specific need or problem to solve, aesthetic preference |

| Laptops / tablets | Primary tasks (work, gaming, creative, browsing), portability needs |

| Gifts | Recipient's age range, relationship, interests, occasion |

Present all questions together using structured queries (choice or text) so the user can answer everything at once. Do not ask one question at a time.

## Research Strategy — Route by User Intent

Before searching, determine the user's primary intent and route to the right sources first. This prevents wasted searches and gets to better recommendations faster.

### Research routing table

| User intent | Start with (search these first) | Then supplement with |

|-------------|--------------------------------|---------------------|

| **Fashion / trendy / stylish** | GQ, Highsnobiety, Strategist (nymag.com/strategist), MR PORTER | Reddit for real opinions, brand sites for purchase links |

| **Best value / reliable / practical** | Wirecutter, OutdoorGearLab, rtings.com | Reddit long-term reviews, Amazon for pricing |

| **Performance / sport / outdoor** | OutdoorGearLab, GearJunkie, REI expert advice | Reddit hobby subreddits, brand sites |

| **Luxury / premium / splurge** | Strategist, GQ, Robb Report, brand editorial | Reddit for "is it worth it" threads |

| **Budget / cheap / affordable** | Reddit budget threads, Wirecutter budget picks | OutdoorGearLab cheap roundups, Amazon |

| **Unique / gift / special** | Strategist, Uncommon Goods, Food52, Cool Material | Reddit gift threads, Goop |

| **Health / wellness / skincare** | Incidecoder (ingredients), Goop, Strategist | Reddit skincare subreddits |

| **Tech / electronics** | Wirecutter, rtings.com, notebookcheck.net | Reddit, Verge, Tom's Hardware |

Always run searches in parallel when possible — launch the primary source search and the Reddit/real-user search at the same time to save time.

### Research Sources — Where to Actually Look

#### Review & Research Sites

| Category | Best source | Why |

|----------|-------------|-----|

| Most consumer goods | Wirecutter (nytimes.com/wirecutter) | Long-term testing, updates picks when they fail |

| TVs, monitors, headphones, soundbars | `rtings.com` | Lab-measured data (input lag in ms, frequency response graphs), not vibes |

| Appliances, cars, mattresses | Consumer Reports (paywalled) — search `"consumer reports [product] reddit"` for summaries | |

| Enthusiast gear (knives, keyboards, flashlights, coffee, pens) | Product subreddit wiki/FAQ — `site:reddit.com/r/[hobby] wiki` | Actual users, not affiliate sites |

| Outdoor/camping | `outdoorgearlab.com` | Side-by-side field testing |

| Laptops | `notebookcheck.net` | Thermals, throttling, display calibration data |

| Skincare/cosmetics ingredients | `incidecoder.com` | Ingredient breakdown, no marketing |

#### Curated & Boutique Sources

Prefer these over generic Amazon results — they surface more interesting, unique finds:

| Source | Best for | Why |

|--------|----------|-----|

| Wirecutter (nytimes.com/wirecutter) | Everyday products, gift guides | Rigorously tested, regularly updated |

| Conde Nast Traveler / GQ / Bon Appetit | Travel gear, fashion, food/kitchen | Editorially curated, taste-driven |

| Goop | Wellness, beauty, home, unique gifts | Curated luxury, discovers interesting small brands |

| Strategist (nymag.com/strategist) | Gift guides, home, fashion, wellness | Real-person recommendations, not algorithm-driven |

| Cool Material (`coolmaterial.com`) | Men's gifts, gear, home goods | Curated interesting finds |

| Uncommon Goods (`uncommongoods.com`) | Unique/artisan gifts | Handmade, small-batch, creative |

| Food52 (`food52.com`) | Kitchen, home, food gifts | Chef-tested, beautifully curated |

| Reddit gift threads | Any category | Search `site:reddit.com "[category] gift"` or `"best [product] reddit"` — real opinions from enthusiasts |

**Search pattern for honest reviews:** `"[product] reddit"` or `"[product] site:reddit.com"` — cuts through SEO affiliate spam. Also `"[product] long term"` or `"[product] after 1 year"`.

**Search pattern for curated finds:** `"[product/category] site:nymag.com/strategist"` or `"best [category] gifts site:goop.com"` — surfaces editorially picked items over algorithm-promoted ones.

## Price Validation — "Is This Deal Real?"

Amazon "40% off" is often off a fake inflated list price. Verify:

| Tool | Use | Access |

|------|-----|--------|

| **CamelCamelCamel** | Amazon price history chart — paste URL or ASIN | `camelcamelcamel.com` (free, webFetch works) |

| **Keepa** | Same but overlays directly on Amazon pages; more marketplaces | `keepa.com` (free tier sufficient) |

**Read the chart:** if "sale" price = the price it's been at for 6 of the last 12 months, it's not a sale. Real deals sit at or near the all-time low line. Flag any product where price spiked up right before the "discount."

**Fake review detection:** Fakespot shut down July 2025; ReviewMeta is currently down. Manual heuristics:

- Cluster of 5-star reviews in a 2-day window = paid review burst
- Reviews that mention "gift" / "haven't tried yet but looks great" = incentivized

- All reviews are 5 or 1 stars, nothing in between = manipulated
- Check reviewer profiles — dozens of 5-star reviews across random categories = fake account

- Sort by most recent, not "top" — recent reviews reveal quality decline after a product gets popular

## Product Recommendation Format

Always give 3 tiers so the user can self-select on budget:

- **Budget pick** — 80% of the performance at 40% of the price
- **Best overall** — the Wirecutter-style default

- **Upgrade** — only if the premium is justified by a specific use case; say what that use case is

### Comparison Table

Before the detailed write-ups, always include a quick-scan comparison table with the most decision-relevant specs for the category. This lets the user compare at a glance without reading three paragraphs.

**Example for sunglasses:**

| | Budget Pick | Best Overall | Upgrade |

|---|---|---|---|

| **Model** | Goodr OG | Oakley Frogskins | Costa Rinconcito |

| **Price** | ~$25 | ~$110 | ~$145 |

| **Polarized** | Yes | Yes | Yes |

| **Lens material** | Polycarbonate | Plutonite | 580P polycarbonate |

| **Frame material** | Plastic | O-Matter nylon | Bio-based nylon |

| **Weight** | Light | Light | Medium |

| **Warranty** | 1 year | 2 years | Lifetime |

| **Best for** | Beater pair | All-around | Water sports |

| **Buy link** | [link] | [link] | [link] |

Adapt columns to the product category — for headphones use driver size, battery life, noise cancellation; for laptops use CPU, RAM, display, battery; etc. Always include the buy link row.

### Shipping & Location

Location is **not** a required upfront question. Show all available retailers regardless of where they ship. Handle shipping as follows:

1. **Always include a "Ships to" column** in retailer comparison tables (e.g., "USA", "EU", "International", "UK only"). This gives the user a quick scan without slowing them down.
1. **After presenting options**, offer as a follow-up: "Want me to check which of these ship to your location?"

1. **If the user mentions their location at any point** (in any message, not just the initial request), automatically flag stores that don't ship there. Add a note like: "[Store] does not appear to ship to [location] — consider [alternative] instead."
1. **When multiple retailers carry the same product**, list all of them so the user can pick the one that works for their region and price preference.

Do not ask for location upfront — it adds friction and most users just want to see what's available. Let them self-filter or ask for shipping help when they're ready.

### Detailed Write-ups

For each tier: price, one-line "why this one," one-line "main tradeoff," and **always include direct links**:

- **Product link** — link to where the user can actually buy it (Amazon, retailer site, etc.). Search for the specific product and provide the real URL, not a homepage.
- **Review/source link** — link to the review, article, or Reddit thread that informed the recommendation

- **Price history link** — for Amazon products, include a CamelCamelCamel link so the user can check price history themselves

**Never recommend a product without at least a purchase link.** The whole point of a personal shopper is saving the user time — making them search for the product themselves defeats the purpose. Use webSearch to find actual product pages and verify URLs are live before sharing.

### Visual References

For visual products (sunglasses, clothing, shoes, home goods, furniture, decor), showing what the product looks like is just as important as describing it. Do not punt this to the user with "check the product link for photos."

**Required steps for visual products:**

1. Use the stock image search tool to search for the specific product by name (e.g., "Garrett Leight Kinney sunglasses"). Try the exact product name first.
1. If stock image search returns no results, search the web for the product image URL from the brand's site or a retailer (e.g., search `"[product name] image"` and look for direct image URLs in the results).

1. If neither approach yields usable images, then and only then tell the user: "I couldn't find images for this product — check the product link to see what they look like."

**When images are not needed:** Books, software, subscriptions, consumables (food, drink), and other non-visual products do not require images unless the user asks.

## Gift Framework — Beyond "Know the Person"

**The four gift modes** (pick one, don't blend):

1. **Upgraded everyday** — a nicer version of something they use daily but would never splurge on (good olive oil, merino socks, quality umbrella). Safest bet. Works for anyone.
1. **Experience** — class, tickets, tasting, subscription. No clutter. Good for people who "have everything."

1. **Consumable luxury** — fancy food/drink/candle they'll use up. Zero storage burden. Default for acquaintances, hosts, coworkers.
1. **Interest-deep-cut** — something only a real enthusiast would know about. Highest risk, highest reward. Requires research: search `r/[their hobby] "gift"` or `"best gifts for [hobby] enthusiast reddit"`.

**Extraction questions** (ask user, not recipient):

- What do they complain about? (Complaints → unmet needs → gifts)
- What have they mentioned wanting but not bought? (The $80 thing they keep not pulling the trigger on)

- What do they already own a lot of? (Signals the interest; buy adjacent, not duplicate)
- What did they get excited about recently?

**Variety rule — this is critical:**

Recommendations must span different categories. If someone asks for a gift, don't suggest 3 fragrances or 3 candles or 3 books — spread across different types of products unless the user specifically asked for a single category. For example, a good gift list might include one kitchen item, one experience, and one piece of gear. Variety shows thoughtfulness; a list of same-category items shows laziness.

**Hard rules:**

- Scented anything (candles, perfume, lotion) — only if you know their taste. Scent is personal.
- No decor unless you've seen their space

- No clothing with sizes unless you're certain
- Gift receipt always. Return window matters more than wrapping.

| Occasion | Default mode | Budget anchor |

|----------|--------------|---------------|

| Close friend birthday | Interest-deep-cut or upgraded-everyday | Whatever you'd spend on dinner together |

| Acquaintance / coworker | Consumable luxury | $20-40 |

| Housewarming | Consumable (nice pantry goods, wine) — no decor | $25-50 |

| Wedding | Registry. If off-registry, cash. | Cover your plate cost minimum |

| Thank-you | Consumable, handwritten note matters more than price | $15-30 |

| Host gift | Something they can use after you leave (not flowers — requires a vase and attention mid-hosting) | $15-30 |

**Gift recommendations must also include direct purchase links.** For each gift idea, provide a link to a specific product the user can buy — not just "nice olive oil" but a link to a specific bottle on a specific site.

## Price Verification & Seasonal Pricing Guide

After presenting recommendations, always include a brief note reminding the user that prices may have changed since the research was done. For each product:

- State the approximate price found during research
- Note that the user should verify the current price at the linked store before purchasing

- For Amazon products, suggest checking the CamelCamelCamel link to see if the current price is near the historical low or if it's worth waiting for a sale

### Seasonal sale calendar by category

Use this to advise users on whether to buy now or wait:

| Category | Best time to buy | Key sale events |

|----------|-----------------|-----------------|

| Sunglasses / eyewear | Late summer (Aug–Sep), Black Friday | End-of-season clearance, brand site sales |

| Electronics / headphones | Black Friday, Prime Day (July), back-to-school (Aug) | Amazon Lightning Deals, Best Buy sales |

| Clothing / shoes | End of season (Jan–Feb for winter, Jul–Aug for summer) | Memorial Day, Labor Day, Black Friday |

| Kitchen / home | Black Friday, Prime Day, Presidents' Day | Williams Sonoma / Sur La Table seasonal sales |

| Laptops / tablets | Back-to-school (Aug–Sep), Black Friday | Best Buy student deals, Amazon Prime Day |

| Outdoor / camping | End of season (Sep–Oct), REI Anniversary Sale (May) | REI garage sales, Backcountry semi-annual |

| Skincare / beauty | Sephora VIB Sale (Apr, Nov), Ulta 21 Days of Beauty | Dermstore sales, brand-direct holiday sets |

| Gifts | Year-round — don't wait if it's time-sensitive | Uncommon Goods and Strategist holiday guides start Nov |

If the user is shopping within 4–6 weeks of a major sale window, mention it: "If you can wait until [event], you'll likely save 20–30%." If the sale is months away, don't mention it — just recommend buying now.

## Follow-Up — Narrowing Down

After presenting the initial three picks, offer to help the user narrow down. When the user wants a deeper comparison between two specific products, use this format:

### Head-to-head comparison

| | Product A | Product B |

|---|---|---|

| **Price** | | |

| **Key advantage** | One sentence | One sentence |

| **Key weakness** | One sentence | One sentence |

| **Durability / longevity** | What long-term reviews say | What long-term reviews say |

| **Who it's best for** | One sentence persona | One sentence persona |

| **Verdict** | | |

### How to research the deeper comparison

1. Search `"[product A] vs [product B]"` for direct comparison articles
1. Search `"[product A] after 1 year reddit"` and `"[product B] after 1 year reddit"` for long-term durability reports

1. Search `"[product A] problems"` or `"[product A] issues reddit"` to surface common complaints
1. If available, check return rates or warranty claim patterns mentioned in reviews

### Other follow-up options to offer

- "Want me to find where you can try these on in person near you?" (for eyewear, shoes, clothing)
- "Want me to check if there are any active coupon codes for [brand]?"

- "Want me to look at a completely different style direction?"

## Limitations

- Can't see real-time stock/price — always tell user to verify before buying
- Can't access paywalled review sites directly (CR, some Wirecutter)

- Can't process transactions
