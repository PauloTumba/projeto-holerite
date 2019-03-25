<?php

require_once('/guardiao/domains/development/dcedoc.guardiaodigital.com.br/amfphp/services/db.php');
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting( E_ERROR | E_WARNING | E_PARSE );
    $db = new db();

    if($db==''){
        var_dump('sem nada');
    }else{
        var_dump('tem');
    }

class ModelFuncionarios
 extends Model{
    public function cadastrar($vc_nome, $vc_email, $vc_senha){       
        $this->db->prepare('INSERT INTO cofco.tb_funcionario(vc_nome, vc_email, vc_senha) VALUES (:vc_nome, :vc_email, :vc_senha '); 
        $this->db->vc_nome = $vc_nome;
        $this->db->vc_email = $vc_email; 
        $this->db->vc_senha = $vc_senha;  
        $rs = $this->db->execute();
        return $rs;
    }
}

