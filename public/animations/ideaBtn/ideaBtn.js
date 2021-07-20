(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ideaBtn_atlas_1", frames: [[0,0,891,767],[0,769,891,767],[893,0,277,589]]},
		{name:"ideaBtn_atlas_2", frames: [[0,0,891,767],[893,0,891,767],[0,769,891,767],[893,769,891,767]]},
		{name:"ideaBtn_atlas_3", frames: [[0,0,891,869],[893,771,891,767],[0,871,891,767],[893,0,891,769]]},
		{name:"ideaBtn_atlas_4", frames: [[0,0,891,869],[893,0,891,869],[0,871,891,869],[893,871,891,869]]},
		{name:"ideaBtn_atlas_5", frames: [[0,1049,891,869],[893,1049,891,869],[0,0,1227,1047]]},
		{name:"ideaBtn_atlas_6", frames: [[0,0,891,767],[893,0,891,767],[0,769,891,767],[893,769,891,767]]}
];


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



(lib.CachedBmp_22 = function() {
	this.initialize(ss["ideaBtn_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["ideaBtn_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["ideaBtn_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["ideaBtn_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["ideaBtn_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["ideaBtn_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["ideaBtn_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["ideaBtn_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["ideaBtn_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["ideaBtn_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["ideaBtn_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["ideaBtn_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["ideaBtn_atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["ideaBtn_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_49 = function() {
	this.initialize(ss["ideaBtn_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_48 = function() {
	this.initialize(ss["ideaBtn_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_47 = function() {
	this.initialize(ss["ideaBtn_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["ideaBtn_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["ideaBtn_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["ideaBtn_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_43 = function() {
	this.initialize(ss["ideaBtn_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["ideaBtn_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
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


(lib.shine = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {hoverStop:0,hoverStart:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var hovering = false;
	}
	this.frame_40 = function() {
		if (this.hovering) {
			console.log("1");
			this.gotoAndPlay('hoverStart');
		} else {
			this.gotoAndPlay('hoverStop');
			console.log("2");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40).call(this.frame_40).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEKGqIgJgKIgIgKQgHgJgJgFIgKgTQgFgIgbgiQgbglggg+QgFgdgXgjIgWggIgFgJQgohHg+hKQgwg4hLhKIgOgOIgthAIgwhHQgaglgXgZIgBgVIgGghQBagvBbBMQBgBRBZBYQA6A5AsBFQAwBLAkBSQA4CFAOCRQAGA6gsAcIgHgGg");
	this.shape.setTransform(2.5058,-40.156);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AGNKGQgMgigPgiQgPgkgWguQgohWgegtQgNgxgSg3Qg1ihhAhvQhPiMhqhVQgpghhCgnQgPgSgegYQhBgyiDhjIhSg/IAEhEQAXgDAUgMQAMAAANACQAhAFAyAVQC7BOB6BPQCeBmBeB/QAiAvAmBEQCaEUA1E5QAHAqgBAbQgCAmgRAaQgYAlgzADIgFAAIgFAAg");
	this.shape_1.setTransform(-9.2062,-22.9187);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AGOPMQgugHgWgnQgfg2gBhAQgChhgLhiQgNh0gXhzQgWhxgthrQgzh2g/hxIh7jjQgVgngZgkQg9hahHhTQhNhbhVhTQgogogngpQg1g4AihCQAXguA0gFQBNAJA1A8QAaAfAcAdQBOBTBKBYQBOBdBDBjQBJBrA6BzQA5BwA7BwQA7BtAlB2QAgBpASBsQAWCAALCAIASDSQABATgHASQgbBAhAAAIgMgBg");
	this.shape_2.setTransform(-14.89,5.653);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACcQ7QgkolifoRQhNkeh5kMQh8kQg7khQgNg+BAgWQBQgaAnBKQAnANARAkQDHGaDXGRQBHCGAtCSQCVHphpH9QgMA7gFA/QgGBGhAANQgVAFgSAAQhaAAgIh3g");
	this.shape_3.setTransform(-34.6152,19.9012);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA8VMQgzgbgFg+QhYmXAInCQAOsSjPr4QgJghgFgiQAskoCeD3QApA/AiBIQCaFGBTFYQBUDsgwDyQA+K+jfJrQgFANgNAAQgLAAgRgJg");
	this.shape_4.setTransform(-57.7273,31.6543);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhSXMQgfgQAAghQgBjkAsjnQAhixAJiyQALjigKjiQgJjagXjbQgvmshBmrQARgjATghQAJgQALgOQALgMANgLIBuBQQAlEGApEFQAvEsAPEvQAOEsgBEuQgCEvg6EoQgMBZgQBYQgPBYhCAxQgWARgZAAQgSAAgUgKgAgT3VIAKBEIgJAAQAAgmgBgeg");
	this.shape_5.setTransform(-70.968,26.6368);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhXVPQgfgIgLgfQgMghADgkIALicIAKiGIAJiGIAIiHIAIiXQAEhMADhMIAEiYIADiZIAAiSIABiUIgBiTIgBiUIgCihIgDiiIgEihQgChgAAhfQABhDAjg5QAgg1A7gDQAJgDAJAFQASAJAKASQBABogIB6QgFBIgEBHQgDBHgCBIQgDBHgBBIIgBCOIABCaIAACYIgBCZIgBCXIgBCYIgDCYIgFCZQgEB0gGB0QgGB4gPB3QgPB3gbB1QgKAqgMAqQgDALgGAKQgeARgjAAQgNAAgPgDg");
	this.shape_6.setTransform(-86.0776,37.7767);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgCXFQhCgxgPhYQgQhYgMhZQg6kogCkvQgBkuAOksQAPkvAvksQApkFAlkGIBuhQQANALALAMQALAOAJAQQATAhARAjQhBGrgvGsQgXDbgJDaQgKDiALDiQAJCyAhCxQAsDngBDkQAAAhgfAQQgUAKgSAAQgZAAgWgRgAAK2RIAJhEIAABEIgJAAg");
	this.shape_7.setTransform(-101.582,26.6368);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgCXFQhCgxgPhYQgQhYgMhZQg6kogCkvQgBkuAOksQAPkvAvksQApkFAlkGIBuhQQANALALAMQALAOAJAQQATAhARAjQhBGrgvGsQgXDbgJDaQgKDiALDiQAJCyAhCxQAsDngBDkQAAAhgfAQQgUAKgSAAQgZAAgWgRgAAK2RIADgVIAGgvIAAAvIAAAVIgJAAg");
	this.shape_8.setTransform(-112.382,26.6368);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARVQQkCpcATrBQg+jvBFjwQA9ldCIlPQAchJAlhCQCQkAA+ElQgDAigHAhQiiMDA+MRQAjHAhAGcQgBA+gyAeQgRALgMAAQgMAAgFgMg");
	this.shape_9.setTransform(-129.7603,40.3495);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAPTWQhBAAgShDQgRg9gYg4QjJnfA0n+QAPiWAsiSQCFmzB1m4QAKgnAkgUQAXhRBUAKQBDAKgBA/QgDEnhEEjQhDEegUEnQg3ImBHIiQARCKh9AAIgFAAg");
	this.shape_10.setTransform(-146.9245,39.1929);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AArRCQgZgNgKgaQh2krgxk8QgUh/gGh+QgIi2AUizQALhiAQheQBOkwAzk1QATh/A+AAQAmAAA2AyQAeAbACApQABAOgDAPQgyEmg/EjQg+EdACEpQADE9CFEnQAwBsgVBrQgQBQg1AAQgcAAgkgVg");
	this.shape_11.setTransform(-167.6053,44.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABJNhQg7g+gchNQiIlkg0l3QgxloBYlfQA1jVCRgZQAFAHAIAGQAOAMADAEQADAGAAAIIABAPQAAAIACAIQgOA/gVBsIgVBuQgJAxgFAlIgFBOIgEBCQgBAZAAANIACAOQgODDAuDEQBWFsBbFpQAoCcgvAAQgkAAhWhag");
	this.shape_12.setTransform(-181.7783,60.5672);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ACsKMQhMgggxhJQgagngbglQhNhlgzh0Qgxhzgih4QgehtgQhwQgQh3AHh4QACglAIgiQAEgOAAgOQAChWBOgYQASgFASAGQBBATACBFQAAAigCAkQgKB8AFB8QADBHARBCQAgB4ApB0QAqByBLBjQA9BRA/BPQArA1gkA6QgZAngrAAQgJAAgKgBg");
	this.shape_13.setTransform(-195.6788,79.0775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ACHHCQg2gVguhEQhIhxg/hxQgohGgXhIQgZhOgLhQQgSh5AShzIACgKQALgkAjgKQADADABACIAEAKIAGAKQAEAHAFAGIAFARIARAnQAPAjAPA5QgBAZALAhIAMAgIADAJQAVBHAoBSQAgBAA3BaIALASIAeBMIAiBXQASAvATAhQgCALgBAMIABAlQgNACgMAAQgYAAgXgIg");
	this.shape_14.setTransform(-206.1938,87.5475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},3).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_14}]},1).to({state:[]},2).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227.1,-122.7,268,300.2);


(lib.background = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("EgppApqMAAAhTTMBTTAAAMAAABTTg");
	this.shape.setTransform(266.575,266.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(0,0,533.2,533.2), null);


// stage content:
(lib.ideaBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {startClick:1,endClick:17,background:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,16,31];
	// timeline functions:
	this.frame_0 = function() {
		function onClick() {
			if (clicked) {
				lawBtn.gotoAndPlay('endClick');
			} else {
				lawBtn.gotoAndPlay('startClick');
			};
			clicked = !clicked;
		}
		
		function onEnter() {
			shine.gotoAndPlay('hoverStart');
			lawBtn.shine_mc.hovering = true;
		}
		
		function onLeave() {
			lawBtn.shine_mc.hovering = false;
		}
		this.stop();
		var clicked = false;
		var lawBtn = this;
		var shine = this.shine_mc;
		stage.enableMouseOver(20);
		//var hovering = false;
		
		this.background_mc.addEventListener("click", onClick);
		this.background_mc.addEventListener('mouseover',onEnter);
		this.background_mc.addEventListener('mouseout',onLeave);
	}
	this.frame_16 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(15).call(this.frame_31).wait(33));

	// shine
	this.shine_mc = new lib.shine();
	this.shine_mc.name = "shine_mc";
	this.shine_mc.setTransform(402.25,244.8);

	this.timeline.addTween(cjs.Tween.get(this.shine_mc).to({_off:true},53).wait(11));

	// Layer_5
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(240.6,270.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},53).wait(11));

	// Layer_2
	this.instance_1 = new lib.CachedBmp_43();
	this.instance_1.setTransform(87.7,54.85,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_44();
	this.instance_2.setTransform(87.7,54.85,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4E2DD").s().p("AXSfBIj3j3QggggAAgtQAAguAgggQAhggAtAAQAtAAAgAgID3D3QAhAgAAAtQAAAughAgQggAhgtgBQgtABghghgA6DfBQggggAAguQAAgtAgggID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAtggAhIj3D3QggAhgtgBQgtABghghgAdkG+QgugBggggQgggfAAgvQAAgtAgggQAgghAuAAIFdAAQAuAAAgAhQAgAgAAAtQAAAuggAgQghAhgtAAgEgjAAG+QgugBggggQgggfAAgvQAAgtAgggQAhghAtAAIFdAAQAuAAAgAhQAgAgAAAtQAAAvggAfQggAgguABgAUjt6QgtgCgegiQgfghACgvQACgtAigeIEDjqQAigeAuACQAtACAeAiQAeAhgCAtQgCAvghAeIkDDqQggAdgqAAIgGgBgA2MuaIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAhAAAtQAAAtggAgQggAggtAAQguAAgggggAhN3IQggggAAgtIAAleQAAgtAgghQAggfAtAAQAuAAAgAfQAgAhAAAtIAAFeQAAAtggAgQggAgguAAQgtAAggggg");
	this.shape.setTransform(310.475,243.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D6E1D7").s().p("EgcTAhZQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgEAZAAg0Ij3j3QggggAAguQAAgtAgggQAhggAtAAQAtAAAgAgID3D3QAhAgAAAtQAAAughAgQggAggtAAQgtAAghgggEAgqAG8QguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAtggAgQghAhgtAAgEgmGAG8QguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAWRvkQgtgCgegiQgfgiACguQACgtAigeIEDjqQAigfAuADQAtACAeAiQAeAhgCAtQgCAughAfIkDDqQggAcgqAAIgGAAgA4HwZIj3j3QggggAAgtQAAgtAgghQAgggAtAAQAuAAAgAgID3D3QAgAhAAAtQAAAtggAgQggAhgtAAQguAAggghgAhH5gQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_1.setTransform(309.875,244.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0D9B5").s().p("EgeOAj3QggggAAgtQAAgtAgghID3j2QAgghAuABQAtgBAgAhQAgAfAAAtQAAAuggAhIj3D2QggAhguAAQgtAAggghgEAanAjSIj4j2QgfghAAgtQAAgtAfghQAhgfAtAAQAuAAAfAfID4D4QAgAgAAAtQAAAtggAgQggAhguAAQgtAAggghgEAjXAHuQguAAggggQgYgYgGggIAAgsQAGggAYgYQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAfQghAhgtAAgEgozAHuQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgAe2GAQAAgMABgKIAAAsQgBgLAAgLgAYIwiQgugCgdgjQgfghACguQACguAigeIEDjqQAigeAtACQAuADAeAhQAeAigCAtQgCAughAeIkDDqQggAdgqAAIgGAAgA56xXIj3j3QggggAAgtQAAguAgggQAhggAsAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAhgtgBQgtABghghgAhN7/QggggAAgtIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAtggAgQghAhgtAAQgtAAggghg");
	this.shape_2.setTransform(310.5,239.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7D49F").s().p("EgeOAj3QggggAAgtQAAgtAgghID3j2QAgghAuABQAtgBAgAhQAgAfAAAtQAAAuggAhIj3D2QggAhguAAQgtAAggghgEAanAjSIj4j2QgfghAAgtQAAgtAfghQAhgfAtAAQAuAAAfAfID4D4QAgAgAAAtQAAAtggAgQggAhguAAQgtAAggghgEAjXAHuQguAAggggQgYgYgGggIAAgsQAGggAYgYQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAfQghAhgtAAgEgozAHuQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgAe2GAQAAgMABgKIAAAsQgBgLAAgLgAYIwiQgugCgdgjQgfghACguQACguAigeIEDjqQAigeAtACQAuADAeAhQAeAigCAtQgCAughAeIkDDqQggAdgqAAIgGAAgA56xXIj3j3QggggAAgtQAAguAgggQAhggAsAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAhgtgBQgtABghghgAhN7/QggggAAgtIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAtggAgQghAhgtAAQgtAAggghg");
	this.shape_3.setTransform(310.5,239.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E9D39A").s().p("EghvAoQQggggAAguQAAgsAgghID3j3QAgggAtAAQAuAAAgAgQAgAfAAAuQAAAtggAhIj3D3QggAhgtgBQguABggghgEAd0Am9Ij4j3QgfggAAgtQAAguAfggQAhggAtAAQAtAAAhAgID2D3QAhAgAAAuQAAAtghAgQgfAhgtgBQguABggghgEAotAIcQgugBggggQgYgXgGggIAAgsQAGghAYgXQAgghAuAAIFdAAQAuAAAgAhQAgAgAAAtQAAAuggAgQggAhguAAgEguJAIcQgugBggggQgggfAAgvQAAgtAgggQAhghAtAAIFdAAQAuAAAgAhQAgAgAAAtQgBAvggAfQgfAggvABgEAkLAGtQAAgLACgKIAAAsQgCgLAAgMgAaax9QgtgDgfgiQgegiACgtQACguAigeIEDjqQAhgeAvACQAtACAeAiQAeAhgCAtQgCAvgiAeIkCDqQggAdgqAAIgGAAgA8tznIj4j3QgfggAAgtQAAguAfggQAhggAtAAQAuAAAfAgID4D3QAgAhAAAsQAAAuggAgQggAhguAAQgtAAggghgEgBEggXQgfggAAgtIAAleQAAgtAfghQAhgfAsAAQAuAAAhAfQAfAhAAAtIAAFeQAAAtgfAgQghAgguABQgsgBghggg");
	this.shape_4.setTransform(309.55,234.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E9D39A").s().p("EgjmAqkQggggAAgtQAAgtAgghID3j3QAgggAtAAQAuAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhguAAQgtAAggghgEAf7ApGIj3j3QggggAAguQAAgtAgggQAhggAtAAQAtAAAgAgID3D3QAhAgAAAtQAAAughAgQggAggtAAQgtAAghgggEAq/AI0QgtAAghggQgYgYgGgfIAAgtQAGggAYgYQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgEgwbAI0QguAAggggQggggAAguQAAgtAgghQAgggAuAAIFdAAQAuAAAgAgQAgAhAAAtQgBAuggAgQggAgguAAgEAkjAHGQAAgLACgLIAAAtQgCgLAAgMgAcYy7QgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgA+G0+Ij3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEgAsgirQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_5.setTransform(307.175,232.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F1CD80").s().p("EgjmAqkQggggAAgtQAAgtAgghID3j3QAgggAtAAQAuAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhguAAQgtAAggghgEAf7ApGIj3j3QggggAAguQAAgtAgggQAhggAtAAQAtAAAgAgID3D3QAhAgAAAtQAAAughAgQggAggtAAQgtAAghgggEAq/AI0QgtAAghggQgYgYgGgfIAAgtQAGggAYgYQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgEgwbAI0QguAAggggQggggAAguQAAgtAgghQAgggAuAAIFdAAQAuAAAgAgQAgAhAAAtQgBAuggAgQggAgguAAgEAkjAHGQAAgLACgLIAAAtQgCgLAAgMgAcYy7QgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgA+G0+Ij3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEgAsgirQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_6.setTransform(307.175,232.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F6C96F").s().p("EghmAoaQggghAAgtQAAgtAgghID3j2QAgggAtgBQAuABAgAgQAgAeAAAuQAAAuggAgIj3D4QggAgguAAQgtAAgggggEAeHAmzIj3j2QggghAAgtQAAgtAgggQAgghAtABQAugBAgAhID3D3QAgAgAAAtQAAAtggAgQggAhgtAAQguAAggghgEAovAIsQgtAAghggQgYgYgGggIAAgsQAGggAYgYQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAfQggAhguAAgEguLAIsQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQgBAuggAgQggAgguAAgEAiTAG+QAAgMACgKIAAAsQgCgKAAgMgAbMxxQgtgDgegiQgfgiACgtQACguAigeIEDjqQAigeAuACQAtACAeAiQAeAhgCAtQgCAvghAeIkDDqQggAdgqAAIgGAAgA8ezMIj4j3QggggAAgtQAAguAgggQAhggAtAAQAtAAAgAgID3D3QAhAgAAAtQAAAughAgQggAhgtgBQgtABggghgEgAmgghQgggfAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAfQghAhgtAAQgtAAggghg");
	this.shape_7.setTransform(306.625,232.9);

	this.instance_3 = new lib.CachedBmp_45();
	this.instance_3.setTransform(0,-28.9,0.5,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8C765").s().p("EgfhAktQggggAAgtQAAguAgggID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAgguABQgsgBghgggEAalAhnIj3j2QggghAAgtQAAgtAgggQAhghAsAAQAuAAAgAhID3D3QAgAgABAtQgBAtggAgQggAhgtAAQgtAAghghgEAkXAHKQguAAggggQgZgYgFggIAAgsQAFggAZgYQAfggAvAAIFcAAQAvAAAfAgQAgAgABAuQgBAuggAfQggAhguAAgEgpyAHKQgvAAggggQgfggAAguQAAguAfggQAhggAuAAIFdAAQAuAAAfAgQAhAgAAAuQgBAuggAgQggAgguAAgEAimAFcQAAgMACgKIAAAsQgCgKAAgMgAXqv4QgtgCgegiQgeghACgvQABgtAjgeIEDjqQAhgfAuADQAuACAeAiQAdAhgBAuQgCAtgiAfIkDDqQgfAdgrAAIgGgBgA6AyCIj3j4QghgfAAguQAAgtAhghQAggfAtAAQAtAAAhAfID2D4QAhAgAAAtQAAAtghAhQgfAggtAAQguAAgggggAgT80QggggAAgtIAAldQAAgvAgggQAfgfAuAAQAuAAAgAfQAgAgAAAvIAAFdQAAAtggAgQghAggtABQgugBgfggg");
	this.shape_8.setTransform(304.7,242.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F9C359").s().p("EgfhAktQggggAAgtQAAguAgggID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAgguABQgsgBghgggEAalAhnIj3j2QggghAAgtQAAgtAgggQAhghAsAAQAuAAAgAhID3D3QAgAgABAtQgBAtggAgQggAhgtAAQgtAAghghgEAkXAHKQguAAggggQgZgYgFggIAAgsQAFggAZgYQAfggAvAAIFcAAQAvAAAfAgQAgAgABAuQgBAuggAfQggAhguAAgEgpyAHKQgvAAggggQgfggAAguQAAguAfggQAhggAuAAIFdAAQAuAAAfAgQAhAgAAAuQgBAuggAgQggAgguAAgEAimAFcQAAgMACgKIAAAsQgCgKAAgMgAXqv4QgtgCgegiQgeghACgvQABgtAjgeIEDjqQAhgfAuADQAuACAeAiQAdAhgBAuQgCAtgiAfIkDDqQgfAdgrAAIgGgBgA6AyCIj3j4QghgfAAguQAAgtAhghQAggfAtAAQAtAAAhAfID2D4QAhAgAAAtQAAAtghAhQgfAggtAAQguAAgggggAgT80QggggAAgtIAAldQAAgvAgggQAfgfAuAAQAuAAAgAfQAgAgAAAvIAAFdQAAAtggAgQghAggtABQgugBgfggg");
	this.shape_9.setTransform(304.7,242.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FBBE46").s().p("EgcFAhNQggggAAguQAAgtAgggID3j3QAgggAuAAQAtAAAgAgQAgAfAAAuQAAAtggAhIj3D3QggAgguAAQgsAAghgggEAYrAgGIj4j3QgfggAAgtQAAgtAfghQAhggAtAAQAtAAAhAgID2D3QAhAhAAAtQAAAtghAgQgfAhgtAAQguAAggghgEAgqAHHQguAAggggQgZgYgFgfIAAgtQAFggAZgYQAfggAvAAIFcAAQAvAAAfAgQAgAgABAuQgBAuggAgQggAgguAAgEgmFAHHQgvAAgfggQgggggBguQABgtAgghQAgggAuAAIFcAAQAvAAAgAgQAfAhABAtQgBAuggAgQggAgguAAgAVwugQgugDgdgiQgfghACguQACguAigeIEDjqQAhgeAuACQAuACAeAiQAeAhgCAuQgCAughAeIkEDqQgfAdgqAAIgGAAgA3uvoIj4j3QgfggAAgtQAAgtAfghQAhggAtAAQAuAAAfAgID4D3QAgAhAAAtQAAAtggAgQggAhguAAQgtAAggghgAgy5UQggggAAgtIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAtggAgQghAhgtAAQgtAAggghg");
	this.shape_10.setTransform(307.8,242.975);

	this.instance_4 = new lib.CachedBmp_46();
	this.instance_4.setTransform(87.7,54.35,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_47();
	this.instance_5.setTransform(87.7,54.85,0.5,0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FBBE48").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_11.setTransform(310.475,246.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F9C45B").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_12.setTransform(310.475,246.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F8C766").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_13.setTransform(310.475,246.525);

	this.instance_6 = new lib.CachedBmp_48();
	this.instance_6.setTransform(87.7,54.85,0.5,0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F6CA71").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_14.setTransform(310.475,246.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EFCF88").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_15.setTransform(310.475,246.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2D8B0").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_16.setTransform(310.475,246.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DDDCC2").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_17.setTransform(310.475,246.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DDDCC4").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_18.setTransform(310.475,246.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D7E0D4").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_19.setTransform(310.475,246.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D4E2DC").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_20.setTransform(310.475,246.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D3E3E0").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_21.setTransform(310.475,246.525);

	this.instance_7 = new lib.CachedBmp_49();
	this.instance_7.setTransform(87.7,54.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},32).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

	// idea_svg_copy
	this.instance_8 = new lib.CachedBmp_33();
	this.instance_8.setTransform(87.7,54.85,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_34();
	this.instance_9.setTransform(87.7,54.85,0.5,0.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D4E2DD").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_22.setTransform(310.475,246.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D6E1D7").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_23.setTransform(310.475,246.525);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E0D9B5").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_24.setTransform(310.475,246.525);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E7D49F").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_25.setTransform(310.475,246.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E9D39A").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_26.setTransform(310.475,246.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F1CD80").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_27.setTransform(310.475,246.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F6C96F").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_28.setTransform(310.475,246.525);

	this.instance_10 = new lib.CachedBmp_35();
	this.instance_10.setTransform(87.7,54.85,0.5,0.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F8C765").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_29.setTransform(310.475,246.525);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F9C359").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_30.setTransform(310.475,246.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FBBE46").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_31.setTransform(310.475,246.525);

	this.instance_11 = new lib.CachedBmp_36();
	this.instance_11.setTransform(87.7,54.85,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_37();
	this.instance_12.setTransform(87.7,54.85,0.5,0.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FBBE48").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_32.setTransform(310.475,246.525);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F9C45B").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_33.setTransform(310.475,246.525);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F8C766").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_34.setTransform(310.475,246.525);

	this.instance_13 = new lib.CachedBmp_38();
	this.instance_13.setTransform(87.7,54.85,0.5,0.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F6CA71").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_35.setTransform(310.475,246.525);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EFCF88").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_36.setTransform(310.475,246.525);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E2D8B0").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_37.setTransform(310.475,246.525);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#DDDCC2").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_38.setTransform(310.475,246.525);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#DDDCC4").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_39.setTransform(310.475,246.525);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D7E0D4").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_40.setTransform(310.475,246.525);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D4E2DC").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_41.setTransform(310.475,246.525);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D3E3E0").s().p("A4xdcQggggAAgtQAAgtAgghID3j3QAhggAtAAQAtAAAgAgQAgAfAAAuQAAAuggAgIj3D3QggAhgtAAQgtAAghghgAWQdbIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggEghFAGkQguAAggggQggggAAguQAAguAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQggAgguAAgAbpGiQguAAggggQggggAAguQAAguAgggQAgggAuAAIFdAAQAuAAAgAgQAgAgAAAuQAAAuggAgQghAggtAAgA08toIj3j3QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAggtAAQguAAgggggATVtOQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAtQgCAugiAfIkDDqQgfAcgrAAIgFAAgAhN1jQggggAAguIAAldQAAguAgggQAgggAtAAQAuAAAgAgQAgAgAAAuIAAFdQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_42.setTransform(310.475,246.525);

	this.instance_14 = new lib.CachedBmp_39();
	this.instance_14.setTransform(87.7,54.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.instance_14}]},1).to({state:[]},22).wait(11));

	// idea_svg
	this.instance_15 = new lib.CachedBmp_40();
	this.instance_15.setTransform(87.7,54.85,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_41();
	this.instance_16.setTransform(87.7,54.85,0.5,0.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D4E2DD").s().p("EgH6Ah7QACg0gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkYAAkxQAAkyBzkXQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEXAAEyQAAExhzEYQhvEOjLDQQhiBlhwBOQldG+AoGjgA4xZeQggghAAgtQAAgtAgggID3j4QAhgfAtAAQAtAAAgAfQAgAfAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAgtQAAguAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAhgtgBQguABggghgEghFAClQguAAggggQggggAAguQAAguAggfQAhggAtAAIFdAAQAuAAAgAgQAgAfAAAuQAAAuggAgQggAgguAAgAbpCkQguAAggghQggggAAgtQAAgvAggfQAggfAugBIFdAAQAuABAgAfQAgAfAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtAAQguAAgggggATVxNQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAgggQAggfAtgBQAuABAgAfQAgAgAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_43.setTransform(310.475,272);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D6E0D7").s().p("EgH6Ah7QACg0gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkYAAkxQAAkyBzkXQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEXAAEyQAAExhzEYQhvEOjLDQQhiBlhwBOQldG+AoGjgA4xZeQggghAAgtQAAgtAgggID3j4QAhgfAtAAQAtAAAgAfQAgAfAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAgtQAAguAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAhgtgBQguABggghgEghFAClQguAAggggQggggAAguQAAguAggfQAhggAtAAIFdAAQAuAAAgAgQAgAfAAAuQAAAuggAgQggAgguAAgAbpCkQguAAggghQggggAAgtQAAgvAggfQAggfAugBIFdAAQAuABAgAfQAgAfAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtAAQguAAgggggATVxNQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAgggQAggfAtgBQAuABAgAfQAgAgAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_44.setTransform(310.475,272);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D4E2DC").s().p("EgH6Ah7QACg0gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkYAAkxQAAkyBzkXQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEXAAEyQAAExhzEYQhvEOjLDQQhiBlhwBOQldG+AoGjgA4xZeQggghAAgtQAAgtAgggID3j4QAhgfAtAAQAtAAAgAfQAgAfAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAgtQAAguAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAhgtgBQguABggghgEghFAClQguAAggggQggggAAguQAAguAggfQAhggAtAAIFdAAQAuAAAgAgQAgAfAAAuQAAAuggAgQggAgguAAgAbpCkQguAAggghQggggAAgtQAAgvAggfQAggfAugBIFdAAQAuABAgAfQAgAfAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtAAQguAAgggggATVxNQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAgggQAggfAtgBQAuABAgAfQAgAgAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_45.setTransform(310.475,272);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#DFDAB9").s().p("EgH6Ah7QACg0gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkYAAkxQAAkyBzkXQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEXAAEyQAAExhzEYQhvEOjLDQQhiBlhwBOQldG+AoGjgA4xZeQggghAAgtQAAgtAgggID3j4QAhgfAtAAQAtAAAgAfQAgAfAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAgtQAAguAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAhgtgBQguABggghgEghFAClQguAAggggQggggAAguQAAguAggfQAhggAtAAIFdAAQAuAAAgAgQAgAfAAAuQAAAuggAgQggAgguAAgAbpCkQguAAggghQggggAAgtQAAgvAggfQAggfAugBIFdAAQAuABAgAfQAgAfAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtAAQguAAgggggATVxNQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAgggQAggfAtgBQAuABAgAfQAgAgAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_46.setTransform(310.475,272);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E6D5A2").s().p("EgH6Ah7QACg0gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkYAAkxQAAkyBzkXQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEXAAEyQAAExhzEYQhvEOjLDQQhiBlhwBOQldG+AoGjgA4xZeQggghAAgtQAAgtAgggID3j4QAhgfAtAAQAtAAAgAfQAgAfAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAgtQAAguAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAhgtgBQguABggghgEghFAClQguAAggggQggggAAguQAAguAggfQAhggAtAAIFdAAQAuAAAgAgQAgAfAAAuQAAAuggAgQggAgguAAgAbpCkQguAAggghQggggAAgtQAAgvAggfQAggfAugBIFdAAQAuABAgAfQAgAfAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtAAQguAAgggggATVxNQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAgggQAggfAtgBQAuABAgAfQAgAgAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_47.setTransform(310.475,272);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E8D39C").s().p("EgH6Ah7QACg0gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkYAAkxQAAkyBzkXQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEXAAEyQAAExhzEYQhvEOjLDQQhiBlhwBOQldG+AoGjgA4xZeQggghAAgtQAAgtAgggID3j4QAhgfAtAAQAtAAAgAfQAgAfAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAgtQAAguAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAhgtgBQguABggghgEghFAClQguAAggggQggggAAguQAAguAggfQAhggAtAAIFdAAQAuAAAgAgQAgAfAAAuQAAAuggAgQggAgguAAgAbpCkQguAAggghQggggAAgtQAAgvAggfQAggfAugBIFdAAQAuABAgAfQAgAfAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtAAQguAAgggggATVxNQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAgggQAggfAtgBQAuABAgAfQAgAgAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_48.setTransform(310.475,272);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E4D7AB").s().p("EgH6Ah7QACg0gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkYAAkxQAAkyBzkXQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEXAAEyQAAExhzEYQhvEOjLDQQhiBlhwBOQldG+AoGjgA4xZeQggghAAgtQAAgtAgggID3j4QAhgfAtAAQAtAAAgAfQAgAfAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAgtQAAguAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAhgtgBQguABggghgEghFAClQguAAggggQggggAAguQAAguAggfQAhggAtAAIFdAAQAuAAAgAgQAgAfAAAuQAAAuggAgQggAgguAAgAbpCkQguAAggghQggggAAgtQAAgvAggfQAggfAugBIFdAAQAuABAgAfQAgAfAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtAAQguAAgggggATVxNQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAgggQAggfAtgBQAuABAgAfQAgAgAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_49.setTransform(310.475,272);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#DBDDC8").s().p("EgH6Ah7QACg0gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkYAAkxQAAkyBzkXQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEXAAEyQAAExhzEYQhvEOjLDQQhiBlhwBOQldG+AoGjgA4xZeQggghAAgtQAAgtAgggID3j4QAhgfAtAAQAtAAAgAfQAgAfAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAgtQAAguAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAhgtgBQguABggghgEghFAClQguAAggggQggggAAguQAAguAggfQAhggAtAAIFdAAQAuAAAgAgQAgAfAAAuQAAAuggAgQggAgguAAgAbpCkQguAAggghQggggAAgtQAAgvAggfQAggfAugBIFdAAQAuABAgAfQAgAfAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtAAQguAAgggggATVxNQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAgggQAggfAtgBQAuABAgAfQAgAgAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_50.setTransform(310.475,272);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EAD296").s().p("EgH6Ah7QACg0gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkYAAkxQAAkyBzkXQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEXAAEyQAAExhzEYQhvEOjLDQQhiBlhwBOQldG+AoGjgA4xZeQggghAAgtQAAgtAgggID3j4QAhgfAtAAQAtAAAgAfQAgAfAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAgtQAAguAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAhgtgBQguABggghgEghFAClQguAAggggQggggAAguQAAguAggfQAhggAtAAIFdAAQAuAAAgAgQAgAfAAAuQAAAuggAgQggAgguAAgAbpCkQguAAggghQggggAAgtQAAgvAggfQAggfAugBIFdAAQAuABAgAfQAgAfAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtAAQguAAgggggATVxNQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAgggQAggfAtgBQAuABAgAfQAgAgAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_51.setTransform(310.475,272);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F5CA74").s().p("EgH6Ah7QACg0gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkYAAkxQAAkyBzkXQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEXAAEyQAAExhzEYQhvEOjLDQQhiBlhwBOQldG+AoGjgA4xZeQggghAAgtQAAgtAgggID3j4QAhgfAtAAQAtAAAgAfQAgAfAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAgtQAAguAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAhgtgBQguABggghgEghFAClQguAAggggQggggAAguQAAguAggfQAhggAtAAIFdAAQAuAAAgAgQAgAfAAAuQAAAuggAgQggAgguAAgAbpCkQguAAggghQggggAAgtQAAgvAggfQAggfAugBIFdAAQAuABAgAfQAgAfAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtAAQguAAgggggATVxNQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAgggQAggfAtgBQAuABAgAfQAgAgAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_52.setTransform(310.475,272);

	this.instance_17 = new lib.CachedBmp_42();
	this.instance_17.setTransform(87.7,54.85,0.5,0.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F8C765").s().p("EgH6Ah7QACg0gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkYAAkxQAAkyBzkXQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEXAAEyQAAExhzEYQhvEOjLDQQhiBlhwBOQldG+AoGjgA4xZeQggghAAgtQAAgtAgggID3j4QAhgfAtAAQAtAAAgAfQAgAfAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAgtQAAguAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAhgtgBQguABggghgEghFAClQguAAggggQggggAAguQAAguAggfQAhggAtAAIFdAAQAuAAAgAgQAgAfAAAuQAAAuggAgQggAgguAAgAbpCkQguAAggghQggggAAgtQAAgvAggfQAggfAugBIFdAAQAuABAgAfQAgAfAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtAAQguAAgggggATVxNQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAgggQAggfAtgBQAuABAgAfQAgAgAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_53.setTransform(310.475,272);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F9C359").s().p("EgH6Ah7QACg0gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkYAAkxQAAkyBzkXQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEXAAEyQAAExhzEYQhvEOjLDQQhiBlhwBOQldG+AoGjgA4xZeQggghAAgtQAAgtAgggID3j4QAhgfAtAAQAtAAAgAfQAgAfAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAgtQAAguAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAhgtgBQguABggghgEghFAClQguAAggggQggggAAguQAAguAggfQAhggAtAAIFdAAQAuAAAgAgQAgAfAAAuQAAAuggAgQggAgguAAgAbpCkQguAAggghQggggAAgtQAAgvAggfQAggfAugBIFdAAQAuABAgAfQAgAfAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtAAQguAAgggggATVxNQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAgggQAggfAtgBQAuABAgAfQAgAgAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_54.setTransform(310.475,272);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FBBE48").s().p("EgH6Ah7QACg0gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkYAAkxQAAkyBzkXQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEXAAEyQAAExhzEYQhvEOjLDQQhiBlhwBOQldG+AoGjgA4xZeQggghAAgtQAAgtAgggID3j4QAhgfAtAAQAtAAAgAfQAgAfAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAgtQAAguAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAhgtgBQguABggghgEghFAClQguAAggggQggggAAguQAAguAggfQAhggAtAAIFdAAQAuAAAgAgQAgAfAAAuQAAAuggAgQggAgguAAgAbpCkQguAAggghQggggAAgtQAAgvAggfQAggfAugBIFdAAQAuABAgAfQAgAfAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtAAQguAAgggggATVxNQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAgggQAggfAtgBQAuABAgAfQAgAgAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_55.setTransform(310.475,272);

	this.instance_18 = new lib.CachedBmp_19();
	this.instance_18.setTransform(87.7,54.85,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_20();
	this.instance_19.setTransform(87.7,54.85,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_21();
	this.instance_20.setTransform(87.7,54.85,0.5,0.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F6CA71").s().p("EgH6Ah7QACg0gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkYAAkxQAAkyBzkXQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEXAAEyQAAExhzEYQhvEOjLDQQhiBlhwBOQldG+AoGjgA4xZeQggghAAgtQAAgtAgggID3j4QAhgfAtAAQAtAAAgAfQAgAfAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAgtQAAguAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAhgtgBQguABggghgEghFAClQguAAggggQggggAAguQAAguAggfQAhggAtAAIFdAAQAuAAAgAgQAgAfAAAuQAAAuggAgQggAgguAAgAbpCkQguAAggghQggggAAgtQAAgvAggfQAggfAugBIFdAAQAuABAgAfQAgAfAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtAAQguAAgggggATVxNQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAgggQAggfAtgBQAuABAgAfQAgAgAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_56.setTransform(310.475,272);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EFCF88").s().p("EgH6Ah7QACg0gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkYAAkxQAAkyBzkXQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEXAAEyQAAExhzEYQhvEOjLDQQhiBlhwBOQldG+AoGjgA4xZeQggghAAgtQAAgtAgggID3j4QAhgfAtAAQAtAAAgAfQAgAfAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAgtQAAguAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAhgtgBQguABggghgEghFAClQguAAggggQggggAAguQAAguAggfQAhggAtAAIFdAAQAuAAAgAgQAgAfAAAuQAAAuggAgQggAgguAAgAbpCkQguAAggghQggggAAgtQAAgvAggfQAggfAugBIFdAAQAuABAgAfQAgAfAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtAAQguAAgggggATVxNQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAgggQAggfAtgBQAuABAgAfQAgAgAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_57.setTransform(310.475,272);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E2D8AF").s().p("EgH6Ah7QACg0gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkYAAkxQAAkyBzkXQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEXAAEyQAAExhzEYQhvEOjLDQQhiBlhwBOQldG+AoGjgA4xZeQggghAAgtQAAgtAgggID3j4QAhgfAtAAQAtAAAgAfQAgAfAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAgtQAAguAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAhgtgBQguABggghgEghFAClQguAAggggQggggAAguQAAguAggfQAhggAtAAIFdAAQAuAAAgAgQAgAfAAAuQAAAuggAgQggAgguAAgAbpCkQguAAggghQggggAAgtQAAgvAggfQAggfAugBIFdAAQAuABAgAfQAgAfAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtAAQguAAgggggATVxNQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAgggQAggfAtgBQAuABAgAfQAgAgAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_58.setTransform(310.475,272);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#DDDCC1").s().p("EgH6Ah7QACg0gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkYAAkxQAAkyBzkXQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEXAAEyQAAExhzEYQhvEOjLDQQhiBlhwBOQldG+AoGjgA4xZeQggghAAgtQAAgtAgggID3j4QAhgfAtAAQAtAAAgAfQAgAfAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAgtQAAguAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAhgtgBQguABggghgEghFAClQguAAggggQggggAAguQAAguAggfQAhggAtAAIFdAAQAuAAAgAgQAgAfAAAuQAAAuggAgQggAgguAAgAbpCkQguAAggghQggggAAgtQAAgvAggfQAggfAugBIFdAAQAuABAgAfQAgAfAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtAAQguAAgggggATVxNQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAgggQAggfAtgBQAuABAgAfQAgAgAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_59.setTransform(310.475,272);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E7D4A0").s().p("EgH6Ah7QACg0gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkYAAkxQAAkyBzkXQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEXAAEyQAAExhzEYQhvEOjLDQQhiBlhwBOQldG+AoGjgA4xZeQggghAAgtQAAgtAgggID3j4QAhgfAtAAQAtAAAgAfQAgAfAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAgtQAAguAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAhgtgBQguABggghgEghFAClQguAAggggQggggAAguQAAguAggfQAhggAtAAIFdAAQAuAAAgAgQAgAfAAAuQAAAuggAgQggAgguAAgAbpCkQguAAggghQggggAAgtQAAgvAggfQAggfAugBIFdAAQAuABAgAfQAgAfAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtAAQguAAgggggATVxNQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAgggQAggfAtgBQAuABAgAfQAgAgAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_60.setTransform(310.475,272);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E6D5A3").s().p("EgH6Ah7QACg0gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkYAAkxQAAkyBzkXQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEXAAEyQAAExhzEYQhvEOjLDQQhiBlhwBOQldG+AoGjgA4xZeQggghAAgtQAAgtAgggID3j4QAhgfAtAAQAtAAAgAfQAgAfAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAgtQAAguAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAhgtgBQguABggghgEghFAClQguAAggggQggggAAguQAAguAggfQAhggAtAAIFdAAQAuAAAgAgQAgAfAAAuQAAAuggAgQggAgguAAgAbpCkQguAAggghQggggAAgtQAAgvAggfQAggfAugBIFdAAQAuABAgAfQAgAfAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtAAQguAAgggggATVxNQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAgggQAggfAtgBQAuABAgAfQAgAgAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_61.setTransform(310.475,272);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#DCDCC2").s().p("EgH6Ah7QACg0gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkYAAkxQAAkyBzkXQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEXAAEyQAAExhzEYQhvEOjLDQQhiBlhwBOQldG+AoGjgA4xZeQggghAAgtQAAgtAgggID3j4QAhgfAtAAQAtAAAgAfQAgAfAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAgtQAAguAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAhgtgBQguABggghgEghFAClQguAAggggQggggAAguQAAguAggfQAhggAtAAIFdAAQAuAAAgAgQAgAfAAAuQAAAuggAgQggAgguAAgAbpCkQguAAggghQggggAAgtQAAgvAggfQAggfAugBIFdAAQAuABAgAfQAgAfAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtAAQguAAgggggATVxNQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAgggQAggfAtgBQAuABAgAfQAgAgAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_62.setTransform(310.475,272);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D8DFD2").s().p("EgH6Ah7QACg0gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkYAAkxQAAkyBzkXQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEXAAEyQAAExhzEYQhvEOjLDQQhiBlhwBOQldG+AoGjgA4xZeQggghAAgtQAAgtAgggID3j4QAhgfAtAAQAtAAAgAfQAgAfAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAgtQAAguAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAhgtgBQguABggghgEghFAClQguAAggggQggggAAguQAAguAggfQAhggAtAAIFdAAQAuAAAgAgQAgAfAAAuQAAAuggAgQggAgguAAgAbpCkQguAAggghQggggAAgtQAAgvAggfQAggfAugBIFdAAQAuABAgAfQAgAfAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtAAQguAAgggggATVxNQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAgggQAggfAtgBQAuABAgAfQAgAgAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_63.setTransform(310.475,272);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D5E1DA").s().p("EgH6Ah7QACg0gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkYAAkxQAAkyBzkXQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEXAAEyQAAExhzEYQhvEOjLDQQhiBlhwBOQldG+AoGjgA4xZeQggghAAgtQAAgtAgggID3j4QAhgfAtAAQAtAAAgAfQAgAfAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAgtQAAguAgggQAgggAtAAQAuAAAgAgID3D3QAgAgAAAtQAAAuggAgQggAhgtgBQguABggghgEghFAClQguAAggggQggggAAguQAAguAggfQAhggAtAAIFdAAQAuAAAgAgQAgAfAAAuQAAAuggAgQggAgguAAgAbpCkQguAAggghQggggAAgtQAAgvAggfQAggfAugBIFdAAQAuABAgAfQAgAfAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtAAQguAAgggggATVxNQgugCgegiQgegiACguQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAgggQAggfAtgBQAuABAgAfQAgAgAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_64.setTransform(310.475,272);

	this.instance_21 = new lib.CachedBmp_22();
	this.instance_21.setTransform(87.7,54.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.instance_21}]},1).to({state:[]},22).wait(11));

	// Layer_6
	this.background_mc = new lib.background();
	this.background_mc.name = "background_mc";
	this.background_mc.setTransform(309.65,312.6,1,1,0,0,0,266.6,266.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FFFFFF").ss(7).p("EAnAgppICqAAMAAABTTMhTTAAAIAAge");
	this.shape_65.setTransform(326.625,315.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65},{t:this.background_mc}]}).to({state:[]},53).wait(11));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(296.2,266.4,332.00000000000006,319.30000000000007);
// library properties:
lib.properties = {
	id: 'A95BA620329ACC4680FE94E1B8FE4D7B',
	width: 620,
	height: 620,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ideaBtn_atlas_1.png?1626772383846", id:"ideaBtn_atlas_1"},
		{src:"images/ideaBtn_atlas_2.png?1626772383846", id:"ideaBtn_atlas_2"},
		{src:"images/ideaBtn_atlas_3.png?1626772383846", id:"ideaBtn_atlas_3"},
		{src:"images/ideaBtn_atlas_4.png?1626772383846", id:"ideaBtn_atlas_4"},
		{src:"images/ideaBtn_atlas_5.png?1626772383846", id:"ideaBtn_atlas_5"},
		{src:"images/ideaBtn_atlas_6.png?1626772383846", id:"ideaBtn_atlas_6"}
	],
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
an.compositions['A95BA620329ACC4680FE94E1B8FE4D7B'] = {
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
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