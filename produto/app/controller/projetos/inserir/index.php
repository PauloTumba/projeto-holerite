<?php
include_once '../../../model/projetos.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

  // if(isset($_POST['vc_nome'])){

      // $vc_nome =$_POST['vc_nome'];
      // $ch_inativo =$_POST['ch_inativo'];
      // $vc_empresa =$_POST['vc_empresa'];
      // $dt_renovacao =$_POST['dt_renovacao'];
      // $vc_obs =$_POST['vc_obs'];  
      
      $vc_nome ='vc_nome';
      $ch_inativo ='ch_inativo';
      $vc_empresa ='vc_empresa';
      $dt_renovacao ='dt_renovacao';
      $vc_obs ='vc_obs';  
  
       $projeto=[
                  // $vc_nome =>'vc_nome',
                  // $ch_inativo =>'0',
                  // $vc_empresa =>'vc_empresa',
                  // $dt_renovacao =>'2019-02-02',
                  // $vc_obs =>'vc_obs',

              'vc_nome' =>$_POST['vc_nome'],
              'ch_inativo' =>$_POST['ch_inativo'],
              'vc_empresa' =>$_POST['vc_empresa'],
              'dt_renovacao'=>$_POST['dt_renovacao'],
              'vc_obs' =>$_POST['vc_obs'],

      ];

      inserir($projeto); 

      // }
      // $feedback=array(

      //   'status'=>'0',
      //   'msg'=>'erro'         
      // );
    
      //   echo json_encode($feedback);
  

    
  // inserir($vc_nome, $ch_inativo, $vc_empresa, $dt_renovacao, $vc_obs);  
} 





