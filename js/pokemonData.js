//let fetchPokemons = [];
let evolutionChains = [];
let allPokemon = [];
let countdown = 25;
let id = 1;
let offset = 0;

async function fetchPokemon() {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=25&offset=${offset}`);
        let responseAsJson = await response.json();
        console.log("response json: ", responseAsJson);
        for (let pokeIndex = 0;pokeIndex < responseAsJson.results.length;pokeIndex++) {
            let pokemon = responseAsJson["results"][pokeIndex];
            console.log(pokemon, " pokemon url: ", pokemon["url"]);
            let fetchedPokemon = await fetch(`${pokemon["url"]}`);
            let singlePokemon = await fetchedPokemon.json();
            allPokemon.push({
                id: singlePokemon.id,
                name: singlePokemon.name,
                image: singlePokemon.sprites.front_default,
                types: singlePokemon.types.map((type) => type.type.name),
            });
        }
        offset = offset + 25;
        console.log("all pokemon: ", allPokemon);
    } catch (error) {
        console.error(error.message);
    }
    pokemonCard();
}

// function pushPokemon() {
//     const json = allPokemon;
//     allPokemon.push({
//         id: singlePokemon.id,
//         name: singlePokemon.name,
//         image: singlePokemon.sprites.front_default,
//         types: singlePokemon.types.map((type) => type.type.name),
//     });
// }

async function evolutionChain() {
    try {
        for (let evolutionIndex = 1; evolutionIndex <= 5; evolutionIndex++) {
            let url = `https://pokeapi.co/api/v2/evolution-chain/${evolutionIndex}`;
            let response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const json = await response.json();
            evolutionChains.push({
                id: json.chain.id,
            });
            console.log("evolutionChain: ", json);
        }
    } catch (error) {
        console.error(error.message);
    }
}
