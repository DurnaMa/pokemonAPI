const baseUrl = `https://pokeapi.co/api/v2/pokemon`;
let evolutionChains = [];
let allPokemon = [];
let countdown = 25;
let currentNames = [];
let startCount = 1;
let offset = 0;
const limit = 25;

async function fetchPokemon() {
    try {
        let response = await fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=25&offset=${offset}`
        );
        let responseAsJson = await response.json();
        for (
            let pokeIndex = 0;
            pokeIndex < responseAsJson.results.length;
            pokeIndex++
        ) {
            let pokemon = responseAsJson["results"][pokeIndex];   
            let fetchedPokemon = await fetch(`${pokemon["url"]}`);
            let singlePokemon = await fetchedPokemon.json();
            allPokemon.push({
                id: singlePokemon.id,
                name: singlePokemon.name,
                image: singlePokemon.sprites.front_default,
                types: singlePokemon.types.map((type) => type.type.name),
                weight: singlePokemon.weight,
                species: singlePokemon.species.name,
                stats: singlePokemon.stats,
                bg: singlePokemon.types[0].type.name,
                ability: singlePokemon.abilities[0].ability.name,
                height: singlePokemon.height,
            });
        }
    } catch (error) {
        console.error(error.message);
    }
    pokemonCard(allPokemon);
}

async function lodePokemon() {
    offset = offset + 25;
    await fetchPokemon();
}

function renderNames() {
    for (let i = 0; i < currentNames.length; i++) {
        document.getElementById(
            "search-pokemon"
        ).innerHTML += `${currentNames[i]}`;
    }
}

function filterPokemonName(filter) {
    currentNames = allPokemon.filter((singlePokemon) =>
        singlePokemon.name.includes(filter)
    );
}

async function filterPokemon() {
    let input = document.getElementById("search-pokemon").value.toLowerCase().trim();
    if (input.length < 2) {
        return;
    }
    if(input.length > 2){
        currentNames = allPokemon.filter((singlePokemon) => singlePokemon.name.includes(input));
        pokemonCard(currentNames);
    } else {
        pokemonCard(allPokemon);
    }
}
