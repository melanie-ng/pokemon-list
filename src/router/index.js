import { createRouter, createWebHistory } from 'vue-router'
import PokemonCollection from '../views/PokemonCollectionView.vue'
import AddPokemon from '../views/AddPokemonView.vue'
import About from '../views/AboutView.vue'

const routes = [
	{
		path: '/',
		name: 'PokemonCollectionView',
		component: PokemonCollection
	},
	{
		path: '/add',
		name: 'AddPokemonView',
		component: AddPokemon
	},
	{
		path: '/about',
		name: 'AboutView',
		component: About
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
