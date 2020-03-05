define(['dart_sdk', 'packages/collection/src/canonicalized_map', 'packages/collection/src/utils'], function(dart_sdk, packages__collection__src__canonicalized_map, packages__collection__src__utils) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const unmodifiable_wrappers = packages__collection__src__canonicalized_map.src__unmodifiable_wrappers;
  const wrappers = packages__collection__src__canonicalized_map.src__wrappers;
  const utils = packages__collection__src__utils.src__utils;
  var combined_iterable = Object.create(dart.library);
  var queue_list = Object.create(dart.library);
  var union_set = Object.create(dart.library);
  var combined_list = Object.create(dart.library);
  var combined_map = Object.create(dart.library);
  var collection$ = Object.create(dart.library);
  var union_set_controller = Object.create(dart.library);
  var functions = Object.create(dart.library);
  var equality_set = Object.create(dart.library);
  var equality_map = Object.create(dart.library);
  var $iterator = dartx.iterator;
  var $map = dartx.map;
  var $contains = dartx.contains;
  var $any = dartx.any;
  var $isEmpty = dartx.isEmpty;
  var $every = dartx.every;
  var $length = dartx.length;
  var $fold = dartx.fold;
  var $setRange = dartx.setRange;
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $fillRange = dartx.fillRange;
  var $rightShift = dartx['>>'];
  var $cast = dartx.cast;
  var $toSet = dartx.toSet;
  var $expand = dartx.expand;
  var $where = dartx.where;
  var $firstWhere = dartx.firstWhere;
  var $noSuchMethod = dartx.noSuchMethod;
  var $containsKey = dartx.containsKey;
  var $keys = dartx.keys;
  var $forEach = dartx.forEach;
  var $addAll = dartx.addAll;
  var $putIfAbsent = dartx.putIfAbsent;
  var $add = dartx.add;
  var $toList = dartx.toList;
  var $removeLast = dartx.removeLast;
  var $reversed = dartx.reversed;
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const(new _js_helper.PrivateSymbol.new('_source', _source));
    }
  });
  var _iterables = dart.privateName(combined_iterable, "_iterables");
  const _is_CombinedIterableView_default = Symbol('_is_CombinedIterableView_default');
  var _iterables$ = dart.privateName(combined_iterable, "CombinedIterableView._iterables");
  combined_iterable.CombinedIterableView$ = dart.generic(T => {
    var _CombinedIteratorOfT = () => (_CombinedIteratorOfT = dart.constFn(combined_iterable._CombinedIterator$(T)))();
    var IteratorOfT = () => (IteratorOfT = dart.constFn(core.Iterator$(T)))();
    var IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    var IterableOfTToIteratorOfT = () => (IterableOfTToIteratorOfT = dart.constFn(dart.fnType(IteratorOfT(), [IterableOfT()])))();
    var IterableOfTTobool = () => (IterableOfTTobool = dart.constFn(dart.fnType(core.bool, [IterableOfT()])))();
    var intAndIterableOfTToint = () => (intAndIterableOfTToint = dart.constFn(dart.fnType(core.int, [core.int, IterableOfT()])))();
    class CombinedIterableView extends collection.IterableBase$(T) {
      get [_iterables]() {
        return this[_iterables$];
      }
      set [_iterables](value) {
        super[_iterables] = value;
      }
      get iterator() {
        return new (_CombinedIteratorOfT()).new(this[_iterables][$map](IteratorOfT(), dart.fn(i => i[$iterator], IterableOfTToIteratorOfT()))[$iterator]);
      }
      contains(element) {
        return this[_iterables][$any](dart.fn(i => i[$contains](element), IterableOfTTobool()));
      }
      get isEmpty() {
        return this[_iterables][$every](dart.fn(i => i[$isEmpty], IterableOfTTobool()));
      }
      get length() {
        return this[_iterables][$fold](core.int, 0, dart.fn((length, i) => dart.notNull(length) + dart.notNull(i[$length]), intAndIterableOfTToint()));
      }
    }
    (CombinedIterableView.new = function(_iterables) {
      this[_iterables$] = _iterables;
      CombinedIterableView.__proto__.new.call(this);
      ;
    }).prototype = CombinedIterableView.prototype;
    dart.addTypeTests(CombinedIterableView);
    CombinedIterableView.prototype[_is_CombinedIterableView_default] = true;
    dart.setGetterSignature(CombinedIterableView, () => ({
      __proto__: dart.getGetters(CombinedIterableView.__proto__),
      iterator: core.Iterator$(T),
      [$iterator]: core.Iterator$(T)
    }));
    dart.setLibraryUri(CombinedIterableView, "package:collection/src/combined_wrappers/combined_iterable.dart");
    dart.setFieldSignature(CombinedIterableView, () => ({
      __proto__: dart.getFields(CombinedIterableView.__proto__),
      [_iterables]: dart.finalFieldType(core.Iterable$(core.Iterable$(T)))
    }));
    dart.defineExtensionMethods(CombinedIterableView, ['contains']);
    dart.defineExtensionAccessors(CombinedIterableView, ['iterator', 'isEmpty', 'length']);
    return CombinedIterableView;
  });
  combined_iterable.CombinedIterableView = combined_iterable.CombinedIterableView$();
  dart.addTypeTests(combined_iterable.CombinedIterableView, _is_CombinedIterableView_default);
  var _iterators$ = dart.privateName(combined_iterable, "_iterators");
  const _is__CombinedIterator_default = Symbol('_is__CombinedIterator_default');
  combined_iterable._CombinedIterator$ = dart.generic(T => {
    class _CombinedIterator extends core.Object {
      get current() {
        let t0;
        t0 = this[_iterators$].current;
        return t0 == null ? null : t0.current;
      }
      moveNext() {
        let current = this[_iterators$].current;
        if (current != null && dart.test(current.moveNext())) {
          return true;
        }
        return dart.test(this[_iterators$].moveNext()) && dart.test(this.moveNext());
      }
    }
    (_CombinedIterator.new = function(_iterators) {
      this[_iterators$] = _iterators;
      ;
    }).prototype = _CombinedIterator.prototype;
    dart.addTypeTests(_CombinedIterator);
    _CombinedIterator.prototype[_is__CombinedIterator_default] = true;
    _CombinedIterator[dart.implements] = () => [core.Iterator$(T)];
    dart.setMethodSignature(_CombinedIterator, () => ({
      __proto__: dart.getMethods(_CombinedIterator.__proto__),
      moveNext: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(_CombinedIterator, () => ({
      __proto__: dart.getGetters(_CombinedIterator.__proto__),
      current: T
    }));
    dart.setLibraryUri(_CombinedIterator, "package:collection/src/combined_wrappers/combined_iterable.dart");
    dart.setFieldSignature(_CombinedIterator, () => ({
      __proto__: dart.getFields(_CombinedIterator.__proto__),
      [_iterators$]: dart.finalFieldType(core.Iterator$(core.Iterator$(T)))
    }));
    return _CombinedIterator;
  });
  combined_iterable._CombinedIterator = combined_iterable._CombinedIterator$();
  dart.addTypeTests(combined_iterable._CombinedIterator, _is__CombinedIterator_default);
  var _table = dart.privateName(queue_list, "_table");
  var _head = dart.privateName(queue_list, "_head");
  var _tail = dart.privateName(queue_list, "_tail");
  var _add = dart.privateName(queue_list, "_add");
  var _preGrow = dart.privateName(queue_list, "_preGrow");
  var _grow = dart.privateName(queue_list, "_grow");
  var _writeToList = dart.privateName(queue_list, "_writeToList");
  const _is_QueueList_default = Symbol('_is_QueueList_default');
  var _head$ = dart.privateName(queue_list, "QueueList._head");
  var _tail$ = dart.privateName(queue_list, "QueueList._tail");
  queue_list.QueueList$ = dart.generic(E => {
    var ListOfE = () => (ListOfE = dart.constFn(core.List$(E)))();
    var IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    const Object_ListMixin$36 = class Object_ListMixin extends core.Object {};
    (Object_ListMixin$36.new = function() {
    }).prototype = Object_ListMixin$36.prototype;
    dart.applyMixin(Object_ListMixin$36, collection.ListMixin$(E));
    class QueueList extends Object_ListMixin$36 {
      get [_head]() {
        return this[_head$];
      }
      set [_head](value) {
        this[_head$] = value;
      }
      get [_tail]() {
        return this[_tail$];
      }
      set [_tail](value) {
        this[_tail$] = value;
      }
      static _castFrom(S, T, source) {
        return new (queue_list._CastQueueList$(S, T)).new(source);
      }
      static from(source) {
        let t0;
        if (core.List.is(source)) {
          let length = source[$length];
          let queue = new (queue_list.QueueList$(E)).new(dart.notNull(length) + 1);
          if (!(dart.notNull(queue[_table][$length]) > dart.notNull(length))) dart.assertFailed(null, "org-dartlang-app:///packages/collection/src/queue_list.dart", 57, 14, "queue._table.length > length");
          let sourceList = source;
          queue[_table][$setRange](0, length, sourceList, 0);
          queue[_tail] = length;
          return queue;
        } else {
          t0 = new (queue_list.QueueList$(E)).new();
          t0.addAll(source);
          return t0;
        }
      }
      add(element) {
        E._check(element);
        this[_add](element);
      }
      addAll(iterable) {
        IterableOfE()._check(iterable);
        if (core.List.is(iterable)) {
          let list = iterable;
          let addCount = list[$length];
          let length = this.length;
          if (dart.notNull(length) + dart.notNull(addCount) >= dart.notNull(this[_table][$length])) {
            this[_preGrow](dart.notNull(length) + dart.notNull(addCount));
            this[_table][$setRange](length, dart.notNull(length) + dart.notNull(addCount), list, 0);
            this[_tail] = dart.notNull(this[_tail]) + dart.notNull(addCount);
          } else {
            let endSpace = dart.notNull(this[_table][$length]) - dart.notNull(this[_tail]);
            if (dart.notNull(addCount) < endSpace) {
              this[_table][$setRange](this[_tail], dart.notNull(this[_tail]) + dart.notNull(addCount), list, 0);
              this[_tail] = dart.notNull(this[_tail]) + dart.notNull(addCount);
            } else {
              let preSpace = dart.notNull(addCount) - endSpace;
              this[_table][$setRange](this[_tail], dart.notNull(this[_tail]) + endSpace, list, 0);
              this[_table][$setRange](0, preSpace, list, endSpace);
              this[_tail] = preSpace;
            }
          }
        } else {
          for (let element of iterable)
            this[_add](element);
        }
      }
      cast(T) {
        return queue_list.QueueList._castFrom(E, T, this);
      }
      retype(T) {
        return this.cast(T);
      }
      toString() {
        return collection.IterableBase.iterableToFullString(this, "{", "}");
      }
      addLast(element) {
        E._check(element);
        this[_add](element);
      }
      addFirst(element) {
        E._check(element);
        this[_head] = (dart.notNull(this[_head]) - 1 & dart.notNull(this[_table][$length]) - 1) >>> 0;
        this[_table][$_set](this[_head], element);
        if (this[_head] == this[_tail]) this[_grow]();
      }
      removeFirst() {
        if (this[_head] == this[_tail]) dart.throw(new core.StateError.new("No element"));
        let result = this[_table][$_get](this[_head]);
        this[_table][$_set](this[_head], null);
        this[_head] = (dart.notNull(this[_head]) + 1 & dart.notNull(this[_table][$length]) - 1) >>> 0;
        return result;
      }
      removeLast() {
        if (this[_head] == this[_tail]) dart.throw(new core.StateError.new("No element"));
        this[_tail] = (dart.notNull(this[_tail]) - 1 & dart.notNull(this[_table][$length]) - 1) >>> 0;
        let result = this[_table][$_get](this[_tail]);
        this[_table][$_set](this[_tail], null);
        return result;
      }
      get length() {
        return (dart.notNull(this[_tail]) - dart.notNull(this[_head]) & dart.notNull(this[_table][$length]) - 1) >>> 0;
      }
      set length(value) {
        if (dart.notNull(value) < 0) dart.throw(new core.RangeError.new("Length " + dart.str(value) + " may not be negative."));
        let delta = dart.notNull(value) - dart.notNull(this.length);
        if (delta >= 0) {
          if (dart.notNull(this[_table][$length]) <= dart.notNull(value)) {
            this[_preGrow](value);
          }
          this[_tail] = (dart.notNull(this[_tail]) + delta & dart.notNull(this[_table][$length]) - 1) >>> 0;
          return;
        }
        let newTail = dart.notNull(this[_tail]) + delta;
        if (newTail >= 0) {
          this[_table][$fillRange](newTail, this[_tail], null);
        } else {
          newTail = newTail + dart.notNull(this[_table][$length]);
          this[_table][$fillRange](0, this[_tail], null);
          this[_table][$fillRange](newTail, this[_table][$length], null);
        }
        this[_tail] = newTail;
      }
      _get(index) {
        if (dart.notNull(index) < 0 || dart.notNull(index) >= dart.notNull(this.length)) {
          dart.throw(new core.RangeError.new("Index " + dart.str(index) + " must be in the range [0.." + dart.str(this.length) + ")."));
        }
        return this[_table][$_get]((dart.notNull(this[_head]) + dart.notNull(index) & dart.notNull(this[_table][$length]) - 1) >>> 0);
      }
      _set(index, value$) {
        let value = value$;
        E._check(value);
        if (dart.notNull(index) < 0 || dart.notNull(index) >= dart.notNull(this.length)) {
          dart.throw(new core.RangeError.new("Index " + dart.str(index) + " must be in the range [0.." + dart.str(this.length) + ")."));
        }
        this[_table][$_set]((dart.notNull(this[_head]) + dart.notNull(index) & dart.notNull(this[_table][$length]) - 1) >>> 0, value);
        return value$;
      }
      static _isPowerOf2(number) {
        return (dart.notNull(number) & dart.notNull(number) - 1) === 0;
      }
      static _nextPowerOf2(number) {
        if (!(dart.notNull(number) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/collection/src/queue_list.dart", 192, 12, "number > 0");
        number = (dart.notNull(number) << 1 >>> 0) - 1;
        for (;;) {
          let nextNumber = (dart.notNull(number) & dart.notNull(number) - 1) >>> 0;
          if (nextNumber === 0) return number;
          number = nextNumber;
        }
      }
      [_add](element) {
        this[_table][$_set](this[_tail], element);
        this[_tail] = (dart.notNull(this[_tail]) + 1 & dart.notNull(this[_table][$length]) - 1) >>> 0;
        if (this[_head] == this[_tail]) this[_grow]();
      }
      [_grow]() {
        let newTable = ListOfE().new(dart.notNull(this[_table][$length]) * 2);
        let split = dart.notNull(this[_table][$length]) - dart.notNull(this[_head]);
        newTable[$setRange](0, split, this[_table], this[_head]);
        newTable[$setRange](split, split + dart.notNull(this[_head]), this[_table], 0);
        this[_head] = 0;
        this[_tail] = this[_table][$length];
        this[_table] = newTable;
      }
      [_writeToList](target) {
        if (!(dart.notNull(target[$length]) >= dart.notNull(this.length))) dart.assertFailed(null, "org-dartlang-app:///packages/collection/src/queue_list.dart", 220, 12, "target.length >= length");
        if (dart.notNull(this[_head]) <= dart.notNull(this[_tail])) {
          let length = dart.notNull(this[_tail]) - dart.notNull(this[_head]);
          target[$setRange](0, length, this[_table], this[_head]);
          return length;
        } else {
          let firstPartSize = dart.notNull(this[_table][$length]) - dart.notNull(this[_head]);
          target[$setRange](0, firstPartSize, this[_table], this[_head]);
          target[$setRange](firstPartSize, firstPartSize + dart.notNull(this[_tail]), this[_table], 0);
          return dart.notNull(this[_tail]) + firstPartSize;
        }
      }
      [_preGrow](newElementCount) {
        if (!(dart.notNull(newElementCount) >= dart.notNull(this.length))) dart.assertFailed(null, "org-dartlang-app:///packages/collection/src/queue_list.dart", 235, 12, "newElementCount >= length");
        newElementCount = dart.notNull(newElementCount) + newElementCount[$rightShift](1);
        let newCapacity = queue_list.QueueList._nextPowerOf2(newElementCount);
        let newTable = ListOfE().new(newCapacity);
        this[_tail] = this[_writeToList](newTable);
        this[_table] = newTable;
        this[_head] = 0;
      }
    }
    (QueueList.new = function(initialCapacity = null) {
      this[_table] = null;
      this[_head$] = 0;
      this[_tail$] = 0;
      if (initialCapacity == null || dart.notNull(initialCapacity) < 8) {
        initialCapacity = 8;
      } else if (!dart.test(queue_list.QueueList._isPowerOf2(initialCapacity))) {
        initialCapacity = queue_list.QueueList._nextPowerOf2(initialCapacity);
      }
      if (!dart.test(queue_list.QueueList._isPowerOf2(initialCapacity))) dart.assertFailed(null, "org-dartlang-app:///packages/collection/src/queue_list.dart", 45, 12, "_isPowerOf2(initialCapacity)");
      this[_table] = ListOfE().new(initialCapacity);
    }).prototype = QueueList.prototype;
    (QueueList.__ = function() {
      this[_table] = null;
      this[_tail$] = null;
      this[_head$] = null;
      ;
    }).prototype = QueueList.prototype;
    dart.addTypeTests(QueueList);
    QueueList.prototype[_is_QueueList_default] = true;
    QueueList[dart.implements] = () => [collection.Queue$(E)];
    dart.setMethodSignature(QueueList, () => ({
      __proto__: dart.getMethods(QueueList.__proto__),
      cast: dart.gFnType(T => [queue_list.QueueList$(T), []]),
      [$cast]: dart.gFnType(T => [queue_list.QueueList$(T), []]),
      retype: dart.gFnType(T => [queue_list.QueueList$(T), []]),
      addLast: dart.fnType(dart.void, [core.Object]),
      addFirst: dart.fnType(dart.void, [core.Object]),
      removeFirst: dart.fnType(E, []),
      _get: dart.fnType(E, [core.int]),
      [$_get]: dart.fnType(E, [core.int]),
      _set: dart.fnType(dart.void, [core.int, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.int, core.Object]),
      [_add]: dart.fnType(dart.void, [E]),
      [_grow]: dart.fnType(dart.void, []),
      [_writeToList]: dart.fnType(core.int, [core.List$(E)]),
      [_preGrow]: dart.fnType(dart.void, [core.int])
    }));
    dart.setGetterSignature(QueueList, () => ({
      __proto__: dart.getGetters(QueueList.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setSetterSignature(QueueList, () => ({
      __proto__: dart.getSetters(QueueList.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(QueueList, "package:collection/src/queue_list.dart");
    dart.setFieldSignature(QueueList, () => ({
      __proto__: dart.getFields(QueueList.__proto__),
      [_table]: dart.fieldType(core.List$(E)),
      [_head]: dart.fieldType(core.int),
      [_tail]: dart.fieldType(core.int)
    }));
    dart.defineExtensionMethods(QueueList, [
      'add',
      'addAll',
      'cast',
      'toString',
      'removeLast',
      '_get',
      '_set'
    ]);
    dart.defineExtensionAccessors(QueueList, ['length']);
    return QueueList;
  });
  queue_list.QueueList = queue_list.QueueList$();
  dart.defineLazy(queue_list.QueueList, {
    /*queue_list.QueueList._INITIAL_CAPACITY*/get _INITIAL_CAPACITY() {
      return 8;
    }
  });
  dart.addTypeTests(queue_list.QueueList, _is_QueueList_default);
  var _delegate$ = dart.privateName(queue_list, "_delegate");
  const _is__CastQueueList_default = Symbol('_is__CastQueueList_default');
  queue_list._CastQueueList$ = dart.generic((S, T) => {
    class _CastQueueList extends queue_list.QueueList$(T) {
      get [_head]() {
        return this[_delegate$][_head];
      }
      set [_head](value) {
        return this[_delegate$][_head] = value;
      }
      get [_tail]() {
        return this[_delegate$][_tail];
      }
      set [_tail](value) {
        return this[_delegate$][_tail] = value;
      }
    }
    (_CastQueueList.new = function(_delegate) {
      this[_delegate$] = _delegate;
      _CastQueueList.__proto__.__.call(this);
      this[_table] = this[_delegate$][_table][$cast](T);
    }).prototype = _CastQueueList.prototype;
    dart.addTypeTests(_CastQueueList);
    _CastQueueList.prototype[_is__CastQueueList_default] = true;
    dart.setGetterSignature(_CastQueueList, () => ({
      __proto__: dart.getGetters(_CastQueueList.__proto__),
      [_head]: core.int,
      [_tail]: core.int
    }));
    dart.setSetterSignature(_CastQueueList, () => ({
      __proto__: dart.getSetters(_CastQueueList.__proto__),
      [_head]: core.int,
      [_tail]: core.int
    }));
    dart.setLibraryUri(_CastQueueList, "package:collection/src/queue_list.dart");
    dart.setFieldSignature(_CastQueueList, () => ({
      __proto__: dart.getFields(_CastQueueList.__proto__),
      [_delegate$]: dart.finalFieldType(queue_list.QueueList$(S))
    }));
    return _CastQueueList;
  });
  queue_list._CastQueueList = queue_list._CastQueueList$();
  dart.addTypeTests(queue_list._CastQueueList, _is__CastQueueList_default);
  var _sets$ = dart.privateName(union_set, "_sets");
  var _disjoint = dart.privateName(union_set, "_disjoint");
  var _iterable = dart.privateName(union_set, "_iterable");
  var _dedupIterable = dart.privateName(union_set, "_dedupIterable");
  const _is_UnionSet_default = Symbol('_is_UnionSet_default');
  union_set.UnionSet$ = dart.generic(E => {
    var SetOfE = () => (SetOfE = dart.constFn(core.Set$(E)))();
    var intAndSetOfEToint = () => (intAndSetOfEToint = dart.constFn(dart.fnType(core.int, [core.int, SetOfE()])))();
    var SetOfEToSetOfE = () => (SetOfEToSetOfE = dart.constFn(dart.fnType(SetOfE(), [SetOfE()])))();
    var _HashSetOfE = () => (_HashSetOfE = dart.constFn(collection._HashSet$(E)))();
    var ETobool = () => (ETobool = dart.constFn(dart.fnType(core.bool, [E])))();
    var SetOfETobool = () => (SetOfETobool = dart.constFn(dart.fnType(core.bool, [SetOfE()])))();
    var SetOfEToE = () => (SetOfEToE = dart.constFn(dart.fnType(E, [SetOfE()])))();
    const SetBase_UnmodifiableSetMixin$36 = class SetBase_UnmodifiableSetMixin extends collection.SetBase$(E) {};
    (SetBase_UnmodifiableSetMixin$36.new = function() {
    }).prototype = SetBase_UnmodifiableSetMixin$36.prototype;
    dart.applyMixin(SetBase_UnmodifiableSetMixin$36, unmodifiable_wrappers.UnmodifiableSetMixin$(E));
    class UnionSet extends SetBase_UnmodifiableSetMixin$36 {
      get length() {
        return dart.test(this[_disjoint]) ? this[_sets$][$fold](core.int, 0, dart.fn((length, set) => dart.notNull(length) + dart.notNull(set[$length]), intAndSetOfEToint())) : this[_iterable][$length];
      }
      get iterator() {
        return this[_iterable][$iterator];
      }
      get [_iterable]() {
        return dart.test(this[_disjoint]) ? this[_sets$][$expand](E, dart.fn(set => set, SetOfEToSetOfE())) : this[_dedupIterable];
      }
      get [_dedupIterable]() {
        let seen = new (_HashSetOfE()).new();
        return this[_sets$][$expand](E, dart.fn(set => set, SetOfEToSetOfE()))[$where](dart.fn(element => {
          if (dart.test(seen.contains(element))) return false;
          seen.add(element);
          return true;
        }, ETobool()));
      }
      contains(element) {
        return this[_sets$][$any](dart.fn(set => set.contains(element), SetOfETobool()));
      }
      lookup(element) {
        if (element == null) return null;
        return this[_sets$][$map](E, dart.fn(set => set.lookup(element), SetOfEToE()))[$firstWhere](dart.fn(result => result != null, ETobool()), {orElse: dart.fn(() => null, VoidToNull())});
      }
      toSet() {
        let result = new (_HashSetOfE()).new();
        for (let set of this[_sets$]) {
          result.addAll(set);
        }
        return result;
      }
    }
    (UnionSet.new = function(_sets, opts) {
      let disjoint = opts && 'disjoint' in opts ? opts.disjoint : false;
      this[_sets$] = _sets;
      this[_disjoint] = disjoint;
      ;
    }).prototype = UnionSet.prototype;
    (UnionSet.from = function(sets, opts) {
      let disjoint = opts && 'disjoint' in opts ? opts.disjoint : false;
      UnionSet.new.call(this, sets[$toSet](), {disjoint: disjoint});
    }).prototype = UnionSet.prototype;
    dart.addTypeTests(UnionSet);
    UnionSet.prototype[_is_UnionSet_default] = true;
    dart.setMethodSignature(UnionSet, () => ({
      __proto__: dart.getMethods(UnionSet.__proto__),
      contains: dart.fnType(core.bool, [core.Object]),
      [$contains]: dart.fnType(core.bool, [core.Object]),
      lookup: dart.fnType(E, [core.Object]),
      toSet: dart.fnType(core.Set$(E), []),
      [$toSet]: dart.fnType(core.Set$(E), [])
    }));
    dart.setGetterSignature(UnionSet, () => ({
      __proto__: dart.getGetters(UnionSet.__proto__),
      length: core.int,
      [$length]: core.int,
      iterator: core.Iterator$(E),
      [$iterator]: core.Iterator$(E),
      [_iterable]: core.Iterable$(E),
      [_dedupIterable]: core.Iterable$(E)
    }));
    dart.setLibraryUri(UnionSet, "package:collection/src/union_set.dart");
    dart.setFieldSignature(UnionSet, () => ({
      __proto__: dart.getFields(UnionSet.__proto__),
      [_sets$]: dart.finalFieldType(core.Set$(core.Set$(E))),
      [_disjoint]: dart.finalFieldType(core.bool)
    }));
    dart.defineExtensionMethods(UnionSet, ['contains', 'toSet']);
    dart.defineExtensionAccessors(UnionSet, ['length', 'iterator']);
    return UnionSet;
  });
  union_set.UnionSet = union_set.UnionSet$();
  dart.addTypeTests(union_set.UnionSet, _is_UnionSet_default);
  var _lists$ = dart.privateName(combined_list, "_lists");
  var _source = dart.privateName(combined_list, "_source");
  var C0;
  var _source$ = dart.privateName(collection, "_source");
  const _is_CombinedListView_default = Symbol('_is_CombinedListView_default');
  combined_list.CombinedListView$ = dart.generic(T => {
    var ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    var intAndListOfTToint = () => (intAndListOfTToint = dart.constFn(dart.fnType(core.int, [core.int, ListOfT()])))();
    var IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    class CombinedListView extends collection.ListBase$(T) {
      static _throw() {
        dart.throw(new core.UnsupportedError.new("Cannot modify an unmodifiable List"));
      }
      set length(length) {
        combined_list.CombinedListView._throw();
      }
      get length() {
        return this[_lists$][$fold](core.int, 0, dart.fn((length, list) => dart.notNull(length) + dart.notNull(list[$length]), intAndListOfTToint()));
      }
      _get(index) {
        let initialIndex = index;
        for (let i = 0; i < dart.notNull(this[_lists$][$length]); i = i + 1) {
          let list = this[_lists$][$_get](i);
          if (dart.notNull(index) < dart.notNull(list[$length])) {
            return list[$_get](index);
          }
          index = dart.notNull(index) - dart.notNull(list[$length]);
        }
        dart.throw(new core.IndexError.new(initialIndex, this, "index", null, this.length));
      }
      _set(index, value$) {
        let value = value$;
        T._check(value);
        combined_list.CombinedListView._throw();
        return value$;
      }
      clear() {
        combined_list.CombinedListView._throw();
      }
      remove(element) {
        combined_list.CombinedListView._throw();
        return null;
      }
      removeWhere(test) {
        combined_list.CombinedListView._throw();
      }
      retainWhere(test) {
        combined_list.CombinedListView._throw();
      }
      get [_source$]() {
        return IterableOfT()._check(this[$noSuchMethod](new core._Invocation.getter(C0 || CT.C0)));
      }
    }
    (CombinedListView.new = function(_lists) {
      this[_lists$] = _lists;
      ;
    }).prototype = CombinedListView.prototype;
    dart.addTypeTests(CombinedListView);
    CombinedListView.prototype[_is_CombinedListView_default] = true;
    CombinedListView[dart.implements] = () => [collection.UnmodifiableListView$(T)];
    dart.setMethodSignature(CombinedListView, () => ({
      __proto__: dart.getMethods(CombinedListView.__proto__),
      _get: dart.fnType(T, [core.int]),
      [$_get]: dart.fnType(T, [core.int]),
      _set: dart.fnType(dart.void, [core.int, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.int, core.Object])
    }));
    dart.setGetterSignature(CombinedListView, () => ({
      __proto__: dart.getGetters(CombinedListView.__proto__),
      length: core.int,
      [$length]: core.int,
      [_source$]: core.Iterable$(T)
    }));
    dart.setSetterSignature(CombinedListView, () => ({
      __proto__: dart.getSetters(CombinedListView.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(CombinedListView, "package:collection/src/combined_wrappers/combined_list.dart");
    dart.setFieldSignature(CombinedListView, () => ({
      __proto__: dart.getFields(CombinedListView.__proto__),
      [_lists$]: dart.finalFieldType(core.List$(core.List$(T)))
    }));
    dart.defineExtensionMethods(CombinedListView, [
      '_get',
      '_set',
      'clear',
      'remove',
      'removeWhere',
      'retainWhere'
    ]);
    dart.defineExtensionAccessors(CombinedListView, ['length']);
    return CombinedListView;
  });
  combined_list.CombinedListView = combined_list.CombinedListView$();
  dart.addTypeTests(combined_list.CombinedListView, _is_CombinedListView_default);
  var _maps$ = dart.privateName(combined_map, "_maps");
  const _is_CombinedMapView_default = Symbol('_is_CombinedMapView_default');
  combined_map.CombinedMapView$ = dart.generic((K, V) => {
    var CombinedIterableViewOfK = () => (CombinedIterableViewOfK = dart.constFn(combined_iterable.CombinedIterableView$(K)))();
    var IterableOfK = () => (IterableOfK = dart.constFn(core.Iterable$(K)))();
    var MapOfK$V = () => (MapOfK$V = dart.constFn(core.Map$(K, V)))();
    var MapOfK$VToIterableOfK = () => (MapOfK$VToIterableOfK = dart.constFn(dart.fnType(IterableOfK(), [MapOfK$V()])))();
    class CombinedMapView extends collection.UnmodifiableMapBase$(K, V) {
      _get(key) {
        for (let map of this[_maps$]) {
          let value = map[$_get](key);
          if (value != null || dart.test(map[$containsKey](value))) {
            return value;
          }
        }
        return null;
      }
      get keys() {
        return new (CombinedIterableViewOfK()).new(this[_maps$][$map](IterableOfK(), dart.fn(m => m[$keys], MapOfK$VToIterableOfK())));
      }
    }
    (CombinedMapView.new = function(_maps) {
      this[_maps$] = _maps;
      ;
    }).prototype = CombinedMapView.prototype;
    dart.addTypeTests(CombinedMapView);
    CombinedMapView.prototype[_is_CombinedMapView_default] = true;
    dart.setMethodSignature(CombinedMapView, () => ({
      __proto__: dart.getMethods(CombinedMapView.__proto__),
      _get: dart.fnType(V, [core.Object]),
      [$_get]: dart.fnType(V, [core.Object])
    }));
    dart.setGetterSignature(CombinedMapView, () => ({
      __proto__: dart.getGetters(CombinedMapView.__proto__),
      keys: core.Iterable$(K),
      [$keys]: core.Iterable$(K)
    }));
    dart.setLibraryUri(CombinedMapView, "package:collection/src/combined_wrappers/combined_map.dart");
    dart.setFieldSignature(CombinedMapView, () => ({
      __proto__: dart.getFields(CombinedMapView.__proto__),
      [_maps$]: dart.finalFieldType(core.Iterable$(core.Map$(K, V)))
    }));
    dart.defineExtensionMethods(CombinedMapView, ['_get']);
    dart.defineExtensionAccessors(CombinedMapView, ['keys']);
    return CombinedMapView;
  });
  combined_map.CombinedMapView = combined_map.CombinedMapView$();
  dart.addTypeTests(combined_map.CombinedMapView, _is_CombinedMapView_default);
  var _set = dart.privateName(union_set_controller, "_set");
  var _sets = dart.privateName(union_set_controller, "_sets");
  const _is_UnionSetController_default = Symbol('_is_UnionSetController_default');
  union_set_controller.UnionSetController$ = dart.generic(E => {
    var SetOfE = () => (SetOfE = dart.constFn(core.Set$(E)))();
    var _HashSetOfSetOfE = () => (_HashSetOfSetOfE = dart.constFn(collection._HashSet$(SetOfE())))();
    var UnionSetOfE = () => (UnionSetOfE = dart.constFn(union_set.UnionSet$(E)))();
    class UnionSetController extends core.Object {
      get set() {
        return this[_set];
      }
      add(component) {
        SetOfE()._check(component);
        this[_sets].add(component);
      }
      remove(component) {
        SetOfE()._check(component);
        return this[_sets].remove(component);
      }
    }
    (UnionSetController.new = function(opts) {
      let disjoint = opts && 'disjoint' in opts ? opts.disjoint : false;
      this[_set] = null;
      this[_sets] = new (_HashSetOfSetOfE()).new();
      this[_set] = new (UnionSetOfE()).new(this[_sets], {disjoint: disjoint});
    }).prototype = UnionSetController.prototype;
    dart.addTypeTests(UnionSetController);
    UnionSetController.prototype[_is_UnionSetController_default] = true;
    dart.setMethodSignature(UnionSetController, () => ({
      __proto__: dart.getMethods(UnionSetController.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      remove: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(UnionSetController, () => ({
      __proto__: dart.getGetters(UnionSetController.__proto__),
      set: union_set.UnionSet$(E)
    }));
    dart.setLibraryUri(UnionSetController, "package:collection/src/union_set_controller.dart");
    dart.setFieldSignature(UnionSetController, () => ({
      __proto__: dart.getFields(UnionSetController.__proto__),
      [_set]: dart.fieldType(union_set.UnionSet$(E)),
      [_sets]: dart.finalFieldType(core.Set$(core.Set$(E)))
    }));
    return UnionSetController;
  });
  union_set_controller.UnionSetController = union_set_controller.UnionSetController$();
  dart.addTypeTests(union_set_controller.UnionSetController, _is_UnionSetController_default);
  functions.mapMap = function mapMap(K1, V1, K2, V2, map, opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let value = opts && 'value' in opts ? opts.value : null;
    key == null ? key = dart.fn((mapKey, _) => K2.as(mapKey), dart.fnType(K2, [K1, V1])) : null;
    value == null ? value = dart.fn((_, mapValue) => V2.as(mapValue), dart.fnType(V2, [K1, V1])) : null;
    let result = new (_js_helper.LinkedMap$(K2, V2)).new();
    map[$forEach](dart.fn((mapKey, mapValue) => {
      result[$_set](key(mapKey, mapValue), value(mapKey, mapValue));
    }, dart.fnType(core.Null, [K1, V1])));
    return result;
  };
  functions.mergeMaps = function mergeMaps(K, V, map1, map2, opts) {
    let t0;
    let value = opts && 'value' in opts ? opts.value : null;
    let result = collection.LinkedHashMap$(K, V).from(map1);
    if (value == null) {
      t0 = result;
      t0[$addAll](map2);
      return t0;
    }
    map2[$forEach](dart.fn((key, mapValue) => {
      result[$_set](key, dart.test(result[$containsKey](key)) ? value(result[$_get](key), mapValue) : mapValue);
    }, dart.fnType(core.Null, [K, V])));
    return result;
  };
  functions.groupBy = function groupBy(S, T, values, key) {
    let map = new (_js_helper.LinkedMap$(T, core.List$(S))).new();
    for (let element of values) {
      let list = map[$putIfAbsent](key(element), dart.fn(() => _interceptors.JSArray$(S).of([]), dart.fnType(core.List$(S), [])));
      list[$add](element);
    }
    return map;
  };
  functions.minBy = function minBy(S, T, values, orderBy, opts) {
    let compare = opts && 'compare' in opts ? opts.compare : null;
    compare == null ? compare = utils.defaultCompare(T) : null;
    let minValue = null;
    let minOrderBy = null;
    for (let element of values) {
      let elementOrderBy = orderBy(element);
      if (minOrderBy == null || dart.notNull(compare(elementOrderBy, minOrderBy)) < 0) {
        minValue = element;
        minOrderBy = elementOrderBy;
      }
    }
    return minValue;
  };
  functions.maxBy = function maxBy(S, T, values, orderBy, opts) {
    let compare = opts && 'compare' in opts ? opts.compare : null;
    compare == null ? compare = utils.defaultCompare(T) : null;
    let maxValue = null;
    let maxOrderBy = null;
    for (let element of values) {
      let elementOrderBy = orderBy(element);
      if (maxOrderBy == null || dart.notNull(compare(elementOrderBy, maxOrderBy)) > 0) {
        maxValue = element;
        maxOrderBy = elementOrderBy;
      }
    }
    return maxValue;
  };
  functions.transitiveClosure = function transitiveClosure(T, graph) {
    let result = new (_js_helper.LinkedMap$(T, core.Set$(T))).new();
    graph[$forEach](dart.fn((vertex, edges) => {
      result[$_set](vertex, collection.LinkedHashSet$(T).from(edges));
    }, dart.fnType(core.Null, [T, core.Iterable$(T)])));
    let keys = graph[$keys][$toList]();
    for (let vertex1 of keys) {
      for (let vertex2 of keys) {
        for (let vertex3 of keys) {
          if (dart.test(result[$_get](vertex2).contains(vertex1)) && dart.test(result[$_get](vertex1).contains(vertex3))) {
            result[$_get](vertex2).add(vertex3);
          }
        }
      }
    }
    return result;
  };
  functions.stronglyConnectedComponents = function stronglyConnectedComponents(T, graph) {
    let index = 0;
    let stack = _interceptors.JSArray$(T).of([]);
    let result = _interceptors.JSArray$(core.Set$(T)).of([]);
    let indices = new (_js_helper.LinkedMap$(T, core.int)).new();
    let lowLinks = new (_js_helper.LinkedMap$(T, core.int)).new();
    let onStack = new (collection._HashSet$(T)).new();
    function strongConnect(vertex) {
      indices[$_set](vertex, index);
      lowLinks[$_set](vertex, index);
      index = index + 1;
      stack[$add](vertex);
      onStack.add(vertex);
      for (let successor of graph[$_get](vertex)) {
        if (!dart.test(indices[$containsKey](successor))) {
          strongConnect(successor);
          lowLinks[$_set](vertex, math.min(core.int, lowLinks[$_get](vertex), lowLinks[$_get](successor)));
        } else if (dart.test(onStack.contains(successor))) {
          lowLinks[$_set](vertex, math.min(core.int, lowLinks[$_get](vertex), lowLinks[$_get](successor)));
        }
      }
      if (lowLinks[$_get](vertex) == indices[$_get](vertex)) {
        let component = new (collection._HashSet$(T)).new();
        let neighbor = null;
        do {
          neighbor = stack[$removeLast]();
          onStack.remove(neighbor);
          component.add(neighbor);
        } while (!dart.equals(neighbor, vertex));
        result[$add](component);
      }
    }
    dart.fn(strongConnect, dart.fnType(core.Null, [T]));
    for (let vertex of graph[$keys]) {
      if (!dart.test(indices[$containsKey](vertex))) strongConnect(vertex);
    }
    return result[$reversed][$toList]();
  };
  const _is_EqualitySet_default = Symbol('_is_EqualitySet_default');
  equality_set.EqualitySet$ = dart.generic(E => {
    var LinkedHashSetOfE = () => (LinkedHashSetOfE = dart.constFn(collection.LinkedHashSet$(E)))();
    class EqualitySet extends wrappers.DelegatingSet$(E) {}
    (EqualitySet.new = function(equality) {
      EqualitySet.__proto__.new.call(this, LinkedHashSetOfE().new({equals: dart.bind(equality, 'equals'), hashCode: dart.bind(equality, 'hash'), isValidKey: dart.bind(equality, 'isValidKey')}));
      ;
    }).prototype = EqualitySet.prototype;
    (EqualitySet.from = function(equality, other) {
      EqualitySet.__proto__.new.call(this, LinkedHashSetOfE().new({equals: dart.bind(equality, 'equals'), hashCode: dart.bind(equality, 'hash'), isValidKey: dart.bind(equality, 'isValidKey')}));
      this.addAll(other);
    }).prototype = EqualitySet.prototype;
    dart.addTypeTests(EqualitySet);
    EqualitySet.prototype[_is_EqualitySet_default] = true;
    dart.setLibraryUri(EqualitySet, "package:collection/src/equality_set.dart");
    return EqualitySet;
  });
  equality_set.EqualitySet = equality_set.EqualitySet$();
  dart.addTypeTests(equality_set.EqualitySet, _is_EqualitySet_default);
  const _is_EqualityMap_default = Symbol('_is_EqualityMap_default');
  equality_map.EqualityMap$ = dart.generic((K, V) => {
    var LinkedHashMapOfK$V = () => (LinkedHashMapOfK$V = dart.constFn(collection.LinkedHashMap$(K, V)))();
    class EqualityMap extends wrappers.DelegatingMap$(K, V) {}
    (EqualityMap.new = function(equality) {
      EqualityMap.__proto__.new.call(this, LinkedHashMapOfK$V().new({equals: dart.bind(equality, 'equals'), hashCode: dart.bind(equality, 'hash'), isValidKey: dart.bind(equality, 'isValidKey')}));
      ;
    }).prototype = EqualityMap.prototype;
    (EqualityMap.from = function(equality, other) {
      EqualityMap.__proto__.new.call(this, LinkedHashMapOfK$V().new({equals: dart.bind(equality, 'equals'), hashCode: dart.bind(equality, 'hash'), isValidKey: dart.bind(equality, 'isValidKey')}));
      this.addAll(other);
    }).prototype = EqualityMap.prototype;
    dart.addTypeTests(EqualityMap);
    EqualityMap.prototype[_is_EqualityMap_default] = true;
    dart.setLibraryUri(EqualityMap, "package:collection/src/equality_map.dart");
    return EqualityMap;
  });
  equality_map.EqualityMap = equality_map.EqualityMap$();
  dart.addTypeTests(equality_map.EqualityMap, _is_EqualityMap_default);
  dart.trackLibraries("packages/collection/collection", {
    "package:collection/src/combined_wrappers/combined_iterable.dart": combined_iterable,
    "package:collection/src/queue_list.dart": queue_list,
    "package:collection/src/union_set.dart": union_set,
    "package:collection/src/combined_wrappers/combined_list.dart": combined_list,
    "package:collection/src/combined_wrappers/combined_map.dart": combined_map,
    "package:collection/collection.dart": collection$,
    "package:collection/src/union_set_controller.dart": union_set_controller,
    "package:collection/src/functions.dart": functions,
    "package:collection/src/equality_set.dart": equality_set,
    "package:collection/src/equality_map.dart": equality_map
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/combined_wrappers/combined_iterable.dart","src/queue_list.dart","src/union_set.dart","src/combined_wrappers/combined_list.dart","src/combined_wrappers/combined_map.dart","src/union_set_controller.dart","src/functions.dart","src/equality_set.dart","src/equality_map.dart"],"names":[],"mappings":"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","file":"collection.ddc.js"}');
  // Exports:
  return {
    src__combined_wrappers__combined_iterable: combined_iterable,
    src__queue_list: queue_list,
    src__union_set: union_set,
    src__combined_wrappers__combined_list: combined_list,
    src__combined_wrappers__combined_map: combined_map,
    collection: collection$,
    src__union_set_controller: union_set_controller,
    src__functions: functions,
    src__equality_set: equality_set,
    src__equality_map: equality_map
  };
});

//# sourceMappingURL=collection.ddc.js.map
