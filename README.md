# React TypeScript Context API & Routing

To see this project up and running, check <a href="https://tic-tac-toe-theta-blond.vercel.app/" target="_blank" rel="noopener noreferrer">this demo link</a>.

## Table of Contents

- [Getting Started](#-getting-started)
- [Scripts Overview](#-scripts-overview)
- [Deployment](#-deployment)
- [Learn More](#learn-more)

## 🎯 Getting Started

To get started with this project, follow these steps:

1. Fork & clone repository:

```bash
git clone https://github.com/bariskahraman34/tic-tac-toe.git
```

2. Install the dependencies:

```bash
npm i
# or
yarn
# or
pnpm i
# or
bun i

#and

npm i @mui/material @emotion/react @emotion/styled
# or
yarn add @mui/material @emotion/react @emotion/styled
# or
pnpm add @mui/material @emotion/react @emotion/styled
# or
bun i @mui/material @emotion/react @emotion/styled
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open http://localhost:3000 with your browser to see the result.


5. This project uses a git hook to enforce conventional commits. To install the git hook, run the following command in the root directory of the project:

```bash
brew install pre-commit
pre-commit install -t commit-msg
```
## 📃  Script Overview

The following scripts are available in the package.json:


* dev: Starts the development server with colorized output

* build: Builds the app for production

* start: Starts the production server

* lint: Lints the code using ESLint

## 🚀 Deployment

Easily deploy your Next.js app with Vercel by clicking <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer" style="background:black;padding:7px;color:white;text-decoration:none;">DEPLOY</a>


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
