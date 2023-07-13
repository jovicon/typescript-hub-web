---
sidebar_position: 1
---

# Introducción a Typescript

Como comenzar a programar con **typescript en menos de 5 minutos**.

## Comencemos

Iniciaremos nuestro camino de aprendizaje typescript con un script sencillo, creando algunas variables, constantes, tipos e imprimiendo resultados.

### ¿Que necesitaras para iniciar?

- Instalar **[Visual Studio Code](https://code.visualstudio.com/download)** o algún editor de texto.
- Instalar **NodeJs** version 16.14 o superior con alguna de las siguientes opciones:
  - Directamente de la pagina oficial - [Node.js](https://nodejs.org/en/download/)
  - Instalar [NVM](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) - **opción recomendada**
- Instalar el compilador de typescript con uno de los siguientes comandos:
  - De forma global - **opción inicial recomendada**
  ```bash
  npm install typescript -g
  ```
  - Como Dependencia de proyecto
  ```bash
  npm install typescript --save-dev
  ```

## Primeros pasos

### Crea tu primer archivo Typescript

Crea una nueva carpeta o directorio para tu proyecto inicial y dentro de la carpeta crea un archivo de extensión o que termine con
'**.ts**'. Para crear y editar nuestro nuevo archivo debemos usar el editor de texto instalado anteriormente.

:::tip

Si estas desarrollando en **linux** o **mac**, puedes crear un archivo con el comando touch

```bash
touch index.ts
```

:::

### Escribe tu primer código Typescript

Abre el archivo que creaste con un editor de texto y escribe tu primer script en typescript:

```typescript
// Mi primer código en typescript
const world: string = "world";

console.log("hello ", world);
```

### Compila el código

Typescript al ser un superset de Javascript, necesita ser compilado para que pueda ser ejecutado por NodeJs.
Para ejecutarlo debes abrir una terminal o linea de comandos, tienes que dirigirte hasta el directorio o carpeta que se encuentra tu archivo y ejecutar el siguiente comando:

```bash
tsc nombre-archivo.ts
```

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
