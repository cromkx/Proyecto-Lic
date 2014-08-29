/*Declaracion de variables*/

/*inicio: se encarga de guardar la informacion que se presenta en la pantalla de inicio*/
var inicio = ["<H2>P&aacute;gina de inicio</H2><br><p>Con esta p&aacute;gina web buscamos darle una opci&oacute;n m&aacute;s a qui&eacute;nes sufren de ciertos problemas comunes que involucran los sistemas inform&aacute;ticos, dando soluciones simples y f&aacute;ciles para que el usuario se informe y pueda salir de sus aprietos eficientemente. Esperamos que la p&aacute;gina sea de vuestro agrado y que sea de gran ayuda ya sea para adquirir conocimientos o para solucionar sus problemas."];
/*tech: guarda la informacion dentro de Soporte Tecnico*/
var tech = ["<H2>Soporte T&eacute;cnico</H2>", "<p>Esta es la p&aacute;gina donde se exponen los temas relacionados al soporte t&eacute;nico de sistemas inform&aacute;ticos, en cu&aacute;l se ver&aacute; en distintas ramas: </p>", "<br/><br/><a href = \"PC.html\">Problemas m&aacute;s comunes</a>", "<br/><br/><br/><br/><a href= \"KB.html\">Base de conocimientos</a>"];
/*contacts: guarda la informacion de los contactos de la pagina*/
var contacts = ["<H2>Contactos</H2>", "<p>Puede contactarse con nosotros en caso de que usted necesite informaci&oacute;n no manejada en esta p&aacute;gina, as&iacute; como tambi&eacute;n darnos alg&uacute;n tipo de sugerencia o comentario que nos sea de utilidad para mejorar nuestros servicios para con los visitantes a esta p&aacute;gina. Se os agradece de antemano por su colaboraci&oacute;n y esperamos satisfacer sus necesidades.</p>", "<p>Nuestros n&uacute;meros de contacto son: <li>2243 - 6000</li><li>2243 - 6000</li><li>2243 - 6000</li></p>"];
/*devel: guarda la informacion de los estudiantes creadores de  esta pagina*/
var devel = [["<H2>Creadores</H2>"], ["<li>Carlos Roberto Orellana Miranda</li>Edad: 18 <br/>Ocupaci&oacute;n: Estudiante (T&eacute;cnico en Sistemas Inform&aacute;ticos)<br/>Tel&eacute;fono: 2121 - 2121"], ["<br/><li>Madelin Carolina Escobar Zepeda</li>Edad: 16<br/>Ocupaci&oacute;n: Estudiante (T&eacute;cnico en Sistemas Inform&aacute;ticos)<br/>Tel&eacute;fono: 1234 - 1235"],["<br/><br/><li>Gustavo Fernando Mart&iacute;nez P&eacute;rez</li>Edad: 19 a&ntilde;os<br/>Ocupaci&oacute;n: Estudiante (T&eacute;cnico en Sistemas Inform&aacute;ticos)<br/>Tel&eacute;fono: 7751 - 1012"]];

/*La funcion inicioInfo() modifica el elemento "data" del documento html para mostrar la informacion de pagina de inicio*/
function inicioInfo()
{
	document.getElementById('data').innerHTML = inicio[0] +  inicio[1];	
}
/*La funcion supportInfo() modifica el elemento "data" del documento html para mostrar las opciones de soporte tecnico*/
function supportInfo()
{
	document.getElementById('data').innerHTML = tech[0] +  tech[1] + tech[2]  + tech[3];
}
/*La funcion contactsInfo() modifica el elemento "data" del documento html para mostrar los datos de contacto*/
function contactsInfo()
{
	document.getElementById('data').innerHTML = contacts[0] + contacts[1] + contacts[2];
}
/*La funcion develInfo() modifica el elemento "data" del documento html para mostrar la informacion de los creadores del sitio*/
function develInfo()
{
	document.getElementById('data').innerHTML = devel[0,0] + devel[0,1] + devel[0,2] + devel[0,3];
}

