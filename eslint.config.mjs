import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
	{ files: ["**/*.{js,mjs,cjs,ts}"] },
	{ languageOptions: { globals: {...globals.browser, "process": "readonly"} } },
	{
		rules: {
			eqeqeq: "off",
      "no-unused-vars": "error",
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
      "no-console": "warn",
      "no-undef": "error"
    },
	},
	{
		ignores: [".node_modules/*", "dist/*"],
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
];