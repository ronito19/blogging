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
      tipo: 'Vivienda'
    },
    {
      title: 'El Papa Francisco, ingresado en el hospital a causa de una bronquitis',
      url: 'https://imagenes.elpais.com/resizer/v2/ST6342DUOTZHFYVENFSVXK7BEI.jpg?auth=2c054350c4ffcbe0b1b4be459f74b6864d13fa05db1f9c149054018cdd2360ba&width=980',
      texto: 'La bronquitis del Pontífice, que ya es el Papa más anciano desde que León XIII falleció en 1903 con 93 años, no es ningún secreto. Él mismo anunció que la padecía en la audiencia semanal del miércoles de la semana pasada, 5 de febrero, aunque la describió como “un fuerte resfriado”. Este domingo renunció a leer su discurso “por la dificultad para respirar”, y pasó el texto a un colaborador, y anteayer, en la audiencia general, volvió a pasar lo mismo, delegó la lectura. “Porque yo con mi bronquitis no puedo todavía”, se excusó. Ha permanecido en su residencia, pero ha seguido manteniendo su agenda de encuentros, afrontando la enfermedad como una molestia pasajera. Hasta hoy.',
      fecha: new Date('2025-01-09'),
      tipo: 'Salud'
    },
    {
      title: 'Los españoles más ricos del deporte',
      url: 'https://e00-xlk-ue-marca.uecdn.es/uploads/2025/02/17/67b309184bd28.png',
      texto: 'Las mayores fortunas por sectores han vuelto a ser desveladas por el diario El Mundo, donde se ponen de manifiesto qué familias y personas son las más ricas de España en 2025. En el sector empresarial al deporte destacan varios nombres propios y, en contrato, una familia en particular: los Roig. A partir de ahí, según explican en esta cabecera la base del cómputo es el patrimonio neto de las empresas.',
      fecha: new Date('2025-02-17'),
      tipo: 'Deporte'
    },
    {
      title: 'El microchip de Nvidia rompe las leyes de Moore',
      url: 'https://fotografias.larazon.es/clipping/cmsimages01/2025/01/08/F0FE73CF-03B3-4494-A280-BEE0E9E339D7/jensen-huang-presentacion-sus-ultimos-microchips_94.jpg?crop=1218,685,x0,y30&width=800&height=450&optimize=medium&format=webply',
      texto: 'En 1965, uno de los fundadores de Intel postuló una ley que, desde entonces, se ha confirmado de forma empírica: cada 18 meses el número de transistores en un microchip se duplica. Hasta ahora esta era una guía en lo que respecta al avance tecnológico. Pero la llegada de la inteligencia artificial tenía todas las bazas para modificar esto. Y, de acuerdo con Jensen Huang, el CEO de Nvidia, esto ya ha ocurrido.Huang afirma que los chips de IA de Nvidia se están moviendo a un ritmo acelerado propio; la compañía dice que su último superchip para centros de datos es más de 30 veces más rápido para ejecutar cargas de trabajo de inferencia de IA que su generación anterior.',
      fecha: new Date('2025-01-08'),
      tipo: 'Tecnologia'
    },
    {
      title: 'Muere Kim Sae-ron, la actriz surcoreana estrella de Netflix, a los 24 años',
      url: 'https://imagenes.elpais.com/resizer/v2/5TEMOKBKOZFXRKOGIT26BMDUX4.jpg?auth=31dc7b812c67dbf728db630f1d384068edee981f201453387760758c5205f4cc&width=980',
      texto: 'La actriz surcoreana Kim Sae-ron, de 24 años, conocida por su papel en las series Sabuesos de Netflix y Besos y presagios de Disney+, fue encontrada muerta en su casa al este de Seúl en la tarde de este domingo (hora local), según informó la policía. Fue un amigo, que tenía planes de reunirse con ella, quien descubrió el cuerpo e informó a las autoridades, que se personaron en la vivienda. “No hemos encontrado ningún indicio de crimen hasta el momento, pero estamos investigando las circunstancias de la muerte”, dijo un oficial de policía a la agencia local surcoreana Yonhap. Kim fue sorprendida conduciendo bajo los efectos del alcohol en 2022 tras estrellar su automóvil contra una barandilla y un transformador y fuera sentenciada a una multa de 20 millones de wones (13.000 euros).',
      fecha: new Date('2025-02-17'),
      tipo: 'Actualidad'
    },
    {
      title: 'Por qué el jamón curado es bueno para la salud?',
      url: 'https://www.abc.es/contentfactory/post/wp-content/uploads/2019/11/FOTO-Planta-Jamones-1024x1024.jpg',
      texto: '¿Qué beneficios tiene el jamón curado para la salud? El Pozo Alimentación quiere responder a esa pregunta y, por esta razón, está realizando junto al Instituto de Agroquímica y Tecnología de Alimentos del CSIC (IATA) y a la Universidad Católica San Antonio de Murcia (UCAM) un proyecto de investigación para demostrar científicamente que el consumo de jamón curado puede aportar beneficios saludables para el bienestar del consumidor. En estos momentos, se está profundizando en el conocimiento de los efectos cardiosaludables del consumo de jamón curado y en concreto, del jamón ELPOZO, elaborado cada vez con menor contenido de sal y por ser rico en péptidos bioactivos con capacidad de regular potencialmente la presión arterial, así como la glucemia y el colesterol plasmático. Así lo dejaron patente los directores científicos del estudio, el doctor Fidel Toldrá, profesor de Investigación en el Instituto de Agroquímica y Tecnología de Alimentos del CSIC en Valencia, y el doctor José Abellán, presidente de la Sociedad Murciana de HTA, en la Reunión Nacional de Hipertensión Arterial, recientemente celebrada y, considerada como uno de los eventos de referencia en materia de prevención del riesgo cardiovascular.',
      fecha: new Date('2020-10-21'),
      tipo: 'Ciencia'
    },
  ];

  arrayNews: INews[] = [
    {
      title: 'El indice de actualizacion de alquileres baja en enero al 2,19%', 
      url: 'https://imagenes.elpais.com/resizer/v2/GDIBCPFOYZCRPAZTO24ZMZI5CU.jpg?auth=34099f8383f328371bcf24cb41f9df07a750b643663eb08b988311e94f6a11ed&width=980', 
      texto: 'El Índice de referencia para la actualización anual de los contratos de alquiler bajó el enero hasta el 2,19%, su cota más baja en los tres meses para los que ofrece datos el Instituto Nacional de Estadística (INE). En diciembre había marcado un 2,28%, por encima del 2,20% en noviembre. El nuevo indicador sirve para fijar el porcentaje máximo que pueden subir los alquileres cuando les corresponde hacer la actualización anual de rentas. Pero de momento solo se aplica para los contratos firmados desde el 25 de mayo de 2023 en adelante. Esa es la fecha en la que entró en vigor de la ley estatal de vivienda, que es la norma que alumbró legalmente el nuevo sistema',
      fecha: new Date('2025-02-14'), 
      tipo: 'Vivienda'
    },
    {
      title: 'El Papa Francisco, ingresado en el hospital a causa de una bronquitis',
      url: 'https://imagenes.elpais.com/resizer/v2/ST6342DUOTZHFYVENFSVXK7BEI.jpg?auth=2c054350c4ffcbe0b1b4be459f74b6864d13fa05db1f9c149054018cdd2360ba&width=980',
      texto: 'La bronquitis del Pontífice, que ya es el Papa más anciano desde que León XIII falleció en 1903 con 93 años, no es ningún secreto. Él mismo anunció que la padecía en la audiencia semanal del miércoles de la semana pasada, 5 de febrero, aunque la describió como “un fuerte resfriado”. Este domingo renunció a leer su discurso “por la dificultad para respirar”, y pasó el texto a un colaborador, y anteayer, en la audiencia general, volvió a pasar lo mismo, delegó la lectura. “Porque yo con mi bronquitis no puedo todavía”, se excusó. Ha permanecido en su residencia, pero ha seguido manteniendo su agenda de encuentros, afrontando la enfermedad como una molestia pasajera. Hasta hoy.',
      fecha: new Date('2025-01-09'),
      tipo: 'Salud'
    },
    {
      title: 'Los españoles más ricos del deporte',
      url: 'https://e00-xlk-ue-marca.uecdn.es/uploads/2025/02/17/67b309184bd28.png',
      texto: 'Las mayores fortunas por sectores han vuelto a ser desveladas por el diario El Mundo, donde se ponen de manifiesto qué familias y personas son las más ricas de España en 2025. En el sector empresarial al deporte destacan varios nombres propios y, en contrato, una familia en particular: los Roig. A partir de ahí, según explican en esta cabecera la base del cómputo es el patrimonio neto de las empresas.',
      fecha: new Date('2025-02-17'),
      tipo: 'Deporte'
    },
    {
      title: 'El microchip de Nvidia rompe las leyes de Moore',
      url: 'https://fotografias.larazon.es/clipping/cmsimages01/2025/01/08/F0FE73CF-03B3-4494-A280-BEE0E9E339D7/jensen-huang-presentacion-sus-ultimos-microchips_94.jpg?crop=1218,685,x0,y30&width=800&height=450&optimize=medium&format=webply',
      texto: 'En 1965, uno de los fundadores de Intel postuló una ley que, desde entonces, se ha confirmado de forma empírica: cada 18 meses el número de transistores en un microchip se duplica. Hasta ahora esta era una guía en lo que respecta al avance tecnológico. Pero la llegada de la inteligencia artificial tenía todas las bazas para modificar esto. Y, de acuerdo con Jensen Huang, el CEO de Nvidia, esto ya ha ocurrido.Huang afirma que los chips de IA de Nvidia se están moviendo a un ritmo acelerado propio; la compañía dice que su último superchip para centros de datos es más de 30 veces más rápido para ejecutar cargas de trabajo de inferencia de IA que su generación anterior.',
      fecha: new Date('2025-01-08'),
      tipo: 'Tecnologia'
    },
    {
      title: 'Muere Kim Sae-ron, la actriz surcoreana estrella de Netflix, a los 24 años',
      url: 'https://imagenes.elpais.com/resizer/v2/5TEMOKBKOZFXRKOGIT26BMDUX4.jpg?auth=31dc7b812c67dbf728db630f1d384068edee981f201453387760758c5205f4cc&width=980',
      texto: 'La actriz surcoreana Kim Sae-ron, de 24 años, conocida por su papel en las series Sabuesos de Netflix y Besos y presagios de Disney+, fue encontrada muerta en su casa al este de Seúl en la tarde de este domingo (hora local), según informó la policía. Fue un amigo, que tenía planes de reunirse con ella, quien descubrió el cuerpo e informó a las autoridades, que se personaron en la vivienda. “No hemos encontrado ningún indicio de crimen hasta el momento, pero estamos investigando las circunstancias de la muerte”, dijo un oficial de policía a la agencia local surcoreana Yonhap. Kim fue sorprendida conduciendo bajo los efectos del alcohol en 2022 tras estrellar su automóvil contra una barandilla y un transformador y fuera sentenciada a una multa de 20 millones de wones (13.000 euros).',
      fecha: new Date('2025-02-17'),
      tipo: 'Actualidad'
    },
    {
      title: 'Por qué el jamón curado es bueno para la salud?',
      url: 'https://www.abc.es/contentfactory/post/wp-content/uploads/2019/11/FOTO-Planta-Jamones-1024x1024.jpg',
      texto: '¿Qué beneficios tiene el jamón curado para la salud? El Pozo Alimentación quiere responder a esa pregunta y, por esta razón, está realizando junto al Instituto de Agroquímica y Tecnología de Alimentos del CSIC (IATA) y a la Universidad Católica San Antonio de Murcia (UCAM) un proyecto de investigación para demostrar científicamente que el consumo de jamón curado puede aportar beneficios saludables para el bienestar del consumidor. En estos momentos, se está profundizando en el conocimiento de los efectos cardiosaludables del consumo de jamón curado y en concreto, del jamón ELPOZO, elaborado cada vez con menor contenido de sal y por ser rico en péptidos bioactivos con capacidad de regular potencialmente la presión arterial, así como la glucemia y el colesterol plasmático. Así lo dejaron patente los directores científicos del estudio, el doctor Fidel Toldrá, profesor de Investigación en el Instituto de Agroquímica y Tecnología de Alimentos del CSIC en Valencia, y el doctor José Abellán, presidente de la Sociedad Murciana de HTA, en la Reunión Nacional de Hipertensión Arterial, recientemente celebrada y, considerada como uno de los eventos de referencia en materia de prevención del riesgo cardiovascular.',
      fecha: new Date('2020-10-21'),
      tipo: 'Ciencia'
    }
  ]

  getDataForm(event: INews) {
    this.newList = [...this.newList, event]

  }
}
