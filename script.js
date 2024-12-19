async function init() {
    await fetchPokemon();
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

    getBigPokemonCard(pokemonIndex);
}

function nextCardR(pokemonIndex) {
    if (pokemonIndex < allPokemon.length - 1) {
        pokemonIndex += 1;
    } else {
        pokemonIndex = 0;
    }

    getBigPokemonCard(pokemonIndex);
}