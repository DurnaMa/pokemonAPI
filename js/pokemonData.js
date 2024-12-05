let fetchPokemons = [];
let evolutionChains = [];

async function fetchPokemon() {
    try {
        for (let pokemonIndex = 1; pokemonIndex <= 5; pokemonIndex++) {
            let url = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`;
            let response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const json = await response.json();
            fetchPokemons.push({
                id: json.id,
                name: json.name,
                image: json.sprites.front_default,
                types: json.types.map((type) => type.type.name),
            });
            console.log("Pokemon: ", json);
        }
    } catch (error) {
        console.error(error.message);
    }
}

async function evolutionChain() {
    try {
        for (let evolutionIndex = 1; evolutionIndex <=10; evolutionIndex++) {
            let url = `https://pokeapi.co/api/v2/evolution-chain/${evolutionIndex}`;
            let response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const json = await response.json();
            evolutionChains.push({
                id: json.chain.id,
            })
            console.log("evolutionChain: ", json)
        }
    } catch (error) {
        console.error(error.message);
    }
}