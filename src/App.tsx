import Header from './components/Header'
import Recaptcha from './components/Recaptcha'
import ContactSection from './components/sections/ContactSection'
import MissionSection from './components/sections/MissionSection'
import ServicesSection from './components/sections/ServicesSection'
import { ThemeProvider } from './components/ThemeProvider'
import { Separator } from './components/ui/separator'
import { Toaster } from './components/ui/sonner'
import Footer from './Footer'

function App() {
  return (<>
    <Recaptcha />
    <ThemeProvider>
      <div className="
        p-4 px-8 xl:px-52
        mb-4
      ">
        <Header />
        <MissionSection />
        <Separator className="my-8 md:mb-8 bg-secondary-foreground/80" />
        <ServicesSection />
        <Separator className="my-8 md:mb-8 bg-secondary-foreground/80" />
        <ContactSection />
        <Toaster />
      </div>
      <Footer />
    </ ThemeProvider>
  </>)
}

export default App
