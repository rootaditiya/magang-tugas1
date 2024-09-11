import Header from './components/Header.js'
import Hero from './components/Hero.js'
import Button from './components/Button.js'
import ChatIcon from './assets/chat.svg'

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem]">
        <Header/>
        <Hero/>

        <div className="fixed bottom-5 right-5">
          <Button title="Chat" img={ChatIcon}/>
        </div>

      </div>

    </>
  );
}

export default App;
 