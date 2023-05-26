# Desafio de tripulaciones - Frontend
## Huella del agua 
Desarrollado por: **Andrés León, Leonardo Esteve y Marcos Delgado**
---
### Introducción
**Huella del agua ** es una aplicación desarrollada para la empresa blue la cual a traves de un cuestiorario te permite calcular tu huella hidrica ademas de reservar su producto para el ahorro del consumo de agua .
---
### Inicialización
1. Clonar el repositorio:
```
git clone https://github.com/DREWiex/huelladelagua-front.git
```
2. Instalar las dependencias:
```
yarn add
```
3. Configurar las variables de entorno creando el archivo ```.env``` tomando como referencia el archivo ```.template.env```.
4. Iniciar la aplicación:
```
yarn dev
```
---
### Rutas
|             **RUTA**            |                    **DESCRIPCIÓN**                    |
|:-------------------------------:|:-----------------------------------------------------:|
| "/"                             | HomePage .                                            |
| "/product"                      | ProductPage que permite reservarlo .                      |
| "/quiz"                         | Renderiaza  todo el cuestionario.                      |
|                                 | Pagina de resultados de la encuesta.                  |
---
### Tecnologías 
- **React**
- **Vite**
---
### Librerías
- **wavify:** permite crear una ola animada y modificar todos sus valores tanto de tamaño color etc
---
### Despliegue
Despliegue hecho en Netlify:   https://lahuelladelagua.netlify.app 
---
### version 2.0
- Login y registro de usuarios.
- Implementación de retos para que los usuarios puedan apuntarse.
- Sistema de pagos con paypal para la reserva o futura compra del producto .
- Gestion de reservar a traves de una verificacion por email
