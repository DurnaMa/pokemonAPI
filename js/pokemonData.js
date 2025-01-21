/**
 * Fetches detailed information about a specific Pokémon.
 *
 * @param {Object} pokemon - The Pokémon object containing the URL to fetch details from.
 * @returns {Promise<Object>} A promise that resolves to an object containing detailed information about the Pokémon.
 */
async function fetchPokemonDetails(pokemon) {}

/**
 * Fetches a list of Pokémon from the API and retrieves their details.
 *
 * @returns {Promise<void>} A promise that resolves when the Pokémon data has been fetched and processed.
 */
async function fetchPokemon() {}

/**
 * Loads the next set of Pokémon by increasing the offset and fetching more Pokémon.
 *
 * @returns {Promise<void>} A promise that resolves when the next set of Pokémon has been loaded.
 */
async function lodePokemon() {}

/**
 * Disables the "Next Pokémon" button for 5 seconds to prevent multiple submissions.
 *
 * @returns {Promise<void>} A promise that resolves when the button is re-enabled.
 */
async function submitPoll() {}

/**
 * Renders the names of the current Pokémon in the search results.
 */
function renderNames() {}

/**
 * Filters the list of Pokémon by name based on the provided filter string.
 *
 * @param {string} filter - The string to filter Pokémon names by.
 */
function filterPokemonName(filter) {}

/**
 * Filters the list of Pokémon based on the input value from the search field.
 *
 * @returns {Promise<void>} A promise that resolves when the Pokémon have been filtered and displayed.
 */
async function filterPokemon() {}

/**
 * Displays a snackbar message with the provided text.
 *
 * @param {string} message - The message to display in the snackbar.
 */
function showSnackbar(message) {}
const baseUrl = `https://pokeapi.co/api/v2/`;
let evolutionChains = [];
let allPokemon = [];
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
    let response = await fetch(`${baseUrl}pokemon?${limit}&offset=${offset}`);
    let responseAsJson = await response.json();
    let pokemonDetails = await Promise.all(responseAsJson.results.map(fetchPokemonDetails));
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

async function submitPoll() {
  let button = document.getElementById('nextPokemon');
  button.disabled = true;
  setTimeout(async function () {
    button.disabled = false;
  }, 5000);
}

function renderNames() {
  for (let i = 0; i < currentNames.length; i++) {
    document.getElementById('search-pokemon').innerHTML += `${currentNames[i]}`;
  }
}

function filterPokemonName(filter) {
  currentNames = allPokemon.filter((singlePokemon) => singlePokemon.name.includes(filter));
}

async function filterPokemon() {
  let input = document.getElementById('search-pokemon').value.toLowerCase().trim();
  //let contentContainer = document.getElementById("search-pokemon"); // Ensure proper reference
  if (input.length < 0) {
    return;
  }
  if (input.length > 0) {
    currentNames = allPokemon.filter((singlePokemon) => singlePokemon.name.includes(input));
    if (currentNames.length === 0) {
      showSnackbar('No Pokémon found');
      return;
    }
    getPokemonCard(currentNames);
  } else {
    getPokemonCard(allPokemon);
  }
}

function showSnackbar(message) {
  const snackbar = document.getElementById('snackbar');
  if (!snackbar) {
    console.error('Snackbar element not found');
    return;
  }
  snackbar.textContent = message;
  snackbar.className = 'show';
  snackbar.style.display = 'block';
  snackbar.style.position = 'fixed';
  snackbar.style.top = '50%';
  snackbar.style.left = '50%';
  snackbar.style.transform = 'translate(-50%, -50%)';
  snackbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  snackbar.style.color = 'white';
  snackbar.style.padding = '10px 20px';
  snackbar.style.borderRadius = '5px';
  snackbar.style.textAlign = 'center';
  setTimeout(() => {
    snackbar.className = snackbar.className.replace('show', '');
    snackbar.style.display = 'none';
  }, 3000);
}
