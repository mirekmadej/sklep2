import './App.css';
import { useState } from 'react';
import Produkt from './Produkt';
import gruszka from './img/gruszka.png';
import jablko from './img/jablko.png';
import sliwka from './img/sliwka.png';

let produkty = [
  {n1:1, nazwa:"jabłko", grafika:jablko, cena:1.2, sztuk:0},
  {n1:2, nazwa:"gruszka", grafika:gruszka, cena:0.8, sztuk:0},
  {n1:3, nazwa:"śliwka", grafika:sliwka, cena:0.3, sztuk:0},
  
];
function App() {
  let ile = produkty.length;
  let [sztuki, setSztuki] = useState(Array(ile).fill(0));
  function klikPlus(nr)
  {
    let k = sztuki.slice();
    k[nr]++;
    setSztuki(k);
    produkty[nr].sztuk++;
  }
  return (
    <div className="App">
      <h1>sklep3</h1>
      <>
        <Produkt prod={produkty[0]} fp={()=>klikPlus(0)} />
      </>
      <div className='stopka'>
        <h2>zawartość koszyka:</h2>
        <p>{produkty[0].nazwa} szt.: {produkty[0].sztuk}, wartość: {produkty[0].sztuk*produkty[0].cena} </p>
        <p>{produkty[1].nazwa} szt.: {produkty[1].sztuk}, wartość: {produkty[1].sztuk*produkty[1].cena} </p>
        <p>{produkty[2].nazwa} szt.: {produkty[2].sztuk}, wartość: {produkty[2].sztuk*produkty[2].cena} </p>
        <hr />
        <p>RAZEM: </p>
      </div>

    </div>
  );
}

export default App;
