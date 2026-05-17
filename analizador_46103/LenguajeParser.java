// Generated from Lenguaje.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class LenguajeParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		ID=18, NUMERO=19, TEXTO=20, WS=21;
	public static final int
		RULE_programa = 0, RULE_declaracion = 1, RULE_funcion = 2, RULE_argumentos = 3, 
		RULE_instrucciones = 4, RULE_operacion_texto = 5, RULE_transformacion = 6, 
		RULE_concatenar = 7, RULE_impresion = 8, RULE_retorno = 9, RULE_valor = 10, 
		RULE_cadena = 11, RULE_nombre = 12, RULE_ejecucion = 13;
	private static String[] makeRuleNames() {
		return new String[] {
			"programa", "declaracion", "funcion", "argumentos", "instrucciones", 
			"operacion_texto", "transformacion", "concatenar", "impresion", "retorno", 
			"valor", "cadena", "nombre", "ejecucion"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'variable'", "'='", "';'", "'funcion'", "'('", "')'", "'{'", "'}'", 
			"','", "'mayusculas'", "'minusculas'", "'longitud'", "'invertir'", "'reemplazar'", 
			"'+'", "'imprimir'", "'devolver'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, "ID", "NUMERO", "TEXTO", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Lenguaje.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public LenguajeParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramaContext extends ParserRuleContext {
		public List<DeclaracionContext> declaracion() {
			return getRuleContexts(DeclaracionContext.class);
		}
		public DeclaracionContext declaracion(int i) {
			return getRuleContext(DeclaracionContext.class,i);
		}
		public List<FuncionContext> funcion() {
			return getRuleContexts(FuncionContext.class);
		}
		public FuncionContext funcion(int i) {
			return getRuleContext(FuncionContext.class,i);
		}
		public List<EjecucionContext> ejecucion() {
			return getRuleContexts(EjecucionContext.class);
		}
		public EjecucionContext ejecucion(int i) {
			return getRuleContext(EjecucionContext.class,i);
		}
		public ProgramaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_programa; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof LenguajeVisitor ) return ((LenguajeVisitor<? extends T>)visitor).visitPrograma(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ProgramaContext programa() throws RecognitionException {
		ProgramaContext _localctx = new ProgramaContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_programa);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(33);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 262162L) != 0)) {
				{
				setState(31);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__0:
					{
					setState(28);
					declaracion();
					}
					break;
				case T__3:
					{
					setState(29);
					funcion();
					}
					break;
				case ID:
					{
					setState(30);
					ejecucion();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(35);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DeclaracionContext extends ParserRuleContext {
		public NombreContext nombre() {
			return getRuleContext(NombreContext.class,0);
		}
		public ValorContext valor() {
			return getRuleContext(ValorContext.class,0);
		}
		public DeclaracionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaracion; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof LenguajeVisitor ) return ((LenguajeVisitor<? extends T>)visitor).visitDeclaracion(this);
			else return visitor.visitChildren(this);
		}
	}

	public final DeclaracionContext declaracion() throws RecognitionException {
		DeclaracionContext _localctx = new DeclaracionContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_declaracion);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(36);
			match(T__0);
			setState(37);
			nombre();
			setState(40);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__1) {
				{
				setState(38);
				match(T__1);
				setState(39);
				valor();
				}
			}

			setState(42);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FuncionContext extends ParserRuleContext {
		public NombreContext nombre() {
			return getRuleContext(NombreContext.class,0);
		}
		public InstruccionesContext instrucciones() {
			return getRuleContext(InstruccionesContext.class,0);
		}
		public ArgumentosContext argumentos() {
			return getRuleContext(ArgumentosContext.class,0);
		}
		public FuncionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_funcion; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof LenguajeVisitor ) return ((LenguajeVisitor<? extends T>)visitor).visitFuncion(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FuncionContext funcion() throws RecognitionException {
		FuncionContext _localctx = new FuncionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_funcion);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(44);
			match(T__3);
			setState(45);
			nombre();
			setState(51);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__4) {
				{
				setState(46);
				match(T__4);
				setState(48);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==ID) {
					{
					setState(47);
					argumentos();
					}
				}

				setState(50);
				match(T__5);
				}
			}

			setState(53);
			match(T__6);
			setState(54);
			instrucciones();
			setState(55);
			match(T__7);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArgumentosContext extends ParserRuleContext {
		public NombreContext nombre() {
			return getRuleContext(NombreContext.class,0);
		}
		public ArgumentosContext argumentos() {
			return getRuleContext(ArgumentosContext.class,0);
		}
		public ArgumentosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argumentos; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof LenguajeVisitor ) return ((LenguajeVisitor<? extends T>)visitor).visitArgumentos(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ArgumentosContext argumentos() throws RecognitionException {
		ArgumentosContext _localctx = new ArgumentosContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_argumentos);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(57);
			nombre();
			setState(60);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__8) {
				{
				setState(58);
				match(T__8);
				setState(59);
				argumentos();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InstruccionesContext extends ParserRuleContext {
		public List<Operacion_textoContext> operacion_texto() {
			return getRuleContexts(Operacion_textoContext.class);
		}
		public Operacion_textoContext operacion_texto(int i) {
			return getRuleContext(Operacion_textoContext.class,i);
		}
		public List<ConcatenarContext> concatenar() {
			return getRuleContexts(ConcatenarContext.class);
		}
		public ConcatenarContext concatenar(int i) {
			return getRuleContext(ConcatenarContext.class,i);
		}
		public List<ImpresionContext> impresion() {
			return getRuleContexts(ImpresionContext.class);
		}
		public ImpresionContext impresion(int i) {
			return getRuleContext(ImpresionContext.class,i);
		}
		public List<RetornoContext> retorno() {
			return getRuleContexts(RetornoContext.class);
		}
		public RetornoContext retorno(int i) {
			return getRuleContext(RetornoContext.class,i);
		}
		public InstruccionesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instrucciones; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof LenguajeVisitor ) return ((LenguajeVisitor<? extends T>)visitor).visitInstrucciones(this);
			else return visitor.visitChildren(this);
		}
	}

	public final InstruccionesContext instrucciones() throws RecognitionException {
		InstruccionesContext _localctx = new InstruccionesContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_instrucciones);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(68);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 458752L) != 0)) {
				{
				setState(66);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
				case 1:
					{
					setState(62);
					operacion_texto();
					}
					break;
				case 2:
					{
					setState(63);
					concatenar();
					}
					break;
				case 3:
					{
					setState(64);
					impresion();
					}
					break;
				case 4:
					{
					setState(65);
					retorno();
					}
					break;
				}
				}
				setState(70);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Operacion_textoContext extends ParserRuleContext {
		public NombreContext nombre() {
			return getRuleContext(NombreContext.class,0);
		}
		public TransformacionContext transformacion() {
			return getRuleContext(TransformacionContext.class,0);
		}
		public CadenaContext cadena() {
			return getRuleContext(CadenaContext.class,0);
		}
		public Operacion_textoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operacion_texto; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof LenguajeVisitor ) return ((LenguajeVisitor<? extends T>)visitor).visitOperacion_texto(this);
			else return visitor.visitChildren(this);
		}
	}

	public final Operacion_textoContext operacion_texto() throws RecognitionException {
		Operacion_textoContext _localctx = new Operacion_textoContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_operacion_texto);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(71);
			nombre();
			setState(72);
			match(T__1);
			setState(73);
			transformacion();
			setState(74);
			match(T__4);
			setState(75);
			cadena();
			setState(76);
			match(T__5);
			setState(77);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TransformacionContext extends ParserRuleContext {
		public TransformacionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_transformacion; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof LenguajeVisitor ) return ((LenguajeVisitor<? extends T>)visitor).visitTransformacion(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TransformacionContext transformacion() throws RecognitionException {
		TransformacionContext _localctx = new TransformacionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_transformacion);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(79);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 31744L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConcatenarContext extends ParserRuleContext {
		public NombreContext nombre() {
			return getRuleContext(NombreContext.class,0);
		}
		public List<CadenaContext> cadena() {
			return getRuleContexts(CadenaContext.class);
		}
		public CadenaContext cadena(int i) {
			return getRuleContext(CadenaContext.class,i);
		}
		public ConcatenarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_concatenar; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof LenguajeVisitor ) return ((LenguajeVisitor<? extends T>)visitor).visitConcatenar(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ConcatenarContext concatenar() throws RecognitionException {
		ConcatenarContext _localctx = new ConcatenarContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_concatenar);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(81);
			nombre();
			setState(82);
			match(T__1);
			setState(83);
			cadena();
			setState(84);
			match(T__14);
			setState(85);
			cadena();
			setState(86);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ImpresionContext extends ParserRuleContext {
		public ValorContext valor() {
			return getRuleContext(ValorContext.class,0);
		}
		public ImpresionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_impresion; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof LenguajeVisitor ) return ((LenguajeVisitor<? extends T>)visitor).visitImpresion(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ImpresionContext impresion() throws RecognitionException {
		ImpresionContext _localctx = new ImpresionContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_impresion);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(88);
			match(T__15);
			setState(89);
			match(T__4);
			setState(90);
			valor();
			setState(91);
			match(T__5);
			setState(92);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RetornoContext extends ParserRuleContext {
		public ValorContext valor() {
			return getRuleContext(ValorContext.class,0);
		}
		public RetornoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_retorno; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof LenguajeVisitor ) return ((LenguajeVisitor<? extends T>)visitor).visitRetorno(this);
			else return visitor.visitChildren(this);
		}
	}

	public final RetornoContext retorno() throws RecognitionException {
		RetornoContext _localctx = new RetornoContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_retorno);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(94);
			match(T__16);
			setState(95);
			valor();
			setState(96);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ValorContext extends ParserRuleContext {
		public TerminalNode TEXTO() { return getToken(LenguajeParser.TEXTO, 0); }
		public TerminalNode NUMERO() { return getToken(LenguajeParser.NUMERO, 0); }
		public NombreContext nombre() {
			return getRuleContext(NombreContext.class,0);
		}
		public ValorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valor; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof LenguajeVisitor ) return ((LenguajeVisitor<? extends T>)visitor).visitValor(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ValorContext valor() throws RecognitionException {
		ValorContext _localctx = new ValorContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_valor);
		try {
			setState(101);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TEXTO:
				enterOuterAlt(_localctx, 1);
				{
				setState(98);
				match(TEXTO);
				}
				break;
			case NUMERO:
				enterOuterAlt(_localctx, 2);
				{
				setState(99);
				match(NUMERO);
				}
				break;
			case ID:
				enterOuterAlt(_localctx, 3);
				{
				setState(100);
				nombre();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CadenaContext extends ParserRuleContext {
		public TerminalNode TEXTO() { return getToken(LenguajeParser.TEXTO, 0); }
		public NombreContext nombre() {
			return getRuleContext(NombreContext.class,0);
		}
		public CadenaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cadena; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof LenguajeVisitor ) return ((LenguajeVisitor<? extends T>)visitor).visitCadena(this);
			else return visitor.visitChildren(this);
		}
	}

	public final CadenaContext cadena() throws RecognitionException {
		CadenaContext _localctx = new CadenaContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_cadena);
		try {
			setState(105);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TEXTO:
				enterOuterAlt(_localctx, 1);
				{
				setState(103);
				match(TEXTO);
				}
				break;
			case ID:
				enterOuterAlt(_localctx, 2);
				{
				setState(104);
				nombre();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NombreContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(LenguajeParser.ID, 0); }
		public NombreContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nombre; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof LenguajeVisitor ) return ((LenguajeVisitor<? extends T>)visitor).visitNombre(this);
			else return visitor.visitChildren(this);
		}
	}

	public final NombreContext nombre() throws RecognitionException {
		NombreContext _localctx = new NombreContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_nombre);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(107);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EjecucionContext extends ParserRuleContext {
		public NombreContext nombre() {
			return getRuleContext(NombreContext.class,0);
		}
		public ArgumentosContext argumentos() {
			return getRuleContext(ArgumentosContext.class,0);
		}
		public EjecucionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ejecucion; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof LenguajeVisitor ) return ((LenguajeVisitor<? extends T>)visitor).visitEjecucion(this);
			else return visitor.visitChildren(this);
		}
	}

	public final EjecucionContext ejecucion() throws RecognitionException {
		EjecucionContext _localctx = new EjecucionContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_ejecucion);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(109);
			nombre();
			setState(110);
			match(T__4);
			setState(112);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ID) {
				{
				setState(111);
				argumentos();
				}
			}

			setState(114);
			match(T__5);
			setState(115);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0015v\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0001\u0000\u0001\u0000\u0001\u0000\u0005\u0000"+
		" \b\u0000\n\u0000\f\u0000#\t\u0000\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0003\u0001)\b\u0001\u0001\u0001\u0001\u0001\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u00021\b\u0002\u0001\u0002"+
		"\u0003\u00024\b\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003=\b\u0003\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0005\u0004C\b\u0004\n\u0004\f\u0004"+
		"F\t\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\n\u0001\n\u0001\n\u0003\nf\b\n\u0001\u000b\u0001\u000b"+
		"\u0003\u000bj\b\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0003\r"+
		"q\b\r\u0001\r\u0001\r\u0001\r\u0001\r\u0000\u0000\u000e\u0000\u0002\u0004"+
		"\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u0000\u0001\u0001"+
		"\u0000\n\u000ev\u0000!\u0001\u0000\u0000\u0000\u0002$\u0001\u0000\u0000"+
		"\u0000\u0004,\u0001\u0000\u0000\u0000\u00069\u0001\u0000\u0000\u0000\b"+
		"D\u0001\u0000\u0000\u0000\nG\u0001\u0000\u0000\u0000\fO\u0001\u0000\u0000"+
		"\u0000\u000eQ\u0001\u0000\u0000\u0000\u0010X\u0001\u0000\u0000\u0000\u0012"+
		"^\u0001\u0000\u0000\u0000\u0014e\u0001\u0000\u0000\u0000\u0016i\u0001"+
		"\u0000\u0000\u0000\u0018k\u0001\u0000\u0000\u0000\u001am\u0001\u0000\u0000"+
		"\u0000\u001c \u0003\u0002\u0001\u0000\u001d \u0003\u0004\u0002\u0000\u001e"+
		" \u0003\u001a\r\u0000\u001f\u001c\u0001\u0000\u0000\u0000\u001f\u001d"+
		"\u0001\u0000\u0000\u0000\u001f\u001e\u0001\u0000\u0000\u0000 #\u0001\u0000"+
		"\u0000\u0000!\u001f\u0001\u0000\u0000\u0000!\"\u0001\u0000\u0000\u0000"+
		"\"\u0001\u0001\u0000\u0000\u0000#!\u0001\u0000\u0000\u0000$%\u0005\u0001"+
		"\u0000\u0000%(\u0003\u0018\f\u0000&\'\u0005\u0002\u0000\u0000\')\u0003"+
		"\u0014\n\u0000(&\u0001\u0000\u0000\u0000()\u0001\u0000\u0000\u0000)*\u0001"+
		"\u0000\u0000\u0000*+\u0005\u0003\u0000\u0000+\u0003\u0001\u0000\u0000"+
		"\u0000,-\u0005\u0004\u0000\u0000-3\u0003\u0018\f\u0000.0\u0005\u0005\u0000"+
		"\u0000/1\u0003\u0006\u0003\u00000/\u0001\u0000\u0000\u000001\u0001\u0000"+
		"\u0000\u000012\u0001\u0000\u0000\u000024\u0005\u0006\u0000\u00003.\u0001"+
		"\u0000\u0000\u000034\u0001\u0000\u0000\u000045\u0001\u0000\u0000\u0000"+
		"56\u0005\u0007\u0000\u000067\u0003\b\u0004\u000078\u0005\b\u0000\u0000"+
		"8\u0005\u0001\u0000\u0000\u00009<\u0003\u0018\f\u0000:;\u0005\t\u0000"+
		"\u0000;=\u0003\u0006\u0003\u0000<:\u0001\u0000\u0000\u0000<=\u0001\u0000"+
		"\u0000\u0000=\u0007\u0001\u0000\u0000\u0000>C\u0003\n\u0005\u0000?C\u0003"+
		"\u000e\u0007\u0000@C\u0003\u0010\b\u0000AC\u0003\u0012\t\u0000B>\u0001"+
		"\u0000\u0000\u0000B?\u0001\u0000\u0000\u0000B@\u0001\u0000\u0000\u0000"+
		"BA\u0001\u0000\u0000\u0000CF\u0001\u0000\u0000\u0000DB\u0001\u0000\u0000"+
		"\u0000DE\u0001\u0000\u0000\u0000E\t\u0001\u0000\u0000\u0000FD\u0001\u0000"+
		"\u0000\u0000GH\u0003\u0018\f\u0000HI\u0005\u0002\u0000\u0000IJ\u0003\f"+
		"\u0006\u0000JK\u0005\u0005\u0000\u0000KL\u0003\u0016\u000b\u0000LM\u0005"+
		"\u0006\u0000\u0000MN\u0005\u0003\u0000\u0000N\u000b\u0001\u0000\u0000"+
		"\u0000OP\u0007\u0000\u0000\u0000P\r\u0001\u0000\u0000\u0000QR\u0003\u0018"+
		"\f\u0000RS\u0005\u0002\u0000\u0000ST\u0003\u0016\u000b\u0000TU\u0005\u000f"+
		"\u0000\u0000UV\u0003\u0016\u000b\u0000VW\u0005\u0003\u0000\u0000W\u000f"+
		"\u0001\u0000\u0000\u0000XY\u0005\u0010\u0000\u0000YZ\u0005\u0005\u0000"+
		"\u0000Z[\u0003\u0014\n\u0000[\\\u0005\u0006\u0000\u0000\\]\u0005\u0003"+
		"\u0000\u0000]\u0011\u0001\u0000\u0000\u0000^_\u0005\u0011\u0000\u0000"+
		"_`\u0003\u0014\n\u0000`a\u0005\u0003\u0000\u0000a\u0013\u0001\u0000\u0000"+
		"\u0000bf\u0005\u0014\u0000\u0000cf\u0005\u0013\u0000\u0000df\u0003\u0018"+
		"\f\u0000eb\u0001\u0000\u0000\u0000ec\u0001\u0000\u0000\u0000ed\u0001\u0000"+
		"\u0000\u0000f\u0015\u0001\u0000\u0000\u0000gj\u0005\u0014\u0000\u0000"+
		"hj\u0003\u0018\f\u0000ig\u0001\u0000\u0000\u0000ih\u0001\u0000\u0000\u0000"+
		"j\u0017\u0001\u0000\u0000\u0000kl\u0005\u0012\u0000\u0000l\u0019\u0001"+
		"\u0000\u0000\u0000mn\u0003\u0018\f\u0000np\u0005\u0005\u0000\u0000oq\u0003"+
		"\u0006\u0003\u0000po\u0001\u0000\u0000\u0000pq\u0001\u0000\u0000\u0000"+
		"qr\u0001\u0000\u0000\u0000rs\u0005\u0006\u0000\u0000st\u0005\u0003\u0000"+
		"\u0000t\u001b\u0001\u0000\u0000\u0000\u000b\u001f!(03<BDeip";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}