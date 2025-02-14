# Crea tu propio WhatsApp desde cero

[_Curso de Udemy_](https://www.udemy.com/course/crea-tu-propia-app-mensajeria-desde-cero/?couponCode=KEEPLEARNING)

## Lado cliente

Éste es el código del curso tal como fue dado con muy pequeños cambios. Como el repositorio está disponible de forma pública, hago lo mismo con este repositorio. El código original se encuentra en [react-native-whatsapp](https://github.com/xAgustin93/react-native-whatsapp) y fue creado por [Agustín Navarro Galdón](https://www.linkedin.com/in/agustin93/)

### create-expo-app

La versión que se usa en el curso claramente no es la última (3.2.0 al escribir este readme). A tal punto que la última usa Typescript en vez de Javascript. Por eso el comando utlizado para la instalación en mi caso fue:

```
npx create-expo-app@2.3.0 server
```

Las versiones se pueden ver en: [npm npx create-expo-app](https://www.npmjs.com/package/create-expo-app/v/1.1.5?activeTab=versions)

### Cómo correr el cliente en un browser

### Dependencies versions

Ya que el curso no está actualizado, me tomé el esfuerzo de anotar todas las dependencias utilizadas con las versiones correspondientes para evitar problemas de compatibilidades

- npm 8.5.5
- node 18.12.1
- yarn 1.22.19
- create-expo-app Creo que usa una versión cercana a la 2.3.0
- express.js 4.18.2
- socket.io 4.5.4
- mongoose 6.8.0
- body-parser 1.20.1
- cors 2.8.5
- morgan 1.10.0
- nodemon 2.0.20
- bcryptjs 2.4.3
- jsonwebtoken 8.5.1
- connect-multiparty 2.2.0

### ESLint

El curso no instala ESLint, pero sí utiliza Prettier. Yo en mi caso le agregué ESLint por lo que se verán las siguientes dependencias:

- @eslint/js 9.20.0
- eslint 9.20.1
- eslint-plugin-react 7.37.4
- globals 15.15.0

#### Configuración elegida

- ✔ How would you like to use ESLint? · problems
- ✔ What type of modules does your project use? · esm
- ✔ Which framework does your project use? · react
- ✔ Does your project use TypeScript? · javascript
- ✔ Where does your code run? · browser
- The config that you've selected requires the following dependencies:
  - eslint,
  - globals,
  - @eslint/js,
  - eslint-plugin-react
- ✔ Which package manager do you want to use? · yarn

---

> Mis notas del curso son privadas y están en [Notas del curso](https://docs.google.com/document/d/1hJ4F6PoeFXu-ERqIkLC7izroIJwJ8fVAQ7TyGq2Jk8w/edit?tab=t.0)
