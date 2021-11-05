import React from 'react';
import './style.css';

function Card ({flip, content, flipped}){

    let cardContent;
    if(flipped) {
        cardContent = content;
    } else {
        cardContent = ''
    }
    
    return (

         <div onClick={flip} className={`Card ${flipped ? 'face-up': ''}`}>
        {cardContent}
      </div>
      /* <img src={"/components/Board/"+ cardContent + ".jpg"} alt="here is name "/>  */
    )
}

export default Card;