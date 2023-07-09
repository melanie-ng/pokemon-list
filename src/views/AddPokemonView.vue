<template>
	<div class="container">
        <div class="row m-3">
            <div class="col-12">
                <h1>Add Pokémon</h1>
            </div>
        </div>

		<!--error message(s)-->
		<template v-if="errors.length">
			<div class="row">
				<div class="col-12 alert alert-warning">
					<h4>Errors</h4>
					<ul class="text-start">
						<li v-for="error in errors" :key="error">{{ error }}</li>
					</ul>
				</div>
			</div>
		</template>

		<!--success message-->
		<template v-if="success">
			<div class="row">
				<div class="alert alert-success alert-dismissible fade show" role="alert">
					<b>{{ lastAdded }}</b> has been added to your collection!
					<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
				</div>
			</div>
		</template>

		<div class="row m-3 p-3">
			<!--form-->
			<div class="col-md-6">
				<form>
					<div class="row">
						<!--pokemon field-->
						<div class="col-lg-6 col-md-12 col-sm-6 mb-3">
							<label for="pokemon" class="form-label">Pokémon</label>
							<select class="form-select" id="pokemon" name="pokemon" v-model="myPokemon.pokemon" v-on:change="getPokemonData(myPokemon.pokemon)">
								<option value="" disabled selected>select</option>
								<option v-for="pokemon in pokemons.pokemon_entries" :key="pokemon" v-bind:value="pokemon.pokemon_species.name">{{ pokemon.pokemon_species.name }}</option>
							</select>
						</div>

						<!--pokeball field-->
						<div class="col-lg-6 col-md-12 col-sm-6 mb-3">
							<label for="pokeball" class="form-label">Poké Ball</label>
							<select class="form-select" id="pokeball" name="pokeball" v-model="myPokemon.pokeball" v-on:change="getSprite(myPokemon.pokeball, 'pokeball')">
								<option v-for="pokeball in pokeballs" :key="pokeball" v-bind:value="pokeball">{{ pokeball }}</option>
							</select>
						</div>

						<!--shiny field-->
						<div class="col-lg-6 col-md-12 col-sm-6 mb-3">
							<label for="shiny" class="form-label">Shiny</label>
							<select class="form-select" id="shiny" name="shiny" v-model="myPokemon.shiny" v-on:change="getSprite(myPokemon.pokemon, 'pokemon')">
								<option value="0" selected>no</option>
								<option value="1">yes</option>
							</select>
						</div>

						<!--nature field-->
						<div class="col-lg-6 col-md-12 col-sm-6 mb-3">
							<label for="nature" class="form-label">Nature</label>
							<select class="form-select" id="nature" name="nature" v-model="myPokemon.nature">
								<option value="any" selected>any</option>
								<option v-for="nature in natures.results" :key="nature" v-bind:value="nature.name">{{ nature.name }}</option>
							</select>
						</div>

						<!--status field-->
						<div class="col-lg-6 col-md-12 col-sm-6 mb-3">
							<label for="status" class="form-label">Status</label>
							<select class="form-select" id="status" name="status" v-model="myPokemon.status">
								<option value="unobtained" selected>unobtained</option>
								<option value="obtained">obtained</option>
							</select>
						</div>

						<!--fields that are dependent on the selected pokemon-->
						<template v-if="myPokemon.pokemon!=''">
							<!--ability field-->
							<div class="col-lg-6 col-md-12 col-sm-6 mb-3">
								<label for="ability" class="form-label">Ability</label>
								<select class="form-select" id="ability" name="ability" v-model="myPokemon.ability">
									<option value="any" selected>any</option>
									<option v-for="a in abilities" :key="a" v-bind:value="a.ability.name">{{ a.ability.name }}</option>
								</select>
							</div>

							<!--move fields-->
							<div class="col-lg-6 col-md-12 col-sm-6 mb-3">
								<label for="move1" class="form-label">Move 1</label>
								<select class="form-select" id="move1" name="move1" v-model="myPokemon.moves[0]">
									<option value="n/a" selected>n/a</option>
									<option v-for="m in moves" :key="m" v-bind:value="m.move.name">{{ m.move.name }}</option>
								</select>
							</div>
							<div class="col-lg-6 col-md-12 col-sm-6 mb-3">
								<label for="move2" class="form-label">Move 2</label>
								<select class="form-select" id="move2" name="move2" v-model="myPokemon.moves[1]">
									<option value="n/a" selected>n/a</option>
									<option v-for="m in moves" :key="m" v-bind:value="m.move.name">{{ m.move.name }}</option>
								</select>
							</div>
							<div class="col-lg-6 col-md-12 col-sm-6 mb-3">
								<label for="move3" class="form-label">Move 3</label>
								<select class="form-select" id="move3" name="move3" v-model="myPokemon.moves[2]">
									<option value="n/a" selected>n/a</option>
									<option v-for="m in moves" :key="m" v-bind:value="m.move.name">{{ m.move.name }}</option>
								</select>
							</div>
							<div class="col-lg-6 col-md-12 col-sm-6 mb-3">
								<label for="move4" class="form-label">Move 4</label>
								<select class="form-select" id="move4" name="move4" v-model="myPokemon.moves[3]">
									<option value="n/a" selected>n/a</option>
									<option v-for="m in moves" :key="m" v-bind:value="m.move.name">{{ m.move.name }}</option>
								</select>
							</div>
						</template>
					</div>
				</form>
			</div>

			<div class="col-md-6">
				<!--preview of pokemon to be added-->
				<div class="row">
					<app-pokemon-card
						class="col-12"
						:pokemon="myPokemon"
						:canManage=false
					></app-pokemon-card>
				</div>

				<!--add and clear buttons-->
				<div class="row">
					<div class="col-12 m-3">
						<button type="button" class="btn btn-success" v-on:click="addPokemon">Add</button>&nbsp;
						<button type="button" class="btn btn-danger" v-on:click="clearForm">Clear</button>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
	import AppPokemonCard from '../components/AppPokemonCard.vue';

	export default {
		name: 'AddPokemonView',
		components: {
			AppPokemonCard
		},
		data: function() {
			return {
				myPokemon: {
					pokemon: '',
					pokeball: 'poke-ball',
					shiny: 0,
					nature: 'any',
					ability: 'any',
					moves: ['n/a', 'n/a', 'n/a', 'n/a'],
					status: 'unobtained',
					pokemonSprite: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Question_Mark.svg/1024px-Question_Mark.svg.png',
					pokeballSprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'
				},
				pokemons: [],
				pokeballs: [],
				natures: [],
				abilities: [],
				moves: [],
				sprites: [],
                errors: [],
				lastAdded: '',
				success: false
			}
		},
		async mounted() {
			var self = this;
			var types = ['standard-balls', 'apricorn-balls', 'special-balls'];

			// retrieve all pokemon available in the Galar region
            await fetch('https://pokeapi.co/api/v2/pokedex/galar')			 
				.then( response =>{
					if (response.ok) {
						return response.json();
					} else {
						throw response;
					}
				})
				.then( data =>{
					self.pokemons = data
				})
				.catch(error => {
					self.err=error
				});

			// retrieve all pokemon natures
            await fetch('https://pokeapi.co/api/v2/nature?limit=25&offset=0')			 
				.then( response =>{
					if (response.ok) {
						return response.json();
					} else {
						throw response;
					}
				})
				.then( data =>{
					self.natures = data
				})
				.catch(error => {
					self.err=error
				});

			//retrieve different types of pokeball
			for (var i = 0; i < types.length; i++) {
                await fetch('https://pokeapi.co/api/v2/item-category/' + types[i])			 
                    .then( response =>{
                        if (response.ok) {
                            return response.json();
                        } else {
                            throw response;
                        }
                    })
                    .then( data =>{
                        for (var i = 0; i < data.items.length; i++) {
                            self.pokeballs.push(data.items[i].name)
                        }

                        //remove park ball since it is not in Pokemon Sword and Shield
                        self.pokeballs = self.pokeballs.filter(b => b !== 'park-ball');
                        self.pokeballs.sort();
                    })
                    .catch(error => {
                        self.err=error
                    });
			}
		},
		methods: {
			getSprite: async function(name, type) {
				var self = this;
				var url = 'https://pokeapi.co/api/v2/';

				// assemble the url based on the type of sprite that should be retrieved
				if (type == "pokemon") {
					url += 'pokemon/' + name;
				} else {
					url += 'item/' + name;
				}
				
				await fetch(url)			 
					.then( response =>{
						if (response.ok) {
							return response.json();
						} else {
							throw response;
						}
					})
					.then( data =>{
						if (type == "pokemon") {
							// retrieve the pokemon's shiny or regular sprite depending on the user's selection
							if (self.myPokemon.shiny == 1) {
								self.myPokemon.pokemonSprite=data.sprites.front_shiny;
							} else {
								self.myPokemon.pokemonSprite=data.sprites.front_default;
							}
						} else {
							// retrieve the pokeball's sprite
							self.myPokemon.pokeballSprite=data.sprites.default;
						}
					})
					.catch(error => {
						self.err=error
					});
			},
			getPokemonData: function(pokemonName) {
				var self = this;

				fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonName)			 
					.then( response =>{
						if (response.ok) {
							return response.json();
						} else {
							throw response;
						}
					})
					.then( data =>{
						// retrieve data to populate the options for ability and move fields 
						self.abilities=data.abilities;
						self.moves=data.moves;
						// retrieve pokemon sprite for preview
						self.getSprite(pokemonName, 'pokemon')
					})
					.catch(error => {
						self.err=error
					});
			},
            checkForm: function() {
                var errors = [];
                var result = true;

				// a pokemon must be selected
                if (!this.myPokemon.pokemon) {
                    result = false;
                    errors.push ("Please select a Pokemon.");
                }
                
                // the same move cannot be selected more than once (with the exception of n/a)
				for (var i = 0; i < 4; i++) {
					for (var j = 0; j < 4; j++) {
						if (i != j) {
							if (this.myPokemon.moves[i] == this.myPokemon.moves[j] && this.myPokemon.moves[i] != "n/a") {
								result = false;
								errors.push("The move [" + this.myPokemon.moves[i] + "] has been selected more than once. "
											+ "Please choose a different move.");
							}
						}
					}
				}
				
				// remove any duplicate errors
				this.errors = [... new Set(errors)];
                return result;
            },
			clearForm: function() {
				this.myPokemon.pokemon = "";
				this.myPokemon.pokeball = "poke-ball";
				this.myPokemon.shiny = 0;
				this.myPokemon.nature = "any",
				this.myPokemon.ability = "any";
				this.myPokemon.moves = ["n/a", "n/a", "n/a", "n/a"];
				this.myPokemon.status = "unobtained";
				this.myPokemon.pokemonSprite = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Question_Mark.svg/1024px-Question_Mark.svg.png";
				this.myPokemon.pokeballSprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png";

				this.errors = [];
			},
			addPokemon: function() {
				this.success = false;

                if (this.checkForm()) {
					// create a separate copy of myPokemon
                    const newPokemon = {
                        id: this.$store.state.nextId,
                        pokemon: this.myPokemon.pokemon,
                        pokeball: this.myPokemon.pokeball,
                        shiny: this.myPokemon.shiny,
                        nature: this.myPokemon.nature,
                        ability: this.myPokemon.ability,
                        moves: this.myPokemon.moves,
                        status: this.myPokemon.status,
                        pokemonSprite: this.myPokemon.pokemonSprite,
                        pokeballSprite: this.myPokemon.pokeballSprite
                    };

					// add the copy to the array 
					// to ensure added elements are not affected by the latest changes to myPokemon
                    this.$store.commit("addNewPokemon", newPokemon);
					
					// to set up success alert
					this.lastAdded = this.myPokemon.pokemon;
					this.success = true;

					this.clearForm();
                }
			}
		}
	}
</script>