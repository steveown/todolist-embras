export class Grupo {
    
    id: number;
    nome: string;
    criado: Date;
    concluido: Date;

    constructor(obj:any) {
        this.id = obj.id;
        this.nome = obj.nome_tarefa;
        this.criado = obj.criado;
        this.concluido = obj.concluido;
    }

    static Concluido(grupo: Grupo): String{
        if (grupo.concluido == null){
            return '<span>Aberto</span>';
        }
        else{
            return '<span>Concluido</span>';
        }
    }
}
    