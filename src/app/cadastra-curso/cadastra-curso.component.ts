import { Component, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-cadastra-curso',
  templateUrl: './cadastra-curso.component.html',
  styleUrls: ['./cadastra-curso.component.css']
})
export class CadastraCursoComponent {

  @Output() onClickCadastraCurso = new EventEmitter();

      
      adicionarCurso(nome, carga_hora){
        const curso = {nome, carga_hora}

        this.onClickCadastraCurso.emit(curso); 
            

      }


}
