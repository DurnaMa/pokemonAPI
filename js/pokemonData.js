//const { sign } = require("chart.js/helpers");

const baseUrl = `https://pokeapi.co/api/v2/pokemon`;
let evolutionChains = [];
let allPokemon = [];
let countdown = 25;
let startCount = 1;
let offset = 0;
const limit = 25;

async function fetchPokemon() {
    try {
        let response = await fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=25&offset=${offset}`
        );
        let responseAsJson = await response.json();
        //console.log("response json: ", responseAsJson);
        for (
            let pokeIndex = 0;
            pokeIndex < responseAsJson.results.length;
            pokeIndex++
        ) {
            let pokemon = responseAsJson["results"][pokeIndex];
            //console.log(pokemon, " pokemon url: ", pokemon["url"]);
            let fetchedPokemon = await fetch(`${pokemon["url"]}`);
            let singlePokemon = await fetchedPokemon.json();
            //allPokemon.push(singlePokemon);
            console.log(singlePokemon)
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
        offset = offset + 25;
        //console.log("all pokemon: ", allPokemon);
    } catch (error) {
        console.error(error.message);
    }
    pokemonCard();
}

async function lodePokemon() {
    const url = `${baseUrl}&limit=${limit}`;
    await fetchPokemon(url);
}

// function loaderScreen() {
//     const loaderContainer = document.querySelector('.loader-container');
//     window.addEventListener('load', () => {
//         if (loaderContainer) {
//             loaderContainer.style.display = 'none';
//         } else {
//             console.error('Element with class .loader-container not found.');
//         }
//     });
// }
