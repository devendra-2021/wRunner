!function(n){function e(e){for(var i,u,l=e[0],r=e[1],c=e[2],f=0,p=[];f<l.length;f++)u=l[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i]);for(s&&s(e);p.length;)p.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],i=!0,l=1;l<t.length;l++){var r=t[l];0!==o[r]&&(i=!1)}i&&(a.splice(e--,1),n=u(u.s=t[0]))}return n}var i={},o={1:0},a=[];function u(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=n,u.c=i,u.d=function(n,e,t){u.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},u.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,e){if(1&e&&(n=u(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)u.d(t,i,function(e){return n[e]}.bind(null,i));return t},u.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="";var l=window.webpackJsonp=window.webpackJsonp||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var s=r;a.push([3,0]),t()}({3:function(n,e,t){$=t(4),t(5)},5:function(n,e){document.addEventListener("DOMContentLoaded",(function(){function n(n,e,t){var i=[],o=$($(".js-sample")[n]).find(".js-sample__parameterValue"),a=o.eq(0).find("input"),u=o.eq(1).find("input"),l=o.eq(2).find("input"),r=[o.eq(3).find("input").eq(0),o.eq(3).find("input").eq(1)],c=o.eq(4).find("input"),s=o.eq(5).find("input"),f=o.eq(6).find("input"),p=o.eq(7).find("input"),v=[o.eq(8).find("input").eq(0),o.eq(8).find("input").eq(1)],d=o.eq(9).find("input"),y=o.eq(10).find("input");e=Object.assign(e,{onStepUpdate:function(n){a.val(n)},onLimitsUpdate:function(n){u.val(n.minLimit),l.val(n.maxLimit)},onTypeUpdate:function(n){n.value===r[0].val()&&(r[0][0].checked=!0,s.parent().parent().css("visibility","hidden"),f.parent().parent().css("visibility","hidden"),c.parent().parent().css("visibility","visible")),n.value===r[1].val()&&(r[1][0].checked=!0,c.parent().parent().css("visibility","hidden"),s.parent().parent().css("visibility","visible"),f.parent().parent().css("visibility","visible"))},onValueUpdate:function(n){void 0!==n.value&&c.val(n.value),(n.minValue&&void 0!==n.minValue||n.maxValue&&void 0!==n.maxValue)&&(s.val(n.minValue),f.val(n.maxValue))},onRootsUpdate:function(n){for(var e=$(n),t="",i=0;i<e[0].classList.length;i++)t+="."+e[0].classList[i];p.val(t)},onDirectionUpdate:function(n){n.value===v[0].val()&&(v[0][0].checked=!0),n.value===v[1].val()&&(v[1][0].checked=!0)},onValueNoteDisplayUpdate:function(n){d[0].checked=n},onDivisionsCountUpdate:function(n){y.val(n)}}),i[n]="native"==t?window.wRunner(e):$($(".js-sample__instance")[n]).wRunner(e),a.on("focus",(function(e){var t=a.val();function o(e){"Enter"===e.key&&(i[n].setStep(a.val()),a.blur()),"Escape"===e.key&&(a.val(t),a.blur())}a.on("keydown",o),a.on("blur",(function(){a.off("keydown",o)}))})),u.on("focus",(function(e){var t=u.val();function o(e){"Enter"===e.key&&(i[n].setLimits({minLimit:u.val()}),u.blur()),"Escape"===e.key&&(u.val(t),u.blur())}u.on("keydown",o),u.on("blur",(function(){u.off("keydown",o)}))})),l.on("focus",(function(e){var t=l.val();function o(e){"Enter"===e.key&&(i[n].setLimits({maxLimit:l.val()}),l.blur()),"Escape"===e.key&&(l.val(t),l.blur())}l.on("keydown",o),l.on("blur",(function(){l.off("keydown",o)}))})),r[0].on("input",(function(e){i[n].setType(r[0].val())})),r[1].on("input",(function(e){i[n].setType(r[1].val())})),c.on("focus",(function(e){var t=c.val();function o(e){"Enter"===e.key&&(i[n].setSingleValue(c.val()),c.blur()),"Escape"===e.key&&(c.val(t),c.blur())}c.on("keydown",o),c.on("blur",(function(){c.off("keydown",o)}))})),s.on("focus",(function(e){var t=s.val();function o(e){"Enter"===e.key&&(i[n].setRangeValue({minValue:s.val()}),s.blur()),"Escape"===e.key&&(s.val(t),s.blur())}s.on("keydown",o),s.on("blur",(function(){s.off("keydown",o)}))})),f.on("focus",(function(e){var t=f.val();function o(e){"Enter"===e.key&&(i[n].setRangeValue({maxValue:f.val()}),f.blur()),"Escape"===e.key&&(f.val(t),f.blur())}f.on("keydown",o),f.on("blur",(function(){f.off("keydown",o)}))})),v[0].on("input",(function(e){i[n].setDirection(v[0].val())})),v[1].on("input",(function(e){i[n].setDirection(v[1].val())})),d.on("input",(function(e){i[n].setValueNoteDisplay(d[0].checked)})),y.on("focus",(function(e){var t=y.val();function o(e){"Enter"===e.key&&(i[n].setDivisionsCount(y.val()),y.blur()),"Escape"===e.key&&(y.val(t),y.blur())}y.on("keydown",o),y.on("blur",(function(){y.off("keydown",o)}))}))}n(0,{roots:document.getElementsByClassName("js-sample__instance")[0]},"native"),n(1,{roots:document.getElementsByClassName("js-sample__instance")[1],direction:"vertical",step:5,type:"range"},"native"),n(2,{divisionsCount:16,direction:"vertical",step:5,type:"range"}),n(3,{valueNoteDisplay:!1,divisionsCount:0}),setTimeout((function(){}),3e3)}))}});