// ============================================================
//  index.js
//  Analizador para Lenguaje.g4
// ============================================================

import LenguajeLexer  from "./generated/LenguajeLexer.js";
import LenguajeParser from "./generated/LenguajeParser.js";
import { CustomVisitor } from "./CustomVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import fs from "fs";

async function main() {

    // ----------------------------------------------------------
    // 1. LEER EL CÓDIGO FUENTE
    // ----------------------------------------------------------
    let input;
    try {
        input = fs.readFileSync("input.txt", "utf8");
    } catch (err) {
        console.error("No se pudo leer input.txt:", err.message);
        process.exit(1);
    }

    // ----------------------------------------------------------
    // 2. ANÁLISIS LÉXICO
    // ----------------------------------------------------------
    const inputStream = CharStreams.fromString(input);
    const lexer       = new LenguajeLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);

    // fill() hace que el lexer procese todos los tokens de una vez,
    // necesario para recorrerlos y generar la tabla antes del parser.
    tokenStream.fill();

    // ----------------------------------------------------------
    // 3. TABLA DE LEXEMAS ↔ TOKENS  (requerimiento 2)
    //
    //  LenguajeParser.symbolicNames tiene esta forma:
    //  [ null, null, ...(keywords literales)..., "ID", "NUMERO", "TEXTO", "WS" ]
    //  Los tokens de palabras clave (variable, funcion, etc.) tienen
    //  symbolicNames = null, así que mostramos el texto literal del token.
    // ----------------------------------------------------------
    console.log("\n╔══════════════════════════════════════════════╗");
    console.log(  "║         TABLA DE LEXEMAS - TOKENS            ║");
    console.log(  "╠════════════════════════╦═════════════════════╣");
    console.log(  "║  Lexema                ║  Token              ║");
    console.log(  "╠════════════════════════╬═════════════════════╣");

    for (const token of tokenStream.tokens) {
        if (token.type === -1) continue; // saltar EOF

        // Para palabras clave (variable, funcion, imprimir, etc.)
        // symbolicNames devuelve null; en ese caso usamos el lexema mismo.
        const simbolo     = LenguajeParser.symbolicNames[token.type];
        const nombreToken = simbolo ?? `'${token.text}'`;
        const lexema      = token.text.padEnd(24);
        const tkName      = nombreToken.padEnd(21);
        console.log(`║ ${lexema} ║ ${tkName} ║`);
    }
    console.log("╚════════════════════════╩═════════════════════╝");

    // ----------------------------------------------------------
    // 4. ANÁLISIS SINTÁCTICO
    // ----------------------------------------------------------
    tokenStream.reset(); // volver al inicio para que el parser lo lea
    const parser = new LenguajeParser(tokenStream);

    const tree = parser.programa(); // regla raíz de la gramática

    // ----------------------------------------------------------
    // 5. REPORTE DE ERRORES  (requerimiento 1)
    //    ANTLR ya imprime en stderr cada error con su línea y causa.
    //    Aquí agregamos el resumen final.
    // ----------------------------------------------------------
    if (parser.syntaxErrorsCount > 0) {
        console.error(`\n✗ Se encontraron ${parser.syntaxErrorsCount} error(es) de sintaxis.`);
        console.error("  Revisá las líneas indicadas arriba con el prefijo 'line X:Y'.");
        return;
    }

    console.log("\n✓ Entrada válida. Sin errores léxicos ni sintácticos.");

    // ----------------------------------------------------------
    // 6. ÁRBOL DE ANÁLISIS SINTÁCTICO  (requerimiento 3)
    // ----------------------------------------------------------
    console.log("\n══════════════════════════════════════════════");
    console.log("  ÁRBOL DE ANÁLISIS SINTÁCTICO");
    console.log("══════════════════════════════════════════════");
    console.log(tree.toStringTree(parser.ruleNames));

    // ----------------------------------------------------------
    // 7. CÓDIGO JS GENERADO + EJECUCIÓN  (requerimiento 4)
    // ----------------------------------------------------------
    console.log("\n══════════════════════════════════════════════");
    console.log("  CÓDIGO JAVASCRIPT GENERADO");
    console.log("══════════════════════════════════════════════");

    const visitor  = new CustomVisitor();
    const codigoJS = visitor.visit(tree);

    console.log(codigoJS);

    console.log("\n══════════════════════════════════════════════");
    console.log("  RESULTADO DE LA EJECUCIÓN");
    console.log("══════════════════════════════════════════════");

    try {
        eval(codigoJS);
    } catch (e) {
        console.error("Error en tiempo de ejecución:", e.message);
    }
}

main();