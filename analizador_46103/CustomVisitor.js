// ============================================================
//  CustomVisitor.js
//  Genera código JavaScript a partir del árbol de Lenguaje.g4
//
//  Métodos verificados contra LenguajeVisitor.js generado:
//    visitPrograma, visitDeclaracion, visitFuncion,
//    visitArgumentos, visitInstrucciones, visitOperacion_texto,
//    visitTransformacion, visitConcatenar, visitImpresion,
//    visitRetorno, visitValor, visitCadena, visitNombre,
//    visitEjecucion
//
//  Métodos de ctx verificados contra LenguajeParser.js generado:
//    DeclaracionContext  → .nombre()  .valor()
//    FuncionContext      → .nombre()  .argumentos()  .instrucciones()
//    ArgumentosContext   → .nombre()  .argumentos()
//    Operacion_textoContext → .nombre()  .transformacion()  .cadena()
//    ConcatenarContext   → .nombre()  .cadena(0)  .cadena(1)
//    ImpresionContext    → .valor()
//    RetornoContext      → .valor()
//    EjecucionContext    → .nombre()  .argumentos()
//    ValorContext        → .TEXTO()  .NUMERO()  .nombre()
//    CadenaContext       → .TEXTO()  .nombre()
//    NombreContext       → .ID()
// ============================================================

import LenguajeVisitor from "./generated/LenguajeVisitor.js";

export class CustomVisitor extends LenguajeVisitor {

    constructor() {
        super();
        // Array donde acumulamos las líneas de JS generadas
        this.lineasJS = [];
    }

    // ----------------------------------------------------------
    //  programa : (declaracion | funcion | ejecucion)*
    //
    //  Es la regla raíz. Visita todos los hijos y devuelve
    //  el código JS completo como un string.
    // ----------------------------------------------------------
    visitPrograma(ctx) {
        this.visitChildren(ctx);
        return this.lineasJS.join("\n");
    }

    // ----------------------------------------------------------
    //  declaracion : 'variable' nombre ('=' valor)? ';'
    //
    //  variable saludo = "hola";  →  let saludo = "hola";
    //  variable x;                →  let x;
    // ----------------------------------------------------------
    visitDeclaracion(ctx) {
        const nombre = this.visit(ctx.nombre());

        if (ctx.valor()) {
            const val = this.visit(ctx.valor());
            this.lineasJS.push(`let ${nombre} = ${val};`);
        } else {
            this.lineasJS.push(`let ${nombre};`);
        }

        return null;
    }

    // ----------------------------------------------------------
    //  funcion : 'funcion' nombre ('(' argumentos? ')')? '{' instrucciones '}'
    //
    //  funcion saludar(x) { imprimir(x); }
    //  → function saludar(x) {
    //        console.log(x);
    //    }
    // ----------------------------------------------------------
    visitFuncion(ctx) {
        const nombre = this.visit(ctx.nombre());

        let args = "";
        if (ctx.argumentos()) {
            args = this.visit(ctx.argumentos());
        }

        // Guardamos el acumulador actual, generamos el cuerpo aparte
        // para poder indentarlo con 4 espacios.
        const lineasAntes = this.lineasJS;
        this.lineasJS = [];

        this.visit(ctx.instrucciones());

        const cuerpo = this.lineasJS
            .map(linea => `    ${linea}`)
            .join("\n");

        this.lineasJS = lineasAntes;
        this.lineasJS.push(`function ${nombre}(${args}) {\n${cuerpo}\n}`);

        return null;
    }

    // ----------------------------------------------------------
    //  argumentos : nombre (',' argumentos)?
    //
    //  Regla recursiva. Recolectamos todos los nombres
    //  y los devolvemos separados por coma.
    //  a, b, c  →  "a, b, c"
    // ----------------------------------------------------------
    visitArgumentos(ctx) {
        const primero = this.visit(ctx.nombre());

        if (ctx.argumentos()) {
            const resto = this.visit(ctx.argumentos());
            return `${primero}, ${resto}`;
        }

        return primero;
    }

    // ----------------------------------------------------------
    //  instrucciones : (operacion_texto | concatenar | impresion | retorno)*
    //
    //  Solo delegamos a cada hijo; ellos agregan a this.lineasJS.
    // ----------------------------------------------------------
    visitInstrucciones(ctx) {
        this.visitChildren(ctx);
        return null;
    }

    // ----------------------------------------------------------
    //  operacion_texto : nombre '=' transformacion '(' cadena ')' ';'
    //
    //  enMayus = mayusculas(saludo);  →  let enMayus = saludo.toUpperCase();
    //  largo   = longitud(texto);     →  let largo = texto.length;
    //
    //  IMPORTANTE: el nombre del método lleva guión bajo porque
    //  la regla en la gramática se llama operacion_texto.
    // ----------------------------------------------------------
    visitOperacion_texto(ctx) {
        const destino = this.visit(ctx.nombre());
        const op      = ctx.transformacion().getText(); // texto plano del token
        const cadena  = this.visit(ctx.cadena());

        const jsOp = this._traducirTransformacion(op, cadena);
        this.lineasJS.push(`let ${destino} = ${jsOp};`);

        return null;
    }

    // Helper privado: mapea palabras clave del lenguaje a JS
    _traducirTransformacion(op, arg) {
        switch (op) {
            case "mayusculas": return `${arg}.toUpperCase()`;
            case "minusculas": return `${arg}.toLowerCase()`;
            case "longitud":   return `${arg}.length`;
            case "invertir":   return `${arg}.split("").reverse().join("")`;
            case "reemplazar": return `${arg}`;  // simplificado; extender si la gramática acepta args extra
            default:           return arg;
        }
    }

    // ----------------------------------------------------------
    //  concatenar : nombre '=' cadena '+' cadena ';'
    //
    //  resultado = saludo + nombre;  →  let resultado = saludo + nombre;
    //
    //  ctx.cadena(0) = primer operando
    //  ctx.cadena(1) = segundo operando
    // ----------------------------------------------------------
    visitConcatenar(ctx) {
        const destino    = this.visit(ctx.nombre());
        const izquierda  = this.visit(ctx.cadena(0));
        const derecha    = this.visit(ctx.cadena(1));
        this.lineasJS.push(`let ${destino} = ${izquierda} + ${derecha};`);
        return null;
    }

    // ----------------------------------------------------------
    //  impresion : 'imprimir' '(' valor ')' ';'
    //
    //  imprimir(saludo);  →  console.log(saludo);
    // ----------------------------------------------------------
    visitImpresion(ctx) {
        const val = this.visit(ctx.valor());
        this.lineasJS.push(`console.log(${val});`);
        return null;
    }

    // ----------------------------------------------------------
    //  retorno : 'devolver' valor ';'
    //
    //  devolver resultado;  →  return resultado;
    // ----------------------------------------------------------
    visitRetorno(ctx) {
        const val = this.visit(ctx.valor());
        this.lineasJS.push(`return ${val};`);
        return null;
    }

    // ----------------------------------------------------------
    //  ejecucion : nombre '(' argumentos? ')' ';'
    //
    //  saludar("Juan");  →  saludar("Juan");
    //  procesar();       →  procesar();
    // ----------------------------------------------------------
    visitEjecucion(ctx) {
        const nombre = this.visit(ctx.nombre());

        let args = "";
        if (ctx.argumentos()) {
            args = this.visit(ctx.argumentos());
        }

        this.lineasJS.push(`${nombre}(${args});`);
        return null;
    }

    // ----------------------------------------------------------
    //  valor : TEXTO | NUMERO | nombre
    //
    //  Devuelve el texto del token tal cual.
    //  TEXTO incluye las comillas dobles:  "hola mundo"
    //  NUMERO es el dígito:                42
    //  nombre delega a visitNombre:        saludo
    // ----------------------------------------------------------
    visitValor(ctx) {
        if (ctx.TEXTO())  return ctx.TEXTO().getText();
        if (ctx.NUMERO()) return ctx.NUMERO().getText();
        if (ctx.nombre()) return this.visit(ctx.nombre());
        return "";
    }

    // ----------------------------------------------------------
    //  cadena : TEXTO | nombre
    // ----------------------------------------------------------
    visitCadena(ctx) {
        if (ctx.TEXTO())  return ctx.TEXTO().getText();
        if (ctx.nombre()) return this.visit(ctx.nombre());
        return "";
    }

    // ----------------------------------------------------------
    //  nombre : ID
    //
    //  Devuelve el texto del identificador como string plano.
    // ----------------------------------------------------------
    visitNombre(ctx) {
        return ctx.ID().getText();
    }

    // ----------------------------------------------------------
    //  transformacion : 'mayusculas' | 'minusculas' | ...
    //
    //  No se visita directamente; visitOperacion_texto usa
    //  ctx.transformacion().getText() para obtener el texto.
    //  Este método existe por completitud.
    // ----------------------------------------------------------
    visitTransformacion(ctx) {
        return ctx.getText();
    }
}