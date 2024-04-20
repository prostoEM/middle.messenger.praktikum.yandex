
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


    plugins:[
        checkerPlugin({ typescript: true }),
//@ts-ignore
        handlebars({
            partialDirectory: [
                resolve(__dirname, 'src/components'),
                resolve(__dirname, 'src/modules')
            ],
            context: {}
        })
    ],



})