# Practice Performance Dashboard - Practice Summary Card

A premium, interactive Practice Summary Card component built with React, Next.js, and Tailwind CSS. Designed to provide dental practice owners with immediate, intuitive insights into their performance metrics.

## 🚀 Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```

3. **Open Page:**
   View the results at [http://localhost:3000](http://localhost:3000)

---

## 🛠 Component & Styling Decisions

### **1. Architecture & Structure**
- I chose a **modular component structure**:
  - `PracticeSummaryCard`: Acts as the parent container responsible for layout, data mapping, and status-based branding.
  - `TrendLine`: A specialized sub-component for rendering the SVG visualization.
- **Why?** This separation of concerns makes the code more maintainable. The `TrendLine` can be reused in other areas of the dashboard (like a sidebar or a detailed report page) without duplicating complex SVG path calculation logic.

### **2. Styling Approach**
- **Tailwind CSS**: Chosen for its utility-first nature, which allowed me to build extremely custom, high-fidelity designs (like Gaussian blurs, custom shadows, and 3D perspective) very quickly.
- **Outcome**: This eliminated the need for heavy UI libraries or scattered CSS modules, keeping the styling logic bundled directly with the component's state.

### **3. Consistency & Responsiveness**
- **Visual Tokens**: All state-based colors (Emerald for Success, Rose for Risk) are managed through a `statusConfig` object, ensuring that shadows, text, and chart colors are always perfectly synchronized.
- **Responsive Layout**: Used a mobile-first approach with Tailwind's grid system (`grid-cols-1 lg:grid-cols-2 xl:grid-cols-3`). Cards transition from a single-column stack on mobile to a multi-column grid on desktop while maintaining internal spacing integrity.

---

## 📈 Scaling & Real-World Use

### **Integrating into a Larger Dashboard**
- **Design System**: I would move the `statusConfig` and recurring color tokens into the `tailwind.config.ts` file to ensure the same "High Performer" emerald is used across the entire platform.
- **Data Orchestration**: Integrate with a state management library (like TanStack Query) to handle real-time data updates and skeleton loading states for the cards.

### **With One Extra Day...**
- **Accessibility**: Add better ARIA support and keyboard focus states to make the cards navigable for screen readers.
- **Animations**: Use `Framer Motion` to add smooth entry animations and layout transitions when the status changes.
- **Testing**: Implement Vitest/React Testing Library to verify that the status logic (e.g., Conversion Rate > 20% => High Performer) works correctly across all edge cases.
- **Localization**: Abstract hardcoded strings into an i18n system to support practices in multiple regions.

---

## ⏱ Time Management

Total duration: **~2 Hours**

1. **Setup & Data Modeling (20 mins)**: Initialized Next.js layout, configured fonts (Outfit), and defined the PracticeSummary TypeScript interfaces.
2. **Component Structure & Core Metrics (35 mins)**: Built the basic card layout and mapped the mock data to the card fields.
3. **SVG Trendline & Interaction (40 mins)**: Engineered the custom SVG path-smoothing logic and implemented the interactive mouse-tracking tooltip.
4. **Final Polish & Styling (25 mins)**: Added the 3D perspective effects, ambient light glows, and refined the color palette for a "premium" feel.
