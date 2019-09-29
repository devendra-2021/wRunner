!function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=91)}({0:function(t,e,i){"use strict";e.a=function(){var t=[];return{addHandler:function(e){if("function"==typeof e){for(var i=0;i<t.length;i++)if(t[i]===e)return void console.log("The handler already in the list");t.push(e)}else console.log("The handler must be a function")},removeHandler:function(e){for(var i=0;i<t.length;i++)if(t[i]===e)return void t.splice(i,1);console.log("could not find observer in list of observers")},trigger:function(e){for(var i=t.slice(0),s=0;s<i.length;s++)i[s](e)}}}},2:function(t,e,i){"use strict";function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n=new function(){this.isNumber=function(t,e){e=e||[];for(var i=0;i<e.length;i++)if(s(t)===e[i])return!0;return!Number.isNaN(+t)&&("number"==typeof t&&!Number.isNaN(+t)||"string"==typeof t&&"number"==typeof+t)},this.toNumber=function(t){return("number"==typeof t&&!Number.isNaN(+t)||"string"==typeof t&&"number"==typeof+t&&!Number.isNaN(+t))&&+t},this.isDomEl=function(t){return"object"===s(t)&&!Number.isNaN(t)&&null!==t&&"ownerDocument"in t},this.isObject=function(t){return"object"===s(t)&&null!==t&&!Number.isNaN(t)},this.isArray=function(t){return!("object"!==s(t)||null===t||Number.isNaN(t)||!t.length)}};e.a=n},91:function(t,e,i){"use strict";i.r(e);var s=i(0),n=i(2);function a(){this.minLimit=0,this.maxLimit=100,this.valuesCount=this.maxLimit-this.minLimit,this.singleValue=50,this.rangeMinValue=20,this.rangeMaxValue=80,this.singleSelected=(this.singleValue-this.minLimit)/this.valuesCount*100,this.rangeSelected=(this.rangeMaxValue-this.rangeMinValue)/this.valuesCount*100,this.step=1,this.type="single",this.typeConstants={singleValue:"single",rangeValue:"range"},this.valueByProgressUpdateEvent=Object(s.a)(),this.valueUpdateEvent=Object(s.a)(),this.limitsUpdateEvent=Object(s.a)(),this.stepUpdateEvent=Object(s.a)(),this.percentageUpdateEvent=Object(s.a)(),this.typeUpdateEvent=Object(s.a)()}a.prototype={setLimits:function(t,e){t=t||{};var i=n.a.isNumber(t.minLimit)?+t.minLimit:this.minLimit,s=n.a.isNumber(t.maxLimit)?+t.maxLimit:this.maxLimit;return i<=s?(this.minLimit=i,this.maxLimit=s):(this.minLimit=s,this.maxLimit=i,e||console.log("Values have been reversed, because the minimum value is less than the maximum value.")),this.valuesCount=this.maxLimit-this.minLimit,this.limitsUpdateEvent.trigger({minLimit:this.minLimit,maxLimit:this.maxLimit,valuesCount:this.valuesCount}),{minLimit:this.minLimit,maxLimit:this.maxLimit,valuesCount:this.valuesCount}},getLimits:function(){return{minLimit:this.minLimit,maxLimit:this.maxLimit,valuesCount:this.valuesCount}},setValue:function(t,e){var i=function(t,i){var s;s=+t!=this[i]?this[i]-Math.round((this[i]-+t)/this.step)*this.step:Math.round(this[i]/this.step)*this.step;s<this.minLimit?(this[i]=this.minLimit,e||console.log("The value was equated to the minimum, because it is less than the minimum value.")):s>this.maxLimit?(this[i]=this.maxLimit,e||console.log("The value was equated to the maximum, because it is more than the maximum value.")):this[i]=s}.bind(this);if(this.type==this.typeConstants.singleValue)return i(n.a.isNumber(t)?+t:this.singleValue,"singleValue"),this.singleSelected=(this.singleValue-this.minLimit)/this.valuesCount*100,this.valueUpdateEvent.trigger({value:this.singleValue,selected:this.singleSelected}),{value:this.singleValue,selected:this.singleSelected};if(this.type==this.typeConstants.rangeValue){if(n.a.isObject(t)||null==t){if(null==t)var s=this.rangeMinValue,a=this.rangeMaxValue;else s=n.a.isNumber(t.minValue)?+t.minValue:this.rangeMinValue,a=n.a.isNumber(t.maxValue)?+t.maxValue:this.rangeMaxValue;if(s>a){var l=a;a=s,s=l}i(s,"rangeMinValue"),i(a,"rangeMaxValue")}return n.a.isNumber(t)&&(t<(this.rangeMaxValue+this.rangeMinValue)/2?(i(+t,"rangeMinValue"),i(this.rangeMaxValue,"rangeMaxValue")):(i(this.rangeMinValue,"rangeMinValue"),i(+t,"rangeMaxValue"))),this.rangeSelected=(this.rangeMaxValue-this.rangeMinValue)/this.valuesCount*100,this.valueUpdateEvent.trigger({minValue:this.rangeMinValue,maxValue:this.rangeMaxValue,selected:this.rangeSelected}),{minValue:this.rangeMinValue,maxValue:this.rangeMaxValue,selected:this.rangeSelected}}},getValue:function(){return this.type==this.typeConstants.singleValue?{value:this.singleValue,selected:this.singleSelected}:this.type==this.typeConstants.rangeValue?{minValue:this.rangeMinValue,maxValue:this.rangeMaxValue,selected:this.rangeSelected}:void 0},setStep:function(t){if(n.a.isNumber(t)&&!(t<=0))return this.step=+t,this.stepUpdateEvent.trigger(this.step),this.step},getStep:function(){return this.step},setValueByProgress:function(t){if(n.a.isNumber(t)){var e=Math.round(this.valuesCount*+t/100+this.minLimit);return this.valueByProgressUpdateEvent.trigger(e),e}},setType:function(t){var e=!1;for(var i in this.typeConstants)if(t===this.typeConstants[i]){e=!0;break}if(e)return this.type=t,this.typeUpdateEvent.trigger(this.type),this.type==this.typeConstants.singleValue&&this.valueUpdateEvent.trigger({value:this.value,selected:this.singleSelected}),this.type==this.typeConstants.rangeValue&&this.valueUpdateEvent.trigger({minValue:this.minValue,maxValue:this.maxValue,selected:this.rangeSelected}),this.type},getType:function(){return{type:this.type,typeConstants:Object.assign({},this.typeConstants)}}};var l=a;function o(){this.roots=document.body,this.divisionsCount=5,this.valueNoteDisplay=!0,this.styles={theme:{value:"default",className:"theme",oldValue:null},direction:{value:"horizontal",className:"direction",oldValue:null}},this.stylesConstants={direction:{horizontalValue:"horizontal",verticalValue:"vertical"}},this.stableElsList=[],this.divisionsList=[],this.els=[],this.base=document.createElement("div"),this.stableElsList.push(this.base),this.outer=document.createElement("div"),this.stableElsList.push(this.outer),this.path=document.createElement("div"),this.stableElsList.push(this.path),this.pathPassed=document.createElement("div"),this.stableElsList.push(this.pathPassed),this.handle=document.createElement("div"),this.stableElsList.push(this.handle),this.handleMin=document.createElement("div"),this.stableElsList.push(this.handleMin),this.handleMax=document.createElement("div"),this.stableElsList.push(this.handleMax),this.valueNote=document.createElement("div"),this.stableElsList.push(this.valueNote),this.valueMinNote=document.createElement("div"),this.stableElsList.push(this.valueMinNote),this.valueMaxNote=document.createElement("div"),this.stableElsList.push(this.valueMaxNote),this.divisions=document.createElement("div"),this.stableElsList.push(this.divisions),this.mouseDownEvent=Object(s.a)(),this.draggEvent=Object(s.a)(),this.clickEvent=Object(s.a)(),this.UIValueActionEvent=Object(s.a)(),this.stylesUpdateEvent=Object(s.a)(),this.stylesAppliedEvent=Object(s.a)(),this.valueNoteDisplayUpdateEvent=Object(s.a)(),this.rootsUpdateEvent=Object(s.a)(),this.divisionsCountUpdateEvent=Object(s.a)(),this.valueNoteDisplayAppliedEvent=Object(s.a)(),this.baseDOMGeneratedEvent=Object(s.a)(),this.DOMUpdateEvent=Object(s.a)(),this.path.addEventListener("mousedown",function(t){this.mouseDownEvent.trigger(t)}.bind(this))}o.prototype={generateBaseDOM:function(){this.base.classList.add("wrunner"),this.outer.classList.add("wrunner__outer"),this.path.classList.add("wrunner__path"),this.pathPassed.classList.add("wrunner__pathPassed"),this.handle.classList.add("wrunner__handle"),this.handleMin.classList.add("wrunner__handle"),this.handleMax.classList.add("wrunner__handle"),this.valueNote.classList.add("wrunner__valueNote"),this.valueMinNote.classList.add("wrunner__valueNote"),this.valueMaxNote.classList.add("wrunner__valueNote"),this.divisions.classList.add("wrunner__divisions"),this.baseDOMGeneratedEvent.trigger()},updateDOM:function(t){this.path.innerHTML="",this.outer.innerHTML="",this.base.appendChild(this.outer),this.outer.appendChild(this.path),this.path.appendChild(this.pathPassed),this.outer.appendChild(this.divisions),t.type==t.typeConstants.singleValue&&(this.path.appendChild(this.handle),this.outer.appendChild(this.valueNote)),t.type==t.typeConstants.rangeValue&&(this.path.appendChild(this.handleMin),this.path.appendChild(this.handleMax),this.outer.appendChild(this.valueMinNote),this.outer.appendChild(this.valueMaxNote)),this.DOMUpdateEvent.trigger()},action:function(t){var e=!1,i=function(e){s.call(this,e),this.draggEvent.trigger(t)}.bind(this);function s(t){var e,i,s,n=this.styles.direction.value;n==this.stylesConstants.direction.horizontalValue&&(e=this.path.offsetWidth,i=this.path.getBoundingClientRect().left,s=t.clientX),n==this.stylesConstants.direction.verticalValue&&(e=this.path.offsetHeight,i=this.path.getBoundingClientRect().top,s=t.clientY),s<i-10||s>i+e+10||(n==this.stylesConstants.direction.horizontalValue&&this.UIValueActionEvent.trigger((s-i)/e*100),n==this.stylesConstants.direction.verticalValue&&this.UIValueActionEvent.trigger(100-(s-i)/e*100))}document.body.addEventListener("mousemove",function(){return e=!0},{once:!0}),document.body.addEventListener("mousemove",i),document.body.addEventListener("mouseup",function(t){var n=t.target;document.body.removeEventListener("mousemove",i),e||n!=this.handle&&n!=this.handleMin&&n!=this.handleMax&&(s.call(this,t),this.clickEvent.trigger())}.bind(this),{once:!0})},append:function(){return this.roots.appendChild(this.base),this.roots},setRoots:function(t){if(n.a.isDomEl(t))return this.roots=t,this.rootsUpdateEvent.trigger(this.roots),this.roots},getRoots:function(){return this.roots},generateDivisions:function(){this.divisions.innerHTML="",this.divisionsList.length=0;for(var t=this.divisionsCount;t>0;t--){var e=document.createElement("div");e.classList.add("wrunner__division"),this.divisionsList.push(e),this.divisions.appendChild(e)}return this.els=this.divisionsList.concat(this.stableElsList),this.divisionsList},setDivisionsCount:function(t,e){if(n.a.isNumber(t)&&!(t<0))return 1==(t=Math.round(t))&&(t++,e||console.log("Count was increased by one, cause it may not be equal to one.")),this.divisionsCount=+t,this.divisionsCountUpdateEvent.trigger(this.divisionsCount),this.divisionsCount},getDivisionsCount:function(){return this.divisionsCount},drawValue:function(t,e,i){var s,n,a,l,o=t.selected,h=this.styles.direction.value,u=this.stylesConstants.direction,d=i.type,r=i.typeConstants;if(this.pathPassed.style.cssText="",this.handle.style.cssText="",this.handleMin.style.cssText="",this.handleMax.style.cssText="",this.valueNote.style.cssText="",this.valueMinNote.style.cssText="",this.valueMaxNote.style.cssText="",d==r.singleValue&&(this.valueNote.innerHTML=t.value,h==u.horizontalValue&&(this.pathPassed.style.width=o+"%",this.handle.style.left=o+"%",s=this.path.offsetWidth,n=this.valueNote.offsetWidth,this.valueNote.style.left=(s*o/100-n/2)/s*100+"%"),h==u.verticalValue&&(this.pathPassed.style.height=o+"%",this.handle.style.top=100-o+"%",s=this.path.offsetHeight,n=this.valueNote.offsetHeight,this.valueNote.style.top=100-(s*o/100+n/2)/s*100+"%")),d==r.rangeValue){var p=(t.minValue-e.minLimit)/e.valuesCount*100;this.valueMinNote.innerHTML=t.minValue,this.valueMaxNote.innerHTML=t.maxValue,h==u.horizontalValue&&(this.pathPassed.style.width=o+"%",this.pathPassed.style.left=p+"%",this.handleMin.style.left=p+"%",this.handleMax.style.left=p+o+"%",s=this.path.offsetWidth,a=this.valueMinNote.offsetWidth,l=this.valueMaxNote.offsetWidth,this.valueMinNote.style.left=(s*p/100-a/2)/s*100+"%",this.valueMaxNote.style.left=(s*(p+o)/100-l/2)/s*100+"%"),h==u.verticalValue&&(this.pathPassed.style.height=o+"%",this.pathPassed.style.top=100-o-p+"%",this.handleMax.style.top=100-p-o+"%",this.handleMin.style.top=100-p+"%",s=this.path.offsetHeight,a=this.valueMinNote.offsetHeight,l=this.valueMaxNote.offsetHeight,this.valueMinNote.style.top=100-(s*p/100+a/2)/s*100+"%",this.valueMaxNote.style.top=100-(s*(p+o)/100+l/2)/s*100+"%")}return t},setStyles:function(t){if(n.a.isObject(t)){var e=!1;for(var i in t)if(i in this.styles){var s=this.styles[i];if(void 0!==t[i].value)if(this.stylesConstants[i]){for(var a in this.stylesConstants[i])if(t[i].value==this.stylesConstants[i][a]){s.oldValue=s.value,s.value=t[i].value,e=!0;break}}else s.oldValue=s.value,s.value=t[i].value,e=!0;"string"==typeof t[i].className&&(s.className=t[i].className,e=!0)}if(e)return this.stylesUpdateEvent.trigger(Object.assign({},this.styles)),Object.assign({},this.styles)}},applyStyles:function(){for(var t=this.styles,e=this.els.length-1;e>=0;e--){var i=this.els[e];for(var s in t){var n=this.els[e].classList[0],a=t[s].oldValue,l=t[s].value;a&&i.classList.remove(n+"_"+t[s].className+"_"+a),l&&i.classList.add(n+"_"+t[s].className+"_"+l)}}return this.stylesAppliedEvent.trigger(Object.assign({},this.styles)),Object.assign({},this.styles)},getStyles:function(){return{styles:Object.assign({},this.styles),stylesConstants:Object.assign({},this.stylesConstants)}},applyValueNoteDisplay:function(){for(var t=this.valueNote.classList[0],e=[this.valueNote,this.valueMinNote,this.valueMaxNote],i=e.length-1;i>=0;i--)e[i].classList.remove(t+"_display_"+(this.valueNoteDisplay?"hidden":"visible")),e[i].classList.add(t+"_display_"+(this.valueNoteDisplay?"visible":"hidden"));return this.valueNoteDisplayAppliedEvent.trigger(this.valueNoteDisplay),this.valueNoteDisplay},setValueNoteDisplay:function(t){if("boolean"==typeof t)return this.valueNoteDisplay=t,this.valueNoteDisplayUpdateEvent.trigger(this.valueNoteDisplay),this.valueNoteDisplay},getValueNoteDisplay:function(){return this.valueNoteDisplay}};var h=o;function u(t){t=t||{};this.model=t.model,this.view=t.view,this.model.stepUpdateEvent.addHandler(function(t){this.model.setValue(null,!0)}.bind(this)),this.model.valueByProgressUpdateEvent.addHandler(function(t){this.model.setValue(t,!0)}.bind(this)),this.model.valueUpdateEvent.addHandler(function(t){this.view.drawValue(this.model.getValue(),this.model.getLimits(),this.model.getType())}.bind(this)),this.model.limitsUpdateEvent.addHandler(function(t){this.model.setValue(null,!0)}.bind(this)),this.model.typeUpdateEvent.addHandler(function(t){this.view.updateDOM(this.model.getType())}.bind(this)),this.view.baseDOMGeneratedEvent.addHandler(function(t){this.view.updateDOM(this.model.getType())}.bind(this)),this.view.DOMUpdateEvent.addHandler(function(t){this.view.drawValue(this.model.getValue(),this.model.getLimits(),this.model.getType())}.bind(this)),this.view.mouseDownEvent.addHandler(function(t){this.view.action(t)}.bind(this)),this.view.UIValueActionEvent.addHandler(function(t){this.model.setValueByProgress(t,!0)}.bind(this)),this.view.stylesUpdateEvent.addHandler(function(t){this.view.applyStyles(),this.view.drawValue(this.model.getValue(),this.model.getLimits(),this.model.getType())}.bind(this)),this.view.valueNoteDisplayUpdateEvent.addHandler(function(t){this.view.applyValueNoteDisplay(),this.view.drawValue(this.model.getValue(),this.model.getLimits(),this.model.getType())}.bind(this)),this.view.rootsUpdateEvent.addHandler(function(t){this.view.append()}.bind(this)),this.view.divisionsCountUpdateEvent.addHandler(function(t){this.view.generateDivisions(),this.view.applyStyles()}.bind(this)),this.runInstance(),this.applyOptions(t.options),this.triggerEvents()}u.prototype={runInstance:function(){this.view.generateBaseDOM(),this.view.generateDivisions(),this.view.append(),this.view.applyValueNoteDisplay(),this.view.applyStyles(),this.view.drawValue(this.model.getValue(),this.model.getLimits(),this.model.getType())},applyOptions:function(t){void 0!==(t=t||{}).step&&this.model.setStep(t.step),void 0!==t.type&&this.model.setType(t.type),void 0!==t.limits&&this.model.setLimits(t.limits),void 0!==t.value&&this.model.setValue(t.value),void 0!==t.roots&&this.view.setRoots(t.roots),void 0!==t.divisionsCount&&this.view.setDivisionsCount(t.divisionsCount),void 0!==t.valueNoteDisplay&&this.view.setValueNoteDisplay(t.valueNoteDisplay),void 0!==t.styles&&this.view.setStyles(t.styles),void 0!==t.onStepUpdate&&this.onStepUpdate(t.onStepUpdate),void 0!==t.onTypeUpdate&&this.onTypeUpdate(t.onTypeUpdate),void 0!==t.onLimitsUpdate&&this.onLimitsUpdate(t.onLimitsUpdate),void 0!==t.onValueUpdate&&this.onValueUpdate(t.onValueUpdate),void 0!==t.onRootsUpdate&&this.onRootsUpdate(t.onRootsUpdate),void 0!==t.onDivisionsCountUpdate&&this.onDivisionsCountUpdate(t.onDivisionsCountUpdate),void 0!==t.onValueNoteDisplayUpdate&&this.onValueNoteDisplayUpdate(t.onValueNoteDisplayUpdate),void 0!==t.onStylesUpdate&&this.onStylesUpdate(t.onStylesUpdate)},triggerEvents:function(){this.model.type==this.model.typeConstants.singleValue&&this.model.valueUpdateEvent.trigger({value:this.model.value,selected:this.model.singleSelected}),this.model.type==this.model.typeConstants.rangeValue&&this.model.valueUpdateEvent.trigger({minValue:this.model.minValue,maxValue:this.model.maxValue,selected:this.model.rangeSelected}),this.model.typeUpdateEvent.trigger(this.model.type),this.model.stepUpdateEvent.trigger(this.model.step),this.model.limitsUpdateEvent.trigger({minLimit:this.model.minLimit,maxLimit:this.model.maxLimit,valuesCount:this.model.valuesCount}),this.view.stylesUpdateEvent.trigger(Object.assign({},this.view.styles)),this.view.valueNoteDisplayUpdateEvent.trigger(this.view.valueNoteDisplay),this.view.rootsUpdateEvent.trigger(this.view.roots),this.view.divisionsCountUpdateEvent.trigger(this.view.divisionsCount)},onValueUpdate:function(t){this.model.valueUpdateEvent.addHandler(t)},onStepUpdate:function(t){this.model.stepUpdateEvent.addHandler(t)},onLimitsUpdate:function(t){this.model.limitsUpdateEvent.addHandler(t)},onTypeUpdate:function(t){this.model.typeUpdateEvent.addHandler(t)},onStylesUpdate:function(t){this.view.stylesUpdateEvent.addHandler(t)},onValueNoteDisplayUpdate:function(t){this.view.valueNoteDisplayUpdateEvent.addHandler(t)},onRootsUpdate:function(t){this.view.rootsUpdateEvent.addHandler(t)},onDivisionsCountUpdate:function(t){this.view.divisionsCountUpdateEvent.addHandler(t)}};var d=u;window.wRunner=function(t){t=t||{};var e=new function(){this.Model=l,this.View=h,this.Presenter=d};return function(){var i=new e.Model,s=new e.View,n=new e.Presenter({model:i,view:s,options:t});return{setType:i.setType.bind(i),setLimits:i.setLimits.bind(i),setValue:i.setValue.bind(i),setStep:i.setStep.bind(i),getType:i.getType.bind(i),getLimits:i.getLimits.bind(i),getValue:i.getValue.bind(i),getStep:i.getStep.bind(i),setRoots:s.setRoots.bind(s),setStyles:s.setStyles.bind(s),setValueNoteDisplay:s.setValueNoteDisplay.bind(s),setDivisionsCount:s.setDivisionsCount.bind(s),getRoots:s.getRoots.bind(s),getStyles:s.getStyles.bind(s),getValueNoteDisplay:s.getValueNoteDisplay.bind(s),getDivisionsCount:s.getDivisionsCount.bind(s),onStepUpdate:n.onStepUpdate.bind(n),onTypeUpdate:n.onTypeUpdate.bind(n),onLimitsUpdate:n.onLimitsUpdate.bind(n),onValueUpdate:n.onValueUpdate.bind(n),onRootsUpdate:n.onRootsUpdate.bind(n),onDivisionsCountUpdate:n.onDivisionsCountUpdate.bind(n),onValueNoteDisplayUpdate:n.onValueNoteDisplayUpdate.bind(n),onStylesUpdate:n.onStylesUpdate.bind(n)}}()}}});