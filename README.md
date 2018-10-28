# jr_test
Prueba técnica

Para llevar a cabo la prueba, es necesario seguir los siguientes pasos:

1) Tener o instalar node (https://nodejs.org/es/).

2) Instalar http-server: npm install http-server -g

3) Clonar repo: git clone https://github.com/villachuck/jr_test.git

4) Abrir el repo clonado: cd jr_test

5) Abrir en el server: http-server -o

Como descubrirán, se encuentra un pantalla con dos secciones, que corresponden a cada ejercicio. Dejo aquí la descripción enviada:

Ejercicio 1:
Hacer un código que tendrá dos valores de entrada el primero será un número(mayor o
igual a cero) y números enteros separados por comas(por ejemplo 1,3,8,11,20). El
objetivo será hacer N rotaciones a la izquierda del arreglo dado, por ejemplo:
Primera entrada 2
Segunda entrada : 1,2,3,4,5

El resultado deberá ser:
4,5,1,2,3

Explicación:
Arreglo inicial: [1,2,3,4,5]
Primera iteración: [5,1,2,3,4]
Segunda iteración: [4,5,1,2,3]

Ejercicio 2:  
Código que recibirá dos string y regresará la respuesta si los dos strings son anagramas,
si no fueran anagramas, indicará cuantos caracteres se tendrían que eliminar para ser un
anagrama.
Ejemplo:

primera entrada: CBEAD
segunda entrada: FDA

Resultado:
No es un anagrama y se deben eliminar 4 caracteres para que sea un anagrama

Explicación:
De la primera cadena se tiene que eliminar C,B,E
De la segunda cadena se tiene que eliminar F para que puedan ser anagramas.
