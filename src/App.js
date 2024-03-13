import './App.css';
import { useState } from 'react';
import Produkt from './Produkt';
import gruszka from './img/gruszka.png';
import jablko from './img/jablko.png';
import sliwka from './img/sliwka.png';

let produkty = [
  {nr:1, nazwa:"jabłko", grafika:jablko, cena:1.2, sztuk:0},
  {nr:2, nazwa:"gruszka", grafika:gruszka, cena:0.8, sztuk:0},
  {nr:3, nazwa:"śliwka", grafika:sliwka, cena:0.3, sztuk:0},
  
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
  function klikMinus(nr)
  {
    let k = sztuki.slice();
    if(k[nr] > 0)
      k[nr]--;
    setSztuki(k);
    produkty[nr].sztuk = k[nr];
  }
  function suma()
  {
    let s=0;
    for(let i=0; i<produkty.length; i++)
      s+=produkty[i].cena*produkty[i].sztuk;
    return s.toFixed(2);
  }

  return (
    <div className="App">
      <h1>sklep3</h1>
      <>

        {produkty.map((e)=> <Produkt prod={e}
                          key={e.nr-1} 
                          fp={()=>klikPlus(e.nr-1)} 
                          fm={()=>klikMinus(e.nr-1)}
                          />)}

      </>
      <div className='stopka'>
        <h2>zawartość koszyka:</h2>
        <p>{produkty[0].nazwa} szt.: {produkty[0].sztuk}, wartość: {(produkty[0].sztuk*produkty[0].cena).toFixed(2)} zł </p>
        <p>{produkty[1].nazwa} szt.: {produkty[1].sztuk}, wartość: {(produkty[1].sztuk*produkty[1].cena).toFixed(2)} zł </p>
        <p>{produkty[2].nazwa} szt.: {produkty[2].sztuk}, wartość: {(produkty[2].sztuk*produkty[2].cena).toFixed(2)} zł </p>
        <hr />

        <p>RAZEM: {suma()} zł</p>
      </div>

    </div>
  );
}

export default App;
