<?php


$peo= new Users;
$hola=$peo->get_usuarios($_POST["rut"]);

echo count($hola);






class Users
{

public $dbh;

 function __construct()
{
try {
$this->dbh = new PDO('mysql:host=localhost;dbname=usuarios_seguridad', 'root', '');
$this->dbh->exec("SET CHARACTER SET utf8");
$this->dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$this->dbh->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
} catch (PDOException $e) {
print "Error!: " . $e->getMessage();
die();
}
}



public function get_usuarios($usuario_administrador)
{
try {
    $tabla="usuarios_seguridad";
$query = $this->dbh->query('SELECT * FROM '. $tabla .' WHERE rut="'.$usuario_administrador.'" ' );
//$query->execute();
return $query->fetchAll();
$this->dbh = null;
}catch (PDOException $e) {
print $e->getMessage();
}
}


}
?>



