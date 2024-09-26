import React, {useState, useEffect} from 'react'
import Button from './components/Button.js'
import ChatIcon from './assets/chat.svg'
import Header from './components/Header.js'
import Hero from './components/Hero.js'
import Consult from './components/Consult.js'
import Benefits from './components/Benefits.js'
import Feedback from './components/Feedback.js'
import Collaboration from './components/Collaboration.js'
import Services from './components/Services.js'
import Privillage from './components/Privillage.js'
import Price from './components/Price.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'

const App = () => {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true); 
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
      <div className="relative gap-0 pt-[3.50rem] md:pt-[4.75rem] lg:pt-[5.25rem] w-full">
        <Header/>
        <Hero/>
        <Consult/>
        <Services/>
        <Privillage/>
        <Price/>
        <Benefits />
        <Feedback />
        <Collaboration/>
        <Contact/>
        <Footer/>

        <div className={`${showButton ? 'block' : 'hidden'} fixed bottom-24 right-10 rounded-full  opacity-50 hover:opacity-100`}>
          <Button title="^" classes="animate-bounce" padding="px-4 py-3"
          onClick={() => {
            const element = document.getElementById('hero');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' }); 
              }
        }}
        />
        </div>

        <div className="fixed bottom-5 right-5">
          <Button title="Chat" img={ChatIcon} classes="border-[1px] sm:border-2 border-white" padding="px-3 py-2"
          onClick={() => {
          const phoneNumber = "6281378798069"; 
          const message = "Hello!";
          
          window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
        }}
      />
        </div>

      </div>
  );
}

export default App;
 