# SoiréeXpress Design Guidelines

## Design Approach
**Reference-Based: Party/Nightlife Service Industry**
Drawing inspiration from modern delivery services (Uber Eats, Deliveroo) combined with fun, approachable nightlife aesthetics. The design should feel trustworthy yet playful, balancing professionalism with the late-night party atmosphere.

## Brand Identity & Core Principles
- **Mood**: Fun, warm, approachable yet professional ("bonne franquette pro")
- **Visual Style**: Clean with vibrant energy, avoiding nightclub/rave aesthetics in favor of "chill party vibes"
- **User Context**: Late-night users (1:30AM-5AM) need clear, easy-to-scan information

## Color Palette

**Primary Colors:**
- **Orange Vif**: 14 75% 58% (Brand primary - #E84C3D equivalent)
- **Beige Clair**: 30 70% 93% (Secondary - #FBEEDC equivalent)
- **Noir Doux**: 0 0% 11% (Text - #1C1C1C)

**Usage:**
- Background: Orange for hero/CTA sections, Beige for catalog/content sections
- Accents: White text on orange, dark text on beige
- Map overlay: Orange at 20% opacity with beige border
- Buttons: Orange primary CTA, beige outline on dark backgrounds

## Typography
**Font Stack**: Poppins (primary) / Montserrat (headings alternative) / Nunito (body alternative)

- **Hero Headline**: Bold, 48-64px desktop / 32-40px mobile
- **Section Titles**: SemiBold, 32-40px desktop / 24-32px mobile  
- **Body Text**: Regular, 16-18px with 1.6 line height
- **Product Names**: Medium, 18-20px
- **Prices**: Bold, 20-24px in orange

## Layout System
**Spacing Units**: Tailwind 4, 6, 8, 12, 16, 20, 24, 32 (consistent vertical rhythm)

**Container Strategy:**
- Full-width sections with inner max-w-6xl for content
- Hero: Full viewport height with centered content
- Sections: py-16 to py-24 desktop, py-12 mobile

## Section-by-Section Specifications

### 1. Hero Section (Full Viewport)
- **Background**: Orange with subtle radial gradient (lighter beige glow center)
- **Content**: Centered logo, main slogan, primary CTA button
- **Slogan**: "La soirée n'est jamais finie — SoiréeXpress te livre entre 1h30 et 5h du matin 🍾"
- **CTA**: Large orange-to-darker-orange button "Commander maintenant" → smooth scroll to order section
- **Visual**: No hero image, clean graphic treatment with emoji accents

### 2. How It Works Section (Beige Background)
- **Layout**: 4-column grid desktop (2x2 mobile)
- **Style**: Icon cards with numbered steps
- **Icons**: Large, playful icons in orange on beige circular backgrounds
- **Steps**: Shopping cart → Phone → Delivery truck → Party emoji
- **Card Design**: Subtle shadow, rounded corners (16px), padding 24px

### 3. Practical Info Banner (Orange Background)
- **Layout**: 4-column stat display
- **Icons**: Small inline icons next to each stat
- **Typography**: Bold numbers/times in beige, descriptive text in white
- **Info**: Minimum order, hours, zone, payment methods

### 4. Interactive Map Section (White/Light Background)
- **Map**: Google Maps embedded with custom styling
- **Overlay**: Circular radius (25km) centered on Lorient
- **Circle**: Orange fill at 20% opacity, beige 2px border
- **Cities Labeled**: All 9 serviced locations pinned
- **Legend**: Below map in beige card with orange accent border
- **Height**: 400-500px desktop, 300px mobile

### 5. Product Catalog (Beige Background)
- **Category Layout**: Accordion or tabbed interface
- **Product Cards**: Grid 3-4 columns desktop, 2 columns tablet, 1 mobile
- **Card Style**: White background, rounded, shadow on hover
- **Product Display**: Image/icon top, name, price in orange bold
- **Categories**: 
  - 🥃 Alcool (with bottle icons/images)
  - 🧃 Softs (with can/bottle visuals)  
  - 🍟 Snacks (with package images)
  - 🎉 Accessoires (with fun product icons)

### 6. Order Section (Orange Background)
- **Layout**: Centered content, max-width 600px
- **Phone Display**: Extra-large, clickable with icon
- **Message Example**: Beige card with formatted example text, monospace font
- **WhatsApp CTA**: Prominent green WhatsApp button with pre-filled message link
- **Secondary Info**: Small text about payment/minimum order

### 7. Rules/Regulations (Beige Background)
- **Layout**: Single column, max-width prose
- **Style**: Clean list format with bullet points or numbered items
- **Typography**: Slightly smaller body text (14-16px)
- **Accent**: Orange bullets or numbering
- **Tone**: Professional but not overly legal

### 8. Footer (Dark/Noir Doux Background)
- **Layout**: 3-column grid (1 column mobile)
- **Content**: Logo + tagline | Navigation links | Social media
- **Tagline**: "SoiréeXpress — le plan B préféré des fêtards 🍾" in beige
- **Links**: Beige text with orange hover
- **Social**: Instagram icon linking to @soireexpress
- **Copyright**: Small text, centered, beige opacity 70%

## Interactive Elements

**Buttons:**
- Primary: Solid orange, white text, rounded-full, px-8 py-4
- Secondary: Beige outline on orange bg with blur backdrop
- WhatsApp: Green (#25D366) with white text and icon
- Hover: Slight scale (1.05), darker shade

**Navigation:**
- Smooth scroll anchors to sections
- Sticky header option with logo + phone number on scroll
- Mobile: Hamburger menu in orange

**Animations:**
- Minimal: Fade-in on scroll for sections
- Button hover scale/shadow
- Product card lift on hover
- NO distracting or excessive animations

## Images & Visual Assets

**Hero Section**: No large hero image - use graphic treatment with logo and vibrant orange background

**Product Catalog**: 
- Use actual product images where possible (bottles, cans, packages)
- Consistent photo style: Clean, well-lit, white or transparent backgrounds
- Fallback to high-quality icons for accessories

**Atmosphere Photos**: 
- Small accent images showing "chill party vibes" - NOT nightclub
- Possibly in "How it Works" or testimonial areas
- Style: Warm lighting, friends hanging out, casual gatherings

**Icons**: Font Awesome or Heroicons for UI elements (delivery truck, clock, map pin, phone, etc.)

## Responsive Behavior
- **Desktop (1024px+)**: Full multi-column layouts, spacious padding
- **Tablet (768-1023px)**: Reduced columns (3→2), adjusted spacing
- **Mobile (< 768px)**: Single column, stacked sections, larger tap targets (min 48px)
- **Map**: Full width on all devices, height adjusts

## Accessibility
- High contrast maintained (orange on beige, white on orange, dark on beige)
- All interactive elements clearly visible and labeled
- Phone number and WhatsApp link clearly marked
- Alt text for all product images
- Semantic HTML structure for screen readers