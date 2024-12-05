let fetchPokemons = [];
let evolutionChains = [];

function init() {
    fetchPokemon().then(() => pokemonCard());
    evolutionChain();
    evolutionChain().then(() => evolutionChains());
}

async function fetchPokemon() {
    try {
        for (let pokemonIndex = 1; pokemonIndex <= 10; pokemonIndex++) {
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

function pokemonCard() {
    let contentContainer = document.getElementById("pokedex");
    for (let pokemon of fetchPokemons) {
        contentContainer.innerHTML += /*html*/ `
            <div class="card d-flex mb-3" style="width: 18rem;"> 
                <div class="text-end text-xl-end fs-2">#${pokemon.id}</div>
                <img src="${pokemon.image}" class="card-img-top" alt="${pokemon.image}">
                <div class="card-body">
                    <div class="">
                      <h2 class="card-title">${pokemon.name}</h2>
                      <p class="card-tex">${pokemon.types.join(", ")}</p>
                      <div>abilities: </div>
                    </div>
                </div>
            </div>`;
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

function evolutionChainCard() {
    let contentContainer = document.getElementById("evolutionChain");
    for (let evolution of evolutionChains) {
        contentContainer.innerHTML += /*html*/`
            <div class="card d-flex mb-3" style="width: 18rem;">
                <div class="text-end text-xl-end fs-2">#${evolution.id}</div>
            </div>
        `
    }
}