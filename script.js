let fetchPokemons = [];

function init() {
    fetchPokemon().then(() => pokemonCard());
}

async function fetchPokemon() {
    try {
        for (let pokemonIndex = 1; pokemonIndex <= 1; pokemonIndex++) {
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
    } catch (error) {
        console.error(error.message);
    }
}

function pokemonCard() {
    let contentContainer = document.getElementById("pokedex");
    for (let pokemon of fetchPokemons) /*html*/ {
        contentContainer.innerHTML += `
            <div class="">
                <img src="${pokemon.image}" class="" alt="${pokemon.image}">
                    <div class="">
                      <h5 class="">${pokemon.name}</h5>
                      <p class="">${pokemon.types.join(", ")}</p>
                      <div>abilities: </div>
                    </div>
            </div>`;
    }
}

// async function fetchmed() {
//     try {
//         for (let pokemonIndex = 1; pokemonIndex <= 2; pokemonIndex++) {
//             const url = ``;
//             const response = await fetch(url);
//             if (!response.ok) {
//                 throw new Error(`Response status: ${response.status}`);
//             }
//             const json = await response.json();
//             console.log("json: ", json);
//             fetchPokemons.push({
//                 name: json.name,
//             });
//         }
//         consol.log("json: ", json)
//     } catch (error) {
//         console.error(error.message);
//     }
// }
