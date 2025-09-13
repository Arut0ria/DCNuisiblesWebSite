import Carrousel from './components/Carrousel'
import Header from './components/Header'
import LogoCanvas from './components/LogoCanvas'
import Section from './components/Section'

function App() {
  return (
    <>
      <Header />
      <Section id="mission">
        {/* Mission */}
        <div className='
            grow basis-1/2
            text-section
          '>
          <h2 className="
            text-white
          ">
            Notre Mission
          </h2>
          <p className="
            text-justify lg:max-w-4xl
          ">
            DCNuisibles protège votre maison et votre entreprise des nuisibles.
            Interventions rapides, efficaces et respectueuses des normes sanitaires.
          </p>
        </div>

        <div className="min-w-1/2 h-96">
          <LogoCanvas />
        </div>
      </Section>

      {/* Services */}
      <Section id="services">
        {/* Carrousel */}
        <div className="
          w-96 xl:w-xl
          md:mr-16
          grow-0 shrink-0

          mask-horizontal
        ">
          <Carrousel />
        </div>
        <div className="
          text-section
          min-w-52
        ">
          <h2>Services</h2>
          <p className="
            text-justify lg:max-w-4xl
          ">
            Chez <strong>DC Nuisibles</strong>, nous intervenons rapidement pour éliminer et prévenir les nuisibles :
            dératisation, désinsectisation (cafards, punaises, guêpes, frelons, fourmis, etc.),
            désinfection après infestation et solutions préventives durables.
            Intervention <strong>7j/7</strong>, efficace et discrète.
          </p>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <h2>Contact</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </Section>
    </>
  )
}

export default App
