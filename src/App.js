import Button from './components/Button.js'
import ChatIcon from './assets/chat.svg'
import Header from './components/Header.js'
import Hero from './components/Hero.js'
import Benefits from './components/Benefits.js'
import Collaboration from './components/Collaboration.js'
import Services from './components/Services.js'

const App = () => {


  return (
    <>
      <div className="flex flex-col gap-0 pt-[4.75rem] lg:pt-[5.25rem]">
        <Header/>
        <Hero/>
        <Services/>
        <Benefits />
        <Collaboration/>

        <div className="fixed bottom-5 right-5">
          <Button title="Chat" img={ChatIcon} classes="border-2 border-white"/>
        </div>

      </div>

    </>
  );
}

export default App;
 