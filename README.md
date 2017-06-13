# Facebook Login

> Puntos a resaltar:
* Usamos un Script especial que carga el SDK de Facebook, estamos usando un patron de componentes.
* No hay mucha magia en este [index.js](https://github.com/arianacabana09/Facebook_Login/blob/master/assets/js/index.js), utiliza la presencia de la variable de usuario para poder determinar si debe mostrar el login o el dashboard.
* El state.user se carga cuando hacemos login en [Facebook](https://www.facebook.com/)
* El componente de login se encarga de cargar el login de la pagina y en caso de dar click en el boton de [facebook.js](https://github.com/arianacabana09/Facebook_Login/blob/master/assets/js/utils/facebook.js).
* El componente [Header](https://github.com/arianacabana09/Facebook_Login/blob/master/assets/js/components/header.js) solo muestra el logo, nada especial.
* El componente [Dashboard](https://github.com/arianacabana09/Facebook_Login/blob/master/assets/js/components/dashboard.js) tiene un boton que permite salir de la sesion de [Facebook](https://www.facebook.com/) y elimina nuestro *_state.user_*
* Primero tenemos que iniciar [Facebook](https://www.facebook.com/) utilizando una appID, idealmente debemos crear nuestra propia app en [Facebook for Developers](https://developers.facebook.com/)
* La funcion doLogin tiene una funcion loginHandler que obtiene la informacion de usuario y hace reRender.

> DEMO []()
