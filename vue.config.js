const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	publicPath: process.env.NODE_ENV==='production'?'/cos30043/s103489466/pokemon-list/':'/'
})
