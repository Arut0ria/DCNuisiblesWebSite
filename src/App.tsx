import { lazy, Suspense } from 'react'
import Header from './components/Header'
import MissionSection from './components/sections/MissionSection'
import { ThemeProvider } from './components/ThemeProvider'
import { Separator } from './components/ui/separator'
import { Toaster } from './components/ui/sonner'
import Loading from './components/Spinner'

function App() {
  const ServicesSection = lazy(() => import('./components/sections/ServicesSection'));

  const ContactSection = lazy(() => import('./components/sections/ContactSection'));
  const Footer = lazy(() => import('./components/Footer'));
  const Recaptcha = lazy(() => import('./components/Recaptcha'));

  return (<>
    <Suspense>
      <Recaptcha />
    </Suspense>
    <ThemeProvider>
      <div className="
        p-4 px-8 xl:px-52
        mb-4
      ">
        <Header />
        <MissionSection />

        <Separator className="my-8 md:mb-8 bg-secondary-foreground/80" />

        <Suspense fallback={<Loading />}>
          <ServicesSection />
        </Suspense>

        <Separator className="my-8 md:mb-8 bg-secondary-foreground/80" />

        <Suspense fallback={<Loading />}>
          <ContactSection />
        </Suspense>

        <Toaster />
      </div>
      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>
    </ ThemeProvider>
  </>)
}

export default App
