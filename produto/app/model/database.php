<?php


// function conectarBD(){

// 	$host="host=localhost";
// 	$port="port=5432";
// 	$dbname="dbname=postgres";
// 	$user="user=paulo";
// 	$password="password=alcatel";

// 	$conn= pg_connect("$host $port $dbname $user $password");
// 	if(!$conn){
// 		echo "Error:".pg_last_error;
// 	}else{
// 		echo "<h3></hr>Conectou com sucesso<hr>";
// 		return $conn;
// 	}
	
// }

class Database{
function conectarBD(){

    $host="host=localhost";
    $port="port=5432";
    $dbname="dbname=postgres";
    $user="user=postgres";
    $password="password=alcatel";
    
    $bd= pg_connect("$host $port $dbname $user $password");
    if(!$bd){
        echo "Error:".pg_last_error;
    }else{
       // echo "<h3></hr>Conectou com sucesso<hr>";
        return $bd;
    }
    
    }
}

    
// class Database{
	
 
//     // specify your own database credentials
//     private $host = "localhost";
//     private $db_name = "postgres";
//     private $username = "postgres";
//     private $password = "alcatel";
//     private $port="5432";
// 	public $conn;

 
//     // get the database connection
//     public function conectarBD(){
		
 
//         $this->conn = null;
 
//         try{
//             $this->conn = new PDO("pgsql:host=" . $this->host . ";port=" . $this->port . ";dbname=" . $this->db_name.";user=" . $this->username . ";password=". $this->password);
//             $this->conn->exec("set names utf8");
//         }catch(PDOException $exception){
//             echo "Connection error: " . $exception->getMessage();
// 		}
// 		if(!$this->conn){
			
// 				echo "Erro ao conectar";
// 		}else{
			
// 			 echo"Sucesso";
// 			return $this->conn;
			
// 		}
 
       
//     }
    
// }
    

	
 
    // // specify your own database credentials
    // private $host = "localhost";
    // private $db_name = "postgres";
    // private $username = "postgres";
    // private $password = "alcatel";
	// public $conn;

 
    // // get the database connection
    // public function getConnection(){
		
 
    //     $this->db = null;
 
    //     try{
    //         $this->db = new PDO("pgsql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
    //         $this->db->exec("set names utf8");
    //     }catch(PDOException $exception){
    //         echo "Connection error: " . $exception->getMessage();
	// 	}
	// 	if(!$this->db){
			
	// 			echo "Erro ao conectar";
	// 	}else{
			
	// 		echo"Sucesso";
	// 		return $this->db;
			
	// 	}
 
       
    // }

