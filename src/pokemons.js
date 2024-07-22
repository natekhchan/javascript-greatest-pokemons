// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(pokemons) {
    return pokemons.filter(pokemon => 
      pokemon.type.includes("Fire")
    );
  }

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(pokemons) {

    if (pokemons.length === 0) {
        return 0;
      }

    return pokemons.reduce((shortest, current) => {
      const shortestHeight = parseFloat(shortest.height);
      const currentHeight = parseFloat(current.height);
      return currentHeight < shortestHeight ? current : shortest;
    }).name;
  }


// Iteration 3: candy_count average - average of `candy_count` for all the pokemons

function candyAverage(pokemons) {
    if (pokemons.length === 0) {
      return 0;
    }
  
    const totalCandyCount = pokemons.reduce((total, pokemon) => {
      return total + (pokemon.candy_count || 0);
    }, 0);
  
    const averageCandy = (totalCandyCount / pokemons.length).toFixed(2);
    return parseFloat(averageCandy);
  }

// Iteration 4: images for the first 10 `Ground`  Pokemons

function getGroundPokeImg(pokemons) {

    if (pokemons.length === 0) {
        return 0;
      }

    return pokemons
      .filter(pokemon => pokemon.type.includes("Ground"))
      .slice(0, 10)
      .map(pokemon => pokemon.img);
  }

// Iteration 5: Find all pokemon names heavier than Pikachu

function getHeavyPokemons(pokemons) {
    if (pokemons.length === 0) {
      return 0;
    }
  
    // Find Pikachu and get its weight
    const pikachu = pokemons.find(pokemon => pokemon.name === "Pikachu");
    if (!pikachu) {
      return 0;
    }
    const pikachuWeight = parseFloat(pikachu.weight);
  
    // Filter Pokémon heavier than Pikachu
    const heavyPokemons = pokemons.filter(pokemon => parseFloat(pokemon.weight) > pikachuWeight);
  
    // Return the names of the heavy Pokémon
    return heavyPokemons.map(pokemon => pokemon.name);
  }

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

function orderAlphabetically(pokemons) {
    if (pokemons.length === 0) {
      return [];
    }
  
    return pokemons
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 20)
      .map(pokemon => pokemon.name);
  }

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
function strongPokemons(pokemons) {
  if (pokemons.length === 0) {
    return [];
  }

  return pokemons
    .filter(pokemon => Array.isArray(pokemon.weaknesses) && pokemon.weaknesses.length === 1)
    .slice(0, 15)
    .map(pokemon => pokemon.name);
}