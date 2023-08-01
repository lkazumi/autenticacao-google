exports.User = (displayName,photos,emails) => {

let name = displayName.split(" ")[0];

  let html = `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
     
    <style type="text/css">
      @import url(http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,600,700,400);
 
      body {
        margin: 0;
        padding: 10%;
        text-align: center;
        font-family: 'Open Sans';
        background: #F8F8F8;
      }
 
      .user {
          padding: 50px 20px;
          background: #FFFFFF;
          border-radius: 2px;
          box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
          width: 330px;
          display: block;
          margin: 0 auto;
      }
 
      #user-photo {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        display: block;
        margin: 0 auto 10px auto;
      }
 
      h1 {
        display: block;
        margin: 0 auto;
        text-align: center;
        font-weight: lighter;
      }
 
      h5 {
        display: block;
        margin: 20px 0px 0px 0px;
        text-align: center;
        font-weight: lighter;
        color: #9D9D9D;
      }

      

      #user-name {
        color: #0066AA;
        font-weight: bold;
      }
 
      #user-email {
        display: block;
        margin: 0 auto;
        text-align: center;
        color: #0066AA;
      }
 
      .g-signin2,
      .g-signin2 .abcRioButton {
        display: block;
        margin: 20px auto 0 auto;
        text-align: center;
      }

      .custom-logout-btn {
        display: inline-block;
        background-color: #000000;
        color: white;
        font-size: 12px;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
      }
  
      .custom-logout-btn:hover {
        background-color: #1E1E1E;
      }
  
      .custom-logout-btn:active {
        background-color: #2C2C2C;
      }
    </style>
  </head>   
  <body>
    <div class="user">
      <img id="user-photo" src=${photos}>
      <h1>Olá, <span id="user-name">${name}</span>!</h1>
      <h5>${emails}</h5>
      <p id=${emails}></p>
      <div class="custom-logout-btn" onclick="redirectToHome()">Logout</div>
    </div>
    
    <script>
      function redirectToHome() {
        window.location.href = '/logout';
      }
    </script>

  </body>
</html>
`;

  return html;
};
