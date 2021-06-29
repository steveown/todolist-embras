import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/shared/tarefa';
import { TarefaService } from 'src/app/ambiente/grupos/tarefas/tarefas.service';
import { Grupo } from 'src/app/shared/grupo';
import { GrupoService } from 'src/app/ambiente/grupos/grupos.service';
import { ActivatedRoute } from '@angular/router';
import { Retorno } from 'src/app/shared/retorno';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-grupos',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class GruposComponent implements OnInit{
  
  Grupos: Object[];
  retorno: Retorno;
  tarefa: Tarefa;
  grupo: Grupo;

  constructor(
    private route: ActivatedRoute,
    private tarefa_service: TarefaService,
    private grupo_service: GrupoService
  ) {}

  ngOnInit() {

    this.tarefa = this.route.snapshot.data.retorno.objeto;
    
    this.grupo = this.route.snapshot.data.retorno.objeto;
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




