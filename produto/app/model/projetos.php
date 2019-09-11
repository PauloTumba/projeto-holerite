<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

        //require_once('/var/www/delta/amfphp/services/db.php');
    //require_once('/guardiao/domains/development/dcedoc.guardiaodigital.com.br/amfphp/services/db.php');
    // ini_set('display_errors', 1);
    // ini_set('display_startup_errors', 1);
    // error_reporting( E_ERROR | E_WARNING | E_PARSE );
    //$db = new db();
    include_once 'database.php';
    //private $conn;
    $database = new Database();
    $db = $database->conectarBD();


    function inserir($projeto) {
        global $db;

        // $dados = json_encode($projeto);
        // echo $dados;
       
        // o comando abaixo vai executar algo assim:
        //
        // insert into usuarios (nome, cidade) values ('diogo', 'rio preto')
        
        $vc_nome = $projeto['vc_nome'];
        $ch_inativo = $projeto['ch_inativo'];
        $vc_empresa = $projeto['vc_empresa'];
        $dt_renovacao = $projeto['dt_renovacao'];
        $vc_obs = $projeto['vc_obs'];
        
    //     $sql = "insert into usuarios (nome, cidade, nome_usuario, senha) values ('$nome', '$cidade','$nome_usuario','$senha')";
        
    //     //var_dump($sql);
        
    //     $conexao->query($sql);
    // }
    
   
    // if($_SERVER["REQUEST_METHOD"] == "POST") {
    //         $vc_nome = $_POST['vc_nome'];
    //         $ch_inativo = $_POST['ch_inativo'];
    //         $vc_empresa = $_POST['vc_empresa'];
    //         $dt_renovacao = $_POST['dt_renovacao'];
    //         $vc_obs = $_POST['vc_obs'];

            // Insere os dados no banco
            // $db->prepare("INSERT INTO casa.projetos (vc_nome, ch_inativo,vc_empresa, ts_renovacao,vc_obs)VALUES( '".$vc_nome."', '".$ch_inativo."', '".$vc_empresa."', '".$ts_renovacao."', '".$vc_obs."') ");
            // $insere = $db->execute();
            // echo "inseriu";
            // $feedback=array(
            //     'status'=>'',
            //     'msg'=>'',
            //       'dados'=>[]
            // );
            $result = pg_query($db, "INSERT INTO casa.projetos (vc_nome, ch_inativo, vc_empresa, dt_renovacao, vc_obs)VALUES( '".$vc_nome."', '".$ch_inativo."', '".$vc_empresa."', '".$dt_renovacao."', '".$vc_obs."') ");
            if ($result>0) {
                $row = pg_fetch_array($result);
                // $cmdtuples = pg_affected_rows($result);

                // // echo $cmdtuples;
                // while ($row = pg_fetch_row($result)) {
                   

                //     // $feedback=array(

                //     // 'status'=>'1',
                //     // 'msg'=>'sucesso',
                //     // 'dados'=>$row,
                // // );  

                //     // print_r($row);
                          
                // }
                // echo "Author: $row[0]  E-mail: $row[1]";
                // print_r($result);
                $feedback=array(

                    'status'=>'1',
                    'msg'=>'sucesso',
                    'data'=>array(
                        'vc_nome'=>$row.$vc_nome,
                        'vc_empresa'=>$row.$vc_empresa,
                        'ch_inativo'=>$row.$ch_inativo,
                        'dt_renovacao'=>$row.$dt_renovacao,
                        'vc_obs'=>$row.$vc_obs,
                    )
                   
                );  
                        
            }else{

                $feedback=array(
                    'status'=>'0',
                    'msg'=>'erro',
                     
                );
               
               
            }

         
           
    
           

            echo json_encode($feedback);
        }
       
       

        // echo  $dados;
 
?>
        
