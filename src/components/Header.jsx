import PropTypes from 'prop-types';
import '../app.scss'

const Header = ({pokemons, onPokemonChange}) => {
    return (
        <header>
            <p>pokemon list</p>
            <select name="pokemons" id="pokemons" onChange={onPokemonChange}>
                {pokemons.map(pokemon => (
                    <option key={pokemon} value={pokemon}>{pokemon}</option>
                ))}
            </select>
        </header>
    );
};

Header.propTypes = {
    pokemons: PropTypes.arrayOf(PropTypes.string).isRequired,
    onPokemonChange: PropTypes.func.isRequired
};

export default Header;
