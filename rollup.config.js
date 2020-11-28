import typescript from 'rollup-plugin-typescript2';
import tslint from 'rollup-plugin-tslint';

export default {
  input: 'src/main.ts',
  output: {
    file: 'build/dataRandomDancer.js',
    format: 'es'
  },
  plugins: [
    typescript(),
    tslint()
  ]
}