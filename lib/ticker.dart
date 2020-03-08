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
  final TickType tickType;
  const BlocState(this.tickType);
}

@immutable
mixin SwitchStatus {}

@immutable
class Stopped extends BlocState with SwitchStatus {
  const Stopped(TickType tickType) : super(tickType);
  @override
  int get hashCode => 0;
  @override
  bool operator ==(Object obj) => obj is Stopped;
}

@immutable
class Started extends BlocState with SwitchStatus {
  const Started(TickType tickType) : super(tickType);
  @override
  int get hashCode => 0;
  @override
  bool operator ==(Object obj) => obj is Started;
}

@immutable
mixin Tick {}

@immutable
class ImmutableTick extends BlocState with Tick {
  ImmutableTick() : super(TickType.immutable);
}

@immutable
class TickTypeInstalled extends BlocState {
  const TickTypeInstalled(TickType tickType) : super(tickType);
}

class MutableTick extends BlocState with Tick {
  MutableTick() : super(TickType.mutable);
}

enum TickType {
  mutable,
  immutable,
}

/* BLoC */

///
class Ticker extends Bloc<BlocEvent, BlocState> {
  @override
  BlocState get initialState => const Stopped(TickType.mutable);

  StreamSubscription<int> _streamSubscription;

  Stream<State> whereState<State>() => whereType<State>();

  Ticker() {
    _streamSubscription = Stream<int>.periodic(const Duration(seconds: 1))
        .listen((tick) => add(const EmmitTick()))
          ..pause();
  }

  @override
  Stream<BlocState> mapEventToState(BlocEvent event) async* {
    if (event is EmmitTick) {
      yield _emmitTick();
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
    _streamSubscription.resume();
    yield Started(state.tickType);
  }

  Stream<BlocState> _stopTicker([BlocEvent _]) async* {
    _streamSubscription.pause();
    yield Stopped(state.tickType);
  }

  BlocState _emmitTick() {
    return state.tickType == TickType.mutable ? MutableTick() : ImmutableTick();
  }

  Stream<BlocState> _setTickType(SetTickType event) async* {
    yield TickTypeInstalled(event?.tickType ?? TickType.mutable);
  }

  @override
  Future<void> close() => Future.wait(<Future<void>>[
        _streamSubscription.cancel(),
        super.close(),
      ]);
}

class TickerDelegate extends BlocDelegate {
  @override
  void onEvent(Bloc bloc, Object event) {
    super.onEvent(bloc, event);
    print('Event ${event.toString()}');
  }

  @override
  void onTransition(Bloc bloc, Transition transition) {
    super.onTransition(bloc, transition);
    print(transition);
  }

  @override
  void onError(Bloc bloc, Object error, StackTrace stacktrace) {
    super.onError(bloc, error, stacktrace);
    print('Error \'${error.toString()}\' in BLoC \'${bloc.toString()}\'');
  }
}
