// Generated from Lenguaje.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LenguajeListener from './LenguajeListener.js';
import LenguajeVisitor from './LenguajeVisitor.js';

const serializedATN = [4,1,21,118,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,1,0,1,0,5,0,32,8,0,10,0,12,0,35,9,0,1,1,1,1,1,1,1,1,3,1,41,
8,1,1,1,1,1,1,2,1,2,1,2,1,2,3,2,49,8,2,1,2,3,2,52,8,2,1,2,1,2,1,2,1,2,1,
3,1,3,1,3,3,3,61,8,3,1,4,1,4,1,4,1,4,5,4,67,8,4,10,4,12,4,70,9,4,1,5,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,
1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,3,10,102,8,10,1,11,1,11,3,11,
106,8,11,1,12,1,12,1,13,1,13,1,13,3,13,113,8,13,1,13,1,13,1,13,1,13,0,0,
14,0,2,4,6,8,10,12,14,16,18,20,22,24,26,0,1,1,0,10,14,118,0,33,1,0,0,0,2,
36,1,0,0,0,4,44,1,0,0,0,6,57,1,0,0,0,8,68,1,0,0,0,10,71,1,0,0,0,12,79,1,
0,0,0,14,81,1,0,0,0,16,88,1,0,0,0,18,94,1,0,0,0,20,101,1,0,0,0,22,105,1,
0,0,0,24,107,1,0,0,0,26,109,1,0,0,0,28,32,3,2,1,0,29,32,3,4,2,0,30,32,3,
26,13,0,31,28,1,0,0,0,31,29,1,0,0,0,31,30,1,0,0,0,32,35,1,0,0,0,33,31,1,
0,0,0,33,34,1,0,0,0,34,1,1,0,0,0,35,33,1,0,0,0,36,37,5,1,0,0,37,40,3,24,
12,0,38,39,5,2,0,0,39,41,3,20,10,0,40,38,1,0,0,0,40,41,1,0,0,0,41,42,1,0,
0,0,42,43,5,3,0,0,43,3,1,0,0,0,44,45,5,4,0,0,45,51,3,24,12,0,46,48,5,5,0,
0,47,49,3,6,3,0,48,47,1,0,0,0,48,49,1,0,0,0,49,50,1,0,0,0,50,52,5,6,0,0,
51,46,1,0,0,0,51,52,1,0,0,0,52,53,1,0,0,0,53,54,5,7,0,0,54,55,3,8,4,0,55,
56,5,8,0,0,56,5,1,0,0,0,57,60,3,24,12,0,58,59,5,9,0,0,59,61,3,6,3,0,60,58,
1,0,0,0,60,61,1,0,0,0,61,7,1,0,0,0,62,67,3,10,5,0,63,67,3,14,7,0,64,67,3,
16,8,0,65,67,3,18,9,0,66,62,1,0,0,0,66,63,1,0,0,0,66,64,1,0,0,0,66,65,1,
0,0,0,67,70,1,0,0,0,68,66,1,0,0,0,68,69,1,0,0,0,69,9,1,0,0,0,70,68,1,0,0,
0,71,72,3,24,12,0,72,73,5,2,0,0,73,74,3,12,6,0,74,75,5,5,0,0,75,76,3,22,
11,0,76,77,5,6,0,0,77,78,5,3,0,0,78,11,1,0,0,0,79,80,7,0,0,0,80,13,1,0,0,
0,81,82,3,24,12,0,82,83,5,2,0,0,83,84,3,22,11,0,84,85,5,15,0,0,85,86,3,22,
11,0,86,87,5,3,0,0,87,15,1,0,0,0,88,89,5,16,0,0,89,90,5,5,0,0,90,91,3,20,
10,0,91,92,5,6,0,0,92,93,5,3,0,0,93,17,1,0,0,0,94,95,5,17,0,0,95,96,3,20,
10,0,96,97,5,3,0,0,97,19,1,0,0,0,98,102,5,20,0,0,99,102,5,19,0,0,100,102,
3,24,12,0,101,98,1,0,0,0,101,99,1,0,0,0,101,100,1,0,0,0,102,21,1,0,0,0,103,
106,5,20,0,0,104,106,3,24,12,0,105,103,1,0,0,0,105,104,1,0,0,0,106,23,1,
0,0,0,107,108,5,18,0,0,108,25,1,0,0,0,109,110,3,24,12,0,110,112,5,5,0,0,
111,113,3,6,3,0,112,111,1,0,0,0,112,113,1,0,0,0,113,114,1,0,0,0,114,115,
5,6,0,0,115,116,5,3,0,0,116,27,1,0,0,0,11,31,33,40,48,51,60,66,68,101,105,
112];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LenguajeParser extends antlr4.Parser {

    static grammarFileName = "Lenguaje.g4";
    static literalNames = [ null, "'variable'", "'='", "';'", "'funcion'", 
                            "'('", "')'", "'{'", "'}'", "','", "'mayusculas'", 
                            "'minusculas'", "'longitud'", "'invertir'", 
                            "'reemplazar'", "'+'", "'imprimir'", "'devolver'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "ID", "NUMERO", "TEXTO", "WS" ];
    static ruleNames = [ "programa", "declaracion", "funcion", "argumentos", 
                         "instrucciones", "operacion_texto", "transformacion", 
                         "concatenar", "impresion", "retorno", "valor", 
                         "cadena", "nombre", "ejecucion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LenguajeParser.ruleNames;
        this.literalNames = LenguajeParser.literalNames;
        this.symbolicNames = LenguajeParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LenguajeParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 262162) !== 0)) {
	            this.state = 31;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 1:
	                this.state = 28;
	                this.declaracion();
	                break;
	            case 4:
	                this.state = 29;
	                this.funcion();
	                break;
	            case 18:
	                this.state = 30;
	                this.ejecucion();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 35;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LenguajeParser.RULE_declaracion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(LenguajeParser.T__0);
	        this.state = 37;
	        this.nombre();
	        this.state = 40;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 38;
	            this.match(LenguajeParser.T__1);
	            this.state = 39;
	            this.valor();
	        }

	        this.state = 42;
	        this.match(LenguajeParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcion() {
	    let localctx = new FuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LenguajeParser.RULE_funcion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(LenguajeParser.T__3);
	        this.state = 45;
	        this.nombre();
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 46;
	            this.match(LenguajeParser.T__4);
	            this.state = 48;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 47;
	                this.argumentos();
	            }

	            this.state = 50;
	            this.match(LenguajeParser.T__5);
	        }

	        this.state = 53;
	        this.match(LenguajeParser.T__6);
	        this.state = 54;
	        this.instrucciones();
	        this.state = 55;
	        this.match(LenguajeParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentos() {
	    let localctx = new ArgumentosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LenguajeParser.RULE_argumentos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.nombre();
	        this.state = 60;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 58;
	            this.match(LenguajeParser.T__8);
	            this.state = 59;
	            this.argumentos();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LenguajeParser.RULE_instrucciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 458752) !== 0)) {
	            this.state = 66;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 62;
	                this.operacion_texto();
	                break;

	            case 2:
	                this.state = 63;
	                this.concatenar();
	                break;

	            case 3:
	                this.state = 64;
	                this.impresion();
	                break;

	            case 4:
	                this.state = 65;
	                this.retorno();
	                break;

	            }
	            this.state = 70;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operacion_texto() {
	    let localctx = new Operacion_textoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LenguajeParser.RULE_operacion_texto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.nombre();
	        this.state = 72;
	        this.match(LenguajeParser.T__1);
	        this.state = 73;
	        this.transformacion();
	        this.state = 74;
	        this.match(LenguajeParser.T__4);
	        this.state = 75;
	        this.cadena();
	        this.state = 76;
	        this.match(LenguajeParser.T__5);
	        this.state = 77;
	        this.match(LenguajeParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	transformacion() {
	    let localctx = new TransformacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LenguajeParser.RULE_transformacion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 31744) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	concatenar() {
	    let localctx = new ConcatenarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, LenguajeParser.RULE_concatenar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.nombre();
	        this.state = 82;
	        this.match(LenguajeParser.T__1);
	        this.state = 83;
	        this.cadena();
	        this.state = 84;
	        this.match(LenguajeParser.T__14);
	        this.state = 85;
	        this.cadena();
	        this.state = 86;
	        this.match(LenguajeParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	impresion() {
	    let localctx = new ImpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LenguajeParser.RULE_impresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(LenguajeParser.T__15);
	        this.state = 89;
	        this.match(LenguajeParser.T__4);
	        this.state = 90;
	        this.valor();
	        this.state = 91;
	        this.match(LenguajeParser.T__5);
	        this.state = 92;
	        this.match(LenguajeParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	retorno() {
	    let localctx = new RetornoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, LenguajeParser.RULE_retorno);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.match(LenguajeParser.T__16);
	        this.state = 95;
	        this.valor();
	        this.state = 96;
	        this.match(LenguajeParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, LenguajeParser.RULE_valor);
	    try {
	        this.state = 101;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 20:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 98;
	            this.match(LenguajeParser.TEXTO);
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 99;
	            this.match(LenguajeParser.NUMERO);
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 100;
	            this.nombre();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, LenguajeParser.RULE_cadena);
	    try {
	        this.state = 105;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 20:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 103;
	            this.match(LenguajeParser.TEXTO);
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 104;
	            this.nombre();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombre() {
	    let localctx = new NombreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, LenguajeParser.RULE_nombre);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this.match(LenguajeParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ejecucion() {
	    let localctx = new EjecucionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, LenguajeParser.RULE_ejecucion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this.nombre();
	        this.state = 110;
	        this.match(LenguajeParser.T__4);
	        this.state = 112;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 111;
	            this.argumentos();
	        }

	        this.state = 114;
	        this.match(LenguajeParser.T__5);
	        this.state = 115;
	        this.match(LenguajeParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LenguajeParser.EOF = antlr4.Token.EOF;
LenguajeParser.T__0 = 1;
LenguajeParser.T__1 = 2;
LenguajeParser.T__2 = 3;
LenguajeParser.T__3 = 4;
LenguajeParser.T__4 = 5;
LenguajeParser.T__5 = 6;
LenguajeParser.T__6 = 7;
LenguajeParser.T__7 = 8;
LenguajeParser.T__8 = 9;
LenguajeParser.T__9 = 10;
LenguajeParser.T__10 = 11;
LenguajeParser.T__11 = 12;
LenguajeParser.T__12 = 13;
LenguajeParser.T__13 = 14;
LenguajeParser.T__14 = 15;
LenguajeParser.T__15 = 16;
LenguajeParser.T__16 = 17;
LenguajeParser.ID = 18;
LenguajeParser.NUMERO = 19;
LenguajeParser.TEXTO = 20;
LenguajeParser.WS = 21;

LenguajeParser.RULE_programa = 0;
LenguajeParser.RULE_declaracion = 1;
LenguajeParser.RULE_funcion = 2;
LenguajeParser.RULE_argumentos = 3;
LenguajeParser.RULE_instrucciones = 4;
LenguajeParser.RULE_operacion_texto = 5;
LenguajeParser.RULE_transformacion = 6;
LenguajeParser.RULE_concatenar = 7;
LenguajeParser.RULE_impresion = 8;
LenguajeParser.RULE_retorno = 9;
LenguajeParser.RULE_valor = 10;
LenguajeParser.RULE_cadena = 11;
LenguajeParser.RULE_nombre = 12;
LenguajeParser.RULE_ejecucion = 13;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_programa;
    }

	declaracion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclaracionContext);
	    } else {
	        return this.getTypedRuleContext(DeclaracionContext,i);
	    }
	};

	funcion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncionContext);
	    } else {
	        return this.getTypedRuleContext(FuncionContext,i);
	    }
	};

	ejecucion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EjecucionContext);
	    } else {
	        return this.getTypedRuleContext(EjecucionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_declaracion;
    }

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterDeclaracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitDeclaracion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_funcion;
    }

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	argumentos() {
	    return this.getTypedRuleContext(ArgumentosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterFuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitFuncion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitFuncion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_argumentos;
    }

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	argumentos() {
	    return this.getTypedRuleContext(ArgumentosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterArgumentos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitArgumentos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitArgumentos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_instrucciones;
    }

	operacion_texto = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Operacion_textoContext);
	    } else {
	        return this.getTypedRuleContext(Operacion_textoContext,i);
	    }
	};

	concatenar = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConcatenarContext);
	    } else {
	        return this.getTypedRuleContext(ConcatenarContext,i);
	    }
	};

	impresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImpresionContext);
	    } else {
	        return this.getTypedRuleContext(ImpresionContext,i);
	    }
	};

	retorno = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RetornoContext);
	    } else {
	        return this.getTypedRuleContext(RetornoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Operacion_textoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_operacion_texto;
    }

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	transformacion() {
	    return this.getTypedRuleContext(TransformacionContext,0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterOperacion_texto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitOperacion_texto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitOperacion_texto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TransformacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_transformacion;
    }


	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterTransformacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitTransformacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitTransformacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConcatenarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_concatenar;
    }

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	cadena = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CadenaContext);
	    } else {
	        return this.getTypedRuleContext(CadenaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterConcatenar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitConcatenar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitConcatenar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_impresion;
    }

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterImpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitImpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitImpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RetornoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_retorno;
    }

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterRetorno(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitRetorno(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitRetorno(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_valor;
    }

	TEXTO() {
	    return this.getToken(LenguajeParser.TEXTO, 0);
	};

	NUMERO() {
	    return this.getToken(LenguajeParser.NUMERO, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_cadena;
    }

	TEXTO() {
	    return this.getToken(LenguajeParser.TEXTO, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_nombre;
    }

	ID() {
	    return this.getToken(LenguajeParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterNombre(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitNombre(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitNombre(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EjecucionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_ejecucion;
    }

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	argumentos() {
	    return this.getTypedRuleContext(ArgumentosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterEjecucion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitEjecucion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitEjecucion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




LenguajeParser.ProgramaContext = ProgramaContext; 
LenguajeParser.DeclaracionContext = DeclaracionContext; 
LenguajeParser.FuncionContext = FuncionContext; 
LenguajeParser.ArgumentosContext = ArgumentosContext; 
LenguajeParser.InstruccionesContext = InstruccionesContext; 
LenguajeParser.Operacion_textoContext = Operacion_textoContext; 
LenguajeParser.TransformacionContext = TransformacionContext; 
LenguajeParser.ConcatenarContext = ConcatenarContext; 
LenguajeParser.ImpresionContext = ImpresionContext; 
LenguajeParser.RetornoContext = RetornoContext; 
LenguajeParser.ValorContext = ValorContext; 
LenguajeParser.CadenaContext = CadenaContext; 
LenguajeParser.NombreContext = NombreContext; 
LenguajeParser.EjecucionContext = EjecucionContext; 
