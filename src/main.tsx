import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import BackgroundBalls from './components/BackgroundBalls.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='page-background'>
      <BackgroundBalls />
    </div>

      {/* Content */}
      <main className="
        p-4 md:px-16 lg:px-52
        relative
      ">
        <App />
      </main>
  </StrictMode>,
)
