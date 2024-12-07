function init() {
    fetchPokemon().then(() => pokemonCard());
    evolutionChain();
    //evolutionChain().then(() => evolutionChainCard());
}

function pokemonCard() {
    let contentContainer = document.getElementById("pokedex");
    for (let pokemonIndex = 0; pokemonIndex < fetchPokemons.length; pokemonIndex++) {
        let pokemon = fetchPokemons[pokemonIndex];
        contentContainer.innerHTML += /*html*/ `
        <div onclick="openPokemonCard(${pokemonIndex})" class="mahir-card">
                <img class="object-cover" src="${pokemon.image}" alt="${pokemon.name}">
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h2 class="text-gray-900">#${pokemon.id}</h2>
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
            <div class="" style="width: 18rem;"> 
                <div class="">#${evolution.id}</div>
                <img src="${evolution.image}" class="" alt="${evolution.image}">
                <div class="">
                    <div class="">
                      <h2 class="">${evolution.name}</h2>
                      <p class="">${evolution.types.join(", ")}</p>
                    </div>
                </div>
            </div>`;
    }
}

function openPokemonCard(pokemonIndex) {
    
        let pokemon = fetchPokemons[pokemonIndex];
        document.getElementById("pokedexBigCard").classList.remove("d-none");
        document.getElementById("pokedexBigCard").innerHTML = /*html*/ `
        <div class="flex items-center justify-center"> 
            <img src="./assets/icons/back.png" alt="back" class=" w-12 h-auto rounded-s-3xl ">     
            <div class="flex-auto  max-w-sm bg-gray-800 border border-cyan-950 rounded-lg">
                <img onclick="closePokemonCard()" class="bg-white border cursor-pointer w-8 h-8 items-end justify-end flex" src="./assets/icons/close.png">
                <div class="flex justify-center items-center border-b-8 border-black ">
                    <img class="rounded-t-lg object-cover" src="${pokemon.image}" alt="${pokemon.name}" />
                </div>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                         <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
            <img src="./assets/icons/next.png" alt="next" class="w-12 h-auto border-solid border-stone-950 ">
        </div>`;
}

function closePokemonCard() {
    document.getElementById("pokedexBigCard").classList.add("d-none");
}