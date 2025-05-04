import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr"

import Font from 'vite-plugin-font';


export default defineConfig(({mode}) => {
    const isDev = mode !== "production";

    return {
        plugins: [
            react({
                babel: {
                    plugins: isDev ? ["check-prop-types"] : [],
                },
            }),
            [svgr()],
            [Font.vite()],
        ],

        server: {
            port: 8888,
            open: true,
        }

    };
});
