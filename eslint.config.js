// eslint.config.js
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsEslintParser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

// import { Linter } from "eslint"; // Not needed in Flat Config

export default [
  // Base ESLint Recommended Rules
  {
    files: ["**/*.ts"], 
    ignores: ["**/*test.ts", "**/*.json", "*.json", "**/__mocks__/*", "dist/*"],
    languageOptions: {
      parser: tsEslintParser,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: 2020,
        sourceType: "module",
        extraFileExtensions: [".json"],
      },
    },
    plugins: {
      "@typescript-eslint": tsEslintPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // Manually enable ESLint recommended rules
      // List of commonly used recommended rules
      // You may need to adjust this list based on your requirements
      "no-console": "off",
      "no-unused-vars": "warn",
      "no-var": "error",
      "prefer-const": "warn",
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      
      // TypeScript ESLint Recommended Rules
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-var-requires": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
      
      // Prettier Rules
      "prettier/prettier": "error",
      
      // Your Custom Rules
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/no-unnecessary-type-assertion": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "no-prototype-builtins": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "prefer-const": "warn",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/require-await": "warn",
      "no-extra-boolean-cast": "off",
      "@typescript-eslint/unbound-method": "off",
      "@typescript-eslint/restrict-plus-operands": "off",
      "@typescript-eslint/ban-types": [
        "off",
        {
          extendDefaults: true,
          types: {
            "{}": false,
          },
        },
      ],
      "object-shorthand": "off",
      "no-console": "off",
    },
  },
  
  // Prettier Configuration to Disable Conflicting Rules
  {
    files: ["**/*.ts"],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
];
