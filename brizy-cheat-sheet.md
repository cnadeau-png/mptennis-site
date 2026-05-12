# MPTennis · Brizy Cloud Cheat Sheet

Everything you need to recreate the look in Brizy without touching CSS. Bookmark this page and update the values in **Project Settings** so they apply site-wide.

---

## 1. Brand colors

In Brizy: **Settings → Styles → Color palette**. Replace the default swatches with these.

| Slot | Use for | HEX | What it is |
|---|---|---|---|
| **Color 1** | Site background | `#0A1628` | Navy — main page background |
| **Color 2** | Section background (alt) | `#0d1a30` | Slightly lighter navy for variation |
| **Color 3** | Card / surface | `#1A3050` | Cards, embeds, elevated panels |
| **Color 4** | Primary accent | `#7EC845` | The green — CTAs, underlines, dots |
| **Color 5** | Headline / body text | `#FFFFFF` | Pure white |
| **Color 6** | Muted text | `rgba(255,255,255,0.78)` *(or `#C2C7CD`)* | Lede paragraphs, descriptions |
| **Color 7** | Quiet text | `rgba(255,255,255,0.58)` *(or `#929AA4`)* | Eyebrows, fine print, captions |
| **Color 8** | Hairline / border | `rgba(255,255,255,0.16)` *(or `#2B3A52`)* | 1px borders on cards & pills |

> **Why two formats:** Brizy's color picker accepts hex but not rgba directly. Use the rgba in custom CSS overrides; use the solid hex equivalent in the palette swatch.

**Page background:** Settings → Page Settings → Background color → **Color 1** (`#0A1628`).

---

## 2. Typography

In Brizy: **Settings → Styles → Typography**.

**Font family (everywhere):** Montserrat
- Add via Google Fonts in Brizy: Settings → Fonts → Add font → search "Montserrat" → enable weights **400, 500, 600, 700, 800**.

### Type scale

| Brizy preset | Use for | Size (desktop) | Weight | Line height | Letter spacing | Transform |
|---|---|---|---|---|---|---|
| **H1 / Display XL** | Hero headline | 72px (mobile 40px) | 700 | 0.96 | -0.02em | UPPERCASE |
| **H2 / Display LG** | Section headlines | 56px (mobile 36px) | 700 | 1.0 | -0.02em | UPPERCASE |
| **H3 / Display MD** | Sub-section heads | 40px (mobile 28px) | 700 | 1.05 | -0.01em | UPPERCASE |
| **H4** | Card titles | 22px | 700 | 1.2 | -0.01em | none |
| **Body / Lede** | Hero subtext, ledes | 19px | 400 | 1.65 | 0 | none |
| **Body** | Paragraph copy | 16px | 400 | 1.6 | 0 | none |
| **Small** | Card descriptions | 14–15px | 400 | 1.6 | 0 | none |
| **Eyebrow** | Section labels | 12px | 600 | 1.0 | 0.18em | UPPERCASE |
| **Pill / Tag** | Credential pills | 12px | 600 | 1.0 | 0.12em | UPPERCASE |

> **One rule that fixes 90% of "looks off" moments:** if it's a headline or eyebrow, it's **UPPERCASE + tight letter-spacing**. If it's body, it's **sentence case + normal spacing**. Don't mix.

---

## 3. Buttons

Brizy: **Module → Button**, then style it once and **Save as Global Style**.

### Primary button (solid green)
| Property | Value |
|---|---|
| Background | `#7EC845` (Color 4) |
| Text color | `#0A1628` (Color 1) |
| Font | Montserrat 600, 14px |
| Letter spacing | 0.06em |
| Text transform | UPPERCASE |
| Padding | 16px top/bottom · 28px left/right |
| Border radius | 100px (pill) |
| Border | none |
| Hover | Background `#8FD653` (slightly lighter), translate-Y -1px |

### Ghost button (outline)
| Property | Value |
|---|---|
| Background | transparent |
| Text color | `#FFFFFF` (Color 5) |
| Border | 1px solid `rgba(255,255,255,0.16)` (Color 8) |
| Font | Montserrat 600, 14px |
| Letter spacing | 0.06em |
| Text transform | UPPERCASE |
| Padding | 16px / 28px |
| Border radius | 100px |
| Hover | Border color `#FFFFFF`, background `rgba(255,255,255,0.04)` |

> **Always use both together** in the hero: solid (primary action) + ghost (secondary). Never two solids side-by-side.

---

## 4. Section & spacing rules

| Element | Value |
|---|---|
| Max content width | 1280px |
| Section padding (desktop) | 80px top/bottom |
| Section padding (mobile) | 56px top/bottom |
| Side padding (desktop) | 64px |
| Side padding (mobile) | 24px |
| Gap between cards (grid) | 24px |
| Gap between hero CTA buttons | 16px |

In Brizy: set these on the **Section** module → Style → Padding. Save as a Global Section Style called "Standard section."

---

## 5. The "underline accent" (green underbar on key words)

Used in the hero ("***Pro-level*** coaching") and other headlines.

In Brizy this isn't a built-in element — easiest path:
1. Select the word(s) in the headline.
2. Apply text color `#7EC845` (Color 4), OR
3. Add an inline span via the rich text → HTML mode and wrap the word: `<span style="border-bottom: 3px solid #7EC845; padding-bottom: 4px;">Pro-level</span>`

Use sparingly — **one underlined word per headline, max two.**

---

## 6. Image treatment

For all hero / section imagery in Brizy:
- **Saturation:** -8 to -15 (slightly desaturated — we're not selling fruit)
- **Contrast:** +5 to +8
- **Brightness:** -10 to -20 on hero backgrounds (so headlines stay legible)
- **Overlay:** linear gradient, `rgba(10,22,40,0.4)` top → `rgba(10,22,40,0.85)` bottom

In Brizy: Section → Background → Image → Overlay → Gradient.

---

## 7. The "do / don't" rules for any new copy

**Do:**
- Lead with a tension or a specific audience. Vague = invisible.
- Use Cade's credentials as proof, not as the headline.
- Name the audience explicitly (club players, juniors, parents) when relevant.
- Keep paragraphs to 2–3 sentences max.
- Use ALL CAPS only for headlines and eyebrows.

**Don't:**
- Use generic tennis platitudes ("elevate your game," "unlock your potential").
- Stack three solid CTAs in a row — use one solid + one ghost.
- Drop pricing on the home page — that lives on the Ace product site.
- Use emojis in body copy.
- Write headlines longer than 8–10 words.

---

## 8. Quick reference: where each color goes

```
Page background        → #0A1628 (navy)
Card / panel bg        → #1A3050 (surface)
Primary CTA            → #7EC845 (green) on #0A1628
Headline text          → #FFFFFF
Body copy              → rgba(255,255,255,0.78)
Captions / fine print  → rgba(255,255,255,0.58)
1px borders            → rgba(255,255,255,0.16)
Underline accent       → #7EC845
```

---

**Last updated:** to match `styles.css?v=8` (current homepage build).
