window.fbAsyncInit = () =>{
  FB.init({
    appId   : '1874826756175117',
    cookie  : true, // Habilita las cookies para que el server pueda accerder a la sesion.
    xfbml   : true, // Parsea los plugins sociales en la pagina
    version : 'v2.8' // Usa version 2.8
  });
};

function loginHandler(response) {
  if (response.status === 'connected') {
    state.status = "Conectado";
    FB.api('/me?fields=email,name', user =>{
      state.user = user;
      state.doRender();
    });
  } else if (response.status === 'not_authorized') {
    status.user = null;
    state.status = "Aplicacion no autorizada";
    state.doRender();
  }
}

function doLogin() {
  FB.login(loginHandler, {scope: 'email'});
}
