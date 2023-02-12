---
layout: post
title: "Hagamos eso de \"DevOps\" (Parte 1) - Por dónde empezar"
date: "2019-11-10"
tags: 
  - "agil"
  - "desarrollo"
  - "ingenieria-del-software"
  - "author-bcgrillo"
coverImage: "Captura-2.png"
---

![](/images/Captura-2.png)

Aunque DevOps como "movimiento" empezó hace muchos años (2007 o 2008, suena ya muy antiguo), son muchos los equipos que a día de hoy, por una razón o por otra, todavía no han dado ese paso. Es algo totalmente normal, al fin de cuentas DevOps es un componente cultural que hay que adquirir con la experiencia, nadie nace con él. Mientras se sigan formando nuevos profesionales, nuevos equipos, nuevos proyectos de desarrollo, seguirá siendo un hito de madurez a ser alcanzado, siempre habrá algún equipo empezando a hacer DevOps.

### ¿Qué es DevOps?

_"Nuestra mayor prioridad es satisfacer al cliente mediante la **entrega temprana y continua** de software con valor."_

Primer principio del [Manifiesto DevOps Ágil](http://agilemanifesto.org/iso/es/principles.html).

DevOps, en pocas palabras, es _Agile_. Se podría decir que DevOps es un conjunto de prácticas que buscan automatizar todo o parte del proceso de desarrollo software. José Ruiz cuenta en [este artículo en Paradigna Digital](https://www.paradigmadigital.com/techbiz/el-legendario-origen-del-movimiento-devops/) cómo el origen del término está totalmente relacionado con las metodologías ágiles. Mientras estas metodologías se centran en el proceso de desarrollo como un todo, DevOps se centra en la colaboración entre los equipos de desarrollo (_development_) y sistemas o infraestructura (_operations_), para dar respuesta a las necesidades que surgen de esa colaboración para la **entrega continua** del software, en otras palabras, para poder **subir a producción mucho, rápido y sin interrupciones de servicio**.

Si un equipo ágil es capaz de desarrollar código con calidad y entregar funcionalidad con mucha frecuencia, DevOps será lo que les ayude a eliminar esa barrera traumática que significa "subir a producción". Y ahora es cuando muchos ponen la mano en la cabeza... Tranquilos, sabemos lo que hacemos.

![](/images/tumblr_o0i4qgcmTc1r83ei3o1_500.gif)

### Todos tocan producción, nadie toca producción

Los desarrolladores entendemos los problemas derivados de los errores humanos durante un mantenimiento en producción, y vaya si lo sabemos, la mayoría hemos trabajado asumiendo ese rol una o varias veces en nuestra vida. Y cuando metíamos la pata, pues nos tocaba arreglarlo. Cuando este proceso se _burocratiza_ vemos como habitualmente nos pasamos de rosca y los pases a producción se vuelven lentos, llenos de formularios, tickets y compañeros de sistemas con caras largas mirándonos con la sospecha de que con esta subida vamos a provocar una alerta de fusión que ríete de Chernobyl. Los _developers_ somos así.

Así que para solucionar el problema dejamos la subida a producción en manos de equipos muy responsables pero que no harán nada que no esté correctamente definido, especificado y aprobado, por supuesto, como debe ser. Y por supuesto también, **todo será muchísimo más lento**.

A partir de ese momento, en algunos equipos de desarrollo y de sistemas aparecen personas cuerdas dispuestas a colaborar, eso es, a **hacer DevOps**. (Vale, a veces empieza siendo un poco por obligación.) Pero cuando lo hacen de verdad, todo es felicidad. Los de sistemas, que en eso siempre llevan la delantera, nos empiezan a preguntar porque no automatizamos algunos pasos, y los desarrolladores aportan los conocimientos sobre el producto para que esas automatizaciones sean posibles.

Ambos equipos entienden el problema del "todos tocan producción", por un lado, sistemas prefiere no hacerlo, por eso se busca la automatización completa del proceso, y los desarrollores entienden que en un proceso así, **es necesario poner otros puntos de control**, muy previos al despliegue, **que eviten la publicación de código que no tenga la calidad necesaria**. Al final, todo lo que hagan se acabará subiendo a producción, y el problema futuro podría ser peor que el que pretendían resolver.

### Por dónde empezar...

Durante los últimos años he podido participar en varios proyectos de "implantación DevOps" en importantes empresas, un error de definición importante, por cierto. Como decía, esto es cultura y **la cultura no se puede "implantar"**. En algunos he tenido más margen para enfocarlo como formación y mejora del proceso de desarrollo, en otros, el cliente ha exigido esa "implantación" en forma nuevas herramientas y normas, algo que tarde o temprano suele fracasar.

Lo ideal es revisar la madurez del equipo y de su proceso. Hay muchos requisitos previos, pero sobre todo deberíamos hacer hincapié en responder a estas preguntas:

- ¿Existe un proceso formal de desarrollo, lo conoce el equipo desarrollo y negocio?
- ¿Existen los entornos previos necesarios para llevar a cabo ese proceso? (desarrollo, integración, preproducción...)
- ¿Existe un sistema para la nomenclatura de versiones que permita conocer la naturaleza de una entrega? (por ejemplo, [Versionado Semántico](https://semver.org/lang/es/))
- ¿Existe una gestión de ramas adecuada que permite identificar en ella los despliegues en los distintos entornos? (por ejemplo, [Gitflow](https://nvie.com/posts/a-successful-git-branching-model/))
- ¿Existe una política de calidad definida y susceptible de ser automatizada? (cobertura de pruebas, análisis estático, seguridad...)

Mi idea es poder convertir este artículo una serie, ojalá saque tiempo para no demorar mucho, pero como introducción espero que os guste. En el siguiente artículo trataré la definición formal del proceso de desarrollo. No existe una metodología DevOps, al igual que [no existe una metodología ágil](https://lanalua.com/blog/ser-agil-no-lo-es-todo). **DevOps, la calidad y la agilidad, son solo ingredientes que se añaden a la cultura de un equipo u organización para la construcción de su propio proceso.**
