import zipfile
import os
import shutil

# Set up project directory structure
project_root = "/mnt/data/dwellcore-site"
public_dir = os.path.join(project_root, "public")
src_dir = os.path.join(project_root, "src")

# Create directories
os.makedirs(public_dir, exist_ok=True)
os.makedirs(src_dir, exist_ok=True)

# Move the logo image to public directory
logo_src_path = "/mnt/data/A_website_homepage_for_Dwellcore,_an_architecture_.png"
logo_dest_path = os.path.join(public_dir, "logo.png")
shutil.copy(logo_src_path, logo_dest_path)

# Create basic package.json and index files
with open(os.path.join(project_root, "package.json"), "w") as f:
    f.write("""{
  "name": "dwellcore-site",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "vite": "^4.3.9",
    "tailwindcss": "^3.3.2",
    "postcss": "^8.4.24",
    "autoprefixer": "^10.4.14"
  }
}
""")

with open(os.path.join(project_root, "vite.config.js"), "w") as f:
    f.write("""import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()]
});
""")

with open(os.path.join(project_root, "postcss.config.js"), "w") as f:
    f.write("""module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
""")

with open(os.path.join(project_root, "tailwind.config.js"), "w") as f:
    f.write("""module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
""")

with open(os.path.join(project_root, "index.html"), "w") as f:
    f.write("""<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dwellcore</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
""")

with open(os.path.join(project_root, "src", "main.jsx"), "w") as f:
    f.write("""import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
""")

with open(os.path.join(project_root, "src", "index.css"), "w") as f:
    f.write("""@tailwind base;
@tailwind components;
@tailwind utilities;
""")

# Copy the full updated React component as App.jsx
app_jsx_code_path = "/mnt/data/App.jsx"  # assuming it was exported earlier
app_jsx_target = os.path.join(src_dir, "App.jsx")
shutil.copy(app_jsx_code_path, app_jsx_target)

# Zip the project
zip_path = "/mnt/data/dwellcore-site.zip"
shutil.make_archive(zip_path.replace(".zip", ""), 'zip', project_root)

zip_path
