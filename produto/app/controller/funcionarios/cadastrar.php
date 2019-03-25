<?php

class ControllerFuncionarioCadastrar extends Controller{
    public function index(){
        $vc_nome = $this->request->postJson('vc_nome');
        //$vc_sobrenome = $this->request->postJson('sobrenome');
        $vc_email = $this->request->postJson('vc_email');
        $vc_senha = $this->request->postJson('vc_senha');       
        
        

        $this->load->model("Funcionarios");

        $existeEmail = $this->modelClientes->existeEmail($vc_email);

        if($existeEmail) return $this->ret->erro('O email informado já está cadastrado!');

        /*$existeCpf = $this->modelClientes->existeCPF($vc_cpf);

        if($existeCpf) return $this->ret->erro('O cpf informado já está cadastrado!');*/

        
        $cadastrou = $this->modelClientes->cadastrar($vc_nome, $vc_email, $ts_dataDeNascimento, $vc_cpf, $vc_password, $vc_confirmPassword, $ch_sexo, $vc_celular,$vc_telefone);
        
        if($cadastrou){
            if($news_letter){
                $this->load->model("NewsLetter");
                $this->modelNewsLetter->newsLetter($vc_email);
            }
        
            $firstName = explode(' ',trim($vc_nome))[0];
            if($ch_sexo == "f"){
                $titulo = "Bem-Vinda";
                $saudacao = "Seja muito bem-vinda";
            }else{
                $titulo = "Bem-Vindo";
                $saudacao = "Seja muito bem-vindo";
            }
            $html = $this->load->view('templates/clientes/cadastro',['nome'=>$firstName, 'titulo'=>$titulo, 'saudacao'=>$saudacao]);
            $this->email->enviar($vc_email, $firstName, 'Seja Bem-Vindo a AirCloset', strip_tags($html), $html);
            return $this->ret->sucesso('Cadastro realizado com sucesso!',$cadastrou[0]);
        }else{
            return $this->ret->erro('Verifique os dados informados!');
        }
       

        

    }
}
?>