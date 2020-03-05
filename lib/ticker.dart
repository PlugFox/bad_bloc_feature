// Just for debug
// ignore_for_file: unawaited_futures, avoid_print
import 'dart:async';
import 'package:meta/meta.dart' show immutable;
import 'package:rxdart/rxdart.dart'; 
import 'package:bloc/bloc.dart';
export 'package:bloc/bloc.dart' show BlocSupervisor;


/* EVENTS */

@immutable
abstract class BlocEvent {
  const BlocEvent();
}

@immutable
class StopTicker extends BlocEvent {
  const StopTicker();
}

@immutable
class StartTicker extends BlocEvent {
  const StartTicker();
}

@immutable
class EmmitTick extends BlocEvent {
  const EmmitTick();
}

@immutable
class SetTickType extends BlocEvent {
  final TickType tickType;
  const SetTickType(this.tickType);
}

/* STATES */

@immutable
abstract class BlocState {
  const BlocState();
}

@immutable
mixin SwitchStatus {}

@immutable
class Stopped extends BlocState with SwitchStatus {
  const Stopped();
  @override
  int get hashCode => 0;
  @override
  bool operator ==(Object obj) => obj is Stopped;
}

@immutable
class Started extends BlocState with SwitchStatus {
  const Started();
  @override
  int get hashCode => 0;
  @override
  bool operator ==(Object obj) => obj is Started;
}

@immutable
mixin Tick {}

@immutable
class ImmutableTick extends BlocState with Tick {
  const ImmutableTick();
  @override
  int get hashCode => 0;
  @override
  bool operator ==(Object obj) => obj is Tick;
}

@immutable
class TickTypeInstalled extends BlocState {
  final TickType tickType;
  const TickTypeInstalled(this.tickType);
}

class MutableTick extends BlocState with Tick {
  MutableTick();
}

enum TickType {
  mutable,
  immutable,
}


/* BLoC */

///
class Ticker extends Bloc<BlocEvent, BlocState> {
  @override
  BlocState get initialState => const Stopped();

  Stream<State> whereState<State>() => whereType<State>();

  TickType _tickType = TickType.mutable;

  final StreamSubscription<EmmitTick> _controller = Stream<EmmitTick>
                                                    .periodic(const Duration(seconds: 1))
                                                    .asBroadcastStream()
                                                    .map<EmmitTick>((void _) => const EmmitTick())
                                                    .listen((event) {})
                                                    ..pause();
  Ticker() {
    _controller.onData(add);
  }

  @override
  Stream<BlocState> mapEventToState(BlocEvent event) async* {
    if (event is EmmitTick) {
      yield _emmitTick(event);
    } else if (event is StartTicker) {
      yield* _startTicker(event);
    } else if (event is StopTicker) {
      yield* _stopTicker(event);
    } else if (event is SetTickType) {
      yield* _setTickType(event);
    } else {
      throw UnsupportedError('Unknown event');
    }
  }

  Stream<BlocState> _startTicker([BlocEvent _]) async* {
    _controller.resume();
    yield const Started();
  }

  Stream<BlocState> _stopTicker([BlocEvent _]) async* {
    _controller.pause();
    yield const Stopped();
  }

  BlocState _emmitTick([BlocEvent _]) {
    print(' * tick');
    if (_tickType == TickType.mutable) {
      return MutableTick();
    } else {
      /// TODO: Problem with const/singleton/immutable/Enum/Void state
      /// sometimes we need duplicate values or void callbacks
      /// This is a problem with unexpected behavior:
      /// 
      /// ```
      /// _bindStateSubject() {
      ///   ...
      ///   if (state == nextState)
      ///   ...
      /// }
      /// ```
      /// 
      /// State checks should be done at the UI layer or in the reducer (StreamTransformer).
      /// 
      /// Also this check not working like `myBloc.whereType<MyState>().distinct()`
      ///  when one bloc contains many sorts of States for different StreamBuilder's
      ///  this condinion doesn't matter and does not play any significant role.
      /// 
      /// We need remove this check or may override them
      /// 
      return const ImmutableTick();
    }
  }

  Stream<BlocState> _setTickType(SetTickType event) async* {
    _tickType = event?.tickType ?? TickType.mutable;
    yield TickTypeInstalled(_tickType);
  }

  @override
  Future<void> close() =>
    Future.wait(<Future<void>>[
      _controller.cancel(),
      super.close(),
    ]);
}

///
class TickerDelegate extends BlocDelegate {
  @override
  void onEvent(Bloc bloc, Object event) {
    super.onEvent(bloc, event);
    print('Event ${event.toString()}');
  }

  @override
  void onTransition(Bloc bloc, Transition transition) {
    super.onTransition(bloc, transition);
    //print('Transition \'${transition.currentState.toString()} -> ${transition.nextState.toString()}\'');
  }

  @override
  void onError(Bloc bloc, Object error, StackTrace stacktrace) {
    super.onError(bloc, error, stacktrace);
    print('Error \'${error.toString()}\' in BLoC \'${bloc.toString()}\'');
  }
}