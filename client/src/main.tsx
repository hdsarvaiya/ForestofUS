import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Load Google Fonts
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;500;600&display=swap";
document.head.appendChild(link);

// Set the title
const title = document.createElement("title");
title.textContent = "Forrest of Us - A Community of Change Makers";
document.head.appendChild(title);

// Add Font Awesome for icons
const fontAwesome = document.createElement("link");
fontAwesome.rel = "stylesheet";
fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
document.head.appendChild(fontAwesome);

createRoot(document.getElementById("root")!).render(<App />);
