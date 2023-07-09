<template>
	<nav class="navbar navbar-expand-xl bg-body-tertiary" data-bs-theme="dark">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">Pokémon List</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<div class="navbar-nav">
					<router-link class="nav-item nav-link" to="/">Pokémon Collection</router-link>
					<router-link class="nav-item nav-link" to="/add">Add Pokémon</router-link>
					<router-link class="nav-item nav-link" to="/about">About</router-link>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		name: 'AppHeader'
	}
</script>

<style scoped>
	nav a.router-link-exact-active {
		font-weight: bold;
		color: #42b983;
	}
</style>