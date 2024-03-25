/******************************************************************************
Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
print('Hello World');

var numero1 = 5;
var numero2 = 8;
var resultado;

resultado = numero1 == numero2;
print(numero1, ' = ', numero2, '?', resultado)
resultado = numero1 != numero2;
print(numero1, ' != ', numero2, '?', resultado)
resultado = numero1 > numero2;
print(numero1, ' > ', numero2, '?', resultado)
resultado = numero1 < numero2;
print(numero1, ' < ', numero2, '?', resultado)
resultado = numero1 >= numero2;
print(numero1, ' >= ', numero2, '?', resultado)
resultado = numero1 <= numero2;
print(numero1, ' <= ', numero2, '?', resultado)


var a1 = true && true; // t && t retorna true
print(a1);
var a2 = true && false; // t && f retorna false
print(a2);
var a3 = false && true; // f && t retorna false
print(a3);
var a4 = false && 3 == 4 ; // f && f retorna false
print(a4);
var a5 = 'gato' && 'cão'; // t && t retorna cão
print(a5);
var a6 = false && 'gato'; // f && t retorna false
print(a6);
var a7 = 'gato' && false; // t && f retorna false
print(a7);


var idade = 16;
var status = idade >= 18 ?'adulto':'menor de idade'
print(status)


var palavra1 = 'Bi';
var palavra2 = 'xa';
var resultado = palavra1 + palavra2;
print(resultado)


var a = 10
var b = 20
var c = 20
var d = 10

if (a > 10 && a < 20 || b ==5)
print('true')
else 
print('false')

if (a > 10 || b ==5)
print('true')
else 
print('false')

if (a > 10 && a < 20 || b ==5 || c == 10)
print('true')
else 
print('false')

if (a > 10 || b ==5 || c != 10 )
print('true')
else 
print('false')
if (a > 10 || b == 5 || c != 10 && d != 20)
print('true')
else 
print('false')