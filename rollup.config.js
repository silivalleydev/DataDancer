import typescript from 'rollup-plugin-typescript2';
import tslint from 'rollup-plugin-tslint';
import dts from 'rollup-plugin-dts';

const rollup_main_config = {
  input: 'src/main.ts',
  output: {
    file: 'dist/output/dataDancer.js',
    format: 'es'
  },
  plugins: [
    typescript(),
    tslint()
  ]
}

const rollup_dts_config = {
  input: 'src/main.ts',
  output: {
    file: 'dist/output/dataDancer.d.ts',
    format: 'es'
  },
  plugins: [
    dts()
  ]
}

const rollup_config = [rollup_main_config, rollup_dts_config]

export default rollup_config;

