# ASPIRE Learning Centre — Design System & UI/UX Specification

**Product:** ASPIRE Learning Centre Official Website  
**Design Type:** Light-first, responsive, premium educational website  
**Primary Experience:** Mobile-first public website for an offline coaching institute  
**Brand Personality:** Academic, ambitious, trustworthy, modern, focused and human

---

# 1. Design Vision

The ASPIRE website should feel like a **premium, established offline coaching institute**, not like a generic SaaS landing page, online-course marketplace, or AI-generated template.

The visual language should combine:

- Clean editorial layouts
- Strong typography
- Human photography
- Clear academic information
- Controlled motion
- Distinctive section compositions
- Subtle depth
- Modern mobile UX
- A recognizable ASPIRE visual identity

The design should be **simple without being empty** and **stylish without becoming decorative**.

---

# 2. Design Principles

## 2.1 Human First

Use real ASPIRE:
- classrooms
- teachers
- centre
- students
- achievements
- study environments

when available.

Avoid relying on generic AI/stock education illustrations for the main brand story.

## 2.2 Information First

The visitor should understand:
1. What ASPIRE offers
2. Which course is relevant to them
3. How the teaching works
4. Why the institute is credible
5. How to enquire

without searching through the site.

## 2.3 Strong Typography

Typography should carry much of the visual identity.

Do not use the same font size, weight and card treatment for every element.

Use:
- large editorial headlines
- compact eyebrow labels
- bold numeric statistics
- highly readable body copy
- smaller metadata typography

## 2.4 Intentional Variety

Do not make every section:
- a three-column card grid
- rounded cards
- a centered heading + cards
- blue buttons on white cards

Mix:
- full-width image sections
- asymmetric grids
- horizontal strips
- editorial blocks
- lists
- timelines
- statistics
- split layouts
- bordered panels
- sharp-corner containers
- softly rounded containers

## 2.5 Restrained Animation

Animation should improve orientation and perceived quality.

Use:
- subtle entrance animation
- image reveal
- hover movement
- number count-up
- active navigation transition
- smooth section transitions

Avoid:
- constant floating objects
- excessive parallax
- slow page transitions
- distracting looping animations

---

# 3. Brand Colour System

The ASPIRE logo contains blue, navy and orange. Build the web palette around these colours while adding supporting colours so the interface does not look two-toned.

## Primary

**ASPIRE Blue**
- `#1769E8`

Use for:
- primary CTA
- links
- active states
- key data points
- selected navigation items

## Deep Navy

**ASPIRE Navy**
- `#102A56`

Use for:
- major headings
- navigation
- footer
- dark editorial sections

## Accent Orange

**ASPIRE Orange**
- `#FF8A1F`

Use sparingly for:
- highlights
- badges
- important visual accents
- achievement indicators
- secondary CTA emphasis

## Supporting Colours

**Teal**
- `#14B8A6`

Use for:
- academic progress
- success information
- positive statistics

**Violet**
- `#7C5CFC`

Use for:
- selected educational categories
- optional visual emphasis

**Rose**
- `#F06D8F`

Use sparingly for:
- softer highlights
- event/announcement accents

**Sky**
- `#55B8FF`

Use for:
- lighter visual elements
- secondary charts
- illustrations

## Neutrals

Background:
- `#F8FAFC`

Surface:
- `#FFFFFF`

Soft Surface:
- `#F1F5F9`

Border:
- `#E2E8F0`

Primary Text:
- `#102033`

Secondary Text:
- `#5C6B7A`

Muted Text:
- `#8491A1`

---

# 4. Colour Usage Rules

The website should not use every accent colour simultaneously in every section.

Recommended principle:

**1 dominant brand colour + 1 section accent + neutral foundation**

Examples:

Home hero:
- Blue + Navy + Orange

NEET section:
- Blue + Teal

JEE section:
- Navy + Violet

Foundation section:
- Blue + Sky

Results section:
- Navy + Orange

This creates variety while retaining brand consistency.

---

# 5. Typography

Typography is a key part of the design system.

Use **two complementary typefaces** rather than one font everywhere.

## Recommended Pair

### Display / Editorial
**Manrope** or a similar modern geometric display sans

Use for:
- H1
- H2
- hero statements
- large statistics

### Body / UI
**Inter** or a similar highly readable UI sans

Use for:
- body
- labels
- navigation
- buttons
- forms
- metadata

A limited third typeface may be used only for occasional editorial emphasis, but should not become a default UI font.

---

# 6. Typography Scale

Desktop:

```text
Display XL: 72–88px / weight 700
Display L : 56–68px / weight 700
H1         : 48–60px / weight 700
H2         : 36–44px / weight 700
H3         : 26–32px / weight 650
H4         : 20–24px / weight 650

Body L     : 18–20px / line-height 1.6
Body       : 16–18px / line-height 1.6
Body S     : 14–15px / line-height 1.5

Caption    : 12–13px
```

Mobile:

```text
Display    : 42–52px
H1         : 36–42px
H2         : 28–34px
H3         : 22–26px
Body       : 15–17px
Caption    : 12–13px
```

Never scale every heading proportionally without checking the actual visual balance on mobile.

---

# 7. Layout System

Use a **12-column desktop grid**.

Recommended:
- max-width: 1280–1440px
- content width: approximately 1180–1320px
- generous horizontal margins
- 24–32px column gaps

Tablet:
- 8-column equivalent layout

Mobile:
- single-column primary layout
- 16–20px side padding

Sections should not all have identical heights.

---

# 8. Spacing

Use an 8px base rhythm.

```text
4px   Micro
8px   XS
12px  Small
16px  Medium
24px  Large
32px  XL
48px  Section-small
64px  Section-medium
96px  Section-large
128px Hero/editorial
```

Whitespace is a major part of the brand.

---

# 9. Corner Radius Strategy

Do NOT make every component fully rounded.

Use mixed geometry intentionally.

### 0px
For:
- full-bleed image blocks
- editorial separators
- certain data tables
- footer navigation regions
- large structural containers

### 6–10px
For:
- buttons
- input fields
- compact utility cards
- badges

### 12–16px
For:
- course cards
- faculty cards
- result cards
- FAQ panels

### 20–28px
For:
- hero feature cards
- special promotional blocks
- image panels

### Pill / 999px
Only for:
- tags
- category labels
- status badges
- very small controls

The site should visually mix sharp, modestly rounded and rounded elements.

---

# 10. Shadows & Borders

Use shadows very carefully.

Preferred:
- subtle elevation
- soft diffused shadow
- low opacity

Avoid:
- heavy floating-card shadows
- excessive glow
- neon effects

Borders should often replace shadows.

Example:

`1px solid #E2E8F0`

This keeps the interface clean and premium.

---

# 11. Header Design

## Desktop

Header structure:

```text
[ASPIRE Logo]

About
Courses
Results
Faculty
Methodology
Centre
Updates
FAQs

               [Enquire Now]
```

Navigation should be:
- clean
- compact
- sticky after scroll
- supported by an active page indicator

## Mobile

```text
[Logo]                       [Menu]
```

The mobile menu should open as a polished full-height or large slide-in navigation.

Primary action:
**Enquire Now**

---

# 12. Hero Section

The hero should be visually distinctive.

Recommended layout:

```text
┌─────────────────────────────────────────────┐
│ Small Label                                 │
│                                             │
│ BUILD STRONG                                │
│ CONCEPTS.                                   │
│ PREPARE WITH                                │
│ PURPOSE.                                    │
│                                             │
│ Supporting statement                        │
│                                             │
│ [Explore Courses] [Enquire Now]             │
│                                             │
│                                   Photo     │
│                                classroom     │
└─────────────────────────────────────────────┘
```

Use a large real classroom/faculty image.

Possible visual treatment:
- oversized image crop
- angled image window
- geometric background shapes
- subtle blue/orange accent strokes

Do not put everything inside a giant rounded glass card.

---

# 13. Hero Dynamic Behaviour

On page load:
- headline reveals line-by-line or with a subtle upward movement
- image enters slightly later
- CTA fades in

On scroll:
- hero image can have minimal scale movement
- decorative elements move slightly

Keep the entire animation under a restrained, professional motion language.

---

# 14. Course Section

Courses are one of the most important website areas.

Recommended visual treatment:

### Foundation

Large feature panel:
`STD. 9–10`

### Senior Secondary

Split panel:
`STD. 11–12`

### Competitive Exams

Two strong panels:
`NEET`
`JEE MAIN + ADVANCED`

Do not make all seven courses identical cards.

Each course should have:
- course title
- audience
- short description
- subject focus
- CTA

---

# 15. Course Card Design

Course cards should support different visual states.

Example:

```text
NEET
Medical Entrance Preparation

Biology  •  Physics  •  Chemistry

[View Course]                         →
```

Use a thin accent line or small colour block for course identity.

---

# 16. Why ASPIRE Section

Use a horizontal, editorial style rather than another card grid.

Example:

```text
WHY ASPIRE?

01  Classroom-first learning
02  Regular testing
03  Personal academic guidance
04  Parent visibility
05  Performance tracking
```

Large numbers should be visually prominent.

---

# 17. Methodology Section

Use a visual process.

```text
01
CONCEPT
   ↓
02
PRACTICE
   ↓
03
TEST
   ↓
04
ANALYZE
   ↓
05
IMPROVE
```

Desktop:
- horizontal

Mobile:
- vertical timeline

Use colourful stage markers but retain a white/light background.

---

# 18. Results Section

Make this one of the strongest trust-building sections.

Recommended structure:

```text
OUR RESULTS
Results that reflect consistent preparation.

[Metric] [Metric] [Metric]

--------------------------------

Student Achievement
Score / Rank
Exam
Year

→ View All Results
```

Use large numbers and verified achievement information.

Do not fabricate or visually imply unsupported rankings.

---

# 19. Results Visual Style

Use:
- dark navy editorial background OR white background with deep navy typography
- orange accent for achievement
- blue/teal highlights
- simple charts where meaningful
- certificate/student image where permitted

Avoid turning every achievement into a huge trophy graphic.

---

# 20. Faculty Section

Use a magazine/editorial grid.

Not:

```text
[Card][Card][Card][Card]
```

Instead use:

```text
[Large Faculty Image] [Faculty information]
                     [Faculty]
                     [Subject]
                     [Experience]
```

Additional faculty members can appear in a smaller grid below.

This gives the site a more human and premium appearance.

---

# 21. Centre / Infrastructure Section

Use full-width visual storytelling.

Recommended:

```text
Large classroom image
       +
small image collage
       +
short copy
       +
Visit Centre CTA
```

Images should feel authentic and documentary.

---

# 22. Test Series Section

Visual style:
- dark or lightly tinted section
- strong test/assessment typography
- subtle data visualization

Show:
- regular assessments
- chapter tests
- exam-pattern testing
- performance analysis
- student progress

CTA:
**Explore Test Series**

Do not expose private test papers.

---

# 23. Student App Section

This section connects the public website to the private ecosystem.

Use real UI mockups/screenshots of the ASPIRE application.

Layout:

```text
Manage your ASPIRE journey.

Attendance
Timetable
Tests
Materials
Results
Performance

                     [App Screens]
```

CTA:
**Student Login**

Secondary:
**Parent Login**

Make it explicit that this area is for **ASPIRE students/parents**.

---

# 24. Testimonials

Use testimonials carefully.

Recommended:

Large quote:
> “...”

Student/Parent name:
Course / Batch

Navigation:
`01 / 05`

Use real testimonials only with appropriate permission.

Avoid fake-looking five-star review layouts.

---

# 25. Announcements / Updates

Use a news-style layout.

Example:

```text
UPDATES

[Date]   New JEE batch announced       →
[Date]   Admission counselling         →
[Date]   Test series update             →
```

Use categories such as:
- Admissions
- Academic
- Events
- Notices

Internal app-only announcements should not automatically appear here.

---

# 26. FAQ Design

Use a simple accordion.

Each item:

`+  Are classes conducted offline?`

When open:

`−  Are classes conducted offline?`
`Yes, ASPIRE Learning Centre focuses on offline classroom coaching...`

Avoid boxed accordions with excessive shadows.

---

# 27. Admission Enquiry Section

This is the main conversion section.

Use a distinctive background treatment.

Left:
- heading
- short explanation
- contact details

Right:
- enquiry form

Form:
- Student name
- Parent name
- Mobile
- Standard
- Course
- Message

CTA:
**Submit Enquiry**

Keep the form visually calm and easy to complete on mobile.

---

# 28. Contact Section

The contact section should combine:

- Address
- Phone
- WhatsApp
- Email
- Working hours
- Map

Use an actual map integration for directions.

Do not make the visitor copy and paste an address manually.

---

# 29. Footer Design

Use a darker ASPIRE Navy footer.

Structure:

```text
ASPIRE
Learning Centre

A short institute description.

Courses             Institute
Std. 9              About
Std. 10             Faculty
Std. 11             Results
Std. 12             Centre
NEET                Updates
JEE                 Contact

             [Enquire Now]

--------------------------------

Privacy | Terms | App Login

© ASPIRE Learning Centre
```

Use a small orange/blue accent detail rather than turning the entire footer colourful.

---

# 30. Buttons

## Primary

Blue background
White text

Example:
`Enquire Now →`

## Secondary

Transparent / white
Bordered

Example:
`Explore Courses`

## Dark

Navy background
White text

Use on light sections where stronger contrast is needed.

## Text Action

No container:
`View Details →`

Buttons should not all look like floating pills.

Preferred radius:
- 8–12px

---

# 31. Form Design

Inputs:
- clean border
- white background
- 8–12px radius
- 52–56px height on desktop
- 48–52px on mobile

Labels should always be visible.

Do not rely solely on placeholders.

Show:
- focus state
- error state
- success state
- disabled state

---

# 32. Iconography

Use one icon family consistently.

Recommended qualities:
- clean
- thin/medium stroke
- minimal
- professional

Avoid mixing:
- 3D icons
- emoji
- outlined icons
- filled icons

unless there is a deliberate reason.

---

# 33. Photography Direction

Preferred:
- real classroom photographs
- teacher interaction
- students studying
- institute building
- tests/exams
- faculty portraits
- award/result moments

Photography treatment:
- natural
- bright
- slightly editorial
- authentic
- not overly staged

Do not use generic photos of foreign classrooms if actual ASPIRE images are available.

---

# 34. Illustration Direction

When photography is unavailable, use:
- abstract academic shapes
- thin line illustrations
- mathematical/geometric forms
- subtle educational diagrams

Avoid:
- generic AI student characters
- floating 3D books
- generic graduation-cap stock art
- overly glossy ed-tech illustrations

---

# 35. Motion System

Use three levels.

## Micro

Duration:
`120–180ms`

For:
- button hover
- icons
- active states

## UI

Duration:
`220–350ms`

For:
- menus
- cards
- modals
- accordions

## Editorial

Duration:
`500–800ms`

For:
- hero reveal
- section transitions
- large image movement

Use easing similar to:

`ease-out` for entrances

`ease-in-out` for transitions

Support `prefers-reduced-motion`.

---

# 36. Responsive Breakpoints

Use practical responsive behaviour rather than designing only for fixed devices.

Suggested:

```text
Small Mobile   < 480px
Mobile         480–767px
Tablet         768–1023px
Desktop        1024–1439px
Large Desktop  1440px+
```

Layouts should fluidly adapt between breakpoints.

---

# 37. Mobile Design

Mobile is a first-class experience.

Prioritize:
- short sections
- readable typography
- sticky enquiry/contact action
- thumb-friendly buttons
- simple navigation
- swipeable result/course sections where appropriate
- short forms

Avoid:
- tiny text
- dense tables
- horizontal overflow
- desktop navigation squeezed into mobile

---

# 38. Mobile Navigation

Recommended:

```text
┌────────────────────────────┐
│ ASPIRE              ☰      │
└────────────────────────────┘
```

Menu:

```text
Courses
About
Results
Faculty
Methodology
Centre
Updates
FAQs

----------------------------

Student Login
Parent Login

[Enquire Now]
```

The enquiry button should remain highly accessible.

---

# 39. Cards

Cards should not become the default component for everything.

Use cards for:
- courses
- faculty
- result items
- selected features
- announcements

Use other patterns for:
- methodology
- contact
- navigation
- large statistics
- testimonials

This prevents the website from looking repetitive or AI-generated.

---

# 40. Decorative Language

Use a small set of recurring brand motifs:

- flowing blue lines
- subtle geometric circles
- orange accent strokes
- academic grid patterns
- thin diagram-like lines

Keep these mostly in:
- hero
- section transitions
- selected feature areas

Do not decorate every section.

---

# 41. Section Background Strategy

Rotate backgrounds deliberately:

1. White
2. Soft blue tint
3. White
4. Deep navy
5. Light neutral
6. White
7. Soft blue
8. Deep navy footer

This creates rhythm without needing heavy graphics.

---

# 42. Page-Specific Visual Themes

## Home
Most visually expressive.

## Course Pages
More structured and informative.

## Results
Achievement-oriented.

## Faculty
Human/editorial.

## Centre
Photography-driven.

## Updates
Magazine/news-inspired.

## Contact
Simple and functional.

The whole site should not have identical page templates.

---

# 43. Course Colour Coding

Use subtle visual coding.

```text
Std. 9–10      → Sky / Blue
Std. 11–12     → Blue / Navy
NEET           → Teal
JEE            → Violet / Blue
```

The colours should appear in:
- small labels
- accent rules
- icons
- charts
- highlights

Do not recolour the entire site for each course.

---

# 44. Accessibility

The visual design must maintain:

- strong text/background contrast
- clear focus states
- readable body copy
- touch targets of at least approximately 44px
- semantic hierarchy
- reduced-motion support
- keyboard-accessible navigation
- meaningful form errors

Never communicate important information by colour alone.

---

# 45. States

Every interactive section should define:

### Default
Normal state.

### Hover
Desktop interaction.

### Focus
Keyboard/mobile accessibility.

### Active
Selected state.

### Loading
Skeleton or lightweight loader.

### Empty
Helpful empty message.

### Error
Clear recovery instruction.

### Success
Clear confirmation.

---

# 46. Loading Design

Use skeletons for:
- course content
- results
- faculty
- announcements

Avoid full-page spinners unless the whole application is genuinely blocked.

---

# 47. Error Design

Example:

> **Something didn't load.**
> Please try again.

Action:
`Retry`

Do not expose technical errors to visitors.

---

# 48. 404 Page

Create a branded 404 page.

Example:

```text
404

Looks like this lesson
isn't on today's timetable.

[Back Home]
[Explore Courses]
```

Keep it playful but professional.

---

# 49. Microcopy Style

Copy should be:
- short
- confident
- clear
- human
- academic
- encouraging

Prefer:

**Build Strong Concepts. Prepare With Purpose.**

Avoid:

**Welcome to the ultimate revolutionary next-generation
educational learning experience platform.**

---

# 50. Design System Component Inventory

Build reusable components for:

```text
Header
MobileMenu
Footer
Button
TextButton
Badge
CourseCard
FacultyCard
ResultCard
AnnouncementItem
Testimonial
StatBlock
SectionHeading
Breadcrumb
FAQAccordion
FormField
EnquiryForm
ImagePanel
FeatureList
Timeline
CourseHero
CTASection
MapSection
AppPreview
Modal
Toast
Skeleton
```

Components should support variants instead of creating duplicated components for every page.

---

# 51. Design Tokens

Create central tokens for:

```text
Colors
Typography
Spacing
Radii
Borders
Shadows
Container widths
Breakpoints
Motion durations
Z-index layers
```

The website should be easy to rebrand or update from one source.

---

# 52. Avoiding an AI-Generated Look

This is a specific design requirement.

The website should avoid:

- identical rounded cards everywhere
- excessive glassmorphism
- excessive gradients
- repetitive 3-column layouts
- generic "AI startup" typography
- random gradient blobs
- excessive floating icons
- fake dashboards used as decoration
- meaningless statistics
- stock-photo overload
- excessive pill buttons
- every section centered
- every headline using the same style

Instead:

- vary layouts
- use editorial composition
- use real photography
- combine square and rounded geometry
- use typography as a visual tool
- create asymmetric sections
- vary section density
- allow some sections to breathe
- use data only when it communicates something useful

---

# 53. Website Personality

The final visual feeling should be:

**70% premium academic institute**  
**20% modern digital product**  
**10% youthful energy**

Not:

**50% generic SaaS**  
**30% ed-tech marketplace**  
**20% AI-generated landing page**

---

# 54. Example Visual Rhythm

A strong home page sequence:

```text
Hero
↓
Course Paths
↓
Why ASPIRE
↓
Teaching Methodology
↓
Results
↓
Faculty
↓
Centre
↓
Test Series
↓
Student App
↓
Testimonials
↓
Updates
↓
FAQs
↓
Admission CTA
↓
Contact
↓
Footer
```

The sections should vary in composition so the user feels continuous visual progression.

---

# 55. Implementation Guidance

When implementing this design:

1. Build the design tokens first.
2. Build the shared header/footer.
3. Build reusable content components.
4. Build Home using those components.
5. Build course pages with a more information-dense layout.
6. Build Results, Faculty, Centre and Contact.
7. Add responsive behaviour.
8. Add motion after the layout is stable.
9. Optimize photography and assets.
10. Perform mobile, tablet and desktop visual QA.

Never solve spacing, typography and colours independently on each page.

---

# 56. Final Visual Target

ASPIRE Learning Centre's website should look like:

> **A polished, modern Indian offline coaching brand with the confidence of an established academic institute and the usability of a high-quality digital product.**

The design should be recognizable from typography, colour accents, photography and layout alone—even before the ASPIRE logo is visible.

The interface must remain:
**simple, responsive, light-themed, dynamic, professional, colourful but controlled, human, and original.**
