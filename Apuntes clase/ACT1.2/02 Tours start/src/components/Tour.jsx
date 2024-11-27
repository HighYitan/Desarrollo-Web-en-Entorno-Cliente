import {useState} from 'react';

export default function Tour({ id, image, info, name, price}){
  // TODO: Set state 'readMore'

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}€</h4>
        </div>
        <p>
          {/* TODO: code "read more" funcionality */}
          <button className="on" >
            read more
          </button>
        </p>
        {/* TODO: code click function (maybe with the name removeTour), in order to delete Tour */}
        <button className="delete-btn">
          not interested
        </button>
      </footer>
    </article>
  );
}