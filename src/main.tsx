import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/style/index.css'
import App from './App.tsx'
import gsap from 'gsap'

// If user move away from window we stop gsap
document.addEventListener("visibilitychange", () => {
  if (document.hidden)
    gsap.globalTimeline.pause();
  else
    gsap.globalTimeline.resume();
});

const BackgroundBalls = lazy(() => import('./components/BackgroundBalls.tsx'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='page-background'>
      <Suspense>
        <BackgroundBalls />
      </Suspense>
    </div>

    {/* Content */}
    <main className="
      relative
    ">
      <App />
    </main>
  </StrictMode>,
)
