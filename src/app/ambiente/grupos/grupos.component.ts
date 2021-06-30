import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/shared/tarefa';
import { TarefaService } from 'src/app/ambiente/grupos/tarefas/tarefas.service';
import { Grupo } from 'src/app/shared/grupo';
import { GrupoService } from 'src/app/ambiente/grupos/grupos.service';
import { ActivatedRoute } from '@angular/router';
import { Retorno } from 'src/app/shared/retorno';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { DatePipe } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css'],
  providers:[
    GrupoService,
    TarefaService,
    DatePipe
  ]
})

export class GruposComponent implements OnInit{
  
  Grupos: Object[];
  retorno: Retorno;
  tarefa: Tarefa;
  form_tarefa: FormGroup;
  form_grupo: FormGroup;
  grupo: Grupo;
  tarefas:Tarefa[];
  grupos:Grupo[];
  myDate = new Date();

  constructor(
    private route: ActivatedRoute,
    private tarefaService: TarefaService,
    private grupoService: GrupoService,
    private formBuilder: FormBuilder,
  ) {}

  public novo_grupo = "";
  public nova_tarefa = "";
  
 



  ngOnInit() {
    this.tarefaService.getTarefas().subscribe(res => { 
        this.tarefas = res.map(tarefa => new Tarefa(tarefa));
      }
     )

     this.grupoService.getGrupos().subscribe(res => { 
      this.grupos = res.map(grupo => new Grupo(grupo));
    }
   )

   this.form_grupo = this.formBuilder.group({
    id: [this.grupo.id],
    nome: [this.grupo.nome],
    criado: [this.grupo.criado],
    concluido : [this.grupo.concluido]
   
  });

  this.form_tarefa = this.formBuilder.group({
    id: [this.tarefa.id],
    grupos_id: [this.tarefa.grupos_id],
    nome_tarefa: [this.tarefa.nome_tarefa],
    criado: [this.tarefa.criado],
    concluido: [this.tarefa.concluido]
   
  });

}

 /* 
 metodo a ser implementado caso haja tempo
 
 onDeleteGrupo() {

    this.grupoService.delete(this.form_grupo.value.id).subscribe(
      success => {
      },
      error => {
      }
    );

  } */

  addGrupo(){
    this.grupos.push({
      id:null,
      nome:this.novo_grupo,
      criado:this.myDate,
      concluido: null
    })
  }

  addTarefa(id){
    this.tarefas.push({
      id:null,
      grupos_id: id,
      nome_tarefa: this.nova_tarefa,
      criado:this.myDate,
      concluido: null
    })
  }

  removeGrupo(id:number){
    this.grupos = this.grupos.filter((v,i)=>i!==id);
  }

  removeTarefa(id:number){
    this.tarefas = this.tarefas.filter((v,i)=>i!==id);
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }
}




