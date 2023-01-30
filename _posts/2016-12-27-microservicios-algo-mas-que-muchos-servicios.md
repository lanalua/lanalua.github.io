---
title: "Microservicios - Algo más que muchos servicios"
date: "2016-12-27"
categories: 
  - "desarrollo"
tags: 
  - "arquitectura"
  - "diseno-emergente"
  - "microservicios"
coverImage: "microservicios.jpg"
---

#### \-Arquitectura de Microservicios-

Desde que lo escuché por primera vez, hace más o menos dos años, este término empezó sonar cada vez más a menudo. Realmente lleva más tiempo, al menos desde unos años antes, definiendo un estilo arquitectónico que [James Lewis y Martin Fowler](http://martinfowler.com/articles/microservices.html) describieron como un conjunto de pequeños servicios que se comunican entre si, normalmente, a través de HTTP.

No obstante, no cualquier [arquitectura orientada a servicios](https://es.wikipedia.org/wiki/Arquitectura_orientada_a_servicios) construye microservicios. En esta entrada trataré de resumir algunas características que dieron origen al término y lo hicieron tan atractivo, y con las que muchos desarrolladores nos hemos encontrado estos últimos años.

 

#### \-Características comunes-

Como dice el artículo de Lewis y Fowler, no existe una definición formal, pero sí algunas características comunes que esperaríamos encontrar en estas arquitecturas. En mi opinión, éstas serían las más importantes:

- _Componentes como servicios_

Una arquitectura de microservicios tratará de reflejar los componentes como servicios siempre que sea posible, ya que de ese modo pueden ser desplegados de forma independiente, facilitando el **mantenimiento**, la **escalabilidad** y reduciendo el acoplamiento.

- _Organización en torno a áreas del negocio_

La aplicación se dividirá en servicios en torno a áreas del negocio (pedidos, logística, facturación...) que requerirá equipos multifuncionales, en lugar de en torno a la tecnología (interfaz de usuario, lógica de negocio y base de datos), que suele responder a la [Ley de Conway](https://en.wikipedia.org/wiki/Conway%27s_law), y propicia la aparición de lógica en todas partes.

- _Endpoints inteligentes y tuberías tontas_

La arquitectura de microservicios favorece este enfoque frente al desarrollo de mecanismos de comunicación sofisticados, como los [ESB](https://es.wikipedia.org/wiki/Enterprise_service_bus), que a menudo incluyen lógicas complejas para el enrutamiento de mensajes, la transformación e incluso la aplicación de reglas de negocio.

- _Automatización de la infraestructura_

Algunas de las características citadas como la facilidad del mantenimiento, la escalabilidad y los equipos multifuncionales, se complementan con técnicas de automatización de pruebas, de **integración y entrega continua** y de implementación de nuevos entornos, que se aplican de forma más sencilla en estos pequeños servicios.

- _Diseño emergente_

La implementación de componentes como servicios nos da más flexibilidad en las entregas, algo que debe ser aprovechado para **facilitar el cambio y lograr un [diseño emergente](https://lanalua.com/blog/tdd-parte-2-arquitectura-evolutiva-y-diseno-emergente)**.

![microservicios](/images/microservicios-1.jpg)

Por otro lado, como bien apunta Ana M. Del Carmen en el blog de Javier Garzás, hay pros y contras, y los microservicios introducen complejidad a la solución. Podéis repasar algunos retos y consejos en su artículo: [¿Qué es eso de los microservicios?](http://www.javiergarzas.com/2015/06/microservicios.html)

 

#### \-Algo más que muchos servicios-

Se podría decir que esto no son más que servicios con una [granularidad](https://en.wikipedia.org/wiki/Service_granularity_principle) muy fina, o que surgen como una arquitectura SOA bien hecha. [Sam Newman](http://samnewman.io/) lo describe es su libro como una tendencia que ha surgido de forma natural:

_Diseño guiado por el dominio. Entrega continua. Virtualización bajo demanda. Automatización de la infraestructura. Pequeños equipos autónomos. Sistemas a escala. Los microservicios han surgido en este mundo. No se inventaron ni se describieron antes de utilizarse; surgieron como una tendencia, o un patrón, a partir de su uso en el mundo real. Sin embargo, solo existen gracias a lo que ha ocurrido anteriormente._ Sam Newman (2015). [Building Microservices](http://samnewman.io/books/building_microservices/).

Desde luego esto es algo más que muchos servicios, como dice Newman, los microservicios son un estilo arquitectónico que surge a partir de varias técnicas que han dado buenos resultados en el mundo del desarrollo. Este estilo, además, propicia el uso y la mejora de estas técnicas. **La unión perfecta**.
