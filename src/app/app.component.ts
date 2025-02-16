import { Component } from '@angular/core';
import { NewFormComponent } from "./components/new-form/new-form.component";
import { NewListComponent } from "./components/new-list/new-list.component";
import { NewsComponent } from "./components/news/news.component";
import { INews } from './interfaces/inews.interface';

@Component({
  selector: 'app-root',
  imports: [NewFormComponent, NewListComponent, NewsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  fecha: Date = new Date();
  newList: INews[] = [
    {
      title: 'El indice de actualizacion de alquileres baja en enero al 2,19%', 
      url: 'https://imagenes.elpais.com/resizer/v2/GDIBCPFOYZCRPAZTO24ZMZI5CU.jpg?auth=34099f8383f328371bcf24cb41f9df07a750b643663eb08b988311e94f6a11ed&width=980', 
      texto: 'El Índice de referencia para la actualización anual de los contratos de alquiler bajó el enero hasta el 2,19%, su cota más baja en los tres meses para los que ofrece datos el Instituto Nacional de Estadística (INE). En diciembre había marcado un 2,28%, por encima del 2,20% en noviembre. El nuevo indicador sirve para fijar el porcentaje máximo que pueden subir los alquileres cuando les corresponde hacer la actualización anual de rentas. Pero de momento solo se aplica para los contratos firmados desde el 25 de mayo de 2023 en adelante. Esa es la fecha en la que entró en vigor de la ley estatal de vivienda, que es la norma que alumbró legalmente el nuevo sistema',
      fecha: new Date('2025-02-14'), 
      tipo: 'vivienda'
    },
    {
      title: 'El Papa Francisco, ingresado en el hospital a causa de una bronquitis',
      url: 'https://imagenes.elpais.com/resizer/v2/ST6342DUOTZHFYVENFSVXK7BEI.jpg?auth=2c054350c4ffcbe0b1b4be459f74b6864d13fa05db1f9c149054018cdd2360ba&width=980',
      texto: 'La bronquitis del Pontífice, que ya es el Papa más anciano desde que León XIII falleció en 1903 con 93 años, no es ningún secreto. Él mismo anunció que la padecía en la audiencia semanal del miércoles de la semana pasada, 5 de febrero, aunque la describió como “un fuerte resfriado”. Este domingo renunció a leer su discurso “por la dificultad para respirar”, y pasó el texto a un colaborador, y anteayer, en la audiencia general, volvió a pasar lo mismo, delegó la lectura. “Porque yo con mi bronquitis no puedo todavía”, se excusó. Ha permanecido en su residencia, pero ha seguido manteniendo su agenda de encuentros, afrontando la enfermedad como una molestia pasajera. Hasta hoy.',
      fecha: new Date('2025-02-09'),
      tipo: 'religiosa'
    },
  ];

  getDataForm(event: INews) {
    this.newList = [...this.newList, event]

  }
}
