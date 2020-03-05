define(['dart_sdk', 'packages/rxdart/src/streams/never'], function(dart_sdk, packages__rxdart__src__streams__never) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const notification = packages__rxdart__src__streams__never.src__utils__notification;
  const materialize = packages__rxdart__src__streams__never.src__transformers__materialize;
  const start_with_many = packages__rxdart__src__streams__never.src__transformers__start_with_many;
  const never = packages__rxdart__src__streams__never.src__streams__never;
  const timer = packages__rxdart__src__streams__never.src__streams__timer;
  const start_with = packages__rxdart__src__streams__never.src__transformers__start_with;
  var streams = Object.create(dart.library);
  var zip = Object.create(dart.library);
  var value_stream = Object.create(dart.library);
  var utils = Object.create(dart.library);
  var switch_latest = Object.create(dart.library);
  var sequence_equal = Object.create(dart.library);
  var retry_when = Object.create(dart.library);
  var retry = Object.create(dart.library);
  var replay_stream = Object.create(dart.library);
  var repeat = Object.create(dart.library);
  var range = Object.create(dart.library);
  var race = Object.create(dart.library);
  var merge = Object.create(dart.library);
  var fork_join = Object.create(dart.library);
  var defer = Object.create(dart.library);
  var connectable_stream = Object.create(dart.library);
  var rxdart = Object.create(dart.library);
  var subjects = Object.create(dart.library);
  var replay_subject = Object.create(dart.library);
  var subject = Object.create(dart.library);
  var rx = Object.create(dart.library);
  var publish_subject = Object.create(dart.library);
  var behavior_subject = Object.create(dart.library);
  var start_with_error = Object.create(dart.library);
  var composite_subscription = Object.create(dart.library);
  var concat_eager = Object.create(dart.library);
  var concat = Object.create(dart.library);
  var combine_latest = Object.create(dart.library);
  var $every = dartx.every;
  var $_get = dartx._get;
  var $length = dartx.length;
  var $toList = dartx.toList;
  var $remove = dartx.remove;
  var $map = dartx.map;
  var $forEach = dartx.forEach;
  var $where = dartx.where;
  var $_set = dartx._set;
  var $runtimeType = dartx.runtimeType;
  var $hashCode = dartx.hashCode;
  var $_equals = dartx._equals;
  var $toString = dartx.toString;
  var $add = dartx.add;
  var $abs = dartx.abs;
  var $isEmpty = dartx.isEmpty;
  var $removeAt = dartx.removeAt;
  var $any = dartx.any;
  var $elementAt = dartx.elementAt;
  var $isNotEmpty = dartx.isNotEmpty;
  var $clear = dartx.clear;
  var $first = dartx.first;
  var JSArrayOfStream = () => (JSArrayOfStream = dart.constFn(_interceptors.JSArray$(async.Stream)))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var FutureTovoid = () => (FutureTovoid = dart.constFn(dart.fnType(dart.void, [], [async.Future])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var FutureTobool = () => (FutureTobool = dart.constFn(dart.fnType(core.bool, [async.Future])))();
  var FutureOfList = () => (FutureOfList = dart.constFn(async.Future$(core.List)))();
  var VoidToFutureOfList = () => (VoidToFutureOfList = dart.constFn(dart.fnType(FutureOfList(), [])))();
  var FutureToNull = () => (FutureToNull = dart.constFn(dart.fnType(core.Null, [], [async.Future])))();
  var FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  var VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  var StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  var boolToStreamControllerOfbool = () => (boolToStreamControllerOfbool = dart.constFn(dart.fnType(StreamControllerOfbool(), [], [core.bool])))();
  var boolTobool = () => (boolTobool = dart.constFn(dart.fnType(core.bool, [core.bool])))();
  var VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  var JSArrayOfErrorAndStacktrace = () => (JSArrayOfErrorAndStacktrace = dart.constFn(_interceptors.JSArray$(utils.ErrorAndStacktrace)))();
  var voidToNull = () => (voidToNull = dart.constFn(dart.fnType(core.Null, [dart.void])))();
  var ObjectAndStackTraceToNull = () => (ObjectAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [core.Object], [core.StackTrace])))();
  var VoidToRetryError = () => (VoidToRetryError = dart.constFn(dart.fnType(utils.RetryError, [])))();
  var dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  var intToNull = () => (intToNull = dart.constFn(dart.fnType(core.Null, [], [core.int])))();
  var intToint = () => (intToint = dart.constFn(dart.fnType(core.int, [core.int])))();
  var StreamOfint = () => (StreamOfint = dart.constFn(async.Stream$(core.int)))();
  var ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  var intToNull$ = () => (intToNull$ = dart.constFn(dart.fnType(core.Null, [core.int])))();
  var dynamicToFuture = () => (dynamicToFuture = dart.constFn(dart.fnType(async.Future, [dart.dynamic])))();
  var JSArrayOfStreamSubscription = () => (JSArrayOfStreamSubscription = dart.constFn(_interceptors.JSArray$(async.StreamSubscription)))();
  var StreamSubscriptionToFuture = () => (StreamSubscriptionToFuture = dart.constFn(dart.fnType(async.Future, [async.StreamSubscription])))();
  var ListOfCompleter = () => (ListOfCompleter = dart.constFn(core.List$(async.Completer)))();
  var intToCompleter = () => (intToCompleter = dart.constFn(dart.fnType(async.Completer, [core.int])))();
  var intToFn = () => (intToFn = dart.constFn(dart.fnType(VoidToNull(), [core.int])))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var StreamSubscriptionTovoid = () => (StreamSubscriptionTovoid = dart.constFn(dart.fnType(dart.void, [async.StreamSubscription])))();
  const CT = Object.create(null);
  const _is_ZipStream_default = Symbol('_is_ZipStream_default');
  zip.ZipStream$ = dart.generic((T, R) => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    var StreamOfTTobool = () => (StreamOfTTobool = dart.constFn(dart.fnType(core.bool, [StreamOfT()])))();
    class ZipStream extends async.StreamView$(R) {
      static list(T, streams) {
        return new (zip.ZipStream$(T, core.List$(T))).new(streams, dart.fn(values => values, dart.fnType(core.List$(T), [core.List$(T)])));
      }
      static zip2(A, B, R, streamOne, streamTwo, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamOne, streamTwo]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1))), dart.fnType(R, [core.List])));
      }
      static zip3(A, B, C, R, streamA, streamB, streamC, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2))), dart.fnType(R, [core.List])));
      }
      static zip4(A, B, C, D, R, streamA, streamB, streamC, streamD, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3))), dart.fnType(R, [core.List])));
      }
      static zip5(A, B, C, D, E, R, streamA, streamB, streamC, streamD, streamE, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4))), dart.fnType(R, [core.List])));
      }
      static zip6(A, B, C, D, E, F, R, streamA, streamB, streamC, streamD, streamE, streamF, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5))), dart.fnType(R, [core.List])));
      }
      static zip7(A, B, C, D, E, F, G, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6))), dart.fnType(R, [core.List])));
      }
      static zip8(A, B, C, D, E, F, G, H, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7))), dart.fnType(R, [core.List])));
      }
      static zip9(A, B, C, D, E, F, G, H, I, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7)), I.as(values[$_get](8))), dart.fnType(R, [core.List])));
      }
      static _buildController(T, R, streams, zipper) {
        {
          let controller = null;
          let len = streams[$length];
          let subscriptions = null;
          let pendingSubscriptions = null;
          controller = async.StreamController$(R).new({sync: true, onListen: dart.fn(() => {
              try {
                let completeCurrent = null;
                let window = new (zip._Window$(T)).new(len);
                let index = 0;
                let next = dart.fn(() => {
                  let t0;
                  t0 = completeCurrent;
                  t0 == null ? null : t0.complete();
                  completeCurrent = async.Completer$(core.List$(T)).new();
                  pendingSubscriptions = subscriptions[$toList]();
                }, VoidToNull());
                let doUpdate = dart.fn(index => dart.fn(value => {
                  let t1;
                  window.onValue(index, value);
                  if (dart.test(window.isComplete)) {
                    try {
                      controller.add(zipper(window.flush()));
                      next();
                    } catch (e$) {
                      let e = dart.getThrown(e$);
                      let s = dart.stackTrace(e$);
                      controller.addError(e, s);
                    }
                  } else {
                    let subscription = (t1 = subscriptions[$_get](index), t1.pause(completeCurrent.future), t1);
                    pendingSubscriptions[$remove](subscription);
                  }
                }, dart.fnType(core.Null, [T])), dart.fnType(dart.fnType(core.Null, [T]), [core.int]));
                subscriptions = streams[$map](async.StreamSubscription$(T), dart.fn(stream => {
                  let t1;
                  return stream.listen(doUpdate((t1 = index, index = t1 + 1, t1)), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close')});
                }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T)])))[$toList]({growable: false});
                next();
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                controller.addError(e, s);
              }
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => pendingSubscriptions[$forEach](dart.fn(subscription => subscription.pause(resumeSignal), dart.fnType(dart.void, [async.StreamSubscription$(T)]))), FutureTovoid()), onResume: dart.fn(() => pendingSubscriptions[$forEach](dart.fn(subscription => subscription.resume(), dart.fnType(dart.void, [async.StreamSubscription$(T)]))), VoidTovoid()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, subscriptions[$map](async.Future, dart.fn(subscription => subscription.cancel(), dart.fnType(async.Future, [async.StreamSubscription$(T)])))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()))), VoidToFutureOfList())});
          return controller;
        }
      }
    }
    (ZipStream.new = function(streams, zipper) {
      if (!(streams != null && dart.test(streams[$every](dart.fn(s => s != null, StreamOfTTobool()))))) dart.assertFailed("streams cannot be null", "org-dartlang-app:///packages/rxdart/src/streams/zip.dart", 47, 16, "streams != null && streams.every((s) => s != null)");
      if (!(zipper != null)) dart.assertFailed("must provide a zipper function", "org-dartlang-app:///packages/rxdart/src/streams/zip.dart", 49, 16, "zipper != null");
      ZipStream.__proto__.new.call(this, zip.ZipStream._buildController(T, R, streams, zipper).stream);
      ;
    }).prototype = ZipStream.prototype;
    dart.addTypeTests(ZipStream);
    ZipStream.prototype[_is_ZipStream_default] = true;
    dart.setLibraryUri(ZipStream, "package:rxdart/src/streams/zip.dart");
    return ZipStream;
  });
  zip.ZipStream = zip.ZipStream$();
  dart.addTypeTests(zip.ZipStream, _is_ZipStream_default);
  var _valuesReceived = dart.privateName(zip, "_valuesReceived");
  var _values = dart.privateName(zip, "_values");
  const _is__Window_default = Symbol('_is__Window_default');
  zip._Window$ = dart.generic(T => {
    var ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    class _Window extends core.Object {
      get isComplete() {
        return this[_valuesReceived] == this.size;
      }
      onValue(index, value) {
        T._check(value);
        this[_values][$_set](index, value);
        this[_valuesReceived] = dart.notNull(this[_valuesReceived]) + 1;
      }
      flush() {
        this[_valuesReceived] = 0;
        return ListOfT().unmodifiable(this[_values]);
      }
    }
    (_Window.new = function(size) {
      this[_valuesReceived] = 0;
      this.size = size;
      this[_values] = ListOfT().new(size);
      ;
    }).prototype = _Window.prototype;
    dart.addTypeTests(_Window);
    _Window.prototype[_is__Window_default] = true;
    dart.setMethodSignature(_Window, () => ({
      __proto__: dart.getMethods(_Window.__proto__),
      onValue: dart.fnType(dart.void, [core.int, core.Object]),
      flush: dart.fnType(core.List$(T), [])
    }));
    dart.setGetterSignature(_Window, () => ({
      __proto__: dart.getGetters(_Window.__proto__),
      isComplete: core.bool
    }));
    dart.setLibraryUri(_Window, "package:rxdart/src/streams/zip.dart");
    dart.setFieldSignature(_Window, () => ({
      __proto__: dart.getFields(_Window.__proto__),
      size: dart.finalFieldType(core.int),
      [_values]: dart.finalFieldType(core.List$(T)),
      [_valuesReceived]: dart.fieldType(core.int)
    }));
    return _Window;
  });
  zip._Window = zip._Window$();
  dart.addTypeTests(zip._Window, _is__Window_default);
  zip['ZipWithExtension|zipWith'] = function ZipWithExtension$124zipWith(T, S, R, $this, other, zipper) {
    return $this.transform(R, new (async._StreamBindTransformer$(T, R)).new(dart.fn(stream => zip.ZipStream.zip2(T, S, R, stream, other, zipper), dart.fnType(zip.ZipStream$(dart.dynamic, R), [async.Stream$(T)]))));
  };
  zip['ZipWithExtension|get#zipWith'] = function ZipWithExtension$124get$35zipWith(T, $this) {
    return dart.fn((S, R, other, zipper) => zip['ZipWithExtension|zipWith'](T, S, R, $this, other, zipper), dart.gFnType((S, R) => {
      var StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
      var StreamOfR = () => (StreamOfR = dart.constFn(async.Stream$(R)))();
      return [StreamOfR(), [StreamOfS(), dart.fnType(R, [T, S])]];
    }));
  };
  const _is_ValueStream_default = Symbol('_is_ValueStream_default');
  value_stream.ValueStream$ = dart.generic(T => {
    class ValueStream extends core.Object {}
    (ValueStream.new = function() {
      ;
    }).prototype = ValueStream.prototype;
    ValueStream.prototype[dart.isStream] = true;
    dart.addTypeTests(ValueStream);
    ValueStream.prototype[_is_ValueStream_default] = true;
    ValueStream[dart.implements] = () => [async.Stream$(T)];
    dart.setLibraryUri(ValueStream, "package:rxdart/src/streams/value_stream.dart");
    return ValueStream;
  });
  value_stream.ValueStream = value_stream.ValueStream$();
  dart.addTypeTests(value_stream.ValueStream, _is_ValueStream_default);
  var message$ = dart.privateName(utils, "RetryError.message");
  var errors$ = dart.privateName(utils, "RetryError.errors");
  utils.RetryError = class RetryError extends core.Error {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get errors() {
      return this[errors$];
    }
    set errors(value) {
      super.errors = value;
    }
    static withCount(count, errors) {
      return new utils.RetryError.__("Received an error after attempting " + dart.str(count) + " retries", errors);
    }
    static onReviveFailed(errors) {
      return new utils.RetryError.__("Received an error after attempting to retry.", errors);
    }
    toString() {
      return this.message;
    }
  };
  (utils.RetryError.__ = function(message, errors) {
    this[message$] = message;
    this[errors$] = errors;
    utils.RetryError.__proto__.new.call(this);
    ;
  }).prototype = utils.RetryError.prototype;
  dart.addTypeTests(utils.RetryError);
  dart.setLibraryUri(utils.RetryError, "package:rxdart/src/streams/utils.dart");
  dart.setFieldSignature(utils.RetryError, () => ({
    __proto__: dart.getFields(utils.RetryError.__proto__),
    message: dart.finalFieldType(core.String),
    errors: dart.finalFieldType(core.List$(utils.ErrorAndStacktrace))
  }));
  dart.defineExtensionMethods(utils.RetryError, ['toString']);
  var error$ = dart.privateName(utils, "ErrorAndStacktrace.error");
  var stackTrace$ = dart.privateName(utils, "ErrorAndStacktrace.stackTrace");
  utils.ErrorAndStacktrace = class ErrorAndStacktrace extends core.Object {
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
    toString() {
      return "ErrorAndStacktrace{error: " + dart.str(this.error) + ", stacktrace: " + dart.str(this.stackTrace) + "}";
    }
    _equals(other) {
      if (other == null) return false;
      return this === other || utils.ErrorAndStacktrace.is(other) && dart.equals(this[$runtimeType], dart.runtimeType(other)) && dart.equals(this.error, other.error) && dart.equals(this.stackTrace, other.stackTrace);
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this.error)) ^ dart.notNull(dart.hashCode(this.stackTrace))) >>> 0;
    }
  };
  (utils.ErrorAndStacktrace.new = function(error, stackTrace) {
    this[error$] = error;
    this[stackTrace$] = stackTrace;
    ;
  }).prototype = utils.ErrorAndStacktrace.prototype;
  dart.addTypeTests(utils.ErrorAndStacktrace);
  dart.setMethodSignature(utils.ErrorAndStacktrace, () => ({
    __proto__: dart.getMethods(utils.ErrorAndStacktrace.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(utils.ErrorAndStacktrace, "package:rxdart/src/streams/utils.dart");
  dart.setFieldSignature(utils.ErrorAndStacktrace, () => ({
    __proto__: dart.getFields(utils.ErrorAndStacktrace.__proto__),
    error: dart.finalFieldType(dart.dynamic),
    stackTrace: dart.finalFieldType(core.StackTrace)
  }));
  dart.defineExtensionMethods(utils.ErrorAndStacktrace, ['toString', '_equals']);
  dart.defineExtensionAccessors(utils.ErrorAndStacktrace, ['hashCode']);
  var _controller = dart.privateName(switch_latest, "_controller");
  const _is_SwitchLatestStream_default = Symbol('_is_SwitchLatestStream_default');
  switch_latest.SwitchLatestStream$ = dart.generic(T => {
    class SwitchLatestStream extends async.Stream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_controller].stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(T, streams) {
        let controller = null;
        let subscription = null;
        let otherSubscription = null;
        let leftClosed = false;
        let rightClosed = false;
        let hasMainEvent = false;
        controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
            let closeLeft = dart.fn(() => {
              leftClosed = true;
              if (rightClosed || !hasMainEvent) controller.close();
            }, VoidToNull());
            let closeRight = dart.fn(() => {
              rightClosed = true;
              if (leftClosed) controller.close();
            }, VoidToNull());
            subscription = streams.listen(dart.fn(stream => {
              let t4;
              try {
                t4 = otherSubscription;
                t4 == null ? null : t4.cancel();
                hasMainEvent = true;
                otherSubscription = stream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: closeRight});
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                controller.addError(e, s);
              }
            }, dart.fnType(core.Null, [async.Stream$(T)])), {onError: dart.bind(controller, 'addError'), onDone: closeLeft});
          }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => {
            let t5;
            subscription.pause(resumeSignal);
            t5 = otherSubscription;
            t5 == null ? null : t5.pause(resumeSignal);
          }, FutureToNull()), onResume: dart.fn(() => {
            let t5;
            subscription.resume();
            t5 = otherSubscription;
            t5 == null ? null : t5.resume();
          }, VoidToNull()), onCancel: dart.fn(() => async.async(core.Null, function*() {
            yield subscription.cancel();
            if (hasMainEvent) yield otherSubscription.cancel();
          }), VoidToFutureOfNull())});
        return controller;
      }
    }
    (SwitchLatestStream.new = function(streams) {
      this[_controller] = switch_latest.SwitchLatestStream._buildController(T, streams);
      SwitchLatestStream.__proto__.new.call(this);
      ;
    }).prototype = SwitchLatestStream.prototype;
    dart.addTypeTests(SwitchLatestStream);
    SwitchLatestStream.prototype[_is_SwitchLatestStream_default] = true;
    dart.setMethodSignature(SwitchLatestStream, () => ({
      __proto__: dart.getMethods(SwitchLatestStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {})
    }));
    dart.setLibraryUri(SwitchLatestStream, "package:rxdart/src/streams/switch_latest.dart");
    dart.setFieldSignature(SwitchLatestStream, () => ({
      __proto__: dart.getFields(SwitchLatestStream.__proto__),
      [_controller]: dart.finalFieldType(async.StreamController$(T))
    }));
    return SwitchLatestStream;
  });
  switch_latest.SwitchLatestStream = switch_latest.SwitchLatestStream$();
  dart.addTypeTests(switch_latest.SwitchLatestStream, _is_SwitchLatestStream_default);
  var _controller$ = dart.privateName(sequence_equal, "_controller");
  const _is_SequenceEqualStream_default = Symbol('_is_SequenceEqualStream_default');
  sequence_equal.SequenceEqualStream$ = dart.generic((S, T) => {
    class SequenceEqualStream extends async.Stream$(core.bool) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_controller$].stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(S, T, stream, other, equals) {
        let t5;
        if (stream == null) {
          dart.throw(new core.ArgumentError.notNull("stream"));
        }
        if (other == null) {
          dart.throw(new core.ArgumentError.notNull("other"));
        }
        let doCompare = (t5 = equals, t5 == null ? dart.fn((s, t) => dart.equals(s, t), dart.fnType(core.bool, [S, T])) : t5);
        let controller = null;
        let subscription = null;
        controller = StreamControllerOfbool().new({sync: true, onListen: dart.fn(() => {
            let emitAndClose = dart.fn((value = true) => {
              let t5;
              t5 = controller;
              t5.add(value);
              t5.close();
              return t5;
            }, boolToStreamControllerOfbool());
            subscription = zip.ZipStream.zip2(notification.Notification$(S), notification.Notification$(T), core.bool, stream.transform(notification.Notification$(S), new (materialize.MaterializeStreamTransformer$(S)).new()), other.transform(notification.Notification$(T), new (materialize.MaterializeStreamTransformer$(T)).new()), dart.fn((s, t) => {
              let t5, t5$;
              return dart.equals(s.kind, t.kind) && (t5 = s.error, t5 == null ? null : dart.toString(t5)) == (t5$ = t.error, t5$ == null ? null : dart.toString(t5$)) && dart.test(doCompare(s.value, t.value));
            }, dart.fnType(core.bool, [notification.Notification$(S), notification.Notification$(T)]))).where(dart.fn(isEqual => !dart.test(isEqual), boolTobool())).listen(emitAndClose, {onError: dart.bind(controller, 'addError'), onDone: emitAndClose});
          }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
        return controller;
      }
    }
    (SequenceEqualStream.new = function(stream, other, opts) {
      let equals = opts && 'equals' in opts ? opts.equals : null;
      this[_controller$] = sequence_equal.SequenceEqualStream._buildController(S, T, stream, other, equals);
      SequenceEqualStream.__proto__.new.call(this);
      ;
    }).prototype = SequenceEqualStream.prototype;
    dart.addTypeTests(SequenceEqualStream);
    SequenceEqualStream.prototype[_is_SequenceEqualStream_default] = true;
    dart.setMethodSignature(SequenceEqualStream, () => ({
      __proto__: dart.getMethods(SequenceEqualStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(core.bool), [dart.fnType(dart.void, [core.bool])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {})
    }));
    dart.setLibraryUri(SequenceEqualStream, "package:rxdart/src/streams/sequence_equal.dart");
    dart.setFieldSignature(SequenceEqualStream, () => ({
      __proto__: dart.getFields(SequenceEqualStream.__proto__),
      [_controller$]: dart.finalFieldType(async.StreamController$(core.bool))
    }));
    return SequenceEqualStream;
  });
  sequence_equal.SequenceEqualStream = sequence_equal.SequenceEqualStream$();
  dart.addTypeTests(sequence_equal.SequenceEqualStream, _is_SequenceEqualStream_default);
  var _controller$0 = dart.privateName(retry_when, "_controller");
  var _subscription = dart.privateName(retry_when, "_subscription");
  var _errors = dart.privateName(retry_when, "_errors");
  var _retry = dart.privateName(retry_when, "_retry");
  const _is_RetryWhenStream_default = Symbol('_is_RetryWhenStream_default');
  var streamFactory$ = dart.privateName(retry_when, "RetryWhenStream.streamFactory");
  var retryWhenFactory$ = dart.privateName(retry_when, "RetryWhenStream.retryWhenFactory");
  retry_when.RetryWhenStream$ = dart.generic(T => {
    var StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class RetryWhenStream extends async.Stream$(T) {
      get streamFactory() {
        return this[streamFactory$];
      }
      set streamFactory(value) {
        super.streamFactory = value;
      }
      get retryWhenFactory() {
        return this[retryWhenFactory$];
      }
      set retryWhenFactory(value) {
        super.retryWhenFactory = value;
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        this[_controller$0] == null ? this[_controller$0] = StreamControllerOfT().new({sync: true, onListen: dart.bind(this, _retry), onPause: dart.fn((resumeSignal = null) => this[_subscription].pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => this[_subscription].resume(), VoidTovoid()), onCancel: dart.fn(() => this[_subscription].cancel(), VoidToFuture())}) : null;
        return this[_controller$0].stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      [_retry]() {
        this[_subscription] = this.streamFactory().listen(dart.bind(this[_controller$0], 'add'), {onError: dart.fn((e, s = null) => {
            this[_subscription].cancel();
            let sub = null;
            sub = this.retryWhenFactory(e, s).listen(dart.fn(event => {
              sub.cancel();
              this[_errors][$add](new utils.ErrorAndStacktrace.new(e, s));
              this[_retry]();
            }, voidToNull()), {onError: dart.fn((e, s = null) => {
                let t6, t5;
                sub.cancel();
                t5 = this[_controller$0];
                t5.addError(utils.RetryError.onReviveFailed((t6 = this[_errors], t6[$add](new utils.ErrorAndStacktrace.new(e, s)), t6)));
                t5.close();
                t5;
              }, ObjectAndStackTraceToNull())});
          }, ObjectAndStackTraceToNull()), onDone: dart.bind(this[_controller$0], 'close'), cancelOnError: false});
      }
    }
    (RetryWhenStream.new = function(streamFactory, retryWhenFactory) {
      this[_controller$0] = null;
      this[_subscription] = null;
      this[_errors] = JSArrayOfErrorAndStacktrace().of([]);
      this[streamFactory$] = streamFactory;
      this[retryWhenFactory$] = retryWhenFactory;
      RetryWhenStream.__proto__.new.call(this);
      ;
    }).prototype = RetryWhenStream.prototype;
    dart.addTypeTests(RetryWhenStream);
    RetryWhenStream.prototype[_is_RetryWhenStream_default] = true;
    dart.setMethodSignature(RetryWhenStream, () => ({
      __proto__: dart.getMethods(RetryWhenStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {}),
      [_retry]: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(RetryWhenStream, "package:rxdart/src/streams/retry_when.dart");
    dart.setFieldSignature(RetryWhenStream, () => ({
      __proto__: dart.getFields(RetryWhenStream.__proto__),
      streamFactory: dart.finalFieldType(dart.fnType(async.Stream$(T), [])),
      retryWhenFactory: dart.finalFieldType(dart.fnType(async.Stream$(dart.void), [dart.dynamic, core.StackTrace])),
      [_controller$0]: dart.fieldType(async.StreamController$(T)),
      [_subscription]: dart.fieldType(async.StreamSubscription$(T)),
      [_errors]: dart.finalFieldType(core.List$(utils.ErrorAndStacktrace))
    }));
    return RetryWhenStream;
  });
  retry_when.RetryWhenStream = retry_when.RetryWhenStream$();
  dart.addTypeTests(retry_when.RetryWhenStream, _is_RetryWhenStream_default);
  var _retryStep = dart.privateName(retry, "_retryStep");
  var _controller$1 = dart.privateName(retry, "_controller");
  var _subscription$ = dart.privateName(retry, "_subscription");
  var _errors$ = dart.privateName(retry, "_errors");
  const _is_RetryStream_default = Symbol('_is_RetryStream_default');
  var streamFactory$0 = dart.privateName(retry, "RetryStream.streamFactory");
  var count$ = dart.privateName(retry, "RetryStream.count");
  retry.RetryStream$ = dart.generic(T => {
    var StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class RetryStream extends async.Stream$(T) {
      get streamFactory() {
        return this[streamFactory$0];
      }
      set streamFactory(value) {
        super.streamFactory = value;
      }
      get count() {
        return this[count$];
      }
      set count(value) {
        this[count$] = value;
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        let retry = null;
        let combinedErrors = dart.fn(() => utils.RetryError.withCount(this.count, this[_errors$]), VoidToRetryError());
        retry = dart.fn((_ = null) => {
          this[_subscription$] = this.streamFactory().listen(dart.bind(this[_controller$1], 'add'), {onError: dart.fn((e, s) => {
              let t5;
              this[_subscription$].cancel();
              this[_errors$][$add](new utils.ErrorAndStacktrace.new(e, s));
              if (this.count == this[_retryStep]) {
                t5 = this[_controller$1];
                t5.addError(combinedErrors());
                t5.close();
                t5;
              } else {
                retry(this[_retryStep] = dart.notNull(this[_retryStep]) + 1);
              }
            }, dynamicAndStackTraceToNull()), onDone: dart.bind(this[_controller$1], 'close'), cancelOnError: false});
        }, intToNull());
        this[_controller$1] == null ? this[_controller$1] = StreamControllerOfT().new({sync: true, onListen: retry, onPause: dart.fn((resumeSignal = null) => this[_subscription$].pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => this[_subscription$].resume(), VoidTovoid()), onCancel: dart.fn(() => this[_subscription$].cancel(), VoidToFuture())}) : null;
        return this[_controller$1].stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
    }
    (RetryStream.new = function(streamFactory, count = null) {
      this[_retryStep] = 0;
      this[_controller$1] = null;
      this[_subscription$] = null;
      this[_errors$] = JSArrayOfErrorAndStacktrace().of([]);
      this[streamFactory$0] = streamFactory;
      this[count$] = count;
      RetryStream.__proto__.new.call(this);
      ;
    }).prototype = RetryStream.prototype;
    dart.addTypeTests(RetryStream);
    RetryStream.prototype[_is_RetryStream_default] = true;
    dart.setMethodSignature(RetryStream, () => ({
      __proto__: dart.getMethods(RetryStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {})
    }));
    dart.setLibraryUri(RetryStream, "package:rxdart/src/streams/retry.dart");
    dart.setFieldSignature(RetryStream, () => ({
      __proto__: dart.getFields(RetryStream.__proto__),
      streamFactory: dart.finalFieldType(dart.fnType(async.Stream$(T), [])),
      count: dart.fieldType(core.int),
      [_retryStep]: dart.fieldType(core.int),
      [_controller$1]: dart.fieldType(async.StreamController$(T)),
      [_subscription$]: dart.fieldType(async.StreamSubscription$(T)),
      [_errors$]: dart.finalFieldType(core.List$(utils.ErrorAndStacktrace))
    }));
    return RetryStream;
  });
  retry.RetryStream = retry.RetryStream$();
  dart.addTypeTests(retry.RetryStream, _is_RetryStream_default);
  const _is_ReplayStream_default = Symbol('_is_ReplayStream_default');
  replay_stream.ReplayStream$ = dart.generic(T => {
    class ReplayStream extends core.Object {}
    (ReplayStream.new = function() {
      ;
    }).prototype = ReplayStream.prototype;
    ReplayStream.prototype[dart.isStream] = true;
    dart.addTypeTests(ReplayStream);
    ReplayStream.prototype[_is_ReplayStream_default] = true;
    ReplayStream[dart.implements] = () => [async.Stream$(T)];
    dart.setLibraryUri(ReplayStream, "package:rxdart/src/streams/replay_stream.dart");
    return ReplayStream;
  });
  replay_stream.ReplayStream = replay_stream.ReplayStream$();
  dart.addTypeTests(replay_stream.ReplayStream, _is_ReplayStream_default);
  var _repeatStep = dart.privateName(repeat, "_repeatStep");
  var _controller$2 = dart.privateName(repeat, "_controller");
  var _subscription$0 = dart.privateName(repeat, "_subscription");
  var _maybeRepeatNext = dart.privateName(repeat, "_maybeRepeatNext");
  var _repeatNext = dart.privateName(repeat, "_repeatNext");
  const _is_RepeatStream_default = Symbol('_is_RepeatStream_default');
  var streamFactory$1 = dart.privateName(repeat, "RepeatStream.streamFactory");
  var count$0 = dart.privateName(repeat, "RepeatStream.count");
  repeat.RepeatStream$ = dart.generic(T => {
    var StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class RepeatStream extends async.Stream$(T) {
      get streamFactory() {
        return this[streamFactory$1];
      }
      set streamFactory(value) {
        super.streamFactory = value;
      }
      get count() {
        return this[count$0];
      }
      set count(value) {
        super.count = value;
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        this[_controller$2] == null ? this[_controller$2] = StreamControllerOfT().new({sync: true, onListen: dart.bind(this, _maybeRepeatNext), onPause: dart.fn((resumeSignal = null) => this[_subscription$0].pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => this[_subscription$0].resume(), VoidTovoid()), onCancel: dart.fn(() => {
            let t5;
            t5 = this[_subscription$0];
            return t5 == null ? null : t5.cancel();
          }, VoidToFuture())}) : null;
        return this[_controller$2].stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      [_repeatNext]() {
        let t5;
        const onDone = () => {
          let t5;
          t5 = this[_subscription$0];
          t5 == null ? null : t5.cancel();
          this[_maybeRepeatNext]();
        };
        dart.fn(onDone, VoidTovoid());
        try {
          this[_subscription$0] = this.streamFactory((t5 = this[_repeatStep], this[_repeatStep] = dart.notNull(t5) + 1, t5)).listen(dart.bind(this[_controller$2], 'add'), {onError: dart.bind(this[_controller$2], 'addError'), onDone: onDone, cancelOnError: false});
        } catch (e$) {
          let e = dart.getThrown(e$);
          let s = dart.stackTrace(e$);
          this[_controller$2].addError(e, s);
        }
      }
      [_maybeRepeatNext]() {
        if (this[_repeatStep] == this.count) {
          this[_controller$2].close();
        } else {
          this[_repeatNext]();
        }
      }
    }
    (RepeatStream.new = function(streamFactory, count = null) {
      this[_repeatStep] = 0;
      this[_controller$2] = null;
      this[_subscription$0] = null;
      this[streamFactory$1] = streamFactory;
      this[count$0] = count;
      RepeatStream.__proto__.new.call(this);
      ;
    }).prototype = RepeatStream.prototype;
    dart.addTypeTests(RepeatStream);
    RepeatStream.prototype[_is_RepeatStream_default] = true;
    dart.setMethodSignature(RepeatStream, () => ({
      __proto__: dart.getMethods(RepeatStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {}),
      [_repeatNext]: dart.fnType(dart.void, []),
      [_maybeRepeatNext]: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(RepeatStream, "package:rxdart/src/streams/repeat.dart");
    dart.setFieldSignature(RepeatStream, () => ({
      __proto__: dart.getFields(RepeatStream.__proto__),
      streamFactory: dart.finalFieldType(dart.fnType(async.Stream$(T), [core.int])),
      count: dart.finalFieldType(core.int),
      [_repeatStep]: dart.fieldType(core.int),
      [_controller$2]: dart.fieldType(async.StreamController$(T)),
      [_subscription$0]: dart.fieldType(async.StreamSubscription$(T))
    }));
    return RepeatStream;
  });
  repeat.RepeatStream = repeat.RepeatStream$();
  dart.addTypeTests(repeat.RepeatStream, _is_RepeatStream_default);
  var _stream = dart.privateName(range, "_stream");
  range.RangeStream = class RangeStream extends async.Stream$(core.int) {
    listen(onData, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let onDone = opts && 'onDone' in opts ? opts.onDone : null;
      let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
      return this[_stream].listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
    }
    static _buildStream(startInclusive, endInclusive) {
      let length = (dart.notNull(endInclusive) - dart.notNull(startInclusive))[$abs]() + 1;
      let nextValue = dart.fn(index => dart.notNull(startInclusive) > dart.notNull(endInclusive) ? dart.notNull(startInclusive) - dart.notNull(index) : dart.notNull(startInclusive) + dart.notNull(index), intToint());
      return StreamOfint().fromIterable(ListOfint().generate(length, nextValue));
    }
  };
  (range.RangeStream.new = function(startInclusive, endInclusive) {
    this[_stream] = range.RangeStream._buildStream(startInclusive, endInclusive);
    range.RangeStream.__proto__.new.call(this);
    ;
  }).prototype = range.RangeStream.prototype;
  dart.addTypeTests(range.RangeStream);
  dart.setMethodSignature(range.RangeStream, () => ({
    __proto__: dart.getMethods(range.RangeStream.__proto__),
    listen: dart.fnType(async.StreamSubscription$(core.int), [dart.fnType(dart.void, [core.int])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {})
  }));
  dart.setLibraryUri(range.RangeStream, "package:rxdart/src/streams/range.dart");
  dart.setFieldSignature(range.RangeStream, () => ({
    __proto__: dart.getFields(range.RangeStream.__proto__),
    [_stream]: dart.finalFieldType(async.Stream$(core.int))
  }));
  var _controller$3 = dart.privateName(race, "_controller");
  const _is_RaceStream_default = Symbol('_is_RaceStream_default');
  race.RaceStream$ = dart.generic(T => {
    class RaceStream extends async.Stream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_controller$3].stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(T, streams) {
        if (streams == null) {
          dart.throw(new core.ArgumentError.new("streams cannot be null"));
        } else if (dart.test(streams[$isEmpty])) {
          dart.throw(new core.ArgumentError.new("provide at least 1 stream"));
        }
        let subscriptions = null;
        let controller = null;
        controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
            let index = 0;
            let reduceToWinner = dart.fn(winnerIndex => {
              let winner = subscriptions[$removeAt](winnerIndex);
              subscriptions[$forEach](dart.fn(subscription => subscription.cancel(), dart.fnType(async.Future, [async.StreamSubscription$(T)])));
              subscriptions = _interceptors.JSArray$(async.StreamSubscription$(T)).of([winner]);
            }, intToNull$());
            let doUpdate = dart.fn(index => dart.fn(value => {
              try {
                if (dart.notNull(subscriptions[$length]) > 1) reduceToWinner(index);
                controller.add(value);
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                controller.addError(e, s);
              }
            }, dart.fnType(core.Null, [T])), dart.fnType(dart.fnType(core.Null, [T]), [core.int]));
            subscriptions = streams[$map](async.StreamSubscription$(T), dart.fn(stream => {
              let t7;
              return stream.listen(doUpdate((t7 = index, index = t7 + 1, t7)), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close')});
            }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T)])))[$toList]();
          }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscriptions[$forEach](dart.fn(subscription => subscription.pause(resumeSignal), dart.fnType(dart.void, [async.StreamSubscription$(T)]))), FutureTovoid()), onResume: dart.fn(() => subscriptions[$forEach](dart.fn(subscription => subscription.resume(), dart.fnType(dart.void, [async.StreamSubscription$(T)]))), VoidTovoid()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, subscriptions[$where](dart.fn(subscription => subscription != null, dart.fnType(core.bool, [async.StreamSubscription$(T)])))[$map](async.Future, dart.fn(subscription => subscription.cancel(), dart.fnType(async.Future, [async.StreamSubscription$(T)])))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()))), VoidToFutureOfList())});
        return controller;
      }
    }
    (RaceStream.new = function(streams) {
      this[_controller$3] = race.RaceStream._buildController(T, streams);
      RaceStream.__proto__.new.call(this);
      ;
    }).prototype = RaceStream.prototype;
    dart.addTypeTests(RaceStream);
    RaceStream.prototype[_is_RaceStream_default] = true;
    dart.setMethodSignature(RaceStream, () => ({
      __proto__: dart.getMethods(RaceStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {})
    }));
    dart.setLibraryUri(RaceStream, "package:rxdart/src/streams/race.dart");
    dart.setFieldSignature(RaceStream, () => ({
      __proto__: dart.getFields(RaceStream.__proto__),
      [_controller$3]: dart.finalFieldType(async.StreamController$(T))
    }));
    return RaceStream;
  });
  race.RaceStream = race.RaceStream$();
  dart.addTypeTests(race.RaceStream, _is_RaceStream_default);
  var _controller$4 = dart.privateName(merge, "_controller");
  const _is_MergeStream_default = Symbol('_is_MergeStream_default');
  merge.MergeStream$ = dart.generic(T => {
    class MergeStream extends async.Stream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_controller$4].stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(T, streams) {
        if (streams == null) {
          dart.throw(new core.ArgumentError.new("streams cannot be null"));
        } else if (dart.test(streams[$isEmpty])) {
          dart.throw(new core.ArgumentError.new("at least 1 stream needs to be provided"));
        } else if (dart.test(streams[$any](dart.fn(stream => stream == null, dart.fnType(core.bool, [async.Stream$(T)]))))) {
          dart.throw(new core.ArgumentError.new("One of the provided streams is null"));
        }
        let len = streams[$length];
        let subscriptions = core.List$(async.StreamSubscription$(T)).new(len);
        let controller = null;
        controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
            let completed = 0;
            let onDone = dart.fn(() => {
              completed = completed + 1;
              if (completed === len) controller.close();
            }, VoidToNull());
            for (let i = 0; i < dart.notNull(len); i = i + 1) {
              let stream = streams[$elementAt](i);
              subscriptions[$_set](i, stream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: onDone}));
            }
          }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscriptions[$forEach](dart.fn(subscription => subscription.pause(resumeSignal), dart.fnType(dart.void, [async.StreamSubscription$(T)]))), FutureTovoid()), onResume: dart.fn(() => subscriptions[$forEach](dart.fn(subscription => subscription.resume(), dart.fnType(dart.void, [async.StreamSubscription$(T)]))), VoidTovoid()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, subscriptions[$map](async.Future, dart.fn(subscription => subscription.cancel(), dart.fnType(async.Future, [async.StreamSubscription$(T)])))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()))), VoidToFutureOfList())});
        return controller;
      }
    }
    (MergeStream.new = function(streams) {
      this[_controller$4] = merge.MergeStream._buildController(T, streams);
      MergeStream.__proto__.new.call(this);
      ;
    }).prototype = MergeStream.prototype;
    dart.addTypeTests(MergeStream);
    MergeStream.prototype[_is_MergeStream_default] = true;
    dart.setMethodSignature(MergeStream, () => ({
      __proto__: dart.getMethods(MergeStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {})
    }));
    dart.setLibraryUri(MergeStream, "package:rxdart/src/streams/merge.dart");
    dart.setFieldSignature(MergeStream, () => ({
      __proto__: dart.getFields(MergeStream.__proto__),
      [_controller$4]: dart.finalFieldType(async.StreamController$(T))
    }));
    return MergeStream;
  });
  merge.MergeStream = merge.MergeStream$();
  dart.addTypeTests(merge.MergeStream, _is_MergeStream_default);
  merge['MergeExtension|mergeWith'] = function MergeExtension$124mergeWith(T, $this, streams) {
    return $this.transform(T, new (async._StreamBindTransformer$(T, T)).new(dart.fn(stream => new (merge.MergeStream$(T)).new((() => {
      let t8 = _interceptors.JSArray$(async.Stream$(T)).of([]);
      t8[$add](stream);
      for (let t9 of streams)
        t8[$add](t9);
      return t8;
    })()), dart.fnType(merge.MergeStream$(T), [async.Stream$(T)]))));
  };
  merge['MergeExtension|get#mergeWith'] = function MergeExtension$124get$35mergeWith(T, $this) {
    return dart.fn(streams => merge['MergeExtension|mergeWith'](T, $this, streams), dart.fnType(async.Stream$(T), [core.Iterable$(async.Stream$(T))]));
  };
  const _is_ForkJoinStream_default = Symbol('_is_ForkJoinStream_default');
  fork_join.ForkJoinStream$ = dart.generic((T, R) => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    var StreamOfTTobool = () => (StreamOfTTobool = dart.constFn(dart.fnType(core.bool, [StreamOfT()])))();
    class ForkJoinStream extends async.StreamView$(R) {
      static list(T, streams) {
        return new (fork_join.ForkJoinStream$(T, core.List$(T))).new(streams, dart.fn(values => values, dart.fnType(core.List$(T), [core.List$(T)])));
      }
      static combine2(A, B, R, streamOne, streamTwo, combiner) {
        return new (fork_join.ForkJoinStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamOne, streamTwo]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1))), dart.fnType(R, [core.List])));
      }
      static combine3(A, B, C, R, streamA, streamB, streamC, combiner) {
        return new (fork_join.ForkJoinStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2))), dart.fnType(R, [core.List])));
      }
      static combine4(A, B, C, D, R, streamA, streamB, streamC, streamD, combiner) {
        return new (fork_join.ForkJoinStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3))), dart.fnType(R, [core.List])));
      }
      static combine5(A, B, C, D, E, R, streamA, streamB, streamC, streamD, streamE, combiner) {
        return new (fork_join.ForkJoinStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4))), dart.fnType(R, [core.List])));
      }
      static combine6(A, B, C, D, E, F, R, streamA, streamB, streamC, streamD, streamE, streamF, combiner) {
        return new (fork_join.ForkJoinStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5))), dart.fnType(R, [core.List])));
      }
      static combine7(A, B, C, D, E, F, G, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, combiner) {
        return new (fork_join.ForkJoinStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6))), dart.fnType(R, [core.List])));
      }
      static combine8(A, B, C, D, E, F, G, H, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, combiner) {
        return new (fork_join.ForkJoinStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7))), dart.fnType(R, [core.List])));
      }
      static combine9(A, B, C, D, E, F, G, H, I, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, combiner) {
        return new (fork_join.ForkJoinStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7)), I.as(values[$_get](8))), dart.fnType(R, [core.List])));
      }
      static _buildController(T, R, streams, combiner) {
        let controller = null;
        controller = async.StreamController$(R).new({sync: true, onListen: dart.fn(() => {
            let onDone = dart.fn(values => {
              try {
                controller.add(combiner(values));
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                controller.addError(e, s);
              }
              controller.close();
            }, dart.fnType(core.Null, [core.List$(T)]));
            async.Future.wait(T, streams[$map](async.Future$(T), dart.fn(stream => stream.last, dart.fnType(async.Future$(T), [async.Stream$(T)]))), {eagerError: true, cleanUp: dart.fn(_ => controller.close(), dynamicToFuture())}).then(core.Null, onDone, {onError: dart.bind(controller, 'addError')});
          }, VoidToNull())});
        return controller;
      }
    }
    (ForkJoinStream.new = function(streams, combiner) {
      if (!(streams != null && dart.test(streams[$every](dart.fn(s => s != null, StreamOfTTobool()))))) dart.assertFailed("streams cannot be null", "org-dartlang-app:///packages/rxdart/src/streams/fork_join.dart", 68, 16, "streams != null && streams.every((s) => s != null)");
      if (!dart.test(streams[$isNotEmpty])) dart.assertFailed("provide at least 1 stream", "org-dartlang-app:///packages/rxdart/src/streams/fork_join.dart", 70, 16, "streams.isNotEmpty");
      if (!(combiner != null)) dart.assertFailed("must provide a combiner function", "org-dartlang-app:///packages/rxdart/src/streams/fork_join.dart", 71, 16, "combiner != null");
      ForkJoinStream.__proto__.new.call(this, fork_join.ForkJoinStream._buildController(T, R, streams, combiner).stream);
      ;
    }).prototype = ForkJoinStream.prototype;
    dart.addTypeTests(ForkJoinStream);
    ForkJoinStream.prototype[_is_ForkJoinStream_default] = true;
    dart.setLibraryUri(ForkJoinStream, "package:rxdart/src/streams/fork_join.dart");
    return ForkJoinStream;
  });
  fork_join.ForkJoinStream = fork_join.ForkJoinStream$();
  dart.addTypeTests(fork_join.ForkJoinStream, _is_ForkJoinStream_default);
  var _isReusable = dart.privateName(defer, "_isReusable");
  var _factory = dart.privateName(defer, "_factory");
  const _is_DeferStream_default = Symbol('_is_DeferStream_default');
  defer.DeferStream$ = dart.generic(T => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    var VoidToStreamOfT = () => (VoidToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [])))();
    var VoidToFn = () => (VoidToFn = dart.constFn(dart.fnType(VoidToStreamOfT(), [])))();
    class DeferStream extends async.Stream$(T) {
      get isBroadcast() {
        return this[_isReusable];
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_factory]().listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
    }
    (DeferStream.new = function(streamFactory, opts) {
      let reusable = opts && 'reusable' in opts ? opts.reusable : false;
      this[_isReusable] = reusable;
      this[_factory] = dart.test(reusable) ? streamFactory : dart.fn(() => {
        let stream = null;
        return dart.fn(() => {
          let t12;
          t12 = stream;
          return t12 == null ? stream = streamFactory() : t12;
        }, VoidToStreamOfT());
      }, VoidToFn())();
      DeferStream.__proto__.new.call(this);
      ;
    }).prototype = DeferStream.prototype;
    dart.addTypeTests(DeferStream);
    DeferStream.prototype[_is_DeferStream_default] = true;
    dart.setMethodSignature(DeferStream, () => ({
      __proto__: dart.getMethods(DeferStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {})
    }));
    dart.setLibraryUri(DeferStream, "package:rxdart/src/streams/defer.dart");
    dart.setFieldSignature(DeferStream, () => ({
      __proto__: dart.getFields(DeferStream.__proto__),
      [_factory]: dart.finalFieldType(dart.fnType(async.Stream$(T), [])),
      [_isReusable]: dart.finalFieldType(core.bool)
    }));
    return DeferStream;
  });
  defer.DeferStream = defer.DeferStream$();
  dart.addTypeTests(defer.DeferStream, _is_DeferStream_default);
  const _is_ConnectableStream_default = Symbol('_is_ConnectableStream_default');
  connectable_stream.ConnectableStream$ = dart.generic(T => {
    class ConnectableStream extends async.StreamView$(T) {}
    (ConnectableStream.new = function(stream) {
      ConnectableStream.__proto__.new.call(this, stream);
      ;
    }).prototype = ConnectableStream.prototype;
    dart.addTypeTests(ConnectableStream);
    ConnectableStream.prototype[_is_ConnectableStream_default] = true;
    dart.setLibraryUri(ConnectableStream, "package:rxdart/src/streams/connectable_stream.dart");
    return ConnectableStream;
  });
  connectable_stream.ConnectableStream = connectable_stream.ConnectableStream$();
  dart.addTypeTests(connectable_stream.ConnectableStream, _is_ConnectableStream_default);
  var _source$ = dart.privateName(connectable_stream, "_source");
  var _subject$ = dart.privateName(connectable_stream, "_subject");
  const _is_PublishConnectableStream_default = Symbol('_is_PublishConnectableStream_default');
  connectable_stream.PublishConnectableStream$ = dart.generic(T => {
    var ConnectableStreamSubscriptionOfT = () => (ConnectableStreamSubscriptionOfT = dart.constFn(connectable_stream.ConnectableStreamSubscription$(T)))();
    class PublishConnectableStream extends connectable_stream.ConnectableStream$(T) {
      static new(source) {
        return new (connectable_stream.PublishConnectableStream$(T)).__(source, publish_subject.PublishSubject$(T).new());
      }
      autoConnect(opts) {
        let connection = opts && 'connection' in opts ? opts.connection : null;
        this[_subject$].onListen = dart.fn(() => {
          if (connection != null) {
            connection(this.connect());
          } else {
            this.connect();
          }
        }, VoidToNull());
        return this[_subject$];
      }
      connect() {
        return new (ConnectableStreamSubscriptionOfT()).new(this[_source$].listen(dart.bind(this[_subject$], 'add'), {onError: dart.bind(this[_subject$], 'addError')}), this[_subject$]);
      }
      refCount() {
        let subscription = null;
        this[_subject$].onListen = dart.fn(() => {
          subscription = new (ConnectableStreamSubscriptionOfT()).new(this[_source$].listen(dart.bind(this[_subject$], 'add'), {onError: dart.bind(this[_subject$], 'addError')}), this[_subject$]);
        }, VoidToNull());
        this[_subject$].onCancel = dart.fn(() => {
          subscription.cancel();
        }, VoidToNull());
        return this[_subject$];
      }
    }
    (PublishConnectableStream.__ = function(_source, _subject) {
      this[_source$] = _source;
      this[_subject$] = _subject;
      PublishConnectableStream.__proto__.new.call(this, _subject);
      ;
    }).prototype = PublishConnectableStream.prototype;
    dart.addTypeTests(PublishConnectableStream);
    PublishConnectableStream.prototype[_is_PublishConnectableStream_default] = true;
    dart.setMethodSignature(PublishConnectableStream, () => ({
      __proto__: dart.getMethods(PublishConnectableStream.__proto__),
      autoConnect: dart.fnType(async.Stream$(T), [], {connection: dart.fnType(dart.void, [async.StreamSubscription$(T)])}, {}),
      connect: dart.fnType(async.StreamSubscription$(T), []),
      refCount: dart.fnType(async.Stream$(T), [])
    }));
    dart.setLibraryUri(PublishConnectableStream, "package:rxdart/src/streams/connectable_stream.dart");
    dart.setFieldSignature(PublishConnectableStream, () => ({
      __proto__: dart.getFields(PublishConnectableStream.__proto__),
      [_source$]: dart.finalFieldType(async.Stream$(T)),
      [_subject$]: dart.finalFieldType(publish_subject.PublishSubject$(T))
    }));
    return PublishConnectableStream;
  });
  connectable_stream.PublishConnectableStream = connectable_stream.PublishConnectableStream$();
  dart.addTypeTests(connectable_stream.PublishConnectableStream, _is_PublishConnectableStream_default);
  const _is_ValueConnectableStream_default = Symbol('_is_ValueConnectableStream_default');
  connectable_stream.ValueConnectableStream$ = dart.generic(T => {
    var ConnectableStreamSubscriptionOfT = () => (ConnectableStreamSubscriptionOfT = dart.constFn(connectable_stream.ConnectableStreamSubscription$(T)))();
    class ValueConnectableStream extends connectable_stream.ConnectableStream$(T) {
      static new(source) {
        return new (connectable_stream.ValueConnectableStream$(T)).__(source, behavior_subject.BehaviorSubject$(T).new());
      }
      static seeded(source, seedValue) {
        return new (connectable_stream.ValueConnectableStream$(T)).__(source, behavior_subject.BehaviorSubject$(T).seeded(seedValue));
      }
      autoConnect(opts) {
        let connection = opts && 'connection' in opts ? opts.connection : null;
        this[_subject$].onListen = dart.fn(() => {
          if (connection != null) {
            connection(this.connect());
          } else {
            this.connect();
          }
        }, VoidToNull());
        return this[_subject$];
      }
      connect() {
        return new (ConnectableStreamSubscriptionOfT()).new(this[_source$].listen(dart.bind(this[_subject$], 'add'), {onError: dart.bind(this[_subject$], 'addError')}), this[_subject$]);
      }
      refCount() {
        let subscription = null;
        this[_subject$].onListen = dart.fn(() => {
          subscription = new (ConnectableStreamSubscriptionOfT()).new(this[_source$].listen(dart.bind(this[_subject$], 'add'), {onError: dart.bind(this[_subject$], 'addError')}), this[_subject$]);
        }, VoidToNull());
        this[_subject$].onCancel = dart.fn(() => {
          subscription.cancel();
        }, VoidToNull());
        return this[_subject$];
      }
      get value() {
        return this[_subject$].value;
      }
      get hasValue() {
        return this[_subject$].hasValue;
      }
    }
    (ValueConnectableStream.__ = function(_source, _subject) {
      this[_source$] = _source;
      this[_subject$] = _subject;
      ValueConnectableStream.__proto__.new.call(this, _subject);
      ;
    }).prototype = ValueConnectableStream.prototype;
    dart.addTypeTests(ValueConnectableStream);
    ValueConnectableStream.prototype[_is_ValueConnectableStream_default] = true;
    ValueConnectableStream[dart.implements] = () => [value_stream.ValueStream$(T)];
    dart.setMethodSignature(ValueConnectableStream, () => ({
      __proto__: dart.getMethods(ValueConnectableStream.__proto__),
      autoConnect: dart.fnType(value_stream.ValueStream$(T), [], {connection: dart.fnType(dart.void, [async.StreamSubscription$(T)])}, {}),
      connect: dart.fnType(async.StreamSubscription$(T), []),
      refCount: dart.fnType(value_stream.ValueStream$(T), [])
    }));
    dart.setGetterSignature(ValueConnectableStream, () => ({
      __proto__: dart.getGetters(ValueConnectableStream.__proto__),
      value: T,
      hasValue: core.bool
    }));
    dart.setLibraryUri(ValueConnectableStream, "package:rxdart/src/streams/connectable_stream.dart");
    dart.setFieldSignature(ValueConnectableStream, () => ({
      __proto__: dart.getFields(ValueConnectableStream.__proto__),
      [_source$]: dart.finalFieldType(async.Stream$(T)),
      [_subject$]: dart.finalFieldType(behavior_subject.BehaviorSubject$(T))
    }));
    return ValueConnectableStream;
  });
  connectable_stream.ValueConnectableStream = connectable_stream.ValueConnectableStream$();
  dart.addTypeTests(connectable_stream.ValueConnectableStream, _is_ValueConnectableStream_default);
  const _is_ReplayConnectableStream_default = Symbol('_is_ReplayConnectableStream_default');
  connectable_stream.ReplayConnectableStream$ = dart.generic(T => {
    var ConnectableStreamSubscriptionOfT = () => (ConnectableStreamSubscriptionOfT = dart.constFn(connectable_stream.ConnectableStreamSubscription$(T)))();
    class ReplayConnectableStream extends connectable_stream.ConnectableStream$(T) {
      static new(stream, opts) {
        let maxSize = opts && 'maxSize' in opts ? opts.maxSize : null;
        return new (connectable_stream.ReplayConnectableStream$(T)).__(stream, replay_subject.ReplaySubject$(T).new({maxSize: maxSize}));
      }
      autoConnect(opts) {
        let connection = opts && 'connection' in opts ? opts.connection : null;
        this[_subject$].onListen = dart.fn(() => {
          if (connection != null) {
            connection(this.connect());
          } else {
            this.connect();
          }
        }, VoidToNull());
        return this[_subject$];
      }
      connect() {
        return new (ConnectableStreamSubscriptionOfT()).new(this[_source$].listen(dart.bind(this[_subject$], 'add'), {onError: dart.bind(this[_subject$], 'addError')}), this[_subject$]);
      }
      refCount() {
        let subscription = null;
        this[_subject$].onListen = dart.fn(() => {
          subscription = new (ConnectableStreamSubscriptionOfT()).new(this[_source$].listen(dart.bind(this[_subject$], 'add'), {onError: dart.bind(this[_subject$], 'addError')}), this[_subject$]);
        }, VoidToNull());
        this[_subject$].onCancel = dart.fn(() => {
          subscription.cancel();
        }, VoidToNull());
        return this[_subject$];
      }
      get values() {
        return this[_subject$].values;
      }
    }
    (ReplayConnectableStream.__ = function(_source, _subject) {
      this[_source$] = _source;
      this[_subject$] = _subject;
      ReplayConnectableStream.__proto__.new.call(this, _subject);
      ;
    }).prototype = ReplayConnectableStream.prototype;
    dart.addTypeTests(ReplayConnectableStream);
    ReplayConnectableStream.prototype[_is_ReplayConnectableStream_default] = true;
    ReplayConnectableStream[dart.implements] = () => [replay_stream.ReplayStream$(T)];
    dart.setMethodSignature(ReplayConnectableStream, () => ({
      __proto__: dart.getMethods(ReplayConnectableStream.__proto__),
      autoConnect: dart.fnType(replay_stream.ReplayStream$(T), [], {connection: dart.fnType(dart.void, [async.StreamSubscription$(T)])}, {}),
      connect: dart.fnType(async.StreamSubscription$(T), []),
      refCount: dart.fnType(replay_stream.ReplayStream$(T), [])
    }));
    dart.setGetterSignature(ReplayConnectableStream, () => ({
      __proto__: dart.getGetters(ReplayConnectableStream.__proto__),
      values: core.List$(T)
    }));
    dart.setLibraryUri(ReplayConnectableStream, "package:rxdart/src/streams/connectable_stream.dart");
    dart.setFieldSignature(ReplayConnectableStream, () => ({
      __proto__: dart.getFields(ReplayConnectableStream.__proto__),
      [_source$]: dart.finalFieldType(async.Stream$(T)),
      [_subject$]: dart.finalFieldType(replay_subject.ReplaySubject$(T))
    }));
    return ReplayConnectableStream;
  });
  connectable_stream.ReplayConnectableStream = connectable_stream.ReplayConnectableStream$();
  dart.addTypeTests(connectable_stream.ReplayConnectableStream, _is_ReplayConnectableStream_default);
  const _is_ConnectableStreamSubscription_default = Symbol('_is_ConnectableStreamSubscription_default');
  connectable_stream.ConnectableStreamSubscription$ = dart.generic(T => {
    class ConnectableStreamSubscription extends async.StreamSubscription$(T) {
      cancel() {
        this[_subject$].close();
        return this[_source$].cancel();
      }
      asFuture(E, futureValue = null) {
        return this[_source$].asFuture(E, futureValue);
      }
      get isPaused() {
        return this[_source$].isPaused;
      }
      onData(handleData) {
        return this[_source$].onData(handleData);
      }
      onDone(handleDone) {
        return this[_source$].onDone(handleDone);
      }
      onError(handleError) {
        return this[_source$].onError(handleError);
      }
      pause(resumeSignal = null) {
        return this[_source$].pause(resumeSignal);
      }
      resume() {
        return this[_source$].resume();
      }
    }
    (ConnectableStreamSubscription.new = function(_source, _subject) {
      this[_source$] = _source;
      this[_subject$] = _subject;
      ;
    }).prototype = ConnectableStreamSubscription.prototype;
    dart.addTypeTests(ConnectableStreamSubscription);
    ConnectableStreamSubscription.prototype[_is_ConnectableStreamSubscription_default] = true;
    dart.setMethodSignature(ConnectableStreamSubscription, () => ({
      __proto__: dart.getMethods(ConnectableStreamSubscription.__proto__),
      cancel: dart.fnType(async.Future, []),
      asFuture: dart.gFnType(E => [async.Future$(E), [], [E]]),
      onData: dart.fnType(dart.void, [dart.fnType(dart.void, [T])]),
      onDone: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      onError: dart.fnType(dart.void, [core.Function]),
      pause: dart.fnType(dart.void, [], [async.Future]),
      resume: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(ConnectableStreamSubscription, () => ({
      __proto__: dart.getGetters(ConnectableStreamSubscription.__proto__),
      isPaused: core.bool
    }));
    dart.setLibraryUri(ConnectableStreamSubscription, "package:rxdart/src/streams/connectable_stream.dart");
    dart.setFieldSignature(ConnectableStreamSubscription, () => ({
      __proto__: dart.getFields(ConnectableStreamSubscription.__proto__),
      [_source$]: dart.finalFieldType(async.StreamSubscription$(T)),
      [_subject$]: dart.finalFieldType(subject.Subject$(T))
    }));
    return ConnectableStreamSubscription;
  });
  connectable_stream.ConnectableStreamSubscription = connectable_stream.ConnectableStreamSubscription$();
  dart.addTypeTests(connectable_stream.ConnectableStreamSubscription, _is_ConnectableStreamSubscription_default);
  connectable_stream['ConnectableStreamExtensions|publish'] = function ConnectableStreamExtensions$124publish(T, $this) {
    return connectable_stream.PublishConnectableStream$(T).new($this);
  };
  connectable_stream['ConnectableStreamExtensions|get#publish'] = function ConnectableStreamExtensions$124get$35publish(T, $this) {
    return dart.fn(() => connectable_stream['ConnectableStreamExtensions|publish'](T, $this), dart.fnType(connectable_stream.ConnectableStream$(T), []));
  };
  connectable_stream['ConnectableStreamExtensions|publishValue'] = function ConnectableStreamExtensions$124publishValue(T, $this) {
    return connectable_stream.ValueConnectableStream$(T).new($this);
  };
  connectable_stream['ConnectableStreamExtensions|get#publishValue'] = function ConnectableStreamExtensions$124get$35publishValue(T, $this) {
    return dart.fn(() => connectable_stream['ConnectableStreamExtensions|publishValue'](T, $this), dart.fnType(connectable_stream.ValueConnectableStream$(T), []));
  };
  connectable_stream['ConnectableStreamExtensions|publishValueSeeded'] = function ConnectableStreamExtensions$124publishValueSeeded(T, $this, seedValue) {
    return connectable_stream.ValueConnectableStream$(T).seeded($this, seedValue);
  };
  connectable_stream['ConnectableStreamExtensions|get#publishValueSeeded'] = function ConnectableStreamExtensions$124get$35publishValueSeeded(T, $this) {
    return dart.fn(seedValue => connectable_stream['ConnectableStreamExtensions|publishValueSeeded'](T, $this, seedValue), dart.fnType(connectable_stream.ValueConnectableStream$(T), [T]));
  };
  connectable_stream['ConnectableStreamExtensions|publishReplay'] = function ConnectableStreamExtensions$124publishReplay(T, $this, opts) {
    let maxSize = opts && 'maxSize' in opts ? opts.maxSize : null;
    return connectable_stream.ReplayConnectableStream$(T).new($this, {maxSize: maxSize});
  };
  connectable_stream['ConnectableStreamExtensions|get#publishReplay'] = function ConnectableStreamExtensions$124get$35publishReplay(T, $this) {
    return dart.fn(opts => {
      let maxSize = opts && 'maxSize' in opts ? opts.maxSize : null;
      return connectable_stream['ConnectableStreamExtensions|publishReplay'](T, $this, {maxSize: maxSize});
    }, dart.fnType(connectable_stream.ReplayConnectableStream$(T), [], {maxSize: core.int}, {}));
  };
  connectable_stream['ConnectableStreamExtensions|share'] = function ConnectableStreamExtensions$124share(T, $this) {
    return connectable_stream['ConnectableStreamExtensions|publish'](T, $this).refCount();
  };
  connectable_stream['ConnectableStreamExtensions|get#share'] = function ConnectableStreamExtensions$124get$35share(T, $this) {
    return dart.fn(() => connectable_stream['ConnectableStreamExtensions|share'](T, $this), dart.fnType(async.Stream$(T), []));
  };
  connectable_stream['ConnectableStreamExtensions|shareValue'] = function ConnectableStreamExtensions$124shareValue(T, $this) {
    return connectable_stream['ConnectableStreamExtensions|publishValue'](T, $this).refCount();
  };
  connectable_stream['ConnectableStreamExtensions|get#shareValue'] = function ConnectableStreamExtensions$124get$35shareValue(T, $this) {
    return dart.fn(() => connectable_stream['ConnectableStreamExtensions|shareValue'](T, $this), dart.fnType(value_stream.ValueStream$(T), []));
  };
  connectable_stream['ConnectableStreamExtensions|shareValueSeeded'] = function ConnectableStreamExtensions$124shareValueSeeded(T, $this, seedValue) {
    return connectable_stream['ConnectableStreamExtensions|publishValueSeeded'](T, $this, seedValue).refCount();
  };
  connectable_stream['ConnectableStreamExtensions|get#shareValueSeeded'] = function ConnectableStreamExtensions$124get$35shareValueSeeded(T, $this) {
    return dart.fn(seedValue => connectable_stream['ConnectableStreamExtensions|shareValueSeeded'](T, $this, seedValue), dart.fnType(value_stream.ValueStream$(T), [T]));
  };
  connectable_stream['ConnectableStreamExtensions|shareReplay'] = function ConnectableStreamExtensions$124shareReplay(T, $this, opts) {
    let maxSize = opts && 'maxSize' in opts ? opts.maxSize : null;
    return connectable_stream['ConnectableStreamExtensions|publishReplay'](T, $this, {maxSize: maxSize}).refCount();
  };
  connectable_stream['ConnectableStreamExtensions|get#shareReplay'] = function ConnectableStreamExtensions$124get$35shareReplay(T, $this) {
    return dart.fn(opts => {
      let maxSize = opts && 'maxSize' in opts ? opts.maxSize : null;
      return connectable_stream['ConnectableStreamExtensions|shareReplay'](T, $this, {maxSize: maxSize});
    }, dart.fnType(replay_stream.ReplayStream$(T), [], {maxSize: core.int}, {}));
  };
  var _queue$ = dart.privateName(replay_subject, "_queue");
  var _maxSize$ = dart.privateName(replay_subject, "_maxSize");
  var _isAddingStreamItems = dart.privateName(subject, "_isAddingStreamItems");
  var _controller$5 = dart.privateName(subject, "_controller");
  var _addError = dart.privateName(subject, "_addError");
  var _add = dart.privateName(subject, "_add");
  const _is_Subject_default = Symbol('_is_Subject_default');
  subject.Subject$ = dart.generic(T => {
    var _StreamSinkWrapperOfT = () => (_StreamSinkWrapperOfT = dart.constFn(subject._StreamSinkWrapper$(T)))();
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    var CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    var TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    class Subject extends async.StreamView$(T) {
      get sink() {
        return new (_StreamSinkWrapperOfT()).new(this);
      }
      get onListen() {
        return this[_controller$5].onListen;
      }
      set onListen(onListenHandler) {
        this[_controller$5].onListen = onListenHandler;
      }
      get stream() {
        return this;
      }
      get onPause() {
        return dart.throw(new core.UnsupportedError.new("Subjects do not support pause callbacks"));
      }
      set onPause(onPauseHandler) {
        return dart.throw(new core.UnsupportedError.new("Subjects do not support pause callbacks"));
      }
      get onResume() {
        return dart.throw(new core.UnsupportedError.new("Subjects do not support resume callbacks"));
      }
      set onResume(onResumeHandler) {
        return dart.throw(new core.UnsupportedError.new("Subjects do not support resume callbacks"));
      }
      get onCancel() {
        return this[_controller$5].onCancel;
      }
      set onCancel(onCancelHandler) {
        this[_controller$5].onCancel = onCancelHandler;
      }
      get isClosed() {
        return this[_controller$5].isClosed;
      }
      get isPaused() {
        return this[_controller$5].isPaused;
      }
      get hasListener() {
        return this[_controller$5].hasListener;
      }
      get done() {
        return this[_controller$5].done;
      }
      addError(error, stackTrace = null) {
        if (dart.test(this[_isAddingStreamItems])) {
          dart.throw(new core.StateError.new("You cannot add an error while items are being added from addStream"));
        }
        this[_addError](error, stackTrace);
      }
      [_addError](error, stackTrace = null) {
        this.onAddError(error, stackTrace);
        this[_controller$5].addError(error, stackTrace);
      }
      onAddError(error, stackTrace = null) {
      }
      addStream(source, opts) {
        StreamOfT()._check(source);
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : true;
        if (dart.test(this[_isAddingStreamItems])) {
          dart.throw(new core.StateError.new("You cannot add items while items are being added from addStream"));
        }
        let completer = CompleterOfT().new();
        this[_isAddingStreamItems] = true;
        source.listen(dart.fn(event => {
          this[_add](event);
        }, TToNull()), {onError: dart.fn((e, s) => {
            this[_controller$5].addError(e, s);
            if (dart.test(cancelOnError)) {
              this[_isAddingStreamItems] = false;
              completer.completeError(e);
            }
          }, dynamicAndStackTraceToNull()), onDone: dart.fn(() => {
            this[_isAddingStreamItems] = false;
            completer.complete();
          }, VoidToNull()), cancelOnError: cancelOnError});
        return completer.future;
      }
      add(event) {
        T._check(event);
        if (dart.test(this[_isAddingStreamItems])) {
          dart.throw(new core.StateError.new("You cannot add items while items are being added from addStream"));
        }
        this[_add](event);
      }
      [_add](event) {
        this.onAdd(event);
        this[_controller$5].add(event);
      }
      onAdd(event) {
        T._check(event);
      }
      close() {
        if (dart.test(this[_isAddingStreamItems])) {
          dart.throw(new core.StateError.new("You cannot close the subject while items are being added from addStream"));
        }
        return this[_controller$5].close();
      }
    }
    (Subject.new = function(controller, stream) {
      this[_isAddingStreamItems] = false;
      this[_controller$5] = controller;
      Subject.__proto__.new.call(this, stream);
      ;
    }).prototype = Subject.prototype;
    dart.addTypeTests(Subject);
    Subject.prototype[_is_Subject_default] = true;
    Subject[dart.implements] = () => [async.StreamController$(T)];
    dart.setMethodSignature(Subject, () => ({
      __proto__: dart.getMethods(Subject.__proto__),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      [_addError]: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      onAddError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async.Future, [core.Object], {cancelOnError: core.bool}, {}),
      add: dart.fnType(dart.void, [core.Object]),
      [_add]: dart.fnType(dart.void, [T]),
      onAdd: dart.fnType(dart.void, [core.Object]),
      close: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(Subject, () => ({
      __proto__: dart.getGetters(Subject.__proto__),
      sink: async.StreamSink$(T),
      onListen: dart.fnType(dart.void, []),
      stream: async.Stream$(T),
      onPause: dart.fnType(dart.void, []),
      onResume: dart.fnType(dart.void, []),
      onCancel: dart.fnType(dart.dynamic, []),
      isClosed: core.bool,
      isPaused: core.bool,
      hasListener: core.bool,
      done: async.Future
    }));
    dart.setSetterSignature(Subject, () => ({
      __proto__: dart.getSetters(Subject.__proto__),
      onListen: dart.fnType(dart.void, []),
      onPause: dart.fnType(dart.void, []),
      onResume: dart.fnType(dart.void, []),
      onCancel: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(Subject, "package:rxdart/src/subjects/subject.dart");
    dart.setFieldSignature(Subject, () => ({
      __proto__: dart.getFields(Subject.__proto__),
      [_controller$5]: dart.finalFieldType(async.StreamController$(T)),
      [_isAddingStreamItems]: dart.fieldType(core.bool)
    }));
    return Subject;
  });
  subject.Subject = subject.Subject$();
  dart.addTypeTests(subject.Subject, _is_Subject_default);
  const _is_ReplaySubject_default = Symbol('_is_ReplaySubject_default');
  replay_subject.ReplaySubject$ = dart.generic(T => {
    class ReplaySubject extends subject.Subject$(T) {
      static new(opts) {
        let maxSize = opts && 'maxSize' in opts ? opts.maxSize : null;
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let sync = opts && 'sync' in opts ? opts.sync : false;
        let controller = async.StreamController$(T).broadcast({onListen: onListen, onCancel: onCancel, sync: sync});
        let queue = new (collection.ListQueue$(T)).new();
        return new (replay_subject.ReplaySubject$(T)).__(controller, rx.Rx.defer(T, dart.fn(() => start_with_many['StartWithManyExtension|startWithMany'](T, controller.stream, queue[$toList]({growable: false})), dart.fnType(async.Stream$(T), [])), {reusable: true}), queue, maxSize);
      }
      onAdd(event) {
        T._check(event);
        if (this[_queue$][$length] == this[_maxSize$]) {
          this[_queue$].removeFirst();
        }
        this[_queue$].add(event);
      }
      get values() {
        return this[_queue$][$toList]({growable: false});
      }
    }
    (ReplaySubject.__ = function(controller, stream, _queue, _maxSize) {
      this[_queue$] = _queue;
      this[_maxSize$] = _maxSize;
      ReplaySubject.__proto__.new.call(this, controller, stream);
      ;
    }).prototype = ReplaySubject.prototype;
    dart.addTypeTests(ReplaySubject);
    ReplaySubject.prototype[_is_ReplaySubject_default] = true;
    ReplaySubject[dart.implements] = () => [replay_stream.ReplayStream$(T)];
    dart.setGetterSignature(ReplaySubject, () => ({
      __proto__: dart.getGetters(ReplaySubject.__proto__),
      values: core.List$(T)
    }));
    dart.setLibraryUri(ReplaySubject, "package:rxdart/src/subjects/replay_subject.dart");
    dart.setFieldSignature(ReplaySubject, () => ({
      __proto__: dart.getFields(ReplaySubject.__proto__),
      [_queue$]: dart.finalFieldType(collection.Queue$(T)),
      [_maxSize$]: dart.finalFieldType(core.int)
    }));
    return ReplaySubject;
  });
  replay_subject.ReplaySubject = replay_subject.ReplaySubject$();
  dart.addTypeTests(replay_subject.ReplaySubject, _is_ReplaySubject_default);
  var _target$ = dart.privateName(subject, "_target");
  const _is__StreamSinkWrapper_default = Symbol('_is__StreamSinkWrapper_default');
  subject._StreamSinkWrapper$ = dart.generic(T => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class _StreamSinkWrapper extends core.Object {
      add(data) {
        T._check(data);
        this[_target$].add(data);
      }
      addError(error, stackTrace = null) {
        this[_target$].addError(error, stackTrace);
      }
      close() {
        return this[_target$].close();
      }
      addStream(source) {
        StreamOfT()._check(source);
        return this[_target$].addStream(source);
      }
      get done() {
        return this[_target$].done;
      }
    }
    (_StreamSinkWrapper.new = function(_target) {
      this[_target$] = _target;
      ;
    }).prototype = _StreamSinkWrapper.prototype;
    dart.addTypeTests(_StreamSinkWrapper);
    _StreamSinkWrapper.prototype[_is__StreamSinkWrapper_default] = true;
    _StreamSinkWrapper[dart.implements] = () => [async.StreamSink$(T)];
    dart.setMethodSignature(_StreamSinkWrapper, () => ({
      __proto__: dart.getMethods(_StreamSinkWrapper.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      close: dart.fnType(async.Future, []),
      addStream: dart.fnType(async.Future, [core.Object])
    }));
    dart.setGetterSignature(_StreamSinkWrapper, () => ({
      __proto__: dart.getGetters(_StreamSinkWrapper.__proto__),
      done: async.Future
    }));
    dart.setLibraryUri(_StreamSinkWrapper, "package:rxdart/src/subjects/subject.dart");
    dart.setFieldSignature(_StreamSinkWrapper, () => ({
      __proto__: dart.getFields(_StreamSinkWrapper.__proto__),
      [_target$]: dart.finalFieldType(async.StreamController$(T))
    }));
    return _StreamSinkWrapper;
  });
  subject._StreamSinkWrapper = subject._StreamSinkWrapper$();
  dart.addTypeTests(subject._StreamSinkWrapper, _is__StreamSinkWrapper_default);
  rx.Rx = class Rx extends core.Object {
    static combineLatest(T, R, streams, combiner) {
      return new (combine_latest.CombineLatestStream$(T, R)).new(streams, combiner);
    }
    static combineLatestList(T, streams) {
      return combine_latest.CombineLatestStream.list(T, streams);
    }
    static combineLatest2(A, B, T, streamA, streamB, combiner) {
      return combine_latest.CombineLatestStream.combine2(A, B, T, streamA, streamB, combiner);
    }
    static combineLatest3(A, B, C, T, streamA, streamB, streamC, combiner) {
      return combine_latest.CombineLatestStream.combine3(A, B, C, T, streamA, streamB, streamC, combiner);
    }
    static combineLatest4(A, B, C, D, T, streamA, streamB, streamC, streamD, combiner) {
      return combine_latest.CombineLatestStream.combine4(A, B, C, D, T, streamA, streamB, streamC, streamD, combiner);
    }
    static combineLatest5(A, B, C, D, E, T, streamA, streamB, streamC, streamD, streamE, combiner) {
      return combine_latest.CombineLatestStream.combine5(A, B, C, D, E, T, streamA, streamB, streamC, streamD, streamE, combiner);
    }
    static combineLatest6(A, B, C, D, E, F, T, streamA, streamB, streamC, streamD, streamE, streamF, combiner) {
      return combine_latest.CombineLatestStream.combine6(A, B, C, D, E, F, T, streamA, streamB, streamC, streamD, streamE, streamF, combiner);
    }
    static combineLatest7(A, B, C, D, E, F, G, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, combiner) {
      return combine_latest.CombineLatestStream.combine7(A, B, C, D, E, F, G, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, combiner);
    }
    static combineLatest8(A, B, C, D, E, F, G, H, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, combiner) {
      return combine_latest.CombineLatestStream.combine8(A, B, C, D, E, F, G, H, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, combiner);
    }
    static combineLatest9(A, B, C, D, E, F, G, H, I, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, combiner) {
      return combine_latest.CombineLatestStream.combine9(A, B, C, D, E, F, G, H, I, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, combiner);
    }
    static concat(T, streams) {
      return new (concat.ConcatStream$(T)).new(streams);
    }
    static concatEager(T, streams) {
      return new (concat_eager.ConcatEagerStream$(T)).new(streams);
    }
    static defer(T, streamFactory, opts) {
      let reusable = opts && 'reusable' in opts ? opts.reusable : false;
      return new (defer.DeferStream$(T)).new(streamFactory, {reusable: reusable});
    }
    static forkJoin(T, R, streams, combiner) {
      return new (fork_join.ForkJoinStream$(T, R)).new(streams, combiner);
    }
    static forkJoinList(T, streams) {
      return fork_join.ForkJoinStream.list(T, streams);
    }
    static forkJoin2(A, B, T, streamA, streamB, combiner) {
      return fork_join.ForkJoinStream.combine2(A, B, T, streamA, streamB, combiner);
    }
    static forkJoin3(A, B, C, T, streamA, streamB, streamC, combiner) {
      return fork_join.ForkJoinStream.combine3(A, B, C, T, streamA, streamB, streamC, combiner);
    }
    static forkJoin4(A, B, C, D, T, streamA, streamB, streamC, streamD, combiner) {
      return fork_join.ForkJoinStream.combine4(A, B, C, D, T, streamA, streamB, streamC, streamD, combiner);
    }
    static forkJoin5(A, B, C, D, E, T, streamA, streamB, streamC, streamD, streamE, combiner) {
      return fork_join.ForkJoinStream.combine5(A, B, C, D, E, T, streamA, streamB, streamC, streamD, streamE, combiner);
    }
    static forkJoin6(A, B, C, D, E, F, T, streamA, streamB, streamC, streamD, streamE, streamF, combiner) {
      return fork_join.ForkJoinStream.combine6(A, B, C, D, E, F, T, streamA, streamB, streamC, streamD, streamE, streamF, combiner);
    }
    static forkJoin7(A, B, C, D, E, F, G, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, combiner) {
      return fork_join.ForkJoinStream.combine7(A, B, C, D, E, F, G, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, combiner);
    }
    static forkJoin8(A, B, C, D, E, F, G, H, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, combiner) {
      return fork_join.ForkJoinStream.combine8(A, B, C, D, E, F, G, H, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, combiner);
    }
    static forkJoin9(A, B, C, D, E, F, G, H, I, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, combiner) {
      return fork_join.ForkJoinStream.combine9(A, B, C, D, E, F, G, H, I, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, combiner);
    }
    static merge(T, streams) {
      return new (merge.MergeStream$(T)).new(streams);
    }
    static never(T) {
      return new (never.NeverStream$(T)).new();
    }
    static race(T, streams) {
      return new (race.RaceStream$(T)).new(streams);
    }
    static range(startInclusive, endInclusive) {
      return new range.RangeStream.new(startInclusive, endInclusive);
    }
    static repeat(T, streamFactory, count = null) {
      return new (repeat.RepeatStream$(T)).new(streamFactory, count);
    }
    static retry(T, streamFactory, count = null) {
      return new (retry.RetryStream$(T)).new(streamFactory, count);
    }
    static retryWhen(T, streamFactory, retryWhenFactory) {
      return new (retry_when.RetryWhenStream$(T)).new(streamFactory, retryWhenFactory);
    }
    static sequenceEqual(A, B, stream, other, opts) {
      let equals = opts && 'equals' in opts ? opts.equals : null;
      return new (sequence_equal.SequenceEqualStream$(A, B)).new(stream, other, {equals: equals});
    }
    static switchLatest(T, streams) {
      return new (switch_latest.SwitchLatestStream$(T)).new(streams);
    }
    static timer(T, value, duration) {
      return new (timer.TimerStream$(T)).new(value, duration);
    }
    static zip2(A, B, T, streamA, streamB, zipper) {
      return zip.ZipStream.zip2(A, B, T, streamA, streamB, zipper);
    }
    static zip(T, R, streams, zipper) {
      return new (zip.ZipStream$(T, R)).new(streams, zipper);
    }
    static zipList(T, streams) {
      return zip.ZipStream.list(T, streams);
    }
    static zip3(A, B, C, T, streamA, streamB, streamC, zipper) {
      return zip.ZipStream.zip3(A, B, C, T, streamA, streamB, streamC, zipper);
    }
    static zip4(A, B, C, D, T, streamA, streamB, streamC, streamD, zipper) {
      return zip.ZipStream.zip4(A, B, C, D, T, streamA, streamB, streamC, streamD, zipper);
    }
    static zip5(A, B, C, D, E, T, streamA, streamB, streamC, streamD, streamE, zipper) {
      return zip.ZipStream.zip5(A, B, C, D, E, T, streamA, streamB, streamC, streamD, streamE, zipper);
    }
    static zip6(A, B, C, D, E, F, T, streamA, streamB, streamC, streamD, streamE, streamF, zipper) {
      return zip.ZipStream.zip6(A, B, C, D, E, F, T, streamA, streamB, streamC, streamD, streamE, streamF, zipper);
    }
    static zip7(A, B, C, D, E, F, G, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, zipper) {
      return zip.ZipStream.zip7(A, B, C, D, E, F, G, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, zipper);
    }
    static zip8(A, B, C, D, E, F, G, H, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, zipper) {
      return zip.ZipStream.zip8(A, B, C, D, E, F, G, H, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, zipper);
    }
    static zip9(A, B, C, D, E, F, G, H, I, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, zipper) {
      return zip.ZipStream.zip9(A, B, C, D, E, F, G, H, I, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, zipper);
    }
  };
  (rx.Rx.new = function() {
    ;
  }).prototype = rx.Rx.prototype;
  dart.addTypeTests(rx.Rx);
  dart.setLibraryUri(rx.Rx, "package:rxdart/src/rx.dart");
  const _is_PublishSubject_default = Symbol('_is_PublishSubject_default');
  publish_subject.PublishSubject$ = dart.generic(T => {
    class PublishSubject extends subject.Subject$(T) {
      static new(opts) {
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let sync = opts && 'sync' in opts ? opts.sync : false;
        let controller = async.StreamController$(T).broadcast({onListen: onListen, onCancel: onCancel, sync: sync});
        return new (publish_subject.PublishSubject$(T)).__(controller, controller.stream);
      }
    }
    (PublishSubject.__ = function(controller, stream) {
      PublishSubject.__proto__.new.call(this, controller, stream);
      ;
    }).prototype = PublishSubject.prototype;
    dart.addTypeTests(PublishSubject);
    PublishSubject.prototype[_is_PublishSubject_default] = true;
    dart.setLibraryUri(PublishSubject, "package:rxdart/src/subjects/publish_subject.dart");
    return PublishSubject;
  });
  publish_subject.PublishSubject = publish_subject.PublishSubject$();
  dart.addTypeTests(publish_subject.PublishSubject, _is_PublishSubject_default);
  var _wrapper$ = dart.privateName(behavior_subject, "_wrapper");
  const _is_BehaviorSubject_default = Symbol('_is_BehaviorSubject_default');
  behavior_subject.BehaviorSubject$ = dart.generic(T => {
    class BehaviorSubject extends subject.Subject$(T) {
      static new(opts) {
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let sync = opts && 'sync' in opts ? opts.sync : false;
        let controller = async.StreamController$(T).broadcast({onListen: onListen, onCancel: onCancel, sync: sync});
        let wrapper = new (behavior_subject._Wrapper$(T)).new();
        return new (behavior_subject.BehaviorSubject$(T)).__(controller, rx.Rx.defer(T, behavior_subject.BehaviorSubject._deferStream(T, wrapper, controller), {reusable: true}), wrapper);
      }
      static seeded(seedValue, opts) {
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let sync = opts && 'sync' in opts ? opts.sync : false;
        let controller = async.StreamController$(T).broadcast({onListen: onListen, onCancel: onCancel, sync: sync});
        let wrapper = new (behavior_subject._Wrapper$(T)).seeded(seedValue);
        return new (behavior_subject.BehaviorSubject$(T)).__(controller, rx.Rx.defer(T, behavior_subject.BehaviorSubject._deferStream(T, wrapper, controller), {reusable: true}), wrapper);
      }
      static _deferStream(T, wrapper, controller) {
        return dart.fn(() => {
          if (dart.test(wrapper.latestIsError)) {
            return controller.stream.transform(T, new (start_with_error.StartWithErrorStreamTransformer$(T)).new(wrapper.latestError, wrapper.latestStackTrace));
          } else if (dart.test(wrapper.latestIsValue)) {
            return controller.stream.transform(T, new (start_with.StartWithStreamTransformer$(T)).new(wrapper.latestValue));
          }
          return controller.stream;
        }, dart.fnType(async.Stream$(T), []));
      }
      onAdd(event) {
        T._check(event);
        return this[_wrapper$].setValue(event);
      }
      onAddError(error, stackTrace = null) {
        return this[_wrapper$].setError(error, stackTrace);
      }
      get stream() {
        return this;
      }
      get hasValue() {
        return this[_wrapper$].latestIsValue;
      }
      get value() {
        return this[_wrapper$].latestValue;
      }
      set value(newValue) {
        T._check(newValue);
        return this.add(newValue);
      }
    }
    (BehaviorSubject.__ = function(controller, stream, _wrapper) {
      this[_wrapper$] = _wrapper;
      BehaviorSubject.__proto__.new.call(this, controller, stream);
      ;
    }).prototype = BehaviorSubject.prototype;
    dart.addTypeTests(BehaviorSubject);
    BehaviorSubject.prototype[_is_BehaviorSubject_default] = true;
    BehaviorSubject[dart.implements] = () => [value_stream.ValueStream$(T)];
    dart.setGetterSignature(BehaviorSubject, () => ({
      __proto__: dart.getGetters(BehaviorSubject.__proto__),
      stream: value_stream.ValueStream$(T),
      hasValue: core.bool,
      value: T
    }));
    dart.setSetterSignature(BehaviorSubject, () => ({
      __proto__: dart.getSetters(BehaviorSubject.__proto__),
      value: core.Object
    }));
    dart.setLibraryUri(BehaviorSubject, "package:rxdart/src/subjects/behavior_subject.dart");
    dart.setFieldSignature(BehaviorSubject, () => ({
      __proto__: dart.getFields(BehaviorSubject.__proto__),
      [_wrapper$]: dart.fieldType(behavior_subject._Wrapper$(T))
    }));
    return BehaviorSubject;
  });
  behavior_subject.BehaviorSubject = behavior_subject.BehaviorSubject$();
  dart.addTypeTests(behavior_subject.BehaviorSubject, _is_BehaviorSubject_default);
  const _is__Wrapper_default = Symbol('_is__Wrapper_default');
  var latestValue$ = dart.privateName(behavior_subject, "_Wrapper.latestValue");
  behavior_subject._Wrapper$ = dart.generic(T => {
    class _Wrapper extends core.Object {
      get latestValue() {
        return this[latestValue$];
      }
      set latestValue(value) {
        this[latestValue$] = T._check(value);
      }
      setValue(event) {
        T._check(event);
        this.latestIsValue = true;
        this.latestIsError = false;
        this.latestValue = event;
        this.latestError = null;
        this.latestStackTrace = null;
      }
      setError(error, stackTrace = null) {
        this.latestIsValue = false;
        this.latestIsError = true;
        this.latestValue = null;
        this.latestError = error;
        this.latestStackTrace = stackTrace;
      }
    }
    (_Wrapper.new = function() {
      this.latestError = null;
      this.latestStackTrace = null;
      this.latestIsValue = false;
      this.latestIsError = false;
      this[latestValue$] = null;
      ;
    }).prototype = _Wrapper.prototype;
    (_Wrapper.seeded = function(latestValue) {
      this.latestError = null;
      this.latestStackTrace = null;
      this.latestIsValue = false;
      this.latestIsError = false;
      this[latestValue$] = latestValue;
      this.latestIsValue = true;
      ;
    }).prototype = _Wrapper.prototype;
    dart.addTypeTests(_Wrapper);
    _Wrapper.prototype[_is__Wrapper_default] = true;
    dart.setMethodSignature(_Wrapper, () => ({
      __proto__: dart.getMethods(_Wrapper.__proto__),
      setValue: dart.fnType(dart.void, [core.Object]),
      setError: dart.fnType(dart.void, [core.Object], [core.StackTrace])
    }));
    dart.setLibraryUri(_Wrapper, "package:rxdart/src/subjects/behavior_subject.dart");
    dart.setFieldSignature(_Wrapper, () => ({
      __proto__: dart.getFields(_Wrapper.__proto__),
      latestValue: dart.fieldType(T),
      latestError: dart.fieldType(core.Object),
      latestStackTrace: dart.fieldType(core.StackTrace),
      latestIsValue: dart.fieldType(core.bool),
      latestIsError: dart.fieldType(core.bool)
    }));
    return _Wrapper;
  });
  behavior_subject._Wrapper = behavior_subject._Wrapper$();
  dart.addTypeTests(behavior_subject._Wrapper, _is__Wrapper_default);
  var _transformer = dart.privateName(start_with_error, "_transformer");
  const _is_StartWithErrorStreamTransformer_default = Symbol('_is_StartWithErrorStreamTransformer_default');
  start_with_error.StartWithErrorStreamTransformer$ = dart.generic(T => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class StartWithErrorStreamTransformer extends async.StreamTransformerBase$(T, T) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer].bind(stream);
      }
      static _buildTransformer(T, error, stackTrace) {
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              try {
                controller.addError(error, stackTrace);
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
    (StartWithErrorStreamTransformer.new = function(error, stackTrace = null) {
      this[_transformer] = start_with_error.StartWithErrorStreamTransformer._buildTransformer(T, error, stackTrace);
      StartWithErrorStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = StartWithErrorStreamTransformer.prototype;
    dart.addTypeTests(StartWithErrorStreamTransformer);
    StartWithErrorStreamTransformer.prototype[_is_StartWithErrorStreamTransformer_default] = true;
    dart.setMethodSignature(StartWithErrorStreamTransformer, () => ({
      __proto__: dart.getMethods(StartWithErrorStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(StartWithErrorStreamTransformer, "package:rxdart/src/transformers/start_with_error.dart");
    dart.setFieldSignature(StartWithErrorStreamTransformer, () => ({
      __proto__: dart.getFields(StartWithErrorStreamTransformer.__proto__),
      [_transformer]: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return StartWithErrorStreamTransformer;
  });
  start_with_error.StartWithErrorStreamTransformer = start_with_error.StartWithErrorStreamTransformer$();
  dart.addTypeTests(start_with_error.StartWithErrorStreamTransformer, _is_StartWithErrorStreamTransformer_default);
  var _isDisposed = dart.privateName(composite_subscription, "_isDisposed");
  var _subscriptionsList = dart.privateName(composite_subscription, "_subscriptionsList");
  composite_subscription.CompositeSubscription = class CompositeSubscription extends core.Object {
    get isDisposed() {
      return this[_isDisposed];
    }
    add(T, subscription) {
      if (dart.test(this.isDisposed)) {
        dart.throw("This composite was disposed, try to use new instance instead");
      }
      this[_subscriptionsList][$add](subscription);
      return subscription;
    }
    remove(subscription) {
      subscription.cancel();
      this[_subscriptionsList][$remove](subscription);
    }
    clear() {
      this[_subscriptionsList][$forEach](dart.fn(subscription => subscription.cancel(), StreamSubscriptionToFuture()));
      this[_subscriptionsList][$clear]();
    }
    dispose() {
      this.clear();
      this[_isDisposed] = true;
    }
  };
  (composite_subscription.CompositeSubscription.new = function() {
    this[_isDisposed] = false;
    this[_subscriptionsList] = JSArrayOfStreamSubscription().of([]);
    ;
  }).prototype = composite_subscription.CompositeSubscription.prototype;
  dart.addTypeTests(composite_subscription.CompositeSubscription);
  dart.setMethodSignature(composite_subscription.CompositeSubscription, () => ({
    __proto__: dart.getMethods(composite_subscription.CompositeSubscription.__proto__),
    add: dart.gFnType(T => [async.StreamSubscription$(T), [async.StreamSubscription$(T)]]),
    remove: dart.fnType(dart.void, [async.StreamSubscription]),
    clear: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(composite_subscription.CompositeSubscription, () => ({
    __proto__: dart.getGetters(composite_subscription.CompositeSubscription.__proto__),
    isDisposed: core.bool
  }));
  dart.setLibraryUri(composite_subscription.CompositeSubscription, "package:rxdart/src/utils/composite_subscription.dart");
  dart.setFieldSignature(composite_subscription.CompositeSubscription, () => ({
    __proto__: dart.getFields(composite_subscription.CompositeSubscription.__proto__),
    [_isDisposed]: dart.fieldType(core.bool),
    [_subscriptionsList]: dart.finalFieldType(core.List$(async.StreamSubscription))
  }));
  var _controller$6 = dart.privateName(concat_eager, "_controller");
  const _is_ConcatEagerStream_default = Symbol('_is_ConcatEagerStream_default');
  concat_eager.ConcatEagerStream$ = dart.generic(T => {
    class ConcatEagerStream extends async.Stream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_controller$6].stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(T, streams) {
        if (streams == null) {
          dart.throw(new core.ArgumentError.new("streams cannot be null"));
        } else if (dart.test(streams[$isEmpty])) {
          dart.throw(new core.ArgumentError.new("at least 1 stream needs to be provided"));
        } else if (dart.test(streams[$any](dart.fn(stream => stream == null, dart.fnType(core.bool, [async.Stream$(T)]))))) {
          dart.throw(new core.ArgumentError.new("One of the provided streams is null"));
        }
        let len = streams[$length];
        let completeEvents = ListOfCompleter().generate(len, dart.fn(_ => async.Completer.new(), intToCompleter()));
        let subscriptions = null;
        let controller = null;
        let activeSubscription = null;
        controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
            let index = -1;
            let completed = 0;
            let onDone = dart.fn(index => {
              let completer = completeEvents[$_get](index);
              return dart.fn(() => {
                completer.complete();
                if ((completed = completed + 1) === len) {
                  controller.close();
                } else {
                  activeSubscription = subscriptions[$_get](dart.notNull(index) + 1);
                }
              }, VoidToNull());
            }, intToFn());
            let createSubscription = dart.fn(stream => {
              index = index + 1;
              let subscription = stream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: onDone(index)});
              if (index > 0) subscription.pause(completeEvents[$_get](index - 1).future);
              return subscription;
            }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T)]));
            subscriptions = streams[$map](async.StreamSubscription$(T), createSubscription)[$toList]({growable: false});
            activeSubscription = subscriptions[$first];
          }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => activeSubscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => activeSubscription.resume(), VoidTovoid()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, subscriptions[$map](async.Future, dart.fn(subscription => subscription.cancel(), dart.fnType(async.Future, [async.StreamSubscription$(T)])))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()))), VoidToFutureOfList())});
        return controller;
      }
    }
    (ConcatEagerStream.new = function(streams) {
      this[_controller$6] = concat_eager.ConcatEagerStream._buildController(T, streams);
      ConcatEagerStream.__proto__.new.call(this);
      ;
    }).prototype = ConcatEagerStream.prototype;
    dart.addTypeTests(ConcatEagerStream);
    ConcatEagerStream.prototype[_is_ConcatEagerStream_default] = true;
    dart.setMethodSignature(ConcatEagerStream, () => ({
      __proto__: dart.getMethods(ConcatEagerStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {})
    }));
    dart.setLibraryUri(ConcatEagerStream, "package:rxdart/src/streams/concat_eager.dart");
    dart.setFieldSignature(ConcatEagerStream, () => ({
      __proto__: dart.getFields(ConcatEagerStream.__proto__),
      [_controller$6]: dart.finalFieldType(async.StreamController$(T))
    }));
    return ConcatEagerStream;
  });
  concat_eager.ConcatEagerStream = concat_eager.ConcatEagerStream$();
  dart.addTypeTests(concat_eager.ConcatEagerStream, _is_ConcatEagerStream_default);
  var _controller$7 = dart.privateName(concat, "_controller");
  const _is_ConcatStream_default = Symbol('_is_ConcatStream_default');
  concat.ConcatStream$ = dart.generic(T => {
    class ConcatStream extends async.Stream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_controller$7].stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(T, streams) {
        if (streams == null) {
          dart.throw(new core.ArgumentError.new("Streams cannot be null"));
        } else if (dart.test(streams[$isEmpty])) {
          dart.throw(new core.ArgumentError.new("At least 1 stream needs to be provided"));
        } else if (dart.test(streams[$any](dart.fn(stream => stream == null, dart.fnType(core.bool, [async.Stream$(T)]))))) {
          dart.throw(new core.ArgumentError.new("One of the provided streams is null"));
        }
        let controller = null;
        let subscription = null;
        controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
            let len = streams[$length];
            let index = 0;
            function moveNext() {
              let t29;
              let stream = streams[$elementAt](index);
              t29 = subscription;
              t29 == null ? null : t29.cancel();
              subscription = stream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  index = index + 1;
                  if (index === len) {
                    controller.close();
                  } else {
                    moveNext();
                  }
                }, VoidToNull())});
            }
            dart.fn(moveNext, VoidTovoid());
            moveNext();
          }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => {
            let t29;
            t29 = subscription;
            return t29 == null ? null : t29.pause(resumeSignal);
          }, FutureTovoid()), onResume: dart.fn(() => {
            let t29;
            t29 = subscription;
            return t29 == null ? null : t29.resume();
          }, VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
        return controller;
      }
    }
    (ConcatStream.new = function(streams) {
      this[_controller$7] = concat.ConcatStream._buildController(T, streams);
      ConcatStream.__proto__.new.call(this);
      ;
    }).prototype = ConcatStream.prototype;
    dart.addTypeTests(ConcatStream);
    ConcatStream.prototype[_is_ConcatStream_default] = true;
    dart.setMethodSignature(ConcatStream, () => ({
      __proto__: dart.getMethods(ConcatStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {})
    }));
    dart.setLibraryUri(ConcatStream, "package:rxdart/src/streams/concat.dart");
    dart.setFieldSignature(ConcatStream, () => ({
      __proto__: dart.getFields(ConcatStream.__proto__),
      [_controller$7]: dart.finalFieldType(async.StreamController$(T))
    }));
    return ConcatStream;
  });
  concat.ConcatStream = concat.ConcatStream$();
  dart.addTypeTests(concat.ConcatStream, _is_ConcatStream_default);
  concat['ConcatExtensions|concatWith'] = function ConcatExtensions$124concatWith(T, $this, other) {
    return $this.transform(T, new (async._StreamBindTransformer$(T, T)).new(dart.fn(stream => new (concat.ConcatStream$(T)).new((() => {
      let t30 = _interceptors.JSArray$(async.Stream$(T)).of([]);
      t30[$add](stream);
      for (let t31 of other)
        t30[$add](t31);
      return t30;
    })()), dart.fnType(concat.ConcatStream$(T), [async.Stream$(T)]))));
  };
  concat['ConcatExtensions|get#concatWith'] = function ConcatExtensions$124get$35concatWith(T, $this) {
    return dart.fn(other => concat['ConcatExtensions|concatWith'](T, $this, other), dart.fnType(async.Stream$(T), [core.Iterable$(async.Stream$(T))]));
  };
  const _is_CombineLatestStream_default = Symbol('_is_CombineLatestStream_default');
  combine_latest.CombineLatestStream$ = dart.generic((T, R) => {
    var StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    var StreamOfTTobool = () => (StreamOfTTobool = dart.constFn(dart.fnType(core.bool, [StreamOfT()])))();
    class CombineLatestStream extends async.StreamView$(R) {
      static list(T, streams) {
        return new (combine_latest.CombineLatestStream$(T, core.List$(T))).new(streams, dart.fn(values => values, dart.fnType(core.List$(T), [core.List$(T)])));
      }
      static combine2(A, B, R, streamOne, streamTwo, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamOne, streamTwo]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1))), dart.fnType(R, [core.List])));
      }
      static combine3(A, B, C, R, streamA, streamB, streamC, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2))), dart.fnType(R, [core.List])));
      }
      static combine4(A, B, C, D, R, streamA, streamB, streamC, streamD, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3))), dart.fnType(R, [core.List])));
      }
      static combine5(A, B, C, D, E, R, streamA, streamB, streamC, streamD, streamE, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4))), dart.fnType(R, [core.List])));
      }
      static combine6(A, B, C, D, E, F, R, streamA, streamB, streamC, streamD, streamE, streamF, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5))), dart.fnType(R, [core.List])));
      }
      static combine7(A, B, C, D, E, F, G, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6))), dart.fnType(R, [core.List])));
      }
      static combine8(A, B, C, D, E, F, G, H, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7))), dart.fnType(R, [core.List])));
      }
      static combine9(A, B, C, D, E, F, G, H, I, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7)), I.as(values[$_get](8))), dart.fnType(R, [core.List])));
      }
      static _buildController(T, R, streams, combiner) {
        let len = streams[$length];
        let subscriptions = null;
        let controller = null;
        controller = async.StreamController$(R).new({sync: true, onListen: dart.fn(() => {
            let values = core.List$(T).new(len);
            let triggered = 0;
            let completed = 0;
            let index = 0;
            let allHaveEvent = dart.fn(() => triggered === len, VoidTobool());
            let onDone = dart.fn(() => {
              if ((completed = completed + 1) === len) controller.close();
            }, VoidToNull());
            let onUpdate = dart.fn(index => dart.fn(value => {
              let t35, t34, t33;
              t33 = values;
              t34 = index;
              t35 = value;
              t33[$_set](t34, t35);
              return t35;
            }, dart.fnType(T, [T])), dart.fnType(dart.fnType(T, [T]), [core.int]));
            subscriptions = streams[$map](async.StreamSubscription$(T), dart.fn(stream => {
              let t33;
              let onUpdateForStream = onUpdate((t33 = index, index = t33 + 1, t33));
              let hasFirstEvent = false;
              return stream.listen(dart.fn(value => {
                onUpdateForStream(value);
                if (!hasFirstEvent) {
                  hasFirstEvent = true;
                  triggered = triggered + 1;
                }
                if (dart.test(allHaveEvent())) {
                  try {
                    controller.add(combiner(core.List$(T).unmodifiable(values)));
                  } catch (e$) {
                    let e = dart.getThrown(e$);
                    let s = dart.stackTrace(e$);
                    controller.addError(e, s);
                  }
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: onDone});
            }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T)])))[$toList]({growable: false});
          }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscriptions[$forEach](dart.fn(subscription => subscription.pause(resumeSignal), StreamSubscriptionTovoid())), FutureTovoid()), onResume: dart.fn(() => subscriptions[$forEach](dart.fn(subscription => subscription.resume(), StreamSubscriptionTovoid())), VoidTovoid()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, subscriptions[$map](async.Future, dart.fn(subscription => subscription.cancel(), StreamSubscriptionToFuture()))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()))), VoidToFutureOfList())});
        return controller;
      }
    }
    (CombineLatestStream.new = function(streams, combiner) {
      if (!(streams != null && dart.test(streams[$every](dart.fn(s => s != null, StreamOfTTobool()))))) dart.assertFailed("streams cannot be null", "org-dartlang-app:///packages/rxdart/src/streams/combine_latest.dart", 57, 16, "streams != null && streams.every((s) => s != null)");
      if (!(combiner != null)) dart.assertFailed("must provide a combiner function", "org-dartlang-app:///packages/rxdart/src/streams/combine_latest.dart", 59, 16, "combiner != null");
      CombineLatestStream.__proto__.new.call(this, combine_latest.CombineLatestStream._buildController(T, R, streams, combiner).stream);
      ;
    }).prototype = CombineLatestStream.prototype;
    dart.addTypeTests(CombineLatestStream);
    CombineLatestStream.prototype[_is_CombineLatestStream_default] = true;
    dart.setLibraryUri(CombineLatestStream, "package:rxdart/src/streams/combine_latest.dart");
    return CombineLatestStream;
  });
  combine_latest.CombineLatestStream = combine_latest.CombineLatestStream$();
  dart.addTypeTests(combine_latest.CombineLatestStream, _is_CombineLatestStream_default);
  dart.trackLibraries("packages/rxdart/rxdart", {
    "package:rxdart/streams.dart": streams,
    "package:rxdart/src/streams/zip.dart": zip,
    "package:rxdart/src/streams/value_stream.dart": value_stream,
    "package:rxdart/src/streams/utils.dart": utils,
    "package:rxdart/src/streams/switch_latest.dart": switch_latest,
    "package:rxdart/src/streams/sequence_equal.dart": sequence_equal,
    "package:rxdart/src/streams/retry_when.dart": retry_when,
    "package:rxdart/src/streams/retry.dart": retry,
    "package:rxdart/src/streams/replay_stream.dart": replay_stream,
    "package:rxdart/src/streams/repeat.dart": repeat,
    "package:rxdart/src/streams/range.dart": range,
    "package:rxdart/src/streams/race.dart": race,
    "package:rxdart/src/streams/merge.dart": merge,
    "package:rxdart/src/streams/fork_join.dart": fork_join,
    "package:rxdart/src/streams/defer.dart": defer,
    "package:rxdart/src/streams/connectable_stream.dart": connectable_stream,
    "package:rxdart/rxdart.dart": rxdart,
    "package:rxdart/subjects.dart": subjects,
    "package:rxdart/src/subjects/replay_subject.dart": replay_subject,
    "package:rxdart/src/subjects/subject.dart": subject,
    "package:rxdart/src/rx.dart": rx,
    "package:rxdart/src/subjects/publish_subject.dart": publish_subject,
    "package:rxdart/src/subjects/behavior_subject.dart": behavior_subject,
    "package:rxdart/src/transformers/start_with_error.dart": start_with_error,
    "package:rxdart/src/utils/composite_subscription.dart": composite_subscription,
    "package:rxdart/src/streams/concat_eager.dart": concat_eager,
    "package:rxdart/src/streams/concat.dart": concat,
    "package:rxdart/src/streams/combine_latest.dart": combine_latest
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/streams/zip.dart","src/streams/value_stream.dart","src/streams/utils.dart","src/streams/switch_latest.dart","src/streams/sequence_equal.dart","src/streams/retry_when.dart","src/streams/retry.dart","src/streams/replay_stream.dart","src/streams/repeat.dart","src/streams/range.dart","src/streams/race.dart","src/streams/merge.dart","src/streams/fork_join.dart","src/streams/defer.dart","src/streams/connectable_stream.dart","src/subjects/subject.dart","src/subjects/replay_subject.dart","src/rx.dart","src/subjects/publish_subject.dart","src/subjects/behavior_subject.dart","src/transformers/start_with_error.dart","src/utils/composite_subscription.dart","src/streams/concat_eager.dart","src/streams/concat.dart","src/streams/combine_latest.dart"],"names":[],"mappings":"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","file":"rxdart.ddc.js"}');
  // Exports:
  return {
    streams: streams,
    src__streams__zip: zip,
    src__streams__value_stream: value_stream,
    src__streams__utils: utils,
    src__streams__switch_latest: switch_latest,
    src__streams__sequence_equal: sequence_equal,
    src__streams__retry_when: retry_when,
    src__streams__retry: retry,
    src__streams__replay_stream: replay_stream,
    src__streams__repeat: repeat,
    src__streams__range: range,
    src__streams__race: race,
    src__streams__merge: merge,
    src__streams__fork_join: fork_join,
    src__streams__defer: defer,
    src__streams__connectable_stream: connectable_stream,
    rxdart: rxdart,
    subjects: subjects,
    src__subjects__replay_subject: replay_subject,
    src__subjects__subject: subject,
    src__rx: rx,
    src__subjects__publish_subject: publish_subject,
    src__subjects__behavior_subject: behavior_subject,
    src__transformers__start_with_error: start_with_error,
    src__utils__composite_subscription: composite_subscription,
    src__streams__concat_eager: concat_eager,
    src__streams__concat: concat,
    src__streams__combine_latest: combine_latest
  };
});

//# sourceMappingURL=rxdart.ddc.js.map
