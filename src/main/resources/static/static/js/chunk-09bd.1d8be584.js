(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-09bd"],{"3U1A":function(t,e,o){"use strict";o.r(e);var r=o("FyfS"),i=o.n(r),n=o("m1cH"),s=o.n(n),l={name:"CustomeLegend",props:{choose:{type:Array,default:function(){return[]}},filter:{type:Boolean|Number,default:12}},data:function(){return{filters:this.filter,currentList:[],defColor:[["#494ece","#00d269","#ff8103","#00dfcf","#f23ba9","#0080ff","#c13ce1","#ffcd03","#7c56ff","#a7cf02","#00d3ff","#ff1414"],["#6e78fc","#66e4a5","#ffb36f","#6df1e7","#e576c2","#66b3ff","#dd83f2","#ffea84","#b692f6","#e1f397","#77e3ff","#ff5a5a"]],unchooseColor:["#bbbbc8","#E6E6E6"],chooseColor:[],selectedColor:0,withOutDialog:5,dialogShowing:!1,currentChoosed:[]}},computed:{filterLimit:function(){var t=this,e=function(e){return t.currentList.length>=e?e:t.currentList.length},o="number"==typeof this.filters?e(this.filters):e(12);return Math.floor(o/this.currentList[0].length)}},watch:{choose:{handler:function(){this.toDisplay(),this.colorInit()}}},beforeMount:function(){this.toDisplay(),this.colorInit()},methods:{toDisplay:function(){var t=[],e=[].concat(s()(this.choose)),o=!0,r=!1,n=void 0;try{for(var l,c=i()(e);!(o=(l=c.next()).done);o=!0){for(var a=l.value,h=[],u=Array.isArray(a)?a:[a],f=0;f<u.length;f++){var d=u[f];if(d.group)for(var g=0;g<u.length;g++){var v=u[g];h.push({label:"string"==typeof d?v:v.label,value:"string"==typeof d?v:v.value,group:d.group,color:this.unchooseColor[this.colorSelect(this.unchooseColor.length,g)]})}else h.push({label:"string"==typeof d?d:d.label,value:"string"==typeof d?d:d.value,group:"string"==typeof d?d:d.value,color:this.unchooseColor[this.colorSelect(this.unchooseColor.length,f)]})}t.push(h)}}catch(t){r=!0,n=t}finally{try{!o&&c.return&&c.return()}finally{if(r)throw n}}this.currentList=t},colorSelect:function(t,e){return e%(t-1)},showDialog:function(){this.dialogShowing=!0},hideDialog:function(){this.dialogShowing=!1},labelDisplay:function(t){return{backgroundColor:t}},clearAll:function(){var t=!0,e=!1,o=void 0;try{for(var r,n=i()(this.currentChoosed);!(t=(r=n.next()).done);t=!0){var s=r.value;this.clearItem(s)}}catch(t){e=!0,o=t}finally{try{!t&&n.return&&n.return()}finally{if(e)throw o}}},clearItem:function(t){var e=this,o=this.currentChoosed.indexOf(t);o>=0&&this.currentChoosed.splice(o,1),this.currentList[t].forEach(function(t,o){0===o&&e.filters&&e.selectedColor.push(e.chooseColor[0].indexOf(t.color)),t.color=e.unchooseColor[e.colorSelect(e.unchooseColor.length,o)]})},chooseItem:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(this.currentChoosed.indexOf(t)>=0)this.clearItem(t);else{if(this.filters){var o=this.filterLimit;this.currentChoosed.length>=o&&this.clearItem(this.currentChoosed[0])}this.currentChoosed.push(t);for(var r=this.currentList[t],i=0;i<r.length;i++){var n=r[i],s=this.colorSelect(this.chooseColor.length,i);n.color=this.filters?this.chooseColor[s][this.selectedColor[0]]:this.chooseColor[s][0]}this.filters&&this.selectedColor.splice(0,1)}e&&this.request()},colorInit:function(){var t=this.filterLimit>this.defColor[0].length?this.defColor[0].length:this.filterLimit,e=[],o=!0,r=!1,n=void 0;try{for(var s,l=i()(this.defColor);!(o=(s=l.next()).done);o=!0){var c=s.value;if(this.filters){for(var a=[],h=0;h<t;h++)a.push(c[h]);e.push(a)}else e.push(c[0])}}catch(t){r=!0,n=t}finally{try{!o&&l.return&&l.return()}finally{if(r)throw n}}this.chooseColor=e,this.filters&&this.selectedColorInit()},selectedColorInit:function(){for(var t=[],e=0;e<this.chooseColor[0].length;e++)t.push(e);this.selectedColor=t},setDefault:function(t){if(t)this.setProperty(t);else for(var e=0;e<this.filterLimit;e++)e<this.currentList.length&&this.chooseItem(e,!1);return this.request(),!0},change:function(){var t=this.getProperty();this.$emit("change",t)},confirm:function(){var t=this.getProperty(!0);this.$emit("form",t)},request:function(){this.confirm(),this.change()},getProperty:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[],o=!0,r=!1,n=void 0;try{for(var s,l=i()(this.currentList);!(o=(s=l.next()).done);o=!0){var c=s.value,a=[];if(this.unchooseColor.indexOf(c[0].color)<0){var h=!0,u=!1,f=void 0;try{for(var d,g=i()(c);!(h=(d=g.next()).done);h=!0){var v=d.value;t?a.indexOf(v.color)<0&&a.push(v.color):e.push(v.value)}}catch(t){u=!0,f=t}finally{try{!h&&g.return&&g.return()}finally{if(u)throw f}}t&&e.push({group:{name:c[0].group,color:a},items:c})}}}catch(t){r=!0,n=t}finally{try{!o&&l.return&&l.return()}finally{if(r)throw n}}return e},setProperty:function(t){this.clearAll();var e=!0,o=!1,r=void 0;try{for(var n,s=i()(t);!(e=(n=s.next()).done);e=!0)for(var l=n.value,c=0;c<this.currentList.length;c++){this.currentList[c][0].group===l.group&&this.chooseItem(c,!1)}}catch(t){o=!0,r=t}finally{try{!e&&s.return&&s.return()}finally{if(o)throw r}}}}},c=(o("aT6S"),o("KHd+")),a=Object(c.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"legend__container"},[o("div",{staticClass:"legend__display"},[t._l(t.currentList.slice(0,t.withOutDialog),function(e,r){return o("div",{key:r,staticClass:"legend__cp",on:{click:function(e){e.stopPropagation(),t.chooseItem(r)}}},t._l(e,function(e,r){return o("span",{key:r,staticClass:"legend__label",style:t.labelDisplay(e.color)},[t._v(t._s(e.label))])}))}),t._v(" "),t.currentList.length>t.withOutDialog?o("div",{staticClass:"legend__cp",on:{click:t.showDialog}},t._l(t.currentList[0],function(e,r){return o("span",{key:r,staticClass:"legend__lable",style:t.labelDisplay(t.unchooseColor[r])},[t._v("...")])})):t._e(),t._v(" "),o("div",{staticClass:"legend__cp"},[o("i",{staticClass:"el-icon-download",on:{click:function(e){return e.stopPropagation(),t.showDialog(e)}}})])],2),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.dialogShowing,expression:"dialogShowing"}],staticClass:"legend__dialog"},[o("header",{staticClass:"legend__d-header"},[o("span",{staticClass:"legend__d-text"},[t._v("Total: "+t._s(t.currentList.length))]),t._v(" "),o("span",{staticClass:"legend__d-text"},[t._v("Choose: "+t._s(t.currentChoosed.length))]),t._v(" "),o("span",{staticClass:"legend__d-clear",on:{click:function(e){return e.stopPropagation(),t.clearAll(e)}}},[t._v("Clear")]),t._v(" "),o("span",{staticClass:"legend__d-hide"},[o("i",{staticClass:"el-icon-upload",on:{click:function(e){return e.stopPropagation(),t.hideDialog(e)}}})])]),t._v(" "),o("main",{staticClass:"legend__d-main"},t._l(t.currentList,function(e,r){return o("div",{key:r,staticClass:"legend__cp",on:{click:function(e){e.stopPropagation(),t.chooseItem(r)}}},t._l(e,function(e,r){return o("span",{key:r,staticClass:"legend__label",style:t.labelDisplay(e.color)},[t._v(t._s(e.label))])}))}))])])},[],!1,null,"810cf342",null);a.options.__file="index.vue";e.default=a.exports},aT6S:function(t,e,o){"use strict";var r=o("fxW/");o.n(r).a},"fxW/":function(t,e){}}]);