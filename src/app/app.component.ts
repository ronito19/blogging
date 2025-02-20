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
      fecha: new Date('2024-01-08'),
      tipo: 'Tecnologia'
    },
    {
      title: '¡Increíble! Se ha batido el récord mundial de Super Mario Bros., un jugador ha logrado lo que parecía imposible',
      url: 'https://i.blogs.es/c6e945/super-mario-bros/840_560.jpeg',
      texto: 'La comunidad speedrun acaba de presenciar un acontecimiento extraordinario. Un jugador ha batido el récord mundial de Super Mario Bros., el título lanzado allá por 1985 para NES. Concretamente, el usuario Niftski ha terminado la aventura del fontanero de Nintendo en 4 minutos, 54 segundos y 565 milisegundos. Un hito que pudo conseguir tras más de un año de entrenamiento constante y que ya ha captado la atención de miles de jugadores. Niftski ha compartido su run en un vídeo de YouTube para demostrar que no ha usado software que pudiera facilitar la obtención del récord. Y es que el speedrun alrededor de Super Mario Bros. ha llegado a un perfeccionismo prácticamente extremo; la marca anterior se establecía en los 4 minutos, 54 segundos y 864 milisegundos. En otras palabras, los speedrunners ahora están compitiendo para reducir el número de milisegundos que les toma terminar el juego. De hecho, la comunidad no está lejos de la partida perfecta. Según los cálculos realizados hasta el momento, la manera más rápida de finalizar Super Mario Bros. (con una run tan perfecta que, por ahora, sólo pueden hacer las máquinas) tomaría 4 minutos, 54 segundos y 282 milisegundos. Por lo tanto, Niftski está a menos de 0,3 segundos de conseguir un speedrun sin errores. Quedará por ver si este u otro usuario es capaz de imitar las capacidades de un ordenador para llevar a cabo tal hazaña.',
      fecha: new Date('2025-02-15'),
      tipo: 'Aventura'
    },
    {
      title: 'El asteroide 2024 YR4 podría chocar con la Tierra en 7 años. Esto es lo que se está haciendo al respecto.',
      url: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yLpBj.img?w=768&h=432&m=6',
      texto: 'Un asteroide descubierto recientemente, llamado 2024 YR4, tiene en promedio un 2% de probabilidad de impactar la Tierra en 2032. Aunque esas probabilidades de un impacto son bajas, los astrónomos están siguiendo de cerca la roca espacial para descubrir más detalles, un proceso que pronto podría involucrar al observatorio más poderoso jamás lanzado al espacio. No se sabe mucho sobre 2024 YR4, pero se estima que el asteroide mide entre 40 y 90 metros (131 a 295 pies) de ancho, un “rango de tamaño comparable al de un gran edificio”, dijo el Dr. Paul Chodas, director del Centro para Estudios de Objetos Cercanos a la Tierra, o CNEOS por sus siglas en inglés, en el Laboratorio de Propulsión a Chorro de la NASA en Pasadena, California. Eso ni siquiera se acerca al tamaño del asteroide “asesino de planetas” que chocó contra la Tierra hace 66 millones de años y llevó a la extinción de los dinosaurios. Se estima que ese medía aproximadamente 10 kilómetros (6.2 millas) de diámetro y marcó el último gran asteroide conocido en impactar nuestro mundo. Los asteroides “asesinos de planetas” son rocas espaciales que tienen 1 kilómetro de ancho o más y podrían tener un efecto devastador en la vida.',
      fecha: new Date('2023-10-07'),
      tipo: 'Tecnologia'
    }
  ];

  arrayNews: INews[] = [
    {
      title: 'Los más ricos de España en 2025: de Amancio Ortega a Rafa Nadal, pasando por Florentino Pérez',
      url: 'https://phantom-elmundo.unidadeditorial.es/a348e8166dcc15ca686241fed082e234/resize/920/f/webp/assets/multimedia/imagenes/2025/02/18/17399184353463.jpg',
      texto: 'Las mayores fortunas por sectores han vuelto a ser desveladas por el diario El Mundo, donde se ponen de manifiesto qué familias y personas son las más ricas de España en 2025. En el sector empresarial al deporte destacan varios nombres propios y, en contrato, una familia en particular: los Roig. A partir de ahí, según explican en esta cabecera la base del cómputo es el patrimonio neto de las empresas.Encabezando esta lista de grandes fortunas encontramos, un año más, al magnate Amancio Ortega. El dueño de Inditex ha duplicado su patrimonio en la última década. En este último curso, sin ir más lejos, ha ingresado 25.000 millones de euros más para su bolsillo. Su patrimonio neto total, según El Mundo, roza ya los 120.000 millones de euros.',
      fecha: new Date('2025-02-17'),
      tipo: 'Deporte'
    },
    {
      title: 'El microchip de Nvidia rompe las leyes de Moore',
      url: 'https://fotografias.larazon.es/clipping/cmsimages01/2025/01/08/F0FE73CF-03B3-4494-A280-BEE0E9E339D7/jensen-huang-presentacion-sus-ultimos-microchips_94.jpg?crop=1218,685,x0,y30&width=800&height=450&optimize=medium&format=webply',
      texto: 'En 1965, uno de los fundadores de Intel postuló una ley que, desde entonces, se ha confirmado de forma empírica: cada 18 meses el número de transistores en un microchip se duplica. Hasta ahora esta era una guía en lo que respecta al avance tecnológico. Pero la llegada de la inteligencia artificial tenía todas las bazas para modificar esto. Y, de acuerdo con Jensen Huang, el CEO de Nvidia, esto ya ha ocurrido.Huang afirma que los chips de IA de Nvidia se están moviendo a un ritmo acelerado propio; la compañía dice que su último superchip para centros de datos es más de 30 veces más rápido para ejecutar cargas de trabajo de inferencia de IA que su generación anterior. A esto hay que sumarle que Huang rechaza la idea de que el progreso de la IA se esté desacelerando. En cambio, afirma que ahora hay tres leyes de escalamiento de la IA activas: preentrenamiento, la fase de entrenamiento inicial donde los modelos de IA aprenden patrones a partir de grandes cantidades de datos; postentrenamiento, que afina las respuestas de un modelo de IA utilizando métodos como la retroalimentación humana; y computación en tiempo de prueba, que ocurre durante la fase de inferencia y le da al modelo de IA más tiempo para "pensar" después de cada pregunta.',
      fecha: new Date('2022-01-08'),
      tipo: 'Tecnologia'
    },
    {
      title: '¡Increíble! Se ha batido el récord mundial de Super Mario Bros., un jugador ha logrado lo que parecía imposible',
      url: 'https://i.blogs.es/c6e945/super-mario-bros/840_560.jpeg',
      texto: 'La comunidad speedrun acaba de presenciar un acontecimiento extraordinario. Un jugador ha batido el récord mundial de Super Mario Bros., el título lanzado allá por 1985 para NES. Concretamente, el usuario Niftski ha terminado la aventura del fontanero de Nintendo en 4 minutos, 54 segundos y 565 milisegundos. Un hito que pudo conseguir tras más de un año de entrenamiento constante y que ya ha captado la atención de miles de jugadores. Niftski ha compartido su run en un vídeo de YouTube para demostrar que no ha usado software que pudiera facilitar la obtención del récord. Y es que el speedrun alrededor de Super Mario Bros. ha llegado a un perfeccionismo prácticamente extremo; la marca anterior se establecía en los 4 minutos, 54 segundos y 864 milisegundos. En otras palabras, los speedrunners ahora están compitiendo para reducir el número de milisegundos que les toma terminar el juego. De hecho, la comunidad no está lejos de la partida perfecta. Según los cálculos realizados hasta el momento, la manera más rápida de finalizar Super Mario Bros. (con una run tan perfecta que, por ahora, sólo pueden hacer las máquinas) tomaría 4 minutos, 54 segundos y 282 milisegundos. Por lo tanto, Niftski está a menos de 0,3 segundos de conseguir un speedrun sin errores. Quedará por ver si este u otro usuario es capaz de imitar las capacidades de un ordenador para llevar a cabo tal hazaña.',
      fecha: new Date('2025-02-15'),
      tipo: 'Aventura'
    },
    {
      title: 'El asteroide 2024 YR4 podría chocar con la Tierra en 7 años. Esto es lo que se está haciendo al respecto.',
      url: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yLpBj.img?w=768&h=432&m=6',
      texto: 'Un asteroide descubierto recientemente, llamado 2024 YR4, tiene en promedio un 2% de probabilidad de impactar la Tierra en 2032. Aunque esas probabilidades de un impacto son bajas, los astrónomos están siguiendo de cerca la roca espacial para descubrir más detalles, un proceso que pronto podría involucrar al observatorio más poderoso jamás lanzado al espacio. No se sabe mucho sobre 2024 YR4, pero se estima que el asteroide mide entre 40 y 90 metros (131 a 295 pies) de ancho, un “rango de tamaño comparable al de un gran edificio”, dijo el Dr. Paul Chodas, director del Centro para Estudios de Objetos Cercanos a la Tierra, o CNEOS por sus siglas en inglés, en el Laboratorio de Propulsión a Chorro de la NASA en Pasadena, California. Eso ni siquiera se acerca al tamaño del asteroide “asesino de planetas” que chocó contra la Tierra hace 66 millones de años y llevó a la extinción de los dinosaurios. Se estima que ese medía aproximadamente 10 kilómetros (6.2 millas) de diámetro y marcó el último gran asteroide conocido en impactar nuestro mundo. Los asteroides “asesinos de planetas” son rocas espaciales que tienen 1 kilómetro de ancho o más y podrían tener un efecto devastador en la vida.',
      fecha: new Date('2023-10-07'),
      tipo: 'Tecnologia'
    }
  ];


  


  getDataForm(newItem: INews): void {
    
    this.arrayNews.push(newItem);
    this.newList = [...this.newList, newItem];
    console.log('Noticia agregada en la lista y el la new-card:', newItem);

  }


  goToNews(news: INews): void {
    console.log('Ir a la noticia:', news);
  }

}
