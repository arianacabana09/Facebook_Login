'use strict';

const login =() =>{
  const login       = $('<div class="login"></div>');
  const title       = $('<h1> Log into Laboratoria </h1>');
  const email       = $('<input type="password" class="password" placeholder="Correo Electrónico"/>');
  const password    = $('<input type="password" class="password" placeholder="contraseña"/>');
  const loginButton = $('<button> Ingresar </button>');
  const faceButton  = $('<button> Ingresar con Facebook </button>');

  login.append(title);
  login.append(email);
  login.append(password);
  login.append(loginButton);
  login.append(faceButton);

  loginButton.on('click',(e)=>{
    e.preventDefault();
    alert('Not implement yet');
  });

  faceButton.on('click',(e)=>{
    e.preventDefault();
    doLogin();
  });
  return login;
}
