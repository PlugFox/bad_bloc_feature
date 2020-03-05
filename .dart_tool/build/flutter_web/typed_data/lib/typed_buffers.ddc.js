define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const typed_data = dart_sdk.typed_data;
  const collection = dart_sdk.collection;
  const _native_typed_data = dart_sdk._native_typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var typed_buffers = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $setRange = dartx.setRange;
  var $elementSizeInBytes = dartx.elementSizeInBytes;
  var $offsetInBytes = dartx.offsetInBytes;
  var $buffer = dartx.buffer;
  var $addAll = dartx.addAll;
  var $insertAll = dartx.insertAll;
  const CT = Object.create(null);
  var _buffer = dart.privateName(typed_buffers, "_buffer");
  var _length = dart.privateName(typed_buffers, "_length");
  var _typedBuffer = dart.privateName(typed_buffers, "_typedBuffer");
  var _defaultValue = dart.privateName(typed_buffers, "_defaultValue");
  var _createBuffer = dart.privateName(typed_buffers, "_createBuffer");
  var _createBiggerBuffer = dart.privateName(typed_buffers, "_createBiggerBuffer");
  var _grow = dart.privateName(typed_buffers, "_grow");
  var _add = dart.privateName(typed_buffers, "_add");
  var _addAll = dart.privateName(typed_buffers, "_addAll");
  var _insertKnownLength = dart.privateName(typed_buffers, "_insertKnownLength");
  var _ensureCapacity = dart.privateName(typed_buffers, "_ensureCapacity");
  var _setRange = dart.privateName(typed_buffers, "_setRange");
  const _is__TypedDataBuffer_default = Symbol('_is__TypedDataBuffer_default');
  typed_buffers._TypedDataBuffer$ = dart.generic(E => {
    var IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    var _TypedDataBufferOfE = () => (_TypedDataBufferOfE = dart.constFn(typed_buffers._TypedDataBuffer$(E)))();
    class _TypedDataBuffer extends collection.ListBase$(E) {
      get [_typedBuffer]() {
        return typed_data.TypedData.as(this[_buffer]);
      }
      get length() {
        return this[_length];
      }
      _get(index) {
        if (dart.notNull(index) >= dart.notNull(this.length)) dart.throw(new core.IndexError.new(index, this));
        return this[_buffer][$_get](index);
      }
      _set(index, value$) {
        let value = value$;
        E._check(value);
        if (dart.notNull(index) >= dart.notNull(this.length)) dart.throw(new core.IndexError.new(index, this));
        this[_buffer][$_set](index, value);
        return value$;
      }
      set length(newLength) {
        if (dart.notNull(newLength) < dart.notNull(this[_length])) {
          let defaultValue = this[_defaultValue];
          for (let i = newLength; dart.notNull(i) < dart.notNull(this[_length]); i = dart.notNull(i) + 1) {
            this[_buffer][$_set](i, defaultValue);
          }
        } else if (dart.notNull(newLength) > dart.notNull(this[_buffer][$length])) {
          let newBuffer = null;
          if (this[_buffer][$length] === 0) {
            newBuffer = this[_createBuffer](newLength);
          } else {
            newBuffer = this[_createBiggerBuffer](newLength);
          }
          newBuffer[$setRange](0, this[_length], this[_buffer]);
          this[_buffer] = newBuffer;
        }
        this[_length] = newLength;
      }
      [_add](value) {
        let t0;
        if (this[_length] == this[_buffer][$length]) this[_grow](this[_length]);
        this[_buffer][$_set]((t0 = this[_length], this[_length] = dart.notNull(t0) + 1, t0), value);
      }
      add(value) {
        E._check(value);
        this[_add](value);
      }
      addAll(values, start = 0, end = null) {
        IterableOfE()._check(values);
        core.RangeError.checkNotNegative(start, "start");
        if (end != null && dart.notNull(start) > dart.notNull(end)) {
          dart.throw(new core.RangeError.range(end, start, null, "end"));
        }
        this[_addAll](values, start, end);
      }
      insertAll(index, values, start = 0, end = null) {
        let t0;
        IterableOfE()._check(values);
        core.RangeError.checkValidIndex(index, this, "index", dart.notNull(this[_length]) + 1);
        core.RangeError.checkNotNegative(start, "start");
        if (end != null) {
          if (dart.notNull(start) > dart.notNull(end)) {
            dart.throw(new core.RangeError.range(end, start, null, "end"));
          }
          if (start == end) return;
        }
        if (index == this[_length]) {
          this[_addAll](values, start, end);
          return;
        }
        if (end == null && core.List.is(values)) {
          end = values[$length];
        }
        if (end != null) {
          this[_insertKnownLength](index, values, start, end);
          return;
        }
        let writeIndex = this[_length];
        let skipCount = start;
        for (let value of values) {
          if (dart.notNull(skipCount) > 0) {
            skipCount = dart.notNull(skipCount) - 1;
            continue;
          }
          if (writeIndex == this[_buffer][$length]) {
            this[_grow](writeIndex);
          }
          this[_buffer][$_set]((t0 = writeIndex, writeIndex = dart.notNull(t0) + 1, t0), value);
        }
        if (dart.notNull(skipCount) > 0) {
          dart.throw(new core.StateError.new("Too few elements"));
        }
        if (end != null && dart.notNull(writeIndex) < dart.notNull(end)) {
          dart.throw(new core.RangeError.range(end, start, writeIndex, "end"));
        }
        typed_buffers._TypedDataBuffer._reverse(this[_buffer], index, this[_length]);
        typed_buffers._TypedDataBuffer._reverse(this[_buffer], this[_length], writeIndex);
        typed_buffers._TypedDataBuffer._reverse(this[_buffer], index, writeIndex);
        this[_length] = writeIndex;
        return;
      }
      static _reverse(buffer, start, end) {
        end = dart.notNull(end) - 1;
        while (dart.notNull(start) < dart.notNull(end)) {
          let first = buffer[$_get](start);
          let last = buffer[$_get](end);
          buffer[$_set](end, first);
          buffer[$_set](start, last);
          start = dart.notNull(start) + 1;
          end = dart.notNull(end) - 1;
        }
      }
      [_addAll](values, start = 0, end = null) {
        if (core.List.is(values)) end == null ? end = values[$length] : null;
        if (end != null) {
          this[_insertKnownLength](this[_length], values, start, end);
          return;
        }
        let i = 0;
        for (let value of values) {
          if (i >= dart.notNull(start)) this.add(value);
          i = i + 1;
        }
        if (i < dart.notNull(start)) dart.throw(new core.StateError.new("Too few elements"));
      }
      [_insertKnownLength](index, values, start, end) {
        if (core.List.is(values)) {
          end == null ? end = values[$length] : null;
          if (dart.notNull(start) > dart.notNull(values[$length]) || dart.notNull(end) > dart.notNull(values[$length])) {
            dart.throw(new core.StateError.new("Too few elements"));
          }
        } else {
          if (!(end != null)) dart.assertFailed(null, "org-dartlang-app:///packages/typed_data/typed_buffers.dart", 210, 14, "end != null");
        }
        let valuesLength = dart.notNull(end) - dart.notNull(start);
        let newLength = dart.notNull(this[_length]) + valuesLength;
        this[_ensureCapacity](newLength);
        this[_buffer][$setRange](dart.notNull(index) + valuesLength, dart.notNull(this[_length]) + valuesLength, this[_buffer], index);
        this[_buffer][$setRange](index, dart.notNull(index) + valuesLength, values, start);
        this[_length] = newLength;
      }
      insert(index, element) {
        E._check(element);
        if (dart.notNull(index) < 0 || dart.notNull(index) > dart.notNull(this[_length])) {
          dart.throw(new core.RangeError.range(index, 0, this[_length]));
        }
        if (dart.notNull(this[_length]) < dart.notNull(this[_buffer][$length])) {
          this[_buffer][$setRange](dart.notNull(index) + 1, dart.notNull(this[_length]) + 1, this[_buffer], index);
          this[_buffer][$_set](index, element);
          this[_length] = dart.notNull(this[_length]) + 1;
          return;
        }
        let newBuffer = this[_createBiggerBuffer](null);
        newBuffer[$setRange](0, index, this[_buffer]);
        newBuffer[$setRange](dart.notNull(index) + 1, dart.notNull(this[_length]) + 1, this[_buffer], index);
        newBuffer[$_set](index, element);
        this[_length] = dart.notNull(this[_length]) + 1;
        this[_buffer] = newBuffer;
      }
      [_ensureCapacity](requiredCapacity) {
        if (dart.notNull(requiredCapacity) <= dart.notNull(this[_buffer][$length])) return;
        let newBuffer = this[_createBiggerBuffer](requiredCapacity);
        newBuffer[$setRange](0, this[_length], this[_buffer]);
        this[_buffer] = newBuffer;
      }
      [_createBiggerBuffer](requiredCapacity) {
        let newLength = dart.notNull(this[_buffer][$length]) * 2;
        if (requiredCapacity != null && dart.notNull(newLength) < dart.notNull(requiredCapacity)) {
          newLength = requiredCapacity;
        } else if (dart.notNull(newLength) < 8) {
          newLength = 8;
        }
        return this[_createBuffer](newLength);
      }
      [_grow](length) {
        let t0;
        this[_buffer] = (t0 = this[_createBiggerBuffer](null), t0[$setRange](0, length, this[_buffer]), t0);
      }
      setRange(start, end, source, skipCount = 0) {
        IterableOfE()._check(source);
        if (dart.notNull(end) > dart.notNull(this[_length])) dart.throw(new core.RangeError.range(end, 0, this[_length]));
        this[_setRange](start, end, source, skipCount);
      }
      [_setRange](start, end, source, skipCount) {
        if (_TypedDataBufferOfE().is(source)) {
          this[_buffer][$setRange](start, end, source[_buffer], skipCount);
        } else {
          this[_buffer][$setRange](start, end, source, skipCount);
        }
      }
      get elementSizeInBytes() {
        return this[_typedBuffer][$elementSizeInBytes];
      }
      get lengthInBytes() {
        return dart.notNull(this[_length]) * dart.notNull(this[_typedBuffer][$elementSizeInBytes]);
      }
      get offsetInBytes() {
        return this[_typedBuffer][$offsetInBytes];
      }
      get buffer() {
        return this[_typedBuffer][$buffer];
      }
    }
    (_TypedDataBuffer.new = function(buffer) {
      this[_buffer] = buffer;
      this[_length] = buffer[$length];
      ;
    }).prototype = _TypedDataBuffer.prototype;
    dart.addTypeTests(_TypedDataBuffer);
    _TypedDataBuffer.prototype[_is__TypedDataBuffer_default] = true;
    dart.setMethodSignature(_TypedDataBuffer, () => ({
      __proto__: dart.getMethods(_TypedDataBuffer.__proto__),
      _get: dart.fnType(E, [core.int]),
      [$_get]: dart.fnType(E, [core.int]),
      _set: dart.fnType(dart.void, [core.int, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.int, core.Object]),
      [_add]: dart.fnType(dart.void, [E]),
      addAll: dart.fnType(dart.void, [core.Object], [core.int, core.int]),
      [$addAll]: dart.fnType(dart.void, [core.Object], [core.int, core.int]),
      insertAll: dart.fnType(dart.void, [core.int, core.Object], [core.int, core.int]),
      [$insertAll]: dart.fnType(dart.void, [core.int, core.Object], [core.int, core.int]),
      [_addAll]: dart.fnType(dart.void, [core.Iterable$(E)], [core.int, core.int]),
      [_insertKnownLength]: dart.fnType(dart.void, [core.int, core.Iterable$(E), core.int, core.int]),
      [_ensureCapacity]: dart.fnType(dart.void, [core.int]),
      [_createBiggerBuffer]: dart.fnType(core.List$(E), [core.int]),
      [_grow]: dart.fnType(dart.void, [core.int]),
      [_setRange]: dart.fnType(dart.void, [core.int, core.int, core.Iterable$(E), core.int])
    }));
    dart.setGetterSignature(_TypedDataBuffer, () => ({
      __proto__: dart.getGetters(_TypedDataBuffer.__proto__),
      [_typedBuffer]: typed_data.TypedData,
      length: core.int,
      [$length]: core.int,
      elementSizeInBytes: core.int,
      lengthInBytes: core.int,
      offsetInBytes: core.int,
      buffer: typed_data.ByteBuffer
    }));
    dart.setSetterSignature(_TypedDataBuffer, () => ({
      __proto__: dart.getSetters(_TypedDataBuffer.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(_TypedDataBuffer, "package:typed_data/typed_buffers.dart");
    dart.setFieldSignature(_TypedDataBuffer, () => ({
      __proto__: dart.getFields(_TypedDataBuffer.__proto__),
      [_buffer]: dart.fieldType(core.List$(E)),
      [_length]: dart.fieldType(core.int)
    }));
    dart.defineExtensionMethods(_TypedDataBuffer, [
      '_get',
      '_set',
      'add',
      'addAll',
      'insertAll',
      'insert',
      'setRange'
    ]);
    dart.defineExtensionAccessors(_TypedDataBuffer, ['length']);
    return _TypedDataBuffer;
  });
  typed_buffers._TypedDataBuffer = typed_buffers._TypedDataBuffer$();
  dart.defineLazy(typed_buffers._TypedDataBuffer, {
    /*typed_buffers._TypedDataBuffer.INITIAL_LENGTH*/get INITIAL_LENGTH() {
      return 8;
    }
  });
  dart.addTypeTests(typed_buffers._TypedDataBuffer, _is__TypedDataBuffer_default);
  typed_buffers._IntBuffer = class _IntBuffer extends typed_buffers._TypedDataBuffer$(core.int) {
    get [_defaultValue]() {
      return 0;
    }
  };
  (typed_buffers._IntBuffer.new = function(buffer) {
    typed_buffers._IntBuffer.__proto__.new.call(this, buffer);
    ;
  }).prototype = typed_buffers._IntBuffer.prototype;
  dart.addTypeTests(typed_buffers._IntBuffer);
  dart.setGetterSignature(typed_buffers._IntBuffer, () => ({
    __proto__: dart.getGetters(typed_buffers._IntBuffer.__proto__),
    [_defaultValue]: core.int
  }));
  dart.setLibraryUri(typed_buffers._IntBuffer, "package:typed_data/typed_buffers.dart");
  typed_buffers._FloatBuffer = class _FloatBuffer extends typed_buffers._TypedDataBuffer$(core.double) {
    get [_defaultValue]() {
      return 0.0;
    }
  };
  (typed_buffers._FloatBuffer.new = function(buffer) {
    typed_buffers._FloatBuffer.__proto__.new.call(this, buffer);
    ;
  }).prototype = typed_buffers._FloatBuffer.prototype;
  dart.addTypeTests(typed_buffers._FloatBuffer);
  dart.setGetterSignature(typed_buffers._FloatBuffer, () => ({
    __proto__: dart.getGetters(typed_buffers._FloatBuffer.__proto__),
    [_defaultValue]: core.double
  }));
  dart.setLibraryUri(typed_buffers._FloatBuffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Uint8Buffer = class Uint8Buffer extends typed_buffers._IntBuffer {
    [_createBuffer](size) {
      return _native_typed_data.NativeUint8List.new(size);
    }
  };
  (typed_buffers.Uint8Buffer.new = function(initialLength = 0) {
    typed_buffers.Uint8Buffer.__proto__.new.call(this, _native_typed_data.NativeUint8List.new(initialLength));
    ;
  }).prototype = typed_buffers.Uint8Buffer.prototype;
  dart.addTypeTests(typed_buffers.Uint8Buffer);
  dart.setMethodSignature(typed_buffers.Uint8Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Uint8Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Uint8List, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Uint8Buffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Int8Buffer = class Int8Buffer extends typed_buffers._IntBuffer {
    [_createBuffer](size) {
      return _native_typed_data.NativeInt8List.new(size);
    }
  };
  (typed_buffers.Int8Buffer.new = function(initialLength = 0) {
    typed_buffers.Int8Buffer.__proto__.new.call(this, _native_typed_data.NativeInt8List.new(initialLength));
    ;
  }).prototype = typed_buffers.Int8Buffer.prototype;
  dart.addTypeTests(typed_buffers.Int8Buffer);
  dart.setMethodSignature(typed_buffers.Int8Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Int8Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Int8List, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Int8Buffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Uint8ClampedBuffer = class Uint8ClampedBuffer extends typed_buffers._IntBuffer {
    [_createBuffer](size) {
      return _native_typed_data.NativeUint8ClampedList.new(size);
    }
  };
  (typed_buffers.Uint8ClampedBuffer.new = function(initialLength = 0) {
    typed_buffers.Uint8ClampedBuffer.__proto__.new.call(this, _native_typed_data.NativeUint8ClampedList.new(initialLength));
    ;
  }).prototype = typed_buffers.Uint8ClampedBuffer.prototype;
  dart.addTypeTests(typed_buffers.Uint8ClampedBuffer);
  dart.setMethodSignature(typed_buffers.Uint8ClampedBuffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Uint8ClampedBuffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Uint8ClampedList, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Uint8ClampedBuffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Uint16Buffer = class Uint16Buffer extends typed_buffers._IntBuffer {
    [_createBuffer](size) {
      return _native_typed_data.NativeUint16List.new(size);
    }
  };
  (typed_buffers.Uint16Buffer.new = function(initialLength = 0) {
    typed_buffers.Uint16Buffer.__proto__.new.call(this, _native_typed_data.NativeUint16List.new(initialLength));
    ;
  }).prototype = typed_buffers.Uint16Buffer.prototype;
  dart.addTypeTests(typed_buffers.Uint16Buffer);
  dart.setMethodSignature(typed_buffers.Uint16Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Uint16Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Uint16List, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Uint16Buffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Int16Buffer = class Int16Buffer extends typed_buffers._IntBuffer {
    [_createBuffer](size) {
      return _native_typed_data.NativeInt16List.new(size);
    }
  };
  (typed_buffers.Int16Buffer.new = function(initialLength = 0) {
    typed_buffers.Int16Buffer.__proto__.new.call(this, _native_typed_data.NativeInt16List.new(initialLength));
    ;
  }).prototype = typed_buffers.Int16Buffer.prototype;
  dart.addTypeTests(typed_buffers.Int16Buffer);
  dart.setMethodSignature(typed_buffers.Int16Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Int16Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Int16List, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Int16Buffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Uint32Buffer = class Uint32Buffer extends typed_buffers._IntBuffer {
    [_createBuffer](size) {
      return _native_typed_data.NativeUint32List.new(size);
    }
  };
  (typed_buffers.Uint32Buffer.new = function(initialLength = 0) {
    typed_buffers.Uint32Buffer.__proto__.new.call(this, _native_typed_data.NativeUint32List.new(initialLength));
    ;
  }).prototype = typed_buffers.Uint32Buffer.prototype;
  dart.addTypeTests(typed_buffers.Uint32Buffer);
  dart.setMethodSignature(typed_buffers.Uint32Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Uint32Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Uint32List, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Uint32Buffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Int32Buffer = class Int32Buffer extends typed_buffers._IntBuffer {
    [_createBuffer](size) {
      return _native_typed_data.NativeInt32List.new(size);
    }
  };
  (typed_buffers.Int32Buffer.new = function(initialLength = 0) {
    typed_buffers.Int32Buffer.__proto__.new.call(this, _native_typed_data.NativeInt32List.new(initialLength));
    ;
  }).prototype = typed_buffers.Int32Buffer.prototype;
  dart.addTypeTests(typed_buffers.Int32Buffer);
  dart.setMethodSignature(typed_buffers.Int32Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Int32Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Int32List, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Int32Buffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Uint64Buffer = class Uint64Buffer extends typed_buffers._IntBuffer {
    [_createBuffer](size) {
      return typed_data.Uint64List.new(size);
    }
  };
  (typed_buffers.Uint64Buffer.new = function(initialLength = 0) {
    typed_buffers.Uint64Buffer.__proto__.new.call(this, typed_data.Uint64List.new(initialLength));
    ;
  }).prototype = typed_buffers.Uint64Buffer.prototype;
  dart.addTypeTests(typed_buffers.Uint64Buffer);
  dart.setMethodSignature(typed_buffers.Uint64Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Uint64Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Uint64List, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Uint64Buffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Int64Buffer = class Int64Buffer extends typed_buffers._IntBuffer {
    [_createBuffer](size) {
      return typed_data.Int64List.new(size);
    }
  };
  (typed_buffers.Int64Buffer.new = function(initialLength = 0) {
    typed_buffers.Int64Buffer.__proto__.new.call(this, typed_data.Int64List.new(initialLength));
    ;
  }).prototype = typed_buffers.Int64Buffer.prototype;
  dart.addTypeTests(typed_buffers.Int64Buffer);
  dart.setMethodSignature(typed_buffers.Int64Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Int64Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Int64List, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Int64Buffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Float32Buffer = class Float32Buffer extends typed_buffers._FloatBuffer {
    [_createBuffer](size) {
      return _native_typed_data.NativeFloat32List.new(size);
    }
  };
  (typed_buffers.Float32Buffer.new = function(initialLength = 0) {
    typed_buffers.Float32Buffer.__proto__.new.call(this, _native_typed_data.NativeFloat32List.new(initialLength));
    ;
  }).prototype = typed_buffers.Float32Buffer.prototype;
  dart.addTypeTests(typed_buffers.Float32Buffer);
  dart.setMethodSignature(typed_buffers.Float32Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Float32Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Float32List, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Float32Buffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Float64Buffer = class Float64Buffer extends typed_buffers._FloatBuffer {
    [_createBuffer](size) {
      return _native_typed_data.NativeFloat64List.new(size);
    }
  };
  (typed_buffers.Float64Buffer.new = function(initialLength = 0) {
    typed_buffers.Float64Buffer.__proto__.new.call(this, _native_typed_data.NativeFloat64List.new(initialLength));
    ;
  }).prototype = typed_buffers.Float64Buffer.prototype;
  dart.addTypeTests(typed_buffers.Float64Buffer);
  dart.setMethodSignature(typed_buffers.Float64Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Float64Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Float64List, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Float64Buffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Int32x4Buffer = class Int32x4Buffer extends typed_buffers._TypedDataBuffer$(typed_data.Int32x4) {
    get [_defaultValue]() {
      return typed_buffers.Int32x4Buffer._zero;
    }
    [_createBuffer](size) {
      return new _native_typed_data.NativeInt32x4List.new(size);
    }
  };
  (typed_buffers.Int32x4Buffer.new = function(initialLength = 0) {
    typed_buffers.Int32x4Buffer.__proto__.new.call(this, new _native_typed_data.NativeInt32x4List.new(initialLength));
    ;
  }).prototype = typed_buffers.Int32x4Buffer.prototype;
  dart.addTypeTests(typed_buffers.Int32x4Buffer);
  dart.setMethodSignature(typed_buffers.Int32x4Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Int32x4Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Int32x4List, [core.int])
  }));
  dart.setGetterSignature(typed_buffers.Int32x4Buffer, () => ({
    __proto__: dart.getGetters(typed_buffers.Int32x4Buffer.__proto__),
    [_defaultValue]: typed_data.Int32x4
  }));
  dart.setLibraryUri(typed_buffers.Int32x4Buffer, "package:typed_data/typed_buffers.dart");
  dart.defineLazy(typed_buffers.Int32x4Buffer, {
    /*typed_buffers.Int32x4Buffer._zero*/get _zero() {
      return new _native_typed_data.NativeInt32x4.new(0, 0, 0, 0);
    },
    set _zero(_) {}
  });
  typed_buffers.Float32x4Buffer = class Float32x4Buffer extends typed_buffers._TypedDataBuffer$(typed_data.Float32x4) {
    get [_defaultValue]() {
      return new _native_typed_data.NativeFloat32x4.zero();
    }
    [_createBuffer](size) {
      return new _native_typed_data.NativeFloat32x4List.new(size);
    }
  };
  (typed_buffers.Float32x4Buffer.new = function(initialLength = 0) {
    typed_buffers.Float32x4Buffer.__proto__.new.call(this, new _native_typed_data.NativeFloat32x4List.new(initialLength));
    ;
  }).prototype = typed_buffers.Float32x4Buffer.prototype;
  dart.addTypeTests(typed_buffers.Float32x4Buffer);
  dart.setMethodSignature(typed_buffers.Float32x4Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Float32x4Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Float32x4List, [core.int])
  }));
  dart.setGetterSignature(typed_buffers.Float32x4Buffer, () => ({
    __proto__: dart.getGetters(typed_buffers.Float32x4Buffer.__proto__),
    [_defaultValue]: typed_data.Float32x4
  }));
  dart.setLibraryUri(typed_buffers.Float32x4Buffer, "package:typed_data/typed_buffers.dart");
  dart.trackLibraries("packages/typed_data/typed_buffers", {
    "package:typed_data/typed_buffers.dart": typed_buffers
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["typed_buffers.dart"],"names":[],"mappings":"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","file":"typed_buffers.ddc.js"}');
  // Exports:
  return {
    typed_buffers: typed_buffers
  };
});

//# sourceMappingURL=typed_buffers.ddc.js.map
