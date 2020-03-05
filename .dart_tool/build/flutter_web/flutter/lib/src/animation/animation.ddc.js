define(['dart_sdk', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/src/semantics/binding', 'packages/flutter/gestures', 'packages/flutter/src/physics/clamped_simulation'], function(dart_sdk, packages__flutter__src__foundation___bitfield_web, packages__flutter__src__semantics__binding, packages__flutter__gestures, packages__flutter__src__physics__clamped_simulation) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const diagnostics = packages__flutter__src__foundation___bitfield_web.src__foundation__diagnostics;
  const change_notifier = packages__flutter__src__foundation___bitfield_web.src__foundation__change_notifier;
  const object = packages__flutter__src__foundation___bitfield_web.src__foundation__object;
  const observer_list = packages__flutter__src__foundation___bitfield_web.src__foundation__observer_list;
  const assertions = packages__flutter__src__foundation___bitfield_web.src__foundation__assertions;
  const binding = packages__flutter__src__semantics__binding.src__semantics__binding;
  const ticker = packages__flutter__gestures.src__scheduler__ticker;
  const spring_simulation = packages__flutter__src__physics__clamped_simulation.src__physics__spring_simulation;
  const simulation = packages__flutter__src__physics__clamped_simulation.src__physics__simulation;
  const tolerance = packages__flutter__src__physics__clamped_simulation.src__physics__tolerance;
  var animation$ = Object.create(dart.library);
  var tween = Object.create(dart.library);
  var curves = Object.create(dart.library);
  var animations = Object.create(dart.library);
  var listener_helpers = Object.create(dart.library);
  var tween_sequence = Object.create(dart.library);
  var animation_controller = Object.create(dart.library);
  var $round = dartx.round;
  var $floor = dartx.floor;
  var $truncateToDouble = dartx.truncateToDouble;
  var $clamp = dartx.clamp;
  var $abs = dartx.abs;
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $add = dartx.add;
  var $sign = dartx.sign;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $last = dartx.last;
  var $toDouble = dartx.toDouble;
  var $isNotEmpty = dartx.isNotEmpty;
  var $addAll = dartx.addAll;
  var $modulo = dartx['%'];
  var $clear = dartx.clear;
  var $join = dartx.join;
  var $toList = dartx.toList;
  var $first = dartx.first;
  var $isEmpty = dartx.isEmpty;
  var $truncate = dartx.truncate;
  var $runtimeType = dartx.runtimeType;
  var $isFinite = dartx.isFinite;
  var AnimationOfdouble = () => (AnimationOfdouble = dart.constFn(animation$.Animation$(core.double)))();
  var OffsetAndOffsetAndOffsetTobool = () => (OffsetAndOffsetAndOffsetTobool = dart.constFn(dart.fnType(core.bool, [ui.Offset, ui.Offset, ui.Offset])))();
  var JSArrayOfCurve2DSample = () => (JSArrayOfCurve2DSample = dart.constFn(_interceptors.JSArray$(curves.Curve2DSample)))();
  var Curve2DSampleAndCurve2DSample__Tovoid = () => (Curve2DSampleAndCurve2DSample__Tovoid = dart.constFn(dart.fnType(dart.void, [curves.Curve2DSample, curves.Curve2DSample], {forceSubdivide: core.bool}, {})))();
  var doubleTodouble = () => (doubleTodouble = dart.constFn(dart.fnType(core.double, [core.double])))();
  var ListOfOffset = () => (ListOfOffset = dart.constFn(core.List$(ui.Offset)))();
  var JSArrayOfListOfOffset = () => (JSArrayOfListOfOffset = dart.constFn(_interceptors.JSArray$(ListOfOffset())))();
  var JSArrayOfOffset = () => (JSArrayOfOffset = dart.constFn(_interceptors.JSArray$(ui.Offset)))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var ObserverListOfVoidTovoid = () => (ObserverListOfVoidTovoid = dart.constFn(observer_list.ObserverList$(VoidTovoid())))();
  var ListOfVoidTovoid = () => (ListOfVoidTovoid = dart.constFn(core.List$(VoidTovoid())))();
  var DiagnosticsPropertyOfAnimationLocalListenersMixin = () => (DiagnosticsPropertyOfAnimationLocalListenersMixin = dart.constFn(diagnostics.DiagnosticsProperty$(listener_helpers.AnimationLocalListenersMixin)))();
  var SyncIterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin = () => (SyncIterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin = dart.constFn(_js_helper.SyncIterable$(DiagnosticsPropertyOfAnimationLocalListenersMixin())))();
  var IterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin = () => (IterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin = dart.constFn(core.Iterable$(DiagnosticsPropertyOfAnimationLocalListenersMixin())))();
  var VoidToIterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin = () => (VoidToIterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin = dart.constFn(dart.fnType(IterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin(), [])))();
  var AnimationStatusTovoid = () => (AnimationStatusTovoid = dart.constFn(dart.fnType(dart.void, [animation$.AnimationStatus])))();
  var ObserverListOfAnimationStatusTovoid = () => (ObserverListOfAnimationStatusTovoid = dart.constFn(observer_list.ObserverList$(AnimationStatusTovoid())))();
  var ListOfAnimationStatusTovoid = () => (ListOfAnimationStatusTovoid = dart.constFn(core.List$(AnimationStatusTovoid())))();
  var DiagnosticsPropertyOfAnimationLocalStatusListenersMixin = () => (DiagnosticsPropertyOfAnimationLocalStatusListenersMixin = dart.constFn(diagnostics.DiagnosticsProperty$(listener_helpers.AnimationLocalStatusListenersMixin)))();
  var SyncIterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin = () => (SyncIterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin = dart.constFn(_js_helper.SyncIterable$(DiagnosticsPropertyOfAnimationLocalStatusListenersMixin())))();
  var IterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin = () => (IterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin = dart.constFn(core.Iterable$(DiagnosticsPropertyOfAnimationLocalStatusListenersMixin())))();
  var VoidToIterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin = () => (VoidToIterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin = dart.constFn(dart.fnType(IterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin(), [])))();
  var JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  var JSArrayOf_Interval = () => (JSArrayOf_Interval = dart.constFn(_interceptors.JSArray$(tween_sequence._Interval)))();
  var DiagnosticsPropertyOfAnimationController = () => (DiagnosticsPropertyOfAnimationController = dart.constFn(diagnostics.DiagnosticsProperty$(animation_controller.AnimationController)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: animation$.AnimationStatus.prototype,
        [_name$]: "AnimationStatus.dismissed",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: animation$.AnimationStatus.prototype,
        [_name$]: "AnimationStatus.forward",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: animation$.AnimationStatus.prototype,
        [_name$]: "AnimationStatus.reverse",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: animation$.AnimationStatus.prototype,
        [_name$]: "AnimationStatus.completed",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], animation$.AnimationStatus);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: curves._Linear.prototype
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 1,
        [OffsetBase__dx]: 1
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: curves._DecelerateCurve.prototype
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.04,
        [b$]: 1,
        [a$]: 0.18
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.25,
        [b$]: 0.1,
        [a$]: 0.25
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 1,
        [b$]: 0,
        [a$]: 0.42
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.09,
        [c$]: 0.65,
        [b$]: 0.03,
        [a$]: 0.67
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.715,
        [c$]: 0.745,
        [b$]: 0,
        [a$]: 0.47
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.53,
        [c$]: 0.68,
        [b$]: 0.085,
        [a$]: 0.55
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.19,
        [c$]: 0.675,
        [b$]: 0.055,
        [a$]: 0.55
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.22,
        [c$]: 0.685,
        [b$]: 0.03,
        [a$]: 0.895
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.06,
        [c$]: 0.855,
        [b$]: 0.05,
        [a$]: 0.755
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.035,
        [c$]: 0.795,
        [b$]: 0.05,
        [a$]: 0.95
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.335,
        [c$]: 0.98,
        [b$]: 0.04,
        [a$]: 0.6
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.045,
        [c$]: 0.735,
        [b$]: -0.28,
        [a$]: 0.6
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.58,
        [b$]: 0,
        [a$]: 0
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.97,
        [c$]: 0.33,
        [b$]: 0.91,
        [a$]: 0.35
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.565,
        [b$]: 0.575,
        [a$]: 0.39
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.94,
        [c$]: 0.45,
        [b$]: 0.46,
        [a$]: 0.25
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.355,
        [b$]: 0.61,
        [a$]: 0.215
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.44,
        [b$]: 0.84,
        [a$]: 0.165
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.32,
        [b$]: 1,
        [a$]: 0.23
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.22,
        [b$]: 1,
        [a$]: 0.19
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.165,
        [b$]: 0.82,
        [a$]: 0.075
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1.275,
        [c$]: 0.32,
        [b$]: 0.885,
        [a$]: 0.175
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.58,
        [b$]: 0,
        [a$]: 0.42
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.95,
        [c$]: 0.55,
        [b$]: 0.05,
        [a$]: 0.445
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.955,
        [c$]: 0.515,
        [b$]: 0.03,
        [a$]: 0.455
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.355,
        [b$]: 0.045,
        [a$]: 0.645
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.175,
        [b$]: 0,
        [a$]: 0.77
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.07,
        [b$]: 0,
        [a$]: 0.86
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0,
        [b$]: 0,
        [a$]: 1
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.86,
        [c$]: 0.15,
        [b$]: 0.135,
        [a$]: 0.785
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1.55,
        [c$]: 0.265,
        [b$]: -0.55,
        [a$]: 0.68
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 1,
        [c$]: 0.2,
        [b$]: 0,
        [a$]: 0.4
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: curves.Cubic.prototype,
        [d$]: 0.15,
        [c$]: 0.85,
        [b$]: 0.85,
        [a$]: 0.15
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: curves._BounceInCurve.prototype
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: curves._BounceOutCurve.prototype
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: curves._BounceInOutCurve.prototype
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: curves.ElasticInCurve.prototype,
        [period$]: 0.4
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: curves.ElasticOutCurve.prototype,
        [period$0]: 0.4
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: curves.ElasticInOutCurve.prototype,
        [period$1]: 0.4
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: animations._TrainHoppingMode.prototype,
        [_name$0]: "_TrainHoppingMode.minimize",
        index: 0
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: animations._TrainHoppingMode.prototype,
        [_name$0]: "_TrainHoppingMode.maximize",
        index: 1
      });
    },
    get C49() {
      return C49 = dart.constList([C47 || CT.C47, C48 || CT.C48], animations._TrainHoppingMode);
    },
    get C50() {
      return C50 = dart.const({
        __proto__: animations._AlwaysCompleteAnimation.prototype
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: animations._AlwaysDismissedAnimation.prototype
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: animation_controller._AnimationDirection.prototype,
        [_name$1]: "_AnimationDirection.forward",
        index: 0
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: animation_controller._AnimationDirection.prototype,
        [_name$1]: "_AnimationDirection.reverse",
        index: 1
      });
    },
    get C54() {
      return C54 = dart.constList([C52 || CT.C52, C53 || CT.C53], animation_controller._AnimationDirection);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: animation_controller.AnimationBehavior.prototype,
        [_name$1]: "AnimationBehavior.normal",
        index: 0
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: animation_controller.AnimationBehavior.prototype,
        [_name$1]: "AnimationBehavior.preserve",
        index: 1
      });
    },
    get C57() {
      return C57 = dart.constList([C55 || CT.C55, C56 || CT.C56], animation_controller.AnimationBehavior);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: tolerance.Tolerance.prototype,
        [Tolerance_velocity]: 1 / 0,
        [Tolerance_time]: 0.001,
        [Tolerance_distance]: 0.01
      });
    }
  });
  var _name$ = dart.privateName(animation$, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  animation$.AnimationStatus = class AnimationStatus extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (animation$.AnimationStatus.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = animation$.AnimationStatus.prototype;
  dart.addTypeTests(animation$.AnimationStatus);
  dart.setLibraryUri(animation$.AnimationStatus, "package:flutter/src/animation/animation.dart");
  dart.setFieldSignature(animation$.AnimationStatus, () => ({
    __proto__: dart.getFields(animation$.AnimationStatus.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(animation$.AnimationStatus, ['toString']);
  animation$.AnimationStatus.dismissed = C0 || CT.C0;
  animation$.AnimationStatus.forward = C1 || CT.C1;
  animation$.AnimationStatus.reverse = C2 || CT.C2;
  animation$.AnimationStatus.completed = C3 || CT.C3;
  animation$.AnimationStatus.values = C4 || CT.C4;
  const _is_Animation_default = Symbol('_is_Animation_default');
  animation$.Animation$ = dart.generic(T => {
    class Animation extends change_notifier.Listenable {
      get isDismissed() {
        return dart.equals(this.status, animation$.AnimationStatus.dismissed);
      }
      get isCompleted() {
        return dart.equals(this.status, animation$.AnimationStatus.completed);
      }
      drive(U, child) {
        if (!AnimationOfdouble().is(this)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation.dart", 169, 12, "this is Animation<double>");
        return child.animate(AnimationOfdouble().as(this));
      }
      toString() {
        return dart.str(diagnostics.describeIdentity(this)) + "(" + dart.str(this.toStringDetails()) + ")";
      }
      toStringDetails() {
        if (!(this.status != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation.dart", 193, 12, "status != null");
        let icon = null;
        switch (this.status) {
          case C1 || CT.C1:
          {
            icon = "▶";
            break;
          }
          case C2 || CT.C2:
          {
            icon = "◀";
            break;
          }
          case C3 || CT.C3:
          {
            icon = "⏭";
            break;
          }
          case C0 || CT.C0:
          {
            icon = "⏮";
            break;
          }
        }
        if (!(icon != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation.dart", 209, 12, "icon != null");
        return icon;
      }
    }
    (Animation.new = function() {
      Animation.__proto__.new.call(this);
      ;
    }).prototype = Animation.prototype;
    dart.addTypeTests(Animation);
    Animation.prototype[_is_Animation_default] = true;
    Animation[dart.implements] = () => [change_notifier.ValueListenable$(T)];
    dart.setMethodSignature(Animation, () => ({
      __proto__: dart.getMethods(Animation.__proto__),
      drive: dart.gFnType(U => [animation$.Animation$(U), [tween.Animatable$(U)]]),
      toStringDetails: dart.fnType(core.String, [])
    }));
    dart.setGetterSignature(Animation, () => ({
      __proto__: dart.getGetters(Animation.__proto__),
      isDismissed: core.bool,
      isCompleted: core.bool
    }));
    dart.setLibraryUri(Animation, "package:flutter/src/animation/animation.dart");
    dart.defineExtensionMethods(Animation, ['toString']);
    return Animation;
  });
  animation$.Animation = animation$.Animation$();
  dart.addTypeTests(animation$.Animation, _is_Animation_default);
  const _is_Animatable_default = Symbol('_is_Animatable_default');
  tween.Animatable$ = dart.generic(T => {
    var _AnimatedEvaluationOfT = () => (_AnimatedEvaluationOfT = dart.constFn(tween._AnimatedEvaluation$(T)))();
    var _ChainedEvaluationOfT = () => (_ChainedEvaluationOfT = dart.constFn(tween._ChainedEvaluation$(T)))();
    class Animatable extends core.Object {
      evaluate(animation) {
        return this.transform(animation.value);
      }
      animate(parent) {
        return new (_AnimatedEvaluationOfT()).new(parent, this);
      }
      chain(parent) {
        return new (_ChainedEvaluationOfT()).new(parent, this);
      }
    }
    (Animatable.new = function() {
      ;
    }).prototype = Animatable.prototype;
    dart.addTypeTests(Animatable);
    Animatable.prototype[_is_Animatable_default] = true;
    dart.setMethodSignature(Animatable, () => ({
      __proto__: dart.getMethods(Animatable.__proto__),
      evaluate: dart.fnType(T, [animation$.Animation$(core.double)]),
      animate: dart.fnType(animation$.Animation$(T), [animation$.Animation$(core.double)]),
      chain: dart.fnType(tween.Animatable$(T), [tween.Animatable$(core.double)])
    }));
    dart.setLibraryUri(Animatable, "package:flutter/src/animation/tween.dart");
    return Animatable;
  });
  tween.Animatable = tween.Animatable$();
  dart.addTypeTests(tween.Animatable, _is_Animatable_default);
  var _evaluatable$ = dart.privateName(tween, "_evaluatable");
  const _is_AnimationWithParentMixin_default = Symbol('_is_AnimationWithParentMixin_default');
  animations.AnimationWithParentMixin$ = dart.generic(T => {
    class AnimationWithParentMixin extends core.Object {}
    AnimationWithParentMixin[dart.mixinOn] = Object => class AnimationWithParentMixin extends Object {
      addListener(listener) {
        return this.parent.addListener(listener);
      }
      removeListener(listener) {
        return this.parent.removeListener(listener);
      }
      addStatusListener(listener) {
        return this.parent.addStatusListener(listener);
      }
      removeStatusListener(listener) {
        return this.parent.removeStatusListener(listener);
      }
      get status() {
        return this.parent.status;
      }
    };
    (AnimationWithParentMixin[dart.mixinNew] = function() {
    }).prototype = AnimationWithParentMixin.prototype;
    dart.addTypeTests(AnimationWithParentMixin);
    AnimationWithParentMixin.prototype[_is_AnimationWithParentMixin_default] = true;
    AnimationWithParentMixin[dart.implements] = () => [core.Object];
    dart.setMethodSignature(AnimationWithParentMixin, () => ({
      __proto__: dart.getMethods(AnimationWithParentMixin.__proto__),
      addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      addStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])]),
      removeStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])])
    }));
    dart.setGetterSignature(AnimationWithParentMixin, () => ({
      __proto__: dart.getGetters(AnimationWithParentMixin.__proto__),
      status: animation$.AnimationStatus
    }));
    dart.setLibraryUri(AnimationWithParentMixin, "package:flutter/src/animation/animations.dart");
    return AnimationWithParentMixin;
  });
  animations.AnimationWithParentMixin = animations.AnimationWithParentMixin$();
  dart.addTypeTests(animations.AnimationWithParentMixin, _is_AnimationWithParentMixin_default);
  const _is__AnimatedEvaluation_default = Symbol('_is__AnimatedEvaluation_default');
  var parent$ = dart.privateName(tween, "_AnimatedEvaluation.parent");
  tween._AnimatedEvaluation$ = dart.generic(T => {
    const Animation_AnimationWithParentMixin$36 = class Animation_AnimationWithParentMixin extends animation$.Animation$(T) {};
    (Animation_AnimationWithParentMixin$36.new = function() {
      Animation_AnimationWithParentMixin$36.__proto__.new.call(this);
    }).prototype = Animation_AnimationWithParentMixin$36.prototype;
    dart.applyMixin(Animation_AnimationWithParentMixin$36, animations.AnimationWithParentMixin$(core.double));
    class _AnimatedEvaluation extends Animation_AnimationWithParentMixin$36 {
      get parent() {
        return this[parent$];
      }
      set parent(value) {
        super.parent = value;
      }
      get value() {
        return this[_evaluatable$].evaluate(this.parent);
      }
      toString() {
        return dart.str(this.parent) + "➩" + dart.str(this[_evaluatable$]) + "➩" + dart.str(this.value);
      }
      toStringDetails() {
        return dart.str(super.toStringDetails()) + " " + dart.str(this[_evaluatable$]);
      }
    }
    (_AnimatedEvaluation.new = function(parent, _evaluatable) {
      this[parent$] = parent;
      this[_evaluatable$] = _evaluatable;
      _AnimatedEvaluation.__proto__.new.call(this);
      ;
    }).prototype = _AnimatedEvaluation.prototype;
    dart.addTypeTests(_AnimatedEvaluation);
    _AnimatedEvaluation.prototype[_is__AnimatedEvaluation_default] = true;
    dart.setGetterSignature(_AnimatedEvaluation, () => ({
      __proto__: dart.getGetters(_AnimatedEvaluation.__proto__),
      value: T
    }));
    dart.setLibraryUri(_AnimatedEvaluation, "package:flutter/src/animation/tween.dart");
    dart.setFieldSignature(_AnimatedEvaluation, () => ({
      __proto__: dart.getFields(_AnimatedEvaluation.__proto__),
      parent: dart.finalFieldType(animation$.Animation$(core.double)),
      [_evaluatable$]: dart.finalFieldType(tween.Animatable$(T))
    }));
    dart.defineExtensionMethods(_AnimatedEvaluation, ['toString']);
    return _AnimatedEvaluation;
  });
  tween._AnimatedEvaluation = tween._AnimatedEvaluation$();
  dart.addTypeTests(tween._AnimatedEvaluation, _is__AnimatedEvaluation_default);
  var _parent$ = dart.privateName(tween, "_parent");
  const _is__ChainedEvaluation_default = Symbol('_is__ChainedEvaluation_default');
  tween._ChainedEvaluation$ = dart.generic(T => {
    class _ChainedEvaluation extends tween.Animatable$(T) {
      transform(t) {
        return this[_evaluatable$].transform(this[_parent$].transform(t));
      }
      toString() {
        return dart.str(this[_parent$]) + "➩" + dart.str(this[_evaluatable$]);
      }
    }
    (_ChainedEvaluation.new = function(_parent, _evaluatable) {
      this[_parent$] = _parent;
      this[_evaluatable$] = _evaluatable;
      _ChainedEvaluation.__proto__.new.call(this);
      ;
    }).prototype = _ChainedEvaluation.prototype;
    dart.addTypeTests(_ChainedEvaluation);
    _ChainedEvaluation.prototype[_is__ChainedEvaluation_default] = true;
    dart.setMethodSignature(_ChainedEvaluation, () => ({
      __proto__: dart.getMethods(_ChainedEvaluation.__proto__),
      transform: dart.fnType(T, [core.double])
    }));
    dart.setLibraryUri(_ChainedEvaluation, "package:flutter/src/animation/tween.dart");
    dart.setFieldSignature(_ChainedEvaluation, () => ({
      __proto__: dart.getFields(_ChainedEvaluation.__proto__),
      [_parent$]: dart.finalFieldType(tween.Animatable$(core.double)),
      [_evaluatable$]: dart.finalFieldType(tween.Animatable$(T))
    }));
    dart.defineExtensionMethods(_ChainedEvaluation, ['toString']);
    return _ChainedEvaluation;
  });
  tween._ChainedEvaluation = tween._ChainedEvaluation$();
  dart.addTypeTests(tween._ChainedEvaluation, _is__ChainedEvaluation_default);
  const _is_Tween_default = Symbol('_is_Tween_default');
  var begin$ = dart.privateName(tween, "Tween.begin");
  var end$ = dart.privateName(tween, "Tween.end");
  tween.Tween$ = dart.generic(T => {
    class Tween extends tween.Animatable$(T) {
      get begin() {
        return this[begin$];
      }
      set begin(value) {
        this[begin$] = T._check(value);
      }
      get end() {
        return this[end$];
      }
      set end(value) {
        this[end$] = T._check(value);
      }
      lerp(t) {
        if (!(this.begin != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/tween.dart", 237, 12, "begin != null");
        if (!(this.end != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/tween.dart", 238, 12, "end != null");
        return T.as(dart.dsend(this.begin, '+', [dart.dsend(dart.dsend(this.end, '-', [this.begin]), '*', [t])]));
      }
      transform(t) {
        if (t === 0.0) return this.begin;
        if (t === 1.0) return this.end;
        return this.lerp(t);
      }
      toString() {
        return dart.str(object.objectRuntimeType(this, "Animatable")) + "(" + dart.str(this.begin) + " → " + dart.str(this.end) + ")";
      }
    }
    (Tween.new = function(opts) {
      let begin = opts && 'begin' in opts ? opts.begin : null;
      let end = opts && 'end' in opts ? opts.end : null;
      this[begin$] = begin;
      this[end$] = end;
      Tween.__proto__.new.call(this);
      ;
    }).prototype = Tween.prototype;
    dart.addTypeTests(Tween);
    Tween.prototype[_is_Tween_default] = true;
    dart.setMethodSignature(Tween, () => ({
      __proto__: dart.getMethods(Tween.__proto__),
      lerp: dart.fnType(T, [core.double]),
      transform: dart.fnType(T, [core.double])
    }));
    dart.setLibraryUri(Tween, "package:flutter/src/animation/tween.dart");
    dart.setFieldSignature(Tween, () => ({
      __proto__: dart.getFields(Tween.__proto__),
      begin: dart.fieldType(T),
      end: dart.fieldType(T)
    }));
    dart.defineExtensionMethods(Tween, ['toString']);
    return Tween;
  });
  tween.Tween = tween.Tween$();
  dart.addTypeTests(tween.Tween, _is_Tween_default);
  const _is_ReverseTween_default = Symbol('_is_ReverseTween_default');
  var parent$0 = dart.privateName(tween, "ReverseTween.parent");
  tween.ReverseTween$ = dart.generic(T => {
    class ReverseTween extends tween.Tween$(T) {
      get parent() {
        return this[parent$0];
      }
      set parent(value) {
        super.parent = value;
      }
      lerp(t) {
        return this.parent.lerp(1.0 - dart.notNull(t));
      }
    }
    (ReverseTween.new = function(parent) {
      this[parent$0] = parent;
      if (!(parent != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/tween.dart", 271, 14, "parent != null");
      ReverseTween.__proto__.new.call(this, {begin: parent.end, end: parent.begin});
      ;
    }).prototype = ReverseTween.prototype;
    dart.addTypeTests(ReverseTween);
    ReverseTween.prototype[_is_ReverseTween_default] = true;
    dart.setLibraryUri(ReverseTween, "package:flutter/src/animation/tween.dart");
    dart.setFieldSignature(ReverseTween, () => ({
      __proto__: dart.getFields(ReverseTween.__proto__),
      parent: dart.finalFieldType(tween.Tween$(T))
    }));
    return ReverseTween;
  });
  tween.ReverseTween = tween.ReverseTween$();
  dart.addTypeTests(tween.ReverseTween, _is_ReverseTween_default);
  tween.ColorTween = class ColorTween extends tween.Tween$(ui.Color) {
    lerp(t) {
      return ui.Color.lerp(this.begin, this.end, t);
    }
  };
  (tween.ColorTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    tween.ColorTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = tween.ColorTween.prototype;
  dart.addTypeTests(tween.ColorTween);
  dart.setLibraryUri(tween.ColorTween, "package:flutter/src/animation/tween.dart");
  tween.SizeTween = class SizeTween extends tween.Tween$(ui.Size) {
    lerp(t) {
      return ui.Size.lerp(this.begin, this.end, t);
    }
  };
  (tween.SizeTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    tween.SizeTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = tween.SizeTween.prototype;
  dart.addTypeTests(tween.SizeTween);
  dart.setLibraryUri(tween.SizeTween, "package:flutter/src/animation/tween.dart");
  tween.RectTween = class RectTween extends tween.Tween$(ui.Rect) {
    lerp(t) {
      return ui.Rect.lerp(this.begin, this.end, t);
    }
  };
  (tween.RectTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    tween.RectTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = tween.RectTween.prototype;
  dart.addTypeTests(tween.RectTween);
  dart.setLibraryUri(tween.RectTween, "package:flutter/src/animation/tween.dart");
  tween.IntTween = class IntTween extends tween.Tween$(core.int) {
    lerp(t) {
      return (dart.notNull(this.begin) + (dart.notNull(this.end) - dart.notNull(this.begin)) * dart.notNull(t))[$round]();
    }
  };
  (tween.IntTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    tween.IntTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = tween.IntTween.prototype;
  dart.addTypeTests(tween.IntTween);
  dart.setLibraryUri(tween.IntTween, "package:flutter/src/animation/tween.dart");
  tween.StepTween = class StepTween extends tween.Tween$(core.int) {
    lerp(t) {
      return (dart.notNull(this.begin) + (dart.notNull(this.end) - dart.notNull(this.begin)) * dart.notNull(t))[$floor]();
    }
  };
  (tween.StepTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    tween.StepTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = tween.StepTween.prototype;
  dart.addTypeTests(tween.StepTween);
  dart.setLibraryUri(tween.StepTween, "package:flutter/src/animation/tween.dart");
  const _is_ConstantTween_default = Symbol('_is_ConstantTween_default');
  tween.ConstantTween$ = dart.generic(T => {
    class ConstantTween extends tween.Tween$(T) {
      lerp(t) {
        return this.begin;
      }
      toString() {
        return dart.str(object.objectRuntimeType(this, "ReverseTween")) + "(value: " + dart.str(this.begin) + ")";
      }
    }
    (ConstantTween.new = function(value) {
      ConstantTween.__proto__.new.call(this, {begin: value, end: value});
      ;
    }).prototype = ConstantTween.prototype;
    dart.addTypeTests(ConstantTween);
    ConstantTween.prototype[_is_ConstantTween_default] = true;
    dart.setLibraryUri(ConstantTween, "package:flutter/src/animation/tween.dart");
    dart.defineExtensionMethods(ConstantTween, ['toString']);
    return ConstantTween;
  });
  tween.ConstantTween = tween.ConstantTween$();
  dart.addTypeTests(tween.ConstantTween, _is_ConstantTween_default);
  var curve$ = dart.privateName(tween, "CurveTween.curve");
  tween.CurveTween = class CurveTween extends tween.Animatable$(core.double) {
    get curve() {
      return this[curve$];
    }
    set curve(value) {
      this[curve$] = value;
    }
    transform(t) {
      if (t === 0.0 || t === 1.0) {
        if (!(this.curve.transform(t)[$round]() === t)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/tween.dart", 446, 14, "curve.transform(t).round() == t");
        return t;
      }
      return this.curve.transform(t);
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "CurveTween")) + "(curve: " + dart.str(this.curve) + ")";
    }
  };
  (tween.CurveTween.new = function(opts) {
    let curve = opts && 'curve' in opts ? opts.curve : null;
    this[curve$] = curve;
    if (!(curve != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/tween.dart", 438, 14, "curve != null");
    tween.CurveTween.__proto__.new.call(this);
    ;
  }).prototype = tween.CurveTween.prototype;
  dart.addTypeTests(tween.CurveTween);
  dart.setMethodSignature(tween.CurveTween, () => ({
    __proto__: dart.getMethods(tween.CurveTween.__proto__),
    transform: dart.fnType(core.double, [core.double])
  }));
  dart.setLibraryUri(tween.CurveTween, "package:flutter/src/animation/tween.dart");
  dart.setFieldSignature(tween.CurveTween, () => ({
    __proto__: dart.getFields(tween.CurveTween.__proto__),
    curve: dart.fieldType(curves.Curve)
  }));
  dart.defineExtensionMethods(tween.CurveTween, ['toString']);
  const _is_ParametricCurve_default = Symbol('_is_ParametricCurve_default');
  curves.ParametricCurve$ = dart.generic(T => {
    class ParametricCurve extends core.Object {
      transform(t) {
        if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 35, 12, "t != null");
        if (!(dart.notNull(t) >= 0.0 && dart.notNull(t) <= 1.0)) dart.assertFailed("parametric value " + dart.str(t) + " is outside of [0, 1] range.", "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 36, 12, "t >= 0.0 && t <= 1.0");
        return this.transformInternal(t);
      }
      transformInternal(t) {
        dart.throw(new core.UnimplementedError.new());
      }
      toString() {
        return object.objectRuntimeType(this, "ParametricCurve");
      }
    }
    (ParametricCurve.new = function() {
      ;
    }).prototype = ParametricCurve.prototype;
    dart.addTypeTests(ParametricCurve);
    ParametricCurve.prototype[_is_ParametricCurve_default] = true;
    dart.setMethodSignature(ParametricCurve, () => ({
      __proto__: dart.getMethods(ParametricCurve.__proto__),
      transform: dart.fnType(T, [core.double]),
      transformInternal: dart.fnType(T, [core.double])
    }));
    dart.setLibraryUri(ParametricCurve, "package:flutter/src/animation/curves.dart");
    dart.defineExtensionMethods(ParametricCurve, ['toString']);
    return ParametricCurve;
  });
  curves.ParametricCurve = curves.ParametricCurve$();
  dart.addTypeTests(curves.ParametricCurve, _is_ParametricCurve_default);
  curves.Curve = class Curve extends curves.ParametricCurve$(core.double) {
    transform(t) {
      if (t === 0.0 || t === 1.0) {
        return t;
      }
      return super.transform(t);
    }
    get flipped() {
      return new curves.FlippedCurve.new(this);
    }
  };
  (curves.Curve.new = function() {
    curves.Curve.__proto__.new.call(this);
    ;
  }).prototype = curves.Curve.prototype;
  dart.addTypeTests(curves.Curve);
  dart.setGetterSignature(curves.Curve, () => ({
    __proto__: dart.getGetters(curves.Curve.__proto__),
    flipped: curves.Curve
  }));
  dart.setLibraryUri(curves.Curve, "package:flutter/src/animation/curves.dart");
  curves._Linear = class _Linear extends curves.Curve {
    transformInternal(t) {
      return t;
    }
  };
  (curves._Linear.__ = function() {
    curves._Linear.__proto__.new.call(this);
    ;
  }).prototype = curves._Linear.prototype;
  dart.addTypeTests(curves._Linear);
  dart.setLibraryUri(curves._Linear, "package:flutter/src/animation/curves.dart");
  var count$ = dart.privateName(curves, "SawTooth.count");
  curves.SawTooth = class SawTooth extends curves.Curve {
    get count() {
      return this[count$];
    }
    set count(value) {
      super.count = value;
    }
    transformInternal(t) {
      t = dart.notNull(t) * dart.notNull(this.count);
      return dart.notNull(t) - t[$truncateToDouble]();
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "SawTooth")) + "(" + dart.str(this.count) + ")";
    }
  };
  (curves.SawTooth.new = function(count) {
    this[count$] = count;
    if (!(count != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 129, 39, "count != null");
    curves.SawTooth.__proto__.new.call(this);
    ;
  }).prototype = curves.SawTooth.prototype;
  dart.addTypeTests(curves.SawTooth);
  dart.setLibraryUri(curves.SawTooth, "package:flutter/src/animation/curves.dart");
  dart.setFieldSignature(curves.SawTooth, () => ({
    __proto__: dart.getFields(curves.SawTooth.__proto__),
    count: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(curves.SawTooth, ['toString']);
  var C5;
  var begin$0 = dart.privateName(curves, "Interval.begin");
  var end$0 = dart.privateName(curves, "Interval.end");
  var curve$0 = dart.privateName(curves, "Interval.curve");
  curves.Interval = class Interval extends curves.Curve {
    get begin() {
      return this[begin$0];
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
    get curve() {
      return this[curve$0];
    }
    set curve(value) {
      super.curve = value;
    }
    transformInternal(t) {
      if (!(dart.notNull(this.begin) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 179, 12, "begin >= 0.0");
      if (!(dart.notNull(this.begin) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 180, 12, "begin <= 1.0");
      if (!(dart.notNull(this.end) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 181, 12, "end >= 0.0");
      if (!(dart.notNull(this.end) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 182, 12, "end <= 1.0");
      if (!(dart.notNull(this.end) >= dart.notNull(this.begin))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 183, 12, "end >= begin");
      t = ((dart.notNull(t) - dart.notNull(this.begin)) / (dart.notNull(this.end) - dart.notNull(this.begin)))[$clamp](0.0, 1.0);
      if (t === 0.0 || t === 1.0) return t;
      return this.curve.transform(t);
    }
    toString() {
      if (!curves._Linear.is(this.curve)) return dart.str(object.objectRuntimeType(this, "Interval")) + "(" + dart.str(this.begin) + "⋯" + dart.str(this.end) + ")➩" + dart.str(this.curve);
      return dart.str(object.objectRuntimeType(this, "Interval")) + "(" + dart.str(this.begin) + "⋯" + dart.str(this.end) + ")";
    }
  };
  (curves.Interval.new = function(begin, end, opts) {
    let curve = opts && 'curve' in opts ? opts.curve : C5 || CT.C5;
    this[begin$0] = begin;
    this[end$0] = end;
    this[curve$0] = curve;
    if (!(begin != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 160, 14, "begin != null");
    if (!(end != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 161, 14, "end != null");
    if (!(curve != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 162, 14, "curve != null");
    curves.Interval.__proto__.new.call(this);
    ;
  }).prototype = curves.Interval.prototype;
  dart.addTypeTests(curves.Interval);
  dart.setLibraryUri(curves.Interval, "package:flutter/src/animation/curves.dart");
  dart.setFieldSignature(curves.Interval, () => ({
    __proto__: dart.getFields(curves.Interval.__proto__),
    begin: dart.finalFieldType(core.double),
    end: dart.finalFieldType(core.double),
    curve: dart.finalFieldType(curves.Curve)
  }));
  dart.defineExtensionMethods(curves.Interval, ['toString']);
  var threshold$ = dart.privateName(curves, "Threshold.threshold");
  curves.Threshold = class Threshold extends curves.Curve {
    get threshold() {
      return this[threshold$];
    }
    set threshold(value) {
      super.threshold = value;
    }
    transformInternal(t) {
      if (!(dart.notNull(this.threshold) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 214, 12, "threshold >= 0.0");
      if (!(dart.notNull(this.threshold) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 215, 12, "threshold <= 1.0");
      return dart.notNull(t) < dart.notNull(this.threshold) ? 0.0 : 1.0;
    }
  };
  (curves.Threshold.new = function(threshold) {
    this[threshold$] = threshold;
    if (!(threshold != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 205, 44, "threshold != null");
    curves.Threshold.__proto__.new.call(this);
    ;
  }).prototype = curves.Threshold.prototype;
  dart.addTypeTests(curves.Threshold);
  dart.setLibraryUri(curves.Threshold, "package:flutter/src/animation/curves.dart");
  dart.setFieldSignature(curves.Threshold, () => ({
    __proto__: dart.getFields(curves.Threshold.__proto__),
    threshold: dart.finalFieldType(core.double)
  }));
  var _evaluateCubic = dart.privateName(curves, "_evaluateCubic");
  var a$ = dart.privateName(curves, "Cubic.a");
  var b$ = dart.privateName(curves, "Cubic.b");
  var c$ = dart.privateName(curves, "Cubic.c");
  var d$ = dart.privateName(curves, "Cubic.d");
  curves.Cubic = class Cubic extends curves.Curve {
    get a() {
      return this[a$];
    }
    set a(value) {
      super.a = value;
    }
    get b() {
      return this[b$];
    }
    set b(value) {
      super.b = value;
    }
    get c() {
      return this[c$];
    }
    set c(value) {
      super.c = value;
    }
    get d() {
      return this[d$];
    }
    set d(value) {
      super.d = value;
    }
    [_evaluateCubic](a, b, m) {
      return 3 * dart.notNull(a) * (1 - dart.notNull(m)) * (1 - dart.notNull(m)) * dart.notNull(m) + 3 * dart.notNull(b) * (1 - dart.notNull(m)) * dart.notNull(m) * dart.notNull(m) + dart.notNull(m) * dart.notNull(m) * dart.notNull(m);
    }
    transformInternal(t) {
      let start = 0.0;
      let end = 1.0;
      while (true) {
        let midpoint = (start + end) / 2;
        let estimate = this[_evaluateCubic](this.a, this.c, midpoint);
        if ((dart.notNull(t) - dart.notNull(estimate))[$abs]() < 0.001) return this[_evaluateCubic](this.b, this.d, midpoint);
        if (dart.notNull(estimate) < dart.notNull(t))
          start = midpoint;
        else
          end = midpoint;
      }
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "Cubic")) + "(" + this.a[$toStringAsFixed](2) + ", " + this.b[$toStringAsFixed](2) + ", " + this.c[$toStringAsFixed](2) + ", " + this.d[$toStringAsFixed](2) + ")";
    }
  };
  (curves.Cubic.new = function(a, b, c, d) {
    this[a$] = a;
    this[b$] = b;
    this[c$] = c;
    this[d$] = d;
    if (!(a != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 248, 14, "a != null");
    if (!(b != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 249, 14, "b != null");
    if (!(c != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 250, 14, "c != null");
    if (!(d != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 251, 14, "d != null");
    curves.Cubic.__proto__.new.call(this);
    ;
  }).prototype = curves.Cubic.prototype;
  dart.addTypeTests(curves.Cubic);
  dart.setMethodSignature(curves.Cubic, () => ({
    __proto__: dart.getMethods(curves.Cubic.__proto__),
    [_evaluateCubic]: dart.fnType(core.double, [core.double, core.double, core.double])
  }));
  dart.setLibraryUri(curves.Cubic, "package:flutter/src/animation/curves.dart");
  dart.setFieldSignature(curves.Cubic, () => ({
    __proto__: dart.getFields(curves.Cubic.__proto__),
    a: dart.finalFieldType(core.double),
    b: dart.finalFieldType(core.double),
    c: dart.finalFieldType(core.double),
    d: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(curves.Cubic, ['toString']);
  dart.defineLazy(curves.Cubic, {
    /*curves.Cubic._cubicErrorBound*/get _cubicErrorBound() {
      return 0.001;
    }
  });
  curves.Curve2D = class Curve2D extends curves.ParametricCurve$(ui.Offset) {
    generateSamples(opts) {
      let start = opts && 'start' in opts ? opts.start : 0;
      let end = opts && 'end' in opts ? opts.end : 1;
      let tolerance = opts && 'tolerance' in opts ? opts.tolerance : 1e-10;
      if (!(tolerance != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 465, 12, "tolerance != null");
      if (!(start != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 466, 12, "start != null");
      if (!(end != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 467, 12, "end != null");
      if (!(dart.notNull(end) > dart.notNull(start))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 468, 12, "end > start");
      let rand = math.Random.new(this.samplingSeed);
      function isFlat(p, q, r) {
        let pr = p['-'](r);
        let qr = q['-'](r);
        let z = dart.notNull(pr.dx) * dart.notNull(qr.dy) - dart.notNull(qr.dx) * dart.notNull(pr.dy);
        return z * z < dart.notNull(tolerance);
      }
      dart.fn(isFlat, OffsetAndOffsetAndOffsetTobool());
      let first = new curves.Curve2DSample.new(start, this.transform(start));
      let last = new curves.Curve2DSample.new(end, this.transform(end));
      let samples = JSArrayOfCurve2DSample().of([first]);
      const sample = (p, q, opts) => {
        let forceSubdivide = opts && 'forceSubdivide' in opts ? opts.forceSubdivide : false;
        let t = dart.notNull(p.t) + (0.45 + 0.1 * dart.notNull(rand.nextDouble())) * (dart.notNull(q.t) - dart.notNull(p.t));
        let r = new curves.Curve2DSample.new(t, this.transform(t));
        if (!dart.test(forceSubdivide) && dart.test(isFlat(p.value, q.value, r.value))) {
          samples[$add](q);
        } else {
          sample(p, r);
          sample(r, q);
        }
      };
      dart.fn(sample, Curve2DSampleAndCurve2DSample__Tovoid());
      sample(first, last, {forceSubdivide: (dart.notNull(first.value.dx) - dart.notNull(last.value.dx))[$abs]() < dart.notNull(tolerance) && (dart.notNull(first.value.dy) - dart.notNull(last.value.dy))[$abs]() < dart.notNull(tolerance)});
      return samples;
    }
    get samplingSeed() {
      return 0;
    }
    findInverse(x) {
      if (!(x != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 524, 12, "x != null");
      let start = 0.0;
      let end = 1.0;
      let mid = null;
      const offsetToOrigin = pos => {
        return dart.notNull(x) - dart.notNull(this.transform(pos).dx);
      };
      dart.fn(offsetToOrigin, doubleTodouble());
      let count = 100;
      let startValue = offsetToOrigin(start);
      while ((dart.notNull(end) - dart.notNull(start)) / 2.0 > 0.000001 && count > 0) {
        mid = (dart.notNull(end) + dart.notNull(start)) / 2.0;
        let value = offsetToOrigin(mid);
        if (value[$sign] === startValue[$sign]) {
          start = mid;
        } else {
          end = mid;
        }
        count = count - 1;
      }
      return mid;
    }
  };
  (curves.Curve2D.new = function() {
    curves.Curve2D.__proto__.new.call(this);
    ;
  }).prototype = curves.Curve2D.prototype;
  dart.addTypeTests(curves.Curve2D);
  dart.setMethodSignature(curves.Curve2D, () => ({
    __proto__: dart.getMethods(curves.Curve2D.__proto__),
    generateSamples: dart.fnType(core.Iterable$(curves.Curve2DSample), [], {end: core.double, start: core.double, tolerance: core.double}, {}),
    findInverse: dart.fnType(core.double, [core.double])
  }));
  dart.setGetterSignature(curves.Curve2D, () => ({
    __proto__: dart.getGetters(curves.Curve2D.__proto__),
    samplingSeed: core.int
  }));
  dart.setLibraryUri(curves.Curve2D, "package:flutter/src/animation/curves.dart");
  var t$ = dart.privateName(curves, "Curve2DSample.t");
  var value$ = dart.privateName(curves, "Curve2DSample.value");
  curves.Curve2DSample = class Curve2DSample extends core.Object {
    get t() {
      return this[t$];
    }
    set t(value) {
      super.t = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    toString() {
      return "[(" + this.value.dx[$toStringAsFixed](2) + ", " + this.value.dy[$toStringAsFixed](2) + "), " + this.t[$toStringAsFixed](2) + "]";
    }
  };
  (curves.Curve2DSample.new = function(t, value) {
    this[t$] = t;
    this[value$] = value;
    if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 559, 52, "t != null");
    if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 559, 71, "value != null");
    ;
  }).prototype = curves.Curve2DSample.prototype;
  dart.addTypeTests(curves.Curve2DSample);
  dart.setLibraryUri(curves.Curve2DSample, "package:flutter/src/animation/curves.dart");
  dart.setFieldSignature(curves.Curve2DSample, () => ({
    __proto__: dart.getFields(curves.Curve2DSample.__proto__),
    t: dart.finalFieldType(core.double),
    value: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(curves.Curve2DSample, ['toString']);
  var _controlPoints = dart.privateName(curves, "_controlPoints");
  var _startHandle = dart.privateName(curves, "_startHandle");
  var _endHandle = dart.privateName(curves, "_endHandle");
  var _tension = dart.privateName(curves, "_tension");
  var _cubicSegments = dart.privateName(curves, "_cubicSegments");
  var _initializeIfNeeded = dart.privateName(curves, "_initializeIfNeeded");
  curves.CatmullRomSpline = class CatmullRomSpline extends curves.Curve2D {
    static _computeSegments(controlPoints, tension, opts) {
      let startHandle = opts && 'startHandle' in opts ? opts.startHandle : null;
      let endHandle = opts && 'endHandle' in opts ? opts.endHandle : null;
      startHandle == null ? startHandle = controlPoints[$_get](0)['*'](2.0)['-'](controlPoints[$_get](1)) : null;
      endHandle == null ? endHandle = controlPoints[$last]['*'](2.0)['-'](controlPoints[$_get](dart.notNull(controlPoints[$length]) - 2)) : null;
      let allPoints = (() => {
        let t0 = JSArrayOfOffset().of([]);
        t0[$add](startHandle);
        for (let t1 of controlPoints)
          t0[$add](t1);
        t0[$add](endHandle);
        return t0;
      })();
      let reverseTension = 1.0 - dart.notNull(tension);
      let result = JSArrayOfListOfOffset().of([]);
      for (let i = 0; i < dart.notNull(allPoints[$length]) - 3; i = i + 1) {
        let curve = JSArrayOfOffset().of([allPoints[$_get](i), allPoints[$_get](i + 1), allPoints[$_get](i + 2), allPoints[$_get](i + 3)]);
        let diffCurve10 = curve[$_get](1)['-'](curve[$_get](0));
        let diffCurve21 = curve[$_get](2)['-'](curve[$_get](1));
        let diffCurve32 = curve[$_get](3)['-'](curve[$_get](2));
        let t01 = math.pow(diffCurve10.distance, 0.5)[$toDouble]();
        let t12 = math.pow(diffCurve21.distance, 0.5)[$toDouble]();
        let t23 = math.pow(diffCurve32.distance, 0.5)[$toDouble]();
        let m1 = diffCurve21['+'](diffCurve10['/'](t01)['-'](curve[$_get](2)['-'](curve[$_get](0))['/'](t01 + t12))['*'](t12))['*'](reverseTension);
        let m2 = diffCurve21['+'](diffCurve32['/'](t23)['-'](curve[$_get](3)['-'](curve[$_get](1))['/'](t12 + t23))['*'](t12))['*'](reverseTension);
        let sumM12 = m1['+'](m2);
        let segment = JSArrayOfOffset().of([diffCurve21['*'](-2.0)['+'](sumM12), diffCurve21['*'](3.0)['-'](m1)['-'](sumM12), m1, curve[$_get](1)]);
        result[$add](segment);
      }
      return result;
    }
    [_initializeIfNeeded]() {
      if (dart.test(this[_cubicSegments][$isNotEmpty])) {
        return;
      }
      this[_cubicSegments][$addAll](curves.CatmullRomSpline._computeSegments(this[_controlPoints], this[_tension], {startHandle: this[_startHandle], endHandle: this[_endHandle]}));
    }
    get samplingSeed() {
      this[_initializeIfNeeded]();
      let seedPoint = this[_cubicSegments][$_get](0)[$_get](1);
      return ((dart.notNull(seedPoint.dx) + dart.notNull(seedPoint.dy)) * 10000)[$round]();
    }
    transformInternal(t) {
      this[_initializeIfNeeded]();
      let length = this[_cubicSegments][$length][$toDouble]();
      let position = null;
      let localT = null;
      let index = null;
      if (dart.notNull(t) < 1.0) {
        position = dart.notNull(t) * length;
        localT = position[$modulo](1.0);
        index = position[$floor]();
      } else {
        position = length;
        localT = 1.0;
        index = dart.notNull(this[_cubicSegments][$length]) - 1;
      }
      let cubicControlPoints = this[_cubicSegments][$_get](index);
      let localT2 = dart.notNull(localT) * dart.notNull(localT);
      return cubicControlPoints[$_get](0)['*'](localT2)['*'](localT)['+'](cubicControlPoints[$_get](1)['*'](localT2))['+'](cubicControlPoints[$_get](2)['*'](localT))['+'](cubicControlPoints[$_get](3));
    }
  };
  (curves.CatmullRomSpline.new = function(controlPoints, opts) {
    let tension = opts && 'tension' in opts ? opts.tension : 0;
    let startHandle = opts && 'startHandle' in opts ? opts.startHandle : null;
    let endHandle = opts && 'endHandle' in opts ? opts.endHandle : null;
    if (!(controlPoints != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 629, 19, "controlPoints != null");
    if (!(tension != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 630, 19, "tension != null");
    if (!(dart.notNull(tension) <= 1.0)) dart.assertFailed("tension " + dart.str(tension) + " must not be greater than 1.0.", "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 631, 19, "tension <= 1.0");
    if (!(dart.notNull(tension) >= 0.0)) dart.assertFailed("tension " + dart.str(tension) + " must not be negative.", "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 632, 19, "tension >= 0.0");
    if (!(dart.notNull(controlPoints[$length]) > 3)) dart.assertFailed("There must be at least four control points to create a CatmullRomSpline.", "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 633, 19, "controlPoints.length > 3");
    this[_controlPoints] = controlPoints;
    this[_startHandle] = startHandle;
    this[_endHandle] = endHandle;
    this[_tension] = tension;
    this[_cubicSegments] = JSArrayOfListOfOffset().of([]);
    curves.CatmullRomSpline.__proto__.new.call(this);
    ;
  }).prototype = curves.CatmullRomSpline.prototype;
  (curves.CatmullRomSpline.precompute = function(controlPoints, opts) {
    let tension = opts && 'tension' in opts ? opts.tension : 0;
    let startHandle = opts && 'startHandle' in opts ? opts.startHandle : null;
    let endHandle = opts && 'endHandle' in opts ? opts.endHandle : null;
    if (!(controlPoints != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 649, 19, "controlPoints != null");
    if (!(tension != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 650, 19, "tension != null");
    if (!(dart.notNull(tension) <= 1.0)) dart.assertFailed("tension " + dart.str(tension) + " must not be greater than 1.0.", "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 651, 19, "tension <= 1.0");
    if (!(dart.notNull(tension) >= 0.0)) dart.assertFailed("tension " + dart.str(tension) + " must not be negative.", "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 652, 19, "tension >= 0.0");
    if (!(dart.notNull(controlPoints[$length]) > 3)) dart.assertFailed("There must be at least four control points to create a CatmullRomSpline.", "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 653, 19, "controlPoints.length > 3");
    this[_controlPoints] = null;
    this[_startHandle] = null;
    this[_endHandle] = null;
    this[_tension] = null;
    this[_cubicSegments] = curves.CatmullRomSpline._computeSegments(controlPoints, tension, {startHandle: startHandle, endHandle: endHandle});
    curves.CatmullRomSpline.__proto__.new.call(this);
    ;
  }).prototype = curves.CatmullRomSpline.prototype;
  dart.addTypeTests(curves.CatmullRomSpline);
  dart.setMethodSignature(curves.CatmullRomSpline, () => ({
    __proto__: dart.getMethods(curves.CatmullRomSpline.__proto__),
    [_initializeIfNeeded]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(curves.CatmullRomSpline, "package:flutter/src/animation/curves.dart");
  dart.setFieldSignature(curves.CatmullRomSpline, () => ({
    __proto__: dart.getFields(curves.CatmullRomSpline.__proto__),
    [_cubicSegments]: dart.finalFieldType(core.List$(core.List$(ui.Offset))),
    [_controlPoints]: dart.finalFieldType(core.List$(ui.Offset)),
    [_startHandle]: dart.finalFieldType(ui.Offset),
    [_endHandle]: dart.finalFieldType(ui.Offset),
    [_tension]: dart.finalFieldType(core.double)
  }));
  var _precomputedSamples = dart.privateName(curves, "_precomputedSamples");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C6;
  var controlPoints$ = dart.privateName(curves, "CatmullRomCurve.controlPoints");
  var tension$ = dart.privateName(curves, "CatmullRomCurve.tension");
  curves.CatmullRomCurve = class CatmullRomCurve extends curves.Curve {
    get controlPoints() {
      return this[controlPoints$];
    }
    set controlPoints(value) {
      super.controlPoints = value;
    }
    get tension() {
      return this[tension$];
    }
    set tension(value) {
      super.tension = value;
    }
    static _computeSamples(controlPoints, tension) {
      return new curves.CatmullRomSpline.precompute((() => {
        let t2 = JSArrayOfOffset().of([]);
        t2[$add](ui.Offset.zero);
        for (let t3 of controlPoints)
          t2[$add](t3);
        t2[$add](C6 || CT.C6);
        return t2;
      })(), {tension: tension}).generateSamples({start: 0.0, end: 1.0, tolerance: 1e-12})[$toList]();
    }
    static validateControlPoints(controlPoints, opts) {
      let tension = opts && 'tension' in opts ? opts.tension : 0;
      let reasons = opts && 'reasons' in opts ? opts.reasons : null;
      if (!(tension != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 910, 12, "tension != null");
      if (controlPoints == null) {
        if (!dart.test(dart.fn(() => {
          let t4;
          t4 = reasons;
          t4 == null ? null : t4[$add]("Supplied control points cannot be null");
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 912, 14, "() {\r\n        reasons?.add('Supplied control points cannot be null');\r\n        return true;\r\n      }()");
        return false;
      }
      if (dart.notNull(controlPoints[$length]) < 2) {
        if (!dart.test(dart.fn(() => {
          let t4;
          t4 = reasons;
          t4 == null ? null : t4[$add]("There must be at least two points supplied to create a valid curve.");
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 920, 14, "() {\r\n        reasons?.add('There must be at least two points supplied to create a valid curve.');\r\n        return true;\r\n      }()");
        return false;
      }
      controlPoints = (() => {
        let t4 = JSArrayOfOffset().of([]);
        t4[$add](ui.Offset.zero);
        for (let t5 of controlPoints)
          t4[$add](t5);
        t4[$add](C6 || CT.C6);
        return t4;
      })();
      let startHandle = controlPoints[$_get](0)['*'](2.0)['-'](controlPoints[$_get](1));
      let endHandle = controlPoints[$last]['*'](2.0)['-'](controlPoints[$_get](dart.notNull(controlPoints[$length]) - 2));
      controlPoints = (() => {
        let t6 = JSArrayOfOffset().of([]);
        t6[$add](startHandle);
        for (let t7 of controlPoints)
          t6[$add](t7);
        t6[$add](endHandle);
        return t6;
      })();
      let lastX = -(1 / 0);
      for (let i = 0; i < dart.notNull(controlPoints[$length]); i = i + 1) {
        if (i > 1 && i < dart.notNull(controlPoints[$length]) - 2 && (dart.notNull(controlPoints[$_get](i).dx) <= 0.0 || dart.notNull(controlPoints[$_get](i).dx) >= 1.0)) {
          if (!dart.test(dart.fn(() => {
            let t8;
            t8 = reasons;
            t8 == null ? null : t8[$add]("Control points must have X values between 0.0 and 1.0, exclusive. " + "Point " + dart.str(i) + " has an x value (" + dart.str(controlPoints[$_get](i).dx) + ") which is outside the range.");
            return true;
          }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 936, 16, "() {\r\n          reasons?.add('Control points must have X values between 0.0 and 1.0, exclusive. '\r\n              'Point $i has an x value (${controlPoints[i].dx}) which is outside the range.');\r\n          return true;\r\n        }()");
          return false;
        }
        if (dart.notNull(controlPoints[$_get](i).dx) <= dart.notNull(lastX)) {
          if (!dart.test(dart.fn(() => {
            let t8;
            t8 = reasons;
            t8 == null ? null : t8[$add]("Each X coordinate must be greater than the preceding X coordinate " + "(i.e. must be monotonically increasing in X). Point " + dart.str(i) + " has an x value of " + dart.str(controlPoints[$_get](i).dx) + ", which is not greater than " + dart.str(lastX));
            return true;
          }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 944, 16, "() {\r\n          reasons?.add('Each X coordinate must be greater than the preceding X coordinate '\r\n              '(i.e. must be monotonically increasing in X). Point $i has an x value of '\r\n              '${controlPoints[i].dx}, which is not greater than $lastX');\r\n          return true;\r\n        }()");
          return false;
        }
        lastX = controlPoints[$_get](i).dx;
      }
      let success = true;
      lastX = -(1 / 0);
      let testSpline = new curves.CatmullRomSpline.new(controlPoints, {tension: tension});
      let start = testSpline.findInverse(0.0);
      let end = testSpline.findInverse(1.0);
      let samplePoints = testSpline.generateSamples({start: start, end: end});
      if (samplePoints[$first].value.dy[$abs]() > 0.001 || (1.0 - dart.notNull(samplePoints[$last].value.dy))[$abs]() > 0.001) {
        let bail = true;
        success = false;
        if (!dart.test(dart.fn(() => {
          let t8;
          t8 = reasons;
          t8 == null ? null : t8[$add]("The curve has more than one Y value at X = " + dart.str(samplePoints[$first].value.dx) + ". " + "Try moving some control points further away from this value of X, or increasing " + "the tension.");
          bail = reasons == null;
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 969, 14, "() {\r\n        reasons?.add('The curve has more than one Y value at X = ${samplePoints.first.value.dx}. '\r\n            'Try moving some control points further away from this value of X, or increasing '\r\n            'the tension.');\r\n        // No need to keep going if we're not giving reasons.\r\n        bail = reasons == null;\r\n        return true;\r\n      }()");
        if (bail) {
          return false;
        }
      }
      for (let sample of samplePoints) {
        let point = sample.value;
        let t = sample.t;
        let x = point.dx;
        if (dart.notNull(t) >= dart.notNull(start) && dart.notNull(t) <= dart.notNull(end) && (dart.notNull(x) < -0.001 || dart.notNull(x) > 1.0 + 0.001)) {
          let bail = true;
          success = false;
          if (!dart.test(dart.fn(() => {
            let t8;
            t8 = reasons;
            t8 == null ? null : t8[$add]("The resulting curve has an X value (" + dart.str(x) + ") which is outside " + "the range [0.0, 1.0], inclusive.");
            bail = reasons == null;
            return true;
          }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 990, 16, "() {\r\n          reasons?.add('The resulting curve has an X value ($x) which is outside '\r\n              'the range [0.0, 1.0], inclusive.');\r\n          // No need to keep going if we're not giving reasons.\r\n          bail = reasons == null;\r\n          return true;\r\n        }()");
          if (bail) {
            return false;
          }
        }
        if (dart.notNull(x) < dart.notNull(lastX)) {
          let bail = true;
          success = false;
          if (!dart.test(dart.fn(() => {
            let t8;
            t8 = reasons;
            t8 == null ? null : t8[$add]("The curve has more than one Y value at x = " + dart.str(x) + ". Try moving " + "some control points further apart in X, or increasing the tension.");
            bail = reasons == null;
            return true;
          }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 1006, 16, "() {\r\n          reasons?.add('The curve has more than one Y value at x = $x. Try moving '\r\n            'some control points further apart in X, or increasing the tension.');\r\n          // No need to keep going if we're not giving reasons.\r\n          bail = reasons == null;\r\n          return true;\r\n        }()");
          if (bail) {
            return false;
          }
        }
        lastX = x;
      }
      return success;
    }
    transformInternal(t) {
      if (dart.test(this[_precomputedSamples][$isEmpty])) {
        this[_precomputedSamples][$addAll](curves.CatmullRomCurve._computeSamples(this.controlPoints, this.tension));
      }
      let start = 0;
      let end = dart.notNull(this[_precomputedSamples][$length]) - 1;
      let mid = null;
      let value = null;
      let startValue = this[_precomputedSamples][$_get](start).value;
      let endValue = this[_precomputedSamples][$_get](end).value;
      while (dart.notNull(end) - dart.notNull(start) > 1) {
        mid = ((dart.notNull(end) + dart.notNull(start)) / 2)[$truncate]();
        value = this[_precomputedSamples][$_get](mid).value;
        if (dart.notNull(t) >= dart.notNull(value.dx)) {
          start = mid;
          startValue = value;
        } else {
          end = mid;
          endValue = value;
        }
      }
      let t2 = (dart.notNull(t) - dart.notNull(startValue.dx)) / (dart.notNull(endValue.dx) - dart.notNull(startValue.dx));
      return ui.lerpDouble(startValue.dy, endValue.dy, t2);
    }
  };
  (curves.CatmullRomCurve.new = function(controlPoints, opts) {
    let tension = opts && 'tension' in opts ? opts.tension : 0;
    this[controlPoints$] = controlPoints;
    this[tension$] = tension;
    if (!(tension != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 807, 16, "tension != null");
    if (!dart.test(dart.fn(() => {
      let t2;
      return curves.CatmullRomCurve.validateControlPoints(controlPoints, {tension: tension, reasons: (t2 = curves.CatmullRomCurve._debugAssertReasons, t2[$clear](), t2)});
    }, VoidTobool())())) dart.assertFailed("control points " + dart.str(controlPoints) + " could not be validated:\n  " + dart.str(curves.CatmullRomCurve._debugAssertReasons[$join]("\n  ")), "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 808, 16, "() {\r\n          return validateControlPoints(\r\n            controlPoints,\r\n            tension: tension,\r\n            reasons: _debugAssertReasons..clear(),\r\n          );\r\n        }()");
    this[_precomputedSamples] = JSArrayOfCurve2DSample().of([]);
    curves.CatmullRomCurve.__proto__.new.call(this);
    ;
  }).prototype = curves.CatmullRomCurve.prototype;
  (curves.CatmullRomCurve.precompute = function(controlPoints, opts) {
    let tension = opts && 'tension' in opts ? opts.tension : 0;
    this[controlPoints$] = controlPoints;
    this[tension$] = tension;
    if (!(tension != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 824, 16, "tension != null");
    if (!dart.test(dart.fn(() => {
      let t2;
      return curves.CatmullRomCurve.validateControlPoints(controlPoints, {tension: tension, reasons: (t2 = curves.CatmullRomCurve._debugAssertReasons, t2[$clear](), t2)});
    }, VoidTobool())())) dart.assertFailed("control points " + dart.str(controlPoints) + " could not be validated:\n  " + dart.str(curves.CatmullRomCurve._debugAssertReasons[$join]("\n  ")), "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 825, 16, "() {\r\n          return validateControlPoints(\r\n            controlPoints,\r\n            tension: tension,\r\n            reasons: _debugAssertReasons..clear(),\r\n          );\r\n        }()");
    this[_precomputedSamples] = curves.CatmullRomCurve._computeSamples(controlPoints, tension);
    curves.CatmullRomCurve.__proto__.new.call(this);
    ;
  }).prototype = curves.CatmullRomCurve.prototype;
  dart.addTypeTests(curves.CatmullRomCurve);
  dart.setLibraryUri(curves.CatmullRomCurve, "package:flutter/src/animation/curves.dart");
  dart.setFieldSignature(curves.CatmullRomCurve, () => ({
    __proto__: dart.getFields(curves.CatmullRomCurve.__proto__),
    [_precomputedSamples]: dart.finalFieldType(core.List$(curves.Curve2DSample)),
    controlPoints: dart.finalFieldType(core.List$(ui.Offset)),
    tension: dart.finalFieldType(core.double)
  }));
  dart.defineLazy(curves.CatmullRomCurve, {
    /*curves.CatmullRomCurve._debugAssertReasons*/get _debugAssertReasons() {
      return JSArrayOfString().of([]);
    }
  });
  var curve$1 = dart.privateName(curves, "FlippedCurve.curve");
  curves.FlippedCurve = class FlippedCurve extends curves.Curve {
    get curve() {
      return this[curve$1];
    }
    set curve(value) {
      super.curve = value;
    }
    transformInternal(t) {
      return 1.0 - dart.notNull(this.curve.transform(1.0 - dart.notNull(t)));
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "FlippedCurve")) + "(" + dart.str(this.curve) + ")";
    }
  };
  (curves.FlippedCurve.new = function(curve) {
    this[curve$1] = curve;
    if (!(curve != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 1080, 43, "curve != null");
    curves.FlippedCurve.__proto__.new.call(this);
    ;
  }).prototype = curves.FlippedCurve.prototype;
  dart.addTypeTests(curves.FlippedCurve);
  dart.setLibraryUri(curves.FlippedCurve, "package:flutter/src/animation/curves.dart");
  dart.setFieldSignature(curves.FlippedCurve, () => ({
    __proto__: dart.getFields(curves.FlippedCurve.__proto__),
    curve: dart.finalFieldType(curves.Curve)
  }));
  dart.defineExtensionMethods(curves.FlippedCurve, ['toString']);
  curves._DecelerateCurve = class _DecelerateCurve extends curves.Curve {
    transformInternal(t) {
      t = 1.0 - dart.notNull(t);
      return 1.0 - dart.notNull(t) * dart.notNull(t);
    }
  };
  (curves._DecelerateCurve.__ = function() {
    curves._DecelerateCurve.__proto__.new.call(this);
    ;
  }).prototype = curves._DecelerateCurve.prototype;
  dart.addTypeTests(curves._DecelerateCurve);
  dart.setLibraryUri(curves._DecelerateCurve, "package:flutter/src/animation/curves.dart");
  curves._BounceInCurve = class _BounceInCurve extends curves.Curve {
    transformInternal(t) {
      return 1.0 - dart.notNull(curves._bounce(1.0 - dart.notNull(t)));
    }
  };
  (curves._BounceInCurve.__ = function() {
    curves._BounceInCurve.__proto__.new.call(this);
    ;
  }).prototype = curves._BounceInCurve.prototype;
  dart.addTypeTests(curves._BounceInCurve);
  dart.setLibraryUri(curves._BounceInCurve, "package:flutter/src/animation/curves.dart");
  curves._BounceOutCurve = class _BounceOutCurve extends curves.Curve {
    transformInternal(t) {
      return curves._bounce(t);
    }
  };
  (curves._BounceOutCurve.__ = function() {
    curves._BounceOutCurve.__proto__.new.call(this);
    ;
  }).prototype = curves._BounceOutCurve.prototype;
  dart.addTypeTests(curves._BounceOutCurve);
  dart.setLibraryUri(curves._BounceOutCurve, "package:flutter/src/animation/curves.dart");
  curves._BounceInOutCurve = class _BounceInOutCurve extends curves.Curve {
    transformInternal(t) {
      if (dart.notNull(t) < 0.5)
        return (1.0 - dart.notNull(curves._bounce(1.0 - dart.notNull(t) * 2.0))) * 0.5;
      else
        return dart.notNull(curves._bounce(dart.notNull(t) * 2.0 - 1.0)) * 0.5 + 0.5;
    }
  };
  (curves._BounceInOutCurve.__ = function() {
    curves._BounceInOutCurve.__proto__.new.call(this);
    ;
  }).prototype = curves._BounceInOutCurve.prototype;
  dart.addTypeTests(curves._BounceInOutCurve);
  dart.setLibraryUri(curves._BounceInOutCurve, "package:flutter/src/animation/curves.dart");
  var period$ = dart.privateName(curves, "ElasticInCurve.period");
  curves.ElasticInCurve = class ElasticInCurve extends curves.Curve {
    get period() {
      return this[period$];
    }
    set period(value) {
      super.period = value;
    }
    transformInternal(t) {
      let s = dart.notNull(this.period) / 4.0;
      t = dart.notNull(t) - 1.0;
      return -math.pow(2.0, 10.0 * dart.notNull(t)) * math.sin((dart.notNull(t) - s) * (3.141592653589793 * 2.0) / dart.notNull(this.period));
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "ElasticInCurve")) + "(" + dart.str(this.period) + ")";
    }
  };
  (curves.ElasticInCurve.new = function(period = 0.4) {
    this[period$] = period;
    curves.ElasticInCurve.__proto__.new.call(this);
    ;
  }).prototype = curves.ElasticInCurve.prototype;
  dart.addTypeTests(curves.ElasticInCurve);
  dart.setLibraryUri(curves.ElasticInCurve, "package:flutter/src/animation/curves.dart");
  dart.setFieldSignature(curves.ElasticInCurve, () => ({
    __proto__: dart.getFields(curves.ElasticInCurve.__proto__),
    period: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(curves.ElasticInCurve, ['toString']);
  var period$0 = dart.privateName(curves, "ElasticOutCurve.period");
  curves.ElasticOutCurve = class ElasticOutCurve extends curves.Curve {
    get period() {
      return this[period$0];
    }
    set period(value) {
      super.period = value;
    }
    transformInternal(t) {
      let s = dart.notNull(this.period) / 4.0;
      return math.pow(2.0, -10 * dart.notNull(t)) * math.sin((dart.notNull(t) - s) * (3.141592653589793 * 2.0) / dart.notNull(this.period)) + 1.0;
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "ElasticOutCurve")) + "(" + dart.str(this.period) + ")";
    }
  };
  (curves.ElasticOutCurve.new = function(period = 0.4) {
    this[period$0] = period;
    curves.ElasticOutCurve.__proto__.new.call(this);
    ;
  }).prototype = curves.ElasticOutCurve.prototype;
  dart.addTypeTests(curves.ElasticOutCurve);
  dart.setLibraryUri(curves.ElasticOutCurve, "package:flutter/src/animation/curves.dart");
  dart.setFieldSignature(curves.ElasticOutCurve, () => ({
    __proto__: dart.getFields(curves.ElasticOutCurve.__proto__),
    period: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(curves.ElasticOutCurve, ['toString']);
  var period$1 = dart.privateName(curves, "ElasticInOutCurve.period");
  curves.ElasticInOutCurve = class ElasticInOutCurve extends curves.Curve {
    get period() {
      return this[period$1];
    }
    set period(value) {
      super.period = value;
    }
    transformInternal(t) {
      let s = dart.notNull(this.period) / 4.0;
      t = 2.0 * dart.notNull(t) - 1.0;
      if (dart.notNull(t) < 0.0)
        return -0.5 * math.pow(2.0, 10.0 * dart.notNull(t)) * math.sin((dart.notNull(t) - s) * (3.141592653589793 * 2.0) / dart.notNull(this.period));
      else
        return math.pow(2.0, -10.0 * dart.notNull(t)) * math.sin((dart.notNull(t) - s) * (3.141592653589793 * 2.0) / dart.notNull(this.period)) * 0.5 + 1.0;
    }
    toString() {
      return dart.str(object.objectRuntimeType(this, "ElasticInOutCurve")) + "(" + dart.str(this.period) + ")";
    }
  };
  (curves.ElasticInOutCurve.new = function(period = 0.4) {
    this[period$1] = period;
    curves.ElasticInOutCurve.__proto__.new.call(this);
    ;
  }).prototype = curves.ElasticInOutCurve.prototype;
  dart.addTypeTests(curves.ElasticInOutCurve);
  dart.setLibraryUri(curves.ElasticInOutCurve, "package:flutter/src/animation/curves.dart");
  dart.setFieldSignature(curves.ElasticInOutCurve, () => ({
    __proto__: dart.getFields(curves.ElasticInOutCurve.__proto__),
    period: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(curves.ElasticInOutCurve, ['toString']);
  var C7;
  var C8;
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
  var C32;
  var C33;
  var C34;
  var C35;
  var C36;
  var C37;
  var C38;
  var C39;
  var C40;
  var C41;
  var C42;
  var C43;
  var C44;
  var C45;
  var C46;
  curves.Curves = class Curves extends core.Object {};
  (curves.Curves.__ = function() {
    ;
  }).prototype = curves.Curves.prototype;
  dart.addTypeTests(curves.Curves);
  dart.setLibraryUri(curves.Curves, "package:flutter/src/animation/curves.dart");
  dart.defineLazy(curves.Curves, {
    /*curves.Curves.linear*/get linear() {
      return C5 || CT.C5;
    },
    /*curves.Curves.decelerate*/get decelerate() {
      return C7 || CT.C7;
    },
    /*curves.Curves.fastLinearToSlowEaseIn*/get fastLinearToSlowEaseIn() {
      return C8 || CT.C8;
    },
    /*curves.Curves.ease*/get ease() {
      return C9 || CT.C9;
    },
    /*curves.Curves.easeIn*/get easeIn() {
      return C10 || CT.C10;
    },
    /*curves.Curves.easeInToLinear*/get easeInToLinear() {
      return C11 || CT.C11;
    },
    /*curves.Curves.easeInSine*/get easeInSine() {
      return C12 || CT.C12;
    },
    /*curves.Curves.easeInQuad*/get easeInQuad() {
      return C13 || CT.C13;
    },
    /*curves.Curves.easeInCubic*/get easeInCubic() {
      return C14 || CT.C14;
    },
    /*curves.Curves.easeInQuart*/get easeInQuart() {
      return C15 || CT.C15;
    },
    /*curves.Curves.easeInQuint*/get easeInQuint() {
      return C16 || CT.C16;
    },
    /*curves.Curves.easeInExpo*/get easeInExpo() {
      return C17 || CT.C17;
    },
    /*curves.Curves.easeInCirc*/get easeInCirc() {
      return C18 || CT.C18;
    },
    /*curves.Curves.easeInBack*/get easeInBack() {
      return C19 || CT.C19;
    },
    /*curves.Curves.easeOut*/get easeOut() {
      return C20 || CT.C20;
    },
    /*curves.Curves.linearToEaseOut*/get linearToEaseOut() {
      return C21 || CT.C21;
    },
    /*curves.Curves.easeOutSine*/get easeOutSine() {
      return C22 || CT.C22;
    },
    /*curves.Curves.easeOutQuad*/get easeOutQuad() {
      return C23 || CT.C23;
    },
    /*curves.Curves.easeOutCubic*/get easeOutCubic() {
      return C24 || CT.C24;
    },
    /*curves.Curves.easeOutQuart*/get easeOutQuart() {
      return C25 || CT.C25;
    },
    /*curves.Curves.easeOutQuint*/get easeOutQuint() {
      return C26 || CT.C26;
    },
    /*curves.Curves.easeOutExpo*/get easeOutExpo() {
      return C27 || CT.C27;
    },
    /*curves.Curves.easeOutCirc*/get easeOutCirc() {
      return C28 || CT.C28;
    },
    /*curves.Curves.easeOutBack*/get easeOutBack() {
      return C29 || CT.C29;
    },
    /*curves.Curves.easeInOut*/get easeInOut() {
      return C30 || CT.C30;
    },
    /*curves.Curves.easeInOutSine*/get easeInOutSine() {
      return C31 || CT.C31;
    },
    /*curves.Curves.easeInOutQuad*/get easeInOutQuad() {
      return C32 || CT.C32;
    },
    /*curves.Curves.easeInOutCubic*/get easeInOutCubic() {
      return C33 || CT.C33;
    },
    /*curves.Curves.easeInOutQuart*/get easeInOutQuart() {
      return C34 || CT.C34;
    },
    /*curves.Curves.easeInOutQuint*/get easeInOutQuint() {
      return C35 || CT.C35;
    },
    /*curves.Curves.easeInOutExpo*/get easeInOutExpo() {
      return C36 || CT.C36;
    },
    /*curves.Curves.easeInOutCirc*/get easeInOutCirc() {
      return C37 || CT.C37;
    },
    /*curves.Curves.easeInOutBack*/get easeInOutBack() {
      return C38 || CT.C38;
    },
    /*curves.Curves.fastOutSlowIn*/get fastOutSlowIn() {
      return C39 || CT.C39;
    },
    /*curves.Curves.slowMiddle*/get slowMiddle() {
      return C40 || CT.C40;
    },
    /*curves.Curves.bounceIn*/get bounceIn() {
      return C41 || CT.C41;
    },
    /*curves.Curves.bounceOut*/get bounceOut() {
      return C42 || CT.C42;
    },
    /*curves.Curves.bounceInOut*/get bounceInOut() {
      return C43 || CT.C43;
    },
    /*curves.Curves.elasticIn*/get elasticIn() {
      return C44 || CT.C44;
    },
    /*curves.Curves.elasticOut*/get elasticOut() {
      return C45 || CT.C45;
    },
    /*curves.Curves.elasticInOut*/get elasticInOut() {
      return C46 || CT.C46;
    }
  });
  curves._bounce = function _bounce(t) {
    if (dart.notNull(t) < 1.0 / 2.75) {
      return 7.5625 * dart.notNull(t) * dart.notNull(t);
    } else if (dart.notNull(t) < 2 / 2.75) {
      t = dart.notNull(t) - 1.5 / 2.75;
      return 7.5625 * dart.notNull(t) * dart.notNull(t) + 0.75;
    } else if (dart.notNull(t) < 2.5 / 2.75) {
      t = dart.notNull(t) - 2.25 / 2.75;
      return 7.5625 * dart.notNull(t) * dart.notNull(t) + 0.9375;
    }
    t = dart.notNull(t) - 2.625 / 2.75;
    return 7.5625 * dart.notNull(t) * dart.notNull(t) + 0.984375;
  };
  animations._AlwaysCompleteAnimation = class _AlwaysCompleteAnimation extends animation$.Animation$(core.double) {
    addListener(listener) {
    }
    removeListener(listener) {
    }
    addStatusListener(listener) {
    }
    removeStatusListener(listener) {
    }
    get status() {
      return animation$.AnimationStatus.completed;
    }
    get value() {
      return 1.0;
    }
    toString() {
      return "kAlwaysCompleteAnimation";
    }
  };
  (animations._AlwaysCompleteAnimation.new = function() {
    animations._AlwaysCompleteAnimation.__proto__.new.call(this);
    ;
  }).prototype = animations._AlwaysCompleteAnimation.prototype;
  dart.addTypeTests(animations._AlwaysCompleteAnimation);
  dart.setMethodSignature(animations._AlwaysCompleteAnimation, () => ({
    __proto__: dart.getMethods(animations._AlwaysCompleteAnimation.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    addStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])]),
    removeStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])])
  }));
  dart.setGetterSignature(animations._AlwaysCompleteAnimation, () => ({
    __proto__: dart.getGetters(animations._AlwaysCompleteAnimation.__proto__),
    status: animation$.AnimationStatus,
    value: core.double
  }));
  dart.setLibraryUri(animations._AlwaysCompleteAnimation, "package:flutter/src/animation/animations.dart");
  dart.defineExtensionMethods(animations._AlwaysCompleteAnimation, ['toString']);
  animations._AlwaysDismissedAnimation = class _AlwaysDismissedAnimation extends animation$.Animation$(core.double) {
    addListener(listener) {
    }
    removeListener(listener) {
    }
    addStatusListener(listener) {
    }
    removeStatusListener(listener) {
    }
    get status() {
      return animation$.AnimationStatus.dismissed;
    }
    get value() {
      return 0.0;
    }
    toString() {
      return "kAlwaysDismissedAnimation";
    }
  };
  (animations._AlwaysDismissedAnimation.new = function() {
    animations._AlwaysDismissedAnimation.__proto__.new.call(this);
    ;
  }).prototype = animations._AlwaysDismissedAnimation.prototype;
  dart.addTypeTests(animations._AlwaysDismissedAnimation);
  dart.setMethodSignature(animations._AlwaysDismissedAnimation, () => ({
    __proto__: dart.getMethods(animations._AlwaysDismissedAnimation.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    addStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])]),
    removeStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])])
  }));
  dart.setGetterSignature(animations._AlwaysDismissedAnimation, () => ({
    __proto__: dart.getGetters(animations._AlwaysDismissedAnimation.__proto__),
    status: animation$.AnimationStatus,
    value: core.double
  }));
  dart.setLibraryUri(animations._AlwaysDismissedAnimation, "package:flutter/src/animation/animations.dart");
  dart.defineExtensionMethods(animations._AlwaysDismissedAnimation, ['toString']);
  const _is_AlwaysStoppedAnimation_default = Symbol('_is_AlwaysStoppedAnimation_default');
  var value$0 = dart.privateName(animations, "AlwaysStoppedAnimation.value");
  animations.AlwaysStoppedAnimation$ = dart.generic(T => {
    class AlwaysStoppedAnimation extends animation$.Animation$(T) {
      get value() {
        return this[value$0];
      }
      set value(value) {
        super.value = value;
      }
      addListener(listener) {
      }
      removeListener(listener) {
      }
      addStatusListener(listener) {
      }
      removeStatusListener(listener) {
      }
      get status() {
        return animation$.AnimationStatus.forward;
      }
      toStringDetails() {
        return dart.str(super.toStringDetails()) + " " + dart.str(this.value) + "; paused";
      }
    }
    (AlwaysStoppedAnimation.new = function(value) {
      this[value$0] = value;
      AlwaysStoppedAnimation.__proto__.new.call(this);
      ;
    }).prototype = AlwaysStoppedAnimation.prototype;
    dart.addTypeTests(AlwaysStoppedAnimation);
    AlwaysStoppedAnimation.prototype[_is_AlwaysStoppedAnimation_default] = true;
    dart.setMethodSignature(AlwaysStoppedAnimation, () => ({
      __proto__: dart.getMethods(AlwaysStoppedAnimation.__proto__),
      addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      addStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])]),
      removeStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])])
    }));
    dart.setGetterSignature(AlwaysStoppedAnimation, () => ({
      __proto__: dart.getGetters(AlwaysStoppedAnimation.__proto__),
      status: animation$.AnimationStatus
    }));
    dart.setLibraryUri(AlwaysStoppedAnimation, "package:flutter/src/animation/animations.dart");
    dart.setFieldSignature(AlwaysStoppedAnimation, () => ({
      __proto__: dart.getFields(AlwaysStoppedAnimation.__proto__),
      value: dart.finalFieldType(T)
    }));
    return AlwaysStoppedAnimation;
  });
  animations.AlwaysStoppedAnimation = animations.AlwaysStoppedAnimation$();
  dart.addTypeTests(animations.AlwaysStoppedAnimation, _is_AlwaysStoppedAnimation_default);
  var _status = dart.privateName(animations, "_status");
  var _value = dart.privateName(animations, "_value");
  var _parent = dart.privateName(animations, "_parent");
  var _listenerCounter = dart.privateName(listener_helpers, "_listenerCounter");
  listener_helpers.AnimationLazyListenerMixin = class AnimationLazyListenerMixin extends core.Object {};
  listener_helpers.AnimationLazyListenerMixin[dart.mixinOn] = Object => class AnimationLazyListenerMixin extends Object {
    didRegisterListener() {
      if (!(dart.notNull(this[_listenerCounter]) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/listener_helpers.dart", 26, 12, "_listenerCounter >= 0");
      if (this[_listenerCounter] === 0) this.didStartListening();
      this[_listenerCounter] = dart.notNull(this[_listenerCounter]) + 1;
    }
    didUnregisterListener() {
      if (!(dart.notNull(this[_listenerCounter]) >= 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/listener_helpers.dart", 39, 12, "_listenerCounter >= 1");
      this[_listenerCounter] = dart.notNull(this[_listenerCounter]) - 1;
      if (this[_listenerCounter] === 0) this.didStopListening();
    }
    get isListening() {
      return dart.notNull(this[_listenerCounter]) > 0;
    }
  };
  (listener_helpers.AnimationLazyListenerMixin[dart.mixinNew] = function() {
    this[_listenerCounter] = 0;
  }).prototype = listener_helpers.AnimationLazyListenerMixin.prototype;
  dart.addTypeTests(listener_helpers.AnimationLazyListenerMixin);
  listener_helpers.AnimationLazyListenerMixin[dart.implements] = () => [core.Object];
  dart.setMethodSignature(listener_helpers.AnimationLazyListenerMixin, () => ({
    __proto__: dart.getMethods(listener_helpers.AnimationLazyListenerMixin.__proto__),
    didRegisterListener: dart.fnType(dart.void, []),
    didUnregisterListener: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(listener_helpers.AnimationLazyListenerMixin, () => ({
    __proto__: dart.getGetters(listener_helpers.AnimationLazyListenerMixin.__proto__),
    isListening: core.bool
  }));
  dart.setLibraryUri(listener_helpers.AnimationLazyListenerMixin, "package:flutter/src/animation/listener_helpers.dart");
  dart.setFieldSignature(listener_helpers.AnimationLazyListenerMixin, () => ({
    __proto__: dart.getFields(listener_helpers.AnimationLazyListenerMixin.__proto__),
    [_listenerCounter]: dart.fieldType(core.int)
  }));
  var _listeners = dart.privateName(listener_helpers, "_listeners");
  listener_helpers.AnimationLocalListenersMixin = class AnimationLocalListenersMixin extends core.Object {};
  listener_helpers.AnimationLocalListenersMixin[dart.mixinOn] = Object => class AnimationLocalListenersMixin extends Object {
    addListener(listener) {
      this.didRegisterListener();
      this[_listeners].add(listener);
    }
    removeListener(listener) {
      let removed = this[_listeners].remove(listener);
      if (dart.test(removed)) {
        this.didUnregisterListener();
      }
    }
    notifyListeners() {
      let localListeners = ListOfVoidTovoid().from(this[_listeners]);
      for (let listener of localListeners) {
        try {
          if (dart.test(this[_listeners].contains(listener))) listener();
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "animation library", context: new assertions.ErrorDescription.new("while notifying listeners for " + dart.str(this[$runtimeType])), informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin()).new((function*() {
              yield new (DiagnosticsPropertyOfAnimationLocalListenersMixin()).new("The " + dart.str(this[$runtimeType]) + " notifying listeners was", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
            }).bind(this)), VoidToIterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin())}));
        }
      }
    }
  };
  (listener_helpers.AnimationLocalListenersMixin[dart.mixinNew] = function() {
    this[_listeners] = new (ObserverListOfVoidTovoid()).new();
  }).prototype = listener_helpers.AnimationLocalListenersMixin.prototype;
  dart.addTypeTests(listener_helpers.AnimationLocalListenersMixin);
  listener_helpers.AnimationLocalListenersMixin[dart.implements] = () => [core.Object];
  dart.setMethodSignature(listener_helpers.AnimationLocalListenersMixin, () => ({
    __proto__: dart.getMethods(listener_helpers.AnimationLocalListenersMixin.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    notifyListeners: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(listener_helpers.AnimationLocalListenersMixin, "package:flutter/src/animation/listener_helpers.dart");
  dart.setFieldSignature(listener_helpers.AnimationLocalListenersMixin, () => ({
    __proto__: dart.getFields(listener_helpers.AnimationLocalListenersMixin.__proto__),
    [_listeners]: dart.finalFieldType(observer_list.ObserverList$(dart.fnType(dart.void, [])))
  }));
  var _statusListeners = dart.privateName(listener_helpers, "_statusListeners");
  listener_helpers.AnimationLocalStatusListenersMixin = class AnimationLocalStatusListenersMixin extends core.Object {};
  listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinOn] = Object => class AnimationLocalStatusListenersMixin extends Object {
    addStatusListener(listener) {
      this.didRegisterListener();
      this[_statusListeners].add(listener);
    }
    removeStatusListener(listener) {
      let removed = this[_statusListeners].remove(listener);
      if (dart.test(removed)) {
        this.didUnregisterListener();
      }
    }
    notifyStatusListeners(status) {
      let localListeners = ListOfAnimationStatusTovoid().from(this[_statusListeners]);
      for (let listener of localListeners) {
        try {
          if (dart.test(this[_statusListeners].contains(listener))) listener(status);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "animation library", context: new assertions.ErrorDescription.new("while notifying status listeners for " + dart.str(this[$runtimeType])), informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin()).new((function*() {
              yield new (DiagnosticsPropertyOfAnimationLocalStatusListenersMixin()).new("The " + dart.str(this[$runtimeType]) + " notifying status listeners was", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
            }).bind(this)), VoidToIterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin())}));
        }
      }
    }
  };
  (listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinNew] = function() {
    this[_statusListeners] = new (ObserverListOfAnimationStatusTovoid()).new();
  }).prototype = listener_helpers.AnimationLocalStatusListenersMixin.prototype;
  dart.addTypeTests(listener_helpers.AnimationLocalStatusListenersMixin);
  listener_helpers.AnimationLocalStatusListenersMixin[dart.implements] = () => [core.Object];
  dart.setMethodSignature(listener_helpers.AnimationLocalStatusListenersMixin, () => ({
    __proto__: dart.getMethods(listener_helpers.AnimationLocalStatusListenersMixin.__proto__),
    addStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])]),
    removeStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])]),
    notifyStatusListeners: dart.fnType(dart.void, [animation$.AnimationStatus])
  }));
  dart.setLibraryUri(listener_helpers.AnimationLocalStatusListenersMixin, "package:flutter/src/animation/listener_helpers.dart");
  dart.setFieldSignature(listener_helpers.AnimationLocalStatusListenersMixin, () => ({
    __proto__: dart.getFields(listener_helpers.AnimationLocalStatusListenersMixin.__proto__),
    [_statusListeners]: dart.finalFieldType(observer_list.ObserverList$(dart.fnType(dart.void, [animation$.AnimationStatus])))
  }));
  const Animation_AnimationLazyListenerMixin$36 = class Animation_AnimationLazyListenerMixin extends animation$.Animation$(core.double) {};
  (Animation_AnimationLazyListenerMixin$36.new = function() {
    listener_helpers.AnimationLazyListenerMixin[dart.mixinNew].call(this);
    Animation_AnimationLazyListenerMixin$36.__proto__.new.call(this);
  }).prototype = Animation_AnimationLazyListenerMixin$36.prototype;
  dart.applyMixin(Animation_AnimationLazyListenerMixin$36, listener_helpers.AnimationLazyListenerMixin);
  const Animation_AnimationLocalListenersMixin$36 = class Animation_AnimationLocalListenersMixin extends Animation_AnimationLazyListenerMixin$36 {};
  (Animation_AnimationLocalListenersMixin$36.new = function() {
    listener_helpers.AnimationLocalListenersMixin[dart.mixinNew].call(this);
    Animation_AnimationLocalListenersMixin$36.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalListenersMixin$36.prototype;
  dart.applyMixin(Animation_AnimationLocalListenersMixin$36, listener_helpers.AnimationLocalListenersMixin);
  const Animation_AnimationLocalStatusListenersMixin$36 = class Animation_AnimationLocalStatusListenersMixin extends Animation_AnimationLocalListenersMixin$36 {};
  (Animation_AnimationLocalStatusListenersMixin$36.new = function() {
    listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinNew].call(this);
    Animation_AnimationLocalStatusListenersMixin$36.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalStatusListenersMixin$36.prototype;
  dart.applyMixin(Animation_AnimationLocalStatusListenersMixin$36, listener_helpers.AnimationLocalStatusListenersMixin);
  animations.ProxyAnimation = class ProxyAnimation extends Animation_AnimationLocalStatusListenersMixin$36 {
    get parent() {
      return this[_parent];
    }
    set parent(value) {
      if (dart.equals(value, this[_parent])) return;
      if (this[_parent] != null) {
        this[_status] = this[_parent].status;
        this[_value] = this[_parent].value;
        if (dart.test(this.isListening)) this.didStopListening();
      }
      this[_parent] = value;
      if (this[_parent] != null) {
        if (dart.test(this.isListening)) this.didStartListening();
        if (this[_value] != this[_parent].value) this.notifyListeners();
        if (!dart.equals(this[_status], this[_parent].status)) this.notifyStatusListeners(this[_parent].status);
        this[_status] = null;
        this[_value] = null;
      }
    }
    didStartListening() {
      if (this[_parent] != null) {
        this[_parent].addListener(dart.bind(this, 'notifyListeners'));
        this[_parent].addStatusListener(dart.bind(this, 'notifyStatusListeners'));
      }
    }
    didStopListening() {
      if (this[_parent] != null) {
        this[_parent].removeListener(dart.bind(this, 'notifyListeners'));
        this[_parent].removeStatusListener(dart.bind(this, 'notifyStatusListeners'));
      }
    }
    get status() {
      return this[_parent] != null ? this[_parent].status : this[_status];
    }
    get value() {
      return this[_parent] != null ? this[_parent].value : this[_value];
    }
    toString() {
      if (this.parent == null) return dart.str(object.objectRuntimeType(this, "ProxyAnimation")) + "(null; " + dart.str(super.toStringDetails()) + " " + this.value[$toStringAsFixed](3) + ")";
      return dart.str(this.parent) + "➩" + dart.str(object.objectRuntimeType(this, "ProxyAnimation"));
    }
  };
  (animations.ProxyAnimation.new = function(animation = null) {
    this[_status] = null;
    this[_value] = null;
    this[_parent] = null;
    animations.ProxyAnimation.__proto__.new.call(this);
    this[_parent] = animation;
    if (this[_parent] == null) {
      this[_status] = animation$.AnimationStatus.dismissed;
      this[_value] = 0.0;
    }
  }).prototype = animations.ProxyAnimation.prototype;
  dart.addTypeTests(animations.ProxyAnimation);
  dart.setMethodSignature(animations.ProxyAnimation, () => ({
    __proto__: dart.getMethods(animations.ProxyAnimation.__proto__),
    didStartListening: dart.fnType(dart.void, []),
    didStopListening: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(animations.ProxyAnimation, () => ({
    __proto__: dart.getGetters(animations.ProxyAnimation.__proto__),
    parent: animation$.Animation$(core.double),
    status: animation$.AnimationStatus,
    value: core.double
  }));
  dart.setSetterSignature(animations.ProxyAnimation, () => ({
    __proto__: dart.getSetters(animations.ProxyAnimation.__proto__),
    parent: animation$.Animation$(core.double)
  }));
  dart.setLibraryUri(animations.ProxyAnimation, "package:flutter/src/animation/animations.dart");
  dart.setFieldSignature(animations.ProxyAnimation, () => ({
    __proto__: dart.getFields(animations.ProxyAnimation.__proto__),
    [_status]: dart.fieldType(animation$.AnimationStatus),
    [_value]: dart.fieldType(core.double),
    [_parent]: dart.fieldType(animation$.Animation$(core.double))
  }));
  dart.defineExtensionMethods(animations.ProxyAnimation, ['toString']);
  var _statusChangeHandler = dart.privateName(animations, "_statusChangeHandler");
  var _reverseStatus = dart.privateName(animations, "_reverseStatus");
  var parent$1 = dart.privateName(animations, "ReverseAnimation.parent");
  const Animation_AnimationLazyListenerMixin$36$ = class Animation_AnimationLazyListenerMixin extends animation$.Animation$(core.double) {};
  (Animation_AnimationLazyListenerMixin$36$.new = function() {
    listener_helpers.AnimationLazyListenerMixin[dart.mixinNew].call(this);
    Animation_AnimationLazyListenerMixin$36$.__proto__.new.call(this);
  }).prototype = Animation_AnimationLazyListenerMixin$36$.prototype;
  dart.applyMixin(Animation_AnimationLazyListenerMixin$36$, listener_helpers.AnimationLazyListenerMixin);
  const Animation_AnimationLocalStatusListenersMixin$36$ = class Animation_AnimationLocalStatusListenersMixin extends Animation_AnimationLazyListenerMixin$36$ {};
  (Animation_AnimationLocalStatusListenersMixin$36$.new = function() {
    listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinNew].call(this);
    Animation_AnimationLocalStatusListenersMixin$36$.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalStatusListenersMixin$36$.prototype;
  dart.applyMixin(Animation_AnimationLocalStatusListenersMixin$36$, listener_helpers.AnimationLocalStatusListenersMixin);
  animations.ReverseAnimation = class ReverseAnimation extends Animation_AnimationLocalStatusListenersMixin$36$ {
    get parent() {
      return this[parent$1];
    }
    set parent(value) {
      super.parent = value;
    }
    addListener(listener) {
      this.didRegisterListener();
      this.parent.addListener(listener);
    }
    removeListener(listener) {
      this.parent.removeListener(listener);
      this.didUnregisterListener();
    }
    didStartListening() {
      this.parent.addStatusListener(dart.bind(this, _statusChangeHandler));
    }
    didStopListening() {
      this.parent.removeStatusListener(dart.bind(this, _statusChangeHandler));
    }
    [_statusChangeHandler](status) {
      this.notifyStatusListeners(this[_reverseStatus](status));
    }
    get status() {
      return this[_reverseStatus](this.parent.status);
    }
    get value() {
      return 1.0 - dart.notNull(this.parent.value);
    }
    [_reverseStatus](status) {
      if (!(status != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 301, 12, "status != null");
      switch (status) {
        case C1 || CT.C1:
        {
          return animation$.AnimationStatus.reverse;
        }
        case C2 || CT.C2:
        {
          return animation$.AnimationStatus.forward;
        }
        case C3 || CT.C3:
        {
          return animation$.AnimationStatus.dismissed;
        }
        case C0 || CT.C0:
        {
          return animation$.AnimationStatus.completed;
        }
      }
      return null;
    }
    toString() {
      return dart.str(this.parent) + "➪" + dart.str(object.objectRuntimeType(this, "ReverseAnimation"));
    }
  };
  (animations.ReverseAnimation.new = function(parent) {
    this[parent$1] = parent;
    if (!(parent != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 263, 14, "parent != null");
    animations.ReverseAnimation.__proto__.new.call(this);
    ;
  }).prototype = animations.ReverseAnimation.prototype;
  dart.addTypeTests(animations.ReverseAnimation);
  dart.setMethodSignature(animations.ReverseAnimation, () => ({
    __proto__: dart.getMethods(animations.ReverseAnimation.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    didStartListening: dart.fnType(dart.void, []),
    didStopListening: dart.fnType(dart.void, []),
    [_statusChangeHandler]: dart.fnType(dart.void, [animation$.AnimationStatus]),
    [_reverseStatus]: dart.fnType(animation$.AnimationStatus, [animation$.AnimationStatus])
  }));
  dart.setGetterSignature(animations.ReverseAnimation, () => ({
    __proto__: dart.getGetters(animations.ReverseAnimation.__proto__),
    status: animation$.AnimationStatus,
    value: core.double
  }));
  dart.setLibraryUri(animations.ReverseAnimation, "package:flutter/src/animation/animations.dart");
  dart.setFieldSignature(animations.ReverseAnimation, () => ({
    __proto__: dart.getFields(animations.ReverseAnimation.__proto__),
    parent: dart.finalFieldType(animation$.Animation$(core.double))
  }));
  dart.defineExtensionMethods(animations.ReverseAnimation, ['toString']);
  var _curveDirection = dart.privateName(animations, "_curveDirection");
  var _updateCurveDirection = dart.privateName(animations, "_updateCurveDirection");
  var _useForwardCurve = dart.privateName(animations, "_useForwardCurve");
  var parent$2 = dart.privateName(animations, "CurvedAnimation.parent");
  var curve$2 = dart.privateName(animations, "CurvedAnimation.curve");
  var reverseCurve$ = dart.privateName(animations, "CurvedAnimation.reverseCurve");
  const Animation_AnimationWithParentMixin$36 = class Animation_AnimationWithParentMixin extends animation$.Animation$(core.double) {};
  (Animation_AnimationWithParentMixin$36.new = function() {
    Animation_AnimationWithParentMixin$36.__proto__.new.call(this);
  }).prototype = Animation_AnimationWithParentMixin$36.prototype;
  dart.applyMixin(Animation_AnimationWithParentMixin$36, animations.AnimationWithParentMixin$(core.double));
  animations.CurvedAnimation = class CurvedAnimation extends Animation_AnimationWithParentMixin$36 {
    get parent() {
      return this[parent$2];
    }
    set parent(value) {
      super.parent = value;
    }
    get curve() {
      return this[curve$2];
    }
    set curve(value) {
      this[curve$2] = value;
    }
    get reverseCurve() {
      return this[reverseCurve$];
    }
    set reverseCurve(value) {
      this[reverseCurve$] = value;
    }
    [_updateCurveDirection](status) {
      switch (status) {
        case C0 || CT.C0:
        case C3 || CT.C3:
        {
          this[_curveDirection] = null;
          break;
        }
        case C1 || CT.C1:
        {
          this[_curveDirection] == null ? this[_curveDirection] = animation$.AnimationStatus.forward : null;
          break;
        }
        case C2 || CT.C2:
        {
          this[_curveDirection] == null ? this[_curveDirection] = animation$.AnimationStatus.reverse : null;
          break;
        }
      }
    }
    get [_useForwardCurve]() {
      let t10;
      return this.reverseCurve == null || !dart.equals((t10 = this[_curveDirection], t10 == null ? this.parent.status : t10), animation$.AnimationStatus.reverse);
    }
    get value() {
      let activeCurve = dart.test(this[_useForwardCurve]) ? this.curve : this.reverseCurve;
      let t = this.parent.value;
      if (activeCurve == null) return t;
      if (t === 0.0 || t === 1.0) {
        if (!dart.test(dart.fn(() => {
          let transformedValue = activeCurve.transform(t);
          let roundedTransformedValue = transformedValue[$round]()[$toDouble]();
          if (roundedTransformedValue !== t) {
            dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Invalid curve endpoint at " + dart.str(t) + "."), new assertions.ErrorDescription.new("Curves must map 0.0 to near zero and 1.0 to near one but " + dart.str(dart.runtimeType(activeCurve)) + " mapped " + dart.str(t) + " to " + dart.str(transformedValue) + ", which " + "is near " + dart.str(roundedTransformedValue) + ".")])));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 438, 14, "() {\r\n        final double transformedValue = activeCurve.transform(t);\r\n        final double roundedTransformedValue = transformedValue.round().toDouble();\r\n        if (roundedTransformedValue != t) {\r\n          throw FlutterError.fromParts(<DiagnosticsNode>[\r\n            ErrorSummary('Invalid curve endpoint at $t.'),\r\n            ErrorDescription(\r\n              'Curves must map 0.0 to near zero and 1.0 to near one but '\r\n              '${activeCurve.runtimeType} mapped $t to $transformedValue, which '\r\n              'is near $roundedTransformedValue.'\r\n            )\r\n          ]);\r\n        }\r\n        return true;\r\n      }()");
        return t;
      }
      return activeCurve.transform(t);
    }
    toString() {
      if (this.reverseCurve == null) return dart.str(this.parent) + "➩" + dart.str(this.curve);
      if (dart.test(this[_useForwardCurve])) return dart.str(this.parent) + "➩" + dart.str(this.curve) + "ₒₙ/" + dart.str(this.reverseCurve);
      return dart.str(this.parent) + "➩" + dart.str(this.curve) + "/" + dart.str(this.reverseCurve) + "ₒₙ";
    }
  };
  (animations.CurvedAnimation.new = function(opts) {
    let parent = opts && 'parent' in opts ? opts.parent : null;
    let curve = opts && 'curve' in opts ? opts.curve : null;
    let reverseCurve = opts && 'reverseCurve' in opts ? opts.reverseCurve : null;
    this[_curveDirection] = null;
    this[parent$2] = parent;
    this[curve$2] = curve;
    this[reverseCurve$] = reverseCurve;
    if (!(parent != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 376, 15, "parent != null");
    if (!(curve != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 377, 15, "curve != null");
    animations.CurvedAnimation.__proto__.new.call(this);
    this[_updateCurveDirection](this.parent.status);
    this.parent.addStatusListener(dart.bind(this, _updateCurveDirection));
  }).prototype = animations.CurvedAnimation.prototype;
  dart.addTypeTests(animations.CurvedAnimation);
  dart.setMethodSignature(animations.CurvedAnimation, () => ({
    __proto__: dart.getMethods(animations.CurvedAnimation.__proto__),
    [_updateCurveDirection]: dart.fnType(dart.void, [animation$.AnimationStatus])
  }));
  dart.setGetterSignature(animations.CurvedAnimation, () => ({
    __proto__: dart.getGetters(animations.CurvedAnimation.__proto__),
    [_useForwardCurve]: core.bool,
    value: core.double
  }));
  dart.setLibraryUri(animations.CurvedAnimation, "package:flutter/src/animation/animations.dart");
  dart.setFieldSignature(animations.CurvedAnimation, () => ({
    __proto__: dart.getFields(animations.CurvedAnimation.__proto__),
    parent: dart.finalFieldType(animation$.Animation$(core.double)),
    curve: dart.fieldType(curves.Curve),
    reverseCurve: dart.fieldType(curves.Curve),
    [_curveDirection]: dart.fieldType(animation$.AnimationStatus)
  }));
  dart.defineExtensionMethods(animations.CurvedAnimation, ['toString']);
  var _name$0 = dart.privateName(animations, "_name");
  var C47;
  var C48;
  var C49;
  animations._TrainHoppingMode = class _TrainHoppingMode extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (animations._TrainHoppingMode.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = animations._TrainHoppingMode.prototype;
  dart.addTypeTests(animations._TrainHoppingMode);
  dart.setLibraryUri(animations._TrainHoppingMode, "package:flutter/src/animation/animations.dart");
  dart.setFieldSignature(animations._TrainHoppingMode, () => ({
    __proto__: dart.getFields(animations._TrainHoppingMode.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(animations._TrainHoppingMode, ['toString']);
  animations._TrainHoppingMode.minimize = C47 || CT.C47;
  animations._TrainHoppingMode.maximize = C48 || CT.C48;
  animations._TrainHoppingMode.values = C49 || CT.C49;
  var _mode = dart.privateName(animations, "_mode");
  var _lastStatus = dart.privateName(animations, "_lastStatus");
  var _lastValue = dart.privateName(animations, "_lastValue");
  var _currentTrain$ = dart.privateName(animations, "_currentTrain");
  var _nextTrain$ = dart.privateName(animations, "_nextTrain");
  var _valueChangeHandler = dart.privateName(animations, "_valueChangeHandler");
  listener_helpers.AnimationEagerListenerMixin = class AnimationEagerListenerMixin extends core.Object {};
  listener_helpers.AnimationEagerListenerMixin[dart.mixinOn] = Object => class AnimationEagerListenerMixin extends Object {
    didRegisterListener() {
    }
    didUnregisterListener() {
    }
    dispose() {
    }
  };
  (listener_helpers.AnimationEagerListenerMixin[dart.mixinNew] = function() {
  }).prototype = listener_helpers.AnimationEagerListenerMixin.prototype;
  dart.addTypeTests(listener_helpers.AnimationEagerListenerMixin);
  listener_helpers.AnimationEagerListenerMixin[dart.implements] = () => [core.Object];
  dart.setMethodSignature(listener_helpers.AnimationEagerListenerMixin, () => ({
    __proto__: dart.getMethods(listener_helpers.AnimationEagerListenerMixin.__proto__),
    didRegisterListener: dart.fnType(dart.void, []),
    didUnregisterListener: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(listener_helpers.AnimationEagerListenerMixin, "package:flutter/src/animation/listener_helpers.dart");
  var onSwitchedTrain$ = dart.privateName(animations, "TrainHoppingAnimation.onSwitchedTrain");
  const Animation_AnimationEagerListenerMixin$36 = class Animation_AnimationEagerListenerMixin extends animation$.Animation$(core.double) {};
  (Animation_AnimationEagerListenerMixin$36.new = function() {
    Animation_AnimationEagerListenerMixin$36.__proto__.new.call(this);
  }).prototype = Animation_AnimationEagerListenerMixin$36.prototype;
  dart.applyMixin(Animation_AnimationEagerListenerMixin$36, listener_helpers.AnimationEagerListenerMixin);
  const Animation_AnimationLocalListenersMixin$36$ = class Animation_AnimationLocalListenersMixin extends Animation_AnimationEagerListenerMixin$36 {};
  (Animation_AnimationLocalListenersMixin$36$.new = function() {
    listener_helpers.AnimationLocalListenersMixin[dart.mixinNew].call(this);
    Animation_AnimationLocalListenersMixin$36$.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalListenersMixin$36$.prototype;
  dart.applyMixin(Animation_AnimationLocalListenersMixin$36$, listener_helpers.AnimationLocalListenersMixin);
  const Animation_AnimationLocalStatusListenersMixin$36$0 = class Animation_AnimationLocalStatusListenersMixin extends Animation_AnimationLocalListenersMixin$36$ {};
  (Animation_AnimationLocalStatusListenersMixin$36$0.new = function() {
    listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinNew].call(this);
    Animation_AnimationLocalStatusListenersMixin$36$0.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalStatusListenersMixin$36$0.prototype;
  dart.applyMixin(Animation_AnimationLocalStatusListenersMixin$36$0, listener_helpers.AnimationLocalStatusListenersMixin);
  animations.TrainHoppingAnimation = class TrainHoppingAnimation extends Animation_AnimationLocalStatusListenersMixin$36$0 {
    get onSwitchedTrain() {
      return this[onSwitchedTrain$];
    }
    set onSwitchedTrain(value) {
      this[onSwitchedTrain$] = value;
    }
    get currentTrain() {
      return this[_currentTrain$];
    }
    [_statusChangeHandler](status) {
      if (!(this[_currentTrain$] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 533, 12, "_currentTrain != null");
      if (!dart.equals(status, this[_lastStatus])) {
        this.notifyListeners();
        this[_lastStatus] = status;
      }
      if (!(this[_lastStatus] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 538, 12, "_lastStatus != null");
    }
    get status() {
      return this[_currentTrain$].status;
    }
    [_valueChangeHandler]() {
      let t10;
      if (!(this[_currentTrain$] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 546, 12, "_currentTrain != null");
      let hop = false;
      if (this[_nextTrain$] != null) {
        if (!(this[_mode] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 549, 14, "_mode != null");
        switch (this[_mode]) {
          case C47 || CT.C47:
          {
            hop = dart.notNull(this[_nextTrain$].value) <= dart.notNull(this[_currentTrain$].value);
            break;
          }
          case C48 || CT.C48:
          {
            hop = dart.notNull(this[_nextTrain$].value) >= dart.notNull(this[_currentTrain$].value);
            break;
          }
        }
        if (hop) {
          t10 = this[_currentTrain$];
          t10.removeStatusListener(dart.bind(this, _statusChangeHandler));
          t10.removeListener(dart.bind(this, _valueChangeHandler));
          t10;
          this[_currentTrain$] = this[_nextTrain$];
          this[_nextTrain$] = null;
          this[_currentTrain$].addStatusListener(dart.bind(this, _statusChangeHandler));
          this[_statusChangeHandler](this[_currentTrain$].status);
        }
      }
      let newValue = this.value;
      if (newValue != this[_lastValue]) {
        this.notifyListeners();
        this[_lastValue] = newValue;
      }
      if (!(this[_lastValue] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 573, 12, "_lastValue != null");
      if (hop && this.onSwitchedTrain != null) this.onSwitchedTrain();
    }
    get value() {
      return this[_currentTrain$].value;
    }
    dispose() {
      let t10;
      if (!(this[_currentTrain$] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 585, 12, "_currentTrain != null");
      this[_currentTrain$].removeStatusListener(dart.bind(this, _statusChangeHandler));
      this[_currentTrain$].removeListener(dart.bind(this, _valueChangeHandler));
      this[_currentTrain$] = null;
      t10 = this[_nextTrain$];
      t10 == null ? null : t10.removeListener(dart.bind(this, _valueChangeHandler));
      this[_nextTrain$] = null;
      super.dispose();
    }
    toString() {
      if (this[_nextTrain$] != null) return dart.str(this.currentTrain) + "➩" + dart.str(object.objectRuntimeType(this, "TrainHoppingAnimation")) + "(next: " + dart.str(this[_nextTrain$]) + ")";
      return dart.str(this.currentTrain) + "➩" + dart.str(object.objectRuntimeType(this, "TrainHoppingAnimation")) + "(no next)";
    }
  };
  (animations.TrainHoppingAnimation.new = function(_currentTrain, _nextTrain, opts) {
    let t10;
    let onSwitchedTrain = opts && 'onSwitchedTrain' in opts ? opts.onSwitchedTrain : null;
    this[_mode] = null;
    this[_lastStatus] = null;
    this[_lastValue] = null;
    this[_currentTrain$] = _currentTrain;
    this[_nextTrain$] = _nextTrain;
    this[onSwitchedTrain$] = onSwitchedTrain;
    if (!(_currentTrain != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 497, 16, "_currentTrain != null");
    animations.TrainHoppingAnimation.__proto__.new.call(this);
    if (this[_nextTrain$] != null) {
      if (this[_currentTrain$].value == this[_nextTrain$].value) {
        this[_currentTrain$] = this[_nextTrain$];
        this[_nextTrain$] = null;
      } else if (dart.notNull(this[_currentTrain$].value) > dart.notNull(this[_nextTrain$].value)) {
        this[_mode] = animations._TrainHoppingMode.maximize;
      } else {
        if (!(dart.notNull(this[_currentTrain$].value) < dart.notNull(this[_nextTrain$].value))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 505, 16, "_currentTrain.value < _nextTrain.value");
        this[_mode] = animations._TrainHoppingMode.minimize;
      }
    }
    this[_currentTrain$].addStatusListener(dart.bind(this, _statusChangeHandler));
    this[_currentTrain$].addListener(dart.bind(this, _valueChangeHandler));
    t10 = this[_nextTrain$];
    t10 == null ? null : t10.addListener(dart.bind(this, _valueChangeHandler));
    if (!(this[_mode] != null || this[_nextTrain$] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 512, 12, "_mode != null || _nextTrain == null");
  }).prototype = animations.TrainHoppingAnimation.prototype;
  dart.addTypeTests(animations.TrainHoppingAnimation);
  dart.setMethodSignature(animations.TrainHoppingAnimation, () => ({
    __proto__: dart.getMethods(animations.TrainHoppingAnimation.__proto__),
    [_statusChangeHandler]: dart.fnType(dart.void, [animation$.AnimationStatus]),
    [_valueChangeHandler]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(animations.TrainHoppingAnimation, () => ({
    __proto__: dart.getGetters(animations.TrainHoppingAnimation.__proto__),
    currentTrain: animation$.Animation$(core.double),
    status: animation$.AnimationStatus,
    value: core.double
  }));
  dart.setLibraryUri(animations.TrainHoppingAnimation, "package:flutter/src/animation/animations.dart");
  dart.setFieldSignature(animations.TrainHoppingAnimation, () => ({
    __proto__: dart.getFields(animations.TrainHoppingAnimation.__proto__),
    [_currentTrain$]: dart.fieldType(animation$.Animation$(core.double)),
    [_nextTrain$]: dart.fieldType(animation$.Animation$(core.double)),
    [_mode]: dart.fieldType(animations._TrainHoppingMode),
    onSwitchedTrain: dart.fieldType(dart.fnType(dart.void, [])),
    [_lastStatus]: dart.fieldType(animation$.AnimationStatus),
    [_lastValue]: dart.fieldType(core.double)
  }));
  dart.defineExtensionMethods(animations.TrainHoppingAnimation, ['toString']);
  var _maybeNotifyListeners = dart.privateName(animations, "_maybeNotifyListeners");
  var _maybeNotifyStatusListeners = dart.privateName(animations, "_maybeNotifyStatusListeners");
  const _is_CompoundAnimation_default = Symbol('_is_CompoundAnimation_default');
  var first$ = dart.privateName(animations, "CompoundAnimation.first");
  var next$ = dart.privateName(animations, "CompoundAnimation.next");
  animations.CompoundAnimation$ = dart.generic(T => {
    const Animation_AnimationLazyListenerMixin$36 = class Animation_AnimationLazyListenerMixin extends animation$.Animation$(T) {};
    (Animation_AnimationLazyListenerMixin$36.new = function() {
      listener_helpers.AnimationLazyListenerMixin[dart.mixinNew].call(this);
      Animation_AnimationLazyListenerMixin$36.__proto__.new.call(this);
    }).prototype = Animation_AnimationLazyListenerMixin$36.prototype;
    dart.applyMixin(Animation_AnimationLazyListenerMixin$36, listener_helpers.AnimationLazyListenerMixin);
    const Animation_AnimationLocalListenersMixin$36 = class Animation_AnimationLocalListenersMixin extends Animation_AnimationLazyListenerMixin$36 {};
    (Animation_AnimationLocalListenersMixin$36.new = function() {
      listener_helpers.AnimationLocalListenersMixin[dart.mixinNew].call(this);
      Animation_AnimationLocalListenersMixin$36.__proto__.new.call(this);
    }).prototype = Animation_AnimationLocalListenersMixin$36.prototype;
    dart.applyMixin(Animation_AnimationLocalListenersMixin$36, listener_helpers.AnimationLocalListenersMixin);
    const Animation_AnimationLocalStatusListenersMixin$36 = class Animation_AnimationLocalStatusListenersMixin extends Animation_AnimationLocalListenersMixin$36 {};
    (Animation_AnimationLocalStatusListenersMixin$36.new = function() {
      listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinNew].call(this);
      Animation_AnimationLocalStatusListenersMixin$36.__proto__.new.call(this);
    }).prototype = Animation_AnimationLocalStatusListenersMixin$36.prototype;
    dart.applyMixin(Animation_AnimationLocalStatusListenersMixin$36, listener_helpers.AnimationLocalStatusListenersMixin);
    class CompoundAnimation extends Animation_AnimationLocalStatusListenersMixin$36 {
      get first() {
        return this[first$];
      }
      set first(value) {
        super.first = value;
      }
      get next() {
        return this[next$];
      }
      set next(value) {
        super.next = value;
      }
      didStartListening() {
        this.first.addListener(dart.bind(this, _maybeNotifyListeners));
        this.first.addStatusListener(dart.bind(this, _maybeNotifyStatusListeners));
        this.next.addListener(dart.bind(this, _maybeNotifyListeners));
        this.next.addStatusListener(dart.bind(this, _maybeNotifyStatusListeners));
      }
      didStopListening() {
        this.first.removeListener(dart.bind(this, _maybeNotifyListeners));
        this.first.removeStatusListener(dart.bind(this, _maybeNotifyStatusListeners));
        this.next.removeListener(dart.bind(this, _maybeNotifyListeners));
        this.next.removeStatusListener(dart.bind(this, _maybeNotifyStatusListeners));
      }
      get status() {
        if (dart.equals(this.next.status, animation$.AnimationStatus.forward) || dart.equals(this.next.status, animation$.AnimationStatus.reverse)) return this.next.status;
        return this.first.status;
      }
      toString() {
        return dart.str(object.objectRuntimeType(this, "CompoundAnimation")) + "(" + dart.str(this.first) + ", " + dart.str(this.next) + ")";
      }
      [_maybeNotifyStatusListeners](_) {
        if (!dart.equals(this.status, this[_lastStatus])) {
          this[_lastStatus] = this.status;
          this.notifyStatusListeners(this.status);
        }
      }
      [_maybeNotifyListeners]() {
        if (!dart.equals(this.value, this[_lastValue])) {
          this[_lastValue] = this.value;
          this.notifyListeners();
        }
      }
    }
    (CompoundAnimation.new = function(opts) {
      let first = opts && 'first' in opts ? opts.first : null;
      let next = opts && 'next' in opts ? opts.next : null;
      this[_lastStatus] = null;
      this[_lastValue] = null;
      this[first$] = first;
      this[next$] = next;
      if (!(first != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 619, 15, "first != null");
      if (!(next != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 620, 15, "next != null");
      CompoundAnimation.__proto__.new.call(this);
      ;
    }).prototype = CompoundAnimation.prototype;
    dart.addTypeTests(CompoundAnimation);
    CompoundAnimation.prototype[_is_CompoundAnimation_default] = true;
    dart.setMethodSignature(CompoundAnimation, () => ({
      __proto__: dart.getMethods(CompoundAnimation.__proto__),
      didStartListening: dart.fnType(dart.void, []),
      didStopListening: dart.fnType(dart.void, []),
      [_maybeNotifyStatusListeners]: dart.fnType(dart.void, [animation$.AnimationStatus]),
      [_maybeNotifyListeners]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(CompoundAnimation, () => ({
      __proto__: dart.getGetters(CompoundAnimation.__proto__),
      status: animation$.AnimationStatus
    }));
    dart.setLibraryUri(CompoundAnimation, "package:flutter/src/animation/animations.dart");
    dart.setFieldSignature(CompoundAnimation, () => ({
      __proto__: dart.getFields(CompoundAnimation.__proto__),
      first: dart.finalFieldType(animation$.Animation$(T)),
      next: dart.finalFieldType(animation$.Animation$(T)),
      [_lastStatus]: dart.fieldType(animation$.AnimationStatus),
      [_lastValue]: dart.fieldType(T)
    }));
    dart.defineExtensionMethods(CompoundAnimation, ['toString']);
    return CompoundAnimation;
  });
  animations.CompoundAnimation = animations.CompoundAnimation$();
  dart.addTypeTests(animations.CompoundAnimation, _is_CompoundAnimation_default);
  animations.AnimationMean = class AnimationMean extends animations.CompoundAnimation$(core.double) {
    get value() {
      return (dart.notNull(this.first.value) + dart.notNull(this.next.value)) / 2.0;
    }
  };
  (animations.AnimationMean.new = function(opts) {
    let left = opts && 'left' in opts ? opts.left : null;
    let right = opts && 'right' in opts ? opts.right : null;
    animations.AnimationMean.__proto__.new.call(this, {first: left, next: right});
    ;
  }).prototype = animations.AnimationMean.prototype;
  dart.addTypeTests(animations.AnimationMean);
  dart.setGetterSignature(animations.AnimationMean, () => ({
    __proto__: dart.getGetters(animations.AnimationMean.__proto__),
    value: core.double
  }));
  dart.setLibraryUri(animations.AnimationMean, "package:flutter/src/animation/animations.dart");
  const _is_AnimationMax_default = Symbol('_is_AnimationMax_default');
  animations.AnimationMax$ = dart.generic(T => {
    class AnimationMax extends animations.CompoundAnimation$(T) {
      get value() {
        return math.max(T, this.first.value, this.next.value);
      }
    }
    (AnimationMax.new = function(first, next) {
      AnimationMax.__proto__.new.call(this, {first: first, next: next});
      ;
    }).prototype = AnimationMax.prototype;
    dart.addTypeTests(AnimationMax);
    AnimationMax.prototype[_is_AnimationMax_default] = true;
    dart.setGetterSignature(AnimationMax, () => ({
      __proto__: dart.getGetters(AnimationMax.__proto__),
      value: T
    }));
    dart.setLibraryUri(AnimationMax, "package:flutter/src/animation/animations.dart");
    return AnimationMax;
  });
  animations.AnimationMax = animations.AnimationMax$();
  dart.addTypeTests(animations.AnimationMax, _is_AnimationMax_default);
  const _is_AnimationMin_default = Symbol('_is_AnimationMin_default');
  animations.AnimationMin$ = dart.generic(T => {
    class AnimationMin extends animations.CompoundAnimation$(T) {
      get value() {
        return math.min(T, this.first.value, this.next.value);
      }
    }
    (AnimationMin.new = function(first, next) {
      AnimationMin.__proto__.new.call(this, {first: first, next: next});
      ;
    }).prototype = AnimationMin.prototype;
    dart.addTypeTests(AnimationMin);
    AnimationMin.prototype[_is_AnimationMin_default] = true;
    dart.setGetterSignature(AnimationMin, () => ({
      __proto__: dart.getGetters(AnimationMin.__proto__),
      value: T
    }));
    dart.setLibraryUri(AnimationMin, "package:flutter/src/animation/animations.dart");
    return AnimationMin;
  });
  animations.AnimationMin = animations.AnimationMin$();
  dart.addTypeTests(animations.AnimationMin, _is_AnimationMin_default);
  var C50;
  var C51;
  dart.defineLazy(animations, {
    /*animations.kAlwaysCompleteAnimation*/get kAlwaysCompleteAnimation() {
      return C50 || CT.C50;
    },
    /*animations.kAlwaysDismissedAnimation*/get kAlwaysDismissedAnimation() {
      return C51 || CT.C51;
    }
  });
  var _items = dart.privateName(tween_sequence, "_items");
  var _intervals = dart.privateName(tween_sequence, "_intervals");
  var _evaluateAt = dart.privateName(tween_sequence, "_evaluateAt");
  const _is_TweenSequence_default = Symbol('_is_TweenSequence_default');
  tween_sequence.TweenSequence$ = dart.generic(T => {
    var TweenSequenceItemOfT = () => (TweenSequenceItemOfT = dart.constFn(tween_sequence.TweenSequenceItem$(T)))();
    var JSArrayOfTweenSequenceItemOfT = () => (JSArrayOfTweenSequenceItemOfT = dart.constFn(_interceptors.JSArray$(TweenSequenceItemOfT())))();
    class TweenSequence extends tween.Animatable$(T) {
      [_evaluateAt](t, index) {
        let element = this[_items][$_get](index);
        let tInterval = this[_intervals][$_get](index).value(t);
        return element.tween.transform(tInterval);
      }
      transform(t) {
        if (!(dart.notNull(t) >= 0.0 && dart.notNull(t) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/tween_sequence.dart", 83, 12, "t >= 0.0 && t <= 1.0");
        if (t === 1.0) return this[_evaluateAt](t, dart.notNull(this[_items][$length]) - 1);
        for (let index = 0; index < dart.notNull(this[_items][$length]); index = index + 1) {
          if (dart.test(this[_intervals][$_get](index).contains(t))) return this[_evaluateAt](t, index);
        }
        if (!false) dart.assertFailed("TweenSequence.evaluate() could not find an interval for " + dart.str(t), "org-dartlang-app:///packages/flutter/src/animation/tween_sequence.dart", 91, 12, "false");
        return null;
      }
      toString() {
        return "TweenSequence(" + dart.str(this[_items][$length]) + " items)";
      }
    }
    (TweenSequence.new = function(items) {
      this[_items] = JSArrayOfTweenSequenceItemOfT().of([]);
      this[_intervals] = JSArrayOf_Interval().of([]);
      if (!(items != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/tween_sequence.dart", 55, 16, "items != null");
      if (!dart.test(items[$isNotEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/tween_sequence.dart", 56, 16, "items.isNotEmpty");
      TweenSequence.__proto__.new.call(this);
      this[_items][$addAll](items);
      let totalWeight = 0.0;
      for (let item of this[_items])
        totalWeight = totalWeight + dart.notNull(item.weight);
      if (!(totalWeight > 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/tween_sequence.dart", 62, 12, "totalWeight > 0.0");
      let start = 0.0;
      for (let i = 0; i < dart.notNull(this[_items][$length]); i = i + 1) {
        let end = i === dart.notNull(this[_items][$length]) - 1 ? 1.0 : start + dart.notNull(this[_items][$_get](i).weight) / totalWeight;
        this[_intervals][$add](new tween_sequence._Interval.new(start, end));
        start = end;
      }
    }).prototype = TweenSequence.prototype;
    dart.addTypeTests(TweenSequence);
    TweenSequence.prototype[_is_TweenSequence_default] = true;
    dart.setMethodSignature(TweenSequence, () => ({
      __proto__: dart.getMethods(TweenSequence.__proto__),
      [_evaluateAt]: dart.fnType(T, [core.double, core.int]),
      transform: dart.fnType(T, [core.double])
    }));
    dart.setLibraryUri(TweenSequence, "package:flutter/src/animation/tween_sequence.dart");
    dart.setFieldSignature(TweenSequence, () => ({
      __proto__: dart.getFields(TweenSequence.__proto__),
      [_items]: dart.finalFieldType(core.List$(tween_sequence.TweenSequenceItem$(T))),
      [_intervals]: dart.finalFieldType(core.List$(tween_sequence._Interval))
    }));
    dart.defineExtensionMethods(TweenSequence, ['toString']);
    return TweenSequence;
  });
  tween_sequence.TweenSequence = tween_sequence.TweenSequence$();
  dart.addTypeTests(tween_sequence.TweenSequence, _is_TweenSequence_default);
  tween_sequence.FlippedTweenSequence = class FlippedTweenSequence extends tween_sequence.TweenSequence$(core.double) {
    transform(t) {
      return 1 - dart.notNull(super.transform(1 - dart.notNull(t)));
    }
  };
  (tween_sequence.FlippedTweenSequence.new = function(items) {
    if (!(items != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/tween_sequence.dart", 116, 14, "items != null");
    tween_sequence.FlippedTweenSequence.__proto__.new.call(this, items);
    ;
  }).prototype = tween_sequence.FlippedTweenSequence.prototype;
  dart.addTypeTests(tween_sequence.FlippedTweenSequence);
  dart.setLibraryUri(tween_sequence.FlippedTweenSequence, "package:flutter/src/animation/tween_sequence.dart");
  const _is_TweenSequenceItem_default = Symbol('_is_TweenSequenceItem_default');
  var tween$ = dart.privateName(tween_sequence, "TweenSequenceItem.tween");
  var weight$ = dart.privateName(tween_sequence, "TweenSequenceItem.weight");
  tween_sequence.TweenSequenceItem$ = dart.generic(T => {
    class TweenSequenceItem extends core.Object {
      get tween() {
        return this[tween$];
      }
      set tween(value) {
        super.tween = value;
      }
      get weight() {
        return this[weight$];
      }
      set weight(value) {
        super.weight = value;
      }
    }
    (TweenSequenceItem.new = function(opts) {
      let tween = opts && 'tween' in opts ? opts.tween : null;
      let weight = opts && 'weight' in opts ? opts.weight : null;
      this[tween$] = tween;
      this[weight$] = weight;
      if (!(tween != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/tween_sequence.dart", 131, 15, "tween != null");
      if (!(weight != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/tween_sequence.dart", 132, 15, "weight != null");
      if (!(dart.notNull(weight) > 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/tween_sequence.dart", 133, 15, "weight > 0.0");
      ;
    }).prototype = TweenSequenceItem.prototype;
    dart.addTypeTests(TweenSequenceItem);
    TweenSequenceItem.prototype[_is_TweenSequenceItem_default] = true;
    dart.setLibraryUri(TweenSequenceItem, "package:flutter/src/animation/tween_sequence.dart");
    dart.setFieldSignature(TweenSequenceItem, () => ({
      __proto__: dart.getFields(TweenSequenceItem.__proto__),
      tween: dart.finalFieldType(tween.Animatable$(T)),
      weight: dart.finalFieldType(core.double)
    }));
    return TweenSequenceItem;
  });
  tween_sequence.TweenSequenceItem = tween_sequence.TweenSequenceItem$();
  dart.addTypeTests(tween_sequence.TweenSequenceItem, _is_TweenSequenceItem_default);
  var start$ = dart.privateName(tween_sequence, "_Interval.start");
  var end$1 = dart.privateName(tween_sequence, "_Interval.end");
  tween_sequence._Interval = class _Interval extends core.Object {
    get start() {
      return this[start$];
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
    contains(t) {
      return dart.notNull(t) >= dart.notNull(this.start) && dart.notNull(t) < dart.notNull(this.end);
    }
    value(t) {
      return (dart.notNull(t) - dart.notNull(this.start)) / (dart.notNull(this.end) - dart.notNull(this.start));
    }
    toString() {
      return "<" + dart.str(this.start) + ", " + dart.str(this.end) + ">";
    }
  };
  (tween_sequence._Interval.new = function(start, end) {
    this[start$] = start;
    this[end$1] = end;
    if (!(dart.notNull(end) > dart.notNull(start))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/tween_sequence.dart", 160, 50, "end > start");
    ;
  }).prototype = tween_sequence._Interval.prototype;
  dart.addTypeTests(tween_sequence._Interval);
  dart.setMethodSignature(tween_sequence._Interval, () => ({
    __proto__: dart.getMethods(tween_sequence._Interval.__proto__),
    contains: dart.fnType(core.bool, [core.double]),
    value: dart.fnType(core.double, [core.double])
  }));
  dart.setLibraryUri(tween_sequence._Interval, "package:flutter/src/animation/tween_sequence.dart");
  dart.setFieldSignature(tween_sequence._Interval, () => ({
    __proto__: dart.getFields(tween_sequence._Interval.__proto__),
    start: dart.finalFieldType(core.double),
    end: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(tween_sequence._Interval, ['toString']);
  var _name$1 = dart.privateName(animation_controller, "_name");
  var C52;
  var C53;
  var C54;
  animation_controller._AnimationDirection = class _AnimationDirection extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (animation_controller._AnimationDirection.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = animation_controller._AnimationDirection.prototype;
  dart.addTypeTests(animation_controller._AnimationDirection);
  dart.setLibraryUri(animation_controller._AnimationDirection, "package:flutter/src/animation/animation_controller.dart");
  dart.setFieldSignature(animation_controller._AnimationDirection, () => ({
    __proto__: dart.getFields(animation_controller._AnimationDirection.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(animation_controller._AnimationDirection, ['toString']);
  animation_controller._AnimationDirection.forward = C52 || CT.C52;
  animation_controller._AnimationDirection.reverse = C53 || CT.C53;
  animation_controller._AnimationDirection.values = C54 || CT.C54;
  var C55;
  var C56;
  var C57;
  animation_controller.AnimationBehavior = class AnimationBehavior extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (animation_controller.AnimationBehavior.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = animation_controller.AnimationBehavior.prototype;
  dart.addTypeTests(animation_controller.AnimationBehavior);
  dart.setLibraryUri(animation_controller.AnimationBehavior, "package:flutter/src/animation/animation_controller.dart");
  dart.setFieldSignature(animation_controller.AnimationBehavior, () => ({
    __proto__: dart.getFields(animation_controller.AnimationBehavior.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(animation_controller.AnimationBehavior, ['toString']);
  animation_controller.AnimationBehavior.normal = C55 || CT.C55;
  animation_controller.AnimationBehavior.preserve = C56 || CT.C56;
  animation_controller.AnimationBehavior.values = C57 || CT.C57;
  var _ticker = dart.privateName(animation_controller, "_ticker");
  var _simulation = dart.privateName(animation_controller, "_simulation");
  var _value$ = dart.privateName(animation_controller, "_value");
  var _lastElapsedDuration = dart.privateName(animation_controller, "_lastElapsedDuration");
  var _status$ = dart.privateName(animation_controller, "_status");
  var _lastReportedStatus = dart.privateName(animation_controller, "_lastReportedStatus");
  var _direction = dart.privateName(animation_controller, "_direction");
  var _tick = dart.privateName(animation_controller, "_tick");
  var _internalSetValue = dart.privateName(animation_controller, "_internalSetValue");
  var _checkStatusChanged = dart.privateName(animation_controller, "_checkStatusChanged");
  var _animateToInternal = dart.privateName(animation_controller, "_animateToInternal");
  var _startSimulation = dart.privateName(animation_controller, "_startSimulation");
  var _directionSetter = dart.privateName(animation_controller, "_directionSetter");
  var lowerBound$ = dart.privateName(animation_controller, "AnimationController.lowerBound");
  var upperBound$ = dart.privateName(animation_controller, "AnimationController.upperBound");
  var debugLabel$ = dart.privateName(animation_controller, "AnimationController.debugLabel");
  var animationBehavior$ = dart.privateName(animation_controller, "AnimationController.animationBehavior");
  var duration$ = dart.privateName(animation_controller, "AnimationController.duration");
  var reverseDuration$ = dart.privateName(animation_controller, "AnimationController.reverseDuration");
  const Animation_AnimationEagerListenerMixin$36$ = class Animation_AnimationEagerListenerMixin extends animation$.Animation$(core.double) {};
  (Animation_AnimationEagerListenerMixin$36$.new = function() {
    Animation_AnimationEagerListenerMixin$36$.__proto__.new.call(this);
  }).prototype = Animation_AnimationEagerListenerMixin$36$.prototype;
  dart.applyMixin(Animation_AnimationEagerListenerMixin$36$, listener_helpers.AnimationEagerListenerMixin);
  const Animation_AnimationLocalListenersMixin$36$0 = class Animation_AnimationLocalListenersMixin extends Animation_AnimationEagerListenerMixin$36$ {};
  (Animation_AnimationLocalListenersMixin$36$0.new = function() {
    listener_helpers.AnimationLocalListenersMixin[dart.mixinNew].call(this);
    Animation_AnimationLocalListenersMixin$36$0.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalListenersMixin$36$0.prototype;
  dart.applyMixin(Animation_AnimationLocalListenersMixin$36$0, listener_helpers.AnimationLocalListenersMixin);
  const Animation_AnimationLocalStatusListenersMixin$36$1 = class Animation_AnimationLocalStatusListenersMixin extends Animation_AnimationLocalListenersMixin$36$0 {};
  (Animation_AnimationLocalStatusListenersMixin$36$1.new = function() {
    listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinNew].call(this);
    Animation_AnimationLocalStatusListenersMixin$36$1.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalStatusListenersMixin$36$1.prototype;
  dart.applyMixin(Animation_AnimationLocalStatusListenersMixin$36$1, listener_helpers.AnimationLocalStatusListenersMixin);
  animation_controller.AnimationController = class AnimationController extends Animation_AnimationLocalStatusListenersMixin$36$1 {
    get lowerBound() {
      return this[lowerBound$];
    }
    set lowerBound(value) {
      super.lowerBound = value;
    }
    get upperBound() {
      return this[upperBound$];
    }
    set upperBound(value) {
      super.upperBound = value;
    }
    get debugLabel() {
      return this[debugLabel$];
    }
    set debugLabel(value) {
      super.debugLabel = value;
    }
    get animationBehavior() {
      return this[animationBehavior$];
    }
    set animationBehavior(value) {
      super.animationBehavior = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      this[duration$] = value;
    }
    get reverseDuration() {
      return this[reverseDuration$];
    }
    set reverseDuration(value) {
      this[reverseDuration$] = value;
    }
    get view() {
      return this;
    }
    resync(vsync) {
      let oldTicker = this[_ticker];
      this[_ticker] = vsync.createTicker(dart.bind(this, _tick));
      this[_ticker].absorbTicker(oldTicker);
    }
    get value() {
      return this[_value$];
    }
    set value(newValue) {
      if (!(newValue != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 363, 12, "newValue != null");
      this.stop();
      this[_internalSetValue](newValue);
      this.notifyListeners();
      this[_checkStatusChanged]();
    }
    reset() {
      this.value = this.lowerBound;
    }
    get velocity() {
      if (!dart.test(this.isAnimating)) return 0.0;
      return this[_simulation].dx(this.lastElapsedDuration.inMicroseconds[$toDouble]() / 1000000);
    }
    [_internalSetValue](newValue) {
      this[_value$] = newValue[$clamp](this.lowerBound, this.upperBound);
      if (this[_value$] == this.lowerBound) {
        this[_status$] = animation$.AnimationStatus.dismissed;
      } else if (this[_value$] == this.upperBound) {
        this[_status$] = animation$.AnimationStatus.completed;
      } else {
        this[_status$] = dart.equals(this[_direction], animation_controller._AnimationDirection.forward) ? animation$.AnimationStatus.forward : animation$.AnimationStatus.reverse;
      }
    }
    get lastElapsedDuration() {
      return this[_lastElapsedDuration];
    }
    get isAnimating() {
      return this[_ticker] != null && dart.test(this[_ticker].isActive);
    }
    get status() {
      return this[_status$];
    }
    forward(opts) {
      let from = opts && 'from' in opts ? opts.from : null;
      if (!dart.test(dart.fn(() => {
        if (this.duration == null) {
          dart.throw(assertions.FlutterError.new("AnimationController.forward() called with no default duration.\n" + "The \"duration\" property should be set, either in the constructor or later, before " + "calling the forward() function."));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 444, 12, "() {\r\n      if (duration == null) {\r\n        throw FlutterError(\r\n          'AnimationController.forward() called with no default duration.\\n'\r\n          'The \"duration\" property should be set, either in the constructor or later, before '\r\n          'calling the forward() function.'\r\n        );\r\n      }\r\n      return true;\r\n    }()");
      if (!(this[_ticker] != null)) dart.assertFailed("AnimationController.forward() called after AnimationController.dispose()\n" + "AnimationController methods should not be used after calling dispose.", "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 455, 7, "_ticker != null");
      this[_direction] = animation_controller._AnimationDirection.forward;
      if (from != null) this.value = from;
      return this[_animateToInternal](this.upperBound);
    }
    reverse(opts) {
      let from = opts && 'from' in opts ? opts.from : null;
      if (!dart.test(dart.fn(() => {
        if (this.duration == null && this.reverseDuration == null) {
          dart.throw(assertions.FlutterError.new("AnimationController.reverse() called with no default duration or reverseDuration.\n" + "The \"duration\" or \"reverseDuration\" property should be set, either in the constructor or later, before " + "calling the reverse() function."));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 477, 12, "() {\r\n      if (duration == null && reverseDuration == null) {\r\n        throw FlutterError(\r\n          'AnimationController.reverse() called with no default duration or reverseDuration.\\n'\r\n          'The \"duration\" or \"reverseDuration\" property should be set, either in the constructor or later, before '\r\n          'calling the reverse() function.'\r\n        );\r\n      }\r\n      return true;\r\n    }()");
      if (!(this[_ticker] != null)) dart.assertFailed("AnimationController.reverse() called after AnimationController.dispose()\n" + "AnimationController methods should not be used after calling dispose.", "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 488, 7, "_ticker != null");
      this[_direction] = animation_controller._AnimationDirection.reverse;
      if (from != null) this.value = from;
      return this[_animateToInternal](this.lowerBound);
    }
    animateTo(target, opts) {
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let curve = opts && 'curve' in opts ? opts.curve : C5 || CT.C5;
      if (!(this[_ticker] != null)) dart.assertFailed("AnimationController.animateTo() called after AnimationController.dispose()\n" + "AnimationController methods should not be used after calling dispose.", "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 512, 7, "_ticker != null");
      this[_direction] = animation_controller._AnimationDirection.forward;
      return this[_animateToInternal](target, {duration: duration, curve: curve});
    }
    animateBack(target, opts) {
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let curve = opts && 'curve' in opts ? opts.curve : C5 || CT.C5;
      if (!(this[_ticker] != null)) dart.assertFailed("AnimationController.animateBack() called after AnimationController.dispose()\n" + "AnimationController methods should not be used after calling dispose.", "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 534, 7, "_ticker != null");
      this[_direction] = animation_controller._AnimationDirection.reverse;
      return this[_animateToInternal](target, {duration: duration, curve: curve});
    }
    [_animateToInternal](target, opts) {
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let curve = opts && 'curve' in opts ? opts.curve : C5 || CT.C5;
      let scale = 1.0;
      if (dart.test(binding.SemanticsBinding.instance.disableAnimations)) {
        switch (this.animationBehavior) {
          case C55 || CT.C55:
          {
            scale = 0.05;
            break;
          }
          case C56 || CT.C56:
          {
            break;
          }
        }
      }
      let simulationDuration = duration;
      if (simulationDuration == null) {
        if (!dart.test(dart.fn(() => {
          if (this.duration == null && dart.equals(this[_direction], animation_controller._AnimationDirection.reverse) && this.reverseDuration == null || this.duration == null) {
            dart.throw(assertions.FlutterError.new("AnimationController.animateTo() called with no explicit duration and no default duration or reverseDuration.\n" + "Either the \"duration\" argument to the animateTo() method should be provided, or the " + "\"duration\" and/or \"reverseDuration\" property should be set, either in the constructor or later, before " + "calling the animateTo() function."));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 558, 14, "() {\r\n        if ((this.duration == null && _direction == _AnimationDirection.reverse && reverseDuration == null) || this.duration == null) {\r\n          throw FlutterError(\r\n            'AnimationController.animateTo() called with no explicit duration and no default duration or reverseDuration.\\n'\r\n            'Either the \"duration\" argument to the animateTo() method should be provided, or the '\r\n            '\"duration\" and/or \"reverseDuration\" property should be set, either in the constructor or later, before '\r\n            'calling the animateTo() function.'\r\n          );\r\n        }\r\n        return true;\r\n      }()");
        let range = dart.notNull(this.upperBound) - dart.notNull(this.lowerBound);
        let remainingFraction = range[$isFinite] ? (dart.notNull(target) - dart.notNull(this[_value$]))[$abs]() / range : 1.0;
        let directionDuration = dart.equals(this[_direction], animation_controller._AnimationDirection.reverse) && this.reverseDuration != null ? this.reverseDuration : this.duration;
        simulationDuration = directionDuration['*'](remainingFraction);
      } else if (target == this.value) {
        simulationDuration = core.Duration.zero;
      }
      this.stop();
      if (dart.equals(simulationDuration, core.Duration.zero)) {
        if (this.value != target) {
          this[_value$] = target[$clamp](this.lowerBound, this.upperBound);
          this.notifyListeners();
        }
        this[_status$] = dart.equals(this[_direction], animation_controller._AnimationDirection.forward) ? animation$.AnimationStatus.completed : animation$.AnimationStatus.dismissed;
        this[_checkStatusChanged]();
        return new ticker.TickerFuture.complete();
      }
      if (!dart.test(simulationDuration['>'](core.Duration.zero))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 592, 12, "simulationDuration > Duration.zero");
      if (!!dart.test(this.isAnimating)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 593, 12, "!isAnimating");
      return this[_startSimulation](new animation_controller._InterpolationSimulation.new(this[_value$], target, simulationDuration, curve, scale));
    }
    repeat(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      let reverse = opts && 'reverse' in opts ? opts.reverse : false;
      let period = opts && 'period' in opts ? opts.period : null;
      min == null ? min = this.lowerBound : null;
      max == null ? max = this.upperBound : null;
      period == null ? period = this.duration : null;
      if (!dart.test(dart.fn(() => {
        if (period == null) {
          dart.throw(assertions.FlutterError.new("AnimationController.repeat() called without an explicit period and with no default Duration.\n" + "Either the \"period\" argument to the repeat() method should be provided, or the " + "\"duration\" property should be set, either in the constructor or later, before " + "calling the repeat() function."));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 618, 12, "() {\r\n      if (period == null) {\r\n        throw FlutterError(\r\n          'AnimationController.repeat() called without an explicit period and with no default Duration.\\n'\r\n          'Either the \"period\" argument to the repeat() method should be provided, or the '\r\n          '\"duration\" property should be set, either in the constructor or later, before '\r\n          'calling the repeat() function.'\r\n        );\r\n      }\r\n      return true;\r\n    }()");
      if (!(dart.notNull(max) >= dart.notNull(min))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 629, 12, "max >= min");
      if (!(dart.notNull(max) <= dart.notNull(this.upperBound) && dart.notNull(min) >= dart.notNull(this.lowerBound))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 630, 12, "max <= upperBound && min >= lowerBound");
      if (!(reverse != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 631, 12, "reverse != null");
      this.stop();
      return this[_startSimulation](new animation_controller._RepeatingSimulation.new(this[_value$], min, max, reverse, period, dart.bind(this, _directionSetter)));
    }
    [_directionSetter](direction) {
      this[_direction] = direction;
      this[_status$] = dart.equals(this[_direction], animation_controller._AnimationDirection.forward) ? animation$.AnimationStatus.forward : animation$.AnimationStatus.reverse;
      this[_checkStatusChanged]();
    }
    fling(opts) {
      let t10, t10$;
      let velocity = opts && 'velocity' in opts ? opts.velocity : 1;
      let animationBehavior = opts && 'animationBehavior' in opts ? opts.animationBehavior : null;
      this[_direction] = dart.notNull(velocity) < 0.0 ? animation_controller._AnimationDirection.reverse : animation_controller._AnimationDirection.forward;
      let target = dart.notNull(velocity) < 0.0 ? dart.notNull(this.lowerBound) - dart.notNull(animation_controller._kFlingTolerance.distance) : dart.notNull(this.upperBound) + dart.notNull(animation_controller._kFlingTolerance.distance);
      let scale = 1.0;
      let behavior = (t10 = animationBehavior, t10 == null ? this.animationBehavior : t10);
      if (dart.test(binding.SemanticsBinding.instance.disableAnimations)) {
        switch (behavior) {
          case C55 || CT.C55:
          {
            scale = 200.0;
            break;
          }
          case C56 || CT.C56:
          {
            break;
          }
        }
      }
      let simulation = (t10$ = new spring_simulation.SpringSimulation.new(animation_controller._kFlingSpringDescription, this.value, target, dart.notNull(velocity) * scale), t10$.tolerance = animation_controller._kFlingTolerance, t10$);
      this.stop();
      return this[_startSimulation](simulation);
    }
    animateWith(simulation) {
      if (!(this[_ticker] != null)) dart.assertFailed("AnimationController.animateWith() called after AnimationController.dispose()\n" + "AnimationController methods should not be used after calling dispose.", "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 694, 7, "_ticker != null");
      this.stop();
      this[_direction] = animation_controller._AnimationDirection.forward;
      return this[_startSimulation](simulation);
    }
    [_startSimulation](simulation) {
      if (!(simulation != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 704, 12, "simulation != null");
      if (!!dart.test(this.isAnimating)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 705, 12, "!isAnimating");
      this[_simulation] = simulation;
      this[_lastElapsedDuration] = core.Duration.zero;
      this[_value$] = simulation.x(0.0)[$clamp](this.lowerBound, this.upperBound);
      let result = this[_ticker].start();
      this[_status$] = dart.equals(this[_direction], animation_controller._AnimationDirection.forward) ? animation$.AnimationStatus.forward : animation$.AnimationStatus.reverse;
      this[_checkStatusChanged]();
      return result;
    }
    stop(opts) {
      let canceled = opts && 'canceled' in opts ? opts.canceled : true;
      if (!(this[_ticker] != null)) dart.assertFailed("AnimationController.stop() called after AnimationController.dispose()\n" + "AnimationController methods should not be used after calling dispose.", "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 736, 7, "_ticker != null");
      this[_simulation] = null;
      this[_lastElapsedDuration] = null;
      this[_ticker].stop({canceled: canceled});
    }
    dispose() {
      if (!dart.test(dart.fn(() => {
        if (this[_ticker] == null) {
          dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("AnimationController.dispose() called more than once."), new assertions.ErrorDescription.new("A given " + dart.str(this[$runtimeType]) + " cannot be disposed more than once.\n"), new (DiagnosticsPropertyOfAnimationController()).new("The following " + dart.str(this[$runtimeType]) + " object was disposed multiple times", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty})])));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 753, 12, "() {\r\n      if (_ticker == null) {\r\n        throw FlutterError.fromParts(<DiagnosticsNode>[\r\n          ErrorSummary('AnimationController.dispose() called more than once.'),\r\n          ErrorDescription('A given $runtimeType cannot be disposed more than once.\\n'),\r\n          DiagnosticsProperty<AnimationController>(\r\n            'The following $runtimeType object was disposed multiple times',\r\n            this,\r\n            style: DiagnosticsTreeStyle.errorProperty,\r\n          ),\r\n        ]);\r\n      }\r\n      return true;\r\n    }()");
      this[_ticker].dispose();
      this[_ticker] = null;
      super.dispose();
    }
    [_checkStatusChanged]() {
      let newStatus = this.status;
      if (!dart.equals(this[_lastReportedStatus], newStatus)) {
        this[_lastReportedStatus] = newStatus;
        this.notifyStatusListeners(newStatus);
      }
    }
    [_tick](elapsed) {
      this[_lastElapsedDuration] = elapsed;
      let elapsedInSeconds = elapsed.inMicroseconds[$toDouble]() / 1000000;
      if (!(elapsedInSeconds >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 784, 12, "elapsedInSeconds >= 0.0");
      this[_value$] = this[_simulation].x(elapsedInSeconds)[$clamp](this.lowerBound, this.upperBound);
      if (dart.test(this[_simulation].isDone(elapsedInSeconds))) {
        this[_status$] = dart.equals(this[_direction], animation_controller._AnimationDirection.forward) ? animation$.AnimationStatus.completed : animation$.AnimationStatus.dismissed;
        this.stop({canceled: false});
      }
      this.notifyListeners();
      this[_checkStatusChanged]();
    }
    toStringDetails() {
      let paused = dart.test(this.isAnimating) ? "" : "; paused";
      let ticker = this[_ticker] == null ? "; DISPOSED" : dart.test(this[_ticker].muted) ? "; silenced" : "";
      let label = this.debugLabel == null ? "" : "; for " + dart.str(this.debugLabel);
      let more = dart.str(super.toStringDetails()) + " " + this.value[$toStringAsFixed](3);
      return more + paused + ticker + label;
    }
  };
  (animation_controller.AnimationController.new = function(opts) {
    let t10;
    let value = opts && 'value' in opts ? opts.value : null;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let reverseDuration = opts && 'reverseDuration' in opts ? opts.reverseDuration : null;
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let lowerBound = opts && 'lowerBound' in opts ? opts.lowerBound : 0;
    let upperBound = opts && 'upperBound' in opts ? opts.upperBound : 1;
    let animationBehavior = opts && 'animationBehavior' in opts ? opts.animationBehavior : C55 || CT.C55;
    let vsync = opts && 'vsync' in opts ? opts.vsync : null;
    this[_ticker] = null;
    this[_simulation] = null;
    this[_value$] = null;
    this[_lastElapsedDuration] = null;
    this[_status$] = null;
    this[_lastReportedStatus] = animation$.AnimationStatus.dismissed;
    this[duration$] = duration;
    this[reverseDuration$] = reverseDuration;
    this[debugLabel$] = debugLabel;
    this[lowerBound$] = lowerBound;
    this[upperBound$] = upperBound;
    this[animationBehavior$] = animationBehavior;
    if (!(lowerBound != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 242, 15, "lowerBound != null");
    if (!(upperBound != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 243, 15, "upperBound != null");
    if (!(dart.notNull(upperBound) >= dart.notNull(lowerBound))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 244, 15, "upperBound >= lowerBound");
    if (!(vsync != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 245, 15, "vsync != null");
    this[_direction] = animation_controller._AnimationDirection.forward;
    animation_controller.AnimationController.__proto__.new.call(this);
    this[_ticker] = vsync.createTicker(dart.bind(this, _tick));
    this[_internalSetValue]((t10 = value, t10 == null ? this.lowerBound : t10));
  }).prototype = animation_controller.AnimationController.prototype;
  (animation_controller.AnimationController.unbounded = function(opts) {
    let value = opts && 'value' in opts ? opts.value : 0;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let reverseDuration = opts && 'reverseDuration' in opts ? opts.reverseDuration : null;
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let vsync = opts && 'vsync' in opts ? opts.vsync : null;
    let animationBehavior = opts && 'animationBehavior' in opts ? opts.animationBehavior : C56 || CT.C56;
    this[_ticker] = null;
    this[_simulation] = null;
    this[_value$] = null;
    this[_lastElapsedDuration] = null;
    this[_status$] = null;
    this[_lastReportedStatus] = animation$.AnimationStatus.dismissed;
    this[duration$] = duration;
    this[reverseDuration$] = reverseDuration;
    this[debugLabel$] = debugLabel;
    this[animationBehavior$] = animationBehavior;
    if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 275, 15, "value != null");
    if (!(vsync != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 276, 15, "vsync != null");
    this[lowerBound$] = -1 / 0;
    this[upperBound$] = 1 / 0;
    this[_direction] = animation_controller._AnimationDirection.forward;
    animation_controller.AnimationController.__proto__.new.call(this);
    this[_ticker] = vsync.createTicker(dart.bind(this, _tick));
    this[_internalSetValue](value);
  }).prototype = animation_controller.AnimationController.prototype;
  dart.addTypeTests(animation_controller.AnimationController);
  dart.setMethodSignature(animation_controller.AnimationController, () => ({
    __proto__: dart.getMethods(animation_controller.AnimationController.__proto__),
    resync: dart.fnType(dart.void, [ticker.TickerProvider]),
    reset: dart.fnType(dart.void, []),
    [_internalSetValue]: dart.fnType(dart.void, [core.double]),
    forward: dart.fnType(ticker.TickerFuture, [], {from: core.double}, {}),
    reverse: dart.fnType(ticker.TickerFuture, [], {from: core.double}, {}),
    animateTo: dart.fnType(ticker.TickerFuture, [core.double], {curve: curves.Curve, duration: core.Duration}, {}),
    animateBack: dart.fnType(ticker.TickerFuture, [core.double], {curve: curves.Curve, duration: core.Duration}, {}),
    [_animateToInternal]: dart.fnType(ticker.TickerFuture, [core.double], {curve: curves.Curve, duration: core.Duration}, {}),
    repeat: dart.fnType(ticker.TickerFuture, [], {max: core.double, min: core.double, period: core.Duration, reverse: core.bool}, {}),
    [_directionSetter]: dart.fnType(dart.void, [animation_controller._AnimationDirection]),
    fling: dart.fnType(ticker.TickerFuture, [], {animationBehavior: animation_controller.AnimationBehavior, velocity: core.double}, {}),
    animateWith: dart.fnType(ticker.TickerFuture, [simulation.Simulation]),
    [_startSimulation]: dart.fnType(ticker.TickerFuture, [simulation.Simulation]),
    stop: dart.fnType(dart.void, [], {canceled: core.bool}, {}),
    [_checkStatusChanged]: dart.fnType(dart.void, []),
    [_tick]: dart.fnType(dart.void, [core.Duration])
  }));
  dart.setGetterSignature(animation_controller.AnimationController, () => ({
    __proto__: dart.getGetters(animation_controller.AnimationController.__proto__),
    view: animation$.Animation$(core.double),
    value: core.double,
    velocity: core.double,
    lastElapsedDuration: core.Duration,
    isAnimating: core.bool,
    status: animation$.AnimationStatus
  }));
  dart.setSetterSignature(animation_controller.AnimationController, () => ({
    __proto__: dart.getSetters(animation_controller.AnimationController.__proto__),
    value: core.double
  }));
  dart.setLibraryUri(animation_controller.AnimationController, "package:flutter/src/animation/animation_controller.dart");
  dart.setFieldSignature(animation_controller.AnimationController, () => ({
    __proto__: dart.getFields(animation_controller.AnimationController.__proto__),
    lowerBound: dart.finalFieldType(core.double),
    upperBound: dart.finalFieldType(core.double),
    debugLabel: dart.finalFieldType(core.String),
    animationBehavior: dart.finalFieldType(animation_controller.AnimationBehavior),
    duration: dart.fieldType(core.Duration),
    reverseDuration: dart.fieldType(core.Duration),
    [_ticker]: dart.fieldType(ticker.Ticker),
    [_simulation]: dart.fieldType(simulation.Simulation),
    [_value$]: dart.fieldType(core.double),
    [_lastElapsedDuration]: dart.fieldType(core.Duration),
    [_direction]: dart.fieldType(animation_controller._AnimationDirection),
    [_status$]: dart.fieldType(animation$.AnimationStatus),
    [_lastReportedStatus]: dart.fieldType(animation$.AnimationStatus)
  }));
  var _begin$ = dart.privateName(animation_controller, "_begin");
  var _end$ = dart.privateName(animation_controller, "_end");
  var _curve$ = dart.privateName(animation_controller, "_curve");
  var _durationInSeconds = dart.privateName(animation_controller, "_durationInSeconds");
  animation_controller._InterpolationSimulation = class _InterpolationSimulation extends simulation.Simulation {
    x(timeInSeconds) {
      let t = (dart.notNull(timeInSeconds) / dart.notNull(this[_durationInSeconds]))[$clamp](0.0, 1.0);
      if (t === 0.0)
        return this[_begin$];
      else if (t === 1.0)
        return this[_end$];
      else
        return dart.notNull(this[_begin$]) + (dart.notNull(this[_end$]) - dart.notNull(this[_begin$])) * dart.notNull(this[_curve$].transform(t));
    }
    dx(timeInSeconds) {
      let epsilon = this.tolerance.time;
      return (dart.notNull(this.x(dart.notNull(timeInSeconds) + dart.notNull(epsilon))) - dart.notNull(this.x(dart.notNull(timeInSeconds) - dart.notNull(epsilon)))) / (2 * dart.notNull(epsilon));
    }
    isDone(timeInSeconds) {
      return dart.notNull(timeInSeconds) > dart.notNull(this[_durationInSeconds]);
    }
  };
  (animation_controller._InterpolationSimulation.new = function(_begin, _end, duration, _curve, scale) {
    this[_begin$] = _begin;
    this[_end$] = _end;
    this[_curve$] = _curve;
    if (!(_begin != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 808, 14, "_begin != null");
    if (!(_end != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 809, 14, "_end != null");
    if (!(duration != null && dart.notNull(duration.inMicroseconds) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 810, 14, "duration != null && duration.inMicroseconds > 0");
    this[_durationInSeconds] = dart.notNull(duration.inMicroseconds) * dart.notNull(scale) / 1000000;
    animation_controller._InterpolationSimulation.__proto__.new.call(this);
    ;
  }).prototype = animation_controller._InterpolationSimulation.prototype;
  dart.addTypeTests(animation_controller._InterpolationSimulation);
  dart.setMethodSignature(animation_controller._InterpolationSimulation, () => ({
    __proto__: dart.getMethods(animation_controller._InterpolationSimulation.__proto__),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double]),
    isDone: dart.fnType(core.bool, [core.double])
  }));
  dart.setLibraryUri(animation_controller._InterpolationSimulation, "package:flutter/src/animation/animation_controller.dart");
  dart.setFieldSignature(animation_controller._InterpolationSimulation, () => ({
    __proto__: dart.getFields(animation_controller._InterpolationSimulation.__proto__),
    [_durationInSeconds]: dart.finalFieldType(core.double),
    [_begin$]: dart.finalFieldType(core.double),
    [_end$]: dart.finalFieldType(core.double),
    [_curve$]: dart.finalFieldType(curves.Curve)
  }));
  var _periodInSeconds = dart.privateName(animation_controller, "_periodInSeconds");
  var _initialT = dart.privateName(animation_controller, "_initialT");
  animation_controller._RepeatingSimulation = class _RepeatingSimulation extends simulation.Simulation {
    x(timeInSeconds) {
      if (!(dart.notNull(timeInSeconds) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 859, 12, "timeInSeconds >= 0.0");
      let totalTimeInSeconds = dart.notNull(timeInSeconds) + dart.notNull(this[_initialT]);
      let t = (totalTimeInSeconds / dart.notNull(this[_periodInSeconds]))[$modulo](1.0);
      let _isPlayingReverse = (totalTimeInSeconds / dart.notNull(this[_periodInSeconds]))[$truncate]()[$modulo](2) === 1;
      if (dart.test(this.reverse) && _isPlayingReverse) {
        this.directionSetter(animation_controller._AnimationDirection.reverse);
        return ui.lerpDouble(this.max, this.min, t);
      } else {
        this.directionSetter(animation_controller._AnimationDirection.forward);
        return ui.lerpDouble(this.min, this.max, t);
      }
    }
    dx(timeInSeconds) {
      return (dart.notNull(this.max) - dart.notNull(this.min)) / dart.notNull(this[_periodInSeconds]);
    }
    isDone(timeInSeconds) {
      return false;
    }
  };
  (animation_controller._RepeatingSimulation.new = function(initialValue, min, max, reverse, period, directionSetter) {
    this.min = min;
    this.max = max;
    this.reverse = reverse;
    this.directionSetter = directionSetter;
    this[_periodInSeconds] = dart.notNull(period.inMicroseconds) / 1000000;
    this[_initialT] = max == min ? 0.0 : dart.notNull(initialValue) / (dart.notNull(max) - dart.notNull(min)) * (dart.notNull(period.inMicroseconds) / 1000000);
    animation_controller._RepeatingSimulation.__proto__.new.call(this);
    if (!(dart.notNull(this[_periodInSeconds]) > 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 845, 12, "_periodInSeconds > 0.0");
    if (!(dart.notNull(this[_initialT]) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 846, 12, "_initialT >= 0.0");
  }).prototype = animation_controller._RepeatingSimulation.prototype;
  dart.addTypeTests(animation_controller._RepeatingSimulation);
  dart.setMethodSignature(animation_controller._RepeatingSimulation, () => ({
    __proto__: dart.getMethods(animation_controller._RepeatingSimulation.__proto__),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double]),
    isDone: dart.fnType(core.bool, [core.double])
  }));
  dart.setLibraryUri(animation_controller._RepeatingSimulation, "package:flutter/src/animation/animation_controller.dart");
  dart.setFieldSignature(animation_controller._RepeatingSimulation, () => ({
    __proto__: dart.getFields(animation_controller._RepeatingSimulation.__proto__),
    min: dart.finalFieldType(core.double),
    max: dart.finalFieldType(core.double),
    reverse: dart.finalFieldType(core.bool),
    directionSetter: dart.finalFieldType(dart.fnType(dart.void, [animation_controller._AnimationDirection])),
    [_periodInSeconds]: dart.finalFieldType(core.double),
    [_initialT]: dart.finalFieldType(core.double)
  }));
  var Tolerance_velocity = dart.privateName(tolerance, "Tolerance.velocity");
  var Tolerance_time = dart.privateName(tolerance, "Tolerance.time");
  var Tolerance_distance = dart.privateName(tolerance, "Tolerance.distance");
  var C58;
  dart.defineLazy(animation_controller, {
    /*animation_controller._kFlingSpringDescription*/get _kFlingSpringDescription() {
      return new spring_simulation.SpringDescription.withDampingRatio({mass: 1.0, stiffness: 500.0, ratio: 1.0});
    },
    /*animation_controller._kFlingTolerance*/get _kFlingTolerance() {
      return C58 || CT.C58;
    }
  });
  dart.trackLibraries("packages/flutter/src/animation/animation", {
    "package:flutter/src/animation/animation.dart": animation$,
    "package:flutter/src/animation/tween.dart": tween,
    "package:flutter/src/animation/curves.dart": curves,
    "package:flutter/src/animation/animations.dart": animations,
    "package:flutter/src/animation/listener_helpers.dart": listener_helpers,
    "package:flutter/src/animation/tween_sequence.dart": tween_sequence,
    "package:flutter/src/animation/animation_controller.dart": animation_controller
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["animation.dart","tween.dart","animations.dart","curves.dart","listener_helpers.dart","tween_sequence.dart","animation_controller.dart"],"names":[],"mappings":"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","file":"animation.ddc.js"}');
  // Exports:
  return {
    src__animation__animation: animation$,
    src__animation__tween: tween,
    src__animation__curves: curves,
    src__animation__animations: animations,
    src__animation__listener_helpers: listener_helpers,
    src__animation__tween_sequence: tween_sequence,
    src__animation__animation_controller: animation_controller
  };
});

//# sourceMappingURL=animation.ddc.js.map
