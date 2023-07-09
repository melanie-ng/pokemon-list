<template>
    <template v-if="getPokemon.length">
        <!--desktop view-->
        <div class="row d-none d-xl-block">
            <div class="col-12">
                <table class="table table-bordered table-striped">
                    <caption>Table of Pokémon in Your Collection</caption>
                    <thead class="table-dark">
                        <tr>
                            <th id="sprites" scope="col" colspan="2">Sprites</th>
                            <th id="pokemon" scope="col">Pokémon</th>
                            <th id="pokeball" scope="col">Poké Ball</th>
                            <th id="shiny" scope="col">Shiny</th>
                            <th id="nature" scope="col">Nature</th>
                            <th id="ability" scope="col">Ability</th>
                            <th id="moves" scope="col" colspan="4">Moves</th>
                            <th id="status" scope="col">Status</th>
                            <th id="functions" scope="col">Functions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="pokemon in getPokemon" :key="pokemon.id">
                            <td headers="sprite"><img :src="pokemon.pokemonSprite" alt="Sprite of a Pokémon" width="96" /></td>
                            <td headers="sprite"><img :src="pokemon.pokeballSprite" alt="Sprite of a Poké Ball" /></td>
                            <td headers="pokemon">{{ pokemon.pokemon }}</td>
                            <td headers="pokeball">{{ pokemon.pokeball }}</td>
                            <!--display the pokemon's shiny status in a more understandable format-->
                            <td v-if="pokemon.shiny==1" headers="shiny">yes</td>
                            <td v-else headers="shiny">no</td>
                            <td headers="nature">{{ pokemon.nature }}</td>
                            <td headers="ability">{{ pokemon.ability }}</td>
                            <td v-for="move in pokemon.moves" :key="move" headers="moves">{{ move }}</td>
                            <td v-highlight="pokemon.status" headers="status">{{ pokemon.status }}</td>
                            <td class="align-middle" headers="functions">
                                <template v-if="!pokemon.confirmDelete">
                                    <!--toggle status button-->
                                    <button type="button" class="btn btn-warning" v-on:click="togglePokemonStatus(pokemon.id)"><i class="fa fa-exchange" aria-hidden="true"></i></button><br/>
                                    <!--delete button-->
                                    <button type="button" class="btn btn-danger" v-on:click="toggleDelete(pokemon)"><i class="fa fa-trash" aria-hidden="true"></i></button>
                                </template>
                                <template v-else>
                                    <!--confirm delete button-->
                                    <button type="button" class="btn btn-danger" v-on:click="deletePokemon(pokemon.id)"><i class="fa fa-check" aria-hidden="true"></i></button><br/>
                                    <!--cancel delete button-->
                                    <button type="button" class="btn btn-success" v-on:click="toggleDelete(pokemon)"><i class="fa fa-xmark" aria-hidden="true"></i></button>
                                </template>
                            </td>
                        </tr> 
                    </tbody>
                </table>
            </div>
        </div>
        
        <!--mobile landscape & portrait view-->
        <div class="row d-xl-none">
            <app-pokemon-card 
                v-for="pokemon in getPokemon"
                :key="pokemon.id"
                class="col-md-5 mx-auto mb-5"
                :pokemon="pokemon"
                :canManage=true
                :togglePokemonStatus="togglePokemonStatus"
                :toggleDelete="toggleDelete"
                :deletePokemon="deletePokemon"
            ></app-pokemon-card>
        </div>

        <div class="row">
            <div class="col-12">
                <paginate 
                    :page-count=getPageCount   
                    :page-range="5" 
                    :margin-pages="1"
                    :click-handler="clickCallback" 
                    :prev-text="'Prev Page'" 		
                    :next-text="'Next Page'" 
                    :container-class="'pagination'" 
                    :force-page=currentPage
                    >
                </paginate>
            </div>
        </div>
    </template>

    <template v-else-if="this.$store.state.myPokemons.length>0">
        <h4>No matching Pokémon found</h4>
    </template>
    
    <template v-else>
        <h4>No Pokémon in your collection</h4>
    </template>
</template>

<script>
    import Paginate from 'vuejs-paginate-next'  
    import AppPokemonCard from '../components/AppPokemonCard.vue'
    import HighlightDirective from '../directives/HighlightDirective';

    export default {
        name: 'AppPokemonList',
        components: {
            Paginate,
            AppPokemonCard
        },
        directives: {
            highlight: HighlightDirective
        },
		data: function() {
			return {
				perPage:4,
				currentPage:1,
                confirmDelete: false
			}
		},
		computed: {
			getPokemon: function() {
				let current = this.currentPage * this.perPage; 
				let start = current - this.perPage;
                // get a range of pokemon from the filtered list of pokemon
				return this.$store.getters.filterPokemon.slice(start, current);
			},
			getPageCount: function() {
                // calculate page-count based on the number of pokemon in the filtered list
				return Math.ceil(this.$store.getters.filterPokemon.length / this.perPage);
			}
		},
		methods: {
			clickCallback: function(pageNum) {
				this.currentPage = Number(pageNum);
			},
			togglePokemonStatus: function(index) {
				this.$store.commit("togglePokemonStatus", index);
			},
			toggleDelete: function(pokemon) {
				pokemon.confirmDelete = !pokemon.confirmDelete;
			},
			deletePokemon: function(index) {
				this.$store.commit("deletePokemon", index)
			}
		}
    }
</script>