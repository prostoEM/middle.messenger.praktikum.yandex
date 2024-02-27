
import {resolve} from 'path'
import { defineConfig } from 'vite'
import checkerPlugin from 'vite-plugin-checker';
import handlebars from "./handlebars-precompile";





export default defineConfig({
    root: resolve(__dirname,'src'),
    build:{
        outDir:resolve(__dirname, 'dist'),
        rollupOptions: {
            input: {
                index: resolve(__dirname, './src/index.html'),
            },
          },
    },

//@ts-ignore
    plugins:[
        checkerPlugin({ typescript: true }),
        handlebars(),
    ],



})