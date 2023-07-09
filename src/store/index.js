import { createStore } from "vuex";
import Pokemon from "@/assets/pokemon.json"

export const store = createStore({
    state() {
        return {
            myPokemons: Pokemon,
            nextId: 11,
            filter: {
                pokemon: '',
                pokeball: '',
                shiny: '',
                nature: '',
                ability: '',
                move: '',
                status: ''
            }
        }
    },
    getters: {
        filterPokemon: state => {
            return state.myPokemons.filter(p=>
                p.pokemon.toLowerCase().match(state.filter.pokemon.toLowerCase()) && 
                p.pokeball.toLowerCase().match(state.filter.pokeball.toLowerCase()) && 
                (state.filter.shiny == '' ? true : p.shiny == state.filter.shiny) && 
                p.nature.toLowerCase().match(state.filter.nature.toLowerCase()) && 
                p.ability.toLowerCase().match(state.filter.ability.toLowerCase()) && 
                p.moves.some(m => m.toLowerCase().match(state.filter.move.toLowerCase())) &&
                (state.filter.status == '' ? true : p.status == state.filter.status)
            );
        }
    },
    mutations: {
        addNewPokemon(state, pokemon) {
            state.myPokemons.push(pokemon);
            state.nextId++;
        },
        togglePokemonStatus(state, index) {
            const i = state.myPokemons.findIndex(pokemon => pokemon.id == index);
            const pokemon = state.myPokemons[i];
            pokemon.status = (pokemon.status === 'obtained') ? 'unobtained' : 'obtained';
        },
        deletePokemon(state, index) {
            const i = state.myPokemons.findIndex(pokemon => pokemon.id == index);
            state.myPokemons.splice(i, 1);
        },
        setFilter(state, input) {
            state.filter = input;
        }
    }
})