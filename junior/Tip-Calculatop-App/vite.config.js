import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
	base: '/Tip-Calculatop-App/',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@style': path.resolve(__dirname, './src/style'),
			'@image': path.resolve(__dirname, './src/assets/images'),
		},
	},
})
