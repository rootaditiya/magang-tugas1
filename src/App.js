// import React, {useRef, useEffect} from 'react'
import Button from './components/Button.js'
import ChatIcon from './assets/chat.svg'
import Header from './components/Header.js'
import Hero from './components/Hero.js'
import Benefits from './components/Benefits.js'

const App = () => {

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem]">
        <Header/>
        <Hero/>
        <Benefits/>

        <div className="fixed bottom-5 right-5">
          <Button title="Chat" img={ChatIcon} classes="border-2 border-white"/>
        </div>

      </div>

    </>
  );
}

export default App;
 