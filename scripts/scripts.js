!function(e){function n(n){for(var i,r,u=n[0],l=n[1],c=n[2],p=0,d=[];p<u.length;p++)r=u[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);for(s&&s(n);d.length;)d.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],i=!0,u=1;u<t.length;u++){var l=t[u];0!==o[l]&&(i=!1)}i&&(a.splice(n--,1),e=r(r.s=t[0]))}return e}var i={},o={1:0},a=[];function r(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=i,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)r.d(t,i,function(n){return e[n]}.bind(null,i));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var c=0;c<u.length;c++)n(u[c]);var s=l;a.push([2,0]),t()}([,,function(e,n,t){t(3),window.$=t(4),window.jQuery=window.$},function(e,n){function t(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){i(e,n,t[n])}))}return e}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n,i,o){var a,r=$(".js-sample").eq(e).find(".js-sample__parameter-value"),u=r.eq(0).find("input"),l=r.eq(1).find("input"),c=r.eq(2).find("input"),s=[r.eq(3).find("input").eq(0),r.eq(3).find("input").eq(1)],p=r.eq(4).find("input"),d=r.eq(5).find("input"),f=r.eq(6).find("input"),v=r.eq(7).find("input"),y=[r.eq(8).find("input").eq(0),r.eq(8).find("input").eq(1)],m=r.eq(9).find("input"),b=r.eq(10).find("input"),h=t({},{onStepUpdate:function(e){u.val(e)},onLimitsUpdate:function(e){l.val(e.minLimit),c.val(e.maxLimit)},onTypeUpdate:function(e){e.value===s[0].val()&&(s[0][0].checked=!0,d.parent().parent().css("visibility","hidden"),f.parent().parent().css("visibility","hidden"),p.parent().parent().css("visibility","visible")),e.value===s[1].val()&&(s[1][0].checked=!0,p.parent().parent().css("visibility","hidden"),d.parent().parent().css("visibility","visible"),f.parent().parent().css("visibility","visible"))},onValueUpdate:function(e){p.val(e.singleValue),d.val(e.rangeValueMin),f.val(e.rangeValueMax)},onRootsUpdate:function(e){for(var n=$(e),t="",i=0;i<n[0].classList.length;i+=1)t+=".".concat(n[0].classList[i]);v.val(t)},onDirectionUpdate:function(e){e.value===y[0].val()&&(y[0][0].checked=!0),e.value===y[1].val()&&(y[1][0].checked=!0)},onValueNotesDisplayUpdate:function(e){m[0].checked=e},onDivisionsCountUpdate:function(e){b.val(e)}},n);function g(e){var n=$(this);"Enter"===e.key&&(a[e.data.method](e.data.action?e.data.action(n.val()):n.val()),n.blur()),"Escape"===e.key&&(n.val(e.data.snapshot),n.blur())}function w(e,n){e.on("focus",(function(){var i=e.val();e.on("keydown",t({},n,{snapshot:i}),g),e.on("blur",(function(){e.off("keydown",t({},n,{snapshot:i}),g)}))}))}a="native"===i?window.wRunner(t({},h,{roots:o})):$(o).wRunner(h),s[0].on("input",(function(){a.setType(s[0].val())})),s[1].on("input",(function(){a.setType(s[1].val())})),y[0].on("input",(function(){a.setDirection(y[0].val())})),y[1].on("input",(function(){a.setDirection(y[1].val())})),m.on("input",(function(){a.setValueNotesDisplay(m[0].checked)})),w(u,{method:"setStep"}),w(l,{method:"setLimits",action:function(e){return{minLimit:e}}}),w(c,{method:"setLimits",action:function(e){return{maxLimit:e}}}),w(p,{method:"setSingleValue"}),w(d,{method:"setRangeValues",action:function(e){return{minValue:e}}}),w(f,{method:"setRangeValues",action:function(e){return{maxValue:e}}}),w(b,{method:"setDivisionsCount"})}document.addEventListener("DOMContentLoaded",(function(){o(0,{},"native",document.getElementById("sample0")),o(1,{direction:"vertical",step:5,type:"range"},"native",document.getElementById("sample1")),o(2,{divisionsCount:16,direction:"vertical",step:5,type:"range"},"jquery",document.getElementById("sample2")),o(3,{valueNotesDisplay:!1,divisionsCount:0},"jquery",document.getElementById("sample3"))}))}]);