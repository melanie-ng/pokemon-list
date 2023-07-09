<template>
    <div class="card">
        <div class="card-body">
            <img :src="pokemon.pokemonSprite" alt="Sprite of a Pokémon" width="96" />
            <img :src="pokemon.pokeballSprite" alt="Sprite of a Poké Ball" />
            <p class="card-text text-start">
                <b>Pokémon:</b> {{ pokemon.pokemon }}<br />
                <b>Poké Ball:</b> {{ pokemon.pokeball }}<br />
                <b>Shiny:</b> <text v-if="pokemon.shiny==1">yes</text><text v-else>no</text><br />
                <b>Nature:</b> {{ pokemon.nature }}<br />
                <b>Ability:</b> {{ pokemon.ability }}<br />
                <b>Moves:</b> 
                <text v-for="(move, index) in pokemon.moves" :key="move">
                    {{ move }}<span v-if="index!=3">, </span>
                </text><br />
                <b>Status:</b> <text v-highlight="pokemon.status">{{ pokemon.status }}</text>
            </p>
            <template v-if="canManage">
                <template v-if="!pokemon.confirmDelete">
                    <button type="button" class="btn btn-warning" v-on:click="togglePokemonStatus(pokemon.id)"><i class="fa fa-exchange" aria-hidden="true"></i> Toggle Status</button>&nbsp;
                    <button type="button" class="btn btn-danger" v-on:click="toggleDelete(pokemon)"><i class="fa fa-trash" aria-hidden="true"></i> Delete</button>
                </template>
                <template v-else>
                    <button type="button" class="btn btn-danger" v-on:click="deletePokemon(pokemon.id)"><i class="fa fa-check" aria-hidden="true"></i> Confirm</button>&nbsp;
                    <button type="button" class="btn btn-success" v-on:click="toggleDelete(pokemon)"><i class="fa fa-xmark" aria-hidden="true"></i> Cancel</button>
                </template>
            </template>
        </div>
    </div>
</template>

<script>
    import HighlightDirective from '../directives/HighlightDirective.js';

    export default {
        name: 'AppPokemonCard',
		directives: {
			highlight: HighlightDirective
		},
        props: {
            pokemon: Object,
            canManage: Boolean,
            togglePokemonStatus: Function,
            toggleDelete: Function,
            deletePokemon: Function
        }
    }
</script>