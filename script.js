function init() {
    fetchPokemon().then(() => pokemonCard());
    //evolutionChain();
    evolutionChain().then(() => evolutionChainCard());
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
                    </div>
                </div>
            </div>`;
    }
}

function evolutionChainCard() {
    let contentContainer = document.getElementById("evolutionChain");
    for (let evolution of evolutionChains) {
        contentContainer.innerHTML += /*html*/ `
            <div class="card d-flex mb-3" style="width: 18rem;"> 
                <div class="text-end text-xl-end fs-2">#${evolution.id}</div>
                <img src="${evolution.image}" class="card-img-top" alt="${evolution.image}">
                <div class="card-body">
                    <div class="">
                      <h2 class="card-title">${evolution.name}</h2>
                      <p class="card-tex">${evolution.types.join(", ")}</p>
                    </div>
                </div>
            </div>`;
    }
}