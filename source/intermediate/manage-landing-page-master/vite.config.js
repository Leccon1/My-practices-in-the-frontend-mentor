import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
	base: 'My-practices-in-the-frontend-mentor/demo/intermediate/Manage-landing-page-demo',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@style': path.resolve(__dirname, './src/style'),
		},
	},
})
