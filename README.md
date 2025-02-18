# Crea tu propio WhatsApp desde cero

[_Curso de Udemy_](https://www.udemy.com/course/crea-tu-propia-app-mensajeria-desde-cero/?couponCode=KEEPLEARNING)

Este repositorio comprende el capítulo 64 en adelante del curso. Cada commit se corresponde a un capítulo en específico, pudiendo haber algunas excepciones. Para los capítulos anteriores, que corresponden al lado servidor, ir a este repositorio: [chatapp-server](https://github.com/aghmnl/chatapp-server)

## Lado cliente

Éste es el código del curso tal como fue dado con muy pequeños cambios. Como el repositorio está disponible de forma pública, hago lo mismo con este repositorio. El código original se encuentra en [react-native-whatsapp](https://github.com/xAgustin93/react-native-whatsapp) y fue creado por [Agustín Navarro Galdón](https://www.linkedin.com/in/agustin93/)

### create-expo-app

La versión que se usa en el curso claramente no es la última (3.2.0 al escribir este readme). A tal punto que la última usa Typescript en vez de Javascript. Por eso el comando utlizado para la instalación en mi caso fue:

```
npx create-expo-app@2.3.0 client
```

Las versiones se pueden ver en: [npm npx create-expo-app](https://www.npmjs.com/package/create-expo-app/v/1.1.5?activeTab=versions)

### Cómo instalar el cliente

Para clonar localmente el repositorio:

```
git clone https://github.com/aghmnl/chatapp-client.git
```

Para instalar el código correctamente ir a la carpeta recién creada:

```
yarn install
```

Es necesario tener Expo instalado y también un emulador o un celular para ver corriendo la app.

Para correr Expo se utiliza

```
yarn start
```

### Dependencies versions

Ya que el curso no está actualizado, me tomé el esfuerzo de anotar todas las dependencias utilizadas con las versiones correspondientes para evitar problemas de compatibilidades

- npm 8.5.5 (yo utilizo 10.8.2)
- node 18.12.1 (yo utilizo 18.20.6)
- yarn 1.22.19
- create-expo-app Creo que usa una versión cercana a la 2.3.0
- babel 7.12.9
- @react-navigation 6.x
- @react-navigation/native 6.1.1 (yo utilizo la 6.x)
- @react-navigation/bottom-tabs 6.5.2 (yo utilizo la 6.x)
- expo 47.0.9 (yo utilizo 52.0.35)
- expo-status-bar 1.4.2 (yo utilizo 2.0.1)
- react 18.1.0 (yo utilizo 18.3.1)
- (aunque no lo menciona, yo utilizo react-dom 19.0.0)
- react-native 0.70.5 (yo utilizo 0.76.7)
- (aunque no lo utiliza, yo instalé ESLint 9.20.1)
- native-base 3.4.25 (yo utilizo la 3.4.28)
- react-native-svg 12.1.1 (yo utilizo 15.8.0)
- react-native-safe-area-context 3.3.2 (yo utilizo 4.12.0)
- expo-cli 6.0.8 (yo utilizo 6.3.10)
- @expo/vector-icons 13.0.0
- formik 2.2.9
- yup 0.32.11
- @react-native-async-storage/async-storage 1.17.11 (yo utilizo 2.1.1)

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
