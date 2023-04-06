var BokehShape=Zdog.Shape.subclass({bokehSize:5,bokehLimit:64});BokehShape.prototype.updateBokeh=function(){return this.bokeh=Math.abs(this.sortValue)/this.bokehLimit,this.bokeh=Math.max(0,Math.min(1,this.bokeh)),this.bokeh},BokehShape.prototype.getLineWidth=function(){return this.stroke+this.bokehSize*this.bokeh*this.bokeh},BokehShape.prototype.getBokehAlpha=function(){var o=1-this.bokeh;return.8*(o*=o)+.2},BokehShape.prototype.renderCanvasDot=function(o){this.updateBokeh(),o.globalAlpha=this.getBokehAlpha(),Zdog.Shape.prototype.renderCanvasDot.apply(this,arguments),o.globalAlpha=1},BokehShape.prototype.renderPath=function(o,a){this.updateBokeh(),a.isCanvas&&(o.globalAlpha=this.getBokehAlpha()),Zdog.Shape.prototype.renderPath.apply(this,arguments),a.isCanvas&&(o.globalAlpha=1)};var TAU=Zdog.TAU;function makeMadeline(o,a,t){var e=new Zdog.Anchor(t),r=new Zdog.Group({addTo:e,rotate:{x:-TAU/8},translate:{z:-48},updateSort:!0}),l=new Zdog.Anchor({addTo:r,translate:{y:-11,z:-2},rotate:{x:TAU/8}}),d=new Zdog.Ellipse({diameter:6,addTo:l,translate:{z:4},stroke:8,color:a.skin}),n=new Zdog.Group({addTo:d,translate:{z:d.stroke/2-.5}});[-1,1].forEach((function(t){o&&new Zdog.Ellipse({width:2,height:1.3,addTo:n,translate:{x:4.5*t,y:3,z:-1},rotate:{y:-TAU/16*t},stroke:1,color:"#FA8",fill:!0});var e=3.5*t;new Zdog.Ellipse({width:.75,height:1.5,addTo:n,color:a.eye,translate:{x:e},stroke:2,fill:!0}),new Zdog.Ellipse({addTo:n,height:3,width:1.2,quarters:2,translate:{x:e,y:-3},rotate:{z:-TAU/4+.15*t*(o?1:-1)},color:a.hair,stroke:1,fill:!1,closed:!0})})),new Zdog.Shape({path:[{x:-1},{x:1},{z:-4}],addTo:l,translate:{y:-4,z:-1},stroke:18,color:a.hair});var i=new Zdog.Shape({path:[{},{arc:[{z:4,y:4},{z:0,y:8}]}],addTo:l,translate:{x:2,y:-7.5,z:6},rotate:{x:.5,z:-.5},stroke:4,color:a.hair,closed:!1});i.copy({translate:{x:5,y:-6,z:5},rotate:{x:-.3,z:-.5}}),i.copy({translate:{x:5,y:-6,z:3},rotate:{y:-.7,z:-1}}),i.copy({translate:{x:-2,y:-7.5,z:6},rotate:{x:0,z:TAU/16*6}}),i.copy({translate:{x:-5,y:-6,z:5},rotate:{x:0,z:TAU/4}}),i.copy({translate:{x:-5,y:-6,z:3},rotate:{y:.7,z:1}}),new Zdog.Shape({path:[{x:-3},{x:3}],addTo:l,stroke:7,translate:{y:-8,z:5},color:a.hair});var h=new Zdog.Shape({path:[{y:-4,z:0},{bezier:[{y:-10,z:-14},{y:0,z:-16},{y:0,z:-26}]}],addTo:l,translate:{z:-4,y:0},stroke:10,color:a.hair,closed:!1});h.copy({translate:{x:-3,z:-4},rotate:{z:-TAU/8},stroke:8}),h.copy({translate:{x:3,z:-4},rotate:{z:TAU/8},stroke:8}),h.copy({translate:{y:2},scale:{y:.5},stroke:8});var s=new Zdog.Ellipse({width:12,height:10,addTo:r,rotate:{x:-TAU/4},translate:{y:-1},stroke:6,color:a.parkaLight,fill:!0});s.copy({width:6,height:6,translate:{y:-5}}),s.copy({translate:{y:3}}),s.copy({translate:{y:7},color:a.parkaDark}),new Zdog.Ellipse({width:10,height:8,addTo:r,rotate:{x:-TAU/4},translate:{y:11},stroke:4,color:a.tight,fill:!0}),[-1,1].forEach((function(o){var t=1==o;new Zdog.Shape({addTo:r,stroke:6,translate:{x:6*o,y:-5,z:-1},color:a.parkaLight});var e=new Zdog.Anchor({addTo:r,translate:{x:9*o,y:-3,z:-2},rotate:t?{x:TAU/8*3,z:-TAU/32}:{z:TAU/16*2,x:-TAU/16*2}}),l=new Zdog.Ellipse({diameter:2,rotate:{x:-TAU/4},addTo:e,translate:{x:0*o},stroke:6,color:a.parkaLight,fill:!0});l.copy({translate:{y:4}});var d=new Zdog.Anchor({addTo:e,translate:{y:8},rotate:t?{}:{z:TAU/8}});l.copy({addTo:d,translate:{x:0,y:0}}),l.copy({addTo:d,translate:{y:4},color:a.parkaDark}),new Zdog.Shape({addTo:d,translate:{y:9,z:-1},stroke:8,color:a.skin});var n={y:7},i=new Zdog.Shape({path:[{y:0},n],addTo:r,translate:{x:4*o,y:13},rotate:t?{}:{x:TAU/16*3,z:TAU/16},stroke:8,color:a.tight});new Zdog.Shape({path:[{y:0},{y:8}],addTo:i,stroke:6,translate:n,rotate:t?{}:{x:-TAU/16*5},color:a.tight})})),new Zdog.Shape({path:[{x:-3},{x:3}],visible:!1,addTo:r,translate:{y:11,z:-2},stroke:8,color:a.tight})}window.makeBird=function(o){var a=o.spin||0,t=new Zdog.Anchor({addTo:o.addTo,scale:2/3,rotate:{z:a}}),e=new Zdog.Group({addTo:t,translate:{x:87},rotate:{x:-a}});new Zdog.Shape({path:[{x:-3,y:0},{arc:[{x:-2,y:1.5},{x:0,y:1.5}]},{arc:[{x:2,y:1.5},{x:2,y:0}]}],addTo:e,translate:{x:.5},stroke:3,color:o.color,fill:!0}),new Zdog.Shape({translate:{x:4,y:-1},addTo:e,stroke:4,color:o.color}),new Zdog.Shape({path:[{x:0,y:-1},{x:3,y:0},{x:0,y:1}],addTo:e,translate:{x:5,y:-1},stroke:1,color:o.color,fill:!0}),new Zdog.Shape({path:[{x:-3,z:-2},{x:0,z:0},{x:-3,z:2}],addTo:e,translate:{x:-4,y:0},stroke:2,color:o.color,fill:!0}),new Zdog.Shape({path:[{x:3,y:0},{x:-1,y:-9},{arc:[{x:-5,y:-4},{x:-3,y:0}]}],addTo:e,translate:{z:-1.5},rotate:{x:TAU/8},stroke:1,color:o.color,fill:!0}).copy({translate:{z:1.5},scale:{z:-1},rotate:{x:-TAU/8}})};var illoElem=document.querySelector(".illo"),w=160,h=160,minWindowSize=Math.min(window.innerWidth,window.innerHeight),zoom=Math.min(5,Math.floor(minWindowSize/w));illoElem.setAttribute("width",w*zoom),illoElem.setAttribute("height",h*zoom);var isSpinning=!0,illo=(TAU=Zdog.TAU,new Zdog.Illustration({element:illoElem,zoom:zoom,rotate:{y:-TAU/4},dragRotate:!0,onDragStart:function(){isSpinning=!1}})),madColor={skin:"#FD9",hair:"#D53",parkaLight:"#67F",parkaDark:"#35D",tight:"#742",eye:"#333"},badColor={skin:"#EBC",hair:"#D4B",parkaLight:"#85A",parkaDark:"#527",tight:"#412",eye:"#D02"},glow="hsla(60, 100%, 80%, 0.3)",featherGold="#FE5";makeMadeline(!0,madColor,{addTo:illo}),makeMadeline(!1,badColor,{addTo:illo,rotate:{y:TAU/2}});var feather=new Zdog.Group({addTo:illo,rotate:{y:-TAU/4}});!function(){for(var o=12,a=TAU/8/2,t=TAU*o/2/8,e=0;e<8;e++){var r=Math.cos(e/8*TAU*3/4+1*TAU/4),l=4-2*r,d=t/2,n=7==e,i=n?-1*t:-d,h=-1.5*r-10;new Zdog.Shape({path:[{x:0,y:d,z:-12},{x:l,y:-t/2,z:h},{x:l,y:3*-t/4,z:h},{x:0,y:i,z:-12}],addTo:feather,rotate:{x:a*-e+TAU/8},stroke:1,color:featherGold,fill:!0}).copy({scale:{x:-1}})}new Zdog.Ellipse({addTo:feather,diameter:24,quarters:2,rotate:{y:-TAU/4},stroke:2,color:featherGold}).copy({stroke:8,color:glow,rotate:{y:-TAU/4,x:-.5}})}(),function(){for(var o=0;o<14;o++){var a=new Zdog.Anchor({addTo:illo,rotate:{z:TAU/14*o}}),t=34+24*Math.random();new BokehShape({path:[{y:32},{y:t}],addTo:a,rotate:{x:(2*Math.random()-1)*TAU/8},color:madColor.skin,stroke:1,bokehSize:6,bokehLimit:70})}}(),function(){for(var o=0;o<64;o++){var a=new Zdog.Anchor({addTo:illo,rotate:{y:TAU/64*o}});new BokehShape({path:[{z:40*(1-Math.random()*Math.random())+32}],addTo:a,rotate:{x:(2*Math.random()-1)*TAU*3/16},color:badColor.skin,stroke:1+Math.random(),bokehSize:6,bokehLimit:74})}}();var birdRotor=new Zdog.Anchor({addTo:illo,rotate:{y:-1*TAU/8}});makeBird({addTo:birdRotor,color:madColor.parkaLight,spin:TAU/2}),makeBird({addTo:birdRotor,color:featherGold,spin:3*-TAU/8}),makeBird({addTo:birdRotor,color:"white",spin:-TAU/4}),makeBird({addTo:birdRotor,color:madColor.hair,spin:-TAU/8}),makeBird({addTo:birdRotor,color:madColor.parkaDark,spin:TAU/8});isSpinning=!0;var rotateSpeed=-TAU/60,xClock=0,then=new Date-1/60;function animate(){update(),illo.renderGraph(),requestAnimationFrame(animate)}function update(){var o=new Date;if(isSpinning){var a=rotateSpeed/60*(o-then)*-1;illo.rotate.y+=a,xClock+=a/4,illo.rotate.x=Math.sin(xClock)*TAU/12}illo.updateGraph(),then=o}animate();