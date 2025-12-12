Ige Joseph Porfolio (React & CSS)

This is a professional, responsive, and modern personal portfolio website built using React.js and custom CSS. It is designed with a clean, dark-themed aesthetic to effectively showcase my skills, projects, and contact information.

 ✨ Features

  * Modular Architecture: Built entirely with reusable React components for maintainability and scalability.
  * Skill Display: Dynamically renders skill categories (FrontEnd, BackEnd, Deployment) using data mapping.
  * Project Showcase: Features a dedicated section to highlight key projects with links to both the live demo and the source code.
  * Clear Contact Info: Dedicated contact section for quick access to email, phone, and social links.
  * Modern Styling: Utilizes custom CSS and CSS variables for typography (as established in previous steps) to achieve a visually appealing user interface.

 🛠️ Technologies Used

  * Frontend Framework: React
  * Styling: CSS
  * Iconography: Font Awesome (used for skill icons, location, social links, and project buttons).
  * Data Management: Local JavaScript object arrays for skills and project data.

 📁 File Structure & Code Explanation

The project is structured around key functional components located in the `src/Components` directory, and data/styles managed separately.

 Main Application Files

| File | Component Name | Description & Key Code Usage |
| :--- | :--- | :--- |
| `App.jsx` | `App` | **Main entry point** of the application. It imports and renders the four main sections of the portfolio in a sequential layout within a top-level `main-container` div. |
| `Data.jsx` | `Data`, `ProjectData` | This file serves as the **content database** for the portfolio. <br> - `Data` array: Holds skill objects, each containing an `icon` class, `name`, `example` (list of technologies), and a brief `info` description. <br> - `ProjectData` array: Holds project objects, including `img_URL`, `name`, `info`, and an array of `link` URLs for the GitHub code and live demo. |

 Components (`src/Components/`)

| File | Component Name | Description & Key Code Usage |
| :--- | :--- | :--- |
| `Header.jsx` | `Header` | Renders the primary introduction section visible at the top of the page. <br> - Displays the developer's name (`h2`), title (`h4`), location, and a profile image. <br> - Contains the main bio/pitch inside a styled `div` for separation and emphasis (`h3` for "Quick Info About Me"). |
| `Skills and Project.jsx`| `Skills` | Renders both the Skills and Projects sections as a single unit. <br> - `entry` function: Maps over the imported `Data` array and creates a `Card` component for each skill object. <br> - `projectEntry` function: Maps over the imported `ProjectData` array and creates a `Project` component for each project object. |
| `Card.jsx` | `Card` | A generic, reusable component for displaying a single skill set. It receives skill details as `props` (`icon`, `name`, `example`, `info`) and formats them into a styled skill card. |
| `Project.jsx` | `Project` | A generic, reusable component for displaying a single project. <br> - Receives project details, including the image URL, project name (`h3`), info (`h4`), and links. <br> - Call-to-Action: Renders two buttons (`btn1`, `btn2`) with dynamic links (`codeLink`, `demoLink`) and uses Font Awesome icons for GitHub and Demo indicators.|
| `Contact.jsx` | `Contact` | Handles all contact information display. <br> - Contact Info: Renders individual blocks for Email, Phone, and Location, each using an icon (`i`) and displaying the label and value. <br> - Social Links: Uses a `links` container to display LinkedIn, GitHub, and Instagram icons and labels, each with an active `a` tag. |
| `Footer.jsx` | `Footer` | Renders the bottom section of the portfolio. <br> - Includes the portfolio title, a brief tagline, connection links, and copyright information. <br> - Dynamically calculates the current year (`new Date().getFullYear()`) for the copyright notice.|

Styling Files (`src/Components/`)

| File | Description & Key Code Usage |
| :--- | :--- |
| `Header.css` | Contains all the specific CSS rules for the `Header` component. It handles styling for the profile image (`border-radius: 50%`), typography (e.g., `h2` is `text-transform: uppercase`), and the appearance of the "Quick Info About Me" block (`background-color: #636e72`). |
| `Contact.css` | Contains styles for the `Contact` component. <br> - Styles the individual contact blocks (Email, Phone, Location) with specific colors (e.g., icons are `#ffa502`) and a distinct outline. <br> - Includes media queries to ensure the social links display correctly on smaller screens (`max-width: 748px`).|
| `App.css` | (Not provided, but imported) This would typically contain global styles, reset rules, and the overall dark background theme seen in the screenshot. |
| `Skills.css` | (Not provided, but imported) This file contains styles for the `Skills` container, the `Card` component, and the `Project` component. |

🚀 Getting Started

1.  Clone the repository:
    ```bash
    git clone [Your Repository URL Here]
    cd [Your Repository Folder]
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the project locally:
    ```bash
    npm run dev  # (If using Vite)
    # or
    npm start   # (If using standard create-react-app)
 ```
4.  The application should now be running at `http://localhost:5173`.
