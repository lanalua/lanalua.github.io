---
layout: post
title: "TDD (Parte 2) - Arquitectura evolutiva y diseño emergente"
date: "2016-12-06"
categories: 
  - "metodologias"
tags: 
  - "agil"
  - "arquitectura"
  - "diseno-emergente"
  - "tdd"
  - "author-bcgrillo"
---

#### \-La ventaja de mantenerlo simple-

En la [primera parte](https://lanalua.com/blog/tdd-el-desarrollo-dirigido-por-los-requisitos-parte-1) de esta serie de entradas remarcaba que, desde mi punto de vista, la principal ventaja de utilizar ATDD era que siempre obtendríamos la solución más simple, o al menos en teoría. Está claro que esta ventaja no es exclusiva de esta metodología, se trata de uno de los pilares del _Agilismo_, pero creo que ATDD tiene la estrategia más eficaz para conseguirlo, y si pudiera exportar una sola de sus características, sin duda sería ésta: **la arquitectura evolutiva y el diseño emergente**.

Cuando lo escuché por primera vez fui bastante escéptico, lo admito. Una cosa es retrasar las grandes decisiones sobre la arquitectura, pero otra diferente es no decidir. Pero lo que sucede es que muchas veces mezclamos los conceptos de arquitectura y diseño, como dice [Carlos Blé en su libro sobre TDD](http://librosweb.es/libro/tdd/capitulo_2.html), cuando eliges trabajar en Django o ASP.NET MVC, ya has definido una buena parte de la arquitectura, y si necesitas interoperabilidad, probablemente necesites servicios web... Realmente hablamos de no decidir el diseño, tratar de que la arquitectura sea flexible y pueda evolucionar, y lo más importante, conseguir que ambos sean algo consensuado dentro del equipo:

_"Las mejores arquitecturas, requisitos y diseños emergen de equipos auto-organizados"_

[Unos tíos que saben algo de esto](http://agilemanifesto.org/authors.html) (2001). [Manifiesto Ágil](http://agilemanifesto.org/iso/es/principles.html).

 

#### \-A**rquitectura evolutiva y diseño emergente**\-

La separación de los dos conceptos y la distinción entre evolutivo y emergente lo explica muy bien [Neal Ford](http://nealford.com/) en el [primer artículo de la serie](http://www.ibm.com/developerworks/ssa/java/library/j-eaed1/) a la que tomé prestado el título para esta entrada.

En resumen define la arquitectura como aquello que es difícil de cambiar y que debe existir antes de que empieces a desarrollar (por ello, no puede surgir durante el desarrollo), no obstante, puede ser flexible, puede no ser irreversible, puede evolucionar. El diseño se apoyará en la arquitectura, y sí puede emerger durante el desarrollo sin necesidad de que se decida de antemano.

¿Entonces no podemos utilizar un patrón de diseño? Sí, pero lo haremos porque durante el desarrollo ha surgido esa necesidad, y no porque funcionó bien en el último proyecto. Se trata de evitar la complejidad accidental, de la que también habla Neal en el mismo artículo:

_"Los problemas que resolvemos en software tienen una complejidad intrínseca, a la que llamo complejidad esencial. La complejidad que surge de los compromisos que hacemos que generan [deuda técnica](https://es.wikipedia.org/wiki/Deuda_t%C3%A9cnica) es diferente, consta de todos los medios externos por los cuales el software se torna complejo y no debería existir en un mundo perfecto. Llamo a esto complejidad accidental."_

Neal Ford (2010). [Arquitectura evolutiva y diseño emergente](http://www.ibm.com/developerworks/ssa/java/library/j-eaed1/).

 

#### \-You Ain't Gonna Need It-

Con ATDD deberemos transformar los requisitos en pruebas de aceptación y todo el esfuerzo deberá ir destinado a construir el software que cumpla dichas pruebas, evitando tomar decisiones de diseño para que éste pueda emerger como parte de la solución, evitando la complejidad accidental.

En cuanto a la arquitectura, como buena práctica, retrasaremos las grandes decisiones, y cuando sea necesario decidirse, lo haremos junto al equipo, intentando optar por arquitecturas flexibles, reversibles y que puedan evolucionar.

Como terminé la primera parte citando el principio KISS, creo que este otro acrónimo, [YAGNI](https://es.wikipedia.org/wiki/YAGNI), también nos puede ser muy útil cuando buscamos la solución más sencilla: No lo vas a necesitar. Implementemos ahora lo que necesitamos ahora.
