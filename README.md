# BgRemoval - Background Remover

BgRemoval is a React-based web application that removes backgrounds from images using the **Remove.bg API**. It provides a simple and efficient way to process images for personal or professional use. And the UI is inspired by the Greatstack and Remove.bg

## 🚀 Features
- Upload an image and remove its background
- User Management using Clerk
- Download the processed image
- Responsive and user-friendly UI

## 🛠️ Tech Stack
- **Frontend:** React, Tailwind CSS
- **Backend:** None (Uses Remove.bg API for background removal)
- **Deployment:** Vercel 

## 📂 Folder Structure
```
BgRemoval/
│── src/
│   ├── assets/      # Static assets (e.g., images, icons)
│   ├── components/  # Reusable components
│   ├── pages/       # Main pages of the app
│   ├── App.js       # Root component
│   ├── index.js     # Entry point
│── public/          # Static public files
│── .env             # API keys (not to be pushed)
│── package.json     # Dependencies and scripts
│── README.md        # Project documentation
```

## 🔑 Environment Variables
Create a `.env` file in the root directory and add your Remove.bg API key:
```
REACT_APP_REMOVE_BG_API_KEY=your_api_key_here
```
**Note:** Do not expose your API key in public repositories.

## 📌 Installation & Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/AryanKumar231/BgRemoval.git
   cd BgRemoval
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the development server:**
   ```sh
   npm start
   ```
4. Open `http://localhost:3000` in your browser.

## 📤 Deployment
To deploy the app on Vercel:
- **Vercel:** Run `vercel deploy`



## 👨‍💻 Author
**Aryan Kumar**  
[GitHub](https://github.com/AryanKumar231) 


## 📜 License
This project is open-source and available under the **MIT License**.

---
⭐ **Don't forget to give a star if you like this project!** ⭐

