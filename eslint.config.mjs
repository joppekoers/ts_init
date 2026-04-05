import eslint from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	prettierConfig,
	{
		rules: {
			'array-callback-return': 'error',
			curly: ['error', 'all'],
			'no-array-constructor': 'error',
			'no-duplicate-imports': ['error', { includeExports: true }],
			'no-extend-native': 'error',
			'no-nested-ternary': 'error',
			'no-return-assign': 'error',
			'no-throw-literal': 'error',
			'no-unreachable-loop': 'error',
			'no-unused-private-class-members': 'error',
			'no-useless-catch': 'error',
			'no-useless-escape': 'error',
			'no-useless-return': 'error',
			'no-var': 'error',
			'prefer-const': 'error',
			'prefer-template': 'error',
			'require-await': 'error',
			'no-constant-condition': ['error', { checkLoops: false }],
			eqeqeq: ['error', 'smart'],
			'@typescript-eslint/ban-ts-comment': 'off',
		},
	},
	{
		ignores: ['build/**'],
	},
)
