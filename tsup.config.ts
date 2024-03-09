import { defineConfig } from 'tsup'

export default defineConfig({
	minify: true,
	target: 'es2020',
	external: ['react'],
	sourcemap: true,
	dts: true,
	format: ['esm', 'cjs'],
	injectStyle: true,
})
