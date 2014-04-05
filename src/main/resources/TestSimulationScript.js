Simulation.addWatchLists([{name:"test_dummy", variablePaths:["dummyServices.dummyDouble", "dummyServices.dummyFloat"]}]);

Simulation.start();

Simulation.startWatch();

G.addWidget(Widgets.PLOT);

var options = {yaxis:{min:0,max:1},xaxis:{min:0,max:40}};

Plot1.setOptions(options)

Plot1.plotData("dummyDouble");

Plot1.setPosition(32,239);

Plot1.setSize(300, 400);

G.addWidget(Widgets.PLOT);

Plot2.setOptions(options)

Plot2.plotData("dummyFloat");

Plot2.setPosition(835,176);

G.wait(1000);

Plot1.plotData("dummyFloat");

var message = "Widget plotting dummydouble and dummyfloat variables";

G.showPopup(88, 133, message);

G.addWidget(Widgets.POPUP);

Popup2.setPosition(863, 69);

Popup2.setMessage("Widget plotting dummyFloat variables, with YAxis representing voltage measurements");