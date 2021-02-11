import React from 'react';
import './pokemon.css';
import { Link } from 'react-router-dom';

class Pokemon extends React.Component {
  render() {
    const {name, type, averageWeight, image, id} = this.props.pokemon;
    const link = `/pokemon/${id}`;
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={image} alt={`${name} sprite`} />
        <br />
        <Link className="details" to={link}>Mais detalhes</Link>
      </div>
    );
  }
}

export default Pokemon;