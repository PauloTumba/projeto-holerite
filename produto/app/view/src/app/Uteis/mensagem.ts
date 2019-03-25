
declare var jQuery;
export class Mensagem{
    public static sucesso(msg: string, titulo?: string, callbackSim?){
        jQuery.confirm({
            'icon':'fa fa-check',
            'theme':'modern',
            'closeIcon':true,
            'animation':'scale',
            'type':'green',
            'title':titulo='Uhuuuu',
            'content':msg,
            'buttons':{
                'sim':{
                    'text':'Ok',
                    'btnClass':'btn-default',
                    'keys':['enter'],
                    'action': function(){
                        if(callbackSim)callbackSim();
                    }
                }
            }
        });
    }
    public static confirmacao(msg: string, titulo?: string, callbackSim? , callbackNao?){
        jQuery.confirm({
            'icon':'fa fa-question',
            'theme':'modern',
            'closeIcon':true,
            'animation':'scale',
            'type':'blue',
            'title':titulo='Escolha uma opção',
            'content':msg,
            'buttons':{
                'sim':{
                    'text':'Sim',
                    'btnClass':'btn-primary',
                    'keys':['enter'],
                    'action': function(){
                        if(callbackSim)callbackSim();
                    }
                },
                'nao':{
                    'text':'Não',
                    'btnClass':'btn-danger',
                    'keys':['esc'],
                    'action': function(){
                        if(callbackNao)callbackNao();
                    }
                }
            }
        });
    }
    public static erro(msg: string, titulo?: string,callbackSim?){
        jQuery.confirm({
            'icon':'fa fa-times',
            'theme':'modern',
            'closeIcon':true,
            'animation':'scale',
            'type':'red',
            'title':titulo='Ops',
            'content':msg,
            'buttons':{
                'sim':{
                    'text':'Ok',
                    'btnClass':'btn-default',
                    'keys':['enter'],
                    'action': function(){
                        if(callbackSim) callbackSim();
                    }
                }
            }
        });
    }
}