(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCC16D").s().p("AgIBTIgLgBQgQgEgKgNIgEgFQgKgQAFgUIAShGQAFgTARgKIAGgDQANgGAQAEQATAEAKARQAKARgFATIgSBGQgEAQgNAKQgMAKgQAAg");
	this.shape.setTransform(-0.0027,-0.005);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-5.6,-8.3,11.3,16.6), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCC16D").s().p("Ag6A7QgPgNAAgVQAAgTAPgNIA0gzQAMgOAUAAQATAAAOAOQAPANAAAVQAAATgPANIgzAzQgNAOgUAAQgTAAgOgOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-7.3,-7.3,14.7,14.6), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCC16D").s().p("AhEAqQgOgOAAgTQAAgQAKgNQAKgNAQgEIBGgRQATgFARAKQARALAFATQAEATgKAQQgKARgTAEIhHASQgEABgHAAQgUAAgNgOg");
	this.shape.setTransform(0.0175,0.0052);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-8.3,-5.6,16.700000000000003,11.3), null);


(lib.bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EghJAcyMAAAg5jMBCTAAAMAAAA5jg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-212.2,-184.2,424.5,368.5), null);


// stage content:
(lib.lawBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Default:0,startHover:3,stop:10,endHover:11,"stop":18,startClick:19,"stop":44,endClick:45};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,10,18,44,62];
	// timeline functions:
	this.frame_0 = function() {
		function onClick() {
			window.parent.postMessage("clicked", '*');
			if (clicked) {
				lawBtn.gotoAndPlay('endClick');
			} else {
				lawBtn.gotoAndPlay('startClick');
			};
			clicked = !clicked;
		}
		
		function onEnter() {
		if (!clicked) {
			lawBtn.gotoAndPlay('startHover');		
			}
		}
		
		function onLeave() {
			if (!clicked) {
			lawBtn.gotoAndPlay('endHover');		
			}
		}
		this.stop();
		var clicked = false;
		var lawBtn = this;
		stage.enableMouseOver(20);
		
		exportRoot.bg_mc.addEventListener('click', onClick);
		exportRoot.bg_mc.addEventListener('mouseover',onEnter);
		exportRoot.bg_mc.addEventListener('mouseout',onLeave);
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		this.stop();
	}
	this.frame_62 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(8).call(this.frame_18).wait(26).call(this.frame_44).wait(18).call(this.frame_62).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6C3328").s().p("AnkKfIiNg6QghgNgOghQgOghANghQAGgQANgMIRnxnQAZgZAkAAQAjAAAaAZQANANAFAQIA6CMQAOAkgHAmQgIAngbAbIvbPcQgbAbgnAIQgNACgNAAQgYAAgYgJg");
	this.shape.setTransform(402.722,247.2395,0.8855,0.8855,1.9473);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#873F30").s().p("Ao2KhQghgOgNghIg5iNQgPgkAIgmQAIgmAbgcIPbvbQAcgbAmgIQAmgHAkAOICNA6IAAAAQAQAHAMAMQAZAZAAAkQAAAjgZAaIxmRmQgNANgPAGQgRAGgQAAQgRAAgRgHg");
	this.shape_1.setTransform(350.5929,191.4699,0.8855,0.8855,1.9473);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCA62F").s().p("AruHNIS7y8IEjEiIy8S8g");
	this.shape_2.setTransform(388.7671,232.3423,0.8855,0.8855,1.9473);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCC16D").s().p("At8E/IS7y8II+I/Iy7S8g");
	this.shape_3.setTransform(376.673,219.3052,0.8855,0.8855,1.9473);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6C3328").s().p("AooI6IgRgSQgzgyAAhIQAAhHAzgzINtttQAzgzBHAAQBIAAAyAzIASARQAzAzAABHQAABIgzAyItuNuQgyAzhIAAQhHAAgzgzg");
	this.shape_4.setTransform(445.8147,293.3139,0.8855,0.8855,1.9473);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#873F30").s().p("AooI6IgSgRQgxgzAAhIQAAhHAxgyINvtvQAygyBIABQBHgBAyAyIASASQAyAzABBIQgBBHgyAyItuNuQgyAyhHAAQhIAAgzgyg");
	this.shape_5.setTransform(307.5513,145.3636,0.8855,0.8855,1.9473);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A34F41").s().p("AqQCSIMisiIH/H/IsiMig");
	this.shape_6.setTransform(424.5677,270.64,0.8855,0.8855,1.9473);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BA5D4F").s().p("AqQCSIMisiIH/H/IsiMig");
	this.shape_7.setTransform(328.7968,168.0817,0.8855,0.8855,1.9473);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A34F41").s().p("Ag6C2IisitQAxAvBEAAQBHAAAxgyQAygxAAhGQAAhEgvgxICrCrQAyAxAABGQABBGgyAyIgBABQgxAyhHAAIgBAAQhEAAgygxg");
	this.shape_8.setTransform(271.9873,326.5113,0.8855,0.8855,1.9473);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BA5D4F").s().p("AgEDsIjmjmQgygxAAhGQAAhHAygyQAygyBHAAQBGAAAxAyIDmDmQAxAygBBHQgBBGgyAxQgyAxhFAAQhFAAgxgxg");
	this.shape_9.setTransform(267.276,321.4445,0.8855,0.8855,1.9473);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6C3328").s().p("AmhFBIFkljQAfgfAAgsQAAgsgfgfIg5g4IC7jgIFdFdIqzJEg");
	this.shape_10.setTransform(304.7641,290.5339,0.8855,0.8855,1.9473);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#873F30").s().p("AnQDkIJEq0IFdFdIq0JEg");
	this.shape_11.setTransform(300.6267,290.3932,0.8855,0.8855,1.9473);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6C3328").s().p("Au6OOQgvgugTg+QBIAYBKgSQBLgSA3g2IY368ICuCuI43a8IAAAAQhQBPhwAAQhwAAhQhPg");
	this.shape_12.setTransform(194.8873,393.0777,0.8855,0.8855,1.9473);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#873F30").s().p("Ar/QEQhxgEhMhTQhMhTAFhwQAFhxBShMIa04wID8D8I4wa0IgQAQQhOBHhpAAIgMAAg");
	this.shape_13.setTransform(194.395,389.6388,0.8855,0.8855,1.9473);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13,p:{rotation:1.9473,x:194.395,y:389.6388,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_12,p:{rotation:1.9473,x:194.8873,y:393.0777,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_11,p:{rotation:1.9473,x:300.6267,y:290.3932,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_10,p:{rotation:1.9473,x:304.7641,y:290.5339,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_9,p:{rotation:1.9473,x:267.276,y:321.4445,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_8,p:{rotation:1.9473,x:271.9873,y:326.5113,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_7,p:{rotation:1.9473,x:328.7968,y:168.0817,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_6,p:{rotation:1.9473,x:424.5677,y:270.64,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_5,p:{rotation:1.9473,x:307.5513,y:145.3636,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_4,p:{rotation:1.9473,x:445.8147,y:293.3139,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_3,p:{rotation:1.9473,x:376.673,y:219.3052,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_2,p:{rotation:1.9473,x:388.7671,y:232.3423,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_1,p:{rotation:1.9473,x:350.5929,y:191.4699,scaleX:0.8855,scaleY:0.8855}},{t:this.shape,p:{rotation:1.9473,x:402.722,y:247.2395,scaleX:0.8855,scaleY:0.8855}}]},27).to({state:[{t:this.shape_13,p:{rotation:6.593,x:183.7529,y:386.4103,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_12,p:{rotation:6.593,x:183.965,y:389.8778,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_11,p:{rotation:6.593,x:297.6706,y:296.0977,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_10,p:{rotation:6.593,x:301.7829,y:296.573,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_9,p:{rotation:6.593,x:261.9155,y:324.3449,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_8,p:{rotation:6.593,x:266.2008,y:329.7765,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_7,p:{rotation:6.593,x:335.6535,y:176.4732,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_6,p:{rotation:6.593,x:422.8004,y:286.4482,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_5,p:{rotation:6.593,x:316.3184,y:152.1097,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_4,p:{rotation:6.593,x:442.1406,y:310.7678,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_3,p:{rotation:6.593,x:379.2223,y:231.4045,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_2,p:{rotation:6.593,x:390.2204,y:245.378,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_1,p:{rotation:6.593,x:355.4831,y:201.5492,scaleX:0.8855,scaleY:0.8855}},{t:this.shape,p:{rotation:6.593,x:402.9225,y:261.356,scaleX:0.8855,scaleY:0.8855}}]},1).to({state:[{t:this.shape_13,p:{rotation:13.4139,x:169.8239,y:377.9066,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_12,p:{rotation:13.4139,x:169.6227,y:381.3746,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_11,p:{rotation:13.4139,x:293.6576,y:301.7649,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_10,p:{rotation:13.4139,x:297.6842,y:302.7252,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_9,p:{rotation:13.4139,x:254.8019,y:325.5649,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_8,p:{rotation:13.4139,x:258.4118,y:331.4668,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_7,p:{rotation:13.4139,x:345.5774,y:187.5014,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_6,p:{rotation:13.4139,x:419.0442,y:307.0445,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_5,p:{rotation:13.4139,x:329.2731,y:161.0148,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_4,p:{rotation:13.4139,x:435.3587,y:333.4881,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_3,p:{rotation:13.4139,x:382.3129,y:247.2166,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_2,p:{rotation:13.4139,x:391.5733,y:262.3969,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_1,p:{rotation:13.4139,x:362.288,y:214.7542,scaleX:0.8855,scaleY:0.8855}},{t:this.shape,p:{rotation:13.4139,x:402.2875,y:279.7699,scaleX:0.8855,scaleY:0.8855}}]},1).to({state:[{t:this.shape_13,p:{rotation:21.412,x:157.956,y:342.9108,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_12,p:{rotation:21.412,x:157.2743,y:346.3169,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_11,p:{rotation:21.412,x:291.1726,y:284.7431,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_10,p:{rotation:21.412,x:295.0263,y:286.2542,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_9,p:{rotation:21.412,x:249.3856,y:302.9043,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_8,p:{rotation:21.412,x:252.1389,y:309.2507,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_7,p:{rotation:21.412,x:358.4825,y:178.8208,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_6,p:{rotation:21.412,x:414.5985,y:307.4165,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_5,p:{rotation:21.412,x:346.0229,y:150.3247,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_4,p:{rotation:21.412,x:427.0743,y:335.8714,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_3,p:{rotation:21.412,x:386.5504,y:243.0631,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_2,p:{rotation:21.412,x:393.6082,y:259.3834,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_1,p:{rotation:21.412,x:371.238,y:208.132,scaleX:0.8854,scaleY:0.8854}},{t:this.shape,p:{rotation:21.412,x:401.8005,y:278.0772,scaleX:0.8854,scaleY:0.8854}}]},1).to({state:[{t:this.shape_13,p:{rotation:26.6039,x:158.9847,y:322.0205,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_12,p:{rotation:26.6039,x:157.9976,y:325.3509,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_11,p:{rotation:26.6039,x:296.9149,y:276.1477,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_10,p:{rotation:26.6039,x:300.6159,y:278.0014,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_9,p:{rotation:26.6039,x:253.6569,y:290.4526,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_8,p:{rotation:26.6039,x:255.8246,y:297.022,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_7,p:{rotation:26.6039,x:373.5318,y:176.7537,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_6,p:{rotation:26.6039,x:417.7794,y:309.8964,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_5,p:{rotation:26.6039,x:363.7022,y:147.2478,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_4,p:{rotation:26.6039,x:427.6288,y:339.3627,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_3,p:{rotation:26.6039,x:395.6705,y:243.2706,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_2,p:{rotation:26.6039,x:401.2223,y:260.1622,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_1,p:{rotation:26.6039,x:383.5822,y:207.0981,scaleX:0.8854,scaleY:0.8854}},{t:this.shape,p:{rotation:26.6039,x:407.6891,y:279.5201,scaleX:0.8854,scaleY:0.8854}}]},1).to({state:[{t:this.shape_13,p:{rotation:29.4479,x:163.5575,y:296.8161,scaleX:0.8852,scaleY:0.8852}},{t:this.shape_12,p:{rotation:29.4479,x:162.4066,y:300.0925,scaleX:0.8852,scaleY:0.8852}},{t:this.shape_11,p:{rotation:29.4479,x:303.5584,y:257.8533,scaleX:0.8852,scaleY:0.8852}},{t:this.shape_10,p:{rotation:29.4479,x:307.1619,y:259.8878,scaleX:0.8852,scaleY:0.8852}},{t:this.shape_9,p:{rotation:29.4479,x:259.6551,y:269.9912,scaleX:0.8852,scaleY:0.8852}},{t:this.shape_8,p:{rotation:29.4479,x:261.4937,y:276.6584,scaleX:0.8852,scaleY:0.8852}},{t:this.shape_7,p:{rotation:29.4479,x:384.9919,y:162.4074,scaleX:0.8852,scaleY:0.8852}},{t:this.shape_6,p:{rotation:29.4479,x:422.5694,y:297.5473,scaleX:0.8852,scaleY:0.8852}},{t:this.shape_5,p:{rotation:29.4479,x:376.6406,y:132.4577,scaleX:0.8852,scaleY:0.8852}},{t:this.shape_4,p:{rotation:29.4479,x:430.9425,y:327.4585,scaleX:0.8852,scaleY:0.8852}},{t:this.shape_3,p:{rotation:29.4479,x:403.7982,y:229.9237,scaleX:0.8852,scaleY:0.8852}},{t:this.shape_2,p:{rotation:29.4479,x:408.5039,y:247.0656,scaleX:0.8852,scaleY:0.8852}},{t:this.shape_1,p:{rotation:29.4479,x:393.5222,y:193.2053,scaleX:0.8852,scaleY:0.8852}},{t:this.shape,p:{rotation:29.4479,x:414.0009,y:266.7156,scaleX:0.8852,scaleY:0.8852}}]},1).to({state:[{t:this.shape_13,p:{rotation:29.1974,x:160.5115,y:287.4979,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_12,p:{rotation:29.1974,x:159.3751,y:290.7791,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_11,p:{rotation:29.1974,x:300.3317,y:247.9258,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_10,p:{rotation:29.1974,x:303.9439,y:249.9444,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_9,p:{rotation:29.1974,x:256.4847,y:260.2548,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_8,p:{rotation:29.1974,x:258.3524,y:266.9135,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_7,p:{rotation:29.1974,x:381.3419,y:152.1308,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_6,p:{rotation:29.1974,x:419.5075,y:287.0965,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_5,p:{rotation:29.1974,x:372.8602,y:122.2198,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_4,p:{rotation:29.1974,x:428.0108,y:316.9688,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_3,p:{rotation:29.1974,x:400.442,y:219.56,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_2,p:{rotation:29.1974,x:405.2223,y:236.68,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_1,p:{rotation:29.1974,x:390.0062,y:182.8892,scaleX:0.8851,scaleY:0.8851}},{t:this.shape,p:{rotation:29.1974,x:410.8049,y:256.3045,scaleX:0.8851,scaleY:0.8851}}]},1).to({state:[{t:this.shape_13,p:{rotation:28.9565,x:157.8144,y:277.411,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_12,p:{rotation:28.9565,x:156.6918,y:280.6967,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_11,p:{rotation:28.9565,x:297.4574,y:237.2544,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_10,p:{rotation:28.9565,x:301.0778,y:239.2576,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_9,p:{rotation:28.9565,x:253.6656,y:249.7667,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_8,p:{rotation:28.9565,x:255.5611,y:256.4169,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_7,p:{rotation:28.9565,x:378.0587,y:141.1263,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_6,p:{rotation:28.9565,x:416.7886,y:275.9212,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_5,p:{rotation:28.9565,x:369.452,y:111.2533,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_4,p:{rotation:28.9565,x:425.4168,y:305.7554,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_3,p:{rotation:28.9565,x:397.4408,y:208.47,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_2,p:{rotation:28.9565,x:402.2927,y:225.5686,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_1,p:{rotation:28.9565,x:386.8517,y:171.8459,scaleX:0.8851,scaleY:0.8851}},{t:this.shape,p:{rotation:28.9565,x:407.9572,y:245.1681,scaleX:0.8851,scaleY:0.8851}}]},1).to({state:[{t:this.shape_13,p:{rotation:38.6475,x:152.8921,y:277.5038,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_12,p:{rotation:38.6475,x:151.2323,y:280.5539,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_11,p:{rotation:38.6475,x:297.316,y:261.4251,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_10,p:{rotation:38.6475,x:300.5479,y:264.0095,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_9,p:{rotation:38.6475,x:252.0386,y:266.3878,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_8,p:{rotation:38.6475,x:252.7876,y:273.2629,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_7,p:{rotation:38.6475,x:392.9579,y:180.2289,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_6,p:{rotation:38.6475,x:408.4462,y:319.6332,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_5,p:{rotation:38.6475,x:389.5023,y:149.3304,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_4,p:{rotation:38.6475,x:411.9295,y:350.4971,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_3,p:{rotation:38.6475,x:400.728,y:249.8809,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_2,p:{rotation:38.6475,x:402.6325,y:267.554,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_1,p:{rotation:38.6475,x:396.4546,y:211.9933,scaleX:0.8851,scaleY:0.8851}},{t:this.shape,p:{rotation:38.6475,x:404.9172,y:287.8293,scaleX:0.8851,scaleY:0.8851}}]},1).to({state:[{t:this.shape_13,p:{rotation:45.6377,x:151.6234,y:273.5967,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_12,p:{rotation:45.6377,x:149.6048,y:276.4221,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_11,p:{rotation:45.6377,x:296.9259,y:275.214,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_10,p:{rotation:45.6377,x:299.8191,y:278.1723,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_9,p:{rotation:45.6377,x:251.3825,y:274.6295,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_8,p:{rotation:45.6377,x:251.2893,y:281.5444,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_7,p:{rotation:45.6377,x:401.7351,y:206.2631,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_6,p:{rotation:45.6377,x:400.1428,y:346.5116,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_5,p:{rotation:45.6377,x:402.0655,y:175.1747,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_4,p:{rotation:45.6377,x:399.8441,y:377.569,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_3,p:{rotation:45.6377,x:400.9708,y:276.3407,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_2,p:{rotation:45.6377,x:400.7104,y:294.1136,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_1,p:{rotation:45.6377,x:401.3401,y:238.2159,scaleX:0.8851,scaleY:0.8851}},{t:this.shape,p:{rotation:45.6377,x:400.5106,y:314.5156,scaleX:0.8851,scaleY:0.8851}}]},1).to({state:[{t:this.shape_13,p:{rotation:45.081,x:152.0235,y:275.0122,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_12,p:{rotation:45.081,x:150.0325,y:277.857,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_11,p:{rotation:45.081,x:297.3314,y:275.2176,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_10,p:{rotation:45.081,x:300.2531,y:278.1476,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_9,p:{rotation:45.081,x:251.7855,y:275.0756,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_8,p:{rotation:45.081,x:251.7595,y:281.991,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_7,p:{rotation:45.081,x:401.4632,y:205.2534,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_6,p:{rotation:45.081,x:401.2335,y:345.5073,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_5,p:{rotation:45.081,x:401.4915,y:174.1641,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_4,p:{rotation:45.081,x:401.2366,y:376.5654,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_3,p:{rotation:45.081,x:401.3797,y:275.3335,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_2,p:{rotation:45.081,x:401.292,y:293.1077,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_1,p:{rotation:45.081,x:401.3786,y:237.2078,scaleX:0.8851,scaleY:0.8851}},{t:this.shape,p:{rotation:45.081,x:401.2905,y:313.5101,scaleX:0.8851,scaleY:0.8851}}]},1).to({state:[{t:this.shape_13,p:{rotation:45.081,x:152.0235,y:275.0122,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_12,p:{rotation:45.081,x:150.0325,y:277.857,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_11,p:{rotation:45.081,x:297.3314,y:275.2176,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_10,p:{rotation:45.081,x:300.2531,y:278.1476,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_9,p:{rotation:45.081,x:251.7855,y:275.0756,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_8,p:{rotation:45.081,x:251.7595,y:281.991,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_7,p:{rotation:45.081,x:401.4632,y:205.2534,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_6,p:{rotation:45.081,x:401.2335,y:345.5073,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_5,p:{rotation:45.081,x:401.4915,y:174.1641,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_4,p:{rotation:45.081,x:401.2366,y:376.5654,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_3,p:{rotation:45.081,x:401.3797,y:275.3335,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_2,p:{rotation:45.081,x:401.292,y:293.1077,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_1,p:{rotation:45.081,x:401.3786,y:237.2078,scaleX:0.8851,scaleY:0.8851}},{t:this.shape,p:{rotation:45.081,x:401.2905,y:313.5101,scaleX:0.8851,scaleY:0.8851}}]},8).to({state:[{t:this.shape_13,p:{rotation:38.6464,x:147.7546,y:291.5386,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_12,p:{rotation:38.6464,x:146.095,y:294.5886,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_11,p:{rotation:38.6464,x:292.1697,y:275.4582,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_10,p:{rotation:38.6464,x:295.4014,y:278.0423,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_9,p:{rotation:38.6464,x:246.895,y:280.4214,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_8,p:{rotation:38.6464,x:247.6441,y:287.2961,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_7,p:{rotation:38.6464,x:387.8044,y:194.265,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_6,p:{rotation:38.6464,x:403.2944,y:333.6607,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_5,p:{rotation:38.6464,x:384.3484,y:163.3684,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_4,p:{rotation:38.6464,x:406.778,y:364.5227,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_3,p:{rotation:38.6464,x:395.5753,y:263.9127,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_2,p:{rotation:38.6464,x:397.4801,y:281.5847,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_1,p:{rotation:38.6464,x:391.3014,y:226.0274,scaleX:0.8851,scaleY:0.8851}},{t:this.shape,p:{rotation:38.6464,x:399.765,y:301.8588,scaleX:0.8851,scaleY:0.8851}}]},1).to({state:[{t:this.shape_13,p:{rotation:30.0825,x:142.9997,y:320.8073,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_12,p:{rotation:30.0825,x:141.8127,y:324.0706,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_11,p:{rotation:30.0825,x:283.4151,y:283.3998,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_10,p:{rotation:30.0825,x:286.9956,y:285.4739,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_9,p:{rotation:30.0825,x:239.3827,y:295.05,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_8,p:{rotation:30.0825,x:241.1472,y:301.7367,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_7,p:{rotation:30.0825,x:365.8958,y:188.8673,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_6,p:{rotation:30.0825,x:401.972,y:324.407,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_5,p:{rotation:30.0825,x:357.8771,y:158.8288,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_4,p:{rotation:30.0825,x:410.0128,y:354.4073,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_3,p:{rotation:30.0825,x:383.952,y:256.5838,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_2,p:{rotation:30.0825,x:388.4673,y:273.7757,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_1,p:{rotation:30.0825,x:374.0839,y:219.756,scaleX:0.8851,scaleY:0.8851}},{t:this.shape,p:{rotation:30.0825,x:393.746,y:293.4841,scaleX:0.8851,scaleY:0.8851}}]},1).to({state:[{t:this.shape_13,p:{rotation:26.3367,x:142.8087,y:331.1025,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_12,p:{rotation:26.3367,x:141.8375,y:334.4361,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_11,p:{rotation:26.3367,x:280.4714,y:284.6044,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_10,p:{rotation:26.3367,x:284.1796,y:286.44,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_9,p:{rotation:26.3367,x:237.297,y:299.1054,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_8,p:{rotation:26.3367,x:239.4945,y:305.6622,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_7,p:{rotation:26.3367,x:356.5951,y:184.8917,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_6,p:{rotation:26.3367,x:401.4464,y:317.7764,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_5,p:{rotation:26.3367,x:346.6318,y:155.4431,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_4,p:{rotation:26.3367,x:411.4293,y:347.1854,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_3,p:{rotation:26.3367,x:379.0354,y:251.2796,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_2,p:{rotation:26.3367,x:384.6638,y:268.1387,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_1,p:{rotation:26.3367,x:366.7831,y:215.1775,scaleX:0.8851,scaleY:0.8851}},{t:this.shape,p:{rotation:26.3367,x:391.2184,y:287.459,scaleX:0.8851,scaleY:0.8851}}]},1).to({state:[{t:this.shape_13,p:{rotation:20.0554,x:151.9342,y:348.1048,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_12,p:{rotation:20.0554,x:151.3336,y:351.5246,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_11,p:{rotation:20.0554,x:283.6823,y:286.8247,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_10,p:{rotation:20.0554,x:287.5691,y:288.2436,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_9,p:{rotation:20.0554,x:242.3539,y:305.9622,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_8,p:{rotation:20.0554,x:245.2555,y:312.2391,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_7,p:{rotation:20.0554,x:348.4392,y:179.3827,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_6,p:{rotation:20.0554,x:407.5595,y:306.5618,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_5,p:{rotation:20.0554,x:335.3139,y:151.2012,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_4,p:{rotation:20.0554,x:420.7001,y:334.7018,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_3,p:{rotation:20.0554,x:378.008,y:242.9165,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_2,p:{rotation:20.0554,x:385.4471,y:259.0585,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_1,p:{rotation:20.0554,x:361.8795,y:208.3719,scaleX:0.8851,scaleY:0.8851}},{t:this.shape,p:{rotation:20.0554,x:394.0761,y:277.5455,scaleX:0.8851,scaleY:0.8851}}]},1).to({state:[{t:this.shape_13,p:{rotation:13.8671,x:162.4671,y:364.7801,scaleX:0.885,scaleY:0.885}},{t:this.shape_12,p:{rotation:13.8671,x:162.2386,y:368.2446,scaleX:0.885,scaleY:0.885}},{t:this.shape_11,p:{rotation:13.8671,x:286.8358,y:289.6586,scaleX:0.885,scaleY:0.885}},{t:this.shape_10,p:{rotation:13.8671,x:290.8526,y:290.6503,scaleX:0.885,scaleY:0.885}},{t:this.shape_9,p:{rotation:13.8671,x:247.813,y:313.1386,scaleX:0.885,scaleY:0.885}},{t:this.shape_8,p:{rotation:13.8671,x:251.3742,y:319.0659,scaleX:0.885,scaleY:0.885}},{t:this.shape_7,p:{rotation:13.8671,x:339.6308,y:175.8676,scaleX:0.885,scaleY:0.885}},{t:this.shape_6,p:{rotation:13.8671,x:412.1127,y:295.9268,scaleX:0.885,scaleY:0.885}},{t:this.shape_5,p:{rotation:13.8671,x:323.5449,y:149.2664,scaleX:0.885,scaleY:0.885}},{t:this.shape_4,p:{rotation:13.8671,x:428.2093,y:322.485,scaleX:0.885,scaleY:0.885}},{t:this.shape_3,p:{rotation:13.8671,x:375.8743,y:235.8408,scaleX:0.885,scaleY:0.885}},{t:this.shape_2,p:{rotation:13.8671,x:385.0097,y:251.0862,scaleX:0.885,scaleY:0.885}},{t:this.shape_1,p:{rotation:13.8671,x:356.1169,y:203.2377,scaleX:0.885,scaleY:0.885}},{t:this.shape,p:{rotation:13.8671,x:395.5807,y:268.5344,scaleX:0.885,scaleY:0.885}}]},1).to({state:[{t:this.shape_13,p:{rotation:7.893,x:170.1482,y:375.6296,scaleX:0.885,scaleY:0.885}},{t:this.shape_12,p:{rotation:7.893,x:170.2815,y:379.0992,scaleX:0.885,scaleY:0.885}},{t:this.shape_11,p:{rotation:7.893,x:286.025,y:287.9706,scaleX:0.885,scaleY:0.885}},{t:this.shape_10,p:{rotation:7.893,x:290.1233,y:288.5387,scaleX:0.885,scaleY:0.885}},{t:this.shape_9,p:{rotation:7.893,x:249.6572,y:315.3849,scaleX:0.885,scaleY:0.885}},{t:this.shape_8,p:{rotation:7.893,x:253.8161,y:320.9095,scaleX:0.885,scaleY:0.885}},{t:this.shape_7,p:{rotation:7.893,x:326.6909,y:169.3005,scaleX:0.885,scaleY:0.885}},{t:this.shape_6,p:{rotation:7.893,x:411.2762,y:281.166,scaleX:0.885,scaleY:0.885}},{t:this.shape_5,p:{rotation:7.893,x:307.9233,y:144.5176,scaleX:0.885,scaleY:0.885}},{t:this.shape_4,p:{rotation:7.893,x:430.0498,y:305.9051,scaleX:0.885,scaleY:0.885}},{t:this.shape_3,p:{rotation:7.893,x:368.9802,y:225.1769,scaleX:0.885,scaleY:0.885}},{t:this.shape_2,p:{rotation:7.893,x:379.6528,y:239.3889,scaleX:0.885,scaleY:0.885}},{t:this.shape_1,p:{rotation:7.893,x:345.9364,y:194.8066,scaleX:0.885,scaleY:0.885}},{t:this.shape,p:{rotation:7.893,x:391.9827,y:255.6425,scaleX:0.885,scaleY:0.885}}]},1).to({state:[{t:this.shape_13,p:{rotation:5.6537,x:176.7686,y:381.6422,scaleX:0.885,scaleY:0.885}},{t:this.shape_12,p:{rotation:5.6537,x:177.0374,y:385.1039,scaleX:0.885,scaleY:0.885}},{t:this.shape_11,p:{rotation:5.6537,x:289.1311,y:289.5228,scaleX:0.885,scaleY:0.885}},{t:this.shape_10,p:{rotation:5.6537,x:293.2484,y:289.9304,scaleX:0.885,scaleY:0.885}},{t:this.shape_9,p:{rotation:5.6537,x:253.8625,y:318.3371,scaleX:0.885,scaleY:0.885}},{t:this.shape_8,p:{rotation:5.6537,x:258.234,y:323.6949,scaleX:0.885,scaleY:0.885}},{t:this.shape_7,p:{rotation:5.6537,x:325.1287,y:169.3552,scaleX:0.885,scaleY:0.885}},{t:this.shape_6,p:{rotation:5.6537,x:414.02,y:277.8294,scaleX:0.885,scaleY:0.885}},{t:this.shape_5,p:{rotation:5.6537,x:305.4073,y:145.3246,scaleX:0.885,scaleY:0.885}},{t:this.shape_4,p:{rotation:5.6537,x:433.7458,y:301.816,scaleX:0.885,scaleY:0.885}},{t:this.shape_3,p:{rotation:5.6537,x:369.5688,y:223.5362,scaleX:0.885,scaleY:0.885}},{t:this.shape_2,p:{rotation:5.6537,x:380.7886,y:237.3202,scaleX:0.885,scaleY:0.885}},{t:this.shape_1,p:{rotation:5.6537,x:345.3561,y:194.0896,scaleX:0.885,scaleY:0.885}},{t:this.shape,p:{rotation:5.6537,x:393.744,y:253.0795,scaleX:0.885,scaleY:0.885}}]},1).to({state:[{t:this.shape_13,p:{rotation:3.6526,x:183.4647,y:386.8758,scaleX:0.885,scaleY:0.885}},{t:this.shape_12,p:{rotation:3.6526,x:183.8543,y:390.3259,scaleX:0.885,scaleY:0.885}},{t:this.shape_11,p:{rotation:3.6526,x:292.5395,y:290.8913,scaleX:0.885,scaleY:0.885}},{t:this.shape_10,p:{rotation:3.6526,x:296.6685,y:291.1549,scaleX:0.885,scaleY:0.885}},{t:this.shape_9,p:{rotation:3.6526,x:258.2994,y:320.9188,scaleX:0.885,scaleY:0.885}},{t:this.shape_8,p:{rotation:3.6526,x:262.8552,y:326.1206,scaleX:0.885,scaleY:0.885}},{t:this.shape_7,p:{rotation:3.6526,x:324.3185,y:169.5427,scaleX:0.885,scaleY:0.885}},{t:this.shape_6,p:{rotation:3.6526,x:416.9411,y:274.8445,scaleX:0.885,scaleY:0.885}},{t:this.shape_5,p:{rotation:3.6526,x:303.7705,y:146.216,scaleX:0.885,scaleY:0.885}},{t:this.shape_4,p:{rotation:3.6526,x:437.492,y:298.1271,scaleX:0.885,scaleY:0.885}},{t:this.shape_3,p:{rotation:3.6526,x:370.6223,y:222.1377,scaleX:0.885,scaleY:0.885}},{t:this.shape_2,p:{rotation:3.6526,x:382.3163,y:235.5213,scaleX:0.885,scaleY:0.885}},{t:this.shape_1,p:{rotation:3.6526,x:345.3968,y:193.5552,scaleX:0.885,scaleY:0.885}},{t:this.shape,p:{rotation:3.6526,x:395.8138,y:250.8182,scaleX:0.885,scaleY:0.885}}]},1).to({state:[{t:this.shape_13,p:{rotation:1.9473,x:194.3934,y:389.6335,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_12,p:{rotation:1.9473,x:194.8857,y:393.0725,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_11,p:{rotation:1.9473,x:300.6234,y:290.3898,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_10,p:{rotation:1.9473,x:304.7607,y:290.5304,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_9,p:{rotation:1.9473,x:267.2732,y:321.4404,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_8,p:{rotation:1.9473,x:271.9844,y:326.5072,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_7,p:{rotation:1.9473,x:328.7931,y:168.0804,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_6,p:{rotation:1.9473,x:424.5622,y:270.637,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_5,p:{rotation:1.9473,x:307.5479,y:145.3626,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_4,p:{rotation:1.9473,x:445.8088,y:293.3105,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_3,p:{rotation:1.9473,x:376.6684,y:219.303,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_2,p:{rotation:1.9473,x:388.7623,y:232.34,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_1,p:{rotation:1.9473,x:350.5888,y:191.4682,scaleX:0.8855,scaleY:0.8855}},{t:this.shape,p:{rotation:1.9473,x:402.7169,y:247.2369,scaleX:0.8855,scaleY:0.8855}}]},1).to({state:[]},1).wait(8));

	// spark3
	this.instance = new lib.Symbol3();
	this.instance.setTransform(502.7,349.05,1.417,1.417,0,0,0,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off:false},0).to({regX:0,regY:0,x:515.1,y:294.1},7,cjs.Ease.quadOut).to({_off:true},1).wait(5).to({_off:false,x:514.1,y:306.8},0).to({regX:0.1,regY:0.1,x:502.7,y:349.05},5,cjs.Ease.sineInOut).wait(10));

	// spark2
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(526.35,365.6,1.417,1.417,0,0,0,0.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35).to({_off:false},0).to({regX:0,regY:0,x:579.8,y:306.55},8,cjs.Ease.quadOut).to({_off:true},1).wait(3).to({_off:false,x:570.9,y:316.2},0).to({regX:0.1,regY:0.1,x:526.35,y:365.6},6,cjs.Ease.sineInOut).wait(10));

	// spark1
	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(542.65,389.2,1.417,1.417);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({_off:false},0).to({x:598.8,y:377.25},7,cjs.Ease.quadOut).to({_off:true},1).wait(5).to({_off:false,regX:0.1,regY:0.1,x:581.3,y:379.6},0).to({regX:0,regY:0,x:542.65,y:389.2},5,cjs.Ease.sineInOut).wait(10));

	// Layer_1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FCC16D").s().p("AhuBEQgWgWAAggQAAgZARgVQAQgUAZgHIBxgcQAfgHAaAQQAbARAIAeQAHAfgQAaQgQAbgfAHIhxAcQgIACgKAAQggAAgWgWg");
	this.shape_14.setTransform(542.5318,389.082,0.8857,0.8857);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FCC16D").s().p("AggCDQgegIgRgbQgQgaAIgfIAchxQAIgfAbgQQAagQAfAIQAeAHAQAbQARAbgIAfIgdBxQgGAZgVAQQgUAQgZAAQgLAAgIgCg");
	this.shape_15.setTransform(502.4718,348.838,0.8857,0.8857);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FCC16D").s().p("AheBeQgWgVAAghQAAggAWgUIBThSQAVgWAgAAQAfAAAWAWQAWAXAAAfQAAAggWAVIhSBSQgWAWgfAAQggAAgWgXg");
	this.shape_16.setTransform(526.1319,365.3609,0.8857,0.8857);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6C3328").s().p("AA6FoQArgBAfgfQAhgggBguQAAgYgJgVIhrjpQhFiXiMhaQiIhXihgDIEdAAQCmAACLBaQCMBaBGCYIBqDoQATApgQArQgQArgpASQgVAKgZAAg");
	this.shape_17.setTransform(505.7863,446.8214,0.8857,0.8857);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#873F30").s().p("A3kFoQguAAggggQggggAAguQAAgXAKgWIBrjpQBFiXCMhaQCMhZCngBIezAAQCnAACMBaQCMBaBFCYIBrDoQATApgQArQgQAqgpATQgVAKgZAAg");
	this.shape_18.setTransform(403.014,446.8214,0.8857,0.8857);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A34F41").s().p("Ag8DKIAAklQAAgughgfQgfgggsgBIDjAAQAtAAAgAhQAhAfAAAuIAAElg");
	this.shape_19.setTransform(480.8404,409.6893,0.8857,0.8857);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BA5D4F").s().p("AwWDKIAAklQgBguAhggQAgggAuAAIdRAAQAvAAAgAgQAfAgAAAuIAAElg");
	this.shape_20.setTransform(403.0001,409.7336,0.8857,0.8857);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6C3328").s().p("AnkKfIiNg6QghgNgOghQgOghANghQAGgQANgMIRnxnQAZgZAkAAQAjAAAaAZQANANAFAQIA6CMQAOAkgHAmQgIAngbAbIvbPcQgbAbgnAIQgNACgNAAQgYAAgYgJg");
	this.shape_21.setTransform(395.3434,238.0912,0.8856,0.8856);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#873F30").s().p("Ao2KhQghgOgNghIg5iNQgPgkAIgmQAIgmAbgcIPbvbQAcgbAmgIQAmgHAkAOICNA6IAAAAQAQAHAMAMQAZAZAAAkQAAAjgZAaIxmRmQgNANgPAGQgRAGgQAAQgRAAgRgHg");
	this.shape_22.setTransform(341.3433,184.1191,0.8856,0.8856);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FCA62F").s().p("AruHNIS7y8IEjEiIy8S8g");
	this.shape_23.setTransform(380.8888,223.6752,0.8856,0.8856);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FCC16D").s().p("At8E/IS7y8II+I/Iy7S8g");
	this.shape_24.setTransform(368.3573,211.0551,0.8856,0.8856);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6C3328").s().p("AooI6IgRgSQgzgyAAhIQAAhHAzgzINtttQAzgzBHAAQBIAAAyAzIASARQAzAzAABHQAABIgzAyItuNuQgyAzhIAAQhHAAgzgzg");
	this.shape_25.setTransform(439.9818,282.6796,0.8856,0.8856);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#873F30").s().p("AooI6IgSgRQgxgzAAhIQAAhHAxgyINvtvQAygyBIABQBHgBAyAyIASASQAyAzABBIQgBBHgyAyItuNuQgyAyhHAAQhIAAgzgyg");
	this.shape_26.setTransform(296.7549,139.497,0.8856,0.8856);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A34F41").s().p("AqQCSIMisiIH/H/IsiMig");
	this.shape_27.setTransform(417.9741,260.7384,0.8856,0.8856);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#BA5D4F").s().p("AqQCSIMisiIH/H/IsiMig");
	this.shape_28.setTransform(318.7625,161.4825,0.8856,0.8856);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A34F41").s().p("Ag6C2IisitQAxAvBEAAQBHAAAxgyQAygxAAhGQAAhEgvgxICrCrQAyAxAABGQABBGgyAyIgBABQgxAyhHAAIgBAAQhEAAgygxg");
	this.shape_29.setTransform(267.3636,321.7689,0.8856,0.8856);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#BA5D4F").s().p("AgEDsIjmjmQgygxAAhGQAAhHAygyQAygyBHAAQBGAAAxAyIDmDmQAxAygBBHQgBBGgyAxQgyAxhFAAQhFAAgxgxg");
	this.shape_30.setTransform(262.4823,316.8646,0.8856,0.8856);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6C3328").s().p("AmhFBIFkljQAfgfAAgsQAAgsgfgfIg5g4IC7jgIFdFdIqzJEg");
	this.shape_31.setTransform(298.9025,284.6944,0.8856,0.8856);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#873F30").s().p("AnQDkIJEq0IFdFdIq0JEg");
	this.shape_32.setTransform(294.7622,284.6944,0.8856,0.8856);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6C3328").s().p("Au6OOQgvgugTg+QBIAYBKgSQBLgSA3g2IY368ICuCuI43a8IAAAAQhQBPhwAAQhwAAhQhPg");
	this.shape_33.setTransform(192.5617,390.9246,0.8856,0.8856);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#873F30").s().p("Ar/QEQhxgEhMhTQhMhTAFhwQAFhxBShMIa04wID8D8I4wa0IgQAQQhOBHhpAAIgMAAg");
	this.shape_34.setTransform(191.9527,387.5039,0.8856,0.8856);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FCC16D").s().p("AgTBSQgTgFgLgRQgKgQAFgUIAShGQAFgTARgKQAQgKATAFQATAEAKARQAKARgFATIgSBGQgEAQgNAKQgMAKgQAAIgLgBg");
	this.shape_35.setTransform(502.7106,349.0804,1.417,1.417);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FCC16D").s().p("Ag7A7QgNgOAAgTQAAgVANgMIA0g0QANgNAUAAQAUAAANAOQAOANAAAVQAAATgOANIgzAzQgNAOgUAAQgUAAgOgOg");
	this.shape_36.setTransform(526.3776,365.5998,1.417,1.417);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34,p:{x:191.9527,y:387.5039,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_33,p:{x:192.5617,y:390.9246,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_32,p:{x:294.7622,y:284.6944,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_31,p:{x:298.9025,y:284.6944,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_30,p:{x:262.4823,y:316.8646,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_29,p:{x:267.3636,y:321.7689,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_28,p:{x:318.7625,y:161.4825,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_27,p:{x:417.9741,y:260.7384,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_26,p:{x:296.7549,y:139.497,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_25,p:{x:439.9818,y:282.6796,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_24,p:{x:368.3573,y:211.0551,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_23,p:{x:380.8888,y:223.6752,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_22,p:{x:341.3433,y:184.1191,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_21,p:{x:395.3434,y:238.0912,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_20,p:{x:403.0001,y:409.7336}},{t:this.shape_19,p:{x:480.8404,y:409.6893}},{t:this.shape_18,p:{x:403.014,y:446.8214}},{t:this.shape_17,p:{x:505.7863,y:446.8214}},{t:this.shape_16,p:{x:526.1319,y:365.3609}},{t:this.shape_15,p:{x:502.4718,y:348.838}},{t:this.shape_14,p:{x:542.5318,y:389.082}}]}).to({state:[{t:this.shape_34,p:{x:191.9512,y:387.3987,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_33,p:{x:192.5601,y:390.8193,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_32,p:{x:294.7589,y:284.591,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_31,p:{x:298.8991,y:284.591,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_30,p:{x:262.4795,y:316.7606,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_29,p:{x:267.3607,y:321.6648,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_28,p:{x:318.7588,y:161.3812,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_27,p:{x:417.9687,y:260.6354,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_26,p:{x:296.7515,y:139.3961,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_25,p:{x:439.976,y:282.5762,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_24,p:{x:368.3527,y:210.9529,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_23,p:{x:380.884,y:223.5728,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_22,p:{x:341.3392,y:184.0174,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_21,p:{x:395.3384,y:237.9885,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_20,p:{x:403.0001,y:409.7336}},{t:this.shape_19,p:{x:480.8404,y:409.6893}},{t:this.shape_18,p:{x:403.014,y:446.8214}},{t:this.shape_17,p:{x:505.7863,y:446.8214}},{t:this.shape_16,p:{x:526.1319,y:365.3609}},{t:this.shape_15,p:{x:502.4718,y:348.838}},{t:this.shape_14,p:{x:542.5318,y:389.082}}]},3).to({state:[{t:this.shape_34,p:{x:187.4635,y:383.6112,rotation:-3.4781,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_33,p:{x:188.2788,y:386.9884,rotation:-3.4781,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_32,p:{x:283.843,y:274.7578,rotation:-3.4781,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_31,p:{x:287.9755,y:274.5066,rotation:-3.4781,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_30,p:{x:253.5752,y:308.8258,rotation:-3.4781,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_29,p:{x:258.7449,y:313.4248,rotation:-3.4781,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_28,p:{x:300.3235,y:150.3213,rotation:-3.4781,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_27,p:{x:405.3702,y:243.3721,rotation:-3.4781,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_26,p:{x:277.0235,y:129.7122,rotation:-3.4781,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_25,p:{x:428.6676,y:263.937,rotation:-3.4781,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_24,p:{x:352.8325,y:196.7921,rotation:-3.4781,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_23,p:{x:366.106,y:208.6283,rotation:-3.4781,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_22,p:{x:324.2352,y:171.5455,rotation:-3.4781,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_21,p:{x:381.4081,y:222.1403,rotation:-3.4781,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_20,p:{x:403.0001,y:409.7336}},{t:this.shape_19,p:{x:480.8404,y:409.6893}},{t:this.shape_18,p:{x:403.014,y:446.8214}},{t:this.shape_17,p:{x:505.7863,y:446.8214}},{t:this.shape_16,p:{x:526.1319,y:365.3609}},{t:this.shape_15,p:{x:502.4718,y:348.838}},{t:this.shape_14,p:{x:542.5318,y:389.082}}]},1).to({state:[{t:this.shape_34,p:{x:182.1134,y:379.4332,rotation:-7.3232,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_33,p:{x:183.1532,y:382.7479,rotation:-7.3232,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_32,p:{x:270.9664,y:264.3748,rotation:-7.3232,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_31,p:{x:275.0723,y:263.8471,rotation:-7.3232,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_30,p:{x:243.0545,y:300.3918,rotation:-7.3232,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_29,p:{x:248.5203,y:304.6333,rotation:-7.3232,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_28,p:{x:279.0644,y:139.1274,rotation:-7.3232,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_27,p:{x:390.1019,y:224.9148,rotation:-7.3232,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_26,p:{x:254.4376,y:120.1292,rotation:-7.3232,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_25,p:{x:414.7232,y:243.869,rotation:-7.3232,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_24,p:{x:334.5652,y:181.9676,rotation:-7.3232,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_23,p:{x:348.601,y:192.8858,rotation:-7.3232,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_22,p:{x:304.3427,y:158.6981,rotation:-7.3232,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_21,p:{x:364.7729,y:205.3399,rotation:-7.3232,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_20,p:{x:403.0001,y:409.7336}},{t:this.shape_19,p:{x:480.8404,y:409.6893}},{t:this.shape_18,p:{x:403.014,y:446.8214}},{t:this.shape_17,p:{x:505.7863,y:446.8214}},{t:this.shape_16,p:{x:526.1319,y:365.3609}},{t:this.shape_15,p:{x:502.4718,y:348.838}},{t:this.shape_14,p:{x:542.5318,y:389.082}}]},1).to({state:[{t:this.shape_34,p:{x:174.9778,y:374.8508,rotation:-12.2991,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_33,p:{x:176.3011,y:378.0626,rotation:-12.2991,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_32,p:{x:253.5126,y:252.5245,rotation:-12.2991,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_31,p:{x:257.5571,y:251.6427,rotation:-12.2991,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_30,p:{x:228.831,y:290.8251,rotation:-12.2991,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_29,p:{x:234.6438,y:294.5763,rotation:-12.2991,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_28,p:{x:250.7166,y:127.0522,rotation:-12.2991,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_27,p:{x:368.7715,y:202.8819,rotation:-12.2991,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_26,p:{x:224.5359,y:110.2625,rotation:-12.2991,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_25,p:{x:394.9428,y:219.6284,rotation:-12.2991,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_24,p:{x:309.7214,y:164.9153,rotation:-12.2991,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_23,p:{x:324.6508,y:174.5745,rotation:-12.2991,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_22,p:{x:277.5959,y:144.3558,rotation:-12.2991,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_21,p:{x:341.8411,y:185.5785,rotation:-12.2991,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_20,p:{x:403.0001,y:409.7336}},{t:this.shape_19,p:{x:480.8404,y:409.6893}},{t:this.shape_18,p:{x:403.014,y:446.8214}},{t:this.shape_17,p:{x:505.7863,y:446.8214}},{t:this.shape_16,p:{x:526.1319,y:365.3609}},{t:this.shape_15,p:{x:502.4718,y:348.838}},{t:this.shape_14,p:{x:542.5318,y:389.082}}]},1).to({state:[{t:this.shape_34,p:{x:166.0859,y:370.2897,rotation:-18.2395,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_33,p:{x:167.7346,y:373.3474,rotation:-18.2395,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_32,p:{x:231.541,y:240.4882,rotation:-18.2395,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_31,p:{x:235.4726,y:239.1926,rotation:-18.2395,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_30,p:{x:210.9552,y:281.1388,rotation:-18.2395,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_29,p:{x:217.1252,y:284.2684,rotation:-18.2395,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_28,p:{x:215.7739,y:115.9751,rotation:-18.2395,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_27,p:{x:341.0467,y:179.1817,rotation:-18.2395,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_26,p:{x:187.9953,y:101.9847,rotation:-18.2395,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_25,p:{x:368.8116,y:193.1301,rotation:-18.2395,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_24,p:{x:278.3825,y:147.5293,rotation:-18.2395,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_23,p:{x:294.2318,y:155.5918,rotation:-18.2395,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_22,p:{x:244.3006,y:130.4045,rotation:-18.2395,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_21,p:{x:312.4693,y:164.7578,rotation:-18.2395,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_20,p:{x:403.0001,y:409.7336}},{t:this.shape_19,p:{x:480.8404,y:409.6893}},{t:this.shape_18,p:{x:403.014,y:446.8214}},{t:this.shape_17,p:{x:505.7863,y:446.8214}},{t:this.shape_16,p:{x:526.1319,y:365.3609}},{t:this.shape_15,p:{x:502.4718,y:348.838}},{t:this.shape_14,p:{x:542.5318,y:389.082}}]},1).to({state:[{t:this.shape_34,p:{x:159.1049,y:367.3385,rotation:-22.6901,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_33,p:{x:160.9858,y:370.2591,rotation:-22.6901,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_32,p:{x:214.2897,y:232.8501,rotation:-22.6901,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_31,p:{x:218.1089,y:231.2533,rotation:-22.6901,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_30,p:{x:196.9205,y:274.9753,rotation:-22.6901,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_29,p:{x:203.3148,y:277.6167,rotation:-22.6901,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_28,p:{x:188.9081,y:109.9368,rotation:-22.6901,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_27,p:{x:318.7071,y:163.2312,rotation:-22.6901,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_26,p:{x:160.1277,y:98.1442,rotation:-22.6901,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_25,p:{x:347.4704,y:174.983,rotation:-22.6901,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_24,p:{x:253.776,y:136.5372,rotation:-22.6901,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_23,p:{x:270.2031,y:143.3454,rotation:-22.6901,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_22,p:{x:218.4683,y:122.1089,rotation:-22.6901,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_21,p:{x:289.0968,y:151.0686,rotation:-22.6901,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_20,p:{x:403.0001,y:409.7336}},{t:this.shape_19,p:{x:480.8404,y:409.6893}},{t:this.shape_18,p:{x:403.014,y:446.8214}},{t:this.shape_17,p:{x:505.7863,y:446.8214}},{t:this.shape_16,p:{x:526.1319,y:365.3609}},{t:this.shape_15,p:{x:502.4718,y:348.838}},{t:this.shape_14,p:{x:542.5318,y:389.082}}]},1).to({state:[{t:this.shape_34,p:{x:151.5493,y:364.8944,rotation:-27.449,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_33,p:{x:153.6662,y:367.6489,rotation:-27.449,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_32,p:{x:195.3885,y:226.284,rotation:-27.449,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_31,p:{x:199.0623,y:224.3757,rotation:-27.449,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_30,p:{x:181.5733,y:269.7072,rotation:-27.449,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_29,p:{x:188.1651,y:271.8091,rotation:-27.449,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_28,p:{x:159.8953,y:105.8939,rotation:-27.449,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_27,p:{x:293.6753,y:148.2382,rotation:-27.449,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_26,p:{x:130.2342,y:96.5291,rotation:-27.449,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_25,p:{x:323.316,y:157.5637,rotation:-27.449,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_24,p:{x:226.75,y:127.022,rotation:-27.449,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_23,p:{x:243.6861,y:132.4442,rotation:-27.449,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_22,p:{x:190.365,y:115.5721,rotation:-27.449,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_21,p:{x:263.1564,y:138.5736,rotation:-27.449,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_20,p:{x:403.0001,y:409.7336}},{t:this.shape_19,p:{x:480.8404,y:409.6893}},{t:this.shape_18,p:{x:403.014,y:446.8214}},{t:this.shape_17,p:{x:505.7863,y:446.8214}},{t:this.shape_16,p:{x:526.1319,y:365.3609}},{t:this.shape_15,p:{x:502.4718,y:348.838}},{t:this.shape_14,p:{x:542.5318,y:389.082}}]},1).to({state:[{t:this.shape_34,p:{x:151.4477,y:364.8892,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_33,p:{x:153.5646,y:367.6436,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_32,p:{x:195.2852,y:226.2806,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_31,p:{x:198.9589,y:224.3723,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_30,p:{x:181.4705,y:269.7032,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_29,p:{x:188.0622,y:271.805,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_28,p:{x:159.7916,y:105.8925,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_27,p:{x:293.5699,y:148.2352,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_26,p:{x:130.1309,y:96.5282,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_25,p:{x:323.2102,y:157.5602,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_24,p:{x:226.6454,y:127.0199,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_23,p:{x:243.5813,y:132.4418,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_22,p:{x:190.2609,y:115.5704,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_21,p:{x:263.0513,y:138.5709,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_20,p:{x:403.0001,y:409.7336}},{t:this.shape_19,p:{x:480.8404,y:409.6893}},{t:this.shape_18,p:{x:403.014,y:446.8214}},{t:this.shape_17,p:{x:505.7863,y:446.8214}},{t:this.shape_16,p:{x:526.1319,y:365.3609}},{t:this.shape_15,p:{x:502.4718,y:348.838}},{t:this.shape_14,p:{x:542.5318,y:389.082}}]},2).to({state:[{t:this.shape_34,p:{x:159.0502,y:367.3229,rotation:-22.6913,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_33,p:{x:160.9311,y:370.2432,rotation:-22.6913,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_32,p:{x:214.2297,y:232.8398,rotation:-22.6913,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_31,p:{x:218.0486,y:231.2429,rotation:-22.6913,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_30,p:{x:196.8621,y:274.9633,rotation:-22.6913,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_29,p:{x:203.2562,y:277.6044,rotation:-22.6913,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_28,p:{x:188.8469,y:109.9328,rotation:-22.6913,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_27,p:{x:318.6407,y:163.2221,rotation:-22.6913,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_26,p:{x:160.0676,y:98.1414,rotation:-22.6913,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_25,p:{x:347.4029,y:174.9727,rotation:-22.6913,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_24,p:{x:253.7122,y:136.5307,rotation:-22.6913,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_23,p:{x:270.1386,y:143.3383,rotation:-22.6913,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_22,p:{x:218.4059,y:122.1037,rotation:-22.6913,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_21,p:{x:289.0315,y:151.0606,rotation:-22.6913,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_20,p:{x:403.0001,y:409.7336}},{t:this.shape_19,p:{x:480.8404,y:409.6893}},{t:this.shape_18,p:{x:403.014,y:446.8214}},{t:this.shape_17,p:{x:505.7863,y:446.8214}},{t:this.shape_16,p:{x:526.1319,y:365.3609}},{t:this.shape_15,p:{x:502.4718,y:348.838}},{t:this.shape_14,p:{x:542.5318,y:389.082}}]},1).to({state:[{t:this.shape_34,p:{x:165.8254,y:370.2928,rotation:-18.2376,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_33,p:{x:167.474,y:373.3505,rotation:-18.2376,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_32,p:{x:231.2841,y:240.4949,rotation:-18.2376,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_31,p:{x:235.2157,y:239.1994,rotation:-18.2376,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_30,p:{x:210.6971,y:281.1444,rotation:-18.2376,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_29,p:{x:216.8671,y:284.2742,rotation:-18.2376,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_28,p:{x:215.5213,y:115.9826,rotation:-18.2376,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_27,p:{x:340.7906,y:179.1926,rotation:-18.2376,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_26,p:{x:187.7434,y:101.9914,rotation:-18.2376,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_25,p:{x:368.5547,y:193.1418,rotation:-18.2376,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_24,p:{x:278.1281,y:147.5385,rotation:-18.2376,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_23,p:{x:293.977,y:155.6014,rotation:-18.2376,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_22,p:{x:244.0472,y:130.4128,rotation:-18.2376,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_21,p:{x:312.214,y:164.768,rotation:-18.2376,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_20,p:{x:403.0001,y:409.7336}},{t:this.shape_19,p:{x:480.8404,y:409.6893}},{t:this.shape_18,p:{x:403.014,y:446.8214}},{t:this.shape_17,p:{x:505.7863,y:446.8214}},{t:this.shape_16,p:{x:526.1319,y:365.3609}},{t:this.shape_15,p:{x:502.4718,y:348.838}},{t:this.shape_14,p:{x:542.5318,y:389.082}}]},1).to({state:[{t:this.shape_34,p:{x:174.8762,y:374.8456,rotation:-12.2993,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_33,p:{x:176.1995,y:378.0573,rotation:-12.2993,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_32,p:{x:253.4093,y:252.5211,rotation:-12.2993,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_31,p:{x:257.4537,y:251.6393,rotation:-12.2993,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_30,p:{x:228.7282,y:290.821,rotation:-12.2993,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_29,p:{x:234.541,y:294.5722,rotation:-12.2993,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_28,p:{x:250.6129,y:127.0509,rotation:-12.2993,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_27,p:{x:368.666,y:202.8789,rotation:-12.2993,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_26,p:{x:224.4325,y:110.2615,rotation:-12.2993,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_25,p:{x:394.8369,y:219.625,rotation:-12.2993,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_24,p:{x:309.6168,y:164.9132,rotation:-12.2993,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_23,p:{x:324.5459,y:174.5721,rotation:-12.2993,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_22,p:{x:277.4918,y:144.3541,rotation:-12.2993,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_21,p:{x:341.7361,y:185.5758,rotation:-12.2993,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_20,p:{x:403.0001,y:409.7336}},{t:this.shape_19,p:{x:480.8404,y:409.6893}},{t:this.shape_18,p:{x:403.014,y:446.8214}},{t:this.shape_17,p:{x:505.7863,y:446.8214}},{t:this.shape_16,p:{x:526.1319,y:365.3609}},{t:this.shape_15,p:{x:502.4718,y:348.838}},{t:this.shape_14,p:{x:542.5318,y:389.082}}]},1).to({state:[{t:this.shape_34,p:{x:182.0118,y:379.428,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_33,p:{x:183.0517,y:382.7426,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_32,p:{x:270.863,y:264.3714,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_31,p:{x:274.9689,y:263.8437,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_30,p:{x:242.9517,y:300.3878,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_29,p:{x:248.4174,y:304.6292,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_28,p:{x:278.9607,y:139.1261,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_27,p:{x:389.9965,y:224.9118,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_26,p:{x:254.3342,y:120.1283,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_25,p:{x:414.6173,y:243.8656,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_24,p:{x:334.4606,y:181.9654,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_23,p:{x:348.4962,y:192.8834,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_22,p:{x:304.2385,y:158.6964,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_21,p:{x:364.6678,y:205.3372,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_20,p:{x:403.0001,y:409.7336}},{t:this.shape_19,p:{x:480.8404,y:409.6893}},{t:this.shape_18,p:{x:403.014,y:446.8214}},{t:this.shape_17,p:{x:505.7863,y:446.8214}},{t:this.shape_16,p:{x:526.1319,y:365.3609}},{t:this.shape_15,p:{x:502.4718,y:348.838}},{t:this.shape_14,p:{x:542.5318,y:389.082}}]},1).to({state:[{t:this.shape_34,p:{x:187.4672,y:383.6044,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_33,p:{x:188.2825,y:386.9816,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_32,p:{x:283.8431,y:274.751,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_31,p:{x:287.9755,y:274.4998,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_30,p:{x:253.5765,y:308.819,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_29,p:{x:258.7461,y:313.4178,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_28,p:{x:300.3211,y:150.3162,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_27,p:{x:405.3678,y:243.3636,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_26,p:{x:277.021,y:129.7079,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_25,p:{x:428.6652,y:263.9278,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_24,p:{x:352.83,y:196.7853,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_23,p:{x:366.1036,y:208.6211,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_22,p:{x:324.2328,y:171.5396,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_21,p:{x:381.4057,y:222.1326,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_20,p:{x:403.0001,y:409.7336}},{t:this.shape_19,p:{x:480.8404,y:409.6893}},{t:this.shape_18,p:{x:403.014,y:446.8214}},{t:this.shape_17,p:{x:505.7863,y:446.8214}},{t:this.shape_16,p:{x:526.1319,y:365.3609}},{t:this.shape_15,p:{x:502.4718,y:348.838}},{t:this.shape_14,p:{x:542.5318,y:389.082}}]},1).to({state:[{t:this.shape_34,p:{x:191.9496,y:387.3435,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_33,p:{x:192.5585,y:390.764,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_32,p:{x:294.7556,y:284.5375,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_31,p:{x:298.8957,y:284.5375,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_30,p:{x:262.4767,y:316.7066,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_29,p:{x:267.3579,y:321.6107,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_28,p:{x:318.755,y:161.3299,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_27,p:{x:417.9632,y:260.5823,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_26,p:{x:296.7481,y:139.3451,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_25,p:{x:439.9701,y:282.5228,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_24,p:{x:368.3481,y:210.9008,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_23,p:{x:380.8792,y:223.5204,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_22,p:{x:341.3351,y:183.9657,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_21,p:{x:395.3333,y:237.9359,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_20,p:{x:403.0001,y:409.7336}},{t:this.shape_19,p:{x:480.8404,y:409.6893}},{t:this.shape_18,p:{x:403.014,y:446.8214}},{t:this.shape_17,p:{x:505.7863,y:446.8214}},{t:this.shape_16,p:{x:526.1319,y:365.3609}},{t:this.shape_15,p:{x:502.4718,y:348.838}},{t:this.shape_14,p:{x:542.5318,y:389.082}}]},1).to({state:[{t:this.shape_34,p:{x:151.3893,y:364.8803,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_33,p:{x:153.5061,y:367.6347,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_32,p:{x:195.2251,y:226.277,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_31,p:{x:198.8986,y:224.3688,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_30,p:{x:181.411,y:269.698,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_29,p:{x:188.0024,y:271.7997,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_28,p:{x:159.7327,y:105.8936,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_27,p:{x:293.5059,y:148.2346,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_26,p:{x:130.0732,y:96.5297,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_25,p:{x:323.1451,y:157.5592,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_24,p:{x:226.584,y:127.0201,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_23,p:{x:243.5193,y:132.4418,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_22,p:{x:190.2009,y:115.5711,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_21,p:{x:262.9885,y:138.5707,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_20,p:{x:403.0001,y:409.7336}},{t:this.shape_19,p:{x:480.8404,y:409.6893}},{t:this.shape_18,p:{x:403.014,y:446.8214}},{t:this.shape_17,p:{x:505.7863,y:446.8214}},{t:this.shape_16,p:{x:526.1319,y:365.3609}},{t:this.shape_15,p:{x:502.4718,y:348.838}},{t:this.shape_14,p:{x:542.5318,y:389.082}}]},2).to({state:[{t:this.shape_34,p:{x:158.9902,y:367.1588,rotation:-22.6915,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_33,p:{x:160.8711,y:370.079,rotation:-22.6915,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_32,p:{x:214.1662,y:232.6828,rotation:-22.6915,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_31,p:{x:217.985,y:231.086,rotation:-22.6915,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_30,p:{x:196.7998,y:274.8041,rotation:-22.6915,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_29,p:{x:203.1935,y:277.445,rotation:-22.6915,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_28,p:{x:188.7843,y:109.7826,rotation:-22.6915,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_27,p:{x:318.5713,y:163.0685,rotation:-22.6915,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_26,p:{x:160.0065,y:97.9919,rotation:-22.6915,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_25,p:{x:347.3319,y:174.8183,rotation:-22.6915,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_24,p:{x:253.6462,y:136.3788,rotation:-22.6915,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_23,p:{x:270.0717,y:143.1859,rotation:-22.6915,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_22,p:{x:218.3417,y:121.9527,rotation:-22.6915,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_21,p:{x:288.9637,y:150.9078,rotation:-22.6915,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_20,p:{x:403.0001,y:409.7336}},{t:this.shape_19,p:{x:480.8404,y:409.6893}},{t:this.shape_18,p:{x:403.014,y:446.8214}},{t:this.shape_17,p:{x:505.7863,y:446.8214}},{t:this.shape_16,p:{x:526.1319,y:365.3609}},{t:this.shape_15,p:{x:502.4718,y:348.838}},{t:this.shape_14,p:{x:542.5318,y:389.082}}]},1).to({state:[{t:this.shape_34,p:{x:165.7671,y:370.2839,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_33,p:{x:167.4156,y:373.3415,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_32,p:{x:231.224,y:240.4914,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_31,p:{x:235.1555,y:239.1959,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_30,p:{x:210.6376,y:281.1392,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_29,p:{x:216.8072,y:284.2689,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_28,p:{x:215.4625,y:115.9837,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_27,p:{x:340.7267,y:179.192,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_26,p:{x:187.6857,y:101.9929,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_25,p:{x:368.4896,y:193.1408,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_24,p:{x:278.0667,y:147.5388,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_23,p:{x:293.915,y:155.6015,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_22,p:{x:243.9872,y:130.4135,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_21,p:{x:312.1512,y:164.7678,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_20,p:{x:403.0001,y:409.7336}},{t:this.shape_19,p:{x:480.8404,y:409.6893}},{t:this.shape_18,p:{x:403.014,y:446.8214}},{t:this.shape_17,p:{x:505.7863,y:446.8214}},{t:this.shape_16,p:{x:526.1319,y:365.3609}},{t:this.shape_15,p:{x:502.4718,y:348.838}},{t:this.shape_14,p:{x:542.5318,y:389.082}}]},1).to({state:[{t:this.shape_34,p:{x:174.8731,y:374.8351,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_33,p:{x:176.1964,y:378.0468,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_32,p:{x:253.4026,y:252.5142,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_31,p:{x:257.4468,y:251.6324,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_30,p:{x:228.7226,y:290.813,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_29,p:{x:234.5352,y:294.5641,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_28,p:{x:250.6054,y:127.0482,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_27,p:{x:368.6551,y:202.8728,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_26,p:{x:224.4258,y:110.2596,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_25,p:{x:394.8253,y:219.6181,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_24,p:{x:309.6076,y:164.9088,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_23,p:{x:324.5363,y:174.5673,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_22,p:{x:277.4835,y:144.3507,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_21,p:{x:341.7259,y:185.5705,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_20,p:{x:403.0001,y:409.7336}},{t:this.shape_19,p:{x:480.8404,y:409.6893}},{t:this.shape_18,p:{x:403.014,y:446.8214}},{t:this.shape_17,p:{x:505.7863,y:446.8214}},{t:this.shape_16,p:{x:526.1319,y:365.3609}},{t:this.shape_15,p:{x:502.4718,y:348.838}},{t:this.shape_14,p:{x:542.5318,y:389.082}}]},1).to({state:[{t:this.shape_34,p:{x:182.0103,y:379.3728,rotation:-7.3234,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_33,p:{x:183.0501,y:382.6873,rotation:-7.3234,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_32,p:{x:270.8597,y:264.3179,rotation:-7.3234,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_31,p:{x:274.9655,y:263.7902,rotation:-7.3234,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_30,p:{x:242.9489,y:300.3338,rotation:-7.3234,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_29,p:{x:248.4146,y:304.5751,rotation:-7.3234,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_28,p:{x:278.9569,y:139.0747,rotation:-7.3234,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_27,p:{x:389.991,y:224.8587,rotation:-7.3234,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_26,p:{x:254.3308,y:120.0773,rotation:-7.3234,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_25,p:{x:414.6115,y:243.8122,rotation:-7.3234,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_24,p:{x:334.4559,y:181.9132,rotation:-7.3234,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_23,p:{x:348.4914,y:192.831,rotation:-7.3234,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_22,p:{x:304.2344,y:158.6447,rotation:-7.3234,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_21,p:{x:364.6627,y:205.2846,rotation:-7.3234,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_20,p:{x:403.0001,y:409.7336}},{t:this.shape_19,p:{x:480.8404,y:409.6893}},{t:this.shape_18,p:{x:403.014,y:446.8214}},{t:this.shape_17,p:{x:505.7863,y:446.8214}},{t:this.shape_16,p:{x:526.1319,y:365.3609}},{t:this.shape_15,p:{x:502.4718,y:348.838}},{t:this.shape_14,p:{x:542.5318,y:389.082}}]},1).to({state:[{t:this.shape_34,p:{x:187.4672,y:383.6044,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_33,p:{x:188.2825,y:386.9816,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_32,p:{x:283.8431,y:274.751,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_31,p:{x:287.9755,y:274.4998,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_30,p:{x:253.5765,y:308.819,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_29,p:{x:258.7461,y:313.4178,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_28,p:{x:300.3211,y:150.3162,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_27,p:{x:405.3678,y:243.3636,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_26,p:{x:277.021,y:129.7079,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_25,p:{x:428.6652,y:263.9278,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_24,p:{x:352.83,y:196.7853,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_23,p:{x:366.1036,y:208.6211,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_22,p:{x:324.2328,y:171.5396,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_21,p:{x:381.4057,y:222.1326,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_20,p:{x:403.0001,y:409.7336}},{t:this.shape_19,p:{x:480.8404,y:409.6893}},{t:this.shape_18,p:{x:403.014,y:446.8214}},{t:this.shape_17,p:{x:505.7863,y:446.8214}},{t:this.shape_16,p:{x:526.1319,y:365.3609}},{t:this.shape_15,p:{x:502.4718,y:348.838}},{t:this.shape_14,p:{x:542.5318,y:389.082}}]},1).to({state:[{t:this.shape_34,p:{x:191.9465,y:387.333,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_33,p:{x:192.5554,y:390.7534,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_32,p:{x:294.7489,y:284.5306,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_31,p:{x:298.8889,y:284.5306,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_30,p:{x:262.4711,y:316.6986,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_29,p:{x:267.3521,y:321.6026,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_28,p:{x:318.7475,y:161.3272,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_27,p:{x:417.9523,y:260.5763,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_26,p:{x:296.7414,y:139.3432,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_25,p:{x:439.9584,y:282.516,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_24,p:{x:368.3388,y:210.8964,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_23,p:{x:380.8695,y:223.5156,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_22,p:{x:341.3268,y:183.9622,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_21,p:{x:395.3231,y:237.9306,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_20,p:{x:403.0001,y:409.7336}},{t:this.shape_19,p:{x:480.8404,y:409.6893}},{t:this.shape_18,p:{x:403.014,y:446.8214}},{t:this.shape_17,p:{x:505.7863,y:446.8214}},{t:this.shape_16,p:{x:526.1319,y:365.3609}},{t:this.shape_15,p:{x:502.4718,y:348.838}},{t:this.shape_14,p:{x:542.5318,y:389.082}}]},1).to({state:[{t:this.shape_34,p:{x:191.9449,y:387.2278,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_33,p:{x:192.5538,y:390.6482,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_32,p:{x:294.7455,y:284.4272,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_31,p:{x:298.8855,y:284.4272,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_30,p:{x:262.4684,y:316.5946,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_29,p:{x:267.3493,y:321.4985,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_28,p:{x:318.7438,y:161.2259,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_27,p:{x:417.9468,y:260.4732,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_26,p:{x:296.738,y:139.2423,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_25,p:{x:439.9526,y:282.4126,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_24,p:{x:368.3342,y:210.7942,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_23,p:{x:380.8647,y:223.4132,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_22,p:{x:341.3226,y:183.8605,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_21,p:{x:395.3181,y:237.828,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_20,p:{x:403.0001,y:409.7336}},{t:this.shape_19,p:{x:480.8404,y:409.6893}},{t:this.shape_18,p:{x:403.014,y:446.8214}},{t:this.shape_17,p:{x:505.7863,y:446.8214}},{t:this.shape_16,p:{x:526.1319,y:365.3609}},{t:this.shape_15,p:{x:502.4718,y:348.838}},{t:this.shape_14,p:{x:542.5318,y:389.082}}]},1).to({state:[{t:this.shape_20,p:{x:403.1053,y:409.8392}},{t:this.shape_19,p:{x:480.947,y:409.7949}},{t:this.shape_18,p:{x:403.1192,y:446.9277}},{t:this.shape_17,p:{x:505.8932,y:446.9277}},{t:this.shape_16,p:{x:526.2393,y:365.4658}},{t:this.shape_15,p:{x:502.5787,y:348.9426}},{t:this.shape_14,p:{x:542.6394,y:389.1872}}]},1).to({state:[{t:this.shape_20,p:{x:403.1053,y:409.8392}},{t:this.shape_19,p:{x:480.947,y:409.7949}},{t:this.shape_18,p:{x:403.1192,y:446.9277}},{t:this.shape_17,p:{x:505.8932,y:446.9277}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_14,p:{x:542.6394,y:389.1872}}]},8).to({state:[{t:this.shape_20,p:{x:403.1053,y:409.8392}},{t:this.shape_19,p:{x:480.947,y:409.7949}},{t:this.shape_18,p:{x:403.1192,y:446.9277}},{t:this.shape_17,p:{x:505.8932,y:446.9277}}]},1).to({state:[{t:this.shape_20,p:{x:403.0001,y:409.7336}},{t:this.shape_19,p:{x:480.8404,y:409.6893}},{t:this.shape_18,p:{x:403.014,y:446.8214}},{t:this.shape_17,p:{x:505.7863,y:446.8214}},{t:this.shape_16,p:{x:526.1319,y:365.3609}},{t:this.shape_15,p:{x:502.4718,y:348.838}},{t:this.shape_14,p:{x:542.5318,y:389.082}}]},18).to({state:[{t:this.shape_34,p:{x:191.9496,y:387.3435,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_33,p:{x:192.5585,y:390.764,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_32,p:{x:294.7556,y:284.5375,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_31,p:{x:298.8957,y:284.5375,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_30,p:{x:262.4767,y:316.7066,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_29,p:{x:267.3579,y:321.6107,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_28,p:{x:318.755,y:161.3299,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_27,p:{x:417.9632,y:260.5823,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_26,p:{x:296.7481,y:139.3451,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_25,p:{x:439.9701,y:282.5228,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_24,p:{x:368.3481,y:210.9008,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_23,p:{x:380.8792,y:223.5204,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_22,p:{x:341.3351,y:183.9657,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_21,p:{x:395.3333,y:237.9359,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_20,p:{x:403.0001,y:409.7336}},{t:this.shape_19,p:{x:480.8404,y:409.6893}},{t:this.shape_18,p:{x:403.014,y:446.8214}},{t:this.shape_17,p:{x:505.7863,y:446.8214}},{t:this.shape_16,p:{x:526.1319,y:365.3609}},{t:this.shape_15,p:{x:502.4718,y:348.838}},{t:this.shape_14,p:{x:542.5318,y:389.082}}]},1).to({state:[{t:this.shape_34,p:{x:187.4672,y:383.6044,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_33,p:{x:188.2825,y:386.9816,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_32,p:{x:283.8431,y:274.751,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_31,p:{x:287.9755,y:274.4998,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_30,p:{x:253.5765,y:308.819,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_29,p:{x:258.7461,y:313.4178,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_28,p:{x:300.3211,y:150.3162,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_27,p:{x:405.3678,y:243.3636,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_26,p:{x:277.021,y:129.7079,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_25,p:{x:428.6652,y:263.9278,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_24,p:{x:352.83,y:196.7853,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_23,p:{x:366.1036,y:208.6211,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_22,p:{x:324.2328,y:171.5396,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_21,p:{x:381.4057,y:222.1326,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_20,p:{x:403.0001,y:409.7336}},{t:this.shape_19,p:{x:480.8404,y:409.6893}},{t:this.shape_18,p:{x:403.014,y:446.8214}},{t:this.shape_17,p:{x:505.7863,y:446.8214}},{t:this.shape_16,p:{x:526.1319,y:365.3609}},{t:this.shape_15,p:{x:502.4718,y:348.838}},{t:this.shape_14,p:{x:542.5318,y:389.082}}]},1).to({state:[{t:this.shape_34,p:{x:182.0118,y:379.428,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_33,p:{x:183.0517,y:382.7426,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_32,p:{x:270.863,y:264.3714,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_31,p:{x:274.9689,y:263.8437,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_30,p:{x:242.9517,y:300.3878,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_29,p:{x:248.4174,y:304.6292,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_28,p:{x:278.9607,y:139.1261,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_27,p:{x:389.9965,y:224.9118,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_26,p:{x:254.3342,y:120.1283,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_25,p:{x:414.6173,y:243.8656,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_24,p:{x:334.4606,y:181.9654,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_23,p:{x:348.4962,y:192.8834,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_22,p:{x:304.2385,y:158.6964,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_21,p:{x:364.6678,y:205.3372,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_20,p:{x:403.0001,y:409.7336}},{t:this.shape_19,p:{x:480.8404,y:409.6893}},{t:this.shape_18,p:{x:403.014,y:446.8214}},{t:this.shape_17,p:{x:505.7863,y:446.8214}},{t:this.shape_16,p:{x:526.1319,y:365.3609}},{t:this.shape_15,p:{x:502.4718,y:348.838}},{t:this.shape_14,p:{x:542.5318,y:389.082}}]},1).to({state:[{t:this.shape_34,p:{x:174.8762,y:374.8456,rotation:-12.2993,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_33,p:{x:176.1995,y:378.0573,rotation:-12.2993,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_32,p:{x:253.4093,y:252.5211,rotation:-12.2993,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_31,p:{x:257.4537,y:251.6393,rotation:-12.2993,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_30,p:{x:228.7282,y:290.821,rotation:-12.2993,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_29,p:{x:234.541,y:294.5722,rotation:-12.2993,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_28,p:{x:250.6129,y:127.0509,rotation:-12.2993,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_27,p:{x:368.666,y:202.8789,rotation:-12.2993,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_26,p:{x:224.4325,y:110.2615,rotation:-12.2993,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_25,p:{x:394.8369,y:219.625,rotation:-12.2993,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_24,p:{x:309.6168,y:164.9132,rotation:-12.2993,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_23,p:{x:324.5459,y:174.5721,rotation:-12.2993,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_22,p:{x:277.4918,y:144.3541,rotation:-12.2993,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_21,p:{x:341.7361,y:185.5758,rotation:-12.2993,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_20,p:{x:403.0001,y:409.7336}},{t:this.shape_19,p:{x:480.8404,y:409.6893}},{t:this.shape_18,p:{x:403.014,y:446.8214}},{t:this.shape_17,p:{x:505.7863,y:446.8214}},{t:this.shape_16,p:{x:526.1319,y:365.3609}},{t:this.shape_15,p:{x:502.4718,y:348.838}},{t:this.shape_14,p:{x:542.5318,y:389.082}}]},1).to({state:[{t:this.shape_34,p:{x:165.8254,y:370.2928,rotation:-18.2376,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_33,p:{x:167.474,y:373.3505,rotation:-18.2376,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_32,p:{x:231.2841,y:240.4949,rotation:-18.2376,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_31,p:{x:235.2157,y:239.1994,rotation:-18.2376,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_30,p:{x:210.6971,y:281.1444,rotation:-18.2376,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_29,p:{x:216.8671,y:284.2742,rotation:-18.2376,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_28,p:{x:215.5213,y:115.9826,rotation:-18.2376,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_27,p:{x:340.7906,y:179.1926,rotation:-18.2376,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_26,p:{x:187.7434,y:101.9914,rotation:-18.2376,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_25,p:{x:368.5547,y:193.1418,rotation:-18.2376,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_24,p:{x:278.1281,y:147.5385,rotation:-18.2376,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_23,p:{x:293.977,y:155.6014,rotation:-18.2376,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_22,p:{x:244.0472,y:130.4128,rotation:-18.2376,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_21,p:{x:312.214,y:164.768,rotation:-18.2376,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_20,p:{x:403.0001,y:409.7336}},{t:this.shape_19,p:{x:480.8404,y:409.6893}},{t:this.shape_18,p:{x:403.014,y:446.8214}},{t:this.shape_17,p:{x:505.7863,y:446.8214}},{t:this.shape_16,p:{x:526.1319,y:365.3609}},{t:this.shape_15,p:{x:502.4718,y:348.838}},{t:this.shape_14,p:{x:542.5318,y:389.082}}]},1).to({state:[{t:this.shape_34,p:{x:159.0502,y:367.3229,rotation:-22.6913,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_33,p:{x:160.9311,y:370.2432,rotation:-22.6913,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_32,p:{x:214.2297,y:232.8398,rotation:-22.6913,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_31,p:{x:218.0486,y:231.2429,rotation:-22.6913,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_30,p:{x:196.8621,y:274.9633,rotation:-22.6913,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_29,p:{x:203.2562,y:277.6044,rotation:-22.6913,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_28,p:{x:188.8469,y:109.9328,rotation:-22.6913,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_27,p:{x:318.6407,y:163.2221,rotation:-22.6913,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_26,p:{x:160.0676,y:98.1414,rotation:-22.6913,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_25,p:{x:347.4029,y:174.9727,rotation:-22.6913,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_24,p:{x:253.7122,y:136.5307,rotation:-22.6913,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_23,p:{x:270.1386,y:143.3383,rotation:-22.6913,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_22,p:{x:218.4059,y:122.1037,rotation:-22.6913,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_21,p:{x:289.0315,y:151.0606,rotation:-22.6913,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_20,p:{x:403.0001,y:409.7336}},{t:this.shape_19,p:{x:480.8404,y:409.6893}},{t:this.shape_18,p:{x:403.014,y:446.8214}},{t:this.shape_17,p:{x:505.7863,y:446.8214}},{t:this.shape_16,p:{x:526.1319,y:365.3609}},{t:this.shape_15,p:{x:502.4718,y:348.838}},{t:this.shape_14,p:{x:542.5318,y:389.082}}]},1).to({state:[{t:this.shape_34,p:{x:151.4477,y:364.8892,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_33,p:{x:153.5646,y:367.6436,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_32,p:{x:195.2852,y:226.2806,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_31,p:{x:198.9589,y:224.3723,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_30,p:{x:181.4705,y:269.7032,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_29,p:{x:188.0622,y:271.805,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_28,p:{x:159.7916,y:105.8925,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_27,p:{x:293.5699,y:148.2352,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_26,p:{x:130.1309,y:96.5282,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_25,p:{x:323.2102,y:157.5602,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_24,p:{x:226.6454,y:127.0199,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_23,p:{x:243.5813,y:132.4418,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_22,p:{x:190.2609,y:115.5704,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_21,p:{x:263.0513,y:138.5709,rotation:-27.4495,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_20,p:{x:403.0001,y:409.7336}},{t:this.shape_19,p:{x:480.8404,y:409.6893}},{t:this.shape_18,p:{x:403.014,y:446.8214}},{t:this.shape_17,p:{x:505.7863,y:446.8214}},{t:this.shape_16,p:{x:526.1319,y:365.3609}},{t:this.shape_15,p:{x:502.4718,y:348.838}},{t:this.shape_14,p:{x:542.5318,y:389.082}}]},1).wait(2));

	// Layer_7
	this.bg_mc = new lib.bg();
	this.bg_mc.name = "bg_mc";
	this.bg_mc.setTransform(320.45,240.4,1.417,1.3026,0,0,0,0.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(63));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(339.6,240,281.5,240);
// library properties:
lib.properties = {
	id: '65C0BA409DB3F1429919413E66F415C6',
	width: 640,
	height: 480,
	fps: 24,
	color: "#6666FF",
	opacity: 0.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['65C0BA409DB3F1429919413E66F415C6'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
// 	var lastW, lastH, lastS=1;		
// 	window.addEventListener('resize', resizeCanvas);		
// 	resizeCanvas();		
// 	function resizeCanvas() {			
// 		var w = lib.properties.width, h = lib.properties.height;			
// 		var iw = window.innerWidth, ih=window.innerHeight;			
// 		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
// 		if(isResp) {                
// 			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
// 				sRatio = lastS;                
// 			}				
// 			else if(!isScale) {					
// 				if(iw<w || ih<h)						
// 					sRatio = Math.min(xRatio, yRatio);				
// 			}				
// 			else if(scaleType==1) {					
// 				sRatio = Math.min(xRatio, yRatio);				
// 			}				
// 			else if(scaleType==2) {					
// 				sRatio = Math.max(xRatio, yRatio);				
// 			}			
// 		}
// 		domContainers[0].width = w * pRatio * sRatio;			
// 		domContainers[0].height = h * pRatio * sRatio;
// 		domContainers.forEach(function(container) {				
// 			container.style.width = w * sRatio + 'px';				
// 			container.style.height = h * sRatio + 'px';			
// 		});
// 		stage.scaleX = pRatio*sRatio;			
// 		stage.scaleY = pRatio*sRatio;
// 		lastW = iw; lastH = ih; lastS = sRatio;            
// 		stage.tickOnUpdate = false;            
// 		stage.update();            
// 		stage.tickOnUpdate = true;		
// 	}
// }
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;