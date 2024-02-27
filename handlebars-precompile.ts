import { PluginOption } from 'vite';
import Handlebars from 'handlebars';

export default function handlebars(): PluginOption {
    const fileRexexp = /\.hbs$|\.handlebars$/;

    return {
        name: 'vite-plugin-handlebars-precompile',
        transform(src: string, id: string) {
            if (!fileRexexp.test(id)) {
                return;
            }

            const code = `
        import Handlebars from 'handlebars/runtime';

        export default Handlebars.template(${Handlebars.precompile(src)})
        `;

            // eslint-disable-next-line consistent-return
            return {
                code,
            };
        },
    };
}