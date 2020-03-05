define(['dart_sdk', 'packages/typed_data/typed_buffers'], function(dart_sdk, packages__typed_data__typed_buffers) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _native_typed_data = dart_sdk._native_typed_data;
  const typed_data = dart_sdk.typed_data;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const developer = dart_sdk.developer;
  const convert = dart_sdk.convert;
  const io = dart_sdk.io;
  const _http = dart_sdk._http;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const typed_buffers = packages__typed_data__typed_buffers.typed_buffers;
  var isolates = Object.create(dart.library);
  var _isolates_web = Object.create(dart.library);
  var serialization = Object.create(dart.library);
  var platform = Object.create(dart.library);
  var _platform_web = Object.create(dart.library);
  var node = Object.create(dart.library);
  var object$ = Object.create(dart.library);
  var observer_list = Object.create(dart.library);
  var basic_types = Object.create(dart.library);
  var stack_frame = Object.create(dart.library);
  var _bitfield_web = Object.create(dart.library);
  var bitfield = Object.create(dart.library);
  var diagnostics$ = Object.create(dart.library);
  var debug = Object.create(dart.library);
  var print = Object.create(dart.library);
  var assertions = Object.create(dart.library);
  var constants = Object.create(dart.library);
  var collections = Object.create(dart.library);
  var binding = Object.create(dart.library);
  var annotations = Object.create(dart.library);
  var consolidate_response = Object.create(dart.library);
  var licenses = Object.create(dart.library);
  var change_notifier = Object.create(dart.library);
  var profile = Object.create(dart.library);
  var key = Object.create(dart.library);
  var synchronous_future = Object.create(dart.library);
  var unicode = Object.create(dart.library);
  var $buffer = dartx.buffer;
  var $asUint8List = dartx.asUint8List;
  var $setUint16 = dartx.setUint16;
  var $setUint32 = dartx.setUint32;
  var $setInt32 = dartx.setInt32;
  var $setInt64 = dartx.setInt64;
  var $setFloat64 = dartx.setFloat64;
  var $offsetInBytes = dartx.offsetInBytes;
  var $length = dartx.length;
  var $modulo = dartx['%'];
  var $asByteData = dartx.asByteData;
  var $lengthInBytes = dartx.lengthInBytes;
  var $getUint8 = dartx.getUint8;
  var $getUint16 = dartx.getUint16;
  var $getUint32 = dartx.getUint32;
  var $getInt32 = dartx.getInt32;
  var $getInt64 = dartx.getInt64;
  var $getFloat64 = dartx.getFloat64;
  var $asInt32List = dartx.asInt32List;
  var $asInt64List = dartx.asInt64List;
  var $asFloat64List = dartx.asFloat64List;
  var $runtimeType = dartx.runtimeType;
  var $toString = dartx.toString;
  var $add = dartx.add;
  var $remove = dartx.remove;
  var $contains = dartx.contains;
  var $iterator = dartx.iterator;
  var $isEmpty = dartx.isEmpty;
  var $isNotEmpty = dartx.isNotEmpty;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $containsKey = dartx.containsKey;
  var $keys = dartx.keys;
  var $map = dartx.map;
  var $where = dartx.where;
  var $expand = dartx.expand;
  var $take = dartx.take;
  var $takeWhile = dartx.takeWhile;
  var $skip = dartx.skip;
  var $skipWhile = dartx.skipWhile;
  var $trim = dartx.trim;
  var $split = dartx.split;
  var $toList = dartx.toList;
  var $startsWith = dartx.startsWith;
  var $replaceFirst = dartx.replaceFirst;
  var $replaceAll = dartx.replaceAll;
  var $_equals = dartx._equals;
  var $times = dartx['*'];
  var $clear = dartx.clear;
  var $substring = dartx.substring;
  var $last = dartx.last;
  var $trimRight = dartx.trimRight;
  var $endsWith = dartx.endsWith;
  var $toUpperCase = dartx.toUpperCase;
  var $first = dartx.first;
  var $entries = dartx.entries;
  var $isFinite = dartx.isFinite;
  var $clamp = dartx.clamp;
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $join = dartx.join;
  var $values = dartx.values;
  var $any = dartx.any;
  var $hashCode = dartx.hashCode;
  var $toUnsigned = dartx.toUnsigned;
  var $toRadixString = dartx.toRadixString;
  var $padLeft = dartx.padLeft;
  var $indexOf = dartx.indexOf;
  var $toStringAsPrecision = dartx.toStringAsPrecision;
  var $trimLeft = dartx.trimLeft;
  var $matchAsPrefix = dartx.matchAsPrefix;
  var $allMatches = dartx.allMatches;
  var $setRange = dartx.setRange;
  var $lastIndexOf = dartx.lastIndexOf;
  var $firstWhere = dartx.firstWhere;
  var $forEach = dartx.forEach;
  var $removeAt = dartx.removeAt;
  var $sort = dartx.sort;
  var $single = dartx.single;
  var $rightShift = dartx['>>'];
  var $compareTo = dartx.compareTo;
  var $truncate = dartx.truncate;
  var FnAndQ__ToFutureOfR = () => (FnAndQ__ToFutureOfR = dart.constFn(dart.gFnType((Q, R) => [async.Future$(R), [dart.fnType(async.FutureOr$(R), [Q]), Q], {debugLabel: core.String}, {}])))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var StringToStackFrame = () => (StringToStackFrame = dart.constFn(dart.fnType(stack_frame.StackFrame, [core.String])))();
  var JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  var intTobool = () => (intTobool = dart.constFn(dart.fnType(core.bool, [core.int])))();
  var SyncIterableOfString = () => (SyncIterableOfString = dart.constFn(_js_helper.SyncIterable$(core.String)))();
  var JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  var DiagnosticsNodeTovoid = () => (DiagnosticsNodeTovoid = dart.constFn(dart.fnType(dart.void, [diagnostics$.DiagnosticsNode])))();
  var DiagnosticsNodeTobool = () => (DiagnosticsNodeTobool = dart.constFn(dart.fnType(core.bool, [diagnostics$.DiagnosticsNode])))();
  var DiagnosticsPropertyOfvoid = () => (DiagnosticsPropertyOfvoid = dart.constFn(diagnostics$.DiagnosticsProperty$(dart.void)))();
  var IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  var MapOfString$Object = () => (MapOfString$Object = dart.constFn(core.Map$(core.String, core.Object)))();
  var DiagnosticsNodeToMapOfString$Object = () => (DiagnosticsNodeToMapOfString$Object = dart.constFn(dart.fnType(MapOfString$Object(), [diagnostics$.DiagnosticsNode])))();
  var ObjectTobool = () => (ObjectTobool = dart.constFn(dart.fnType(core.bool, [core.Object])))();
  var DiagnosticableNodeOfDiagnosticableMixin = () => (DiagnosticableNodeOfDiagnosticableMixin = dart.constFn(diagnostics$.DiagnosticableNode$(diagnostics$.DiagnosticableMixin)))();
  var JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics$.DiagnosticsNode)))();
  var String__Tovoid = () => (String__Tovoid = dart.constFn(dart.fnType(dart.void, [core.String], {wrapWidth: core.int}, {})))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var IterableOfString = () => (IterableOfString = dart.constFn(core.Iterable$(core.String)))();
  var StringToIterableOfString = () => (StringToIterableOfString = dart.constFn(dart.fnType(IterableOfString(), [core.String])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var CompleterOfvoid = () => (CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))();
  var FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  var ListQueueOfString = () => (ListQueueOfString = dart.constFn(collection.ListQueue$(core.String)))();
  var ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  var JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  var VoidToString = () => (VoidToString = dart.constFn(dart.fnType(core.String, [])))();
  var StackFrameTobool = () => (StackFrameTobool = dart.constFn(dart.fnType(core.bool, [stack_frame.StackFrame])))();
  var IterableOfDiagnosticsNode = () => (IterableOfDiagnosticsNode = dart.constFn(core.Iterable$(diagnostics$.DiagnosticsNode)))();
  var IterableOfDiagnosticsNodeToIterableOfDiagnosticsNode = () => (IterableOfDiagnosticsNodeToIterableOfDiagnosticsNode = dart.constFn(dart.fnType(IterableOfDiagnosticsNode(), [IterableOfDiagnosticsNode()])))();
  var JSArrayOfIterableOfDiagnosticsNodeToIterableOfDiagnosticsNode = () => (JSArrayOfIterableOfDiagnosticsNodeToIterableOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(IterableOfDiagnosticsNodeToIterableOfDiagnosticsNode())))();
  var DiagnosticsPropertyOfFlutterError = () => (DiagnosticsPropertyOfFlutterError = dart.constFn(diagnostics$.DiagnosticsProperty$(assertions.FlutterError)))();
  var DiagnosticsPropertyOfDiagnosticsNode = () => (DiagnosticsPropertyOfDiagnosticsNode = dart.constFn(diagnostics$.DiagnosticsProperty$(diagnostics$.DiagnosticsNode)))();
  var StringToErrorDescription = () => (StringToErrorDescription = dart.constFn(dart.fnType(assertions.ErrorDescription, [core.String])))();
  var IdentityMapOfString$int = () => (IdentityMapOfString$int = dart.constFn(_js_helper.IdentityMap$(core.String, core.int)))();
  var DiagnosticsNodeToString = () => (DiagnosticsNodeToString = dart.constFn(dart.fnType(core.String, [diagnostics$.DiagnosticsNode])))();
  var FlutterErrorDetails__Tovoid = () => (FlutterErrorDetails__Tovoid = dart.constFn(dart.fnType(dart.void, [assertions.FlutterErrorDetails], {forceReport: core.bool}, {})))();
  var JSArrayOfStackFilter = () => (JSArrayOfStackFilter = dart.constFn(_interceptors.JSArray$(assertions.StackFilter)))();
  var IterableOfStringToIterableOfString = () => (IterableOfStringToIterableOfString = dart.constFn(dart.fnType(IterableOfString(), [IterableOfString()])))();
  var StringToDiagnosticsNode = () => (StringToDiagnosticsNode = dart.constFn(dart.fnType(diagnostics$.DiagnosticsNode, [core.String])))();
  var StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  var IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  var VoidToFutureOfvoid = () => (VoidToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [])))();
  var IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  var MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  var FutureOfMapOfString$dynamic = () => (FutureOfMapOfString$dynamic = dart.constFn(async.Future$(MapOfString$dynamic())))();
  var MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  var MapOfString$StringToFutureOfMapOfString$dynamic = () => (MapOfString$StringToFutureOfMapOfString$dynamic = dart.constFn(dart.fnType(FutureOfMapOfString$dynamic(), [MapOfString$String()])))();
  var FutureOfServiceExtensionResponse = () => (FutureOfServiceExtensionResponse = dart.constFn(async.Future$(developer.ServiceExtensionResponse)))();
  var StringAndMapOfString$StringToFutureOfServiceExtensionResponse = () => (StringAndMapOfString$StringToFutureOfServiceExtensionResponse = dart.constFn(dart.fnType(FutureOfServiceExtensionResponse(), [core.String, MapOfString$String()])))();
  var ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  var JSArrayOfListOfint = () => (JSArrayOfListOfint = dart.constFn(_interceptors.JSArray$(ListOfint())))();
  var CompleterOfUint8List = () => (CompleterOfUint8List = dart.constFn(async.Completer$(typed_data.Uint8List)))();
  var ListOfintToNull = () => (ListOfintToNull = dart.constFn(dart.fnType(core.Null, [ListOfint()])))();
  var VoidToLicenseParagraph = () => (VoidToLicenseParagraph = dart.constFn(dart.fnType(licenses.LicenseParagraph, [])))();
  var SyncIterableOfLicenseParagraph = () => (SyncIterableOfLicenseParagraph = dart.constFn(_js_helper.SyncIterable$(licenses.LicenseParagraph)))();
  var StreamOfLicenseEntry = () => (StreamOfLicenseEntry = dart.constFn(async.Stream$(licenses.LicenseEntry)))();
  var VoidToStreamOfLicenseEntry = () => (VoidToStreamOfLicenseEntry = dart.constFn(dart.fnType(StreamOfLicenseEntry(), [])))();
  var JSArrayOfVoidToStreamOfLicenseEntry = () => (JSArrayOfVoidToStreamOfLicenseEntry = dart.constFn(_interceptors.JSArray$(VoidToStreamOfLicenseEntry())))();
  var _AsyncStarImplOfLicenseEntry = () => (_AsyncStarImplOfLicenseEntry = dart.constFn(async._AsyncStarImpl$(licenses.LicenseEntry)))();
  var ObserverListOfVoidTovoid = () => (ObserverListOfVoidTovoid = dart.constFn(observer_list.ObserverList$(VoidTovoid())))();
  var ListOfVoidTovoid = () => (ListOfVoidTovoid = dart.constFn(core.List$(VoidTovoid())))();
  var DiagnosticsPropertyOfChangeNotifier = () => (DiagnosticsPropertyOfChangeNotifier = dart.constFn(diagnostics$.DiagnosticsProperty$(change_notifier.ChangeNotifier)))();
  var SyncIterableOfDiagnosticsPropertyOfChangeNotifier = () => (SyncIterableOfDiagnosticsPropertyOfChangeNotifier = dart.constFn(_js_helper.SyncIterable$(DiagnosticsPropertyOfChangeNotifier())))();
  var IterableOfDiagnosticsPropertyOfChangeNotifier = () => (IterableOfDiagnosticsPropertyOfChangeNotifier = dart.constFn(core.Iterable$(DiagnosticsPropertyOfChangeNotifier())))();
  var VoidToIterableOfDiagnosticsPropertyOfChangeNotifier = () => (VoidToIterableOfDiagnosticsPropertyOfChangeNotifier = dart.constFn(dart.fnType(IterableOfDiagnosticsPropertyOfChangeNotifier(), [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(_isolates_web.compute, FnAndQ__ToFutureOfR());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$]: "TargetPlatform.android",
        index: 0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$]: "TargetPlatform.fuchsia",
        index: 1
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$]: "TargetPlatform.iOS",
        index: 2
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$]: "TargetPlatform.macOS",
        index: 3
      });
    },
    get C5() {
      return C5 = dart.constList([C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], platform.TargetPlatform);
    },
    get C6() {
      return C6 = dart.fn(stack_frame.StackFrame.fromStackTraceLine, StringToStackFrame());
    },
    get C7() {
      return C7 = dart.const({
        __proto__: stack_frame.StackFrame.prototype,
        [isConstructor$]: false,
        [method$]: "asynchronous suspension",
        [className$]: "",
        [column$]: -1,
        [line$]: -1,
        [packagePath$]: "",
        [package$]: "",
        [packageScheme$]: "",
        [number$]: -1,
        [source$]: "<asynchronous suspension>"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: stack_frame.StackFrame.prototype,
        [isConstructor$]: false,
        [method$]: "...",
        [className$]: "",
        [column$]: -1,
        [line$]: -1,
        [packagePath$]: "",
        [package$]: "",
        [packageScheme$]: "",
        [number$]: -1,
        [source$]: "..."
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_name$0]: "DiagnosticLevel.hidden",
        index: 0
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_name$0]: "DiagnosticLevel.fine",
        index: 1
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_name$0]: "DiagnosticLevel.debug",
        index: 2
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_name$0]: "DiagnosticLevel.info",
        index: 3
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_name$0]: "DiagnosticLevel.warning",
        index: 4
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_name$0]: "DiagnosticLevel.hint",
        index: 5
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_name$0]: "DiagnosticLevel.summary",
        index: 6
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_name$0]: "DiagnosticLevel.error",
        index: 7
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_name$0]: "DiagnosticLevel.off",
        index: 8
      });
    },
    get C18() {
      return C18 = dart.constList([C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13, C14 || CT.C14, C15 || CT.C15, C16 || CT.C16, C17 || CT.C17], diagnostics$.DiagnosticLevel);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$0]: "DiagnosticsTreeStyle.none",
        index: 0
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$0]: "DiagnosticsTreeStyle.sparse",
        index: 1
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$0]: "DiagnosticsTreeStyle.offstage",
        index: 2
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$0]: "DiagnosticsTreeStyle.dense",
        index: 3
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$0]: "DiagnosticsTreeStyle.transition",
        index: 4
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$0]: "DiagnosticsTreeStyle.error",
        index: 5
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$0]: "DiagnosticsTreeStyle.whitespace",
        index: 6
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$0]: "DiagnosticsTreeStyle.flat",
        index: 7
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$0]: "DiagnosticsTreeStyle.singleLine",
        index: 8
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$0]: "DiagnosticsTreeStyle.errorProperty",
        index: 9
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$0]: "DiagnosticsTreeStyle.shallow",
        index: 10
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$0]: "DiagnosticsTreeStyle.truncateChildren",
        index: 11
      });
    },
    get C31() {
      return C31 = dart.constList([C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22, C23 || CT.C23, C24 || CT.C24, C25 || CT.C25, C26 || CT.C26, C27 || CT.C27, C28 || CT.C28, C29 || CT.C29, C30 || CT.C30], diagnostics$.DiagnosticsTreeStyle);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: diagnostics$._WordWrapParseMode.prototype,
        [_name$0]: "_WordWrapParseMode.inSpace",
        index: 0
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: diagnostics$._WordWrapParseMode.prototype,
        [_name$0]: "_WordWrapParseMode.inWord",
        index: 1
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: diagnostics$._WordWrapParseMode.prototype,
        [_name$0]: "_WordWrapParseMode.atBreak",
        index: 2
      });
    },
    get C35() {
      return C35 = dart.constList([C32 || CT.C32, C33 || CT.C33, C34 || CT.C34], diagnostics$._WordWrapParseMode);
    },
    get C36() {
      return C36 = dart.constList([], MapOfString$Object());
    },
    get C37() {
      return C37 = dart.const({
        __proto__: diagnostics$._NoDefaultValue.prototype
      });
    },
    get C38() {
      return C38 = dart.constList([], diagnostics$.DiagnosticsNode);
    },
    get C39() {
      return C39 = dart.constMap(core.String, core.Object, []);
    },
    get C40() {
      return C40 = dart.fn(print.debugPrintThrottled, String__Tovoid());
    },
    get C41() {
      return C41 = dart.constMap(core.String, core.String, ["mode", "basic"]);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: print._WordWrapParseMode.prototype,
        [_name$1]: "_WordWrapParseMode.inSpace",
        index: 0
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: print._WordWrapParseMode.prototype,
        [_name$1]: "_WordWrapParseMode.inWord",
        index: 1
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: print._WordWrapParseMode.prototype,
        [_name$1]: "_WordWrapParseMode.atBreak",
        index: 2
      });
    },
    get C45() {
      return C45 = dart.constList([C42 || CT.C42, C43 || CT.C43, C44 || CT.C44], print._WordWrapParseMode);
    },
    get C46() {
      return C46 = dart.fn(print._debugPrintTask, VoidTovoid());
    },
    get C47() {
      return C47 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1000000
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: assertions.PartialStackFrame.prototype,
        [method$0]: "asynchronous suspension",
        [className$0]: "",
        [package$0]: ""
      });
    },
    get C49() {
      return C49 = dart.fn(assertions.FlutterError.dumpErrorToConsole, FlutterErrorDetails__Tovoid());
    },
    get C50() {
      return C50 = dart.fn(assertions.FlutterError.defaultStackFilter, IterableOfStringToIterableOfString());
    },
    get C51() {
      return C51 = dart.fn(assertions.DiagnosticsStackTrace._createStackFrame, StringToDiagnosticsNode());
    },
    get C52() {
      return C52 = dart.fn(binding._exitApplication, VoidToFutureOfvoid());
    },
    get C53() {
      return C53 = dart.const({
        __proto__: _http.HttpClientResponseCompressionState.prototype,
        [_name]: "HttpClientResponseCompressionState.compressed",
        index: 2
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: _http.HttpClientResponseCompressionState.prototype,
        [_name]: "HttpClientResponseCompressionState.decompressed",
        index: 1
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: _http.HttpClientResponseCompressionState.prototype,
        [_name]: "HttpClientResponseCompressionState.notCompressed",
        index: 0
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: licenses._LicenseEntryWithLineBreaksParserState.prototype,
        [_name$2]: "_LicenseEntryWithLineBreaksParserState.beforeParagraph",
        index: 0
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: licenses._LicenseEntryWithLineBreaksParserState.prototype,
        [_name$2]: "_LicenseEntryWithLineBreaksParserState.inParagraph",
        index: 1
      });
    },
    get C58() {
      return C58 = dart.constList([C56 || CT.C56, C57 || CT.C57], licenses._LicenseEntryWithLineBreaksParserState);
    }
  });
  var C0;
  dart.defineLazy(isolates, {
    /*isolates.compute*/get compute() {
      return C0 || CT.C0;
    }
  });
  _isolates_web.compute = function compute(Q, R, callback, message, opts) {
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    return async.async(R, function* compute() {
      yield null;
      return callback(message);
    });
  };
  var _buffer = dart.privateName(serialization, "_buffer");
  var _eightBytes = dart.privateName(serialization, "_eightBytes");
  var _eightBytesAsList = dart.privateName(serialization, "_eightBytesAsList");
  var _alignTo = dart.privateName(serialization, "_alignTo");
  serialization.WriteBuffer = class WriteBuffer extends core.Object {
    putUint8(byte) {
      this[_buffer].add(byte);
    }
    putUint16(value, opts) {
      let t0;
      let endian = opts && 'endian' in opts ? opts.endian : null;
      this[_eightBytes][$setUint16](0, value, (t0 = endian, t0 == null ? typed_data.Endian.host : t0));
      this[_buffer].addAll(this[_eightBytesAsList], 0, 2);
    }
    putUint32(value, opts) {
      let t0;
      let endian = opts && 'endian' in opts ? opts.endian : null;
      this[_eightBytes][$setUint32](0, value, (t0 = endian, t0 == null ? typed_data.Endian.host : t0));
      this[_buffer].addAll(this[_eightBytesAsList], 0, 4);
    }
    putInt32(value, opts) {
      let t0;
      let endian = opts && 'endian' in opts ? opts.endian : null;
      this[_eightBytes][$setInt32](0, value, (t0 = endian, t0 == null ? typed_data.Endian.host : t0));
      this[_buffer].addAll(this[_eightBytesAsList], 0, 4);
    }
    putInt64(value, opts) {
      let t0;
      let endian = opts && 'endian' in opts ? opts.endian : null;
      this[_eightBytes][$setInt64](0, value, (t0 = endian, t0 == null ? typed_data.Endian.host : t0));
      this[_buffer].addAll(this[_eightBytesAsList], 0, 8);
    }
    putFloat64(value, opts) {
      let t0;
      let endian = opts && 'endian' in opts ? opts.endian : null;
      this[_alignTo](8);
      this[_eightBytes][$setFloat64](0, value, (t0 = endian, t0 == null ? typed_data.Endian.host : t0));
      this[_buffer].addAll(this[_eightBytesAsList]);
    }
    putUint8List(list) {
      this[_buffer].addAll(list);
    }
    putInt32List(list) {
      this[_alignTo](4);
      this[_buffer].addAll(list[$buffer][$asUint8List](list[$offsetInBytes], 4 * dart.notNull(list[$length])));
    }
    putInt64List(list) {
      this[_alignTo](8);
      this[_buffer].addAll(list[$buffer][$asUint8List](list[$offsetInBytes], 8 * dart.notNull(list[$length])));
    }
    putFloat64List(list) {
      this[_alignTo](8);
      this[_buffer].addAll(list[$buffer][$asUint8List](list[$offsetInBytes], 8 * dart.notNull(list[$length])));
    }
    [_alignTo](alignment) {
      let mod = this[_buffer].length[$modulo](alignment);
      if (mod !== 0) {
        for (let i = 0; i < dart.notNull(alignment) - mod; i = i + 1)
          this[_buffer].add(0);
      }
    }
    done() {
      let result = this[_buffer].buffer[$asByteData](0, this[_buffer].lengthInBytes);
      this[_buffer] = null;
      return result;
    }
  };
  (serialization.WriteBuffer.new = function() {
    this[_buffer] = null;
    this[_eightBytes] = null;
    this[_eightBytesAsList] = null;
    this[_buffer] = new typed_buffers.Uint8Buffer.new();
    this[_eightBytes] = _native_typed_data.NativeByteData.new(8);
    this[_eightBytesAsList] = this[_eightBytes][$buffer][$asUint8List]();
  }).prototype = serialization.WriteBuffer.prototype;
  dart.addTypeTests(serialization.WriteBuffer);
  dart.setMethodSignature(serialization.WriteBuffer, () => ({
    __proto__: dart.getMethods(serialization.WriteBuffer.__proto__),
    putUint8: dart.fnType(dart.void, [core.int]),
    putUint16: dart.fnType(dart.void, [core.int], {endian: typed_data.Endian}, {}),
    putUint32: dart.fnType(dart.void, [core.int], {endian: typed_data.Endian}, {}),
    putInt32: dart.fnType(dart.void, [core.int], {endian: typed_data.Endian}, {}),
    putInt64: dart.fnType(dart.void, [core.int], {endian: typed_data.Endian}, {}),
    putFloat64: dart.fnType(dart.void, [core.double], {endian: typed_data.Endian}, {}),
    putUint8List: dart.fnType(dart.void, [typed_data.Uint8List]),
    putInt32List: dart.fnType(dart.void, [typed_data.Int32List]),
    putInt64List: dart.fnType(dart.void, [typed_data.Int64List]),
    putFloat64List: dart.fnType(dart.void, [typed_data.Float64List]),
    [_alignTo]: dart.fnType(dart.void, [core.int]),
    done: dart.fnType(typed_data.ByteData, [])
  }));
  dart.setLibraryUri(serialization.WriteBuffer, "package:flutter/src/foundation/serialization.dart");
  dart.setFieldSignature(serialization.WriteBuffer, () => ({
    __proto__: dart.getFields(serialization.WriteBuffer.__proto__),
    [_buffer]: dart.fieldType(typed_buffers.Uint8Buffer),
    [_eightBytes]: dart.fieldType(typed_data.ByteData),
    [_eightBytesAsList]: dart.fieldType(typed_data.Uint8List)
  }));
  var _position = dart.privateName(serialization, "_position");
  var data$ = dart.privateName(serialization, "ReadBuffer.data");
  serialization.ReadBuffer = class ReadBuffer extends core.Object {
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    get hasRemaining() {
      return dart.notNull(this[_position]) < dart.notNull(this.data[$lengthInBytes]);
    }
    getUint8() {
      let t0;
      return this.data[$getUint8]((t0 = this[_position], this[_position] = dart.notNull(t0) + 1, t0));
    }
    getUint16(opts) {
      let t0;
      let endian = opts && 'endian' in opts ? opts.endian : null;
      let value = this.data[$getUint16](this[_position], (t0 = endian, t0 == null ? typed_data.Endian.host : t0));
      this[_position] = dart.notNull(this[_position]) + 2;
      return value;
    }
    getUint32(opts) {
      let t0;
      let endian = opts && 'endian' in opts ? opts.endian : null;
      let value = this.data[$getUint32](this[_position], (t0 = endian, t0 == null ? typed_data.Endian.host : t0));
      this[_position] = dart.notNull(this[_position]) + 4;
      return value;
    }
    getInt32(opts) {
      let t0;
      let endian = opts && 'endian' in opts ? opts.endian : null;
      let value = this.data[$getInt32](this[_position], (t0 = endian, t0 == null ? typed_data.Endian.host : t0));
      this[_position] = dart.notNull(this[_position]) + 4;
      return value;
    }
    getInt64(opts) {
      let t0;
      let endian = opts && 'endian' in opts ? opts.endian : null;
      let value = this.data[$getInt64](this[_position], (t0 = endian, t0 == null ? typed_data.Endian.host : t0));
      this[_position] = dart.notNull(this[_position]) + 8;
      return value;
    }
    getFloat64(opts) {
      let t0;
      let endian = opts && 'endian' in opts ? opts.endian : null;
      this[_alignTo](8);
      let value = this.data[$getFloat64](this[_position], (t0 = endian, t0 == null ? typed_data.Endian.host : t0));
      this[_position] = dart.notNull(this[_position]) + 8;
      return value;
    }
    getUint8List(length) {
      let list = this.data[$buffer][$asUint8List](dart.notNull(this.data[$offsetInBytes]) + dart.notNull(this[_position]), length);
      this[_position] = dart.notNull(this[_position]) + dart.notNull(length);
      return list;
    }
    getInt32List(length) {
      this[_alignTo](4);
      let list = this.data[$buffer][$asInt32List](dart.notNull(this.data[$offsetInBytes]) + dart.notNull(this[_position]), length);
      this[_position] = dart.notNull(this[_position]) + 4 * dart.notNull(length);
      return list;
    }
    getInt64List(length) {
      this[_alignTo](8);
      let list = this.data[$buffer][$asInt64List](dart.notNull(this.data[$offsetInBytes]) + dart.notNull(this[_position]), length);
      this[_position] = dart.notNull(this[_position]) + 8 * dart.notNull(length);
      return list;
    }
    getFloat64List(length) {
      this[_alignTo](8);
      let list = this.data[$buffer][$asFloat64List](dart.notNull(this.data[$offsetInBytes]) + dart.notNull(this[_position]), length);
      this[_position] = dart.notNull(this[_position]) + 8 * dart.notNull(length);
      return list;
    }
    [_alignTo](alignment) {
      let mod = this[_position][$modulo](alignment);
      if (mod !== 0) this[_position] = dart.notNull(this[_position]) + (dart.notNull(alignment) - mod);
    }
  };
  (serialization.ReadBuffer.new = function(data) {
    this[_position] = 0;
    this[data$] = data;
    if (!(data != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/serialization.dart", 108, 14, "data != null");
    ;
  }).prototype = serialization.ReadBuffer.prototype;
  dart.addTypeTests(serialization.ReadBuffer);
  dart.setMethodSignature(serialization.ReadBuffer, () => ({
    __proto__: dart.getMethods(serialization.ReadBuffer.__proto__),
    getUint8: dart.fnType(core.int, []),
    getUint16: dart.fnType(core.int, [], {endian: typed_data.Endian}, {}),
    getUint32: dart.fnType(core.int, [], {endian: typed_data.Endian}, {}),
    getInt32: dart.fnType(core.int, [], {endian: typed_data.Endian}, {}),
    getInt64: dart.fnType(core.int, [], {endian: typed_data.Endian}, {}),
    getFloat64: dart.fnType(core.double, [], {endian: typed_data.Endian}, {}),
    getUint8List: dart.fnType(typed_data.Uint8List, [core.int]),
    getInt32List: dart.fnType(typed_data.Int32List, [core.int]),
    getInt64List: dart.fnType(typed_data.Int64List, [core.int]),
    getFloat64List: dart.fnType(typed_data.Float64List, [core.int]),
    [_alignTo]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(serialization.ReadBuffer, () => ({
    __proto__: dart.getGetters(serialization.ReadBuffer.__proto__),
    hasRemaining: core.bool
  }));
  dart.setLibraryUri(serialization.ReadBuffer, "package:flutter/src/foundation/serialization.dart");
  dart.setFieldSignature(serialization.ReadBuffer, () => ({
    __proto__: dart.getFields(serialization.ReadBuffer.__proto__),
    data: dart.finalFieldType(typed_data.ByteData),
    [_position]: dart.fieldType(core.int)
  }));
  var _name$ = dart.privateName(platform, "_name");
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  platform.TargetPlatform = class TargetPlatform extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (platform.TargetPlatform.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = platform.TargetPlatform.prototype;
  dart.addTypeTests(platform.TargetPlatform);
  dart.setLibraryUri(platform.TargetPlatform, "package:flutter/src/foundation/platform.dart");
  dart.setFieldSignature(platform.TargetPlatform, () => ({
    __proto__: dart.getFields(platform.TargetPlatform.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(platform.TargetPlatform, ['toString']);
  platform.TargetPlatform.android = C1 || CT.C1;
  platform.TargetPlatform.fuchsia = C2 || CT.C2;
  platform.TargetPlatform.iOS = C3 || CT.C3;
  platform.TargetPlatform.macOS = C4 || CT.C4;
  platform.TargetPlatform.values = C5 || CT.C5;
  dart.copyProperties(platform, {
    get defaultTargetPlatform() {
      return _platform_web.defaultTargetPlatform;
    }
  });
  dart.defineLazy(platform, {
    /*platform.debugDefaultTargetPlatformOverride*/get debugDefaultTargetPlatformOverride() {
      return null;
    },
    set debugDefaultTargetPlatformOverride(_) {}
  });
  dart.copyProperties(_platform_web, {
    get defaultTargetPlatform() {
      let result = platform.TargetPlatform.android;
      if (platform.debugDefaultTargetPlatformOverride != null) result = platform.debugDefaultTargetPlatformOverride;
      return result;
    }
  });
  var _depth = dart.privateName(node, "_depth");
  var _owner = dart.privateName(node, "_owner");
  var _parent = dart.privateName(node, "_parent");
  node.AbstractNode = class AbstractNode extends core.Object {
    get depth() {
      return this[_depth];
    }
    redepthChild(child) {
      if (!dart.equals(child.owner, this.owner)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/node.dart", 56, 12, "child.owner == owner");
      if (dart.notNull(child[_depth]) <= dart.notNull(this[_depth])) {
        child[_depth] = dart.notNull(this[_depth]) + 1;
        child.redepthChildren();
      }
    }
    redepthChildren() {
    }
    get owner() {
      return this[_owner];
    }
    get attached() {
      return this[_owner] != null;
    }
    attach(owner) {
      if (!(owner != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/node.dart", 92, 12, "owner != null");
      if (!(this[_owner] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/node.dart", 93, 12, "_owner == null");
      this[_owner] = owner;
    }
    detach() {
      if (!(this[_owner] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/node.dart", 106, 12, "_owner != null");
      this[_owner] = null;
      if (!(this.parent == null || dart.equals(this.attached, this.parent.attached))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/node.dart", 108, 12, "parent == null || attached == parent.attached");
    }
    get parent() {
      return this[_parent];
    }
    adoptChild(child) {
      node.AbstractNode._check(child);
      if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/node.dart", 121, 12, "child != null");
      if (!(child[_parent] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/node.dart", 122, 12, "child._parent == null");
      if (!dart.test(dart.fn(() => {
        let node = this;
        while (node.parent != null)
          node = node.parent;
        if (!!dart.equals(node, child)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/node.dart", 127, 14, "node != child");
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/node.dart", 123, 12, "() {\r\n      AbstractNode node = this;\r\n      while (node.parent != null)\r\n        node = node.parent;\r\n      assert(node != child); // indicates we are about to create a cycle\r\n      return true;\r\n    }()");
      child[_parent] = this;
      if (dart.test(this.attached)) child.attach(this[_owner]);
      this.redepthChild(child);
    }
    dropChild(child) {
      node.AbstractNode._check(child);
      if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/node.dart", 142, 12, "child != null");
      if (!dart.equals(child[_parent], this)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/node.dart", 143, 12, "child._parent == this");
      if (!dart.equals(child.attached, this.attached)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/node.dart", 144, 12, "child.attached == attached");
      child[_parent] = null;
      if (dart.test(this.attached)) child.detach();
    }
  };
  (node.AbstractNode.new = function() {
    this[_depth] = 0;
    this[_owner] = null;
    this[_parent] = null;
    ;
  }).prototype = node.AbstractNode.prototype;
  dart.addTypeTests(node.AbstractNode);
  dart.setMethodSignature(node.AbstractNode, () => ({
    __proto__: dart.getMethods(node.AbstractNode.__proto__),
    redepthChild: dart.fnType(dart.void, [node.AbstractNode]),
    redepthChildren: dart.fnType(dart.void, []),
    attach: dart.fnType(dart.void, [core.Object]),
    detach: dart.fnType(dart.void, []),
    adoptChild: dart.fnType(dart.void, [core.Object]),
    dropChild: dart.fnType(dart.void, [core.Object])
  }));
  dart.setGetterSignature(node.AbstractNode, () => ({
    __proto__: dart.getGetters(node.AbstractNode.__proto__),
    depth: core.int,
    owner: core.Object,
    attached: core.bool,
    parent: node.AbstractNode
  }));
  dart.setLibraryUri(node.AbstractNode, "package:flutter/src/foundation/node.dart");
  dart.setFieldSignature(node.AbstractNode, () => ({
    __proto__: dart.getFields(node.AbstractNode.__proto__),
    [_depth]: dart.fieldType(core.int),
    [_owner]: dart.fieldType(core.Object),
    [_parent]: dart.fieldType(node.AbstractNode)
  }));
  object$.objectRuntimeType = function objectRuntimeType(object, optimizedValue) {
    if (!dart.test(dart.fn(() => {
      optimizedValue = dart.toString(dart.runtimeType(object));
      return true;
    }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/object.dart", 13, 10, "() {\r\n    optimizedValue = object.runtimeType.toString();\r\n    return true;\r\n  }()");
    return optimizedValue;
  };
  var _list = dart.privateName(observer_list, "_list");
  var _isDirty = dart.privateName(observer_list, "_isDirty");
  var _set = dart.privateName(observer_list, "_set");
  const _is_ObserverList_default = Symbol('_is_ObserverList_default');
  observer_list.ObserverList$ = dart.generic(T => {
    var JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    var HashSetOfT = () => (HashSetOfT = dart.constFn(collection.HashSet$(T)))();
    class ObserverList extends core.Iterable$(T) {
      add(item) {
        T._check(item);
        this[_isDirty] = true;
        this[_list][$add](item);
      }
      remove(item) {
        let t0;
        T._check(item);
        this[_isDirty] = true;
        t0 = this[_set];
        t0 == null ? null : t0.clear();
        return this[_list][$remove](item);
      }
      contains(element) {
        if (dart.notNull(this[_list][$length]) < 3) return this[_list][$contains](element);
        if (dart.test(this[_isDirty])) {
          if (this[_set] == null) {
            this[_set] = HashSetOfT().from(this[_list]);
          } else {
            this[_set].addAll(this[_list]);
          }
          this[_isDirty] = false;
        }
        return this[_set].contains(element);
      }
      get iterator() {
        return this[_list][$iterator];
      }
      get isEmpty() {
        return this[_list][$isEmpty];
      }
      get isNotEmpty() {
        return this[_list][$isNotEmpty];
      }
    }
    (ObserverList.new = function() {
      this[_list] = JSArrayOfT().of([]);
      this[_isDirty] = false;
      this[_set] = null;
      ObserverList.__proto__.new.call(this);
      ;
    }).prototype = ObserverList.prototype;
    dart.addTypeTests(ObserverList);
    ObserverList.prototype[_is_ObserverList_default] = true;
    dart.setMethodSignature(ObserverList, () => ({
      __proto__: dart.getMethods(ObserverList.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      remove: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(ObserverList, () => ({
      __proto__: dart.getGetters(ObserverList.__proto__),
      iterator: core.Iterator$(T),
      [$iterator]: core.Iterator$(T)
    }));
    dart.setLibraryUri(ObserverList, "package:flutter/src/foundation/observer_list.dart");
    dart.setFieldSignature(ObserverList, () => ({
      __proto__: dart.getFields(ObserverList.__proto__),
      [_list]: dart.finalFieldType(core.List$(T)),
      [_isDirty]: dart.fieldType(core.bool),
      [_set]: dart.fieldType(collection.HashSet$(T))
    }));
    dart.defineExtensionMethods(ObserverList, ['contains']);
    dart.defineExtensionAccessors(ObserverList, ['iterator', 'isEmpty', 'isNotEmpty']);
    return ObserverList;
  });
  observer_list.ObserverList = observer_list.ObserverList$();
  dart.addTypeTests(observer_list.ObserverList, _is_ObserverList_default);
  var _map = dart.privateName(observer_list, "_map");
  const _is_HashedObserverList_default = Symbol('_is_HashedObserverList_default');
  observer_list.HashedObserverList$ = dart.generic(T => {
    var LinkedMapOfT$int = () => (LinkedMapOfT$int = dart.constFn(_js_helper.LinkedMap$(T, core.int)))();
    class HashedObserverList extends core.Iterable$(T) {
      add(item) {
        let t0;
        T._check(item);
        this[_map][$_set](item, dart.notNull((t0 = this[_map][$_get](item), t0 == null ? 0 : t0)) + 1);
      }
      remove(item) {
        T._check(item);
        let value = this[_map][$_get](item);
        if (value == null) {
          return false;
        }
        if (value === 1) {
          this[_map][$remove](item);
        } else {
          this[_map][$_set](item, dart.notNull(value) - 1);
        }
        return true;
      }
      contains(element) {
        return this[_map][$containsKey](element);
      }
      get iterator() {
        return this[_map][$keys][$iterator];
      }
      get isEmpty() {
        return this[_map][$isEmpty];
      }
      get isNotEmpty() {
        return this[_map][$isNotEmpty];
      }
    }
    (HashedObserverList.new = function() {
      this[_map] = new (LinkedMapOfT$int()).new();
      HashedObserverList.__proto__.new.call(this);
      ;
    }).prototype = HashedObserverList.prototype;
    dart.addTypeTests(HashedObserverList);
    HashedObserverList.prototype[_is_HashedObserverList_default] = true;
    dart.setMethodSignature(HashedObserverList, () => ({
      __proto__: dart.getMethods(HashedObserverList.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      remove: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(HashedObserverList, () => ({
      __proto__: dart.getGetters(HashedObserverList.__proto__),
      iterator: core.Iterator$(T),
      [$iterator]: core.Iterator$(T)
    }));
    dart.setLibraryUri(HashedObserverList, "package:flutter/src/foundation/observer_list.dart");
    dart.setFieldSignature(HashedObserverList, () => ({
      __proto__: dart.getFields(HashedObserverList.__proto__),
      [_map]: dart.finalFieldType(collection.LinkedHashMap$(T, core.int))
    }));
    dart.defineExtensionMethods(HashedObserverList, ['contains']);
    dart.defineExtensionAccessors(HashedObserverList, ['iterator', 'isEmpty', 'isNotEmpty']);
    return HashedObserverList;
  });
  observer_list.HashedObserverList = observer_list.HashedObserverList$();
  dart.addTypeTests(observer_list.HashedObserverList, _is_HashedObserverList_default);
  var _results = dart.privateName(basic_types, "_results");
  var _prefillIterator$ = dart.privateName(basic_types, "_prefillIterator");
  var _precacheEntireList = dart.privateName(basic_types, "_precacheEntireList");
  var _fillNext = dart.privateName(basic_types, "_fillNext");
  const _is_CachingIterable_default = Symbol('_is_CachingIterable_default');
  basic_types.CachingIterable$ = dart.generic(E => {
    var JSArrayOfE = () => (JSArrayOfE = dart.constFn(_interceptors.JSArray$(E)))();
    var _LazyListIteratorOfE = () => (_LazyListIteratorOfE = dart.constFn(basic_types._LazyListIterator$(E)))();
    var CachingIterableOfE = () => (CachingIterableOfE = dart.constFn(basic_types.CachingIterable$(E)))();
    var ListOfE = () => (ListOfE = dart.constFn(core.List$(E)))();
    class CachingIterable extends collection.IterableBase$(E) {
      get iterator() {
        return new (_LazyListIteratorOfE()).new(this);
      }
      map(T, f) {
        return new (basic_types.CachingIterable$(T)).new(super[$map](T, f)[$iterator]);
      }
      where(test) {
        return new (CachingIterableOfE()).new(super[$where](test)[$iterator]);
      }
      expand(T, f) {
        return new (basic_types.CachingIterable$(T)).new(super[$expand](T, f)[$iterator]);
      }
      take(count) {
        return new (CachingIterableOfE()).new(super[$take](count)[$iterator]);
      }
      takeWhile(test) {
        return new (CachingIterableOfE()).new(super[$takeWhile](test)[$iterator]);
      }
      skip(count) {
        return new (CachingIterableOfE()).new(super[$skip](count)[$iterator]);
      }
      skipWhile(test) {
        return new (CachingIterableOfE()).new(super[$skipWhile](test)[$iterator]);
      }
      get length() {
        this[_precacheEntireList]();
        return this[_results][$length];
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        this[_precacheEntireList]();
        return ListOfE().from(this[_results], {growable: growable});
      }
      [_precacheEntireList]() {
        while (dart.test(this[_fillNext]())) {
        }
      }
      [_fillNext]() {
        if (!dart.test(this[_prefillIterator$].moveNext())) return false;
        this[_results][$add](this[_prefillIterator$].current);
        return true;
      }
    }
    (CachingIterable.new = function(_prefillIterator) {
      this[_results] = JSArrayOfE().of([]);
      this[_prefillIterator$] = _prefillIterator;
      CachingIterable.__proto__.new.call(this);
      ;
    }).prototype = CachingIterable.prototype;
    dart.addTypeTests(CachingIterable);
    CachingIterable.prototype[_is_CachingIterable_default] = true;
    dart.setMethodSignature(CachingIterable, () => ({
      __proto__: dart.getMethods(CachingIterable.__proto__),
      map: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]]),
      [$map]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]]),
      expand: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]]),
      [$expand]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]]),
      [_precacheEntireList]: dart.fnType(dart.void, []),
      [_fillNext]: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(CachingIterable, () => ({
      __proto__: dart.getGetters(CachingIterable.__proto__),
      iterator: core.Iterator$(E),
      [$iterator]: core.Iterator$(E)
    }));
    dart.setLibraryUri(CachingIterable, "package:flutter/src/foundation/basic_types.dart");
    dart.setFieldSignature(CachingIterable, () => ({
      __proto__: dart.getFields(CachingIterable.__proto__),
      [_prefillIterator$]: dart.finalFieldType(core.Iterator$(E)),
      [_results]: dart.finalFieldType(core.List$(E))
    }));
    dart.defineExtensionMethods(CachingIterable, [
      'map',
      'where',
      'expand',
      'take',
      'takeWhile',
      'skip',
      'skipWhile',
      'toList'
    ]);
    dart.defineExtensionAccessors(CachingIterable, ['iterator', 'length']);
    return CachingIterable;
  });
  basic_types.CachingIterable = basic_types.CachingIterable$();
  dart.addTypeTests(basic_types.CachingIterable, _is_CachingIterable_default);
  var _owner$ = dart.privateName(basic_types, "_owner");
  var _index = dart.privateName(basic_types, "_index");
  const _is__LazyListIterator_default = Symbol('_is__LazyListIterator_default');
  basic_types._LazyListIterator$ = dart.generic(E => {
    class _LazyListIterator extends core.Object {
      get current() {
        if (!(dart.notNull(this[_index]) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/basic_types.dart", 206, 12, "_index >= 0");
        if (dart.notNull(this[_index]) < 0 || this[_index] == this[_owner$][_results][$length]) return null;
        return this[_owner$][_results][$_get](this[_index]);
      }
      moveNext() {
        if (dart.notNull(this[_index]) >= dart.notNull(this[_owner$][_results][$length])) return false;
        this[_index] = dart.notNull(this[_index]) + 1;
        if (this[_index] == this[_owner$][_results][$length]) return this[_owner$][_fillNext]();
        return true;
      }
    }
    (_LazyListIterator.new = function(_owner) {
      this[_owner$] = _owner;
      this[_index] = -1;
      ;
    }).prototype = _LazyListIterator.prototype;
    dart.addTypeTests(_LazyListIterator);
    _LazyListIterator.prototype[_is__LazyListIterator_default] = true;
    _LazyListIterator[dart.implements] = () => [core.Iterator$(E)];
    dart.setMethodSignature(_LazyListIterator, () => ({
      __proto__: dart.getMethods(_LazyListIterator.__proto__),
      moveNext: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(_LazyListIterator, () => ({
      __proto__: dart.getGetters(_LazyListIterator.__proto__),
      current: E
    }));
    dart.setLibraryUri(_LazyListIterator, "package:flutter/src/foundation/basic_types.dart");
    dart.setFieldSignature(_LazyListIterator, () => ({
      __proto__: dart.getFields(_LazyListIterator.__proto__),
      [_owner$]: dart.finalFieldType(basic_types.CachingIterable$(E)),
      [_index]: dart.fieldType(core.int)
    }));
    return _LazyListIterator;
  });
  basic_types._LazyListIterator = basic_types._LazyListIterator$();
  dart.addTypeTests(basic_types._LazyListIterator, _is__LazyListIterator_default);
  const _is_Factory_default = Symbol('_is_Factory_default');
  var constructor$ = dart.privateName(basic_types, "Factory.constructor");
  basic_types.Factory$ = dart.generic(T => {
    class Factory extends core.Object {
      get _constructor() {
        return this[constructor$];
      }
      set _constructor(value) {
        super._constructor = value;
      }
      get type() {
        return dart.wrapType(T);
      }
      toString() {
        return "Factory(type: " + dart.str(this.type) + ")";
      }
    }
    (Factory.new = function(constructor) {
      this[constructor$] = constructor;
      if (!(constructor != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/basic_types.dart", 228, 44, "constructor != null");
      ;
    }).prototype = Factory.prototype;
    dart.addTypeTests(Factory);
    Factory.prototype[_is_Factory_default] = true;
    dart.setGetterSignature(Factory, () => ({
      __proto__: dart.getGetters(Factory.__proto__),
      type: core.Type
    }));
    dart.setLibraryUri(Factory, "package:flutter/src/foundation/basic_types.dart");
    dart.setFieldSignature(Factory, () => ({
      __proto__: dart.getFields(Factory.__proto__),
      _constructor: dart.finalFieldType(dart.fnType(T, []))
    }));
    dart.defineExtensionMethods(Factory, ['toString']);
    return Factory;
  });
  basic_types.Factory = basic_types.Factory$();
  dart.addTypeTests(basic_types.Factory, _is_Factory_default);
  var C6;
  var source$ = dart.privateName(stack_frame, "StackFrame.source");
  var number$ = dart.privateName(stack_frame, "StackFrame.number");
  var packageScheme$ = dart.privateName(stack_frame, "StackFrame.packageScheme");
  var package$ = dart.privateName(stack_frame, "StackFrame.package");
  var packagePath$ = dart.privateName(stack_frame, "StackFrame.packagePath");
  var line$ = dart.privateName(stack_frame, "StackFrame.line");
  var column$ = dart.privateName(stack_frame, "StackFrame.column");
  var className$ = dart.privateName(stack_frame, "StackFrame.className");
  var method$ = dart.privateName(stack_frame, "StackFrame.method");
  var isConstructor$ = dart.privateName(stack_frame, "StackFrame.isConstructor");
  var C7;
  var C8;
  stack_frame.StackFrame = class StackFrame extends core.Object {
    get source() {
      return this[source$];
    }
    set source(value) {
      super.source = value;
    }
    get number() {
      return this[number$];
    }
    set number(value) {
      super.number = value;
    }
    get packageScheme() {
      return this[packageScheme$];
    }
    set packageScheme(value) {
      super.packageScheme = value;
    }
    get package() {
      return this[package$];
    }
    set package(value) {
      super.package = value;
    }
    get packagePath() {
      return this[packagePath$];
    }
    set packagePath(value) {
      super.packagePath = value;
    }
    get line() {
      return this[line$];
    }
    set line(value) {
      super.line = value;
    }
    get column() {
      return this[column$];
    }
    set column(value) {
      super.column = value;
    }
    get className() {
      return this[className$];
    }
    set className(value) {
      super.className = value;
    }
    get method() {
      return this[method$];
    }
    set method(value) {
      super.method = value;
    }
    get isConstructor() {
      return this[isConstructor$];
    }
    set isConstructor(value) {
      super.isConstructor = value;
    }
    static fromStackTrace(stack) {
      if (!(stack != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/stack_frame.dart", 78, 12, "stack != null");
      return stack_frame.StackFrame.fromStackString(dart.toString(stack));
    }
    static fromStackString(stack) {
      if (!(stack != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/stack_frame.dart", 84, 12, "stack != null");
      return stack[$trim]()[$split]("\n")[$map](stack_frame.StackFrame, C6 || CT.C6)[$toList]();
    }
    static _parseWebFrame(line) {
      let hasPackage = line[$startsWith]("package");
      let parser = hasPackage ? core.RegExp.new("^(package:.+) (\\d+):(\\d+)\\s+(.+)$") : core.RegExp.new("^(.+) (\\d+):(\\d+)\\s+(.+)$");
      let match = parser.firstMatch(line);
      if (!(match != null)) dart.assertFailed("Expected " + dart.str(line) + " to match " + dart.str(parser) + ".", "org-dartlang-app:///packages/flutter/src/foundation/stack_frame.dart", 98, 12, "match != null");
      let $package = "<unknown>";
      let packageScheme = "<unknown>";
      let packagePath = "<unknown>";
      if (hasPackage) {
        packageScheme = "package";
        let packageUri = core.Uri.parse(match.group(1));
        $package = packageUri.pathSegments[$_get](0);
        packagePath = packageUri.path[$replaceFirst](dart.notNull(packageUri.pathSegments[$_get](0)) + "/", "");
      }
      return new stack_frame.StackFrame.new({number: -1, packageScheme: packageScheme, package: $package, packagePath: packagePath, line: core.int.parse(match.group(2)), column: core.int.parse(match.group(3)), className: "<unknown>", method: match.group(4), source: line});
    }
    static fromStackTraceLine(line) {
      if (!(line != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/stack_frame.dart", 125, 12, "line != null");
      if (line === "<asynchronous suspension>") {
        return stack_frame.StackFrame.asynchronousSuspension;
      } else if (line === "...") {
        return stack_frame.StackFrame.stackOverFlowElision;
      }
      if (!line[$startsWith]("#")) {
        return stack_frame.StackFrame._parseWebFrame(line);
      }
      let parser = core.RegExp.new("^#(\\d+) +(.+) \\((.+?):?(\\d+){0,1}:?(\\d+){0,1}\\)$");
      let match = parser.firstMatch(line);
      if (!(match != null)) dart.assertFailed("Expected " + dart.str(line) + " to match " + dart.str(parser) + ".", "org-dartlang-app:///packages/flutter/src/foundation/stack_frame.dart", 139, 12, "match != null");
      let isConstructor = false;
      let className = "";
      let method = match.group(2)[$replaceAll](".<anonymous closure>", "");
      if (method[$startsWith]("new")) {
        className = method[$split](" ")[$_get](1);
        method = "";
        if (className[$contains](".")) {
          let parts = className[$split](".");
          className = parts[$_get](0);
          method = parts[$_get](1);
        }
        isConstructor = true;
      } else if (method[$contains](".")) {
        let parts = method[$split](".");
        className = parts[$_get](0);
        method = parts[$_get](1);
      }
      let packageUri = core.Uri.parse(match.group(3));
      let $package = "<unknown>";
      let packagePath = packageUri.path;
      if (packageUri.scheme === "dart" || packageUri.scheme === "package") {
        $package = packageUri.pathSegments[$_get](0);
        packagePath = packageUri.path[$replaceFirst](dart.notNull(packageUri.pathSegments[$_get](0)) + "/", "");
      }
      return new stack_frame.StackFrame.new({number: core.int.parse(match.group(1)), className: className, method: method, packageScheme: packageUri.scheme, package: $package, packagePath: packagePath, line: match.group(4) == null ? -1 : core.int.parse(match.group(4)), column: match.group(5) == null ? -1 : core.int.parse(match.group(5)), isConstructor: isConstructor, source: line});
    }
    get hashCode() {
      return ui.hashValues(this.number, this.package, this.line, this.column, this.className, this.method, this.source);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return stack_frame.StackFrame.is(other) && other.number == this.number && other.package == this.package && other.line == this.line && other.column == this.column && other.className == this.className && other.method == this.method && other.source == this.source;
    }
    toString() {
      return dart.str(object$.objectRuntimeType(this, "StackFrame")) + "(#" + dart.str(this.number) + ", " + dart.str(this.packageScheme) + ":" + dart.str(this.package) + "/" + dart.str(this.packagePath) + ":" + dart.str(this.line) + ":" + dart.str(this.column) + ", className: " + dart.str(this.className) + ", method: " + dart.str(this.method) + ")";
    }
  };
  (stack_frame.StackFrame.new = function(opts) {
    let number = opts && 'number' in opts ? opts.number : null;
    let column = opts && 'column' in opts ? opts.column : null;
    let line = opts && 'line' in opts ? opts.line : null;
    let packageScheme = opts && 'packageScheme' in opts ? opts.packageScheme : null;
    let $package = opts && 'package' in opts ? opts.package : null;
    let packagePath = opts && 'packagePath' in opts ? opts.packagePath : null;
    let className = opts && 'className' in opts ? opts.className : "";
    let method = opts && 'method' in opts ? opts.method : null;
    let isConstructor = opts && 'isConstructor' in opts ? opts.isConstructor : false;
    let source = opts && 'source' in opts ? opts.source : null;
    this[number$] = number;
    this[column$] = column;
    this[line$] = line;
    this[packageScheme$] = packageScheme;
    this[package$] = $package;
    this[packagePath$] = packagePath;
    this[className$] = className;
    this[method$] = method;
    this[isConstructor$] = isConstructor;
    this[source$] = source;
    if (!(number != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/stack_frame.dart", 39, 16, "number != null");
    if (!(column != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/stack_frame.dart", 40, 16, "column != null");
    if (!(line != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/stack_frame.dart", 41, 16, "line != null");
    if (!(method != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/stack_frame.dart", 42, 16, "method != null");
    if (!(packageScheme != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/stack_frame.dart", 43, 16, "packageScheme != null");
    if (!($package != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/stack_frame.dart", 44, 16, "package != null");
    if (!(packagePath != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/stack_frame.dart", 45, 16, "packagePath != null");
    if (!(className != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/stack_frame.dart", 46, 16, "className != null");
    if (!(isConstructor != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/stack_frame.dart", 47, 16, "isConstructor != null");
    if (!(source != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/stack_frame.dart", 48, 16, "source != null");
    ;
  }).prototype = stack_frame.StackFrame.prototype;
  dart.addTypeTests(stack_frame.StackFrame);
  dart.setMethodSignature(stack_frame.StackFrame, () => ({
    __proto__: dart.getMethods(stack_frame.StackFrame.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(stack_frame.StackFrame, "package:flutter/src/foundation/stack_frame.dart");
  dart.setFieldSignature(stack_frame.StackFrame, () => ({
    __proto__: dart.getFields(stack_frame.StackFrame.__proto__),
    source: dart.finalFieldType(core.String),
    number: dart.finalFieldType(core.int),
    packageScheme: dart.finalFieldType(core.String),
    package: dart.finalFieldType(core.String),
    packagePath: dart.finalFieldType(core.String),
    line: dart.finalFieldType(core.int),
    column: dart.finalFieldType(core.int),
    className: dart.finalFieldType(core.String),
    method: dart.finalFieldType(core.String),
    isConstructor: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(stack_frame.StackFrame, ['_equals', 'toString']);
  dart.defineExtensionAccessors(stack_frame.StackFrame, ['hashCode']);
  dart.defineLazy(stack_frame.StackFrame, {
    /*stack_frame.StackFrame.asynchronousSuspension*/get asynchronousSuspension() {
      return C7 || CT.C7;
    },
    /*stack_frame.StackFrame.stackOverFlowElision*/get stackOverFlowElision() {
      return C8 || CT.C8;
    }
  });
  const _is_BitField_default = Symbol('_is_BitField_default');
  _bitfield_web.BitField$ = dart.generic(T => {
    class BitField extends core.Object {
      _get(index) {
        T._check(index);
        dart.throw(new core.UnsupportedError.new("Not supported when compiling to JavaScript"));
      }
      _set(index, value$) {
        let value = value$;
        T._check(index);
        dart.throw(new core.UnsupportedError.new("Not supported when compiling to JavaScript"));
        return value$;
      }
      reset(value = false) {
        dart.throw(new core.UnsupportedError.new("Not supported when compiling to JavaScript"));
      }
    }
    (BitField.new = function(length) {
      ;
    }).prototype = BitField.prototype;
    (BitField.filled = function(length, value) {
      ;
    }).prototype = BitField.prototype;
    dart.addTypeTests(BitField);
    BitField.prototype[_is_BitField_default] = true;
    BitField[dart.implements] = () => [bitfield.BitField$(T)];
    dart.setMethodSignature(BitField, () => ({
      __proto__: dart.getMethods(BitField.__proto__),
      _get: dart.fnType(core.bool, [core.Object]),
      _set: dart.fnType(dart.void, [core.Object, core.bool]),
      reset: dart.fnType(dart.void, [], [core.bool])
    }));
    dart.setLibraryUri(BitField, "package:flutter/src/foundation/_bitfield_web.dart");
    return BitField;
  });
  _bitfield_web.BitField = _bitfield_web.BitField$();
  dart.addTypeTests(_bitfield_web.BitField, _is_BitField_default);
  dart.defineLazy(_bitfield_web, {
    /*_bitfield_web.kMaxUnsignedSMI*/get kMaxUnsignedSMI() {
      return -1;
    }
  });
  const _is_BitField_default$ = Symbol('_is_BitField_default');
  bitfield.BitField$ = dart.generic(T => {
    class BitField extends core.Object {}
    (BitField[dart.mixinNew] = function() {
    }).prototype = BitField.prototype;
    dart.addTypeTests(BitField);
    BitField.prototype[_is_BitField_default$] = true;
    dart.setLibraryUri(BitField, "package:flutter/src/foundation/bitfield.dart");
    return BitField;
  });
  bitfield.BitField = bitfield.BitField$();
  dart.addTypeTests(bitfield.BitField, _is_BitField_default$);
  dart.defineLazy(bitfield, {
    /*bitfield.kMaxUnsignedSMI*/get kMaxUnsignedSMI() {
      return -1;
    }
  });
  var _name$0 = dart.privateName(diagnostics$, "_name");
  var C9;
  var C10;
  var C11;
  var C12;
  var C13;
  var C14;
  var C15;
  var C16;
  var C17;
  var C18;
  diagnostics$.DiagnosticLevel = class DiagnosticLevel extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (diagnostics$.DiagnosticLevel.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = diagnostics$.DiagnosticLevel.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticLevel);
  dart.setLibraryUri(diagnostics$.DiagnosticLevel, "package:flutter/src/foundation/diagnostics.dart");
  dart.setFieldSignature(diagnostics$.DiagnosticLevel, () => ({
    __proto__: dart.getFields(diagnostics$.DiagnosticLevel.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(diagnostics$.DiagnosticLevel, ['toString']);
  diagnostics$.DiagnosticLevel.hidden = C9 || CT.C9;
  diagnostics$.DiagnosticLevel.fine = C10 || CT.C10;
  diagnostics$.DiagnosticLevel.debug = C11 || CT.C11;
  diagnostics$.DiagnosticLevel.info = C12 || CT.C12;
  diagnostics$.DiagnosticLevel.warning = C13 || CT.C13;
  diagnostics$.DiagnosticLevel.hint = C14 || CT.C14;
  diagnostics$.DiagnosticLevel.summary = C15 || CT.C15;
  diagnostics$.DiagnosticLevel.error = C16 || CT.C16;
  diagnostics$.DiagnosticLevel.off = C17 || CT.C17;
  diagnostics$.DiagnosticLevel.values = C18 || CT.C18;
  var C19;
  var C20;
  var C21;
  var C22;
  var C23;
  var C24;
  var C25;
  var C26;
  var C27;
  var C28;
  var C29;
  var C30;
  var C31;
  diagnostics$.DiagnosticsTreeStyle = class DiagnosticsTreeStyle extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (diagnostics$.DiagnosticsTreeStyle.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = diagnostics$.DiagnosticsTreeStyle.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticsTreeStyle);
  dart.setLibraryUri(diagnostics$.DiagnosticsTreeStyle, "package:flutter/src/foundation/diagnostics.dart");
  dart.setFieldSignature(diagnostics$.DiagnosticsTreeStyle, () => ({
    __proto__: dart.getFields(diagnostics$.DiagnosticsTreeStyle.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(diagnostics$.DiagnosticsTreeStyle, ['toString']);
  diagnostics$.DiagnosticsTreeStyle.none = C19 || CT.C19;
  diagnostics$.DiagnosticsTreeStyle.sparse = C20 || CT.C20;
  diagnostics$.DiagnosticsTreeStyle.offstage = C21 || CT.C21;
  diagnostics$.DiagnosticsTreeStyle.dense = C22 || CT.C22;
  diagnostics$.DiagnosticsTreeStyle.transition = C23 || CT.C23;
  diagnostics$.DiagnosticsTreeStyle.error = C24 || CT.C24;
  diagnostics$.DiagnosticsTreeStyle.whitespace = C25 || CT.C25;
  diagnostics$.DiagnosticsTreeStyle.flat = C26 || CT.C26;
  diagnostics$.DiagnosticsTreeStyle.singleLine = C27 || CT.C27;
  diagnostics$.DiagnosticsTreeStyle.errorProperty = C28 || CT.C28;
  diagnostics$.DiagnosticsTreeStyle.shallow = C29 || CT.C29;
  diagnostics$.DiagnosticsTreeStyle.truncateChildren = C30 || CT.C30;
  diagnostics$.DiagnosticsTreeStyle.values = C31 || CT.C31;
  var prefixLineOne$ = dart.privateName(diagnostics$, "TextTreeConfiguration.prefixLineOne");
  var suffixLineOne$ = dart.privateName(diagnostics$, "TextTreeConfiguration.suffixLineOne");
  var prefixOtherLines$ = dart.privateName(diagnostics$, "TextTreeConfiguration.prefixOtherLines");
  var prefixLastChildLineOne$ = dart.privateName(diagnostics$, "TextTreeConfiguration.prefixLastChildLineOne");
  var prefixOtherLinesRootNode$ = dart.privateName(diagnostics$, "TextTreeConfiguration.prefixOtherLinesRootNode");
  var propertyPrefixIfChildren$ = dart.privateName(diagnostics$, "TextTreeConfiguration.propertyPrefixIfChildren");
  var propertyPrefixNoChildren$ = dart.privateName(diagnostics$, "TextTreeConfiguration.propertyPrefixNoChildren");
  var linkCharacter$ = dart.privateName(diagnostics$, "TextTreeConfiguration.linkCharacter");
  var childLinkSpace = dart.privateName(diagnostics$, "TextTreeConfiguration.childLinkSpace");
  var lineBreak$ = dart.privateName(diagnostics$, "TextTreeConfiguration.lineBreak");
  var lineBreakProperties$ = dart.privateName(diagnostics$, "TextTreeConfiguration.lineBreakProperties");
  var beforeName$ = dart.privateName(diagnostics$, "TextTreeConfiguration.beforeName");
  var afterName$ = dart.privateName(diagnostics$, "TextTreeConfiguration.afterName");
  var afterDescriptionIfBody$ = dart.privateName(diagnostics$, "TextTreeConfiguration.afterDescriptionIfBody");
  var afterDescription$ = dart.privateName(diagnostics$, "TextTreeConfiguration.afterDescription");
  var beforeProperties$ = dart.privateName(diagnostics$, "TextTreeConfiguration.beforeProperties");
  var afterProperties$ = dart.privateName(diagnostics$, "TextTreeConfiguration.afterProperties");
  var mandatoryAfterProperties$ = dart.privateName(diagnostics$, "TextTreeConfiguration.mandatoryAfterProperties");
  var propertySeparator$ = dart.privateName(diagnostics$, "TextTreeConfiguration.propertySeparator");
  var bodyIndent$ = dart.privateName(diagnostics$, "TextTreeConfiguration.bodyIndent");
  var showChildren$ = dart.privateName(diagnostics$, "TextTreeConfiguration.showChildren");
  var addBlankLineIfNoChildren$ = dart.privateName(diagnostics$, "TextTreeConfiguration.addBlankLineIfNoChildren");
  var isNameOnOwnLine$ = dart.privateName(diagnostics$, "TextTreeConfiguration.isNameOnOwnLine");
  var footer$ = dart.privateName(diagnostics$, "TextTreeConfiguration.footer");
  var manditoryFooter$ = dart.privateName(diagnostics$, "TextTreeConfiguration.manditoryFooter");
  var isBlankLineBetweenPropertiesAndChildren$ = dart.privateName(diagnostics$, "TextTreeConfiguration.isBlankLineBetweenPropertiesAndChildren");
  diagnostics$.TextTreeConfiguration = class TextTreeConfiguration extends core.Object {
    get prefixLineOne() {
      return this[prefixLineOne$];
    }
    set prefixLineOne(value) {
      super.prefixLineOne = value;
    }
    get suffixLineOne() {
      return this[suffixLineOne$];
    }
    set suffixLineOne(value) {
      super.suffixLineOne = value;
    }
    get prefixOtherLines() {
      return this[prefixOtherLines$];
    }
    set prefixOtherLines(value) {
      super.prefixOtherLines = value;
    }
    get prefixLastChildLineOne() {
      return this[prefixLastChildLineOne$];
    }
    set prefixLastChildLineOne(value) {
      super.prefixLastChildLineOne = value;
    }
    get prefixOtherLinesRootNode() {
      return this[prefixOtherLinesRootNode$];
    }
    set prefixOtherLinesRootNode(value) {
      super.prefixOtherLinesRootNode = value;
    }
    get propertyPrefixIfChildren() {
      return this[propertyPrefixIfChildren$];
    }
    set propertyPrefixIfChildren(value) {
      super.propertyPrefixIfChildren = value;
    }
    get propertyPrefixNoChildren() {
      return this[propertyPrefixNoChildren$];
    }
    set propertyPrefixNoChildren(value) {
      super.propertyPrefixNoChildren = value;
    }
    get linkCharacter() {
      return this[linkCharacter$];
    }
    set linkCharacter(value) {
      super.linkCharacter = value;
    }
    get childLinkSpace() {
      return this[childLinkSpace];
    }
    set childLinkSpace(value) {
      super.childLinkSpace = value;
    }
    get lineBreak() {
      return this[lineBreak$];
    }
    set lineBreak(value) {
      super.lineBreak = value;
    }
    get lineBreakProperties() {
      return this[lineBreakProperties$];
    }
    set lineBreakProperties(value) {
      super.lineBreakProperties = value;
    }
    get beforeName() {
      return this[beforeName$];
    }
    set beforeName(value) {
      super.beforeName = value;
    }
    get afterName() {
      return this[afterName$];
    }
    set afterName(value) {
      super.afterName = value;
    }
    get afterDescriptionIfBody() {
      return this[afterDescriptionIfBody$];
    }
    set afterDescriptionIfBody(value) {
      super.afterDescriptionIfBody = value;
    }
    get afterDescription() {
      return this[afterDescription$];
    }
    set afterDescription(value) {
      super.afterDescription = value;
    }
    get beforeProperties() {
      return this[beforeProperties$];
    }
    set beforeProperties(value) {
      super.beforeProperties = value;
    }
    get afterProperties() {
      return this[afterProperties$];
    }
    set afterProperties(value) {
      super.afterProperties = value;
    }
    get mandatoryAfterProperties() {
      return this[mandatoryAfterProperties$];
    }
    set mandatoryAfterProperties(value) {
      super.mandatoryAfterProperties = value;
    }
    get propertySeparator() {
      return this[propertySeparator$];
    }
    set propertySeparator(value) {
      super.propertySeparator = value;
    }
    get bodyIndent() {
      return this[bodyIndent$];
    }
    set bodyIndent(value) {
      super.bodyIndent = value;
    }
    get showChildren() {
      return this[showChildren$];
    }
    set showChildren(value) {
      super.showChildren = value;
    }
    get addBlankLineIfNoChildren() {
      return this[addBlankLineIfNoChildren$];
    }
    set addBlankLineIfNoChildren(value) {
      super.addBlankLineIfNoChildren = value;
    }
    get isNameOnOwnLine() {
      return this[isNameOnOwnLine$];
    }
    set isNameOnOwnLine(value) {
      super.isNameOnOwnLine = value;
    }
    get footer() {
      return this[footer$];
    }
    set footer(value) {
      super.footer = value;
    }
    get manditoryFooter() {
      return this[manditoryFooter$];
    }
    set manditoryFooter(value) {
      super.manditoryFooter = value;
    }
    get isBlankLineBetweenPropertiesAndChildren() {
      return this[isBlankLineBetweenPropertiesAndChildren$];
    }
    set isBlankLineBetweenPropertiesAndChildren(value) {
      super.isBlankLineBetweenPropertiesAndChildren = value;
    }
  };
  (diagnostics$.TextTreeConfiguration.new = function(opts) {
    let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : null;
    let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
    let prefixLastChildLineOne = opts && 'prefixLastChildLineOne' in opts ? opts.prefixLastChildLineOne : null;
    let prefixOtherLinesRootNode = opts && 'prefixOtherLinesRootNode' in opts ? opts.prefixOtherLinesRootNode : null;
    let linkCharacter = opts && 'linkCharacter' in opts ? opts.linkCharacter : null;
    let propertyPrefixIfChildren = opts && 'propertyPrefixIfChildren' in opts ? opts.propertyPrefixIfChildren : null;
    let propertyPrefixNoChildren = opts && 'propertyPrefixNoChildren' in opts ? opts.propertyPrefixNoChildren : null;
    let lineBreak = opts && 'lineBreak' in opts ? opts.lineBreak : "\n";
    let lineBreakProperties = opts && 'lineBreakProperties' in opts ? opts.lineBreakProperties : true;
    let afterName = opts && 'afterName' in opts ? opts.afterName : ":";
    let afterDescriptionIfBody = opts && 'afterDescriptionIfBody' in opts ? opts.afterDescriptionIfBody : "";
    let afterDescription = opts && 'afterDescription' in opts ? opts.afterDescription : "";
    let beforeProperties = opts && 'beforeProperties' in opts ? opts.beforeProperties : "";
    let afterProperties = opts && 'afterProperties' in opts ? opts.afterProperties : "";
    let mandatoryAfterProperties = opts && 'mandatoryAfterProperties' in opts ? opts.mandatoryAfterProperties : "";
    let propertySeparator = opts && 'propertySeparator' in opts ? opts.propertySeparator : "";
    let bodyIndent = opts && 'bodyIndent' in opts ? opts.bodyIndent : "";
    let footer = opts && 'footer' in opts ? opts.footer : "";
    let showChildren = opts && 'showChildren' in opts ? opts.showChildren : true;
    let addBlankLineIfNoChildren = opts && 'addBlankLineIfNoChildren' in opts ? opts.addBlankLineIfNoChildren : true;
    let isNameOnOwnLine = opts && 'isNameOnOwnLine' in opts ? opts.isNameOnOwnLine : false;
    let isBlankLineBetweenPropertiesAndChildren = opts && 'isBlankLineBetweenPropertiesAndChildren' in opts ? opts.isBlankLineBetweenPropertiesAndChildren : true;
    let beforeName = opts && 'beforeName' in opts ? opts.beforeName : "";
    let suffixLineOne = opts && 'suffixLineOne' in opts ? opts.suffixLineOne : "";
    let manditoryFooter = opts && 'manditoryFooter' in opts ? opts.manditoryFooter : "";
    this[prefixLineOne$] = prefixLineOne;
    this[prefixOtherLines$] = prefixOtherLines;
    this[prefixLastChildLineOne$] = prefixLastChildLineOne;
    this[prefixOtherLinesRootNode$] = prefixOtherLinesRootNode;
    this[linkCharacter$] = linkCharacter;
    this[propertyPrefixIfChildren$] = propertyPrefixIfChildren;
    this[propertyPrefixNoChildren$] = propertyPrefixNoChildren;
    this[lineBreak$] = lineBreak;
    this[lineBreakProperties$] = lineBreakProperties;
    this[afterName$] = afterName;
    this[afterDescriptionIfBody$] = afterDescriptionIfBody;
    this[afterDescription$] = afterDescription;
    this[beforeProperties$] = beforeProperties;
    this[afterProperties$] = afterProperties;
    this[mandatoryAfterProperties$] = mandatoryAfterProperties;
    this[propertySeparator$] = propertySeparator;
    this[bodyIndent$] = bodyIndent;
    this[footer$] = footer;
    this[showChildren$] = showChildren;
    this[addBlankLineIfNoChildren$] = addBlankLineIfNoChildren;
    this[isNameOnOwnLine$] = isNameOnOwnLine;
    this[isBlankLineBetweenPropertiesAndChildren$] = isBlankLineBetweenPropertiesAndChildren;
    this[beforeName$] = beforeName;
    this[suffixLineOne$] = suffixLineOne;
    this[manditoryFooter$] = manditoryFooter;
    if (!(prefixLineOne != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 219, 15, "prefixLineOne != null");
    if (!(prefixOtherLines != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 220, 15, "prefixOtherLines != null");
    if (!(prefixLastChildLineOne != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 221, 15, "prefixLastChildLineOne != null");
    if (!(prefixOtherLinesRootNode != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 222, 15, "prefixOtherLinesRootNode != null");
    if (!(linkCharacter != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 223, 15, "linkCharacter != null");
    if (!(propertyPrefixIfChildren != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 224, 15, "propertyPrefixIfChildren != null");
    if (!(propertyPrefixNoChildren != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 225, 15, "propertyPrefixNoChildren != null");
    if (!(lineBreak != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 226, 15, "lineBreak != null");
    if (!(lineBreakProperties != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 227, 15, "lineBreakProperties != null");
    if (!(afterName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 228, 15, "afterName != null");
    if (!(afterDescriptionIfBody != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 229, 15, "afterDescriptionIfBody != null");
    if (!(afterDescription != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 230, 15, "afterDescription != null");
    if (!(beforeProperties != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 231, 15, "beforeProperties != null");
    if (!(afterProperties != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 232, 15, "afterProperties != null");
    if (!(propertySeparator != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 233, 15, "propertySeparator != null");
    if (!(bodyIndent != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 234, 15, "bodyIndent != null");
    if (!(footer != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 235, 15, "footer != null");
    if (!(showChildren != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 236, 15, "showChildren != null");
    if (!(addBlankLineIfNoChildren != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 237, 15, "addBlankLineIfNoChildren != null");
    if (!(isNameOnOwnLine != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 238, 15, "isNameOnOwnLine != null");
    if (!(isBlankLineBetweenPropertiesAndChildren != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 239, 15, "isBlankLineBetweenPropertiesAndChildren != null");
    this[childLinkSpace] = " "[$times](linkCharacter.length);
    ;
  }).prototype = diagnostics$.TextTreeConfiguration.prototype;
  dart.addTypeTests(diagnostics$.TextTreeConfiguration);
  dart.setLibraryUri(diagnostics$.TextTreeConfiguration, "package:flutter/src/foundation/diagnostics.dart");
  dart.setFieldSignature(diagnostics$.TextTreeConfiguration, () => ({
    __proto__: dart.getFields(diagnostics$.TextTreeConfiguration.__proto__),
    prefixLineOne: dart.finalFieldType(core.String),
    suffixLineOne: dart.finalFieldType(core.String),
    prefixOtherLines: dart.finalFieldType(core.String),
    prefixLastChildLineOne: dart.finalFieldType(core.String),
    prefixOtherLinesRootNode: dart.finalFieldType(core.String),
    propertyPrefixIfChildren: dart.finalFieldType(core.String),
    propertyPrefixNoChildren: dart.finalFieldType(core.String),
    linkCharacter: dart.finalFieldType(core.String),
    childLinkSpace: dart.finalFieldType(core.String),
    lineBreak: dart.finalFieldType(core.String),
    lineBreakProperties: dart.finalFieldType(core.bool),
    beforeName: dart.finalFieldType(core.String),
    afterName: dart.finalFieldType(core.String),
    afterDescriptionIfBody: dart.finalFieldType(core.String),
    afterDescription: dart.finalFieldType(core.String),
    beforeProperties: dart.finalFieldType(core.String),
    afterProperties: dart.finalFieldType(core.String),
    mandatoryAfterProperties: dart.finalFieldType(core.String),
    propertySeparator: dart.finalFieldType(core.String),
    bodyIndent: dart.finalFieldType(core.String),
    showChildren: dart.finalFieldType(core.bool),
    addBlankLineIfNoChildren: dart.finalFieldType(core.bool),
    isNameOnOwnLine: dart.finalFieldType(core.bool),
    footer: dart.finalFieldType(core.String),
    manditoryFooter: dart.finalFieldType(core.String),
    isBlankLineBetweenPropertiesAndChildren: dart.finalFieldType(core.bool)
  }));
  var C32;
  var C33;
  var C34;
  var C35;
  diagnostics$._WordWrapParseMode = class _WordWrapParseMode extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (diagnostics$._WordWrapParseMode.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = diagnostics$._WordWrapParseMode.prototype;
  dart.addTypeTests(diagnostics$._WordWrapParseMode);
  dart.setLibraryUri(diagnostics$._WordWrapParseMode, "package:flutter/src/foundation/diagnostics.dart");
  dart.setFieldSignature(diagnostics$._WordWrapParseMode, () => ({
    __proto__: dart.getFields(diagnostics$._WordWrapParseMode.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(diagnostics$._WordWrapParseMode, ['toString']);
  diagnostics$._WordWrapParseMode.inSpace = C32 || CT.C32;
  diagnostics$._WordWrapParseMode.inWord = C33 || CT.C33;
  diagnostics$._WordWrapParseMode.atBreak = C34 || CT.C34;
  diagnostics$._WordWrapParseMode.values = C35 || CT.C35;
  var _nextPrefixOtherLines = dart.privateName(diagnostics$, "_nextPrefixOtherLines");
  var _buffer$ = dart.privateName(diagnostics$, "_buffer");
  var _currentLine = dart.privateName(diagnostics$, "_currentLine");
  var _wrappableRanges = dart.privateName(diagnostics$, "_wrappableRanges");
  var _numLines = dart.privateName(diagnostics$, "_numLines");
  var _prefixOtherLines = dart.privateName(diagnostics$, "_prefixOtherLines");
  var _getCurrentPrefix = dart.privateName(diagnostics$, "_getCurrentPrefix");
  var _writeLine = dart.privateName(diagnostics$, "_writeLine");
  var _finalizeLine = dart.privateName(diagnostics$, "_finalizeLine");
  var _updatePrefix = dart.privateName(diagnostics$, "_updatePrefix");
  diagnostics$._PrefixedStringBuilder = class _PrefixedStringBuilder extends core.Object {
    get prefixOtherLines() {
      let t0;
      t0 = this[_nextPrefixOtherLines];
      return t0 == null ? this[_prefixOtherLines] : t0;
    }
    set prefixOtherLines(prefix) {
      this[_prefixOtherLines] = prefix;
      this[_nextPrefixOtherLines] = null;
    }
    incrementPrefixOtherLines(suffix, opts) {
      let updateCurrentLine = opts && 'updateCurrentLine' in opts ? opts.updateCurrentLine : null;
      if (dart.test(this[_currentLine].isEmpty) || dart.test(updateCurrentLine)) {
        this[_prefixOtherLines] = dart.notNull(this.prefixOtherLines) + dart.notNull(suffix);
        this[_nextPrefixOtherLines] = null;
      } else {
        this[_nextPrefixOtherLines] = dart.notNull(this.prefixOtherLines) + dart.notNull(suffix);
      }
    }
    get requiresMultipleLines() {
      return dart.notNull(this[_numLines]) > 1 || this[_numLines] === 1 && dart.test(this[_currentLine].isNotEmpty) || dart.notNull(this[_currentLine].length) + this[_getCurrentPrefix](true).length > dart.notNull(this.wrapWidth);
    }
    get isCurrentLineEmpty() {
      return this[_currentLine].isEmpty;
    }
    [_finalizeLine](addTrailingLineBreak) {
      let firstLine = this[_buffer$].isEmpty;
      let text = dart.toString(this[_currentLine]);
      this[_currentLine].clear();
      if (dart.test(this[_wrappableRanges][$isEmpty])) {
        this[_writeLine](text, {includeLineBreak: addTrailingLineBreak, firstLine: firstLine});
        return;
      }
      let lines = diagnostics$._PrefixedStringBuilder._wordWrapLine(text, this[_wrappableRanges], this.wrapWidth, {startOffset: dart.test(firstLine) ? this.prefixLineOne.length : this[_prefixOtherLines].length, otherLineOffset: dart.test(firstLine) ? this[_prefixOtherLines].length : this[_prefixOtherLines].length});
      let i = 0;
      let length = lines[$length];
      for (let line of lines) {
        i = i + 1;
        this[_writeLine](line, {includeLineBreak: dart.test(addTrailingLineBreak) || i < dart.notNull(length), firstLine: firstLine});
      }
      this[_wrappableRanges][$clear]();
    }
    static _wordWrapLine(message, wrapRanges, width, opts) {
      let startOffset = opts && 'startOffset' in opts ? opts.startOffset : 0;
      let otherLineOffset = opts && 'otherLineOffset' in opts ? opts.otherLineOffset : 0;
      return new (SyncIterableOfString()).new(function* _wordWrapLine() {
        if (message.length + dart.notNull(startOffset) < dart.notNull(width)) {
          yield message;
          return;
        }
        let startForLengthCalculations = -dart.notNull(startOffset);
        let addPrefix = false;
        let index = 0;
        let mode = diagnostics$._WordWrapParseMode.inSpace;
        let lastWordStart = null;
        let lastWordEnd = null;
        let start = 0;
        let currentChunk = 0;
        function noWrap(index) {
          while (true) {
            if (currentChunk >= dart.notNull(wrapRanges[$length])) return true;
            if (dart.notNull(index) < dart.notNull(wrapRanges[$_get](currentChunk + 1))) break;
            currentChunk = currentChunk + 2;
          }
          return dart.notNull(index) < dart.notNull(wrapRanges[$_get](currentChunk));
        }
        dart.fn(noWrap, intTobool());
        while (true) {
          switch (mode) {
            case C32 || CT.C32:
            {
              while (index < message.length && message[$_get](index) === " ")
                index = index + 1;
              lastWordStart = index;
              mode = diagnostics$._WordWrapParseMode.inWord;
              break;
            }
            case C33 || CT.C33:
            {
              while (index < message.length && (message[$_get](index) !== " " || dart.test(noWrap(index))))
                index = index + 1;
              mode = diagnostics$._WordWrapParseMode.atBreak;
              break;
            }
            case C34 || CT.C34:
            {
              if (index - startForLengthCalculations > dart.notNull(width) || index === message.length) {
                if (index - startForLengthCalculations <= dart.notNull(width) || lastWordEnd == null) {
                  lastWordEnd = index;
                }
                let line = message[$substring](start, lastWordEnd);
                yield line;
                addPrefix = true;
                if (dart.notNull(lastWordEnd) >= message.length) return;
                if (lastWordEnd === index) {
                  while (index < message.length && message[$_get](index) === " ")
                    index = index + 1;
                  start = index;
                  mode = diagnostics$._WordWrapParseMode.inWord;
                } else {
                  if (!(dart.notNull(lastWordStart) > dart.notNull(lastWordEnd))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 933, 22, "lastWordStart > lastWordEnd");
                  start = lastWordStart;
                  mode = diagnostics$._WordWrapParseMode.atBreak;
                }
                startForLengthCalculations = dart.notNull(start) - dart.notNull(otherLineOffset);
                if (!addPrefix) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 938, 20, "addPrefix");
                lastWordEnd = null;
              } else {
                lastWordEnd = index;
                mode = diagnostics$._WordWrapParseMode.inSpace;
              }
              break;
            }
          }
        }
      });
    }
    write(s, opts) {
      let t0;
      let allowWrap = opts && 'allowWrap' in opts ? opts.allowWrap : false;
      if (s[$isEmpty]) return;
      let lines = s[$split]("\n");
      for (let i = 0; i < dart.notNull(lines[$length]); i = i + 1) {
        if (i > 0) {
          this[_finalizeLine](true);
          this[_updatePrefix]();
        }
        let line = lines[$_get](i);
        if (line[$isNotEmpty]) {
          if (dart.test(allowWrap) && this.wrapWidth != null) {
            let wrapStart = this[_currentLine].length;
            let wrapEnd = dart.notNull(wrapStart) + line.length;
            if (dart.test(this[_wrappableRanges][$isNotEmpty]) && this[_wrappableRanges][$last] == wrapStart) {
              this[_wrappableRanges][$last] = wrapEnd;
            } else {
              t0 = this[_wrappableRanges];
              t0[$add](wrapStart);
              t0[$add](wrapEnd);
              t0;
            }
          }
          this[_currentLine].write(line);
        }
      }
    }
    [_updatePrefix]() {
      if (this[_nextPrefixOtherLines] != null) {
        this[_prefixOtherLines] = this[_nextPrefixOtherLines];
        this[_nextPrefixOtherLines] = null;
      }
    }
    [_writeLine](line, opts) {
      let includeLineBreak = opts && 'includeLineBreak' in opts ? opts.includeLineBreak : null;
      let firstLine = opts && 'firstLine' in opts ? opts.firstLine : null;
      line = dart.str(this[_getCurrentPrefix](firstLine)) + dart.str(line);
      this[_buffer$].write(line[$trimRight]());
      if (dart.test(includeLineBreak)) this[_buffer$].write("\n");
      this[_numLines] = dart.notNull(this[_numLines]) + 1;
    }
    [_getCurrentPrefix](firstLine) {
      return dart.test(this[_buffer$].isEmpty) ? this.prefixLineOne : dart.test(firstLine) ? this[_prefixOtherLines] : this[_prefixOtherLines];
    }
    writeRawLines(lines) {
      if (lines[$isEmpty]) return;
      if (dart.test(this[_currentLine].isNotEmpty)) {
        this[_finalizeLine](true);
      }
      if (!dart.test(this[_currentLine].isEmpty)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 1014, 13, "_currentLine.isEmpty");
      this[_buffer$].write(lines);
      if (!lines[$endsWith]("\n")) this[_buffer$].write("\n");
      this[_numLines] = dart.notNull(this[_numLines]) + 1;
      this[_updatePrefix]();
    }
    writeStretched(text, targetLineLength) {
      this.write(text);
      let currentLineLength = dart.notNull(this[_currentLine].length) + this[_getCurrentPrefix](this[_buffer$].isEmpty).length;
      if (!(dart.notNull(this[_currentLine].length) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 1027, 13, "_currentLine.length > 0");
      let targetLength = dart.notNull(targetLineLength) - currentLineLength;
      if (targetLength > 0) {
        if (!text[$isNotEmpty]) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 1030, 14, "text.isNotEmpty");
        let lastChar = text[$_get](text.length - 1);
        if (!(lastChar !== "\n")) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 1032, 14, "lastChar != '\\n'");
        this[_currentLine].write(lastChar[$times](targetLength));
      }
      this[_wrappableRanges][$clear]();
    }
    build() {
      if (dart.test(this[_currentLine].isNotEmpty)) this[_finalizeLine](false);
      return dart.toString(this[_buffer$]);
    }
  };
  (diagnostics$._PrefixedStringBuilder.new = function(opts) {
    let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : null;
    let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
    let wrapWidth = opts && 'wrapWidth' in opts ? opts.wrapWidth : null;
    this[_nextPrefixOtherLines] = null;
    this[_buffer$] = new core.StringBuffer.new();
    this[_currentLine] = new core.StringBuffer.new();
    this[_wrappableRanges] = JSArrayOfint().of([]);
    this[_numLines] = 0;
    this.prefixLineOne = prefixLineOne;
    this.wrapWidth = wrapWidth;
    this[_prefixOtherLines] = prefixOtherLines;
    ;
  }).prototype = diagnostics$._PrefixedStringBuilder.prototype;
  dart.addTypeTests(diagnostics$._PrefixedStringBuilder);
  dart.setMethodSignature(diagnostics$._PrefixedStringBuilder, () => ({
    __proto__: dart.getMethods(diagnostics$._PrefixedStringBuilder.__proto__),
    incrementPrefixOtherLines: dart.fnType(dart.void, [core.String], {updateCurrentLine: core.bool}, {}),
    [_finalizeLine]: dart.fnType(dart.void, [core.bool]),
    write: dart.fnType(dart.void, [core.String], {allowWrap: core.bool}, {}),
    [_updatePrefix]: dart.fnType(dart.void, []),
    [_writeLine]: dart.fnType(dart.void, [core.String], {firstLine: core.bool, includeLineBreak: core.bool}, {}),
    [_getCurrentPrefix]: dart.fnType(core.String, [core.bool]),
    writeRawLines: dart.fnType(dart.void, [core.String]),
    writeStretched: dart.fnType(dart.void, [core.String, core.int]),
    build: dart.fnType(core.String, [])
  }));
  dart.setGetterSignature(diagnostics$._PrefixedStringBuilder, () => ({
    __proto__: dart.getGetters(diagnostics$._PrefixedStringBuilder.__proto__),
    prefixOtherLines: core.String,
    requiresMultipleLines: core.bool,
    isCurrentLineEmpty: core.bool
  }));
  dart.setSetterSignature(diagnostics$._PrefixedStringBuilder, () => ({
    __proto__: dart.getSetters(diagnostics$._PrefixedStringBuilder.__proto__),
    prefixOtherLines: core.String
  }));
  dart.setLibraryUri(diagnostics$._PrefixedStringBuilder, "package:flutter/src/foundation/diagnostics.dart");
  dart.setFieldSignature(diagnostics$._PrefixedStringBuilder, () => ({
    __proto__: dart.getFields(diagnostics$._PrefixedStringBuilder.__proto__),
    prefixLineOne: dart.finalFieldType(core.String),
    [_prefixOtherLines]: dart.fieldType(core.String),
    [_nextPrefixOtherLines]: dart.fieldType(core.String),
    wrapWidth: dart.finalFieldType(core.int),
    [_buffer$]: dart.finalFieldType(core.StringBuffer),
    [_currentLine]: dart.finalFieldType(core.StringBuffer),
    [_wrappableRanges]: dart.finalFieldType(core.List$(core.int)),
    [_numLines]: dart.fieldType(core.int)
  }));
  diagnostics$._NoDefaultValue = class _NoDefaultValue extends core.Object {};
  (diagnostics$._NoDefaultValue.new = function() {
    ;
  }).prototype = diagnostics$._NoDefaultValue.prototype;
  dart.addTypeTests(diagnostics$._NoDefaultValue);
  dart.setLibraryUri(diagnostics$._NoDefaultValue, "package:flutter/src/foundation/diagnostics.dart");
  var _minLevel = dart.privateName(diagnostics$, "_minLevel");
  var _wrapWidth = dart.privateName(diagnostics$, "_wrapWidth");
  var _wrapWidthProperties = dart.privateName(diagnostics$, "_wrapWidthProperties");
  var _maxDescendentsTruncatableNode = dart.privateName(diagnostics$, "_maxDescendentsTruncatableNode");
  var _childTextConfiguration = dart.privateName(diagnostics$, "_childTextConfiguration");
  diagnostics$.TextTreeRenderer = class TextTreeRenderer extends core.Object {
    [_childTextConfiguration](child, textStyle) {
      let t0;
      let childStyle = (t0 = child, t0 == null ? null : t0.style);
      return dart.test(diagnostics$._isSingleLine(childStyle)) || dart.equals(childStyle, diagnostics$.DiagnosticsTreeStyle.errorProperty) ? textStyle : child.textTreeConfiguration;
    }
    render(node, opts) {
      let t0, t0$, t0$0;
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      if (false) {
        return "";
      }
      let isSingleLine = dart.test(diagnostics$._isSingleLine(node.style)) && !dart.equals((t0 = parentConfiguration, t0 == null ? null : t0.lineBreakProperties), true);
      prefixOtherLines == null ? prefixOtherLines = prefixLineOne : null;
      if (node.linePrefix != null) {
        prefixLineOne = dart.notNull(prefixLineOne) + dart.notNull(node.linePrefix);
        prefixOtherLines = dart.notNull(prefixOtherLines) + dart.notNull(node.linePrefix);
      }
      let config = node.textTreeConfiguration;
      if (prefixOtherLines[$isEmpty]) prefixOtherLines = dart.notNull(prefixOtherLines) + dart.notNull(config.prefixOtherLinesRootNode);
      if (dart.equals(node.style, diagnostics$.DiagnosticsTreeStyle.truncateChildren)) {
        let descendants = JSArrayOfString().of([]);
        let depth = 0;
        let lines = 0;
        function visitor(node) {
          for (let child of node.getChildren()) {
            if (lines < 25) {
              depth = depth + 1;
              descendants[$add](dart.str(prefixOtherLines) + "  "[$times](depth) + dart.str(child));
              if (depth < 5) visitor(child);
              depth = depth - 1;
            } else if (lines === 25) {
              descendants[$add](dart.str(prefixOtherLines) + "  ...(descendants list truncated after " + dart.str(lines) + " lines)");
            }
            lines = lines + 1;
          }
        }
        dart.fn(visitor, DiagnosticsNodeTovoid());
        visitor(node);
        let information = new core.StringBuffer.new(prefixLineOne);
        if (lines > 1) {
          information.writeln("This " + dart.str(node.name) + " had the following descendants (showing up to depth " + dart.str(5) + "):");
        } else if (descendants[$length] === 1) {
          information.writeln("This " + dart.str(node.name) + " had the following child:");
        } else {
          information.writeln("This " + dart.str(node.name) + " has no descendants.");
        }
        information.writeAll(descendants, "\n");
        return information.toString();
      }
      let builder = new diagnostics$._PrefixedStringBuilder.new({prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, wrapWidth: math.max(core.int, this[_wrapWidth], prefixOtherLines.length + dart.notNull(this[_wrapWidthProperties]))});
      let children = node.getChildren();
      let description = node.toDescription({parentConfiguration: parentConfiguration});
      if (config.beforeName[$isNotEmpty]) {
        builder.write(config.beforeName);
      }
      let wrapName = !isSingleLine && dart.test(node.allowNameWrap);
      let wrapDescription = !isSingleLine && dart.test(node.allowWrap);
      let uppercaseTitle = dart.equals(node.style, diagnostics$.DiagnosticsTreeStyle.error);
      let name = node.name;
      if (uppercaseTitle) {
        name = (t0$ = name, t0$ == null ? null : t0$[$toUpperCase]());
      }
      if (description == null || description[$isEmpty]) {
        if (dart.test(node.showName) && name != null) builder.write(name, {allowWrap: wrapName});
      } else {
        let includeName = false;
        if (name != null && name[$isNotEmpty] && dart.test(node.showName)) {
          includeName = true;
          builder.write(name, {allowWrap: wrapName});
          if (dart.test(node.showSeparator)) builder.write(config.afterName, {allowWrap: wrapName});
          builder.write(dart.test(config.isNameOnOwnLine) || description[$contains]("\n") ? "\n" : " ", {allowWrap: wrapName});
        }
        if (!isSingleLine && dart.test(builder.requiresMultipleLines) && !dart.test(builder.isCurrentLineEmpty)) {
          builder.write("\n");
        }
        if (includeName) {
          builder.incrementPrefixOtherLines(dart.test(children[$isEmpty]) ? config.propertyPrefixNoChildren : config.propertyPrefixIfChildren, {updateCurrentLine: true});
        }
        if (uppercaseTitle) {
          description = description[$toUpperCase]();
        }
        builder.write(description[$trimRight](), {allowWrap: wrapDescription});
        if (!includeName) {
          builder.incrementPrefixOtherLines(dart.test(children[$isEmpty]) ? config.propertyPrefixNoChildren : config.propertyPrefixIfChildren, {updateCurrentLine: false});
        }
      }
      if (config.suffixLineOne[$isNotEmpty]) {
        builder.writeStretched(config.suffixLineOne, builder.wrapWidth);
      }
      let propertiesIterable = node.getProperties()[$where](dart.fn(n => !dart.test(n.isFiltered(this[_minLevel])), DiagnosticsNodeTobool()));
      let properties = null;
      if (dart.notNull(this[_maxDescendentsTruncatableNode]) >= 0 && dart.test(node.allowTruncate)) {
        if (dart.notNull(propertiesIterable[$length]) < dart.notNull(this[_maxDescendentsTruncatableNode])) {
          properties = propertiesIterable[$take](this[_maxDescendentsTruncatableNode])[$toList]();
          properties[$add](diagnostics$.DiagnosticsNode.message("..."));
        } else {
          properties = propertiesIterable[$toList]();
        }
        if (dart.notNull(this[_maxDescendentsTruncatableNode]) < dart.notNull(children[$length])) {
          children = children[$take](this[_maxDescendentsTruncatableNode])[$toList]();
          children[$add](diagnostics$.DiagnosticsNode.message("..."));
        }
      } else {
        properties = propertiesIterable[$toList]();
      }
      if ((dart.test(properties[$isNotEmpty]) || dart.test(children[$isNotEmpty]) || node.emptyBodyDescription != null) && (dart.test(node.showSeparator) || dart.equals((t0$0 = description, t0$0 == null ? null : t0$0[$isNotEmpty]), true))) {
        builder.write(config.afterDescriptionIfBody);
      }
      if (dart.test(config.lineBreakProperties)) builder.write(config.lineBreak);
      if (dart.test(properties[$isNotEmpty])) builder.write(config.beforeProperties);
      builder.incrementPrefixOtherLines(config.bodyIndent, {updateCurrentLine: false});
      if (node.emptyBodyDescription != null && dart.test(properties[$isEmpty]) && dart.test(children[$isEmpty]) && prefixLineOne[$isNotEmpty]) {
        builder.write(node.emptyBodyDescription);
        if (dart.test(config.lineBreakProperties)) builder.write(config.lineBreak);
      }
      for (let i = 0; i < dart.notNull(properties[$length]); i = i + 1) {
        let property = properties[$_get](i);
        if (i > 0) builder.write(config.propertySeparator);
        let propertyStyle = property.textTreeConfiguration;
        if (dart.test(diagnostics$._isSingleLine(property.style))) {
          let propertyRender = this.render(property, {prefixLineOne: propertyStyle.prefixLineOne, prefixOtherLines: dart.str(propertyStyle.childLinkSpace) + dart.str(propertyStyle.prefixOtherLines), parentConfiguration: config});
          let propertyLines = propertyRender[$split]("\n");
          if (propertyLines[$length] === 1 && !dart.test(config.lineBreakProperties)) {
            builder.write(propertyLines[$first]);
          } else {
            builder.write(propertyRender, {allowWrap: false});
            if (!propertyRender[$endsWith]("\n")) builder.write("\n");
          }
        } else {
          let propertyRender = this.render(property, {prefixLineOne: dart.str(builder.prefixOtherLines) + dart.str(propertyStyle.prefixLineOne), prefixOtherLines: dart.str(builder.prefixOtherLines) + dart.str(propertyStyle.childLinkSpace) + dart.str(propertyStyle.prefixOtherLines), parentConfiguration: config});
          builder.writeRawLines(propertyRender);
        }
      }
      if (dart.test(properties[$isNotEmpty])) builder.write(config.afterProperties);
      builder.write(config.mandatoryAfterProperties);
      if (!dart.test(config.lineBreakProperties)) builder.write(config.lineBreak);
      let prefixChildren = config.bodyIndent;
      let prefixChildrenRaw = dart.str(prefixOtherLines) + dart.str(prefixChildren);
      if (dart.test(children[$isEmpty]) && dart.test(config.addBlankLineIfNoChildren) && dart.test(builder.requiresMultipleLines) && builder.prefixOtherLines[$trimRight]()[$isNotEmpty]) {
        builder.write(config.lineBreak);
      }
      if (dart.test(children[$isNotEmpty]) && dart.test(config.showChildren)) {
        if (dart.test(config.isBlankLineBetweenPropertiesAndChildren) && dart.test(properties[$isNotEmpty]) && dart.test(children[$first].textTreeConfiguration.isBlankLineBetweenPropertiesAndChildren)) {
          builder.write(config.lineBreak);
        }
        builder.prefixOtherLines = prefixOtherLines;
        for (let i = 0; i < dart.notNull(children[$length]); i = i + 1) {
          let child = children[$_get](i);
          if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 1330, 16, "child != null");
          let childConfig = this[_childTextConfiguration](child, config);
          if (i === dart.notNull(children[$length]) - 1) {
            let lastChildPrefixLineOne = prefixChildrenRaw + dart.str(childConfig.prefixLastChildLineOne);
            let childPrefixOtherLines = prefixChildrenRaw + dart.str(childConfig.childLinkSpace) + dart.str(childConfig.prefixOtherLines);
            builder.writeRawLines(this.render(child, {prefixLineOne: lastChildPrefixLineOne, prefixOtherLines: childPrefixOtherLines, parentConfiguration: config}));
            if (childConfig.footer[$isNotEmpty]) {
              builder.prefixOtherLines = prefixChildrenRaw;
              builder.write(dart.str(childConfig.childLinkSpace) + dart.str(childConfig.footer));
              if (childConfig.manditoryFooter[$isNotEmpty]) {
                builder.writeStretched(childConfig.manditoryFooter, math.max(core.int, builder.wrapWidth, dart.notNull(this[_wrapWidthProperties]) + childPrefixOtherLines.length));
              }
              builder.write(config.lineBreak);
            }
          } else {
            let nextChildStyle = this[_childTextConfiguration](children[$_get](i + 1), config);
            let childPrefixLineOne = prefixChildrenRaw + dart.str(childConfig.prefixLineOne);
            let childPrefixOtherLines = prefixChildrenRaw + dart.str(nextChildStyle.linkCharacter) + dart.str(childConfig.prefixOtherLines);
            builder.writeRawLines(this.render(child, {prefixLineOne: childPrefixLineOne, prefixOtherLines: childPrefixOtherLines, parentConfiguration: config}));
            if (childConfig.footer[$isNotEmpty]) {
              builder.prefixOtherLines = prefixChildrenRaw;
              builder.write(dart.str(childConfig.linkCharacter) + dart.str(childConfig.footer));
              if (childConfig.manditoryFooter[$isNotEmpty]) {
                builder.writeStretched(childConfig.manditoryFooter, math.max(core.int, builder.wrapWidth, dart.notNull(this[_wrapWidthProperties]) + childPrefixOtherLines.length));
              }
              builder.write(config.lineBreak);
            }
          }
        }
      }
      if (parentConfiguration == null && config.manditoryFooter[$isNotEmpty]) {
        builder.writeStretched(config.manditoryFooter, builder.wrapWidth);
        builder.write(config.lineBreak);
      }
      return builder.build();
    }
  };
  (diagnostics$.TextTreeRenderer.new = function(opts) {
    let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C11 || CT.C11;
    let wrapWidth = opts && 'wrapWidth' in opts ? opts.wrapWidth : 100;
    let wrapWidthProperties = opts && 'wrapWidthProperties' in opts ? opts.wrapWidthProperties : 65;
    let maxDescendentsTruncatableNode = opts && 'maxDescendentsTruncatableNode' in opts ? opts.maxDescendentsTruncatableNode : -1;
    if (!(minLevel != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 1081, 15, "minLevel != null");
    this[_minLevel] = minLevel;
    this[_wrapWidth] = wrapWidth;
    this[_wrapWidthProperties] = wrapWidthProperties;
    this[_maxDescendentsTruncatableNode] = maxDescendentsTruncatableNode;
    ;
  }).prototype = diagnostics$.TextTreeRenderer.prototype;
  dart.addTypeTests(diagnostics$.TextTreeRenderer);
  dart.setMethodSignature(diagnostics$.TextTreeRenderer, () => ({
    __proto__: dart.getMethods(diagnostics$.TextTreeRenderer.__proto__),
    [_childTextConfiguration]: dart.fnType(diagnostics$.TextTreeConfiguration, [diagnostics$.DiagnosticsNode, diagnostics$.TextTreeConfiguration]),
    render: dart.fnType(core.String, [diagnostics$.DiagnosticsNode], {parentConfiguration: diagnostics$.TextTreeConfiguration, prefixLineOne: core.String, prefixOtherLines: core.String}, {})
  }));
  dart.setLibraryUri(diagnostics$.TextTreeRenderer, "package:flutter/src/foundation/diagnostics.dart");
  dart.setFieldSignature(diagnostics$.TextTreeRenderer, () => ({
    __proto__: dart.getFields(diagnostics$.TextTreeRenderer.__proto__),
    [_wrapWidth]: dart.finalFieldType(core.int),
    [_wrapWidthProperties]: dart.finalFieldType(core.int),
    [_minLevel]: dart.finalFieldType(diagnostics$.DiagnosticLevel),
    [_maxDescendentsTruncatableNode]: dart.finalFieldType(core.int)
  }));
  var _separator = dart.privateName(diagnostics$, "_separator");
  var C36;
  var name$ = dart.privateName(diagnostics$, "DiagnosticsNode.name");
  var showSeparator$ = dart.privateName(diagnostics$, "DiagnosticsNode.showSeparator");
  var showName$ = dart.privateName(diagnostics$, "DiagnosticsNode.showName");
  var linePrefix$ = dart.privateName(diagnostics$, "DiagnosticsNode.linePrefix");
  var style$ = dart.privateName(diagnostics$, "DiagnosticsNode.style");
  diagnostics$.DiagnosticsNode = class DiagnosticsNode extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get showSeparator() {
      return this[showSeparator$];
    }
    set showSeparator(value) {
      super.showSeparator = value;
    }
    get showName() {
      return this[showName$];
    }
    set showName(value) {
      super.showName = value;
    }
    get linePrefix() {
      return this[linePrefix$];
    }
    set linePrefix(value) {
      super.linePrefix = value;
    }
    get style() {
      return this[style$];
    }
    set style(value) {
      super.style = value;
    }
    static message(message, opts) {
      let style = opts && 'style' in opts ? opts.style : C27 || CT.C27;
      let level = opts && 'level' in opts ? opts.level : C12 || CT.C12;
      let allowWrap = opts && 'allowWrap' in opts ? opts.allowWrap : true;
      if (!(style != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 1432, 12, "style != null");
      if (!(level != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 1433, 12, "level != null");
      return new (DiagnosticsPropertyOfvoid()).new("", null, {description: message, style: style, showName: false, allowWrap: allowWrap, level: level});
    }
    isFiltered(minLevel) {
      return false || dart.notNull(this.level.index) < dart.notNull(minLevel.index);
    }
    get level() {
      return false ? diagnostics$.DiagnosticLevel.hidden : diagnostics$.DiagnosticLevel.info;
    }
    get emptyBodyDescription() {
      return null;
    }
    get allowWrap() {
      return false;
    }
    get allowNameWrap() {
      return false;
    }
    get allowTruncate() {
      return false;
    }
    get [_separator]() {
      return dart.test(this.showSeparator) ? ":" : "";
    }
    toJsonMap(delegate) {
      let t1;
      if (false) {
        return new (IdentityMapOfString$Object()).new();
      }
      let hasChildren = this.getChildren()[$isNotEmpty];
      return (() => {
        let t0 = new (IdentityMapOfString$Object()).new();
        t0[$_set]("description", this.toDescription());
        t0[$_set]("type", dart.toString(this[$runtimeType]));
        if (this.name != null) t0[$_set]("name", this.name);
        if (!dart.test(this.showSeparator)) t0[$_set]("showSeparator", this.showSeparator);
        if (!dart.equals(this.level, diagnostics$.DiagnosticLevel.info)) t0[$_set]("level", diagnostics$.describeEnum(this.level));
        if (dart.equals(this.showName, false)) t0[$_set]("showName", this.showName);
        if (this.emptyBodyDescription != null) t0[$_set]("emptyBodyDescription", this.emptyBodyDescription);
        if (!dart.equals(this.style, diagnostics$.DiagnosticsTreeStyle.sparse)) t0[$_set]("style", diagnostics$.describeEnum(this.style));
        if (dart.test(this.allowTruncate)) t0[$_set]("allowTruncate", this.allowTruncate);
        if (dart.test(hasChildren)) t0[$_set]("hasChildren", hasChildren);
        if (dart.equals((t1 = this.linePrefix, t1 == null ? null : t1[$isNotEmpty]), true)) t0[$_set]("linePrefix", this.linePrefix);
        if (!dart.test(this.allowWrap)) t0[$_set]("allowWrap", this.allowWrap);
        if (dart.test(this.allowNameWrap)) t0[$_set]("allowNameWrap", this.allowNameWrap);
        for (let t1$ of delegate.additionalNodeProperties(this)[$entries])
          t0[$_set](t1$.key, t1$.value);
        if (dart.test(delegate.includeProperties)) t0[$_set]("properties", diagnostics$.DiagnosticsNode.toJsonList(delegate.filterProperties(this.getProperties(), this), this, delegate));
        if (dart.notNull(delegate.subtreeDepth) > 0) t0[$_set]("children", diagnostics$.DiagnosticsNode.toJsonList(delegate.filterChildren(this.getChildren(), this), this, delegate));
        return t0;
      })();
    }
    static toJsonList(nodes, parent, delegate) {
      let truncated = false;
      if (nodes == null) return C36 || CT.C36;
      let originalNodeCount = nodes[$length];
      nodes = delegate.truncateNodesList(nodes, parent);
      if (nodes[$length] != originalNodeCount) {
        nodes[$add](diagnostics$.DiagnosticsNode.message("..."));
        truncated = true;
      }
      let json = nodes[$map](MapOfString$Object(), dart.fn(node => node.toJsonMap(delegate.delegateForNode(node)), DiagnosticsNodeToMapOfString$Object()))[$toList]();
      if (truncated) json[$last][$_set]("truncated", true);
      return json;
    }
    toString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C12 || CT.C12;
      if (false) {
        return super[$toString]();
      }
      if (!(this.style != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 1628, 12, "style != null");
      if (!(minLevel != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 1629, 12, "minLevel != null");
      if (dart.test(diagnostics$._isSingleLine(this.style))) return this.toStringDeep({parentConfiguration: parentConfiguration, minLevel: minLevel});
      let description = this.toDescription({parentConfiguration: parentConfiguration});
      if (!(description != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 1634, 12, "description != null");
      if (this.name == null || this.name[$isEmpty] || !dart.test(this.showName)) return description;
      return description[$contains]("\n") ? dart.str(this.name) + dart.str(this[_separator]) + "\n" + dart.str(description) : dart.str(this.name) + dart.str(this[_separator]) + " " + dart.str(description);
    }
    get textTreeConfiguration() {
      if (!(this.style != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 1647, 12, "style != null");
      switch (this.style) {
        case C19 || CT.C19:
        {
          return null;
        }
        case C22 || CT.C22:
        {
          return diagnostics$.denseTextConfiguration;
        }
        case C20 || CT.C20:
        {
          return diagnostics$.sparseTextConfiguration;
        }
        case C21 || CT.C21:
        {
          return diagnostics$.dashedTextConfiguration;
        }
        case C25 || CT.C25:
        {
          return diagnostics$.whitespaceTextConfiguration;
        }
        case C23 || CT.C23:
        {
          return diagnostics$.transitionTextConfiguration;
        }
        case C27 || CT.C27:
        {
          return diagnostics$.singleLineTextConfiguration;
        }
        case C28 || CT.C28:
        {
          return diagnostics$.errorPropertyTextConfiguration;
        }
        case C29 || CT.C29:
        {
          return diagnostics$.shallowTextConfiguration;
        }
        case C24 || CT.C24:
        {
          return diagnostics$.errorTextConfiguration;
        }
        case C30 || CT.C30:
        {
          return diagnostics$.whitespaceTextConfiguration;
        }
        case C26 || CT.C26:
        {
          return diagnostics$.flatTextConfiguration;
        }
      }
      return null;
    }
    toStringDeep(opts) {
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C11 || CT.C11;
      if (false) {
        return "";
      }
      return new diagnostics$.TextTreeRenderer.new({minLevel: minLevel, wrapWidth: 65, wrapWidthProperties: 65}).render(this, {prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, parentConfiguration: parentConfiguration});
    }
  };
  (diagnostics$.DiagnosticsNode.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
    let linePrefix = opts && 'linePrefix' in opts ? opts.linePrefix : null;
    this[name$] = name;
    this[style$] = style;
    this[showName$] = showName;
    this[showSeparator$] = showSeparator;
    this[linePrefix$] = linePrefix;
    if (!(showName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 1405, 15, "showName != null");
    if (!(showSeparator != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 1406, 15, "showSeparator != null");
    if (!(name == null || !name[$endsWith](":"))) dart.assertFailed("Names of diagnostic nodes must not end with colons.\n" + "name:\n" + "  \"" + dart.str(name) + "\"", "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 1411, 10, "name == null || !name.endsWith(':')");
    ;
  }).prototype = diagnostics$.DiagnosticsNode.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticsNode);
  dart.setMethodSignature(diagnostics$.DiagnosticsNode, () => ({
    __proto__: dart.getMethods(diagnostics$.DiagnosticsNode.__proto__),
    isFiltered: dart.fnType(core.bool, [diagnostics$.DiagnosticLevel]),
    toJsonMap: dart.fnType(core.Map$(core.String, core.Object), [diagnostics$.DiagnosticsSerializationDelegate]),
    toString: dart.fnType(core.String, [], {minLevel: diagnostics$.DiagnosticLevel, parentConfiguration: diagnostics$.TextTreeConfiguration}, {}),
    [$toString]: dart.fnType(core.String, [], {minLevel: diagnostics$.DiagnosticLevel, parentConfiguration: diagnostics$.TextTreeConfiguration}, {}),
    toStringDeep: dart.fnType(core.String, [], {minLevel: diagnostics$.DiagnosticLevel, parentConfiguration: diagnostics$.TextTreeConfiguration, prefixLineOne: core.String, prefixOtherLines: core.String}, {})
  }));
  dart.setGetterSignature(diagnostics$.DiagnosticsNode, () => ({
    __proto__: dart.getGetters(diagnostics$.DiagnosticsNode.__proto__),
    level: diagnostics$.DiagnosticLevel,
    emptyBodyDescription: core.String,
    allowWrap: core.bool,
    allowNameWrap: core.bool,
    allowTruncate: core.bool,
    [_separator]: core.String,
    textTreeConfiguration: diagnostics$.TextTreeConfiguration
  }));
  dart.setLibraryUri(diagnostics$.DiagnosticsNode, "package:flutter/src/foundation/diagnostics.dart");
  dart.setFieldSignature(diagnostics$.DiagnosticsNode, () => ({
    __proto__: dart.getFields(diagnostics$.DiagnosticsNode.__proto__),
    name: dart.finalFieldType(core.String),
    showSeparator: dart.finalFieldType(core.bool),
    showName: dart.finalFieldType(core.bool),
    linePrefix: dart.finalFieldType(core.String),
    style: dart.finalFieldType(diagnostics$.DiagnosticsTreeStyle)
  }));
  dart.defineExtensionMethods(diagnostics$.DiagnosticsNode, ['toString']);
  var C37;
  var _exception = dart.privateName(diagnostics$, "_exception");
  var _description = dart.privateName(diagnostics$, "_description");
  var _valueComputed = dart.privateName(diagnostics$, "_valueComputed");
  var _value = dart.privateName(diagnostics$, "_value");
  var _computeValue = dart.privateName(diagnostics$, "_computeValue");
  var _defaultLevel = dart.privateName(diagnostics$, "_defaultLevel");
  var _addTooltip = dart.privateName(diagnostics$, "_addTooltip");
  var _maybeCacheValue = dart.privateName(diagnostics$, "_maybeCacheValue");
  var C38;
  const _is_DiagnosticsProperty_default = Symbol('_is_DiagnosticsProperty_default');
  var expandableValue$ = dart.privateName(diagnostics$, "DiagnosticsProperty.expandableValue");
  var allowWrap$ = dart.privateName(diagnostics$, "DiagnosticsProperty.allowWrap");
  var allowNameWrap$ = dart.privateName(diagnostics$, "DiagnosticsProperty.allowNameWrap");
  var ifNull$ = dart.privateName(diagnostics$, "DiagnosticsProperty.ifNull");
  var ifEmpty$ = dart.privateName(diagnostics$, "DiagnosticsProperty.ifEmpty");
  var tooltip$ = dart.privateName(diagnostics$, "DiagnosticsProperty.tooltip");
  var missingIfNull$ = dart.privateName(diagnostics$, "DiagnosticsProperty.missingIfNull");
  var defaultValue$ = dart.privateName(diagnostics$, "DiagnosticsProperty.defaultValue");
  diagnostics$.DiagnosticsProperty$ = dart.generic(T => {
    class DiagnosticsProperty extends diagnostics$.DiagnosticsNode {
      get expandableValue() {
        return this[expandableValue$];
      }
      set expandableValue(value) {
        super.expandableValue = value;
      }
      get allowWrap() {
        return this[allowWrap$];
      }
      set allowWrap(value) {
        super.allowWrap = value;
      }
      get allowNameWrap() {
        return this[allowNameWrap$];
      }
      set allowNameWrap(value) {
        super.allowNameWrap = value;
      }
      get ifNull() {
        return this[ifNull$];
      }
      set ifNull(value) {
        super.ifNull = value;
      }
      get ifEmpty() {
        return this[ifEmpty$];
      }
      set ifEmpty(value) {
        super.ifEmpty = value;
      }
      get tooltip() {
        return this[tooltip$];
      }
      set tooltip(value) {
        super.tooltip = value;
      }
      get missingIfNull() {
        return this[missingIfNull$];
      }
      set missingIfNull(value) {
        super.missingIfNull = value;
      }
      get defaultValue() {
        return this[defaultValue$];
      }
      set defaultValue(value) {
        super.defaultValue = value;
      }
      toJsonMap(delegate) {
        let v = this.value;
        let properties = null;
        if (dart.test(delegate.expandPropertyValues) && dart.test(delegate.includeProperties) && diagnostics$.DiagnosticableMixin.is(v) && dart.test(this.getProperties()[$isEmpty])) {
          delegate = delegate.copyWith({subtreeDepth: 0, includeProperties: false});
          properties = diagnostics$.DiagnosticsNode.toJsonList(delegate.filterProperties(v.toDiagnosticsNode().getProperties(), this), this, delegate);
        }
        let json = super.toJsonMap(delegate);
        if (properties != null) {
          json[$_set]("properties", properties);
        }
        if (!dart.equals(this.defaultValue, diagnostics$.kNoDefaultValue)) json[$_set]("defaultValue", dart.toString(this.defaultValue));
        if (this.ifEmpty != null) json[$_set]("ifEmpty", this.ifEmpty);
        if (this.ifNull != null) json[$_set]("ifNull", this.ifNull);
        if (this.tooltip != null) json[$_set]("tooltip", this.tooltip);
        json[$_set]("missingIfNull", this.missingIfNull);
        if (this.exception != null) json[$_set]("exception", dart.toString(this.exception));
        json[$_set]("propertyType", dart.toString(this.propertyType));
        json[$_set]("defaultLevel", diagnostics$.describeEnum(this[_defaultLevel]));
        if (diagnostics$.DiagnosticableMixin.is(this.value) || diagnostics$.DiagnosticsNode.is(this.value)) json[$_set]("isDiagnosticableValue", true);
        if (typeof v == 'number') json[$_set]("value", v[$isFinite] ? v : dart.toString(v));
        if (typeof this.value == 'string' || typeof this.value == 'boolean' || this.value == null) json[$_set]("value", this.value);
        return json;
      }
      valueToString(opts) {
        let t2;
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        let v = this.value;
        t2 = diagnostics$.DiagnosticableTree.is(v) ? v.toStringShort() : dart.toString(v);
        return t2 == null ? "" : t2;
      }
      toDescription(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this[_description] != null) return this[_addTooltip](this[_description]);
        if (this.exception != null) return "EXCEPTION (" + dart.str(dart.runtimeType(this.exception)) + ")";
        if (this.ifNull != null && this.value == null) return this[_addTooltip](this.ifNull);
        let result = this.valueToString({parentConfiguration: parentConfiguration});
        if (result[$isEmpty] && this.ifEmpty != null) result = this.ifEmpty;
        return this[_addTooltip](result);
      }
      [_addTooltip](text) {
        if (!(text != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2724, 12, "text != null");
        return this.tooltip == null ? text : dart.str(text) + " (" + dart.str(this.tooltip) + ")";
      }
      get propertyType() {
        return dart.wrapType(T);
      }
      get value() {
        this[_maybeCacheValue]();
        return this[_value];
      }
      get exception() {
        this[_maybeCacheValue]();
        return this[_exception];
      }
      [_maybeCacheValue]() {
        if (dart.test(this[_valueComputed])) return;
        this[_valueComputed] = true;
        if (!(this[_computeValue] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2794, 12, "_computeValue != null");
        try {
          this[_value] = this[_computeValue]();
        } catch (e) {
          let exception = dart.getThrown(e);
          this[_exception] = exception;
          this[_value] = null;
        }
      }
      get level() {
        if (dart.equals(this[_defaultLevel], diagnostics$.DiagnosticLevel.hidden)) return this[_defaultLevel];
        if (this.exception != null) return diagnostics$.DiagnosticLevel.error;
        if (this.value == null && dart.test(this.missingIfNull)) return diagnostics$.DiagnosticLevel.warning;
        if (!dart.equals(this.defaultValue, diagnostics$.kNoDefaultValue) && dart.equals(this.value, this.defaultValue)) return diagnostics$.DiagnosticLevel.fine;
        return this[_defaultLevel];
      }
      getProperties() {
        if (dart.test(this.expandableValue)) {
          let object = this.value;
          if (diagnostics$.DiagnosticsNode.is(object)) {
            return object.getProperties();
          }
          if (diagnostics$.DiagnosticableMixin.is(object)) {
            return object.toDiagnosticsNode({style: this.style}).getProperties();
          }
        }
        return C38 || CT.C38;
      }
      getChildren() {
        if (dart.test(this.expandableValue)) {
          let object = this.value;
          if (diagnostics$.DiagnosticsNode.is(object)) {
            return object.getChildren();
          }
          if (diagnostics$.DiagnosticableMixin.is(object)) {
            return object.toDiagnosticsNode({style: this.style}).getChildren();
          }
        }
        return C38 || CT.C38;
      }
    }
    (DiagnosticsProperty.new = function(name, value, opts) {
      let t2;
      let description = opts && 'description' in opts ? opts.description : null;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C37 || CT.C37;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let missingIfNull = opts && 'missingIfNull' in opts ? opts.missingIfNull : false;
      let linePrefix = opts && 'linePrefix' in opts ? opts.linePrefix : null;
      let expandableValue = opts && 'expandableValue' in opts ? opts.expandableValue : false;
      let allowWrap = opts && 'allowWrap' in opts ? opts.allowWrap : true;
      let allowNameWrap = opts && 'allowNameWrap' in opts ? opts.allowNameWrap : true;
      let style = opts && 'style' in opts ? opts.style : C27 || CT.C27;
      let level = opts && 'level' in opts ? opts.level : C12 || CT.C12;
      this[_exception] = null;
      this[ifEmpty$] = ifEmpty;
      this[defaultValue$] = defaultValue;
      this[tooltip$] = tooltip;
      this[missingIfNull$] = missingIfNull;
      this[expandableValue$] = expandableValue;
      this[allowWrap$] = allowWrap;
      this[allowNameWrap$] = allowNameWrap;
      if (!(showName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2562, 15, "showName != null");
      if (!(showSeparator != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2563, 15, "showSeparator != null");
      if (!(style != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2564, 15, "style != null");
      if (!(level != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2565, 15, "level != null");
      this[_description] = description;
      this[_valueComputed] = true;
      this[_value] = value;
      this[_computeValue] = null;
      this[ifNull$] = (t2 = ifNull, t2 == null ? dart.test(missingIfNull) ? "MISSING" : null : t2);
      this[_defaultLevel] = level;
      DiagnosticsProperty.__proto__.new.call(this, {name: name, showName: showName, showSeparator: showSeparator, style: style, linePrefix: linePrefix});
      ;
    }).prototype = DiagnosticsProperty.prototype;
    (DiagnosticsProperty.lazy = function(name, computeValue, opts) {
      let t2;
      let description = opts && 'description' in opts ? opts.description : null;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C37 || CT.C37;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let missingIfNull = opts && 'missingIfNull' in opts ? opts.missingIfNull : false;
      let expandableValue = opts && 'expandableValue' in opts ? opts.expandableValue : false;
      let allowWrap = opts && 'allowWrap' in opts ? opts.allowWrap : true;
      let allowNameWrap = opts && 'allowNameWrap' in opts ? opts.allowNameWrap : true;
      let style = opts && 'style' in opts ? opts.style : C27 || CT.C27;
      let level = opts && 'level' in opts ? opts.level : C12 || CT.C12;
      this[_exception] = null;
      this[ifEmpty$] = ifEmpty;
      this[defaultValue$] = defaultValue;
      this[tooltip$] = tooltip;
      this[missingIfNull$] = missingIfNull;
      this[expandableValue$] = expandableValue;
      this[allowWrap$] = allowWrap;
      this[allowNameWrap$] = allowNameWrap;
      if (!(showName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2608, 15, "showName != null");
      if (!(showSeparator != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2609, 15, "showSeparator != null");
      if (!(dart.equals(defaultValue, diagnostics$.kNoDefaultValue) || T.is(defaultValue))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2610, 15, "defaultValue == kNoDefaultValue || defaultValue is T");
      if (!(missingIfNull != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2611, 15, "missingIfNull != null");
      if (!(style != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2612, 15, "style != null");
      if (!(level != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2613, 15, "level != null");
      this[_description] = description;
      this[_valueComputed] = false;
      this[_value] = null;
      this[_computeValue] = computeValue;
      this[_defaultLevel] = level;
      this[ifNull$] = (t2 = ifNull, t2 == null ? dart.test(missingIfNull) ? "MISSING" : null : t2);
      DiagnosticsProperty.__proto__.new.call(this, {name: name, showName: showName, showSeparator: showSeparator, style: style});
      ;
    }).prototype = DiagnosticsProperty.prototype;
    dart.addTypeTests(DiagnosticsProperty);
    DiagnosticsProperty.prototype[_is_DiagnosticsProperty_default] = true;
    dart.setMethodSignature(DiagnosticsProperty, () => ({
      __proto__: dart.getMethods(DiagnosticsProperty.__proto__),
      valueToString: dart.fnType(core.String, [], {parentConfiguration: diagnostics$.TextTreeConfiguration}, {}),
      toDescription: dart.fnType(core.String, [], {parentConfiguration: diagnostics$.TextTreeConfiguration}, {}),
      [_addTooltip]: dart.fnType(core.String, [core.String]),
      [_maybeCacheValue]: dart.fnType(dart.void, []),
      getProperties: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), []),
      getChildren: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), [])
    }));
    dart.setGetterSignature(DiagnosticsProperty, () => ({
      __proto__: dart.getGetters(DiagnosticsProperty.__proto__),
      propertyType: core.Type,
      value: T,
      exception: core.Object
    }));
    dart.setLibraryUri(DiagnosticsProperty, "package:flutter/src/foundation/diagnostics.dart");
    dart.setFieldSignature(DiagnosticsProperty, () => ({
      __proto__: dart.getFields(DiagnosticsProperty.__proto__),
      [_description]: dart.finalFieldType(core.String),
      expandableValue: dart.finalFieldType(core.bool),
      allowWrap: dart.finalFieldType(core.bool),
      allowNameWrap: dart.finalFieldType(core.bool),
      ifNull: dart.finalFieldType(core.String),
      ifEmpty: dart.finalFieldType(core.String),
      tooltip: dart.finalFieldType(core.String),
      missingIfNull: dart.finalFieldType(core.bool),
      [_value]: dart.fieldType(T),
      [_valueComputed]: dart.fieldType(core.bool),
      [_exception]: dart.fieldType(core.Object),
      defaultValue: dart.finalFieldType(core.Object),
      [_defaultLevel]: dart.finalFieldType(diagnostics$.DiagnosticLevel),
      [_computeValue]: dart.finalFieldType(dart.fnType(T, []))
    }));
    return DiagnosticsProperty;
  });
  diagnostics$.DiagnosticsProperty = diagnostics$.DiagnosticsProperty$();
  dart.addTypeTests(diagnostics$.DiagnosticsProperty, _is_DiagnosticsProperty_default);
  diagnostics$.MessageProperty = class MessageProperty extends diagnostics$.DiagnosticsProperty$(dart.void) {};
  (diagnostics$.MessageProperty.new = function(name, message, opts) {
    let style = opts && 'style' in opts ? opts.style : C27 || CT.C27;
    let level = opts && 'level' in opts ? opts.level : C12 || CT.C12;
    if (!(name != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 1759, 15, "name != null");
    if (!(message != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 1760, 15, "message != null");
    if (!(style != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 1761, 15, "style != null");
    if (!(level != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 1762, 15, "level != null");
    diagnostics$.MessageProperty.__proto__.new.call(this, name, null, {description: message, style: style, level: level});
    ;
  }).prototype = diagnostics$.MessageProperty.prototype;
  dart.addTypeTests(diagnostics$.MessageProperty);
  dart.setLibraryUri(diagnostics$.MessageProperty, "package:flutter/src/foundation/diagnostics.dart");
  var quoted$ = dart.privateName(diagnostics$, "StringProperty.quoted");
  diagnostics$.StringProperty = class StringProperty extends diagnostics$.DiagnosticsProperty$(core.String) {
    get quoted() {
      return this[quoted$];
    }
    set quoted(value) {
      super.quoted = value;
    }
    toJsonMap(delegate) {
      let json = super.toJsonMap(delegate);
      json[$_set]("quoted", this.quoted);
      return json;
    }
    valueToString(opts) {
      let t3;
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      let text = (t3 = this[_description], t3 == null ? this.value : t3);
      if (parentConfiguration != null && !dart.test(parentConfiguration.lineBreakProperties) && text != null) {
        text = text[$replaceAll]("\n", "\\n");
      }
      if (dart.test(this.quoted) && text != null) {
        if (this.ifEmpty != null && text[$isEmpty]) return this.ifEmpty;
        return "\"" + dart.str(text) + "\"";
      }
      return dart.toString(text);
    }
  };
  (diagnostics$.StringProperty.new = function(name, value, opts) {
    let description = opts && 'description' in opts ? opts.description : null;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C37 || CT.C37;
    let quoted = opts && 'quoted' in opts ? opts.quoted : true;
    let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
    let style = opts && 'style' in opts ? opts.style : C27 || CT.C27;
    let level = opts && 'level' in opts ? opts.level : C12 || CT.C12;
    this[quoted$] = quoted;
    if (!(showName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 1787, 15, "showName != null");
    if (!(quoted != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 1788, 15, "quoted != null");
    if (!(style != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 1789, 15, "style != null");
    if (!(level != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 1790, 15, "level != null");
    diagnostics$.StringProperty.__proto__.new.call(this, name, value, {description: description, defaultValue: defaultValue, tooltip: tooltip, showName: showName, ifEmpty: ifEmpty, style: style, level: level});
    ;
  }).prototype = diagnostics$.StringProperty.prototype;
  dart.addTypeTests(diagnostics$.StringProperty);
  dart.setLibraryUri(diagnostics$.StringProperty, "package:flutter/src/foundation/diagnostics.dart");
  dart.setFieldSignature(diagnostics$.StringProperty, () => ({
    __proto__: dart.getFields(diagnostics$.StringProperty.__proto__),
    quoted: dart.finalFieldType(core.bool)
  }));
  const _is__NumProperty_default = Symbol('_is__NumProperty_default');
  var unit$ = dart.privateName(diagnostics$, "_NumProperty.unit");
  diagnostics$._NumProperty$ = dart.generic(T => {
    class _NumProperty extends diagnostics$.DiagnosticsProperty$(T) {
      get unit() {
        return this[unit$];
      }
      set unit(value) {
        super.unit = value;
      }
      toJsonMap(delegate) {
        let json = super.toJsonMap(delegate);
        if (this.unit != null) json[$_set]("unit", this.unit);
        json[$_set]("numberToString", this.numberToString());
        return json;
      }
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value == null) return dart.toString(this.value);
        return this.unit != null ? dart.str(this.numberToString()) + dart.str(this.unit) : this.numberToString();
      }
    }
    (_NumProperty.new = function(name, value, opts) {
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let unit = opts && 'unit' in opts ? opts.unit : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C37 || CT.C37;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let style = opts && 'style' in opts ? opts.style : C27 || CT.C27;
      let level = opts && 'level' in opts ? opts.level : C12 || CT.C12;
      this[unit$] = unit;
      _NumProperty.__proto__.new.call(this, name, value, {ifNull: ifNull, showName: showName, defaultValue: defaultValue, tooltip: tooltip, level: level, style: style});
      ;
    }).prototype = _NumProperty.prototype;
    (_NumProperty.lazy = function(name, computeValue, opts) {
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let unit = opts && 'unit' in opts ? opts.unit : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C37 || CT.C37;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let style = opts && 'style' in opts ? opts.style : C27 || CT.C27;
      let level = opts && 'level' in opts ? opts.level : C12 || CT.C12;
      this[unit$] = unit;
      _NumProperty.__proto__.lazy.call(this, name, computeValue, {ifNull: ifNull, showName: showName, defaultValue: defaultValue, tooltip: tooltip, style: style, level: level});
      ;
    }).prototype = _NumProperty.prototype;
    dart.addTypeTests(_NumProperty);
    _NumProperty.prototype[_is__NumProperty_default] = true;
    dart.setLibraryUri(_NumProperty, "package:flutter/src/foundation/diagnostics.dart");
    dart.setFieldSignature(_NumProperty, () => ({
      __proto__: dart.getFields(_NumProperty.__proto__),
      unit: dart.finalFieldType(core.String)
    }));
    return _NumProperty;
  });
  diagnostics$._NumProperty = diagnostics$._NumProperty$();
  dart.addTypeTests(diagnostics$._NumProperty, _is__NumProperty_default);
  diagnostics$.DoubleProperty = class DoubleProperty extends diagnostics$._NumProperty$(core.double) {
    numberToString() {
      return debug.debugFormatDouble(this.value);
    }
  };
  (diagnostics$.DoubleProperty.new = function(name, value, opts) {
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C37 || CT.C37;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let style = opts && 'style' in opts ? opts.style : C27 || CT.C27;
    let level = opts && 'level' in opts ? opts.level : C12 || CT.C12;
    if (!(showName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 1924, 15, "showName != null");
    if (!(style != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 1925, 15, "style != null");
    if (!(level != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 1926, 15, "level != null");
    diagnostics$.DoubleProperty.__proto__.new.call(this, name, value, {ifNull: ifNull, unit: unit, tooltip: tooltip, defaultValue: defaultValue, showName: showName, style: style, level: level});
    ;
  }).prototype = diagnostics$.DoubleProperty.prototype;
  (diagnostics$.DoubleProperty.lazy = function(name, computeValue, opts) {
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C37 || CT.C37;
    let level = opts && 'level' in opts ? opts.level : C12 || CT.C12;
    if (!(showName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 1954, 15, "showName != null");
    if (!(level != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 1955, 15, "level != null");
    diagnostics$.DoubleProperty.__proto__.lazy.call(this, name, computeValue, {showName: showName, ifNull: ifNull, unit: unit, tooltip: tooltip, defaultValue: defaultValue, level: level});
    ;
  }).prototype = diagnostics$.DoubleProperty.prototype;
  dart.addTypeTests(diagnostics$.DoubleProperty);
  dart.setMethodSignature(diagnostics$.DoubleProperty, () => ({
    __proto__: dart.getMethods(diagnostics$.DoubleProperty.__proto__),
    numberToString: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(diagnostics$.DoubleProperty, "package:flutter/src/foundation/diagnostics.dart");
  diagnostics$.IntProperty = class IntProperty extends diagnostics$._NumProperty$(core.int) {
    numberToString() {
      return dart.toString(this.value);
    }
  };
  (diagnostics$.IntProperty.new = function(name, value, opts) {
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C37 || CT.C37;
    let style = opts && 'style' in opts ? opts.style : C27 || CT.C27;
    let level = opts && 'level' in opts ? opts.level : C12 || CT.C12;
    if (!(showName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 1987, 15, "showName != null");
    if (!(level != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 1988, 15, "level != null");
    if (!(style != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 1989, 15, "style != null");
    diagnostics$.IntProperty.__proto__.new.call(this, name, value, {ifNull: ifNull, showName: showName, unit: unit, defaultValue: defaultValue, level: level});
    ;
  }).prototype = diagnostics$.IntProperty.prototype;
  dart.addTypeTests(diagnostics$.IntProperty);
  dart.setMethodSignature(diagnostics$.IntProperty, () => ({
    __proto__: dart.getMethods(diagnostics$.IntProperty.__proto__),
    numberToString: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(diagnostics$.IntProperty, "package:flutter/src/foundation/diagnostics.dart");
  diagnostics$.PercentProperty = class PercentProperty extends diagnostics$.DoubleProperty {
    valueToString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      if (this.value == null) return dart.toString(this.value);
      return this.unit != null ? dart.str(this.numberToString()) + " " + dart.str(this.unit) : this.numberToString();
    }
    numberToString() {
      if (this.value == null) return dart.toString(this.value);
      return (this.value[$clamp](0.0, 1.0) * 100.0)[$toStringAsFixed](1) + "%";
    }
  };
  (diagnostics$.PercentProperty.new = function(name, fraction, opts) {
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let level = opts && 'level' in opts ? opts.level : C12 || CT.C12;
    if (!(showName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2023, 15, "showName != null");
    if (!(level != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2024, 15, "level != null");
    diagnostics$.PercentProperty.__proto__.new.call(this, name, fraction, {ifNull: ifNull, showName: showName, tooltip: tooltip, unit: unit, level: level});
    ;
  }).prototype = diagnostics$.PercentProperty.prototype;
  dart.addTypeTests(diagnostics$.PercentProperty);
  dart.setLibraryUri(diagnostics$.PercentProperty, "package:flutter/src/foundation/diagnostics.dart");
  var ifTrue$ = dart.privateName(diagnostics$, "FlagProperty.ifTrue");
  var ifFalse$ = dart.privateName(diagnostics$, "FlagProperty.ifFalse");
  diagnostics$.FlagProperty = class FlagProperty extends diagnostics$.DiagnosticsProperty$(core.bool) {
    get ifTrue() {
      return this[ifTrue$];
    }
    set ifTrue(value) {
      super.ifTrue = value;
    }
    get ifFalse() {
      return this[ifFalse$];
    }
    set ifFalse(value) {
      super.ifFalse = value;
    }
    toJsonMap(delegate) {
      let json = super.toJsonMap(delegate);
      if (this.ifTrue != null) json[$_set]("ifTrue", this.ifTrue);
      if (this.ifFalse != null) json[$_set]("ifFalse", this.ifFalse);
      return json;
    }
    valueToString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      if (dart.equals(this.value, true)) {
        if (this.ifTrue != null) return this.ifTrue;
      } else if (dart.equals(this.value, false)) {
        if (this.ifFalse != null) return this.ifFalse;
      }
      return super.valueToString({parentConfiguration: parentConfiguration});
    }
    get showName() {
      if (this.value == null || dart.equals(this.value, true) && this.ifTrue == null || dart.equals(this.value, false) && this.ifFalse == null) {
        return true;
      }
      return super.showName;
    }
    get level() {
      if (dart.equals(this.value, true)) {
        if (this.ifTrue == null) return diagnostics$.DiagnosticLevel.hidden;
      }
      if (dart.equals(this.value, false)) {
        if (this.ifFalse == null) return diagnostics$.DiagnosticLevel.hidden;
      }
      return super.level;
    }
  };
  (diagnostics$.FlagProperty.new = function(name, opts) {
    let value = opts && 'value' in opts ? opts.value : null;
    let ifTrue = opts && 'ifTrue' in opts ? opts.ifTrue : null;
    let ifFalse = opts && 'ifFalse' in opts ? opts.ifFalse : null;
    let showName = opts && 'showName' in opts ? opts.showName : false;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
    let level = opts && 'level' in opts ? opts.level : C12 || CT.C12;
    this[ifTrue$] = ifTrue;
    this[ifFalse$] = ifFalse;
    if (!(showName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2104, 15, "showName != null");
    if (!(level != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2105, 15, "level != null");
    if (!(ifTrue != null || ifFalse != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2106, 15, "ifTrue != null || ifFalse != null");
    diagnostics$.FlagProperty.__proto__.new.call(this, name, value, {showName: showName, defaultValue: defaultValue, level: level});
    ;
  }).prototype = diagnostics$.FlagProperty.prototype;
  dart.addTypeTests(diagnostics$.FlagProperty);
  dart.setGetterSignature(diagnostics$.FlagProperty, () => ({
    __proto__: dart.getGetters(diagnostics$.FlagProperty.__proto__),
    showName: core.bool
  }));
  dart.setLibraryUri(diagnostics$.FlagProperty, "package:flutter/src/foundation/diagnostics.dart");
  dart.setFieldSignature(diagnostics$.FlagProperty, () => ({
    __proto__: dart.getFields(diagnostics$.FlagProperty.__proto__),
    ifTrue: dart.finalFieldType(core.String),
    ifFalse: dart.finalFieldType(core.String)
  }));
  const _is_IterableProperty_default = Symbol('_is_IterableProperty_default');
  diagnostics$.IterableProperty$ = dart.generic(T => {
    var TToString = () => (TToString = dart.constFn(dart.fnType(core.String, [T])))();
    class IterableProperty extends diagnostics$.DiagnosticsProperty$(core.Iterable$(T)) {
      valueToString(opts) {
        let t3;
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value == null) return dart.toString(this.value);
        if (dart.test(this.value[$isEmpty])) {
          t3 = this.ifEmpty;
          return t3 == null ? "[]" : t3;
        }
        let formattedValues = this.value[$map](core.String, dart.fn(v => {
          if (dart.wrapType(T)[$_equals](dart.wrapType(core.double)) && typeof v == 'number') {
            return debug.debugFormatDouble(v);
          } else {
            return dart.toString(v);
          }
        }, TToString()));
        if (parentConfiguration != null && !dart.test(parentConfiguration.lineBreakProperties)) {
          return "[" + dart.str(formattedValues[$join](", ")) + "]";
        }
        return formattedValues[$join](dart.test(diagnostics$._isSingleLine(this.style)) ? ", " : "\n");
      }
      get level() {
        if (this.ifEmpty == null && this.value != null && dart.test(this.value[$isEmpty]) && !dart.equals(super.level, diagnostics$.DiagnosticLevel.hidden)) return diagnostics$.DiagnosticLevel.fine;
        return super.level;
      }
      toJsonMap(delegate) {
        let json = super.toJsonMap(delegate);
        if (this.value != null) {
          json[$_set]("values", this.value[$map](core.String, dart.fn(value => dart.toString(value), TToString()))[$toList]());
        }
        return json;
      }
    }
    (IterableProperty.new = function(name, value, opts) {
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C37 || CT.C37;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : "[]";
      let style = opts && 'style' in opts ? opts.style : C27 || CT.C27;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
      let level = opts && 'level' in opts ? opts.level : C12 || CT.C12;
      if (!(style != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2202, 15, "style != null");
      if (!(showName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2203, 15, "showName != null");
      if (!(showSeparator != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2204, 15, "showSeparator != null");
      if (!(level != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2205, 15, "level != null");
      IterableProperty.__proto__.new.call(this, name, value, {defaultValue: defaultValue, ifNull: ifNull, ifEmpty: ifEmpty, style: style, showName: showName, showSeparator: showSeparator, level: level});
      ;
    }).prototype = IterableProperty.prototype;
    dart.addTypeTests(IterableProperty);
    IterableProperty.prototype[_is_IterableProperty_default] = true;
    dart.setLibraryUri(IterableProperty, "package:flutter/src/foundation/diagnostics.dart");
    return IterableProperty;
  });
  diagnostics$.IterableProperty = diagnostics$.IterableProperty$();
  dart.addTypeTests(diagnostics$.IterableProperty, _is_IterableProperty_default);
  const _is_EnumProperty_default = Symbol('_is_EnumProperty_default');
  diagnostics$.EnumProperty$ = dart.generic(T => {
    class EnumProperty extends diagnostics$.DiagnosticsProperty$(T) {
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value == null) return dart.toString(this.value);
        return diagnostics$.describeEnum(this.value);
      }
    }
    (EnumProperty.new = function(name, value, opts) {
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C37 || CT.C37;
      let level = opts && 'level' in opts ? opts.level : C12 || CT.C12;
      if (!(level != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2285, 15, "level != null");
      EnumProperty.__proto__.new.call(this, name, value, {defaultValue: defaultValue, level: level});
      ;
    }).prototype = EnumProperty.prototype;
    dart.addTypeTests(EnumProperty);
    EnumProperty.prototype[_is_EnumProperty_default] = true;
    dart.setLibraryUri(EnumProperty, "package:flutter/src/foundation/diagnostics.dart");
    return EnumProperty;
  });
  diagnostics$.EnumProperty = diagnostics$.EnumProperty$();
  dart.addTypeTests(diagnostics$.EnumProperty, _is_EnumProperty_default);
  const _is_ObjectFlagProperty_default = Symbol('_is_ObjectFlagProperty_default');
  var ifPresent$ = dart.privateName(diagnostics$, "ObjectFlagProperty.ifPresent");
  diagnostics$.ObjectFlagProperty$ = dart.generic(T => {
    class ObjectFlagProperty extends diagnostics$.DiagnosticsProperty$(T) {
      get ifPresent() {
        return this[ifPresent$];
      }
      set ifPresent(value) {
        super.ifPresent = value;
      }
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value != null) {
          if (this.ifPresent != null) return this.ifPresent;
        } else {
          if (this.ifNull != null) return this.ifNull;
        }
        return super.valueToString({parentConfiguration: parentConfiguration});
      }
      get showName() {
        if (this.value != null && this.ifPresent == null || this.value == null && this.ifNull == null) {
          return true;
        }
        return super.showName;
      }
      get level() {
        if (this.value != null) {
          if (this.ifPresent == null) return diagnostics$.DiagnosticLevel.hidden;
        } else {
          if (this.ifNull == null) return diagnostics$.DiagnosticLevel.hidden;
        }
        return super.level;
      }
      toJsonMap(delegate) {
        let json = super.toJsonMap(delegate);
        if (this.ifPresent != null) json[$_set]("ifPresent", this.ifPresent);
        return json;
      }
    }
    (ObjectFlagProperty.new = function(name, value, opts) {
      let ifPresent = opts && 'ifPresent' in opts ? opts.ifPresent : null;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let showName = opts && 'showName' in opts ? opts.showName : false;
      let level = opts && 'level' in opts ? opts.level : C12 || CT.C12;
      this[ifPresent$] = ifPresent;
      if (!(ifPresent != null || ifNull != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2337, 15, "ifPresent != null || ifNull != null");
      if (!(showName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2338, 15, "showName != null");
      if (!(level != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2339, 15, "level != null");
      ObjectFlagProperty.__proto__.new.call(this, name, value, {showName: showName, ifNull: ifNull, level: level});
      ;
    }).prototype = ObjectFlagProperty.prototype;
    (ObjectFlagProperty.has = function(name, value, opts) {
      let level = opts && 'level' in opts ? opts.level : C12 || CT.C12;
      if (!(name != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2358, 15, "name != null");
      if (!(level != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2359, 15, "level != null");
      this[ifPresent$] = "has " + dart.str(name);
      ObjectFlagProperty.__proto__.new.call(this, name, value, {showName: false, level: level});
      ;
    }).prototype = ObjectFlagProperty.prototype;
    dart.addTypeTests(ObjectFlagProperty);
    ObjectFlagProperty.prototype[_is_ObjectFlagProperty_default] = true;
    dart.setGetterSignature(ObjectFlagProperty, () => ({
      __proto__: dart.getGetters(ObjectFlagProperty.__proto__),
      showName: core.bool
    }));
    dart.setLibraryUri(ObjectFlagProperty, "package:flutter/src/foundation/diagnostics.dart");
    dart.setFieldSignature(ObjectFlagProperty, () => ({
      __proto__: dart.getFields(ObjectFlagProperty.__proto__),
      ifPresent: dart.finalFieldType(core.String)
    }));
    return ObjectFlagProperty;
  });
  diagnostics$.ObjectFlagProperty = diagnostics$.ObjectFlagProperty$();
  dart.addTypeTests(diagnostics$.ObjectFlagProperty, _is_ObjectFlagProperty_default);
  var _hasNonNullEntry = dart.privateName(diagnostics$, "_hasNonNullEntry");
  var _formattedValues = dart.privateName(diagnostics$, "_formattedValues");
  const _is_FlagsSummary_default = Symbol('_is_FlagsSummary_default');
  diagnostics$.FlagsSummary$ = dart.generic(T => {
    class FlagsSummary extends diagnostics$.DiagnosticsProperty$(core.Map$(core.String, T)) {
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (!(this.value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2470, 12, "value != null");
        if (!dart.test(this[_hasNonNullEntry]()) && this.ifEmpty != null) return this.ifEmpty;
        let formattedValues = this[_formattedValues]();
        if (parentConfiguration != null && !dart.test(parentConfiguration.lineBreakProperties)) {
          return "[" + dart.str(formattedValues[$join](", ")) + "]";
        }
        return formattedValues[$join](dart.test(diagnostics$._isSingleLine(this.style)) ? ", " : "\n");
      }
      get level() {
        if (!dart.test(this[_hasNonNullEntry]()) && this.ifEmpty == null) return diagnostics$.DiagnosticLevel.hidden;
        return super.level;
      }
      toJsonMap(delegate) {
        let json = super.toJsonMap(delegate);
        if (dart.test(this.value[$isNotEmpty])) json[$_set]("values", this[_formattedValues]()[$toList]());
        return json;
      }
      [_hasNonNullEntry]() {
        return this.value[$values][$any](dart.fn(o => o != null, ObjectTobool()));
      }
      [_formattedValues]() {
        return new (SyncIterableOfString()).new((function* _formattedValues() {
          for (let entry of this.value[$entries]) {
            if (entry.value != null) {
              yield entry.key;
            }
          }
        }).bind(this));
      }
    }
    (FlagsSummary.new = function(name, value, opts) {
      let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
      let level = opts && 'level' in opts ? opts.level : C12 || CT.C12;
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2455, 15, "value != null");
      if (!(showName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2456, 15, "showName != null");
      if (!(showSeparator != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2457, 15, "showSeparator != null");
      if (!(level != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2458, 15, "level != null");
      FlagsSummary.__proto__.new.call(this, name, value, {ifEmpty: ifEmpty, showName: showName, showSeparator: showSeparator, level: level});
      ;
    }).prototype = FlagsSummary.prototype;
    dart.addTypeTests(FlagsSummary);
    FlagsSummary.prototype[_is_FlagsSummary_default] = true;
    dart.setMethodSignature(FlagsSummary, () => ({
      __proto__: dart.getMethods(FlagsSummary.__proto__),
      [_hasNonNullEntry]: dart.fnType(core.bool, []),
      [_formattedValues]: dart.fnType(core.Iterable$(core.String), [])
    }));
    dart.setLibraryUri(FlagsSummary, "package:flutter/src/foundation/diagnostics.dart");
    return FlagsSummary;
  });
  diagnostics$.FlagsSummary = diagnostics$.FlagsSummary$();
  dart.addTypeTests(diagnostics$.FlagsSummary, _is_FlagsSummary_default);
  var _cachedBuilder = dart.privateName(diagnostics$, "_cachedBuilder");
  const _is_DiagnosticableNode_default = Symbol('_is_DiagnosticableNode_default');
  var value$ = dart.privateName(diagnostics$, "DiagnosticableNode.value");
  diagnostics$.DiagnosticableNode$ = dart.generic(T => {
    class DiagnosticableNode extends diagnostics$.DiagnosticsNode {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get builder() {
        let t3;
        if (false) return null;
        if (this[_cachedBuilder] == null) {
          this[_cachedBuilder] = new diagnostics$.DiagnosticPropertiesBuilder.new();
          t3 = this.value;
          t3 == null ? null : t3.debugFillProperties(this[_cachedBuilder]);
        }
        return this[_cachedBuilder];
      }
      get style() {
        let t3;
        return false ? diagnostics$.DiagnosticsTreeStyle.none : (t3 = super.style, t3 == null ? this.builder.defaultDiagnosticsTreeStyle : t3);
      }
      get emptyBodyDescription() {
        return false ? "" : this.builder.emptyBodyDescription;
      }
      getProperties() {
        return false ? C38 || CT.C38 : this.builder.properties;
      }
      getChildren() {
        return C38 || CT.C38;
      }
      toDescription(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (false) {
          return "";
        }
        return this.value.toStringShort();
      }
    }
    (DiagnosticableNode.new = function(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let style = opts && 'style' in opts ? opts.style : null;
      this[_cachedBuilder] = null;
      this[value$] = value;
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2881, 15, "value != null");
      DiagnosticableNode.__proto__.new.call(this, {name: name, style: style});
      ;
    }).prototype = DiagnosticableNode.prototype;
    dart.addTypeTests(DiagnosticableNode);
    DiagnosticableNode.prototype[_is_DiagnosticableNode_default] = true;
    dart.setMethodSignature(DiagnosticableNode, () => ({
      __proto__: dart.getMethods(DiagnosticableNode.__proto__),
      getProperties: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), []),
      getChildren: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), []),
      toDescription: dart.fnType(core.String, [], {parentConfiguration: diagnostics$.TextTreeConfiguration}, {})
    }));
    dart.setGetterSignature(DiagnosticableNode, () => ({
      __proto__: dart.getGetters(DiagnosticableNode.__proto__),
      builder: diagnostics$.DiagnosticPropertiesBuilder,
      style: diagnostics$.DiagnosticsTreeStyle
    }));
    dart.setLibraryUri(DiagnosticableNode, "package:flutter/src/foundation/diagnostics.dart");
    dart.setFieldSignature(DiagnosticableNode, () => ({
      __proto__: dart.getFields(DiagnosticableNode.__proto__),
      value: dart.finalFieldType(T),
      [_cachedBuilder]: dart.fieldType(diagnostics$.DiagnosticPropertiesBuilder)
    }));
    return DiagnosticableNode;
  });
  diagnostics$.DiagnosticableNode = diagnostics$.DiagnosticableNode$();
  dart.addTypeTests(diagnostics$.DiagnosticableNode, _is_DiagnosticableNode_default);
  diagnostics$.DiagnosticableMixin = class DiagnosticableMixin extends core.Object {};
  diagnostics$.DiagnosticableMixin[dart.mixinOn] = Object => {
    class DiagnosticableMixin extends Object {
      toStringShort() {
        return diagnostics$.describeIdentity(this);
      }
      toString(opts) {
        let t3;
        let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C11 || CT.C11;
        let fullString = null;
        if (!dart.test(dart.fn(() => {
          fullString = this.toDiagnosticsNode({style: diagnostics$.DiagnosticsTreeStyle.singleLine}).toString({minLevel: minLevel});
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 3092, 12, "() {\r\n      fullString = toDiagnosticsNode(style: DiagnosticsTreeStyle.singleLine).toString(minLevel: minLevel);\r\n      return true;\r\n    }()");
        t3 = fullString;
        return t3 == null ? this.toStringShort() : t3;
      }
      toDiagnosticsNode(opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let style = opts && 'style' in opts ? opts.style : null;
        return new (DiagnosticableNodeOfDiagnosticableMixin()).new({name: name, value: this, style: style});
      }
      debugFillProperties(properties) {
      }
    }
    dart.defineExtensionMethods(DiagnosticableMixin, ['toString']);
    return DiagnosticableMixin;
  };
  (diagnostics$.DiagnosticableMixin[dart.mixinNew] = function() {
  }).prototype = diagnostics$.DiagnosticableMixin.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticableMixin);
  diagnostics$.DiagnosticableMixin[dart.implements] = () => [core.Object];
  dart.setMethodSignature(diagnostics$.DiagnosticableMixin, () => ({
    __proto__: dart.getMethods(diagnostics$.DiagnosticableMixin.__proto__),
    toStringShort: dart.fnType(core.String, []),
    toString: dart.fnType(core.String, [], {minLevel: diagnostics$.DiagnosticLevel}, {}),
    [$toString]: dart.fnType(core.String, [], {minLevel: diagnostics$.DiagnosticLevel}, {}),
    toDiagnosticsNode: dart.fnType(diagnostics$.DiagnosticsNode, [], {name: core.String, style: diagnostics$.DiagnosticsTreeStyle}, {}),
    debugFillProperties: dart.fnType(dart.void, [diagnostics$.DiagnosticPropertiesBuilder])
  }));
  dart.setLibraryUri(diagnostics$.DiagnosticableMixin, "package:flutter/src/foundation/diagnostics.dart");
  const Object_DiagnosticableMixin$36 = class Object_DiagnosticableMixin extends core.Object {};
  (Object_DiagnosticableMixin$36.new = function() {
  }).prototype = Object_DiagnosticableMixin$36.prototype;
  dart.applyMixin(Object_DiagnosticableMixin$36, diagnostics$.DiagnosticableMixin);
  diagnostics$.Diagnosticable = class Diagnosticable extends Object_DiagnosticableMixin$36 {};
  (diagnostics$.Diagnosticable.new = function() {
    ;
  }).prototype = diagnostics$.Diagnosticable.prototype;
  dart.addTypeTests(diagnostics$.Diagnosticable);
  dart.setLibraryUri(diagnostics$.Diagnosticable, "package:flutter/src/foundation/diagnostics.dart");
  diagnostics$.DiagnosticableTree = class DiagnosticableTree extends diagnostics$.Diagnosticable {
    toStringShallow(opts) {
      let joiner = opts && 'joiner' in opts ? opts.joiner : ", ";
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C11 || CT.C11;
      if (false) {
        return this.toString();
      }
      let result = new core.StringBuffer.new();
      result.write(this.toString());
      result.write(joiner);
      let builder = new diagnostics$.DiagnosticPropertiesBuilder.new();
      this.debugFillProperties(builder);
      result.write(builder.properties[$where](dart.fn(n => !dart.test(n.isFiltered(minLevel)), DiagnosticsNodeTobool()))[$join](joiner));
      return result.toString();
    }
    toStringDeep(opts) {
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C11 || CT.C11;
      return this.toDiagnosticsNode().toStringDeep({prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, minLevel: minLevel});
    }
    toStringShort() {
      return diagnostics$.describeIdentity(this);
    }
    toDiagnosticsNode(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let style = opts && 'style' in opts ? opts.style : null;
      return new diagnostics$.DiagnosticableTreeNode.new({name: name, value: this, style: style});
    }
    debugDescribeChildren() {
      return C38 || CT.C38;
    }
  };
  (diagnostics$.DiagnosticableTree.new = function() {
    diagnostics$.DiagnosticableTree.__proto__.new.call(this);
    ;
  }).prototype = diagnostics$.DiagnosticableTree.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticableTree);
  dart.setMethodSignature(diagnostics$.DiagnosticableTree, () => ({
    __proto__: dart.getMethods(diagnostics$.DiagnosticableTree.__proto__),
    toStringShallow: dart.fnType(core.String, [], {joiner: core.String, minLevel: diagnostics$.DiagnosticLevel}, {}),
    toStringDeep: dart.fnType(core.String, [], {minLevel: diagnostics$.DiagnosticLevel, prefixLineOne: core.String, prefixOtherLines: core.String}, {}),
    debugDescribeChildren: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), [])
  }));
  dart.setLibraryUri(diagnostics$.DiagnosticableTree, "package:flutter/src/foundation/diagnostics.dart");
  diagnostics$.DiagnosticableTreeNode = class DiagnosticableTreeNode extends diagnostics$.DiagnosticableNode$(diagnostics$.DiagnosticableTree) {
    getChildren() {
      if (this.value != null) return this.value.debugDescribeChildren();
      return C38 || CT.C38;
    }
  };
  (diagnostics$.DiagnosticableTreeNode.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let style = opts && 'style' in opts ? opts.style : null;
    diagnostics$.DiagnosticableTreeNode.__proto__.new.call(this, {name: name, value: value, style: style});
    ;
  }).prototype = diagnostics$.DiagnosticableTreeNode.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticableTreeNode);
  dart.setLibraryUri(diagnostics$.DiagnosticableTreeNode, "package:flutter/src/foundation/diagnostics.dart");
  var properties$ = dart.privateName(diagnostics$, "DiagnosticPropertiesBuilder.properties");
  var defaultDiagnosticsTreeStyle = dart.privateName(diagnostics$, "DiagnosticPropertiesBuilder.defaultDiagnosticsTreeStyle");
  var emptyBodyDescription = dart.privateName(diagnostics$, "DiagnosticPropertiesBuilder.emptyBodyDescription");
  diagnostics$.DiagnosticPropertiesBuilder = class DiagnosticPropertiesBuilder extends core.Object {
    get properties() {
      return this[properties$];
    }
    set properties(value) {
      super.properties = value;
    }
    get defaultDiagnosticsTreeStyle() {
      return this[defaultDiagnosticsTreeStyle];
    }
    set defaultDiagnosticsTreeStyle(value) {
      this[defaultDiagnosticsTreeStyle] = value;
    }
    get emptyBodyDescription() {
      return this[emptyBodyDescription];
    }
    set emptyBodyDescription(value) {
      this[emptyBodyDescription] = value;
    }
    add(property) {
      if (!false) {
        this.properties[$add](property);
      }
    }
  };
  (diagnostics$.DiagnosticPropertiesBuilder.new = function() {
    this[defaultDiagnosticsTreeStyle] = diagnostics$.DiagnosticsTreeStyle.sparse;
    this[emptyBodyDescription] = null;
    this[properties$] = JSArrayOfDiagnosticsNode().of([]);
    ;
  }).prototype = diagnostics$.DiagnosticPropertiesBuilder.prototype;
  (diagnostics$.DiagnosticPropertiesBuilder.fromProperties = function(properties) {
    this[defaultDiagnosticsTreeStyle] = diagnostics$.DiagnosticsTreeStyle.sparse;
    this[emptyBodyDescription] = null;
    this[properties$] = properties;
    ;
  }).prototype = diagnostics$.DiagnosticPropertiesBuilder.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticPropertiesBuilder);
  dart.setMethodSignature(diagnostics$.DiagnosticPropertiesBuilder, () => ({
    __proto__: dart.getMethods(diagnostics$.DiagnosticPropertiesBuilder.__proto__),
    add: dart.fnType(dart.void, [diagnostics$.DiagnosticsNode])
  }));
  dart.setLibraryUri(diagnostics$.DiagnosticPropertiesBuilder, "package:flutter/src/foundation/diagnostics.dart");
  dart.setFieldSignature(diagnostics$.DiagnosticPropertiesBuilder, () => ({
    __proto__: dart.getFields(diagnostics$.DiagnosticPropertiesBuilder.__proto__),
    properties: dart.finalFieldType(core.List$(diagnostics$.DiagnosticsNode)),
    defaultDiagnosticsTreeStyle: dart.fieldType(diagnostics$.DiagnosticsTreeStyle),
    emptyBodyDescription: dart.fieldType(core.String)
  }));
  diagnostics$.DiagnosticableTreeMixin = class DiagnosticableTreeMixin extends core.Object {};
  diagnostics$.DiagnosticableTreeMixin[dart.mixinOn] = Object => {
    class DiagnosticableTreeMixin extends Object {
      toString(opts) {
        let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C11 || CT.C11;
        return this.toDiagnosticsNode({style: diagnostics$.DiagnosticsTreeStyle.singleLine}).toString({minLevel: minLevel});
      }
      toStringShallow(opts) {
        let joiner = opts && 'joiner' in opts ? opts.joiner : ", ";
        let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C11 || CT.C11;
        if (false) {
          return this.toString();
        }
        let result = new core.StringBuffer.new();
        result.write(this.toStringShort());
        result.write(joiner);
        let builder = new diagnostics$.DiagnosticPropertiesBuilder.new();
        this.debugFillProperties(builder);
        result.write(builder.properties[$where](dart.fn(n => !dart.test(n.isFiltered(minLevel)), DiagnosticsNodeTobool()))[$join](joiner));
        return result.toString();
      }
      toStringDeep(opts) {
        let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
        let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
        let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C11 || CT.C11;
        return this.toDiagnosticsNode().toStringDeep({prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, minLevel: minLevel});
      }
      toStringShort() {
        return diagnostics$.describeIdentity(this);
      }
      toDiagnosticsNode(opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let style = opts && 'style' in opts ? opts.style : null;
        return new diagnostics$.DiagnosticableTreeNode.new({name: name, value: this, style: style});
      }
      debugDescribeChildren() {
        return C38 || CT.C38;
      }
      debugFillProperties(properties) {
      }
    }
    dart.defineExtensionMethods(DiagnosticableTreeMixin, ['toString']);
    return DiagnosticableTreeMixin;
  };
  (diagnostics$.DiagnosticableTreeMixin[dart.mixinNew] = function() {
  }).prototype = diagnostics$.DiagnosticableTreeMixin.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticableTreeMixin);
  diagnostics$.DiagnosticableTreeMixin[dart.implements] = () => [diagnostics$.DiagnosticableTree, core.Object];
  dart.setMethodSignature(diagnostics$.DiagnosticableTreeMixin, () => ({
    __proto__: dart.getMethods(diagnostics$.DiagnosticableTreeMixin.__proto__),
    toString: dart.fnType(core.String, [], {minLevel: diagnostics$.DiagnosticLevel}, {}),
    [$toString]: dart.fnType(core.String, [], {minLevel: diagnostics$.DiagnosticLevel}, {}),
    toStringShallow: dart.fnType(core.String, [], {joiner: core.String, minLevel: diagnostics$.DiagnosticLevel}, {}),
    toStringDeep: dart.fnType(core.String, [], {minLevel: diagnostics$.DiagnosticLevel, prefixLineOne: core.String, prefixOtherLines: core.String}, {}),
    toStringShort: dart.fnType(core.String, []),
    toDiagnosticsNode: dart.fnType(diagnostics$.DiagnosticsNode, [], {name: core.String, style: diagnostics$.DiagnosticsTreeStyle}, {}),
    debugDescribeChildren: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), []),
    debugFillProperties: dart.fnType(dart.void, [diagnostics$.DiagnosticPropertiesBuilder])
  }));
  dart.setLibraryUri(diagnostics$.DiagnosticableTreeMixin, "package:flutter/src/foundation/diagnostics.dart");
  var _children = dart.privateName(diagnostics$, "_children");
  var _properties = dart.privateName(diagnostics$, "_properties");
  var level$ = dart.privateName(diagnostics$, "DiagnosticsBlock.level");
  var value$0 = dart.privateName(diagnostics$, "DiagnosticsBlock.value");
  var allowTruncate$ = dart.privateName(diagnostics$, "DiagnosticsBlock.allowTruncate");
  diagnostics$.DiagnosticsBlock = class DiagnosticsBlock extends diagnostics$.DiagnosticsNode {
    get level() {
      return this[level$];
    }
    set level(value) {
      super.level = value;
    }
    get value() {
      return this[value$0];
    }
    set value(value) {
      super.value = value;
    }
    get allowTruncate() {
      return this[allowTruncate$];
    }
    set allowTruncate(value) {
      super.allowTruncate = value;
    }
    getChildren() {
      return this[_children];
    }
    getProperties() {
      return this[_properties];
    }
    toDescription(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      return this[_description];
    }
  };
  (diagnostics$.DiagnosticsBlock.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let style = opts && 'style' in opts ? opts.style : C25 || CT.C25;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
    let linePrefix = opts && 'linePrefix' in opts ? opts.linePrefix : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let description = opts && 'description' in opts ? opts.description : null;
    let level = opts && 'level' in opts ? opts.level : C12 || CT.C12;
    let allowTruncate = opts && 'allowTruncate' in opts ? opts.allowTruncate : false;
    let children = opts && 'children' in opts ? opts.children : C38 || CT.C38;
    let properties = opts && 'properties' in opts ? opts.properties : C38 || CT.C38;
    this[value$0] = value;
    this[level$] = level;
    this[allowTruncate$] = allowTruncate;
    this[_description] = description;
    this[_children] = children;
    this[_properties] = properties;
    diagnostics$.DiagnosticsBlock.__proto__.new.call(this, {name: name, style: style, showName: dart.test(showName) && name != null, showSeparator: showSeparator, linePrefix: linePrefix});
    ;
  }).prototype = diagnostics$.DiagnosticsBlock.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticsBlock);
  dart.setMethodSignature(diagnostics$.DiagnosticsBlock, () => ({
    __proto__: dart.getMethods(diagnostics$.DiagnosticsBlock.__proto__),
    getChildren: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), []),
    getProperties: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), []),
    toDescription: dart.fnType(core.String, [], {parentConfiguration: diagnostics$.TextTreeConfiguration}, {})
  }));
  dart.setLibraryUri(diagnostics$.DiagnosticsBlock, "package:flutter/src/foundation/diagnostics.dart");
  dart.setFieldSignature(diagnostics$.DiagnosticsBlock, () => ({
    __proto__: dart.getFields(diagnostics$.DiagnosticsBlock.__proto__),
    [_children]: dart.finalFieldType(core.List$(diagnostics$.DiagnosticsNode)),
    [_properties]: dart.finalFieldType(core.List$(diagnostics$.DiagnosticsNode)),
    level: dart.finalFieldType(diagnostics$.DiagnosticLevel),
    [_description]: dart.finalFieldType(core.String),
    value: dart.finalFieldType(core.Object),
    allowTruncate: dart.finalFieldType(core.bool)
  }));
  diagnostics$.DiagnosticsSerializationDelegate = class DiagnosticsSerializationDelegate extends core.Object {};
  (diagnostics$.DiagnosticsSerializationDelegate[dart.mixinNew] = function() {
  }).prototype = diagnostics$.DiagnosticsSerializationDelegate.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticsSerializationDelegate);
  dart.setLibraryUri(diagnostics$.DiagnosticsSerializationDelegate, "package:flutter/src/foundation/diagnostics.dart");
  var C39;
  var includeProperties$ = dart.privateName(diagnostics$, "_DefaultDiagnosticsSerializationDelegate.includeProperties");
  var subtreeDepth$ = dart.privateName(diagnostics$, "_DefaultDiagnosticsSerializationDelegate.subtreeDepth");
  diagnostics$._DefaultDiagnosticsSerializationDelegate = class _DefaultDiagnosticsSerializationDelegate extends core.Object {
    get includeProperties() {
      return this[includeProperties$];
    }
    set includeProperties(value) {
      super.includeProperties = value;
    }
    get subtreeDepth() {
      return this[subtreeDepth$];
    }
    set subtreeDepth(value) {
      super.subtreeDepth = value;
    }
    additionalNodeProperties(node) {
      return C39 || CT.C39;
    }
    delegateForNode(node) {
      return dart.notNull(this.subtreeDepth) > 0 ? this.copyWith({subtreeDepth: dart.notNull(this.subtreeDepth) - 1}) : this;
    }
    get expandPropertyValues() {
      return false;
    }
    filterChildren(nodes, owner) {
      return nodes;
    }
    filterProperties(nodes, owner) {
      return nodes;
    }
    truncateNodesList(nodes, owner) {
      return nodes;
    }
    copyWith(opts) {
      let t3, t3$;
      let subtreeDepth = opts && 'subtreeDepth' in opts ? opts.subtreeDepth : null;
      let includeProperties = opts && 'includeProperties' in opts ? opts.includeProperties : null;
      return new diagnostics$._DefaultDiagnosticsSerializationDelegate.new({subtreeDepth: (t3 = subtreeDepth, t3 == null ? this.subtreeDepth : t3), includeProperties: (t3$ = includeProperties, t3$ == null ? this.includeProperties : t3$)});
    }
  };
  (diagnostics$._DefaultDiagnosticsSerializationDelegate.new = function(opts) {
    let includeProperties = opts && 'includeProperties' in opts ? opts.includeProperties : false;
    let subtreeDepth = opts && 'subtreeDepth' in opts ? opts.subtreeDepth : 0;
    this[includeProperties$] = includeProperties;
    this[subtreeDepth$] = subtreeDepth;
    ;
  }).prototype = diagnostics$._DefaultDiagnosticsSerializationDelegate.prototype;
  dart.addTypeTests(diagnostics$._DefaultDiagnosticsSerializationDelegate);
  diagnostics$._DefaultDiagnosticsSerializationDelegate[dart.implements] = () => [diagnostics$.DiagnosticsSerializationDelegate];
  dart.setMethodSignature(diagnostics$._DefaultDiagnosticsSerializationDelegate, () => ({
    __proto__: dart.getMethods(diagnostics$._DefaultDiagnosticsSerializationDelegate.__proto__),
    additionalNodeProperties: dart.fnType(core.Map$(core.String, core.Object), [diagnostics$.DiagnosticsNode]),
    delegateForNode: dart.fnType(diagnostics$.DiagnosticsSerializationDelegate, [diagnostics$.DiagnosticsNode]),
    filterChildren: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), [core.List$(diagnostics$.DiagnosticsNode), diagnostics$.DiagnosticsNode]),
    filterProperties: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), [core.List$(diagnostics$.DiagnosticsNode), diagnostics$.DiagnosticsNode]),
    truncateNodesList: dart.fnType(core.List$(diagnostics$.DiagnosticsNode), [core.List$(diagnostics$.DiagnosticsNode), diagnostics$.DiagnosticsNode]),
    copyWith: dart.fnType(diagnostics$.DiagnosticsSerializationDelegate, [], {includeProperties: core.bool, subtreeDepth: core.int}, {})
  }));
  dart.setGetterSignature(diagnostics$._DefaultDiagnosticsSerializationDelegate, () => ({
    __proto__: dart.getGetters(diagnostics$._DefaultDiagnosticsSerializationDelegate.__proto__),
    expandPropertyValues: core.bool
  }));
  dart.setLibraryUri(diagnostics$._DefaultDiagnosticsSerializationDelegate, "package:flutter/src/foundation/diagnostics.dart");
  dart.setFieldSignature(diagnostics$._DefaultDiagnosticsSerializationDelegate, () => ({
    __proto__: dart.getFields(diagnostics$._DefaultDiagnosticsSerializationDelegate.__proto__),
    includeProperties: dart.finalFieldType(core.bool),
    subtreeDepth: dart.finalFieldType(core.int)
  }));
  diagnostics$._isSingleLine = function _isSingleLine(style) {
    return dart.equals(style, diagnostics$.DiagnosticsTreeStyle.singleLine);
  };
  diagnostics$.shortHash = function shortHash(object) {
    return dart.hashCode(object)[$toUnsigned](20)[$toRadixString](16)[$padLeft](5, "0");
  };
  diagnostics$.describeIdentity = function describeIdentity(object) {
    return dart.str(object$.objectRuntimeType(object, "<optimized out>")) + "#" + dart.str(diagnostics$.shortHash(object));
  };
  diagnostics$.describeEnum = function describeEnum(enumEntry) {
    let description = dart.toString(enumEntry);
    let indexOfDot = description[$indexOf](".");
    if (!(indexOfDot !== -1 && indexOfDot < description.length - 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/diagnostics.dart", 2989, 10, "indexOfDot != -1 && indexOfDot < description.length - 1");
    return description[$substring](indexOfDot + 1);
  };
  dart.defineLazy(diagnostics$, {
    /*diagnostics$.sparseTextConfiguration*/get sparseTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({prefixLineOne: "├─", prefixOtherLines: " ", prefixLastChildLineOne: "└─", linkCharacter: "│", propertyPrefixIfChildren: "│ ", propertyPrefixNoChildren: "  ", prefixOtherLinesRootNode: " "});
    },
    /*diagnostics$.dashedTextConfiguration*/get dashedTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({prefixLineOne: "╎╌", prefixLastChildLineOne: "└╌", prefixOtherLines: " ", linkCharacter: "╎", propertyPrefixIfChildren: "│ ", propertyPrefixNoChildren: "  ", prefixOtherLinesRootNode: " "});
    },
    /*diagnostics$.denseTextConfiguration*/get denseTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({propertySeparator: ", ", beforeProperties: "(", afterProperties: ")", lineBreakProperties: false, prefixLineOne: "├", prefixOtherLines: "", prefixLastChildLineOne: "└", linkCharacter: "│", propertyPrefixIfChildren: "│", propertyPrefixNoChildren: " ", prefixOtherLinesRootNode: "", addBlankLineIfNoChildren: false, isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*diagnostics$.transitionTextConfiguration*/get transitionTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({prefixLineOne: "╞═╦══ ", prefixLastChildLineOne: "╘═╦══ ", prefixOtherLines: " ║ ", footer: " ╚═══════════", linkCharacter: "│", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", prefixOtherLinesRootNode: "", afterName: " ═══", afterDescriptionIfBody: ":", bodyIndent: "  ", isNameOnOwnLine: true, addBlankLineIfNoChildren: false, isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*diagnostics$.errorTextConfiguration*/get errorTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({prefixLineOne: "╞═╦", prefixLastChildLineOne: "╘═╦", prefixOtherLines: " ║ ", footer: " ╚═══════════", linkCharacter: "│", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", prefixOtherLinesRootNode: "", beforeName: "══╡ ", suffixLineOne: " ╞══", manditoryFooter: "═════", addBlankLineIfNoChildren: false, isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*diagnostics$.whitespaceTextConfiguration*/get whitespaceTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({prefixLineOne: "", prefixLastChildLineOne: "", prefixOtherLines: " ", prefixOtherLinesRootNode: "  ", bodyIndent: "", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", linkCharacter: " ", addBlankLineIfNoChildren: false, afterDescriptionIfBody: ":", isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*diagnostics$.flatTextConfiguration*/get flatTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({prefixLineOne: "", prefixLastChildLineOne: "", prefixOtherLines: "", prefixOtherLinesRootNode: "", bodyIndent: "", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", linkCharacter: "", addBlankLineIfNoChildren: false, afterDescriptionIfBody: ":", isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*diagnostics$.singleLineTextConfiguration*/get singleLineTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({propertySeparator: ", ", beforeProperties: "(", afterProperties: ")", prefixLineOne: "", prefixOtherLines: "", prefixLastChildLineOne: "", lineBreak: "", lineBreakProperties: false, addBlankLineIfNoChildren: false, showChildren: false, propertyPrefixIfChildren: "  ", propertyPrefixNoChildren: "  ", linkCharacter: "", prefixOtherLinesRootNode: ""});
    },
    /*diagnostics$.errorPropertyTextConfiguration*/get errorPropertyTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({propertySeparator: ", ", beforeProperties: "(", afterProperties: ")", prefixLineOne: "", prefixOtherLines: "", prefixLastChildLineOne: "", lineBreak: "\n", lineBreakProperties: false, addBlankLineIfNoChildren: false, showChildren: false, propertyPrefixIfChildren: "  ", propertyPrefixNoChildren: "  ", linkCharacter: "", prefixOtherLinesRootNode: "", afterName: ":", isNameOnOwnLine: true});
    },
    /*diagnostics$.shallowTextConfiguration*/get shallowTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({prefixLineOne: "", prefixLastChildLineOne: "", prefixOtherLines: " ", prefixOtherLinesRootNode: "  ", bodyIndent: "", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", linkCharacter: " ", addBlankLineIfNoChildren: false, afterDescriptionIfBody: ":", isBlankLineBetweenPropertiesAndChildren: false, showChildren: false});
    },
    /*diagnostics$.kNoDefaultValue*/get kNoDefaultValue() {
      return C37 || CT.C37;
    }
  });
  var C40;
  debug.debugAssertAllFoundationVarsUnset = function debugAssertAllFoundationVarsUnset(reason, opts) {
    let debugPrintOverride = opts && 'debugPrintOverride' in opts ? opts.debugPrintOverride : C40 || CT.C40;
    if (!dart.test(dart.fn(() => {
      if (!dart.equals(print.debugPrint, debugPrintOverride) || platform.debugDefaultTargetPlatformOverride != null || debug.debugDoublePrecision != null) dart.throw(assertions.FlutterError.new(reason));
      return true;
    }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/debug.dart", 25, 10, "() {\r\n    if (debugPrint != debugPrintOverride ||\r\n        debugDefaultTargetPlatformOverride != null ||\r\n        debugDoublePrecision != null)\r\n      throw FlutterError(reason);\r\n    return true;\r\n  }()");
    return true;
  };
  debug.debugInstrumentAction = function debugInstrumentAction(T, description, action) {
    let t3;
    let instrument = false;
    if (!dart.test(dart.fn(() => {
      instrument = debug.debugInstrumentationEnabled;
      return true;
    }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/debug.dart", 55, 10, "() {\r\n    instrument = debugInstrumentationEnabled;\r\n    return true;\r\n  }()");
    if (dart.test(instrument)) {
      let stopwatch = (t3 = new core.Stopwatch.new(), t3.start(), t3);
      return action().whenComplete(dart.fn(() => {
        stopwatch.stop();
        print.debugPrint("Action \"" + dart.str(description) + "\" took " + dart.str(stopwatch.elapsed));
      }, VoidToNull()));
    } else {
      return action();
    }
  };
  debug.debugFormatDouble = function debugFormatDouble(value) {
    if (value == null) {
      return "null";
    }
    if (debug.debugDoublePrecision != null) {
      return value[$toStringAsPrecision](debug.debugDoublePrecision);
    }
    return value[$toStringAsFixed](1);
  };
  var C41;
  dart.defineLazy(debug, {
    /*debug.debugInstrumentationEnabled*/get debugInstrumentationEnabled() {
      return false;
    },
    set debugInstrumentationEnabled(_) {},
    /*debug.timelineWhitelistArguments*/get timelineWhitelistArguments() {
      return C41 || CT.C41;
    },
    /*debug.debugDoublePrecision*/get debugDoublePrecision() {
      return null;
    },
    set debugDoublePrecision(_) {}
  });
  var _name$1 = dart.privateName(print, "_name");
  var C42;
  var C43;
  var C44;
  var C45;
  print._WordWrapParseMode = class _WordWrapParseMode extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (print._WordWrapParseMode.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = print._WordWrapParseMode.prototype;
  dart.addTypeTests(print._WordWrapParseMode);
  dart.setLibraryUri(print._WordWrapParseMode, "package:flutter/src/foundation/print.dart");
  dart.setFieldSignature(print._WordWrapParseMode, () => ({
    __proto__: dart.getFields(print._WordWrapParseMode.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(print._WordWrapParseMode, ['toString']);
  print._WordWrapParseMode.inSpace = C42 || CT.C42;
  print._WordWrapParseMode.inWord = C43 || CT.C43;
  print._WordWrapParseMode.atBreak = C44 || CT.C44;
  print._WordWrapParseMode.values = C45 || CT.C45;
  var C46;
  print.debugPrintSynchronously = function debugPrintSynchronously(message, opts) {
    let wrapWidth = opts && 'wrapWidth' in opts ? opts.wrapWidth : null;
    if (wrapWidth != null) {
      core.print(message[$split]("\n")[$expand](core.String, dart.fn(line => print.debugWordWrap(line, wrapWidth), StringToIterableOfString()))[$join]("\n"));
    } else {
      core.print(message);
    }
  };
  print.debugPrintThrottled = function debugPrintThrottled(message, opts) {
    let t3, t3$;
    let wrapWidth = opts && 'wrapWidth' in opts ? opts.wrapWidth : null;
    let messageLines = (t3$ = (t3 = message, t3 == null ? null : t3[$split]("\n")), t3$ == null ? JSArrayOfString().of(["null"]) : t3$);
    if (wrapWidth != null) {
      print._debugPrintBuffer.addAll(messageLines[$expand](core.String, dart.fn(line => print.debugWordWrap(line, wrapWidth), StringToIterableOfString())));
    } else {
      print._debugPrintBuffer.addAll(messageLines);
    }
    if (!dart.test(print._debugPrintScheduled)) print._debugPrintTask();
  };
  print._debugPrintTask = function _debugPrintTask() {
    let t3;
    print._debugPrintScheduled = false;
    if (dart.test(print._debugPrintStopwatch.elapsed['>'](print._kDebugPrintPauseTime))) {
      print._debugPrintStopwatch.stop();
      print._debugPrintStopwatch.reset();
      print._debugPrintedCharacters = 0;
    }
    while (dart.notNull(print._debugPrintedCharacters) < 12288 && dart.test(print._debugPrintBuffer[$isNotEmpty])) {
      let line = print._debugPrintBuffer.removeFirst();
      print._debugPrintedCharacters = dart.notNull(print._debugPrintedCharacters) + line.length;
      core.print(line);
    }
    if (dart.test(print._debugPrintBuffer[$isNotEmpty])) {
      print._debugPrintScheduled = true;
      print._debugPrintedCharacters = 0;
      async.Timer.new(print._kDebugPrintPauseTime, C46 || CT.C46);
      print._debugPrintCompleter == null ? print._debugPrintCompleter = CompleterOfvoid().new() : null;
    } else {
      print._debugPrintStopwatch.start();
      t3 = print._debugPrintCompleter;
      t3 == null ? null : t3.complete();
      print._debugPrintCompleter = null;
    }
  };
  print.debugWordWrap = function debugWordWrap(message, width, opts) {
    let wrapIndent = opts && 'wrapIndent' in opts ? opts.wrapIndent : "";
    return new (SyncIterableOfString()).new(function* debugWordWrap() {
      if (message.length < dart.notNull(width) || message[$trimLeft]()[$_get](0) === "#") {
        yield message;
        return;
      }
      let prefixMatch = print._indentPattern[$matchAsPrefix](message);
      let prefix = dart.notNull(wrapIndent) + " "[$times](prefixMatch.group(0).length);
      let start = 0;
      let startForLengthCalculations = 0;
      let addPrefix = false;
      let index = prefix.length;
      let mode = print._WordWrapParseMode.inSpace;
      let lastWordStart = null;
      let lastWordEnd = null;
      while (true) {
        switch (mode) {
          case C42 || CT.C42:
          {
            while (index < message.length && message[$_get](index) === " ")
              index = index + 1;
            lastWordStart = index;
            mode = print._WordWrapParseMode.inWord;
            break;
          }
          case C43 || CT.C43:
          {
            while (index < message.length && message[$_get](index) !== " ")
              index = index + 1;
            mode = print._WordWrapParseMode.atBreak;
            break;
          }
          case C44 || CT.C44:
          {
            if (index - startForLengthCalculations > dart.notNull(width) || index === message.length) {
              if (index - startForLengthCalculations <= dart.notNull(width) || lastWordEnd == null) {
                lastWordEnd = index;
              }
              if (addPrefix) {
                yield prefix + message[$substring](start, lastWordEnd);
              } else {
                yield message[$substring](start, lastWordEnd);
                addPrefix = true;
              }
              if (dart.notNull(lastWordEnd) >= message.length) return;
              if (lastWordEnd === index) {
                while (index < message.length && message[$_get](index) === " ")
                  index = index + 1;
                start = index;
                mode = print._WordWrapParseMode.inWord;
              } else {
                if (!(dart.notNull(lastWordStart) > dart.notNull(lastWordEnd))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/print.dart", 161, 20, "lastWordStart > lastWordEnd");
                start = lastWordStart;
                mode = print._WordWrapParseMode.atBreak;
              }
              startForLengthCalculations = dart.notNull(start) - prefix.length;
              if (!addPrefix) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/print.dart", 166, 18, "addPrefix");
              lastWordEnd = null;
            } else {
              lastWordEnd = index;
              mode = print._WordWrapParseMode.inSpace;
            }
            break;
          }
        }
      }
    });
  };
  dart.copyProperties(print, {
    get debugPrintDone() {
      let t3, t3$;
      t3$ = (t3 = print._debugPrintCompleter, t3 == null ? null : t3.future);
      return t3$ == null ? FutureOfvoid().value() : t3$;
    }
  });
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C47;
  dart.defineLazy(print, {
    /*print.debugPrint*/get debugPrint() {
      return C40 || CT.C40;
    },
    set debugPrint(_) {},
    /*print._debugPrintedCharacters*/get _debugPrintedCharacters() {
      return 0;
    },
    set _debugPrintedCharacters(_) {},
    /*print._kDebugPrintCapacity*/get _kDebugPrintCapacity() {
      return 12288;
    },
    /*print._kDebugPrintPauseTime*/get _kDebugPrintPauseTime() {
      return C47 || CT.C47;
    },
    /*print._debugPrintBuffer*/get _debugPrintBuffer() {
      return new (ListQueueOfString()).new();
    },
    /*print._debugPrintStopwatch*/get _debugPrintStopwatch() {
      return new core.Stopwatch.new();
    },
    /*print._debugPrintCompleter*/get _debugPrintCompleter() {
      return null;
    },
    set _debugPrintCompleter(_) {},
    /*print._debugPrintScheduled*/get _debugPrintScheduled() {
      return false;
    },
    set _debugPrintScheduled(_) {},
    /*print._indentPattern*/get _indentPattern() {
      return core.RegExp.new("^ *(?:[-+*] |[0-9]+[.):] )?");
    }
  });
  var package$0 = dart.privateName(assertions, "PartialStackFrame.package");
  var className$0 = dart.privateName(assertions, "PartialStackFrame.className");
  var method$0 = dart.privateName(assertions, "PartialStackFrame.method");
  var C48;
  assertions.PartialStackFrame = class PartialStackFrame extends core.Object {
    get package() {
      return this[package$0];
    }
    set package(value) {
      super.package = value;
    }
    get className() {
      return this[className$0];
    }
    set className(value) {
      super.className = value;
    }
    get method() {
      return this[method$0];
    }
    set method(value) {
      super.method = value;
    }
    matches(stackFrame) {
      let stackFramePackage = dart.str(stackFrame.packageScheme) + ":" + dart.str(stackFrame.package) + "/" + dart.str(stackFrame.packagePath);
      if (true) {
        return dart.test(this.package[$allMatches](stackFramePackage)[$isNotEmpty]) && stackFrame.method == (this.method[$startsWith]("_") ? "[" + dart.str(this.method) + "]" : this.method);
      }
      return dart.test(this.package[$allMatches](stackFramePackage)[$isNotEmpty]) && stackFrame.method == this.method && stackFrame.className == this.className;
    }
  };
  (assertions.PartialStackFrame.new = function(opts) {
    let $package = opts && 'package' in opts ? opts.package : null;
    let className = opts && 'className' in opts ? opts.className : null;
    let method = opts && 'method' in opts ? opts.method : null;
    this[package$0] = $package;
    this[className$0] = className;
    this[method$0] = method;
    if (!(className != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/assertions.dart", 36, 15, "className != null");
    if (!(method != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/assertions.dart", 37, 15, "method != null");
    if (!($package != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/assertions.dart", 38, 15, "package != null");
    ;
  }).prototype = assertions.PartialStackFrame.prototype;
  dart.addTypeTests(assertions.PartialStackFrame);
  dart.setMethodSignature(assertions.PartialStackFrame, () => ({
    __proto__: dart.getMethods(assertions.PartialStackFrame.__proto__),
    matches: dart.fnType(core.bool, [stack_frame.StackFrame])
  }));
  dart.setLibraryUri(assertions.PartialStackFrame, "package:flutter/src/foundation/assertions.dart");
  dart.setFieldSignature(assertions.PartialStackFrame, () => ({
    __proto__: dart.getFields(assertions.PartialStackFrame.__proto__),
    package: dart.finalFieldType(core.Pattern),
    className: dart.finalFieldType(core.String),
    method: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(assertions.PartialStackFrame, {
    /*assertions.PartialStackFrame.asynchronousSuspension*/get asynchronousSuspension() {
      return C48 || CT.C48;
    }
  });
  assertions.StackFilter = class StackFilter extends core.Object {};
  (assertions.StackFilter.new = function() {
    ;
  }).prototype = assertions.StackFilter.prototype;
  dart.addTypeTests(assertions.StackFilter);
  dart.setLibraryUri(assertions.StackFilter, "package:flutter/src/foundation/assertions.dart");
  var _replacements = dart.privateName(assertions, "_replacements");
  var _matchesFrames = dart.privateName(assertions, "_matchesFrames");
  var frames$ = dart.privateName(assertions, "RepetitiveStackFrameFilter.frames");
  var replacement$ = dart.privateName(assertions, "RepetitiveStackFrameFilter.replacement");
  assertions.RepetitiveStackFrameFilter = class RepetitiveStackFrameFilter extends assertions.StackFilter {
    get frames() {
      return this[frames$];
    }
    set frames(value) {
      super.frames = value;
    }
    get replacement() {
      return this[replacement$];
    }
    set replacement(value) {
      super.replacement = value;
    }
    get numFrames() {
      return this.frames[$length];
    }
    get [_replacements]() {
      return ListOfString().filled(this.numFrames, this.replacement);
    }
    filter(stackFrames, reasons) {
      for (let index = 0; index < dart.notNull(stackFrames[$length]) - dart.notNull(this.numFrames); index = index + 1) {
        if (dart.test(this[_matchesFrames](stackFrames[$skip](index)[$take](this.numFrames)[$toList]()))) {
          reasons[$setRange](index, index + dart.notNull(this.numFrames), this[_replacements]);
          index = index + (dart.notNull(this.numFrames) - 1);
        }
      }
    }
    [_matchesFrames](stackFrames) {
      if (dart.notNull(stackFrames[$length]) < dart.notNull(this.numFrames)) {
        return false;
      }
      for (let index = 0; index < dart.notNull(stackFrames[$length]); index = index + 1) {
        if (!dart.test(this.frames[$_get](index).matches(stackFrames[$_get](index)))) {
          return false;
        }
      }
      return true;
    }
  };
  (assertions.RepetitiveStackFrameFilter.new = function(opts) {
    let frames = opts && 'frames' in opts ? opts.frames : null;
    let replacement = opts && 'replacement' in opts ? opts.replacement : null;
    this[frames$] = frames;
    this[replacement$] = replacement;
    if (!(frames != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/assertions.dart", 109, 15, "frames != null");
    if (!(replacement != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/assertions.dart", 110, 15, "replacement != null");
    assertions.RepetitiveStackFrameFilter.__proto__.new.call(this);
    ;
  }).prototype = assertions.RepetitiveStackFrameFilter.prototype;
  dart.addTypeTests(assertions.RepetitiveStackFrameFilter);
  dart.setMethodSignature(assertions.RepetitiveStackFrameFilter, () => ({
    __proto__: dart.getMethods(assertions.RepetitiveStackFrameFilter.__proto__),
    filter: dart.fnType(dart.void, [core.List$(stack_frame.StackFrame), core.List$(core.String)]),
    [_matchesFrames]: dart.fnType(core.bool, [core.List$(stack_frame.StackFrame)])
  }));
  dart.setGetterSignature(assertions.RepetitiveStackFrameFilter, () => ({
    __proto__: dart.getGetters(assertions.RepetitiveStackFrameFilter.__proto__),
    numFrames: core.int,
    [_replacements]: core.List$(core.String)
  }));
  dart.setLibraryUri(assertions.RepetitiveStackFrameFilter, "package:flutter/src/foundation/assertions.dart");
  dart.setFieldSignature(assertions.RepetitiveStackFrameFilter, () => ({
    __proto__: dart.getFields(assertions.RepetitiveStackFrameFilter.__proto__),
    frames: dart.finalFieldType(core.List$(assertions.PartialStackFrame)),
    replacement: dart.finalFieldType(core.String)
  }));
  assertions._ErrorDiagnostic = class _ErrorDiagnostic extends diagnostics$.DiagnosticsProperty$(core.List$(core.Object)) {
    valueToString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      return this.value[$join]("");
    }
  };
  (assertions._ErrorDiagnostic.new = function(message, opts) {
    let style = opts && 'style' in opts ? opts.style : C26 || CT.C26;
    let level = opts && 'level' in opts ? opts.level : C12 || CT.C12;
    if (!(message != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/assertions.dart", 158, 15, "message != null");
    assertions._ErrorDiagnostic.__proto__.new.call(this, null, JSArrayOfObject().of([message]), {showName: false, showSeparator: false, defaultValue: null, style: style, level: level});
    ;
  }).prototype = assertions._ErrorDiagnostic.prototype;
  (assertions._ErrorDiagnostic._fromParts = function(messageParts, opts) {
    let style = opts && 'style' in opts ? opts.style : C26 || CT.C26;
    let level = opts && 'level' in opts ? opts.level : C12 || CT.C12;
    if (!(messageParts != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/assertions.dart", 198, 15, "messageParts != null");
    assertions._ErrorDiagnostic.__proto__.new.call(this, null, messageParts, {showName: false, showSeparator: false, defaultValue: null, style: style, level: level});
    ;
  }).prototype = assertions._ErrorDiagnostic.prototype;
  dart.addTypeTests(assertions._ErrorDiagnostic);
  dart.setLibraryUri(assertions._ErrorDiagnostic, "package:flutter/src/foundation/assertions.dart");
  assertions.ErrorDescription = class ErrorDescription extends assertions._ErrorDiagnostic {};
  (assertions.ErrorDescription.new = function(message) {
    assertions.ErrorDescription.__proto__.new.call(this, message, {level: diagnostics$.DiagnosticLevel.info});
    ;
  }).prototype = assertions.ErrorDescription.prototype;
  (assertions.ErrorDescription._fromParts = function(messageParts) {
    assertions.ErrorDescription.__proto__._fromParts.call(this, messageParts, {level: diagnostics$.DiagnosticLevel.info});
    ;
  }).prototype = assertions.ErrorDescription.prototype;
  dart.addTypeTests(assertions.ErrorDescription);
  dart.setLibraryUri(assertions.ErrorDescription, "package:flutter/src/foundation/assertions.dart");
  assertions.ErrorSummary = class ErrorSummary extends assertions._ErrorDiagnostic {};
  (assertions.ErrorSummary.new = function(message) {
    assertions.ErrorSummary.__proto__.new.call(this, message, {level: diagnostics$.DiagnosticLevel.summary});
    ;
  }).prototype = assertions.ErrorSummary.prototype;
  (assertions.ErrorSummary._fromParts = function(messageParts) {
    assertions.ErrorSummary.__proto__._fromParts.call(this, messageParts, {level: diagnostics$.DiagnosticLevel.summary});
    ;
  }).prototype = assertions.ErrorSummary.prototype;
  dart.addTypeTests(assertions.ErrorSummary);
  dart.setLibraryUri(assertions.ErrorSummary, "package:flutter/src/foundation/assertions.dart");
  assertions.ErrorHint = class ErrorHint extends assertions._ErrorDiagnostic {};
  (assertions.ErrorHint.new = function(message) {
    assertions.ErrorHint.__proto__.new.call(this, message, {level: diagnostics$.DiagnosticLevel.hint});
    ;
  }).prototype = assertions.ErrorHint.prototype;
  (assertions.ErrorHint._fromParts = function(messageParts) {
    assertions.ErrorHint.__proto__._fromParts.call(this, messageParts, {level: diagnostics$.DiagnosticLevel.hint});
    ;
  }).prototype = assertions.ErrorHint.prototype;
  dart.addTypeTests(assertions.ErrorHint);
  dart.setLibraryUri(assertions.ErrorHint, "package:flutter/src/foundation/assertions.dart");
  assertions.ErrorSpacer = class ErrorSpacer extends diagnostics$.DiagnosticsProperty$(dart.void) {};
  (assertions.ErrorSpacer.new = function() {
    assertions.ErrorSpacer.__proto__.new.call(this, "", null, {description: "", showName: false});
    ;
  }).prototype = assertions.ErrorSpacer.prototype;
  dart.addTypeTests(assertions.ErrorSpacer);
  dart.setLibraryUri(assertions.ErrorSpacer, "package:flutter/src/foundation/assertions.dart");
  var _exceptionToDiagnosticable = dart.privateName(assertions, "_exceptionToDiagnosticable");
  var exception$ = dart.privateName(assertions, "FlutterErrorDetails.exception");
  var stack$ = dart.privateName(assertions, "FlutterErrorDetails.stack");
  var library$ = dart.privateName(assertions, "FlutterErrorDetails.library");
  var context$ = dart.privateName(assertions, "FlutterErrorDetails.context");
  var stackFilter$ = dart.privateName(assertions, "FlutterErrorDetails.stackFilter");
  var informationCollector$ = dart.privateName(assertions, "FlutterErrorDetails.informationCollector");
  var silent$ = dart.privateName(assertions, "FlutterErrorDetails.silent");
  assertions.FlutterErrorDetails = class FlutterErrorDetails extends diagnostics$.Diagnosticable {
    get exception() {
      return this[exception$];
    }
    set exception(value) {
      super.exception = value;
    }
    get stack() {
      return this[stack$];
    }
    set stack(value) {
      super.stack = value;
    }
    get library() {
      return this[library$];
    }
    set library(value) {
      super.library = value;
    }
    get context() {
      return this[context$];
    }
    set context(value) {
      super.context = value;
    }
    get stackFilter() {
      return this[stackFilter$];
    }
    set stackFilter(value) {
      super.stackFilter = value;
    }
    get informationCollector() {
      return this[informationCollector$];
    }
    set informationCollector(value) {
      super.informationCollector = value;
    }
    get silent() {
      return this[silent$];
    }
    set silent(value) {
      super.silent = value;
    }
    exceptionAsString() {
      let longMessage = null;
      if (core.AssertionError.is(this.exception)) {
        let message = dart.dload(this.exception, 'message');
        let fullMessage = dart.toString(this.exception);
        if (typeof message == 'string' && message != fullMessage) {
          if (fullMessage.length > message.length) {
            let position = fullMessage[$lastIndexOf](message);
            if (position === fullMessage.length - message.length && position > 2 && fullMessage[$substring](position - 2, position) === ": ") {
              let body = fullMessage[$substring](0, position - 2);
              let splitPoint = body[$indexOf](" Failed assertion:");
              if (splitPoint >= 0) {
                body = body[$substring](0, splitPoint) + "\n" + body[$substring](splitPoint + 1);
              }
              longMessage = message[$trimRight]() + "\n" + body;
            }
          }
        }
        longMessage == null ? longMessage = fullMessage : null;
      } else if (typeof this.exception == 'string') {
        longMessage = core.String.as(this.exception);
      } else if (core.Error.is(this.exception) || core.Exception.is(this.exception)) {
        longMessage = dart.toString(this.exception);
      } else {
        longMessage = "  " + dart.str(dart.toString(this.exception));
      }
      longMessage = longMessage[$trimRight]();
      if (longMessage[$isEmpty]) longMessage = "  <no message available>";
      return longMessage;
    }
    [_exceptionToDiagnosticable]() {
      if (assertions.FlutterError.is(this.exception)) {
        return assertions.FlutterError.as(this.exception);
      }
      if (core.AssertionError.is(this.exception) && assertions.FlutterError.is(dart.dload(this.exception, 'message'))) {
        return assertions.FlutterError.as(dart.dload(this.exception, 'message'));
      }
      return null;
    }
    get summary() {
      let t3;
      const formatException = () => {
        return this.exceptionAsString()[$split]("\n")[$_get](0)[$trimLeft]();
      };
      dart.fn(formatException, VoidToString());
      if (false) {
        return diagnostics$.DiagnosticsNode.message(formatException());
      }
      let diagnosticable = this[_exceptionToDiagnosticable]();
      let summary = null;
      if (diagnosticable != null) {
        let builder = new diagnostics$.DiagnosticPropertiesBuilder.new();
        this.debugFillProperties(builder);
        summary = builder.properties[$firstWhere](dart.fn(node => dart.equals(node.level, diagnostics$.DiagnosticLevel.summary), DiagnosticsNodeTobool()), {orElse: dart.fn(() => null, VoidToNull())});
      }
      t3 = summary;
      return t3 == null ? new assertions.ErrorSummary.new(formatException()) : t3;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      let verb = new assertions.ErrorDescription.new("thrown" + dart.str(this.context != null ? new assertions.ErrorDescription.new(" " + dart.str(this.context)) : ""));
      let diagnosticable = this[_exceptionToDiagnosticable]();
      if (core.NullThrownError.is(this.exception)) {
        properties.add(new assertions.ErrorDescription.new("The null value was " + dart.str(verb) + "."));
      } else if (typeof this.exception == 'number') {
        properties.add(new assertions.ErrorDescription.new("The number " + dart.str(this.exception) + " was " + dart.str(verb) + "."));
      } else {
        let errorName = null;
        if (core.AssertionError.is(this.exception)) {
          errorName = new assertions.ErrorDescription.new("assertion");
        } else if (typeof this.exception == 'string') {
          errorName = new assertions.ErrorDescription.new("message");
        } else if (core.Error.is(this.exception) || core.Exception.is(this.exception)) {
          errorName = new assertions.ErrorDescription.new(dart.str(dart.runtimeType(this.exception)));
        } else {
          errorName = new assertions.ErrorDescription.new(dart.str(dart.runtimeType(this.exception)) + " object");
        }
        properties.add(new assertions.ErrorDescription.new("The following " + dart.str(errorName) + " was " + dart.str(verb) + ":"));
        if (diagnosticable != null) {
          diagnosticable.debugFillProperties(properties);
        } else {
          let prefix = dart.str(dart.runtimeType(this.exception)) + ": ";
          let message = this.exceptionAsString();
          if (message[$startsWith](prefix)) message = message[$substring](prefix.length);
          properties.add(new assertions.ErrorSummary.new(message));
        }
      }
      if (this.stack != null) {
        if (core.AssertionError.is(this.exception) && diagnosticable == null) {
          let stackFrames = stack_frame.StackFrame.fromStackTrace(this.stack)[$skipWhile](dart.fn(frame => frame.packageScheme === "dart", StackFrameTobool()))[$toList]();
          let ourFault = dart.notNull(stackFrames[$length]) >= 2 && stackFrames[$_get](0).package === "flutter" && stackFrames[$_get](1).package === "flutter";
          if (ourFault) {
            properties.add(new assertions.ErrorSpacer.new());
            properties.add(new assertions.ErrorHint.new("Either the assertion indicates an error in the framework itself, or we should " + "provide substantially more information in this error message to help you determine " + "and fix the underlying cause.\n" + "In either case, please report this assertion by filing a bug on GitHub:\n" + "  https://github.com/flutter/flutter/issues/new?template=BUG.md"));
          }
        }
        properties.add(new assertions.ErrorSpacer.new());
        properties.add(new assertions.DiagnosticsStackTrace.new("When the exception was thrown, this was the stack", this.stack, {stackFilter: this.stackFilter}));
      }
      if (this.informationCollector != null) {
        properties.add(new assertions.ErrorSpacer.new());
        this.informationCollector()[$forEach](dart.bind(properties, 'add'));
      }
    }
    toStringShort() {
      return this.library != null ? "Exception caught by " + dart.str(this.library) : "Exception caught";
    }
    toString(opts) {
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C11 || CT.C11;
      return this.toDiagnosticsNode({style: diagnostics$.DiagnosticsTreeStyle.error}).toStringDeep({minLevel: minLevel});
    }
    toDiagnosticsNode(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let style = opts && 'style' in opts ? opts.style : null;
      return new assertions._FlutterErrorDetailsNode.new({name: name, value: this, style: style});
    }
  };
  (assertions.FlutterErrorDetails.new = function(opts) {
    let exception = opts && 'exception' in opts ? opts.exception : null;
    let stack = opts && 'stack' in opts ? opts.stack : null;
    let library = opts && 'library' in opts ? opts.library : "Flutter framework";
    let context = opts && 'context' in opts ? opts.context : null;
    let stackFilter = opts && 'stackFilter' in opts ? opts.stackFilter : null;
    let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
    let silent = opts && 'silent' in opts ? opts.silent : false;
    this[exception$] = exception;
    this[stack$] = stack;
    this[library$] = library;
    this[context$] = context;
    this[stackFilter$] = stackFilter;
    this[informationCollector$] = informationCollector;
    this[silent$] = silent;
    assertions.FlutterErrorDetails.__proto__.new.call(this);
    ;
  }).prototype = assertions.FlutterErrorDetails.prototype;
  dart.addTypeTests(assertions.FlutterErrorDetails);
  dart.setMethodSignature(assertions.FlutterErrorDetails, () => ({
    __proto__: dart.getMethods(assertions.FlutterErrorDetails.__proto__),
    exceptionAsString: dart.fnType(core.String, []),
    [_exceptionToDiagnosticable]: dart.fnType(diagnostics$.DiagnosticableMixin, [])
  }));
  dart.setGetterSignature(assertions.FlutterErrorDetails, () => ({
    __proto__: dart.getGetters(assertions.FlutterErrorDetails.__proto__),
    summary: diagnostics$.DiagnosticsNode
  }));
  dart.setLibraryUri(assertions.FlutterErrorDetails, "package:flutter/src/foundation/assertions.dart");
  dart.setFieldSignature(assertions.FlutterErrorDetails, () => ({
    __proto__: dart.getFields(assertions.FlutterErrorDetails.__proto__),
    exception: dart.finalFieldType(dart.dynamic),
    stack: dart.finalFieldType(core.StackTrace),
    library: dart.finalFieldType(core.String),
    context: dart.finalFieldType(diagnostics$.DiagnosticsNode),
    stackFilter: dart.finalFieldType(dart.fnType(core.Iterable$(core.String), [core.Iterable$(core.String)])),
    informationCollector: dart.finalFieldType(dart.fnType(core.Iterable$(diagnostics$.DiagnosticsNode), [])),
    silent: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(assertions.FlutterErrorDetails, ['toString']);
  dart.defineLazy(assertions.FlutterErrorDetails, {
    /*assertions.FlutterErrorDetails.propertiesTransformers*/get propertiesTransformers() {
      return JSArrayOfIterableOfDiagnosticsNodeToIterableOfDiagnosticsNode().of([]);
    }
  });
  var diagnostics$0 = dart.privateName(assertions, "FlutterError.diagnostics");
  var C49;
  const Error_DiagnosticableTreeMixin$36 = class Error_DiagnosticableTreeMixin extends core.Error {};
  (Error_DiagnosticableTreeMixin$36.new = function() {
    Error_DiagnosticableTreeMixin$36.__proto__.new.call(this);
  }).prototype = Error_DiagnosticableTreeMixin$36.prototype;
  dart.applyMixin(Error_DiagnosticableTreeMixin$36, diagnostics$.DiagnosticableTreeMixin);
  assertions.FlutterError = class FlutterError extends Error_DiagnosticableTreeMixin$36 {
    get diagnostics() {
      return this[diagnostics$0];
    }
    set diagnostics(value) {
      super.diagnostics = value;
    }
    static new(message) {
      let lines = message[$split]("\n");
      return new assertions.FlutterError.fromParts((() => {
        let t3 = JSArrayOfDiagnosticsNode().of([]);
        t3[$add](new assertions.ErrorSummary.new(lines[$first]));
        for (let t4 of lines[$skip](1)[$map](diagnostics$.DiagnosticsNode, dart.fn(line => new assertions.ErrorDescription.new(line), StringToErrorDescription())))
          t3[$add](t4);
        return t3;
      })());
    }
    get message() {
      return this.toString();
    }
    static resetErrorCount() {
      assertions.FlutterError._errorCount = 0;
    }
    static dumpErrorToConsole(details, opts) {
      let forceReport = opts && 'forceReport' in opts ? opts.forceReport : false;
      if (!(details != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/assertions.dart", 759, 12, "details != null");
      if (!(details.exception != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/assertions.dart", 760, 12, "details.exception != null");
      let reportError = !dart.equals(details.silent, true);
      if (!dart.test(dart.fn(() => {
        reportError = true;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/assertions.dart", 762, 12, "() {\r\n      // In checked mode, we ignore the \"silent\" flag.\r\n      reportError = true;\r\n      return true;\r\n    }()");
      if (!reportError && !dart.test(forceReport)) return;
      if (assertions.FlutterError._errorCount === 0 || dart.test(forceReport)) {
        print.debugPrint(new diagnostics$.TextTreeRenderer.new({wrapWidth: 100, wrapWidthProperties: 100, maxDescendentsTruncatableNode: 5}).render(details.toDiagnosticsNode({style: diagnostics$.DiagnosticsTreeStyle.error}))[$trimRight]());
      } else {
        print.debugPrint("Another exception was thrown: " + dart.str(details.summary));
      }
      assertions.FlutterError._errorCount = dart.notNull(assertions.FlutterError._errorCount) + 1;
    }
    static addDefaultStackFilter(filter) {
      assertions.FlutterError._stackFilters[$add](filter);
    }
    static defaultStackFilter(frames) {
      let t6, t5, t6$, t5$, t5$0, t6$0;
      let removedPackagesAndClasses = new (IdentityMapOfString$int()).from(["dart:async-patch", 0, "dart:async", 0, "package:stack_trace", 0, "class _AssertionError", 0, "class _FakeAsync", 0, "class _FrameCallbackEntry", 0, "class _Timer", 0, "class _RawReceivePortImpl", 0]);
      let skipped = 0;
      let parsedFrames = stack_frame.StackFrame.fromStackString(frames[$join]("\n"));
      for (let index = 0; index < dart.notNull(parsedFrames[$length]); index = index + 1) {
        let frame = parsedFrames[$_get](index);
        let className = "class " + dart.str(frame.className);
        let $package = dart.str(frame.packageScheme) + ":" + dart.str(frame.package);
        if (dart.test(removedPackagesAndClasses[$containsKey](className))) {
          skipped = skipped + 1;
          t5 = removedPackagesAndClasses;
          t6 = className;
          t5[$_set](t6, dart.notNull(t5[$_get](t6)) + 1);
          parsedFrames[$removeAt](index);
          index = index - 1;
        } else if (dart.test(removedPackagesAndClasses[$containsKey]($package))) {
          skipped = skipped + 1;
          t5$ = removedPackagesAndClasses;
          t6$ = $package;
          t5$[$_set](t6$, dart.notNull(t5$[$_get](t6$)) + 1);
          parsedFrames[$removeAt](index);
          index = index - 1;
        }
      }
      let reasons = ListOfString().new(parsedFrames[$length]);
      for (let filter of assertions.FlutterError._stackFilters) {
        filter.filter(parsedFrames, reasons);
      }
      let result = JSArrayOfString().of([]);
      for (let index = 0; index < dart.notNull(parsedFrames[$length]); index = index + 1) {
        let start = index;
        while (index < dart.notNull(reasons[$length]) - 1 && reasons[$_get](index) != null && reasons[$_get](index + 1) == reasons[$_get](index)) {
          index = index + 1;
        }
        let suffix = "";
        if (reasons[$_get](index) != null) {
          if (index !== start) {
            suffix = " (" + dart.str(index - start + 2) + " frames)";
          } else {
            suffix = " (1 frame)";
          }
        }
        let resultLine = dart.str((t5$0 = reasons[$_get](index), t5$0 == null ? parsedFrames[$_get](index).source : t5$0)) + suffix;
        result[$add](resultLine);
      }
      let where = (t6$0 = (() => {
        let t5 = JSArrayOfString().of([]);
        for (let entry of removedPackagesAndClasses[$entries])
          if (dart.notNull(entry.value) > 0) t5[$add](entry.key);
        return t5;
      })(), t6$0[$sort](), t6$0);
      if (skipped === 1) {
        result[$add]("(elided one frame from " + dart.str(where[$single]) + ")");
      } else if (skipped > 1) {
        if (dart.notNull(where[$length]) > 1) where[$_set](dart.notNull(where[$length]) - 1, "and " + dart.str(where[$last]));
        if (dart.notNull(where[$length]) > 2) {
          result[$add]("(elided " + dart.str(skipped) + " frames from " + dart.str(where[$join](", ")) + ")");
        } else {
          result[$add]("(elided " + dart.str(skipped) + " frames from " + dart.str(where[$join](" ")) + ")");
        }
      }
      return result;
    }
    debugFillProperties(properties) {
      let t6;
      t6 = this.diagnostics;
      t6 == null ? null : t6[$forEach](dart.bind(properties, 'add'));
    }
    toStringShort() {
      return "FlutterError";
    }
    toString(opts) {
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C11 || CT.C11;
      let renderer = new diagnostics$.TextTreeRenderer.new({wrapWidth: 4000000000});
      return this.diagnostics[$map](core.String, dart.fn(node => renderer.render(node)[$trimRight](), DiagnosticsNodeToString()))[$join]("\n");
    }
    static reportError(details) {
      if (!(details != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/assertions.dart", 900, 12, "details != null");
      if (!(details.exception != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/assertions.dart", 901, 12, "details.exception != null");
      if (assertions.FlutterError.onError != null) assertions.FlutterError.onError(details);
    }
  };
  (assertions.FlutterError.fromParts = function(diagnostics) {
    this[diagnostics$0] = diagnostics;
    if (!dart.test(diagnostics[$isNotEmpty])) dart.assertFailed(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Empty FlutterError")])), "org-dartlang-app:///packages/flutter/src/foundation/assertions.dart", 650, 53, "diagnostics.isNotEmpty");
    assertions.FlutterError.__proto__.new.call(this);
    if (!dart.equals(this.diagnostics[$first].level, diagnostics$.DiagnosticLevel.summary)) dart.assertFailed(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("FlutterError is missing a summary."), new assertions.ErrorDescription.new("All FlutterError objects should start with a short (one line) " + "summary description of the problem that was detected."), new (DiagnosticsPropertyOfFlutterError()).new("Malformed", this, {expandableValue: true, showSeparator: false, style: diagnostics$.DiagnosticsTreeStyle.whitespace}), new assertions.ErrorDescription.new("\nThis error should still help you solve your problem, " + "however please also report this malformed error in the " + "framework by filing a bug on GitHub:\n" + "  https://github.com/flutter/flutter/issues/new?template=BUG.md")])), "org-dartlang-app:///packages/flutter/src/foundation/assertions.dart", 652, 7, "diagnostics.first.level == DiagnosticLevel.summary");
    if (!dart.test(dart.fn(() => {
      let summaries = this.diagnostics[$where](dart.fn(node => dart.equals(node.level, diagnostics$.DiagnosticLevel.summary), DiagnosticsNodeTobool()));
      if (dart.notNull(summaries[$length]) > 1) {
        let message = JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("FlutterError contained multiple error summaries."), new assertions.ErrorDescription.new("All FlutterError objects should have only a single short " + "(one line) summary description of the problem that was " + "detected."), new (DiagnosticsPropertyOfFlutterError()).new("Malformed", this, {expandableValue: true, showSeparator: false, style: diagnostics$.DiagnosticsTreeStyle.whitespace}), new assertions.ErrorDescription.new("\nThe malformed error has " + dart.str(summaries[$length]) + " summaries.")]);
        let i = 1;
        for (let summary of summaries) {
          message[$add](new (DiagnosticsPropertyOfDiagnosticsNode()).new("Summary " + dart.str(i), summary, {expandableValue: true}));
          i = i + 1;
        }
        message[$add](new assertions.ErrorDescription.new("\nThis error should still help you solve your problem, " + "however please also report this malformed error in the " + "framework by filing a bug on GitHub:\n" + "  https://github.com/flutter/flutter/issues/new?template=BUG.md"));
        dart.throw(new assertions.FlutterError.fromParts(message));
      }
      return true;
    }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/assertions.dart", 668, 12, "() {\r\n      final Iterable<DiagnosticsNode> summaries = diagnostics.where((DiagnosticsNode node) => node.level == DiagnosticLevel.summary);\r\n      if (summaries.length > 1) {\r\n        final List<DiagnosticsNode> message = <DiagnosticsNode>[\r\n          ErrorSummary('FlutterError contained multiple error summaries.'),\r\n          ErrorDescription(\r\n            'All FlutterError objects should have only a single short '\r\n            '(one line) summary description of the problem that was '\r\n            'detected.'\r\n          ),\r\n          DiagnosticsProperty<FlutterError>('Malformed', this, expandableValue: true, showSeparator: false, style: DiagnosticsTreeStyle.whitespace),\r\n          ErrorDescription('\\nThe malformed error has ${summaries.length} summaries.'),\r\n        ];\r\n        int i = 1;\r\n        for (final DiagnosticsNode summary in summaries) {\r\n          message.add(DiagnosticsProperty<DiagnosticsNode>('Summary $i', summary, expandableValue : true));\r\n          i += 1;\r\n        }\r\n        message.add(ErrorDescription(\r\n          '\\nThis error should still help you solve your problem, '\r\n          'however please also report this malformed error in the '\r\n          'framework by filing a bug on GitHub:\\n'\r\n          '  https://github.com/flutter/flutter/issues/new?template=BUG.md'\r\n        ));\r\n        throw FlutterError.fromParts(message);\r\n      }\r\n      return true;\r\n    }()");
  }).prototype = assertions.FlutterError.prototype;
  dart.addTypeTests(assertions.FlutterError);
  assertions.FlutterError[dart.implements] = () => [core.AssertionError];
  dart.setGetterSignature(assertions.FlutterError, () => ({
    __proto__: dart.getGetters(assertions.FlutterError.__proto__),
    message: core.String
  }));
  dart.setLibraryUri(assertions.FlutterError, "package:flutter/src/foundation/assertions.dart");
  dart.setFieldSignature(assertions.FlutterError, () => ({
    __proto__: dart.getFields(assertions.FlutterError.__proto__),
    diagnostics: dart.finalFieldType(core.List$(diagnostics$.DiagnosticsNode))
  }));
  dart.defineExtensionMethods(assertions.FlutterError, ['toString']);
  dart.defineLazy(assertions.FlutterError, {
    /*assertions.FlutterError.onError*/get onError() {
      return C49 || CT.C49;
    },
    set onError(_) {},
    /*assertions.FlutterError._errorCount*/get _errorCount() {
      return 0;
    },
    set _errorCount(_) {},
    /*assertions.FlutterError.wrapWidth*/get wrapWidth() {
      return 100;
    },
    /*assertions.FlutterError._stackFilters*/get _stackFilters() {
      return JSArrayOfStackFilter().of([]);
    }
  });
  var C50;
  var C51;
  assertions.DiagnosticsStackTrace = class DiagnosticsStackTrace extends diagnostics$.DiagnosticsBlock {
    static _createStackFrame(frame) {
      return diagnostics$.DiagnosticsNode.message(frame, {allowWrap: false});
    }
  };
  (assertions.DiagnosticsStackTrace.new = function(name, stack, opts) {
    let t6;
    let stackFilter = opts && 'stackFilter' in opts ? opts.stackFilter : null;
    let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
    assertions.DiagnosticsStackTrace.__proto__.new.call(this, {name: name, value: stack, properties: stack == null ? JSArrayOfDiagnosticsNode().of([]) : (t6 = stackFilter, t6 == null ? C50 || CT.C50 : t6)(dart.toString(stack)[$trimRight]()[$split]("\n"))[$map](diagnostics$.DiagnosticsNode, C51 || CT.C51)[$toList](), style: diagnostics$.DiagnosticsTreeStyle.flat, showSeparator: showSeparator, allowTruncate: true});
    ;
  }).prototype = assertions.DiagnosticsStackTrace.prototype;
  (assertions.DiagnosticsStackTrace.singleFrame = function(name, opts) {
    let frame = opts && 'frame' in opts ? opts.frame : null;
    let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
    assertions.DiagnosticsStackTrace.__proto__.new.call(this, {name: name, properties: JSArrayOfDiagnosticsNode().of([assertions.DiagnosticsStackTrace._createStackFrame(frame)]), style: diagnostics$.DiagnosticsTreeStyle.whitespace, showSeparator: showSeparator});
    ;
  }).prototype = assertions.DiagnosticsStackTrace.prototype;
  dart.addTypeTests(assertions.DiagnosticsStackTrace);
  dart.setLibraryUri(assertions.DiagnosticsStackTrace, "package:flutter/src/foundation/assertions.dart");
  assertions._FlutterErrorDetailsNode = class _FlutterErrorDetailsNode extends diagnostics$.DiagnosticableNode$(assertions.FlutterErrorDetails) {
    get builder() {
      let builder = super.builder;
      if (builder == null) {
        return null;
      }
      let properties = builder.properties;
      for (let transformer of assertions.FlutterErrorDetails.propertiesTransformers) {
        properties = transformer(properties);
      }
      return new diagnostics$.DiagnosticPropertiesBuilder.fromProperties(properties[$toList]());
    }
  };
  (assertions._FlutterErrorDetailsNode.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let style = opts && 'style' in opts ? opts.style : null;
    assertions._FlutterErrorDetailsNode.__proto__.new.call(this, {name: name, value: value, style: style});
    ;
  }).prototype = assertions._FlutterErrorDetailsNode.prototype;
  dart.addTypeTests(assertions._FlutterErrorDetailsNode);
  dart.setLibraryUri(assertions._FlutterErrorDetailsNode, "package:flutter/src/foundation/assertions.dart");
  assertions.debugPrintStack = function debugPrintStack(opts) {
    let stackTrace = opts && 'stackTrace' in opts ? opts.stackTrace : null;
    let label = opts && 'label' in opts ? opts.label : null;
    let maxFrames = opts && 'maxFrames' in opts ? opts.maxFrames : null;
    if (label != null) print.debugPrint(label);
    stackTrace == null ? stackTrace = core.StackTrace.current : null;
    let lines = dart.toString(stackTrace)[$trimRight]()[$split]("\n");
    if (true && dart.test(lines[$isNotEmpty])) {
      lines = lines[$skipWhile](dart.fn(line => line[$contains]("StackTrace.current") || line[$contains]("dart:sdk_internal"), StringTobool()));
    }
    if (maxFrames != null) lines = lines[$take](maxFrames);
    print.debugPrint(assertions.FlutterError.defaultStackFilter(lines)[$join]("\n"));
  };
  dart.defineLazy(constants, {
    /*constants.kReleaseMode*/get kReleaseMode() {
      return false;
    },
    /*constants.kProfileMode*/get kProfileMode() {
      return false;
    },
    /*constants.kDebugMode*/get kDebugMode() {
      return true;
    },
    /*constants.precisionErrorTolerance*/get precisionErrorTolerance() {
      return 1e-10;
    },
    /*constants.kIsWeb*/get kIsWeb() {
      return true;
    }
  });
  collections.setEquals = function setEquals(T, a, b) {
    if (a == null) return b == null;
    if (b == null || a[$length] != b[$length]) return false;
    if (a == b) return true;
    for (let value of a) {
      if (!dart.test(b.contains(value))) return false;
    }
    return true;
  };
  collections.listEquals = function listEquals(T, a, b) {
    if (a == null) return b == null;
    if (b == null || a[$length] != b[$length]) return false;
    if (a == b) return true;
    for (let index = 0; index < dart.notNull(a[$length]); index = index + 1) {
      if (!dart.equals(a[$_get](index), b[$_get](index))) return false;
    }
    return true;
  };
  collections.mapEquals = function mapEquals(T, U, a, b) {
    if (a == null) return b == null;
    if (b == null || a[$length] != b[$length]) return false;
    if (a == b) return true;
    for (let key of a[$keys]) {
      if (!dart.test(b[$containsKey](key)) || !dart.equals(b[$_get](key), a[$_get](key))) {
        return false;
      }
    }
    return true;
  };
  collections.binarySearch = function binarySearch(T, sortedList, value) {
    let min = 0;
    let max = sortedList[$length];
    while (min < dart.notNull(max)) {
      let mid = min + (dart.notNull(max) - min)[$rightShift](1);
      let element = sortedList[$_get](mid);
      let comp = element[$compareTo](value);
      if (comp === 0) {
        return mid;
      }
      if (dart.notNull(comp) < 0) {
        min = mid + 1;
      } else {
        max = mid;
      }
    }
    return -1;
  };
  var _lockCount = dart.privateName(binding, "_lockCount");
  var C52;
  var _postExtensionStateChangedEvent = dart.privateName(binding, "_postExtensionStateChangedEvent");
  binding.BindingBase = class BindingBase extends core.Object {
    get window() {
      return ui.window;
    }
    initInstances() {
      if (!!dart.test(binding.BindingBase._debugInitialized)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/binding.dart", 101, 12, "!_debugInitialized");
      if (!dart.test(dart.fn(() => {
        binding.BindingBase._debugInitialized = true;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/binding.dart", 102, 12, "() {\r\n      _debugInitialized = true;\r\n      return true;\r\n    }()");
    }
    initServiceExtensions() {
      if (!!dart.test(binding.BindingBase._debugServiceExtensionsRegistered)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/binding.dart", 129, 12, "!_debugServiceExtensionsRegistered");
      if (!dart.test(dart.fn(() => {
        this.registerSignalServiceExtension({name: "reassemble", callback: dart.bind(this, 'reassembleApplication')});
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/binding.dart", 131, 12, "() {\r\n      registerSignalServiceExtension(\r\n        name: 'reassemble',\r\n        callback: reassembleApplication,\r\n      );\r\n      return true;\r\n    }()");
      if (!false && !true) {
        this.registerSignalServiceExtension({name: "exit", callback: C52 || CT.C52});
        this.registerServiceExtension({name: "saveCompilationTrace", callback: dart.fn(parameters => async.async(MapOfString$dynamic(), function*() {
            return new (IdentityMapOfString$dynamic()).from(["value", ui.saveCompilationTrace()]);
          }), MapOfString$StringToFutureOfMapOfString$dynamic())});
      }
      if (!dart.test(dart.fn(() => {
        this.registerServiceExtension({name: "platformOverride", callback: dart.fn(parameters => async.async(MapOfString$dynamic(), (function*() {
            if (dart.test(parameters[$containsKey]("value"))) {
              switch (parameters[$_get]("value")) {
                case "android":
                {
                  platform.debugDefaultTargetPlatformOverride = platform.TargetPlatform.android;
                  break;
                }
                case "iOS":
                {
                  platform.debugDefaultTargetPlatformOverride = platform.TargetPlatform.iOS;
                  break;
                }
                case "macOS":
                {
                  platform.debugDefaultTargetPlatformOverride = platform.TargetPlatform.macOS;
                  break;
                }
                case "fuchsia":
                {
                  platform.debugDefaultTargetPlatformOverride = platform.TargetPlatform.fuchsia;
                  break;
                }
                case "default":
                default:
                {
                  platform.debugDefaultTargetPlatformOverride = null;
                }
              }
              this[_postExtensionStateChangedEvent]("platformOverride", dart.toString(platform.defaultTargetPlatform)[$substring]((dart.str(dart.wrapType(platform.TargetPlatform)) + ".").length));
              yield this.reassembleApplication();
            }
            return new (IdentityMapOfString$dynamic()).from(["value", dart.toString(platform.defaultTargetPlatform)[$substring]((dart.str(dart.wrapType(platform.TargetPlatform)) + ".").length)]);
          }).bind(this)), MapOfString$StringToFutureOfMapOfString$dynamic())});
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/binding.dart", 154, 12, "() {\r\n      const String platformOverrideExtensionName = 'platformOverride';\r\n      registerServiceExtension(\r\n        name: platformOverrideExtensionName,\r\n        callback: (Map<String, String> parameters) async {\r\n          if (parameters.containsKey('value')) {\r\n            switch (parameters['value']) {\r\n              case 'android':\r\n                debugDefaultTargetPlatformOverride = TargetPlatform.android;\r\n                break;\r\n              case 'iOS':\r\n                debugDefaultTargetPlatformOverride = TargetPlatform.iOS;\r\n                break;\r\n              case 'macOS':\r\n                debugDefaultTargetPlatformOverride = TargetPlatform.macOS;\r\n                break;\r\n              case 'fuchsia':\r\n                debugDefaultTargetPlatformOverride = TargetPlatform.fuchsia;\r\n                break;\r\n              case 'default':\r\n              default:\r\n                debugDefaultTargetPlatformOverride = null;\r\n            }\r\n            _postExtensionStateChangedEvent(\r\n              platformOverrideExtensionName,\r\n              defaultTargetPlatform.toString().substring('$TargetPlatform.'.length),\r\n            );\r\n            await reassembleApplication();\r\n          }\r\n          return <String, dynamic>{\r\n            'value': defaultTargetPlatform\r\n                     .toString()\r\n                     .substring('$TargetPlatform.'.length),\r\n          };\r\n        },\r\n      );\r\n      return true;\r\n    }()");
      if (!dart.test(dart.fn(() => {
        binding.BindingBase._debugServiceExtensionsRegistered = true;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/binding.dart", 192, 12, "() {\r\n      _debugServiceExtensionsRegistered = true;\r\n      return true;\r\n    }()");
    }
    get locked() {
      return dart.notNull(this[_lockCount]) > 0;
    }
    lockEvents(callback) {
      developer.Timeline.startSync("Lock events");
      if (!(callback != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/binding.dart", 221, 12, "callback != null");
      this[_lockCount] = dart.notNull(this[_lockCount]) + 1;
      let future = callback();
      if (!(future != null)) dart.assertFailed("The lockEvents() callback returned null; it should return a Future<void> that completes when the lock is to expire.", "org-dartlang-app:///packages/flutter/src/foundation/binding.dart", 224, 12, "future != null");
      future.whenComplete(dart.fn(() => {
        this[_lockCount] = dart.notNull(this[_lockCount]) - 1;
        if (!dart.test(this.locked)) {
          developer.Timeline.finishSync();
          this.unlocked();
        }
      }, VoidToNull()));
      return future;
    }
    unlocked() {
      if (!!dart.test(this.locked)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/binding.dart", 241, 12, "!locked");
    }
    reassembleApplication() {
      return this.lockEvents(dart.bind(this, 'performReassemble'));
    }
    performReassemble() {
      assertions.FlutterError.resetErrorCount();
      return FutureOfvoid().value();
    }
    registerSignalServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let callback = opts && 'callback' in opts ? opts.callback : null;
      if (!(name != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/binding.dart", 295, 12, "name != null");
      if (!(callback != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/binding.dart", 296, 12, "callback != null");
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(MapOfString$dynamic(), function*() {
          yield callback();
          return new (IdentityMapOfString$dynamic()).new();
        }), MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    registerBoolServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let getter = opts && 'getter' in opts ? opts.getter : null;
      let setter = opts && 'setter' in opts ? opts.setter : null;
      if (!(name != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/binding.dart", 326, 12, "name != null");
      if (!(getter != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/binding.dart", 327, 12, "getter != null");
      if (!(setter != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/binding.dart", 328, 12, "setter != null");
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(MapOfString$dynamic(), (function*() {
          if (dart.test(parameters[$containsKey]("enabled"))) {
            yield setter(parameters[$_get]("enabled") === "true");
            this[_postExtensionStateChangedEvent](name, dart.test(yield getter()) ? "true" : "false");
          }
          return new (IdentityMapOfString$dynamic()).from(["enabled", dart.test(yield getter()) ? "true" : "false"]);
        }).bind(this)), MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    registerNumericServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let getter = opts && 'getter' in opts ? opts.getter : null;
      let setter = opts && 'setter' in opts ? opts.setter : null;
      if (!(name != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/binding.dart", 360, 12, "name != null");
      if (!(getter != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/binding.dart", 361, 12, "getter != null");
      if (!(setter != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/binding.dart", 362, 12, "setter != null");
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(MapOfString$dynamic(), (function*() {
          if (dart.test(parameters[$containsKey](name))) {
            yield setter(core.double.parse(parameters[$_get](name)));
            this[_postExtensionStateChangedEvent](name, dart.toString(yield getter()));
          }
          return new (IdentityMapOfString$dynamic()).from([name, dart.toString(yield getter())]);
        }).bind(this)), MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    [_postExtensionStateChangedEvent](name, value) {
      this.postEvent("Flutter.ServiceExtensionStateChanged", new (IdentityMapOfString$dynamic()).from(["extension", "ext.flutter." + dart.str(name), "value", value]));
    }
    postEvent(eventKind, eventData) {
      developer.postEvent(eventKind, eventData);
    }
    registerStringServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let getter = opts && 'getter' in opts ? opts.getter : null;
      let setter = opts && 'setter' in opts ? opts.setter : null;
      if (!(name != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/binding.dart", 422, 12, "name != null");
      if (!(getter != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/binding.dart", 423, 12, "getter != null");
      if (!(setter != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/binding.dart", 424, 12, "setter != null");
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(MapOfString$dynamic(), (function*() {
          if (dart.test(parameters[$containsKey]("value"))) {
            yield setter(parameters[$_get]("value"));
            this[_postExtensionStateChangedEvent](name, yield getter());
          }
          return new (IdentityMapOfString$dynamic()).from(["value", (yield getter())]);
        }).bind(this)), MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    registerServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let callback = opts && 'callback' in opts ? opts.callback : null;
      if (!(name != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/binding.dart", 493, 12, "name != null");
      if (!(callback != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/binding.dart", 494, 12, "callback != null");
      let methodName = "ext.flutter." + dart.str(name);
      developer.registerExtension(methodName, dart.fn((method, parameters) => async.async(developer.ServiceExtensionResponse, function*() {
        if (!(method === methodName)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/binding.dart", 497, 14, "method == methodName");
        if (!dart.test(dart.fn(() => {
          if (dart.test(debug.debugInstrumentationEnabled)) print.debugPrint("service extension method received: " + dart.str(method) + "(" + dart.str(parameters) + ")");
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/binding.dart", 498, 14, "() {\r\n        if (debugInstrumentationEnabled)\r\n          debugPrint('service extension method received: $method($parameters)');\r\n        return true;\r\n      }()");
        yield debug.debugInstrumentAction(dart.void, "Wait for outer event loop", dart.fn(() => FutureOfvoid().delayed(core.Duration.zero), VoidToFutureOfvoid()));
        let caughtException = null;
        let caughtStack = null;
        let result = null;
        try {
          result = (yield callback(parameters));
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          caughtException = exception;
          caughtStack = stack;
        }
        if (caughtException == null) {
          result[$_set]("type", "_extensionType");
          result[$_set]("method", method);
          return new developer.ServiceExtensionResponse.result(convert.json.encode(result));
        } else {
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: caughtException, stack: caughtStack, context: new assertions.ErrorDescription.new("during a service extension callback for \"" + dart.str(method) + "\"")}));
          return new developer.ServiceExtensionResponse.error(-32000, convert.json.encode(new (IdentityMapOfString$String()).from(["exception", dart.toString(caughtException), "stack", dart.toString(caughtStack), "method", method])));
        }
      }), StringAndMapOfString$StringToFutureOfServiceExtensionResponse()));
    }
    toString() {
      return "<" + dart.str(object$.objectRuntimeType(this, "BindingBase")) + ">";
    }
  };
  (binding.BindingBase.new = function() {
    this[_lockCount] = 0;
    developer.Timeline.startSync("Framework initialization");
    if (!!dart.test(binding.BindingBase._debugInitialized)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/binding.dart", 56, 12, "!_debugInitialized");
    this.initInstances();
    if (!dart.test(binding.BindingBase._debugInitialized)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/binding.dart", 58, 12, "_debugInitialized");
    if (!!dart.test(binding.BindingBase._debugServiceExtensionsRegistered)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/binding.dart", 60, 12, "!_debugServiceExtensionsRegistered");
    this.initServiceExtensions();
    if (!dart.test(binding.BindingBase._debugServiceExtensionsRegistered)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/binding.dart", 62, 12, "_debugServiceExtensionsRegistered");
    developer.postEvent("Flutter.FrameworkInitialization", new (IdentityMapOfString$String()).new());
    developer.Timeline.finishSync();
  }).prototype = binding.BindingBase.prototype;
  dart.addTypeTests(binding.BindingBase);
  dart.setMethodSignature(binding.BindingBase, () => ({
    __proto__: dart.getMethods(binding.BindingBase.__proto__),
    initInstances: dart.fnType(dart.void, []),
    initServiceExtensions: dart.fnType(dart.void, []),
    lockEvents: dart.fnType(async.Future$(dart.void), [dart.fnType(async.Future$(dart.void), [])]),
    unlocked: dart.fnType(dart.void, []),
    reassembleApplication: dart.fnType(async.Future$(dart.void), []),
    performReassemble: dart.fnType(async.Future$(dart.void), []),
    registerSignalServiceExtension: dart.fnType(dart.void, [], {callback: dart.fnType(async.Future$(dart.void), []), name: core.String}, {}),
    registerBoolServiceExtension: dart.fnType(dart.void, [], {getter: dart.fnType(async.Future$(core.bool), []), name: core.String, setter: dart.fnType(async.Future$(dart.void), [core.bool])}, {}),
    registerNumericServiceExtension: dart.fnType(dart.void, [], {getter: dart.fnType(async.Future$(core.double), []), name: core.String, setter: dart.fnType(async.Future$(dart.void), [core.double])}, {}),
    [_postExtensionStateChangedEvent]: dart.fnType(dart.void, [core.String, dart.dynamic]),
    postEvent: dart.fnType(dart.void, [core.String, core.Map$(core.String, dart.dynamic)]),
    registerStringServiceExtension: dart.fnType(dart.void, [], {getter: dart.fnType(async.Future$(core.String), []), name: core.String, setter: dart.fnType(async.Future$(dart.void), [core.String])}, {}),
    registerServiceExtension: dart.fnType(dart.void, [], {callback: dart.fnType(async.Future$(core.Map$(core.String, dart.dynamic)), [core.Map$(core.String, core.String)]), name: core.String}, {})
  }));
  dart.setGetterSignature(binding.BindingBase, () => ({
    __proto__: dart.getGetters(binding.BindingBase.__proto__),
    window: ui.Window,
    locked: core.bool
  }));
  dart.setLibraryUri(binding.BindingBase, "package:flutter/src/foundation/binding.dart");
  dart.setFieldSignature(binding.BindingBase, () => ({
    __proto__: dart.getFields(binding.BindingBase.__proto__),
    [_lockCount]: dart.fieldType(core.int)
  }));
  dart.defineExtensionMethods(binding.BindingBase, ['toString']);
  dart.defineLazy(binding.BindingBase, {
    /*binding.BindingBase._debugInitialized*/get _debugInitialized() {
      return false;
    },
    set _debugInitialized(_) {},
    /*binding.BindingBase._debugServiceExtensionsRegistered*/get _debugServiceExtensionsRegistered() {
      return false;
    },
    set _debugServiceExtensionsRegistered(_) {}
  });
  binding._exitApplication = function _exitApplication() {
    return async.async(dart.void, function* _exitApplication() {
      io.exit(0);
    });
  };
  var sections$ = dart.privateName(annotations, "Category.sections");
  annotations.Category = class Category extends core.Object {
    get sections() {
      return this[sections$];
    }
    set sections(value) {
      super.sections = value;
    }
  };
  (annotations.Category.new = function(sections) {
    this[sections$] = sections;
    if (!(sections != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/annotations.dart", 42, 42, "sections != null");
    ;
  }).prototype = annotations.Category.prototype;
  dart.addTypeTests(annotations.Category);
  dart.setLibraryUri(annotations.Category, "package:flutter/src/foundation/annotations.dart");
  dart.setFieldSignature(annotations.Category, () => ({
    __proto__: dart.getFields(annotations.Category.__proto__),
    sections: dart.finalFieldType(core.List$(core.String))
  }));
  var url$ = dart.privateName(annotations, "DocumentationIcon.url");
  annotations.DocumentationIcon = class DocumentationIcon extends core.Object {
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
    }
  };
  (annotations.DocumentationIcon.new = function(url) {
    this[url$] = url;
    if (!(url != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/annotations.dart", 77, 46, "url != null");
    ;
  }).prototype = annotations.DocumentationIcon.prototype;
  dart.addTypeTests(annotations.DocumentationIcon);
  dart.setLibraryUri(annotations.DocumentationIcon, "package:flutter/src/foundation/annotations.dart");
  dart.setFieldSignature(annotations.DocumentationIcon, () => ({
    __proto__: dart.getFields(annotations.DocumentationIcon.__proto__),
    url: dart.finalFieldType(core.String)
  }));
  var text$ = dart.privateName(annotations, "Summary.text");
  annotations.Summary = class Summary extends core.Object {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
  };
  (annotations.Summary.new = function(text) {
    this[text$] = text;
    if (!(text != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/annotations.dart", 114, 37, "text != null");
    ;
  }).prototype = annotations.Summary.prototype;
  dart.addTypeTests(annotations.Summary);
  dart.setLibraryUri(annotations.Summary, "package:flutter/src/foundation/annotations.dart");
  dart.setFieldSignature(annotations.Summary, () => ({
    __proto__: dart.getFields(annotations.Summary.__proto__),
    text: dart.finalFieldType(core.String)
  }));
  var _chunks = dart.privateName(consolidate_response, "_chunks");
  var _contentLength = dart.privateName(consolidate_response, "_contentLength");
  var _bytes = dart.privateName(consolidate_response, "_bytes");
  consolidate_response._OutputBuffer = class _OutputBuffer extends convert.ByteConversionSinkBase {
    add(chunk) {
      ListOfint()._check(chunk);
      if (!(this[_bytes] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/consolidate_response.dart", 105, 12, "_bytes == null");
      this[_chunks][$add](chunk);
      this[_contentLength] = dart.notNull(this[_contentLength]) + dart.notNull(chunk[$length]);
    }
    close() {
      if (this[_bytes] != null) {
        return;
      }
      this[_bytes] = _native_typed_data.NativeUint8List.new(this[_contentLength]);
      let offset = 0;
      for (let chunk of this[_chunks]) {
        this[_bytes][$setRange](offset, offset + dart.notNull(chunk[$length]), chunk);
        offset = offset + dart.notNull(chunk[$length]);
      }
      this[_chunks] = null;
    }
    get bytes() {
      if (!(this[_bytes] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/consolidate_response.dart", 126, 12, "_bytes != null");
      return this[_bytes];
    }
  };
  (consolidate_response._OutputBuffer.new = function() {
    this[_chunks] = JSArrayOfListOfint().of([]);
    this[_contentLength] = 0;
    this[_bytes] = null;
    consolidate_response._OutputBuffer.__proto__.new.call(this);
    ;
  }).prototype = consolidate_response._OutputBuffer.prototype;
  dart.addTypeTests(consolidate_response._OutputBuffer);
  dart.setMethodSignature(consolidate_response._OutputBuffer, () => ({
    __proto__: dart.getMethods(consolidate_response._OutputBuffer.__proto__),
    add: dart.fnType(dart.void, [core.Object]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(consolidate_response._OutputBuffer, () => ({
    __proto__: dart.getGetters(consolidate_response._OutputBuffer.__proto__),
    bytes: typed_data.Uint8List
  }));
  dart.setLibraryUri(consolidate_response._OutputBuffer, "package:flutter/src/foundation/consolidate_response.dart");
  dart.setFieldSignature(consolidate_response._OutputBuffer, () => ({
    __proto__: dart.getFields(consolidate_response._OutputBuffer.__proto__),
    [_chunks]: dart.fieldType(core.List$(core.List$(core.int))),
    [_contentLength]: dart.fieldType(core.int),
    [_bytes]: dart.fieldType(typed_data.Uint8List)
  }));
  var _name = dart.privateName(_http, "_name");
  var C53;
  var C54;
  var C55;
  consolidate_response.consolidateHttpClientResponseBytes = function consolidateHttpClientResponseBytes(response, opts) {
    let autoUncompress = opts && 'autoUncompress' in opts ? opts.autoUncompress : true;
    let onBytesReceived = opts && 'onBytesReceived' in opts ? opts.onBytesReceived : null;
    if (!(autoUncompress != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/consolidate_response.dart", 51, 10, "autoUncompress != null");
    let completer = CompleterOfUint8List().sync();
    let output = new consolidate_response._OutputBuffer.new();
    let sink = output;
    let expectedContentLength = response.contentLength;
    if (expectedContentLength === -1) expectedContentLength = null;
    switch (response.compressionState) {
      case C53 || CT.C53:
      {
        if (dart.test(autoUncompress)) {
          sink = io.gzip.decoder.startChunkedConversion(output);
        }
        break;
      }
      case C54 || CT.C54:
      {
        expectedContentLength = null;
        break;
      }
      case C55 || CT.C55:
      {
        break;
      }
    }
    let bytesReceived = 0;
    let subscription = null;
    subscription = response.listen(dart.fn(chunk => {
      sink.add(chunk);
      if (onBytesReceived != null) {
        bytesReceived = bytesReceived + dart.notNull(chunk[$length]);
        try {
          onBytesReceived(bytesReceived, expectedContentLength);
        } catch (e) {
          let error = dart.getThrown(e);
          let stackTrace = dart.stackTrace(e);
          completer.completeError(error, stackTrace);
          subscription.cancel();
          return;
        }
      }
    }, ListOfintToNull()), {onDone: dart.fn(() => {
        sink.close();
        completer.complete(output.bytes);
      }, VoidToNull()), onError: dart.bind(completer, 'completeError'), cancelOnError: true});
    return completer.future;
  };
  var text$0 = dart.privateName(licenses, "LicenseParagraph.text");
  var indent$ = dart.privateName(licenses, "LicenseParagraph.indent");
  licenses.LicenseParagraph = class LicenseParagraph extends core.Object {
    get text() {
      return this[text$0];
    }
    set text(value) {
      super.text = value;
    }
    get indent() {
      return this[indent$];
    }
    set indent(value) {
      super.indent = value;
    }
  };
  (licenses.LicenseParagraph.new = function(text, indent) {
    this[text$0] = text;
    this[indent$] = indent;
    ;
  }).prototype = licenses.LicenseParagraph.prototype;
  dart.addTypeTests(licenses.LicenseParagraph);
  dart.setLibraryUri(licenses.LicenseParagraph, "package:flutter/src/foundation/licenses.dart");
  dart.setFieldSignature(licenses.LicenseParagraph, () => ({
    __proto__: dart.getFields(licenses.LicenseParagraph.__proto__),
    text: dart.finalFieldType(core.String),
    indent: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(licenses.LicenseParagraph, {
    /*licenses.LicenseParagraph.centeredIndent*/get centeredIndent() {
      return -1;
    }
  });
  licenses.LicenseEntry = class LicenseEntry extends core.Object {};
  (licenses.LicenseEntry.new = function() {
    ;
  }).prototype = licenses.LicenseEntry.prototype;
  dart.addTypeTests(licenses.LicenseEntry);
  dart.setLibraryUri(licenses.LicenseEntry, "package:flutter/src/foundation/licenses.dart");
  var _name$2 = dart.privateName(licenses, "_name");
  var C56;
  var C57;
  var C58;
  licenses._LicenseEntryWithLineBreaksParserState = class _LicenseEntryWithLineBreaksParserState extends core.Object {
    toString() {
      return this[_name$2];
    }
  };
  (licenses._LicenseEntryWithLineBreaksParserState.new = function(index, _name) {
    this.index = index;
    this[_name$2] = _name;
    ;
  }).prototype = licenses._LicenseEntryWithLineBreaksParserState.prototype;
  dart.addTypeTests(licenses._LicenseEntryWithLineBreaksParserState);
  dart.setLibraryUri(licenses._LicenseEntryWithLineBreaksParserState, "package:flutter/src/foundation/licenses.dart");
  dart.setFieldSignature(licenses._LicenseEntryWithLineBreaksParserState, () => ({
    __proto__: dart.getFields(licenses._LicenseEntryWithLineBreaksParserState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$2]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(licenses._LicenseEntryWithLineBreaksParserState, ['toString']);
  licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph = C56 || CT.C56;
  licenses._LicenseEntryWithLineBreaksParserState.inParagraph = C57 || CT.C57;
  licenses._LicenseEntryWithLineBreaksParserState.values = C58 || CT.C58;
  var packages$ = dart.privateName(licenses, "LicenseEntryWithLineBreaks.packages");
  var text$1 = dart.privateName(licenses, "LicenseEntryWithLineBreaks.text");
  licenses.LicenseEntryWithLineBreaks = class LicenseEntryWithLineBreaks extends licenses.LicenseEntry {
    get packages() {
      return this[packages$];
    }
    set packages(value) {
      super.packages = value;
    }
    get text() {
      return this[text$1];
    }
    set text(value) {
      super.text = value;
    }
    get paragraphs() {
      return new (SyncIterableOfLicenseParagraph()).new((function* paragraphs() {
        let lineStart = 0;
        let currentPosition = 0;
        let lastLineIndent = 0;
        let currentLineIndent = 0;
        let currentParagraphIndentation = null;
        let state = licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
        let lines = JSArrayOfString().of([]);
        const addLine = () => {
          if (!(lineStart < currentPosition)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/licenses.dart", 154, 14, "lineStart < currentPosition");
          lines[$add](this.text[$substring](lineStart, currentPosition));
        };
        dart.fn(addLine, VoidTovoid());
        function getParagraph() {
          if (!dart.test(lines[$isNotEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/licenses.dart", 159, 14, "lines.isNotEmpty");
          if (!(currentParagraphIndentation != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/licenses.dart", 160, 14, "currentParagraphIndentation != null");
          let result = new licenses.LicenseParagraph.new(lines[$join](" "), currentParagraphIndentation);
          if (!(result.text[$trimLeft]() === result.text)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/licenses.dart", 162, 14, "result.text.trimLeft() == result.text");
          if (!result.text[$isNotEmpty]) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/licenses.dart", 163, 14, "result.text.isNotEmpty");
          lines[$clear]();
          return result;
        }
        dart.fn(getParagraph, VoidToLicenseParagraph());
        while (currentPosition < this.text.length) {
          switch (state) {
            case C56 || CT.C56:
            {
              if (!(lineStart === currentPosition)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/licenses.dart", 171, 18, "lineStart == currentPosition");
              let labelState = this.text[$_get](currentPosition);
              SL0:
                while (true) {
                  switch (labelState) {
                    case " ":
                    {
                      lineStart = currentPosition + 1;
                      currentLineIndent = currentLineIndent + 1;
                      state = licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                      break SL0;
                    }
                    case "\t":
                    {
                      lineStart = currentPosition + 1;
                      currentLineIndent = currentLineIndent + 8;
                      state = licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                      break SL0;
                    }
                    case "\r":
                    case "\n":
                    case "\f":
                    {
                      if (dart.test(lines[$isNotEmpty])) {
                        yield getParagraph();
                      }
                      if (this.text[$_get](currentPosition) === "\r" && currentPosition < this.text.length - 1 && this.text[$_get](currentPosition + 1) === "\n") {
                        currentPosition = currentPosition + 1;
                      }
                      lastLineIndent = 0;
                      currentLineIndent = 0;
                      currentParagraphIndentation = null;
                      lineStart = currentPosition + 1;
                      state = licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                      break SL0;
                    }
                    case "[":
                    {
                      currentLineIndent = currentLineIndent + 1;
                      labelState = Symbol('_default');
                      continue SL0;
                    }
                    default:
                    {
                      if (dart.test(lines[$isNotEmpty]) && currentLineIndent > lastLineIndent) {
                        yield getParagraph();
                        currentParagraphIndentation = null;
                      }
                      if (currentParagraphIndentation == null) {
                        if (currentLineIndent > 10)
                          currentParagraphIndentation = -1;
                        else
                          currentParagraphIndentation = (currentLineIndent / 3)[$truncate]();
                      }
                      state = licenses._LicenseEntryWithLineBreaksParserState.inParagraph;
                      break SL0;
                    }
                  }
                  break;
                }
              break;
            }
            case C57 || CT.C57:
            {
              switch (this.text[$_get](currentPosition)) {
                case "\n":
                {
                  addLine();
                  lastLineIndent = currentLineIndent;
                  currentLineIndent = 0;
                  lineStart = currentPosition + 1;
                  state = licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                  break;
                }
                case "\f":
                {
                  addLine();
                  yield getParagraph();
                  lastLineIndent = 0;
                  currentLineIndent = 0;
                  currentParagraphIndentation = null;
                  lineStart = currentPosition + 1;
                  state = licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                  break;
                }
                default:
                {
                  state = licenses._LicenseEntryWithLineBreaksParserState.inParagraph;
                }
              }
              break;
            }
          }
          currentPosition = currentPosition + 1;
        }
        switch (state) {
          case C56 || CT.C56:
          {
            if (dart.test(lines[$isNotEmpty])) {
              yield getParagraph();
            }
            break;
          }
          case C57 || CT.C57:
          {
            addLine();
            yield getParagraph();
            break;
          }
        }
      }).bind(this));
    }
  };
  (licenses.LicenseEntryWithLineBreaks.new = function(packages, text) {
    this[packages$] = packages;
    this[text$1] = text;
    licenses.LicenseEntryWithLineBreaks.__proto__.new.call(this);
    ;
  }).prototype = licenses.LicenseEntryWithLineBreaks.prototype;
  dart.addTypeTests(licenses.LicenseEntryWithLineBreaks);
  dart.setGetterSignature(licenses.LicenseEntryWithLineBreaks, () => ({
    __proto__: dart.getGetters(licenses.LicenseEntryWithLineBreaks.__proto__),
    paragraphs: core.Iterable$(licenses.LicenseParagraph)
  }));
  dart.setLibraryUri(licenses.LicenseEntryWithLineBreaks, "package:flutter/src/foundation/licenses.dart");
  dart.setFieldSignature(licenses.LicenseEntryWithLineBreaks, () => ({
    __proto__: dart.getFields(licenses.LicenseEntryWithLineBreaks.__proto__),
    packages: dart.finalFieldType(core.List$(core.String)),
    text: dart.finalFieldType(core.String)
  }));
  licenses.LicenseRegistry = class LicenseRegistry extends core.Object {
    static addLicense(collector) {
      licenses.LicenseRegistry._collectors == null ? licenses.LicenseRegistry._collectors = JSArrayOfVoidToStreamOfLicenseEntry().of([]) : null;
      licenses.LicenseRegistry._collectors[$add](collector);
    }
    static get licenses() {
      return new (_AsyncStarImplOfLicenseEntry()).new(function* licenses$(stream) {
        if (licenses.LicenseRegistry._collectors == null) return;
        for (let collector of licenses.LicenseRegistry._collectors) {
          if (stream.addStream(collector())) return;
          yield;
        }
      }).stream;
    }
    static reset() {
      licenses.LicenseRegistry._collectors = null;
    }
  };
  (licenses.LicenseRegistry.__ = function() {
    ;
  }).prototype = licenses.LicenseRegistry.prototype;
  dart.addTypeTests(licenses.LicenseRegistry);
  dart.setLibraryUri(licenses.LicenseRegistry, "package:flutter/src/foundation/licenses.dart");
  dart.defineLazy(licenses.LicenseRegistry, {
    /*licenses.LicenseRegistry._collectors*/get _collectors() {
      return null;
    },
    set _collectors(_) {}
  });
  change_notifier.Listenable = class Listenable extends core.Object {};
  (change_notifier.Listenable.new = function() {
    ;
  }).prototype = change_notifier.Listenable.prototype;
  dart.addTypeTests(change_notifier.Listenable);
  dart.setLibraryUri(change_notifier.Listenable, "package:flutter/src/foundation/change_notifier.dart");
  const _is_ValueListenable_default = Symbol('_is_ValueListenable_default');
  change_notifier.ValueListenable$ = dart.generic(T => {
    class ValueListenable extends change_notifier.Listenable {}
    (ValueListenable.new = function() {
      ValueListenable.__proto__.new.call(this);
      ;
    }).prototype = ValueListenable.prototype;
    dart.addTypeTests(ValueListenable);
    ValueListenable.prototype[_is_ValueListenable_default] = true;
    dart.setLibraryUri(ValueListenable, "package:flutter/src/foundation/change_notifier.dart");
    return ValueListenable;
  });
  change_notifier.ValueListenable = change_notifier.ValueListenable$();
  dart.addTypeTests(change_notifier.ValueListenable, _is_ValueListenable_default);
  var _listeners = dart.privateName(change_notifier, "_listeners");
  var _debugAssertNotDisposed = dart.privateName(change_notifier, "_debugAssertNotDisposed");
  change_notifier.ChangeNotifier = class ChangeNotifier extends core.Object {
    [_debugAssertNotDisposed]() {
      if (!dart.test(dart.fn(() => {
        if (this[_listeners] == null) {
          dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("A " + dart.str(this[$runtimeType]) + " was used after being disposed."), new assertions.ErrorDescription.new("Once you have called dispose() on a " + dart.str(this[$runtimeType]) + ", it can no longer be used.")])));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/change_notifier.dart", 103, 12, "() {\r\n      if (_listeners == null) {\r\n        throw FlutterError.fromParts(<DiagnosticsNode>[\r\n          ErrorSummary('A $runtimeType was used after being disposed.'),\r\n          ErrorDescription('Once you have called dispose() on a $runtimeType, it can no longer be used.')\r\n        ]);\r\n      }\r\n      return true;\r\n    }()");
      return true;
    }
    get hasListeners() {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/change_notifier.dart", 132, 12, "_debugAssertNotDisposed()");
      return this[_listeners].isNotEmpty;
    }
    addListener(listener) {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/change_notifier.dart", 141, 12, "_debugAssertNotDisposed()");
      this[_listeners].add(listener);
    }
    removeListener(listener) {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/change_notifier.dart", 166, 12, "_debugAssertNotDisposed()");
      this[_listeners].remove(listener);
    }
    dispose() {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/change_notifier.dart", 178, 12, "_debugAssertNotDisposed()");
      this[_listeners] = null;
    }
    notifyListeners() {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/foundation/change_notifier.dart", 200, 12, "_debugAssertNotDisposed()");
      if (this[_listeners] != null) {
        let localListeners = ListOfVoidTovoid().from(this[_listeners]);
        for (let listener of localListeners) {
          try {
            if (dart.test(this[_listeners].contains(listener))) listener();
          } catch (e) {
            let exception = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "foundation library", context: new assertions.ErrorDescription.new("while dispatching notifications for " + dart.str(this[$runtimeType])), informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfChangeNotifier()).new((function*() {
                yield new (DiagnosticsPropertyOfChangeNotifier()).new("The " + dart.str(this[$runtimeType]) + " sending notification was", this, {style: diagnostics$.DiagnosticsTreeStyle.errorProperty});
              }).bind(this)), VoidToIterableOfDiagnosticsPropertyOfChangeNotifier())}));
          }
        }
      }
    }
  };
  (change_notifier.ChangeNotifier.new = function() {
    this[_listeners] = new (ObserverListOfVoidTovoid()).new();
    ;
  }).prototype = change_notifier.ChangeNotifier.prototype;
  dart.addTypeTests(change_notifier.ChangeNotifier);
  change_notifier.ChangeNotifier[dart.implements] = () => [change_notifier.Listenable];
  dart.setMethodSignature(change_notifier.ChangeNotifier, () => ({
    __proto__: dart.getMethods(change_notifier.ChangeNotifier.__proto__),
    [_debugAssertNotDisposed]: dart.fnType(core.bool, []),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    dispose: dart.fnType(dart.void, []),
    notifyListeners: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(change_notifier.ChangeNotifier, () => ({
    __proto__: dart.getGetters(change_notifier.ChangeNotifier.__proto__),
    hasListeners: core.bool
  }));
  dart.setLibraryUri(change_notifier.ChangeNotifier, "package:flutter/src/foundation/change_notifier.dart");
  dart.setFieldSignature(change_notifier.ChangeNotifier, () => ({
    __proto__: dart.getFields(change_notifier.ChangeNotifier.__proto__),
    [_listeners]: dart.fieldType(observer_list.ObserverList$(dart.fnType(dart.void, [])))
  }));
  var _children$ = dart.privateName(change_notifier, "_children");
  change_notifier._MergingListenable = class _MergingListenable extends change_notifier.Listenable {
    addListener(listener) {
      let t9;
      for (let child of this[_children$]) {
        t9 = child;
        t9 == null ? null : t9.addListener(listener);
      }
    }
    removeListener(listener) {
      let t9;
      for (let child of this[_children$]) {
        t9 = child;
        t9 == null ? null : t9.removeListener(listener);
      }
    }
    toString() {
      return "Listenable.merge([" + dart.str(this[_children$][$join](", ")) + "])";
    }
  };
  (change_notifier._MergingListenable.new = function(_children) {
    this[_children$] = _children;
    change_notifier._MergingListenable.__proto__.new.call(this);
    ;
  }).prototype = change_notifier._MergingListenable.prototype;
  dart.addTypeTests(change_notifier._MergingListenable);
  dart.setMethodSignature(change_notifier._MergingListenable, () => ({
    __proto__: dart.getMethods(change_notifier._MergingListenable.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])])
  }));
  dart.setLibraryUri(change_notifier._MergingListenable, "package:flutter/src/foundation/change_notifier.dart");
  dart.setFieldSignature(change_notifier._MergingListenable, () => ({
    __proto__: dart.getFields(change_notifier._MergingListenable.__proto__),
    [_children$]: dart.finalFieldType(core.List$(change_notifier.Listenable))
  }));
  dart.defineExtensionMethods(change_notifier._MergingListenable, ['toString']);
  var _value$ = dart.privateName(change_notifier, "_value");
  const _is_ValueNotifier_default = Symbol('_is_ValueNotifier_default');
  change_notifier.ValueNotifier$ = dart.generic(T => {
    class ValueNotifier extends change_notifier.ChangeNotifier {
      get value() {
        return this[_value$];
      }
      set value(newValue) {
        T._check(newValue);
        if (dart.equals(this[_value$], newValue)) return;
        this[_value$] = newValue;
        this.notifyListeners();
      }
      toString() {
        return dart.str(diagnostics$.describeIdentity(this)) + "(" + dart.str(this.value) + ")";
      }
    }
    (ValueNotifier.new = function(_value) {
      this[_value$] = _value;
      ValueNotifier.__proto__.new.call(this);
      ;
    }).prototype = ValueNotifier.prototype;
    dart.addTypeTests(ValueNotifier);
    ValueNotifier.prototype[_is_ValueNotifier_default] = true;
    ValueNotifier[dart.implements] = () => [change_notifier.ValueListenable$(T)];
    dart.setGetterSignature(ValueNotifier, () => ({
      __proto__: dart.getGetters(ValueNotifier.__proto__),
      value: T
    }));
    dart.setSetterSignature(ValueNotifier, () => ({
      __proto__: dart.getSetters(ValueNotifier.__proto__),
      value: core.Object
    }));
    dart.setLibraryUri(ValueNotifier, "package:flutter/src/foundation/change_notifier.dart");
    dart.setFieldSignature(ValueNotifier, () => ({
      __proto__: dart.getFields(ValueNotifier.__proto__),
      [_value$]: dart.fieldType(T)
    }));
    dart.defineExtensionMethods(ValueNotifier, ['toString']);
    return ValueNotifier;
  });
  change_notifier.ValueNotifier = change_notifier.ValueNotifier$();
  dart.addTypeTests(change_notifier.ValueNotifier, _is_ValueNotifier_default);
  profile.profile = function profile$($function) {
    if (false) return;
    $function();
  };
  key.Key = class Key extends core.Object {};
  (key.Key.empty = function() {
    ;
  }).prototype = key.Key.prototype;
  dart.addTypeTests(key.Key);
  dart.setLibraryUri(key.Key, "package:flutter/src/foundation/key.dart");
  key.LocalKey = class LocalKey extends key.Key {};
  (key.LocalKey.new = function() {
    key.LocalKey.__proto__.empty.call(this);
    ;
  }).prototype = key.LocalKey.prototype;
  dart.addTypeTests(key.LocalKey);
  dart.setLibraryUri(key.LocalKey, "package:flutter/src/foundation/key.dart");
  const _is_ValueKey_default = Symbol('_is_ValueKey_default');
  var value$1 = dart.privateName(key, "ValueKey.value");
  key.ValueKey$ = dart.generic(T => {
    var ValueKeyOfT = () => (ValueKeyOfT = dart.constFn(key.ValueKey$(T)))();
    var _TypeLiteralOfValueKeyOfT = () => (_TypeLiteralOfValueKeyOfT = dart.constFn(key._TypeLiteral$(ValueKeyOfT())))();
    class ValueKey extends key.LocalKey {
      get value() {
        return this[value$1];
      }
      set value(value) {
        super.value = value;
      }
      _equals(other) {
        if (other == null) return false;
        if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
        return ValueKeyOfT().is(other) && dart.equals(other.value, this.value);
      }
      get hashCode() {
        return ui.hashValues(this[$runtimeType], this.value);
      }
      toString() {
        let valueString = dart.wrapType(T)[$_equals](dart.wrapType(core.String)) ? "<'" + dart.str(this.value) + "'>" : "<" + dart.str(this.value) + ">";
        if (dart.equals(this[$runtimeType], new (_TypeLiteralOfValueKeyOfT()).new().type)) return "[" + valueString + "]";
        return "[" + dart.str(dart.wrapType(T)) + " " + valueString + "]";
      }
    }
    (ValueKey.new = function(value) {
      this[value$1] = value;
      ValueKey.__proto__.new.call(this);
      ;
    }).prototype = ValueKey.prototype;
    dart.addTypeTests(ValueKey);
    ValueKey.prototype[_is_ValueKey_default] = true;
    dart.setMethodSignature(ValueKey, () => ({
      __proto__: dart.getMethods(ValueKey.__proto__),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object])
    }));
    dart.setLibraryUri(ValueKey, "package:flutter/src/foundation/key.dart");
    dart.setFieldSignature(ValueKey, () => ({
      __proto__: dart.getFields(ValueKey.__proto__),
      value: dart.finalFieldType(T)
    }));
    dart.defineExtensionMethods(ValueKey, ['_equals', 'toString']);
    dart.defineExtensionAccessors(ValueKey, ['hashCode']);
    return ValueKey;
  });
  key.ValueKey = key.ValueKey$();
  dart.addTypeTests(key.ValueKey, _is_ValueKey_default);
  const _is__TypeLiteral_default = Symbol('_is__TypeLiteral_default');
  key._TypeLiteral$ = dart.generic(T => {
    class _TypeLiteral extends core.Object {
      get type() {
        return dart.wrapType(T);
      }
    }
    (_TypeLiteral.new = function() {
      ;
    }).prototype = _TypeLiteral.prototype;
    dart.addTypeTests(_TypeLiteral);
    _TypeLiteral.prototype[_is__TypeLiteral_default] = true;
    dart.setGetterSignature(_TypeLiteral, () => ({
      __proto__: dart.getGetters(_TypeLiteral.__proto__),
      type: core.Type
    }));
    dart.setLibraryUri(_TypeLiteral, "package:flutter/src/foundation/key.dart");
    return _TypeLiteral;
  });
  key._TypeLiteral = key._TypeLiteral$();
  dart.addTypeTests(key._TypeLiteral, _is__TypeLiteral_default);
  var _value$0 = dart.privateName(synchronous_future, "_value");
  const _is_SynchronousFuture_default = Symbol('_is_SynchronousFuture_default');
  synchronous_future.SynchronousFuture$ = dart.generic(T => {
    var StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    var CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    var FutureOrOfT = () => (FutureOrOfT = dart.constFn(async.FutureOr$(T)))();
    var VoidToFutureOrOfT = () => (VoidToFutureOrOfT = dart.constFn(dart.fnType(FutureOrOfT(), [])))();
    var FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    var dynamicToT = () => (dynamicToT = dart.constFn(dart.fnType(T, [dart.dynamic])))();
    class SynchronousFuture extends core.Object {
      asStream() {
        let controller = StreamControllerOfT().new();
        controller.add(this[_value$0]);
        controller.close();
        return controller.stream;
      }
      catchError(onError, opts) {
        let test = opts && 'test' in opts ? opts.test : null;
        return CompleterOfT().new().future;
      }
      then(E, f, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let result = f(this[_value$0]);
        if (async.Future$(E).is(result)) return result;
        return new (synchronous_future.SynchronousFuture$(E)).new(E.as(result));
      }
      timeout(timeLimit, opts) {
        let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
        VoidToFutureOrOfT()._check(onTimeout);
        return FutureOfT().value(this[_value$0]).timeout(timeLimit, {onTimeout: onTimeout});
      }
      whenComplete(action) {
        try {
          let result = action();
          if (async.Future.is(result)) return result.then(T, dart.fn(value => this[_value$0], dynamicToT()));
          return this;
        } catch (e$) {
          let e = dart.getThrown(e$);
          let stack = dart.stackTrace(e$);
          return FutureOfT().error(e, stack);
        }
      }
    }
    (SynchronousFuture.new = function(_value) {
      this[_value$0] = _value;
      ;
    }).prototype = SynchronousFuture.prototype;
    SynchronousFuture.prototype[dart.isFuture] = true;
    dart.addTypeTests(SynchronousFuture);
    SynchronousFuture.prototype[_is_SynchronousFuture_default] = true;
    SynchronousFuture[dart.implements] = () => [async.Future$(T)];
    dart.setMethodSignature(SynchronousFuture, () => ({
      __proto__: dart.getMethods(SynchronousFuture.__proto__),
      asStream: dart.fnType(async.Stream$(T), []),
      catchError: dart.fnType(async.Future$(T), [core.Function], {test: dart.fnType(core.bool, [core.Object])}, {}),
      then: dart.gFnType(E => [async.Future$(E), [dart.fnType(async.FutureOr$(E), [T])], {onError: core.Function}, {}]),
      timeout: dart.fnType(async.Future$(T), [core.Duration], {onTimeout: core.Object}, {}),
      whenComplete: dart.fnType(async.Future$(T), [dart.fnType(async.FutureOr, [])])
    }));
    dart.setLibraryUri(SynchronousFuture, "package:flutter/src/foundation/synchronous_future.dart");
    dart.setFieldSignature(SynchronousFuture, () => ({
      __proto__: dart.getFields(SynchronousFuture.__proto__),
      [_value$0]: dart.finalFieldType(T)
    }));
    return SynchronousFuture;
  });
  synchronous_future.SynchronousFuture = synchronous_future.SynchronousFuture$();
  dart.addTypeTests(synchronous_future.SynchronousFuture, _is_SynchronousFuture_default);
  unicode.Unicode = class Unicode extends core.Object {};
  (unicode.Unicode.__ = function() {
    ;
  }).prototype = unicode.Unicode.prototype;
  dart.addTypeTests(unicode.Unicode);
  dart.setLibraryUri(unicode.Unicode, "package:flutter/src/foundation/unicode.dart");
  dart.defineLazy(unicode.Unicode, {
    /*unicode.Unicode.LRE*/get LRE() {
      return "‪";
    },
    /*unicode.Unicode.RLE*/get RLE() {
      return "‫";
    },
    /*unicode.Unicode.PDF*/get PDF() {
      return "‬";
    },
    /*unicode.Unicode.LRO*/get LRO() {
      return "‭";
    },
    /*unicode.Unicode.RLO*/get RLO() {
      return "‮";
    },
    /*unicode.Unicode.LRI*/get LRI() {
      return "⁦";
    },
    /*unicode.Unicode.RLI*/get RLI() {
      return "⁧";
    },
    /*unicode.Unicode.FSI*/get FSI() {
      return "⁨";
    },
    /*unicode.Unicode.PDI*/get PDI() {
      return "⁩";
    },
    /*unicode.Unicode.LRM*/get LRM() {
      return "‎";
    },
    /*unicode.Unicode.RLM*/get RLM() {
      return "‏";
    },
    /*unicode.Unicode.ALM*/get ALM() {
      return "؜";
    }
  });
  dart.trackLibraries("packages/flutter/src/foundation/_bitfield_web", {
    "package:flutter/src/foundation/isolates.dart": isolates,
    "package:flutter/src/foundation/_isolates_web.dart": _isolates_web,
    "package:flutter/src/foundation/serialization.dart": serialization,
    "package:flutter/src/foundation/platform.dart": platform,
    "package:flutter/src/foundation/_platform_web.dart": _platform_web,
    "package:flutter/src/foundation/node.dart": node,
    "package:flutter/src/foundation/object.dart": object$,
    "package:flutter/src/foundation/observer_list.dart": observer_list,
    "package:flutter/src/foundation/basic_types.dart": basic_types,
    "package:flutter/src/foundation/stack_frame.dart": stack_frame,
    "package:flutter/src/foundation/_bitfield_web.dart": _bitfield_web,
    "package:flutter/src/foundation/bitfield.dart": bitfield,
    "package:flutter/src/foundation/diagnostics.dart": diagnostics$,
    "package:flutter/src/foundation/debug.dart": debug,
    "package:flutter/src/foundation/print.dart": print,
    "package:flutter/src/foundation/assertions.dart": assertions,
    "package:flutter/src/foundation/constants.dart": constants,
    "package:flutter/src/foundation/collections.dart": collections,
    "package:flutter/src/foundation/binding.dart": binding,
    "package:flutter/src/foundation/annotations.dart": annotations,
    "package:flutter/src/foundation/consolidate_response.dart": consolidate_response,
    "package:flutter/src/foundation/licenses.dart": licenses,
    "package:flutter/src/foundation/change_notifier.dart": change_notifier,
    "package:flutter/src/foundation/profile.dart": profile,
    "package:flutter/src/foundation/key.dart": key,
    "package:flutter/src/foundation/synchronous_future.dart": synchronous_future,
    "package:flutter/src/foundation/unicode.dart": unicode
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["isolates.dart","_isolates_web.dart","serialization.dart","platform.dart","_platform_web.dart","node.dart","object.dart","observer_list.dart","basic_types.dart","stack_frame.dart","_bitfield_web.dart","bitfield.dart","diagnostics.dart","debug.dart","print.dart","assertions.dart","constants.dart","collections.dart","binding.dart","annotations.dart","consolidate_response.dart","licenses.dart","change_notifier.dart","profile.dart","key.dart","synchronous_future.dart","unicode.dart"],"names":[],"mappings":"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","file":"_bitfield_web.ddc.js"}');
  // Exports:
  return {
    src__foundation__isolates: isolates,
    src__foundation___isolates_web: _isolates_web,
    src__foundation__serialization: serialization,
    src__foundation__platform: platform,
    src__foundation___platform_web: _platform_web,
    src__foundation__node: node,
    src__foundation__object: object$,
    src__foundation__observer_list: observer_list,
    src__foundation__basic_types: basic_types,
    src__foundation__stack_frame: stack_frame,
    src__foundation___bitfield_web: _bitfield_web,
    src__foundation__bitfield: bitfield,
    src__foundation__diagnostics: diagnostics$,
    src__foundation__debug: debug,
    src__foundation__print: print,
    src__foundation__assertions: assertions,
    src__foundation__constants: constants,
    src__foundation__collections: collections,
    src__foundation__binding: binding,
    src__foundation__annotations: annotations,
    src__foundation__consolidate_response: consolidate_response,
    src__foundation__licenses: licenses,
    src__foundation__change_notifier: change_notifier,
    src__foundation__profile: profile,
    src__foundation__key: key,
    src__foundation__synchronous_future: synchronous_future,
    src__foundation__unicode: unicode
  };
});

//# sourceMappingURL=_bitfield_web.ddc.js.map
