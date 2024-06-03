const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const maxRecords = 151;
const limit = 10;
let offset = 0;

// 1, 2, 3, 4, 5    0 - 5
// 6, 7, 8, 9, 10   5 - 5
// 11               10 - 5 (remove o botao)

function loadPokemonItens(offset, limit){


    pokeApi.getPokemons(offset, limit).then((pokemon = []) => {
        const newList= pokemon.map((pokemon)=> 
            `
                <li class="pokemon ${pokemon.type}">
                        <span class="number">#${pokemon.number}</span>
                        <span class="name">${pokemon.name}</span>

                        <div class="detail">
                            <ol class="types">
                                ${pokemon.types.map((type)=> `<li class="type ${type}">${type}</li>`).join('')}
                            </ol>
                        
                        <img src="${pokemon.photo}" 
                            alt="${pokemon.name}">
                    </div>
                </li>
                    `
                
        
        ).join('')//join junta e converte os elementos da string em uma lista 
        pokemonList.innerHTML += newList
    })
}

    loadPokemonItens(offset, limit);

    loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordsNextPage = offset + limit

    if (qtdRecordsNextPage >= maxRecords){
        const newLimit =  maxRecords - offset  
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
});



//LINK PARA O CÓDIGO FEITO NA DIO
//https://github.com/digitalinnovationone/js-developer-pokedex/blob/main/assets/js/main.js





//         const listItens = []    

//         for (let i = 0; i < pokemons.length; i++) {
//             const pokemon = pokemons[i];
           
//             listItens.push(convertPokemonToLi(pokemon))
           
//         }
//         console.log(listItens)





//debugger //usado para testagem de debugação no browser sem ter que ficar procurando


//  try{
//  }catch(error){
//  }finally{
//  }

//Código explicado da aula:

// fetch(url)//promise, mecanismo para controlar a interpretação da resposta e dar um destino adequado

// .then(function (response){
//         console.log(response) //quando der certo chame essa função para manipular a resposta
//  })//processamento assincrono

//  .catch(function (error){
//     console.log(error)//para manipular o fracasso
//  })

// //Toda vez que essa requisição terminasse independente do sucesso ou do fracasso eu poderia ter:

//  .finally(function (){
//     console.log('requisição concluída!')
//  })

//  const x = 10+2
//  console.log(x)
