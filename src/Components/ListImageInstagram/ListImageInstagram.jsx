import React from 'react';
import './ListImageInstagram.scss';
function ListImageInstagram({ id, link }) {
  return (
    <div key={id} className="listImage">
      <img src={link} alt={`instagram-${id}`} />
    </div>
  );
}

export default ListImageInstagram;
