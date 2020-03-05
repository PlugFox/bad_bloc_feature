define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/gestures/arena', 'packages/flutter/src/painting/_network_image_web', 'packages/bad_bloc_feature/ticker', 'packages/flutter/src/rendering/animated_size', 'packages/bloc/bloc'], function(dart_sdk, packages__flutter__material, packages__flutter__src__widgets__actions, packages__flutter__src__gestures__arena, packages__flutter__src__painting___network_image_web, packages__bad_bloc_feature__ticker, packages__flutter__src__rendering__animated_size, packages__bloc__bloc) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = packages__flutter__material.src__material__app;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const divider = packages__flutter__material.src__material__divider;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const list_tile = packages__flutter__material.src__material__list_tile;
  const radio = packages__flutter__material.src__material__radio;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const safe_area = packages__flutter__src__widgets__actions.src__widgets__safe_area;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const single_child_scroll_view = packages__flutter__src__widgets__actions.src__widgets__single_child_scroll_view;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const async = packages__flutter__src__widgets__actions.src__widgets__async;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const binding = packages__flutter__src__widgets__actions.src__widgets__binding;
  const recognizer = packages__flutter__src__gestures__arena.src__gestures__recognizer;
  const basic_types = packages__flutter__src__painting___network_image_web.src__painting__basic_types;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const ticker = packages__bad_bloc_feature__ticker.ticker;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const bloc_supervisor = packages__bloc__bloc.src__bloc_supervisor;
  var main = Object.create(dart.library);
  var $toString = dartx.toString;
  var $padLeft = dartx.padLeft;
  var BuildContextToWidget = () => (BuildContextToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext])))();
  var StreamBuilderOfSwitchStatus = () => (StreamBuilderOfSwitchStatus = dart.constFn(async.StreamBuilder$(ticker.SwitchStatus)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var AsyncSnapshotOfSwitchStatus = () => (AsyncSnapshotOfSwitchStatus = dart.constFn(async.AsyncSnapshot$(ticker.SwitchStatus)))();
  var BuildContextAndAsyncSnapshotOfSwitchStatusToRaisedButton = () => (BuildContextAndAsyncSnapshotOfSwitchStatusToRaisedButton = dart.constFn(dart.fnType(raised_button.RaisedButton, [framework.BuildContext, AsyncSnapshotOfSwitchStatus()])))();
  var StreamBuilderOfMutableTick = () => (StreamBuilderOfMutableTick = dart.constFn(async.StreamBuilder$(ticker.MutableTick)))();
  var AsyncSnapshotOfMutableTick = () => (AsyncSnapshotOfMutableTick = dart.constFn(async.AsyncSnapshot$(ticker.MutableTick)))();
  var BuildContextAndAsyncSnapshotOfMutableTickToText = () => (BuildContextAndAsyncSnapshotOfMutableTickToText = dart.constFn(dart.fnType(text.Text, [framework.BuildContext, AsyncSnapshotOfMutableTick()])))();
  var JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  var StreamBuilderOfTickTypeInstalled = () => (StreamBuilderOfTickTypeInstalled = dart.constFn(async.StreamBuilder$(ticker.TickTypeInstalled)))();
  var RadioOfTickType = () => (RadioOfTickType = dart.constFn(radio.Radio$(ticker.TickType)))();
  var TickTypeTovoid = () => (TickTypeTovoid = dart.constFn(dart.fnType(dart.void, [ticker.TickType])))();
  var AsyncSnapshotOfTickTypeInstalled = () => (AsyncSnapshotOfTickTypeInstalled = dart.constFn(async.AsyncSnapshot$(ticker.TickTypeInstalled)))();
  var BuildContextAndAsyncSnapshotOfTickTypeInstalledToColumn = () => (BuildContextAndAsyncSnapshotOfTickTypeInstalledToColumn = dart.constFn(dart.fnType(basic.Column, [framework.BuildContext, AsyncSnapshotOfTickTypeInstalled()])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: ui.Locale.prototype,
        [Locale__countryCode]: "US",
        [Locale_scriptCode]: null,
        [Locale__languageCode]: "en"
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], ui.Locale);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: app.ThemeMode.prototype,
        [_name]: "ThemeMode.system",
        index: 0
      });
    },
    get C4() {
      return C4 = dart.constList([], navigator.NavigatorObserver);
    },
    get C5() {
      return C5 = dart.constMap(core.String, BuildContextToWidget(), []);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_name$]: "DragStartBehavior.start",
        index: 1
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: main.TickerWidget.prototype,
        [Widget_key]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C12 || CT.C12,
        [SizedBox_height]: 300,
        [SizedBox_width]: 480
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name$0]: "Axis.vertical",
        index: 1
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: single_child_scroll_view.SingleChildScrollView.prototype,
        [Widget_key]: null,
        [SingleChildScrollView_dragStartBehavior]: C7 || CT.C7,
        [SingleChildScrollView_child]: C11 || CT.C11,
        [SingleChildScrollView_physics]: null,
        [SingleChildScrollView_primary]: true,
        [SingleChildScrollView_controller]: null,
        [SingleChildScrollView_padding]: null,
        [SingleChildScrollView_reverse]: false,
        [SingleChildScrollView_scrollDirection]: C13 || CT.C13
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: basic.Center.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C10 || CT.C10,
        [Align_heightFactor]: null,
        [Align_widthFactor]: null,
        [Align_alignment]: C14 || CT.C14
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: safe_area.SafeArea.prototype,
        [Widget_key]: null,
        [SafeArea_child]: C9 || CT.C9,
        [SafeArea_maintainBottomViewPadding]: false,
        [SafeArea_minimum]: C15 || CT.C15,
        [SafeArea_bottom]: true,
        [SafeArea_right]: true,
        [SafeArea_top]: true,
        [SafeArea_left]: true
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: scaffold.Scaffold.prototype,
        [Widget_key]: null,
        [Scaffold_drawerEdgeDragWidth]: null,
        [Scaffold_drawerDragStartBehavior]: C7 || CT.C7,
        [Scaffold_primary]: true,
        [Scaffold_resizeToAvoidBottomInset]: null,
        [Scaffold_resizeToAvoidBottomPadding]: null,
        [Scaffold_bottomSheet]: null,
        [Scaffold_bottomNavigationBar]: null,
        [Scaffold_backgroundColor]: null,
        [Scaffold_drawerScrimColor]: null,
        [Scaffold_endDrawer]: null,
        [Scaffold_drawer]: null,
        [Scaffold_persistentFooterButtons]: null,
        [Scaffold_floatingActionButtonAnimator]: null,
        [Scaffold_floatingActionButtonLocation]: null,
        [Scaffold_floatingActionButton]: null,
        [Scaffold_body]: C8 || CT.C8,
        [Scaffold_appBar]: null,
        [Scaffold_extendBodyBehindAppBar]: false,
        [Scaffold_extendBody]: false
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: app.MaterialApp.prototype,
        [Widget_key]: null,
        [MaterialApp_debugShowMaterialGrid]: false,
        [MaterialApp_actions]: null,
        [MaterialApp_shortcuts]: null,
        [MaterialApp_debugShowCheckedModeBanner]: true,
        [MaterialApp_showSemanticsDebugger]: false,
        [MaterialApp_checkerboardOffscreenLayers]: false,
        [MaterialApp_checkerboardRasterCacheImages]: false,
        [MaterialApp_showPerformanceOverlay]: false,
        [MaterialApp_supportedLocales]: C1 || CT.C1,
        [MaterialApp_localeResolutionCallback]: null,
        [MaterialApp_localeListResolutionCallback]: null,
        [MaterialApp_localizationsDelegates]: null,
        [MaterialApp_locale]: null,
        [MaterialApp_color]: null,
        [MaterialApp_themeMode]: C3 || CT.C3,
        [MaterialApp_darkTheme]: null,
        [MaterialApp_theme]: null,
        [MaterialApp_onGenerateTitle]: null,
        [MaterialApp_title]: "Bad BLoC feature",
        [MaterialApp_builder]: null,
        [MaterialApp_navigatorObservers]: C4 || CT.C4,
        [MaterialApp_onUnknownRoute]: null,
        [MaterialApp_onGenerateInitialRoutes]: null,
        [MaterialApp_onGenerateRoute]: null,
        [MaterialApp_initialRoute]: null,
        [MaterialApp_routes]: C5 || CT.C5,
        [MaterialApp_home]: C6 || CT.C6,
        [MaterialApp_navigatorKey]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "ticker",
        [_Location_column]: 35,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/bad_bloc_feature/main.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/bad_bloc_feature/main.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: divider.Divider.prototype,
        [Widget_key]: null,
        [Divider_color]: C26 || CT.C26,
        [Divider_endIndent]: null,
        [Divider_indent]: null,
        [Divider_thickness]: null,
        [Divider_height]: 5
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C25 || CT.C25,
        [SizedBox_height]: 25,
        [SizedBox_width]: 480
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 57,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/bad_bloc_feature/main.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4286545919.0
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4286578559.0
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: ticker.StopTicker.prototype
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: ticker.StartTicker.prototype
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C37 || CT.C37, C38 || CT.C38], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/bad_bloc_feature/main.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "stream",
        [_Location_column]: 13,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 13,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41, C42 || CT.C42], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/bad_bloc_feature/main.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45, C46 || CT.C46, C47 || CT.C47], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/bad_bloc_feature/main.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 20,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 44,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textScaleFactor",
        [_Location_column]: 73,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50, C51 || CT.C51, C52 || CT.C52], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/bad_bloc_feature/main.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "stream",
        [_Location_column]: 13,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 13,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/bad_bloc_feature/main.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59, C60 || CT.C60, C61 || CT.C61], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 100,
        [_Location_file]: "org-dartlang-app:///packages/bad_bloc_feature/main.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 7,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 7,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64, C65 || CT.C65, C66 || CT.C66], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/bad_bloc_feature/main.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: 0.75,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Mutable states"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 19,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 19,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 19,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70, C71 || CT.C71, C72 || CT.C72], widget_inspector._Location);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C69 || CT.C69,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 139,
        [_Location_file]: "org-dartlang-app:///packages/bad_bloc_feature/main.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 17,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 17,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75, C76 || CT.C76], widget_inspector._Location);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C74 || CT.C74,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 137,
        [_Location_file]: "org-dartlang-app:///packages/bad_bloc_feature/main.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 15,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.constList([C79 || CT.C79, C80 || CT.C80], widget_inspector._Location);
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 135,
        [_Location_file]: "org-dartlang-app:///packages/bad_bloc_feature/main.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: 0.75,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Immutable/Constant/Singleton/Void/Enum states"
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 19,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 19,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 19,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.constList([C84 || CT.C84, C85 || CT.C85, C86 || CT.C86], widget_inspector._Location);
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C83 || CT.C83,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 151,
        [_Location_file]: "org-dartlang-app:///packages/bad_bloc_feature/main.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 17,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 17,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.constList([C89 || CT.C89, C90 || CT.C90], widget_inspector._Location);
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C88 || CT.C88,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 149,
        [_Location_file]: "org-dartlang-app:///packages/bad_bloc_feature/main.dart"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 15,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.constList([C93 || CT.C93, C94 || CT.C94], widget_inspector._Location);
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 147,
        [_Location_file]: "org-dartlang-app:///packages/bad_bloc_feature/main.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 11,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.constList([C97 || CT.C97, C98 || CT.C98, C99 || CT.C99], widget_inspector._Location);
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C96 || CT.C96,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 131,
        [_Location_file]: "org-dartlang-app:///packages/bad_bloc_feature/main.dart"
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "stream",
        [_Location_column]: 7,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.constList([C102 || CT.C102, C103 || CT.C103], widget_inspector._Location);
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C101 || CT.C101,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/bad_bloc_feature/main.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: main.App.prototype,
        [Widget_key]: null
      });
    }
  });
  var Widget_key = dart.privateName(framework, "Widget.key");
  var MaterialApp_debugShowMaterialGrid = dart.privateName(app, "MaterialApp.debugShowMaterialGrid");
  var MaterialApp_actions = dart.privateName(app, "MaterialApp.actions");
  var MaterialApp_shortcuts = dart.privateName(app, "MaterialApp.shortcuts");
  var MaterialApp_debugShowCheckedModeBanner = dart.privateName(app, "MaterialApp.debugShowCheckedModeBanner");
  var MaterialApp_showSemanticsDebugger = dart.privateName(app, "MaterialApp.showSemanticsDebugger");
  var MaterialApp_checkerboardOffscreenLayers = dart.privateName(app, "MaterialApp.checkerboardOffscreenLayers");
  var MaterialApp_checkerboardRasterCacheImages = dart.privateName(app, "MaterialApp.checkerboardRasterCacheImages");
  var MaterialApp_showPerformanceOverlay = dart.privateName(app, "MaterialApp.showPerformanceOverlay");
  var Locale__countryCode = dart.privateName(ui, "Locale._countryCode");
  var Locale_scriptCode = dart.privateName(ui, "Locale.scriptCode");
  var Locale__languageCode = dart.privateName(ui, "Locale._languageCode");
  var C2;
  var C1;
  var MaterialApp_supportedLocales = dart.privateName(app, "MaterialApp.supportedLocales");
  var MaterialApp_localeResolutionCallback = dart.privateName(app, "MaterialApp.localeResolutionCallback");
  var MaterialApp_localeListResolutionCallback = dart.privateName(app, "MaterialApp.localeListResolutionCallback");
  var MaterialApp_localizationsDelegates = dart.privateName(app, "MaterialApp.localizationsDelegates");
  var MaterialApp_locale = dart.privateName(app, "MaterialApp.locale");
  var MaterialApp_color = dart.privateName(app, "MaterialApp.color");
  var _name = dart.privateName(app, "_name");
  var C3;
  var MaterialApp_themeMode = dart.privateName(app, "MaterialApp.themeMode");
  var MaterialApp_darkTheme = dart.privateName(app, "MaterialApp.darkTheme");
  var MaterialApp_theme = dart.privateName(app, "MaterialApp.theme");
  var MaterialApp_onGenerateTitle = dart.privateName(app, "MaterialApp.onGenerateTitle");
  var MaterialApp_title = dart.privateName(app, "MaterialApp.title");
  var MaterialApp_builder = dart.privateName(app, "MaterialApp.builder");
  var C4;
  var MaterialApp_navigatorObservers = dart.privateName(app, "MaterialApp.navigatorObservers");
  var MaterialApp_onUnknownRoute = dart.privateName(app, "MaterialApp.onUnknownRoute");
  var MaterialApp_onGenerateInitialRoutes = dart.privateName(app, "MaterialApp.onGenerateInitialRoutes");
  var MaterialApp_onGenerateRoute = dart.privateName(app, "MaterialApp.onGenerateRoute");
  var MaterialApp_initialRoute = dart.privateName(app, "MaterialApp.initialRoute");
  var C5;
  var MaterialApp_routes = dart.privateName(app, "MaterialApp.routes");
  var Scaffold_drawerEdgeDragWidth = dart.privateName(scaffold, "Scaffold.drawerEdgeDragWidth");
  var _name$ = dart.privateName(recognizer, "_name");
  var C7;
  var Scaffold_drawerDragStartBehavior = dart.privateName(scaffold, "Scaffold.drawerDragStartBehavior");
  var Scaffold_primary = dart.privateName(scaffold, "Scaffold.primary");
  var Scaffold_resizeToAvoidBottomInset = dart.privateName(scaffold, "Scaffold.resizeToAvoidBottomInset");
  var Scaffold_resizeToAvoidBottomPadding = dart.privateName(scaffold, "Scaffold.resizeToAvoidBottomPadding");
  var Scaffold_bottomSheet = dart.privateName(scaffold, "Scaffold.bottomSheet");
  var Scaffold_bottomNavigationBar = dart.privateName(scaffold, "Scaffold.bottomNavigationBar");
  var Scaffold_backgroundColor = dart.privateName(scaffold, "Scaffold.backgroundColor");
  var Scaffold_drawerScrimColor = dart.privateName(scaffold, "Scaffold.drawerScrimColor");
  var Scaffold_endDrawer = dart.privateName(scaffold, "Scaffold.endDrawer");
  var Scaffold_drawer = dart.privateName(scaffold, "Scaffold.drawer");
  var Scaffold_persistentFooterButtons = dart.privateName(scaffold, "Scaffold.persistentFooterButtons");
  var Scaffold_floatingActionButtonAnimator = dart.privateName(scaffold, "Scaffold.floatingActionButtonAnimator");
  var Scaffold_floatingActionButtonLocation = dart.privateName(scaffold, "Scaffold.floatingActionButtonLocation");
  var Scaffold_floatingActionButton = dart.privateName(scaffold, "Scaffold.floatingActionButton");
  var SingleChildScrollView_dragStartBehavior = dart.privateName(single_child_scroll_view, "SingleChildScrollView.dragStartBehavior");
  var C12;
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  var C11;
  var SingleChildScrollView_child = dart.privateName(single_child_scroll_view, "SingleChildScrollView.child");
  var SingleChildScrollView_physics = dart.privateName(single_child_scroll_view, "SingleChildScrollView.physics");
  var SingleChildScrollView_primary = dart.privateName(single_child_scroll_view, "SingleChildScrollView.primary");
  var SingleChildScrollView_controller = dart.privateName(single_child_scroll_view, "SingleChildScrollView.controller");
  var SingleChildScrollView_padding = dart.privateName(single_child_scroll_view, "SingleChildScrollView.padding");
  var SingleChildScrollView_reverse = dart.privateName(single_child_scroll_view, "SingleChildScrollView.reverse");
  var _name$0 = dart.privateName(basic_types, "_name");
  var C13;
  var SingleChildScrollView_scrollDirection = dart.privateName(single_child_scroll_view, "SingleChildScrollView.scrollDirection");
  var C10;
  var Align_heightFactor = dart.privateName(basic, "Align.heightFactor");
  var Align_widthFactor = dart.privateName(basic, "Align.widthFactor");
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var C14;
  var Align_alignment = dart.privateName(basic, "Align.alignment");
  var C9;
  var SafeArea_child = dart.privateName(safe_area, "SafeArea.child");
  var SafeArea_maintainBottomViewPadding = dart.privateName(safe_area, "SafeArea.maintainBottomViewPadding");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var C15;
  var SafeArea_minimum = dart.privateName(safe_area, "SafeArea.minimum");
  var SafeArea_bottom = dart.privateName(safe_area, "SafeArea.bottom");
  var SafeArea_right = dart.privateName(safe_area, "SafeArea.right");
  var SafeArea_top = dart.privateName(safe_area, "SafeArea.top");
  var SafeArea_left = dart.privateName(safe_area, "SafeArea.left");
  var C8;
  var Scaffold_body = dart.privateName(scaffold, "Scaffold.body");
  var Scaffold_appBar = dart.privateName(scaffold, "Scaffold.appBar");
  var Scaffold_extendBodyBehindAppBar = dart.privateName(scaffold, "Scaffold.extendBodyBehindAppBar");
  var Scaffold_extendBody = dart.privateName(scaffold, "Scaffold.extendBody");
  var C6;
  var MaterialApp_home = dart.privateName(app, "MaterialApp.home");
  var MaterialApp_navigatorKey = dart.privateName(app, "MaterialApp.navigatorKey");
  var C0;
  main.App = class App extends framework.StatelessWidget {
    build(context) {
      return C0 || CT.C0;
    }
  };
  (main.App.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.App.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.App.prototype;
  dart.addTypeTests(main.App);
  dart.setMethodSignature(main.App, () => ({
    __proto__: dart.getMethods(main.App.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.App, "package:bad_bloc_feature/main.dart");
  main.TickerWidget = class TickerWidget extends framework.StatefulWidget {
    createState() {
      return new main._TickerWidgetState.new();
    }
  };
  (main.TickerWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.TickerWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.TickerWidget.prototype;
  dart.addTypeTests(main.TickerWidget);
  dart.setMethodSignature(main.TickerWidget, () => ({
    __proto__: dart.getMethods(main.TickerWidget.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(main.TickerWidget, "package:bad_bloc_feature/main.dart");
  var _ticker = dart.privateName(main, "_ticker");
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C18;
  var C17;
  var C16;
  var C21;
  var C22;
  var C23;
  var C20;
  var C19;
  var Color_value = dart.privateName(ui, "Color.value");
  var C26;
  var Divider_color = dart.privateName(divider, "Divider.color");
  var Divider_endIndent = dart.privateName(divider, "Divider.endIndent");
  var Divider_indent = dart.privateName(divider, "Divider.indent");
  var Divider_thickness = dart.privateName(divider, "Divider.thickness");
  var Divider_height = dart.privateName(divider, "Divider.height");
  var C25;
  var C24;
  var C29;
  var C28;
  var C27;
  var C30;
  var C31;
  var C32;
  var C33;
  var C36;
  var C37;
  var C38;
  var C35;
  var C34;
  var C41;
  var C42;
  var C40;
  var C39;
  var C45;
  var C46;
  var C47;
  var C44;
  var C43;
  var _generateCurrentTime = dart.privateName(main, "_generateCurrentTime");
  var C50;
  var C51;
  var C52;
  var C49;
  var C48;
  var C55;
  var C56;
  var C54;
  var C53;
  var C59;
  var C60;
  var C61;
  var C58;
  var C57;
  var C64;
  var C65;
  var C66;
  var C63;
  var C62;
  main._TickerWidgetState = class _TickerWidgetState extends framework.State$(main.TickerWidget) {
    initState() {
      super.initState();
    }
    dispose() {
      this[_ticker].close();
      super.dispose();
    }
    build(context) {
      return new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 100.0, width: 480.0, child: new main.TickTypeSelector.new({ticker: this[_ticker], $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), C24 || CT.C24, new basic.SizedBox.new({height: 50.0, width: 480.0, child: new (StreamBuilderOfSwitchStatus()).new({stream: this[_ticker].whereState(ticker.SwitchStatus), builder: dart.fn((context, snapshot) => {
                let t0, t0$;
                return new raised_button.RaisedButton.new({child: new text.Text.new(ticker.Started.is((t0 = snapshot, t0 == null ? null : t0.data)) ? "Stop ticker" : "Start ticker", {$creationLocationd_0dea112b090073317d4: C27 || CT.C27}), color: ticker.Started.is((t0$ = snapshot, t0$ == null ? null : t0$.data)) ? C30 || CT.C30 : C31 || CT.C31, onPressed: dart.fn(() => {
                    let t0;
                    return ticker.Started.is((t0 = snapshot, t0 == null ? null : t0.data)) ? this[_ticker].add(C32 || CT.C32) : this[_ticker].add(C33 || CT.C33);
                  }, VoidTovoid()), $creationLocationd_0dea112b090073317d4: C34 || CT.C34});
              }, BuildContextAndAsyncSnapshotOfSwitchStatusToRaisedButton()), $creationLocationd_0dea112b090073317d4: C39 || CT.C39}), $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), C24 || CT.C24, new basic.SizedBox.new({height: 50.0, width: 480.0, child: new (StreamBuilderOfMutableTick()).new({stream: this[_ticker].whereState(ticker.MutableTick), builder: dart.fn((context, _) => new text.Text.new(this[_generateCurrentTime](), {textAlign: ui.TextAlign.center, textScaleFactor: 2.0, $creationLocationd_0dea112b090073317d4: C48 || CT.C48}), BuildContextAndAsyncSnapshotOfMutableTickToText()), $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), $creationLocationd_0dea112b090073317d4: C57 || CT.C57})]), $creationLocationd_0dea112b090073317d4: C62 || CT.C62});
    }
    [_generateCurrentTime]() {
      let _now = new core.DateTime.now();
      let hour = dart.toString(_now.hour)[$padLeft](2, "0");
      let minute = dart.toString(_now.minute)[$padLeft](2, "0");
      let second = dart.toString(_now.second)[$padLeft](2, "0");
      return hour + ":" + minute + ":" + second;
    }
  };
  (main._TickerWidgetState.new = function() {
    this[_ticker] = new ticker.Ticker.new();
    main._TickerWidgetState.__proto__.new.call(this);
    ;
  }).prototype = main._TickerWidgetState.prototype;
  dart.addTypeTests(main._TickerWidgetState);
  dart.setMethodSignature(main._TickerWidgetState, () => ({
    __proto__: dart.getMethods(main._TickerWidgetState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_generateCurrentTime]: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(main._TickerWidgetState, "package:bad_bloc_feature/main.dart");
  dart.setFieldSignature(main._TickerWidgetState, () => ({
    __proto__: dart.getFields(main._TickerWidgetState.__proto__),
    [_ticker]: dart.finalFieldType(ticker.Ticker)
  }));
  var Text_textHeightBehavior = dart.privateName(text, "Text.textHeightBehavior");
  var Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  var Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  var Text_maxLines = dart.privateName(text, "Text.maxLines");
  var Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  var Text_overflow = dart.privateName(text, "Text.overflow");
  var Text_softWrap = dart.privateName(text, "Text.softWrap");
  var Text_locale = dart.privateName(text, "Text.locale");
  var Text_textDirection = dart.privateName(text, "Text.textDirection");
  var Text_textAlign = dart.privateName(text, "Text.textAlign");
  var Text_strutStyle = dart.privateName(text, "Text.strutStyle");
  var Text_style = dart.privateName(text, "Text.style");
  var Text_textSpan = dart.privateName(text, "Text.textSpan");
  var Text_data = dart.privateName(text, "Text.data");
  var C67;
  var C70;
  var C71;
  var C72;
  var C69;
  var C68;
  var C75;
  var C76;
  var C74;
  var C73;
  var C79;
  var C80;
  var C78;
  var C77;
  var C81;
  var C84;
  var C85;
  var C86;
  var C83;
  var C82;
  var C89;
  var C90;
  var C88;
  var C87;
  var C93;
  var C94;
  var C92;
  var C91;
  var C97;
  var C98;
  var C99;
  var C96;
  var C95;
  var C102;
  var C103;
  var C101;
  var C100;
  var ticker$ = dart.privateName(main, "TickTypeSelector.ticker");
  main.TickTypeSelector = class TickTypeSelector extends framework.StatelessWidget {
    get ticker() {
      return this[ticker$];
    }
    set ticker(value) {
      super.ticker = value;
    }
    build(context) {
      return new (StreamBuilderOfTickTypeInstalled()).new({stream: this.ticker.whereState(ticker.TickTypeInstalled), builder: dart.fn((context, snapshot) => {
          let t0, t0$, t0$0, t0$1, t0$2, t0$3;
          return new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Expanded.new({flex: 1, child: new list_tile.ListTile.new({title: C67 || CT.C67, leading: new (RadioOfTickType()).new({value: ticker.TickType.mutable, groupValue: (t0$0 = (t0$ = (t0 = snapshot, t0 == null ? null : t0.data), t0$ == null ? null : t0$.tickType), t0$0 == null ? ticker.TickType.mutable : t0$0), onChanged: dart.fn(value => this.ticker.add(new ticker.SetTickType.new(value)), TickTypeTovoid()), $creationLocationd_0dea112b090073317d4: C68 || CT.C68}), $creationLocationd_0dea112b090073317d4: C73 || CT.C73}), $creationLocationd_0dea112b090073317d4: C77 || CT.C77}), new basic.Expanded.new({flex: 1, child: new list_tile.ListTile.new({title: C81 || CT.C81, leading: new (RadioOfTickType()).new({value: ticker.TickType.immutable, groupValue: (t0$3 = (t0$2 = (t0$1 = snapshot, t0$1 == null ? null : t0$1.data), t0$2 == null ? null : t0$2.tickType), t0$3 == null ? ticker.TickType.mutable : t0$3), onChanged: dart.fn(value => this.ticker.add(new ticker.SetTickType.new(value)), TickTypeTovoid()), $creationLocationd_0dea112b090073317d4: C82 || CT.C82}), $creationLocationd_0dea112b090073317d4: C87 || CT.C87}), $creationLocationd_0dea112b090073317d4: C91 || CT.C91})]), $creationLocationd_0dea112b090073317d4: C95 || CT.C95});
        }, BuildContextAndAsyncSnapshotOfTickTypeInstalledToColumn()), $creationLocationd_0dea112b090073317d4: C100 || CT.C100});
    }
  };
  (main.TickTypeSelector.new = function(opts) {
    let ticker = opts && 'ticker' in opts ? opts.ticker : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[ticker$] = ticker;
    main.TickTypeSelector.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.TickTypeSelector.prototype;
  dart.addTypeTests(main.TickTypeSelector);
  dart.setMethodSignature(main.TickTypeSelector, () => ({
    __proto__: dart.getMethods(main.TickTypeSelector.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.TickTypeSelector, "package:bad_bloc_feature/main.dart");
  dart.setFieldSignature(main.TickTypeSelector, () => ({
    __proto__: dart.getFields(main.TickTypeSelector.__proto__),
    ticker: dart.finalFieldType(ticker.Ticker)
  }));
  var C104;
  main.main = function main$() {
    bloc_supervisor.BlocSupervisor.delegate = new ticker.TickerDelegate.new();
    binding.runApp(C104 || CT.C104);
  };
  dart.trackLibraries("packages/bad_bloc_feature/main", {
    "package:bad_bloc_feature/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":"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","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
