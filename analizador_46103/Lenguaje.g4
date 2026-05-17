grammar Lenguaje;

// Regla inicial
programa
    : (declaracion
      | funcion
      | ejecucion
      )*
    ;

// Declaraciones
declaracion
    : 'variable' nombre ('=' valor)? ';'
    ;

// Funciones
funcion
    : 'funcion' nombre ('(' argumentos? ')')? '{' instrucciones '}'
    ;

argumentos
    : nombre (',' argumentos)?
    ;

// Instrucciones
instrucciones
    : (operacion_texto
      | concatenar
      | impresion
      | retorno
      )*
    ;

// Operaciones de texto
operacion_texto
    : nombre '=' transformacion '(' cadena ')' ';'
    ;

transformacion
    : 'mayusculas'
    | 'minusculas'
    | 'longitud'
    | 'invertir'
    | 'reemplazar'
    ;

// Concatenación
concatenar
    : nombre '=' cadena '+' cadena ';'
    ;

// Impresión
impresion
    : 'imprimir' '(' valor ')' ';'
    ;

// Retorno
retorno
    : 'devolver' valor ';'
    ;

// Valores
valor
    : TEXTO
    | NUMERO
    | nombre
    ;

// Cadenas
cadena
    : TEXTO
    | nombre
    ;

// Nombre de variable o función
nombre
    : ID
    ;

// Ejecución de función
ejecucion
    : nombre '(' argumentos? ')' ';'
    ;

// =====================
// TOKENS LÉXICOS
// =====================

ID
    : [a-zA-Z_][a-zA-Z0-9_]*
    ;

NUMERO
    : [0-9]+
    ;

TEXTO
    : '"' (~["\r\n])* '"'
    ;

// Ignorar espacios y saltos
WS
    : [ \t\r\n]+ -> skip
    ;