import Header from './components/Header'
import Recaptcha from './components/Recaptcha'
import ContactSection from './components/sections/ContactSection'
import MissionSection from './components/sections/MissionSection'
import ServicesSection from './components/sections/ServicesSection'
import { ThemeProvider } from './components/ThemeProvider'
import { Separator } from './components/ui/separator'

function App() {
  return (<>
    <Recaptcha />
    <ThemeProvider>
      <Header />
      <MissionSection />
      <Separator className="my-8 md:mb-8 bg-secondary-foreground/80" />
      <ServicesSection />
      <Separator className="my-8 md:mb-8 bg-secondary-foreground/80" />
      <ContactSection />
    </ ThemeProvider>
  </>)
}

export default App
