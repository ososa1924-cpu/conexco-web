# CONEXCO — Web oficial

Landing page oficial de **CONEXCO**, la plataforma que conecta bodegas y
pequeños comercios con sus clientes.

Este proyecto está hecho con **React + Vite + Tailwind CSS**, no usa base de
datos ni backend, y está preparado para publicarse gratis en **Vercel**.

Esta guía está pensada para alguien que **nunca ha programado ni publicado
una web**. Sigue los pasos en orden, sin saltarte ninguno.

---

## 📁 ¿Qué contiene este proyecto?

```text
conexco-web/
├── public/
│   ├── assets/
│   │   ├── conexco-logo.png       ← logo completo (icono + texto)
│   │   ├── conexco-isotipo.png    ← solo el icono/escudo
│   │   ├── app-tienda.png         ← (opcional, captura real de la app)
│   │   └── app-cliente.png        ← (opcional, captura real de la app)
│   ├── favicon.png
│   └── manifest.json
│
├── src/
│   ├── components/                ← cada sección de la página
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── TrustBar.jsx
│   │   ├── WhatIsConexco.jsx
│   │   ├── Features.jsx
│   │   ├── StoreClient.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Benefits.jsx
│   │   ├── Barrio.jsx
│   │   ├── Download.jsx
│   │   ├── InstallSteps.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   ├── Support.jsx
│   │   ├── Footer.jsx
│   │   ├── Logo.jsx
│   │   └── Reveal.jsx
│   ├── config.js                  ← aquí cambias tus enlaces reales
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── README.md   ← este archivo
```

**Nota sobre el logo:** el archivo `conexco-logo.png` y
`conexco-isotipo.png` que vienen en el proyecto son una **recreación
provisional** hecha respetando los colores y proporciones de tu marca.
Cuando tengas los archivos oficiales, simplemente reemplázalos dentro de
`public/assets/` con el mismo nombre de archivo, y la web los usará
automáticamente.

---

## 1. Instalar Node.js

Node.js es el programa que necesitas para poder ejecutar y construir la
web en tu computadora.

1. Entra a **https://nodejs.org**
2. Descarga la versión **LTS** (la recomendada, no la "Current").
3. Instálala como cualquier programa (siguiente, siguiente, finalizar).
4. Para comprobar que quedó instalada, abre una terminal (en Windows:
   busca "cmd" o "PowerShell"; en Mac: busca "Terminal") y escribe:

   ```bash
   node -v
   npm -v
   ```

   Si te muestra un número de versión en ambos casos, está listo.

---

## 2. Abrir el proyecto

1. Descarga o copia la carpeta `conexco-web` a tu computadora, por ejemplo
   a tu carpeta de **Documentos** o **Escritorio**.
2. Abre una terminal dentro de esa carpeta:
   - **Windows:** entra a la carpeta `conexco-web` en el explorador de
     archivos, haz clic en la barra de direcciones, escribe `cmd` y
     presiona Enter.
   - **Mac:** abre la Terminal y escribe `cd ` (con un espacio), luego
     arrastra la carpeta `conexco-web` dentro de la ventana y presiona
     Enter.

---

## 3. Instalar las dependencias

Dentro de la terminal, con la carpeta `conexco-web` abierta, escribe:

```bash
npm install
```

Espera a que termine (puede tardar uno o dos minutos). Esto descarga
todas las piezas que la web necesita para funcionar.

---

## 4. Ejecutar la web en tu computadora

```bash
npm run dev
```

La terminal te mostrará un enlace parecido a:

```text
Local:   http://localhost:5173/
```

Copia esa dirección y pégala en tu navegador (Chrome, Edge, etc.) para
ver tu web funcionando en tu propia computadora. Cada vez que guardes un
cambio en el código, la página se actualizará sola.

Para detenerla, vuelve a la terminal y presiona `Ctrl + C`.

---

## 5. Colocar tu logo oficial

Cuando tengas los archivos finales de tu logo:

1. Ve a la carpeta `public/assets/`.
2. Reemplaza:
   - `conexco-logo.png` → tu logo completo (con el texto CONEXCO).
   - `conexco-isotipo.png` → solo el icono/escudo.
3. Guarda los archivos con **el mismo nombre exacto**.
4. Si quieres mostrar capturas reales de las apps en el Hero, agrega:
   - `app-tienda.png`
   - `app-cliente.png`

No necesitas tocar ningún código para esto.

---

## 6. Colocar tus enlaces reales (APK, WhatsApp, correo)

Abre el archivo:

```text
src/config.js
```

Y cambia los valores `"#"` por tus enlaces reales, por ejemplo:

```javascript
export const config = {
  storeDownloadUrl: "https://tusitio.com/descargas/conexco-tienda.apk",
  clientDownloadUrl: "https://tusitio.com/descargas/conexco-cliente.apk",
  whatsappUrl: "https://wa.me/584121234567",
  supportEmail: "mailto:soporte@conexco.com",
};
```

Guarda el archivo y listo, todos los botones de la web usarán estos
enlaces automáticamente.

---

## 7. Crear un repositorio en GitHub

GitHub es donde vas a guardar el código de tu proyecto para poder
publicarlo.

1. Entra a **https://github.com** y crea una cuenta gratis si no tienes.
2. Haz clic en el botón verde **"New"** (o el símbolo **+** arriba a la
   derecha → "New repository").
3. Ponle de nombre, por ejemplo, `conexco-web`.
4. Déjalo en **Public** (o Private si prefieres).
5. NO marques ninguna opción adicional (README, .gitignore, licencia).
6. Haz clic en **"Create repository"**.

GitHub te mostrará una página con comandos. Vas a usar la sección que
dice algo como **"…or push an existing repository from the command
line"**.

---

## 8. Subir el proyecto a GitHub

En la terminal, dentro de la carpeta `conexco-web`, escribe uno por uno
estos comandos (presionando Enter después de cada uno):

```bash
git init
git add .
git commit -m "Primera versión de la web de CONEXCO"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/conexco-web.git
git push -u origin main
```

Reemplaza `TU-USUARIO` por tu nombre de usuario real de GitHub (lo ves en
la página del repositorio que acabas de crear).

Si es la primera vez que usas Git en tu computadora, te pedirá iniciar
sesión con tu cuenta de GitHub — sigue las instrucciones que aparezcan en
pantalla.

---

## 9. Conectar GitHub con Vercel

1. Entra a **https://vercel.com**.
2. Crea una cuenta gratis usando **"Continue with GitHub"** (así quedan
   conectados automáticamente).
3. Haz clic en **"Add New..."** → **"Project"**.
4. Busca tu repositorio `conexco-web` en la lista y haz clic en
   **"Import"**.
5. Vercel detectará automáticamente que es un proyecto Vite/React. No
   necesitas cambiar ninguna configuración.
6. Haz clic en **"Deploy"**.

---

## 10. Publicar la web

Espera uno o dos minutos mientras Vercel construye tu proyecto. Cuando
termine, verás un mensaje de éxito con un enlace parecido a:

```text
https://conexco-web.vercel.app
```

¡Esa es tu web oficial, ya publicada y accesible desde cualquier lugar
del mundo, gratis!

---

## 11. Cómo actualizar la web más adelante

Cada vez que quieras hacer un cambio (por ejemplo, cambiar un texto,
poner tu logo real, o actualizar un enlace):

1. Haz el cambio en los archivos dentro de tu carpeta `conexco-web`.
2. Guarda los archivos.
3. En la terminal, escribe:

   ```bash
   git add .
   git commit -m "Describe aquí qué cambiaste"
   git push
   ```

Vercel detectará automáticamente el cambio en GitHub y volverá a
publicar tu web sola, en uno o dos minutos. No necesitas repetir los
pasos de configuración.

---

## 🎨 Colores de marca usados

| Color | Uso |
|---|---|
| `#168BE5` Azul eléctrico | Elementos tecnológicos, enlaces, botones secundarios |
| `#4CAF50` Verde | Botones principales, acciones positivas, crecimiento |
| `#0D182A` Azul oscuro | Fondo de secciones principales |
| `#F2F4F7` Gris claro | Fondos secundarios |
| `#FFFFFF` Blanco | Tarjetas y textos sobre fondo oscuro |

---

## 🛠️ Comandos disponibles

```bash
npm run dev       # Ejecuta la web en tu computadora para revisarla
npm run build     # Genera la versión final optimizada (carpeta dist/)
npm run preview   # Revisa localmente cómo quedó la versión final
```

---

## ❓ Problemas comunes

**"npm no se reconoce como un comando"** → Node.js no quedó bien
instalado. Vuelve a instalarlo desde nodejs.org y reinicia tu
computadora.

**"git no se reconoce como un comando"** → Necesitas instalar Git desde
**https://git-scm.com** antes del paso 8.

**La web se ve distinta en Vercel que en mi computadora** → Revisa que
hayas hecho `git push` con todos tus últimos cambios antes de publicar.

---

Hecho para el barrio. Pensado en grande. 💚💙
