# 🗂 Chainsaw Man Wiki – Project Guide

## 🎯 Goal

Build a Chainsaw Man Wiki with a **homepage** and three main sections: **Devils**, **Horsemen**, and **Hunters**.
The goal is **not** just to finish the site, but to **practice**:

- React Router (pages, navigation, routing)
- Component reuse
- CSS styling (image layouts, overlays, flexbox, grid)
- Proper folder structure & maintainable data management

---

## 📂 Recommended Folder Structure

```
src/
│
├── assets/                # Images, icons, fonts
│   ├── images/
│   │   ├── homepage/
│   │   ├── horsemen/
│   │   ├── devils/
│   │   ├── hunters/
│
├── constants/             # Data for each section
│   ├── homepageData.js
│   ├── horsemenData.js
│   ├── devilsData.js
│   ├── huntersData.js
│   └── navLinks.js
│
├── components/            # Reusable UI pieces
│   ├── Navbar/
│   ├── HeroSection/
│   ├── InfoCard/
│   ├── ImageGrid/
│   ├── Footer/
│
├── pages/                 # Page-level components
│   ├── Home/
│   ├── Horsemen/
│   ├── Devils/
│   ├── Hunters/
│
├── styles/                # Global CSS
│   ├── variables.css
│   ├── globals.css
│
├── App.jsx
├── main.jsx
└── vite.config.js
```

---

## 📋 Step-by-Step To-Do List

### **1️⃣ Project Setup**

1. Create Vite + React project
2. Install dependencies:

   ```bash
   npm install react-router-dom
   ```

3. Create the folder structure above.

---

### **2️⃣ Add Basic Routing**

1. In `constants/navLinks.js`, define navigation links (`Home`, `Horsemen`, `Devils`, `Hunters`).
2. Create empty page files in `/pages` with placeholder content.
3. In `App.jsx`, set up `BrowserRouter` and `Routes` for each page.
4. Create `Navbar` component:

   - Use `Link` from `react-router-dom`
   - Map `navLinks.js` to `<Link>` elements

---

### **3️⃣ Build the Home Page**

1. **Top Hero Section**

   - Create a `HeroSection` component
   - Import an image from `/assets/images/homepage`
   - Add overlay text (title + intro info)

2. **Info Section for Top Officer**

   - Create an `InfoCard` component that displays:

     - Name
     - Description
     - Image

   - Import officer data from `homepageData.js`

---

### **4️⃣ Build the Horsemen Page**

1. **Overview Section**

   - At top: a short intro about Horsemen
   - Styled text + image

2. **Individual Horsemen**

   - Import data from `horsemenData.js`
   - Use `InfoCard` for each horseman’s name & description
   - Use `ImageGrid` for multiple images of each horseman

3. Repeat for all four horsemen.

---

### **5️⃣ Build Devils & Hunters Pages**

- Follow the same pattern as Horsemen:

  - Overview section at top
  - Reusable components for individual entries
  - Grid for images

---

### **6️⃣ Styling Focus**

- **Navbar** → Sticky at top, horizontal flexbox
- **Hero Section** → Background cover image + overlay text
- **InfoCard** → Flexbox for image + text side-by-side
- **ImageGrid** → CSS Grid (3 or 4 columns)
- **Responsive Design** → Media queries for mobile view
- **CSS Organization**:

  - Component-specific CSS in component folder
  - Global styles in `/styles`

---

### **7️⃣ Data Management**

- Store all names, descriptions, and image imports in `/constants`
- Example for a horseman:

  ```javascript
  import famine1 from "../assets/images/horsemen/famine/f1.jpg";
  import famine2 from "../assets/images/horsemen/famine/f2.jpg";

  export const horsemenData = [
    {
      name: "Famine",
      description: "The Famine Devil, one of the Four Horsemen.",
      images: [famine1, famine2],
    },
  ];
  ```

---

### **8️⃣ Finishing Touches**

- Add a `Footer` component
- Fine-tune margins, paddings, and typography
- Test all navigation links
- Check mobile responsiveness

---

## 📌 Learning Notes

- **React Router**: Pages are built as React components inside `/pages`, and routing is done in `App.jsx`.
- **Reusability**: If you find yourself writing similar HTML multiple times, create a reusable component.
- **CSS Best Practice**: Keep component CSS local unless styles are truly global.
- **Data Centralization**: All images & descriptions live in `/constants` so JSX stays clean.

---

This guide ensures:
✅ You start from structure → navigation → content → styling
✅ You practice both React and CSS
✅ The project stays organized as it grows
