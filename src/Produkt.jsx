import './Produkt.css';

function Produkt(props){

    return(
        <div className='produkt'>
            <p><img src={props.prod.grafika}
                alt={props.prod.nazwa} /></p>
            <p>{props.prod.nazwa} {props.prod.cena.toFixed(2)} zł/szt</p>
            <button className='przycisk' 
                onClick={props.fp}> + </button>
            <button className='przycisk'
                onClick={props.fm}> - </button>
            <p> </p>
        </div>
    );
}

export default Produkt;