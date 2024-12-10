import{g as C,d as v}from"./dayjs.min.BaPeHrhp.js";import{t as F}from"./utils.DUyWHIWA.js";import{c as H}from"./consts.BC1ofTtb.js";var d={exports:{}},G=d.exports,S;function y(){return S||(S=1,function(u,g){(function(a,n){u.exports=n()})(G,function(){return function(a,n){var $=n.prototype,p=$.format;$.format=function(f){var r=this,e=this.$locale();if(!this.isValid())return p.bind(this)(f);var c=this.$utils(),D=(f||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(o){switch(o){case"Q":return Math.ceil((r.$M+1)/3);case"Do":return e.ordinal(r.$D);case"gggg":return r.weekYear();case"GGGG":return r.isoWeekYear();case"wo":return e.ordinal(r.week(),"W");case"w":case"ww":return c.s(r.week(),o==="w"?1:2,"0");case"W":case"WW":return c.s(r.isoWeek(),o==="W"?1:2,"0");case"k":case"kk":return c.s(String(r.$H===0?24:r.$H),o==="k"?1:2,"0");case"X":return Math.floor(r.$d.getTime()/1e3);case"x":return r.$d.getTime();case"z":return"["+r.offsetName()+"]";case"zzz":return"["+r.offsetName("long")+"]";default:return o}});return p.bind(this)(D)}}})}(d)),d.exports}var q=y();const b=C(q);var m={exports:{}},E=m.exports,U;function j(){return U||(U=1,function(u,g){(function(a,n){u.exports=n()})(E,function(){var a="minute",n=/[+-]\d\d(?::?\d\d)?/g,$=/([+-]|\d\d)/g;return function(p,f,r){var e=f.prototype;r.utc=function(t){var s={date:t,utc:!0,args:arguments};return new f(s)},e.utc=function(t){var s=r(this.toDate(),{locale:this.$L,utc:!0});return t?s.add(this.utcOffset(),a):s},e.local=function(){return r(this.toDate(),{locale:this.$L,utc:!1})};var c=e.parse;e.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),c.call(this,t)};var D=e.init;e.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else D.call(this)};var o=e.utcOffset;e.utcOffset=function(t,s){var h=this.$utils().u;if(h(t))return this.$u?0:h(this.$offset)?o.call(this):this.$offset;if(typeof t=="string"&&(t=function(x){x===void 0&&(x="");var O=x.match(n);if(!O)return null;var Y=(""+O[0]).match($)||["-",0,0],z=Y[0],M=60*+Y[1]+ +Y[2];return M===0?0:z==="+"?M:-M}(t),t===null))return this;var l=Math.abs(t)<=16?60*t:t,i=this;if(s)return i.$offset=l,i.$u=t===0,i;if(t!==0){var w=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(i=this.local().add(l+w,a)).$offset=l,i.$x.$localOffset=w}else i=this.utc();return i};var W=e.format;e.format=function(t){var s=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return W.call(this,s)},e.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},e.isUTC=function(){return!!this.$u},e.toISOString=function(){return this.toDate().toISOString()},e.toString=function(){return this.toDate().toUTCString()};var k=e.toDate;e.toDate=function(t){return t==="s"&&this.$offset?r(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():k.call(this)};var T=e.diff;e.diff=function(t,s,h){if(t&&this.$u===t.$u)return T.call(this,t,s,h);var l=this.local(),i=r(t).local();return T.call(l,i,s,h)}}})}(m)),m.exports}var A=j();const I=C(A);v.locale(H.lang);v.extend(b);v.extend(I);function R(u,g="post.dateFormat"){if(u){const a=F(g)||"YYYY-MM-DD";return v(u).utc().format(a)}else return""}export{R as f};