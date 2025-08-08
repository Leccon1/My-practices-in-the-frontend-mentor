import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
	base: 'https://github.com/Leccon1/Manage-landing-page',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
