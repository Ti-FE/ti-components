import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

import pkg from './package.json'

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'semantic-ui-react': 'semanticUIReact'
}

export default {
  input: 'src/index.ts',
  external: Object.keys(globals),
  output: [
    // CommonJS
    {
      file: pkg.main,
      format: 'cjs',
      indent: false
    },
    // ES
    {
      file: pkg.module,
      format: 'es',
      indent: false
    }
  ],
  plugins: [
    resolve(),
    commonjs({
      namedExports: {
        'node_modules/react-is/index.js': ['isElement', 'isValidElementType']
      }
    }),
    typescript()
  ]
}
