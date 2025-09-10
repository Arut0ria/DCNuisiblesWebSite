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
            card-section grow basis-1/2
            flex flex-col gap-1
            items-start
          '>
          <h2 className="
            text-white
          ">
            Notre Mission
          </h2>
          <p className="
            text-justify lg:max-w-4xl
          ">
            DCNuisibles protège votre maison et votre entreprise des nuisibles.<br/>
            Interventions rapides, efficaces et respectueuses des normes sanitaires.
          </p>
        </div>

        <div className="min-w-1/2 h-96">
          <LogoCanvas />
        </div>
      </Section>

      {/* Services */}
      <Section id="services">
        <h2>Services</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
