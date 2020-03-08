import 'package:bad_bloc_feature/ticker.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import 'ticker.dart';

void main() {
  BlocSupervisor.delegate = TickerDelegate();
  runApp(const App());
}

class App extends StatelessWidget {
  const App({Key key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Bad BLoC feature',
      home: Scaffold(
        body: SafeArea(
          child: Center(
            child: SingleChildScrollView(
              child: SizedBox(
                height: 300,
                width: 480,
                child: BlocProvider(
                  create: (_) => Ticker(),
                  child: const TickerWidget(),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class TickerWidget extends StatelessWidget {
  const TickerWidget({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) => Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          const SizedBox(
            height: 25,
            width: 480,
            child: Divider(
              height: 5,
              color: Color(0xFF000000),
            ),
          ),
          SizedBox(
            height: 50,
            width: 480,
            child: BlocBuilder<Ticker, BlocState>(
              builder: (BuildContext context, BlocState state) {
                return RaisedButton(
                  child:
                      Text((state is Started) ? 'Stop ticker' : 'Start ticker'),
                  color: (state is Started)
                      ? const Color(0xFF7F7FFF)
                      : const Color(0xFF7FFF7F),
                  onPressed: () => context.bloc<Ticker>().add(
                        state is Started
                            ? const StopTicker()
                            : const StartTicker(),
                      ),
                );
              },
            ),
          ),
          const SizedBox(
            height: 25,
            width: 480,
            child: Divider(
              height: 5,
              color: Color(0xFF000000),
            ),
          ),
          SizedBox(
            height: 50,
            width: 480,
            child: BlocBuilder<Ticker, BlocState>(
              builder: (BuildContext context, BlocState _) {
                return Text(
                  _generateCurrentTime(),
                  textAlign: TextAlign.center,
                  textScaleFactor: 2,
                );
              },
            ),
          ),
        ],
      );

  String _generateCurrentTime() {
    final DateTime _now = DateTime.now();
    final String hour = _now.hour.toString().padLeft(2, '0');
    final String minute = _now.minute.toString().padLeft(2, '0');
    final String second = _now.second.toString().padLeft(2, '0');
    return '$hour:$minute:$second';
  }
}
