---
name: travel-assistant
description: Plan trips, build itineraries, find flights and hotels, and estimate travel budgets.
---

# Travel Assistant

Build comprehensive travel planners tailored to the user's needs. This skill ensures the agent gathers all necessary information before building, chooses the right output format, and includes essential features from the start. It also covers practical travel knowledge — flights, entry requirements, pacing, and budgeting.

## When to Use

- Itinerary building, flight/accommodation strategy, budget estimation
- "What do I need to enter [country]?" — visa/vaccine/ETIAS checks

- Building interactive trip planning web apps

## When NOT to Use

- Booking (can't transact); travel insurance (insurance-optimizer)

## Step 1: Ask Output Format First

Before building anything, ask the user what format they want:

- **Interactive website** — Best for browsing, exploring options, and sharing with travel companions. Can include maps, filters, and selection tools.
- **PDF report** — Best for offline use, printing, and taking on the trip. Clean, formatted document.

- **Excel/spreadsheet** — Best for budget-focused planning, collaborative editing, and people who prefer tabular data.
- **Combination** — e.g., a website with PDF export (most common for serious trip planning).

## Step 2: Gather Trip Details

Collect these essentials before generating any content:

- **Where are you traveling from?** (origin city/airport — required for flight search)
- **Dates and duration** — When and how long (or flexible?)

- **Destinations / regions** — Specific cities, or open to suggestions?
- **Group size and composition** — Number of adults, children, babies, elderly. This directly affects activity recommendations, restaurant choices, and accessibility needs (stroller-friendly, wheelchair access, etc.)

- **Travel style** — Budget, mid-range, luxury, or mixed
- **Priorities** — Food-focused, adventure, culture, relaxation, nightlife, nature, family fun

- **Must-dos and must-avoids** — Any specific places, activities, or experiences they want or want to skip
- **Pace preference** — Packed schedule vs. slow and relaxed

- **Dietary needs** — Allergies, vegetarian, etc. (affects restaurant recommendations)

Do NOT search for flights without knowing the origin city — you will get it wrong.

## Step 3: Content Depth

Ask how detailed they want the plan:

- **High-level outline** — Day-by-day overview with main activities
- **Detailed recommendations** — Specific restaurants, activities, alternatives, prices, links, and booking info

- **Full concierge** — Everything above plus rain plans, backup options, and curated picks

## Entry Requirements — Check Before Anything Else

Getting this wrong ends the trip at the airport. webSearch every time — rules change.

| Check | Source | Notes |

|-------|--------|-------|

| Visa requirements | `travel.state.gov`(US citizens) or`[passport country] [destination] visa requirements` | |

| Schengen 90/180 (Europe) | `ec.europa.eu`calculator or`schengenvisainfo.com/visa-calculator` | 90 days in any rolling 180-day window. Does NOT reset on exit. Count days not months. Entry + exit days both count as full days. Schengen ≠ EU (UK, Ireland out; Switzerland, Norway in) |

| ETIAS (Europe) | `etias.com` | Pre-authorization now required even for visa-free travelers |

| Passport validity | — | Many countries require 6 months validity beyond your departure date. Check blank pages too (some need 2+) |

| Vaccines | `cdc.gov/travel` | Yellow fever is mandatory (with certificate) for some countries if arriving from an endemic zone |

| Onward ticket proof | — | Some countries (Thailand, Philippines, Indonesia, Costa Rica, Peru) won't let you board without proof you're leaving |

| Safety advisories | `travel.state.gov/content/travel/en/traveladvisories` | |

## Itinerary Pacing — The \#1 Mistake Is Overplanning

### Hard limits

- **Max 1 anchor activity per half-day.** One museum in the morning, one neighborhood in the afternoon. Hour-by-hour schedules fall apart by day 2.
- **Transit tax:** every change of location costs 30-60 min more than Google Maps says (finding the entrance, ticketing, getting lost once). Budget it.

- **Day 1 after a long-haul flight is dead.** Plan a walk and an early dinner, nothing with a timed entry.
- **3-night minimum per city** for multi-city trips. 2 nights = 1 real day. Fewer cities, done well, beats a checklist.

- **One unplanned afternoon per 3 days.** The best travel moments are unscheduled.
- **Cluster by geography** — plot everything on a map first, then group by neighborhood. Never cross the city twice in a day.

#### Known closure patterns

- Europe: many museums closed Mondays (Louvre, Prado) or Tuesdays (Italy). Always verify.
- Japan: many restaurants/shops closed one weekday (often Mon or Wed). Golden Week (late Apr-early May) = everything packed.

- Middle East: Friday is the weekend day; expect closures.
- Siesta countries (Spain, Greece, parts of Italy): 2-5pm dead zone outside tourist cores.

## Step 4: Build with These Standards

### Flights

Search for flights using `webSearch`with queries like`"Google Flights [origin] to [destination] [dates]"`,`"Skyscanner [origin] to [destination] [month]"`.

Present options with **direct links** to booking/search pages:

```text

**Option 1: [Airline] — $XXX roundtrip**

- Outbound: [date], [time] [origin] → [time] [dest] (Xh Xm, nonstop/1 stop)
- Return: [date], [time] [dest] → [time] [origin] (Xh Xm, nonstop/1 stop)

- [Google Flights link](URL) | [Book direct with airline](URL)

**Option 2: [Airline] — $XXX roundtrip**

...

```

Include at least 3 options when possible: cheapest, best schedule, best airline. Note open-jaw options if doing a multi-city trip.

#### Flight search tools — use multiple, they surface different fares

| Tool | What it's best at |

|------|-------------------|

| Google Flights | Speed; calendar price grid; search up to 7 origin + 7 destination airports at once; price-history graph shows if "now" is cheap |

| Skyscanner | "Everywhere" destination (cheapest places from your airport, sorted by price); "Whole month" date view; surfaces budget carriers Google misses |

| Skiplagged | Hidden-city fares — flight A→C with layover at B is cheaper than A→B, so you get off at B. Savings up to 60%. **Constraints:** carry-on only (checked bags go to C), one-way only (skipping a leg cancels the rest), don't do it repeatedly on the same airline (they ban accounts) |

| Going.com / Secret Flying | Error fares, mistake prices — time-sensitive |

##### Booking rules

- Find the fare on an aggregator → **book direct with the airline.** OTAs (Expedia etc.) are useless when flights get cancelled — airline agents will say "call Expedia"
- Domestic sweet spot: 1-3 months out. International: 2-6 months. Last-minute is almost always worse except on empty routes

- Tuesday/Wednesday/Saturday departures are typically cheapest
- Open-jaw (fly into city A, out of city B) via multi-city search — often cheaper than round-trip + ground transport

### Hotels / Accommodations

Search using `webSearch`for hotels in the destination area with queries like`"best hotels [neighborhood] [city] [budget level]"`,`"[city] hotels [dates] site:booking.com"`,`"[city] airbnb [neighborhood]"`.

Present options with **direct links**:

```text

**[Hotel Name]** — $XXX/night | [neighborhood] | [rating] stars

- [Key feature 1], [key feature 2] (e.g., rooftop pool, walkable to old town, free breakfast)
- [Booking.com link](URL) | [Hotel website](URL)

**[Hotel/Airbnb Name]** — $XXX/night | [neighborhood] | [rating]

...

```

Include 3-5 options spanning the user's budget range. Note the neighborhood and why it's a good base. For multi-city trips, list accommodations per city.

| Platform | Best for |

|----------|----------|

| Booking.com | Widest hotel inventory, free cancellation options, price match |

| Airbnb | Apartments, longer stays, groups, kitchens |

| Hostelworld | Budget/social travelers |

| Hotel direct sites | Loyalty perks, best-rate guarantees |

### Day-by-Day Itinerary

Structure each day with anchor activities and restaurant recommendations with links:

```text

## Day X — [Neighborhood/Theme]

**Anchor (AM):** [Activity] — book ahead? y/n — ~$XX — nearest metro: [station]

**Lunch:** [Restaurant name](URL) — [cuisine, 1-line description] — ~$XX/person

**Anchor (PM):** [Activity]

**Dinner:** [Restaurant name](URL) — [cuisine, 1-line description] — ~$XX/person

**Alt dinner:** [Restaurant name](URL) — [backup option]

**Transit:** [A→B method, ~time, ~cost]

**If it rains / you're tired:** [one swap]

**Day est:** $XX

```

For restaurant links, search with `webSearch`for`"best [cuisine] restaurant [neighborhood] [city]"`or`"[city] [neighborhood] restaurants site:google.com/maps"`. Link to Google Maps, Yelp, or the restaurant's website.

### Always Include from the Start

1. **Links for every venue** — Every restaurant, activity, and accommodation must have:

- A Google Maps link (`mapLink`)
- A website URL (`websiteLink`) — use the venue's official site when possible

- These should be in the data model from day one, not added later

1. **PDF/Excel export** — If building a website, always include export functionality. Users will want to take their itinerary offline while traveling. Use `jspdf` for PDF generation on the client side.
2. **Booking and availability context** — The app should connect to travel platforms for live data where possible, and fall back to deep links when direct integration isn't available:

#### Target platforms and their capabilities

- **Accommodations**: Booking.com, Airbnb, Expedia, Hotels.com — search availability by dates/location/group size, show prices, ratings, reviews, photos, amenities, cancellation policies
- **Restaurants**: OpenTable, TheFork, Resy — search availability by date/time/party size, show ratings, reviews, cuisine type, price tier, reservation slots

- **Activities/Experiences**: GetYourGuide, Viator, Fever, Klook — search by destination/dates, show availability, prices, ratings, reviews, duration, cancellation policy
- **Transportation**: Trainline, Rome2Rio, FlixBus, local transit APIs — search routes, schedules, prices, duration between destinations

- **Car Rental**: Rentalcars.com, AutoEurope — search by pickup/dropoff location and dates, show vehicle options, prices, insurance

##### Integration approach (in priority order)

1. **Replit integrations** — Check if a Replit integration exists for any of these platforms. If so, use it for direct API access (availability search, reviews, pricing). This is the preferred method.
2. **Direct APIs** — If no Replit integration exists but the platform offers a public or partner API (e.g., Booking.com Affiliate API, GetYourGuide Partner API), use it with appropriate API keys stored as secrets.

3. **Web search enrichment** — Use web search to find current reviews, ratings, prices, and availability for venues. Parse and display relevant data.
4. **Deep links as fallback** — When no API access is available, generate deep links that pre-fill search parameters on the platform:

- Booking.com: `https://www.booking.com/searchresults.html?ss={destination}&checkin={date}&checkout={date}&group_adults={n}&group_children={n}`
- Airbnb: `https://www.airbnb.com/s/{destination}/homes?checkin={date}&checkout={date}&adults={n}&children={n}&infants={n}`

- OpenTable: `https://www.opentable.com/s?term={restaurant}&covers={n}&dateTime={datetime}`
- GetYourGuide: `https://www.getyourguide.com/s/?q={activity}&date_from={date}&date_to={date}`

- Expedia: `https://www.expedia.com/Hotel-Search?destination={destination}&startDate={date}&endDate={date}&rooms=1&adults={n}`

###### Data to surface from these platforms when available

- Availability status (available / sold out / limited)
- Price range and specific pricing

- User ratings and review count
- Photos

- Cancellation/refund policy
- Key amenities or highlights

- Booking confirmation status

**Important:** Always check for new Replit integrations before falling back to deep links. The integration landscape evolves — what isn't available today may be available tomorrow.

1. **Persistent state** — Selection state (which items the user picks) should survive page refresh. Use localStorage at minimum, or a lightweight backend for sharing.
2. **Mobile-first design** — Trip planners are most useful on phones while traveling. Design mobile-first with responsive breakpoints. Consider PWA features for offline access.

3. **Collaborative features** — For group trips, consider:

- Shareable links
- Voting/favoriting on options

- Comments on activities
- At minimum, make the plan easy to share (PDF export, copy link)

### Web App — Map + Itinerary

**Always build a web app** that combines two views the user can switch between:

1. **Map view** — all locations plotted on an interactive map with color-coded markers by type (airports, hotels, activities, restaurants). Each marker has a popup with name, time, and links. Connect same-day stops with route lines so the user can see the flow.
2. **Itinerary view** — a beautiful, card-based day-by-day layout. Each day is a card with the day number, neighborhood/theme, and a timeline of activities, meals, and transit. Include photos or icons for each stop, estimated costs, and direct links to book or learn more.

Use the **Nominatim API** (OpenStreetMap) for geocoding addresses to lat/lng — no API key required.

The user should be able to toggle between map and itinerary views. Clicking a day in the itinerary should highlight that day's markers on the map.

### AI-Powered Recommendations

Use AI integrations to generate smarter, personalized content rather than relying solely on hardcoded data:

- **Destination research** — Use an AI model to research destinations based on the user's preferences (travel style, group composition, interests) and generate tailored restaurant, activity, and accommodation suggestions.
- **Seasonality awareness** — Factor in the time of year when recommending activities. Suggest outdoor markets and harvest festivals in fall, ski resorts in winter, beaches and hiking in summer, cherry blossoms in spring. Flag activities that may be closed or less enjoyable in the chosen season.

- **Personalization** — Adjust recommendations based on group composition. A trip with babies should emphasize stroller-friendly paths, early dinner reservations, and nap-friendly schedules. A trip with adventurous adults should prioritize hikes, wine tours, and late-night dining.
- **Local events** — Research festivals, concerts, exhibitions, and seasonal markets happening during the travel dates and suggest them as bonus activities.

### Real-Time Data Integration

Where possible, enrich the planner with live information:

- **Weather forecasts** — Pull weather data for the travel dates and destination. Show expected conditions on each day card. Use this to inform rain plan recommendations.
- **Exchange rates** — For international trips, show current exchange rates and convert budget estimates to the traveler's home currency.

- **Event calendars** — Check for local holidays, festivals, and closures that affect the itinerary.
- **Venue hours and closures** — Verify opening hours and seasonal closures. Flag restaurants closed on specific days (e.g., many Italian restaurants close Mondays). Alert if a suggested venue is likely to be closed on the planned visit day.

- **Implementation** — Use web search or external APIs to fetch this data. Cache results to avoid repeated lookups. Display weather/events as supplementary info on day cards, not as blocking requirements.

### Transportation Planning

Include travel logistics between stops:

- **Driving/transit times** — Show estimated travel time between each day's activities. This helps users judge whether a day plan is realistic. Use Google Maps distance estimates or similar.
- **Optimal routing** — If a day has multiple stops, suggest the best order to minimize driving. Group nearby activities together.

- **Transfer days** — For multi-region trips, explicitly plan transfer days with:
- Departure and arrival times

- Recommended routes (scenic vs. fastest)
- Luggage logistics (hotel checkout times, car rental pickups/dropoffs)

- Suggested stops along the way (rest stops, scenic viewpoints, lunch spots)
- **Transport modes** — Note whether each leg is best done by car, train, bus, ferry, cable car, or walking. Include ticket booking links where applicable.

- **Data model** — Add transport-related fields to the day itinerary:

```typescript

interface TransportLeg {

from: string;

to: string;

mode: 'car' | 'train' | 'bus' | 'ferry' | 'cable-car' | 'walking' | 'flight';

durationMinutes: number;

distance?: string;

notes?: string;

bookingLink?: string;

}

interface DayItinerary {

// ...existing fields...

transport?: TransportLeg[];

}

```

### Packing List Generator

Based on trip parameters, generate a suggested packing list:

- **Weather-based** — Pull expected weather for the destinations and dates. Suggest layers for variable weather, rain gear if rain is likely, sun protection for warm destinations.
- **Activity-based** — Add items based on planned activities (hiking boots for mountain trails, swimsuit for lake/beach, smart casual for fine dining, comfortable shoes for city walking).

- **Baby/child-specific** — If traveling with babies or young children, suggest: portable high chair, stroller rain cover, baby carrier for trails, snacks, entertainment for transit, travel crib if not provided by accommodation.
- **Destination-specific** — Note cultural requirements (modest dress for religious sites, specific adapter types for power outlets, local SIM card recommendations).

- **Duration-based** — Scale quantities to trip length. Suggest laundry considerations for trips over a week.
- **Categorize the list** — Group items by: Clothing, Toiletries, Electronics, Documents, Baby/Kids, Activity Gear, Miscellaneous.

### Cost Estimation and Budget Tracking

Go beyond static price estimates:

- **Currency conversion** — For international trips, detect the traveler's home currency and show prices in both local and home currency. Use current exchange rates.
- **Dynamic pricing** — Where possible, link to actual pricing sources rather than static estimates. Note that prices vary by season and should be verified.

- **Budget categories** — Break costs down by: Accommodation, Dining, Activities, Transportation, Shopping/Souvenirs, Miscellaneous.
- **Daily budget view** — Show estimated spend per day alongside the itinerary, so users can see which days are expensive and where to cut back.

- **Running total** — Show cumulative spend as the user assigns restaurants and activities to days, so they can track against their overall budget.
- **Group cost splitting** — For group trips, show per-person costs alongside total costs. Account for different pricing (e.g., children free, adult tickets).

#### Budget estimation reference (per person)

| Category | Budget | Mid | High | Notes |

|----------|--------|-----|------|-------|

| Sleep /night | $25-50 | $80-180 | $250+ | Hostels/guesthouses → 3-star → boutique |

| Food /day | $15-30 | $40-80 | $120+ | Street + one sit-down → restaurants → tasting menus |

| Local transit /day | $5-15 | $15-30 | $50+ | Metro pass → occasional taxi → car+driver |

| Activities /day | $0-20 | $30-60 | $100+ | Free walking tours → paid entries → private guides |

Southeast Asia / Central America / Eastern Europe: use the low end. Western Europe / Japan / Australia: mid-to-high. Switzerland / Norway / Iceland: add 30% to whatever you estimated.

**Always add:** intercity transport (trains/flights between cities — often the hidden budget killer), travel insurance (~4-8% of trip cost), SIM/eSIM (~$20-40), visa fees, 10-15% buffer.

### Budget Summary

| Category | Est. Total |

|----------|-----------|

| Flights | $XXX |

| Accommodation (X nights) | $XXX |

| Food | $XXX |

| Activities/Entries | $XXX |

| Local Transport | $XXX |

| **Trip Total**|**$X,XXX** |

### Trip Templates

Save and reuse trip structures:

- **Save as template** — Allow completed trip plans to be saved as reusable templates. Strip personal details but keep the structure, venue recommendations, and day flow.
- **Template library** — Maintain a collection of proven itineraries that can serve as starting points. Tag templates by destination, duration, travel style, and group type.

- **Customizable templates** — When loading a template, let users adjust dates, swap venues, and modify the pace while keeping the overall structure.
- **Implementation** — Store templates as JSON files with the full itinerary structure. Include metadata (destination, duration, style, best season, group type) for search and filtering.

### Multi-Region Trip Logic

Handle trips that span multiple destinations or regions:

- **Region segmentation** — Clearly separate the itinerary into region blocks (e.g., "Lake Garda — Days 1-7" and "Dolomites — Days 8-14"). Use visual badges and color coding to distinguish regions.
- **Transfer planning** — Automatically identify transfer days between regions. Suggest departure times, scenic routes, and midway lunch stops.

- **Region-specific recommendations** — Tailor restaurant and activity suggestions to each region. Don't suggest a Lake Garda restaurant for a Dolomites day.
- **Luggage logistics** — Note when hotel changes require packing up. Suggest leaving heavy luggage at a storage point if doing a day trip before checking into the next region's accommodation.

- **Suggested day allocation** — Based on the number of attractions and the pace preference, suggest how many days to allocate to each region. Flag if a region is over-packed or under-utilized.

### Data Architecture

Structure venue data with these fields from the start:

```typescript

interface BookingInfo {

platform: string;

deepLink: string;

rating?: number;

reviewCount?: number;

price?: string;

availability?: 'available' | 'limited' | 'sold-out' | 'unknown';

cancellationPolicy?: string;

lastChecked?: string;

}

interface Restaurant {

id: string;

name: string;

city: string;

region: string;

cuisine: string;

priceRange: string;

description: string;

mustTry: string;

familyFriendly: boolean;

mapLink: string;

websiteLink?: string;

bookingInfo?: BookingInfo[];

michelinStatus?: string;

closedOn?: string[];

suggestedMeal: 'lunch' | 'dinner' | 'either';

suggestedDays?: number[];

}

interface Activity {

id: string;

name: string;

city: string;

region: string;

category: string;

duration: string;

priceRange: string;

description: string;

highlights: string[];

familyFriendly: boolean;

strollerAccessible: boolean;

mapLink: string;

websiteLink?: string;

bookingInfo?: BookingInfo[];

seasonalAvailability?: string[];

suggestedDays?: number[];

}

interface Accommodation {

id: string;

name: string;

region: string;

stars: number;

priceRange: string;

features: string[];

familyFriendly: boolean;

babyFriendly: boolean;

mapLink: string;

websiteLink: string;

bookingInfo?: BookingInfo[];

checkInTime?: string;

checkOutTime?: string;

why: string;

}

```

### Feature Checklist

For a full-featured web-based travel planner, include:

- [ ] Day-by-day itinerary (timeline view)
- [ ] Board/Kanban view for visual overview

- [ ] Restaurant catalog with filters and "Add to Day" picker
- [ ] Activity catalog with category filters and "Add to Day" picker

- [ ] Selection system (context/state) for assigning items to days
- [ ] "Your Picks" section on each day showing assigned restaurants/activities

- [ ] Interactive map with color-coded markers
- [ ] Accommodation recommendations

- [ ] Budget breakdown with per-day and per-person views
- [ ] PDF export of full itinerary (including picks, alternatives, rain plans)

- [ ] Map, website, and booking links on every venue card
- [ ] Dining and activity alternatives per day

- [ ] Rain/bad weather backup plans
- [ ] Region badges on day cards

- [ ] Transportation time estimates between stops
- [ ] Packing list generator

- [ ] Weather forecast integration
- [ ] Currency conversion for international trips

- [ ] Persistent state (localStorage or backend)
- [ ] Mobile-responsive design

### Design Defaults

For travel planners, warm and inviting palettes work well:

- Use destination-inspired colors (e.g., terracotta/olive/amber for Italy, blue/white for Greece, red/gold for Japan, sage/slate for Scandinavia)
- Serif headings (Playfair Display, Cormorant) + clean sans-serif body (DM Sans, Inter)

- Subtle animations for expanding sections (Framer Motion)
- Card-based layouts for restaurants and activities

- Cream/warm backgrounds rather than pure white
- Region-specific accent colors for multi-destination trips

### PDF Export Implementation

When generating PDFs with jspdf:

- Paint page backgrounds only on new pages (in `addPage` callback), never re-paint over existing content in loops
- Use a `checkPageBreak` helper that handles both page breaks and background painting

- Include: header with trip title/dates, day sections with activities, selected picks, alternatives, rain plans, page numbers
- Style consistently with the web app's color palette

- Include packing list as a final section if generated
- Add a budget summary page at the end

## Useful Lookups (webSearch)

- `"[city] 3 day itinerary reddit"` — real traveler pacing, not SEO content
- `"rome2rio [city A] to [city B]"` — compares train/bus/flight/ferry with rough prices

- `"numbeo cost of living [city]"` — meal/taxi/beer price baselines
- `"seat61 [country]"` — train travel bible, especially Europe/Asia

- `"[attraction] skip the line"` — whether advance booking is actually necessary

## Common Pitfalls to Avoid

1. Don't hardcode venues without links — always include mapLink and websiteLink
2. Don't skip export functionality — users always want to take plans offline

3. Don't forget group composition affects recommendations — babies need stroller access, elderly need less walking
4. Don't build desktop-first — travelers use their phones

5. Don't lose selection state on refresh — persist with localStorage or backend
6. Don't try to build booking into the app — link to booking platforms instead

7. Don't ignore travel times — a day with 4 activities spread across a region may not be realistic
8. Don't recommend venues without checking seasonal availability — a summer beach activity shouldn't appear in a winter itinerary

9. Don't show prices only in local currency — international travelers need conversion
10. Don't treat multi-region trips as a flat list — segment by region with clear transfer days

11. Don't forget packing needs change with activities — hiking gear, swimming gear, and fine dining outfits are all different
12. Don't search for flights without knowing the origin city

## Limitations

- Can't see live prices/availability — user must verify before booking
- Visa rules change — always confirm on official government sites

- Can't book anything
