async function init() {
    await fetchPokemon();
}

function pokemonCard(pokemons) {
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
                <div onclick="bigPokemonCard(${pokemonIndex})" class="h-max mahir-card bg-${singlePokemon.bg}">
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

function bigPokemonCard(pokemonIndex) {
    let singlePokemon = allPokemon[pokemonIndex];
    document.getElementById("pokedexBigCard").classList.remove("d-none");
    document.getElementById("pokedexBigCard").innerHTML = /*html*/ `
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="relative flex items-center justify-center">
            <button onclick="nextCardL(${pokemonIndex})" class="hidden sm:block absolute left-[-50px] top-1/2 transform -translate-y-1/2 sm:left-[-50px] sm:top-1/2 bg-gray-300 rounded-full w-12 h-12 flex items-center justify-center">
                <img src="./assets/icons/back.png" alt="back" class="w-6 h-6">
            </button>
            <button onclick="nextCardL(${pokemonIndex})" class="block sm:hidden absolute top-[-50px] left-1/2 transform -translate-x-1/2 bg-gray-300 rounded-full w-12 h-12 flex items-center justify-center">
                <img src="./assets/icons/back.png" alt="back" class="w-6 h-6">
            </button>
            <div class="flex flex-col w-full max-w-xs min-w-[320px] h-auto p-4 bg-white rounded-lg shadow-lg relative">
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
            <button onclick="nextCardR(${pokemonIndex})" class="hidden sm:block absolute right-[-50px] top-1/2 transform -translate-y-1/2 sm:right-[-50px] sm:top-1/2 bg-gray-300 rounded-full w-12 h-12 flex items-center justify-center">
                <img src="./assets/icons/next.png" alt="next" class="w-6 h-6">
            </button>
            <button onclick="nextCardR(${pokemonIndex})" class="block sm:hidden absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 bg-gray-300 rounded-full w-12 h-12 flex items-center justify-center">
                <img src="./assets/icons/next.png" alt="next" class="w-6 h-6">
            </button>
        </div>
    </div>`;

    document.body.classList.add("overflow-hidden");
}

function closePokemonCard() {
    document.getElementById("pokedexBigCard").classList.add("d-none");
    document.body.classList.remove("overflow-hidden");
}



function nextCardL(pokemonIndex) {
    if (pokemonIndex > 0) {
        pokemonIndex -= 1;
    } else {
        pokemonIndex = allPokemon.length - 1;
    }

    bigPokemonCard(pokemonIndex);
}

function nextCardR(pokemonIndex) {
    if (pokemonIndex < allPokemon.length - 1) {
        pokemonIndex += 1;
    } else {
        pokemonIndex = 0;
    }

    bigPokemonCard(pokemonIndex);
}

function getPokemonBg(type) {
    const colors = {
        fire: "#FDDFDF",
        grass: "#DEFDE0",
        electric: "#FCF7DE",
        water: "#DEF3FD",
        ground: "#f4e7da",
        rock: "#d5d5d4",
        fairy: "#fceaff",
        poison: "#98d7d5",
        bug: "#f8d5a3",
        dragon: "#97b3e6",
        psychic: "#eaeda1",
        flying: "#F5F5F5",
        fighting: "#E6E0D4",
        normal: "#F5F5F5",
    };
    return colors[type] || "bg-default";
}
