# Facebook Login

> Puntos a resaltar:
* Usamos un Script especial que carga el SDK de Facebook, estamos usando un patron de componentes.
* No hay mucha magia en este [index.js](http://github.com), utiliza la presencia de la variable de usuario para poder determinar si debe mostrar el login o el dashboard.
* El state.user se carga cuando hacemos login en [Facebook](https://www.facebook.com/)
* El componente de login se encarga de cargar el login de la pagina y en caso de dar click en el boton de [facebook.js](github).
* El componente [Header](github.com) solo muestra el logo, nada especial.
* El componente [Dashboard](github.com) tiene un boton que permite salir de la sesion de [Facebook](https://www.facebook.com/) y elimina nuestro [state.user](github.com)
* Primero tenemos que iniciar [Facebook](https://www.facebook.com/) utilizando una appID, idealmente debemos crear nuestra propia app en [Facebook for Developers](https://developers.facebook.com/)
* La funcion doLogin tiene una funcion loginHandler que obtiene la informacion de usuario y hace reRender.

> DEMO []()
