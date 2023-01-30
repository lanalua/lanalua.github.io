---
title: "TDD (Parte 1) - El desarrollo dirigido por los requisitos"
date: "2016-09-04"
categories: 
  - "metodologias"
tags: 
  - "calidad"
  - "tdd"
  - "testing"
---

#### \-Desarrollo dirigido por pruebas _los requisitos_\-

Coincido con [Carlos Blé, que coincide con Peter Provost](http://librosweb.es/libro/tdd/capitulo_2.html), el nombre de "desarrollo dirigido por pruebas" es un tanto desafortunado. Esta técnica, que consiste en escribir las pruebas primero, para después escribir el código y, por último, refactorizar, en realidad se basa en los requisitos.

TDD es la repetición de este [pequeño ciclo PDCA](https://es.wikipedia.org/wiki/C%C3%ADrculo_de_Deming), en el que deberemos **convertir los requisitos en casos de prueba muy específicos**. Todo el código escrito deberá responder a una prueba definida previamente.

Esta práctica siempre me ha despertado mucho interés, y en esta primera entrada me gustaría centrarme en el primer paso, en mi opinión el más importante: **la gestión de los requisitos**.

 

#### \-¿TDD o ATDD?-

Si hablamos de requisitos, hablamos de pruebas de aceptación, y por lo tanto de ATDD (desarrollo dirigido por pruebas de aceptación). No quiero complicarlo mucho, pero es cierto que hay diferencia.

TDD es una técnica de programación y ATDD, [una metodología de desarrollo](https://en.wikipedia.org/wiki/Acceptance_test%E2%80%93driven_development). Aunque todos los textos sobre TDD hablan de los requisitos, para que funcione el desarrollador debe entenderlos claramente antes de empezar a escribir las pruebas, como dice Carlos en el capítulo sobre ATDD de su libro:

_"Si no somos capaces de entendernos con el cliente, ni la mejor técnica de desarrollo de todos los tiempos producirá un buen resultado."_

Carlos Blé (2010). [Diseño Ágil con TDD](http://www.carlosble.com/libro-tdd/).

 

#### **\-Prueba de aceptación formal-**

En ATDD el analista de negocio tratará de reemplazar los extensos documentos de requisitos por ejemplos ejecutables, en consenso con el equipo y con el cliente. Un requisito del cliente se trasformará en un criterio de aceptación y finalmente en una prueba.

Las pruebas de aceptación formales ayudarán a comprender todos los detalles necesarios: El contexto, el evento y los resultados.

- **Dado (Given)** un contexto inicial
- **Cuando (When)** se produce un evento determinado
- **Entonces (Then)** se producen unos resultados

Esta información se trasladará a la ejecución de las pruebas como configuración (setup), disparador (trigger) y comprobación (verification), una forma habitual de organizar el código de una prueba, el patrón AAA (Arrange, Act & Assert). Lo mejor es verlo con un ejemplo:

- **Requisito:** El cliente podrá realizar el pago en la tienda con tarjeta de crédito.
- **Criterio de aceptación:** La tienda permite realizar pagos con tarjeta de crédito.
- **Prueba de aceptación:**
    - **Dado** que el cliente está registrado y tiene productos en la cesta y ha elegido el pago con tarjeta y ha introducido una tarjeta válida
    - **Cuando** el cliente confirma la compra y la entidad bancaria autoriza el pago
    - **Entonces** la compra se finaliza con éxito el ingreso se recibe con éxito el pedido se genera con éxito

Si estamos en _Scrum_ la forma de trabajar es similar, partimos del _product backlog_ en lugar de los "documentos de requisitos" y lo llamamos STDD (_Story Test-Driven Development_). Empezaremos con la historia de usuario: _Yo, como cliente, quiero utilizar una tarjeta de crédito, para realizar mi compra en la tienda_.

Si durante este proceso surgen dudas (y surgirán), como ¿qué sucede cuando el cliente introduce una tarjeta inválida o la entidad bancaria no autoriza el pago? Las dudas se aclaran en forma de nuevos requisitos y nuevas pruebas de aceptación.

 

#### **\-Keep It Simple, Stupid!-**

El [principio KISS](http://foldoc.org/KISS%20Principle), para mi la mayor ventaja de ATDD. Si partimos de los requisitos y de las pruebas de aceptación y vamos paso a paso, en lugar de tomar grandes decisiones sobre la arquitectura, siempre obtendremos la solución más simple.

ATDD consigue llevar la calidad a las prácticas diarias del desarrollador, convirtiendo la conformidad con los requisitos en una herramienta para lograr el éxito del proyecto, además de producir software robusto y con mayor flexibilidad frente al cambio gracias a la alta cobertura de pruebas.
