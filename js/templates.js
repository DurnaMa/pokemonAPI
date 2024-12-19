function getPokemonCard(pokemons) {
    let contentContainer = document.getElementById("pokedex");
    if (contentContainer) {
        contentContainer.innerHTML = "";
        for (
            let pokemonIndex = 0;
            pokemonIndex < pokemons.length;
            pokemonIndex++
        ) {
            let singlePokemon = pokemons[pokemonIndex];
            contentContainer.innerHTML += /*html*/ `
                <div onclick="getBigPokemonCard(${pokemonIndex})" class="h-max mahir-card bg-${singlePokemon.bg}">
                        <img class="object-cover" src="${
                            singlePokemon.image
                        }" alt="${singlePokemon.name}">
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h2 class="text-black ">#${singlePokemon.id}</h2>
                            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">${
                                singlePokemon.name
                            }</h2>
                            <p class="mb-3 font-normal text-gray-700">${singlePokemon.types.join(
                                ", "
                            )}</p>
                        </div>
                </div>`;
        }
    }
}

function getBigPokemonCard(pokemonIndex) {
    let singlePokemon = allPokemon[pokemonIndex];
    document.getElementById("pokedexBigCard").classList.remove("d-none");
    document.getElementById("pokedexBigCard").innerHTML = /*html*/ `
        <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div class="relative flex items-center justify-center">
                <button onclick="nextCardL(${pokemonIndex})" class="block absolute top-1/2 left-[-50px] transform -translate-y-1/2 bg-gray-300 rounded-full w-12 h-12 flex items-center justify-center">
                    <img src="./assets/icons/back.png" alt="back" class="w-6 h-6">
                </button>

                <!-- Pokemon Card -->
                <div class="flex flex-col w-full max-w-xs h-auto p-4 bg-white rounded-lg shadow-lg relative">
                    <button onclick="closePokemonCard()" class="absolute top-2 right-2 w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                        &times;
                    </button>
                    <div class="flex justify-center items-center flex-col border-b border-gray-300 p-2">
                        <img class="rounded-t-lg object-cover w-24 h-24" src="${singlePokemon.image}" alt="${singlePokemon.name}"/>
                        <h2 class="text-base mt-2 font-medium text-gray-700">${singlePokemon.types.join(", ")}</h2>
                    </div>
                    <div class="p-3">
                        <h2 class="text-sm font-medium text-gray-700">Species: ${singlePokemon.species}</h2>
                        <h2 class="text-sm font-medium text-gray-700 mt-1">Height: ${singlePokemon.height}</h2>
                        <h2 class="text-sm font-medium text-gray-700 mt-1">Weight: ${singlePokemon.weight} kg</h2>
                        <h2 class="text-sm font-medium text-gray-700 mt-1">Ability: ${singlePokemon.ability}</h2>
                    </div>
                </div>
                <button onclick="nextCardR(${pokemonIndex})" class="block absolute top-1/2 right-[-50px] transform -translate-y-1/2 bg-gray-300 rounded-full w-12 h-12 flex items-center justify-center">
                    <img src="./assets/icons/next.png" alt="next" class="w-6 h-6">
                </button>
            </div>
        </div>`;

    document.body.classList.add("overflow-hidden");
}