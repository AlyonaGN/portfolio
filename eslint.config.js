import eslint from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.strict,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		rules: {
			semi: ['warn', 'always'],
			quotes: ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
			'no-nested-ternary': 'error',
			'linebreak-style': ['error', 'unix'],
			'no-cond-assign': ['error', 'always'],
			'no-console': 'error',
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/sort-type-constituents': 'error',
			'sort-imports': [
				'error',
				{
					ignoreCase: true,
					ignoreDeclarationSort: false,
					ignoreMemberSort: false,
					allowSeparatedGroups: true
				}
			]
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser
			}
		}
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/']
	}
);
