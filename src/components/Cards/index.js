import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

const Cards = ({preview, name, brand, price, id, isAccessory }) => {
    return ( 
        <div> 
            <Link to={`/details/${id}`}>  
            <div className="card m-2" id={id} style={{width: 18 +"rem"}}>
                <img src={preview} className="card-img-top" alt={name}/>
                 <div className="card-body">
                    <h5 className="card-title product-card-title">{name}</h5>
                    <p className="card-text product-card-brand">{brand}</p>
                    <p className="card-text prouct-card-cost">{price}</p>
                </div>
            </div>
            </Link> 
        </div> 
    );
}
 
export default Cards;