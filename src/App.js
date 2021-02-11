import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';
import About from './about';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Pokedéx</h1>
    <BrowserRouter>
        <Link className='home' to="/">Home</Link>
        <Link className="home" to="/about">About</Link>
        <Link className="home" to="/favorites">Pokemons Favoritos</Link>
        <Switch>
        <Route path="/pokemon/:id" component={ PokemonDetails } />
        <Route path="/about" component={About} />
        <Route exact path="/" render={() => <Pokedex pokemons={pokemons} />} />
        <Route path="" component={() => <h2>Sorry, there page you're looking for is not here!</h2>} />
        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;