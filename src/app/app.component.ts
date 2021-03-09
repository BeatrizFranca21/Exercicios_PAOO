import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    cursos = [
      {
        nome:"Java",
        carga_hora:100
      },
      {
        nome:"C",
        carga_hora:80
      }
    ]

    adicionar(curso){
      this.cursos.push(curso);

    }
}
