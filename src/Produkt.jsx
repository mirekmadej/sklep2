import './Produkt.css';

function Produkt(props){

    return(
        <div className='produkt'>
            <p><img src={props.prod.grafika}
                alt={props.prod.nazwa} /></p>
            <p>{props.prod.nazwa} {props.prod.cena} zł/szt</p>
            <button className='przycisk' 
                onClick={props.fp}> + </button>
            <button className='przycisk'> - </button>
            <p> </p>
        </div>
    );
}

export default Produkt;