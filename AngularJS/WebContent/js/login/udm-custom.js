// UDMv4.52 //
///////////////////////////////////////////////////////////////////
var um={'menuClasses':[],'itemClasses':[],'menuCode':[]};
///////////////////////////////////////////////////////////////////
//                                                               //
//  ULTIMATE DROP DOWN MENU Version 4.52 by Brothercake          //
//  http://www.udm4.com/                                         //
//                                                               //
//  This script may not be used or distributed without license   //
//                                                               //
///////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////
// CORE CONFIGURATION                                            //
///////////////////////////////////////////////////////////////////


//path to images folder
um.baseSRC = "Menu-resources/";


//initialization trigger element ["id"];
um.trigger = "";//change""


//navbar orientation
um.orientation = [
	"vertical",	// alignment ["vertical"|"horizontal"|"popup"|"expanding"]
	"left",		// h align ["left"|"right"]
	"top",		// v align ["top"|"bottom"]
	"relative",	// positioning ["relative"|"absolute"|"fixed"|"allfixed"]
	"0",	// x position ["em"|"ex"|"px"|"0"]
	"0",	// y position ["em"|"ex"|"px"|"0"]110px
	"100",		// z order ["0" to "10000"] (menu takes 20000 headroom)
	];


//navbar list output
um.list = [
	"flexible",	// horizontal overflow ["rigid"|"flexible"]
	"yes",		// -SPARE-
	"no", 		// -SPARE-
	];


//menu behaviors
um.behaviors = [
	"200",		// open timer ["milliseconds"|"0"]
	"500",		// close timer ["milliseconds"|"never"|"0"]
	"yes",		// reposition menus to stay inside the viewport ["yes"|"no"]
	"default",	// manage windowed controls for win/ie ["default","hide","iframe","none"]
	];


//reset behaviors
um.reset = [
	"no",		// reset from document mouse click ["yes"|"no"]
	"yes",		// reset from window resize ["yes"|"no"]
	"yes",		// reset from text resize ["yes"|"no"]
	"no",		// reset after following link ["yes"|"no"]
	];


//horizontal continuation strip
um.hstrip = [
	"none",		// background ["color"|"#hex"|"rgb()"|"image.gif"|"none"]
	"yes",		// copy navbar item margin-right to margin-bottom ["yes"|"no"]
	];




///////////////////////////////////////////////////////////////////
// MODULE SETTINGS                                               //
///////////////////////////////////////////////////////////////////


//keyboard navigation [comment out or remove if not using]
um.keys = [
	"38",		// up ["n"] ("38" = up arrow key)
	"39",		// right ["n"] ("39" = right arrow key)
	"40",		// down ["n"] ("40" = down arrow key)
	"37",		// left ["n"] ("37" = left arrow key)
	"123",		// hotkey ["n"] ("38" = F12]
	"none",		// hotkey modifier ["none"|"shiftKey"|"ctrlKey"|"altKey"|"metaKey"]
	"27",		// escape ["n"|"none"] ("27" = escape key)
	"document.getElementsByTagName('a')[0]", // exit focus ["js-expression"]
	];




///////////////////////////////////////////////////////////////////
// NAVBAR DEFAULT STYLES                                         //
///////////////////////////////////////////////////////////////////


//styles which apply to the navbar
um.navbar = [
	"-2",		// nav -> menu x-offset (+-)["n" pixels]
	"-1",		// nav -> menu y-offset (+-)["n" pixels]
	"160px",	// width ["em"|"ex"|"px"] (vertical navbar only - horizontal navbar items have "auto" width) ("%" doesn't work right)
	];


//styles which apply to each navbar item
um.items = [
	"1",		// margin between items ["n" pixels]
	"1",		// border size ["n" pixels] (single value only)
	"collapse",	// border collapse ["collapse"|"separate"] (only applies when margin = "0")
	"#2D70B7",// border colors ["color"|"#hex"|"rgb()"] (single, double or four values)
	"outset",	// border styles ["solid"|"double"|"dotted"|"dashed"|"groove"|"ridge"|"inset"|"outset"] (single, double or four values; be careful with using "none")
	"#a8cce2 #a8cce2 #a8cce2 #a8cce2",// hover/focus border colors ["color"|"#hex"|"rgb()"] (single, double or four values)
	"solid",	// hover/focus border styles ["solid"|"double"|"dotted"|"dashed"|"groove"|"ridge"|"inset"|"outset"] (single, double or four values; be careful with using "none")
	"",// visited border colors ["color"|"#hex"|"rgb()"] (single, double or four values)
	"outset",// visited border styles ["solid"|"double"|"dotted"|"dashed"|"groove"|"ridge"|"inset"|"outset"] (single, double or four values; be careful with using "none")
	"10",		// left/right padding ["n" pixels] (single value only)
	"5",		// top/bottom padding ["n" pixels] (single value only)
	"../../image/MenuBgNew.png",//"MenuBg.gif",//"menu_unselected.gif",//"#2D70B7",//"#ffc",		// background ["color"|"#hex"|"rgb()"|"image.gif"]
	"../../image/MenuBgNew_hover.png",		// hover/focus background ["color"|"#hex"|"rgb()"|"image.gif"]
	"../../image/MenuBgNew.png",//"MenuBgNew.png",//"MenuBg.gif",//"menu_unselected.gif",//"#2D70B7",// visited background ["color"|"#hex"|"rgb()"|"image.gif"]
	"70%",		// font size ["em"|"ex"|"%"|"px"|"pt"|"absolute-size"|"relative-size"]
	"tahoma,sans-serif",// font family ["font1,font2,font3"] (always end with a generic family name)
	"bold",		// font weight ["normal"|"bold"|"bolder"|"lighter|"100" to "900"]
	"none",		// text decoration ["none"|"underline"|"overline"|"line-through"]
	"left",		// text-align ["left"|"right"|"center"]
	"#000000",//"#ffffff",	// color ["color"|"#hex"|"rgb()"]
	"#ffffff",	// hover/focus color ["color"|"#hex"|"rgb()"]
	"#000000",//"#ffffff",	// visited color ["color"|"#hex"|"rgb()"]
	"normal",	// font-style ["normal"|"italic"|"oblique"]
	"normal",	// hover/focus font-style ["normal"|"italic"|"oblique"]
	"normal",	// visited font-style ["normal"|"italic"|"oblique"]
	"",// additional link CSS (careful!)
	"",		// additional hover/focus CSS (careful!)
	"",		// additional visited CSS (careful!)
	"right-white.gif",// menu indicator character/image ["text"|"image.gif"|"none"]
	"right-red.gif",// menu indicator rollover character/image ["text"|"image.gif"|"none"] (must be same type)
	"7",		// clipping width of indicator image ["n" pixels] (only when using image arrows)
	"..",		// alt text of indicator image ["text"] (only when using image arrows)
	];




///////////////////////////////////////////////////////////////////
// MENU DEFAULT STYLES                                           //
///////////////////////////////////////////////////////////////////


//styles which apply to each menu
um.menus = [
	"0",		// menu -> menu x-offset (+-)["n" pixels]
	"0",		// menu -> menu y-offset (+-)["n" pixels]
	"0",		// border size ["n" pixels] (single value only)
	"#bdb #080 #080 #bdb",// border colors ["color"|"#hex"|"rgb()"] (single, double or four values)
	"solid",	// border styles ["solid"|"double"|"dotted"|"dashed"|"groove"|"ridge"|"inset"|"outset"] (single, double or four values; be careful with using "none")
	"190px",	// width ["em"|"ex"|"px"]
	"0",		// padding ["n" pixels] (single value only)
	"#034E7B",//"#2D70B7",//"#f8fbd0",	// background ["color"|"#hex"|"rgb()"|"image.gif"]
	"",		// additional menu CSS (careful!) (you can use a transition here but *not* a static filter)
	"#f8fbd0",// shadow background ["color"|"#hex"|"rgb()"|"image.gif"|"none"]
	"2px",		// shadow offset (+-) ["em"|"px"|"pt"|"%"|"0"]
	"filter:alpha(opacity=50);",// additional shadow layer CSS (if you use a Microsoft.Shadow filter here then Win/IE5.5+ will do that *instead* of default shadow)
	];


//styles which apply to each menu item
um.menuItems = [
	"0",		// margin around items ["n" pixels] (single value only; margins are like table cellspacing)
	"1",		// border size ["n" pixels] (single value only)
	"separate",	// border collapse ["collapse"|"separate"] (only applies when margin = "0")
	"#ffffff",//"#f8fbd0",	// border colors ["color"|"#hex"|"rgb()"] (single, double or four values)
	"outset",	// border styles ["solid"|"double"|"dotted"|"dashed"|"groove"|"ridge"|"inset"|"outset"] (single, double or four values; be careful with using "none")
	"#aca",		// hover/focus border colors ["color"|"#hex"|"rgb()"] (single, double or four values)
	"outset",	// hover/focus border styles ["solid"|"double"|"dotted"|"dashed"|"groove"|"ridge"|"inset"|"outset"] (single, double or four values; be careful with using "none")
	"#ffffff",	// visited border colors ["color"|"#hex"|"rgb()"] (single, double or four values)
	"outset",	// visited border styles ["solid"|"double"|"dotted"|"dashed"|"groove"|"ridge"|"inset"|"outset"] (single, double or four values; be careful with using "none")
	"10",		// left/right padding ["n" pixels] (single value only)
	"5",		// top/bottom padding ["n" pixels] (single value only)
	"../../image/MenuBgNew.png",//"#2D70B7",//"menu_unselected.gif",//sub-menu background
	"#ecefc6",	// hover/focus background ["color"|"#hex"|"rgb()"|"image.gif"]
	
	
	"../../image/MenuBgNew.png",//"#2D70B7",//"menu_unselected.gif",// visited background ["color"|"#hex"|"rgb()"|"image.gif"]
      //"#034E7B",//"#2D70B7",//"menu_unselected.gif",// visited background ["color"|"#hex"|"rgb()"|"image.gif"]
	"70%",		// font size ["em"|"ex"|"%"|"px"|"pt"|"absolute-size"|"relative-size"]
	"tahoma,sans-serif",// font family ["font1,font2,font3"] (always end with a generic family name)
	"bold",	// font weight ["normal"|"bold"|"bolder"|"lighter|"100" to "900"]
	"none",		// text decoration ["none"|"underline"|"overline"|"line-through"]
	"left",		// text-align ["left"|"right"|"center"]
	"#ffffff",//"#060",		// color ["color"|"#hex"|"rgb()"]
	"#b05010",		// hover/focus color ["color"|"#hex"|"rgb()"]
	"#ffffff",		// visited color ["color"|"#hex"|"rgb()"]
	"normal",	// font-style ["normal"|"italic"|"oblique"]
	"normal",	// hover/focus font-style ["normal"|"italic"|"oblique"]
	"normal",	// visited font-style ["normal"|"italic"|"oblique"]
	"",		// additional link CSS (careful!)
	"",		// additional hover/focus CSS (careful!)
	"",		// additional visited CSS (careful!)
	"right-white.gif",// submenu indicator character/image ["text"|"image.gif"|"none"]
	"right-black.gif",// submenu indicator rollover character/image ["text"|"image.gif"|"none"] (must be the same type)
	"3",		// clipping width of indicator image ["n" pixels] (only when using image arrows)
	"..",		// alt text of indicator image ["text"] (only when using image arrows)
	];




///////////////////////////////////////////////////////////////////
// MENU CLASSES [comment out or remove if not using]             //
///////////////////////////////////////////////////////////////////


//classes which apply to menus [optional]
um.menuClasses["orangeMenu"] = [
	"#fdcb95 #a97742 #a97742 #fdcb95",// border colors ["color"|"#hex"|"rgb()"]
	"solid",	// border styles ["solid"|"double"|"dotted"|"dashed"|"groove"|"ridge"|"inset"|"outset"] (single, double or four values; be careful with using "none")
	"8em",		// width ["em"|"ex"|"px"]
	"#2D70B7",		// background ["color"|"#hex"|"rgb()"|"image.gif"]
	"",		// additional menu CSS (careful!) (you can use a transition here but *not* a static filter)
	"#2D70B7",//"orangeshadow.png",// shadow background ["color"|"#hex"|"rgb()"|"image.gif"|"none"]
	"2px",		// shadow offset (+-) ["em"|"px"|"pt"|"%"|"0"]
	"filter:alpha(opacity=50);", // additional shadow layer CSS (if you use a Microsoft.Shadow filter here then Win/IE5.5+ will do that *instead* of default shadow)
	];


//classes which apply to menu items [optional]
um.itemClasses["orangeMenuItem"] = [
	"#fec",		// border colors ["color"|"#hex"|"rgb()"] (single, double or four values)
	"solid",	// border styles ["solid"|"double"|"dotted"|"dashed"|"groove"|"ridge"|"inset"|"outset"] (single, double or four values; be careful with using "none")
	"#edbb85",	// hover/focus border colors ["color"|"#hex"|"rgb()"] (single, double or four values)
	"solid",	// hover/focus border styles ["solid"|"double"|"dotted"|"dashed"|"groove"|"ridge"|"inset"|"outset"] (single, double or four values; be careful with using "none")
	"#fec",		// visited border colors ["color"|"#hex"|"rgb()"] (single, double or four values)
	"solid",	// visited border styles ["solid"|"double"|"dotted"|"dashed"|"groove"|"ridge"|"inset"|"outset"] (single, double or four values; be careful with using "none")
	"#2D70B7",//"#fec",		// background ["color"|"#hex"|"rgb()"|"image.gif"]
	"#f8fbd0",	// hover/focus background ["color"|"#hex"|"rgb()"|"image.gif"]
	"#fec",		// visited background ["color"|"#hex"|"rgb()"|"image.gif"]
	"70%",		// font size ["em"|"ex"|"%"|"px"|"pt"|"absolute-size"|"relative-size"]
	"tahoma,sans-serif",// font family ["font1,font2,font3"] (always end with a generic family name)
	"normal",	// font weight ["normal"|"bold"|"bolder"|"lighter|"100" to "900"]
	"none",		// text decoration ["none"|"underline"|"overline"|"line-through"]
	"left",		// text-align ["left"|"right"|"center"]
	"#ffffff",	// color ["color"|"#hex"|"rgb()"]
	"#5656bd",	// hover/focus color ["color"|"#hex"|"rgb()"]
	"#2D70B7",	// visited color ["color"|"#hex"|"rgb()"]
	"normal",	// font-style ["normal"|"italic"|"oblique"]
	"normal",	// hover/focus font-style ["normal"|"italic"|"oblique"]
	"normal",	// visited font-style ["normal"|"italic"|"oblique"]
	"",		// additional link CSS (careful!)
	"",		// additional hover/focus CSS (careful!)
	"",		// additional visited CSS (careful!)
	"right-purple.gif",// submenu indicator character/image ["text"|"image.gif"|"none"] (must be the same type as default submenu indicator)
	"right-blue.gif",// submenu indicator rollover character/image ["text"|"image.gif"|"none"] (must be the same type)
	"..",		// alt text of indicator image  ["text"] (only when using image arrow)
	];




///////////////////////////////////////////////////////////////////
// DYNAMIC MENUS                                                 //
///////////////////////////////////////////////////////////////////




