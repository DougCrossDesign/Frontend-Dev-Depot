/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
function init_vidlist(vidPlayerContainerID,triggerClass){$(triggerClass).click(function(e){$(triggerClass).removeClass("active"),$(this).addClass("active"),e.preventDefault();var URL=$(this).attr("href"),htm='<iframe width="100%" height="100%" src="http://www.youtube.com/embed/'+URL+'?rel=0&autoplay=1" frameborder="0" allowfullscreen ></iframe>';return $(vidPlayerContainerID).html(htm),!1})}function changeClass(){$("#icon").toggleClass("change")}!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){function r(a){var b=a.length,c=m.type(a);return"function"!==c&&!m.isWindow(a)&&(!(1!==a.nodeType||!b)||("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a))}function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}function D(a,b){do{a=a[b]}while(a&&1!==a.nodeType);return a}function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if("string"==typeof(c=a.getAttribute(d))){try{c="true"===c||"false"!==c&&("null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c)}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?null==(f=g[b])&&(f=g[m.camelCase(b)]):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;for(;e--;)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)for(;b.length;)c.createElement(b.pop());return c}function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}function Ub(a,b){if(b in a)return b;for(var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;e--;)if((b=Tb[e]+c)in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),"inline"===("none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j)&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),(g=m.cssHooks[d])&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))for(;d=f[e++];)"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}var e={},f=a===Ic;return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){for(var d,e,f,g,h=a.contents,i=a.dataTypes;"*"===i[0];)i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];for(f=k.shift();f;)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(!(g=j[i+" "+f]||j["* "+f]))for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){!0===g?g=j[e]:!0!==j[e]&&(f=h[0],k.unshift(h[1]));break}if(!0!==g)if(g&&a.throws)b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function dd(a){return m.isWindow(a)?a:9===a.nodeType&&(a.defaultView||a.parentWindow)}var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var e=0,f=a.length,g=r(a);if(c){if(g)for(;f>e&&!1!==b.apply(a[e],c);e++);else for(e in a)if(!1===b.apply(a[e],c))break}else if(g)for(;f>e&&!1!==b.call(a[e],e,a[e]);e++);else for(e in a)if(!1===b.call(a[e],e,a[e]))break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;)a[e++]=b[d++];if(c!==c)for(;void 0!==b[d];)a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var e=[],f=0,g=a.length,h=!c;g>f;f++)!b(a[f],f)!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)null!=(d=b(a[f],f,c))&&i.push(d);else for(f in a)null!=(d=b(a[f],f,c))&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});var s=function(a){function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(!(h=b.getElementById(j))||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){for(o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;l--;)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}var a=[];return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){for(var c=a.split("|"),e=a.length;e--;)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}function pb(){}function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){for(;b=b[d];)if((1===b.nodeType||e)&&a(b,c,g))return!0}else for(;b=b[d];)if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d)for(j=ub(r,n),d(j,[],h,i),k=j.length;k--;)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l));if(f){if(e||a){if(e){for(j=[],k=r.length;k--;)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}for(k=r.length;k--;)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e&&!d.relative[a[e].type];e++);return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){for(m=0;o=a[m++];)if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){for(m=0;o=b[m++];)o(r,s,g,h);if(f){if(p>0)for(;q--;)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d||(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);for(c=a;c=c.parentNode;)h.unshift(c);for(c=b;c=c.parentNode;)i.unshift(c);for(;h[d]===i[d];)d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){for(;b=a[f++];)b===a[f]&&(e=d.push(f));for(;e--;)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else for(;b=a[d++];)c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){for(;p;){for(l=b;l=l[p];)if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){for(k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];l=++n&&l&&l[p]||(m=n=0)||o.pop();)if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else for(;(l=++n&&l&&l[p]||(m=n=0)||o.pop())&&((h?l.nodeName.toLowerCase()!==r:1!==l.nodeType)||!++m||(s&&((l[u]||(l[u]={}))[a]=[w,m]),l!==b)););return(m-=e)===d||m%d==0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){for(var d,f=e(a,b),g=f.length;g--;)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){for(var f,g=d(a,null,e,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do{if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return(c=c.toLowerCase())===a||0===c.indexOf(a+"-")}while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return!1===a.disabled},disabled:function(a){return!0===a.disabled},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,!0===a.selected},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=function(a){return function(b){return"input"===b.nodeName.toLowerCase()&&b.type===a}}(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=function(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}(b);return pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);for(h=a,i=[],
j=d.preFilter;h;){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)},h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){for(b||(b=g(a)),c=b.length;c--;)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(!(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0]))return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}for(i=X.needsContext.test(a)?0:j.length;i--&&(k=j[i],!d.relative[l=k.type]);)if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),!(a=f.length&&qb(j)))return I.apply(e,f),e;break}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:!0===a[b]?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(!(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a))||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if((d=y.getElementById(c[2]))&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?void 0!==x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))}).prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){for(var d=[],e=a[b];e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c));)1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(!1===h[f].apply(l[0],l[1])&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){for(var d;(d=m.inArray(c,h,d))>-1;)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var i,j,k,b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}};if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(!0===a?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,!0!==a&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}}),m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var L,K="undefined";for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;(c=y.getElementsByTagName("body")[0])&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return(1===c||9===c)&&(!b||!0!==b&&a.getAttribute("classid")===b)};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return!!(a=a.nodeType?m.cache[a[m.expando]]:a[m.expando])&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){for(c=g.length;c--;)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};for("string"!=typeof a&&(b=a,a=void 0),a=a||"fx";g--;)(c=m._data(f[g],a+"queueHooks"))&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=!1===d.attributes[c].expando);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){for(c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;h--;)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&!1!==j.setup.call(a,d,p,k)||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){for(b=(b||"").match(E)||[""],j=b.length;j--;)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){for(l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;f--;)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&!1!==l.teardown.call(a,p,r.handle)||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||!1!==k.trigger.apply(d,c))){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}for(n=0;(h=o[n++])&&!b.isPropagationStopped();)b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),(f=g&&h[g])&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),!1===b.result&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||!1===k._default.apply(o.pop(),c))&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||!1!==k.preDispatch.call(this,a)){for(h=m.event.handlers.call(this,a,j),b=0;(f=h[b++])&&!a.isPropagationStopped();)for(a.currentTarget=f.elem,g=0;(e=f.handlers[g++])&&!a.isImmediatePropagationStopped();)(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,void 0!==(c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i))&&!1===(a.result=c)&&(a.preventDefault(),a.stopPropagation()));return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(!0!==i.disabled||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];for(g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;b--;)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&!1===a.returnValue?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return!m.nodeName(this,"form")&&void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return!m.nodeName(this,"form")&&void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),!1===d)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(!1===b||"function"==typeof b)&&(c=b,b=void 0),!1===c&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td,m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if((f=a[q])||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){for(h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];e--;)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody)for(f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;e--;)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j);for(m.merge(p,h.childNodes),h.textContent="";h.firstChild;)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));for(h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;f=p[q++];)if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c))for(e=0;f=h[e++];)ob.test(f.type||"")&&c.push(f);return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){wb(this,a).appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){for(1===a.nodeType&&m.cleanData(ub(a,!1));a.firstChild;)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ib,Jb,Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},
Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"}),!function(){function i(){var b,c,d,i;(c=y.getElementsByTagName("body")[0])&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}var b,c,d,e,f,g,h;b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],(c=d&&d.style)&&(c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}}))}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),!0===c||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}}),m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do{h=h||".5",g/=h,m.style(c.elem,a,g+f)}while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||!0===d.queue)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||!1===f.queue?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&!1!==a&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)(a=b[c])()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];return arguments.length?(d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),(b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()])&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))})):e?(b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)):void 0}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){for(var c,d,e=a.options,f=m.makeArray(b),g=e.length;g--;)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)for(;c=f[e++];)d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return!1===b?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""!==b&&b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{for:"htmlFor",class:"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){for(f=0;e=b[f++];)d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){for(f=0;e=b[f++];)for(;d.indexOf(" "+e+" ")>=0;)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c)for(var b,d=0,e=m(this),f=a.match(E)||[];b=f[d++];)e.hasClass(b)?e.removeClass(b):e.addClass(b);else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||!1===a?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[],m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),(w=v.getResponseHeader("etag"))&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j)for(j={};b=Cc.exec(f);)j[b[1].toLowerCase()]=b[2];b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0==m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),!1===k.cache&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&!1!==k.contentType||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(!1===k.beforeSend.call(l,v,k)||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstChild&&1===a.firstChild.nodeType;)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,(Yc=k.ajax=!!Yc)&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}}),m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=!1!==b.jsonp&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):!1!==b.jsonp&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;return f?(b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d):void 0},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||cd;a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position");)a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(!0===d||!0===e?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m}),/*!
	* Custom Checkbox v0.1
	* Dual licensed under the MIT and GPL licenses:
	* http://www.opensource.org/licenses/mit-license.php
	* http://www.gnu.org/licenses/gpl.html
**/
function($){$.fn.customChbx=function(options){return this.each(function(){
// Variables
var $input=$(this),inputType=$input.attr("type"),defaults={offTxt:$input.attr("data-chbx-offtxt")||"",onTxt:$input.attr("data-chbx-ontxt")||""},settings=$.extend({},defaults,options),plugin={
// Add Structure
addStructure:function(){$input.after(function(){return'<div class="chbx-wrap"><div class="chbx-btn"><span class="chbx-icon"></span><span class="chbx-txt">'+settings.offTxt+"</span></div></div>"}),$input.appendTo($input.next()),
// Calls
plugin.startingState(),"checkbox"==inputType?plugin.chbxChangeState():"radio"==inputType?plugin.radioChangeState():alert("Please use chbx.js for checkboxes and radio buttons only.")},
// Starting State
startingState:function(){$input.prop("checked")&&$input.parent().addClass("on").find(".chbx-txt").html(settings.onTxt)},
// Checkbox Change State
chbxChangeState:function(){$input.on("change",function(){var $this=$(this);$this.prop("checked")?// if checked already
$this.parent().addClass("on").find(".chbx-txt").html(settings.onTxt):// if not checked
$this.parent().removeClass("on").find(".chbx-txt").html(settings.offTxt)})},
// Radio Change State
radioChangeState:function(){$input.on("change",function(){var $this=$(this),inputName=($this.parent(),$this.attr("name"));if($this.prop("checked")){var i,inputNames=document.getElementsByName(inputName),inputNamesLen=inputNames.length;for(i=0;i<inputNamesLen;i++)"radio"==inputNames[i].type&&$(inputNames[i]).parent().removeClass("on").find(".chbx-txt").html(settings.offTxt);$this.parent().addClass("on").find(".chbx-txt").html(settings.onTxt)}})},
// Initialize Main Code
init:function(){""==settings.offTxt&&""==settings.onTxt||$input.parent().addClass("chbx-hastext"),plugin.addStructure()}};
// START IT ALL
plugin.init()})}}(jQuery),/* Chosen v1.6.2 | (c) 2011-2016 by Harvest | MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md */
function(){var a,AbstractChosen,Chosen,SelectParser,b,c={}.hasOwnProperty,d=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};SelectParser=function(){function SelectParser(){this.options_index=0,this.parsed=[]}return SelectParser.prototype.add_node=function(a){return"OPTGROUP"===a.nodeName.toUpperCase()?this.add_group(a):this.add_option(a)},SelectParser.prototype.add_group=function(a){var b,c,d,e,f,g;for(b=this.parsed.length,this.parsed.push({array_index:b,group:!0,label:this.escapeExpression(a.label),title:a.title?a.title:void 0,children:0,disabled:a.disabled,classes:a.className}),f=a.childNodes,g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(this.add_option(c,b,a.disabled));return g},SelectParser.prototype.add_option=function(a,b,c){return"OPTION"===a.nodeName.toUpperCase()?(""!==a.text?(null!=b&&(this.parsed[b].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:a.value,text:a.text,html:a.innerHTML,title:a.title?a.title:void 0,selected:a.selected,disabled:!0===c?c:a.disabled,group_array_index:b,group_label:null!=b?this.parsed[b].label:null,classes:a.className,style:a.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1):void 0},SelectParser.prototype.escapeExpression=function(a){var b,c;return null==a||!1===a?"":/[\&\<\>\"\'\`]/.test(a)?(b={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},c=/&(?!\w+;)|[\<\>\"\'\`]/g,a.replace(c,function(a){return b[a]||"&amp;"})):a},SelectParser}(),SelectParser.select_to_array=function(a){var b,c,d,e,f;for(c=new SelectParser,f=a.childNodes,d=0,e=f.length;e>d;d++)b=f[d],c.add_node(b);return c.parsed},AbstractChosen=function(){function AbstractChosen(a,b){this.form_field=a,this.options=null!=b?b:{},AbstractChosen.browser_is_supported()&&(this.is_multiple=this.form_field.multiple,this.set_default_text(),this.set_default_values(),this.setup(),this.set_up_html(),this.register_observers(),this.on_ready())}return AbstractChosen.prototype.set_default_values=function(){var a=this;return this.click_test_action=function(b){return a.test_active_click(b)},this.activate_action=function(b){return a.activate_field(b)},this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.allow_single_deselect=null!=this.options.allow_single_deselect&&null!=this.form_field.options[0]&&""===this.form_field.options[0].text&&this.options.allow_single_deselect,this.disable_search_threshold=this.options.disable_search_threshold||0,this.disable_search=this.options.disable_search||!1,this.enable_split_word_search=null==this.options.enable_split_word_search||this.options.enable_split_word_search,this.group_search=null==this.options.group_search||this.options.group_search,this.search_contains=this.options.search_contains||!1,this.single_backstroke_delete=null==this.options.single_backstroke_delete||this.options.single_backstroke_delete,this.max_selected_options=this.options.max_selected_options||1/0,this.inherit_select_classes=this.options.inherit_select_classes||!1,this.display_selected_options=null==this.options.display_selected_options||this.options.display_selected_options,this.display_disabled_options=null==this.options.display_disabled_options||this.options.display_disabled_options,this.include_group_label_in_selected=this.options.include_group_label_in_selected||!1,this.max_shown_results=this.options.max_shown_results||Number.POSITIVE_INFINITY,this.case_sensitive_search=this.options.case_sensitive_search||!1},AbstractChosen.prototype.set_default_text=function(){return this.form_field.getAttribute("data-placeholder")?this.default_text=this.form_field.getAttribute("data-placeholder"):this.is_multiple?this.default_text=this.options.placeholder_text_multiple||this.options.placeholder_text||AbstractChosen.default_multiple_text:this.default_text=this.options.placeholder_text_single||this.options.placeholder_text||AbstractChosen.default_single_text,this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||AbstractChosen.default_no_result_text},AbstractChosen.prototype.choice_label=function(a){return this.include_group_label_in_selected&&null!=a.group_label?"<b class='group-name'>"+a.group_label+"</b>"+a.html:a.html},AbstractChosen.prototype.mouse_enter=function(){return this.mouse_on_container=!0},AbstractChosen.prototype.mouse_leave=function(){return this.mouse_on_container=!1},AbstractChosen.prototype.input_focus=function(a){var b=this;if(this.is_multiple){if(!this.active_field)return setTimeout(function(){return b.container_mousedown()},50)}else if(!this.active_field)return this.activate_field()},AbstractChosen.prototype.input_blur=function(a){var b=this;return this.mouse_on_container?void 0:(this.active_field=!1,setTimeout(function(){return b.blur_test()},100))},AbstractChosen.prototype.results_option_build=function(a){var b,c,d,e,f,g,h;for(b="",e=0,h=this.results_data,f=0,g=h.length;g>f&&(c=h[f],d="",d=c.group?this.result_add_group(c):this.result_add_option(c),""!==d&&(e++,b+=d),(null!=a?a.first:void 0)&&(c.selected&&this.is_multiple?this.choice_build(c):c.selected&&!this.is_multiple&&this.single_set_selected_text(this.choice_label(c))),!(e>=this.max_shown_results));f++);return b},AbstractChosen.prototype.result_add_option=function(a){var b,c;return a.search_match&&this.include_option_in_results(a)?(b=[],a.disabled||a.selected&&this.is_multiple||b.push("active-result"),!a.disabled||a.selected&&this.is_multiple||b.push("disabled-result"),a.selected&&b.push("result-selected"),null!=a.group_array_index&&b.push("group-option"),""!==a.classes&&b.push(a.classes),c=document.createElement("li"),c.className=b.join(" "),c.style.cssText=a.style,c.setAttribute("data-option-array-index",a.array_index),c.innerHTML=a.search_text,a.title&&(c.title=a.title),this.outerHTML(c)):""},AbstractChosen.prototype.result_add_group=function(a){var b,c;return(a.search_match||a.group_match)&&a.active_options>0?(b=[],b.push("group-result"),a.classes&&b.push(a.classes),c=document.createElement("li"),c.className=b.join(" "),c.innerHTML=a.search_text,a.title&&(c.title=a.title),this.outerHTML(c)):""},AbstractChosen.prototype.results_update_field=function(){return this.set_default_text(),this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.results_build(),this.results_showing?this.winnow_results():void 0},AbstractChosen.prototype.reset_single_select_options=function(){var a,b,c,d,e;for(d=this.results_data,e=[],b=0,c=d.length;c>b;b++)a=d[b],a.selected?e.push(a.selected=!1):e.push(void 0);return e},AbstractChosen.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},AbstractChosen.prototype.results_search=function(a){return this.results_showing?this.winnow_results():this.results_show()},AbstractChosen.prototype.winnow_results=function(){var a,b,c,d,e,f,g,h,i,j,k,l;for(this.no_results_clear(),d=0,f=this.get_search_text(),a=f.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),i=new RegExp(a,"i"),c=this.get_search_regex(a),l=this.results_data,j=0,k=l.length;k>j;j++)b=l[j],b.search_match=!1,e=null,this.include_option_in_results(b)&&(b.group&&(b.group_match=!1,b.active_options=0),null!=b.group_array_index&&this.results_data[b.group_array_index]&&(e=this.results_data[b.group_array_index],0===e.active_options&&e.search_match&&(d+=1),e.active_options+=1),b.search_text=b.group?b.label:b.html,(!b.group||this.group_search)&&(b.search_match=this.search_string_match(b.search_text,c),b.search_match&&!b.group&&(d+=1),b.search_match?(f.length&&(g=b.search_text.search(i),h=b.search_text.substr(0,g+f.length)+"</em>"+b.search_text.substr(g+f.length),b.search_text=h.substr(0,g)+"<em>"+h.substr(g)),null!=e&&(e.group_match=!0)):null!=b.group_array_index&&this.results_data[b.group_array_index].search_match&&(b.search_match=!0)));return this.result_clear_highlight(),1>d&&f.length?(this.update_results_content(""),this.no_results(f)):(this.update_results_content(this.results_option_build()),this.winnow_results_set_highlight())},AbstractChosen.prototype.get_search_regex=function(a){var b,c;return b=this.search_contains?"":"^",c=this.case_sensitive_search?"":"i",new RegExp(b+a,c)},AbstractChosen.prototype.search_string_match=function(a,b){var c,d,e,f;if(b.test(a))return!0;if(this.enable_split_word_search&&(a.indexOf(" ")>=0||0===a.indexOf("["))&&(d=a.replace(/\[|\]/g,"").split(" "),d.length))for(e=0,f=d.length;f>e;e++)if(c=d[e],b.test(c))return!0},AbstractChosen.prototype.choices_count=function(){var a,b,c,d;if(null!=this.selected_option_count)return this.selected_option_count;for(this.selected_option_count=0,d=this.form_field.options,b=0,c=d.length;c>b;b++)a=d[b],a.selected&&(this.selected_option_count+=1);return this.selected_option_count},AbstractChosen.prototype.choices_click=function(a){return a.preventDefault(),this.results_showing||this.is_disabled?void 0:this.results_show()},AbstractChosen.prototype.keyup_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),b){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0)return this.keydown_backstroke();if(!this.pending_backstroke)return this.result_clear_highlight(),this.results_search();break;case 13:if(a.preventDefault(),this.results_showing)return this.result_select(a);break;case 27:return this.results_showing&&this.results_hide(),!0;case 9:case 38:case 40:case 16:case 91:case 17:case 18:break;default:return this.results_search()}},AbstractChosen.prototype.clipboard_event_checker=function(a){var b=this;return setTimeout(function(){return b.results_search()},50)},AbstractChosen.prototype.container_width=function(){return null!=this.options.width?this.options.width:this.form_field.offsetWidth+"px"},AbstractChosen.prototype.include_option_in_results=function(a){return!(this.is_multiple&&!this.display_selected_options&&a.selected)&&(!(!this.display_disabled_options&&a.disabled)&&!a.empty)},AbstractChosen.prototype.search_results_touchstart=function(a){return this.touch_started=!0,this.search_results_mouseover(a)},AbstractChosen.prototype.search_results_touchmove=function(a){return this.touch_started=!1,this.search_results_mouseout(a)},AbstractChosen.prototype.search_results_touchend=function(a){return this.touch_started?this.search_results_mouseup(a):void 0},AbstractChosen.prototype.outerHTML=function(a){var b;return a.outerHTML?a.outerHTML:(b=document.createElement("div"),b.appendChild(a),b.innerHTML)},AbstractChosen.browser_is_supported=function(){return"Microsoft Internet Explorer"===window.navigator.appName?document.documentMode>=8:!(/iP(od|hone)/i.test(window.navigator.userAgent)||/IEMobile/i.test(window.navigator.userAgent)||/Windows Phone/i.test(window.navigator.userAgent)||/BlackBerry/i.test(window.navigator.userAgent)||/BB10/i.test(window.navigator.userAgent)||/Android.*Mobile/i.test(window.navigator.userAgent))},AbstractChosen.default_multiple_text="Select Some Options",AbstractChosen.default_single_text="Select an Option",AbstractChosen.default_no_result_text="No results match",AbstractChosen}(),a=jQuery,a.fn.extend({chosen:function(b){return AbstractChosen.browser_is_supported()?this.each(function(c){var d,e;return d=a(this),e=d.data("chosen"),"destroy"===b?void(e instanceof Chosen&&e.destroy()):void(e instanceof Chosen||d.data("chosen",new Chosen(this,b)))}):this}}),Chosen=function(c){function Chosen(){return b=Chosen.__super__.constructor.apply(this,arguments)}return d(Chosen,c),Chosen.prototype.setup=function(){return this.form_field_jq=a(this.form_field),this.current_selectedIndex=this.form_field.selectedIndex,this.is_rtl=this.form_field_jq.hasClass("chosen-rtl")},Chosen.prototype.set_up_html=function(){var b,c;return b=["chosen-container"],b.push("chosen-container-"+(this.is_multiple?"multi":"single")),this.inherit_select_classes&&this.form_field.className&&b.push(this.form_field.className),this.is_rtl&&b.push("chosen-rtl"),c={class:b.join(" "),style:"width: "+this.container_width()+";",title:this.form_field.title},this.form_field.id.length&&(c.id=this.form_field.id.replace(/[^\w]/g,"_")+"_chosen"),this.container=a("<div />",c),this.is_multiple?this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="'+this.default_text+'" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>'):this.container.html('<a class="chosen-single chosen-default"><span>'+this.default_text+'</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'),this.form_field_jq.hide().after(this.container),this.dropdown=this.container.find("div.chosen-drop").first(),this.search_field=this.container.find("input").first(),this.search_results=this.container.find("ul.chosen-results").first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results").first(),this.is_multiple?(this.search_choices=this.container.find("ul.chosen-choices").first(),this.search_container=this.container.find("li.search-field").first()):(this.search_container=this.container.find("div.chosen-search").first(),this.selected_item=this.container.find(".chosen-single").first()),this.results_build(),this.set_tab_index(),this.set_label_behavior()},Chosen.prototype.on_ready=function(){return this.form_field_jq.trigger("chosen:ready",{chosen:this})},Chosen.prototype.register_observers=function(){var a=this;return this.container.bind("touchstart.chosen",function(b){return a.container_mousedown(b),b.preventDefault()}),this.container.bind("touchend.chosen",function(b){return a.container_mouseup(b),b.preventDefault()}),this.container.bind("mousedown.chosen",function(b){a.container_mousedown(b)}),this.container.bind("mouseup.chosen",function(b){a.container_mouseup(b)}),this.container.bind("mouseenter.chosen",function(b){a.mouse_enter(b)}),this.container.bind("mouseleave.chosen",function(b){a.mouse_leave(b)}),this.search_results.bind("mouseup.chosen",function(b){a.search_results_mouseup(b)}),this.search_results.bind("mouseover.chosen",function(b){a.search_results_mouseover(b)}),this.search_results.bind("mouseout.chosen",function(b){a.search_results_mouseout(b)}),this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen",function(b){a.search_results_mousewheel(b)}),this.search_results.bind("touchstart.chosen",function(b){a.search_results_touchstart(b)}),this.search_results.bind("touchmove.chosen",function(b){a.search_results_touchmove(b)}),this.search_results.bind("touchend.chosen",function(b){a.search_results_touchend(b)}),this.form_field_jq.bind("chosen:updated.chosen",function(b){a.results_update_field(b)}),this.form_field_jq.bind("chosen:activate.chosen",function(b){a.activate_field(b)}),this.form_field_jq.bind("chosen:open.chosen",function(b){a.container_mousedown(b)}),this.form_field_jq.bind("chosen:close.chosen",function(b){a.input_blur(b)}),this.search_field.bind("blur.chosen",function(b){a.input_blur(b)}),this.search_field.bind("keyup.chosen",function(b){a.keyup_checker(b)}),this.search_field.bind("keydown.chosen",function(b){a.keydown_checker(b)}),this.search_field.bind("focus.chosen",function(b){a.input_focus(b)}),this.search_field.bind("cut.chosen",function(b){a.clipboard_event_checker(b)}),this.search_field.bind("paste.chosen",function(b){a.clipboard_event_checker(b)}),this.is_multiple?this.search_choices.bind("click.chosen",function(b){a.choices_click(b)}):this.container.bind("click.chosen",function(a){a.preventDefault()})},Chosen.prototype.destroy=function(){return a(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action),this.search_field[0].tabIndex&&(this.form_field_jq[0].tabIndex=this.search_field[0].tabIndex),this.container.remove(),this.form_field_jq.removeData("chosen"),this.form_field_jq.show()},Chosen.prototype.search_field_disabled=function(){return this.is_disabled=this.form_field_jq[0].disabled,this.is_disabled?(this.container.addClass("chosen-disabled"),this.search_field[0].disabled=!0,this.is_multiple||this.selected_item.unbind("focus.chosen",this.activate_action),this.close_field()):(this.container.removeClass("chosen-disabled"),this.search_field[0].disabled=!1,this.is_multiple?void 0:this.selected_item.bind("focus.chosen",this.activate_action))},Chosen.prototype.container_mousedown=function(b){return this.is_disabled||(b&&"mousedown"===b.type&&!this.results_showing&&b.preventDefault(),null!=b&&a(b.target).hasClass("search-choice-close"))?void 0:(this.active_field?this.is_multiple||!b||a(b.target)[0]!==this.selected_item[0]&&!a(b.target).parents("a.chosen-single").length||(b.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(""),a(this.container[0].ownerDocument).bind("click.chosen",this.click_test_action),this.results_show()),this.activate_field())},Chosen.prototype.container_mouseup=function(a){return"ABBR"!==a.target.nodeName||this.is_disabled?void 0:this.results_reset(a)},Chosen.prototype.search_results_mousewheel=function(a){var b;return a.originalEvent&&(b=a.originalEvent.deltaY||-a.originalEvent.wheelDelta||a.originalEvent.detail),null!=b?(a.preventDefault(),"DOMMouseScroll"===a.type&&(b*=40),this.search_results.scrollTop(b+this.search_results.scrollTop())):void 0},Chosen.prototype.blur_test=function(a){return!this.active_field&&this.container.hasClass("chosen-container-active")?this.close_field():void 0},Chosen.prototype.close_field=function(){return a(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action),this.active_field=!1,this.results_hide(),this.container.removeClass("chosen-container-active"),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale()},Chosen.prototype.activate_field=function(){return this.container.addClass("chosen-container-active"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus()},Chosen.prototype.test_active_click=function(b){var c;return c=a(b.target).closest(".chosen-container"),c.length&&this.container[0]===c[0]?this.active_field=!0:this.close_field()},Chosen.prototype.results_build=function(){return this.parsing=!0,this.selected_option_count=null,this.results_data=SelectParser.select_to_array(this.form_field),this.is_multiple?this.search_choices.find("li.search-choice").remove():this.is_multiple||(this.single_set_selected_text(),this.disable_search||this.form_field.options.length<=this.disable_search_threshold?(this.search_field[0].readOnly=!0,this.container.addClass("chosen-container-single-nosearch")):(this.search_field[0].readOnly=!1,this.container.removeClass("chosen-container-single-nosearch"))),this.update_results_content(this.results_option_build({first:!0})),this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.parsing=!1},Chosen.prototype.result_do_highlight=function(a){var b,c,d,e,f;if(a.length){if(this.result_clear_highlight(),this.result_highlight=a,this.result_highlight.addClass("highlighted"),d=parseInt(this.search_results.css("maxHeight"),10),f=this.search_results.scrollTop(),e=d+f,c=this.result_highlight.position().top+this.search_results.scrollTop(),(b=c+this.result_highlight.outerHeight())>=e)return this.search_results.scrollTop(b-d>0?b-d:0);if(f>c)return this.search_results.scrollTop(c)}},Chosen.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass("highlighted"),this.result_highlight=null},Chosen.prototype.results_show=function(){return this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.container.addClass("chosen-with-drop"),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.search_field.val()),this.winnow_results(),this.form_field_jq.trigger("chosen:showing_dropdown",{chosen:this}))},Chosen.prototype.update_results_content=function(a){return this.search_results.html(a)},Chosen.prototype.results_hide=function(){return this.results_showing&&(this.result_clear_highlight(),this.container.removeClass("chosen-with-drop"),this.form_field_jq.trigger("chosen:hiding_dropdown",{chosen:this})),this.results_showing=!1},Chosen.prototype.set_tab_index=function(a){var b;return this.form_field.tabIndex?(b=this.form_field.tabIndex,this.form_field.tabIndex=-1,this.search_field[0].tabIndex=b):void 0},Chosen.prototype.set_label_behavior=function(){var b=this;return this.form_field_label=this.form_field_jq.parents("label"),!this.form_field_label.length&&this.form_field.id.length&&(this.form_field_label=a("label[for='"+this.form_field.id+"']")),this.form_field_label.length>0?this.form_field_label.bind("click.chosen",function(a){return b.is_multiple?b.container_mousedown(a):b.activate_field()}):void 0},Chosen.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices_count()<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass("default")):(this.search_field.val(""),this.search_field.removeClass("default"))},Chosen.prototype.search_results_mouseup=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c.length?(this.result_highlight=c,this.result_select(b),this.search_field.focus()):void 0},Chosen.prototype.search_results_mouseover=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c?this.result_do_highlight(c):void 0},Chosen.prototype.search_results_mouseout=function(b){return a(b.target).hasClass("active-result")?this.result_clear_highlight():void 0},Chosen.prototype.choice_build=function(b){var c,d,e=this;return c=a("<li />",{class:"search-choice"}).html("<span>"+this.choice_label(b)+"</span>"),b.disabled?c.addClass("search-choice-disabled"):(d=a("<a />",{class:"search-choice-close","data-option-array-index":b.array_index}),d.bind("click.chosen",function(a){return e.choice_destroy_link_click(a)}),c.append(d)),this.search_container.before(c)},Chosen.prototype.choice_destroy_link_click=function(b){return b.preventDefault(),b.stopPropagation(),this.is_disabled?void 0:this.choice_destroy(a(b.target))},Chosen.prototype.choice_destroy=function(a){return this.result_deselect(a[0].getAttribute("data-option-array-index"))?(this.show_search_field_default(),this.is_multiple&&this.choices_count()>0&&this.search_field.val().length<1&&this.results_hide(),a.parents("li").first().remove(),this.search_field_scale()):void 0},Chosen.prototype.results_reset=function(){return this.reset_single_select_options(),this.form_field.options[0].selected=!0,this.single_set_selected_text(),this.show_search_field_default(),this.results_reset_cleanup(),this.form_field_jq.trigger("change"),this.active_field?this.results_hide():void 0},Chosen.prototype.results_reset_cleanup=function(){return this.current_selectedIndex=this.form_field.selectedIndex,this.selected_item.find("abbr").remove()},Chosen.prototype.result_select=function(a){var b,c;return this.result_highlight?(b=this.result_highlight,this.result_clear_highlight(),this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.is_multiple?b.removeClass("active-result"):this.reset_single_select_options(),b.addClass("result-selected"),c=this.results_data[b[0].getAttribute("data-option-array-index")],c.selected=!0,this.form_field.options[c.options_index].selected=!0,this.selected_option_count=null,this.is_multiple?this.choice_build(c):this.single_set_selected_text(this.choice_label(c)),(a.metaKey||a.ctrlKey)&&this.is_multiple||this.results_hide(),this.show_search_field_default(),(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex)&&this.form_field_jq.trigger("change",{selected:this.form_field.options[c.options_index].value}),this.current_selectedIndex=this.form_field.selectedIndex,a.preventDefault(),this.search_field_scale())):void 0},Chosen.prototype.single_set_selected_text=function(a){return null==a&&(a=this.default_text),a===this.default_text?this.selected_item.addClass("chosen-default"):(this.single_deselect_control_build(),this.selected_item.removeClass("chosen-default")),this.selected_item.find("span").html(a)},Chosen.prototype.result_deselect=function(a){var b;return b=this.results_data[a],!this.form_field.options[b.options_index].disabled&&(b.selected=!1,this.form_field.options[b.options_index].selected=!1,this.selected_option_count=null,this.result_clear_highlight(),this.results_showing&&this.winnow_results(),this.form_field_jq.trigger("change",{deselected:this.form_field.options[b.options_index].value}),this.search_field_scale(),!0)},Chosen.prototype.single_deselect_control_build=function(){return this.allow_single_deselect?(this.selected_item.find("abbr").length||this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'),this.selected_item.addClass("chosen-single-with-deselect")):void 0},Chosen.prototype.get_search_text=function(){return a("<div/>").text(a.trim(this.search_field.val())).html()},Chosen.prototype.winnow_results_set_highlight=function(){var a,b;return b=this.is_multiple?[]:this.search_results.find(".result-selected.active-result"),a=b.length?b.first():this.search_results.find(".active-result").first(),null!=a?this.result_do_highlight(a):void 0},Chosen.prototype.no_results=function(b){var c;return c=a('<li class="no-results">'+this.results_none_found+' "<span></span>"</li>'),c.find("span").first().html(b),this.search_results.append(c),this.form_field_jq.trigger("chosen:no_results",{chosen:this})},Chosen.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()},Chosen.prototype.keydown_arrow=function(){var a;return this.results_showing&&this.result_highlight?(a=this.result_highlight.nextAll("li.active-result").first())?this.result_do_highlight(a):void 0:this.results_show()},Chosen.prototype.keyup_arrow=function(){var a;return this.results_showing||this.is_multiple?this.result_highlight?(a=this.result_highlight.prevAll("li.active-result"),a.length?this.result_do_highlight(a.first()):(this.choices_count()>0&&this.results_hide(),this.result_clear_highlight())):void 0:this.results_show()},Chosen.prototype.keydown_backstroke=function(){var a;return this.pending_backstroke?(this.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke()):(a=this.search_container.siblings("li.search-choice").last(),a.length&&!a.hasClass("search-choice-disabled")?(this.pending_backstroke=a,this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus")):void 0)},Chosen.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus"),this.pending_backstroke=null},Chosen.prototype.keydown_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),8!==b&&this.pending_backstroke&&this.clear_backstroke(),b){case 8:this.backstroke_length=this.search_field.val().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(a),this.mouse_on_container=!1;break;case 13:this.results_showing&&a.preventDefault();break;case 32:this.disable_search&&a.preventDefault();break;case 38:a.preventDefault(),this.keyup_arrow();break;case 40:a.preventDefault(),this.keydown_arrow()}},Chosen.prototype.search_field_scale=function(){var b,c,e,f,g,h,i,j;if(this.is_multiple){for(0,h=0,f="position:absolute; left: -1000px; top: -1000px; display:none;",g=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"],i=0,j=g.length;j>i;i++)e=g[i],f+=e+":"+this.search_field.css(e)+";";return b=a("<div />",{style:f}),b.text(this.search_field.val()),a("body").append(b),h=b.width()+25,b.remove(),c=this.container.outerWidth(),h>c-10&&(h=c-10),this.search_field.css({width:h+"px"})}},Chosen}(AbstractChosen)}.call(this),/*
	* fileInput v0.1
	* Dual licensed under the MIT and GPL licenses:
	* http://www.opensource.org/licenses/mit-license.php
	* http://www.gnu.org/licenses/gpl.html
**/
function($){$.fn.fileInput=function(options){return this.each(function(){
// Variables
var $wrap,$fileRemove,$filenameTxt,$fileInput,$input=$(this),isIE="Microsoft Internet Explorer"==window.navigator.appName,defaults={btnTxt:$input.attr("data-fi-btn")||"Select File",txtPlaceholder:$input.attr("data-fi-txtph")||""},settings=$.extend({},defaults,options),plugin={
// Add Structure
addStructure:function(){$input.after(function(){return'<div class="fileinput-wrap"><div class="fileinput-btn"><div class="fileinput-btnblock"><span class="fileinput-btntxt">'+settings.btnTxt+'</span></div></div><div class="fileinput-remove">&nbsp; &times &nbsp;</div><div class="fileinput-txtfield"><span class="fileinput-filename"><span class="fi-icon"></span>&nbsp;<span class="fi-txt">'+settings.txtPlaceholder+"</span></span></div></div>"}),$input.appendTo($input.next().find(".fileinput-btnblock")),
// Calls
plugin.elementVars()},
// Setup Vars for new elements
elementVars:function(){$wrap=$input.closest(".fileinput-wrap"),$fileRemove=$wrap.find(".fileinput-remove"),$filenameTxt=$wrap.find(".fi-txt"),$fileInput=$wrap.find(".fileinput"),
// Calls
plugin.addFileName(),plugin.removeFiles()},
// Remove Files
removeFiles:function(){$fileRemove.on("click",function(){var $this=$(this);
//ie8+ doesn't support changing the value of input with type=file so clone instead
if($filenameTxt.html(settings.txtPlaceholder),isIE){var inputClone=$fileInput.clone(!0);$fileInput.after(inputClone),$fileInput.remove(),$fileInput=inputClone}else $fileInput.val("");$this.css({display:"none"})})},
// Add File Name
addFileName:function(){$input.on("change",function(){var $this=$(this),uploadedFile=$this.val().replace(/^.+\\/,"");$filenameTxt.html(uploadedFile),""!==$this.val()&&$fileRemove.css({display:"table-cell"})})},
// Initialize Main Code
init:function(){plugin.addStructure()}};
// START IT ALL
plugin.init()})}}(jQuery),/*!
	* Label Hint v1.4
*/
function($){$.fn.labelHint=function(options){var $fieldWrap=$(this),theInput=$fieldWrap.find("input"),theTextarea=$fieldWrap.find("textarea"),theSelect=$fieldWrap.find("select"),changeState=function(){var label=$(this).closest($fieldWrap).find("label");""!==this.value?label.addClass("show"):label.removeClass("show")};
// Setup "checkval" Event (same events to trigger on input/text area, different set of events for select drop-downs).
theInput.add(theTextarea).bind("checkval",changeState),theSelect.bind("checkval",changeState),
// Input/Textarea Triggers
theInput.add(theTextarea).on("keyup",function(){$(this).trigger("checkval")}).on("focus",function(){$(this).closest($fieldWrap).find("label").addClass("on")}).on("blur",function(){$(this).closest($fieldWrap).find("label").removeClass("on")}).trigger("checkval"),
// Check State on value change
theInput.add(theTextarea).on("change",changeState),
// Select Triggers
theSelect.on("change",changeState).trigger("checkval")}}(jQuery),function(window,document,$){function args(elem){var newAttrs={},rinlinejQuery=/^jQuery\d+$/;return $.each(elem.attributes,function(i,attr){attr.specified&&!rinlinejQuery.test(attr.name)&&(newAttrs[attr.name]=attr.value)}),newAttrs}function clearPlaceholder(event,value){var input=this,$input=$(input);if(input.value==$input.attr("placeholder")&&$input.hasClass("placeholder"))if($input.data("placeholder-password")){if($input=$input.hide().next().show().attr("id",$input.removeAttr("id").data("placeholder-id")),!0===event)return $input[0].value=value;$input.focus()}else input.value="",$input.removeClass("placeholder"),input==safeActiveElement()&&input.select()}function setPlaceholder(){var $replacement,input=this,$input=$(input),id=this.id;if(""==input.value){if("password"==input.type){if(!$input.data("placeholder-textinput")){try{$replacement=$input.clone().attr({type:"text"})}catch(e){$replacement=$("<input>").attr($.extend(args(this),{type:"text"}))}$replacement.removeAttr("name").data({"placeholder-password":$input,"placeholder-id":id}).bind("focus.placeholder",clearPlaceholder),$input.data({"placeholder-textinput":$replacement,"placeholder-id":id}).before($replacement)}$input=$input.removeAttr("id").hide().prev().attr("id",id).show()}$input.addClass("placeholder"),$input[0].value=$input.attr("placeholder")}else $input.removeClass("placeholder")}function safeActiveElement(){try{return document.activeElement}catch(err){}}var hooks,placeholder,isInputSupported="placeholder"in document.createElement("input"),isTextareaSupported="placeholder"in document.createElement("textarea"),prototype=$.fn,valHooks=$.valHooks,propHooks=$.propHooks;isInputSupported&&isTextareaSupported?(placeholder=prototype.placeholder=function(){return this},placeholder.input=placeholder.textarea=!0):(placeholder=prototype.placeholder=function(){var $this=this;return $this.filter((isInputSupported?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":clearPlaceholder,"blur.placeholder":setPlaceholder}).data("placeholder-enabled",!0).trigger("blur.placeholder"),$this},placeholder.input=isInputSupported,placeholder.textarea=isTextareaSupported,hooks={get:function(element){var $element=$(element),$passwordInput=$element.data("placeholder-password");return $passwordInput?$passwordInput[0].value:$element.data("placeholder-enabled")&&$element.hasClass("placeholder")?"":element.value},set:function(element,value){var $element=$(element),$passwordInput=$element.data("placeholder-password");return $passwordInput?$passwordInput[0].value=value:$element.data("placeholder-enabled")?(""==value?(element.value=value,element!=safeActiveElement()&&setPlaceholder.call(element)):$element.hasClass("placeholder")?clearPlaceholder.call(element,!0,value)||(element.value=value):element.value=value,$element):element.value=value}},isInputSupported||(valHooks.input=hooks,propHooks.value=hooks),isTextareaSupported||(valHooks.textarea=hooks,propHooks.value=hooks),$(function(){$(document).delegate("form","submit.placeholder",function(){var $inputs=$(".placeholder",this).each(clearPlaceholder);setTimeout(function(){$inputs.each(setPlaceholder)},10)})}),$(window).bind("beforeunload.placeholder",function(){$(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery),/*
	* Acordion
	* Copyright (c) 2015 Andrew Erie
	* Dual licensed under the MIT and GPL licenses:
	* http://www.opensource.org/licenses/mit-license.php
	* http://www.gnu.org/licenses/gpl.html
*/
function($){$.fn.accordion=function(options){return this.each(function(){var target=this;({init:function(){$(target).find(".accordion-toggle").click(function(){$(this).next().slideToggle("slow",function(){$("html, body").animate({scrollTop:$(this).offset().top-250},500)}),$(this).find(".accordion-icon").hasClass("active")?$(this).find(".accordion-icon").removeClass("active"):($(target).find(".accordion-icon").removeClass("active"),$(this).find(".accordion-icon").addClass("active")),$(".accordion-content").not($(this).next()).slideUp("slow")})}}).init()})}}(jQuery),// Accordion & Complex Accordion 
$(".accordion").accordion(),/*!
	* Custom Checkbox v0.1
	* Dual licensed under the MIT and GPL licenses:
	* http://www.opensource.org/licenses/mit-license.php
	* http://www.gnu.org/licenses/gpl.html
**/
function($){$.fn.customChbx=function(options){return this.each(function(){
// Variables
var $input=$(this),inputType=$input.attr("type"),defaults={offTxt:$input.attr("data-chbx-offtxt")||"",onTxt:$input.attr("data-chbx-ontxt")||""},settings=$.extend({},defaults,options),plugin={
// Add Structure
addStructure:function(){$input.after(function(){return'<div class="chbx-wrap"><div class="chbx-btn"><span class="chbx-icon"></span><span class="chbx-txt">'+settings.offTxt+"</span></div></div>"}),$input.appendTo($input.next()),
// Calls
plugin.startingState(),"checkbox"==inputType?plugin.chbxChangeState():"radio"==inputType?plugin.radioChangeState():alert("Please use chbx.js for checkboxes and radio buttons only.")},
// Starting State
startingState:function(){$input.prop("checked")&&$input.parent().addClass("on").find(".chbx-txt").html(settings.onTxt)},
// Checkbox Change State
chbxChangeState:function(){$input.on("change",function(){var $this=$(this);$this.prop("checked")?// if checked already
$this.parent().addClass("on").find(".chbx-txt").html(settings.onTxt):// if not checked
$this.parent().removeClass("on").find(".chbx-txt").html(settings.offTxt)})},
// Radio Change State
radioChangeState:function(){$input.on("change",function(){var $this=$(this),inputName=($this.parent(),$this.attr("name"));if($this.prop("checked")){var i,inputNames=document.getElementsByName(inputName),inputNamesLen=inputNames.length;for(i=0;i<inputNamesLen;i++)"radio"==inputNames[i].type&&$(inputNames[i]).parent().removeClass("on").find(".chbx-txt").html(settings.offTxt);$this.parent().addClass("on").find(".chbx-txt").html(settings.onTxt)}})},
// Initialize Main Code
init:function(){""==settings.offTxt&&""==settings.onTxt||$input.parent().addClass("chbx-hastext"),plugin.addStructure()}};
// START IT ALL
plugin.init()})}}(jQuery),$(function(){}),/* Chosen v1.6.2 | (c) 2011-2016 by Harvest | MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md */
function(){var a,AbstractChosen,Chosen,SelectParser,b,c={}.hasOwnProperty,d=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};SelectParser=function(){function SelectParser(){this.options_index=0,this.parsed=[]}return SelectParser.prototype.add_node=function(a){return"OPTGROUP"===a.nodeName.toUpperCase()?this.add_group(a):this.add_option(a)},SelectParser.prototype.add_group=function(a){var b,c,d,e,f,g;for(b=this.parsed.length,this.parsed.push({array_index:b,group:!0,label:this.escapeExpression(a.label),title:a.title?a.title:void 0,children:0,disabled:a.disabled,classes:a.className}),f=a.childNodes,g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(this.add_option(c,b,a.disabled));return g},SelectParser.prototype.add_option=function(a,b,c){return"OPTION"===a.nodeName.toUpperCase()?(""!==a.text?(null!=b&&(this.parsed[b].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:a.value,text:a.text,html:a.innerHTML,title:a.title?a.title:void 0,selected:a.selected,disabled:!0===c?c:a.disabled,group_array_index:b,group_label:null!=b?this.parsed[b].label:null,classes:a.className,style:a.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1):void 0},SelectParser.prototype.escapeExpression=function(a){var b,c;return null==a||!1===a?"":/[\&\<\>\"\'\`]/.test(a)?(b={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},c=/&(?!\w+;)|[\<\>\"\'\`]/g,a.replace(c,function(a){return b[a]||"&amp;"})):a},SelectParser}(),SelectParser.select_to_array=function(a){var b,c,d,e,f;for(c=new SelectParser,f=a.childNodes,d=0,e=f.length;e>d;d++)b=f[d],c.add_node(b);return c.parsed},AbstractChosen=function(){function AbstractChosen(a,b){this.form_field=a,this.options=null!=b?b:{},AbstractChosen.browser_is_supported()&&(this.is_multiple=this.form_field.multiple,this.set_default_text(),this.set_default_values(),this.setup(),this.set_up_html(),this.register_observers(),this.on_ready())}return AbstractChosen.prototype.set_default_values=function(){var a=this;return this.click_test_action=function(b){return a.test_active_click(b)},this.activate_action=function(b){return a.activate_field(b)},this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.allow_single_deselect=null!=this.options.allow_single_deselect&&null!=this.form_field.options[0]&&""===this.form_field.options[0].text&&this.options.allow_single_deselect,this.disable_search_threshold=this.options.disable_search_threshold||0,this.disable_search=this.options.disable_search||!1,this.enable_split_word_search=null==this.options.enable_split_word_search||this.options.enable_split_word_search,this.group_search=null==this.options.group_search||this.options.group_search,this.search_contains=this.options.search_contains||!1,this.single_backstroke_delete=null==this.options.single_backstroke_delete||this.options.single_backstroke_delete,this.max_selected_options=this.options.max_selected_options||1/0,this.inherit_select_classes=this.options.inherit_select_classes||!1,this.display_selected_options=null==this.options.display_selected_options||this.options.display_selected_options,this.display_disabled_options=null==this.options.display_disabled_options||this.options.display_disabled_options,this.include_group_label_in_selected=this.options.include_group_label_in_selected||!1,this.max_shown_results=this.options.max_shown_results||Number.POSITIVE_INFINITY,this.case_sensitive_search=this.options.case_sensitive_search||!1},AbstractChosen.prototype.set_default_text=function(){return this.form_field.getAttribute("data-placeholder")?this.default_text=this.form_field.getAttribute("data-placeholder"):this.is_multiple?this.default_text=this.options.placeholder_text_multiple||this.options.placeholder_text||AbstractChosen.default_multiple_text:this.default_text=this.options.placeholder_text_single||this.options.placeholder_text||AbstractChosen.default_single_text,this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||AbstractChosen.default_no_result_text},AbstractChosen.prototype.choice_label=function(a){return this.include_group_label_in_selected&&null!=a.group_label?"<b class='group-name'>"+a.group_label+"</b>"+a.html:a.html},AbstractChosen.prototype.mouse_enter=function(){return this.mouse_on_container=!0},AbstractChosen.prototype.mouse_leave=function(){return this.mouse_on_container=!1},AbstractChosen.prototype.input_focus=function(a){var b=this;if(this.is_multiple){if(!this.active_field)return setTimeout(function(){return b.container_mousedown()},50)}else if(!this.active_field)return this.activate_field()},AbstractChosen.prototype.input_blur=function(a){var b=this;return this.mouse_on_container?void 0:(this.active_field=!1,setTimeout(function(){return b.blur_test()},100))},AbstractChosen.prototype.results_option_build=function(a){var b,c,d,e,f,g,h;for(b="",e=0,h=this.results_data,f=0,g=h.length;g>f&&(c=h[f],d="",d=c.group?this.result_add_group(c):this.result_add_option(c),""!==d&&(e++,b+=d),(null!=a?a.first:void 0)&&(c.selected&&this.is_multiple?this.choice_build(c):c.selected&&!this.is_multiple&&this.single_set_selected_text(this.choice_label(c))),!(e>=this.max_shown_results));f++);return b},AbstractChosen.prototype.result_add_option=function(a){var b,c;return a.search_match&&this.include_option_in_results(a)?(b=[],a.disabled||a.selected&&this.is_multiple||b.push("active-result"),!a.disabled||a.selected&&this.is_multiple||b.push("disabled-result"),a.selected&&b.push("result-selected"),null!=a.group_array_index&&b.push("group-option"),""!==a.classes&&b.push(a.classes),c=document.createElement("li"),c.className=b.join(" "),c.style.cssText=a.style,c.setAttribute("data-option-array-index",a.array_index),c.innerHTML=a.search_text,a.title&&(c.title=a.title),this.outerHTML(c)):""},AbstractChosen.prototype.result_add_group=function(a){var b,c;return(a.search_match||a.group_match)&&a.active_options>0?(b=[],b.push("group-result"),a.classes&&b.push(a.classes),c=document.createElement("li"),c.className=b.join(" "),c.innerHTML=a.search_text,a.title&&(c.title=a.title),this.outerHTML(c)):""},AbstractChosen.prototype.results_update_field=function(){return this.set_default_text(),this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.results_build(),this.results_showing?this.winnow_results():void 0},AbstractChosen.prototype.reset_single_select_options=function(){var a,b,c,d,e;for(d=this.results_data,e=[],b=0,c=d.length;c>b;b++)a=d[b],a.selected?e.push(a.selected=!1):e.push(void 0);return e},AbstractChosen.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},AbstractChosen.prototype.results_search=function(a){return this.results_showing?this.winnow_results():this.results_show()},AbstractChosen.prototype.winnow_results=function(){var a,b,c,d,e,f,g,h,i,j,k,l;for(this.no_results_clear(),d=0,f=this.get_search_text(),a=f.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),i=new RegExp(a,"i"),c=this.get_search_regex(a),l=this.results_data,j=0,k=l.length;k>j;j++)b=l[j],b.search_match=!1,e=null,this.include_option_in_results(b)&&(b.group&&(b.group_match=!1,b.active_options=0),null!=b.group_array_index&&this.results_data[b.group_array_index]&&(e=this.results_data[b.group_array_index],0===e.active_options&&e.search_match&&(d+=1),e.active_options+=1),b.search_text=b.group?b.label:b.html,(!b.group||this.group_search)&&(b.search_match=this.search_string_match(b.search_text,c),b.search_match&&!b.group&&(d+=1),b.search_match?(f.length&&(g=b.search_text.search(i),h=b.search_text.substr(0,g+f.length)+"</em>"+b.search_text.substr(g+f.length),b.search_text=h.substr(0,g)+"<em>"+h.substr(g)),null!=e&&(e.group_match=!0)):null!=b.group_array_index&&this.results_data[b.group_array_index].search_match&&(b.search_match=!0)));return this.result_clear_highlight(),1>d&&f.length?(this.update_results_content(""),this.no_results(f)):(this.update_results_content(this.results_option_build()),this.winnow_results_set_highlight())},AbstractChosen.prototype.get_search_regex=function(a){var b,c;return b=this.search_contains?"":"^",c=this.case_sensitive_search?"":"i",new RegExp(b+a,c)},AbstractChosen.prototype.search_string_match=function(a,b){var c,d,e,f;if(b.test(a))return!0;if(this.enable_split_word_search&&(a.indexOf(" ")>=0||0===a.indexOf("["))&&(d=a.replace(/\[|\]/g,"").split(" "),d.length))for(e=0,f=d.length;f>e;e++)if(c=d[e],b.test(c))return!0},AbstractChosen.prototype.choices_count=function(){var a,b,c,d;if(null!=this.selected_option_count)return this.selected_option_count;for(this.selected_option_count=0,d=this.form_field.options,b=0,c=d.length;c>b;b++)a=d[b],a.selected&&(this.selected_option_count+=1);return this.selected_option_count},AbstractChosen.prototype.choices_click=function(a){return a.preventDefault(),this.results_showing||this.is_disabled?void 0:this.results_show()},AbstractChosen.prototype.keyup_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),b){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0)return this.keydown_backstroke();if(!this.pending_backstroke)return this.result_clear_highlight(),this.results_search();break;case 13:if(a.preventDefault(),this.results_showing)return this.result_select(a);break;case 27:return this.results_showing&&this.results_hide(),!0;case 9:case 38:case 40:case 16:case 91:case 17:case 18:break;default:return this.results_search()}},AbstractChosen.prototype.clipboard_event_checker=function(a){var b=this;return setTimeout(function(){return b.results_search()},50)},AbstractChosen.prototype.container_width=function(){return null!=this.options.width?this.options.width:this.form_field.offsetWidth+"px"},AbstractChosen.prototype.include_option_in_results=function(a){return!(this.is_multiple&&!this.display_selected_options&&a.selected)&&(!(!this.display_disabled_options&&a.disabled)&&!a.empty)},AbstractChosen.prototype.search_results_touchstart=function(a){return this.touch_started=!0,this.search_results_mouseover(a)},AbstractChosen.prototype.search_results_touchmove=function(a){return this.touch_started=!1,this.search_results_mouseout(a)},AbstractChosen.prototype.search_results_touchend=function(a){return this.touch_started?this.search_results_mouseup(a):void 0},AbstractChosen.prototype.outerHTML=function(a){var b;return a.outerHTML?a.outerHTML:(b=document.createElement("div"),b.appendChild(a),b.innerHTML)},AbstractChosen.browser_is_supported=function(){return"Microsoft Internet Explorer"===window.navigator.appName?document.documentMode>=8:!(/iP(od|hone)/i.test(window.navigator.userAgent)||/IEMobile/i.test(window.navigator.userAgent)||/Windows Phone/i.test(window.navigator.userAgent)||/BlackBerry/i.test(window.navigator.userAgent)||/BB10/i.test(window.navigator.userAgent)||/Android.*Mobile/i.test(window.navigator.userAgent))},AbstractChosen.default_multiple_text="Select Some Options",AbstractChosen.default_single_text="Select an Option",AbstractChosen.default_no_result_text="No results match",AbstractChosen}(),a=jQuery,a.fn.extend({chosen:function(b){return AbstractChosen.browser_is_supported()?this.each(function(c){var d,e;return d=a(this),e=d.data("chosen"),"destroy"===b?void(e instanceof Chosen&&e.destroy()):void(e instanceof Chosen||d.data("chosen",new Chosen(this,b)))}):this}}),Chosen=function(c){function Chosen(){return b=Chosen.__super__.constructor.apply(this,arguments)}return d(Chosen,c),Chosen.prototype.setup=function(){return this.form_field_jq=a(this.form_field),this.current_selectedIndex=this.form_field.selectedIndex,this.is_rtl=this.form_field_jq.hasClass("chosen-rtl")},Chosen.prototype.set_up_html=function(){var b,c;return b=["chosen-container"],b.push("chosen-container-"+(this.is_multiple?"multi":"single")),this.inherit_select_classes&&this.form_field.className&&b.push(this.form_field.className),this.is_rtl&&b.push("chosen-rtl"),c={class:b.join(" "),style:"width: "+this.container_width()+";",title:this.form_field.title},this.form_field.id.length&&(c.id=this.form_field.id.replace(/[^\w]/g,"_")+"_chosen"),this.container=a("<div />",c),this.is_multiple?this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="'+this.default_text+'" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>'):this.container.html('<a class="chosen-single chosen-default"><span>'+this.default_text+'</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'),this.form_field_jq.hide().after(this.container),this.dropdown=this.container.find("div.chosen-drop").first(),this.search_field=this.container.find("input").first(),this.search_results=this.container.find("ul.chosen-results").first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results").first(),this.is_multiple?(this.search_choices=this.container.find("ul.chosen-choices").first(),this.search_container=this.container.find("li.search-field").first()):(this.search_container=this.container.find("div.chosen-search").first(),this.selected_item=this.container.find(".chosen-single").first()),this.results_build(),this.set_tab_index(),this.set_label_behavior()},Chosen.prototype.on_ready=function(){return this.form_field_jq.trigger("chosen:ready",{chosen:this})},Chosen.prototype.register_observers=function(){var a=this;return this.container.bind("touchstart.chosen",function(b){return a.container_mousedown(b),b.preventDefault()}),this.container.bind("touchend.chosen",function(b){return a.container_mouseup(b),b.preventDefault()}),this.container.bind("mousedown.chosen",function(b){a.container_mousedown(b)}),this.container.bind("mouseup.chosen",function(b){a.container_mouseup(b)}),this.container.bind("mouseenter.chosen",function(b){a.mouse_enter(b)}),this.container.bind("mouseleave.chosen",function(b){a.mouse_leave(b)}),this.search_results.bind("mouseup.chosen",function(b){a.search_results_mouseup(b)}),this.search_results.bind("mouseover.chosen",function(b){a.search_results_mouseover(b)}),this.search_results.bind("mouseout.chosen",function(b){a.search_results_mouseout(b)}),this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen",function(b){a.search_results_mousewheel(b)}),this.search_results.bind("touchstart.chosen",function(b){a.search_results_touchstart(b)}),this.search_results.bind("touchmove.chosen",function(b){a.search_results_touchmove(b)}),this.search_results.bind("touchend.chosen",function(b){a.search_results_touchend(b)}),this.form_field_jq.bind("chosen:updated.chosen",function(b){a.results_update_field(b)}),this.form_field_jq.bind("chosen:activate.chosen",function(b){a.activate_field(b)}),this.form_field_jq.bind("chosen:open.chosen",function(b){a.container_mousedown(b)}),this.form_field_jq.bind("chosen:close.chosen",function(b){a.input_blur(b)}),this.search_field.bind("blur.chosen",function(b){a.input_blur(b)}),this.search_field.bind("keyup.chosen",function(b){a.keyup_checker(b)}),this.search_field.bind("keydown.chosen",function(b){a.keydown_checker(b)}),this.search_field.bind("focus.chosen",function(b){a.input_focus(b)}),this.search_field.bind("cut.chosen",function(b){a.clipboard_event_checker(b)}),this.search_field.bind("paste.chosen",function(b){a.clipboard_event_checker(b)}),this.is_multiple?this.search_choices.bind("click.chosen",function(b){a.choices_click(b)}):this.container.bind("click.chosen",function(a){a.preventDefault()})},Chosen.prototype.destroy=function(){return a(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action),this.search_field[0].tabIndex&&(this.form_field_jq[0].tabIndex=this.search_field[0].tabIndex),this.container.remove(),this.form_field_jq.removeData("chosen"),this.form_field_jq.show()},Chosen.prototype.search_field_disabled=function(){return this.is_disabled=this.form_field_jq[0].disabled,this.is_disabled?(this.container.addClass("chosen-disabled"),this.search_field[0].disabled=!0,this.is_multiple||this.selected_item.unbind("focus.chosen",this.activate_action),this.close_field()):(this.container.removeClass("chosen-disabled"),this.search_field[0].disabled=!1,this.is_multiple?void 0:this.selected_item.bind("focus.chosen",this.activate_action))},Chosen.prototype.container_mousedown=function(b){return this.is_disabled||(b&&"mousedown"===b.type&&!this.results_showing&&b.preventDefault(),null!=b&&a(b.target).hasClass("search-choice-close"))?void 0:(this.active_field?this.is_multiple||!b||a(b.target)[0]!==this.selected_item[0]&&!a(b.target).parents("a.chosen-single").length||(b.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(""),a(this.container[0].ownerDocument).bind("click.chosen",this.click_test_action),this.results_show()),this.activate_field())},Chosen.prototype.container_mouseup=function(a){return"ABBR"!==a.target.nodeName||this.is_disabled?void 0:this.results_reset(a)},Chosen.prototype.search_results_mousewheel=function(a){var b;return a.originalEvent&&(b=a.originalEvent.deltaY||-a.originalEvent.wheelDelta||a.originalEvent.detail),null!=b?(a.preventDefault(),"DOMMouseScroll"===a.type&&(b*=40),this.search_results.scrollTop(b+this.search_results.scrollTop())):void 0},Chosen.prototype.blur_test=function(a){return!this.active_field&&this.container.hasClass("chosen-container-active")?this.close_field():void 0},Chosen.prototype.close_field=function(){return a(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action),this.active_field=!1,this.results_hide(),this.container.removeClass("chosen-container-active"),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale()},Chosen.prototype.activate_field=function(){return this.container.addClass("chosen-container-active"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus()},Chosen.prototype.test_active_click=function(b){var c;return c=a(b.target).closest(".chosen-container"),c.length&&this.container[0]===c[0]?this.active_field=!0:this.close_field()},Chosen.prototype.results_build=function(){return this.parsing=!0,this.selected_option_count=null,this.results_data=SelectParser.select_to_array(this.form_field),this.is_multiple?this.search_choices.find("li.search-choice").remove():this.is_multiple||(this.single_set_selected_text(),this.disable_search||this.form_field.options.length<=this.disable_search_threshold?(this.search_field[0].readOnly=!0,this.container.addClass("chosen-container-single-nosearch")):(this.search_field[0].readOnly=!1,this.container.removeClass("chosen-container-single-nosearch"))),this.update_results_content(this.results_option_build({first:!0})),this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.parsing=!1},Chosen.prototype.result_do_highlight=function(a){var b,c,d,e,f;if(a.length){if(this.result_clear_highlight(),this.result_highlight=a,this.result_highlight.addClass("highlighted"),d=parseInt(this.search_results.css("maxHeight"),10),f=this.search_results.scrollTop(),e=d+f,c=this.result_highlight.position().top+this.search_results.scrollTop(),(b=c+this.result_highlight.outerHeight())>=e)return this.search_results.scrollTop(b-d>0?b-d:0);if(f>c)return this.search_results.scrollTop(c)}},Chosen.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass("highlighted"),this.result_highlight=null},Chosen.prototype.results_show=function(){return this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.container.addClass("chosen-with-drop"),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.search_field.val()),this.winnow_results(),this.form_field_jq.trigger("chosen:showing_dropdown",{chosen:this}))},Chosen.prototype.update_results_content=function(a){return this.search_results.html(a)},Chosen.prototype.results_hide=function(){return this.results_showing&&(this.result_clear_highlight(),this.container.removeClass("chosen-with-drop"),this.form_field_jq.trigger("chosen:hiding_dropdown",{chosen:this})),this.results_showing=!1},Chosen.prototype.set_tab_index=function(a){var b;return this.form_field.tabIndex?(b=this.form_field.tabIndex,this.form_field.tabIndex=-1,this.search_field[0].tabIndex=b):void 0},Chosen.prototype.set_label_behavior=function(){var b=this;return this.form_field_label=this.form_field_jq.parents("label"),!this.form_field_label.length&&this.form_field.id.length&&(this.form_field_label=a("label[for='"+this.form_field.id+"']")),this.form_field_label.length>0?this.form_field_label.bind("click.chosen",function(a){return b.is_multiple?b.container_mousedown(a):b.activate_field()}):void 0},Chosen.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices_count()<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass("default")):(this.search_field.val(""),this.search_field.removeClass("default"))},Chosen.prototype.search_results_mouseup=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c.length?(this.result_highlight=c,this.result_select(b),this.search_field.focus()):void 0},Chosen.prototype.search_results_mouseover=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c?this.result_do_highlight(c):void 0},Chosen.prototype.search_results_mouseout=function(b){return a(b.target).hasClass("active-result")?this.result_clear_highlight():void 0},Chosen.prototype.choice_build=function(b){var c,d,e=this;return c=a("<li />",{class:"search-choice"}).html("<span>"+this.choice_label(b)+"</span>"),b.disabled?c.addClass("search-choice-disabled"):(d=a("<a />",{class:"search-choice-close","data-option-array-index":b.array_index}),d.bind("click.chosen",function(a){return e.choice_destroy_link_click(a)}),c.append(d)),this.search_container.before(c)},Chosen.prototype.choice_destroy_link_click=function(b){return b.preventDefault(),b.stopPropagation(),this.is_disabled?void 0:this.choice_destroy(a(b.target))},Chosen.prototype.choice_destroy=function(a){return this.result_deselect(a[0].getAttribute("data-option-array-index"))?(this.show_search_field_default(),this.is_multiple&&this.choices_count()>0&&this.search_field.val().length<1&&this.results_hide(),a.parents("li").first().remove(),this.search_field_scale()):void 0},Chosen.prototype.results_reset=function(){return this.reset_single_select_options(),this.form_field.options[0].selected=!0,this.single_set_selected_text(),this.show_search_field_default(),this.results_reset_cleanup(),this.form_field_jq.trigger("change"),this.active_field?this.results_hide():void 0},Chosen.prototype.results_reset_cleanup=function(){return this.current_selectedIndex=this.form_field.selectedIndex,this.selected_item.find("abbr").remove()},Chosen.prototype.result_select=function(a){var b,c;return this.result_highlight?(b=this.result_highlight,this.result_clear_highlight(),this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.is_multiple?b.removeClass("active-result"):this.reset_single_select_options(),b.addClass("result-selected"),c=this.results_data[b[0].getAttribute("data-option-array-index")],c.selected=!0,this.form_field.options[c.options_index].selected=!0,this.selected_option_count=null,this.is_multiple?this.choice_build(c):this.single_set_selected_text(this.choice_label(c)),(a.metaKey||a.ctrlKey)&&this.is_multiple||this.results_hide(),this.show_search_field_default(),(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex)&&this.form_field_jq.trigger("change",{selected:this.form_field.options[c.options_index].value}),this.current_selectedIndex=this.form_field.selectedIndex,a.preventDefault(),this.search_field_scale())):void 0},Chosen.prototype.single_set_selected_text=function(a){return null==a&&(a=this.default_text),a===this.default_text?this.selected_item.addClass("chosen-default"):(this.single_deselect_control_build(),this.selected_item.removeClass("chosen-default")),this.selected_item.find("span").html(a)},Chosen.prototype.result_deselect=function(a){var b;return b=this.results_data[a],!this.form_field.options[b.options_index].disabled&&(b.selected=!1,this.form_field.options[b.options_index].selected=!1,this.selected_option_count=null,this.result_clear_highlight(),this.results_showing&&this.winnow_results(),this.form_field_jq.trigger("change",{deselected:this.form_field.options[b.options_index].value}),this.search_field_scale(),!0)},Chosen.prototype.single_deselect_control_build=function(){return this.allow_single_deselect?(this.selected_item.find("abbr").length||this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'),this.selected_item.addClass("chosen-single-with-deselect")):void 0},Chosen.prototype.get_search_text=function(){return a("<div/>").text(a.trim(this.search_field.val())).html()},Chosen.prototype.winnow_results_set_highlight=function(){var a,b;return b=this.is_multiple?[]:this.search_results.find(".result-selected.active-result"),a=b.length?b.first():this.search_results.find(".active-result").first(),null!=a?this.result_do_highlight(a):void 0},Chosen.prototype.no_results=function(b){var c;return c=a('<li class="no-results">'+this.results_none_found+' "<span></span>"</li>'),c.find("span").first().html(b),this.search_results.append(c),this.form_field_jq.trigger("chosen:no_results",{chosen:this})},Chosen.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()},Chosen.prototype.keydown_arrow=function(){var a;return this.results_showing&&this.result_highlight?(a=this.result_highlight.nextAll("li.active-result").first())?this.result_do_highlight(a):void 0:this.results_show()},Chosen.prototype.keyup_arrow=function(){var a;return this.results_showing||this.is_multiple?this.result_highlight?(a=this.result_highlight.prevAll("li.active-result"),a.length?this.result_do_highlight(a.first()):(this.choices_count()>0&&this.results_hide(),this.result_clear_highlight())):void 0:this.results_show()},Chosen.prototype.keydown_backstroke=function(){var a;return this.pending_backstroke?(this.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke()):(a=this.search_container.siblings("li.search-choice").last(),a.length&&!a.hasClass("search-choice-disabled")?(this.pending_backstroke=a,this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus")):void 0)},Chosen.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus"),this.pending_backstroke=null},Chosen.prototype.keydown_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),8!==b&&this.pending_backstroke&&this.clear_backstroke(),b){case 8:this.backstroke_length=this.search_field.val().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(a),this.mouse_on_container=!1;break;case 13:this.results_showing&&a.preventDefault();break;case 32:this.disable_search&&a.preventDefault();break;case 38:a.preventDefault(),this.keyup_arrow();break;case 40:a.preventDefault(),this.keydown_arrow()}},Chosen.prototype.search_field_scale=function(){var b,c,e,f,g,h,i,j;if(this.is_multiple){for(0,h=0,f="position:absolute; left: -1000px; top: -1000px; display:none;",g=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"],i=0,j=g.length;j>i;i++)e=g[i],f+=e+":"+this.search_field.css(e)+";";return b=a("<div />",{style:f}),b.text(this.search_field.val()),a("body").append(b),h=b.width()+25,b.remove(),c=this.container.outerWidth(),h>c-10&&(h=c-10),this.search_field.css({width:h+"px"})}},Chosen}(AbstractChosen)}.call(this),$(function(){}),/*!
	Colorbox 1.6.4
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
function(t,e,i){function n(i,n,o){var r=e.createElement(i);return n&&(r.id=Z+n),o&&(r.style.cssText=o),t(r)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=t(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=W.length,i=(A+t)%e;return 0>i?e+i:i}function a(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():o())/100:1)*parseInt(t,10))}function s(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in y[0]&&!y[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),y.focus())}function c(t){c.str!==t&&(y.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(e){A=0,e&&!1!==e&&"nofollow"!==e?(W=t("."+te).filter(function(){return new r(this,t.data(this,Y)).get("rel")===e}),-1===(A=W.index(_.el))&&(W=W.add(_.el),A=W.length-1)):W=t(_.el)}function u(i){t(e).trigger(i),ae.triggerHandler(i)}function f(i){var o;if(!G){if(o=t(i).data(Y),_=new r(i,o),g(_.get("rel")),!$){$=q=!0,c(_.get("className")),y.css({visibility:"hidden",display:"block",opacity:""}),I=n(se,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(I),j=T.height()+k.height()+b.outerHeight(!0)-b.height(),D=C.width()+H.width()+b.outerWidth(!0)-b.width(),N=I.outerHeight(!0),z=I.outerWidth(!0);var h=a(_.get("initialWidth"),"x"),s=a(_.get("initialHeight"),"y"),l=_.get("maxWidth"),f=_.get("maxHeight");_.w=(!1!==l?Math.min(h,a(l,"x")):h)-z-D,_.h=(!1!==f?Math.min(s,a(f,"y")):s)-N-j,I.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(S).hide(),y.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),ae.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&ae.one(re,function(){t(_.el).focus()})}var p=parseFloat(_.get("opacity"));v.css({opacity:p===p?p:"",cursor:_.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w()}}function p(){y||(V=!1,E=t(i),y=n(se).attr({id:Y,class:!1===t.support.opacity?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(se,"Overlay").hide(),M=t([n(se,"LoadingOverlay")[0],n(se,"LoadingGraphic")[0]]),x=n(se,"Wrapper"),b=n(se,"Content").append(S=n(se,"Title"),F=n(se,"Current"),P=t('<button type="button" aria-label="Previous Slide Button"/>').attr({id:Z+"Previous"}),K=t('<button type="button" aria-label="Next Slide Button/>').attr({id:Z+"Next"}),R=n("button","Slideshow"),M),B=t('<button type="button" aria-label="Close Slideshow Button"/>').attr({id:Z+"Close"}),x.append(n(se).append(n(se,"TopLeft"),T=n(se,"TopCenter"),n(se,"TopRight")),n(se,!1,"clear:left").append(C=n(se,"MiddleLeft"),b,H=n(se,"MiddleRight")),n(se,!1,"clear:left").append(n(se,"BottomLeft"),k=n(se,"BottomCenter"),n(se,"BottomRight"))).find("div div").css({float:"left"}),L=n(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(F).add(R)),e.body&&!y.parent().length&&t(e.body).append(v,y.append(x,L))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return!!y&&(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;$&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),$&&_.get("arrowKey")&&W[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0)}function w(){var e,o,r,h=J.prep,d=++le;if(q=!0,U=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?a(_.get("height"),"y")-N-j:_.get("innerHeight")&&a(_.get("innerHeight"),"y"),_.w=_.get("width")?a(_.get("width"),"x")-z-D:_.get("innerWidth")&&a(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=a(_.get("maxWidth"),"x")-z-D,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=a(_.get("maxHeight"),"y")-N-j,_.mh=_.h&&_.h<_.mh?_.h:_.mh),e=_.get("href"),Q=setTimeout(function(){M.show()},100),_.get("inline")){var c=t(e);r=t("<div>").hide().insertBefore(c),ae.one(he,function(){r.replaceWith(c)}),h(c)}else _.get("iframe")?h(" "):_.get("html")?h(_.get("html")):s(_,e)?(e=l(_,e),U=_.get("createImg"),t(U).addClass(Z+"Photo").bind("error",function(){h(n(se,"Error").html(_.get("imgError")))}).one("load",function(){d===le&&setTimeout(function(){var t;_.get("retinaImage")&&i.devicePixelRatio>1&&(U.height=U.height/i.devicePixelRatio,U.width=U.width/i.devicePixelRatio),_.get("scalePhotos")&&(o=function(){U.height-=U.height*t,U.width-=U.width*t},_.mw&&U.width>_.mw&&(t=(U.width-_.mw)/U.width,o()),_.mh&&U.height>_.mh&&(t=(U.height-_.mh)/U.height,o())),_.h&&(U.style.marginTop=Math.max(_.mh-U.height,0)/2+"px"),W[1]&&(_.get("loop")||W[A+1])&&(U.style.cursor="pointer",U.onclick=function(){J.next()}),U.style.width=U.width+"px",U.style.height=U.height+"px",h(U)},1)}),U.src=e):e&&L.load(e,_.get("data"),function(e,i){d===le&&h("error"===i?n(se,"Error").html(_.get("xhrError")):t(this).contents())})}var v,y,x,b,T,C,H,k,W,E,I,L,M,S,F,R,K,P,B,O,_,j,D,N,z,A,U,$,q,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title},createImg:function(){var e=new Image,i=t(this).data("cbox-img-attrs");return"object"==typeof i&&t.each(i,function(t,i){e[t]=i}),e},createIframe:function(){var i=e.createElement("iframe"),n=t(this).data("cbox-iframe-attrs");return"object"==typeof n&&t.each(n,function(t,e){i[t]=e}),"frameBorder"in i&&(i.frameBorder=0),"allowTransparency"in i&&(i.allowTransparency="true"),i.name=(new Date).getTime(),i.allowFullScreen=!0,i}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",ae=t("<a/>"),se="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||W[A+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){R.html(_.get("slideshowStop")).unbind(s).one(s,n),ae.bind(ne,e).bind(ie,t),y.removeClass(a+"off").addClass(a+"on")}function n(){t(),ae.unbind(ne,e).unbind(ie,t),R.html(_.get("slideshowStart")).unbind(s).one(s,function(){J.next(),i()}),y.removeClass(a+"on").addClass(a+"off")}function o(){r=!1,R.hide(),t(),ae.unbind(ne,e).unbind(ie,t),y.removeClass(a+"off "+a+"on")}var r,h,a=Z+"Slideshow_",s="click."+Z;return function(){r?_.get("slideshow")||(ae.unbind(oe,o),o()):_.get("slideshow")&&W[1]&&(r=!0,ae.one(oe,o),_.get("slideshowAuto")?i():n(),R.show())}}();t[Y]||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var n,o=this;return e=e||{},t.isFunction(o)&&(o=t("<a/>"),e.open=!0),o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),n=new r(o[0],e),n.get("open")&&f(o[0])),o):o},J.position=function(e,i){function n(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(y[0].style.width,10)-D+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(y[0].style.height,10)-j+"px"}var r,h,s,l=0,d=0,c=y.offset();if(E.unbind("resize."+Z),y.css({top:-9e4,left:-9e4}),h=E.scrollTop(),s=E.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=s,y.css({position:"fixed"})):(l=h,d=s,y.css({position:"absolute"})),d+=!1!==_.get("right")?Math.max(E.width()-_.w-z-D-a(_.get("right"),"x"),0):!1!==_.get("left")?a(_.get("left"),"x"):Math.round(Math.max(E.width()-_.w-z-D,0)/2),l+=!1!==_.get("bottom")?Math.max(o()-_.h-N-j-a(_.get("bottom"),"y"),0):!1!==_.get("top")?a(_.get("top"),"y"):Math.round(Math.max(o()-_.h-N-j,0)/2),y.css({top:c.top,left:c.left,visibility:"visible"}),x[0].style.width=x[0].style.height="9999px",r={width:_.w+z+D,height:_.h+N+j,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?void(g=e):void 0}),e=g}de=r,e||y.css(r),y.dequeue().animate(r,{duration:e||0,complete:function(){n(),q=!1,x[0].style.width=_.w+z+D+"px",x[0].style.height=_.h+N+j+"px",_.get("reposition")&&setTimeout(function(){E.bind("resize."+Z,J.position)},1),t.isFunction(i)&&i()},step:n})},J.resize=function(t){var e;$&&(t=t||{},t.width&&(_.w=a(t.width,"x")-z-D),t.innerWidth&&(_.w=a(t.innerWidth,"x")),I.css({width:_.w}),t.height&&(_.h=a(t.height,"y")-N-j),t.innerHeight&&(_.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=I.scrollTop(),I.css({height:"auto"}),_.h=I.height()),I.css({height:_.h}),e&&I.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){if($){var d,g="none"===_.get("transition")?0:_.get("speed");I.remove(),I=n(se,"LoadedContent").append(i),I.hide().appendTo(L.show()).css({width:function(){return _.w=_.w||I.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:function(){return _.h=_.h||I.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}()}).prependTo(b),L.hide(),t(U).css({float:"none"}),c(_.get("className")),d=function(){function i(){!1===t.support.opacity&&y[0].style.removeAttribute("filter")}var n,o,a=W.length;$&&(o=function(){clearTimeout(Q),M.hide(),u(ne),_.get("onComplete")},S.html(_.get("title")).show(),I.show(),a>1?("string"==typeof _.get("current")&&F.html(_.get("current").replace("{current}",A+1).replace("{total}",a)).show(),K[_.get("loop")||a-1>A?"show":"hide"]().html(_.get("next")),P[_.get("loop")||A?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,n=W[this],o=new r(n,t.data(n,Y)),h=o.get("href");h&&s(o,h)&&(h=l(o,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(n=_.get("createIframe"),_.get("scrolling")||(n.scrolling="no"),t(n).attr({src:_.get("href"),class:Z+"Iframe"}).one("load",o).appendTo(I),ae.one(he,function(){n.src="//about:blank"}),_.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===_.get("transition")?y.fadeTo(g,1,i):i())},"fade"===_.get("transition")?y.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!q&&W[1]&&(_.get("loop")||W[A+1])&&(A=h(1),f(W[A]))},J.prev=function(){!q&&W[1]&&(_.get("loop")||A)&&(A=h(-1),f(W[A]))},J.close=function(){$&&!G&&(G=!0,$=!1,u(oe),_.get("onCleanup"),E.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),y.stop().fadeTo(_.get("fadeOut")||0,0,function(){y.hide(),v.hide(),u(he),I.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){y&&(y.stop(),t[Y].close(),y.stop(!1,!0).remove(),v.remove(),G=!1,y=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z).unbind("keydown."+Z))},J.element=function(){return t(_.el)},J.settings=X)}(jQuery,document,window),//Init - Colorbox
$(".cbox_group1").colorbox({rel:"cbox_group1",maxWidth:"95%",maxHeight:"95%"}),$(".cbox").colorbox({maxWidth:"95%",maxHeight:"95%"}),/*!
	* contentLoader v0.1
	* Dual licensed under the MIT and GPL licenses:
	* http://www.opensource.org/licenses/mit-license.php
	* http://www.gnu.org/licenses/gpl.html
**/
function($){$.fn.contentLoader=function(options){
// allows for chaining
return this.each(function(){
// Variables
var $wrap=$(this),$clItems=$wrap.find("#cl-items"),defaults={callback:function(){}},settings=$.extend({},defaults,options),plugin={};
// Start
plugin.init=function(){plugin.selector(),plugin.buttons()},
// Preload Images
plugin.preloadImages=function(arr,callback){function checkLoaded(){++numLoaded==len&&callback(imagesArray)}
// Loop through given Images
for(var arr="object"!=typeof arr?[arr]:arr,imagesArray=[],len=arr.length,numLoaded=0,i=0;i<len;i++)imagesArray[i]=new Image,imagesArray[i].onload=function(){checkLoaded()},imagesArray[i].onerror=function(){checkLoaded()},imagesArray[i].src=arr[i],
// Add Class
$(imagesArray[i]).addClass("loaded")},
// Content Loader
plugin.loader=function(newGallery){$.ajax({dataType:"html",url:newGallery,success:function(data){var $data=$(data),imgSrcs=[],$newGallery=$data.find("#cl-items"),grabbedHtml=$newGallery.html();$newGallery.find("img").each(function(){imgSrcs.push(this.src)}),
// Preload
imgSrcs.length>0?plugin.preloadImages(imgSrcs,function(a){
// append content
$clItems.html(grabbedHtml),$wrap.removeClass("loading"),settings.callback()}):($clItems.html(grabbedHtml),$wrap.removeClass("loading"),settings.callback())},error:function(){$("#cl-items").prepend("<div class='entry-content'><p><em>Nothing was retrieved. Please select another Gallery.</em></p></div>"),$wrap.removeClass("loading")}})},
// Content Buttons
plugin.buttons=function(){
// Load Gallery via Ajax
$(".gallery-nav a").on("click",function(e){e.preventDefault(),$wrap.addClass("loading"),
// Load Content via Ajax
plugin.loader($(this).attr("href"))})},
// Content Selector
plugin.selector=function(){
// Load Gallery via Ajax
$(".gallery-nav").on("change",function(){$wrap.addClass("loading"),
// Load Content via Ajax
plugin.loader($(this).val())})},
// START IT ALL
plugin.init()})}}(jQuery),$(function(){
// Init - Content Loader
// dynamicGallery();
$(".cl-area").contentLoader({callback:function(){console.log("Change!")}})});/*!
	* Cookie Pop Up v0.1
	* Author: Doug Cross for AYC Media
	* Dual licensed under the MIT and GPL licenses:
	* http://www.opensource.org/licenses/mit-license.php
	* http://www.gnu.org/licenses/gpl.html
**/
var cookieHelper=function(){var checkCookie=function(key,value){return readCookie(key)===value},writeCookie=function(key,value,days){var expires=null;days?(expires=new Date,expires.setTime(expires.getTime()+24*days*60*60*1e3)):expires="Thu, 01 Jan 1970 00:00:01 GMT",document.cookie=key+"="+value+"; expires="+expires+"; path=/;"},readCookie=function(key){for(var keyAndEquals=key+"=",cookieArray=document.cookie.split(";"),i=0;i<cookieArray.length;i++){for(var cookie=cookieArray[i];" "==cookie.charAt(0);)cookie=cookie.substring(1,cookie.length);if(0===cookie.indexOf(keyAndEquals))return cookie.substring(keyAndEquals.length,cookie.length)}return null};return{checkCookie:checkCookie,writeCookie:writeCookie,readCookie:readCookie,eraseCookie:function(key){writeCookie(key,"on",!1)}}}(),modalHelper=function(){for(var closeBtns=document.querySelectorAll(".modal .close"),i=0;i<closeBtns.length;i++)closeBtns[i].addEventListener("click",function(e){e.preventDefault;for(var el=this;(el=el.parentElement)&&!el.classList.contains("modal"););return toggleModal(el,"hide"),!1},!1);var toggleModal=function(modal,state){"show"===state?modal.classList.remove("hidden"):"hide"===state&&modal.classList.add("hidden")};return{toggleModal:toggleModal}}();!function(){var modalEl=document.getElementById("signup-modal");modalEl&&(cookieHelper.checkCookie("warning","off")?modalHelper.toggleModal(modalEl,"hide"):modalHelper.toggleModal(modalEl,"show"),document.getElementById("nothanks").addEventListener("click",function(){cookieHelper.writeCookie("warning","off",60)},!1),document.getElementById("subscribe").addEventListener("click",function(){alert("redirect to Signup page")},!1))}(),/*!
	* dpdwn v0.2
	* - General Dropdown
	* Dual licensed under the MIT and GPL licenses:
	* http://www.opensource.org/licenses/mit-license.php
	* http://www.gnu.org/licenses/gpl.html
**/
function($){$.fn.dpdwn=function(options){
// allows for chaining
return this.each(function(){
// Variables
var $wrap=$(this),$btn=$wrap.find(".dpdwn-btn"),$list=$wrap.find(".dpdwn-list"),$listLinks=$list.find("a"),dpdwnTitle=$wrap.attr("data-title"),$dpdwnTitle=$(dpdwnTitle),defaults={optionName:"value"},plugin=($.extend({},defaults,options),{
// Dropdown Toggle
dpdwnToggle:function(){$btn.on("click",function(e){$wrap.hasClass("active")?$list.slideUp("fast"):$list.slideDown("fast"),$wrap.toggleClass("active"),e.stopPropagation()})},
// Link Clicked
linkClicked:function(){$listLinks.on("click",function(){var $this=$(this),newTitle=$this.attr("data-title");$listLinks.removeClass("current"),$this.addClass("current"),""==$dpdwnTitle&&void 0==$dpdwnTitle||$dpdwnTitle.html(newTitle),// change dropdown title
$wrap.removeClass("active"),$list.slideUp("fast")})},
// Escape Toggle
escapeToggle:function(){$(document).on("click",function(e){$wrap.removeClass("active"),$list.slideUp("fast")})},
// Start it All
init:function(){plugin.dpdwnToggle(),plugin.escapeToggle(),plugin.linkClicked()}});
// START IT ALL
plugin.init()})}}(jQuery),$(function(){
// Init - Dropdown
$(".dpdwn").dpdwn()}),/*
	* fileInput v0.1
	* Dual licensed under the MIT and GPL licenses:
	* http://www.opensource.org/licenses/mit-license.php
	* http://www.gnu.org/licenses/gpl.html
**/
function($){$.fn.fileInput=function(options){return this.each(function(){
// Variables
var $wrap,$fileRemove,$filenameTxt,$fileInput,$input=$(this),isIE="Microsoft Internet Explorer"==window.navigator.appName,defaults={btnTxt:$input.attr("data-fi-btn")||"Select File",txtPlaceholder:$input.attr("data-fi-txtph")||""},settings=$.extend({},defaults,options),plugin={
// Add Structure
addStructure:function(){$input.after(function(){return'<div class="fileinput-wrap"><div class="fileinput-btn"><div class="fileinput-btnblock"><span class="fileinput-btntxt">'+settings.btnTxt+'</span></div></div><div class="fileinput-remove">&nbsp; &times &nbsp;</div><div class="fileinput-txtfield"><span class="fileinput-filename"><span class="fi-icon"></span>&nbsp;<span class="fi-txt">'+settings.txtPlaceholder+"</span></span></div></div>"}),$input.appendTo($input.next().find(".fileinput-btnblock")),
// Calls
plugin.elementVars()},
// Setup Vars for new elements
elementVars:function(){$wrap=$input.closest(".fileinput-wrap"),$fileRemove=$wrap.find(".fileinput-remove"),$filenameTxt=$wrap.find(".fi-txt"),$fileInput=$wrap.find(".fileinput"),
// Calls
plugin.addFileName(),plugin.removeFiles()},
// Remove Files
removeFiles:function(){$fileRemove.on("click",function(){var $this=$(this);
//ie8+ doesn't support changing the value of input with type=file so clone instead
if($filenameTxt.html(settings.txtPlaceholder),isIE){var inputClone=$fileInput.clone(!0);$fileInput.after(inputClone),$fileInput.remove(),$fileInput=inputClone}else $fileInput.val("");$this.css({display:"none"})})},
// Add File Name
addFileName:function(){$input.on("change",function(){var $this=$(this),uploadedFile=$this.val().replace(/^.+\\/,"");$filenameTxt.html(uploadedFile),""!==$this.val()&&$fileRemove.css({display:"table-cell"})})},
// Initialize Main Code
init:function(){plugin.addStructure()}};
// START IT ALL
plugin.init()})}}(jQuery),$(function(){}),function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return sd.apply(null,arguments)}function c(a){return a instanceof Array||"[object Array]"===Object.prototype.toString.call(a)}function d(a){return null!=a&&"[object Object]"===Object.prototype.toString.call(a)}function e(a){var b;for(b in a)return!1;return!0}function f(a){return void 0===a}function g(a){return"number"==typeof a||"[object Number]"===Object.prototype.toString.call(a)}function h(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function i(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function j(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function k(a,b){for(var c in b)j(b,c)&&(a[c]=b[c]);return j(b,"toString")&&(a.toString=b.toString),j(b,"valueOf")&&(a.valueOf=b.valueOf),a}function l(a,b,c,d){return sb(a,b,c,d,!0).utc()}function m(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function n(a){return null==a._pf&&(a._pf=m()),a._pf}function o(a){if(null==a._isValid){var b=n(a),c=ud.call(b.parsedDateParts,function(a){return null!=a}),d=!isNaN(a._d.getTime())&&b.overflow<0&&!b.empty&&!b.invalidMonth&&!b.invalidWeekday&&!b.nullInput&&!b.invalidFormat&&!b.userInvalidated&&(!b.meridiem||b.meridiem&&c);if(a._strict&&(d=d&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour),null!=Object.isFrozen&&Object.isFrozen(a))return d;a._isValid=d}return a._isValid}function p(a){var b=l(NaN);return null!=a?k(n(b),a):n(b).userInvalidated=!0,b}function q(a,b){var c,d,e;if(f(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),f(b._i)||(a._i=b._i),f(b._f)||(a._f=b._f),f(b._l)||(a._l=b._l),f(b._strict)||(a._strict=b._strict),f(b._tzm)||(a._tzm=b._tzm),f(b._isUTC)||(a._isUTC=b._isUTC),f(b._offset)||(a._offset=b._offset),f(b._pf)||(a._pf=n(b)),f(b._locale)||(a._locale=b._locale),vd.length>0)for(c=0;c<vd.length;c++)d=vd[c],e=b[d],f(e)||(a[d]=e);return a}function r(b){q(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===wd&&(wd=!0,a.updateOffset(this),wd=!1)}function s(a){return a instanceof r||null!=a&&null!=a._isAMomentObject}function t(a){return a<0?Math.ceil(a)||0:Math.floor(a)}function u(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=t(b)),c}function v(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;d<e;d++)(c&&a[d]!==b[d]||!c&&u(a[d])!==u(b[d]))&&g++;return g+f}function w(b){!1===a.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function x(b,c){var d=!0;return k(function(){if(null!=a.deprecationHandler&&a.deprecationHandler(null,b),d){for(var e,f=[],g=0;g<arguments.length;g++){if(e="","object"==typeof arguments[g]){e+="\n["+g+"] ";for(var h in arguments[0])e+=h+": "+arguments[0][h]+", ";e=e.slice(0,-2)}else e=arguments[g];f.push(e)}w(b+"\nArguments: "+Array.prototype.slice.call(f).join("")+"\n"+(new Error).stack),d=!1}return c.apply(this,arguments)},c)}function y(b,c){null!=a.deprecationHandler&&a.deprecationHandler(b,c),xd[b]||(w(c),xd[b]=!0)}function z(a){return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)}function A(a){var b,c;for(c in a)b=a[c],z(b)?this[c]=b:this["_"+c]=b;this._config=a,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function B(a,b){var c,e=k({},a);for(c in b)j(b,c)&&(d(a[c])&&d(b[c])?(e[c]={},k(e[c],a[c]),k(e[c],b[c])):null!=b[c]?e[c]=b[c]:delete e[c]);for(c in a)j(a,c)&&!j(b,c)&&d(a[c])&&(e[c]=k({},e[c]));return e}function C(a){null!=a&&this.set(a)}function D(a,b,c){var d=this._calendar[a]||this._calendar.sameElse;return z(d)?d.call(b,c):d}function E(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function F(){return this._invalidDate}function G(a){return this._ordinal.replace("%d",a)}function H(a,b,c,d){var e=this._relativeTime[c];return z(e)?e(a,b,c,d):e.replace(/%d/i,a)}function I(a,b){var c=this._relativeTime[a>0?"future":"past"];return z(c)?c(b):c.replace(/%s/i,b)}function J(a,b){var c=a.toLowerCase();Hd[c]=Hd[c+"s"]=Hd[b]=a}function K(a){return"string"==typeof a?Hd[a]||Hd[a.toLowerCase()]:void 0}function L(a){var b,c,d={};for(c in a)j(a,c)&&(b=K(c))&&(d[b]=a[c]);return d}function M(a,b){Id[a]=b}function N(a){var b=[];for(var c in a)b.push({unit:c,priority:Id[c]});return b.sort(function(a,b){return a.priority-b.priority}),b}function O(b,c){return function(d){return null!=d?(Q(this,b,d),a.updateOffset(this,c),this):P(this,b)}}function P(a,b){return a.isValid()?a._d["get"+(a._isUTC?"UTC":"")+b]():NaN}function Q(a,b,c){a.isValid()&&a._d["set"+(a._isUTC?"UTC":"")+b](c)}function R(a){return a=K(a),z(this[a])?this[a]():this}function S(a,b){if("object"==typeof a){a=L(a);for(var c=N(a),d=0;d<c.length;d++)this[c[d].unit](a[c[d].unit])}else if(a=K(a),z(this[a]))return this[a](b);return this}function T(a,b,c){var d=""+Math.abs(a),e=b-d.length;return(a>=0?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}function U(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Md[a]=e),b&&(Md[b[0]]=function(){return T(e.apply(this,arguments),b[1],b[2])}),c&&(Md[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function V(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function W(a){var b,c,d=a.match(Jd);for(b=0,c=d.length;b<c;b++)Md[d[b]]?d[b]=Md[d[b]]:d[b]=V(d[b]);return function(b){var e,f="";for(e=0;e<c;e++)f+=z(d[e])?d[e].call(b,a):d[e];return f}}function X(a,b){return a.isValid()?(b=Y(b,a.localeData()),Ld[b]=Ld[b]||W(b),Ld[b](a)):a.localeData().invalidDate()}function Y(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Kd.lastIndex=0;d>=0&&Kd.test(a);)a=a.replace(Kd,c),Kd.lastIndex=0,d-=1;return a}function Z(a,b,c){ce[a]=z(b)?b:function(a,d){return a&&c?c:b}}function $(a,b){return j(ce,a)?ce[a](b._strict,b._locale):new RegExp(_(a))}function _(a){return aa(a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}))}function aa(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function ba(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),g(b)&&(d=function(a,c){c[b]=u(a)}),c=0;c<a.length;c++)de[a[c]]=d}function ca(a,b){ba(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function da(a,b,c){null!=b&&j(de,a)&&de[a](b,c._a,c,a)}function ea(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function fa(a,b){return a?c(this._months)?this._months[a.month()]:this._months[(this._months.isFormat||oe).test(b)?"format":"standalone"][a.month()]:c(this._months)?this._months:this._months.standalone}function ga(a,b){return a?c(this._monthsShort)?this._monthsShort[a.month()]:this._monthsShort[oe.test(b)?"format":"standalone"][a.month()]:c(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function ha(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],d=0;d<12;++d)f=l([2e3,d]),this._shortMonthsParse[d]=this.monthsShort(f,"").toLocaleLowerCase(),this._longMonthsParse[d]=this.months(f,"").toLocaleLowerCase();return c?"MMM"===b?(e=ne.call(this._shortMonthsParse,g),-1!==e?e:null):(e=ne.call(this._longMonthsParse,g),-1!==e?e:null):"MMM"===b?(e=ne.call(this._shortMonthsParse,g),-1!==e?e:(e=ne.call(this._longMonthsParse,g),-1!==e?e:null)):(e=ne.call(this._longMonthsParse,g),-1!==e?e:(e=ne.call(this._shortMonthsParse,g),-1!==e?e:null))}function ia(a,b,c){var d,e,f;if(this._monthsParseExact)return ha.call(this,a,b,c);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;d<12;d++){if(e=l([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}function ja(a,b){var c;if(!a.isValid())return a;if("string"==typeof b)if(/^\d+$/.test(b))b=u(b);else if(b=a.localeData().monthsParse(b),!g(b))return a;return c=Math.min(a.date(),ea(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a}function ka(b){return null!=b?(ja(this,b),a.updateOffset(this,!0),this):P(this,"Month")}function la(){return ea(this.year(),this.month())}function ma(a){return this._monthsParseExact?(j(this,"_monthsRegex")||oa.call(this),a?this._monthsShortStrictRegex:this._monthsShortRegex):(j(this,"_monthsShortRegex")||(this._monthsShortRegex=re),this._monthsShortStrictRegex&&a?this._monthsShortStrictRegex:this._monthsShortRegex)}function na(a){return this._monthsParseExact?(j(this,"_monthsRegex")||oa.call(this),a?this._monthsStrictRegex:this._monthsRegex):(j(this,"_monthsRegex")||(this._monthsRegex=se),this._monthsStrictRegex&&a?this._monthsStrictRegex:this._monthsRegex)}function oa(){function a(a,b){return b.length-a.length}var b,c,d=[],e=[],f=[];for(b=0;b<12;b++)c=l([2e3,b]),d.push(this.monthsShort(c,"")),e.push(this.months(c,"")),f.push(this.months(c,"")),f.push(this.monthsShort(c,""));for(d.sort(a),e.sort(a),f.sort(a),b=0;b<12;b++)d[b]=aa(d[b]),e[b]=aa(e[b]);for(b=0;b<24;b++)f[b]=aa(f[b]);this._monthsRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+e.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")","i")}function pa(a){return qa(a)?366:365}function qa(a){return a%4==0&&a%100!=0||a%400==0}function ra(){return qa(this.year())}function sa(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return a<100&&a>=0&&isFinite(h.getFullYear())&&h.setFullYear(a),h}function ta(a){var b=new Date(Date.UTC.apply(null,arguments));return a<100&&a>=0&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b}function ua(a,b,c){var d=7+b-c;return-(7+ta(a,0,d).getUTCDay()-b)%7+d-1}function va(a,b,c,d,e){var f,g,h=(7+c-d)%7,i=ua(a,d,e),j=1+7*(b-1)+h+i;return j<=0?(f=a-1,g=pa(f)+j):j>pa(a)?(f=a+1,g=j-pa(a)):(f=a,g=j),{year:f,dayOfYear:g}}function wa(a,b,c){var d,e,f=ua(a.year(),b,c),g=Math.floor((a.dayOfYear()-f-1)/7)+1;return g<1?(e=a.year()-1,d=g+xa(e,b,c)):g>xa(a.year(),b,c)?(d=g-xa(a.year(),b,c),e=a.year()+1):(e=a.year(),d=g),{week:d,year:e}}function xa(a,b,c){var d=ua(a,b,c),e=ua(a+1,b,c);return(pa(a)-d+e)/7}function ya(a){return wa(a,this._week.dow,this._week.doy).week}function za(){return this._week.dow}function Aa(){return this._week.doy}function Ba(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function Ca(a){var b=wa(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}function Da(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function Ea(a,b){return"string"==typeof a?b.weekdaysParse(a)%7||7:isNaN(a)?null:a}function Fa(a,b){return a?c(this._weekdays)?this._weekdays[a.day()]:this._weekdays[this._weekdays.isFormat.test(b)?"format":"standalone"][a.day()]:c(this._weekdays)?this._weekdays:this._weekdays.standalone}function Ga(a){return a?this._weekdaysShort[a.day()]:this._weekdaysShort}function Ha(a){return a?this._weekdaysMin[a.day()]:this._weekdaysMin}function Ia(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],d=0;d<7;++d)f=l([2e3,1]).day(d),this._minWeekdaysParse[d]=this.weekdaysMin(f,"").toLocaleLowerCase(),this._shortWeekdaysParse[d]=this.weekdaysShort(f,"").toLocaleLowerCase(),this._weekdaysParse[d]=this.weekdays(f,"").toLocaleLowerCase();return c?"dddd"===b?(e=ne.call(this._weekdaysParse,g),-1!==e?e:null):"ddd"===b?(e=ne.call(this._shortWeekdaysParse,g),-1!==e?e:null):(e=ne.call(this._minWeekdaysParse,g),-1!==e?e:null):"dddd"===b?(e=ne.call(this._weekdaysParse,g),-1!==e?e:(e=ne.call(this._shortWeekdaysParse,g),-1!==e?e:(e=ne.call(this._minWeekdaysParse,g),-1!==e?e:null))):"ddd"===b?(e=ne.call(this._shortWeekdaysParse,g),-1!==e?e:(e=ne.call(this._weekdaysParse,g),-1!==e?e:(e=ne.call(this._minWeekdaysParse,g),-1!==e?e:null))):(e=ne.call(this._minWeekdaysParse,g),-1!==e?e:(e=ne.call(this._weekdaysParse,g),-1!==e?e:(e=ne.call(this._shortWeekdaysParse,g),-1!==e?e:null)))}function Ja(a,b,c){var d,e,f;if(this._weekdaysParseExact)return Ia.call(this,a,b,c);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),d=0;d<7;d++){if(e=l([2e3,1]).day(d),c&&!this._fullWeekdaysParse[d]&&(this._fullWeekdaysParse[d]=new RegExp("^"+this.weekdays(e,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[d]=new RegExp("^"+this.weekdaysShort(e,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[d]=new RegExp("^"+this.weekdaysMin(e,"").replace(".",".?")+"$","i")),this._weekdaysParse[d]||(f="^"+this.weekdays(e,"")+"|^"+this.weekdaysShort(e,"")+"|^"+this.weekdaysMin(e,""),this._weekdaysParse[d]=new RegExp(f.replace(".",""),"i")),c&&"dddd"===b&&this._fullWeekdaysParse[d].test(a))return d;if(c&&"ddd"===b&&this._shortWeekdaysParse[d].test(a))return d;if(c&&"dd"===b&&this._minWeekdaysParse[d].test(a))return d;if(!c&&this._weekdaysParse[d].test(a))return d}}function Ka(a){if(!this.isValid())return null!=a?this:NaN;var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Da(a,this.localeData()),this.add(a-b,"d")):b}function La(a){if(!this.isValid())return null!=a?this:NaN;var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function Ma(a){if(!this.isValid())return null!=a?this:NaN;if(null!=a){var b=Ea(a,this.localeData());return this.day(this.day()%7?b:b-7)}return this.day()||7}function Na(a){return this._weekdaysParseExact?(j(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysStrictRegex:this._weekdaysRegex):(j(this,"_weekdaysRegex")||(this._weekdaysRegex=ye),this._weekdaysStrictRegex&&a?this._weekdaysStrictRegex:this._weekdaysRegex)}function Oa(a){return this._weekdaysParseExact?(j(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(j(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=ze),this._weekdaysShortStrictRegex&&a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Pa(a){return this._weekdaysParseExact?(j(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(j(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Ae),this._weekdaysMinStrictRegex&&a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Qa(){function a(a,b){return b.length-a.length}var b,c,d,e,f,g=[],h=[],i=[],j=[];for(b=0;b<7;b++)c=l([2e3,1]).day(b),d=this.weekdaysMin(c,""),e=this.weekdaysShort(c,""),f=this.weekdays(c,""),g.push(d),h.push(e),i.push(f),j.push(d),j.push(e),j.push(f);for(g.sort(a),h.sort(a),i.sort(a),j.sort(a),b=0;b<7;b++)h[b]=aa(h[b]),i[b]=aa(i[b]),j[b]=aa(j[b]);this._weekdaysRegex=new RegExp("^("+j.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+h.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+g.join("|")+")","i")}function Ra(){return this.hours()%12||12}function Sa(){return this.hours()||24}function Ta(a,b){U(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function Ua(a,b){return b._meridiemParse}function Va(a){return"p"===(a+"").toLowerCase().charAt(0)}function Wa(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Xa(a){return a?a.toLowerCase().replace("_","-"):a}function Ya(a){for(var b,c,d,e,f=0;f<a.length;){for(e=Xa(a[f]).split("-"),b=e.length,c=Xa(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=Za(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&v(e,c,!0)>=b-1)break;b--}f++}return null}function Za(a){var b=null;if(!Fe[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=Be._abbr,require("./locale/"+a),$a(b)}catch(a){}return Fe[a]}function $a(a,b){var c;return a&&(c=f(b)?bb(a):_a(a,b))&&(Be=c),Be._abbr}function _a(a,b){if(null!==b){var c=Ee;if(b.abbr=a,null!=Fe[a])y("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),c=Fe[a]._config;else if(null!=b.parentLocale){if(null==Fe[b.parentLocale])return Ge[b.parentLocale]||(Ge[b.parentLocale]=[]),Ge[b.parentLocale].push({name:a,config:b}),null;c=Fe[b.parentLocale]._config}return Fe[a]=new C(B(c,b)),Ge[a]&&Ge[a].forEach(function(a){_a(a.name,a.config)}),$a(a),Fe[a]}return delete Fe[a],null}function ab(a,b){if(null!=b){var c,d=Ee;null!=Fe[a]&&(d=Fe[a]._config),b=B(d,b),c=new C(b),c.parentLocale=Fe[a],Fe[a]=c,$a(a)}else null!=Fe[a]&&(null!=Fe[a].parentLocale?Fe[a]=Fe[a].parentLocale:null!=Fe[a]&&delete Fe[a]);return Fe[a]}function bb(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return Be;if(!c(a)){if(b=Za(a))return b;a=[a]}return Ya(a)}function cb(){return Ad(Fe)}function db(a){var b,c=a._a;return c&&-2===n(a).overflow&&(b=c[fe]<0||c[fe]>11?fe:c[ge]<1||c[ge]>ea(c[ee],c[fe])?ge:c[he]<0||c[he]>24||24===c[he]&&(0!==c[ie]||0!==c[je]||0!==c[ke])?he:c[ie]<0||c[ie]>59?ie:c[je]<0||c[je]>59?je:c[ke]<0||c[ke]>999?ke:-1,n(a)._overflowDayOfYear&&(b<ee||b>ge)&&(b=ge),n(a)._overflowWeeks&&-1===b&&(b=le),n(a)._overflowWeekday&&-1===b&&(b=me),n(a).overflow=b),a}function eb(a){var b,c,d,e,f,g,h=a._i,i=He.exec(h)||Ie.exec(h);if(i){for(n(a).iso=!0,b=0,c=Ke.length;b<c;b++)if(Ke[b][1].exec(i[1])){e=Ke[b][0],d=!1!==Ke[b][2];break}if(null==e)return void(a._isValid=!1);if(i[3]){for(b=0,c=Le.length;b<c;b++)if(Le[b][1].exec(i[3])){f=(i[2]||" ")+Le[b][0];break}if(null==f)return void(a._isValid=!1)}if(!d&&null!=f)return void(a._isValid=!1);if(i[4]){if(!Je.exec(i[4]))return void(a._isValid=!1);g="Z"}a._f=e+(f||"")+(g||""),lb(a)}else a._isValid=!1}function fb(a){var b,c,d,e,f,g,h,i,j={" GMT":" +0000"," EDT":" -0400"," EST":" -0500"," CDT":" -0500"," CST":" -0600"," MDT":" -0600"," MST":" -0700"," PDT":" -0700"," PST":" -0800"};if(b=a._i.replace(/\([^\)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s|\s$/g,""),c=Ne.exec(b)){if(d=c[1]?"ddd"+(5===c[1].length?", ":" "):"",e="D MMM "+(c[2].length>10?"YYYY ":"YY "),f="HH:mm"+(c[4]?":ss":""),c[1]){var l=new Date(c[2]),m=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][l.getDay()];if(c[1].substr(0,3)!==m)return n(a).weekdayMismatch=!0,void(a._isValid=!1)}switch(c[5].length){case 2:0===i?h=" +0000":(i="YXWVUTSRQPONZABCDEFGHIKLM".indexOf(c[5][1].toUpperCase())-12,h=(i<0?" -":" +")+(""+i).replace(/^-?/,"0").match(/..$/)[0]+"00");break;case 4:h=j[c[5]];break;default:h=j[" GMT"]}c[5]=h,a._i=c.splice(1).join(""),g=" ZZ",a._f=d+e+f+g,lb(a),n(a).rfc2822=!0}else a._isValid=!1}function gb(b){var c=Me.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(eb(b),void(!1===b._isValid&&(delete b._isValid,fb(b),!1===b._isValid&&(delete b._isValid,a.createFromInputFallback(b)))))}function hb(a,b,c){return null!=a?a:null!=b?b:c}function ib(b){var c=new Date(a.now());return b._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()]}function jb(a){var b,c,d,e,f=[];if(!a._d){for(d=ib(a),a._w&&null==a._a[ge]&&null==a._a[fe]&&kb(a),null!=a._dayOfYear&&(e=hb(a._a[ee],d[ee]),(a._dayOfYear>pa(e)||0===a._dayOfYear)&&(n(a)._overflowDayOfYear=!0),c=ta(e,0,a._dayOfYear),a._a[fe]=c.getUTCMonth(),a._a[ge]=c.getUTCDate()),b=0;b<3&&null==a._a[b];++b)a._a[b]=f[b]=d[b];for(;b<7;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];24===a._a[he]&&0===a._a[ie]&&0===a._a[je]&&0===a._a[ke]&&(a._nextDay=!0,a._a[he]=0),a._d=(a._useUTC?ta:sa).apply(null,f),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[he]=24)}}function kb(a){var b,c,d,e,f,g,h,i;if(b=a._w,null!=b.GG||null!=b.W||null!=b.E)f=1,g=4,c=hb(b.GG,a._a[ee],wa(tb(),1,4).year),d=hb(b.W,1),((e=hb(b.E,1))<1||e>7)&&(i=!0);else{f=a._locale._week.dow,g=a._locale._week.doy;var j=wa(tb(),f,g);c=hb(b.gg,a._a[ee],j.year),d=hb(b.w,j.week),null!=b.d?((e=b.d)<0||e>6)&&(i=!0):null!=b.e?(e=b.e+f,(b.e<0||b.e>6)&&(i=!0)):e=f}d<1||d>xa(c,f,g)?n(a)._overflowWeeks=!0:null!=i?n(a)._overflowWeekday=!0:(h=va(c,d,e,f,g),a._a[ee]=h.year,a._dayOfYear=h.dayOfYear)}function lb(b){if(b._f===a.ISO_8601)return void eb(b);if(b._f===a.RFC_2822)return void fb(b);b._a=[],n(b).empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=Y(b._f,b._locale).match(Jd)||[],c=0;c<e.length;c++)f=e[c],d=(h.match($(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&n(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),Md[f]?(d?n(b).empty=!1:n(b).unusedTokens.push(f),da(f,d,b)):b._strict&&!d&&n(b).unusedTokens.push(f);n(b).charsLeftOver=i-j,h.length>0&&n(b).unusedInput.push(h),b._a[he]<=12&&!0===n(b).bigHour&&b._a[he]>0&&(n(b).bigHour=void 0),n(b).parsedDateParts=b._a.slice(0),n(b).meridiem=b._meridiem,b._a[he]=mb(b._locale,b._a[he],b._meridiem),jb(b),db(b)}function mb(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&b<12&&(b+=12),d||12!==b||(b=0),b):b}function nb(a){var b,c,d,e,f;if(0===a._f.length)return n(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=q({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],lb(b),o(b)&&(f+=n(b).charsLeftOver,f+=10*n(b).unusedTokens.length,n(b).score=f,(null==d||f<d)&&(d=f,c=b));k(a,c||b)}function ob(a){if(!a._d){var b=L(a._i);a._a=i([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],function(a){return a&&parseInt(a,10)}),jb(a)}}function pb(a){var b=new r(db(qb(a)));return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function qb(a){var b=a._i,d=a._f;return a._locale=a._locale||bb(a._l),null===b||void 0===d&&""===b?p({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),s(b)?new r(db(b)):(h(b)?a._d=b:c(d)?nb(a):d?lb(a):rb(a),o(a)||(a._d=null),a))}function rb(b){var e=b._i;f(e)?b._d=new Date(a.now()):h(e)?b._d=new Date(e.valueOf()):"string"==typeof e?gb(b):c(e)?(b._a=i(e.slice(0),function(a){return parseInt(a,10)}),jb(b)):d(e)?ob(b):g(e)?b._d=new Date(e):a.createFromInputFallback(b)}function sb(a,b,f,g,h){var i={};return!0!==f&&!1!==f||(g=f,f=void 0),(d(a)&&e(a)||c(a)&&0===a.length)&&(a=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=h,i._l=f,i._i=a,i._f=b,i._strict=g,pb(i)}function tb(a,b,c,d){return sb(a,b,c,d,!1)}function ub(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return tb();for(d=b[0],e=1;e<b.length;++e)b[e].isValid()&&!b[e][a](d)||(d=b[e]);return d}function vb(){return ub("isBefore",[].slice.call(arguments,0))}function wb(){return ub("isAfter",[].slice.call(arguments,0))}function xb(a){for(var b in a)if(-1===Re.indexOf(b)||null!=a[b]&&isNaN(a[b]))return!1;for(var c=!1,d=0;d<Re.length;++d)if(a[Re[d]]){if(c)return!1;parseFloat(a[Re[d]])!==u(a[Re[d]])&&(c=!0)}return!0}function yb(){return this._isValid}function zb(){return Sb(NaN)}function Ab(a){var b=L(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._isValid=xb(b),this._milliseconds=+k+1e3*j+6e4*i+1e3*h*60*60,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=bb(),this._bubble()}function Bb(a){return a instanceof Ab}function Cb(a){return a<0?-1*Math.round(-1*a):Math.round(a)}function Db(a,b){U(a,0,0,function(){var a=this.utcOffset(),c="+";return a<0&&(a=-a,c="-"),c+T(~~(a/60),2)+b+T(~~a%60,2)})}function Eb(a,b){var c=(b||"").match(a);if(null===c)return null;var d=c[c.length-1]||[],e=(d+"").match(Se)||["-",0,0],f=60*e[1]+u(e[2]);return 0===f?0:"+"===e[0]?f:-f}function Fb(b,c){var d,e;return c._isUTC?(d=c.clone(),e=(s(b)||h(b)?b.valueOf():tb(b).valueOf())-d.valueOf(),d._d.setTime(d._d.valueOf()+e),a.updateOffset(d,!1),d):tb(b).local()}function Gb(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)}function Hb(b,c,d){var e,f=this._offset||0;if(!this.isValid())return null!=b?this:NaN;if(null!=b){if("string"==typeof b){if(null===(b=Eb(_d,b)))return this}else Math.abs(b)<16&&!d&&(b*=60);return!this._isUTC&&c&&(e=Gb(this)),this._offset=b,this._isUTC=!0,null!=e&&this.add(e,"m"),f!==b&&(!c||this._changeInProgress?Xb(this,Sb(b-f,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?f:Gb(this)}function Ib(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Jb(a){return this.utcOffset(0,a)}function Kb(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Gb(this),"m")),this}function Lb(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var a=Eb($d,this._i);null!=a?this.utcOffset(a):this.utcOffset(0,!0)}return this}function Mb(a){return!!this.isValid()&&(a=a?tb(a).utcOffset():0,(this.utcOffset()-a)%60==0)}function Nb(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ob(){if(!f(this._isDSTShifted))return this._isDSTShifted;var a={};if(q(a,this),a=qb(a),a._a){var b=a._isUTC?l(a._a):tb(a._a);this._isDSTShifted=this.isValid()&&v(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Pb(){return!!this.isValid()&&!this._isUTC}function Qb(){return!!this.isValid()&&this._isUTC}function Rb(){return!!this.isValid()&&this._isUTC&&0===this._offset}function Sb(a,b){var c,d,e,f=a,h=null;return Bb(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:g(a)?(f={},b?f[b]=a:f.milliseconds=a):(h=Te.exec(a))?(c="-"===h[1]?-1:1,f={y:0,d:u(h[ge])*c,h:u(h[he])*c,m:u(h[ie])*c,s:u(h[je])*c,ms:u(Cb(1e3*h[ke]))*c}):(h=Ue.exec(a))?(c="-"===h[1]?-1:1,f={y:Tb(h[2],c),M:Tb(h[3],c),w:Tb(h[4],c),d:Tb(h[5],c),h:Tb(h[6],c),m:Tb(h[7],c),s:Tb(h[8],c)}):null==f?f={}:"object"==typeof f&&("from"in f||"to"in f)&&(e=Vb(tb(f.from),tb(f.to)),f={},f.ms=e.milliseconds,f.M=e.months),d=new Ab(f),Bb(a)&&j(a,"_locale")&&(d._locale=a._locale),d}function Tb(a,b){var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function Ub(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function Vb(a,b){var c;return a.isValid()&&b.isValid()?(b=Fb(b,a),a.isBefore(b)?c=Ub(a,b):(c=Ub(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c):{milliseconds:0,months:0}}function Wb(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(y(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Sb(c,d),Xb(this,e,a),this}}function Xb(b,c,d,e){var f=c._milliseconds,g=Cb(c._days),h=Cb(c._months);b.isValid()&&(e=null==e||e,f&&b._d.setTime(b._d.valueOf()+f*d),g&&Q(b,"Date",P(b,"Date")+g*d),h&&ja(b,P(b,"Month")+h*d),e&&a.updateOffset(b,g||h))}function Yb(a,b){var c=a.diff(b,"days",!0);return c<-6?"sameElse":c<-1?"lastWeek":c<0?"lastDay":c<1?"sameDay":c<2?"nextDay":c<7?"nextWeek":"sameElse"}function Zb(b,c){var d=b||tb(),e=Fb(d,this).startOf("day"),f=a.calendarFormat(this,e)||"sameElse",g=c&&(z(c[f])?c[f].call(this,d):c[f]);return this.format(g||this.localeData().calendar(f,this,tb(d)))}function $b(){return new r(this)}function _b(a,b){var c=s(a)?a:tb(a);return!(!this.isValid()||!c.isValid())&&(b=K(f(b)?"millisecond":b),"millisecond"===b?this.valueOf()>c.valueOf():c.valueOf()<this.clone().startOf(b).valueOf())}function ac(a,b){var c=s(a)?a:tb(a);return!(!this.isValid()||!c.isValid())&&(b=K(f(b)?"millisecond":b),"millisecond"===b?this.valueOf()<c.valueOf():this.clone().endOf(b).valueOf()<c.valueOf())}function bc(a,b,c,d){return d=d||"()",("("===d[0]?this.isAfter(a,c):!this.isBefore(a,c))&&(")"===d[1]?this.isBefore(b,c):!this.isAfter(b,c))}function cc(a,b){var c,d=s(a)?a:tb(a);return!(!this.isValid()||!d.isValid())&&(b=K(b||"millisecond"),"millisecond"===b?this.valueOf()===d.valueOf():(c=d.valueOf(),this.clone().startOf(b).valueOf()<=c&&c<=this.clone().endOf(b).valueOf()))}function dc(a,b){return this.isSame(a,b)||this.isAfter(a,b)}function ec(a,b){return this.isSame(a,b)||this.isBefore(a,b)}function fc(a,b,c){var d,e,f,g;return this.isValid()?(d=Fb(a,this),d.isValid()?(e=6e4*(d.utcOffset()-this.utcOffset()),b=K(b),"year"===b||"month"===b||"quarter"===b?(g=gc(this,d),"quarter"===b?g/=3:"year"===b&&(g/=12)):(f=this-d,g="second"===b?f/1e3:"minute"===b?f/6e4:"hour"===b?f/36e5:"day"===b?(f-e)/864e5:"week"===b?(f-e)/6048e5:f),c?g:t(g)):NaN):NaN}function gc(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return b-f<0?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)||0}function hc(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function ic(){if(!this.isValid())return null;var a=this.clone().utc();return a.year()<0||a.year()>9999?X(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):z(Date.prototype.toISOString)?this.toDate().toISOString():X(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function jc(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var a="moment",b="";this.isLocal()||(a=0===this.utcOffset()?"moment.utc":"moment.parseZone",b="Z");var c="["+a+'("]',d=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",f=b+'[")]';return this.format(c+d+"-MM-DD[T]HH:mm:ss.SSS"+f)}function kc(b){b||(b=this.isUtc()?a.defaultFormatUtc:a.defaultFormat);var c=X(this,b);return this.localeData().postformat(c)}function lc(a,b){return this.isValid()&&(s(a)&&a.isValid()||tb(a).isValid())?Sb({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function mc(a){return this.from(tb(),a)}function nc(a,b){return this.isValid()&&(s(a)&&a.isValid()||tb(a).isValid())?Sb({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function oc(a){return this.to(tb(),a)}function pc(a){var b;return void 0===a?this._locale._abbr:(b=bb(a),null!=b&&(this._locale=b),this)}function qc(){return this._locale}function rc(a){switch(a=K(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function sc(a){return a=K(a),void 0===a||"millisecond"===a?this:("date"===a&&(a="day"),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms"))}function tc(){return this._d.valueOf()-6e4*(this._offset||0)}function uc(){return Math.floor(this.valueOf()/1e3)}function vc(){return new Date(this.valueOf())}function wc(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function xc(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function yc(){return this.isValid()?this.toISOString():null}function zc(){return o(this)}function Ac(){
return k({},n(this))}function Bc(){return n(this).overflow}function Cc(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Dc(a,b){U(0,[a,a.length],0,b)}function Ec(a){return Ic.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Fc(a){return Ic.call(this,a,this.isoWeek(),this.isoWeekday(),1,4)}function Gc(){return xa(this.year(),1,4)}function Hc(){var a=this.localeData()._week;return xa(this.year(),a.dow,a.doy)}function Ic(a,b,c,d,e){var f;return null==a?wa(this,d,e).year:(f=xa(a,d,e),b>f&&(b=f),Jc.call(this,a,b,c,d,e))}function Jc(a,b,c,d,e){var f=va(a,b,c,d,e),g=ta(f.year,0,f.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),this.date(g.getUTCDate()),this}function Kc(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}function Lc(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function Mc(a,b){b[ke]=u(1e3*("0."+a))}function Nc(){return this._isUTC?"UTC":""}function Oc(){return this._isUTC?"Coordinated Universal Time":""}function Pc(a){return tb(1e3*a)}function Qc(){return tb.apply(null,arguments).parseZone()}function Rc(a){return a}function Sc(a,b,c,d){var e=bb(),f=l().set(d,b);return e[c](f,a)}function Tc(a,b,c){if(g(a)&&(b=a,a=void 0),a=a||"",null!=b)return Sc(a,b,c,"month");var d,e=[];for(d=0;d<12;d++)e[d]=Sc(a,d,c,"month");return e}function Uc(a,b,c,d){"boolean"==typeof a?(g(b)&&(c=b,b=void 0),b=b||""):(b=a,c=b,a=!1,g(b)&&(c=b,b=void 0),b=b||"");var e=bb(),f=a?e._week.dow:0;if(null!=c)return Sc(b,(c+f)%7,d,"day");var h,i=[];for(h=0;h<7;h++)i[h]=Sc(b,(h+f)%7,d,"day");return i}function Vc(a,b){return Tc(a,b,"months")}function Wc(a,b){return Tc(a,b,"monthsShort")}function Xc(a,b,c){return Uc(a,b,c,"weekdays")}function Yc(a,b,c){return Uc(a,b,c,"weekdaysShort")}function Zc(a,b,c){return Uc(a,b,c,"weekdaysMin")}function $c(){var a=this._data;return this._milliseconds=df(this._milliseconds),this._days=df(this._days),this._months=df(this._months),a.milliseconds=df(a.milliseconds),a.seconds=df(a.seconds),a.minutes=df(a.minutes),a.hours=df(a.hours),a.months=df(a.months),a.years=df(a.years),this}function _c(a,b,c,d){var e=Sb(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}function ad(a,b){return _c(this,a,b,1)}function bd(a,b){return _c(this,a,b,-1)}function cd(a){return a<0?Math.floor(a):Math.ceil(a)}function dd(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;return f>=0&&g>=0&&h>=0||f<=0&&g<=0&&h<=0||(f+=864e5*cd(fd(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=t(f/1e3),i.seconds=a%60,b=t(a/60),i.minutes=b%60,c=t(b/60),i.hours=c%24,g+=t(c/24),e=t(ed(g)),h+=e,g-=cd(fd(e)),d=t(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function ed(a){return 4800*a/146097}function fd(a){return 146097*a/4800}function gd(a){if(!this.isValid())return NaN;var b,c,d=this._milliseconds;if("month"===(a=K(a))||"year"===a)return b=this._days+d/864e5,c=this._months+ed(b),"month"===a?c:c/12;switch(b=this._days+Math.round(fd(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}function hd(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*u(this._months/12):NaN}function id(a){return function(){return this.as(a)}}function jd(a){return a=K(a),this.isValid()?this[a+"s"]():NaN}function kd(a){return function(){return this.isValid()?this._data[a]:NaN}}function ld(){return t(this.days()/7)}function md(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function nd(a,b,c){var d=Sb(a).abs(),e=uf(d.as("s")),f=uf(d.as("m")),g=uf(d.as("h")),h=uf(d.as("d")),i=uf(d.as("M")),j=uf(d.as("y")),k=e<=vf.ss&&["s",e]||e<vf.s&&["ss",e]||f<=1&&["m"]||f<vf.m&&["mm",f]||g<=1&&["h"]||g<vf.h&&["hh",g]||h<=1&&["d"]||h<vf.d&&["dd",h]||i<=1&&["M"]||i<vf.M&&["MM",i]||j<=1&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,md.apply(null,k)}function od(a){return void 0===a?uf:"function"==typeof a&&(uf=a,!0)}function pd(a,b){return void 0!==vf[a]&&(void 0===b?vf[a]:(vf[a]=b,"s"===a&&(vf.ss=b-1),!0))}function qd(a){if(!this.isValid())return this.localeData().invalidDate();var b=this.localeData(),c=nd(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function rd(){if(!this.isValid())return this.localeData().invalidDate();var a,b,c,d=wf(this._milliseconds)/1e3,e=wf(this._days),f=wf(this._months);a=t(d/60),b=t(a/60),d%=60,a%=60,c=t(f/12),f%=12;var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(m<0?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var sd,td;td=Array.prototype.some?Array.prototype.some:function(a){for(var b=Object(this),c=b.length>>>0,d=0;d<c;d++)if(d in b&&a.call(this,b[d],d,b))return!0;return!1};var ud=td,vd=a.momentProperties=[],wd=!1,xd={};a.suppressDeprecationWarnings=!1,a.deprecationHandler=null;var yd;yd=Object.keys?Object.keys:function(a){var b,c=[];for(b in a)j(a,b)&&c.push(b);return c};var zd,Ad=yd,Bd={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Cd={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Fd=/\d{1,2}/,Gd={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Hd={},Id={},Jd=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Kd=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Ld={},Md={},Nd=/\d/,Od=/\d\d/,Pd=/\d{3}/,Qd=/\d{4}/,Rd=/[+-]?\d{6}/,Sd=/\d\d?/,Td=/\d\d\d\d?/,Ud=/\d\d\d\d\d\d?/,Vd=/\d{1,3}/,Wd=/\d{1,4}/,Xd=/[+-]?\d{1,6}/,Yd=/\d+/,Zd=/[+-]?\d+/,$d=/Z|[+-]\d\d:?\d\d/gi,_d=/Z|[+-]\d\d(?::?\d\d)?/gi,ae=/[+-]?\d+(\.\d{1,3})?/,be=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,ce={},de={},ee=0,fe=1,ge=2,he=3,ie=4,je=5,ke=6,le=7,me=8;zd=Array.prototype.indexOf?Array.prototype.indexOf:function(a){var b;for(b=0;b<this.length;++b)if(this[b]===a)return b;return-1};var ne=zd;U("M",["MM",2],"Mo",function(){return this.month()+1}),U("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),U("MMMM",0,0,function(a){return this.localeData().months(this,a)}),J("month","M"),M("month",8),Z("M",Sd),Z("MM",Sd,Od),Z("MMM",function(a,b){return b.monthsShortRegex(a)}),Z("MMMM",function(a,b){return b.monthsRegex(a)}),ba(["M","MM"],function(a,b){b[fe]=u(a)-1}),ba(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[fe]=e:n(c).invalidMonth=a});var oe=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,pe="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),qe="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),re=be,se=be;U("Y",0,0,function(){var a=this.year();return a<=9999?""+a:"+"+a}),U(0,["YY",2],0,function(){return this.year()%100}),U(0,["YYYY",4],0,"year"),U(0,["YYYYY",5],0,"year"),U(0,["YYYYYY",6,!0],0,"year"),J("year","y"),M("year",1),Z("Y",Zd),Z("YY",Sd,Od),Z("YYYY",Wd,Qd),Z("YYYYY",Xd,Rd),Z("YYYYYY",Xd,Rd),ba(["YYYYY","YYYYYY"],ee),ba("YYYY",function(b,c){c[ee]=2===b.length?a.parseTwoDigitYear(b):u(b)}),ba("YY",function(b,c){c[ee]=a.parseTwoDigitYear(b)}),ba("Y",function(a,b){b[ee]=parseInt(a,10)}),a.parseTwoDigitYear=function(a){return u(a)+(u(a)>68?1900:2e3)};var te=O("FullYear",!0);U("w",["ww",2],"wo","week"),U("W",["WW",2],"Wo","isoWeek"),J("week","w"),J("isoWeek","W"),M("week",5),M("isoWeek",5),Z("w",Sd),Z("ww",Sd,Od),Z("W",Sd),Z("WW",Sd,Od),ca(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=u(a)});var ue={dow:0,doy:6};U("d",0,"do","day"),U("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),U("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),U("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),U("e",0,0,"weekday"),U("E",0,0,"isoWeekday"),J("day","d"),J("weekday","e"),J("isoWeekday","E"),M("day",11),M("weekday",11),M("isoWeekday",11),Z("d",Sd),Z("e",Sd),Z("E",Sd),Z("dd",function(a,b){return b.weekdaysMinRegex(a)}),Z("ddd",function(a,b){return b.weekdaysShortRegex(a)}),Z("dddd",function(a,b){return b.weekdaysRegex(a)}),ca(["dd","ddd","dddd"],function(a,b,c,d){var e=c._locale.weekdaysParse(a,d,c._strict);null!=e?b.d=e:n(c).invalidWeekday=a}),ca(["d","e","E"],function(a,b,c,d){b[d]=u(a)});var ve="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),we="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),xe="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ye=be,ze=be,Ae=be;U("H",["HH",2],0,"hour"),U("h",["hh",2],0,Ra),U("k",["kk",2],0,Sa),U("hmm",0,0,function(){return""+Ra.apply(this)+T(this.minutes(),2)}),U("hmmss",0,0,function(){return""+Ra.apply(this)+T(this.minutes(),2)+T(this.seconds(),2)}),U("Hmm",0,0,function(){return""+this.hours()+T(this.minutes(),2)}),U("Hmmss",0,0,function(){return""+this.hours()+T(this.minutes(),2)+T(this.seconds(),2)}),Ta("a",!0),Ta("A",!1),J("hour","h"),M("hour",13),Z("a",Ua),Z("A",Ua),Z("H",Sd),Z("h",Sd),Z("k",Sd),Z("HH",Sd,Od),Z("hh",Sd,Od),Z("kk",Sd,Od),Z("hmm",Td),Z("hmmss",Ud),Z("Hmm",Td),Z("Hmmss",Ud),ba(["H","HH"],he),ba(["k","kk"],function(a,b,c){var d=u(a);b[he]=24===d?0:d}),ba(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),ba(["h","hh"],function(a,b,c){b[he]=u(a),n(c).bigHour=!0}),ba("hmm",function(a,b,c){var d=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d)),n(c).bigHour=!0}),ba("hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d,2)),b[je]=u(a.substr(e)),n(c).bigHour=!0}),ba("Hmm",function(a,b,c){var d=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d))}),ba("Hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d,2)),b[je]=u(a.substr(e))});var Be,Ce=/[ap]\.?m?\.?/i,De=O("Hours",!0),Ee={calendar:Bd,longDateFormat:Cd,invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:Fd,relativeTime:Gd,months:pe,monthsShort:qe,week:ue,weekdays:ve,weekdaysMin:xe,weekdaysShort:we,meridiemParse:Ce},Fe={},Ge={},He=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ie=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Je=/Z|[+-]\d\d(?::?\d\d)?/,Ke=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Le=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Me=/^\/?Date\((\-?\d+)/i,Ne=/^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;a.createFromInputFallback=x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),a.ISO_8601=function(){},a.RFC_2822=function(){};var Oe=x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=tb.apply(null,arguments);return this.isValid()&&a.isValid()?a<this?this:a:p()}),Pe=x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=tb.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:a:p()}),Qe=function(){return Date.now?Date.now():+new Date},Re=["year","quarter","month","week","day","hour","minute","second","millisecond"];Db("Z",":"),Db("ZZ",""),Z("Z",_d),Z("ZZ",_d),ba(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Eb(_d,a)});var Se=/([\+\-]|\d\d)/gi;a.updateOffset=function(){};var Te=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Ue=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Sb.fn=Ab.prototype,Sb.invalid=zb;var Ve=Wb(1,"add"),We=Wb(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",a.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Xe=x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});U(0,["gg",2],0,function(){return this.weekYear()%100}),U(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Dc("gggg","weekYear"),Dc("ggggg","weekYear"),Dc("GGGG","isoWeekYear"),Dc("GGGGG","isoWeekYear"),J("weekYear","gg"),J("isoWeekYear","GG"),M("weekYear",1),M("isoWeekYear",1),Z("G",Zd),Z("g",Zd),Z("GG",Sd,Od),Z("gg",Sd,Od),Z("GGGG",Wd,Qd),Z("gggg",Wd,Qd),Z("GGGGG",Xd,Rd),Z("ggggg",Xd,Rd),ca(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=u(a)}),ca(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),U("Q",0,"Qo","quarter"),J("quarter","Q"),M("quarter",7),Z("Q",Nd),ba("Q",function(a,b){b[fe]=3*(u(a)-1)}),U("D",["DD",2],"Do","date"),J("date","D"),M("date",9),Z("D",Sd),Z("DD",Sd,Od),Z("Do",function(a,b){return a?b._dayOfMonthOrdinalParse||b._ordinalParse:b._dayOfMonthOrdinalParseLenient}),ba(["D","DD"],ge),ba("Do",function(a,b){b[ge]=u(a.match(Sd)[0],10)});var Ye=O("Date",!0);U("DDD",["DDDD",3],"DDDo","dayOfYear"),J("dayOfYear","DDD"),M("dayOfYear",4),Z("DDD",Vd),Z("DDDD",Pd),ba(["DDD","DDDD"],function(a,b,c){c._dayOfYear=u(a)}),U("m",["mm",2],0,"minute"),J("minute","m"),M("minute",14),Z("m",Sd),Z("mm",Sd,Od),ba(["m","mm"],ie);var Ze=O("Minutes",!1);U("s",["ss",2],0,"second"),J("second","s"),M("second",15),Z("s",Sd),Z("ss",Sd,Od),ba(["s","ss"],je);var $e=O("Seconds",!1);U("S",0,0,function(){return~~(this.millisecond()/100)}),U(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),U(0,["SSS",3],0,"millisecond"),U(0,["SSSS",4],0,function(){return 10*this.millisecond()}),U(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),U(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),U(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),U(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),U(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),J("millisecond","ms"),M("millisecond",16),Z("S",Vd,Nd),Z("SS",Vd,Od),Z("SSS",Vd,Pd);var _e;for(_e="SSSS";_e.length<=9;_e+="S")Z(_e,Yd);for(_e="S";_e.length<=9;_e+="S")ba(_e,Mc);var af=O("Milliseconds",!1);U("z",0,0,"zoneAbbr"),U("zz",0,0,"zoneName");var bf=r.prototype;bf.add=Ve,bf.calendar=Zb,bf.clone=$b,bf.diff=fc,bf.endOf=sc,bf.format=kc,bf.from=lc,bf.fromNow=mc,bf.to=nc,bf.toNow=oc,bf.get=R,bf.invalidAt=Bc,bf.isAfter=_b,bf.isBefore=ac,bf.isBetween=bc,bf.isSame=cc,bf.isSameOrAfter=dc,bf.isSameOrBefore=ec,bf.isValid=zc,bf.lang=Xe,bf.locale=pc,bf.localeData=qc,bf.max=Pe,bf.min=Oe,bf.parsingFlags=Ac,bf.set=S,bf.startOf=rc,bf.subtract=We,bf.toArray=wc,bf.toObject=xc,bf.toDate=vc,bf.toISOString=ic,bf.inspect=jc,bf.toJSON=yc,bf.toString=hc,bf.unix=uc,bf.valueOf=tc,bf.creationData=Cc,bf.year=te,bf.isLeapYear=ra,bf.weekYear=Ec,bf.isoWeekYear=Fc,bf.quarter=bf.quarters=Kc,bf.month=ka,bf.daysInMonth=la,bf.week=bf.weeks=Ba,bf.isoWeek=bf.isoWeeks=Ca,bf.weeksInYear=Hc,bf.isoWeeksInYear=Gc,bf.date=Ye,bf.day=bf.days=Ka,bf.weekday=La,bf.isoWeekday=Ma,bf.dayOfYear=Lc,bf.hour=bf.hours=De,bf.minute=bf.minutes=Ze,bf.second=bf.seconds=$e,bf.millisecond=bf.milliseconds=af,bf.utcOffset=Hb,bf.utc=Jb,bf.local=Kb,bf.parseZone=Lb,bf.hasAlignedHourOffset=Mb,bf.isDST=Nb,bf.isLocal=Pb,bf.isUtcOffset=Qb,bf.isUtc=Rb,bf.isUTC=Rb,bf.zoneAbbr=Nc,bf.zoneName=Oc,bf.dates=x("dates accessor is deprecated. Use date instead.",Ye),bf.months=x("months accessor is deprecated. Use month instead",ka),bf.years=x("years accessor is deprecated. Use year instead",te),bf.zone=x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Ib),bf.isDSTShifted=x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Ob);var cf=C.prototype;cf.calendar=D,cf.longDateFormat=E,cf.invalidDate=F,cf.ordinal=G,cf.preparse=Rc,cf.postformat=Rc,cf.relativeTime=H,cf.pastFuture=I,cf.set=A,cf.months=fa,cf.monthsShort=ga,cf.monthsParse=ia,cf.monthsRegex=na,cf.monthsShortRegex=ma,cf.week=ya,cf.firstDayOfYear=Aa,cf.firstDayOfWeek=za,cf.weekdays=Fa,cf.weekdaysMin=Ha,cf.weekdaysShort=Ga,cf.weekdaysParse=Ja,cf.weekdaysRegex=Na,cf.weekdaysShortRegex=Oa,cf.weekdaysMinRegex=Pa,cf.isPM=Va,cf.meridiem=Wa,$a("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10;return a+(1===u(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th")}}),a.lang=x("moment.lang is deprecated. Use moment.locale instead.",$a),a.langData=x("moment.langData is deprecated. Use moment.localeData instead.",bb);var df=Math.abs,ef=id("ms"),ff=id("s"),gf=id("m"),hf=id("h"),jf=id("d"),kf=id("w"),lf=id("M"),mf=id("y"),nf=kd("milliseconds"),of=kd("seconds"),pf=kd("minutes"),qf=kd("hours"),rf=kd("days"),sf=kd("months"),tf=kd("years"),uf=Math.round,vf={ss:44,s:45,m:45,h:22,d:26,M:11},wf=Math.abs,xf=Ab.prototype;return xf.isValid=yb,xf.abs=$c,xf.add=ad,xf.subtract=bd,xf.as=gd,xf.asMilliseconds=ef,xf.asSeconds=ff,xf.asMinutes=gf,xf.asHours=hf,xf.asDays=jf,xf.asWeeks=kf,xf.asMonths=lf,xf.asYears=mf,xf.valueOf=hd,xf._bubble=dd,xf.get=jd,xf.milliseconds=nf,xf.seconds=of,xf.minutes=pf,xf.hours=qf,xf.days=rf,xf.weeks=ld,xf.months=sf,xf.years=tf,xf.humanize=qd,xf.toISOString=rd,xf.toString=rd,xf.toJSON=rd,xf.locale=pc,xf.localeData=qc,xf.toIsoString=x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",rd),xf.lang=Xe,U("X",0,0,"unix"),U("x",0,0,"valueOf"),Z("x",Zd),Z("X",ae),ba("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),ba("x",function(a,b,c){c._d=new Date(u(a))}),a.version="2.18.1",function(a){sd=a}(tb),a.fn=bf,a.min=vb,a.max=wb,a.now=Qe,a.utc=l,a.unix=Pc,a.months=Vc,a.isDate=h,a.locale=$a,a.invalid=p,a.duration=Sb,a.isMoment=s,a.weekdays=Xc,a.parseZone=Qc,a.localeData=bb,a.isDuration=Bb,a.monthsShort=Wc,a.weekdaysMin=Zc,a.defineLocale=_a,a.updateLocale=ab,a.locales=cb,a.weekdaysShort=Yc,a.normalizeUnits=K,a.relativeTimeRounding=od,a.relativeTimeThreshold=pd,a.calendarFormat=Yb,a.prototype=bf,a}),/*!
 * FullCalendar v3.4.0
 * Docs & License: https://fullcalendar.io/
 * (c) 2017 Adam Shaw
 */
function(factory){"function"==typeof define&&define.amd?define(["jquery","moment"],factory):"object"==typeof exports?// Node/CommonJS
module.exports=factory(require("jquery"),require("moment")):factory(jQuery,moment)}(function($,moment){
// Merges an array of option objects into a single object
function mergeOptions(optionObjs){return mergeProps(optionObjs,complexOptions)}/* FullCalendar-specific DOM Utilities
----------------------------------------------------------------------------------------------------------------------*/
// Given the scrollbar widths of some other container, create borders/margins on rowEls in order to match the left
// and right space that was offset by the scrollbars. A 1-pixel border first, then margin beyond that.
function compensateScroll(rowEls,scrollbarWidths){scrollbarWidths.left&&rowEls.css({"border-left-width":1,"margin-left":scrollbarWidths.left-1}),scrollbarWidths.right&&rowEls.css({"border-right-width":1,"margin-right":scrollbarWidths.right-1})}
// Undoes compensateScroll and restores all borders/margins
function uncompensateScroll(rowEls){rowEls.css({"margin-left":"","margin-right":"","border-left-width":"","border-right-width":""})}
// Make the mouse cursor express that an event is not allowed in the current area
function disableCursor(){$("body").addClass("fc-not-allowed")}
// Returns the mouse cursor to its original look
function enableCursor(){$("body").removeClass("fc-not-allowed")}
// Given a total available height to fill, have `els` (essentially child rows) expand to accomodate.
// By default, all elements that are shorter than the recommended height are expanded uniformly, not considering
// any other els that are already too tall. if `shouldRedistribute` is on, it considers these tall rows and 
// reduces the available height.
function distributeHeight(els,availableHeight,shouldRedistribute){
// *FLOORING NOTE*: we floor in certain places because zoom can give inaccurate floating-point dimensions,
// and it is better to be shorter than taller, to avoid creating unnecessary scrollbars.
var minOffset1=Math.floor(availableHeight/els.length),minOffset2=Math.floor(availableHeight-minOffset1*(els.length-1)),flexEls=[],flexOffsets=[],flexHeights=[],usedHeight=0;undistributeHeight(els),// give all elements their natural height
// find elements that are below the recommended height (expandable).
// important to query for heights in a single first pass (to avoid reflow oscillation).
els.each(function(i,el){var minOffset=i===els.length-1?minOffset2:minOffset1,naturalOffset=$(el).outerHeight(!0);naturalOffset<minOffset?(flexEls.push(el),flexOffsets.push(naturalOffset),flexHeights.push($(el).height())):
// this element stretches past recommended height (non-expandable). mark the space as occupied.
usedHeight+=naturalOffset}),
// readjust the recommended height to only consider the height available to non-maxed-out rows.
shouldRedistribute&&(availableHeight-=usedHeight,minOffset1=Math.floor(availableHeight/flexEls.length),minOffset2=Math.floor(availableHeight-minOffset1*(flexEls.length-1))),
// assign heights to all expandable elements
$(flexEls).each(function(i,el){var minOffset=i===flexEls.length-1?minOffset2:minOffset1,naturalOffset=flexOffsets[i],naturalHeight=flexHeights[i],newHeight=minOffset-(naturalOffset-naturalHeight);// subtract the margin/padding
naturalOffset<minOffset&&// we check this again because redistribution might have changed things
$(el).height(newHeight)})}
// Undoes distrubuteHeight, restoring all els to their natural height
function undistributeHeight(els){els.height("")}
// Given `els`, a jQuery set of <td> cells, find the cell with the largest natural width and set the widths of all the
// cells to be that width.
// PREREQUISITE: if you want a cell to take up width, it needs to have a single inner element w/ display:inline
function matchCellWidths(els){var maxInnerWidth=0;// sometimes not accurate of width the text needs to stay on one line. insurance
return els.find("> *").each(function(i,innerEl){var innerWidth=$(innerEl).outerWidth();innerWidth>maxInnerWidth&&(maxInnerWidth=innerWidth)}),maxInnerWidth++,els.width(maxInnerWidth),maxInnerWidth}
// Given one element that resides inside another,
// Subtracts the height of the inner element from the outer element.
function subtractInnerElHeight(outerEl,innerEl){var diff,both=outerEl.add(innerEl);// undo hack
// effin' IE8/9/10/11 sometimes returns 0 for dimensions. this weird hack was the only thing that worked
// grab the dimensions
return both.css({position:"relative",// cause a reflow, which will force fresh dimension recalculation
left:-1}),diff=outerEl.outerHeight()-innerEl.outerHeight(),both.css({position:"",left:""}),diff}
// borrowed from https://github.com/jquery/jquery-ui/blob/1.11.0/ui/core.js#L51
function getScrollParent(el){var position=el.css("position"),scrollParent=el.parents().filter(function(){var parent=$(this);return/(auto|scroll)/.test(parent.css("overflow")+parent.css("overflow-y")+parent.css("overflow-x"))}).eq(0);return"fixed"!==position&&scrollParent.length?scrollParent:$(el[0].ownerDocument||document)}
// Queries the outer bounding area of a jQuery element.
// Returns a rectangle with absolute coordinates: left, right (exclusive), top, bottom (exclusive).
// Origin is optional.
function getOuterRect(el,origin){var offset=el.offset(),left=offset.left-(origin?origin.left:0),top=offset.top-(origin?origin.top:0);return{left:left,right:left+el.outerWidth(),top:top,bottom:top+el.outerHeight()}}
// Queries the area within the margin/border/scrollbars of a jQuery element. Does not go within the padding.
// Returns a rectangle with absolute coordinates: left, right (exclusive), top, bottom (exclusive).
// Origin is optional.
// WARNING: given element can't have borders
// NOTE: should use clientLeft/clientTop, but very unreliable cross-browser.
function getClientRect(el,origin){var offset=el.offset(),scrollbarWidths=getScrollbarWidths(el),left=offset.left+getCssFloat(el,"border-left-width")+scrollbarWidths.left-(origin?origin.left:0),top=offset.top+getCssFloat(el,"border-top-width")+scrollbarWidths.top-(origin?origin.top:0);return{left:left,right:left+el[0].clientWidth,// clientWidth includes padding but NOT scrollbars
top:top,bottom:top+el[0].clientHeight}}
// Queries the area within the margin/border/padding of a jQuery element. Assumed not to have scrollbars.
// Returns a rectangle with absolute coordinates: left, right (exclusive), top, bottom (exclusive).
// Origin is optional.
function getContentRect(el,origin){var offset=el.offset(),left=offset.left+getCssFloat(el,"border-left-width")+getCssFloat(el,"padding-left")-(origin?origin.left:0),top=offset.top+getCssFloat(el,"border-top-width")+getCssFloat(el,"padding-top")-(origin?origin.top:0);return{left:left,right:left+el.width(),top:top,bottom:top+el.height()}}
// Returns the computed left/right/top/bottom scrollbar widths for the given jQuery element.
// WARNING: given element can't have borders (which will cause offsetWidth/offsetHeight to be larger).
// NOTE: should use clientLeft/clientTop, but very unreliable cross-browser.
function getScrollbarWidths(el){var widths,leftRightWidth=el[0].offsetWidth-el[0].clientWidth,bottomWidth=el[0].offsetHeight-el[0].clientHeight;// is the scrollbar on the left side?
return leftRightWidth=sanitizeScrollbarWidth(leftRightWidth),bottomWidth=sanitizeScrollbarWidth(bottomWidth),widths={left:0,right:0,top:0,bottom:bottomWidth},getIsLeftRtlScrollbars()&&"rtl"==el.css("direction")?widths.left=leftRightWidth:widths.right=leftRightWidth,widths}
// The scrollbar width computations in getScrollbarWidths are sometimes flawed when it comes to
// retina displays, rounding, and IE11. Massage them into a usable value.
function sanitizeScrollbarWidth(width){// no negatives
return width=Math.max(0,width),width=Math.round(width)}function getIsLeftRtlScrollbars(){// responsible for caching the computation
return null===_isLeftRtlScrollbars&&(_isLeftRtlScrollbars=computeIsLeftRtlScrollbars()),_isLeftRtlScrollbars}function computeIsLeftRtlScrollbars(){// creates an offscreen test element, then removes it
var el=$("<div><div/></div>").css({position:"absolute",top:-1e3,left:0,border:0,padding:0,overflow:"scroll",direction:"rtl"}).appendTo("body"),innerEl=el.children(),res=innerEl.offset().left>el.offset().left;// is the inner div shifted to accommodate a left scrollbar?
return el.remove(),res}
// Retrieves a jQuery element's computed CSS value as a floating-point number.
// If the queried value is non-numeric (ex: IE can return "medium" for border width), will just return zero.
function getCssFloat(el,prop){return parseFloat(el.css(prop))||0}
// Returns a boolean whether this was a left mouse click and no ctrl key (which means right click on Mac)
function isPrimaryMouseButton(ev){return 1==ev.which&&!ev.ctrlKey}function getEvX(ev){var touches=ev.originalEvent.touches;
// on mobile FF, pageX for touch events is present, but incorrect,
// so, look at touch coordinates first.
// on mobile FF, pageX for touch events is present, but incorrect,
// so, look at touch coordinates first.
return touches&&touches.length?touches[0].pageX:ev.pageX}function getEvY(ev){var touches=ev.originalEvent.touches;
// on mobile FF, pageX for touch events is present, but incorrect,
// so, look at touch coordinates first.
// on mobile FF, pageX for touch events is present, but incorrect,
// so, look at touch coordinates first.
return touches&&touches.length?touches[0].pageY:ev.pageY}function getEvIsTouch(ev){return/^touch/.test(ev.type)}function preventSelection(el){el.addClass("fc-unselectable").on("selectstart",preventDefault)}function allowSelection(el){el.removeClass("fc-unselectable").off("selectstart",preventDefault)}
// Stops a mouse/touch event from doing it's native browser action
function preventDefault(ev){ev.preventDefault()}
// Returns a new rectangle that is the intersection of the two rectangles. If they don't intersect, returns false
function intersectRects(rect1,rect2){var res={left:Math.max(rect1.left,rect2.left),right:Math.min(rect1.right,rect2.right),top:Math.max(rect1.top,rect2.top),bottom:Math.min(rect1.bottom,rect2.bottom)};return res.left<res.right&&res.top<res.bottom&&res}
// Returns a new point that will have been moved to reside within the given rectangle
function constrainPoint(point,rect){return{left:Math.min(Math.max(point.left,rect.left),rect.right),top:Math.min(Math.max(point.top,rect.top),rect.bottom)}}
// Returns a point that is the center of the given rectangle
function getRectCenter(rect){return{left:(rect.left+rect.right)/2,top:(rect.top+rect.bottom)/2}}
// Subtracts point2's coordinates from point1's coordinates, returning a delta
function diffPoints(point1,point2){return{left:point1.left-point2.left,top:point1.top-point2.top}}function parseFieldSpecs(input){var i,token,specs=[],tokens=[];for("string"==typeof input?tokens=input.split(/\s*,\s*/):"function"==typeof input?tokens=[input]:$.isArray(input)&&(tokens=input),i=0;i<tokens.length;i++)token=tokens[i],"string"==typeof token?specs.push("-"==token.charAt(0)?{field:token.substring(1),order:-1}:{field:token,order:1}):"function"==typeof token&&specs.push({func:token});return specs}function compareByFieldSpecs(obj1,obj2,fieldSpecs){var i,cmp;for(i=0;i<fieldSpecs.length;i++)if(cmp=compareByFieldSpec(obj1,obj2,fieldSpecs[i]))return cmp;return 0}function compareByFieldSpec(obj1,obj2,fieldSpec){return fieldSpec.func?fieldSpec.func(obj1,obj2):flexibleCompare(obj1[fieldSpec.field],obj2[fieldSpec.field])*(fieldSpec.order||1)}function flexibleCompare(a,b){return a||b?null==b?-1:null==a?1:"string"===$.type(a)||"string"===$.type(b)?String(a).localeCompare(String(b)):a-b:0}/* FullCalendar-specific Misc Utilities
----------------------------------------------------------------------------------------------------------------------*/
// Computes the intersection of the two ranges. Will return fresh date clones in a range.
// Returns undefined if no intersection.
// Expects all dates to be normalized to the same timezone beforehand.
// TODO: move to date section?
function intersectRanges(subjectRange,constraintRange){var segStart,segEnd,isStart,isEnd,subjectStart=subjectRange.start,subjectEnd=subjectRange.end,constraintStart=constraintRange.start,constraintEnd=constraintRange.end;if(subjectEnd>constraintStart&&subjectStart<constraintEnd)// in bounds at all?
return subjectStart>=constraintStart?(segStart=subjectStart.clone(),isStart=!0):(segStart=constraintStart.clone(),isStart=!1),subjectEnd<=constraintEnd?(segEnd=subjectEnd.clone(),isEnd=!0):(segEnd=constraintEnd.clone(),isEnd=!1),{start:segStart,end:segEnd,isStart:isStart,isEnd:isEnd}}// descending
// Diffs the two moments into a Duration where full-days are recorded first, then the remaining time.
// Moments will have their timezones normalized.
function diffDayTime(a,b){return moment.duration({days:a.clone().stripTime().diff(b.clone().stripTime(),"days"),ms:a.time()-b.time()})}
// Diffs the two moments via their start-of-day (regardless of timezone). Produces whole-day durations.
function diffDay(a,b){return moment.duration({days:a.clone().stripTime().diff(b.clone().stripTime(),"days")})}
// Diffs two moments, producing a duration, made of a whole-unit-increment of the given unit. Uses rounding.
function diffByUnit(a,b,unit){// returnFloat=true
return moment.duration(Math.round(a.diff(b,unit,!0)),unit)}
// Computes the unit name of the largest whole-unit period of time.
// For example, 48 hours will be "days" whereas 49 hours will be "hours".
// Accepts start/end, a range object, or an original duration object.
function computeGreatestUnit(start,end){var i,unit,val;for(i=0;i<unitsDesc.length&&(unit=unitsDesc[i],!((val=computeRangeAs(unit,start,end))>=1&&isInt(val)));i++);return unit}
// like computeGreatestUnit, but has special abilities to interpret the source input for clues
function computeDurationGreatestUnit(duration,durationInput){var unit=computeGreatestUnit(duration);
// prevent days:7 from being interpreted as a week
return"week"===unit&&"object"==typeof durationInput&&durationInput.days&&(unit="day"),unit}
// Computes the number of units (like "hours") in the given range.
// Range can be a {start,end} object, separate start/end args, or a Duration.
// Results are based on Moment's .as() and .diff() methods, so results can depend on internal handling
// of month-diffing logic (which tends to vary from version to version).
function computeRangeAs(unit,start,end){return null!=end?end.diff(start,unit,!0):moment.isDuration(start)?start.as(unit):start.end.diff(start.start,unit,!0)}
// Intelligently divides a range (specified by a start/end params) by a duration
function divideRangeByDuration(start,end,dur){var months;return durationHasTime(dur)?(end-start)/dur:(months=dur.asMonths(),Math.abs(months)>=1&&isInt(months)?end.diff(start,"months",!0)/months:end.diff(start,"days",!0)/dur.asDays())}
// Intelligently divides one duration by another
function divideDurationByDuration(dur1,dur2){var months1,months2;return durationHasTime(dur1)||durationHasTime(dur2)?dur1/dur2:(months1=dur1.asMonths(),months2=dur2.asMonths(),Math.abs(months1)>=1&&isInt(months1)&&Math.abs(months2)>=1&&isInt(months2)?months1/months2:dur1.asDays()/dur2.asDays())}
// Intelligently multiplies a duration by a number
function multiplyDuration(dur,n){var months;return durationHasTime(dur)?moment.duration(dur*n):(months=dur.asMonths(),Math.abs(months)>=1&&isInt(months)?moment.duration({months:months*n}):moment.duration({days:dur.asDays()*n}))}function cloneRange(range){return{start:range.start.clone(),end:range.end.clone()}}
// Trims the beginning and end of inner range to be completely within outerRange.
// Returns a new range object.
function constrainRange(innerRange,outerRange){
// needs to be inclusively before outerRange's end
return innerRange=cloneRange(innerRange),outerRange.start&&(innerRange.start=constrainDate(innerRange.start,outerRange)),outerRange.end&&(innerRange.end=minMoment(innerRange.end,outerRange.end)),innerRange}
// If the given date is not within the given range, move it inside.
// (If it's past the end, make it one millisecond before the end).
// Always returns a new moment.
function constrainDate(date,range){return date=date.clone(),range.start&&(date=maxMoment(date,range.start)),range.end&&date>=range.end&&(date=range.end.clone().subtract(1)),date}function isDateWithinRange(date,range){return(!range.start||date>=range.start)&&(!range.end||date<range.end)}
// TODO: deal with repeat code in intersectRanges
// constraintRange can have unspecified start/end, an open-ended range.
function doRangesIntersect(subjectRange,constraintRange){return(!constraintRange.start||subjectRange.end>=constraintRange.start)&&(!constraintRange.end||subjectRange.start<constraintRange.end)}function isRangeWithinRange(innerRange,outerRange){return(!outerRange.start||innerRange.start>=outerRange.start)&&(!outerRange.end||innerRange.end<=outerRange.end)}function isRangesEqual(range0,range1){return(range0.start&&range1.start&&range0.start.isSame(range1.start)||!range0.start&&!range1.start)&&(range0.end&&range1.end&&range0.end.isSame(range1.end)||!range0.end&&!range1.end)}
// Returns the moment that's earlier in time. Always a copy.
function minMoment(mom1,mom2){return(mom1.isBefore(mom2)?mom1:mom2).clone()}
// Returns the moment that's later in time. Always a copy.
function maxMoment(mom1,mom2){return(mom1.isAfter(mom2)?mom1:mom2).clone()}
// Returns a boolean about whether the given duration has any time parts (hours/minutes/seconds/ms)
function durationHasTime(dur){return Boolean(dur.hours()||dur.minutes()||dur.seconds()||dur.milliseconds())}function isNativeDate(input){return"[object Date]"===Object.prototype.toString.call(input)||input instanceof Date}
// Returns a boolean about whether the given input is a time string, like "06:40:00" or "06:00"
function isTimeString(str){return/^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(str)}
// Merges an array of objects into a single object.
// The second argument allows for an array of property names who's object values will be merged together.
function mergeProps(propObjs,complexProps){var i,name,complexObjs,j,val,props,dest={};if(complexProps)for(i=0;i<complexProps.length;i++){
// collect the trailing object values, stopping when a non-object is discovered
for(name=complexProps[i],complexObjs=[],j=propObjs.length-1;j>=0;j--)if("object"==typeof(val=propObjs[j][name]))complexObjs.unshift(val);else if(void 0!==val){dest[name]=val;// if there were no objects, this value will be used
break}
// if the trailing values were objects, use the merged value
complexObjs.length&&(dest[name]=mergeProps(complexObjs))}
// copy values into the destination, going from last to first
for(i=propObjs.length-1;i>=0;i--){props=propObjs[i];for(name in props)name in dest||(// if already assigned by previous props or complex props, don't reassign
dest[name]=props[name])}return dest}
// Create an object that has the given prototype. Just like Object.create
function createObject(proto){var f=function(){};return f.prototype=proto,new f}function copyOwnProps(src,dest){for(var name in src)hasOwnProp(src,name)&&(dest[name]=src[name])}function hasOwnProp(obj,name){return hasOwnPropMethod.call(obj,name)}
// Is the given value a non-object non-function value?
function isAtomic(val){return/undefined|null|boolean|number|string/.test($.type(val))}function applyAll(functions,thisObj,args){if($.isFunction(functions)&&(functions=[functions]),functions){var i,ret;for(i=0;i<functions.length;i++)ret=functions[i].apply(thisObj,args)||ret;return ret}}function firstDefined(){for(var i=0;i<arguments.length;i++)if(void 0!==arguments[i])return arguments[i]}function htmlEscape(s){return(s+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#039;").replace(/"/g,"&quot;").replace(/\n/g,"<br />")}function stripHtmlEntities(text){return text.replace(/&.*?;/g,"")}
// Given a hash of CSS properties, returns a string of CSS.
// Uses property names as-is (no camel-case conversion). Will not make statements for null/undefined values.
function cssToStr(cssProps){var statements=[];return $.each(cssProps,function(name,val){null!=val&&statements.push(name+":"+val)}),statements.join(";")}
// Given an object hash of HTML attribute names to values,
// generates a string that can be injected between < > in HTML
function attrsToStr(attrs){var parts=[];return $.each(attrs,function(name,val){null!=val&&parts.push(name+'="'+htmlEscape(val)+'"')}),parts.join(" ")}function capitaliseFirstLetter(str){return str.charAt(0).toUpperCase()+str.slice(1)}function compareNumbers(a,b){// for .sort()
return a-b}function isInt(n){return n%1==0}
// Returns a method bound to the given object context.
// Just like one of the jQuery.proxy signatures, but without the undesired behavior of treating the same method with
// different contexts as identical when binding/unbinding events.
function proxy(obj,methodName){var method=obj[methodName];return function(){return method.apply(obj,arguments)}}
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// https://github.com/jashkenas/underscore/blob/1.6.0/underscore.js#L714
function debounce(func,wait,immediate){var timeout,args,context,timestamp,result,later=function(){var last=+new Date-timestamp;last<wait?timeout=setTimeout(later,wait-last):(timeout=null,immediate||(result=func.apply(context,args),context=args=null))};return function(){context=this,args=arguments,timestamp=+new Date;var callNow=immediate&&!timeout;return timeout||(timeout=setTimeout(later,wait)),callNow&&(result=func.apply(context,args),context=args=null),result}}
// Builds an enhanced moment from args. When given an existing moment, it clones. When given a
// native Date, or called with no arguments (the current time), the resulting moment will be local.
// Anything else needs to be "parsed" (a string or an array), and will be affected by:
//    parseAsUTC - if there is no zone information, should we parse the input in UTC?
//    parseZone - if there is zone information, should we force the zone of the moment?
function makeMoment(args,parseAsUTC,parseZone){var isAmbigTime,isAmbigZone,ambigMatch,mom,input=args[0],isSingleString=1==args.length&&"string"==typeof input;// flag for extended functionality
// "parsing" is required
// accept strings like '2014-05', but convert to the first of the month
// for when we pass it on to moment's constructor
// no time part?
// arrays have no timezone information, so assume ambiguous zone
// otherwise, probably a string with a format
// let's record the inputted zone somehow
return moment.isMoment(input)||isNativeDate(input)||void 0===input?mom=moment.apply(null,args):(isAmbigTime=!1,isAmbigZone=!1,isSingleString?ambigDateOfMonthRegex.test(input)?(input+="-01",args=[input],isAmbigTime=!0,isAmbigZone=!0):(ambigMatch=ambigTimeOrZoneRegex.exec(input))&&(isAmbigTime=!ambigMatch[5],isAmbigZone=!0):$.isArray(input)&&(isAmbigZone=!0),mom=parseAsUTC||isAmbigTime?moment.utc.apply(moment,args):moment.apply(null,args),isAmbigTime?(mom._ambigTime=!0,mom._ambigZone=!0):parseZone&&(isAmbigZone?mom._ambigZone=!0:isSingleString&&mom.utcOffset(input))),mom._fullCalendar=!0,mom}function englishMoment(mom){return"en"!==mom.locale()?mom.clone().locale("en"):mom}// export
// Class that all other classes will inherit from
function Class(){}function extendClass(superClass,members){var subClass;
// ensure a constructor for the subclass, forwarding all arguments to the super-constructor if it doesn't exist
// build the base prototype for the subclass, which is an new object chained to the superclass's prototype
// copy each member variable/method onto the the subclass's prototype
// copy over all class variables/methods to the subclass, such as `extend` and `mixin`
return hasOwnProp(members,"constructor")&&(subClass=members.constructor),"function"!=typeof subClass&&(subClass=members.constructor=function(){superClass.apply(this,arguments)}),subClass.prototype=createObject(superClass.prototype),copyOwnProps(members,subClass.prototype),copyOwnProps(superClass,subClass),subClass}function mixIntoClass(theClass,members){copyOwnProps(members,theClass.prototype)}function attachImmediatelyResolvingThen(promise,val){promise.then=function(onResolve){return"function"==typeof onResolve&&onResolve(val),promise}}function attachImmediatelyRejectingThen(promise){promise.then=function(onResolve,onReject){return"function"==typeof onReject&&onReject(),promise}}
// Returns `true` if the hits are identically equal. `false` otherwise. Must be from the same component.
// Two null values will be considered equal, as two "out of the component" states are the same.
function isHitsEqual(hit0,hit1){return!hit0&&!hit1||!(!hit0||!hit1)&&(hit0.component===hit1.component&&isHitPropsWithin(hit0,hit1)&&isHitPropsWithin(hit1,hit0))}
// Returns true if all of subHit's non-standard properties are within superHit
function isHitPropsWithin(subHit,superHit){for(var propName in subHit)if(!/^(component|left|right|top|bottom)$/.test(propName)&&subHit[propName]!==superHit[propName])return!1;return!0}/* Utilities
----------------------------------------------------------------------------------------------------------------------*/
function pluckEventDateProps(event){return{start:event.start.clone(),end:event.end?event.end.clone():null,allDay:event.allDay}}function isBgEvent(event){// returns true if background OR inverse-background
var rendering=getEventRendering(event);return"background"===rendering||"inverse-background"===rendering}// export
function isInverseBgEvent(event){return"inverse-background"===getEventRendering(event)}function getEventRendering(event){return firstDefined((event.source||{}).rendering,event.rendering)}function groupEventsById(events){var i,event,eventsById={};for(i=0;i<events.length;i++)event=events[i],(eventsById[event._id]||(eventsById[event._id]=[])).push(event);return eventsById}
// A cmp function for determining which non-inverted "ranges" (see above) happen earlier
function compareRanges(range1,range2){return range1.start-range2.start}
// Given a jQuery element that might represent a dragged FullCalendar event, returns an intermediate data structure
// to be used for Event Object creation.
// A defined `.eventProps`, even when empty, indicates that an event should be created.
function getDraggedElMeta(el){var eventProps,startTime,duration,stick,prefix=FC.dataAttrPrefix;
// pluck special-cased date/time properties
// accept 'time' as well
// fallback to standalone attribute values for each of the date/time properties
// accept 'time' as well
// massage into correct data types
return prefix&&(prefix+="-"),eventProps=el.data(prefix+"event")||null,eventProps&&(eventProps="object"==typeof eventProps?$.extend({},eventProps):{},startTime=eventProps.start,null==startTime&&(startTime=eventProps.time),duration=eventProps.duration,stick=eventProps.stick,delete eventProps.start,delete eventProps.time,delete eventProps.duration,delete eventProps.stick),null==startTime&&(startTime=el.data(prefix+"start")),null==startTime&&(startTime=el.data(prefix+"time")),null==duration&&(duration=el.data(prefix+"duration")),null==stick&&(stick=el.data(prefix+"stick")),startTime=null!=startTime?moment.duration(startTime):null,duration=null!=duration?moment.duration(duration):null,stick=Boolean(stick),{eventProps:eventProps,startTime:startTime,duration:duration,stick:stick}}
// Computes whether two segments' columns collide. They are assumed to be in the same row.
function isDaySegCollision(seg,otherSegs){var i,otherSeg;for(i=0;i<otherSegs.length;i++)if(otherSeg=otherSegs[i],otherSeg.leftCol<=seg.rightCol&&otherSeg.rightCol>=seg.leftCol)return!0;return!1}
// A cmp function for determining the leftmost event
function compareDaySegCols(a,b){return a.leftCol-b.leftCol}
// Builds an array of segments "levels". The first level will be the leftmost tier of segments if the calendar is
// left-to-right, or the rightmost if the calendar is right-to-left. Assumes the segments are already ordered by date.
function buildSlotSegLevels(segs){var i,seg,j,levels=[];for(i=0;i<segs.length;i++){
// go through all the levels and stop on the first level where there are no collisions
for(seg=segs[i],j=0;j<levels.length&&computeSlotSegCollisions(seg,levels[j]).length;j++);seg.level=j,(levels[j]||(levels[j]=[])).push(seg)}return levels}
// For every segment, figure out the other segments that are in subsequent
// levels that also occupy the same vertical space. Accumulate in seg.forwardSegs
function computeForwardSlotSegs(levels){var i,level,j,seg,k;for(i=0;i<levels.length;i++)for(level=levels[i],j=0;j<level.length;j++)for(seg=level[j],seg.forwardSegs=[],k=i+1;k<levels.length;k++)computeSlotSegCollisions(seg,levels[k],seg.forwardSegs)}
// Figure out which path forward (via seg.forwardSegs) results in the longest path until
// the furthest edge is reached. The number of segments in this path will be seg.forwardPressure
function computeSlotSegPressures(seg){var i,forwardSeg,forwardSegs=seg.forwardSegs,forwardPressure=0;if(void 0===seg.forwardPressure){// not already computed
for(i=0;i<forwardSegs.length;i++)forwardSeg=forwardSegs[i],
// figure out the child's maximum forward path
computeSlotSegPressures(forwardSeg),
// either use the existing maximum, or use the child's forward pressure
// plus one (for the forwardSeg itself)
forwardPressure=Math.max(forwardPressure,1+forwardSeg.forwardPressure);seg.forwardPressure=forwardPressure}}
// Find all the segments in `otherSegs` that vertically collide with `seg`.
// Append into an optionally-supplied `results` array and return.
function computeSlotSegCollisions(seg,otherSegs,results){results=results||[];for(var i=0;i<otherSegs.length;i++)isSlotSegCollision(seg,otherSegs[i])&&results.push(otherSegs[i]);return results}
// Do these segments occupy the same vertical space?
function isSlotSegCollision(seg1,seg2){return seg1.bottom>seg2.top&&seg1.top<seg2.bottom}function Iterator(items){this.items=items||[]}/* Toolbar with buttons and title
----------------------------------------------------------------------------------------------------------------------*/
function Toolbar(calendar,toolbarOptions){
// method to update toolbar-specific options, not calendar-wide options
function setToolbarOptions(newToolbarOptions){toolbarOptions=newToolbarOptions}
// can be called repeatedly and will rerender
function render(){var sections=toolbarOptions.layout;tm=calendar.opt("theme")?"ui":"fc",sections?(el?el.empty():el=this.el=$("<div class='fc-toolbar "+toolbarOptions.extraClasses+"'/>"),el.append(renderSection("left")).append(renderSection("right")).append(renderSection("center")).append('<div class="fc-clear"/>')):removeElement()}function removeElement(){el&&(el.remove(),el=t.el=null)}function renderSection(position){var sectionEl=$('<div class="fc-'+position+'"/>'),buttonStr=toolbarOptions.layout[position],calendarCustomButtons=calendar.opt("customButtons")||{},calendarButtonText=calendar.opt("buttonText")||{};return buttonStr&&$.each(buttonStr.split(" "),function(i){var groupEl,groupChildren=$(),isOnlyButtons=!0;$.each(this.split(","),function(j,buttonName){var customButtonProps,viewSpec,buttonClick,overrideText,defaultText,themeIcon,normalIcon,innerHtml,classes,button;// the element
"title"==buttonName?(groupChildren=groupChildren.add($("<h2>&nbsp;</h2>")),// we always want it to take up height
isOnlyButtons=!1):((customButtonProps=calendarCustomButtons[buttonName])?(buttonClick=function(ev){customButtonProps.click&&customButtonProps.click.call(button[0],ev)},overrideText="",// icons will override text
defaultText=customButtonProps.text):(viewSpec=calendar.getViewSpec(buttonName))?(buttonClick=function(){calendar.changeView(buttonName)},viewsWithButtons.push(buttonName),overrideText=viewSpec.buttonTextOverride,defaultText=viewSpec.buttonTextDefault):calendar[buttonName]&&(// a calendar method
buttonClick=function(){calendar[buttonName]()},overrideText=(calendar.overrides.buttonText||{})[buttonName],defaultText=calendarButtonText[buttonName]),buttonClick&&(themeIcon=customButtonProps?customButtonProps.themeIcon:calendar.opt("themeButtonIcons")[buttonName],normalIcon=customButtonProps?customButtonProps.icon:calendar.opt("buttonIcons")[buttonName],innerHtml=overrideText?htmlEscape(overrideText):themeIcon&&calendar.opt("theme")?"<span class='ui-icon ui-icon-"+themeIcon+"'></span>":normalIcon&&!calendar.opt("theme")?"<span class='fc-icon fc-icon-"+normalIcon+"'></span>":htmlEscape(defaultText),classes=["fc-"+buttonName+"-button",tm+"-button",tm+"-state-default"],button=$(// type="button" so that it doesn't submit a form
'<button type="button" class="'+classes.join(" ")+'">'+innerHtml+"</button>").click(function(ev){
// don't process clicks for disabled buttons
button.hasClass(tm+"-state-disabled")||(buttonClick(ev),
// after the click action, if the button becomes the "active" tab, or disabled,
// it should never have a hover class, so remove it now.
(button.hasClass(tm+"-state-active")||button.hasClass(tm+"-state-disabled"))&&button.removeClass(tm+"-state-hover"))}).mousedown(function(){
// the *down* effect (mouse pressed in).
// only on buttons that are not the "active" tab, or disabled
button.not("."+tm+"-state-active").not("."+tm+"-state-disabled").addClass(tm+"-state-down")}).mouseup(function(){
// undo the *down* effect
button.removeClass(tm+"-state-down")}).hover(function(){
// the *hover* effect.
// only on buttons that are not the "active" tab, or disabled
button.not("."+tm+"-state-active").not("."+tm+"-state-disabled").addClass(tm+"-state-hover")},function(){
// undo the *hover* effect
button.removeClass(tm+"-state-hover").removeClass(tm+"-state-down")}),groupChildren=groupChildren.add(button)))}),isOnlyButtons&&groupChildren.first().addClass(tm+"-corner-left").end().last().addClass(tm+"-corner-right").end(),groupChildren.length>1?(groupEl=$("<div/>"),isOnlyButtons&&groupEl.addClass("fc-button-group"),groupEl.append(groupChildren),sectionEl.append(groupEl)):sectionEl.append(groupChildren)}),sectionEl}function updateTitle(text){el&&el.find("h2").text(text)}function activateButton(buttonName){el&&el.find(".fc-"+buttonName+"-button").addClass(tm+"-state-active")}function deactivateButton(buttonName){el&&el.find(".fc-"+buttonName+"-button").removeClass(tm+"-state-active")}function disableButton(buttonName){el&&el.find(".fc-"+buttonName+"-button").prop("disabled",!0).addClass(tm+"-state-disabled")}function enableButton(buttonName){el&&el.find(".fc-"+buttonName+"-button").prop("disabled",!1).removeClass(tm+"-state-disabled")}function getViewsWithButtons(){return viewsWithButtons}var t=this;
// exports
t.setToolbarOptions=setToolbarOptions,t.render=render,t.removeElement=removeElement,t.updateTitle=updateTitle,t.activateButton=activateButton,t.deactivateButton=deactivateButton,t.disableButton=disableButton,t.enableButton=enableButton,t.getViewsWithButtons=getViewsWithButtons,t.el=null;// mirrors local `el`
// locals
var el,tm,viewsWithButtons=[]}
// TODO: make these computable properties in optionsModel
function populateInstanceComputableOptions(options){$.each(instanceComputableOptions,function(name,func){null==options[name]&&(options[name]=func(options))})}
// Returns moment's internal locale data. If doesn't exist, returns English.
function getMomentLocaleData(localeCode){return moment.localeData(localeCode)||moment.localeData("en")}function EventManager(){function requestEvents(start,end){return!t.opt("lazyFetching")||isFetchNeeded(start,end)?fetchEvents(start,end):Promise.resolve(prunedCache)}function reportEventChange(){prunedCache=filterEventsWithinRange(cache),t.trigger("eventsReset",prunedCache)}function filterEventsWithinRange(events){var i,event,filteredEvents=[];for(i=0;i<events.length;i++)event=events[i],event.start.clone().stripZone()<rangeEnd&&t.getEventEnd(event).stripZone()>rangeStart&&filteredEvents.push(event);return filteredEvents}/* Fetching
	-----------------------------------------------------------------------------*/
// start and end are assumed to be unzoned
function isFetchNeeded(start,end){// nothing has been fetched yet?
return!rangeStart||start<rangeStart||end>rangeEnd}function fetchEvents(start,end){return rangeStart=start,rangeEnd=end,refetchEvents()}
// poorly named. fetches all sources with current `rangeStart` and `rangeEnd`.
function refetchEvents(){return fetchEventSources(sources,"reset")}
// poorly named. fetches a subset of event sources.
function refetchEventSources(matchInputs){return fetchEventSources(getEventSourcesByMatchArray(matchInputs))}
// expects an array of event source objects (the originals, not copies)
// `specialFetchType` is an optimization parameter that affects purging of the event cache.
function fetchEventSources(specificSources,specialFetchType){var i,source;for("reset"===specialFetchType?cache=[]:"add"!==specialFetchType&&(cache=excludeEventsBySources(cache,specificSources)),i=0;i<specificSources.length;i++)source=specificSources[i],
// already-pending sources have already been accounted for in pendingSourceCnt
"pending"!==source._status&&pendingSourceCnt++,source._fetchId=(source._fetchId||0)+1,source._status="pending";for(i=0;i<specificSources.length;i++)source=specificSources[i],tryFetchEventSource(source,source._fetchId);return pendingSourceCnt?Promise.construct(function(resolve){t.one("eventsReceived",resolve)}):Promise.resolve(prunedCache)}
// fetches an event source and processes its result ONLY if it is still the current fetch.
// caller is responsible for incrementing pendingSourceCnt first.
function tryFetchEventSource(source,fetchId){_fetchEventSource(source,function(eventInputs){var i,eventInput,abstractEvent,isArraySource=$.isArray(source.events);if(
// is this the source's most recent fetch?
// if not, rely on an upcoming fetch of this source to decrement pendingSourceCnt
fetchId===source._fetchId&&
// event source no longer valid?
"rejected"!==source._status){if(source._status="resolved",eventInputs)for(i=0;i<eventInputs.length;i++)eventInput=eventInputs[i],(// array sources have already been convert to Event Objects
abstractEvent=isArraySource?eventInput:buildEventFromInput(eventInput,source))&&// not false (an invalid event)
cache.push.apply(// append
cache,expandEvent(abstractEvent));decrementPendingSourceCnt()}})}function rejectEventSource(source){var wasPending="pending"===source._status;source._status="rejected",wasPending&&decrementPendingSourceCnt()}function decrementPendingSourceCnt(){--pendingSourceCnt||(reportEventChange(cache),// updates prunedCache
t.trigger("eventsReceived",prunedCache))}function _fetchEventSource(source,callback){var i,res,fetchers=FC.sourceFetchers;for(i=0;i<fetchers.length;i++){if(!0===(res=fetchers[i].call(t,// this, the Calendar object
source,rangeStart.clone(),rangeEnd.clone(),t.opt("timezone"),callback)))
// the fetcher is in charge. made its own async request
return;if("object"==typeof res)
// the fetcher returned a new source. process it
return void _fetchEventSource(res,callback)}var events=source.events;if(events)$.isFunction(events)?(t.pushLoading(),events.call(t,// this, the Calendar object
rangeStart.clone(),rangeEnd.clone(),t.opt("timezone"),function(events){callback(events),t.popLoading()})):$.isArray(events)?callback(events):callback();else{if(source.url){var customData,success=source.success,error=source.error,complete=source.complete;
// supplied as a function that returns a key/value object
customData=$.isFunction(source.data)?source.data():source.data;
// use a copy of the custom data so we can modify the parameters
// and not affect the passed-in object.
var data=$.extend({},customData||{}),startParam=firstDefined(source.startParam,t.opt("startParam")),endParam=firstDefined(source.endParam,t.opt("endParam")),timezoneParam=firstDefined(source.timezoneParam,t.opt("timezoneParam"));startParam&&(data[startParam]=rangeStart.format()),endParam&&(data[endParam]=rangeEnd.format()),t.opt("timezone")&&"local"!=t.opt("timezone")&&(data[timezoneParam]=t.opt("timezone")),t.pushLoading(),$.ajax($.extend({},ajaxDefaults,source,{data:data,success:function(events){events=events||[];var res=applyAll(success,this,arguments);$.isArray(res)&&(events=res),callback(events)},error:function(){applyAll(error,this,arguments),callback()},complete:function(){applyAll(complete,this,arguments),t.popLoading()}}))}else callback()}}/* Sources
	-----------------------------------------------------------------------------*/
function addEventSource(sourceInput){var source=buildEventSource(sourceInput);source&&(sources.push(source),fetchEventSources([source],"add"))}function buildEventSource(sourceInput){// will return undefined if invalid source
var source,i,normalizers=FC.sourceNormalizers;if($.isFunction(sourceInput)||$.isArray(sourceInput)?source={events:sourceInput}:"string"==typeof sourceInput?source={url:sourceInput}:"object"==typeof sourceInput&&(source=$.extend({},sourceInput)),source){for(
// TODO: repeat code, same code for event classNames
source.className?"string"==typeof source.className&&(source.className=source.className.split(/\s+/)):source.className=[],
// for array sources, we convert to standard Event Objects up front
$.isArray(source.events)&&(source.origArray=source.events,// for removeEventSource
source.events=$.map(source.events,function(eventInput){return buildEventFromInput(eventInput,source)})),i=0;i<normalizers.length;i++)normalizers[i].call(t,source);return source}}function removeEventSource(matchInput){removeSpecificEventSources(getEventSourcesByMatch(matchInput))}
// if called with no arguments, removes all.
function removeEventSources(matchInputs){null==matchInputs?removeSpecificEventSources(sources,!0):removeSpecificEventSources(getEventSourcesByMatchArray(matchInputs))}function removeSpecificEventSources(targetSources,isAll){var i;
// cancel pending requests
for(i=0;i<targetSources.length;i++)rejectEventSource(targetSources[i]);isAll?(// an optimization
sources=[],cache=[]):(
// remove from persisted source list
sources=$.grep(sources,function(source){for(i=0;i<targetSources.length;i++)if(source===targetSources[i])return!1;return!0}),cache=excludeEventsBySources(cache,targetSources)),reportEventChange()}function getEventSources(){return sources.slice(1)}function getEventSourceById(id){return $.grep(sources,function(source){return source.id&&source.id===id})[0]}
// like getEventSourcesByMatch, but accepts multple match criteria (like multiple IDs)
function getEventSourcesByMatchArray(matchInputs){
// coerce into an array
matchInputs?$.isArray(matchInputs)||(matchInputs=[matchInputs]):matchInputs=[];var i,matchingSources=[];
// resolve raw inputs to real event source objects
for(i=0;i<matchInputs.length;i++)matchingSources.push.apply(// append
matchingSources,getEventSourcesByMatch(matchInputs[i]));return matchingSources}
// matchInput can either by a real event source object, an ID, or the function/URL for the source.
// returns an array of matching source objects.
function getEventSourcesByMatch(matchInput){var i,source;
// given an proper event source object
for(i=0;i<sources.length;i++)if((source=sources[i])===matchInput)return[source];
// an ID match
return source=getEventSourceById(matchInput),source?[source]:$.grep(sources,function(source){return isSourcesEquivalent(matchInput,source)})}function isSourcesEquivalent(source1,source2){return source1&&source2&&getSourcePrimitive(source1)==getSourcePrimitive(source2)}function getSourcePrimitive(source){// a normalized event source?
// get the primitive
return("object"==typeof source?source.origArray||source.googleCalendarId||source.url||source.events:null)||source}
// util
// returns a filtered array without events that are part of any of the given sources
function excludeEventsBySources(specificEvents,specificSources){return $.grep(specificEvents,function(event){for(var i=0;i<specificSources.length;i++)if(event.source===specificSources[i])return!1;return!0})}/* Manipulation
	-----------------------------------------------------------------------------*/
// Only ever called from the externally-facing API
function updateEvent(event){updateEvents([event])}
// Only ever called from the externally-facing API
function updateEvents(events){var i,event;for(i=0;i<events.length;i++)event=events[i],
// massage start/end values, even if date string values
event.start=t.moment(event.start),event.end?event.end=t.moment(event.end):event.end=null,mutateEvent(event,getMiscEventProps(event));reportEventChange()}
// Returns a hash of misc event properties that should be copied over to related events.
function getMiscEventProps(event){var props={};return $.each(event,function(name,val){isMiscEventPropName(name)&&void 0!==val&&isAtomic(val)&&(// a defined non-object
props[name]=val)}),props}
// non-date-related, non-id-related, non-secret
function isMiscEventPropName(name){return!/^_|^(id|allDay|start|end)$/.test(name)}
// returns the expanded events that were created
function renderEvent(eventInput,stick){return renderEvents([eventInput],stick)}
// returns the expanded events that were created
function renderEvents(eventInputs,stick){var renderableEvents,abstractEvent,i,j,event,renderedEvents=[];for(i=0;i<eventInputs.length;i++)if(abstractEvent=buildEventFromInput(eventInputs[i])){for(// not false (a valid input)
renderableEvents=expandEvent(abstractEvent),j=0;j<renderableEvents.length;j++)event=renderableEvents[j],event.source||(stick&&(stickySource.events.push(event),event.source=stickySource),cache.push(event));renderedEvents=renderedEvents.concat(renderableEvents)}// any new events rendered?
return renderedEvents.length&&reportEventChange(),renderedEvents}function removeEvents(filter){var eventID,i;// inverse=true
// Remove events from array sources.
// This works because they have been converted to official Event Objects up front.
// (and as a result, event._id has been calculated).
for(null==filter?// null or undefined. remove all events
filter=function(){return!0}:$.isFunction(filter)||(// an event ID
eventID=filter+"",filter=function(event){return event._id==eventID}),
// Purge event(s) from our local cache
cache=$.grep(cache,filter,!0),i=0;i<sources.length;i++)$.isArray(sources[i].events)&&(sources[i].events=$.grep(sources[i].events,filter,!0));reportEventChange()}function clientEvents(filter){// not null, not undefined. an event ID
return $.isFunction(filter)?$.grep(cache,filter):null!=filter?(filter+="",$.grep(cache,function(e){return e._id==filter})):cache}function rezoneEventDates(event){event.start=t.moment(event.start),event.end&&(event.end=t.moment(event.end)),backupEventDates(event)}/* Event Normalization
	-----------------------------------------------------------------------------*/
// Given a raw object with key/value properties, returns an "abstract" Event object.
// An "abstract" event is an event that, if recurring, will not have been expanded yet.
// Will return `false` when input is invalid.
// `source` is optional
function buildEventFromInput(input,source){var start,end,allDay,calendarEventDataTransform=t.opt("eventDataTransform"),out={};if(calendarEventDataTransform&&(input=calendarEventDataTransform(input)),source&&source.eventDataTransform&&(input=source.eventDataTransform(input)),
// Copy all properties over to the resulting object.
// The special-case properties will be copied over afterwards.
$.extend(out,input),source&&(out.source=source),out._id=input._id||(void 0===input.id?"_fc"+eventGUID++:input.id+""),input.className?"string"==typeof input.className?out.className=input.className.split(/\s+/):// assumed to be an array
out.className=input.className:out.className=[],start=input.start||input.date,// "date" is an alias for "start"
end=input.end,
// parse as a time (Duration) if applicable
isTimeString(start)&&(start=moment.duration(start)),isTimeString(end)&&(end=moment.duration(end)),input.dow||moment.isDuration(start)||moment.isDuration(end))
// the event is "abstract" (recurring) so don't calculate exact start/end dates just yet
out.start=start?moment.duration(start):null,// will be a Duration or null
out.end=end?moment.duration(end):null,// will be a Duration or null
out._recurring=!0;else{if(start&&(start=t.moment(start),!start.isValid()))return!1;end&&(end=t.moment(end),end.isValid()||(end=null)),allDay=input.allDay,void 0===allDay&&(// still undefined? fallback to default
allDay=firstDefined(source?source.allDayDefault:void 0,t.opt("allDayDefault"))),assignDatesToEvent(start,end,allDay,out)}// hook for external use. a prototype method
return t.normalizeEvent(out),out}
// Normalizes and assigns the given dates to the given partially-formed event object.
// NOTE: mutates the given start/end moments. does not make a copy.
function assignDatesToEvent(start,end,allDay,event){event.start=start,event.end=end,event.allDay=allDay,normalizeEventDates(event),backupEventDates(event)}
// Ensures proper values for allDay/start/end. Accepts an Event object, or a plain object with event-ish properties.
// NOTE: Will modify the given object.
function normalizeEventDates(eventProps){normalizeEventTimes(eventProps),eventProps.end&&!eventProps.end.isAfter(eventProps.start)&&(eventProps.end=null),eventProps.end||(t.opt("forceEventDuration")?eventProps.end=t.getDefaultEventEnd(eventProps.allDay,eventProps.start):eventProps.end=null)}
// Ensures the allDay property exists and the timeliness of the start/end dates are consistent
function normalizeEventTimes(eventProps){null==eventProps.allDay&&(eventProps.allDay=!(eventProps.start.hasTime()||eventProps.end&&eventProps.end.hasTime())),eventProps.allDay?(eventProps.start.stripTime(),eventProps.end&&
// TODO: consider nextDayThreshold here? If so, will require a lot of testing and adjustment
eventProps.end.stripTime()):(eventProps.start.hasTime()||(eventProps.start=t.applyTimezone(eventProps.start.time(0))),eventProps.end&&!eventProps.end.hasTime()&&(eventProps.end=t.applyTimezone(eventProps.end.time(0))))}
// If the given event is a recurring event, break it down into an array of individual instances.
// If not a recurring event, return an array with the single original event.
// If given a falsy input (probably because of a failed buildEventFromInput call), returns an empty array.
// HACK: can override the recurring window by providing custom rangeStart/rangeEnd (for businessHours).
function expandEvent(abstractEvent,_rangeStart,_rangeEnd){var dowHash,dow,i,date,startTime,endTime,start,end,event,events=[];if(_rangeStart=_rangeStart||rangeStart,_rangeEnd=_rangeEnd||rangeEnd,abstractEvent)if(abstractEvent._recurring){
// make a boolean hash as to whether the event occurs on each day-of-week
if(dow=abstractEvent.dow)for(dowHash={},i=0;i<dow.length;i++)dowHash[dow[i]]=!0;// holds the date of the current day
for(
// iterate through every day in the current range
date=_rangeStart.clone().stripTime();date.isBefore(_rangeEnd);)dowHash&&!dowHash[date.day()]||(// if everyday, or this particular day-of-week
startTime=abstractEvent.start,// the stored start and end properties are times (Durations)
endTime=abstractEvent.end,// "
start=date.clone(),end=null,startTime&&(start=start.time(startTime)),endTime&&(end=date.clone().time(endTime)),event=$.extend({},abstractEvent),// make a copy of the original
assignDatesToEvent(start,end,!startTime&&!endTime,// allDay?
event),events.push(event)),date.add(1,"days")}else events.push(abstractEvent);return events}/* Event Modification Math
	-----------------------------------------------------------------------------------------*/
// Modifies an event and all related events by applying the given properties.
// Special date-diffing logic is used for manipulation of dates.
// If `props` does not contain start/end dates, the updated values are assumed to be the event's current start/end.
// All date comparisons are done against the event's pristine _start and _end dates.
// Returns an object with delta information and a function to undo all operations.
// For making computations in a granularity greater than day/time, specify largeUnit.
// NOTE: The given `newProps` might be mutated for normalization purposes.
function mutateEvent(event,newProps,largeUnit){
// diffs the dates in the appropriate way, returning a duration
function diffDates(date1,date0){// date1 - date0
// date1 - date0
return largeUnit?diffByUnit(date1,date0,largeUnit):newProps.allDay?diffDay(date1,date0):diffDayTime(date1,date0)}var oldProps,clearEnd,startDelta,endDelta,durationDelta,undoFunc,miscProps={};
// normalize new date-related properties
// is null or undefined?
// create normalized versions of the original props to compare against
// need a real end value, for diffing
// need to clear the end date if explicitly changed to null
// compute the delta for moving the start date
// compute the delta for moving the end date
// gather all non-date-related properties
// apply the operations to the event and all related events
// get events with this ID
return newProps=newProps||{},newProps.start||(newProps.start=event.start.clone()),void 0===newProps.end&&(newProps.end=event.end?event.end.clone():null),null==newProps.allDay&&(newProps.allDay=event.allDay),normalizeEventDates(newProps),oldProps={start:event._start.clone(),end:event._end?event._end.clone():t.getDefaultEventEnd(event._allDay,event._start),allDay:newProps.allDay},normalizeEventDates(oldProps),clearEnd=null!==event._end&&null===newProps.end,startDelta=diffDates(newProps.start,oldProps.start),newProps.end?(endDelta=diffDates(newProps.end,oldProps.end),durationDelta=endDelta.subtract(startDelta)):durationDelta=null,$.each(newProps,function(name,val){isMiscEventPropName(name)&&void 0!==val&&(miscProps[name]=val)}),undoFunc=mutateEvents(clientEvents(event._id),clearEnd,newProps.allDay,startDelta,durationDelta,miscProps),{dateDelta:startDelta,durationDelta:durationDelta,undo:undoFunc}}
// Modifies an array of events in the following ways (operations are in order):
// - clear the event's `end`
// - convert the event to allDay
// - add `dateDelta` to the start and end
// - add `durationDelta` to the event's duration
// - assign `miscProps` to the event
//
// Returns a function that can be called to undo all the operations.
//
// TODO: don't use so many closures. possible memory issues when lots of events with same ID.
//
function mutateEvents(events,clearEnd,allDay,dateDelta,durationDelta,miscProps){var isAmbigTimezone=t.getIsAmbigTimezone(),undoFunctions=[];
// normalize zero-length deltas to be null
return dateDelta&&!dateDelta.valueOf()&&(dateDelta=null),durationDelta&&!durationDelta.valueOf()&&(durationDelta=null),$.each(events,function(i,event){var oldProps,newProps;
// build an object holding all the old values, both date-related and misc.
// for the undo function.
oldProps={start:event.start.clone(),end:event.end?event.end.clone():null,allDay:event.allDay},$.each(miscProps,function(name){oldProps[name]=event[name]}),
// new date-related properties. work off the original date snapshot.
// ok to use references because they will be thrown away when backupEventDates is called.
newProps={start:event._start,end:event._end,allDay:allDay},normalizeEventDates(newProps),// massages start/end/allDay
// strip or ensure the end date
clearEnd?newProps.end=null:durationDelta&&!newProps.end&&(// the duration translation requires an end date
newProps.end=t.getDefaultEventEnd(newProps.allDay,newProps.start)),dateDelta&&(newProps.start.add(dateDelta),newProps.end&&newProps.end.add(dateDelta)),durationDelta&&newProps.end.add(durationDelta),
// if the dates have changed, and we know it is impossible to recompute the
// timezone offsets, strip the zone.
isAmbigTimezone&&!newProps.allDay&&(dateDelta||durationDelta)&&(newProps.start.stripZone(),newProps.end&&newProps.end.stripZone()),$.extend(event,miscProps,newProps),// copy over misc props, then date-related props
backupEventDates(event),// regenerate internal _start/_end/_allDay
undoFunctions.push(function(){$.extend(event,oldProps),backupEventDates(event)})}),function(){for(var i=0;i<undoFunctions.length;i++)undoFunctions[i]()}}// assumed to be a calendar
var t=this;
// exports
t.requestEvents=requestEvents,t.reportEventChange=reportEventChange,t.isFetchNeeded=isFetchNeeded,t.fetchEvents=fetchEvents,t.fetchEventSources=fetchEventSources,t.refetchEvents=refetchEvents,t.refetchEventSources=refetchEventSources,t.getEventSources=getEventSources,t.getEventSourceById=getEventSourceById,t.addEventSource=addEventSource,t.removeEventSource=removeEventSource,t.removeEventSources=removeEventSources,t.updateEvent=updateEvent,t.updateEvents=updateEvents,t.renderEvent=renderEvent,t.renderEvents=renderEvents,t.removeEvents=removeEvents,t.clientEvents=clientEvents,t.mutateEvent=mutateEvent,t.normalizeEventDates=normalizeEventDates,t.normalizeEventTimes=normalizeEventTimes;
// locals
var rangeStart,rangeEnd,prunedCache,stickySource={events:[]},sources=[stickySource],pendingSourceCnt=0,cache=[];// like cache, but only events that intersect with rangeStart/rangeEnd
$.each((t.opt("events")?[t.opt("events")]:[]).concat(t.opt("eventSources")||[]),function(i,sourceInput){var source=buildEventSource(sourceInput);source&&sources.push(source)}),t.getEventCache=function(){return cache},
// Makes sure all array event sources have their internal event objects
// converted over to the Calendar's current timezone.
t.rezoneArrayEventSources=function(){var i,events,j;for(i=0;i<sources.length;i++)if(events=sources[i].events,$.isArray(events))for(j=0;j<events.length;j++)rezoneEventDates(events[j])},t.buildEventFromInput=buildEventFromInput,t.expandEvent=expandEvent}
// updates the "backup" properties, which are preserved in order to compute diffs later on.
function backupEventDates(event){event._allDay=event.allDay,event._start=event.start.clone(),event._end=event.end?event.end.clone():null}var FC=$.fullCalendar={version:"3.4.0",
// When introducing internal API incompatibilities (where fullcalendar plugins would break),
// the minor version of the calendar should be upped (ex: 2.7.2 -> 2.8.0)
// and the below integer should be incremented.
internalApiVersion:9},fcViews=FC.views={};$.fn.fullCalendar=function(options){var args=Array.prototype.slice.call(arguments,1),res=this;// what this function will return (this jQuery object by default)
return this.each(function(i,_element){// loop each DOM element involved
var singleRes,element=$(_element),calendar=element.data("fullCalendar");// the returned value of this single method call
// a method call
"string"==typeof options?calendar&&$.isFunction(calendar[options])&&(singleRes=calendar[options].apply(calendar,args),i||(res=singleRes),"destroy"===options&&// for the destroy method, must remove Calendar object data
element.removeData("fullCalendar")):calendar||(// don't initialize twice
calendar=new Calendar(element,options),element.data("fullCalendar",calendar),calendar.render())}),res};var complexOptions=[// names of options that are objects whose properties should be combined
"header","footer","buttonText","buttonIcons","themeButtonIcons"];
// exports
FC.intersectRanges=intersectRanges,FC.applyAll=applyAll,FC.debounce=debounce,FC.isInt=isInt,FC.htmlEscape=htmlEscape,FC.cssToStr=cssToStr,FC.proxy=proxy,FC.capitaliseFirstLetter=capitaliseFirstLetter,/* Element Geom Utilities
----------------------------------------------------------------------------------------------------------------------*/
FC.getOuterRect=getOuterRect,FC.getClientRect=getClientRect,FC.getContentRect=getContentRect,FC.getScrollbarWidths=getScrollbarWidths;
// Logic for determining if, when the element is right-to-left, the scrollbar appears on the left side
var _isLeftRtlScrollbars=null;/* Mouse / Touch Utilities
----------------------------------------------------------------------------------------------------------------------*/
FC.preventDefault=preventDefault,/* General Geometry Utils
----------------------------------------------------------------------------------------------------------------------*/
FC.intersectRects=intersectRects,/* Object Ordering by Field
----------------------------------------------------------------------------------------------------------------------*/
FC.parseFieldSpecs=parseFieldSpecs,FC.compareByFieldSpecs=compareByFieldSpecs,FC.compareByFieldSpec=compareByFieldSpec,FC.flexibleCompare=flexibleCompare,/* Date Utilities
----------------------------------------------------------------------------------------------------------------------*/
FC.computeGreatestUnit=computeGreatestUnit,FC.divideRangeByDuration=divideRangeByDuration,FC.divideDurationByDuration=divideDurationByDuration,FC.multiplyDuration=multiplyDuration,FC.durationHasTime=durationHasTime;var dayIDs=["sun","mon","tue","wed","thu","fri","sat"],unitsDesc=["year","month","week","day","hour","minute","second","millisecond"];/* Logging and Debug
----------------------------------------------------------------------------------------------------------------------*/
FC.log=function(){var console=window.console;if(console&&console.log)return console.log.apply(console,arguments)},FC.warn=function(){var console=window.console;return console&&console.warn?console.warn.apply(console,arguments):FC.log.apply(FC,arguments)};/* General Utilities
----------------------------------------------------------------------------------------------------------------------*/
var hasOwnPropMethod={}.hasOwnProperty;FC.createObject=createObject;/*
GENERAL NOTE on moments throughout the *entire rest* of the codebase:
All moments are assumed to be ambiguously-zoned unless otherwise noted,
with the NOTABLE EXCEOPTION of start/end dates that live on *Event Objects*.
Ambiguously-TIMED moments are assumed to be ambiguously-zoned by nature.
*/
var ambigDateOfMonthRegex=/^\s*\d{4}-\d\d$/,ambigTimeOrZoneRegex=/^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/,newMomentProto=moment.fn,oldMomentProto=$.extend({},newMomentProto),momentProperties=moment.momentProperties;momentProperties.push("_fullCalendar"),momentProperties.push("_ambigTime"),momentProperties.push("_ambigZone"),
// Creating
// -------------------------------------------------------------------------------------------------
// Creates a new moment, similar to the vanilla moment(...) constructor, but with
// extra features (ambiguous time, enhanced formatting). When given an existing moment,
// it will function as a clone (and retain the zone of the moment). Anything else will
// result in a moment in the local zone.
FC.moment=function(){return makeMoment(arguments)},
// Sames as FC.moment, but forces the resulting moment to be in the UTC timezone.
FC.moment.utc=function(){var mom=makeMoment(arguments,!0);
// Force it into UTC because makeMoment doesn't guarantee it
// (if given a pre-existing moment for example)
// don't give ambiguously-timed moments a UTC zone
return mom.hasTime()&&mom.utc(),mom},
// Same as FC.moment, but when given an ISO8601 string, the timezone offset is preserved.
// ISO8601 strings with no timezone offset will become ambiguously zoned.
FC.moment.parseZone=function(){return makeMoment(arguments,!0,!0)},
// Week Number
// -------------------------------------------------------------------------------------------------
// Returns the week number, considering the locale's custom week number calcuation
// `weeks` is an alias for `week`
newMomentProto.week=newMomentProto.weeks=function(input){var weekCalc=this._locale._fullCalendar_weekCalc;return null==input&&"function"==typeof weekCalc?weekCalc(this):"ISO"===weekCalc?oldMomentProto.isoWeek.apply(this,arguments):oldMomentProto.week.apply(this,arguments)},
// Time-of-day
// -------------------------------------------------------------------------------------------------
// GETTER
// Returns a Duration with the hours/minutes/seconds/ms values of the moment.
// If the moment has an ambiguous time, a duration of 00:00 will be returned.
//
// SETTER
// You can supply a Duration, a Moment, or a Duration-like argument.
// When setting the time, and the moment has an ambiguous time, it then becomes unambiguous.
newMomentProto.time=function(time){
// Fallback to the original method (if there is one) if this moment wasn't created via FullCalendar.
// `time` is a generic enough method name where this precaution is necessary to avoid collisions w/ other plugins.
if(!this._fullCalendar)return oldMomentProto.time.apply(this,arguments);if(null==time)// getter
return moment.duration({hours:this.hours(),minutes:this.minutes(),seconds:this.seconds(),milliseconds:this.milliseconds()});// setter
this._ambigTime=!1,// mark that the moment now has a time
moment.isDuration(time)||moment.isMoment(time)||(time=moment.duration(time));
// The day value should cause overflow (so 24 hours becomes 00:00:00 of next day).
// Only for Duration times, not Moment times.
var dayHours=0;
// We need to set the individual fields.
// Can't use startOf('day') then add duration. In case of DST at start of day.
return moment.isDuration(time)&&(dayHours=24*Math.floor(time.asDays())),this.hours(dayHours+time.hours()).minutes(time.minutes()).seconds(time.seconds()).milliseconds(time.milliseconds())},
// Converts the moment to UTC, stripping out its time-of-day and timezone offset,
// but preserving its YMD. A moment with a stripped time will display no time
// nor timezone offset when .format() is called.
newMomentProto.stripTime=function(){// keepLocalTime=true (for keeping *date* value)
// set time to zero
// Mark the time as ambiguous. This needs to happen after the .utc() call, which might call .utcOffset(),
// which clears all ambig flags.
return this._ambigTime||(this.utc(!0),this.set({hours:0,minutes:0,seconds:0,ms:0}),this._ambigTime=!0,this._ambigZone=!0),this},
// Returns if the moment has a non-ambiguous time (boolean)
newMomentProto.hasTime=function(){return!this._ambigTime},
// Timezone
// -------------------------------------------------------------------------------------------------
// Converts the moment to UTC, stripping out its timezone offset, but preserving its
// YMD and time-of-day. A moment with a stripped timezone offset will display no
// timezone offset when .format() is called.
newMomentProto.stripZone=function(){var wasAmbigTime;// keepLocalTime=true (for keeping date and time values)
// the above call to .utc()/.utcOffset() unfortunately might clear the ambig flags, so restore
// Mark the zone as ambiguous. This needs to happen after the .utc() call, which might call .utcOffset(),
// which clears the ambig flags.
return this._ambigZone||(wasAmbigTime=this._ambigTime,this.utc(!0),this._ambigTime=wasAmbigTime||!1,this._ambigZone=!0),this},
// Returns of the moment has a non-ambiguous timezone offset (boolean)
newMomentProto.hasZone=function(){return!this._ambigZone},
// implicitly marks a zone
newMomentProto.local=function(keepLocalTime){
// for when converting from ambiguously-zoned to local,
// keep the time values when converting from UTC -> local
// ensure non-ambiguous
// this probably already happened via local() -> utcOffset(), but don't rely on Moment's internals
return oldMomentProto.local.call(this,this._ambigZone||keepLocalTime),this._ambigTime=!1,this._ambigZone=!1,this},
// implicitly marks a zone
newMomentProto.utc=function(keepLocalTime){
// ensure non-ambiguous
// this probably already happened via utc() -> utcOffset(), but don't rely on Moment's internals
return oldMomentProto.utc.call(this,keepLocalTime),this._ambigTime=!1,this._ambigZone=!1,this},
// implicitly marks a zone (will probably get called upon .utc() and .local())
newMomentProto.utcOffset=function(tzo){// setter
// these assignments needs to happen before the original zone method is called.
// I forget why, something to do with a browser crash.
return null!=tzo&&(this._ambigTime=!1,this._ambigZone=!1),oldMomentProto.utcOffset.apply(this,arguments)},
// Formatting
// -------------------------------------------------------------------------------------------------
newMomentProto.format=function(){return this._fullCalendar&&arguments[0]?formatDate(this,arguments[0]):this._ambigTime?oldMomentFormat(englishMoment(this),"YYYY-MM-DD"):this._ambigZone?oldMomentFormat(englishMoment(this),"YYYY-MM-DD[T]HH:mm:ss"):this._fullCalendar?oldMomentFormat(englishMoment(this)):oldMomentProto.format.apply(this,arguments)},newMomentProto.toISOString=function(){return this._ambigTime?oldMomentFormat(englishMoment(this),"YYYY-MM-DD"):this._ambigZone?oldMomentFormat(englishMoment(this),"YYYY-MM-DD[T]HH:mm:ss"):this._fullCalendar?oldMomentProto.toISOString.apply(englishMoment(this),arguments):oldMomentProto.toISOString.apply(this,arguments)},function(){
// Single Date Formatting
// ---------------------------------------------------------------------------------------------------------------------
/*
Formats `date` with a Moment formatting string, but allow our non-zero areas and special token
*/
function formatDate(date,formatStr){return renderFakeFormatString(getParsedFormatString(formatStr).fakeFormatString,date)}/*
Call this if you want Moment's original format method to be used
*/
function oldMomentFormat(mom,formatStr){return oldMomentProto.format.call(mom,formatStr)}
// Date Range Formatting
// -------------------------------------------------------------------------------------------------
// TODO: make it work with timezone offset
/*
Using a formatting string meant for a single date, generate a range string, like
"Sep 2 - 9 2013", that intelligently inserts a separator where the dates differ.
If the dates are the same as far as the format string is concerned, just return a single
rendering of one date, without any separator.
*/
function formatRange(date1,date2,formatStr,separator,isRTL){var localeData;
// Expand localized format strings, like "LL" -> "MMMM D YYYY".
// BTW, this is not important for `formatDate` because it is impossible to put custom tokens
// or non-zero areas in Moment's localized format strings.
return date1=FC.moment.parseZone(date1),date2=FC.moment.parseZone(date2),localeData=date1.localeData(),formatStr=localeData.longDateFormat(formatStr)||formatStr,renderParsedFormat(getParsedFormatString(formatStr),date1,date2,separator||" - ",isRTL)}/*
Renders a range with an already-parsed format string.
*/
function renderParsedFormat(parsedFormat,date1,date2,separator,isRTL){var leftI,rightI,middleI,sameUnits=parsedFormat.sameUnits,unzonedDate1=date1.clone().stripZone(),unzonedDate2=date2.clone().stripZone(),renderedParts1=renderFakeFormatStringParts(parsedFormat.fakeFormatString,date1),renderedParts2=renderFakeFormatStringParts(parsedFormat.fakeFormatString,date2),leftStr="",rightStr="",middleStr1="",middleStr2="",middleStr="";
// Start at the leftmost side of the formatting string and continue until you hit a token
// that is not the same between dates.
for(leftI=0;leftI<sameUnits.length&&(!sameUnits[leftI]||unzonedDate1.isSame(unzonedDate2,sameUnits[leftI]));leftI++)leftStr+=renderedParts1[leftI];
// Similarly, start at the rightmost side of the formatting string and move left
for(rightI=sameUnits.length-1;rightI>leftI&&(!sameUnits[rightI]||unzonedDate1.isSame(unzonedDate2,sameUnits[rightI]))&&(rightI-1!==leftI||"."!==renderedParts1[rightI]);rightI--)rightStr=renderedParts1[rightI]+rightStr;
// The area in the middle is different for both of the dates.
// Collect them distinctly so we can jam them together later.
for(middleI=leftI;middleI<=rightI;middleI++)middleStr1+=renderedParts1[middleI],middleStr2+=renderedParts2[middleI];return(middleStr1||middleStr2)&&(middleStr=isRTL?middleStr2+separator+middleStr1:middleStr1+separator+middleStr2),processMaybeMarkers(leftStr+middleStr+rightStr)}/*
Returns a parsed format string, leveraging a cache.
*/
function getParsedFormatString(formatStr){return parsedFormatStrCache[formatStr]||(parsedFormatStrCache[formatStr]=parseFormatString(formatStr))}/*
Parses a format string into the following:
- fakeFormatString: a momentJS formatting string, littered with special control characters that get post-processed.
- sameUnits: for every part in fakeFormatString, if the part is a token, the value will be a unit string (like "day"),
  that indicates how similar a range's start & end must be in order to share the same formatted text.
  If not a token, then the value is null.
  Always a flat array (not nested liked "chunks").
*/
function parseFormatString(formatStr){var chunks=chunkFormatString(formatStr);return{fakeFormatString:buildFakeFormatString(chunks),sameUnits:buildSameUnits(chunks)}}/*
Break the formatting string into an array of chunks.
A 'maybe' chunk will have nested chunks.
*/
function chunkFormatString(formatStr){for(var match,chunks=[],chunker=/\[([^\]]*)\]|\(([^\)]*)\)|(LTS|LT|(\w)\4*o?)|([^\w\[\(]+)/g;match=chunker.exec(formatStr);)match[1]?// a literal string inside [ ... ]
chunks.push.apply(chunks,// append
splitStringLiteral(match[1])):match[2]?// non-zero formatting inside ( ... )
chunks.push({maybe:chunkFormatString(match[2])}):match[3]?// a formatting token
chunks.push({token:match[3]}):match[5]&&// an unenclosed literal string
chunks.push.apply(chunks,// append
splitStringLiteral(match[5]));return chunks}/*
Potentially splits a literal-text string into multiple parts. For special cases.
*/
function splitStringLiteral(s){return". "===s?["."," "]:[s]}/*
Given chunks parsed from a real format string, generate a fake (aka "intermediate") format string with special control
characters that will eventually be given to moment for formatting, and then post-processed.
*/
function buildFakeFormatString(chunks){var i,chunk,parts=[];for(i=0;i<chunks.length;i++)chunk=chunks[i],"string"==typeof chunk?parts.push("["+chunk+"]"):chunk.token?chunk.token in specialTokens?parts.push(SPECIAL_TOKEN_MARKER+// useful during post-processing
"["+chunk.token+"]"):parts.push(chunk.token):chunk.maybe&&parts.push(MAYBE_MARKER+// useful during post-processing
buildFakeFormatString(chunk.maybe)+MAYBE_MARKER);return parts.join(PART_SEPARATOR)}/*
Given parsed chunks from a real formatting string, generates an array of unit strings (like "day") that indicate
in which regard two dates must be similar in order to share range formatting text.
The `chunks` can be nested (because of "maybe" chunks), however, the returned array will be flat.
*/
function buildSameUnits(chunks){var i,chunk,tokenInfo,units=[];for(i=0;i<chunks.length;i++)chunk=chunks[i],chunk.token?(tokenInfo=largeTokenMap[chunk.token.charAt(0)],units.push(tokenInfo?tokenInfo.unit:"second")):chunk.maybe?units.push.apply(units,// append
buildSameUnits(chunk.maybe)):units.push(null);return units}
// Rendering to text
// ---------------------------------------------------------------------------------------------------------------------
/*
Formats a date with a fake format string, post-processes the control characters, then returns.
*/
function renderFakeFormatString(fakeFormatString,date){return processMaybeMarkers(renderFakeFormatStringParts(fakeFormatString,date).join(""))}/*
Formats a date into parts that will have been post-processed, EXCEPT for the "maybe" markers.
*/
function renderFakeFormatStringParts(fakeFormatString,date){var i,fakePart,parts=[],fakeRender=oldMomentFormat(date,fakeFormatString),fakeParts=fakeRender.split(PART_SEPARATOR);for(i=0;i<fakeParts.length;i++)fakePart=fakeParts[i],fakePart.charAt(0)===SPECIAL_TOKEN_MARKER?parts.push(
// the literal string IS the token's name.
// call special token's registered function.
specialTokens[fakePart.substring(1)](date)):parts.push(fakePart);return parts}/*
Accepts an almost-finally-formatted string and processes the "maybe" control characters, returning a new string.
*/
function processMaybeMarkers(s){return s.replace(MAYBE_REGEXP,function(m0,m1){// regex assumed to have 'g' flag
// regex assumed to have 'g' flag
return m1.match(/[1-9]/)?m1:""})}
// Misc Utils
// -------------------------------------------------------------------------------------------------
/*
Returns a unit string, either 'year', 'month', 'day', or null for the most granular formatting token in the string.
*/
function queryMostGranularFormatUnit(formatStr){var i,chunk,candidate,best,chunks=chunkFormatString(formatStr);for(i=0;i<chunks.length;i++)chunk=chunks[i],chunk.token&&(candidate=largeTokenMap[chunk.token.charAt(0)])&&(!best||candidate.value>best.value)&&(best=candidate);return best?best.unit:null}
// exports
FC.formatDate=formatDate,FC.formatRange=formatRange,FC.oldMomentFormat=oldMomentFormat,FC.queryMostGranularFormatUnit=queryMostGranularFormatUnit;
// Config
// ---------------------------------------------------------------------------------------------------------------------
/*
Inserted between chunks in the fake ("intermediate") formatting string.
Important that it passes as whitespace (\s) because moment often identifies non-standalone months
via a regexp with an \s.
*/
var PART_SEPARATOR="\v",SPECIAL_TOKEN_MARKER="",MAYBE_MARKER="",MAYBE_REGEXP=new RegExp(MAYBE_MARKER+"([^"+MAYBE_MARKER+"]*)"+MAYBE_MARKER,"g"),specialTokens={t:function(date){// "a" or "p"
return oldMomentFormat(date,"a").charAt(0)},T:function(date){// "A" or "P"
return oldMomentFormat(date,"A").charAt(0)}},largeTokenMap={Y:{value:1,unit:"year"},M:{value:2,unit:"month"},W:{value:3,unit:"week"},// ISO week
w:{value:3,unit:"week"},// local week
D:{value:4,unit:"day"},// day of month
d:{value:4,unit:"day"}},parsedFormatStrCache={}}();
// quick local references
var formatDate=FC.formatDate,formatRange=FC.formatRange,oldMomentFormat=FC.oldMomentFormat;FC.Class=Class,
// Called on a class to create a subclass.
// Last argument contains instance methods. Any argument before the last are considered mixins.
Class.extend=function(){var i,members,len=arguments.length;for(i=0;i<len;i++)members=arguments[i],i<len-1&&// not the last argument?
mixIntoClass(this,members);return extendClass(this,members||{})},
// Adds new member variables/methods to the class's prototype.
// Can be called with another class, or a plain object hash containing new members.
Class.mixin=function(members){mixIntoClass(this,members)};var Model=Class.extend(EmitterMixin,ListenerMixin,{_props:null,_watchers:null,_globalWatchArgs:null,constructor:function(){this._watchers={},this._props={},this.applyGlobalWatchers()},applyGlobalWatchers:function(){var i,argSets=this._globalWatchArgs||[];for(i=0;i<argSets.length;i++)this.watch.apply(this,argSets[i])},has:function(name){return name in this._props},get:function(name){return void 0===name?this._props:this._props[name]},set:function(name,val){var newProps;"string"==typeof name?(newProps={},newProps[name]=void 0===val?null:val):newProps=name,this.setProps(newProps)},reset:function(newProps){var name,oldProps=this._props,changeset={};for(name in oldProps)changeset[name]=void 0;for(name in newProps)changeset[name]=newProps[name];this.setProps(changeset)},unset:function(name){// accepts a string or array of strings
var names,i,newProps={};for(names="string"==typeof name?[name]:name,i=0;i<names.length;i++)newProps[names[i]]=void 0;this.setProps(newProps)},setProps:function(newProps){var name,val,changedProps={},changedCnt=0;for(name in newProps)
// a change in value?
// if an object, don't check equality, because might have been mutated internally.
// TODO: eventually enforce immutability.
"object"!=typeof(val=newProps[name])&&val===this._props[name]||(changedProps[name]=val,changedCnt++);if(changedCnt){this.trigger("before:batchChange",changedProps);for(name in changedProps)val=changedProps[name],this.trigger("before:change",name,val),this.trigger("before:change:"+name,val);for(name in changedProps)val=changedProps[name],void 0===val?delete this._props[name]:this._props[name]=val,this.trigger("change:"+name,val),this.trigger("change",name,val);this.trigger("batchChange",changedProps)}},watch:function(name,depList,startFunc,stopFunc){var _this=this;this.unwatch(name),this._watchers[name]=this._watchDeps(depList,function(deps){var res=startFunc.call(_this,deps);res&&res.then?(_this.unset(name),// put in an unset state while resolving
res.then(function(val){_this.set(name,val)})):_this.set(name,res)},function(){_this.unset(name),stopFunc&&stopFunc.call(_this)})},unwatch:function(name){var watcher=this._watchers[name];watcher&&(delete this._watchers[name],watcher.teardown())},_watchDeps:function(depList,startFunc,stopFunc){function onBeforeDepChange(depName,val,isOptional){1===++queuedChangeCnt&&satisfyCnt===depCnt&&(// all deps previously satisfied?
isCallingStop=!0,stopFunc(),isCallingStop=!1)}function onDepChange(depName,val,isOptional){void 0===val?(// unsetting a value?
// required dependency that was previously set?
isOptional||void 0===values[depName]||satisfyCnt--,delete values[depName]):(// setting a value?
// required dependency that was previously unset?
isOptional||void 0!==values[depName]||satisfyCnt++,values[depName]=val),--queuedChangeCnt||// last change to cause a "start"?
// now finally satisfied or satisfied all along?
satisfyCnt===depCnt&&(
// if the stopFunc initiated another value change, ignore it.
// it will be processed by another change event anyway.
isCallingStop||startFunc(values))}
// intercept for .on() that remembers handlers
function bind(eventName,handler){_this.on(eventName,handler),bindTuples.push([eventName,handler])}var _this=this,queuedChangeCnt=0,depCnt=depList.length,satisfyCnt=0,values={},bindTuples=[],isCallingStop=!1;
// listen to dependency changes
// process current dependency values
// initially satisfied
return depList.forEach(function(depName){var isOptional=!1;"?"===depName.charAt(0)&&(// TODO: more DRY
depName=depName.substring(1),isOptional=!0),bind("before:change:"+depName,function(val){onBeforeDepChange(depName,val,isOptional)}),bind("change:"+depName,function(val){onDepChange(depName,val,isOptional)})}),depList.forEach(function(depName){var isOptional=!1;"?"===depName.charAt(0)&&(// TODO: more DRY
depName=depName.substring(1),isOptional=!0),_this.has(depName)?(values[depName]=_this.get(depName),satisfyCnt++):isOptional&&satisfyCnt++}),satisfyCnt===depCnt&&startFunc(values),{teardown:function(){
// remove all handlers
for(var i=0;i<bindTuples.length;i++)_this.off(bindTuples[i][0],bindTuples[i][1]);bindTuples=null,
// was satisfied, so call stopFunc
satisfyCnt===depCnt&&stopFunc()},flash:function(){satisfyCnt===depCnt&&(stopFunc(),startFunc(values))}}},flash:function(name){var watcher=this._watchers[name];watcher&&watcher.flash()}});Model.watch=function(){var proto=this.prototype;proto._globalWatchArgs||(proto._globalWatchArgs=[]),proto._globalWatchArgs.push(arguments)},FC.Model=Model;var Promise={construct:function(executor){var deferred=$.Deferred(),promise=deferred.promise();return"function"==typeof executor&&executor(function(val){// resolve
deferred.resolve(val),attachImmediatelyResolvingThen(promise,val)},function(){// reject
deferred.reject(),attachImmediatelyRejectingThen(promise)}),promise},resolve:function(val){var deferred=$.Deferred().resolve(val),promise=deferred.promise();return attachImmediatelyResolvingThen(promise,val),promise},reject:function(){var deferred=$.Deferred().reject(),promise=deferred.promise();return attachImmediatelyRejectingThen(promise),promise}};FC.Promise=Promise;var TaskQueue=Class.extend(EmitterMixin,{q:null,isPaused:!1,isRunning:!1,constructor:function(){this.q=[]},queue:function(){this.q.push.apply(this.q,arguments),// append
this.tryStart()},pause:function(){this.isPaused=!0},resume:function(){this.isPaused=!1,this.tryStart()},tryStart:function(){!this.isRunning&&this.canRunNext()&&(this.isRunning=!0,this.trigger("start"),this.runNext())},canRunNext:function(){return!this.isPaused&&this.q.length},runNext:function(){// does not check canRunNext
this.runTask(this.q.shift())},runTask:function(task){this.runTaskFunc(task)},runTaskFunc:function(taskFunc){function done(){_this.canRunNext()?_this.runNext():(_this.isRunning=!1,_this.trigger("stop"))}var _this=this,res=taskFunc();res&&res.then?res.then(done):done()}});FC.TaskQueue=TaskQueue;var RenderQueue=TaskQueue.extend({waitsByNamespace:null,waitNamespace:null,waitId:null,constructor:function(waitsByNamespace){TaskQueue.call(this),// super-constructor
this.waitsByNamespace=waitsByNamespace||{}},queue:function(taskFunc,namespace,type){var waitMs,task={func:taskFunc,namespace:namespace,type:type};namespace&&(waitMs=this.waitsByNamespace[namespace]),this.waitNamespace&&(namespace===this.waitNamespace&&null!=waitMs?this.delayWait(waitMs):(this.clearWait(),this.tryStart())),this.compoundTask(task)&&(// appended to queue?
this.waitNamespace||null==waitMs?this.tryStart():this.startWait(namespace,waitMs))},startWait:function(namespace,waitMs){this.waitNamespace=namespace,this.spawnWait(waitMs)},delayWait:function(waitMs){clearTimeout(this.waitId),this.spawnWait(waitMs)},spawnWait:function(waitMs){var _this=this;this.waitId=setTimeout(function(){_this.waitNamespace=null,_this.tryStart()},waitMs)},clearWait:function(){this.waitNamespace&&(clearTimeout(this.waitId),this.waitId=null,this.waitNamespace=null)},canRunNext:function(){if(!TaskQueue.prototype.canRunNext.apply(this,arguments))return!1;
// waiting for a certain namespace to stop receiving tasks?
if(this.waitNamespace){
// if there was a different namespace task in the meantime,
// that forces all previously-waiting tasks to suddenly execute.
// TODO: find a way to do this in constant time.
for(var q=this.q,i=0;i<q.length;i++)if(q[i].namespace!==this.waitNamespace)return!0;return!1}return!0},runTask:function(task){this.runTaskFunc(task.func)},compoundTask:function(newTask){var i,task,q=this.q,shouldAppend=!0;if(newTask.namespace&&("destroy"===newTask.type||"init"===newTask.type)){
// remove all add/remove ops with same namespace, regardless of order
for(i=q.length-1;i>=0;i--)task=q[i],task.namespace!==newTask.namespace||"add"!==task.type&&"remove"!==task.type||q.splice(i,1);"destroy"===newTask.type?
// eat away final init/destroy operation
q.length&&(task=q[q.length-1],// last task
task.namespace===newTask.namespace&&(
// the init and our destroy cancel each other out
"init"===task.type?(shouldAppend=!1,q.pop()):"destroy"===task.type&&(shouldAppend=!1))):"init"===newTask.type&&q.length&&(task=q[q.length-1],// last task
task.namespace===newTask.namespace&&"init"===task.type&&
// our init operation takes precedence
q.pop())}return shouldAppend&&q.push(newTask),shouldAppend}});FC.RenderQueue=RenderQueue;var EmitterMixin=FC.EmitterMixin={
// jQuery-ification via $(this) allows a non-DOM object to have
// the same event handling capabilities (including namespaces).
on:function(types,handler){return $(this).on(types,this._prepareIntercept(handler)),this},one:function(types,handler){return $(this).one(types,this._prepareIntercept(handler)),this},_prepareIntercept:function(handler){
// handlers are always called with an "event" object as their first param.
// sneak the `this` context and arguments into the extra parameter object
// and forward them on to the original handler.
var intercept=function(ev,extra){return handler.apply(extra.context||this,extra.args||[])};
// mimick jQuery's internal "proxy" system (risky, I know)
// causing all functions with the same .guid to appear to be the same.
// https://github.com/jquery/jquery/blob/2.2.4/src/core.js#L448
// this is needed for calling .off with the original non-intercept handler.
return handler.guid||(handler.guid=$.guid++),intercept.guid=handler.guid,intercept},off:function(types,handler){return $(this).off(types,handler),this},trigger:function(types){var args=Array.prototype.slice.call(arguments,1);// arguments after the first
// pass in "extra" info to the intercept
return $(this).triggerHandler(types,{args:args}),this},triggerWith:function(types,context,args){
// `triggerHandler` is less reliant on the DOM compared to `trigger`.
// pass in "extra" info to the intercept.
return $(this).triggerHandler(types,{context:context,args:args}),this}},ListenerMixin=FC.ListenerMixin=function(){var guid=0;return{listenerId:null,/*
		Given an `other` object that has on/off methods, bind the given `callback` to an event by the given name.
		The `callback` will be called with the `this` context of the object that .listenTo is being called on.
		Can be called:
			.listenTo(other, eventName, callback)
		OR
			.listenTo(other, {
				eventName1: callback1,
				eventName2: callback2
			})
		*/
listenTo:function(other,arg,callback){if("object"==typeof arg)// given dictionary of callbacks
for(var eventName in arg)arg.hasOwnProperty(eventName)&&this.listenTo(other,eventName,arg[eventName]);else"string"==typeof arg&&other.on(arg+"."+this.getListenerNamespace(),// use event namespacing to identify this object
$.proxy(callback,this))},/*
		Causes the current object to stop listening to events on the `other` object.
		`eventName` is optional. If omitted, will stop listening to ALL events on `other`.
		*/
stopListeningTo:function(other,eventName){other.off((eventName||"")+"."+this.getListenerNamespace())},/*
		Returns a string, unique to this object, to be used for event namespacing
		*/
getListenerNamespace:function(){return null==this.listenerId&&(this.listenerId=guid++),"_listener"+this.listenerId}}}(),Popover=Class.extend(ListenerMixin,{isHidden:!0,options:null,el:null,// the container element for the popover. generated by this object
margin:10,// the space required between the popover and the edges of the scroll container
constructor:function(options){this.options=options||{}},
// Shows the popover on the specified position. Renders it if not already
show:function(){this.isHidden&&(this.el||this.render(),this.el.show(),this.position(),this.isHidden=!1,this.trigger("show"))},
// Hides the popover, through CSS, but does not remove it from the DOM
hide:function(){this.isHidden||(this.el.hide(),this.isHidden=!0,this.trigger("hide"))},
// Creates `this.el` and renders content inside of it
render:function(){var _this=this,options=this.options;this.el=$('<div class="fc-popover"/>').addClass(options.className||"").css({
// position initially to the top left to avoid creating scrollbars
top:0,left:0}).append(options.content).appendTo(options.parentEl),
// when a click happens on anything inside with a 'fc-close' className, hide the popover
this.el.on("click",".fc-close",function(){_this.hide()}),options.autoHide&&this.listenTo($(document),"mousedown",this.documentMousedown)},
// Triggered when the user clicks *anywhere* in the document, for the autoHide feature
documentMousedown:function(ev){
// only hide the popover if the click happened outside the popover
this.el&&!$(ev.target).closest(this.el).length&&this.hide()},
// Hides and unregisters any handlers
removeElement:function(){this.hide(),this.el&&(this.el.remove(),this.el=null),this.stopListeningTo($(document),"mousedown")},
// Positions the popover optimally, using the top/left/right options
position:function(){var viewportTop,viewportLeft,viewportOffset,top,left,options=this.options,origin=this.el.offsetParent().offset(),width=this.el.outerWidth(),height=this.el.outerHeight(),windowEl=$(window),viewportEl=getScrollParent(this.el);//
// compute top and left
top=options.top||0,left=void 0!==options.left?options.left:void 0!==options.right?options.right-width:0,viewportEl.is(window)||viewportEl.is(document)?(// normalize getScrollParent's result
viewportEl=windowEl,viewportTop=0,// the window is always at the top left
viewportLeft=0):(viewportOffset=viewportEl.offset(),viewportTop=viewportOffset.top,viewportLeft=viewportOffset.left),
// if the window is scrolled, it causes the visible area to be further down
viewportTop+=windowEl.scrollTop(),viewportLeft+=windowEl.scrollLeft(),
// constrain to the view port. if constrained by two edges, give precedence to top/left
!1!==options.viewportConstrain&&(top=Math.min(top,viewportTop+viewportEl.outerHeight()-height-this.margin),top=Math.max(top,viewportTop+this.margin),left=Math.min(left,viewportLeft+viewportEl.outerWidth()-width-this.margin),left=Math.max(left,viewportLeft+this.margin)),this.el.css({top:top-origin.top,left:left-origin.left})},
// Triggers a callback. Calls a function in the option hash of the same name.
// Arguments beyond the first `name` are forwarded on.
// TODO: better code reuse for this. Repeat code
trigger:function(name){this.options[name]&&this.options[name].apply(this,Array.prototype.slice.call(arguments,1))}}),CoordCache=FC.CoordCache=Class.extend({els:null,// jQuery set (assumed to be siblings)
forcedOffsetParentEl:null,// options can override the natural offsetParent
origin:null,// {left,top} position of offsetParent of els
boundingRect:null,// constrain cordinates to this rectangle. {left,right,top,bottom} or null
isHorizontal:!1,// whether to query for left/right/width
isVertical:!1,// whether to query for top/bottom/height
// arrays of coordinates (offsets from topleft of document)
lefts:null,rights:null,tops:null,bottoms:null,constructor:function(options){this.els=$(options.els),this.isHorizontal=options.isHorizontal,this.isVertical=options.isVertical,this.forcedOffsetParentEl=options.offsetParent?$(options.offsetParent):null},
// Queries the els for coordinates and stores them.
// Call this method before using and of the get* methods below.
build:function(){var offsetParentEl=this.forcedOffsetParentEl;!offsetParentEl&&this.els.length>0&&(offsetParentEl=this.els.eq(0).offsetParent()),this.origin=offsetParentEl?offsetParentEl.offset():null,this.boundingRect=this.queryBoundingRect(),this.isHorizontal&&this.buildElHorizontals(),this.isVertical&&this.buildElVerticals()},
// Destroys all internal data about coordinates, freeing memory
clear:function(){this.origin=null,this.boundingRect=null,this.lefts=null,this.rights=null,this.tops=null,this.bottoms=null},
// When called, if coord caches aren't built, builds them
ensureBuilt:function(){this.origin||this.build()},
// Populates the left/right internal coordinate arrays
buildElHorizontals:function(){var lefts=[],rights=[];this.els.each(function(i,node){var el=$(node),left=el.offset().left,width=el.outerWidth();lefts.push(left),rights.push(left+width)}),this.lefts=lefts,this.rights=rights},
// Populates the top/bottom internal coordinate arrays
buildElVerticals:function(){var tops=[],bottoms=[];this.els.each(function(i,node){var el=$(node),top=el.offset().top,height=el.outerHeight();tops.push(top),bottoms.push(top+height)}),this.tops=tops,this.bottoms=bottoms},
// Given a left offset (from document left), returns the index of the el that it horizontally intersects.
// If no intersection is made, returns undefined.
getHorizontalIndex:function(leftOffset){this.ensureBuilt();var i,lefts=this.lefts,rights=this.rights,len=lefts.length;for(i=0;i<len;i++)if(leftOffset>=lefts[i]&&leftOffset<rights[i])return i},
// Given a top offset (from document top), returns the index of the el that it vertically intersects.
// If no intersection is made, returns undefined.
getVerticalIndex:function(topOffset){this.ensureBuilt();var i,tops=this.tops,bottoms=this.bottoms,len=tops.length;for(i=0;i<len;i++)if(topOffset>=tops[i]&&topOffset<bottoms[i])return i},
// Gets the left offset (from document left) of the element at the given index
getLeftOffset:function(leftIndex){return this.ensureBuilt(),this.lefts[leftIndex]},
// Gets the left position (from offsetParent left) of the element at the given index
getLeftPosition:function(leftIndex){return this.ensureBuilt(),this.lefts[leftIndex]-this.origin.left},
// Gets the right offset (from document left) of the element at the given index.
// This value is NOT relative to the document's right edge, like the CSS concept of "right" would be.
getRightOffset:function(leftIndex){return this.ensureBuilt(),this.rights[leftIndex]},
// Gets the right position (from offsetParent left) of the element at the given index.
// This value is NOT relative to the offsetParent's right edge, like the CSS concept of "right" would be.
getRightPosition:function(leftIndex){return this.ensureBuilt(),this.rights[leftIndex]-this.origin.left},
// Gets the width of the element at the given index
getWidth:function(leftIndex){return this.ensureBuilt(),this.rights[leftIndex]-this.lefts[leftIndex]},
// Gets the top offset (from document top) of the element at the given index
getTopOffset:function(topIndex){return this.ensureBuilt(),this.tops[topIndex]},
// Gets the top position (from offsetParent top) of the element at the given position
getTopPosition:function(topIndex){return this.ensureBuilt(),this.tops[topIndex]-this.origin.top},
// Gets the bottom offset (from the document top) of the element at the given index.
// This value is NOT relative to the offsetParent's bottom edge, like the CSS concept of "bottom" would be.
getBottomOffset:function(topIndex){return this.ensureBuilt(),this.bottoms[topIndex]},
// Gets the bottom position (from the offsetParent top) of the element at the given index.
// This value is NOT relative to the offsetParent's bottom edge, like the CSS concept of "bottom" would be.
getBottomPosition:function(topIndex){return this.ensureBuilt(),this.bottoms[topIndex]-this.origin.top},
// Gets the height of the element at the given index
getHeight:function(topIndex){return this.ensureBuilt(),this.bottoms[topIndex]-this.tops[topIndex]},
// Bounding Rect
// TODO: decouple this from CoordCache
// Compute and return what the elements' bounding rectangle is, from the user's perspective.
// Right now, only returns a rectangle if constrained by an overflow:scroll element.
// Returns null if there are no elements
queryBoundingRect:function(){var scrollParentEl;return this.els.length>0&&(scrollParentEl=getScrollParent(this.els.eq(0)),!scrollParentEl.is(document))?getClientRect(scrollParentEl):null},isPointInBounds:function(leftOffset,topOffset){return this.isLeftInBounds(leftOffset)&&this.isTopInBounds(topOffset)},isLeftInBounds:function(leftOffset){return!this.boundingRect||leftOffset>=this.boundingRect.left&&leftOffset<this.boundingRect.right},isTopInBounds:function(topOffset){return!this.boundingRect||topOffset>=this.boundingRect.top&&topOffset<this.boundingRect.bottom}}),DragListener=FC.DragListener=Class.extend(ListenerMixin,{options:null,subjectEl:null,
// coordinates of the initial mousedown
originX:null,originY:null,
// the wrapping element that scrolls, or MIGHT scroll if there's overflow.
// TODO: do this for wrappers that have overflow:hidden as well.
scrollEl:null,isInteracting:!1,isDistanceSurpassed:!1,isDelayEnded:!1,isDragging:!1,isTouch:!1,isGeneric:!1,// initiated by 'dragstart' (jqui)
delay:null,delayTimeoutId:null,minDistance:null,shouldCancelTouchScroll:!0,scrollAlwaysKills:!1,constructor:function(options){this.options=options||{}},
// Interaction (high-level)
// -----------------------------------------------------------------------------------------------------------------
startInteraction:function(ev,extraOptions){if("mousedown"===ev.type){if(GlobalEmitter.get().shouldIgnoreMouse())return;if(!isPrimaryMouseButton(ev))return;ev.preventDefault()}this.isInteracting||(
// process options
extraOptions=extraOptions||{},this.delay=firstDefined(extraOptions.delay,this.options.delay,0),this.minDistance=firstDefined(extraOptions.distance,this.options.distance,0),this.subjectEl=this.options.subjectEl,preventSelection($("body")),this.isInteracting=!0,this.isTouch=getEvIsTouch(ev),this.isGeneric="dragstart"===ev.type,this.isDelayEnded=!1,this.isDistanceSurpassed=!1,this.originX=getEvX(ev),this.originY=getEvY(ev),this.scrollEl=getScrollParent($(ev.target)),this.bindHandlers(),this.initAutoScroll(),this.handleInteractionStart(ev),this.startDelay(ev),this.minDistance||this.handleDistanceSurpassed(ev))},handleInteractionStart:function(ev){this.trigger("interactionStart",ev)},endInteraction:function(ev,isCancelled){this.isInteracting&&(this.endDrag(ev),this.delayTimeoutId&&(clearTimeout(this.delayTimeoutId),this.delayTimeoutId=null),this.destroyAutoScroll(),this.unbindHandlers(),this.isInteracting=!1,this.handleInteractionEnd(ev,isCancelled),allowSelection($("body")))},handleInteractionEnd:function(ev,isCancelled){this.trigger("interactionEnd",ev,isCancelled||!1)},
// Binding To DOM
// -----------------------------------------------------------------------------------------------------------------
bindHandlers:function(){
// some browsers (Safari in iOS 10) don't allow preventDefault on touch events that are bound after touchstart,
// so listen to the GlobalEmitter singleton, which is always bound, instead of the document directly.
var globalEmitter=GlobalEmitter.get();this.isGeneric?this.listenTo($(document),{// might only work on iOS because of GlobalEmitter's bind :(
drag:this.handleMove,dragstop:this.endInteraction}):this.isTouch?this.listenTo(globalEmitter,{touchmove:this.handleTouchMove,touchend:this.endInteraction,scroll:this.handleTouchScroll}):this.listenTo(globalEmitter,{mousemove:this.handleMouseMove,mouseup:this.endInteraction}),this.listenTo(globalEmitter,{selectstart:preventDefault,// don't allow selection while dragging
contextmenu:preventDefault})},unbindHandlers:function(){this.stopListeningTo(GlobalEmitter.get()),this.stopListeningTo($(document))},
// Drag (high-level)
// -----------------------------------------------------------------------------------------------------------------
// extraOptions ignored if drag already started
startDrag:function(ev,extraOptions){this.startInteraction(ev,extraOptions),// ensure interaction began
this.isDragging||(this.isDragging=!0,this.handleDragStart(ev))},handleDragStart:function(ev){this.trigger("dragStart",ev)},handleMove:function(ev){var dx=getEvX(ev)-this.originX,dy=getEvY(ev)-this.originY,minDistance=this.minDistance;// current distance from the origin, squared
this.isDistanceSurpassed||dx*dx+dy*dy>=minDistance*minDistance&&// use pythagorean theorem
this.handleDistanceSurpassed(ev),this.isDragging&&this.handleDrag(dx,dy,ev)},
// Called while the mouse is being moved and when we know a legitimate drag is taking place
handleDrag:function(dx,dy,ev){this.trigger("drag",dx,dy,ev),this.updateAutoScroll(ev)},endDrag:function(ev){this.isDragging&&(this.isDragging=!1,this.handleDragEnd(ev))},handleDragEnd:function(ev){this.trigger("dragEnd",ev)},
// Delay
// -----------------------------------------------------------------------------------------------------------------
startDelay:function(initialEv){var _this=this;this.delay?this.delayTimeoutId=setTimeout(function(){_this.handleDelayEnd(initialEv)},this.delay):this.handleDelayEnd(initialEv)},handleDelayEnd:function(initialEv){this.isDelayEnded=!0,this.isDistanceSurpassed&&this.startDrag(initialEv)},
// Distance
// -----------------------------------------------------------------------------------------------------------------
handleDistanceSurpassed:function(ev){this.isDistanceSurpassed=!0,this.isDelayEnded&&this.startDrag(ev)},
// Mouse / Touch
// -----------------------------------------------------------------------------------------------------------------
handleTouchMove:function(ev){
// prevent inertia and touchmove-scrolling while dragging
this.isDragging&&this.shouldCancelTouchScroll&&ev.preventDefault(),this.handleMove(ev)},handleMouseMove:function(ev){this.handleMove(ev)},
// Scrolling (unrelated to auto-scroll)
// -----------------------------------------------------------------------------------------------------------------
handleTouchScroll:function(ev){
// if the drag is being initiated by touch, but a scroll happens before
// the drag-initiating delay is over, cancel the drag
this.isDragging&&!this.scrollAlwaysKills||this.endInteraction(ev,!0)},
// Utils
// -----------------------------------------------------------------------------------------------------------------
// Triggers a callback. Calls a function in the option hash of the same name.
// Arguments beyond the first `name` are forwarded on.
trigger:function(name){this.options[name]&&this.options[name].apply(this,Array.prototype.slice.call(arguments,1)),
// makes _methods callable by event name. TODO: kill this
this["_"+name]&&this["_"+name].apply(this,Array.prototype.slice.call(arguments,1))}});/*
this.scrollEl is set in DragListener
*/
DragListener.mixin({isAutoScroll:!1,scrollBounds:null,// { top, bottom, left, right }
scrollTopVel:null,// pixels per second
scrollLeftVel:null,// pixels per second
scrollIntervalId:null,// ID of setTimeout for scrolling animation loop
// defaults
scrollSensitivity:30,// pixels from edge for scrolling to start
scrollSpeed:200,// pixels per second, at maximum speed
scrollIntervalMs:50,// millisecond wait between scroll increment
initAutoScroll:function(){var scrollEl=this.scrollEl;this.isAutoScroll=this.options.scroll&&scrollEl&&!scrollEl.is(window)&&!scrollEl.is(document),this.isAutoScroll&&
// debounce makes sure rapid calls don't happen
this.listenTo(scrollEl,"scroll",debounce(this.handleDebouncedScroll,100))},destroyAutoScroll:function(){this.endAutoScroll(),// kill any animation loop
// remove the scroll handler if there is a scrollEl
this.isAutoScroll&&this.stopListeningTo(this.scrollEl,"scroll")},
// Computes and stores the bounding rectangle of scrollEl
computeScrollBounds:function(){this.isAutoScroll&&(this.scrollBounds=getOuterRect(this.scrollEl))},
// Called when the dragging is in progress and scrolling should be updated
updateAutoScroll:function(ev){var topCloseness,bottomCloseness,leftCloseness,rightCloseness,sensitivity=this.scrollSensitivity,bounds=this.scrollBounds,topVel=0,leftVel=0;bounds&&(// only scroll if scrollEl exists
// compute closeness to edges. valid range is from 0.0 - 1.0
topCloseness=(sensitivity-(getEvY(ev)-bounds.top))/sensitivity,bottomCloseness=(sensitivity-(bounds.bottom-getEvY(ev)))/sensitivity,leftCloseness=(sensitivity-(getEvX(ev)-bounds.left))/sensitivity,rightCloseness=(sensitivity-(bounds.right-getEvX(ev)))/sensitivity,
// translate vertical closeness into velocity.
// mouse must be completely in bounds for velocity to happen.
topCloseness>=0&&topCloseness<=1?topVel=topCloseness*this.scrollSpeed*-1:bottomCloseness>=0&&bottomCloseness<=1&&(topVel=bottomCloseness*this.scrollSpeed),
// translate horizontal closeness into velocity
leftCloseness>=0&&leftCloseness<=1?leftVel=leftCloseness*this.scrollSpeed*-1:rightCloseness>=0&&rightCloseness<=1&&(leftVel=rightCloseness*this.scrollSpeed)),this.setScrollVel(topVel,leftVel)},
// Sets the speed-of-scrolling for the scrollEl
setScrollVel:function(topVel,leftVel){this.scrollTopVel=topVel,this.scrollLeftVel=leftVel,this.constrainScrollVel(),// massages into realistic values
// if there is non-zero velocity, and an animation loop hasn't already started, then START
!this.scrollTopVel&&!this.scrollLeftVel||this.scrollIntervalId||(this.scrollIntervalId=setInterval(proxy(this,"scrollIntervalFunc"),// scope to `this`
this.scrollIntervalMs))},
// Forces scrollTopVel and scrollLeftVel to be zero if scrolling has already gone all the way
constrainScrollVel:function(){var el=this.scrollEl;this.scrollTopVel<0?// scrolling up?
el.scrollTop()<=0&&(// already scrolled all the way up?
this.scrollTopVel=0):this.scrollTopVel>0&&el.scrollTop()+el[0].clientHeight>=el[0].scrollHeight&&(// already scrolled all the way down?
this.scrollTopVel=0),this.scrollLeftVel<0?// scrolling left?
el.scrollLeft()<=0&&(// already scrolled all the left?
this.scrollLeftVel=0):this.scrollLeftVel>0&&el.scrollLeft()+el[0].clientWidth>=el[0].scrollWidth&&(// already scrolled all the way right?
this.scrollLeftVel=0)},
// This function gets called during every iteration of the scrolling animation loop
scrollIntervalFunc:function(){var el=this.scrollEl,frac=this.scrollIntervalMs/1e3;// considering animation frequency, what the vel should be mult'd by
// change the value of scrollEl's scroll
this.scrollTopVel&&el.scrollTop(el.scrollTop()+this.scrollTopVel*frac),this.scrollLeftVel&&el.scrollLeft(el.scrollLeft()+this.scrollLeftVel*frac),this.constrainScrollVel(),// since the scroll values changed, recompute the velocities
// if scrolled all the way, which causes the vels to be zero, stop the animation loop
this.scrollTopVel||this.scrollLeftVel||this.endAutoScroll()},
// Kills any existing scrolling animation loop
endAutoScroll:function(){this.scrollIntervalId&&(clearInterval(this.scrollIntervalId),this.scrollIntervalId=null,this.handleScrollEnd())},
// Get called when the scrollEl is scrolled (NOTE: this is delayed via debounce)
handleDebouncedScroll:function(){
// recompute all coordinates, but *only* if this is *not* part of our scrolling animation
this.scrollIntervalId||this.handleScrollEnd()},
// Called when scrolling has stopped, whether through auto scroll, or the user scrolling
handleScrollEnd:function(){}});/* Tracks mouse movements over a component and raises events about which hit the mouse is over.
------------------------------------------------------------------------------------------------------------------------
options:
- subjectEl
- subjectCenter
*/
var HitDragListener=DragListener.extend({component:null,// converts coordinates to hits
// methods: hitsNeeded, hitsNotNeeded, queryHit
origHit:null,// the hit the mouse was over when listening started
hit:null,// the hit the mouse is over
coordAdjust:null,// delta that will be added to the mouse coordinates when computing collisions
constructor:function(component,options){DragListener.call(this,options),// call the super-constructor
this.component=component},
// Called when drag listening starts (but a real drag has not necessarily began).
// ev might be undefined if dragging was started manually.
handleInteractionStart:function(ev){var subjectRect,origPoint,point,subjectEl=this.subjectEl;this.component.hitsNeeded(),this.computeScrollBounds(),// for autoscroll
ev?(origPoint={left:getEvX(ev),top:getEvY(ev)},point=origPoint,
// constrain the point to bounds of the element being dragged
subjectEl&&(subjectRect=getOuterRect(subjectEl),// used for centering as well
point=constrainPoint(point,subjectRect)),this.origHit=this.queryHit(point.left,point.top),
// treat the center of the subject as the collision point?
subjectEl&&this.options.subjectCenter&&(
// only consider the area the subject overlaps the hit. best for large subjects.
// TODO: skip this if hit didn't supply left/right/top/bottom
this.origHit&&(subjectRect=intersectRects(this.origHit,subjectRect)||subjectRect),point=getRectCenter(subjectRect)),this.coordAdjust=diffPoints(point,origPoint)):(this.origHit=null,this.coordAdjust=null),
// call the super-method. do it after origHit has been computed
DragListener.prototype.handleInteractionStart.apply(this,arguments)},
// Called when the actual drag has started
handleDragStart:function(ev){var hit;DragListener.prototype.handleDragStart.apply(this,arguments),
// report the initial hit the mouse is over
// especially important if no min-distance and drag starts immediately
(// call the super-method
// might be different from this.origHit if the min-distance is large
hit=this.queryHit(getEvX(ev),getEvY(ev)))&&this.handleHitOver(hit)},
// Called when the drag moves
handleDrag:function(dx,dy,ev){var hit;DragListener.prototype.handleDrag.apply(this,arguments),// call the super-method
hit=this.queryHit(getEvX(ev),getEvY(ev)),isHitsEqual(hit,this.hit)||(// a different hit than before?
this.hit&&this.handleHitOut(),hit&&this.handleHitOver(hit))},
// Called when dragging has been stopped
handleDragEnd:function(){this.handleHitDone(),DragListener.prototype.handleDragEnd.apply(this,arguments)},
// Called when a the mouse has just moved over a new hit
handleHitOver:function(hit){var isOrig=isHitsEqual(hit,this.origHit);this.hit=hit,this.trigger("hitOver",this.hit,isOrig,this.origHit)},
// Called when the mouse has just moved out of a hit
handleHitOut:function(){this.hit&&(this.trigger("hitOut",this.hit),this.handleHitDone(),this.hit=null)},
// Called after a hitOut. Also called before a dragStop
handleHitDone:function(){this.hit&&this.trigger("hitDone",this.hit)},
// Called when the interaction ends, whether there was a real drag or not
handleInteractionEnd:function(){DragListener.prototype.handleInteractionEnd.apply(this,arguments),// call the super-method
this.origHit=null,this.hit=null,this.component.hitsNotNeeded()},
// Called when scrolling has stopped, whether through auto scroll, or the user scrolling
handleScrollEnd:function(){DragListener.prototype.handleScrollEnd.apply(this,arguments),// call the super-method
// hits' absolute positions will be in new places after a user's scroll.
// HACK for recomputing.
this.isDragging&&(this.component.releaseHits(),this.component.prepareHits())},
// Gets the hit underneath the coordinates for the given mouse event
queryHit:function(left,top){return this.coordAdjust&&(left+=this.coordAdjust.left,top+=this.coordAdjust.top),this.component.queryHit(left,top)}});/*
Listens to document and window-level user-interaction events, like touch events and mouse events,
and fires these events as-is to whoever is observing a GlobalEmitter.
Best when used as a singleton via GlobalEmitter.get()

Normalizes mouse/touch events. For examples:
- ignores the the simulated mouse events that happen after a quick tap: mousemove+mousedown+mouseup+click
- compensates for various buggy scenarios where a touchend does not fire
*/
FC.touchMouseIgnoreWait=500;var GlobalEmitter=Class.extend(ListenerMixin,EmitterMixin,{isTouching:!1,mouseIgnoreDepth:0,handleScrollProxy:null,bind:function(){var _this=this;this.listenTo($(document),{touchstart:this.handleTouchStart,touchcancel:this.handleTouchCancel,touchend:this.handleTouchEnd,mousedown:this.handleMouseDown,mousemove:this.handleMouseMove,mouseup:this.handleMouseUp,click:this.handleClick,selectstart:this.handleSelectStart,contextmenu:this.handleContextMenu}),
// because we need to call preventDefault
// because https://www.chromestatus.com/features/5093566007214080
// TODO: investigate performance because this is a global handler
window.addEventListener("touchmove",this.handleTouchMoveProxy=function(ev){_this.handleTouchMove($.Event(ev))},{passive:!1}),
// attach a handler to get called when ANY scroll action happens on the page.
// this was impossible to do with normal on/off because 'scroll' doesn't bubble.
// http://stackoverflow.com/a/32954565/96342
window.addEventListener("scroll",this.handleScrollProxy=function(ev){_this.handleScroll($.Event(ev))},!0)},unbind:function(){this.stopListeningTo($(document)),window.removeEventListener("touchmove",this.handleTouchMoveProxy),window.removeEventListener("scroll",this.handleScrollProxy,!0)},
// Touch Handlers
// -----------------------------------------------------------------------------------------------------------------
handleTouchStart:function(ev){
// if a previous touch interaction never ended with a touchend, then implicitly end it,
// but since a new touch interaction is about to begin, don't start the mouse ignore period.
this.stopTouch(ev,!0),// skipMouseIgnore=true
this.isTouching=!0,this.trigger("touchstart",ev)},handleTouchMove:function(ev){this.isTouching&&this.trigger("touchmove",ev)},handleTouchCancel:function(ev){this.isTouching&&(this.trigger("touchcancel",ev),
// Have touchcancel fire an artificial touchend. That way, handlers won't need to listen to both.
// If touchend fires later, it won't have any effect b/c isTouching will be false.
this.stopTouch(ev))},handleTouchEnd:function(ev){this.stopTouch(ev)},
// Mouse Handlers
// -----------------------------------------------------------------------------------------------------------------
handleMouseDown:function(ev){this.shouldIgnoreMouse()||this.trigger("mousedown",ev)},handleMouseMove:function(ev){this.shouldIgnoreMouse()||this.trigger("mousemove",ev)},handleMouseUp:function(ev){this.shouldIgnoreMouse()||this.trigger("mouseup",ev)},handleClick:function(ev){this.shouldIgnoreMouse()||this.trigger("click",ev)},
// Misc Handlers
// -----------------------------------------------------------------------------------------------------------------
handleSelectStart:function(ev){this.trigger("selectstart",ev)},handleContextMenu:function(ev){this.trigger("contextmenu",ev)},handleScroll:function(ev){this.trigger("scroll",ev)},
// Utils
// -----------------------------------------------------------------------------------------------------------------
stopTouch:function(ev,skipMouseIgnore){this.isTouching&&(this.isTouching=!1,this.trigger("touchend",ev),skipMouseIgnore||this.startTouchMouseIgnore())},startTouchMouseIgnore:function(){var _this=this,wait=FC.touchMouseIgnoreWait;wait&&(this.mouseIgnoreDepth++,setTimeout(function(){_this.mouseIgnoreDepth--},wait))},shouldIgnoreMouse:function(){return this.isTouching||Boolean(this.mouseIgnoreDepth)}});
// Singleton
// ---------------------------------------------------------------------------------------------------------------------
!function(){var globalEmitter=null,neededCount=0;
// gets the singleton
GlobalEmitter.get=function(){return globalEmitter||(globalEmitter=new GlobalEmitter,globalEmitter.bind()),globalEmitter},
// called when an object knows it will need a GlobalEmitter in the near future.
GlobalEmitter.needed=function(){GlobalEmitter.get(),// ensures globalEmitter
neededCount++},
// called when the object that originally called needed() doesn't need a GlobalEmitter anymore.
GlobalEmitter.unneeded=function(){--neededCount||(// nobody else needs it
globalEmitter.unbind(),globalEmitter=null)}}();/* Creates a clone of an element and lets it track the mouse as it moves
----------------------------------------------------------------------------------------------------------------------*/
var MouseFollower=Class.extend(ListenerMixin,{options:null,sourceEl:null,// the element that will be cloned and made to look like it is dragging
el:null,// the clone of `sourceEl` that will track the mouse
parentEl:null,// the element that `el` (the clone) will be attached to
// the initial position of el, relative to the offset parent. made to match the initial offset of sourceEl
top0:null,left0:null,
// the absolute coordinates of the initiating touch/mouse action
y0:null,x0:null,
// the number of pixels the mouse has moved from its initial position
topDelta:null,leftDelta:null,isFollowing:!1,isHidden:!1,isAnimating:!1,// doing the revert animation?
constructor:function(sourceEl,options){this.options=options=options||{},this.sourceEl=sourceEl,this.parentEl=options.parentEl?$(options.parentEl):sourceEl.parent()},
// Causes the element to start following the mouse
start:function(ev){this.isFollowing||(this.isFollowing=!0,this.y0=getEvY(ev),this.x0=getEvX(ev),this.topDelta=0,this.leftDelta=0,this.isHidden||this.updatePosition(),getEvIsTouch(ev)?this.listenTo($(document),"touchmove",this.handleMove):this.listenTo($(document),"mousemove",this.handleMove))},
// Causes the element to stop following the mouse. If shouldRevert is true, will animate back to original position.
// `callback` gets invoked when the animation is complete. If no animation, it is invoked immediately.
stop:function(shouldRevert,callback){function complete(){// might be called by .animate(), which might change `this` context
_this.isAnimating=!1,_this.removeElement(),_this.top0=_this.left0=null,// reset state for future updatePosition calls
callback&&callback()}var _this=this,revertDuration=this.options.revertDuration;this.isFollowing&&!this.isAnimating&&(// disallow more than one stop animation at a time
this.isFollowing=!1,this.stopListeningTo($(document)),shouldRevert&&revertDuration&&!this.isHidden?(// do a revert animation?
this.isAnimating=!0,this.el.animate({top:this.top0,left:this.left0},{duration:revertDuration,complete:complete})):complete())},
// Gets the tracking element. Create it if necessary
getEl:function(){var el=this.el;
// we don't want long taps or any mouse interaction causing selection/menus.
// would use preventSelection(), but that prevents selectstart, causing problems.
return el||(el=this.el=this.sourceEl.clone().addClass(this.options.additionalClass||"").css({position:"absolute",visibility:"",// in case original element was hidden (commonly through hideEvents())
display:this.isHidden?"none":"",// for when initially hidden
margin:0,right:"auto",// erase and set width instead
bottom:"auto",// erase and set height instead
width:this.sourceEl.width(),// explicit height in case there was a 'right' value
height:this.sourceEl.height(),// explicit width in case there was a 'bottom' value
opacity:this.options.opacity||"",zIndex:this.options.zIndex}),el.addClass("fc-unselectable"),el.appendTo(this.parentEl)),el},
// Removes the tracking element if it has already been created
removeElement:function(){this.el&&(this.el.remove(),this.el=null)},
// Update the CSS position of the tracking element
updatePosition:function(){var sourceOffset,origin;this.getEl(),// ensure this.el
// make sure origin info was computed
null===this.top0&&(sourceOffset=this.sourceEl.offset(),origin=this.el.offsetParent().offset(),this.top0=sourceOffset.top-origin.top,this.left0=sourceOffset.left-origin.left),this.el.css({top:this.top0+this.topDelta,left:this.left0+this.leftDelta})},
// Gets called when the user moves the mouse
handleMove:function(ev){this.topDelta=getEvY(ev)-this.y0,this.leftDelta=getEvX(ev)-this.x0,this.isHidden||this.updatePosition()},
// Temporarily makes the tracking element invisible. Can be called before following starts
hide:function(){this.isHidden||(this.isHidden=!0,this.el&&this.el.hide())},
// Show the tracking element after it has been temporarily hidden
show:function(){this.isHidden&&(this.isHidden=!1,this.updatePosition(),this.getEl().show())}}),Grid=FC.Grid=Class.extend(ListenerMixin,{
// self-config, overridable by subclasses
hasDayInteractions:!0,// can user click/select ranges of time?
view:null,// a View object
isRTL:null,// shortcut to the view's isRTL option
start:null,end:null,el:null,// the containing element
elsByFill:null,// a hash of jQuery element sets used for rendering each fill. Keyed by fill name.
// derived from options
eventTimeFormat:null,displayEventTime:null,displayEventEnd:null,minResizeDuration:null,// TODO: hack. set by subclasses. minumum event resize duration
// if defined, holds the unit identified (ex: "year" or "month") that determines the level of granularity
// of the date areas. if not defined, assumes to be day and time granularity.
// TODO: port isTimeScale into same system?
largeUnit:null,dayClickListener:null,daySelectListener:null,segDragListener:null,segResizeListener:null,externalDragListener:null,constructor:function(view){this.view=view,this.isRTL=view.opt("isRTL"),this.elsByFill={},this.dayClickListener=this.buildDayClickListener(),this.daySelectListener=this.buildDaySelectListener()},/* Options
	------------------------------------------------------------------------------------------------------------------*/
// Generates the format string used for event time text, if not explicitly defined by 'timeFormat'
computeEventTimeFormat:function(){return this.view.opt("smallTimeFormat")},
// Determines whether events should have their end times displayed, if not explicitly defined by 'displayEventTime'.
// Only applies to non-all-day events.
computeDisplayEventTime:function(){return!0},
// Determines whether events should have their end times displayed, if not explicitly defined by 'displayEventEnd'
computeDisplayEventEnd:function(){return!0},/* Dates
	------------------------------------------------------------------------------------------------------------------*/
// Tells the grid about what period of time to display.
// Any date-related internal data should be generated.
setRange:function(range){this.start=range.start.clone(),this.end=range.end.clone(),this.rangeUpdated(),this.processRangeOptions()},
// Called when internal variables that rely on the range should be updated
rangeUpdated:function(){},
// Updates values that rely on options and also relate to range
processRangeOptions:function(){var displayEventTime,displayEventEnd,view=this.view;this.eventTimeFormat=view.opt("eventTimeFormat")||view.opt("timeFormat")||// deprecated
this.computeEventTimeFormat(),displayEventTime=view.opt("displayEventTime"),null==displayEventTime&&(displayEventTime=this.computeDisplayEventTime()),displayEventEnd=view.opt("displayEventEnd"),null==displayEventEnd&&(displayEventEnd=this.computeDisplayEventEnd()),this.displayEventTime=displayEventTime,this.displayEventEnd=displayEventEnd},
// Converts a span (has unzoned start/end and any other grid-specific location information)
// into an array of segments (pieces of events whose format is decided by the grid).
spanToSegs:function(span){},
// Diffs the two dates, returning a duration, based on granularity of the grid
// TODO: port isTimeScale into this system?
diffDates:function(a,b){return this.largeUnit?diffByUnit(a,b,this.largeUnit):diffDayTime(a,b)},/* Hit Area
	------------------------------------------------------------------------------------------------------------------*/
hitsNeededDepth:0,// necessary because multiple callers might need the same hits
hitsNeeded:function(){this.hitsNeededDepth++||this.prepareHits()},hitsNotNeeded:function(){this.hitsNeededDepth&&!--this.hitsNeededDepth&&this.releaseHits()},
// Called before one or more queryHit calls might happen. Should prepare any cached coordinates for queryHit
prepareHits:function(){},
// Called when queryHit calls have subsided. Good place to clear any coordinate caches.
releaseHits:function(){},
// Given coordinates from the topleft of the document, return data about the date-related area underneath.
// Can return an object with arbitrary properties (although top/right/left/bottom are encouraged).
// Must have a `grid` property, a reference to this current grid. TODO: avoid this
// The returned object will be processed by getHitSpan and getHitEl.
queryHit:function(leftOffset,topOffset){},
// like getHitSpan, but returns null if the resulting span's range is invalid
getSafeHitSpan:function(hit){var hitSpan=this.getHitSpan(hit);return isRangeWithinRange(hitSpan,this.view.activeRange)?hitSpan:null},
// Given position-level information about a date-related area within the grid,
// should return an object with at least a start/end date. Can provide other information as well.
getHitSpan:function(hit){},
// Given position-level information about a date-related area within the grid,
// should return a jQuery element that best represents it. passed to dayClick callback.
getHitEl:function(hit){},/* Rendering
	------------------------------------------------------------------------------------------------------------------*/
// Sets the container element that the grid should render inside of.
// Does other DOM-related initializations.
setElement:function(el){this.el=el,this.hasDayInteractions&&(preventSelection(el),this.bindDayHandler("touchstart",this.dayTouchStart),this.bindDayHandler("mousedown",this.dayMousedown)),
// attach event-element-related handlers. in Grid.events
// same garbage collection note as above.
this.bindSegHandlers(),this.bindGlobalHandlers()},bindDayHandler:function(name,handler){var _this=this;
// attach a handler to the grid's root element.
// jQuery will take care of unregistering them when removeElement gets called.
this.el.on(name,function(ev){if(!$(ev.target).is(_this.segSelector+","+// directly on an event element
_this.segSelector+" *,.fc-more,a[data-goto]"))return handler.call(_this,ev)})},
// Removes the grid's container element from the DOM. Undoes any other DOM-related attachments.
// DOES NOT remove any content beforehand (doesn't clear events or call unrenderDates), unlike View
removeElement:function(){this.unbindGlobalHandlers(),this.clearDragListeners(),this.el.remove()},
// Renders the basic structure of grid view before any content is rendered
renderSkeleton:function(){},
// Renders the grid's date-related content (like areas that represent days/times).
// Assumes setRange has already been called and the skeleton has already been rendered.
renderDates:function(){},
// Unrenders the grid's date-related content
unrenderDates:function(){},/* Handlers
	------------------------------------------------------------------------------------------------------------------*/
// Binds DOM handlers to elements that reside outside the grid, such as the document
bindGlobalHandlers:function(){this.listenTo($(document),{dragstart:this.externalDragStart,// jqui
sortstart:this.externalDragStart})},
// Unbinds DOM handlers from elements that reside outside the grid
unbindGlobalHandlers:function(){this.stopListeningTo($(document))},
// Process a mousedown on an element that represents a day. For day clicking and selecting.
dayMousedown:function(ev){var view=this.view;
// HACK
// This will still work even though bindDayHandler doesn't use GlobalEmitter.
GlobalEmitter.get().shouldIgnoreMouse()||(this.dayClickListener.startInteraction(ev),view.opt("selectable")&&this.daySelectListener.startInteraction(ev,{distance:view.opt("selectMinDistance")}))},dayTouchStart:function(ev){var selectLongPressDelay,view=this.view;
// On iOS (and Android?) when a new selection is initiated overtop another selection,
// the touchend never fires because the elements gets removed mid-touch-interaction (my theory).
// HACK: simply don't allow this to happen.
// ALSO: prevent selection when an *event* is already raised.
view.isSelected||view.selectedEvent||(selectLongPressDelay=view.opt("selectLongPressDelay"),null==selectLongPressDelay&&(selectLongPressDelay=view.opt("longPressDelay")),this.dayClickListener.startInteraction(ev),view.opt("selectable")&&this.daySelectListener.startInteraction(ev,{delay:selectLongPressDelay}))},
// Creates a listener that tracks the user's drag across day elements, for day clicking.
buildDayClickListener:function(){var dayClickHit,_this=this,view=this.view,dragListener=new HitDragListener(this,{scroll:view.opt("dragScroll"),interactionStart:function(){dayClickHit=dragListener.origHit},hitOver:function(hit,isOrig,origHit){
// if user dragged to another cell at any point, it can no longer be a dayClick
isOrig||(dayClickHit=null)},hitOut:function(){// called before mouse moves to a different hit OR moved out of all hits
dayClickHit=null},interactionEnd:function(ev,isCancelled){var hitSpan;!isCancelled&&dayClickHit&&(hitSpan=_this.getSafeHitSpan(dayClickHit))&&view.triggerDayClick(hitSpan,_this.getHitEl(dayClickHit),ev)}});
// because dayClickListener won't be called with any time delay, "dragging" will begin immediately,
// which will kill any touchmoving/scrolling. Prevent this.
return dragListener.shouldCancelTouchScroll=!1,dragListener.scrollAlwaysKills=!0,dragListener},
// Creates a listener that tracks the user's drag across day elements, for day selecting.
buildDaySelectListener:function(){var selectionSpan,_this=this,view=this.view;return new HitDragListener(this,{scroll:view.opt("dragScroll"),interactionStart:function(){selectionSpan=null},dragStart:function(){view.unselect()},hitOver:function(hit,isOrig,origHit){var origHitSpan,hitSpan;origHit&&(// click needs to have started on a hit
origHitSpan=_this.getSafeHitSpan(origHit),hitSpan=_this.getSafeHitSpan(hit),selectionSpan=origHitSpan&&hitSpan?_this.computeSelection(origHitSpan,hitSpan):null,selectionSpan?_this.renderSelection(selectionSpan):!1===selectionSpan&&disableCursor())},hitOut:function(){// called before mouse moves to a different hit OR moved out of all hits
selectionSpan=null,_this.unrenderSelection()},hitDone:function(){// called after a hitOut OR before a dragEnd
enableCursor()},interactionEnd:function(ev,isCancelled){!isCancelled&&selectionSpan&&
// the selection will already have been rendered. just report it
view.reportSelection(selectionSpan,ev)}})},
// Kills all in-progress dragging.
// Useful for when public API methods that result in re-rendering are invoked during a drag.
// Also useful for when touch devices misbehave and don't fire their touchend.
clearDragListeners:function(){this.dayClickListener.endInteraction(),this.daySelectListener.endInteraction(),this.segDragListener&&this.segDragListener.endInteraction(),this.segResizeListener&&this.segResizeListener.endInteraction(),this.externalDragListener&&this.externalDragListener.endInteraction()},/* Event Helper
	------------------------------------------------------------------------------------------------------------------*/
// TODO: should probably move this to Grid.events, like we did event dragging / resizing
// Renders a mock event at the given event location, which contains zoned start/end properties.
// Returns all mock event elements.
renderEventLocationHelper:function(eventLocation,sourceSeg){var fakeEvent=this.fabricateHelperEvent(eventLocation,sourceSeg);return this.renderHelper(fakeEvent,sourceSeg)},
// Builds a fake event given zoned event date properties and a segment is should be inspired from.
// The range's end can be null, in which case the mock event that is rendered will have a null end time.
// `sourceSeg` is the internal segment object involved in the drag. If null, something external is dragging.
fabricateHelperEvent:function(eventLocation,sourceSeg){var fakeEvent=sourceSeg?createObject(sourceSeg.event):{};// mask the original event object if possible
// force it to be freshly computed by normalizeEventDates
// this extra className will be useful for differentiating real events from mock events in CSS
// if something external is being dragged in, don't render a resizer
return fakeEvent.start=eventLocation.start.clone(),fakeEvent.end=eventLocation.end?eventLocation.end.clone():null,fakeEvent.allDay=null,this.view.calendar.normalizeEventDates(fakeEvent),fakeEvent.className=(fakeEvent.className||[]).concat("fc-helper"),sourceSeg||(fakeEvent.editable=!1),fakeEvent},
// Renders a mock event. Given zoned event date properties.
// Must return all mock event elements.
renderHelper:function(eventLocation,sourceSeg){},
// Unrenders a mock event
unrenderHelper:function(){},/* Selection
	------------------------------------------------------------------------------------------------------------------*/
// Renders a visual indication of a selection. Will highlight by default but can be overridden by subclasses.
// Given a span (unzoned start/end and other misc data)
renderSelection:function(span){this.renderHighlight(span)},
// Unrenders any visual indications of a selection. Will unrender a highlight by default.
unrenderSelection:function(){this.unrenderHighlight()},
// Given the first and last date-spans of a selection, returns another date-span object.
// Subclasses can override and provide additional data in the span object. Will be passed to renderSelection().
// Will return false if the selection is invalid and this should be indicated to the user.
// Will return null/undefined if a selection invalid but no error should be reported.
computeSelection:function(span0,span1){var span=this.computeSelectionSpan(span0,span1);return!(span&&!this.view.calendar.isSelectionSpanAllowed(span))&&span},
// Given two spans, must return the combination of the two.
// TODO: do this separation of concerns (combining VS validation) for event dnd/resize too.
computeSelectionSpan:function(span0,span1){var dates=[span0.start,span0.end,span1.start,span1.end];// sorts chronologically. works with Moments
return dates.sort(compareNumbers),{start:dates[0].clone(),end:dates[3].clone()}},/* Highlight
	------------------------------------------------------------------------------------------------------------------*/
// Renders an emphasis on the given date range. Given a span (unzoned start/end and other misc data)
renderHighlight:function(span){this.renderFill("highlight",this.spanToSegs(span))},
// Unrenders the emphasis on a date range
unrenderHighlight:function(){this.unrenderFill("highlight")},
// Generates an array of classNames for rendering the highlight. Used by the fill system.
highlightSegClasses:function(){return["fc-highlight"]},/* Business Hours
	------------------------------------------------------------------------------------------------------------------*/
renderBusinessHours:function(){},unrenderBusinessHours:function(){},/* Now Indicator
	------------------------------------------------------------------------------------------------------------------*/
getNowIndicatorUnit:function(){},renderNowIndicator:function(date){},unrenderNowIndicator:function(){},/* Fill System (highlight, background events, business hours)
	--------------------------------------------------------------------------------------------------------------------
	TODO: remove this system. like we did in TimeGrid
	*/
// Renders a set of rectangles over the given segments of time.
// MUST RETURN a subset of segs, the segs that were actually rendered.
// Responsible for populating this.elsByFill. TODO: better API for expressing this requirement
renderFill:function(type,segs){},
// Unrenders a specific type of fill that is currently rendered on the grid
unrenderFill:function(type){var el=this.elsByFill[type];el&&(el.remove(),delete this.elsByFill[type])},
// Renders and assigns an `el` property for each fill segment. Generic enough to work with different types.
// Only returns segments that successfully rendered.
// To be harnessed by renderFill (implemented by subclasses).
// Analagous to renderFgSegEls.
renderFillSegEls:function(type,segs){var i,_this=this,segElMethod=this[type+"SegEl"],html="",renderedSegs=[];if(segs.length){
// build a large concatenation of segment HTML
for(i=0;i<segs.length;i++)html+=this.fillSegHtml(type,segs[i]);
// Grab individual elements from the combined HTML string. Use each as the default rendering.
// Then, compute the 'el' for each segment.
$(html).each(function(i,node){var seg=segs[i],el=$(node);
// allow custom filter methods per-type
segElMethod&&(el=segElMethod.call(_this,seg,el)),el&&(// custom filters did not cancel the render
el=$(el),// allow custom filter to return raw DOM node
// correct element type? (would be bad if a non-TD were inserted into a table for example)
el.is(_this.fillSegTag)&&(seg.el=el,renderedSegs.push(seg)))})}return renderedSegs},fillSegTag:"div",// subclasses can override
// Builds the HTML needed for one fill segment. Generic enough to work with different types.
fillSegHtml:function(type,seg){
// custom hooks per-type
var classesMethod=this[type+"SegClasses"],cssMethod=this[type+"SegCss"],classes=classesMethod?classesMethod.call(this,seg):[],css=cssToStr(cssMethod?cssMethod.call(this,seg):{});return"<"+this.fillSegTag+(classes.length?' class="'+classes.join(" ")+'"':"")+(css?' style="'+css+'"':"")+" />"},/* Generic rendering utilities for subclasses
	------------------------------------------------------------------------------------------------------------------*/
// Computes HTML classNames for a single-day element
getDayClasses:function(date,noThemeHighlight){var today,view=this.view,classes=[];// TODO: somehow get into MonthView
return isDateWithinRange(date,view.activeRange)?(classes.push("fc-"+dayIDs[date.day()]),1==view.currentRangeAs("months")&&date.month()!=view.currentRange.start.month()&&classes.push("fc-other-month"),today=view.calendar.getNow(),date.isSame(today,"day")?(classes.push("fc-today"),!0!==noThemeHighlight&&classes.push(view.highlightStateClass)):date<today?classes.push("fc-past"):classes.push("fc-future")):classes.push("fc-disabled-day"),classes}});/* Event-rendering and event-interaction methods for the abstract Grid class
----------------------------------------------------------------------------------------------------------------------

Data Types:
	event - { title, id, start, (end), whatever }
	location - { start, (end), allDay }
	rawEventRange - { start, end }
	eventRange - { start, end, isStart, isEnd }
	eventSpan - { start, end, isStart, isEnd, whatever }
	eventSeg - { event, whatever }
	seg - { whatever }
*/
Grid.mixin({
// self-config, overridable by subclasses
segSelector:".fc-event-container > *",// what constitutes an event element?
mousedOverSeg:null,// the segment object the user's mouse is over. null if over nothing
isDraggingSeg:!1,// is a segment being dragged? boolean
isResizingSeg:!1,// is a segment being resized? boolean
isDraggingExternal:!1,// jqui-dragging an external element? boolean
segs:null,// the *event* segments currently rendered in the grid. TODO: rename to `eventSegs`
// Renders the given events onto the grid
renderEvents:function(events){var i,bgEvents=[],fgEvents=[];for(i=0;i<events.length;i++)(isBgEvent(events[i])?bgEvents:fgEvents).push(events[i]);this.segs=[].concat(// record all segs
this.renderBgEvents(bgEvents),this.renderFgEvents(fgEvents))},renderBgEvents:function(events){var segs=this.eventsToSegs(events);
// renderBgSegs might return a subset of segs, segs that were actually rendered
return this.renderBgSegs(segs)||segs},renderFgEvents:function(events){var segs=this.eventsToSegs(events);
// renderFgSegs might return a subset of segs, segs that were actually rendered
return this.renderFgSegs(segs)||segs},
// Unrenders all events currently rendered on the grid
unrenderEvents:function(){this.handleSegMouseout(),// trigger an eventMouseout if user's mouse is over an event
this.clearDragListeners(),this.unrenderFgSegs(),this.unrenderBgSegs(),this.segs=null},
// Retrieves all rendered segment objects currently rendered on the grid
getEventSegs:function(){return this.segs||[]},/* Foreground Segment Rendering
	------------------------------------------------------------------------------------------------------------------*/
// Renders foreground event segments onto the grid. May return a subset of segs that were rendered.
renderFgSegs:function(segs){},
// Unrenders all currently rendered foreground segments
unrenderFgSegs:function(){},
// Renders and assigns an `el` property for each foreground event segment.
// Only returns segments that successfully rendered.
// A utility that subclasses may use.
renderFgSegEls:function(segs,disableResizing){var i,view=this.view,html="",renderedSegs=[];if(segs.length){// don't build an empty html string
// build a large concatenation of event segment HTML
for(i=0;i<segs.length;i++)html+=this.fgSegHtml(segs[i],disableResizing);
// Grab individual elements from the combined HTML string. Use each as the default rendering.
// Then, compute the 'el' for each segment. An el might be null if the eventRender callback returned false.
$(html).each(function(i,node){var seg=segs[i],el=view.resolveEventEl(seg.event,$(node));el&&(el.data("fc-seg",seg),// used by handlers
seg.el=el,renderedSegs.push(seg))})}return renderedSegs},
// Generates the HTML for the default rendering of a foreground event segment. Used by renderFgSegEls()
fgSegHtml:function(seg,disableResizing){},/* Background Segment Rendering
	------------------------------------------------------------------------------------------------------------------*/
// Renders the given background event segments onto the grid.
// Returns a subset of the segs that were actually rendered.
renderBgSegs:function(segs){return this.renderFill("bgEvent",segs)},
// Unrenders all the currently rendered background event segments
unrenderBgSegs:function(){this.unrenderFill("bgEvent")},
// Renders a background event element, given the default rendering. Called by the fill system.
bgEventSegEl:function(seg,el){return this.view.resolveEventEl(seg.event,el)},
// Generates an array of classNames to be used for the default rendering of a background event.
// Called by fillSegHtml.
bgEventSegClasses:function(seg){var event=seg.event,source=event.source||{};return["fc-bgevent"].concat(event.className,source.className||[])},
// Generates a semicolon-separated CSS string to be used for the default rendering of a background event.
// Called by fillSegHtml.
bgEventSegCss:function(seg){return{"background-color":this.getSegSkinCss(seg)["background-color"]}},
// Generates an array of classNames to be used for the rendering business hours overlay. Called by the fill system.
// Called by fillSegHtml.
businessHoursSegClasses:function(seg){return["fc-nonbusiness","fc-bgevent"]},/* Business Hours
	------------------------------------------------------------------------------------------------------------------*/
// Compute business hour segs for the grid's current date range.
// Caller must ask if whole-day business hours are needed.
// If no `businessHours` configuration value is specified, assumes the calendar default.
buildBusinessHourSegs:function(wholeDay,businessHours){return this.eventsToSegs(this.buildBusinessHourEvents(wholeDay,businessHours))},
// Compute business hour *events* for the grid's current date range.
// Caller must ask if whole-day business hours are needed.
// If no `businessHours` configuration value is specified, assumes the calendar default.
buildBusinessHourEvents:function(wholeDay,businessHours){var events,calendar=this.view.calendar;
// fallback
// access from calendawr. don't access from view. doesn't update with dynamic options.
// HACK. Eventually refactor business hours "events" system.
// If no events are given, but businessHours is activated, this means the entire visible range should be
// marked as *not* business-hours, via inverse-background rendering.
return null==businessHours&&(businessHours=calendar.opt("businessHours")),events=calendar.computeBusinessHourEvents(wholeDay,businessHours),!events.length&&businessHours&&(events=[$.extend({},BUSINESS_HOUR_EVENT_DEFAULTS,{start:this.view.activeRange.end,// guaranteed out-of-range
end:this.view.activeRange.end,// "
dow:null})]),events},/* Handlers
	------------------------------------------------------------------------------------------------------------------*/
// Attaches event-element-related handlers for *all* rendered event segments of the view.
bindSegHandlers:function(){this.bindSegHandlersToEl(this.el)},
// Attaches event-element-related handlers to an arbitrary container element. leverages bubbling.
bindSegHandlersToEl:function(el){this.bindSegHandlerToEl(el,"touchstart",this.handleSegTouchStart),this.bindSegHandlerToEl(el,"mouseenter",this.handleSegMouseover),this.bindSegHandlerToEl(el,"mouseleave",this.handleSegMouseout),this.bindSegHandlerToEl(el,"mousedown",this.handleSegMousedown),this.bindSegHandlerToEl(el,"click",this.handleSegClick)},
// Executes a handler for any a user-interaction on a segment.
// Handler gets called with (seg, ev), and with the `this` context of the Grid
bindSegHandlerToEl:function(el,name,handler){var _this=this;el.on(name,this.segSelector,function(ev){var seg=$(this).data("fc-seg");// grab segment data. put there by View::renderEvents
// only call the handlers if there is not a drag/resize in progress
if(seg&&!_this.isDraggingSeg&&!_this.isResizingSeg)return handler.call(_this,seg,ev)})},handleSegClick:function(seg,ev){// can return `false` to cancel
!1===this.view.publiclyTrigger("eventClick",seg.el[0],seg.event,ev)&&ev.preventDefault()},
// Updates internal state and triggers handlers for when an event element is moused over
handleSegMouseover:function(seg,ev){GlobalEmitter.get().shouldIgnoreMouse()||this.mousedOverSeg||(this.mousedOverSeg=seg,this.view.isEventResizable(seg.event)&&seg.el.addClass("fc-allow-mouse-resize"),this.view.publiclyTrigger("eventMouseover",seg.el[0],seg.event,ev))},
// Updates internal state and triggers handlers for when an event element is moused out.
// Can be given no arguments, in which case it will mouseout the segment that was previously moused over.
handleSegMouseout:function(seg,ev){ev=ev||{},// if given no args, make a mock mouse event
this.mousedOverSeg&&(seg=seg||this.mousedOverSeg,// if given no args, use the currently moused-over segment
this.mousedOverSeg=null,this.view.isEventResizable(seg.event)&&seg.el.removeClass("fc-allow-mouse-resize"),this.view.publiclyTrigger("eventMouseout",seg.el[0],seg.event,ev))},handleSegMousedown:function(seg,ev){!this.startSegResize(seg,ev,{distance:5})&&this.view.isEventDraggable(seg.event)&&this.buildSegDragListener(seg).startInteraction(ev,{distance:5})},handleSegTouchStart:function(seg,ev){var dragListener,eventLongPressDelay,view=this.view,event=seg.event,isSelected=view.isEventSelected(event),isDraggable=view.isEventDraggable(event),isResizable=view.isEventResizable(event),isResizing=!1;isSelected&&isResizable&&(
// only allow resizing of the event is selected
isResizing=this.startSegResize(seg,ev)),isResizing||!isDraggable&&!isResizable||(// allowed to be selected?
eventLongPressDelay=view.opt("eventLongPressDelay"),null==eventLongPressDelay&&(eventLongPressDelay=view.opt("longPressDelay")),dragListener=isDraggable?this.buildSegDragListener(seg):this.buildSegSelectListener(seg),// seg isn't draggable, but still needs to be selected
dragListener.startInteraction(ev,{// won't start if already started
delay:isSelected?0:eventLongPressDelay}))},
// returns boolean whether resizing actually started or not.
// assumes the seg allows resizing.
// `dragOptions` are optional.
startSegResize:function(seg,ev,dragOptions){return!!$(ev.target).is(".fc-resizer")&&(this.buildSegResizeListener(seg,$(ev.target).is(".fc-start-resizer")).startInteraction(ev,dragOptions),!0)},/* Event Dragging
	------------------------------------------------------------------------------------------------------------------*/
// Builds a listener that will track user-dragging on an event segment.
// Generic enough to work with any type of Grid.
// Has side effect of setting/unsetting `segDragListener`
buildSegDragListener:function(seg){var isDragging,mouseFollower,dropLocation,_this=this,view=this.view,el=seg.el,event=seg.event;// zoned event date properties
if(this.segDragListener)return this.segDragListener;
// Tracks mouse movement over the *view's* coordinate map. Allows dragging and dropping between subcomponents
// of the view.
var dragListener=this.segDragListener=new HitDragListener(view,{scroll:view.opt("dragScroll"),subjectEl:el,subjectCenter:!0,interactionStart:function(ev){seg.component=_this,// for renderDrag
isDragging=!1,mouseFollower=new MouseFollower(seg.el,{additionalClass:"fc-dragging",parentEl:view.el,opacity:dragListener.isTouch?null:view.opt("dragOpacity"),revertDuration:view.opt("dragRevertDuration"),zIndex:2}),mouseFollower.hide(),// don't show until we know this is a real drag
mouseFollower.start(ev)},dragStart:function(ev){dragListener.isTouch&&!view.isEventSelected(event)&&
// if not previously selected, will fire after a delay. then, select the event
view.selectEvent(event),isDragging=!0,_this.handleSegMouseout(seg,ev),// ensure a mouseout on the manipulated event has been reported
_this.segDragStart(seg,ev),view.hideEvent(event)},hitOver:function(hit,isOrig,origHit){var origHitSpan,hitSpan,dragHelperEls,isAllowed=!0;
// starting hit could be forced (DayGrid.limit)
seg.hit&&(origHit=seg.hit),
// hit might not belong to this grid, so query origin grid
origHitSpan=origHit.component.getSafeHitSpan(origHit),hitSpan=hit.component.getSafeHitSpan(hit),origHitSpan&&hitSpan?(dropLocation=_this.computeEventDrop(origHitSpan,hitSpan,event),isAllowed=dropLocation&&_this.isEventLocationAllowed(dropLocation,event)):isAllowed=!1,isAllowed||(dropLocation=null,disableCursor()),
// if a valid drop location, have the subclass render a visual indication
dropLocation&&(dragHelperEls=view.renderDrag(dropLocation,seg))?(dragHelperEls.addClass("fc-dragging"),dragListener.isTouch||_this.applyDragOpacity(dragHelperEls),mouseFollower.hide()):mouseFollower.show(),isOrig&&(dropLocation=null)},hitOut:function(){// called before mouse moves to a different hit OR moved out of all hits
view.unrenderDrag(),// unrender whatever was done in renderDrag
mouseFollower.show(),// show in case we are moving out of all hits
dropLocation=null},hitDone:function(){// Called after a hitOut OR before a dragEnd
enableCursor()},interactionEnd:function(ev){delete seg.component,// prevent side effects
// do revert animation if hasn't changed. calls a callback when finished (whether animation or not)
mouseFollower.stop(!dropLocation,function(){isDragging&&(view.unrenderDrag(),_this.segDragStop(seg,ev)),dropLocation?
// no need to re-show original, will rerender all anyways. esp important if eventRenderWait
view.reportSegDrop(seg,dropLocation,_this.largeUnit,el,ev):view.showEvent(event)}),_this.segDragListener=null}});return dragListener},
// seg isn't draggable, but let's use a generic DragListener
// simply for the delay, so it can be selected.
// Has side effect of setting/unsetting `segDragListener`
buildSegSelectListener:function(seg){var _this=this,view=this.view,event=seg.event;if(this.segDragListener)return this.segDragListener;var dragListener=this.segDragListener=new DragListener({dragStart:function(ev){dragListener.isTouch&&!view.isEventSelected(event)&&
// if not previously selected, will fire after a delay. then, select the event
view.selectEvent(event)},interactionEnd:function(ev){_this.segDragListener=null}});return dragListener},
// Called before event segment dragging starts
segDragStart:function(seg,ev){this.isDraggingSeg=!0,this.view.publiclyTrigger("eventDragStart",seg.el[0],seg.event,ev,{})},
// Called after event segment dragging stops
segDragStop:function(seg,ev){this.isDraggingSeg=!1,this.view.publiclyTrigger("eventDragStop",seg.el[0],seg.event,ev,{})},
// Given the spans an event drag began, and the span event was dropped, calculates the new zoned start/end/allDay
// values for the event. Subclasses may override and set additional properties to be used by renderDrag.
// A falsy returned value indicates an invalid drop.
// DOES NOT consider overlap/constraint.
computeEventDrop:function(startSpan,endSpan,event){var delta,dropLocation,calendar=this.view.calendar,dragStart=startSpan.start,dragEnd=endSpan.start;// zoned event date properties
// if an all-day event was in a timed area and it was dragged to a different time,
// guarantee an end and adjust start/end to have times
// if switching from day <-> timed, start should be reset to the dropped date, and the end cleared
return dragStart.hasTime()===dragEnd.hasTime()?(delta=this.diffDates(dragEnd,dragStart),event.allDay&&durationHasTime(delta)?(dropLocation={start:event.start.clone(),end:calendar.getEventEnd(event),// will be an ambig day
allDay:!1},calendar.normalizeEventTimes(dropLocation)):dropLocation=pluckEventDateProps(event),dropLocation.start.add(delta),dropLocation.end&&dropLocation.end.add(delta)):dropLocation={start:dragEnd.clone(),end:null,// end should be cleared
allDay:!dragEnd.hasTime()},dropLocation},
// Utility for apply dragOpacity to a jQuery set
applyDragOpacity:function(els){var opacity=this.view.opt("dragOpacity");null!=opacity&&els.css("opacity",opacity)},/* External Element Dragging
	------------------------------------------------------------------------------------------------------------------*/
// Called when a jQuery UI drag is initiated anywhere in the DOM
externalDragStart:function(ev,ui){var el,accept,view=this.view;view.opt("droppable")&&(// only listen if this setting is on
el=$((ui?ui.item:null)||ev.target),
// Test that the dragged element passes the dropAccept selector or filter function.
// FYI, the default is "*" (matches all)
accept=view.opt("dropAccept"),($.isFunction(accept)?accept.call(el[0],el):el.is(accept))&&(this.isDraggingExternal||// prevent double-listening if fired twice
this.listenToExternalDrag(el,ev,ui)))},
// Called when a jQuery UI drag starts and it needs to be monitored for dropping
listenToExternalDrag:function(el,ev,ui){var dropLocation,_this=this,view=this.view,meta=getDraggedElMeta(el);(_this.externalDragListener=new HitDragListener(this,{interactionStart:function(){_this.isDraggingExternal=!0},hitOver:function(hit){var isAllowed=!0,hitSpan=hit.component.getSafeHitSpan(hit);// hit might not belong to this grid
hitSpan?(dropLocation=_this.computeExternalDrop(hitSpan,meta),isAllowed=dropLocation&&_this.isExternalLocationAllowed(dropLocation,meta.eventProps)):isAllowed=!1,isAllowed||(dropLocation=null,disableCursor()),dropLocation&&_this.renderDrag(dropLocation)},hitOut:function(){dropLocation=null},hitDone:function(){// Called after a hitOut OR before a dragEnd
enableCursor(),_this.unrenderDrag()},interactionEnd:function(ev){dropLocation&&// element was dropped on a valid hit
view.reportExternalDrop(meta,dropLocation,el,ev,ui),_this.isDraggingExternal=!1,_this.externalDragListener=null}})).startDrag(ev)},
// Given a hit to be dropped upon, and misc data associated with the jqui drag (guaranteed to be a plain object),
// returns the zoned start/end dates for the event that would result from the hypothetical drop. end might be null.
// Returning a null value signals an invalid drop hit.
// DOES NOT consider overlap/constraint.
computeExternalDrop:function(span,meta){var calendar=this.view.calendar,dropLocation={start:calendar.applyTimezone(span.start),// simulate a zoned event start date
end:null};
// if dropped on an all-day span, and element's metadata specified a time, set it
return meta.startTime&&!dropLocation.start.hasTime()&&dropLocation.start.time(meta.startTime),meta.duration&&(dropLocation.end=dropLocation.start.clone().add(meta.duration)),dropLocation},/* Drag Rendering (for both events and an external elements)
	------------------------------------------------------------------------------------------------------------------*/
// Renders a visual indication of an event or external element being dragged.
// `dropLocation` contains hypothetical start/end/allDay values the event would have if dropped. end can be null.
// `seg` is the internal segment object that is being dragged. If dragging an external element, `seg` is null.
// A truthy returned value indicates this method has rendered a helper element.
// Must return elements used for any mock events.
renderDrag:function(dropLocation,seg){},
// Unrenders a visual indication of an event or external element being dragged
unrenderDrag:function(){},/* Resizing
	------------------------------------------------------------------------------------------------------------------*/
// Creates a listener that tracks the user as they resize an event segment.
// Generic enough to work with any type of Grid.
buildSegResizeListener:function(seg,isStart){var isDragging,resizeLocation,_this=this,view=this.view,calendar=view.calendar,el=seg.el,event=seg.event,eventEnd=calendar.getEventEnd(event);return this.segResizeListener=new HitDragListener(this,{scroll:view.opt("dragScroll"),subjectEl:el,interactionStart:function(){isDragging=!1},dragStart:function(ev){isDragging=!0,_this.handleSegMouseout(seg,ev),// ensure a mouseout on the manipulated event has been reported
_this.segResizeStart(seg,ev)},hitOver:function(hit,isOrig,origHit){var isAllowed=!0,origHitSpan=_this.getSafeHitSpan(origHit),hitSpan=_this.getSafeHitSpan(hit);origHitSpan&&hitSpan?(resizeLocation=isStart?_this.computeEventStartResize(origHitSpan,hitSpan,event):_this.computeEventEndResize(origHitSpan,hitSpan,event),isAllowed=resizeLocation&&_this.isEventLocationAllowed(resizeLocation,event)):isAllowed=!1,isAllowed?resizeLocation.start.isSame(event.start.clone().stripZone())&&resizeLocation.end.isSame(eventEnd.clone().stripZone())&&(
// no change. (FYI, event dates might have zones)
resizeLocation=null):(resizeLocation=null,disableCursor()),resizeLocation&&(view.hideEvent(event),_this.renderEventResize(resizeLocation,seg))},hitOut:function(){// called before mouse moves to a different hit OR moved out of all hits
resizeLocation=null,view.showEvent(event)},hitDone:function(){// resets the rendering to show the original event
_this.unrenderEventResize(),enableCursor()},interactionEnd:function(ev){isDragging&&_this.segResizeStop(seg,ev),resizeLocation?// valid date to resize to?
// no need to re-show original, will rerender all anyways. esp important if eventRenderWait
view.reportSegResize(seg,resizeLocation,_this.largeUnit,el,ev):view.showEvent(event),_this.segResizeListener=null}})},
// Called before event segment resizing starts
segResizeStart:function(seg,ev){this.isResizingSeg=!0,this.view.publiclyTrigger("eventResizeStart",seg.el[0],seg.event,ev,{})},
// Called after event segment resizing stops
segResizeStop:function(seg,ev){this.isResizingSeg=!1,this.view.publiclyTrigger("eventResizeStop",seg.el[0],seg.event,ev,{})},
// Returns new date-information for an event segment being resized from its start
computeEventStartResize:function(startSpan,endSpan,event){return this.computeEventResize("start",startSpan,endSpan,event)},
// Returns new date-information for an event segment being resized from its end
computeEventEndResize:function(startSpan,endSpan,event){return this.computeEventResize("end",startSpan,endSpan,event)},
// Returns new zoned date information for an event segment being resized from its start OR end
// `type` is either 'start' or 'end'.
// DOES NOT consider overlap/constraint.
computeEventResize:function(type,startSpan,endSpan,event){var resizeLocation,defaultDuration,calendar=this.view.calendar,delta=this.diffDates(endSpan[type],startSpan[type]);
// build original values to work from, guaranteeing a start and end
// if an all-day event was in a timed area and was resized to a time, adjust start/end to have times
// apply delta to start or end
// if the event was compressed too small, find a new reasonable duration for it
// TODO: hack
// resizing the start?
// resizing the end?
return resizeLocation={start:event.start.clone(),end:calendar.getEventEnd(event),allDay:event.allDay},resizeLocation.allDay&&durationHasTime(delta)&&(resizeLocation.allDay=!1,calendar.normalizeEventTimes(resizeLocation)),resizeLocation[type].add(delta),resizeLocation.start.isBefore(resizeLocation.end)||(defaultDuration=this.minResizeDuration||(event.allDay?calendar.defaultAllDayEventDuration:calendar.defaultTimedEventDuration),"start"==type?resizeLocation.start=resizeLocation.end.clone().subtract(defaultDuration):resizeLocation.end=resizeLocation.start.clone().add(defaultDuration)),resizeLocation},
// Renders a visual indication of an event being resized.
// `range` has the updated dates of the event. `seg` is the original segment object involved in the drag.
// Must return elements used for any mock events.
renderEventResize:function(range,seg){},
// Unrenders a visual indication of an event being resized.
unrenderEventResize:function(){},/* Rendering Utils
	------------------------------------------------------------------------------------------------------------------*/
// Compute the text that should be displayed on an event's element.
// `range` can be the Event object itself, or something range-like, with at least a `start`.
// If event times are disabled, or the event has no time, will return a blank string.
// If not specified, formatStr will default to the eventTimeFormat setting,
// and displayEnd will default to the displayEventEnd setting.
getEventTimeText:function(range,formatStr,displayEnd){return null==formatStr&&(formatStr=this.eventTimeFormat),null==displayEnd&&(displayEnd=this.displayEventEnd),this.displayEventTime&&range.start.hasTime()?displayEnd&&range.end?this.view.formatRange(range,formatStr):range.start.format(formatStr):""},
// Generic utility for generating the HTML classNames for an event segment's element
getSegClasses:function(seg,isDraggable,isResizable){var view=this.view,classes=["fc-event",seg.isStart?"fc-start":"fc-not-start",seg.isEnd?"fc-end":"fc-not-end"].concat(this.getSegCustomClasses(seg));
// event is currently selected? attach a className.
return isDraggable&&classes.push("fc-draggable"),isResizable&&classes.push("fc-resizable"),view.isEventSelected(seg.event)&&classes.push("fc-selected"),classes},
// List of classes that were defined by the caller of the API in some way
getSegCustomClasses:function(seg){var event=seg.event;// guaranteed to be an array
return[].concat(event.className,event.source?event.source.className:[])},
// Utility for generating event skin-related CSS properties
getSegSkinCss:function(seg){return{"background-color":this.getSegBackgroundColor(seg),"border-color":this.getSegBorderColor(seg),color:this.getSegTextColor(seg)}},
// Queries for caller-specified color, then falls back to default
getSegBackgroundColor:function(seg){return seg.event.backgroundColor||seg.event.color||this.getSegDefaultBackgroundColor(seg)},getSegDefaultBackgroundColor:function(seg){var source=seg.event.source||{};return source.backgroundColor||source.color||this.view.opt("eventBackgroundColor")||this.view.opt("eventColor")},
// Queries for caller-specified color, then falls back to default
getSegBorderColor:function(seg){return seg.event.borderColor||seg.event.color||this.getSegDefaultBorderColor(seg)},getSegDefaultBorderColor:function(seg){var source=seg.event.source||{};return source.borderColor||source.color||this.view.opt("eventBorderColor")||this.view.opt("eventColor")},
// Queries for caller-specified color, then falls back to default
getSegTextColor:function(seg){return seg.event.textColor||this.getSegDefaultTextColor(seg)},getSegDefaultTextColor:function(seg){return(seg.event.source||{}).textColor||this.view.opt("eventTextColor")},/* Event Location Validation
	------------------------------------------------------------------------------------------------------------------*/
isEventLocationAllowed:function(eventLocation,event){if(this.isEventLocationInRange(eventLocation)){var i,calendar=this.view.calendar,eventSpans=this.eventToSpans(eventLocation);if(eventSpans.length){for(i=0;i<eventSpans.length;i++)if(!calendar.isEventSpanAllowed(eventSpans[i],event))return!1;return!0}}return!1},isExternalLocationAllowed:function(eventLocation,metaProps){// FOR the external element
if(this.isEventLocationInRange(eventLocation)){var i,calendar=this.view.calendar,eventSpans=this.eventToSpans(eventLocation);if(eventSpans.length){for(i=0;i<eventSpans.length;i++)if(!calendar.isExternalSpanAllowed(eventSpans[i],eventLocation,metaProps))return!1;return!0}}return!1},isEventLocationInRange:function(eventLocation){return isRangeWithinRange(this.eventToRawRange(eventLocation),this.view.validRange)},/* Converting events -> eventRange -> eventSpan -> eventSegs
	------------------------------------------------------------------------------------------------------------------*/
// Generates an array of segments for the given single event
// Can accept an event "location" as well (which only has start/end and no allDay)
eventToSegs:function(event){return this.eventsToSegs([event])},
// Generates spans (always unzoned) for the given event.
// Does not do any inverting for inverse-background events.
// Can accept an event "location" as well (which only has start/end and no allDay)
eventToSpans:function(event){var eventRange=this.eventToRange(event);// { start, end, isStart, isEnd }
// { start, end, isStart, isEnd }
return eventRange?this.eventRangeToSpans(eventRange,event):[]},
// Converts an array of event objects into an array of event segment objects.
// A custom `segSliceFunc` may be given for arbitrarily slicing up events.
// Doesn't guarantee an order for the resulting array.
eventsToSegs:function(allEvents,segSliceFunc){var _this=this,eventsById=groupEventsById(allEvents),segs=[];return $.each(eventsById,function(id,events){var eventRange,i,visibleEvents=[],eventRanges=[];for(i=0;i<events.length;i++)// might be null if completely out of range
(eventRange=_this.eventToRange(events[i]))&&(eventRanges.push(eventRange),visibleEvents.push(events[i]));
// inverse-background events (utilize only the first event in calculations)
if(isInverseBgEvent(events[0]))// will lose isStart/isEnd
for(eventRanges=_this.invertRanges(eventRanges),i=0;i<eventRanges.length;i++)segs.push.apply(segs,// append to
_this.eventRangeToSegs(eventRanges[i],events[0],segSliceFunc));else for(i=0;i<eventRanges.length;i++)segs.push.apply(segs,// append to
_this.eventRangeToSegs(eventRanges[i],visibleEvents[i],segSliceFunc))}),segs},
// Generates the unzoned start/end dates an event appears to occupy
// Can accept an event "location" as well (which only has start/end and no allDay)
// returns { start, end, isStart, isEnd }
// If the event is completely outside of the grid's valid range, will return undefined.
eventToRange:function(event){return this.refineRawEventRange(this.eventToRawRange(event))},
// Ensures the given range is within the view's activeRange and is correctly localized.
// Always returns a result
refineRawEventRange:function(rawRange){var view=this.view,calendar=view.calendar,range=intersectRanges(rawRange,view.activeRange);if(range)// otherwise, event doesn't have valid range
// hack: dynamic locale change forgets to upate stored event localed
return calendar.localizeMoment(range.start),calendar.localizeMoment(range.end),range},
// not constrained to valid dates
// not given localizeMoment hack
eventToRawRange:function(event){var calendar=this.view.calendar;return{start:event.start.clone().stripZone(),end:(event.end?event.end.clone():
// derive the end from the start and allDay. compute allDay if necessary
calendar.getDefaultEventEnd(null!=event.allDay?event.allDay:!event.start.hasTime(),event.start)).stripZone()}},
// Given an event's range (unzoned start/end), and the event itself,
// slice into segments (using the segSliceFunc function if specified)
// eventRange - { start, end, isStart, isEnd }
eventRangeToSegs:function(eventRange,event,segSliceFunc){var i,eventSpans=this.eventRangeToSpans(eventRange,event),segs=[];for(i=0;i<eventSpans.length;i++)segs.push.apply(segs,// append to
this.eventSpanToSegs(eventSpans[i],event,segSliceFunc));return segs},
// Given an event's unzoned date range, return an array of eventSpan objects.
// eventSpan - { start, end, isStart, isEnd, otherthings... }
// Subclasses can override.
// Subclasses are obligated to forward eventRange.isStart/isEnd to the resulting spans.
eventRangeToSpans:function(eventRange,event){return[$.extend({},eventRange)]},
// Given an event's span (unzoned start/end and other misc data), and the event itself,
// slices into segments and attaches event-derived properties to them.
// eventSpan - { start, end, isStart, isEnd, otherthings... }
eventSpanToSegs:function(eventSpan,event,segSliceFunc){var i,seg,segs=segSliceFunc?segSliceFunc(eventSpan):this.spanToSegs(eventSpan);for(i=0;i<segs.length;i++)seg=segs[i],
// the eventSpan's isStart/isEnd takes precedence over the seg's
eventSpan.isStart||(seg.isStart=!1),eventSpan.isEnd||(seg.isEnd=!1),seg.event=event,seg.eventStartMS=+eventSpan.start,// TODO: not the best name after making spans unzoned
seg.eventDurationMS=eventSpan.end-eventSpan.start;return segs},
// Produces a new array of range objects that will cover all the time NOT covered by the given ranges.
// SIDE EFFECT: will mutate the given array and will use its date references.
invertRanges:function(ranges){var i,range,view=this.view,viewStart=view.activeRange.start.clone(),viewEnd=view.activeRange.end.clone(),inverseRanges=[],start=viewStart;for(
// ranges need to be in order. required for our date-walking algorithm
ranges.sort(compareRanges),i=0;i<ranges.length;i++)range=ranges[i],
// add the span of time before the event (if there is any)
range.start>start&&// compare millisecond time (skip any ambig logic)
inverseRanges.push({start:start,end:range.start}),range.end>start&&(start=range.end);
// add the span of time after the last event (if there is any)
// compare millisecond time (skip any ambig logic)
return start<viewEnd&&inverseRanges.push({start:start,end:viewEnd}),inverseRanges},sortEventSegs:function(segs){segs.sort(proxy(this,"compareEventSegs"))},
// A cmp function for determining which segments should take visual priority
compareEventSegs:function(seg1,seg2){// earlier events go first
// tie? longer events go first
// tie? put all-day events first (booleans cast to 0/1)
return seg1.eventStartMS-seg2.eventStartMS||seg2.eventDurationMS-seg1.eventDurationMS||seg2.event.allDay-seg1.event.allDay||compareByFieldSpecs(seg1.event,seg2.event,this.view.eventOrderSpecs)}}),FC.pluckEventDateProps=pluckEventDateProps,FC.isBgEvent=isBgEvent,/* External-Dragging-Element Data
----------------------------------------------------------------------------------------------------------------------*/
// Require all HTML5 data-* attributes used by FullCalendar to have this prefix.
// A value of '' will query attributes like data-event. A value of 'fc' will query attributes like data-fc-event.
FC.dataAttrPrefix="";/*
A set of rendering and date-related methods for a visual component comprised of one or more rows of day columns.
Prerequisite: the object being mixed into needs to be a *Grid*
*/
var DayTableMixin=FC.DayTableMixin={breakOnWeeks:!1,// should create a new row for each week?
dayDates:null,// whole-day dates for each column. left to right
dayIndices:null,// for each day from start, the offset
daysPerRow:null,rowCnt:null,colCnt:null,colHeadFormat:null,
// Populates internal variables used for date calculation and rendering
updateDayTable:function(){for(var daysPerRow,firstDay,rowCnt,view=this.view,date=this.start.clone(),dayIndex=-1,dayIndices=[],dayDates=[];date.isBefore(this.end);)// loop each day from start to end
view.isHiddenDay(date)?dayIndices.push(dayIndex+.5):(dayIndex++,dayIndices.push(dayIndex),dayDates.push(date.clone())),date.add(1,"days");if(this.breakOnWeeks){for(
// count columns until the day-of-week repeats
firstDay=dayDates[0].day(),daysPerRow=1;daysPerRow<dayDates.length&&dayDates[daysPerRow].day()!=firstDay;daysPerRow++);rowCnt=Math.ceil(dayDates.length/daysPerRow)}else rowCnt=1,daysPerRow=dayDates.length;this.dayDates=dayDates,this.dayIndices=dayIndices,this.daysPerRow=daysPerRow,this.rowCnt=rowCnt,this.updateDayTableCols()},
// Computes and assigned the colCnt property and updates any options that may be computed from it
updateDayTableCols:function(){this.colCnt=this.computeColCnt(),this.colHeadFormat=this.view.opt("columnFormat")||this.computeColHeadFormat()},
// Determines how many columns there should be in the table
computeColCnt:function(){return this.daysPerRow},
// Computes the ambiguously-timed moment for the given cell
getCellDate:function(row,col){return this.dayDates[this.getCellDayIndex(row,col)].clone()},
// Computes the ambiguously-timed date range for the given cell
getCellRange:function(row,col){var start=this.getCellDate(row,col);return{start:start,end:start.clone().add(1,"days")}},
// Returns the number of day cells, chronologically, from the first of the grid (0-based)
getCellDayIndex:function(row,col){return row*this.daysPerRow+this.getColDayIndex(col)},
// Returns the numner of day cells, chronologically, from the first cell in *any given row*
getColDayIndex:function(col){return this.isRTL?this.colCnt-1-col:col},
// Given a date, returns its chronolocial cell-index from the first cell of the grid.
// If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
// If before the first offset, returns a negative number.
// If after the last offset, returns an offset past the last cell offset.
// Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
getDateDayIndex:function(date){var dayIndices=this.dayIndices,dayOffset=date.diff(this.start,"days");return dayOffset<0?dayIndices[0]-1:dayOffset>=dayIndices.length?dayIndices[dayIndices.length-1]+1:dayIndices[dayOffset]},/* Options
	------------------------------------------------------------------------------------------------------------------*/
// Computes a default column header formatting string if `colFormat` is not explicitly defined
computeColHeadFormat:function(){
// if more than one week row, or if there are a lot of columns with not much space,
// put just the day numbers will be in each cell
// if more than one week row, or if there are a lot of columns with not much space,
// put just the day numbers will be in each cell
return this.rowCnt>1||this.colCnt>10?"ddd":this.colCnt>1?this.view.opt("dayOfMonthFormat"):"dddd"},/* Slicing
	------------------------------------------------------------------------------------------------------------------*/
// Slices up a date range into a segment for every week-row it intersects with
sliceRangeByRow:function(range){var row,rowFirst,rowLast,segFirst,segLast,daysPerRow=this.daysPerRow,normalRange=this.view.computeDayRange(range),rangeFirst=this.getDateDayIndex(normalRange.start),rangeLast=this.getDateDayIndex(normalRange.end.clone().subtract(1,"days")),segs=[];// inclusive day-index range for segment
for(row=0;row<this.rowCnt;row++)rowFirst=row*daysPerRow,rowLast=rowFirst+daysPerRow-1,
// intersect segment's offset range with the row's
segFirst=Math.max(rangeFirst,rowFirst),segLast=Math.min(rangeLast,rowLast),
// deal with in-between indices
segFirst=Math.ceil(segFirst),// in-between starts round to next cell
segLast=Math.floor(segLast),// in-between ends round to prev cell
segFirst<=segLast&&// was there any intersection with the current row?
segs.push({row:row,
// normalize to start of row
firstRowDayIndex:segFirst-rowFirst,lastRowDayIndex:segLast-rowFirst,
// must be matching integers to be the segment's start/end
isStart:segFirst===rangeFirst,isEnd:segLast===rangeLast});return segs},
// Slices up a date range into a segment for every day-cell it intersects with.
// TODO: make more DRY with sliceRangeByRow somehow.
sliceRangeByDay:function(range){var row,rowFirst,rowLast,i,segFirst,segLast,daysPerRow=this.daysPerRow,normalRange=this.view.computeDayRange(range),rangeFirst=this.getDateDayIndex(normalRange.start),rangeLast=this.getDateDayIndex(normalRange.end.clone().subtract(1,"days")),segs=[];// inclusive day-index range for segment
for(row=0;row<this.rowCnt;row++)for(rowFirst=row*daysPerRow,rowLast=rowFirst+daysPerRow-1,i=rowFirst;i<=rowLast;i++)
// intersect segment's offset range with the row's
segFirst=Math.max(rangeFirst,i),segLast=Math.min(rangeLast,i),
// deal with in-between indices
segFirst=Math.ceil(segFirst),// in-between starts round to next cell
segLast=Math.floor(segLast),// in-between ends round to prev cell
segFirst<=segLast&&// was there any intersection with the current row?
segs.push({row:row,
// normalize to start of row
firstRowDayIndex:segFirst-rowFirst,lastRowDayIndex:segLast-rowFirst,
// must be matching integers to be the segment's start/end
isStart:segFirst===rangeFirst,isEnd:segLast===rangeLast});return segs},/* Header Rendering
	------------------------------------------------------------------------------------------------------------------*/
renderHeadHtml:function(){return'<div class="fc-row '+this.view.widgetHeaderClass+'"><table><thead>'+this.renderHeadTrHtml()+"</thead></table></div>"},renderHeadIntroHtml:function(){return this.renderIntroHtml()},renderHeadTrHtml:function(){return"<tr>"+(this.isRTL?"":this.renderHeadIntroHtml())+this.renderHeadDateCellsHtml()+(this.isRTL?this.renderHeadIntroHtml():"")+"</tr>"},renderHeadDateCellsHtml:function(){var col,date,htmls=[];for(col=0;col<this.colCnt;col++)date=this.getCellDate(0,col),htmls.push(this.renderHeadDateCellHtml(date));return htmls.join("")},
// TODO: when internalApiVersion, accept an object for HTML attributes
// (colspan should be no different)
renderHeadDateCellHtml:function(date,colspan,otherAttrs){var view=this.view,isDateValid=isDateWithinRange(date,view.activeRange),classNames=["fc-day-header",view.widgetHeaderClass],innerHtml=htmlEscape(date.format(this.colHeadFormat));
// if only one row of days, the classNames on the header can represent the specific days beneath
// includes the day-of-week class
// noThemeHighlight=true (don't highlight the header)
// don't make a link if the heading could represent multiple days, or if there's only one day (forceOff)
// if not valid, display text, but no link
return 1===this.rowCnt?classNames=classNames.concat(this.getDayClasses(date,!0)):classNames.push("fc-"+dayIDs[date.day()]),'<th class="'+classNames.join(" ")+'"'+(1===(isDateValid&&this.rowCnt)?' data-date="'+date.format("YYYY-MM-DD")+'"':"")+(colspan>1?' colspan="'+colspan+'"':"")+(otherAttrs?" "+otherAttrs:"")+">"+(isDateValid?view.buildGotoAnchorHtml({date:date,forceOff:this.rowCnt>1||1===this.colCnt},innerHtml):innerHtml)+"</th>"},/* Background Rendering
	------------------------------------------------------------------------------------------------------------------*/
renderBgTrHtml:function(row){return"<tr>"+(this.isRTL?"":this.renderBgIntroHtml(row))+this.renderBgCellsHtml(row)+(this.isRTL?this.renderBgIntroHtml(row):"")+"</tr>"},renderBgIntroHtml:function(row){return this.renderIntroHtml()},renderBgCellsHtml:function(row){var col,date,htmls=[];for(col=0;col<this.colCnt;col++)date=this.getCellDate(row,col),htmls.push(this.renderBgCellHtml(date));return htmls.join("")},renderBgCellHtml:function(date,otherAttrs){var view=this.view,isDateValid=isDateWithinRange(date,view.activeRange),classes=this.getDayClasses(date);// if date has a time, won't format it
return classes.unshift("fc-day",view.widgetContentClass),'<td class="'+classes.join(" ")+'"'+(isDateValid?' data-date="'+date.format("YYYY-MM-DD")+'"':"")+(otherAttrs?" "+otherAttrs:"")+"></td>"},/* Generic
	------------------------------------------------------------------------------------------------------------------*/
// Generates the default HTML intro for any row. User classes should override
renderIntroHtml:function(){},
// TODO: a generic method for dealing with <tr>, RTL, intro
// when increment internalApiVersion
// wrapTr (scheduler)
/* Utils
	------------------------------------------------------------------------------------------------------------------*/
// Applies the generic "intro" and "outro" HTML to the given cells.
// Intro means the leftmost cell when the calendar is LTR and the rightmost cell when RTL. Vice-versa for outro.
bookendCells:function(trEl){var introHtml=this.renderIntroHtml();introHtml&&(this.isRTL?trEl.append(introHtml):trEl.prepend(introHtml))}},DayGrid=FC.DayGrid=Grid.extend(DayTableMixin,{numbersVisible:!1,// should render a row for day/week numbers? set by outside view. TODO: make internal
bottomCoordPadding:0,// hack for extending the hit area for the last row of the coordinate grid
rowEls:null,// set of fake row elements
cellEls:null,// set of whole-day elements comprising the row's background
helperEls:null,// set of cell skeleton elements for rendering the mock event "helper"
rowCoordCache:null,colCoordCache:null,
// Renders the rows and columns into the component's `this.el`, which should already be assigned.
// isRigid determins whether the individual rows should ignore the contents and be a constant height.
// Relies on the view's colCnt and rowCnt. In the future, this component should probably be self-sufficient.
renderDates:function(isRigid){var row,col,view=this.view,rowCnt=this.rowCnt,colCnt=this.colCnt,html="";for(row=0;row<rowCnt;row++)html+=this.renderDayRowHtml(row,isRigid);
// trigger dayRender with each cell's element
for(this.el.html(html),this.rowEls=this.el.find(".fc-row"),this.cellEls=this.el.find(".fc-day, .fc-disabled-day"),this.rowCoordCache=new CoordCache({els:this.rowEls,isVertical:!0}),this.colCoordCache=new CoordCache({els:this.cellEls.slice(0,this.colCnt),// only the first row
isHorizontal:!0}),row=0;row<rowCnt;row++)for(col=0;col<colCnt;col++)view.publiclyTrigger("dayRender",null,this.getCellDate(row,col),this.getCellEl(row,col))},unrenderDates:function(){this.removeSegPopover()},renderBusinessHours:function(){var segs=this.buildBusinessHourSegs(!0);// wholeDay=true
this.renderFill("businessHours",segs,"bgevent")},unrenderBusinessHours:function(){this.unrenderFill("businessHours")},
// Generates the HTML for a single row, which is a div that wraps a table.
// `row` is the row number.
renderDayRowHtml:function(row,isRigid){var view=this.view,classes=["fc-row","fc-week",view.widgetContentClass];return isRigid&&classes.push("fc-rigid"),'<div class="'+classes.join(" ")+'"><div class="fc-bg"><table>'+this.renderBgTrHtml(row)+'</table></div><div class="fc-content-skeleton"><table>'+(this.numbersVisible?"<thead>"+this.renderNumberTrHtml(row)+"</thead>":"")+"</table></div></div>"},/* Grid Number Rendering
	------------------------------------------------------------------------------------------------------------------*/
renderNumberTrHtml:function(row){return"<tr>"+(this.isRTL?"":this.renderNumberIntroHtml(row))+this.renderNumberCellsHtml(row)+(this.isRTL?this.renderNumberIntroHtml(row):"")+"</tr>"},renderNumberIntroHtml:function(row){return this.renderIntroHtml()},renderNumberCellsHtml:function(row){var col,date,htmls=[];for(col=0;col<this.colCnt;col++)date=this.getCellDate(row,col),htmls.push(this.renderNumberCellHtml(date));return htmls.join("")},
// Generates the HTML for the <td>s of the "number" row in the DayGrid's content skeleton.
// The number row will only exist if either day numbers or week numbers are turned on.
renderNumberCellHtml:function(date){var classes,weekCalcFirstDoW,view=this.view,html="",isDateValid=isDateWithinRange(date,view.activeRange),isDayNumberVisible=view.dayNumbersVisible&&isDateValid;
// To determine the day of week number change under ISO, we cannot
// rely on moment.js methods such as firstDayOfWeek() or weekday(),
// because they rely on the locale's dow (possibly overridden by
// our firstDay option), which may not be Monday. We cannot change
// dow, because that would affect the calendar start day as well.
return isDayNumberVisible||view.cellWeekNumbersVisible?(classes=this.getDayClasses(date),classes.unshift("fc-day-top"),view.cellWeekNumbersVisible&&(weekCalcFirstDoW="ISO"===date._locale._fullCalendar_weekCalc?1:date._locale.firstDayOfWeek()),html+='<td class="'+classes.join(" ")+'"'+(isDateValid?' data-date="'+date.format()+'"':"")+">",view.cellWeekNumbersVisible&&date.day()==weekCalcFirstDoW&&(html+=view.buildGotoAnchorHtml({date:date,type:"week"},{class:"fc-week-number"},date.format("w"))),isDayNumberVisible&&(html+=view.buildGotoAnchorHtml(date,{class:"fc-day-number"},date.date())),html+="</td>"):"<td/>"},/* Options
	------------------------------------------------------------------------------------------------------------------*/
// Computes a default event time formatting string if `timeFormat` is not explicitly defined
computeEventTimeFormat:function(){return this.view.opt("extraSmallTimeFormat")},
// Computes a default `displayEventEnd` value if one is not expliclty defined
computeDisplayEventEnd:function(){return 1==this.colCnt},/* Dates
	------------------------------------------------------------------------------------------------------------------*/
rangeUpdated:function(){this.updateDayTable()},
// Slices up the given span (unzoned start/end with other misc data) into an array of segments
spanToSegs:function(span){var i,seg,segs=this.sliceRangeByRow(span);for(i=0;i<segs.length;i++)seg=segs[i],this.isRTL?(seg.leftCol=this.daysPerRow-1-seg.lastRowDayIndex,seg.rightCol=this.daysPerRow-1-seg.firstRowDayIndex):(seg.leftCol=seg.firstRowDayIndex,seg.rightCol=seg.lastRowDayIndex);return segs},/* Hit System
	------------------------------------------------------------------------------------------------------------------*/
prepareHits:function(){this.colCoordCache.build(),this.rowCoordCache.build(),this.rowCoordCache.bottoms[this.rowCnt-1]+=this.bottomCoordPadding},releaseHits:function(){this.colCoordCache.clear(),this.rowCoordCache.clear()},queryHit:function(leftOffset,topOffset){if(this.colCoordCache.isLeftInBounds(leftOffset)&&this.rowCoordCache.isTopInBounds(topOffset)){var col=this.colCoordCache.getHorizontalIndex(leftOffset),row=this.rowCoordCache.getVerticalIndex(topOffset);if(null!=row&&null!=col)return this.getCellHit(row,col)}},getHitSpan:function(hit){return this.getCellRange(hit.row,hit.col)},getHitEl:function(hit){return this.getCellEl(hit.row,hit.col)},/* Cell System
	------------------------------------------------------------------------------------------------------------------*/
// FYI: the first column is the leftmost column, regardless of date
getCellHit:function(row,col){return{row:row,col:col,component:this,// needed unfortunately :(
left:this.colCoordCache.getLeftOffset(col),right:this.colCoordCache.getRightOffset(col),top:this.rowCoordCache.getTopOffset(row),bottom:this.rowCoordCache.getBottomOffset(row)}},getCellEl:function(row,col){return this.cellEls.eq(row*this.colCnt+col)},/* Event Drag Visualization
	------------------------------------------------------------------------------------------------------------------*/
// TODO: move to DayGrid.event, similar to what we did with Grid's drag methods
// Renders a visual indication of an event or external element being dragged.
// `eventLocation` has zoned start and end (optional)
renderDrag:function(eventLocation,seg){var i,eventSpans=this.eventToSpans(eventLocation);
// always render a highlight underneath
for(i=0;i<eventSpans.length;i++)this.renderHighlight(eventSpans[i]);
// if a segment from the same calendar but another component is being dragged, render a helper event
if(seg&&seg.component!==this)return this.renderEventLocationHelper(eventLocation,seg)},
// Unrenders any visual indication of a hovering event
unrenderDrag:function(){this.unrenderHighlight(),this.unrenderHelper()},/* Event Resize Visualization
	------------------------------------------------------------------------------------------------------------------*/
// Renders a visual indication of an event being resized
renderEventResize:function(eventLocation,seg){var i,eventSpans=this.eventToSpans(eventLocation);for(i=0;i<eventSpans.length;i++)this.renderHighlight(eventSpans[i]);return this.renderEventLocationHelper(eventLocation,seg)},
// Unrenders a visual indication of an event being resized
unrenderEventResize:function(){this.unrenderHighlight(),this.unrenderHelper()},/* Event Helper
	------------------------------------------------------------------------------------------------------------------*/
// Renders a mock "helper" event. `sourceSeg` is the associated internal segment object. It can be null.
renderHelper:function(event,sourceSeg){var rowStructs,helperNodes=[],segs=this.eventToSegs(event);// assigns each seg's el and returns a subset of segs that were rendered
// inject each new event skeleton into each associated row
// must return the elements rendered
return segs=this.renderFgSegEls(segs),rowStructs=this.renderSegRows(segs),this.rowEls.each(function(row,rowNode){var skeletonTop,rowEl=$(rowNode),skeletonEl=$('<div class="fc-helper-skeleton"><table/></div>');
// If there is an original segment, match the top position. Otherwise, put it at the row's top level
skeletonTop=sourceSeg&&sourceSeg.row===row?sourceSeg.el.position().top:rowEl.find(".fc-content-skeleton tbody").position().top,skeletonEl.css("top",skeletonTop).find("table").append(rowStructs[row].tbodyEl),rowEl.append(skeletonEl),helperNodes.push(skeletonEl[0])}),this.helperEls=$(helperNodes)},
// Unrenders any visual indication of a mock helper event
unrenderHelper:function(){this.helperEls&&(this.helperEls.remove(),this.helperEls=null)},/* Fill System (highlight, background events, business hours)
	------------------------------------------------------------------------------------------------------------------*/
fillSegTag:"td",// override the default tag name
// Renders a set of rectangles over the given segments of days.
// Only returns segments that successfully rendered.
renderFill:function(type,segs,className){var i,seg,skeletonEl,nodes=[];// assignes `.el` to each seg. returns successfully rendered segs
for(segs=this.renderFillSegEls(type,segs),i=0;i<segs.length;i++)seg=segs[i],skeletonEl=this.renderFillRow(type,seg,className),this.rowEls.eq(seg.row).append(skeletonEl),nodes.push(skeletonEl[0]);return this.elsByFill[type]=$(nodes),segs},
// Generates the HTML needed for one row of a fill. Requires the seg's el to be rendered.
renderFillRow:function(type,seg,className){var skeletonEl,trEl,colCnt=this.colCnt,startCol=seg.leftCol,endCol=seg.rightCol+1;return className=className||type.toLowerCase(),skeletonEl=$('<div class="fc-'+className+'-skeleton"><table><tr/></table></div>'),trEl=skeletonEl.find("tr"),startCol>0&&trEl.append('<td colspan="'+startCol+'"/>'),trEl.append(seg.el.attr("colspan",endCol-startCol)),endCol<colCnt&&trEl.append('<td colspan="'+(colCnt-endCol)+'"/>'),this.bookendCells(trEl),skeletonEl}});/* Event-rendering methods for the DayGrid class
----------------------------------------------------------------------------------------------------------------------*/
DayGrid.mixin({rowStructs:null,// an array of objects, each holding information about a row's foreground event-rendering
// Unrenders all events currently rendered on the grid
unrenderEvents:function(){this.removeSegPopover(),// removes the "more.." events popover
Grid.prototype.unrenderEvents.apply(this,arguments)},
// Retrieves all rendered segment objects currently rendered on the grid
getEventSegs:function(){return Grid.prototype.getEventSegs.call(this).concat(this.popoverSegs||[])},
// Renders the given background event segments onto the grid
renderBgSegs:function(segs){
// don't render timed background events
var allDaySegs=$.grep(segs,function(seg){return seg.event.allDay});return Grid.prototype.renderBgSegs.call(this,allDaySegs)},
// Renders the given foreground event segments onto the grid
renderFgSegs:function(segs){var rowStructs;
// render an `.el` on each seg
// returns a subset of the segs. segs that were actually rendered
// append to each row's content skeleton
return segs=this.renderFgSegEls(segs),rowStructs=this.rowStructs=this.renderSegRows(segs),this.rowEls.each(function(i,rowNode){$(rowNode).find(".fc-content-skeleton > table").append(rowStructs[i].tbodyEl)}),segs},
// Unrenders all currently rendered foreground event segments
unrenderFgSegs:function(){for(var rowStruct,rowStructs=this.rowStructs||[];rowStruct=rowStructs.pop();)rowStruct.tbodyEl.remove();this.rowStructs=null},
// Uses the given events array to generate <tbody> elements that should be appended to each row's content skeleton.
// Returns an array of rowStruct objects (see the bottom of `renderSegRow`).
// PRECONDITION: each segment shoud already have a rendered and assigned `.el`
renderSegRows:function(segs){var segRows,row,rowStructs=[];// group into nested arrays
// iterate each row of segment groupings
for(segRows=this.groupSegRows(segs),row=0;row<segRows.length;row++)rowStructs.push(this.renderSegRow(row,segRows[row]));return rowStructs},
// Builds the HTML to be used for the default element for an individual segment
fgSegHtml:function(seg,disableResizing){var timeText,titleHtml,view=this.view,event=seg.event,isDraggable=view.isEventDraggable(event),isResizableFromStart=!disableResizing&&event.allDay&&seg.isStart&&view.isEventResizableFromStart(event),isResizableFromEnd=!disableResizing&&event.allDay&&seg.isEnd&&view.isEventResizableFromEnd(event),classes=this.getSegClasses(seg,isDraggable,isResizableFromStart||isResizableFromEnd),skinCss=cssToStr(this.getSegSkinCss(seg)),timeHtml="";
// Only display a timed events time if it is the starting segment
// we always want one line of height
// put a natural space in between
return classes.unshift("fc-day-grid-event","fc-h-event"),seg.isStart&&(timeText=this.getEventTimeText(event))&&(timeHtml='<span class="fc-time">'+htmlEscape(timeText)+"</span>"),titleHtml='<span class="fc-title">'+(htmlEscape(event.title||"")||"&nbsp;")+"</span>",'<a class="'+classes.join(" ")+'"'+(event.url?' href="'+htmlEscape(event.url)+'"':"")+(skinCss?' style="'+skinCss+'"':"")+'><div class="fc-content">'+(this.isRTL?titleHtml+" "+timeHtml:timeHtml+" "+titleHtml)+"</div>"+(isResizableFromStart?'<div class="fc-resizer fc-start-resizer" />':"")+(isResizableFromEnd?'<div class="fc-resizer fc-end-resizer" />':"")+"</a>"},
// Given a row # and an array of segments all in the same row, render a <tbody> element, a skeleton that contains
// the segments. Returns object with a bunch of internal data about how the render was calculated.
// NOTE: modifies rowSegs
renderSegRow:function(row,rowSegs){
// populates empty cells from the current column (`col`) to `endCol`
function emptyCellsUntil(endCol){for(;col<endCol;)
// try to grab a cell from the level above and extend its rowspan. otherwise, create a fresh cell
td=(loneCellMatrix[i-1]||[])[col],td?td.attr("rowspan",parseInt(td.attr("rowspan")||1,10)+1):(td=$("<td/>"),tr.append(td)),cellMatrix[i][col]=td,loneCellMatrix[i][col]=td,col++}var i,levelSegs,col,tr,j,seg,td,colCnt=this.colCnt,segLevels=this.buildSegLevels(rowSegs),levelCnt=Math.max(1,segLevels.length),tbody=$("<tbody/>"),segMatrix=[],cellMatrix=[],loneCellMatrix=[];for(i=0;i<levelCnt;i++){
// levelCnt might be 1 even though there are no actual levels. protect against this.
// this single empty row is useful for styling.
if(// iterate through all levels
levelSegs=segLevels[i],col=0,tr=$("<tr/>"),segMatrix.push([]),cellMatrix.push([]),loneCellMatrix.push([]),levelSegs)for(j=0;j<levelSegs.length;j++){for(// iterate through segments in level
seg=levelSegs[j],emptyCellsUntil(seg.leftCol),
// create a container that occupies or more columns. append the event element.
td=$('<td class="fc-event-container"/>').append(seg.el),seg.leftCol!=seg.rightCol?td.attr("colspan",seg.rightCol-seg.leftCol+1):// a single-column segment
loneCellMatrix[i][col]=td;col<=seg.rightCol;)cellMatrix[i][col]=td,segMatrix[i][col]=seg,col++;tr.append(td)}emptyCellsUntil(colCnt),// finish off the row
this.bookendCells(tr),tbody.append(tr)}return{// a "rowStruct"
row:row,// the row number
tbodyEl:tbody,cellMatrix:cellMatrix,segMatrix:segMatrix,segLevels:segLevels,segs:rowSegs}},
// Stacks a flat array of segments, which are all assumed to be in the same row, into subarrays of vertical levels.
// NOTE: modifies segs
buildSegLevels:function(segs){var i,seg,j,levels=[];for(
// Give preference to elements with certain criteria, so they have
// a chance to be closer to the top.
this.sortEventSegs(segs),i=0;i<segs.length;i++){
// loop through levels, starting with the topmost, until the segment doesn't collide with other segments
for(seg=segs[i],j=0;j<levels.length&&isDaySegCollision(seg,levels[j]);j++);
// `j` now holds the desired subrow index
seg.level=j,
// create new level array if needed and append segment
(levels[j]||(levels[j]=[])).push(seg)}
// order segments left-to-right. very important if calendar is RTL
for(j=0;j<levels.length;j++)levels[j].sort(compareDaySegCols);return levels},
// Given a flat array of segments, return an array of sub-arrays, grouped by each segment's row
groupSegRows:function(segs){var i,segRows=[];for(i=0;i<this.rowCnt;i++)segRows.push([]);for(i=0;i<segs.length;i++)segRows[segs[i].row].push(segs[i]);return segRows}}),/* Methods relate to limiting the number events for a given day on a DayGrid
----------------------------------------------------------------------------------------------------------------------*/
// NOTE: all the segs being passed around in here are foreground segs
DayGrid.mixin({segPopover:null,// the Popover that holds events that can't fit in a cell. null when not visible
popoverSegs:null,// an array of segment objects that the segPopover holds. null when not visible
removeSegPopover:function(){this.segPopover&&this.segPopover.hide()},
// Limits the number of "levels" (vertically stacking layers of events) for each row of the grid.
// `levelLimit` can be false (don't limit), a number, or true (should be computed).
limitRows:function(levelLimit){var row,rowLevelLimit,rowStructs=this.rowStructs||[];for(row=0;row<rowStructs.length;row++)this.unlimitRow(row),!1!==(rowLevelLimit=!!levelLimit&&("number"==typeof levelLimit?levelLimit:this.computeRowLevelLimit(row)))&&this.limitRow(row,rowLevelLimit)},
// Computes the number of levels a row will accomodate without going outside its bounds.
// Assumes the row is "rigid" (maintains a constant height regardless of what is inside).
// `row` is the row number.
computeRowLevelLimit:function(row){function iterInnerHeights(i,childNode){trHeight=Math.max(trHeight,$(childNode).outerHeight())}var i,trEl,trHeight,rowEl=this.rowEls.eq(row),rowHeight=rowEl.height(),trEls=this.rowStructs[row].tbodyEl.children();
// Reveal one level <tr> at a time and stop when we find one out of bounds
for(i=0;i<trEls.length;i++)if(trEl=trEls.eq(i).removeClass("fc-limited"),// reset to original state (reveal)
// with rowspans>1 and IE8, trEl.outerHeight() would return the height of the largest cell,
// so instead, find the tallest inner content element.
trHeight=0,trEl.find("> td > :first-child").each(iterInnerHeights),trEl.position().top+trHeight>rowHeight)return i;return!1},
// Limits the given grid row to the maximum number of levels and injects "more" links if necessary.
// `row` is the row number.
// `levelLimit` is a number for the maximum (inclusive) number of levels allowed.
limitRow:function(row,levelLimit){
// Iterates through empty level cells and places "more" links inside if need be
function emptyCellsUntil(endCol){// goes from current `col` to `endCol`
for(;col<endCol;)segsBelow=_this.getCellSegs(row,col,levelLimit),segsBelow.length&&(td=cellMatrix[levelLimit-1][col],moreLink=_this.renderMoreLink(row,col,segsBelow),moreWrap=$("<div/>").append(moreLink),td.append(moreWrap),moreNodes.push(moreWrap[0])),col++}var levelSegs,cellMatrix,limitedNodes,i,seg,segsBelow,totalSegsBelow,colSegsBelow,td,rowspan,segMoreNodes,j,moreTd,moreWrap,moreLink,_this=this,rowStruct=this.rowStructs[row],moreNodes=[],col=0;if(levelLimit&&levelLimit<rowStruct.segLevels.length){// hide elements and get a simple DOM-nodes array
// iterate though segments in the last allowable level
for(// is it actually over the limit?
levelSegs=rowStruct.segLevels[levelLimit-1],cellMatrix=rowStruct.cellMatrix,limitedNodes=rowStruct.tbodyEl.children().slice(levelLimit).addClass("fc-limited").get(),i=0;i<levelSegs.length;i++){for(seg=levelSegs[i],emptyCellsUntil(seg.leftCol),// process empty cells before the segment
// determine *all* segments below `seg` that occupy the same columns
colSegsBelow=[],totalSegsBelow=0;col<=seg.rightCol;)segsBelow=this.getCellSegs(row,col,levelLimit),colSegsBelow.push(segsBelow),totalSegsBelow+=segsBelow.length,col++;if(totalSegsBelow){
// make a replacement <td> for each column the segment occupies. will be one for each colspan
for(// do we need to replace this segment with one or many "more" links?
td=cellMatrix[levelLimit-1][seg.leftCol],// the segment's parent cell
rowspan=td.attr("rowspan")||1,segMoreNodes=[],j=0;j<colSegsBelow.length;j++)moreTd=$('<td class="fc-more-cell"/>').attr("rowspan",rowspan),segsBelow=colSegsBelow[j],moreLink=this.renderMoreLink(row,seg.leftCol+j,[seg].concat(segsBelow)),moreWrap=$("<div/>").append(moreLink),moreTd.append(moreWrap),segMoreNodes.push(moreTd[0]),moreNodes.push(moreTd[0]);td.addClass("fc-limited").after($(segMoreNodes)),// hide original <td> and inject replacements
limitedNodes.push(td[0])}}emptyCellsUntil(this.colCnt),// finish off the level
rowStruct.moreEls=$(moreNodes),// for easy undoing later
rowStruct.limitedEls=$(limitedNodes)}},
// Reveals all levels and removes all "more"-related elements for a grid's row.
// `row` is a row number.
unlimitRow:function(row){var rowStruct=this.rowStructs[row];rowStruct.moreEls&&(rowStruct.moreEls.remove(),rowStruct.moreEls=null),rowStruct.limitedEls&&(rowStruct.limitedEls.removeClass("fc-limited"),rowStruct.limitedEls=null)},
// Renders an <a> element that represents hidden event element for a cell.
// Responsible for attaching click handler as well.
renderMoreLink:function(row,col,hiddenSegs){var _this=this,view=this.view;return $('<a class="fc-more"/>').text(this.getMoreLinkText(hiddenSegs.length)).on("click",function(ev){var clickOption=view.opt("eventLimitClick"),date=_this.getCellDate(row,col),moreEl=$(this),dayEl=_this.getCellEl(row,col),allSegs=_this.getCellSegs(row,col),reslicedAllSegs=_this.resliceDaySegs(allSegs,date),reslicedHiddenSegs=_this.resliceDaySegs(hiddenSegs,date);"function"==typeof clickOption&&(
// the returned value can be an atomic option
clickOption=view.publiclyTrigger("eventLimitClick",null,{date:date,dayEl:dayEl,moreEl:moreEl,segs:reslicedAllSegs,hiddenSegs:reslicedHiddenSegs},ev)),"popover"===clickOption?_this.showSegPopover(row,col,moreEl,reslicedAllSegs):"string"==typeof clickOption&&// a view name
view.calendar.zoomTo(date,clickOption)})},
// Reveals the popover that displays all events within a cell
showSegPopover:function(row,col,moreLink,segs){var topEl,options,_this=this,view=this.view,moreWrap=moreLink.parent();topEl=1==this.rowCnt?view.el:this.rowEls.eq(row),options={className:"fc-more-popover",content:this.renderSegPopoverContent(row,col,segs),parentEl:this.view.el,// attach to root of view. guarantees outside of scrollbars.
top:topEl.offset().top,autoHide:!0,// when the user clicks elsewhere, hide the popover
viewportConstrain:view.opt("popoverViewportConstrain"),hide:function(){
// kill everything when the popover is hidden
// notify events to be removed
if(_this.popoverSegs)for(var seg,i=0;i<_this.popoverSegs.length;++i)seg=_this.popoverSegs[i],view.publiclyTrigger("eventDestroy",seg.event,seg.event,seg.el);_this.segPopover.removeElement(),_this.segPopover=null,_this.popoverSegs=null}},
// Determine horizontal coordinate.
// We use the moreWrap instead of the <td> to avoid border confusion.
this.isRTL?options.right=moreWrap.offset().left+moreWrap.outerWidth()+1:options.left=moreWrap.offset().left-1,this.segPopover=new Popover(options),this.segPopover.show(),
// the popover doesn't live within the grid's container element, and thus won't get the event
// delegated-handlers for free. attach event-related handlers to the popover.
this.bindSegHandlersToEl(this.segPopover.el)},
// Builds the inner DOM contents of the segment popover
renderSegPopoverContent:function(row,col,segs){var i,view=this.view,isTheme=view.opt("theme"),title=this.getCellDate(row,col).format(view.opt("dayPopoverFormat")),content=$('<div class="fc-header '+view.widgetHeaderClass+'"><span class="fc-close '+(isTheme?"ui-icon ui-icon-closethick":"fc-icon fc-icon-x")+'"></span><span class="fc-title">'+htmlEscape(title)+'</span><div class="fc-clear"/></div><div class="fc-body '+view.widgetContentClass+'"><div class="fc-event-container"></div></div>'),segContainer=content.find(".fc-event-container");for(
// render each seg's `el` and only return the visible segs
segs=this.renderFgSegEls(segs,!0),// disableResizing=true
this.popoverSegs=segs,i=0;i<segs.length;i++)
// because segments in the popover are not part of a grid coordinate system, provide a hint to any
// grids that want to do drag-n-drop about which cell it came from
this.hitsNeeded(),segs[i].hit=this.getCellHit(row,col),this.hitsNotNeeded(),segContainer.append(segs[i].el);return content},
// Given the events within an array of segment objects, reslice them to be in a single day
resliceDaySegs:function(segs,dayDate){
// build an array of the original events
var events=$.map(segs,function(seg){return seg.event}),dayStart=dayDate.clone(),dayEnd=dayStart.clone().add(1,"days"),dayRange={start:dayStart,end:dayEnd};
// slice the events with a custom slicing function
// force an order because eventsToSegs doesn't guarantee one
return segs=this.eventsToSegs(events,function(range){var seg=intersectRanges(range,dayRange);// undefind if no intersection
return seg?[seg]:[]}),this.sortEventSegs(segs),segs},
// Generates the text that should be inside a "more" link, given the number of events it represents
getMoreLinkText:function(num){var opt=this.view.opt("eventLimitText");return"function"==typeof opt?opt(num):"+"+num+" "+opt},
// Returns segments within a given cell.
// If `startLevel` is specified, returns only events including and below that level. Otherwise returns all segs.
getCellSegs:function(row,col,startLevel){for(var seg,segMatrix=this.rowStructs[row].segMatrix,level=startLevel||0,segs=[];level<segMatrix.length;)seg=segMatrix[level][col],seg&&segs.push(seg),level++;return segs}});/* A component that renders one or more columns of vertical time slots
----------------------------------------------------------------------------------------------------------------------*/
// We mixin DayTable, even though there is only a single row of days
var TimeGrid=FC.TimeGrid=Grid.extend(DayTableMixin,{slotDuration:null,// duration of a "slot", a distinct time segment on given day, visualized by lines
snapDuration:null,// granularity of time for dragging and selecting
snapsPerSlot:null,labelFormat:null,// formatting string for times running along vertical axis
labelInterval:null,// duration of how often a label should be displayed for a slot
colEls:null,// cells elements in the day-row background
slatContainerEl:null,// div that wraps all the slat rows
slatEls:null,// elements running horizontally across all columns
nowIndicatorEls:null,colCoordCache:null,slatCoordCache:null,constructor:function(){Grid.apply(this,arguments),// call the super-constructor
this.processOptions()},
// Renders the time grid into `this.el`, which should already be assigned.
// Relies on the view's colCnt. In the future, this component should probably be self-sufficient.
renderDates:function(){this.el.html(this.renderHtml()),this.colEls=this.el.find(".fc-day, .fc-disabled-day"),this.slatContainerEl=this.el.find(".fc-slats"),this.slatEls=this.slatContainerEl.find("tr"),this.colCoordCache=new CoordCache({els:this.colEls,isHorizontal:!0}),this.slatCoordCache=new CoordCache({els:this.slatEls,isVertical:!0}),this.renderContentSkeleton()},
// Renders the basic HTML skeleton for the grid
renderHtml:function(){// row=0
return'<div class="fc-bg"><table>'+this.renderBgTrHtml(0)+'</table></div><div class="fc-slats"><table>'+this.renderSlatRowHtml()+"</table></div>"},
// Generates the HTML for the horizontal "slats" that run width-wise. Has a time axis on a side. Depends on RTL.
renderSlatRowHtml:function(){
// Calculate the time for each slot
for(var slotDate,isLabeled,axisHtml,view=this.view,isRTL=this.isRTL,html="",slotTime=moment.duration(+this.view.minTime);slotTime<this.view.maxTime;)slotDate=this.start.clone().time(slotTime),isLabeled=isInt(divideDurationByDuration(slotTime,this.labelInterval)),axisHtml='<td class="fc-axis fc-time '+view.widgetContentClass+'" '+view.axisStyleAttr()+">"+(isLabeled?"<span>"+// for matchCellWidths
htmlEscape(slotDate.format(this.labelFormat))+"</span>":"")+"</td>",html+='<tr data-time="'+slotDate.format("HH:mm:ss")+'"'+(isLabeled?"":' class="fc-minor"')+">"+(isRTL?"":axisHtml)+'<td class="'+view.widgetContentClass+'"/>'+(isRTL?axisHtml:"")+"</tr>",slotTime.add(this.slotDuration);return html},/* Options
	------------------------------------------------------------------------------------------------------------------*/
// Parses various options into properties of this object
processOptions:function(){var input,view=this.view,slotDuration=view.opt("slotDuration"),snapDuration=view.opt("snapDuration");slotDuration=moment.duration(slotDuration),snapDuration=snapDuration?moment.duration(snapDuration):slotDuration,this.slotDuration=slotDuration,this.snapDuration=snapDuration,this.snapsPerSlot=slotDuration/snapDuration,// TODO: ensure an integer multiple?
this.minResizeDuration=snapDuration,// hack
// might be an array value (for TimelineView).
// if so, getting the most granular entry (the last one probably).
input=view.opt("slotLabelFormat"),$.isArray(input)&&(input=input[input.length-1]),this.labelFormat=input||view.opt("smallTimeFormat"),// the computed default
input=view.opt("slotLabelInterval"),this.labelInterval=input?moment.duration(input):this.computeLabelInterval(slotDuration)},
// Computes an automatic value for slotLabelInterval
computeLabelInterval:function(slotDuration){var i,labelInterval,slotsPerLabel;
// find the smallest stock label interval that results in more than one slots-per-label
for(i=AGENDA_STOCK_SUB_DURATIONS.length-1;i>=0;i--)if(labelInterval=moment.duration(AGENDA_STOCK_SUB_DURATIONS[i]),slotsPerLabel=divideDurationByDuration(labelInterval,slotDuration),isInt(slotsPerLabel)&&slotsPerLabel>1)return labelInterval;return moment.duration(slotDuration)},
// Computes a default event time formatting string if `timeFormat` is not explicitly defined
computeEventTimeFormat:function(){return this.view.opt("noMeridiemTimeFormat")},
// Computes a default `displayEventEnd` value if one is not expliclty defined
computeDisplayEventEnd:function(){return!0},/* Hit System
	------------------------------------------------------------------------------------------------------------------*/
prepareHits:function(){this.colCoordCache.build(),this.slatCoordCache.build()},releaseHits:function(){this.colCoordCache.clear()},queryHit:function(leftOffset,topOffset){var snapsPerSlot=this.snapsPerSlot,colCoordCache=this.colCoordCache,slatCoordCache=this.slatCoordCache;if(colCoordCache.isLeftInBounds(leftOffset)&&slatCoordCache.isTopInBounds(topOffset)){var colIndex=colCoordCache.getHorizontalIndex(leftOffset),slatIndex=slatCoordCache.getVerticalIndex(topOffset);if(null!=colIndex&&null!=slatIndex){var slatTop=slatCoordCache.getTopOffset(slatIndex),slatHeight=slatCoordCache.getHeight(slatIndex),partial=(topOffset-slatTop)/slatHeight,localSnapIndex=Math.floor(partial*snapsPerSlot),snapIndex=slatIndex*snapsPerSlot+localSnapIndex,snapTop=slatTop+localSnapIndex/snapsPerSlot*slatHeight,snapBottom=slatTop+(localSnapIndex+1)/snapsPerSlot*slatHeight;return{col:colIndex,snap:snapIndex,component:this,// needed unfortunately :(
left:colCoordCache.getLeftOffset(colIndex),right:colCoordCache.getRightOffset(colIndex),top:snapTop,bottom:snapBottom}}}},getHitSpan:function(hit){var end,start=this.getCellDate(0,hit.col),time=this.computeSnapTime(hit.snap);return start.time(time),end=start.clone().add(this.snapDuration),{start:start,end:end}},getHitEl:function(hit){return this.colEls.eq(hit.col)},/* Dates
	------------------------------------------------------------------------------------------------------------------*/
rangeUpdated:function(){this.updateDayTable()},
// Given a row number of the grid, representing a "snap", returns a time (Duration) from its start-of-day
computeSnapTime:function(snapIndex){return moment.duration(this.view.minTime+this.snapDuration*snapIndex)},
// Slices up the given span (unzoned start/end with other misc data) into an array of segments
spanToSegs:function(span){var i,segs=this.sliceRangeByTimes(span);for(i=0;i<segs.length;i++)this.isRTL?segs[i].col=this.daysPerRow-1-segs[i].dayIndex:segs[i].col=segs[i].dayIndex;return segs},sliceRangeByTimes:function(range){var seg,dayIndex,dayDate,dayRange,segs=[];for(dayIndex=0;dayIndex<this.daysPerRow;dayIndex++)dayDate=this.dayDates[dayIndex].clone().time(0),// TODO: better API for this?
dayRange={start:dayDate.clone().add(this.view.minTime),// don't use .time() because it sux with negatives
end:dayDate.clone().add(this.view.maxTime)},// both will be ambig timezone
(seg=intersectRanges(range,dayRange))&&(seg.dayIndex=dayIndex,segs.push(seg));return segs},/* Coordinates
	------------------------------------------------------------------------------------------------------------------*/
updateSize:function(isResize){// NOT a standard Grid method
this.slatCoordCache.build(),isResize&&this.updateSegVerticals([].concat(this.fgSegs||[],this.bgSegs||[],this.businessSegs||[]))},getTotalSlatHeight:function(){return this.slatContainerEl.outerHeight()},
// Computes the top coordinate, relative to the bounds of the grid, of the given date.
// A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
computeDateTop:function(date,startOfDayDate){return this.computeTimeTop(moment.duration(date-startOfDayDate.clone().stripTime()))},
// Computes the top coordinate, relative to the bounds of the grid, of the given time (a Duration).
computeTimeTop:function(time){var slatIndex,slatRemainder,len=this.slatEls.length,slatCoverage=(time-this.view.minTime)/this.slotDuration;
// compute a floating-point number for how many slats should be progressed through.
// from 0 to number of slats (inclusive)
// constrained because minTime/maxTime might be customized.
// an integer index of the furthest whole slat
// from 0 to number slats (*exclusive*, so len-1)
// how much further through the slatIndex slat (from 0.0-1.0) must be covered in addition.
// could be 1.0 if slatCoverage is covering *all* the slots
return slatCoverage=Math.max(0,slatCoverage),slatCoverage=Math.min(len,slatCoverage),slatIndex=Math.floor(slatCoverage),slatIndex=Math.min(slatIndex,len-1),slatRemainder=slatCoverage-slatIndex,this.slatCoordCache.getTopPosition(slatIndex)+this.slatCoordCache.getHeight(slatIndex)*slatRemainder},/* Event Drag Visualization
	------------------------------------------------------------------------------------------------------------------*/
// Renders a visual indication of an event being dragged over the specified date(s).
// A returned value of `true` signals that a mock "helper" event has been rendered.
renderDrag:function(eventLocation,seg){var eventSpans,i;if(seg)// if there is event information for this drag, render a helper event
// returns mock event elements
// signal that a helper has been rendered
return this.renderEventLocationHelper(eventLocation,seg);for(// otherwise, just render a highlight
eventSpans=this.eventToSpans(eventLocation),i=0;i<eventSpans.length;i++)this.renderHighlight(eventSpans[i])},
// Unrenders any visual indication of an event being dragged
unrenderDrag:function(){this.unrenderHelper(),this.unrenderHighlight()},/* Event Resize Visualization
	------------------------------------------------------------------------------------------------------------------*/
// Renders a visual indication of an event being resized
renderEventResize:function(eventLocation,seg){return this.renderEventLocationHelper(eventLocation,seg)},
// Unrenders any visual indication of an event being resized
unrenderEventResize:function(){this.unrenderHelper()},/* Event Helper
	------------------------------------------------------------------------------------------------------------------*/
// Renders a mock "helper" event. `sourceSeg` is the original segment object and might be null (an external drag)
renderHelper:function(event,sourceSeg){return this.renderHelperSegs(this.eventToSegs(event),sourceSeg)},
// Unrenders any mock helper event
unrenderHelper:function(){this.unrenderHelperSegs()},/* Business Hours
	------------------------------------------------------------------------------------------------------------------*/
renderBusinessHours:function(){this.renderBusinessSegs(this.buildBusinessHourSegs())},unrenderBusinessHours:function(){this.unrenderBusinessSegs()},/* Now Indicator
	------------------------------------------------------------------------------------------------------------------*/
getNowIndicatorUnit:function(){return"minute"},renderNowIndicator:function(date){
// seg system might be overkill, but it handles scenario where line needs to be rendered
//  more than once because of columns with the same date (resources columns for example)
var i,segs=this.spanToSegs({start:date,end:date}),top=this.computeDateTop(date,date),nodes=[];
// render lines within the columns
for(i=0;i<segs.length;i++)nodes.push($('<div class="fc-now-indicator fc-now-indicator-line"></div>').css("top",top).appendTo(this.colContainerEls.eq(segs[i].col))[0]);
// render an arrow over the axis
segs.length>0&&// is the current time in view?
nodes.push($('<div class="fc-now-indicator fc-now-indicator-arrow"></div>').css("top",top).appendTo(this.el.find(".fc-content-skeleton"))[0]),this.nowIndicatorEls=$(nodes)},unrenderNowIndicator:function(){this.nowIndicatorEls&&(this.nowIndicatorEls.remove(),this.nowIndicatorEls=null)},/* Selection
	------------------------------------------------------------------------------------------------------------------*/
// Renders a visual indication of a selection. Overrides the default, which was to simply render a highlight.
renderSelection:function(span){this.view.opt("selectHelper")?// this setting signals that a mock helper event should be rendered
// normally acceps an eventLocation, span has a start/end, which is good enough
this.renderEventLocationHelper(span):this.renderHighlight(span)},
// Unrenders any visual indication of a selection
unrenderSelection:function(){this.unrenderHelper(),this.unrenderHighlight()},/* Highlight
	------------------------------------------------------------------------------------------------------------------*/
renderHighlight:function(span){this.renderHighlightSegs(this.spanToSegs(span))},unrenderHighlight:function(){this.unrenderHighlightSegs()}});/* Methods for rendering SEGMENTS, pieces of content that live on the view
 ( this file is no longer just for events )
----------------------------------------------------------------------------------------------------------------------*/
TimeGrid.mixin({colContainerEls:null,// containers for each column
// inner-containers for each column where different types of segs live
fgContainerEls:null,bgContainerEls:null,helperContainerEls:null,highlightContainerEls:null,businessContainerEls:null,
// arrays of different types of displayed segments
fgSegs:null,bgSegs:null,helperSegs:null,highlightSegs:null,businessSegs:null,
// Renders the DOM that the view's content will live in
renderContentSkeleton:function(){var i,skeletonEl,cellHtml="";for(i=0;i<this.colCnt;i++)cellHtml+='<td><div class="fc-content-col"><div class="fc-event-container fc-helper-container"></div><div class="fc-event-container"></div><div class="fc-highlight-container"></div><div class="fc-bgevent-container"></div><div class="fc-business-container"></div></div></td>';skeletonEl=$('<div class="fc-content-skeleton"><table><tr>'+cellHtml+"</tr></table></div>"),this.colContainerEls=skeletonEl.find(".fc-content-col"),this.helperContainerEls=skeletonEl.find(".fc-helper-container"),this.fgContainerEls=skeletonEl.find(".fc-event-container:not(.fc-helper-container)"),this.bgContainerEls=skeletonEl.find(".fc-bgevent-container"),this.highlightContainerEls=skeletonEl.find(".fc-highlight-container"),this.businessContainerEls=skeletonEl.find(".fc-business-container"),this.bookendCells(skeletonEl.find("tr")),// TODO: do this on string level
this.el.append(skeletonEl)},/* Foreground Events
	------------------------------------------------------------------------------------------------------------------*/
renderFgSegs:function(segs){return segs=this.renderFgSegsIntoContainers(segs,this.fgContainerEls),this.fgSegs=segs,segs},unrenderFgSegs:function(){this.unrenderNamedSegs("fgSegs")},/* Foreground Helper Events
	------------------------------------------------------------------------------------------------------------------*/
renderHelperSegs:function(segs,sourceSeg){var i,seg,sourceEl,helperEls=[];
// Try to make the segment that is in the same row as sourceSeg look the same
for(segs=this.renderFgSegsIntoContainers(segs,this.helperContainerEls),i=0;i<segs.length;i++)seg=segs[i],sourceSeg&&sourceSeg.col===seg.col&&(sourceEl=sourceSeg.el,seg.el.css({left:sourceEl.css("left"),right:sourceEl.css("right"),"margin-left":sourceEl.css("margin-left"),"margin-right":sourceEl.css("margin-right")})),helperEls.push(seg.el[0]);return this.helperSegs=segs,$(helperEls)},unrenderHelperSegs:function(){this.unrenderNamedSegs("helperSegs")},/* Background Events
	------------------------------------------------------------------------------------------------------------------*/
renderBgSegs:function(segs){// TODO: old fill system
return segs=this.renderFillSegEls("bgEvent",segs),this.updateSegVerticals(segs),this.attachSegsByCol(this.groupSegsByCol(segs),this.bgContainerEls),this.bgSegs=segs,segs},unrenderBgSegs:function(){this.unrenderNamedSegs("bgSegs")},/* Highlight
	------------------------------------------------------------------------------------------------------------------*/
renderHighlightSegs:function(segs){segs=this.renderFillSegEls("highlight",segs),// TODO: old fill system
this.updateSegVerticals(segs),this.attachSegsByCol(this.groupSegsByCol(segs),this.highlightContainerEls),this.highlightSegs=segs},unrenderHighlightSegs:function(){this.unrenderNamedSegs("highlightSegs")},/* Business Hours
	------------------------------------------------------------------------------------------------------------------*/
renderBusinessSegs:function(segs){segs=this.renderFillSegEls("businessHours",segs),// TODO: old fill system
this.updateSegVerticals(segs),this.attachSegsByCol(this.groupSegsByCol(segs),this.businessContainerEls),this.businessSegs=segs},unrenderBusinessSegs:function(){this.unrenderNamedSegs("businessSegs")},/* Seg Rendering Utils
	------------------------------------------------------------------------------------------------------------------*/
// Given a flat array of segments, return an array of sub-arrays, grouped by each segment's col
groupSegsByCol:function(segs){var i,segsByCol=[];for(i=0;i<this.colCnt;i++)segsByCol.push([]);for(i=0;i<segs.length;i++)segsByCol[segs[i].col].push(segs[i]);return segsByCol},
// Given segments grouped by column, insert the segments' elements into a parallel array of container
// elements, each living within a column.
attachSegsByCol:function(segsByCol,containerEls){var col,segs,i;for(col=0;col<this.colCnt;col++)for(// iterate each column grouping
segs=segsByCol[col],i=0;i<segs.length;i++)containerEls.eq(col).append(segs[i].el)},
// Given the name of a property of `this` object, assumed to be an array of segments,
// loops through each segment and removes from DOM. Will null-out the property afterwards.
unrenderNamedSegs:function(propName){var i,segs=this[propName];if(segs){for(i=0;i<segs.length;i++)segs[i].el.remove();this[propName]=null}},/* Foreground Event Rendering Utils
	------------------------------------------------------------------------------------------------------------------*/
// Given an array of foreground segments, render a DOM element for each, computes position,
// and attaches to the column inner-container elements.
renderFgSegsIntoContainers:function(segs,containerEls){var segsByCol,col;for(segs=this.renderFgSegEls(segs),// will call fgSegHtml
segsByCol=this.groupSegsByCol(segs),col=0;col<this.colCnt;col++)this.updateFgSegCoords(segsByCol[col]);return this.attachSegsByCol(segsByCol,containerEls),segs},
// Renders the HTML for a single event segment's default rendering
fgSegHtml:function(seg,disableResizing){var timeText,fullTimeText,startTimeText,view=this.view,event=seg.event,isDraggable=view.isEventDraggable(event),isResizableFromStart=!disableResizing&&seg.isStart&&view.isEventResizableFromStart(event),isResizableFromEnd=!disableResizing&&seg.isEnd&&view.isEventResizableFromEnd(event),classes=this.getSegClasses(seg,isDraggable,isResizableFromStart||isResizableFromEnd),skinCss=cssToStr(this.getSegSkinCss(seg));// just the start time text
// if the event appears to span more than one day...
// Don't display time text on segments that run entirely through a day.
// That would appear as midnight-midnight and would look dumb.
// Otherwise, display the time text for the *segment's* times (like 6pm-midnight or midnight-10am)
// Display the normal time text for the *event's* times
/* TODO: write CSS for this
				(isResizableFromStart ?
					'<div class="fc-resizer fc-start-resizer" />' :
					''
					) +
				*/
return classes.unshift("fc-time-grid-event","fc-v-event"),view.isMultiDayEvent(event)?(seg.isStart||seg.isEnd)&&(timeText=this.getEventTimeText(seg),fullTimeText=this.getEventTimeText(seg,"LT"),startTimeText=this.getEventTimeText(seg,null,!1)):(timeText=this.getEventTimeText(event),fullTimeText=this.getEventTimeText(event,"LT"),startTimeText=this.getEventTimeText(event,null,!1)),'<a class="'+classes.join(" ")+'"'+(event.url?' href="'+htmlEscape(event.url)+'"':"")+(skinCss?' style="'+skinCss+'"':"")+'><div class="fc-content">'+(timeText?'<div class="fc-time" data-start="'+htmlEscape(startTimeText)+'" data-full="'+htmlEscape(fullTimeText)+'"><span>'+htmlEscape(timeText)+"</span></div>":"")+(event.title?'<div class="fc-title">'+htmlEscape(event.title)+"</div>":"")+'</div><div class="fc-bg"/>'+(isResizableFromEnd?'<div class="fc-resizer fc-end-resizer" />':"")+"</a>"},/* Seg Position Utils
	------------------------------------------------------------------------------------------------------------------*/
// Refreshes the CSS top/bottom coordinates for each segment element.
// Works when called after initial render, after a window resize/zoom for example.
updateSegVerticals:function(segs){this.computeSegVerticals(segs),this.assignSegVerticals(segs)},
// For each segment in an array, computes and assigns its top and bottom properties
computeSegVerticals:function(segs){var i,seg,dayDate;for(i=0;i<segs.length;i++)seg=segs[i],dayDate=this.dayDates[seg.dayIndex],seg.top=this.computeDateTop(seg.start,dayDate),seg.bottom=this.computeDateTop(seg.end,dayDate)},
// Given segments that already have their top/bottom properties computed, applies those values to
// the segments' elements.
assignSegVerticals:function(segs){var i,seg;for(i=0;i<segs.length;i++)seg=segs[i],seg.el.css(this.generateSegVerticalCss(seg))},
// Generates an object with CSS properties for the top/bottom coordinates of a segment element
generateSegVerticalCss:function(seg){return{top:seg.top,bottom:-seg.bottom}},/* Foreground Event Positioning Utils
	------------------------------------------------------------------------------------------------------------------*/
// Given segments that are assumed to all live in the *same column*,
// compute their verical/horizontal coordinates and assign to their elements.
updateFgSegCoords:function(segs){this.computeSegVerticals(segs),// horizontals relies on this
this.computeFgSegHorizontals(segs),// compute horizontal coordinates, z-index's, and reorder the array
this.assignSegVerticals(segs),this.assignFgSegHorizontals(segs)},
// Given an array of segments that are all in the same column, sets the backwardCoord and forwardCoord on each.
// NOTE: Also reorders the given array by date!
computeFgSegHorizontals:function(segs){var levels,level0,i;if(this.sortEventSegs(segs),// order by certain criteria
levels=buildSlotSegLevels(segs),computeForwardSlotSegs(levels),level0=levels[0]){for(i=0;i<level0.length;i++)computeSlotSegPressures(level0[i]);for(i=0;i<level0.length;i++)this.computeFgSegForwardBack(level0[i],0,0)}},
// Calculate seg.forwardCoord and seg.backwardCoord for the segment, where both values range
// from 0 to 1. If the calendar is left-to-right, the seg.backwardCoord maps to "left" and
// seg.forwardCoord maps to "right" (via percentage). Vice-versa if the calendar is right-to-left.
//
// The segment might be part of a "series", which means consecutive segments with the same pressure
// who's width is unknown until an edge has been hit. `seriesBackwardPressure` is the number of
// segments behind this one in the current series, and `seriesBackwardCoord` is the starting
// coordinate of the first segment in the series.
computeFgSegForwardBack:function(seg,seriesBackwardPressure,seriesBackwardCoord){var i,forwardSegs=seg.forwardSegs;if(void 0===seg.forwardCoord)// # of segments in the series
// use this segment's coordinates to computed the coordinates of the less-pressurized
// forward segments
for(// not already computed
forwardSegs.length?(
// sort highest pressure first
this.sortForwardSegs(forwardSegs),
// this segment's forwardCoord will be calculated from the backwardCoord of the
// highest-pressure forward segment.
this.computeFgSegForwardBack(forwardSegs[0],seriesBackwardPressure+1,seriesBackwardCoord),seg.forwardCoord=forwardSegs[0].backwardCoord):
// if there are no forward segments, this segment should butt up against the edge
seg.forwardCoord=1,
// calculate the backwardCoord from the forwardCoord. consider the series
seg.backwardCoord=seg.forwardCoord-(seg.forwardCoord-seriesBackwardCoord)/(// available width for series
seriesBackwardPressure+1),i=0;i<forwardSegs.length;i++)this.computeFgSegForwardBack(forwardSegs[i],0,seg.forwardCoord)},sortForwardSegs:function(forwardSegs){forwardSegs.sort(proxy(this,"compareForwardSegs"))},
// A cmp function for determining which forward segment to rely on more when computing coordinates.
compareForwardSegs:function(seg1,seg2){
// put higher-pressure first
// put segments that are closer to initial edge first (and favor ones with no coords yet)
// do normal sorting...
return seg2.forwardPressure-seg1.forwardPressure||(seg1.backwardCoord||0)-(seg2.backwardCoord||0)||this.compareEventSegs(seg1,seg2)},
// Given foreground event segments that have already had their position coordinates computed,
// assigns position-related CSS values to their elements.
assignFgSegHorizontals:function(segs){var i,seg;for(i=0;i<segs.length;i++)seg=segs[i],seg.el.css(this.generateFgSegHorizontalCss(seg)),
// if the height is short, add a className for alternate styling
seg.bottom-seg.top<30&&seg.el.addClass("fc-short")},
// Generates an object with CSS properties/values that should be applied to an event segment element.
// Contains important positioning-related properties that should be applied to any event element, customized or not.
generateFgSegHorizontalCss:function(seg){var left,right,shouldOverlap=this.view.opt("slotEventOverlap"),backwardCoord=seg.backwardCoord,forwardCoord=seg.forwardCoord,props=this.generateSegVerticalCss(seg);// amount of space from right edge, a fraction of the total width
// double the width, but don't go beyond the maximum forward coordinate (1.0)
// convert from 0-base to 1-based
// add padding to the edge so that forward stacked events don't cover the resizer's icon
return shouldOverlap&&(forwardCoord=Math.min(1,backwardCoord+2*(forwardCoord-backwardCoord))),this.isRTL?(left=1-forwardCoord,right=backwardCoord):(left=backwardCoord,right=1-forwardCoord),props.zIndex=seg.level+1,props.left=100*left+"%",props.right=100*right+"%",shouldOverlap&&seg.forwardPressure&&(props[this.isRTL?"marginLeft":"marginRight"]=20),props}});/* An abstract class from which other views inherit from
----------------------------------------------------------------------------------------------------------------------*/
var View=FC.View=Model.extend({type:null,// subclass' view name (string)
name:null,// deprecated. use `type` instead
title:null,// the text that will be displayed in the header's title
calendar:null,// owner Calendar object
viewSpec:null,options:null,// hash containing all options. already merged with view-specific-options
el:null,// the view's containing element. set by Calendar
renderQueue:null,batchRenderDepth:0,isDatesRendered:!1,isEventsRendered:!1,isBaseRendered:!1,// related to viewRender/viewDestroy triggers
queuedScroll:null,isRTL:!1,isSelected:!1,// boolean whether a range of time is user-selected or not
selectedEvent:null,eventOrderSpecs:null,// criteria for ordering events when they have same date/time
// classNames styled by jqui themes
widgetHeaderClass:null,widgetContentClass:null,highlightStateClass:null,
// for date utils, computed from options
nextDayThreshold:null,isHiddenDayHash:null,
// now indicator
isNowIndicatorRendered:null,initialNowDate:null,// result first getNow call
initialNowQueriedMs:null,// ms time the getNow was called
nowIndicatorTimeoutID:null,// for refresh timing of now indicator
nowIndicatorIntervalID:null,// "
constructor:function(calendar,viewSpec){Model.prototype.constructor.call(this),this.calendar=calendar,this.viewSpec=viewSpec,
// shortcuts
this.type=viewSpec.type,this.options=viewSpec.options,
// .name is deprecated
this.name=this.type,this.nextDayThreshold=moment.duration(this.opt("nextDayThreshold")),this.initThemingProps(),this.initHiddenDays(),this.isRTL=this.opt("isRTL"),this.eventOrderSpecs=parseFieldSpecs(this.opt("eventOrder")),this.renderQueue=this.buildRenderQueue(),this.initAutoBatchRender(),this.initialize()},buildRenderQueue:function(){var _this=this,renderQueue=new RenderQueue({event:this.opt("eventRenderWait")});return renderQueue.on("start",function(){_this.freezeHeight(),_this.addScroll(_this.queryScroll())}),renderQueue.on("stop",function(){_this.thawHeight(),_this.popScroll()}),renderQueue},initAutoBatchRender:function(){var _this=this;this.on("before:change",function(){_this.startBatchRender()}),this.on("change",function(){_this.stopBatchRender()})},startBatchRender:function(){this.batchRenderDepth++||this.renderQueue.pause()},stopBatchRender:function(){--this.batchRenderDepth||this.renderQueue.resume()},
// A good place for subclasses to initialize member variables
initialize:function(){},
// Retrieves an option with the given name
opt:function(name){return this.options[name]},
// Triggers handlers that are view-related. Modifies args before passing to calendar.
publiclyTrigger:function(name,thisObj){// arguments beyond thisObj are passed along
var calendar=this.calendar;// arguments beyond thisObj
return calendar.publiclyTrigger.apply(calendar,[name,thisObj||this].concat(Array.prototype.slice.call(arguments,2),[this]))},/* Title and Date Formatting
	------------------------------------------------------------------------------------------------------------------*/
// Sets the view's title property to the most updated computed value
updateTitle:function(){this.title=this.computeTitle(),this.calendar.setToolbarsTitle(this.title)},
// Computes what the title at the top of the calendar should be for this view
computeTitle:function(){var range;
// for views that span a large unit of time, show the proper interval, ignoring stray days before and after
return range=/^(year|month)$/.test(this.currentRangeUnit)?this.currentRange:this.activeRange,this.formatRange({
// in case currentRange has a time, make sure timezone is correct
start:this.calendar.applyTimezone(range.start),end:this.calendar.applyTimezone(range.end)},this.opt("titleFormat")||this.computeTitleFormat(),this.opt("titleRangeSeparator"))},
// Generates the format string that should be used to generate the title for the current date range.
// Attempts to compute the most appropriate format if not explicitly specified with `titleFormat`.
computeTitleFormat:function(){return"year"==this.currentRangeUnit?"YYYY":"month"==this.currentRangeUnit?this.opt("monthYearFormat"):this.currentRangeAs("days")>1?"ll":"LL"},
// Utility for formatting a range. Accepts a range object, formatting string, and optional separator.
// Displays all-day ranges naturally, with an inclusive end. Takes the current isRTL into account.
// The timezones of the dates within `range` will be respected.
formatRange:function(range,formatStr,separator){var end=range.end;// all-day?
return end.hasTime()||(end=end.clone().subtract(1)),formatRange(range.start,end,formatStr,separator,this.opt("isRTL"))},getAllDayHtml:function(){return this.opt("allDayHtml")||htmlEscape(this.opt("allDayText"))},/* Navigation
	------------------------------------------------------------------------------------------------------------------*/
// Generates HTML for an anchor to another view into the calendar.
// Will either generate an <a> tag or a non-clickable <span> tag, depending on enabled settings.
// `gotoOptions` can either be a moment input, or an object with the form:
// { date, type, forceOff }
// `type` is a view-type like "day" or "week". default value is "day".
// `attrs` and `innerHtml` are use to generate the rest of the HTML tag.
buildGotoAnchorHtml:function(gotoOptions,attrs,innerHtml){var date,type,forceOff,finalOptions;// if a string, parse it
// will have a leading space
return $.isPlainObject(gotoOptions)?(date=gotoOptions.date,type=gotoOptions.type,forceOff=gotoOptions.forceOff):date=gotoOptions,date=FC.moment(date),finalOptions={// for serialization into the link
date:date.format("YYYY-MM-DD"),type:type||"day"},"string"==typeof attrs&&(innerHtml=attrs,attrs=null),attrs=attrs?" "+attrsToStr(attrs):"",innerHtml=innerHtml||"",!forceOff&&this.opt("navLinks")?"<a"+attrs+' data-goto="'+htmlEscape(JSON.stringify(finalOptions))+'">'+innerHtml+"</a>":"<span"+attrs+">"+innerHtml+"</span>"},
// Rendering Non-date-related Content
// -----------------------------------------------------------------------------------------------------------------
// Sets the container element that the view should render inside of, does global DOM-related initializations,
// and renders all the non-date-related content inside.
setElement:function(el){this.el=el,this.bindGlobalHandlers(),this.bindBaseRenderHandlers(),this.renderSkeleton()},
// Removes the view's container element from the DOM, clearing any content beforehand.
// Undoes any other DOM-related attachments.
removeElement:function(){this.unsetDate(),this.unrenderSkeleton(),this.unbindGlobalHandlers(),this.unbindBaseRenderHandlers(),this.el.remove()},
// Renders the basic structure of the view before any content is rendered
renderSkeleton:function(){},
// Unrenders the basic structure of the view
unrenderSkeleton:function(){},
// Date Setting/Unsetting
// -----------------------------------------------------------------------------------------------------------------
setDate:function(date){var currentDateProfile=this.get("dateProfile"),newDateProfile=this.buildDateProfile(date,null,!0);// forceToValid=true
return currentDateProfile&&isRangesEqual(currentDateProfile.activeRange,newDateProfile.activeRange)||this.set("dateProfile",newDateProfile),newDateProfile.date},unsetDate:function(){this.unset("dateProfile")},
// Date Rendering
// -----------------------------------------------------------------------------------------------------------------
requestDateRender:function(dateProfile){var _this=this;this.renderQueue.queue(function(){_this.executeDateRender(dateProfile)},"date","init")},requestDateUnrender:function(){var _this=this;this.renderQueue.queue(function(){_this.executeDateUnrender()},"date","destroy")},
// Event Data
// -----------------------------------------------------------------------------------------------------------------
fetchInitialEvents:function(dateProfile){return this.calendar.requestEvents(dateProfile.activeRange.start,dateProfile.activeRange.end)},bindEventChanges:function(){this.listenTo(this.calendar,"eventsReset",this.resetEvents)},unbindEventChanges:function(){this.stopListeningTo(this.calendar,"eventsReset")},setEvents:function(events){this.set("currentEvents",events),this.set("hasEvents",!0)},unsetEvents:function(){this.unset("currentEvents"),this.unset("hasEvents")},resetEvents:function(events){this.startBatchRender(),this.unsetEvents(),this.setEvents(events),this.stopBatchRender()},
// Event Rendering
// -----------------------------------------------------------------------------------------------------------------
requestEventsRender:function(events){var _this=this;this.renderQueue.queue(function(){_this.executeEventsRender(events)},"event","init")},requestEventsUnrender:function(){var _this=this;this.renderQueue.queue(function(){_this.executeEventsUnrender()},"event","destroy")},
// Date High-level Rendering
// -----------------------------------------------------------------------------------------------------------------
// if dateProfile not specified, uses current
executeDateRender:function(dateProfile,skipScroll){this.setDateProfileForRendering(dateProfile),this.updateTitle(),this.calendar.updateToolbarButtons(),this.render&&this.render(),this.renderDates(),this.updateSize(),this.renderBusinessHours(),// might need coordinates, so should go after updateSize()
this.startNowIndicator(),skipScroll||this.addScroll(this.computeInitialDateScroll()),this.isDatesRendered=!0,this.trigger("datesRendered")},executeDateUnrender:function(){this.unselect(),this.stopNowIndicator(),this.trigger("before:datesUnrendered"),this.unrenderBusinessHours(),this.unrenderDates(),this.destroy&&this.destroy(),this.isDatesRendered=!1},
// Date Low-level Rendering
// -----------------------------------------------------------------------------------------------------------------
// date-cell content only
renderDates:function(){},
// date-cell content only
unrenderDates:function(){},
// Determing when the "meat" of the view is rendered (aka the base)
// -----------------------------------------------------------------------------------------------------------------
bindBaseRenderHandlers:function(){var _this=this;this.on("datesRendered.baseHandler",function(){_this.onBaseRender()}),this.on("before:datesUnrendered.baseHandler",function(){_this.onBeforeBaseUnrender()})},unbindBaseRenderHandlers:function(){this.off(".baseHandler")},onBaseRender:function(){this.applyScreenState(),this.publiclyTrigger("viewRender",this,this,this.el)},onBeforeBaseUnrender:function(){this.applyScreenState(),this.publiclyTrigger("viewDestroy",this,this,this.el)},
// Misc view rendering utils
// -----------------------------------------------------------------------------------------------------------------
// Binds DOM handlers to elements that reside outside the view container, such as the document
bindGlobalHandlers:function(){this.listenTo(GlobalEmitter.get(),{touchstart:this.processUnselect,mousedown:this.handleDocumentMousedown})},
// Unbinds DOM handlers from elements that reside outside the view container
unbindGlobalHandlers:function(){this.stopListeningTo(GlobalEmitter.get())},
// Initializes internal variables related to theming
initThemingProps:function(){var tm=this.opt("theme")?"ui":"fc";this.widgetHeaderClass=tm+"-widget-header",this.widgetContentClass=tm+"-widget-content",this.highlightStateClass=tm+"-state-highlight"},/* Business Hours
	------------------------------------------------------------------------------------------------------------------*/
// Renders business-hours onto the view. Assumes updateSize has already been called.
renderBusinessHours:function(){},
// Unrenders previously-rendered business-hours
unrenderBusinessHours:function(){},/* Now Indicator
	------------------------------------------------------------------------------------------------------------------*/
// Immediately render the current time indicator and begins re-rendering it at an interval,
// which is defined by this.getNowIndicatorUnit().
// TODO: somehow do this for the current whole day's background too
startNowIndicator:function(){var unit,update,delay,_this=this;// ms wait value
this.opt("nowIndicator")&&(unit=this.getNowIndicatorUnit())&&(update=proxy(this,"updateNowIndicator"),// bind to `this`
this.initialNowDate=this.calendar.getNow(),this.initialNowQueriedMs=+new Date,this.renderNowIndicator(this.initialNowDate),this.isNowIndicatorRendered=!0,
// wait until the beginning of the next interval
delay=this.initialNowDate.clone().startOf(unit).add(1,unit)-this.initialNowDate,this.nowIndicatorTimeoutID=setTimeout(function(){_this.nowIndicatorTimeoutID=null,update(),delay=+moment.duration(1,unit),delay=Math.max(100,delay),// prevent too frequent
_this.nowIndicatorIntervalID=setInterval(update,delay)},delay))},
// rerenders the now indicator, computing the new current time from the amount of time that has passed
// since the initial getNow call.
updateNowIndicator:function(){this.isNowIndicatorRendered&&(this.unrenderNowIndicator(),this.renderNowIndicator(this.initialNowDate.clone().add(new Date-this.initialNowQueriedMs)))},
// Immediately unrenders the view's current time indicator and stops any re-rendering timers.
// Won't cause side effects if indicator isn't rendered.
stopNowIndicator:function(){this.isNowIndicatorRendered&&(this.nowIndicatorTimeoutID&&(clearTimeout(this.nowIndicatorTimeoutID),this.nowIndicatorTimeoutID=null),this.nowIndicatorIntervalID&&(clearTimeout(this.nowIndicatorIntervalID),this.nowIndicatorIntervalID=null),this.unrenderNowIndicator(),this.isNowIndicatorRendered=!1)},
// Returns a string unit, like 'second' or 'minute' that defined how often the current time indicator
// should be refreshed. If something falsy is returned, no time indicator is rendered at all.
getNowIndicatorUnit:function(){},
// Renders a current time indicator at the given datetime
renderNowIndicator:function(date){},
// Undoes the rendering actions from renderNowIndicator
unrenderNowIndicator:function(){},/* Dimensions
	------------------------------------------------------------------------------------------------------------------*/
// Refreshes anything dependant upon sizing of the container element of the grid
updateSize:function(isResize){var scroll;isResize&&(scroll=this.queryScroll()),this.updateHeight(isResize),this.updateWidth(isResize),this.updateNowIndicator(),isResize&&this.applyScroll(scroll)},
// Refreshes the horizontal dimensions of the calendar
updateWidth:function(isResize){},
// Refreshes the vertical dimensions of the calendar
updateHeight:function(isResize){var calendar=this.calendar;// we poll the calendar for height information
this.setHeight(calendar.getSuggestedViewHeight(),calendar.isHeightAuto())},
// Updates the vertical dimensions of the calendar to the specified height.
// if `isAuto` is set to true, height becomes merely a suggestion and the view should use its "natural" height.
setHeight:function(height,isAuto){},/* Scroller
	------------------------------------------------------------------------------------------------------------------*/
addForcedScroll:function(scroll){this.addScroll($.extend(scroll,{isForced:!0}))},addScroll:function(scroll){var queuedScroll=this.queuedScroll||(this.queuedScroll={});queuedScroll.isForced||$.extend(queuedScroll,scroll)},popScroll:function(){this.applyQueuedScroll(),this.queuedScroll=null},applyQueuedScroll:function(){this.queuedScroll&&this.applyScroll(this.queuedScroll)},queryScroll:function(){var scroll={};return this.isDatesRendered&&$.extend(scroll,this.queryDateScroll()),scroll},applyScroll:function(scroll){this.isDatesRendered&&this.applyDateScroll(scroll)},computeInitialDateScroll:function(){return{}},queryDateScroll:function(){return{}},applyDateScroll:function(scroll){},/* Height Freezing
	------------------------------------------------------------------------------------------------------------------*/
freezeHeight:function(){this.calendar.freezeContentHeight()},thawHeight:function(){this.calendar.thawContentHeight()},
// Event High-level Rendering
// -----------------------------------------------------------------------------------------------------------------
executeEventsRender:function(events){this.renderEvents(events),this.isEventsRendered=!0,this.onEventsRender()},executeEventsUnrender:function(){this.onBeforeEventsUnrender(),this.destroyEvents&&this.destroyEvents(),this.unrenderEvents(),this.isEventsRendered=!1},
// Event Rendering Triggers
// -----------------------------------------------------------------------------------------------------------------
// Signals that all events have been rendered
onEventsRender:function(){this.applyScreenState(),this.renderedEventSegEach(function(seg){this.publiclyTrigger("eventAfterRender",seg.event,seg.event,seg.el)}),this.publiclyTrigger("eventAfterAllRender")},
// Signals that all event elements are about to be removed
onBeforeEventsUnrender:function(){this.applyScreenState(),this.renderedEventSegEach(function(seg){this.publiclyTrigger("eventDestroy",seg.event,seg.event,seg.el)})},applyScreenState:function(){this.thawHeight(),this.freezeHeight(),this.applyQueuedScroll()},
// Event Low-level Rendering
// -----------------------------------------------------------------------------------------------------------------
// Renders the events onto the view.
renderEvents:function(events){},
// Removes event elements from the view.
unrenderEvents:function(){},
// Event Rendering Utils
// -----------------------------------------------------------------------------------------------------------------
// Given an event and the default element used for rendering, returns the element that should actually be used.
// Basically runs events and elements through the eventRender hook.
resolveEventEl:function(event,el){var custom=this.publiclyTrigger("eventRender",event,event,el);// means don't render at all
return!1===custom?el=null:custom&&!0!==custom&&(el=$(custom)),el},
// Hides all rendered event segments linked to the given event
showEvent:function(event){this.renderedEventSegEach(function(seg){seg.el.css("visibility","")},event)},
// Shows all rendered event segments linked to the given event
hideEvent:function(event){this.renderedEventSegEach(function(seg){seg.el.css("visibility","hidden")},event)},
// Iterates through event segments that have been rendered (have an el). Goes through all by default.
// If the optional `event` argument is specified, only iterates through segments linked to that event.
// The `this` value of the callback function will be the view.
renderedEventSegEach:function(func,event){var i,segs=this.getEventSegs();for(i=0;i<segs.length;i++)event&&segs[i].event._id!==event._id||segs[i].el&&func.call(this,segs[i])},
// Retrieves all the rendered segment objects for the view
getEventSegs:function(){
// subclasses must implement
return[]},/* Event Drag-n-Drop
	------------------------------------------------------------------------------------------------------------------*/
// Computes if the given event is allowed to be dragged by the user
isEventDraggable:function(event){return this.isEventStartEditable(event)},isEventStartEditable:function(event){return firstDefined(event.startEditable,(event.source||{}).startEditable,this.opt("eventStartEditable"),this.isEventGenerallyEditable(event))},isEventGenerallyEditable:function(event){return firstDefined(event.editable,(event.source||{}).editable,this.opt("editable"))},
// Must be called when an event in the view is dropped onto new location.
// `dropLocation` is an object that contains the new zoned start/end/allDay values for the event.
reportSegDrop:function(seg,dropLocation,largeUnit,el,ev){var calendar=this.calendar,mutateResult=calendar.mutateSeg(seg,dropLocation,largeUnit),undoFunc=function(){mutateResult.undo(),calendar.reportEventChange()};this.triggerEventDrop(seg.event,mutateResult.dateDelta,undoFunc,el,ev),calendar.reportEventChange()},
// Triggers event-drop handlers that have subscribed via the API
triggerEventDrop:function(event,dateDelta,undoFunc,el,ev){this.publiclyTrigger("eventDrop",el[0],event,dateDelta,undoFunc,ev,{})},/* External Element Drag-n-Drop
	------------------------------------------------------------------------------------------------------------------*/
// Must be called when an external element, via jQuery UI, has been dropped onto the calendar.
// `meta` is the parsed data that has been embedded into the dragging event.
// `dropLocation` is an object that contains the new zoned start/end/allDay values for the event.
reportExternalDrop:function(meta,dropLocation,el,ev,ui){var eventInput,event,eventProps=meta.eventProps;
// Try to build an event object and render it. TODO: decouple the two
eventProps&&(eventInput=$.extend({},eventProps,dropLocation),event=this.calendar.renderEvent(eventInput,meta.stick)[0]),this.triggerExternalDrop(event,dropLocation,el,ev,ui)},
// Triggers external-drop handlers that have subscribed via the API
triggerExternalDrop:function(event,dropLocation,el,ev,ui){
// trigger 'drop' regardless of whether element represents an event
this.publiclyTrigger("drop",el[0],dropLocation.start,ev,ui),event&&this.publiclyTrigger("eventReceive",null,event)},/* Drag-n-Drop Rendering (for both events and external elements)
	------------------------------------------------------------------------------------------------------------------*/
// Renders a visual indication of a event or external-element drag over the given drop zone.
// If an external-element, seg will be `null`.
// Must return elements used for any mock events.
renderDrag:function(dropLocation,seg){},
// Unrenders a visual indication of an event or external-element being dragged.
unrenderDrag:function(){},/* Event Resizing
	------------------------------------------------------------------------------------------------------------------*/
// Computes if the given event is allowed to be resized from its starting edge
isEventResizableFromStart:function(event){return this.opt("eventResizableFromStart")&&this.isEventResizable(event)},
// Computes if the given event is allowed to be resized from its ending edge
isEventResizableFromEnd:function(event){return this.isEventResizable(event)},
// Computes if the given event is allowed to be resized by the user at all
isEventResizable:function(event){var source=event.source||{};return firstDefined(event.durationEditable,source.durationEditable,this.opt("eventDurationEditable"),event.editable,source.editable,this.opt("editable"))},
// Must be called when an event in the view has been resized to a new length
reportSegResize:function(seg,resizeLocation,largeUnit,el,ev){var calendar=this.calendar,mutateResult=calendar.mutateSeg(seg,resizeLocation,largeUnit),undoFunc=function(){mutateResult.undo(),calendar.reportEventChange()};this.triggerEventResize(seg.event,mutateResult.durationDelta,undoFunc,el,ev),calendar.reportEventChange()},
// Triggers event-resize handlers that have subscribed via the API
triggerEventResize:function(event,durationDelta,undoFunc,el,ev){this.publiclyTrigger("eventResize",el[0],event,durationDelta,undoFunc,ev,{})},/* Selection (time range)
	------------------------------------------------------------------------------------------------------------------*/
// Selects a date span on the view. `start` and `end` are both Moments.
// `ev` is the native mouse event that begin the interaction.
select:function(span,ev){this.unselect(ev),this.renderSelection(span),this.reportSelection(span,ev)},
// Renders a visual indication of the selection
renderSelection:function(span){},
// Called when a new selection is made. Updates internal state and triggers handlers.
reportSelection:function(span,ev){this.isSelected=!0,this.triggerSelect(span,ev)},
// Triggers handlers to 'select'
triggerSelect:function(span,ev){this.publiclyTrigger("select",null,this.calendar.applyTimezone(span.start),// convert to calendar's tz for external API
this.calendar.applyTimezone(span.end),// "
ev)},
// Undoes a selection. updates in the internal state and triggers handlers.
// `ev` is the native mouse event that began the interaction.
unselect:function(ev){this.isSelected&&(this.isSelected=!1,this.destroySelection&&this.destroySelection(),this.unrenderSelection(),this.publiclyTrigger("unselect",null,ev))},
// Unrenders a visual indication of selection
unrenderSelection:function(){},/* Event Selection
	------------------------------------------------------------------------------------------------------------------*/
selectEvent:function(event){this.selectedEvent&&this.selectedEvent===event||(this.unselectEvent(),this.renderedEventSegEach(function(seg){seg.el.addClass("fc-selected")},event),this.selectedEvent=event)},unselectEvent:function(){this.selectedEvent&&(this.renderedEventSegEach(function(seg){seg.el.removeClass("fc-selected")},this.selectedEvent),this.selectedEvent=null)},isEventSelected:function(event){
// event references might change on refetchEvents(), while selectedEvent doesn't,
// so compare IDs
return this.selectedEvent&&this.selectedEvent._id===event._id},/* Mouse / Touch Unselecting (time range & event unselection)
	------------------------------------------------------------------------------------------------------------------*/
// TODO: move consistently to down/start or up/end?
// TODO: don't kill previous selection if touch scrolling
handleDocumentMousedown:function(ev){isPrimaryMouseButton(ev)&&this.processUnselect(ev)},processUnselect:function(ev){this.processRangeUnselect(ev),this.processEventUnselect(ev)},processRangeUnselect:function(ev){var ignore;
// is there a time-range selection?
this.isSelected&&this.opt("unselectAuto")&&((
// only unselect if the clicked element is not identical to or inside of an 'unselectCancel' element
ignore=this.opt("unselectCancel"))&&$(ev.target).closest(ignore).length||this.unselect(ev))},processEventUnselect:function(ev){this.selectedEvent&&($(ev.target).closest(".fc-selected").length||this.unselectEvent())},/* Day Click
	------------------------------------------------------------------------------------------------------------------*/
// Triggers handlers to 'dayClick'
// Span has start/end of the clicked area. Only the start is useful.
triggerDayClick:function(span,dayEl,ev){this.publiclyTrigger("dayClick",dayEl,this.calendar.applyTimezone(span.start),// convert to calendar's timezone for external API
ev)},/* Date Utils
	------------------------------------------------------------------------------------------------------------------*/
// Returns the date range of the full days the given range visually appears to occupy.
// Returns a new range object.
computeDayRange:function(range){var endTimeMS,startDay=range.start.clone().stripTime(),end=range.end,endDay=null;// # of milliseconds into `endDay`
// If the end time is actually inclusively part of the next day and is equal to or
// beyond the next day threshold, adjust the end to be the exclusive end of `endDay`.
// Otherwise, leaving it as inclusive will cause it to exclude `endDay`.
// the beginning of the day the range exclusively ends
// If no end was specified, or if it is within `startDay` but not past nextDayThreshold,
// assign the default duration of one day.
return end&&(endDay=end.clone().stripTime(),(endTimeMS=+end.time())&&endTimeMS>=this.nextDayThreshold&&endDay.add(1,"days")),(!end||endDay<=startDay)&&(endDay=startDay.clone().add(1,"days")),{start:startDay,end:endDay}},
// Does the given event visually appear to occupy more than one day?
isMultiDayEvent:function(event){var range=this.computeDayRange(event);// event is range-ish
return range.end.diff(range.start,"days")>1}});View.watch("displayingDates",["dateProfile"],function(deps){this.requestDateRender(deps.dateProfile)},function(){this.requestDateUnrender()}),View.watch("initialEvents",["dateProfile"],function(deps){return this.fetchInitialEvents(deps.dateProfile)}),View.watch("bindingEvents",["initialEvents"],function(deps){this.setEvents(deps.initialEvents),this.bindEventChanges()},function(){this.unbindEventChanges(),this.unsetEvents()}),View.watch("displayingEvents",["displayingDates","hasEvents"],function(){this.requestEventsRender(this.get("currentEvents"))},function(){this.requestEventsUnrender()}),View.mixin({
// range the view is formally responsible for.
// for example, a month view might have 1st-31st, excluding padded dates
currentRange:null,currentRangeUnit:null,// name of largest unit being displayed, like "month" or "week"
// date range with a rendered skeleton
// includes not-active days that need some sort of DOM
renderRange:null,
// dates that display events and accept drag-n-drop
activeRange:null,
// constraint for where prev/next operations can go and where events can be dragged/resized to.
// an object with optional start and end properties.
validRange:null,
// how far the current date will move for a prev/next operation
dateIncrement:null,minTime:null,// Duration object that denotes the first visible time of any given day
maxTime:null,// Duration object that denotes the exclusive visible end time of any given day
usesMinMaxTime:!1,// whether minTime/maxTime will affect the activeRange. Views must opt-in.
// DEPRECATED
start:null,// use activeRange.start
end:null,// use activeRange.end
intervalStart:null,// use currentRange.start
intervalEnd:null,// use currentRange.end
/* Date Range Computation
	------------------------------------------------------------------------------------------------------------------*/
setDateProfileForRendering:function(dateProfile){this.currentRange=dateProfile.currentRange,this.currentRangeUnit=dateProfile.currentRangeUnit,this.renderRange=dateProfile.renderRange,this.activeRange=dateProfile.activeRange,this.validRange=dateProfile.validRange,this.dateIncrement=dateProfile.dateIncrement,this.minTime=dateProfile.minTime,this.maxTime=dateProfile.maxTime,
// DEPRECATED, but we need to keep it updated
this.start=dateProfile.activeRange.start,this.end=dateProfile.activeRange.end,this.intervalStart=dateProfile.currentRange.start,this.intervalEnd=dateProfile.currentRange.end},
// Builds a structure with info about what the dates/ranges will be for the "prev" view.
buildPrevDateProfile:function(date){var prevDate=date.clone().startOf(this.currentRangeUnit).subtract(this.dateIncrement);return this.buildDateProfile(prevDate,-1)},
// Builds a structure with info about what the dates/ranges will be for the "next" view.
buildNextDateProfile:function(date){var nextDate=date.clone().startOf(this.currentRangeUnit).add(this.dateIncrement);return this.buildDateProfile(nextDate,1)},
// Builds a structure holding dates/ranges for rendering around the given date.
// Optional direction param indicates whether the date is being incremented/decremented
// from its previous value. decremented = -1, incremented = 1 (default).
buildDateProfile:function(date,direction,forceToValid){var currentInfo,renderRange,activeRange,isValid,validRange=this.buildValidRange(),minTime=null,maxTime=null;
// it's invalid if the originally requested date is not contained,
// or if the range is completely outside of the valid range.
return forceToValid&&(date=constrainDate(date,validRange)),currentInfo=this.buildCurrentRangeInfo(date,direction),renderRange=this.buildRenderRange(currentInfo.range,currentInfo.unit),activeRange=cloneRange(renderRange),this.opt("showNonCurrentDates")||(activeRange=constrainRange(activeRange,currentInfo.range)),minTime=moment.duration(this.opt("minTime")),maxTime=moment.duration(this.opt("maxTime")),this.adjustActiveRange(activeRange,minTime,maxTime),activeRange=constrainRange(activeRange,validRange),date=constrainDate(date,activeRange),isValid=doRangesIntersect(currentInfo.range,validRange),{validRange:validRange,currentRange:currentInfo.range,currentRangeUnit:currentInfo.unit,activeRange:activeRange,renderRange:renderRange,minTime:minTime,maxTime:maxTime,isValid:isValid,date:date,dateIncrement:this.buildDateIncrement(currentInfo.duration)}},
// Builds an object with optional start/end properties.
// Indicates the minimum/maximum dates to display.
buildValidRange:function(){return this.getRangeOption("validRange",this.calendar.getNow())||{}},
// Builds a structure with info about the "current" range, the range that is
// highlighted as being the current month for example.
// See buildDateProfile for a description of `direction`.
// Guaranteed to have `range` and `unit` properties. `duration` is optional.
buildCurrentRangeInfo:function(date,direction){var dayCount,duration=null,unit=null,range=null;// modifies in-place
return this.viewSpec.duration?(duration=this.viewSpec.duration,unit=this.viewSpec.durationUnit,range=this.buildRangeFromDuration(date,direction,duration,unit)):(dayCount=this.opt("dayCount"))?(unit="day",range=this.buildRangeFromDayCount(date,direction,dayCount)):(range=this.buildCustomVisibleRange(date))?unit=computeGreatestUnit(range.start,range.end):(duration=this.getFallbackDuration(),unit=computeGreatestUnit(duration),range=this.buildRangeFromDuration(date,direction,duration,unit)),this.normalizeCurrentRange(range,unit),{duration:duration,unit:unit,range:range}},getFallbackDuration:function(){return moment.duration({days:1})},
// If the range has day units or larger, remove times. Otherwise, ensure times.
normalizeCurrentRange:function(range,unit){/^(year|month|week|day)$/.test(unit)?(// whole-days?
range.start.stripTime(),range.end.stripTime()):(// needs to have a time?
range.start.hasTime()||range.start.time(0),range.end.hasTime()||range.end.time(0))},
// Mutates the given activeRange to have time values (un-ambiguate)
// if the minTime or maxTime causes the range to expand.
// TODO: eventually activeRange should *always* have times.
adjustActiveRange:function(range,minTime,maxTime){var hasSpecialTimes=!1;this.usesMinMaxTime&&(minTime<0&&(range.start.time(0).add(minTime),hasSpecialTimes=!0),maxTime>864e5&&(// beyond 24 hours?
range.end.time(maxTime-864e5),hasSpecialTimes=!0),hasSpecialTimes&&(range.start.hasTime()||range.start.time(0),range.end.hasTime()||range.end.time(0)))},
// Builds the "current" range when it is specified as an explicit duration.
// `unit` is the already-computed computeGreatestUnit value of duration.
buildRangeFromDuration:function(date,direction,duration,unit){var end,dateIncrementInput,dateIncrementDuration,alignment=this.opt("dateAlignment"),start=date.clone();
// if the view displays a single day or smaller
// compute what the alignment should be
// use the smaller of the two units
return duration.as("days")<=1&&this.isHiddenDay(start)&&(start=this.skipHiddenDays(start,direction),start.startOf("day")),alignment||(dateIncrementInput=this.opt("dateIncrement"),dateIncrementInput?(dateIncrementDuration=moment.duration(dateIncrementInput),alignment=dateIncrementDuration<duration?computeDurationGreatestUnit(dateIncrementDuration,dateIncrementInput):unit):alignment=unit),start.startOf(alignment),end=start.clone().add(duration),{start:start,end:end}},
// Builds the "current" range when a dayCount is specified.
buildRangeFromDayCount:function(date,direction,dayCount){var end,customAlignment=this.opt("dateAlignment"),runningCount=0,start=date.clone();customAlignment&&start.startOf(customAlignment),start.startOf("day"),start=this.skipHiddenDays(start,direction),end=start.clone();do{end.add(1,"day"),this.isHiddenDay(end)||runningCount++}while(runningCount<dayCount);return{start:start,end:end}},
// Builds a normalized range object for the "visible" range,
// which is a way to define the currentRange and activeRange at the same time.
buildCustomVisibleRange:function(date){var visibleRange=this.getRangeOption("visibleRange",this.calendar.moment(date));return!visibleRange||visibleRange.start&&visibleRange.end?visibleRange:null},
// Computes the range that will represent the element/cells for *rendering*,
// but which may have voided days/times.
buildRenderRange:function(currentRange,currentRangeUnit){
// cut off days in the currentRange that are hidden
return this.trimHiddenDays(currentRange)},
// Compute the duration value that should be added/substracted to the current date
// when a prev/next operation happens.
buildDateIncrement:function(fallback){var customAlignment,dateIncrementInput=this.opt("dateIncrement");return dateIncrementInput?moment.duration(dateIncrementInput):(customAlignment=this.opt("dateAlignment"))?moment.duration(1,customAlignment):fallback||moment.duration({days:1})},
// Remove days from the beginning and end of the range that are computed as hidden.
trimHiddenDays:function(inputRange){return{start:this.skipHiddenDays(inputRange.start),end:this.skipHiddenDays(inputRange.end,-1,!0)}},
// Compute the number of the give units in the "current" range.
// Will return a floating-point number. Won't round.
currentRangeAs:function(unit){var currentRange=this.currentRange;return currentRange.end.diff(currentRange.start,unit,!0)},
// Arguments after name will be forwarded to a hypothetical function value
// WARNING: passed-in arguments will be given to generator functions as-is and can cause side-effects.
// Always clone your objects if you fear mutation.
getRangeOption:function(name){var val=this.opt(name);if("function"==typeof val&&(val=val.apply(null,Array.prototype.slice.call(arguments,1))),val)return this.calendar.parseRange(val)},/* Hidden Days
	------------------------------------------------------------------------------------------------------------------*/
// Initializes internal variables related to calculating hidden days-of-week
initHiddenDays:function(){var i,hiddenDays=this.opt("hiddenDays")||[],isHiddenDayHash=[],dayCnt=0;for(!1===this.opt("weekends")&&hiddenDays.push(0,6),i=0;i<7;i++)(isHiddenDayHash[i]=-1!==$.inArray(i,hiddenDays))||dayCnt++;if(!dayCnt)throw"invalid hiddenDays";this.isHiddenDayHash=isHiddenDayHash},
// Is the current day hidden?
// `day` is a day-of-week index (0-6), or a Moment
isHiddenDay:function(day){return moment.isMoment(day)&&(day=day.day()),this.isHiddenDayHash[day]},
// Incrementing the current day until it is no longer a hidden day, returning a copy.
// DOES NOT CONSIDER validRange!
// If the initial value of `date` is not a hidden day, don't do anything.
// Pass `isExclusive` as `true` if you are dealing with an end date.
// `inc` defaults to `1` (increment one day forward each time)
skipHiddenDays:function(date,inc,isExclusive){var out=date.clone();for(inc=inc||1;this.isHiddenDayHash[(out.day()+(isExclusive?inc:0)+7)%7];)out.add(inc,"days");return out}});/*
Embodies a div that has potential scrollbars
*/
var Scroller=FC.Scroller=Class.extend({el:null,// the guaranteed outer element
scrollEl:null,// the element with the scrollbars
overflowX:null,overflowY:null,constructor:function(options){options=options||{},this.overflowX=options.overflowX||options.overflow||"auto",this.overflowY=options.overflowY||options.overflow||"auto"},render:function(){this.el=this.renderEl(),this.applyOverflow()},renderEl:function(){return this.scrollEl=$('<div class="fc-scroller"></div>')},
// sets to natural height, unlocks overflow
clear:function(){this.setHeight("auto"),this.applyOverflow()},destroy:function(){this.el.remove()},
// Overflow
// -----------------------------------------------------------------------------------------------------------------
applyOverflow:function(){this.scrollEl.css({"overflow-x":this.overflowX,"overflow-y":this.overflowY})},
// Causes any 'auto' overflow values to resolves to 'scroll' or 'hidden'.
// Useful for preserving scrollbar widths regardless of future resizes.
// Can pass in scrollbarWidths for optimization.
lockOverflow:function(scrollbarWidths){var overflowX=this.overflowX,overflowY=this.overflowY;scrollbarWidths=scrollbarWidths||this.getScrollbarWidths(),"auto"===overflowX&&(overflowX=scrollbarWidths.top||scrollbarWidths.bottom||// horizontal scrollbars?
// OR scrolling pane with massless scrollbars?
this.scrollEl[0].scrollWidth-1>this.scrollEl[0].clientWidth?"scroll":"hidden"),"auto"===overflowY&&(overflowY=scrollbarWidths.left||scrollbarWidths.right||// vertical scrollbars?
// OR scrolling pane with massless scrollbars?
this.scrollEl[0].scrollHeight-1>this.scrollEl[0].clientHeight?"scroll":"hidden"),this.scrollEl.css({"overflow-x":overflowX,"overflow-y":overflowY})},
// Getters / Setters
// -----------------------------------------------------------------------------------------------------------------
setHeight:function(height){this.scrollEl.height(height)},getScrollTop:function(){return this.scrollEl.scrollTop()},setScrollTop:function(top){this.scrollEl.scrollTop(top)},getClientWidth:function(){return this.scrollEl[0].clientWidth},getClientHeight:function(){return this.scrollEl[0].clientHeight},getScrollbarWidths:function(){return getScrollbarWidths(this.scrollEl)}});/* Calls a method on every item passing the arguments through */
Iterator.prototype.proxyCall=function(methodName){var args=Array.prototype.slice.call(arguments,1),results=[];return this.items.forEach(function(item){results.push(item[methodName].apply(item,args))}),results};var Calendar=FC.Calendar=Class.extend(EmitterMixin,{view:null,// current View object
viewsByType:null,// holds all instantiated view instances, current or not
currentDate:null,// unzoned moment. private (public API should use getDate instead)
loadingLevel:0,// number of simultaneous loading tasks
constructor:function(el,overrides){
// declare the current calendar instance relies on GlobalEmitter. needed for garbage collection.
// unneeded() is called in destroy.
GlobalEmitter.needed(),this.el=el,this.viewsByType={},this.viewSpecCache={},this.initOptionsInternals(overrides),this.initMomentInternals(),// needs to happen after options hash initialized
this.initCurrentDate(),EventManager.call(this),// needs options immediately
this.initialize()},
// Subclasses can override this for initialization logic after the constructor has been called
initialize:function(){},
// Public API
// -----------------------------------------------------------------------------------------------------------------
getCalendar:function(){return this},getView:function(){return this.view},publiclyTrigger:function(name,thisObj){var args=Array.prototype.slice.call(arguments,2),optHandler=this.opt(name);// Emitter's method
if(thisObj=thisObj||this.el[0],this.triggerWith(name,thisObj,args),optHandler)return optHandler.apply(thisObj,args)},
// View
// -----------------------------------------------------------------------------------------------------------------
// Given a view name for a custom view or a standard view, creates a ready-to-go View object
instantiateView:function(viewType){var spec=this.getViewSpec(viewType);return new spec.class(this,spec)},
// Returns a boolean about whether the view is okay to instantiate at some point
isValidViewType:function(viewType){return Boolean(this.getViewSpec(viewType))},changeView:function(viewName,dateOrRange){dateOrRange&&(dateOrRange.start&&dateOrRange.end?// a range
this.recordOptionOverrides({// will not rerender
visibleRange:dateOrRange}):// a date
this.currentDate=this.moment(dateOrRange).stripZone()),this.renderView(viewName)},
// Forces navigation to a view for the given date.
// `viewType` can be a specific view name or a generic one like "week" or "day".
zoomTo:function(newDate,viewType){var spec;viewType=viewType||"day",// day is default zoom
spec=this.getViewSpec(viewType)||this.getUnitViewSpec(viewType),this.currentDate=newDate.clone(),this.renderView(spec?spec.type:null)},
// Current Date
// -----------------------------------------------------------------------------------------------------------------
initCurrentDate:function(){var defaultDateInput=this.opt("defaultDate");
// compute the initial ambig-timezone date
this.currentDate=null!=defaultDateInput?this.moment(defaultDateInput).stripZone():this.getNow()},prev:function(){var prevInfo=this.view.buildPrevDateProfile(this.currentDate);prevInfo.isValid&&(this.currentDate=prevInfo.date,this.renderView())},next:function(){var nextInfo=this.view.buildNextDateProfile(this.currentDate);nextInfo.isValid&&(this.currentDate=nextInfo.date,this.renderView())},prevYear:function(){this.currentDate.add(-1,"years"),this.renderView()},nextYear:function(){this.currentDate.add(1,"years"),this.renderView()},today:function(){this.currentDate=this.getNow(),// should deny like prev/next?
this.renderView()},gotoDate:function(zonedDateInput){this.currentDate=this.moment(zonedDateInput).stripZone(),this.renderView()},incrementDate:function(delta){this.currentDate.add(moment.duration(delta)),this.renderView()},
// for external API
getDate:function(){return this.applyTimezone(this.currentDate)},
// Loading Triggering
// -----------------------------------------------------------------------------------------------------------------
// Should be called when any type of async data fetching begins
pushLoading:function(){this.loadingLevel++||this.publiclyTrigger("loading",null,!0,this.view)},
// Should be called when any type of async data fetching completes
popLoading:function(){--this.loadingLevel||this.publiclyTrigger("loading",null,!1,this.view)},
// Selection
// -----------------------------------------------------------------------------------------------------------------
// this public method receives start/end dates in any format, with any timezone
select:function(zonedStartInput,zonedEndInput){this.view.select(this.buildSelectSpan.apply(this,arguments))},unselect:function(){// safe to be called before renderView
this.view&&this.view.unselect()},
// Given arguments to the select method in the API, returns a span (unzoned start/end and other info)
buildSelectSpan:function(zonedStartInput,zonedEndInput){var end,start=this.moment(zonedStartInput).stripZone();return end=zonedEndInput?this.moment(zonedEndInput).stripZone():start.hasTime()?start.clone().add(this.defaultTimedEventDuration):start.clone().add(this.defaultAllDayEventDuration),{start:start,end:end}},
// Misc
// -----------------------------------------------------------------------------------------------------------------
// will return `null` if invalid range
parseRange:function(rangeInput){var start=null,end=null;return rangeInput.start&&(start=this.moment(rangeInput.start).stripZone()),rangeInput.end&&(end=this.moment(rangeInput.end).stripZone()),start||end?start&&end&&end.isBefore(start)?null:{start:start,end:end}:null},rerenderEvents:function(){// API method. destroys old events if previously rendered.
this.elementVisible()&&this.reportEventChange()}});/*
Options binding/triggering system.
*/
Calendar.mixin({dirDefaults:null,// option defaults related to LTR or RTL
localeDefaults:null,// option defaults related to current locale
overrides:null,// option overrides given to the fullCalendar constructor
dynamicOverrides:null,// options set with dynamic setter method. higher precedence than view overrides.
optionsModel:null,// all defaults combined with overrides
initOptionsInternals:function(overrides){this.overrides=$.extend({},overrides),// make a copy
this.dynamicOverrides={},this.optionsModel=new Model,this.populateOptionsHash()},
// public getter/setter
option:function(name,value){var newOptionHash;if("string"==typeof name){if(void 0===value)// getter
return this.optionsModel.get(name);// setter for individual option
newOptionHash={},newOptionHash[name]=value,this.setOptions(newOptionHash)}else"object"==typeof name&&// compound setter with object input
this.setOptions(name)},
// private getter
opt:function(name){return this.optionsModel.get(name)},setOptions:function(newOptionHash){var optionName,optionCnt=0;this.recordOptionOverrides(newOptionHash);for(optionName in newOptionHash)optionCnt++;
// special-case handling of single option change.
// if only one option change, `optionName` will be its name.
if(1===optionCnt){if("height"===optionName||"contentHeight"===optionName||"aspectRatio"===optionName)// true = allow recalculation of height
return void this.updateSize(!0);if("defaultDate"===optionName)return;if("businessHours"===optionName)return void(this.view&&(this.view.unrenderBusinessHours(),this.view.renderBusinessHours()));if("timezone"===optionName)return this.rezoneArrayEventSources(),void this.refetchEvents()}
// catch-all. rerender the header and footer and rebuild/rerender the current view
this.renderHeader(),this.renderFooter(),
// even non-current views will be affected by this option change. do before rerender
// TODO: detangle
this.viewsByType={},this.reinitView()},
// Computes the flattened options hash for the calendar and assigns to `this.options`.
// Assumes this.overrides and this.dynamicOverrides have already been initialized.
populateOptionsHash:function(){var locale,localeDefaults,isRTL,dirDefaults,rawOptions;locale=firstDefined(// explicit locale option given?
this.dynamicOverrides.locale,this.overrides.locale),localeDefaults=localeOptionHash[locale],localeDefaults||(// explicit locale option not given or invalid?
locale=Calendar.defaults.locale,localeDefaults=localeOptionHash[locale]||{}),isRTL=firstDefined(// based on options computed so far, is direction RTL?
this.dynamicOverrides.isRTL,this.overrides.isRTL,localeDefaults.isRTL,Calendar.defaults.isRTL),dirDefaults=isRTL?Calendar.rtlDefaults:{},this.dirDefaults=dirDefaults,this.localeDefaults=localeDefaults,rawOptions=mergeOptions([// merge defaults and overrides. lowest to highest precedence
Calendar.defaults,// global defaults
dirDefaults,localeDefaults,this.overrides,this.dynamicOverrides]),populateInstanceComputableOptions(rawOptions),// fill in gaps with computed options
this.optionsModel.reset(rawOptions)},
// stores the new options internally, but does not rerender anything.
recordOptionOverrides:function(newOptionHash){var optionName;for(optionName in newOptionHash)this.dynamicOverrides[optionName]=newOptionHash[optionName];this.viewSpecCache={},// the dynamic override invalidates the options in this cache, so just clear it
this.populateOptionsHash()}}),Calendar.mixin({defaultAllDayEventDuration:null,defaultTimedEventDuration:null,localeData:null,initMomentInternals:function(){var _this=this;this.defaultAllDayEventDuration=moment.duration(this.opt("defaultAllDayEventDuration")),this.defaultTimedEventDuration=moment.duration(this.opt("defaultTimedEventDuration")),
// Called immediately, and when any of the options change.
// Happens before any internal objects rebuild or rerender, because this is very core.
this.optionsModel.watch("buildingMomentLocale",["?locale","?monthNames","?monthNamesShort","?dayNames","?dayNamesShort","?firstDay","?weekNumberCalculation"],function(opts){var _week,weekNumberCalculation=opts.weekNumberCalculation,firstDay=opts.firstDay;
// normalize
"iso"===weekNumberCalculation&&(weekNumberCalculation="ISO");var localeData=createObject(// make a cheap copy
getMomentLocaleData(opts.locale));opts.monthNames&&(localeData._months=opts.monthNames),opts.monthNamesShort&&(localeData._monthsShort=opts.monthNamesShort),opts.dayNames&&(localeData._weekdays=opts.dayNames),opts.dayNamesShort&&(localeData._weekdaysShort=opts.dayNamesShort),null==firstDay&&"ISO"===weekNumberCalculation&&(firstDay=1),null!=firstDay&&(_week=createObject(localeData._week),// _week: { dow: # }
_week.dow=firstDay,localeData._week=_week),// whitelist certain kinds of input
"ISO"!==weekNumberCalculation&&"local"!==weekNumberCalculation&&"function"!=typeof weekNumberCalculation||(localeData._fullCalendar_weekCalc=weekNumberCalculation),_this.localeData=localeData,
// If the internal current date object already exists, move to new locale.
// We do NOT need to do this technique for event dates, because this happens when converting to "segments".
_this.currentDate&&_this.localizeMoment(_this.currentDate)})},
// Builds a moment using the settings of the current calendar: timezone and locale.
// Accepts anything the vanilla moment() constructor accepts.
moment:function(){var mom;// TODO
// Force the moment to be local, because FC.moment doesn't guarantee it.
// don't give ambiguously-timed moments a local zone
return"local"===this.opt("timezone")?(mom=FC.moment.apply(null,arguments),mom.hasTime()&&mom.local()):mom="UTC"===this.opt("timezone")?FC.moment.utc.apply(null,arguments):FC.moment.parseZone.apply(null,arguments),this.localizeMoment(mom),mom},
// Updates the given moment's locale settings to the current calendar locale settings.
localizeMoment:function(mom){mom._locale=this.localeData},
// Returns a boolean about whether or not the calendar knows how to calculate
// the timezone offset of arbitrary dates in the current timezone.
getIsAmbigTimezone:function(){return"local"!==this.opt("timezone")&&"UTC"!==this.opt("timezone")},
// Returns a copy of the given date in the current timezone. Has no effect on dates without times.
applyTimezone:function(date){if(!date.hasTime())return date.clone();var adjustedZonedDate,zonedDate=this.moment(date.toArray()),timeAdjust=date.time()-zonedDate.time();
// Safari sometimes has problems with this coersion when near DST. Adjust if necessary. (bug #2396)
// is the time result different than expected?
// add milliseconds
// does it match perfectly now?
return timeAdjust&&(adjustedZonedDate=zonedDate.clone().add(timeAdjust),date.time()-adjustedZonedDate.time()==0&&(zonedDate=adjustedZonedDate)),zonedDate},
// Returns a moment for the current date, as defined by the client's computer or from the `now` option.
// Will return an moment with an ambiguous timezone.
getNow:function(){var now=this.opt("now");return"function"==typeof now&&(now=now()),this.moment(now).stripZone()},
// Produces a human-readable string for the given duration.
// Side-effect: changes the locale of the given duration.
humanizeDuration:function(duration){return duration.locale(this.opt("locale")).humanize()},
// Event-Specific Date Utilities. TODO: move
// -----------------------------------------------------------------------------------------------------------------
// Get an event's normalized end date. If not present, calculate it from the defaults.
getEventEnd:function(event){return event.end?event.end.clone():this.getDefaultEventEnd(event.allDay,event.start)},
// Given an event's allDay status and start date, return what its fallback end date should be.
// TODO: rename to computeDefaultEventEnd
getDefaultEventEnd:function(allDay,zonedStart){var end=zonedStart.clone();return allDay?end.stripTime().add(this.defaultAllDayEventDuration):end.add(this.defaultTimedEventDuration),this.getIsAmbigTimezone()&&end.stripZone(),end}}),Calendar.mixin({viewSpecCache:null,// cache of view definitions (initialized in Calendar.js)
// Gets information about how to create a view. Will use a cache.
getViewSpec:function(viewType){var cache=this.viewSpecCache;return cache[viewType]||(cache[viewType]=this.buildViewSpec(viewType))},
// Given a duration singular unit, like "week" or "day", finds a matching view spec.
// Preference is given to views that have corresponding buttons.
getUnitViewSpec:function(unit){var viewTypes,i,spec;if(-1!=$.inArray(unit,unitsDesc))for(
// put views that have buttons first. there will be duplicates, but oh well
viewTypes=this.header.getViewsWithButtons(),// TODO: include footer as well?
$.each(FC.views,function(viewType){// all views
viewTypes.push(viewType)}),i=0;i<viewTypes.length;i++)if((spec=this.getViewSpec(viewTypes[i]))&&spec.singleUnit==unit)return spec},
// Builds an object with information on how to create a given view
buildViewSpec:function(requestedViewType){
// iterate from the specific view definition to a more general one until we hit an actual View class
for(var spec,overrides,durationInput,duration,unit,viewOverrides=this.overrides.views||{},specChain=[],defaultsChain=[],overridesChain=[],viewType=requestedViewType;viewType;)spec=fcViews[viewType],overrides=viewOverrides[viewType],viewType=null,// clear. might repopulate for another iteration
"function"==typeof spec&&(// TODO: deprecate
spec={class:spec}),spec&&(specChain.unshift(spec),defaultsChain.unshift(spec.defaults||{}),durationInput=durationInput||spec.duration,viewType=viewType||spec.type),overrides&&(overridesChain.unshift(overrides),// view-specific option hashes have options at zero-level
durationInput=durationInput||overrides.duration,viewType=viewType||overrides.type);
// fall back to top-level `duration` option
// valid?
// view is a single-unit duration, like "week" or "day"
// incorporate options for this. lowest priority
return spec=mergeProps(specChain),spec.type=requestedViewType,!!spec.class&&(durationInput=durationInput||this.dynamicOverrides.duration||this.overrides.duration,durationInput&&(duration=moment.duration(durationInput),duration.valueOf()&&(unit=computeDurationGreatestUnit(duration,durationInput),spec.duration=duration,spec.durationUnit=unit,1===duration.as(unit)&&(spec.singleUnit=unit,overridesChain.unshift(viewOverrides[unit]||{})))),spec.defaults=mergeOptions(defaultsChain),spec.overrides=mergeOptions(overridesChain),this.buildViewSpecOptions(spec),this.buildViewSpecButtonText(spec,requestedViewType),spec)},
// Builds and assigns a view spec's options object from its already-assigned defaults and overrides
buildViewSpecOptions:function(spec){spec.options=mergeOptions([// lowest to highest priority
Calendar.defaults,// global defaults
spec.defaults,// view's defaults (from ViewSubclass.defaults)
this.dirDefaults,this.localeDefaults,// locale and dir take precedence over view's defaults!
this.overrides,// calendar's overrides (options given to constructor)
spec.overrides,// view's overrides (view-specific options)
this.dynamicOverrides]),populateInstanceComputableOptions(spec.options)},
// Computes and assigns a view spec's buttonText-related options
buildViewSpecButtonText:function(spec,requestedViewType){
// given an options object with a possible `buttonText` hash, lookup the buttonText for the
// requested view, falling back to a generic unit entry like "week" or "day"
function queryButtonText(options){var buttonText=options.buttonText||{};
// view can decide to look up a certain key
// a key like "month"
return buttonText[requestedViewType]||(spec.buttonTextKey?buttonText[spec.buttonTextKey]:null)||(spec.singleUnit?buttonText[spec.singleUnit]:null)}
// highest to lowest priority
spec.buttonTextOverride=queryButtonText(this.dynamicOverrides)||queryButtonText(this.overrides)||// constructor-specified buttonText lookup hash takes precedence
spec.overrides.buttonText,// `buttonText` for view-specific options is a string
// highest to lowest priority. mirrors buildViewSpecOptions
spec.buttonTextDefault=queryButtonText(this.localeDefaults)||queryButtonText(this.dirDefaults)||spec.defaults.buttonText||// a single string. from ViewSubclass.defaults
queryButtonText(Calendar.defaults)||(spec.duration?this.humanizeDuration(spec.duration):null)||// like "3 days"
requestedViewType}}),Calendar.mixin({el:null,contentEl:null,suggestedViewHeight:null,windowResizeProxy:null,ignoreWindowResize:0,render:function(){this.contentEl?this.elementVisible()&&(
// mainly for the public API
this.calcSize(),this.renderView()):this.initialRender()},initialRender:function(){var _this=this,el=this.el;el.addClass("fc"),
// event delegation for nav links
el.on("click.fc","a[data-goto]",function(ev){var anchorEl=$(this),gotoOptions=anchorEl.data("goto"),date=_this.moment(gotoOptions.date),viewType=gotoOptions.type,customAction=_this.view.opt("navLink"+capitaliseFirstLetter(viewType)+"Click");"function"==typeof customAction?customAction(date,ev):("string"==typeof customAction&&(viewType=customAction),_this.zoomTo(date,viewType))}),
// called immediately, and upon option change
this.optionsModel.watch("applyingThemeClasses",["?theme"],function(opts){el.toggleClass("ui-widget",opts.theme),el.toggleClass("fc-unthemed",!opts.theme)}),
// called immediately, and upon option change.
// HACK: locale often affects isRTL, so we explicitly listen to that too.
this.optionsModel.watch("applyingDirClasses",["?isRTL","?locale"],function(opts){el.toggleClass("fc-ltr",!opts.isRTL),el.toggleClass("fc-rtl",opts.isRTL)}),this.contentEl=$("<div class='fc-view-container'/>").prependTo(el),this.initToolbars(),this.renderHeader(),this.renderFooter(),this.renderView(this.opt("defaultView")),this.opt("handleWindowResize")&&$(window).resize(this.windowResizeProxy=debounce(// prevents rapid calls
this.windowResize.bind(this),this.opt("windowResizeDelay")))},destroy:function(){this.view&&this.view.removeElement(),this.toolbarsManager.proxyCall("removeElement"),this.contentEl.remove(),this.el.removeClass("fc fc-ltr fc-rtl fc-unthemed ui-widget"),this.el.off(".fc"),// unbind nav link handlers
this.windowResizeProxy&&($(window).unbind("resize",this.windowResizeProxy),this.windowResizeProxy=null),GlobalEmitter.unneeded()},elementVisible:function(){return this.el.is(":visible")},
// View Rendering
// -----------------------------------------------------------------------------------
// Renders a view because of a date change, view-type change, or for the first time.
// If not given a viewType, keep the current view but render different dates.
// Accepts an optional scroll state to restore to.
renderView:function(viewType,forcedScroll){this.ignoreWindowResize++;var needsClearView=this.view&&viewType&&this.view.type!==viewType;
// if viewType is changing, remove the old view's rendering
needsClearView&&(this.freezeContentHeight(),// prevent a scroll jump when view element is removed
this.clearView()),
// if viewType changed, or the view was never created, create a fresh view
!this.view&&viewType&&(this.view=this.viewsByType[viewType]||(this.viewsByType[viewType]=this.instantiateView(viewType)),this.view.setElement($("<div class='fc-view fc-"+viewType+"-view' />").appendTo(this.contentEl)),this.toolbarsManager.proxyCall("activateButton",viewType)),this.view&&(forcedScroll&&this.view.addForcedScroll(forcedScroll),this.elementVisible()&&(this.currentDate=this.view.setDate(this.currentDate))),needsClearView&&this.thawContentHeight(),this.ignoreWindowResize--},
// Unrenders the current view and reflects this change in the Header.
// Unregsiters the `view`, but does not remove from viewByType hash.
clearView:function(){this.toolbarsManager.proxyCall("deactivateButton",this.view.type),this.view.removeElement(),this.view=null},
// Destroys the view, including the view object. Then, re-instantiates it and renders it.
// Maintains the same scroll state.
// TODO: maintain any other user-manipulated state.
reinitView:function(){this.ignoreWindowResize++,this.freezeContentHeight();var viewType=this.view.type,scrollState=this.view.queryScroll();this.clearView(),this.calcSize(),this.renderView(viewType,scrollState),this.thawContentHeight(),this.ignoreWindowResize--},
// Resizing
// -----------------------------------------------------------------------------------
getSuggestedViewHeight:function(){return null===this.suggestedViewHeight&&this.calcSize(),this.suggestedViewHeight},isHeightAuto:function(){return"auto"===this.opt("contentHeight")||"auto"===this.opt("height")},updateSize:function(shouldRecalc){if(this.elementVisible())// isResize=true. will poll getSuggestedViewHeight() and isHeightAuto()
return shouldRecalc&&this._calcSize(),this.ignoreWindowResize++,this.view.updateSize(!0),this.ignoreWindowResize--,!0},calcSize:function(){this.elementVisible()&&this._calcSize()},_calcSize:function(){// assumes elementVisible
var contentHeightInput=this.opt("contentHeight"),heightInput=this.opt("height");// exists and not 'auto'
this.suggestedViewHeight="number"==typeof contentHeightInput?contentHeightInput:"function"==typeof contentHeightInput?contentHeightInput():"number"==typeof heightInput?heightInput-this.queryToolbarsHeight():"function"==typeof heightInput?heightInput()-this.queryToolbarsHeight():"parent"===heightInput?this.el.parent().height()-this.queryToolbarsHeight():Math.round(this.contentEl.width()/Math.max(this.opt("aspectRatio"),.5))},windowResize:function(ev){!this.ignoreWindowResize&&ev.target===window&&// so we don't process jqui "resize" events that have bubbled up
this.view.renderRange&&this.updateSize(!0)&&this.view.publiclyTrigger("windowResize",this.el[0])},/* Height "Freezing"
	-----------------------------------------------------------------------------*/
freezeContentHeight:function(){this.contentEl.css({width:"100%",height:this.contentEl.height(),overflow:"hidden"})},thawContentHeight:function(){this.contentEl.css({width:"",height:"",overflow:""})}}),Calendar.mixin({header:null,footer:null,toolbarsManager:null,initToolbars:function(){this.header=new Toolbar(this,this.computeHeaderOptions()),this.footer=new Toolbar(this,this.computeFooterOptions()),this.toolbarsManager=new Iterator([this.header,this.footer])},computeHeaderOptions:function(){return{extraClasses:"fc-header-toolbar",layout:this.opt("header")}},computeFooterOptions:function(){return{extraClasses:"fc-footer-toolbar",layout:this.opt("footer")}},
// can be called repeatedly and Header will rerender
renderHeader:function(){var header=this.header;header.setToolbarOptions(this.computeHeaderOptions()),header.render(),header.el&&this.el.prepend(header.el)},
// can be called repeatedly and Footer will rerender
renderFooter:function(){var footer=this.footer;footer.setToolbarOptions(this.computeFooterOptions()),footer.render(),footer.el&&this.el.append(footer.el)},setToolbarsTitle:function(title){this.toolbarsManager.proxyCall("updateTitle",title)},updateToolbarButtons:function(){var now=this.getNow(),view=this.view,todayInfo=view.buildDateProfile(now),prevInfo=view.buildPrevDateProfile(this.currentDate),nextInfo=view.buildNextDateProfile(this.currentDate);this.toolbarsManager.proxyCall(todayInfo.isValid&&!isDateWithinRange(now,view.currentRange)?"enableButton":"disableButton","today"),this.toolbarsManager.proxyCall(prevInfo.isValid?"enableButton":"disableButton","prev"),this.toolbarsManager.proxyCall(nextInfo.isValid?"enableButton":"disableButton","next")},queryToolbarsHeight:function(){return this.toolbarsManager.items.reduce(function(accumulator,toolbar){// includes margin
return accumulator+(toolbar.el?toolbar.el.outerHeight(!0):0)},0)}}),Calendar.defaults={titleRangeSeparator:" – ",// en dash
monthYearFormat:"MMMM YYYY",// required for en. other locales rely on datepicker computable option
defaultTimedEventDuration:"02:00:00",defaultAllDayEventDuration:{days:1},forceEventDuration:!1,nextDayThreshold:"09:00:00",// 9am
// display
defaultView:"month",aspectRatio:1.35,header:{left:"title",center:"",right:"today prev,next"},weekends:!0,weekNumbers:!1,weekNumberTitle:"W",weekNumberCalculation:"local",
//editable: false,
//nowIndicator: false,
scrollTime:"06:00:00",minTime:"00:00:00",maxTime:"24:00:00",showNonCurrentDates:!0,
// event ajax
lazyFetching:!0,startParam:"start",endParam:"end",timezoneParam:"timezone",timezone:!1,
//allDayDefault: undefined,
// locale
isRTL:!1,buttonText:{prev:"prev",next:"next",prevYear:"prev year",nextYear:"next year",year:"year",// TODO: locale files need to specify this
today:"today",month:"month",week:"week",day:"day"},buttonIcons:{prev:"left-single-arrow",next:"right-single-arrow",prevYear:"left-double-arrow",nextYear:"right-double-arrow"},allDayText:"all-day",
// jquery-ui theming
theme:!1,themeButtonIcons:{prev:"circle-triangle-w",next:"circle-triangle-e",prevYear:"seek-prev",nextYear:"seek-next"},
//eventResizableFromStart: false,
dragOpacity:.75,dragRevertDuration:500,dragScroll:!0,
//selectable: false,
unselectAuto:!0,
//selectMinDistance: 0,
dropAccept:"*",eventOrder:"title",
//eventRenderWait: null,
eventLimit:!1,eventLimitText:"more",eventLimitClick:"popover",dayPopoverFormat:"LL",handleWindowResize:!0,windowResizeDelay:100,// milliseconds before an updateSize happens
longPressDelay:1e3},Calendar.englishDefaults={// used by locale.js
dayPopoverFormat:"dddd, MMMM D"},Calendar.rtlDefaults={// right-to-left defaults
header:{// TODO: smarter solution (first/center/last ?)
left:"next,prev today",center:"",right:"title"},buttonIcons:{prev:"right-single-arrow",next:"left-single-arrow",prevYear:"right-double-arrow",nextYear:"left-double-arrow"},themeButtonIcons:{prev:"circle-triangle-e",next:"circle-triangle-w",nextYear:"seek-prev",prevYear:"seek-next"}};var localeOptionHash=FC.locales={};// initialize and expose
// TODO: document the structure and ordering of a FullCalendar locale file
// Initialize jQuery UI datepicker translations while using some of the translations
// Will set this as the default locales for datepicker.
FC.datepickerLocale=function(localeCode,dpLocaleCode,dpOptions){
// get the FullCalendar internal option hash for this locale. create if necessary
var fcOptions=localeOptionHash[localeCode]||(localeOptionHash[localeCode]={});
// transfer some simple options from datepicker to fc
fcOptions.isRTL=dpOptions.isRTL,fcOptions.weekNumberTitle=dpOptions.weekHeader,
// compute some more complex options from datepicker
$.each(dpComputableOptions,function(name,func){fcOptions[name]=func(dpOptions)}),
// is jQuery UI Datepicker is on the page?
$.datepicker&&(
// Register the locale data.
// FullCalendar and MomentJS use locale codes like "pt-br" but Datepicker
// does it like "pt-BR" or if it doesn't have the locale, maybe just "pt".
// Make an alias so the locale can be referenced either way.
$.datepicker.regional[dpLocaleCode]=$.datepicker.regional[localeCode]=// alias
dpOptions,
// Alias 'en' to the default locale data. Do this every time.
$.datepicker.regional.en=$.datepicker.regional[""],
// Set as Datepicker's global defaults.
$.datepicker.setDefaults(dpOptions))},
// Sets FullCalendar-specific translations. Will set the locales as the global default.
FC.locale=function(localeCode,newFcOptions){var fcOptions,momOptions;
// get the FullCalendar internal option hash for this locale. create if necessary
fcOptions=localeOptionHash[localeCode]||(localeOptionHash[localeCode]={}),
// provided new options for this locales? merge them in
newFcOptions&&(fcOptions=localeOptionHash[localeCode]=mergeOptions([fcOptions,newFcOptions])),
// compute locale options that weren't defined.
// always do this. newFcOptions can be undefined when initializing from i18n file,
// so no way to tell if this is an initialization or a default-setting.
momOptions=getMomentLocaleData(localeCode),// will fall back to en
$.each(momComputableOptions,function(name,func){null==fcOptions[name]&&(fcOptions[name]=func(momOptions,fcOptions))}),
// set it as the default locale for FullCalendar
Calendar.defaults.locale=localeCode};
// NOTE: can't guarantee any of these computations will run because not every locale has datepicker
// configs, so make sure there are English fallbacks for these in the defaults file.
var dpComputableOptions={buttonText:function(dpOptions){return{
// the translations sometimes wrongly contain HTML entities
prev:stripHtmlEntities(dpOptions.prevText),next:stripHtmlEntities(dpOptions.nextText),today:stripHtmlEntities(dpOptions.currentText)}},
// Produces format strings like "MMMM YYYY" -> "September 2014"
monthYearFormat:function(dpOptions){return dpOptions.showMonthAfterYear?"YYYY["+dpOptions.yearSuffix+"] MMMM":"MMMM YYYY["+dpOptions.yearSuffix+"]"}},momComputableOptions={
// Produces format strings like "ddd M/D" -> "Fri 9/15"
dayOfMonthFormat:function(momOptions,fcOptions){var format=momOptions.longDateFormat("l");// for the format like "M/D/YYYY"
// strip the year off the edge, as well as other misc non-whitespace chars
return format=format.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g,""),fcOptions.isRTL?format+=" ddd":format="ddd "+format,format},
// Produces format strings like "h:mma" -> "6:00pm"
mediumTimeFormat:function(momOptions){// can't be called `timeFormat` because collides with option
return momOptions.longDateFormat("LT").replace(/\s*a$/i,"a")},
// Produces format strings like "h(:mm)a" -> "6pm" / "6:30pm"
smallTimeFormat:function(momOptions){return momOptions.longDateFormat("LT").replace(":mm","(:mm)").replace(/(\Wmm)$/,"($1)").replace(/\s*a$/i,"a")},
// Produces format strings like "h(:mm)t" -> "6p" / "6:30p"
extraSmallTimeFormat:function(momOptions){return momOptions.longDateFormat("LT").replace(":mm","(:mm)").replace(/(\Wmm)$/,"($1)").replace(/\s*a$/i,"t")},
// Produces format strings like "ha" / "H" -> "6pm" / "18"
hourFormat:function(momOptions){return momOptions.longDateFormat("LT").replace(":mm","").replace(/(\Wmm)$/,"").replace(/\s*a$/i,"a")},
// Produces format strings like "h:mm" -> "6:30" (with no AM/PM)
noMeridiemTimeFormat:function(momOptions){return momOptions.longDateFormat("LT").replace(/\s*a$/i,"")}},instanceComputableOptions={
// Produces format strings for results like "Mo 16"
smallDayDateFormat:function(options){return options.isRTL?"D dd":"dd D"},
// Produces format strings for results like "Wk 5"
weekFormat:function(options){return options.isRTL?"w[ "+options.weekNumberTitle+"]":"["+options.weekNumberTitle+" ]w"},
// Produces format strings for results like "Wk5"
smallWeekFormat:function(options){return options.isRTL?"w["+options.weekNumberTitle+"]":"["+options.weekNumberTitle+"]w"}};
// Initialize English by forcing computation of moment-derived options.
// Also, sets it as the default.
FC.locale("en",Calendar.englishDefaults),FC.sourceNormalizers=[],FC.sourceFetchers=[];var ajaxDefaults={dataType:"json",cache:!1},eventGUID=1;
// returns an undo function
Calendar.prototype.mutateSeg=function(seg,newProps){return this.mutateEvent(seg.event,newProps)},
// hook for external libs to manipulate event properties upon creation.
// should manipulate the event in-place.
Calendar.prototype.normalizeEvent=function(event){},
// Does the given span (start, end, and other location information)
// fully contain the other?
Calendar.prototype.spanContainsSpan=function(outerSpan,innerSpan){var eventStart=outerSpan.start.clone().stripZone(),eventEnd=this.getEventEnd(outerSpan).stripZone();return innerSpan.start>=eventStart&&innerSpan.end<=eventEnd},
// Returns a list of events that the given event should be compared against when being considered for a move to
// the specified span. Attached to the Calendar's prototype because EventManager is a mixin for a Calendar.
Calendar.prototype.getPeerEvents=function(span,event){var i,otherEvent,cache=this.getEventCache(),peerEvents=[];for(i=0;i<cache.length;i++)otherEvent=cache[i],event&&event._id===otherEvent._id||peerEvents.push(otherEvent);return peerEvents},/* Overlapping / Constraining
-----------------------------------------------------------------------------------------*/
// Determines if the given event can be relocated to the given span (unzoned start/end with other misc data)
Calendar.prototype.isEventSpanAllowed=function(span,event){var source=event.source||{},eventAllowFunc=this.opt("eventAllow"),constraint=firstDefined(event.constraint,source.constraint,this.opt("eventConstraint")),overlap=firstDefined(event.overlap,source.overlap,this.opt("eventOverlap"));return this.isSpanAllowed(span,constraint,overlap,event)&&(!eventAllowFunc||!1!==eventAllowFunc(span,event))},
// Determines if an external event can be relocated to the given span (unzoned start/end with other misc data)
Calendar.prototype.isExternalSpanAllowed=function(eventSpan,eventLocation,eventProps){var eventInput,event;
// note: very similar logic is in View's reportExternalDrop
return eventProps&&(eventInput=$.extend({},eventProps,eventLocation),event=this.expandEvent(this.buildEventFromInput(eventInput))[0]),event?this.isEventSpanAllowed(eventSpan,event):this.isSelectionSpanAllowed(eventSpan)},
// Determines the given span (unzoned start/end with other misc data) can be selected.
Calendar.prototype.isSelectionSpanAllowed=function(span){var selectAllowFunc=this.opt("selectAllow");return this.isSpanAllowed(span,this.opt("selectConstraint"),this.opt("selectOverlap"))&&(!selectAllowFunc||!1!==selectAllowFunc(span))},
// Returns true if the given span (caused by an event drop/resize or a selection) is allowed to exist
// according to the constraint/overlap settings.
// `event` is not required if checking a selection.
Calendar.prototype.isSpanAllowed=function(span,constraint,overlap,event){var constraintEvents,anyContainment,peerEvents,i,peerEvent,peerOverlap;
// the range must be fully contained by at least one of produced constraint events
if(null!=constraint&&(
// not treated as an event! intermediate data structure
// TODO: use ranges in the future
constraintEvents=this.constraintToEvents(constraint))){for(// not invalid
anyContainment=!1,i=0;i<constraintEvents.length;i++)if(this.spanContainsSpan(constraintEvents[i],span)){anyContainment=!0;break}if(!anyContainment)return!1}for(peerEvents=this.getPeerEvents(span,event),i=0;i<peerEvents.length;i++)
// there needs to be an actual intersection before disallowing anything
if(peerEvent=peerEvents[i],this.eventIntersectsRange(peerEvent,span)){
// evaluate overlap for the given range and short-circuit if necessary
if(!1===overlap)return!1;if("function"==typeof overlap&&!overlap(peerEvent,event))return!1;
// if we are computing if the given range is allowable for an event, consider the other event's
// EventObject-specific or Source-specific `overlap` property
if(event){if(!1===(peerOverlap=firstDefined(peerEvent.overlap,(peerEvent.source||{}).overlap)))return!1;
// if the peer event's overlap is a test function, pass the subject event as the first param
if("function"==typeof peerOverlap&&!peerOverlap(event,peerEvent))return!1}}return!0},
// Given an event input from the API, produces an array of event objects. Possible event inputs:
// 'businessHours'
// An event ID (number or string)
// An object with specific start/end dates or a recurring event (like what businessHours accepts)
Calendar.prototype.constraintToEvents=function(constraintInput){return"businessHours"===constraintInput?this.getCurrentBusinessHourEvents():"object"==typeof constraintInput?null!=constraintInput.start?this.expandEvent(this.buildEventFromInput(constraintInput)):null:this.clientEvents(constraintInput)},
// Does the event's date range intersect with the given range?
// start/end already assumed to have stripped zones :(
Calendar.prototype.eventIntersectsRange=function(event,range){var eventStart=event.start.clone().stripZone(),eventEnd=this.getEventEnd(event).stripZone();return range.start<eventEnd&&range.end>eventStart};/* Business Hours
-----------------------------------------------------------------------------------------*/
var BUSINESS_HOUR_EVENT_DEFAULTS={id:"_fcBusinessHours",// will relate events from different calls to expandEvent
start:"09:00",end:"17:00",dow:[1,2,3,4,5],// monday - friday
rendering:"inverse-background"};
// Return events objects for business hours within the current view.
// Abuse of our event system :(
Calendar.prototype.getCurrentBusinessHourEvents=function(wholeDay){return this.computeBusinessHourEvents(wholeDay,this.opt("businessHours"))},
// Given a raw input value from options, return events objects for business hours within the current view.
Calendar.prototype.computeBusinessHourEvents=function(wholeDay,input){return!0===input?this.expandBusinessHourEvents(wholeDay,[{}]):$.isPlainObject(input)?this.expandBusinessHourEvents(wholeDay,[input]):$.isArray(input)?this.expandBusinessHourEvents(wholeDay,input,!0):[]},
// inputs expected to be an array of objects.
// if ignoreNoDow is true, will ignore entries that don't specify a day-of-week (dow) key.
Calendar.prototype.expandBusinessHourEvents=function(wholeDay,inputs,ignoreNoDow){var i,input,view=this.getView(),events=[];for(i=0;i<inputs.length;i++)input=inputs[i],ignoreNoDow&&!input.dow||(
// give defaults. will make a copy
input=$.extend({},BUSINESS_HOUR_EVENT_DEFAULTS,input),
// if a whole-day series is requested, clear the start/end times
wholeDay&&(input.start=null,input.end=null),events.push.apply(events,// append
this.expandEvent(this.buildEventFromInput(input),view.activeRange.start,view.activeRange.end)));return events};/* An abstract class for the "basic" views, as well as month view. Renders one or more rows of day cells.
----------------------------------------------------------------------------------------------------------------------*/
// It is a manager for a DayGrid subcomponent, which does most of the heavy lifting.
// It is responsible for managing width/height.
var BasicView=FC.BasicView=View.extend({scroller:null,dayGridClass:DayGrid,// class the dayGrid will be instantiated from (overridable by subclasses)
dayGrid:null,// the main subcomponent that does most of the heavy lifting
dayNumbersVisible:!1,// display day numbers on each day cell?
colWeekNumbersVisible:!1,// display week numbers along the side?
cellWeekNumbersVisible:!1,// display week numbers in day cell?
weekNumberWidth:null,// width of all the week-number cells running down the side
headContainerEl:null,// div that hold's the dayGrid's rendered date header
headRowEl:null,// the fake row element of the day-of-week header
initialize:function(){this.dayGrid=this.instantiateDayGrid(),this.scroller=new Scroller({overflowX:"hidden",overflowY:"auto"})},
// Generates the DayGrid object this view needs. Draws from this.dayGridClass
instantiateDayGrid:function(){return new(this.dayGridClass.extend(basicDayGridMethods))(this)},
// Computes the date range that will be rendered.
buildRenderRange:function(currentRange,currentRangeUnit){var renderRange=View.prototype.buildRenderRange.apply(this,arguments);
// year and month views should be aligned with weeks. this is already done for week
// make end-of-week if not already
return/^(year|month)$/.test(currentRangeUnit)&&(renderRange.start.startOf("week"),renderRange.end.weekday()&&renderRange.end.add(1,"week").startOf("week")),this.trimHiddenDays(renderRange)},
// Renders the view into `this.el`, which should already be assigned
renderDates:function(){this.dayGrid.breakOnWeeks=/year|month|week/.test(this.currentRangeUnit),// do before Grid::setRange
this.dayGrid.setRange(this.renderRange),this.dayNumbersVisible=this.dayGrid.rowCnt>1,// TODO: make grid responsible
this.opt("weekNumbers")&&(this.opt("weekNumbersWithinDays")?(this.cellWeekNumbersVisible=!0,this.colWeekNumbersVisible=!1):(this.cellWeekNumbersVisible=!1,this.colWeekNumbersVisible=!0)),this.dayGrid.numbersVisible=this.dayNumbersVisible||this.cellWeekNumbersVisible||this.colWeekNumbersVisible,this.el.addClass("fc-basic-view").html(this.renderSkeletonHtml()),this.renderHead(),this.scroller.render();var dayGridContainerEl=this.scroller.el.addClass("fc-day-grid-container"),dayGridEl=$('<div class="fc-day-grid" />').appendTo(dayGridContainerEl);this.el.find(".fc-body > tr > td").append(dayGridContainerEl),this.dayGrid.setElement(dayGridEl),this.dayGrid.renderDates(this.hasRigidRows())},
// render the day-of-week headers
renderHead:function(){this.headContainerEl=this.el.find(".fc-head-container").html(this.dayGrid.renderHeadHtml()),this.headRowEl=this.headContainerEl.find(".fc-row")},
// Unrenders the content of the view. Since we haven't separated skeleton rendering from date rendering,
// always completely kill the dayGrid's rendering.
unrenderDates:function(){this.dayGrid.unrenderDates(),this.dayGrid.removeElement(),this.scroller.destroy()},renderBusinessHours:function(){this.dayGrid.renderBusinessHours()},unrenderBusinessHours:function(){this.dayGrid.unrenderBusinessHours()},
// Builds the HTML skeleton for the view.
// The day-grid component will render inside of a container defined by this HTML.
renderSkeletonHtml:function(){return'<table><thead class="fc-head"><tr><td class="fc-head-container '+this.widgetHeaderClass+'"></td></tr></thead><tbody class="fc-body"><tr><td class="'+this.widgetContentClass+'"></td></tr></tbody></table>'},
// Generates an HTML attribute string for setting the width of the week number column, if it is known
weekNumberStyleAttr:function(){return null!==this.weekNumberWidth?'style="width:'+this.weekNumberWidth+'px"':""},
// Determines whether each row should have a constant height
hasRigidRows:function(){var eventLimit=this.opt("eventLimit");return eventLimit&&"number"!=typeof eventLimit},/* Dimensions
	------------------------------------------------------------------------------------------------------------------*/
// Refreshes the horizontal dimensions of the view
updateWidth:function(){this.colWeekNumbersVisible&&(
// Make sure all week number cells running down the side have the same width.
// Record the width for cells created later.
this.weekNumberWidth=matchCellWidths(this.el.find(".fc-week-number")))},
// Adjusts the vertical dimensions of the view to the specified values
setHeight:function(totalHeight,isAuto){var scrollerHeight,scrollbarWidths,eventLimit=this.opt("eventLimit");
// reset all heights to be natural
this.scroller.clear(),uncompensateScroll(this.headRowEl),this.dayGrid.removeSegPopover(),// kill the "more" popover if displayed
// is the event limit a constant level number?
eventLimit&&"number"==typeof eventLimit&&this.dayGrid.limitRows(eventLimit),
// distribute the height to the rows
// (totalHeight is a "recommended" value if isAuto)
scrollerHeight=this.computeScrollerHeight(totalHeight),this.setGridHeight(scrollerHeight,isAuto),
// is the event limit dynamically calculated?
eventLimit&&"number"!=typeof eventLimit&&this.dayGrid.limitRows(eventLimit),isAuto||(// should we force dimensions of the scroll container?
this.scroller.setHeight(scrollerHeight),scrollbarWidths=this.scroller.getScrollbarWidths(),(scrollbarWidths.left||scrollbarWidths.right)&&(// using scrollbars?
compensateScroll(this.headRowEl,scrollbarWidths),
// doing the scrollbar compensation might have created text overflow which created more height. redo
scrollerHeight=this.computeScrollerHeight(totalHeight),this.scroller.setHeight(scrollerHeight)),
// guarantees the same scrollbar widths
this.scroller.lockOverflow(scrollbarWidths))},
// given a desired total height of the view, returns what the height of the scroller should be
computeScrollerHeight:function(totalHeight){return totalHeight-subtractInnerElHeight(this.el,this.scroller.el)},
// Sets the height of just the DayGrid component in this view
setGridHeight:function(height,isAuto){isAuto?undistributeHeight(this.dayGrid.rowEls):distributeHeight(this.dayGrid.rowEls,height,!0)},/* Scroll
	------------------------------------------------------------------------------------------------------------------*/
computeInitialDateScroll:function(){return{top:0}},queryDateScroll:function(){return{top:this.scroller.getScrollTop()}},applyDateScroll:function(scroll){void 0!==scroll.top&&this.scroller.setScrollTop(scroll.top)},/* Hit Areas
	------------------------------------------------------------------------------------------------------------------*/
// forward all hit-related method calls to dayGrid
hitsNeeded:function(){this.dayGrid.hitsNeeded()},hitsNotNeeded:function(){this.dayGrid.hitsNotNeeded()},prepareHits:function(){this.dayGrid.prepareHits()},releaseHits:function(){this.dayGrid.releaseHits()},queryHit:function(left,top){return this.dayGrid.queryHit(left,top)},getHitSpan:function(hit){return this.dayGrid.getHitSpan(hit)},getHitEl:function(hit){return this.dayGrid.getHitEl(hit)},/* Events
	------------------------------------------------------------------------------------------------------------------*/
// Renders the given events onto the view and populates the segments array
renderEvents:function(events){this.dayGrid.renderEvents(events),this.updateHeight()},
// Retrieves all segment objects that are rendered in the view
getEventSegs:function(){return this.dayGrid.getEventSegs()},
// Unrenders all event elements and clears internal segment data
unrenderEvents:function(){this.dayGrid.unrenderEvents()},/* Dragging (for both events and external elements)
	------------------------------------------------------------------------------------------------------------------*/
// A returned value of `true` signals that a mock "helper" event has been rendered.
renderDrag:function(dropLocation,seg){return this.dayGrid.renderDrag(dropLocation,seg)},unrenderDrag:function(){this.dayGrid.unrenderDrag()},/* Selection
	------------------------------------------------------------------------------------------------------------------*/
// Renders a visual indication of a selection
renderSelection:function(span){this.dayGrid.renderSelection(span)},
// Unrenders a visual indications of a selection
unrenderSelection:function(){this.dayGrid.unrenderSelection()}}),basicDayGridMethods={
// Generates the HTML that will go before the day-of week header cells
renderHeadIntroHtml:function(){var view=this.view;// needed for matchCellWidths
return view.colWeekNumbersVisible?'<th class="fc-week-number '+view.widgetHeaderClass+'" '+view.weekNumberStyleAttr()+"><span>"+htmlEscape(view.opt("weekNumberTitle"))+"</span></th>":""},
// Generates the HTML that will go before content-skeleton cells that display the day/week numbers
renderNumberIntroHtml:function(row){var view=this.view,weekStart=this.getCellDate(row,0);// aside from link, important for matchCellWidths
return view.colWeekNumbersVisible?'<td class="fc-week-number" '+view.weekNumberStyleAttr()+">"+view.buildGotoAnchorHtml({date:weekStart,type:"week",forceOff:1===this.colCnt},weekStart.format("w"))+"</td>":""},
// Generates the HTML that goes before the day bg cells for each day-row
renderBgIntroHtml:function(){var view=this.view;return view.colWeekNumbersVisible?'<td class="fc-week-number '+view.widgetContentClass+'" '+view.weekNumberStyleAttr()+"></td>":""},
// Generates the HTML that goes before every other type of row generated by DayGrid.
// Affects helper-skeleton and highlight-skeleton rows.
renderIntroHtml:function(){var view=this.view;return view.colWeekNumbersVisible?'<td class="fc-week-number" '+view.weekNumberStyleAttr()+"></td>":""}},MonthView=FC.MonthView=BasicView.extend({
// Computes the date range that will be rendered.
buildRenderRange:function(){var rowCnt,renderRange=BasicView.prototype.buildRenderRange.apply(this,arguments);
// ensure 6 weeks
// could be partial weeks due to hiddenDays
return this.isFixedWeeks()&&(rowCnt=Math.ceil(renderRange.end.diff(renderRange.start,"weeks",!0)),renderRange.end.add(6-rowCnt,"weeks")),renderRange},
// Overrides the default BasicView behavior to have special multi-week auto-height logic
setGridHeight:function(height,isAuto){
// if auto, make the height of each row the height that it would be if there were 6 weeks
isAuto&&(height*=this.rowCnt/6),distributeHeight(this.dayGrid.rowEls,height,!isAuto)},isFixedWeeks:function(){return this.opt("fixedWeekCount")}});fcViews.basic={class:BasicView},fcViews.basicDay={type:"basic",duration:{days:1}},fcViews.basicWeek={type:"basic",duration:{weeks:1}},fcViews.month={class:MonthView,duration:{months:1},// important for prev/next
defaults:{fixedWeekCount:!0}};/* An abstract class for all agenda-related views. Displays one more columns with time slots running vertically.
----------------------------------------------------------------------------------------------------------------------*/
// Is a manager for the TimeGrid subcomponent and possibly the DayGrid subcomponent (if allDaySlot is on).
// Responsible for managing width/height.
var AgendaView=FC.AgendaView=View.extend({scroller:null,timeGridClass:TimeGrid,// class used to instantiate the timeGrid. subclasses can override
timeGrid:null,// the main time-grid subcomponent of this view
dayGridClass:DayGrid,// class used to instantiate the dayGrid. subclasses can override
dayGrid:null,// the "all-day" subcomponent. if all-day is turned off, this will be null
axisWidth:null,// the width of the time axis running down the side
headContainerEl:null,// div that hold's the timeGrid's rendered date header
noScrollRowEls:null,// set of fake row elements that must compensate when scroller has scrollbars
// when the time-grid isn't tall enough to occupy the given height, we render an <hr> underneath
bottomRuleEl:null,
// indicates that minTime/maxTime affects rendering
usesMinMaxTime:!0,initialize:function(){this.timeGrid=this.instantiateTimeGrid(),this.opt("allDaySlot")&&(// should we display the "all-day" area?
this.dayGrid=this.instantiateDayGrid()),this.scroller=new Scroller({overflowX:"hidden",overflowY:"auto"})},
// Instantiates the TimeGrid object this view needs. Draws from this.timeGridClass
instantiateTimeGrid:function(){return new(this.timeGridClass.extend(agendaTimeGridMethods))(this)},
// Instantiates the DayGrid object this view might need. Draws from this.dayGridClass
instantiateDayGrid:function(){return new(this.dayGridClass.extend(agendaDayGridMethods))(this)},/* Rendering
	------------------------------------------------------------------------------------------------------------------*/
// Renders the view into `this.el`, which has already been assigned
renderDates:function(){this.timeGrid.setRange(this.renderRange),this.dayGrid&&this.dayGrid.setRange(this.renderRange),this.el.addClass("fc-agenda-view").html(this.renderSkeletonHtml()),this.renderHead(),this.scroller.render();var timeGridWrapEl=this.scroller.el.addClass("fc-time-grid-container"),timeGridEl=$('<div class="fc-time-grid" />').appendTo(timeGridWrapEl);this.el.find(".fc-body > tr > td").append(timeGridWrapEl),this.timeGrid.setElement(timeGridEl),this.timeGrid.renderDates(),
// the <hr> that sometimes displays under the time-grid
this.bottomRuleEl=$('<hr class="fc-divider '+this.widgetHeaderClass+'"/>').appendTo(this.timeGrid.el),// inject it into the time-grid
this.dayGrid&&(this.dayGrid.setElement(this.el.find(".fc-day-grid")),this.dayGrid.renderDates(),
// have the day-grid extend it's coordinate area over the <hr> dividing the two grids
this.dayGrid.bottomCoordPadding=this.dayGrid.el.next("hr").outerHeight()),this.noScrollRowEls=this.el.find(".fc-row:not(.fc-scroller *)")},
// render the day-of-week headers
renderHead:function(){this.headContainerEl=this.el.find(".fc-head-container").html(this.timeGrid.renderHeadHtml())},
// Unrenders the content of the view. Since we haven't separated skeleton rendering from date rendering,
// always completely kill each grid's rendering.
unrenderDates:function(){this.timeGrid.unrenderDates(),this.timeGrid.removeElement(),this.dayGrid&&(this.dayGrid.unrenderDates(),this.dayGrid.removeElement()),this.scroller.destroy()},
// Builds the HTML skeleton for the view.
// The day-grid and time-grid components will render inside containers defined by this HTML.
renderSkeletonHtml:function(){return'<table><thead class="fc-head"><tr><td class="fc-head-container '+this.widgetHeaderClass+'"></td></tr></thead><tbody class="fc-body"><tr><td class="'+this.widgetContentClass+'">'+(this.dayGrid?'<div class="fc-day-grid"/><hr class="fc-divider '+this.widgetHeaderClass+'"/>':"")+"</td></tr></tbody></table>"},
// Generates an HTML attribute string for setting the width of the axis, if it is known
axisStyleAttr:function(){return null!==this.axisWidth?'style="width:'+this.axisWidth+'px"':""},/* Business Hours
	------------------------------------------------------------------------------------------------------------------*/
renderBusinessHours:function(){this.timeGrid.renderBusinessHours(),this.dayGrid&&this.dayGrid.renderBusinessHours()},unrenderBusinessHours:function(){this.timeGrid.unrenderBusinessHours(),this.dayGrid&&this.dayGrid.unrenderBusinessHours()},/* Now Indicator
	------------------------------------------------------------------------------------------------------------------*/
getNowIndicatorUnit:function(){return this.timeGrid.getNowIndicatorUnit()},renderNowIndicator:function(date){this.timeGrid.renderNowIndicator(date)},unrenderNowIndicator:function(){this.timeGrid.unrenderNowIndicator()},/* Dimensions
	------------------------------------------------------------------------------------------------------------------*/
updateSize:function(isResize){this.timeGrid.updateSize(isResize),View.prototype.updateSize.call(this,isResize)},
// Refreshes the horizontal dimensions of the view
updateWidth:function(){
// make all axis cells line up, and record the width so newly created axis cells will have it
this.axisWidth=matchCellWidths(this.el.find(".fc-axis"))},
// Adjusts the vertical dimensions of the view to the specified values
setHeight:function(totalHeight,isAuto){var eventLimit,scrollerHeight,scrollbarWidths;
// reset all dimensions back to the original state
this.bottomRuleEl.hide(),// .show() will be called later if this <hr> is necessary
this.scroller.clear(),// sets height to 'auto' and clears overflow
uncompensateScroll(this.noScrollRowEls),
// limit number of events in the all-day area
this.dayGrid&&(this.dayGrid.removeSegPopover(),// kill the "more" popover if displayed
eventLimit=this.opt("eventLimit"),eventLimit&&"number"!=typeof eventLimit&&(eventLimit=AGENDA_ALL_DAY_EVENT_LIMIT),eventLimit&&this.dayGrid.limitRows(eventLimit)),isAuto||(// should we force dimensions of the scroll container?
scrollerHeight=this.computeScrollerHeight(totalHeight),this.scroller.setHeight(scrollerHeight),scrollbarWidths=this.scroller.getScrollbarWidths(),(scrollbarWidths.left||scrollbarWidths.right)&&(// using scrollbars?
// make the all-day and header rows lines up
compensateScroll(this.noScrollRowEls,scrollbarWidths),
// the scrollbar compensation might have changed text flow, which might affect height, so recalculate
// and reapply the desired height to the scroller.
scrollerHeight=this.computeScrollerHeight(totalHeight),this.scroller.setHeight(scrollerHeight)),
// guarantees the same scrollbar widths
this.scroller.lockOverflow(scrollbarWidths),
// if there's any space below the slats, show the horizontal rule.
// this won't cause any new overflow, because lockOverflow already called.
this.timeGrid.getTotalSlatHeight()<scrollerHeight&&this.bottomRuleEl.show())},
// given a desired total height of the view, returns what the height of the scroller should be
computeScrollerHeight:function(totalHeight){return totalHeight-subtractInnerElHeight(this.el,this.scroller.el)},/* Scroll
	------------------------------------------------------------------------------------------------------------------*/
// Computes the initial pre-configured scroll state prior to allowing the user to change it
computeInitialDateScroll:function(){var scrollTime=moment.duration(this.opt("scrollTime")),top=this.timeGrid.computeTimeTop(scrollTime);
// zoom can give weird floating-point values. rather scroll a little bit further
return top=Math.ceil(top),top&&top++,{top:top}},queryDateScroll:function(){return{top:this.scroller.getScrollTop()}},applyDateScroll:function(scroll){void 0!==scroll.top&&this.scroller.setScrollTop(scroll.top)},/* Hit Areas
	------------------------------------------------------------------------------------------------------------------*/
// forward all hit-related method calls to the grids (dayGrid might not be defined)
hitsNeeded:function(){this.timeGrid.hitsNeeded(),this.dayGrid&&this.dayGrid.hitsNeeded()},hitsNotNeeded:function(){this.timeGrid.hitsNotNeeded(),this.dayGrid&&this.dayGrid.hitsNotNeeded()},prepareHits:function(){this.timeGrid.prepareHits(),this.dayGrid&&this.dayGrid.prepareHits()},releaseHits:function(){this.timeGrid.releaseHits(),this.dayGrid&&this.dayGrid.releaseHits()},queryHit:function(left,top){var hit=this.timeGrid.queryHit(left,top);return!hit&&this.dayGrid&&(hit=this.dayGrid.queryHit(left,top)),hit},getHitSpan:function(hit){
// TODO: hit.component is set as a hack to identify where the hit came from
return hit.component.getHitSpan(hit)},getHitEl:function(hit){
// TODO: hit.component is set as a hack to identify where the hit came from
return hit.component.getHitEl(hit)},/* Events
	------------------------------------------------------------------------------------------------------------------*/
// Renders events onto the view and populates the View's segment array
renderEvents:function(events){var i,dayEvents=[],timedEvents=[];
// separate the events into all-day and timed
for(i=0;i<events.length;i++)events[i].allDay?dayEvents.push(events[i]):timedEvents.push(events[i]);
// render the events in the subcomponents
this.timeGrid.renderEvents(timedEvents),this.dayGrid&&this.dayGrid.renderEvents(dayEvents),
// the all-day area is flexible and might have a lot of events, so shift the height
this.updateHeight()},
// Retrieves all segment objects that are rendered in the view
getEventSegs:function(){return this.timeGrid.getEventSegs().concat(this.dayGrid?this.dayGrid.getEventSegs():[])},
// Unrenders all event elements and clears internal segment data
unrenderEvents:function(){
// unrender the events in the subcomponents
this.timeGrid.unrenderEvents(),this.dayGrid&&this.dayGrid.unrenderEvents()},/* Dragging (for events and external elements)
	------------------------------------------------------------------------------------------------------------------*/
// A returned value of `true` signals that a mock "helper" event has been rendered.
renderDrag:function(dropLocation,seg){return dropLocation.start.hasTime()?this.timeGrid.renderDrag(dropLocation,seg):this.dayGrid?this.dayGrid.renderDrag(dropLocation,seg):void 0},unrenderDrag:function(){this.timeGrid.unrenderDrag(),this.dayGrid&&this.dayGrid.unrenderDrag()},/* Selection
	------------------------------------------------------------------------------------------------------------------*/
// Renders a visual indication of a selection
renderSelection:function(span){span.start.hasTime()||span.end.hasTime()?this.timeGrid.renderSelection(span):this.dayGrid&&this.dayGrid.renderSelection(span)},
// Unrenders a visual indications of a selection
unrenderSelection:function(){this.timeGrid.unrenderSelection(),this.dayGrid&&this.dayGrid.unrenderSelection()}}),agendaTimeGridMethods={
// Generates the HTML that will go before the day-of week header cells
renderHeadIntroHtml:function(){var weekText,view=this.view;// aside from link, important for matchCellWidths
return view.opt("weekNumbers")?(weekText=this.start.format(view.opt("smallWeekFormat")),'<th class="fc-axis fc-week-number '+view.widgetHeaderClass+'" '+view.axisStyleAttr()+">"+view.buildGotoAnchorHtml({date:this.start,type:"week",forceOff:this.colCnt>1},htmlEscape(weekText))+"</th>"):'<th class="fc-axis '+view.widgetHeaderClass+'" '+view.axisStyleAttr()+"></th>"},
// Generates the HTML that goes before the bg of the TimeGrid slot area. Long vertical column.
renderBgIntroHtml:function(){var view=this.view;return'<td class="fc-axis '+view.widgetContentClass+'" '+view.axisStyleAttr()+"></td>"},
// Generates the HTML that goes before all other types of cells.
// Affects content-skeleton, helper-skeleton, highlight-skeleton for both the time-grid and day-grid.
renderIntroHtml:function(){return'<td class="fc-axis" '+this.view.axisStyleAttr()+"></td>"}},agendaDayGridMethods={
// Generates the HTML that goes before the all-day cells
renderBgIntroHtml:function(){var view=this.view;// needed for matchCellWidths
return'<td class="fc-axis '+view.widgetContentClass+'" '+view.axisStyleAttr()+"><span>"+view.getAllDayHtml()+"</span></td>"},
// Generates the HTML that goes before all other types of cells.
// Affects content-skeleton, helper-skeleton, highlight-skeleton for both the time-grid and day-grid.
renderIntroHtml:function(){return'<td class="fc-axis" '+this.view.axisStyleAttr()+"></td>"}},AGENDA_ALL_DAY_EVENT_LIMIT=5,AGENDA_STOCK_SUB_DURATIONS=[{hours:1},{minutes:30},{minutes:15},{seconds:30},{seconds:15}];fcViews.agenda={class:AgendaView,defaults:{allDaySlot:!0,slotDuration:"00:30:00",slotEventOverlap:!0}},fcViews.agendaDay={type:"agenda",duration:{days:1}},fcViews.agendaWeek={type:"agenda",duration:{weeks:1}};/*
Responsible for the scroller, and forwarding event-related actions into the "grid"
*/
var ListView=View.extend({grid:null,scroller:null,initialize:function(){this.grid=new ListViewGrid(this),this.scroller=new Scroller({overflowX:"hidden",overflowY:"auto"})},renderSkeleton:function(){this.el.addClass("fc-list-view "+this.widgetContentClass),this.scroller.render(),this.scroller.el.appendTo(this.el),this.grid.setElement(this.scroller.scrollEl)},unrenderSkeleton:function(){this.scroller.destroy()},setHeight:function(totalHeight,isAuto){this.scroller.setHeight(this.computeScrollerHeight(totalHeight))},computeScrollerHeight:function(totalHeight){return totalHeight-subtractInnerElHeight(this.el,this.scroller.el)},renderDates:function(){this.grid.setRange(this.renderRange)},renderEvents:function(events){this.grid.renderEvents(events)},unrenderEvents:function(){this.grid.unrenderEvents()},isEventResizable:function(event){return!1},isEventDraggable:function(event){return!1}}),ListViewGrid=Grid.extend({segSelector:".fc-list-item",// which elements accept event actions
hasDayInteractions:!1,// no day selection or day clicking
// slices by day
spanToSegs:function(span){for(var seg,view=this.view,dayStart=view.renderRange.start.clone().time(0),dayIndex=0,segs=[];dayStart<view.renderRange.end;)
// detect when span won't go fully into the next day,
// and mutate the latest seg to the be the end.
if(seg=intersectRanges(span,{start:dayStart,end:dayStart.clone().add(1,"day")}),seg&&(seg.dayIndex=dayIndex,segs.push(seg)),dayStart.add(1,"day"),dayIndex++,seg&&!seg.isEnd&&span.end.hasTime()&&span.end<dayStart.clone().add(this.view.nextDayThreshold)){seg.end=span.end.clone(),seg.isEnd=!0;break}return segs},
// like "4:00am"
computeEventTimeFormat:function(){return this.view.opt("mediumTimeFormat")},
// for events with a url, the whole <tr> should be clickable,
// but it's impossible to wrap with an <a> tag. simulate this.
handleSegClick:function(seg,ev){var url;Grid.prototype.handleSegClick.apply(this,arguments),// super. might prevent the default action
// not clicking on or within an <a> with an href
$(ev.target).closest("a[href]").length||(url=seg.event.url)&&!ev.isDefaultPrevented()&&(// jsEvent not cancelled in handler
window.location.href=url)},
// returns list of foreground segs that were actually rendered
renderFgSegs:function(segs){// might filter away hidden events
return segs=this.renderFgSegEls(segs),segs.length?this.renderSegList(segs):this.renderEmptyMessage(),segs},renderEmptyMessage:function(){this.el.html('<div class="fc-list-empty-wrap2"><div class="fc-list-empty-wrap1"><div class="fc-list-empty">'+htmlEscape(this.view.opt("noEventsMessage"))+"</div></div></div>")},
// render the event segments in the view
renderSegList:function(allSegs){var dayIndex,daySegs,i,segsByDay=this.groupSegsByDay(allSegs),tableEl=$('<table class="fc-list-table"><tbody/></table>'),tbodyEl=tableEl.find("tbody");for(dayIndex=0;dayIndex<segsByDay.length;dayIndex++)if(daySegs=segsByDay[dayIndex])for(// sparse array, so might be undefined
// append a day header
tbodyEl.append(this.dayHeaderHtml(this.view.renderRange.start.clone().add(dayIndex,"days"))),this.sortEventSegs(daySegs),i=0;i<daySegs.length;i++)tbodyEl.append(daySegs[i].el);this.el.empty().append(tableEl)},
// Returns a sparse array of arrays, segs grouped by their dayIndex
groupSegsByDay:function(segs){var i,seg,segsByDay=[];for(i=0;i<segs.length;i++)seg=segs[i],(segsByDay[seg.dayIndex]||(segsByDay[seg.dayIndex]=[])).push(seg);return segsByDay},
// generates the HTML for the day headers that live amongst the event rows
dayHeaderHtml:function(dayDate){var view=this.view,mainFormat=view.opt("listDayFormat"),altFormat=view.opt("listDayAltFormat");return'<tr class="fc-list-heading" data-date="'+dayDate.format("YYYY-MM-DD")+'"><td class="'+view.widgetHeaderClass+'" colspan="3">'+(mainFormat?view.buildGotoAnchorHtml(dayDate,{class:"fc-list-heading-main"},htmlEscape(dayDate.format(mainFormat))):"")+(altFormat?view.buildGotoAnchorHtml(dayDate,{class:"fc-list-heading-alt"},htmlEscape(dayDate.format(altFormat))):"")+"</td></tr>"},
// generates the HTML for a single event row
fgSegHtml:function(seg){var timeHtml,view=this.view,classes=["fc-list-item"].concat(this.getSegCustomClasses(seg)),bgColor=this.getSegBackgroundColor(seg),event=seg.event,url=event.url;// if the event appears to span more than one day
return timeHtml=event.allDay?view.getAllDayHtml():view.isMultiDayEvent(event)?seg.isStart||seg.isEnd?htmlEscape(this.getEventTimeText(seg)):view.getAllDayHtml():htmlEscape(this.getEventTimeText(event)),url&&classes.push("fc-has-url"),'<tr class="'+classes.join(" ")+'">'+(this.displayEventTime?'<td class="fc-list-item-time '+view.widgetContentClass+'">'+(timeHtml||"")+"</td>":"")+'<td class="fc-list-item-marker '+view.widgetContentClass+'"><span class="fc-event-dot"'+(bgColor?' style="background-color:'+bgColor+'"':"")+'></span></td><td class="fc-list-item-title '+view.widgetContentClass+'"><a'+(url?' href="'+htmlEscape(url)+'"':"")+">"+htmlEscape(seg.event.title||"")+"</a></td></tr>"}});return fcViews.list={class:ListView,buttonTextKey:"list",// what to lookup in locale files
defaults:{buttonText:"list",// text to display for English
listDayFormat:"LL",// like "January 1, 2016"
noEventsMessage:"No events to display"}},fcViews.listDay={type:"list",duration:{days:1},defaults:{listDayFormat:"dddd"}},fcViews.listWeek={type:"list",duration:{weeks:1},defaults:{listDayFormat:"dddd",// day-of-week is more important
listDayAltFormat:"LL"}},fcViews.listMonth={type:"list",duration:{month:1},defaults:{listDayAltFormat:"dddd"}},fcViews.listYear={type:"list",duration:{year:1},defaults:{listDayAltFormat:"dddd"}},FC}),
// Init - Equal Heights Plugin
$("#calendar").fullCalendar({}),/*!
	* gMapHelper Advanced v2.6
	* Dual licensed under the MIT and GPL licenses:
	* http://www.opensource.org/licenses/mit-license.php
	* http://www.gnu.org/licenses/gpl.html
**/
function($){$.fn.gMapHelper=function(options){
// If no Map don't start
if(!($(this).length<1)){
// Variables
var geocoder,myMapType,map,marker,infowindow,mapEl=$(this)[0],//returns a HTML DOM Object (instead of jQuery Object)
directionsService=new google.maps.DirectionsService,directionsDisplay=new google.maps.DirectionsRenderer,defaults={icon:"",scrollwheel:!1,zoom:14,address:!1,mapType:"roadmap",styles:!1,addressInfoWindow:""},settings=$.extend({},defaults,options),plugin={
// Geocoder (convert SINGLE address into Lat/Lng)
myGeocoder:function(){
//var coordinates = new google.maps.LatLng(41.895648, -87.676000);
// new Geocoder Object
geocoder=new google.maps.Geocoder,geocoder.geocode({address:settings.address},function(results,status){status==google.maps.GeocoderStatus.OK?(settings.address=results[0].geometry.location,
// Start Build if address located
plugin.buildMap()):alert("Geocode was not successful for the following reason: "+status)})},
// Determine Map Type
mapType:function(){switch(settings.mapType){case"roadmap":myMapType=google.maps.MapTypeId.ROADMAP;break;case"satellite":myMapType=google.maps.MapTypeId.SATELLITE;break;case"hybrid":myMapType=google.maps.MapTypeId.HYBRID;break;case"terrain":myMapType=google.maps.MapTypeId.TERRAIN}return myMapType},
// Build Map with Settings (ONLY FOR A SINGLE ADDRESS)
buildMap:function(){
// Set Map Options
var map_options={center:settings.address,zoom:settings.zoom,scrollwheel:settings.scrollwheel,mapTypeId:plugin.mapType()};
// New Map Object.. w/ element and options
map=new google.maps.Map(mapEl,map_options),
// Info Window
infowindow=new google.maps.InfoWindow({content:"Loading..."}),
// New Marker Object
marker=new google.maps.Marker({position:settings.address,map:map,title:"Location Name",icon:settings.icon}),
// Click event for Marker, Info Window
google.maps.event.addListener(marker,"click",function(settings){return function(){infowindow.setContent(settings.addressInfoWindow),infowindow.open(map,this)}}(settings)),
// Display Directions on Map
directionsDisplay.setMap(map),
// Display Directions List
directionsDisplay.setPanel(document.getElementById("dir-panel")),
// Add Custom Styles
plugin.addStyles()},
// Build Map with Settings (ONLY FOR MULTIPLE LOCATIONS)
buildMapMulti:function(){var firstAddress=settings.address[0],map_options={center:new google.maps.LatLng(firstAddress.itemAddress[0],firstAddress.itemAddress[1]),// Lat, Lng of 1st Address
zoom:settings.zoom,scrollwheel:settings.scrollwheel,mapTypeId:plugin.mapType()},bounds=new google.maps.LatLngBounds;
// New Map Object.. w/ element and options
map=new google.maps.Map(mapEl,map_options),
// Info Window
infowindow=new google.maps.InfoWindow({content:"Loading..."});
// New Marker Object
var i;for(i=0;i<settings.address.length;i++){var myLocation=settings.address[i].itemAddress,myLatLng=new google.maps.LatLng(myLocation[0],myLocation[1]);marker=new google.maps.Marker({position:myLatLng,map:map,title:settings.address[i].itemName,icon:settings.icon}),
//extend the bounds to include each marker's position
bounds.extend(marker.position),
// Click event for Marker, Info Window
google.maps.event.addListener(marker,"click",function(settings,i){return function(){var curInfoWindow=settings.address[i].itemInfoWindow;infowindow.setContent(curInfoWindow),infowindow.open(map,this)}}(settings,i))}settings.address.length>1&&map.fitBounds(bounds),
// Add Custom Styles
plugin.addStyles()},
// Add Custom Styles
addStyles:function(){var myStyleOptions={name:"My Map"},myMapStyles=new google.maps.StyledMapType(settings.styles,myStyleOptions);map.mapTypes.set("mymap",myMapStyles),map.setMapTypeId("mymap")},
// Door-to-Door (Single Address Only)
calcRoute:function(){var start=document.getElementById("saddr").value,end=settings.address,request={origin:start,destination:end,travelMode:google.maps.TravelMode.DRIVING};directionsService.route(request,function(response,status){status==google.maps.DirectionsStatus.OK&&directionsDisplay.setDirections(response)}),
// Remove initial custom icon, rebuild
settings.icon=null,plugin.buildMap()},
// Start it all
init:function(){"string"==typeof settings.address?
// Address given as String
plugin.myGeocoder():"object"==typeof settings.address?
// Address given as String
plugin.buildMapMulti():
// Address not given (try to import JSON)
$.getJSON("gmap.json",function(data){var jsonAddress=data.address;settings.address=jsonAddress,plugin.buildMapMulti()}).fail(function(jqxhr,textStatus,error){alert("Please use a suitable address. Developers: check console for errors.");var err=textStatus+", "+error;console.log("JSON Fail. Request Failed: "+err)}),
// Call Door-to-Door
$("#get-dir").on("click",function(){plugin.calcRoute()})}};
// Initialize Plugin when everything is Loaded
$(document).ready(function(){plugin.init()})}}}(jQuery),$(function(){
// Google Map Init Area
!function(){
// Init - gMapHelper (single)
$("#gmap-single").gMapHelper({address:"1100 Hector Street, Conshohocken, PA 19403",// plain text address
//icon: gmapMarker(40, 40, 20), // custom marker (can remove for default)
scrollwheel:!1,// boolean. scroll to zoom or not
zoom:14,// 0 to 18
mapType:"roadmap",// options: "roadmap", "satellite", "hybrid", terrain
// Popup info when you click on marker
addressInfoWindow:'<div class="info-window"><h2>Visit Work</h2><p>1100 Hector Street</p><p>Conshohocken, PA 19428</p></div>',
// Can be left blank for default styles. Styles Pulled from... https://snazzymaps.com/style/134/light-dream
styles:[{featureType:"landscape",stylers:[{hue:"#FFBB00"},{saturation:43.400000000000006},{lightness:37.599999999999994},{gamma:1}]},{featureType:"road.highway",stylers:[{hue:"#FFC200"},{saturation:-61.8},{lightness:45.599999999999994},{gamma:1}]},{featureType:"road.arterial",stylers:[{hue:"#FF0300"},{saturation:-100},{lightness:51.19999999999999},{gamma:1}]},{featureType:"road.local",stylers:[{hue:"#FF0300"},{saturation:-100},{lightness:52},{gamma:1}]},{featureType:"water",stylers:[{hue:"#0078FF"},{saturation:-13.200000000000003},{lightness:2.4000000000000057},{gamma:1}]},{featureType:"poi",stylers:[{hue:"#00FF6A"},{saturation:-1.0989010989011234},{lightness:11.200000000000017},{gamma:1}]}]}),
// Init - gMapHelper (multiple)
$("#gmap-multiple").gMapHelper({
// address name, lat/lng, info window popup
address:[{itemName:"Work",itemAddress:[40.07521,-75.288226],itemInfoWindow:'<div class="info-window"><h2>Visit Work</h2><p>1100 Hector Street</p><p>Conshohocken, PA 19428</p></div>'},{itemName:"Home",itemAddress:[40.121177,-75.401576],itemInfoWindow:'<div class="info-window"><h2>Visit Home</h2></div>'},{itemName:"Home Home",itemAddress:[39.817583,-76.981294],itemInfoWindow:'<div class="info-window"><h2>Visit Home Home</h2></div>'}],
//icon: gmapMarker(40, 40, 20), // custom marker (can remove for default)
scrollwheel:!1,// boolean. scroll to zoom or not
zoom:14,// 0 to 18
mapType:"roadmap",// options: "roadmap", "satellite", "hybrid", terrain
// Can be left blank for default styles. Styles Pulled from... https://snazzymaps.com/style/134/light-dream
styles:[{featureType:"landscape",stylers:[{hue:"#FFBB00"},{saturation:43.400000000000006},{lightness:37.599999999999994},{gamma:1}]},{featureType:"road.highway",stylers:[{hue:"#FFC200"},{saturation:-61.8},{lightness:45.599999999999994},{gamma:1}]},{featureType:"road.arterial",stylers:[{hue:"#FF0300"},{saturation:-100},{lightness:51.19999999999999},{gamma:1}]},{featureType:"road.local",stylers:[{hue:"#FF0300"},{saturation:-100},{lightness:52},{gamma:1}]},{featureType:"water",stylers:[{hue:"#0078FF"},{saturation:-13.200000000000003},{lightness:2.4000000000000057},{gamma:1}]},{featureType:"poi",stylers:[{hue:"#00FF6A"},{saturation:-1.0989010989011234},{lightness:11.200000000000017},{gamma:1}]}]})}()}),/*!
	* Brando Burger v0.2
	* Dual licensed under the MIT and GPL licenses:
	* http://www.opensource.org/licenses/mit-license.php
	* http://www.gnu.org/licenses/gpl.html
**/
function($){$.fn.hamburger=function(options){
// allows for chaining
return this.each(function(){
// Variables
var scrollTopPos,$btn=$(this),$document=$(document),$dpdwn=$($btn.attr("data-toggle")),$navOverlay=$(".nav-overlay"),allowScrolling=!0,defaults={negativeSpace:0,// insert element to subtract its height from page height. e.g. ".header"
animation:"slideDown"},settings=$.extend({},defaults,options),plugin={};plugin.init=function(){plugin.animType(),plugin.navOverflow(),plugin.hamEvents()},
// Animation Type
plugin.animType=function(){switch(settings.animation){case"slideDown":$dpdwn.addClass("slide-down");break;case"sideSlide":$dpdwn.addClass("side-slide"),$dpdwn.outerHeight($(window).height());break;case"fadeIn":$dpdwn.addClass("fade-in")}},
// Nav Overflow
plugin.navOverflow=function(){
// solve fixed height overflow issue
var winH=$(window).height(),navH=0!=settings.negativeSpace?$(settings.negativeSpace).outerHeight():0,maxH=winH-navH;$dpdwn.css({"max-height":maxH})},
// nav Toggle
plugin.navToggle=function(){"slideDown"==settings.animation&&$dpdwn.slideToggle("fast"),"fadeIn"==settings.animation&&$dpdwn.fadeToggle("fast"),$btn.toggleClass("active"),$dpdwn.toggleClass("active")},
// Nav Show
plugin.navShow=function(){"slideDown"==settings.animation&&$dpdwn.slideDown("fast"),"fadeIn"==settings.animation&&$dpdwn.fadeIn("fast"),$btn.addClass("active"),$dpdwn.addClass("active")},
// Nav Hide
plugin.navHide=function(){"slideDown"==settings.animation&&$dpdwn.slideUp("fast"),"fadeIn"==settings.animation&&$dpdwn.fadeOut("fast"),$btn.removeClass("active"),$dpdwn.removeClass("active")},
// Events
plugin.hamEvents=function(){
// Button
$btn.on("click",function(e){e.preventDefault(),
// use $btn for open & close
plugin.navToggle(),$navOverlay.toggleClass("active"),allowScrolling=!allowScrolling,scrollTopPos=$(document).scrollTop()}),
// Close
$(".hamburger-close").on("click",function(e){e.preventDefault(),plugin.navHide(),$navOverlay.removeClass("active"),allowScrolling=!0}),
// No Scroll
$document.scroll(function(){!1===allowScrolling&&$document.scrollTop(scrollTopPos)})},
// START IT ALL
plugin.init(),
// PUBLIC METHODS
$.fn.hamburger.publicMethodName=function($newEl){plugin.methodName($newEl)}})}}(jQuery),$(function(){
// Init - Hamburger
$(".hamburger").hamburger({negativeSpace:0,// optional. e.g. ".header". insert element to subtract its height from page height. 
animation:"sideSlide"})}),/*!
	* hrzTicker v0.2
	* Dual licensed under the MIT and GPL licenses:
	* http://www.opensource.org/licenses/mit-license.php
	* http://www.gnu.org/licenses/gpl.html
**/
function($){$.fn.hrzTicker=function(options){
// allows for chaining
return this.each(function(){
// Elements
var reqMove,$wrap=$(this),$ul=$wrap.find("ul"),$li=$wrap.find("li"),wrapWidth=$wrap.outerWidth(),liLen=$li.length,liTotWidths=0,step=0,cssTrans=null,defaults={velocity:1.5},sett=$.extend({},defaults,options),plugin={};
// Move
plugin.move=function(){step<liTotWidths+wrapWidth?(step+=sett.velocity,cssTrans?
// CSS Transforms SUPPORTED
$ul.css({"-webkit-transform":"translateX("+(wrapWidth-step)+"px)","-ms-transform":"translateX("+(wrapWidth-step)+"px)",transform:"translateX("+(wrapWidth-step)+"px)"}):
// NOT SUPPORTED
$ul.css({left:wrapWidth-step}),plugin.moveTimer()):(
// after animation
step=0,plugin.posUl(),plugin.moveTimer())},
// Call Animation
plugin.moveTimer=function(){cancelAnimationFrame(reqMove),reqMove=requestAnimationFrame(function(){plugin.move()})},
// Position UL
plugin.posUl=function(){cssTrans?
// CSS Transforms SUPPORTED
$ul.css({"-webkit-transform":"translateX("+wrapWidth+"px)","-ms-transform":"translateX("+wrapWidth+"px)",transform:"translateX("+wrapWidth+"px)"}):
// NOT SUPPORTED
$ul.css({left:wrapWidth}),plugin.move()},
// Get Width
plugin.getTotalWidth=function(){$li.each(function(index){liTotWidths+=$(this).outerWidth(),liLen==index+1&&($ul.width(liTotWidths+20),$wrap.addClass("active"),plugin.posUl(),plugin.moveTimer())})},
// Check for CSS Transform Support
plugin.checkCssTrans=function(){for(var prefixes="transform WebkitTransform MozTransform OTransform msTransform".split(" "),div=document.createElement("div"),i=0;i<prefixes.length;i++)if(div&&void 0!==div.style[prefixes[i]])
// return prefixes[i];
return void(cssTrans=!0);
// return false;
cssTrans=!1},
// Events
plugin.initEvents=function(){$wrap.on("mouseenter",function(){cancelAnimationFrame(reqMove)}),$wrap.on("mouseleave",function(){plugin.moveTimer()})},
// Init
plugin.init=function(){plugin.checkCssTrans(),plugin.getTotalWidth(),plugin.initEvents()},
// START IT ALL
plugin.init()})}}(jQuery),// On load...
$(window).on("load",function(){
// Init - Horizontal Ticker
// IE9- needs requestAnimationFrame fallback
$(".hrz-ticker").hrzTicker({velocity:1.5})}),/*!
	* inView v0.4.2
	* Dual licensed under the MIT and GPL licenses:
	* http://www.opensource.org/licenses/mit-license.php
	* http://www.gnu.org/licenses/gpl.html
**/
function($){$.fn.inView=function(options){
// allows for chaining
return this.each(function(){
// Variables
var $el=$(this),$wrap=$el.closest(".inview"),wrapH=$wrap.outerHeight(),wrapDist=$wrap.offset().top,winH=$(window).outerHeight(),hrzDist=0,// horizontal (x) distance of element
vertDist=0,// vertical (y) distance of element
scrollDist=0,// distance scrolled
totalDist=0,// distance scrolled + half window height
distDiff=0,defaults={moveYN:!0,// whether to move element
bonusDist:winH/2,// Distance to wait other than scroll distance
hrzVelocity:1,// horizontal (x) speed
hrzProperty:null,// 'left' or 'right'
hrzNeg:!1,// subtract from position rather than add. -(distance)
hrzMax:null,// max el position (x)
vertVelocity:1,// vertical (y) speed
vertProperty:null,// 'top' or 'bottom'
vertNeg:!1,// subtract from position rather than add. -(distance)
vertMax:null,// max el position (y)
max:null},settings=$.extend({},defaults,options),plugin={};
// Set Position
plugin.setPos=function(xValue,yValue){switch(settings.hrzProperty){case"left":$el.css("left",xValue);break;case"right":$el.css("right",xValue)}switch(settings.vertProperty){case"top":$el.css("top",yValue);break;case"bottom":$el.css("bottom",yValue)}},
// Move
plugin.move=function(){
// Horizontal (x)
var hrzProduct=distDiff*settings.hrzVelocity;hrzProduct=settings.hrzNeg?-1*hrzProduct:hrzProduct;// make negative distance if true
var x=hrzDist+hrzProduct,vertProduct=distDiff*settings.vertVelocity;vertProduct=settings.vertNeg?-1*vertProduct:vertProduct;// make negative distance if true
var y=vertDist+vertProduct;
// Set Max y
// (when given)
settings.vertNeg||null===settings.vertMax?settings.vertNeg&&null!==settings.vertMax&&y<=settings.vertMax&&(y=settings.vertMax):
// adding distance
y>=settings.vertMax&&(y=settings.vertMax),
// Set Max x
// (when given)
settings.hrzNeg||null===settings.hrzMax?settings.hrzNeg&&null!==settings.hrzMax&&x<=settings.hrzMax&&(x=settings.hrzMax):
// adding distance
x>=settings.hrzMax&&(x=settings.hrzMax),
// Move to new x/y
plugin.setPos(x,y)},
// Check if in "specified" View for moving (parallax)
plugin.checkDist=function(){!0===settings.moveYN&&(
// Yes, move element
scrollDist=$(window).scrollTop()+1,// distance scrolled
totalDist=scrollDist+settings.bonusDist,// distance scrolled + half window height
totalDist>wrapDist?(
// in "specified" view
distDiff=totalDist-wrapDist,(null===settings.max||distDiff<settings.max)&&
// no max or under max
plugin.move()):
// reset back to start
plugin.setPos(hrzDist,vertDist))},
// Check if in Viewport
plugin.inViewport=function(){scrollDist=$(window).scrollTop()+1,// distance scrolled + window height
scrollDist+winH>wrapDist&&wrapDist+wrapH>scrollDist?
// inside viewport
$el.addClass("el-inview"):
// outside viewport
$el.removeClass("el-inview")},
// Distance of Element x/y
plugin.getElDist=function(){
// reset back to start
switch(settings.hrzProperty){case"left":
// get left position or zero it
hrzDist=parseInt($el.css("left"))||0;break;case"right":
// get right position or zero it
hrzDist=parseInt($el.css("right"))||0}switch(settings.vertProperty){case"top":
// get top position or zero it
vertDist=parseInt($el.css("top"))||0;break;case"bottom":
// get bottom position or zero it
vertDist=parseInt($el.css("bottom"))||0}plugin.checkDist(),// take css positioning and then factor in scroll position
$(window).on("scroll",function(){plugin.checkDist(),plugin.inViewport()})},
// Init
plugin.init=function(){plugin.getElDist(),plugin.inViewport()},
// START IT ALL
plugin.init()})}}(jQuery),$(function(){
// Init - inView
// $('.anim-el').inView({ moveYN: false });
// $('#welcome-line1').inView({ bonusDist: 0, vertVelocity: 0.7, vertProperty: 'bottom', vertMax:900 });
// $('#welcome-line2').inView({ bonusDist: 0, vertVelocity: 0.7, vertProperty: 'top', vertMax:900 });
// $('#personal-plane').inView({ hrzVelocity: 1.5, hrzProperty: 'left' });
// $('#specialty-tractor').inView({ hrzVelocity: 0.1, hrzProperty: 'right' });
// $('#healthcare-ambulance').inView({ hrzVelocity: 0.7, hrzProperty: 'left', hrzMax:320 });
$("#move-item1").inView({hrzVelocity:1,hrzProperty:"right",vertVelocity:1,vertProperty:"top",vertNeg:!1,
// bonusDist: 100,
vertMax:420}),$("#move-item2").inView({hrzVelocity:.5,hrzProperty:"right",vertVelocity:.7,vertProperty:"top",vertNeg:!1,
// bonusDist: 100,
vertMax:420}),$("#move-item3").inView({hrzVelocity:.2,hrzProperty:"left",vertVelocity:.6,vertProperty:"top",vertNeg:!1,
// bonusDist: 0,
vertMax:420}),$("#move-item4").inView({hrzVelocity:.5,hrzProperty:"left",vertVelocity:.7,vertProperty:"top",vertNeg:!1,
// bonusDist: 0,
vertMax:420})}),$(function(){}),/*!
	* Label Hint v1.4
*/
function($){$.fn.labelHint=function(options){var $fieldWrap=$(this),theInput=$fieldWrap.find("input"),theTextarea=$fieldWrap.find("textarea"),theSelect=$fieldWrap.find("select"),changeState=function(){var label=$(this).closest($fieldWrap).find("label");""!==this.value?label.addClass("show"):label.removeClass("show")};
// Setup "checkval" Event (same events to trigger on input/text area, different set of events for select drop-downs).
theInput.add(theTextarea).bind("checkval",changeState),theSelect.bind("checkval",changeState),
// Input/Textarea Triggers
theInput.add(theTextarea).on("keyup",function(){$(this).trigger("checkval")}).on("focus",function(){$(this).closest($fieldWrap).find("label").addClass("on")}).on("blur",function(){$(this).closest($fieldWrap).find("label").removeClass("on")}).trigger("checkval"),
// Check State on value change
theInput.add(theTextarea).on("change",changeState),
// Select Triggers
theSelect.on("change",changeState).trigger("checkval")}}(jQuery),$(function(){/* Lazy Load XT */
$.extend($.lazyLoadXT,{autoinit:!1,oninit:{},onshow:{addClass:"lazy-loaded"}})});var lazyLoadXTHelper=function(init){function LazyLoadXTConstructor(args){function scrollTrigger(){clearTimeout(scrollTimer),scrollTimer=setTimeout(function(){$(window).scrollTop()+$(window).height()+200>args.lazy_wrapper.offset().top+args.lazy_wrapper.outerHeight()&&process_data()},150)}function jsonResultData(){this._data=void 0}function resetOutput(){args.lazy_wrapper.empty(),currentItem=0,currentJson.data.length<1?args.lazy_wrapper.html(args.no_items_message):currentJson.data.length>currentItem&&process_data()}function updateJson(tags){var ajax_request=args.ajax_service+"?"+(tags||args.default_tags);
// console.log(ajax_request);
$.ajax({url:ajax_request,type:"GET",dataType:"json",data:{format:"json"},error:function(event,jqxhr,settings,thrownError){console.log("ajax error:"),console.log(event,jqxhr,settings,thrownError)},success:function(data){
// console.log('ajax success:');
// console.log(data);
currentJson.data=data[Object.keys(data)[0]]}})}function process_data(){var feedOutput=$("<div>");if(currentJson.data.length>currentItem){for(var i=0;i<args.add_items_count&&!(currentJson.data.length<currentItem);i++)feedOutput.append(args.format_data(currentJson.data[i])),currentItem+=1;args.lazy_wrapper.append(feedOutput.children()),args.lazy_wrapper.find(".lazy:not(.lazy-loaded), img[data-src]:not(.lazy-loaded)").lazyLoadXT(),scrollTrigger()}}var scrollTimer;$(window).on("scroll",function(){scrollTrigger()}),Object.defineProperty(jsonResultData.prototype,"data",{set:function(val){this._data=val,resetOutput()},get:function(){return this._data}});var currentJson=new jsonResultData,currentItem=0;updateJson(),args.filter_inputs.change(function(){var tags="";args.filter_inputs.each(function(){tags+=$(this).val()+"&"}),tags=tags.substr(0,tags.length-1),updateJson(tags)})}return new LazyLoadXTConstructor(init)};/*!
	* YT API EMBED v0.1
	* Author: Doug Cross for AYC Media
	* Dual licensed under the MIT and GPL licenses:
	* http://www.opensource.org/licenses/mit-license.php
	* http://www.gnu.org/licenses/gpl.html
**/
/* Pull in Youtube API Script*/
if(/* Lazy Load XT 1.1.0 | MIT License */
function(a,b,c,d){function e(a,b){return a[b]===d?t[b]:a[b]}function f(){var a=b.pageYOffset;return a===d?r.scrollTop:a}function g(a,b){var c=t["on"+a];c&&(w(c)?c.call(b[0]):(c.addClass&&b.addClass(c.addClass),c.removeClass&&b.removeClass(c.removeClass))),b.trigger("lazy"+a,[b]),k()}function h(b){g(b.type,a(this).off(p,h))}function i(c){if(z.length){c=c||t.forceLoad,A=1/0;var d,e,i=f(),j=b.innerHeight||r.clientHeight,k=b.innerWidth||r.clientWidth;for(d=0,e=z.length;e>d;d++){var l,m=z[d],q=m[0],s=m[n],u=!1,v=c||y(q,o)<0;if(a.contains(r,q)){if(c||!s.visibleOnly||q.offsetWidth||q.offsetHeight){if(!v){var x=q.getBoundingClientRect(),B=s.edgeX,C=s.edgeY;l=x.top+i-C-j,v=i>=l&&x.bottom>-C&&x.left<=k+B&&x.right>-B}if(v){m.on(p,h),g("show",m);var D=s.srcAttr,E=w(D)?D(m):q.getAttribute(D);E&&(q.src=E),u=!0}else A>l&&(A=l)}}else u=!0;u&&(y(q,o,0),z.splice(d--,1),e--)}e||g("complete",a(r))}}function j(){B>1?(B=1,i(),setTimeout(j,t.throttle)):B=0}function k(a){z.length&&(a&&"scroll"===a.type&&a.currentTarget===b&&A>=f()||(B||setTimeout(j,0),B=2))}function l(){v.lazyLoadXT()}function m(){i(!0)}var n="lazyLoadXT",o="lazied",p="load error",q="lazy-hidden",r=c.documentElement||c.body,s=b.onscroll===d||!!b.operamini||!r.getBoundingClientRect,t={autoInit:!0,selector:"img[data-src]",blankImage:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",throttle:99,forceLoad:s,loadEvent:"pageshow",updateEvent:"load orientationchange resize scroll touchmove focus",forceEvent:"lazyloadall",oninit:{removeClass:"lazy"},onshow:{addClass:q},onload:{removeClass:q,addClass:"lazy-loaded"},onerror:{removeClass:q},checkDuplicates:!0},u={srcAttr:"data-src",edgeX:0,edgeY:0,visibleOnly:!0},v=a(b),w=a.isFunction,x=a.extend,y=a.data||function(b,c){return a(b).data(c)},z=[],A=0,B=0;a[n]=x(t,u,a[n]),a.fn[n]=function(c){c=c||{};var d,f=e(c,"blankImage"),h=e(c,"checkDuplicates"),i=e(c,"scrollContainer"),j=e(c,"show"),l={};a(i).on("scroll",k);for(d in u)l[d]=e(c,d);return this.each(function(d,e){if(e===b)a(t.selector).lazyLoadXT(c);else{var i=h&&y(e,o),m=a(e).data(o,j?-1:1);if(i)return void k();f&&"IMG"===e.tagName&&!e.src&&(e.src=f),m[n]=x({},l),g("init",m),z.push(m),k()}})},a(c).ready(function(){g("start",v),v.on(t.updateEvent,k).on(t.forceEvent,m),a(c).on(t.updateEvent,k),t.autoInit&&(v.on(t.loadEvent,l),l())})}(window.jQuery||window.Zepto||window.$,window,document),$(function(){lazyLoadXTHelper({lazy_wrapper:$(".lazyload-wrapper1"),filter_inputs:$("#form_year, #form_month"),ajax_service:"plugins/lazyLoadXT/test.json",default_tags:"form_year=clear&form_month=clear",add_items_count:9,no_items_message:'<p class="no-items">No items to display.</p>',format_data:function(data){return'<div class="lazy col1-3 col btm-margin-lg"><article class="example-box"><p class="black">By <strong class="blue">'+data.author+'</strong></p><h2 class="hdr3 btm-margin"><a class="drk-blue" href="'+data.link+'" title="Learn More" target="_blank">'+data.title+'</a></h2><a href="'+data.link+'" title="Learn More" target="_blank"><img class="fluid-img btm-margin" data-src="'+data.image+'" alt="'+data.image_alt+'" /></a><p class="black btm-margin-sm">'+data.date+'</p><div class="entry-content font2">'+data.description+"</div></article></div>"}}),lazyLoadXTHelper({lazy_wrapper:$(".lazyload-wrapper2"),filter_inputs:$("#form_year, #form_month"),ajax_service:"plugins/lazyLoadXT/test.json",default_tags:"form_year=clear&form_month=clear",add_items_count:3,no_items_message:'<p class="no-items">No items to display.</p>',format_data:function(data){return'<div class="lazy col1-3 col btm-margin-lg"><article class="example-box"><p class="black">By <strong class="blue">'+data.author+'</strong></p><h2 class="hdr3 btm-margin"><a class="drk-blue" href="'+data.link+'" title="Learn More" target="_blank">'+data.title+'</a></h2><a href="'+data.link+'" title="Learn More" target="_blank"><img class="fluid-img btm-margin" data-src="'+data.image+'" alt="'+data.image_alt+'" /></a><p class="black btm-margin-sm">'+data.date+'</p><div class="entry-content font2">'+data.description+"</div></article></div>"}})}),function(factory){// eslint-disable-line no-extra-semi
"use strict";"function"==typeof define&&define.amd?
// AMD
define(["jquery"],factory):"undefined"!=typeof module&&module.exports?
// CommonJS
module.exports=factory(require("jquery")):
// Global
factory(jQuery)}(function($){/*
    *  internal 
    */
var _previousResizeWidth=-1,_updateTimeout=-1,_parse=function(value){
// parse value and convert NaN to 0
return parseFloat(value)||0},_rows=function(elements){var $elements=$(elements),lastTop=null,rows=[];
// group elements by their top position
return $elements.each(function(){var $that=$(this),top=$that.offset().top-_parse($that.css("margin-top")),lastRow=rows.length>0?rows[rows.length-1]:null;null===lastRow?
// first item on the row, so just push it
rows.push($that):
// if the row top is the same, add to the row group
Math.floor(Math.abs(lastTop-top))<=1?rows[rows.length-1]=lastRow.add($that):
// otherwise start a new row group
rows.push($that),
// keep track of the last row top
lastTop=top}),rows},_parseOptions=function(options){var opts={byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof options?$.extend(opts,options):("boolean"==typeof options?opts.byRow=options:"remove"===options&&(opts.remove=!0),opts)},matchHeight=$.fn.matchHeight=function(options){var opts=_parseOptions(options);
// handle remove
if(opts.remove){var that=this;
// TODO: cleanup empty groups
// remove fixed height from all selected elements
// remove selected elements from all groups
return this.css(opts.property,""),$.each(matchHeight._groups,function(key,group){group.elements=group.elements.not(that)}),this}
// keep track of this group so we can re-apply later on load and resize events
// match each element's height to the tallest element in the selection
return this.length<=1&&!opts.target?this:(matchHeight._groups.push({elements:this,options:opts}),matchHeight._apply(this,opts),this)};/*
    *  plugin global options
    */
matchHeight.version="master",matchHeight._groups=[],matchHeight._throttle=80,matchHeight._maintainScroll=!1,matchHeight._beforeUpdate=null,matchHeight._afterUpdate=null,matchHeight._rows=_rows,matchHeight._parse=_parse,matchHeight._parseOptions=_parseOptions,/*
    *  matchHeight._apply
    *  apply matchHeight to given elements
    */
matchHeight._apply=function(elements,options){var opts=_parseOptions(options),$elements=$(elements),rows=[$elements],scrollTop=$(window).scrollTop(),htmlHeight=$("html").outerHeight(!0),$hiddenParents=$elements.parents().filter(":hidden");
// cache the original inline style
// temporarily must force hidden parents visible
// get rows if using byRow, otherwise assume one row
// must first force an arbitrary equal height so floating elements break evenly
// get the array of rows (based on element top position)
// revert original inline styles
// revert hidden parents
// restore scroll position if enabled
return $hiddenParents.each(function(){var $that=$(this);$that.data("style-cache",$that.attr("style"))}),$hiddenParents.css("display","block"),opts.byRow&&!opts.target&&($elements.each(function(){var $that=$(this),display=$that.css("display");
// temporarily force a usable display value
"inline-block"!==display&&"flex"!==display&&"inline-flex"!==display&&(display="block"),
// cache the original inline style
$that.data("style-cache",$that.attr("style")),$that.css({display:display,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),rows=_rows($elements),$elements.each(function(){var $that=$(this);$that.attr("style",$that.data("style-cache")||"")})),$.each(rows,function(key,row){var $row=$(row),targetHeight=0;if(opts.target)
// if target set, use the height of the target element
targetHeight=opts.target.outerHeight(!1);else{
// skip apply to rows with only one item
if(opts.byRow&&$row.length<=1)return void $row.css(opts.property,"");
// iterate the row and find the max height
$row.each(function(){var $that=$(this),display=$that.css("display");
// temporarily force a usable display value
"inline-block"!==display&&"flex"!==display&&"inline-flex"!==display&&(display="block");
// ensure we get the correct actual height (and not a previously set height value)
var css={display:display};css[opts.property]="",$that.css(css),
// find the max height (including padding, but not margin)
$that.outerHeight(!1)>targetHeight&&(targetHeight=$that.outerHeight(!1)),
// revert display block
$that.css("display","")})}
// iterate the row and apply the height to all elements
$row.each(function(){var $that=$(this),verticalPadding=0;
// don't apply to a target
opts.target&&$that.is(opts.target)||(
// handle padding and border correctly (required when not using border-box)
"border-box"!==$that.css("box-sizing")&&(verticalPadding+=_parse($that.css("border-top-width"))+_parse($that.css("border-bottom-width")),verticalPadding+=_parse($that.css("padding-top"))+_parse($that.css("padding-bottom"))),
// set the height (accounting for padding and border)
$that.css(opts.property,targetHeight-verticalPadding+"px"))})}),$hiddenParents.each(function(){var $that=$(this);$that.attr("style",$that.data("style-cache")||null)}),matchHeight._maintainScroll&&$(window).scrollTop(scrollTop/htmlHeight*$("html").outerHeight(!0)),this},/*
    *  matchHeight._applyDataApi
    *  applies matchHeight to all elements with a data-match-height attribute
    */
matchHeight._applyDataApi=function(){var groups={};
// generate groups by their groupId set by elements using data-match-height
$("[data-match-height], [data-mh]").each(function(){var $this=$(this),groupId=$this.attr("data-mh")||$this.attr("data-match-height");groups[groupId]=groupId in groups?groups[groupId].add($this):$this}),
// apply matchHeight to each group
$.each(groups,function(){this.matchHeight(!0)})};/*
    *  matchHeight._update
    *  updates matchHeight on all current groups with their correct options
    */
var _update=function(event){matchHeight._beforeUpdate&&matchHeight._beforeUpdate(event,matchHeight._groups),$.each(matchHeight._groups,function(){matchHeight._apply(this.elements,this.options)}),matchHeight._afterUpdate&&matchHeight._afterUpdate(event,matchHeight._groups)};matchHeight._update=function(throttle,event){
// prevent update if fired from a resize event
// where the viewport width hasn't actually changed
// fixes an event looping bug in IE8
if(event&&"resize"===event.type){var windowWidth=$(window).width();if(windowWidth===_previousResizeWidth)return;_previousResizeWidth=windowWidth}
// throttle updates
throttle?-1===_updateTimeout&&(_updateTimeout=setTimeout(function(){_update(event),_updateTimeout=-1},matchHeight._throttle)):_update(event)},/*
    *  bind events
    */
// apply on DOM ready event
$(matchHeight._applyDataApi),
// update heights on load and resize events
$(window).bind("load",function(event){matchHeight._update(!1,event)}),
// throttled update heights on resize events
$(window).bind("resize orientationchange",function(event){matchHeight._update(!0,event)})}),// Init - Equal Heights Plugin
$(".eqheight").matchHeight(),/*!
	* myTabs v1.1
	* Dual licensed under the MIT and GPL licenses:
	* http://www.opensource.org/licenses/mit-license.php
	* http://www.gnu.org/licenses/gpl.html
**/
function($){$.fn.myTabs=function(options){
// allows for chaining
return this.each(function(){
// Variables
var resizeTimer,toggleTxt,$wrap=$(this),$tabsNavToggle=$wrap.find(".tabs-nav-toggle"),$tabsNav=$wrap.find(".tabs-nav"),$tabsUl=$tabsNav.find("ul"),$tabsLi=$tabsNav.find("li"),$tabsLink=$tabsNav.find("a"),$tabsContent=$wrap.find(".tabs-content"),$tabSct=$wrap.find(".tab-sct"),tabSctLen=$tabSct.length,$tabsTrigger=$(".tab-trigger"),count=0,animating=!1,shown=!1,defaults={optionName:"value"},hash=($.extend({},defaults,options),window.location.hash),$hash=$(hash);""===hash||null===hash||void 0===hash?($tabsLi.eq(0).addClass("current"),$tabSct.eq(0).addClass("current")):// tab selected from previous page
$wrap.find(hash).hasClass("tab-sct")?($(".tabs-nav a[href='"+hash+"']").parent().addClass("current"),$hash.addClass("current"),$("html, body").animate({scrollTop:$tabsNav.offset().top-20})):($tabsLi.eq(0).addClass("current"),$tabSct.eq(0).addClass("current"));var $curSct=$(".tab-sct.current"),plugin={
// Show Current
showCurrent:function(){toggleTxt=$tabsNav.find(".current").text(),plugin.updateToggleTxt(),$tabSct.hide(),$curSct.css("display","block"),setTimeout(function(){$tabsContent.animate({height:$curSct.data("height")+"px"},"slow")},300),shown=!0},
// Resize Heights
resizeHeights:function(){$tabsContent.css({height:$wrap.find(".tab-sct.current").data("height")+"px"})},
// Cache Heights
cacheHeights:function(){$wrap.find(".tab-sct").each(function(){count++;var $this=$(this);$this.css("height","");// calibrate height for resize
var setH=$this.outerHeight();$this.data("height",setH),
// All items cached
count===tabSctLen&&(shown?plugin.resizeHeights():plugin.showCurrent())})},
// Tab Link Click
tabClick:function(){$tabsLink.on("click",function(e){if(e.preventDefault(),!$(this).parent().hasClass("current")&&!1===animating){animating=!0;var $this=$(this),$newLi=$this.parent(),tabId=$this.attr("href"),$tabId=$(tabId);$tabsLink.parent().removeClass("current"),$wrap.find(".tab-sct.current").fadeOut("fast",function(){$tabId.fadeIn("fast",function(){$tabsContent.animate({height:$tabId.data("height")+"px"},function(){$tabSct.removeClass("current"),$tabId.addClass("current"),animating=!1})})}),$newLi.addClass("current"),
// Update Nav Toggle Text
toggleTxt=$this.text(),plugin.updateToggleTxt(),
// if nav toggle showing, slide up (mobile)
$tabsNavToggle.hasClass("active")&&($tabsNavToggle.toggleClass("active"),$tabsUl.slideUp("fast"))}})},
// Tab Trigger
tabTrigger:function(){$tabsTrigger.on("click",function(e){e.preventDefault();var $this=$(this),tabId=$this.attr("href"),tabArray=tabId.split("#"),tabHash="#"+tabArray[1];
// Jump Link Animation
$("html, body").animate({scrollTop:$tabsNav.offset().top-20},function(){$(".tabs-nav a[href='"+tabHash+"']").trigger("click"),window.location.hash=tabHash})})},
// Tabs Nav Toggle
navToggle:function(){$tabsNavToggle.on("click",function(e){e.preventDefault(),$tabsNavToggle.hasClass("active")?$tabsUl.slideUp("fast"):$tabsUl.slideDown("fast"),$tabsNavToggle.toggleClass("active")})},
// Tabs Nav Toggle
updateToggleTxt:function(){$tabsNavToggle.text(toggleTxt)},
// Plugin functions to initialize
init:function(){plugin.tabClick(),plugin.navToggle(),$(".tabs-area").length>0&&plugin.tabTrigger(),
// Components Loaded.. cache heights
plugin.cacheHeights(),
// Window Resize: adjust/show heights
$(window).resize(function(){clearTimeout(resizeTimer),count=0,resizeTimer=setTimeout(plugin.cacheHeights,200)})}};
// START IT ALL
plugin.init()})}}(jQuery),// Init - Tabs
$(window).on("load",function(){$("#tabs1").myTabs()}),function(global,factory){"object"==typeof exports&&"undefined"!=typeof module?module.exports=factory():"function"==typeof define&&define.amd?define(factory):global.moment=factory()}(this,function(){"use strict";function hooks(){return hookCallback.apply(null,arguments)}function isArray(input){return input instanceof Array||"[object Array]"===Object.prototype.toString.call(input)}function isObject(input){
// IE8 will treat undefined and null as object if it wasn't for
// input != null
return null!=input&&"[object Object]"===Object.prototype.toString.call(input)}function isObjectEmpty(obj){var k;for(k in obj)
// even if its not own property I'd still call it non-empty
return!1;return!0}function isUndefined(input){return void 0===input}function isNumber(input){return"number"==typeof input||"[object Number]"===Object.prototype.toString.call(input)}function isDate(input){return input instanceof Date||"[object Date]"===Object.prototype.toString.call(input)}function map(arr,fn){var i,res=[];for(i=0;i<arr.length;++i)res.push(fn(arr[i],i));return res}function hasOwnProp(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function extend(a,b){for(var i in b)hasOwnProp(b,i)&&(a[i]=b[i]);return hasOwnProp(b,"toString")&&(a.toString=b.toString),hasOwnProp(b,"valueOf")&&(a.valueOf=b.valueOf),a}function createUTC(input,format,locale,strict){return createLocalOrUTC(input,format,locale,strict,!0).utc()}function defaultParsingFlags(){
// We need to deep clone this object.
return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function getParsingFlags(m){return null==m._pf&&(m._pf=defaultParsingFlags()),m._pf}function isValid(m){if(null==m._isValid){var flags=getParsingFlags(m),parsedParts=some$1.call(flags.parsedDateParts,function(i){return null!=i}),isNowValid=!isNaN(m._d.getTime())&&flags.overflow<0&&!flags.empty&&!flags.invalidMonth&&!flags.invalidWeekday&&!flags.nullInput&&!flags.invalidFormat&&!flags.userInvalidated&&(!flags.meridiem||flags.meridiem&&parsedParts);if(m._strict&&(isNowValid=isNowValid&&0===flags.charsLeftOver&&0===flags.unusedTokens.length&&void 0===flags.bigHour),null!=Object.isFrozen&&Object.isFrozen(m))return isNowValid;m._isValid=isNowValid}return m._isValid}function createInvalid(flags){var m=createUTC(NaN);return null!=flags?extend(getParsingFlags(m),flags):getParsingFlags(m).userInvalidated=!0,m}function copyConfig(to,from){var i,prop,val;if(isUndefined(from._isAMomentObject)||(to._isAMomentObject=from._isAMomentObject),isUndefined(from._i)||(to._i=from._i),isUndefined(from._f)||(to._f=from._f),isUndefined(from._l)||(to._l=from._l),isUndefined(from._strict)||(to._strict=from._strict),isUndefined(from._tzm)||(to._tzm=from._tzm),isUndefined(from._isUTC)||(to._isUTC=from._isUTC),isUndefined(from._offset)||(to._offset=from._offset),isUndefined(from._pf)||(to._pf=getParsingFlags(from)),isUndefined(from._locale)||(to._locale=from._locale),momentProperties.length>0)for(i=0;i<momentProperties.length;i++)prop=momentProperties[i],val=from[prop],isUndefined(val)||(to[prop]=val);return to}
// Moment prototype object
function Moment(config){copyConfig(this,config),this._d=new Date(null!=config._d?config._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),
// Prevent infinite loop in case updateOffset creates new moment
// objects.
!1===updateInProgress&&(updateInProgress=!0,hooks.updateOffset(this),updateInProgress=!1)}function isMoment(obj){return obj instanceof Moment||null!=obj&&null!=obj._isAMomentObject}function absFloor(number){return number<0?Math.ceil(number)||0:Math.floor(number)}function toInt(argumentForCoercion){var coercedNumber=+argumentForCoercion,value=0;return 0!==coercedNumber&&isFinite(coercedNumber)&&(value=absFloor(coercedNumber)),value}
// compare two arrays, return the number of differences
function compareArrays(array1,array2,dontConvert){var i,len=Math.min(array1.length,array2.length),lengthDiff=Math.abs(array1.length-array2.length),diffs=0;for(i=0;i<len;i++)(dontConvert&&array1[i]!==array2[i]||!dontConvert&&toInt(array1[i])!==toInt(array2[i]))&&diffs++;return diffs+lengthDiff}function warn(msg){!1===hooks.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+msg)}function deprecate(msg,fn){var firstTime=!0;return extend(function(){if(null!=hooks.deprecationHandler&&hooks.deprecationHandler(null,msg),firstTime){for(var arg,args=[],i=0;i<arguments.length;i++){if(arg="","object"==typeof arguments[i]){arg+="\n["+i+"] ";for(var key in arguments[0])arg+=key+": "+arguments[0][key]+", ";arg=arg.slice(0,-2)}else arg=arguments[i];args.push(arg)}warn(msg+"\nArguments: "+Array.prototype.slice.call(args).join("")+"\n"+(new Error).stack),firstTime=!1}return fn.apply(this,arguments)},fn)}function deprecateSimple(name,msg){null!=hooks.deprecationHandler&&hooks.deprecationHandler(name,msg),deprecations[name]||(warn(msg),deprecations[name]=!0)}function isFunction(input){return input instanceof Function||"[object Function]"===Object.prototype.toString.call(input)}function set(config){var prop,i;for(i in config)prop=config[i],isFunction(prop)?this[i]=prop:this["_"+i]=prop;this._config=config,
// Lenient ordinal parsing accepts just a number in addition to
// number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
// TODO: Remove "ordinalParse" fallback in next major release.
this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function mergeConfigs(parentConfig,childConfig){var prop,res=extend({},parentConfig);for(prop in childConfig)hasOwnProp(childConfig,prop)&&(isObject(parentConfig[prop])&&isObject(childConfig[prop])?(res[prop]={},extend(res[prop],parentConfig[prop]),extend(res[prop],childConfig[prop])):null!=childConfig[prop]?res[prop]=childConfig[prop]:delete res[prop]);for(prop in parentConfig)hasOwnProp(parentConfig,prop)&&!hasOwnProp(childConfig,prop)&&isObject(parentConfig[prop])&&(
// make sure changes to properties don't modify parent config
res[prop]=extend({},res[prop]));return res}function Locale(config){null!=config&&this.set(config)}function calendar(key,mom,now){var output=this._calendar[key]||this._calendar.sameElse;return isFunction(output)?output.call(mom,now):output}function longDateFormat(key){var format=this._longDateFormat[key],formatUpper=this._longDateFormat[key.toUpperCase()];return format||!formatUpper?format:(this._longDateFormat[key]=formatUpper.replace(/MMMM|MM|DD|dddd/g,function(val){return val.slice(1)}),this._longDateFormat[key])}function invalidDate(){return this._invalidDate}function ordinal(number){return this._ordinal.replace("%d",number)}function relativeTime(number,withoutSuffix,string,isFuture){var output=this._relativeTime[string];return isFunction(output)?output(number,withoutSuffix,string,isFuture):output.replace(/%d/i,number)}function pastFuture(diff,output){var format=this._relativeTime[diff>0?"future":"past"];return isFunction(format)?format(output):format.replace(/%s/i,output)}function addUnitAlias(unit,shorthand){var lowerCase=unit.toLowerCase();aliases[lowerCase]=aliases[lowerCase+"s"]=aliases[shorthand]=unit}function normalizeUnits(units){return"string"==typeof units?aliases[units]||aliases[units.toLowerCase()]:void 0}function normalizeObjectUnits(inputObject){var normalizedProp,prop,normalizedInput={};for(prop in inputObject)hasOwnProp(inputObject,prop)&&(normalizedProp=normalizeUnits(prop))&&(normalizedInput[normalizedProp]=inputObject[prop]);return normalizedInput}function addUnitPriority(unit,priority){priorities[unit]=priority}function getPrioritizedUnits(unitsObj){var units=[];for(var u in unitsObj)units.push({unit:u,priority:priorities[u]});return units.sort(function(a,b){return a.priority-b.priority}),units}function makeGetSet(unit,keepTime){return function(value){return null!=value?(set$1(this,unit,value),hooks.updateOffset(this,keepTime),this):get(this,unit)}}function get(mom,unit){return mom.isValid()?mom._d["get"+(mom._isUTC?"UTC":"")+unit]():NaN}function set$1(mom,unit,value){mom.isValid()&&mom._d["set"+(mom._isUTC?"UTC":"")+unit](value)}
// MOMENTS
function stringGet(units){return units=normalizeUnits(units),isFunction(this[units])?this[units]():this}function stringSet(units,value){if("object"==typeof units){units=normalizeObjectUnits(units);for(var prioritized=getPrioritizedUnits(units),i=0;i<prioritized.length;i++)this[prioritized[i].unit](units[prioritized[i].unit])}else if(units=normalizeUnits(units),isFunction(this[units]))return this[units](value);return this}function zeroFill(number,targetLength,forceSign){var absNumber=""+Math.abs(number),zerosToFill=targetLength-absNumber.length;return(number>=0?forceSign?"+":"":"-")+Math.pow(10,Math.max(0,zerosToFill)).toString().substr(1)+absNumber}
// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken(token,padded,ordinal,callback){var func=callback;"string"==typeof callback&&(func=function(){return this[callback]()}),token&&(formatTokenFunctions[token]=func),padded&&(formatTokenFunctions[padded[0]]=function(){return zeroFill(func.apply(this,arguments),padded[1],padded[2])}),ordinal&&(formatTokenFunctions[ordinal]=function(){return this.localeData().ordinal(func.apply(this,arguments),token)})}function removeFormattingTokens(input){return input.match(/\[[\s\S]/)?input.replace(/^\[|\]$/g,""):input.replace(/\\/g,"")}function makeFormatFunction(format){var i,length,array=format.match(formattingTokens);for(i=0,length=array.length;i<length;i++)formatTokenFunctions[array[i]]?array[i]=formatTokenFunctions[array[i]]:array[i]=removeFormattingTokens(array[i]);return function(mom){var i,output="";for(i=0;i<length;i++)output+=isFunction(array[i])?array[i].call(mom,format):array[i];return output}}
// format date using native date object
function formatMoment(m,format){return m.isValid()?(format=expandFormat(format,m.localeData()),formatFunctions[format]=formatFunctions[format]||makeFormatFunction(format),formatFunctions[format](m)):m.localeData().invalidDate()}function expandFormat(format,locale){function replaceLongDateFormatTokens(input){return locale.longDateFormat(input)||input}var i=5;for(localFormattingTokens.lastIndex=0;i>=0&&localFormattingTokens.test(format);)format=format.replace(localFormattingTokens,replaceLongDateFormatTokens),localFormattingTokens.lastIndex=0,i-=1;return format}function addRegexToken(token,regex,strictRegex){regexes[token]=isFunction(regex)?regex:function(isStrict,localeData){return isStrict&&strictRegex?strictRegex:regex}}function getParseRegexForToken(token,config){return hasOwnProp(regexes,token)?regexes[token](config._strict,config._locale):new RegExp(unescapeFormat(token))}
// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s){return regexEscape(s.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(matched,p1,p2,p3,p4){return p1||p2||p3||p4}))}function regexEscape(s){return s.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function addParseToken(token,callback){var i,func=callback;for("string"==typeof token&&(token=[token]),isNumber(callback)&&(func=function(input,array){array[callback]=toInt(input)}),i=0;i<token.length;i++)tokens[token[i]]=func}function addWeekParseToken(token,callback){addParseToken(token,function(input,array,config,token){config._w=config._w||{},callback(input,config._w,config,token)})}function addTimeToArrayFromToken(token,input,config){null!=input&&hasOwnProp(tokens,token)&&tokens[token](input,config._a,config,token)}function daysInMonth(year,month){return new Date(Date.UTC(year,month+1,0)).getUTCDate()}function localeMonths(m,format){return m?isArray(this._months)?this._months[m.month()]:this._months[(this._months.isFormat||MONTHS_IN_FORMAT).test(format)?"format":"standalone"][m.month()]:isArray(this._months)?this._months:this._months.standalone}function localeMonthsShort(m,format){return m?isArray(this._monthsShort)?this._monthsShort[m.month()]:this._monthsShort[MONTHS_IN_FORMAT.test(format)?"format":"standalone"][m.month()]:isArray(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function handleStrictParse(monthName,format,strict){var i,ii,mom,llc=monthName.toLocaleLowerCase();if(!this._monthsParse)for(
// this is not used
this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],i=0;i<12;++i)mom=createUTC([2e3,i]),this._shortMonthsParse[i]=this.monthsShort(mom,"").toLocaleLowerCase(),this._longMonthsParse[i]=this.months(mom,"").toLocaleLowerCase();return strict?"MMM"===format?(ii=indexOf$1.call(this._shortMonthsParse,llc),-1!==ii?ii:null):(ii=indexOf$1.call(this._longMonthsParse,llc),-1!==ii?ii:null):"MMM"===format?-1!==(ii=indexOf$1.call(this._shortMonthsParse,llc))?ii:(ii=indexOf$1.call(this._longMonthsParse,llc),-1!==ii?ii:null):-1!==(ii=indexOf$1.call(this._longMonthsParse,llc))?ii:(ii=indexOf$1.call(this._shortMonthsParse,llc),-1!==ii?ii:null)}function localeMonthsParse(monthName,format,strict){var i,mom,regex;if(this._monthsParseExact)return handleStrictParse.call(this,monthName,format,strict);
// TODO: add sorting
// Sorting makes sure if one month (or abbr) is a prefix of another
// see sorting in computeMonthsParse
for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),i=0;i<12;i++){
// test the regex
if(
// make the regex if we don't have it already
mom=createUTC([2e3,i]),strict&&!this._longMonthsParse[i]&&(this._longMonthsParse[i]=new RegExp("^"+this.months(mom,"").replace(".","")+"$","i"),this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(mom,"").replace(".","")+"$","i")),strict||this._monthsParse[i]||(regex="^"+this.months(mom,"")+"|^"+this.monthsShort(mom,""),this._monthsParse[i]=new RegExp(regex.replace(".",""),"i")),strict&&"MMMM"===format&&this._longMonthsParse[i].test(monthName))return i;if(strict&&"MMM"===format&&this._shortMonthsParse[i].test(monthName))return i;if(!strict&&this._monthsParse[i].test(monthName))return i}}
// MOMENTS
function setMonth(mom,value){var dayOfMonth;if(!mom.isValid())
// No op
return mom;if("string"==typeof value)if(/^\d+$/.test(value))value=toInt(value);else
// TODO: Another silent failure?
if(value=mom.localeData().monthsParse(value),!isNumber(value))return mom;return dayOfMonth=Math.min(mom.date(),daysInMonth(mom.year(),value)),mom._d["set"+(mom._isUTC?"UTC":"")+"Month"](value,dayOfMonth),mom}function getSetMonth(value){return null!=value?(setMonth(this,value),hooks.updateOffset(this,!0),this):get(this,"Month")}function getDaysInMonth(){return daysInMonth(this.year(),this.month())}function monthsShortRegex(isStrict){return this._monthsParseExact?(hasOwnProp(this,"_monthsRegex")||computeMonthsParse.call(this),isStrict?this._monthsShortStrictRegex:this._monthsShortRegex):(hasOwnProp(this,"_monthsShortRegex")||(this._monthsShortRegex=defaultMonthsShortRegex),this._monthsShortStrictRegex&&isStrict?this._monthsShortStrictRegex:this._monthsShortRegex)}function monthsRegex(isStrict){return this._monthsParseExact?(hasOwnProp(this,"_monthsRegex")||computeMonthsParse.call(this),isStrict?this._monthsStrictRegex:this._monthsRegex):(hasOwnProp(this,"_monthsRegex")||(this._monthsRegex=defaultMonthsRegex),this._monthsStrictRegex&&isStrict?this._monthsStrictRegex:this._monthsRegex)}function computeMonthsParse(){function cmpLenRev(a,b){return b.length-a.length}var i,mom,shortPieces=[],longPieces=[],mixedPieces=[];for(i=0;i<12;i++)
// make the regex if we don't have it already
mom=createUTC([2e3,i]),shortPieces.push(this.monthsShort(mom,"")),longPieces.push(this.months(mom,"")),mixedPieces.push(this.months(mom,"")),mixedPieces.push(this.monthsShort(mom,""));for(
// Sorting makes sure if one month (or abbr) is a prefix of another it
// will match the longer piece.
shortPieces.sort(cmpLenRev),longPieces.sort(cmpLenRev),mixedPieces.sort(cmpLenRev),i=0;i<12;i++)shortPieces[i]=regexEscape(shortPieces[i]),longPieces[i]=regexEscape(longPieces[i]);for(i=0;i<24;i++)mixedPieces[i]=regexEscape(mixedPieces[i]);this._monthsRegex=new RegExp("^("+mixedPieces.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+longPieces.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+shortPieces.join("|")+")","i")}
// HELPERS
function daysInYear(year){return isLeapYear(year)?366:365}function isLeapYear(year){return year%4==0&&year%100!=0||year%400==0}function getIsLeapYear(){return isLeapYear(this.year())}function createDate(y,m,d,h,M,s,ms){
// can't just apply() to create a date:
// https://stackoverflow.com/q/181348
var date=new Date(y,m,d,h,M,s,ms);
// the date constructor remaps years 0-99 to 1900-1999
return y<100&&y>=0&&isFinite(date.getFullYear())&&date.setFullYear(y),date}function createUTCDate(y){var date=new Date(Date.UTC.apply(null,arguments));
// the Date.UTC function remaps years 0-99 to 1900-1999
return y<100&&y>=0&&isFinite(date.getUTCFullYear())&&date.setUTCFullYear(y),date}
// start-of-first-week - start-of-year
function firstWeekOffset(year,dow,doy){var// first-week day -- which january is always in the first week (4 for iso, 1 for other)
fwd=7+dow-doy;return-(7+createUTCDate(year,0,fwd).getUTCDay()-dow)%7+fwd-1}
// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year,week,weekday,dow,doy){var resYear,resDayOfYear,localWeekday=(7+weekday-dow)%7,weekOffset=firstWeekOffset(year,dow,doy),dayOfYear=1+7*(week-1)+localWeekday+weekOffset;return dayOfYear<=0?(resYear=year-1,resDayOfYear=daysInYear(resYear)+dayOfYear):dayOfYear>daysInYear(year)?(resYear=year+1,resDayOfYear=dayOfYear-daysInYear(year)):(resYear=year,resDayOfYear=dayOfYear),{year:resYear,dayOfYear:resDayOfYear}}function weekOfYear(mom,dow,doy){var resWeek,resYear,weekOffset=firstWeekOffset(mom.year(),dow,doy),week=Math.floor((mom.dayOfYear()-weekOffset-1)/7)+1;return week<1?(resYear=mom.year()-1,resWeek=week+weeksInYear(resYear,dow,doy)):week>weeksInYear(mom.year(),dow,doy)?(resWeek=week-weeksInYear(mom.year(),dow,doy),resYear=mom.year()+1):(resYear=mom.year(),resWeek=week),{week:resWeek,year:resYear}}function weeksInYear(year,dow,doy){var weekOffset=firstWeekOffset(year,dow,doy),weekOffsetNext=firstWeekOffset(year+1,dow,doy);return(daysInYear(year)-weekOffset+weekOffsetNext)/7}
// HELPERS
// LOCALES
function localeWeek(mom){return weekOfYear(mom,this._week.dow,this._week.doy).week}function localeFirstDayOfWeek(){return this._week.dow}function localeFirstDayOfYear(){return this._week.doy}
// MOMENTS
function getSetWeek(input){var week=this.localeData().week(this);return null==input?week:this.add(7*(input-week),"d")}function getSetISOWeek(input){var week=weekOfYear(this,1,4).week;return null==input?week:this.add(7*(input-week),"d")}
// HELPERS
function parseWeekday(input,locale){return"string"!=typeof input?input:isNaN(input)?(input=locale.weekdaysParse(input),"number"==typeof input?input:null):parseInt(input,10)}function parseIsoWeekday(input,locale){return"string"==typeof input?locale.weekdaysParse(input)%7||7:isNaN(input)?null:input}function localeWeekdays(m,format){return m?isArray(this._weekdays)?this._weekdays[m.day()]:this._weekdays[this._weekdays.isFormat.test(format)?"format":"standalone"][m.day()]:isArray(this._weekdays)?this._weekdays:this._weekdays.standalone}function localeWeekdaysShort(m){return m?this._weekdaysShort[m.day()]:this._weekdaysShort}function localeWeekdaysMin(m){return m?this._weekdaysMin[m.day()]:this._weekdaysMin}function handleStrictParse$1(weekdayName,format,strict){var i,ii,mom,llc=weekdayName.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],i=0;i<7;++i)mom=createUTC([2e3,1]).day(i),this._minWeekdaysParse[i]=this.weekdaysMin(mom,"").toLocaleLowerCase(),this._shortWeekdaysParse[i]=this.weekdaysShort(mom,"").toLocaleLowerCase(),this._weekdaysParse[i]=this.weekdays(mom,"").toLocaleLowerCase();return strict?"dddd"===format?(ii=indexOf$1.call(this._weekdaysParse,llc),-1!==ii?ii:null):"ddd"===format?(ii=indexOf$1.call(this._shortWeekdaysParse,llc),-1!==ii?ii:null):(ii=indexOf$1.call(this._minWeekdaysParse,llc),-1!==ii?ii:null):"dddd"===format?-1!==(ii=indexOf$1.call(this._weekdaysParse,llc))?ii:-1!==(ii=indexOf$1.call(this._shortWeekdaysParse,llc))?ii:(ii=indexOf$1.call(this._minWeekdaysParse,llc),-1!==ii?ii:null):"ddd"===format?-1!==(ii=indexOf$1.call(this._shortWeekdaysParse,llc))?ii:-1!==(ii=indexOf$1.call(this._weekdaysParse,llc))?ii:(ii=indexOf$1.call(this._minWeekdaysParse,llc),-1!==ii?ii:null):-1!==(ii=indexOf$1.call(this._minWeekdaysParse,llc))?ii:-1!==(ii=indexOf$1.call(this._weekdaysParse,llc))?ii:(ii=indexOf$1.call(this._shortWeekdaysParse,llc),-1!==ii?ii:null)}function localeWeekdaysParse(weekdayName,format,strict){var i,mom,regex;if(this._weekdaysParseExact)return handleStrictParse$1.call(this,weekdayName,format,strict);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),i=0;i<7;i++){
// test the regex
if(
// make the regex if we don't have it already
mom=createUTC([2e3,1]).day(i),strict&&!this._fullWeekdaysParse[i]&&(this._fullWeekdaysParse[i]=new RegExp("^"+this.weekdays(mom,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[i]=new RegExp("^"+this.weekdaysShort(mom,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[i]=new RegExp("^"+this.weekdaysMin(mom,"").replace(".",".?")+"$","i")),this._weekdaysParse[i]||(regex="^"+this.weekdays(mom,"")+"|^"+this.weekdaysShort(mom,"")+"|^"+this.weekdaysMin(mom,""),this._weekdaysParse[i]=new RegExp(regex.replace(".",""),"i")),strict&&"dddd"===format&&this._fullWeekdaysParse[i].test(weekdayName))return i;if(strict&&"ddd"===format&&this._shortWeekdaysParse[i].test(weekdayName))return i;if(strict&&"dd"===format&&this._minWeekdaysParse[i].test(weekdayName))return i;if(!strict&&this._weekdaysParse[i].test(weekdayName))return i}}
// MOMENTS
function getSetDayOfWeek(input){if(!this.isValid())return null!=input?this:NaN;var day=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=input?(input=parseWeekday(input,this.localeData()),this.add(input-day,"d")):day}function getSetLocaleDayOfWeek(input){if(!this.isValid())return null!=input?this:NaN;var weekday=(this.day()+7-this.localeData()._week.dow)%7;return null==input?weekday:this.add(input-weekday,"d")}function getSetISODayOfWeek(input){if(!this.isValid())return null!=input?this:NaN;
// behaves the same as moment#day except
// as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
// as a setter, sunday should belong to the previous week.
if(null!=input){var weekday=parseIsoWeekday(input,this.localeData());return this.day(this.day()%7?weekday:weekday-7)}return this.day()||7}function weekdaysRegex(isStrict){return this._weekdaysParseExact?(hasOwnProp(this,"_weekdaysRegex")||computeWeekdaysParse.call(this),isStrict?this._weekdaysStrictRegex:this._weekdaysRegex):(hasOwnProp(this,"_weekdaysRegex")||(this._weekdaysRegex=defaultWeekdaysRegex),this._weekdaysStrictRegex&&isStrict?this._weekdaysStrictRegex:this._weekdaysRegex)}function weekdaysShortRegex(isStrict){return this._weekdaysParseExact?(hasOwnProp(this,"_weekdaysRegex")||computeWeekdaysParse.call(this),isStrict?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(hasOwnProp(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=defaultWeekdaysShortRegex),this._weekdaysShortStrictRegex&&isStrict?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function weekdaysMinRegex(isStrict){return this._weekdaysParseExact?(hasOwnProp(this,"_weekdaysRegex")||computeWeekdaysParse.call(this),isStrict?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(hasOwnProp(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=defaultWeekdaysMinRegex),this._weekdaysMinStrictRegex&&isStrict?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function computeWeekdaysParse(){function cmpLenRev(a,b){return b.length-a.length}var i,mom,minp,shortp,longp,minPieces=[],shortPieces=[],longPieces=[],mixedPieces=[];for(i=0;i<7;i++)
// make the regex if we don't have it already
mom=createUTC([2e3,1]).day(i),minp=this.weekdaysMin(mom,""),shortp=this.weekdaysShort(mom,""),longp=this.weekdays(mom,""),minPieces.push(minp),shortPieces.push(shortp),longPieces.push(longp),mixedPieces.push(minp),mixedPieces.push(shortp),mixedPieces.push(longp);for(
// Sorting makes sure if one weekday (or abbr) is a prefix of another it
// will match the longer piece.
minPieces.sort(cmpLenRev),shortPieces.sort(cmpLenRev),longPieces.sort(cmpLenRev),mixedPieces.sort(cmpLenRev),i=0;i<7;i++)shortPieces[i]=regexEscape(shortPieces[i]),longPieces[i]=regexEscape(longPieces[i]),mixedPieces[i]=regexEscape(mixedPieces[i]);this._weekdaysRegex=new RegExp("^("+mixedPieces.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+longPieces.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+shortPieces.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+minPieces.join("|")+")","i")}
// FORMATTING
function hFormat(){return this.hours()%12||12}function kFormat(){return this.hours()||24}function meridiem(token,lowercase){addFormatToken(token,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),lowercase)})}
// PARSING
function matchMeridiem(isStrict,locale){return locale._meridiemParse}
// LOCALES
function localeIsPM(input){
// IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
// Using charAt should be more compatible.
return"p"===(input+"").toLowerCase().charAt(0)}function localeMeridiem(hours,minutes,isLower){return hours>11?isLower?"pm":"PM":isLower?"am":"AM"}function normalizeLocale(key){return key?key.toLowerCase().replace("_","-"):key}
// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names){for(var j,next,locale,split,i=0;i<names.length;){for(split=normalizeLocale(names[i]).split("-"),j=split.length,next=normalizeLocale(names[i+1]),next=next?next.split("-"):null;j>0;){if(locale=loadLocale(split.slice(0,j).join("-")))return locale;if(next&&next.length>=j&&compareArrays(split,next,!0)>=j-1)
//the next array item is better than a shallower substring of this one
break;j--}i++}return null}function loadLocale(name){var oldLocale=null;
// TODO: Find a better way to register and load all the locales in Node
if(!locales[name]&&"undefined"!=typeof module&&module&&module.exports)try{oldLocale=globalLocale._abbr,require("./locale/"+name),
// because defineLocale currently also sets the global locale, we
// want to undo that for lazy loaded locales
getSetGlobalLocale(oldLocale)}catch(e){}return locales[name]}
// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale(key,values){var data;
// moment.duration._locale = moment._locale = data;
return key&&(data=isUndefined(values)?getLocale(key):defineLocale(key,values))&&(globalLocale=data),globalLocale._abbr}function defineLocale(name,config){if(null!==config){var parentConfig=baseConfig;if(config.abbr=name,null!=locales[name])deprecateSimple("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),parentConfig=locales[name]._config;else if(null!=config.parentLocale){if(null==locales[config.parentLocale])return localeFamilies[config.parentLocale]||(localeFamilies[config.parentLocale]=[]),localeFamilies[config.parentLocale].push({name:name,config:config}),null;parentConfig=locales[config.parentLocale]._config}
// backwards compat for now: also set the locale
// make sure we set the locale AFTER all child locales have been
// created, so we won't end up with the child locale set.
return locales[name]=new Locale(mergeConfigs(parentConfig,config)),localeFamilies[name]&&localeFamilies[name].forEach(function(x){defineLocale(x.name,x.config)}),getSetGlobalLocale(name),locales[name]}
// useful for testing
return delete locales[name],null}function updateLocale(name,config){if(null!=config){var locale,parentConfig=baseConfig;
// MERGE
null!=locales[name]&&(parentConfig=locales[name]._config),config=mergeConfigs(parentConfig,config),locale=new Locale(config),locale.parentLocale=locales[name],locales[name]=locale,
// backwards compat for now: also set the locale
getSetGlobalLocale(name)}else
// pass null for config to unupdate, useful for tests
null!=locales[name]&&(null!=locales[name].parentLocale?locales[name]=locales[name].parentLocale:null!=locales[name]&&delete locales[name]);return locales[name]}
// returns locale data
function getLocale(key){var locale;if(key&&key._locale&&key._locale._abbr&&(key=key._locale._abbr),!key)return globalLocale;if(!isArray(key)){if(
//short-circuit everything else
locale=loadLocale(key))return locale;key=[key]}return chooseLocale(key)}function listLocales(){return keys$1(locales)}function checkOverflow(m){var overflow,a=m._a;return a&&-2===getParsingFlags(m).overflow&&(overflow=a[MONTH]<0||a[MONTH]>11?MONTH:a[DATE]<1||a[DATE]>daysInMonth(a[YEAR],a[MONTH])?DATE:a[HOUR]<0||a[HOUR]>24||24===a[HOUR]&&(0!==a[MINUTE]||0!==a[SECOND]||0!==a[MILLISECOND])?HOUR:a[MINUTE]<0||a[MINUTE]>59?MINUTE:a[SECOND]<0||a[SECOND]>59?SECOND:a[MILLISECOND]<0||a[MILLISECOND]>999?MILLISECOND:-1,getParsingFlags(m)._overflowDayOfYear&&(overflow<YEAR||overflow>DATE)&&(overflow=DATE),getParsingFlags(m)._overflowWeeks&&-1===overflow&&(overflow=WEEK),getParsingFlags(m)._overflowWeekday&&-1===overflow&&(overflow=WEEKDAY),getParsingFlags(m).overflow=overflow),m}
// date from iso format
function configFromISO(config){var i,l,allowTime,dateFormat,timeFormat,tzFormat,string=config._i,match=extendedIsoRegex.exec(string)||basicIsoRegex.exec(string);if(match){for(getParsingFlags(config).iso=!0,i=0,l=isoDates.length;i<l;i++)if(isoDates[i][1].exec(match[1])){dateFormat=isoDates[i][0],allowTime=!1!==isoDates[i][2];break}if(null==dateFormat)return void(config._isValid=!1);if(match[3]){for(i=0,l=isoTimes.length;i<l;i++)if(isoTimes[i][1].exec(match[3])){
// match[2] should be 'T' or space
timeFormat=(match[2]||" ")+isoTimes[i][0];break}if(null==timeFormat)return void(config._isValid=!1)}if(!allowTime&&null!=timeFormat)return void(config._isValid=!1);if(match[4]){if(!tzRegex.exec(match[4]))return void(config._isValid=!1);tzFormat="Z"}config._f=dateFormat+(timeFormat||"")+(tzFormat||""),configFromStringAndFormat(config)}else config._isValid=!1}
// date and time from ref 2822 format
function configFromRFC2822(config){var string,match,dayFormat,dateFormat,timeFormat,tzFormat,timezone,timezoneIndex,timezones={" GMT":" +0000"," EDT":" -0400"," EST":" -0500"," CDT":" -0500"," CST":" -0600"," MDT":" -0600"," MST":" -0700"," PDT":" -0700"," PST":" -0800"},military="YXWVUTSRQPONZABCDEFGHIKLM";if(string=config._i.replace(/\([^\)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s|\s$/g,""),// Remove leading and trailing spaces
match=basicRfcRegex.exec(string)){
// TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
if(dayFormat=match[1]?"ddd"+(5===match[1].length?", ":" "):"",dateFormat="D MMM "+(match[2].length>10?"YYYY ":"YY "),timeFormat="HH:mm"+(match[4]?":ss":""),match[1]){// day of week given
var momentDate=new Date(match[2]),momentDay=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][momentDate.getDay()];if(match[1].substr(0,3)!==momentDay)return getParsingFlags(config).weekdayMismatch=!0,void(config._isValid=!1)}switch(match[5].length){case 2:// military
0===timezoneIndex?timezone=" +0000":(timezoneIndex=military.indexOf(match[5][1].toUpperCase())-12,timezone=(timezoneIndex<0?" -":" +")+(""+timezoneIndex).replace(/^-?/,"0").match(/..$/)[0]+"00");break;case 4:// Zone
timezone=timezones[match[5]];break;default:// UT or +/-9999
timezone=timezones[" GMT"]}match[5]=timezone,config._i=match.splice(1).join(""),tzFormat=" ZZ",config._f=dayFormat+dateFormat+timeFormat+tzFormat,configFromStringAndFormat(config),getParsingFlags(config).rfc2822=!0}else config._isValid=!1}
// date from iso format or fallback
function configFromString(config){var matched=aspNetJsonRegex.exec(config._i);if(null!==matched)return void(config._d=new Date(+matched[1]));configFromISO(config),!1===config._isValid&&(delete config._isValid,configFromRFC2822(config),!1===config._isValid&&(delete config._isValid,
// Final attempt, use Input Fallback
hooks.createFromInputFallback(config)))}
// Pick the first defined of two or three arguments.
function defaults(a,b,c){return null!=a?a:null!=b?b:c}function currentDateArray(config){
// hooks is actually the exported moment object
var nowValue=new Date(hooks.now());return config._useUTC?[nowValue.getUTCFullYear(),nowValue.getUTCMonth(),nowValue.getUTCDate()]:[nowValue.getFullYear(),nowValue.getMonth(),nowValue.getDate()]}
// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray(config){var i,date,currentDate,yearToUse,input=[];if(!config._d){
// Default to current date.
// * if no year, month, day of month are given, default to today
// * if day of month is given, default month and year
// * if month is given, default only year
// * if year is given, don't default anything
for(currentDate=currentDateArray(config),
//compute day of the year from weeks and weekdays
config._w&&null==config._a[DATE]&&null==config._a[MONTH]&&dayOfYearFromWeekInfo(config),
//if the day of the year is set, figure out what it is
null!=config._dayOfYear&&(yearToUse=defaults(config._a[YEAR],currentDate[YEAR]),(config._dayOfYear>daysInYear(yearToUse)||0===config._dayOfYear)&&(getParsingFlags(config)._overflowDayOfYear=!0),date=createUTCDate(yearToUse,0,config._dayOfYear),config._a[MONTH]=date.getUTCMonth(),config._a[DATE]=date.getUTCDate()),i=0;i<3&&null==config._a[i];++i)config._a[i]=input[i]=currentDate[i];
// Zero out whatever was not defaulted, including time
for(;i<7;i++)config._a[i]=input[i]=null==config._a[i]?2===i?1:0:config._a[i];
// Check for 24:00:00.000
24===config._a[HOUR]&&0===config._a[MINUTE]&&0===config._a[SECOND]&&0===config._a[MILLISECOND]&&(config._nextDay=!0,config._a[HOUR]=0),config._d=(config._useUTC?createUTCDate:createDate).apply(null,input),
// Apply timezone offset from input. The actual utcOffset can be changed
// with parseZone.
null!=config._tzm&&config._d.setUTCMinutes(config._d.getUTCMinutes()-config._tzm),config._nextDay&&(config._a[HOUR]=24)}}function dayOfYearFromWeekInfo(config){var w,weekYear,week,weekday,dow,doy,temp,weekdayOverflow;if(w=config._w,null!=w.GG||null!=w.W||null!=w.E)dow=1,doy=4,
// TODO: We need to take the current isoWeekYear, but that depends on
// how we interpret now (local, utc, fixed offset). So create
// a now version of current config (take local/utc/offset flags, and
// create now).
weekYear=defaults(w.GG,config._a[YEAR],weekOfYear(createLocal(),1,4).year),week=defaults(w.W,1),((weekday=defaults(w.E,1))<1||weekday>7)&&(weekdayOverflow=!0);else{dow=config._locale._week.dow,doy=config._locale._week.doy;var curWeek=weekOfYear(createLocal(),dow,doy);weekYear=defaults(w.gg,config._a[YEAR],curWeek.year),
// Default to current week.
week=defaults(w.w,curWeek.week),null!=w.d?((
// weekday -- low day numbers are considered next week
weekday=w.d)<0||weekday>6)&&(weekdayOverflow=!0):null!=w.e?(
// local weekday -- counting starts from begining of week
weekday=w.e+dow,(w.e<0||w.e>6)&&(weekdayOverflow=!0)):
// default to begining of week
weekday=dow}week<1||week>weeksInYear(weekYear,dow,doy)?getParsingFlags(config)._overflowWeeks=!0:null!=weekdayOverflow?getParsingFlags(config)._overflowWeekday=!0:(temp=dayOfYearFromWeeks(weekYear,week,weekday,dow,doy),config._a[YEAR]=temp.year,config._dayOfYear=temp.dayOfYear)}
// date from string and format string
function configFromStringAndFormat(config){
// TODO: Move this to another part of the creation flow to prevent circular deps
if(config._f===hooks.ISO_8601)return void configFromISO(config);if(config._f===hooks.RFC_2822)return void configFromRFC2822(config);config._a=[],getParsingFlags(config).empty=!0;
// This array is used to make a Date, either with `new Date` or `Date.UTC`
var i,parsedInput,tokens,token,skipped,string=""+config._i,stringLength=string.length,totalParsedInputLength=0;for(tokens=expandFormat(config._f,config._locale).match(formattingTokens)||[],i=0;i<tokens.length;i++)token=tokens[i],parsedInput=(string.match(getParseRegexForToken(token,config))||[])[0],
// console.log('token', token, 'parsedInput', parsedInput,
//         'regex', getParseRegexForToken(token, config));
parsedInput&&(skipped=string.substr(0,string.indexOf(parsedInput)),skipped.length>0&&getParsingFlags(config).unusedInput.push(skipped),string=string.slice(string.indexOf(parsedInput)+parsedInput.length),totalParsedInputLength+=parsedInput.length),
// don't parse if it's not a known token
formatTokenFunctions[token]?(parsedInput?getParsingFlags(config).empty=!1:getParsingFlags(config).unusedTokens.push(token),addTimeToArrayFromToken(token,parsedInput,config)):config._strict&&!parsedInput&&getParsingFlags(config).unusedTokens.push(token);
// add remaining unparsed input length to the string
getParsingFlags(config).charsLeftOver=stringLength-totalParsedInputLength,string.length>0&&getParsingFlags(config).unusedInput.push(string),
// clear _12h flag if hour is <= 12
config._a[HOUR]<=12&&!0===getParsingFlags(config).bigHour&&config._a[HOUR]>0&&(getParsingFlags(config).bigHour=void 0),getParsingFlags(config).parsedDateParts=config._a.slice(0),getParsingFlags(config).meridiem=config._meridiem,
// handle meridiem
config._a[HOUR]=meridiemFixWrap(config._locale,config._a[HOUR],config._meridiem),configFromArray(config),checkOverflow(config)}function meridiemFixWrap(locale,hour,meridiem){var isPm;
// Fallback
return null==meridiem?hour:null!=locale.meridiemHour?locale.meridiemHour(hour,meridiem):null!=locale.isPM?(isPm=locale.isPM(meridiem),isPm&&hour<12&&(hour+=12),isPm||12!==hour||(hour=0),hour):hour}
// date from string and array of format strings
function configFromStringAndArray(config){var tempConfig,bestMoment,scoreToBeat,i,currentScore;if(0===config._f.length)return getParsingFlags(config).invalidFormat=!0,void(config._d=new Date(NaN));for(i=0;i<config._f.length;i++)currentScore=0,tempConfig=copyConfig({},config),null!=config._useUTC&&(tempConfig._useUTC=config._useUTC),tempConfig._f=config._f[i],configFromStringAndFormat(tempConfig),isValid(tempConfig)&&(
// if there is any input that was not parsed add a penalty for that format
currentScore+=getParsingFlags(tempConfig).charsLeftOver,
//or tokens
currentScore+=10*getParsingFlags(tempConfig).unusedTokens.length,getParsingFlags(tempConfig).score=currentScore,(null==scoreToBeat||currentScore<scoreToBeat)&&(scoreToBeat=currentScore,bestMoment=tempConfig));extend(config,bestMoment||tempConfig)}function configFromObject(config){if(!config._d){var i=normalizeObjectUnits(config._i);config._a=map([i.year,i.month,i.day||i.date,i.hour,i.minute,i.second,i.millisecond],function(obj){return obj&&parseInt(obj,10)}),configFromArray(config)}}function createFromConfig(config){var res=new Moment(checkOverflow(prepareConfig(config)));
// Adding is smart enough around DST
return res._nextDay&&(res.add(1,"d"),res._nextDay=void 0),res}function prepareConfig(config){var input=config._i,format=config._f;return config._locale=config._locale||getLocale(config._l),null===input||void 0===format&&""===input?createInvalid({nullInput:!0}):("string"==typeof input&&(config._i=input=config._locale.preparse(input)),isMoment(input)?new Moment(checkOverflow(input)):(isDate(input)?config._d=input:isArray(format)?configFromStringAndArray(config):format?configFromStringAndFormat(config):configFromInput(config),isValid(config)||(config._d=null),config))}function configFromInput(config){var input=config._i;isUndefined(input)?config._d=new Date(hooks.now()):isDate(input)?config._d=new Date(input.valueOf()):"string"==typeof input?configFromString(config):isArray(input)?(config._a=map(input.slice(0),function(obj){return parseInt(obj,10)}),configFromArray(config)):isObject(input)?configFromObject(config):isNumber(input)?
// from milliseconds
config._d=new Date(input):hooks.createFromInputFallback(config)}function createLocalOrUTC(input,format,locale,strict,isUTC){var c={};
// object construction must be done this way.
// https://github.com/moment/moment/issues/1423
return!0!==locale&&!1!==locale||(strict=locale,locale=void 0),(isObject(input)&&isObjectEmpty(input)||isArray(input)&&0===input.length)&&(input=void 0),c._isAMomentObject=!0,c._useUTC=c._isUTC=isUTC,c._l=locale,c._i=input,c._f=format,c._strict=strict,createFromConfig(c)}function createLocal(input,format,locale,strict){return createLocalOrUTC(input,format,locale,strict,!1)}
// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn,moments){var res,i;if(1===moments.length&&isArray(moments[0])&&(moments=moments[0]),!moments.length)return createLocal();for(res=moments[0],i=1;i<moments.length;++i)moments[i].isValid()&&!moments[i][fn](res)||(res=moments[i]);return res}
// TODO: Use [].sort instead?
function min(){return pickBy("isBefore",[].slice.call(arguments,0))}function max(){return pickBy("isAfter",[].slice.call(arguments,0))}function isDurationValid(m){for(var key in m)if(-1===ordering.indexOf(key)||null!=m[key]&&isNaN(m[key]))return!1;for(var unitHasDecimal=!1,i=0;i<ordering.length;++i)if(m[ordering[i]]){if(unitHasDecimal)return!1;parseFloat(m[ordering[i]])!==toInt(m[ordering[i]])&&(unitHasDecimal=!0)}return!0}function isValid$1(){return this._isValid}function createInvalid$1(){return createDuration(NaN)}function Duration(duration){var normalizedInput=normalizeObjectUnits(duration),years=normalizedInput.year||0,quarters=normalizedInput.quarter||0,months=normalizedInput.month||0,weeks=normalizedInput.week||0,days=normalizedInput.day||0,hours=normalizedInput.hour||0,minutes=normalizedInput.minute||0,seconds=normalizedInput.second||0,milliseconds=normalizedInput.millisecond||0;this._isValid=isDurationValid(normalizedInput),
// representation for dateAddRemove
this._milliseconds=+milliseconds+1e3*seconds+// 1000
6e4*minutes+// 1000 * 60
1e3*hours*60*60,//using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
// Because of dateAddRemove treats 24 hours as different from a
// day when working around DST, we need to store them separately
this._days=+days+7*weeks,
// It is impossible translate months into days without knowing
// which months you are are talking about, so we have to store
// it separately.
this._months=+months+3*quarters+12*years,this._data={},this._locale=getLocale(),this._bubble()}function isDuration(obj){return obj instanceof Duration}function absRound(number){return number<0?-1*Math.round(-1*number):Math.round(number)}
// FORMATTING
function offset(token,separator){addFormatToken(token,0,0,function(){var offset=this.utcOffset(),sign="+";return offset<0&&(offset=-offset,sign="-"),sign+zeroFill(~~(offset/60),2)+separator+zeroFill(~~offset%60,2)})}function offsetFromString(matcher,string){var matches=(string||"").match(matcher);if(null===matches)return null;var chunk=matches[matches.length-1]||[],parts=(chunk+"").match(chunkOffset)||["-",0,0],minutes=60*parts[1]+toInt(parts[2]);return 0===minutes?0:"+"===parts[0]?minutes:-minutes}
// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input,model){var res,diff;
// Use low-level api, because this fn is low-level api.
return model._isUTC?(res=model.clone(),diff=(isMoment(input)||isDate(input)?input.valueOf():createLocal(input).valueOf())-res.valueOf(),res._d.setTime(res._d.valueOf()+diff),hooks.updateOffset(res,!1),res):createLocal(input).local()}function getDateOffset(m){
// On Firefox.24 Date#getTimezoneOffset returns a floating point.
// https://github.com/moment/moment/pull/1871
return 15*-Math.round(m._d.getTimezoneOffset()/15)}
// MOMENTS
// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset(input,keepLocalTime,keepMinutes){var localAdjust,offset=this._offset||0;if(!this.isValid())return null!=input?this:NaN;if(null!=input){if("string"==typeof input){if(null===(input=offsetFromString(matchShortOffset,input)))return this}else Math.abs(input)<16&&!keepMinutes&&(input*=60);return!this._isUTC&&keepLocalTime&&(localAdjust=getDateOffset(this)),this._offset=input,this._isUTC=!0,null!=localAdjust&&this.add(localAdjust,"m"),offset!==input&&(!keepLocalTime||this._changeInProgress?addSubtract(this,createDuration(input-offset,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,hooks.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?offset:getDateOffset(this)}function getSetZone(input,keepLocalTime){return null!=input?("string"!=typeof input&&(input=-input),this.utcOffset(input,keepLocalTime),this):-this.utcOffset()}function setOffsetToUTC(keepLocalTime){return this.utcOffset(0,keepLocalTime)}function setOffsetToLocal(keepLocalTime){return this._isUTC&&(this.utcOffset(0,keepLocalTime),this._isUTC=!1,keepLocalTime&&this.subtract(getDateOffset(this),"m")),this}function setOffsetToParsedOffset(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var tZone=offsetFromString(matchOffset,this._i);null!=tZone?this.utcOffset(tZone):this.utcOffset(0,!0)}return this}function hasAlignedHourOffset(input){return!!this.isValid()&&(input=input?createLocal(input).utcOffset():0,(this.utcOffset()-input)%60==0)}function isDaylightSavingTime(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function isDaylightSavingTimeShifted(){if(!isUndefined(this._isDSTShifted))return this._isDSTShifted;var c={};if(copyConfig(c,this),c=prepareConfig(c),c._a){var other=c._isUTC?createUTC(c._a):createLocal(c._a);this._isDSTShifted=this.isValid()&&compareArrays(c._a,other.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function isLocal(){return!!this.isValid()&&!this._isUTC}function isUtcOffset(){return!!this.isValid()&&this._isUTC}function isUtc(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function createDuration(input,key){var sign,ret,diffRes,duration=input,
// matching against regexp is expensive, do it on demand
match=null;// checks for null or undefined
return isDuration(input)?duration={ms:input._milliseconds,d:input._days,M:input._months}:isNumber(input)?(duration={},key?duration[key]=input:duration.milliseconds=input):(match=aspNetRegex.exec(input))?(sign="-"===match[1]?-1:1,duration={y:0,d:toInt(match[DATE])*sign,h:toInt(match[HOUR])*sign,m:toInt(match[MINUTE])*sign,s:toInt(match[SECOND])*sign,ms:toInt(absRound(1e3*match[MILLISECOND]))*sign}):(match=isoRegex.exec(input))?(sign="-"===match[1]?-1:1,duration={y:parseIso(match[2],sign),M:parseIso(match[3],sign),w:parseIso(match[4],sign),d:parseIso(match[5],sign),h:parseIso(match[6],sign),m:parseIso(match[7],sign),s:parseIso(match[8],sign)}):null==duration?duration={}:"object"==typeof duration&&("from"in duration||"to"in duration)&&(diffRes=momentsDifference(createLocal(duration.from),createLocal(duration.to)),duration={},duration.ms=diffRes.milliseconds,duration.M=diffRes.months),ret=new Duration(duration),isDuration(input)&&hasOwnProp(input,"_locale")&&(ret._locale=input._locale),ret}function parseIso(inp,sign){
// We'd normally use ~~inp for this, but unfortunately it also
// converts floats to ints.
// inp may be undefined, so careful calling replace on it.
var res=inp&&parseFloat(inp.replace(",","."));
// apply sign while we're at it
return(isNaN(res)?0:res)*sign}function positiveMomentsDifference(base,other){var res={milliseconds:0,months:0};return res.months=other.month()-base.month()+12*(other.year()-base.year()),base.clone().add(res.months,"M").isAfter(other)&&--res.months,res.milliseconds=+other-+base.clone().add(res.months,"M"),res}function momentsDifference(base,other){var res;return base.isValid()&&other.isValid()?(other=cloneWithOffset(other,base),base.isBefore(other)?res=positiveMomentsDifference(base,other):(res=positiveMomentsDifference(other,base),res.milliseconds=-res.milliseconds,res.months=-res.months),res):{milliseconds:0,months:0}}
// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction,name){return function(val,period){var dur,tmp;
//invert the arguments, but complain about it
return null===period||isNaN(+period)||(deprecateSimple(name,"moment()."+name+"(period, number) is deprecated. Please use moment()."+name+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),tmp=val,val=period,period=tmp),val="string"==typeof val?+val:val,dur=createDuration(val,period),addSubtract(this,dur,direction),this}}function addSubtract(mom,duration,isAdding,updateOffset){var milliseconds=duration._milliseconds,days=absRound(duration._days),months=absRound(duration._months);mom.isValid()&&(updateOffset=null==updateOffset||updateOffset,milliseconds&&mom._d.setTime(mom._d.valueOf()+milliseconds*isAdding),days&&set$1(mom,"Date",get(mom,"Date")+days*isAdding),months&&setMonth(mom,get(mom,"Month")+months*isAdding),updateOffset&&hooks.updateOffset(mom,days||months))}function getCalendarFormat(myMoment,now){var diff=myMoment.diff(now,"days",!0);return diff<-6?"sameElse":diff<-1?"lastWeek":diff<0?"lastDay":diff<1?"sameDay":diff<2?"nextDay":diff<7?"nextWeek":"sameElse"}function calendar$1(time,formats){
// We want to compare the start of today, vs this.
// Getting start-of-today depends on whether we're local/utc/offset or not.
var now=time||createLocal(),sod=cloneWithOffset(now,this).startOf("day"),format=hooks.calendarFormat(this,sod)||"sameElse",output=formats&&(isFunction(formats[format])?formats[format].call(this,now):formats[format]);return this.format(output||this.localeData().calendar(format,this,createLocal(now)))}function clone(){return new Moment(this)}function isAfter(input,units){var localInput=isMoment(input)?input:createLocal(input);return!(!this.isValid()||!localInput.isValid())&&(units=normalizeUnits(isUndefined(units)?"millisecond":units),"millisecond"===units?this.valueOf()>localInput.valueOf():localInput.valueOf()<this.clone().startOf(units).valueOf())}function isBefore(input,units){var localInput=isMoment(input)?input:createLocal(input);return!(!this.isValid()||!localInput.isValid())&&(units=normalizeUnits(isUndefined(units)?"millisecond":units),"millisecond"===units?this.valueOf()<localInput.valueOf():this.clone().endOf(units).valueOf()<localInput.valueOf())}function isBetween(from,to,units,inclusivity){return inclusivity=inclusivity||"()",("("===inclusivity[0]?this.isAfter(from,units):!this.isBefore(from,units))&&(")"===inclusivity[1]?this.isBefore(to,units):!this.isAfter(to,units))}function isSame(input,units){var inputMs,localInput=isMoment(input)?input:createLocal(input);return!(!this.isValid()||!localInput.isValid())&&(units=normalizeUnits(units||"millisecond"),"millisecond"===units?this.valueOf()===localInput.valueOf():(inputMs=localInput.valueOf(),this.clone().startOf(units).valueOf()<=inputMs&&inputMs<=this.clone().endOf(units).valueOf()))}function isSameOrAfter(input,units){return this.isSame(input,units)||this.isAfter(input,units)}function isSameOrBefore(input,units){return this.isSame(input,units)||this.isBefore(input,units)}function diff(input,units,asFloat){var that,zoneDelta,delta,output;// 1000
// 1000 * 60
// 1000 * 60 * 60
// 1000 * 60 * 60 * 24, negate dst
// 1000 * 60 * 60 * 24 * 7, negate dst
return this.isValid()?(that=cloneWithOffset(input,this),that.isValid()?(zoneDelta=6e4*(that.utcOffset()-this.utcOffset()),units=normalizeUnits(units),"year"===units||"month"===units||"quarter"===units?(output=monthDiff(this,that),"quarter"===units?output/=3:"year"===units&&(output/=12)):(delta=this-that,output="second"===units?delta/1e3:"minute"===units?delta/6e4:"hour"===units?delta/36e5:"day"===units?(delta-zoneDelta)/864e5:"week"===units?(delta-zoneDelta)/6048e5:delta),asFloat?output:absFloor(output)):NaN):NaN}function monthDiff(a,b){
// difference in months
var anchor2,adjust,wholeMonthDiff=12*(b.year()-a.year())+(b.month()-a.month()),
// b is in (anchor - 1 month, anchor + 1 month)
anchor=a.clone().add(wholeMonthDiff,"months");
//check for negative zero, return zero if negative zero
// linear across the month
// linear across the month
return b-anchor<0?(anchor2=a.clone().add(wholeMonthDiff-1,"months"),adjust=(b-anchor)/(anchor-anchor2)):(anchor2=a.clone().add(wholeMonthDiff+1,"months"),adjust=(b-anchor)/(anchor2-anchor)),-(wholeMonthDiff+adjust)||0}function toString(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function toISOString(){if(!this.isValid())return null;var m=this.clone().utc();return m.year()<0||m.year()>9999?formatMoment(m,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):isFunction(Date.prototype.toISOString)?this.toDate().toISOString():formatMoment(m,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var func="moment",zone="";this.isLocal()||(func=0===this.utcOffset()?"moment.utc":"moment.parseZone",zone="Z");var prefix="["+func+'("]',year=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",suffix=zone+'[")]';return this.format(prefix+year+"-MM-DD[T]HH:mm:ss.SSS"+suffix)}function format(inputString){inputString||(inputString=this.isUtc()?hooks.defaultFormatUtc:hooks.defaultFormat);var output=formatMoment(this,inputString);return this.localeData().postformat(output)}function from(time,withoutSuffix){return this.isValid()&&(isMoment(time)&&time.isValid()||createLocal(time).isValid())?createDuration({to:this,from:time}).locale(this.locale()).humanize(!withoutSuffix):this.localeData().invalidDate()}function fromNow(withoutSuffix){return this.from(createLocal(),withoutSuffix)}function to(time,withoutSuffix){return this.isValid()&&(isMoment(time)&&time.isValid()||createLocal(time).isValid())?createDuration({from:this,to:time}).locale(this.locale()).humanize(!withoutSuffix):this.localeData().invalidDate()}function toNow(withoutSuffix){return this.to(createLocal(),withoutSuffix)}
// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale(key){var newLocaleData;return void 0===key?this._locale._abbr:(newLocaleData=getLocale(key),null!=newLocaleData&&(this._locale=newLocaleData),this)}function localeData(){return this._locale}function startOf(units){
// the following switch intentionally omits break keywords
// to utilize falling through the cases.
switch(units=normalizeUnits(units)){case"year":this.month(0);/* falls through */
case"quarter":case"month":this.date(1);/* falls through */
case"week":case"isoWeek":case"day":case"date":this.hours(0);/* falls through */
case"hour":this.minutes(0);/* falls through */
case"minute":this.seconds(0);/* falls through */
case"second":this.milliseconds(0)}
// weeks are a special case
// quarters are also special
return"week"===units&&this.weekday(0),"isoWeek"===units&&this.isoWeekday(1),"quarter"===units&&this.month(3*Math.floor(this.month()/3)),this}function endOf(units){
// 'date' is an alias for 'day', so it should be considered as such.
return void 0===(units=normalizeUnits(units))||"millisecond"===units?this:("date"===units&&(units="day"),this.startOf(units).add(1,"isoWeek"===units?"week":units).subtract(1,"ms"))}function valueOf(){return this._d.valueOf()-6e4*(this._offset||0)}function unix(){return Math.floor(this.valueOf()/1e3)}function toDate(){return new Date(this.valueOf())}function toArray(){var m=this;return[m.year(),m.month(),m.date(),m.hour(),m.minute(),m.second(),m.millisecond()]}function toObject(){var m=this;return{years:m.year(),months:m.month(),date:m.date(),hours:m.hours(),minutes:m.minutes(),seconds:m.seconds(),milliseconds:m.milliseconds()}}function toJSON(){
// new Date(NaN).toJSON() === null
return this.isValid()?this.toISOString():null}function isValid$2(){return isValid(this)}function parsingFlags(){return extend({},getParsingFlags(this))}function invalidAt(){return getParsingFlags(this).overflow}function creationData(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function addWeekYearFormatToken(token,getter){addFormatToken(0,[token,token.length],0,getter)}
// MOMENTS
function getSetWeekYear(input){return getSetWeekYearHelper.call(this,input,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function getSetISOWeekYear(input){return getSetWeekYearHelper.call(this,input,this.isoWeek(),this.isoWeekday(),1,4)}function getISOWeeksInYear(){return weeksInYear(this.year(),1,4)}function getWeeksInYear(){var weekInfo=this.localeData()._week;return weeksInYear(this.year(),weekInfo.dow,weekInfo.doy)}function getSetWeekYearHelper(input,week,weekday,dow,doy){var weeksTarget;return null==input?weekOfYear(this,dow,doy).year:(weeksTarget=weeksInYear(input,dow,doy),week>weeksTarget&&(week=weeksTarget),setWeekAll.call(this,input,week,weekday,dow,doy))}function setWeekAll(weekYear,week,weekday,dow,doy){var dayOfYearData=dayOfYearFromWeeks(weekYear,week,weekday,dow,doy),date=createUTCDate(dayOfYearData.year,0,dayOfYearData.dayOfYear);return this.year(date.getUTCFullYear()),this.month(date.getUTCMonth()),this.date(date.getUTCDate()),this}
// MOMENTS
function getSetQuarter(input){return null==input?Math.ceil((this.month()+1)/3):this.month(3*(input-1)+this.month()%3)}
// HELPERS
// MOMENTS
function getSetDayOfYear(input){var dayOfYear=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==input?dayOfYear:this.add(input-dayOfYear,"d")}function parseMs(input,array){array[MILLISECOND]=toInt(1e3*("0."+input))}
// MOMENTS
function getZoneAbbr(){return this._isUTC?"UTC":""}function getZoneName(){return this._isUTC?"Coordinated Universal Time":""}function createUnix(input){return createLocal(1e3*input)}function createInZone(){return createLocal.apply(null,arguments).parseZone()}function preParsePostFormat(string){return string}function get$1(format,index,field,setter){var locale=getLocale(),utc=createUTC().set(setter,index);return locale[field](utc,format)}function listMonthsImpl(format,index,field){if(isNumber(format)&&(index=format,format=void 0),format=format||"",null!=index)return get$1(format,index,field,"month");var i,out=[];for(i=0;i<12;i++)out[i]=get$1(format,i,field,"month");return out}
// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl(localeSorted,format,index,field){"boolean"==typeof localeSorted?(isNumber(format)&&(index=format,format=void 0),format=format||""):(format=localeSorted,index=format,localeSorted=!1,isNumber(format)&&(index=format,format=void 0),format=format||"");var locale=getLocale(),shift=localeSorted?locale._week.dow:0;if(null!=index)return get$1(format,(index+shift)%7,field,"day");var i,out=[];for(i=0;i<7;i++)out[i]=get$1(format,(i+shift)%7,field,"day");return out}function listMonths(format,index){return listMonthsImpl(format,index,"months")}function listMonthsShort(format,index){return listMonthsImpl(format,index,"monthsShort")}function listWeekdays(localeSorted,format,index){return listWeekdaysImpl(localeSorted,format,index,"weekdays")}function listWeekdaysShort(localeSorted,format,index){return listWeekdaysImpl(localeSorted,format,index,"weekdaysShort")}function listWeekdaysMin(localeSorted,format,index){return listWeekdaysImpl(localeSorted,format,index,"weekdaysMin")}function abs(){var data=this._data;return this._milliseconds=mathAbs(this._milliseconds),this._days=mathAbs(this._days),this._months=mathAbs(this._months),data.milliseconds=mathAbs(data.milliseconds),data.seconds=mathAbs(data.seconds),data.minutes=mathAbs(data.minutes),data.hours=mathAbs(data.hours),data.months=mathAbs(data.months),data.years=mathAbs(data.years),this}function addSubtract$1(duration,input,value,direction){var other=createDuration(input,value);return duration._milliseconds+=direction*other._milliseconds,duration._days+=direction*other._days,duration._months+=direction*other._months,duration._bubble()}
// supports only 2.0-style add(1, 's') or add(duration)
function add$1(input,value){return addSubtract$1(this,input,value,1)}
// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract$1(input,value){return addSubtract$1(this,input,value,-1)}function absCeil(number){return number<0?Math.floor(number):Math.ceil(number)}function bubble(){var seconds,minutes,hours,years,monthsFromDays,milliseconds=this._milliseconds,days=this._days,months=this._months,data=this._data;
// if we have a mix of positive and negative values, bubble down first
// check: https://github.com/moment/moment/issues/2166
// The following code bubbles up values, see the tests for
// examples of what that means.
// convert days to months
// 12 months -> 1 year
return milliseconds>=0&&days>=0&&months>=0||milliseconds<=0&&days<=0&&months<=0||(milliseconds+=864e5*absCeil(monthsToDays(months)+days),days=0,months=0),data.milliseconds=milliseconds%1e3,seconds=absFloor(milliseconds/1e3),data.seconds=seconds%60,minutes=absFloor(seconds/60),data.minutes=minutes%60,hours=absFloor(minutes/60),data.hours=hours%24,days+=absFloor(hours/24),monthsFromDays=absFloor(daysToMonths(days)),months+=monthsFromDays,days-=absCeil(monthsToDays(monthsFromDays)),years=absFloor(months/12),months%=12,data.days=days,data.months=months,data.years=years,this}function daysToMonths(days){
// 400 years have 146097 days (taking into account leap year rules)
// 400 years have 12 months === 4800
return 4800*days/146097}function monthsToDays(months){
// the reverse of daysToMonths
return 146097*months/4800}function as(units){if(!this.isValid())return NaN;var days,months,milliseconds=this._milliseconds;if("month"===(units=normalizeUnits(units))||"year"===units)return days=this._days+milliseconds/864e5,months=this._months+daysToMonths(days),"month"===units?months:months/12;switch(
// handle milliseconds separately because of floating point math errors (issue #1867)
days=this._days+Math.round(monthsToDays(this._months)),units){case"week":return days/7+milliseconds/6048e5;case"day":return days+milliseconds/864e5;case"hour":return 24*days+milliseconds/36e5;case"minute":return 1440*days+milliseconds/6e4;case"second":return 86400*days+milliseconds/1e3;
// Math.floor prevents floating point math errors here
case"millisecond":return Math.floor(864e5*days)+milliseconds;default:throw new Error("Unknown unit "+units)}}
// TODO: Use this.as('ms')?
function valueOf$1(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*toInt(this._months/12):NaN}function makeAs(alias){return function(){return this.as(alias)}}function get$2(units){return units=normalizeUnits(units),this.isValid()?this[units+"s"]():NaN}function makeGetter(name){return function(){return this.isValid()?this._data[name]:NaN}}function weeks(){return absFloor(this.days()/7)}
// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string,number,withoutSuffix,isFuture,locale){return locale.relativeTime(number||1,!!withoutSuffix,string,isFuture)}function relativeTime$1(posNegDuration,withoutSuffix,locale){var duration=createDuration(posNegDuration).abs(),seconds=round(duration.as("s")),minutes=round(duration.as("m")),hours=round(duration.as("h")),days=round(duration.as("d")),months=round(duration.as("M")),years=round(duration.as("y")),a=seconds<=thresholds.ss&&["s",seconds]||seconds<thresholds.s&&["ss",seconds]||minutes<=1&&["m"]||minutes<thresholds.m&&["mm",minutes]||hours<=1&&["h"]||hours<thresholds.h&&["hh",hours]||days<=1&&["d"]||days<thresholds.d&&["dd",days]||months<=1&&["M"]||months<thresholds.M&&["MM",months]||years<=1&&["y"]||["yy",years];return a[2]=withoutSuffix,a[3]=+posNegDuration>0,a[4]=locale,substituteTimeAgo.apply(null,a)}
// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding(roundingFunction){return void 0===roundingFunction?round:"function"==typeof roundingFunction&&(round=roundingFunction,!0)}
// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold(threshold,limit){return void 0!==thresholds[threshold]&&(void 0===limit?thresholds[threshold]:(thresholds[threshold]=limit,"s"===threshold&&(thresholds.ss=limit-1),!0))}function humanize(withSuffix){if(!this.isValid())return this.localeData().invalidDate();var locale=this.localeData(),output=relativeTime$1(this,!withSuffix,locale);return withSuffix&&(output=locale.pastFuture(+this,output)),locale.postformat(output)}function toISOString$1(){
// for ISO strings we do not use the normal bubbling rules:
//  * milliseconds bubble up until they become hours
//  * days do not bubble at all
//  * months bubble up until they become years
// This is because there is no context-free conversion between hours and days
// (think of clock changes)
// and also not between days and months (28-31 days per month)
if(!this.isValid())return this.localeData().invalidDate();var minutes,hours,years,seconds=abs$1(this._milliseconds)/1e3,days=abs$1(this._days),months=abs$1(this._months);
// 3600 seconds -> 60 minutes -> 1 hour
minutes=absFloor(seconds/60),hours=absFloor(minutes/60),seconds%=60,minutes%=60,
// 12 months -> 1 year
years=absFloor(months/12),months%=12;
// inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
var Y=years,M=months,D=days,h=hours,m=minutes,s=seconds,total=this.asSeconds();return total?(total<0?"-":"")+"P"+(Y?Y+"Y":"")+(M?M+"M":"")+(D?D+"D":"")+(h||m||s?"T":"")+(h?h+"H":"")+(m?m+"M":"")+(s?s+"S":""):"P0D"}var hookCallback,some;some=Array.prototype.some?Array.prototype.some:function(fun){for(var t=Object(this),len=t.length>>>0,i=0;i<len;i++)if(i in t&&fun.call(this,t[i],i,t))return!0;return!1};var some$1=some,momentProperties=hooks.momentProperties=[],updateInProgress=!1,deprecations={};hooks.suppressDeprecationWarnings=!1,hooks.deprecationHandler=null;var keys;keys=Object.keys?Object.keys:function(obj){var i,res=[];for(i in obj)hasOwnProp(obj,i)&&res.push(i);return res};var indexOf,keys$1=keys,defaultCalendar={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},defaultLongDateFormat={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},defaultDayOfMonthOrdinalParse=/\d{1,2}/,defaultRelativeTime={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},aliases={},priorities={},formattingTokens=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,localFormattingTokens=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,formatFunctions={},formatTokenFunctions={},match1=/\d/,match2=/\d\d/,match3=/\d{3}/,match4=/\d{4}/,match6=/[+-]?\d{6}/,match1to2=/\d\d?/,match3to4=/\d\d\d\d?/,match5to6=/\d\d\d\d\d\d?/,match1to3=/\d{1,3}/,match1to4=/\d{1,4}/,match1to6=/[+-]?\d{1,6}/,matchUnsigned=/\d+/,matchSigned=/[+-]?\d+/,matchOffset=/Z|[+-]\d\d:?\d\d/gi,matchShortOffset=/Z|[+-]\d\d(?::?\d\d)?/gi,matchTimestamp=/[+-]?\d+(\.\d{1,3})?/,matchWord=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,regexes={},tokens={},YEAR=0,MONTH=1,DATE=2,HOUR=3,MINUTE=4,SECOND=5,MILLISECOND=6,WEEK=7,WEEKDAY=8;indexOf=Array.prototype.indexOf?Array.prototype.indexOf:function(o){
// I know
var i;for(i=0;i<this.length;++i)if(this[i]===o)return i;return-1};var indexOf$1=indexOf;
// FORMATTING
addFormatToken("M",["MM",2],"Mo",function(){return this.month()+1}),addFormatToken("MMM",0,0,function(format){return this.localeData().monthsShort(this,format)}),addFormatToken("MMMM",0,0,function(format){return this.localeData().months(this,format)}),
// ALIASES
addUnitAlias("month","M"),
// PRIORITY
addUnitPriority("month",8),
// PARSING
addRegexToken("M",match1to2),addRegexToken("MM",match1to2,match2),addRegexToken("MMM",function(isStrict,locale){return locale.monthsShortRegex(isStrict)}),addRegexToken("MMMM",function(isStrict,locale){return locale.monthsRegex(isStrict)}),addParseToken(["M","MM"],function(input,array){array[MONTH]=toInt(input)-1}),addParseToken(["MMM","MMMM"],function(input,array,config,token){var month=config._locale.monthsParse(input,token,config._strict);
// if we didn't find a month name, mark the date as invalid.
null!=month?array[MONTH]=month:getParsingFlags(config).invalidMonth=input});
// LOCALES
var MONTHS_IN_FORMAT=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,defaultLocaleMonths="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),defaultLocaleMonthsShort="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),defaultMonthsShortRegex=matchWord,defaultMonthsRegex=matchWord;
// FORMATTING
addFormatToken("Y",0,0,function(){var y=this.year();return y<=9999?""+y:"+"+y}),addFormatToken(0,["YY",2],0,function(){return this.year()%100}),addFormatToken(0,["YYYY",4],0,"year"),addFormatToken(0,["YYYYY",5],0,"year"),addFormatToken(0,["YYYYYY",6,!0],0,"year"),
// ALIASES
addUnitAlias("year","y"),
// PRIORITIES
addUnitPriority("year",1),
// PARSING
addRegexToken("Y",matchSigned),addRegexToken("YY",match1to2,match2),addRegexToken("YYYY",match1to4,match4),addRegexToken("YYYYY",match1to6,match6),addRegexToken("YYYYYY",match1to6,match6),addParseToken(["YYYYY","YYYYYY"],YEAR),addParseToken("YYYY",function(input,array){array[YEAR]=2===input.length?hooks.parseTwoDigitYear(input):toInt(input)}),addParseToken("YY",function(input,array){array[YEAR]=hooks.parseTwoDigitYear(input)}),addParseToken("Y",function(input,array){array[YEAR]=parseInt(input,10)}),
// HOOKS
hooks.parseTwoDigitYear=function(input){return toInt(input)+(toInt(input)>68?1900:2e3)};
// MOMENTS
var getSetYear=makeGetSet("FullYear",!0);
// FORMATTING
addFormatToken("w",["ww",2],"wo","week"),addFormatToken("W",["WW",2],"Wo","isoWeek"),
// ALIASES
addUnitAlias("week","w"),addUnitAlias("isoWeek","W"),
// PRIORITIES
addUnitPriority("week",5),addUnitPriority("isoWeek",5),
// PARSING
addRegexToken("w",match1to2),addRegexToken("ww",match1to2,match2),addRegexToken("W",match1to2),addRegexToken("WW",match1to2,match2),addWeekParseToken(["w","ww","W","WW"],function(input,week,config,token){week[token.substr(0,1)]=toInt(input)});var defaultLocaleWeek={dow:0,// Sunday is the first day of the week.
doy:6};
// FORMATTING
addFormatToken("d",0,"do","day"),addFormatToken("dd",0,0,function(format){return this.localeData().weekdaysMin(this,format)}),addFormatToken("ddd",0,0,function(format){return this.localeData().weekdaysShort(this,format)}),addFormatToken("dddd",0,0,function(format){return this.localeData().weekdays(this,format)}),addFormatToken("e",0,0,"weekday"),addFormatToken("E",0,0,"isoWeekday"),
// ALIASES
addUnitAlias("day","d"),addUnitAlias("weekday","e"),addUnitAlias("isoWeekday","E"),
// PRIORITY
addUnitPriority("day",11),addUnitPriority("weekday",11),addUnitPriority("isoWeekday",11),
// PARSING
addRegexToken("d",match1to2),addRegexToken("e",match1to2),addRegexToken("E",match1to2),addRegexToken("dd",function(isStrict,locale){return locale.weekdaysMinRegex(isStrict)}),addRegexToken("ddd",function(isStrict,locale){return locale.weekdaysShortRegex(isStrict)}),addRegexToken("dddd",function(isStrict,locale){return locale.weekdaysRegex(isStrict)}),addWeekParseToken(["dd","ddd","dddd"],function(input,week,config,token){var weekday=config._locale.weekdaysParse(input,token,config._strict);
// if we didn't get a weekday name, mark the date as invalid
null!=weekday?week.d=weekday:getParsingFlags(config).invalidWeekday=input}),addWeekParseToken(["d","e","E"],function(input,week,config,token){week[token]=toInt(input)});
// LOCALES
var defaultLocaleWeekdays="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),defaultLocaleWeekdaysShort="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),defaultLocaleWeekdaysMin="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),defaultWeekdaysRegex=matchWord,defaultWeekdaysShortRegex=matchWord,defaultWeekdaysMinRegex=matchWord;addFormatToken("H",["HH",2],0,"hour"),addFormatToken("h",["hh",2],0,hFormat),addFormatToken("k",["kk",2],0,kFormat),addFormatToken("hmm",0,0,function(){return""+hFormat.apply(this)+zeroFill(this.minutes(),2)}),addFormatToken("hmmss",0,0,function(){return""+hFormat.apply(this)+zeroFill(this.minutes(),2)+zeroFill(this.seconds(),2)}),addFormatToken("Hmm",0,0,function(){return""+this.hours()+zeroFill(this.minutes(),2)}),addFormatToken("Hmmss",0,0,function(){return""+this.hours()+zeroFill(this.minutes(),2)+zeroFill(this.seconds(),2)}),meridiem("a",!0),meridiem("A",!1),
// ALIASES
addUnitAlias("hour","h"),
// PRIORITY
addUnitPriority("hour",13),addRegexToken("a",matchMeridiem),addRegexToken("A",matchMeridiem),addRegexToken("H",match1to2),addRegexToken("h",match1to2),addRegexToken("k",match1to2),addRegexToken("HH",match1to2,match2),addRegexToken("hh",match1to2,match2),addRegexToken("kk",match1to2,match2),addRegexToken("hmm",match3to4),addRegexToken("hmmss",match5to6),addRegexToken("Hmm",match3to4),addRegexToken("Hmmss",match5to6),addParseToken(["H","HH"],HOUR),addParseToken(["k","kk"],function(input,array,config){var kInput=toInt(input);array[HOUR]=24===kInput?0:kInput}),addParseToken(["a","A"],function(input,array,config){config._isPm=config._locale.isPM(input),config._meridiem=input}),addParseToken(["h","hh"],function(input,array,config){array[HOUR]=toInt(input),getParsingFlags(config).bigHour=!0}),addParseToken("hmm",function(input,array,config){var pos=input.length-2;array[HOUR]=toInt(input.substr(0,pos)),array[MINUTE]=toInt(input.substr(pos)),getParsingFlags(config).bigHour=!0}),addParseToken("hmmss",function(input,array,config){var pos1=input.length-4,pos2=input.length-2;array[HOUR]=toInt(input.substr(0,pos1)),array[MINUTE]=toInt(input.substr(pos1,2)),array[SECOND]=toInt(input.substr(pos2)),getParsingFlags(config).bigHour=!0}),addParseToken("Hmm",function(input,array,config){var pos=input.length-2;array[HOUR]=toInt(input.substr(0,pos)),array[MINUTE]=toInt(input.substr(pos))}),addParseToken("Hmmss",function(input,array,config){var pos1=input.length-4,pos2=input.length-2;array[HOUR]=toInt(input.substr(0,pos1)),array[MINUTE]=toInt(input.substr(pos1,2)),array[SECOND]=toInt(input.substr(pos2))});var globalLocale,defaultLocaleMeridiemParse=/[ap]\.?m?\.?/i,getSetHour=makeGetSet("Hours",!0),baseConfig={calendar:defaultCalendar,longDateFormat:defaultLongDateFormat,invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:defaultDayOfMonthOrdinalParse,relativeTime:defaultRelativeTime,months:defaultLocaleMonths,monthsShort:defaultLocaleMonthsShort,week:defaultLocaleWeek,weekdays:defaultLocaleWeekdays,weekdaysMin:defaultLocaleWeekdaysMin,weekdaysShort:defaultLocaleWeekdaysShort,meridiemParse:defaultLocaleMeridiemParse},locales={},localeFamilies={},extendedIsoRegex=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,basicIsoRegex=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,tzRegex=/Z|[+-]\d\d(?::?\d\d)?/,isoDates=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],
// YYYYMM is NOT allowed by the standard
["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],isoTimes=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],aspNetJsonRegex=/^\/?Date\((\-?\d+)/i,basicRfcRegex=/^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;hooks.createFromInputFallback=deprecate("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(config){config._d=new Date(config._i+(config._useUTC?" UTC":""))}),
// constant that refers to the ISO standard
hooks.ISO_8601=function(){},
// constant that refers to the RFC 2822 form
hooks.RFC_2822=function(){};var prototypeMin=deprecate("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var other=createLocal.apply(null,arguments);return this.isValid()&&other.isValid()?other<this?this:other:createInvalid()}),prototypeMax=deprecate("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var other=createLocal.apply(null,arguments);return this.isValid()&&other.isValid()?other>this?this:other:createInvalid()}),now=function(){return Date.now?Date.now():+new Date},ordering=["year","quarter","month","week","day","hour","minute","second","millisecond"];offset("Z",":"),offset("ZZ",""),
// PARSING
addRegexToken("Z",matchShortOffset),addRegexToken("ZZ",matchShortOffset),addParseToken(["Z","ZZ"],function(input,array,config){config._useUTC=!0,config._tzm=offsetFromString(matchShortOffset,input)});
// HELPERS
// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset=/([\+\-]|\d\d)/gi;
// HOOKS
// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
hooks.updateOffset=function(){};
// ASP.NET json date format regex
var aspNetRegex=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,isoRegex=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;createDuration.fn=Duration.prototype,createDuration.invalid=createInvalid$1;var add=createAdder(1,"add"),subtract=createAdder(-1,"subtract");hooks.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",hooks.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var lang=deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(key){return void 0===key?this.localeData():this.locale(key)});
// FORMATTING
addFormatToken(0,["gg",2],0,function(){return this.weekYear()%100}),addFormatToken(0,["GG",2],0,function(){return this.isoWeekYear()%100}),addWeekYearFormatToken("gggg","weekYear"),addWeekYearFormatToken("ggggg","weekYear"),addWeekYearFormatToken("GGGG","isoWeekYear"),addWeekYearFormatToken("GGGGG","isoWeekYear"),
// ALIASES
addUnitAlias("weekYear","gg"),addUnitAlias("isoWeekYear","GG"),
// PRIORITY
addUnitPriority("weekYear",1),addUnitPriority("isoWeekYear",1),
// PARSING
addRegexToken("G",matchSigned),addRegexToken("g",matchSigned),addRegexToken("GG",match1to2,match2),addRegexToken("gg",match1to2,match2),addRegexToken("GGGG",match1to4,match4),addRegexToken("gggg",match1to4,match4),addRegexToken("GGGGG",match1to6,match6),addRegexToken("ggggg",match1to6,match6),addWeekParseToken(["gggg","ggggg","GGGG","GGGGG"],function(input,week,config,token){week[token.substr(0,2)]=toInt(input)}),addWeekParseToken(["gg","GG"],function(input,week,config,token){week[token]=hooks.parseTwoDigitYear(input)}),
// FORMATTING
addFormatToken("Q",0,"Qo","quarter"),
// ALIASES
addUnitAlias("quarter","Q"),
// PRIORITY
addUnitPriority("quarter",7),
// PARSING
addRegexToken("Q",match1),addParseToken("Q",function(input,array){array[MONTH]=3*(toInt(input)-1)}),
// FORMATTING
addFormatToken("D",["DD",2],"Do","date"),
// ALIASES
addUnitAlias("date","D"),
// PRIOROITY
addUnitPriority("date",9),
// PARSING
addRegexToken("D",match1to2),addRegexToken("DD",match1to2,match2),addRegexToken("Do",function(isStrict,locale){
// TODO: Remove "ordinalParse" fallback in next major release.
return isStrict?locale._dayOfMonthOrdinalParse||locale._ordinalParse:locale._dayOfMonthOrdinalParseLenient}),addParseToken(["D","DD"],DATE),addParseToken("Do",function(input,array){array[DATE]=toInt(input.match(match1to2)[0],10)});
// MOMENTS
var getSetDayOfMonth=makeGetSet("Date",!0);
// FORMATTING
addFormatToken("DDD",["DDDD",3],"DDDo","dayOfYear"),
// ALIASES
addUnitAlias("dayOfYear","DDD"),
// PRIORITY
addUnitPriority("dayOfYear",4),
// PARSING
addRegexToken("DDD",match1to3),addRegexToken("DDDD",match3),addParseToken(["DDD","DDDD"],function(input,array,config){config._dayOfYear=toInt(input)}),
// FORMATTING
addFormatToken("m",["mm",2],0,"minute"),
// ALIASES
addUnitAlias("minute","m"),
// PRIORITY
addUnitPriority("minute",14),
// PARSING
addRegexToken("m",match1to2),addRegexToken("mm",match1to2,match2),addParseToken(["m","mm"],MINUTE);
// MOMENTS
var getSetMinute=makeGetSet("Minutes",!1);
// FORMATTING
addFormatToken("s",["ss",2],0,"second"),
// ALIASES
addUnitAlias("second","s"),
// PRIORITY
addUnitPriority("second",15),
// PARSING
addRegexToken("s",match1to2),addRegexToken("ss",match1to2,match2),addParseToken(["s","ss"],SECOND);
// MOMENTS
var getSetSecond=makeGetSet("Seconds",!1);
// FORMATTING
addFormatToken("S",0,0,function(){return~~(this.millisecond()/100)}),addFormatToken(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),addFormatToken(0,["SSS",3],0,"millisecond"),addFormatToken(0,["SSSS",4],0,function(){return 10*this.millisecond()}),addFormatToken(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),addFormatToken(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),addFormatToken(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),addFormatToken(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),addFormatToken(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),
// ALIASES
addUnitAlias("millisecond","ms"),
// PRIORITY
addUnitPriority("millisecond",16),
// PARSING
addRegexToken("S",match1to3,match1),addRegexToken("SS",match1to3,match2),addRegexToken("SSS",match1to3,match3);var token;for(token="SSSS";token.length<=9;token+="S")addRegexToken(token,matchUnsigned);for(token="S";token.length<=9;token+="S")addParseToken(token,parseMs);
// MOMENTS
var getSetMillisecond=makeGetSet("Milliseconds",!1);
// FORMATTING
addFormatToken("z",0,0,"zoneAbbr"),addFormatToken("zz",0,0,"zoneName");var proto=Moment.prototype;proto.add=add,proto.calendar=calendar$1,proto.clone=clone,proto.diff=diff,proto.endOf=endOf,proto.format=format,proto.from=from,proto.fromNow=fromNow,proto.to=to,proto.toNow=toNow,proto.get=stringGet,proto.invalidAt=invalidAt,proto.isAfter=isAfter,proto.isBefore=isBefore,proto.isBetween=isBetween,proto.isSame=isSame,proto.isSameOrAfter=isSameOrAfter,proto.isSameOrBefore=isSameOrBefore,proto.isValid=isValid$2,proto.lang=lang,proto.locale=locale,proto.localeData=localeData,proto.max=prototypeMax,proto.min=prototypeMin,proto.parsingFlags=parsingFlags,proto.set=stringSet,proto.startOf=startOf,proto.subtract=subtract,proto.toArray=toArray,proto.toObject=toObject,proto.toDate=toDate,proto.toISOString=toISOString,proto.inspect=inspect,proto.toJSON=toJSON,proto.toString=toString,proto.unix=unix,proto.valueOf=valueOf,proto.creationData=creationData,
// Year
proto.year=getSetYear,proto.isLeapYear=getIsLeapYear,
// Week Year
proto.weekYear=getSetWeekYear,proto.isoWeekYear=getSetISOWeekYear,
// Quarter
proto.quarter=proto.quarters=getSetQuarter,
// Month
proto.month=getSetMonth,proto.daysInMonth=getDaysInMonth,
// Week
proto.week=proto.weeks=getSetWeek,proto.isoWeek=proto.isoWeeks=getSetISOWeek,proto.weeksInYear=getWeeksInYear,proto.isoWeeksInYear=getISOWeeksInYear,
// Day
proto.date=getSetDayOfMonth,proto.day=proto.days=getSetDayOfWeek,proto.weekday=getSetLocaleDayOfWeek,proto.isoWeekday=getSetISODayOfWeek,proto.dayOfYear=getSetDayOfYear,
// Hour
proto.hour=proto.hours=getSetHour,
// Minute
proto.minute=proto.minutes=getSetMinute,
// Second
proto.second=proto.seconds=getSetSecond,
// Millisecond
proto.millisecond=proto.milliseconds=getSetMillisecond,
// Offset
proto.utcOffset=getSetOffset,proto.utc=setOffsetToUTC,proto.local=setOffsetToLocal,proto.parseZone=setOffsetToParsedOffset,proto.hasAlignedHourOffset=hasAlignedHourOffset,proto.isDST=isDaylightSavingTime,proto.isLocal=isLocal,proto.isUtcOffset=isUtcOffset,proto.isUtc=isUtc,proto.isUTC=isUtc,
// Timezone
proto.zoneAbbr=getZoneAbbr,proto.zoneName=getZoneName,
// Deprecations
proto.dates=deprecate("dates accessor is deprecated. Use date instead.",getSetDayOfMonth),proto.months=deprecate("months accessor is deprecated. Use month instead",getSetMonth),proto.years=deprecate("years accessor is deprecated. Use year instead",getSetYear),proto.zone=deprecate("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",getSetZone),proto.isDSTShifted=deprecate("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",isDaylightSavingTimeShifted);var proto$1=Locale.prototype;proto$1.calendar=calendar,proto$1.longDateFormat=longDateFormat,proto$1.invalidDate=invalidDate,proto$1.ordinal=ordinal,proto$1.preparse=preParsePostFormat,proto$1.postformat=preParsePostFormat,proto$1.relativeTime=relativeTime,proto$1.pastFuture=pastFuture,proto$1.set=set,
// Month
proto$1.months=localeMonths,proto$1.monthsShort=localeMonthsShort,proto$1.monthsParse=localeMonthsParse,proto$1.monthsRegex=monthsRegex,proto$1.monthsShortRegex=monthsShortRegex,
// Week
proto$1.week=localeWeek,proto$1.firstDayOfYear=localeFirstDayOfYear,proto$1.firstDayOfWeek=localeFirstDayOfWeek,
// Day of Week
proto$1.weekdays=localeWeekdays,proto$1.weekdaysMin=localeWeekdaysMin,proto$1.weekdaysShort=localeWeekdaysShort,proto$1.weekdaysParse=localeWeekdaysParse,proto$1.weekdaysRegex=weekdaysRegex,proto$1.weekdaysShortRegex=weekdaysShortRegex,proto$1.weekdaysMinRegex=weekdaysMinRegex,
// Hours
proto$1.isPM=localeIsPM,proto$1.meridiem=localeMeridiem,getSetGlobalLocale("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(number){var b=number%10;return number+(1===toInt(number%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th")}}),
// Side effect imports
hooks.lang=deprecate("moment.lang is deprecated. Use moment.locale instead.",getSetGlobalLocale),hooks.langData=deprecate("moment.langData is deprecated. Use moment.localeData instead.",getLocale);var mathAbs=Math.abs,asMilliseconds=makeAs("ms"),asSeconds=makeAs("s"),asMinutes=makeAs("m"),asHours=makeAs("h"),asDays=makeAs("d"),asWeeks=makeAs("w"),asMonths=makeAs("M"),asYears=makeAs("y"),milliseconds=makeGetter("milliseconds"),seconds=makeGetter("seconds"),minutes=makeGetter("minutes"),hours=makeGetter("hours"),days=makeGetter("days"),months=makeGetter("months"),years=makeGetter("years"),round=Math.round,thresholds={ss:44,// a few seconds to seconds
s:45,// seconds to minute
m:45,// minutes to hour
h:22,// hours to day
d:26,// days to month
M:11},abs$1=Math.abs,proto$2=Duration.prototype;
// Deprecations
// Side effect imports
// FORMATTING
// PARSING
// Side effect imports
// This is done to register the method called with moment()
// without creating circular dependencies.
return proto$2.isValid=isValid$1,proto$2.abs=abs,proto$2.add=add$1,proto$2.subtract=subtract$1,proto$2.as=as,proto$2.asMilliseconds=asMilliseconds,proto$2.asSeconds=asSeconds,proto$2.asMinutes=asMinutes,proto$2.asHours=asHours,proto$2.asDays=asDays,proto$2.asWeeks=asWeeks,proto$2.asMonths=asMonths,proto$2.asYears=asYears,proto$2.valueOf=valueOf$1,proto$2._bubble=bubble,proto$2.get=get$2,proto$2.milliseconds=milliseconds,proto$2.seconds=seconds,proto$2.minutes=minutes,proto$2.hours=hours,proto$2.days=days,proto$2.weeks=weeks,proto$2.months=months,proto$2.years=years,proto$2.humanize=humanize,proto$2.toISOString=toISOString$1,proto$2.toString=toISOString$1,proto$2.toJSON=toISOString$1,proto$2.locale=locale,proto$2.localeData=localeData,proto$2.toIsoString=deprecate("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",toISOString$1),proto$2.lang=lang,addFormatToken("X",0,0,"unix"),addFormatToken("x",0,0,"valueOf"),addRegexToken("x",matchSigned),addRegexToken("X",matchTimestamp),addParseToken("X",function(input,array,config){config._d=new Date(1e3*parseFloat(input,10))}),addParseToken("x",function(input,array,config){config._d=new Date(toInt(input))}),hooks.version="2.18.1",function(callback){hookCallback=callback}(createLocal),hooks.fn=proto,hooks.min=min,hooks.max=max,hooks.now=now,hooks.utc=createUTC,hooks.unix=createUnix,hooks.months=listMonths,hooks.isDate=isDate,hooks.locale=getSetGlobalLocale,hooks.invalid=createInvalid,hooks.duration=createDuration,hooks.isMoment=isMoment,hooks.weekdays=listWeekdays,hooks.parseZone=createInZone,hooks.localeData=getLocale,hooks.isDuration=isDuration,hooks.monthsShort=listMonthsShort,hooks.weekdaysMin=listWeekdaysMin,hooks.defineLocale=defineLocale,hooks.updateLocale=updateLocale,hooks.locales=listLocales,hooks.weekdaysShort=listWeekdaysShort,hooks.normalizeUnits=normalizeUnits,hooks.relativeTimeRounding=getSetRelativeTimeRounding,hooks.relativeTimeThreshold=getSetRelativeTimeThreshold,hooks.calendarFormat=getCalendarFormat,hooks.prototype=proto,hooks}),/*!
 * Pikaday
 *
 * Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/dbushell/Pikaday
 */
function(root,factory){"use strict";var moment;if("object"==typeof exports){
// CommonJS module
// Load moment.js as an optional dependency
try{moment=require("moment")}catch(e){}module.exports=factory(moment)}else"function"==typeof define&&define.amd?
// AMD. Register as an anonymous module.
define(function(req){try{moment=req("moment")}catch(e){}return factory(moment)}):root.Pikaday=factory(root.moment)}(this,function(moment){"use strict";/**
     * feature detection and helper functions
     */
var hasMoment="function"==typeof moment,hasEventListeners=!!window.addEventListener,document=window.document,sto=window.setTimeout,addEvent=function(el,e,callback,capture){hasEventListeners?el.addEventListener(e,callback,!!capture):el.attachEvent("on"+e,callback)},removeEvent=function(el,e,callback,capture){hasEventListeners?el.removeEventListener(e,callback,!!capture):el.detachEvent("on"+e,callback)},fireEvent=function(el,eventName,data){var ev;document.createEvent?(ev=document.createEvent("HTMLEvents"),ev.initEvent(eventName,!0,!1),ev=extend(ev,data),el.dispatchEvent(ev)):document.createEventObject&&(ev=document.createEventObject(),ev=extend(ev,data),el.fireEvent("on"+eventName,ev))},trim=function(str){return str.trim?str.trim():str.replace(/^\s+|\s+$/g,"")},hasClass=function(el,cn){return-1!==(" "+el.className+" ").indexOf(" "+cn+" ")},addClass=function(el,cn){hasClass(el,cn)||(el.className=""===el.className?cn:el.className+" "+cn)},removeClass=function(el,cn){el.className=trim((" "+el.className+" ").replace(" "+cn+" "," "))},isArray=function(obj){return/Array/.test(Object.prototype.toString.call(obj))},isDate=function(obj){return/Date/.test(Object.prototype.toString.call(obj))&&!isNaN(obj.getTime())},isWeekend=function(date){var day=date.getDay();return 0===day||6===day},isLeapYear=function(year){
// solution by Matti Virkkunen: http://stackoverflow.com/a/4881951
return year%4==0&&year%100!=0||year%400==0},getDaysInMonth=function(year,month){return[31,isLeapYear(year)?29:28,31,30,31,30,31,31,30,31,30,31][month]},setToStartOfDay=function(date){isDate(date)&&date.setHours(0,0,0,0)},compareDates=function(a,b){
// weak date comparison (use setToStartOfDay(date) to ensure correct result)
return a.getTime()===b.getTime()},extend=function(to,from,overwrite){var prop,hasProp;for(prop in from)hasProp=void 0!==to[prop],hasProp&&"object"==typeof from[prop]&&null!==from[prop]&&void 0===from[prop].nodeName?isDate(from[prop])?overwrite&&(to[prop]=new Date(from[prop].getTime())):isArray(from[prop])?overwrite&&(to[prop]=from[prop].slice(0)):to[prop]=extend({},from[prop],overwrite):!overwrite&&hasProp||(to[prop]=from[prop]);return to},adjustCalendar=function(calendar){return calendar.month<0&&(calendar.year-=Math.ceil(Math.abs(calendar.month)/12),calendar.month+=12),calendar.month>11&&(calendar.year+=Math.floor(Math.abs(calendar.month)/12),calendar.month-=12),calendar},/**
     * defaults and localisation
     */
defaults={
// bind the picker to a form field
field:null,
// automatically show/hide the picker on `field` focus (default `true` if `field` is set)
bound:void 0,
// position of the datepicker, relative to the field (default to bottom & left)
// ('bottom' & 'left' keywords are not used, 'top' & 'right' are modifier on the bottom/left position)
position:"bottom left",
// automatically fit in the viewport even if it means repositioning from the position option
reposition:!0,
// the default output format for `.toString()` and `field` value
format:"YYYY-MM-DD",
// the initial date to view when first opened
defaultDate:null,
// make the `defaultDate` the initial selected value
setDefaultDate:!1,
// first day of week (0: Sunday, 1: Monday etc)
firstDay:0,
// the default flag for moment's strict date parsing
formatStrict:!1,
// the minimum/earliest date that can be selected
minDate:null,
// the maximum/latest date that can be selected
maxDate:null,
// number of years either side, or array of upper/lower range
yearRange:10,
// show week numbers at head of row
showWeekNumber:!1,
// Week picker mode
pickWholeWeek:!1,
// used internally (don't config outside)
minYear:0,maxYear:9999,minMonth:void 0,maxMonth:void 0,startRange:null,endRange:null,isRTL:!1,
// Additional text to append to the year in the calendar title
yearSuffix:"",
// Render the month after year in the calendar title
showMonthAfterYear:!1,
// Render days of the calendar grid that fall in the next or previous month
showDaysInNextAndPreviousMonths:!1,
// how many months are visible
numberOfMonths:1,
// when numberOfMonths is used, this will help you to choose where the main calendar will be (default `left`, can be set to `right`)
// only used for the first display or when a selected date is not visible
mainCalendar:"left",
// Specify a DOM element to render the calendar in
container:void 0,
// Blur field when date is selected
blurFieldOnSelect:!0,
// internationalization
i18n:{previousMonth:"Previous Month",nextMonth:"Next Month",months:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},
// Theme Classname
theme:null,
// events array
events:[],
// callback function
onSelect:null,onOpen:null,onClose:null,onDraw:null},/**
     * templating functions to abstract HTML rendering
     */
renderDayName=function(opts,day,abbr){for(day+=opts.firstDay;day>=7;)day-=7;return abbr?opts.i18n.weekdaysShort[day]:opts.i18n.weekdays[day]},renderDay=function(opts){var arr=[],ariaSelected="false";if(opts.isEmpty){if(!opts.showDaysInNextAndPreviousMonths)return'<td class="is-empty"></td>';arr.push("is-outside-current-month")}return opts.isDisabled&&arr.push("is-disabled"),opts.isToday&&arr.push("is-today"),opts.isSelected&&(arr.push("is-selected"),ariaSelected="true"),opts.hasEvent&&arr.push("has-event"),opts.isInRange&&arr.push("is-inrange"),opts.isStartRange&&arr.push("is-startrange"),opts.isEndRange&&arr.push("is-endrange"),'<td data-day="'+opts.day+'" class="'+arr.join(" ")+'" aria-selected="'+ariaSelected+'"><button class="pika-button pika-day" type="button" data-pika-year="'+opts.year+'" data-pika-month="'+opts.month+'" data-pika-day="'+opts.day+'">'+opts.day+"</button></td>"},renderWeek=function(d,m,y){
// Lifted from http://javascript.about.com/library/blweekyear.htm, lightly modified.
var onejan=new Date(y,0,1);return'<td class="pika-week">'+Math.ceil(((new Date(y,m,d)-onejan)/864e5+onejan.getDay()+1)/7)+"</td>"},renderRow=function(days,isRTL,pickWholeWeek,isRowSelected){return'<tr class="pika-row'+(pickWholeWeek?" pick-whole-week":"")+(isRowSelected?" is-selected":"")+'">'+(isRTL?days.reverse():days).join("")+"</tr>"},renderBody=function(rows){return"<tbody>"+rows.join("")+"</tbody>"},renderHead=function(opts){var i,arr=[];for(opts.showWeekNumber&&arr.push("<th></th>"),i=0;i<7;i++)arr.push('<th scope="col"><abbr title="'+renderDayName(opts,i)+'">'+renderDayName(opts,i,!0)+"</abbr></th>");return"<thead><tr>"+(opts.isRTL?arr.reverse():arr).join("")+"</tr></thead>"},renderTitle=function(instance,c,year,month,refYear,randId){var i,j,arr,monthHtml,yearHtml,opts=instance._o,isMinYear=year===opts.minYear,isMaxYear=year===opts.maxYear,html='<div id="'+randId+'" class="pika-title" role="heading" aria-live="assertive">',prev=!0,next=!0;for(arr=[],i=0;i<12;i++)arr.push('<option value="'+(year===refYear?i-c:12+i-c)+'"'+(i===month?' selected="selected"':"")+(isMinYear&&i<opts.minMonth||isMaxYear&&i>opts.maxMonth?'disabled="disabled"':"")+">"+opts.i18n.months[i]+"</option>");for(monthHtml='<div class="pika-label">'+opts.i18n.months[month]+'<select class="pika-select pika-select-month" tabindex="-1">'+arr.join("")+"</select></div>",isArray(opts.yearRange)?(i=opts.yearRange[0],j=opts.yearRange[1]+1):(i=year-opts.yearRange,j=1+year+opts.yearRange),arr=[];i<j&&i<=opts.maxYear;i++)i>=opts.minYear&&arr.push('<option value="'+i+'"'+(i===year?' selected="selected"':"")+">"+i+"</option>");return yearHtml='<div class="pika-label">'+year+opts.yearSuffix+'<select class="pika-select pika-select-year" tabindex="-1">'+arr.join("")+"</select></div>",opts.showMonthAfterYear?html+=yearHtml+monthHtml:html+=monthHtml+yearHtml,isMinYear&&(0===month||opts.minMonth>=month)&&(prev=!1),isMaxYear&&(11===month||opts.maxMonth<=month)&&(next=!1),0===c&&(html+='<button class="pika-prev'+(prev?"":" is-disabled")+'" type="button">'+opts.i18n.previousMonth+"</button>"),c===instance._o.numberOfMonths-1&&(html+='<button class="pika-next'+(next?"":" is-disabled")+'" type="button">'+opts.i18n.nextMonth+"</button>"),html+="</div>"},renderTable=function(opts,data,randId){return'<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="'+randId+'">'+renderHead(opts)+renderBody(data)+"</table>"},/**
     * Pikaday constructor
     */
Pikaday=function(options){var self=this,opts=self.config(options);self._onMouseDown=function(e){if(self._v){e=e||window.event;var target=e.target||e.srcElement;if(target)if(hasClass(target,"is-disabled")||(!hasClass(target,"pika-button")||hasClass(target,"is-empty")||hasClass(target.parentNode,"is-disabled")?hasClass(target,"pika-prev")?self.prevMonth():hasClass(target,"pika-next")&&self.nextMonth():(self.setDate(new Date(target.getAttribute("data-pika-year"),target.getAttribute("data-pika-month"),target.getAttribute("data-pika-day"))),opts.bound&&sto(function(){self.hide(),opts.blurFieldOnSelect&&opts.field&&opts.field.blur()},100))),hasClass(target,"pika-select"))self._c=!0;else{
// if this is touch event prevent mouse events emulation
if(!e.preventDefault)return e.returnValue=!1,!1;e.preventDefault()}}},self._onChange=function(e){e=e||window.event;var target=e.target||e.srcElement;target&&(hasClass(target,"pika-select-month")?self.gotoMonth(target.value):hasClass(target,"pika-select-year")&&self.gotoYear(target.value))},self._onKeyChange=function(e){if(e=e||window.event,self.isVisible())switch(e.keyCode){case 13:case 27:opts.field&&opts.field.blur();break;case 37:e.preventDefault(),self.adjustDate("subtract",1);break;case 38:self.adjustDate("subtract",7);break;case 39:self.adjustDate("add",1);break;case 40:self.adjustDate("add",7)}},self._onInputChange=function(e){var date;e.firedBy!==self&&(hasMoment?(date=moment(opts.field.value,opts.format,opts.formatStrict),date=date&&date.isValid()?date.toDate():null):date=new Date(Date.parse(opts.field.value)),isDate(date)&&self.setDate(date),self._v||self.show())},self._onInputFocus=function(){self.show()},self._onInputClick=function(){self.show()},self._onInputBlur=function(){
// IE allows pika div to gain focus; catch blur the input field
var pEl=document.activeElement;do{if(hasClass(pEl,"pika-single"))return}while(pEl=pEl.parentNode);self._c||(self._b=sto(function(){self.hide()},50)),self._c=!1},self._onClick=function(e){e=e||window.event;var target=e.target||e.srcElement,pEl=target;if(target){!hasEventListeners&&hasClass(target,"pika-select")&&(target.onchange||(target.setAttribute("onchange","return;"),addEvent(target,"change",self._onChange)));do{if(hasClass(pEl,"pika-single")||pEl===opts.trigger)return}while(pEl=pEl.parentNode);self._v&&target!==opts.trigger&&pEl!==opts.trigger&&self.hide()}},self.el=document.createElement("div"),self.el.className="pika-single"+(opts.isRTL?" is-rtl":"")+(opts.theme?" "+opts.theme:""),addEvent(self.el,"mousedown",self._onMouseDown,!0),addEvent(self.el,"touchend",self._onMouseDown,!0),addEvent(self.el,"change",self._onChange),addEvent(document,"keydown",self._onKeyChange),opts.field&&(opts.container?opts.container.appendChild(self.el):opts.bound?document.body.appendChild(self.el):opts.field.parentNode.insertBefore(self.el,opts.field.nextSibling),addEvent(opts.field,"change",self._onInputChange),opts.defaultDate||(hasMoment&&opts.field.value?opts.defaultDate=moment(opts.field.value,opts.format).toDate():opts.defaultDate=new Date(Date.parse(opts.field.value)),opts.setDefaultDate=!0));var defDate=opts.defaultDate;isDate(defDate)?opts.setDefaultDate?self.setDate(defDate,!0):self.gotoDate(defDate):self.gotoDate(new Date),opts.bound?(this.hide(),self.el.className+=" is-bound",addEvent(opts.trigger,"click",self._onInputClick),addEvent(opts.trigger,"focus",self._onInputFocus),addEvent(opts.trigger,"blur",self._onInputBlur)):this.show()};/**
     * public Pikaday API
     */
return Pikaday.prototype={/**
         * configure functionality
         */
config:function(options){this._o||(this._o=extend({},defaults,!0));var opts=extend(this._o,options,!0);opts.isRTL=!!opts.isRTL,opts.field=opts.field&&opts.field.nodeName?opts.field:null,opts.theme="string"==typeof opts.theme&&opts.theme?opts.theme:null,opts.bound=!!(void 0!==opts.bound?opts.field&&opts.bound:opts.field),opts.trigger=opts.trigger&&opts.trigger.nodeName?opts.trigger:opts.field,opts.disableWeekends=!!opts.disableWeekends,opts.disableDayFn="function"==typeof opts.disableDayFn?opts.disableDayFn:null;var nom=parseInt(opts.numberOfMonths,10)||1;if(opts.numberOfMonths=nom>4?4:nom,isDate(opts.minDate)||(opts.minDate=!1),isDate(opts.maxDate)||(opts.maxDate=!1),opts.minDate&&opts.maxDate&&opts.maxDate<opts.minDate&&(opts.maxDate=opts.minDate=!1),opts.minDate&&this.setMinDate(opts.minDate),opts.maxDate&&this.setMaxDate(opts.maxDate),isArray(opts.yearRange)){var fallback=(new Date).getFullYear()-10;opts.yearRange[0]=parseInt(opts.yearRange[0],10)||fallback,opts.yearRange[1]=parseInt(opts.yearRange[1],10)||fallback}else opts.yearRange=Math.abs(parseInt(opts.yearRange,10))||defaults.yearRange,opts.yearRange>100&&(opts.yearRange=100);return opts},/**
         * return a formatted string of the current selection (using Moment.js if available)
         */
toString:function(format){return isDate(this._d)?hasMoment?moment(this._d).format(format||this._o.format):this._d.toDateString():""},/**
         * return a Moment.js object of the current selection (if available)
         */
getMoment:function(){return hasMoment?moment(this._d):null},/**
         * set the current selection from a Moment.js object (if available)
         */
setMoment:function(date,preventOnSelect){hasMoment&&moment.isMoment(date)&&this.setDate(date.toDate(),preventOnSelect)},/**
         * return a Date object of the current selection
         */
getDate:function(){return isDate(this._d)?new Date(this._d.getTime()):null},/**
         * set the current selection
         */
setDate:function(date,preventOnSelect){if(!date)return this._d=null,this._o.field&&(this._o.field.value="",fireEvent(this._o.field,"change",{firedBy:this})),this.draw();if("string"==typeof date&&(date=new Date(Date.parse(date))),isDate(date)){var min=this._o.minDate,max=this._o.maxDate;isDate(min)&&date<min?date=min:isDate(max)&&date>max&&(date=max),this._d=new Date(date.getTime()),setToStartOfDay(this._d),this.gotoDate(this._d),this._o.field&&(this._o.field.value=this.toString(),fireEvent(this._o.field,"change",{firedBy:this})),preventOnSelect||"function"!=typeof this._o.onSelect||this._o.onSelect.call(this,this.getDate())}},/**
         * change view to a specific date
         */
gotoDate:function(date){var newCalendar=!0;if(isDate(date)){if(this.calendars){var firstVisibleDate=new Date(this.calendars[0].year,this.calendars[0].month,1),lastVisibleDate=new Date(this.calendars[this.calendars.length-1].year,this.calendars[this.calendars.length-1].month,1),visibleDate=date.getTime();
// get the end of the month
lastVisibleDate.setMonth(lastVisibleDate.getMonth()+1),lastVisibleDate.setDate(lastVisibleDate.getDate()-1),newCalendar=visibleDate<firstVisibleDate.getTime()||lastVisibleDate.getTime()<visibleDate}newCalendar&&(this.calendars=[{month:date.getMonth(),year:date.getFullYear()}],"right"===this._o.mainCalendar&&(this.calendars[0].month+=1-this._o.numberOfMonths)),this.adjustCalendars()}},adjustDate:function(sign,days){var newDay,day=this.getDate()||new Date,difference=24*parseInt(days)*60*60*1e3;"add"===sign?newDay=new Date(day.valueOf()+difference):"subtract"===sign&&(newDay=new Date(day.valueOf()-difference)),hasMoment&&("add"===sign?newDay=moment(day).add(days,"days").toDate():"subtract"===sign&&(newDay=moment(day).subtract(days,"days").toDate())),this.setDate(newDay)},adjustCalendars:function(){this.calendars[0]=adjustCalendar(this.calendars[0]);for(var c=1;c<this._o.numberOfMonths;c++)this.calendars[c]=adjustCalendar({month:this.calendars[0].month+c,year:this.calendars[0].year});this.draw()},gotoToday:function(){this.gotoDate(new Date)},/**
         * change view to a specific month (zero-index, e.g. 0: January)
         */
gotoMonth:function(month){isNaN(month)||(this.calendars[0].month=parseInt(month,10),this.adjustCalendars())},nextMonth:function(){this.calendars[0].month++,this.adjustCalendars()},prevMonth:function(){this.calendars[0].month--,this.adjustCalendars()},/**
         * change view to a specific full year (e.g. "2012")
         */
gotoYear:function(year){isNaN(year)||(this.calendars[0].year=parseInt(year,10),this.adjustCalendars())},/**
         * change the minDate
         */
setMinDate:function(value){value instanceof Date?(setToStartOfDay(value),this._o.minDate=value,this._o.minYear=value.getFullYear(),this._o.minMonth=value.getMonth()):(this._o.minDate=defaults.minDate,this._o.minYear=defaults.minYear,this._o.minMonth=defaults.minMonth,this._o.startRange=defaults.startRange),this.draw()},/**
         * change the maxDate
         */
setMaxDate:function(value){value instanceof Date?(setToStartOfDay(value),this._o.maxDate=value,this._o.maxYear=value.getFullYear(),this._o.maxMonth=value.getMonth()):(this._o.maxDate=defaults.maxDate,this._o.maxYear=defaults.maxYear,this._o.maxMonth=defaults.maxMonth,this._o.endRange=defaults.endRange),this.draw()},setStartRange:function(value){this._o.startRange=value},setEndRange:function(value){this._o.endRange=value},/**
         * refresh the HTML
         */
draw:function(force){if(this._v||force){var randId,opts=this._o,minYear=opts.minYear,maxYear=opts.maxYear,minMonth=opts.minMonth,maxMonth=opts.maxMonth,html="";this._y<=minYear&&(this._y=minYear,!isNaN(minMonth)&&this._m<minMonth&&(this._m=minMonth)),this._y>=maxYear&&(this._y=maxYear,!isNaN(maxMonth)&&this._m>maxMonth&&(this._m=maxMonth)),randId="pika-title-"+Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,2);for(var c=0;c<opts.numberOfMonths;c++)html+='<div class="pika-lendar">'+renderTitle(this,c,this.calendars[c].year,this.calendars[c].month,this.calendars[0].year,randId)+this.render(this.calendars[c].year,this.calendars[c].month,randId)+"</div>";this.el.innerHTML=html,opts.bound&&"hidden"!==opts.field.type&&sto(function(){opts.trigger.focus()},1),"function"==typeof this._o.onDraw&&this._o.onDraw(this),opts.bound&&
// let the screen reader user know to use arrow keys
opts.field.setAttribute("aria-label","Use the arrow keys to pick a date")}},adjustPosition:function(){var field,pEl,width,height,viewportWidth,viewportHeight,scrollTop,left,top,clientRect;if(!this._o.container){if(this.el.style.position="absolute",field=this._o.trigger,pEl=field,width=this.el.offsetWidth,height=this.el.offsetHeight,viewportWidth=window.innerWidth||document.documentElement.clientWidth,viewportHeight=window.innerHeight||document.documentElement.clientHeight,scrollTop=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop,"function"==typeof field.getBoundingClientRect)clientRect=field.getBoundingClientRect(),left=clientRect.left+window.pageXOffset,top=clientRect.bottom+window.pageYOffset;else for(left=pEl.offsetLeft,top=pEl.offsetTop+pEl.offsetHeight;pEl=pEl.offsetParent;)left+=pEl.offsetLeft,top+=pEl.offsetTop;
// default position is bottom & left
(this._o.reposition&&left+width>viewportWidth||this._o.position.indexOf("right")>-1&&left-width+field.offsetWidth>0)&&(left=left-width+field.offsetWidth),(this._o.reposition&&top+height>viewportHeight+scrollTop||this._o.position.indexOf("top")>-1&&top-height-field.offsetHeight>0)&&(top=top-height-field.offsetHeight),this.el.style.left=left+"px",this.el.style.top=top+"px"}},/**
         * render HTML for a particular month
         */
render:function(year,month,randId){var opts=this._o,now=new Date,days=getDaysInMonth(year,month),before=new Date(year,month,1).getDay(),data=[],row=[];setToStartOfDay(now),opts.firstDay>0&&(before-=opts.firstDay)<0&&(before+=7);for(var previousMonth=0===month?11:month-1,nextMonth=11===month?0:month+1,yearOfPreviousMonth=0===month?year-1:year,yearOfNextMonth=11===month?year+1:year,daysInPreviousMonth=getDaysInMonth(yearOfPreviousMonth,previousMonth),cells=days+before,after=cells;after>7;)after-=7;cells+=7-after;for(var isWeekSelected=!1,i=0,r=0;i<cells;i++){var day=new Date(year,month,i-before+1),isSelected=!!isDate(this._d)&&compareDates(day,this._d),isToday=compareDates(day,now),hasEvent=-1!==opts.events.indexOf(day.toDateString()),isEmpty=i<before||i>=days+before,dayNumber=i-before+1,monthNumber=month,yearNumber=year,isStartRange=opts.startRange&&compareDates(opts.startRange,day),isEndRange=opts.endRange&&compareDates(opts.endRange,day),isInRange=opts.startRange&&opts.endRange&&opts.startRange<day&&day<opts.endRange,isDisabled=opts.minDate&&day<opts.minDate||opts.maxDate&&day>opts.maxDate||opts.disableWeekends&&isWeekend(day)||opts.disableDayFn&&opts.disableDayFn(day);isEmpty&&(i<before?(dayNumber=daysInPreviousMonth+dayNumber,monthNumber=previousMonth,yearNumber=yearOfPreviousMonth):(dayNumber-=days,monthNumber=nextMonth,yearNumber=yearOfNextMonth));var dayConfig={day:dayNumber,month:monthNumber,year:yearNumber,hasEvent:hasEvent,isSelected:isSelected,isToday:isToday,isDisabled:isDisabled,isEmpty:isEmpty,isStartRange:isStartRange,isEndRange:isEndRange,isInRange:isInRange,showDaysInNextAndPreviousMonths:opts.showDaysInNextAndPreviousMonths};opts.pickWholeWeek&&isSelected&&(isWeekSelected=!0),row.push(renderDay(dayConfig)),7==++r&&(opts.showWeekNumber&&row.unshift(renderWeek(i-before,month,year)),data.push(renderRow(row,opts.isRTL,opts.pickWholeWeek,isWeekSelected)),row=[],r=0,isWeekSelected=!1)}return renderTable(opts,data,randId)},isVisible:function(){return this._v},show:function(){this.isVisible()||(this._v=!0,this.draw(),this._o.bound&&(addEvent(document,"click",this._onClick),this.adjustPosition()),removeClass(this.el,"is-hidden"),"function"==typeof this._o.onOpen&&this._o.onOpen.call(this))},hide:function(){var v=this._v;!1!==v&&(this._o.bound&&removeEvent(document,"click",this._onClick),this.el.style.position="static",// reset
this.el.style.left="auto",this.el.style.top="auto",addClass(this.el,"is-hidden"),this._v=!1,void 0!==v&&"function"==typeof this._o.onClose&&this._o.onClose.call(this))},/**
         * GAME OVER
         */
destroy:function(){this.hide(),removeEvent(this.el,"mousedown",this._onMouseDown,!0),removeEvent(this.el,"touchend",this._onMouseDown,!0),removeEvent(this.el,"change",this._onChange),this._o.field&&(removeEvent(this._o.field,"change",this._onInputChange),this._o.bound&&(removeEvent(this._o.trigger,"click",this._onInputClick),removeEvent(this._o.trigger,"focus",this._onInputFocus),removeEvent(this._o.trigger,"blur",this._onInputBlur))),this.el.parentNode&&this.el.parentNode.removeChild(this.el)}},Pikaday}),/*!
 * Pikaday jQuery plugin.
 *
 * Copyright © 2013 David Bushell | BSD & MIT license | https://github.com/dbushell/Pikaday
 */
function(root,factory){"use strict";"object"==typeof exports?
// CommonJS module
factory(require("jquery"),require("../pikaday")):"function"==typeof define&&define.amd?
// AMD. Register as an anonymous module.
define(["jquery","pikaday"],factory):
// Browser globals
factory(root.jQuery,root.Pikaday)}(this,function($,Pikaday){"use strict";$.fn.pikaday=function(){var args=arguments;return args&&args.length||(args=[{}]),this.each(function(){var self=$(this),plugin=self.data("pikaday");if(plugin instanceof Pikaday)"string"==typeof args[0]&&"function"==typeof plugin[args[0]]&&(plugin[args[0]].apply(plugin,Array.prototype.slice.call(args,1)),"destroy"===args[0]&&self.removeData("pikaday"));else if("object"==typeof args[0]){var options=$.extend({},args[0]);options.field=self[0],self.data("pikaday",new Pikaday(options))}})}}),$(function(){$(".date").pikaday({firstDay:1,
//minDate: new Date(),
format:"MM/DD/YYYY"}),$(".date").on("change",function(){console.log($(this).val())})}),$(function(){}),function(window,document,$){function args(elem){var newAttrs={},rinlinejQuery=/^jQuery\d+$/;return $.each(elem.attributes,function(i,attr){attr.specified&&!rinlinejQuery.test(attr.name)&&(newAttrs[attr.name]=attr.value)}),newAttrs}function clearPlaceholder(event,value){var input=this,$input=$(input);if(input.value==$input.attr("placeholder")&&$input.hasClass("placeholder"))if($input.data("placeholder-password")){if($input=$input.hide().next().show().attr("id",$input.removeAttr("id").data("placeholder-id")),!0===event)return $input[0].value=value;$input.focus()}else input.value="",$input.removeClass("placeholder"),input==safeActiveElement()&&input.select()}function setPlaceholder(){var $replacement,input=this,$input=$(input),id=this.id;if(""==input.value){if("password"==input.type){if(!$input.data("placeholder-textinput")){try{$replacement=$input.clone().attr({type:"text"})}catch(e){$replacement=$("<input>").attr($.extend(args(this),{type:"text"}))}$replacement.removeAttr("name").data({"placeholder-password":$input,"placeholder-id":id}).bind("focus.placeholder",clearPlaceholder),$input.data({"placeholder-textinput":$replacement,"placeholder-id":id}).before($replacement)}$input=$input.removeAttr("id").hide().prev().attr("id",id).show()}$input.addClass("placeholder"),$input[0].value=$input.attr("placeholder")}else $input.removeClass("placeholder")}function safeActiveElement(){try{return document.activeElement}catch(err){}}var hooks,placeholder,isInputSupported="placeholder"in document.createElement("input"),isTextareaSupported="placeholder"in document.createElement("textarea"),prototype=$.fn,valHooks=$.valHooks,propHooks=$.propHooks;isInputSupported&&isTextareaSupported?(placeholder=prototype.placeholder=function(){return this},placeholder.input=placeholder.textarea=!0):(placeholder=prototype.placeholder=function(){var $this=this;return $this.filter((isInputSupported?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":clearPlaceholder,"blur.placeholder":setPlaceholder}).data("placeholder-enabled",!0).trigger("blur.placeholder"),$this},placeholder.input=isInputSupported,placeholder.textarea=isTextareaSupported,hooks={get:function(element){var $element=$(element),$passwordInput=$element.data("placeholder-password");return $passwordInput?$passwordInput[0].value:$element.data("placeholder-enabled")&&$element.hasClass("placeholder")?"":element.value},set:function(element,value){var $element=$(element),$passwordInput=$element.data("placeholder-password");return $passwordInput?$passwordInput[0].value=value:$element.data("placeholder-enabled")?(""==value?(element.value=value,element!=safeActiveElement()&&setPlaceholder.call(element)):$element.hasClass("placeholder")?clearPlaceholder.call(element,!0,value)||(element.value=value):element.value=value,$element):element.value=value}},isInputSupported||(valHooks.input=hooks,propHooks.value=hooks),isTextareaSupported||(valHooks.textarea=hooks,propHooks.value=hooks),$(function(){$(document).delegate("form","submit.placeholder",function(){var $inputs=$(".placeholder",this).each(clearPlaceholder);setTimeout(function(){$inputs.each(setPlaceholder)},10)})}),$(window).bind("beforeunload.placeholder",function(){$(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery),/*!
	* moreLessBlock v0.1
	* URL...
	* Copyright (c) 2016
	* Dual licensed under the MIT and GPL licenses:
	* http://www.opensource.org/licenses/mit-license.php
	* http://www.gnu.org/licenses/gpl.html
**/
function($){$.fn.moreLessBlock=function(options){
// allows for chaining
return this.each(function(){
// Variables
var $wrap=$(this),$content=$wrap.find(".more-content"),$toggle=$wrap.find(".more-toggle"),showTxt=$toggle.text(),active=!!$wrap.hasClass("active"),defaults={lessTxt:"Show Less"},settings=$.extend({},defaults,options),plugin={};
// Init
plugin.init=function(){$content.removeClass("hide").hide(),// hide content
plugin.moreClick()},
// show/hide
plugin.showHide=function(){active?(
// then hide
$content.slideUp("fast"),$toggle.text(showTxt)):(
// then show
$content.slideDown("fast"),$toggle.text(settings.lessTxt)),active=!active},
// moreClick
plugin.moreClick=function(){$toggle.on("click",function(){plugin.showHide()})},
// START IT ALL
plugin.init()})}}(jQuery),$(function(){
// Init - moreLessBlock
$(".more-block").moreLessBlock()}),/*!
	* moreLessChars v0.1
	* based on: http://code-tricks.com/jquery-read-more-less-example/
	* Dual licensed under the MIT and GPL licenses:
	* http://www.opensource.org/licenses/mit-license.php
	* http://www.gnu.org/licenses/gpl.html
**/
function($){$.fn.moreLessChars=function(options){
// allows for chaining
return this.each(function(){
// Variables
var $sep,$extra,$wrap=$(this),$content=$wrap.find(".moreless-content"),content=$content.html(),$btn=$wrap.find(".moreless-btn"),$btnTxt=$btn.find(".txt"),defaults=($btnTxt.html(),{showChar:100,// How many characters are shown by default
septext:"...",moretext:"Show More",lesstext:"Show Less"}),settings=$.extend({},defaults,options),plugin={};plugin.init=function(){
// calls all methods that are needed from the start
plugin.separateContent(),plugin.contentToggle()},plugin.separateContent=function(){if(content.length>settings.showChar){$btn.removeClass("hide");var intro=content.substr(0,settings.showChar),wordBreakpoint=Math.min(intro.length,intro.lastIndexOf(" "));intro=intro.substr(0,wordBreakpoint);var extra=content.substr(wordBreakpoint,content.length-wordBreakpoint),html=intro+'<span class="moreless-sep">'+settings.septext+'&nbsp;</span><span class="moreless-extra">'+extra+"</span>";$content.html(html),$wrap.removeClass("hide"),$sep=$wrap.find(".moreless-sep"),$extra=$wrap.find(".moreless-extra")}else $wrap.removeClass("hide")},plugin.contentToggle=function(){$btn.on("click",function(e){e.preventDefault(),$btn.hasClass("less")?($btn.removeClass("less"),$btnTxt.html(settings.moretext)):($btn.addClass("less"),$btnTxt.html(settings.lesstext)),$sep.toggle(),$extra.toggle()})},
// START IT ALL
plugin.init()})}}(jQuery),$(function(){
// Init - more/less chars
$(".moreless-chars").moreLessChars({showChar:60,// character limit to cut at
septext:"...",// separator at end of abbreviated text
moretext:"Read More",// inactive state text
lesstext:"Read Less"})}),/*!
	* moreLessHeight v0.4
	* Dual licensed under the MIT and GPL licenses:
	* http://www.opensource.org/licenses/mit-license.php
	* http://www.gnu.org/licenses/gpl.html
**/
function($){$.moreLessHeight=function(el,options){
// Default Settings
var defaults={contentHeight:150,lessTxt:"Show Less"},plugin=this;plugin.settings={};
// Vars
var $el=$(el),el=el,$moreContent=$el.find(".moreh-content"),$moreInner=$el.find(".moreh-inner"),$moreToggle=$el.find(".moreh-toggle"),moreContentHeight=$moreContent.height(),innerHeight=$moreInner.height(),moreTxt=$moreToggle.text();
// Plugin Methods
plugin.init=function(){
// Hide learn more if too short
if(plugin.settings=$.extend({},defaults,options),$moreInner.height()<plugin.settings.contentHeight)return void $el.addClass("disable");
// Start/Call certain functions
plugin.moreClick()},plugin.moreClick=function(){$moreToggle.on("click",function(e){e.preventDefault(),$moreContent.hasClass("active")?(
// Active -> Not
$moreContent.removeClass("active"),$moreToggle.text(moreTxt),$moreContent.animate({height:moreContentHeight})):
// Not -> Active
$moreContent.animate({height:innerHeight},function(){$moreContent.addClass("active"),$moreToggle.text(plugin.settings.lessTxt)})})},plugin.init()},
// Add the plugin to the jQuery.fn object
$.fn.moreLessHeight=function(options){return this.each(function(){if(void 0==$(this).data("moreLessHeight")){var plugin=new $.moreLessHeight(this,options);$(this).data("moreLessHeight",plugin)}})}}(jQuery),$(function(){
// Init - more/less height
$(window).load(function(){$(".more-height").moreLessHeight({contentHeight:160,// match it up with CSS height
lessTxt:"Show Less"})})}),function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,void 0!==document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):!0===d?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&!0===a.options.adaptiveHeight&&!1===a.options.vertical){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),!0===e.options.rtl&&!1===e.options.vertical&&(b=-b),!1===e.transformsEnabled?!1===e.options.vertical?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):!1===e.cssTransitions?(!0===e.options.rtl&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),!1===e.options.vertical?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),!1===e.options.vertical?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};!1===b.options.fade?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,!1===b.options.fade?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(!1===a.options.infinite&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1==0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;!0===b.options.arrows&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),!0!==b.options.infinite&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(!0===b.options.dots&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(!0===b.options.centerMode||!0===b.options.swipeToSlide)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),!0===b.options.draggable&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(!1===d.originalSettings.mobileFirst?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),!0===b&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),!0===b&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,!0===b&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||!1===h||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!=0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d;if(c=this.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),!0===b.options.arrows&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),!0===b.options.accessibility&&b.$list.off("keydown.slick",b.keyHandler),!0===b.options.focusOnSelect&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){!1===this.shouldClick&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",!1===b.options.fade?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;!1===c.cssTransitions?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;!1===b.cssTransitions?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){return this.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(!0===a.options.infinite)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(!0===a.options.centerMode)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),!0===b.options.infinite?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!=0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),!0===b.options.centerMode&&!0===b.options.infinite?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:!0===b.options.centerMode&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=!1===b.options.vertical?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,!0===b.options.variableWidth&&(f=b.slideCount<=b.options.slidesToShow||!1===b.options.infinite?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=!0===b.options.rtl?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,!0===b.options.centerMode&&(f=b.slideCount<=b.options.slidesToShow||!1===b.options.infinite?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=!0===b.options.rtl?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){return this.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(!1===a.options.infinite?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var d,e,b=this;return e=!0===b.options.centerMode?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,!0===b.options.swipeToSlide?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){this.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),!0===c.options.accessibility&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;!0===a.options.arrows&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;!0===b.options.dots&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),!0===b.options.dots&&!0===b.options.pauseOnDotsHover&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),!0===b.options.accessibility&&b.$list.on("keydown.slick",b.keyHandler),!0===b.options.focusOnSelect&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;!0===a.options.arrows&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),!0===a.options.dots&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&!0===b.options.accessibility?b.changeSlide({data:{message:!0===b.options.rtl?"next":"previous"}}):39===a.keyCode&&!0===b.options.accessibility&&b.changeSlide({data:{message:!0===b.options.rtl?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;!0===b.options.centerMode?!0===b.options.infinite?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=b.options.slidesToShow/2+1+2+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),!0===b.options.fade&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),!0===b.options.accessibility&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),!0===c.options.adaptiveHeight&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),!0===b.options.focusOnSelect&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=!0===b?0:d.slideCount-1):a=!0===b?--a:a,!(d.slideCount<1||0>a||a>d.slideCount-1)&&(d.unload(),!0===c?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};!0===b.options.rtl&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,!1===b.transformsEnabled?b.$slideTrack.css(c):(c={},!1===b.cssTransitions?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;!1===a.options.vertical?!0===a.options.centerMode&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),!0===a.options.centerMode&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),!1===a.options.vertical&&!1===a.options.variableWidth?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):!0===a.options.variableWidth?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();!1===a.options.variableWidth&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,!0===b.options.rtl?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&!0===a.options.adaptiveHeight&&!1===a.options.vertical){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":void 0!==arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),!1===a.options.fade?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=!0===a.options.vertical?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&!0===a.options.useCSS&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&!1!==a.animType&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&!1!==a.animType},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),!0===b.options.centerMode?(c=Math.floor(b.options.slidesToShow/2),!0===b.options.infinite&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=!0===b.options.infinite?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(!0===b.options.fade&&(b.options.centerMode=!1),!0===b.options.infinite&&!1===b.options.fade&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=!0===b.options.centerMode?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,!0===i.animating&&!0===i.options.waitForAnimate||!0===i.options.fade&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(!1===b&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,!1===i.options.infinite&&!1===i.options.centerMode&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(!1===i.options.fade&&(d=i.currentSlide,!0!==c?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):!1===i.options.infinite&&!0===i.options.centerMode&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(!1===i.options.fade&&(d=i.currentSlide,!0!==c?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!=0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!=0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),!0===i.options.fade?(!0!==c?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(!0!==c?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;!0===a.options.arrows&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),!0===a.options.dots&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?!1===e.options.rtl?"left":"right":360>=d&&d>=315?!1===e.options.rtl?"left":"right":d>=135&&225>=d?!1===e.options.rtl?"right":"left":!0===e.options.verticalSwiping?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=!(b.touchObject.swipeLength>10),void 0===b.touchObject.curX)return!1;if(!0===b.touchObject.edgeHit&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(!1===b.options.swipe||"ontouchend"in document&&!1===b.options.swipe||!1===b.options.draggable&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,!0===b.options.verticalSwiping&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!(!b.dragging||h&&1!==h.length)&&(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),!0===b.options.verticalSwiping&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(!1===b.options.rtl?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),!0===b.options.verticalSwiping&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,!1===b.options.infinite&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),!1===b.options.vertical?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,!0===b.options.verticalSwiping&&(b.swipeLeft=d+f*g),!0!==b.options.fade&&!1!==b.options.touchMove&&(!0===b.animating?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft))):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var a=this;Math.floor(a.options.slidesToShow/2),!0===a.options.arrows&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&!1===a.options.centerMode?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&!0===a.options.centerMode&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||void 0===c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),void 0!==g)return g;return a}}),//Images Slider Default
$(".slick-slider-exp1").slick({autoplay:!0,autoplaySpeed:3e3,arrows:!0,dots:!0,mobileFirst:!0,prevArrow:'<span class="slick-prev">&lt;</span>',nextArrow:'<span class="slick-next">&gt;</span>',slidesToShow:1,slidesToScroll:1}),function(a,b,c){"use strict";function d(b,p,q){function K(c){var e=Gb.length;if(yb.old=a.extend({},yb),wb=tb?0:ub[rb.horizontal?"width":"height"](),Bb=zb[rb.horizontal?"width":"height"](),xb=tb?b:vb[rb.horizontal?"outerWidth":"outerHeight"](),Gb.length=0,yb.start=0,yb.end=H(xb-wb,0),Rb){Ib.length,Hb=vb.children(rb.itemSelector),Ib.length=0;var f,g=j(vb,rb.horizontal?"paddingLeft":"paddingTop"),h=j(vb,rb.horizontal?"paddingRight":"paddingBottom"),i="border-box"===a(Hb).css("boxSizing"),l="none"!==Hb.css("float"),m=0,n=Hb.length-1;xb=0,Hb.each(function(b,c){var d=a(c),e=c.getBoundingClientRect(),i=G(rb.horizontal?e.width||e.right-e.left:e.height||e.bottom-e.top),k=j(d,rb.horizontal?"marginLeft":"marginTop"),o=j(d,rb.horizontal?"marginRight":"marginBottom"),p=i+k+o,q=!k||!o,r={};r.el=c,r.size=q?i:p,r.half=r.size/2,r.start=xb+(q?k:0),r.center=r.start-G(wb/2-r.size/2),r.end=r.start-wb+r.size,b||(xb+=g),xb+=p,rb.horizontal||l||o&&k&&b>0&&(xb-=I(k,o)),b===n&&(r.end+=h,xb+=h,m=q?o:0),Ib.push(r),f=r}),vb[0].style[rb.horizontal?"width":"height"]=(i?xb:xb-g-h)+"px",xb-=m,Ib.length?(yb.start=Ib[0][Pb?"center":"start"],yb.end=Pb?f.center:xb>wb?f.end:yb.start):yb.start=yb.end=0}if(yb.center=G(yb.end/2+yb.start/2),V(),Ab.length&&Bb>0&&(rb.dynamicHandle?(Cb=yb.start===yb.end?Bb:G(Bb*wb/xb),Cb=k(Cb,rb.minHandleSize,Bb),Ab[0].style[rb.horizontal?"width":"height"]=Cb+"px"):Cb=Ab[rb.horizontal?"outerWidth":"outerHeight"](),Db.end=Bb-Cb,ec||N()),!tb&&wb>0){var o=yb.start,p="";if(Rb)a.each(Ib,function(a,b){Pb?Gb.push(b.center):b.start+b.size>o&&o<=yb.end&&(o=b.start,Gb.push(o),(o+=wb)>yb.end&&o<yb.end+wb&&Gb.push(yb.end))});else for(;o-wb<yb.end;)Gb.push(o),o+=wb;if(Eb[0]&&e!==Gb.length){for(var q=0;q<Gb.length;q++)p+=rb.pageBuilder.call(sb,q);Fb=Eb.html(p).children(),Fb.eq(Jb.activePage).addClass(rb.activeClass)}}if(Jb.slideeSize=xb,Jb.frameSize=wb,Jb.sbSize=Bb,Jb.handleSize=Cb,Rb){c&&null!=rb.startAt&&(T(rb.startAt),sb[Qb?"toCenter":"toStart"](rb.startAt));var r=Ib[Jb.activeItem];L(Qb&&r?r.center:k(yb.dest,yb.start,yb.end))}else c?null!=rb.startAt&&L(rb.startAt,1):L(k(yb.dest,yb.start,yb.end));ob("load")}function L(a,b,c){if(Rb&&cc.released&&!c){var d=U(a),e=a>yb.start&&a<yb.end;Qb?(e&&(a=Ib[d.centerItem].center),Pb&&rb.activateMiddle&&T(d.centerItem)):e&&(a=Ib[d.firstItem].start)}cc.init&&cc.slidee&&rb.elasticBounds?a>yb.end?a=yb.end+(a-yb.end)/6:a<yb.start&&(a=yb.start+(a-yb.start)/6):a=k(a,yb.start,yb.end),ac.start=+new Date,ac.time=0,ac.from=yb.cur,ac.to=a,ac.delta=a-yb.cur,ac.tweesing=cc.tweese||cc.init&&!cc.slidee,ac.immediate=!ac.tweesing&&(b||cc.init&&cc.slidee||!rb.speed),cc.tweese=0,a!==yb.dest&&(yb.dest=a,ob("change"),ec||M()),Z(),V(),W(),O()}function M(){if(sb.initialized){if(!ec)return ec=t(M),void(cc.released&&ob("moveStart"));ac.immediate?yb.cur=ac.to:ac.tweesing?(ac.tweeseDelta=ac.to-yb.cur,D(ac.tweeseDelta)<.1?yb.cur=ac.to:yb.cur+=ac.tweeseDelta*(cc.released?rb.swingSpeed:rb.syncSpeed)):(ac.time=I(+new Date-ac.start,rb.speed),yb.cur=ac.from+ac.delta*a.easing[rb.easing](ac.time/rb.speed,ac.time,0,1,rb.speed)),ac.to===yb.cur?(yb.cur=ac.to,cc.tweese=ec=0):ec=t(M),ob("move"),tb||(m?vb[0].style[m]=n+(rb.horizontal?"translateX":"translateY")+"("+-yb.cur+"px)":vb[0].style[rb.horizontal?"left":"top"]=-G(yb.cur)+"px"),!ec&&cc.released&&ob("moveEnd"),N()}}function N(){Ab.length&&(Db.cur=yb.start===yb.end?0:((cc.init&&!cc.slidee?yb.dest:yb.cur)-yb.start)/(yb.end-yb.start)*Db.end,Db.cur=k(G(Db.cur),Db.start,Db.end),_b.hPos!==Db.cur&&(_b.hPos=Db.cur,m?Ab[0].style[m]=n+(rb.horizontal?"translateX":"translateY")+"("+Db.cur+"px)":Ab[0].style[rb.horizontal?"left":"top"]=Db.cur+"px"))}function O(){Fb[0]&&_b.page!==Jb.activePage&&(_b.page=Jb.activePage,Fb.removeClass(rb.activeClass).eq(Jb.activePage).addClass(rb.activeClass),ob("activePage",_b.page))}function P(){bc.speed&&yb.cur!==(bc.speed>0?yb.end:yb.start)||sb.stop(),hc=cc.init?t(P):0,bc.now=+new Date,bc.pos=yb.cur+(bc.now-bc.lastTime)/1e3*bc.speed,L(cc.init?bc.pos:G(bc.pos)),cc.init||yb.cur!==yb.dest||ob("moveEnd"),bc.lastTime=bc.now}function Q(a,b,d){if("boolean"===e(b)&&(d=b,b=c),b===c)L(yb[a],d);else{if(Qb&&"center"!==a)return;var f=sb.getPos(b);f&&L(f[a],d,!Qb)}}function R(a){return null!=a?i(a)?a>=0&&a<Ib.length?a:-1:Hb.index(a):-1}function S(a){return R(i(a)&&0>a?a+Ib.length:a)}function T(a,b){var c=R(a);return!(!Rb||0>c)&&((_b.active!==c||b)&&(Hb.eq(Jb.activeItem).removeClass(rb.activeClass),Hb.eq(c).addClass(rb.activeClass),_b.active=Jb.activeItem=c,W(),ob("active",c)),c)}function U(a){a=k(i(a)?a:yb.dest,yb.start,yb.end);var b={},c=Pb?0:wb/2;if(!tb)for(var d=0,e=Gb.length;e>d;d++){if(a>=yb.end||d===Gb.length-1){b.activePage=Gb.length-1;break}if(a<=Gb[d]+c){b.activePage=d;break}}if(Rb){for(var f=!1,g=!1,h=!1,j=0,l=Ib.length;l>j;j++)if(!1===f&&a<=Ib[j].start+Ib[j].half&&(f=j),!1===h&&a<=Ib[j].center+Ib[j].half&&(h=j),j===l-1||a<=Ib[j].end+Ib[j].half){g=j;break}b.firstItem=i(f)?f:0,b.centerItem=i(h)?h:b.firstItem,b.lastItem=i(g)?g:b.centerItem}return b}function V(b){a.extend(Jb,U(b))}function W(){var a=yb.dest<=yb.start,b=yb.dest>=yb.end,c=(a?1:0)|(b?2:0);if(_b.slideePosState!==c&&(_b.slideePosState=c,Yb.is("button,input")&&Yb.prop("disabled",a),Zb.is("button,input")&&Zb.prop("disabled",b),Yb.add(Vb)[a?"addClass":"removeClass"](rb.disabledClass),Zb.add(Ub)[b?"addClass":"removeClass"](rb.disabledClass)),_b.fwdbwdState!==c&&cc.released&&(_b.fwdbwdState=c,Vb.is("button,input")&&Vb.prop("disabled",a),Ub.is("button,input")&&Ub.prop("disabled",b)),Rb&&null!=Jb.activeItem){var d=0===Jb.activeItem,e=Jb.activeItem>=Ib.length-1,f=(d?1:0)|(e?2:0);_b.itemsButtonState!==f&&(_b.itemsButtonState=f,Wb.is("button,input")&&Wb.prop("disabled",d),Xb.is("button,input")&&Xb.prop("disabled",e),Wb[d?"addClass":"removeClass"](rb.disabledClass),Xb[e?"addClass":"removeClass"](rb.disabledClass))}}function X(a,b,c){if(a=S(a),b=S(b),a>-1&&b>-1&&a!==b&&(!c||b!==a-1)&&(c||b!==a+1)){Hb.eq(a)[c?"insertAfter":"insertBefore"](Ib[b].el);var d=b>a?a:c?b:b-1,e=a>b?a:c?b+1:b,f=a>b;null!=Jb.activeItem&&(a===Jb.activeItem?_b.active=Jb.activeItem=c?f?b+1:b:f?b:b-1:Jb.activeItem>d&&Jb.activeItem<e&&(_b.active=Jb.activeItem+=f?1:-1)),K()}}function Y(a,b){for(var c=0,d=$b[a].length;d>c;c++)if($b[a][c]===b)return c;return-1}function Z(){cc.released&&!sb.isPaused&&sb.resume()}function $(a){return G(k(a,Db.start,Db.end)/Db.end*(yb.end-yb.start))+yb.start}function _(){cc.history[0]=cc.history[1],cc.history[1]=cc.history[2],cc.history[2]=cc.history[3],cc.history[3]=cc.delta}function ab(a){cc.released=0,cc.source=a,cc.slidee="slidee"===a}function bb(b){var c="touchstart"===b.type,d=b.data.source,e="slidee"===d;cc.init||!c&&eb(b.target)||("handle"!==d||rb.dragHandle&&Db.start!==Db.end)&&(!e||(c?rb.touchDragging:rb.mouseDragging&&b.which<2))&&(c||f(b),ab(d),cc.init=0,cc.$source=a(b.target),cc.touch=c,cc.pointer=c?b.originalEvent.touches[0]:b,cc.initX=cc.pointer.pageX,cc.initY=cc.pointer.pageY,cc.initPos=e?yb.cur:Db.cur,cc.start=+new Date,cc.time=0,cc.path=0,cc.delta=0,cc.locked=0,cc.history=[0,0,0,0],cc.pathToLock=e?c?30:10:0,u.on(c?x:w,cb),sb.pause(1),(e?vb:Ab).addClass(rb.draggedClass),ob("moveStart"),e&&(fc=setInterval(_,10)))}function cb(a){if(cc.released="mouseup"===a.type||"touchend"===a.type,cc.pointer=cc.touch?a.originalEvent[cc.released?"changedTouches":"touches"][0]:a,cc.pathX=cc.pointer.pageX-cc.initX,cc.pathY=cc.pointer.pageY-cc.initY,cc.path=E(F(cc.pathX,2)+F(cc.pathY,2)),cc.delta=rb.horizontal?cc.pathX:cc.pathY,cc.released||!(cc.path<1)){if(!cc.init){if(cc.path<rb.dragThreshold)return cc.released?db():c;if(!(rb.horizontal?D(cc.pathX)>D(cc.pathY):D(cc.pathX)<D(cc.pathY)))return db();cc.init=1}f(a),!cc.locked&&cc.path>cc.pathToLock&&cc.slidee&&(cc.locked=1,cc.$source.on(z,g)),cc.released&&(db(),rb.releaseSwing&&cc.slidee&&(cc.swing=(cc.delta-cc.history[0])/40*300,cc.delta+=cc.swing,cc.tweese=D(cc.swing)>10)),L(cc.slidee?G(cc.initPos-cc.delta):$(cc.initPos+cc.delta))}}function db(){clearInterval(fc),cc.released=!0,u.off(cc.touch?x:w,cb),(cc.slidee?vb:Ab).removeClass(rb.draggedClass),setTimeout(function(){cc.$source.off(z,g)}),yb.cur===yb.dest&&cc.init&&ob("moveEnd"),sb.resume(1),cc.init=0}function eb(b){return~a.inArray(b.nodeName,B)||a(b).is(rb.interactive)}function fb(){sb.stop(),u.off("mouseup",fb)}function gb(a){switch(f(a),this){case Ub[0]:case Vb[0]:sb.moveBy(Ub.is(this)?rb.moveBy:-rb.moveBy),u.on("mouseup",fb);break;case Wb[0]:sb.prev();break;case Xb[0]:sb.next();break;case Yb[0]:sb.prevPage();break;case Zb[0]:sb.nextPage()}}function hb(a){return dc.curDelta=(rb.horizontal?a.deltaY||a.deltaX:a.deltaY)||-a.wheelDelta,dc.curDelta/=1===a.deltaMode?3:100,Rb?(o=+new Date,dc.last<o-dc.resetTime&&(dc.delta=0),dc.last=o,dc.delta+=dc.curDelta,D(dc.delta)<1?dc.finalDelta=0:(dc.finalDelta=G(dc.delta/1),dc.delta%=1),dc.finalDelta):dc.curDelta}function ib(a){a.originalEvent[r]=sb;var b=+new Date;if(J+rb.scrollHijack>b&&Sb[0]!==document&&Sb[0]!==window)return void(J=b);if(rb.scrollBy&&yb.start!==yb.end){var c=hb(a.originalEvent);(rb.scrollTrap||c>0&&yb.dest<yb.end||0>c&&yb.dest>yb.start)&&f(a,1),sb.slideBy(rb.scrollBy*c)}}function jb(a){rb.clickBar&&a.target===zb[0]&&(f(a),L($((rb.horizontal?a.pageX-zb.offset().left:a.pageY-zb.offset().top)-Cb/2)))}function kb(a){if(rb.keyboardNavBy)switch(a.which){case rb.horizontal?37:38:f(a),sb["pages"===rb.keyboardNavBy?"prevPage":"prev"]();break;case rb.horizontal?39:40:f(a),sb["pages"===rb.keyboardNavBy?"nextPage":"next"]()}}function lb(a){return eb(this)?void(a.originalEvent[r+"ignore"]=!0):void(this.parentNode!==vb[0]||a.originalEvent[r+"ignore"]||sb.activate(this))}function mb(){this.parentNode===Eb[0]&&sb.activatePage(Fb.index(this))}function nb(a){rb.pauseOnHover&&sb["mouseenter"===a.type?"pause":"resume"](2)}function ob(a,b){if($b[a]){for(qb=$b[a].length,C.length=0,pb=0;qb>pb;pb++)C.push($b[a][pb]);for(pb=0;qb>pb;pb++)C[pb].call(sb,a,b)}}if(!(this instanceof d))return new d(b,p,q);var pb,qb,rb=a.extend({},d.defaults,p),sb=this,tb=i(b),ub=a(b),vb=rb.slidee?a(rb.slidee).eq(0):ub.children().eq(0),wb=0,xb=0,yb={start:0,center:0,end:0,cur:0,dest:0},zb=a(rb.scrollBar).eq(0),Ab=zb.children().eq(0),Bb=0,Cb=0,Db={start:0,end:0,cur:0},Eb=a(rb.pagesBar),Fb=0,Gb=[],Hb=0,Ib=[],Jb={firstItem:0,lastItem:0,centerItem:0,activeItem:null,activePage:0},Kb=new l(ub[0]),Lb=new l(vb[0]),Mb=new l(zb[0]),Nb=new l(Ab[0]),Ob="basic"===rb.itemNav,Pb="forceCentered"===rb.itemNav,Qb="centered"===rb.itemNav||Pb,Rb=!tb&&(Ob||Qb||Pb),Sb=rb.scrollSource?a(rb.scrollSource):ub,Tb=rb.dragSource?a(rb.dragSource):ub,Ub=a(rb.forward),Vb=a(rb.backward),Wb=a(rb.prev),Xb=a(rb.next),Yb=a(rb.prevPage),Zb=a(rb.nextPage),$b={},_b={},ac={},bc={},cc={released:1},dc={last:0,delta:0,resetTime:200},ec=0,fc=0,gc=0,hc=0;tb||(b=ub[0]),sb.initialized=0,sb.frame=b,sb.slidee=vb[0],sb.pos=yb,sb.rel=Jb,sb.items=Ib,sb.pages=Gb,sb.isPaused=0,sb.options=rb,sb.dragging=cc,sb.reload=function(){K()},sb.getPos=function(a){if(Rb){var b=R(a);return-1!==b&&Ib[b]}var c=vb.find(a).eq(0);if(c[0]){var d=rb.horizontal?c.offset().left-vb.offset().left:c.offset().top-vb.offset().top,e=c[rb.horizontal?"outerWidth":"outerHeight"]();return{start:d,center:d-wb/2+e/2,end:d-wb+e,size:e}}return!1},sb.moveBy=function(a){bc.speed=a,!cc.init&&bc.speed&&yb.cur!==(bc.speed>0?yb.end:yb.start)&&(bc.lastTime=+new Date,bc.startPos=yb.cur,ab("button"),cc.init=1,ob("moveStart"),s(hc),P())},sb.stop=function(){"button"===cc.source&&(cc.init=0,cc.released=1)},sb.prev=function(){sb.activate(null==Jb.activeItem?0:Jb.activeItem-1)},sb.next=function(){sb.activate(null==Jb.activeItem?0:Jb.activeItem+1)},sb.prevPage=function(){sb.activatePage(Jb.activePage-1)},sb.nextPage=function(){sb.activatePage(Jb.activePage+1)},sb.slideBy=function(a,b){a&&(Rb?sb[Qb?"toCenter":"toStart"](k((Qb?Jb.centerItem:Jb.firstItem)+rb.scrollBy*a,0,Ib.length)):L(yb.dest+a,b))},sb.slideTo=function(a,b){L(a,b)},sb.toStart=function(a,b){Q("start",a,b)},sb.toEnd=function(a,b){Q("end",a,b)},sb.toCenter=function(a,b){Q("center",a,b)},sb.getIndex=R,sb.activate=function(a,b){var c=T(a);rb.smart&&!1!==c&&(Qb?sb.toCenter(c,b):c>=Jb.lastItem?sb.toStart(c,b):c<=Jb.firstItem?sb.toEnd(c,b):Z())},sb.activatePage=function(a,b){i(a)&&L(Gb[k(a,0,Gb.length-1)],b)},sb.resume=function(a){rb.cycleBy&&rb.cycleInterval&&("items"!==rb.cycleBy||Ib[0]&&null!=Jb.activeItem)&&!(a<sb.isPaused)&&(sb.isPaused=0,gc?gc=clearTimeout(gc):ob("resume"),gc=setTimeout(function(){switch(ob("cycle"),rb.cycleBy){case"items":sb.activate(Jb.activeItem>=Ib.length-1?0:Jb.activeItem+1);break;case"pages":sb.activatePage(Jb.activePage>=Gb.length-1?0:Jb.activePage+1)}},rb.cycleInterval))},sb.pause=function(a){a<sb.isPaused||(sb.isPaused=a||100,gc&&(gc=clearTimeout(gc),ob("pause")))},sb.toggle=function(){sb[gc?"pause":"resume"]()},sb.set=function(b,c){a.isPlainObject(b)?a.extend(rb,b):rb.hasOwnProperty(b)&&(rb[b]=c)},sb.add=function(b,c){var d=a(b);Rb?(null==c||!Ib[0]||c>=Ib.length?d.appendTo(vb):Ib.length&&d.insertBefore(Ib[c].el),null!=Jb.activeItem&&c<=Jb.activeItem&&(_b.active=Jb.activeItem+=d.length)):vb.append(d),K()},sb.remove=function(b){if(Rb){var c=S(b);if(c>-1){Hb.eq(c).remove();var d=c===Jb.activeItem;null!=Jb.activeItem&&c<Jb.activeItem&&(_b.active=--Jb.activeItem),K(),d&&(_b.active=null,sb.activate(Jb.activeItem))}}else a(b).remove(),K()},sb.moveAfter=function(a,b){X(a,b,1)},sb.moveBefore=function(a,b){X(a,b)},sb.on=function(a,b){if("object"===e(a))for(var c in a)a.hasOwnProperty(c)&&sb.on(c,a[c]);else if("function"===e(b))for(var d=a.split(" "),f=0,g=d.length;g>f;f++)$b[d[f]]=$b[d[f]]||[],-1===Y(d[f],b)&&$b[d[f]].push(b);else if("array"===e(b))for(var h=0,i=b.length;i>h;h++)sb.on(a,b[h])},sb.one=function(a,b){function c(){b.apply(sb,arguments),sb.off(a,c)}sb.on(a,c)},sb.off=function(a,b){if(b instanceof Array)for(var c=0,d=b.length;d>c;c++)sb.off(a,b[c]);else for(var e=a.split(" "),f=0,g=e.length;g>f;f++)if($b[e[f]]=$b[e[f]]||[],null==b)$b[e[f]].length=0;else{var h=Y(e[f],b);-1!==h&&$b[e[f]].splice(h,1)}},sb.destroy=function(){return d.removeInstance(b),Sb.add(Ab).add(zb).add(Eb).add(Ub).add(Vb).add(Wb).add(Xb).add(Yb).add(Zb).off("."+r),u.off("keydown",kb),Wb.add(Xb).add(Yb).add(Zb).removeClass(rb.disabledClass),Hb&&null!=Jb.activeItem&&Hb.eq(Jb.activeItem).removeClass(rb.activeClass),Eb.empty(),tb||(ub.off("."+r),Kb.restore(),Lb.restore(),Mb.restore(),Nb.restore(),a.removeData(b,r)),Ib.length=Gb.length=0,_b={},sb.initialized=0,sb},sb.init=function(){if(!sb.initialized){if(d.getInstance(b))throw new Error("There is already a Sly instance on this element");d.storeInstance(b,sb),sb.on(q);var a=["overflow","position"],c=["position","webkitTransform","msTransform","transform","left","top","width","height"];Kb.save.apply(Kb,a),Mb.save.apply(Mb,a),Lb.save.apply(Lb,c),Nb.save.apply(Nb,c);var e=Ab;return tb||(e=e.add(vb),ub.css("overflow","hidden"),m||"static"!==ub.css("position")||ub.css("position","relative")),m?n&&e.css(m,n):("static"===zb.css("position")&&zb.css("position","relative"),e.css({position:"absolute"})),rb.forward&&Ub.on(A,gb),rb.backward&&Vb.on(A,gb),rb.prev&&Wb.on(z,gb),rb.next&&Xb.on(z,gb),rb.prevPage&&Yb.on(z,gb),rb.nextPage&&Zb.on(z,gb),Sb.on(y,ib),zb[0]&&zb.on(z,jb),Rb&&rb.activateOn&&ub.on(rb.activateOn+"."+r,"*",lb),Eb[0]&&rb.activatePageOn&&Eb.on(rb.activatePageOn+"."+r,"*",mb),Tb.on(v,{source:"slidee"},bb),Ab&&Ab.on(v,{source:"handle"},bb),u.on("keydown",kb),tb||(ub.on("mouseenter."+r+" mouseleave."+r,nb),ub.on("scroll."+r,h)),sb.initialized=1,K(!0),rb.cycleBy&&!tb&&sb[rb.startPaused?"pause":"resume"](),sb}}}function e(a){return null==a?String(a):"object"==typeof a||"function"==typeof a?Object.prototype.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase()||"object":typeof a}function f(a,b){a.preventDefault(),b&&a.stopPropagation()}function g(b){f(b,1),a(this).off(b.type,g)}function h(){this.scrollLeft=0,this.scrollTop=0}function i(a){return!isNaN(parseFloat(a))&&isFinite(a)}function j(a,b){return 0|G(String(a.css(b)).replace(/[^\-0-9.]/g,""))}function k(a,b,c){return b>a?b:a>c?c:a}function l(a){var b={};return b.style={},b.save=function(){if(a&&a.nodeType){for(var c=0;c<arguments.length;c++)b.style[arguments[c]]=a.style[arguments[c]];return b}},b.restore=function(){if(a&&a.nodeType){for(var c in b.style)b.style.hasOwnProperty(c)&&(a.style[c]=b.style[c]);return b}},b}var m,n,o,r="sly",s=b.cancelAnimationFrame||b.cancelRequestAnimationFrame,t=b.requestAnimationFrame,u=a(document),v="touchstart."+r+" mousedown."+r,w="mousemove."+r+" mouseup."+r,x="touchmove."+r+" touchend."+r,y=(document.implementation.hasFeature("Event.wheel","3.0")?"wheel.":"mousewheel.")+r,z="click."+r,A="mousedown."+r,B=["INPUT","SELECT","BUTTON","TEXTAREA"],C=[],D=Math.abs,E=Math.sqrt,F=Math.pow,G=Math.round,H=Math.max,I=Math.min,J=0;u.on(y,function(a){var b=a.originalEvent[r],c=+new Date;(!b||b.options.scrollHijack<c-J)&&(J=c)}),d.getInstance=function(b){return a.data(b,r)},d.storeInstance=function(b,c){return a.data(b,r,c)},d.removeInstance=function(b){return a.removeData(b,r)},function(a){function b(a){var b=(new Date).getTime(),d=Math.max(0,16-(b-c)),e=setTimeout(a,d);return c=b,e}t=a.requestAnimationFrame||a.webkitRequestAnimationFrame||b;var c=(new Date).getTime(),d=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.clearTimeout;s=function(b){d.call(a,b)}}(window),function(){function a(a){for(var d=0,e=b.length;e>d;d++){var f=b[d]?b[d]+a.charAt(0).toUpperCase()+a.slice(1):a;if(null!=c.style[f])return f}}var b=["","Webkit","Moz","ms","O"],c=document.createElement("div");m=a("transform"),n=a("perspective")?"translateZ(0) ":""}(),b.Sly=d,a.fn.sly=function(b,c){var f,g;return a.isPlainObject(b)||(("string"===e(b)||!1===b)&&(f=!1===b?"destroy":b,g=Array.prototype.slice.call(arguments,1)),b={}),this.each(function(a,e){var h=d.getInstance(e);h||f?h&&f&&h[f]&&h[f].apply(h,g):h=new d(e,b,c).init()})},d.defaults={slidee:null,horizontal:!1,itemNav:null,itemSelector:null,smart:!1,activateOn:null,activateMiddle:!1,scrollSource:null,scrollBy:0,scrollHijack:300,scrollTrap:!1,dragSource:null,mouseDragging:!1,touchDragging:!1,releaseSwing:!1,swingSpeed:.2,elasticBounds:!1,dragThreshold:3,interactive:null,scrollBar:null,dragHandle:!1,dynamicHandle:!1,minHandleSize:50,clickBar:!1,syncSpeed:.5,pagesBar:null,activatePageOn:null,pageBuilder:function(a){return"<li>"+(a+1)+"</li>"},forward:null,backward:null,prev:null,next:null,prevPage:null,nextPage:null,cycleBy:null,cycleInterval:5e3,pauseOnHover:!1,startPaused:!1,moveBy:300,speed:0,easing:"swing",startAt:null,keyboardNavBy:null,draggedClass:"dragged",activeClass:"active",disabledClass:"disabled"}}(jQuery,window),$(function(){
// Sly - Horizontal Scroller
!function(){var $timeline=$(".timeline-wrap");$(".timeline-frame").sly({horizontal:1,itemNav:"centered",smart:1,activateOn:"click",activateMiddle:1,mouseDragging:1,touchDragging:1,releaseSwing:1,scrollBar:$timeline.find(".scrollbar"),scrollBy:1,activatePageOn:"click",speed:300,elasticBounds:1,easing:"swing",dragHandle:1,dynamicHandle:0,
// Buttons
prevPage:$timeline.find(".timeline-prev"),nextPage:$timeline.find(".timeline-next")}),$(window).resize(function(e){$(".timeline-frame").sly("reload")})}()}),/*!
 * jquery-timepicker v1.11.10 - A jQuery timepicker plugin inspired by Google Calendar. It supports both mouse and keyboard navigation.
 * Copyright (c) 2015 Jon Thornton - http://jonthornton.github.com/jquery-timepicker/
 * License: MIT
 */
function(factory){"object"==typeof exports&&exports&&"object"==typeof module&&module&&module.exports===exports?
// Browserify. Attach to jQuery module.
factory(require("jquery")):"function"==typeof define&&define.amd?
// AMD. Register as an anonymous module.
define(["jquery"],factory):
// Browser globals
factory(jQuery)}(function($){
// private methods
function _isVisible(elem){var el=elem[0];return el.offsetWidth>0&&el.offsetHeight>0}function _parseSettings(settings){if(settings.minTime&&(settings.minTime=_time2int(settings.minTime)),settings.maxTime&&(settings.maxTime=_time2int(settings.maxTime)),settings.durationTime&&"function"!=typeof settings.durationTime&&(settings.durationTime=_time2int(settings.durationTime)),"now"==settings.scrollDefault)settings.scrollDefault=function(){return settings.roundingFunction(_time2int(new Date),settings)};else if(settings.scrollDefault&&"function"!=typeof settings.scrollDefault){var val=settings.scrollDefault;settings.scrollDefault=function(){return settings.roundingFunction(_time2int(val),settings)}}else settings.minTime&&(settings.scrollDefault=function(){return settings.roundingFunction(settings.minTime,settings)});if("string"===$.type(settings.timeFormat)&&settings.timeFormat.match(/[gh]/)&&(settings._twelveHourTime=!0),!1===settings.showOnFocus&&-1!=settings.showOn.indexOf("focus")&&settings.showOn.splice(settings.showOn.indexOf("focus"),1),settings.disableTimeRanges.length>0){
// convert string times to integers
for(var i in settings.disableTimeRanges)settings.disableTimeRanges[i]=[_time2int(settings.disableTimeRanges[i][0]),_time2int(settings.disableTimeRanges[i][1])];
// sort by starting time
settings.disableTimeRanges=settings.disableTimeRanges.sort(function(a,b){return a[0]-b[0]});
// merge any overlapping ranges
for(var i=settings.disableTimeRanges.length-1;i>0;i--)settings.disableTimeRanges[i][0]<=settings.disableTimeRanges[i-1][1]&&(settings.disableTimeRanges[i-1]=[Math.min(settings.disableTimeRanges[i][0],settings.disableTimeRanges[i-1][0]),Math.max(settings.disableTimeRanges[i][1],settings.disableTimeRanges[i-1][1])],settings.disableTimeRanges.splice(i,1))}return settings}function _render(self){var settings=self.data("timepicker-settings"),list=self.data("timepicker-list");if(list&&list.length&&(list.remove(),self.data("timepicker-list",!1)),settings.useSelect){list=$("<select />",{class:"ui-timepicker-select"});var wrapped_list=list}else{list=$("<ul />",{class:"ui-timepicker-list"});var wrapped_list=$("<div />",{class:"ui-timepicker-wrapper",tabindex:-1});wrapped_list.css({display:"none",position:"absolute"}).append(list)}if(settings.noneOption)if(!0===settings.noneOption&&(settings.noneOption=settings.useSelect?"Time...":"None"),$.isArray(settings.noneOption)){for(var i in settings.noneOption)if(parseInt(i,10)==i){var noneElement=_generateNoneElement(settings.noneOption[i],settings.useSelect);list.append(noneElement)}}else{var noneElement=_generateNoneElement(settings.noneOption,settings.useSelect);list.append(noneElement)}if(settings.className&&wrapped_list.addClass(settings.className),(null!==settings.minTime||null!==settings.durationTime)&&settings.showDuration){"function"==typeof settings.step||settings.step;wrapped_list.addClass("ui-timepicker-with-duration"),wrapped_list.addClass("ui-timepicker-step-"+settings.step)}var durStart=settings.minTime;"function"==typeof settings.durationTime?durStart=_time2int(settings.durationTime()):null!==settings.durationTime&&(durStart=settings.durationTime);var start=null!==settings.minTime?settings.minTime:0,end=null!==settings.maxTime?settings.maxTime:start+_ONE_DAY-1;end<start&&(
// make sure the end time is greater than start time, otherwise there will be no list to show
end+=_ONE_DAY),end===_ONE_DAY-1&&"string"===$.type(settings.timeFormat)&&settings.show2400&&(
// show a 24:00 option when using military time
end=_ONE_DAY);var dr=settings.disableTimeRanges,drCur=0,drLen=dr.length,stepFunc=settings.step;"function"!=typeof stepFunc&&(stepFunc=function(){return settings.step});for(var i=start,j=0;i<=end;j++,i+=60*stepFunc(j)){var timeInt=i,timeString=_int2time(timeInt,settings);if(settings.useSelect){var row=$("<option />",{value:timeString});row.text(timeString)}else{var row=$("<li />");row.addClass(timeInt%_ONE_DAY<_ONE_DAY/2?"ui-timepicker-am":"ui-timepicker-pm"),row.data("time",_moduloSeconds(timeInt,settings)),row.text(timeString)}if((null!==settings.minTime||null!==settings.durationTime)&&settings.showDuration){var durationString=_int2duration(i-durStart,settings.step);if(settings.useSelect)row.text(row.text()+" ("+durationString+")");else{var duration=$("<span />",{class:"ui-timepicker-duration"});duration.text(" ("+durationString+")"),row.append(duration)}}drCur<drLen&&(timeInt>=dr[drCur][1]&&(drCur+=1),dr[drCur]&&timeInt>=dr[drCur][0]&&timeInt<dr[drCur][1]&&(settings.useSelect?row.prop("disabled",!0):row.addClass("ui-timepicker-disabled"))),list.append(row)}if(wrapped_list.data("timepicker-input",self),self.data("timepicker-list",wrapped_list),settings.useSelect)self.val()&&list.val(_roundAndFormatTime(_time2int(self.val()),settings)),list.on("focus",function(){$(this).data("timepicker-input").trigger("showTimepicker")}),list.on("blur",function(){$(this).data("timepicker-input").trigger("hideTimepicker")}),list.on("change",function(){_setTimeValue(self,$(this).val(),"select")}),_setTimeValue(self,list.val(),"initial"),self.hide().after(list);else{var appendTo=settings.appendTo;"string"==typeof appendTo?appendTo=$(appendTo):"function"==typeof appendTo&&(appendTo=appendTo(self)),appendTo.append(wrapped_list),_setSelected(self,list),list.on("mousedown click","li",function(e){
// hack: temporarily disable the focus handler
// to deal with the fact that IE fires 'focus'
// events asynchronously
self.off("focus.timepicker"),self.on("focus.timepicker-ie-hack",function(){self.off("focus.timepicker-ie-hack"),self.on("focus.timepicker",methods.show)}),_hideKeyboard(self)||self[0].focus(),
// make sure only the clicked row is selected
list.find("li").removeClass("ui-timepicker-selected"),$(this).addClass("ui-timepicker-selected"),_selectValue(self)&&(self.trigger("hideTimepicker"),list.on("mouseup.timepicker click.timepicker","li",function(e){list.off("mouseup.timepicker click.timepicker"),wrapped_list.hide()}))})}}function _generateNoneElement(optionValue,useSelect){var label,className,value;return"object"==typeof optionValue?(label=optionValue.label,className=optionValue.className,value=optionValue.value):"string"==typeof optionValue?label=optionValue:$.error("Invalid noneOption value"),useSelect?$("<option />",{value:value,class:className,text:label}):$("<li />",{class:className,text:label}).data("time",String(value))}function _roundAndFormatTime(seconds,settings){if(null!==(seconds=settings.roundingFunction(seconds,settings)))return _int2time(seconds,settings)}
// event handler to decide whether to close timepicker
function _closeHandler(e){if(e.target!=window){var target=$(e.target);target.closest(".ui-timepicker-input").length||target.closest(".ui-timepicker-wrapper").length||(methods.hide(),$(document).unbind(".ui-timepicker"),$(window).unbind(".ui-timepicker"))}}function _hideKeyboard(self){var settings=self.data("timepicker-settings");return(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&settings.disableTouchKeyboard}function _findRow(self,list,value){if(!value&&0!==value)return!1;var settings=self.data("timepicker-settings"),out=!1,value=settings.roundingFunction(value,settings);
// loop through the menu items
return list.find("li").each(function(i,obj){var jObj=$(obj);if("number"==typeof jObj.data("time"))return jObj.data("time")==value?(out=jObj,!1):void 0}),out}function _setSelected(self,list){list.find("li").removeClass("ui-timepicker-selected");var timeValue=_time2int(_getTimeValue(self),self.data("timepicker-settings"));if(null!==timeValue){var selected=_findRow(self,list,timeValue);if(selected){var topDelta=selected.offset().top-list.offset().top;(topDelta+selected.outerHeight()>list.outerHeight()||topDelta<0)&&list.scrollTop(list.scrollTop()+selected.position().top-selected.outerHeight()),selected.addClass("ui-timepicker-selected")}}}function _formatValue(e,origin){if("timepicker"!=origin){var self=$(this);if(""===this.value)return void _setTimeValue(self,null,origin);if(!self.is(":focus")||e&&"change"==e.type){var settings=self.data("timepicker-settings"),seconds=_time2int(this.value,settings);if(null===seconds)return void self.trigger("timeFormatError");var rangeError=!1;if(
// check that the time in within bounds
null!==settings.minTime&&null!==settings.maxTime&&(seconds<settings.minTime||seconds>settings.maxTime)&&(rangeError=!0),
// check that time isn't within disabled time ranges
$.each(settings.disableTimeRanges,function(){if(seconds>=this[0]&&seconds<this[1])return rangeError=!0,!1}),settings.forceRoundTime){var roundSeconds=settings.roundingFunction(seconds,settings);roundSeconds!=seconds&&(seconds=roundSeconds,origin=null)}var prettyTime=_int2time(seconds,settings);rangeError?(_setTimeValue(self,prettyTime,"error")||e&&"change"==e.type)&&self.trigger("timeRangeError"):_setTimeValue(self,prettyTime,origin)}}}function _getTimeValue(self){return self.is("input")?self.val():self.data("ui-timepicker-value")}function _setTimeValue(self,value,source){if(self.is("input")){self.val(value);var settings=self.data("timepicker-settings");settings.useSelect&&"select"!=source&&"initial"!=source&&self.data("timepicker-list").val(_roundAndFormatTime(_time2int(value),settings))}return self.data("ui-timepicker-value")!=value?(self.data("ui-timepicker-value",value),"select"==source?self.trigger("selectTime").trigger("changeTime").trigger("change","timepicker"):-1==["error","initial"].indexOf(source)&&self.trigger("changeTime"),!0):(self.trigger("selectTime"),!1)}/*
	*  Filter freeform input
	*/
function _disableTextInputHandler(e){switch(e.keyCode){case 13:// return
case 9://tab
return;default:e.preventDefault()}}/*
	*  Keyboard navigation via arrow keys
	*/
function _keydownhandler(e){var self=$(this),list=self.data("timepicker-list");if(!list||!_isVisible(list)){if(40!=e.keyCode)return!0;
// show the list!
methods.show.call(self.get(0)),list=self.data("timepicker-list"),_hideKeyboard(self)||self.focus()}switch(e.keyCode){case 13:// return
return _selectValue(self)&&(_formatValue.call(self.get(0),{type:"change"}),methods.hide.apply(this)),e.preventDefault(),!1;case 38:// up
var selected=list.find(".ui-timepicker-selected");return selected.length?selected.is(":first-child")||(selected.removeClass("ui-timepicker-selected"),selected.prev().addClass("ui-timepicker-selected"),selected.prev().position().top<selected.outerHeight()&&list.scrollTop(list.scrollTop()-selected.outerHeight())):(list.find("li").each(function(i,obj){if($(obj).position().top>0)return selected=$(obj),!1}),selected.addClass("ui-timepicker-selected")),!1;case 40:// down
return selected=list.find(".ui-timepicker-selected"),0===selected.length?(list.find("li").each(function(i,obj){if($(obj).position().top>0)return selected=$(obj),!1}),selected.addClass("ui-timepicker-selected")):selected.is(":last-child")||(selected.removeClass("ui-timepicker-selected"),selected.next().addClass("ui-timepicker-selected"),selected.next().position().top+2*selected.outerHeight()>list.outerHeight()&&list.scrollTop(list.scrollTop()+selected.outerHeight())),!1;case 27:// escape
list.find("li").removeClass("ui-timepicker-selected"),methods.hide();break;case 9://tab
methods.hide();break;default:return!0}}/*
	*	Time typeahead
	*/
function _keyuphandler(e){var self=$(this),list=self.data("timepicker-list"),settings=self.data("timepicker-settings");if(!list||!_isVisible(list)||settings.disableTextInput)return!0;switch(e.keyCode){case 96:// numpad numerals
case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 48:// numerals
case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 65:// a
case 77:// m
case 80:// p
case 186:// colon
case 8:// backspace
case 46:// delete
settings.typeaheadHighlight?_setSelected(self,list):list.hide()}}function _selectValue(self){var settings=self.data("timepicker-settings"),list=self.data("timepicker-list"),timeValue=null,cursor=list.find(".ui-timepicker-selected");
// selected value found
return!cursor.hasClass("ui-timepicker-disabled")&&(cursor.length&&(timeValue=cursor.data("time")),null!==timeValue&&("string"!=typeof timeValue&&(timeValue=_int2time(timeValue,settings)),_setTimeValue(self,timeValue,"select")),!0)}function _int2duration(seconds,step){seconds=Math.abs(seconds);var hours,mins,minutes=Math.round(seconds/60),duration=[];
// Only show (x mins) under 1 hour
// Show decimal notation (eg: 1.5 hrs) for 30 minute steps
// Show remainder minutes notation (eg: 1 hr 15 mins) for non-30 minute steps
// and only if there are remainder minutes to show
return minutes<60?duration=[minutes,_lang.mins]:(hours=Math.floor(minutes/60),mins=minutes%60,30==step&&30==mins&&(hours+=_lang.decimal+5),duration.push(hours),duration.push(1==hours?_lang.hr:_lang.hrs),30!=step&&mins&&(duration.push(mins),duration.push(_lang.mins))),duration.join(" ")}function _int2time(timeInt,settings){if("number"!=typeof timeInt)return null;var seconds=parseInt(timeInt%60),minutes=parseInt(timeInt/60%60),hours=parseInt(timeInt/3600%24),time=new Date(1970,0,2,hours,minutes,seconds,0);if(isNaN(time.getTime()))return null;if("function"===$.type(settings.timeFormat))return settings.timeFormat(time);for(var hour,code,output="",i=0;i<settings.timeFormat.length;i++)switch(code=settings.timeFormat.charAt(i)){case"a":output+=time.getHours()>11?_lang.pm:_lang.am;break;case"A":output+=time.getHours()>11?_lang.PM:_lang.AM;break;case"g":hour=time.getHours()%12,output+=0===hour?"12":hour;break;case"G":hour=time.getHours(),timeInt===_ONE_DAY&&(hour=settings.show2400?24:0),output+=hour;break;case"h":hour=time.getHours()%12,0!==hour&&hour<10&&(hour="0"+hour),output+=0===hour?"12":hour;break;case"H":hour=time.getHours(),timeInt===_ONE_DAY&&(hour=settings.show2400?24:0),output+=hour>9?hour:"0"+hour;break;case"i":var minutes=time.getMinutes();output+=minutes>9?minutes:"0"+minutes;break;case"s":seconds=time.getSeconds(),output+=seconds>9?seconds:"0"+seconds;break;case"\\":
// escape character; add the next character and skip ahead
i++,output+=settings.timeFormat.charAt(i);break;default:output+=code}return output}function _time2int(timeString,settings){if(""===timeString||null===timeString)return null;if("object"==typeof timeString)return 3600*timeString.getHours()+60*timeString.getMinutes()+timeString.getSeconds();if("string"!=typeof timeString)return timeString;timeString=timeString.toLowerCase().replace(/[\s\.]/g,""),
// if the last character is an "a" or "p", add the "m"
"a"!=timeString.slice(-1)&&"p"!=timeString.slice(-1)||(timeString+="m");var ampmRegex="("+_lang.am.replace(".","")+"|"+_lang.pm.replace(".","")+"|"+_lang.AM.replace(".","")+"|"+_lang.PM.replace(".","")+")?",pattern=new RegExp("^"+ampmRegex+"([0-9]?[0-9])\\W?([0-5][0-9])?\\W?([0-5][0-9])?"+ampmRegex+"$"),time=timeString.match(pattern);if(!time)return null;var hour=parseInt(1*time[2],10);if(hour>24){if(settings&&!1===settings.wrapHours)return null;hour%=24}var ampm=time[1]||time[5],hours=hour;if(hour<=12&&ampm){var isPm=ampm==_lang.pm||ampm==_lang.PM;hours=12==hour?isPm?12:0:hour+(isPm?12:0)}var minutes=1*time[3]||0,seconds=1*time[4]||0,timeInt=3600*hours+60*minutes+seconds;
// if no am/pm provided, intelligently guess based on the scrollDefault
if(hour<12&&!ampm&&settings&&settings._twelveHourTime&&settings.scrollDefault){var delta=timeInt-settings.scrollDefault();delta<0&&delta>=_ONE_DAY/-2&&(timeInt=(timeInt+_ONE_DAY/2)%_ONE_DAY)}return timeInt}function _moduloSeconds(seconds,settings){return seconds==_ONE_DAY&&settings.show2400?seconds:seconds%_ONE_DAY}var _ONE_DAY=86400,_lang={am:"am",pm:"pm",AM:"AM",PM:"PM",decimal:".",mins:"mins",hr:"hr",hrs:"hrs"},_DEFAULTS={appendTo:"body",className:null,closeOnWindowScroll:!1,disableTextInput:!1,disableTimeRanges:[],disableTouchKeyboard:!1,durationTime:null,forceRoundTime:!1,maxTime:null,minTime:null,noneOption:!1,orientation:"l",roundingFunction:function(seconds,settings){if(null===seconds)return null;if("number"!=typeof settings.step)
// TODO: nearest fit irregular steps
return seconds;var offset=seconds%(60*settings.step);
// adjust offset by start mod step so that the offset is aligned not to 00:00 but to the start
// if offset is larger than a half step, round up
// round down
return offset-=(settings.minTime||0)%(60*settings.step),offset>=30*settings.step?seconds+=60*settings.step-offset:seconds-=offset,_moduloSeconds(seconds,settings)},scrollDefault:null,selectOnBlur:!1,show2400:!1,showDuration:!1,showOn:["click","focus"],showOnFocus:!0,step:30,stopScrollPropagation:!1,timeFormat:"g:ia",typeaheadHighlight:!0,useSelect:!1,wrapHours:!0},methods={init:function(options){return this.each(function(){var self=$(this),attributeOptions=[];for(var key in _DEFAULTS)self.data(key)&&(attributeOptions[key]=self.data(key));var settings=$.extend({},_DEFAULTS,options,attributeOptions);if(settings.lang&&(_lang=$.extend(_lang,settings.lang)),settings=_parseSettings(settings),self.data("timepicker-settings",settings),self.addClass("ui-timepicker-input"),settings.useSelect)_render(self);else{if(self.prop("autocomplete","off"),settings.showOn)for(var i in settings.showOn)self.on(settings.showOn[i]+".timepicker",methods.show);self.on("change.timepicker",_formatValue),self.on("keydown.timepicker",_keydownhandler),self.on("keyup.timepicker",_keyuphandler),settings.disableTextInput&&self.on("keydown.timepicker",_disableTextInputHandler),_formatValue.call(self.get(0),null,"initial")}})},show:function(e){var self=$(this),settings=self.data("timepicker-settings");if(e&&e.preventDefault(),settings.useSelect)return void self.data("timepicker-list").focus();_hideKeyboard(self)&&
// block the keyboard on mobile devices
self.blur();var list=self.data("timepicker-list");
// check if input is readonly
if(!self.prop("readonly")&&(
// check if list needs to be rendered
list&&0!==list.length&&"function"!=typeof settings.durationTime||(_render(self),list=self.data("timepicker-list")),!_isVisible(list))){self.data("ui-timepicker-value",self.val()),_setSelected(self,list),
// make sure other pickers are hidden
methods.hide(),
// position the dropdown relative to the input
list.show();var listOffset={};settings.orientation.match(/r/)?
// right-align the dropdown
listOffset.left=self.offset().left+self.outerWidth()-list.outerWidth()+parseInt(list.css("marginLeft").replace("px",""),10):
// left-align the dropdown
listOffset.left=self.offset().left+parseInt(list.css("marginLeft").replace("px",""),10);var verticalOrientation;verticalOrientation=settings.orientation.match(/t/)?"t":settings.orientation.match(/b/)?"b":self.offset().top+self.outerHeight(!0)+list.outerHeight()>$(window).height()+$(window).scrollTop()?"t":"b","t"==verticalOrientation?(
// position the dropdown on top
list.addClass("ui-timepicker-positioned-top"),listOffset.top=self.offset().top-list.outerHeight()+parseInt(list.css("marginTop").replace("px",""),10)):(
// put it under the input
list.removeClass("ui-timepicker-positioned-top"),listOffset.top=self.offset().top+self.outerHeight()+parseInt(list.css("marginTop").replace("px",""),10)),list.offset(listOffset);
// position scrolling
var selected=list.find(".ui-timepicker-selected");if(!selected.length){var timeInt=_time2int(_getTimeValue(self));null!==timeInt?selected=_findRow(self,list,timeInt):settings.scrollDefault&&(selected=_findRow(self,list,settings.scrollDefault()))}if(
// if not found or disabled, intelligently find first selectable element
selected.length&&!selected.hasClass("ui-timepicker-disabled")||(selected=list.find("li:not(.ui-timepicker-disabled):first")),selected&&selected.length){var topOffset=list.scrollTop()+selected.position().top-selected.outerHeight();list.scrollTop(topOffset)}else list.scrollTop(0);
// prevent scroll propagation
// attach close handlers
return settings.stopScrollPropagation&&$(document).on("wheel.ui-timepicker",".ui-timepicker-wrapper",function(e){e.preventDefault();var currentScroll=$(this).scrollTop();$(this).scrollTop(currentScroll+e.originalEvent.deltaY)}),$(document).on("touchstart.ui-timepicker mousedown.ui-timepicker",_closeHandler),$(window).on("resize.ui-timepicker",_closeHandler),settings.closeOnWindowScroll&&$(document).on("scroll.ui-timepicker",_closeHandler),self.trigger("showTimepicker"),this}},hide:function(e){var self=$(this),settings=self.data("timepicker-settings");return settings&&settings.useSelect&&self.blur(),$(".ui-timepicker-wrapper").each(function(){var list=$(this);if(_isVisible(list)){var self=list.data("timepicker-input"),settings=self.data("timepicker-settings");settings&&settings.selectOnBlur&&_selectValue(self),list.hide(),self.trigger("hideTimepicker")}}),this},option:function(key,value){return"string"==typeof key&&void 0===value?$(this).data("timepicker-settings")[key]:this.each(function(){var self=$(this),settings=self.data("timepicker-settings"),list=self.data("timepicker-list");"object"==typeof key?settings=$.extend(settings,key):"string"==typeof key&&(settings[key]=value),settings=_parseSettings(settings),self.data("timepicker-settings",settings),_formatValue.call(self.get(0),{type:"change"},"initial"),list&&(list.remove(),self.data("timepicker-list",!1)),settings.useSelect&&_render(self)})},getSecondsFromMidnight:function(){return _time2int(_getTimeValue(this))},getTime:function(relative_date){var self=this,time_string=_getTimeValue(self);if(!time_string)return null;var offset=_time2int(time_string);if(null===offset)return null;relative_date||(relative_date=new Date);
// construct a Date from relative date, and offset's time
var time=new Date(relative_date);return time.setHours(offset/3600),time.setMinutes(offset%3600/60),time.setSeconds(offset%60),time.setMilliseconds(0),time},isVisible:function(){var self=this,list=self.data("timepicker-list");return!(!list||!_isVisible(list))},setTime:function(value){var self=this,settings=self.data("timepicker-settings");if(settings.forceRoundTime)var prettyTime=_roundAndFormatTime(_time2int(value),settings);else var prettyTime=_int2time(_time2int(value),settings);return value&&null===prettyTime&&settings.noneOption&&(prettyTime=value),self.val(prettyTime),_formatValue.call(self.get(0),{type:"change"}),self.data("timepicker-list")&&_setSelected(self,self.data("timepicker-list")),this},remove:function(){var self=this;
// check if this element is a timepicker
if(self.hasClass("ui-timepicker-input")){var settings=self.data("timepicker-settings");
// timepicker-list won't be present unless the user has interacted with this timepicker
return self.removeAttr("autocomplete","off"),self.removeClass("ui-timepicker-input"),self.removeData("timepicker-settings"),self.off(".timepicker"),self.data("timepicker-list")&&self.data("timepicker-list").remove(),settings.useSelect&&self.show(),self.removeData("timepicker-list"),this}}};
// Plugin entry
$.fn.timepicker=function(method){
// check if this element is a timepicker
return this.length?methods[method]?this.hasClass("ui-timepicker-input")?methods[method].apply(this,Array.prototype.slice.call(arguments,1)):this:"object"!=typeof method&&method?void $.error("Method "+method+" does not exist on jQuery.timepicker"):methods.init.apply(this,arguments):this}}),$(function(){$(".time").timepicker({minTime:"10:00am",maxTime:"6:00pm",disableTimeRanges:[["12:30pm","1;00pm"]],appendTo:function(e){return e.parent()},timeFormat:"g:ia"}),$(".time").on("change",function(){console.log($(this).val())})}),
// Init - Typeform EMBED
function(){var js,q,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id="typef_orm";gi.call(d,id)||(js=ce.call(d,"script"),js.id=id,js.src="https://embed.typeform.com/embed.js",q=gt.call(d,"script")[0],q.parentNode.insertBefore(js,q))}(),function(f){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=f();else if("function"==typeof define&&define.amd)define([],f);else{var g;g="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,g.Vidage=f()}}(function(){return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n||e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){function now(){return(new Date).getTime()}module.exports=Date.now||now},{}],2:[function(require,module,exports){/**
 * Module dependencies.
 */
var now=require("date-now");/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */
module.exports=function(func,wait,immediate){function later(){var last=now()-timestamp;last<wait&&last>0?timeout=setTimeout(later,wait-last):(timeout=null,immediate||(result=func.apply(context,args),timeout||(context=args=null)))}var timeout,args,context,timestamp,result;return null==wait&&(wait=100),function(){context=this,args=arguments,timestamp=now();var callNow=immediate&&!timeout;return timeout||(timeout=setTimeout(later,wait)),callNow&&(result=func.apply(context,args),context=args=null),result}}},{"date-now":1}],3:[function(require,module,exports){/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
"use strict";function toObject(val){if(null===val||void 0===val)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(val)}/* eslint-disable no-unused-vars */
var getOwnPropertySymbols=Object.getOwnPropertySymbols,hasOwnProperty=Object.prototype.hasOwnProperty,propIsEnumerable=Object.prototype.propertyIsEnumerable;module.exports=function(){try{if(!Object.assign)return!1;
// Detect buggy property enumeration order in older V8 versions.
// https://bugs.chromium.org/p/v8/issues/detail?id=4118
var test1=new String("abc");if(// eslint-disable-line no-new-wrappers
test1[5]="de","5"===Object.getOwnPropertyNames(test1)[0])return!1;for(var test2={},i=0;i<10;i++)test2["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(test2).map(function(n){return test2[n]}).join(""))return!1;
// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var test3={};return"abcdefghijklmnopqrst".split("").forEach(function(letter){test3[letter]=letter}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},test3)).join("")}catch(err){
// We don't expect any of the above to throw, but better to be safe.
return!1}}()?Object.assign:function(target,source){for(var from,symbols,to=toObject(target),s=1;s<arguments.length;s++){from=Object(arguments[s]);for(var key in from)hasOwnProperty.call(from,key)&&(to[key]=from[key]);if(getOwnPropertySymbols){symbols=getOwnPropertySymbols(from);for(var i=0;i<symbols.length;i++)propIsEnumerable.call(from,symbols[i])&&(to[symbols[i]]=from[symbols[i]])}}return to}},{}],4:[function(require,module,exports){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_debounce=require("debounce"),_debounce2=_interopRequireDefault(_debounce),_objectAssign=require("object-assign"),_objectAssign2=_interopRequireDefault(_objectAssign),_validateSelector=require("./helpers/validate-selector"),_validateSelector2=_interopRequireDefault(_validateSelector),_featureDetect=require("./helpers/feature-detect"),_featureDetect2=_interopRequireDefault(_featureDetect),_handleVideoSelector=require("./helpers/handle-video-selector"),Vidage=function(){function Vidage(selector){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};_classCallCheck(this,Vidage);var defaults={
// Helper class for detection use through CSS
helperClass:"Vidage--allow",
// Remove and Restore `<video>` selector if required
videoRemoval:!1};
// Combine defaults and possible options
this.options=(0,_objectAssign2.default)(defaults,options),
// Store the name of the module
this._name=this.constructor.name,
// Validate given selector and handle errors
this.element=(0,_validateSelector2.default)(selector,this._name),
// Initiate the logic
this.init()}return _createClass(Vidage,[{key:"init",value:function(){var _this=this;this.element.addEventListener("canplay",function(){return _this.handler()}),window.addEventListener("resize",(0,_debounce2.default)(function(){return _this.handler()},250))}},{key:"handler",value:function(){var body=document.body;(0,_featureDetect2.default)()?(this.element.pause(),this.options.videoRemoval&&(0,_handleVideoSelector.removeVideo)(this.element),body.classList.remove(this.options.helperClass)):(this.options.videoRemoval&&(0,_handleVideoSelector.restoreVideo)(this.element),this.element.play(),body.classList.add(this.options.helperClass))}}]),Vidage}();exports.default=Vidage,module.exports=exports.default},{"./helpers/feature-detect":5,"./helpers/handle-video-selector":6,"./helpers/validate-selector":7,debounce:2,"object-assign":3}],5:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(){var feature={touch:!!("ontouchstart"in window||window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture||window.DocumentTouch&&document instanceof DocumentTouch),ie:window.navigator.userAgent.indexOf("MSIE")>0||!!window.navigator.userAgent.match(/Trident.*rv\:11\./),small:window.matchMedia("(max-width: 34em)").matches};return feature.touch&&!feature.ie||feature.small},module.exports=exports.default},{}],6:[function(require,module,exports){"use strict";function restoreVideo(selector){document.body.contains(selector)||vdgContainer.insertAdjacentElement("afterbegin",selector)}function removeVideo(selector){null===vdgContainer&&(vdgContainer=selector.parentNode),document.body.contains(selector)&&vdgContainer.removeChild(selector)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.restoreVideo=restoreVideo,exports.removeVideo=removeVideo;var vdgContainer=null},{}],7:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(selector,moduleName){if(void 0===selector)throw new Error(moduleName+" requires a video selector as first argument.");if(selector="string"==typeof selector?document.querySelector(selector):selector,"video"!==selector.nodeName.toLowerCase())throw new Error(moduleName+" requires a valid video selector. You passed a <"+selector.nodeName+">");return selector},module.exports=exports.default},{}]},{},[4])(4)}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Vidage=e()}}(function(){return function e(t,n,r){function o(a,u){if(!n[a]){if(!t[a]){var s="function"==typeof require&&require;if(!u&&s)return s(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return o(n||e)},c,c.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){function r(){return(new Date).getTime()}t.exports=Date.now||r},{}],2:[function(e,t,n){var r=e("date-now");t.exports=function(e,t,n){function o(){var c=r()-s;c<t&&c>0?i=setTimeout(o,t-c):(i=null,n||(l=e.apply(u,a),i||(u=a=null)))}var i,a,u,s,l;return null==t&&(t=100),function(){u=this,a=arguments,s=r();var c=n&&!i;return i||(i=setTimeout(o,t)),c&&(l=e.apply(u,a),u=a=null),l}}},{"date-now":1}],3:[function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var i=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,o,s=r(e),l=1;l<arguments.length;l++){n=Object(arguments[l]);for(var c in n)a.call(n,c)&&(s[c]=n[c]);if(i){o=i(n);for(var d=0;d<o.length;d++)u.call(n,o[d])&&(s[o[d]]=n[o[d]])}}return s}},{}],4:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e("debounce"),u=r(a),s=e("object-assign"),l=r(s),c=e("./helpers/validate-selector"),d=r(c),f=e("./helpers/feature-detect"),p=r(f),v=e("./helpers/handle-video-selector"),h=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,e);var r={helperClass:"Vidage--allow",videoRemoval:!1};this.options=(0,l.default)(r,n),this._name=this.constructor.name,this.element=(0,d.default)(t,this._name),this.init()}return i(e,[{key:"init",value:function(){var e=this;this.element.addEventListener("canplay",function(){return e.handler()}),window.addEventListener("resize",(0,u.default)(function(){return e.handler()},250))}},{key:"handler",value:function(){var e=document.body;(0,p.default)()?(this.element.pause(),this.options.videoRemoval&&(0,v.removeVideo)(this.element),e.classList.remove(this.options.helperClass)):(this.options.videoRemoval&&(0,v.restoreVideo)(this.element),this.element.play(),e.classList.add(this.options.helperClass))}}]),e}();n.default=h,t.exports=n.default},{"./helpers/feature-detect":5,"./helpers/handle-video-selector":6,"./helpers/validate-selector":7,debounce:2,"object-assign":3}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){var e={touch:!!("ontouchstart"in window||window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture||window.DocumentTouch&&document instanceof DocumentTouch),ie:window.navigator.userAgent.indexOf("MSIE")>0||!!window.navigator.userAgent.match(/Trident.*rv\:11\./),small:window.matchMedia("(max-width: 34em)").matches};return e.touch&&!e.ie||e.small},t.exports=n.default},{}],6:[function(e,t,n){"use strict";function r(e){document.body.contains(e)||i.insertAdjacentElement("afterbegin",e)}function o(e){null===i&&(i=e.parentNode),document.body.contains(e)&&i.removeChild(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.restoreVideo=r,n.removeVideo=o;var i=null},{}],7:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t){if(void 0===e)throw new Error(t+" requires a video selector as first argument.");if(e="string"==typeof e?document.querySelector(e):e,"video"!==e.nodeName.toLowerCase())throw new Error(t+" requires a valid video selector. You passed a <"+e.nodeName+">");return e},t.exports=n.default},{}]},{},[4])(4)}),$("#VidageVideo").length&&new Vidage("#VidageVideo"),!window.YT)var YT={loading:0,loaded:0};if(!window.YTConfig)var YTConfig={host:"http://www.youtube.com"};YT.loading||(YT.loading=1,function(){var l=[];YT.ready=function(f){YT.loaded?f():l.push(f)},window.onYTReady=function(){YT.loaded=1;for(var i=0;i<l.length;i++)try{l[i]()}catch(e){}},YT.setConfig=function(c){for(var k in c)c.hasOwnProperty(k)&&(YTConfig[k]=c[k])};var a=document.createElement("script");a.type="text/javascript",a.id="www-widgetapi-script",a.src="https://s.ytimg.com/yts/jsbin/www-widgetapi-vfliWHxmV/www-widgetapi.js",a.async=!0;var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}());
// Init - YT EMBED
var onYouTubeIframeAPIReady=function(){player=new YT.Player("player",{height:"380",width:"701",videoId:"HoSMWkL1iGY",playerVars:{color:"white",html5:1,controls:1,modestbranding:1,autoplay:0,rel:0,showinfo:0},events:{onStateChange:onPlayerStateChange}});
// YT EMBED Thumbnail
var thumbnail=document.getElementById("ytembed-thumbnail");thumbnail&&(thumbnail.src="http://lchomesde.aycdemo.com/themes/site/assets/images/hp-video-example.jpg")},player,playView=document.getElementById("player");$(playView).hide();/* When Youtube Video Ends Replace iFrame with Thumbnail*/
var onPlayerStateChange=function(event){event.data==YT.PlayerState.ENDED&&($("#player").hide(),$(".start-video").fadeIn("slow"),$("#thumbnail_container").fadeIn("slow"))};/* Start Youtube Video Replace Thumbnail with iFrame*/
$(document).on("click",".start-video",function(){$(this).fadeOut("slow"),$("#player").show(),$("#thumbnail_container").fadeOut("slow"),player.playVideo()}),// Init - Video Slider Slick
$(".combined-slider").slick({autoplay:!1,autoplaySpeed:3e3,arrows:!0,dots:!0,mobileFirst:!0,prevArrow:'<span class="slick-prev">&lt;</span>',nextArrow:'<span class="slick-next">&gt;</span>',slidesToShow:1,slidesToScroll:1,fade:!0,cssEase:"linear"});
// Init - YT EMBED
var onYouTubeIframeAPIReady=function(){player=new YT.Player("player",{height:500,width:100,videoId:"HoSMWkL1iGY",playerVars:{color:"white",html5:1,controls:1,modestbranding:1,autoplay:0,rel:0,showinfo:0},events:{onStateChange:onPlayerStateChange}});
// YT EMBED Thumbnail
var thumbnail=document.getElementById("ytembed-thumbnail");thumbnail&&(thumbnail.src="http://lchomesde.aycdemo.com/themes/site/assets/images/hp-video-example.jpg",thumbnail.height=500,thumbnail.width="100%")},player,playView=document.getElementById("player");$(playView).hide();/* When Youtube Video Ends Replace iFrame with Thumbnail*/
var onPlayerStateChange=function(event){event.data==YT.PlayerState.PAUSED&&($("#player").hide(),$(".hero-wide-overlay").fadeIn("slow"),$("#thumbnail_container").fadeIn("slow")),event.data==YT.PlayerState.ENDED&&($("#player").hide(),$(".start-video").fadeIn("slow"),$("#thumbnail_container").fadeIn("slow"))};/* Start Youtube Video Replace Thumbnail with iFrame*/
$(document).on("click",".start-video",function(){$(this).fadeOut("slow"),$("#player").show(),$("#thumbnail_container").fadeOut("slow"),player.playVideo()}),$(".events-slider-default").slick({autoplay:!0,autoplaySpeed:5e3,arrows:!0,dots:!1,mobileFirst:!0,slidesToShow:1,slidesToScroll:1,prevArrow:'<div class="slick-prev">&lt;</div>',nextArrow:'<div class="slick-next">&gt;</div>',responsive:[{breakpoint:1e3,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:700,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:500,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".events-slider-reveal").slick({autoplay:!0,autoplaySpeed:5e3,arrows:!0,dots:!1,mobileFirst:!0,slidesToShow:1,slidesToScroll:1,prevArrow:'<div class="slick-prev">&lt;</div>',nextArrow:'<div class="slick-next">&gt;</div>',responsive:[{breakpoint:1e3,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:700,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:500,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".viewer-container").click(function(e){e.preventDefault(),$(".viewer-placeholder").hide(),$("#viewer-iframe").attr("src","https://www.google.com/maps/embed?pb=!1m0!4v1501869930931!6m8!1m7!1sfOBA9z1mEbUAAAQvxazcTw!2m2!1d40.77119016639963!2d-73.95632464851832!3f275!4f0!5f0.7820865974627469")}),// Init - Hero Slick
$(".hero-2col").slick({autoplay:!0,autoplaySpeed:5e3,arrows:!1,dots:!0,mobileFirst:!0,slidesToShow:1,slidesToScroll:1}),// Init - Hero Slick
$(".hero-wide").slick({autoplay:!0,autoplaySpeed:5e3,arrows:!1,dots:!0,mobileFirst:!0,slidesToShow:1,slidesToScroll:1}),$(".images-slider-multi").slick({infinite:!1,speed:300,slidesToShow:3,slidesToScroll:3,arrows:!1,dots:!0,responsive:[{breakpoint:800,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}]}),//Images Slider Default
$(".images-slider-show1").slick({autoplay:!0,autoplaySpeed:3e3,arrows:!0,dots:!0,mobileFirst:!0,prevArrow:'<span class="slick-prev">&lt;</span>',nextArrow:'<span class="slick-next">&gt;</span>',slidesToShow:1,slidesToScroll:1});var ifr=document.getElementById("JotFormIFrame-72493254190154");if(window.location.href&&window.location.href.indexOf("?")>-1){var get=window.location.href.substr(window.location.href.indexOf("?")+1);if(ifr&&get.length>0){var src=ifr.src;src=src.indexOf("?")>-1?src+"&"+get:src+"?"+get,ifr.src=src}}window.handleIFrameMessage=function(e){var args=e.data.split(":");if(args.length>2?iframe=document.getElementById("JotFormIFrame-"+args[2]):iframe=document.getElementById("JotFormIFrame"),iframe){switch(args[0]){case"scrollIntoView":iframe.scrollIntoView();break;case"setHeight":iframe.style.height=args[1]+"px";break;case"collapseErrorPage":iframe.clientHeight>window.innerHeight&&(iframe.style.height=window.innerHeight+"px");break;case"reloadPage":window.location.reload()}if(e.origin.indexOf("jotform")>-1&&"contentWindow"in iframe&&"postMessage"in iframe.contentWindow){var urls={docurl:encodeURIComponent(document.URL),referrer:encodeURIComponent(document.referrer)};iframe.contentWindow.postMessage(JSON.stringify({type:"urls",value:urls}),"*")}}},window.addEventListener?window.addEventListener("message",handleIFrameMessage,!1):window.attachEvent&&window.attachEvent("onmessage",handleIFrameMessage),
//Sponsors Footer 
$(".footer-sponsors").slick({infinite:!1,speed:300,autoplay:!0,autoplaySpeed:5e3,slidesToShow:5,slidesToScroll:5,arrows:!1,dots:!0,responsive:[{breakpoint:1200,settings:{slidesToShow:5,slidesToScroll:5}},{breakpoint:1e3,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:700,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}}]}),$(".media-viewer-main").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1,fade:!0,asNavFor:".media-viewer-thumbs"}),$(".media-viewer-thumbs").slick({slidesToShow:4,slidesToScroll:1,asNavFor:".media-viewer-main",dots:!1,arrows:!1,focusOnSelect:!0}),$("#social-tabs").myTabs(),$(".social-feed-twowide .sf-button").on("click",function(e){var selectedItem=$(this).attr("href");return $(".social-feed-twowide").find(".sf-item, .sf-button").removeClass("sf-active"),$($(this)).addClass("sf-active"),$(selectedItem).addClass("sf-active"),!1}),// Init - Hero Slick
$(".testimonials-slider").slick({autoplay:!0,autoplaySpeed:5e3,arrows:!1,dots:!0,mobileFirst:!0,slidesToShow:1,slidesToScroll:1}),init_vidlist("#video-list-replacer",".video-list-select-trigger"),// Init - Video Slider Slick
$(".videos-slider").slick({autoplay:!1,autoplaySpeed:3e3,arrows:!0,dots:!0,mobileFirst:!0,prevArrow:'<span class="slick-prev">&lt;</span>',nextArrow:'<span class="slick-next">&gt;</span>',slidesToShow:1,slidesToScroll:1}),$("#button").click(function(){$("#button").toggleClass("blue red")}),$(".toggle").focusin(function(){$(this).addClass("active"),$(".search").addClass("move")}),$(".toggle").focusout(function(){$(this).removeClass("active").val(""),$(".search").removeClass("move")}),$(function(){
//////////////////////////////
// Core Inits
//////////////////////////////
// Init - Placeholder
$("input, textarea").placeholder(),
// Init - Label Hint
$(".lbl-hint").labelHint(),
// Init - Chosen Plugin
$(".chosen-select").chosen(),
// Init - Custom Checkbox
$(".custom-chbx").customChbx(),
// Init - File Input 
$(".fileinput").fileInput(),
//////////////////////////////
// Site Inits
//////////////////////////////
//////////////////////////////
// Other
//////////////////////////////
// Fix Startup CSS animations
$(window).load(function(){$("body").removeClass("preload")})});