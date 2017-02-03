// Title Text.

var xTitleText		=	80 * wPixelPercent;
var yTitleText		=	150 * hPixelPercent;

// Round Rects.

var wRoundRect 		= 	245 * wPixelPercent;
var hRoundRect 		= 	110 * hPixelPercent;
var yRoundRect		=	200 * hPixelPercent;
var xRoundRects		=	[60, 370, 685, 1000, 1310];
var wBorderRect		= 	5 * wPixelPercent;

// Texts.
var txtTitles		=	["Crawling", "Indexing", "Ranking", "Presentation", "Potential Profit"];
var txtValues		=	["4,946 /", "1,224 /", "759 /", "1,521 /"];
var txtMoneys		=	["$31,783.88", "$18,322.472", "$17,200.68", "$50,106.352", "$134,614.06"];
var txtPercents		=	["1.71%", "4.03%", "6.07% (46)", "8.81% (134)"];
var txtNumbers		=	["(85)", "(49)"];

// Text Positions.
var xValueText		=	265;
var xMoneyText		=	265;
var xPercentTexts	=	[850, 850, 815, 875];
var xNumberTexts	=	[850, 850];

var yRoundText		=	265 * hPixelPercent;
var yValueText		=	420 * hPixelPercent;
var yMoneyTexts		=	[645, 645, 645, 645, 515];//455 * hPixelPercent;
var yPercentTexts	=	[400, 380, 550, 660];
var yNumberTexts	=	[635, 650];

// Text Sizes.
var percentTextSizes	=	[2, 2, 2.5, 2.5];

// Horizontal Arrows.
var wHorzArrow		=	66 * wPixelPercent;
var hHorzArrow		=	49 * hPixelPercent;
var xHorzArrows		=	[302, 616, 932, 1243];
var yHorzArrow		=	230 * hPixelPercent;
var ptHorzArrow		=	"0,0, 66,24, 0,49, 18,29, 5,29, 5,19, 18,19";

// Diagonal Arrows.
var wDiagArrow		=	84 * wPixelPercent;
var hDiagArrow		=	53 * hPixelPercent;
var xDiagArrows		=	[110, 400, 710, 1025, 1330];
var yDiagArrow		=	308 * hPixelPercent;
var ptDiagArrow		=	"0,0, 56,0, 65,10, 83,2, 73,53, 10,39, 26,29";

// Vertical Arrows.
var wVertArrow		=	81;
var hVertArrows		=	[47, 76, 100, 120];
var xVertArrows		=	[220, 555, 820, 1095];
var yVertArrow		=	485;
var ptVertArrows	=	[	"0,5, 20,5, 20,0, 60,0, 60,5, 80,5, 41,46",
							"0,31, 20,31, 20,0, 60,0, 60,31, 80,31, 41,75",
							"0,58, 20,58, 20,0, 60,0, 60,58, 80,58, 41,99",
							"0,80, 20,80, 20,0, 60,0, 60,80, 80,80, 41,119" ];

// Reverse Diagonal Arrow.
var wReDiagArrow	=	123 * wPixelPercent;
var hReDiagArrow	=	152 * hPixelPercent;
var xReDiagArrow	=	1390 * wPixelPercent;
var yReDiagArrow	=	485 * hPixelPercent;
var ptReDiagArrow	=	"0,106, 18,111, 79,0, 122,0, 57,122, 75,128, 19,151";

// Polygons.
var wPolygon		=	241 * wPixelPercent;
var hPolygon		=	119 * hPixelPercent;
var xPolygons		=	[140, 425, 745, 1060, 1365];
var yPolygon		=	370 * hPixelPercent;
var ptPolygon		=	"5,5, 197,5, 236,43, 236,114, 44,114, 6,75";
var wBorderPolygon	= 	5 / 241 * 100;

// Ellipse.
var wEllipse		=	80 * wPixelPercent;
var hEllipse		=	200 * hPixelPercent;
var xEllipse		=	206 * wPixelPercent;
var yEllipse		=	549 * hPixelPercent;
var wBorderEllipse	=	5 / 205 * 100;

//Cyllinders.
var wCyllinders		=	[260, 225, 290, 250];
var hCyllinders		=	[200, 155, 115, 55];
var xCyllinders		=	[245, 500, 716, 997];
var yCyllinders		=	[548, 573, 591, 621];
var cyllinderRadius	=	[80,205, 40,155, 40,115, 20,50];
var ptCyllinders	=	[ 	[5,5, 253,25, 253,180, 0,197],
							[1,1, 215,20, 215,132, 2,154],
							[2,2, 280,30, 280,85, 2,114],
							[3,0, 230,0, 235,5, 249,5, 249,50, 235,50, 230,54, 3,54] ];

//Tap
var wImage			=	217 * wPixelPercent;
var hImage			=	265 * hPixelPercent;
var xImage			=	1230 * wPixelPercent;
var yImage			=	557 * hPixelPercent;


var svgPolygons			=	[];
var svgHorzArrows		=	[];
var svgDiagArrows		=	[];
var svgVertArrows		=	[];
var svgCyllinders		=	[];