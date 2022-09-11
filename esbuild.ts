import * as esbuild from 'esbuild'

esbuild.buildSync({
	entryPoints: ['src/index.ts'],
	format: 'esm',
	outfile: 'esbuild/index.js',
})