function init() {
    fetchPokemon().then(() => pokemonCard());
    //evolutionChain();
    evolutionChain().then(() => evolutionChainCard());
}

function pokemonCard() {
    let contentContainer = document.getElementById("pokedex");
    for (let pokemon of fetchPokemons) {
        contentContainer.innerHTML += /*html*/ `
        <div class="mb-3 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="${pokemon.image}" alt="${pokemon.image}">
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${pokemon.name}</h2>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${pokemon.types.join(", ")}</p>
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
