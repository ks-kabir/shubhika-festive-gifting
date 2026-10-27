# Task: Build a Premium Festive Gifting Landing Page

## Project objective

Build a polished, modern, premium landing page for an Indian festive gifting brand offering mithai, farsan, dry-fruit hampers, and curated gift boxes.

The visual direction should feel warm, premium, editorial, and contemporary—not like a generic template and not like a direct copy of FNP or any other existing brand.

The audience includes:
- Customers in India buying festive gifts for family, friends, and colleagues.
- NRI customers who want to send premium festive gifts to family and friends in India.
- Businesses looking for corporate and bulk festive gifting.

**Important scope:** Build the landing page only. This is not a complete e-commerce application. Use realistic sample content and local frontend interactions. Do not build backend services, payment processing, authentication, admin dashboards, or separate product/checkout pages.

---

## 1. First inspect the existing project

Before making changes:

1. Inspect the repository and identify its framework, package manager, existing folder structure, styling system, and installed dependencies.
2. Check whether the project uses Next.js App Router, Vite, or another setup.
3. Reuse the existing conventions wherever practical. Do not replace working configuration or restructure the entire repository unnecessarily.
4. If the project is empty, use **Next.js App Router + TypeScript + Tailwind CSS** as the preferred setup.
5. If the repository already uses a different framework, adapt the implementation to it rather than forcing a migration.
6. Install only dependencies that are genuinely required.

---

## 2. Brand direction and visual identity

Create an original premium Indian festive gifting identity.

### Visual style
- Premium Indian festive luxury with a clean editorial layout.
- Warm ivory, cream, and off-white as the primary backgrounds.
- Deep burgundy or maroon for strong brand moments.
- Muted gold and saffron/orange as restrained accents.
- Use generous whitespace, refined borders, soft shadows, and carefully controlled gradients.
- Use an elegant serif font for major headings and a clean sans-serif font for body text and UI.
- Product photography should feel rich, appetising, detailed, and professionally art-directed.
- Use subtle Indian festive references through texture, motifs, packaging, and colour—not excessive decorations.
- Avoid clutter, excessive gradients, generic AI-looking visuals, and overuse of glassmorphism.

### Design quality
- Strong visual hierarchy and consistent spacing.
- Clear section transitions and varied section layouts.
- Responsive layouts for desktop, tablet, and mobile.
- The page should feel like a real premium gifting brand, not a student demo.
- Use high-quality image assets. Prefer suitable local assets in `public/images/`; if none exist, use reliable remote image sources configured correctly for the project. Do not leave broken image placeholders.
- Keep image treatment consistent across product cards and banners.

---

## 3. Required landing-page sections

Build the sections in this order. You may refine the layout, but do not omit any of the sections.

### A. Announcement bar
- A slim announcement strip at the very top.
- Example message: “Make every celebration unforgettable · Festive gifting now open”.
- Include a short delivery or gifting message if it fits the design.
- Use a contrasting brand colour without making the bar visually loud.

### B. Navigation bar
- Original text-based or image-based brand logo.
- Navigation links that scroll to the relevant sections: Shop, New Arrivals, Bestsellers, Our Story, Corporate Gifting.
- Search, account, and bag icons may be included as visual controls.
- Sticky navigation on scroll, with a subtle background or shadow transition.
- Responsive mobile navigation with a working menu toggle.
- Do not create separate pages for these links; use section anchors where appropriate.

### C. Hero section — cinematic and 3D-inspired
This is the main visual focus of the page.

- Create a striking hero with a premium festive gift hamper or curated gift box as the focal point.
- Use a layered composition with depth: foreground product, background texture, decorative elements, soft lighting, and shadows.
- Add tasteful 3D-inspired movement, parallax, floating decorative details, or scroll-based transitions.
- Use real product imagery or a carefully constructed visual composition. Do not rely on an empty gradient background.
- Keep motion smooth, restrained, and performant.
- Add a strong headline, short supporting copy, and a clear primary CTA such as “Explore the Collection”.
- Add a secondary CTA such as “Corporate Gifting”.
- Example headline direction: “A little more joy in every box.”
- The hero should look premium and memorable while keeping text readable.

### D. Shop by category
Create visually attractive category cards for:
- Mithai
- Dry Fruit Hampers
- Farsan & Savouries
- Premium Gift Boxes
- Festive Hampers

Each card should include a relevant image, category name, and a simple browse cue. Cards should have subtle hover movement or image zoom.

### E. New Arrivals
- Add a clear section heading and short supporting line.
- Display a responsive grid or horizontal product collection.
- Include product image, product name, short descriptor, price, and a small badge where appropriate (for example, “New”).
- Add a “View Collection” or similar CTA, but keep it on the landing page.
- Product cards should feel premium and consistent.

### F. Product-card spotlight hover effect — use the supplied `GlowCard` component
A component named `spotlight-card.tsx` has been provided. It exports `GlowCard` and implements a pointer-following spotlight/glow effect with sizing/custom sizing props.

**Integrate the supplied component; do not create a separate competing spotlight implementation.**

Requirements:
1. Inspect the supplied component and its props before using it.
2. Place or adapt it in the project's UI component directory, following the existing project convention.
3. Use `GlowCard` to wrap or enhance product cards in the New Arrivals and/or Bestsellers sections.
4. Customise the glow to suit the brand: subtle muted gold, warm amber, or burgundy tones. Avoid neon colours.
5. Keep product information and buttons readable above the effect.
6. Ensure the spotlight follows pointer movement smoothly and does not cause layout shifts.
7. Ensure the effect does not block clicks on product links or buttons.
8. On touch devices, provide a sensible static or reduced-effect fallback.
9. Respect reduced-motion preferences and clean up any event listeners or animation frames as appropriate.
10. If the supplied component requires CSS variables, utility classes, or global styles, integrate them once in the correct shared stylesheet.
11. Preserve the component's intended API where possible. Only make changes needed for compatibility, accessibility, or the requested visual styling.

### G. Bestsellers
- Show a separate collection of popular festive gifting products.
- Use a slightly different visual treatment from New Arrivals so the page does not become repetitive.
- Include product images, names, prices, and concise descriptions.
- Use a clear “Explore Bestsellers” CTA.
- Reuse the same product-card system and `GlowCard` treatment consistently.

### H. Brand story
- Communicate the brand's focus on thoughtful gifting, quality ingredients, beautiful presentation, and meaningful celebrations.
- Use editorial imagery and a split layout or another visually engaging composition.
- Keep the copy concise and believable. Do not invent certifications, awards, heritage claims, or business facts.
- Include a CTA such as “Discover Our Story”.

### I. Why choose us / brand benefits
Create a compact benefits section with clear icons or simple visual markers. Possible points:
- Carefully curated festive collections.
- Premium presentation and gift-ready packaging.
- Thoughtful options for different budgets and occasions.
- Reliable delivery experience.
- Easy gifting for loved ones across India.

Keep claims generic unless the project provides evidence for more specific promises. Do not invent guaranteed delivery times or certifications.

### J. Corporate gifting
- Create a distinct, premium section aimed at businesses and teams.
- Use a wide banner or split-image layout.
- Mention bulk gifting, customisation, and thoughtful gifts for employees, clients, and partners.
- Add a CTA such as “Enquire About Corporate Gifting”.
- The CTA can open a simple frontend enquiry modal or scroll to a contact area. Do not build a backend.

### K. NRI / send gifts to India
- Make it clear that customers living abroad can use the brand to send festive gifts to family and friends in India.
- Use warm, emotional but concise copy.
- Highlight the convenience of sending a thoughtful gift from overseas.
- Add a CTA such as “Send Love to India”.
- Do not claim international shipping if the intended service is only delivery within India. Phrase the section around ordering from abroad for delivery to recipients in India.

### L. Testimonials
- Add a clean testimonial section with a carousel or editorial quote cards.
- Use clearly illustrative sample testimonials only. Do not present fabricated reviews as verified customer reviews.
- Keep the layout calm and readable.

### M. Newsletter / updates
- Add a newsletter signup section with a concise heading and supporting line.
- Include an email input and a working frontend validation state.
- Since there is no backend, show a clear demo success state and do not imply that the email was actually subscribed to a mailing list.

### N. Footer
Include:
- Brand logo and a short brand statement.
- Section navigation links.
- Shop/category links as section anchors.
- Corporate gifting contact CTA.
- Social icons or text links if appropriate.
- Copyright line.
- A restrained, premium layout consistent with the rest of the page.

---

## 4. Motion, transitions, and interactions

Use motion to improve the experience, not distract from the products.

Required:
- Smooth scrolling for in-page navigation.
- Subtle entrance/reveal animations as sections enter the viewport.
- Refined hover transitions on buttons, navigation links, category cards, and product cards.
- Product image zoom or gentle lift on hover.
- The supplied `GlowCard` pointer-following spotlight effect on product cards.
- Sticky navbar transition on scroll.
- A working mobile navigation toggle.
- Newsletter input validation and demo success feedback.
- If a bag/cart icon is shown, it may update a local demo count when a product's “Add” control is clicked. Do not implement a real cart or checkout flow.

Animation guidance:
- Prefer CSS transitions and lightweight animation utilities.
- If Framer Motion or another animation library is already installed, it may be used where it adds value.
- Avoid installing large libraries just for small effects.
- Avoid excessive scroll-jacking, forced scroll animations, or continuous motion that distracts from shopping.
- Respect `prefers-reduced-motion`.
- Ensure animations do not cause layout shifts or impair accessibility.

---

## 5. Suggested complete project structure

Use the following as the preferred structure **if creating a new Next.js App Router project**. If the repository already has a different valid structure, preserve it and adapt these responsibilities to the existing conventions. Do not create empty folders or files just to match this tree.

```text
festive-gifting/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   │   └── hero-gift-hamper.webp
│   │   ├── products/
│   │   │   ├── product-01.webp
│   │   │   ├── product-02.webp
│   │   │   └── ...
│   │   ├── categories/
│   │   │   ├── mithai.webp
│   │   │   ├── dry-fruits.webp
│   │   │   ├── farsan.webp
│   │   │   └── gift-boxes.webp
│   │   ├── banners/
│   │   │   ├── brand-story.webp
│   │   │   ├── corporate-gifting.webp
│   │   │   └── nri-gifting.webp
│   │   └── testimonials/
│   ├── models/
│   │   └── (optional 3D assets, only if actually used)
│   └── icons/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── favicon.ico
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   └── spotlight-card.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── announcement-bar.tsx
│   │   │   ├── navbar.tsx
│   │   │   ├── mobile-menu.tsx
│   │   │   └── footer.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── hero-section.tsx
│   │   │   ├── category-section.tsx
│   │   │   ├── new-arrivals-section.tsx
│   │   │   ├── bestsellers-section.tsx
│   │   │   ├── brand-story-section.tsx
│   │   │   ├── benefits-section.tsx
│   │   │   ├── corporate-gifting-section.tsx
│   │   │   ├── nri-gifting-section.tsx
│   │   │   ├── testimonials-section.tsx
│   │   │   └── newsletter-section.tsx
│   │   │
│   │   └── shared/
│   │       ├── product-card.tsx
│   │       ├── section-heading.tsx
│   │       └── cart-drawer.tsx
│   │
│   ├── data/
│   │   ├── products.ts
│   │   └── categories.ts
│   │
│   ├── hooks/
│   │   └── use-cart.ts
│   │
│   ├── lib/
│   │   └── utils.ts
│   │
│   └── types/
│       └── index.ts
│
├── components.json
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── README.md
```

### Structure guidance
- `public/images/`: static image assets grouped by their purpose.
- `public/models/`: optional 3D files only if a real 3D asset is used.
- `src/app/`: App Router entry points, root layout, page, and global styles.
- `src/components/ui/`: reusable low-level UI components, including the supplied `spotlight-card.tsx`.
- `src/components/layout/`: announcement bar, navigation, mobile menu, and footer.
- `src/components/sections/`: individual landing-page sections.
- `src/components/shared/`: reusable components shared across sections, such as product cards and section headings.
- `src/data/`: typed local sample products and categories.
- `src/hooks/`: small reusable client-side hooks, only when needed.
- `src/lib/`: utilities and class-name helpers.
- `src/types/`: shared TypeScript types.

Do not add a `cart-drawer.tsx` or `use-cart.ts` unless a local demo cart interaction genuinely needs it. Do not create separate route folders for product details, checkout, account, or admin pages.

If the existing project does not use a `src/` directory, keep its current convention and place the equivalent folders at the project root.

---

## 6. Technical requirements

- Use the project's existing framework and conventions.
- For a new project, prefer Next.js App Router, TypeScript, and Tailwind CSS.
- Build reusable, well-organised components.
- Keep product and category sample data in typed data files rather than duplicating it in JSX.
- Use semantic HTML and accessible button/link labels.
- Use correct heading hierarchy.
- Ensure keyboard navigation and visible focus states.
- Add useful alt text to meaningful images; use empty alt text for purely decorative images.
- Avoid unnecessary client components. Use client-side code only for interactions and animation that require it.
- Prevent hydration errors.
- Keep dependencies minimal.
- Ensure all imports and asset paths resolve correctly.
- Use `next/image` if the project is Next.js and configure remote image domains correctly when remote images are used.
- Avoid embedding huge base64 images in source files.
- Add metadata and a suitable page title/description in the root layout.
- Do not leave console errors, broken links, or placeholder buttons that appear functional but do nothing.

---

## 7. Responsive and accessibility requirements

Test and refine at these approximate viewport widths:
- Mobile: 375px and 430px.
- Tablet: 768px.
- Laptop: 1366px.
- Large desktop: 1440px and above.

Check:
- No horizontal overflow.
- Hero content remains readable and visually balanced on mobile.
- Navigation collapses cleanly.
- Product grids adapt to screen width.
- Buttons and form controls are usable with touch.
- Text has sufficient contrast.
- Focus indicators are visible.
- Reduced-motion preferences are respected.
- The `GlowCard` effect does not interfere with touch, keyboard, or click interactions.

---

## 8. Final quality checklist

Before finishing, verify:

- [ ] The landing page contains every required section in the requested order.
- [ ] The design feels premium, original, and consistent.
- [ ] The hero is visually striking and has tasteful depth/3D-inspired details.
- [ ] Announcement bar and navbar are complete and responsive.
- [ ] New Arrivals and Bestsellers display polished product cards.
- [ ] The supplied `GlowCard` component is genuinely integrated and styled to match the brand.
- [ ] Product hover effects are smooth and do not block interactions.
- [ ] All buttons and section links have meaningful frontend behaviour.
- [ ] Mobile menu works.
- [ ] Newsletter validation and demo feedback work.
- [ ] Images load correctly and have appropriate sizing/cropping.
- [ ] The page has no horizontal overflow at tested sizes.
- [ ] Reduced-motion and keyboard accessibility have been considered.
- [ ] There are no TypeScript, lint, build, or browser-console errors.
- [ ] No backend, authentication, payment, checkout, or separate e-commerce routes have been added.
- [ ] README includes setup and run instructions.

## Final instruction

Deliver a complete, polished, responsive **single-page festive gifting landing page**. Prioritise visual quality, premium product presentation, thoughtful layout, and smooth interactions. Use the supplied `GlowCard` component for the product spotlight effect. Follow the project structure above when it fits the repository, but always respect the existing project's framework and conventions.
