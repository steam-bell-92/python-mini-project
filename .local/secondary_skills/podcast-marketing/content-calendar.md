# Content Calendar

Auto-schedule generated content across platforms using best-practice timing rules and content mix optimization.

## Table of Contents

- [Platform Timing Rules](#platform-timing-rules)
- [Content Mix Strategy](#content-mix-strategy)

- [Calendar Generation Logic](#calendar-generation-logic)
- [Output Format](#output-format)

- [Multi-Episode Scheduling](#multi-episode-scheduling)

## Platform Timing Rules

Optimal posting times based on platform-specific engagement data. Times are in the user's local timezone (ask if not provided, default to US Eastern).

| Platform | Best Days | Best Times | Frequency | Notes |

|----------|----------|-----------|-----------|-------|

| Twitter/X | Mon-Fri | 9-11am, 1-3pm | 1-2 posts/day | Threads perform best Tue-Thu morning |

| LinkedIn | Tue-Thu | 8-10am | 2-3 posts/week | Avoid weekends — engagement drops 60% |

| Instagram Feed | Mon, Wed, Fri | 11am-1pm | 3-5 posts/week | Quote cards + carousels outperform text |

| Instagram Reels | Tue, Thu, Sat | 9am, 12pm, 7pm | 3-5/week | First 3 seconds are critical |

| TikTok | Tue, Thu, Sat | 7-9pm | 3-5/week | Evening posts outperform morning |

| YouTube Shorts | Sat, Sun | 9am-12pm | 1-2/week | Weekend discovery is strongest |

| Newsletter | Tue or Thu | 7-9am | 1/week | Tuesday has highest open rates |

| Blog | Any weekday | Morning publish | 1/episode | SEO value accumulates over time |

## Content Mix Strategy

Don't dump all content on release day. Spread it across the week following an episode release to maximize reach and avoid audience fatigue.

### Release Week Schedule (Single Episode)

| Day | Platform | Content Piece | Why |

|-----|----------|--------------|-----|

| Day 0 (Release) | Blog, Newsletter | Blog post + newsletter | Drive listens on release day |

| Day 1 | Twitter/X | Thread (top atoms) | Morning engagement peak |

| Day 1 | Instagram | Quote card (highest-scored quote) | Visual hook |

| Day 2 | LinkedIn | Long-form post | Professional audience, mid-week peak |

| Day 2 | TikTok | Video clip \#1 (most controversial) | Evening engagement |

| Day 3 | Twitter/X | Single tweet (data point atom) | Maintain presence |

| Day 3 | Instagram Reels | Video clip \#1 (cross-post) | Reels algorithm favors consistency |

| Day 4 | Instagram | Quote card \#2 | Keep feed active |

| Day 4 | YouTube Shorts | Video clip \#2 | Weekend discovery window |

| Day 5 | Twitter/X | Quote tweet thread with commentary | Re-engage thread audience |

| Day 5 | TikTok | Video clip \#2 | Different angle from clip \#1 |

| Day 6 | Instagram Stories | Behind-the-scenes or teaser for next ep | Build anticipation |

### Content Priority by Score

Map viral scores to scheduling priority:

- **80-100 (Priority)**: Schedule in prime-time slots (peak engagement hours). These are your hero posts — threads, lead video clips, newsletter leads.
- **60-79 (Strong)**: Fill standard slots. Good supporting content — quote cards, secondary clips, individual tweets.

- **40-59 (Fill)**: Use for low-competition slots or story content. Keep the feed active without risking weak performance in prime slots.
- **Below 40**: Don't schedule. Archive for potential future use.

## Calendar Generation Logic

### Algorithm

1. Sort all content pieces by viral score (descending)
2. Assign hero content (score 80+) to prime-time slots first

3. Fill remaining slots with strong content (60-79), respecting platform frequency limits
4. Add fill content (40-59) to any remaining open slots

5. Check for conflicts (no two posts on the same platform within 4 hours)
6. Verify content variety (no two quote cards back-to-back on the same platform)

### Slot Assignment

```python

from datetime import datetime, timedelta

PLATFORM_SLOTS = {

"twitter": [

{"day_offset": 1, "time": "09:00", "type": "thread"},

{"day_offset": 3, "time": "10:00", "type": "single_tweet"},

{"day_offset": 5, "time": "09:00", "type": "quote_tweet"},

],

"linkedin": [

{"day_offset": 2, "time": "08:30", "type": "article"},

],

"instagram_feed": [

{"day_offset": 1, "time": "12:00", "type": "quote_card"},

{"day_offset": 4, "time": "11:00", "type": "quote_card"},

],

"instagram_reels": [

{"day_offset": 3, "time": "12:00", "type": "video_clip"},

],

"tiktok": [

{"day_offset": 2, "time": "19:00", "type": "video_clip"},

{"day_offset": 5, "time": "19:00", "type": "video_clip"},

],

"youtube_shorts": [

{"day_offset": 4, "time": "10:00", "type": "video_clip"},

],

"newsletter": [

{"day_offset": 0, "time": "08:00", "type": "newsletter"},

],

"blog": [

{"day_offset": 0, "time": "09:00", "type": "blog_post"},

],

}

def generate_calendar(

content_pieces: list[dict],

release_date: datetime,

timezone: str = "US/Eastern",

) -> list[dict]:

"""Generate a content calendar from scored content pieces."""

sorted_pieces = sorted(

content_pieces, key=lambda p: p.get("score", 0), reverse=True

)

calendar = []

used_slots = set()

for piece in sorted_pieces:

platform = piece["platform"]

content_type = piece["type"]

slots = PLATFORM_SLOTS.get(platform, [])

for slot in slots:

if slot["type"] != content_type:

continue

slot_key = f"{platform}-{slot['day_offset']}-{slot['time']}"

if slot_key in used_slots:

continue

publish_date = release_date + timedelta(days=slot["day_offset"])

hour, minute = map(int, slot["time"].split(":"))

publish_dt = publish_date.replace(hour=hour, minute=minute)

calendar.append({

"platform": platform,

"type": content_type,

"publish_at": publish_dt.isoformat(),

"content": piece["content"],

"score": piece.get("score", 0),

"atom_id": piece.get("atom_id"),

})

used_slots.add(slot_key)

break

calendar.sort(key=lambda c: c["publish_at"])

return calendar

```

## Output Format

The calendar is saved as JSON for easy integration with scheduling tools:

```json

{

"episode": {

"title": "Episode Title",

"release_date": "2024-01-15",

"url": "https://..."

},

"timezone": "US/Eastern",

"calendar": [

{

"platform": "blog",

"type": "blog_post",

"publish_at": "2024-01-15T09:00:00",

"content_file": "blog-post.md",

"score": 82

},

{

"platform": "twitter",

"type": "thread",

"publish_at": "2024-01-16T09:00:00",

"content_file": "social/twitter-thread.md",

"score": 91

}

],

"stats": {

"total_pieces": 15,

"scheduled": 12,

"cut_below_threshold": 3,

"avg_score": 72,

"highest_score": 91,

"platforms_covered": 7,

"calendar_span_days": 6

}

}

```

## Multi-Episode Scheduling

When processing multiple episodes (batch mode), interleave content from different episodes to maintain variety:

- Never schedule content from two different episodes on the same platform on the same day
- Space episode releases at least 3 days apart in the calendar

- Prioritize newer episodes for prime-time slots
- Use older episode content as gap filler between new releases
