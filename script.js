let poekemonDatabases = [];

function init() {
    fetchpokemonDatabases();
}

async function fetchpokemonDatabases() {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
        poekemonDatabases = json.items;
        dataImgeUrl = json.items.map((item) => item.image_url);
        console.log("data from server: ", poekemonDatabases);
    } catch (error) {
        console.error(error.message);
    }
}
