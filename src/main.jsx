import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import {CLERK_KEY} from "./config.js"

// Import your Publishable Key
const PUBLISHABLE_KEY = CLERK_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}




createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
            <App />
        </ClerkProvider>
    </StrictMode>,
)
