<template>
    <!--button to expand/collapse filter form, form is expanded by default-->
    <button class="btn btn-primary mx-3 position-absolute top-0 end-0" type="button" data-bs-toggle="collapse" data-bs-target="#filterForm" aria-expanded="true" aria-controls="filterForm">
        <i class="fa fa-filter" aria-hidden="true"></i>
    </button>

    <!--filter form-->
    <div class="row m-3 p-3 border rounded show" id="filterForm">
        <div class="col-12">
            <form>
                <div class="row">
                    <!--pokemon field-->
                    <div class="col-xl-3 col-md-4 col-sm-6 mb-3">
                        <label for="pokemon" class="form-label">Pokémon</label>
                        <input type="text" class="form-control" id="pokemon" name="pokemon" v-model="filter.pokemon" v-on:input="filterPokemon" />
                    </div>

                    <!--pokeball field-->
                    <div class="col-xl-3 col-md-4 col-sm-6 mb-3">
                        <label for="pokeball" class="form-label">Pokéball</label>
                        <input type="text" class="form-control" id="pokeball" name="pokeball" v-model="filter.pokeball" v-on:input="filterPokemon" />
                    </div>

                    <!--nature field-->
                    <div class="col-xl-3 col-md-4 col-sm-6 mb-3">
                        <label for="nature" class="form-label">Nature</label>
                        <input type="text" class="form-control" id="nature" name="nature" v-model="filter.nature" v-on:input="filterPokemon" />
                    </div>

                    <!--ability field-->
                    <div class="col-xl-3 col-md-4 col-sm-6 mb-3">
                        <label for="ability" class="form-label">Ability</label>
                        <input type="text" class="form-control" id="ability" name="ability" v-model="filter.ability" v-on:input="filterPokemon" />
                    </div>

                    <!--move field-->
                    <div class="col-xl-3 col-md-4 col-sm-6 mb-3">
                        <label for="move" class="form-label">Move</label>
                        <input type="text" class="form-control" id="move" name="move" v-model="filter.move" v-on:input="filterPokemon" />
                    </div>
                    
                    <!--shiny field-->
                    <div class="col-xl-3 col-md-4 col-sm-6 mb-3">
                        <label for="shiny" class="form-label">Shiny</label>
                        <select class="form-select" id="shiny" name="shiny" v-model="filter.shiny" v-on:change="filterPokemon">
                            <option value="" selected>All</option>
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                    </div>

                    <!--status field-->
                    <div class="col-xl-3 col-md-4 col-sm-6 mb-3">
                        <label for="status" class="form-label">Status</label>
                        <select class="form-select" id="status" name="status" v-model="filter.status" v-on:change="filterPokemon">
                            <option value="" selected>All</option>
                            <option value="obtained">Obtained</option>
                            <option value="unobtained">Unobtained</option>
                        </select>
                    </div>

                    <!--reset button-->
                    <div class="col-xl-3 col-md-8 col-sm-6 d-flex flex-row-reverse">
                        <input type="button" class="btn btn-danger mt-auto" v-on:click="clearFilter" value="Reset" />
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AppFilterForm',
        emits: ['filters-changed'],
        data: function() {
            return {
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
        methods: {
            filterPokemon: function() {
				this.$store.commit('setFilter', this.filter);
                
                // notify AppPokemonList component to return to the first page
                // to prevent user from seeing a blank page when the list shrinks due to the applied filters
				this.$emit('filters-changed');
			},
            clearFilter: function() {
                this.filter.pokemon="";
                this.filter.pokeball="";
                this.filter.shiny="";
                this.filter.nature="";
                this.filter.ability="";
                this.filter.move="";
                this.filter.status="";
            }
        }
    }
</script>