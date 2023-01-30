---
title: "Desarrollo móvil \"exprés\" con Apache Cordova"
date: "2016-12-21"
categories: 
  - "desarrollo"
tags: 
  - "apache-cordova"
  - "desarrollo-movil"
  - "javascript"
---

Este semestre me había propuesto desarrollar una aplicación móvil, algo didáctico, tenía esa asignatura pendiente, y por una u otra razón no había empezado hasta ahora.

Finalmente, hace dos semanas me puse manos a la obra. Sin embargo, terminarlo antes de que acabara el año parecía realmente complicado por el poco tiempo del que disponía.

Después de ver distintas opciones, elegí [Apache Cordova](https://cordova.apache.org/), ya que cumplía los requisitos que había propuesto:

- Quería hacer una app multiplataforma (aunque de momento no vaya a pagar por publicarla en la App Store)
- Quería hacerla en mi entorno de desarrollo habitual (Visual Studio)
- No quería perder tiempo aprendiendo un framework o un lenguaje con los que no estuviera familiarizado

 

#### \-Sobre Apache Cordova-

Apache Cordova, anteriormente conocido como _PhoneGap_, es un framework que nos permite construir aplicaciones móviles utilizando HTML5+CSS3 para la presentación y JavaScript para la lógica, permitiendo además que los desarrolladores accedan a las características del dispositivo. El resultado son **aplicaciones híbridas** (no nativas) que pueden ser fácilmente empaquetadas para distintas plataformas (Android, iOS, Windows Phone, BlackBerry, FireOS, Ubuntu Touch, etc).

Además de [PhoneGap](https://build.phonegap.com/), la versión "comercial" que mantiene Adobe, hay otras herramientas y frameworks conocidos basados en Cordova, como [Ionic](https://ionicframework.com/), [Monaca](https://monaca.io/es/), [Intel XDK](https://software.intel.com/es-es/intel-xdk)... Algunos de ellos traen ya integrados frameworks de desarrollo en JavaScript como AngularJS, en el caso de Ionic, u Onsen UI, en Monaca.

 

#### \-Primeras impresiones-

Al ser mi primer desarrollo móvil, y disponer de tan poco tiempo para cumplir mi objetivo, lo primero que agradecí fue poder trabajar con [Visual Studio](https://www.visualstudio.com/es/vs/cordova/), crear el proyecto y encontrarme con una estructura tan familiar como ésta:

![Cordova](/images/Cordova.png)

Lo segundo que agradecí fue poder depurar en mi navegador. Al ser una aplicación íntegramente HTML+CSS+JS, he podido ejecutarla casi todo el tiempo en mi navegador, con todas las ventajas que esto supone, para la depuración, afinar los estilos, etc. Claro que en ese escenario no tienes el soporte a cualquier evento o características de los dispositivos móviles, pero para el 95% del tiempo de desarrollo y pruebas, me ha servido perfectamente.

 

#### \-Toda la lógica en JavaScript-

En mi opinión, pasar de utilizar JavaScript para lo que estamos acostumbrados la mayoría algunos, es decir, el desarrollo _front_, a utilizarlo como _core_ de una aplicación es algo totalmente distinto. Aunque no es nada nuevo, todos los frameworks orientados al desarrollo de aplicaciones [SPA](https://es.wikipedia.org/wiki/Single-page_application) ya lo hacen (y también puedes utilizarlos en Cordova).

En mi caso he preferido hacer casi todo yo solito ([jQuery](https://jquery.com/) no cuenta...). La lógica de la aplicación la puedes encapsular en uno o más módulos, puedes ver una buena introducción sobre este patrón en este artículo de freeCodeCamp: [JavaScript Modules: A Beginner's Guide](https://medium.freecodecamp.com/javascript-modules-a-beginner-s-guide-783f7d7a5fcc).

En poco tiempo ya había cambiado el _chip_ y estaba creando elementos dinámicamente, añadiendo y quitando eventos en tiempo de ejecución, etc. Un ejemplo:

\[code language="JavaScript"\] var miApp = (function () {

var misBotones;

return { init: function () { misBotones = \[\]; var btnA = $('<button/>') .attr('x', 1).attr('y', 1) .text('Botón A') .click(function () { alert('Hello A!'); });

var btnB = $('<button/>') .attr('x', 1).attr('y', 2) .text('Botón B') .click(function () { alert('Hello B!'); }); misBotones.push(btnA, btnB);

},

draw: function (bodySelector) { $.each(misBotones, function () { $(bodySelector).append(this); }); } }

})();

//Ejemplos de llamadas: miApp.init(); miApp.draw('#app'); \[/code\]

 

#### \-El resultado-

Quería aprovechar este primer desarrollo para hacer un pequeño homenaje a unos antiguos compañeros, por lo que elegí replicar un juego que incluimos hace muchísimo tiempo [oculto en una aplicación](https://es.wikipedia.org/wiki/Huevo_de_pascua_(virtual)).

En las próximas semanas quiero hacer una versión light y comentada del código para compartila con vosotros. De momento, os dejo un enlace por si queréis echar un vistazo:

[![play](/images/play.png)](https://play.google.com/store/apps/details?id=com.lanalua.findingSusieCE)**¡Felices fiestas!**
