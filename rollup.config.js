import typescript from "@rollup/plugin-typescript";

const DIST_DIRECTORY = "dist";
const format = "esm";
const plugins = [typescript({ compilerOptions: {'target' : 'esnext'}})];

export default {
  input: "src/index.ts",
  output: {
    dir: DIST_DIRECTORY,
    format,
  },
  plugins,
};