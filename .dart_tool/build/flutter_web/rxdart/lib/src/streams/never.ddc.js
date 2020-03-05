define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const collection$ = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var window$ = Object.create(dart.library);
  var backpressure = Object.create(dart.library);
  var scan = Object.create(dart.library);
  var interval = Object.create(dart.library);
  var never = Object.create(dart.library);
  var where_type = Object.create(dart.library);
  var start_with_many = Object.create(dart.library);
  var switch_map = Object.create(dart.library);
  var materialize = Object.create(dart.library);
  var notification = Object.create(dart.library);
  var timer = Object.create(dart.library);
  var sample = Object.create(dart.library);
  var max = Object.create(dart.library);
  var group_by = Object.create(dart.library);
  var take_until = Object.create(dart.library);
  var throttle = Object.create(dart.library);
  var timestamp = Object.create(dart.library);
  var switch_if_empty = Object.create(dart.library);
  var on_error_resume = Object.create(dart.library);
  var with_latest_from = Object.create(dart.library);
  var time_interval = Object.create(dart.library);
  var skip_until = Object.create(dart.library);
  var flat_map = Object.create(dart.library);
  var dematerialize = Object.create(dart.library);
  var pairwise = Object.create(dart.library);
  var debounce = Object.create(dart.library);
  var delay = Object.create(dart.library);
  var default_if_empty = Object.create(dart.library);
  var distinct_unique = Object.create(dart.library);
  var exhaust_map = Object.create(dart.library);
  var buffer = Object.create(dart.library);
  var start_with = Object.create(dart.library);
  var map_to = Object.create(dart.library);
  var $do = Object.create(dart.library);
  var min = Object.create(dart.library);
  var ignore_elements = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $length = dartx.length;
  var $sublist = dartx.sublist;
  var $clear = dartx.clear;
  var $addAll = dartx.addAll;
  var $add = dartx.add;
  var $last = dartx.last;
  var $forEach = dartx.forEach;
  var $hashCode = dartx.hashCode;
  var $_equals = dartx._equals;
  var $sort = dartx.sort;
  var $putIfAbsent = dartx.putIfAbsent;
  var $values = dartx.values;
  var $where = dartx.where;
  var $_get = dartx._get;
  var $any = dartx.any;
  var $every = dartx.every;
  var $_set = dartx._set;
  var $map = dartx.map;
  var $remove = dartx.remove;
  var $isEmpty = dartx.isEmpty;
  var $first = dartx.first;
  var boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [], [core.bool])))();
  var dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var FutureToNull = () => (FutureToNull = dart.constFn(dart.fnType(core.Null, [], [async.Future])))();
  var VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  var StreamOfvoid = () => (StreamOfvoid = dart.constFn(async.Stream$(dart.void)))();
  var FutureTovoid = () => (FutureTovoid = dart.constFn(dart.fnType(dart.void, [], [async.Future])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var JSArrayOfFuture = () => (JSArrayOfFuture = dart.constFn(_interceptors.JSArray$(async.Future)))();
  var FutureToFuture = () => (FutureToFuture = dart.constFn(dart.fnType(async.Future, [async.Future])))();
  var VoidToStreamOfS = () => (VoidToStreamOfS = dart.constFn(dart.gFnType(S => {
    var StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    return [StreamOfS(), []];
  })))();
  var FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  var VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  var dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  var TimerStreamOfbool = () => (TimerStreamOfbool = dart.constFn(timer.TimerStream$(core.bool)))();
  var dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  var FutureTobool = () => (FutureTobool = dart.constFn(dart.fnType(core.bool, [async.Future])))();
  var FutureOfList = () => (FutureOfList = dart.constFn(async.Future$(core.List)))();
  var VoidToFutureOfList = () => (VoidToFutureOfList = dart.constFn(dart.fnType(FutureOfList(), [])))();
  var JSArrayOfStream = () => (JSArrayOfStream = dart.constFn(_interceptors.JSArray$(async.Stream)))();
  var ListOfbool = () => (ListOfbool = dart.constFn(core.List$(core.bool)))();
  var boolTobool = () => (boolTobool = dart.constFn(dart.fnType(core.bool, [core.bool])))();
  var ListOfStreamSubscription = () => (ListOfStreamSubscription = dart.constFn(core.List$(async.StreamSubscription)))();
  var StreamSubscriptionToFuture = () => (StreamSubscriptionToFuture = dart.constFn(dart.fnType(async.Future, [async.StreamSubscription])))();
  var NeverStreamOfvoid = () => (NeverStreamOfvoid = dart.constFn(never.NeverStream$(dart.void)))();
  var JSArrayOfTimer = () => (JSArrayOfTimer = dart.constFn(_interceptors.JSArray$(async.Timer)))();
  var TimerTovoid = () => (TimerTovoid = dart.constFn(dart.fnType(dart.void, [async.Timer])))();
  var SToStreamOfS = () => (SToStreamOfS = dart.constFn(dart.gFnType(S => {
    var StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    return [StreamOfS(), [S]];
  })))();
  var LinkedMapOfStream$StreamSubscription = () => (LinkedMapOfStream$StreamSubscription = dart.constFn(_js_helper.LinkedMap$(async.Stream, async.StreamSubscription)))();
  var VoidToStreamSubscription = () => (VoidToStreamSubscription = dart.constFn(dart.fnType(async.StreamSubscription, [])))();
  var FutureTovoid$ = () => (FutureTovoid$ = dart.constFn(dart.fnType(dart.void, [async.Future])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: backpressure.WindowStrategy.prototype,
        [_name$]: "WindowStrategy.eventAfterLastWindow",
        index: 1
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: backpressure.WindowStrategy.prototype,
        [_name$]: "WindowStrategy.firstEventOnly",
        index: 2
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: backpressure.WindowStrategy.prototype,
        [_name$]: "WindowStrategy.everyEvent",
        index: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: backpressure.WindowStrategy.prototype,
        [_name$]: "WindowStrategy.onHandler",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C2 || CT.C2, C0 || CT.C0, C1 || CT.C1, C3 || CT.C3], backpressure.WindowStrategy);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: notification.Kind.prototype,
        [_name$0]: "Kind.OnData",
        index: 0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: notification.Kind.prototype,
        [_name$0]: "Kind.OnDone",
        index: 1
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: notification.Kind.prototype,
        [_name$0]: "Kind.OnError",
        index: 2
      });
    },
    get C8() {
      return C8 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], notification.Kind);
    },
    get C9() {
      return C9 = dart.fn(delay.DelayStreamTransformer._cancelTimerIfActive, TimerTovoid());
    }
  });
  var _transformer = dart.privateName(backpressure, "_transformer");
  var _name$ = dart.privateName(backpressure, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  const _is_BackpressureStreamTransformer_default = Symbol('_is_BackpressureStreamTransformer_default');
  backpressure.BackpressureStreamTransformer$ = dart.generic((S, T) => {
    var StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    class BackpressureStreamTransformer extends async.StreamTransformerBase$(S, T) {
      bind(stream) {
        StreamOfS()._check(stream);
        return this[_transformer].bind(stream);
      }
      static _buildTransformer(S, T, strategy, windowStreamFactory, onWindowStart, onWindowEnd, startBufferEvery, closeWindowWhen, ignoreEmptyWindows, dispatchOnClose) {
        return new (async._StreamSubscriptionTransformer$(S, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let windowSubscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              let skip = 0;
              let queue = _interceptors.JSArray$(S).of([]);
              let resolveWindowStart = dart.fn(event => {
                if (onWindowStart != null) controller.add(onWindowStart(event));
              }, dart.fnType(core.Null, [S]));
              let resolveWindowEnd = dart.fn((isControllerClosing = false) => {
                let t0, t1;
                if (dart.test(isControllerClosing) || dart.equals(strategy, backpressure.WindowStrategy.eventAfterLastWindow) || dart.equals(strategy, backpressure.WindowStrategy.everyEvent)) {
                  t0 = windowSubscription;
                  t0 == null ? null : t0.cancel();
                  windowSubscription = null;
                }
                if (dart.test(isControllerClosing) && !dart.test(dispatchOnClose)) return;
                if (dart.test(queue[$isNotEmpty]) || !dart.test(ignoreEmptyWindows)) {
                  if (onWindowEnd != null) {
                    try {
                      controller.add(onWindowEnd(core.List$(S).unmodifiable(queue)));
                    } catch (e$) {
                      let e = dart.getThrown(e$);
                      let s = dart.stackTrace(e$);
                      controller.addError(e, s);
                    }
                  }
                  if (!dart.test(isControllerClosing) && dart.notNull(startBufferEvery) > 0) {
                    try {
                      let startWith = dart.notNull(startBufferEvery) < dart.notNull(queue[$length]) ? queue[$sublist](startBufferEvery) : _interceptors.JSArray$(S).of([]);
                      skip = dart.notNull(startBufferEvery) > dart.notNull(queue[$length]) ? dart.notNull(startBufferEvery) - dart.notNull(queue[$length]) : 0;
                      t1 = queue;
                      t1[$clear]();
                      t1[$addAll](startWith);
                      t1;
                    } catch (e$0) {
                      let e = dart.getThrown(e$0);
                      let s = dart.stackTrace(e$0);
                      controller.addError(e, s);
                    }
                  } else {
                    queue[$clear]();
                  }
                }
              }, boolToNull());
              let buildStream = dart.fn(event => {
                let t2;
                let stream = null;
                t2 = windowSubscription;
                t2 == null ? null : t2.cancel();
                try {
                  stream = windowStreamFactory(event);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
                if (stream == null) {
                  controller.addError(new core.ArgumentError.notNull("windowStreamFactory"));
                }
                return stream;
              }, dart.fnType(async.Stream, [S]));
              let singleWindow = dart.fn(event => buildStream(event).take(1).listen(null, {onError: dart.bind(controller, 'addError'), onDone: resolveWindowEnd, cancelOnError: cancelOnError}), dart.fnType(async.StreamSubscription, [S]));
              let multiWindow = dart.fn(event => buildStream(event).listen(dart.fn(_ => resolveWindowEnd(), dynamicToNull()), {onError: dart.bind(controller, 'addError'), onDone: resolveWindowEnd, cancelOnError: cancelOnError}), dart.fnType(async.StreamSubscription, [S]));
              let maybeCreateWindow = dart.fn(event => {
                let t3;
                try {
                  switch (strategy) {
                    case C0 || CT.C0:
                    {
                      if (windowSubscription != null) return;
                      windowSubscription = singleWindow(event);
                      resolveWindowStart(event);
                      break;
                    }
                    case C1 || CT.C1:
                    {
                      if (windowSubscription != null) return;
                      windowSubscription = multiWindow(event);
                      resolveWindowStart(event);
                      break;
                    }
                    case C2 || CT.C2:
                    {
                      t3 = windowSubscription;
                      t3 == null ? null : t3.cancel();
                      windowSubscription = singleWindow(event);
                      resolveWindowStart(event);
                      break;
                    }
                    case C3 || CT.C3:
                    {
                      break;
                    }
                  }
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [S]));
              let maybeCloseWindow = dart.fn(() => {
                if (closeWindowWhen != null && dart.test(closeWindowWhen(new (collection$.UnmodifiableListView$(S)).new(queue)))) {
                  resolveWindowEnd();
                }
              }, VoidToNull());
              let onData = dart.fn(event => {
                maybeCreateWindow(event);
                if (skip === 0) queue[$add](event);
                if (skip > 0) skip = skip - 1;
                maybeCloseWindow();
              }, dart.fnType(core.Null, [S]));
              let onDone = dart.fn(() => {
                if (dart.test(queue[$isNotEmpty])) resolveWindowStart(queue[$last]);
                resolveWindowEnd(true);
                queue[$clear]();
                controller.close();
              }, VoidToNull());
              subscription = input.listen(onData, {onError: dart.bind(controller, 'addError'), onDone: onDone, cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => {
              let t4;
              t4 = windowSubscription;
              t4 == null ? null : t4.pause(resumeSignal);
              subscription.pause(resumeSignal);
            }, FutureToNull()), onResume: dart.fn(() => {
              let t4;
              t4 = windowSubscription;
              t4 == null ? null : t4.resume();
              subscription.resume();
            }, VoidToNull()), onCancel: dart.fn(() => {
              let t4;
              t4 = windowSubscription;
              t4 == null ? null : t4.cancel();
              return subscription.cancel();
            }, VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(S), core.bool])));
      }
    }
    (BackpressureStreamTransformer.new = function(strategy, windowStreamFactory, opts) {
      let onWindowStart = opts && 'onWindowStart' in opts ? opts.onWindowStart : null;
      let onWindowEnd = opts && 'onWindowEnd' in opts ? opts.onWindowEnd : null;
      let startBufferEvery = opts && 'startBufferEvery' in opts ? opts.startBufferEvery : 0;
      let closeWindowWhen = opts && 'closeWindowWhen' in opts ? opts.closeWindowWhen : null;
      let ignoreEmptyWindows = opts && 'ignoreEmptyWindows' in opts ? opts.ignoreEmptyWindows : true;
      let dispatchOnClose = opts && 'dispatchOnClose' in opts ? opts.dispatchOnClose : true;
      this[_transformer] = backpressure.BackpressureStreamTransformer._buildTransformer(S, T, strategy, windowStreamFactory, onWindowStart, onWindowEnd, startBufferEvery, closeWindowWhen, ignoreEmptyWindows, dispatchOnClose);
      BackpressureStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = BackpressureStreamTransformer.prototype;
    dart.addTypeTests(BackpressureStreamTransformer);
    BackpressureStreamTransformer.prototype[_is_BackpressureStreamTransformer_default] = true;
    dart.setMethodSignature(BackpressureStreamTransformer, () => ({
      __proto__: dart.getMethods(BackpressureStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(BackpressureStreamTransformer, "package:rxdart/src/transformers/backpressure/backpressure.dart");
    dart.setFieldSignature(BackpressureStreamTransformer, () => ({
      __proto__: dart.getFields(BackpressureStreamTransformer.__proto__),
      [_transformer]: dart.finalFieldType(async.StreamTransformer$(S, T))
    }));
    return BackpressureStreamTransformer;
  });
  backpressure.BackpressureStreamTransformer = backpressure.BackpressureStreamTransformer$();
  dart.addTypeTests(backpressure.BackpressureStreamTransformer, _is_BackpressureStreamTransformer_default);
  const _is_WindowStreamTransformer_default = Symbol('_is_WindowStreamTransformer_default');
  window$.WindowStreamTransformer$ = dart.generic(T => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    var ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    var ListOfTToStreamOfT = () => (ListOfTToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [ListOfT()])))();
    class WindowStreamTransformer extends backpressure.BackpressureStreamTransformer$(T, async.Stream$(T)) {}
    (WindowStreamTransformer.new = function(window) {
      WindowStreamTransformer.__proto__.new.call(this, backpressure.WindowStrategy.firstEventOnly, window, {onWindowEnd: dart.fn(queue => StreamOfT().fromIterable(queue), ListOfTToStreamOfT()), ignoreEmptyWindows: false});
      if (window == null) dart.throw(new core.ArgumentError.notNull("window"));
    }).prototype = WindowStreamTransformer.prototype;
    dart.addTypeTests(WindowStreamTransformer);
    WindowStreamTransformer.prototype[_is_WindowStreamTransformer_default] = true;
    dart.setLibraryUri(WindowStreamTransformer, "package:rxdart/src/transformers/backpressure/window.dart");
    return WindowStreamTransformer;
  });
  window$.WindowStreamTransformer = window$.WindowStreamTransformer$();
  dart.addTypeTests(window$.WindowStreamTransformer, _is_WindowStreamTransformer_default);
  const _is_WindowCountStreamTransformer_default = Symbol('_is_WindowCountStreamTransformer_default');
  window$.WindowCountStreamTransformer$ = dart.generic(T => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    var ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    var ListOfTToStreamOfT = () => (ListOfTToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [ListOfT()])))();
    var IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    var IterableOfTTobool = () => (IterableOfTTobool = dart.constFn(dart.fnType(core.bool, [IterableOfT()])))();
    class WindowCountStreamTransformer extends backpressure.BackpressureStreamTransformer$(T, async.Stream$(T)) {}
    (WindowCountStreamTransformer.new = function(count, startBufferEvery = 0) {
      WindowCountStreamTransformer.__proto__.new.call(this, backpressure.WindowStrategy.onHandler, null, {onWindowEnd: dart.fn(queue => StreamOfT().fromIterable(queue), ListOfTToStreamOfT()), startBufferEvery: startBufferEvery, closeWindowWhen: dart.fn(queue => queue[$length] == count, IterableOfTTobool())});
      if (count == null) dart.throw(new core.ArgumentError.notNull("count"));
      if (startBufferEvery == null) {
        dart.throw(new core.ArgumentError.notNull("startBufferEvery"));
      }
      if (dart.notNull(count) < 1) dart.throw(new core.ArgumentError.value(count, "count"));
      if (dart.notNull(startBufferEvery) < 0) {
        dart.throw(new core.ArgumentError.value(startBufferEvery, "startBufferEvery"));
      }
    }).prototype = WindowCountStreamTransformer.prototype;
    dart.addTypeTests(WindowCountStreamTransformer);
    WindowCountStreamTransformer.prototype[_is_WindowCountStreamTransformer_default] = true;
    dart.setLibraryUri(WindowCountStreamTransformer, "package:rxdart/src/transformers/backpressure/window.dart");
    return WindowCountStreamTransformer;
  });
  window$.WindowCountStreamTransformer = window$.WindowCountStreamTransformer$();
  dart.addTypeTests(window$.WindowCountStreamTransformer, _is_WindowCountStreamTransformer_default);
  const _is_WindowTestStreamTransformer_default = Symbol('_is_WindowTestStreamTransformer_default');
  window$.WindowTestStreamTransformer$ = dart.generic(T => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    var ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    var ListOfTToStreamOfT = () => (ListOfTToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [ListOfT()])))();
    var IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    var IterableOfTTobool = () => (IterableOfTTobool = dart.constFn(dart.fnType(core.bool, [IterableOfT()])))();
    class WindowTestStreamTransformer extends backpressure.BackpressureStreamTransformer$(T, async.Stream$(T)) {}
    (WindowTestStreamTransformer.new = function(test) {
      WindowTestStreamTransformer.__proto__.new.call(this, backpressure.WindowStrategy.onHandler, null, {onWindowEnd: dart.fn(queue => StreamOfT().fromIterable(queue), ListOfTToStreamOfT()), closeWindowWhen: dart.fn(queue => test(queue[$last]), IterableOfTTobool())});
      if (test == null) dart.throw(new core.ArgumentError.notNull("test"));
    }).prototype = WindowTestStreamTransformer.prototype;
    dart.addTypeTests(WindowTestStreamTransformer);
    WindowTestStreamTransformer.prototype[_is_WindowTestStreamTransformer_default] = true;
    dart.setLibraryUri(WindowTestStreamTransformer, "package:rxdart/src/transformers/backpressure/window.dart");
    return WindowTestStreamTransformer;
  });
  window$.WindowTestStreamTransformer = window$.WindowTestStreamTransformer$();
  dart.addTypeTests(window$.WindowTestStreamTransformer, _is_WindowTestStreamTransformer_default);
  window$['WindowExtensions|window'] = function WindowExtensions$124window(T, $this, window) {
    return $this.transform(async.Stream$(T), new (window$.WindowStreamTransformer$(T)).new(dart.fn(_ => window, dart.fnType(async.Stream, [T]))));
  };
  window$['WindowExtensions|get#window'] = function WindowExtensions$124get$35window(T, $this) {
    return dart.fn(window => window$['WindowExtensions|window'](T, $this, window), dart.fnType(async.Stream$(async.Stream$(T)), [async.Stream]));
  };
  window$['WindowExtensions|windowCount'] = function WindowExtensions$124windowCount(T, $this, count, startBufferEvery = 0) {
    return $this.transform(async.Stream$(T), new (window$.WindowCountStreamTransformer$(T)).new(count, startBufferEvery));
  };
  window$['WindowExtensions|get#windowCount'] = function WindowExtensions$124get$35windowCount(T, $this) {
    return dart.fn((count, startBufferEvery = 0) => window$['WindowExtensions|windowCount'](T, $this, count, startBufferEvery), dart.fnType(async.Stream$(async.Stream$(T)), [core.int], [core.int]));
  };
  window$['WindowExtensions|windowTest'] = function WindowExtensions$124windowTest(T, $this, onTestHandler) {
    return $this.transform(async.Stream$(T), new (window$.WindowTestStreamTransformer$(T)).new(onTestHandler));
  };
  window$['WindowExtensions|get#windowTest'] = function WindowExtensions$124get$35windowTest(T, $this) {
    return dart.fn(onTestHandler => window$['WindowExtensions|windowTest'](T, $this, onTestHandler), dart.fnType(async.Stream$(async.Stream$(T)), [dart.fnType(core.bool, [T])]));
  };
  window$['WindowExtensions|windowTime'] = function WindowExtensions$124windowTime(T, $this, duration) {
    if (duration == null) dart.throw(new core.ArgumentError.notNull("duration"));
    return window$['WindowExtensions|window'](T, $this, StreamOfvoid().periodic(duration));
  };
  window$['WindowExtensions|get#windowTime'] = function WindowExtensions$124get$35windowTime(T, $this) {
    return dart.fn(duration => window$['WindowExtensions|windowTime'](T, $this, duration), dart.fnType(async.Stream$(async.Stream$(T)), [core.Duration]));
  };
  var C4;
  backpressure.WindowStrategy = class WindowStrategy extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (backpressure.WindowStrategy.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = backpressure.WindowStrategy.prototype;
  dart.addTypeTests(backpressure.WindowStrategy);
  dart.setLibraryUri(backpressure.WindowStrategy, "package:rxdart/src/transformers/backpressure/backpressure.dart");
  dart.setFieldSignature(backpressure.WindowStrategy, () => ({
    __proto__: dart.getFields(backpressure.WindowStrategy.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(backpressure.WindowStrategy, ['toString']);
  backpressure.WindowStrategy.everyEvent = C2 || CT.C2;
  backpressure.WindowStrategy.eventAfterLastWindow = C0 || CT.C0;
  backpressure.WindowStrategy.firstEventOnly = C1 || CT.C1;
  backpressure.WindowStrategy.onHandler = C3 || CT.C3;
  backpressure.WindowStrategy.values = C4 || CT.C4;
  var _transformer$ = dart.privateName(scan, "_transformer");
  const _is_ScanStreamTransformer_default = Symbol('_is_ScanStreamTransformer_default');
  scan.ScanStreamTransformer$ = dart.generic((T, S) => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class ScanStreamTransformer extends async.StreamTransformerBase$(T, S) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$].bind(stream);
      }
      static _buildTransformer(T, S, accumulator, seed = null) {
        return new (async._StreamSubscriptionTransformer$(T, S)).new(dart.fn((input, cancelOnError) => {
          let index = 0;
          let acc = seed;
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(S).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                let t12;
                try {
                  acc = accumulator(acc, value, (t12 = index, index = t12 + 1, t12));
                  controller.add(acc);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(S), [async.Stream$(T), core.bool])));
      }
    }
    (ScanStreamTransformer.new = function(accumulator, seed = null) {
      this[_transformer$] = scan.ScanStreamTransformer._buildTransformer(T, S, accumulator, seed);
      ScanStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = ScanStreamTransformer.prototype;
    dart.addTypeTests(ScanStreamTransformer);
    ScanStreamTransformer.prototype[_is_ScanStreamTransformer_default] = true;
    dart.setMethodSignature(ScanStreamTransformer, () => ({
      __proto__: dart.getMethods(ScanStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setLibraryUri(ScanStreamTransformer, "package:rxdart/src/transformers/scan.dart");
    dart.setFieldSignature(ScanStreamTransformer, () => ({
      __proto__: dart.getFields(ScanStreamTransformer.__proto__),
      [_transformer$]: dart.finalFieldType(async.StreamTransformer$(T, S))
    }));
    return ScanStreamTransformer;
  });
  scan.ScanStreamTransformer = scan.ScanStreamTransformer$();
  dart.addTypeTests(scan.ScanStreamTransformer, _is_ScanStreamTransformer_default);
  scan['ScanExtension|scan'] = function ScanExtension$124scan(T, S, $this, accumulator, seed = null) {
    return $this.transform(S, new (scan.ScanStreamTransformer$(T, S)).new(accumulator, seed));
  };
  scan['ScanExtension|get#scan'] = function ScanExtension$124get$35scan(T, $this) {
    return dart.fn((S, accumulator, seed = null) => scan['ScanExtension|scan'](T, S, $this, accumulator, seed), dart.gFnType(S => {
      var StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
      return [StreamOfS(), [dart.fnType(S, [S, T, core.int])], [S]];
    }));
  };
  var _transformer$0 = dart.privateName(interval, "_transformer");
  const _is_IntervalStreamTransformer_default = Symbol('_is_IntervalStreamTransformer_default');
  interval.IntervalStreamTransformer$ = dart.generic(T => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class IntervalStreamTransformer extends async.StreamTransformerBase$(T, T) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$0].bind(stream);
      }
      static _buildTransformer(T, duration) {
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let onInterval = null;
          let combinedWait = dart.fn(resumeSignal => resumeSignal != null && onInterval != null ? async.Future.wait(dart.dynamic, JSArrayOfFuture().of([onInterval, resumeSignal])) : resumeSignal, FutureToFuture());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  onInterval = async.Future$(T).delayed(duration, dart.fn(() => value, dart.fnType(T, [])));
                  subscription.pause(onInterval.then(dart.void, dart.bind(controller, 'add')).whenComplete(dart.fn(() => onInterval = null, VoidToNull())));
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(combinedWait(resumeSignal)), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (IntervalStreamTransformer.new = function(duration) {
      this[_transformer$0] = interval.IntervalStreamTransformer._buildTransformer(T, duration);
      IntervalStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = IntervalStreamTransformer.prototype;
    dart.addTypeTests(IntervalStreamTransformer);
    IntervalStreamTransformer.prototype[_is_IntervalStreamTransformer_default] = true;
    dart.setMethodSignature(IntervalStreamTransformer, () => ({
      __proto__: dart.getMethods(IntervalStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(IntervalStreamTransformer, "package:rxdart/src/transformers/interval.dart");
    dart.setFieldSignature(IntervalStreamTransformer, () => ({
      __proto__: dart.getFields(IntervalStreamTransformer.__proto__),
      [_transformer$0]: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return IntervalStreamTransformer;
  });
  interval.IntervalStreamTransformer = interval.IntervalStreamTransformer$();
  dart.addTypeTests(interval.IntervalStreamTransformer, _is_IntervalStreamTransformer_default);
  interval['IntervalExtension|interval'] = function IntervalExtension$124interval(T, $this, duration) {
    return $this.transform(T, new (interval.IntervalStreamTransformer$(T)).new(duration));
  };
  interval['IntervalExtension|get#interval'] = function IntervalExtension$124get$35interval(T, $this) {
    return dart.fn(duration => interval['IntervalExtension|interval'](T, $this, duration), dart.fnType(async.Stream$(T), [core.Duration]));
  };
  var _controller = dart.privateName(never, "_controller");
  const _is_NeverStream_default = Symbol('_is_NeverStream_default');
  never.NeverStream$ = dart.generic(T => {
    var StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class NeverStream extends async.Stream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_controller].stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
    }
    (NeverStream.new = function() {
      this[_controller] = StreamControllerOfT().new();
      NeverStream.__proto__.new.call(this);
      ;
    }).prototype = NeverStream.prototype;
    dart.addTypeTests(NeverStream);
    NeverStream.prototype[_is_NeverStream_default] = true;
    dart.setMethodSignature(NeverStream, () => ({
      __proto__: dart.getMethods(NeverStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {})
    }));
    dart.setLibraryUri(NeverStream, "package:rxdart/src/streams/never.dart");
    dart.setFieldSignature(NeverStream, () => ({
      __proto__: dart.getFields(NeverStream.__proto__),
      [_controller]: dart.finalFieldType(async.StreamController$(T))
    }));
    return NeverStream;
  });
  never.NeverStream = never.NeverStream$();
  dart.addTypeTests(never.NeverStream, _is_NeverStream_default);
  var _transformer$1 = dart.privateName(where_type, "_transformer");
  const _is_WhereTypeStreamTransformer_default = Symbol('_is_WhereTypeStreamTransformer_default');
  where_type.WhereTypeStreamTransformer$ = dart.generic((S, T) => {
    var StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    class WhereTypeStreamTransformer extends async.StreamTransformerBase$(S, T) {
      bind(stream) {
        StreamOfS()._check(stream);
        return this[_transformer$1].bind(stream);
      }
      static _buildTransformer(S, T) {
        return new (async._StreamSubscriptionTransformer$(S, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(event => {
                try {
                  if (T.is(event)) {
                    controller.add(event);
                  }
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [S])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(S), core.bool])));
      }
    }
    (WhereTypeStreamTransformer.new = function() {
      this[_transformer$1] = where_type.WhereTypeStreamTransformer._buildTransformer(S, T);
      WhereTypeStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = WhereTypeStreamTransformer.prototype;
    dart.addTypeTests(WhereTypeStreamTransformer);
    WhereTypeStreamTransformer.prototype[_is_WhereTypeStreamTransformer_default] = true;
    dart.setMethodSignature(WhereTypeStreamTransformer, () => ({
      __proto__: dart.getMethods(WhereTypeStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(WhereTypeStreamTransformer, "package:rxdart/src/transformers/where_type.dart");
    dart.setFieldSignature(WhereTypeStreamTransformer, () => ({
      __proto__: dart.getFields(WhereTypeStreamTransformer.__proto__),
      [_transformer$1]: dart.finalFieldType(async.StreamTransformer$(S, T))
    }));
    return WhereTypeStreamTransformer;
  });
  where_type.WhereTypeStreamTransformer = where_type.WhereTypeStreamTransformer$();
  dart.addTypeTests(where_type.WhereTypeStreamTransformer, _is_WhereTypeStreamTransformer_default);
  where_type['WhereTypeExtension|whereType'] = function WhereTypeExtension$124whereType(T, S, $this) {
    return $this.transform(S, new (where_type.WhereTypeStreamTransformer$(T, S)).new());
  };
  where_type['WhereTypeExtension|get#whereType'] = function WhereTypeExtension$124get$35whereType(T, $this) {
    return dart.fn(S => where_type['WhereTypeExtension|whereType'](T, S, $this), VoidToStreamOfS());
  };
  var _transformer$2 = dart.privateName(start_with_many, "_transformer");
  const _is_StartWithManyStreamTransformer_default = Symbol('_is_StartWithManyStreamTransformer_default');
  start_with_many.StartWithManyStreamTransformer$ = dart.generic(T => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class StartWithManyStreamTransformer extends async.StreamTransformerBase$(T, T) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$2].bind(stream);
      }
      static _buildTransformer(T, startValues) {
        if (startValues == null) {
          dart.throw(new core.ArgumentError.new("startValues cannot be null"));
        }
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              startValues[$forEach](dart.bind(controller, 'add'));
              subscription = input.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (StartWithManyStreamTransformer.new = function(startValues) {
      this[_transformer$2] = start_with_many.StartWithManyStreamTransformer._buildTransformer(T, startValues);
      StartWithManyStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = StartWithManyStreamTransformer.prototype;
    dart.addTypeTests(StartWithManyStreamTransformer);
    StartWithManyStreamTransformer.prototype[_is_StartWithManyStreamTransformer_default] = true;
    dart.setMethodSignature(StartWithManyStreamTransformer, () => ({
      __proto__: dart.getMethods(StartWithManyStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(StartWithManyStreamTransformer, "package:rxdart/src/transformers/start_with_many.dart");
    dart.setFieldSignature(StartWithManyStreamTransformer, () => ({
      __proto__: dart.getFields(StartWithManyStreamTransformer.__proto__),
      [_transformer$2]: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return StartWithManyStreamTransformer;
  });
  start_with_many.StartWithManyStreamTransformer = start_with_many.StartWithManyStreamTransformer$();
  dart.addTypeTests(start_with_many.StartWithManyStreamTransformer, _is_StartWithManyStreamTransformer_default);
  start_with_many['StartWithManyExtension|startWithMany'] = function StartWithManyExtension$124startWithMany(T, $this, startValues) {
    return $this.transform(T, new (start_with_many.StartWithManyStreamTransformer$(T)).new(startValues));
  };
  start_with_many['StartWithManyExtension|get#startWithMany'] = function StartWithManyExtension$124get$35startWithMany(T, $this) {
    return dart.fn(startValues => start_with_many['StartWithManyExtension|startWithMany'](T, $this, startValues), dart.fnType(async.Stream$(T), [core.List$(T)]));
  };
  var _transformer$3 = dart.privateName(switch_map, "_transformer");
  const _is_SwitchMapStreamTransformer_default = Symbol('_is_SwitchMapStreamTransformer_default');
  switch_map.SwitchMapStreamTransformer$ = dart.generic((T, S) => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class SwitchMapStreamTransformer extends async.StreamTransformerBase$(T, S) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$3].bind(stream);
      }
      static _buildTransformer(T, S, mapper) {
        return new (async._StreamSubscriptionTransformer$(T, S)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let otherSubscription = null;
          let leftClosed = false;
          let rightClosed = false;
          let hasMainEvent = false;
          controller = async.StreamController$(S).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                let t23;
                try {
                  t23 = otherSubscription;
                  t23 == null ? null : t23.cancel();
                  rightClosed = false;
                  hasMainEvent = true;
                  otherSubscription = mapper(value).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                      rightClosed = true;
                      if (leftClosed) controller.close();
                    }, VoidToNull())});
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  leftClosed = true;
                  if (rightClosed || !hasMainEvent) controller.close();
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => {
              let t24;
              subscription.pause(resumeSignal);
              t24 = otherSubscription;
              t24 == null ? null : t24.pause(resumeSignal);
            }, FutureToNull()), onResume: dart.fn(() => {
              let t24;
              subscription.resume();
              t24 = otherSubscription;
              t24 == null ? null : t24.resume();
            }, VoidToNull()), onCancel: dart.fn(() => async.async(core.Null, function*() {
              let t24;
              yield subscription.cancel();
              if (hasMainEvent) yield (t24 = otherSubscription, t24 == null ? null : t24.cancel());
            }), VoidToFutureOfNull())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(S), [async.Stream$(T), core.bool])));
      }
    }
    (SwitchMapStreamTransformer.new = function(mapper) {
      this[_transformer$3] = switch_map.SwitchMapStreamTransformer._buildTransformer(T, S, mapper);
      SwitchMapStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = SwitchMapStreamTransformer.prototype;
    dart.addTypeTests(SwitchMapStreamTransformer);
    SwitchMapStreamTransformer.prototype[_is_SwitchMapStreamTransformer_default] = true;
    dart.setMethodSignature(SwitchMapStreamTransformer, () => ({
      __proto__: dart.getMethods(SwitchMapStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setLibraryUri(SwitchMapStreamTransformer, "package:rxdart/src/transformers/switch_map.dart");
    dart.setFieldSignature(SwitchMapStreamTransformer, () => ({
      __proto__: dart.getFields(SwitchMapStreamTransformer.__proto__),
      [_transformer$3]: dart.finalFieldType(async.StreamTransformer$(T, S))
    }));
    return SwitchMapStreamTransformer;
  });
  switch_map.SwitchMapStreamTransformer = switch_map.SwitchMapStreamTransformer$();
  dart.addTypeTests(switch_map.SwitchMapStreamTransformer, _is_SwitchMapStreamTransformer_default);
  switch_map['SwitchMapExtension|switchMap'] = function SwitchMapExtension$124switchMap(T, S, $this, mapper) {
    return $this.transform(S, new (switch_map.SwitchMapStreamTransformer$(T, S)).new(mapper));
  };
  switch_map['SwitchMapExtension|get#switchMap'] = function SwitchMapExtension$124get$35switchMap(T, $this) {
    return dart.fn((S, mapper) => switch_map['SwitchMapExtension|switchMap'](T, S, $this, mapper), dart.gFnType(S => {
      var StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
      return [StreamOfS(), [dart.fnType(StreamOfS(), [T])]];
    }));
  };
  var _transformer$4 = dart.privateName(materialize, "_transformer");
  const _is_Notification_default = Symbol('_is_Notification_default');
  var kind$ = dart.privateName(notification, "Notification.kind");
  var value$ = dart.privateName(notification, "Notification.value");
  var error$ = dart.privateName(notification, "Notification.error");
  var stackTrace$ = dart.privateName(notification, "Notification.stackTrace");
  notification.Notification$ = dart.generic(T => {
    class Notification extends core.Object {
      get kind() {
        return this[kind$];
      }
      set kind(value) {
        super.kind = value;
      }
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get error() {
        return this[error$];
      }
      set error(value) {
        super.error = value;
      }
      get stackTrace() {
        return this[stackTrace$];
      }
      set stackTrace(value) {
        super.stackTrace = value;
      }
      static onData(value) {
        return new (notification.Notification$(T)).new(notification.Kind.OnData, value, null, null);
      }
      static onDone() {
        return new (notification.Notification$(T)).new(notification.Kind.OnDone, null, null, null);
      }
      static onError(error, stackTrace) {
        return new (notification.Notification$(T)).new(notification.Kind.OnError, null, error, stackTrace);
      }
      _equals(other) {
        if (other == null) return false;
        if (this === other) {
          return true;
        }
        return notification.Notification.is(other) && dart.equals(this.kind, other.kind) && dart.equals(this.error, other.error) && dart.equals(this.stackTrace, other.stackTrace) && dart.equals(this.value, other.value);
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.kind)) ^ dart.notNull(dart.hashCode(this.error)) ^ dart.notNull(dart.hashCode(this.stackTrace)) ^ dart.notNull(dart.hashCode(this.value))) >>> 0;
      }
      toString() {
        return "Notification{kind: " + dart.str(this.kind) + ", value: " + dart.str(this.value) + ", error: " + dart.str(this.error) + ", stackTrace: " + dart.str(this.stackTrace) + "}";
      }
      get isOnData() {
        return dart.equals(this.kind, notification.Kind.OnData);
      }
      get isOnDone() {
        return dart.equals(this.kind, notification.Kind.OnDone);
      }
      get isOnError() {
        return dart.equals(this.kind, notification.Kind.OnError);
      }
    }
    (Notification.new = function(kind, value, error, stackTrace) {
      this[kind$] = kind;
      this[value$] = value;
      this[error$] = error;
      this[stackTrace$] = stackTrace;
      ;
    }).prototype = Notification.prototype;
    dart.addTypeTests(Notification);
    Notification.prototype[_is_Notification_default] = true;
    dart.setMethodSignature(Notification, () => ({
      __proto__: dart.getMethods(Notification.__proto__),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(Notification, () => ({
      __proto__: dart.getGetters(Notification.__proto__),
      isOnData: core.bool,
      isOnDone: core.bool,
      isOnError: core.bool
    }));
    dart.setLibraryUri(Notification, "package:rxdart/src/utils/notification.dart");
    dart.setFieldSignature(Notification, () => ({
      __proto__: dart.getFields(Notification.__proto__),
      kind: dart.finalFieldType(notification.Kind),
      value: dart.finalFieldType(T),
      error: dart.finalFieldType(dart.dynamic),
      stackTrace: dart.finalFieldType(core.StackTrace)
    }));
    dart.defineExtensionMethods(Notification, ['_equals', 'toString']);
    dart.defineExtensionAccessors(Notification, ['hashCode']);
    return Notification;
  });
  notification.Notification = notification.Notification$();
  dart.addTypeTests(notification.Notification, _is_Notification_default);
  const _is_MaterializeStreamTransformer_default = Symbol('_is_MaterializeStreamTransformer_default');
  materialize.MaterializeStreamTransformer$ = dart.generic(T => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class MaterializeStreamTransformer extends async.StreamTransformerBase$(T, notification.Notification$(T)) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$4].bind(stream);
      }
      static _buildTransformer(T) {
        return new (async._StreamSubscriptionTransformer$(T, notification.Notification$(T))).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(notification.Notification$(T)).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  controller.add(notification.Notification$(T).onData(value));
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.fn((e, s) => {
                  controller.add(notification.Notification$(T).onError(e, s));
                }, dynamicAndStackTraceToNull()), onDone: dart.fn(() => {
                  controller.add(notification.Notification$(T).onDone());
                  controller.close();
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => {
              subscription.pause(resumeSignal);
            }, FutureToNull()), onResume: dart.fn(() => {
              subscription.resume();
            }, VoidToNull()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(notification.Notification$(T)), [async.Stream$(T), core.bool])));
      }
    }
    (MaterializeStreamTransformer.new = function() {
      this[_transformer$4] = materialize.MaterializeStreamTransformer._buildTransformer(T);
      MaterializeStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = MaterializeStreamTransformer.prototype;
    dart.addTypeTests(MaterializeStreamTransformer);
    MaterializeStreamTransformer.prototype[_is_MaterializeStreamTransformer_default] = true;
    dart.setMethodSignature(MaterializeStreamTransformer, () => ({
      __proto__: dart.getMethods(MaterializeStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(notification.Notification$(T)), [core.Object])
    }));
    dart.setLibraryUri(MaterializeStreamTransformer, "package:rxdart/src/transformers/materialize.dart");
    dart.setFieldSignature(MaterializeStreamTransformer, () => ({
      __proto__: dart.getFields(MaterializeStreamTransformer.__proto__),
      [_transformer$4]: dart.finalFieldType(async.StreamTransformer$(T, notification.Notification$(T)))
    }));
    return MaterializeStreamTransformer;
  });
  materialize.MaterializeStreamTransformer = materialize.MaterializeStreamTransformer$();
  dart.addTypeTests(materialize.MaterializeStreamTransformer, _is_MaterializeStreamTransformer_default);
  materialize['MaterializeExtension|materialize'] = function MaterializeExtension$124materialize(T, $this) {
    return $this.transform(notification.Notification$(T), new (materialize.MaterializeStreamTransformer$(T)).new());
  };
  materialize['MaterializeExtension|get#materialize'] = function MaterializeExtension$124get$35materialize(T, $this) {
    return dart.fn(() => materialize['MaterializeExtension|materialize'](T, $this), dart.fnType(async.Stream$(notification.Notification$(T)), []));
  };
  var _name$0 = dart.privateName(notification, "_name");
  var C5;
  var C6;
  var C7;
  var C8;
  notification.Kind = class Kind extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (notification.Kind.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = notification.Kind.prototype;
  dart.addTypeTests(notification.Kind);
  dart.setLibraryUri(notification.Kind, "package:rxdart/src/utils/notification.dart");
  dart.setFieldSignature(notification.Kind, () => ({
    __proto__: dart.getFields(notification.Kind.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(notification.Kind, ['toString']);
  notification.Kind.OnData = C5 || CT.C5;
  notification.Kind.OnDone = C6 || CT.C6;
  notification.Kind.OnError = C7 || CT.C7;
  notification.Kind.values = C8 || CT.C8;
  var _controller$ = dart.privateName(timer, "_controller");
  const _is_TimerStream_default = Symbol('_is_TimerStream_default');
  timer.TimerStream$ = dart.generic(T => {
    class TimerStream extends async.Stream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_controller$].stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(T, value, duration) {
        if (duration == null) {
          dart.throw(new core.ArgumentError.new("duration cannot be null"));
        }
        let subscription = null;
        let controller = null;
        controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
            subscription = async.Stream$(T).fromFuture(async.Future$(T).delayed(duration, dart.fn(() => value, dart.fnType(T, [])))).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                if (!dart.test(controller.isClosed)) {
                  controller.close();
                }
              }, VoidToNull())});
          }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
        return controller;
      }
    }
    (TimerStream.new = function(value, duration) {
      this[_controller$] = timer.TimerStream._buildController(T, value, duration);
      TimerStream.__proto__.new.call(this);
      ;
    }).prototype = TimerStream.prototype;
    dart.addTypeTests(TimerStream);
    TimerStream.prototype[_is_TimerStream_default] = true;
    dart.setMethodSignature(TimerStream, () => ({
      __proto__: dart.getMethods(TimerStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {})
    }));
    dart.setLibraryUri(TimerStream, "package:rxdart/src/streams/timer.dart");
    dart.setFieldSignature(TimerStream, () => ({
      __proto__: dart.getFields(TimerStream.__proto__),
      [_controller$]: dart.finalFieldType(async.StreamController$(T))
    }));
    return TimerStream;
  });
  timer.TimerStream = timer.TimerStream$();
  dart.addTypeTests(timer.TimerStream, _is_TimerStream_default);
  const _is_SampleStreamTransformer_default = Symbol('_is_SampleStreamTransformer_default');
  sample.SampleStreamTransformer$ = dart.generic(T => {
    var IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    var IterableOfTToT = () => (IterableOfTToT = dart.constFn(dart.fnType(T, [IterableOfT()])))();
    class SampleStreamTransformer extends backpressure.BackpressureStreamTransformer$(T, T) {}
    (SampleStreamTransformer.new = function(window) {
      SampleStreamTransformer.__proto__.new.call(this, backpressure.WindowStrategy.firstEventOnly, window, {onWindowEnd: dart.fn(queue => queue[$last], IterableOfTToT())});
      if (!(window != null)) dart.assertFailed("window stream factory cannot be null", "org-dartlang-app:///packages/rxdart/src/transformers/backpressure/sample.dart", 23, 12, "window != null");
    }).prototype = SampleStreamTransformer.prototype;
    dart.addTypeTests(SampleStreamTransformer);
    SampleStreamTransformer.prototype[_is_SampleStreamTransformer_default] = true;
    dart.setLibraryUri(SampleStreamTransformer, "package:rxdart/src/transformers/backpressure/sample.dart");
    return SampleStreamTransformer;
  });
  sample.SampleStreamTransformer = sample.SampleStreamTransformer$();
  dart.addTypeTests(sample.SampleStreamTransformer, _is_SampleStreamTransformer_default);
  sample['SampleExtensions|sample'] = function SampleExtensions$124sample(T, $this, sampleStream) {
    return $this.transform(T, new (sample.SampleStreamTransformer$(T)).new(dart.fn(_ => sampleStream, dart.fnType(async.Stream, [T]))));
  };
  sample['SampleExtensions|get#sample'] = function SampleExtensions$124get$35sample(T, $this) {
    return dart.fn(sampleStream => sample['SampleExtensions|sample'](T, $this, sampleStream), dart.fnType(async.Stream$(T), [async.Stream]));
  };
  sample['SampleExtensions|sampleTime'] = function SampleExtensions$124sampleTime(T, $this, duration) {
    return sample['SampleExtensions|sample'](T, $this, StreamOfvoid().periodic(duration));
  };
  sample['SampleExtensions|get#sampleTime'] = function SampleExtensions$124get$35sampleTime(T, $this) {
    return dart.fn(duration => sample['SampleExtensions|sampleTime'](T, $this, duration), dart.fnType(async.Stream$(T), [core.Duration]));
  };
  max['MaxExtension|max'] = function MaxExtension$124max(T, $this, comparator = null) {
    return $this.toList().then(T, dart.fn(values => {
      let t34;
      return (t34 = values, t34[$sort](comparator), t34)[$last];
    }, dart.fnType(T, [core.List$(T)])));
  };
  max['MaxExtension|get#max'] = function MaxExtension$124get$35max(T, $this) {
    return dart.fn((comparator = null) => max['MaxExtension|max'](T, $this, comparator), dart.fnType(async.Future$(T), [], [dart.fnType(core.int, [T, T])]));
  };
  var _transformer$5 = dart.privateName(group_by, "_transformer");
  const _is_GroupByStream_default = Symbol('_is_GroupByStream_default');
  var key$ = dart.privateName(group_by, "GroupByStream.key");
  group_by.GroupByStream$ = dart.generic((T, S) => {
    class GroupByStream extends async.StreamView$(T) {
      get key() {
        return this[key$];
      }
      set key(value) {
        super.key = value;
      }
    }
    (GroupByStream.new = function(key, stream) {
      this[key$] = key;
      GroupByStream.__proto__.new.call(this, stream);
      ;
    }).prototype = GroupByStream.prototype;
    dart.addTypeTests(GroupByStream);
    GroupByStream.prototype[_is_GroupByStream_default] = true;
    dart.setLibraryUri(GroupByStream, "package:rxdart/src/transformers/group_by.dart");
    dart.setFieldSignature(GroupByStream, () => ({
      __proto__: dart.getFields(GroupByStream.__proto__),
      key: dart.finalFieldType(S)
    }));
    return GroupByStream;
  });
  group_by.GroupByStream = group_by.GroupByStream$();
  dart.addTypeTests(group_by.GroupByStream, _is_GroupByStream_default);
  const _is_GroupByStreamTransformer_default = Symbol('_is_GroupByStreamTransformer_default');
  group_by.GroupByStreamTransformer$ = dart.generic((T, S) => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class GroupByStreamTransformer extends async.StreamTransformerBase$(T, group_by.GroupByStream$(T, S)) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$5].bind(stream);
      }
      static _buildTransformer(T, S, grouper) {
        return new (async._StreamSubscriptionTransformer$(T, group_by.GroupByStream$(T, S))).new(dart.fn((input, cancelOnError) => {
          let mapper = new (_js_helper.LinkedMap$(S, async.StreamController$(T))).new();
          let controller = null;
          let subscription = null;
          let controllerBuilder = dart.fn(forKey => dart.fn(() => {
            let groupedController = async.StreamController$(T).new();
            controller.add(new (group_by.GroupByStream$(T, S)).new(forKey, groupedController.stream));
            return groupedController;
          }, dart.fnType(async.StreamController$(T), [])), dart.fnType(dart.fnType(async.StreamController$(T), []), [S]));
          controller = async.StreamController$(group_by.GroupByStream$(T, S)).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  let key = grouper(value);
                  let groupedController = mapper[$putIfAbsent](key, controllerBuilder(key));
                  groupedController.add(value);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  mapper[$values][$forEach](dart.fn(controller => controller.close(), dart.fnType(async.Future, [async.StreamController$(T)])));
                  mapper[$clear]();
                  controller.close();
                }, VoidToNull())});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(group_by.GroupByStream$(T, S)), [async.Stream$(T), core.bool])));
      }
    }
    (GroupByStreamTransformer.new = function(grouper) {
      this[_transformer$5] = group_by.GroupByStreamTransformer._buildTransformer(T, S, grouper);
      GroupByStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = GroupByStreamTransformer.prototype;
    dart.addTypeTests(GroupByStreamTransformer);
    GroupByStreamTransformer.prototype[_is_GroupByStreamTransformer_default] = true;
    dart.setMethodSignature(GroupByStreamTransformer, () => ({
      __proto__: dart.getMethods(GroupByStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(group_by.GroupByStream$(T, S)), [core.Object])
    }));
    dart.setLibraryUri(GroupByStreamTransformer, "package:rxdart/src/transformers/group_by.dart");
    dart.setFieldSignature(GroupByStreamTransformer, () => ({
      __proto__: dart.getFields(GroupByStreamTransformer.__proto__),
      [_transformer$5]: dart.finalFieldType(async.StreamTransformer$(T, group_by.GroupByStream$(T, S)))
    }));
    return GroupByStreamTransformer;
  });
  group_by.GroupByStreamTransformer = group_by.GroupByStreamTransformer$();
  dart.addTypeTests(group_by.GroupByStreamTransformer, _is_GroupByStreamTransformer_default);
  group_by['GroupByExtension|groupBy'] = function GroupByExtension$124groupBy(T, S, $this, grouper) {
    return $this.transform(group_by.GroupByStream$(T, S), new (group_by.GroupByStreamTransformer$(T, S)).new(grouper));
  };
  group_by['GroupByExtension|get#groupBy'] = function GroupByExtension$124get$35groupBy(T, $this) {
    return dart.fn((S, grouper) => group_by['GroupByExtension|groupBy'](T, S, $this, grouper), dart.gFnType(S => [async.Stream$(group_by.GroupByStream$(T, S)), [dart.fnType(S, [T])]]));
  };
  var _transformer$6 = dart.privateName(take_until, "_transformer");
  const _is_TakeUntilStreamTransformer_default = Symbol('_is_TakeUntilStreamTransformer_default');
  take_until.TakeUntilStreamTransformer$ = dart.generic((T, S) => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class TakeUntilStreamTransformer extends async.StreamTransformerBase$(T, T) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$6].bind(stream);
      }
      static _buildTransformer(T, S, otherStream) {
        if (otherStream == null) {
          dart.throw(new core.ArgumentError.new("take until stream cannot be null"));
        }
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let otherSubscription = null;
          function onDone() {
            if (dart.test(controller.isClosed)) return;
            controller.close();
          }
          dart.fn(onDone, VoidTovoid());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: onDone, cancelOnError: cancelOnError});
              otherSubscription = otherStream.listen(dart.fn(_ => onDone(), dart.fnType(dart.void, [S])), {onError: dart.bind(controller, 'addError'), cancelOnError: cancelOnError, onDone: onDone});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => async.async(core.Null, function*() {
              let t38, t38$;
              yield (t38 = otherSubscription, t38 == null ? null : t38.cancel());
              yield (t38$ = subscription, t38$ == null ? null : t38$.cancel());
            }), VoidToFutureOfNull())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (TakeUntilStreamTransformer.new = function(otherStream) {
      this[_transformer$6] = take_until.TakeUntilStreamTransformer._buildTransformer(T, S, otherStream);
      TakeUntilStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = TakeUntilStreamTransformer.prototype;
    dart.addTypeTests(TakeUntilStreamTransformer);
    TakeUntilStreamTransformer.prototype[_is_TakeUntilStreamTransformer_default] = true;
    dart.setMethodSignature(TakeUntilStreamTransformer, () => ({
      __proto__: dart.getMethods(TakeUntilStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(TakeUntilStreamTransformer, "package:rxdart/src/transformers/take_until.dart");
    dart.setFieldSignature(TakeUntilStreamTransformer, () => ({
      __proto__: dart.getFields(TakeUntilStreamTransformer.__proto__),
      [_transformer$6]: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return TakeUntilStreamTransformer;
  });
  take_until.TakeUntilStreamTransformer = take_until.TakeUntilStreamTransformer$();
  dart.addTypeTests(take_until.TakeUntilStreamTransformer, _is_TakeUntilStreamTransformer_default);
  take_until['TakeUntilExtension|takeUntil'] = function TakeUntilExtension$124takeUntil(T, S, $this, otherStream) {
    return $this.transform(T, new (take_until.TakeUntilStreamTransformer$(T, S)).new(otherStream));
  };
  take_until['TakeUntilExtension|get#takeUntil'] = function TakeUntilExtension$124get$35takeUntil(T, $this) {
    return dart.fn((S, otherStream) => take_until['TakeUntilExtension|takeUntil'](T, S, $this, otherStream), dart.gFnType(S => {
      var StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
      return [async.Stream$(T), [StreamOfS()]];
    }));
  };
  const _is_ThrottleStreamTransformer_default = Symbol('_is_ThrottleStreamTransformer_default');
  throttle.ThrottleStreamTransformer$ = dart.generic(T => {
    var TToT = () => (TToT = dart.constFn(dart.fnType(T, [T])))();
    var IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    var IterableOfTToT = () => (IterableOfTToT = dart.constFn(dart.fnType(T, [IterableOfT()])))();
    class ThrottleStreamTransformer extends backpressure.BackpressureStreamTransformer$(T, T) {}
    (ThrottleStreamTransformer.new = function(window, opts) {
      let trailing = opts && 'trailing' in opts ? opts.trailing : false;
      ThrottleStreamTransformer.__proto__.new.call(this, backpressure.WindowStrategy.eventAfterLastWindow, window, {onWindowStart: dart.test(trailing) ? null : dart.fn(event => event, TToT()), onWindowEnd: dart.test(trailing) ? dart.fn(queue => queue[$last], IterableOfTToT()) : null});
      if (!(window != null)) dart.assertFailed("window stream factory cannot be null", "org-dartlang-app:///packages/rxdart/src/transformers/backpressure/throttle.dart", 27, 12, "window != null");
    }).prototype = ThrottleStreamTransformer.prototype;
    dart.addTypeTests(ThrottleStreamTransformer);
    ThrottleStreamTransformer.prototype[_is_ThrottleStreamTransformer_default] = true;
    dart.setLibraryUri(ThrottleStreamTransformer, "package:rxdart/src/transformers/backpressure/throttle.dart");
    return ThrottleStreamTransformer;
  });
  throttle.ThrottleStreamTransformer = throttle.ThrottleStreamTransformer$();
  dart.addTypeTests(throttle.ThrottleStreamTransformer, _is_ThrottleStreamTransformer_default);
  throttle['ThrottleExtensions|throttle'] = function ThrottleExtensions$124throttle(T, $this, window, opts) {
    let trailing = opts && 'trailing' in opts ? opts.trailing : false;
    return $this.transform(T, new (throttle.ThrottleStreamTransformer$(T)).new(window, {trailing: trailing}));
  };
  throttle['ThrottleExtensions|get#throttle'] = function ThrottleExtensions$124get$35throttle(T, $this) {
    return dart.fn((window, opts) => {
      let trailing = opts && 'trailing' in opts ? opts.trailing : false;
      return throttle['ThrottleExtensions|throttle'](T, $this, window, {trailing: trailing});
    }, dart.fnType(async.Stream$(T), [dart.fnType(async.Stream, [T])], {trailing: core.bool}, {}));
  };
  throttle['ThrottleExtensions|throttleTime'] = function ThrottleExtensions$124throttleTime(T, $this, duration, opts) {
    let trailing = opts && 'trailing' in opts ? opts.trailing : false;
    return $this.transform(T, new (throttle.ThrottleStreamTransformer$(T)).new(dart.fn(_ => new (TimerStreamOfbool()).new(true, duration), dart.fnType(TimerStreamOfbool(), [T])), {trailing: trailing}));
  };
  throttle['ThrottleExtensions|get#throttleTime'] = function ThrottleExtensions$124get$35throttleTime(T, $this) {
    return dart.fn((duration, opts) => {
      let trailing = opts && 'trailing' in opts ? opts.trailing : false;
      return throttle['ThrottleExtensions|throttleTime'](T, $this, duration, {trailing: trailing});
    }, dart.fnType(async.Stream$(T), [core.Duration], {trailing: core.bool}, {}));
  };
  var _transformer$7 = dart.privateName(timestamp, "_transformer");
  const _is_Timestamped_default = Symbol('_is_Timestamped_default');
  var value$0 = dart.privateName(timestamp, "Timestamped.value");
  var timestamp$ = dart.privateName(timestamp, "Timestamped.timestamp");
  timestamp.Timestamped$ = dart.generic(T => {
    class Timestamped extends core.Object {
      get value() {
        return this[value$0];
      }
      set value(value) {
        super.value = value;
      }
      get timestamp() {
        return this[timestamp$];
      }
      set timestamp(value) {
        super.timestamp = value;
      }
      _equals(other) {
        if (other == null) return false;
        if (this === other) {
          return true;
        }
        return timestamp.Timestamped.is(other) && dart.equals(this.timestamp, other.timestamp) && dart.equals(this.value, other.value);
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.timestamp)) ^ dart.notNull(dart.hashCode(this.value))) >>> 0;
      }
      toString() {
        return "TimeStamp{timestamp: " + dart.str(this.timestamp) + ", value: " + dart.str(this.value) + "}";
      }
    }
    (Timestamped.new = function(timestamp, value) {
      this[timestamp$] = timestamp;
      this[value$0] = value;
      ;
    }).prototype = Timestamped.prototype;
    dart.addTypeTests(Timestamped);
    Timestamped.prototype[_is_Timestamped_default] = true;
    dart.setMethodSignature(Timestamped, () => ({
      __proto__: dart.getMethods(Timestamped.__proto__),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object])
    }));
    dart.setLibraryUri(Timestamped, "package:rxdart/src/transformers/timestamp.dart");
    dart.setFieldSignature(Timestamped, () => ({
      __proto__: dart.getFields(Timestamped.__proto__),
      value: dart.finalFieldType(T),
      timestamp: dart.finalFieldType(core.DateTime)
    }));
    dart.defineExtensionMethods(Timestamped, ['_equals', 'toString']);
    dart.defineExtensionAccessors(Timestamped, ['hashCode']);
    return Timestamped;
  });
  timestamp.Timestamped = timestamp.Timestamped$();
  dart.addTypeTests(timestamp.Timestamped, _is_Timestamped_default);
  const _is_TimestampStreamTransformer_default = Symbol('_is_TimestampStreamTransformer_default');
  timestamp.TimestampStreamTransformer$ = dart.generic(T => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class TimestampStreamTransformer extends async.StreamTransformerBase$(T, timestamp.Timestamped$(T)) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$7].bind(stream);
      }
      static _buildTransformer(T) {
        return new (async._StreamSubscriptionTransformer$(T, timestamp.Timestamped$(T))).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(timestamp.Timestamped$(T)).new({sync: true, onListen: dart.fn(() => {
              subscription = input.map(timestamp.Timestamped$(T), dart.fn(value => new (timestamp.Timestamped$(T)).new(new core.DateTime.now(), value), dart.fnType(timestamp.Timestamped$(T), [T]))).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(timestamp.Timestamped$(T)), [async.Stream$(T), core.bool])));
      }
    }
    (TimestampStreamTransformer.new = function() {
      this[_transformer$7] = timestamp.TimestampStreamTransformer._buildTransformer(T);
      TimestampStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = TimestampStreamTransformer.prototype;
    dart.addTypeTests(TimestampStreamTransformer);
    TimestampStreamTransformer.prototype[_is_TimestampStreamTransformer_default] = true;
    dart.setMethodSignature(TimestampStreamTransformer, () => ({
      __proto__: dart.getMethods(TimestampStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(timestamp.Timestamped$(T)), [core.Object])
    }));
    dart.setLibraryUri(TimestampStreamTransformer, "package:rxdart/src/transformers/timestamp.dart");
    dart.setFieldSignature(TimestampStreamTransformer, () => ({
      __proto__: dart.getFields(TimestampStreamTransformer.__proto__),
      [_transformer$7]: dart.finalFieldType(async.StreamTransformer$(T, timestamp.Timestamped$(T)))
    }));
    return TimestampStreamTransformer;
  });
  timestamp.TimestampStreamTransformer = timestamp.TimestampStreamTransformer$();
  dart.addTypeTests(timestamp.TimestampStreamTransformer, _is_TimestampStreamTransformer_default);
  timestamp['TimeStampExtension|timestamp'] = function TimeStampExtension$124timestamp(T, $this) {
    return $this.transform(timestamp.Timestamped$(T), new (timestamp.TimestampStreamTransformer$(T)).new());
  };
  timestamp['TimeStampExtension|get#timestamp'] = function TimeStampExtension$124get$35timestamp(T, $this) {
    return dart.fn(() => timestamp['TimeStampExtension|timestamp'](T, $this), dart.fnType(async.Stream$(timestamp.Timestamped$(T)), []));
  };
  var _transformer$8 = dart.privateName(switch_if_empty, "_transformer");
  const _is_SwitchIfEmptyStreamTransformer_default = Symbol('_is_SwitchIfEmptyStreamTransformer_default');
  switch_if_empty.SwitchIfEmptyStreamTransformer$ = dart.generic(T => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class SwitchIfEmptyStreamTransformer extends async.StreamTransformerBase$(T, T) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$8].bind(stream);
      }
      static _buildTransformer(T, fallbackStream) {
        if (fallbackStream == null) {
          dart.throw(new core.ArgumentError.new("fallbackStream cannot be null"));
        }
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let defaultSubscription = null;
          let switchSubscription = null;
          let hasEvent = false;
          function onDone() {
            let t46;
            if (dart.test(controller.isClosed)) return;
            controller.close();
            t46 = switchSubscription;
            t46 == null ? null : t46.cancel();
          }
          dart.fn(onDone, VoidTovoid());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              defaultSubscription = input.listen(dart.fn(value => {
                hasEvent = true;
                controller.add(value);
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  if (hasEvent) {
                    controller.close();
                  } else {
                    switchSubscription = fallbackStream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: onDone, cancelOnError: cancelOnError});
                  }
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => {
              let t46, t46$;
              t46 = defaultSubscription;
              t46 == null ? null : t46.pause(resumeSignal);
              t46$ = switchSubscription;
              t46$ == null ? null : t46$.pause(resumeSignal);
            }, FutureToNull()), onResume: dart.fn(() => {
              let t46, t46$;
              t46 = defaultSubscription;
              t46 == null ? null : t46.resume();
              t46$ = switchSubscription;
              t46$ == null ? null : t46$.resume();
            }, VoidToNull()), onCancel: dart.fn(() => {
              let t46;
              t46 = defaultSubscription;
              return t46 == null ? null : t46.cancel();
            }, VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (SwitchIfEmptyStreamTransformer.new = function(fallbackStream) {
      this[_transformer$8] = switch_if_empty.SwitchIfEmptyStreamTransformer._buildTransformer(T, fallbackStream);
      SwitchIfEmptyStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = SwitchIfEmptyStreamTransformer.prototype;
    dart.addTypeTests(SwitchIfEmptyStreamTransformer);
    SwitchIfEmptyStreamTransformer.prototype[_is_SwitchIfEmptyStreamTransformer_default] = true;
    dart.setMethodSignature(SwitchIfEmptyStreamTransformer, () => ({
      __proto__: dart.getMethods(SwitchIfEmptyStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(SwitchIfEmptyStreamTransformer, "package:rxdart/src/transformers/switch_if_empty.dart");
    dart.setFieldSignature(SwitchIfEmptyStreamTransformer, () => ({
      __proto__: dart.getFields(SwitchIfEmptyStreamTransformer.__proto__),
      [_transformer$8]: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return SwitchIfEmptyStreamTransformer;
  });
  switch_if_empty.SwitchIfEmptyStreamTransformer = switch_if_empty.SwitchIfEmptyStreamTransformer$();
  dart.addTypeTests(switch_if_empty.SwitchIfEmptyStreamTransformer, _is_SwitchIfEmptyStreamTransformer_default);
  switch_if_empty['SwitchIfEmptyExtension|switchIfEmpty'] = function SwitchIfEmptyExtension$124switchIfEmpty(T, $this, fallbackStream) {
    return $this.transform(T, new (switch_if_empty.SwitchIfEmptyStreamTransformer$(T)).new(fallbackStream));
  };
  switch_if_empty['SwitchIfEmptyExtension|get#switchIfEmpty'] = function SwitchIfEmptyExtension$124get$35switchIfEmpty(T, $this) {
    return dart.fn(fallbackStream => switch_if_empty['SwitchIfEmptyExtension|switchIfEmpty'](T, $this, fallbackStream), dart.fnType(async.Stream$(T), [async.Stream$(T)]));
  };
  var _transformer$9 = dart.privateName(on_error_resume, "_transformer");
  const _is_OnErrorResumeStreamTransformer_default = Symbol('_is_OnErrorResumeStreamTransformer_default');
  on_error_resume.OnErrorResumeStreamTransformer$ = dart.generic(T => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class OnErrorResumeStreamTransformer extends async.StreamTransformerBase$(T, T) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$9].bind(stream);
      }
      static _buildTransformer(T, recoveryFn) {
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let inputSubscription = null;
          let recoverySubscription = null;
          let controller = null;
          let shouldCloseController = true;
          function safeClose() {
            if (shouldCloseController) {
              controller.close();
            }
          }
          dart.fn(safeClose, VoidTovoid());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              inputSubscription = input.listen(dart.bind(controller, 'add'), {onError: dart.fn((e, s) => {
                  shouldCloseController = false;
                  recoverySubscription = recoveryFn(e).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
                  inputSubscription.cancel();
                }, dynamicAnddynamicToNull()), onDone: safeClose, cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => {
              let t48, t48$;
              t48 = inputSubscription;
              t48 == null ? null : t48.pause(resumeSignal);
              t48$ = recoverySubscription;
              t48$ == null ? null : t48$.pause(resumeSignal);
            }, FutureToNull()), onResume: dart.fn(() => {
              let t48, t48$;
              t48 = inputSubscription;
              t48 == null ? null : t48.resume();
              t48$ = recoverySubscription;
              t48$ == null ? null : t48$.resume();
            }, VoidToNull()), onCancel: dart.fn(() => {
              let t48, t48$;
              return async.Future.wait(dart.dynamic, JSArrayOfFuture().of([(t48 = inputSubscription, t48 == null ? null : t48.cancel()), (t48$ = recoverySubscription, t48$ == null ? null : t48$.cancel())])[$where](dart.fn(future => future != null, FutureTobool())));
            }, VoidToFutureOfList())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (OnErrorResumeStreamTransformer.new = function(recoveryFn) {
      this[_transformer$9] = on_error_resume.OnErrorResumeStreamTransformer._buildTransformer(T, recoveryFn);
      OnErrorResumeStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = OnErrorResumeStreamTransformer.prototype;
    dart.addTypeTests(OnErrorResumeStreamTransformer);
    OnErrorResumeStreamTransformer.prototype[_is_OnErrorResumeStreamTransformer_default] = true;
    dart.setMethodSignature(OnErrorResumeStreamTransformer, () => ({
      __proto__: dart.getMethods(OnErrorResumeStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(OnErrorResumeStreamTransformer, "package:rxdart/src/transformers/on_error_resume.dart");
    dart.setFieldSignature(OnErrorResumeStreamTransformer, () => ({
      __proto__: dart.getFields(OnErrorResumeStreamTransformer.__proto__),
      [_transformer$9]: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return OnErrorResumeStreamTransformer;
  });
  on_error_resume.OnErrorResumeStreamTransformer = on_error_resume.OnErrorResumeStreamTransformer$();
  dart.addTypeTests(on_error_resume.OnErrorResumeStreamTransformer, _is_OnErrorResumeStreamTransformer_default);
  on_error_resume['OnErrorExtensions|onErrorResumeNext'] = function OnErrorExtensions$124onErrorResumeNext(T, $this, recoveryStream) {
    return $this.transform(T, new (on_error_resume.OnErrorResumeStreamTransformer$(T)).new(dart.fn(e => recoveryStream, dart.fnType(async.Stream$(T), [dart.dynamic]))));
  };
  on_error_resume['OnErrorExtensions|get#onErrorResumeNext'] = function OnErrorExtensions$124get$35onErrorResumeNext(T, $this) {
    return dart.fn(recoveryStream => on_error_resume['OnErrorExtensions|onErrorResumeNext'](T, $this, recoveryStream), dart.fnType(async.Stream$(T), [async.Stream$(T)]));
  };
  on_error_resume['OnErrorExtensions|onErrorResume'] = function OnErrorExtensions$124onErrorResume(T, $this, recoveryFn) {
    return $this.transform(T, new (on_error_resume.OnErrorResumeStreamTransformer$(T)).new(recoveryFn));
  };
  on_error_resume['OnErrorExtensions|get#onErrorResume'] = function OnErrorExtensions$124get$35onErrorResume(T, $this) {
    return dart.fn(recoveryFn => on_error_resume['OnErrorExtensions|onErrorResume'](T, $this, recoveryFn), dart.fnType(async.Stream$(T), [dart.fnType(async.Stream$(T), [dart.dynamic])]));
  };
  on_error_resume['OnErrorExtensions|onErrorReturn'] = function OnErrorExtensions$124onErrorReturn(T, $this, returnValue) {
    return $this.transform(T, new (on_error_resume.OnErrorResumeStreamTransformer$(T)).new(dart.fn(e => async.Stream$(T).fromIterable(_interceptors.JSArray$(T).of([returnValue])), dart.fnType(async.Stream$(T), [dart.dynamic]))));
  };
  on_error_resume['OnErrorExtensions|get#onErrorReturn'] = function OnErrorExtensions$124get$35onErrorReturn(T, $this) {
    return dart.fn(returnValue => on_error_resume['OnErrorExtensions|onErrorReturn'](T, $this, returnValue), dart.fnType(async.Stream$(T), [T]));
  };
  on_error_resume['OnErrorExtensions|onErrorReturnWith'] = function OnErrorExtensions$124onErrorReturnWith(T, $this, returnFn) {
    return $this.transform(T, new (on_error_resume.OnErrorResumeStreamTransformer$(T)).new(dart.fn(e => async.Stream$(T).fromIterable(_interceptors.JSArray$(T).of([returnFn(e)])), dart.fnType(async.Stream$(T), [dart.dynamic]))));
  };
  on_error_resume['OnErrorExtensions|get#onErrorReturnWith'] = function OnErrorExtensions$124get$35onErrorReturnWith(T, $this) {
    return dart.fn(returnFn => on_error_resume['OnErrorExtensions|onErrorReturnWith'](T, $this, returnFn), dart.fnType(async.Stream$(T), [dart.fnType(T, [dart.dynamic])]));
  };
  var _transformer$10 = dart.privateName(with_latest_from, "_transformer");
  const _is_WithLatestFromStreamTransformer_default = Symbol('_is_WithLatestFromStreamTransformer_default');
  with_latest_from.WithLatestFromStreamTransformer$ = dart.generic((T, S, R) => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class WithLatestFromStreamTransformer extends async.StreamTransformerBase$(T, R) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$10].bind(stream);
      }
      static withList(T, latestFromStreams) {
        return new (with_latest_from.WithLatestFromStreamTransformer$(T, T, core.List$(T))).new(latestFromStreams, dart.fn((s, values) => (() => {
          let t56 = _interceptors.JSArray$(T).of([]);
          t56[$add](s);
          for (let t57 of values)
            t56[$add](t57);
          return t56;
        })(), dart.fnType(core.List$(T), [T, core.List$(T)])));
      }
      static with1(T, S, R, latestFromStream, fn) {
        if (fn == null) {
          dart.throw(new core.ArgumentError.new("Combiner cannot be null"));
        }
        return new (with_latest_from.WithLatestFromStreamTransformer$(T, S, R)).new(_interceptors.JSArray$(async.Stream$(S)).of([latestFromStream]), dart.fn((s, values) => fn(s, values[$_get](0)), dart.fnType(R, [T, core.List$(S)])));
      }
      static with2(T, A, B, R, latestFromStream1, latestFromStream2, fn) {
        if (fn == null) {
          dart.throw(new core.ArgumentError.new("Combiner cannot be null"));
        }
        return new (with_latest_from.WithLatestFromStreamTransformer$(T, dart.dynamic, R)).new(JSArrayOfStream().of([latestFromStream1, latestFromStream2]), dart.fn((s, values) => fn(s, A.as(values[$_get](0)), B.as(values[$_get](1))), dart.fnType(R, [T, core.List])));
      }
      static with3(T, A, B, C, R, latestFromStream1, latestFromStream2, latestFromStream3, fn) {
        if (fn == null) {
          dart.throw(new core.ArgumentError.new("Combiner cannot be null"));
        }
        return new (with_latest_from.WithLatestFromStreamTransformer$(T, dart.dynamic, R)).new(JSArrayOfStream().of([latestFromStream1, latestFromStream2, latestFromStream3]), dart.fn((s, values) => fn(s, A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2))), dart.fnType(R, [T, core.List])));
      }
      static with4(T, A, B, C, D, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, fn) {
        if (fn == null) {
          dart.throw(new core.ArgumentError.new("Combiner cannot be null"));
        }
        return new (with_latest_from.WithLatestFromStreamTransformer$(T, dart.dynamic, R)).new(JSArrayOfStream().of([latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4]), dart.fn((s, values) => fn(s, A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3))), dart.fnType(R, [T, core.List])));
      }
      static with5(T, A, B, C, D, E, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, fn) {
        if (fn == null) {
          dart.throw(new core.ArgumentError.new("Combiner cannot be null"));
        }
        return new (with_latest_from.WithLatestFromStreamTransformer$(T, dart.dynamic, R)).new(JSArrayOfStream().of([latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5]), dart.fn((s, values) => fn(s, A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4))), dart.fnType(R, [T, core.List])));
      }
      static with6(T, A, B, C, D, E, F, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, fn) {
        if (fn == null) {
          dart.throw(new core.ArgumentError.new("Combiner cannot be null"));
        }
        return new (with_latest_from.WithLatestFromStreamTransformer$(T, dart.dynamic, R)).new(JSArrayOfStream().of([latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6]), dart.fn((s, values) => fn(s, A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5))), dart.fnType(R, [T, core.List])));
      }
      static with7(T, A, B, C, D, E, F, G, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, fn) {
        if (fn == null) {
          dart.throw(new core.ArgumentError.new("Combiner cannot be null"));
        }
        return new (with_latest_from.WithLatestFromStreamTransformer$(T, dart.dynamic, R)).new(JSArrayOfStream().of([latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7]), dart.fn((s, values) => fn(s, A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6))), dart.fnType(R, [T, core.List])));
      }
      static with8(T, A, B, C, D, E, F, G, H, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, latestFromStream8, fn) {
        if (fn == null) {
          dart.throw(new core.ArgumentError.new("Combiner cannot be null"));
        }
        return new (with_latest_from.WithLatestFromStreamTransformer$(T, dart.dynamic, R)).new(JSArrayOfStream().of([latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, latestFromStream8]), dart.fn((s, values) => fn(s, A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7))), dart.fnType(R, [T, core.List])));
      }
      static with9(T, A, B, C, D, E, F, G, H, I, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, latestFromStream8, latestFromStream9, fn) {
        if (fn == null) {
          dart.throw(new core.ArgumentError.new("Combiner cannot be null"));
        }
        return new (with_latest_from.WithLatestFromStreamTransformer$(T, dart.dynamic, R)).new(JSArrayOfStream().of([latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, latestFromStream8, latestFromStream9]), dart.fn((s, values) => fn(s, A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7)), I.as(values[$_get](8))), dart.fnType(R, [T, core.List])));
      }
      static _buildTransformer(T, S, R, latestFromStreams, fn) {
        if (latestFromStreams == null) {
          dart.throw(new core.ArgumentError.new("latestFromStreams cannot be null"));
        }
        if (dart.test(latestFromStreams[$any](dart.fn(s => s == null, dart.fnType(core.bool, [async.Stream$(S)]))))) {
          dart.throw(new core.ArgumentError.new("All streams must be not null"));
        }
        if (fn == null) {
          dart.throw(new core.ArgumentError.new("combiner cannot be null"));
        }
        return new (async._StreamSubscriptionTransformer$(T, R)).new(dart.fn((input, cancelOnError) => {
          let len = latestFromStreams[$length];
          let controller = null;
          let subscription = null;
          let subscriptions = core.List$(async.StreamSubscription$(S)).new(len);
          function onDone() {
            if (dart.test(controller.isClosed)) return;
            controller.close();
          }
          dart.fn(onDone, VoidTovoid());
          controller = async.StreamController$(R).new({sync: true, onListen: dart.fn(() => {
              let latestValues = core.List$(S).new(len);
              let hasValues = ListOfbool().filled(len, false);
              subscription = input.listen(dart.fn(value => {
                if (dart.test(hasValues[$every](dart.fn(hasValue => hasValue, boolTobool())))) {
                  try {
                    controller.add(fn(value, core.List$(S).unmodifiable(latestValues)));
                  } catch (e$) {
                    let e = dart.getThrown(e$);
                    let s = dart.stackTrace(e$);
                    controller.addError(e, s);
                  }
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: onDone});
              let index = 0;
              for (let latestFromStream of latestFromStreams) {
                let currentIndex = index;
                subscriptions[$_set](index, latestFromStream.listen(dart.fn(latest => {
                  hasValues[$_set](currentIndex, true);
                  latestValues[$_set](currentIndex, latest);
                }, dart.fnType(core.Null, [S])), {onError: dart.bind(controller, 'addError'), cancelOnError: cancelOnError}));
                index = index + 1;
              }
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => {
              let t59;
              let list = (t59 = ListOfStreamSubscription().of(subscriptions), t59[$add](subscription), t59);
              let cancelFutures = list[$map](async.Future, dart.fn(subscription => subscription.cancel(), StreamSubscriptionToFuture()))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()));
              return async.Future.wait(dart.dynamic, cancelFutures);
            }, VoidToFutureOfList())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(R), [async.Stream$(T), core.bool])));
      }
    }
    (WithLatestFromStreamTransformer.new = function(latestFromStreams, fn) {
      this[_transformer$10] = with_latest_from.WithLatestFromStreamTransformer._buildTransformer(T, S, R, latestFromStreams, fn);
      WithLatestFromStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = WithLatestFromStreamTransformer.prototype;
    dart.addTypeTests(WithLatestFromStreamTransformer);
    WithLatestFromStreamTransformer.prototype[_is_WithLatestFromStreamTransformer_default] = true;
    dart.setMethodSignature(WithLatestFromStreamTransformer, () => ({
      __proto__: dart.getMethods(WithLatestFromStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(R), [core.Object])
    }));
    dart.setLibraryUri(WithLatestFromStreamTransformer, "package:rxdart/src/transformers/with_latest_from.dart");
    dart.setFieldSignature(WithLatestFromStreamTransformer, () => ({
      __proto__: dart.getFields(WithLatestFromStreamTransformer.__proto__),
      [_transformer$10]: dart.finalFieldType(async.StreamTransformer$(T, R))
    }));
    return WithLatestFromStreamTransformer;
  });
  with_latest_from.WithLatestFromStreamTransformer = with_latest_from.WithLatestFromStreamTransformer$();
  dart.addTypeTests(with_latest_from.WithLatestFromStreamTransformer, _is_WithLatestFromStreamTransformer_default);
  with_latest_from['WithLatestFromExtensions|withLatestFrom'] = function WithLatestFromExtensions$124withLatestFrom(T, S, R, $this, latestFromStream, fn) {
    return $this.transform(R, with_latest_from.WithLatestFromStreamTransformer.with1(T, S, R, latestFromStream, fn));
  };
  with_latest_from['WithLatestFromExtensions|get#withLatestFrom'] = function WithLatestFromExtensions$124get$35withLatestFrom(T, $this) {
    return dart.fn((S, R, latestFromStream, fn) => with_latest_from['WithLatestFromExtensions|withLatestFrom'](T, S, R, $this, latestFromStream, fn), dart.gFnType((S, R) => {
      var StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
      var StreamOfR = () => (StreamOfR = dart.constFn(async.Stream$(R)))();
      return [StreamOfR(), [StreamOfS(), dart.fnType(R, [T, S])]];
    }));
  };
  with_latest_from['WithLatestFromExtensions|withLatestFromList'] = function WithLatestFromExtensions$124withLatestFromList(T, $this, latestFromStreams) {
    return $this.transform(core.List$(T), with_latest_from.WithLatestFromStreamTransformer.withList(T, latestFromStreams));
  };
  with_latest_from['WithLatestFromExtensions|get#withLatestFromList'] = function WithLatestFromExtensions$124get$35withLatestFromList(T, $this) {
    return dart.fn(latestFromStreams => with_latest_from['WithLatestFromExtensions|withLatestFromList'](T, $this, latestFromStreams), dart.fnType(async.Stream$(core.List$(T)), [core.Iterable$(async.Stream$(T))]));
  };
  with_latest_from['WithLatestFromExtensions|withLatestFrom2'] = function WithLatestFromExtensions$124withLatestFrom2(T, A, B, R, $this, latestFromStream1, latestFromStream2, fn) {
    return $this.transform(R, with_latest_from.WithLatestFromStreamTransformer.with2(T, A, B, R, latestFromStream1, latestFromStream2, fn));
  };
  with_latest_from['WithLatestFromExtensions|get#withLatestFrom2'] = function WithLatestFromExtensions$124get$35withLatestFrom2(T, $this) {
    return dart.fn((A, B, R, latestFromStream1, latestFromStream2, fn) => with_latest_from['WithLatestFromExtensions|withLatestFrom2'](T, A, B, R, $this, latestFromStream1, latestFromStream2, fn), dart.gFnType((A, B, R) => {
      var StreamOfA = () => (StreamOfA = dart.constFn(async.Stream$(A)))();
      var StreamOfB = () => (StreamOfB = dart.constFn(async.Stream$(B)))();
      var StreamOfR = () => (StreamOfR = dart.constFn(async.Stream$(R)))();
      return [StreamOfR(), [StreamOfA(), StreamOfB(), dart.fnType(R, [T, A, B])]];
    }));
  };
  with_latest_from['WithLatestFromExtensions|withLatestFrom3'] = function WithLatestFromExtensions$124withLatestFrom3(T, A, B, C, R, $this, latestFromStream1, latestFromStream2, latestFromStream3, fn) {
    return $this.transform(R, with_latest_from.WithLatestFromStreamTransformer.with3(T, A, B, C, R, latestFromStream1, latestFromStream2, latestFromStream3, fn));
  };
  with_latest_from['WithLatestFromExtensions|get#withLatestFrom3'] = function WithLatestFromExtensions$124get$35withLatestFrom3(T, $this) {
    return dart.fn((A, B, C, R, latestFromStream1, latestFromStream2, latestFromStream3, fn) => with_latest_from['WithLatestFromExtensions|withLatestFrom3'](T, A, B, C, R, $this, latestFromStream1, latestFromStream2, latestFromStream3, fn), dart.gFnType((A, B, C, R) => {
      var StreamOfA = () => (StreamOfA = dart.constFn(async.Stream$(A)))();
      var StreamOfB = () => (StreamOfB = dart.constFn(async.Stream$(B)))();
      var StreamOfC = () => (StreamOfC = dart.constFn(async.Stream$(C)))();
      var StreamOfR = () => (StreamOfR = dart.constFn(async.Stream$(R)))();
      return [StreamOfR(), [StreamOfA(), StreamOfB(), StreamOfC(), dart.fnType(R, [T, A, B, C])]];
    }));
  };
  with_latest_from['WithLatestFromExtensions|withLatestFrom4'] = function WithLatestFromExtensions$124withLatestFrom4(T, A, B, C, D, R, $this, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, fn) {
    return $this.transform(R, with_latest_from.WithLatestFromStreamTransformer.with4(T, A, B, C, D, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, fn));
  };
  with_latest_from['WithLatestFromExtensions|get#withLatestFrom4'] = function WithLatestFromExtensions$124get$35withLatestFrom4(T, $this) {
    return dart.fn((A, B, C, D, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, fn) => with_latest_from['WithLatestFromExtensions|withLatestFrom4'](T, A, B, C, D, R, $this, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, fn), dart.gFnType((A, B, C, D, R) => {
      var StreamOfA = () => (StreamOfA = dart.constFn(async.Stream$(A)))();
      var StreamOfB = () => (StreamOfB = dart.constFn(async.Stream$(B)))();
      var StreamOfC = () => (StreamOfC = dart.constFn(async.Stream$(C)))();
      var StreamOfD = () => (StreamOfD = dart.constFn(async.Stream$(D)))();
      var StreamOfR = () => (StreamOfR = dart.constFn(async.Stream$(R)))();
      return [StreamOfR(), [StreamOfA(), StreamOfB(), StreamOfC(), StreamOfD(), dart.fnType(R, [T, A, B, C, D])]];
    }));
  };
  with_latest_from['WithLatestFromExtensions|withLatestFrom5'] = function WithLatestFromExtensions$124withLatestFrom5(T, A, B, C, D, E, R, $this, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, fn) {
    return $this.transform(R, with_latest_from.WithLatestFromStreamTransformer.with5(T, A, B, C, D, E, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, fn));
  };
  with_latest_from['WithLatestFromExtensions|get#withLatestFrom5'] = function WithLatestFromExtensions$124get$35withLatestFrom5(T, $this) {
    return dart.fn((A, B, C, D, E, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, fn) => with_latest_from['WithLatestFromExtensions|withLatestFrom5'](T, A, B, C, D, E, R, $this, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, fn), dart.gFnType((A, B, C, D, E, R) => {
      var StreamOfA = () => (StreamOfA = dart.constFn(async.Stream$(A)))();
      var StreamOfB = () => (StreamOfB = dart.constFn(async.Stream$(B)))();
      var StreamOfC = () => (StreamOfC = dart.constFn(async.Stream$(C)))();
      var StreamOfD = () => (StreamOfD = dart.constFn(async.Stream$(D)))();
      var StreamOfE = () => (StreamOfE = dart.constFn(async.Stream$(E)))();
      var StreamOfR = () => (StreamOfR = dart.constFn(async.Stream$(R)))();
      return [StreamOfR(), [StreamOfA(), StreamOfB(), StreamOfC(), StreamOfD(), StreamOfE(), dart.fnType(R, [T, A, B, C, D, E])]];
    }));
  };
  with_latest_from['WithLatestFromExtensions|withLatestFrom6'] = function WithLatestFromExtensions$124withLatestFrom6(T, A, B, C, D, E, F, R, $this, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, fn) {
    return $this.transform(R, with_latest_from.WithLatestFromStreamTransformer.with6(T, A, B, C, D, E, F, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, fn));
  };
  with_latest_from['WithLatestFromExtensions|get#withLatestFrom6'] = function WithLatestFromExtensions$124get$35withLatestFrom6(T, $this) {
    return dart.fn((A, B, C, D, E, F, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, fn) => with_latest_from['WithLatestFromExtensions|withLatestFrom6'](T, A, B, C, D, E, F, R, $this, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, fn), dart.gFnType((A, B, C, D, E, F, R) => {
      var StreamOfA = () => (StreamOfA = dart.constFn(async.Stream$(A)))();
      var StreamOfB = () => (StreamOfB = dart.constFn(async.Stream$(B)))();
      var StreamOfC = () => (StreamOfC = dart.constFn(async.Stream$(C)))();
      var StreamOfD = () => (StreamOfD = dart.constFn(async.Stream$(D)))();
      var StreamOfE = () => (StreamOfE = dart.constFn(async.Stream$(E)))();
      var StreamOfF = () => (StreamOfF = dart.constFn(async.Stream$(F)))();
      var StreamOfR = () => (StreamOfR = dart.constFn(async.Stream$(R)))();
      return [StreamOfR(), [StreamOfA(), StreamOfB(), StreamOfC(), StreamOfD(), StreamOfE(), StreamOfF(), dart.fnType(R, [T, A, B, C, D, E, F])]];
    }));
  };
  with_latest_from['WithLatestFromExtensions|withLatestFrom7'] = function WithLatestFromExtensions$124withLatestFrom7(T, A, B, C, D, E, F, G, R, $this, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, fn) {
    return $this.transform(R, with_latest_from.WithLatestFromStreamTransformer.with7(T, A, B, C, D, E, F, G, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, fn));
  };
  with_latest_from['WithLatestFromExtensions|get#withLatestFrom7'] = function WithLatestFromExtensions$124get$35withLatestFrom7(T, $this) {
    return dart.fn((A, B, C, D, E, F, G, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, fn) => with_latest_from['WithLatestFromExtensions|withLatestFrom7'](T, A, B, C, D, E, F, G, R, $this, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, fn), dart.gFnType((A, B, C, D, E, F, G, R) => {
      var StreamOfA = () => (StreamOfA = dart.constFn(async.Stream$(A)))();
      var StreamOfB = () => (StreamOfB = dart.constFn(async.Stream$(B)))();
      var StreamOfC = () => (StreamOfC = dart.constFn(async.Stream$(C)))();
      var StreamOfD = () => (StreamOfD = dart.constFn(async.Stream$(D)))();
      var StreamOfE = () => (StreamOfE = dart.constFn(async.Stream$(E)))();
      var StreamOfF = () => (StreamOfF = dart.constFn(async.Stream$(F)))();
      var StreamOfG = () => (StreamOfG = dart.constFn(async.Stream$(G)))();
      var StreamOfR = () => (StreamOfR = dart.constFn(async.Stream$(R)))();
      return [StreamOfR(), [StreamOfA(), StreamOfB(), StreamOfC(), StreamOfD(), StreamOfE(), StreamOfF(), StreamOfG(), dart.fnType(R, [T, A, B, C, D, E, F, G])]];
    }));
  };
  with_latest_from['WithLatestFromExtensions|withLatestFrom8'] = function WithLatestFromExtensions$124withLatestFrom8(T, A, B, C, D, E, F, G, H, R, $this, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, latestFromStream8, fn) {
    return $this.transform(R, with_latest_from.WithLatestFromStreamTransformer.with8(T, A, B, C, D, E, F, G, H, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, latestFromStream8, fn));
  };
  with_latest_from['WithLatestFromExtensions|get#withLatestFrom8'] = function WithLatestFromExtensions$124get$35withLatestFrom8(T, $this) {
    return dart.fn((A, B, C, D, E, F, G, H, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, latestFromStream8, fn) => with_latest_from['WithLatestFromExtensions|withLatestFrom8'](T, A, B, C, D, E, F, G, H, R, $this, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, latestFromStream8, fn), dart.gFnType((A, B, C, D, E, F, G, H, R) => {
      var StreamOfA = () => (StreamOfA = dart.constFn(async.Stream$(A)))();
      var StreamOfB = () => (StreamOfB = dart.constFn(async.Stream$(B)))();
      var StreamOfC = () => (StreamOfC = dart.constFn(async.Stream$(C)))();
      var StreamOfD = () => (StreamOfD = dart.constFn(async.Stream$(D)))();
      var StreamOfE = () => (StreamOfE = dart.constFn(async.Stream$(E)))();
      var StreamOfF = () => (StreamOfF = dart.constFn(async.Stream$(F)))();
      var StreamOfG = () => (StreamOfG = dart.constFn(async.Stream$(G)))();
      var StreamOfH = () => (StreamOfH = dart.constFn(async.Stream$(H)))();
      var StreamOfR = () => (StreamOfR = dart.constFn(async.Stream$(R)))();
      return [StreamOfR(), [StreamOfA(), StreamOfB(), StreamOfC(), StreamOfD(), StreamOfE(), StreamOfF(), StreamOfG(), StreamOfH(), dart.fnType(R, [T, A, B, C, D, E, F, G, H])]];
    }));
  };
  with_latest_from['WithLatestFromExtensions|withLatestFrom9'] = function WithLatestFromExtensions$124withLatestFrom9(T, A, B, C, D, E, F, G, H, I, R, $this, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, latestFromStream8, latestFromStream9, fn) {
    return $this.transform(R, with_latest_from.WithLatestFromStreamTransformer.with9(T, A, B, C, D, E, F, G, H, I, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, latestFromStream8, latestFromStream9, fn));
  };
  with_latest_from['WithLatestFromExtensions|get#withLatestFrom9'] = function WithLatestFromExtensions$124get$35withLatestFrom9(T, $this) {
    return dart.fn((A, B, C, D, E, F, G, H, I, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, latestFromStream8, latestFromStream9, fn) => with_latest_from['WithLatestFromExtensions|withLatestFrom9'](T, A, B, C, D, E, F, G, H, I, R, $this, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, latestFromStream8, latestFromStream9, fn), dart.gFnType((A, B, C, D, E, F, G, H, I, R) => {
      var StreamOfA = () => (StreamOfA = dart.constFn(async.Stream$(A)))();
      var StreamOfB = () => (StreamOfB = dart.constFn(async.Stream$(B)))();
      var StreamOfC = () => (StreamOfC = dart.constFn(async.Stream$(C)))();
      var StreamOfD = () => (StreamOfD = dart.constFn(async.Stream$(D)))();
      var StreamOfE = () => (StreamOfE = dart.constFn(async.Stream$(E)))();
      var StreamOfF = () => (StreamOfF = dart.constFn(async.Stream$(F)))();
      var StreamOfG = () => (StreamOfG = dart.constFn(async.Stream$(G)))();
      var StreamOfH = () => (StreamOfH = dart.constFn(async.Stream$(H)))();
      var StreamOfI = () => (StreamOfI = dart.constFn(async.Stream$(I)))();
      var StreamOfR = () => (StreamOfR = dart.constFn(async.Stream$(R)))();
      return [StreamOfR(), [StreamOfA(), StreamOfB(), StreamOfC(), StreamOfD(), StreamOfE(), StreamOfF(), StreamOfG(), StreamOfH(), StreamOfI(), dart.fnType(R, [T, A, B, C, D, E, F, G, H, I])]];
    }));
  };
  var _transformer$11 = dart.privateName(time_interval, "_transformer");
  const _is_TimeInterval_default = Symbol('_is_TimeInterval_default');
  var interval$ = dart.privateName(time_interval, "TimeInterval.interval");
  var value$1 = dart.privateName(time_interval, "TimeInterval.value");
  time_interval.TimeInterval$ = dart.generic(T => {
    class TimeInterval extends core.Object {
      get interval() {
        return this[interval$];
      }
      set interval(value) {
        super.interval = value;
      }
      get value() {
        return this[value$1];
      }
      set value(value) {
        super.value = value;
      }
      _equals(other) {
        if (other == null) return false;
        if (this === other) {
          return true;
        }
        return time_interval.TimeInterval.is(other) && dart.equals(this.interval, other.interval) && dart.equals(this.value, other.value);
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.interval)) ^ dart.notNull(dart.hashCode(this.value))) >>> 0;
      }
      toString() {
        return "TimeInterval{interval: " + dart.str(this.interval) + ", value: " + dart.str(this.value) + "}";
      }
    }
    (TimeInterval.new = function(value, interval) {
      this[value$1] = value;
      this[interval$] = interval;
      ;
    }).prototype = TimeInterval.prototype;
    dart.addTypeTests(TimeInterval);
    TimeInterval.prototype[_is_TimeInterval_default] = true;
    dart.setMethodSignature(TimeInterval, () => ({
      __proto__: dart.getMethods(TimeInterval.__proto__),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object])
    }));
    dart.setLibraryUri(TimeInterval, "package:rxdart/src/transformers/time_interval.dart");
    dart.setFieldSignature(TimeInterval, () => ({
      __proto__: dart.getFields(TimeInterval.__proto__),
      interval: dart.finalFieldType(core.Duration),
      value: dart.finalFieldType(T)
    }));
    dart.defineExtensionMethods(TimeInterval, ['_equals', 'toString']);
    dart.defineExtensionAccessors(TimeInterval, ['hashCode']);
    return TimeInterval;
  });
  time_interval.TimeInterval = time_interval.TimeInterval$();
  dart.addTypeTests(time_interval.TimeInterval, _is_TimeInterval_default);
  const _is_TimeIntervalStreamTransformer_default = Symbol('_is_TimeIntervalStreamTransformer_default');
  time_interval.TimeIntervalStreamTransformer$ = dart.generic(T => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class TimeIntervalStreamTransformer extends async.StreamTransformerBase$(T, time_interval.TimeInterval$(T)) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$11].bind(stream);
      }
      static _buildTransformer(T) {
        return new (async._StreamSubscriptionTransformer$(T, time_interval.TimeInterval$(T))).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(time_interval.TimeInterval$(T)).new({sync: true, onListen: dart.fn(() => {
              let t79;
              let stopwatch = (t79 = new core.Stopwatch.new(), t79.start(), t79);
              let ems = null;
              subscription = input.listen(dart.fn(value => {
                let t80;
                ems = stopwatch.elapsedMicroseconds;
                stopwatch.stop();
                try {
                  controller.add(new (time_interval.TimeInterval$(T)).new(value, new core.Duration.new({microseconds: ems})));
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
                stopwatch = (t80 = new core.Stopwatch.new(), t80.start(), t80);
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  stopwatch.stop();
                  controller.close();
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(time_interval.TimeInterval$(T)), [async.Stream$(T), core.bool])));
      }
    }
    (TimeIntervalStreamTransformer.new = function() {
      this[_transformer$11] = time_interval.TimeIntervalStreamTransformer._buildTransformer(T);
      TimeIntervalStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = TimeIntervalStreamTransformer.prototype;
    dart.addTypeTests(TimeIntervalStreamTransformer);
    TimeIntervalStreamTransformer.prototype[_is_TimeIntervalStreamTransformer_default] = true;
    dart.setMethodSignature(TimeIntervalStreamTransformer, () => ({
      __proto__: dart.getMethods(TimeIntervalStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(time_interval.TimeInterval$(T)), [core.Object])
    }));
    dart.setLibraryUri(TimeIntervalStreamTransformer, "package:rxdart/src/transformers/time_interval.dart");
    dart.setFieldSignature(TimeIntervalStreamTransformer, () => ({
      __proto__: dart.getFields(TimeIntervalStreamTransformer.__proto__),
      [_transformer$11]: dart.finalFieldType(async.StreamTransformer$(T, time_interval.TimeInterval$(T)))
    }));
    return TimeIntervalStreamTransformer;
  });
  time_interval.TimeIntervalStreamTransformer = time_interval.TimeIntervalStreamTransformer$();
  dart.addTypeTests(time_interval.TimeIntervalStreamTransformer, _is_TimeIntervalStreamTransformer_default);
  time_interval['TimeIntervalExtension|timeInterval'] = function TimeIntervalExtension$124timeInterval(T, $this) {
    return $this.transform(time_interval.TimeInterval$(T), new (time_interval.TimeIntervalStreamTransformer$(T)).new());
  };
  time_interval['TimeIntervalExtension|get#timeInterval'] = function TimeIntervalExtension$124get$35timeInterval(T, $this) {
    return dart.fn(() => time_interval['TimeIntervalExtension|timeInterval'](T, $this), dart.fnType(async.Stream$(time_interval.TimeInterval$(T)), []));
  };
  var _transformer$12 = dart.privateName(skip_until, "_transformer");
  const _is_SkipUntilStreamTransformer_default = Symbol('_is_SkipUntilStreamTransformer_default');
  skip_until.SkipUntilStreamTransformer$ = dart.generic((T, S) => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class SkipUntilStreamTransformer extends async.StreamTransformerBase$(T, T) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$12].bind(stream);
      }
      static _buildTransformer(T, S, otherStream) {
        if (otherStream == null) {
          dart.throw(new core.ArgumentError.new("otherStream cannot be null"));
        }
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let otherSubscription = null;
          let goTime = false;
          function onDone() {
            if (dart.test(controller.isClosed)) return;
            controller.close();
          }
          dart.fn(onDone, VoidTovoid());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(data => {
                if (goTime) {
                  controller.add(data);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: onDone, cancelOnError: cancelOnError});
              otherSubscription = otherStream.listen(dart.fn(_ => {
                goTime = true;
                otherSubscription.cancel();
              }, dart.fnType(core.Null, [S])), {onError: dart.bind(controller, 'addError'), cancelOnError: cancelOnError, onDone: onDone});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => async.async(core.Null, function*() {
              let t82, t82$;
              yield (t82 = otherSubscription, t82 == null ? null : t82.cancel());
              yield (t82$ = subscription, t82$ == null ? null : t82$.cancel());
            }), VoidToFutureOfNull())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (SkipUntilStreamTransformer.new = function(otherStream) {
      this[_transformer$12] = skip_until.SkipUntilStreamTransformer._buildTransformer(T, S, otherStream);
      SkipUntilStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = SkipUntilStreamTransformer.prototype;
    dart.addTypeTests(SkipUntilStreamTransformer);
    SkipUntilStreamTransformer.prototype[_is_SkipUntilStreamTransformer_default] = true;
    dart.setMethodSignature(SkipUntilStreamTransformer, () => ({
      __proto__: dart.getMethods(SkipUntilStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(SkipUntilStreamTransformer, "package:rxdart/src/transformers/skip_until.dart");
    dart.setFieldSignature(SkipUntilStreamTransformer, () => ({
      __proto__: dart.getFields(SkipUntilStreamTransformer.__proto__),
      [_transformer$12]: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return SkipUntilStreamTransformer;
  });
  skip_until.SkipUntilStreamTransformer = skip_until.SkipUntilStreamTransformer$();
  dart.addTypeTests(skip_until.SkipUntilStreamTransformer, _is_SkipUntilStreamTransformer_default);
  skip_until['SkipUntilExtension|skipUntil'] = function SkipUntilExtension$124skipUntil(T, S, $this, otherStream) {
    return $this.transform(T, new (skip_until.SkipUntilStreamTransformer$(T, S)).new(otherStream));
  };
  skip_until['SkipUntilExtension|get#skipUntil'] = function SkipUntilExtension$124get$35skipUntil(T, $this) {
    return dart.fn((S, otherStream) => skip_until['SkipUntilExtension|skipUntil'](T, S, $this, otherStream), dart.gFnType(S => {
      var StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
      return [async.Stream$(T), [StreamOfS()]];
    }));
  };
  var _transformer$13 = dart.privateName(flat_map, "_transformer");
  const _is_FlatMapStreamTransformer_default = Symbol('_is_FlatMapStreamTransformer_default');
  flat_map.FlatMapStreamTransformer$ = dart.generic((T, S) => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class FlatMapStreamTransformer extends async.StreamTransformerBase$(T, S) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$13].bind(stream);
      }
      static _buildTransformer(T, S, mapper) {
        return new (async._StreamSubscriptionTransformer$(T, S)).new(dart.fn((input, cancelOnError) => {
          let subscriptions = _interceptors.JSArray$(async.StreamSubscription$(S)).of([]);
          let controller = null;
          let subscription = null;
          let closeAfterNextEvent = false;
          let hasMainEvent = false;
          let openStreams = 0;
          controller = async.StreamController$(S).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  let otherSubscription = null;
                  let otherStream = mapper(value);
                  hasMainEvent = true;
                  openStreams = openStreams + 1;
                  otherSubscription = otherStream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                      openStreams = openStreams - 1;
                      if (closeAfterNextEvent && openStreams === 0) {
                        controller.close();
                      }
                    }, VoidToNull())});
                  subscriptions[$add](otherSubscription);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  if (!hasMainEvent || openStreams === 0) {
                    controller.close();
                  } else {
                    closeAfterNextEvent = true;
                  }
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => {
              subscription.pause(resumeSignal);
              subscriptions[$forEach](dart.fn(otherSubscription => otherSubscription.pause(resumeSignal), dart.fnType(dart.void, [async.StreamSubscription$(S)])));
            }, FutureToNull()), onResume: dart.fn(() => {
              subscription.resume();
              subscriptions[$forEach](dart.fn(otherSubscription => otherSubscription.resume(), dart.fnType(dart.void, [async.StreamSubscription$(S)])));
            }, VoidToNull()), onCancel: dart.fn(() => {
              let t85;
              let list = (t85 = ListOfStreamSubscription().from(subscriptions), t85[$add](subscription), t85);
              return async.Future.wait(dart.dynamic, list[$map](async.Future, dart.fn(subscription => subscription.cancel(), StreamSubscriptionToFuture()))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool())));
            }, VoidToFutureOfList())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(S), [async.Stream$(T), core.bool])));
      }
    }
    (FlatMapStreamTransformer.new = function(mapper) {
      this[_transformer$13] = flat_map.FlatMapStreamTransformer._buildTransformer(T, S, mapper);
      FlatMapStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = FlatMapStreamTransformer.prototype;
    dart.addTypeTests(FlatMapStreamTransformer);
    FlatMapStreamTransformer.prototype[_is_FlatMapStreamTransformer_default] = true;
    dart.setMethodSignature(FlatMapStreamTransformer, () => ({
      __proto__: dart.getMethods(FlatMapStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setLibraryUri(FlatMapStreamTransformer, "package:rxdart/src/transformers/flat_map.dart");
    dart.setFieldSignature(FlatMapStreamTransformer, () => ({
      __proto__: dart.getFields(FlatMapStreamTransformer.__proto__),
      [_transformer$13]: dart.finalFieldType(async.StreamTransformer$(T, S))
    }));
    return FlatMapStreamTransformer;
  });
  flat_map.FlatMapStreamTransformer = flat_map.FlatMapStreamTransformer$();
  dart.addTypeTests(flat_map.FlatMapStreamTransformer, _is_FlatMapStreamTransformer_default);
  flat_map['FlatMapExtension|flatMap'] = function FlatMapExtension$124flatMap(T, S, $this, mapper) {
    return $this.transform(S, new (flat_map.FlatMapStreamTransformer$(T, S)).new(mapper));
  };
  flat_map['FlatMapExtension|get#flatMap'] = function FlatMapExtension$124get$35flatMap(T, $this) {
    return dart.fn((S, mapper) => flat_map['FlatMapExtension|flatMap'](T, S, $this, mapper), dart.gFnType(S => {
      var StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
      return [StreamOfS(), [dart.fnType(StreamOfS(), [T])]];
    }));
  };
  flat_map['FlatMapExtension|flatMapIterable'] = function FlatMapExtension$124flatMapIterable(T, S, $this, mapper) {
    return $this.transform(core.Iterable$(S), new (flat_map.FlatMapStreamTransformer$(T, core.Iterable$(S))).new(mapper)).expand(S, dart.fn(iterable => iterable, dart.fnType(core.Iterable$(S), [core.Iterable$(S)])));
  };
  flat_map['FlatMapExtension|get#flatMapIterable'] = function FlatMapExtension$124get$35flatMapIterable(T, $this) {
    return dart.fn((S, mapper) => flat_map['FlatMapExtension|flatMapIterable'](T, S, $this, mapper), dart.gFnType(S => {
      var StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
      var IterableOfS = () => (IterableOfS = dart.constFn(core.Iterable$(S)))();
      var StreamOfIterableOfS = () => (StreamOfIterableOfS = dart.constFn(async.Stream$(IterableOfS())))();
      return [StreamOfS(), [dart.fnType(StreamOfIterableOfS(), [T])]];
    }));
  };
  var _transformer$14 = dart.privateName(dematerialize, "_transformer");
  const _is_DematerializeStreamTransformer_default = Symbol('_is_DematerializeStreamTransformer_default');
  dematerialize.DematerializeStreamTransformer$ = dart.generic(T => {
    var NotificationOfT = () => (NotificationOfT = dart.constFn(notification.Notification$(T)))();
    var StreamOfNotificationOfT = () => (StreamOfNotificationOfT = dart.constFn(async.Stream$(NotificationOfT())))();
    class DematerializeStreamTransformer extends async.StreamTransformerBase$(notification.Notification$(T), T) {
      bind(stream) {
        StreamOfNotificationOfT()._check(stream);
        return this[_transformer$14].bind(stream);
      }
      static _buildTransformer(T) {
        return new (async._StreamSubscriptionTransformer$(notification.Notification$(T), T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(notification => {
                try {
                  if (dart.test(notification.isOnData)) {
                    controller.add(notification.value);
                  } else if (dart.test(notification.isOnDone)) {
                    controller.close();
                  } else if (dart.test(notification.isOnError)) {
                    controller.addError(notification.error, notification.stackTrace);
                  }
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [notification.Notification$(T)])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => {
              subscription.pause(resumeSignal);
            }, FutureToNull()), onResume: dart.fn(() => {
              subscription.resume();
            }, VoidToNull()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(notification.Notification$(T)), core.bool])));
      }
    }
    (DematerializeStreamTransformer.new = function() {
      this[_transformer$14] = dematerialize.DematerializeStreamTransformer._buildTransformer(T);
      DematerializeStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = DematerializeStreamTransformer.prototype;
    dart.addTypeTests(DematerializeStreamTransformer);
    DematerializeStreamTransformer.prototype[_is_DematerializeStreamTransformer_default] = true;
    dart.setMethodSignature(DematerializeStreamTransformer, () => ({
      __proto__: dart.getMethods(DematerializeStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(DematerializeStreamTransformer, "package:rxdart/src/transformers/dematerialize.dart");
    dart.setFieldSignature(DematerializeStreamTransformer, () => ({
      __proto__: dart.getFields(DematerializeStreamTransformer.__proto__),
      [_transformer$14]: dart.finalFieldType(async.StreamTransformer$(notification.Notification$(T), T))
    }));
    return DematerializeStreamTransformer;
  });
  dematerialize.DematerializeStreamTransformer = dematerialize.DematerializeStreamTransformer$();
  dart.addTypeTests(dematerialize.DematerializeStreamTransformer, _is_DematerializeStreamTransformer_default);
  dematerialize['DematerializeExtension|dematerialize'] = function DematerializeExtension$124dematerialize(T, $this) {
    return $this.transform(T, new (dematerialize.DematerializeStreamTransformer$(T)).new());
  };
  dematerialize['DematerializeExtension|get#dematerialize'] = function DematerializeExtension$124get$35dematerialize(T, $this) {
    return dart.fn(() => dematerialize['DematerializeExtension|dematerialize'](T, $this), dart.fnType(async.Stream$(T), []));
  };
  const _is_PairwiseStreamTransformer_default = Symbol('_is_PairwiseStreamTransformer_default');
  pairwise.PairwiseStreamTransformer$ = dart.generic(T => {
    var TToNeverStreamOfvoid = () => (TToNeverStreamOfvoid = dart.constFn(dart.fnType(NeverStreamOfvoid(), [T])))();
    var IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    var IterableOfTToIterableOfT = () => (IterableOfTToIterableOfT = dart.constFn(dart.fnType(IterableOfT(), [IterableOfT()])))();
    var IterableOfTTobool = () => (IterableOfTTobool = dart.constFn(dart.fnType(core.bool, [IterableOfT()])))();
    class PairwiseStreamTransformer extends backpressure.BackpressureStreamTransformer$(T, core.Iterable$(T)) {}
    (PairwiseStreamTransformer.new = function() {
      PairwiseStreamTransformer.__proto__.new.call(this, backpressure.WindowStrategy.firstEventOnly, dart.fn(_ => new (NeverStreamOfvoid()).new(), TToNeverStreamOfvoid()), {onWindowEnd: dart.fn(queue => queue, IterableOfTToIterableOfT()), startBufferEvery: 1, closeWindowWhen: dart.fn(queue => queue[$length] === 2, IterableOfTTobool()), dispatchOnClose: false});
      ;
    }).prototype = PairwiseStreamTransformer.prototype;
    dart.addTypeTests(PairwiseStreamTransformer);
    PairwiseStreamTransformer.prototype[_is_PairwiseStreamTransformer_default] = true;
    dart.setLibraryUri(PairwiseStreamTransformer, "package:rxdart/src/transformers/backpressure/pairwise.dart");
    return PairwiseStreamTransformer;
  });
  pairwise.PairwiseStreamTransformer = pairwise.PairwiseStreamTransformer$();
  dart.addTypeTests(pairwise.PairwiseStreamTransformer, _is_PairwiseStreamTransformer_default);
  pairwise['PairwiseExtension|pairwise'] = function PairwiseExtension$124pairwise(T, $this) {
    return $this.transform(core.Iterable$(T), new (pairwise.PairwiseStreamTransformer$(T)).new());
  };
  pairwise['PairwiseExtension|get#pairwise'] = function PairwiseExtension$124get$35pairwise(T, $this) {
    return dart.fn(() => pairwise['PairwiseExtension|pairwise'](T, $this), dart.fnType(async.Stream$(core.Iterable$(T)), []));
  };
  const _is_DebounceStreamTransformer_default = Symbol('_is_DebounceStreamTransformer_default');
  debounce.DebounceStreamTransformer$ = dart.generic(T => {
    var IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    var IterableOfTToT = () => (IterableOfTToT = dart.constFn(dart.fnType(T, [IterableOfT()])))();
    class DebounceStreamTransformer extends backpressure.BackpressureStreamTransformer$(T, T) {}
    (DebounceStreamTransformer.new = function(window) {
      DebounceStreamTransformer.__proto__.new.call(this, backpressure.WindowStrategy.everyEvent, window, {onWindowEnd: dart.fn(queue => queue[$last], IterableOfTToT())});
      if (!(window != null)) dart.assertFailed("window stream factory cannot be null", "org-dartlang-app:///packages/rxdart/src/transformers/backpressure/debounce.dart", 35, 12, "window != null");
    }).prototype = DebounceStreamTransformer.prototype;
    dart.addTypeTests(DebounceStreamTransformer);
    DebounceStreamTransformer.prototype[_is_DebounceStreamTransformer_default] = true;
    dart.setLibraryUri(DebounceStreamTransformer, "package:rxdart/src/transformers/backpressure/debounce.dart");
    return DebounceStreamTransformer;
  });
  debounce.DebounceStreamTransformer = debounce.DebounceStreamTransformer$();
  dart.addTypeTests(debounce.DebounceStreamTransformer, _is_DebounceStreamTransformer_default);
  debounce['DebounceExtensions|debounce'] = function DebounceExtensions$124debounce(T, $this, window) {
    return $this.transform(T, new (debounce.DebounceStreamTransformer$(T)).new(window));
  };
  debounce['DebounceExtensions|get#debounce'] = function DebounceExtensions$124get$35debounce(T, $this) {
    return dart.fn(window => debounce['DebounceExtensions|debounce'](T, $this, window), dart.fnType(async.Stream$(T), [dart.fnType(async.Stream, [T])]));
  };
  debounce['DebounceExtensions|debounceTime'] = function DebounceExtensions$124debounceTime(T, $this, duration) {
    return $this.transform(T, new (debounce.DebounceStreamTransformer$(T)).new(dart.fn(_ => new (TimerStreamOfbool()).new(true, duration), dart.fnType(TimerStreamOfbool(), [T]))));
  };
  debounce['DebounceExtensions|get#debounceTime'] = function DebounceExtensions$124get$35debounceTime(T, $this) {
    return dart.fn(duration => debounce['DebounceExtensions|debounceTime'](T, $this, duration), dart.fnType(async.Stream$(T), [core.Duration]));
  };
  var _transformer$15 = dart.privateName(delay, "_transformer");
  var C9;
  const _is_DelayStreamTransformer_default = Symbol('_is_DelayStreamTransformer_default');
  delay.DelayStreamTransformer$ = dart.generic(T => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class DelayStreamTransformer extends async.StreamTransformerBase$(T, T) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$15].bind(stream);
      }
      static _buildTransformer(T, duration) {
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let onDoneCalled = false;
          let hasNoEvents = true;
          let timers = JSArrayOfTimer().of([]);
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                hasNoEvents = false;
                try {
                  let timer = null;
                  timer = async.Timer.new(duration, dart.fn(() => {
                    controller.add(value);
                    timers[$remove](timer);
                    if (onDoneCalled && dart.test(timers[$isEmpty])) {
                      controller.close();
                    }
                  }, VoidToNull()));
                  timers[$add](timer);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  if (hasNoEvents) controller.close();
                  onDoneCalled = true;
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => {
              timers[$forEach](C9 || CT.C9);
              return subscription.cancel();
            }, VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
      static _cancelTimerIfActive(_timer) {
        if (_timer != null && dart.test(_timer.isActive)) {
          _timer.cancel();
        }
      }
    }
    (DelayStreamTransformer.new = function(duration) {
      this[_transformer$15] = delay.DelayStreamTransformer._buildTransformer(T, duration);
      DelayStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = DelayStreamTransformer.prototype;
    dart.addTypeTests(DelayStreamTransformer);
    DelayStreamTransformer.prototype[_is_DelayStreamTransformer_default] = true;
    dart.setMethodSignature(DelayStreamTransformer, () => ({
      __proto__: dart.getMethods(DelayStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(DelayStreamTransformer, "package:rxdart/src/transformers/delay.dart");
    dart.setFieldSignature(DelayStreamTransformer, () => ({
      __proto__: dart.getFields(DelayStreamTransformer.__proto__),
      [_transformer$15]: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return DelayStreamTransformer;
  });
  delay.DelayStreamTransformer = delay.DelayStreamTransformer$();
  dart.addTypeTests(delay.DelayStreamTransformer, _is_DelayStreamTransformer_default);
  delay['DelayExtension|delay'] = function DelayExtension$124delay(T, $this, duration) {
    return $this.transform(T, new (delay.DelayStreamTransformer$(T)).new(duration));
  };
  delay['DelayExtension|get#delay'] = function DelayExtension$124get$35delay(T, $this) {
    return dart.fn(duration => delay['DelayExtension|delay'](T, $this, duration), dart.fnType(async.Stream$(T), [core.Duration]));
  };
  var _transformer$16 = dart.privateName(default_if_empty, "_transformer");
  const _is_DefaultIfEmptyStreamTransformer_default = Symbol('_is_DefaultIfEmptyStreamTransformer_default');
  default_if_empty.DefaultIfEmptyStreamTransformer$ = dart.generic(T => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class DefaultIfEmptyStreamTransformer extends async.StreamTransformerBase$(T, T) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$16].bind(stream);
      }
      static _buildTransformer(T, defaultValue) {
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let hasEvent = false;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                hasEvent = true;
                try {
                  controller.add(value);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  if (!hasEvent) controller.add(defaultValue);
                  controller.close();
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (DefaultIfEmptyStreamTransformer.new = function(defaultValue) {
      this[_transformer$16] = default_if_empty.DefaultIfEmptyStreamTransformer._buildTransformer(T, defaultValue);
      DefaultIfEmptyStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = DefaultIfEmptyStreamTransformer.prototype;
    dart.addTypeTests(DefaultIfEmptyStreamTransformer);
    DefaultIfEmptyStreamTransformer.prototype[_is_DefaultIfEmptyStreamTransformer_default] = true;
    dart.setMethodSignature(DefaultIfEmptyStreamTransformer, () => ({
      __proto__: dart.getMethods(DefaultIfEmptyStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(DefaultIfEmptyStreamTransformer, "package:rxdart/src/transformers/default_if_empty.dart");
    dart.setFieldSignature(DefaultIfEmptyStreamTransformer, () => ({
      __proto__: dart.getFields(DefaultIfEmptyStreamTransformer.__proto__),
      [_transformer$16]: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return DefaultIfEmptyStreamTransformer;
  });
  default_if_empty.DefaultIfEmptyStreamTransformer = default_if_empty.DefaultIfEmptyStreamTransformer$();
  dart.addTypeTests(default_if_empty.DefaultIfEmptyStreamTransformer, _is_DefaultIfEmptyStreamTransformer_default);
  default_if_empty['DefaultIfEmptyExtension|defaultIfEmpty'] = function DefaultIfEmptyExtension$124defaultIfEmpty(T, $this, defaultValue) {
    return $this.transform(T, new (default_if_empty.DefaultIfEmptyStreamTransformer$(T)).new(defaultValue));
  };
  default_if_empty['DefaultIfEmptyExtension|get#defaultIfEmpty'] = function DefaultIfEmptyExtension$124get$35defaultIfEmpty(T, $this) {
    return dart.fn(defaultValue => default_if_empty['DefaultIfEmptyExtension|defaultIfEmpty'](T, $this, defaultValue), dart.fnType(async.Stream$(T), [T]));
  };
  var _transformer$17 = dart.privateName(distinct_unique, "_transformer");
  const _is_DistinctUniqueStreamTransformer_default = Symbol('_is_DistinctUniqueStreamTransformer_default');
  distinct_unique.DistinctUniqueStreamTransformer$ = dart.generic(T => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class DistinctUniqueStreamTransformer extends async.StreamTransformerBase$(T, T) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$17].bind(stream);
      }
      static _buildTransformer(T, equals, hashCode) {
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let collection = collection$.HashSet$(T).new({equals: equals, hashCode: hashCode});
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  if (dart.test(collection.add(value))) controller.add(value);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => {
              collection.clear();
              collection = null;
              return subscription.cancel();
            }, VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (DistinctUniqueStreamTransformer.new = function(opts) {
      let equals = opts && 'equals' in opts ? opts.equals : null;
      let hashCode = opts && 'hashCode' in opts ? opts.hashCode : null;
      this[_transformer$17] = distinct_unique.DistinctUniqueStreamTransformer._buildTransformer(T, equals, hashCode);
      DistinctUniqueStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = DistinctUniqueStreamTransformer.prototype;
    dart.addTypeTests(DistinctUniqueStreamTransformer);
    DistinctUniqueStreamTransformer.prototype[_is_DistinctUniqueStreamTransformer_default] = true;
    dart.setMethodSignature(DistinctUniqueStreamTransformer, () => ({
      __proto__: dart.getMethods(DistinctUniqueStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(DistinctUniqueStreamTransformer, "package:rxdart/src/transformers/distinct_unique.dart");
    dart.setFieldSignature(DistinctUniqueStreamTransformer, () => ({
      __proto__: dart.getFields(DistinctUniqueStreamTransformer.__proto__),
      [_transformer$17]: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return DistinctUniqueStreamTransformer;
  });
  distinct_unique.DistinctUniqueStreamTransformer = distinct_unique.DistinctUniqueStreamTransformer$();
  dart.addTypeTests(distinct_unique.DistinctUniqueStreamTransformer, _is_DistinctUniqueStreamTransformer_default);
  distinct_unique['DistinctUniqueExtension|distinctUnique'] = function DistinctUniqueExtension$124distinctUnique(T, $this, opts) {
    let equals = opts && 'equals' in opts ? opts.equals : null;
    let hashCode = opts && 'hashCode' in opts ? opts.hashCode : null;
    return $this.transform(T, new (distinct_unique.DistinctUniqueStreamTransformer$(T)).new({equals: equals, hashCode: hashCode}));
  };
  distinct_unique['DistinctUniqueExtension|get#distinctUnique'] = function DistinctUniqueExtension$124get$35distinctUnique(T, $this) {
    return dart.fn(opts => {
      let equals = opts && 'equals' in opts ? opts.equals : null;
      let hashCode = opts && 'hashCode' in opts ? opts.hashCode : null;
      return distinct_unique['DistinctUniqueExtension|distinctUnique'](T, $this, {equals: equals, hashCode: hashCode});
    }, dart.fnType(async.Stream$(T), [], {equals: dart.fnType(core.bool, [T, T]), hashCode: dart.fnType(core.int, [T])}, {}));
  };
  var _transformer$18 = dart.privateName(exhaust_map, "_transformer");
  const _is_ExhaustMapStreamTransformer_default = Symbol('_is_ExhaustMapStreamTransformer_default');
  exhaust_map.ExhaustMapStreamTransformer$ = dart.generic((T, S) => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class ExhaustMapStreamTransformer extends async.StreamTransformerBase$(T, S) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$18].bind(stream);
      }
      static _buildTransformer(T, S, mapper) {
        return new (async._StreamSubscriptionTransformer$(T, S)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let inputSubscription = null;
          let outputSubscription = null;
          let inputClosed = false;
          let outputIsEmitting = false;
          controller = async.StreamController$(S).new({sync: true, onListen: dart.fn(() => {
              inputSubscription = input.listen(dart.fn(value => {
                try {
                  if (!outputIsEmitting) {
                    outputIsEmitting = true;
                    outputSubscription = mapper(value).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                        outputIsEmitting = false;
                        if (inputClosed) controller.close();
                      }, VoidToNull())});
                  }
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  inputClosed = true;
                  if (!outputIsEmitting) controller.close();
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => {
              let t108;
              inputSubscription.pause(resumeSignal);
              t108 = outputSubscription;
              t108 == null ? null : t108.pause(resumeSignal);
            }, FutureToNull()), onResume: dart.fn(() => {
              let t108;
              inputSubscription.resume();
              t108 = outputSubscription;
              t108 == null ? null : t108.resume();
            }, VoidToNull()), onCancel: dart.fn(() => async.async(core.Null, function*() {
              yield inputSubscription.cancel();
              if (outputIsEmitting) yield outputSubscription.cancel();
            }), VoidToFutureOfNull())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(S), [async.Stream$(T), core.bool])));
      }
    }
    (ExhaustMapStreamTransformer.new = function(mapper) {
      this[_transformer$18] = exhaust_map.ExhaustMapStreamTransformer._buildTransformer(T, S, mapper);
      ExhaustMapStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = ExhaustMapStreamTransformer.prototype;
    dart.addTypeTests(ExhaustMapStreamTransformer);
    ExhaustMapStreamTransformer.prototype[_is_ExhaustMapStreamTransformer_default] = true;
    dart.setMethodSignature(ExhaustMapStreamTransformer, () => ({
      __proto__: dart.getMethods(ExhaustMapStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setLibraryUri(ExhaustMapStreamTransformer, "package:rxdart/src/transformers/exhaust_map.dart");
    dart.setFieldSignature(ExhaustMapStreamTransformer, () => ({
      __proto__: dart.getFields(ExhaustMapStreamTransformer.__proto__),
      [_transformer$18]: dart.finalFieldType(async.StreamTransformer$(T, S))
    }));
    return ExhaustMapStreamTransformer;
  });
  exhaust_map.ExhaustMapStreamTransformer = exhaust_map.ExhaustMapStreamTransformer$();
  dart.addTypeTests(exhaust_map.ExhaustMapStreamTransformer, _is_ExhaustMapStreamTransformer_default);
  exhaust_map['ExhaustMapExtension|exhaustMap'] = function ExhaustMapExtension$124exhaustMap(T, S, $this, mapper) {
    return $this.transform(S, new (exhaust_map.ExhaustMapStreamTransformer$(T, S)).new(mapper));
  };
  exhaust_map['ExhaustMapExtension|get#exhaustMap'] = function ExhaustMapExtension$124get$35exhaustMap(T, $this) {
    return dart.fn((S, mapper) => exhaust_map['ExhaustMapExtension|exhaustMap'](T, S, $this, mapper), dart.gFnType(S => {
      var StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
      return [StreamOfS(), [dart.fnType(StreamOfS(), [T])]];
    }));
  };
  const _is_BufferStreamTransformer_default = Symbol('_is_BufferStreamTransformer_default');
  buffer.BufferStreamTransformer$ = dart.generic(T => {
    var ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    var ListOfTToListOfT = () => (ListOfTToListOfT = dart.constFn(dart.fnType(ListOfT(), [ListOfT()])))();
    class BufferStreamTransformer extends backpressure.BackpressureStreamTransformer$(T, core.List$(T)) {}
    (BufferStreamTransformer.new = function(window) {
      BufferStreamTransformer.__proto__.new.call(this, backpressure.WindowStrategy.firstEventOnly, window, {onWindowEnd: dart.fn(queue => queue, ListOfTToListOfT()), ignoreEmptyWindows: false});
      if (window == null) dart.throw(new core.ArgumentError.notNull("window"));
    }).prototype = BufferStreamTransformer.prototype;
    dart.addTypeTests(BufferStreamTransformer);
    BufferStreamTransformer.prototype[_is_BufferStreamTransformer_default] = true;
    dart.setLibraryUri(BufferStreamTransformer, "package:rxdart/src/transformers/backpressure/buffer.dart");
    return BufferStreamTransformer;
  });
  buffer.BufferStreamTransformer = buffer.BufferStreamTransformer$();
  dart.addTypeTests(buffer.BufferStreamTransformer, _is_BufferStreamTransformer_default);
  const _is_BufferCountStreamTransformer_default = Symbol('_is_BufferCountStreamTransformer_default');
  buffer.BufferCountStreamTransformer$ = dart.generic(T => {
    var ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    var ListOfTToListOfT = () => (ListOfTToListOfT = dart.constFn(dart.fnType(ListOfT(), [ListOfT()])))();
    var IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    var IterableOfTTobool = () => (IterableOfTTobool = dart.constFn(dart.fnType(core.bool, [IterableOfT()])))();
    class BufferCountStreamTransformer extends backpressure.BackpressureStreamTransformer$(T, core.List$(T)) {}
    (BufferCountStreamTransformer.new = function(count, startBufferEvery = 0) {
      BufferCountStreamTransformer.__proto__.new.call(this, backpressure.WindowStrategy.onHandler, null, {onWindowEnd: dart.fn(queue => queue, ListOfTToListOfT()), startBufferEvery: startBufferEvery, closeWindowWhen: dart.fn(queue => queue[$length] == count, IterableOfTTobool())});
      if (count == null) dart.throw(new core.ArgumentError.notNull("count"));
      if (startBufferEvery == null) {
        dart.throw(new core.ArgumentError.notNull("startBufferEvery"));
      }
      if (dart.notNull(count) < 1) dart.throw(new core.ArgumentError.value(count, "count"));
      if (dart.notNull(startBufferEvery) < 0) {
        dart.throw(new core.ArgumentError.value(startBufferEvery, "startBufferEvery"));
      }
    }).prototype = BufferCountStreamTransformer.prototype;
    dart.addTypeTests(BufferCountStreamTransformer);
    BufferCountStreamTransformer.prototype[_is_BufferCountStreamTransformer_default] = true;
    dart.setLibraryUri(BufferCountStreamTransformer, "package:rxdart/src/transformers/backpressure/buffer.dart");
    return BufferCountStreamTransformer;
  });
  buffer.BufferCountStreamTransformer = buffer.BufferCountStreamTransformer$();
  dart.addTypeTests(buffer.BufferCountStreamTransformer, _is_BufferCountStreamTransformer_default);
  const _is_BufferTestStreamTransformer_default = Symbol('_is_BufferTestStreamTransformer_default');
  buffer.BufferTestStreamTransformer$ = dart.generic(T => {
    var ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    var ListOfTToListOfT = () => (ListOfTToListOfT = dart.constFn(dart.fnType(ListOfT(), [ListOfT()])))();
    var IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    var IterableOfTTobool = () => (IterableOfTTobool = dart.constFn(dart.fnType(core.bool, [IterableOfT()])))();
    class BufferTestStreamTransformer extends backpressure.BackpressureStreamTransformer$(T, core.List$(T)) {}
    (BufferTestStreamTransformer.new = function(test) {
      BufferTestStreamTransformer.__proto__.new.call(this, backpressure.WindowStrategy.onHandler, null, {onWindowEnd: dart.fn(queue => queue, ListOfTToListOfT()), closeWindowWhen: dart.fn(queue => test(queue[$last]), IterableOfTTobool())});
      if (test == null) dart.throw(new core.ArgumentError.notNull("test"));
    }).prototype = BufferTestStreamTransformer.prototype;
    dart.addTypeTests(BufferTestStreamTransformer);
    BufferTestStreamTransformer.prototype[_is_BufferTestStreamTransformer_default] = true;
    dart.setLibraryUri(BufferTestStreamTransformer, "package:rxdart/src/transformers/backpressure/buffer.dart");
    return BufferTestStreamTransformer;
  });
  buffer.BufferTestStreamTransformer = buffer.BufferTestStreamTransformer$();
  dart.addTypeTests(buffer.BufferTestStreamTransformer, _is_BufferTestStreamTransformer_default);
  buffer['BufferExtensions|buffer'] = function BufferExtensions$124buffer(T, $this, window) {
    return $this.transform(core.List$(T), new (buffer.BufferStreamTransformer$(T)).new(dart.fn(_ => window, dart.fnType(async.Stream, [T]))));
  };
  buffer['BufferExtensions|get#buffer'] = function BufferExtensions$124get$35buffer(T, $this) {
    return dart.fn(window => buffer['BufferExtensions|buffer'](T, $this, window), dart.fnType(async.Stream$(core.List$(T)), [async.Stream]));
  };
  buffer['BufferExtensions|bufferCount'] = function BufferExtensions$124bufferCount(T, $this, count, startBufferEvery = 0) {
    return $this.transform(core.List$(T), new (buffer.BufferCountStreamTransformer$(T)).new(count, startBufferEvery));
  };
  buffer['BufferExtensions|get#bufferCount'] = function BufferExtensions$124get$35bufferCount(T, $this) {
    return dart.fn((count, startBufferEvery = 0) => buffer['BufferExtensions|bufferCount'](T, $this, count, startBufferEvery), dart.fnType(async.Stream$(core.List$(T)), [core.int], [core.int]));
  };
  buffer['BufferExtensions|bufferTest'] = function BufferExtensions$124bufferTest(T, $this, onTestHandler) {
    return $this.transform(core.List$(T), new (buffer.BufferTestStreamTransformer$(T)).new(onTestHandler));
  };
  buffer['BufferExtensions|get#bufferTest'] = function BufferExtensions$124get$35bufferTest(T, $this) {
    return dart.fn(onTestHandler => buffer['BufferExtensions|bufferTest'](T, $this, onTestHandler), dart.fnType(async.Stream$(core.List$(T)), [dart.fnType(core.bool, [T])]));
  };
  buffer['BufferExtensions|bufferTime'] = function BufferExtensions$124bufferTime(T, $this, duration) {
    if (duration == null) dart.throw(new core.ArgumentError.notNull("duration"));
    return buffer['BufferExtensions|buffer'](T, $this, StreamOfvoid().periodic(duration));
  };
  buffer['BufferExtensions|get#bufferTime'] = function BufferExtensions$124get$35bufferTime(T, $this) {
    return dart.fn(duration => buffer['BufferExtensions|bufferTime'](T, $this, duration), dart.fnType(async.Stream$(core.List$(T)), [core.Duration]));
  };
  var _transformer$19 = dart.privateName(start_with, "_transformer");
  const _is_StartWithStreamTransformer_default = Symbol('_is_StartWithStreamTransformer_default');
  start_with.StartWithStreamTransformer$ = dart.generic(T => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class StartWithStreamTransformer extends async.StreamTransformerBase$(T, T) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$19].bind(stream);
      }
      static _buildTransformer(T, startValue) {
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              try {
                controller.add(startValue);
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                controller.addError(e, s);
              }
              subscription = input.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (StartWithStreamTransformer.new = function(startValue) {
      this[_transformer$19] = start_with.StartWithStreamTransformer._buildTransformer(T, startValue);
      StartWithStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = StartWithStreamTransformer.prototype;
    dart.addTypeTests(StartWithStreamTransformer);
    StartWithStreamTransformer.prototype[_is_StartWithStreamTransformer_default] = true;
    dart.setMethodSignature(StartWithStreamTransformer, () => ({
      __proto__: dart.getMethods(StartWithStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(StartWithStreamTransformer, "package:rxdart/src/transformers/start_with.dart");
    dart.setFieldSignature(StartWithStreamTransformer, () => ({
      __proto__: dart.getFields(StartWithStreamTransformer.__proto__),
      [_transformer$19]: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return StartWithStreamTransformer;
  });
  start_with.StartWithStreamTransformer = start_with.StartWithStreamTransformer$();
  dart.addTypeTests(start_with.StartWithStreamTransformer, _is_StartWithStreamTransformer_default);
  start_with['StartWithExtension|startWith'] = function StartWithExtension$124startWith(T, $this, startValue) {
    return $this.transform(T, new (start_with.StartWithStreamTransformer$(T)).new(startValue));
  };
  start_with['StartWithExtension|get#startWith'] = function StartWithExtension$124get$35startWith(T, $this) {
    return dart.fn(startValue => start_with['StartWithExtension|startWith'](T, $this, startValue), dart.fnType(async.Stream$(T), [T]));
  };
  var _transformer$20 = dart.privateName(map_to, "_transformer");
  const _is_MapToStreamTransformer_default = Symbol('_is_MapToStreamTransformer_default');
  map_to.MapToStreamTransformer$ = dart.generic((S, T) => {
    var StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    class MapToStreamTransformer extends async.StreamTransformerBase$(S, T) {
      bind(stream) {
        StreamOfS()._check(stream);
        return this[_transformer$20].bind(stream);
      }
      static _buildTransformer(S, T, value) {
        return new (async._StreamSubscriptionTransformer$(S, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(_ => controller.add(value), dart.fnType(dart.void, [S])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(S), core.bool])));
      }
    }
    (MapToStreamTransformer.new = function(value) {
      this[_transformer$20] = map_to.MapToStreamTransformer._buildTransformer(S, T, value);
      MapToStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = MapToStreamTransformer.prototype;
    dart.addTypeTests(MapToStreamTransformer);
    MapToStreamTransformer.prototype[_is_MapToStreamTransformer_default] = true;
    dart.setMethodSignature(MapToStreamTransformer, () => ({
      __proto__: dart.getMethods(MapToStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(MapToStreamTransformer, "package:rxdart/src/transformers/map_to.dart");
    dart.setFieldSignature(MapToStreamTransformer, () => ({
      __proto__: dart.getFields(MapToStreamTransformer.__proto__),
      [_transformer$20]: dart.finalFieldType(async.StreamTransformer$(S, T))
    }));
    return MapToStreamTransformer;
  });
  map_to.MapToStreamTransformer = map_to.MapToStreamTransformer$();
  dart.addTypeTests(map_to.MapToStreamTransformer, _is_MapToStreamTransformer_default);
  map_to['MapToExtension|mapTo'] = function MapToExtension$124mapTo(T, S, $this, value) {
    return $this.transform(S, new (map_to.MapToStreamTransformer$(T, S)).new(value));
  };
  map_to['MapToExtension|get#mapTo'] = function MapToExtension$124get$35mapTo(T, $this) {
    return dart.fn((S, value) => map_to['MapToExtension|mapTo'](T, S, $this, value), SToStreamOfS());
  };
  var _transformer$21 = dart.privateName($do, "_transformer");
  const _is_DoStreamTransformer_default = Symbol('_is_DoStreamTransformer_default');
  $do.DoStreamTransformer$ = dart.generic(T => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class DoStreamTransformer extends async.StreamTransformerBase$(T, T) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$21].bind(stream);
      }
      static _buildTransformer(T, opts) {
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let onData = opts && 'onData' in opts ? opts.onData : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let onEach = opts && 'onEach' in opts ? opts.onEach : null;
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onPause = opts && 'onPause' in opts ? opts.onPause : null;
        let onResume = opts && 'onResume' in opts ? opts.onResume : null;
        if (onCancel == null && onData == null && onDone == null && onEach == null && onError == null && onListen == null && onPause == null && onResume == null) {
          dart.throw(new core.ArgumentError.new("Must provide at least one handler"));
        }
        let subscriptions = new (LinkedMapOfStream$StreamSubscription()).new();
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let onListenLocal = dart.fn(() => {
            if (onListen != null) {
              try {
                onListen();
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                controller.addError(e, s);
              }
            }
            subscriptions[$putIfAbsent](input, dart.fn(() => input.listen(dart.fn(value => {
              if (onData != null) {
                try {
                  onData(value);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }
              if (onEach != null) {
                try {
                  onEach(notification.Notification$(T).onData(value));
                } catch (e$0) {
                  let e = dart.getThrown(e$0);
                  let s = dart.stackTrace(e$0);
                  controller.addError(e, s);
                }
              }
              controller.add(value);
            }, dart.fnType(core.Null, [T])), {onError: dart.fn((e, s) => {
                if (onError != null) {
                  try {
                    dart.dcall(onError, [e, s]);
                  } catch (e$) {
                    let e2 = dart.getThrown(e$);
                    let s2 = dart.stackTrace(e$);
                    controller.addError(e2, s2);
                  }
                }
                if (onEach != null) {
                  try {
                    onEach(notification.Notification$(T).onError(e, s));
                  } catch (e$0) {
                    let e = dart.getThrown(e$0);
                    let s = dart.stackTrace(e$0);
                    controller.addError(e, s);
                  }
                }
                controller.addError(e, s);
              }, dynamicAndStackTraceToNull()), onDone: dart.fn(() => {
                if (onDone != null) {
                  try {
                    onDone();
                  } catch (e$) {
                    let e = dart.getThrown(e$);
                    let s = dart.stackTrace(e$);
                    controller.addError(e, s);
                  }
                }
                if (onEach != null) {
                  try {
                    onEach(notification.Notification$(T).onDone());
                  } catch (e$0) {
                    let e = dart.getThrown(e$0);
                    let s = dart.stackTrace(e$0);
                    controller.addError(e, s);
                  }
                }
                controller.close();
              }, VoidToNull()), cancelOnError: cancelOnError}), dart.fnType(async.StreamSubscription$(T), [])));
          }, VoidToNull());
          let onCancelLocal = dart.fn(() => {
            let t131;
            let onCancelResult = null;
            if (onCancel != null) {
              try {
                onCancelResult = onCancel();
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                if (!dart.test(controller.isClosed)) {
                  controller.addError(e, s);
                } else {
                  async.Zone.current.handleUncaughtError(e, s);
                }
              }
            }
            let cancelResultFuture = async.Future.is(onCancelResult) ? onCancelResult : async.Future.value(onCancelResult);
            let cancelFuture = (t131 = subscriptions[$_get](input).cancel(), t131 == null ? async.Future.value() : t131);
            return async.Future.wait(dart.dynamic, JSArrayOfFuture().of([cancelFuture, cancelResultFuture])).whenComplete(dart.fn(() => subscriptions[$remove](input), VoidToStreamSubscription()));
          }, VoidToFutureOfList());
          if (dart.test(input.isBroadcast)) {
            controller = async.StreamController$(T).broadcast({sync: true, onListen: onListenLocal, onCancel: onCancelLocal});
          } else {
            controller = async.StreamController$(T).new({sync: true, onListen: onListenLocal, onCancel: onCancelLocal, onPause: dart.fn((resumeSignal = null) => {
                if (onPause != null) {
                  try {
                    onPause(resumeSignal);
                  } catch (e$) {
                    let e = dart.getThrown(e$);
                    let s = dart.stackTrace(e$);
                    controller.addError(e, s);
                  }
                }
                subscriptions[$_get](input).pause(resumeSignal);
              }, FutureToNull()), onResume: dart.fn(() => {
                if (onResume != null) {
                  try {
                    onResume();
                  } catch (e$) {
                    let e = dart.getThrown(e$);
                    let s = dart.stackTrace(e$);
                    controller.addError(e, s);
                  }
                }
                subscriptions[$_get](input).resume();
              }, VoidToNull())});
          }
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (DoStreamTransformer.new = function(opts) {
      let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
      let onData = opts && 'onData' in opts ? opts.onData : null;
      let onDone = opts && 'onDone' in opts ? opts.onDone : null;
      let onEach = opts && 'onEach' in opts ? opts.onEach : null;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let onListen = opts && 'onListen' in opts ? opts.onListen : null;
      let onPause = opts && 'onPause' in opts ? opts.onPause : null;
      let onResume = opts && 'onResume' in opts ? opts.onResume : null;
      this[_transformer$21] = $do.DoStreamTransformer._buildTransformer(T, {onCancel: onCancel, onData: onData, onDone: onDone, onEach: onEach, onError: onError, onListen: onListen, onPause: onPause, onResume: onResume});
      DoStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = DoStreamTransformer.prototype;
    dart.addTypeTests(DoStreamTransformer);
    DoStreamTransformer.prototype[_is_DoStreamTransformer_default] = true;
    dart.setMethodSignature(DoStreamTransformer, () => ({
      __proto__: dart.getMethods(DoStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(DoStreamTransformer, "package:rxdart/src/transformers/do.dart");
    dart.setFieldSignature(DoStreamTransformer, () => ({
      __proto__: dart.getFields(DoStreamTransformer.__proto__),
      [_transformer$21]: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return DoStreamTransformer;
  });
  $do.DoStreamTransformer = $do.DoStreamTransformer$();
  dart.addTypeTests($do.DoStreamTransformer, _is_DoStreamTransformer_default);
  $do['DoExtensions|doOnCancel'] = function DoExtensions$124doOnCancel(T, $this, onCancel) {
    return $this.transform(T, new ($do.DoStreamTransformer$(T)).new({onCancel: onCancel}));
  };
  $do['DoExtensions|get#doOnCancel'] = function DoExtensions$124get$35doOnCancel(T, $this) {
    return dart.fn(onCancel => $do['DoExtensions|doOnCancel'](T, $this, onCancel), dart.fnType(async.Stream$(T), [VoidTovoid()]));
  };
  $do['DoExtensions|doOnData'] = function DoExtensions$124doOnData(T, $this, onData) {
    return $this.transform(T, new ($do.DoStreamTransformer$(T)).new({onData: onData}));
  };
  $do['DoExtensions|get#doOnData'] = function DoExtensions$124get$35doOnData(T, $this) {
    return dart.fn(onData => $do['DoExtensions|doOnData'](T, $this, onData), dart.fnType(async.Stream$(T), [dart.fnType(dart.void, [T])]));
  };
  $do['DoExtensions|doOnDone'] = function DoExtensions$124doOnDone(T, $this, onDone) {
    return $this.transform(T, new ($do.DoStreamTransformer$(T)).new({onDone: onDone}));
  };
  $do['DoExtensions|get#doOnDone'] = function DoExtensions$124get$35doOnDone(T, $this) {
    return dart.fn(onDone => $do['DoExtensions|doOnDone'](T, $this, onDone), dart.fnType(async.Stream$(T), [VoidTovoid()]));
  };
  $do['DoExtensions|doOnEach'] = function DoExtensions$124doOnEach(T, $this, onEach) {
    return $this.transform(T, new ($do.DoStreamTransformer$(T)).new({onEach: onEach}));
  };
  $do['DoExtensions|get#doOnEach'] = function DoExtensions$124get$35doOnEach(T, $this) {
    return dart.fn(onEach => $do['DoExtensions|doOnEach'](T, $this, onEach), dart.fnType(async.Stream$(T), [dart.fnType(dart.void, [notification.Notification$(T)])]));
  };
  $do['DoExtensions|doOnError'] = function DoExtensions$124doOnError(T, $this, onError) {
    return $this.transform(T, new ($do.DoStreamTransformer$(T)).new({onError: onError}));
  };
  $do['DoExtensions|get#doOnError'] = function DoExtensions$124get$35doOnError(T, $this) {
    return dart.fn(onError => $do['DoExtensions|doOnError'](T, $this, onError), dart.fnType(async.Stream$(T), [core.Function]));
  };
  $do['DoExtensions|doOnListen'] = function DoExtensions$124doOnListen(T, $this, onListen) {
    return $this.transform(T, new ($do.DoStreamTransformer$(T)).new({onListen: onListen}));
  };
  $do['DoExtensions|get#doOnListen'] = function DoExtensions$124get$35doOnListen(T, $this) {
    return dart.fn(onListen => $do['DoExtensions|doOnListen'](T, $this, onListen), dart.fnType(async.Stream$(T), [VoidTovoid()]));
  };
  $do['DoExtensions|doOnPause'] = function DoExtensions$124doOnPause(T, $this, onPause) {
    return $this.transform(T, new ($do.DoStreamTransformer$(T)).new({onPause: onPause}));
  };
  $do['DoExtensions|get#doOnPause'] = function DoExtensions$124get$35doOnPause(T, $this) {
    return dart.fn(onPause => $do['DoExtensions|doOnPause'](T, $this, onPause), dart.fnType(async.Stream$(T), [FutureTovoid$()]));
  };
  $do['DoExtensions|doOnResume'] = function DoExtensions$124doOnResume(T, $this, onResume) {
    return $this.transform(T, new ($do.DoStreamTransformer$(T)).new({onResume: onResume}));
  };
  $do['DoExtensions|get#doOnResume'] = function DoExtensions$124get$35doOnResume(T, $this) {
    return dart.fn(onResume => $do['DoExtensions|doOnResume'](T, $this, onResume), dart.fnType(async.Stream$(T), [VoidTovoid()]));
  };
  min['MinExtension|min'] = function MinExtension$124min(T, $this, comparator = null) {
    return $this.toList().then(T, dart.fn(values => {
      let t150;
      return (t150 = values, t150[$sort](comparator), t150)[$first];
    }, dart.fnType(T, [core.List$(T)])));
  };
  min['MinExtension|get#min'] = function MinExtension$124get$35min(T, $this) {
    return dart.fn((comparator = null) => min['MinExtension|min'](T, $this, comparator), dart.fnType(async.Future$(T), [], [dart.fnType(core.int, [T, T])]));
  };
  var _transformer$22 = dart.privateName(ignore_elements, "_transformer");
  const _is_IgnoreElementsStreamTransformer_default = Symbol('_is_IgnoreElementsStreamTransformer_default');
  ignore_elements.IgnoreElementsStreamTransformer$ = dart.generic(T => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class IgnoreElementsStreamTransformer extends async.StreamTransformerBase$(T, T) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$22].bind(stream);
      }
      static _buildTransformer(T) {
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(null, {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => controller.close(), VoidToFuture()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (IgnoreElementsStreamTransformer.new = function() {
      this[_transformer$22] = ignore_elements.IgnoreElementsStreamTransformer._buildTransformer(T);
      IgnoreElementsStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = IgnoreElementsStreamTransformer.prototype;
    dart.addTypeTests(IgnoreElementsStreamTransformer);
    IgnoreElementsStreamTransformer.prototype[_is_IgnoreElementsStreamTransformer_default] = true;
    dart.setMethodSignature(IgnoreElementsStreamTransformer, () => ({
      __proto__: dart.getMethods(IgnoreElementsStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(IgnoreElementsStreamTransformer, "package:rxdart/src/transformers/ignore_elements.dart");
    dart.setFieldSignature(IgnoreElementsStreamTransformer, () => ({
      __proto__: dart.getFields(IgnoreElementsStreamTransformer.__proto__),
      [_transformer$22]: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return IgnoreElementsStreamTransformer;
  });
  ignore_elements.IgnoreElementsStreamTransformer = ignore_elements.IgnoreElementsStreamTransformer$();
  dart.addTypeTests(ignore_elements.IgnoreElementsStreamTransformer, _is_IgnoreElementsStreamTransformer_default);
  ignore_elements['IgnoreElementsExtension|ignoreElements'] = function IgnoreElementsExtension$124ignoreElements(T, $this) {
    return $this.transform(T, new (ignore_elements.IgnoreElementsStreamTransformer$(T)).new());
  };
  ignore_elements['IgnoreElementsExtension|get#ignoreElements'] = function IgnoreElementsExtension$124get$35ignoreElements(T, $this) {
    return dart.fn(() => ignore_elements['IgnoreElementsExtension|ignoreElements'](T, $this), dart.fnType(async.Stream$(T), []));
  };
  dart.trackLibraries("packages/rxdart/src/streams/never", {
    "package:rxdart/src/transformers/backpressure/window.dart": window$,
    "package:rxdart/src/transformers/backpressure/backpressure.dart": backpressure,
    "package:rxdart/src/transformers/scan.dart": scan,
    "package:rxdart/src/transformers/interval.dart": interval,
    "package:rxdart/src/streams/never.dart": never,
    "package:rxdart/src/transformers/where_type.dart": where_type,
    "package:rxdart/src/transformers/start_with_many.dart": start_with_many,
    "package:rxdart/src/transformers/switch_map.dart": switch_map,
    "package:rxdart/src/transformers/materialize.dart": materialize,
    "package:rxdart/src/utils/notification.dart": notification,
    "package:rxdart/src/streams/timer.dart": timer,
    "package:rxdart/src/transformers/backpressure/sample.dart": sample,
    "package:rxdart/src/transformers/max.dart": max,
    "package:rxdart/src/transformers/group_by.dart": group_by,
    "package:rxdart/src/transformers/take_until.dart": take_until,
    "package:rxdart/src/transformers/backpressure/throttle.dart": throttle,
    "package:rxdart/src/transformers/timestamp.dart": timestamp,
    "package:rxdart/src/transformers/switch_if_empty.dart": switch_if_empty,
    "package:rxdart/src/transformers/on_error_resume.dart": on_error_resume,
    "package:rxdart/src/transformers/with_latest_from.dart": with_latest_from,
    "package:rxdart/src/transformers/time_interval.dart": time_interval,
    "package:rxdart/src/transformers/skip_until.dart": skip_until,
    "package:rxdart/src/transformers/flat_map.dart": flat_map,
    "package:rxdart/src/transformers/dematerialize.dart": dematerialize,
    "package:rxdart/src/transformers/backpressure/pairwise.dart": pairwise,
    "package:rxdart/src/transformers/backpressure/debounce.dart": debounce,
    "package:rxdart/src/transformers/delay.dart": delay,
    "package:rxdart/src/transformers/default_if_empty.dart": default_if_empty,
    "package:rxdart/src/transformers/distinct_unique.dart": distinct_unique,
    "package:rxdart/src/transformers/exhaust_map.dart": exhaust_map,
    "package:rxdart/src/transformers/backpressure/buffer.dart": buffer,
    "package:rxdart/src/transformers/start_with.dart": start_with,
    "package:rxdart/src/transformers/map_to.dart": map_to,
    "package:rxdart/src/transformers/do.dart": $do,
    "package:rxdart/src/transformers/min.dart": min,
    "package:rxdart/src/transformers/ignore_elements.dart": ignore_elements
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../transformers/backpressure/backpressure.dart","../transformers/backpressure/window.dart","../transformers/scan.dart","../transformers/interval.dart","never.dart","../transformers/where_type.dart","../transformers/start_with_many.dart","../transformers/switch_map.dart","../utils/notification.dart","../transformers/materialize.dart","timer.dart","../transformers/backpressure/sample.dart","../transformers/max.dart","../transformers/group_by.dart","../transformers/take_until.dart","../transformers/backpressure/throttle.dart","../transformers/timestamp.dart","../transformers/switch_if_empty.dart","../transformers/on_error_resume.dart","../transformers/with_latest_from.dart","../transformers/time_interval.dart","../transformers/skip_until.dart","../transformers/flat_map.dart","../transformers/dematerialize.dart","../transformers/backpressure/pairwise.dart","../transformers/backpressure/debounce.dart","../transformers/delay.dart","../transformers/default_if_empty.dart","../transformers/distinct_unique.dart","../transformers/exhaust_map.dart","../transformers/backpressure/buffer.dart","../transformers/start_with.dart","../transformers/map_to.dart","../transformers/do.dart","../transformers/min.dart","../transformers/ignore_elements.dart"],"names":[],"mappings":"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","file":"never.ddc.js"}');
  // Exports:
  return {
    src__transformers__backpressure__window: window$,
    src__transformers__backpressure__backpressure: backpressure,
    src__transformers__scan: scan,
    src__transformers__interval: interval,
    src__streams__never: never,
    src__transformers__where_type: where_type,
    src__transformers__start_with_many: start_with_many,
    src__transformers__switch_map: switch_map,
    src__transformers__materialize: materialize,
    src__utils__notification: notification,
    src__streams__timer: timer,
    src__transformers__backpressure__sample: sample,
    src__transformers__max: max,
    src__transformers__group_by: group_by,
    src__transformers__take_until: take_until,
    src__transformers__backpressure__throttle: throttle,
    src__transformers__timestamp: timestamp,
    src__transformers__switch_if_empty: switch_if_empty,
    src__transformers__on_error_resume: on_error_resume,
    src__transformers__with_latest_from: with_latest_from,
    src__transformers__time_interval: time_interval,
    src__transformers__skip_until: skip_until,
    src__transformers__flat_map: flat_map,
    src__transformers__dematerialize: dematerialize,
    src__transformers__backpressure__pairwise: pairwise,
    src__transformers__backpressure__debounce: debounce,
    src__transformers__delay: delay,
    src__transformers__default_if_empty: default_if_empty,
    src__transformers__distinct_unique: distinct_unique,
    src__transformers__exhaust_map: exhaust_map,
    src__transformers__backpressure__buffer: buffer,
    src__transformers__start_with: start_with,
    src__transformers__map_to: map_to,
    src__transformers__do: $do,
    src__transformers__min: min,
    src__transformers__ignore_elements: ignore_elements
  };
});

//# sourceMappingURL=never.ddc.js.map
