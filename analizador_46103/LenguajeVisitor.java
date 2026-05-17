// Generated from Lenguaje.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link LenguajeParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface LenguajeVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link LenguajeParser#programa}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPrograma(LenguajeParser.ProgramaContext ctx);
	/**
	 * Visit a parse tree produced by {@link LenguajeParser#declaracion}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDeclaracion(LenguajeParser.DeclaracionContext ctx);
	/**
	 * Visit a parse tree produced by {@link LenguajeParser#funcion}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFuncion(LenguajeParser.FuncionContext ctx);
	/**
	 * Visit a parse tree produced by {@link LenguajeParser#argumentos}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArgumentos(LenguajeParser.ArgumentosContext ctx);
	/**
	 * Visit a parse tree produced by {@link LenguajeParser#instrucciones}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInstrucciones(LenguajeParser.InstruccionesContext ctx);
	/**
	 * Visit a parse tree produced by {@link LenguajeParser#operacion_texto}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOperacion_texto(LenguajeParser.Operacion_textoContext ctx);
	/**
	 * Visit a parse tree produced by {@link LenguajeParser#transformacion}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTransformacion(LenguajeParser.TransformacionContext ctx);
	/**
	 * Visit a parse tree produced by {@link LenguajeParser#concatenar}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitConcatenar(LenguajeParser.ConcatenarContext ctx);
	/**
	 * Visit a parse tree produced by {@link LenguajeParser#impresion}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitImpresion(LenguajeParser.ImpresionContext ctx);
	/**
	 * Visit a parse tree produced by {@link LenguajeParser#retorno}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRetorno(LenguajeParser.RetornoContext ctx);
	/**
	 * Visit a parse tree produced by {@link LenguajeParser#valor}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitValor(LenguajeParser.ValorContext ctx);
	/**
	 * Visit a parse tree produced by {@link LenguajeParser#cadena}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCadena(LenguajeParser.CadenaContext ctx);
	/**
	 * Visit a parse tree produced by {@link LenguajeParser#nombre}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNombre(LenguajeParser.NombreContext ctx);
	/**
	 * Visit a parse tree produced by {@link LenguajeParser#ejecucion}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitEjecucion(LenguajeParser.EjecucionContext ctx);
}