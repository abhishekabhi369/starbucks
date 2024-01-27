

import Barista from './Barista';
import Cards from './Cards';
import CardsSecond from './CardsSecond';
import Curations from './Curations';
import Footer from './Footer';
import Heading from './Heading';
import Latest from './Latest';
import LearnMore from './LearnMore';

import './Style.css'



function App() {
  return (
    <div >
        <Heading />
        <CardsSecond/> 
        <Barista/>
        
        <Curations/>
   
    <Latest/>
  
    <LearnMore/>
    <Footer/>
  
    </div>
  );
}

export default App;
