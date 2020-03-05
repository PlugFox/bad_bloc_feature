define(['dart_sdk', 'packages/rxdart/rxdart'], function(dart_sdk, packages__rxdart__rxdart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const publish_subject = packages__rxdart__rxdart.src__subjects__publish_subject;
  const behavior_subject = packages__rxdart__rxdart.src__subjects__behavior_subject;
  var bloc_supervisor = Object.create(dart.library);
  var bloc = Object.create(dart.library);
  var transition = Object.create(dart.library);
  var bloc_delegate = Object.create(dart.library);
  var bloc$ = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $hashCode = dartx.hashCode;
  var $_equals = dartx._equals;
  const CT = Object.create(null);
  var _delegate = dart.privateName(bloc_supervisor, "_delegate");
  bloc_supervisor.BlocSupervisor = class BlocSupervisor extends core.Object {
    static get delegate() {
      return bloc_supervisor.BlocSupervisor._instance[_delegate];
    }
    static set delegate(d) {
      let t0;
      bloc_supervisor.BlocSupervisor._instance[_delegate] = (t0 = d, t0 == null ? new bloc_delegate.BlocDelegate.new() : t0);
    }
  };
  (bloc_supervisor.BlocSupervisor.__ = function() {
    this[_delegate] = new bloc_delegate.BlocDelegate.new();
    ;
  }).prototype = bloc_supervisor.BlocSupervisor.prototype;
  dart.addTypeTests(bloc_supervisor.BlocSupervisor);
  dart.setLibraryUri(bloc_supervisor.BlocSupervisor, "package:bloc/src/bloc_supervisor.dart");
  dart.setFieldSignature(bloc_supervisor.BlocSupervisor, () => ({
    __proto__: dart.getFields(bloc_supervisor.BlocSupervisor.__proto__),
    [_delegate]: dart.fieldType(bloc_delegate.BlocDelegate)
  }));
  dart.defineLazy(bloc_supervisor.BlocSupervisor, {
    /*bloc_supervisor.BlocSupervisor._instance*/get _instance() {
      return new bloc_supervisor.BlocSupervisor.__();
    }
  });
  const _is_Transition_default = Symbol('_is_Transition_default');
  var currentState$ = dart.privateName(transition, "Transition.currentState");
  var event$ = dart.privateName(transition, "Transition.event");
  var nextState$ = dart.privateName(transition, "Transition.nextState");
  transition.Transition$ = dart.generic((Event, State) => {
    var TransitionOfEvent$State = () => (TransitionOfEvent$State = dart.constFn(transition.Transition$(Event, State)))();
    class Transition extends core.Object {
      get currentState() {
        return this[currentState$];
      }
      set currentState(value) {
        super.currentState = value;
      }
      get event() {
        return this[event$];
      }
      set event(value) {
        super.event = value;
      }
      get nextState() {
        return this[nextState$];
      }
      set nextState(value) {
        super.nextState = value;
      }
      _equals(other) {
        if (other == null) return false;
        return this === other || TransitionOfEvent$State().is(other) && dart.equals(this[$runtimeType], dart.runtimeType(other)) && dart.equals(this.currentState, other.currentState) && dart.equals(this.event, other.event) && dart.equals(this.nextState, other.nextState);
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.currentState)) ^ dart.notNull(dart.hashCode(this.event)) ^ dart.notNull(dart.hashCode(this.nextState))) >>> 0;
      }
      toString() {
        return "Transition { currentState: " + dart.str(this.currentState) + ", event: " + dart.str(this.event) + ", nextState: " + dart.str(this.nextState) + " }";
      }
    }
    (Transition.new = function(opts) {
      let currentState = opts && 'currentState' in opts ? opts.currentState : null;
      let event = opts && 'event' in opts ? opts.event : null;
      let nextState = opts && 'nextState' in opts ? opts.nextState : null;
      this[currentState$] = currentState;
      this[event$] = event;
      this[nextState$] = nextState;
      if (!(currentState != null)) dart.assertFailed(null, "org-dartlang-app:///packages/bloc/src/transition.dart", 23, 16, "currentState != null");
      if (!(event != null)) dart.assertFailed(null, "org-dartlang-app:///packages/bloc/src/transition.dart", 24, 16, "event != null");
      if (!(nextState != null)) dart.assertFailed(null, "org-dartlang-app:///packages/bloc/src/transition.dart", 25, 16, "nextState != null");
      ;
    }).prototype = Transition.prototype;
    dart.addTypeTests(Transition);
    Transition.prototype[_is_Transition_default] = true;
    dart.setMethodSignature(Transition, () => ({
      __proto__: dart.getMethods(Transition.__proto__),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object])
    }));
    dart.setLibraryUri(Transition, "package:bloc/src/transition.dart");
    dart.setFieldSignature(Transition, () => ({
      __proto__: dart.getFields(Transition.__proto__),
      currentState: dart.finalFieldType(State),
      event: dart.finalFieldType(Event),
      nextState: dart.finalFieldType(State)
    }));
    dart.defineExtensionMethods(Transition, ['_equals', 'toString']);
    dart.defineExtensionAccessors(Transition, ['hashCode']);
    return Transition;
  });
  transition.Transition = transition.Transition$();
  dart.addTypeTests(transition.Transition, _is_Transition_default);
  bloc_delegate.BlocDelegate = class BlocDelegate extends core.Object {
    onEvent(bloc, event) {
      return null;
    }
    onTransition(bloc, transition) {
      return null;
    }
    onError(bloc, error, stacktrace) {
      return null;
    }
  };
  (bloc_delegate.BlocDelegate.new = function() {
    ;
  }).prototype = bloc_delegate.BlocDelegate.prototype;
  dart.addTypeTests(bloc_delegate.BlocDelegate);
  dart.setMethodSignature(bloc_delegate.BlocDelegate, () => ({
    __proto__: dart.getMethods(bloc_delegate.BlocDelegate.__proto__),
    onEvent: dart.fnType(dart.void, [bloc$.Bloc, core.Object]),
    onTransition: dart.fnType(dart.void, [bloc$.Bloc, transition.Transition]),
    onError: dart.fnType(dart.void, [bloc$.Bloc, core.Object, core.StackTrace])
  }));
  dart.setLibraryUri(bloc_delegate.BlocDelegate, "package:bloc/src/bloc_delegate.dart");
  var _eventSubject = dart.privateName(bloc$, "_eventSubject");
  var _stateSubject = dart.privateName(bloc$, "_stateSubject");
  var _bindStateSubject = dart.privateName(bloc$, "_bindStateSubject");
  var _handleError = dart.privateName(bloc$, "_handleError");
  const _is_Bloc_default = Symbol('_is_Bloc_default');
  bloc$.Bloc$ = dart.generic((Event, State) => {
    var PublishSubjectOfEvent = () => (PublishSubjectOfEvent = dart.constFn(publish_subject.PublishSubject$(Event)))();
    var TransitionOfEvent$State = () => (TransitionOfEvent$State = dart.constFn(transition.Transition$(Event, State)))();
    var StreamOfEvent = () => (StreamOfEvent = dart.constFn(async.Stream$(Event)))();
    var EventToStreamOfState = () => (EventToStreamOfState = dart.constFn(dart.fnType(StreamOfState(), [Event])))();
    var BehaviorSubjectOfState = () => (BehaviorSubjectOfState = dart.constFn(behavior_subject.BehaviorSubject$(State)))();
    var StreamOfState = () => (StreamOfState = dart.constFn(async.Stream$(State)))();
    var StateToNull = () => (StateToNull = dart.constFn(dart.fnType(core.Null, [State])))();
    class Bloc extends async.Stream$(State) {
      get state() {
        return this[_stateSubject].value;
      }
      get isBroadcast() {
        return this[_stateSubject].isBroadcast;
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_stateSubject].listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      onEvent(event) {
        Event._check(event);
        return null;
      }
      onTransition(transition) {
        TransitionOfEvent$State()._check(transition);
        return null;
      }
      onError(error, stacktrace) {
        return null;
      }
      add(event) {
        Event._check(event);
        try {
          bloc_supervisor.BlocSupervisor.delegate.onEvent(this, event);
          this.onEvent(event);
          this[_eventSubject].sink.add(event);
        } catch (e) {
          let error = dart.getThrown(e);
          this[_handleError](error);
        }
      }
      close() {
        return async.async(dart.void, (function* close() {
          yield this[_eventSubject].close();
          yield this[_stateSubject].close();
        }).bind(this));
      }
      transformEvents(events, next) {
        StreamOfEvent()._check(events);
        EventToStreamOfState()._check(next);
        return events.asyncExpand(State, next);
      }
      transformStates(states) {
        StreamOfState()._check(states);
        return states;
      }
      [_bindStateSubject]() {
        let currentEvent = null;
        this.transformStates(this.transformEvents(this[_eventSubject], dart.fn(event => {
          currentEvent = event;
          return this.mapEventToState(currentEvent).handleError(dart.bind(this, _handleError));
        }, EventToStreamOfState()))).forEach(dart.fn(nextState => {
          if (dart.equals(this.state, nextState) || dart.test(this[_stateSubject].isClosed)) return;
          let transition = new (TransitionOfEvent$State()).new({currentState: this.state, event: currentEvent, nextState: nextState});
          try {
            bloc_supervisor.BlocSupervisor.delegate.onTransition(this, transition);
            this.onTransition(transition);
            this[_stateSubject].add(nextState);
          } catch (e) {
            let error = dart.getThrown(e);
            this[_handleError](error);
          }
        }, StateToNull()));
      }
      [_handleError](error, stacktrace = null) {
        bloc_supervisor.BlocSupervisor.delegate.onError(this, error, stacktrace);
        this.onError(error, stacktrace);
      }
    }
    (Bloc.new = function() {
      this[_eventSubject] = PublishSubjectOfEvent().new();
      this[_stateSubject] = null;
      Bloc.__proto__.new.call(this);
      this[_stateSubject] = BehaviorSubjectOfState().seeded(this.initialState);
      this[_bindStateSubject]();
    }).prototype = Bloc.prototype;
    dart.addTypeTests(Bloc);
    Bloc.prototype[_is_Bloc_default] = true;
    Bloc[dart.implements] = () => [core.Sink$(Event)];
    dart.setMethodSignature(Bloc, () => ({
      __proto__: dart.getMethods(Bloc.__proto__),
      listen: dart.fnType(async.StreamSubscription$(State), [dart.fnType(dart.void, [State])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {}),
      onEvent: dart.fnType(dart.void, [core.Object]),
      onTransition: dart.fnType(dart.void, [core.Object]),
      onError: dart.fnType(dart.void, [core.Object, core.StackTrace]),
      add: dart.fnType(dart.void, [core.Object]),
      close: dart.fnType(async.Future$(dart.void), []),
      transformEvents: dart.fnType(async.Stream$(State), [core.Object, core.Object]),
      transformStates: dart.fnType(async.Stream$(State), [core.Object]),
      [_bindStateSubject]: dart.fnType(dart.void, []),
      [_handleError]: dart.fnType(dart.void, [core.Object], [core.StackTrace])
    }));
    dart.setGetterSignature(Bloc, () => ({
      __proto__: dart.getGetters(Bloc.__proto__),
      state: State
    }));
    dart.setLibraryUri(Bloc, "package:bloc/src/bloc.dart");
    dart.setFieldSignature(Bloc, () => ({
      __proto__: dart.getFields(Bloc.__proto__),
      [_eventSubject]: dart.finalFieldType(publish_subject.PublishSubject$(Event)),
      [_stateSubject]: dart.fieldType(behavior_subject.BehaviorSubject$(State))
    }));
    return Bloc;
  });
  bloc$.Bloc = bloc$.Bloc$();
  dart.addTypeTests(bloc$.Bloc, _is_Bloc_default);
  dart.trackLibraries("packages/bloc/bloc", {
    "package:bloc/src/bloc_supervisor.dart": bloc_supervisor,
    "package:bloc/bloc.dart": bloc,
    "package:bloc/src/transition.dart": transition,
    "package:bloc/src/bloc_delegate.dart": bloc_delegate,
    "package:bloc/src/bloc.dart": bloc$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/bloc_supervisor.dart","src/transition.dart","src/bloc_delegate.dart","src/bloc.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;AAYsC,YAAA,AAAU;IAAS;wBAGtB;;AACU,MAAzC,AAAU,uDAAc,KAAF,CAAC,QAAD,OAAK;IAC7B;;;IAZa,kBAAY;;EAEP;;;;;;;;MAEU,wCAAS;YAAkB;;;;;;;;;;MCA3C;;;;;;MAGA;;;;;;MAGA;;;;;;;YAYY;AACpB,cAAA,AAAU,AAAa,UAAP,KAAK,IACf,6BAAN,KAAK,KACW,YAAZ,oBAAqB,iBAAN,KAAK,MACP,YAAb,mBAAgB,AAAM,KAAD,kBACf,YAAN,YAAS,AAAM,KAAD,WACJ,YAAV,gBAAa,AAAM,KAAD;MAAU;;AAIhC,cAAuC,EAAjB,aAAT,cAAb,mCAA8B,cAAN,4BAA2B,cAAV;MAAkB;;AAI3D,cAAA,AAAkF,0CAArD,qBAAY,uBAAU,cAAK,2BAAc,kBAAS;MAAG;;;UAtBrE;UACA;UACA;MAFA;MACA;MACA;YACJ,AAAa,YAAD,IAAI;YAChB,AAAM,KAAD,IAAI;YACT,AAAU,SAAD,IAAI;;IAAK;;;;;;;;;;;;;;;;;;;;;;YCfb,MAAa;AAAU;IAAI;iBAOtB,MAAiB;AAAe;IAAI;YAOzC,MAAa,OAAkB;AAAe;IAAI;;;;EACtE;;;;;;;;;;;;;;;;;;;;;;;;ACRqB,cAAA,AAAc;MAAK;;AAOd,cAAA,AAAc;MAAW;aAa1B;YACZ;YACO;YACX;AAEL,cAAO,AAAc,4BACnB,MAAM,YACG,OAAO,UACR,MAAM,iBACC,aAAa;MAEhC;;qBAImB;AAAU;MAAI;;yCAMU;AAAe;MAAI;cAM1C,OAAkB;AAAe;MAAI;;qBAO1C;AACb;AAC8C,UAA7B,AAAS,gDAAQ,MAAM,KAAK;AAC7B,UAAd,aAAQ,KAAK;AACgB,UAA7B,AAAc,AAAK,6BAAI,KAAK;;cACX;AACE,UAAnB,mBAAa,KAAK;;MAEtB;;AAUkB;AACW,UAA3B,MAAM,AAAc;AACO,UAA3B,MAAM,AAAc;QACtB;;sBA6BgB,QACgB;+BADhB;sCACgB;AAE9B,cAAO,AAAO,OAAD,oBAAa,IAAI;MAChC;;+BAuB4C;AAAW,qBAAM;;;AAGrD;AAqBL,QAnBD,AAGI,qBAHY,qBAAgB,qBAAe,QAAO;AAChC,UAApB,eAAe,KAAK;AACpB,gBAAO,AAA8B,sBAAd,YAAY,wBAAc;6CAEjD,QAAO;AACL,cAAU,YAAN,YAAS,SAAS,eAAI,AAAc,+BAAU;AAC5C,2BAAa,mDACH,mBACP,YAAY,aACR,SAAS;AAEtB;AACwD,YAAvC,AAAS,qDAAa,MAAM,UAAU;AAC7B,YAAxB,kBAAa,UAAU;AACK,YAA5B,AAAc,wBAAI,SAAS;;gBACV;AACE,YAAnB,mBAAa,KAAK;;;MAI1B;qBAEyB,OAAmB;AACc,QAAzC,AAAS,gDAAQ,MAAM,KAAK,EAAE,UAAU;AAC7B,QAA1B,aAAQ,KAAK,EAAE,UAAU;MAC3B;;;MAtK4B,sBAAgB;MAErB;AAavB;AAC6D,MAA3D,sBAAc,gCAAgC;AAC3B,MAAnB;IACF","file":"bloc.ddc.js"}');
  // Exports:
  return {
    src__bloc_supervisor: bloc_supervisor,
    bloc: bloc,
    src__transition: transition,
    src__bloc_delegate: bloc_delegate,
    src__bloc: bloc$
  };
});

//# sourceMappingURL=bloc.ddc.js.map
