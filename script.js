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
                <div onclick="bigPokemonCard(${pokemonIndex})" class="mahir-card bg-${
                singlePokemon.bg
            }">
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
            <div class="flex items-center justify-center w-7/12 h-96 border-solid border-black border-3">
                <button onclick=nextCardL(${pokemonIndex})> 
                    <img src="./assets/icons/back.png" alt="back" class=" w-12 h-auto rounded-s-3xl ">
                </button>     
                <div class="flex-auto  max-w-sm bg-${singlePokemon.bg}">
                    <img onclick="closePokemonCard()" class="bg-white border cursor-pointer w-8 h-8 items-end justify-end flex" src="./assets/icons/close.png">
                    <div class="flex justify-center items-center flex-col border-b-8 border-black ">
                        <img class="rounded-t-lg object-cover" src="${
                            singlePokemon.image
                        }" alt="${singlePokemon.name}"/>
                        <h2 class="text-lg mb-3 font-normal text-gray-700">${singlePokemon.types.join(
                            ", "
                        )}</h2>
                    </div>
                    <div class=" flex justify-normal flex-col">
                        <h2 class="text-2xl font-normal text-gray-700 px-3">Species: ${
                            singlePokemon.species
                        }</h2>
                        <h2 class="text-2xl inline-flex items-center px-3 font-medium text-center text-gray-700">Height: ${
                            singlePokemon.height
                        }</h2>
                        <!-- <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">${
                            singlePokemon.stats[0].stat.name
                        }</h2> -->
                        <h2 class="text-2xl inline-flex items-center px-3 font-medium text-center text-gray-700">
                        weight: ${singlePokemon.weight} kg</h2>
                        <h2 class="text-2xl inline-flex items-center px-3 font-medium text-center text-gray-700">Ability: ${
                            singlePokemon.ability
                        }</h2>
                    </div>
                </div>
                <button onclick="nextCardR(${pokemonIndex})">
                    <img src="./assets/icons/next.png" alt="next" class="w-12 h-auto border-solid border-stone-950 ">
                </button>
            </div>`;

    console.log(pokemonIndex);
}

function closePokemonCard() {
    document.getElementById("pokedexBigCard").classList.add("d-none");
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
