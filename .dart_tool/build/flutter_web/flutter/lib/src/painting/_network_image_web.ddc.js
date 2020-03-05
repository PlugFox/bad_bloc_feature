define(['dart_sdk', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/src/gestures/arena', 'packages/flutter/gestures', 'packages/vector_math/vector_math_64'], function(dart_sdk, packages__flutter__src__foundation___bitfield_web, packages__flutter__src__gestures__arena, packages__flutter__gestures, packages__vector_math__vector_math_64) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const io = dart_sdk.io;
  const collection = dart_sdk.collection;
  const developer = dart_sdk.developer;
  const _engine = dart_sdk._engine;
  const _native_typed_data = dart_sdk._native_typed_data;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const diagnostics = packages__flutter__src__foundation___bitfield_web.src__foundation__diagnostics;
  const object = packages__flutter__src__foundation___bitfield_web.src__foundation__object;
  const collections = packages__flutter__src__foundation___bitfield_web.src__foundation__collections;
  const platform = packages__flutter__src__foundation___bitfield_web.src__foundation__platform;
  const assertions = packages__flutter__src__foundation___bitfield_web.src__foundation__assertions;
  const synchronous_future = packages__flutter__src__foundation___bitfield_web.src__foundation__synchronous_future;
  const debug = packages__flutter__src__foundation___bitfield_web.src__foundation__debug;
  const binding = packages__flutter__src__foundation___bitfield_web.src__foundation__binding;
  const change_notifier = packages__flutter__src__foundation___bitfield_web.src__foundation__change_notifier;
  const asset_bundle = packages__flutter__src__gestures__arena.src__services__asset_bundle;
  const binding$ = packages__flutter__src__gestures__arena.src__services__binding;
  const recognizer = packages__flutter__src__gestures__arena.src__gestures__recognizer;
  const tap = packages__flutter__src__gestures__arena.src__gestures__tap;
  const long_press = packages__flutter__src__gestures__arena.src__gestures__long_press;
  const text_editing = packages__flutter__src__gestures__arena.src__services__text_editing;
  const binding$0 = packages__flutter__gestures.src__scheduler__binding;
  const vector_math_64 = packages__vector_math__vector_math_64.vector_math_64;
  var clip = Object.create(dart.library);
  var shape_decoration = Object.create(dart.library);
  var rounded_rectangle_border = Object.create(dart.library);
  var edge_insets = Object.create(dart.library);
  var basic_types = Object.create(dart.library);
  var circle_border = Object.create(dart.library);
  var borders$ = Object.create(dart.library);
  var border_radius = Object.create(dart.library);
  var image_provider = Object.create(dart.library);
  var image_stream = Object.create(dart.library);
  var image_cache = Object.create(dart.library);
  var binding$1 = Object.create(dart.library);
  var shader_warm_up = Object.create(dart.library);
  var _network_image_web = Object.create(dart.library);
  var gradient = Object.create(dart.library);
  var alignment = Object.create(dart.library);
  var decoration_image = Object.create(dart.library);
  var box_fit = Object.create(dart.library);
  var decoration = Object.create(dart.library);
  var colors = Object.create(dart.library);
  var box_shadow = Object.create(dart.library);
  var debug$ = Object.create(dart.library);
  var box_decoration = Object.create(dart.library);
  var box_border = Object.create(dart.library);
  var text_style = Object.create(dart.library);
  var strut_style = Object.create(dart.library);
  var inline_span = Object.create(dart.library);
  var text_span = Object.create(dart.library);
  var text_painter = Object.create(dart.library);
  var placeholder_span = Object.create(dart.library);
  var fractional_offset = Object.create(dart.library);
  var flutter_logo = Object.create(dart.library);
  var stadium_border = Object.create(dart.library);
  var continuous_rectangle_border = Object.create(dart.library);
  var matrix_utils = Object.create(dart.library);
  var beveled_rectangle_border = Object.create(dart.library);
  var image_resolution = Object.create(dart.library);
  var notched_shapes = Object.create(dart.library);
  var geometry = Object.create(dart.library);
  var image_decoder = Object.create(dart.library);
  var paint_utilities = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $_equals = dartx._equals;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $clamp = dartx.clamp;
  var $truncate = dartx.truncate;
  var $toDouble = dartx.toDouble;
  var $modulo = dartx['%'];
  var $any = dartx.any;
  var $fold = dartx.fold;
  var $last = dartx.last;
  var $first = dartx.first;
  var $add = dartx.add;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $reversed = dartx.reversed;
  var $join = dartx.join;
  var $buffer = dartx.buffer;
  var $asUint8List = dartx.asUint8List;
  var $lengthInBytes = dartx.lengthInBytes;
  var $hashCode = dartx.hashCode;
  var $isNotEmpty = dartx.isNotEmpty;
  var $removeAt = dartx.removeAt;
  var $isEmpty = dartx.isEmpty;
  var $where = dartx.where;
  var $forEach = dartx.forEach;
  var $clear = dartx.clear;
  var $remove = dartx.remove;
  var $keys = dartx.keys;
  var $ceil = dartx.ceil;
  var $lastIndexWhere = dartx.lastIndexWhere;
  var $floor = dartx.floor;
  var $abs = dartx.abs;
  var $isNaN = dartx.isNaN;
  var $round = dartx.round;
  var $codeUnitAt = dartx.codeUnitAt;
  var $toString = dartx.toString;
  var $ceilToDouble = dartx.ceilToDouble;
  var $isFinite = dartx.isFinite;
  var $single = dartx.single;
  var boolTovoid = () => (boolTovoid = dart.constFn(dart.fnType(dart.void, [core.bool])))();
  var DiagnosticsPropertyOfGradient = () => (DiagnosticsPropertyOfGradient = dart.constFn(diagnostics.DiagnosticsProperty$(gradient.Gradient)))();
  var DiagnosticsPropertyOfDecorationImage = () => (DiagnosticsPropertyOfDecorationImage = dart.constFn(diagnostics.DiagnosticsProperty$(decoration_image.DecorationImage)))();
  var IterablePropertyOfBoxShadow = () => (IterablePropertyOfBoxShadow = dart.constFn(diagnostics.IterableProperty$(box_shadow.BoxShadow)))();
  var DiagnosticsPropertyOfShapeBorder = () => (DiagnosticsPropertyOfShapeBorder = dart.constFn(diagnostics.DiagnosticsProperty$(borders$.ShapeBorder)))();
  var ListOfPath = () => (ListOfPath = dart.constFn(core.List$(ui.Path)))();
  var ListOfPaint = () => (ListOfPaint = dart.constFn(core.List$(ui.Paint)))();
  var JSArrayOfShapeBorder = () => (JSArrayOfShapeBorder = dart.constFn(_interceptors.JSArray$(borders$.ShapeBorder)))();
  var ShapeBorderTobool = () => (ShapeBorderTobool = dart.constFn(dart.fnType(core.bool, [borders$.ShapeBorder])))();
  var EdgeInsetsGeometryAndShapeBorderToEdgeInsetsGeometry = () => (EdgeInsetsGeometryAndShapeBorderToEdgeInsetsGeometry = dart.constFn(dart.fnType(edge_insets.EdgeInsetsGeometry, [edge_insets.EdgeInsetsGeometry, borders$.ShapeBorder])))();
  var ShapeBorderToShapeBorder = () => (ShapeBorderToShapeBorder = dart.constFn(dart.fnType(borders$.ShapeBorder, [borders$.ShapeBorder])))();
  var ShapeBorderToString = () => (ShapeBorderToString = dart.constFn(dart.fnType(core.String, [borders$.ShapeBorder])))();
  var DiagnosticsPropertyOfImageProvider = () => (DiagnosticsPropertyOfImageProvider = dart.constFn(diagnostics.DiagnosticsProperty$(image_provider.ImageProvider)))();
  var DiagnosticsPropertyOfImageConfiguration = () => (DiagnosticsPropertyOfImageConfiguration = dart.constFn(diagnostics.DiagnosticsProperty$(image_provider.ImageConfiguration)))();
  var DiagnosticsPropertyOfObject = () => (DiagnosticsPropertyOfObject = dart.constFn(diagnostics.DiagnosticsProperty$(core.Object)))();
  var SyncIterableOfDiagnosticsPropertyOfObject = () => (SyncIterableOfDiagnosticsPropertyOfObject = dart.constFn(_js_helper.SyncIterable$(DiagnosticsPropertyOfObject())))();
  var IterableOfDiagnosticsPropertyOfObject = () => (IterableOfDiagnosticsPropertyOfObject = dart.constFn(core.Iterable$(DiagnosticsPropertyOfObject())))();
  var VoidToIterableOfDiagnosticsPropertyOfObject = () => (VoidToIterableOfDiagnosticsPropertyOfObject = dart.constFn(dart.fnType(IterableOfDiagnosticsPropertyOfObject(), [])))();
  var FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  var dynamicAndStackTraceToFutureOfvoid = () => (dynamicAndStackTraceToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [dart.dynamic, core.StackTrace])))();
  var ZoneAndZoneDelegateAndZone__ToNull = () => (ZoneAndZoneDelegateAndZone__ToNull = dart.constFn(dart.fnType(core.Null, [async.Zone, async.ZoneDelegate, async.Zone, core.Object, core.StackTrace])))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var VoidToImageStreamCompleter = () => (VoidToImageStreamCompleter = dart.constFn(dart.fnType(image_stream.ImageStreamCompleter, [])))();
  var DiagnosticsPropertyOfAssetBundleImageKey = () => (DiagnosticsPropertyOfAssetBundleImageKey = dart.constFn(diagnostics.DiagnosticsProperty$(image_provider.AssetBundleImageKey)))();
  var FutureOfCodec = () => (FutureOfCodec = dart.constFn(async.Future$(ui.Codec)))();
  var Uint8List__ToFutureOfCodec = () => (Uint8List__ToFutureOfCodec = dart.constFn(dart.fnType(FutureOfCodec(), [typed_data.Uint8List], {cacheHeight: core.int, cacheWidth: core.int}, {})))();
  var SynchronousFutureOfFileImage = () => (SynchronousFutureOfFileImage = dart.constFn(synchronous_future.SynchronousFuture$(image_provider.FileImage)))();
  var SyncIterableOfErrorDescription = () => (SyncIterableOfErrorDescription = dart.constFn(_js_helper.SyncIterable$(assertions.ErrorDescription)))();
  var IterableOfErrorDescription = () => (IterableOfErrorDescription = dart.constFn(core.Iterable$(assertions.ErrorDescription)))();
  var VoidToIterableOfErrorDescription = () => (VoidToIterableOfErrorDescription = dart.constFn(dart.fnType(IterableOfErrorDescription(), [])))();
  var SynchronousFutureOfMemoryImage = () => (SynchronousFutureOfMemoryImage = dart.constFn(synchronous_future.SynchronousFuture$(image_provider.MemoryImage)))();
  var SynchronousFutureOfAssetBundleImageKey = () => (SynchronousFutureOfAssetBundleImageKey = dart.constFn(synchronous_future.SynchronousFuture$(image_provider.AssetBundleImageKey)))();
  var JSArrayOfImageStreamListener = () => (JSArrayOfImageStreamListener = dart.constFn(_interceptors.JSArray$(image_stream.ImageStreamListener)))();
  var ListOfImageStreamListener = () => (ListOfImageStreamListener = dart.constFn(core.List$(image_stream.ImageStreamListener)))();
  var dynamicAndStackTraceTovoid = () => (dynamicAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic, core.StackTrace])))();
  var ImageStreamListenerToFn = () => (ImageStreamListenerToFn = dart.constFn(dart.fnType(dynamicAndStackTraceTovoid(), [image_stream.ImageStreamListener])))();
  var FnTobool = () => (FnTobool = dart.constFn(dart.fnType(core.bool, [dynamicAndStackTraceTovoid()])))();
  var DiagnosticsPropertyOfImageInfo = () => (DiagnosticsPropertyOfImageInfo = dart.constFn(diagnostics.DiagnosticsProperty$(image_stream.ImageInfo)))();
  var ObjectFlagPropertyOfListOfImageStreamListener = () => (ObjectFlagPropertyOfListOfImageStreamListener = dart.constFn(diagnostics.ObjectFlagProperty$(ListOfImageStreamListener())))();
  var ObjectFlagPropertyOfImageStreamCompleter = () => (ObjectFlagPropertyOfImageStreamCompleter = dart.constFn(diagnostics.ObjectFlagProperty$(image_stream.ImageStreamCompleter)))();
  var dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  var ImageChunkEventTovoid = () => (ImageChunkEventTovoid = dart.constFn(dart.fnType(dart.void, [image_stream.ImageChunkEvent])))();
  var ImageStreamListenerToFn$ = () => (ImageStreamListenerToFn$ = dart.constFn(dart.fnType(ImageChunkEventTovoid(), [image_stream.ImageStreamListener])))();
  var FnTobool$ = () => (FnTobool$ = dart.constFn(dart.fnType(core.bool, [ImageChunkEventTovoid()])))();
  var ImageChunkEventToNull = () => (ImageChunkEventToNull = dart.constFn(dart.fnType(core.Null, [image_stream.ImageChunkEvent])))();
  var LinkedMapOfObject$_PendingImage = () => (LinkedMapOfObject$_PendingImage = dart.constFn(_js_helper.LinkedMap$(core.Object, image_cache._PendingImage)))();
  var LinkedMapOfObject$_CachedImage = () => (LinkedMapOfObject$_CachedImage = dart.constFn(_js_helper.LinkedMap$(core.Object, image_cache._CachedImage)))();
  var ImageInfoAndboolTovoid = () => (ImageInfoAndboolTovoid = dart.constFn(dart.fnType(dart.void, [image_stream.ImageInfo, core.bool])))();
  var MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var LinkedHashSetOfVoidTovoid = () => (LinkedHashSetOfVoidTovoid = dart.constFn(collection.LinkedHashSet$(VoidTovoid())))();
  var JSArrayOfPath = () => (JSArrayOfPath = dart.constFn(_interceptors.JSArray$(ui.Path)))();
  var JSArrayOfPaint = () => (JSArrayOfPaint = dart.constFn(_interceptors.JSArray$(ui.Paint)))();
  var JSArrayOfdouble = () => (JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))();
  var SynchronousFutureOfNetworkImage = () => (SynchronousFutureOfNetworkImage = dart.constFn(synchronous_future.SynchronousFuture$(_network_image_web.NetworkImage)))();
  var DiagnosticsPropertyOfNetworkImage = () => (DiagnosticsPropertyOfNetworkImage = dart.constFn(diagnostics.DiagnosticsProperty$(_network_image_web.NetworkImage)))();
  var JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  var ListOfDiagnosticsNode = () => (ListOfDiagnosticsNode = dart.constFn(core.List$(diagnostics.DiagnosticsNode)))();
  var VoidToListOfDiagnosticsNode = () => (VoidToListOfDiagnosticsNode = dart.constFn(dart.fnType(ListOfDiagnosticsNode(), [])))();
  var ListOfdouble = () => (ListOfdouble = dart.constFn(core.List$(core.double)))();
  var intTodouble = () => (intTodouble = dart.constFn(dart.fnType(core.double, [core.int])))();
  var ColorToColor = () => (ColorToColor = dart.constFn(dart.fnType(ui.Color, [ui.Color])))();
  var doubleTobool = () => (doubleTobool = dart.constFn(dart.fnType(core.bool, [core.double])))();
  var SplayTreeSetOfdouble = () => (SplayTreeSetOfdouble = dart.constFn(collection.SplayTreeSet$(core.double)))();
  var doubleToColor = () => (doubleToColor = dart.constFn(dart.fnType(ui.Color, [core.double])))();
  var JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var SyncIterableOfRect = () => (SyncIterableOfRect = dart.constFn(_js_helper.SyncIterable$(ui.Rect)))();
  var IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  var JSArrayOfBoxShadow = () => (JSArrayOfBoxShadow = dart.constFn(_interceptors.JSArray$(box_shadow.BoxShadow)))();
  var DiagnosticsPropertyOfBoxBorder = () => (DiagnosticsPropertyOfBoxBorder = dart.constFn(diagnostics.DiagnosticsProperty$(box_border.BoxBorder)))();
  var DiagnosticsPropertyOfBorderRadiusGeometry = () => (DiagnosticsPropertyOfBorderRadiusGeometry = dart.constFn(diagnostics.DiagnosticsProperty$(border_radius.BorderRadiusGeometry)))();
  var EnumPropertyOfBoxShape = () => (EnumPropertyOfBoxShape = dart.constFn(diagnostics.EnumProperty$(box_border.BoxShape)))();
  var StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  var IterablePropertyOfString = () => (IterablePropertyOfString = dart.constFn(diagnostics.IterableProperty$(core.String)))();
  var DiagnosticsPropertyOfFontWeight = () => (DiagnosticsPropertyOfFontWeight = dart.constFn(diagnostics.DiagnosticsProperty$(ui.FontWeight)))();
  var EnumPropertyOfFontStyle = () => (EnumPropertyOfFontStyle = dart.constFn(diagnostics.EnumProperty$(ui.FontStyle)))();
  var EnumPropertyOfTextBaseline = () => (EnumPropertyOfTextBaseline = dart.constFn(diagnostics.EnumProperty$(ui.TextBaseline)))();
  var DiagnosticsPropertyOfLocale = () => (DiagnosticsPropertyOfLocale = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Locale)))();
  var DiagnosticsPropertyOfPaint = () => (DiagnosticsPropertyOfPaint = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Paint)))();
  var DiagnosticsPropertyOfTextDecoration = () => (DiagnosticsPropertyOfTextDecoration = dart.constFn(diagnostics.DiagnosticsProperty$(ui.TextDecoration)))();
  var DiagnosticsNodeTobool = () => (DiagnosticsNodeTobool = dart.constFn(dart.fnType(core.bool, [diagnostics.DiagnosticsNode])))();
  var DiagnosticsPropertyOfbool = () => (DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))();
  var InlineSpanTobool = () => (InlineSpanTobool = dart.constFn(dart.fnType(core.bool, [inline_span.InlineSpan])))();
  var JSArrayOfInlineSpanSemanticsInformation = () => (JSArrayOfInlineSpanSemanticsInformation = dart.constFn(_interceptors.JSArray$(inline_span.InlineSpanSemanticsInformation)))();
  var DiagnosticsPropertyOfGestureRecognizer = () => (DiagnosticsPropertyOfGestureRecognizer = dart.constFn(diagnostics.DiagnosticsProperty$(recognizer.GestureRecognizer)))();
  var InlineSpanToDiagnosticsNode = () => (InlineSpanToDiagnosticsNode = dart.constFn(dart.fnType(diagnostics.DiagnosticsNode, [inline_span.InlineSpan])))();
  var VoidToint = () => (VoidToint = dart.constFn(dart.fnType(core.int, [])))();
  var JSArrayOfTextBox = () => (JSArrayOfTextBox = dart.constFn(_interceptors.JSArray$(ui.TextBox)))();
  var EnumPropertyOfPlaceholderAlignment = () => (EnumPropertyOfPlaceholderAlignment = dart.constFn(diagnostics.EnumProperty$(ui.PlaceholderAlignment)))();
  var EnumPropertyOfFlutterLogoStyle = () => (EnumPropertyOfFlutterLogoStyle = dart.constFn(diagnostics.EnumProperty$(flutter_logo.FlutterLogoStyle)))();
  var JSArrayOfColor = () => (JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui.Color)))();
  var JSArrayOfOffset = () => (JSArrayOfOffset = dart.constFn(_interceptors.JSArray$(ui.Offset)))();
  var ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  var MapOfString$ListOfString = () => (MapOfString$ListOfString = dart.constFn(core.Map$(core.String, ListOfString())))();
  var FutureOfMapOfString$ListOfString = () => (FutureOfMapOfString$ListOfString = dart.constFn(async.Future$(MapOfString$ListOfString())))();
  var StringToFutureOfMapOfString$ListOfString = () => (StringToFutureOfMapOfString$ListOfString = dart.constFn(dart.fnType(FutureOfMapOfString$ListOfString(), [core.String])))();
  var MapOfString$ListOfStringToNull = () => (MapOfString$ListOfStringToNull = dart.constFn(dart.fnType(core.Null, [MapOfString$ListOfString()])))();
  var CompleterOfAssetBundleImageKey = () => (CompleterOfAssetBundleImageKey = dart.constFn(async.Completer$(image_provider.AssetBundleImageKey)))();
  var SynchronousFutureOfMapOfString$ListOfString = () => (SynchronousFutureOfMapOfString$ListOfString = dart.constFn(synchronous_future.SynchronousFuture$(MapOfString$ListOfString())))();
  var LinkedHashMapOfString$ListOfString = () => (LinkedHashMapOfString$ListOfString = dart.constFn(collection.LinkedHashMap$(core.String, ListOfString())))();
  var StringToListOfString = () => (StringToListOfString = dart.constFn(dart.fnType(ListOfString(), [core.String])))();
  var SplayTreeMapOfdouble$String = () => (SplayTreeMapOfdouble$String = dart.constFn(collection.SplayTreeMap$(core.double, core.String)))();
  var ListOfOffset = () => (ListOfOffset = dart.constFn(core.List$(ui.Offset)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.Clip.prototype,
        [_name]: "Clip.none",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ui.Clip.prototype,
        [_name]: "Clip.hardEdge",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.Clip.prototype,
        [_name]: "Clip.antiAlias",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui.Clip.prototype,
        [_name]: "Clip.antiAliasWithSaveLayer",
        index: 3
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: borders$.BorderStyle.prototype,
        [_name$]: "BorderStyle.none",
        index: 0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: borders$.BorderSide.prototype,
        [BorderSide_style]: C6 || CT.C6,
        [BorderSide_width]: 0,
        [BorderSide_color]: C7 || CT.C7
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: circle_border.CircleBorder.prototype,
        [CircleBorder_side]: C5 || CT.C5
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_name$0]: "BoxShape.circle",
        index: 1
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: box_border.Border.prototype,
        [Border_left]: C5 || CT.C5,
        [Border_bottom]: C5 || CT.C5,
        [Border_right]: C5 || CT.C5,
        [Border_top]: C5 || CT.C5
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_name$0]: "BoxShape.rectangle",
        index: 0
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 0,
        [Radius_x]: 0
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C12 || CT.C12,
        [BorderRadius_bottomLeft]: C12 || CT.C12,
        [BorderRadius_topRight]: C12 || CT.C12,
        [BorderRadius_topLeft]: C12 || CT.C12
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: borders$.BorderStyle.prototype,
        [_name$]: "BorderStyle.solid",
        index: 1
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name$1]: "Axis.horizontal",
        index: 0
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name$1]: "Axis.vertical",
        index: 1
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: edge_insets._MixedEdgeInsets.prototype,
        [_MixedEdgeInsets__bottom]: 1 / 0,
        [_MixedEdgeInsets__top]: 1 / 0,
        [_MixedEdgeInsets__end]: 1 / 0,
        [_MixedEdgeInsets__start]: 1 / 0,
        [_MixedEdgeInsets__right]: 1 / 0,
        [_MixedEdgeInsets__left]: 1 / 0
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [bottom$]: 0,
        [right$]: 0,
        [top$]: 0,
        [left$]: 0
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name]: "TextDirection.rtl",
        index: 0
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name]: "TextDirection.ltr",
        index: 1
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: edge_insets.EdgeInsetsDirectional.prototype,
        [bottom$0]: 0,
        [end$]: 0,
        [top$0]: 0,
        [start$]: 0
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: basic_types.RenderComparison.prototype,
        [_name$1]: "RenderComparison.identical",
        index: 0
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: basic_types.RenderComparison.prototype,
        [_name$1]: "RenderComparison.metadata",
        index: 1
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: basic_types.RenderComparison.prototype,
        [_name$1]: "RenderComparison.paint",
        index: 2
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: basic_types.RenderComparison.prototype,
        [_name$1]: "RenderComparison.layout",
        index: 3
      });
    },
    get C25() {
      return C25 = dart.constList([C21 || CT.C21, C22 || CT.C22, C23 || CT.C23, C24 || CT.C24], basic_types.RenderComparison);
    },
    get C26() {
      return C26 = dart.constList([C14 || CT.C14, C15 || CT.C15], basic_types.Axis);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: basic_types.VerticalDirection.prototype,
        [_name$1]: "VerticalDirection.up",
        index: 0
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: basic_types.VerticalDirection.prototype,
        [_name$1]: "VerticalDirection.down",
        index: 1
      });
    },
    get C29() {
      return C29 = dart.constList([C27 || CT.C27, C28 || CT.C28], basic_types.VerticalDirection);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name$1]: "AxisDirection.up",
        index: 0
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name$1]: "AxisDirection.right",
        index: 1
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name$1]: "AxisDirection.down",
        index: 2
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name$1]: "AxisDirection.left",
        index: 3
      });
    },
    get C34() {
      return C34 = dart.constList([C30 || CT.C30, C31 || CT.C31, C32 || CT.C32, C33 || CT.C33], basic_types.AxisDirection);
    },
    get C35() {
      return C35 = dart.constList([C6 || CT.C6, C13 || CT.C13], borders$.BorderStyle);
    },
    get C36() {
      return C36 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 0
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: border_radius.BorderRadiusDirectional.prototype,
        [bottomEnd$]: C12 || CT.C12,
        [bottomStart$]: C12 || CT.C12,
        [topEnd$]: C12 || CT.C12,
        [topStart$]: C12 || CT.C12
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: image_provider.ImageConfiguration.prototype,
        [platform$]: null,
        [size$]: null,
        [textDirection$]: null,
        [locale$]: null,
        [devicePixelRatio$]: null,
        [bundle$]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 100,
        [OffsetBase__dx]: 100
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: shader_warm_up.DefaultShaderWarmUp.prototype,
        [DefaultShaderWarmUp_canvasSize]: C40 || CT.C40,
        [DefaultShaderWarmUp_drawCallSpacing]: 0
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: ui.RRect.prototype,
        [RRect_webOnlyUniformRadii]: true,
        [RRect_blRadiusY]: 10,
        [RRect_blRadiusX]: 10,
        [RRect_brRadiusY]: 10,
        [RRect_brRadiusX]: 10,
        [RRect_trRadiusY]: 10,
        [RRect_trRadiusX]: 10,
        [RRect_tlRadiusY]: 10,
        [RRect_tlRadiusX]: 10,
        [RRect_bottom]: 60,
        [RRect_right]: 60,
        [RRect_top]: 20,
        [RRect_left]: 20
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 40,
        [OffsetBase__dx]: 40
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: ui.ParagraphConstraints.prototype,
        [ParagraphConstraints_width]: 60
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 20,
        [OffsetBase__dx]: 20
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 16,
        [Radius_x]: 16
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: ui.Rect.prototype,
        [Rect_bottom]: 240,
        [Rect_right]: 320,
        [Rect_top]: 10,
        [Rect_left]: 10
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: -1
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 1
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: ui.TileMode.prototype,
        [_name]: "TileMode.clamp",
        index: 0
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: -1,
        [Alignment_x]: -1
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: -1,
        [Alignment_x]: 0
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: -1,
        [Alignment_x]: 1
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 1,
        [Alignment_x]: -1
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 1,
        [Alignment_x]: 0
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 1,
        [Alignment_x]: 1
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: alignment.AlignmentDirectional.prototype,
        [y$0]: -1,
        [start$0]: -1
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: alignment.AlignmentDirectional.prototype,
        [y$0]: -1,
        [start$0]: 0
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: alignment.AlignmentDirectional.prototype,
        [y$0]: -1,
        [start$0]: 1
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: alignment.AlignmentDirectional.prototype,
        [y$0]: 0,
        [start$0]: -1
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: alignment.AlignmentDirectional.prototype,
        [y$0]: 0,
        [start$0]: 0
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: alignment.AlignmentDirectional.prototype,
        [y$0]: 0,
        [start$0]: 1
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: alignment.AlignmentDirectional.prototype,
        [y$0]: 1,
        [start$0]: -1
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: alignment.AlignmentDirectional.prototype,
        [y$0]: 1,
        [start$0]: 0
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: alignment.AlignmentDirectional.prototype,
        [y$0]: 1,
        [start$0]: 1
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: alignment.TextAlignVertical.prototype,
        [y$1]: -1
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: alignment.TextAlignVertical.prototype,
        [y$1]: 0
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: alignment.TextAlignVertical.prototype,
        [y$1]: 1
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: decoration_image.ImageRepeat.prototype,
        [_name$2]: "ImageRepeat.repeat",
        index: 0
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: decoration_image.ImageRepeat.prototype,
        [_name$2]: "ImageRepeat.repeatX",
        index: 1
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: decoration_image.ImageRepeat.prototype,
        [_name$2]: "ImageRepeat.repeatY",
        index: 2
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: decoration_image.ImageRepeat.prototype,
        [_name$2]: "ImageRepeat.noRepeat",
        index: 3
      });
    },
    get C73() {
      return C73 = dart.constList([C69 || CT.C69, C70 || CT.C70, C71 || CT.C71, C72 || CT.C72], decoration_image.ImageRepeat);
    },
    get C74() {
      return C74 = dart.const({
        __proto__: ui.FilterQuality.prototype,
        [_name]: "FilterQuality.low",
        index: 1
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_name$3]: "BoxFit.fill",
        index: 0
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_name$3]: "BoxFit.contain",
        index: 1
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_name$3]: "BoxFit.cover",
        index: 2
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_name$3]: "BoxFit.fitWidth",
        index: 3
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_name$3]: "BoxFit.fitHeight",
        index: 4
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_name$3]: "BoxFit.none",
        index: 5
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_name$3]: "BoxFit.scaleDown",
        index: 6
      });
    },
    get C82() {
      return C82 = dart.constList([C75 || CT.C75, C76 || CT.C76, C77 || CT.C77, C78 || CT.C78, C79 || CT.C79, C80 || CT.C80, C81 || CT.C81], box_fit.BoxFit);
    },
    get C84() {
      return C84 = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: box_fit.FittedSizes.prototype,
        [destination$]: C84 || CT.C84,
        [source$]: C84 || CT.C84
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: diagnostics._NoDefaultValue.prototype
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: diagnostics.DiagnosticsTreeStyle.prototype,
        [_name$4]: "DiagnosticsTreeStyle.singleLine",
        index: 8
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: diagnostics.DiagnosticLevel.prototype,
        [_name$4]: "DiagnosticLevel.info",
        index: 3
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C89() {
      return C89 = dart.constList([C10 || CT.C10, C8 || CT.C8], box_border.BoxShape);
    },
    get C90() {
      return C90 = dart.const({
        __proto__: strut_style.StrutStyle.prototype,
        [debugLabel$0]: null,
        [forceStrutHeight$]: null,
        [leading$]: 0,
        [fontStyle$0]: null,
        [fontWeight$0]: null,
        [height$2]: 0,
        [fontSize$0]: null,
        [_package$1]: null,
        [_fontFamilyFallback$1]: null,
        [fontFamily$0]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: inline_span.InlineSpanSemanticsInformation.prototype,
        [requiresOwnNode]: true,
        [isPlaceholder$]: true,
        [recognizer$]: null,
        [semanticsLabel$]: null,
        [text$]: "￼"
      });
    },
    get C92() {
      return C92 = dart.constList([], diagnostics.DiagnosticsNode);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: text_painter.TextWidthBasis.prototype,
        [_name$5]: "TextWidthBasis.parent",
        index: 0
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: text_painter.TextWidthBasis.prototype,
        [_name$5]: "TextWidthBasis.longestLine",
        index: 1
      });
    },
    get C95() {
      return C95 = dart.constList([C93 || CT.C93, C94 || CT.C94], text_painter.TextWidthBasis);
    },
    get C96() {
      return C96 = dart.const({
        __proto__: ui.TextAlign.prototype,
        [_name]: "TextAlign.start",
        index: 4
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: ui.ParagraphConstraints.prototype,
        [ParagraphConstraints_width]: 1 / 0
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: ui.TextBaseline.prototype,
        [_name]: "TextBaseline.alphabetic",
        index: 0
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: ui.TextBaseline.prototype,
        [_name]: "TextBaseline.ideographic",
        index: 1
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: ui.TextAlign.prototype,
        [_name]: "TextAlign.left",
        index: 0
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: ui.TextAlign.prototype,
        [_name]: "TextAlign.right",
        index: 1
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: ui.TextAlign.prototype,
        [_name]: "TextAlign.center",
        index: 2
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: ui.TextAlign.prototype,
        [_name]: "TextAlign.justify",
        index: 3
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: ui.TextAlign.prototype,
        [_name]: "TextAlign.end",
        index: 5
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: ui.TextAffinity.prototype,
        [_name]: "TextAffinity.upstream",
        index: 0
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: ui.TextAffinity.prototype,
        [_name]: "TextAffinity.downstream",
        index: 1
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: ui.BoxHeightStyle.prototype,
        [_name]: "BoxHeightStyle.tight",
        index: 0
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: ui.BoxWidthStyle.prototype,
        [_name]: "BoxWidthStyle.tight",
        index: 0
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_name]: "PlaceholderAlignment.bottom",
        index: 4
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: fractional_offset.FractionalOffset.prototype,
        [Alignment_y]: -1,
        [Alignment_x]: -1
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: fractional_offset.FractionalOffset.prototype,
        [Alignment_y]: -1,
        [Alignment_x]: 0
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: fractional_offset.FractionalOffset.prototype,
        [Alignment_y]: -1,
        [Alignment_x]: 1
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: fractional_offset.FractionalOffset.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: -1
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: fractional_offset.FractionalOffset.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: fractional_offset.FractionalOffset.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 1
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: fractional_offset.FractionalOffset.prototype,
        [Alignment_y]: 1,
        [Alignment_x]: -1
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: fractional_offset.FractionalOffset.prototype,
        [Alignment_y]: 1,
        [Alignment_x]: 0
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: fractional_offset.FractionalOffset.prototype,
        [Alignment_y]: 1,
        [Alignment_x]: 1
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: flutter_logo.FlutterLogoStyle.prototype,
        [_name$6]: "FlutterLogoStyle.markOnly",
        index: 0
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: flutter_logo.FlutterLogoStyle.prototype,
        [_name$6]: "FlutterLogoStyle.horizontal",
        index: 1
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: flutter_logo.FlutterLogoStyle.prototype,
        [_name$6]: "FlutterLogoStyle.stacked",
        index: 2
      });
    },
    get C122() {
      return C122 = dart.constList([C119 || CT.C119, C120 || CT.C120, C121 || CT.C121], flutter_logo.FlutterLogoStyle);
    },
    get C123() {
      return C123 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4282557941.0
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4279060385.0
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4284572001.0
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: text_editing.TextSelection.prototype,
        [TextRange_end]: 7,
        [TextRange_start]: 0,
        [TextSelection_isDirectional]: false,
        [TextSelection_affinity]: C106 || CT.C106,
        [TextSelection_extentOffset]: 7,
        [TextSelection_baseOffset]: 0
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 152.2773,
        [OffsetBase__dx]: 125.1715
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 158.5341,
        [OffsetBase__dx]: 80.8297
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 3221225471.0
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 3221028092.0
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 3220501748.0
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 3219514853.0
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 3218198993.0
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 3216422582.0
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 3214251413.0
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 3211685486.0
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 3210830177.0
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 163.5739,
        [OffsetBase__dx]: 100.2735
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 155.2472,
        [OffsetBase__dx]: 91.9468
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2164260863.0
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2164063484.0
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2163537140.0
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2162550245.0
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2161234385.0
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2159457974.0
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2157286805.0
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2154720878.0
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2153865569.0
      });
    },
    get C149() {
      return C149 = dart.constList([0.7071, -0.7071, 0, 0, 0.7071, 0.7071, 0, 0, 0, 0, 1, 0, -77.697, 98.057, 0, 1], core.double);
    },
    get C150() {
      return C150 = dart.const({
        __proto__: ui.Rect.prototype,
        [Rect_bottom]: 162.5,
        [Rect_right]: 99.19999999999999,
        [Rect_top]: 123.1,
        [Rect_left]: 59.8
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 232,
        [OffsetBase__dx]: 820
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 306,
        [OffsetBase__dx]: 252
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 202,
        [OffsetBase__dx]: 202
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 16777215
      });
    },
    get C156() {
      return C156 = dart.constList(["null"], core.String);
    },
    get C157() {
      return C157 = dart.fn(image_resolution.AssetImage._manifestParser, StringToFutureOfMapOfString$ListOfString());
    }
  });
  var _name = dart.privateName(ui, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var _clipAndPaint = dart.privateName(clip, "_clipAndPaint");
  clip.ClipContext = class ClipContext extends core.Object {
    [_clipAndPaint](canvasClipCall, clipBehavior, bounds, painter) {
      if (!(canvasClipCall != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/clip.dart", 13, 12, "canvasClipCall != null");
      this.canvas.save();
      switch (clipBehavior) {
        case C0 || CT.C0:
        {
          break;
        }
        case C1 || CT.C1:
        {
          canvasClipCall(false);
          break;
        }
        case C2 || CT.C2:
        {
          canvasClipCall(true);
          break;
        }
        case C3 || CT.C3:
        {
          canvasClipCall(true);
          this.canvas.saveLayer(bounds, ui.Paint.new());
          break;
        }
      }
      painter();
      if (dart.equals(clipBehavior, ui.Clip.antiAliasWithSaveLayer)) {
        this.canvas.restore();
      }
      this.canvas.restore();
    }
    clipPathAndPaint(path, clipBehavior, bounds, painter) {
      this[_clipAndPaint](dart.fn(doAntiAias => this.canvas.clipPath(path, {doAntiAlias: doAntiAias}), boolTovoid()), clipBehavior, bounds, painter);
    }
    clipRRectAndPaint(rrect, clipBehavior, bounds, painter) {
      this[_clipAndPaint](dart.fn(doAntiAias => this.canvas.clipRRect(rrect, {doAntiAlias: doAntiAias}), boolTovoid()), clipBehavior, bounds, painter);
    }
    clipRectAndPaint(rect, clipBehavior, bounds, painter) {
      this[_clipAndPaint](dart.fn(doAntiAias => this.canvas.clipRect(rect, {doAntiAlias: doAntiAias}), boolTovoid()), clipBehavior, bounds, painter);
    }
  };
  (clip.ClipContext.new = function() {
    ;
  }).prototype = clip.ClipContext.prototype;
  dart.addTypeTests(clip.ClipContext);
  dart.setMethodSignature(clip.ClipContext, () => ({
    __proto__: dart.getMethods(clip.ClipContext.__proto__),
    [_clipAndPaint]: dart.fnType(dart.void, [dart.fnType(dart.void, [core.bool]), ui.Clip, ui.Rect, dart.fnType(dart.void, [])]),
    clipPathAndPaint: dart.fnType(dart.void, [ui.Path, ui.Clip, ui.Rect, dart.fnType(dart.void, [])]),
    clipRRectAndPaint: dart.fnType(dart.void, [ui.RRect, ui.Clip, ui.Rect, dart.fnType(dart.void, [])]),
    clipRectAndPaint: dart.fnType(dart.void, [ui.Rect, ui.Clip, ui.Rect, dart.fnType(dart.void, [])])
  }));
  dart.setLibraryUri(clip.ClipContext, "package:flutter/src/painting/clip.dart");
  var _name$ = dart.privateName(borders$, "_name");
  var C6;
  var BorderSide_style = dart.privateName(borders$, "BorderSide.style");
  var BorderSide_width = dart.privateName(borders$, "BorderSide.width");
  var Color_value = dart.privateName(ui, "Color.value");
  var C7;
  var BorderSide_color = dart.privateName(borders$, "BorderSide.color");
  var C5;
  var CircleBorder_side = dart.privateName(circle_border, "CircleBorder.side");
  var C4;
  var _name$0 = dart.privateName(box_border, "_name");
  var C8;
  var Border_left = dart.privateName(box_border, "Border.left");
  var Border_bottom = dart.privateName(box_border, "Border.bottom");
  var Border_right = dart.privateName(box_border, "Border.right");
  var Border_top = dart.privateName(box_border, "Border.top");
  var C9;
  var C10;
  decoration.Decoration = class Decoration extends diagnostics.Diagnosticable {
    toStringShort() {
      return object.objectRuntimeType(this, "Decoration");
    }
    debugAssertIsValid() {
      return true;
    }
    get padding() {
      return edge_insets.EdgeInsets.zero;
    }
    get isComplex() {
      return false;
    }
    lerpFrom(a, t) {
      return null;
    }
    lerpTo(b, t) {
      return null;
    }
    static lerp(a, b, t) {
      let t0, t0$, t0$0, t1, t1$, t0$1;
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/decoration.dart", 129, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) {
        t0 = b.lerpFrom(null, t);
        return t0 == null ? b : t0;
      }
      if (b == null) {
        t0$ = a.lerpTo(null, t);
        return t0$ == null ? a : t0$;
      }
      if (t === 0.0) return a;
      if (t === 1.0) return b;
      t0$1 = (t0$0 = b.lerpFrom(a, t), t0$0 == null ? a.lerpTo(b, t) : t0$0);
      return t0$1 == null ? dart.notNull(t) < 0.5 ? (t1 = a.lerpTo(null, dart.notNull(t) * 2.0), t1 == null ? a : t1) : (t1$ = b.lerpFrom(null, (dart.notNull(t) - 0.5) * 2.0), t1$ == null ? b : t1$) : t0$1;
    }
    hitTest(size, position, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return true;
    }
    getClipPath(rect, textDirection) {
      return null;
    }
  };
  (decoration.Decoration.new = function() {
    decoration.Decoration.__proto__.new.call(this);
    ;
  }).prototype = decoration.Decoration.prototype;
  dart.addTypeTests(decoration.Decoration);
  dart.setMethodSignature(decoration.Decoration, () => ({
    __proto__: dart.getMethods(decoration.Decoration.__proto__),
    debugAssertIsValid: dart.fnType(core.bool, []),
    lerpFrom: dart.fnType(decoration.Decoration, [decoration.Decoration, core.double]),
    lerpTo: dart.fnType(decoration.Decoration, [decoration.Decoration, core.double]),
    hitTest: dart.fnType(core.bool, [ui.Size, ui.Offset], {textDirection: ui.TextDirection}, {}),
    getClipPath: dart.fnType(ui.Path, [ui.Rect, ui.TextDirection])
  }));
  dart.setGetterSignature(decoration.Decoration, () => ({
    __proto__: dart.getGetters(decoration.Decoration.__proto__),
    padding: edge_insets.EdgeInsetsGeometry,
    isComplex: core.bool
  }));
  dart.setLibraryUri(decoration.Decoration, "package:flutter/src/painting/decoration.dart");
  var color$ = dart.privateName(shape_decoration, "ShapeDecoration.color");
  var gradient$ = dart.privateName(shape_decoration, "ShapeDecoration.gradient");
  var image$ = dart.privateName(shape_decoration, "ShapeDecoration.image");
  var shadows$ = dart.privateName(shape_decoration, "ShapeDecoration.shadows");
  var shape$ = dart.privateName(shape_decoration, "ShapeDecoration.shape");
  shape_decoration.ShapeDecoration = class ShapeDecoration extends decoration.Decoration {
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get gradient() {
      return this[gradient$];
    }
    set gradient(value) {
      super.gradient = value;
    }
    get image() {
      return this[image$];
    }
    set image(value) {
      super.image = value;
    }
    get shadows() {
      return this[shadows$];
    }
    set shadows(value) {
      super.shadows = value;
    }
    get shape() {
      return this[shape$];
    }
    set shape(value) {
      super.shape = value;
    }
    static fromBoxDecoration(source) {
      let t0, t0$, t0$0;
      let shape = null;
      if (!(source.shape != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/shape_decoration.dart", 94, 12, "source.shape != null");
      switch (source.shape) {
        case C8 || CT.C8:
        {
          if (source.border != null) {
            if (!dart.test(source.border.isUniform)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/shape_decoration.dart", 98, 18, "source.border.isUniform");
            shape = new circle_border.CircleBorder.new({side: source.border.top});
          } else {
            shape = C4 || CT.C4;
          }
          break;
        }
        case C10 || CT.C10:
        {
          if (source.borderRadius != null) {
            if (!(source.border == null || dart.test(source.border.isUniform))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/shape_decoration.dart", 106, 18, "source.border == null || source.border.isUniform");
            shape = new rounded_rectangle_border.RoundedRectangleBorder.new({side: (t0$ = (t0 = source.border, t0 == null ? null : t0.top), t0$ == null ? borders$.BorderSide.none : t0$), borderRadius: source.borderRadius});
          } else {
            shape = (t0$0 = source.border, t0$0 == null ? C9 || CT.C9 : t0$0);
          }
          break;
        }
      }
      return new shape_decoration.ShapeDecoration.new({color: source.color, image: source.image, gradient: source.gradient, shadows: source.boxShadow, shape: shape});
    }
    getClipPath(rect, textDirection) {
      return this.shape.getOuterPath(rect, {textDirection: textDirection});
    }
    get padding() {
      return this.shape.dimensions;
    }
    get isComplex() {
      return this.shadows != null;
    }
    lerpFrom(a, t) {
      if (box_decoration.BoxDecoration.is(a)) {
        return shape_decoration.ShapeDecoration.lerp(shape_decoration.ShapeDecoration.fromBoxDecoration(a), this, t);
      } else if (a == null || shape_decoration.ShapeDecoration.is(a)) {
        return shape_decoration.ShapeDecoration.lerp(shape_decoration.ShapeDecoration.as(a), this, t);
      }
      return shape_decoration.ShapeDecoration.as(super.lerpFrom(a, t));
    }
    lerpTo(b, t) {
      if (box_decoration.BoxDecoration.is(b)) {
        return shape_decoration.ShapeDecoration.lerp(this, shape_decoration.ShapeDecoration.fromBoxDecoration(b), t);
      } else if (b == null || shape_decoration.ShapeDecoration.is(b)) {
        return shape_decoration.ShapeDecoration.lerp(this, shape_decoration.ShapeDecoration.as(b), t);
      }
      return shape_decoration.ShapeDecoration.as(super.lerpTo(b, t));
    }
    static lerp(a, b, t) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5;
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/shape_decoration.dart", 230, 12, "t != null");
      if (a == null && b == null) return null;
      if (a != null && b != null) {
        if (t === 0.0) return a;
        if (t === 1.0) return b;
      }
      return new shape_decoration.ShapeDecoration.new({color: ui.Color.lerp((t0 = a, t0 == null ? null : t0.color), (t0$ = b, t0$ == null ? null : t0$.color), t), gradient: gradient.Gradient.lerp((t0$0 = a, t0$0 == null ? null : t0$0.gradient), (t0$1 = b, t0$1 == null ? null : t0$1.gradient), t), image: dart.notNull(t) < 0.5 ? a.image : b.image, shadows: box_shadow.BoxShadow.lerpList((t0$2 = a, t0$2 == null ? null : t0$2.shadows), (t0$3 = b, t0$3 == null ? null : t0$3.shadows), t), shape: borders$.ShapeBorder.lerp((t0$4 = a, t0$4 == null ? null : t0$4.shape), (t0$5 = b, t0$5 == null ? null : t0$5.shape), t)});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return shape_decoration.ShapeDecoration.is(other) && dart.equals(other.color, this.color) && dart.equals(other.gradient, this.gradient) && dart.equals(other.image, this.image) && dart.equals(other.shadows, this.shadows) && dart.equals(other.shape, this.shape);
    }
    get hashCode() {
      return ui.hashValues(this.color, this.gradient, this.image, this.shape, this.shadows);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.defaultDiagnosticsTreeStyle = diagnostics.DiagnosticsTreeStyle.whitespace;
      properties.add(new colors.ColorProperty.new("color", this.color, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfGradient()).new("gradient", this.gradient, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfDecorationImage()).new("image", this.image, {defaultValue: null}));
      properties.add(new (IterablePropertyOfBoxShadow()).new("shadows", this.shadows, {defaultValue: null, style: diagnostics.DiagnosticsTreeStyle.whitespace}));
      properties.add(new (DiagnosticsPropertyOfShapeBorder()).new("shape", this.shape));
    }
    hitTest(size, position, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return this.shape.getOuterPath(ui.Offset.zero['&'](size), {textDirection: textDirection}).contains(position);
    }
    createBoxPainter(onChanged = null) {
      if (!(onChanged != null || this.image == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/shape_decoration.dart", 291, 12, "onChanged != null || image == null");
      return new shape_decoration._ShapeDecorationPainter.new(this, onChanged);
    }
  };
  (shape_decoration.ShapeDecoration.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    let image = opts && 'image' in opts ? opts.image : null;
    let gradient = opts && 'gradient' in opts ? opts.gradient : null;
    let shadows = opts && 'shadows' in opts ? opts.shadows : null;
    let shape = opts && 'shape' in opts ? opts.shape : null;
    this[color$] = color;
    this[image$] = image;
    this[gradient$] = gradient;
    this[shadows$] = shadows;
    this[shape$] = shape;
    if (!!(color != null && gradient != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/shape_decoration.dart", 79, 15, "!(color != null && gradient != null)");
    if (!(shape != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/shape_decoration.dart", 80, 15, "shape != null");
    shape_decoration.ShapeDecoration.__proto__.new.call(this);
    ;
  }).prototype = shape_decoration.ShapeDecoration.prototype;
  dart.addTypeTests(shape_decoration.ShapeDecoration);
  dart.setMethodSignature(shape_decoration.ShapeDecoration, () => ({
    __proto__: dart.getMethods(shape_decoration.ShapeDecoration.__proto__),
    lerpFrom: dart.fnType(shape_decoration.ShapeDecoration, [decoration.Decoration, core.double]),
    lerpTo: dart.fnType(shape_decoration.ShapeDecoration, [decoration.Decoration, core.double]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object]),
    createBoxPainter: dart.fnType(shape_decoration._ShapeDecorationPainter, [], [dart.fnType(dart.void, [])])
  }));
  dart.setLibraryUri(shape_decoration.ShapeDecoration, "package:flutter/src/painting/shape_decoration.dart");
  dart.setFieldSignature(shape_decoration.ShapeDecoration, () => ({
    __proto__: dart.getFields(shape_decoration.ShapeDecoration.__proto__),
    color: dart.finalFieldType(ui.Color),
    gradient: dart.finalFieldType(gradient.Gradient),
    image: dart.finalFieldType(decoration_image.DecorationImage),
    shadows: dart.finalFieldType(core.List$(box_shadow.BoxShadow)),
    shape: dart.finalFieldType(borders$.ShapeBorder)
  }));
  dart.defineExtensionMethods(shape_decoration.ShapeDecoration, ['_equals']);
  dart.defineExtensionAccessors(shape_decoration.ShapeDecoration, ['hashCode']);
  var _lastRect = dart.privateName(shape_decoration, "_lastRect");
  var _lastTextDirection = dart.privateName(shape_decoration, "_lastTextDirection");
  var _outerPath = dart.privateName(shape_decoration, "_outerPath");
  var _innerPath = dart.privateName(shape_decoration, "_innerPath");
  var _interiorPaint = dart.privateName(shape_decoration, "_interiorPaint");
  var _shadowCount = dart.privateName(shape_decoration, "_shadowCount");
  var _shadowPaths = dart.privateName(shape_decoration, "_shadowPaths");
  var _shadowPaints = dart.privateName(shape_decoration, "_shadowPaints");
  var _imagePainter = dart.privateName(shape_decoration, "_imagePainter");
  var _decoration$ = dart.privateName(shape_decoration, "_decoration");
  var _precache = dart.privateName(shape_decoration, "_precache");
  var _paintShadows = dart.privateName(shape_decoration, "_paintShadows");
  var _paintInterior = dart.privateName(shape_decoration, "_paintInterior");
  var _paintImage = dart.privateName(shape_decoration, "_paintImage");
  var onChanged$ = dart.privateName(decoration, "BoxPainter.onChanged");
  decoration.BoxPainter = class BoxPainter extends core.Object {
    get onChanged() {
      return this[onChanged$];
    }
    set onChanged(value) {
      super.onChanged = value;
    }
    dispose() {
    }
  };
  (decoration.BoxPainter.new = function(onChanged = null) {
    this[onChanged$] = onChanged;
    ;
  }).prototype = decoration.BoxPainter.prototype;
  dart.addTypeTests(decoration.BoxPainter);
  dart.setMethodSignature(decoration.BoxPainter, () => ({
    __proto__: dart.getMethods(decoration.BoxPainter.__proto__),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(decoration.BoxPainter, "package:flutter/src/painting/decoration.dart");
  dart.setFieldSignature(decoration.BoxPainter, () => ({
    __proto__: dart.getFields(decoration.BoxPainter.__proto__),
    onChanged: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  shape_decoration._ShapeDecorationPainter = class _ShapeDecorationPainter extends decoration.BoxPainter {
    [_precache](rect, textDirection) {
      if (!(rect != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/shape_decoration.dart", 314, 12, "rect != null");
      if (dart.equals(rect, this[_lastRect]) && dart.equals(textDirection, this[_lastTextDirection])) return;
      if (this[_interiorPaint] == null && (this[_decoration$].color != null || this[_decoration$].gradient != null)) {
        this[_interiorPaint] = ui.Paint.new();
        if (this[_decoration$].color != null) this[_interiorPaint].color = this[_decoration$].color;
      }
      if (this[_decoration$].gradient != null) this[_interiorPaint].shader = this[_decoration$].gradient.createShader(rect);
      if (this[_decoration$].shadows != null) {
        if (this[_shadowCount] == null) {
          this[_shadowCount] = this[_decoration$].shadows[$length];
          this[_shadowPaths] = ListOfPath().new(this[_shadowCount]);
          this[_shadowPaints] = ListOfPaint().new(this[_shadowCount]);
          for (let index = 0; index < dart.notNull(this[_shadowCount]); index = index + 1)
            this[_shadowPaints][$_set](index, this[_decoration$].shadows[$_get](index).toPaint());
        }
        for (let index = 0; index < dart.notNull(this[_shadowCount]); index = index + 1) {
          let shadow = this[_decoration$].shadows[$_get](index);
          this[_shadowPaths][$_set](index, this[_decoration$].shape.getOuterPath(rect.shift(shadow.offset).inflate(shadow.spreadRadius), {textDirection: textDirection}));
        }
      }
      if (this[_interiorPaint] != null || this[_shadowCount] != null) this[_outerPath] = this[_decoration$].shape.getOuterPath(rect, {textDirection: textDirection});
      if (this[_decoration$].image != null) this[_innerPath] = this[_decoration$].shape.getInnerPath(rect, {textDirection: textDirection});
      this[_lastRect] = rect;
      this[_lastTextDirection] = textDirection;
    }
    [_paintShadows](canvas) {
      if (this[_shadowCount] != null) {
        for (let index = 0; index < dart.notNull(this[_shadowCount]); index = index + 1)
          canvas.drawPath(this[_shadowPaths][$_get](index), this[_shadowPaints][$_get](index));
      }
    }
    [_paintInterior](canvas) {
      if (this[_interiorPaint] != null) canvas.drawPath(this[_outerPath], this[_interiorPaint]);
    }
    [_paintImage](canvas, configuration) {
      if (this[_decoration$].image == null) return;
      this[_imagePainter] == null ? this[_imagePainter] = this[_decoration$].image.createPainter(this.onChanged) : null;
      this[_imagePainter].paint(canvas, this[_lastRect], this[_innerPath], configuration);
    }
    dispose() {
      let t0;
      t0 = this[_imagePainter];
      t0 == null ? null : t0.dispose();
      super.dispose();
    }
    paint(canvas, offset, configuration) {
      if (!(configuration != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/shape_decoration.dart", 379, 12, "configuration != null");
      if (!(configuration.size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/shape_decoration.dart", 380, 12, "configuration.size != null");
      let rect = offset['&'](configuration.size);
      let textDirection = configuration.textDirection;
      this[_precache](rect, textDirection);
      this[_paintShadows](canvas);
      this[_paintInterior](canvas);
      this[_paintImage](canvas, configuration);
      this[_decoration$].shape.paint(canvas, rect, {textDirection: textDirection});
    }
  };
  (shape_decoration._ShapeDecorationPainter.new = function(_decoration, onChanged) {
    this[_lastRect] = null;
    this[_lastTextDirection] = null;
    this[_outerPath] = null;
    this[_innerPath] = null;
    this[_interiorPaint] = null;
    this[_shadowCount] = null;
    this[_shadowPaths] = null;
    this[_shadowPaints] = null;
    this[_imagePainter] = null;
    this[_decoration$] = _decoration;
    if (!(_decoration != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/shape_decoration.dart", 299, 14, "_decoration != null");
    shape_decoration._ShapeDecorationPainter.__proto__.new.call(this, onChanged);
    ;
  }).prototype = shape_decoration._ShapeDecorationPainter.prototype;
  dart.addTypeTests(shape_decoration._ShapeDecorationPainter);
  dart.setMethodSignature(shape_decoration._ShapeDecorationPainter, () => ({
    __proto__: dart.getMethods(shape_decoration._ShapeDecorationPainter.__proto__),
    [_precache]: dart.fnType(dart.void, [ui.Rect, ui.TextDirection]),
    [_paintShadows]: dart.fnType(dart.void, [ui.Canvas]),
    [_paintInterior]: dart.fnType(dart.void, [ui.Canvas]),
    [_paintImage]: dart.fnType(dart.void, [ui.Canvas, image_provider.ImageConfiguration]),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Offset, image_provider.ImageConfiguration])
  }));
  dart.setLibraryUri(shape_decoration._ShapeDecorationPainter, "package:flutter/src/painting/shape_decoration.dart");
  dart.setFieldSignature(shape_decoration._ShapeDecorationPainter, () => ({
    __proto__: dart.getFields(shape_decoration._ShapeDecorationPainter.__proto__),
    [_decoration$]: dart.finalFieldType(shape_decoration.ShapeDecoration),
    [_lastRect]: dart.fieldType(ui.Rect),
    [_lastTextDirection]: dart.fieldType(ui.TextDirection),
    [_outerPath]: dart.fieldType(ui.Path),
    [_innerPath]: dart.fieldType(ui.Path),
    [_interiorPaint]: dart.fieldType(ui.Paint),
    [_shadowCount]: dart.fieldType(core.int),
    [_shadowPaths]: dart.fieldType(core.List$(ui.Path)),
    [_shadowPaints]: dart.fieldType(core.List$(ui.Paint)),
    [_imagePainter]: dart.fieldType(decoration_image.DecorationImagePainter)
  }));
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var C12;
  var BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  var BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  var BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  var BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  var C11;
  var C13;
  borders$.ShapeBorder = class ShapeBorder extends core.Object {
    add(other, opts) {
      let reversed = opts && 'reversed' in opts ? opts.reversed : false;
      return null;
    }
    ['+'](other) {
      let t0, t0$;
      t0$ = (t0 = this.add(other), t0 == null ? other.add(this, {reversed: true}) : t0);
      return t0$ == null ? new borders$._CompoundBorder.new(JSArrayOfShapeBorder().of([other, this])) : t0$;
    }
    lerpFrom(a, t) {
      if (a == null) return this.scale(t);
      return null;
    }
    lerpTo(b, t) {
      if (b == null) return this.scale(1.0 - dart.notNull(t));
      return null;
    }
    static lerp(a, b, t) {
      let t0;
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/borders.dart", 430, 12, "t != null");
      let result = null;
      if (b != null) result = b.lerpFrom(a, t);
      if (result == null && a != null) result = a.lerpTo(b, t);
      t0 = result;
      return t0 == null ? dart.notNull(t) < 0.5 ? a : b : t0;
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "ShapeBorder")) + "()";
    }
  };
  (borders$.ShapeBorder.new = function() {
    ;
  }).prototype = borders$.ShapeBorder.prototype;
  dart.addTypeTests(borders$.ShapeBorder);
  dart.setMethodSignature(borders$.ShapeBorder, () => ({
    __proto__: dart.getMethods(borders$.ShapeBorder.__proto__),
    add: dart.fnType(borders$.ShapeBorder, [borders$.ShapeBorder], {reversed: core.bool}, {}),
    '+': dart.fnType(borders$.ShapeBorder, [borders$.ShapeBorder]),
    lerpFrom: dart.fnType(borders$.ShapeBorder, [borders$.ShapeBorder, core.double]),
    lerpTo: dart.fnType(borders$.ShapeBorder, [borders$.ShapeBorder, core.double])
  }));
  dart.setLibraryUri(borders$.ShapeBorder, "package:flutter/src/painting/borders.dart");
  dart.defineExtensionMethods(borders$.ShapeBorder, ['toString']);
  var side$ = dart.privateName(rounded_rectangle_border, "RoundedRectangleBorder.side");
  var borderRadius$ = dart.privateName(rounded_rectangle_border, "RoundedRectangleBorder.borderRadius");
  rounded_rectangle_border.RoundedRectangleBorder = class RoundedRectangleBorder extends borders$.ShapeBorder {
    get side() {
      return this[side$];
    }
    set side(value) {
      super.side = value;
    }
    get borderRadius() {
      return this[borderRadius$];
    }
    set borderRadius(value) {
      super.borderRadius = value;
    }
    get dimensions() {
      return new edge_insets.EdgeInsets.all(this.side.width);
    }
    scale(t) {
      return new rounded_rectangle_border.RoundedRectangleBorder.new({side: this.side.scale(t), borderRadius: this.borderRadius['*'](t)});
    }
    lerpFrom(a, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/rounded_rectangle_border.dart", 58, 12, "t != null");
      if (rounded_rectangle_border.RoundedRectangleBorder.is(a)) {
        return new rounded_rectangle_border.RoundedRectangleBorder.new({side: borders$.BorderSide.lerp(a.side, this.side, t), borderRadius: border_radius.BorderRadiusGeometry.lerp(a.borderRadius, this.borderRadius, t)});
      }
      if (circle_border.CircleBorder.is(a)) {
        return new rounded_rectangle_border._RoundedRectangleToCircleBorder.new({side: borders$.BorderSide.lerp(a.side, this.side, t), borderRadius: this.borderRadius, circleness: 1.0 - dart.notNull(t)});
      }
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/rounded_rectangle_border.dart", 77, 12, "t != null");
      if (rounded_rectangle_border.RoundedRectangleBorder.is(b)) {
        return new rounded_rectangle_border.RoundedRectangleBorder.new({side: borders$.BorderSide.lerp(this.side, b.side, t), borderRadius: border_radius.BorderRadiusGeometry.lerp(this.borderRadius, b.borderRadius, t)});
      }
      if (circle_border.CircleBorder.is(b)) {
        return new rounded_rectangle_border._RoundedRectangleToCircleBorder.new({side: borders$.BorderSide.lerp(this.side, b.side, t), borderRadius: this.borderRadius, circleness: t});
      }
      return super.lerpTo(b, t);
    }
    getInnerPath(rect, opts) {
      let t0;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t0 = ui.Path.new();
      t0.addRRect(this.borderRadius.resolve(textDirection).toRRect(rect).deflate(this.side.width));
      return t0;
    }
    getOuterPath(rect, opts) {
      let t0;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t0 = ui.Path.new();
      t0.addRRect(this.borderRadius.resolve(textDirection).toRRect(rect));
      return t0;
    }
    paint(canvas, rect, opts) {
      let t0;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      switch (this.side.style) {
        case C6 || CT.C6:
        {
          break;
        }
        case C13 || CT.C13:
        {
          let width = this.side.width;
          if (width === 0.0) {
            canvas.drawRRect(this.borderRadius.resolve(textDirection).toRRect(rect), this.side.toPaint());
          } else {
            let outer = this.borderRadius.resolve(textDirection).toRRect(rect);
            let inner = outer.deflate(width);
            let paint = (t0 = ui.Paint.new(), t0.color = this.side.color, t0);
            canvas.drawDRRect(outer, inner, paint);
          }
        }
      }
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return rounded_rectangle_border.RoundedRectangleBorder.is(other) && dart.equals(other.side, this.side) && dart.equals(other.borderRadius, this.borderRadius);
    }
    get hashCode() {
      return ui.hashValues(this.side, this.borderRadius);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "RoundedRectangleBorder")) + "(" + dart.str(this.side) + ", " + dart.str(this.borderRadius) + ")";
    }
  };
  (rounded_rectangle_border.RoundedRectangleBorder.new = function(opts) {
    let side = opts && 'side' in opts ? opts.side : C5 || CT.C5;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C11 || CT.C11;
    this[side$] = side;
    this[borderRadius$] = borderRadius;
    if (!(side != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/rounded_rectangle_border.dart", 34, 15, "side != null");
    if (!(borderRadius != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/rounded_rectangle_border.dart", 35, 15, "borderRadius != null");
    rounded_rectangle_border.RoundedRectangleBorder.__proto__.new.call(this);
    ;
  }).prototype = rounded_rectangle_border.RoundedRectangleBorder.prototype;
  dart.addTypeTests(rounded_rectangle_border.RoundedRectangleBorder);
  dart.setMethodSignature(rounded_rectangle_border.RoundedRectangleBorder, () => ({
    __proto__: dart.getMethods(rounded_rectangle_border.RoundedRectangleBorder.__proto__),
    scale: dart.fnType(borders$.ShapeBorder, [core.double]),
    getInnerPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: ui.TextDirection}, {}),
    getOuterPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: ui.TextDirection}, {}),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {textDirection: ui.TextDirection}, {}),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(rounded_rectangle_border.RoundedRectangleBorder, () => ({
    __proto__: dart.getGetters(rounded_rectangle_border.RoundedRectangleBorder.__proto__),
    dimensions: edge_insets.EdgeInsetsGeometry
  }));
  dart.setLibraryUri(rounded_rectangle_border.RoundedRectangleBorder, "package:flutter/src/painting/rounded_rectangle_border.dart");
  dart.setFieldSignature(rounded_rectangle_border.RoundedRectangleBorder, () => ({
    __proto__: dart.getFields(rounded_rectangle_border.RoundedRectangleBorder.__proto__),
    side: dart.finalFieldType(borders$.BorderSide),
    borderRadius: dart.finalFieldType(border_radius.BorderRadiusGeometry)
  }));
  dart.defineExtensionMethods(rounded_rectangle_border.RoundedRectangleBorder, ['_equals', 'toString']);
  dart.defineExtensionAccessors(rounded_rectangle_border.RoundedRectangleBorder, ['hashCode']);
  var _adjustRect = dart.privateName(rounded_rectangle_border, "_adjustRect");
  var _adjustBorderRadius = dart.privateName(rounded_rectangle_border, "_adjustBorderRadius");
  var side$0 = dart.privateName(rounded_rectangle_border, "_RoundedRectangleToCircleBorder.side");
  var borderRadius$0 = dart.privateName(rounded_rectangle_border, "_RoundedRectangleToCircleBorder.borderRadius");
  var circleness$ = dart.privateName(rounded_rectangle_border, "_RoundedRectangleToCircleBorder.circleness");
  rounded_rectangle_border._RoundedRectangleToCircleBorder = class _RoundedRectangleToCircleBorder extends borders$.ShapeBorder {
    get side() {
      return this[side$0];
    }
    set side(value) {
      super.side = value;
    }
    get borderRadius() {
      return this[borderRadius$0];
    }
    set borderRadius(value) {
      super.borderRadius = value;
    }
    get circleness() {
      return this[circleness$];
    }
    set circleness(value) {
      super.circleness = value;
    }
    get dimensions() {
      return new edge_insets.EdgeInsets.all(this.side.width);
    }
    scale(t) {
      return new rounded_rectangle_border._RoundedRectangleToCircleBorder.new({side: this.side.scale(t), borderRadius: this.borderRadius['*'](t), circleness: t});
    }
    lerpFrom(a, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/rounded_rectangle_border.dart", 174, 12, "t != null");
      if (rounded_rectangle_border.RoundedRectangleBorder.is(a)) {
        return new rounded_rectangle_border._RoundedRectangleToCircleBorder.new({side: borders$.BorderSide.lerp(a.side, this.side, t), borderRadius: border_radius.BorderRadiusGeometry.lerp(a.borderRadius, this.borderRadius, t), circleness: dart.notNull(this.circleness) * dart.notNull(t)});
      }
      if (circle_border.CircleBorder.is(a)) {
        return new rounded_rectangle_border._RoundedRectangleToCircleBorder.new({side: borders$.BorderSide.lerp(a.side, this.side, t), borderRadius: this.borderRadius, circleness: dart.notNull(this.circleness) + (1.0 - dart.notNull(this.circleness)) * (1.0 - dart.notNull(t))});
      }
      if (rounded_rectangle_border._RoundedRectangleToCircleBorder.is(a)) {
        return new rounded_rectangle_border._RoundedRectangleToCircleBorder.new({side: borders$.BorderSide.lerp(a.side, this.side, t), borderRadius: border_radius.BorderRadiusGeometry.lerp(a.borderRadius, this.borderRadius, t), circleness: ui.lerpDouble(a.circleness, this.circleness, t)});
      }
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (rounded_rectangle_border.RoundedRectangleBorder.is(b)) {
        return new rounded_rectangle_border._RoundedRectangleToCircleBorder.new({side: borders$.BorderSide.lerp(this.side, b.side, t), borderRadius: border_radius.BorderRadiusGeometry.lerp(this.borderRadius, b.borderRadius, t), circleness: dart.notNull(this.circleness) * (1.0 - dart.notNull(t))});
      }
      if (circle_border.CircleBorder.is(b)) {
        return new rounded_rectangle_border._RoundedRectangleToCircleBorder.new({side: borders$.BorderSide.lerp(this.side, b.side, t), borderRadius: this.borderRadius, circleness: dart.notNull(this.circleness) + (1.0 - dart.notNull(this.circleness)) * dart.notNull(t)});
      }
      if (rounded_rectangle_border._RoundedRectangleToCircleBorder.is(b)) {
        return new rounded_rectangle_border._RoundedRectangleToCircleBorder.new({side: borders$.BorderSide.lerp(this.side, b.side, t), borderRadius: border_radius.BorderRadiusGeometry.lerp(this.borderRadius, b.borderRadius, t), circleness: ui.lerpDouble(this.circleness, b.circleness, t)});
      }
      return super.lerpTo(b, t);
    }
    [_adjustRect](rect) {
      if (this.circleness === 0.0 || rect.width == rect.height) return rect;
      if (dart.notNull(rect.width) < dart.notNull(rect.height)) {
        let delta = dart.notNull(this.circleness) * (dart.notNull(rect.height) - dart.notNull(rect.width)) / 2.0;
        return new ui.Rect.fromLTRB(rect.left, dart.notNull(rect.top) + delta, rect.right, dart.notNull(rect.bottom) - delta);
      } else {
        let delta = dart.notNull(this.circleness) * (dart.notNull(rect.width) - dart.notNull(rect.height)) / 2.0;
        return new ui.Rect.fromLTRB(dart.notNull(rect.left) + delta, rect.top, dart.notNull(rect.right) - delta, rect.bottom);
      }
    }
    [_adjustBorderRadius](rect, textDirection) {
      let resolvedRadius = this.borderRadius.resolve(textDirection);
      if (this.circleness === 0.0) return resolvedRadius;
      return border_radius.BorderRadius.lerp(resolvedRadius, new border_radius.BorderRadius.circular(dart.notNull(rect.shortestSide) / 2.0), this.circleness);
    }
    getInnerPath(rect, opts) {
      let t0;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t0 = ui.Path.new();
      t0.addRRect(this[_adjustBorderRadius](rect, textDirection).toRRect(this[_adjustRect](rect)).deflate(this.side.width));
      return t0;
    }
    getOuterPath(rect, opts) {
      let t0;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t0 = ui.Path.new();
      t0.addRRect(this[_adjustBorderRadius](rect, textDirection).toRRect(this[_adjustRect](rect)));
      return t0;
    }
    paint(canvas, rect, opts) {
      let t0;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      switch (this.side.style) {
        case C6 || CT.C6:
        {
          break;
        }
        case C13 || CT.C13:
        {
          let width = this.side.width;
          if (width === 0.0) {
            canvas.drawRRect(this[_adjustBorderRadius](rect, textDirection).toRRect(this[_adjustRect](rect)), this.side.toPaint());
          } else {
            let outer = this[_adjustBorderRadius](rect, textDirection).toRRect(this[_adjustRect](rect));
            let inner = outer.deflate(width);
            let paint = (t0 = ui.Paint.new(), t0.color = this.side.color, t0);
            canvas.drawDRRect(outer, inner, paint);
          }
        }
      }
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return rounded_rectangle_border._RoundedRectangleToCircleBorder.is(other) && dart.equals(other.side, this.side) && dart.equals(other.borderRadius, this.borderRadius) && other.circleness == this.circleness;
    }
    get hashCode() {
      return ui.hashValues(this.side, this.borderRadius, this.circleness);
    }
    toString() {
      return "RoundedRectangleBorder(" + dart.str(this.side) + ", " + dart.str(this.borderRadius) + ", " + (dart.notNull(this.circleness) * 100)[$toStringAsFixed](1) + "% of the way to being a CircleBorder)";
    }
  };
  (rounded_rectangle_border._RoundedRectangleToCircleBorder.new = function(opts) {
    let side = opts && 'side' in opts ? opts.side : C5 || CT.C5;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C11 || CT.C11;
    let circleness = opts && 'circleness' in opts ? opts.circleness : null;
    this[side$0] = side;
    this[borderRadius$0] = borderRadius;
    this[circleness$] = circleness;
    if (!(side != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/rounded_rectangle_border.dart", 148, 15, "side != null");
    if (!(borderRadius != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/rounded_rectangle_border.dart", 149, 15, "borderRadius != null");
    if (!(circleness != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/rounded_rectangle_border.dart", 150, 15, "circleness != null");
    rounded_rectangle_border._RoundedRectangleToCircleBorder.__proto__.new.call(this);
    ;
  }).prototype = rounded_rectangle_border._RoundedRectangleToCircleBorder.prototype;
  dart.addTypeTests(rounded_rectangle_border._RoundedRectangleToCircleBorder);
  dart.setMethodSignature(rounded_rectangle_border._RoundedRectangleToCircleBorder, () => ({
    __proto__: dart.getMethods(rounded_rectangle_border._RoundedRectangleToCircleBorder.__proto__),
    scale: dart.fnType(borders$.ShapeBorder, [core.double]),
    [_adjustRect]: dart.fnType(ui.Rect, [ui.Rect]),
    [_adjustBorderRadius]: dart.fnType(border_radius.BorderRadius, [ui.Rect, ui.TextDirection]),
    getInnerPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: ui.TextDirection}, {}),
    getOuterPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: ui.TextDirection}, {}),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {textDirection: ui.TextDirection}, {}),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(rounded_rectangle_border._RoundedRectangleToCircleBorder, () => ({
    __proto__: dart.getGetters(rounded_rectangle_border._RoundedRectangleToCircleBorder.__proto__),
    dimensions: edge_insets.EdgeInsetsGeometry
  }));
  dart.setLibraryUri(rounded_rectangle_border._RoundedRectangleToCircleBorder, "package:flutter/src/painting/rounded_rectangle_border.dart");
  dart.setFieldSignature(rounded_rectangle_border._RoundedRectangleToCircleBorder, () => ({
    __proto__: dart.getFields(rounded_rectangle_border._RoundedRectangleToCircleBorder.__proto__),
    side: dart.finalFieldType(borders$.BorderSide),
    borderRadius: dart.finalFieldType(border_radius.BorderRadiusGeometry),
    circleness: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(rounded_rectangle_border._RoundedRectangleToCircleBorder, ['_equals', 'toString']);
  dart.defineExtensionAccessors(rounded_rectangle_border._RoundedRectangleToCircleBorder, ['hashCode']);
  var _left = dart.privateName(edge_insets, "_left");
  var _right = dart.privateName(edge_insets, "_right");
  var _start = dart.privateName(edge_insets, "_start");
  var _end = dart.privateName(edge_insets, "_end");
  var _top = dart.privateName(edge_insets, "_top");
  var _bottom = dart.privateName(edge_insets, "_bottom");
  var _name$1 = dart.privateName(basic_types, "_name");
  var C14;
  var C15;
  var _MixedEdgeInsets__bottom = dart.privateName(edge_insets, "_MixedEdgeInsets._bottom");
  var _MixedEdgeInsets__top = dart.privateName(edge_insets, "_MixedEdgeInsets._top");
  var _MixedEdgeInsets__end = dart.privateName(edge_insets, "_MixedEdgeInsets._end");
  var _MixedEdgeInsets__start = dart.privateName(edge_insets, "_MixedEdgeInsets._start");
  var _MixedEdgeInsets__right = dart.privateName(edge_insets, "_MixedEdgeInsets._right");
  var _MixedEdgeInsets__left = dart.privateName(edge_insets, "_MixedEdgeInsets._left");
  var C16;
  edge_insets.EdgeInsetsGeometry = class EdgeInsetsGeometry extends core.Object {
    get isNonNegative() {
      return dart.notNull(this[_left]) >= 0.0 && dart.notNull(this[_right]) >= 0.0 && dart.notNull(this[_start]) >= 0.0 && dart.notNull(this[_end]) >= 0.0 && dart.notNull(this[_top]) >= 0.0 && dart.notNull(this[_bottom]) >= 0.0;
    }
    get horizontal() {
      return dart.notNull(this[_left]) + dart.notNull(this[_right]) + dart.notNull(this[_start]) + dart.notNull(this[_end]);
    }
    get vertical() {
      return dart.notNull(this[_top]) + dart.notNull(this[_bottom]);
    }
    along(axis) {
      if (!(axis != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/edge_insets.dart", 67, 12, "axis != null");
      switch (axis) {
        case C14 || CT.C14:
        {
          return this.horizontal;
        }
        case C15 || CT.C15:
        {
          return this.vertical;
        }
      }
      return null;
    }
    get collapsedSize() {
      return new ui.Size.new(this.horizontal, this.vertical);
    }
    get flipped() {
      return new edge_insets._MixedEdgeInsets.fromLRSETB(this[_right], this[_left], this[_end], this[_start], this[_bottom], this[_top]);
    }
    inflateSize(size) {
      return new ui.Size.new(dart.notNull(size.width) + dart.notNull(this.horizontal), dart.notNull(size.height) + dart.notNull(this.vertical));
    }
    deflateSize(size) {
      return new ui.Size.new(dart.notNull(size.width) - dart.notNull(this.horizontal), dart.notNull(size.height) - dart.notNull(this.vertical));
    }
    subtract(other) {
      return new edge_insets._MixedEdgeInsets.fromLRSETB(dart.notNull(this[_left]) - dart.notNull(other[_left]), dart.notNull(this[_right]) - dart.notNull(other[_right]), dart.notNull(this[_start]) - dart.notNull(other[_start]), dart.notNull(this[_end]) - dart.notNull(other[_end]), dart.notNull(this[_top]) - dart.notNull(other[_top]), dart.notNull(this[_bottom]) - dart.notNull(other[_bottom]));
    }
    add(other) {
      return new edge_insets._MixedEdgeInsets.fromLRSETB(dart.notNull(this[_left]) + dart.notNull(other[_left]), dart.notNull(this[_right]) + dart.notNull(other[_right]), dart.notNull(this[_start]) + dart.notNull(other[_start]), dart.notNull(this[_end]) + dart.notNull(other[_end]), dart.notNull(this[_top]) + dart.notNull(other[_top]), dart.notNull(this[_bottom]) + dart.notNull(other[_bottom]));
    }
    clamp(min, max) {
      return new edge_insets._MixedEdgeInsets.fromLRSETB(this[_left][$clamp](min[_left], max[_left]), this[_right][$clamp](min[_right], max[_right]), this[_start][$clamp](min[_start], max[_start]), this[_end][$clamp](min[_end], max[_end]), this[_top][$clamp](min[_top], max[_top]), this[_bottom][$clamp](min[_bottom], max[_bottom]));
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/edge_insets.dart", 220, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return b['*'](t);
      if (b == null) return a['*'](1.0 - dart.notNull(t));
      if (edge_insets.EdgeInsets.is(a) && edge_insets.EdgeInsets.is(b)) return edge_insets.EdgeInsets.lerp(a, b, t);
      if (edge_insets.EdgeInsetsDirectional.is(a) && edge_insets.EdgeInsetsDirectional.is(b)) return edge_insets.EdgeInsetsDirectional.lerp(a, b, t);
      return new edge_insets._MixedEdgeInsets.fromLRSETB(ui.lerpDouble(a[_left], b[_left], t), ui.lerpDouble(a[_right], b[_right], t), ui.lerpDouble(a[_start], b[_start], t), ui.lerpDouble(a[_end], b[_end], t), ui.lerpDouble(a[_top], b[_top], t), ui.lerpDouble(a[_bottom], b[_bottom], t));
    }
    toString() {
      if (this[_start] === 0.0 && this[_end] === 0.0) {
        if (this[_left] === 0.0 && this[_right] === 0.0 && this[_top] === 0.0 && this[_bottom] === 0.0) return "EdgeInsets.zero";
        if (this[_left] == this[_right] && this[_right] == this[_top] && this[_top] == this[_bottom]) return "EdgeInsets.all(" + this[_left][$toStringAsFixed](1) + ")";
        return "EdgeInsets(" + this[_left][$toStringAsFixed](1) + ", " + this[_top][$toStringAsFixed](1) + ", " + this[_right][$toStringAsFixed](1) + ", " + this[_bottom][$toStringAsFixed](1) + ")";
      }
      if (this[_left] === 0.0 && this[_right] === 0.0) {
        return "EdgeInsetsDirectional(" + this[_start][$toStringAsFixed](1) + ", " + this[_top][$toStringAsFixed](1) + ", " + this[_end][$toStringAsFixed](1) + ", " + this[_bottom][$toStringAsFixed](1) + ")";
      }
      return "EdgeInsets(" + this[_left][$toStringAsFixed](1) + ", " + this[_top][$toStringAsFixed](1) + ", " + this[_right][$toStringAsFixed](1) + ", " + this[_bottom][$toStringAsFixed](1) + ")" + " + " + "EdgeInsetsDirectional(" + this[_start][$toStringAsFixed](1) + ", " + "0.0, " + this[_end][$toStringAsFixed](1) + ", " + "0.0)";
    }
    _equals(other) {
      if (other == null) return false;
      return edge_insets.EdgeInsetsGeometry.is(other) && other[_left] == this[_left] && other[_right] == this[_right] && other[_start] == this[_start] && other[_end] == this[_end] && other[_top] == this[_top] && other[_bottom] == this[_bottom];
    }
    get hashCode() {
      return ui.hashValues(this[_left], this[_right], this[_start], this[_end], this[_top], this[_bottom]);
    }
  };
  (edge_insets.EdgeInsetsGeometry.new = function() {
    ;
  }).prototype = edge_insets.EdgeInsetsGeometry.prototype;
  dart.addTypeTests(edge_insets.EdgeInsetsGeometry);
  dart.setMethodSignature(edge_insets.EdgeInsetsGeometry, () => ({
    __proto__: dart.getMethods(edge_insets.EdgeInsetsGeometry.__proto__),
    along: dart.fnType(core.double, [basic_types.Axis]),
    inflateSize: dart.fnType(ui.Size, [ui.Size]),
    deflateSize: dart.fnType(ui.Size, [ui.Size]),
    subtract: dart.fnType(edge_insets.EdgeInsetsGeometry, [edge_insets.EdgeInsetsGeometry]),
    add: dart.fnType(edge_insets.EdgeInsetsGeometry, [edge_insets.EdgeInsetsGeometry]),
    clamp: dart.fnType(edge_insets.EdgeInsetsGeometry, [edge_insets.EdgeInsetsGeometry, edge_insets.EdgeInsetsGeometry]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(edge_insets.EdgeInsetsGeometry, () => ({
    __proto__: dart.getGetters(edge_insets.EdgeInsetsGeometry.__proto__),
    isNonNegative: core.bool,
    horizontal: core.double,
    vertical: core.double,
    collapsedSize: ui.Size,
    flipped: edge_insets.EdgeInsetsGeometry
  }));
  dart.setLibraryUri(edge_insets.EdgeInsetsGeometry, "package:flutter/src/painting/edge_insets.dart");
  dart.defineExtensionMethods(edge_insets.EdgeInsetsGeometry, ['toString', '_equals']);
  dart.defineExtensionAccessors(edge_insets.EdgeInsetsGeometry, ['hashCode']);
  dart.defineLazy(edge_insets.EdgeInsetsGeometry, {
    /*edge_insets.EdgeInsetsGeometry.infinity*/get infinity() {
      return C16 || CT.C16;
    }
  });
  var left$ = dart.privateName(edge_insets, "EdgeInsets.left");
  var top$ = dart.privateName(edge_insets, "EdgeInsets.top");
  var right$ = dart.privateName(edge_insets, "EdgeInsets.right");
  var bottom$ = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var C17;
  edge_insets.EdgeInsets = class EdgeInsets extends edge_insets.EdgeInsetsGeometry {
    get left() {
      return this[left$];
    }
    set left(value) {
      super.left = value;
    }
    get top() {
      return this[top$];
    }
    set top(value) {
      super.top = value;
    }
    get right() {
      return this[right$];
    }
    set right(value) {
      super.right = value;
    }
    get bottom() {
      return this[bottom$];
    }
    set bottom(value) {
      super.bottom = value;
    }
    get [_left]() {
      return this.left;
    }
    get [_top]() {
      return this.top;
    }
    get [_right]() {
      return this.right;
    }
    get [_bottom]() {
      return this.bottom;
    }
    get [_start]() {
      return 0.0;
    }
    get [_end]() {
      return 0.0;
    }
    get topLeft() {
      return new ui.Offset.new(this.left, this.top);
    }
    get topRight() {
      return new ui.Offset.new(-dart.notNull(this.right), this.top);
    }
    get bottomLeft() {
      return new ui.Offset.new(this.left, -dart.notNull(this.bottom));
    }
    get bottomRight() {
      return new ui.Offset.new(-dart.notNull(this.right), -dart.notNull(this.bottom));
    }
    get flipped() {
      return new edge_insets.EdgeInsets.fromLTRB(this.right, this.bottom, this.left, this.top);
    }
    inflateRect(rect) {
      return new ui.Rect.fromLTRB(dart.notNull(rect.left) - dart.notNull(this.left), dart.notNull(rect.top) - dart.notNull(this.top), dart.notNull(rect.right) + dart.notNull(this.right), dart.notNull(rect.bottom) + dart.notNull(this.bottom));
    }
    deflateRect(rect) {
      return new ui.Rect.fromLTRB(dart.notNull(rect.left) + dart.notNull(this.left), dart.notNull(rect.top) + dart.notNull(this.top), dart.notNull(rect.right) - dart.notNull(this.right), dart.notNull(rect.bottom) - dart.notNull(this.bottom));
    }
    subtract(other) {
      if (edge_insets.EdgeInsets.is(other)) return this['-'](other);
      return super.subtract(other);
    }
    add(other) {
      if (edge_insets.EdgeInsets.is(other)) return this['+'](other);
      return super.add(other);
    }
    ['-'](other) {
      return new edge_insets.EdgeInsets.fromLTRB(dart.notNull(this.left) - dart.notNull(other.left), dart.notNull(this.top) - dart.notNull(other.top), dart.notNull(this.right) - dart.notNull(other.right), dart.notNull(this.bottom) - dart.notNull(other.bottom));
    }
    ['+'](other) {
      return new edge_insets.EdgeInsets.fromLTRB(dart.notNull(this.left) + dart.notNull(other.left), dart.notNull(this.top) + dart.notNull(other.top), dart.notNull(this.right) + dart.notNull(other.right), dart.notNull(this.bottom) + dart.notNull(other.bottom));
    }
    _negate() {
      return new edge_insets.EdgeInsets.fromLTRB(-dart.notNull(this.left), -dart.notNull(this.top), -dart.notNull(this.right), -dart.notNull(this.bottom));
    }
    ['*'](other) {
      return new edge_insets.EdgeInsets.fromLTRB(dart.notNull(this.left) * dart.notNull(other), dart.notNull(this.top) * dart.notNull(other), dart.notNull(this.right) * dart.notNull(other), dart.notNull(this.bottom) * dart.notNull(other));
    }
    ['/'](other) {
      return new edge_insets.EdgeInsets.fromLTRB(dart.notNull(this.left) / dart.notNull(other), dart.notNull(this.top) / dart.notNull(other), dart.notNull(this.right) / dart.notNull(other), dart.notNull(this.bottom) / dart.notNull(other));
    }
    ['~/'](other) {
      return new edge_insets.EdgeInsets.fromLTRB((dart.notNull(this.left) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this.top) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this.right) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this.bottom) / dart.notNull(other))[$truncate]()[$toDouble]());
    }
    ['%'](other) {
      return new edge_insets.EdgeInsets.fromLTRB(this.left[$modulo](other), this.top[$modulo](other), this.right[$modulo](other), this.bottom[$modulo](other));
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/edge_insets.dart", 589, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return b['*'](t);
      if (b == null) return a['*'](1.0 - dart.notNull(t));
      return new edge_insets.EdgeInsets.fromLTRB(ui.lerpDouble(a.left, b.left, t), ui.lerpDouble(a.top, b.top, t), ui.lerpDouble(a.right, b.right, t), ui.lerpDouble(a.bottom, b.bottom, t));
    }
    resolve(direction) {
      return this;
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1;
      let left = opts && 'left' in opts ? opts.left : null;
      let top = opts && 'top' in opts ? opts.top : null;
      let right = opts && 'right' in opts ? opts.right : null;
      let bottom = opts && 'bottom' in opts ? opts.bottom : null;
      return new edge_insets.EdgeInsets.only({left: (t0 = left, t0 == null ? this.left : t0), top: (t0$ = top, t0$ == null ? this.top : t0$), right: (t0$0 = right, t0$0 == null ? this.right : t0$0), bottom: (t0$1 = bottom, t0$1 == null ? this.bottom : t0$1)});
    }
  };
  (edge_insets.EdgeInsets.fromLTRB = function(left, top, right, bottom) {
    this[left$] = left;
    this[top$] = top;
    this[right$] = right;
    this[bottom$] = bottom;
    edge_insets.EdgeInsets.__proto__.new.call(this);
    ;
  }).prototype = edge_insets.EdgeInsets.prototype;
  (edge_insets.EdgeInsets.all = function(value) {
    this[left$] = value;
    this[top$] = value;
    this[right$] = value;
    this[bottom$] = value;
    edge_insets.EdgeInsets.__proto__.new.call(this);
    ;
  }).prototype = edge_insets.EdgeInsets.prototype;
  (edge_insets.EdgeInsets.only = function(opts) {
    let left = opts && 'left' in opts ? opts.left : 0;
    let top = opts && 'top' in opts ? opts.top : 0;
    let right = opts && 'right' in opts ? opts.right : 0;
    let bottom = opts && 'bottom' in opts ? opts.bottom : 0;
    this[left$] = left;
    this[top$] = top;
    this[right$] = right;
    this[bottom$] = bottom;
    edge_insets.EdgeInsets.__proto__.new.call(this);
    ;
  }).prototype = edge_insets.EdgeInsets.prototype;
  (edge_insets.EdgeInsets.symmetric = function(opts) {
    let vertical = opts && 'vertical' in opts ? opts.vertical : 0;
    let horizontal = opts && 'horizontal' in opts ? opts.horizontal : 0;
    this[left$] = horizontal;
    this[top$] = vertical;
    this[right$] = horizontal;
    this[bottom$] = vertical;
    edge_insets.EdgeInsets.__proto__.new.call(this);
    ;
  }).prototype = edge_insets.EdgeInsets.prototype;
  (edge_insets.EdgeInsets.fromWindowPadding = function(padding, devicePixelRatio) {
    this[left$] = dart.notNull(padding.left) / dart.notNull(devicePixelRatio);
    this[top$] = dart.notNull(padding.top) / dart.notNull(devicePixelRatio);
    this[right$] = dart.notNull(padding.right) / dart.notNull(devicePixelRatio);
    this[bottom$] = dart.notNull(padding.bottom) / dart.notNull(devicePixelRatio);
    edge_insets.EdgeInsets.__proto__.new.call(this);
    ;
  }).prototype = edge_insets.EdgeInsets.prototype;
  dart.addTypeTests(edge_insets.EdgeInsets);
  dart.setMethodSignature(edge_insets.EdgeInsets, () => ({
    __proto__: dart.getMethods(edge_insets.EdgeInsets.__proto__),
    inflateRect: dart.fnType(ui.Rect, [ui.Rect]),
    deflateRect: dart.fnType(ui.Rect, [ui.Rect]),
    '-': dart.fnType(edge_insets.EdgeInsets, [edge_insets.EdgeInsets]),
    '+': dart.fnType(edge_insets.EdgeInsets, [edge_insets.EdgeInsets]),
    _negate: dart.fnType(edge_insets.EdgeInsets, []),
    '*': dart.fnType(edge_insets.EdgeInsets, [core.double]),
    '/': dart.fnType(edge_insets.EdgeInsets, [core.double]),
    '~/': dart.fnType(edge_insets.EdgeInsets, [core.double]),
    '%': dart.fnType(edge_insets.EdgeInsets, [core.double]),
    resolve: dart.fnType(edge_insets.EdgeInsets, [ui.TextDirection]),
    copyWith: dart.fnType(edge_insets.EdgeInsets, [], {bottom: core.double, left: core.double, right: core.double, top: core.double}, {})
  }));
  dart.setGetterSignature(edge_insets.EdgeInsets, () => ({
    __proto__: dart.getGetters(edge_insets.EdgeInsets.__proto__),
    [_left]: core.double,
    [_top]: core.double,
    [_right]: core.double,
    [_bottom]: core.double,
    [_start]: core.double,
    [_end]: core.double,
    topLeft: ui.Offset,
    topRight: ui.Offset,
    bottomLeft: ui.Offset,
    bottomRight: ui.Offset,
    flipped: edge_insets.EdgeInsets
  }));
  dart.setLibraryUri(edge_insets.EdgeInsets, "package:flutter/src/painting/edge_insets.dart");
  dart.setFieldSignature(edge_insets.EdgeInsets, () => ({
    __proto__: dart.getFields(edge_insets.EdgeInsets.__proto__),
    left: dart.finalFieldType(core.double),
    top: dart.finalFieldType(core.double),
    right: dart.finalFieldType(core.double),
    bottom: dart.finalFieldType(core.double)
  }));
  dart.defineLazy(edge_insets.EdgeInsets, {
    /*edge_insets.EdgeInsets.zero*/get zero() {
      return C17 || CT.C17;
    }
  });
  var C18;
  var C19;
  var start$ = dart.privateName(edge_insets, "EdgeInsetsDirectional.start");
  var top$0 = dart.privateName(edge_insets, "EdgeInsetsDirectional.top");
  var end$ = dart.privateName(edge_insets, "EdgeInsetsDirectional.end");
  var bottom$0 = dart.privateName(edge_insets, "EdgeInsetsDirectional.bottom");
  var C20;
  edge_insets.EdgeInsetsDirectional = class EdgeInsetsDirectional extends edge_insets.EdgeInsetsGeometry {
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get top() {
      return this[top$0];
    }
    set top(value) {
      super.top = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    get bottom() {
      return this[bottom$0];
    }
    set bottom(value) {
      super.bottom = value;
    }
    get [_start]() {
      return this.start;
    }
    get [_top]() {
      return this.top;
    }
    get [_end]() {
      return this.end;
    }
    get [_bottom]() {
      return this.bottom;
    }
    get [_left]() {
      return 0.0;
    }
    get [_right]() {
      return 0.0;
    }
    get isNonNegative() {
      return dart.notNull(this.start) >= 0.0 && dart.notNull(this.top) >= 0.0 && dart.notNull(this.end) >= 0.0 && dart.notNull(this.bottom) >= 0.0;
    }
    get flipped() {
      return new edge_insets.EdgeInsetsDirectional.fromSTEB(this.end, this.bottom, this.start, this.top);
    }
    subtract(other) {
      if (edge_insets.EdgeInsetsDirectional.is(other)) return this['-'](other);
      return super.subtract(other);
    }
    add(other) {
      if (edge_insets.EdgeInsetsDirectional.is(other)) return this['+'](other);
      return super.add(other);
    }
    ['-'](other) {
      return new edge_insets.EdgeInsetsDirectional.fromSTEB(dart.notNull(this.start) - dart.notNull(other.start), dart.notNull(this.top) - dart.notNull(other.top), dart.notNull(this.end) - dart.notNull(other.end), dart.notNull(this.bottom) - dart.notNull(other.bottom));
    }
    ['+'](other) {
      return new edge_insets.EdgeInsetsDirectional.fromSTEB(dart.notNull(this.start) + dart.notNull(other.start), dart.notNull(this.top) + dart.notNull(other.top), dart.notNull(this.end) + dart.notNull(other.end), dart.notNull(this.bottom) + dart.notNull(other.bottom));
    }
    _negate() {
      return new edge_insets.EdgeInsetsDirectional.fromSTEB(-dart.notNull(this.start), -dart.notNull(this.top), -dart.notNull(this.end), -dart.notNull(this.bottom));
    }
    ['*'](other) {
      return new edge_insets.EdgeInsetsDirectional.fromSTEB(dart.notNull(this.start) * dart.notNull(other), dart.notNull(this.top) * dart.notNull(other), dart.notNull(this.end) * dart.notNull(other), dart.notNull(this.bottom) * dart.notNull(other));
    }
    ['/'](other) {
      return new edge_insets.EdgeInsetsDirectional.fromSTEB(dart.notNull(this.start) / dart.notNull(other), dart.notNull(this.top) / dart.notNull(other), dart.notNull(this.end) / dart.notNull(other), dart.notNull(this.bottom) / dart.notNull(other));
    }
    ['~/'](other) {
      return new edge_insets.EdgeInsetsDirectional.fromSTEB((dart.notNull(this.start) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this.top) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this.end) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this.bottom) / dart.notNull(other))[$truncate]()[$toDouble]());
    }
    ['%'](other) {
      return new edge_insets.EdgeInsetsDirectional.fromSTEB(this.start[$modulo](other), this.top[$modulo](other), this.end[$modulo](other), this.bottom[$modulo](other));
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/edge_insets.dart", 814, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return b['*'](t);
      if (b == null) return a['*'](1.0 - dart.notNull(t));
      return new edge_insets.EdgeInsetsDirectional.fromSTEB(ui.lerpDouble(a.start, b.start, t), ui.lerpDouble(a.top, b.top, t), ui.lerpDouble(a.end, b.end, t), ui.lerpDouble(a.bottom, b.bottom, t));
    }
    resolve(direction) {
      if (!(direction != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/edge_insets.dart", 831, 12, "direction != null");
      switch (direction) {
        case C18 || CT.C18:
        {
          return new edge_insets.EdgeInsets.fromLTRB(this.end, this.top, this.start, this.bottom);
        }
        case C19 || CT.C19:
        {
          return new edge_insets.EdgeInsets.fromLTRB(this.start, this.top, this.end, this.bottom);
        }
      }
      return null;
    }
  };
  (edge_insets.EdgeInsetsDirectional.fromSTEB = function(start, top, end, bottom) {
    this[start$] = start;
    this[top$0] = top;
    this[end$] = end;
    this[bottom$0] = bottom;
    edge_insets.EdgeInsetsDirectional.__proto__.new.call(this);
    ;
  }).prototype = edge_insets.EdgeInsetsDirectional.prototype;
  (edge_insets.EdgeInsetsDirectional.only = function(opts) {
    let start = opts && 'start' in opts ? opts.start : 0;
    let top = opts && 'top' in opts ? opts.top : 0;
    let end = opts && 'end' in opts ? opts.end : 0;
    let bottom = opts && 'bottom' in opts ? opts.bottom : 0;
    this[start$] = start;
    this[top$0] = top;
    this[end$] = end;
    this[bottom$0] = bottom;
    edge_insets.EdgeInsetsDirectional.__proto__.new.call(this);
    ;
  }).prototype = edge_insets.EdgeInsetsDirectional.prototype;
  dart.addTypeTests(edge_insets.EdgeInsetsDirectional);
  dart.setMethodSignature(edge_insets.EdgeInsetsDirectional, () => ({
    __proto__: dart.getMethods(edge_insets.EdgeInsetsDirectional.__proto__),
    '-': dart.fnType(edge_insets.EdgeInsetsDirectional, [edge_insets.EdgeInsetsDirectional]),
    '+': dart.fnType(edge_insets.EdgeInsetsDirectional, [edge_insets.EdgeInsetsDirectional]),
    _negate: dart.fnType(edge_insets.EdgeInsetsDirectional, []),
    '*': dart.fnType(edge_insets.EdgeInsetsDirectional, [core.double]),
    '/': dart.fnType(edge_insets.EdgeInsetsDirectional, [core.double]),
    '~/': dart.fnType(edge_insets.EdgeInsetsDirectional, [core.double]),
    '%': dart.fnType(edge_insets.EdgeInsetsDirectional, [core.double]),
    resolve: dart.fnType(edge_insets.EdgeInsets, [ui.TextDirection])
  }));
  dart.setGetterSignature(edge_insets.EdgeInsetsDirectional, () => ({
    __proto__: dart.getGetters(edge_insets.EdgeInsetsDirectional.__proto__),
    [_start]: core.double,
    [_top]: core.double,
    [_end]: core.double,
    [_bottom]: core.double,
    [_left]: core.double,
    [_right]: core.double,
    flipped: edge_insets.EdgeInsetsDirectional
  }));
  dart.setLibraryUri(edge_insets.EdgeInsetsDirectional, "package:flutter/src/painting/edge_insets.dart");
  dart.setFieldSignature(edge_insets.EdgeInsetsDirectional, () => ({
    __proto__: dart.getFields(edge_insets.EdgeInsetsDirectional.__proto__),
    start: dart.finalFieldType(core.double),
    top: dart.finalFieldType(core.double),
    end: dart.finalFieldType(core.double),
    bottom: dart.finalFieldType(core.double)
  }));
  dart.defineLazy(edge_insets.EdgeInsetsDirectional, {
    /*edge_insets.EdgeInsetsDirectional.zero*/get zero() {
      return C20 || CT.C20;
    }
  });
  edge_insets._MixedEdgeInsets = class _MixedEdgeInsets extends edge_insets.EdgeInsetsGeometry {
    get [_left]() {
      return this[_left$];
    }
    set [_left](value) {
      super[_left] = value;
    }
    get [_right]() {
      return this[_right$];
    }
    set [_right](value) {
      super[_right] = value;
    }
    get [_start]() {
      return this[_start$];
    }
    set [_start](value) {
      super[_start] = value;
    }
    get [_end]() {
      return this[_end$];
    }
    set [_end](value) {
      super[_end] = value;
    }
    get [_top]() {
      return this[_top$];
    }
    set [_top](value) {
      super[_top] = value;
    }
    get [_bottom]() {
      return this[_bottom$];
    }
    set [_bottom](value) {
      super[_bottom] = value;
    }
    get isNonNegative() {
      return dart.notNull(this[_left]) >= 0.0 && dart.notNull(this[_right]) >= 0.0 && dart.notNull(this[_start]) >= 0.0 && dart.notNull(this[_end]) >= 0.0 && dart.notNull(this[_top]) >= 0.0 && dart.notNull(this[_bottom]) >= 0.0;
    }
    _negate() {
      return new edge_insets._MixedEdgeInsets.fromLRSETB(-dart.notNull(this[_left]), -dart.notNull(this[_right]), -dart.notNull(this[_start]), -dart.notNull(this[_end]), -dart.notNull(this[_top]), -dart.notNull(this[_bottom]));
    }
    ['*'](other) {
      return new edge_insets._MixedEdgeInsets.fromLRSETB(dart.notNull(this[_left]) * dart.notNull(other), dart.notNull(this[_right]) * dart.notNull(other), dart.notNull(this[_start]) * dart.notNull(other), dart.notNull(this[_end]) * dart.notNull(other), dart.notNull(this[_top]) * dart.notNull(other), dart.notNull(this[_bottom]) * dart.notNull(other));
    }
    ['/'](other) {
      return new edge_insets._MixedEdgeInsets.fromLRSETB(dart.notNull(this[_left]) / dart.notNull(other), dart.notNull(this[_right]) / dart.notNull(other), dart.notNull(this[_start]) / dart.notNull(other), dart.notNull(this[_end]) / dart.notNull(other), dart.notNull(this[_top]) / dart.notNull(other), dart.notNull(this[_bottom]) / dart.notNull(other));
    }
    ['~/'](other) {
      return new edge_insets._MixedEdgeInsets.fromLRSETB((dart.notNull(this[_left]) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this[_right]) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this[_start]) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this[_end]) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this[_top]) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this[_bottom]) / dart.notNull(other))[$truncate]()[$toDouble]());
    }
    ['%'](other) {
      return new edge_insets._MixedEdgeInsets.fromLRSETB(this[_left][$modulo](other), this[_right][$modulo](other), this[_start][$modulo](other), this[_end][$modulo](other), this[_top][$modulo](other), this[_bottom][$modulo](other));
    }
    resolve(direction) {
      if (!(direction != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/edge_insets.dart", 935, 12, "direction != null");
      switch (direction) {
        case C18 || CT.C18:
        {
          return new edge_insets.EdgeInsets.fromLTRB(dart.notNull(this[_end]) + dart.notNull(this[_left]), this[_top], dart.notNull(this[_start]) + dart.notNull(this[_right]), this[_bottom]);
        }
        case C19 || CT.C19:
        {
          return new edge_insets.EdgeInsets.fromLTRB(dart.notNull(this[_start]) + dart.notNull(this[_left]), this[_top], dart.notNull(this[_end]) + dart.notNull(this[_right]), this[_bottom]);
        }
      }
      return null;
    }
  };
  (edge_insets._MixedEdgeInsets.fromLRSETB = function(_left, _right, _start, _end, _top, _bottom) {
    this[_left$] = _left;
    this[_right$] = _right;
    this[_start$] = _start;
    this[_end$] = _end;
    this[_top$] = _top;
    this[_bottom$] = _bottom;
    edge_insets._MixedEdgeInsets.__proto__.new.call(this);
    ;
  }).prototype = edge_insets._MixedEdgeInsets.prototype;
  dart.addTypeTests(edge_insets._MixedEdgeInsets);
  const _left$ = _MixedEdgeInsets__left;
  const _right$ = _MixedEdgeInsets__right;
  const _start$ = _MixedEdgeInsets__start;
  const _end$ = _MixedEdgeInsets__end;
  const _top$ = _MixedEdgeInsets__top;
  const _bottom$ = _MixedEdgeInsets__bottom;
  dart.setMethodSignature(edge_insets._MixedEdgeInsets, () => ({
    __proto__: dart.getMethods(edge_insets._MixedEdgeInsets.__proto__),
    _negate: dart.fnType(edge_insets._MixedEdgeInsets, []),
    '*': dart.fnType(edge_insets._MixedEdgeInsets, [core.double]),
    '/': dart.fnType(edge_insets._MixedEdgeInsets, [core.double]),
    '~/': dart.fnType(edge_insets._MixedEdgeInsets, [core.double]),
    '%': dart.fnType(edge_insets._MixedEdgeInsets, [core.double]),
    resolve: dart.fnType(edge_insets.EdgeInsets, [ui.TextDirection])
  }));
  dart.setLibraryUri(edge_insets._MixedEdgeInsets, "package:flutter/src/painting/edge_insets.dart");
  dart.setFieldSignature(edge_insets._MixedEdgeInsets, () => ({
    __proto__: dart.getFields(edge_insets._MixedEdgeInsets.__proto__),
    [_left]: dart.finalFieldType(core.double),
    [_right]: dart.finalFieldType(core.double),
    [_start]: dart.finalFieldType(core.double),
    [_end]: dart.finalFieldType(core.double),
    [_top]: dart.finalFieldType(core.double),
    [_bottom]: dart.finalFieldType(core.double)
  }));
  var C21;
  var C22;
  var C23;
  var C24;
  var C25;
  basic_types.RenderComparison = class RenderComparison extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (basic_types.RenderComparison.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = basic_types.RenderComparison.prototype;
  dart.addTypeTests(basic_types.RenderComparison);
  dart.setLibraryUri(basic_types.RenderComparison, "package:flutter/src/painting/basic_types.dart");
  dart.setFieldSignature(basic_types.RenderComparison, () => ({
    __proto__: dart.getFields(basic_types.RenderComparison.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(basic_types.RenderComparison, ['toString']);
  basic_types.RenderComparison.identical = C21 || CT.C21;
  basic_types.RenderComparison.metadata = C22 || CT.C22;
  basic_types.RenderComparison.paint = C23 || CT.C23;
  basic_types.RenderComparison.layout = C24 || CT.C24;
  basic_types.RenderComparison.values = C25 || CT.C25;
  var C26;
  basic_types.Axis = class Axis extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (basic_types.Axis.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = basic_types.Axis.prototype;
  dart.addTypeTests(basic_types.Axis);
  dart.setLibraryUri(basic_types.Axis, "package:flutter/src/painting/basic_types.dart");
  dart.setFieldSignature(basic_types.Axis, () => ({
    __proto__: dart.getFields(basic_types.Axis.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(basic_types.Axis, ['toString']);
  basic_types.Axis.horizontal = C14 || CT.C14;
  basic_types.Axis.vertical = C15 || CT.C15;
  basic_types.Axis.values = C26 || CT.C26;
  var C27;
  var C28;
  var C29;
  basic_types.VerticalDirection = class VerticalDirection extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (basic_types.VerticalDirection.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = basic_types.VerticalDirection.prototype;
  dart.addTypeTests(basic_types.VerticalDirection);
  dart.setLibraryUri(basic_types.VerticalDirection, "package:flutter/src/painting/basic_types.dart");
  dart.setFieldSignature(basic_types.VerticalDirection, () => ({
    __proto__: dart.getFields(basic_types.VerticalDirection.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(basic_types.VerticalDirection, ['toString']);
  basic_types.VerticalDirection.up = C27 || CT.C27;
  basic_types.VerticalDirection.down = C28 || CT.C28;
  basic_types.VerticalDirection.values = C29 || CT.C29;
  var C30;
  var C31;
  var C32;
  var C33;
  var C34;
  basic_types.AxisDirection = class AxisDirection extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (basic_types.AxisDirection.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = basic_types.AxisDirection.prototype;
  dart.addTypeTests(basic_types.AxisDirection);
  dart.setLibraryUri(basic_types.AxisDirection, "package:flutter/src/painting/basic_types.dart");
  dart.setFieldSignature(basic_types.AxisDirection, () => ({
    __proto__: dart.getFields(basic_types.AxisDirection.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(basic_types.AxisDirection, ['toString']);
  basic_types.AxisDirection.up = C30 || CT.C30;
  basic_types.AxisDirection.right = C31 || CT.C31;
  basic_types.AxisDirection.down = C32 || CT.C32;
  basic_types.AxisDirection.left = C33 || CT.C33;
  basic_types.AxisDirection.values = C34 || CT.C34;
  basic_types.flipAxis = function flipAxis(direction) {
    if (!(direction != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/basic_types.dart", 137, 10, "direction != null");
    switch (direction) {
      case C14 || CT.C14:
      {
        return basic_types.Axis.vertical;
      }
      case C15 || CT.C15:
      {
        return basic_types.Axis.horizontal;
      }
    }
    return null;
  };
  basic_types.axisDirectionToAxis = function axisDirectionToAxis(axisDirection) {
    if (!(axisDirection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/basic_types.dart", 206, 10, "axisDirection != null");
    switch (axisDirection) {
      case C30 || CT.C30:
      case C32 || CT.C32:
      {
        return basic_types.Axis.vertical;
      }
      case C33 || CT.C33:
      case C31 || CT.C31:
      {
        return basic_types.Axis.horizontal;
      }
    }
    return null;
  };
  basic_types.textDirectionToAxisDirection = function textDirectionToAxisDirection(textDirection) {
    if (!(textDirection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/basic_types.dart", 223, 10, "textDirection != null");
    switch (textDirection) {
      case C18 || CT.C18:
      {
        return basic_types.AxisDirection.left;
      }
      case C19 || CT.C19:
      {
        return basic_types.AxisDirection.right;
      }
    }
    return null;
  };
  basic_types.flipAxisDirection = function flipAxisDirection(axisDirection) {
    if (!(axisDirection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/basic_types.dart", 243, 10, "axisDirection != null");
    switch (axisDirection) {
      case C30 || CT.C30:
      {
        return basic_types.AxisDirection.down;
      }
      case C31 || CT.C31:
      {
        return basic_types.AxisDirection.left;
      }
      case C32 || CT.C32:
      {
        return basic_types.AxisDirection.up;
      }
      case C33 || CT.C33:
      {
        return basic_types.AxisDirection.right;
      }
    }
    return null;
  };
  basic_types.axisDirectionIsReversed = function axisDirectionIsReversed(axisDirection) {
    if (!(axisDirection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/basic_types.dart", 263, 10, "axisDirection != null");
    switch (axisDirection) {
      case C30 || CT.C30:
      case C33 || CT.C33:
      {
        return true;
      }
      case C32 || CT.C32:
      case C31 || CT.C31:
      {
        return false;
      }
    }
    return null;
  };
  circle_border.CircleBorder = class CircleBorder extends borders$.ShapeBorder {
    get side() {
      return this[side$1];
    }
    set side(value) {
      super.side = value;
    }
    get dimensions() {
      return new edge_insets.EdgeInsets.all(this.side.width);
    }
    scale(t) {
      return new circle_border.CircleBorder.new({side: this.side.scale(t)});
    }
    lerpFrom(a, t) {
      if (circle_border.CircleBorder.is(a)) return new circle_border.CircleBorder.new({side: borders$.BorderSide.lerp(a.side, this.side, t)});
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (circle_border.CircleBorder.is(b)) return new circle_border.CircleBorder.new({side: borders$.BorderSide.lerp(this.side, b.side, t)});
      return super.lerpTo(b, t);
    }
    getInnerPath(rect, opts) {
      let t0;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t0 = ui.Path.new();
      t0.addOval(new ui.Rect.fromCircle({center: rect.center, radius: math.max(core.double, 0.0, dart.notNull(rect.shortestSide) / 2.0 - dart.notNull(this.side.width))}));
      return t0;
    }
    getOuterPath(rect, opts) {
      let t0;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t0 = ui.Path.new();
      t0.addOval(new ui.Rect.fromCircle({center: rect.center, radius: dart.notNull(rect.shortestSide) / 2.0}));
      return t0;
    }
    paint(canvas, rect, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      switch (this.side.style) {
        case C6 || CT.C6:
        {
          break;
        }
        case C13 || CT.C13:
        {
          canvas.drawCircle(rect.center, (dart.notNull(rect.shortestSide) - dart.notNull(this.side.width)) / 2.0, this.side.toPaint());
        }
      }
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return circle_border.CircleBorder.is(other) && dart.equals(other.side, this.side);
    }
    get hashCode() {
      return dart.hashCode(this.side);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "CircleBorder")) + "(" + dart.str(this.side) + ")";
    }
  };
  (circle_border.CircleBorder.new = function(opts) {
    let side = opts && 'side' in opts ? opts.side : C5 || CT.C5;
    this[side$1] = side;
    if (!(side != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/circle_border.dart", 30, 64, "side != null");
    circle_border.CircleBorder.__proto__.new.call(this);
    ;
  }).prototype = circle_border.CircleBorder.prototype;
  dart.addTypeTests(circle_border.CircleBorder);
  const side$1 = CircleBorder_side;
  dart.setMethodSignature(circle_border.CircleBorder, () => ({
    __proto__: dart.getMethods(circle_border.CircleBorder.__proto__),
    scale: dart.fnType(borders$.ShapeBorder, [core.double]),
    getInnerPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: ui.TextDirection}, {}),
    getOuterPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: ui.TextDirection}, {}),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {textDirection: ui.TextDirection}, {}),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(circle_border.CircleBorder, () => ({
    __proto__: dart.getGetters(circle_border.CircleBorder.__proto__),
    dimensions: edge_insets.EdgeInsetsGeometry
  }));
  dart.setLibraryUri(circle_border.CircleBorder, "package:flutter/src/painting/circle_border.dart");
  dart.setFieldSignature(circle_border.CircleBorder, () => ({
    __proto__: dart.getFields(circle_border.CircleBorder.__proto__),
    side: dart.finalFieldType(borders$.BorderSide)
  }));
  dart.defineExtensionMethods(circle_border.CircleBorder, ['_equals', 'toString']);
  dart.defineExtensionAccessors(circle_border.CircleBorder, ['hashCode']);
  var C35;
  borders$.BorderStyle = class BorderStyle extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (borders$.BorderStyle.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = borders$.BorderStyle.prototype;
  dart.addTypeTests(borders$.BorderStyle);
  dart.setLibraryUri(borders$.BorderStyle, "package:flutter/src/painting/borders.dart");
  dart.setFieldSignature(borders$.BorderStyle, () => ({
    __proto__: dart.getFields(borders$.BorderStyle.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(borders$.BorderStyle, ['toString']);
  borders$.BorderStyle.none = C6 || CT.C6;
  borders$.BorderStyle.solid = C13 || CT.C13;
  borders$.BorderStyle.values = C35 || CT.C35;
  var C36;
  borders$.BorderSide = class BorderSide extends core.Object {
    get color() {
      return this[color$0];
    }
    set color(value) {
      super.color = value;
    }
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    get style() {
      return this[style$];
    }
    set style(value) {
      super.style = value;
    }
    static merge(a, b) {
      if (!(a != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/borders.dart", 86, 12, "a != null");
      if (!(b != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/borders.dart", 87, 12, "b != null");
      if (!dart.test(borders$.BorderSide.canMerge(a, b))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/borders.dart", 88, 12, "canMerge(a, b)");
      let aIsNone = dart.equals(a.style, borders$.BorderStyle.none) && a.width === 0.0;
      let bIsNone = dart.equals(b.style, borders$.BorderStyle.none) && b.width === 0.0;
      if (aIsNone && bIsNone) return borders$.BorderSide.none;
      if (aIsNone) return b;
      if (bIsNone) return a;
      if (!dart.equals(a.color, b.color)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/borders.dart", 97, 12, "a.color == b.color");
      if (!dart.equals(a.style, b.style)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/borders.dart", 98, 12, "a.style == b.style");
      return new borders$.BorderSide.new({color: a.color, width: dart.notNull(a.width) + dart.notNull(b.width), style: a.style});
    }
    copyWith(opts) {
      let t0, t0$, t0$0;
      let color = opts && 'color' in opts ? opts.color : null;
      let width = opts && 'width' in opts ? opts.width : null;
      let style = opts && 'style' in opts ? opts.style : null;
      if (!(width == null || dart.notNull(width) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/borders.dart", 135, 12, "width == null || width >= 0.0");
      return new borders$.BorderSide.new({color: (t0 = color, t0 == null ? this.color : t0), width: (t0$ = width, t0$ == null ? this.width : t0$), style: (t0$0 = style, t0$0 == null ? this.style : t0$0)});
    }
    scale(t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/borders.dart", 160, 12, "t != null");
      return new borders$.BorderSide.new({color: this.color, width: math.max(core.double, 0.0, dart.notNull(this.width) * dart.notNull(t)), style: dart.notNull(t) <= 0.0 ? borders$.BorderStyle.none : this.style});
    }
    toPaint() {
      let t0, t0$;
      switch (this.style) {
        case C13 || CT.C13:
        {
          t0 = ui.Paint.new();
          t0.color = this.color;
          t0.strokeWidth = this.width;
          t0.style = ui.PaintingStyle.stroke;
          return t0;
        }
        case C6 || CT.C6:
        {
          t0$ = ui.Paint.new();
          t0$.color = C36 || CT.C36;
          t0$.strokeWidth = 0.0;
          t0$.style = ui.PaintingStyle.stroke;
          return t0$;
        }
      }
      return null;
    }
    static canMerge(a, b) {
      if (!(a != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/borders.dart", 198, 12, "a != null");
      if (!(b != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/borders.dart", 199, 12, "b != null");
      if (dart.equals(a.style, borders$.BorderStyle.none) && a.width === 0.0 || dart.equals(b.style, borders$.BorderStyle.none) && b.width === 0.0) return true;
      return dart.equals(a.style, b.style) && dart.equals(a.color, b.color);
    }
    static lerp(a, b, t) {
      if (!(a != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/borders.dart", 213, 12, "a != null");
      if (!(b != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/borders.dart", 214, 12, "b != null");
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/borders.dart", 215, 12, "t != null");
      if (t === 0.0) return a;
      if (t === 1.0) return b;
      let width = ui.lerpDouble(a.width, b.width, t);
      if (dart.notNull(width) < 0.0) return borders$.BorderSide.none;
      if (dart.equals(a.style, b.style)) {
        return new borders$.BorderSide.new({color: ui.Color.lerp(a.color, b.color, t), width: width, style: a.style});
      }
      let colorA = null;
      let colorB = null;
      switch (a.style) {
        case C13 || CT.C13:
        {
          colorA = a.color;
          break;
        }
        case C6 || CT.C6:
        {
          colorA = a.color.withAlpha(0);
          break;
        }
      }
      switch (b.style) {
        case C13 || CT.C13:
        {
          colorB = b.color;
          break;
        }
        case C6 || CT.C6:
        {
          colorB = b.color.withAlpha(0);
          break;
        }
      }
      return new borders$.BorderSide.new({color: ui.Color.lerp(colorA, colorB, t), width: width, style: borders$.BorderStyle.solid});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return borders$.BorderSide.is(other) && dart.equals(other.color, this.color) && other.width == this.width && dart.equals(other.style, this.style);
    }
    get hashCode() {
      return ui.hashValues(this.color, this.width, this.style);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "BorderSide")) + "(" + dart.str(this.color) + ", " + this.width[$toStringAsFixed](1) + ", " + dart.str(this.style) + ")";
    }
  };
  (borders$.BorderSide.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : C7 || CT.C7;
    let width = opts && 'width' in opts ? opts.width : 1;
    let style = opts && 'style' in opts ? opts.style : C13 || CT.C13;
    this[color$0] = color;
    this[width$] = width;
    this[style$] = style;
    if (!(color != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/borders.dart", 69, 15, "color != null");
    if (!(width != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/borders.dart", 70, 15, "width != null");
    if (!(dart.notNull(width) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/borders.dart", 71, 15, "width >= 0.0");
    if (!(style != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/borders.dart", 72, 15, "style != null");
    ;
  }).prototype = borders$.BorderSide.prototype;
  dart.addTypeTests(borders$.BorderSide);
  const color$0 = BorderSide_color;
  const width$ = BorderSide_width;
  const style$ = BorderSide_style;
  dart.setMethodSignature(borders$.BorderSide, () => ({
    __proto__: dart.getMethods(borders$.BorderSide.__proto__),
    copyWith: dart.fnType(borders$.BorderSide, [], {color: ui.Color, style: borders$.BorderStyle, width: core.double}, {}),
    scale: dart.fnType(borders$.BorderSide, [core.double]),
    toPaint: dart.fnType(ui.Paint, []),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(borders$.BorderSide, "package:flutter/src/painting/borders.dart");
  dart.setFieldSignature(borders$.BorderSide, () => ({
    __proto__: dart.getFields(borders$.BorderSide.__proto__),
    color: dart.finalFieldType(ui.Color),
    width: dart.finalFieldType(core.double),
    style: dart.finalFieldType(borders$.BorderStyle)
  }));
  dart.defineExtensionMethods(borders$.BorderSide, ['_equals', 'toString']);
  dart.defineExtensionAccessors(borders$.BorderSide, ['hashCode']);
  dart.defineLazy(borders$.BorderSide, {
    /*borders$.BorderSide.none*/get none() {
      return C5 || CT.C5;
    }
  });
  borders$._CompoundBorder = class _CompoundBorder extends borders$.ShapeBorder {
    get dimensions() {
      return this.borders[$fold](edge_insets.EdgeInsetsGeometry, edge_insets.EdgeInsets.zero, dart.fn((previousValue, border) => previousValue.add(border.dimensions), EdgeInsetsGeometryAndShapeBorderToEdgeInsetsGeometry()));
    }
    add(other, opts) {
      let t0;
      let reversed = opts && 'reversed' in opts ? opts.reversed : false;
      if (!borders$._CompoundBorder.is(other)) {
        let ours = dart.test(reversed) ? this.borders[$last] : this.borders[$first];
        let merged = (t0 = ours.add(other, {reversed: reversed}), t0 == null ? other.add(ours, {reversed: !dart.test(reversed)}) : t0);
        if (merged != null) {
          let result = (() => {
            let t0 = JSArrayOfShapeBorder().of([]);
            for (let t1 of this.borders)
              t0[$add](t1);
            return t0;
          })();
          result[$_set](dart.test(reversed) ? dart.notNull(result[$length]) - 1 : 0, merged);
          return new borders$._CompoundBorder.new(result);
        }
      }
      let mergedBorders = (() => {
        let t2 = JSArrayOfShapeBorder().of([]);
        if (dart.test(reversed)) for (let t3 of this.borders)
          t2[$add](t3);
        if (borders$._CompoundBorder.is(other))
          for (let t4 of other.borders)
            t2[$add](t4);
        else
          t2[$add](other);
        if (!dart.test(reversed)) for (let t5 of this.borders)
          t2[$add](t5);
        return t2;
      })();
      return new borders$._CompoundBorder.new(mergedBorders);
    }
    scale(t) {
      return new borders$._CompoundBorder.new(this.borders[$map](borders$.ShapeBorder, dart.fn(border => border.scale(t), ShapeBorderToShapeBorder()))[$toList]());
    }
    lerpFrom(a, t) {
      return borders$._CompoundBorder.lerp(a, this, t);
    }
    lerpTo(b, t) {
      return borders$._CompoundBorder.lerp(this, b, t);
    }
    static lerp(a, b, t) {
      let t6;
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/borders.dart", 564, 12, "t != null");
      if (!(borders$._CompoundBorder.is(a) || borders$._CompoundBorder.is(b))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/borders.dart", 565, 12, "a is _CompoundBorder || b is _CompoundBorder");
      let aList = borders$._CompoundBorder.is(a) ? a.borders : JSArrayOfShapeBorder().of([a]);
      let bList = borders$._CompoundBorder.is(b) ? b.borders : JSArrayOfShapeBorder().of([b]);
      let results = JSArrayOfShapeBorder().of([]);
      let length = math.max(core.int, aList[$length], bList[$length]);
      for (let index = 0; index < length; index = index + 1) {
        let localA = index < dart.notNull(aList[$length]) ? aList[$_get](index) : null;
        let localB = index < dart.notNull(bList[$length]) ? bList[$_get](index) : null;
        if (localA != null && localB != null) {
          let localResult = (t6 = localA.lerpTo(localB, t), t6 == null ? localB.lerpFrom(localA, t) : t6);
          if (localResult != null) {
            results[$add](localResult);
            continue;
          }
        }
        if (localB != null) results[$add](localB.scale(t));
        if (localA != null) results[$add](localA.scale(1.0 - dart.notNull(t)));
      }
      return new borders$._CompoundBorder.new(results);
    }
    getInnerPath(rect, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      for (let index = 0; index < dart.notNull(this.borders[$length]) - 1; index = index + 1)
        rect = this.borders[$_get](index).dimensions.resolve(textDirection).deflateRect(rect);
      return this.borders[$last].getInnerPath(rect, {textDirection: textDirection});
    }
    getOuterPath(rect, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return this.borders[$first].getOuterPath(rect, {textDirection: textDirection});
    }
    paint(canvas, rect, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      for (let border of this.borders) {
        border.paint(canvas, rect, {textDirection: textDirection});
        rect = border.dimensions.resolve(textDirection).deflateRect(rect);
      }
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return borders$._CompoundBorder.is(other) && dart.test(collections.listEquals(borders$.ShapeBorder, other.borders, this.borders));
    }
    get hashCode() {
      return ui.hashList(this.borders);
    }
    toString() {
      return this.borders[$reversed][$map](core.String, dart.fn(border => dart.toString(border), ShapeBorderToString()))[$join](" + ");
    }
  };
  (borders$._CompoundBorder.new = function(borders) {
    this.borders = borders;
    if (!(borders != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/borders.dart", 500, 14, "borders != null");
    if (!(dart.notNull(borders[$length]) >= 2)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/borders.dart", 501, 14, "borders.length >= 2");
    if (!!dart.test(borders[$any](dart.fn(border => borders$._CompoundBorder.is(border), ShapeBorderTobool())))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/borders.dart", 502, 14, "!borders.any((ShapeBorder border) => border is _CompoundBorder)");
    borders$._CompoundBorder.__proto__.new.call(this);
    ;
  }).prototype = borders$._CompoundBorder.prototype;
  dart.addTypeTests(borders$._CompoundBorder);
  dart.setMethodSignature(borders$._CompoundBorder, () => ({
    __proto__: dart.getMethods(borders$._CompoundBorder.__proto__),
    scale: dart.fnType(borders$.ShapeBorder, [core.double]),
    getInnerPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: ui.TextDirection}, {}),
    getOuterPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: ui.TextDirection}, {}),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {textDirection: ui.TextDirection}, {}),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(borders$._CompoundBorder, () => ({
    __proto__: dart.getGetters(borders$._CompoundBorder.__proto__),
    dimensions: edge_insets.EdgeInsetsGeometry
  }));
  dart.setLibraryUri(borders$._CompoundBorder, "package:flutter/src/painting/borders.dart");
  dart.setFieldSignature(borders$._CompoundBorder, () => ({
    __proto__: dart.getFields(borders$._CompoundBorder.__proto__),
    borders: dart.finalFieldType(core.List$(borders$.ShapeBorder))
  }));
  dart.defineExtensionMethods(borders$._CompoundBorder, ['_equals', 'toString']);
  dart.defineExtensionAccessors(borders$._CompoundBorder, ['hashCode']);
  borders$.paintBorder = function paintBorder(canvas, rect, opts) {
    let t6;
    let top = opts && 'top' in opts ? opts.top : C5 || CT.C5;
    let right = opts && 'right' in opts ? opts.right : C5 || CT.C5;
    let bottom = opts && 'bottom' in opts ? opts.bottom : C5 || CT.C5;
    let left = opts && 'left' in opts ? opts.left : C5 || CT.C5;
    if (!(canvas != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/borders.dart", 660, 10, "canvas != null");
    if (!(rect != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/borders.dart", 661, 10, "rect != null");
    if (!(top != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/borders.dart", 662, 10, "top != null");
    if (!(right != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/borders.dart", 663, 10, "right != null");
    if (!(bottom != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/borders.dart", 664, 10, "bottom != null");
    if (!(left != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/borders.dart", 665, 10, "left != null");
    let paint = (t6 = ui.Paint.new(), t6.strokeWidth = 0.0, t6);
    let path = ui.Path.new();
    switch (top.style) {
      case C13 || CT.C13:
      {
        paint.color = top.color;
        path.reset();
        path.moveTo(rect.left, rect.top);
        path.lineTo(rect.right, rect.top);
        if (top.width === 0.0) {
          paint.style = ui.PaintingStyle.stroke;
        } else {
          paint.style = ui.PaintingStyle.fill;
          path.lineTo(dart.notNull(rect.right) - dart.notNull(right.width), dart.notNull(rect.top) + dart.notNull(top.width));
          path.lineTo(dart.notNull(rect.left) + dart.notNull(left.width), dart.notNull(rect.top) + dart.notNull(top.width));
        }
        canvas.drawPath(path, paint);
        break;
      }
      case C6 || CT.C6:
      {
        break;
      }
    }
    switch (right.style) {
      case C13 || CT.C13:
      {
        paint.color = right.color;
        path.reset();
        path.moveTo(rect.right, rect.top);
        path.lineTo(rect.right, rect.bottom);
        if (right.width === 0.0) {
          paint.style = ui.PaintingStyle.stroke;
        } else {
          paint.style = ui.PaintingStyle.fill;
          path.lineTo(dart.notNull(rect.right) - dart.notNull(right.width), dart.notNull(rect.bottom) - dart.notNull(bottom.width));
          path.lineTo(dart.notNull(rect.right) - dart.notNull(right.width), dart.notNull(rect.top) + dart.notNull(top.width));
        }
        canvas.drawPath(path, paint);
        break;
      }
      case C6 || CT.C6:
      {
        break;
      }
    }
    switch (bottom.style) {
      case C13 || CT.C13:
      {
        paint.color = bottom.color;
        path.reset();
        path.moveTo(rect.right, rect.bottom);
        path.lineTo(rect.left, rect.bottom);
        if (bottom.width === 0.0) {
          paint.style = ui.PaintingStyle.stroke;
        } else {
          paint.style = ui.PaintingStyle.fill;
          path.lineTo(dart.notNull(rect.left) + dart.notNull(left.width), dart.notNull(rect.bottom) - dart.notNull(bottom.width));
          path.lineTo(dart.notNull(rect.right) - dart.notNull(right.width), dart.notNull(rect.bottom) - dart.notNull(bottom.width));
        }
        canvas.drawPath(path, paint);
        break;
      }
      case C6 || CT.C6:
      {
        break;
      }
    }
    switch (left.style) {
      case C13 || CT.C13:
      {
        paint.color = left.color;
        path.reset();
        path.moveTo(rect.left, rect.bottom);
        path.lineTo(rect.left, rect.top);
        if (left.width === 0.0) {
          paint.style = ui.PaintingStyle.stroke;
        } else {
          paint.style = ui.PaintingStyle.fill;
          path.lineTo(dart.notNull(rect.left) + dart.notNull(left.width), dart.notNull(rect.top) + dart.notNull(top.width));
          path.lineTo(dart.notNull(rect.left) + dart.notNull(left.width), dart.notNull(rect.bottom) - dart.notNull(bottom.width));
        }
        canvas.drawPath(path, paint);
        break;
      }
      case C6 || CT.C6:
      {
        break;
      }
    }
  };
  var _topLeft = dart.privateName(border_radius, "_topLeft");
  var _topRight = dart.privateName(border_radius, "_topRight");
  var _bottomLeft = dart.privateName(border_radius, "_bottomLeft");
  var _bottomRight = dart.privateName(border_radius, "_bottomRight");
  var _topStart = dart.privateName(border_radius, "_topStart");
  var _topEnd = dart.privateName(border_radius, "_topEnd");
  var _bottomStart = dart.privateName(border_radius, "_bottomStart");
  var _bottomEnd = dart.privateName(border_radius, "_bottomEnd");
  border_radius.BorderRadiusGeometry = class BorderRadiusGeometry extends core.Object {
    subtract(other) {
      return new border_radius._MixedBorderRadius.new(this[_topLeft]['-'](other[_topLeft]), this[_topRight]['-'](other[_topRight]), this[_bottomLeft]['-'](other[_bottomLeft]), this[_bottomRight]['-'](other[_bottomRight]), this[_topStart]['-'](other[_topStart]), this[_topEnd]['-'](other[_topEnd]), this[_bottomStart]['-'](other[_bottomStart]), this[_bottomEnd]['-'](other[_bottomEnd]));
    }
    add(other) {
      return new border_radius._MixedBorderRadius.new(this[_topLeft]['+'](other[_topLeft]), this[_topRight]['+'](other[_topRight]), this[_bottomLeft]['+'](other[_bottomLeft]), this[_bottomRight]['+'](other[_bottomRight]), this[_topStart]['+'](other[_topStart]), this[_topEnd]['+'](other[_topEnd]), this[_bottomStart]['+'](other[_bottomStart]), this[_bottomEnd]['+'](other[_bottomEnd]));
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/border_radius.dart", 132, 12, "t != null");
      if (a == null && b == null) return null;
      a == null ? a = border_radius.BorderRadius.zero : null;
      b == null ? b = border_radius.BorderRadius.zero : null;
      return a.add(b.subtract(a)['*'](t));
    }
    toString() {
      let visual = null;
      let logical = null;
      if (dart.equals(this[_topLeft], this[_topRight]) && dart.equals(this[_topRight], this[_bottomLeft]) && dart.equals(this[_bottomLeft], this[_bottomRight])) {
        if (!dart.equals(this[_topLeft], ui.Radius.zero)) {
          if (this[_topLeft].x == this[_topLeft].y) {
            visual = "BorderRadius.circular(" + this[_topLeft].x[$toStringAsFixed](1) + ")";
          } else {
            visual = "BorderRadius.all(" + dart.str(this[_topLeft]) + ")";
          }
        }
      } else {
        let result = new core.StringBuffer.new();
        result.write("BorderRadius.only(");
        let comma = false;
        if (!dart.equals(this[_topLeft], ui.Radius.zero)) {
          result.write("topLeft: " + dart.str(this[_topLeft]));
          comma = true;
        }
        if (!dart.equals(this[_topRight], ui.Radius.zero)) {
          if (comma) result.write(", ");
          result.write("topRight: " + dart.str(this[_topRight]));
          comma = true;
        }
        if (!dart.equals(this[_bottomLeft], ui.Radius.zero)) {
          if (comma) result.write(", ");
          result.write("bottomLeft: " + dart.str(this[_bottomLeft]));
          comma = true;
        }
        if (!dart.equals(this[_bottomRight], ui.Radius.zero)) {
          if (comma) result.write(", ");
          result.write("bottomRight: " + dart.str(this[_bottomRight]));
        }
        result.write(")");
        visual = result.toString();
      }
      if (dart.equals(this[_topStart], this[_topEnd]) && dart.equals(this[_topEnd], this[_bottomEnd]) && dart.equals(this[_bottomEnd], this[_bottomStart])) {
        if (!dart.equals(this[_topStart], ui.Radius.zero)) {
          if (this[_topStart].x == this[_topStart].y) {
            logical = "BorderRadiusDirectional.circular(" + this[_topStart].x[$toStringAsFixed](1) + ")";
          } else {
            logical = "BorderRadiusDirectional.all(" + dart.str(this[_topStart]) + ")";
          }
        }
      } else {
        let result = new core.StringBuffer.new();
        result.write("BorderRadiusDirectional.only(");
        let comma = false;
        if (!dart.equals(this[_topStart], ui.Radius.zero)) {
          result.write("topStart: " + dart.str(this[_topStart]));
          comma = true;
        }
        if (!dart.equals(this[_topEnd], ui.Radius.zero)) {
          if (comma) result.write(", ");
          result.write("topEnd: " + dart.str(this[_topEnd]));
          comma = true;
        }
        if (!dart.equals(this[_bottomStart], ui.Radius.zero)) {
          if (comma) result.write(", ");
          result.write("bottomStart: " + dart.str(this[_bottomStart]));
          comma = true;
        }
        if (!dart.equals(this[_bottomEnd], ui.Radius.zero)) {
          if (comma) result.write(", ");
          result.write("bottomEnd: " + dart.str(this[_bottomEnd]));
        }
        result.write(")");
        logical = result.toString();
      }
      if (visual != null && logical != null) return dart.str(visual) + " + " + dart.str(logical);
      if (visual != null) return visual;
      if (logical != null) return logical;
      return "BorderRadius.zero";
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return border_radius.BorderRadiusGeometry.is(other) && dart.equals(other[_topLeft], this[_topLeft]) && dart.equals(other[_topRight], this[_topRight]) && dart.equals(other[_bottomLeft], this[_bottomLeft]) && dart.equals(other[_bottomRight], this[_bottomRight]) && dart.equals(other[_topStart], this[_topStart]) && dart.equals(other[_topEnd], this[_topEnd]) && dart.equals(other[_bottomStart], this[_bottomStart]) && dart.equals(other[_bottomEnd], this[_bottomEnd]);
    }
    get hashCode() {
      return ui.hashValues(this[_topLeft], this[_topRight], this[_bottomLeft], this[_bottomRight], this[_topStart], this[_topEnd], this[_bottomStart], this[_bottomEnd]);
    }
  };
  (border_radius.BorderRadiusGeometry.new = function() {
    ;
  }).prototype = border_radius.BorderRadiusGeometry.prototype;
  dart.addTypeTests(border_radius.BorderRadiusGeometry);
  dart.setMethodSignature(border_radius.BorderRadiusGeometry, () => ({
    __proto__: dart.getMethods(border_radius.BorderRadiusGeometry.__proto__),
    subtract: dart.fnType(border_radius.BorderRadiusGeometry, [border_radius.BorderRadiusGeometry]),
    add: dart.fnType(border_radius.BorderRadiusGeometry, [border_radius.BorderRadiusGeometry]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(border_radius.BorderRadiusGeometry, "package:flutter/src/painting/border_radius.dart");
  dart.defineExtensionMethods(border_radius.BorderRadiusGeometry, ['toString', '_equals']);
  dart.defineExtensionAccessors(border_radius.BorderRadiusGeometry, ['hashCode']);
  border_radius.BorderRadius = class BorderRadius extends border_radius.BorderRadiusGeometry {
    get topLeft() {
      return this[topLeft$];
    }
    set topLeft(value) {
      super.topLeft = value;
    }
    get topRight() {
      return this[topRight$];
    }
    set topRight(value) {
      super.topRight = value;
    }
    get bottomLeft() {
      return this[bottomLeft$];
    }
    set bottomLeft(value) {
      super.bottomLeft = value;
    }
    get bottomRight() {
      return this[bottomRight$];
    }
    set bottomRight(value) {
      super.bottomRight = value;
    }
    get [_topLeft]() {
      return this.topLeft;
    }
    get [_topRight]() {
      return this.topRight;
    }
    get [_bottomLeft]() {
      return this.bottomLeft;
    }
    get [_bottomRight]() {
      return this.bottomRight;
    }
    get [_topStart]() {
      return ui.Radius.zero;
    }
    get [_topEnd]() {
      return ui.Radius.zero;
    }
    get [_bottomStart]() {
      return ui.Radius.zero;
    }
    get [_bottomEnd]() {
      return ui.Radius.zero;
    }
    toRRect(rect) {
      return new ui.RRect.fromRectAndCorners(rect, {topLeft: this.topLeft, topRight: this.topRight, bottomLeft: this.bottomLeft, bottomRight: this.bottomRight});
    }
    subtract(other) {
      if (border_radius.BorderRadius.is(other)) return this['-'](other);
      return super.subtract(other);
    }
    add(other) {
      if (border_radius.BorderRadius.is(other)) return this['+'](other);
      return super.add(other);
    }
    ['-'](other) {
      return new border_radius.BorderRadius.only({topLeft: this.topLeft['-'](other.topLeft), topRight: this.topRight['-'](other.topRight), bottomLeft: this.bottomLeft['-'](other.bottomLeft), bottomRight: this.bottomRight['-'](other.bottomRight)});
    }
    ['+'](other) {
      return new border_radius.BorderRadius.only({topLeft: this.topLeft['+'](other.topLeft), topRight: this.topRight['+'](other.topRight), bottomLeft: this.bottomLeft['+'](other.bottomLeft), bottomRight: this.bottomRight['+'](other.bottomRight)});
    }
    _negate() {
      return new border_radius.BorderRadius.only({topLeft: this.topLeft._negate(), topRight: this.topRight._negate(), bottomLeft: this.bottomLeft._negate(), bottomRight: this.bottomRight._negate()});
    }
    ['*'](other) {
      return new border_radius.BorderRadius.only({topLeft: this.topLeft['*'](other), topRight: this.topRight['*'](other), bottomLeft: this.bottomLeft['*'](other), bottomRight: this.bottomRight['*'](other)});
    }
    ['/'](other) {
      return new border_radius.BorderRadius.only({topLeft: this.topLeft['/'](other), topRight: this.topRight['/'](other), bottomLeft: this.bottomLeft['/'](other), bottomRight: this.bottomRight['/'](other)});
    }
    ['~/'](other) {
      return new border_radius.BorderRadius.only({topLeft: this.topLeft['~/'](other), topRight: this.topRight['~/'](other), bottomLeft: this.bottomLeft['~/'](other), bottomRight: this.bottomRight['~/'](other)});
    }
    ['%'](other) {
      return new border_radius.BorderRadius.only({topLeft: this.topLeft['%'](other), topRight: this.topRight['%'](other), bottomLeft: this.bottomLeft['%'](other), bottomRight: this.bottomRight['%'](other)});
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/border_radius.dart", 476, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return b['*'](t);
      if (b == null) return a['*'](1.0 - dart.notNull(t));
      return new border_radius.BorderRadius.only({topLeft: ui.Radius.lerp(a.topLeft, b.topLeft, t), topRight: ui.Radius.lerp(a.topRight, b.topRight, t), bottomLeft: ui.Radius.lerp(a.bottomLeft, b.bottomLeft, t), bottomRight: ui.Radius.lerp(a.bottomRight, b.bottomRight, t)});
    }
    resolve(direction) {
      return this;
    }
  };
  (border_radius.BorderRadius.all = function(radius) {
    border_radius.BorderRadius.only.call(this, {topLeft: radius, topRight: radius, bottomLeft: radius, bottomRight: radius});
  }).prototype = border_radius.BorderRadius.prototype;
  (border_radius.BorderRadius.circular = function(radius) {
    border_radius.BorderRadius.all.call(this, new ui.Radius.circular(radius));
  }).prototype = border_radius.BorderRadius.prototype;
  (border_radius.BorderRadius.vertical = function(opts) {
    let top = opts && 'top' in opts ? opts.top : C12 || CT.C12;
    let bottom = opts && 'bottom' in opts ? opts.bottom : C12 || CT.C12;
    border_radius.BorderRadius.only.call(this, {topLeft: top, topRight: top, bottomLeft: bottom, bottomRight: bottom});
  }).prototype = border_radius.BorderRadius.prototype;
  (border_radius.BorderRadius.horizontal = function(opts) {
    let left = opts && 'left' in opts ? opts.left : C12 || CT.C12;
    let right = opts && 'right' in opts ? opts.right : C12 || CT.C12;
    border_radius.BorderRadius.only.call(this, {topLeft: left, topRight: right, bottomLeft: left, bottomRight: right});
  }).prototype = border_radius.BorderRadius.prototype;
  (border_radius.BorderRadius.only = function(opts) {
    let topLeft = opts && 'topLeft' in opts ? opts.topLeft : C12 || CT.C12;
    let topRight = opts && 'topRight' in opts ? opts.topRight : C12 || CT.C12;
    let bottomLeft = opts && 'bottomLeft' in opts ? opts.bottomLeft : C12 || CT.C12;
    let bottomRight = opts && 'bottomRight' in opts ? opts.bottomRight : C12 || CT.C12;
    this[topLeft$] = topLeft;
    this[topRight$] = topRight;
    this[bottomLeft$] = bottomLeft;
    this[bottomRight$] = bottomRight;
    border_radius.BorderRadius.__proto__.new.call(this);
    ;
  }).prototype = border_radius.BorderRadius.prototype;
  dart.addTypeTests(border_radius.BorderRadius);
  const topLeft$ = BorderRadius_topLeft;
  const topRight$ = BorderRadius_topRight;
  const bottomLeft$ = BorderRadius_bottomLeft;
  const bottomRight$ = BorderRadius_bottomRight;
  dart.setMethodSignature(border_radius.BorderRadius, () => ({
    __proto__: dart.getMethods(border_radius.BorderRadius.__proto__),
    toRRect: dart.fnType(ui.RRect, [ui.Rect]),
    '-': dart.fnType(border_radius.BorderRadius, [border_radius.BorderRadius]),
    '+': dart.fnType(border_radius.BorderRadius, [border_radius.BorderRadius]),
    _negate: dart.fnType(border_radius.BorderRadius, []),
    '*': dart.fnType(border_radius.BorderRadius, [core.double]),
    '/': dart.fnType(border_radius.BorderRadius, [core.double]),
    '~/': dart.fnType(border_radius.BorderRadius, [core.double]),
    '%': dart.fnType(border_radius.BorderRadius, [core.double]),
    resolve: dart.fnType(border_radius.BorderRadius, [ui.TextDirection])
  }));
  dart.setGetterSignature(border_radius.BorderRadius, () => ({
    __proto__: dart.getGetters(border_radius.BorderRadius.__proto__),
    [_topLeft]: ui.Radius,
    [_topRight]: ui.Radius,
    [_bottomLeft]: ui.Radius,
    [_bottomRight]: ui.Radius,
    [_topStart]: ui.Radius,
    [_topEnd]: ui.Radius,
    [_bottomStart]: ui.Radius,
    [_bottomEnd]: ui.Radius
  }));
  dart.setLibraryUri(border_radius.BorderRadius, "package:flutter/src/painting/border_radius.dart");
  dart.setFieldSignature(border_radius.BorderRadius, () => ({
    __proto__: dart.getFields(border_radius.BorderRadius.__proto__),
    topLeft: dart.finalFieldType(ui.Radius),
    topRight: dart.finalFieldType(ui.Radius),
    bottomLeft: dart.finalFieldType(ui.Radius),
    bottomRight: dart.finalFieldType(ui.Radius)
  }));
  dart.defineLazy(border_radius.BorderRadius, {
    /*border_radius.BorderRadius.zero*/get zero() {
      return C11 || CT.C11;
    }
  });
  var topStart$ = dart.privateName(border_radius, "BorderRadiusDirectional.topStart");
  var topEnd$ = dart.privateName(border_radius, "BorderRadiusDirectional.topEnd");
  var bottomStart$ = dart.privateName(border_radius, "BorderRadiusDirectional.bottomStart");
  var bottomEnd$ = dart.privateName(border_radius, "BorderRadiusDirectional.bottomEnd");
  var C37;
  border_radius.BorderRadiusDirectional = class BorderRadiusDirectional extends border_radius.BorderRadiusGeometry {
    get topStart() {
      return this[topStart$];
    }
    set topStart(value) {
      super.topStart = value;
    }
    get topEnd() {
      return this[topEnd$];
    }
    set topEnd(value) {
      super.topEnd = value;
    }
    get bottomStart() {
      return this[bottomStart$];
    }
    set bottomStart(value) {
      super.bottomStart = value;
    }
    get bottomEnd() {
      return this[bottomEnd$];
    }
    set bottomEnd(value) {
      super.bottomEnd = value;
    }
    get [_topStart]() {
      return this.topStart;
    }
    get [_topEnd]() {
      return this.topEnd;
    }
    get [_bottomStart]() {
      return this.bottomStart;
    }
    get [_bottomEnd]() {
      return this.bottomEnd;
    }
    get [_topLeft]() {
      return ui.Radius.zero;
    }
    get [_topRight]() {
      return ui.Radius.zero;
    }
    get [_bottomLeft]() {
      return ui.Radius.zero;
    }
    get [_bottomRight]() {
      return ui.Radius.zero;
    }
    subtract(other) {
      if (border_radius.BorderRadiusDirectional.is(other)) return this['-'](other);
      return super.subtract(other);
    }
    add(other) {
      if (border_radius.BorderRadiusDirectional.is(other)) return this['+'](other);
      return super.add(other);
    }
    ['-'](other) {
      return new border_radius.BorderRadiusDirectional.only({topStart: this.topStart['-'](other.topStart), topEnd: this.topEnd['-'](other.topEnd), bottomStart: this.bottomStart['-'](other.bottomStart), bottomEnd: this.bottomEnd['-'](other.bottomEnd)});
    }
    ['+'](other) {
      return new border_radius.BorderRadiusDirectional.only({topStart: this.topStart['+'](other.topStart), topEnd: this.topEnd['+'](other.topEnd), bottomStart: this.bottomStart['+'](other.bottomStart), bottomEnd: this.bottomEnd['+'](other.bottomEnd)});
    }
    _negate() {
      return new border_radius.BorderRadiusDirectional.only({topStart: this.topStart._negate(), topEnd: this.topEnd._negate(), bottomStart: this.bottomStart._negate(), bottomEnd: this.bottomEnd._negate()});
    }
    ['*'](other) {
      return new border_radius.BorderRadiusDirectional.only({topStart: this.topStart['*'](other), topEnd: this.topEnd['*'](other), bottomStart: this.bottomStart['*'](other), bottomEnd: this.bottomEnd['*'](other)});
    }
    ['/'](other) {
      return new border_radius.BorderRadiusDirectional.only({topStart: this.topStart['/'](other), topEnd: this.topEnd['/'](other), bottomStart: this.bottomStart['/'](other), bottomEnd: this.bottomEnd['/'](other)});
    }
    ['~/'](other) {
      return new border_radius.BorderRadiusDirectional.only({topStart: this.topStart['~/'](other), topEnd: this.topEnd['~/'](other), bottomStart: this.bottomStart['~/'](other), bottomEnd: this.bottomEnd['~/'](other)});
    }
    ['%'](other) {
      return new border_radius.BorderRadiusDirectional.only({topStart: this.topStart['%'](other), topEnd: this.topEnd['%'](other), bottomStart: this.bottomStart['%'](other), bottomEnd: this.bottomEnd['%'](other)});
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/border_radius.dart", 693, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return b['*'](t);
      if (b == null) return a['*'](1.0 - dart.notNull(t));
      return new border_radius.BorderRadiusDirectional.only({topStart: ui.Radius.lerp(a.topStart, b.topStart, t), topEnd: ui.Radius.lerp(a.topEnd, b.topEnd, t), bottomStart: ui.Radius.lerp(a.bottomStart, b.bottomStart, t), bottomEnd: ui.Radius.lerp(a.bottomEnd, b.bottomEnd, t)});
    }
    resolve(direction) {
      if (!(direction != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/border_radius.dart", 710, 12, "direction != null");
      switch (direction) {
        case C18 || CT.C18:
        {
          return new border_radius.BorderRadius.only({topLeft: this.topEnd, topRight: this.topStart, bottomLeft: this.bottomEnd, bottomRight: this.bottomStart});
        }
        case C19 || CT.C19:
        {
          return new border_radius.BorderRadius.only({topLeft: this.topStart, topRight: this.topEnd, bottomLeft: this.bottomStart, bottomRight: this.bottomEnd});
        }
      }
      return null;
    }
  };
  (border_radius.BorderRadiusDirectional.all = function(radius) {
    border_radius.BorderRadiusDirectional.only.call(this, {topStart: radius, topEnd: radius, bottomStart: radius, bottomEnd: radius});
  }).prototype = border_radius.BorderRadiusDirectional.prototype;
  (border_radius.BorderRadiusDirectional.circular = function(radius) {
    border_radius.BorderRadiusDirectional.all.call(this, new ui.Radius.circular(radius));
  }).prototype = border_radius.BorderRadiusDirectional.prototype;
  (border_radius.BorderRadiusDirectional.vertical = function(opts) {
    let top = opts && 'top' in opts ? opts.top : C12 || CT.C12;
    let bottom = opts && 'bottom' in opts ? opts.bottom : C12 || CT.C12;
    border_radius.BorderRadiusDirectional.only.call(this, {topStart: top, topEnd: top, bottomStart: bottom, bottomEnd: bottom});
  }).prototype = border_radius.BorderRadiusDirectional.prototype;
  (border_radius.BorderRadiusDirectional.horizontal = function(opts) {
    let start = opts && 'start' in opts ? opts.start : C12 || CT.C12;
    let end = opts && 'end' in opts ? opts.end : C12 || CT.C12;
    border_radius.BorderRadiusDirectional.only.call(this, {topStart: start, topEnd: end, bottomStart: start, bottomEnd: end});
  }).prototype = border_radius.BorderRadiusDirectional.prototype;
  (border_radius.BorderRadiusDirectional.only = function(opts) {
    let topStart = opts && 'topStart' in opts ? opts.topStart : C12 || CT.C12;
    let topEnd = opts && 'topEnd' in opts ? opts.topEnd : C12 || CT.C12;
    let bottomStart = opts && 'bottomStart' in opts ? opts.bottomStart : C12 || CT.C12;
    let bottomEnd = opts && 'bottomEnd' in opts ? opts.bottomEnd : C12 || CT.C12;
    this[topStart$] = topStart;
    this[topEnd$] = topEnd;
    this[bottomStart$] = bottomStart;
    this[bottomEnd$] = bottomEnd;
    border_radius.BorderRadiusDirectional.__proto__.new.call(this);
    ;
  }).prototype = border_radius.BorderRadiusDirectional.prototype;
  dart.addTypeTests(border_radius.BorderRadiusDirectional);
  dart.setMethodSignature(border_radius.BorderRadiusDirectional, () => ({
    __proto__: dart.getMethods(border_radius.BorderRadiusDirectional.__proto__),
    '-': dart.fnType(border_radius.BorderRadiusDirectional, [border_radius.BorderRadiusDirectional]),
    '+': dart.fnType(border_radius.BorderRadiusDirectional, [border_radius.BorderRadiusDirectional]),
    _negate: dart.fnType(border_radius.BorderRadiusDirectional, []),
    '*': dart.fnType(border_radius.BorderRadiusDirectional, [core.double]),
    '/': dart.fnType(border_radius.BorderRadiusDirectional, [core.double]),
    '~/': dart.fnType(border_radius.BorderRadiusDirectional, [core.double]),
    '%': dart.fnType(border_radius.BorderRadiusDirectional, [core.double]),
    resolve: dart.fnType(border_radius.BorderRadius, [ui.TextDirection])
  }));
  dart.setGetterSignature(border_radius.BorderRadiusDirectional, () => ({
    __proto__: dart.getGetters(border_radius.BorderRadiusDirectional.__proto__),
    [_topStart]: ui.Radius,
    [_topEnd]: ui.Radius,
    [_bottomStart]: ui.Radius,
    [_bottomEnd]: ui.Radius,
    [_topLeft]: ui.Radius,
    [_topRight]: ui.Radius,
    [_bottomLeft]: ui.Radius,
    [_bottomRight]: ui.Radius
  }));
  dart.setLibraryUri(border_radius.BorderRadiusDirectional, "package:flutter/src/painting/border_radius.dart");
  dart.setFieldSignature(border_radius.BorderRadiusDirectional, () => ({
    __proto__: dart.getFields(border_radius.BorderRadiusDirectional.__proto__),
    topStart: dart.finalFieldType(ui.Radius),
    topEnd: dart.finalFieldType(ui.Radius),
    bottomStart: dart.finalFieldType(ui.Radius),
    bottomEnd: dart.finalFieldType(ui.Radius)
  }));
  dart.defineLazy(border_radius.BorderRadiusDirectional, {
    /*border_radius.BorderRadiusDirectional.zero*/get zero() {
      return C37 || CT.C37;
    }
  });
  var _topLeft$ = dart.privateName(border_radius, "_MixedBorderRadius._topLeft");
  var _topRight$ = dart.privateName(border_radius, "_MixedBorderRadius._topRight");
  var _bottomLeft$ = dart.privateName(border_radius, "_MixedBorderRadius._bottomLeft");
  var _bottomRight$ = dart.privateName(border_radius, "_MixedBorderRadius._bottomRight");
  var _topStart$ = dart.privateName(border_radius, "_MixedBorderRadius._topStart");
  var _topEnd$ = dart.privateName(border_radius, "_MixedBorderRadius._topEnd");
  var _bottomStart$ = dart.privateName(border_radius, "_MixedBorderRadius._bottomStart");
  var _bottomEnd$ = dart.privateName(border_radius, "_MixedBorderRadius._bottomEnd");
  border_radius._MixedBorderRadius = class _MixedBorderRadius extends border_radius.BorderRadiusGeometry {
    get [_topLeft]() {
      return this[_topLeft$];
    }
    set [_topLeft](value) {
      super[_topLeft] = value;
    }
    get [_topRight]() {
      return this[_topRight$];
    }
    set [_topRight](value) {
      super[_topRight] = value;
    }
    get [_bottomLeft]() {
      return this[_bottomLeft$];
    }
    set [_bottomLeft](value) {
      super[_bottomLeft] = value;
    }
    get [_bottomRight]() {
      return this[_bottomRight$];
    }
    set [_bottomRight](value) {
      super[_bottomRight] = value;
    }
    get [_topStart]() {
      return this[_topStart$];
    }
    set [_topStart](value) {
      super[_topStart] = value;
    }
    get [_topEnd]() {
      return this[_topEnd$];
    }
    set [_topEnd](value) {
      super[_topEnd] = value;
    }
    get [_bottomStart]() {
      return this[_bottomStart$];
    }
    set [_bottomStart](value) {
      super[_bottomStart] = value;
    }
    get [_bottomEnd]() {
      return this[_bottomEnd$];
    }
    set [_bottomEnd](value) {
      super[_bottomEnd] = value;
    }
    _negate() {
      return new border_radius._MixedBorderRadius.new(this[_topLeft]._negate(), this[_topRight]._negate(), this[_bottomLeft]._negate(), this[_bottomRight]._negate(), this[_topStart]._negate(), this[_topEnd]._negate(), this[_bottomStart]._negate(), this[_bottomEnd]._negate());
    }
    ['*'](other) {
      return new border_radius._MixedBorderRadius.new(this[_topLeft]['*'](other), this[_topRight]['*'](other), this[_bottomLeft]['*'](other), this[_bottomRight]['*'](other), this[_topStart]['*'](other), this[_topEnd]['*'](other), this[_bottomStart]['*'](other), this[_bottomEnd]['*'](other));
    }
    ['/'](other) {
      return new border_radius._MixedBorderRadius.new(this[_topLeft]['/'](other), this[_topRight]['/'](other), this[_bottomLeft]['/'](other), this[_bottomRight]['/'](other), this[_topStart]['/'](other), this[_topEnd]['/'](other), this[_bottomStart]['/'](other), this[_bottomEnd]['/'](other));
    }
    ['~/'](other) {
      return new border_radius._MixedBorderRadius.new(this[_topLeft]['~/'](other), this[_topRight]['~/'](other), this[_bottomLeft]['~/'](other), this[_bottomRight]['~/'](other), this[_topStart]['~/'](other), this[_topEnd]['~/'](other), this[_bottomStart]['~/'](other), this[_bottomEnd]['~/'](other));
    }
    ['%'](other) {
      return new border_radius._MixedBorderRadius.new(this[_topLeft]['%'](other), this[_topRight]['%'](other), this[_bottomLeft]['%'](other), this[_bottomRight]['%'](other), this[_topStart]['%'](other), this[_topEnd]['%'](other), this[_bottomStart]['%'](other), this[_bottomEnd]['%'](other));
    }
    resolve(direction) {
      if (!(direction != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/border_radius.dart", 840, 12, "direction != null");
      switch (direction) {
        case C18 || CT.C18:
        {
          return new border_radius.BorderRadius.only({topLeft: this[_topLeft]['+'](this[_topEnd]), topRight: this[_topRight]['+'](this[_topStart]), bottomLeft: this[_bottomLeft]['+'](this[_bottomEnd]), bottomRight: this[_bottomRight]['+'](this[_bottomStart])});
        }
        case C19 || CT.C19:
        {
          return new border_radius.BorderRadius.only({topLeft: this[_topLeft]['+'](this[_topStart]), topRight: this[_topRight]['+'](this[_topEnd]), bottomLeft: this[_bottomLeft]['+'](this[_bottomStart]), bottomRight: this[_bottomRight]['+'](this[_bottomEnd])});
        }
      }
      return null;
    }
  };
  (border_radius._MixedBorderRadius.new = function(_topLeft, _topRight, _bottomLeft, _bottomRight, _topStart, _topEnd, _bottomStart, _bottomEnd) {
    this[_topLeft$] = _topLeft;
    this[_topRight$] = _topRight;
    this[_bottomLeft$] = _bottomLeft;
    this[_bottomRight$] = _bottomRight;
    this[_topStart$] = _topStart;
    this[_topEnd$] = _topEnd;
    this[_bottomStart$] = _bottomStart;
    this[_bottomEnd$] = _bottomEnd;
    border_radius._MixedBorderRadius.__proto__.new.call(this);
    ;
  }).prototype = border_radius._MixedBorderRadius.prototype;
  dart.addTypeTests(border_radius._MixedBorderRadius);
  dart.setMethodSignature(border_radius._MixedBorderRadius, () => ({
    __proto__: dart.getMethods(border_radius._MixedBorderRadius.__proto__),
    _negate: dart.fnType(border_radius._MixedBorderRadius, []),
    '*': dart.fnType(border_radius._MixedBorderRadius, [core.double]),
    '/': dart.fnType(border_radius._MixedBorderRadius, [core.double]),
    '~/': dart.fnType(border_radius._MixedBorderRadius, [core.double]),
    '%': dart.fnType(border_radius._MixedBorderRadius, [core.double]),
    resolve: dart.fnType(border_radius.BorderRadius, [ui.TextDirection])
  }));
  dart.setLibraryUri(border_radius._MixedBorderRadius, "package:flutter/src/painting/border_radius.dart");
  dart.setFieldSignature(border_radius._MixedBorderRadius, () => ({
    __proto__: dart.getFields(border_radius._MixedBorderRadius.__proto__),
    [_topLeft]: dart.finalFieldType(ui.Radius),
    [_topRight]: dart.finalFieldType(ui.Radius),
    [_bottomLeft]: dart.finalFieldType(ui.Radius),
    [_bottomRight]: dart.finalFieldType(ui.Radius),
    [_topStart]: dart.finalFieldType(ui.Radius),
    [_topEnd]: dart.finalFieldType(ui.Radius),
    [_bottomStart]: dart.finalFieldType(ui.Radius),
    [_bottomEnd]: dart.finalFieldType(ui.Radius)
  }));
  var bundle$ = dart.privateName(image_provider, "ImageConfiguration.bundle");
  var devicePixelRatio$ = dart.privateName(image_provider, "ImageConfiguration.devicePixelRatio");
  var locale$ = dart.privateName(image_provider, "ImageConfiguration.locale");
  var textDirection$ = dart.privateName(image_provider, "ImageConfiguration.textDirection");
  var size$ = dart.privateName(image_provider, "ImageConfiguration.size");
  var platform$ = dart.privateName(image_provider, "ImageConfiguration.platform");
  var C38;
  image_provider.ImageConfiguration = class ImageConfiguration extends core.Object {
    get bundle() {
      return this[bundle$];
    }
    set bundle(value) {
      super.bundle = value;
    }
    get devicePixelRatio() {
      return this[devicePixelRatio$];
    }
    set devicePixelRatio(value) {
      super.devicePixelRatio = value;
    }
    get locale() {
      return this[locale$];
    }
    set locale(value) {
      super.locale = value;
    }
    get textDirection() {
      return this[textDirection$];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get platform() {
      return this[platform$];
    }
    set platform(value) {
      super.platform = value;
    }
    copyWith(opts) {
      let t6, t6$, t6$0, t6$1, t6$2, t6$3;
      let bundle = opts && 'bundle' in opts ? opts.bundle : null;
      let devicePixelRatio = opts && 'devicePixelRatio' in opts ? opts.devicePixelRatio : null;
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let size = opts && 'size' in opts ? opts.size : null;
      let platform = opts && 'platform' in opts ? opts.platform : null;
      return new image_provider.ImageConfiguration.new({bundle: (t6 = bundle, t6 == null ? this.bundle : t6), devicePixelRatio: (t6$ = devicePixelRatio, t6$ == null ? this.devicePixelRatio : t6$), locale: (t6$0 = locale, t6$0 == null ? this.locale : t6$0), textDirection: (t6$1 = textDirection, t6$1 == null ? this.textDirection : t6$1), size: (t6$2 = size, t6$2 == null ? this.size : t6$2), platform: (t6$3 = platform, t6$3 == null ? this.platform : t6$3)});
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return image_provider.ImageConfiguration.is(other) && dart.equals(other.bundle, this.bundle) && other.devicePixelRatio == this.devicePixelRatio && dart.equals(other.locale, this.locale) && dart.equals(other.textDirection, this.textDirection) && dart.equals(other.size, this.size) && dart.equals(other.platform, this.platform);
    }
    get hashCode() {
      return ui.hashValues(this.bundle, this.devicePixelRatio, this.locale, this.size, this.platform);
    }
    toString() {
      let result = new core.StringBuffer.new();
      result.write("ImageConfiguration(");
      let hasArguments = false;
      if (this.bundle != null) {
        if (hasArguments) result.write(", ");
        result.write("bundle: " + dart.str(this.bundle));
        hasArguments = true;
      }
      if (this.devicePixelRatio != null) {
        if (hasArguments) result.write(", ");
        result.write("devicePixelRatio: " + this.devicePixelRatio[$toStringAsFixed](1));
        hasArguments = true;
      }
      if (this.locale != null) {
        if (hasArguments) result.write(", ");
        result.write("locale: " + dart.str(this.locale));
        hasArguments = true;
      }
      if (this.textDirection != null) {
        if (hasArguments) result.write(", ");
        result.write("textDirection: " + dart.str(this.textDirection));
        hasArguments = true;
      }
      if (this.size != null) {
        if (hasArguments) result.write(", ");
        result.write("size: " + dart.str(this.size));
        hasArguments = true;
      }
      if (this.platform != null) {
        if (hasArguments) result.write(", ");
        result.write("platform: " + dart.str(diagnostics.describeEnum(this.platform)));
        hasArguments = true;
      }
      result.write(")");
      return result.toString();
    }
  };
  (image_provider.ImageConfiguration.new = function(opts) {
    let bundle = opts && 'bundle' in opts ? opts.bundle : null;
    let devicePixelRatio = opts && 'devicePixelRatio' in opts ? opts.devicePixelRatio : null;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let size = opts && 'size' in opts ? opts.size : null;
    let platform = opts && 'platform' in opts ? opts.platform : null;
    this[bundle$] = bundle;
    this[devicePixelRatio$] = devicePixelRatio;
    this[locale$] = locale;
    this[textDirection$] = textDirection;
    this[size$] = size;
    this[platform$] = platform;
    ;
  }).prototype = image_provider.ImageConfiguration.prototype;
  dart.addTypeTests(image_provider.ImageConfiguration);
  dart.setMethodSignature(image_provider.ImageConfiguration, () => ({
    __proto__: dart.getMethods(image_provider.ImageConfiguration.__proto__),
    copyWith: dart.fnType(image_provider.ImageConfiguration, [], {bundle: asset_bundle.AssetBundle, devicePixelRatio: core.double, locale: ui.Locale, platform: platform.TargetPlatform, size: ui.Size, textDirection: ui.TextDirection}, {}),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(image_provider.ImageConfiguration, "package:flutter/src/painting/image_provider.dart");
  dart.setFieldSignature(image_provider.ImageConfiguration, () => ({
    __proto__: dart.getFields(image_provider.ImageConfiguration.__proto__),
    bundle: dart.finalFieldType(asset_bundle.AssetBundle),
    devicePixelRatio: dart.finalFieldType(core.double),
    locale: dart.finalFieldType(ui.Locale),
    textDirection: dart.finalFieldType(ui.TextDirection),
    size: dart.finalFieldType(ui.Size),
    platform: dart.finalFieldType(platform.TargetPlatform)
  }));
  dart.defineExtensionMethods(image_provider.ImageConfiguration, ['_equals', 'toString']);
  dart.defineExtensionAccessors(image_provider.ImageConfiguration, ['hashCode']);
  dart.defineLazy(image_provider.ImageConfiguration, {
    /*image_provider.ImageConfiguration.empty*/get empty() {
      return C38 || CT.C38;
    }
  });
  var _createErrorHandlerAndKey = dart.privateName(image_provider, "_createErrorHandlerAndKey");
  const _is_ImageProvider_default = Symbol('_is_ImageProvider_default');
  image_provider.ImageProvider$ = dart.generic(T => {
    var DiagnosticsPropertyOfT = () => (DiagnosticsPropertyOfT = dart.constFn(diagnostics.DiagnosticsProperty$(T)))();
    var TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    class ImageProvider extends core.Object {
      resolve(configuration) {
        if (!(configuration != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_provider.dart", 317, 12, "configuration != null");
        let stream = this.createStream(configuration);
        this[_createErrorHandlerAndKey](configuration, stream);
        return stream;
      }
      createStream(configuration) {
        return new image_stream.ImageStream.new();
      }
      [_createErrorHandlerAndKey](configuration, stream) {
        if (!(configuration != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_provider.dart", 336, 12, "configuration != null");
        if (!(stream != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_provider.dart", 337, 12, "stream != null");
        let obtainedKey = null;
        let didError = false;
        const handleError = (exception, stack) => {
          return async.async(dart.void, (function* handleError() {
            if (didError) {
              return;
            }
            didError = true;
            yield null;
            let imageCompleter = new image_provider._ErrorImageCompleter.new();
            stream.setCompleter(imageCompleter);
            imageCompleter.setError({exception: exception, stack: stack, context: new assertions.ErrorDescription.new("while resolving an image"), silent: true, informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfObject()).new((function*() {
                yield new (DiagnosticsPropertyOfImageProvider()).new("Image provider", this);
                yield new (DiagnosticsPropertyOfImageConfiguration()).new("Image configuration", configuration);
                yield new (DiagnosticsPropertyOfT()).new("Image key", obtainedKey, {defaultValue: null});
              }).bind(this)), VoidToIterableOfDiagnosticsPropertyOfObject())});
          }).bind(this));
        };
        dart.fn(handleError, dynamicAndStackTraceToFutureOfvoid());
        let dangerZone = async.Zone.current.fork({specification: new async._ZoneSpecification.new({handleUncaughtError: dart.fn((zone, delegate, parent, error, stackTrace) => {
              handleError(error, stackTrace);
            }, ZoneAndZoneDelegateAndZone__ToNull())})});
        dangerZone.runGuarded(dart.fn(() => {
          let key = null;
          try {
            key = this.obtainKey(configuration);
          } catch (e) {
            let error = dart.getThrown(e);
            let stackTrace = dart.stackTrace(e);
            handleError(error, stackTrace);
            return;
          }
          key.then(dart.void, dart.fn(key => {
            obtainedKey = key;
            try {
              this.resolveStreamForKey(configuration, stream, key, handleError);
            } catch (e) {
              let error = dart.getThrown(e);
              let stackTrace = dart.stackTrace(e);
              handleError(error, stackTrace);
            }
          }, TToNull())).catchError(handleError);
        }, VoidToNull()));
      }
      resolveStreamForKey(configuration, stream, key, handleError) {
        T._check(key);
        if (stream.completer != null) {
          let completer = binding$1.PaintingBinding.instance.imageCache.putIfAbsent(key, dart.fn(() => stream.completer, VoidToImageStreamCompleter()), {onError: handleError});
          if (!(completer == stream.completer)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_provider.dart", 423, 14, "identical(completer, stream.completer)");
          return;
        }
        let completer = binding$1.PaintingBinding.instance.imageCache.putIfAbsent(key, dart.fn(() => this.load(key, dart.bind(binding$1.PaintingBinding.instance, 'instantiateImageCodec')), VoidToImageStreamCompleter()), {onError: handleError});
        if (completer != null) {
          stream.setCompleter(completer);
        }
      }
      evict(opts) {
        let cache = opts && 'cache' in opts ? opts.cache : null;
        let configuration = opts && 'configuration' in opts ? opts.configuration : C38 || CT.C38;
        return async.async(core.bool, (function* evict() {
          cache == null ? cache = binding$1.imageCache : null;
          let key = (yield this.obtainKey(configuration));
          return cache.evict(key);
        }).bind(this));
      }
      toString() {
        return dart.str(object.objectRuntimeType(this, "ImageConfiguration")) + "()";
      }
    }
    (ImageProvider.new = function() {
      ;
    }).prototype = ImageProvider.prototype;
    dart.addTypeTests(ImageProvider);
    ImageProvider.prototype[_is_ImageProvider_default] = true;
    dart.setMethodSignature(ImageProvider, () => ({
      __proto__: dart.getMethods(ImageProvider.__proto__),
      resolve: dart.fnType(image_stream.ImageStream, [image_provider.ImageConfiguration]),
      createStream: dart.fnType(image_stream.ImageStream, [image_provider.ImageConfiguration]),
      [_createErrorHandlerAndKey]: dart.fnType(dart.void, [image_provider.ImageConfiguration, image_stream.ImageStream]),
      resolveStreamForKey: dart.fnType(dart.void, [image_provider.ImageConfiguration, image_stream.ImageStream, core.Object, dart.fnType(dart.void, [dart.dynamic, core.StackTrace])]),
      evict: dart.fnType(async.Future$(core.bool), [], {cache: image_cache.ImageCache, configuration: image_provider.ImageConfiguration}, {})
    }));
    dart.setLibraryUri(ImageProvider, "package:flutter/src/painting/image_provider.dart");
    dart.defineExtensionMethods(ImageProvider, ['toString']);
    return ImageProvider;
  });
  image_provider.ImageProvider = image_provider.ImageProvider$();
  dart.addTypeTests(image_provider.ImageProvider, _is_ImageProvider_default);
  var bundle$0 = dart.privateName(image_provider, "AssetBundleImageKey.bundle");
  var name$ = dart.privateName(image_provider, "AssetBundleImageKey.name");
  var scale$ = dart.privateName(image_provider, "AssetBundleImageKey.scale");
  image_provider.AssetBundleImageKey = class AssetBundleImageKey extends core.Object {
    get bundle() {
      return this[bundle$0];
    }
    set bundle(value) {
      super.bundle = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get scale() {
      return this[scale$];
    }
    set scale(value) {
      super.scale = value;
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return image_provider.AssetBundleImageKey.is(other) && dart.equals(other.bundle, this.bundle) && other.name == this.name && other.scale == this.scale;
    }
    get hashCode() {
      return ui.hashValues(this.bundle, this.name, this.scale);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "AssetBundleImageKey")) + "(bundle: " + dart.str(this.bundle) + ", name: \"" + dart.str(this.name) + "\", scale: " + dart.str(this.scale) + ")";
    }
  };
  (image_provider.AssetBundleImageKey.new = function(opts) {
    let bundle = opts && 'bundle' in opts ? opts.bundle : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let scale = opts && 'scale' in opts ? opts.scale : null;
    this[bundle$0] = bundle;
    this[name$] = name;
    this[scale$] = scale;
    if (!(bundle != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_provider.dart", 519, 15, "bundle != null");
    if (!(name != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_provider.dart", 520, 15, "name != null");
    if (!(scale != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_provider.dart", 521, 15, "scale != null");
    ;
  }).prototype = image_provider.AssetBundleImageKey.prototype;
  dart.addTypeTests(image_provider.AssetBundleImageKey);
  dart.setMethodSignature(image_provider.AssetBundleImageKey, () => ({
    __proto__: dart.getMethods(image_provider.AssetBundleImageKey.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(image_provider.AssetBundleImageKey, "package:flutter/src/painting/image_provider.dart");
  dart.setFieldSignature(image_provider.AssetBundleImageKey, () => ({
    __proto__: dart.getFields(image_provider.AssetBundleImageKey.__proto__),
    bundle: dart.finalFieldType(asset_bundle.AssetBundle),
    name: dart.finalFieldType(core.String),
    scale: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(image_provider.AssetBundleImageKey, ['_equals', 'toString']);
  dart.defineExtensionAccessors(image_provider.AssetBundleImageKey, ['hashCode']);
  var _loadAsync = dart.privateName(image_provider, "_loadAsync");
  image_provider.AssetBundleImageProvider = class AssetBundleImageProvider extends image_provider.ImageProvider$(image_provider.AssetBundleImageKey) {
    load(key, decode) {
      image_provider.AssetBundleImageKey._check(key);
      return new image_stream.MultiFrameImageStreamCompleter.new({codec: this[_loadAsync](key, decode), scale: key.scale, informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfObject()).new((function*() {
          yield new (DiagnosticsPropertyOfImageProvider()).new("Image provider", this);
          yield new (DiagnosticsPropertyOfAssetBundleImageKey()).new("Image key", key);
        }).bind(this)), VoidToIterableOfDiagnosticsPropertyOfObject())});
    }
    [_loadAsync](key, decode) {
      return async.async(ui.Codec, function* _loadAsync() {
        let data = (yield key.bundle.load(key.name));
        if (data == null) dart.throw("Unable to read data");
        return yield decode(data[$buffer][$asUint8List]());
      });
    }
  };
  (image_provider.AssetBundleImageProvider.new = function() {
    image_provider.AssetBundleImageProvider.__proto__.new.call(this);
    ;
  }).prototype = image_provider.AssetBundleImageProvider.prototype;
  dart.addTypeTests(image_provider.AssetBundleImageProvider);
  dart.setMethodSignature(image_provider.AssetBundleImageProvider, () => ({
    __proto__: dart.getMethods(image_provider.AssetBundleImageProvider.__proto__),
    load: dart.fnType(image_stream.ImageStreamCompleter, [core.Object, dart.fnType(async.Future$(ui.Codec), [typed_data.Uint8List], {cacheHeight: core.int, cacheWidth: core.int}, {})]),
    [_loadAsync]: dart.fnType(async.Future$(ui.Codec), [image_provider.AssetBundleImageKey, dart.fnType(async.Future$(ui.Codec), [typed_data.Uint8List], {cacheHeight: core.int, cacheWidth: core.int}, {})])
  }));
  dart.setLibraryUri(image_provider.AssetBundleImageProvider, "package:flutter/src/painting/image_provider.dart");
  var providerCacheKey$ = dart.privateName(image_provider, "_SizeAwareCacheKey.providerCacheKey");
  var width$0 = dart.privateName(image_provider, "_SizeAwareCacheKey.width");
  var height$ = dart.privateName(image_provider, "_SizeAwareCacheKey.height");
  image_provider._SizeAwareCacheKey = class _SizeAwareCacheKey extends core.Object {
    get providerCacheKey() {
      return this[providerCacheKey$];
    }
    set providerCacheKey(value) {
      super.providerCacheKey = value;
    }
    get width() {
      return this[width$0];
    }
    set width(value) {
      super.width = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return image_provider._SizeAwareCacheKey.is(other) && dart.equals(other.providerCacheKey, this.providerCacheKey) && other.width == this.width && other.height == this.height;
    }
    get hashCode() {
      return ui.hashValues(this.providerCacheKey, this.width, this.height);
    }
  };
  (image_provider._SizeAwareCacheKey.new = function(providerCacheKey, width, height) {
    this[providerCacheKey$] = providerCacheKey;
    this[width$0] = width;
    this[height$] = height;
    ;
  }).prototype = image_provider._SizeAwareCacheKey.prototype;
  dart.addTypeTests(image_provider._SizeAwareCacheKey);
  dart.setMethodSignature(image_provider._SizeAwareCacheKey, () => ({
    __proto__: dart.getMethods(image_provider._SizeAwareCacheKey.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(image_provider._SizeAwareCacheKey, "package:flutter/src/painting/image_provider.dart");
  dart.setFieldSignature(image_provider._SizeAwareCacheKey, () => ({
    __proto__: dart.getFields(image_provider._SizeAwareCacheKey.__proto__),
    providerCacheKey: dart.finalFieldType(core.Object),
    width: dart.finalFieldType(core.int),
    height: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(image_provider._SizeAwareCacheKey, ['_equals']);
  dart.defineExtensionAccessors(image_provider._SizeAwareCacheKey, ['hashCode']);
  var imageProvider$ = dart.privateName(image_provider, "ResizeImage.imageProvider");
  var width$1 = dart.privateName(image_provider, "ResizeImage.width");
  var height$0 = dart.privateName(image_provider, "ResizeImage.height");
  image_provider.ResizeImage = class ResizeImage extends image_provider.ImageProvider$(image_provider._SizeAwareCacheKey) {
    get imageProvider() {
      return this[imageProvider$];
    }
    set imageProvider(value) {
      super.imageProvider = value;
    }
    get width() {
      return this[width$1];
    }
    set width(value) {
      super.width = value;
    }
    get height() {
      return this[height$0];
    }
    set height(value) {
      super.height = value;
    }
    static resizeIfNeeded(cacheWidth, cacheHeight, provider) {
      if (cacheWidth != null || cacheHeight != null) {
        return new image_provider.ResizeImage.new(provider, {width: cacheWidth, height: cacheHeight});
      }
      return provider;
    }
    load(key, decode) {
      image_provider._SizeAwareCacheKey._check(key);
      let decodeResize = dart.fn((bytes, opts) => {
        let cacheHeight = opts && 'cacheHeight' in opts ? opts.cacheHeight : null;
        let cacheWidth = opts && 'cacheWidth' in opts ? opts.cacheWidth : null;
        if (!(cacheWidth == null && cacheHeight == null)) dart.assertFailed("ResizeImage cannot be composed with another ImageProvider that applies cacheWidth or cacheHeight.", "org-dartlang-app:///packages/flutter/src/painting/image_provider.dart", 657, 9, "cacheWidth == null && cacheHeight == null");
        return decode(bytes, {cacheWidth: this.width, cacheHeight: this.height});
      }, Uint8List__ToFutureOfCodec());
      return this.imageProvider.load(key.providerCacheKey, decodeResize);
    }
    obtainKey(configuration) {
      return async.async(image_provider._SizeAwareCacheKey, (function* obtainKey() {
        let providerCacheKey = (yield this.imageProvider.obtainKey(configuration));
        return new image_provider._SizeAwareCacheKey.new(providerCacheKey, this.width, this.height);
      }).bind(this));
    }
  };
  (image_provider.ResizeImage.new = function(imageProvider, opts) {
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    this[imageProvider$] = imageProvider;
    this[width$1] = width;
    this[height$0] = height;
    if (!(width != null || height != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_provider.dart", 630, 15, "width != null || height != null");
    image_provider.ResizeImage.__proto__.new.call(this);
    ;
  }).prototype = image_provider.ResizeImage.prototype;
  dart.addTypeTests(image_provider.ResizeImage);
  dart.setMethodSignature(image_provider.ResizeImage, () => ({
    __proto__: dart.getMethods(image_provider.ResizeImage.__proto__),
    load: dart.fnType(image_stream.ImageStreamCompleter, [core.Object, dart.fnType(async.Future$(ui.Codec), [typed_data.Uint8List], {cacheHeight: core.int, cacheWidth: core.int}, {})]),
    obtainKey: dart.fnType(async.Future$(image_provider._SizeAwareCacheKey), [image_provider.ImageConfiguration])
  }));
  dart.setLibraryUri(image_provider.ResizeImage, "package:flutter/src/painting/image_provider.dart");
  dart.setFieldSignature(image_provider.ResizeImage, () => ({
    __proto__: dart.getFields(image_provider.ResizeImage.__proto__),
    imageProvider: dart.finalFieldType(image_provider.ImageProvider),
    width: dart.finalFieldType(core.int),
    height: dart.finalFieldType(core.int)
  }));
  image_provider.NetworkImage = class NetworkImage extends image_provider.ImageProvider {};
  dart.addTypeTests(image_provider.NetworkImage);
  dart.setLibraryUri(image_provider.NetworkImage, "package:flutter/src/painting/image_provider.dart");
  var file$ = dart.privateName(image_provider, "FileImage.file");
  var scale$0 = dart.privateName(image_provider, "FileImage.scale");
  image_provider.FileImage = class FileImage extends image_provider.ImageProvider {
    get file() {
      return this[file$];
    }
    set file(value) {
      super.file = value;
    }
    get scale() {
      return this[scale$0];
    }
    set scale(value) {
      super.scale = value;
    }
    obtainKey(configuration) {
      return new (SynchronousFutureOfFileImage()).new(this);
    }
    load(key, decode) {
      image_provider.FileImage._check(key);
      return new image_stream.MultiFrameImageStreamCompleter.new({codec: this[_loadAsync](key, decode), scale: key.scale, informationCollector: dart.fn(() => new (SyncIterableOfErrorDescription()).new((function*() {
          let t8;
          yield new assertions.ErrorDescription.new("Path: " + dart.str((t8 = this.file, t8 == null ? null : t8.path)));
        }).bind(this)), VoidToIterableOfErrorDescription())});
    }
    [_loadAsync](key, decode) {
      return async.async(ui.Codec, (function* _loadAsync() {
        if (!dart.equals(key, this)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_provider.dart", 745, 12, "key == this");
        let bytes = (yield this.file.readAsBytes());
        if (bytes[$lengthInBytes] === 0) dart.throw(new core.StateError.new(dart.str(this.file) + " is empty and cannot be loaded as an image."));
        return yield decode(bytes);
      }).bind(this));
    }
    _equals(other) {
      if (other == null) return false;
      let t8, t8$;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return image_provider.FileImage.is(other) && (t8 = other.file, t8 == null ? null : t8.path) == (t8$ = this.file, t8$ == null ? null : t8$.path) && other.scale == this.scale;
    }
    get hashCode() {
      let t8;
      return ui.hashValues((t8 = this.file, t8 == null ? null : t8.path), this.scale);
    }
    toString() {
      let t8;
      return dart.str(object.objectRuntimeType(this, "FileImage")) + "(\"" + dart.str((t8 = this.file, t8 == null ? null : t8.path)) + "\", scale: " + dart.str(this.scale) + ")";
    }
  };
  (image_provider.FileImage.new = function(file, opts) {
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    this[file$] = file;
    this[scale$0] = scale;
    if (!(file != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_provider.dart", 719, 14, "file != null");
    if (!(scale != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_provider.dart", 720, 14, "scale != null");
    image_provider.FileImage.__proto__.new.call(this);
    ;
  }).prototype = image_provider.FileImage.prototype;
  dart.addTypeTests(image_provider.FileImage);
  dart.setMethodSignature(image_provider.FileImage, () => ({
    __proto__: dart.getMethods(image_provider.FileImage.__proto__),
    obtainKey: dart.fnType(async.Future$(image_provider.FileImage), [image_provider.ImageConfiguration]),
    load: dart.fnType(image_stream.ImageStreamCompleter, [core.Object, dart.fnType(async.Future$(ui.Codec), [typed_data.Uint8List], {cacheHeight: core.int, cacheWidth: core.int}, {})]),
    [_loadAsync]: dart.fnType(async.Future$(ui.Codec), [image_provider.FileImage, dart.fnType(async.Future$(ui.Codec), [typed_data.Uint8List], {cacheHeight: core.int, cacheWidth: core.int}, {})]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(image_provider.FileImage, "package:flutter/src/painting/image_provider.dart");
  dart.setFieldSignature(image_provider.FileImage, () => ({
    __proto__: dart.getFields(image_provider.FileImage.__proto__),
    file: dart.finalFieldType(io.File),
    scale: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(image_provider.FileImage, ['_equals', 'toString']);
  dart.defineExtensionAccessors(image_provider.FileImage, ['hashCode']);
  var bytes$ = dart.privateName(image_provider, "MemoryImage.bytes");
  var scale$1 = dart.privateName(image_provider, "MemoryImage.scale");
  image_provider.MemoryImage = class MemoryImage extends image_provider.ImageProvider {
    get bytes() {
      return this[bytes$];
    }
    set bytes(value) {
      super.bytes = value;
    }
    get scale() {
      return this[scale$1];
    }
    set scale(value) {
      super.scale = value;
    }
    obtainKey(configuration) {
      return new (SynchronousFutureOfMemoryImage()).new(this);
    }
    load(key, decode) {
      image_provider.MemoryImage._check(key);
      return new image_stream.MultiFrameImageStreamCompleter.new({codec: this[_loadAsync](key, decode), scale: key.scale});
    }
    [_loadAsync](key, decode) {
      if (!dart.equals(key, this)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_provider.dart", 810, 12, "key == this");
      return decode(this.bytes);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return image_provider.MemoryImage.is(other) && dart.equals(other.bytes, this.bytes) && other.scale == this.scale;
    }
    get hashCode() {
      return ui.hashValues(dart.hashCode(this.bytes), this.scale);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "MemoryImage")) + "(" + dart.str(diagnostics.describeIdentity(this.bytes)) + ", scale: " + dart.str(this.scale) + ")";
    }
  };
  (image_provider.MemoryImage.new = function(bytes, opts) {
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    this[bytes$] = bytes;
    this[scale$1] = scale;
    if (!(bytes != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_provider.dart", 787, 14, "bytes != null");
    if (!(scale != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_provider.dart", 788, 14, "scale != null");
    image_provider.MemoryImage.__proto__.new.call(this);
    ;
  }).prototype = image_provider.MemoryImage.prototype;
  dart.addTypeTests(image_provider.MemoryImage);
  dart.setMethodSignature(image_provider.MemoryImage, () => ({
    __proto__: dart.getMethods(image_provider.MemoryImage.__proto__),
    obtainKey: dart.fnType(async.Future$(image_provider.MemoryImage), [image_provider.ImageConfiguration]),
    load: dart.fnType(image_stream.ImageStreamCompleter, [core.Object, dart.fnType(async.Future$(ui.Codec), [typed_data.Uint8List], {cacheHeight: core.int, cacheWidth: core.int}, {})]),
    [_loadAsync]: dart.fnType(async.Future$(ui.Codec), [image_provider.MemoryImage, dart.fnType(async.Future$(ui.Codec), [typed_data.Uint8List], {cacheHeight: core.int, cacheWidth: core.int}, {})]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(image_provider.MemoryImage, "package:flutter/src/painting/image_provider.dart");
  dart.setFieldSignature(image_provider.MemoryImage, () => ({
    __proto__: dart.getFields(image_provider.MemoryImage.__proto__),
    bytes: dart.finalFieldType(typed_data.Uint8List),
    scale: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(image_provider.MemoryImage, ['_equals', 'toString']);
  dart.defineExtensionAccessors(image_provider.MemoryImage, ['hashCode']);
  var assetName$ = dart.privateName(image_provider, "ExactAssetImage.assetName");
  var scale$2 = dart.privateName(image_provider, "ExactAssetImage.scale");
  var bundle$1 = dart.privateName(image_provider, "ExactAssetImage.bundle");
  var package$ = dart.privateName(image_provider, "ExactAssetImage.package");
  image_provider.ExactAssetImage = class ExactAssetImage extends image_provider.AssetBundleImageProvider {
    get assetName() {
      return this[assetName$];
    }
    set assetName(value) {
      super.assetName = value;
    }
    get scale() {
      return this[scale$2];
    }
    set scale(value) {
      super.scale = value;
    }
    get bundle() {
      return this[bundle$1];
    }
    set bundle(value) {
      super.bundle = value;
    }
    get package() {
      return this[package$];
    }
    set package(value) {
      super.package = value;
    }
    get keyName() {
      return this.package == null ? this.assetName : "packages/" + dart.str(this.package) + "/" + dart.str(this.assetName);
    }
    obtainKey(configuration) {
      let t8, t8$;
      return new (SynchronousFutureOfAssetBundleImageKey()).new(new image_provider.AssetBundleImageKey.new({bundle: (t8$ = (t8 = this.bundle, t8 == null ? configuration.bundle : t8), t8$ == null ? asset_bundle.rootBundle : t8$), name: this.keyName, scale: this.scale}));
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return image_provider.ExactAssetImage.is(other) && other.keyName == this.keyName && other.scale == this.scale && dart.equals(other.bundle, this.bundle);
    }
    get hashCode() {
      return ui.hashValues(this.keyName, this.scale, this.bundle);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "ExactAssetImage")) + "(name: \"" + dart.str(this.keyName) + "\", scale: " + dart.str(this.scale) + ", bundle: " + dart.str(this.bundle) + ")";
    }
  };
  (image_provider.ExactAssetImage.new = function(assetName, opts) {
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    let bundle = opts && 'bundle' in opts ? opts.bundle : null;
    let $package = opts && 'package' in opts ? opts.package : null;
    this[assetName$] = assetName;
    this[scale$2] = scale;
    this[bundle$1] = bundle;
    this[package$] = $package;
    if (!(assetName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_provider.dart", 916, 15, "assetName != null");
    if (!(scale != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_provider.dart", 917, 15, "scale != null");
    image_provider.ExactAssetImage.__proto__.new.call(this);
    ;
  }).prototype = image_provider.ExactAssetImage.prototype;
  dart.addTypeTests(image_provider.ExactAssetImage);
  dart.setMethodSignature(image_provider.ExactAssetImage, () => ({
    __proto__: dart.getMethods(image_provider.ExactAssetImage.__proto__),
    obtainKey: dart.fnType(async.Future$(image_provider.AssetBundleImageKey), [image_provider.ImageConfiguration]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(image_provider.ExactAssetImage, () => ({
    __proto__: dart.getGetters(image_provider.ExactAssetImage.__proto__),
    keyName: core.String
  }));
  dart.setLibraryUri(image_provider.ExactAssetImage, "package:flutter/src/painting/image_provider.dart");
  dart.setFieldSignature(image_provider.ExactAssetImage, () => ({
    __proto__: dart.getFields(image_provider.ExactAssetImage.__proto__),
    assetName: dart.finalFieldType(core.String),
    scale: dart.finalFieldType(core.double),
    bundle: dart.finalFieldType(asset_bundle.AssetBundle),
    package: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(image_provider.ExactAssetImage, ['_equals', 'toString']);
  dart.defineExtensionAccessors(image_provider.ExactAssetImage, ['hashCode']);
  var _listeners = dart.privateName(image_stream, "_listeners");
  var _currentImage = dart.privateName(image_stream, "_currentImage");
  var _currentError = dart.privateName(image_stream, "_currentError");
  image_stream.ImageStreamCompleter = class ImageStreamCompleter extends diagnostics.Diagnosticable {
    get hasListeners() {
      return this[_listeners][$isNotEmpty];
    }
    addListener(listener) {
      this[_listeners][$add](listener);
      if (this[_currentImage] != null) {
        try {
          listener.onImage(this[_currentImage], true);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          this.reportError({context: new assertions.ErrorDescription.new("by a synchronously-called image listener"), exception: exception, stack: stack});
        }
      }
      if (this[_currentError] != null && listener.onError != null) {
        try {
          listener.onError(this[_currentError].exception, this[_currentError].stack);
        } catch (e$) {
          let exception = dart.getThrown(e$);
          let stack = dart.stackTrace(e$);
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, library: "image resource service", context: new assertions.ErrorDescription.new("by a synchronously-called image error listener"), stack: stack}));
        }
      }
    }
    removeListener(listener) {
      for (let i = 0; i < dart.notNull(this[_listeners][$length]); i = i + 1) {
        if (dart.equals(this[_listeners][$_get](i), listener)) {
          this[_listeners][$removeAt](i);
          break;
        }
      }
    }
    setImage(image) {
      this[_currentImage] = image;
      if (dart.test(this[_listeners][$isEmpty])) return;
      let localListeners = ListOfImageStreamListener().from(this[_listeners]);
      for (let listener of localListeners) {
        try {
          listener.onImage(image, false);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          this.reportError({context: new assertions.ErrorDescription.new("by an image listener"), exception: exception, stack: stack});
        }
      }
    }
    reportError(opts) {
      let context = opts && 'context' in opts ? opts.context : null;
      let exception = opts && 'exception' in opts ? opts.exception : null;
      let stack = opts && 'stack' in opts ? opts.stack : null;
      let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
      let silent = opts && 'silent' in opts ? opts.silent : false;
      this[_currentError] = new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "image resource service", context: context, informationCollector: informationCollector, silent: silent});
      let localErrorListeners = this[_listeners][$map](dynamicAndStackTraceTovoid(), dart.fn(listener => listener.onError, ImageStreamListenerToFn()))[$where](dart.fn(errorListener => errorListener != null, FnTobool()))[$toList]();
      if (dart.test(localErrorListeners[$isEmpty])) {
        assertions.FlutterError.reportError(this[_currentError]);
      } else {
        for (let errorListener of localErrorListeners) {
          try {
            errorListener(exception, stack);
          } catch (e) {
            let exception = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({context: new assertions.ErrorDescription.new("when reporting an error to an image listener"), library: "image resource service", exception: exception, stack: stack}));
          }
        }
      }
    }
    debugFillProperties(description) {
      let t12, t12$;
      super.debugFillProperties(description);
      description.add(new (DiagnosticsPropertyOfImageInfo()).new("current", this[_currentImage], {ifNull: "unresolved", showName: false}));
      description.add(new (ObjectFlagPropertyOfListOfImageStreamListener()).new("listeners", this[_listeners], {ifPresent: dart.str((t12 = this[_listeners], t12 == null ? null : t12[$length])) + " listener" + ((t12$ = this[_listeners], t12$ == null ? null : t12$[$length]) === 1 ? "" : "s")}));
    }
  };
  (image_stream.ImageStreamCompleter.new = function() {
    this[_listeners] = JSArrayOfImageStreamListener().of([]);
    this[_currentImage] = null;
    this[_currentError] = null;
    image_stream.ImageStreamCompleter.__proto__.new.call(this);
    ;
  }).prototype = image_stream.ImageStreamCompleter.prototype;
  dart.addTypeTests(image_stream.ImageStreamCompleter);
  dart.setMethodSignature(image_stream.ImageStreamCompleter, () => ({
    __proto__: dart.getMethods(image_stream.ImageStreamCompleter.__proto__),
    addListener: dart.fnType(dart.void, [image_stream.ImageStreamListener]),
    removeListener: dart.fnType(dart.void, [image_stream.ImageStreamListener]),
    setImage: dart.fnType(dart.void, [image_stream.ImageInfo]),
    reportError: dart.fnType(dart.void, [], {context: diagnostics.DiagnosticsNode, exception: dart.dynamic, informationCollector: dart.fnType(core.Iterable$(diagnostics.DiagnosticsNode), []), silent: core.bool, stack: core.StackTrace}, {})
  }));
  dart.setGetterSignature(image_stream.ImageStreamCompleter, () => ({
    __proto__: dart.getGetters(image_stream.ImageStreamCompleter.__proto__),
    hasListeners: core.bool
  }));
  dart.setLibraryUri(image_stream.ImageStreamCompleter, "package:flutter/src/painting/image_stream.dart");
  dart.setFieldSignature(image_stream.ImageStreamCompleter, () => ({
    __proto__: dart.getFields(image_stream.ImageStreamCompleter.__proto__),
    [_listeners]: dart.finalFieldType(core.List$(image_stream.ImageStreamListener)),
    [_currentImage]: dart.fieldType(image_stream.ImageInfo),
    [_currentError]: dart.fieldType(assertions.FlutterErrorDetails)
  }));
  image_provider._ErrorImageCompleter = class _ErrorImageCompleter extends image_stream.ImageStreamCompleter {
    setError(opts) {
      let context = opts && 'context' in opts ? opts.context : null;
      let exception = opts && 'exception' in opts ? opts.exception : null;
      let stack = opts && 'stack' in opts ? opts.stack : null;
      let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
      let silent = opts && 'silent' in opts ? opts.silent : false;
      this.reportError({context: context, exception: exception, stack: stack, informationCollector: informationCollector, silent: silent});
    }
  };
  (image_provider._ErrorImageCompleter.new = function() {
    image_provider._ErrorImageCompleter.__proto__.new.call(this);
    ;
  }).prototype = image_provider._ErrorImageCompleter.prototype;
  dart.addTypeTests(image_provider._ErrorImageCompleter);
  dart.setMethodSignature(image_provider._ErrorImageCompleter, () => ({
    __proto__: dart.getMethods(image_provider._ErrorImageCompleter.__proto__),
    setError: dart.fnType(dart.void, [], {context: diagnostics.DiagnosticsNode, exception: dart.dynamic, informationCollector: dart.fnType(core.Iterable$(diagnostics.DiagnosticsNode), []), silent: core.bool, stack: core.StackTrace}, {})
  }));
  dart.setLibraryUri(image_provider._ErrorImageCompleter, "package:flutter/src/painting/image_provider.dart");
  var _message = dart.privateName(image_provider, "_message");
  var statusCode$ = dart.privateName(image_provider, "NetworkImageLoadException.statusCode");
  var uri$ = dart.privateName(image_provider, "NetworkImageLoadException.uri");
  image_provider.NetworkImageLoadException = class NetworkImageLoadException extends core.Object {
    get statusCode() {
      return this[statusCode$];
    }
    set statusCode(value) {
      super.statusCode = value;
    }
    get uri() {
      return this[uri$];
    }
    set uri(value) {
      super.uri = value;
    }
    toString() {
      return this[_message];
    }
  };
  (image_provider.NetworkImageLoadException.new = function(opts) {
    let statusCode = opts && 'statusCode' in opts ? opts.statusCode : null;
    let uri = opts && 'uri' in opts ? opts.uri : null;
    this[statusCode$] = statusCode;
    this[uri$] = uri;
    if (!(uri != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_provider.dart", 995, 16, "uri != null");
    if (!(statusCode != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_provider.dart", 996, 16, "statusCode != null");
    this[_message] = "HTTP request failed, statusCode: " + dart.str(statusCode) + ", " + dart.str(uri);
    ;
  }).prototype = image_provider.NetworkImageLoadException.prototype;
  dart.addTypeTests(image_provider.NetworkImageLoadException);
  image_provider.NetworkImageLoadException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(image_provider.NetworkImageLoadException, "package:flutter/src/painting/image_provider.dart");
  dart.setFieldSignature(image_provider.NetworkImageLoadException, () => ({
    __proto__: dart.getFields(image_provider.NetworkImageLoadException.__proto__),
    statusCode: dart.finalFieldType(core.int),
    [_message]: dart.finalFieldType(core.String),
    uri: dart.finalFieldType(core.Uri)
  }));
  dart.defineExtensionMethods(image_provider.NetworkImageLoadException, ['toString']);
  var image$0 = dart.privateName(image_stream, "ImageInfo.image");
  var scale$3 = dart.privateName(image_stream, "ImageInfo.scale");
  image_stream.ImageInfo = class ImageInfo extends core.Object {
    get image() {
      return this[image$0];
    }
    set image(value) {
      super.image = value;
    }
    get scale() {
      return this[scale$3];
    }
    set scale(value) {
      super.scale = value;
    }
    toString() {
      return dart.str(this.image) + " @ " + dart.str(debug.debugFormatDouble(this.scale)) + "x";
    }
    get hashCode() {
      return ui.hashValues(this.image, this.scale);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return image_stream.ImageInfo.is(other) && dart.equals(other.image, this.image) && other.scale == this.scale;
    }
  };
  (image_stream.ImageInfo.new = function(opts) {
    let image = opts && 'image' in opts ? opts.image : null;
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    this[image$0] = image;
    this[scale$3] = scale;
    if (!(image != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_stream.dart", 22, 14, "image != null");
    if (!(scale != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_stream.dart", 23, 14, "scale != null");
    ;
  }).prototype = image_stream.ImageInfo.prototype;
  dart.addTypeTests(image_stream.ImageInfo);
  dart.setMethodSignature(image_stream.ImageInfo, () => ({
    __proto__: dart.getMethods(image_stream.ImageInfo.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(image_stream.ImageInfo, "package:flutter/src/painting/image_stream.dart");
  dart.setFieldSignature(image_stream.ImageInfo, () => ({
    __proto__: dart.getFields(image_stream.ImageInfo.__proto__),
    image: dart.finalFieldType(ui.Image),
    scale: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(image_stream.ImageInfo, ['toString', '_equals']);
  dart.defineExtensionAccessors(image_stream.ImageInfo, ['hashCode']);
  var onImage$ = dart.privateName(image_stream, "ImageStreamListener.onImage");
  var onChunk$ = dart.privateName(image_stream, "ImageStreamListener.onChunk");
  var onError$ = dart.privateName(image_stream, "ImageStreamListener.onError");
  image_stream.ImageStreamListener = class ImageStreamListener extends core.Object {
    get onImage() {
      return this[onImage$];
    }
    set onImage(value) {
      super.onImage = value;
    }
    get onChunk() {
      return this[onChunk$];
    }
    set onChunk(value) {
      super.onChunk = value;
    }
    get onError() {
      return this[onError$];
    }
    set onError(value) {
      super.onError = value;
    }
    get hashCode() {
      return ui.hashValues(this.onImage, this.onChunk, this.onError);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return image_stream.ImageStreamListener.is(other) && dart.equals(other.onImage, this.onImage) && dart.equals(other.onChunk, this.onChunk) && dart.equals(other.onError, this.onError);
    }
  };
  (image_stream.ImageStreamListener.new = function(onImage, opts) {
    let onChunk = opts && 'onChunk' in opts ? opts.onChunk : null;
    let onError = opts && 'onError' in opts ? opts.onError : null;
    this[onImage$] = onImage;
    this[onChunk$] = onChunk;
    this[onError$] = onError;
    if (!(onImage != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_stream.dart", 78, 15, "onImage != null");
    ;
  }).prototype = image_stream.ImageStreamListener.prototype;
  dart.addTypeTests(image_stream.ImageStreamListener);
  dart.setMethodSignature(image_stream.ImageStreamListener, () => ({
    __proto__: dart.getMethods(image_stream.ImageStreamListener.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(image_stream.ImageStreamListener, "package:flutter/src/painting/image_stream.dart");
  dart.setFieldSignature(image_stream.ImageStreamListener, () => ({
    __proto__: dart.getFields(image_stream.ImageStreamListener.__proto__),
    onImage: dart.finalFieldType(dart.fnType(dart.void, [image_stream.ImageInfo, core.bool])),
    onChunk: dart.finalFieldType(dart.fnType(dart.void, [image_stream.ImageChunkEvent])),
    onError: dart.finalFieldType(dart.fnType(dart.void, [dart.dynamic, core.StackTrace]))
  }));
  dart.defineExtensionMethods(image_stream.ImageStreamListener, ['_equals']);
  dart.defineExtensionAccessors(image_stream.ImageStreamListener, ['hashCode']);
  var cumulativeBytesLoaded$ = dart.privateName(image_stream, "ImageChunkEvent.cumulativeBytesLoaded");
  var expectedTotalBytes$ = dart.privateName(image_stream, "ImageChunkEvent.expectedTotalBytes");
  image_stream.ImageChunkEvent = class ImageChunkEvent extends diagnostics.Diagnosticable {
    get cumulativeBytesLoaded() {
      return this[cumulativeBytesLoaded$];
    }
    set cumulativeBytesLoaded(value) {
      super.cumulativeBytesLoaded = value;
    }
    get expectedTotalBytes() {
      return this[expectedTotalBytes$];
    }
    set expectedTotalBytes(value) {
      super.expectedTotalBytes = value;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.IntProperty.new("cumulativeBytesLoaded", this.cumulativeBytesLoaded));
      properties.add(new diagnostics.IntProperty.new("expectedTotalBytes", this.expectedTotalBytes));
    }
  };
  (image_stream.ImageChunkEvent.new = function(opts) {
    let cumulativeBytesLoaded = opts && 'cumulativeBytesLoaded' in opts ? opts.cumulativeBytesLoaded : null;
    let expectedTotalBytes = opts && 'expectedTotalBytes' in opts ? opts.expectedTotalBytes : null;
    this[cumulativeBytesLoaded$] = cumulativeBytesLoaded;
    this[expectedTotalBytes$] = expectedTotalBytes;
    if (!(dart.notNull(cumulativeBytesLoaded) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_stream.dart", 167, 15, "cumulativeBytesLoaded >= 0");
    if (!(expectedTotalBytes == null || dart.notNull(expectedTotalBytes) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_stream.dart", 168, 15, "expectedTotalBytes == null || expectedTotalBytes >= 0");
    image_stream.ImageChunkEvent.__proto__.new.call(this);
    ;
  }).prototype = image_stream.ImageChunkEvent.prototype;
  dart.addTypeTests(image_stream.ImageChunkEvent);
  dart.setLibraryUri(image_stream.ImageChunkEvent, "package:flutter/src/painting/image_stream.dart");
  dart.setFieldSignature(image_stream.ImageChunkEvent, () => ({
    __proto__: dart.getFields(image_stream.ImageChunkEvent.__proto__),
    cumulativeBytesLoaded: dart.finalFieldType(core.int),
    expectedTotalBytes: dart.finalFieldType(core.int)
  }));
  var _completer = dart.privateName(image_stream, "_completer");
  image_stream.ImageStream = class ImageStream extends diagnostics.Diagnosticable {
    get completer() {
      return this[_completer];
    }
    setCompleter(value) {
      if (!(this[_completer] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_stream.dart", 233, 12, "_completer == null");
      this[_completer] = value;
      if (this[_listeners] != null) {
        let initialListeners = this[_listeners];
        this[_listeners] = null;
        initialListeners[$forEach](dart.bind(this[_completer], 'addListener'));
      }
    }
    addListener(listener) {
      if (this[_completer] != null) return this[_completer].addListener(listener);
      this[_listeners] == null ? this[_listeners] = JSArrayOfImageStreamListener().of([]) : null;
      this[_listeners][$add](listener);
    }
    removeListener(listener) {
      if (this[_completer] != null) return this[_completer].removeListener(listener);
      if (!(this[_listeners] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_stream.dart", 274, 12, "_listeners != null");
      for (let i = 0; i < dart.notNull(this[_listeners][$length]); i = i + 1) {
        if (dart.equals(this[_listeners][$_get](i), listener)) {
          this[_listeners][$removeAt](i);
          break;
        }
      }
    }
    get key() {
      let t12;
      t12 = this[_completer];
      return t12 == null ? this : t12;
    }
    debugFillProperties(properties) {
      let t12, t12$, t12$0, t12$1;
      super.debugFillProperties(properties);
      properties.add(new (ObjectFlagPropertyOfImageStreamCompleter()).new("completer", this[_completer], {ifPresent: (t12 = this[_completer], t12 == null ? null : t12.toStringShort()), ifNull: "unresolved"}));
      properties.add(new (ObjectFlagPropertyOfListOfImageStreamListener()).new("listeners", this[_listeners], {ifPresent: dart.str((t12$ = this[_listeners], t12$ == null ? null : t12$[$length])) + " listener" + ((t12$0 = this[_listeners], t12$0 == null ? null : t12$0[$length]) === 1 ? "" : "s"), ifNull: "no listeners", level: this[_completer] != null ? diagnostics.DiagnosticLevel.hidden : diagnostics.DiagnosticLevel.info}));
      t12$1 = this[_completer];
      t12$1 == null ? null : t12$1.debugFillProperties(properties);
    }
  };
  (image_stream.ImageStream.new = function() {
    this[_completer] = null;
    this[_listeners] = null;
    image_stream.ImageStream.__proto__.new.call(this);
    ;
  }).prototype = image_stream.ImageStream.prototype;
  dart.addTypeTests(image_stream.ImageStream);
  dart.setMethodSignature(image_stream.ImageStream, () => ({
    __proto__: dart.getMethods(image_stream.ImageStream.__proto__),
    setCompleter: dart.fnType(dart.void, [image_stream.ImageStreamCompleter]),
    addListener: dart.fnType(dart.void, [image_stream.ImageStreamListener]),
    removeListener: dart.fnType(dart.void, [image_stream.ImageStreamListener])
  }));
  dart.setGetterSignature(image_stream.ImageStream, () => ({
    __proto__: dart.getGetters(image_stream.ImageStream.__proto__),
    completer: image_stream.ImageStreamCompleter,
    key: core.Object
  }));
  dart.setLibraryUri(image_stream.ImageStream, "package:flutter/src/painting/image_stream.dart");
  dart.setFieldSignature(image_stream.ImageStream, () => ({
    __proto__: dart.getFields(image_stream.ImageStream.__proto__),
    [_completer]: dart.fieldType(image_stream.ImageStreamCompleter),
    [_listeners]: dart.fieldType(core.List$(image_stream.ImageStreamListener))
  }));
  image_stream.OneFrameImageStreamCompleter = class OneFrameImageStreamCompleter extends image_stream.ImageStreamCompleter {};
  (image_stream.OneFrameImageStreamCompleter.new = function(image, opts) {
    let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
    if (!(image != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_stream.dart", 522, 16, "image != null");
    image_stream.OneFrameImageStreamCompleter.__proto__.new.call(this);
    image.then(dart.void, dart.bind(this, 'setImage'), {onError: dart.fn((error, stack) => {
        this.reportError({context: new assertions.ErrorDescription.new("resolving a single-frame image stream"), exception: error, stack: stack, informationCollector: informationCollector, silent: true});
      }, dynamicAndStackTraceToNull())});
  }).prototype = image_stream.OneFrameImageStreamCompleter.prototype;
  dart.addTypeTests(image_stream.OneFrameImageStreamCompleter);
  dart.setLibraryUri(image_stream.OneFrameImageStreamCompleter, "package:flutter/src/painting/image_stream.dart");
  var _codec = dart.privateName(image_stream, "_codec");
  var _nextFrame = dart.privateName(image_stream, "_nextFrame");
  var _shownTimestamp = dart.privateName(image_stream, "_shownTimestamp");
  var _frameDuration = dart.privateName(image_stream, "_frameDuration");
  var _framesEmitted = dart.privateName(image_stream, "_framesEmitted");
  var _timer = dart.privateName(image_stream, "_timer");
  var _frameCallbackScheduled = dart.privateName(image_stream, "_frameCallbackScheduled");
  var _informationCollector = dart.privateName(image_stream, "_informationCollector");
  var _scale = dart.privateName(image_stream, "_scale");
  var _handleCodecReady = dart.privateName(image_stream, "_handleCodecReady");
  var _decodeNextFrameAndSchedule = dart.privateName(image_stream, "_decodeNextFrameAndSchedule");
  var _isFirstFrame = dart.privateName(image_stream, "_isFirstFrame");
  var _hasFrameDurationPassed = dart.privateName(image_stream, "_hasFrameDurationPassed");
  var _emitFrame = dart.privateName(image_stream, "_emitFrame");
  var _scheduleAppFrame = dart.privateName(image_stream, "_scheduleAppFrame");
  var _handleAppFrame = dart.privateName(image_stream, "_handleAppFrame");
  image_stream.MultiFrameImageStreamCompleter = class MultiFrameImageStreamCompleter extends image_stream.ImageStreamCompleter {
    [_handleCodecReady](codec) {
      this[_codec] = codec;
      if (!(this[_codec] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_stream.dart", 642, 12, "_codec != null");
      if (dart.test(this.hasListeners)) {
        this[_decodeNextFrameAndSchedule]();
      }
    }
    [_handleAppFrame](timestamp) {
      this[_frameCallbackScheduled] = false;
      if (!dart.test(this.hasListeners)) return;
      if (dart.test(this[_isFirstFrame]()) || dart.test(this[_hasFrameDurationPassed](timestamp))) {
        this[_emitFrame](new image_stream.ImageInfo.new({image: this[_nextFrame].image, scale: this[_scale]}));
        this[_shownTimestamp] = timestamp;
        this[_frameDuration] = this[_nextFrame].duration;
        this[_nextFrame] = null;
        let completedCycles = (dart.notNull(this[_framesEmitted]) / dart.notNull(this[_codec].frameCount))[$truncate]();
        if (this[_codec].repetitionCount === -1 || completedCycles <= dart.notNull(this[_codec].repetitionCount)) {
          this[_decodeNextFrameAndSchedule]();
        }
        return;
      }
      let delay = this[_frameDuration]['-'](timestamp['-'](this[_shownTimestamp]));
      this[_timer] = async.Timer.new(delay['*'](binding$0.timeDilation), dart.fn(() => {
        this[_scheduleAppFrame]();
      }, VoidToNull()));
    }
    [_isFirstFrame]() {
      return this[_frameDuration] == null;
    }
    [_hasFrameDurationPassed](timestamp) {
      if (!(this[_shownTimestamp] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_stream.dart", 675, 12, "_shownTimestamp != null");
      return timestamp['-'](this[_shownTimestamp])['>='](this[_frameDuration]);
    }
    [_decodeNextFrameAndSchedule]() {
      return async.async(dart.void, (function* _decodeNextFrameAndSchedule() {
        try {
          this[_nextFrame] = (yield this[_codec].getNextFrame());
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          this.reportError({context: new assertions.ErrorDescription.new("resolving an image frame"), exception: exception, stack: stack, informationCollector: this[_informationCollector], silent: true});
          return;
        }
        if (this[_codec].frameCount === 1) {
          this[_emitFrame](new image_stream.ImageInfo.new({image: this[_nextFrame].image, scale: this[_scale]}));
          return;
        }
        this[_scheduleAppFrame]();
      }).bind(this));
    }
    [_scheduleAppFrame]() {
      if (dart.test(this[_frameCallbackScheduled])) {
        return;
      }
      this[_frameCallbackScheduled] = true;
      binding$0.SchedulerBinding.instance.scheduleFrameCallback(dart.bind(this, _handleAppFrame));
    }
    [_emitFrame](imageInfo) {
      this.setImage(imageInfo);
      this[_framesEmitted] = dart.notNull(this[_framesEmitted]) + 1;
    }
    addListener(listener) {
      if (!dart.test(this.hasListeners) && this[_codec] != null) this[_decodeNextFrameAndSchedule]();
      super.addListener(listener);
    }
    removeListener(listener) {
      let t13;
      super.removeListener(listener);
      if (!dart.test(this.hasListeners)) {
        t13 = this[_timer];
        t13 == null ? null : t13.cancel();
        this[_timer] = null;
      }
    }
  };
  (image_stream.MultiFrameImageStreamCompleter.new = function(opts) {
    let codec = opts && 'codec' in opts ? opts.codec : null;
    let scale = opts && 'scale' in opts ? opts.scale : null;
    let chunkEvents = opts && 'chunkEvents' in opts ? opts.chunkEvents : null;
    let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
    this[_codec] = null;
    this[_nextFrame] = null;
    this[_shownTimestamp] = null;
    this[_frameDuration] = null;
    this[_framesEmitted] = 0;
    this[_timer] = null;
    this[_frameCallbackScheduled] = false;
    if (!(codec != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_stream.dart", 587, 15, "codec != null");
    this[_informationCollector] = informationCollector;
    this[_scale] = scale;
    image_stream.MultiFrameImageStreamCompleter.__proto__.new.call(this);
    codec.then(dart.void, dart.bind(this, _handleCodecReady), {onError: dart.fn((error, stack) => {
        this.reportError({context: new assertions.ErrorDescription.new("resolving an image codec"), exception: error, stack: stack, informationCollector: informationCollector, silent: true});
      }, dynamicAndStackTraceToNull())});
    if (chunkEvents != null) {
      chunkEvents.listen(dart.fn(event => {
        if (dart.test(this.hasListeners)) {
          let localListeners = this[_listeners][$map](ImageChunkEventTovoid(), dart.fn(listener => listener.onChunk, ImageStreamListenerToFn$()))[$where](dart.fn(chunkListener => chunkListener != null, FnTobool$()))[$toList]();
          for (let listener of localListeners) {
            listener(event);
          }
        }
      }, ImageChunkEventToNull()), {onError: dart.fn((error, stack) => {
          this.reportError({context: new assertions.ErrorDescription.new("loading an image"), exception: error, stack: stack, informationCollector: informationCollector, silent: true});
        }, dynamicAndStackTraceToNull())});
    }
  }).prototype = image_stream.MultiFrameImageStreamCompleter.prototype;
  dart.addTypeTests(image_stream.MultiFrameImageStreamCompleter);
  dart.setMethodSignature(image_stream.MultiFrameImageStreamCompleter, () => ({
    __proto__: dart.getMethods(image_stream.MultiFrameImageStreamCompleter.__proto__),
    [_handleCodecReady]: dart.fnType(dart.void, [ui.Codec]),
    [_handleAppFrame]: dart.fnType(dart.void, [core.Duration]),
    [_isFirstFrame]: dart.fnType(core.bool, []),
    [_hasFrameDurationPassed]: dart.fnType(core.bool, [core.Duration]),
    [_decodeNextFrameAndSchedule]: dart.fnType(async.Future$(dart.void), []),
    [_scheduleAppFrame]: dart.fnType(dart.void, []),
    [_emitFrame]: dart.fnType(dart.void, [image_stream.ImageInfo])
  }));
  dart.setLibraryUri(image_stream.MultiFrameImageStreamCompleter, "package:flutter/src/painting/image_stream.dart");
  dart.setFieldSignature(image_stream.MultiFrameImageStreamCompleter, () => ({
    __proto__: dart.getFields(image_stream.MultiFrameImageStreamCompleter.__proto__),
    [_codec]: dart.fieldType(ui.Codec),
    [_scale]: dart.finalFieldType(core.double),
    [_informationCollector]: dart.finalFieldType(dart.fnType(core.Iterable$(diagnostics.DiagnosticsNode), [])),
    [_nextFrame]: dart.fieldType(ui.FrameInfo),
    [_shownTimestamp]: dart.fieldType(core.Duration),
    [_frameDuration]: dart.fieldType(core.Duration),
    [_framesEmitted]: dart.fieldType(core.int),
    [_timer]: dart.fieldType(async.Timer),
    [_frameCallbackScheduled]: dart.fieldType(core.bool)
  }));
  var _pendingImages = dart.privateName(image_cache, "_pendingImages");
  var _cache = dart.privateName(image_cache, "_cache");
  var _maximumSize = dart.privateName(image_cache, "_maximumSize");
  var _maximumSizeBytes = dart.privateName(image_cache, "_maximumSizeBytes");
  var _currentSizeBytes = dart.privateName(image_cache, "_currentSizeBytes");
  var _checkCacheSize = dart.privateName(image_cache, "_checkCacheSize");
  image_cache.ImageCache = class ImageCache extends core.Object {
    get maximumSize() {
      return this[_maximumSize];
    }
    set maximumSize(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_cache.dart", 84, 12, "value != null");
      if (!(dart.notNull(value) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_cache.dart", 85, 12, "value >= 0");
      if (value == this.maximumSize) return;
      this[_maximumSize] = value;
      if (this.maximumSize === 0) {
        this.clear();
      } else {
        this[_checkCacheSize]();
      }
    }
    get currentSize() {
      return this[_cache][$length];
    }
    get maximumSizeBytes() {
      return this[_maximumSizeBytes];
    }
    set maximumSizeBytes(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_cache.dart", 113, 12, "value != null");
      if (!(dart.notNull(value) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_cache.dart", 114, 12, "value >= 0");
      if (value == this[_maximumSizeBytes]) return;
      this[_maximumSizeBytes] = value;
      if (this[_maximumSizeBytes] === 0) {
        this.clear();
      } else {
        this[_checkCacheSize]();
      }
    }
    get currentSizeBytes() {
      return this[_currentSizeBytes];
    }
    clear() {
      this[_cache][$clear]();
      this[_pendingImages][$clear]();
      this[_currentSizeBytes] = 0;
    }
    evict(key) {
      let pendingImage = this[_pendingImages][$remove](key);
      if (pendingImage != null) {
        pendingImage.removeListener();
        return true;
      }
      let image = this[_cache][$remove](key);
      if (image != null) {
        this[_currentSizeBytes] = dart.notNull(this[_currentSizeBytes]) - dart.notNull(image.sizeBytes);
        return true;
      }
      return false;
    }
    putIfAbsent(key, loader, opts) {
      let t13;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      if (!(key != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_cache.dart", 183, 12, "key != null");
      if (!(loader != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_cache.dart", 184, 12, "loader != null");
      let result = (t13 = this[_pendingImages][$_get](key), t13 == null ? null : t13.completer);
      if (result != null) return result;
      let image = this[_cache][$remove](key);
      if (image != null) {
        this[_cache][$_set](key, image);
        return image.completer;
      }
      try {
        result = loader();
      } catch (e) {
        let error = dart.getThrown(e);
        let stackTrace = dart.stackTrace(e);
        if (onError != null) {
          onError(error, stackTrace);
          return null;
        } else {
          dart.rethrow(e);
        }
      }
      const listener = (info, syncCall) => {
        let t14;
        let imageSize = (t14 = info, t14 == null ? null : t14.image) == null ? 0 : dart.notNull(info.image.height) * dart.notNull(info.image.width) * 4;
        let image = new image_cache._CachedImage.new(result, imageSize);
        let pendingImage = this[_pendingImages][$remove](key);
        if (pendingImage != null) {
          pendingImage.removeListener();
        }
        if (imageSize <= dart.notNull(this.maximumSizeBytes)) {
          this[_currentSizeBytes] = dart.notNull(this[_currentSizeBytes]) + imageSize;
          this[_cache][$_set](key, image);
          this[_checkCacheSize]();
        }
      };
      dart.fn(listener, ImageInfoAndboolTovoid());
      if (dart.notNull(this.maximumSize) > 0 && dart.notNull(this.maximumSizeBytes) > 0) {
        let streamListener = new image_stream.ImageStreamListener.new(listener);
        this[_pendingImages][$_set](key, new image_cache._PendingImage.new(result, streamListener));
        result.addListener(streamListener);
      }
      return result;
    }
    containsKey(key) {
      return this[_pendingImages][$_get](key) != null || this[_cache][$_get](key) != null;
    }
    [_checkCacheSize]() {
      while (dart.notNull(this[_currentSizeBytes]) > dart.notNull(this[_maximumSizeBytes]) || dart.notNull(this[_cache][$length]) > dart.notNull(this[_maximumSize])) {
        let key = this[_cache][$keys][$first];
        let image = this[_cache][$_get](key);
        this[_currentSizeBytes] = dart.notNull(this[_currentSizeBytes]) - dart.notNull(image.sizeBytes);
        this[_cache][$remove](key);
      }
      if (!(dart.notNull(this[_currentSizeBytes]) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_cache.dart", 244, 12, "_currentSizeBytes >= 0");
      if (!(dart.notNull(this[_cache][$length]) <= dart.notNull(this.maximumSize))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_cache.dart", 245, 12, "_cache.length <= maximumSize");
      if (!(dart.notNull(this[_currentSizeBytes]) <= dart.notNull(this.maximumSizeBytes))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_cache.dart", 246, 12, "_currentSizeBytes <= maximumSizeBytes");
    }
  };
  (image_cache.ImageCache.new = function() {
    this[_pendingImages] = new (LinkedMapOfObject$_PendingImage()).new();
    this[_cache] = new (LinkedMapOfObject$_CachedImage()).new();
    this[_maximumSize] = 1000;
    this[_maximumSizeBytes] = 104857600;
    this[_currentSizeBytes] = 0;
    ;
  }).prototype = image_cache.ImageCache.prototype;
  dart.addTypeTests(image_cache.ImageCache);
  dart.setMethodSignature(image_cache.ImageCache, () => ({
    __proto__: dart.getMethods(image_cache.ImageCache.__proto__),
    clear: dart.fnType(dart.void, []),
    evict: dart.fnType(core.bool, [core.Object]),
    putIfAbsent: dart.fnType(image_stream.ImageStreamCompleter, [core.Object, dart.fnType(image_stream.ImageStreamCompleter, [])], {onError: dart.fnType(dart.void, [dart.dynamic, core.StackTrace])}, {}),
    containsKey: dart.fnType(core.bool, [core.Object]),
    [_checkCacheSize]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(image_cache.ImageCache, () => ({
    __proto__: dart.getGetters(image_cache.ImageCache.__proto__),
    maximumSize: core.int,
    currentSize: core.int,
    maximumSizeBytes: core.int,
    currentSizeBytes: core.int
  }));
  dart.setSetterSignature(image_cache.ImageCache, () => ({
    __proto__: dart.getSetters(image_cache.ImageCache.__proto__),
    maximumSize: core.int,
    maximumSizeBytes: core.int
  }));
  dart.setLibraryUri(image_cache.ImageCache, "package:flutter/src/painting/image_cache.dart");
  dart.setFieldSignature(image_cache.ImageCache, () => ({
    __proto__: dart.getFields(image_cache.ImageCache.__proto__),
    [_pendingImages]: dart.finalFieldType(core.Map$(core.Object, image_cache._PendingImage)),
    [_cache]: dart.finalFieldType(core.Map$(core.Object, image_cache._CachedImage)),
    [_maximumSize]: dart.fieldType(core.int),
    [_maximumSizeBytes]: dart.fieldType(core.int),
    [_currentSizeBytes]: dart.fieldType(core.int)
  }));
  image_cache._CachedImage = class _CachedImage extends core.Object {};
  (image_cache._CachedImage.new = function(completer, sizeBytes) {
    this.completer = completer;
    this.sizeBytes = sizeBytes;
    ;
  }).prototype = image_cache._CachedImage.prototype;
  dart.addTypeTests(image_cache._CachedImage);
  dart.setLibraryUri(image_cache._CachedImage, "package:flutter/src/painting/image_cache.dart");
  dart.setFieldSignature(image_cache._CachedImage, () => ({
    __proto__: dart.getFields(image_cache._CachedImage.__proto__),
    completer: dart.finalFieldType(image_stream.ImageStreamCompleter),
    sizeBytes: dart.finalFieldType(core.int)
  }));
  image_cache._PendingImage = class _PendingImage extends core.Object {
    removeListener() {
      this.completer.removeListener(this.listener);
    }
  };
  (image_cache._PendingImage.new = function(completer, listener) {
    this.completer = completer;
    this.listener = listener;
    ;
  }).prototype = image_cache._PendingImage.prototype;
  dart.addTypeTests(image_cache._PendingImage);
  dart.setMethodSignature(image_cache._PendingImage, () => ({
    __proto__: dart.getMethods(image_cache._PendingImage.__proto__),
    removeListener: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(image_cache._PendingImage, "package:flutter/src/painting/image_cache.dart");
  dart.setFieldSignature(image_cache._PendingImage, () => ({
    __proto__: dart.getFields(image_cache._PendingImage.__proto__),
    completer: dart.finalFieldType(image_stream.ImageStreamCompleter),
    listener: dart.finalFieldType(image_stream.ImageStreamListener)
  }));
  dart.defineLazy(image_cache, {
    /*image_cache._kDefaultSize*/get _kDefaultSize() {
      return 1000;
    },
    /*image_cache._kDefaultSizeBytes*/get _kDefaultSizeBytes() {
      return 104857600;
    }
  });
  var _imageCache = dart.privateName(binding$1, "_imageCache");
  var _systemFonts = dart.privateName(binding$1, "_systemFonts");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C40;
  var DefaultShaderWarmUp_canvasSize = dart.privateName(shader_warm_up, "DefaultShaderWarmUp.canvasSize");
  var DefaultShaderWarmUp_drawCallSpacing = dart.privateName(shader_warm_up, "DefaultShaderWarmUp.drawCallSpacing");
  var C39;
  const handleSystemMessage = Symbol("handleSystemMessage");
  binding$1.PaintingBinding = class PaintingBinding extends core.Object {
    static get instance() {
      return binding$1.PaintingBinding._instance;
    }
  };
  binding$1.PaintingBinding[dart.mixinOn] = _PaintingBinding$36BindingBase$36ServicesBinding => class PaintingBinding extends _PaintingBinding$36BindingBase$36ServicesBinding {
    initInstances() {
      super.initInstances();
      binding$1.PaintingBinding._instance = this;
      this[_imageCache] = this.createImageCache();
      if (binding$1.PaintingBinding.shaderWarmUp != null) {
        binding$1.PaintingBinding.shaderWarmUp.execute();
      }
    }
    get imageCache() {
      return this[_imageCache];
    }
    createImageCache() {
      return new image_cache.ImageCache.new();
    }
    instantiateImageCodec(bytes, opts) {
      let cacheWidth = opts && 'cacheWidth' in opts ? opts.cacheWidth : null;
      let cacheHeight = opts && 'cacheHeight' in opts ? opts.cacheHeight : null;
      if (!(cacheWidth == null || dart.notNull(cacheWidth) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/binding.dart", 86, 12, "cacheWidth == null || cacheWidth > 0");
      if (!(cacheHeight == null || dart.notNull(cacheHeight) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/binding.dart", 87, 12, "cacheHeight == null || cacheHeight > 0");
      return ui.instantiateImageCodec(bytes, {targetWidth: cacheWidth, targetHeight: cacheHeight});
    }
    evict(asset) {
      super.evict(asset);
      this.imageCache.clear();
    }
    get systemFonts() {
      return this[_systemFonts];
    }
    handleSystemMessage(systemMessage) {
      return async.async(dart.void, (function* handleSystemMessage$() {
        yield this[handleSystemMessage](systemMessage);
        let message = MapOfString$dynamic().as(systemMessage);
        let type = core.String.as(message[$_get]("type"));
        switch (type) {
          case "fontsChange":
          {
            this[_systemFonts].notifyListeners();
            break;
          }
        }
        return;
      }).bind(this));
    }
    [handleSystemMessage](systemMessage) {
      return super.handleSystemMessage(systemMessage);
    }
  };
  (binding$1.PaintingBinding[dart.mixinNew] = function() {
    this[_imageCache] = null;
    this[_systemFonts] = new binding$1._SystemFontsNotifier.new();
  }).prototype = binding$1.PaintingBinding.prototype;
  dart.addTypeTests(binding$1.PaintingBinding);
  binding$1.PaintingBinding[dart.implements] = () => [binding$.ServicesBinding, binding.BindingBase];
  dart.setMethodSignature(binding$1.PaintingBinding, () => ({
    __proto__: dart.getMethods(binding$1.PaintingBinding.__proto__),
    initInstances: dart.fnType(dart.void, []),
    createImageCache: dart.fnType(image_cache.ImageCache, []),
    instantiateImageCodec: dart.fnType(async.Future$(ui.Codec), [typed_data.Uint8List], {cacheHeight: core.int, cacheWidth: core.int}, {}),
    evict: dart.fnType(dart.void, [core.String]),
    handleSystemMessage: dart.fnType(async.Future$(dart.void), [core.Object])
  }));
  dart.setGetterSignature(binding$1.PaintingBinding, () => ({
    __proto__: dart.getGetters(binding$1.PaintingBinding.__proto__),
    imageCache: image_cache.ImageCache,
    systemFonts: change_notifier.Listenable
  }));
  dart.setLibraryUri(binding$1.PaintingBinding, "package:flutter/src/painting/binding.dart");
  dart.setFieldSignature(binding$1.PaintingBinding, () => ({
    __proto__: dart.getFields(binding$1.PaintingBinding.__proto__),
    [_imageCache]: dart.fieldType(image_cache.ImageCache),
    [_systemFonts]: dart.finalFieldType(binding$1._SystemFontsNotifier)
  }));
  dart.defineLazy(binding$1.PaintingBinding, {
    /*binding$1.PaintingBinding._instance*/get _instance() {
      return null;
    },
    set _instance(_) {},
    /*binding$1.PaintingBinding.shaderWarmUp*/get shaderWarmUp() {
      return C39 || CT.C39;
    },
    set shaderWarmUp(_) {}
  });
  var _systemFontsCallbacks = dart.privateName(binding$1, "_systemFontsCallbacks");
  binding$1._SystemFontsNotifier = class _SystemFontsNotifier extends change_notifier.Listenable {
    notifyListeners() {
      for (let callback of this[_systemFontsCallbacks]) {
        callback();
      }
    }
    addListener(listener) {
      this[_systemFontsCallbacks].add(listener);
    }
    removeListener(listener) {
      this[_systemFontsCallbacks].remove(listener);
    }
  };
  (binding$1._SystemFontsNotifier.new = function() {
    this[_systemFontsCallbacks] = LinkedHashSetOfVoidTovoid().new();
    binding$1._SystemFontsNotifier.__proto__.new.call(this);
    ;
  }).prototype = binding$1._SystemFontsNotifier.prototype;
  dart.addTypeTests(binding$1._SystemFontsNotifier);
  dart.setMethodSignature(binding$1._SystemFontsNotifier, () => ({
    __proto__: dart.getMethods(binding$1._SystemFontsNotifier.__proto__),
    notifyListeners: dart.fnType(dart.void, []),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])])
  }));
  dart.setLibraryUri(binding$1._SystemFontsNotifier, "package:flutter/src/painting/binding.dart");
  dart.setFieldSignature(binding$1._SystemFontsNotifier, () => ({
    __proto__: dart.getFields(binding$1._SystemFontsNotifier.__proto__),
    [_systemFontsCallbacks]: dart.finalFieldType(core.Set$(dart.fnType(dart.void, [])))
  }));
  dart.copyProperties(binding$1, {
    get imageCache() {
      return binding$1.PaintingBinding.instance.imageCache;
    }
  });
  shader_warm_up.ShaderWarmUp = class ShaderWarmUp extends core.Object {
    get size() {
      return C40 || CT.C40;
    }
    execute() {
      return async.async(dart.void, (function* execute() {
        let recorder = ui.PictureRecorder.new();
        let canvas = ui.Canvas.new(recorder);
        yield this.warmUpOnCanvas(canvas);
        let picture = recorder.endRecording();
        let shaderWarmUpTask = new developer.TimelineTask.new();
        shaderWarmUpTask.start("Warm-up shader");
        yield picture.toImage(this.size.width[$ceil](), this.size.height[$ceil]());
        shaderWarmUpTask.finish();
      }).bind(this));
    }
  };
  (shader_warm_up.ShaderWarmUp.new = function() {
    ;
  }).prototype = shader_warm_up.ShaderWarmUp.prototype;
  dart.addTypeTests(shader_warm_up.ShaderWarmUp);
  dart.setMethodSignature(shader_warm_up.ShaderWarmUp, () => ({
    __proto__: dart.getMethods(shader_warm_up.ShaderWarmUp.__proto__),
    execute: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setGetterSignature(shader_warm_up.ShaderWarmUp, () => ({
    __proto__: dart.getGetters(shader_warm_up.ShaderWarmUp.__proto__),
    size: ui.Size
  }));
  dart.setLibraryUri(shader_warm_up.ShaderWarmUp, "package:flutter/src/painting/shader_warm_up.dart");
  var RRect_webOnlyUniformRadii = dart.privateName(ui, "RRect.webOnlyUniformRadii");
  var RRect_blRadiusY = dart.privateName(ui, "RRect.blRadiusY");
  var RRect_blRadiusX = dart.privateName(ui, "RRect.blRadiusX");
  var RRect_brRadiusY = dart.privateName(ui, "RRect.brRadiusY");
  var RRect_brRadiusX = dart.privateName(ui, "RRect.brRadiusX");
  var RRect_trRadiusY = dart.privateName(ui, "RRect.trRadiusY");
  var RRect_trRadiusX = dart.privateName(ui, "RRect.trRadiusX");
  var RRect_tlRadiusY = dart.privateName(ui, "RRect.tlRadiusY");
  var RRect_tlRadiusX = dart.privateName(ui, "RRect.tlRadiusX");
  var RRect_bottom = dart.privateName(ui, "RRect.bottom");
  var RRect_right = dart.privateName(ui, "RRect.right");
  var RRect_top = dart.privateName(ui, "RRect.top");
  var RRect_left = dart.privateName(ui, "RRect.left");
  var C41;
  var C42;
  var ParagraphConstraints_width = dart.privateName(ui, "ParagraphConstraints.width");
  var C43;
  var C44;
  var C45;
  var Rect_bottom = dart.privateName(ui, "Rect.bottom");
  var Rect_right = dart.privateName(ui, "Rect.right");
  var Rect_top = dart.privateName(ui, "Rect.top");
  var Rect_left = dart.privateName(ui, "Rect.left");
  var C46;
  shader_warm_up.DefaultShaderWarmUp = class DefaultShaderWarmUp extends shader_warm_up.ShaderWarmUp {
    get drawCallSpacing() {
      return this[drawCallSpacing$];
    }
    set drawCallSpacing(value) {
      super.drawCallSpacing = value;
    }
    get canvasSize() {
      return this[canvasSize$];
    }
    set canvasSize(value) {
      super.canvasSize = value;
    }
    get size() {
      return this.canvasSize;
    }
    warmUpOnCanvas(canvas) {
      return async.async(dart.void, (function* warmUpOnCanvas() {
        let t14, t14$, t14$0, t14$1, t14$2, t14$3, t14$4, t14$5, t14$6;
        let rrect = C41 || CT.C41;
        let rrectPath = (t14 = ui.Path.new(), t14.addRRect(rrect), t14);
        let circlePath = (t14$ = ui.Path.new(), t14$.addOval(new ui.Rect.fromCircle({center: C42 || CT.C42, radius: 20.0})), t14$);
        let path = ui.Path.new();
        path.moveTo(20.0, 60.0);
        path.quadraticBezierTo(60.0, 20.0, 60.0, 60.0);
        path.close();
        path.moveTo(60.0, 20.0);
        path.quadraticBezierTo(60.0, 60.0, 20.0, 60.0);
        let convexPath = ui.Path.new();
        convexPath.moveTo(20.0, 30.0);
        convexPath.lineTo(40.0, 20.0);
        convexPath.lineTo(60.0, 30.0);
        convexPath.lineTo(60.0, 60.0);
        convexPath.lineTo(20.0, 60.0);
        convexPath.close();
        let paths = JSArrayOfPath().of([rrectPath, circlePath, path, convexPath]);
        let paints = JSArrayOfPaint().of([(t14$0 = ui.Paint.new(), t14$0.isAntiAlias = true, t14$0.style = ui.PaintingStyle.fill, t14$0), (t14$1 = ui.Paint.new(), t14$1.isAntiAlias = false, t14$1.style = ui.PaintingStyle.fill, t14$1), (t14$2 = ui.Paint.new(), t14$2.isAntiAlias = true, t14$2.style = ui.PaintingStyle.stroke, t14$2.strokeWidth = 10.0, t14$2), (t14$3 = ui.Paint.new(), t14$3.isAntiAlias = true, t14$3.style = ui.PaintingStyle.stroke, t14$3.strokeWidth = 0.1, t14$3)]);
        for (let i = 0; i < dart.notNull(paths[$length]); i = i + 1) {
          canvas.save();
          for (let paint of paints) {
            canvas.drawPath(paths[$_get](i), paint);
            canvas.translate(this.drawCallSpacing, 0.0);
          }
          canvas.restore();
          canvas.translate(0.0, this.drawCallSpacing);
        }
        let black = C7 || CT.C7;
        canvas.save();
        canvas.drawShadow(rrectPath, black, 10.0, true);
        canvas.translate(this.drawCallSpacing, 0.0);
        canvas.drawShadow(rrectPath, black, 10.0, false);
        canvas.restore();
        canvas.translate(0.0, this.drawCallSpacing);
        let paragraphBuilder = (t14$4 = ui.ParagraphBuilder.new(ui.ParagraphStyle.new({textDirection: ui.TextDirection.ltr})), t14$4.pushStyle(ui.TextStyle.new({color: black})), t14$4.addText("_"), t14$4);
        let paragraph = (t14$5 = paragraphBuilder.build(), t14$5.layout(C43 || CT.C43), t14$5);
        canvas.drawParagraph(paragraph, C44 || CT.C44);
        for (let fraction of JSArrayOfdouble().of([0.0, 0.5])) {
          t14$6 = canvas;
          t14$6.save();
          t14$6.translate(fraction, fraction);
          t14$6.clipRRect(new ui.RRect.fromLTRBR(8.0, 8.0, 328.0, 248.0, C45 || CT.C45));
          t14$6.drawRect(C46 || CT.C46, ui.Paint.new());
          t14$6.restore();
          t14$6;
          canvas.translate(this.drawCallSpacing, 0.0);
        }
        canvas.translate(0.0, this.drawCallSpacing);
      }).bind(this));
    }
  };
  (shader_warm_up.DefaultShaderWarmUp.new = function(opts) {
    let drawCallSpacing = opts && 'drawCallSpacing' in opts ? opts.drawCallSpacing : 0;
    let canvasSize = opts && 'canvasSize' in opts ? opts.canvasSize : C40 || CT.C40;
    this[drawCallSpacing$] = drawCallSpacing;
    this[canvasSize$] = canvasSize;
    shader_warm_up.DefaultShaderWarmUp.__proto__.new.call(this);
    ;
  }).prototype = shader_warm_up.DefaultShaderWarmUp.prototype;
  dart.addTypeTests(shader_warm_up.DefaultShaderWarmUp);
  const drawCallSpacing$ = DefaultShaderWarmUp_drawCallSpacing;
  const canvasSize$ = DefaultShaderWarmUp_canvasSize;
  dart.setMethodSignature(shader_warm_up.DefaultShaderWarmUp, () => ({
    __proto__: dart.getMethods(shader_warm_up.DefaultShaderWarmUp.__proto__),
    warmUpOnCanvas: dart.fnType(async.Future$(dart.void), [ui.Canvas])
  }));
  dart.setLibraryUri(shader_warm_up.DefaultShaderWarmUp, "package:flutter/src/painting/shader_warm_up.dart");
  dart.setFieldSignature(shader_warm_up.DefaultShaderWarmUp, () => ({
    __proto__: dart.getFields(shader_warm_up.DefaultShaderWarmUp.__proto__),
    drawCallSpacing: dart.finalFieldType(core.double),
    canvasSize: dart.finalFieldType(ui.Size)
  }));
  var _loadAsync$ = dart.privateName(_network_image_web, "_loadAsync");
  var url$ = dart.privateName(_network_image_web, "NetworkImage.url");
  var scale$4 = dart.privateName(_network_image_web, "NetworkImage.scale");
  var headers$ = dart.privateName(_network_image_web, "NetworkImage.headers");
  _network_image_web.NetworkImage = class NetworkImage extends image_provider.ImageProvider$(image_provider.NetworkImage) {
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
    }
    get scale() {
      return this[scale$4];
    }
    set scale(value) {
      super.scale = value;
    }
    get headers() {
      return this[headers$];
    }
    set headers(value) {
      super.headers = value;
    }
    obtainKey(configuration) {
      return new (SynchronousFutureOfNetworkImage()).new(this);
    }
    load(key, decode) {
      image_provider.NetworkImage._check(key);
      return new image_stream.MultiFrameImageStreamCompleter.new({codec: this[_loadAsync$](_network_image_web.NetworkImage.as(key), decode), scale: key.scale, informationCollector: dart.fn(() => JSArrayOfDiagnosticsNode().of([new (DiagnosticsPropertyOfImageProvider()).new("Image provider", this), new (DiagnosticsPropertyOfNetworkImage()).new("Image key", _network_image_web.NetworkImage.as(key))]), VoidToListOfDiagnosticsNode())});
    }
    [_loadAsync$](key, decode) {
      if (!dart.equals(key, this)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/_network_image_web.dart", 59, 12, "key == this");
      let resolved = core.Uri.base.resolve(key.url);
      return ui.webOnlyInstantiateImageCodecFromUrl(resolved);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) {
        return false;
      }
      return _network_image_web.NetworkImage.is(other) && other.url == this.url && other.scale == this.scale;
    }
    get hashCode() {
      return ui.hashValues(this.url, this.scale);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "NetworkImage")) + "(\"" + dart.str(this.url) + "\", scale: " + dart.str(this.scale) + ")";
    }
  };
  (_network_image_web.NetworkImage.new = function(url, opts) {
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    let headers = opts && 'headers' in opts ? opts.headers : null;
    this[url$] = url;
    this[scale$4] = scale;
    this[headers$] = headers;
    if (!(url != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/_network_image_web.dart", 21, 16, "url != null");
    if (!(scale != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/_network_image_web.dart", 22, 16, "scale != null");
    _network_image_web.NetworkImage.__proto__.new.call(this);
    ;
  }).prototype = _network_image_web.NetworkImage.prototype;
  dart.addTypeTests(_network_image_web.NetworkImage);
  _network_image_web.NetworkImage[dart.implements] = () => [image_provider.NetworkImage];
  dart.setMethodSignature(_network_image_web.NetworkImage, () => ({
    __proto__: dart.getMethods(_network_image_web.NetworkImage.__proto__),
    obtainKey: dart.fnType(async.Future$(_network_image_web.NetworkImage), [image_provider.ImageConfiguration]),
    load: dart.fnType(image_stream.ImageStreamCompleter, [core.Object, dart.fnType(async.Future$(ui.Codec), [typed_data.Uint8List], {cacheHeight: core.int, cacheWidth: core.int}, {})]),
    [_loadAsync$]: dart.fnType(async.Future$(ui.Codec), [_network_image_web.NetworkImage, dart.fnType(async.Future$(ui.Codec), [typed_data.Uint8List], {cacheHeight: core.int, cacheWidth: core.int}, {})]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(_network_image_web.NetworkImage, "package:flutter/src/painting/_network_image_web.dart");
  dart.setFieldSignature(_network_image_web.NetworkImage, () => ({
    __proto__: dart.getFields(_network_image_web.NetworkImage.__proto__),
    url: dart.finalFieldType(core.String),
    scale: dart.finalFieldType(core.double),
    headers: dart.finalFieldType(core.Map$(core.String, core.String))
  }));
  dart.defineExtensionMethods(_network_image_web.NetworkImage, ['_equals', 'toString']);
  dart.defineExtensionAccessors(_network_image_web.NetworkImage, ['hashCode']);
  gradient._ColorsAndStops = class _ColorsAndStops extends core.Object {};
  (gradient._ColorsAndStops.new = function(colors, stops) {
    this.colors = colors;
    this.stops = stops;
    ;
  }).prototype = gradient._ColorsAndStops.prototype;
  dart.addTypeTests(gradient._ColorsAndStops);
  dart.setLibraryUri(gradient._ColorsAndStops, "package:flutter/src/painting/gradient.dart");
  dart.setFieldSignature(gradient._ColorsAndStops, () => ({
    __proto__: dart.getFields(gradient._ColorsAndStops.__proto__),
    colors: dart.finalFieldType(core.List$(ui.Color)),
    stops: dart.finalFieldType(core.List$(core.double))
  }));
  gradient.GradientTransform = class GradientTransform extends core.Object {};
  (gradient.GradientTransform.new = function() {
    ;
  }).prototype = gradient.GradientTransform.prototype;
  dart.addTypeTests(gradient.GradientTransform);
  dart.setLibraryUri(gradient.GradientTransform, "package:flutter/src/painting/gradient.dart");
  var radians$ = dart.privateName(gradient, "GradientRotation.radians");
  gradient.GradientRotation = class GradientRotation extends gradient.GradientTransform {
    get radians() {
      return this[radians$];
    }
    set radians(value) {
      super.radians = value;
    }
    transform(bounds, opts) {
      let t14;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      if (!(bounds != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/gradient.dart", 107, 12, "bounds != null");
      let sinRadians = math.sin(this.radians);
      let oneMinusCosRadians = 1 - math.cos(this.radians);
      let center = bounds.center;
      let originX = sinRadians * dart.notNull(center.dy) + oneMinusCosRadians * dart.notNull(center.dx);
      let originY = -sinRadians * dart.notNull(center.dx) + oneMinusCosRadians * dart.notNull(center.dy);
      t14 = vector_math_64.Matrix4.identity();
      t14.translate(originX, originY);
      t14.rotateZ(this.radians);
      return t14;
    }
  };
  (gradient.GradientRotation.new = function(radians) {
    this[radians$] = radians;
    gradient.GradientRotation.__proto__.new.call(this);
    ;
  }).prototype = gradient.GradientRotation.prototype;
  dart.addTypeTests(gradient.GradientRotation);
  dart.setMethodSignature(gradient.GradientRotation, () => ({
    __proto__: dart.getMethods(gradient.GradientRotation.__proto__),
    transform: dart.fnType(vector_math_64.Matrix4, [ui.Rect], {textDirection: ui.TextDirection}, {})
  }));
  dart.setLibraryUri(gradient.GradientRotation, "package:flutter/src/painting/gradient.dart");
  dart.setFieldSignature(gradient.GradientRotation, () => ({
    __proto__: dart.getFields(gradient.GradientRotation.__proto__),
    radians: dart.finalFieldType(core.double)
  }));
  var _impliedStops = dart.privateName(gradient, "_impliedStops");
  var _resolveTransform = dart.privateName(gradient, "_resolveTransform");
  var colors$ = dart.privateName(gradient, "Gradient.colors");
  var stops$ = dart.privateName(gradient, "Gradient.stops");
  var transform$ = dart.privateName(gradient, "Gradient.transform");
  gradient.Gradient = class Gradient extends core.Object {
    get colors() {
      return this[colors$];
    }
    set colors(value) {
      super.colors = value;
    }
    get stops() {
      return this[stops$];
    }
    set stops(value) {
      super.stops = value;
    }
    get transform() {
      return this[transform$];
    }
    set transform(value) {
      super.transform = value;
    }
    [_impliedStops]() {
      if (this.stops != null) return this.stops;
      if (!(dart.notNull(this.colors[$length]) >= 2)) dart.assertFailed("colors list must have at least two colors", "org-dartlang-app:///packages/flutter/src/painting/gradient.dart", 187, 12, "colors.length >= 2");
      let separation = 1.0 / (dart.notNull(this.colors[$length]) - 1);
      return ListOfdouble().generate(this.colors[$length], dart.fn(index => dart.notNull(index) * separation, intTodouble()), {growable: false});
    }
    lerpFrom(a, t) {
      if (a == null) return this.scale(t);
      return null;
    }
    lerpTo(b, t) {
      if (b == null) return this.scale(1.0 - dart.notNull(t));
      return null;
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/gradient.dart", 287, 12, "t != null");
      let result = null;
      if (b != null) result = b.lerpFrom(a, t);
      if (result == null && a != null) result = a.lerpTo(b, t);
      if (result != null) return result;
      if (a == null && b == null) return null;
      if (!(a != null && b != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/gradient.dart", 297, 12, "a != null && b != null");
      return dart.notNull(t) < 0.5 ? a.scale(1.0 - dart.notNull(t) * 2.0) : b.scale((dart.notNull(t) - 0.5) * 2.0);
    }
    [_resolveTransform](bounds, textDirection) {
      let t14, t14$;
      t14$ = (t14 = this.transform, t14 == null ? null : t14.transform(bounds, {textDirection: textDirection}));
      return t14$ == null ? null : t14$.storage;
    }
  };
  (gradient.Gradient.new = function(opts) {
    let colors = opts && 'colors' in opts ? opts.colors : null;
    let stops = opts && 'stops' in opts ? opts.stops : null;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    this[colors$] = colors;
    this[stops$] = stops;
    this[transform$] = transform;
    if (!(colors != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/gradient.dart", 150, 15, "colors != null");
    ;
  }).prototype = gradient.Gradient.prototype;
  dart.addTypeTests(gradient.Gradient);
  dart.setMethodSignature(gradient.Gradient, () => ({
    __proto__: dart.getMethods(gradient.Gradient.__proto__),
    [_impliedStops]: dart.fnType(core.List$(core.double), []),
    lerpFrom: dart.fnType(gradient.Gradient, [gradient.Gradient, core.double]),
    lerpTo: dart.fnType(gradient.Gradient, [gradient.Gradient, core.double]),
    [_resolveTransform]: dart.fnType(typed_data.Float64List, [ui.Rect, ui.TextDirection])
  }));
  dart.setLibraryUri(gradient.Gradient, "package:flutter/src/painting/gradient.dart");
  dart.setFieldSignature(gradient.Gradient, () => ({
    __proto__: dart.getFields(gradient.Gradient.__proto__),
    colors: dart.finalFieldType(core.List$(ui.Color)),
    stops: dart.finalFieldType(core.List$(core.double)),
    transform: dart.finalFieldType(gradient.GradientTransform)
  }));
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var C47;
  var C48;
  var C49;
  var begin$ = dart.privateName(gradient, "LinearGradient.begin");
  var end$0 = dart.privateName(gradient, "LinearGradient.end");
  var tileMode$ = dart.privateName(gradient, "LinearGradient.tileMode");
  gradient.LinearGradient = class LinearGradient extends gradient.Gradient {
    get begin() {
      return this[begin$];
    }
    set begin(value) {
      super.begin = value;
    }
    get end() {
      return this[end$0];
    }
    set end(value) {
      super.end = value;
    }
    get tileMode() {
      return this[tileMode$];
    }
    set tileMode(value) {
      super.tileMode = value;
    }
    createShader(rect, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return ui.Gradient.linear(this.begin.resolve(textDirection).withinRect(rect), this.end.resolve(textDirection).withinRect(rect), this.colors, this[_impliedStops](), this.tileMode, this[_resolveTransform](rect, textDirection));
    }
    scale(factor) {
      return new gradient.LinearGradient.new({begin: this.begin, end: this.end, colors: this.colors[$map](ui.Color, dart.fn(color => ui.Color.lerp(null, color, factor), ColorToColor()))[$toList](), stops: this.stops, tileMode: this.tileMode});
    }
    lerpFrom(a, t) {
      if (a == null || gradient.LinearGradient.is(a)) return gradient.LinearGradient.lerp(gradient.LinearGradient.as(a), this, t);
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (b == null || gradient.LinearGradient.is(b)) return gradient.LinearGradient.lerp(this, gradient.LinearGradient.as(b), t);
      return super.lerpTo(b, t);
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/gradient.dart", 472, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return b.scale(t);
      if (b == null) return a.scale(1.0 - dart.notNull(t));
      let interpolated = gradient._interpolateColorsAndStops(a.colors, a[_impliedStops](), b.colors, b[_impliedStops](), t);
      return new gradient.LinearGradient.new({begin: alignment.AlignmentGeometry.lerp(a.begin, b.begin, t), end: alignment.AlignmentGeometry.lerp(a.end, b.end, t), colors: interpolated.colors, stops: interpolated.stops, tileMode: dart.notNull(t) < 0.5 ? a.tileMode : b.tileMode});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return gradient.LinearGradient.is(other) && dart.equals(other.begin, this.begin) && dart.equals(other.end, this.end) && dart.equals(other.tileMode, this.tileMode) && dart.test(collections.listEquals(ui.Color, other.colors, this.colors)) && dart.test(collections.listEquals(core.double, other.stops, this.stops));
    }
    get hashCode() {
      return ui.hashValues(this.begin, this.end, this.tileMode, ui.hashList(this.colors), ui.hashList(this.stops));
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "LinearGradient")) + "(" + dart.str(this.begin) + ", " + dart.str(this.end) + ", " + dart.str(this.colors) + ", " + dart.str(this.stops) + ", " + dart.str(this.tileMode) + ")";
    }
  };
  (gradient.LinearGradient.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : C47 || CT.C47;
    let end = opts && 'end' in opts ? opts.end : C48 || CT.C48;
    let colors = opts && 'colors' in opts ? opts.colors : null;
    let stops = opts && 'stops' in opts ? opts.stops : null;
    let tileMode = opts && 'tileMode' in opts ? opts.tileMode : C49 || CT.C49;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    this[begin$] = begin;
    this[end$0] = end;
    this[tileMode$] = tileMode;
    if (!(begin != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/gradient.dart", 369, 15, "begin != null");
    if (!(end != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/gradient.dart", 370, 15, "end != null");
    if (!(tileMode != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/gradient.dart", 371, 15, "tileMode != null");
    gradient.LinearGradient.__proto__.new.call(this, {colors: colors, stops: stops, transform: transform});
    ;
  }).prototype = gradient.LinearGradient.prototype;
  dart.addTypeTests(gradient.LinearGradient);
  dart.setMethodSignature(gradient.LinearGradient, () => ({
    __proto__: dart.getMethods(gradient.LinearGradient.__proto__),
    createShader: dart.fnType(ui.Shader, [ui.Rect], {textDirection: ui.TextDirection}, {}),
    scale: dart.fnType(gradient.LinearGradient, [core.double]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(gradient.LinearGradient, "package:flutter/src/painting/gradient.dart");
  dart.setFieldSignature(gradient.LinearGradient, () => ({
    __proto__: dart.getFields(gradient.LinearGradient.__proto__),
    begin: dart.finalFieldType(alignment.AlignmentGeometry),
    end: dart.finalFieldType(alignment.AlignmentGeometry),
    tileMode: dart.finalFieldType(ui.TileMode)
  }));
  dart.defineExtensionMethods(gradient.LinearGradient, ['_equals', 'toString']);
  dart.defineExtensionAccessors(gradient.LinearGradient, ['hashCode']);
  var C50;
  var center$ = dart.privateName(gradient, "RadialGradient.center");
  var radius$ = dart.privateName(gradient, "RadialGradient.radius");
  var tileMode$0 = dart.privateName(gradient, "RadialGradient.tileMode");
  var focal$ = dart.privateName(gradient, "RadialGradient.focal");
  var focalRadius$ = dart.privateName(gradient, "RadialGradient.focalRadius");
  gradient.RadialGradient = class RadialGradient extends gradient.Gradient {
    get center() {
      return this[center$];
    }
    set center(value) {
      super.center = value;
    }
    get radius() {
      return this[radius$];
    }
    set radius(value) {
      super.radius = value;
    }
    get tileMode() {
      return this[tileMode$0];
    }
    set tileMode(value) {
      super.tileMode = value;
    }
    get focal() {
      return this[focal$];
    }
    set focal(value) {
      super.focal = value;
    }
    get focalRadius() {
      return this[focalRadius$];
    }
    set focalRadius(value) {
      super.focalRadius = value;
    }
    createShader(rect, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return ui.Gradient.radial(this.center.resolve(textDirection).withinRect(rect), dart.notNull(this.radius) * dart.notNull(rect.shortestSide), this.colors, this[_impliedStops](), this.tileMode, this[_resolveTransform](rect, textDirection), this.focal == null ? null : this.focal.resolve(textDirection).withinRect(rect), dart.notNull(this.focalRadius) * dart.notNull(rect.shortestSide));
    }
    scale(factor) {
      return new gradient.RadialGradient.new({center: this.center, radius: this.radius, colors: this.colors[$map](ui.Color, dart.fn(color => ui.Color.lerp(null, color, factor), ColorToColor()))[$toList](), stops: this.stops, tileMode: this.tileMode, focal: this.focal, focalRadius: this.focalRadius});
    }
    lerpFrom(a, t) {
      if (a == null || gradient.RadialGradient.is(a)) return gradient.RadialGradient.lerp(gradient.RadialGradient.as(a), this, t);
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (b == null || gradient.RadialGradient.is(b)) return gradient.RadialGradient.lerp(this, gradient.RadialGradient.as(b), t);
      return super.lerpTo(b, t);
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/gradient.dart", 730, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return b.scale(t);
      if (b == null) return a.scale(1.0 - dart.notNull(t));
      let interpolated = gradient._interpolateColorsAndStops(a.colors, a[_impliedStops](), b.colors, b[_impliedStops](), t);
      return new gradient.RadialGradient.new({center: alignment.AlignmentGeometry.lerp(a.center, b.center, t), radius: math.max(core.double, 0.0, ui.lerpDouble(a.radius, b.radius, t)), colors: interpolated.colors, stops: interpolated.stops, tileMode: dart.notNull(t) < 0.5 ? a.tileMode : b.tileMode, focal: alignment.AlignmentGeometry.lerp(a.focal, b.focal, t), focalRadius: math.max(core.double, 0.0, ui.lerpDouble(a.focalRadius, b.focalRadius, t))});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return gradient.RadialGradient.is(other) && dart.equals(other.center, this.center) && other.radius == this.radius && dart.equals(other.tileMode, this.tileMode) && dart.test(collections.listEquals(ui.Color, other.colors, this.colors)) && dart.test(collections.listEquals(core.double, other.stops, this.stops)) && dart.equals(other.focal, this.focal) && other.focalRadius == this.focalRadius;
    }
    get hashCode() {
      return ui.hashValues(this.center, this.radius, this.tileMode, ui.hashList(this.colors), ui.hashList(this.stops), this.focal, this.focalRadius);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "RadialGradient")) + "(" + dart.str(this.center) + ", " + dart.str(this.radius) + ", " + dart.str(this.colors) + ", " + dart.str(this.stops) + ", " + dart.str(this.tileMode) + ", " + dart.str(this.focal) + ", " + dart.str(this.focalRadius) + ")";
    }
  };
  (gradient.RadialGradient.new = function(opts) {
    let center = opts && 'center' in opts ? opts.center : C50 || CT.C50;
    let radius = opts && 'radius' in opts ? opts.radius : 0.5;
    let colors = opts && 'colors' in opts ? opts.colors : null;
    let stops = opts && 'stops' in opts ? opts.stops : null;
    let tileMode = opts && 'tileMode' in opts ? opts.tileMode : C49 || CT.C49;
    let focal = opts && 'focal' in opts ? opts.focal : null;
    let focalRadius = opts && 'focalRadius' in opts ? opts.focalRadius : 0;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    this[center$] = center;
    this[radius$] = radius;
    this[tileMode$0] = tileMode;
    this[focal$] = focal;
    this[focalRadius$] = focalRadius;
    if (!(center != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/gradient.dart", 601, 15, "center != null");
    if (!(radius != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/gradient.dart", 602, 15, "radius != null");
    if (!(tileMode != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/gradient.dart", 603, 15, "tileMode != null");
    if (!(focalRadius != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/gradient.dart", 604, 15, "focalRadius != null");
    gradient.RadialGradient.__proto__.new.call(this, {colors: colors, stops: stops, transform: transform});
    ;
  }).prototype = gradient.RadialGradient.prototype;
  dart.addTypeTests(gradient.RadialGradient);
  dart.setMethodSignature(gradient.RadialGradient, () => ({
    __proto__: dart.getMethods(gradient.RadialGradient.__proto__),
    createShader: dart.fnType(ui.Shader, [ui.Rect], {textDirection: ui.TextDirection}, {}),
    scale: dart.fnType(gradient.RadialGradient, [core.double]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(gradient.RadialGradient, "package:flutter/src/painting/gradient.dart");
  dart.setFieldSignature(gradient.RadialGradient, () => ({
    __proto__: dart.getFields(gradient.RadialGradient.__proto__),
    center: dart.finalFieldType(alignment.AlignmentGeometry),
    radius: dart.finalFieldType(core.double),
    tileMode: dart.finalFieldType(ui.TileMode),
    focal: dart.finalFieldType(alignment.AlignmentGeometry),
    focalRadius: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(gradient.RadialGradient, ['_equals', 'toString']);
  dart.defineExtensionAccessors(gradient.RadialGradient, ['hashCode']);
  var center$0 = dart.privateName(gradient, "SweepGradient.center");
  var startAngle$ = dart.privateName(gradient, "SweepGradient.startAngle");
  var endAngle$ = dart.privateName(gradient, "SweepGradient.endAngle");
  var tileMode$1 = dart.privateName(gradient, "SweepGradient.tileMode");
  gradient.SweepGradient = class SweepGradient extends gradient.Gradient {
    get center() {
      return this[center$0];
    }
    set center(value) {
      super.center = value;
    }
    get startAngle() {
      return this[startAngle$];
    }
    set startAngle(value) {
      super.startAngle = value;
    }
    get endAngle() {
      return this[endAngle$];
    }
    set endAngle(value) {
      super.endAngle = value;
    }
    get tileMode() {
      return this[tileMode$1];
    }
    set tileMode(value) {
      super.tileMode = value;
    }
    createShader(rect, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return ui.Gradient.sweep(this.center.resolve(textDirection).withinRect(rect), this.colors, this[_impliedStops](), this.tileMode, this.startAngle, this.endAngle, this[_resolveTransform](rect, textDirection));
    }
    scale(factor) {
      return new gradient.SweepGradient.new({center: this.center, startAngle: this.startAngle, endAngle: this.endAngle, colors: this.colors[$map](ui.Color, dart.fn(color => ui.Color.lerp(null, color, factor), ColorToColor()))[$toList](), stops: this.stops, tileMode: this.tileMode});
    }
    lerpFrom(a, t) {
      if (a == null || gradient.SweepGradient.is(a)) return gradient.SweepGradient.lerp(gradient.SweepGradient.as(a), this, t);
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (b == null || gradient.SweepGradient.is(b)) return gradient.SweepGradient.lerp(this, gradient.SweepGradient.as(b), t);
      return super.lerpTo(b, t);
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/gradient.dart", 977, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return b.scale(t);
      if (b == null) return a.scale(1.0 - dart.notNull(t));
      let interpolated = gradient._interpolateColorsAndStops(a.colors, a[_impliedStops](), b.colors, b[_impliedStops](), t);
      return new gradient.SweepGradient.new({center: alignment.AlignmentGeometry.lerp(a.center, b.center, t), startAngle: math.max(core.double, 0.0, ui.lerpDouble(a.startAngle, b.startAngle, t)), endAngle: math.max(core.double, 0.0, ui.lerpDouble(a.endAngle, b.endAngle, t)), colors: interpolated.colors, stops: interpolated.stops, tileMode: dart.notNull(t) < 0.5 ? a.tileMode : b.tileMode});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return gradient.SweepGradient.is(other) && dart.equals(other.center, this.center) && other.startAngle == this.startAngle && other.endAngle == this.endAngle && dart.equals(other.tileMode, this.tileMode) && dart.test(collections.listEquals(ui.Color, other.colors, this.colors)) && dart.test(collections.listEquals(core.double, other.stops, this.stops));
    }
    get hashCode() {
      return ui.hashValues(this.center, this.startAngle, this.endAngle, this.tileMode, ui.hashList(this.colors), ui.hashList(this.stops));
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "SweepGradient")) + "(" + dart.str(this.center) + ", " + dart.str(this.startAngle) + ", " + dart.str(this.endAngle) + ", " + dart.str(this.colors) + ", " + dart.str(this.stops) + ", " + dart.str(this.tileMode) + ")";
    }
  };
  (gradient.SweepGradient.new = function(opts) {
    let center = opts && 'center' in opts ? opts.center : C50 || CT.C50;
    let startAngle = opts && 'startAngle' in opts ? opts.startAngle : 0;
    let endAngle = opts && 'endAngle' in opts ? opts.endAngle : 6.283185307179586;
    let colors = opts && 'colors' in opts ? opts.colors : null;
    let stops = opts && 'stops' in opts ? opts.stops : null;
    let tileMode = opts && 'tileMode' in opts ? opts.tileMode : C49 || CT.C49;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    this[center$0] = center;
    this[startAngle$] = startAngle;
    this[endAngle$] = endAngle;
    this[tileMode$1] = tileMode;
    if (!(center != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/gradient.dart", 875, 15, "center != null");
    if (!(startAngle != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/gradient.dart", 876, 15, "startAngle != null");
    if (!(endAngle != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/gradient.dart", 877, 15, "endAngle != null");
    if (!(tileMode != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/gradient.dart", 878, 15, "tileMode != null");
    gradient.SweepGradient.__proto__.new.call(this, {colors: colors, stops: stops, transform: transform});
    ;
  }).prototype = gradient.SweepGradient.prototype;
  dart.addTypeTests(gradient.SweepGradient);
  dart.setMethodSignature(gradient.SweepGradient, () => ({
    __proto__: dart.getMethods(gradient.SweepGradient.__proto__),
    createShader: dart.fnType(ui.Shader, [ui.Rect], {textDirection: ui.TextDirection}, {}),
    scale: dart.fnType(gradient.SweepGradient, [core.double]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(gradient.SweepGradient, "package:flutter/src/painting/gradient.dart");
  dart.setFieldSignature(gradient.SweepGradient, () => ({
    __proto__: dart.getFields(gradient.SweepGradient.__proto__),
    center: dart.finalFieldType(alignment.AlignmentGeometry),
    startAngle: dart.finalFieldType(core.double),
    endAngle: dart.finalFieldType(core.double),
    tileMode: dart.finalFieldType(ui.TileMode)
  }));
  dart.defineExtensionMethods(gradient.SweepGradient, ['_equals', 'toString']);
  dart.defineExtensionAccessors(gradient.SweepGradient, ['hashCode']);
  gradient._sample = function _sample(colors, stops, t) {
    if (!(colors != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/gradient.dart", 24, 10, "colors != null");
    if (!dart.test(colors[$isNotEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/gradient.dart", 25, 10, "colors.isNotEmpty");
    if (!(stops != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/gradient.dart", 26, 10, "stops != null");
    if (!dart.test(stops[$isNotEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/gradient.dart", 27, 10, "stops.isNotEmpty");
    if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/gradient.dart", 28, 10, "t != null");
    if (dart.notNull(t) <= dart.notNull(stops[$first])) return colors[$first];
    if (dart.notNull(t) >= dart.notNull(stops[$last])) return colors[$last];
    let index = stops[$lastIndexWhere](dart.fn(s => dart.notNull(s) <= dart.notNull(t), doubleTobool()));
    if (!(index !== -1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/gradient.dart", 34, 10, "index != -1");
    return ui.Color.lerp(colors[$_get](index), colors[$_get](dart.notNull(index) + 1), (dart.notNull(t) - dart.notNull(stops[$_get](index))) / (dart.notNull(stops[$_get](dart.notNull(index) + 1)) - dart.notNull(stops[$_get](index))));
  };
  gradient._interpolateColorsAndStops = function _interpolateColorsAndStops(aColors, aStops, bColors, bStops, t) {
    let t14;
    if (!(dart.notNull(aColors[$length]) >= 2)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/gradient.dart", 48, 10, "aColors.length >= 2");
    if (!(dart.notNull(bColors[$length]) >= 2)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/gradient.dart", 49, 10, "bColors.length >= 2");
    if (!(aStops[$length] == aColors[$length])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/gradient.dart", 50, 10, "aStops.length == aColors.length");
    if (!(bStops[$length] == bColors[$length])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/gradient.dart", 51, 10, "bStops.length == bColors.length");
    let stops = (t14 = new (SplayTreeSetOfdouble()).new(), t14.addAll(aStops), t14.addAll(bStops), t14);
    let interpolatedStops = stops.toList({growable: false});
    let interpolatedColors = interpolatedStops[$map](ui.Color, dart.fn(stop => ui.Color.lerp(gradient._sample(aColors, aStops, stop), gradient._sample(bColors, bStops, stop), t), doubleToColor()))[$toList]({growable: false});
    return new gradient._ColorsAndStops.new(interpolatedColors, interpolatedStops);
  };
  var _x = dart.privateName(alignment, "_x");
  var _start$0 = dart.privateName(alignment, "_start");
  var _y = dart.privateName(alignment, "_y");
  alignment.AlignmentGeometry = class AlignmentGeometry extends core.Object {
    add(other) {
      return new alignment._MixedAlignment.new(dart.notNull(this[_x]) + dart.notNull(other[_x]), dart.notNull(this[_start$0]) + dart.notNull(other[_start$0]), dart.notNull(this[_y]) + dart.notNull(other[_y]));
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/alignment.dart", 90, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return b['*'](t);
      if (b == null) return a['*'](1.0 - dart.notNull(t));
      if (alignment.Alignment.is(a) && alignment.Alignment.is(b)) return alignment.Alignment.lerp(a, b, t);
      if (alignment.AlignmentDirectional.is(a) && alignment.AlignmentDirectional.is(b)) return alignment.AlignmentDirectional.lerp(a, b, t);
      return new alignment._MixedAlignment.new(ui.lerpDouble(a[_x], b[_x], t), ui.lerpDouble(a[_start$0], b[_start$0], t), ui.lerpDouble(a[_y], b[_y], t));
    }
    toString() {
      if (this[_start$0] === 0.0) return alignment.Alignment._stringify(this[_x], this[_y]);
      if (this[_x] === 0.0) return alignment.AlignmentDirectional._stringify(this[_start$0], this[_y]);
      return dart.notNull(alignment.Alignment._stringify(this[_x], this[_y])) + " + " + dart.notNull(alignment.AlignmentDirectional._stringify(this[_start$0], 0.0));
    }
    _equals(other) {
      if (other == null) return false;
      return alignment.AlignmentGeometry.is(other) && other[_x] == this[_x] && other[_start$0] == this[_start$0] && other[_y] == this[_y];
    }
    get hashCode() {
      return ui.hashValues(this[_x], this[_start$0], this[_y]);
    }
  };
  (alignment.AlignmentGeometry.new = function() {
    ;
  }).prototype = alignment.AlignmentGeometry.prototype;
  dart.addTypeTests(alignment.AlignmentGeometry);
  dart.setMethodSignature(alignment.AlignmentGeometry, () => ({
    __proto__: dart.getMethods(alignment.AlignmentGeometry.__proto__),
    add: dart.fnType(alignment.AlignmentGeometry, [alignment.AlignmentGeometry]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(alignment.AlignmentGeometry, "package:flutter/src/painting/alignment.dart");
  dart.defineExtensionMethods(alignment.AlignmentGeometry, ['toString', '_equals']);
  dart.defineExtensionAccessors(alignment.AlignmentGeometry, ['hashCode']);
  var C51;
  var C52;
  var C53;
  var C54;
  var C55;
  var C56;
  alignment.Alignment = class Alignment extends alignment.AlignmentGeometry {
    get x() {
      return this[x$];
    }
    set x(value) {
      super.x = value;
    }
    get y() {
      return this[y$];
    }
    set y(value) {
      super.y = value;
    }
    get [_x]() {
      return this.x;
    }
    get [_start$0]() {
      return 0.0;
    }
    get [_y]() {
      return this.y;
    }
    add(other) {
      if (alignment.Alignment.is(other)) return this['+'](other);
      return super.add(other);
    }
    ['-'](other) {
      return new alignment.Alignment.new(dart.notNull(this.x) - dart.notNull(other.x), dart.notNull(this.y) - dart.notNull(other.y));
    }
    ['+'](other) {
      return new alignment.Alignment.new(dart.notNull(this.x) + dart.notNull(other.x), dart.notNull(this.y) + dart.notNull(other.y));
    }
    _negate() {
      return new alignment.Alignment.new(-dart.notNull(this.x), -dart.notNull(this.y));
    }
    ['*'](other) {
      return new alignment.Alignment.new(dart.notNull(this.x) * dart.notNull(other), dart.notNull(this.y) * dart.notNull(other));
    }
    ['/'](other) {
      return new alignment.Alignment.new(dart.notNull(this.x) / dart.notNull(other), dart.notNull(this.y) / dart.notNull(other));
    }
    ['~/'](other) {
      return new alignment.Alignment.new((dart.notNull(this.x) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this.y) / dart.notNull(other))[$truncate]()[$toDouble]());
    }
    ['%'](other) {
      return new alignment.Alignment.new(this.x[$modulo](other), this.y[$modulo](other));
    }
    alongOffset(other) {
      let centerX = dart.notNull(other.dx) / 2.0;
      let centerY = dart.notNull(other.dy) / 2.0;
      return new ui.Offset.new(centerX + dart.notNull(this.x) * centerX, centerY + dart.notNull(this.y) * centerY);
    }
    alongSize(other) {
      let centerX = dart.notNull(other.width) / 2.0;
      let centerY = dart.notNull(other.height) / 2.0;
      return new ui.Offset.new(centerX + dart.notNull(this.x) * centerX, centerY + dart.notNull(this.y) * centerY);
    }
    withinRect(rect) {
      let halfWidth = dart.notNull(rect.width) / 2.0;
      let halfHeight = dart.notNull(rect.height) / 2.0;
      return new ui.Offset.new(dart.notNull(rect.left) + halfWidth + dart.notNull(this.x) * halfWidth, dart.notNull(rect.top) + halfHeight + dart.notNull(this.y) * halfHeight);
    }
    inscribe(size, rect) {
      let halfWidthDelta = (dart.notNull(rect.width) - dart.notNull(size.width)) / 2.0;
      let halfHeightDelta = (dart.notNull(rect.height) - dart.notNull(size.height)) / 2.0;
      return new ui.Rect.fromLTWH(dart.notNull(rect.left) + halfWidthDelta + dart.notNull(this.x) * halfWidthDelta, dart.notNull(rect.top) + halfHeightDelta + dart.notNull(this.y) * halfHeightDelta, size.width, size.height);
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/alignment.dart", 335, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return new alignment.Alignment.new(ui.lerpDouble(0.0, b.x, t), ui.lerpDouble(0.0, b.y, t));
      if (b == null) return new alignment.Alignment.new(ui.lerpDouble(a.x, 0.0, t), ui.lerpDouble(a.y, 0.0, t));
      return new alignment.Alignment.new(ui.lerpDouble(a.x, b.x, t), ui.lerpDouble(a.y, b.y, t));
    }
    resolve(direction) {
      return this;
    }
    static _stringify(x, y) {
      if (x === -1.0 && y === -1.0) return "topLeft";
      if (x === 0.0 && y === -1.0) return "topCenter";
      if (x === 1.0 && y === -1.0) return "topRight";
      if (x === -1.0 && y === 0.0) return "centerLeft";
      if (x === 0.0 && y === 0.0) return "center";
      if (x === 1.0 && y === 0.0) return "centerRight";
      if (x === -1.0 && y === 1.0) return "bottomLeft";
      if (x === 0.0 && y === 1.0) return "bottomCenter";
      if (x === 1.0 && y === 1.0) return "bottomRight";
      return "Alignment(" + x[$toStringAsFixed](1) + ", " + y[$toStringAsFixed](1) + ")";
    }
    toString() {
      return alignment.Alignment._stringify(this.x, this.y);
    }
  };
  (alignment.Alignment.new = function(x, y) {
    this[x$] = x;
    this[y$] = y;
    if (!(x != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/alignment.dart", 185, 14, "x != null");
    if (!(y != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/alignment.dart", 186, 14, "y != null");
    alignment.Alignment.__proto__.new.call(this);
    ;
  }).prototype = alignment.Alignment.prototype;
  dart.addTypeTests(alignment.Alignment);
  const x$ = Alignment_x;
  const y$ = Alignment_y;
  dart.setMethodSignature(alignment.Alignment, () => ({
    __proto__: dart.getMethods(alignment.Alignment.__proto__),
    '-': dart.fnType(alignment.Alignment, [alignment.Alignment]),
    '+': dart.fnType(alignment.Alignment, [alignment.Alignment]),
    _negate: dart.fnType(alignment.Alignment, []),
    '*': dart.fnType(alignment.Alignment, [core.double]),
    '/': dart.fnType(alignment.Alignment, [core.double]),
    '~/': dart.fnType(alignment.Alignment, [core.double]),
    '%': dart.fnType(alignment.Alignment, [core.double]),
    alongOffset: dart.fnType(ui.Offset, [ui.Offset]),
    alongSize: dart.fnType(ui.Offset, [ui.Size]),
    withinRect: dart.fnType(ui.Offset, [ui.Rect]),
    inscribe: dart.fnType(ui.Rect, [ui.Size, ui.Rect]),
    resolve: dart.fnType(alignment.Alignment, [ui.TextDirection])
  }));
  dart.setGetterSignature(alignment.Alignment, () => ({
    __proto__: dart.getGetters(alignment.Alignment.__proto__),
    [_x]: core.double,
    [_start$0]: core.double,
    [_y]: core.double
  }));
  dart.setLibraryUri(alignment.Alignment, "package:flutter/src/painting/alignment.dart");
  dart.setFieldSignature(alignment.Alignment, () => ({
    __proto__: dart.getFields(alignment.Alignment.__proto__),
    x: dart.finalFieldType(core.double),
    y: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(alignment.Alignment, ['toString']);
  dart.defineLazy(alignment.Alignment, {
    /*alignment.Alignment.topLeft*/get topLeft() {
      return C51 || CT.C51;
    },
    /*alignment.Alignment.topCenter*/get topCenter() {
      return C52 || CT.C52;
    },
    /*alignment.Alignment.topRight*/get topRight() {
      return C53 || CT.C53;
    },
    /*alignment.Alignment.centerLeft*/get centerLeft() {
      return C47 || CT.C47;
    },
    /*alignment.Alignment.center*/get center() {
      return C50 || CT.C50;
    },
    /*alignment.Alignment.centerRight*/get centerRight() {
      return C48 || CT.C48;
    },
    /*alignment.Alignment.bottomLeft*/get bottomLeft() {
      return C54 || CT.C54;
    },
    /*alignment.Alignment.bottomCenter*/get bottomCenter() {
      return C55 || CT.C55;
    },
    /*alignment.Alignment.bottomRight*/get bottomRight() {
      return C56 || CT.C56;
    }
  });
  var start$0 = dart.privateName(alignment, "AlignmentDirectional.start");
  var y$0 = dart.privateName(alignment, "AlignmentDirectional.y");
  var C57;
  var C58;
  var C59;
  var C60;
  var C61;
  var C62;
  var C63;
  var C64;
  var C65;
  alignment.AlignmentDirectional = class AlignmentDirectional extends alignment.AlignmentGeometry {
    get start() {
      return this[start$0];
    }
    set start(value) {
      super.start = value;
    }
    get y() {
      return this[y$0];
    }
    set y(value) {
      super.y = value;
    }
    get [_x]() {
      return 0.0;
    }
    get [_start$0]() {
      return this.start;
    }
    get [_y]() {
      return this.y;
    }
    add(other) {
      if (alignment.AlignmentDirectional.is(other)) return this['+'](other);
      return super.add(other);
    }
    ['-'](other) {
      return new alignment.AlignmentDirectional.new(dart.notNull(this.start) - dart.notNull(other.start), dart.notNull(this.y) - dart.notNull(other.y));
    }
    ['+'](other) {
      return new alignment.AlignmentDirectional.new(dart.notNull(this.start) + dart.notNull(other.start), dart.notNull(this.y) + dart.notNull(other.y));
    }
    _negate() {
      return new alignment.AlignmentDirectional.new(-dart.notNull(this.start), -dart.notNull(this.y));
    }
    ['*'](other) {
      return new alignment.AlignmentDirectional.new(dart.notNull(this.start) * dart.notNull(other), dart.notNull(this.y) * dart.notNull(other));
    }
    ['/'](other) {
      return new alignment.AlignmentDirectional.new(dart.notNull(this.start) / dart.notNull(other), dart.notNull(this.y) / dart.notNull(other));
    }
    ['~/'](other) {
      return new alignment.AlignmentDirectional.new((dart.notNull(this.start) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this.y) / dart.notNull(other))[$truncate]()[$toDouble]());
    }
    ['%'](other) {
      return new alignment.AlignmentDirectional.new(this.start[$modulo](other), this.y[$modulo](other));
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/alignment.dart", 516, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return new alignment.AlignmentDirectional.new(ui.lerpDouble(0.0, b.start, t), ui.lerpDouble(0.0, b.y, t));
      if (b == null) return new alignment.AlignmentDirectional.new(ui.lerpDouble(a.start, 0.0, t), ui.lerpDouble(a.y, 0.0, t));
      return new alignment.AlignmentDirectional.new(ui.lerpDouble(a.start, b.start, t), ui.lerpDouble(a.y, b.y, t));
    }
    resolve(direction) {
      if (!(direction != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/alignment.dart", 528, 12, "direction != null");
      switch (direction) {
        case C18 || CT.C18:
        {
          return new alignment.Alignment.new(-dart.notNull(this.start), this.y);
        }
        case C19 || CT.C19:
        {
          return new alignment.Alignment.new(this.start, this.y);
        }
      }
      return null;
    }
    static _stringify(start, y) {
      if (start === -1.0 && y === -1.0) return "AlignmentDirectional.topStart";
      if (start === 0.0 && y === -1.0) return "AlignmentDirectional.topCenter";
      if (start === 1.0 && y === -1.0) return "AlignmentDirectional.topEnd";
      if (start === -1.0 && y === 0.0) return "AlignmentDirectional.centerStart";
      if (start === 0.0 && y === 0.0) return "AlignmentDirectional.center";
      if (start === 1.0 && y === 0.0) return "AlignmentDirectional.centerEnd";
      if (start === -1.0 && y === 1.0) return "AlignmentDirectional.bottomStart";
      if (start === 0.0 && y === 1.0) return "AlignmentDirectional.bottomCenter";
      if (start === 1.0 && y === 1.0) return "AlignmentDirectional.bottomEnd";
      return "AlignmentDirectional(" + start[$toStringAsFixed](1) + ", " + y[$toStringAsFixed](1) + ")";
    }
    toString() {
      return alignment.AlignmentDirectional._stringify(this.start, this.y);
    }
  };
  (alignment.AlignmentDirectional.new = function(start, y) {
    this[start$0] = start;
    this[y$0] = y;
    if (!(start != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/alignment.dart", 391, 14, "start != null");
    if (!(y != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/alignment.dart", 392, 14, "y != null");
    alignment.AlignmentDirectional.__proto__.new.call(this);
    ;
  }).prototype = alignment.AlignmentDirectional.prototype;
  dart.addTypeTests(alignment.AlignmentDirectional);
  dart.setMethodSignature(alignment.AlignmentDirectional, () => ({
    __proto__: dart.getMethods(alignment.AlignmentDirectional.__proto__),
    '-': dart.fnType(alignment.AlignmentDirectional, [alignment.AlignmentDirectional]),
    '+': dart.fnType(alignment.AlignmentDirectional, [alignment.AlignmentDirectional]),
    _negate: dart.fnType(alignment.AlignmentDirectional, []),
    '*': dart.fnType(alignment.AlignmentDirectional, [core.double]),
    '/': dart.fnType(alignment.AlignmentDirectional, [core.double]),
    '~/': dart.fnType(alignment.AlignmentDirectional, [core.double]),
    '%': dart.fnType(alignment.AlignmentDirectional, [core.double]),
    resolve: dart.fnType(alignment.Alignment, [ui.TextDirection])
  }));
  dart.setGetterSignature(alignment.AlignmentDirectional, () => ({
    __proto__: dart.getGetters(alignment.AlignmentDirectional.__proto__),
    [_x]: core.double,
    [_start$0]: core.double,
    [_y]: core.double
  }));
  dart.setLibraryUri(alignment.AlignmentDirectional, "package:flutter/src/painting/alignment.dart");
  dart.setFieldSignature(alignment.AlignmentDirectional, () => ({
    __proto__: dart.getFields(alignment.AlignmentDirectional.__proto__),
    start: dart.finalFieldType(core.double),
    y: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(alignment.AlignmentDirectional, ['toString']);
  dart.defineLazy(alignment.AlignmentDirectional, {
    /*alignment.AlignmentDirectional.topStart*/get topStart() {
      return C57 || CT.C57;
    },
    /*alignment.AlignmentDirectional.topCenter*/get topCenter() {
      return C58 || CT.C58;
    },
    /*alignment.AlignmentDirectional.topEnd*/get topEnd() {
      return C59 || CT.C59;
    },
    /*alignment.AlignmentDirectional.centerStart*/get centerStart() {
      return C60 || CT.C60;
    },
    /*alignment.AlignmentDirectional.center*/get center() {
      return C61 || CT.C61;
    },
    /*alignment.AlignmentDirectional.centerEnd*/get centerEnd() {
      return C62 || CT.C62;
    },
    /*alignment.AlignmentDirectional.bottomStart*/get bottomStart() {
      return C63 || CT.C63;
    },
    /*alignment.AlignmentDirectional.bottomCenter*/get bottomCenter() {
      return C64 || CT.C64;
    },
    /*alignment.AlignmentDirectional.bottomEnd*/get bottomEnd() {
      return C65 || CT.C65;
    }
  });
  var _x$ = dart.privateName(alignment, "_MixedAlignment._x");
  var _start$1 = dart.privateName(alignment, "_MixedAlignment._start");
  var _y$ = dart.privateName(alignment, "_MixedAlignment._y");
  alignment._MixedAlignment = class _MixedAlignment extends alignment.AlignmentGeometry {
    get [_x]() {
      return this[_x$];
    }
    set [_x](value) {
      super[_x] = value;
    }
    get [_start$0]() {
      return this[_start$1];
    }
    set [_start$0](value) {
      super[_start$0] = value;
    }
    get [_y]() {
      return this[_y$];
    }
    set [_y](value) {
      super[_y] = value;
    }
    _negate() {
      return new alignment._MixedAlignment.new(-dart.notNull(this[_x]), -dart.notNull(this[_start$0]), -dart.notNull(this[_y]));
    }
    ['*'](other) {
      return new alignment._MixedAlignment.new(dart.notNull(this[_x]) * dart.notNull(other), dart.notNull(this[_start$0]) * dart.notNull(other), dart.notNull(this[_y]) * dart.notNull(other));
    }
    ['/'](other) {
      return new alignment._MixedAlignment.new(dart.notNull(this[_x]) / dart.notNull(other), dart.notNull(this[_start$0]) / dart.notNull(other), dart.notNull(this[_y]) / dart.notNull(other));
    }
    ['~/'](other) {
      return new alignment._MixedAlignment.new((dart.notNull(this[_x]) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this[_start$0]) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this[_y]) / dart.notNull(other))[$truncate]()[$toDouble]());
    }
    ['%'](other) {
      return new alignment._MixedAlignment.new(this[_x][$modulo](other), this[_start$0][$modulo](other), this[_y][$modulo](other));
    }
    resolve(direction) {
      if (!(direction != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/alignment.dart", 624, 12, "direction != null");
      switch (direction) {
        case C18 || CT.C18:
        {
          return new alignment.Alignment.new(dart.notNull(this[_x]) - dart.notNull(this[_start$0]), this[_y]);
        }
        case C19 || CT.C19:
        {
          return new alignment.Alignment.new(dart.notNull(this[_x]) + dart.notNull(this[_start$0]), this[_y]);
        }
      }
      return null;
    }
  };
  (alignment._MixedAlignment.new = function(_x, _start, _y) {
    this[_x$] = _x;
    this[_start$1] = _start;
    this[_y$] = _y;
    alignment._MixedAlignment.__proto__.new.call(this);
    ;
  }).prototype = alignment._MixedAlignment.prototype;
  dart.addTypeTests(alignment._MixedAlignment);
  dart.setMethodSignature(alignment._MixedAlignment, () => ({
    __proto__: dart.getMethods(alignment._MixedAlignment.__proto__),
    _negate: dart.fnType(alignment._MixedAlignment, []),
    '*': dart.fnType(alignment._MixedAlignment, [core.double]),
    '/': dart.fnType(alignment._MixedAlignment, [core.double]),
    '~/': dart.fnType(alignment._MixedAlignment, [core.double]),
    '%': dart.fnType(alignment._MixedAlignment, [core.double]),
    resolve: dart.fnType(alignment.Alignment, [ui.TextDirection])
  }));
  dart.setLibraryUri(alignment._MixedAlignment, "package:flutter/src/painting/alignment.dart");
  dart.setFieldSignature(alignment._MixedAlignment, () => ({
    __proto__: dart.getFields(alignment._MixedAlignment.__proto__),
    [_x]: dart.finalFieldType(core.double),
    [_start$0]: dart.finalFieldType(core.double),
    [_y]: dart.finalFieldType(core.double)
  }));
  var y$1 = dart.privateName(alignment, "TextAlignVertical.y");
  var C66;
  var C67;
  var C68;
  alignment.TextAlignVertical = class TextAlignVertical extends core.Object {
    get y() {
      return this[y$1];
    }
    set y(value) {
      super.y = value;
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "TextAlignVertical")) + "(y: " + dart.str(this.y) + ")";
    }
  };
  (alignment.TextAlignVertical.new = function(opts) {
    let y = opts && 'y' in opts ? opts.y : null;
    this[y$1] = y;
    if (!(y != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/alignment.dart", 654, 15, "y != null");
    if (!(dart.notNull(y) >= -1.0 && dart.notNull(y) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/alignment.dart", 655, 15, "y >= -1.0 && y <= 1.0");
    ;
  }).prototype = alignment.TextAlignVertical.prototype;
  dart.addTypeTests(alignment.TextAlignVertical);
  dart.setLibraryUri(alignment.TextAlignVertical, "package:flutter/src/painting/alignment.dart");
  dart.setFieldSignature(alignment.TextAlignVertical, () => ({
    __proto__: dart.getFields(alignment.TextAlignVertical.__proto__),
    y: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(alignment.TextAlignVertical, ['toString']);
  dart.defineLazy(alignment.TextAlignVertical, {
    /*alignment.TextAlignVertical.top*/get top() {
      return C66 || CT.C66;
    },
    /*alignment.TextAlignVertical.center*/get center() {
      return C67 || CT.C67;
    },
    /*alignment.TextAlignVertical.bottom*/get bottom() {
      return C68 || CT.C68;
    }
  });
  var _name$2 = dart.privateName(decoration_image, "_name");
  var C69;
  var C70;
  var C71;
  var C72;
  var C73;
  decoration_image.ImageRepeat = class ImageRepeat extends core.Object {
    toString() {
      return this[_name$2];
    }
  };
  (decoration_image.ImageRepeat.new = function(index, _name) {
    this.index = index;
    this[_name$2] = _name;
    ;
  }).prototype = decoration_image.ImageRepeat.prototype;
  dart.addTypeTests(decoration_image.ImageRepeat);
  dart.setLibraryUri(decoration_image.ImageRepeat, "package:flutter/src/painting/decoration_image.dart");
  dart.setFieldSignature(decoration_image.ImageRepeat, () => ({
    __proto__: dart.getFields(decoration_image.ImageRepeat.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$2]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(decoration_image.ImageRepeat, ['toString']);
  decoration_image.ImageRepeat.repeat = C69 || CT.C69;
  decoration_image.ImageRepeat.repeatX = C70 || CT.C70;
  decoration_image.ImageRepeat.repeatY = C71 || CT.C71;
  decoration_image.ImageRepeat.noRepeat = C72 || CT.C72;
  decoration_image.ImageRepeat.values = C73 || CT.C73;
  var image$1 = dart.privateName(decoration_image, "DecorationImage.image");
  var colorFilter$ = dart.privateName(decoration_image, "DecorationImage.colorFilter");
  var fit$ = dart.privateName(decoration_image, "DecorationImage.fit");
  var alignment$ = dart.privateName(decoration_image, "DecorationImage.alignment");
  var centerSlice$ = dart.privateName(decoration_image, "DecorationImage.centerSlice");
  var repeat$ = dart.privateName(decoration_image, "DecorationImage.repeat");
  var matchTextDirection$ = dart.privateName(decoration_image, "DecorationImage.matchTextDirection");
  decoration_image.DecorationImage = class DecorationImage extends core.Object {
    get image() {
      return this[image$1];
    }
    set image(value) {
      super.image = value;
    }
    get colorFilter() {
      return this[colorFilter$];
    }
    set colorFilter(value) {
      super.colorFilter = value;
    }
    get fit() {
      return this[fit$];
    }
    set fit(value) {
      super.fit = value;
    }
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get centerSlice() {
      return this[centerSlice$];
    }
    set centerSlice(value) {
      super.centerSlice = value;
    }
    get repeat() {
      return this[repeat$];
    }
    set repeat(value) {
      super.repeat = value;
    }
    get matchTextDirection() {
      return this[matchTextDirection$];
    }
    set matchTextDirection(value) {
      super.matchTextDirection = value;
    }
    createPainter(onChanged) {
      if (!(onChanged != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/decoration_image.dart", 134, 12, "onChanged != null");
      return new decoration_image.DecorationImagePainter.__(this, onChanged);
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return decoration_image.DecorationImage.is(other) && dart.equals(other.image, this.image) && dart.equals(other.colorFilter, this.colorFilter) && dart.equals(other.fit, this.fit) && dart.equals(other.alignment, this.alignment) && dart.equals(other.centerSlice, this.centerSlice) && dart.equals(other.repeat, this.repeat) && dart.equals(other.matchTextDirection, this.matchTextDirection);
    }
    get hashCode() {
      return ui.hashValues(this.image, this.colorFilter, this.fit, this.alignment, this.centerSlice, this.repeat, this.matchTextDirection);
    }
    toString() {
      let properties = (() => {
        let t14 = JSArrayOfString().of([]);
        t14[$add](dart.str(this.image));
        if (this.colorFilter != null) t14[$add](dart.str(this.colorFilter));
        if (this.fit != null && !(dart.equals(this.fit, box_fit.BoxFit.fill) && this.centerSlice != null) && !(dart.equals(this.fit, box_fit.BoxFit.scaleDown) && this.centerSlice == null)) t14[$add](dart.str(this.fit));
        t14[$add](dart.str(this.alignment));
        if (this.centerSlice != null) t14[$add]("centerSlice: " + dart.str(this.centerSlice));
        if (!dart.equals(this.repeat, decoration_image.ImageRepeat.noRepeat)) t14[$add](dart.str(this.repeat));
        if (dart.test(this.matchTextDirection)) t14[$add]("match text direction");
        return t14;
      })();
      return dart.str(object.objectRuntimeType(this, "DecorationImage")) + "(" + dart.str(properties[$join](", ")) + ")";
    }
  };
  (decoration_image.DecorationImage.new = function(opts) {
    let image = opts && 'image' in opts ? opts.image : null;
    let colorFilter = opts && 'colorFilter' in opts ? opts.colorFilter : null;
    let fit = opts && 'fit' in opts ? opts.fit : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C50 || CT.C50;
    let centerSlice = opts && 'centerSlice' in opts ? opts.centerSlice : null;
    let repeat = opts && 'repeat' in opts ? opts.repeat : C72 || CT.C72;
    let matchTextDirection = opts && 'matchTextDirection' in opts ? opts.matchTextDirection : false;
    this[image$1] = image;
    this[colorFilter$] = colorFilter;
    this[fit$] = fit;
    this[alignment$] = alignment;
    this[centerSlice$] = centerSlice;
    this[repeat$] = repeat;
    this[matchTextDirection$] = matchTextDirection;
    if (!(image != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/decoration_image.dart", 49, 15, "image != null");
    if (!(alignment != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/decoration_image.dart", 50, 15, "alignment != null");
    if (!(repeat != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/decoration_image.dart", 51, 15, "repeat != null");
    if (!(matchTextDirection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/decoration_image.dart", 52, 15, "matchTextDirection != null");
    ;
  }).prototype = decoration_image.DecorationImage.prototype;
  dart.addTypeTests(decoration_image.DecorationImage);
  dart.setMethodSignature(decoration_image.DecorationImage, () => ({
    __proto__: dart.getMethods(decoration_image.DecorationImage.__proto__),
    createPainter: dart.fnType(decoration_image.DecorationImagePainter, [dart.fnType(dart.void, [])]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(decoration_image.DecorationImage, "package:flutter/src/painting/decoration_image.dart");
  dart.setFieldSignature(decoration_image.DecorationImage, () => ({
    __proto__: dart.getFields(decoration_image.DecorationImage.__proto__),
    image: dart.finalFieldType(image_provider.ImageProvider),
    colorFilter: dart.finalFieldType(ui.ColorFilter),
    fit: dart.finalFieldType(box_fit.BoxFit),
    alignment: dart.finalFieldType(alignment.AlignmentGeometry),
    centerSlice: dart.finalFieldType(ui.Rect),
    repeat: dart.finalFieldType(decoration_image.ImageRepeat),
    matchTextDirection: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(decoration_image.DecorationImage, ['_equals', 'toString']);
  dart.defineExtensionAccessors(decoration_image.DecorationImage, ['hashCode']);
  var _imageStream = dart.privateName(decoration_image, "_imageStream");
  var _image = dart.privateName(decoration_image, "_image");
  var _details$ = dart.privateName(decoration_image, "_details");
  var _onChanged$ = dart.privateName(decoration_image, "_onChanged");
  var _handleImage = dart.privateName(decoration_image, "_handleImage");
  decoration_image.DecorationImagePainter = class DecorationImagePainter extends core.Object {
    paint(canvas, rect, clipPath, configuration) {
      let t15, t15$;
      if (!(canvas != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/decoration_image.dart", 214, 12, "canvas != null");
      if (!(rect != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/decoration_image.dart", 215, 12, "rect != null");
      if (!(configuration != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/decoration_image.dart", 216, 12, "configuration != null");
      let flipHorizontally = false;
      if (dart.test(this[_details$].matchTextDirection)) {
        if (!dart.test(dart.fn(() => {
          if (configuration.textDirection == null) {
            dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("DecorationImage.matchTextDirection can only be used when a TextDirection is available."), new assertions.ErrorDescription.new("When DecorationImagePainter.paint() was called, there was no text direction provided " + "in the ImageConfiguration object to match."), new (DiagnosticsPropertyOfDecorationImage()).new("The DecorationImage was", this[_details$], {style: diagnostics.DiagnosticsTreeStyle.errorProperty}), new (DiagnosticsPropertyOfImageConfiguration()).new("The ImageConfiguration was", configuration, {style: diagnostics.DiagnosticsTreeStyle.errorProperty})])));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/decoration_image.dart", 220, 14, "() {\r\n        // We check this first so that the assert will fire immediately, not just\r\n        // when the image is ready.\r\n        if (configuration.textDirection == null) {\r\n          throw FlutterError.fromParts(<DiagnosticsNode>[\r\n            ErrorSummary('DecorationImage.matchTextDirection can only be used when a TextDirection is available.'),\r\n            ErrorDescription(\r\n              'When DecorationImagePainter.paint() was called, there was no text direction provided '\r\n              'in the ImageConfiguration object to match.'\r\n            ),\r\n            DiagnosticsProperty<DecorationImage>('The DecorationImage was', _details, style: DiagnosticsTreeStyle.errorProperty),\r\n            DiagnosticsProperty<ImageConfiguration>('The ImageConfiguration was', configuration, style: DiagnosticsTreeStyle.errorProperty),\r\n          ]);\r\n        }\r\n        return true;\r\n      }()");
        if (dart.equals(configuration.textDirection, ui.TextDirection.rtl)) flipHorizontally = true;
      }
      let newImageStream = this[_details$].image.resolve(configuration);
      if (!dart.equals(newImageStream.key, (t15 = this[_imageStream], t15 == null ? null : t15.key))) {
        let listener = new image_stream.ImageStreamListener.new(dart.bind(this, _handleImage));
        t15$ = this[_imageStream];
        t15$ == null ? null : t15$.removeListener(listener);
        this[_imageStream] = newImageStream;
        this[_imageStream].addListener(listener);
      }
      if (this[_image] == null) return;
      if (clipPath != null) {
        canvas.save();
        canvas.clipPath(clipPath);
      }
      decoration_image.paintImage({canvas: canvas, rect: rect, image: this[_image].image, scale: this[_image].scale, colorFilter: this[_details$].colorFilter, fit: this[_details$].fit, alignment: this[_details$].alignment.resolve(configuration.textDirection), centerSlice: this[_details$].centerSlice, repeat: this[_details$].repeat, flipHorizontally: flipHorizontally, filterQuality: ui.FilterQuality.low});
      if (clipPath != null) canvas.restore();
    }
    [_handleImage](value, synchronousCall) {
      if (dart.equals(this[_image], value)) return;
      this[_image] = value;
      if (!(this[_onChanged$] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/decoration_image.dart", 277, 12, "_onChanged != null");
      if (!dart.test(synchronousCall)) this[_onChanged$]();
    }
    dispose() {
      let t15;
      t15 = this[_imageStream];
      t15 == null ? null : t15.removeListener(new image_stream.ImageStreamListener.new(dart.bind(this, _handleImage)));
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "DecorationImagePainter")) + "(stream: " + dart.str(this[_imageStream]) + ", image: " + dart.str(this[_image]) + ") for " + dart.str(this[_details$]);
    }
  };
  (decoration_image.DecorationImagePainter.__ = function(_details, _onChanged) {
    this[_imageStream] = null;
    this[_image] = null;
    this[_details$] = _details;
    this[_onChanged$] = _onChanged;
    if (!(_details != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/decoration_image.dart", 191, 69, "_details != null");
    ;
  }).prototype = decoration_image.DecorationImagePainter.prototype;
  dart.addTypeTests(decoration_image.DecorationImagePainter);
  dart.setMethodSignature(decoration_image.DecorationImagePainter, () => ({
    __proto__: dart.getMethods(decoration_image.DecorationImagePainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect, ui.Path, image_provider.ImageConfiguration]),
    [_handleImage]: dart.fnType(dart.void, [image_stream.ImageInfo, core.bool]),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(decoration_image.DecorationImagePainter, "package:flutter/src/painting/decoration_image.dart");
  dart.setFieldSignature(decoration_image.DecorationImagePainter, () => ({
    __proto__: dart.getFields(decoration_image.DecorationImagePainter.__proto__),
    [_details$]: dart.finalFieldType(decoration_image.DecorationImage),
    [_onChanged$]: dart.finalFieldType(dart.fnType(dart.void, [])),
    [_imageStream]: dart.fieldType(image_stream.ImageStream),
    [_image]: dart.fieldType(image_stream.ImageInfo)
  }));
  dart.defineExtensionMethods(decoration_image.DecorationImagePainter, ['toString']);
  var C74;
  decoration_image.paintImage = function paintImage(opts) {
    let t15;
    let canvas = opts && 'canvas' in opts ? opts.canvas : null;
    let rect = opts && 'rect' in opts ? opts.rect : null;
    let image = opts && 'image' in opts ? opts.image : null;
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    let colorFilter = opts && 'colorFilter' in opts ? opts.colorFilter : null;
    let fit = opts && 'fit' in opts ? opts.fit : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C50 || CT.C50;
    let centerSlice = opts && 'centerSlice' in opts ? opts.centerSlice : null;
    let repeat = opts && 'repeat' in opts ? opts.repeat : C72 || CT.C72;
    let flipHorizontally = opts && 'flipHorizontally' in opts ? opts.flipHorizontally : false;
    let invertColors = opts && 'invertColors' in opts ? opts.invertColors : false;
    let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : C74 || CT.C74;
    if (!(canvas != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/decoration_image.dart", 380, 10, "canvas != null");
    if (!(image != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/decoration_image.dart", 381, 10, "image != null");
    if (!(alignment != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/decoration_image.dart", 382, 10, "alignment != null");
    if (!(repeat != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/decoration_image.dart", 383, 10, "repeat != null");
    if (!(flipHorizontally != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/decoration_image.dart", 384, 10, "flipHorizontally != null");
    if (dart.test(rect.isEmpty)) return;
    let outputSize = rect.size;
    let inputSize = new ui.Size.new(image.width[$toDouble](), image.height[$toDouble]());
    let sliceBorder = null;
    if (centerSlice != null) {
      sliceBorder = new ui.Offset.new(dart.notNull(centerSlice.left) + dart.notNull(inputSize.width) - dart.notNull(centerSlice.right), dart.notNull(centerSlice.top) + dart.notNull(inputSize.height) - dart.notNull(centerSlice.bottom));
      outputSize = ui.Size.as(outputSize['-'](sliceBorder));
      inputSize = ui.Size.as(inputSize['-'](sliceBorder));
    }
    fit == null ? fit = centerSlice == null ? box_fit.BoxFit.scaleDown : box_fit.BoxFit.fill : null;
    if (!(centerSlice == null || !dart.equals(fit, box_fit.BoxFit.none) && !dart.equals(fit, box_fit.BoxFit.cover))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/decoration_image.dart", 399, 10, "centerSlice == null || (fit != BoxFit.none && fit != BoxFit.cover)");
    let fittedSizes = box_fit.applyBoxFit(fit, inputSize['/'](scale), outputSize);
    let sourceSize = fittedSizes.source['*'](scale);
    let destinationSize = fittedSizes.destination;
    if (centerSlice != null) {
      outputSize = outputSize['+'](sliceBorder);
      destinationSize = destinationSize['+'](sliceBorder);
      if (!dart.equals(sourceSize, inputSize)) dart.assertFailed("centerSlice was used with a BoxFit that does not guarantee that the image is fully visible.", "org-dartlang-app:///packages/flutter/src/painting/decoration_image.dart", 408, 12, "sourceSize == inputSize");
    }
    if (!dart.equals(repeat, decoration_image.ImageRepeat.noRepeat) && dart.equals(destinationSize, outputSize)) {
      repeat = decoration_image.ImageRepeat.noRepeat;
    }
    let paint = (t15 = ui.Paint.new(), t15.isAntiAlias = false, t15);
    if (colorFilter != null) paint.colorFilter = colorFilter;
    if (!dart.equals(sourceSize, destinationSize)) {
      paint.filterQuality = filterQuality;
    }
    paint.invertColors = invertColors;
    let halfWidthDelta = (dart.notNull(outputSize.width) - dart.notNull(destinationSize.width)) / 2.0;
    let halfHeightDelta = (dart.notNull(outputSize.height) - dart.notNull(destinationSize.height)) / 2.0;
    let dx = halfWidthDelta + dart.notNull(dart.test(flipHorizontally) ? -dart.notNull(alignment.x) : alignment.x) * halfWidthDelta;
    let dy = halfHeightDelta + dart.notNull(alignment.y) * halfHeightDelta;
    let destinationPosition = rect.topLeft.translate(dx, dy);
    let destinationRect = destinationPosition['&'](destinationSize);
    let needSave = !dart.equals(repeat, decoration_image.ImageRepeat.noRepeat) || dart.test(flipHorizontally);
    if (needSave) canvas.save();
    if (!dart.equals(repeat, decoration_image.ImageRepeat.noRepeat)) canvas.clipRect(rect);
    if (dart.test(flipHorizontally)) {
      let dx = -(dart.notNull(rect.left) + dart.notNull(rect.width) / 2.0);
      canvas.translate(-dx, 0.0);
      canvas.scale(-1.0, 1.0);
      canvas.translate(dx, 0.0);
    }
    if (centerSlice == null) {
      let sourceRect = alignment.inscribe(sourceSize, ui.Offset.zero['&'](inputSize));
      if (dart.equals(repeat, decoration_image.ImageRepeat.noRepeat)) {
        canvas.drawImageRect(image, sourceRect, destinationRect, paint);
      } else {
        for (let tileRect of decoration_image._generateImageTileRects(rect, destinationRect, repeat))
          canvas.drawImageRect(image, sourceRect, tileRect, paint);
      }
    } else {
      if (dart.equals(repeat, decoration_image.ImageRepeat.noRepeat)) {
        canvas.drawImageNine(image, centerSlice, destinationRect, paint);
      } else {
        for (let tileRect of decoration_image._generateImageTileRects(rect, destinationRect, repeat))
          canvas.drawImageNine(image, centerSlice, tileRect, paint);
      }
    }
    if (needSave) canvas.restore();
  };
  decoration_image._generateImageTileRects = function _generateImageTileRects(outputRect, fundamentalRect, repeat) {
    return new (SyncIterableOfRect()).new(function* _generateImageTileRects() {
      let startX = 0;
      let startY = 0;
      let stopX = 0;
      let stopY = 0;
      let strideX = fundamentalRect.width;
      let strideY = fundamentalRect.height;
      if (dart.equals(repeat, decoration_image.ImageRepeat.repeat) || dart.equals(repeat, decoration_image.ImageRepeat.repeatX)) {
        startX = ((dart.notNull(outputRect.left) - dart.notNull(fundamentalRect.left)) / dart.notNull(strideX))[$floor]();
        stopX = ((dart.notNull(outputRect.right) - dart.notNull(fundamentalRect.right)) / dart.notNull(strideX))[$ceil]();
      }
      if (dart.equals(repeat, decoration_image.ImageRepeat.repeat) || dart.equals(repeat, decoration_image.ImageRepeat.repeatY)) {
        startY = ((dart.notNull(outputRect.top) - dart.notNull(fundamentalRect.top)) / dart.notNull(strideY))[$floor]();
        stopY = ((dart.notNull(outputRect.bottom) - dart.notNull(fundamentalRect.bottom)) / dart.notNull(strideY))[$ceil]();
      }
      for (let i = startX; i <= stopX; i = i + 1) {
        for (let j = startY; j <= stopY; j = j + 1)
          yield fundamentalRect.shift(new ui.Offset.new(i * dart.notNull(strideX), j * dart.notNull(strideY)));
      }
    });
  };
  var _name$3 = dart.privateName(box_fit, "_name");
  var C75;
  var C76;
  var C77;
  var C78;
  var C79;
  var C80;
  var C81;
  var C82;
  box_fit.BoxFit = class BoxFit extends core.Object {
    toString() {
      return this[_name$3];
    }
  };
  (box_fit.BoxFit.new = function(index, _name) {
    this.index = index;
    this[_name$3] = _name;
    ;
  }).prototype = box_fit.BoxFit.prototype;
  dart.addTypeTests(box_fit.BoxFit);
  dart.setLibraryUri(box_fit.BoxFit, "package:flutter/src/painting/box_fit.dart");
  dart.setFieldSignature(box_fit.BoxFit, () => ({
    __proto__: dart.getFields(box_fit.BoxFit.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$3]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(box_fit.BoxFit, ['toString']);
  box_fit.BoxFit.fill = C75 || CT.C75;
  box_fit.BoxFit.contain = C76 || CT.C76;
  box_fit.BoxFit.cover = C77 || CT.C77;
  box_fit.BoxFit.fitWidth = C78 || CT.C78;
  box_fit.BoxFit.fitHeight = C79 || CT.C79;
  box_fit.BoxFit.none = C80 || CT.C80;
  box_fit.BoxFit.scaleDown = C81 || CT.C81;
  box_fit.BoxFit.values = C82 || CT.C82;
  var source$ = dart.privateName(box_fit, "FittedSizes.source");
  var destination$ = dart.privateName(box_fit, "FittedSizes.destination");
  box_fit.FittedSizes = class FittedSizes extends core.Object {
    get source() {
      return this[source$];
    }
    set source(value) {
      super.source = value;
    }
    get destination() {
      return this[destination$];
    }
    set destination(value) {
      super.destination = value;
    }
  };
  (box_fit.FittedSizes.new = function(source, destination) {
    this[source$] = source;
    this[destination$] = destination;
    ;
  }).prototype = box_fit.FittedSizes.prototype;
  dart.addTypeTests(box_fit.FittedSizes);
  dart.setLibraryUri(box_fit.FittedSizes, "package:flutter/src/painting/box_fit.dart");
  dart.setFieldSignature(box_fit.FittedSizes, () => ({
    __proto__: dart.getFields(box_fit.FittedSizes.__proto__),
    source: dart.finalFieldType(ui.Size),
    destination: dart.finalFieldType(ui.Size)
  }));
  var C84;
  var C83;
  box_fit.applyBoxFit = function applyBoxFit(fit, inputSize, outputSize) {
    if (dart.notNull(inputSize.height) <= 0.0 || dart.notNull(inputSize.width) <= 0.0 || dart.notNull(outputSize.height) <= 0.0 || dart.notNull(outputSize.width) <= 0.0) return C83 || CT.C83;
    let sourceSize = null;
    let destinationSize = null;
    switch (fit) {
      case C75 || CT.C75:
      {
        sourceSize = inputSize;
        destinationSize = outputSize;
        break;
      }
      case C76 || CT.C76:
      {
        sourceSize = inputSize;
        if (dart.notNull(outputSize.width) / dart.notNull(outputSize.height) > dart.notNull(sourceSize.width) / dart.notNull(sourceSize.height))
          destinationSize = new ui.Size.new(dart.notNull(sourceSize.width) * dart.notNull(outputSize.height) / dart.notNull(sourceSize.height), outputSize.height);
        else
          destinationSize = new ui.Size.new(outputSize.width, dart.notNull(sourceSize.height) * dart.notNull(outputSize.width) / dart.notNull(sourceSize.width));
        break;
      }
      case C77 || CT.C77:
      {
        if (dart.notNull(outputSize.width) / dart.notNull(outputSize.height) > dart.notNull(inputSize.width) / dart.notNull(inputSize.height)) {
          sourceSize = new ui.Size.new(inputSize.width, dart.notNull(inputSize.width) * dart.notNull(outputSize.height) / dart.notNull(outputSize.width));
        } else {
          sourceSize = new ui.Size.new(dart.notNull(inputSize.height) * dart.notNull(outputSize.width) / dart.notNull(outputSize.height), inputSize.height);
        }
        destinationSize = outputSize;
        break;
      }
      case C78 || CT.C78:
      {
        sourceSize = new ui.Size.new(inputSize.width, dart.notNull(inputSize.width) * dart.notNull(outputSize.height) / dart.notNull(outputSize.width));
        destinationSize = new ui.Size.new(outputSize.width, dart.notNull(sourceSize.height) * dart.notNull(outputSize.width) / dart.notNull(sourceSize.width));
        break;
      }
      case C79 || CT.C79:
      {
        sourceSize = new ui.Size.new(dart.notNull(inputSize.height) * dart.notNull(outputSize.width) / dart.notNull(outputSize.height), inputSize.height);
        destinationSize = new ui.Size.new(dart.notNull(sourceSize.width) * dart.notNull(outputSize.height) / dart.notNull(sourceSize.height), outputSize.height);
        break;
      }
      case C80 || CT.C80:
      {
        sourceSize = new ui.Size.new(math.min(core.double, inputSize.width, outputSize.width), math.min(core.double, inputSize.height, outputSize.height));
        destinationSize = sourceSize;
        break;
      }
      case C81 || CT.C81:
      {
        sourceSize = inputSize;
        destinationSize = inputSize;
        let aspectRatio = dart.notNull(inputSize.width) / dart.notNull(inputSize.height);
        if (dart.notNull(destinationSize.height) > dart.notNull(outputSize.height)) destinationSize = new ui.Size.new(dart.notNull(outputSize.height) * aspectRatio, outputSize.height);
        if (dart.notNull(destinationSize.width) > dart.notNull(outputSize.width)) destinationSize = new ui.Size.new(outputSize.width, dart.notNull(outputSize.width) / aspectRatio);
        break;
      }
    }
    return new box_fit.FittedSizes.new(sourceSize, destinationSize);
  };
  var _scaleAlpha = dart.privateName(colors, "_scaleAlpha");
  var alpha$ = dart.privateName(colors, "HSVColor.alpha");
  var hue$ = dart.privateName(colors, "HSVColor.hue");
  var saturation$ = dart.privateName(colors, "HSVColor.saturation");
  var value$ = dart.privateName(colors, "HSVColor.value");
  colors.HSVColor = class HSVColor extends core.Object {
    get alpha() {
      return this[alpha$];
    }
    set alpha(value) {
      super.alpha = value;
    }
    get hue() {
      return this[hue$];
    }
    set hue(value) {
      super.hue = value;
    }
    get saturation() {
      return this[saturation$];
    }
    set saturation(value) {
      super.saturation = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    static fromColor(color) {
      let red = dart.notNull(color.red) / 255;
      let green = dart.notNull(color.green) / 255;
      let blue = dart.notNull(color.blue) / 255;
      let max = math.max(core.double, red, math.max(core.double, green, blue));
      let min = math.min(core.double, red, math.min(core.double, green, blue));
      let delta = max - min;
      let alpha = dart.notNull(color.alpha) / 255;
      let hue = colors._getHue(red, green, blue, max, delta);
      let saturation = max === 0.0 ? 0.0 : delta / max;
      return new colors.HSVColor.fromAHSV(alpha, hue, saturation, max);
    }
    withAlpha(alpha) {
      return new colors.HSVColor.fromAHSV(alpha, this.hue, this.saturation, this.value);
    }
    withHue(hue) {
      return new colors.HSVColor.fromAHSV(this.alpha, hue, this.saturation, this.value);
    }
    withSaturation(saturation) {
      return new colors.HSVColor.fromAHSV(this.alpha, this.hue, saturation, this.value);
    }
    withValue(value) {
      return new colors.HSVColor.fromAHSV(this.alpha, this.hue, this.saturation, value);
    }
    toColor() {
      let chroma = dart.notNull(this.saturation) * dart.notNull(this.value);
      let secondary = chroma * (1.0 - ((dart.notNull(this.hue) / 60.0)[$modulo](2.0) - 1.0)[$abs]());
      let match = dart.notNull(this.value) - chroma;
      return colors._colorFromHue(this.alpha, this.hue, chroma, secondary, match);
    }
    [_scaleAlpha](factor) {
      return this.withAlpha(dart.notNull(this.alpha) * dart.notNull(factor));
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/colors.dart", 201, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return b[_scaleAlpha](t);
      if (b == null) return a[_scaleAlpha](1.0 - dart.notNull(t));
      return new colors.HSVColor.fromAHSV(ui.lerpDouble(a.alpha, b.alpha, t)[$clamp](0.0, 1.0), ui.lerpDouble(a.hue, b.hue, t)[$modulo](360.0), ui.lerpDouble(a.saturation, b.saturation, t)[$clamp](0.0, 1.0), ui.lerpDouble(a.value, b.value, t)[$clamp](0.0, 1.0));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      return colors.HSVColor.is(other) && other.alpha == this.alpha && other.hue == this.hue && other.saturation == this.saturation && other.value == this.value;
    }
    get hashCode() {
      return ui.hashValues(this.alpha, this.hue, this.saturation, this.value);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "HSVColor")) + "(" + dart.str(this.alpha) + ", " + dart.str(this.hue) + ", " + dart.str(this.saturation) + ", " + dart.str(this.value) + ")";
    }
  };
  (colors.HSVColor.fromAHSV = function(alpha, hue, saturation, value) {
    this[alpha$] = alpha;
    this[hue$] = hue;
    this[saturation$] = saturation;
    this[value$] = value;
    if (!(alpha != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/colors.dart", 92, 14, "alpha != null");
    if (!(hue != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/colors.dart", 93, 14, "hue != null");
    if (!(saturation != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/colors.dart", 94, 14, "saturation != null");
    if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/colors.dart", 95, 14, "value != null");
    if (!(dart.notNull(alpha) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/colors.dart", 96, 14, "alpha >= 0.0");
    if (!(dart.notNull(alpha) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/colors.dart", 97, 14, "alpha <= 1.0");
    if (!(dart.notNull(hue) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/colors.dart", 98, 14, "hue >= 0.0");
    if (!(dart.notNull(hue) <= 360.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/colors.dart", 99, 14, "hue <= 360.0");
    if (!(dart.notNull(saturation) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/colors.dart", 100, 14, "saturation >= 0.0");
    if (!(dart.notNull(saturation) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/colors.dart", 101, 14, "saturation <= 1.0");
    if (!(dart.notNull(value) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/colors.dart", 102, 14, "value >= 0.0");
    if (!(dart.notNull(value) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/colors.dart", 103, 14, "value <= 1.0");
    ;
  }).prototype = colors.HSVColor.prototype;
  dart.addTypeTests(colors.HSVColor);
  dart.setMethodSignature(colors.HSVColor, () => ({
    __proto__: dart.getMethods(colors.HSVColor.__proto__),
    withAlpha: dart.fnType(colors.HSVColor, [core.double]),
    withHue: dart.fnType(colors.HSVColor, [core.double]),
    withSaturation: dart.fnType(colors.HSVColor, [core.double]),
    withValue: dart.fnType(colors.HSVColor, [core.double]),
    toColor: dart.fnType(ui.Color, []),
    [_scaleAlpha]: dart.fnType(colors.HSVColor, [core.double]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(colors.HSVColor, "package:flutter/src/painting/colors.dart");
  dart.setFieldSignature(colors.HSVColor, () => ({
    __proto__: dart.getFields(colors.HSVColor.__proto__),
    alpha: dart.finalFieldType(core.double),
    hue: dart.finalFieldType(core.double),
    saturation: dart.finalFieldType(core.double),
    value: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(colors.HSVColor, ['_equals', 'toString']);
  dart.defineExtensionAccessors(colors.HSVColor, ['hashCode']);
  var alpha$0 = dart.privateName(colors, "HSLColor.alpha");
  var hue$0 = dart.privateName(colors, "HSLColor.hue");
  var saturation$0 = dart.privateName(colors, "HSLColor.saturation");
  var lightness$ = dart.privateName(colors, "HSLColor.lightness");
  colors.HSLColor = class HSLColor extends core.Object {
    get alpha() {
      return this[alpha$0];
    }
    set alpha(value) {
      super.alpha = value;
    }
    get hue() {
      return this[hue$0];
    }
    set hue(value) {
      super.hue = value;
    }
    get saturation() {
      return this[saturation$0];
    }
    set saturation(value) {
      super.saturation = value;
    }
    get lightness() {
      return this[lightness$];
    }
    set lightness(value) {
      super.lightness = value;
    }
    static fromColor(color) {
      let red = dart.notNull(color.red) / 255;
      let green = dart.notNull(color.green) / 255;
      let blue = dart.notNull(color.blue) / 255;
      let max = math.max(core.double, red, math.max(core.double, green, blue));
      let min = math.min(core.double, red, math.min(core.double, green, blue));
      let delta = max - min;
      let alpha = dart.notNull(color.alpha) / 255;
      let hue = colors._getHue(red, green, blue, max, delta);
      let lightness = (max + min) / 2.0;
      let saturation = lightness === 1.0 ? 0.0 : (delta / (1.0 - (2.0 * lightness - 1.0)[$abs]()))[$clamp](0.0, 1.0);
      return new colors.HSLColor.fromAHSL(alpha, hue, saturation, lightness);
    }
    withAlpha(alpha) {
      return new colors.HSLColor.fromAHSL(alpha, this.hue, this.saturation, this.lightness);
    }
    withHue(hue) {
      return new colors.HSLColor.fromAHSL(this.alpha, hue, this.saturation, this.lightness);
    }
    withSaturation(saturation) {
      return new colors.HSLColor.fromAHSL(this.alpha, this.hue, saturation, this.lightness);
    }
    withLightness(lightness) {
      return new colors.HSLColor.fromAHSL(this.alpha, this.hue, this.saturation, lightness);
    }
    toColor() {
      let chroma = (1.0 - (2.0 * dart.notNull(this.lightness) - 1.0)[$abs]()) * dart.notNull(this.saturation);
      let secondary = chroma * (1.0 - ((dart.notNull(this.hue) / 60.0)[$modulo](2.0) - 1.0)[$abs]());
      let match = dart.notNull(this.lightness) - chroma / 2.0;
      return colors._colorFromHue(this.alpha, this.hue, chroma, secondary, match);
    }
    [_scaleAlpha](factor) {
      return this.withAlpha(dart.notNull(this.alpha) * dart.notNull(factor));
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/colors.dart", 385, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return b[_scaleAlpha](t);
      if (b == null) return a[_scaleAlpha](1.0 - dart.notNull(t));
      return new colors.HSLColor.fromAHSL(ui.lerpDouble(a.alpha, b.alpha, t)[$clamp](0.0, 1.0), ui.lerpDouble(a.hue, b.hue, t)[$modulo](360.0), ui.lerpDouble(a.saturation, b.saturation, t)[$clamp](0.0, 1.0), ui.lerpDouble(a.lightness, b.lightness, t)[$clamp](0.0, 1.0));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      return colors.HSLColor.is(other) && other.alpha == this.alpha && other.hue == this.hue && other.saturation == this.saturation && other.lightness == this.lightness;
    }
    get hashCode() {
      return ui.hashValues(this.alpha, this.hue, this.saturation, this.lightness);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "HSLColor")) + "(" + dart.str(this.alpha) + ", " + dart.str(this.hue) + ", " + dart.str(this.saturation) + ", " + dart.str(this.lightness) + ")";
    }
  };
  (colors.HSLColor.fromAHSL = function(alpha, hue, saturation, lightness) {
    this[alpha$0] = alpha;
    this[hue$0] = hue;
    this[saturation$0] = saturation;
    this[lightness$] = lightness;
    if (!(alpha != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/colors.dart", 261, 14, "alpha != null");
    if (!(hue != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/colors.dart", 262, 14, "hue != null");
    if (!(saturation != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/colors.dart", 263, 14, "saturation != null");
    if (!(lightness != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/colors.dart", 264, 14, "lightness != null");
    if (!(dart.notNull(alpha) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/colors.dart", 265, 14, "alpha >= 0.0");
    if (!(dart.notNull(alpha) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/colors.dart", 266, 14, "alpha <= 1.0");
    if (!(dart.notNull(hue) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/colors.dart", 267, 14, "hue >= 0.0");
    if (!(dart.notNull(hue) <= 360.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/colors.dart", 268, 14, "hue <= 360.0");
    if (!(dart.notNull(saturation) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/colors.dart", 269, 14, "saturation >= 0.0");
    if (!(dart.notNull(saturation) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/colors.dart", 270, 14, "saturation <= 1.0");
    if (!(dart.notNull(lightness) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/colors.dart", 271, 14, "lightness >= 0.0");
    if (!(dart.notNull(lightness) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/colors.dart", 272, 14, "lightness <= 1.0");
    ;
  }).prototype = colors.HSLColor.prototype;
  dart.addTypeTests(colors.HSLColor);
  dart.setMethodSignature(colors.HSLColor, () => ({
    __proto__: dart.getMethods(colors.HSLColor.__proto__),
    withAlpha: dart.fnType(colors.HSLColor, [core.double]),
    withHue: dart.fnType(colors.HSLColor, [core.double]),
    withSaturation: dart.fnType(colors.HSLColor, [core.double]),
    withLightness: dart.fnType(colors.HSLColor, [core.double]),
    toColor: dart.fnType(ui.Color, []),
    [_scaleAlpha]: dart.fnType(colors.HSLColor, [core.double]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(colors.HSLColor, "package:flutter/src/painting/colors.dart");
  dart.setFieldSignature(colors.HSLColor, () => ({
    __proto__: dart.getFields(colors.HSLColor.__proto__),
    alpha: dart.finalFieldType(core.double),
    hue: dart.finalFieldType(core.double),
    saturation: dart.finalFieldType(core.double),
    lightness: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(colors.HSLColor, ['_equals', 'toString']);
  dart.defineExtensionAccessors(colors.HSLColor, ['hashCode']);
  var _swatch = dart.privateName(colors, "_swatch");
  const _is_ColorSwatch_default = Symbol('_is_ColorSwatch_default');
  var _swatch$ = dart.privateName(colors, "ColorSwatch._swatch");
  colors.ColorSwatch$ = dart.generic(T => {
    var ColorSwatchOfT = () => (ColorSwatchOfT = dart.constFn(colors.ColorSwatch$(T)))();
    class ColorSwatch extends ui.Color {
      get [_swatch]() {
        return this[_swatch$];
      }
      set [_swatch](value) {
        super[_swatch] = value;
      }
      _get(index) {
        T._check(index);
        return this[_swatch][$_get](index);
      }
      _equals(other) {
        if (other == null) return false;
        if (this === other) return true;
        if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
        return super._equals(other) && ColorSwatchOfT().is(other) && dart.equals(other[_swatch], this[_swatch]);
      }
      get hashCode() {
        return ui.hashValues(this[$runtimeType], this.value, this[_swatch]);
      }
      toString() {
        return dart.str(object.objectRuntimeType(this, "ColorSwatch")) + "(primary value: " + dart.str(super.toString()) + ")";
      }
    }
    (ColorSwatch.new = function(primary, _swatch) {
      this[_swatch$] = _swatch;
      ColorSwatch.__proto__.new.call(this, primary);
      ;
    }).prototype = ColorSwatch.prototype;
    dart.addTypeTests(ColorSwatch);
    ColorSwatch.prototype[_is_ColorSwatch_default] = true;
    dart.setMethodSignature(ColorSwatch, () => ({
      __proto__: dart.getMethods(ColorSwatch.__proto__),
      _get: dart.fnType(ui.Color, [core.Object]),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object])
    }));
    dart.setLibraryUri(ColorSwatch, "package:flutter/src/painting/colors.dart");
    dart.setFieldSignature(ColorSwatch, () => ({
      __proto__: dart.getFields(ColorSwatch.__proto__),
      [_swatch]: dart.finalFieldType(core.Map$(T, ui.Color))
    }));
    dart.defineExtensionMethods(ColorSwatch, ['_equals', 'toString']);
    dart.defineExtensionAccessors(ColorSwatch, ['hashCode']);
    return ColorSwatch;
  });
  colors.ColorSwatch = colors.ColorSwatch$();
  dart.addTypeTests(colors.ColorSwatch, _is_ColorSwatch_default);
  var C85;
  var _name$4 = dart.privateName(diagnostics, "_name");
  var C86;
  var C87;
  colors.ColorProperty = class ColorProperty extends diagnostics.DiagnosticsProperty$(ui.Color) {
    toJsonMap(delegate) {
      let json = super.toJsonMap(delegate);
      if (this.value != null) {
        json[$_set]("valueProperties", new (IdentityMapOfString$Object()).from(["red", this.value.red, "green", this.value.green, "blue", this.value.blue, "alpha", this.value.alpha]));
      }
      return json;
    }
  };
  (colors.ColorProperty.new = function(name, value, opts) {
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C85 || CT.C85;
    let style = opts && 'style' in opts ? opts.style : C86 || CT.C86;
    let level = opts && 'level' in opts ? opts.level : C87 || CT.C87;
    if (!(showName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/colors.dart", 473, 15, "showName != null");
    if (!(style != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/colors.dart", 474, 15, "style != null");
    if (!(level != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/colors.dart", 475, 15, "level != null");
    colors.ColorProperty.__proto__.new.call(this, name, value, {defaultValue: defaultValue, showName: showName, style: style, level: level});
    ;
  }).prototype = colors.ColorProperty.prototype;
  dart.addTypeTests(colors.ColorProperty);
  dart.setLibraryUri(colors.ColorProperty, "package:flutter/src/painting/colors.dart");
  colors._getHue = function _getHue(red, green, blue, max, delta) {
    let hue = null;
    if (max === 0.0) {
      hue = 0.0;
    } else if (max == red) {
      hue = 60.0 * ((dart.notNull(green) - dart.notNull(blue)) / dart.notNull(delta))[$modulo](6);
    } else if (max == green) {
      hue = 60.0 * ((dart.notNull(blue) - dart.notNull(red)) / dart.notNull(delta) + 2);
    } else if (max == blue) {
      hue = 60.0 * ((dart.notNull(red) - dart.notNull(green)) / dart.notNull(delta) + 4);
    }
    hue = hue[$isNaN] ? 0.0 : hue;
    return hue;
  };
  colors._colorFromHue = function _colorFromHue(alpha, hue, chroma, secondary, match) {
    let red = null;
    let green = null;
    let blue = null;
    if (dart.notNull(hue) < 60.0) {
      red = chroma;
      green = secondary;
      blue = 0.0;
    } else if (dart.notNull(hue) < 120.0) {
      red = secondary;
      green = chroma;
      blue = 0.0;
    } else if (dart.notNull(hue) < 180.0) {
      red = 0.0;
      green = chroma;
      blue = secondary;
    } else if (dart.notNull(hue) < 240.0) {
      red = 0.0;
      green = secondary;
      blue = chroma;
    } else if (dart.notNull(hue) < 300.0) {
      red = secondary;
      green = 0.0;
      blue = chroma;
    } else {
      red = chroma;
      green = 0.0;
      blue = secondary;
    }
    return new ui.Color.fromARGB((dart.notNull(alpha) * 255)[$round](), ((dart.notNull(red) + dart.notNull(match)) * 255)[$round](), ((dart.notNull(green) + dart.notNull(match)) * 255)[$round](), ((dart.notNull(blue) + dart.notNull(match)) * 255)[$round]());
  };
  var C88;
  var spreadRadius$ = dart.privateName(box_shadow, "BoxShadow.spreadRadius");
  box_shadow.BoxShadow = class BoxShadow extends ui.Shadow {
    get spreadRadius() {
      return this[spreadRadius$];
    }
    set spreadRadius(value) {
      super.spreadRadius = value;
    }
    toPaint() {
      let t15;
      let result = (t15 = ui.Paint.new(), t15.color = this.color, t15.maskFilter = new ui.MaskFilter.blur(ui.BlurStyle.normal, this.blurSigma), t15);
      if (!dart.test(dart.fn(() => {
        if (dart.test(debug$.debugDisableShadows)) result.maskFilter = null;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_shadow.dart", 54, 12, "() {\r\n      if (debugDisableShadows)\r\n        result.maskFilter = null;\r\n      return true;\r\n    }()");
      return result;
    }
    scale(factor) {
      return new box_shadow.BoxShadow.new({color: this.color, offset: this.offset['*'](factor), blurRadius: dart.notNull(this.blurRadius) * dart.notNull(factor), spreadRadius: dart.notNull(this.spreadRadius) * dart.notNull(factor)});
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_shadow.dart", 81, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return b.scale(t);
      if (b == null) return a.scale(1.0 - dart.notNull(t));
      return new box_shadow.BoxShadow.new({color: ui.Color.lerp(a.color, b.color, t), offset: ui.Offset.lerp(a.offset, b.offset, t), blurRadius: ui.lerpDouble(a.blurRadius, b.blurRadius, t), spreadRadius: ui.lerpDouble(a.spreadRadius, b.spreadRadius, t)});
    }
    static lerpList(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_shadow.dart", 102, 12, "t != null");
      if (a == null && b == null) return null;
      a == null ? a = JSArrayOfBoxShadow().of([]) : null;
      b == null ? b = JSArrayOfBoxShadow().of([]) : null;
      let commonLength = math.min(core.int, a[$length], b[$length]);
      return (() => {
        let t15 = JSArrayOfBoxShadow().of([]);
        for (let i = 0; i < commonLength; i = i + 1)
          t15[$add](box_shadow.BoxShadow.lerp(a[$_get](i), b[$_get](i), t));
        for (let i = commonLength; i < dart.notNull(a[$length]); i = i + 1)
          t15[$add](a[$_get](i).scale(1.0 - dart.notNull(t)));
        for (let i = commonLength; i < dart.notNull(b[$length]); i = i + 1)
          t15[$add](b[$_get](i).scale(t));
        return t15;
      })();
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return box_shadow.BoxShadow.is(other) && dart.equals(other.color, this.color) && dart.equals(other.offset, this.offset) && other.blurRadius == this.blurRadius && other.spreadRadius == this.spreadRadius;
    }
    get hashCode() {
      return ui.hashValues(this.color, this.offset, this.blurRadius, this.spreadRadius);
    }
    toString() {
      return "BoxShadow(" + dart.str(this.color) + ", " + dart.str(this.offset) + ", " + dart.str(debug.debugFormatDouble(this.blurRadius)) + ", " + dart.str(debug.debugFormatDouble(this.spreadRadius)) + ")";
    }
  };
  (box_shadow.BoxShadow.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : C7 || CT.C7;
    let offset = opts && 'offset' in opts ? opts.offset : C88 || CT.C88;
    let blurRadius = opts && 'blurRadius' in opts ? opts.blurRadius : 0;
    let spreadRadius = opts && 'spreadRadius' in opts ? opts.spreadRadius : 0;
    this[spreadRadius$] = spreadRadius;
    box_shadow.BoxShadow.__proto__.new.call(this, {color: color, offset: offset, blurRadius: blurRadius});
    ;
  }).prototype = box_shadow.BoxShadow.prototype;
  dart.addTypeTests(box_shadow.BoxShadow);
  dart.setMethodSignature(box_shadow.BoxShadow, () => ({
    __proto__: dart.getMethods(box_shadow.BoxShadow.__proto__),
    scale: dart.fnType(box_shadow.BoxShadow, [core.double]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(box_shadow.BoxShadow, "package:flutter/src/painting/box_shadow.dart");
  dart.setFieldSignature(box_shadow.BoxShadow, () => ({
    __proto__: dart.getFields(box_shadow.BoxShadow.__proto__),
    spreadRadius: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(box_shadow.BoxShadow, ['_equals', 'toString']);
  dart.defineExtensionAccessors(box_shadow.BoxShadow, ['hashCode']);
  debug$.debugAssertAllPaintingVarsUnset = function debugAssertAllPaintingVarsUnset(reason, opts) {
    let debugDisableShadowsOverride = opts && 'debugDisableShadowsOverride' in opts ? opts.debugDisableShadowsOverride : false;
    if (!dart.test(dart.fn(() => {
      if (!dart.equals(debug$.debugDisableShadows, debugDisableShadowsOverride) || debug$.debugNetworkImageHttpClientProvider != null) {
        dart.throw(assertions.FlutterError.new(reason));
      }
      return true;
    }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/debug.dart", 44, 10, "() {\r\n    if (debugDisableShadows != debugDisableShadowsOverride ||\r\n        debugNetworkImageHttpClientProvider != null) {\r\n      throw FlutterError(reason);\r\n    }\r\n    return true;\r\n  }()");
    return true;
  };
  dart.defineLazy(debug$, {
    /*debug$.debugDisableShadows*/get debugDisableShadows() {
      return false;
    },
    set debugDisableShadows(_) {},
    /*debug$.debugNetworkImageHttpClientProvider*/get debugNetworkImageHttpClientProvider() {
      return null;
    },
    set debugNetworkImageHttpClientProvider(_) {}
  });
  var color$1 = dart.privateName(box_decoration, "BoxDecoration.color");
  var image$2 = dart.privateName(box_decoration, "BoxDecoration.image");
  var border$ = dart.privateName(box_decoration, "BoxDecoration.border");
  var borderRadius$1 = dart.privateName(box_decoration, "BoxDecoration.borderRadius");
  var boxShadow$ = dart.privateName(box_decoration, "BoxDecoration.boxShadow");
  var gradient$0 = dart.privateName(box_decoration, "BoxDecoration.gradient");
  var backgroundBlendMode$ = dart.privateName(box_decoration, "BoxDecoration.backgroundBlendMode");
  var shape$0 = dart.privateName(box_decoration, "BoxDecoration.shape");
  box_decoration.BoxDecoration = class BoxDecoration extends decoration.Decoration {
    get color() {
      return this[color$1];
    }
    set color(value) {
      super.color = value;
    }
    get image() {
      return this[image$2];
    }
    set image(value) {
      super.image = value;
    }
    get border() {
      return this[border$];
    }
    set border(value) {
      super.border = value;
    }
    get borderRadius() {
      return this[borderRadius$1];
    }
    set borderRadius(value) {
      super.borderRadius = value;
    }
    get boxShadow() {
      return this[boxShadow$];
    }
    set boxShadow(value) {
      super.boxShadow = value;
    }
    get gradient() {
      return this[gradient$0];
    }
    set gradient(value) {
      super.gradient = value;
    }
    get backgroundBlendMode() {
      return this[backgroundBlendMode$];
    }
    set backgroundBlendMode(value) {
      super.backgroundBlendMode = value;
    }
    get shape() {
      return this[shape$0];
    }
    set shape(value) {
      super.shape = value;
    }
    copyWith(opts) {
      let t16, t16$, t16$0, t16$1, t16$2, t16$3, t16$4, t16$5;
      let color = opts && 'color' in opts ? opts.color : null;
      let image = opts && 'image' in opts ? opts.image : null;
      let border = opts && 'border' in opts ? opts.border : null;
      let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
      let boxShadow = opts && 'boxShadow' in opts ? opts.boxShadow : null;
      let gradient = opts && 'gradient' in opts ? opts.gradient : null;
      let backgroundBlendMode = opts && 'backgroundBlendMode' in opts ? opts.backgroundBlendMode : null;
      let shape = opts && 'shape' in opts ? opts.shape : null;
      return new box_decoration.BoxDecoration.new({color: (t16 = color, t16 == null ? this.color : t16), image: (t16$ = image, t16$ == null ? this.image : t16$), border: (t16$0 = border, t16$0 == null ? this.border : t16$0), borderRadius: (t16$1 = borderRadius, t16$1 == null ? this.borderRadius : t16$1), boxShadow: (t16$2 = boxShadow, t16$2 == null ? this.boxShadow : t16$2), gradient: (t16$3 = gradient, t16$3 == null ? this.gradient : t16$3), backgroundBlendMode: (t16$4 = backgroundBlendMode, t16$4 == null ? this.backgroundBlendMode : t16$4), shape: (t16$5 = shape, t16$5 == null ? this.shape : t16$5)});
    }
    debugAssertIsValid() {
      if (!(!dart.equals(this.shape, box_border.BoxShape.circle) || this.borderRadius == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_decoration.dart", 130, 12, "shape != BoxShape.circle ||\r\n          borderRadius == null");
      return super.debugAssertIsValid();
    }
    get padding() {
      let t16;
      t16 = this.border;
      return t16 == null ? null : t16.dimensions;
    }
    getClipPath(rect, textDirection) {
      let t16, t16$;
      let clipPath = null;
      switch (this.shape) {
        case C8 || CT.C8:
        {
          clipPath = (t16 = ui.Path.new(), t16.addOval(rect), t16);
          break;
        }
        case C10 || CT.C10:
        {
          if (this.borderRadius != null) clipPath = (t16$ = ui.Path.new(), t16$.addRRect(this.borderRadius.resolve(textDirection).toRRect(rect)), t16$);
          break;
        }
      }
      return clipPath;
    }
    scale(factor) {
      let t16;
      return new box_decoration.BoxDecoration.new({color: ui.Color.lerp(null, this.color, factor), image: this.image, border: box_border.BoxBorder.lerp(null, this.border, factor), borderRadius: border_radius.BorderRadiusGeometry.lerp(null, this.borderRadius, factor), boxShadow: box_shadow.BoxShadow.lerpList(null, this.boxShadow, factor), gradient: (t16 = this.gradient, t16 == null ? null : t16.scale(factor)), shape: this.shape});
    }
    get isComplex() {
      return this.boxShadow != null;
    }
    lerpFrom(a, t) {
      if (a == null) return this.scale(t);
      if (box_decoration.BoxDecoration.is(a)) return box_decoration.BoxDecoration.lerp(a, this, t);
      return box_decoration.BoxDecoration.as(super.lerpFrom(a, t));
    }
    lerpTo(b, t) {
      if (b == null) return this.scale(1.0 - dart.notNull(t));
      if (box_decoration.BoxDecoration.is(b)) return box_decoration.BoxDecoration.lerp(this, b, t);
      return box_decoration.BoxDecoration.as(super.lerpTo(b, t));
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_decoration.dart", 289, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return b.scale(t);
      if (b == null) return a.scale(1.0 - dart.notNull(t));
      if (t === 0.0) return a;
      if (t === 1.0) return b;
      return new box_decoration.BoxDecoration.new({color: ui.Color.lerp(a.color, b.color, t), image: dart.notNull(t) < 0.5 ? a.image : b.image, border: box_border.BoxBorder.lerp(a.border, b.border, t), borderRadius: border_radius.BorderRadiusGeometry.lerp(a.borderRadius, b.borderRadius, t), boxShadow: box_shadow.BoxShadow.lerpList(a.boxShadow, b.boxShadow, t), gradient: gradient.Gradient.lerp(a.gradient, b.gradient, t), shape: dart.notNull(t) < 0.5 ? a.shape : b.shape});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return box_decoration.BoxDecoration.is(other) && dart.equals(other.color, this.color) && dart.equals(other.image, this.image) && dart.equals(other.border, this.border) && dart.equals(other.borderRadius, this.borderRadius) && dart.equals(other.boxShadow, this.boxShadow) && dart.equals(other.gradient, this.gradient) && dart.equals(other.shape, this.shape);
    }
    get hashCode() {
      return ui.hashValues(this.color, this.image, this.border, this.borderRadius, this.boxShadow, this.gradient, this.shape);
    }
    debugFillProperties(properties) {
      let t16;
      super.debugFillProperties(properties);
      t16 = properties;
      t16.defaultDiagnosticsTreeStyle = diagnostics.DiagnosticsTreeStyle.whitespace;
      t16.emptyBodyDescription = "<no decorations specified>";
      t16;
      properties.add(new colors.ColorProperty.new("color", this.color, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfDecorationImage()).new("image", this.image, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfBoxBorder()).new("border", this.border, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfBorderRadiusGeometry()).new("borderRadius", this.borderRadius, {defaultValue: null}));
      properties.add(new (IterablePropertyOfBoxShadow()).new("boxShadow", this.boxShadow, {defaultValue: null, style: diagnostics.DiagnosticsTreeStyle.whitespace}));
      properties.add(new (DiagnosticsPropertyOfGradient()).new("gradient", this.gradient, {defaultValue: null}));
      properties.add(new (EnumPropertyOfBoxShape()).new("shape", this.shape, {defaultValue: box_border.BoxShape.rectangle}));
    }
    hitTest(size, position, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      if (!(this.shape != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_decoration.dart", 358, 12, "shape != null");
      if (!dart.test(ui.Offset.zero['&'](size).contains(position))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_decoration.dart", 359, 12, "(Offset.zero & size).contains(position)");
      switch (this.shape) {
        case C10 || CT.C10:
        {
          if (this.borderRadius != null) {
            let bounds = this.borderRadius.resolve(textDirection).toRRect(ui.Offset.zero['&'](size));
            return bounds.contains(position);
          }
          return true;
        }
        case C8 || CT.C8:
        {
          let center = size.center(ui.Offset.zero);
          let distance = position['-'](center).distance;
          return dart.notNull(distance) <= math.min(core.double, size.width, size.height) / 2.0;
        }
      }
      if (!(this.shape != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_decoration.dart", 373, 12, "shape != null");
      return null;
    }
    createBoxPainter(onChanged = null) {
      if (!(onChanged != null || this.image == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_decoration.dart", 379, 12, "onChanged != null || image == null");
      return new box_decoration._BoxDecorationPainter.new(this, onChanged);
    }
  };
  (box_decoration.BoxDecoration.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    let image = opts && 'image' in opts ? opts.image : null;
    let border = opts && 'border' in opts ? opts.border : null;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
    let boxShadow = opts && 'boxShadow' in opts ? opts.boxShadow : null;
    let gradient = opts && 'gradient' in opts ? opts.gradient : null;
    let backgroundBlendMode = opts && 'backgroundBlendMode' in opts ? opts.backgroundBlendMode : null;
    let shape = opts && 'shape' in opts ? opts.shape : C10 || CT.C10;
    this[color$1] = color;
    this[image$2] = image;
    this[border$] = border;
    this[borderRadius$1] = borderRadius;
    this[boxShadow$] = boxShadow;
    this[gradient$0] = gradient;
    this[backgroundBlendMode$] = backgroundBlendMode;
    this[shape$0] = shape;
    if (!(shape != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_decoration.dart", 97, 15, "shape != null");
    if (!(backgroundBlendMode == null || color != null || gradient != null)) dart.assertFailed("backgroundBlendMode applies to BoxDecoration's background color or " + "gradient, but no color or gradient was provided.", "org-dartlang-app:///packages/flutter/src/painting/box_decoration.dart", 99, 10, "backgroundBlendMode == null || color != null || gradient != null");
    box_decoration.BoxDecoration.__proto__.new.call(this);
    ;
  }).prototype = box_decoration.BoxDecoration.prototype;
  dart.addTypeTests(box_decoration.BoxDecoration);
  dart.setMethodSignature(box_decoration.BoxDecoration, () => ({
    __proto__: dart.getMethods(box_decoration.BoxDecoration.__proto__),
    copyWith: dart.fnType(box_decoration.BoxDecoration, [], {backgroundBlendMode: ui.BlendMode, border: box_border.BoxBorder, borderRadius: border_radius.BorderRadiusGeometry, boxShadow: core.List$(box_shadow.BoxShadow), color: ui.Color, gradient: gradient.Gradient, image: decoration_image.DecorationImage, shape: box_border.BoxShape}, {}),
    scale: dart.fnType(box_decoration.BoxDecoration, [core.double]),
    lerpFrom: dart.fnType(box_decoration.BoxDecoration, [decoration.Decoration, core.double]),
    lerpTo: dart.fnType(box_decoration.BoxDecoration, [decoration.Decoration, core.double]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object]),
    createBoxPainter: dart.fnType(box_decoration._BoxDecorationPainter, [], [dart.fnType(dart.void, [])])
  }));
  dart.setLibraryUri(box_decoration.BoxDecoration, "package:flutter/src/painting/box_decoration.dart");
  dart.setFieldSignature(box_decoration.BoxDecoration, () => ({
    __proto__: dart.getFields(box_decoration.BoxDecoration.__proto__),
    color: dart.finalFieldType(ui.Color),
    image: dart.finalFieldType(decoration_image.DecorationImage),
    border: dart.finalFieldType(box_border.BoxBorder),
    borderRadius: dart.finalFieldType(border_radius.BorderRadiusGeometry),
    boxShadow: dart.finalFieldType(core.List$(box_shadow.BoxShadow)),
    gradient: dart.finalFieldType(gradient.Gradient),
    backgroundBlendMode: dart.finalFieldType(ui.BlendMode),
    shape: dart.finalFieldType(box_border.BoxShape)
  }));
  dart.defineExtensionMethods(box_decoration.BoxDecoration, ['_equals']);
  dart.defineExtensionAccessors(box_decoration.BoxDecoration, ['hashCode']);
  var _cachedBackgroundPaint = dart.privateName(box_decoration, "_cachedBackgroundPaint");
  var _rectForCachedBackgroundPaint = dart.privateName(box_decoration, "_rectForCachedBackgroundPaint");
  var _imagePainter$ = dart.privateName(box_decoration, "_imagePainter");
  var _decoration$0 = dart.privateName(box_decoration, "_decoration");
  var _getBackgroundPaint = dart.privateName(box_decoration, "_getBackgroundPaint");
  var _paintBox = dart.privateName(box_decoration, "_paintBox");
  var _paintShadows$ = dart.privateName(box_decoration, "_paintShadows");
  var _paintBackgroundColor = dart.privateName(box_decoration, "_paintBackgroundColor");
  var _paintBackgroundImage = dart.privateName(box_decoration, "_paintBackgroundImage");
  box_decoration._BoxDecorationPainter = class _BoxDecorationPainter extends decoration.BoxPainter {
    [_getBackgroundPaint](rect, textDirection) {
      if (!(rect != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_decoration.dart", 395, 12, "rect != null");
      if (!(this[_decoration$0].gradient != null || this[_rectForCachedBackgroundPaint] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_decoration.dart", 396, 12, "_decoration.gradient != null || _rectForCachedBackgroundPaint == null");
      if (this[_cachedBackgroundPaint] == null || this[_decoration$0].gradient != null && !dart.equals(this[_rectForCachedBackgroundPaint], rect)) {
        let paint = ui.Paint.new();
        if (this[_decoration$0].backgroundBlendMode != null) paint.blendMode = this[_decoration$0].backgroundBlendMode;
        if (this[_decoration$0].color != null) paint.color = this[_decoration$0].color;
        if (this[_decoration$0].gradient != null) {
          paint.shader = this[_decoration$0].gradient.createShader(rect, {textDirection: textDirection});
          this[_rectForCachedBackgroundPaint] = rect;
        }
        this[_cachedBackgroundPaint] = paint;
      }
      return this[_cachedBackgroundPaint];
    }
    [_paintBox](canvas, rect, paint, textDirection) {
      switch (this[_decoration$0].shape) {
        case C8 || CT.C8:
        {
          if (!(this[_decoration$0].borderRadius == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_decoration.dart", 418, 16, "_decoration.borderRadius == null");
          let center = rect.center;
          let radius = dart.notNull(rect.shortestSide) / 2.0;
          canvas.drawCircle(center, radius, paint);
          break;
        }
        case C10 || CT.C10:
        {
          if (this[_decoration$0].borderRadius == null) {
            canvas.drawRect(rect, paint);
          } else {
            canvas.drawRRect(this[_decoration$0].borderRadius.resolve(textDirection).toRRect(rect), paint);
          }
          break;
        }
      }
    }
    [_paintShadows$](canvas, rect, textDirection) {
      if (this[_decoration$0].boxShadow == null) return;
      for (let boxShadow of this[_decoration$0].boxShadow) {
        let paint = boxShadow.toPaint();
        let bounds = rect.shift(boxShadow.offset).inflate(boxShadow.spreadRadius);
        this[_paintBox](canvas, bounds, paint, textDirection);
      }
    }
    [_paintBackgroundColor](canvas, rect, textDirection) {
      if (this[_decoration$0].color != null || this[_decoration$0].gradient != null) this[_paintBox](canvas, rect, this[_getBackgroundPaint](rect, textDirection), textDirection);
    }
    [_paintBackgroundImage](canvas, rect, configuration) {
      let t16, t16$;
      if (this[_decoration$0].image == null) return;
      this[_imagePainter$] == null ? this[_imagePainter$] = this[_decoration$0].image.createPainter(this.onChanged) : null;
      let clipPath = null;
      switch (this[_decoration$0].shape) {
        case C8 || CT.C8:
        {
          clipPath = (t16 = ui.Path.new(), t16.addOval(rect), t16);
          break;
        }
        case C10 || CT.C10:
        {
          if (this[_decoration$0].borderRadius != null) clipPath = (t16$ = ui.Path.new(), t16$.addRRect(this[_decoration$0].borderRadius.resolve(configuration.textDirection).toRRect(rect)), t16$);
          break;
        }
      }
      this[_imagePainter$].paint(canvas, rect, clipPath, configuration);
    }
    dispose() {
      let t16;
      t16 = this[_imagePainter$];
      t16 == null ? null : t16.dispose();
      super.dispose();
    }
    paint(canvas, offset, configuration) {
      let t16;
      if (!(configuration != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_decoration.dart", 475, 12, "configuration != null");
      if (!(configuration.size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_decoration.dart", 476, 12, "configuration.size != null");
      let rect = offset['&'](configuration.size);
      let textDirection = configuration.textDirection;
      this[_paintShadows$](canvas, rect, textDirection);
      this[_paintBackgroundColor](canvas, rect, textDirection);
      this[_paintBackgroundImage](canvas, rect, configuration);
      t16 = this[_decoration$0].border;
      t16 == null ? null : t16.paint(canvas, rect, {shape: this[_decoration$0].shape, borderRadius: border_radius.BorderRadius.as(this[_decoration$0].borderRadius), textDirection: configuration.textDirection});
    }
    toString() {
      return "BoxPainter for " + dart.str(this[_decoration$0]);
    }
  };
  (box_decoration._BoxDecorationPainter.new = function(_decoration, onChanged) {
    this[_cachedBackgroundPaint] = null;
    this[_rectForCachedBackgroundPaint] = null;
    this[_imagePainter$] = null;
    this[_decoration$0] = _decoration;
    if (!(_decoration != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_decoration.dart", 387, 14, "_decoration != null");
    box_decoration._BoxDecorationPainter.__proto__.new.call(this, onChanged);
    ;
  }).prototype = box_decoration._BoxDecorationPainter.prototype;
  dart.addTypeTests(box_decoration._BoxDecorationPainter);
  dart.setMethodSignature(box_decoration._BoxDecorationPainter, () => ({
    __proto__: dart.getMethods(box_decoration._BoxDecorationPainter.__proto__),
    [_getBackgroundPaint]: dart.fnType(ui.Paint, [ui.Rect, ui.TextDirection]),
    [_paintBox]: dart.fnType(dart.void, [ui.Canvas, ui.Rect, ui.Paint, ui.TextDirection]),
    [_paintShadows$]: dart.fnType(dart.void, [ui.Canvas, ui.Rect, ui.TextDirection]),
    [_paintBackgroundColor]: dart.fnType(dart.void, [ui.Canvas, ui.Rect, ui.TextDirection]),
    [_paintBackgroundImage]: dart.fnType(dart.void, [ui.Canvas, ui.Rect, image_provider.ImageConfiguration]),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Offset, image_provider.ImageConfiguration])
  }));
  dart.setLibraryUri(box_decoration._BoxDecorationPainter, "package:flutter/src/painting/box_decoration.dart");
  dart.setFieldSignature(box_decoration._BoxDecorationPainter, () => ({
    __proto__: dart.getFields(box_decoration._BoxDecorationPainter.__proto__),
    [_decoration$0]: dart.finalFieldType(box_decoration.BoxDecoration),
    [_cachedBackgroundPaint]: dart.fieldType(ui.Paint),
    [_rectForCachedBackgroundPaint]: dart.fieldType(ui.Rect),
    [_imagePainter$]: dart.fieldType(decoration_image.DecorationImagePainter)
  }));
  dart.defineExtensionMethods(box_decoration._BoxDecorationPainter, ['toString']);
  var C89;
  box_border.BoxShape = class BoxShape extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (box_border.BoxShape.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = box_border.BoxShape.prototype;
  dart.addTypeTests(box_border.BoxShape);
  dart.setLibraryUri(box_border.BoxShape, "package:flutter/src/painting/box_border.dart");
  dart.setFieldSignature(box_border.BoxShape, () => ({
    __proto__: dart.getFields(box_border.BoxShape.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(box_border.BoxShape, ['toString']);
  box_border.BoxShape.rectangle = C10 || CT.C10;
  box_border.BoxShape.circle = C8 || CT.C8;
  box_border.BoxShape.values = C89 || CT.C89;
  box_border.BoxBorder = class BoxBorder extends borders$.ShapeBorder {
    add(other, opts) {
      let reversed = opts && 'reversed' in opts ? opts.reversed : false;
      return null;
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 106, 12, "t != null");
      if ((box_border.Border.is(a) || a == null) && (box_border.Border.is(b) || b == null)) return box_border.Border.lerp(box_border.Border.as(a), box_border.Border.as(b), t);
      if ((box_border.BorderDirectional.is(a) || a == null) && (box_border.BorderDirectional.is(b) || b == null)) return box_border.BorderDirectional.lerp(box_border.BorderDirectional.as(a), box_border.BorderDirectional.as(b), t);
      if (box_border.Border.is(b) && box_border.BorderDirectional.is(a)) {
        let c = b;
        b = a;
        a = c;
        t = 1.0 - dart.notNull(t);
      }
      if (box_border.Border.is(a) && box_border.BorderDirectional.is(b)) {
        if (dart.equals(b.start, borders$.BorderSide.none) && dart.equals(b.end, borders$.BorderSide.none)) {
          return new box_border.Border.new({top: borders$.BorderSide.lerp(a.top, b.top, t), right: borders$.BorderSide.lerp(a.right, borders$.BorderSide.none, t), bottom: borders$.BorderSide.lerp(a.bottom, b.bottom, t), left: borders$.BorderSide.lerp(a.left, borders$.BorderSide.none, t)});
        }
        if (dart.equals(a.left, borders$.BorderSide.none) && dart.equals(a.right, borders$.BorderSide.none)) {
          return new box_border.BorderDirectional.new({top: borders$.BorderSide.lerp(a.top, b.top, t), start: borders$.BorderSide.lerp(borders$.BorderSide.none, b.start, t), end: borders$.BorderSide.lerp(borders$.BorderSide.none, b.end, t), bottom: borders$.BorderSide.lerp(a.bottom, b.bottom, t)});
        }
        if (dart.notNull(t) < 0.5) {
          return new box_border.Border.new({top: borders$.BorderSide.lerp(a.top, b.top, t), right: borders$.BorderSide.lerp(a.right, borders$.BorderSide.none, dart.notNull(t) * 2.0), bottom: borders$.BorderSide.lerp(a.bottom, b.bottom, t), left: borders$.BorderSide.lerp(a.left, borders$.BorderSide.none, dart.notNull(t) * 2.0)});
        }
        return new box_border.BorderDirectional.new({top: borders$.BorderSide.lerp(a.top, b.top, t), start: borders$.BorderSide.lerp(borders$.BorderSide.none, b.start, (dart.notNull(t) - 0.5) * 2.0), end: borders$.BorderSide.lerp(borders$.BorderSide.none, b.end, (dart.notNull(t) - 0.5) * 2.0), bottom: borders$.BorderSide.lerp(a.bottom, b.bottom, t)});
      }
      dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("BoxBorder.lerp can only interpolate Border and BorderDirectional classes."), new assertions.ErrorDescription.new("BoxBorder.lerp() was called with two objects of type " + dart.str(dart.runtimeType(a)) + " and " + dart.str(dart.runtimeType(b)) + ":\n" + "  " + dart.str(a) + "\n" + "  " + dart.str(b) + "\n" + "However, only Border and BorderDirectional classes are supported by this method."), new assertions.ErrorHint.new("For a more general interpolation method, consider using ShapeBorder.lerp instead.")])));
    }
    getInnerPath(rect, opts) {
      let t16;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      if (!(textDirection != null)) dart.assertFailed("The textDirection argument to " + dart.str(this[$runtimeType]) + ".getInnerPath must not be null.", "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 169, 12, "textDirection != null");
      t16 = ui.Path.new();
      t16.addRect(this.dimensions.resolve(textDirection).deflateRect(rect));
      return t16;
    }
    getOuterPath(rect, opts) {
      let t16;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      if (!(textDirection != null)) dart.assertFailed("The textDirection argument to " + dart.str(this[$runtimeType]) + ".getOuterPath must not be null.", "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 176, 12, "textDirection != null");
      t16 = ui.Path.new();
      t16.addRect(rect);
      return t16;
    }
    static _paintUniformBorderWithRadius(canvas, rect, side, borderRadius) {
      let t16, t16$;
      if (!!dart.equals(side.style, borders$.BorderStyle.none)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 210, 12, "side.style != BorderStyle.none");
      let paint = (t16 = ui.Paint.new(), t16.color = side.color, t16);
      let outer = borderRadius.toRRect(rect);
      let width = side.width;
      if (width === 0.0) {
        t16$ = paint;
        t16$.style = ui.PaintingStyle.stroke;
        t16$.strokeWidth = 0.0;
        t16$;
        canvas.drawRRect(outer, paint);
      } else {
        let inner = outer.deflate(width);
        canvas.drawDRRect(outer, inner, paint);
      }
    }
    static _paintUniformBorderWithCircle(canvas, rect, side) {
      if (!!dart.equals(side.style, borders$.BorderStyle.none)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 227, 12, "side.style != BorderStyle.none");
      let width = side.width;
      let paint = side.toPaint();
      let radius = (dart.notNull(rect.shortestSide) - dart.notNull(width)) / 2.0;
      canvas.drawCircle(rect.center, radius, paint);
    }
    static _paintUniformBorderWithRectangle(canvas, rect, side) {
      if (!!dart.equals(side.style, borders$.BorderStyle.none)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 235, 12, "side.style != BorderStyle.none");
      let width = side.width;
      let paint = side.toPaint();
      canvas.drawRect(rect.deflate(dart.notNull(width) / 2.0), paint);
    }
  };
  (box_border.BoxBorder.new = function() {
    box_border.BoxBorder.__proto__.new.call(this);
    ;
  }).prototype = box_border.BoxBorder.prototype;
  dart.addTypeTests(box_border.BoxBorder);
  dart.setMethodSignature(box_border.BoxBorder, () => ({
    __proto__: dart.getMethods(box_border.BoxBorder.__proto__),
    add: dart.fnType(box_border.BoxBorder, [borders$.ShapeBorder], {reversed: core.bool}, {}),
    getInnerPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: ui.TextDirection}, {}),
    getOuterPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: ui.TextDirection}, {})
  }));
  dart.setLibraryUri(box_border.BoxBorder, "package:flutter/src/painting/box_border.dart");
  box_border.Border = class Border extends box_border.BoxBorder {
    get top() {
      return this[top$1];
    }
    set top(value) {
      super.top = value;
    }
    get right() {
      return this[right$0];
    }
    set right(value) {
      super.right = value;
    }
    get bottom() {
      return this[bottom$1];
    }
    set bottom(value) {
      super.bottom = value;
    }
    get left() {
      return this[left$0];
    }
    set left(value) {
      super.left = value;
    }
    static all(opts) {
      let color = opts && 'color' in opts ? opts.color : C7 || CT.C7;
      let width = opts && 'width' in opts ? opts.width : 1;
      let style = opts && 'style' in opts ? opts.style : C13 || CT.C13;
      let side = new borders$.BorderSide.new({color: color, width: width, style: style});
      return new box_border.Border.fromBorderSide(side);
    }
    static merge(a, b) {
      if (!(a != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 362, 12, "a != null");
      if (!(b != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 363, 12, "b != null");
      if (!dart.test(borders$.BorderSide.canMerge(a.top, b.top))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 364, 12, "BorderSide.canMerge(a.top, b.top)");
      if (!dart.test(borders$.BorderSide.canMerge(a.right, b.right))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 365, 12, "BorderSide.canMerge(a.right, b.right)");
      if (!dart.test(borders$.BorderSide.canMerge(a.bottom, b.bottom))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 366, 12, "BorderSide.canMerge(a.bottom, b.bottom)");
      if (!dart.test(borders$.BorderSide.canMerge(a.left, b.left))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 367, 12, "BorderSide.canMerge(a.left, b.left)");
      return new box_border.Border.new({top: borders$.BorderSide.merge(a.top, b.top), right: borders$.BorderSide.merge(a.right, b.right), bottom: borders$.BorderSide.merge(a.bottom, b.bottom), left: borders$.BorderSide.merge(a.left, b.left)});
    }
    get dimensions() {
      return new edge_insets.EdgeInsets.fromLTRB(this.left.width, this.top.width, this.right.width, this.bottom.width);
    }
    get isUniform() {
      let topColor = this.top.color;
      if (!dart.equals(this.right.color, topColor) || !dart.equals(this.bottom.color, topColor) || !dart.equals(this.left.color, topColor)) return false;
      let topWidth = this.top.width;
      if (this.right.width != topWidth || this.bottom.width != topWidth || this.left.width != topWidth) return false;
      let topStyle = this.top.style;
      if (!dart.equals(this.right.style, topStyle) || !dart.equals(this.bottom.style, topStyle) || !dart.equals(this.left.style, topStyle)) return false;
      return true;
    }
    add(other, opts) {
      let reversed = opts && 'reversed' in opts ? opts.reversed : false;
      if (box_border.Border.is(other) && dart.test(borders$.BorderSide.canMerge(this.top, other.top)) && dart.test(borders$.BorderSide.canMerge(this.right, other.right)) && dart.test(borders$.BorderSide.canMerge(this.bottom, other.bottom)) && dart.test(borders$.BorderSide.canMerge(this.left, other.left))) {
        return box_border.Border.merge(this, other);
      }
      return null;
    }
    scale(t) {
      return new box_border.Border.new({top: this.top.scale(t), right: this.right.scale(t), bottom: this.bottom.scale(t), left: this.left.scale(t)});
    }
    lerpFrom(a, t) {
      if (box_border.Border.is(a)) return box_border.Border.lerp(a, this, t);
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (box_border.Border.is(b)) return box_border.Border.lerp(this, b, t);
      return super.lerpTo(b, t);
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 459, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return b.scale(t);
      if (b == null) return a.scale(1.0 - dart.notNull(t));
      return new box_border.Border.new({top: borders$.BorderSide.lerp(a.top, b.top, t), right: borders$.BorderSide.lerp(a.right, b.right, t), bottom: borders$.BorderSide.lerp(a.bottom, b.bottom, t), left: borders$.BorderSide.lerp(a.left, b.left, t)});
    }
    paint(canvas, rect, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let shape = opts && 'shape' in opts ? opts.shape : C10 || CT.C10;
      let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
      if (dart.test(this.isUniform)) {
        switch (this.top.style) {
          case C6 || CT.C6:
          {
            return;
          }
          case C13 || CT.C13:
          {
            switch (shape) {
              case C8 || CT.C8:
              {
                if (!(borderRadius == null)) dart.assertFailed("A borderRadius can only be given for rectangular boxes.", "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 508, 22, "borderRadius == null");
                box_border.BoxBorder._paintUniformBorderWithCircle(canvas, rect, this.top);
                break;
              }
              case C10 || CT.C10:
              {
                if (borderRadius != null) {
                  box_border.BoxBorder._paintUniformBorderWithRadius(canvas, rect, this.top, borderRadius);
                  return;
                }
                box_border.BoxBorder._paintUniformBorderWithRectangle(canvas, rect, this.top);
                break;
              }
            }
            return;
          }
        }
      }
      if (!(borderRadius == null)) dart.assertFailed("A borderRadius can only be given for uniform borders.", "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 523, 12, "borderRadius == null");
      if (!dart.equals(shape, box_border.BoxShape.rectangle)) dart.assertFailed("A border can only be drawn as a circle if it is uniform.", "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 524, 12, "shape == BoxShape.rectangle");
      borders$.paintBorder(canvas, rect, {top: this.top, right: this.right, bottom: this.bottom, left: this.left});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return box_border.Border.is(other) && dart.equals(other.top, this.top) && dart.equals(other.right, this.right) && dart.equals(other.bottom, this.bottom) && dart.equals(other.left, this.left);
    }
    get hashCode() {
      return ui.hashValues(this.top, this.right, this.bottom, this.left);
    }
    toString() {
      if (dart.test(this.isUniform)) return dart.str(object.objectRuntimeType(this, "Border")) + ".all(" + dart.str(this.top) + ")";
      let $arguments = (() => {
        let t16 = JSArrayOfString().of([]);
        if (!dart.equals(this.top, borders$.BorderSide.none)) t16[$add]("top: " + dart.str(this.top));
        if (!dart.equals(this.right, borders$.BorderSide.none)) t16[$add]("right: " + dart.str(this.right));
        if (!dart.equals(this.bottom, borders$.BorderSide.none)) t16[$add]("bottom: " + dart.str(this.bottom));
        if (!dart.equals(this.left, borders$.BorderSide.none)) t16[$add]("left: " + dart.str(this.left));
        return t16;
      })();
      return dart.str(object.objectRuntimeType(this, "Border")) + "(" + dart.str($arguments[$join](", ")) + ")";
    }
  };
  (box_border.Border.new = function(opts) {
    let top = opts && 'top' in opts ? opts.top : C5 || CT.C5;
    let right = opts && 'right' in opts ? opts.right : C5 || CT.C5;
    let bottom = opts && 'bottom' in opts ? opts.bottom : C5 || CT.C5;
    let left = opts && 'left' in opts ? opts.left : C5 || CT.C5;
    this[top$1] = top;
    this[right$0] = right;
    this[bottom$1] = bottom;
    this[left$0] = left;
    if (!(top != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 314, 15, "top != null");
    if (!(right != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 315, 15, "right != null");
    if (!(bottom != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 316, 15, "bottom != null");
    if (!(left != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 317, 15, "left != null");
    box_border.Border.__proto__.new.call(this);
    ;
  }).prototype = box_border.Border.prototype;
  (box_border.Border.fromBorderSide = function(side) {
    if (!(side != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 323, 16, "side != null");
    this[top$1] = side;
    this[right$0] = side;
    this[bottom$1] = side;
    this[left$0] = side;
    box_border.Border.__proto__.new.call(this);
    ;
  }).prototype = box_border.Border.prototype;
  (box_border.Border.symmetric = function(opts) {
    let vertical = opts && 'vertical' in opts ? opts.vertical : C5 || CT.C5;
    let horizontal = opts && 'horizontal' in opts ? opts.horizontal : C5 || CT.C5;
    if (!(vertical != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 335, 15, "vertical != null");
    if (!(horizontal != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 336, 15, "horizontal != null");
    this[left$0] = horizontal;
    this[top$1] = vertical;
    this[right$0] = horizontal;
    this[bottom$1] = vertical;
    box_border.Border.__proto__.new.call(this);
    ;
  }).prototype = box_border.Border.prototype;
  dart.addTypeTests(box_border.Border);
  const top$1 = Border_top;
  const right$0 = Border_right;
  const bottom$1 = Border_bottom;
  const left$0 = Border_left;
  dart.setMethodSignature(box_border.Border, () => ({
    __proto__: dart.getMethods(box_border.Border.__proto__),
    add: dart.fnType(box_border.Border, [borders$.ShapeBorder], {reversed: core.bool}, {}),
    scale: dart.fnType(box_border.Border, [core.double]),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {borderRadius: border_radius.BorderRadius, shape: box_border.BoxShape, textDirection: ui.TextDirection}, {}),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(box_border.Border, () => ({
    __proto__: dart.getGetters(box_border.Border.__proto__),
    dimensions: edge_insets.EdgeInsetsGeometry,
    isUniform: core.bool
  }));
  dart.setLibraryUri(box_border.Border, "package:flutter/src/painting/box_border.dart");
  dart.setFieldSignature(box_border.Border, () => ({
    __proto__: dart.getFields(box_border.Border.__proto__),
    top: dart.finalFieldType(borders$.BorderSide),
    right: dart.finalFieldType(borders$.BorderSide),
    bottom: dart.finalFieldType(borders$.BorderSide),
    left: dart.finalFieldType(borders$.BorderSide)
  }));
  dart.defineExtensionMethods(box_border.Border, ['_equals', 'toString']);
  dart.defineExtensionAccessors(box_border.Border, ['hashCode']);
  var top$2 = dart.privateName(box_border, "BorderDirectional.top");
  var start$1 = dart.privateName(box_border, "BorderDirectional.start");
  var end$1 = dart.privateName(box_border, "BorderDirectional.end");
  var bottom$2 = dart.privateName(box_border, "BorderDirectional.bottom");
  box_border.BorderDirectional = class BorderDirectional extends box_border.BoxBorder {
    get top() {
      return this[top$2];
    }
    set top(value) {
      super.top = value;
    }
    get start() {
      return this[start$1];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end$1];
    }
    set end(value) {
      super.end = value;
    }
    get bottom() {
      return this[bottom$2];
    }
    set bottom(value) {
      super.bottom = value;
    }
    static merge(a, b) {
      if (!(a != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 606, 12, "a != null");
      if (!(b != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 607, 12, "b != null");
      if (!dart.test(borders$.BorderSide.canMerge(a.top, b.top))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 608, 12, "BorderSide.canMerge(a.top, b.top)");
      if (!dart.test(borders$.BorderSide.canMerge(a.start, b.start))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 609, 12, "BorderSide.canMerge(a.start, b.start)");
      if (!dart.test(borders$.BorderSide.canMerge(a.end, b.end))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 610, 12, "BorderSide.canMerge(a.end, b.end)");
      if (!dart.test(borders$.BorderSide.canMerge(a.bottom, b.bottom))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 611, 12, "BorderSide.canMerge(a.bottom, b.bottom)");
      return new box_border.BorderDirectional.new({top: borders$.BorderSide.merge(a.top, b.top), start: borders$.BorderSide.merge(a.start, b.start), end: borders$.BorderSide.merge(a.end, b.end), bottom: borders$.BorderSide.merge(a.bottom, b.bottom)});
    }
    get dimensions() {
      return new edge_insets.EdgeInsetsDirectional.fromSTEB(this.start.width, this.top.width, this.end.width, this.bottom.width);
    }
    get isUniform() {
      let topColor = this.top.color;
      if (!dart.equals(this.start.color, topColor) || !dart.equals(this.end.color, topColor) || !dart.equals(this.bottom.color, topColor)) return false;
      let topWidth = this.top.width;
      if (this.start.width != topWidth || this.end.width != topWidth || this.bottom.width != topWidth) return false;
      let topStyle = this.top.style;
      if (!dart.equals(this.start.style, topStyle) || !dart.equals(this.end.style, topStyle) || !dart.equals(this.bottom.style, topStyle)) return false;
      return true;
    }
    add(other, opts) {
      let reversed = opts && 'reversed' in opts ? opts.reversed : false;
      if (box_border.BorderDirectional.is(other)) {
        let typedOther = other;
        if (dart.test(borders$.BorderSide.canMerge(this.top, typedOther.top)) && dart.test(borders$.BorderSide.canMerge(this.start, typedOther.start)) && dart.test(borders$.BorderSide.canMerge(this.end, typedOther.end)) && dart.test(borders$.BorderSide.canMerge(this.bottom, typedOther.bottom))) {
          return box_border.BorderDirectional.merge(this, typedOther);
        }
        return null;
      }
      if (box_border.Border.is(other)) {
        let typedOther = other;
        if (!dart.test(borders$.BorderSide.canMerge(typedOther.top, this.top)) || !dart.test(borders$.BorderSide.canMerge(typedOther.bottom, this.bottom))) return null;
        if (!dart.equals(this.start, borders$.BorderSide.none) || !dart.equals(this.end, borders$.BorderSide.none)) {
          if (!dart.equals(typedOther.left, borders$.BorderSide.none) || !dart.equals(typedOther.right, borders$.BorderSide.none)) return null;
          if (!dart.equals(typedOther.left, borders$.BorderSide.none)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 696, 16, "typedOther.left == BorderSide.none");
          if (!dart.equals(typedOther.right, borders$.BorderSide.none)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 697, 16, "typedOther.right == BorderSide.none");
          return new box_border.BorderDirectional.new({top: borders$.BorderSide.merge(typedOther.top, this.top), start: this.start, end: this.end, bottom: borders$.BorderSide.merge(typedOther.bottom, this.bottom)});
        }
        if (!dart.equals(this.start, borders$.BorderSide.none)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 705, 14, "start == BorderSide.none");
        if (!dart.equals(this.end, borders$.BorderSide.none)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 706, 14, "end == BorderSide.none");
        return new box_border.Border.new({top: borders$.BorderSide.merge(typedOther.top, this.top), right: typedOther.right, bottom: borders$.BorderSide.merge(typedOther.bottom, this.bottom), left: typedOther.left});
      }
      return null;
    }
    scale(t) {
      return new box_border.BorderDirectional.new({top: this.top.scale(t), start: this.start.scale(t), end: this.end.scale(t), bottom: this.bottom.scale(t)});
    }
    lerpFrom(a, t) {
      if (box_border.BorderDirectional.is(a)) return box_border.BorderDirectional.lerp(a, this, t);
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (box_border.BorderDirectional.is(b)) return box_border.BorderDirectional.lerp(this, b, t);
      return super.lerpTo(b, t);
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 748, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return b.scale(t);
      if (b == null) return a.scale(1.0 - dart.notNull(t));
      return new box_border.BorderDirectional.new({top: borders$.BorderSide.lerp(a.top, b.top, t), end: borders$.BorderSide.lerp(a.end, b.end, t), bottom: borders$.BorderSide.lerp(a.bottom, b.bottom, t), start: borders$.BorderSide.lerp(a.start, b.start, t)});
    }
    paint(canvas, rect, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let shape = opts && 'shape' in opts ? opts.shape : C10 || CT.C10;
      let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
      if (dart.test(this.isUniform)) {
        switch (this.top.style) {
          case C6 || CT.C6:
          {
            return;
          }
          case C13 || CT.C13:
          {
            switch (shape) {
              case C8 || CT.C8:
              {
                if (!(borderRadius == null)) dart.assertFailed("A borderRadius can only be given for rectangular boxes.", "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 800, 22, "borderRadius == null");
                box_border.BoxBorder._paintUniformBorderWithCircle(canvas, rect, this.top);
                break;
              }
              case C10 || CT.C10:
              {
                if (borderRadius != null) {
                  box_border.BoxBorder._paintUniformBorderWithRadius(canvas, rect, this.top, borderRadius);
                  return;
                }
                box_border.BoxBorder._paintUniformBorderWithRectangle(canvas, rect, this.top);
                break;
              }
            }
            return;
          }
        }
      }
      if (!(borderRadius == null)) dart.assertFailed("A borderRadius can only be given for uniform borders.", "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 815, 12, "borderRadius == null");
      if (!dart.equals(shape, box_border.BoxShape.rectangle)) dart.assertFailed("A border can only be drawn as a circle if it is uniform.", "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 816, 12, "shape == BoxShape.rectangle");
      let left = null;
      let right = null;
      if (!(textDirection != null)) dart.assertFailed("Non-uniform BorderDirectional objects require a TextDirection when painting.", "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 819, 12, "textDirection != null");
      switch (textDirection) {
        case C18 || CT.C18:
        {
          left = this.end;
          right = this.start;
          break;
        }
        case C19 || CT.C19:
        {
          left = this.start;
          right = this.end;
          break;
        }
      }
      borders$.paintBorder(canvas, rect, {top: this.top, left: left, bottom: this.bottom, right: right});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return box_border.BorderDirectional.is(other) && dart.equals(other.top, this.top) && dart.equals(other.start, this.start) && dart.equals(other.end, this.end) && dart.equals(other.bottom, this.bottom);
    }
    get hashCode() {
      return ui.hashValues(this.top, this.start, this.end, this.bottom);
    }
    toString() {
      let $arguments = (() => {
        let t17 = JSArrayOfString().of([]);
        if (!dart.equals(this.top, borders$.BorderSide.none)) t17[$add]("top: " + dart.str(this.top));
        if (!dart.equals(this.start, borders$.BorderSide.none)) t17[$add]("start: " + dart.str(this.start));
        if (!dart.equals(this.end, borders$.BorderSide.none)) t17[$add]("end: " + dart.str(this.end));
        if (!dart.equals(this.bottom, borders$.BorderSide.none)) t17[$add]("bottom: " + dart.str(this.bottom));
        return t17;
      })();
      return dart.str(object.objectRuntimeType(this, "BorderDirectional")) + "(" + dart.str($arguments[$join](", ")) + ")";
    }
  };
  (box_border.BorderDirectional.new = function(opts) {
    let top = opts && 'top' in opts ? opts.top : C5 || CT.C5;
    let start = opts && 'start' in opts ? opts.start : C5 || CT.C5;
    let end = opts && 'end' in opts ? opts.end : C5 || CT.C5;
    let bottom = opts && 'bottom' in opts ? opts.bottom : C5 || CT.C5;
    this[top$2] = top;
    this[start$1] = start;
    this[end$1] = end;
    this[bottom$2] = bottom;
    if (!(top != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 593, 15, "top != null");
    if (!(start != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 594, 15, "start != null");
    if (!(end != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 595, 15, "end != null");
    if (!(bottom != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/box_border.dart", 596, 15, "bottom != null");
    box_border.BorderDirectional.__proto__.new.call(this);
    ;
  }).prototype = box_border.BorderDirectional.prototype;
  dart.addTypeTests(box_border.BorderDirectional);
  dart.setMethodSignature(box_border.BorderDirectional, () => ({
    __proto__: dart.getMethods(box_border.BorderDirectional.__proto__),
    scale: dart.fnType(box_border.BorderDirectional, [core.double]),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {borderRadius: border_radius.BorderRadius, shape: box_border.BoxShape, textDirection: ui.TextDirection}, {}),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(box_border.BorderDirectional, () => ({
    __proto__: dart.getGetters(box_border.BorderDirectional.__proto__),
    dimensions: edge_insets.EdgeInsetsGeometry,
    isUniform: core.bool
  }));
  dart.setLibraryUri(box_border.BorderDirectional, "package:flutter/src/painting/box_border.dart");
  dart.setFieldSignature(box_border.BorderDirectional, () => ({
    __proto__: dart.getFields(box_border.BorderDirectional.__proto__),
    top: dart.finalFieldType(borders$.BorderSide),
    start: dart.finalFieldType(borders$.BorderSide),
    end: dart.finalFieldType(borders$.BorderSide),
    bottom: dart.finalFieldType(borders$.BorderSide)
  }));
  dart.defineExtensionMethods(box_border.BorderDirectional, ['_equals', 'toString']);
  dart.defineExtensionAccessors(box_border.BorderDirectional, ['hashCode']);
  var _fontFamilyFallback = dart.privateName(text_style, "_fontFamilyFallback");
  var _package = dart.privateName(text_style, "_package");
  var inherit$ = dart.privateName(text_style, "TextStyle.inherit");
  var color$2 = dart.privateName(text_style, "TextStyle.color");
  var backgroundColor$ = dart.privateName(text_style, "TextStyle.backgroundColor");
  var fontFamily$ = dart.privateName(text_style, "TextStyle.fontFamily");
  var _fontFamilyFallback$ = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  var _package$ = dart.privateName(text_style, "TextStyle._package");
  var fontSize$ = dart.privateName(text_style, "TextStyle.fontSize");
  var fontWeight$ = dart.privateName(text_style, "TextStyle.fontWeight");
  var fontStyle$ = dart.privateName(text_style, "TextStyle.fontStyle");
  var letterSpacing$ = dart.privateName(text_style, "TextStyle.letterSpacing");
  var wordSpacing$ = dart.privateName(text_style, "TextStyle.wordSpacing");
  var textBaseline$ = dart.privateName(text_style, "TextStyle.textBaseline");
  var height$1 = dart.privateName(text_style, "TextStyle.height");
  var locale$0 = dart.privateName(text_style, "TextStyle.locale");
  var foreground$ = dart.privateName(text_style, "TextStyle.foreground");
  var background$ = dart.privateName(text_style, "TextStyle.background");
  var decoration$ = dart.privateName(text_style, "TextStyle.decoration");
  var decorationColor$ = dart.privateName(text_style, "TextStyle.decorationColor");
  var decorationStyle$ = dart.privateName(text_style, "TextStyle.decorationStyle");
  var decorationThickness$ = dart.privateName(text_style, "TextStyle.decorationThickness");
  var debugLabel$ = dart.privateName(text_style, "TextStyle.debugLabel");
  var shadows$0 = dart.privateName(text_style, "TextStyle.shadows");
  var fontFeatures$ = dart.privateName(text_style, "TextStyle.fontFeatures");
  text_style.TextStyle = class TextStyle extends diagnostics.Diagnosticable {
    get inherit() {
      return this[inherit$];
    }
    set inherit(value) {
      super.inherit = value;
    }
    get color() {
      return this[color$2];
    }
    set color(value) {
      super.color = value;
    }
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get fontFamily() {
      return this[fontFamily$];
    }
    set fontFamily(value) {
      super.fontFamily = value;
    }
    get [_fontFamilyFallback]() {
      return this[_fontFamilyFallback$];
    }
    set [_fontFamilyFallback](value) {
      super[_fontFamilyFallback] = value;
    }
    get [_package]() {
      return this[_package$];
    }
    set [_package](value) {
      super[_package] = value;
    }
    get fontSize() {
      return this[fontSize$];
    }
    set fontSize(value) {
      super.fontSize = value;
    }
    get fontWeight() {
      return this[fontWeight$];
    }
    set fontWeight(value) {
      super.fontWeight = value;
    }
    get fontStyle() {
      return this[fontStyle$];
    }
    set fontStyle(value) {
      super.fontStyle = value;
    }
    get letterSpacing() {
      return this[letterSpacing$];
    }
    set letterSpacing(value) {
      super.letterSpacing = value;
    }
    get wordSpacing() {
      return this[wordSpacing$];
    }
    set wordSpacing(value) {
      super.wordSpacing = value;
    }
    get textBaseline() {
      return this[textBaseline$];
    }
    set textBaseline(value) {
      super.textBaseline = value;
    }
    get height() {
      return this[height$1];
    }
    set height(value) {
      super.height = value;
    }
    get locale() {
      return this[locale$0];
    }
    set locale(value) {
      super.locale = value;
    }
    get foreground() {
      return this[foreground$];
    }
    set foreground(value) {
      super.foreground = value;
    }
    get background() {
      return this[background$];
    }
    set background(value) {
      super.background = value;
    }
    get decoration() {
      return this[decoration$];
    }
    set decoration(value) {
      super.decoration = value;
    }
    get decorationColor() {
      return this[decorationColor$];
    }
    set decorationColor(value) {
      super.decorationColor = value;
    }
    get decorationStyle() {
      return this[decorationStyle$];
    }
    set decorationStyle(value) {
      super.decorationStyle = value;
    }
    get decorationThickness() {
      return this[decorationThickness$];
    }
    set decorationThickness(value) {
      super.decorationThickness = value;
    }
    get debugLabel() {
      return this[debugLabel$];
    }
    set debugLabel(value) {
      super.debugLabel = value;
    }
    get shadows() {
      return this[shadows$0];
    }
    set shadows(value) {
      super.shadows = value;
    }
    get fontFeatures() {
      return this[fontFeatures$];
    }
    set fontFeatures(value) {
      super.fontFeatures = value;
    }
    get fontFamilyFallback() {
      return this[_package] != null && this[_fontFamilyFallback] != null ? this[_fontFamilyFallback][$map](core.String, dart.fn(str => "packages/" + dart.str(this[_package]) + "/" + dart.str(str), StringToString()))[$toList]() : this[_fontFamilyFallback];
    }
    copyWith(opts) {
      let t18, t18$, t18$0, t18$1, t18$2, t18$3, t18$4, t18$5, t18$6, t18$7, t18$8, t18$9, t18$10, t18$11, t18$12, t18$13, t18$14, t18$15, t18$16, t18$17, t18$18;
      let inherit = opts && 'inherit' in opts ? opts.inherit : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let fontFamilyFallback = opts && 'fontFamilyFallback' in opts ? opts.fontFamilyFallback : null;
      let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
      let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
      let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
      let letterSpacing = opts && 'letterSpacing' in opts ? opts.letterSpacing : null;
      let wordSpacing = opts && 'wordSpacing' in opts ? opts.wordSpacing : null;
      let textBaseline = opts && 'textBaseline' in opts ? opts.textBaseline : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let foreground = opts && 'foreground' in opts ? opts.foreground : null;
      let background = opts && 'background' in opts ? opts.background : null;
      let shadows = opts && 'shadows' in opts ? opts.shadows : null;
      let fontFeatures = opts && 'fontFeatures' in opts ? opts.fontFeatures : null;
      let decoration = opts && 'decoration' in opts ? opts.decoration : null;
      let decorationColor = opts && 'decorationColor' in opts ? opts.decorationColor : null;
      let decorationStyle = opts && 'decorationStyle' in opts ? opts.decorationStyle : null;
      let decorationThickness = opts && 'decorationThickness' in opts ? opts.decorationThickness : null;
      let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
      if (!(color == null || foreground == null)) dart.assertFailed(text_style._kColorForegroundWarning, "org-dartlang-app:///packages/flutter/src/painting/text_style.dart", 721, 12, "color == null || foreground == null");
      if (!(backgroundColor == null || background == null)) dart.assertFailed(text_style._kColorBackgroundWarning, "org-dartlang-app:///packages/flutter/src/painting/text_style.dart", 722, 12, "backgroundColor == null || background == null");
      let newDebugLabel = null;
      if (!dart.test(dart.fn(() => {
        let t18;
        if (this.debugLabel != null) newDebugLabel = (t18 = debugLabel, t18 == null ? "(" + dart.str(this.debugLabel) + ").copyWith" : t18);
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_style.dart", 724, 12, "() {\r\n      if (this.debugLabel != null)\r\n        newDebugLabel = debugLabel ?? '(${this.debugLabel}).copyWith';\r\n      return true;\r\n    }()");
      return new text_style.TextStyle.new({inherit: (t18 = inherit, t18 == null ? this.inherit : t18), color: this.foreground == null && foreground == null ? (t18$ = color, t18$ == null ? this.color : t18$) : null, backgroundColor: this.background == null && background == null ? (t18$0 = backgroundColor, t18$0 == null ? this.backgroundColor : t18$0) : null, fontFamily: (t18$1 = fontFamily, t18$1 == null ? this.fontFamily : t18$1), fontFamilyFallback: (t18$2 = fontFamilyFallback, t18$2 == null ? this.fontFamilyFallback : t18$2), fontSize: (t18$3 = fontSize, t18$3 == null ? this.fontSize : t18$3), fontWeight: (t18$4 = fontWeight, t18$4 == null ? this.fontWeight : t18$4), fontStyle: (t18$5 = fontStyle, t18$5 == null ? this.fontStyle : t18$5), letterSpacing: (t18$6 = letterSpacing, t18$6 == null ? this.letterSpacing : t18$6), wordSpacing: (t18$7 = wordSpacing, t18$7 == null ? this.wordSpacing : t18$7), textBaseline: (t18$8 = textBaseline, t18$8 == null ? this.textBaseline : t18$8), height: (t18$9 = height, t18$9 == null ? this.height : t18$9), locale: (t18$10 = locale, t18$10 == null ? this.locale : t18$10), foreground: (t18$11 = foreground, t18$11 == null ? this.foreground : t18$11), background: (t18$12 = background, t18$12 == null ? this.background : t18$12), shadows: (t18$13 = shadows, t18$13 == null ? this.shadows : t18$13), fontFeatures: (t18$14 = fontFeatures, t18$14 == null ? this.fontFeatures : t18$14), decoration: (t18$15 = decoration, t18$15 == null ? this.decoration : t18$15), decorationColor: (t18$16 = decorationColor, t18$16 == null ? this.decorationColor : t18$16), decorationStyle: (t18$17 = decorationStyle, t18$17 == null ? this.decorationStyle : t18$17), decorationThickness: (t18$18 = decorationThickness, t18$18 == null ? this.decorationThickness : t18$18), debugLabel: newDebugLabel});
    }
    apply(opts) {
      let t18, t18$, t18$0, t18$1, t18$2, t18$3, t18$4;
      let color = opts && 'color' in opts ? opts.color : null;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let decoration = opts && 'decoration' in opts ? opts.decoration : null;
      let decorationColor = opts && 'decorationColor' in opts ? opts.decorationColor : null;
      let decorationStyle = opts && 'decorationStyle' in opts ? opts.decorationStyle : null;
      let decorationThicknessFactor = opts && 'decorationThicknessFactor' in opts ? opts.decorationThicknessFactor : 1;
      let decorationThicknessDelta = opts && 'decorationThicknessDelta' in opts ? opts.decorationThicknessDelta : 0;
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let fontFamilyFallback = opts && 'fontFamilyFallback' in opts ? opts.fontFamilyFallback : null;
      let fontSizeFactor = opts && 'fontSizeFactor' in opts ? opts.fontSizeFactor : 1;
      let fontSizeDelta = opts && 'fontSizeDelta' in opts ? opts.fontSizeDelta : 0;
      let fontWeightDelta = opts && 'fontWeightDelta' in opts ? opts.fontWeightDelta : 0;
      let letterSpacingFactor = opts && 'letterSpacingFactor' in opts ? opts.letterSpacingFactor : 1;
      let letterSpacingDelta = opts && 'letterSpacingDelta' in opts ? opts.letterSpacingDelta : 0;
      let wordSpacingFactor = opts && 'wordSpacingFactor' in opts ? opts.wordSpacingFactor : 1;
      let wordSpacingDelta = opts && 'wordSpacingDelta' in opts ? opts.wordSpacingDelta : 0;
      let heightFactor = opts && 'heightFactor' in opts ? opts.heightFactor : 1;
      let heightDelta = opts && 'heightDelta' in opts ? opts.heightDelta : 0;
      if (!(fontSizeFactor != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_style.dart", 804, 12, "fontSizeFactor != null");
      if (!(fontSizeDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_style.dart", 805, 12, "fontSizeDelta != null");
      if (!(this.fontSize != null || fontSizeFactor === 1.0 && fontSizeDelta === 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_style.dart", 806, 12, "fontSize != null || (fontSizeFactor == 1.0 && fontSizeDelta == 0.0)");
      if (!(fontWeightDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_style.dart", 807, 12, "fontWeightDelta != null");
      if (!(this.fontWeight != null || fontWeightDelta === 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_style.dart", 808, 12, "fontWeight != null || fontWeightDelta == 0.0");
      if (!(letterSpacingFactor != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_style.dart", 809, 12, "letterSpacingFactor != null");
      if (!(letterSpacingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_style.dart", 810, 12, "letterSpacingDelta != null");
      if (!(this.letterSpacing != null || letterSpacingFactor === 1.0 && letterSpacingDelta === 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_style.dart", 811, 12, "letterSpacing != null || (letterSpacingFactor == 1.0 && letterSpacingDelta == 0.0)");
      if (!(wordSpacingFactor != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_style.dart", 812, 12, "wordSpacingFactor != null");
      if (!(wordSpacingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_style.dart", 813, 12, "wordSpacingDelta != null");
      if (!(this.wordSpacing != null || wordSpacingFactor === 1.0 && wordSpacingDelta === 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_style.dart", 814, 12, "wordSpacing != null || (wordSpacingFactor == 1.0 && wordSpacingDelta == 0.0)");
      if (!(heightFactor != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_style.dart", 815, 12, "heightFactor != null");
      if (!(heightDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_style.dart", 816, 12, "heightDelta != null");
      if (!(heightFactor != null || heightFactor === 1.0 && heightDelta === 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_style.dart", 817, 12, "heightFactor != null || (heightFactor == 1.0 && heightDelta == 0.0)");
      if (!(decorationThicknessFactor != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_style.dart", 818, 12, "decorationThicknessFactor != null");
      if (!(decorationThicknessDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_style.dart", 819, 12, "decorationThicknessDelta != null");
      if (!(this.decorationThickness != null || decorationThicknessFactor === 1.0 && decorationThicknessDelta === 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_style.dart", 820, 12, "decorationThickness != null || (decorationThicknessFactor == 1.0 && decorationThicknessDelta == 0.0)");
      let modifiedDebugLabel = null;
      if (!dart.test(dart.fn(() => {
        if (this.debugLabel != null) modifiedDebugLabel = "(" + dart.str(this.debugLabel) + ").apply";
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_style.dart", 823, 12, "() {\r\n      if (debugLabel != null)\r\n        modifiedDebugLabel = '($debugLabel).apply';\r\n      return true;\r\n    }()");
      return new text_style.TextStyle.new({inherit: this.inherit, color: this.foreground == null ? (t18 = color, t18 == null ? this.color : t18) : null, backgroundColor: this.background == null ? (t18$ = backgroundColor, t18$ == null ? this.backgroundColor : t18$) : null, fontFamily: (t18$0 = fontFamily, t18$0 == null ? this.fontFamily : t18$0), fontFamilyFallback: (t18$1 = fontFamilyFallback, t18$1 == null ? this.fontFamilyFallback : t18$1), fontSize: this.fontSize == null ? null : dart.notNull(this.fontSize) * dart.notNull(fontSizeFactor) + dart.notNull(fontSizeDelta), fontWeight: this.fontWeight == null ? null : ui.FontWeight.values[$_get](dart.asInt((dart.notNull(this.fontWeight.index) + dart.notNull(fontWeightDelta))[$clamp](0, dart.notNull(ui.FontWeight.values[$length]) - 1))), fontStyle: this.fontStyle, letterSpacing: this.letterSpacing == null ? null : dart.notNull(this.letterSpacing) * dart.notNull(letterSpacingFactor) + dart.notNull(letterSpacingDelta), wordSpacing: this.wordSpacing == null ? null : dart.notNull(this.wordSpacing) * dart.notNull(wordSpacingFactor) + dart.notNull(wordSpacingDelta), textBaseline: this.textBaseline, height: this.height == null ? null : dart.notNull(this.height) * dart.notNull(heightFactor) + dart.notNull(heightDelta), locale: this.locale, foreground: this.foreground, background: this.background, shadows: this.shadows, fontFeatures: this.fontFeatures, decoration: (t18$2 = decoration, t18$2 == null ? this.decoration : t18$2), decorationColor: (t18$3 = decorationColor, t18$3 == null ? this.decorationColor : t18$3), decorationStyle: (t18$4 = decorationStyle, t18$4 == null ? this.decorationStyle : t18$4), decorationThickness: this.decorationThickness == null ? null : dart.notNull(this.decorationThickness) * dart.notNull(decorationThicknessFactor) + dart.notNull(decorationThicknessDelta), debugLabel: modifiedDebugLabel});
    }
    merge(other) {
      if (other == null) return this;
      if (!dart.test(other.inherit)) return other;
      let mergedDebugLabel = null;
      if (!dart.test(dart.fn(() => {
        let t18, t18$;
        if (other.debugLabel != null || this.debugLabel != null) mergedDebugLabel = "(" + dart.str((t18 = this.debugLabel, t18 == null ? "unknown" : t18)) + ").merge(" + dart.str((t18$ = other.debugLabel, t18$ == null ? "unknown" : t18$)) + ")";
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_style.dart", 883, 12, "() {\r\n      if (other.debugLabel != null || debugLabel != null)\r\n        mergedDebugLabel = '(${debugLabel ?? _kDefaultDebugLabel}).merge(${other.debugLabel ?? _kDefaultDebugLabel})';\r\n      return true;\r\n    }()");
      return this.copyWith({color: other.color, backgroundColor: other.backgroundColor, fontFamily: other.fontFamily, fontFamilyFallback: other.fontFamilyFallback, fontSize: other.fontSize, fontWeight: other.fontWeight, fontStyle: other.fontStyle, letterSpacing: other.letterSpacing, wordSpacing: other.wordSpacing, textBaseline: other.textBaseline, height: other.height, locale: other.locale, foreground: other.foreground, background: other.background, shadows: other.shadows, fontFeatures: other.fontFeatures, decoration: other.decoration, decorationColor: other.decorationColor, decorationStyle: other.decorationStyle, decorationThickness: other.decorationThickness, debugLabel: mergedDebugLabel});
    }
    static lerp(a, b, t) {
      let t18, t18$, t18$0, t18$1, t18$2, t18$3, t18$4, t18$5, t19, t18$6, t19$, t18$7, t19$0, t18$8, t19$1, t18$9, t18$10, t18$11;
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_style.dart", 928, 12, "t != null");
      if (!(a == null || b == null || dart.equals(a.inherit, b.inherit))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_style.dart", 929, 12, "a == null || b == null || a.inherit == b.inherit");
      if (a == null && b == null) {
        return null;
      }
      let lerpDebugLabel = null;
      if (!dart.test(dart.fn(() => {
        let t18, t18$, t18$0, t18$1;
        lerpDebugLabel = "lerp(" + dart.str((t18$ = (t18 = a, t18 == null ? null : t18.debugLabel), t18$ == null ? "unknown" : t18$)) + " ⎯" + t[$toStringAsFixed](1) + "→ " + dart.str((t18$1 = (t18$0 = b, t18$0 == null ? null : t18$0.debugLabel), t18$1 == null ? "unknown" : t18$1)) + ")";
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_style.dart", 935, 12, "() {\r\n      lerpDebugLabel = 'lerp(${a?.debugLabel ?? _kDefaultDebugLabel} ⎯${t.toStringAsFixed(1)}→ ${b?.debugLabel ?? _kDefaultDebugLabel})';\r\n      return true;\r\n    }()");
      if (a == null) {
        return new text_style.TextStyle.new({inherit: b.inherit, color: ui.Color.lerp(null, b.color, t), backgroundColor: ui.Color.lerp(null, b.backgroundColor, t), fontFamily: dart.notNull(t) < 0.5 ? null : b.fontFamily, fontFamilyFallback: dart.notNull(t) < 0.5 ? null : b.fontFamilyFallback, fontSize: dart.notNull(t) < 0.5 ? null : b.fontSize, fontWeight: ui.FontWeight.lerp(null, b.fontWeight, t), fontStyle: dart.notNull(t) < 0.5 ? null : b.fontStyle, letterSpacing: dart.notNull(t) < 0.5 ? null : b.letterSpacing, wordSpacing: dart.notNull(t) < 0.5 ? null : b.wordSpacing, textBaseline: dart.notNull(t) < 0.5 ? null : b.textBaseline, height: dart.notNull(t) < 0.5 ? null : b.height, locale: dart.notNull(t) < 0.5 ? null : b.locale, foreground: dart.notNull(t) < 0.5 ? null : b.foreground, background: dart.notNull(t) < 0.5 ? null : b.background, decoration: dart.notNull(t) < 0.5 ? null : b.decoration, shadows: dart.notNull(t) < 0.5 ? null : b.shadows, fontFeatures: dart.notNull(t) < 0.5 ? null : b.fontFeatures, decorationColor: ui.Color.lerp(null, b.decorationColor, t), decorationStyle: dart.notNull(t) < 0.5 ? null : b.decorationStyle, decorationThickness: dart.notNull(t) < 0.5 ? null : b.decorationThickness, debugLabel: lerpDebugLabel});
      }
      if (b == null) {
        return new text_style.TextStyle.new({inherit: a.inherit, color: ui.Color.lerp(a.color, null, t), backgroundColor: ui.Color.lerp(null, a.backgroundColor, t), fontFamily: dart.notNull(t) < 0.5 ? a.fontFamily : null, fontFamilyFallback: dart.notNull(t) < 0.5 ? a.fontFamilyFallback : null, fontSize: dart.notNull(t) < 0.5 ? a.fontSize : null, fontWeight: ui.FontWeight.lerp(a.fontWeight, null, t), fontStyle: dart.notNull(t) < 0.5 ? a.fontStyle : null, letterSpacing: dart.notNull(t) < 0.5 ? a.letterSpacing : null, wordSpacing: dart.notNull(t) < 0.5 ? a.wordSpacing : null, textBaseline: dart.notNull(t) < 0.5 ? a.textBaseline : null, height: dart.notNull(t) < 0.5 ? a.height : null, locale: dart.notNull(t) < 0.5 ? a.locale : null, foreground: dart.notNull(t) < 0.5 ? a.foreground : null, background: dart.notNull(t) < 0.5 ? a.background : null, shadows: dart.notNull(t) < 0.5 ? a.shadows : null, fontFeatures: dart.notNull(t) < 0.5 ? a.fontFeatures : null, decoration: dart.notNull(t) < 0.5 ? a.decoration : null, decorationColor: ui.Color.lerp(a.decorationColor, null, t), decorationStyle: dart.notNull(t) < 0.5 ? a.decorationStyle : null, decorationThickness: dart.notNull(t) < 0.5 ? a.decorationThickness : null, debugLabel: lerpDebugLabel});
      }
      return new text_style.TextStyle.new({inherit: b.inherit, color: a.foreground == null && b.foreground == null ? ui.Color.lerp(a.color, b.color, t) : null, backgroundColor: a.background == null && b.background == null ? ui.Color.lerp(a.backgroundColor, b.backgroundColor, t) : null, fontFamily: dart.notNull(t) < 0.5 ? a.fontFamily : b.fontFamily, fontFamilyFallback: dart.notNull(t) < 0.5 ? a.fontFamilyFallback : b.fontFamilyFallback, fontSize: ui.lerpDouble((t18 = a.fontSize, t18 == null ? b.fontSize : t18), (t18$ = b.fontSize, t18$ == null ? a.fontSize : t18$), t), fontWeight: ui.FontWeight.lerp(a.fontWeight, b.fontWeight, t), fontStyle: dart.notNull(t) < 0.5 ? a.fontStyle : b.fontStyle, letterSpacing: ui.lerpDouble((t18$0 = a.letterSpacing, t18$0 == null ? b.letterSpacing : t18$0), (t18$1 = b.letterSpacing, t18$1 == null ? a.letterSpacing : t18$1), t), wordSpacing: ui.lerpDouble((t18$2 = a.wordSpacing, t18$2 == null ? b.wordSpacing : t18$2), (t18$3 = b.wordSpacing, t18$3 == null ? a.wordSpacing : t18$3), t), textBaseline: dart.notNull(t) < 0.5 ? a.textBaseline : b.textBaseline, height: ui.lerpDouble((t18$4 = a.height, t18$4 == null ? b.height : t18$4), (t18$5 = b.height, t18$5 == null ? a.height : t18$5), t), locale: dart.notNull(t) < 0.5 ? a.locale : b.locale, foreground: a.foreground != null || b.foreground != null ? dart.notNull(t) < 0.5 ? (t18$6 = a.foreground, t18$6 == null ? (t19 = ui.Paint.new(), t19.color = a.color, t19) : t18$6) : (t18$7 = b.foreground, t18$7 == null ? (t19$ = ui.Paint.new(), t19$.color = b.color, t19$) : t18$7) : null, background: a.background != null || b.background != null ? dart.notNull(t) < 0.5 ? (t18$8 = a.background, t18$8 == null ? (t19$0 = ui.Paint.new(), t19$0.color = a.backgroundColor, t19$0) : t18$8) : (t18$9 = b.background, t18$9 == null ? (t19$1 = ui.Paint.new(), t19$1.color = b.backgroundColor, t19$1) : t18$9) : null, shadows: dart.notNull(t) < 0.5 ? a.shadows : b.shadows, fontFeatures: dart.notNull(t) < 0.5 ? a.fontFeatures : b.fontFeatures, decoration: dart.notNull(t) < 0.5 ? a.decoration : b.decoration, decorationColor: ui.Color.lerp(a.decorationColor, b.decorationColor, t), decorationStyle: dart.notNull(t) < 0.5 ? a.decorationStyle : b.decorationStyle, decorationThickness: ui.lerpDouble((t18$10 = a.decorationThickness, t18$10 == null ? b.decorationThickness : t18$10), (t18$11 = b.decorationThickness, t18$11 == null ? a.decorationThickness : t18$11), t), debugLabel: lerpDebugLabel});
    }
    getTextStyle(opts) {
      let t19, t18;
      let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1;
      return ui.TextStyle.new({color: this.color, decoration: this.decoration, decorationColor: this.decorationColor, decorationStyle: this.decorationStyle, decorationThickness: this.decorationThickness, fontWeight: this.fontWeight, fontStyle: this.fontStyle, textBaseline: this.textBaseline, fontFamily: this.fontFamily, fontFamilyFallback: this.fontFamilyFallback, fontSize: this.fontSize == null ? null : dart.notNull(this.fontSize) * dart.notNull(textScaleFactor), letterSpacing: this.letterSpacing, wordSpacing: this.wordSpacing, height: this.height, locale: this.locale, foreground: this.foreground, background: (t18 = this.background, t18 == null ? this.backgroundColor != null ? (t19 = ui.Paint.new(), t19.color = this.backgroundColor, t19) : null : t18), shadows: this.shadows, fontFeatures: this.fontFeatures});
    }
    getParagraphStyle(opts) {
      let t18, t18$, t18$0, t18$1, t18$2, t18$3;
      let textAlign = opts && 'textAlign' in opts ? opts.textAlign : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1;
      let ellipsis = opts && 'ellipsis' in opts ? opts.ellipsis : null;
      let maxLines = opts && 'maxLines' in opts ? opts.maxLines : null;
      let textHeightBehavior = opts && 'textHeightBehavior' in opts ? opts.textHeightBehavior : null;
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
      let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
      let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let strutStyle = opts && 'strutStyle' in opts ? opts.strutStyle : null;
      if (!(textScaleFactor != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_style.dart", 1079, 12, "textScaleFactor != null");
      if (!(maxLines == null || dart.notNull(maxLines) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_style.dart", 1080, 12, "maxLines == null || maxLines > 0");
      return ui.ParagraphStyle.new({textAlign: textAlign, textDirection: textDirection, fontWeight: (t18 = fontWeight, t18 == null ? this.fontWeight : t18), fontStyle: (t18$ = fontStyle, t18$ == null ? this.fontStyle : t18$), fontFamily: (t18$0 = fontFamily, t18$0 == null ? this.fontFamily : t18$0), fontSize: dart.notNull((t18$2 = (t18$1 = fontSize, t18$1 == null ? this.fontSize : t18$1), t18$2 == null ? 14 : t18$2)) * dart.notNull(textScaleFactor), height: (t18$3 = height, t18$3 == null ? this.height : t18$3), textHeightBehavior: textHeightBehavior, strutStyle: strutStyle == null ? null : new _engine.EngineStrutStyle.new({fontFamily: strutStyle.fontFamily, fontFamilyFallback: strutStyle.fontFamilyFallback, fontSize: strutStyle.fontSize == null ? null : dart.notNull(strutStyle.fontSize) * dart.notNull(textScaleFactor), height: strutStyle.height, leading: strutStyle.leading, fontWeight: strutStyle.fontWeight, fontStyle: strutStyle.fontStyle, forceStrutHeight: strutStyle.forceStrutHeight}), maxLines: maxLines, ellipsis: ellipsis, locale: locale});
    }
    compareTo(other) {
      if (this === other) return basic_types.RenderComparison.identical;
      if (!dart.equals(this.inherit, other.inherit) || this.fontFamily != other.fontFamily || this.fontSize != other.fontSize || !dart.equals(this.fontWeight, other.fontWeight) || !dart.equals(this.fontStyle, other.fontStyle) || this.letterSpacing != other.letterSpacing || this.wordSpacing != other.wordSpacing || !dart.equals(this.textBaseline, other.textBaseline) || this.height != other.height || !dart.equals(this.locale, other.locale) || !dart.equals(this.foreground, other.foreground) || !dart.equals(this.background, other.background) || !dart.test(collections.listEquals(ui.Shadow, this.shadows, other.shadows)) || !dart.test(collections.listEquals(ui.FontFeature, this.fontFeatures, other.fontFeatures)) || !dart.test(collections.listEquals(core.String, this.fontFamilyFallback, other.fontFamilyFallback))) return basic_types.RenderComparison.layout;
      if (!dart.equals(this.color, other.color) || !dart.equals(this.backgroundColor, other.backgroundColor) || !dart.equals(this.decoration, other.decoration) || !dart.equals(this.decorationColor, other.decorationColor) || !dart.equals(this.decorationStyle, other.decorationStyle) || this.decorationThickness != other.decorationThickness) return basic_types.RenderComparison.paint;
      return basic_types.RenderComparison.identical;
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return text_style.TextStyle.is(other) && dart.equals(other.inherit, this.inherit) && dart.equals(other.color, this.color) && dart.equals(other.backgroundColor, this.backgroundColor) && other.fontFamily == this.fontFamily && other.fontSize == this.fontSize && dart.equals(other.fontWeight, this.fontWeight) && dart.equals(other.fontStyle, this.fontStyle) && other.letterSpacing == this.letterSpacing && other.wordSpacing == this.wordSpacing && dart.equals(other.textBaseline, this.textBaseline) && other.height == this.height && dart.equals(other.locale, this.locale) && dart.equals(other.foreground, this.foreground) && dart.equals(other.background, this.background) && dart.equals(other.decoration, this.decoration) && dart.equals(other.decorationColor, this.decorationColor) && dart.equals(other.decorationStyle, this.decorationStyle) && other.decorationThickness == this.decorationThickness && dart.test(collections.listEquals(ui.Shadow, other.shadows, this.shadows)) && dart.test(collections.listEquals(ui.FontFeature, other.fontFeatures, this.fontFeatures)) && dart.test(collections.listEquals(core.String, other.fontFamilyFallback, this.fontFamilyFallback));
    }
    get hashCode() {
      return ui.hashValues(this.inherit, this.color, this.backgroundColor, this.fontFamily, this.fontFamilyFallback, this.fontSize, this.fontWeight, this.fontStyle, this.letterSpacing, this.wordSpacing, this.textBaseline, this.height, this.locale, this.foreground, this.background, this.decoration, this.decorationColor, this.decorationStyle, this.shadows, this.fontFeatures);
    }
    toStringShort() {
      return object.objectRuntimeType(this, "TextStyle");
    }
    debugFillProperties(properties, opts) {
      let prefix = opts && 'prefix' in opts ? opts.prefix : "";
      super.debugFillProperties(properties);
      if (this.debugLabel != null) properties.add(new diagnostics.MessageProperty.new(dart.str(prefix) + "debugLabel", this.debugLabel));
      let styles = JSArrayOfDiagnosticsNode().of([new colors.ColorProperty.new(dart.str(prefix) + "color", this.color, {defaultValue: null}), new colors.ColorProperty.new(dart.str(prefix) + "backgroundColor", this.backgroundColor, {defaultValue: null}), new diagnostics.StringProperty.new(dart.str(prefix) + "family", this.fontFamily, {defaultValue: null, quoted: false}), new (IterablePropertyOfString()).new(dart.str(prefix) + "familyFallback", this.fontFamilyFallback, {defaultValue: null}), new diagnostics.DoubleProperty.new(dart.str(prefix) + "size", this.fontSize, {defaultValue: null})]);
      let weightDescription = null;
      if (this.fontWeight != null) {
        weightDescription = dart.str(dart.notNull(this.fontWeight.index) + 1) + "00";
      }
      styles[$add](new (DiagnosticsPropertyOfFontWeight()).new(dart.str(prefix) + "weight", this.fontWeight, {description: weightDescription, defaultValue: null}));
      styles[$add](new (EnumPropertyOfFontStyle()).new(dart.str(prefix) + "style", this.fontStyle, {defaultValue: null}));
      styles[$add](new diagnostics.DoubleProperty.new(dart.str(prefix) + "letterSpacing", this.letterSpacing, {defaultValue: null}));
      styles[$add](new diagnostics.DoubleProperty.new(dart.str(prefix) + "wordSpacing", this.wordSpacing, {defaultValue: null}));
      styles[$add](new (EnumPropertyOfTextBaseline()).new(dart.str(prefix) + "baseline", this.textBaseline, {defaultValue: null}));
      styles[$add](new diagnostics.DoubleProperty.new(dart.str(prefix) + "height", this.height, {unit: "x", defaultValue: null}));
      styles[$add](new (DiagnosticsPropertyOfLocale()).new(dart.str(prefix) + "locale", this.locale, {defaultValue: null}));
      styles[$add](new (DiagnosticsPropertyOfPaint()).new(dart.str(prefix) + "foreground", this.foreground, {defaultValue: null}));
      styles[$add](new (DiagnosticsPropertyOfPaint()).new(dart.str(prefix) + "background", this.background, {defaultValue: null}));
      if (this.decoration != null || this.decorationColor != null || this.decorationStyle != null || this.decorationThickness != null) {
        let decorationDescription = JSArrayOfString().of([]);
        if (this.decorationStyle != null) decorationDescription[$add](diagnostics.describeEnum(this.decorationStyle));
        styles[$add](new colors.ColorProperty.new(dart.str(prefix) + "decorationColor", this.decorationColor, {defaultValue: null, level: diagnostics.DiagnosticLevel.fine}));
        if (this.decorationColor != null) decorationDescription[$add](dart.str(this.decorationColor));
        styles[$add](new (DiagnosticsPropertyOfTextDecoration()).new(dart.str(prefix) + "decoration", this.decoration, {defaultValue: null, level: diagnostics.DiagnosticLevel.hidden}));
        if (this.decoration != null) decorationDescription[$add](dart.str(this.decoration));
        if (!dart.test(decorationDescription[$isNotEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_style.dart", 1254, 14, "decorationDescription.isNotEmpty");
        styles[$add](new diagnostics.MessageProperty.new(dart.str(prefix) + "decoration", decorationDescription[$join](" ")));
        styles[$add](new diagnostics.DoubleProperty.new(dart.str(prefix) + "decorationThickness", this.decorationThickness, {unit: "x", defaultValue: null}));
      }
      let styleSpecified = styles[$any](dart.fn(n => !dart.test(n.isFiltered(diagnostics.DiagnosticLevel.info)), DiagnosticsNodeTobool()));
      properties.add(new (DiagnosticsPropertyOfbool()).new(dart.str(prefix) + "inherit", this.inherit, {level: !dart.test(styleSpecified) && dart.test(this.inherit) ? diagnostics.DiagnosticLevel.fine : diagnostics.DiagnosticLevel.info}));
      styles[$forEach](dart.bind(properties, 'add'));
      if (!dart.test(styleSpecified)) properties.add(new diagnostics.FlagProperty.new("inherit", {value: this.inherit, ifTrue: dart.str(prefix) + "<all styles inherited>", ifFalse: dart.str(prefix) + "<no style specified>"}));
    }
  };
  (text_style.TextStyle.new = function(opts) {
    let inherit = opts && 'inherit' in opts ? opts.inherit : true;
    let color = opts && 'color' in opts ? opts.color : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
    let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
    let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
    let letterSpacing = opts && 'letterSpacing' in opts ? opts.letterSpacing : null;
    let wordSpacing = opts && 'wordSpacing' in opts ? opts.wordSpacing : null;
    let textBaseline = opts && 'textBaseline' in opts ? opts.textBaseline : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let foreground = opts && 'foreground' in opts ? opts.foreground : null;
    let background = opts && 'background' in opts ? opts.background : null;
    let shadows = opts && 'shadows' in opts ? opts.shadows : null;
    let fontFeatures = opts && 'fontFeatures' in opts ? opts.fontFeatures : null;
    let decoration = opts && 'decoration' in opts ? opts.decoration : null;
    let decorationColor = opts && 'decorationColor' in opts ? opts.decorationColor : null;
    let decorationStyle = opts && 'decorationStyle' in opts ? opts.decorationStyle : null;
    let decorationThickness = opts && 'decorationThickness' in opts ? opts.decorationThickness : null;
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
    let fontFamilyFallback = opts && 'fontFamilyFallback' in opts ? opts.fontFamilyFallback : null;
    let $package = opts && 'package' in opts ? opts.package : null;
    this[inherit$] = inherit;
    this[color$2] = color;
    this[backgroundColor$] = backgroundColor;
    this[fontSize$] = fontSize;
    this[fontWeight$] = fontWeight;
    this[fontStyle$] = fontStyle;
    this[letterSpacing$] = letterSpacing;
    this[wordSpacing$] = wordSpacing;
    this[textBaseline$] = textBaseline;
    this[height$1] = height;
    this[locale$0] = locale;
    this[foreground$] = foreground;
    this[background$] = background;
    this[shadows$0] = shadows;
    this[fontFeatures$] = fontFeatures;
    this[decoration$] = decoration;
    this[decorationColor$] = decorationColor;
    this[decorationStyle$] = decorationStyle;
    this[decorationThickness$] = decorationThickness;
    this[debugLabel$] = debugLabel;
    this[fontFamily$] = $package == null ? fontFamily : "packages/" + dart.str($package) + "/" + dart.str(fontFamily);
    this[_fontFamilyFallback$] = fontFamilyFallback;
    this[_package$] = $package;
    if (!(inherit != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_style.dart", 427, 15, "inherit != null");
    if (!(color == null || foreground == null)) dart.assertFailed(text_style._kColorForegroundWarning, "org-dartlang-app:///packages/flutter/src/painting/text_style.dart", 428, 15, "color == null || foreground == null");
    if (!(backgroundColor == null || background == null)) dart.assertFailed(text_style._kColorBackgroundWarning, "org-dartlang-app:///packages/flutter/src/painting/text_style.dart", 429, 15, "backgroundColor == null || background == null");
    text_style.TextStyle.__proto__.new.call(this);
    ;
  }).prototype = text_style.TextStyle.prototype;
  dart.addTypeTests(text_style.TextStyle);
  dart.setMethodSignature(text_style.TextStyle, () => ({
    __proto__: dart.getMethods(text_style.TextStyle.__proto__),
    copyWith: dart.fnType(text_style.TextStyle, [], {background: ui.Paint, backgroundColor: ui.Color, color: ui.Color, debugLabel: core.String, decoration: ui.TextDecoration, decorationColor: ui.Color, decorationStyle: ui.TextDecorationStyle, decorationThickness: core.double, fontFamily: core.String, fontFamilyFallback: core.List$(core.String), fontFeatures: core.List$(ui.FontFeature), fontSize: core.double, fontStyle: ui.FontStyle, fontWeight: ui.FontWeight, foreground: ui.Paint, height: core.double, inherit: core.bool, letterSpacing: core.double, locale: ui.Locale, shadows: core.List$(ui.Shadow), textBaseline: ui.TextBaseline, wordSpacing: core.double}, {}),
    apply: dart.fnType(text_style.TextStyle, [], {backgroundColor: ui.Color, color: ui.Color, decoration: ui.TextDecoration, decorationColor: ui.Color, decorationStyle: ui.TextDecorationStyle, decorationThicknessDelta: core.double, decorationThicknessFactor: core.double, fontFamily: core.String, fontFamilyFallback: core.List$(core.String), fontSizeDelta: core.double, fontSizeFactor: core.double, fontWeightDelta: core.int, heightDelta: core.double, heightFactor: core.double, letterSpacingDelta: core.double, letterSpacingFactor: core.double, wordSpacingDelta: core.double, wordSpacingFactor: core.double}, {}),
    merge: dart.fnType(text_style.TextStyle, [text_style.TextStyle]),
    getTextStyle: dart.fnType(ui.TextStyle, [], {textScaleFactor: core.double}, {}),
    getParagraphStyle: dart.fnType(ui.ParagraphStyle, [], {ellipsis: core.String, fontFamily: core.String, fontSize: core.double, fontStyle: ui.FontStyle, fontWeight: ui.FontWeight, height: core.double, locale: ui.Locale, maxLines: core.int, strutStyle: strut_style.StrutStyle, textAlign: ui.TextAlign, textDirection: ui.TextDirection, textHeightBehavior: ui.TextHeightBehavior, textScaleFactor: core.double}, {}),
    compareTo: dart.fnType(basic_types.RenderComparison, [text_style.TextStyle]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object]),
    debugFillProperties: dart.fnType(dart.void, [diagnostics.DiagnosticPropertiesBuilder], {prefix: core.String}, {})
  }));
  dart.setGetterSignature(text_style.TextStyle, () => ({
    __proto__: dart.getGetters(text_style.TextStyle.__proto__),
    fontFamilyFallback: core.List$(core.String)
  }));
  dart.setLibraryUri(text_style.TextStyle, "package:flutter/src/painting/text_style.dart");
  dart.setFieldSignature(text_style.TextStyle, () => ({
    __proto__: dart.getFields(text_style.TextStyle.__proto__),
    inherit: dart.finalFieldType(core.bool),
    color: dart.finalFieldType(ui.Color),
    backgroundColor: dart.finalFieldType(ui.Color),
    fontFamily: dart.finalFieldType(core.String),
    [_fontFamilyFallback]: dart.finalFieldType(core.List$(core.String)),
    [_package]: dart.finalFieldType(core.String),
    fontSize: dart.finalFieldType(core.double),
    fontWeight: dart.finalFieldType(ui.FontWeight),
    fontStyle: dart.finalFieldType(ui.FontStyle),
    letterSpacing: dart.finalFieldType(core.double),
    wordSpacing: dart.finalFieldType(core.double),
    textBaseline: dart.finalFieldType(ui.TextBaseline),
    height: dart.finalFieldType(core.double),
    locale: dart.finalFieldType(ui.Locale),
    foreground: dart.finalFieldType(ui.Paint),
    background: dart.finalFieldType(ui.Paint),
    decoration: dart.finalFieldType(ui.TextDecoration),
    decorationColor: dart.finalFieldType(ui.Color),
    decorationStyle: dart.finalFieldType(ui.TextDecorationStyle),
    decorationThickness: dart.finalFieldType(core.double),
    debugLabel: dart.finalFieldType(core.String),
    shadows: dart.finalFieldType(core.List$(ui.Shadow)),
    fontFeatures: dart.finalFieldType(core.List$(ui.FontFeature))
  }));
  dart.defineExtensionMethods(text_style.TextStyle, ['_equals']);
  dart.defineExtensionAccessors(text_style.TextStyle, ['hashCode']);
  dart.defineLazy(text_style.TextStyle, {
    /*text_style.TextStyle._defaultFontSize*/get _defaultFontSize() {
      return 14;
    }
  });
  dart.defineLazy(text_style, {
    /*text_style._kDefaultDebugLabel*/get _kDefaultDebugLabel() {
      return "unknown";
    },
    /*text_style._kColorForegroundWarning*/get _kColorForegroundWarning() {
      return "Cannot provide both a color and a foreground\nThe color argument is just a shorthand for \"foreground: new Paint()..color = color\".";
    },
    /*text_style._kColorBackgroundWarning*/get _kColorBackgroundWarning() {
      return "Cannot provide both a backgroundColor and a background\nThe backgroundColor argument is just a shorthand for \"background: new Paint()..color = color\".";
    }
  });
  var _fontFamilyFallback$0 = dart.privateName(strut_style, "_fontFamilyFallback");
  var _package$0 = dart.privateName(strut_style, "_package");
  var fontFamily$0 = dart.privateName(strut_style, "StrutStyle.fontFamily");
  var _fontFamilyFallback$1 = dart.privateName(strut_style, "StrutStyle._fontFamilyFallback");
  var _package$1 = dart.privateName(strut_style, "StrutStyle._package");
  var fontSize$0 = dart.privateName(strut_style, "StrutStyle.fontSize");
  var height$2 = dart.privateName(strut_style, "StrutStyle.height");
  var fontWeight$0 = dart.privateName(strut_style, "StrutStyle.fontWeight");
  var fontStyle$0 = dart.privateName(strut_style, "StrutStyle.fontStyle");
  var leading$ = dart.privateName(strut_style, "StrutStyle.leading");
  var forceStrutHeight$ = dart.privateName(strut_style, "StrutStyle.forceStrutHeight");
  var debugLabel$0 = dart.privateName(strut_style, "StrutStyle.debugLabel");
  var C90;
  strut_style.StrutStyle = class StrutStyle extends diagnostics.Diagnosticable {
    get fontFamily() {
      return this[fontFamily$0];
    }
    set fontFamily(value) {
      super.fontFamily = value;
    }
    get [_fontFamilyFallback$0]() {
      return this[_fontFamilyFallback$1];
    }
    set [_fontFamilyFallback$0](value) {
      super[_fontFamilyFallback$0] = value;
    }
    get [_package$0]() {
      return this[_package$1];
    }
    set [_package$0](value) {
      super[_package$0] = value;
    }
    get fontSize() {
      return this[fontSize$0];
    }
    set fontSize(value) {
      super.fontSize = value;
    }
    get height() {
      return this[height$2];
    }
    set height(value) {
      super.height = value;
    }
    get fontWeight() {
      return this[fontWeight$0];
    }
    set fontWeight(value) {
      super.fontWeight = value;
    }
    get fontStyle() {
      return this[fontStyle$0];
    }
    set fontStyle(value) {
      super.fontStyle = value;
    }
    get leading() {
      return this[leading$];
    }
    set leading(value) {
      super.leading = value;
    }
    get forceStrutHeight() {
      return this[forceStrutHeight$];
    }
    set forceStrutHeight(value) {
      super.forceStrutHeight = value;
    }
    get debugLabel() {
      return this[debugLabel$0];
    }
    set debugLabel(value) {
      super.debugLabel = value;
    }
    get fontFamilyFallback() {
      if (this[_package$0] != null && this[_fontFamilyFallback$0] != null) return this[_fontFamilyFallback$0][$map](core.String, dart.fn(family => "packages/" + dart.str(this[_package$0]) + "/" + dart.str(family), StringToString()))[$toList]();
      return this[_fontFamilyFallback$0];
    }
    compareTo(other) {
      if (this === other) return basic_types.RenderComparison.identical;
      if (this.fontFamily != other.fontFamily || this.fontSize != other.fontSize || !dart.equals(this.fontWeight, other.fontWeight) || !dart.equals(this.fontStyle, other.fontStyle) || this.height != other.height || this.leading != other.leading || !dart.equals(this.forceStrutHeight, other.forceStrutHeight) || !dart.test(collections.listEquals(core.String, this.fontFamilyFallback, other.fontFamilyFallback))) return basic_types.RenderComparison.layout;
      return basic_types.RenderComparison.identical;
    }
    inheritFromTextStyle(other) {
      let t18, t18$, t18$0, t18$1, t18$2, t18$3, t18$4;
      if (other == null) return this;
      return new strut_style.StrutStyle.new({fontFamily: (t18 = this.fontFamily, t18 == null ? other.fontFamily : t18), fontFamilyFallback: (t18$ = this.fontFamilyFallback, t18$ == null ? other.fontFamilyFallback : t18$), fontSize: (t18$0 = this.fontSize, t18$0 == null ? other.fontSize : t18$0), height: (t18$1 = this.height, t18$1 == null ? other.height : t18$1), leading: this.leading, fontWeight: (t18$2 = this.fontWeight, t18$2 == null ? other.fontWeight : t18$2), fontStyle: (t18$3 = this.fontStyle, t18$3 == null ? other.fontStyle : t18$3), forceStrutHeight: this.forceStrutHeight, debugLabel: (t18$4 = this.debugLabel, t18$4 == null ? other.debugLabel : t18$4)});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return strut_style.StrutStyle.is(other) && other.fontFamily == this.fontFamily && other.fontSize == this.fontSize && dart.equals(other.fontWeight, this.fontWeight) && dart.equals(other.fontStyle, this.fontStyle) && other.height == this.height && other.leading == this.leading && dart.equals(other.forceStrutHeight, this.forceStrutHeight);
    }
    get hashCode() {
      return ui.hashValues(this.fontFamily, this.fontSize, this.fontWeight, this.fontStyle, this.height, this.leading, this.forceStrutHeight);
    }
    toStringShort() {
      return object.objectRuntimeType(this, "StrutStyle");
    }
    debugFillProperties(properties, opts) {
      let prefix = opts && 'prefix' in opts ? opts.prefix : "";
      super.debugFillProperties(properties);
      if (this.debugLabel != null) properties.add(new diagnostics.MessageProperty.new(dart.str(prefix) + "debugLabel", this.debugLabel));
      let styles = JSArrayOfDiagnosticsNode().of([new diagnostics.StringProperty.new(dart.str(prefix) + "family", this.fontFamily, {defaultValue: null, quoted: false}), new (IterablePropertyOfString()).new(dart.str(prefix) + "familyFallback", this.fontFamilyFallback, {defaultValue: null}), new diagnostics.DoubleProperty.new(dart.str(prefix) + "size", this.fontSize, {defaultValue: null})]);
      let weightDescription = null;
      if (this.fontWeight != null) {
        weightDescription = "w" + dart.str(dart.notNull(this.fontWeight.index) + 1) + "00";
      }
      styles[$add](new (DiagnosticsPropertyOfFontWeight()).new(dart.str(prefix) + "weight", this.fontWeight, {description: weightDescription, defaultValue: null}));
      styles[$add](new (EnumPropertyOfFontStyle()).new(dart.str(prefix) + "style", this.fontStyle, {defaultValue: null}));
      styles[$add](new diagnostics.DoubleProperty.new(dart.str(prefix) + "height", this.height, {unit: "x", defaultValue: null}));
      styles[$add](new diagnostics.FlagProperty.new(dart.str(prefix) + "forceStrutHeight", {value: this.forceStrutHeight, defaultValue: null, ifTrue: dart.str(prefix) + "<strut height forced>", ifFalse: dart.str(prefix) + "<strut height normal>"}));
      let styleSpecified = styles[$any](dart.fn(n => !dart.test(n.isFiltered(diagnostics.DiagnosticLevel.info)), DiagnosticsNodeTobool()));
      styles[$forEach](dart.bind(properties, 'add'));
      if (!dart.test(styleSpecified)) properties.add(new diagnostics.FlagProperty.new("forceStrutHeight", {value: this.forceStrutHeight, ifTrue: dart.str(prefix) + "<strut height forced>", ifFalse: dart.str(prefix) + "<strut height normal>"}));
    }
  };
  (strut_style.StrutStyle.new = function(opts) {
    let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
    let fontFamilyFallback = opts && 'fontFamilyFallback' in opts ? opts.fontFamilyFallback : null;
    let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let leading = opts && 'leading' in opts ? opts.leading : null;
    let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
    let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
    let forceStrutHeight = opts && 'forceStrutHeight' in opts ? opts.forceStrutHeight : null;
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let $package = opts && 'package' in opts ? opts.package : null;
    this[fontSize$0] = fontSize;
    this[height$2] = height;
    this[leading$] = leading;
    this[fontWeight$0] = fontWeight;
    this[fontStyle$0] = fontStyle;
    this[forceStrutHeight$] = forceStrutHeight;
    this[debugLabel$0] = debugLabel;
    this[fontFamily$0] = $package == null ? fontFamily : "packages/" + dart.str($package) + "/" + dart.str(fontFamily);
    this[_fontFamilyFallback$1] = fontFamilyFallback;
    this[_package$1] = $package;
    if (!(fontSize == null || dart.notNull(fontSize) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/strut_style.dart", 311, 15, "fontSize == null || fontSize > 0");
    if (!(leading == null || dart.notNull(leading) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/strut_style.dart", 312, 15, "leading == null || leading >= 0");
    if (!($package == null || $package != null && (fontFamily != null || fontFamilyFallback != null))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/strut_style.dart", 313, 15, "package == null || (package != null && (fontFamily != null || fontFamilyFallback != null))");
    strut_style.StrutStyle.__proto__.new.call(this);
    ;
  }).prototype = strut_style.StrutStyle.prototype;
  (strut_style.StrutStyle.fromTextStyle = function(textStyle, opts) {
    let t18, t18$, t18$0, t18$1, t18$2, t18$3;
    let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
    let fontFamilyFallback = opts && 'fontFamilyFallback' in opts ? opts.fontFamilyFallback : null;
    let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let leading = opts && 'leading' in opts ? opts.leading : null;
    let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
    let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
    let forceStrutHeight = opts && 'forceStrutHeight' in opts ? opts.forceStrutHeight : null;
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let $package = opts && 'package' in opts ? opts.package : null;
    this[leading$] = leading;
    this[forceStrutHeight$] = forceStrutHeight;
    if (!(textStyle != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/strut_style.dart", 346, 15, "textStyle != null");
    if (!(fontSize == null || dart.notNull(fontSize) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/strut_style.dart", 347, 15, "fontSize == null || fontSize > 0");
    if (!(leading == null || dart.notNull(leading) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/strut_style.dart", 348, 15, "leading == null || leading >= 0");
    if (!($package == null || $package != null && (fontFamily != null || fontFamilyFallback != null))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/strut_style.dart", 349, 15, "package == null || (package != null && (fontFamily != null || fontFamilyFallback != null))");
    this[fontFamily$0] = fontFamily != null ? $package == null ? fontFamily : "packages/" + dart.str($package) + "/" + dart.str(fontFamily) : textStyle.fontFamily;
    this[_fontFamilyFallback$1] = (t18 = fontFamilyFallback, t18 == null ? textStyle.fontFamilyFallback : t18);
    this[height$2] = (t18$ = height, t18$ == null ? textStyle.height : t18$);
    this[fontSize$0] = (t18$0 = fontSize, t18$0 == null ? textStyle.fontSize : t18$0);
    this[fontWeight$0] = (t18$1 = fontWeight, t18$1 == null ? textStyle.fontWeight : t18$1);
    this[fontStyle$0] = (t18$2 = fontStyle, t18$2 == null ? textStyle.fontStyle : t18$2);
    this[debugLabel$0] = (t18$3 = debugLabel, t18$3 == null ? textStyle.debugLabel : t18$3);
    this[_package$1] = $package;
    strut_style.StrutStyle.__proto__.new.call(this);
    ;
  }).prototype = strut_style.StrutStyle.prototype;
  dart.addTypeTests(strut_style.StrutStyle);
  dart.setMethodSignature(strut_style.StrutStyle, () => ({
    __proto__: dart.getMethods(strut_style.StrutStyle.__proto__),
    compareTo: dart.fnType(basic_types.RenderComparison, [strut_style.StrutStyle]),
    inheritFromTextStyle: dart.fnType(strut_style.StrutStyle, [text_style.TextStyle]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object]),
    debugFillProperties: dart.fnType(dart.void, [diagnostics.DiagnosticPropertiesBuilder], {prefix: core.String}, {})
  }));
  dart.setGetterSignature(strut_style.StrutStyle, () => ({
    __proto__: dart.getGetters(strut_style.StrutStyle.__proto__),
    fontFamilyFallback: core.List$(core.String)
  }));
  dart.setLibraryUri(strut_style.StrutStyle, "package:flutter/src/painting/strut_style.dart");
  dart.setFieldSignature(strut_style.StrutStyle, () => ({
    __proto__: dart.getFields(strut_style.StrutStyle.__proto__),
    fontFamily: dart.finalFieldType(core.String),
    [_fontFamilyFallback$0]: dart.finalFieldType(core.List$(core.String)),
    [_package$0]: dart.finalFieldType(core.String),
    fontSize: dart.finalFieldType(core.double),
    height: dart.finalFieldType(core.double),
    fontWeight: dart.finalFieldType(ui.FontWeight),
    fontStyle: dart.finalFieldType(ui.FontStyle),
    leading: dart.finalFieldType(core.double),
    forceStrutHeight: dart.finalFieldType(core.bool),
    debugLabel: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(strut_style.StrutStyle, ['_equals']);
  dart.defineExtensionAccessors(strut_style.StrutStyle, ['hashCode']);
  dart.defineLazy(strut_style.StrutStyle, {
    /*strut_style.StrutStyle.disabled*/get disabled() {
      return C90 || CT.C90;
    }
  });
  var _value$ = dart.privateName(inline_span, "_value");
  inline_span.Accumulator = class Accumulator extends core.Object {
    get value() {
      return this[_value$];
    }
    increment(addend) {
      if (!(dart.notNull(addend) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/inline_span.dart", 28, 12, "addend >= 0");
      this[_value$] = dart.notNull(this[_value$]) + dart.notNull(addend);
    }
  };
  (inline_span.Accumulator.new = function(_value = 0) {
    this[_value$] = _value;
    ;
  }).prototype = inline_span.Accumulator.prototype;
  dart.addTypeTests(inline_span.Accumulator);
  dart.setMethodSignature(inline_span.Accumulator, () => ({
    __proto__: dart.getMethods(inline_span.Accumulator.__proto__),
    increment: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(inline_span.Accumulator, () => ({
    __proto__: dart.getGetters(inline_span.Accumulator.__proto__),
    value: core.int
  }));
  dart.setLibraryUri(inline_span.Accumulator, "package:flutter/src/painting/inline_span.dart");
  dart.setFieldSignature(inline_span.Accumulator, () => ({
    __proto__: dart.getFields(inline_span.Accumulator.__proto__),
    [_value$]: dart.fieldType(core.int)
  }));
  var text$ = dart.privateName(inline_span, "InlineSpanSemanticsInformation.text");
  var semanticsLabel$ = dart.privateName(inline_span, "InlineSpanSemanticsInformation.semanticsLabel");
  var recognizer$ = dart.privateName(inline_span, "InlineSpanSemanticsInformation.recognizer");
  var isPlaceholder$ = dart.privateName(inline_span, "InlineSpanSemanticsInformation.isPlaceholder");
  var requiresOwnNode = dart.privateName(inline_span, "InlineSpanSemanticsInformation.requiresOwnNode");
  var C91;
  inline_span.InlineSpanSemanticsInformation = class InlineSpanSemanticsInformation extends core.Object {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get semanticsLabel() {
      return this[semanticsLabel$];
    }
    set semanticsLabel(value) {
      super.semanticsLabel = value;
    }
    get recognizer() {
      return this[recognizer$];
    }
    set recognizer(value) {
      super.recognizer = value;
    }
    get isPlaceholder() {
      return this[isPlaceholder$];
    }
    set isPlaceholder(value) {
      super.isPlaceholder = value;
    }
    get requiresOwnNode() {
      return this[requiresOwnNode];
    }
    set requiresOwnNode(value) {
      super.requiresOwnNode = value;
    }
    _equals(other) {
      if (other == null) return false;
      return inline_span.InlineSpanSemanticsInformation.is(other) && other.text == this.text && other.semanticsLabel == this.semanticsLabel && dart.equals(other.recognizer, this.recognizer) && dart.equals(other.isPlaceholder, this.isPlaceholder);
    }
    get hashCode() {
      return ui.hashValues(this.text, this.semanticsLabel, this.recognizer, this.isPlaceholder);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "InlineSpanSemanticsInformation")) + "{text: " + dart.str(this.text) + ", semanticsLabel: " + dart.str(this.semanticsLabel) + ", recognizer: " + dart.str(this.recognizer) + "}";
    }
  };
  (inline_span.InlineSpanSemanticsInformation.new = function(text, opts) {
    let isPlaceholder = opts && 'isPlaceholder' in opts ? opts.isPlaceholder : false;
    let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : null;
    let recognizer = opts && 'recognizer' in opts ? opts.recognizer : null;
    this[text$] = text;
    this[isPlaceholder$] = isPlaceholder;
    this[semanticsLabel$] = semanticsLabel;
    this[recognizer$] = recognizer;
    if (!(text != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/inline_span.dart", 59, 15, "text != null");
    if (!(isPlaceholder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/inline_span.dart", 60, 15, "isPlaceholder != null");
    if (!(dart.equals(isPlaceholder, false) || text === "￼" && semanticsLabel == null && recognizer == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/inline_span.dart", 61, 15, "isPlaceholder == false || (text == '\\uFFFC' && semanticsLabel == null && recognizer == null)");
    this[requiresOwnNode] = dart.test(isPlaceholder) || recognizer != null;
    ;
  }).prototype = inline_span.InlineSpanSemanticsInformation.prototype;
  dart.addTypeTests(inline_span.InlineSpanSemanticsInformation);
  dart.setMethodSignature(inline_span.InlineSpanSemanticsInformation, () => ({
    __proto__: dart.getMethods(inline_span.InlineSpanSemanticsInformation.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(inline_span.InlineSpanSemanticsInformation, "package:flutter/src/painting/inline_span.dart");
  dart.setFieldSignature(inline_span.InlineSpanSemanticsInformation, () => ({
    __proto__: dart.getFields(inline_span.InlineSpanSemanticsInformation.__proto__),
    text: dart.finalFieldType(core.String),
    semanticsLabel: dart.finalFieldType(core.String),
    recognizer: dart.finalFieldType(recognizer.GestureRecognizer),
    isPlaceholder: dart.finalFieldType(core.bool),
    requiresOwnNode: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(inline_span.InlineSpanSemanticsInformation, ['_equals', 'toString']);
  dart.defineExtensionAccessors(inline_span.InlineSpanSemanticsInformation, ['hashCode']);
  dart.defineLazy(inline_span.InlineSpanSemanticsInformation, {
    /*inline_span.InlineSpanSemanticsInformation.placeholder*/get placeholder() {
      return C91 || CT.C91;
    }
  });
  var style$0 = dart.privateName(inline_span, "InlineSpan.style");
  inline_span.InlineSpan = class InlineSpan extends diagnostics.DiagnosticableTree {
    get style() {
      return this[style$0];
    }
    set style(value) {
      super.style = value;
    }
    get text() {
      return null;
    }
    get children() {
      return null;
    }
    get recognizer() {
      return null;
    }
    getSpanForPosition(position) {
      if (!dart.test(this.debugAssertIsValid())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/inline_span.dart", 219, 12, "debugAssertIsValid()");
      let offset = new inline_span.Accumulator.new();
      let result = null;
      this.visitChildren(dart.fn(span => {
        result = span.getSpanForPositionVisitor(position, offset);
        return result == null;
      }, InlineSpanTobool()));
      return result;
    }
    toPlainText(opts) {
      let includeSemanticsLabels = opts && 'includeSemanticsLabels' in opts ? opts.includeSemanticsLabels : true;
      let includePlaceholders = opts && 'includePlaceholders' in opts ? opts.includePlaceholders : true;
      let buffer = new core.StringBuffer.new();
      this.computeToPlainText(buffer, {includeSemanticsLabels: includeSemanticsLabels, includePlaceholders: includePlaceholders});
      return buffer.toString();
    }
    getSemanticsInformation() {
      let collector = JSArrayOfInlineSpanSemanticsInformation().of([]);
      this.computeSemanticsInformation(collector);
      return collector;
    }
    codeUnitAt(index) {
      if (dart.notNull(index) < 0) return null;
      let offset = new inline_span.Accumulator.new();
      let result = null;
      this.visitChildren(dart.fn(span => {
        result = span.codeUnitAtVisitor(index, offset);
        return result == null;
      }, InlineSpanTobool()));
      return result;
    }
    debugAssertIsValid() {
      return true;
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return inline_span.InlineSpan.is(other) && dart.equals(other.style, this.style);
    }
    get hashCode() {
      return dart.hashCode(this.style);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.defaultDiagnosticsTreeStyle = diagnostics.DiagnosticsTreeStyle.whitespace;
      if (this.style != null) {
        this.style.debugFillProperties(properties);
      }
    }
  };
  (inline_span.InlineSpan.new = function(opts) {
    let style = opts && 'style' in opts ? opts.style : null;
    this[style$0] = style;
    inline_span.InlineSpan.__proto__.new.call(this);
    ;
  }).prototype = inline_span.InlineSpan.prototype;
  dart.addTypeTests(inline_span.InlineSpan);
  dart.setMethodSignature(inline_span.InlineSpan, () => ({
    __proto__: dart.getMethods(inline_span.InlineSpan.__proto__),
    getSpanForPosition: dart.fnType(inline_span.InlineSpan, [ui.TextPosition]),
    toPlainText: dart.fnType(core.String, [], {includePlaceholders: core.bool, includeSemanticsLabels: core.bool}, {}),
    getSemanticsInformation: dart.fnType(core.List$(inline_span.InlineSpanSemanticsInformation), []),
    codeUnitAt: dart.fnType(core.int, [core.int]),
    debugAssertIsValid: dart.fnType(core.bool, []),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(inline_span.InlineSpan, () => ({
    __proto__: dart.getGetters(inline_span.InlineSpan.__proto__),
    text: core.String,
    children: core.List$(inline_span.InlineSpan),
    recognizer: recognizer.GestureRecognizer
  }));
  dart.setLibraryUri(inline_span.InlineSpan, "package:flutter/src/painting/inline_span.dart");
  dart.setFieldSignature(inline_span.InlineSpan, () => ({
    __proto__: dart.getFields(inline_span.InlineSpan.__proto__),
    style: dart.finalFieldType(text_style.TextStyle)
  }));
  dart.defineExtensionMethods(inline_span.InlineSpan, ['_equals']);
  dart.defineExtensionAccessors(inline_span.InlineSpan, ['hashCode']);
  var C92;
  var text$0 = dart.privateName(text_span, "TextSpan.text");
  var children$ = dart.privateName(text_span, "TextSpan.children");
  var recognizer$0 = dart.privateName(text_span, "TextSpan.recognizer");
  var semanticsLabel$0 = dart.privateName(text_span, "TextSpan.semanticsLabel");
  text_span.TextSpan = class TextSpan extends inline_span.InlineSpan {
    get text() {
      return this[text$0];
    }
    set text(value) {
      super.text = value;
    }
    get children() {
      return this[children$];
    }
    set children(value) {
      super.children = value;
    }
    get recognizer() {
      return this[recognizer$0];
    }
    set recognizer(value) {
      super.recognizer = value;
    }
    get semanticsLabel() {
      return this[semanticsLabel$0];
    }
    set semanticsLabel(value) {
      super.semanticsLabel = value;
    }
    build(builder, opts) {
      let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1;
      let dimensions = opts && 'dimensions' in opts ? opts.dimensions : null;
      if (!dart.test(this.debugAssertIsValid())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_span.dart", 202, 12, "debugAssertIsValid()");
      let hasStyle = this.style != null;
      if (hasStyle) builder.pushStyle(this.style.getTextStyle({textScaleFactor: textScaleFactor}));
      if (this.text != null) builder.addText(this.text);
      if (this.children != null) {
        for (let child of this.children) {
          if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_span.dart", 210, 16, "child != null");
          child.build(builder, {textScaleFactor: textScaleFactor, dimensions: dimensions});
        }
      }
      if (hasStyle) builder.pop();
    }
    visitChildren(visitor) {
      if (this.text != null) {
        if (!dart.test(visitor(this))) return false;
      }
      if (this.children != null) {
        for (let child of this.children) {
          if (!dart.test(child.visitChildren(visitor))) return false;
        }
      }
      return true;
    }
    visitTextSpan(visitor) {
      if (this.text != null) {
        if (!dart.test(visitor(this))) return false;
      }
      if (this.children != null) {
        for (let child of this.children) {
          if (!text_span.TextSpan.is(child)) dart.assertFailed("visitTextSpan is deprecated. Use visitChildren to support InlineSpans", "org-dartlang-app:///packages/flutter/src/painting/text_span.dart", 261, 11, "child is TextSpan");
          let textSpanChild = text_span.TextSpan.as(child);
          if (!dart.test(textSpanChild.visitTextSpan(visitor))) return false;
        }
      }
      return true;
    }
    getSpanForPositionVisitor(position, offset) {
      if (this.text == null) {
        return null;
      }
      let affinity = position.affinity;
      let targetOffset = position.offset;
      let endOffset = dart.notNull(offset.value) + this.text.length;
      if (offset.value == targetOffset && dart.equals(affinity, ui.TextAffinity.downstream) || dart.notNull(offset.value) < dart.notNull(targetOffset) && dart.notNull(targetOffset) < endOffset || endOffset === targetOffset && dart.equals(affinity, ui.TextAffinity.upstream)) {
        return this;
      }
      offset.increment(this.text.length);
      return null;
    }
    computeToPlainText(buffer, opts) {
      let includeSemanticsLabels = opts && 'includeSemanticsLabels' in opts ? opts.includeSemanticsLabels : true;
      let includePlaceholders = opts && 'includePlaceholders' in opts ? opts.includePlaceholders : true;
      if (!dart.test(this.debugAssertIsValid())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_span.dart", 296, 12, "debugAssertIsValid()");
      if (this.semanticsLabel != null && dart.test(includeSemanticsLabels)) {
        buffer.write(this.semanticsLabel);
      } else if (this.text != null) {
        buffer.write(this.text);
      }
      if (this.children != null) {
        for (let child of this.children) {
          child.computeToPlainText(buffer, {includeSemanticsLabels: includeSemanticsLabels, includePlaceholders: includePlaceholders});
        }
      }
    }
    computeSemanticsInformation(collector) {
      if (!dart.test(this.debugAssertIsValid())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_span.dart", 314, 12, "debugAssertIsValid()");
      if (this.text != null || this.semanticsLabel != null) {
        collector[$add](new inline_span.InlineSpanSemanticsInformation.new(this.text, {semanticsLabel: this.semanticsLabel, recognizer: this.recognizer}));
      }
      if (this.children != null) {
        for (let child of this.children) {
          child.computeSemanticsInformation(collector);
        }
      }
    }
    codeUnitAtVisitor(index, offset) {
      if (this.text == null) {
        return null;
      }
      if (dart.notNull(index) - dart.notNull(offset.value) < this.text.length) {
        return this.text[$codeUnitAt](dart.notNull(index) - dart.notNull(offset.value));
      }
      offset.increment(this.text.length);
      return null;
    }
    describeSemantics(offset, semanticsOffsets, semanticsElements) {
      let t18, t18$;
      if (this.recognizer != null && (tap.TapGestureRecognizer.is(this.recognizer) || long_press.LongPressGestureRecognizer.is(this.recognizer))) {
        let length = (t18$ = (t18 = this.semanticsLabel, t18 == null ? null : t18.length), t18$ == null ? this.text.length : t18$);
        semanticsOffsets[$add](offset.value);
        semanticsOffsets[$add](dart.notNull(offset.value) + dart.notNull(length));
        semanticsElements[$add](this.recognizer);
      }
      offset.increment(this.text != null ? this.text.length : 0);
    }
    debugAssertIsValid() {
      if (!dart.test(dart.fn(() => {
        if (this.children != null) {
          for (let child of this.children) {
            if (child == null) {
              dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("TextSpan contains a null child."), new assertions.ErrorDescription.new("A TextSpan object with a non-null child list should not have any nulls in its child list."), this.toDiagnosticsNode({name: "The full text in question was", style: diagnostics.DiagnosticsTreeStyle.errorProperty})])));
            }
            if (!dart.test(child.debugAssertIsValid())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_span.dart", 377, 18, "child.debugAssertIsValid()");
          }
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_span.dart", 365, 12, "() {\r\n      if (children != null) {\r\n        for (final InlineSpan child in children) {\r\n          if (child == null) {\r\n            throw FlutterError.fromParts(<DiagnosticsNode>[\r\n              ErrorSummary('TextSpan contains a null child.'),\r\n              ErrorDescription(\r\n                  'A TextSpan object with a non-null child list should not have any nulls in its child list.'),\r\n              toDiagnosticsNode(name: 'The full text in question was',\r\n                  style: DiagnosticsTreeStyle.errorProperty),\r\n            ]);\r\n          }\r\n          assert(child.debugAssertIsValid());\r\n        }\r\n      }\r\n      return true;\r\n    }()");
      return super.debugAssertIsValid();
    }
    compareTo(other) {
      let t18, t18$;
      if (this === other) return basic_types.RenderComparison.identical;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return basic_types.RenderComparison.layout;
      let textSpan = text_span.TextSpan.as(other);
      if (textSpan.text != this.text || (t18 = this.children, t18 == null ? null : t18[$length]) != (t18$ = textSpan.children, t18$ == null ? null : t18$[$length]) || !(this.style == null)[$_equals](textSpan.style == null)) return basic_types.RenderComparison.layout;
      let result = dart.equals(this.recognizer, textSpan.recognizer) ? basic_types.RenderComparison.identical : basic_types.RenderComparison.metadata;
      if (this.style != null) {
        let candidate = this.style.compareTo(textSpan.style);
        if (dart.notNull(candidate.index) > dart.notNull(result.index)) result = candidate;
        if (dart.equals(result, basic_types.RenderComparison.layout)) return result;
      }
      if (this.children != null) {
        for (let index = 0; index < dart.notNull(this.children[$length]); index = index + 1) {
          let candidate = this.children[$_get](index).compareTo(textSpan.children[$_get](index));
          if (dart.notNull(candidate.index) > dart.notNull(result.index)) result = candidate;
          if (dart.equals(result, basic_types.RenderComparison.layout)) return result;
        }
      }
      return result;
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      if (!super._equals(other)) return false;
      return text_span.TextSpan.is(other) && other.text == this.text && dart.equals(other.recognizer, this.recognizer) && other.semanticsLabel == this.semanticsLabel && dart.test(collections.listEquals(inline_span.InlineSpan, other.children, this.children));
    }
    get hashCode() {
      return ui.hashValues(super.hashCode, this.text, this.recognizer, this.semanticsLabel, ui.hashList(this.children));
    }
    toStringShort() {
      return object.objectRuntimeType(this, "TextSpan");
    }
    debugFillProperties(properties) {
      let t18, t18$;
      super.debugFillProperties(properties);
      properties.add(new diagnostics.StringProperty.new("text", this.text, {showName: false, defaultValue: null}));
      if (this.style == null && this.text == null && this.children == null) properties.add(diagnostics.DiagnosticsNode.message("(empty)"));
      properties.add(new (DiagnosticsPropertyOfGestureRecognizer()).new("recognizer", this.recognizer, {description: (t18$ = (t18 = this.recognizer, t18 == null ? null : dart.runtimeType(t18)), t18$ == null ? null : dart.toString(t18$)), defaultValue: null}));
      if (this.semanticsLabel != null) {
        properties.add(new diagnostics.StringProperty.new("semanticsLabel", this.semanticsLabel));
      }
    }
    debugDescribeChildren() {
      if (this.children == null) return C92 || CT.C92;
      return this.children[$map](diagnostics.DiagnosticsNode, dart.fn(child => {
        if (child != null) {
          return child.toDiagnosticsNode();
        } else {
          return diagnostics.DiagnosticsNode.message("<null child>");
        }
      }, InlineSpanToDiagnosticsNode()))[$toList]();
    }
  };
  (text_span.TextSpan.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let recognizer = opts && 'recognizer' in opts ? opts.recognizer : null;
    let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : null;
    this[text$0] = text;
    this[children$] = children;
    this[recognizer$0] = recognizer;
    this[semanticsLabel$0] = semanticsLabel;
    text_span.TextSpan.__proto__.new.call(this, {style: style});
    ;
  }).prototype = text_span.TextSpan.prototype;
  dart.addTypeTests(text_span.TextSpan);
  dart.setMethodSignature(text_span.TextSpan, () => ({
    __proto__: dart.getMethods(text_span.TextSpan.__proto__),
    build: dart.fnType(dart.void, [ui.ParagraphBuilder], {dimensions: core.List$(text_painter.PlaceholderDimensions), textScaleFactor: core.double}, {}),
    visitChildren: dart.fnType(core.bool, [dart.fnType(core.bool, [inline_span.InlineSpan])]),
    visitTextSpan: dart.fnType(core.bool, [dart.fnType(core.bool, [text_span.TextSpan])]),
    getSpanForPositionVisitor: dart.fnType(inline_span.InlineSpan, [ui.TextPosition, inline_span.Accumulator]),
    computeToPlainText: dart.fnType(dart.void, [core.StringBuffer], {includePlaceholders: core.bool, includeSemanticsLabels: core.bool}, {}),
    computeSemanticsInformation: dart.fnType(dart.void, [core.List$(inline_span.InlineSpanSemanticsInformation)]),
    codeUnitAtVisitor: dart.fnType(core.int, [core.int, inline_span.Accumulator]),
    describeSemantics: dart.fnType(dart.void, [inline_span.Accumulator, core.List$(core.int), core.List]),
    compareTo: dart.fnType(basic_types.RenderComparison, [inline_span.InlineSpan])
  }));
  dart.setLibraryUri(text_span.TextSpan, "package:flutter/src/painting/text_span.dart");
  dart.setFieldSignature(text_span.TextSpan, () => ({
    __proto__: dart.getFields(text_span.TextSpan.__proto__),
    text: dart.finalFieldType(core.String),
    children: dart.finalFieldType(core.List$(inline_span.InlineSpan)),
    recognizer: dart.finalFieldType(recognizer.GestureRecognizer),
    semanticsLabel: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(text_span.TextSpan, ['_equals']);
  dart.defineExtensionAccessors(text_span.TextSpan, ['hashCode']);
  var size$0 = dart.privateName(text_painter, "PlaceholderDimensions.size");
  var alignment$0 = dart.privateName(text_painter, "PlaceholderDimensions.alignment");
  var baselineOffset$ = dart.privateName(text_painter, "PlaceholderDimensions.baselineOffset");
  var baseline$ = dart.privateName(text_painter, "PlaceholderDimensions.baseline");
  text_painter.PlaceholderDimensions = class PlaceholderDimensions extends core.Object {
    get size() {
      return this[size$0];
    }
    set size(value) {
      super.size = value;
    }
    get alignment() {
      return this[alignment$0];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get baselineOffset() {
      return this[baselineOffset$];
    }
    set baselineOffset(value) {
      super.baselineOffset = value;
    }
    get baseline() {
      return this[baseline$];
    }
    set baseline(value) {
      super.baseline = value;
    }
    toString() {
      return "PlaceholderDimensions(" + dart.str(this.size) + ", " + dart.str(this.baseline) + ")";
    }
  };
  (text_painter.PlaceholderDimensions.new = function(opts) {
    let size = opts && 'size' in opts ? opts.size : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    let baseline = opts && 'baseline' in opts ? opts.baseline : null;
    let baselineOffset = opts && 'baselineOffset' in opts ? opts.baselineOffset : null;
    this[size$0] = size;
    this[alignment$0] = alignment;
    this[baseline$] = baseline;
    this[baselineOffset$] = baselineOffset;
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 44, 15, "size != null");
    if (!(alignment != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 45, 15, "alignment != null");
    ;
  }).prototype = text_painter.PlaceholderDimensions.prototype;
  dart.addTypeTests(text_painter.PlaceholderDimensions);
  dart.setLibraryUri(text_painter.PlaceholderDimensions, "package:flutter/src/painting/text_painter.dart");
  dart.setFieldSignature(text_painter.PlaceholderDimensions, () => ({
    __proto__: dart.getFields(text_painter.PlaceholderDimensions.__proto__),
    size: dart.finalFieldType(ui.Size),
    alignment: dart.finalFieldType(ui.PlaceholderAlignment),
    baselineOffset: dart.finalFieldType(core.double),
    baseline: dart.finalFieldType(ui.TextBaseline)
  }));
  dart.defineExtensionMethods(text_painter.PlaceholderDimensions, ['toString']);
  var _name$5 = dart.privateName(text_painter, "_name");
  var C93;
  var C94;
  var C95;
  text_painter.TextWidthBasis = class TextWidthBasis extends core.Object {
    toString() {
      return this[_name$5];
    }
  };
  (text_painter.TextWidthBasis.new = function(index, _name) {
    this.index = index;
    this[_name$5] = _name;
    ;
  }).prototype = text_painter.TextWidthBasis.prototype;
  dart.addTypeTests(text_painter.TextWidthBasis);
  dart.setLibraryUri(text_painter.TextWidthBasis, "package:flutter/src/painting/text_painter.dart");
  dart.setFieldSignature(text_painter.TextWidthBasis, () => ({
    __proto__: dart.getFields(text_painter.TextWidthBasis.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$5]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(text_painter.TextWidthBasis, ['toString']);
  text_painter.TextWidthBasis.parent = C93 || CT.C93;
  text_painter.TextWidthBasis.longestLine = C94 || CT.C94;
  text_painter.TextWidthBasis.values = C95 || CT.C95;
  var offset$ = dart.privateName(text_painter, "_CaretMetrics.offset");
  var fullHeight$ = dart.privateName(text_painter, "_CaretMetrics.fullHeight");
  text_painter._CaretMetrics = class _CaretMetrics extends core.Object {
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    get fullHeight() {
      return this[fullHeight$];
    }
    set fullHeight(value) {
      super.fullHeight = value;
    }
  };
  (text_painter._CaretMetrics.new = function(opts) {
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let fullHeight = opts && 'fullHeight' in opts ? opts.fullHeight : null;
    this[offset$] = offset;
    this[fullHeight$] = fullHeight;
    ;
  }).prototype = text_painter._CaretMetrics.prototype;
  dart.addTypeTests(text_painter._CaretMetrics);
  dart.setLibraryUri(text_painter._CaretMetrics, "package:flutter/src/painting/text_painter.dart");
  dart.setFieldSignature(text_painter._CaretMetrics, () => ({
    __proto__: dart.getFields(text_painter._CaretMetrics.__proto__),
    offset: dart.finalFieldType(ui.Offset),
    fullHeight: dart.finalFieldType(core.double)
  }));
  var C96;
  var _paragraph = dart.privateName(text_painter, "_paragraph");
  var _needsLayout = dart.privateName(text_painter, "_needsLayout");
  var _layoutTemplate = dart.privateName(text_painter, "_layoutTemplate");
  var _inlinePlaceholderBoxes = dart.privateName(text_painter, "_inlinePlaceholderBoxes");
  var _inlinePlaceholderScales = dart.privateName(text_painter, "_inlinePlaceholderScales");
  var _placeholderDimensions = dart.privateName(text_painter, "_placeholderDimensions");
  var _lastMinWidth = dart.privateName(text_painter, "_lastMinWidth");
  var _lastMaxWidth = dart.privateName(text_painter, "_lastMaxWidth");
  var _caretMetrics = dart.privateName(text_painter, "_caretMetrics");
  var _previousCaretPosition = dart.privateName(text_painter, "_previousCaretPosition");
  var _previousCaretPrototype = dart.privateName(text_painter, "_previousCaretPrototype");
  var _text = dart.privateName(text_painter, "_text");
  var _textAlign = dart.privateName(text_painter, "_textAlign");
  var _textDirection = dart.privateName(text_painter, "_textDirection");
  var _textScaleFactor = dart.privateName(text_painter, "_textScaleFactor");
  var _maxLines = dart.privateName(text_painter, "_maxLines");
  var _ellipsis = dart.privateName(text_painter, "_ellipsis");
  var _locale = dart.privateName(text_painter, "_locale");
  var _strutStyle = dart.privateName(text_painter, "_strutStyle");
  var _textWidthBasis = dart.privateName(text_painter, "_textWidthBasis");
  var _textHeightBehavior = dart.privateName(text_painter, "_textHeightBehavior");
  var _createParagraphStyle = dart.privateName(text_painter, "_createParagraphStyle");
  var C97;
  var _applyFloatingPointHack = dart.privateName(text_painter, "_applyFloatingPointHack");
  var C98;
  var C99;
  var _isUtf16Surrogate = dart.privateName(text_painter, "_isUtf16Surrogate");
  var _emptyOffset = dart.privateName(text_painter, "_emptyOffset");
  var _getRectFromUpstream = dart.privateName(text_painter, "_getRectFromUpstream");
  var _getRectFromDownstream = dart.privateName(text_painter, "_getRectFromDownstream");
  var C100;
  var C101;
  var C102;
  var C103;
  var C104;
  var _computeCaretMetrics = dart.privateName(text_painter, "_computeCaretMetrics");
  var C105;
  var C106;
  var C107;
  var C108;
  text_painter.TextPainter = class TextPainter extends core.Object {
    markNeedsLayout() {
      this[_paragraph] = null;
      this[_needsLayout] = true;
      this[_previousCaretPosition] = null;
      this[_previousCaretPrototype] = null;
    }
    get text() {
      return this[_text];
    }
    set text(value) {
      let t18, t18$;
      if (!(value == null || dart.test(value.debugAssertIsValid()))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 191, 12, "value == null || value.debugAssertIsValid()");
      if (dart.equals(this[_text], value)) return;
      if (!dart.equals((t18 = this[_text], t18 == null ? null : t18.style), (t18$ = value, t18$ == null ? null : t18$.style))) this[_layoutTemplate] = null;
      this[_text] = value;
      this.markNeedsLayout();
    }
    get textAlign() {
      return this[_textAlign];
    }
    set textAlign(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 208, 12, "value != null");
      if (dart.equals(this[_textAlign], value)) return;
      this[_textAlign] = value;
      this.markNeedsLayout();
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(value) {
      if (dart.equals(this[_textDirection], value)) return;
      this[_textDirection] = value;
      this.markNeedsLayout();
      this[_layoutTemplate] = null;
    }
    get textScaleFactor() {
      return this[_textScaleFactor];
    }
    set textScaleFactor(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 249, 12, "value != null");
      if (this[_textScaleFactor] == value) return;
      this[_textScaleFactor] = value;
      this.markNeedsLayout();
      this[_layoutTemplate] = null;
    }
    get ellipsis() {
      return this[_ellipsis];
    }
    set ellipsis(value) {
      if (!(value == null || value[$isNotEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 276, 12, "value == null || value.isNotEmpty");
      if (this[_ellipsis] == value) return;
      this[_ellipsis] = value;
      this.markNeedsLayout();
    }
    get locale() {
      return this[_locale];
    }
    set locale(value) {
      if (dart.equals(this[_locale], value)) return;
      this[_locale] = value;
      this.markNeedsLayout();
    }
    get maxLines() {
      return this[_maxLines];
    }
    set maxLines(value) {
      if (!(value == null || dart.notNull(value) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 304, 12, "value == null || value > 0");
      if (this[_maxLines] == value) return;
      this[_maxLines] = value;
      this.markNeedsLayout();
    }
    get strutStyle() {
      return this[_strutStyle];
    }
    set strutStyle(value) {
      if (dart.equals(this[_strutStyle], value)) return;
      this[_strutStyle] = value;
      this.markNeedsLayout();
    }
    get textWidthBasis() {
      return this[_textWidthBasis];
    }
    set textWidthBasis(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 338, 12, "value != null");
      if (dart.equals(this[_textWidthBasis], value)) return;
      this[_textWidthBasis] = value;
      this.markNeedsLayout();
    }
    get textHeightBehavior() {
      return this[_textHeightBehavior];
    }
    set textHeightBehavior(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 349, 12, "value != null");
      if (dart.equals(this[_textHeightBehavior], value)) return;
      this[_textHeightBehavior] = value;
      this.markNeedsLayout();
    }
    get inlinePlaceholderBoxes() {
      return this[_inlinePlaceholderBoxes];
    }
    get inlinePlaceholderScales() {
      return this[_inlinePlaceholderScales];
    }
    setPlaceholderDimensions(value) {
      if (value == null || dart.test(value[$isEmpty]) || dart.test(collections.listEquals(text_painter.PlaceholderDimensions, value, this[_placeholderDimensions]))) {
        return;
      }
      if (!(dart.fn(() => {
        let placeholderCount = 0;
        this.text.visitChildren(dart.fn(span => {
          if (placeholder_span.PlaceholderSpan.is(span)) {
            placeholderCount = placeholderCount + 1;
          }
          return true;
        }, InlineSpanTobool()));
        return placeholderCount;
      }, VoidToint())() == value[$length])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 389, 12, "() {\r\n      int placeholderCount = 0;\r\n      text.visitChildren((InlineSpan span) {\r\n        if (span is PlaceholderSpan) {\r\n          placeholderCount += 1;\r\n        }\r\n        return true;\r\n      });\r\n      return placeholderCount;\r\n    }() == value.length");
      this[_placeholderDimensions] = value;
      this.markNeedsLayout();
    }
    [_createParagraphStyle](defaultTextDirection = null) {
      let t19, t18, t19$, t18$;
      if (!(this.textAlign != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 407, 12, "textAlign != null");
      if (!(this.textDirection != null || defaultTextDirection != null)) dart.assertFailed("TextPainter.textDirection must be set to a non-null value before using the TextPainter.", "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 408, 12, "textDirection != null || defaultTextDirection != null");
      t18$ = (t18 = this[_text].style, t18 == null ? null : t18.getParagraphStyle({textAlign: this.textAlign, textDirection: (t19 = this.textDirection, t19 == null ? defaultTextDirection : t19), textScaleFactor: this.textScaleFactor, maxLines: this[_maxLines], textHeightBehavior: this[_textHeightBehavior], ellipsis: this[_ellipsis], locale: this[_locale], strutStyle: this[_strutStyle]}));
      return t18$ == null ? ui.ParagraphStyle.new({textAlign: this.textAlign, textDirection: (t19$ = this.textDirection, t19$ == null ? defaultTextDirection : t19$), maxLines: this.maxLines, textHeightBehavior: this[_textHeightBehavior], ellipsis: this.ellipsis, locale: this.locale}) : t18$;
    }
    get preferredLineHeight() {
      let t18, t18$;
      if (this[_layoutTemplate] == null) {
        let builder = ui.ParagraphBuilder.new(this[_createParagraphStyle](ui.TextDirection.rtl));
        if ((t18 = this.text, t18 == null ? null : t18.style) != null) builder.pushStyle(this.text.style.getTextStyle({textScaleFactor: this.textScaleFactor}));
        builder.addText(" ");
        this[_layoutTemplate] = (t18$ = builder.build(), t18$.layout(C97 || CT.C97), t18$);
      }
      return this[_layoutTemplate].height;
    }
    [_applyFloatingPointHack](layoutValue) {
      return layoutValue[$ceilToDouble]();
    }
    get minIntrinsicWidth() {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 470, 12, "!_needsLayout");
      return this[_applyFloatingPointHack](this[_paragraph].minIntrinsicWidth);
    }
    get maxIntrinsicWidth() {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 478, 12, "!_needsLayout");
      return this[_applyFloatingPointHack](this[_paragraph].maxIntrinsicWidth);
    }
    get width() {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 486, 12, "!_needsLayout");
      return this[_applyFloatingPointHack](dart.equals(this.textWidthBasis, text_painter.TextWidthBasis.longestLine) ? this[_paragraph].longestLine : this[_paragraph].width);
    }
    get height() {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 496, 12, "!_needsLayout");
      return this[_applyFloatingPointHack](this[_paragraph].height);
    }
    get size() {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 504, 12, "!_needsLayout");
      return new ui.Size.new(this.width, this.height);
    }
    computeDistanceToActualBaseline(baseline) {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 513, 12, "!_needsLayout");
      if (!(baseline != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 514, 12, "baseline != null");
      switch (baseline) {
        case C98 || CT.C98:
        {
          return this[_paragraph].alphabeticBaseline;
        }
        case C99 || CT.C99:
        {
          return this[_paragraph].ideographicBaseline;
        }
      }
      return null;
    }
    get didExceedMaxLines() {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 536, 12, "!_needsLayout");
      return this[_paragraph].didExceedMaxLines;
    }
    layout(opts) {
      let minWidth = opts && 'minWidth' in opts ? opts.minWidth : 0;
      let maxWidth = opts && 'maxWidth' in opts ? opts.maxWidth : 1 / 0;
      if (!(this.text != null)) dart.assertFailed("TextPainter.text must be set to a non-null value before using the TextPainter.", "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 552, 12, "text != null");
      if (!(this.textDirection != null)) dart.assertFailed("TextPainter.textDirection must be set to a non-null value before using the TextPainter.", "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 553, 12, "textDirection != null");
      if (!dart.test(this[_needsLayout]) && minWidth == this[_lastMinWidth] && maxWidth == this[_lastMaxWidth]) return;
      this[_needsLayout] = false;
      if (this[_paragraph] == null) {
        let builder = ui.ParagraphBuilder.new(this[_createParagraphStyle]());
        this[_text].build(builder, {textScaleFactor: this.textScaleFactor, dimensions: this[_placeholderDimensions]});
        this[_inlinePlaceholderScales] = builder.placeholderScales;
        this[_paragraph] = builder.build();
      }
      this[_lastMinWidth] = minWidth;
      this[_lastMaxWidth] = maxWidth;
      this[_paragraph].layout(new ui.ParagraphConstraints.new({width: maxWidth}));
      if (minWidth != maxWidth) {
        let newWidth = this.maxIntrinsicWidth[$clamp](minWidth, maxWidth);
        if (newWidth !== this.width) {
          this[_paragraph].layout(new ui.ParagraphConstraints.new({width: newWidth}));
        }
      }
      this[_inlinePlaceholderBoxes] = this[_paragraph].getBoxesForPlaceholders();
    }
    paint(canvas, offset) {
      if (!dart.test(dart.fn(() => {
        if (dart.test(this[_needsLayout])) {
          dart.throw(assertions.FlutterError.new("TextPainter.paint called when text geometry was not yet calculated.\n" + "Please call layout() before paint() to position the text before painting it."));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 588, 12, "() {\r\n      if (_needsLayout) {\r\n        throw FlutterError(\r\n          'TextPainter.paint called when text geometry was not yet calculated.\\n'\r\n          'Please call layout() before paint() to position the text before painting it.'\r\n        );\r\n      }\r\n      return true;\r\n    }()");
      canvas.drawParagraph(this[_paragraph], offset);
    }
    [_isUtf16Surrogate](value) {
      return (dart.notNull(value) & 63488) === 55296;
    }
    getOffsetAfter(offset) {
      let nextCodeUnit = this[_text].codeUnitAt(offset);
      if (nextCodeUnit == null) return null;
      return dart.test(this[_isUtf16Surrogate](nextCodeUnit)) ? dart.notNull(offset) + 2 : dart.notNull(offset) + 1;
    }
    getOffsetBefore(offset) {
      let prevCodeUnit = this[_text].codeUnitAt(dart.notNull(offset) - 1);
      if (prevCodeUnit == null) return null;
      return dart.test(this[_isUtf16Surrogate](prevCodeUnit)) ? dart.notNull(offset) - 2 : dart.notNull(offset) - 1;
    }
    [_getRectFromUpstream](offset, caretPrototype) {
      let flattenedText = this[_text].toPlainText({includePlaceholders: false});
      let prevCodeUnit = this[_text].codeUnitAt(math.max(core.int, 0, dart.notNull(offset) - 1));
      if (prevCodeUnit == null) return null;
      let needsSearch = dart.test(this[_isUtf16Surrogate](prevCodeUnit)) || this[_text].codeUnitAt(offset) === 8205;
      let graphemeClusterLength = needsSearch ? 2 : 1;
      let boxes = JSArrayOfTextBox().of([]);
      while (dart.test(boxes[$isEmpty]) && flattenedText != null) {
        let prevRuneOffset = dart.notNull(offset) - graphemeClusterLength;
        boxes = this[_paragraph].getBoxesForRange(prevRuneOffset, offset);
        if (dart.test(boxes[$isEmpty])) {
          if (!needsSearch) {
            break;
          }
          if (prevRuneOffset < -flattenedText.length) {
            break;
          }
          graphemeClusterLength = graphemeClusterLength * 2;
          continue;
        }
        let box = boxes[$first];
        if (prevCodeUnit === 10) {
          return new ui.Rect.fromLTRB(this[_emptyOffset].dx, box.bottom, this[_emptyOffset].dx, dart.notNull(box.bottom) + dart.notNull(box.bottom) - dart.notNull(box.top));
        }
        let caretEnd = box.end;
        let dx = dart.equals(box.direction, ui.TextDirection.rtl) ? dart.notNull(caretEnd) - dart.notNull(caretPrototype.width) : caretEnd;
        return new ui.Rect.fromLTRB(math.min(core.double, dx, this[_paragraph].width), box.top, math.min(core.double, dx, this[_paragraph].width), box.bottom);
      }
      return null;
    }
    [_getRectFromDownstream](offset, caretPrototype) {
      let flattenedText = this[_text].toPlainText({includePlaceholders: false});
      let nextCodeUnit = this[_text].codeUnitAt(math.min(core.int, offset, flattenedText == null ? 0 : flattenedText.length - 1));
      if (nextCodeUnit == null) return null;
      let needsSearch = dart.test(this[_isUtf16Surrogate](nextCodeUnit)) || nextCodeUnit === 8205;
      let graphemeClusterLength = needsSearch ? 2 : 1;
      let boxes = JSArrayOfTextBox().of([]);
      while (dart.test(boxes[$isEmpty]) && flattenedText != null) {
        let nextRuneOffset = dart.notNull(offset) + graphemeClusterLength;
        boxes = this[_paragraph].getBoxesForRange(offset, nextRuneOffset);
        if (dart.test(boxes[$isEmpty])) {
          if (!needsSearch) {
            break;
          }
          if (nextRuneOffset >= flattenedText.length << 1 >>> 0) {
            break;
          }
          graphemeClusterLength = graphemeClusterLength * 2;
          continue;
        }
        let box = boxes[$last];
        let caretStart = box.start;
        let dx = dart.equals(box.direction, ui.TextDirection.rtl) ? dart.notNull(caretStart) - dart.notNull(caretPrototype.width) : caretStart;
        return new ui.Rect.fromLTRB(math.min(core.double, dx, this[_paragraph].width), box.top, math.min(core.double, dx, this[_paragraph].width), box.bottom);
      }
      return null;
    }
    get [_emptyOffset]() {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 721, 12, "!_needsLayout");
      if (!(this.textAlign != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 722, 12, "textAlign != null");
      switch (this.textAlign) {
        case C100 || CT.C100:
        {
          return ui.Offset.zero;
        }
        case C101 || CT.C101:
        {
          return new ui.Offset.new(this.width, 0.0);
        }
        case C102 || CT.C102:
        {
          return new ui.Offset.new(dart.notNull(this.width) / 2.0, 0.0);
        }
        case C103 || CT.C103:
        case C96 || CT.C96:
        {
          if (!(this.textDirection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 732, 16, "textDirection != null");
          switch (this.textDirection) {
            case C18 || CT.C18:
            {
              return new ui.Offset.new(this.width, 0.0);
            }
            case C19 || CT.C19:
            {
              return ui.Offset.zero;
            }
          }
          return null;
        }
        case C104 || CT.C104:
        {
          if (!(this.textDirection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 741, 16, "textDirection != null");
          switch (this.textDirection) {
            case C18 || CT.C18:
            {
              return ui.Offset.zero;
            }
            case C19 || CT.C19:
            {
              return new ui.Offset.new(this.width, 0.0);
            }
          }
          return null;
        }
      }
      return null;
    }
    getOffsetForCaret(position, caretPrototype) {
      this[_computeCaretMetrics](position, caretPrototype);
      return this[_caretMetrics].offset;
    }
    getFullHeightForCaret(position, caretPrototype) {
      this[_computeCaretMetrics](position, caretPrototype);
      return this[_caretMetrics].fullHeight;
    }
    [_computeCaretMetrics](position, caretPrototype) {
      let t18, t18$;
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 783, 12, "!_needsLayout");
      if (dart.equals(position, this[_previousCaretPosition]) && dart.equals(caretPrototype, this[_previousCaretPrototype])) return;
      let offset = position.offset;
      if (!(position.affinity != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 787, 12, "position.affinity != null");
      let rect = null;
      switch (position.affinity) {
        case C105 || CT.C105:
        {
          {
            rect = (t18 = this[_getRectFromUpstream](offset, caretPrototype), t18 == null ? this[_getRectFromDownstream](offset, caretPrototype) : t18);
            break;
          }
        }
        case C106 || CT.C106:
        {
          {
            rect = (t18$ = this[_getRectFromDownstream](offset, caretPrototype), t18$ == null ? this[_getRectFromUpstream](offset, caretPrototype) : t18$);
            break;
          }
        }
      }
      this[_caretMetrics] = new text_painter._CaretMetrics.new({offset: rect != null ? new ui.Offset.new(rect.left, rect.top) : this[_emptyOffset], fullHeight: rect != null ? dart.notNull(rect.bottom) - dart.notNull(rect.top) : null});
      this[_previousCaretPosition] = position;
      this[_previousCaretPrototype] = caretPrototype;
    }
    getBoxesForSelection(selection, opts) {
      let boxHeightStyle = opts && 'boxHeightStyle' in opts ? opts.boxHeightStyle : C107 || CT.C107;
      let boxWidthStyle = opts && 'boxWidthStyle' in opts ? opts.boxWidthStyle : C108 || CT.C108;
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 824, 12, "!_needsLayout");
      if (!(boxHeightStyle != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 825, 12, "boxHeightStyle != null");
      if (!(boxWidthStyle != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 826, 12, "boxWidthStyle != null");
      return this[_paragraph].getBoxesForRange(selection.start, selection.end, {boxHeightStyle: boxHeightStyle, boxWidthStyle: boxWidthStyle});
    }
    getPositionForOffset(offset) {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 837, 12, "!_needsLayout");
      return this[_paragraph].getPositionForOffset(offset);
    }
    getWordBoundary(position) {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 849, 12, "!_needsLayout");
      return this[_paragraph].getWordBoundary(position);
    }
    getLineBoundary(position) {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 857, 12, "!_needsLayout");
      return this[_paragraph].getLineBoundary(position);
    }
    computeLineMetrics() {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 877, 12, "!_needsLayout");
      return this[_paragraph].computeLineMetrics();
    }
  };
  (text_painter.TextPainter.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : null;
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : C96 || CT.C96;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1;
    let maxLines = opts && 'maxLines' in opts ? opts.maxLines : null;
    let ellipsis = opts && 'ellipsis' in opts ? opts.ellipsis : null;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let strutStyle = opts && 'strutStyle' in opts ? opts.strutStyle : null;
    let textWidthBasis = opts && 'textWidthBasis' in opts ? opts.textWidthBasis : C93 || CT.C93;
    let textHeightBehavior = opts && 'textHeightBehavior' in opts ? opts.textHeightBehavior : null;
    this[_paragraph] = null;
    this[_needsLayout] = true;
    this[_layoutTemplate] = null;
    this[_inlinePlaceholderBoxes] = null;
    this[_inlinePlaceholderScales] = null;
    this[_placeholderDimensions] = null;
    this[_lastMinWidth] = null;
    this[_lastMaxWidth] = null;
    this[_caretMetrics] = null;
    this[_previousCaretPosition] = null;
    this[_previousCaretPrototype] = null;
    if (!(text == null || dart.test(text.debugAssertIsValid()))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 146, 15, "text == null || text.debugAssertIsValid()");
    if (!(textAlign != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 147, 15, "textAlign != null");
    if (!(textScaleFactor != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 148, 15, "textScaleFactor != null");
    if (!(maxLines == null || dart.notNull(maxLines) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 149, 15, "maxLines == null || maxLines > 0");
    if (!(textWidthBasis != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/text_painter.dart", 150, 15, "textWidthBasis != null");
    this[_text] = text;
    this[_textAlign] = textAlign;
    this[_textDirection] = textDirection;
    this[_textScaleFactor] = textScaleFactor;
    this[_maxLines] = maxLines;
    this[_ellipsis] = ellipsis;
    this[_locale] = locale;
    this[_strutStyle] = strutStyle;
    this[_textWidthBasis] = textWidthBasis;
    this[_textHeightBehavior] = textHeightBehavior;
    ;
  }).prototype = text_painter.TextPainter.prototype;
  dart.addTypeTests(text_painter.TextPainter);
  dart.setMethodSignature(text_painter.TextPainter, () => ({
    __proto__: dart.getMethods(text_painter.TextPainter.__proto__),
    markNeedsLayout: dart.fnType(dart.void, []),
    setPlaceholderDimensions: dart.fnType(dart.void, [core.List$(text_painter.PlaceholderDimensions)]),
    [_createParagraphStyle]: dart.fnType(ui.ParagraphStyle, [], [ui.TextDirection]),
    [_applyFloatingPointHack]: dart.fnType(core.double, [core.double]),
    computeDistanceToActualBaseline: dart.fnType(core.double, [ui.TextBaseline]),
    layout: dart.fnType(dart.void, [], {maxWidth: core.double, minWidth: core.double}, {}),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Offset]),
    [_isUtf16Surrogate]: dart.fnType(core.bool, [core.int]),
    getOffsetAfter: dart.fnType(core.int, [core.int]),
    getOffsetBefore: dart.fnType(core.int, [core.int]),
    [_getRectFromUpstream]: dart.fnType(ui.Rect, [core.int, ui.Rect]),
    [_getRectFromDownstream]: dart.fnType(ui.Rect, [core.int, ui.Rect]),
    getOffsetForCaret: dart.fnType(ui.Offset, [ui.TextPosition, ui.Rect]),
    getFullHeightForCaret: dart.fnType(core.double, [ui.TextPosition, ui.Rect]),
    [_computeCaretMetrics]: dart.fnType(dart.void, [ui.TextPosition, ui.Rect]),
    getBoxesForSelection: dart.fnType(core.List$(ui.TextBox), [text_editing.TextSelection], {boxHeightStyle: ui.BoxHeightStyle, boxWidthStyle: ui.BoxWidthStyle}, {}),
    getPositionForOffset: dart.fnType(ui.TextPosition, [ui.Offset]),
    getWordBoundary: dart.fnType(ui.TextRange, [ui.TextPosition]),
    getLineBoundary: dart.fnType(ui.TextRange, [ui.TextPosition]),
    computeLineMetrics: dart.fnType(core.List$(ui.LineMetrics), [])
  }));
  dart.setGetterSignature(text_painter.TextPainter, () => ({
    __proto__: dart.getGetters(text_painter.TextPainter.__proto__),
    text: inline_span.InlineSpan,
    textAlign: ui.TextAlign,
    textDirection: ui.TextDirection,
    textScaleFactor: core.double,
    ellipsis: core.String,
    locale: ui.Locale,
    maxLines: core.int,
    strutStyle: strut_style.StrutStyle,
    textWidthBasis: text_painter.TextWidthBasis,
    textHeightBehavior: ui.TextHeightBehavior,
    inlinePlaceholderBoxes: core.List$(ui.TextBox),
    inlinePlaceholderScales: core.List$(core.double),
    preferredLineHeight: core.double,
    minIntrinsicWidth: core.double,
    maxIntrinsicWidth: core.double,
    width: core.double,
    height: core.double,
    size: ui.Size,
    didExceedMaxLines: core.bool,
    [_emptyOffset]: ui.Offset
  }));
  dart.setSetterSignature(text_painter.TextPainter, () => ({
    __proto__: dart.getSetters(text_painter.TextPainter.__proto__),
    text: inline_span.InlineSpan,
    textAlign: ui.TextAlign,
    textDirection: ui.TextDirection,
    textScaleFactor: core.double,
    ellipsis: core.String,
    locale: ui.Locale,
    maxLines: core.int,
    strutStyle: strut_style.StrutStyle,
    textWidthBasis: text_painter.TextWidthBasis,
    textHeightBehavior: ui.TextHeightBehavior
  }));
  dart.setLibraryUri(text_painter.TextPainter, "package:flutter/src/painting/text_painter.dart");
  dart.setFieldSignature(text_painter.TextPainter, () => ({
    __proto__: dart.getFields(text_painter.TextPainter.__proto__),
    [_paragraph]: dart.fieldType(ui.Paragraph),
    [_needsLayout]: dart.fieldType(core.bool),
    [_text]: dart.fieldType(inline_span.InlineSpan),
    [_textAlign]: dart.fieldType(ui.TextAlign),
    [_textDirection]: dart.fieldType(ui.TextDirection),
    [_textScaleFactor]: dart.fieldType(core.double),
    [_ellipsis]: dart.fieldType(core.String),
    [_locale]: dart.fieldType(ui.Locale),
    [_maxLines]: dart.fieldType(core.int),
    [_strutStyle]: dart.fieldType(strut_style.StrutStyle),
    [_textWidthBasis]: dart.fieldType(text_painter.TextWidthBasis),
    [_textHeightBehavior]: dart.fieldType(ui.TextHeightBehavior),
    [_layoutTemplate]: dart.fieldType(ui.Paragraph),
    [_inlinePlaceholderBoxes]: dart.fieldType(core.List$(ui.TextBox)),
    [_inlinePlaceholderScales]: dart.fieldType(core.List$(core.double)),
    [_placeholderDimensions]: dart.fieldType(core.List$(text_painter.PlaceholderDimensions)),
    [_lastMinWidth]: dart.fieldType(core.double),
    [_lastMaxWidth]: dart.fieldType(core.double),
    [_caretMetrics]: dart.fieldType(text_painter._CaretMetrics),
    [_previousCaretPosition]: dart.fieldType(ui.TextPosition),
    [_previousCaretPrototype]: dart.fieldType(ui.Rect)
  }));
  dart.defineLazy(text_painter.TextPainter, {
    /*text_painter.TextPainter._zwjUtf16*/get _zwjUtf16() {
      return 8205;
    }
  });
  var C109;
  var alignment$1 = dart.privateName(placeholder_span, "PlaceholderSpan.alignment");
  var baseline$0 = dart.privateName(placeholder_span, "PlaceholderSpan.baseline");
  placeholder_span.PlaceholderSpan = class PlaceholderSpan extends inline_span.InlineSpan {
    get alignment() {
      return this[alignment$1];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get baseline() {
      return this[baseline$0];
    }
    set baseline(value) {
      super.baseline = value;
    }
    computeToPlainText(buffer, opts) {
      let includeSemanticsLabels = opts && 'includeSemanticsLabels' in opts ? opts.includeSemanticsLabels : true;
      let includePlaceholders = opts && 'includePlaceholders' in opts ? opts.includePlaceholders : true;
      if (dart.test(includePlaceholders)) {
        buffer.write("￼");
      }
    }
    computeSemanticsInformation(collector) {
      collector[$add](inline_span.InlineSpanSemanticsInformation.placeholder);
    }
    visitTextSpan(visitor) {
      if (!false) dart.assertFailed("visitTextSpan is deprecated. Use visitChildren to support InlineSpans", "org-dartlang-app:///packages/flutter/src/painting/placeholder_span.dart", 76, 12, "false");
      return false;
    }
    describeSemantics(offset, semanticsOffsets, semanticsElements) {
      semanticsOffsets[$add](offset.value);
      semanticsOffsets[$add](dart.notNull(offset.value) + 1);
      semanticsElements[$add](null);
      offset.increment(1);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (EnumPropertyOfPlaceholderAlignment()).new("alignment", this.alignment, {defaultValue: null}));
      properties.add(new (EnumPropertyOfTextBaseline()).new("baseline", this.baseline, {defaultValue: null}));
    }
  };
  (placeholder_span.PlaceholderSpan.new = function(opts) {
    let alignment = opts && 'alignment' in opts ? opts.alignment : C109 || CT.C109;
    let baseline = opts && 'baseline' in opts ? opts.baseline : null;
    let style = opts && 'style' in opts ? opts.style : null;
    this[alignment$1] = alignment;
    this[baseline$0] = baseline;
    placeholder_span.PlaceholderSpan.__proto__.new.call(this, {style: style});
    ;
  }).prototype = placeholder_span.PlaceholderSpan.prototype;
  dart.addTypeTests(placeholder_span.PlaceholderSpan);
  dart.setMethodSignature(placeholder_span.PlaceholderSpan, () => ({
    __proto__: dart.getMethods(placeholder_span.PlaceholderSpan.__proto__),
    computeToPlainText: dart.fnType(dart.void, [core.StringBuffer], {includePlaceholders: core.bool, includeSemanticsLabels: core.bool}, {}),
    computeSemanticsInformation: dart.fnType(dart.void, [core.List$(inline_span.InlineSpanSemanticsInformation)]),
    visitTextSpan: dart.fnType(core.bool, [dart.fnType(core.bool, [text_span.TextSpan])]),
    describeSemantics: dart.fnType(dart.void, [inline_span.Accumulator, core.List$(core.int), core.List])
  }));
  dart.setLibraryUri(placeholder_span.PlaceholderSpan, "package:flutter/src/painting/placeholder_span.dart");
  dart.setFieldSignature(placeholder_span.PlaceholderSpan, () => ({
    __proto__: dart.getFields(placeholder_span.PlaceholderSpan.__proto__),
    alignment: dart.finalFieldType(ui.PlaceholderAlignment),
    baseline: dart.finalFieldType(ui.TextBaseline)
  }));
  var C110;
  var C111;
  var C112;
  var C113;
  var C114;
  var C115;
  var C116;
  var C117;
  var C118;
  fractional_offset.FractionalOffset = class FractionalOffset extends alignment.Alignment {
    static fromOffsetAndSize(offset, size) {
      if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/fractional_offset.dart", 68, 12, "size != null");
      if (!(offset != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/fractional_offset.dart", 69, 12, "offset != null");
      return new fractional_offset.FractionalOffset.new(dart.notNull(offset.dx) / dart.notNull(size.width), dart.notNull(offset.dy) / dart.notNull(size.height));
    }
    static fromOffsetAndRect(offset, rect) {
      return fractional_offset.FractionalOffset.fromOffsetAndSize(offset['-'](rect.topLeft), rect.size);
    }
    get dx() {
      return (dart.notNull(this.x) + 1.0) / 2.0;
    }
    get dy() {
      return (dart.notNull(this.y) + 1.0) / 2.0;
    }
    ['-'](other) {
      if (!fractional_offset.FractionalOffset.is(other)) return super['-'](other);
      let typedOther = fractional_offset.FractionalOffset.as(other);
      return new fractional_offset.FractionalOffset.new(dart.notNull(this.dx) - dart.notNull(typedOther.dx), dart.notNull(this.dy) - dart.notNull(typedOther.dy));
    }
    ['+'](other) {
      if (!fractional_offset.FractionalOffset.is(other)) return super['+'](other);
      let typedOther = fractional_offset.FractionalOffset.as(other);
      return new fractional_offset.FractionalOffset.new(dart.notNull(this.dx) + dart.notNull(typedOther.dx), dart.notNull(this.dy) + dart.notNull(typedOther.dy));
    }
    _negate() {
      return new fractional_offset.FractionalOffset.new(-dart.notNull(this.dx), -dart.notNull(this.dy));
    }
    ['*'](other) {
      return new fractional_offset.FractionalOffset.new(dart.notNull(this.dx) * dart.notNull(other), dart.notNull(this.dy) * dart.notNull(other));
    }
    ['/'](other) {
      return new fractional_offset.FractionalOffset.new(dart.notNull(this.dx) / dart.notNull(other), dart.notNull(this.dy) / dart.notNull(other));
    }
    ['~/'](other) {
      return new fractional_offset.FractionalOffset.new((dart.notNull(this.dx) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this.dy) / dart.notNull(other))[$truncate]()[$toDouble]());
    }
    ['%'](other) {
      return new fractional_offset.FractionalOffset.new(this.dx[$modulo](other), this.dy[$modulo](other));
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/fractional_offset.dart", 183, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return new fractional_offset.FractionalOffset.new(ui.lerpDouble(0.5, b.dx, t), ui.lerpDouble(0.5, b.dy, t));
      if (b == null) return new fractional_offset.FractionalOffset.new(ui.lerpDouble(a.dx, 0.5, t), ui.lerpDouble(a.dy, 0.5, t));
      return new fractional_offset.FractionalOffset.new(ui.lerpDouble(a.dx, b.dx, t), ui.lerpDouble(a.dy, b.dy, t));
    }
    toString() {
      return "FractionalOffset(" + this.dx[$toStringAsFixed](1) + ", " + this.dy[$toStringAsFixed](1) + ")";
    }
  };
  (fractional_offset.FractionalOffset.new = function(dx, dy) {
    if (!(dx != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/fractional_offset.dart", 59, 14, "dx != null");
    if (!(dy != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/fractional_offset.dart", 60, 14, "dy != null");
    fractional_offset.FractionalOffset.__proto__.new.call(this, dart.notNull(dx) * 2.0 - 1.0, dart.notNull(dy) * 2.0 - 1.0);
    ;
  }).prototype = fractional_offset.FractionalOffset.prototype;
  dart.addTypeTests(fractional_offset.FractionalOffset);
  dart.setMethodSignature(fractional_offset.FractionalOffset, () => ({
    __proto__: dart.getMethods(fractional_offset.FractionalOffset.__proto__),
    _negate: dart.fnType(fractional_offset.FractionalOffset, []),
    '*': dart.fnType(fractional_offset.FractionalOffset, [core.double]),
    '/': dart.fnType(fractional_offset.FractionalOffset, [core.double]),
    '~/': dart.fnType(fractional_offset.FractionalOffset, [core.double]),
    '%': dart.fnType(fractional_offset.FractionalOffset, [core.double])
  }));
  dart.setGetterSignature(fractional_offset.FractionalOffset, () => ({
    __proto__: dart.getGetters(fractional_offset.FractionalOffset.__proto__),
    dx: core.double,
    dy: core.double
  }));
  dart.setLibraryUri(fractional_offset.FractionalOffset, "package:flutter/src/painting/fractional_offset.dart");
  dart.defineExtensionMethods(fractional_offset.FractionalOffset, ['toString']);
  dart.defineLazy(fractional_offset.FractionalOffset, {
    /*fractional_offset.FractionalOffset.topLeft*/get topLeft() {
      return C110 || CT.C110;
    },
    /*fractional_offset.FractionalOffset.topCenter*/get topCenter() {
      return C111 || CT.C111;
    },
    /*fractional_offset.FractionalOffset.topRight*/get topRight() {
      return C112 || CT.C112;
    },
    /*fractional_offset.FractionalOffset.centerLeft*/get centerLeft() {
      return C113 || CT.C113;
    },
    /*fractional_offset.FractionalOffset.center*/get center() {
      return C114 || CT.C114;
    },
    /*fractional_offset.FractionalOffset.centerRight*/get centerRight() {
      return C115 || CT.C115;
    },
    /*fractional_offset.FractionalOffset.bottomLeft*/get bottomLeft() {
      return C116 || CT.C116;
    },
    /*fractional_offset.FractionalOffset.bottomCenter*/get bottomCenter() {
      return C117 || CT.C117;
    },
    /*fractional_offset.FractionalOffset.bottomRight*/get bottomRight() {
      return C118 || CT.C118;
    }
  });
  var _name$6 = dart.privateName(flutter_logo, "_name");
  var C119;
  var C120;
  var C121;
  var C122;
  flutter_logo.FlutterLogoStyle = class FlutterLogoStyle extends core.Object {
    toString() {
      return this[_name$6];
    }
  };
  (flutter_logo.FlutterLogoStyle.new = function(index, _name) {
    this.index = index;
    this[_name$6] = _name;
    ;
  }).prototype = flutter_logo.FlutterLogoStyle.prototype;
  dart.addTypeTests(flutter_logo.FlutterLogoStyle);
  dart.setLibraryUri(flutter_logo.FlutterLogoStyle, "package:flutter/src/painting/flutter_logo.dart");
  dart.setFieldSignature(flutter_logo.FlutterLogoStyle, () => ({
    __proto__: dart.getFields(flutter_logo.FlutterLogoStyle.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$6]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(flutter_logo.FlutterLogoStyle, ['toString']);
  flutter_logo.FlutterLogoStyle.markOnly = C119 || CT.C119;
  flutter_logo.FlutterLogoStyle.horizontal = C120 || CT.C120;
  flutter_logo.FlutterLogoStyle.stacked = C121 || CT.C121;
  flutter_logo.FlutterLogoStyle.values = C122 || CT.C122;
  var C123;
  var C124;
  var C125;
  var _position = dart.privateName(flutter_logo, "_position");
  var _opacity = dart.privateName(flutter_logo, "_opacity");
  var _inTransition = dart.privateName(flutter_logo, "_inTransition");
  var lightColor$ = dart.privateName(flutter_logo, "FlutterLogoDecoration.lightColor");
  var darkColor$ = dart.privateName(flutter_logo, "FlutterLogoDecoration.darkColor");
  var textColor$ = dart.privateName(flutter_logo, "FlutterLogoDecoration.textColor");
  var style$1 = dart.privateName(flutter_logo, "FlutterLogoDecoration.style");
  var margin$ = dart.privateName(flutter_logo, "FlutterLogoDecoration.margin");
  var _position$ = dart.privateName(flutter_logo, "FlutterLogoDecoration._position");
  var _opacity$ = dart.privateName(flutter_logo, "FlutterLogoDecoration._opacity");
  flutter_logo.FlutterLogoDecoration = class FlutterLogoDecoration extends decoration.Decoration {
    get lightColor() {
      return this[lightColor$];
    }
    set lightColor(value) {
      super.lightColor = value;
    }
    get darkColor() {
      return this[darkColor$];
    }
    set darkColor(value) {
      super.darkColor = value;
    }
    get textColor() {
      return this[textColor$];
    }
    set textColor(value) {
      super.textColor = value;
    }
    get style() {
      return this[style$1];
    }
    set style(value) {
      super.style = value;
    }
    get margin() {
      return this[margin$];
    }
    set margin(value) {
      super.margin = value;
    }
    get [_position]() {
      return this[_position$];
    }
    set [_position](value) {
      super[_position] = value;
    }
    get [_opacity]() {
      return this[_opacity$];
    }
    set [_opacity](value) {
      super[_opacity] = value;
    }
    get [_inTransition]() {
      return this[_opacity] !== 1.0 || this[_position] !== -1.0 && this[_position] !== 0.0 && this[_position] !== 1.0;
    }
    debugAssertIsValid() {
      if (!(this.lightColor != null && this.darkColor != null && this.textColor != null && this.style != null && this.margin != null && this[_position] != null && this[_position][$isFinite] && this[_opacity] != null && dart.notNull(this[_opacity]) >= 0.0 && dart.notNull(this[_opacity]) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/flutter_logo.dart", 106, 12, "lightColor != null\r\n        && darkColor != null\r\n        && textColor != null\r\n        && style != null\r\n        && margin != null\r\n        && _position != null\r\n        && _position.isFinite\r\n        && _opacity != null\r\n        && _opacity >= 0.0\r\n        && _opacity <= 1.0");
      return true;
    }
    get isComplex() {
      return !dart.test(this[_inTransition]);
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/flutter_logo.dart", 136, 12, "t != null");
      if (!(a == null || dart.test(a.debugAssertIsValid()))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/flutter_logo.dart", 137, 12, "a == null || a.debugAssertIsValid()");
      if (!(b == null || dart.test(b.debugAssertIsValid()))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/flutter_logo.dart", 138, 12, "b == null || b.debugAssertIsValid()");
      if (a == null && b == null) return null;
      if (a == null) {
        return new flutter_logo.FlutterLogoDecoration.__(b.lightColor, b.darkColor, b.textColor, b.style, b.margin['*'](t), b[_position], dart.notNull(b[_opacity]) * t[$clamp](0.0, 1.0));
      }
      if (b == null) {
        return new flutter_logo.FlutterLogoDecoration.__(a.lightColor, a.darkColor, a.textColor, a.style, a.margin['*'](t), a[_position], dart.notNull(a[_opacity]) * (1.0 - dart.notNull(t))[$clamp](0.0, 1.0));
      }
      if (t === 0.0) return a;
      if (t === 1.0) return b;
      return new flutter_logo.FlutterLogoDecoration.__(ui.Color.lerp(a.lightColor, b.lightColor, t), ui.Color.lerp(a.darkColor, b.darkColor, t), ui.Color.lerp(a.textColor, b.textColor, t), dart.notNull(t) < 0.5 ? a.style : b.style, edge_insets.EdgeInsets.lerp(a.margin, b.margin, t), dart.notNull(a[_position]) + (dart.notNull(b[_position]) - dart.notNull(a[_position])) * dart.notNull(t), (dart.notNull(a[_opacity]) + (dart.notNull(b[_opacity]) - dart.notNull(a[_opacity])) * dart.notNull(t))[$clamp](0.0, 1.0));
    }
    lerpFrom(a, t) {
      if (!dart.test(this.debugAssertIsValid())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/flutter_logo.dart", 180, 12, "debugAssertIsValid()");
      if (a == null || flutter_logo.FlutterLogoDecoration.is(a)) {
        if (!(a == null || dart.test(a.debugAssertIsValid()))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/flutter_logo.dart", 182, 14, "a == null || a.debugAssertIsValid()");
        return flutter_logo.FlutterLogoDecoration.lerp(flutter_logo.FlutterLogoDecoration.as(a), this, t);
      }
      return flutter_logo.FlutterLogoDecoration.as(super.lerpFrom(a, t));
    }
    lerpTo(b, t) {
      if (!dart.test(this.debugAssertIsValid())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/flutter_logo.dart", 190, 12, "debugAssertIsValid()");
      if (b == null || flutter_logo.FlutterLogoDecoration.is(b)) {
        if (!(b == null || dart.test(b.debugAssertIsValid()))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/flutter_logo.dart", 192, 14, "b == null || b.debugAssertIsValid()");
        return flutter_logo.FlutterLogoDecoration.lerp(this, flutter_logo.FlutterLogoDecoration.as(b), t);
      }
      return flutter_logo.FlutterLogoDecoration.as(super.lerpTo(b, t));
    }
    hitTest(size, position, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return true;
    }
    createBoxPainter(onChanged = null) {
      if (!dart.test(this.debugAssertIsValid())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/flutter_logo.dart", 204, 12, "debugAssertIsValid()");
      return new flutter_logo._FlutterLogoPainter.new(this);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.test(this.debugAssertIsValid())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/flutter_logo.dart", 210, 12, "debugAssertIsValid()");
      if (this === other) return true;
      return flutter_logo.FlutterLogoDecoration.is(other) && dart.equals(other.lightColor, this.lightColor) && dart.equals(other.darkColor, this.darkColor) && dart.equals(other.textColor, this.textColor) && other[_position] == this[_position] && other[_opacity] == this[_opacity];
    }
    get hashCode() {
      if (!dart.test(this.debugAssertIsValid())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/flutter_logo.dart", 223, 12, "debugAssertIsValid()");
      return ui.hashValues(this.lightColor, this.darkColor, this.textColor, this[_position], this[_opacity]);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(diagnostics.DiagnosticsNode.message(dart.str(this.lightColor) + "/" + dart.str(this.darkColor) + " on " + dart.str(this.textColor)));
      properties.add(new (EnumPropertyOfFlutterLogoStyle()).new("style", this.style));
      if (dart.test(this[_inTransition])) properties.add(diagnostics.DiagnosticsNode.message("transition " + dart.str(debug.debugFormatDouble(this[_position])) + ":" + dart.str(debug.debugFormatDouble(this[_opacity]))));
    }
  };
  (flutter_logo.FlutterLogoDecoration.new = function(opts) {
    let lightColor = opts && 'lightColor' in opts ? opts.lightColor : C123 || CT.C123;
    let darkColor = opts && 'darkColor' in opts ? opts.darkColor : C124 || CT.C124;
    let textColor = opts && 'textColor' in opts ? opts.textColor : C125 || CT.C125;
    let style = opts && 'style' in opts ? opts.style : C119 || CT.C119;
    let margin = opts && 'margin' in opts ? opts.margin : C17 || CT.C17;
    this[lightColor$] = lightColor;
    this[darkColor$] = darkColor;
    this[textColor$] = textColor;
    this[style$1] = style;
    this[margin$] = margin;
    if (!(lightColor != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/flutter_logo.dart", 51, 15, "lightColor != null");
    if (!(darkColor != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/flutter_logo.dart", 52, 15, "darkColor != null");
    if (!(textColor != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/flutter_logo.dart", 53, 15, "textColor != null");
    if (!(style != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/flutter_logo.dart", 54, 15, "style != null");
    if (!(margin != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/flutter_logo.dart", 55, 15, "margin != null");
    this[_position$] = style == flutter_logo.FlutterLogoStyle.markOnly ? 0.0 : style == flutter_logo.FlutterLogoStyle.horizontal ? 1.0 : -1.0;
    this[_opacity$] = 1.0;
    flutter_logo.FlutterLogoDecoration.__proto__.new.call(this);
    ;
  }).prototype = flutter_logo.FlutterLogoDecoration.prototype;
  (flutter_logo.FlutterLogoDecoration.__ = function(lightColor, darkColor, textColor, style, margin, _position, _opacity) {
    this[lightColor$] = lightColor;
    this[darkColor$] = darkColor;
    this[textColor$] = textColor;
    this[style$1] = style;
    this[margin$] = margin;
    this[_position$] = _position;
    this[_opacity$] = _opacity;
    flutter_logo.FlutterLogoDecoration.__proto__.new.call(this);
    ;
  }).prototype = flutter_logo.FlutterLogoDecoration.prototype;
  dart.addTypeTests(flutter_logo.FlutterLogoDecoration);
  dart.setMethodSignature(flutter_logo.FlutterLogoDecoration, () => ({
    __proto__: dart.getMethods(flutter_logo.FlutterLogoDecoration.__proto__),
    lerpFrom: dart.fnType(flutter_logo.FlutterLogoDecoration, [decoration.Decoration, core.double]),
    lerpTo: dart.fnType(flutter_logo.FlutterLogoDecoration, [decoration.Decoration, core.double]),
    createBoxPainter: dart.fnType(decoration.BoxPainter, [], [dart.fnType(dart.void, [])]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(flutter_logo.FlutterLogoDecoration, () => ({
    __proto__: dart.getGetters(flutter_logo.FlutterLogoDecoration.__proto__),
    [_inTransition]: core.bool
  }));
  dart.setLibraryUri(flutter_logo.FlutterLogoDecoration, "package:flutter/src/painting/flutter_logo.dart");
  dart.setFieldSignature(flutter_logo.FlutterLogoDecoration, () => ({
    __proto__: dart.getFields(flutter_logo.FlutterLogoDecoration.__proto__),
    lightColor: dart.finalFieldType(ui.Color),
    darkColor: dart.finalFieldType(ui.Color),
    textColor: dart.finalFieldType(ui.Color),
    style: dart.finalFieldType(flutter_logo.FlutterLogoStyle),
    margin: dart.finalFieldType(edge_insets.EdgeInsets),
    [_position]: dart.finalFieldType(core.double),
    [_opacity]: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(flutter_logo.FlutterLogoDecoration, ['_equals']);
  dart.defineExtensionAccessors(flutter_logo.FlutterLogoDecoration, ['hashCode']);
  var _textPainter = dart.privateName(flutter_logo, "_textPainter");
  var _textBoundingRect = dart.privateName(flutter_logo, "_textBoundingRect");
  var _config$ = dart.privateName(flutter_logo, "_config");
  var _prepareText = dart.privateName(flutter_logo, "_prepareText");
  var TextRange_end = dart.privateName(ui, "TextRange.end");
  var TextRange_start = dart.privateName(ui, "TextRange.start");
  var TextSelection_isDirectional = dart.privateName(text_editing, "TextSelection.isDirectional");
  var TextSelection_affinity = dart.privateName(text_editing, "TextSelection.affinity");
  var TextSelection_extentOffset = dart.privateName(text_editing, "TextSelection.extentOffset");
  var TextSelection_baseOffset = dart.privateName(text_editing, "TextSelection.baseOffset");
  var C126;
  var C127;
  var C128;
  var C129;
  var C130;
  var C131;
  var C132;
  var C133;
  var C134;
  var C135;
  var C136;
  var C137;
  var C138;
  var C139;
  var C140;
  var C141;
  var C142;
  var C143;
  var C144;
  var C145;
  var C146;
  var C147;
  var C148;
  var C149;
  var C150;
  var _paintLogo = dart.privateName(flutter_logo, "_paintLogo");
  var C151;
  var C152;
  var C153;
  var C154;
  var C155;
  flutter_logo._FlutterLogoPainter = class _FlutterLogoPainter extends decoration.BoxPainter {
    [_prepareText]() {
      this[_textPainter] = new text_painter.TextPainter.new({text: new text_span.TextSpan.new({text: "Flutter", style: new text_style.TextStyle.new({color: this[_config$].textColor, fontFamily: "Roboto", fontSize: 100.0 * 350.0 / 247.0, fontWeight: ui.FontWeight.w300, textBaseline: ui.TextBaseline.alphabetic})}), textDirection: ui.TextDirection.ltr});
      this[_textPainter].layout();
      let textSize = this[_textPainter].getBoxesForSelection(C126 || CT.C126)[$single];
      this[_textBoundingRect] = new ui.Rect.fromLTRB(textSize.left, textSize.top, textSize.right, textSize.bottom);
    }
    [_paintLogo](canvas, rect) {
      let t18, t18$, t18$0, t18$1, t18$2, t18$3, t18$4, t18$5, t18$6, t18$7;
      canvas.save();
      canvas.translate(rect.left, rect.top);
      canvas.scale(dart.notNull(rect.width) / 202.0, dart.notNull(rect.height) / 202.0);
      canvas.translate((202.0 - 166.0) / 2.0, 0.0);
      let lightPaint = (t18 = ui.Paint.new(), t18.color = this[_config$].lightColor.withOpacity(0.8), t18);
      let mediumPaint = (t18$ = ui.Paint.new(), t18$.color = this[_config$].lightColor, t18$);
      let darkPaint = (t18$0 = ui.Paint.new(), t18$0.color = this[_config$].darkColor, t18$0);
      let triangleGradient = ui.Gradient.linear(C127 || CT.C127, C128 || CT.C128, JSArrayOfColor().of([C129 || CT.C129, C130 || CT.C130, C131 || CT.C131, C132 || CT.C132, C133 || CT.C133, C134 || CT.C134, C135 || CT.C135, C136 || CT.C136, C137 || CT.C137]), JSArrayOfdouble().of([0.269, 0.4093, 0.4972, 0.5708, 0.6364, 0.6968, 0.7533, 0.8058, 0.8219]));
      let trianglePaint = (t18$1 = ui.Paint.new(), t18$1.shader = triangleGradient, t18$1.blendMode = ui.BlendMode.multiply, t18$1);
      let rectangleGradient = ui.Gradient.linear(C138 || CT.C138, C139 || CT.C139, JSArrayOfColor().of([C140 || CT.C140, C141 || CT.C141, C142 || CT.C142, C143 || CT.C143, C144 || CT.C144, C145 || CT.C145, C146 || CT.C146, C147 || CT.C147, C148 || CT.C148]), JSArrayOfdouble().of([0.4588, 0.5509, 0.6087, 0.657, 0.7001, 0.7397, 0.7768, 0.8113, 0.8219]));
      let rectanglePaint = (t18$2 = ui.Paint.new(), t18$2.shader = rectangleGradient, t18$2.blendMode = ui.BlendMode.multiply, t18$2);
      let topBeam = (t18$3 = ui.Path.new(), t18$3.moveTo(37.7, 128.9), t18$3.lineTo(9.8, 101.0), t18$3.lineTo(100.4, 10.4), t18$3.lineTo(156.2, 10.4), t18$3);
      canvas.drawPath(topBeam, lightPaint);
      let middleBeam = (t18$4 = ui.Path.new(), t18$4.moveTo(156.2, 94.0), t18$4.lineTo(100.4, 94.0), t18$4.lineTo(79.5, 114.9), t18$4.lineTo(107.4, 142.8), t18$4);
      canvas.drawPath(middleBeam, lightPaint);
      let bottomBeam = (t18$5 = ui.Path.new(), t18$5.moveTo(79.5, 170.7), t18$5.lineTo(100.4, 191.6), t18$5.lineTo(156.2, 191.6), t18$5.lineTo(156.2, 191.6), t18$5.lineTo(107.4, 142.8), t18$5);
      canvas.drawPath(bottomBeam, darkPaint);
      canvas.save();
      canvas.transform(_native_typed_data.NativeFloat64List.fromList(C149 || CT.C149));
      canvas.drawRect(C150 || CT.C150, mediumPaint);
      canvas.restore();
      let triangle = (t18$6 = ui.Path.new(), t18$6.moveTo(79.5, 170.7), t18$6.lineTo(120.9, 156.4), t18$6.lineTo(107.4, 142.8), t18$6);
      canvas.drawPath(triangle, trianglePaint);
      let rectangle = (t18$7 = ui.Path.new(), t18$7.moveTo(107.4, 142.8), t18$7.lineTo(79.5, 170.7), t18$7.lineTo(86.1, 177.3), t18$7.lineTo(114.0, 149.4), t18$7);
      canvas.drawPath(rectangle, rectanglePaint);
      canvas.restore();
    }
    paint(canvas, offset, configuration) {
      let t18, t18$, t18$0;
      offset = offset['+'](this[_config$].margin.topLeft);
      let canvasSize = this[_config$].margin.deflateSize(configuration.size);
      if (dart.test(canvasSize.isEmpty)) return;
      let logoSize = null;
      if (dart.notNull(this[_config$][_position]) > 0.0) {
        logoSize = C151 || CT.C151;
      } else if (dart.notNull(this[_config$][_position]) < 0.0) {
        logoSize = C152 || CT.C152;
      } else {
        logoSize = C153 || CT.C153;
      }
      let fittedSize = box_fit.applyBoxFit(box_fit.BoxFit.contain, logoSize, canvasSize);
      if (!dart.equals(fittedSize.source, logoSize)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/flutter_logo.dart", 412, 12, "fittedSize.source == logoSize");
      let rect = alignment.Alignment.center.inscribe(fittedSize.destination, offset['&'](canvasSize));
      let centerSquareHeight = canvasSize.shortestSide;
      let centerSquare = new ui.Rect.fromLTWH(dart.notNull(offset.dx) + (dart.notNull(canvasSize.width) - dart.notNull(centerSquareHeight)) / 2.0, dart.notNull(offset.dy) + (dart.notNull(canvasSize.height) - dart.notNull(centerSquareHeight)) / 2.0, centerSquareHeight, centerSquareHeight);
      let logoTargetSquare = null;
      if (dart.notNull(this[_config$][_position]) > 0.0) {
        logoTargetSquare = new ui.Rect.fromLTWH(rect.left, rect.top, rect.height, rect.height);
      } else if (dart.notNull(this[_config$][_position]) < 0.0) {
        let logoHeight = dart.notNull(rect.height) * 191.0 / 306.0;
        logoTargetSquare = new ui.Rect.fromLTWH(dart.notNull(rect.left) + (dart.notNull(rect.width) - logoHeight) / 2.0, rect.top, logoHeight, logoHeight);
      } else {
        logoTargetSquare = centerSquare;
      }
      let logoSquare = ui.Rect.lerp(centerSquare, logoTargetSquare, this[_config$][_position][$abs]());
      if (dart.notNull(this[_config$][_opacity]) < 1.0) {
        canvas.saveLayer(offset['&'](canvasSize), (t18 = ui.Paint.new(), t18.colorFilter = new _engine.EngineColorFilter.mode((C154 || CT.C154).withOpacity(this[_config$][_opacity]), ui.BlendMode.modulate), t18));
      }
      if (this[_config$][_position] !== 0.0) {
        if (dart.notNull(this[_config$][_position]) > 0.0) {
          let fontSize = 2.0 / 3.0 * dart.notNull(logoSquare.height) * (1 - 10.4 * 2.0 / 202.0);
          let scale = fontSize / 100.0;
          let finalLeftTextPosition = 256.4 / 820.0 * dart.notNull(rect.width) - 32.0 / 350.0 * fontSize;
          let initialLeftTextPosition = dart.notNull(rect.width) / 2.0 - dart.notNull(this[_textBoundingRect].width) * scale;
          let textOffset = new ui.Offset.new(dart.notNull(rect.left) + dart.notNull(ui.lerpDouble(initialLeftTextPosition, finalLeftTextPosition, this[_config$][_position])), dart.notNull(rect.top) + (dart.notNull(rect.height) - dart.notNull(this[_textBoundingRect].height) * scale) / 2.0);
          canvas.save();
          if (dart.notNull(this[_config$][_position]) < 1.0) {
            let center = logoSquare.center;
            let path = (t18$ = ui.Path.new(), t18$.moveTo(center.dx, center.dy), t18$.lineTo(dart.notNull(center.dx) + dart.notNull(rect.width), dart.notNull(center.dy) - dart.notNull(rect.width)), t18$.lineTo(dart.notNull(center.dx) + dart.notNull(rect.width), dart.notNull(center.dy) + dart.notNull(rect.width)), t18$.close(), t18$);
            canvas.clipPath(path);
          }
          canvas.translate(textOffset.dx, textOffset.dy);
          canvas.scale(scale, scale);
          this[_textPainter].paint(canvas, ui.Offset.zero);
          canvas.restore();
        } else if (dart.notNull(this[_config$][_position]) < 0.0) {
          let fontSize = 0.35 * dart.notNull(logoTargetSquare.height) * (1 - 10.4 * 2.0 / 202.0);
          let scale = fontSize / 100.0;
          if (dart.notNull(this[_config$][_position]) > -1.0) {
            canvas.saveLayer(this[_textBoundingRect], ui.Paint.new());
          } else {
            canvas.save();
          }
          canvas.translate(dart.notNull(logoTargetSquare.center.dx) - dart.notNull(this[_textBoundingRect].width) * scale / 2.0, logoTargetSquare.bottom);
          canvas.scale(scale, scale);
          this[_textPainter].paint(canvas, ui.Offset.zero);
          if (dart.notNull(this[_config$][_position]) > -1.0) {
            canvas.drawRect(this[_textBoundingRect].inflate(dart.notNull(this[_textBoundingRect].width) * 0.5), (t18$0 = ui.Paint.new(), t18$0.blendMode = ui.BlendMode.modulate, t18$0.shader = ui.Gradient.linear(new ui.Offset.new(dart.notNull(this[_textBoundingRect].width) * -0.5, 0.0), new ui.Offset.new(dart.notNull(this[_textBoundingRect].width) * 1.5, 0.0), JSArrayOfColor().of([C154 || CT.C154, C154 || CT.C154, C155 || CT.C155, C155 || CT.C155]), JSArrayOfdouble().of([0.0, math.max(core.double, 0.0, this[_config$][_position][$abs]() - 0.1), math.min(core.double, this[_config$][_position][$abs]() + 0.1, 1.0), 1.0])), t18$0));
          }
          canvas.restore();
        }
      }
      this[_paintLogo](canvas, logoSquare);
      if (dart.notNull(this[_config$][_opacity]) < 1.0) canvas.restore();
    }
  };
  (flutter_logo._FlutterLogoPainter.new = function(_config) {
    this[_textPainter] = null;
    this[_textBoundingRect] = null;
    this[_config$] = _config;
    if (!(_config != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/flutter_logo.dart", 247, 16, "_config != null");
    if (!dart.test(_config.debugAssertIsValid())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/flutter_logo.dart", 248, 16, "_config.debugAssertIsValid()");
    flutter_logo._FlutterLogoPainter.__proto__.new.call(this, null);
    this[_prepareText]();
  }).prototype = flutter_logo._FlutterLogoPainter.prototype;
  dart.addTypeTests(flutter_logo._FlutterLogoPainter);
  dart.setMethodSignature(flutter_logo._FlutterLogoPainter, () => ({
    __proto__: dart.getMethods(flutter_logo._FlutterLogoPainter.__proto__),
    [_prepareText]: dart.fnType(dart.void, []),
    [_paintLogo]: dart.fnType(dart.void, [ui.Canvas, ui.Rect]),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Offset, image_provider.ImageConfiguration])
  }));
  dart.setLibraryUri(flutter_logo._FlutterLogoPainter, "package:flutter/src/painting/flutter_logo.dart");
  dart.setFieldSignature(flutter_logo._FlutterLogoPainter, () => ({
    __proto__: dart.getFields(flutter_logo._FlutterLogoPainter.__proto__),
    [_config$]: dart.finalFieldType(flutter_logo.FlutterLogoDecoration),
    [_textPainter]: dart.fieldType(text_painter.TextPainter),
    [_textBoundingRect]: dart.fieldType(ui.Rect)
  }));
  var side$2 = dart.privateName(stadium_border, "StadiumBorder.side");
  stadium_border.StadiumBorder = class StadiumBorder extends borders$.ShapeBorder {
    get side() {
      return this[side$2];
    }
    set side(value) {
      super.side = value;
    }
    get dimensions() {
      return new edge_insets.EdgeInsets.all(this.side.width);
    }
    scale(t) {
      return new stadium_border.StadiumBorder.new({side: this.side.scale(t)});
    }
    lerpFrom(a, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/stadium_border.dart", 46, 12, "t != null");
      if (stadium_border.StadiumBorder.is(a)) return new stadium_border.StadiumBorder.new({side: borders$.BorderSide.lerp(a.side, this.side, t)});
      if (circle_border.CircleBorder.is(a)) {
        return new stadium_border._StadiumToCircleBorder.new({side: borders$.BorderSide.lerp(a.side, this.side, t), circleness: 1.0 - dart.notNull(t)});
      }
      if (rounded_rectangle_border.RoundedRectangleBorder.is(a)) {
        return new stadium_border._StadiumToRoundedRectangleBorder.new({side: borders$.BorderSide.lerp(a.side, this.side, t), borderRadius: border_radius.BorderRadius.as(a.borderRadius), rectness: 1.0 - dart.notNull(t)});
      }
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/stadium_border.dart", 67, 12, "t != null");
      if (stadium_border.StadiumBorder.is(b)) return new stadium_border.StadiumBorder.new({side: borders$.BorderSide.lerp(this.side, b.side, t)});
      if (circle_border.CircleBorder.is(b)) {
        return new stadium_border._StadiumToCircleBorder.new({side: borders$.BorderSide.lerp(this.side, b.side, t), circleness: t});
      }
      if (rounded_rectangle_border.RoundedRectangleBorder.is(b)) {
        return new stadium_border._StadiumToRoundedRectangleBorder.new({side: borders$.BorderSide.lerp(this.side, b.side, t), borderRadius: border_radius.BorderRadius.as(b.borderRadius), rectness: t});
      }
      return super.lerpTo(b, t);
    }
    getInnerPath(rect, opts) {
      let t18;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let radius = new ui.Radius.circular(dart.notNull(rect.shortestSide) / 2.0);
      t18 = ui.Path.new();
      t18.addRRect(new ui.RRect.fromRectAndRadius(rect, radius).deflate(this.side.width));
      return t18;
    }
    getOuterPath(rect, opts) {
      let t18;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let radius = new ui.Radius.circular(dart.notNull(rect.shortestSide) / 2.0);
      t18 = ui.Path.new();
      t18.addRRect(new ui.RRect.fromRectAndRadius(rect, radius));
      return t18;
    }
    paint(canvas, rect, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      switch (this.side.style) {
        case C6 || CT.C6:
        {
          break;
        }
        case C13 || CT.C13:
        {
          let radius = new ui.Radius.circular(dart.notNull(rect.shortestSide) / 2.0);
          canvas.drawRRect(new ui.RRect.fromRectAndRadius(rect, radius).deflate(dart.notNull(this.side.width) / 2.0), this.side.toPaint());
        }
      }
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return stadium_border.StadiumBorder.is(other) && dart.equals(other.side, this.side);
    }
    get hashCode() {
      return dart.hashCode(this.side);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "StadiumBorder")) + "(" + dart.str(this.side) + ")";
    }
  };
  (stadium_border.StadiumBorder.new = function(opts) {
    let side = opts && 'side' in opts ? opts.side : C5 || CT.C5;
    this[side$2] = side;
    if (!(side != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/stadium_border.dart", 31, 63, "side != null");
    stadium_border.StadiumBorder.__proto__.new.call(this);
    ;
  }).prototype = stadium_border.StadiumBorder.prototype;
  dart.addTypeTests(stadium_border.StadiumBorder);
  dart.setMethodSignature(stadium_border.StadiumBorder, () => ({
    __proto__: dart.getMethods(stadium_border.StadiumBorder.__proto__),
    scale: dart.fnType(borders$.ShapeBorder, [core.double]),
    getInnerPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: ui.TextDirection}, {}),
    getOuterPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: ui.TextDirection}, {}),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {textDirection: ui.TextDirection}, {}),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(stadium_border.StadiumBorder, () => ({
    __proto__: dart.getGetters(stadium_border.StadiumBorder.__proto__),
    dimensions: edge_insets.EdgeInsetsGeometry
  }));
  dart.setLibraryUri(stadium_border.StadiumBorder, "package:flutter/src/painting/stadium_border.dart");
  dart.setFieldSignature(stadium_border.StadiumBorder, () => ({
    __proto__: dart.getFields(stadium_border.StadiumBorder.__proto__),
    side: dart.finalFieldType(borders$.BorderSide)
  }));
  dart.defineExtensionMethods(stadium_border.StadiumBorder, ['_equals', 'toString']);
  dart.defineExtensionAccessors(stadium_border.StadiumBorder, ['hashCode']);
  var _adjustRect$ = dart.privateName(stadium_border, "_adjustRect");
  var _adjustBorderRadius$ = dart.privateName(stadium_border, "_adjustBorderRadius");
  var side$3 = dart.privateName(stadium_border, "_StadiumToCircleBorder.side");
  var circleness$0 = dart.privateName(stadium_border, "_StadiumToCircleBorder.circleness");
  stadium_border._StadiumToCircleBorder = class _StadiumToCircleBorder extends borders$.ShapeBorder {
    get side() {
      return this[side$3];
    }
    set side(value) {
      super.side = value;
    }
    get circleness() {
      return this[circleness$0];
    }
    set circleness(value) {
      super.circleness = value;
    }
    get dimensions() {
      return new edge_insets.EdgeInsets.all(this.side.width);
    }
    scale(t) {
      return new stadium_border._StadiumToCircleBorder.new({side: this.side.scale(t), circleness: t});
    }
    lerpFrom(a, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/stadium_border.dart", 158, 12, "t != null");
      if (stadium_border.StadiumBorder.is(a)) {
        return new stadium_border._StadiumToCircleBorder.new({side: borders$.BorderSide.lerp(a.side, this.side, t), circleness: dart.notNull(this.circleness) * dart.notNull(t)});
      }
      if (circle_border.CircleBorder.is(a)) {
        return new stadium_border._StadiumToCircleBorder.new({side: borders$.BorderSide.lerp(a.side, this.side, t), circleness: dart.notNull(this.circleness) + (1.0 - dart.notNull(this.circleness)) * (1.0 - dart.notNull(t))});
      }
      if (stadium_border._StadiumToCircleBorder.is(a)) {
        return new stadium_border._StadiumToCircleBorder.new({side: borders$.BorderSide.lerp(a.side, this.side, t), circleness: ui.lerpDouble(a.circleness, this.circleness, t)});
      }
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/stadium_border.dart", 182, 12, "t != null");
      if (stadium_border.StadiumBorder.is(b)) {
        return new stadium_border._StadiumToCircleBorder.new({side: borders$.BorderSide.lerp(this.side, b.side, t), circleness: dart.notNull(this.circleness) * (1.0 - dart.notNull(t))});
      }
      if (circle_border.CircleBorder.is(b)) {
        return new stadium_border._StadiumToCircleBorder.new({side: borders$.BorderSide.lerp(this.side, b.side, t), circleness: dart.notNull(this.circleness) + (1.0 - dart.notNull(this.circleness)) * dart.notNull(t)});
      }
      if (stadium_border._StadiumToCircleBorder.is(b)) {
        return new stadium_border._StadiumToCircleBorder.new({side: borders$.BorderSide.lerp(this.side, b.side, t), circleness: ui.lerpDouble(this.circleness, b.circleness, t)});
      }
      return super.lerpTo(b, t);
    }
    [_adjustRect$](rect) {
      if (this.circleness === 0.0 || rect.width == rect.height) return rect;
      if (dart.notNull(rect.width) < dart.notNull(rect.height)) {
        let delta = dart.notNull(this.circleness) * (dart.notNull(rect.height) - dart.notNull(rect.width)) / 2.0;
        return new ui.Rect.fromLTRB(rect.left, dart.notNull(rect.top) + delta, rect.right, dart.notNull(rect.bottom) - delta);
      } else {
        let delta = dart.notNull(this.circleness) * (dart.notNull(rect.width) - dart.notNull(rect.height)) / 2.0;
        return new ui.Rect.fromLTRB(dart.notNull(rect.left) + delta, rect.top, dart.notNull(rect.right) - delta, rect.bottom);
      }
    }
    [_adjustBorderRadius$](rect) {
      return new border_radius.BorderRadius.circular(dart.notNull(rect.shortestSide) / 2.0);
    }
    getInnerPath(rect, opts) {
      let t18;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t18 = ui.Path.new();
      t18.addRRect(this[_adjustBorderRadius$](rect).toRRect(this[_adjustRect$](rect)).deflate(this.side.width));
      return t18;
    }
    getOuterPath(rect, opts) {
      let t18;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t18 = ui.Path.new();
      t18.addRRect(this[_adjustBorderRadius$](rect).toRRect(this[_adjustRect$](rect)));
      return t18;
    }
    paint(canvas, rect, opts) {
      let t18;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      switch (this.side.style) {
        case C6 || CT.C6:
        {
          break;
        }
        case C13 || CT.C13:
        {
          let width = this.side.width;
          if (width === 0.0) {
            canvas.drawRRect(this[_adjustBorderRadius$](rect).toRRect(this[_adjustRect$](rect)), this.side.toPaint());
          } else {
            let outer = this[_adjustBorderRadius$](rect).toRRect(this[_adjustRect$](rect));
            let inner = outer.deflate(width);
            let paint = (t18 = ui.Paint.new(), t18.color = this.side.color, t18);
            canvas.drawDRRect(outer, inner, paint);
          }
        }
      }
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return stadium_border._StadiumToCircleBorder.is(other) && dart.equals(other.side, this.side) && other.circleness == this.circleness;
    }
    get hashCode() {
      return ui.hashValues(this.side, this.circleness);
    }
    toString() {
      return "StadiumBorder(" + dart.str(this.side) + ", " + (dart.notNull(this.circleness) * 100)[$toStringAsFixed](1) + "% " + "of the way to being a CircleBorder)";
    }
  };
  (stadium_border._StadiumToCircleBorder.new = function(opts) {
    let side = opts && 'side' in opts ? opts.side : C5 || CT.C5;
    let circleness = opts && 'circleness' in opts ? opts.circleness : 0;
    this[side$3] = side;
    this[circleness$0] = circleness;
    if (!(side != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/stadium_border.dart", 136, 15, "side != null");
    if (!(circleness != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/stadium_border.dart", 137, 15, "circleness != null");
    stadium_border._StadiumToCircleBorder.__proto__.new.call(this);
    ;
  }).prototype = stadium_border._StadiumToCircleBorder.prototype;
  dart.addTypeTests(stadium_border._StadiumToCircleBorder);
  dart.setMethodSignature(stadium_border._StadiumToCircleBorder, () => ({
    __proto__: dart.getMethods(stadium_border._StadiumToCircleBorder.__proto__),
    scale: dart.fnType(borders$.ShapeBorder, [core.double]),
    [_adjustRect$]: dart.fnType(ui.Rect, [ui.Rect]),
    [_adjustBorderRadius$]: dart.fnType(border_radius.BorderRadius, [ui.Rect]),
    getInnerPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: ui.TextDirection}, {}),
    getOuterPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: ui.TextDirection}, {}),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {textDirection: ui.TextDirection}, {}),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(stadium_border._StadiumToCircleBorder, () => ({
    __proto__: dart.getGetters(stadium_border._StadiumToCircleBorder.__proto__),
    dimensions: edge_insets.EdgeInsetsGeometry
  }));
  dart.setLibraryUri(stadium_border._StadiumToCircleBorder, "package:flutter/src/painting/stadium_border.dart");
  dart.setFieldSignature(stadium_border._StadiumToCircleBorder, () => ({
    __proto__: dart.getFields(stadium_border._StadiumToCircleBorder.__proto__),
    side: dart.finalFieldType(borders$.BorderSide),
    circleness: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(stadium_border._StadiumToCircleBorder, ['_equals', 'toString']);
  dart.defineExtensionAccessors(stadium_border._StadiumToCircleBorder, ['hashCode']);
  var side$4 = dart.privateName(stadium_border, "_StadiumToRoundedRectangleBorder.side");
  var borderRadius$2 = dart.privateName(stadium_border, "_StadiumToRoundedRectangleBorder.borderRadius");
  var rectness$ = dart.privateName(stadium_border, "_StadiumToRoundedRectangleBorder.rectness");
  stadium_border._StadiumToRoundedRectangleBorder = class _StadiumToRoundedRectangleBorder extends borders$.ShapeBorder {
    get side() {
      return this[side$4];
    }
    set side(value) {
      super.side = value;
    }
    get borderRadius() {
      return this[borderRadius$2];
    }
    set borderRadius(value) {
      super.borderRadius = value;
    }
    get rectness() {
      return this[rectness$];
    }
    set rectness(value) {
      super.rectness = value;
    }
    get dimensions() {
      return new edge_insets.EdgeInsets.all(this.side.width);
    }
    scale(t) {
      return new stadium_border._StadiumToRoundedRectangleBorder.new({side: this.side.scale(t), borderRadius: this.borderRadius['*'](t), rectness: t});
    }
    lerpFrom(a, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/stadium_border.dart", 312, 12, "t != null");
      if (stadium_border.StadiumBorder.is(a)) {
        return new stadium_border._StadiumToRoundedRectangleBorder.new({side: borders$.BorderSide.lerp(a.side, this.side, t), borderRadius: this.borderRadius, rectness: dart.notNull(this.rectness) * dart.notNull(t)});
      }
      if (rounded_rectangle_border.RoundedRectangleBorder.is(a)) {
        return new stadium_border._StadiumToRoundedRectangleBorder.new({side: borders$.BorderSide.lerp(a.side, this.side, t), borderRadius: this.borderRadius, rectness: dart.notNull(this.rectness) + (1.0 - dart.notNull(this.rectness)) * (1.0 - dart.notNull(t))});
      }
      if (stadium_border._StadiumToRoundedRectangleBorder.is(a)) {
        return new stadium_border._StadiumToRoundedRectangleBorder.new({side: borders$.BorderSide.lerp(a.side, this.side, t), borderRadius: border_radius.BorderRadius.lerp(a.borderRadius, this.borderRadius, t), rectness: ui.lerpDouble(a.rectness, this.rectness, t)});
      }
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/stadium_border.dart", 339, 12, "t != null");
      if (stadium_border.StadiumBorder.is(b)) {
        return new stadium_border._StadiumToRoundedRectangleBorder.new({side: borders$.BorderSide.lerp(this.side, b.side, t), borderRadius: this.borderRadius, rectness: dart.notNull(this.rectness) * (1.0 - dart.notNull(t))});
      }
      if (rounded_rectangle_border.RoundedRectangleBorder.is(b)) {
        return new stadium_border._StadiumToRoundedRectangleBorder.new({side: borders$.BorderSide.lerp(this.side, b.side, t), borderRadius: this.borderRadius, rectness: dart.notNull(this.rectness) + (1.0 - dart.notNull(this.rectness)) * dart.notNull(t)});
      }
      if (stadium_border._StadiumToRoundedRectangleBorder.is(b)) {
        return new stadium_border._StadiumToRoundedRectangleBorder.new({side: borders$.BorderSide.lerp(this.side, b.side, t), borderRadius: border_radius.BorderRadius.lerp(this.borderRadius, b.borderRadius, t), rectness: ui.lerpDouble(this.rectness, b.rectness, t)});
      }
      return super.lerpTo(b, t);
    }
    [_adjustBorderRadius$](rect) {
      return border_radius.BorderRadius.lerp(this.borderRadius, new border_radius.BorderRadius.all(new ui.Radius.circular(dart.notNull(rect.shortestSide) / 2.0)), 1.0 - dart.notNull(this.rectness));
    }
    getInnerPath(rect, opts) {
      let t18;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t18 = ui.Path.new();
      t18.addRRect(this[_adjustBorderRadius$](rect).toRRect(rect).deflate(this.side.width));
      return t18;
    }
    getOuterPath(rect, opts) {
      let t18;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t18 = ui.Path.new();
      t18.addRRect(this[_adjustBorderRadius$](rect).toRRect(rect));
      return t18;
    }
    paint(canvas, rect, opts) {
      let t18;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      switch (this.side.style) {
        case C6 || CT.C6:
        {
          break;
        }
        case C13 || CT.C13:
        {
          let width = this.side.width;
          if (width === 0.0) {
            canvas.drawRRect(this[_adjustBorderRadius$](rect).toRRect(rect), this.side.toPaint());
          } else {
            let outer = this[_adjustBorderRadius$](rect).toRRect(rect);
            let inner = outer.deflate(width);
            let paint = (t18 = ui.Paint.new(), t18.color = this.side.color, t18);
            canvas.drawDRRect(outer, inner, paint);
          }
        }
      }
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return stadium_border._StadiumToRoundedRectangleBorder.is(other) && dart.equals(other.side, this.side) && dart.equals(other.borderRadius, this.borderRadius) && other.rectness == this.rectness;
    }
    get hashCode() {
      return ui.hashValues(this.side, this.borderRadius, this.rectness);
    }
    toString() {
      return "StadiumBorder(" + dart.str(this.side) + ", " + dart.str(this.borderRadius) + ", " + (dart.notNull(this.rectness) * 100)[$toStringAsFixed](1) + "% of the way to being a " + "RoundedRectangleBorder)";
    }
  };
  (stadium_border._StadiumToRoundedRectangleBorder.new = function(opts) {
    let side = opts && 'side' in opts ? opts.side : C5 || CT.C5;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C11 || CT.C11;
    let rectness = opts && 'rectness' in opts ? opts.rectness : 0;
    this[side$4] = side;
    this[borderRadius$2] = borderRadius;
    this[rectness$] = rectness;
    if (!(side != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/stadium_border.dart", 286, 15, "side != null");
    if (!(borderRadius != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/stadium_border.dart", 287, 15, "borderRadius != null");
    if (!(rectness != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/stadium_border.dart", 288, 15, "rectness != null");
    stadium_border._StadiumToRoundedRectangleBorder.__proto__.new.call(this);
    ;
  }).prototype = stadium_border._StadiumToRoundedRectangleBorder.prototype;
  dart.addTypeTests(stadium_border._StadiumToRoundedRectangleBorder);
  dart.setMethodSignature(stadium_border._StadiumToRoundedRectangleBorder, () => ({
    __proto__: dart.getMethods(stadium_border._StadiumToRoundedRectangleBorder.__proto__),
    scale: dart.fnType(borders$.ShapeBorder, [core.double]),
    [_adjustBorderRadius$]: dart.fnType(border_radius.BorderRadius, [ui.Rect]),
    getInnerPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: ui.TextDirection}, {}),
    getOuterPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: ui.TextDirection}, {}),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {textDirection: ui.TextDirection}, {}),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(stadium_border._StadiumToRoundedRectangleBorder, () => ({
    __proto__: dart.getGetters(stadium_border._StadiumToRoundedRectangleBorder.__proto__),
    dimensions: edge_insets.EdgeInsetsGeometry
  }));
  dart.setLibraryUri(stadium_border._StadiumToRoundedRectangleBorder, "package:flutter/src/painting/stadium_border.dart");
  dart.setFieldSignature(stadium_border._StadiumToRoundedRectangleBorder, () => ({
    __proto__: dart.getFields(stadium_border._StadiumToRoundedRectangleBorder.__proto__),
    side: dart.finalFieldType(borders$.BorderSide),
    borderRadius: dart.finalFieldType(border_radius.BorderRadius),
    rectness: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(stadium_border._StadiumToRoundedRectangleBorder, ['_equals', 'toString']);
  dart.defineExtensionAccessors(stadium_border._StadiumToRoundedRectangleBorder, ['hashCode']);
  var _clampToShortest = dart.privateName(continuous_rectangle_border, "_clampToShortest");
  var _getPath = dart.privateName(continuous_rectangle_border, "_getPath");
  var borderRadius$3 = dart.privateName(continuous_rectangle_border, "ContinuousRectangleBorder.borderRadius");
  var side$5 = dart.privateName(continuous_rectangle_border, "ContinuousRectangleBorder.side");
  continuous_rectangle_border.ContinuousRectangleBorder = class ContinuousRectangleBorder extends borders$.ShapeBorder {
    get borderRadius() {
      return this[borderRadius$3];
    }
    set borderRadius(value) {
      super.borderRadius = value;
    }
    get side() {
      return this[side$5];
    }
    set side(value) {
      super.side = value;
    }
    get dimensions() {
      return new edge_insets.EdgeInsets.all(this.side.width);
    }
    scale(t) {
      return new continuous_rectangle_border.ContinuousRectangleBorder.new({side: this.side.scale(t), borderRadius: this.borderRadius['*'](t)});
    }
    lerpFrom(a, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/continuous_rectangle_border.dart", 65, 12, "t != null");
      if (continuous_rectangle_border.ContinuousRectangleBorder.is(a)) {
        return new continuous_rectangle_border.ContinuousRectangleBorder.new({side: borders$.BorderSide.lerp(a.side, this.side, t), borderRadius: border_radius.BorderRadiusGeometry.lerp(a.borderRadius, this.borderRadius, t)});
      }
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/continuous_rectangle_border.dart", 77, 12, "t != null");
      if (continuous_rectangle_border.ContinuousRectangleBorder.is(b)) {
        return new continuous_rectangle_border.ContinuousRectangleBorder.new({side: borders$.BorderSide.lerp(this.side, b.side, t), borderRadius: border_radius.BorderRadiusGeometry.lerp(this.borderRadius, b.borderRadius, t)});
      }
      return super.lerpTo(b, t);
    }
    [_clampToShortest](rrect, value) {
      return dart.notNull(value) > dart.notNull(rrect.shortestSide) ? rrect.shortestSide : value;
    }
    [_getPath](rrect) {
      let t18;
      let left = rrect.left;
      let right = rrect.right;
      let top = rrect.top;
      let bottom = rrect.bottom;
      let tlRadiusX = math.max(core.double, 0.0, this[_clampToShortest](rrect, rrect.tlRadiusX));
      let tlRadiusY = math.max(core.double, 0.0, this[_clampToShortest](rrect, rrect.tlRadiusY));
      let trRadiusX = math.max(core.double, 0.0, this[_clampToShortest](rrect, rrect.trRadiusX));
      let trRadiusY = math.max(core.double, 0.0, this[_clampToShortest](rrect, rrect.trRadiusY));
      let blRadiusX = math.max(core.double, 0.0, this[_clampToShortest](rrect, rrect.blRadiusX));
      let blRadiusY = math.max(core.double, 0.0, this[_clampToShortest](rrect, rrect.blRadiusY));
      let brRadiusX = math.max(core.double, 0.0, this[_clampToShortest](rrect, rrect.brRadiusX));
      let brRadiusY = math.max(core.double, 0.0, this[_clampToShortest](rrect, rrect.brRadiusY));
      t18 = ui.Path.new();
      t18.moveTo(left, dart.notNull(top) + tlRadiusX);
      t18.cubicTo(left, top, left, top, dart.notNull(left) + tlRadiusY, top);
      t18.lineTo(dart.notNull(right) - trRadiusX, top);
      t18.cubicTo(right, top, right, top, right, dart.notNull(top) + trRadiusY);
      t18.lineTo(right, dart.notNull(bottom) - brRadiusX);
      t18.cubicTo(right, bottom, right, bottom, dart.notNull(right) - brRadiusY, bottom);
      t18.lineTo(dart.notNull(left) + blRadiusX, bottom);
      t18.cubicTo(left, bottom, left, bottom, left, dart.notNull(bottom) - blRadiusY);
      t18.close();
      return t18;
    }
    getInnerPath(rect, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return this[_getPath](this.borderRadius.resolve(textDirection).toRRect(rect).deflate(this.side.width));
    }
    getOuterPath(rect, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return this[_getPath](this.borderRadius.resolve(textDirection).toRRect(rect));
    }
    paint(canvas, rect, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      if (dart.test(rect.isEmpty)) return;
      switch (this.side.style) {
        case C6 || CT.C6:
        {
          break;
        }
        case C13 || CT.C13:
        {
          let path = this.getOuterPath(rect, {textDirection: textDirection});
          let paint = this.side.toPaint();
          canvas.drawPath(path, paint);
          break;
        }
      }
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return continuous_rectangle_border.ContinuousRectangleBorder.is(other) && dart.equals(other.side, this.side) && dart.equals(other.borderRadius, this.borderRadius);
    }
    get hashCode() {
      return ui.hashValues(this.side, this.borderRadius);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "ContinuousRectangleBorder")) + "(" + dart.str(this.side) + ", " + dart.str(this.borderRadius) + ")";
    }
  };
  (continuous_rectangle_border.ContinuousRectangleBorder.new = function(opts) {
    let side = opts && 'side' in opts ? opts.side : C5 || CT.C5;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C11 || CT.C11;
    this[side$5] = side;
    this[borderRadius$3] = borderRadius;
    if (!(side != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/continuous_rectangle_border.dart", 40, 15, "side != null");
    if (!(borderRadius != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/continuous_rectangle_border.dart", 41, 15, "borderRadius != null");
    continuous_rectangle_border.ContinuousRectangleBorder.__proto__.new.call(this);
    ;
  }).prototype = continuous_rectangle_border.ContinuousRectangleBorder.prototype;
  dart.addTypeTests(continuous_rectangle_border.ContinuousRectangleBorder);
  dart.setMethodSignature(continuous_rectangle_border.ContinuousRectangleBorder, () => ({
    __proto__: dart.getMethods(continuous_rectangle_border.ContinuousRectangleBorder.__proto__),
    scale: dart.fnType(borders$.ShapeBorder, [core.double]),
    [_clampToShortest]: dart.fnType(core.double, [ui.RRect, core.double]),
    [_getPath]: dart.fnType(ui.Path, [ui.RRect]),
    getInnerPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: ui.TextDirection}, {}),
    getOuterPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: ui.TextDirection}, {}),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {textDirection: ui.TextDirection}, {}),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(continuous_rectangle_border.ContinuousRectangleBorder, () => ({
    __proto__: dart.getGetters(continuous_rectangle_border.ContinuousRectangleBorder.__proto__),
    dimensions: edge_insets.EdgeInsetsGeometry
  }));
  dart.setLibraryUri(continuous_rectangle_border.ContinuousRectangleBorder, "package:flutter/src/painting/continuous_rectangle_border.dart");
  dart.setFieldSignature(continuous_rectangle_border.ContinuousRectangleBorder, () => ({
    __proto__: dart.getFields(continuous_rectangle_border.ContinuousRectangleBorder.__proto__),
    borderRadius: dart.finalFieldType(border_radius.BorderRadiusGeometry),
    side: dart.finalFieldType(borders$.BorderSide)
  }));
  dart.defineExtensionMethods(continuous_rectangle_border.ContinuousRectangleBorder, ['_equals', 'toString']);
  dart.defineExtensionAccessors(continuous_rectangle_border.ContinuousRectangleBorder, ['hashCode']);
  matrix_utils.MatrixUtils = class MatrixUtils extends core.Object {
    static getAsTranslation(transform) {
      if (!(transform != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/matrix_utils.dart", 24, 12, "transform != null");
      let values = transform.storage;
      if (values[$_get](0) === 1.0 && values[$_get](1) === 0.0 && values[$_get](2) === 0.0 && values[$_get](3) === 0.0 && values[$_get](4) === 0.0 && values[$_get](5) === 1.0 && values[$_get](6) === 0.0 && values[$_get](7) === 0.0 && values[$_get](8) === 0.0 && values[$_get](9) === 0.0 && values[$_get](10) === 1.0 && values[$_get](11) === 0.0 && values[$_get](14) === 0.0 && values[$_get](15) === 1.0) {
        return new ui.Offset.new(values[$_get](12), values[$_get](13));
      }
      return null;
    }
    static getAsScale(transform) {
      if (!(transform != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/matrix_utils.dart", 51, 12, "transform != null");
      let values = transform.storage;
      if (values[$_get](1) === 0.0 && values[$_get](2) === 0.0 && values[$_get](3) === 0.0 && values[$_get](4) === 0.0 && values[$_get](6) === 0.0 && values[$_get](7) === 0.0 && values[$_get](8) === 0.0 && values[$_get](9) === 0.0 && values[$_get](10) === 1.0 && values[$_get](11) === 0.0 && values[$_get](12) === 0.0 && values[$_get](13) === 0.0 && values[$_get](14) === 0.0 && values[$_get](15) === 1.0 && values[$_get](0) == values[$_get](5)) {
        return values[$_get](0);
      }
      return null;
    }
    static matrixEquals(a, b) {
      if (a == b) return true;
      if (!(a != null || b != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/matrix_utils.dart", 79, 12, "a != null || b != null");
      if (a == null) return matrix_utils.MatrixUtils.isIdentity(b);
      if (b == null) return matrix_utils.MatrixUtils.isIdentity(a);
      if (!(a != null && b != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/matrix_utils.dart", 84, 12, "a != null && b != null");
      return a.storage[$_get](0) == b.storage[$_get](0) && a.storage[$_get](1) == b.storage[$_get](1) && a.storage[$_get](2) == b.storage[$_get](2) && a.storage[$_get](3) == b.storage[$_get](3) && a.storage[$_get](4) == b.storage[$_get](4) && a.storage[$_get](5) == b.storage[$_get](5) && a.storage[$_get](6) == b.storage[$_get](6) && a.storage[$_get](7) == b.storage[$_get](7) && a.storage[$_get](8) == b.storage[$_get](8) && a.storage[$_get](9) == b.storage[$_get](9) && a.storage[$_get](10) == b.storage[$_get](10) && a.storage[$_get](11) == b.storage[$_get](11) && a.storage[$_get](12) == b.storage[$_get](12) && a.storage[$_get](13) == b.storage[$_get](13) && a.storage[$_get](14) == b.storage[$_get](14) && a.storage[$_get](15) == b.storage[$_get](15);
    }
    static isIdentity(a) {
      if (!(a != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/matrix_utils.dart", 105, 12, "a != null");
      return a.storage[$_get](0) === 1.0 && a.storage[$_get](1) === 0.0 && a.storage[$_get](2) === 0.0 && a.storage[$_get](3) === 0.0 && a.storage[$_get](4) === 0.0 && a.storage[$_get](5) === 1.0 && a.storage[$_get](6) === 0.0 && a.storage[$_get](7) === 0.0 && a.storage[$_get](8) === 0.0 && a.storage[$_get](9) === 0.0 && a.storage[$_get](10) === 1.0 && a.storage[$_get](11) === 0.0 && a.storage[$_get](12) === 0.0 && a.storage[$_get](13) === 0.0 && a.storage[$_get](14) === 0.0 && a.storage[$_get](15) === 1.0;
    }
    static transformPoint(transform, point) {
      let storage = transform.storage;
      let x = point.dx;
      let y = point.dy;
      let rx = dart.notNull(storage[$_get](0)) * dart.notNull(x) + dart.notNull(storage[$_get](4)) * dart.notNull(y) + dart.notNull(storage[$_get](12));
      let ry = dart.notNull(storage[$_get](1)) * dart.notNull(x) + dart.notNull(storage[$_get](5)) * dart.notNull(y) + dart.notNull(storage[$_get](13));
      let rw = dart.notNull(storage[$_get](3)) * dart.notNull(x) + dart.notNull(storage[$_get](7)) * dart.notNull(y) + dart.notNull(storage[$_get](15));
      if (rw === 1.0) {
        return new ui.Offset.new(rx, ry);
      } else {
        return new ui.Offset.new(rx / rw, ry / rw);
      }
    }
    static _safeTransformRect(transform, rect) {
      let storage = transform.storage;
      let isAffine = storage[$_get](3) === 0.0 && storage[$_get](7) === 0.0 && storage[$_get](15) === 1.0;
      matrix_utils.MatrixUtils._minMax == null ? matrix_utils.MatrixUtils._minMax = _native_typed_data.NativeFloat64List.new(4) : null;
      matrix_utils.MatrixUtils._accumulate(storage, rect.left, rect.top, true, isAffine);
      matrix_utils.MatrixUtils._accumulate(storage, rect.right, rect.top, false, isAffine);
      matrix_utils.MatrixUtils._accumulate(storage, rect.left, rect.bottom, false, isAffine);
      matrix_utils.MatrixUtils._accumulate(storage, rect.right, rect.bottom, false, isAffine);
      return new ui.Rect.fromLTRB(matrix_utils.MatrixUtils._minMax[$_get](0), matrix_utils.MatrixUtils._minMax[$_get](1), matrix_utils.MatrixUtils._minMax[$_get](2), matrix_utils.MatrixUtils._minMax[$_get](3));
    }
    static _accumulate(m, x, y, first, isAffine) {
      let t20, t19, t18, t20$, t19$, t18$;
      let w = dart.test(isAffine) ? 1.0 : 1.0 / (dart.notNull(m[$_get](3)) * dart.notNull(x) + dart.notNull(m[$_get](7)) * dart.notNull(y) + dart.notNull(m[$_get](15)));
      let tx = (dart.notNull(m[$_get](0)) * dart.notNull(x) + dart.notNull(m[$_get](4)) * dart.notNull(y) + dart.notNull(m[$_get](12))) * w;
      let ty = (dart.notNull(m[$_get](1)) * dart.notNull(x) + dart.notNull(m[$_get](5)) * dart.notNull(y) + dart.notNull(m[$_get](13))) * w;
      if (dart.test(first)) {
        matrix_utils.MatrixUtils._minMax[$_set](0, (t18 = matrix_utils.MatrixUtils._minMax, t19 = 2, t20 = tx, t18[$_set](t19, t20), t20));
        matrix_utils.MatrixUtils._minMax[$_set](1, (t18$ = matrix_utils.MatrixUtils._minMax, t19$ = 3, t20$ = ty, t18$[$_set](t19$, t20$), t20$));
      } else {
        if (tx < dart.notNull(matrix_utils.MatrixUtils._minMax[$_get](0))) {
          matrix_utils.MatrixUtils._minMax[$_set](0, tx);
        }
        if (ty < dart.notNull(matrix_utils.MatrixUtils._minMax[$_get](1))) {
          matrix_utils.MatrixUtils._minMax[$_set](1, ty);
        }
        if (tx > dart.notNull(matrix_utils.MatrixUtils._minMax[$_get](2))) {
          matrix_utils.MatrixUtils._minMax[$_set](2, tx);
        }
        if (ty > dart.notNull(matrix_utils.MatrixUtils._minMax[$_get](3))) {
          matrix_utils.MatrixUtils._minMax[$_set](3, ty);
        }
      }
    }
    static transformRect(transform, rect) {
      let storage = transform.storage;
      let x = rect.left;
      let y = rect.top;
      let w = dart.notNull(rect.right) - dart.notNull(x);
      let h = dart.notNull(rect.bottom) - dart.notNull(y);
      if (!w[$isFinite] || !h[$isFinite]) {
        return matrix_utils.MatrixUtils._safeTransformRect(transform, rect);
      }
      let wx = dart.notNull(storage[$_get](0)) * w;
      let hx = dart.notNull(storage[$_get](4)) * h;
      let rx = dart.notNull(storage[$_get](0)) * dart.notNull(x) + dart.notNull(storage[$_get](4)) * dart.notNull(y) + dart.notNull(storage[$_get](12));
      let wy = dart.notNull(storage[$_get](1)) * w;
      let hy = dart.notNull(storage[$_get](5)) * h;
      let ry = dart.notNull(storage[$_get](1)) * dart.notNull(x) + dart.notNull(storage[$_get](5)) * dart.notNull(y) + dart.notNull(storage[$_get](13));
      if (storage[$_get](3) === 0.0 && storage[$_get](7) === 0.0 && storage[$_get](15) === 1.0) {
        let left = rx;
        let right = rx;
        if (wx < 0) {
          left = left + wx;
        } else {
          right = right + wx;
        }
        if (hx < 0) {
          left = left + hx;
        } else {
          right = right + hx;
        }
        let top = ry;
        let bottom = ry;
        if (wy < 0) {
          top = top + wy;
        } else {
          bottom = bottom + wy;
        }
        if (hy < 0) {
          top = top + hy;
        } else {
          bottom = bottom + hy;
        }
        return new ui.Rect.fromLTRB(left, top, right, bottom);
      } else {
        let ww = dart.notNull(storage[$_get](3)) * w;
        let hw = dart.notNull(storage[$_get](7)) * h;
        let rw = dart.notNull(storage[$_get](3)) * dart.notNull(x) + dart.notNull(storage[$_get](7)) * dart.notNull(y) + dart.notNull(storage[$_get](15));
        let ulx = rx / rw;
        let uly = ry / rw;
        let urx = (rx + wx) / (rw + ww);
        let ury = (ry + wy) / (rw + ww);
        let llx = (rx + hx) / (rw + hw);
        let lly = (ry + hy) / (rw + hw);
        let lrx = (rx + wx + hx) / (rw + ww + hw);
        let lry = (ry + wy + hy) / (rw + ww + hw);
        return new ui.Rect.fromLTRB(matrix_utils.MatrixUtils._min4(ulx, urx, llx, lrx), matrix_utils.MatrixUtils._min4(uly, ury, lly, lry), matrix_utils.MatrixUtils._max4(ulx, urx, llx, lrx), matrix_utils.MatrixUtils._max4(uly, ury, lly, lry));
      }
    }
    static _min4(a, b, c, d) {
      let e = dart.notNull(a) < dart.notNull(b) ? a : b;
      let f = dart.notNull(c) < dart.notNull(d) ? c : d;
      return dart.notNull(e) < dart.notNull(f) ? e : f;
    }
    static _max4(a, b, c, d) {
      let e = dart.notNull(a) > dart.notNull(b) ? a : b;
      let f = dart.notNull(c) > dart.notNull(d) ? c : d;
      return dart.notNull(e) > dart.notNull(f) ? e : f;
    }
    static inverseTransformRect(transform, rect) {
      let t18;
      if (!(rect != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/matrix_utils.dart", 435, 12, "rect != null");
      if (dart.test(matrix_utils.MatrixUtils.isIdentity(transform))) return rect;
      transform = (t18 = vector_math_64.Matrix4.copy(transform), t18.invert(), t18);
      return matrix_utils.MatrixUtils.transformRect(transform, rect);
    }
    static createCylindricalProjectionTransform(opts) {
      let t18;
      let radius = opts && 'radius' in opts ? opts.radius : null;
      let angle = opts && 'angle' in opts ? opts.angle : null;
      let perspective = opts && 'perspective' in opts ? opts.perspective : 0.001;
      let orientation = opts && 'orientation' in opts ? opts.orientation : C15 || CT.C15;
      if (!(radius != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/matrix_utils.dart", 484, 12, "radius != null");
      if (!(angle != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/matrix_utils.dart", 485, 12, "angle != null");
      if (!(dart.notNull(perspective) >= 0 && dart.notNull(perspective) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/matrix_utils.dart", 486, 12, "perspective >= 0 && perspective <= 1.0");
      if (!(orientation != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/matrix_utils.dart", 487, 12, "orientation != null");
      let result = (t18 = vector_math_64.Matrix4.identity(), t18.setEntry(3, 2, -dart.notNull(perspective)), t18.setEntry(2, 3, -dart.notNull(radius)), t18.setEntry(3, 3, dart.notNull(perspective) * dart.notNull(radius) + 1.0), t18);
      result = vector_math_64.Matrix4.as(result['*']((dart.equals(orientation, basic_types.Axis.horizontal) ? vector_math_64.Matrix4.rotationY(angle) : vector_math_64.Matrix4.rotationX(angle))['*'](vector_math_64.Matrix4.translationValues(0.0, 0.0, radius))));
      return result;
    }
    static forceToPoint(offset) {
      let t18;
      t18 = vector_math_64.Matrix4.identity();
      t18.setRow(0, vector_math_64.Vector4.new(0.0, 0.0, 0.0, offset.dx));
      t18.setRow(1, vector_math_64.Vector4.new(0.0, 0.0, 0.0, offset.dy));
      return t18;
    }
  };
  (matrix_utils.MatrixUtils.__ = function() {
    ;
  }).prototype = matrix_utils.MatrixUtils.prototype;
  dart.addTypeTests(matrix_utils.MatrixUtils);
  dart.setLibraryUri(matrix_utils.MatrixUtils, "package:flutter/src/painting/matrix_utils.dart");
  dart.defineLazy(matrix_utils.MatrixUtils, {
    /*matrix_utils.MatrixUtils._minMax*/get _minMax() {
      return null;
    },
    set _minMax(_) {}
  });
  matrix_utils.TransformProperty = class TransformProperty extends diagnostics.DiagnosticsProperty$(vector_math_64.Matrix4) {
    valueToString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      if (parentConfiguration != null && !dart.test(parentConfiguration.lineBreakProperties)) {
        let values = JSArrayOfString().of([dart.str(debug.debugFormatDouble(this.value.entry(0, 0))) + "," + dart.str(debug.debugFormatDouble(this.value.entry(0, 1))) + "," + dart.str(debug.debugFormatDouble(this.value.entry(0, 2))) + "," + dart.str(debug.debugFormatDouble(this.value.entry(0, 3))), dart.str(debug.debugFormatDouble(this.value.entry(1, 0))) + "," + dart.str(debug.debugFormatDouble(this.value.entry(1, 1))) + "," + dart.str(debug.debugFormatDouble(this.value.entry(1, 2))) + "," + dart.str(debug.debugFormatDouble(this.value.entry(1, 3))), dart.str(debug.debugFormatDouble(this.value.entry(2, 0))) + "," + dart.str(debug.debugFormatDouble(this.value.entry(2, 1))) + "," + dart.str(debug.debugFormatDouble(this.value.entry(2, 2))) + "," + dart.str(debug.debugFormatDouble(this.value.entry(2, 3))), dart.str(debug.debugFormatDouble(this.value.entry(3, 0))) + "," + dart.str(debug.debugFormatDouble(this.value.entry(3, 1))) + "," + dart.str(debug.debugFormatDouble(this.value.entry(3, 2))) + "," + dart.str(debug.debugFormatDouble(this.value.entry(3, 3)))]);
        return "[" + dart.str(values[$join]("; ")) + "]";
      }
      return matrix_utils.debugDescribeTransform(this.value)[$join]("\n");
    }
  };
  (matrix_utils.TransformProperty.new = function(name, value, opts) {
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C85 || CT.C85;
    let level = opts && 'level' in opts ? opts.level : C87 || CT.C87;
    if (!(showName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/matrix_utils.dart", 557, 15, "showName != null");
    if (!(level != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/matrix_utils.dart", 558, 15, "level != null");
    matrix_utils.TransformProperty.__proto__.new.call(this, name, value, {showName: showName, defaultValue: defaultValue, level: level});
    ;
  }).prototype = matrix_utils.TransformProperty.prototype;
  dart.addTypeTests(matrix_utils.TransformProperty);
  dart.setLibraryUri(matrix_utils.TransformProperty, "package:flutter/src/painting/matrix_utils.dart");
  var C156;
  matrix_utils.debugDescribeTransform = function debugDescribeTransform(transform) {
    if (transform == null) return C156 || CT.C156;
    return JSArrayOfString().of(["[0] " + dart.str(debug.debugFormatDouble(transform.entry(0, 0))) + "," + dart.str(debug.debugFormatDouble(transform.entry(0, 1))) + "," + dart.str(debug.debugFormatDouble(transform.entry(0, 2))) + "," + dart.str(debug.debugFormatDouble(transform.entry(0, 3))), "[1] " + dart.str(debug.debugFormatDouble(transform.entry(1, 0))) + "," + dart.str(debug.debugFormatDouble(transform.entry(1, 1))) + "," + dart.str(debug.debugFormatDouble(transform.entry(1, 2))) + "," + dart.str(debug.debugFormatDouble(transform.entry(1, 3))), "[2] " + dart.str(debug.debugFormatDouble(transform.entry(2, 0))) + "," + dart.str(debug.debugFormatDouble(transform.entry(2, 1))) + "," + dart.str(debug.debugFormatDouble(transform.entry(2, 2))) + "," + dart.str(debug.debugFormatDouble(transform.entry(2, 3))), "[3] " + dart.str(debug.debugFormatDouble(transform.entry(3, 0))) + "," + dart.str(debug.debugFormatDouble(transform.entry(3, 1))) + "," + dart.str(debug.debugFormatDouble(transform.entry(3, 2))) + "," + dart.str(debug.debugFormatDouble(transform.entry(3, 3)))]);
  };
  var _getPath$ = dart.privateName(beveled_rectangle_border, "_getPath");
  var side$6 = dart.privateName(beveled_rectangle_border, "BeveledRectangleBorder.side");
  var borderRadius$4 = dart.privateName(beveled_rectangle_border, "BeveledRectangleBorder.borderRadius");
  beveled_rectangle_border.BeveledRectangleBorder = class BeveledRectangleBorder extends borders$.ShapeBorder {
    get side() {
      return this[side$6];
    }
    set side(value) {
      super.side = value;
    }
    get borderRadius() {
      return this[borderRadius$4];
    }
    set borderRadius(value) {
      super.borderRadius = value;
    }
    get dimensions() {
      return new edge_insets.EdgeInsets.all(this.side.width);
    }
    scale(t) {
      return new beveled_rectangle_border.BeveledRectangleBorder.new({side: this.side.scale(t), borderRadius: this.borderRadius['*'](t)});
    }
    lerpFrom(a, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/beveled_rectangle_border.dart", 61, 12, "t != null");
      if (beveled_rectangle_border.BeveledRectangleBorder.is(a)) {
        return new beveled_rectangle_border.BeveledRectangleBorder.new({side: borders$.BorderSide.lerp(a.side, this.side, t), borderRadius: border_radius.BorderRadiusGeometry.lerp(a.borderRadius, this.borderRadius, t)});
      }
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/beveled_rectangle_border.dart", 73, 12, "t != null");
      if (beveled_rectangle_border.BeveledRectangleBorder.is(b)) {
        return new beveled_rectangle_border.BeveledRectangleBorder.new({side: borders$.BorderSide.lerp(this.side, b.side, t), borderRadius: border_radius.BorderRadiusGeometry.lerp(this.borderRadius, b.borderRadius, t)});
      }
      return super.lerpTo(b, t);
    }
    [_getPath$](rrect) {
      let t18;
      let centerLeft = new ui.Offset.new(rrect.left, rrect.center.dy);
      let centerRight = new ui.Offset.new(rrect.right, rrect.center.dy);
      let centerTop = new ui.Offset.new(rrect.center.dx, rrect.top);
      let centerBottom = new ui.Offset.new(rrect.center.dx, rrect.bottom);
      let tlRadiusX = math.max(core.double, 0.0, rrect.tlRadiusX);
      let tlRadiusY = math.max(core.double, 0.0, rrect.tlRadiusY);
      let trRadiusX = math.max(core.double, 0.0, rrect.trRadiusX);
      let trRadiusY = math.max(core.double, 0.0, rrect.trRadiusY);
      let blRadiusX = math.max(core.double, 0.0, rrect.blRadiusX);
      let blRadiusY = math.max(core.double, 0.0, rrect.blRadiusY);
      let brRadiusX = math.max(core.double, 0.0, rrect.brRadiusX);
      let brRadiusY = math.max(core.double, 0.0, rrect.brRadiusY);
      let vertices = JSArrayOfOffset().of([new ui.Offset.new(rrect.left, math.min(core.double, centerLeft.dy, dart.notNull(rrect.top) + tlRadiusY)), new ui.Offset.new(math.min(core.double, centerTop.dx, dart.notNull(rrect.left) + tlRadiusX), rrect.top), new ui.Offset.new(math.max(core.double, centerTop.dx, dart.notNull(rrect.right) - trRadiusX), rrect.top), new ui.Offset.new(rrect.right, math.min(core.double, centerRight.dy, dart.notNull(rrect.top) + trRadiusY)), new ui.Offset.new(rrect.right, math.max(core.double, centerRight.dy, dart.notNull(rrect.bottom) - brRadiusY)), new ui.Offset.new(math.max(core.double, centerBottom.dx, dart.notNull(rrect.right) - brRadiusX), rrect.bottom), new ui.Offset.new(math.min(core.double, centerBottom.dx, dart.notNull(rrect.left) + blRadiusX), rrect.bottom), new ui.Offset.new(rrect.left, math.max(core.double, centerLeft.dy, dart.notNull(rrect.bottom) - blRadiusY))]);
      t18 = ui.Path.new();
      t18.addPolygon(vertices, true);
      return t18;
    }
    getInnerPath(rect, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return this[_getPath$](this.borderRadius.resolve(textDirection).toRRect(rect).deflate(this.side.width));
    }
    getOuterPath(rect, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return this[_getPath$](this.borderRadius.resolve(textDirection).toRRect(rect));
    }
    paint(canvas, rect, opts) {
      let t18;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      if (dart.test(rect.isEmpty)) return;
      switch (this.side.style) {
        case C6 || CT.C6:
        {
          break;
        }
        case C13 || CT.C13:
        {
          let path = (t18 = this.getOuterPath(rect, {textDirection: textDirection}), t18.addPath(this.getInnerPath(rect, {textDirection: textDirection}), ui.Offset.zero), t18);
          canvas.drawPath(path, this.side.toPaint());
          break;
        }
      }
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return beveled_rectangle_border.BeveledRectangleBorder.is(other) && dart.equals(other.side, this.side) && dart.equals(other.borderRadius, this.borderRadius);
    }
    get hashCode() {
      return ui.hashValues(this.side, this.borderRadius);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "BeveledRectangleBorder")) + "(" + dart.str(this.side) + ", " + dart.str(this.borderRadius) + ")";
    }
  };
  (beveled_rectangle_border.BeveledRectangleBorder.new = function(opts) {
    let side = opts && 'side' in opts ? opts.side : C5 || CT.C5;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C11 || CT.C11;
    this[side$6] = side;
    this[borderRadius$4] = borderRadius;
    if (!(side != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/beveled_rectangle_border.dart", 29, 15, "side != null");
    if (!(borderRadius != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/beveled_rectangle_border.dart", 30, 15, "borderRadius != null");
    beveled_rectangle_border.BeveledRectangleBorder.__proto__.new.call(this);
    ;
  }).prototype = beveled_rectangle_border.BeveledRectangleBorder.prototype;
  dart.addTypeTests(beveled_rectangle_border.BeveledRectangleBorder);
  dart.setMethodSignature(beveled_rectangle_border.BeveledRectangleBorder, () => ({
    __proto__: dart.getMethods(beveled_rectangle_border.BeveledRectangleBorder.__proto__),
    scale: dart.fnType(borders$.ShapeBorder, [core.double]),
    [_getPath$]: dart.fnType(ui.Path, [ui.RRect]),
    getInnerPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: ui.TextDirection}, {}),
    getOuterPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: ui.TextDirection}, {}),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {textDirection: ui.TextDirection}, {}),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(beveled_rectangle_border.BeveledRectangleBorder, () => ({
    __proto__: dart.getGetters(beveled_rectangle_border.BeveledRectangleBorder.__proto__),
    dimensions: edge_insets.EdgeInsetsGeometry
  }));
  dart.setLibraryUri(beveled_rectangle_border.BeveledRectangleBorder, "package:flutter/src/painting/beveled_rectangle_border.dart");
  dart.setFieldSignature(beveled_rectangle_border.BeveledRectangleBorder, () => ({
    __proto__: dart.getFields(beveled_rectangle_border.BeveledRectangleBorder.__proto__),
    side: dart.finalFieldType(borders$.BorderSide),
    borderRadius: dart.finalFieldType(border_radius.BorderRadiusGeometry)
  }));
  dart.defineExtensionMethods(beveled_rectangle_border.BeveledRectangleBorder, ['_equals', 'toString']);
  dart.defineExtensionAccessors(beveled_rectangle_border.BeveledRectangleBorder, ['hashCode']);
  var C157;
  var _chooseVariant = dart.privateName(image_resolution, "_chooseVariant");
  var _parseScale = dart.privateName(image_resolution, "_parseScale");
  var _findNearest = dart.privateName(image_resolution, "_findNearest");
  var assetName$0 = dart.privateName(image_resolution, "AssetImage.assetName");
  var bundle$2 = dart.privateName(image_resolution, "AssetImage.bundle");
  var package$0 = dart.privateName(image_resolution, "AssetImage.package");
  image_resolution.AssetImage = class AssetImage extends image_provider.AssetBundleImageProvider {
    get assetName() {
      return this[assetName$0];
    }
    set assetName(value) {
      super.assetName = value;
    }
    get bundle() {
      return this[bundle$2];
    }
    set bundle(value) {
      super.bundle = value;
    }
    get package() {
      return this[package$0];
    }
    set package(value) {
      super.package = value;
    }
    get keyName() {
      return this.package == null ? this.assetName : "packages/" + dart.str(this.package) + "/" + dart.str(this.assetName);
    }
    obtainKey(configuration) {
      let t18, t18$;
      let chosenBundle = (t18$ = (t18 = this.bundle, t18 == null ? configuration.bundle : t18), t18$ == null ? asset_bundle.rootBundle : t18$);
      let completer = null;
      let result = null;
      chosenBundle.loadStructuredData(MapOfString$ListOfString(), "AssetManifest.json", C157 || CT.C157).then(dart.void, dart.fn(manifest => {
        let chosenName = this[_chooseVariant](this.keyName, configuration, manifest == null ? null : manifest[$_get](this.keyName));
        let chosenScale = this[_parseScale](chosenName);
        let key = new image_provider.AssetBundleImageKey.new({bundle: chosenBundle, name: chosenName, scale: chosenScale});
        if (completer != null) {
          completer.complete(key);
        } else {
          result = new (SynchronousFutureOfAssetBundleImageKey()).new(key);
        }
      }, MapOfString$ListOfStringToNull())).catchError(dart.fn((error, stack) => {
        if (!(completer != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_resolution.dart", 203, 14, "completer != null");
        if (!(result == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_resolution.dart", 204, 14, "result == null");
        completer.completeError(error, stack);
      }, dynamicAndStackTraceToNull()));
      if (result != null) {
        return result;
      }
      completer = CompleterOfAssetBundleImageKey().new();
      return completer.future;
    }
    static _manifestParser(jsonData) {
      if (jsonData == null) return new (SynchronousFutureOfMapOfString$ListOfString()).new(null);
      let parsedJson = MapOfString$dynamic().as(convert.json.decode(jsonData));
      let keys = parsedJson[$keys];
      let parsedManifest = LinkedHashMapOfString$ListOfString().fromIterables(keys, keys[$map](ListOfString(), dart.fn(key => ListOfString().from(core.List.as(parsedJson[$_get](key))), StringToListOfString())));
      return new (SynchronousFutureOfMapOfString$ListOfString()).new(parsedManifest);
    }
    [_chooseVariant](main, config, candidates) {
      if (config.devicePixelRatio == null || candidates == null || dart.test(candidates[$isEmpty])) return main;
      let mapping = new (SplayTreeMapOfdouble$String()).new();
      for (let candidate of candidates)
        mapping._set(this[_parseScale](candidate), candidate);
      return this[_findNearest](mapping, config.devicePixelRatio);
    }
    [_findNearest](candidates, value) {
      if (dart.test(candidates.containsKey(value))) return candidates._get(value);
      let lower = candidates.lastKeyBefore(value);
      let upper = candidates.firstKeyAfter(value);
      if (lower == null) return candidates._get(upper);
      if (upper == null) return candidates._get(lower);
      if (dart.notNull(value) > (dart.notNull(lower) + dart.notNull(upper)) / 2)
        return candidates._get(upper);
      else
        return candidates._get(lower);
    }
    [_parseScale](key) {
      if (key == this.assetName) {
        return 1;
      }
      let assetUri = core.Uri.parse(key);
      let directoryPath = "";
      if (dart.notNull(assetUri.pathSegments[$length]) > 1) {
        directoryPath = assetUri.pathSegments[$_get](dart.notNull(assetUri.pathSegments[$length]) - 2);
      }
      let match = image_resolution.AssetImage._extractRatioRegExp.firstMatch(directoryPath);
      if (match != null && dart.notNull(match.groupCount) > 0) return core.double.parse(match.group(1));
      return 1;
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return image_resolution.AssetImage.is(other) && other.keyName == this.keyName && dart.equals(other.bundle, this.bundle);
    }
    get hashCode() {
      return ui.hashValues(this.keyName, this.bundle);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "AssetImage")) + "(bundle: " + dart.str(this.bundle) + ", name: \"" + dart.str(this.keyName) + "\")";
    }
  };
  (image_resolution.AssetImage.new = function(assetName, opts) {
    let bundle = opts && 'bundle' in opts ? opts.bundle : null;
    let $package = opts && 'package' in opts ? opts.package : null;
    this[assetName$0] = assetName;
    this[bundle$2] = bundle;
    this[package$0] = $package;
    if (!(assetName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/image_resolution.dart", 134, 15, "assetName != null");
    image_resolution.AssetImage.__proto__.new.call(this);
    ;
  }).prototype = image_resolution.AssetImage.prototype;
  dart.addTypeTests(image_resolution.AssetImage);
  dart.setMethodSignature(image_resolution.AssetImage, () => ({
    __proto__: dart.getMethods(image_resolution.AssetImage.__proto__),
    obtainKey: dart.fnType(async.Future$(image_provider.AssetBundleImageKey), [image_provider.ImageConfiguration]),
    [_chooseVariant]: dart.fnType(core.String, [core.String, image_provider.ImageConfiguration, core.List$(core.String)]),
    [_findNearest]: dart.fnType(core.String, [collection.SplayTreeMap$(core.double, core.String), core.double]),
    [_parseScale]: dart.fnType(core.double, [core.String]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(image_resolution.AssetImage, () => ({
    __proto__: dart.getGetters(image_resolution.AssetImage.__proto__),
    keyName: core.String
  }));
  dart.setLibraryUri(image_resolution.AssetImage, "package:flutter/src/painting/image_resolution.dart");
  dart.setFieldSignature(image_resolution.AssetImage, () => ({
    __proto__: dart.getFields(image_resolution.AssetImage.__proto__),
    assetName: dart.finalFieldType(core.String),
    bundle: dart.finalFieldType(asset_bundle.AssetBundle),
    package: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(image_resolution.AssetImage, ['_equals', 'toString']);
  dart.defineExtensionAccessors(image_resolution.AssetImage, ['hashCode']);
  dart.defineLazy(image_resolution.AssetImage, {
    /*image_resolution.AssetImage._naturalResolution*/get _naturalResolution() {
      return 1;
    },
    /*image_resolution.AssetImage._extractRatioRegExp*/get _extractRatioRegExp() {
      return core.RegExp.new("/?(\\d+(\\.\\d*)?)x$");
    }
  });
  dart.defineLazy(image_resolution, {
    /*image_resolution._kAssetManifestFileName*/get _kAssetManifestFileName() {
      return "AssetManifest.json";
    }
  });
  notched_shapes.NotchedShape = class NotchedShape extends core.Object {};
  (notched_shapes.NotchedShape.new = function() {
    ;
  }).prototype = notched_shapes.NotchedShape.prototype;
  dart.addTypeTests(notched_shapes.NotchedShape);
  dart.setLibraryUri(notched_shapes.NotchedShape, "package:flutter/src/painting/notched_shapes.dart");
  notched_shapes.CircularNotchedRectangle = class CircularNotchedRectangle extends notched_shapes.NotchedShape {
    getOuterPath(host, guest) {
      let t18, t19, t18$, t18$0;
      if (guest == null || !dart.test(host.overlaps(guest))) {
        t18 = ui.Path.new();
        t18.addRect(host);
        return t18;
      }
      let notchRadius = dart.notNull(guest.width) / 2.0;
      let r = notchRadius;
      let a = -1.0 * r - 1;
      let b = dart.notNull(host.top) - dart.notNull(guest.center.dy);
      let n2 = math.sqrt(b * b * r * r * (a * a + b * b - r * r));
      let p2xA = (a * r * r - n2) / (a * a + b * b);
      let p2xB = (a * r * r + n2) / (a * a + b * b);
      let p2yA = math.sqrt(r * r - p2xA * p2xA);
      let p2yB = math.sqrt(r * r - p2xB * p2xB);
      let p = ListOfOffset().new(6);
      p[$_set](0, new ui.Offset.new(a - 15, b));
      p[$_set](1, new ui.Offset.new(a, b));
      let cmp = b < 0 ? -1.0 : 1.0;
      p[$_set](2, cmp * p2yA > cmp * p2yB ? new ui.Offset.new(p2xA, p2yA) : new ui.Offset.new(p2xB, p2yB));
      p[$_set](3, new ui.Offset.new(-1.0 * dart.notNull(p[$_get](2).dx), p[$_get](2).dy));
      p[$_set](4, new ui.Offset.new(-1.0 * dart.notNull(p[$_get](1).dx), p[$_get](1).dy));
      p[$_set](5, new ui.Offset.new(-1.0 * dart.notNull(p[$_get](0).dx), p[$_get](0).dy));
      for (let i = 0; i < dart.notNull(p[$length]); i = i + 1) {
        t18$ = p;
        t19 = i;
        t18$[$_set](t19, t18$[$_get](t19)['+'](guest.center));
      }
      t18$0 = ui.Path.new();
      t18$0.moveTo(host.left, host.top);
      t18$0.lineTo(p[$_get](0).dx, p[$_get](0).dy);
      t18$0.quadraticBezierTo(p[$_get](1).dx, p[$_get](1).dy, p[$_get](2).dx, p[$_get](2).dy);
      t18$0.arcToPoint(p[$_get](3), {radius: new ui.Radius.circular(notchRadius), clockwise: false});
      t18$0.quadraticBezierTo(p[$_get](4).dx, p[$_get](4).dy, p[$_get](5).dx, p[$_get](5).dy);
      t18$0.lineTo(host.right, host.top);
      t18$0.lineTo(host.right, host.bottom);
      t18$0.lineTo(host.left, host.bottom);
      t18$0.close();
      return t18$0;
    }
  };
  (notched_shapes.CircularNotchedRectangle.new = function() {
    notched_shapes.CircularNotchedRectangle.__proto__.new.call(this);
    ;
  }).prototype = notched_shapes.CircularNotchedRectangle.prototype;
  dart.addTypeTests(notched_shapes.CircularNotchedRectangle);
  dart.setMethodSignature(notched_shapes.CircularNotchedRectangle, () => ({
    __proto__: dart.getMethods(notched_shapes.CircularNotchedRectangle.__proto__),
    getOuterPath: dart.fnType(ui.Path, [ui.Rect, ui.Rect])
  }));
  dart.setLibraryUri(notched_shapes.CircularNotchedRectangle, "package:flutter/src/painting/notched_shapes.dart");
  var host$ = dart.privateName(notched_shapes, "AutomaticNotchedShape.host");
  var guest$ = dart.privateName(notched_shapes, "AutomaticNotchedShape.guest");
  notched_shapes.AutomaticNotchedShape = class AutomaticNotchedShape extends notched_shapes.NotchedShape {
    get host() {
      return this[host$];
    }
    set host(value) {
      super.host = value;
    }
    get guest() {
      return this[guest$];
    }
    set guest(value) {
      super.guest = value;
    }
    getOuterPath(hostRect, guestRect) {
      let hostPath = this.host.getOuterPath(hostRect);
      if (this.guest != null && guestRect != null) {
        let guestPath = this.guest.getOuterPath(guestRect);
        return ui.Path.combine(ui.PathOperation.difference, hostPath, guestPath);
      }
      return hostPath;
    }
  };
  (notched_shapes.AutomaticNotchedShape.new = function(host, guest = null) {
    this[host$] = host;
    this[guest$] = guest;
    notched_shapes.AutomaticNotchedShape.__proto__.new.call(this);
    ;
  }).prototype = notched_shapes.AutomaticNotchedShape.prototype;
  dart.addTypeTests(notched_shapes.AutomaticNotchedShape);
  dart.setMethodSignature(notched_shapes.AutomaticNotchedShape, () => ({
    __proto__: dart.getMethods(notched_shapes.AutomaticNotchedShape.__proto__),
    getOuterPath: dart.fnType(ui.Path, [ui.Rect, ui.Rect])
  }));
  dart.setLibraryUri(notched_shapes.AutomaticNotchedShape, "package:flutter/src/painting/notched_shapes.dart");
  dart.setFieldSignature(notched_shapes.AutomaticNotchedShape, () => ({
    __proto__: dart.getFields(notched_shapes.AutomaticNotchedShape.__proto__),
    host: dart.finalFieldType(borders$.ShapeBorder),
    guest: dart.finalFieldType(borders$.ShapeBorder)
  }));
  geometry.positionDependentBox = function positionDependentBox(opts) {
    let size = opts && 'size' in opts ? opts.size : null;
    let childSize = opts && 'childSize' in opts ? opts.childSize : null;
    let target = opts && 'target' in opts ? opts.target : null;
    let preferBelow = opts && 'preferBelow' in opts ? opts.preferBelow : null;
    let verticalOffset = opts && 'verticalOffset' in opts ? opts.verticalOffset : 0;
    let margin = opts && 'margin' in opts ? opts.margin : 10;
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/geometry.dart", 49, 10, "size != null");
    if (!(childSize != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/geometry.dart", 50, 10, "childSize != null");
    if (!(target != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/geometry.dart", 51, 10, "target != null");
    if (!(verticalOffset != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/geometry.dart", 52, 10, "verticalOffset != null");
    if (!(preferBelow != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/geometry.dart", 53, 10, "preferBelow != null");
    if (!(margin != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/geometry.dart", 54, 10, "margin != null");
    let fitsBelow = dart.notNull(target.dy) + dart.notNull(verticalOffset) + dart.notNull(childSize.height) <= dart.notNull(size.height) - dart.notNull(margin);
    let fitsAbove = dart.notNull(target.dy) - dart.notNull(verticalOffset) - dart.notNull(childSize.height) >= dart.notNull(margin);
    let tooltipBelow = dart.test(preferBelow) ? fitsBelow || !fitsAbove : !(fitsAbove || !fitsBelow);
    let y = null;
    if (tooltipBelow)
      y = math.min(core.double, dart.notNull(target.dy) + dart.notNull(verticalOffset), dart.notNull(size.height) - dart.notNull(margin));
    else
      y = math.max(core.double, dart.notNull(target.dy) - dart.notNull(verticalOffset) - dart.notNull(childSize.height), margin);
    let x = null;
    if (dart.notNull(size.width) - dart.notNull(margin) * 2.0 < dart.notNull(childSize.width)) {
      x = (dart.notNull(size.width) - dart.notNull(childSize.width)) / 2.0;
    } else {
      let normalizedTargetX = target.dx[$clamp](margin, dart.notNull(size.width) - dart.notNull(margin));
      let edge = dart.notNull(margin) + dart.notNull(childSize.width) / 2.0;
      if (normalizedTargetX < edge) {
        x = margin;
      } else if (normalizedTargetX > dart.notNull(size.width) - edge) {
        x = dart.notNull(size.width) - dart.notNull(margin) - dart.notNull(childSize.width);
      } else {
        x = normalizedTargetX - dart.notNull(childSize.width) / 2.0;
      }
    }
    return new ui.Offset.new(x, y);
  };
  image_decoder.decodeImageFromList = function decodeImageFromList(bytes) {
    return async.async(ui.Image, function* decodeImageFromList() {
      let codec = (yield binding$1.PaintingBinding.instance.instantiateImageCodec(bytes));
      let frameInfo = (yield codec.getNextFrame());
      return frameInfo.image;
    });
  };
  paint_utilities.paintZigZag = function paintZigZag(canvas, paint, start, end, zigs, width) {
    let t18;
    if (!zigs[$isFinite]) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/paint_utilities.dart", 24, 10, "zigs.isFinite");
    if (!(dart.notNull(zigs) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/painting/paint_utilities.dart", 25, 10, "zigs > 0");
    canvas.save();
    canvas.translate(start.dx, start.dy);
    end = end['-'](start);
    canvas.rotate(math.atan2(end.dy, end.dx));
    let length = end.distance;
    let spacing = dart.notNull(length) / (dart.notNull(zigs) * 2.0);
    let path = (t18 = ui.Path.new(), t18.moveTo(0.0, 0.0), t18);
    for (let index = 0; index < dart.notNull(zigs); index = index + 1) {
      let x = (index * 2.0 + 1.0) * spacing;
      let y = dart.notNull(width) * (index[$modulo](2.0) * 2.0 - 1.0);
      path.lineTo(x, y);
    }
    path.lineTo(length, 0.0);
    canvas.drawPath(path, paint);
    canvas.restore();
  };
  dart.setBaseClass(image_provider.NetworkImage, image_provider.ImageProvider$(image_provider.NetworkImage));
  dart.setBaseClass(image_provider.FileImage, image_provider.ImageProvider$(image_provider.FileImage));
  dart.setBaseClass(image_provider.MemoryImage, image_provider.ImageProvider$(image_provider.MemoryImage));
  dart.trackLibraries("packages/flutter/src/painting/_network_image_web", {
    "package:flutter/src/painting/clip.dart": clip,
    "package:flutter/src/painting/shape_decoration.dart": shape_decoration,
    "package:flutter/src/painting/rounded_rectangle_border.dart": rounded_rectangle_border,
    "package:flutter/src/painting/edge_insets.dart": edge_insets,
    "package:flutter/src/painting/basic_types.dart": basic_types,
    "package:flutter/src/painting/circle_border.dart": circle_border,
    "package:flutter/src/painting/borders.dart": borders$,
    "package:flutter/src/painting/border_radius.dart": border_radius,
    "package:flutter/src/painting/image_provider.dart": image_provider,
    "package:flutter/src/painting/image_stream.dart": image_stream,
    "package:flutter/src/painting/image_cache.dart": image_cache,
    "package:flutter/src/painting/binding.dart": binding$1,
    "package:flutter/src/painting/shader_warm_up.dart": shader_warm_up,
    "package:flutter/src/painting/_network_image_web.dart": _network_image_web,
    "package:flutter/src/painting/gradient.dart": gradient,
    "package:flutter/src/painting/alignment.dart": alignment,
    "package:flutter/src/painting/decoration_image.dart": decoration_image,
    "package:flutter/src/painting/box_fit.dart": box_fit,
    "package:flutter/src/painting/decoration.dart": decoration,
    "package:flutter/src/painting/colors.dart": colors,
    "package:flutter/src/painting/box_shadow.dart": box_shadow,
    "package:flutter/src/painting/debug.dart": debug$,
    "package:flutter/src/painting/box_decoration.dart": box_decoration,
    "package:flutter/src/painting/box_border.dart": box_border,
    "package:flutter/src/painting/text_style.dart": text_style,
    "package:flutter/src/painting/strut_style.dart": strut_style,
    "package:flutter/src/painting/inline_span.dart": inline_span,
    "package:flutter/src/painting/text_span.dart": text_span,
    "package:flutter/src/painting/text_painter.dart": text_painter,
    "package:flutter/src/painting/placeholder_span.dart": placeholder_span,
    "package:flutter/src/painting/fractional_offset.dart": fractional_offset,
    "package:flutter/src/painting/flutter_logo.dart": flutter_logo,
    "package:flutter/src/painting/stadium_border.dart": stadium_border,
    "package:flutter/src/painting/continuous_rectangle_border.dart": continuous_rectangle_border,
    "package:flutter/src/painting/matrix_utils.dart": matrix_utils,
    "package:flutter/src/painting/beveled_rectangle_border.dart": beveled_rectangle_border,
    "package:flutter/src/painting/image_resolution.dart": image_resolution,
    "package:flutter/src/painting/notched_shapes.dart": notched_shapes,
    "package:flutter/src/painting/geometry.dart": geometry,
    "package:flutter/src/painting/image_decoder.dart": image_decoder,
    "package:flutter/src/painting/paint_utilities.dart": paint_utilities
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["clip.dart","decoration.dart","shape_decoration.dart","borders.dart","rounded_rectangle_border.dart","edge_insets.dart","basic_types.dart","circle_border.dart","border_radius.dart","image_provider.dart","image_stream.dart","image_cache.dart","binding.dart","shader_warm_up.dart","_network_image_web.dart","gradient.dart","alignment.dart","decoration_image.dart","box_fit.dart","colors.dart","box_shadow.dart","debug.dart","box_decoration.dart","box_border.dart","text_style.dart","strut_style.dart","inline_span.dart","text_span.dart","text_painter.dart","placeholder_span.dart","fractional_offset.dart","flutter_logo.dart","stadium_border.dart","continuous_rectangle_border.dart","matrix_utils.dart","beveled_rectangle_border.dart","image_resolution.dart","notched_shapes.dart","geometry.dart","image_decoder.dart","paint_utilities.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"_network_image_web.ddc.js"}');
  // Exports:
  return {
    src__painting__clip: clip,
    src__painting__shape_decoration: shape_decoration,
    src__painting__rounded_rectangle_border: rounded_rectangle_border,
    src__painting__edge_insets: edge_insets,
    src__painting__basic_types: basic_types,
    src__painting__circle_border: circle_border,
    src__painting__borders: borders$,
    src__painting__border_radius: border_radius,
    src__painting__image_provider: image_provider,
    src__painting__image_stream: image_stream,
    src__painting__image_cache: image_cache,
    src__painting__binding: binding$1,
    src__painting__shader_warm_up: shader_warm_up,
    src__painting___network_image_web: _network_image_web,
    src__painting__gradient: gradient,
    src__painting__alignment: alignment,
    src__painting__decoration_image: decoration_image,
    src__painting__box_fit: box_fit,
    src__painting__decoration: decoration,
    src__painting__colors: colors,
    src__painting__box_shadow: box_shadow,
    src__painting__debug: debug$,
    src__painting__box_decoration: box_decoration,
    src__painting__box_border: box_border,
    src__painting__text_style: text_style,
    src__painting__strut_style: strut_style,
    src__painting__inline_span: inline_span,
    src__painting__text_span: text_span,
    src__painting__text_painter: text_painter,
    src__painting__placeholder_span: placeholder_span,
    src__painting__fractional_offset: fractional_offset,
    src__painting__flutter_logo: flutter_logo,
    src__painting__stadium_border: stadium_border,
    src__painting__continuous_rectangle_border: continuous_rectangle_border,
    src__painting__matrix_utils: matrix_utils,
    src__painting__beveled_rectangle_border: beveled_rectangle_border,
    src__painting__image_resolution: image_resolution,
    src__painting__notched_shapes: notched_shapes,
    src__painting__geometry: geometry,
    src__painting__image_decoder: image_decoder,
    src__painting__paint_utilities: paint_utilities
  };
});

//# sourceMappingURL=_network_image_web.ddc.js.map
