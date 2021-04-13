document.addEventListener('DOMContentLoaded', function(){
  function fetchPokemons(){
    fetch('https://pokeapi.co/api/v2/pokemon/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function(data){return data.json() })
      .then(function(){})
  }
})