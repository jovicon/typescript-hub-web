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

### Escribe tu primer código en Typescript

Abre el archivo que creaste con un editor de texto y escribe tu primer script en typescript:

```typescript
// Mi primer código en typescript
const world: string = "world!";

console.log("hello ", world);
```

### Compila el código

**Typescript al ser un superset de Javascript** necesita ser compilado para que pueda ser ejecutado por NodeJs.
Para ejecutarlo debes abrir una terminal o linea de comandos, tienes que dirigirte hasta el directorio o carpeta que se encuentra tu archivo y ejecutar el siguiente comando:

```bash
tsc nombre-archivo.ts
```

### Ejecutemos el código Javascript

Una vez que el código TypeScript ha sido compilado, puedes ejecutar el archivo JavaScript resultante con Node.js. En la terminal, ejecuta el siguiente comando:

```bash
node nombre-archivo.js
```

Deberías ver la salida "hello world!" en la pantalla de la consola.

:::tip

**_PROTIP_**

Para evitar la compilación a Javascript y ejecutar directamente nuestro archivo typescript, podemos instalar adicional la libreria [ts-node](https://www.npmjs.com/package/ts-node) con el siguiente comando:

```bash
npm install -g ts-node
```

Y luego ejecutar nuestro archivo con el siguiente comando:

```bash
ts-node nombre-archivo.ts
```

:::

## Conclusión

Felicitaciones!!! Seguiste muy bien los pasos básicos para comenzar a programar con TypeScript.

En los siguientes modulos, exploraremos características avanzadas como **tipos estáticos, interfaces, clases y módulos** para aprovechar al máximo el poder de TypeScript.
