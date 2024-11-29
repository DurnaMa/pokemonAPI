function init() {
    fetchPokemon();
}

async function fetchPokemon() {
    let fetchPokemons = [];
    //let currentNams;
    try {
        for (let pokemonIndex = 1; pokemonIndex <= 15; pokemonIndex++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const json = await response.json();
            fetchPokemons.push({
                name: json.name,
                image: json.sprites.front_default,
                types: json.types.map(type => type.type.name),
            });
        }
         console.log(fetchPokemons);
    } catch (error) {
        console.error(error.message);
    }
}
