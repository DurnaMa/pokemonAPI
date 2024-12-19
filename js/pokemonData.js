const baseUrl = `https://pokeapi.co/api/v2`;
let evolutionChains = [];
let allPokemon = [];
let countdown = 25;
let currentNames = [];
let startCount = 1;
let offset = 0;
const limit = 25;


async function fetchPokemonDetails(pokemon) {
    let fetchedPokemon = await fetch(`${pokemon.url}`);
    let singlePokemon = await fetchedPokemon.json();
    return {
        id: singlePokemon.id,
        name: singlePokemon.name,
        image: singlePokemon.sprites.front_default,
        types: singlePokemon.types.map((type) => type.type.name),
        weight: singlePokemon.weight,
        species: singlePokemon.species.name,
        stats: singlePokemon.stats,
        bg: singlePokemon.types[0].type.name,
        ability: singlePokemon.abilities[0].ability.name,
        height: singlePokemon.height,
    };
}

async function fetchPokemon() {
    try {
        let response = await fetch(
            `https://pokeapi.co/api/v2/pokemon?${limit}&offset=${offset}`
        );
        let responseAsJson = await response.json();
        let pokemonDetails = await Promise.all(
            responseAsJson.results.map(fetchPokemonDetails)
        );
        allPokemon.push(...pokemonDetails);
    } catch (error) {
        console.error(error.message);
    }
    getPokemonCard(allPokemon);
}

async function lodePokemon() {
    offset = offset + 25;
    await fetchPokemon();
    submitPoll();
}

async function submitPoll(){
    let button = document.getElementById("nextPokemon")
    button.disabled = true;
    //button.classList.add('disabled-btn')
    setTimeout(async function(){button.disabled = false;},5000);
    //button.classList.remove('disabled-btn')
}

function renderNames() {
        for (let i = 0; i < currentNames.length; i++) {
        document.getElementById(
            "search-pokemon"
        ).innerHTML += `${currentNames[i]}`;
    }
}

function filterPokemonName(filter) {
    currentNames = allPokemon.filter((singlePokemon) =>
        singlePokemon.name.includes(filter)
    );

}

async function filterPokemon() {
    let input = document.getElementById("search-pokemon").value.toLowerCase().trim();
    let contentContainer = document.getElementById("search-pokemon"); // Ensure proper reference
    if (input.length < 2) {
        return;
    }
    if (input.length > 2) {
        currentNames = allPokemon.filter((singlePokemon) => singlePokemon.name.includes(input));
        if (currentNames.length === 0) {
            showSnackbar("No Pokémon found");
            return;
        }
        getPokemonCard(currentNames);
    } else {
        getPokemonCard(allPokemon);
    }
}

function showSnackbar(message) {
    const snackbar = document.getElementById("snackbar");
    if (!snackbar) {
        console.error("Snackbar element not found");
        return;
    }
    snackbar.textContent = message;
    snackbar.className = "show";
    snackbar.style.display = "block";
    snackbar.style.position = "fixed";
    snackbar.style.top = "50%";
    snackbar.style.left = "50%";
    snackbar.style.transform = "translate(-50%, -50%)";
    snackbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    snackbar.style.color = "white";
    snackbar.style.padding = "10px 20px";
    snackbar.style.borderRadius = "5px";
    snackbar.style.textAlign = "center";
    setTimeout(() => {
        snackbar.className = snackbar.className.replace("show", "");
        snackbar.style.display = "none";
    }, 3000);
}