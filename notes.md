# Primeira aplicação com react

## ESLint, Prettier & EditorConfig

---

Install stuff:

yarn add eslint -D
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D

---

Add/create rules in eslintrc.js:

- extends: "prettier", "prettier/react";
- parser: 'babel-eslint';
- plugins: 'prettier';
- rules: {
  "prettier/prettier": "error",
  "react/jsx-filename-extension": [
  "warn",
  {
  extensions: [".jsx", ".js"]
  }
  ],
  "import/prefer-default-export": "off"
  }

---

Create and add content to .prettierrc:

{
"singleQuotes": true,
"trailingComma": "es5"
}

---

## Roteamento no React

---

Install lib responsible by routing/navigation in the frontend:

yarn add react-router-dom

---

Folder structure and files:

- src/routes.js: Return the routes of the application;
- src/pages/Main/index.js
- src/pages/Repository/index.js

---

## Styled components

- Install lib:

yarn add styled-components

- Install styled components extension.

---

## Estilos globais

Create folder and files:

- src/styles/global.js

To create the global style: use createGlobalStyle from styled components lib.

---

## Estilizando a página Main

- (optional) Install a package of popular icons:
  yarn add react-icons

-
