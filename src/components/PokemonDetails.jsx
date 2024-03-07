import PropTypes from 'prop-types';
import { capitalize } from 'lodash';

const PokemonDetails = ({ pokemon}) => {
    const { name, sprites, stats, height, weight, abilities } = pokemon;
    const pokemonClassName = name;
    const capitalizedName = capitalize(name);
    const ability = capitalize(`${abilities[0].ability.name}`);
    const hiddenAbility = capitalize(`${abilities[1].ability.name}`);
    const newWeight = `${weight} pounds`;
    const newHeight = `${height} feet`;
    const newSpeed = `${stats[5].base_stat} m/s`;
    return (
        <div className={`content ${pokemonClassName}`}>
            <div className="pokemon-img-container">
                <img src={sprites.other.dream_world.front_default} alt="pokemon-img" />
            </div>
            <div className="pokemon">
                <h2>{capitalizedName}</h2>
                <div className="pokemon-values">
                    <div className="pokemon-stats">
                        <p>HP: </p>
                        <p>ATTACK: </p>
                        <p>DEFENSE: </p>
                        <p>SPECIAL ATTACK: </p>
                        <p>SPECIAL DEFENSE: </p>
                        <p>SPEED: </p>
                        <p>HEIGHT: </p>
                        <p>WEIGHT: </p>
                    </div>
                    <div className="pokemon-stats-value">
                        <span>{stats[0].base_stat}</span>
                        <span>{stats[1].base_stat}</span>
                        <span>{stats[2].base_stat}</span>
                        <span>{stats[3].base_stat}</span>
                        <span>{stats[4].base_stat}</span>
                        <span>{newSpeed}</span>
                        <span>{newHeight}</span>                          
                        <span>{newWeight}</span>
                    </div>
                </div>
                <div className="pokemon-abilities">
                    <p>ABILITY: <span>{ability}</span></p>
                    <p>HIDDEN ABILITY: <span>{hiddenAbility}</span></p>
                </div>
            </div>
        </div>
    );
};

PokemonDetails.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        sprites: PropTypes.object.isRequired,
        stats: PropTypes.array.isRequired,
        height: PropTypes.number.isRequired,
        weight: PropTypes.number.isRequired,
        abilities: PropTypes.array.isRequired
    }).isRequired,
};

export default PokemonDetails;
