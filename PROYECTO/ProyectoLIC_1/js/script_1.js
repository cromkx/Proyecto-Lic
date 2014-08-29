/*Declaracion de variables*/

/*Cada una de las siguientes variables guarda informacion que involucra un caso de soporte tecnico */
var E1 = ["<H2>Rendimiento de PC</H2>", "<li>Posibles causas: &Eacute;ste es el problema m&aacute;s habitual entre los usuarios. Pueden haber muchas razones que expliquen una baja en el rendimiento de la PC. La m&aacute;s com&uacute;n es la presencia de datos fragmentados, presencia de spyware, registro corrupto, y programas innecesarios.</li>", "<li>La soluci&oacute;n: Chequear los programas que tenemos instalados y desinstalar los que no usas, borrar los archivos innecesarios, y ganar velocidad y rendimiento, ya sea desfragmentando el disco, o bien a&ntilde;adiendo memoria a la m&aacute;quina. Tambi&eacute;n escanea tu PC con un programa antivirus. Puede que se detecten virus y software da&ntilde;ino que puede infectar tu PC y causar que funcione con una disminuci&oacute;n de rendimiento. Si es necesario ejecuta una utilidad para revisar el disco y comprobar la integridad de la unidad de disco actual. Esos programas tambi&eacute;n pueden reparar la mayor&iacute;a de los tipos de corrupci&oacute;n de datos o da&ntilde;os que puedan ocurrir con el tiempo, o determinar si es necesario hacer particiones en el disco para aumentar su eficiencia.</li>"];
var E2 = ["<H2>Pantallas de error</H2>", "<li>Posibles causas: El posible que nuestra PC tenga spyware o programas esp&iacute;a, y que &eacute;sa sea la causa de que los programas no respondan y se deban finalizar. Tambi&eacute;n est&aacute; la posibilidad de que el programa no funciona bien. Otra es que haya archivos de Windows necesarios para ejecutarlos y puede que estos est&eacute;n corruptos o desfasados. Otra causa puede ser la falta de memoria RAM. </li>", "<li>La soluci&oacute;n: Si bien alcanzar&iacute;a con actualizar un programa anti-spyware, las causas pueden venir de otro lado, como drivers mal instalados. Podrias fijarte re-instalando el programa que funciona mal. Si el problema es con Windows seria recomendable no formatear sino REPARAR WINDOWS , si notamos que el problema puede venir de la memoria RAM, se le puede agregar mayor memoria virtual a la PC y as&iacute; optimizar su rendimiento.</li>"];
var E3 = ["<H2>Reinicio inesperado de PC</H2>", "<li>Posibles causas: Pueden ser dos. La presencia de un “gusano” (un tipo de virus), o alguna obstrucci&oacute;n ( basura, mala conexi&oacute;n ) dentro del gabinete o el cooler. Esto &uacute;ltimo sucede cuando la PC no puede refrescarse: antes de recalentarse, sencillamente se apaga. </li>", "<li>La soluci&oacute;n: Si se trata de un virus, correr los antivirus correspondientes. Si el problema es una obstrucci&oacute;n, una buena forma de evitarlo es mantener el interior del gabinete y el cooler limpios, tener la CPU en un lugar ventilado, y evitar su exposici&oacute;n al humo. Si el problema persiste, el problema puede ser la fuente de la PC, por lo que habr&iacute;a que chequear si esta funciona correctamente o si est&aacute; bien conectada. </li>"];
var E4 = ["<H2>La computadora no inicia</H2>", "<li>Posibles causas: Puede que alg&uacute;n componente de la computadora est&eacute; mal conectado, o alg&uacute;n elemento externo que est&eacute; involucrado en la alimentaci&oacute;n de la fuente de poder. Un cable flojo o un conector puede causar que el PC no arranque, ya que la energ&iacute;a el&eacute;ctrica no se env&iacute;a a la computadora. </li>", "<li>La soluci&oacute;n: Revisa el PC en busca de alg&uacute;n cable suelto, conectores o cables de alimentaci&oacute;n. Tambi&eacute;n compruebe la regleta o el protector de sobretensi&oacute;n, si est&aacute;s utilizando uno. Aseg&uacute;rate de que el dispositivo est&aacute; encendido y funcionando correctamente. Si el PC est&aacute; conectado directamente a una toma de corriente, conecta el PC a una toma diferente y vuelve a encenderlo.</li>"];
var E5 = ["<H2>Aplicaciones no responden</H2>", "<li>Posibles causas: En ocasiones una aplicaci&oacute;n ocupa demasiados recursos del sistema o genera procesos complejos y si dicho sistema no se encuentra en &oacute;ptimas condiciones (su rendimiento es pobre) suelen provocar que las aplicaciones se congelen y necesiten cerrarse forzadamente, o cuando tu computadora no encuentra un driver actualizado, no responde o se cuelga.</li>", "<li>La soluci&oacute;n: Presiona \"Alt + F4\" para forzar el cierre del programa que se ha quedado bloqueado. Si el programa no quiere cerrarse, pulsa \"Ctrl + Alt + Del\" para que aparezca el \"Administrador de tareas\". Haz clic en la pesta&ntilde;a de \"Procesos\" y después ve sobre la lista para encontrar el nombre del proceso del programa que no est&aacute; respondiendo. Selecciona el programa y haz clic en \"Finalizar proceso\". Haz clic en finalizar proceso de nuevo en la ventana de verificaci&oacute;n para forzar a cerrar el programa seleccionado. Si a&uacute;n no se logra cerrar el programa se recomiendo reiniciar la PC si se queda bloqueado o hay una p&aacute;gina de error en la pantalla entera. Los drivers de hardware se deben actualizar de manera regular. Adem&aacute;s eso ayuda a incrementar la memoria RAM virtual de tu computadora. </li>"];
var E6 = ["<H2>Conexiones a Internet</H2>", "<li>Posibles causas: Conexiones mal aplicadas, da&ntilde;adas, problemas del lado dl proveedor de red, etc.</li>", "<li>La soluci&oacute;n: Revisa los cables de ethernet conectados a la PC, router y m&oacute;dem. Aseg&uacute;rate que los cables est&aacute;n enchufados de forma segura en los dispositivos. Comprueba que el router y m&oacute;dem est&aacute;n enchufados a una toma de corriente o regleta. Si los problemas persisten, desenchufa el dispositivo de la corriente el&eacute;ctrica y d&eacute;jalo desenchufado de 10 a 30 segundos. Enchufa de nuevo el dispositivo y d&eacute;jalo que arranque. Si los problemas aun se encuentran, puede que el proveedor de internet sea el origen del conflicto, en cuyo caso solo puede quedar en manos del mismo soucionarlo.</li>"];
var E7 = ["<H2>Chasquidos o vibraciones</H2>", "<li>Posibles causas: Este es un problema de hardware. Si la computadora hace ruidos como chasquidos, chillidos, soplidos o aullidos, el problema puede provenir de los componentes electr&oacute;nicos. </li>", "<li>La soluci&oacute;n: Quita la tapa de la computadora y deja que la computadora siga funcionando para verificar si puedes encontrar de d&oacute;nde viene el problema. Para ahorrar algo de dinero puedes hacer las reparaciones t&uacute; mismo, pero siempre es mejor llamar a un t&eacute;cnico experto si no te sientes seguro de realizar las reparaciones internas de tu computadora.</li>"];
var E8 = ["<H2>Problemas con unidades de CD/DVD</H2>", "<li>Posibles causas: El polvo y la suciedad pueden acumularse en la bandeja o ranura de CD/DVD, lo cual puede interrumpir la capacidad del esc&aacute;ner para leer discos.</li>", "<li>La soluci&oacute;n: Cuidadosamente usar un trozo de franela o material de similar textura para limpiar la ranura del CD/DVD, para que el polvo deje de acumularse en la misma. También puedes intentar limpiar el propio CD o DVD.</li>"];
var E9 = ["<H2>Pantalla no enciende</H2>", "<li>Posibles causas: Si se trata de una desktop, es muy probable que la tarjeta de video est&eacute; entrando en conflicto, causando que la pantalla no pueda encenderse.</li>", "<li>La soluci&oacute;n: La mejor soluci&oacute;n en caso que falle al tarjeta de video es reemplazarla.</li>"];
var E0 = ["<H2>Problemas con mouse y teclado</H2>", "<li>Posibles causas: Puede tanto ser que estos componentes est&eacute;n mal conectados, como que la suciedad y mugre acumuladas provoquen que no funcione correctamente.</li>", "<li>La soluci&oacute;n: En caso que sea por componentes mal conectados, asegurarse de conectarlos donde deben (si son de conector PS/2, puede que necesite reinicio para servir). En caso contrario, limpiar los componentes con mucho cuidado.</li>"];

/*La funcion supportInfo() se utiliza para determinar que caso de soporte tecnico se desea */
function supportInfo()
{
	/*Para identificar que caso se desea visualizar se pide por medio de un combobox*/
	var select = document.getElementById("combo").value;
	if(select == "1")
	{
		document.getElementById('data').innerHTML = E1[0] + E1[1] + "<br/>" + E1[2];
	}
	else if(select == "2")
	{
		document.getElementById('data').innerHTML = E2[0] + E2[1] + "<br/>" + E2[2];
	}
	else if(select == "3")
	{
		document.getElementById('data').innerHTML = E3[0] + E3[1] + "<br/>" + E3[2];
	}
	else if(select == "4")
	{
		document.getElementById('data').innerHTML = E4[0] + E4[1] + "<br/>" + E4[2];
	}
	else if(select == "5")
	{
		document.getElementById('data').innerHTML = E5[0] + E5[1] + "<br/>" + E5[2];
	}
	else if(select == "6")
	{
		document.getElementById('data').innerHTML = E6[0] + E6[1] + "<br/>" + E6[2];
	}
	else if(select == "7")
	{
		document.getElementById('data').innerHTML = E7[0] + E7[1] + "<br/>" + E7[2];
	}
	else if(select == "8")
	{
		document.getElementById('data').innerHTML = E8[0] + E8[1] + "<br/>" + E8[2];
	}
	else if(select == "9")
	{
		document.getElementById('data').innerHTML = E9[0] + E9[1] + "<br/>" + E9[2];
	}
	else if(select == "0")
	{
		document.getElementById('data').innerHTML = E0[0] + E0[1] + "<br/>" + E0[2];
	}
	/*Si se presiona sin tener una opcion (aunque siempre hay una por default)*/
	else
	{
		document.getElementById('data').innerHTML = "Elija una opcion del combobox";
	}
}