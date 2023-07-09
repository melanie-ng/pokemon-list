<template>
	<div class="container position-relative">
        <div class="row m-3">
            <div class="col-12">
                <h1>My Pokémon</h1>
            </div>
        </div>

		<AppFilterForm ref="filterForm" v-on:filters-changed="onFiltersChanged"></AppFilterForm>
		<AppPokemonList ref="pokemonList"></AppPokemonList>
    </div>
</template>

<script>
	import AppFilterForm from '../components/AppFilterForm.vue'
	import AppPokemonList from '../components/AppPokemonList.vue'
	
	export default {
		name: 'PokemonCollectionView',
		components: {
			AppFilterForm,
			AppPokemonList
		},
		beforeRouteLeave() {
			// clear filter form properly before going to another view
			// ensures that the old filters applied on myPokemons are cleared
			this.$refs.filterForm.clearFilter();
		},
		methods: {
			onFiltersChanged: function() {
				// makes AppPokemonList component return to the first page when filters change
                // to prevent user from seeing a blank page when the list shrinks due to the applied filters
				this.$refs.pokemonList.currentPage = 1;
			}
		}		
	}
</script>