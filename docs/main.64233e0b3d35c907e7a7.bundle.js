webpackJsonp([1],{0:function(t,n,e){t.exports=e("cDNt")},cDNt:function(t,n,e){"use strict";function i(t){return u._24(0,[u._21(402653184,1,{canvasRef:0}),(t()(),u._7(1,0,[[1,0],["imageContainer",1]],null,1,"canvas",[],[[8,"width",0],[8,"height",0]],[[null,"tap"],[null,"pinchin"],[null,"pinchout"],[null,"panmove"],[null,"panend"],[null,"rotatemove"],[null,"rotateend"]],function(t,n,e){var i=!0,o=t.component;if("tap"===n){i=!1!==o.onTap(e)&&i}if("pinchin"===n){i=!1!==o.processTouchEvent(e)&&i}if("pinchout"===n){i=!1!==o.processTouchEvent(e)&&i}if("panmove"===n){i=!1!==o.processTouchEvent(e)&&i}if("panend"===n){i=!1!==o.onTouchEnd()&&i}if("rotatemove"===n){i=!1!==o.processTouchEvent(e)&&i}if("rotateend"===n){i=!1!==o.onTouchEnd()&&i}return i},null,null)),(t()(),u._23(-1,null,["\n"]))],null,function(t,n){var e=n.component;t(n,1,0,e.width,e.height)})}function o(t){return u._24(0,[(t()(),u._7(0,0,null,null,1,"ngx-imageviewer",[],null,null,null,i,w)),u._5(1,4374528,null,0,y,[p.b,u.F,v],null,null)],null,null)}function l(t){return u._24(0,[(t()(),u._7(0,0,null,null,1,"h1",[],null,null,null,null,null)),(t()(),u._23(-1,null,["Ngx-ImageViewer Demo"])),(t()(),u._23(-1,null,["\n"])),(t()(),u._7(3,0,null,null,37,"div",[["class","canvasForm"]],null,null,null,null,null)),(t()(),u._23(-1,null,["\n    "])),(t()(),u._7(5,0,null,null,11,"div",[],null,null,null,null,null)),(t()(),u._23(-1,null,["\n        "])),(t()(),u._7(7,0,null,null,1,"label",[],null,null,null,null,null)),(t()(),u._23(-1,null,["Image Url: "])),(t()(),u._23(-1,null,["\n        "])),(t()(),u._7(10,0,null,null,5,"input",[["size","100"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(t,n,e){var i=!0,o=t.component;if("input"===n){i=!1!==u._19(t,11)._handleInput(e.target.value)&&i}if("blur"===n){i=!1!==u._19(t,11).onTouched()&&i}if("compositionstart"===n){i=!1!==u._19(t,11)._compositionStart()&&i}if("compositionend"===n){i=!1!==u._19(t,11)._compositionEnd(e.target.value)&&i}if("ngModelChange"===n){i=!1!==(o.imageSrc=e)&&i}return i},null,null)),u._5(11,16384,null,0,g.b,[u.G,u.k,[2,g.a]],null,null),u._20(1024,null,g.d,function(t){return[t]},[g.b]),u._5(13,671744,null,0,g.g,[[8,null],[8,null],[8,null],[2,g.d]],{model:[0,"model"]},{update:"ngModelChange"}),u._20(2048,null,g.e,null,[g.g]),u._5(15,16384,null,0,g.f,[g.e],null,null),(t()(),u._23(-1,null,["\n    "])),(t()(),u._23(-1,null,["\n    "])),(t()(),u._7(18,0,null,null,21,"div",[],null,null,null,null,null)),(t()(),u._23(-1,null,["\n        "])),(t()(),u._7(20,0,null,null,1,"label",[],null,null,null,null,null)),(t()(),u._23(-1,null,["Canvas Dimention:"])),(t()(),u._23(-1,null,["\n        "])),(t()(),u._7(23,0,null,null,5,"input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(t,n,e){var i=!0,o=t.component;if("input"===n){i=!1!==u._19(t,24)._handleInput(e.target.value)&&i}if("blur"===n){i=!1!==u._19(t,24).onTouched()&&i}if("compositionstart"===n){i=!1!==u._19(t,24)._compositionStart()&&i}if("compositionend"===n){i=!1!==u._19(t,24)._compositionEnd(e.target.value)&&i}if("ngModelChange"===n){i=!1!==(o.canvasWidth=e)&&i}return i},null,null)),u._5(24,16384,null,0,g.b,[u.G,u.k,[2,g.a]],null,null),u._20(1024,null,g.d,function(t){return[t]},[g.b]),u._5(26,671744,null,0,g.g,[[8,null],[8,null],[8,null],[2,g.d]],{model:[0,"model"]},{update:"ngModelChange"}),u._20(2048,null,g.e,null,[g.g]),u._5(28,16384,null,0,g.f,[g.e],null,null),(t()(),u._23(-1,null,["\n        "])),(t()(),u._7(30,0,null,null,1,"span",[],null,null,null,null,null)),(t()(),u._23(-1,null,["X"])),(t()(),u._23(-1,null,["\n        "])),(t()(),u._7(33,0,null,null,5,"input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(t,n,e){var i=!0,o=t.component;if("input"===n){i=!1!==u._19(t,34)._handleInput(e.target.value)&&i}if("blur"===n){i=!1!==u._19(t,34).onTouched()&&i}if("compositionstart"===n){i=!1!==u._19(t,34)._compositionStart()&&i}if("compositionend"===n){i=!1!==u._19(t,34)._compositionEnd(e.target.value)&&i}if("ngModelChange"===n){i=!1!==(o.canvasHeight=e)&&i}return i},null,null)),u._5(34,16384,null,0,g.b,[u.G,u.k,[2,g.a]],null,null),u._20(1024,null,g.d,function(t){return[t]},[g.b]),u._5(36,671744,null,0,g.g,[[8,null],[8,null],[8,null],[2,g.d]],{model:[0,"model"]},{update:"ngModelChange"}),u._20(2048,null,g.e,null,[g.g]),u._5(38,16384,null,0,g.f,[g.e],null,null),(t()(),u._23(-1,null,["\n    "])),(t()(),u._23(-1,null,["\n"])),(t()(),u._23(-1,null,["\n\n"])),(t()(),u._7(42,0,null,null,1,"ngx-imageviewer",[],null,null,null,i,w)),u._5(43,4374528,null,0,y,[p.b,u.F,v],{src:[0,"src"],width:[1,"width"],height:[2,"height"]},null)],function(t,n){var e=n.component;t(n,13,0,e.imageSrc),t(n,26,0,e.canvasWidth),t(n,36,0,e.canvasHeight),t(n,43,0,e.imageSrc,e.canvasWidth,e.canvasHeight)},function(t,n){t(n,10,0,u._19(n,15).ngClassUntouched,u._19(n,15).ngClassTouched,u._19(n,15).ngClassPristine,u._19(n,15).ngClassDirty,u._19(n,15).ngClassValid,u._19(n,15).ngClassInvalid,u._19(n,15).ngClassPending),t(n,23,0,u._19(n,28).ngClassUntouched,u._19(n,28).ngClassTouched,u._19(n,28).ngClassPristine,u._19(n,28).ngClassDirty,u._19(n,28).ngClassValid,u._19(n,28).ngClassInvalid,u._19(n,28).ngClassPending),t(n,33,0,u._19(n,38).ngClassUntouched,u._19(n,38).ngClassTouched,u._19(n,38).ngClassPristine,u._19(n,38).ngClassDirty,u._19(n,38).ngClassValid,u._19(n,38).ngClassInvalid,u._19(n,38).ngClassPending)})}function s(t){return u._24(0,[(t()(),u._7(0,0,null,null,2,"ngx-root",[],null,null,null,l,B)),u._5(1,49152,null,0,h,[],null,null),u._20(256,null,v,{rotateStepper:!0,zoomInButton:{tooltip:"Aproximar"},zoomOutButton:{tooltip:"Distanciar"},rotateLeftButton:{tooltip:"Girar esquerda"},rotateRightButton:{tooltip:"Girar direita"},resetButton:{tooltip:"Resetar"},buttonStyle:{bgStyle:"#B71C1C",borderWidth:2,borderStyle:"#FFFFFF",iconStyle:"#FFFFFF"}},[])],null,null)}Object.defineProperty(n,"__esModule",{value:!0});var u=e("/oeL"),a={production:!0},r=(e("rgUS"),function(){function t(){}return t}()),h=function(){function t(){this.canvasWidth=800,this.canvasHeight=600,this.imageSrc="https://dummyimage.com/1024x768/000/fff.jpg"}return t}(),c=["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .canvasForm[_ngcontent-%COMP%]{width:100%;padding:20px 0}[_nghost-%COMP%]   .canvasForm[_ngcontent-%COMP%], [_nghost-%COMP%]   .canvasForm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-bottom:10px}"],g=e("bm2B"),d=["[_nghost-%COMP%], [_nghost-%COMP%]   canvas[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]   canvas[_ngcontent-%COMP%]{margin:0 auto}"],p=e("fc+i"),f=function(){function t(){}return t}(),_=(function(){function t(){}}(),function(){function t(t,n,e,i){void 0===e&&(e=0),void 0===i&&(i=!0),this.icon=t,this.tooltip=n,this.sortId=e,this.show=i}return t}()),m={width:800,height:600,bgStyle:"#ECEFF1",scaleStep:.1,rotateStepper:!1,buttonStyle:{iconFontFamily:"Material Icons",alpha:.5,hoverAlpha:.7,bgStyle:"#000000",iconStyle:"#ffffff",borderStyle:"#000000",borderWidth:0},tooltips:{enabled:!0,bgStyle:"#000000",bgAlpha:.5,textStyle:"#ffffff",textAlpha:.9,padding:15,radius:20},zoomOutButton:new _("zoom_out","Zoom out",0),zoomInButton:new _("zoom_in","Zoom in",1),rotateLeftButton:new _("rotate_left","Rotate left",2),rotateRightButton:new _("rotate_right","Rotate right",3),resetButton:new _("autorenew","Reset",4)},v=new u.q("imageviewer.config"),y=function(){function t(t,n,e){this.sanitizer=t,this.renderer=n,this.config=e,this.dirty=!0,this.scale=1,this.minScale=0,this.maxScale=4,this.angle=0,this.centre={x:0,y:0},this.buttons=[],this.currentTooltip=null,this.touchStartState={},this.listenDestroyList=[],this.image=new Image,this.config=this.extendsDefaultConfig(e),this.zoomOutButton=new b(this.config.zoomOutButton,this.config.buttonStyle),this.zoomInButton=new b(this.config.zoomInButton,this.config.buttonStyle),this.rotateLeftButton=new b(this.config.rotateLeftButton,this.config.buttonStyle),this.rotateRightButton=new b(this.config.rotateRightButton,this.config.buttonStyle),this.resetButton=new b(this.config.resetButton,this.config.buttonStyle),this.buttons=[this.zoomOutButton,this.zoomInButton,this.rotateLeftButton,this.rotateRightButton,this.resetButton].filter(function(t){return t.display}).sort(function(t,n){return t.sortId-n.sortId})}return Object.defineProperty(t.prototype,"src",{get:function(){return this._src},set:function(t){t!==this._src&&(this._src=t,this.image.src&&(this.image.src=this._src))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return this._width},set:function(t){t!==this._width&&(this._width=t,this.canvas&&(this.canvas.width=this._width),this.resetImage())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this._height},set:function(t){t!==this._height&&(this._height=t,this.canvas&&(this.canvas.height=this._height),this.resetImage())},enumerable:!0,configurable:!0}),t.prototype.ngAfterViewInit=function(){var t=this;this.canvas=this.canvasRef.nativeElement,this.context=this.canvas.getContext("2d"),this.canvas.width=this.width||this.config.width,this.canvas.height=this.height||this.config.height,this.image.addEventListener("load",function(n){return t.updateCanvas()},!1),this.image.src=this.src,this.zoomOutButton.onClick=function(n){return t.zoomOut(),!1},this.zoomInButton.onClick=function(n){return t.zoomIn(),!1},this.rotateLeftButton.onClick=function(n){return t.rotateLeft(),!1},this.rotateRightButton.onClick=function(n){return t.rotateRight(),!1},this.resetButton.onClick=function(n){return t.resetImage(),!1},this.addEventListeners()},t.prototype.ngOnDestroy=function(){this.listenDestroyList.forEach(function(t){"function"==typeof t&&t()})},t.prototype.onTap=function(t){var n=this.getUIElement(this.screenToCanvasCentre(t.center));null!==n&&n.onClick(t)},t.prototype.onTouchEnd=function(){this.touchStartState.centre=void 0,this.touchStartState.scale=void 0,this.touchStartState.rotate=void 0},t.prototype.processTouchEvent=function(t){this.touchStartState.centre||(this.touchStartState.centre=this.centre),this.centre={x:this.touchStartState.centre.x+t.deltaX,y:this.touchStartState.centre.y+t.deltaY},this.touchStartState.scale||(this.touchStartState.scale=this.scale);var n=this.touchStartState.scale*t.scale;if(this.scale=n>this.maxScale?this.maxScale:n<this.minScale?this.minScale:n,this.touchStartState.rotate||(this.touchStartState.rotate={angle:this.angle,startRotate:t.rotation}),0!==t.rotation){var e=this.touchStartState.rotate.angle+t.rotation-this.touchStartState.rotate.startRotate;this.angle=this.config.rotateStepper?this.toSquareAngle(e):e}this.dirty=!0},t.prototype.addEventListeners=function(){var t=this;this.listenDestroyList.push(this.renderer.listen(this.canvas,"DOMMouseScroll",function(n){return t.onMouseWheel(n)})),this.listenDestroyList.push(this.renderer.listen(this.canvas,"mousewheel",function(n){return t.onMouseWheel(n)})),this.listenDestroyList.push(this.renderer.listen(this.canvas,"mousemove",function(n){return t.checkTooltipActivation(t.screenToCanvasCentre({x:n.clientX,y:n.clientY}))}))},t.prototype.onMouseWheel=function(t){t||(t=event),t.preventDefault(),t.detail<0||t.wheelDelta>0?this.zoomIn():this.zoomOut()},t.prototype.checkTooltipActivation=function(t){this.getUIElements().forEach(function(t){return t.hover=!1});var n=this.getUIElement(t),e=this.currentTooltip;null!==n&&(void 0!==n.hover&&(n.hover=!0),void 0!==n.tooltip&&(this.currentTooltip=n.tooltip)),e!==this.currentTooltip&&(this.dirty=!0)},t.prototype.zoomIn=function(){var t=this.scale*(1+this.config.scaleStep);this.scale=t>this.maxScale?this.maxScale:t,this.dirty=!0},t.prototype.zoomOut=function(){var t=this.scale*(1-this.config.scaleStep);this.scale=t<this.minScale?this.minScale:t,this.dirty=!0},t.prototype.rotateLeft=function(){this.angle=0===this.angle?270:this.angle-90,this.dirty=!0},t.prototype.rotateRight=function(){this.angle=270===this.angle?0:this.angle+90,this.dirty=!0},t.prototype.resetImage=function(){if(this.image&&this.image.width&&this.canvas){var t=this.toSquareAngle(this.angle)/90%2!=0,n={width:t?this.canvas.height:this.canvas.width,height:t?this.canvas.width:this.canvas.height};n.height/this.image.height*this.image.width<=n.width?this.scale=n.height/this.image.height:this.scale=n.width/this.image.width,this.minScale=this.scale/4,this.maxScale=4*this.scale,this.centre.x=this.canvas.width/2,this.centre.y=this.canvas.height/2,this.dirty=!0}},t.prototype.updateCanvas=function(){this.image&&this.image.width&&(this.resetImage(),this.render())},t.prototype.render=function(){var t=this;if(this.dirty){this.dirty=!1;var n=this.context;n.clearRect(0,0,this.canvas.width,this.canvas.height),n.fillStyle=this.config.bgStyle,n.fillRect(0,0,this.canvas.width,this.canvas.height),n.save(),n.translate(this.centre.x,this.centre.y),n.rotate(this.angle*Math.PI/180),n.scale(this.scale,this.scale),n.drawImage(this.image,-this.image.width/2,-this.image.height/2),n.restore(),this.drawButtons(n)}requestAnimationFrame(function(){return t.render()})},t.prototype.drawButtons=function(t){for(var n=this.config.tooltips.padding,e=this.config.tooltips.radius,i=2*e+n,o=this.canvas.width-e-n,l=this.canvas.height-e-n,s=0;s<this.buttons.length;s++)this.buttons[s].draw(t,o,l-i*s,e);if(null!==this.currentTooltip){t.save();var u=e;t.font=u+"px sans-serif";var a=t.measureText(this.currentTooltip).width,r=a+n,h=.7*u+n,c=this.canvas.width-(2*e+2*n)-r,g=this.canvas.height-h-n,d=c+.5*n,p=this.canvas.height-1.5*n;t.globalAlpha=this.config.tooltips.bgAlpha,t.fillStyle=this.config.tooltips.bgStyle,this.drawRoundRectangle(t,c,g,r,h,8,!0,!1),t.globalAlpha=this.config.tooltips.textAlpha,t.fillStyle=this.config.tooltips.textStyle,t.fillText(this.currentTooltip,d,p),t.restore()}},t.prototype.drawRoundRectangle=function(t,n,e,i,o,l,s,u){l="number"==typeof l?l:5,s="boolean"!=typeof s||s,u="boolean"==typeof u&&u,t.beginPath(),t.moveTo(n+l,e),t.lineTo(n+i-l,e),t.quadraticCurveTo(n+i,e,n+i,e+l),t.lineTo(n+i,e+o-l),t.quadraticCurveTo(n+i,e+o,n+i-l,e+o),t.lineTo(n+l,e+o),t.quadraticCurveTo(n,e+o,n,e+o-l),t.lineTo(n,e+l),t.quadraticCurveTo(n,e,n+l,e),t.closePath(),s&&t.fill(),u&&t.stroke()},t.prototype.toSquareAngle=function(t){return(Math.trunc(t/90)+(Math.trunc(t%90)>45?1:0))%4*90},t.prototype.extendsDefaultConfig=function(t){var n=m,e=Object.assign({},n,t);return t.buttonStyle&&(e.buttonStyle=Object.assign(n.buttonStyle,t.buttonStyle)),t.tooltips&&(e.tooltips=Object.assign(n.tooltips,t.tooltips)),t.zoomOutButton&&(e.zoomOutButton=Object.assign(n.zoomOutButton,t.zoomOutButton)),t.zoomInButton&&(e.zoomInButton=Object.assign(n.zoomInButton,t.zoomInButton)),t.rotateLeftButton&&(e.rotateLeftButton=Object.assign(n.rotateLeftButton,t.rotateLeftButton)),t.rotateRightButton&&(e.rotateRightButton=Object.assign(n.rotateRightButton,t.rotateRightButton)),t.resetButton&&(e.resetButton=Object.assign(n.resetButton,t.resetButton)),e},t.prototype.screenToCanvasCentre=function(t){var n=this.canvas.getBoundingClientRect();return{x:t.x-n.left,y:t.y-n.top}},t.prototype.getUIElements=function(){return this.buttons},t.prototype.getUIElement=function(t){var n=this.getUIElements().filter(function(n){return n.isWithinBounds(t.x,t.y)});return n.length>0?n[0]:null},t.ctorParameters=function(){return[{type:p.b},{type:u.F},{type:f,decorators:[{type:u.o,args:[v]}]}]},t}(),b=function(){function t(t,n){this.style=n,this.sortId=0,this.hover=!1,this.display=!0,this.drawPosition=null,this.drawRadius=0,this.sortId=t.sortId,this.display=t.show,this.icon=t.icon,this.tooltip=t.tooltip}return t.prototype.onClick=function(t){return alert("no click action set!"),!0},t.prototype.onMouseDown=function(t){return!1},t.prototype.draw=function(t,n,e,i){this.drawPosition={x:n,y:e},this.drawRadius=i,t.save();var o="function"==typeof this.hover?this.hover():this.hover;t.globalAlpha=o?this.style.hoverAlpha:this.style.alpha,t.fillStyle=this.style.bgStyle,t.lineWidth=0,t.beginPath(),t.arc(n,e,i,0,2*Math.PI),t.closePath(),t.fill(),this.style.borderWidth>0&&(t.lineWidth=this.style.borderWidth,t.strokeStyle=this.style.borderStyle,t.stroke()),null!==this.icon&&(t.save(),this.drawIconFont(t,n,e,i),t.restore()),t.restore()},t.prototype.drawIconFont=function(t,n,e,i){t.font=i+"px "+this.style.iconFontFamily,t.fillStyle=this.style.iconStyle;var o=t.measureText(this.icon),l=n-o.width/2,s=e+i/2;t.fillText(this.icon,l,s)},t.prototype.isWithinBounds=function(t,n){if(null===this.drawPosition)return!1;var e=Math.abs(this.drawPosition.x-t),i=Math.abs(this.drawPosition.y-n);return e*e+i*i<=this.drawRadius*this.drawRadius},t}(),S=[d],w=u._4({encapsulation:0,styles:S,data:{}}),C=(u._2("ngx-imageviewer",y,o,{src:"src",width:"width",height:"height"},{},[]),[c]),B=u._4({encapsulation:0,styles:C,data:{}}),I=u._2("ngx-root",h,s,{},{},[]),x=e("qbdv"),O=function(){function t(){}return t}(),T=u._3(r,[h],function(t){return u._17([u._18(512,u.i,u._0,[[8,[I]],[3,u.i],u.x]),u._18(5120,u.v,u._16,[[3,u.v]]),u._18(4608,x.d,x.c,[u.v]),u._18(4608,u.h,u.h,[]),u._18(5120,u.a,u._8,[]),u._18(5120,u.t,u._13,[]),u._18(5120,u.u,u._14,[]),u._18(4608,p.b,p.s,[x.b]),u._18(6144,u.J,null,[p.b]),u._18(4608,p.e,p.f,[]),u._18(5120,p.c,function(t,n,e,i){return[new p.k(t),new p.o(n),new p.n(e,i)]},[x.b,x.b,x.b,p.e]),u._18(4608,p.d,p.d,[p.c,u.z]),u._18(135680,p.m,p.m,[x.b]),u._18(4608,p.l,p.l,[p.d,p.m]),u._18(6144,u.H,null,[p.l]),u._18(6144,p.p,null,[p.m]),u._18(4608,u.O,u.O,[u.z]),u._18(4608,p.g,p.g,[x.b]),u._18(4608,p.i,p.i,[x.b]),u._18(4608,g.i,g.i,[]),u._18(512,x.a,x.a,[]),u._18(1024,u.l,p.q,[]),u._18(1024,u.b,function(t,n){return[p.r(t,n)]},[[2,p.h],[2,u.y]]),u._18(512,u.c,u.c,[[2,u.b]]),u._18(131584,u._6,u._6,[u.z,u._1,u.r,u.l,u.i,u.c]),u._18(2048,u.e,null,[u._6]),u._18(512,u.d,u.d,[u.e]),u._18(512,p.a,p.a,[[3,p.a]]),u._18(512,g.h,g.h,[]),u._18(512,g.c,g.c,[]),u._18(512,O,O,[]),u._18(512,r,r,[]),u._18(256,v,m,[])])});a.production&&Object(u.U)(),Object(p.j)().bootstrapModuleFactory(T).catch(function(t){return console.log(t)})},gFIY:function(t,n){function e(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id="gFIY"}},[0]);