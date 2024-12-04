let fetchPokemons = [];

function init() {
    fetchPokemon().then(() => pokemonCard());
}

async function fetchPokemon() {
    try {
        for (let pokemonIndex = 1; pokemonIndex <= 2; pokemonIndex++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const json = await response.json();
            console.log("json: ", json);
            fetchPokemons.push({
                name: json.name,
                image: json.sprites.front_default,
                types: json.types.map((type) => type.type.name),
            });
        }
        consol.log("json: ", json) 
    } catch (error) {
        console.error(error.message);
    }
}

function pokemonCard() {
    let contentContainer = document.getElementById("pokedex");
    for (let pokemon of fetchPokemons) {
        contentContainer.innerHTML += `
            <div class="card mb-3 border-4 border-dark" style="width: 18rem;">
                <img src="${pokemon.image}" class="card-img-top" alt="src="${pokemon.image}"">
                    <div class="card-body">
                      <h5 class="card-title">${pokemon.name}</h5>
                      <p class="card-text">${pokemon.types.join(", ")}</p>
                      <div>abilities: </div>
                    </div>
            </div>`;
    }
}
