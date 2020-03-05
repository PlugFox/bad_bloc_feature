define(['dart_sdk', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/gestures/arena', 'packages/vector_math/vector_math_64'], function(dart_sdk, packages__flutter__src__foundation___bitfield_web, packages__flutter__src__painting___network_image_web, packages__flutter__src__gestures__arena, packages__vector_math__vector_math_64) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const _native_typed_data = dart_sdk._native_typed_data;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const object = packages__flutter__src__foundation___bitfield_web.src__foundation__object;
  const diagnostics = packages__flutter__src__foundation___bitfield_web.src__foundation__diagnostics;
  const collections = packages__flutter__src__foundation___bitfield_web.src__foundation__collections;
  const assertions = packages__flutter__src__foundation___bitfield_web.src__foundation__assertions;
  const node = packages__flutter__src__foundation___bitfield_web.src__foundation__node;
  const key = packages__flutter__src__foundation___bitfield_web.src__foundation__key;
  const change_notifier = packages__flutter__src__foundation___bitfield_web.src__foundation__change_notifier;
  const binding = packages__flutter__src__foundation___bitfield_web.src__foundation__binding;
  const matrix_utils = packages__flutter__src__painting___network_image_web.src__painting__matrix_utils;
  const text_editing = packages__flutter__src__gestures__arena.src__services__text_editing;
  const system_channels = packages__flutter__src__gestures__arena.src__services__system_channels;
  const vector_math_64 = packages__vector_math__vector_math_64.vector_math_64;
  var debug = Object.create(dart.library);
  var semantics = Object.create(dart.library);
  var semantics_event = Object.create(dart.library);
  var binding$ = Object.create(dart.library);
  var semantics_service = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $_equals = dartx._equals;
  var $values = dartx.values;
  var $add = dartx.add;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $length = dartx.length;
  var $modulo = dartx['%'];
  var $any = dartx.any;
  var $isNotEmpty = dartx.isNotEmpty;
  var $forEach = dartx.forEach;
  var $containsKey = dartx.containsKey;
  var $remove = dartx.remove;
  var $isEmpty = dartx.isEmpty;
  var $keys = dartx.keys;
  var $sort = dartx.sort;
  var $addAll = dartx.addAll;
  var $clear = dartx.clear;
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $split = dartx.split;
  var $take = dartx.take;
  var $substring = dartx.substring;
  var $join = dartx.join;
  var $where = dartx.where;
  var $isFinite = dartx.isFinite;
  var $sign = dartx.sign;
  var $toInt = dartx.toInt;
  var $compareTo = dartx.compareTo;
  var $reversed = dartx.reversed;
  var $expand = dartx.expand;
  var $cast = dartx.cast;
  var IdentityMapOfint$CustomSemanticsAction = () => (IdentityMapOfint$CustomSemanticsAction = dart.constFn(_js_helper.IdentityMap$(core.int, semantics.CustomSemanticsAction)))();
  var LinkedMapOfCustomSemanticsAction$int = () => (LinkedMapOfCustomSemanticsAction$int = dart.constFn(_js_helper.LinkedMap$(semantics.CustomSemanticsAction, core.int)))();
  var DiagnosticsPropertyOfRect = () => (DiagnosticsPropertyOfRect = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Rect)))();
  var JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  var intToString = () => (intToString = dart.constFn(dart.fnType(core.String, [core.int])))();
  var IterablePropertyOfString = () => (IterablePropertyOfString = dart.constFn(diagnostics.IterableProperty$(core.String)))();
  var EnumPropertyOfTextDirection = () => (EnumPropertyOfTextDirection = dart.constFn(diagnostics.EnumProperty$(ui.TextDirection)))();
  var SemanticsNodeTobool = () => (SemanticsNodeTobool = dart.constFn(dart.fnType(core.bool, [semantics.SemanticsNode])))();
  var JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  var ListOfSemanticsNode = () => (ListOfSemanticsNode = dart.constFn(core.List$(semantics.SemanticsNode)))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var LinkedHashSetOfSemanticsNode = () => (LinkedHashSetOfSemanticsNode = dart.constFn(collection.LinkedHashSet$(semantics.SemanticsNode)))();
  var dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  var LinkedHashMapOfSemanticsAction$dynamicTovoid = () => (LinkedHashMapOfSemanticsAction$dynamicTovoid = dart.constFn(collection.LinkedHashMap$(ui.SemanticsAction, dynamicTovoid())))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var LinkedHashMapOfCustomSemanticsAction$VoidTovoid = () => (LinkedHashMapOfCustomSemanticsAction$VoidTovoid = dart.constFn(collection.LinkedHashMap$(semantics.CustomSemanticsAction, VoidTovoid())))();
  var LinkedHashSetOfSemanticsTag = () => (LinkedHashSetOfSemanticsTag = dart.constFn(collection.LinkedHashSet$(semantics.SemanticsTag)))();
  var LinkedHashSetOfint = () => (LinkedHashSetOfint = dart.constFn(collection.LinkedHashSet$(core.int)))();
  var JSArrayOf_TraversalSortNode = () => (JSArrayOf_TraversalSortNode = dart.constFn(_interceptors.JSArray$(semantics._TraversalSortNode)))();
  var _TraversalSortNodeToSemanticsNode = () => (_TraversalSortNodeToSemanticsNode = dart.constFn(dart.fnType(semantics.SemanticsNode, [semantics._TraversalSortNode])))();
  var DiagnosticsPropertyOfSemanticsOwner = () => (DiagnosticsPropertyOfSemanticsOwner = dart.constFn(diagnostics.DiagnosticsProperty$(semantics.SemanticsOwner)))();
  var StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  var SemanticsTagToString = () => (SemanticsTagToString = dart.constFn(dart.fnType(core.String, [semantics.SemanticsTag])))();
  var SemanticsActionToString = () => (SemanticsActionToString = dart.constFn(dart.fnType(core.String, [ui.SemanticsAction])))();
  var CustomSemanticsActionToString = () => (CustomSemanticsActionToString = dart.constFn(dart.fnType(core.String, [semantics.CustomSemanticsAction])))();
  var SemanticsFlagTobool = () => (SemanticsFlagTobool = dart.constFn(dart.fnType(core.bool, [ui.SemanticsFlag])))();
  var SemanticsFlagToString = () => (SemanticsFlagToString = dart.constFn(dart.fnType(core.String, [ui.SemanticsFlag])))();
  var DiagnosticsPropertyOfSemanticsSortKey = () => (DiagnosticsPropertyOfSemanticsSortKey = dart.constFn(diagnostics.DiagnosticsProperty$(semantics.SemanticsSortKey)))();
  var SemanticsNodeToDiagnosticsNode = () => (SemanticsNodeToDiagnosticsNode = dart.constFn(dart.fnType(diagnostics.DiagnosticsNode, [semantics.SemanticsNode])))();
  var DiagnosticsPropertyOfbool = () => (DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))();
  var DiagnosticsPropertyOfSemanticsHintOverrides = () => (DiagnosticsPropertyOfSemanticsHintOverrides = dart.constFn(diagnostics.DiagnosticsProperty$(semantics.SemanticsHintOverrides)))();
  var JSArrayOfSemanticsNode = () => (JSArrayOfSemanticsNode = dart.constFn(_interceptors.JSArray$(semantics.SemanticsNode)))();
  var JSArrayOf_BoxEdge = () => (JSArrayOf_BoxEdge = dart.constFn(_interceptors.JSArray$(semantics._BoxEdge)))();
  var JSArrayOf_SemanticsSortGroup = () => (JSArrayOf_SemanticsSortGroup = dart.constFn(_interceptors.JSArray$(semantics._SemanticsSortGroup)))();
  var _SemanticsSortGroupToListOfSemanticsNode = () => (_SemanticsSortGroupToListOfSemanticsNode = dart.constFn(dart.fnType(ListOfSemanticsNode(), [semantics._SemanticsSortGroup])))();
  var IdentityMapOfint$SemanticsNode = () => (IdentityMapOfint$SemanticsNode = dart.constFn(_js_helper.IdentityMap$(core.int, semantics.SemanticsNode)))();
  var IdentityMapOfint$int = () => (IdentityMapOfint$int = dart.constFn(_js_helper.IdentityMap$(core.int, core.int)))();
  var JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  var SemanticsNodeAndSemanticsNodeToint = () => (SemanticsNodeAndSemanticsNodeToint = dart.constFn(dart.fnType(core.int, [semantics.SemanticsNode, semantics.SemanticsNode])))();
  var intTovoid = () => (intTovoid = dart.constFn(dart.fnType(dart.void, [core.int])))();
  var SemanticsNodeToint = () => (SemanticsNodeToint = dart.constFn(dart.fnType(core.int, [semantics.SemanticsNode])))();
  var intToSemanticsNode = () => (intToSemanticsNode = dart.constFn(dart.fnType(semantics.SemanticsNode, [core.int])))();
  var LinkedMapOfSemanticsAction$dynamicTovoid = () => (LinkedMapOfSemanticsAction$dynamicTovoid = dart.constFn(_js_helper.LinkedMap$(ui.SemanticsAction, dynamicTovoid())))();
  var LinkedMapOfCustomSemanticsAction$VoidTovoid = () => (LinkedMapOfCustomSemanticsAction$VoidTovoid = dart.constFn(_js_helper.LinkedMap$(semantics.CustomSemanticsAction, VoidTovoid())))();
  var dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], diagnostics.DiagnosticsNode);
    },
    get C1() {
      return C1 = dart.constList([], semantics.SemanticsNode);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: diagnostics.DiagnosticLevel.prototype,
        [_name]: "DiagnosticLevel.debug",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: semantics.DebugSemanticsDumpOrder.prototype,
        [_name$]: "DebugSemanticsDumpOrder.traversalOrder",
        index: 1
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: diagnostics.DiagnosticsTreeStyle.prototype,
        [_name]: "DiagnosticsTreeStyle.sparse",
        index: 1
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: semantics.DebugSemanticsDumpOrder.prototype,
        [_name$]: "DebugSemanticsDumpOrder.inverseHitTest",
        index: 0
      });
    },
    get C6() {
      return C6 = dart.constList([C5 || CT.C5, C3 || CT.C3], semantics.DebugSemanticsDumpOrder);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name$0]: "TextDirection.rtl",
        index: 0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name$0]: "TextDirection.ltr",
        index: 1
      });
    },
    get C9() {
      return C9 = dart.constMap(core.String, dart.dynamic, []);
    }
  });
  dart.defineLazy(debug, {
    /*debug.debugSemanticsDisableAnimations*/get debugSemanticsDisableAnimations() {
      return null;
    },
    set debugSemanticsDisableAnimations(_) {}
  });
  var name$ = dart.privateName(semantics, "SemanticsTag.name");
  semantics.SemanticsTag = class SemanticsTag extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "SemanticsTag")) + "(" + dart.str(this.name) + ")";
    }
  };
  (semantics.SemanticsTag.new = function(name) {
    this[name$] = name;
    ;
  }).prototype = semantics.SemanticsTag.prototype;
  dart.addTypeTests(semantics.SemanticsTag);
  dart.setLibraryUri(semantics.SemanticsTag, "package:flutter/src/semantics/semantics.dart");
  dart.setFieldSignature(semantics.SemanticsTag, () => ({
    __proto__: dart.getFields(semantics.SemanticsTag.__proto__),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(semantics.SemanticsTag, ['toString']);
  var label$ = dart.privateName(semantics, "CustomSemanticsAction.label");
  var hint$ = dart.privateName(semantics, "CustomSemanticsAction.hint");
  var action$ = dart.privateName(semantics, "CustomSemanticsAction.action");
  semantics.CustomSemanticsAction = class CustomSemanticsAction extends core.Object {
    get label() {
      return this[label$];
    }
    set label(value) {
      super.label = value;
    }
    get hint() {
      return this[hint$];
    }
    set hint(value) {
      super.hint = value;
    }
    get action() {
      return this[action$];
    }
    set action(value) {
      super.action = value;
    }
    get hashCode() {
      return ui.hashValues(this.label, this.hint, this.action);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return semantics.CustomSemanticsAction.is(other) && other.label == this.label && other.hint == this.hint && dart.equals(other.action, this.action);
    }
    toString() {
      return "CustomSemanticsAction(" + dart.str(semantics.CustomSemanticsAction._ids[$_get](this)) + ", label:" + dart.str(this.label) + ", hint:" + dart.str(this.hint) + ", action:" + dart.str(this.action) + ")";
    }
    static getIdentifier(action) {
      let t0;
      let result = semantics.CustomSemanticsAction._ids[$_get](action);
      if (result == null) {
        result = (t0 = semantics.CustomSemanticsAction._nextId, semantics.CustomSemanticsAction._nextId = dart.notNull(t0) + 1, t0);
        semantics.CustomSemanticsAction._ids[$_set](action, result);
        semantics.CustomSemanticsAction._actions[$_set](result, action);
      }
      return result;
    }
    static getAction(id) {
      return semantics.CustomSemanticsAction._actions[$_get](id);
    }
  };
  (semantics.CustomSemanticsAction.new = function(opts) {
    let label = opts && 'label' in opts ? opts.label : null;
    this[label$] = label;
    if (!(label != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 101, 14, "label != null");
    if (!(label !== "")) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 102, 14, "label != ''");
    this[hint$] = null;
    this[action$] = null;
    ;
  }).prototype = semantics.CustomSemanticsAction.prototype;
  (semantics.CustomSemanticsAction.overridingAction = function(opts) {
    let hint = opts && 'hint' in opts ? opts.hint : null;
    let action = opts && 'action' in opts ? opts.action : null;
    this[hint$] = hint;
    this[action$] = action;
    if (!(hint != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 111, 14, "hint != null");
    if (!(hint !== "")) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 112, 14, "hint != ''");
    if (!(action != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 113, 14, "action != null");
    this[label$] = null;
    ;
  }).prototype = semantics.CustomSemanticsAction.prototype;
  dart.addTypeTests(semantics.CustomSemanticsAction);
  dart.setMethodSignature(semantics.CustomSemanticsAction, () => ({
    __proto__: dart.getMethods(semantics.CustomSemanticsAction.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(semantics.CustomSemanticsAction, "package:flutter/src/semantics/semantics.dart");
  dart.setFieldSignature(semantics.CustomSemanticsAction, () => ({
    __proto__: dart.getFields(semantics.CustomSemanticsAction.__proto__),
    label: dart.finalFieldType(core.String),
    hint: dart.finalFieldType(core.String),
    action: dart.finalFieldType(ui.SemanticsAction)
  }));
  dart.defineExtensionMethods(semantics.CustomSemanticsAction, ['_equals', 'toString']);
  dart.defineExtensionAccessors(semantics.CustomSemanticsAction, ['hashCode']);
  dart.defineLazy(semantics.CustomSemanticsAction, {
    /*semantics.CustomSemanticsAction._nextId*/get _nextId() {
      return 0;
    },
    set _nextId(_) {},
    /*semantics.CustomSemanticsAction._actions*/get _actions() {
      return new (IdentityMapOfint$CustomSemanticsAction()).new();
    },
    /*semantics.CustomSemanticsAction._ids*/get _ids() {
      return new (LinkedMapOfCustomSemanticsAction$int()).new();
    }
  });
  var flags$ = dart.privateName(semantics, "SemanticsData.flags");
  var actions$ = dart.privateName(semantics, "SemanticsData.actions");
  var label$0 = dart.privateName(semantics, "SemanticsData.label");
  var value$ = dart.privateName(semantics, "SemanticsData.value");
  var increasedValue$ = dart.privateName(semantics, "SemanticsData.increasedValue");
  var decreasedValue$ = dart.privateName(semantics, "SemanticsData.decreasedValue");
  var hint$0 = dart.privateName(semantics, "SemanticsData.hint");
  var textDirection$ = dart.privateName(semantics, "SemanticsData.textDirection");
  var textSelection$ = dart.privateName(semantics, "SemanticsData.textSelection");
  var scrollChildCount$ = dart.privateName(semantics, "SemanticsData.scrollChildCount");
  var scrollIndex$ = dart.privateName(semantics, "SemanticsData.scrollIndex");
  var scrollPosition$ = dart.privateName(semantics, "SemanticsData.scrollPosition");
  var scrollExtentMax$ = dart.privateName(semantics, "SemanticsData.scrollExtentMax");
  var scrollExtentMin$ = dart.privateName(semantics, "SemanticsData.scrollExtentMin");
  var platformViewId$ = dart.privateName(semantics, "SemanticsData.platformViewId");
  var maxValueLength$ = dart.privateName(semantics, "SemanticsData.maxValueLength");
  var currentValueLength$ = dart.privateName(semantics, "SemanticsData.currentValueLength");
  var rect$ = dart.privateName(semantics, "SemanticsData.rect");
  var tags$ = dart.privateName(semantics, "SemanticsData.tags");
  var transform$ = dart.privateName(semantics, "SemanticsData.transform");
  var elevation$ = dart.privateName(semantics, "SemanticsData.elevation");
  var thickness$ = dart.privateName(semantics, "SemanticsData.thickness");
  var customSemanticsActionIds$ = dart.privateName(semantics, "SemanticsData.customSemanticsActionIds");
  semantics.SemanticsData = class SemanticsData extends diagnostics.Diagnosticable {
    get flags() {
      return this[flags$];
    }
    set flags(value) {
      super.flags = value;
    }
    get actions() {
      return this[actions$];
    }
    set actions(value) {
      super.actions = value;
    }
    get label() {
      return this[label$0];
    }
    set label(value) {
      super.label = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    get increasedValue() {
      return this[increasedValue$];
    }
    set increasedValue(value) {
      super.increasedValue = value;
    }
    get decreasedValue() {
      return this[decreasedValue$];
    }
    set decreasedValue(value) {
      super.decreasedValue = value;
    }
    get hint() {
      return this[hint$0];
    }
    set hint(value) {
      super.hint = value;
    }
    get textDirection() {
      return this[textDirection$];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    get textSelection() {
      return this[textSelection$];
    }
    set textSelection(value) {
      super.textSelection = value;
    }
    get scrollChildCount() {
      return this[scrollChildCount$];
    }
    set scrollChildCount(value) {
      super.scrollChildCount = value;
    }
    get scrollIndex() {
      return this[scrollIndex$];
    }
    set scrollIndex(value) {
      super.scrollIndex = value;
    }
    get scrollPosition() {
      return this[scrollPosition$];
    }
    set scrollPosition(value) {
      super.scrollPosition = value;
    }
    get scrollExtentMax() {
      return this[scrollExtentMax$];
    }
    set scrollExtentMax(value) {
      super.scrollExtentMax = value;
    }
    get scrollExtentMin() {
      return this[scrollExtentMin$];
    }
    set scrollExtentMin(value) {
      super.scrollExtentMin = value;
    }
    get platformViewId() {
      return this[platformViewId$];
    }
    set platformViewId(value) {
      super.platformViewId = value;
    }
    get maxValueLength() {
      return this[maxValueLength$];
    }
    set maxValueLength(value) {
      super.maxValueLength = value;
    }
    get currentValueLength() {
      return this[currentValueLength$];
    }
    set currentValueLength(value) {
      super.currentValueLength = value;
    }
    get rect() {
      return this[rect$];
    }
    set rect(value) {
      super.rect = value;
    }
    get tags() {
      return this[tags$];
    }
    set tags(value) {
      super.tags = value;
    }
    get transform() {
      return this[transform$];
    }
    set transform(value) {
      super.transform = value;
    }
    get elevation() {
      return this[elevation$];
    }
    set elevation(value) {
      super.elevation = value;
    }
    get thickness() {
      return this[thickness$];
    }
    set thickness(value) {
      super.thickness = value;
    }
    get customSemanticsActionIds() {
      return this[customSemanticsActionIds$];
    }
    set customSemanticsActionIds(value) {
      super.customSemanticsActionIds = value;
    }
    hasFlag(flag) {
      return (dart.notNull(this.flags) & dart.notNull(flag.index)) !== 0;
    }
    hasAction(action) {
      return (dart.notNull(this.actions) & dart.notNull(action.index)) !== 0;
    }
    toStringShort() {
      return object.objectRuntimeType(this, "SemanticsData");
    }
    debugFillProperties(properties) {
      let t2;
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfRect()).new("rect", this.rect, {showName: false}));
      properties.add(new matrix_utils.TransformProperty.new("transform", this.transform, {showName: false, defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("elevation", this.elevation, {defaultValue: 0.0}));
      properties.add(new diagnostics.DoubleProperty.new("thickness", this.thickness, {defaultValue: 0.0}));
      let actionSummary = (() => {
        let t0 = JSArrayOfString().of([]);
        for (let action of ui.SemanticsAction.values[$values])
          if ((dart.notNull(this.actions) & dart.notNull(action.index)) !== 0) t0[$add](diagnostics.describeEnum(action));
        return t0;
      })();
      let customSemanticsActionSummary = this.customSemanticsActionIds[$map](core.String, dart.fn(actionId => semantics.CustomSemanticsAction.getAction(actionId).label, intToString()))[$toList]();
      properties.add(new (IterablePropertyOfString()).new("actions", actionSummary, {ifEmpty: null}));
      properties.add(new (IterablePropertyOfString()).new("customActions", customSemanticsActionSummary, {ifEmpty: null}));
      let flagSummary = (() => {
        let t1 = JSArrayOfString().of([]);
        for (let flag of ui.SemanticsFlag.values[$values])
          if ((dart.notNull(this.flags) & dart.notNull(flag.index)) !== 0) t1[$add](diagnostics.describeEnum(flag));
        return t1;
      })();
      properties.add(new (IterablePropertyOfString()).new("flags", flagSummary, {ifEmpty: null}));
      properties.add(new diagnostics.StringProperty.new("label", this.label, {defaultValue: ""}));
      properties.add(new diagnostics.StringProperty.new("value", this.value, {defaultValue: ""}));
      properties.add(new diagnostics.StringProperty.new("increasedValue", this.increasedValue, {defaultValue: ""}));
      properties.add(new diagnostics.StringProperty.new("decreasedValue", this.decreasedValue, {defaultValue: ""}));
      properties.add(new diagnostics.StringProperty.new("hint", this.hint, {defaultValue: ""}));
      properties.add(new (EnumPropertyOfTextDirection()).new("textDirection", this.textDirection, {defaultValue: null}));
      if (dart.equals((t2 = this.textSelection, t2 == null ? null : t2.isValid), true)) properties.add(new diagnostics.MessageProperty.new("textSelection", "[" + dart.str(this.textSelection.start) + ", " + dart.str(this.textSelection.end) + "]"));
      properties.add(new diagnostics.IntProperty.new("platformViewId", this.platformViewId, {defaultValue: null}));
      properties.add(new diagnostics.IntProperty.new("maxValueLength", this.maxValueLength, {defaultValue: null}));
      properties.add(new diagnostics.IntProperty.new("currentValueLength", this.currentValueLength, {defaultValue: null}));
      properties.add(new diagnostics.IntProperty.new("scrollChildren", this.scrollChildCount, {defaultValue: null}));
      properties.add(new diagnostics.IntProperty.new("scrollIndex", this.scrollIndex, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("scrollExtentMin", this.scrollExtentMin, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("scrollPosition", this.scrollPosition, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("scrollExtentMax", this.scrollExtentMax, {defaultValue: null}));
    }
    _equals(other) {
      if (other == null) return false;
      return semantics.SemanticsData.is(other) && other.flags == this.flags && other.actions == this.actions && other.label == this.label && other.value == this.value && other.increasedValue == this.increasedValue && other.decreasedValue == this.decreasedValue && other.hint == this.hint && dart.equals(other.textDirection, this.textDirection) && dart.equals(other.rect, this.rect) && dart.test(collections.setEquals(semantics.SemanticsTag, other.tags, this.tags)) && other.scrollChildCount == this.scrollChildCount && other.scrollIndex == this.scrollIndex && dart.equals(other.textSelection, this.textSelection) && other.scrollPosition == this.scrollPosition && other.scrollExtentMax == this.scrollExtentMax && other.scrollExtentMin == this.scrollExtentMin && other.platformViewId == this.platformViewId && other.maxValueLength == this.maxValueLength && other.currentValueLength == this.currentValueLength && dart.equals(other.transform, this.transform) && other.elevation == this.elevation && other.thickness == this.thickness && dart.test(semantics.SemanticsData._sortedListsEqual(other.customSemanticsActionIds, this.customSemanticsActionIds));
    }
    get hashCode() {
      return ui.hashValues(ui.hashValues(this.flags, this.actions, this.label, this.value, this.increasedValue, this.decreasedValue, this.hint, this.textDirection, this.rect, this.tags, this.textSelection, this.scrollChildCount, this.scrollIndex, this.scrollPosition, this.scrollExtentMax, this.scrollExtentMin, this.platformViewId, this.maxValueLength, this.currentValueLength, this.transform), this.elevation, this.thickness, ui.hashList(this.customSemanticsActionIds));
    }
    static _sortedListsEqual(left, right) {
      if (left == null && right == null) return true;
      if (left != null && right != null) {
        if (left[$length] != right[$length]) return false;
        for (let i = 0; i < dart.notNull(left[$length]); i = i + 1)
          if (left[$_get](i) != right[$_get](i)) return false;
        return true;
      }
      return false;
    }
  };
  (semantics.SemanticsData.new = function(opts) {
    let flags = opts && 'flags' in opts ? opts.flags : null;
    let actions = opts && 'actions' in opts ? opts.actions : null;
    let label = opts && 'label' in opts ? opts.label : null;
    let increasedValue = opts && 'increasedValue' in opts ? opts.increasedValue : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let decreasedValue = opts && 'decreasedValue' in opts ? opts.decreasedValue : null;
    let hint = opts && 'hint' in opts ? opts.hint : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let rect = opts && 'rect' in opts ? opts.rect : null;
    let elevation = opts && 'elevation' in opts ? opts.elevation : null;
    let thickness = opts && 'thickness' in opts ? opts.thickness : null;
    let textSelection = opts && 'textSelection' in opts ? opts.textSelection : null;
    let scrollIndex = opts && 'scrollIndex' in opts ? opts.scrollIndex : null;
    let scrollChildCount = opts && 'scrollChildCount' in opts ? opts.scrollChildCount : null;
    let scrollPosition = opts && 'scrollPosition' in opts ? opts.scrollPosition : null;
    let scrollExtentMax = opts && 'scrollExtentMax' in opts ? opts.scrollExtentMax : null;
    let scrollExtentMin = opts && 'scrollExtentMin' in opts ? opts.scrollExtentMin : null;
    let platformViewId = opts && 'platformViewId' in opts ? opts.platformViewId : null;
    let maxValueLength = opts && 'maxValueLength' in opts ? opts.maxValueLength : null;
    let currentValueLength = opts && 'currentValueLength' in opts ? opts.currentValueLength : null;
    let tags = opts && 'tags' in opts ? opts.tags : null;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let customSemanticsActionIds = opts && 'customSemanticsActionIds' in opts ? opts.customSemanticsActionIds : null;
    this[flags$] = flags;
    this[actions$] = actions;
    this[label$0] = label;
    this[increasedValue$] = increasedValue;
    this[value$] = value;
    this[decreasedValue$] = decreasedValue;
    this[hint$0] = hint;
    this[textDirection$] = textDirection;
    this[rect$] = rect;
    this[elevation$] = elevation;
    this[thickness$] = thickness;
    this[textSelection$] = textSelection;
    this[scrollIndex$] = scrollIndex;
    this[scrollChildCount$] = scrollChildCount;
    this[scrollPosition$] = scrollPosition;
    this[scrollExtentMax$] = scrollExtentMax;
    this[scrollExtentMin$] = scrollExtentMin;
    this[platformViewId$] = platformViewId;
    this[maxValueLength$] = maxValueLength;
    this[currentValueLength$] = currentValueLength;
    this[tags$] = tags;
    this[transform$] = transform;
    this[customSemanticsActionIds$] = customSemanticsActionIds;
    if (!(flags != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 205, 15, "flags != null");
    if (!(actions != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 206, 15, "actions != null");
    if (!(label != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 207, 15, "label != null");
    if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 208, 15, "value != null");
    if (!(decreasedValue != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 209, 15, "decreasedValue != null");
    if (!(increasedValue != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 210, 15, "increasedValue != null");
    if (!(hint != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 211, 15, "hint != null");
    if (!(label === "" || textDirection != null)) dart.assertFailed("A SemanticsData object with label \"" + dart.str(label) + "\" had a null textDirection.", "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 212, 15, "label == '' || textDirection != null");
    if (!(value === "" || textDirection != null)) dart.assertFailed("A SemanticsData object with value \"" + dart.str(value) + "\" had a null textDirection.", "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 213, 15, "value == '' || textDirection != null");
    if (!(hint === "" || textDirection != null)) dart.assertFailed("A SemanticsData object with hint \"" + dart.str(hint) + "\" had a null textDirection.", "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 214, 15, "hint == '' || textDirection != null");
    if (!(decreasedValue === "" || textDirection != null)) dart.assertFailed("A SemanticsData object with decreasedValue \"" + dart.str(decreasedValue) + "\" had a null textDirection.", "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 215, 15, "decreasedValue == '' || textDirection != null");
    if (!(increasedValue === "" || textDirection != null)) dart.assertFailed("A SemanticsData object with increasedValue \"" + dart.str(increasedValue) + "\" had a null textDirection.", "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 216, 15, "increasedValue == '' || textDirection != null");
    if (!(rect != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 217, 15, "rect != null");
    semantics.SemanticsData.__proto__.new.call(this);
    ;
  }).prototype = semantics.SemanticsData.prototype;
  dart.addTypeTests(semantics.SemanticsData);
  dart.setMethodSignature(semantics.SemanticsData, () => ({
    __proto__: dart.getMethods(semantics.SemanticsData.__proto__),
    hasFlag: dart.fnType(core.bool, [ui.SemanticsFlag]),
    hasAction: dart.fnType(core.bool, [ui.SemanticsAction]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(semantics.SemanticsData, "package:flutter/src/semantics/semantics.dart");
  dart.setFieldSignature(semantics.SemanticsData, () => ({
    __proto__: dart.getFields(semantics.SemanticsData.__proto__),
    flags: dart.finalFieldType(core.int),
    actions: dart.finalFieldType(core.int),
    label: dart.finalFieldType(core.String),
    value: dart.finalFieldType(core.String),
    increasedValue: dart.finalFieldType(core.String),
    decreasedValue: dart.finalFieldType(core.String),
    hint: dart.finalFieldType(core.String),
    textDirection: dart.finalFieldType(ui.TextDirection),
    textSelection: dart.finalFieldType(text_editing.TextSelection),
    scrollChildCount: dart.finalFieldType(core.int),
    scrollIndex: dart.finalFieldType(core.int),
    scrollPosition: dart.finalFieldType(core.double),
    scrollExtentMax: dart.finalFieldType(core.double),
    scrollExtentMin: dart.finalFieldType(core.double),
    platformViewId: dart.finalFieldType(core.int),
    maxValueLength: dart.finalFieldType(core.int),
    currentValueLength: dart.finalFieldType(core.int),
    rect: dart.finalFieldType(ui.Rect),
    tags: dart.finalFieldType(core.Set$(semantics.SemanticsTag)),
    transform: dart.finalFieldType(vector_math_64.Matrix4),
    elevation: dart.finalFieldType(core.double),
    thickness: dart.finalFieldType(core.double),
    customSemanticsActionIds: dart.finalFieldType(core.List$(core.int))
  }));
  dart.defineExtensionMethods(semantics.SemanticsData, ['_equals']);
  dart.defineExtensionAccessors(semantics.SemanticsData, ['hashCode']);
  var C0;
  var _transform = dart.privateName(semantics, "_transform");
  var _rect = dart.privateName(semantics, "_rect");
  var _isMergedIntoParent = dart.privateName(semantics, "_isMergedIntoParent");
  var _mergeAllDescendantsIntoThisNode = dart.privateName(semantics, "_mergeAllDescendantsIntoThisNode");
  var _children = dart.privateName(semantics, "_children");
  var _debugPreviousSnapshot = dart.privateName(semantics, "_debugPreviousSnapshot");
  var _dead = dart.privateName(semantics, "_dead");
  var _dirty = dart.privateName(semantics, "_dirty");
  var _actions = dart.privateName(semantics, "_actions");
  var _customSemanticsActions = dart.privateName(semantics, "_customSemanticsActions");
  var _actionsAsBits = dart.privateName(semantics, "_actionsAsBits");
  var _flags = dart.privateName(semantics, "_flags");
  var _label = dart.privateName(semantics, "_label");
  var _value = dart.privateName(semantics, "_value");
  var _decreasedValue = dart.privateName(semantics, "_decreasedValue");
  var _increasedValue = dart.privateName(semantics, "_increasedValue");
  var _hint = dart.privateName(semantics, "_hint");
  var _elevation = dart.privateName(semantics, "_elevation");
  var _thickness = dart.privateName(semantics, "_thickness");
  var _hintOverrides = dart.privateName(semantics, "_hintOverrides");
  var _textDirection = dart.privateName(semantics, "_textDirection");
  var _sortKey = dart.privateName(semantics, "_sortKey");
  var _textSelection = dart.privateName(semantics, "_textSelection");
  var _isMultiline = dart.privateName(semantics, "_isMultiline");
  var _scrollChildCount = dart.privateName(semantics, "_scrollChildCount");
  var _scrollIndex = dart.privateName(semantics, "_scrollIndex");
  var _scrollPosition = dart.privateName(semantics, "_scrollPosition");
  var _scrollExtentMax = dart.privateName(semantics, "_scrollExtentMax");
  var _scrollExtentMin = dart.privateName(semantics, "_scrollExtentMin");
  var _platformViewId = dart.privateName(semantics, "_platformViewId");
  var _maxValueLength = dart.privateName(semantics, "_maxValueLength");
  var _currentValueLength = dart.privateName(semantics, "_currentValueLength");
  var _showOnScreen = dart.privateName(semantics, "_showOnScreen");
  var _markDirty = dart.privateName(semantics, "_markDirty");
  var _replaceChildren = dart.privateName(semantics, "_replaceChildren");
  var _visitDescendants = dart.privateName(semantics, "_visitDescendants");
  var _nodes = dart.privateName(semantics, "_nodes");
  var _detachedNodes = dart.privateName(semantics, "_detachedNodes");
  var _dirtyNodes = dart.privateName(semantics, "_dirtyNodes");
  var _isDifferentFromCurrentSemanticAnnotation = dart.privateName(semantics, "_isDifferentFromCurrentSemanticAnnotation");
  var _canPerformAction = dart.privateName(semantics, "_canPerformAction");
  var C1;
  var _childrenInTraversalOrder = dart.privateName(semantics, "_childrenInTraversalOrder");
  var _addToUpdate = dart.privateName(semantics, "_addToUpdate");
  var _name = dart.privateName(diagnostics, "_name");
  var C2;
  var _name$ = dart.privateName(semantics, "_name");
  var C3;
  var C4;
  var C5;
  var key$ = dart.privateName(semantics, "SemanticsNode.key");
  var id = dart.privateName(semantics, "SemanticsNode.id");
  var parentSemanticsClipRect = dart.privateName(semantics, "SemanticsNode.parentSemanticsClipRect");
  var parentPaintClipRect = dart.privateName(semantics, "SemanticsNode.parentPaintClipRect");
  var elevationAdjustment = dart.privateName(semantics, "SemanticsNode.elevationAdjustment");
  var indexInParent = dart.privateName(semantics, "SemanticsNode.indexInParent");
  var tags = dart.privateName(semantics, "SemanticsNode.tags");
  const AbstractNode_DiagnosticableTreeMixin$36 = class AbstractNode_DiagnosticableTreeMixin extends node.AbstractNode {};
  (AbstractNode_DiagnosticableTreeMixin$36.new = function() {
    AbstractNode_DiagnosticableTreeMixin$36.__proto__.new.call(this);
  }).prototype = AbstractNode_DiagnosticableTreeMixin$36.prototype;
  dart.applyMixin(AbstractNode_DiagnosticableTreeMixin$36, diagnostics.DiagnosticableTreeMixin);
  semantics.SemanticsNode = class SemanticsNode extends AbstractNode_DiagnosticableTreeMixin$36 {
    get key() {
      return this[key$];
    }
    set key(value) {
      super.key = value;
    }
    get id() {
      return this[id];
    }
    set id(value) {
      super.id = value;
    }
    get parentSemanticsClipRect() {
      return this[parentSemanticsClipRect];
    }
    set parentSemanticsClipRect(value) {
      this[parentSemanticsClipRect] = value;
    }
    get parentPaintClipRect() {
      return this[parentPaintClipRect];
    }
    set parentPaintClipRect(value) {
      this[parentPaintClipRect] = value;
    }
    get elevationAdjustment() {
      return this[elevationAdjustment];
    }
    set elevationAdjustment(value) {
      this[elevationAdjustment] = value;
    }
    get indexInParent() {
      return this[indexInParent];
    }
    set indexInParent(value) {
      this[indexInParent] = value;
    }
    get tags() {
      return this[tags];
    }
    set tags(value) {
      this[tags] = value;
    }
    static _generateNewId() {
      semantics.SemanticsNode._lastIdentifier = (dart.notNull(semantics.SemanticsNode._lastIdentifier) + 1)[$modulo](65535);
      return semantics.SemanticsNode._lastIdentifier;
    }
    get transform() {
      return this[_transform];
    }
    set transform(value) {
      if (!dart.test(matrix_utils.MatrixUtils.matrixEquals(this[_transform], value))) {
        this[_transform] = dart.test(matrix_utils.MatrixUtils.isIdentity(value)) ? null : value;
        this[_markDirty]();
      }
    }
    get rect() {
      return this[_rect];
    }
    set rect(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1239, 12, "value != null");
      if (!dart.test(value.isFinite)) dart.assertFailed(dart.str(this) + " (with " + dart.str(this.owner) + ") tried to set a non-finite rect.", "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1240, 12, "value.isFinite");
      if (!dart.equals(this[_rect], value)) {
        this[_rect] = value;
        this[_markDirty]();
      }
    }
    get isInvisible() {
      return !dart.test(this.isMergedIntoParent) && dart.test(this.rect.isEmpty);
    }
    get isMergedIntoParent() {
      return this[_isMergedIntoParent];
    }
    set isMergedIntoParent(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1324, 12, "value != null");
      if (dart.equals(this[_isMergedIntoParent], value)) return;
      this[_isMergedIntoParent] = value;
      this[_markDirty]();
    }
    get isPartOfNodeMerging() {
      return dart.test(this.mergeAllDescendantsIntoThisNode) || dart.test(this.isMergedIntoParent);
    }
    get mergeAllDescendantsIntoThisNode() {
      return this[_mergeAllDescendantsIntoThisNode];
    }
    [_replaceChildren](newChildren) {
      let t4;
      if (!!dart.test(newChildren[$any](dart.fn(child => dart.equals(child, this), SemanticsNodeTobool())))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1358, 12, "!newChildren.any((SemanticsNode child) => child == this)");
      if (!dart.test(dart.fn(() => {
        if (newChildren == this[_children]) {
          let mutationErrors = JSArrayOfDiagnosticsNode().of([]);
          if (newChildren[$length] != this[_debugPreviousSnapshot][$length]) {
            mutationErrors[$add](new assertions.ErrorDescription.new("The list's length has changed from " + dart.str(this[_debugPreviousSnapshot][$length]) + " " + "to " + dart.str(newChildren[$length]) + "."));
          } else {
            for (let i = 0; i < dart.notNull(newChildren[$length]); i = i + 1) {
              if (newChildren[$_get](i) != this[_debugPreviousSnapshot][$_get](i)) {
                if (dart.test(mutationErrors[$isNotEmpty])) {
                  mutationErrors[$add](new assertions.ErrorSpacer.new());
                }
                mutationErrors[$add](new assertions.ErrorDescription.new("Child node at position " + dart.str(i) + " was replaced:"));
                mutationErrors[$add](newChildren[$_get](i).toDiagnosticsNode({name: "Previous child", style: diagnostics.DiagnosticsTreeStyle.singleLine}));
                mutationErrors[$add](this[_debugPreviousSnapshot][$_get](i).toDiagnosticsNode({name: "New child", style: diagnostics.DiagnosticsTreeStyle.singleLine}));
              }
            }
          }
          if (dart.test(mutationErrors[$isNotEmpty])) {
            dart.throw(new assertions.FlutterError.fromParts((() => {
              let t2 = JSArrayOfDiagnosticsNode().of([]);
              t2[$add](new assertions.ErrorSummary.new("Failed to replace child semantics nodes because the list of `SemanticsNode`s was mutated."));
              t2[$add](new assertions.ErrorHint.new("Instead of mutating the existing list, create a new list containing the desired `SemanticsNode`s."));
              t2[$add](new assertions.ErrorDescription.new("Error details:"));
              for (let t3 of mutationErrors)
                t2[$add](t3);
              return t2;
            })()));
          }
        }
        if (!(!dart.test(newChildren[$any](dart.fn(node => node.isMergedIntoParent, SemanticsNodeTobool()))) || dart.test(this.isPartOfNodeMerging))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1388, 14, "!newChildren.any((SemanticsNode node) => node.isMergedIntoParent) || isPartOfNodeMerging");
        this[_debugPreviousSnapshot] = ListOfSemanticsNode().from(newChildren);
        let ancestor = this;
        while (semantics.SemanticsNode.is(ancestor.parent))
          ancestor = ancestor.parent;
        if (!!dart.test(newChildren[$any](dart.fn(child => dart.equals(child, ancestor), SemanticsNodeTobool())))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1395, 14, "!newChildren.any((SemanticsNode child) => child == ancestor)");
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1359, 12, "() {\r\n      if (identical(newChildren, _children)) {\r\n        final List<DiagnosticsNode> mutationErrors = <DiagnosticsNode>[];\r\n        if (newChildren.length != _debugPreviousSnapshot.length) {\r\n          mutationErrors.add(ErrorDescription(\r\n            'The list\\'s length has changed from ${_debugPreviousSnapshot.length} '\r\n            'to ${newChildren.length}.'\r\n          ));\r\n        } else {\r\n          for (int i = 0; i < newChildren.length; i++) {\r\n            if (!identical(newChildren[i], _debugPreviousSnapshot[i])) {\r\n              if (mutationErrors.isNotEmpty) {\r\n                mutationErrors.add(ErrorSpacer());\r\n              }\r\n              mutationErrors.add(ErrorDescription('Child node at position $i was replaced:'));\r\n              mutationErrors.add(newChildren[i].toDiagnosticsNode(name: 'Previous child', style: DiagnosticsTreeStyle.singleLine));\r\n              mutationErrors.add(_debugPreviousSnapshot[i].toDiagnosticsNode(name: 'New child', style: DiagnosticsTreeStyle.singleLine));\r\n            }\r\n          }\r\n        }\r\n        if (mutationErrors.isNotEmpty) {\r\n          throw FlutterError.fromParts(<DiagnosticsNode>[\r\n            ErrorSummary('Failed to replace child semantics nodes because the list of `SemanticsNode`s was mutated.'),\r\n            ErrorHint('Instead of mutating the existing list, create a new list containing the desired `SemanticsNode`s.'),\r\n            ErrorDescription('Error details:'),\r\n            ...mutationErrors,\r\n          ]);\r\n        }\r\n      }\r\n      assert(!newChildren.any((SemanticsNode node) => node.isMergedIntoParent) || isPartOfNodeMerging);\r\n\r\n      _debugPreviousSnapshot = List<SemanticsNode>.from(newChildren);\r\n\r\n      SemanticsNode ancestor = this;\r\n      while (ancestor.parent is SemanticsNode)\r\n        ancestor = ancestor.parent;\r\n      assert(!newChildren.any((SemanticsNode child) => child == ancestor));\r\n      return true;\r\n    }()");
      if (!dart.test(dart.fn(() => {
        let seenChildren = LinkedHashSetOfSemanticsNode().new();
        for (let child of newChildren)
          if (!dart.test(seenChildren.add(child))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1401, 16, "seenChildren.add(child)");
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1398, 12, "() {\r\n      final Set<SemanticsNode> seenChildren = <SemanticsNode>{};\r\n      for (final SemanticsNode child in newChildren)\r\n        assert(seenChildren.add(child)); // check for duplicate adds\r\n      return true;\r\n    }()");
      if (this[_children] != null) {
        for (let child of this[_children])
          child[_dead] = true;
      }
      if (newChildren != null) {
        for (let child of newChildren) {
          if (!!dart.test(child.isInvisible)) dart.assertFailed("Child " + dart.str(child) + " is invisible and should not be added as a child of " + dart.str(this) + ".", "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1412, 16, "!child.isInvisible");
          child[_dead] = false;
        }
      }
      let sawChange = false;
      if (this[_children] != null) {
        for (let child of this[_children]) {
          if (dart.test(child[_dead])) {
            if (dart.equals(child.parent, this)) {
              this.dropChild(child);
            }
            sawChange = true;
          }
        }
      }
      if (newChildren != null) {
        for (let child of newChildren) {
          if (!dart.equals(child.parent, this)) {
            if (child.parent != null) {
              t4 = child.parent;
              t4 == null ? null : t4.dropChild(child);
            }
            if (!!dart.test(child.attached)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1440, 18, "!child.attached");
            this.adoptChild(child);
            sawChange = true;
          }
        }
      }
      if (!sawChange && this[_children] != null) {
        if (!(newChildren != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1447, 14, "newChildren != null");
        if (!(newChildren[$length] == this[_children][$length])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1448, 14, "newChildren.length == _children.length");
        for (let i = 0; i < dart.notNull(this[_children][$length]); i = i + 1) {
          if (this[_children][$_get](i).id != newChildren[$_get](i).id) {
            sawChange = true;
            break;
          }
        }
      }
      this[_children] = newChildren;
      if (sawChange) this[_markDirty]();
    }
    get hasChildren() {
      let t4, t4$;
      t4$ = (t4 = this[_children], t4 == null ? null : t4[$isNotEmpty]);
      return t4$ == null ? false : t4$;
    }
    get childrenCount() {
      return dart.test(this.hasChildren) ? this[_children][$length] : 0;
    }
    visitChildren(visitor) {
      if (this[_children] != null) {
        for (let child of this[_children]) {
          if (!dart.test(visitor(child))) return;
        }
      }
    }
    [_visitDescendants](visitor) {
      if (this[_children] != null) {
        for (let child of this[_children]) {
          if (!dart.test(visitor(child)) || !dart.test(child[_visitDescendants](visitor))) return false;
        }
      }
      return true;
    }
    get owner() {
      return semantics.SemanticsOwner.as(super.owner);
    }
    get parent() {
      return semantics.SemanticsNode.as(super.parent);
    }
    redepthChildren() {
      let t4;
      t4 = this[_children];
      t4 == null ? null : t4[$forEach](dart.bind(this, 'redepthChild'));
    }
    attach(owner) {
      semantics.SemanticsOwner._check(owner);
      super.attach(owner);
      if (!!dart.test(owner[_nodes][$containsKey](this.id))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1514, 12, "!owner._nodes.containsKey(id)");
      owner[_nodes][$_set](this.id, this);
      owner[_detachedNodes].remove(this);
      if (dart.test(this[_dirty])) {
        this[_dirty] = false;
        this[_markDirty]();
      }
      if (this[_children] != null) {
        for (let child of this[_children])
          child.attach(owner);
      }
    }
    detach() {
      if (!dart.test(this.owner[_nodes][$containsKey](this.id))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1529, 12, "owner._nodes.containsKey(id)");
      if (!!dart.test(this.owner[_detachedNodes].contains(this))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1530, 12, "!owner._detachedNodes.contains(this)");
      this.owner[_nodes][$remove](this.id);
      this.owner[_detachedNodes].add(this);
      super.detach();
      if (!(this.owner == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1534, 12, "owner == null");
      if (this[_children] != null) {
        for (let child of this[_children]) {
          if (dart.equals(child.parent, this)) child.detach();
        }
      }
      this[_markDirty]();
    }
    [_markDirty]() {
      if (dart.test(this[_dirty])) return;
      this[_dirty] = true;
      if (dart.test(this.attached)) {
        if (!!dart.test(this.owner[_detachedNodes].contains(this))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1557, 14, "!owner._detachedNodes.contains(this)");
        this.owner[_dirtyNodes].add(this);
      }
    }
    [_isDifferentFromCurrentSemanticAnnotation](config) {
      return this[_label] != config.label || this[_hint] != config.hint || this[_elevation] != config.elevation || this[_thickness] != config.thickness || this[_decreasedValue] != config.decreasedValue || this[_value] != config.value || this[_increasedValue] != config.increasedValue || this[_flags] != config[_flags] || !dart.equals(this[_textDirection], config.textDirection) || !dart.equals(this[_sortKey], config[_sortKey]) || !dart.equals(this[_textSelection], config[_textSelection]) || this[_scrollPosition] != config[_scrollPosition] || this[_scrollExtentMax] != config[_scrollExtentMax] || this[_scrollExtentMin] != config[_scrollExtentMin] || this[_actionsAsBits] != config[_actionsAsBits] || this.indexInParent != config.indexInParent || this.platformViewId != config.platformViewId || this[_maxValueLength] != config[_maxValueLength] || this[_currentValueLength] != config[_currentValueLength] || !dart.equals(this[_mergeAllDescendantsIntoThisNode], config.isMergingSemanticsOfDescendants);
    }
    isTagged(tag) {
      return this.tags != null && dart.test(this.tags.contains(tag));
    }
    hasFlag(flag) {
      return (dart.notNull(this[_flags]) & dart.notNull(flag.index)) !== 0;
    }
    get label() {
      return this[_label];
    }
    get value() {
      return this[_value];
    }
    get decreasedValue() {
      return this[_decreasedValue];
    }
    get increasedValue() {
      return this[_increasedValue];
    }
    get hint() {
      return this[_hint];
    }
    get elevation() {
      return this[_elevation];
    }
    get thickness() {
      return this[_thickness];
    }
    get hintOverrides() {
      return this[_hintOverrides];
    }
    get textDirection() {
      return this[_textDirection];
    }
    get sortKey() {
      return this[_sortKey];
    }
    get textSelection() {
      return this[_textSelection];
    }
    get isMultiline() {
      return this[_isMultiline];
    }
    get scrollChildCount() {
      return this[_scrollChildCount];
    }
    get scrollIndex() {
      return this[_scrollIndex];
    }
    get scrollPosition() {
      return this[_scrollPosition];
    }
    get scrollExtentMax() {
      return this[_scrollExtentMax];
    }
    get scrollExtentMin() {
      return this[_scrollExtentMin];
    }
    get platformViewId() {
      return this[_platformViewId];
    }
    get maxValueLength() {
      return this[_maxValueLength];
    }
    get currentValueLength() {
      return this[_currentValueLength];
    }
    [_canPerformAction](action) {
      return this[_actions][$containsKey](action);
    }
    updateWith(opts) {
      let t4;
      let config = opts && 'config' in opts ? opts.config : null;
      let childrenInInversePaintOrder = opts && 'childrenInInversePaintOrder' in opts ? opts.childrenInInversePaintOrder : null;
      config == null ? config = semantics.SemanticsNode._kEmptyConfig : null;
      if (dart.test(this[_isDifferentFromCurrentSemanticAnnotation](config))) this[_markDirty]();
      if (!(config.platformViewId == null || dart.test(childrenInInversePaintOrder[$isEmpty]))) dart.assertFailed("SemanticsNodes with children must not specify a platformViewId.", "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1843, 7, "config.platformViewId == null || childrenInInversePaintOrder.isEmpty");
      this[_label] = config.label;
      this[_decreasedValue] = config.decreasedValue;
      this[_value] = config.value;
      this[_increasedValue] = config.increasedValue;
      this[_hint] = config.hint;
      this[_hintOverrides] = config.hintOverrides;
      this[_elevation] = config.elevation;
      this[_thickness] = config.thickness;
      this[_flags] = config[_flags];
      this[_textDirection] = config.textDirection;
      this[_sortKey] = config.sortKey;
      this[_actions] = LinkedHashMapOfSemanticsAction$dynamicTovoid().from(config[_actions]);
      this[_customSemanticsActions] = LinkedHashMapOfCustomSemanticsAction$VoidTovoid().from(config[_customSemanticsActions]);
      this[_actionsAsBits] = config[_actionsAsBits];
      this[_textSelection] = config[_textSelection];
      this[_isMultiline] = config.isMultiline;
      this[_scrollPosition] = config[_scrollPosition];
      this[_scrollExtentMax] = config[_scrollExtentMax];
      this[_scrollExtentMin] = config[_scrollExtentMin];
      this[_mergeAllDescendantsIntoThisNode] = config.isMergingSemanticsOfDescendants;
      this[_scrollChildCount] = config.scrollChildCount;
      this[_scrollIndex] = config.scrollIndex;
      this.indexInParent = config.indexInParent;
      this[_platformViewId] = config[_platformViewId];
      this[_maxValueLength] = config[_maxValueLength];
      this[_currentValueLength] = config[_currentValueLength];
      this[_replaceChildren]((t4 = childrenInInversePaintOrder, t4 == null ? C1 || CT.C1 : t4));
      if (!(!dart.test(this[_canPerformAction](ui.SemanticsAction.increase)) || (this[_value] === "")[$_equals](this[_increasedValue] === ""))) dart.assertFailed("A SemanticsNode with action \"increase\" needs to be annotated with either both \"value\" and \"increasedValue\" or neither", "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1876, 7, "!_canPerformAction(SemanticsAction.increase) || (_value == '') == (_increasedValue == '')");
      if (!(!dart.test(this[_canPerformAction](ui.SemanticsAction.decrease)) || (this[_value] === "")[$_equals](this[_decreasedValue] === ""))) dart.assertFailed("A SemanticsNode with action \"increase\" needs to be annotated with either both \"value\" and \"decreasedValue\" or neither", "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1880, 7, "!_canPerformAction(SemanticsAction.decrease) || (_value == '') == (_decreasedValue == '')");
    }
    getSemanticsData() {
      let t4;
      let flags = this[_flags];
      let actions = this[_actionsAsBits];
      let label = this[_label];
      let hint = this[_hint];
      let value = this[_value];
      let increasedValue = this[_increasedValue];
      let decreasedValue = this[_decreasedValue];
      let textDirection = this[_textDirection];
      let mergedTags = this.tags == null ? null : LinkedHashSetOfSemanticsTag().from(this.tags);
      let textSelection = this[_textSelection];
      let scrollChildCount = this[_scrollChildCount];
      let scrollIndex = this[_scrollIndex];
      let scrollPosition = this[_scrollPosition];
      let scrollExtentMax = this[_scrollExtentMax];
      let scrollExtentMin = this[_scrollExtentMin];
      let platformViewId = this[_platformViewId];
      let maxValueLength = this[_maxValueLength];
      let currentValueLength = this[_currentValueLength];
      let elevation = this[_elevation];
      let thickness = this[_thickness];
      let customSemanticsActionIds = LinkedHashSetOfint().new();
      for (let action of this[_customSemanticsActions][$keys])
        customSemanticsActionIds.add(semantics.CustomSemanticsAction.getIdentifier(action));
      if (this.hintOverrides != null) {
        if (this.hintOverrides.onTapHint != null) {
          let action = new semantics.CustomSemanticsAction.overridingAction({hint: this.hintOverrides.onTapHint, action: ui.SemanticsAction.tap});
          customSemanticsActionIds.add(semantics.CustomSemanticsAction.getIdentifier(action));
        }
        if (this.hintOverrides.onLongPressHint != null) {
          let action = new semantics.CustomSemanticsAction.overridingAction({hint: this.hintOverrides.onLongPressHint, action: ui.SemanticsAction.longPress});
          customSemanticsActionIds.add(semantics.CustomSemanticsAction.getIdentifier(action));
        }
      }
      if (dart.test(this.mergeAllDescendantsIntoThisNode)) {
        this[_visitDescendants](dart.fn(node => {
          if (!dart.test(node.isMergedIntoParent)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1934, 16, "node.isMergedIntoParent");
          flags = (dart.notNull(flags) | dart.notNull(node[_flags])) >>> 0;
          actions = (dart.notNull(actions) | dart.notNull(node[_actionsAsBits])) >>> 0;
          textDirection == null ? textDirection = node[_textDirection] : null;
          textSelection == null ? textSelection = node[_textSelection] : null;
          scrollChildCount == null ? scrollChildCount = node[_scrollChildCount] : null;
          scrollIndex == null ? scrollIndex = node[_scrollIndex] : null;
          scrollPosition == null ? scrollPosition = node[_scrollPosition] : null;
          scrollExtentMax == null ? scrollExtentMax = node[_scrollExtentMax] : null;
          scrollExtentMin == null ? scrollExtentMin = node[_scrollExtentMin] : null;
          platformViewId == null ? platformViewId = node[_platformViewId] : null;
          maxValueLength == null ? maxValueLength = node[_maxValueLength] : null;
          currentValueLength == null ? currentValueLength = node[_currentValueLength] : null;
          if (value === "" || value == null) value = node[_value];
          if (increasedValue === "" || increasedValue == null) increasedValue = node[_increasedValue];
          if (decreasedValue === "" || decreasedValue == null) decreasedValue = node[_decreasedValue];
          if (node.tags != null) {
            mergedTags == null ? mergedTags = LinkedHashSetOfSemanticsTag().new() : null;
            mergedTags.addAll(node.tags);
          }
          if (node[_customSemanticsActions] != null) {
            for (let action of this[_customSemanticsActions][$keys])
              customSemanticsActionIds.add(semantics.CustomSemanticsAction.getIdentifier(action));
          }
          if (node.hintOverrides != null) {
            if (node.hintOverrides.onTapHint != null) {
              let action = new semantics.CustomSemanticsAction.overridingAction({hint: node.hintOverrides.onTapHint, action: ui.SemanticsAction.tap});
              customSemanticsActionIds.add(semantics.CustomSemanticsAction.getIdentifier(action));
            }
            if (node.hintOverrides.onLongPressHint != null) {
              let action = new semantics.CustomSemanticsAction.overridingAction({hint: node.hintOverrides.onLongPressHint, action: ui.SemanticsAction.longPress});
              customSemanticsActionIds.add(semantics.CustomSemanticsAction.getIdentifier(action));
            }
          }
          label = semantics._concatStrings({thisString: label, thisTextDirection: textDirection, otherString: node[_label], otherTextDirection: node[_textDirection]});
          hint = semantics._concatStrings({thisString: hint, thisTextDirection: textDirection, otherString: node[_hint], otherTextDirection: node[_textDirection]});
          thickness = math.max(core.double, thickness, dart.notNull(node[_thickness]) + dart.notNull(node[_elevation]));
          return true;
        }, SemanticsNodeTobool()));
      }
      return new semantics.SemanticsData.new({flags: flags, actions: actions, label: label, value: value, increasedValue: increasedValue, decreasedValue: decreasedValue, hint: hint, textDirection: textDirection, rect: this.rect, transform: this.transform, elevation: elevation, thickness: thickness, tags: mergedTags, textSelection: textSelection, scrollChildCount: scrollChildCount, scrollIndex: scrollIndex, scrollPosition: scrollPosition, scrollExtentMax: scrollExtentMax, scrollExtentMin: scrollExtentMin, platformViewId: platformViewId, maxValueLength: maxValueLength, currentValueLength: currentValueLength, customSemanticsActionIds: (t4 = customSemanticsActionIds[$toList](), t4[$sort](), t4)});
    }
    static _initIdentityTransform() {
      return vector_math_64.Matrix4.identity().storage;
    }
    [_addToUpdate](builder, customSemanticsActionIdsUpdate) {
      let t4, t4$, t4$0, t4$1, t4$2, t4$3, t4$4, t4$5, t4$6, t4$7, t4$8, t4$9;
      if (!dart.test(this[_dirty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2032, 12, "_dirty");
      let data = this.getSemanticsData();
      let childrenInTraversalOrder = null;
      let childrenInHitTestOrder = null;
      if (!dart.test(this.hasChildren) || dart.test(this.mergeAllDescendantsIntoThisNode)) {
        childrenInTraversalOrder = semantics.SemanticsNode._kEmptyChildList;
        childrenInHitTestOrder = semantics.SemanticsNode._kEmptyChildList;
      } else {
        let childCount = this[_children][$length];
        let sortedChildren = this[_childrenInTraversalOrder]();
        childrenInTraversalOrder = _native_typed_data.NativeInt32List.new(childCount);
        for (let i = 0; i < dart.notNull(childCount); i = i + 1) {
          childrenInTraversalOrder[$_set](i, sortedChildren[$_get](i).id);
        }
        childrenInHitTestOrder = _native_typed_data.NativeInt32List.new(childCount);
        for (let i = dart.notNull(childCount) - 1; i >= 0; i = i - 1) {
          childrenInHitTestOrder[$_set](i, this[_children][$_get](dart.notNull(childCount) - i - 1).id);
        }
      }
      let customSemanticsActionIds = null;
      if (dart.equals((t4 = data.customSemanticsActionIds, t4 == null ? null : t4[$isNotEmpty]), true)) {
        customSemanticsActionIds = _native_typed_data.NativeInt32List.new(data.customSemanticsActionIds[$length]);
        for (let i = 0; i < dart.notNull(data.customSemanticsActionIds[$length]); i = i + 1) {
          customSemanticsActionIds[$_set](i, data.customSemanticsActionIds[$_get](i));
          customSemanticsActionIdsUpdate.add(data.customSemanticsActionIds[$_get](i));
        }
      }
      builder.updateNode({id: this.id, flags: data.flags, actions: data.actions, rect: data.rect, label: data.label, value: data.value, decreasedValue: data.decreasedValue, increasedValue: data.increasedValue, hint: data.hint, textDirection: data.textDirection, textSelectionBase: data.textSelection != null ? data.textSelection.baseOffset : -1, textSelectionExtent: data.textSelection != null ? data.textSelection.extentOffset : -1, platformViewId: (t4$ = data.platformViewId, t4$ == null ? -1 : t4$), maxValueLength: (t4$0 = data.maxValueLength, t4$0 == null ? -1 : t4$0), currentValueLength: (t4$1 = data.currentValueLength, t4$1 == null ? -1 : t4$1), scrollChildren: (t4$2 = data.scrollChildCount, t4$2 == null ? 0 : t4$2), scrollIndex: (t4$3 = data.scrollIndex, t4$3 == null ? 0 : t4$3), scrollPosition: (t4$4 = data.scrollPosition, t4$4 == null ? 0 / 0 : t4$4), scrollExtentMax: (t4$5 = data.scrollExtentMax, t4$5 == null ? 0 / 0 : t4$5), scrollExtentMin: (t4$6 = data.scrollExtentMin, t4$6 == null ? 0 / 0 : t4$6), transform: (t4$8 = (t4$7 = data.transform, t4$7 == null ? null : t4$7.storage), t4$8 == null ? semantics.SemanticsNode._kIdentityTransform : t4$8), elevation: data.elevation, thickness: data.thickness, childrenInTraversalOrder: childrenInTraversalOrder, childrenInHitTestOrder: childrenInHitTestOrder, additionalActions: (t4$9 = customSemanticsActionIds, t4$9 == null ? semantics.SemanticsNode._kEmptyCustomSemanticsActionsList : t4$9)});
      this[_dirty] = false;
    }
    [_childrenInTraversalOrder]() {
      let inheritedTextDirection = this.textDirection;
      let ancestor = this.parent;
      while (inheritedTextDirection == null && ancestor != null) {
        inheritedTextDirection = ancestor.textDirection;
        ancestor = ancestor.parent;
      }
      let childrenInDefaultOrder = null;
      if (inheritedTextDirection != null) {
        childrenInDefaultOrder = semantics._childrenInDefaultOrder(this[_children], inheritedTextDirection);
      } else {
        childrenInDefaultOrder = this[_children];
      }
      let everythingSorted = JSArrayOf_TraversalSortNode().of([]);
      let sortNodes = JSArrayOf_TraversalSortNode().of([]);
      let lastSortKey = null;
      for (let position = 0; position < dart.notNull(childrenInDefaultOrder[$length]); position = position + 1) {
        let child = childrenInDefaultOrder[$_get](position);
        let sortKey = child.sortKey;
        lastSortKey = position > 0 ? childrenInDefaultOrder[$_get](position - 1).sortKey : null;
        let isCompatibleWithPreviousSortKey = position === 0 || dart.equals(dart.runtimeType(sortKey), dart.runtimeType(lastSortKey)) && (sortKey == null || sortKey.name == lastSortKey.name);
        if (!isCompatibleWithPreviousSortKey && dart.test(sortNodes[$isNotEmpty])) {
          if (lastSortKey != null) {
            sortNodes[$sort]();
          }
          everythingSorted[$addAll](sortNodes);
          sortNodes[$clear]();
        }
        sortNodes[$add](new semantics._TraversalSortNode.new({node: child, sortKey: sortKey, position: position}));
      }
      if (lastSortKey != null) {
        sortNodes[$sort]();
      }
      everythingSorted[$addAll](sortNodes);
      return everythingSorted[$map](semantics.SemanticsNode, dart.fn(sortNode => sortNode.node, _TraversalSortNodeToSemanticsNode()))[$toList]();
    }
    sendEvent(event) {
      if (!dart.test(this.attached)) return;
      system_channels.SystemChannels.accessibility.send(event.toMap({nodeId: this.id}));
    }
    toStringShort() {
      return dart.str(object.objectRuntimeType(this, "SemanticsNode")) + "#" + dart.str(this.id);
    }
    debugFillProperties(properties) {
      let t4, t4$, t4$0;
      super.debugFillProperties(properties);
      let hideOwner = true;
      if (dart.test(this[_dirty])) {
        let inDirtyNodes = this.owner != null && dart.test(this.owner[_dirtyNodes].contains(this));
        properties.add(new diagnostics.FlagProperty.new("inDirtyNodes", {value: inDirtyNodes, ifTrue: "dirty", ifFalse: "STALE"}));
        hideOwner = inDirtyNodes;
      }
      properties.add(new (DiagnosticsPropertyOfSemanticsOwner()).new("owner", this.owner, {level: hideOwner ? diagnostics.DiagnosticLevel.hidden : diagnostics.DiagnosticLevel.info}));
      properties.add(new diagnostics.FlagProperty.new("isMergedIntoParent", {value: this.isMergedIntoParent, ifTrue: "merged up ⬆️"}));
      properties.add(new diagnostics.FlagProperty.new("mergeAllDescendantsIntoThisNode", {value: this.mergeAllDescendantsIntoThisNode, ifTrue: "merge boundary ⛔️"}));
      let offset = this.transform != null ? matrix_utils.MatrixUtils.getAsTranslation(this.transform) : null;
      if (offset != null) {
        properties.add(new (DiagnosticsPropertyOfRect()).new("rect", this.rect.shift(offset), {showName: false}));
      } else {
        let scale = this.transform != null ? matrix_utils.MatrixUtils.getAsScale(this.transform) : null;
        let description = null;
        if (scale != null) {
          description = dart.str(this.rect) + " scaled by " + scale[$toStringAsFixed](1) + "x";
        } else if (this.transform != null && !dart.test(matrix_utils.MatrixUtils.isIdentity(this.transform))) {
          let matrix = dart.toString(this.transform)[$split]("\n")[$take](4)[$map](core.String, dart.fn(line => line[$substring](4), StringToString()))[$join]("; ");
          description = dart.str(this.rect) + " with transform [" + dart.str(matrix) + "]";
        }
        properties.add(new (DiagnosticsPropertyOfRect()).new("rect", this.rect, {description: description, showName: false}));
      }
      properties.add(new (IterablePropertyOfString()).new("tags", (t4 = this.tags, t4 == null ? null : t4[$map](core.String, dart.fn(tag => tag.name, SemanticsTagToString()))), {defaultValue: null}));
      let actions = (t4$ = this[_actions][$keys][$map](core.String, dart.fn(action => diagnostics.describeEnum(action), SemanticsActionToString()))[$toList](), t4$[$sort](), t4$);
      let customSemanticsActions = this[_customSemanticsActions][$keys][$map](core.String, dart.fn(action => action.label, CustomSemanticsActionToString()))[$toList]();
      properties.add(new (IterablePropertyOfString()).new("actions", actions, {ifEmpty: null}));
      properties.add(new (IterablePropertyOfString()).new("customActions", customSemanticsActions, {ifEmpty: null}));
      let flags = ui.SemanticsFlag.values[$values][$where](dart.fn(flag => this.hasFlag(flag), SemanticsFlagTobool()))[$map](core.String, dart.fn(flag => dart.toString(flag)[$substring]("SemanticsFlag.".length), SemanticsFlagToString()))[$toList]();
      properties.add(new (IterablePropertyOfString()).new("flags", flags, {ifEmpty: null}));
      properties.add(new diagnostics.FlagProperty.new("isInvisible", {value: this.isInvisible, ifTrue: "invisible"}));
      properties.add(new diagnostics.FlagProperty.new("isHidden", {value: this.hasFlag(ui.SemanticsFlag.isHidden), ifTrue: "HIDDEN"}));
      properties.add(new diagnostics.StringProperty.new("label", this[_label], {defaultValue: ""}));
      properties.add(new diagnostics.StringProperty.new("value", this[_value], {defaultValue: ""}));
      properties.add(new diagnostics.StringProperty.new("increasedValue", this[_increasedValue], {defaultValue: ""}));
      properties.add(new diagnostics.StringProperty.new("decreasedValue", this[_decreasedValue], {defaultValue: ""}));
      properties.add(new diagnostics.StringProperty.new("hint", this[_hint], {defaultValue: ""}));
      properties.add(new (EnumPropertyOfTextDirection()).new("textDirection", this[_textDirection], {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfSemanticsSortKey()).new("sortKey", this.sortKey, {defaultValue: null}));
      if (dart.equals((t4$0 = this[_textSelection], t4$0 == null ? null : t4$0.isValid), true)) properties.add(new diagnostics.MessageProperty.new("text selection", "[" + dart.str(this[_textSelection].start) + ", " + dart.str(this[_textSelection].end) + "]"));
      properties.add(new diagnostics.IntProperty.new("platformViewId", this.platformViewId, {defaultValue: null}));
      properties.add(new diagnostics.IntProperty.new("maxValueLength", this.maxValueLength, {defaultValue: null}));
      properties.add(new diagnostics.IntProperty.new("currentValueLength", this.currentValueLength, {defaultValue: null}));
      properties.add(new diagnostics.IntProperty.new("scrollChildren", this.scrollChildCount, {defaultValue: null}));
      properties.add(new diagnostics.IntProperty.new("scrollIndex", this.scrollIndex, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("scrollExtentMin", this.scrollExtentMin, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("scrollPosition", this.scrollPosition, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("scrollExtentMax", this.scrollExtentMax, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("elevation", this.elevation, {defaultValue: 0.0}));
      properties.add(new diagnostics.DoubleProperty.new("thickness", this.thickness, {defaultValue: 0.0}));
    }
    toStringDeep(opts) {
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C2 || CT.C2;
      let childOrder = opts && 'childOrder' in opts ? opts.childOrder : C3 || CT.C3;
      if (!(childOrder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2242, 12, "childOrder != null");
      return this.toDiagnosticsNode({childOrder: childOrder}).toStringDeep({prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, minLevel: minLevel});
    }
    toDiagnosticsNode(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let style = opts && 'style' in opts ? opts.style : C4 || CT.C4;
      let childOrder = opts && 'childOrder' in opts ? opts.childOrder : C3 || CT.C3;
      return new semantics._SemanticsDiagnosticableNode.new({name: name, value: this, style: style, childOrder: childOrder});
    }
    debugDescribeChildren(opts) {
      let childOrder = opts && 'childOrder' in opts ? opts.childOrder : C5 || CT.C5;
      return this.debugListChildrenInOrder(childOrder)[$map](diagnostics.DiagnosticsNode, dart.fn(node => node.toDiagnosticsNode({childOrder: childOrder}), SemanticsNodeToDiagnosticsNode()))[$toList]();
    }
    debugListChildrenInOrder(childOrder) {
      if (!(childOrder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2269, 12, "childOrder != null");
      if (this[_children] == null) return C1 || CT.C1;
      switch (childOrder) {
        case C5 || CT.C5:
        {
          return this[_children];
        }
        case C3 || CT.C3:
        {
          return this[_childrenInTraversalOrder]();
        }
      }
      if (!false) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2279, 12, "false");
      return null;
    }
  };
  (semantics.SemanticsNode.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let showOnScreen = opts && 'showOnScreen' in opts ? opts.showOnScreen : null;
    this[_transform] = null;
    this[_rect] = ui.Rect.zero;
    this[parentSemanticsClipRect] = null;
    this[parentPaintClipRect] = null;
    this[elevationAdjustment] = null;
    this[indexInParent] = null;
    this[_isMergedIntoParent] = false;
    this[_mergeAllDescendantsIntoThisNode] = semantics.SemanticsNode._kEmptyConfig.isMergingSemanticsOfDescendants;
    this[_children] = null;
    this[_debugPreviousSnapshot] = null;
    this[_dead] = false;
    this[_dirty] = false;
    this[_actions] = semantics.SemanticsNode._kEmptyConfig[_actions];
    this[_customSemanticsActions] = semantics.SemanticsNode._kEmptyConfig[_customSemanticsActions];
    this[_actionsAsBits] = semantics.SemanticsNode._kEmptyConfig[_actionsAsBits];
    this[tags] = null;
    this[_flags] = semantics.SemanticsNode._kEmptyConfig[_flags];
    this[_label] = semantics.SemanticsNode._kEmptyConfig.label;
    this[_value] = semantics.SemanticsNode._kEmptyConfig.value;
    this[_decreasedValue] = semantics.SemanticsNode._kEmptyConfig.decreasedValue;
    this[_increasedValue] = semantics.SemanticsNode._kEmptyConfig.increasedValue;
    this[_hint] = semantics.SemanticsNode._kEmptyConfig.hint;
    this[_elevation] = semantics.SemanticsNode._kEmptyConfig.elevation;
    this[_thickness] = semantics.SemanticsNode._kEmptyConfig.thickness;
    this[_hintOverrides] = null;
    this[_textDirection] = semantics.SemanticsNode._kEmptyConfig.textDirection;
    this[_sortKey] = null;
    this[_textSelection] = null;
    this[_isMultiline] = null;
    this[_scrollChildCount] = null;
    this[_scrollIndex] = null;
    this[_scrollPosition] = null;
    this[_scrollExtentMax] = null;
    this[_scrollExtentMin] = null;
    this[_platformViewId] = null;
    this[_maxValueLength] = null;
    this[_currentValueLength] = null;
    this[key$] = key;
    this[id] = semantics.SemanticsNode._generateNewId();
    this[_showOnScreen] = showOnScreen;
    semantics.SemanticsNode.__proto__.new.call(this);
    ;
  }).prototype = semantics.SemanticsNode.prototype;
  (semantics.SemanticsNode.root = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let showOnScreen = opts && 'showOnScreen' in opts ? opts.showOnScreen : null;
    let owner = opts && 'owner' in opts ? opts.owner : null;
    this[_transform] = null;
    this[_rect] = ui.Rect.zero;
    this[parentSemanticsClipRect] = null;
    this[parentPaintClipRect] = null;
    this[elevationAdjustment] = null;
    this[indexInParent] = null;
    this[_isMergedIntoParent] = false;
    this[_mergeAllDescendantsIntoThisNode] = semantics.SemanticsNode._kEmptyConfig.isMergingSemanticsOfDescendants;
    this[_children] = null;
    this[_debugPreviousSnapshot] = null;
    this[_dead] = false;
    this[_dirty] = false;
    this[_actions] = semantics.SemanticsNode._kEmptyConfig[_actions];
    this[_customSemanticsActions] = semantics.SemanticsNode._kEmptyConfig[_customSemanticsActions];
    this[_actionsAsBits] = semantics.SemanticsNode._kEmptyConfig[_actionsAsBits];
    this[tags] = null;
    this[_flags] = semantics.SemanticsNode._kEmptyConfig[_flags];
    this[_label] = semantics.SemanticsNode._kEmptyConfig.label;
    this[_value] = semantics.SemanticsNode._kEmptyConfig.value;
    this[_decreasedValue] = semantics.SemanticsNode._kEmptyConfig.decreasedValue;
    this[_increasedValue] = semantics.SemanticsNode._kEmptyConfig.increasedValue;
    this[_hint] = semantics.SemanticsNode._kEmptyConfig.hint;
    this[_elevation] = semantics.SemanticsNode._kEmptyConfig.elevation;
    this[_thickness] = semantics.SemanticsNode._kEmptyConfig.thickness;
    this[_hintOverrides] = null;
    this[_textDirection] = semantics.SemanticsNode._kEmptyConfig.textDirection;
    this[_sortKey] = null;
    this[_textSelection] = null;
    this[_isMultiline] = null;
    this[_scrollChildCount] = null;
    this[_scrollIndex] = null;
    this[_scrollPosition] = null;
    this[_scrollExtentMax] = null;
    this[_scrollExtentMin] = null;
    this[_platformViewId] = null;
    this[_maxValueLength] = null;
    this[_currentValueLength] = null;
    this[key$] = key;
    this[id] = 0;
    this[_showOnScreen] = showOnScreen;
    semantics.SemanticsNode.__proto__.new.call(this);
    this.attach(owner);
  }).prototype = semantics.SemanticsNode.prototype;
  dart.addTypeTests(semantics.SemanticsNode);
  dart.setMethodSignature(semantics.SemanticsNode, () => ({
    __proto__: dart.getMethods(semantics.SemanticsNode.__proto__),
    [_replaceChildren]: dart.fnType(dart.void, [core.List$(semantics.SemanticsNode)]),
    visitChildren: dart.fnType(dart.void, [dart.fnType(core.bool, [semantics.SemanticsNode])]),
    [_visitDescendants]: dart.fnType(core.bool, [dart.fnType(core.bool, [semantics.SemanticsNode])]),
    [_markDirty]: dart.fnType(dart.void, []),
    [_isDifferentFromCurrentSemanticAnnotation]: dart.fnType(core.bool, [semantics.SemanticsConfiguration]),
    isTagged: dart.fnType(core.bool, [semantics.SemanticsTag]),
    hasFlag: dart.fnType(core.bool, [ui.SemanticsFlag]),
    [_canPerformAction]: dart.fnType(core.bool, [ui.SemanticsAction]),
    updateWith: dart.fnType(dart.void, [], {childrenInInversePaintOrder: core.List$(semantics.SemanticsNode), config: semantics.SemanticsConfiguration}, {}),
    getSemanticsData: dart.fnType(semantics.SemanticsData, []),
    [_addToUpdate]: dart.fnType(dart.void, [ui.SemanticsUpdateBuilder, core.Set$(core.int)]),
    [_childrenInTraversalOrder]: dart.fnType(core.List$(semantics.SemanticsNode), []),
    sendEvent: dart.fnType(dart.void, [semantics_event.SemanticsEvent]),
    toStringDeep: dart.fnType(core.String, [], {childOrder: semantics.DebugSemanticsDumpOrder, minLevel: diagnostics.DiagnosticLevel, prefixLineOne: core.String, prefixOtherLines: core.String}, {}),
    toDiagnosticsNode: dart.fnType(diagnostics.DiagnosticsNode, [], {childOrder: semantics.DebugSemanticsDumpOrder, name: core.String, style: diagnostics.DiagnosticsTreeStyle}, {}),
    debugDescribeChildren: dart.fnType(core.List$(diagnostics.DiagnosticsNode), [], {childOrder: semantics.DebugSemanticsDumpOrder}, {}),
    debugListChildrenInOrder: dart.fnType(core.List$(semantics.SemanticsNode), [semantics.DebugSemanticsDumpOrder])
  }));
  dart.setGetterSignature(semantics.SemanticsNode, () => ({
    __proto__: dart.getGetters(semantics.SemanticsNode.__proto__),
    transform: vector_math_64.Matrix4,
    rect: ui.Rect,
    isInvisible: core.bool,
    isMergedIntoParent: core.bool,
    isPartOfNodeMerging: core.bool,
    mergeAllDescendantsIntoThisNode: core.bool,
    hasChildren: core.bool,
    childrenCount: core.int,
    owner: semantics.SemanticsOwner,
    parent: semantics.SemanticsNode,
    label: core.String,
    value: core.String,
    decreasedValue: core.String,
    increasedValue: core.String,
    hint: core.String,
    elevation: core.double,
    thickness: core.double,
    hintOverrides: semantics.SemanticsHintOverrides,
    textDirection: ui.TextDirection,
    sortKey: semantics.SemanticsSortKey,
    textSelection: text_editing.TextSelection,
    isMultiline: core.bool,
    scrollChildCount: core.int,
    scrollIndex: core.int,
    scrollPosition: core.double,
    scrollExtentMax: core.double,
    scrollExtentMin: core.double,
    platformViewId: core.int,
    maxValueLength: core.int,
    currentValueLength: core.int
  }));
  dart.setSetterSignature(semantics.SemanticsNode, () => ({
    __proto__: dart.getSetters(semantics.SemanticsNode.__proto__),
    transform: vector_math_64.Matrix4,
    rect: ui.Rect,
    isMergedIntoParent: core.bool
  }));
  dart.setLibraryUri(semantics.SemanticsNode, "package:flutter/src/semantics/semantics.dart");
  dart.setFieldSignature(semantics.SemanticsNode, () => ({
    __proto__: dart.getFields(semantics.SemanticsNode.__proto__),
    key: dart.finalFieldType(key.Key),
    id: dart.finalFieldType(core.int),
    [_showOnScreen]: dart.finalFieldType(dart.fnType(dart.void, [])),
    [_transform]: dart.fieldType(vector_math_64.Matrix4),
    [_rect]: dart.fieldType(ui.Rect),
    parentSemanticsClipRect: dart.fieldType(ui.Rect),
    parentPaintClipRect: dart.fieldType(ui.Rect),
    elevationAdjustment: dart.fieldType(core.double),
    indexInParent: dart.fieldType(core.int),
    [_isMergedIntoParent]: dart.fieldType(core.bool),
    [_mergeAllDescendantsIntoThisNode]: dart.fieldType(core.bool),
    [_children]: dart.fieldType(core.List$(semantics.SemanticsNode)),
    [_debugPreviousSnapshot]: dart.fieldType(core.List$(semantics.SemanticsNode)),
    [_dead]: dart.fieldType(core.bool),
    [_dirty]: dart.fieldType(core.bool),
    [_actions]: dart.fieldType(core.Map$(ui.SemanticsAction, dart.fnType(dart.void, [dart.dynamic]))),
    [_customSemanticsActions]: dart.fieldType(core.Map$(semantics.CustomSemanticsAction, dart.fnType(dart.void, []))),
    [_actionsAsBits]: dart.fieldType(core.int),
    tags: dart.fieldType(core.Set$(semantics.SemanticsTag)),
    [_flags]: dart.fieldType(core.int),
    [_label]: dart.fieldType(core.String),
    [_value]: dart.fieldType(core.String),
    [_decreasedValue]: dart.fieldType(core.String),
    [_increasedValue]: dart.fieldType(core.String),
    [_hint]: dart.fieldType(core.String),
    [_elevation]: dart.fieldType(core.double),
    [_thickness]: dart.fieldType(core.double),
    [_hintOverrides]: dart.fieldType(semantics.SemanticsHintOverrides),
    [_textDirection]: dart.fieldType(ui.TextDirection),
    [_sortKey]: dart.fieldType(semantics.SemanticsSortKey),
    [_textSelection]: dart.fieldType(text_editing.TextSelection),
    [_isMultiline]: dart.fieldType(core.bool),
    [_scrollChildCount]: dart.fieldType(core.int),
    [_scrollIndex]: dart.fieldType(core.int),
    [_scrollPosition]: dart.fieldType(core.double),
    [_scrollExtentMax]: dart.fieldType(core.double),
    [_scrollExtentMin]: dart.fieldType(core.double),
    [_platformViewId]: dart.fieldType(core.int),
    [_maxValueLength]: dart.fieldType(core.int),
    [_currentValueLength]: dart.fieldType(core.int)
  }));
  dart.defineLazy(semantics.SemanticsNode, {
    /*semantics.SemanticsNode._maxFrameworkAccessibilityIdentifier*/get _maxFrameworkAccessibilityIdentifier() {
      return 65535;
    },
    /*semantics.SemanticsNode._lastIdentifier*/get _lastIdentifier() {
      return 0;
    },
    set _lastIdentifier(_) {},
    /*semantics.SemanticsNode._kEmptyConfig*/get _kEmptyConfig() {
      return new semantics.SemanticsConfiguration.new();
    },
    /*semantics.SemanticsNode._kEmptyChildList*/get _kEmptyChildList() {
      return _native_typed_data.NativeInt32List.new(0);
    },
    /*semantics.SemanticsNode._kEmptyCustomSemanticsActionsList*/get _kEmptyCustomSemanticsActionsList() {
      return _native_typed_data.NativeInt32List.new(0);
    },
    /*semantics.SemanticsNode._kIdentityTransform*/get _kIdentityTransform() {
      return semantics.SemanticsNode._initIdentityTransform();
    }
  });
  semantics._SemanticsDiagnosticableNode = class _SemanticsDiagnosticableNode extends diagnostics.DiagnosticableNode$(semantics.SemanticsNode) {
    getChildren() {
      if (this.value != null) return this.value.debugDescribeChildren({childOrder: this.childOrder});
      return C0 || CT.C0;
    }
  };
  (semantics._SemanticsDiagnosticableNode.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let childOrder = opts && 'childOrder' in opts ? opts.childOrder : null;
    this.childOrder = childOrder;
    semantics._SemanticsDiagnosticableNode.__proto__.new.call(this, {name: name, value: value, style: style});
    ;
  }).prototype = semantics._SemanticsDiagnosticableNode.prototype;
  dart.addTypeTests(semantics._SemanticsDiagnosticableNode);
  dart.setLibraryUri(semantics._SemanticsDiagnosticableNode, "package:flutter/src/semantics/semantics.dart");
  dart.setFieldSignature(semantics._SemanticsDiagnosticableNode, () => ({
    __proto__: dart.getFields(semantics._SemanticsDiagnosticableNode.__proto__),
    childOrder: dart.finalFieldType(semantics.DebugSemanticsDumpOrder)
  }));
  var onTapHint$ = dart.privateName(semantics, "SemanticsHintOverrides.onTapHint");
  var onLongPressHint$ = dart.privateName(semantics, "SemanticsHintOverrides.onLongPressHint");
  semantics.SemanticsHintOverrides = class SemanticsHintOverrides extends diagnostics.DiagnosticableTree {
    get onTapHint() {
      return this[onTapHint$];
    }
    set onTapHint(value) {
      super.onTapHint = value;
    }
    get onLongPressHint() {
      return this[onLongPressHint$];
    }
    set onLongPressHint(value) {
      super.onLongPressHint = value;
    }
    get isNotEmpty() {
      return this.onTapHint != null || this.onLongPressHint != null;
    }
    get hashCode() {
      return ui.hashValues(this.onTapHint, this.onLongPressHint);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      return semantics.SemanticsHintOverrides.is(other) && other.onTapHint == this.onTapHint && other.onLongPressHint == this.onLongPressHint;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.StringProperty.new("onTapHint", this.onTapHint, {defaultValue: null}));
      properties.add(new diagnostics.StringProperty.new("onLongPressHint", this.onLongPressHint, {defaultValue: null}));
    }
  };
  (semantics.SemanticsHintOverrides.new = function(opts) {
    let onTapHint = opts && 'onTapHint' in opts ? opts.onTapHint : null;
    let onLongPressHint = opts && 'onLongPressHint' in opts ? opts.onLongPressHint : null;
    this[onTapHint$] = onTapHint;
    this[onLongPressHint$] = onLongPressHint;
    if (!(onTapHint !== "")) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 530, 15, "onTapHint != ''");
    if (!(onLongPressHint !== "")) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 531, 15, "onLongPressHint != ''");
    semantics.SemanticsHintOverrides.__proto__.new.call(this);
    ;
  }).prototype = semantics.SemanticsHintOverrides.prototype;
  dart.addTypeTests(semantics.SemanticsHintOverrides);
  dart.setMethodSignature(semantics.SemanticsHintOverrides, () => ({
    __proto__: dart.getMethods(semantics.SemanticsHintOverrides.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(semantics.SemanticsHintOverrides, () => ({
    __proto__: dart.getGetters(semantics.SemanticsHintOverrides.__proto__),
    isNotEmpty: core.bool
  }));
  dart.setLibraryUri(semantics.SemanticsHintOverrides, "package:flutter/src/semantics/semantics.dart");
  dart.setFieldSignature(semantics.SemanticsHintOverrides, () => ({
    __proto__: dart.getFields(semantics.SemanticsHintOverrides.__proto__),
    onTapHint: dart.finalFieldType(core.String),
    onLongPressHint: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(semantics.SemanticsHintOverrides, ['_equals']);
  dart.defineExtensionAccessors(semantics.SemanticsHintOverrides, ['hashCode']);
  var enabled$ = dart.privateName(semantics, "SemanticsProperties.enabled");
  var checked$ = dart.privateName(semantics, "SemanticsProperties.checked");
  var toggled$ = dart.privateName(semantics, "SemanticsProperties.toggled");
  var selected$ = dart.privateName(semantics, "SemanticsProperties.selected");
  var button$ = dart.privateName(semantics, "SemanticsProperties.button");
  var link$ = dart.privateName(semantics, "SemanticsProperties.link");
  var header$ = dart.privateName(semantics, "SemanticsProperties.header");
  var textField$ = dart.privateName(semantics, "SemanticsProperties.textField");
  var readOnly$ = dart.privateName(semantics, "SemanticsProperties.readOnly");
  var focusable$ = dart.privateName(semantics, "SemanticsProperties.focusable");
  var focused$ = dart.privateName(semantics, "SemanticsProperties.focused");
  var inMutuallyExclusiveGroup$ = dart.privateName(semantics, "SemanticsProperties.inMutuallyExclusiveGroup");
  var hidden$ = dart.privateName(semantics, "SemanticsProperties.hidden");
  var obscured$ = dart.privateName(semantics, "SemanticsProperties.obscured");
  var multiline$ = dart.privateName(semantics, "SemanticsProperties.multiline");
  var scopesRoute$ = dart.privateName(semantics, "SemanticsProperties.scopesRoute");
  var namesRoute$ = dart.privateName(semantics, "SemanticsProperties.namesRoute");
  var image$ = dart.privateName(semantics, "SemanticsProperties.image");
  var liveRegion$ = dart.privateName(semantics, "SemanticsProperties.liveRegion");
  var maxValueLength$0 = dart.privateName(semantics, "SemanticsProperties.maxValueLength");
  var currentValueLength$0 = dart.privateName(semantics, "SemanticsProperties.currentValueLength");
  var label$1 = dart.privateName(semantics, "SemanticsProperties.label");
  var value$0 = dart.privateName(semantics, "SemanticsProperties.value");
  var increasedValue$0 = dart.privateName(semantics, "SemanticsProperties.increasedValue");
  var decreasedValue$0 = dart.privateName(semantics, "SemanticsProperties.decreasedValue");
  var hint$1 = dart.privateName(semantics, "SemanticsProperties.hint");
  var hintOverrides$ = dart.privateName(semantics, "SemanticsProperties.hintOverrides");
  var textDirection$0 = dart.privateName(semantics, "SemanticsProperties.textDirection");
  var sortKey$ = dart.privateName(semantics, "SemanticsProperties.sortKey");
  var onTap$ = dart.privateName(semantics, "SemanticsProperties.onTap");
  var onLongPress$ = dart.privateName(semantics, "SemanticsProperties.onLongPress");
  var onScrollLeft$ = dart.privateName(semantics, "SemanticsProperties.onScrollLeft");
  var onScrollRight$ = dart.privateName(semantics, "SemanticsProperties.onScrollRight");
  var onScrollUp$ = dart.privateName(semantics, "SemanticsProperties.onScrollUp");
  var onScrollDown$ = dart.privateName(semantics, "SemanticsProperties.onScrollDown");
  var onIncrease$ = dart.privateName(semantics, "SemanticsProperties.onIncrease");
  var onDecrease$ = dart.privateName(semantics, "SemanticsProperties.onDecrease");
  var onCopy$ = dart.privateName(semantics, "SemanticsProperties.onCopy");
  var onCut$ = dart.privateName(semantics, "SemanticsProperties.onCut");
  var onPaste$ = dart.privateName(semantics, "SemanticsProperties.onPaste");
  var onMoveCursorForwardByCharacter$ = dart.privateName(semantics, "SemanticsProperties.onMoveCursorForwardByCharacter");
  var onMoveCursorBackwardByCharacter$ = dart.privateName(semantics, "SemanticsProperties.onMoveCursorBackwardByCharacter");
  var onMoveCursorForwardByWord$ = dart.privateName(semantics, "SemanticsProperties.onMoveCursorForwardByWord");
  var onMoveCursorBackwardByWord$ = dart.privateName(semantics, "SemanticsProperties.onMoveCursorBackwardByWord");
  var onSetSelection$ = dart.privateName(semantics, "SemanticsProperties.onSetSelection");
  var onDidGainAccessibilityFocus$ = dart.privateName(semantics, "SemanticsProperties.onDidGainAccessibilityFocus");
  var onDidLoseAccessibilityFocus$ = dart.privateName(semantics, "SemanticsProperties.onDidLoseAccessibilityFocus");
  var onDismiss$ = dart.privateName(semantics, "SemanticsProperties.onDismiss");
  var customSemanticsActions$ = dart.privateName(semantics, "SemanticsProperties.customSemanticsActions");
  semantics.SemanticsProperties = class SemanticsProperties extends diagnostics.DiagnosticableTree {
    get enabled() {
      return this[enabled$];
    }
    set enabled(value) {
      super.enabled = value;
    }
    get checked() {
      return this[checked$];
    }
    set checked(value) {
      super.checked = value;
    }
    get toggled() {
      return this[toggled$];
    }
    set toggled(value) {
      super.toggled = value;
    }
    get selected() {
      return this[selected$];
    }
    set selected(value) {
      super.selected = value;
    }
    get button() {
      return this[button$];
    }
    set button(value) {
      super.button = value;
    }
    get link() {
      return this[link$];
    }
    set link(value) {
      super.link = value;
    }
    get header() {
      return this[header$];
    }
    set header(value) {
      super.header = value;
    }
    get textField() {
      return this[textField$];
    }
    set textField(value) {
      super.textField = value;
    }
    get readOnly() {
      return this[readOnly$];
    }
    set readOnly(value) {
      super.readOnly = value;
    }
    get focusable() {
      return this[focusable$];
    }
    set focusable(value) {
      super.focusable = value;
    }
    get focused() {
      return this[focused$];
    }
    set focused(value) {
      super.focused = value;
    }
    get inMutuallyExclusiveGroup() {
      return this[inMutuallyExclusiveGroup$];
    }
    set inMutuallyExclusiveGroup(value) {
      super.inMutuallyExclusiveGroup = value;
    }
    get hidden() {
      return this[hidden$];
    }
    set hidden(value) {
      super.hidden = value;
    }
    get obscured() {
      return this[obscured$];
    }
    set obscured(value) {
      super.obscured = value;
    }
    get multiline() {
      return this[multiline$];
    }
    set multiline(value) {
      super.multiline = value;
    }
    get scopesRoute() {
      return this[scopesRoute$];
    }
    set scopesRoute(value) {
      super.scopesRoute = value;
    }
    get namesRoute() {
      return this[namesRoute$];
    }
    set namesRoute(value) {
      super.namesRoute = value;
    }
    get image() {
      return this[image$];
    }
    set image(value) {
      super.image = value;
    }
    get liveRegion() {
      return this[liveRegion$];
    }
    set liveRegion(value) {
      super.liveRegion = value;
    }
    get maxValueLength() {
      return this[maxValueLength$0];
    }
    set maxValueLength(value) {
      super.maxValueLength = value;
    }
    get currentValueLength() {
      return this[currentValueLength$0];
    }
    set currentValueLength(value) {
      super.currentValueLength = value;
    }
    get label() {
      return this[label$1];
    }
    set label(value) {
      super.label = value;
    }
    get value() {
      return this[value$0];
    }
    set value(value) {
      super.value = value;
    }
    get increasedValue() {
      return this[increasedValue$0];
    }
    set increasedValue(value) {
      super.increasedValue = value;
    }
    get decreasedValue() {
      return this[decreasedValue$0];
    }
    set decreasedValue(value) {
      super.decreasedValue = value;
    }
    get hint() {
      return this[hint$1];
    }
    set hint(value) {
      super.hint = value;
    }
    get hintOverrides() {
      return this[hintOverrides$];
    }
    set hintOverrides(value) {
      super.hintOverrides = value;
    }
    get textDirection() {
      return this[textDirection$0];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    get sortKey() {
      return this[sortKey$];
    }
    set sortKey(value) {
      super.sortKey = value;
    }
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      super.onTap = value;
    }
    get onLongPress() {
      return this[onLongPress$];
    }
    set onLongPress(value) {
      super.onLongPress = value;
    }
    get onScrollLeft() {
      return this[onScrollLeft$];
    }
    set onScrollLeft(value) {
      super.onScrollLeft = value;
    }
    get onScrollRight() {
      return this[onScrollRight$];
    }
    set onScrollRight(value) {
      super.onScrollRight = value;
    }
    get onScrollUp() {
      return this[onScrollUp$];
    }
    set onScrollUp(value) {
      super.onScrollUp = value;
    }
    get onScrollDown() {
      return this[onScrollDown$];
    }
    set onScrollDown(value) {
      super.onScrollDown = value;
    }
    get onIncrease() {
      return this[onIncrease$];
    }
    set onIncrease(value) {
      super.onIncrease = value;
    }
    get onDecrease() {
      return this[onDecrease$];
    }
    set onDecrease(value) {
      super.onDecrease = value;
    }
    get onCopy() {
      return this[onCopy$];
    }
    set onCopy(value) {
      super.onCopy = value;
    }
    get onCut() {
      return this[onCut$];
    }
    set onCut(value) {
      super.onCut = value;
    }
    get onPaste() {
      return this[onPaste$];
    }
    set onPaste(value) {
      super.onPaste = value;
    }
    get onMoveCursorForwardByCharacter() {
      return this[onMoveCursorForwardByCharacter$];
    }
    set onMoveCursorForwardByCharacter(value) {
      super.onMoveCursorForwardByCharacter = value;
    }
    get onMoveCursorBackwardByCharacter() {
      return this[onMoveCursorBackwardByCharacter$];
    }
    set onMoveCursorBackwardByCharacter(value) {
      super.onMoveCursorBackwardByCharacter = value;
    }
    get onMoveCursorForwardByWord() {
      return this[onMoveCursorForwardByWord$];
    }
    set onMoveCursorForwardByWord(value) {
      super.onMoveCursorForwardByWord = value;
    }
    get onMoveCursorBackwardByWord() {
      return this[onMoveCursorBackwardByWord$];
    }
    set onMoveCursorBackwardByWord(value) {
      super.onMoveCursorBackwardByWord = value;
    }
    get onSetSelection() {
      return this[onSetSelection$];
    }
    set onSetSelection(value) {
      super.onSetSelection = value;
    }
    get onDidGainAccessibilityFocus() {
      return this[onDidGainAccessibilityFocus$];
    }
    set onDidGainAccessibilityFocus(value) {
      super.onDidGainAccessibilityFocus = value;
    }
    get onDidLoseAccessibilityFocus() {
      return this[onDidLoseAccessibilityFocus$];
    }
    set onDidLoseAccessibilityFocus(value) {
      super.onDidLoseAccessibilityFocus = value;
    }
    get onDismiss() {
      return this[onDismiss$];
    }
    set onDismiss(value) {
      super.onDismiss = value;
    }
    get customSemanticsActions() {
      return this[customSemanticsActions$];
    }
    set customSemanticsActions(value) {
      super.customSemanticsActions = value;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfbool()).new("checked", this.checked, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfbool()).new("selected", this.selected, {defaultValue: null}));
      properties.add(new diagnostics.StringProperty.new("label", this.label, {defaultValue: ""}));
      properties.add(new diagnostics.StringProperty.new("value", this.value));
      properties.add(new diagnostics.StringProperty.new("hint", this.hint));
      properties.add(new (EnumPropertyOfTextDirection()).new("textDirection", this.textDirection, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfSemanticsSortKey()).new("sortKey", this.sortKey, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfSemanticsHintOverrides()).new("hintOverrides", this.hintOverrides));
    }
    toStringShort() {
      return object.objectRuntimeType(this, "SemanticsProperties");
    }
  };
  (semantics.SemanticsProperties.new = function(opts) {
    let enabled = opts && 'enabled' in opts ? opts.enabled : null;
    let checked = opts && 'checked' in opts ? opts.checked : null;
    let selected = opts && 'selected' in opts ? opts.selected : null;
    let toggled = opts && 'toggled' in opts ? opts.toggled : null;
    let button = opts && 'button' in opts ? opts.button : null;
    let link = opts && 'link' in opts ? opts.link : null;
    let header = opts && 'header' in opts ? opts.header : null;
    let textField = opts && 'textField' in opts ? opts.textField : null;
    let readOnly = opts && 'readOnly' in opts ? opts.readOnly : null;
    let focusable = opts && 'focusable' in opts ? opts.focusable : null;
    let focused = opts && 'focused' in opts ? opts.focused : null;
    let inMutuallyExclusiveGroup = opts && 'inMutuallyExclusiveGroup' in opts ? opts.inMutuallyExclusiveGroup : null;
    let hidden = opts && 'hidden' in opts ? opts.hidden : null;
    let obscured = opts && 'obscured' in opts ? opts.obscured : null;
    let multiline = opts && 'multiline' in opts ? opts.multiline : null;
    let scopesRoute = opts && 'scopesRoute' in opts ? opts.scopesRoute : null;
    let namesRoute = opts && 'namesRoute' in opts ? opts.namesRoute : null;
    let image = opts && 'image' in opts ? opts.image : null;
    let liveRegion = opts && 'liveRegion' in opts ? opts.liveRegion : null;
    let maxValueLength = opts && 'maxValueLength' in opts ? opts.maxValueLength : null;
    let currentValueLength = opts && 'currentValueLength' in opts ? opts.currentValueLength : null;
    let label = opts && 'label' in opts ? opts.label : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let increasedValue = opts && 'increasedValue' in opts ? opts.increasedValue : null;
    let decreasedValue = opts && 'decreasedValue' in opts ? opts.decreasedValue : null;
    let hint = opts && 'hint' in opts ? opts.hint : null;
    let hintOverrides = opts && 'hintOverrides' in opts ? opts.hintOverrides : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let sortKey = opts && 'sortKey' in opts ? opts.sortKey : null;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let onLongPress = opts && 'onLongPress' in opts ? opts.onLongPress : null;
    let onScrollLeft = opts && 'onScrollLeft' in opts ? opts.onScrollLeft : null;
    let onScrollRight = opts && 'onScrollRight' in opts ? opts.onScrollRight : null;
    let onScrollUp = opts && 'onScrollUp' in opts ? opts.onScrollUp : null;
    let onScrollDown = opts && 'onScrollDown' in opts ? opts.onScrollDown : null;
    let onIncrease = opts && 'onIncrease' in opts ? opts.onIncrease : null;
    let onDecrease = opts && 'onDecrease' in opts ? opts.onDecrease : null;
    let onCopy = opts && 'onCopy' in opts ? opts.onCopy : null;
    let onCut = opts && 'onCut' in opts ? opts.onCut : null;
    let onPaste = opts && 'onPaste' in opts ? opts.onPaste : null;
    let onMoveCursorForwardByCharacter = opts && 'onMoveCursorForwardByCharacter' in opts ? opts.onMoveCursorForwardByCharacter : null;
    let onMoveCursorBackwardByCharacter = opts && 'onMoveCursorBackwardByCharacter' in opts ? opts.onMoveCursorBackwardByCharacter : null;
    let onMoveCursorForwardByWord = opts && 'onMoveCursorForwardByWord' in opts ? opts.onMoveCursorForwardByWord : null;
    let onMoveCursorBackwardByWord = opts && 'onMoveCursorBackwardByWord' in opts ? opts.onMoveCursorBackwardByWord : null;
    let onSetSelection = opts && 'onSetSelection' in opts ? opts.onSetSelection : null;
    let onDidGainAccessibilityFocus = opts && 'onDidGainAccessibilityFocus' in opts ? opts.onDidGainAccessibilityFocus : null;
    let onDidLoseAccessibilityFocus = opts && 'onDidLoseAccessibilityFocus' in opts ? opts.onDidLoseAccessibilityFocus : null;
    let onDismiss = opts && 'onDismiss' in opts ? opts.onDismiss : null;
    let customSemanticsActions = opts && 'customSemanticsActions' in opts ? opts.customSemanticsActions : null;
    this[enabled$] = enabled;
    this[checked$] = checked;
    this[selected$] = selected;
    this[toggled$] = toggled;
    this[button$] = button;
    this[link$] = link;
    this[header$] = header;
    this[textField$] = textField;
    this[readOnly$] = readOnly;
    this[focusable$] = focusable;
    this[focused$] = focused;
    this[inMutuallyExclusiveGroup$] = inMutuallyExclusiveGroup;
    this[hidden$] = hidden;
    this[obscured$] = obscured;
    this[multiline$] = multiline;
    this[scopesRoute$] = scopesRoute;
    this[namesRoute$] = namesRoute;
    this[image$] = image;
    this[liveRegion$] = liveRegion;
    this[maxValueLength$0] = maxValueLength;
    this[currentValueLength$0] = currentValueLength;
    this[label$1] = label;
    this[value$0] = value;
    this[increasedValue$0] = increasedValue;
    this[decreasedValue$0] = decreasedValue;
    this[hint$1] = hint;
    this[hintOverrides$] = hintOverrides;
    this[textDirection$0] = textDirection;
    this[sortKey$] = sortKey;
    this[onTap$] = onTap;
    this[onLongPress$] = onLongPress;
    this[onScrollLeft$] = onScrollLeft;
    this[onScrollRight$] = onScrollRight;
    this[onScrollUp$] = onScrollUp;
    this[onScrollDown$] = onScrollDown;
    this[onIncrease$] = onIncrease;
    this[onDecrease$] = onDecrease;
    this[onCopy$] = onCopy;
    this[onCut$] = onCut;
    this[onPaste$] = onPaste;
    this[onMoveCursorForwardByCharacter$] = onMoveCursorForwardByCharacter;
    this[onMoveCursorBackwardByCharacter$] = onMoveCursorBackwardByCharacter;
    this[onMoveCursorForwardByWord$] = onMoveCursorForwardByWord;
    this[onMoveCursorBackwardByWord$] = onMoveCursorBackwardByWord;
    this[onSetSelection$] = onSetSelection;
    this[onDidGainAccessibilityFocus$] = onDidGainAccessibilityFocus;
    this[onDidLoseAccessibilityFocus$] = onDidLoseAccessibilityFocus;
    this[onDismiss$] = onDismiss;
    this[customSemanticsActions$] = customSemanticsActions;
    semantics.SemanticsProperties.__proto__.new.call(this);
    ;
  }).prototype = semantics.SemanticsProperties.prototype;
  dart.addTypeTests(semantics.SemanticsProperties);
  dart.setLibraryUri(semantics.SemanticsProperties, "package:flutter/src/semantics/semantics.dart");
  dart.setFieldSignature(semantics.SemanticsProperties, () => ({
    __proto__: dart.getFields(semantics.SemanticsProperties.__proto__),
    enabled: dart.finalFieldType(core.bool),
    checked: dart.finalFieldType(core.bool),
    toggled: dart.finalFieldType(core.bool),
    selected: dart.finalFieldType(core.bool),
    button: dart.finalFieldType(core.bool),
    link: dart.finalFieldType(core.bool),
    header: dart.finalFieldType(core.bool),
    textField: dart.finalFieldType(core.bool),
    readOnly: dart.finalFieldType(core.bool),
    focusable: dart.finalFieldType(core.bool),
    focused: dart.finalFieldType(core.bool),
    inMutuallyExclusiveGroup: dart.finalFieldType(core.bool),
    hidden: dart.finalFieldType(core.bool),
    obscured: dart.finalFieldType(core.bool),
    multiline: dart.finalFieldType(core.bool),
    scopesRoute: dart.finalFieldType(core.bool),
    namesRoute: dart.finalFieldType(core.bool),
    image: dart.finalFieldType(core.bool),
    liveRegion: dart.finalFieldType(core.bool),
    maxValueLength: dart.finalFieldType(core.int),
    currentValueLength: dart.finalFieldType(core.int),
    label: dart.finalFieldType(core.String),
    value: dart.finalFieldType(core.String),
    increasedValue: dart.finalFieldType(core.String),
    decreasedValue: dart.finalFieldType(core.String),
    hint: dart.finalFieldType(core.String),
    hintOverrides: dart.finalFieldType(semantics.SemanticsHintOverrides),
    textDirection: dart.finalFieldType(ui.TextDirection),
    sortKey: dart.finalFieldType(semantics.SemanticsSortKey),
    onTap: dart.finalFieldType(dart.fnType(dart.void, [])),
    onLongPress: dart.finalFieldType(dart.fnType(dart.void, [])),
    onScrollLeft: dart.finalFieldType(dart.fnType(dart.void, [])),
    onScrollRight: dart.finalFieldType(dart.fnType(dart.void, [])),
    onScrollUp: dart.finalFieldType(dart.fnType(dart.void, [])),
    onScrollDown: dart.finalFieldType(dart.fnType(dart.void, [])),
    onIncrease: dart.finalFieldType(dart.fnType(dart.void, [])),
    onDecrease: dart.finalFieldType(dart.fnType(dart.void, [])),
    onCopy: dart.finalFieldType(dart.fnType(dart.void, [])),
    onCut: dart.finalFieldType(dart.fnType(dart.void, [])),
    onPaste: dart.finalFieldType(dart.fnType(dart.void, [])),
    onMoveCursorForwardByCharacter: dart.finalFieldType(dart.fnType(dart.void, [core.bool])),
    onMoveCursorBackwardByCharacter: dart.finalFieldType(dart.fnType(dart.void, [core.bool])),
    onMoveCursorForwardByWord: dart.finalFieldType(dart.fnType(dart.void, [core.bool])),
    onMoveCursorBackwardByWord: dart.finalFieldType(dart.fnType(dart.void, [core.bool])),
    onSetSelection: dart.finalFieldType(dart.fnType(dart.void, [text_editing.TextSelection])),
    onDidGainAccessibilityFocus: dart.finalFieldType(dart.fnType(dart.void, [])),
    onDidLoseAccessibilityFocus: dart.finalFieldType(dart.fnType(dart.void, [])),
    onDismiss: dart.finalFieldType(dart.fnType(dart.void, [])),
    customSemanticsActions: dart.finalFieldType(core.Map$(semantics.CustomSemanticsAction, dart.fnType(dart.void, [])))
  }));
  semantics._BoxEdge = class _BoxEdge extends core.Object {
    compareTo(other) {
      semantics._BoxEdge._check(other);
      return (dart.notNull(this.offset) - dart.notNull(other.offset))[$sign][$toInt]();
    }
  };
  (semantics._BoxEdge.new = function(opts) {
    let isLeadingEdge = opts && 'isLeadingEdge' in opts ? opts.isLeadingEdge : null;
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let node = opts && 'node' in opts ? opts.node : null;
    this.isLeadingEdge = isLeadingEdge;
    this.offset = offset;
    this.node = node;
    if (!(isLeadingEdge != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2297, 15, "isLeadingEdge != null");
    if (!(offset != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2298, 15, "offset != null");
    if (!offset[$isFinite]) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2299, 15, "offset.isFinite");
    if (!(node != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2300, 15, "node != null");
    ;
  }).prototype = semantics._BoxEdge.prototype;
  dart.addTypeTests(semantics._BoxEdge);
  semantics._BoxEdge[dart.implements] = () => [core.Comparable$(semantics._BoxEdge)];
  dart.setMethodSignature(semantics._BoxEdge, () => ({
    __proto__: dart.getMethods(semantics._BoxEdge.__proto__),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object])
  }));
  dart.setLibraryUri(semantics._BoxEdge, "package:flutter/src/semantics/semantics.dart");
  dart.setFieldSignature(semantics._BoxEdge, () => ({
    __proto__: dart.getFields(semantics._BoxEdge.__proto__),
    isLeadingEdge: dart.finalFieldType(core.bool),
    offset: dart.finalFieldType(core.double),
    node: dart.finalFieldType(semantics.SemanticsNode)
  }));
  dart.defineExtensionMethods(semantics._BoxEdge, ['compareTo']);
  semantics._SemanticsSortGroup = class _SemanticsSortGroup extends core.Comparable {
    compareTo(other) {
      semantics._SemanticsSortGroup._check(other);
      return (dart.notNull(this.startOffset) - dart.notNull(other.startOffset))[$sign][$toInt]();
    }
    sortedWithinVerticalGroup() {
      let edges = JSArrayOf_BoxEdge().of([]);
      for (let child of this.nodes) {
        let childRect = child.rect.deflate(0.1);
        edges[$add](new semantics._BoxEdge.new({isLeadingEdge: true, offset: semantics._pointInParentCoordinates(child, childRect.topLeft).dx, node: child}));
        edges[$add](new semantics._BoxEdge.new({isLeadingEdge: false, offset: semantics._pointInParentCoordinates(child, childRect.bottomRight).dx, node: child}));
      }
      edges[$sort]();
      let horizontalGroups = JSArrayOf_SemanticsSortGroup().of([]);
      let group = null;
      let depth = 0;
      for (let edge of edges) {
        if (dart.test(edge.isLeadingEdge)) {
          depth = depth + 1;
          group == null ? group = new semantics._SemanticsSortGroup.new({startOffset: edge.offset, textDirection: this.textDirection}) : null;
          group.nodes[$add](edge.node);
        } else {
          depth = depth - 1;
        }
        if (depth === 0) {
          horizontalGroups[$add](group);
          group = null;
        }
      }
      horizontalGroups[$sort]();
      if (dart.equals(this.textDirection, ui.TextDirection.rtl)) {
        horizontalGroups = horizontalGroups[$reversed][$toList]();
      }
      return horizontalGroups[$expand](semantics.SemanticsNode, dart.fn(group => group.sortedWithinKnot(), _SemanticsSortGroupToListOfSemanticsNode()))[$toList]();
    }
    sortedWithinKnot() {
      let t4;
      if (dart.notNull(this.nodes[$length]) <= 1) {
        return this.nodes;
      }
      let nodeMap = new (IdentityMapOfint$SemanticsNode()).new();
      let edges = new (IdentityMapOfint$int()).new();
      for (let node of this.nodes) {
        nodeMap[$_set](node.id, node);
        let center = semantics._pointInParentCoordinates(node, node.rect.center);
        for (let nextNode of this.nodes) {
          if (node == nextNode || edges[$_get](nextNode.id) == node.id) {
            continue;
          }
          let nextCenter = semantics._pointInParentCoordinates(nextNode, nextNode.rect.center);
          let centerDelta = nextCenter['-'](center);
          let direction = centerDelta.direction;
          let isLtrAndForward = dart.equals(this.textDirection, ui.TextDirection.ltr) && -3.141592653589793 / 4 < dart.notNull(direction) && dart.notNull(direction) < 3 * 3.141592653589793 / 4;
          let isRtlAndForward = dart.equals(this.textDirection, ui.TextDirection.rtl) && (dart.notNull(direction) < -3 * 3.141592653589793 / 4 || dart.notNull(direction) > 3 * 3.141592653589793 / 4);
          if (isLtrAndForward || isRtlAndForward) {
            edges[$_set](node.id, nextNode.id);
          }
        }
      }
      let sortedIds = JSArrayOfint().of([]);
      let visitedIds = LinkedHashSetOfint().new();
      let startNodes = (t4 = this.nodes[$toList](), t4[$sort](dart.fn((a, b) => {
        let aTopLeft = semantics._pointInParentCoordinates(a, a.rect.topLeft);
        let bTopLeft = semantics._pointInParentCoordinates(b, b.rect.topLeft);
        let verticalDiff = aTopLeft.dy[$compareTo](bTopLeft.dy);
        if (verticalDiff !== 0) {
          return -verticalDiff;
        }
        return -aTopLeft.dx[$compareTo](bTopLeft.dx);
      }, SemanticsNodeAndSemanticsNodeToint())), t4);
      function search(id) {
        if (dart.test(visitedIds.contains(id))) {
          return;
        }
        visitedIds.add(id);
        if (dart.test(edges[$containsKey](id))) {
          search(edges[$_get](id));
        }
        sortedIds[$add](id);
      }
      dart.fn(search, intTovoid());
      startNodes[$map](core.int, dart.fn(node => node.id, SemanticsNodeToint()))[$forEach](search);
      return sortedIds[$map](semantics.SemanticsNode, dart.fn(id => nodeMap[$_get](id), intToSemanticsNode()))[$toList]()[$reversed][$toList]();
    }
  };
  (semantics._SemanticsSortGroup.new = function(opts) {
    let startOffset = opts && 'startOffset' in opts ? opts.startOffset : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    this.nodes = JSArrayOfSemanticsNode().of([]);
    this.startOffset = startOffset;
    this.textDirection = textDirection;
    if (!(startOffset != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2334, 15, "startOffset != null");
    ;
  }).prototype = semantics._SemanticsSortGroup.prototype;
  dart.addTypeTests(semantics._SemanticsSortGroup);
  dart.setMethodSignature(semantics._SemanticsSortGroup, () => ({
    __proto__: dart.getMethods(semantics._SemanticsSortGroup.__proto__),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object]),
    sortedWithinVerticalGroup: dart.fnType(core.List$(semantics.SemanticsNode), []),
    sortedWithinKnot: dart.fnType(core.List$(semantics.SemanticsNode), [])
  }));
  dart.setLibraryUri(semantics._SemanticsSortGroup, "package:flutter/src/semantics/semantics.dart");
  dart.setFieldSignature(semantics._SemanticsSortGroup, () => ({
    __proto__: dart.getFields(semantics._SemanticsSortGroup.__proto__),
    startOffset: dart.finalFieldType(core.double),
    textDirection: dart.finalFieldType(ui.TextDirection),
    nodes: dart.finalFieldType(core.List$(semantics.SemanticsNode))
  }));
  dart.defineExtensionMethods(semantics._SemanticsSortGroup, ['compareTo']);
  semantics._TraversalSortNode = class _TraversalSortNode extends core.Object {
    compareTo(other) {
      let t4;
      semantics._TraversalSortNode._check(other);
      if (this.sortKey == null || (t4 = other, t4 == null ? null : t4.sortKey) == null) {
        return dart.notNull(this.position) - dart.notNull(other.position);
      }
      return this.sortKey.compareTo(other.sortKey);
    }
  };
  (semantics._TraversalSortNode.new = function(opts) {
    let node = opts && 'node' in opts ? opts.node : null;
    let sortKey = opts && 'sortKey' in opts ? opts.sortKey : null;
    let position = opts && 'position' in opts ? opts.position : null;
    this.node = node;
    this.sortKey = sortKey;
    this.position = position;
    if (!(node != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2558, 14, "node != null");
    if (!(position != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2559, 14, "position != null");
    ;
  }).prototype = semantics._TraversalSortNode.prototype;
  dart.addTypeTests(semantics._TraversalSortNode);
  semantics._TraversalSortNode[dart.implements] = () => [core.Comparable$(semantics._TraversalSortNode)];
  dart.setMethodSignature(semantics._TraversalSortNode, () => ({
    __proto__: dart.getMethods(semantics._TraversalSortNode.__proto__),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object])
  }));
  dart.setLibraryUri(semantics._TraversalSortNode, "package:flutter/src/semantics/semantics.dart");
  dart.setFieldSignature(semantics._TraversalSortNode, () => ({
    __proto__: dart.getFields(semantics._TraversalSortNode.__proto__),
    node: dart.finalFieldType(semantics.SemanticsNode),
    sortKey: dart.finalFieldType(semantics.SemanticsSortKey),
    position: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(semantics._TraversalSortNode, ['compareTo']);
  var _getSemanticsActionHandlerForId = dart.privateName(semantics, "_getSemanticsActionHandlerForId");
  var _getSemanticsActionHandlerForPosition = dart.privateName(semantics, "_getSemanticsActionHandlerForPosition");
  semantics.SemanticsOwner = class SemanticsOwner extends change_notifier.ChangeNotifier {
    get rootSemanticsNode() {
      return this[_nodes][$_get](0);
    }
    dispose() {
      this[_dirtyNodes].clear();
      this[_nodes][$clear]();
      this[_detachedNodes].clear();
      super.dispose();
    }
    sendSemanticsUpdate() {
      let t4, t4$, t4$0;
      if (dart.test(this[_dirtyNodes][$isEmpty])) return;
      let customSemanticsActionIds = LinkedHashSetOfint().new();
      let visitedNodes = JSArrayOfSemanticsNode().of([]);
      while (dart.test(this[_dirtyNodes][$isNotEmpty])) {
        let localDirtyNodes = this[_dirtyNodes][$where](dart.fn(node => !dart.test(this[_detachedNodes].contains(node)), SemanticsNodeTobool()))[$toList]();
        this[_dirtyNodes].clear();
        this[_detachedNodes].clear();
        localDirtyNodes[$sort](dart.fn((a, b) => dart.notNull(a.depth) - dart.notNull(b.depth), SemanticsNodeAndSemanticsNodeToint()));
        visitedNodes[$addAll](localDirtyNodes);
        for (let node of localDirtyNodes) {
          if (!dart.test(node[_dirty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2620, 16, "node._dirty");
          if (!(node.parent == null || !dart.test(node.parent.isPartOfNodeMerging) || dart.test(node.isMergedIntoParent))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2621, 16, "node.parent == null || !node.parent.isPartOfNodeMerging || node.isMergedIntoParent");
          if (dart.test(node.isPartOfNodeMerging)) {
            if (!(dart.test(node.mergeAllDescendantsIntoThisNode) || node.parent != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2623, 18, "node.mergeAllDescendantsIntoThisNode || node.parent != null");
            if (node.parent != null && dart.test(node.parent.isPartOfNodeMerging)) node.parent[_markDirty]();
          }
        }
      }
      visitedNodes[$sort](dart.fn((a, b) => dart.notNull(a.depth) - dart.notNull(b.depth), SemanticsNodeAndSemanticsNodeToint()));
      let builder = new ui.SemanticsUpdateBuilder.new();
      for (let node of visitedNodes) {
        if (!!dart.equals((t4 = node.parent, t4 == null ? null : t4[_dirty]), true)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2633, 14, "node.parent?._dirty != true");
        if (dart.test(node[_dirty]) && dart.test(node.attached)) node[_addToUpdate](builder, customSemanticsActionIds);
      }
      this[_dirtyNodes].clear();
      for (let actionId of customSemanticsActionIds) {
        let action = semantics.CustomSemanticsAction.getAction(actionId);
        builder.updateCustomAction({id: actionId, label: action.label, hint: action.hint, overrideId: (t4$0 = (t4$ = action.action, t4$ == null ? null : t4$.index), t4$0 == null ? -1 : t4$0)});
      }
      binding$.SemanticsBinding.instance.window.updateSemantics(builder.build());
      this.notifyListeners();
    }
    [_getSemanticsActionHandlerForId](id, action) {
      let result = this[_nodes][$_get](id);
      if (result != null && dart.test(result.isPartOfNodeMerging) && !dart.test(result[_canPerformAction](action))) {
        result[_visitDescendants](dart.fn(node => {
          if (dart.test(node[_canPerformAction](action))) {
            result = node;
            return false;
          }
          return true;
        }, SemanticsNodeTobool()));
      }
      if (result == null || !dart.test(result[_canPerformAction](action))) return null;
      return result[_actions][$_get](action);
    }
    performAction(id, action, args = null) {
      if (!(action != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2680, 12, "action != null");
      let handler = this[_getSemanticsActionHandlerForId](id, action);
      if (handler != null) {
        handler(args);
        return;
      }
      if (dart.equals(action, ui.SemanticsAction.showOnScreen) && this[_nodes][$_get](id)[_showOnScreen] != null) this[_nodes][$_get](id)[_showOnScreen]();
    }
    [_getSemanticsActionHandlerForPosition](node, position, action) {
      let t4;
      if (node.transform != null) {
        let inverse = vector_math_64.Matrix4.identity();
        if (inverse.copyInverse(node.transform) === 0.0) return null;
        position = matrix_utils.MatrixUtils.transformPoint(inverse, position);
      }
      if (!dart.test(node.rect.contains(position))) return null;
      if (dart.test(node.mergeAllDescendantsIntoThisNode)) {
        let result = null;
        node[_visitDescendants](dart.fn(child => {
          if (dart.test(child[_canPerformAction](action))) {
            result = child;
            return false;
          }
          return true;
        }, SemanticsNodeTobool()));
        return (t4 = result, t4 == null ? null : t4[_actions])[$_get](action);
      }
      if (dart.test(node.hasChildren)) {
        for (let child of node[_children][$reversed]) {
          let handler = this[_getSemanticsActionHandlerForPosition](child, position, action);
          if (handler != null) return handler;
        }
      }
      return node[_actions][$_get](action);
    }
    performActionAt(position, action, args = null) {
      if (!(action != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2730, 12, "action != null");
      let node = this.rootSemanticsNode;
      if (node == null) return;
      let handler = this[_getSemanticsActionHandlerForPosition](node, position, action);
      if (handler != null) handler(args);
    }
    toString() {
      return diagnostics.describeIdentity(this);
    }
  };
  (semantics.SemanticsOwner.new = function() {
    this[_dirtyNodes] = LinkedHashSetOfSemanticsNode().new();
    this[_nodes] = new (IdentityMapOfint$SemanticsNode()).new();
    this[_detachedNodes] = LinkedHashSetOfSemanticsNode().new();
    semantics.SemanticsOwner.__proto__.new.call(this);
    ;
  }).prototype = semantics.SemanticsOwner.prototype;
  dart.addTypeTests(semantics.SemanticsOwner);
  dart.setMethodSignature(semantics.SemanticsOwner, () => ({
    __proto__: dart.getMethods(semantics.SemanticsOwner.__proto__),
    sendSemanticsUpdate: dart.fnType(dart.void, []),
    [_getSemanticsActionHandlerForId]: dart.fnType(dart.fnType(dart.void, [dart.dynamic]), [core.int, ui.SemanticsAction]),
    performAction: dart.fnType(dart.void, [core.int, ui.SemanticsAction], [dart.dynamic]),
    [_getSemanticsActionHandlerForPosition]: dart.fnType(dart.fnType(dart.void, [dart.dynamic]), [semantics.SemanticsNode, ui.Offset, ui.SemanticsAction]),
    performActionAt: dart.fnType(dart.void, [ui.Offset, ui.SemanticsAction], [dart.dynamic])
  }));
  dart.setGetterSignature(semantics.SemanticsOwner, () => ({
    __proto__: dart.getGetters(semantics.SemanticsOwner.__proto__),
    rootSemanticsNode: semantics.SemanticsNode
  }));
  dart.setLibraryUri(semantics.SemanticsOwner, "package:flutter/src/semantics/semantics.dart");
  dart.setFieldSignature(semantics.SemanticsOwner, () => ({
    __proto__: dart.getFields(semantics.SemanticsOwner.__proto__),
    [_dirtyNodes]: dart.finalFieldType(core.Set$(semantics.SemanticsNode)),
    [_nodes]: dart.finalFieldType(core.Map$(core.int, semantics.SemanticsNode)),
    [_detachedNodes]: dart.finalFieldType(core.Set$(semantics.SemanticsNode))
  }));
  dart.defineExtensionMethods(semantics.SemanticsOwner, ['toString']);
  var _isSemanticBoundary = dart.privateName(semantics, "_isSemanticBoundary");
  var _hasBeenAnnotated = dart.privateName(semantics, "_hasBeenAnnotated");
  var _onTap = dart.privateName(semantics, "_onTap");
  var _onLongPress = dart.privateName(semantics, "_onLongPress");
  var _onScrollLeft = dart.privateName(semantics, "_onScrollLeft");
  var _onDismiss = dart.privateName(semantics, "_onDismiss");
  var _onScrollRight = dart.privateName(semantics, "_onScrollRight");
  var _onScrollUp = dart.privateName(semantics, "_onScrollUp");
  var _onScrollDown = dart.privateName(semantics, "_onScrollDown");
  var _onIncrease = dart.privateName(semantics, "_onIncrease");
  var _onDecrease = dart.privateName(semantics, "_onDecrease");
  var _onCopy = dart.privateName(semantics, "_onCopy");
  var _onCut = dart.privateName(semantics, "_onCut");
  var _onPaste = dart.privateName(semantics, "_onPaste");
  var _onShowOnScreen = dart.privateName(semantics, "_onShowOnScreen");
  var _onMoveCursorForwardByCharacter = dart.privateName(semantics, "_onMoveCursorForwardByCharacter");
  var _onMoveCursorBackwardByCharacter = dart.privateName(semantics, "_onMoveCursorBackwardByCharacter");
  var _onMoveCursorForwardByWord = dart.privateName(semantics, "_onMoveCursorForwardByWord");
  var _onMoveCursorBackwardByWord = dart.privateName(semantics, "_onMoveCursorBackwardByWord");
  var _onSetSelection = dart.privateName(semantics, "_onSetSelection");
  var _onDidGainAccessibilityFocus = dart.privateName(semantics, "_onDidGainAccessibilityFocus");
  var _onDidLoseAccessibilityFocus = dart.privateName(semantics, "_onDidLoseAccessibilityFocus");
  var _indexInParent = dart.privateName(semantics, "_indexInParent");
  var _isMergingSemanticsOfDescendants = dart.privateName(semantics, "_isMergingSemanticsOfDescendants");
  var _tagsForChildren = dart.privateName(semantics, "_tagsForChildren");
  var _addAction = dart.privateName(semantics, "_addAction");
  var _addArgumentlessAction = dart.privateName(semantics, "_addArgumentlessAction");
  var _onCustomSemanticsAction = dart.privateName(semantics, "_onCustomSemanticsAction");
  var _hasFlag = dart.privateName(semantics, "_hasFlag");
  var _setFlag = dart.privateName(semantics, "_setFlag");
  var explicitChildNodes = dart.privateName(semantics, "SemanticsConfiguration.explicitChildNodes");
  var isBlockingSemanticsOfPreviouslyPaintedNodes = dart.privateName(semantics, "SemanticsConfiguration.isBlockingSemanticsOfPreviouslyPaintedNodes");
  semantics.SemanticsConfiguration = class SemanticsConfiguration extends core.Object {
    get explicitChildNodes() {
      return this[explicitChildNodes];
    }
    set explicitChildNodes(value) {
      this[explicitChildNodes] = value;
    }
    get isBlockingSemanticsOfPreviouslyPaintedNodes() {
      return this[isBlockingSemanticsOfPreviouslyPaintedNodes];
    }
    set isBlockingSemanticsOfPreviouslyPaintedNodes(value) {
      this[isBlockingSemanticsOfPreviouslyPaintedNodes] = value;
    }
    get isSemanticBoundary() {
      return this[_isSemanticBoundary];
    }
    set isSemanticBoundary(value) {
      if (!(!dart.test(this.isMergingSemanticsOfDescendants) || dart.test(value))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2768, 12, "!isMergingSemanticsOfDescendants || value");
      this[_isSemanticBoundary] = value;
    }
    get hasBeenAnnotated() {
      return this[_hasBeenAnnotated];
    }
    [_addAction](action, handler) {
      if (!(handler != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2830, 12, "handler != null");
      this[_actions][$_set](action, handler);
      this[_actionsAsBits] = (dart.notNull(this[_actionsAsBits]) | dart.notNull(action.index)) >>> 0;
      this[_hasBeenAnnotated] = true;
    }
    [_addArgumentlessAction](action, handler) {
      if (!(handler != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2842, 12, "handler != null");
      this[_addAction](action, dart.fn(args => {
        if (!(args == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2844, 14, "args == null");
        handler();
      }, dynamicToNull()));
    }
    get onTap() {
      return this[_onTap];
    }
    set onTap(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.tap, value);
      this[_onTap] = value;
    }
    get onLongPress() {
      return this[_onLongPress];
    }
    set onLongPress(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.longPress, value);
      this[_onLongPress] = value;
    }
    get onScrollLeft() {
      return this[_onScrollLeft];
    }
    set onScrollLeft(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.scrollLeft, value);
      this[_onScrollLeft] = value;
    }
    get onDismiss() {
      return this[_onDismiss];
    }
    set onDismiss(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.dismiss, value);
      this[_onDismiss] = value;
    }
    get onScrollRight() {
      return this[_onScrollRight];
    }
    set onScrollRight(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.scrollRight, value);
      this[_onScrollRight] = value;
    }
    get onScrollUp() {
      return this[_onScrollUp];
    }
    set onScrollUp(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.scrollUp, value);
      this[_onScrollUp] = value;
    }
    get onScrollDown() {
      return this[_onScrollDown];
    }
    set onScrollDown(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.scrollDown, value);
      this[_onScrollDown] = value;
    }
    get onIncrease() {
      return this[_onIncrease];
    }
    set onIncrease(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.increase, value);
      this[_onIncrease] = value;
    }
    get onDecrease() {
      return this[_onDecrease];
    }
    set onDecrease(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.decrease, value);
      this[_onDecrease] = value;
    }
    get onCopy() {
      return this[_onCopy];
    }
    set onCopy(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.copy, value);
      this[_onCopy] = value;
    }
    get onCut() {
      return this[_onCut];
    }
    set onCut(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.cut, value);
      this[_onCut] = value;
    }
    get onPaste() {
      return this[_onPaste];
    }
    set onPaste(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.paste, value);
      this[_onPaste] = value;
    }
    get onShowOnScreen() {
      return this[_onShowOnScreen];
    }
    set onShowOnScreen(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.showOnScreen, value);
      this[_onShowOnScreen] = value;
    }
    get onMoveCursorForwardByCharacter() {
      return this[_onMoveCursorForwardByCharacter];
    }
    set onMoveCursorForwardByCharacter(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3079, 12, "value != null");
      this[_addAction](ui.SemanticsAction.moveCursorForwardByCharacter, dart.fn(args => {
        let extentSelection = core.bool.as(args);
        if (!(extentSelection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3082, 14, "extentSelection != null");
        value(extentSelection);
      }, dynamicToNull()));
      this[_onMoveCursorForwardByCharacter] = value;
    }
    get onMoveCursorBackwardByCharacter() {
      return this[_onMoveCursorBackwardByCharacter];
    }
    set onMoveCursorBackwardByCharacter(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3098, 12, "value != null");
      this[_addAction](ui.SemanticsAction.moveCursorBackwardByCharacter, dart.fn(args => {
        let extentSelection = core.bool.as(args);
        if (!(extentSelection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3101, 14, "extentSelection != null");
        value(extentSelection);
      }, dynamicToNull()));
      this[_onMoveCursorBackwardByCharacter] = value;
    }
    get onMoveCursorForwardByWord() {
      return this[_onMoveCursorForwardByWord];
    }
    set onMoveCursorForwardByWord(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3117, 12, "value != null");
      this[_addAction](ui.SemanticsAction.moveCursorForwardByWord, dart.fn(args => {
        let extentSelection = core.bool.as(args);
        if (!(extentSelection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3120, 14, "extentSelection != null");
        value(extentSelection);
      }, dynamicToNull()));
      this[_onMoveCursorForwardByCharacter] = value;
    }
    get onMoveCursorBackwardByWord() {
      return this[_onMoveCursorBackwardByWord];
    }
    set onMoveCursorBackwardByWord(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3136, 12, "value != null");
      this[_addAction](ui.SemanticsAction.moveCursorBackwardByWord, dart.fn(args => {
        let extentSelection = core.bool.as(args);
        if (!(extentSelection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3139, 14, "extentSelection != null");
        value(extentSelection);
      }, dynamicToNull()));
      this[_onMoveCursorBackwardByCharacter] = value;
    }
    get onSetSelection() {
      return this[_onSetSelection];
    }
    set onSetSelection(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3155, 12, "value != null");
      this[_addAction](ui.SemanticsAction.setSelection, dart.fn(args => {
        if (!(args != null && core.Map.is(args))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3157, 14, "args != null && args is Map");
        let selection = core.Map.as(args)[$cast](core.String, core.int);
        if (!(selection != null && selection[$_get]("base") != null && selection[$_get]("extent") != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3159, 14, "selection != null && selection['base'] != null && selection['extent'] != null");
        value(new text_editing.TextSelection.new({baseOffset: selection[$_get]("base"), extentOffset: selection[$_get]("extent")}));
      }, dynamicToNull()));
      this[_onSetSelection] = value;
    }
    get onDidGainAccessibilityFocus() {
      return this[_onDidGainAccessibilityFocus];
    }
    set onDidGainAccessibilityFocus(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.didGainAccessibilityFocus, value);
      this[_onDidGainAccessibilityFocus] = value;
    }
    get onDidLoseAccessibilityFocus() {
      return this[_onDidLoseAccessibilityFocus];
    }
    set onDidLoseAccessibilityFocus(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.didLoseAccessibilityFocus, value);
      this[_onDidLoseAccessibilityFocus] = value;
    }
    getActionHandler(action) {
      return this[_actions][$_get](action);
    }
    get sortKey() {
      return this[_sortKey];
    }
    set sortKey(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3238, 12, "value != null");
      this[_sortKey] = value;
      this[_hasBeenAnnotated] = true;
    }
    get indexInParent() {
      return this[_indexInParent];
    }
    set indexInParent(value) {
      this[_indexInParent] = value;
      this[_hasBeenAnnotated] = true;
    }
    get scrollChildCount() {
      return this[_scrollChildCount];
    }
    set scrollChildCount(value) {
      if (value == this.scrollChildCount) return;
      this[_scrollChildCount] = value;
      this[_hasBeenAnnotated] = true;
    }
    get scrollIndex() {
      return this[_scrollIndex];
    }
    set scrollIndex(value) {
      if (value == this.scrollIndex) return;
      this[_scrollIndex] = value;
      this[_hasBeenAnnotated] = true;
    }
    get platformViewId() {
      return this[_platformViewId];
    }
    set platformViewId(value) {
      if (value == this.platformViewId) return;
      this[_platformViewId] = value;
      this[_hasBeenAnnotated] = true;
    }
    get maxValueLength() {
      return this[_maxValueLength];
    }
    set maxValueLength(value) {
      if (value == this.maxValueLength) return;
      this[_maxValueLength] = value;
      this[_hasBeenAnnotated] = true;
    }
    get currentValueLength() {
      return this[_currentValueLength];
    }
    set currentValueLength(value) {
      if (value == this.currentValueLength) return;
      this[_currentValueLength] = value;
      this[_hasBeenAnnotated] = true;
    }
    get isMergingSemanticsOfDescendants() {
      return this[_isMergingSemanticsOfDescendants];
    }
    set isMergingSemanticsOfDescendants(value) {
      if (!dart.test(this.isSemanticBoundary)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3336, 12, "isSemanticBoundary");
      this[_isMergingSemanticsOfDescendants] = value;
      this[_hasBeenAnnotated] = true;
    }
    get customSemanticsActions() {
      return this[_customSemanticsActions];
    }
    set customSemanticsActions(value) {
      this[_hasBeenAnnotated] = true;
      this[_actionsAsBits] = (dart.notNull(this[_actionsAsBits]) | dart.notNull(ui.SemanticsAction.customAction.index)) >>> 0;
      this[_customSemanticsActions] = value;
      this[_actions][$_set](ui.SemanticsAction.customAction, dart.bind(this, _onCustomSemanticsAction));
    }
    [_onCustomSemanticsAction](args) {
      let action = semantics.CustomSemanticsAction.getAction(core.int.as(args));
      if (action == null) return;
      let callback = this[_customSemanticsActions][$_get](action);
      if (callback != null) callback();
    }
    get label() {
      return this[_label];
    }
    set label(label) {
      if (!(label != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3376, 12, "label != null");
      this[_label] = label;
      this[_hasBeenAnnotated] = true;
    }
    get value() {
      return this[_value];
    }
    set value(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3399, 12, "value != null");
      this[_value] = value;
      this[_hasBeenAnnotated] = true;
    }
    get decreasedValue() {
      return this[_decreasedValue];
    }
    set decreasedValue(decreasedValue) {
      if (!(decreasedValue != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3414, 12, "decreasedValue != null");
      this[_decreasedValue] = decreasedValue;
      this[_hasBeenAnnotated] = true;
    }
    get increasedValue() {
      return this[_increasedValue];
    }
    set increasedValue(increasedValue) {
      if (!(increasedValue != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3429, 12, "increasedValue != null");
      this[_increasedValue] = increasedValue;
      this[_hasBeenAnnotated] = true;
    }
    get hint() {
      return this[_hint];
    }
    set hint(hint) {
      if (!(hint != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3445, 12, "hint != null");
      this[_hint] = hint;
      this[_hasBeenAnnotated] = true;
    }
    get hintOverrides() {
      return this[_hintOverrides];
    }
    set hintOverrides(value) {
      if (value == null) return;
      this[_hintOverrides] = value;
      this[_hasBeenAnnotated] = true;
    }
    get elevation() {
      return this[_elevation];
    }
    set elevation(value) {
      if (!(value != null && dart.notNull(value) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3466, 12, "value != null && value >= 0.0");
      if (value == this[_elevation]) {
        return;
      }
      this[_elevation] = value;
      this[_hasBeenAnnotated] = true;
    }
    get thickness() {
      return this[_thickness];
    }
    set thickness(value) {
      if (!(value != null && dart.notNull(value) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3483, 12, "value != null && value >= 0.0");
      if (value == this[_thickness]) {
        return;
      }
      this[_thickness] = value;
      this[_hasBeenAnnotated] = true;
    }
    get scopesRoute() {
      return this[_hasFlag](ui.SemanticsFlag.scopesRoute);
    }
    set scopesRoute(value) {
      this[_setFlag](ui.SemanticsFlag.scopesRoute, value);
    }
    get namesRoute() {
      return this[_hasFlag](ui.SemanticsFlag.namesRoute);
    }
    set namesRoute(value) {
      this[_setFlag](ui.SemanticsFlag.namesRoute, value);
    }
    get isImage() {
      return this[_hasFlag](ui.SemanticsFlag.isImage);
    }
    set isImage(value) {
      this[_setFlag](ui.SemanticsFlag.isImage, value);
    }
    get liveRegion() {
      return this[_hasFlag](ui.SemanticsFlag.isLiveRegion);
    }
    set liveRegion(value) {
      this[_setFlag](ui.SemanticsFlag.isLiveRegion, value);
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(textDirection) {
      this[_textDirection] = textDirection;
      this[_hasBeenAnnotated] = true;
    }
    get isSelected() {
      return this[_hasFlag](ui.SemanticsFlag.isSelected);
    }
    set isSelected(value) {
      this[_setFlag](ui.SemanticsFlag.isSelected, value);
    }
    get isEnabled() {
      return dart.test(this[_hasFlag](ui.SemanticsFlag.hasEnabledState)) ? this[_hasFlag](ui.SemanticsFlag.isEnabled) : null;
    }
    set isEnabled(value) {
      this[_setFlag](ui.SemanticsFlag.hasEnabledState, true);
      this[_setFlag](ui.SemanticsFlag.isEnabled, value);
    }
    get isChecked() {
      return dart.test(this[_hasFlag](ui.SemanticsFlag.hasCheckedState)) ? this[_hasFlag](ui.SemanticsFlag.isChecked) : null;
    }
    set isChecked(value) {
      this[_setFlag](ui.SemanticsFlag.hasCheckedState, true);
      this[_setFlag](ui.SemanticsFlag.isChecked, value);
    }
    get isToggled() {
      return dart.test(this[_hasFlag](ui.SemanticsFlag.hasToggledState)) ? this[_hasFlag](ui.SemanticsFlag.isToggled) : null;
    }
    set isToggled(value) {
      this[_setFlag](ui.SemanticsFlag.hasToggledState, true);
      this[_setFlag](ui.SemanticsFlag.isToggled, value);
    }
    get isInMutuallyExclusiveGroup() {
      return this[_hasFlag](ui.SemanticsFlag.isInMutuallyExclusiveGroup);
    }
    set isInMutuallyExclusiveGroup(value) {
      this[_setFlag](ui.SemanticsFlag.isInMutuallyExclusiveGroup, value);
    }
    get isFocusable() {
      return this[_hasFlag](ui.SemanticsFlag.isFocusable);
    }
    set isFocusable(value) {
      this[_setFlag](ui.SemanticsFlag.isFocusable, value);
    }
    get isFocused() {
      return this[_hasFlag](ui.SemanticsFlag.isFocused);
    }
    set isFocused(value) {
      this[_setFlag](ui.SemanticsFlag.isFocused, value);
    }
    get isButton() {
      return this[_hasFlag](ui.SemanticsFlag.isButton);
    }
    set isButton(value) {
      this[_setFlag](ui.SemanticsFlag.isButton, value);
    }
    get isLink() {
      return this[_hasFlag](ui.SemanticsFlag.isLink);
    }
    set isLink(value) {
      this[_setFlag](ui.SemanticsFlag.isLink, value);
    }
    get isHeader() {
      return this[_hasFlag](ui.SemanticsFlag.isHeader);
    }
    set isHeader(value) {
      this[_setFlag](ui.SemanticsFlag.isHeader, value);
    }
    get isHidden() {
      return this[_hasFlag](ui.SemanticsFlag.isHidden);
    }
    set isHidden(value) {
      this[_setFlag](ui.SemanticsFlag.isHidden, value);
    }
    get isTextField() {
      return this[_hasFlag](ui.SemanticsFlag.isTextField);
    }
    set isTextField(value) {
      this[_setFlag](ui.SemanticsFlag.isTextField, value);
    }
    get isReadOnly() {
      return this[_hasFlag](ui.SemanticsFlag.isReadOnly);
    }
    set isReadOnly(value) {
      this[_setFlag](ui.SemanticsFlag.isReadOnly, value);
    }
    get isObscured() {
      return this[_hasFlag](ui.SemanticsFlag.isObscured);
    }
    set isObscured(value) {
      this[_setFlag](ui.SemanticsFlag.isObscured, value);
    }
    get isMultiline() {
      return this[_hasFlag](ui.SemanticsFlag.isMultiline);
    }
    set isMultiline(value) {
      this[_setFlag](ui.SemanticsFlag.isMultiline, value);
    }
    get hasImplicitScrolling() {
      return this[_hasFlag](ui.SemanticsFlag.hasImplicitScrolling);
    }
    set hasImplicitScrolling(value) {
      this[_setFlag](ui.SemanticsFlag.hasImplicitScrolling, value);
    }
    get textSelection() {
      return this[_textSelection];
    }
    set textSelection(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3719, 12, "value != null");
      this[_textSelection] = value;
      this[_hasBeenAnnotated] = true;
    }
    get scrollPosition() {
      return this[_scrollPosition];
    }
    set scrollPosition(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3737, 12, "value != null");
      this[_scrollPosition] = value;
      this[_hasBeenAnnotated] = true;
    }
    get scrollExtentMax() {
      return this[_scrollExtentMax];
    }
    set scrollExtentMax(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3753, 12, "value != null");
      this[_scrollExtentMax] = value;
      this[_hasBeenAnnotated] = true;
    }
    get scrollExtentMin() {
      return this[_scrollExtentMin];
    }
    set scrollExtentMin(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3769, 12, "value != null");
      this[_scrollExtentMin] = value;
      this[_hasBeenAnnotated] = true;
    }
    get tagsForChildren() {
      return this[_tagsForChildren];
    }
    addTagForChildren(tag) {
      this[_tagsForChildren] == null ? this[_tagsForChildren] = LinkedHashSetOfSemanticsTag().new() : null;
      this[_tagsForChildren].add(tag);
    }
    [_setFlag](flag, value) {
      if (dart.test(value)) {
        this[_flags] = (dart.notNull(this[_flags]) | dart.notNull(flag.index)) >>> 0;
      } else {
        this[_flags] = (dart.notNull(this[_flags]) & ~dart.notNull(flag.index) >>> 0) >>> 0;
      }
      this[_hasBeenAnnotated] = true;
    }
    [_hasFlag](flag) {
      return (dart.notNull(this[_flags]) & dart.notNull(flag.index)) !== 0;
    }
    isCompatibleWith(other) {
      if (other == null || !dart.test(other.hasBeenAnnotated) || !dart.test(this.hasBeenAnnotated)) return true;
      if ((dart.notNull(this[_actionsAsBits]) & dart.notNull(other[_actionsAsBits])) !== 0) return false;
      if ((dart.notNull(this[_flags]) & dart.notNull(other[_flags])) !== 0) return false;
      if (this[_platformViewId] != null && other[_platformViewId] != null) {
        return false;
      }
      if (this[_maxValueLength] != null && other[_maxValueLength] != null) {
        return false;
      }
      if (this[_currentValueLength] != null && other[_currentValueLength] != null) {
        return false;
      }
      if (this[_value] != null && this[_value][$isNotEmpty] && other[_value] != null && other[_value][$isNotEmpty]) return false;
      return true;
    }
    absorb(child) {
      if (!!dart.test(this.explicitChildNodes)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3860, 12, "!explicitChildNodes");
      if (!dart.test(child.hasBeenAnnotated)) return;
      this[_actions][$addAll](child[_actions]);
      this[_customSemanticsActions][$addAll](child[_customSemanticsActions]);
      this[_actionsAsBits] = (dart.notNull(this[_actionsAsBits]) | dart.notNull(child[_actionsAsBits])) >>> 0;
      this[_flags] = (dart.notNull(this[_flags]) | dart.notNull(child[_flags])) >>> 0;
      this[_textSelection] == null ? this[_textSelection] = child[_textSelection] : null;
      this[_scrollPosition] == null ? this[_scrollPosition] = child[_scrollPosition] : null;
      this[_scrollExtentMax] == null ? this[_scrollExtentMax] = child[_scrollExtentMax] : null;
      this[_scrollExtentMin] == null ? this[_scrollExtentMin] = child[_scrollExtentMin] : null;
      this[_hintOverrides] == null ? this[_hintOverrides] = child[_hintOverrides] : null;
      this[_indexInParent] == null ? this[_indexInParent] = child.indexInParent : null;
      this[_scrollIndex] == null ? this[_scrollIndex] = child[_scrollIndex] : null;
      this[_scrollChildCount] == null ? this[_scrollChildCount] = child[_scrollChildCount] : null;
      this[_platformViewId] == null ? this[_platformViewId] = child[_platformViewId] : null;
      this[_maxValueLength] == null ? this[_maxValueLength] = child[_maxValueLength] : null;
      this[_currentValueLength] == null ? this[_currentValueLength] = child[_currentValueLength] : null;
      this.textDirection == null ? this.textDirection = child.textDirection : null;
      this[_sortKey] == null ? this[_sortKey] = child[_sortKey] : null;
      this[_label] = semantics._concatStrings({thisString: this[_label], thisTextDirection: this.textDirection, otherString: child[_label], otherTextDirection: child.textDirection});
      if (this[_decreasedValue] === "" || this[_decreasedValue] == null) this[_decreasedValue] = child[_decreasedValue];
      if (this[_value] === "" || this[_value] == null) this[_value] = child[_value];
      if (this[_increasedValue] === "" || this[_increasedValue] == null) this[_increasedValue] = child[_increasedValue];
      this[_hint] = semantics._concatStrings({thisString: this[_hint], thisTextDirection: this.textDirection, otherString: child[_hint], otherTextDirection: child.textDirection});
      this[_thickness] = math.max(core.double, this[_thickness], dart.notNull(child[_thickness]) + dart.notNull(child[_elevation]));
      this[_hasBeenAnnotated] = dart.test(this[_hasBeenAnnotated]) || dart.test(child[_hasBeenAnnotated]);
    }
    copy() {
      let t4;
      t4 = new semantics.SemanticsConfiguration.new();
      t4[_isSemanticBoundary] = this[_isSemanticBoundary];
      t4.explicitChildNodes = this.explicitChildNodes;
      t4.isBlockingSemanticsOfPreviouslyPaintedNodes = this.isBlockingSemanticsOfPreviouslyPaintedNodes;
      t4[_hasBeenAnnotated] = this[_hasBeenAnnotated];
      t4[_isMergingSemanticsOfDescendants] = this[_isMergingSemanticsOfDescendants];
      t4[_textDirection] = this[_textDirection];
      t4[_sortKey] = this[_sortKey];
      t4[_label] = this[_label];
      t4[_increasedValue] = this[_increasedValue];
      t4[_value] = this[_value];
      t4[_decreasedValue] = this[_decreasedValue];
      t4[_hint] = this[_hint];
      t4[_hintOverrides] = this[_hintOverrides];
      t4[_elevation] = this[_elevation];
      t4[_thickness] = this[_thickness];
      t4[_flags] = this[_flags];
      t4[_tagsForChildren] = this[_tagsForChildren];
      t4[_textSelection] = this[_textSelection];
      t4[_scrollPosition] = this[_scrollPosition];
      t4[_scrollExtentMax] = this[_scrollExtentMax];
      t4[_scrollExtentMin] = this[_scrollExtentMin];
      t4[_actionsAsBits] = this[_actionsAsBits];
      t4[_indexInParent] = this.indexInParent;
      t4[_scrollIndex] = this[_scrollIndex];
      t4[_scrollChildCount] = this[_scrollChildCount];
      t4[_platformViewId] = this[_platformViewId];
      t4[_maxValueLength] = this[_maxValueLength];
      t4[_currentValueLength] = this[_currentValueLength];
      t4[_actions][$addAll](this[_actions]);
      t4[_customSemanticsActions][$addAll](this[_customSemanticsActions]);
      return t4;
    }
  };
  (semantics.SemanticsConfiguration.new = function() {
    this[_isSemanticBoundary] = false;
    this[explicitChildNodes] = false;
    this[isBlockingSemanticsOfPreviouslyPaintedNodes] = false;
    this[_hasBeenAnnotated] = false;
    this[_actions] = new (LinkedMapOfSemanticsAction$dynamicTovoid()).new();
    this[_actionsAsBits] = 0;
    this[_onTap] = null;
    this[_onLongPress] = null;
    this[_onScrollLeft] = null;
    this[_onDismiss] = null;
    this[_onScrollRight] = null;
    this[_onScrollUp] = null;
    this[_onScrollDown] = null;
    this[_onIncrease] = null;
    this[_onDecrease] = null;
    this[_onCopy] = null;
    this[_onCut] = null;
    this[_onPaste] = null;
    this[_onShowOnScreen] = null;
    this[_onMoveCursorForwardByCharacter] = null;
    this[_onMoveCursorBackwardByCharacter] = null;
    this[_onMoveCursorForwardByWord] = null;
    this[_onMoveCursorBackwardByWord] = null;
    this[_onSetSelection] = null;
    this[_onDidGainAccessibilityFocus] = null;
    this[_onDidLoseAccessibilityFocus] = null;
    this[_sortKey] = null;
    this[_indexInParent] = null;
    this[_scrollChildCount] = null;
    this[_scrollIndex] = null;
    this[_platformViewId] = null;
    this[_maxValueLength] = null;
    this[_currentValueLength] = null;
    this[_isMergingSemanticsOfDescendants] = false;
    this[_customSemanticsActions] = new (LinkedMapOfCustomSemanticsAction$VoidTovoid()).new();
    this[_label] = "";
    this[_value] = "";
    this[_decreasedValue] = "";
    this[_increasedValue] = "";
    this[_hint] = "";
    this[_hintOverrides] = null;
    this[_elevation] = 0.0;
    this[_thickness] = 0.0;
    this[_textDirection] = null;
    this[_textSelection] = null;
    this[_scrollPosition] = null;
    this[_scrollExtentMax] = null;
    this[_scrollExtentMin] = null;
    this[_tagsForChildren] = null;
    this[_flags] = 0;
    ;
  }).prototype = semantics.SemanticsConfiguration.prototype;
  dart.addTypeTests(semantics.SemanticsConfiguration);
  dart.setMethodSignature(semantics.SemanticsConfiguration, () => ({
    __proto__: dart.getMethods(semantics.SemanticsConfiguration.__proto__),
    [_addAction]: dart.fnType(dart.void, [ui.SemanticsAction, dart.fnType(dart.void, [dart.dynamic])]),
    [_addArgumentlessAction]: dart.fnType(dart.void, [ui.SemanticsAction, dart.fnType(dart.void, [])]),
    getActionHandler: dart.fnType(dart.fnType(dart.void, [dart.dynamic]), [ui.SemanticsAction]),
    [_onCustomSemanticsAction]: dart.fnType(dart.void, [dart.dynamic]),
    addTagForChildren: dart.fnType(dart.void, [semantics.SemanticsTag]),
    [_setFlag]: dart.fnType(dart.void, [ui.SemanticsFlag, core.bool]),
    [_hasFlag]: dart.fnType(core.bool, [ui.SemanticsFlag]),
    isCompatibleWith: dart.fnType(core.bool, [semantics.SemanticsConfiguration]),
    absorb: dart.fnType(dart.void, [semantics.SemanticsConfiguration]),
    copy: dart.fnType(semantics.SemanticsConfiguration, [])
  }));
  dart.setGetterSignature(semantics.SemanticsConfiguration, () => ({
    __proto__: dart.getGetters(semantics.SemanticsConfiguration.__proto__),
    isSemanticBoundary: core.bool,
    hasBeenAnnotated: core.bool,
    onTap: dart.fnType(dart.void, []),
    onLongPress: dart.fnType(dart.void, []),
    onScrollLeft: dart.fnType(dart.void, []),
    onDismiss: dart.fnType(dart.void, []),
    onScrollRight: dart.fnType(dart.void, []),
    onScrollUp: dart.fnType(dart.void, []),
    onScrollDown: dart.fnType(dart.void, []),
    onIncrease: dart.fnType(dart.void, []),
    onDecrease: dart.fnType(dart.void, []),
    onCopy: dart.fnType(dart.void, []),
    onCut: dart.fnType(dart.void, []),
    onPaste: dart.fnType(dart.void, []),
    onShowOnScreen: dart.fnType(dart.void, []),
    onMoveCursorForwardByCharacter: dart.fnType(dart.void, [core.bool]),
    onMoveCursorBackwardByCharacter: dart.fnType(dart.void, [core.bool]),
    onMoveCursorForwardByWord: dart.fnType(dart.void, [core.bool]),
    onMoveCursorBackwardByWord: dart.fnType(dart.void, [core.bool]),
    onSetSelection: dart.fnType(dart.void, [text_editing.TextSelection]),
    onDidGainAccessibilityFocus: dart.fnType(dart.void, []),
    onDidLoseAccessibilityFocus: dart.fnType(dart.void, []),
    sortKey: semantics.SemanticsSortKey,
    indexInParent: core.int,
    scrollChildCount: core.int,
    scrollIndex: core.int,
    platformViewId: core.int,
    maxValueLength: core.int,
    currentValueLength: core.int,
    isMergingSemanticsOfDescendants: core.bool,
    customSemanticsActions: core.Map$(semantics.CustomSemanticsAction, dart.fnType(dart.void, [])),
    label: core.String,
    value: core.String,
    decreasedValue: core.String,
    increasedValue: core.String,
    hint: core.String,
    hintOverrides: semantics.SemanticsHintOverrides,
    elevation: core.double,
    thickness: core.double,
    scopesRoute: core.bool,
    namesRoute: core.bool,
    isImage: core.bool,
    liveRegion: core.bool,
    textDirection: ui.TextDirection,
    isSelected: core.bool,
    isEnabled: core.bool,
    isChecked: core.bool,
    isToggled: core.bool,
    isInMutuallyExclusiveGroup: core.bool,
    isFocusable: core.bool,
    isFocused: core.bool,
    isButton: core.bool,
    isLink: core.bool,
    isHeader: core.bool,
    isHidden: core.bool,
    isTextField: core.bool,
    isReadOnly: core.bool,
    isObscured: core.bool,
    isMultiline: core.bool,
    hasImplicitScrolling: core.bool,
    textSelection: text_editing.TextSelection,
    scrollPosition: core.double,
    scrollExtentMax: core.double,
    scrollExtentMin: core.double,
    tagsForChildren: core.Iterable$(semantics.SemanticsTag)
  }));
  dart.setSetterSignature(semantics.SemanticsConfiguration, () => ({
    __proto__: dart.getSetters(semantics.SemanticsConfiguration.__proto__),
    isSemanticBoundary: core.bool,
    onTap: dart.fnType(dart.void, []),
    onLongPress: dart.fnType(dart.void, []),
    onScrollLeft: dart.fnType(dart.void, []),
    onDismiss: dart.fnType(dart.void, []),
    onScrollRight: dart.fnType(dart.void, []),
    onScrollUp: dart.fnType(dart.void, []),
    onScrollDown: dart.fnType(dart.void, []),
    onIncrease: dart.fnType(dart.void, []),
    onDecrease: dart.fnType(dart.void, []),
    onCopy: dart.fnType(dart.void, []),
    onCut: dart.fnType(dart.void, []),
    onPaste: dart.fnType(dart.void, []),
    onShowOnScreen: dart.fnType(dart.void, []),
    onMoveCursorForwardByCharacter: dart.fnType(dart.void, [core.bool]),
    onMoveCursorBackwardByCharacter: dart.fnType(dart.void, [core.bool]),
    onMoveCursorForwardByWord: dart.fnType(dart.void, [core.bool]),
    onMoveCursorBackwardByWord: dart.fnType(dart.void, [core.bool]),
    onSetSelection: dart.fnType(dart.void, [text_editing.TextSelection]),
    onDidGainAccessibilityFocus: dart.fnType(dart.void, []),
    onDidLoseAccessibilityFocus: dart.fnType(dart.void, []),
    sortKey: semantics.SemanticsSortKey,
    indexInParent: core.int,
    scrollChildCount: core.int,
    scrollIndex: core.int,
    platformViewId: core.int,
    maxValueLength: core.int,
    currentValueLength: core.int,
    isMergingSemanticsOfDescendants: core.bool,
    customSemanticsActions: core.Map$(semantics.CustomSemanticsAction, dart.fnType(dart.void, [])),
    label: core.String,
    value: core.String,
    decreasedValue: core.String,
    increasedValue: core.String,
    hint: core.String,
    hintOverrides: semantics.SemanticsHintOverrides,
    elevation: core.double,
    thickness: core.double,
    scopesRoute: core.bool,
    namesRoute: core.bool,
    isImage: core.bool,
    liveRegion: core.bool,
    textDirection: ui.TextDirection,
    isSelected: core.bool,
    isEnabled: core.bool,
    isChecked: core.bool,
    isToggled: core.bool,
    isInMutuallyExclusiveGroup: core.bool,
    isFocusable: core.bool,
    isFocused: core.bool,
    isButton: core.bool,
    isLink: core.bool,
    isHeader: core.bool,
    isHidden: core.bool,
    isTextField: core.bool,
    isReadOnly: core.bool,
    isObscured: core.bool,
    isMultiline: core.bool,
    hasImplicitScrolling: core.bool,
    textSelection: text_editing.TextSelection,
    scrollPosition: core.double,
    scrollExtentMax: core.double,
    scrollExtentMin: core.double
  }));
  dart.setLibraryUri(semantics.SemanticsConfiguration, "package:flutter/src/semantics/semantics.dart");
  dart.setFieldSignature(semantics.SemanticsConfiguration, () => ({
    __proto__: dart.getFields(semantics.SemanticsConfiguration.__proto__),
    [_isSemanticBoundary]: dart.fieldType(core.bool),
    explicitChildNodes: dart.fieldType(core.bool),
    isBlockingSemanticsOfPreviouslyPaintedNodes: dart.fieldType(core.bool),
    [_hasBeenAnnotated]: dart.fieldType(core.bool),
    [_actions]: dart.finalFieldType(core.Map$(ui.SemanticsAction, dart.fnType(dart.void, [dart.dynamic]))),
    [_actionsAsBits]: dart.fieldType(core.int),
    [_onTap]: dart.fieldType(dart.fnType(dart.void, [])),
    [_onLongPress]: dart.fieldType(dart.fnType(dart.void, [])),
    [_onScrollLeft]: dart.fieldType(dart.fnType(dart.void, [])),
    [_onDismiss]: dart.fieldType(dart.fnType(dart.void, [])),
    [_onScrollRight]: dart.fieldType(dart.fnType(dart.void, [])),
    [_onScrollUp]: dart.fieldType(dart.fnType(dart.void, [])),
    [_onScrollDown]: dart.fieldType(dart.fnType(dart.void, [])),
    [_onIncrease]: dart.fieldType(dart.fnType(dart.void, [])),
    [_onDecrease]: dart.fieldType(dart.fnType(dart.void, [])),
    [_onCopy]: dart.fieldType(dart.fnType(dart.void, [])),
    [_onCut]: dart.fieldType(dart.fnType(dart.void, [])),
    [_onPaste]: dart.fieldType(dart.fnType(dart.void, [])),
    [_onShowOnScreen]: dart.fieldType(dart.fnType(dart.void, [])),
    [_onMoveCursorForwardByCharacter]: dart.fieldType(dart.fnType(dart.void, [core.bool])),
    [_onMoveCursorBackwardByCharacter]: dart.fieldType(dart.fnType(dart.void, [core.bool])),
    [_onMoveCursorForwardByWord]: dart.fieldType(dart.fnType(dart.void, [core.bool])),
    [_onMoveCursorBackwardByWord]: dart.fieldType(dart.fnType(dart.void, [core.bool])),
    [_onSetSelection]: dart.fieldType(dart.fnType(dart.void, [text_editing.TextSelection])),
    [_onDidGainAccessibilityFocus]: dart.fieldType(dart.fnType(dart.void, [])),
    [_onDidLoseAccessibilityFocus]: dart.fieldType(dart.fnType(dart.void, [])),
    [_sortKey]: dart.fieldType(semantics.SemanticsSortKey),
    [_indexInParent]: dart.fieldType(core.int),
    [_scrollChildCount]: dart.fieldType(core.int),
    [_scrollIndex]: dart.fieldType(core.int),
    [_platformViewId]: dart.fieldType(core.int),
    [_maxValueLength]: dart.fieldType(core.int),
    [_currentValueLength]: dart.fieldType(core.int),
    [_isMergingSemanticsOfDescendants]: dart.fieldType(core.bool),
    [_customSemanticsActions]: dart.fieldType(core.Map$(semantics.CustomSemanticsAction, dart.fnType(dart.void, []))),
    [_label]: dart.fieldType(core.String),
    [_value]: dart.fieldType(core.String),
    [_decreasedValue]: dart.fieldType(core.String),
    [_increasedValue]: dart.fieldType(core.String),
    [_hint]: dart.fieldType(core.String),
    [_hintOverrides]: dart.fieldType(semantics.SemanticsHintOverrides),
    [_elevation]: dart.fieldType(core.double),
    [_thickness]: dart.fieldType(core.double),
    [_textDirection]: dart.fieldType(ui.TextDirection),
    [_textSelection]: dart.fieldType(text_editing.TextSelection),
    [_scrollPosition]: dart.fieldType(core.double),
    [_scrollExtentMax]: dart.fieldType(core.double),
    [_scrollExtentMin]: dart.fieldType(core.double),
    [_tagsForChildren]: dart.fieldType(core.Set$(semantics.SemanticsTag)),
    [_flags]: dart.fieldType(core.int)
  }));
  var C6;
  semantics.DebugSemanticsDumpOrder = class DebugSemanticsDumpOrder extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (semantics.DebugSemanticsDumpOrder.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = semantics.DebugSemanticsDumpOrder.prototype;
  dart.addTypeTests(semantics.DebugSemanticsDumpOrder);
  dart.setLibraryUri(semantics.DebugSemanticsDumpOrder, "package:flutter/src/semantics/semantics.dart");
  dart.setFieldSignature(semantics.DebugSemanticsDumpOrder, () => ({
    __proto__: dart.getFields(semantics.DebugSemanticsDumpOrder.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(semantics.DebugSemanticsDumpOrder, ['toString']);
  semantics.DebugSemanticsDumpOrder.inverseHitTest = C5 || CT.C5;
  semantics.DebugSemanticsDumpOrder.traversalOrder = C3 || CT.C3;
  semantics.DebugSemanticsDumpOrder.values = C6 || CT.C6;
  var name$0 = dart.privateName(semantics, "SemanticsSortKey.name");
  semantics.SemanticsSortKey = class SemanticsSortKey extends diagnostics.Diagnosticable {
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    compareTo(other) {
      semantics.SemanticsSortKey._check(other);
      if (!dart.equals(this[$runtimeType], dart.runtimeType(other))) dart.assertFailed("Semantics sort keys can only be compared to other sort keys of the same type.", "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 4017, 12, "runtimeType == other.runtimeType");
      if (this.name == other.name) {
        return this.doCompare(other);
      }
      if (this.name == null && other.name != null) {
        return -1;
      } else if (this.name != null && other.name == null) {
        return 1;
      }
      return this.name[$compareTo](other.name);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.StringProperty.new("name", this.name, {defaultValue: null}));
    }
  };
  (semantics.SemanticsSortKey.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    this[name$0] = name;
    semantics.SemanticsSortKey.__proto__.new.call(this);
    ;
  }).prototype = semantics.SemanticsSortKey.prototype;
  dart.addTypeTests(semantics.SemanticsSortKey);
  semantics.SemanticsSortKey[dart.implements] = () => [core.Comparable$(semantics.SemanticsSortKey)];
  dart.setMethodSignature(semantics.SemanticsSortKey, () => ({
    __proto__: dart.getMethods(semantics.SemanticsSortKey.__proto__),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object])
  }));
  dart.setLibraryUri(semantics.SemanticsSortKey, "package:flutter/src/semantics/semantics.dart");
  dart.setFieldSignature(semantics.SemanticsSortKey, () => ({
    __proto__: dart.getFields(semantics.SemanticsSortKey.__proto__),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(semantics.SemanticsSortKey, ['compareTo']);
  var order$ = dart.privateName(semantics, "OrdinalSortKey.order");
  semantics.OrdinalSortKey = class OrdinalSortKey extends semantics.SemanticsSortKey {
    get order() {
      return this[order$];
    }
    set order(value) {
      super.order = value;
    }
    doCompare(other) {
      semantics.OrdinalSortKey._check(other);
      if (other.order == null || this.order == null || other.order == this.order) return 0;
      return this.order[$compareTo](other.order);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("order", this.order, {defaultValue: null}));
    }
  };
  (semantics.OrdinalSortKey.new = function(order, opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    this[order$] = order;
    if (!(order != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 4080, 15, "order != null");
    if (!(order !== 0 / 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 4081, 15, "order != double.nan");
    if (!(dart.notNull(order) > -1 / 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 4082, 15, "order > double.negativeInfinity");
    if (!(dart.notNull(order) < 1 / 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 4083, 15, "order < double.infinity");
    semantics.OrdinalSortKey.__proto__.new.call(this, {name: name});
    ;
  }).prototype = semantics.OrdinalSortKey.prototype;
  dart.addTypeTests(semantics.OrdinalSortKey);
  dart.setMethodSignature(semantics.OrdinalSortKey, () => ({
    __proto__: dart.getMethods(semantics.OrdinalSortKey.__proto__),
    doCompare: dart.fnType(core.int, [core.Object])
  }));
  dart.setLibraryUri(semantics.OrdinalSortKey, "package:flutter/src/semantics/semantics.dart");
  dart.setFieldSignature(semantics.OrdinalSortKey, () => ({
    __proto__: dart.getFields(semantics.OrdinalSortKey.__proto__),
    order: dart.finalFieldType(core.double)
  }));
  var _name$0 = dart.privateName(ui, "_name");
  var C7;
  var C8;
  semantics.debugResetSemanticsIdCounter = function debugResetSemanticsIdCounter() {
    semantics.SemanticsNode._lastIdentifier = 0;
  };
  semantics._pointInParentCoordinates = function _pointInParentCoordinates(node, point) {
    if (node.transform == null) {
      return point;
    }
    let vector = vector_math_64.Vector3.new(point.dx, point.dy, 0.0);
    node.transform.transform3(vector);
    return new ui.Offset.new(vector.x, vector.y);
  };
  semantics._childrenInDefaultOrder = function _childrenInDefaultOrder(children, textDirection) {
    let edges = JSArrayOf_BoxEdge().of([]);
    for (let child of children) {
      if (!dart.test(child.rect.isFinite)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2503, 12, "child.rect.isFinite");
      let childRect = child.rect.deflate(0.1);
      edges[$add](new semantics._BoxEdge.new({isLeadingEdge: true, offset: semantics._pointInParentCoordinates(child, childRect.topLeft).dy, node: child}));
      edges[$add](new semantics._BoxEdge.new({isLeadingEdge: false, offset: semantics._pointInParentCoordinates(child, childRect.bottomRight).dy, node: child}));
    }
    edges[$sort]();
    let verticalGroups = JSArrayOf_SemanticsSortGroup().of([]);
    let group = null;
    let depth = 0;
    for (let edge of edges) {
      if (dart.test(edge.isLeadingEdge)) {
        depth = depth + 1;
        group == null ? group = new semantics._SemanticsSortGroup.new({startOffset: edge.offset, textDirection: textDirection}) : null;
        group.nodes[$add](edge.node);
      } else {
        depth = depth - 1;
      }
      if (depth === 0) {
        verticalGroups[$add](group);
        group = null;
      }
    }
    verticalGroups[$sort]();
    return verticalGroups[$expand](semantics.SemanticsNode, dart.fn(group => group.sortedWithinVerticalGroup(), _SemanticsSortGroupToListOfSemanticsNode()))[$toList]();
  };
  semantics._concatStrings = function _concatStrings(opts) {
    let thisString = opts && 'thisString' in opts ? opts.thisString : null;
    let otherString = opts && 'otherString' in opts ? opts.otherString : null;
    let thisTextDirection = opts && 'thisTextDirection' in opts ? opts.thisTextDirection : null;
    let otherTextDirection = opts && 'otherTextDirection' in opts ? opts.otherTextDirection : null;
    if (otherString[$isEmpty]) return thisString;
    let nestedLabel = otherString;
    if (!dart.equals(thisTextDirection, otherTextDirection) && otherTextDirection != null) {
      switch (otherTextDirection) {
        case C7 || CT.C7:
        {
          nestedLabel = "‫" + dart.str(nestedLabel) + "‬";
          break;
        }
        case C8 || CT.C8:
        {
          nestedLabel = "‪" + dart.str(nestedLabel) + "‬";
          break;
        }
      }
    }
    if (thisString[$isEmpty]) return nestedLabel;
    return dart.str(thisString) + "\n" + dart.str(nestedLabel);
  };
  var type$ = dart.privateName(semantics_event, "SemanticsEvent.type");
  semantics_event.SemanticsEvent = class SemanticsEvent extends core.Object {
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    toMap(opts) {
      let nodeId = opts && 'nodeId' in opts ? opts.nodeId : null;
      let event = new (IdentityMapOfString$dynamic()).from(["type", this.type, "data", this.getDataMap()]);
      if (nodeId != null) event[$_set]("nodeId", nodeId);
      return event;
    }
    toString() {
      let t4;
      let pairs = JSArrayOfString().of([]);
      let dataMap = this.getDataMap();
      let sortedKeys = (t4 = dataMap[$keys][$toList](), t4[$sort](), t4);
      for (let key of sortedKeys)
        pairs[$add](dart.str(key) + ": " + dart.str(dataMap[$_get](key)));
      return dart.str(object.objectRuntimeType(this, "SemanticsEvent")) + "(" + dart.str(pairs[$join](", ")) + ")";
    }
  };
  (semantics_event.SemanticsEvent.new = function(type) {
    this[type$] = type;
    ;
  }).prototype = semantics_event.SemanticsEvent.prototype;
  dart.addTypeTests(semantics_event.SemanticsEvent);
  dart.setMethodSignature(semantics_event.SemanticsEvent, () => ({
    __proto__: dart.getMethods(semantics_event.SemanticsEvent.__proto__),
    toMap: dart.fnType(core.Map$(core.String, dart.dynamic), [], {nodeId: core.int}, {})
  }));
  dart.setLibraryUri(semantics_event.SemanticsEvent, "package:flutter/src/semantics/semantics_event.dart");
  dart.setFieldSignature(semantics_event.SemanticsEvent, () => ({
    __proto__: dart.getFields(semantics_event.SemanticsEvent.__proto__),
    type: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(semantics_event.SemanticsEvent, ['toString']);
  var message$ = dart.privateName(semantics_event, "AnnounceSemanticsEvent.message");
  var textDirection$1 = dart.privateName(semantics_event, "AnnounceSemanticsEvent.textDirection");
  semantics_event.AnnounceSemanticsEvent = class AnnounceSemanticsEvent extends semantics_event.SemanticsEvent {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get textDirection() {
      return this[textDirection$1];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    getDataMap() {
      return new (IdentityMapOfString$dynamic()).from(["message", this.message, "textDirection", this.textDirection.index]);
    }
  };
  (semantics_event.AnnounceSemanticsEvent.new = function(message, textDirection) {
    this[message$] = message;
    this[textDirection$1] = textDirection;
    if (!(message != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics_event.dart", 70, 14, "message != null");
    if (!(textDirection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics_event.dart", 71, 14, "textDirection != null");
    semantics_event.AnnounceSemanticsEvent.__proto__.new.call(this, "announce");
    ;
  }).prototype = semantics_event.AnnounceSemanticsEvent.prototype;
  dart.addTypeTests(semantics_event.AnnounceSemanticsEvent);
  dart.setMethodSignature(semantics_event.AnnounceSemanticsEvent, () => ({
    __proto__: dart.getMethods(semantics_event.AnnounceSemanticsEvent.__proto__),
    getDataMap: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(semantics_event.AnnounceSemanticsEvent, "package:flutter/src/semantics/semantics_event.dart");
  dart.setFieldSignature(semantics_event.AnnounceSemanticsEvent, () => ({
    __proto__: dart.getFields(semantics_event.AnnounceSemanticsEvent.__proto__),
    message: dart.finalFieldType(core.String),
    textDirection: dart.finalFieldType(ui.TextDirection)
  }));
  var message$0 = dart.privateName(semantics_event, "TooltipSemanticsEvent.message");
  semantics_event.TooltipSemanticsEvent = class TooltipSemanticsEvent extends semantics_event.SemanticsEvent {
    get message() {
      return this[message$0];
    }
    set message(value) {
      super.message = value;
    }
    getDataMap() {
      return new (IdentityMapOfString$dynamic()).from(["message", this.message]);
    }
  };
  (semantics_event.TooltipSemanticsEvent.new = function(message) {
    this[message$0] = message;
    semantics_event.TooltipSemanticsEvent.__proto__.new.call(this, "tooltip");
    ;
  }).prototype = semantics_event.TooltipSemanticsEvent.prototype;
  dart.addTypeTests(semantics_event.TooltipSemanticsEvent);
  dart.setMethodSignature(semantics_event.TooltipSemanticsEvent, () => ({
    __proto__: dart.getMethods(semantics_event.TooltipSemanticsEvent.__proto__),
    getDataMap: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(semantics_event.TooltipSemanticsEvent, "package:flutter/src/semantics/semantics_event.dart");
  dart.setFieldSignature(semantics_event.TooltipSemanticsEvent, () => ({
    __proto__: dart.getFields(semantics_event.TooltipSemanticsEvent.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  var C9;
  semantics_event.LongPressSemanticsEvent = class LongPressSemanticsEvent extends semantics_event.SemanticsEvent {
    getDataMap() {
      return C9 || CT.C9;
    }
  };
  (semantics_event.LongPressSemanticsEvent.new = function() {
    semantics_event.LongPressSemanticsEvent.__proto__.new.call(this, "longPress");
    ;
  }).prototype = semantics_event.LongPressSemanticsEvent.prototype;
  dart.addTypeTests(semantics_event.LongPressSemanticsEvent);
  dart.setMethodSignature(semantics_event.LongPressSemanticsEvent, () => ({
    __proto__: dart.getMethods(semantics_event.LongPressSemanticsEvent.__proto__),
    getDataMap: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(semantics_event.LongPressSemanticsEvent, "package:flutter/src/semantics/semantics_event.dart");
  semantics_event.TapSemanticEvent = class TapSemanticEvent extends semantics_event.SemanticsEvent {
    getDataMap() {
      return C9 || CT.C9;
    }
  };
  (semantics_event.TapSemanticEvent.new = function() {
    semantics_event.TapSemanticEvent.__proto__.new.call(this, "tap");
    ;
  }).prototype = semantics_event.TapSemanticEvent.prototype;
  dart.addTypeTests(semantics_event.TapSemanticEvent);
  dart.setMethodSignature(semantics_event.TapSemanticEvent, () => ({
    __proto__: dart.getMethods(semantics_event.TapSemanticEvent.__proto__),
    getDataMap: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(semantics_event.TapSemanticEvent, "package:flutter/src/semantics/semantics_event.dart");
  semantics_event.UpdateLiveRegionEvent = class UpdateLiveRegionEvent extends semantics_event.SemanticsEvent {
    getDataMap() {
      return C9 || CT.C9;
    }
  };
  (semantics_event.UpdateLiveRegionEvent.new = function() {
    semantics_event.UpdateLiveRegionEvent.__proto__.new.call(this, "updateLiveRegion");
    ;
  }).prototype = semantics_event.UpdateLiveRegionEvent.prototype;
  dart.addTypeTests(semantics_event.UpdateLiveRegionEvent);
  dart.setMethodSignature(semantics_event.UpdateLiveRegionEvent, () => ({
    __proto__: dart.getMethods(semantics_event.UpdateLiveRegionEvent.__proto__),
    getDataMap: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(semantics_event.UpdateLiveRegionEvent, "package:flutter/src/semantics/semantics_event.dart");
  var _accessibilityFeatures = dart.privateName(binding$, "_accessibilityFeatures");
  binding$.SemanticsBinding = class SemanticsBinding extends binding.BindingBase {
    static get instance() {
      return binding$.SemanticsBinding._instance;
    }
  };
  binding$.SemanticsBinding[dart.mixinOn] = BindingBase => class SemanticsBinding extends BindingBase {
    initInstances() {
      super.initInstances();
      binding$.SemanticsBinding._instance = this;
      this[_accessibilityFeatures] = this.window.accessibilityFeatures;
    }
    handleAccessibilityFeaturesChanged() {
      this[_accessibilityFeatures] = this.window.accessibilityFeatures;
    }
    get accessibilityFeatures() {
      return this[_accessibilityFeatures];
    }
    get disableAnimations() {
      let value = this[_accessibilityFeatures].disableAnimations;
      if (!dart.test(dart.fn(() => {
        if (debug.debugSemanticsDisableAnimations != null) value = debug.debugSemanticsDisableAnimations;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/binding.dart", 51, 12, "() {\r\n      if (debugSemanticsDisableAnimations != null)\r\n        value = debugSemanticsDisableAnimations;\r\n      return true;\r\n    }()");
      return value;
    }
  };
  (binding$.SemanticsBinding[dart.mixinNew] = function() {
    this[_accessibilityFeatures] = null;
  }).prototype = binding$.SemanticsBinding.prototype;
  dart.addTypeTests(binding$.SemanticsBinding);
  binding$.SemanticsBinding[dart.implements] = () => [binding.BindingBase];
  dart.setMethodSignature(binding$.SemanticsBinding, () => ({
    __proto__: dart.getMethods(binding$.SemanticsBinding.__proto__),
    handleAccessibilityFeaturesChanged: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(binding$.SemanticsBinding, () => ({
    __proto__: dart.getGetters(binding$.SemanticsBinding.__proto__),
    accessibilityFeatures: ui.AccessibilityFeatures,
    disableAnimations: core.bool
  }));
  dart.setLibraryUri(binding$.SemanticsBinding, "package:flutter/src/semantics/binding.dart");
  dart.setFieldSignature(binding$.SemanticsBinding, () => ({
    __proto__: dart.getFields(binding$.SemanticsBinding.__proto__),
    [_accessibilityFeatures]: dart.fieldType(ui.AccessibilityFeatures)
  }));
  dart.defineLazy(binding$.SemanticsBinding, {
    /*binding$.SemanticsBinding._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  });
  semantics_service.SemanticsService = class SemanticsService extends core.Object {
    static announce(message, textDirection) {
      return async.async(dart.void, function* announce() {
        let event = new semantics_event.AnnounceSemanticsEvent.new(message, textDirection);
        yield system_channels.SystemChannels.accessibility.send(event.toMap());
      });
    }
    static tooltip(message) {
      return async.async(dart.void, function* tooltip() {
        let event = new semantics_event.TooltipSemanticsEvent.new(message);
        yield system_channels.SystemChannels.accessibility.send(event.toMap());
      });
    }
  };
  (semantics_service.SemanticsService.__ = function() {
    ;
  }).prototype = semantics_service.SemanticsService.prototype;
  dart.addTypeTests(semantics_service.SemanticsService);
  dart.setLibraryUri(semantics_service.SemanticsService, "package:flutter/src/semantics/semantics_service.dart");
  dart.setBaseClass(semantics._SemanticsSortGroup, core.Comparable$(semantics._SemanticsSortGroup));
  dart.trackLibraries("packages/flutter/src/semantics/binding", {
    "package:flutter/src/semantics/debug.dart": debug,
    "package:flutter/src/semantics/semantics.dart": semantics,
    "package:flutter/src/semantics/semantics_event.dart": semantics_event,
    "package:flutter/src/semantics/binding.dart": binding$,
    "package:flutter/src/semantics/semantics_service.dart": semantics_service
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["debug.dart","semantics.dart","semantics_event.dart","binding.dart","semantics_service.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAQK,qCAA+B;;;;;;;IC0DrB;;;;;;;AAGQ,YAAmD,UAAhD,yBAAkB,MAAM,mBAAgB,eAAE,aAAI;IAAE;;;IARhD;;EAAK;;;;;;;;;;;;IAuDhB;;;;;;IAGA;;;;;;IAGS;;;;;;;AAGF,2BAAc,YAAO,WAAM;IAAO;;UAG9B;AACtB,uBAAU,iBAAN,KAAK,GAAgB,qBACvB,MAAO;AACT,YAAa,AAGT,oCAHG,KAAK,KACL,AAAM,AAAM,KAAP,UAAU,cACf,AAAM,AAAK,KAAN,SAAS,aACD,YAAb,AAAM,KAAD,SAAW;IACzB;;AAIE,YAAO,AAAgF,qCAAvD,AAAI,4CAAC,SAAM,sBAAS,cAAK,qBAAQ,aAAI,uBAAU,eAAM;IACvF;yBAS+C;;AACzC,mBAAS,AAAI,4CAAC,MAAM;AACxB,UAAI,AAAO,MAAD,IAAI;AACM,QAAlB,UAAgB,KAAP,sGAAO;AACK,QAArB,AAAI,4CAAC,MAAM,EAAI,MAAM;AACI,QAAzB,AAAQ,gDAAC,MAAM,EAAI,MAAM;;AAE3B,YAAO,OAAM;IACf;qBAG2C;AACzC,YAAO,AAAQ,iDAAC,EAAE;IACpB;;;QA/D4C;;UACjC,AAAM,KAAD,IAAI;UACT,AAAM,KAAD,KAAI;IACX,cAAE;IACA,gBAAE;;EAAI;;QAM4C;QAAqB;IAArB;IAAqB;UACvE,AAAK,IAAD,IAAI;UACR,AAAK,IAAD,KAAI;UACR,AAAO,MAAD,IAAI;IACX,eAAE;;EAAI;;;;;;;;;;;;;;;;;MA+BL,uCAAO;YAAG;;;MACwB,wCAAQ;YAA+B;;MACvC,oCAAI;YAA+B;;;;;;;;;;;;;;;;;;;;;;;;;;;IAyEtE;;;;;;IAGA;;;;;;IAKG;;;;;;IAKA;;;;;;IAMA;;;;;;IAMA;;;;;;IAKA;;;;;;IAIO;;;;;;IAIA;;;;;;IAMV;;;;;;IAGA;;;;;;IAYG;;;;;;IAUA;;;;;;IAUA;;;;;;IAaH;;;;;;IAUA;;;;;;IAUA;;;;;;IAGC;;;;;;IAGa;;;;;;IAOV;;;;;;IAQD;;;;;;IAOA;;;;;;IAUG;;;;;;YAGW;AAAS,YAAqB,EAAd,aAAN,2BAAQ,AAAK,IAAD,aAAW;IAAC;cAG9B;AAAW,YAAyB,EAAhB,aAAR,6BAAU,AAAO,MAAD,aAAW;IAAC;;AAG7C,sCAAkB,MAAM;IAAgB;wBAGb;;AACd,MAA/B,0BAAoB,UAAU;AACoC,MAAxE,AAAW,UAAD,KAAK,sCAA0B,QAAQ,sBAAgB;AAC6B,MAA9F,AAAW,UAAD,KAAK,uCAAkB,aAAa,2BAAqB,qBAAqB;AACf,MAAzE,AAAW,UAAD,KAAK,mCAAe,aAAa,+BAAyB;AACK,MAAzE,AAAW,UAAD,KAAK,mCAAe,aAAa,+BAAyB;AACjD,0BAAwB;;AACzC,iBAA2B,SAA0B,AAAO;AAC1D,eAAa,aAAR,6BAAU,AAAO,MAAD,aAAW,GAC9B,kCAAa,MAAM;;;AAEN,yCAA+B,AAC/C,AACA,iDADY,QAAK,YAAmC,AAAoB,0CAAV,QAAQ;AAEQ,MAAjF,AAAW,UAAD,KAAK,qCAAyB,WAAW,aAAa,YAAW;AAC2B,MAAtG,AAAW,UAAD,KAAK,qCAAyB,iBAAiB,4BAA4B,YAAW;AAE7E,wBAAsB;;AACvC,iBAAyB,OAAsB,AAAO;AACpD,eAAW,aAAN,2BAAQ,AAAK,IAAD,aAAW,GAC1B,kCAAa,IAAI;;;AAEsD,MAA7E,AAAW,UAAD,KAAK,qCAAyB,SAAS,WAAW,YAAW;AACP,MAAhE,AAAW,UAAD,KAAK,mCAAe,SAAS,2BAAqB;AACI,MAAhE,AAAW,UAAD,KAAK,mCAAe,SAAS,2BAAqB;AACsB,MAAlF,AAAW,UAAD,KAAK,mCAAe,kBAAkB,oCAA8B;AACI,MAAlF,AAAW,UAAD,KAAK,mCAAe,kBAAkB,oCAA8B;AAChB,MAA9D,AAAW,UAAD,KAAK,mCAAe,QAAQ,0BAAoB;AACqC,MAA/F,AAAW,UAAD,KAAK,wCAA4B,iBAAiB,mCAA6B;AACzF,UAA2B,mDAAvB,OAAe,aAAW,OAC5B,AAAW,AAAuF,UAAxF,KAAK,oCAAgB,iBAAiB,AAAgD,eAA5C,AAAc,4BAAM,gBAAI,AAAc,0BAAI;AACf,MAAjF,AAAW,UAAD,KAAK,gCAAY,kBAAkB,oCAA8B;AACM,MAAjF,AAAW,UAAD,KAAK,gCAAY,kBAAkB,oCAA8B;AACc,MAAzF,AAAW,UAAD,KAAK,gCAAY,sBAAsB,wCAAkC;AACA,MAAnF,AAAW,UAAD,KAAK,gCAAY,kBAAkB,sCAAgC;AACF,MAA3E,AAAW,UAAD,KAAK,gCAAY,eAAe,iCAA2B;AACiB,MAAtF,AAAW,UAAD,KAAK,mCAAe,mBAAmB,qCAA+B;AACI,MAApF,AAAW,UAAD,KAAK,mCAAe,kBAAkB,oCAA8B;AACQ,MAAtF,AAAW,UAAD,KAAK,mCAAe,mBAAmB,qCAA+B;IAClF;;UAGwB;AACtB,YAAa,AAuBT,4BAvBG,KAAK,KACL,AAAM,AAAM,KAAP,UAAU,cACf,AAAM,AAAQ,KAAT,YAAY,gBACjB,AAAM,AAAM,KAAP,UAAU,cACf,AAAM,AAAM,KAAP,UAAU,cACf,AAAM,AAAe,KAAhB,mBAAmB,uBACxB,AAAM,AAAe,KAAhB,mBAAmB,uBACxB,AAAM,AAAK,KAAN,SAAS,aACM,YAApB,AAAM,KAAD,gBAAkB,uBACZ,YAAX,AAAM,KAAD,OAAS,wBACd,8CAAU,AAAM,KAAD,OAAO,eACtB,AAAM,AAAiB,KAAlB,qBAAqB,yBAC1B,AAAM,AAAY,KAAb,gBAAgB,oBACD,YAApB,AAAM,KAAD,gBAAkB,uBACvB,AAAM,AAAe,KAAhB,mBAAmB,uBACxB,AAAM,AAAgB,KAAjB,oBAAoB,wBACzB,AAAM,AAAgB,KAAjB,oBAAoB,wBACzB,AAAM,AAAe,KAAhB,mBAAmB,uBACxB,AAAM,AAAe,KAAhB,mBAAmB,uBACxB,AAAM,AAAmB,KAApB,uBAAuB,2BACZ,YAAhB,AAAM,KAAD,YAAc,mBACnB,AAAM,AAAU,KAAX,cAAc,kBACnB,AAAM,AAAU,KAAX,cAAc,4BACnB,0CAAkB,AAAM,KAAD,2BAA2B;IAC3D;;AAIE,YAAO,eACL,cACE,YACA,cACA,YACA,YACA,qBACA,qBACA,WACA,oBACA,WACA,WACA,oBACA,uBACA,kBACA,qBACA,sBACA,sBACA,qBACA,qBACA,yBACA,iBAEF,gBACA,gBACA,YAAY;IAEhB;6BAEwC,MAAgB;AACtD,UAAI,AAAK,IAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,MAC3B,MAAO;AACT,UAAI,IAAI,IAAI,QAAQ,KAAK,IAAI;AAC3B,YAAI,AAAK,IAAD,aAAW,AAAM,KAAD,WACtB,MAAO;AACT,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAK,IAAD,YAAS,IAAA,AAAC,CAAA;AAChC,cAAI,AAAI,IAAA,QAAC,CAAC,KAAK,AAAK,KAAA,QAAC,CAAC,GACpB,MAAO;AACX,cAAO;;AAET,YAAO;IACT;;;QAxTiB;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACV;QACA;QACA;IAtBU;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACV;IACA;IACA;UACK,AAAM,KAAD,IAAI;UACT,AAAQ,OAAD,IAAI;UACX,AAAM,KAAD,IAAI;UACT,AAAM,KAAD,IAAI;UACT,AAAe,cAAD,IAAI;UAClB,AAAe,cAAD,IAAI;UAClB,AAAK,IAAD,IAAI;UACR,AAAM,AAAM,KAAP,KAAI,MAAM,aAAa,IAAI,yBAAM,AAAsE,kDAAjC,KAAK;UAChF,AAAM,AAAM,KAAP,KAAI,MAAM,aAAa,IAAI,yBAAM,AAAsE,kDAAjC,KAAK;UAChF,AAAK,AAAM,IAAP,KAAI,MAAM,aAAa,IAAI,yBAAM,AAAoE,iDAAhC,IAAI;UAC7E,AAAe,AAAM,cAAP,KAAI,MAAM,aAAa,IAAI,yBAAM,AAAwF,2DAA1C,cAAc;UAC3G,AAAe,AAAM,cAAP,KAAI,MAAM,aAAa,IAAI,yBAAM,AAAwF,2DAA1C,cAAc;UAC3G,AAAK,IAAD,IAAI;AApCd;;EAoCmB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAg+Bf;;;;;;IAMA;;;;;;IAiDL;;;;;;IAeA;;;;;;IAiBE;;;;;;IAQH;;;;;;IAoSc;;;;;;;AA3Y8D,MAA9E,0CAAwC,CAAL,aAAhB,2CAAkB;AACrC,YAAO;IACT;;AAuByB;IAAU;kBAEb;AACpB,qBAAiB,sCAAa,kBAAY,KAAK;AACY,QAAzD,6BAAyB,oCAAW,KAAK,KAAI,OAAO,KAAK;AAC7C,QAAZ;;IAEJ;;AAGiB;IAAK;aAER;AACZ,YAAO,AAAM,KAAD,IAAI;AAChB,qBAAO,AAAM,KAAD,8BAAgE,SAAnD,QAAI,qBAAQ,cAAK;AAC1C,uBAAI,aAAS,KAAK;AACH,QAAb,cAAQ,KAAK;AACD,QAAZ;;IAEJ;;AAuEwB,YAAoB,YAAnB,sCAAsB,AAAK;IAAO;;AAK5B;IAAmB;2BAEtB;AAC1B,YAAO,AAAM,KAAD,IAAI;AAChB,UAAwB,YAApB,2BAAuB,KAAK,GAC9B;AACyB,MAA3B,4BAAsB,KAAK;AACf,MAAZ;IACF;;AAWgC,YAAgC,WAAhC,mDAAmC;IAAkB;;AAGzC;IAAgC;uBAclC;;AACxC,WAAO,WAAC,AAAY,WAAD,OAAK,QAAe,SAAgB,YAAN,KAAK,EAAI;AAC1D,qBAAO,AAsCN;AArCC,YAAI,AAAU,WAAW,IAAE;AACG,+BAAkC;AAC9D,cAAI,AAAY,WAAD,aAAW,AAAuB;AAI7C,YAHF,AAAe,cAAD,OAAK,oCAAgB,AACjC,iDAAuC,AAAuB,yCAAO,MACrE,iBAAM,AAAY,WAAD,aAAQ;;AAG3B,qBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAY,WAAD,YAAS,IAAA,AAAC,CAAA;AACvC,kBAAe,AAAW,WAAA,QAAC,CAAC,KAAG,AAAsB,oCAAC,CAAC;AACrD,8BAAI,AAAe,cAAD;AACiB,kBAAjC,AAAe,cAAD,OAAK;;AAE0D,gBAA/E,AAAe,cAAD,OAAK,oCAAiB,AAAyC,qCAAhB,CAAC;AACsD,gBAApH,AAAe,cAAD,OAAK,AAAW,AAAI,WAAJ,QAAC,CAAC,2BAA0B,yBAA8C;AACkB,gBAA1H,AAAe,cAAD,OAAK,AAAsB,AAAI,oCAAH,CAAC,2BAA0B,oBAAyC;;;;AAIpH,wBAAI,AAAe,cAAD;AAMd,YALF,WAAmB,sCAA2B;;AAC5C,uDAAa;AACb,oDAAU;AACV,2DAAiB;AACjB,4BAAG,eAAc;AAAjB;;;;;AAIN,cAAyE,WAAjE,AAAY,WAAD,OAAK,QAAe,QAAS,AAAK,IAAD,2DAAwB;AAEd,QAA9D,+BAAuB,2BAA2B,WAAW;AAE/C,uBAAW;AACzB,eAAuB,2BAAhB,AAAS,QAAD;AACa,UAA1B,WAAW,AAAS,QAAD;AACrB,aAAO,WAAC,AAAY,WAAD,OAAK,QAAe,SAAgB,YAAN,KAAK,EAAI,QAAQ;AAClE,cAAO;;AAET,qBAAO,AAKN;AAJ0B,2BAA8B;AACvD,iBAAyB,QAAS,YAAW;AAC3C,yBAAO,AAAa,YAAD,KAAK,KAAK;AAC/B,cAAO;;AAIT,UAAI,mBAAa;AACf,iBAAyB,QAAS;AACd,UAAlB,AAAM,KAAD,UAAS;;AAElB,UAAI,WAAW,IAAI;AACjB,iBAAyB,QAAS,YAAW;AAC3C,eAAO,WAAC,AAAM,KAAD,iCAAc,AAAwE,oBAAhE,KAAK,sEAAqD,QAAI;AAC9E,UAAnB,AAAM,KAAD,UAAS;;;AAGb,sBAAY;AACjB,UAAI,mBAAa;AACf,iBAAyB,QAAS;AAChC,wBAAI,AAAM,KAAD;AACP,gBAAiB,YAAb,AAAM,KAAD,SAAW;AAGF,cAAhB,eAAU,KAAK;;AAED,YAAhB,YAAY;;;;AAIlB,UAAI,WAAW,IAAI;AACjB,iBAAyB,QAAS,YAAW;AAC3C,2BAAI,AAAM,KAAD,SAAW;AAClB,gBAAI,AAAM,KAAD,WAAW;AAMY,mBAA9B,AAAM,KAAD;2BAAC,OAAQ,aAAU,KAAK;;AAE/B,iBAAO,WAAC,AAAM,KAAD;AACI,YAAjB,gBAAW,KAAK;AACA,YAAhB,YAAY;;;;AAIlB,WAAK,SAAS,IAAI,mBAAa;AAC7B,cAAO,AAAY,WAAD,IAAI;AACtB,cAAO,AAAY,AAAO,WAAR,aAAW,AAAU;AAEvC,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAU,2BAAQ,IAAA,AAAC,CAAA;AACrC,cAAI,AAAS,AAAI,uBAAH,CAAC,QAAQ,AAAW,AAAI,WAAJ,QAAC,CAAC;AAClB,YAAhB,YAAY;AACZ;;;;AAIiB,MAAvB,kBAAY,WAAW;AACvB,UAAI,SAAS,EACX,AAAY;IAChB;;;AAGwB,uDAAW;oBAAX,OAAyB;IAAK;;AAI7B,2CAAc,AAAU,2BAAS;IAAC;kBAOnB;AACtC,UAAI,mBAAa;AACf,iBAAyB,QAAS;AAChC,yBAAK,AAAO,OAAA,CAAC,KAAK,IAChB;;;IAGR;wBAO4C;AAC1C,UAAI,mBAAa;AACf,iBAAyB,QAAS;AAChC,yBAAK,AAAO,OAAA,CAAC,KAAK,iBAAM,AAAM,KAAD,oBAAmB,OAAO,IACrD,MAAO;;;AAGb,YAAO;IACT;;AAK4B,YAAY,6BAAN;IAAuB;;AAG7B,YAAa,4BAAP;IAAuB;;;AAIvB,WAAhC;0BAAW,uBAAQ;IACrB;;sCAG2B;AACN,MAAb,aAAO,KAAK;AAClB,WAAO,WAAC,AAAM,AAAO,KAAR,uBAAoB;AACV,MAAvB,AAAM,AAAM,KAAP,gBAAQ,SAAM;AACc,MAAjC,AAAM,AAAe,KAAhB,wBAAuB;AAC5B,oBAAI;AACY,QAAd,eAAS;AACG,QAAZ;;AAEF,UAAI,mBAAa;AACf,iBAAyB,QAAS;AACb,UAAnB,AAAM,KAAD,QAAQ,KAAK;;IAExB;;AAIE,qBAAO,AAAM,AAAO,iCAAY;AAChC,WAAO,WAAC,AAAM,AAAe,oCAAS;AACf,MAAvB,AAAM,AAAO,4BAAO;AACU,MAA9B,AAAM,AAAe,+BAAI;AACX,MAAR;AACN,YAAO,AAAM,cAAG;AAChB,UAAI,mBAAa;AACf,iBAAyB,QAAS;AAGhC,cAAiB,YAAb,AAAM,KAAD,SAAW,OAClB,AAAM,AAAQ,KAAT;;;AAMC,MAAZ;IACF;;AAME,oBAAI,eACF;AACW,MAAb,eAAS;AACT,oBAAI;AACF,aAAO,WAAC,AAAM,AAAe,oCAAS;AACX,QAA3B,AAAM,AAAY,4BAAI;;IAE1B;gDAEsE;AACpE,YAAO,AAkB+C,iBAlBrC,AAAO,MAAD,UACnB,eAAS,AAAO,MAAD,SACf,oBAAc,AAAO,MAAD,cACpB,oBAAc,AAAO,MAAD,cACpB,yBAAmB,AAAO,MAAD,mBACzB,gBAAU,AAAO,MAAD,UAChB,yBAAmB,AAAO,MAAD,mBACzB,gBAAU,AAAO,MAAD,yBAChB,sBAAkB,AAAO,MAAD,gCACxB,gBAAY,AAAO,MAAD,4BAClB,sBAAkB,AAAO,MAAD,qBACxB,yBAAmB,AAAO,MAAD,qBACzB,0BAAoB,AAAO,MAAD,sBAC1B,0BAAoB,AAAO,MAAD,sBAC1B,wBAAkB,AAAO,MAAD,oBACxB,sBAAiB,AAAO,MAAD,kBACvB,uBAAkB,AAAO,MAAD,mBACxB,yBAAmB,AAAO,MAAD,qBACzB,6BAAuB,AAAO,MAAD,sCAC7B,wCAAoC,AAAO,MAAD;IAChD;aAgB2B;AAAQ,YAAA,AAAa,cAAL,kBAAQ,AAAK,mBAAS,GAAG;IAAC;YAK1C;AAAS,YAAoB,EAAb,aAAP,6BAAS,AAAK,IAAD,aAAU;IAAC;;AAKxC;IAAM;;AAMN;IAAM;;AAUG;IAAe;;AAUf;IAAe;;AAMzB;IAAK;;AAeA;IAAU;;AAmDV;IAAU;;AAKU;IAAc;;AAKvB;IAAc;;AASjB;IAAQ;;AAKL;IAAc;;AAKzB;IAAY;;AAOR;IAAiB;;AAItB;IAAY;;AAaN;IAAe;;AAWd;IAAgB;;AAWhB;IAAgB;;AAcpB;IAAe;;AAWf;IAAe;;AAWX;IAAmB;wBAGV;AAAW,YAAA,AAAS,8BAAY,MAAM;IAAC;;;UAc3C;UACb;AAEI,MAAxB,AAAO,MAAD,IAAC,OAAP,SAAW,wCAAJ;AACP,oBAAI,gDAA0C,MAAM,IAClD,AAAY;AAEd,YACE,AAAO,AAAe,AAAQ,MAAxB,mBAAmB,kBAAQ,AAA4B,2BAAD,gCAC5D;AAGmB,MAArB,eAAS,AAAO,MAAD;AACwB,MAAvC,wBAAkB,AAAO,MAAD;AACH,MAArB,eAAS,AAAO,MAAD;AACwB,MAAvC,wBAAkB,AAAO,MAAD;AACL,MAAnB,cAAQ,AAAO,MAAD;AACuB,MAArC,uBAAiB,AAAO,MAAD;AACM,MAA7B,mBAAa,AAAO,MAAD;AACU,MAA7B,mBAAa,AAAO,MAAD;AACG,MAAtB,eAAS,AAAO,MAAD;AACsB,MAArC,uBAAiB,AAAO,MAAD;AACE,MAAzB,iBAAW,AAAO,MAAD;AAC6D,MAA9E,iBAAS,oDAAqD,AAAO,MAAD;AACmC,MAAvG,gCAAwB,uDAAgD,AAAO,MAAD;AACxC,MAAtC,uBAAiB,AAAO,MAAD;AACe,MAAtC,uBAAiB,AAAO,MAAD;AACU,MAAjC,qBAAe,AAAO,MAAD;AACmB,MAAxC,wBAAkB,AAAO,MAAD;AACkB,MAA1C,yBAAmB,AAAO,MAAD;AACiB,MAA1C,yBAAmB,AAAO,MAAD;AACgD,MAAzE,yCAAmC,AAAO,MAAD;AACE,MAA3C,0BAAoB,AAAO,MAAD;AACO,MAAjC,qBAAe,AAAO,MAAD;AACe,MAApC,qBAAgB,AAAO,MAAD;AACkB,MAAxC,wBAAkB,AAAO,MAAD;AACgB,MAAxC,wBAAkB,AAAO,MAAD;AACwB,MAAhD,4BAAsB,AAAO,MAAD;AAC4C,MAAxE,wBAA6C,KAA5B,2BAA2B,QAA3B;AAEjB,YAC+C,WAA5C,wBAAkC,iCAA4B,CAAd,AAAO,iBAAG,cAAQ,AAAgB,0BAAG,wBACtF;AAEF,YAC+C,WAA5C,wBAAkC,iCAA4B,CAAd,AAAO,iBAAG,cAAQ,AAAgB,0BAAG,wBACtF;IAEJ;;;AASM,kBAAQ;AACR,oBAAU;AACP,kBAAQ;AACR,iBAAO;AACP,kBAAQ;AACR,2BAAiB;AACjB,2BAAiB;AACV,0BAAgB;AACZ,uBAAa,AAAK,aAAG,OAAO,OAAK,mCAAyB;AAC9D,0BAAgB;AAC1B,6BAAmB;AACnB,wBAAc;AACX,2BAAiB;AACjB,4BAAkB;AAClB,4BAAkB;AACrB,2BAAiB;AACjB,2BAAiB;AACjB,+BAAqB;AACZ,sBAAY;AAClB,sBAAY;AACJ,qCAAgC;AAC/C,eAAiC,SAAU,AAAwB;AACQ,QAAzE,AAAyB,wBAAD,KAA2B,8CAAc,MAAM;AACzE,UAAI,sBAAiB;AACnB,YAAI,AAAc,gCAAa;AACD,uBAA+B,4DACnD,AAAc,sCACI;AAE+C,UAAzE,AAAyB,wBAAD,KAA2B,8CAAc,MAAM;;AAEzE,YAAI,AAAc,sCAAmB;AACP,uBAA+B,4DACnD,AAAc,4CACI;AAE+C,UAAzE,AAAyB,wBAAD,KAA2B,8CAAc,MAAM;;;AAI3E,oBAAI;AA6DA,QA5DF,wBAAkB,QAAe;AAC/B,yBAAO,AAAK,IAAD;AACS,UAApB,QAAM,cAAN,KAAK,iBAAI,AAAK,IAAD;AACiB,UAA9B,UAAQ,cAAR,OAAO,iBAAI,AAAK,IAAD;AACsB,UAArC,AAAc,aAAD,IAAC,OAAd,gBAAkB,AAAK,IAAD,mBAAR;AACuB,UAArC,AAAc,aAAD,IAAC,OAAd,gBAAkB,AAAK,IAAD,mBAAR;AAC6B,UAA3C,AAAiB,gBAAD,IAAC,OAAjB,mBAAqB,AAAK,IAAD,sBAAR;AACgB,UAAjC,AAAY,WAAD,IAAC,OAAZ,cAAgB,AAAK,IAAD,iBAAR;AAC2B,UAAvC,AAAe,cAAD,IAAC,OAAf,iBAAmB,AAAK,IAAD,oBAAR;AAC0B,UAAzC,AAAgB,eAAD,IAAC,OAAhB,kBAAoB,AAAK,IAAD,qBAAR;AACyB,UAAzC,AAAgB,eAAD,IAAC,OAAhB,kBAAoB,AAAK,IAAD,qBAAR;AACuB,UAAvC,AAAe,cAAD,IAAC,OAAf,iBAAmB,AAAK,IAAD,oBAAR;AACwB,UAAvC,AAAe,cAAD,IAAC,OAAf,iBAAmB,AAAK,IAAD,oBAAR;AACgC,UAA/C,AAAmB,kBAAD,IAAC,OAAnB,qBAAuB,AAAK,IAAD,wBAAR;AACnB,cAAI,AAAM,KAAD,KAAI,MAAM,AAAM,KAAD,IAAI,MAC1B,AAAmB,QAAX,AAAK,IAAD;AACd,cAAI,AAAe,cAAD,KAAI,MAAM,AAAe,cAAD,IAAI,MAC5C,AAAqC,iBAApB,AAAK,IAAD;AACvB,cAAI,AAAe,cAAD,KAAI,MAAM,AAAe,cAAD,IAAI,MAC5C,AAAqC,iBAApB,AAAK,IAAD;AACvB,cAAI,AAAK,IAAD,SAAS;AACgB,YAA/B,AAAW,UAAD,IAAC,OAAX,aAA6B,sCAAlB;AACiB,YAA5B,AAAW,UAAD,QAAQ,AAAK,IAAD;;AAExB,cAAI,AAAK,IAAD,6BAA4B;AAClC,qBAAiC,SAAU,AAAwB;AACQ,cAAzE,AAAyB,wBAAD,KAA2B,8CAAc,MAAM;;AAE3E,cAAI,AAAK,IAAD,kBAAkB;AACxB,gBAAI,AAAK,AAAc,IAAf,4BAA4B;AACN,2BAA+B,4DACnD,AAAK,AAAc,IAAf,kCACc;AAE+C,cAAzE,AAAyB,wBAAD,KAA2B,8CAAc,MAAM;;AAEzE,gBAAI,AAAK,AAAc,IAAf,kCAAkC;AACZ,2BAA+B,4DACnD,AAAK,AAAc,IAAf,wCACc;AAE+C,cAAzE,AAAyB,wBAAD,KAA2B,8CAAc,MAAM;;;AAQ1E,UALD,QAAQ,sCACM,KAAK,qBACE,aAAa,eACnB,AAAK,IAAD,8BACG,AAAK,IAAD;AAOzB,UALD,OAAO,sCACO,IAAI,qBACG,aAAa,eACnB,AAAK,IAAD,6BACG,AAAK,IAAD;AAGwC,UAAlE,YAAY,sBAAS,SAAS,EAAkB,aAAhB,AAAK,IAAD,6BAAc,AAAK,IAAD;AAEtD,gBAAO;;;AAIX,YAAO,yCACE,KAAK,WACH,OAAO,SACT,KAAK,SACL,KAAK,kBACI,cAAc,kBACd,cAAc,QACxB,IAAI,iBACK,aAAa,QACtB,sBACK,2BACA,SAAS,aACT,SAAS,QACd,UAAU,iBACD,aAAa,oBACV,gBAAgB,eACrB,WAAW,kBACR,cAAc,mBACb,eAAe,mBACf,eAAe,kBAChB,cAAc,kBACd,cAAc,sBACV,kBAAkB,kCACZ,AAAyB,wBAAD,aAAW;IAEjE;;AAGE,YAAe,AAAW;IAC5B;mBAM4C,SAAkB;;AAC5D,qBAAO;AACa,iBAAO;AACjB;AACA;AACV,qBAAK,+BAAe;AACyB,QAA3C,2BAA2B;AACc,QAAzC,yBAAyB;;AAEf,yBAAa,AAAU;AACP,6BAAiB;AACK,QAAhD,2BAA2B,uCAAU,UAAU;AAC/C,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,UAAU,GAAE,IAAA,AAAE,CAAD,GAAI;AACe,UAAlD,AAAwB,wBAAA,QAAC,CAAC,EAAI,AAAc,AAAI,cAAJ,QAAC,CAAC;;AAIF,QAA9C,yBAAyB,uCAAU,UAAU;AAC7C,iBAAS,IAAe,aAAX,UAAU,IAAG,GAAG,AAAE,CAAD,IAAI,GAAG,IAAA,AAAE,CAAD,GAAI;AACoB,UAA5D,AAAsB,sBAAA,QAAC,CAAC,EAAI,AAAS,AAAqB,uBAAT,AAAI,aAAf,UAAU,IAAG,CAAC,GAAG;;;AAGjD;AACV,UAA8C,kBAA1C,AAAK,IAAD,wCAAC,OAA0B,kBAAc;AAC2B,QAA1E,2BAA2B,uCAAU,AAAK,AAAyB,IAA1B;AACzC,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAK,AAAyB,IAA1B,qCAAkC,IAAA,AAAC,CAAA;AACK,UAA9D,AAAwB,wBAAA,QAAC,CAAC,EAAI,AAAK,AAAwB,IAAzB,iCAA0B,CAAC;AACO,UAApE,AAA+B,8BAAD,KAAK,AAAK,AAAwB,IAAzB,iCAA0B,CAAC;;;AA8BrE,MA3BD,AAAQ,OAAD,iBACD,gBACG,AAAK,IAAD,iBACF,AAAK,IAAD,gBACP,AAAK,IAAD,cACH,AAAK,IAAD,eACJ,AAAK,IAAD,wBACK,AAAK,IAAD,iCACJ,AAAK,IAAD,uBACd,AAAK,IAAD,sBACK,AAAK,IAAD,mCACA,AAAK,AAAc,IAAf,kBAAkB,OAAO,AAAK,AAAc,IAAf,4BAA4B,CAAC,wBAC5D,AAAK,AAAc,IAAf,kBAAkB,OAAO,AAAK,AAAc,IAAf,8BAA8B,CAAC,oBACjD,MAApB,AAAK,IAAD,wBAAC,OAAkB,CAAC,2BACJ,OAApB,AAAK,IAAD,yBAAC,OAAkB,CAAC,gCACI,OAAxB,AAAK,IAAD,6BAAC,OAAsB,CAAC,4BACV,OAAtB,AAAK,IAAD,2BAAC,OAAoB,yBACX,OAAjB,AAAK,IAAD,sBAAC,OAAe,4BACG,OAApB,AAAK,IAAD,yBAAC,wCACiB,OAArB,AAAK,IAAD,0BAAC,wCACgB,OAArB,AAAK,IAAD,0BAAC,kCACa,eAAxB,AAAK,IAAD,2BAAC,OAAW,uBAAX,OAAsB,gEAC3B,AAAK,IAAD,uBACJ,AAAK,IAAD,sCACW,wBAAwB,0BAC1B,sBAAsB,sBACF,OAAzB,wBAAwB,UAAxB,OAA4B;AAEnC,MAAd,eAAS;IACX;;AAIgB,mCAAyB;AACzB,qBAAW;AACzB,aAAO,AAAuB,sBAAD,IAAI,QAAQ,QAAQ,IAAI;AACJ,QAA/C,yBAAyB,AAAS,QAAD;AACP,QAA1B,WAAW,AAAS,QAAD;;AAGD;AACpB,UAAI,sBAAsB,IAAI;AACuD,QAAnF,yBAAyB,kCAAwB,iBAAW,sBAAsB;;AAGhD,QAAlC,yBAAyB;;AAOI,6BAAuC;AACvC,sBAAgC;AAC9C;AACjB,eAAS,WAAW,GAAG,AAAS,QAAD,gBAAG,AAAuB,sBAAD,YAAS,WAAA,AAAS,QAAD,GAAI;AACvD,oBAAQ,AAAsB,sBAAA,QAAC,QAAQ;AACpC,sBAAU,AAAM,KAAD;AAG5B,QAFV,cAAc,AAAS,QAAD,GAAG,IACnB,AAAsB,AAAe,sBAAf,QAAC,AAAS,QAAD,GAAG,aAClC;AACK,8CAAkC,AAAS,AAAK,QAAN,KAAI,KACjC,YAAZ,iBAAR,OAAO,GAA4B,iBAAZ,WAAW,OACjC,AAAQ,OAAD,IAAI,QAAQ,AAAQ,AAAK,OAAN,SAAS,AAAY,WAAD;AACnD,aAAK,+BAA+B,cAAI,AAAU,SAAD;AAG/C,cAAI,WAAW,IAAI;AACD,YAAhB,AAAU,SAAD;;AAEuB,UAAlC,AAAiB,gBAAD,UAAQ,SAAS;AAChB,UAAjB,AAAU,SAAD;;AAOT,QAJF,AAAU,SAAD,OAAK,4CACN,KAAK,WACF,OAAO,YACN,QAAQ;;AAMtB,UAAI,WAAW,IAAI;AACD,QAAhB,AAAU,SAAD;;AAEuB,MAAlC,AAAiB,gBAAD,UAAQ,SAAS;AAEjC,YAAO,AACJ,AACA,iBAFoB,gCACD,QAAoB,YAAa,AAAS,QAAD;IAEjE;cAY8B;AAC5B,qBAAK,gBACH;AACwD,MAA3C,AAAc,kDAAK,AAAM,KAAD,gBAAe;IACxD;;AAG0B,YAAiD,UAA9C,yBAAkB,MAAM,oBAAiB,eAAE;IAAG;wBAGtB;;AACd,MAA/B,0BAAoB,UAAU;AAC/B,sBAAY;AACjB,oBAAI;AACS,2BAAe,AAAc,cAAL,kBAAQ,AAAM,AAAY,iCAAS;AAC8B,QAApG,AAAW,UAAD,KAAK,iCAAa,wBAAuB,YAAY,UAAU,kBAAkB;AACnE,QAAxB,YAAY,YAAY;;AAE2G,MAArI,AAAW,UAAD,KAAK,gDAAoC,SAAS,oBAAc,SAAS,GAAmB,qCAAyB;AAC1B,MAArG,AAAW,UAAD,KAAK,iCAAa,8BAA6B,iCAA4B;AAC+C,MAApI,AAAW,UAAD,KAAK,iCAAa,2CAA0C,8CAAyC;AAClG,mBAAS,AAAU,kBAAG,OAAmB,0CAAiB,kBAAa;AACpF,UAAI,MAAM,IAAI;AAC0E,QAAtF,AAAW,UAAD,KAAK,sCAA0B,QAAQ,AAAK,gBAAM,MAAM,cAAa;;AAElE,oBAAQ,AAAU,kBAAG,OAAmB,oCAAW,kBAAa;AACtE;AACP,YAAI,KAAK,IAAI;AACiD,UAA5D,cAA4D,SAA5C,aAAI,gBAAa,AAAM,KAAD,mBAAiB,KAAG;cACrD,KAAI,kBAAa,mBAAqB,oCAAW;AACzC,uBAAmB,AAAW,AAAY,AAAQ,AAAgD,cAAzF,wBAA2B,aAAW,sBAAe,QAAQ,QAAS,AAAK,IAAD,aAAW,8BAAS;AACtE,UAA9C,cAA8C,SAA9B,aAAI,+BAAkB,MAAM;;AAEoD,QAAlG,AAAW,UAAD,KAAK,sCAA0B,QAAQ,yBAAmB,WAAW,YAAY;;AAEkB,MAA/G,AAAW,UAAD,KAAK,qCAAyB,sCAAQ,OAAM,sBAAI,QAAc,OAAQ,AAAI,GAAD,iDAAsB;AACtF,2BAAU,AAAS,AAAK,AAA8D,yCAAlD,QAAiB,UAAW,yBAAa,MAAM,2CAAa;AAChG,mCAAyB,AAAwB,AACjE,AACA,wDADY,QAAuB,UAAW,AAAO,MAAD;AAEoB,MAA3E,AAAW,UAAD,KAAK,qCAAyB,WAAW,OAAO,YAAW;AAC2B,MAAhG,AAAW,UAAD,KAAK,qCAAyB,iBAAiB,sBAAsB,YAAW;AACvE,kBAAsB,AAAO,AAAO,AAA6C,AAAgF,yCAAvH,QAAe,QAAS,aAAQ,IAAI,8CAAO,QAAe,QAAc,AAAW,cAAhB,IAAI,cAAsB,AAAiB;AACpG,MAAvE,AAAW,UAAD,KAAK,qCAAyB,SAAS,KAAK,YAAW;AACmB,MAApF,AAAW,UAAD,KAAK,iCAAa,uBAAsB,0BAAqB;AAC2B,MAAlG,AAAW,UAAD,KAAK,iCAAa,oBAAmB,aAAsB,oCAAmB;AACvB,MAAjE,AAAW,UAAD,KAAK,mCAAe,SAAS,6BAAsB;AACI,MAAjE,AAAW,UAAD,KAAK,mCAAe,SAAS,6BAAsB;AACsB,MAAnF,AAAW,UAAD,KAAK,mCAAe,kBAAkB,sCAA+B;AACI,MAAnF,AAAW,UAAD,KAAK,mCAAe,kBAAkB,sCAA+B;AAChB,MAA/D,AAAW,UAAD,KAAK,mCAAe,QAAQ,4BAAqB;AACqC,MAAhG,AAAW,UAAD,KAAK,wCAA4B,iBAAiB,qCAA8B;AACG,MAA7F,AAAW,UAAD,KAAK,kDAAsC,WAAW,6BAAuB;AACvF,UAA4B,yDAAxB,OAAgB,eAAW,OAC7B,AAAW,AAA0F,UAA3F,KAAK,oCAAgB,kBAAkB,AAAkD,eAA9C,AAAe,8BAAM,gBAAI,AAAe,4BAAI;AAClB,MAAjF,AAAW,UAAD,KAAK,gCAAY,kBAAkB,oCAA8B;AACM,MAAjF,AAAW,UAAD,KAAK,gCAAY,kBAAkB,oCAA8B;AACc,MAAzF,AAAW,UAAD,KAAK,gCAAY,sBAAsB,wCAAkC;AACA,MAAnF,AAAW,UAAD,KAAK,gCAAY,kBAAkB,sCAAgC;AACF,MAA3E,AAAW,UAAD,KAAK,gCAAY,eAAe,iCAA2B;AACiB,MAAtF,AAAW,UAAD,KAAK,mCAAe,mBAAmB,qCAA+B;AACI,MAApF,AAAW,UAAD,KAAK,mCAAe,kBAAkB,oCAA8B;AACQ,MAAtF,AAAW,UAAD,KAAK,mCAAe,mBAAmB,qCAA+B;AACP,MAAzE,AAAW,UAAD,KAAK,mCAAe,aAAa,+BAAyB;AACK,MAAzE,AAAW,UAAD,KAAK,mCAAe,aAAa,+BAAyB;IACtE;;UAQS;UACA;UACS;UACQ;AAExB,YAAO,AAAW,UAAD,IAAI;AACrB,YAAO,AAA0C,qCAAZ,UAAU,gCAA8B,aAAa,oBAAoB,gBAAgB,YAAY,QAAQ;IACpJ;;UAIS;UACc;UACG;AAExB,YAAO,uDACC,IAAI,SACH,aACA,KAAK,cACA,UAAU;IAE1B;;UAGsE;AACpE,YAAO,AACJ,AACA,+BAF6B,UAAU,qCAClB,QAAe,QAAS,AAAK,IAAD,gCAA+B,UAAU;IAE/F;6BAGqE;AACnE,YAAO,AAAW,UAAD,IAAI;AACrB,UAAI,AAAU,mBAAG,MACf;AAEF,cAAQ,UAAU;;;AAEd,gBAAO;;;;AAEP,gBAAO;;;AAEX,WAAO;AACP,YAAO;IACT;;;QAnlCO;QACQ;IAoDP;IAUH,cAAa;IA2Bb;IAeA;IAiBE;IAQH;IAkBC,4BAAsB;IAsBtB,yCAAmC,AAAc;IAMlC;IAKA;IA6Gf,cAAQ;IAuFR,eAAS;IAoCgC,iBAAW,AAAc;IAC9B,gCAA0B,AAAc;IAE7E,uBAAiB,AAAc;IAMjB;IAKd,eAAS,AAAc;IASpB,eAAS,AAAc;IAMvB,eAAS,AAAc;IAUvB,wBAAkB,AAAc;IAUhC,wBAAkB,AAAc;IAMhC,cAAQ,AAAc;IAetB,mBAAa,AAAc;IAmD3B,mBAAa,AAAc;IAKX;IAKT,uBAAiB,AAAc;IAS5B;IAKH;IAKT;IAOD;IAIA;IAaG;IAWA;IAWA;IAcH;IAWA;IAWA;IAroBG;IAEC,WAAE;IACS,sBAAE,YAAY;AAJjC;;EAIiC;;QAM1B;QACQ;QACE;IA0CT;IAUH,cAAa;IA2Bb;IAeA;IAiBE;IAQH;IAkBC,4BAAsB;IAsBtB,yCAAmC,AAAc;IAMlC;IAKA;IA6Gf,cAAQ;IAuFR,eAAS;IAoCgC,iBAAW,AAAc;IAC9B,gCAA0B,AAAc;IAE7E,uBAAiB,AAAc;IAMjB;IAKd,eAAS,AAAc;IASpB,eAAS,AAAc;IAMvB,eAAS,AAAc;IAUvB,wBAAkB,AAAc;IAUhC,wBAAkB,AAAc;IAMhC,cAAQ,AAAc;IAetB,mBAAa,AAAc;IAmD3B,mBAAa,AAAc;IAKX;IAKT,uBAAiB,AAAc;IAS5B;IAKH;IAKT;IAOD;IAIA;IAaG;IAWA;IAWA;IAcH;IAWA;IAWA;IA5nBG;IAGC,WAAE;IACS,sBAAE,YAAY;AALjC;AAMe,IAAb,YAAO,KAAK;EACd;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAQiB,4DAAoC;;;MAE1C,uCAAe;YAAG;;;MAgnBO,qCAAa;YAAG;;MA4M7B,wCAAgB;YAAG,wCAAU;;MAC7B,yDAAiC;YAAG,wCAAU;;MAC5C,2CAAmB;YAAG;;;;;AA5+C7C,UAAI,cAAS,MACX,MAAO,AAAM,+CAAkC;AAEjD;IACF;;;QAlBS;QACiB;QACO;QAChB;;AACZ,2EACG,IAAI,SACH,KAAK,SACL,KAAK;;EACb;;;;;;;;;;IAmCY;;;;;;IAWA;;;;;;;AAGU,YAAA,AAAkB,mBAAL,QAAQ,wBAAmB;IAAI;;AAG/C,2BAAc,gBAAW;IAAgB;;UAGrC;AACtB,uBAAU,iBAAN,KAAK,GAAgB,qBACvB,MAAO;AACT,YAAa,AAET,qCAFG,KAAK,KACL,AAAM,AAAU,KAAX,cAAc,kBACnB,AAAM,AAAgB,KAAjB,oBAAoB;IAClC;wBAGqD;AACd,MAA/B,0BAAoB,UAAU;AACsC,MAA1E,AAAW,UAAD,KAAK,mCAAe,aAAa,+BAAyB;AACkB,MAAtF,AAAW,UAAD,KAAK,mCAAe,mBAAmB,qCAA+B;IAClF;;;QA/CO;QACA;IADA;IACA;UACK,AAAU,SAAD,KAAI;UACb,AAAgB,eAAD,KAAI;AAJzB;;EAI4B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiHvB;;;;;;IAOA;;;;;;IAOA;;;;;;IAOA;;;;;;IAMA;;;;;;IAOA;;;;;;IAOA;;;;;;IAMA;;;;;;IAOA;;;;;;IAUA;;;;;;IAWA;;;;;;IAMA;;;;;;IAkBA;;;;;;IAOA;;;;;;IASA;;;;;;IAYA;;;;;;IAOA;;;;;;IAOA;;;;;;IAqBA;;;;;;IAUD;;;;;;IAUA;;;;;;IAWG;;;;;;IAWA;;;;;;IAaA;;;;;;IAaA;;;;;;IAYA;;;;;;IAUgB;;;;;;IAMT;;;;;;IAQG;;;;;;IAUJ;;;;;;IAUA;;;;;;IAaA;;;;;;IAaA;;;;;;IAaA;;;;;;IAaA;;;;;;IAaA;;;;;;IAaA;;;;;;IAQA;;;;;;IASA;;;;;;IAQA;;;;;;IASK;;;;;;IASA;;;;;;IASA;;;;;;IASA;;;;;;IASE;;;;;;IAmBP;;;;;;IAmBA;;;;;;IASA;;;;;;IAY4B;;;;;;wBAGM;AACd,MAA/B,0BAAoB,UAAU;AAC6C,MAAjF,AAAW,UAAD,KAAK,sCAA0B,WAAW,6BAAuB;AACQ,MAAnF,AAAW,UAAD,KAAK,sCAA0B,YAAY,8BAAwB;AACb,MAAhE,AAAW,UAAD,KAAK,mCAAe,SAAS,2BAAqB;AACd,MAA9C,AAAW,UAAD,KAAK,mCAAe,SAAS;AACK,MAA5C,AAAW,UAAD,KAAK,mCAAe,QAAQ;AACyD,MAA/F,AAAW,UAAD,KAAK,wCAA4B,iBAAiB,mCAA6B;AACI,MAA7F,AAAW,UAAD,KAAK,kDAAsC,WAAW,6BAAuB;AACI,MAA3F,AAAW,UAAD,KAAK,wDAA4C,iBAAiB;IAC9E;;AAG0B,sCAAkB,MAAM;IAAsB;;;QAtjBjE;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;IAhDA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;AAjDD;;EAkDJ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;gCAqpDqB;AACrB,YAA+B,AAAK,EAArB,aAAP,4BAAS,AAAM,KAAD;IACxB;;;QA7BiB;QACA;QACA;IAFA;IACA;IACA;UACL,AAAc,aAAD,IAAI;UACjB,AAAO,MAAD,IAAI;SACV,AAAO,MAAD;UACN,AAAK,IAAD,IAAI;;EAAK;;;;;;;;;;;;;;;;;;2CAiDS;AAChC,YAAyC,AAAK,EAA1B,aAAZ,iCAAc,AAAM,KAAD;IAC7B;;AAOuB,kBAAkB;AACvC,eAAyB,QAAS;AAErB,wBAAY,AAAM,AAAK,KAAN,cAAc;AAKxC,QAJF,AAAM,KAAD,OAAK,2CACO,cACP,AAAoD,oCAA1B,KAAK,EAAE,AAAU,SAAD,oBAC5C,KAAK;AAMX,QAJF,AAAM,KAAD,OAAK,2CACO,eACP,AAAwD,oCAA9B,KAAK,EAAE,AAAU,SAAD,wBAC5C,KAAK;;AAGH,MAAZ,AAAM,KAAD;AAEqB,6BAAwC;AAC9C;AAChB,kBAAQ;AACZ,eAAoB,OAAQ,MAAK;AAC/B,sBAAI,AAAK,IAAD;AACI,UAAV,QAA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","file":"binding.ddc.js"}');
  // Exports:
  return {
    src__semantics__debug: debug,
    src__semantics__semantics: semantics,
    src__semantics__semantics_event: semantics_event,
    src__semantics__binding: binding$,
    src__semantics__semantics_service: semantics_service
  };
});

//# sourceMappingURL=binding.ddc.js.map
