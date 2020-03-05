define(['dart_sdk', 'packages/rxdart/src/streams/never', 'packages/bloc/bloc'], function(dart_sdk, packages__rxdart__src__streams__never, packages__bloc__bloc) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const where_type = packages__rxdart__src__streams__never.src__transformers__where_type;
  const bloc = packages__bloc__bloc.src__bloc;
  const bloc_delegate = packages__bloc__bloc.src__bloc_delegate;
  var ticker = Object.create(dart.library);
  var $_equals = dartx._equals;
  var $toString = dartx.toString;
  var StreamOfEmmitTick = () => (StreamOfEmmitTick = dart.constFn(async.Stream$(ticker.EmmitTick)))();
  var voidToEmmitTick = () => (voidToEmmitTick = dart.constFn(dart.fnType(ticker.EmmitTick, [dart.void])))();
  var EmmitTickToNull = () => (EmmitTickToNull = dart.constFn(dart.fnType(core.Null, [ticker.EmmitTick])))();
  var _AsyncStarImplOfBlocState = () => (_AsyncStarImplOfBlocState = dart.constFn(async._AsyncStarImpl$(ticker.BlocState)))();
  var FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  var JSArrayOfFutureOfvoid = () => (JSArrayOfFutureOfvoid = dart.constFn(_interceptors.JSArray$(FutureOfvoid())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ticker.TickType.prototype,
        [_name$]: "TickType.mutable",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ticker.TickType.prototype,
        [_name$]: "TickType.immutable",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], ticker.TickType);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1000000
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ticker.EmmitTick.prototype
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ticker.Stopped.prototype
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ticker.Started.prototype
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ticker.ImmutableTick.prototype
      });
    }
  });
  ticker.BlocEvent = class BlocEvent extends core.Object {};
  (ticker.BlocEvent.new = function() {
    ;
  }).prototype = ticker.BlocEvent.prototype;
  dart.addTypeTests(ticker.BlocEvent);
  dart.setLibraryUri(ticker.BlocEvent, "package:bad_bloc_feature/ticker.dart");
  ticker.StopTicker = class StopTicker extends ticker.BlocEvent {};
  (ticker.StopTicker.new = function() {
    ticker.StopTicker.__proto__.new.call(this);
    ;
  }).prototype = ticker.StopTicker.prototype;
  dart.addTypeTests(ticker.StopTicker);
  dart.setLibraryUri(ticker.StopTicker, "package:bad_bloc_feature/ticker.dart");
  ticker.StartTicker = class StartTicker extends ticker.BlocEvent {};
  (ticker.StartTicker.new = function() {
    ticker.StartTicker.__proto__.new.call(this);
    ;
  }).prototype = ticker.StartTicker.prototype;
  dart.addTypeTests(ticker.StartTicker);
  dart.setLibraryUri(ticker.StartTicker, "package:bad_bloc_feature/ticker.dart");
  ticker.EmmitTick = class EmmitTick extends ticker.BlocEvent {};
  (ticker.EmmitTick.new = function() {
    ticker.EmmitTick.__proto__.new.call(this);
    ;
  }).prototype = ticker.EmmitTick.prototype;
  dart.addTypeTests(ticker.EmmitTick);
  dart.setLibraryUri(ticker.EmmitTick, "package:bad_bloc_feature/ticker.dart");
  var tickType$ = dart.privateName(ticker, "SetTickType.tickType");
  ticker.SetTickType = class SetTickType extends ticker.BlocEvent {
    get tickType() {
      return this[tickType$];
    }
    set tickType(value) {
      super.tickType = value;
    }
  };
  (ticker.SetTickType.new = function(tickType) {
    this[tickType$] = tickType;
    ticker.SetTickType.__proto__.new.call(this);
    ;
  }).prototype = ticker.SetTickType.prototype;
  dart.addTypeTests(ticker.SetTickType);
  dart.setLibraryUri(ticker.SetTickType, "package:bad_bloc_feature/ticker.dart");
  dart.setFieldSignature(ticker.SetTickType, () => ({
    __proto__: dart.getFields(ticker.SetTickType.__proto__),
    tickType: dart.finalFieldType(ticker.TickType)
  }));
  ticker.BlocState = class BlocState extends core.Object {};
  (ticker.BlocState.new = function() {
    ;
  }).prototype = ticker.BlocState.prototype;
  dart.addTypeTests(ticker.BlocState);
  dart.setLibraryUri(ticker.BlocState, "package:bad_bloc_feature/ticker.dart");
  ticker.SwitchStatus = class SwitchStatus extends core.Object {};
  ticker.SwitchStatus[dart.mixinOn] = Object => class SwitchStatus extends Object {};
  (ticker.SwitchStatus[dart.mixinNew] = function() {
  }).prototype = ticker.SwitchStatus.prototype;
  dart.addTypeTests(ticker.SwitchStatus);
  ticker.SwitchStatus[dart.implements] = () => [core.Object];
  dart.setLibraryUri(ticker.SwitchStatus, "package:bad_bloc_feature/ticker.dart");
  const BlocState_SwitchStatus$36 = class BlocState_SwitchStatus extends ticker.BlocState {};
  (BlocState_SwitchStatus$36.new = function() {
    BlocState_SwitchStatus$36.__proto__.new.call(this);
  }).prototype = BlocState_SwitchStatus$36.prototype;
  dart.applyMixin(BlocState_SwitchStatus$36, ticker.SwitchStatus);
  ticker.Stopped = class Stopped extends BlocState_SwitchStatus$36 {
    get hashCode() {
      return 0;
    }
    _equals(obj) {
      if (obj == null) return false;
      return ticker.Stopped.is(obj);
    }
  };
  (ticker.Stopped.new = function() {
    ticker.Stopped.__proto__.new.call(this);
    ;
  }).prototype = ticker.Stopped.prototype;
  dart.addTypeTests(ticker.Stopped);
  dart.setMethodSignature(ticker.Stopped, () => ({
    __proto__: dart.getMethods(ticker.Stopped.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(ticker.Stopped, "package:bad_bloc_feature/ticker.dart");
  dart.defineExtensionMethods(ticker.Stopped, ['_equals']);
  dart.defineExtensionAccessors(ticker.Stopped, ['hashCode']);
  const BlocState_SwitchStatus$36$ = class BlocState_SwitchStatus extends ticker.BlocState {};
  (BlocState_SwitchStatus$36$.new = function() {
    BlocState_SwitchStatus$36$.__proto__.new.call(this);
  }).prototype = BlocState_SwitchStatus$36$.prototype;
  dart.applyMixin(BlocState_SwitchStatus$36$, ticker.SwitchStatus);
  ticker.Started = class Started extends BlocState_SwitchStatus$36$ {
    get hashCode() {
      return 0;
    }
    _equals(obj) {
      if (obj == null) return false;
      return ticker.Started.is(obj);
    }
  };
  (ticker.Started.new = function() {
    ticker.Started.__proto__.new.call(this);
    ;
  }).prototype = ticker.Started.prototype;
  dart.addTypeTests(ticker.Started);
  dart.setMethodSignature(ticker.Started, () => ({
    __proto__: dart.getMethods(ticker.Started.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(ticker.Started, "package:bad_bloc_feature/ticker.dart");
  dart.defineExtensionMethods(ticker.Started, ['_equals']);
  dart.defineExtensionAccessors(ticker.Started, ['hashCode']);
  ticker.Tick = class Tick extends core.Object {};
  ticker.Tick[dart.mixinOn] = Object => class Tick extends Object {};
  (ticker.Tick[dart.mixinNew] = function() {
  }).prototype = ticker.Tick.prototype;
  dart.addTypeTests(ticker.Tick);
  ticker.Tick[dart.implements] = () => [core.Object];
  dart.setLibraryUri(ticker.Tick, "package:bad_bloc_feature/ticker.dart");
  const BlocState_Tick$36 = class BlocState_Tick extends ticker.BlocState {};
  (BlocState_Tick$36.new = function() {
    BlocState_Tick$36.__proto__.new.call(this);
  }).prototype = BlocState_Tick$36.prototype;
  dart.applyMixin(BlocState_Tick$36, ticker.Tick);
  ticker.ImmutableTick = class ImmutableTick extends BlocState_Tick$36 {
    get hashCode() {
      return 0;
    }
    _equals(obj) {
      if (obj == null) return false;
      return ticker.Tick.is(obj);
    }
  };
  (ticker.ImmutableTick.new = function() {
    ticker.ImmutableTick.__proto__.new.call(this);
    ;
  }).prototype = ticker.ImmutableTick.prototype;
  dart.addTypeTests(ticker.ImmutableTick);
  dart.setMethodSignature(ticker.ImmutableTick, () => ({
    __proto__: dart.getMethods(ticker.ImmutableTick.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(ticker.ImmutableTick, "package:bad_bloc_feature/ticker.dart");
  dart.defineExtensionMethods(ticker.ImmutableTick, ['_equals']);
  dart.defineExtensionAccessors(ticker.ImmutableTick, ['hashCode']);
  var tickType$0 = dart.privateName(ticker, "TickTypeInstalled.tickType");
  ticker.TickTypeInstalled = class TickTypeInstalled extends ticker.BlocState {
    get tickType() {
      return this[tickType$0];
    }
    set tickType(value) {
      super.tickType = value;
    }
  };
  (ticker.TickTypeInstalled.new = function(tickType) {
    this[tickType$0] = tickType;
    ticker.TickTypeInstalled.__proto__.new.call(this);
    ;
  }).prototype = ticker.TickTypeInstalled.prototype;
  dart.addTypeTests(ticker.TickTypeInstalled);
  dart.setLibraryUri(ticker.TickTypeInstalled, "package:bad_bloc_feature/ticker.dart");
  dart.setFieldSignature(ticker.TickTypeInstalled, () => ({
    __proto__: dart.getFields(ticker.TickTypeInstalled.__proto__),
    tickType: dart.finalFieldType(ticker.TickType)
  }));
  const BlocState_Tick$36$ = class BlocState_Tick extends ticker.BlocState {};
  (BlocState_Tick$36$.new = function() {
    BlocState_Tick$36$.__proto__.new.call(this);
  }).prototype = BlocState_Tick$36$.prototype;
  dart.applyMixin(BlocState_Tick$36$, ticker.Tick);
  ticker.MutableTick = class MutableTick extends BlocState_Tick$36$ {};
  (ticker.MutableTick.new = function() {
    ticker.MutableTick.__proto__.new.call(this);
    ;
  }).prototype = ticker.MutableTick.prototype;
  dart.addTypeTests(ticker.MutableTick);
  dart.setLibraryUri(ticker.MutableTick, "package:bad_bloc_feature/ticker.dart");
  var _name$ = dart.privateName(ticker, "_name");
  var C0;
  var C1;
  var C2;
  ticker.TickType = class TickType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (ticker.TickType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = ticker.TickType.prototype;
  dart.addTypeTests(ticker.TickType);
  dart.setLibraryUri(ticker.TickType, "package:bad_bloc_feature/ticker.dart");
  dart.setFieldSignature(ticker.TickType, () => ({
    __proto__: dart.getFields(ticker.TickType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(ticker.TickType, ['toString']);
  ticker.TickType.mutable = C0 || CT.C0;
  ticker.TickType.immutable = C1 || CT.C1;
  ticker.TickType.values = C2 || CT.C2;
  var _tickType = dart.privateName(ticker, "_tickType");
  var _controller = dart.privateName(ticker, "_controller");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C3;
  var C4;
  var C5;
  var _emmitTick = dart.privateName(ticker, "_emmitTick");
  var _startTicker = dart.privateName(ticker, "_startTicker");
  var _stopTicker = dart.privateName(ticker, "_stopTicker");
  var _setTickType = dart.privateName(ticker, "_setTickType");
  var C6;
  var C7;
  ticker.Ticker = class Ticker extends bloc.Bloc$(ticker.BlocEvent, ticker.BlocState) {
    get initialState() {
      return C5 || CT.C5;
    }
    whereState(State) {
      return where_type['WhereTypeExtension|whereType'](ticker.BlocState, State, this);
    }
    mapEventToState(event) {
      ticker.BlocEvent._check(event);
      return new (_AsyncStarImplOfBlocState()).new((function* mapEventToState(stream) {
        if (ticker.EmmitTick.is(event)) {
          if (stream.add(this[_emmitTick](event))) return;
          yield;
        } else if (ticker.StartTicker.is(event)) {
          if (stream.addStream(this[_startTicker](event))) return;
          yield;
        } else if (ticker.StopTicker.is(event)) {
          if (stream.addStream(this[_stopTicker](event))) return;
          yield;
        } else if (ticker.SetTickType.is(event)) {
          if (stream.addStream(this[_setTickType](event))) return;
          yield;
        } else {
          dart.throw(new core.UnsupportedError.new("Unknown event"));
        }
      }).bind(this)).stream;
    }
    [_startTicker](_ = null) {
      return new (_AsyncStarImplOfBlocState()).new((function* _startTicker(stream) {
        this[_controller].resume();
        if (stream.add(C6 || CT.C6)) return;
        yield;
      }).bind(this)).stream;
    }
    [_stopTicker](_ = null) {
      return new (_AsyncStarImplOfBlocState()).new((function* _stopTicker(stream) {
        this[_controller].pause();
        if (stream.add(C5 || CT.C5)) return;
        yield;
      }).bind(this)).stream;
    }
    [_emmitTick](_ = null) {
      core.print(" * tick");
      if (dart.equals(this[_tickType], ticker.TickType.mutable)) {
        return new ticker.MutableTick.new();
      } else {
        return C7 || CT.C7;
      }
    }
    [_setTickType](event) {
      return new (_AsyncStarImplOfBlocState()).new((function* _setTickType(stream) {
        let t0, t0$;
        this[_tickType] = (t0$ = (t0 = event, t0 == null ? null : t0.tickType), t0$ == null ? ticker.TickType.mutable : t0$);
        if (stream.add(new ticker.TickTypeInstalled.new(this[_tickType]))) return;
        yield;
      }).bind(this)).stream;
    }
    close() {
      return async.Future.wait(dart.void, JSArrayOfFutureOfvoid().of([this[_controller].cancel(), super.close()]));
    }
  };
  (ticker.Ticker.new = function() {
    let t0;
    this[_tickType] = ticker.TickType.mutable;
    this[_controller] = (t0 = StreamOfEmmitTick().periodic(C3 || CT.C3).asBroadcastStream().map(ticker.EmmitTick, dart.fn(_ => C4 || CT.C4, voidToEmmitTick())).listen(dart.fn(event => {
    }, EmmitTickToNull())), t0.pause(), t0);
    ticker.Ticker.__proto__.new.call(this);
    this[_controller].onData(dart.bind(this, 'add'));
  }).prototype = ticker.Ticker.prototype;
  dart.addTypeTests(ticker.Ticker);
  dart.setMethodSignature(ticker.Ticker, () => ({
    __proto__: dart.getMethods(ticker.Ticker.__proto__),
    whereState: dart.gFnType(State => [async.Stream$(State), []]),
    mapEventToState: dart.fnType(async.Stream$(ticker.BlocState), [core.Object]),
    [_startTicker]: dart.fnType(async.Stream$(ticker.BlocState), [], [ticker.BlocEvent]),
    [_stopTicker]: dart.fnType(async.Stream$(ticker.BlocState), [], [ticker.BlocEvent]),
    [_emmitTick]: dart.fnType(ticker.BlocState, [], [ticker.BlocEvent]),
    [_setTickType]: dart.fnType(async.Stream$(ticker.BlocState), [ticker.SetTickType])
  }));
  dart.setGetterSignature(ticker.Ticker, () => ({
    __proto__: dart.getGetters(ticker.Ticker.__proto__),
    initialState: ticker.BlocState
  }));
  dart.setLibraryUri(ticker.Ticker, "package:bad_bloc_feature/ticker.dart");
  dart.setFieldSignature(ticker.Ticker, () => ({
    __proto__: dart.getFields(ticker.Ticker.__proto__),
    [_tickType]: dart.fieldType(ticker.TickType),
    [_controller]: dart.finalFieldType(async.StreamSubscription$(ticker.EmmitTick))
  }));
  ticker.TickerDelegate = class TickerDelegate extends bloc_delegate.BlocDelegate {
    onEvent(bloc, event) {
      super.onEvent(bloc, event);
      core.print("Event " + dart.str(dart.toString(event)));
    }
    onTransition(bloc, transition) {
      super.onTransition(bloc, transition);
    }
    onError(bloc, error, stacktrace) {
      super.onError(bloc, error, stacktrace);
      core.print("Error '" + dart.str(dart.toString(error)) + "' in BLoC '" + dart.str(dart.toString(bloc)) + "'");
    }
  };
  (ticker.TickerDelegate.new = function() {
    ;
  }).prototype = ticker.TickerDelegate.prototype;
  dart.addTypeTests(ticker.TickerDelegate);
  dart.setLibraryUri(ticker.TickerDelegate, "package:bad_bloc_feature/ticker.dart");
  dart.trackLibraries("packages/bad_bloc_feature/ticker", {
    "package:bad_bloc_feature/ticker.dart": ticker
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["ticker.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAamB;;;;;AAKX;;EAAY;;;;;AAKZ;;EAAa;;;;;AAKb;;EAAW;;;;;IAKF;;;;;;;;IACQ;AAAjB;;EAA0B;;;;;;;;;;EAOf;;;;;;;;;;;;;;;;;AAUG;IAAC;;UAEG;AAAQ,YAAI,mBAAJ,GAAG;IAAW;;;AAJxC;;EAAS;;;;;;;;;;;;;;;;;AAWK;IAAC;;UAEG;AAAQ,YAAI,mBAAJ,GAAG;IAAW;;;AAJxC;;EAAS;;;;;;;;;;;;;;;;;;;;;;;;AAcK;IAAC;;UAEG;AAAQ,YAAI,gBAAJ,GAAG;IAAQ;;;AAJrC;;EAAe;;;;;;;;;;;;IASN;;;;;;;;IACc;AAAvB;;EAAgC;;;;;;;;;;;;;;AAItC;;EAAa;;;;;;;;;;IAMf;;yCAHK;;;;EAGL;;;;;;;;;;;;;;;;;;;;;;;;;;AAQgC;IAAe;;AAER;IAAkB;;8BAeX;AAAX;AAC/B,YAAU,oBAAN,KAAK;AACP,yBAAM,iBAAW,KAAK;UAAtB;cACK,KAAU,sBAAN,KAAK;AACd,+BAAO,mBAAa,KAAK;UAAzB;cACK,KAAU,qBAAN,KAAK;AACd,+BAAO,kBAAY,KAAK;UAAxB;cACK,KAAU,sBAAN,KAAK;AACd,+BAAO,mBAAa,KAAK;UAAzB;;AAEuC,UAAvC,WAAM,8BAAiB;;MAE3B;;mBAE0C;AAAZ;AACR,QAApB,AAAY;AACZ;;MACF;;kBAEyC;AAAZ;AACR,QAAnB,AAAY;AACZ;;MACF;;iBAEgC;AACd,MAAhB,WAAM;AACN,UAAc,YAAV,iBAAsB;AACxB,cAAO;;AAIP;;IAEJ;mBAE2C;AAAb;;AACmB,QAA/C,mBAA4B,YAAhB,KAAK,eAAL,OAAO,qBAAP,OAA4B;AACxC,uBAAM,iCAAkB;QAAxB;MACF;;;AAIE,YAAO,8BAAmB,4BACxB,AAAY,4BACN;IACN;;;;IA1DK,kBAAqB;IAEM,0BAAY,AAEG,AACA,AACA,oFADe,QAAM,6CACd,QAAC;4BACP;AACpD;AACyB,IAAvB,AAAY,mCAAO;EACrB;;;;;;;;;;;;;;;;;;;;;;YAsDkB,MAAa;AACH,MAApB,cAAQ,IAAI,EAAE,KAAK;AACS,MAAlC,WAAM,AAA2B,oBAAZ,cAAN,KAAK;IACtB;iBAGuB,MAAiB;AACF,MAA9B,mBAAa,IAAI,EAAE,UAAU;IAErC;YAGkB,MAAa,OAAkB;AACT,MAAhC,cAAQ,IAAI,EAAE,KAAK,EAAE,UAAU;AACgC,MAArE,WAAM,AAA8D,qBAA7C,cAAN,KAAK,KAAY,yBAAoB,cAAL,IAAI,KAAY;IACnE;;;;EACF","file":"ticker.ddc.js"}');
  // Exports:
  return {
    ticker: ticker
  };
});

//# sourceMappingURL=ticker.ddc.js.map
