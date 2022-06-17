<div align="center">
   <a href="https://github.com/nico-mayer/vide">
    <img src="/public/logo.svg" alt="Logo" width="200">
  </a>
  <h2><b>Vide + <img src="https://api.iconify.design/logos:nuxt-icon.svg" alt="nuxtlogo" width="27"></b></h2>
</div>

<p align='center'>
This is the <a href="https://github.com/nuxt/framework">Nuxt 3</a> version of <a href="https://github.com/Nico-Mayer/vide">Vide</a>.
</p>

<br>

<p align='center'>
The Goal was to create a super lightweight Nuxt3 Starter template with
        as few dependencies as possible, but at the same time provide a good
        amount of utility. To deliver a clean entry point for newcomers and
        advanced Nuxt 3 users.
</p>

<br>

<p align='center'>
<a href="https://vide-nuxt.vercel.app/" target="_blank">Live Demo</a>
</p>

<br>


## Get Started

```bash
npx degit nico-mayer/videNuxt my-vide-app

cd my-vide-app

yarn # If you don't have yarn installed, run: npm install

yarn dev # or npm run dev to start the development server
```

<br>

## Features

- <img src="https://api.iconify.design/logos:nuxt-icon.svg" alt="nuxtlogo" width="20"> [Nuxt 3](https://v3.nuxtjs.org/)
   - 🗂 [File based routing]
   - 📦 Components auto importing

- 🌙 Easy Custumizable Dark Mode



- 🎨 [UnoCSS](https://github.com/antfu/unocss) - the instant on-demand atomic CSS engine

- 😃 [Use icons from any icon sets with classes](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- 💪 TypeScript

<br>

## Pre-packed

### UI Frameworks

- [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
- [Pure CSS Icons via UnoCSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)


### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)

- [VS Code Extensions](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - Fire up Vite server automatically
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - Vue 3 `<script setup>` IDE support
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Icon inline display and autocomplete

> Vide requires Node >=14

### Build

To build the App, run

```bash
yarn build
```

And you will see the generated files in `dist` that are ready to be served.

<br>

<p align="center">This template is inspired by <a href="https://github.com/antfu/vitesse">vitesse</a> and <a href="https://github.com/alvarosabu/vitesome">vitesome</a></p>
