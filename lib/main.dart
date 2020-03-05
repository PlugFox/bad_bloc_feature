import 'package:bad_bloc_feature/ticker.dart';
import 'package:flutter/material.dart';

import 'ticker.dart';


void main() {
  BlocSupervisor.delegate = TickerDelegate();
  runApp(const App());
}

class App extends StatelessWidget {
  const App({Key key}) : super(key: key);
  @override
  Widget build(BuildContext context) =>
    const MaterialApp(
      title: 'Bad BLoC feature',
      home: Scaffold(
        body: SafeArea(
          child: Center(
            child: SingleChildScrollView(
              child: SizedBox(
                height: 300,
                width: 480,
                child: TickerWidget(),
              ),
            ),
          ),
        ),
      ),
    );
}


class TickerWidget extends StatefulWidget {
  const TickerWidget({Key key}) : super(key: key);
  @override
  State<StatefulWidget> createState() => _TickerWidgetState();  
}

class _TickerWidgetState extends State<TickerWidget> {
  final Ticker _ticker = Ticker();



  @override
  void initState() {
    super.initState();
  }
  
  @override
  void dispose() {
    _ticker.close();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) =>
    Column(
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        SizedBox(
          height: 100,
          width: 480,
          child: TickTypeSelector(ticker: _ticker,),
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
          child: StreamBuilder<SwitchStatus>(
            stream: _ticker.whereState<SwitchStatus>(),
            builder: (BuildContext context, AsyncSnapshot<SwitchStatus> snapshot) =>
              RaisedButton(
                child: Text((snapshot?.data is Started) ? 'Stop ticker' : 'Start ticker'),
                color: (snapshot?.data is Started) ? const Color(0xFF7F7FFF) : const Color(0xFF7FFF7F),
                onPressed: () => 
                  (snapshot?.data is Started) 
                  ? _ticker.add(const StopTicker()) 
                  : _ticker.add(const StartTicker()),
              ),
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
          child: StreamBuilder<MutableTick>(
            stream: _ticker.whereState<MutableTick>(),
            builder: (BuildContext context, AsyncSnapshot<MutableTick> _) =>
              Text(_generateCurrentTime(), textAlign: TextAlign.center, textScaleFactor: 2,),
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

class TickTypeSelector extends StatelessWidget {
  final Ticker ticker;

  TickTypeSelector({this.ticker, Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) =>
    StreamBuilder<TickTypeInstalled>(
      stream: ticker.whereState<TickTypeInstalled>(),
      builder: (BuildContext context, AsyncSnapshot<TickTypeInstalled> snapshot) =>
        Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Expanded(
              flex: 1,
              child: ListTile(
                title: const Text('Mutable states', textScaleFactor: .75,),
                leading: Radio(
                  value: TickType.mutable,
                  groupValue: snapshot?.data?.tickType ?? TickType.mutable,
                  onChanged: (TickType value) =>
                    ticker.add(SetTickType(value)),
                ),
              ),
            ),
            Expanded(
              flex: 1,
              child: ListTile(
                title: const Text('Immutable/Constant/Singleton/Void/Enum states', textScaleFactor: .75,),
                leading: Radio(
                  value: TickType.immutable,
                  groupValue: snapshot?.data?.tickType ?? TickType.mutable,
                  onChanged: (TickType value) =>
                    ticker.add(SetTickType(value)),
                ),
              ),
            ),
          ],
        ),
    );
}