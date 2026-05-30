# Rickey Chang's Portfolio

A sleek, responsive, single-page developer portfolio featuring a curated dark-themed aesthetic. Built from scratch using the modern React ecosystem and CSS to showcase clean design architecture and foundational front-end development principles.

## Live Demo

**[https://rickeychang.me/]**

---

## Tech Stack & Architecture

*   **Framework:** React 18
*   **Build Tool & Dev Server:** Vite (for near-instantaneous Hot Module Replacement)
*   **Styling:** Native CSS3 (utilizing modern layout engines, custom properties, CSS Grid, and Flexbox)
*   **Icons & Typography:** System fonts for optimized performance and semantic clarity

---

## Project Structure

The project follows a component-driven, modular layout to keep the codebase maintainable and organized:

```text
src/
├── components/
│   ├── About.jsx       # Background, objective, and education stats
│   ├── About.css
│   ├── Contact.jsx     # Clip-board tracking email action & professional links
│   ├── Contact.css
│   ├── Hero.jsx        # High-impact landing interface with fluid typography
│   ├── Hero.css
│   ├── Projects.jsx    # Responsive CSS Grid displaying key software applications
│   ├── Projects.css
│   ├── Skills.jsx      # Flexbox-wrapped interactive skill badge inventory
│   └── Skills.css
├── App.jsx             # Main vertical presentation layout engine
├── App.css             # Unified global variables, type sizing, and resets
└── main.jsx            # Application entry point