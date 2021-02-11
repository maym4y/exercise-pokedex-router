import React from 'react';
import pokemons from './data';

class PokemonDetails extends React.Component {
  render() {
    const { id } = this.props.match.params;
    const { name, type, averageWeight, image, summary, foundAt } = pokemons.find((each) => each.id === parseInt(id));
    const maps = foundAt.map((each) => <div>
    <p>{each.location}</p>
    <img src={each.map} alt={each.location} />
  </div>)
    return (
      <div>
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
          <p>{summary}</p>
        </div>
        <img src={image} alt={`${name} sprite`} />
      </div>
      <div class='maps'>
          {maps}
      </div>
      </div>
    );
  }
}

export default PokemonDetails;