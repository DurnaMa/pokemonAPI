let fetchPokemons = [];

function init() {
    fetchPokemon().then(() => pokemonCard());
}

async function fetchPokemon() {
    try {
        for (let pokemonIndex = 1; pokemonIndex <= 15; pokemonIndex++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const json = await response.json();
            fetchPokemons.push({
                name: json.name,
                image: json.sprites.front_default,
                types: json.types.map((type) => type.type.name),
            });
        }
        console.log(fetchPokemons);
    } catch (error) {
        console.error(error.message);
    }
}

function pokemonCard() {
    let contentContainer = document.getElementById("pokedex");
    for (let pokemon of fetchPokemons) {
        contentContainer.innerHTML += `
            <div class="pokemon-card">
                <div class=image-contener>
                    <img class="pokemon-image" src="${pokemon.image}" alt="${pokemon.name}">
                <div/>
                <div class="pokemon-info">
                  <h4 class="pokemon-card__name"><b>${pokemon.name}</b></h4> 
                  <p class="pokemon-card__details">${pokemon.types.join(", ")}</p> 
                </div>
            </div>`;
    }
}
