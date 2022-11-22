


$(function() {



$.ajax({
  url: 'get_competencies',
  type: 'GET',
  dataType: 'json',

  success: function(options) {
	$('#artcat').selectize({
	    valueField: 'id',
	    labelField: 'competencies',
	    searchField:'competencies',
		options: options,
		preload: true,
    });
    }
});


	

$("#articleeditor").validate	
({
	ignore: ':hidden:not([class~=selectized]),:hidden > .selectized, .selectize-control .selectize-input input',
	ignore: '',
    
    rules: {
        
        	   headline: {
	                 required: true,
	                 minlength: 10,
	                 maxlength: 100
		             },
		        summary: { 
			         required: true,
	                 minlength: 10,
	                 maxlength: 1000
			          },
				editor:{
	                 required: true,
	                 minlength: 500
					 },
				artcat:{
	                 required: true,
					}	 
				
			},

 messages: {
 				headline	: "10 - 100 characters allowed.",
 				summary		: "Please enter between 10 and 1000 characters.",
 				editor		: "Require minumum 500 characters.",
 				artcat		: "Please pick an Article Category"
 			},
	errorPlacement: function(error, element) {
		   
		var v=element.attr("id");
	    
		if (v=="editor") 
		{
			$("#err").html( error );  
		}
		else 
		{
			error.insertAfter(element);
        }
	},

});



$("#preview").on("click",function(e){
 e.preventDefault();
 
  $.ajax({
  
  type : 'POST',
  url  : 'articlesave',
  data :  $("#articleeditor").serialize()+"&prev=1",
  success :  function(data)
		     {
		     $("#arti").val(data);
	         
			 $(location).prop('href', "https://www.expertbase.org/a"+data);
	         
	       	 }
  });
  
  
});




$("#SaveArticle").on("click",function(e){
e.preventDefault();

if ($('#articleeditor').valid()) 
	{  
	
	swal({
		  title:"All Saved!",
		  text: " ",
		  buttons: false,
		  icon: "success",
		  timer: 3000,
		});
	
	
	
	  $.ajax({
	  
	  type : 'POST',
	  url  : 'articlesave',
	  data :  $("#articleeditor").serialize(),
	  success :  function(data)
			       {
			     		     
					window.location.replace("https://www.expertbase.org/dashboard#articles");	     	      
			       }
	  });
	}
 });
 

	$('#editor').summernote({ 
		callbacks: {
		    onKeydown: function(e) {
				var words = $(".note-editable").text();
				var totalwords = words.length;
				$("#total-caracteres").text(totalwords);

		    },
		    onPaste: function (e) {
		        var bufferText = ((e.originalEvent || e).clipboardData || window.clipboardData).getData('Text');
		        e.preventDefault();
		        document.execCommand('insertText', false, bufferText);
		    }
		},	
		height : 500,
		toolbar: 
		[
	
			['style', ['bold', 'italic', 'underline', 'clear']],
		    ['font', ['strikethrough', 'superscript', 'subscript']],
		    ['color', ['color']],
		    ['para', ['ul', 'ol', 'paragraph']],
		    ['height', ['height']]
		]
	});
});


// letter count textboxes
$('.countable').on("keypress focus keyup paste", function(){
	var allow= $(this).attr('maxlength');
    if(this.value.length > allow){
        return false;
	}
$(this).siblings('.tiny_hint').html("<span class='pull-right s13muted'>"+(this.value.length)+" / "+allow)+"</span>";
});



// selectize


(function(c,e){"function"===typeof define&&define.amd?define("sifter",e):"object"===typeof exports?module.exports=e():c.Sifter=e()})(this,function(){var c=function(c,f){this.items=c;this.settings=f||{diacritics:!0}};c.prototype.tokenize=function(c){c=(String(c||"").toLowerCase()+"").replace(/^\s+|\s+$|/g,"");if(!c||!c.length)return[];var f,e,n=[],k=c.split(/ +/);c=0;for(f=k.length;c<f;c++){var l=(k[c]+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");if(this.settings.diacritics)for(e in m)m.hasOwnProperty(e)&&
(l=l.replace(new RegExp(e,"g"),m[e]));n.push({string:k[c],regex:new RegExp(l,"i")})}return n};c.prototype.iterator=function(c,f){(p(c)?Array.prototype.forEach||function(c){for(var f=0,e=this.length;f<e;f++)c(this[f],f,this)}:function(c){for(var f in this)this.hasOwnProperty(f)&&c(this[f],f,this)}).apply(c,[f])};c.prototype.getScoreFunction=function(c,f){c=this.prepareSearch(c,f);var e=c.tokens;var n=c.options.fields;var k=e.length;var l=c.options.nesting;var u=function(c,f){if(!c)return 0;c=String(c||
"");var e=c.search(f.regex);if(-1===e)return 0;var l=f.string.length/c.length;0===e&&(l+=.5);return l},m=function(){var c=n.length;return c?1===c?function(c,f){return u(y(f,n[0],l),c)}:function(f,e){for(var k=0,w=0;k<c;k++)w+=u(y(e,n[k],l),f);return w/c}:function(){return 0}}();return k?1===k?function(c){return m(e[0],c)}:"and"===c.options.conjunction?function(c){for(var f,l=0,n=0;l<k;l++){f=m(e[l],c);if(0>=f)return 0;n+=f}return n/k}:function(c){for(var f=0,l=0;f<k;f++)l+=m(e[f],c);return l/k}:function(){return 0}};
c.prototype.getSortFunction=function(c,f){var n,u;var k=this;c=k.prepareSearch(c,f);var l=!c.query&&f.sort_empty||f.sort;var m=function(c,e){return"$score"===c?e.score:y(k.items[e.id],c,f.nesting)};var v=[];if(l){var t=0;for(n=l.length;t<n;t++)(c.query||"$score"!==l[t].field)&&v.push(l[t])}if(c.query){l=!0;t=0;for(n=v.length;t<n;t++)if("$score"===v[t].field){l=!1;break}l&&v.unshift({field:"$score",direction:"desc"})}else for(t=0,n=v.length;t<n;t++)if("$score"===v[t].field){v.splice(t,1);break}var p=
[];t=0;for(n=v.length;t<n;t++)p.push("desc"===v[t].direction?-1:1);if(u=v.length){if(1===u){var x=v[0].field;var E=p[0];return function(c,f){return E*e(m(x,c),m(x,f))}}return function(c,f){var a;for(a=0;a<u;a++){var b=v[a].field;if(b=p[a]*e(m(b,c),m(b,f)))return b}return 0}}return null};c.prototype.prepareSearch=function(c,f){if("object"===typeof c)return c;f=u({},f);var e=f.fields,n=f.sort,k=f.sort_empty;e&&!p(e)&&(f.fields=[e]);n&&!p(n)&&(f.sort=[n]);k&&!p(k)&&(f.sort_empty=[k]);return{options:f,
query:String(c||"").toLowerCase(),tokens:this.tokenize(c),total:0,items:[]}};c.prototype.search=function(c,f){var e,n;var k=this.prepareSearch(c,f);f=k.options;c=k.query;var l=f.score||this.getScoreFunction(k);c.length?this.iterator(this.items,function(c,n){e=l(c);(!1===f.filter||0<e)&&k.items.push({score:e,id:n})}):this.iterator(this.items,function(c,f){k.items.push({score:1,id:f})});(n=this.getSortFunction(k,f))&&k.items.sort(n);k.total=k.items.length;"number"===typeof f.limit&&(k.items=k.items.slice(0,
f.limit));return k};var e=function(c,f){if("number"===typeof c&&"number"===typeof f)return c>f?1:c<f?-1:0;c=x(String(c||""));f=x(String(f||""));return c>f?1:f>c?-1:0},u=function(c,f){var e,n,k;var l=1;for(e=arguments.length;l<e;l++)if(k=arguments[l])for(n in k)k.hasOwnProperty(n)&&(c[n]=k[n]);return c},y=function(c,f,e){if(c&&f){if(!e)return c[f];for(f=f.split(".");f.length&&(c=c[f.shift()]););return c}},p=Array.isArray||"undefined"!==typeof $&&$.isArray||function(c){return"[object Array]"===Object.prototype.toString.call(c)},
m={a:"[a\u1e00\u1e01\u0102\u0103\u00c2\u00e2\u01cd\u01ce\u023a\u2c65\u0226\u0227\u1ea0\u1ea1\u00c4\u00e4\u00c0\u00e0\u00c1\u00e1\u0100\u0101\u00c3\u00e3\u00c5\u00e5\u0105\u0104\u00c3\u0105\u0104]",b:"[b\u2422\u03b2\u0392B\u0e3f\ud800\udf01\u16d2]",c:"[c\u0106\u0107\u0108\u0109\u010c\u010d\u010a\u010bC\u0304c\u0304\u00c7\u00e7\u1e08\u1e09\u023b\u023c\u0187\u0188\u0255\u1d04\uff23\uff43]",d:"[d\u010e\u010f\u1e0a\u1e0b\u1e10\u1e11\u1e0c\u1e0d\u1e12\u1e13\u1e0e\u1e0f\u0110\u0111D\u0326d\u0326\u0189\u0256\u018a\u0257\u018b\u018c\u1d6d\u1d81\u1d91\u0221\u1d05\uff24\uff44\u00f0]",
e:"[e\u00c9\u00e9\u00c8\u00e8\u00ca\u00ea\u1e18\u1e19\u011a\u011b\u0114\u0115\u1ebc\u1ebd\u1e1a\u1e1b\u1eba\u1ebb\u0116\u0117\u00cb\u00eb\u0112\u0113\u0228\u0229\u0118\u0119\u1d92\u0246\u0247\u0204\u0205\u1ebe\u1ebf\u1ec0\u1ec1\u1ec4\u1ec5\u1ec2\u1ec3\u1e1c\u1e1d\u1e16\u1e17\u1e14\u1e15\u0206\u0207\u1eb8\u1eb9\u1ec6\u1ec7\u2c78\u1d07\uff25\uff45\u0258\u01dd\u018f\u0190\u03b5]",f:"[f\u0191\u0192\u1e1e\u1e1f]",g:"[g\u0262\u20b2\u01e4\u01e5\u011c\u011d\u011e\u011f\u0122\u0123\u0193\u0260\u0120\u0121]",
h:"[h\u0124\u0125\u0126\u0127\u1e28\u1e29\u1e96\u1e96\u1e24\u1e25\u1e22\u1e23\u0266\u02b0\u01f6\u0195]",i:"[i\u00cd\u00ed\u00cc\u00ec\u012c\u012d\u00ce\u00ee\u01cf\u01d0\u00cf\u00ef\u1e2e\u1e2f\u0128\u0129\u012e\u012f\u012a\u012b\u1ec8\u1ec9\u0208\u0209\u020a\u020b\u1eca\u1ecb\u1e2c\u1e2d\u0197\u0268\u0268\u0306\u1d7b\u1d96\u0130iI\u0131\u026a\uff29\uff49]",j:"[j\u0237\u0134\u0135\u0248\u0249\u029d\u025f\u02b2]",k:"[k\u0198\u0199\ua740\ua741\u1e30\u1e31\u01e8\u01e9\u1e32\u1e33\u1e34\u1e35\u03ba\u03f0\u20ad]",
l:"[l\u0141\u0142\u013d\u013e\u013b\u013c\u0139\u013a\u1e36\u1e37\u1e38\u1e39\u1e3c\u1e3d\u1e3a\u1e3b\u013f\u0140\u023d\u019a\u2c60\u2c61\u2c62\u026b\u026c\u1d85\u026d\u0234\u029f\uff2c\uff4c]",n:"[n\u0143\u0144\u01f8\u01f9\u0147\u0148\u00d1\u00f1\u1e44\u1e45\u0145\u0146\u1e46\u1e47\u1e4a\u1e4b\u1e48\u1e49N\u0308n\u0308\u019d\u0272\u0220\u019e\u1d70\u1d87\u0273\u0235\u0274\uff2e\uff4e\u014a\u014b]",o:"[o\u00d8\u00f8\u00d6\u00f6\u00d3\u00f3\u00d2\u00f2\u00d4\u00f4\u01d1\u01d2\u0150\u0151\u014e\u014f\u022e\u022f\u1ecc\u1ecd\u019f\u0275\u01a0\u01a1\u1ece\u1ecf\u014c\u014d\u00d5\u00f5\u01ea\u01eb\u020c\u020d\u0555\u0585]",
p:"[p\u1e54\u1e55\u1e56\u1e57\u2c63\u1d7d\u01a4\u01a5\u1d71]",q:"[q\ua756\ua757\u02a0\u024a\u024b\ua758\ua759q\u0303]",r:"[r\u0154\u0155\u024c\u024d\u0158\u0159\u0156\u0157\u1e58\u1e59\u0210\u0211\u0212\u0213\u1e5a\u1e5b\u2c64\u027d]",s:"[s\u015a\u015b\u1e60\u1e61\u1e62\u1e63\ua7a8\ua7a9\u015c\u015d\u0160\u0161\u015e\u015f\u0218\u0219S\u0308s\u0308]",t:"[t\u0164\u0165\u1e6a\u1e6b\u0162\u0163\u1e6c\u1e6d\u01ae\u0288\u021a\u021b\u1e70\u1e71\u1e6e\u1e6f\u01ac\u01ad]",u:"[u\u016c\u016d\u0244\u0289\u1ee4\u1ee5\u00dc\u00fc\u00da\u00fa\u00d9\u00f9\u00db\u00fb\u01d3\u01d4\u0170\u0171\u016c\u016d\u01af\u01b0\u1ee6\u1ee7\u016a\u016b\u0168\u0169\u0172\u0173\u0214\u0215\u222a]",
v:"[v\u1e7c\u1e7d\u1e7e\u1e7f\u01b2\u028b\ua75e\ua75f\u2c71\u028b]",w:"[w\u1e82\u1e83\u1e80\u1e81\u0174\u0175\u1e84\u1e85\u1e86\u1e87\u1e88\u1e89]",x:"[x\u1e8c\u1e8d\u1e8a\u1e8b\u03c7]",y:"[y\u00dd\u00fd\u1ef2\u1ef3\u0176\u0177\u0178\u00ff\u1ef8\u1ef9\u1e8e\u1e8f\u1ef4\u1ef5\u024e\u024f\u01b3\u01b4]",z:"[z\u0179\u017a\u1e90\u1e91\u017d\u017e\u017b\u017c\u1e92\u1e93\u1e94\u1e95\u01b5\u01b6]"},x=function(){var c,f,e="",u={};for(f in m)if(m.hasOwnProperty(f)){var k=m[f].substring(2,m[f].length-1);e+=
k;var l=0;for(c=k.length;l<c;l++)u[k.charAt(l)]=f}var p=new RegExp("["+e+"]","g");return function(c){return c.replace(p,function(c){return u[c]}).toLowerCase()}}();return c});
(function(c,e){"function"===typeof define&&define.amd?define("microplugin",e):"object"===typeof exports?module.exports=e():c.MicroPlugin=e()})(this,function(){var c={isArray:Array.isArray||function(c){return"[object Array]"===Object.prototype.toString.call(c)}};return{mixin:function(e){e.plugins={};e.prototype.initializePlugins=function(e){var u,p=[];this.plugins={names:[],settings:{},requested:{},loaded:{}};if(c.isArray(e)){var m=0;for(u=e.length;m<u;m++)"string"===typeof e[m]?p.push(e[m]):(this.plugins.settings[e[m].name]=
e[m].options,p.push(e[m].name))}else if(e)for(m in e)e.hasOwnProperty(m)&&(this.plugins.settings[m]=e[m],p.push(m));for(;p.length;)this.require(p.shift())};e.prototype.loadPlugin=function(c){var u=this.plugins,p=e.plugins[c];if(!e.plugins.hasOwnProperty(c))throw Error('Unable to find "'+c+'" plugin');u.requested[c]=!0;u.loaded[c]=p.fn.apply(this,[this.plugins.settings[c]||{}]);u.names.push(c)};e.prototype.require=function(c){var e=this.plugins;if(!this.plugins.loaded.hasOwnProperty(c)){if(e.requested[c])throw Error('Plugin has circular dependency ("'+
c+'")');this.loadPlugin(c)}return e.loaded[c]};e.define=function(c,y){e.plugins[c]={name:c,fn:y}}}}});
(function(c,e){"function"===typeof define&&define.amd?define("selectize",["jquery","sifter","microplugin"],e):"object"===typeof exports?module.exports=e(require("jquery"),require("sifter"),require("microplugin")):c.Selectize=e(c.jQuery,c.Sifter,c.MicroPlugin)})(this,function(c,e,u){var y=function(a,b){if("string"!==typeof b||b.length){var d="string"===typeof b?new RegExp(b,"i"):b,c=function(a){var b=0;if(3===a.nodeType){var g=a.data.search(d);if(0<=g&&0<a.data.length){var h=a.data.match(d);b=document.createElement("span");
b.className="highlight";a=a.splitText(g);a.splitText(h[0].length);g=a.cloneNode(!0);b.appendChild(g);a.parentNode.replaceChild(b,a);b=1}}else if(1===a.nodeType&&a.childNodes&&!/(script|style)/i.test(a.tagName)&&("highlight"!==a.className||"SPAN"!==a.tagName))for(g=0;g<a.childNodes.length;++g)g+=c(a.childNodes[g]);return b};return a.each(function(){c(this)})}};c.fn.removeHighlight=function(){return this.find("span.highlight").each(function(){this.parentNode.firstChild.nodeName;var a=this.parentNode;
a.replaceChild(this.firstChild,this);a.normalize()}).end()};var p=function(){};p.prototype={on:function(a,b){this._events=this._events||{};this._events[a]=this._events[a]||[];this._events[a].push(b)},off:function(a,b){var d=arguments.length;if(0===d)return delete this._events;if(1===d)return delete this._events[a];this._events=this._events||{};!1!==a in this._events&&this._events[a].splice(this._events[a].indexOf(b),1)},trigger:function(a){this._events=this._events||{};if(!1!==a in this._events)for(var b=
0;b<this._events[a].length;b++)this._events[a][b].apply(this,Array.prototype.slice.call(arguments,1))}};p.mixin=function(a){for(var b=["on","off","trigger"],d=0;d<b.length;d++)a.prototype[b[d]]=p.prototype[b[d]]};var m=/Mac/.test(navigator.userAgent),x=m?91:17,n=m?18:17,f=!/android/i.test(window.navigator.userAgent)&&!!document.createElement("input").validity,w=function(a){return"undefined"===typeof a||null===a?null:"boolean"===typeof a?a?"1":"0":a+""},A=function(a){return(a+"").replace(/&/g,"&amp;").replace(/</g,
"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},k={before:function(a,b,d){var c=a[b];a[b]=function(){d.apply(a,arguments);return c.apply(a,arguments)}},after:function(a,b,d){var c=a[b];a[b]=function(){var b=c.apply(a,arguments);d.apply(a,arguments);return b}}},l=function(a){var b=!1;return function(){b||(b=!0,a.apply(this,arguments))}},H=function(a,b){var d;return function(){var c=this,h=arguments;window.clearTimeout(d);d=window.setTimeout(function(){a.apply(c,h)},b)}},v=function(a,b,d){var c,
h=a.trigger,C={};a.trigger=function(){var d=arguments[0];if(-1!==b.indexOf(d))C[d]=arguments;else return h.apply(a,arguments)};d.apply(a,[]);a.trigger=h;for(c in C)C.hasOwnProperty(c)&&h.apply(a,C[c])},t=function(a,b,d,c){a.on(b,d,function(b){for(var d=b.target;d&&d.parentNode!==a[0];)d=d.parentNode;b.currentTarget=d;return c.apply(this,[b])})},D=function(a){var b={};if("selectionStart"in a)b.start=a.selectionStart,b.length=a.selectionEnd-b.start;else if(document.selection){a.focus();var d=document.selection.createRange(),
c=document.selection.createRange().text.length;d.moveStart("character",-a.value.length);b.start=d.text.length-c;b.length=c}return b},G=function(a){var b=null,d=function(d,h){d=d||window.event||{};h=h||{};if(!d.metaKey&&!d.altKey&&(h.force||!1!==a.data("grow"))){var g=a.val();if(d.type&&"keydown"===d.type.toLowerCase()){var e=d.keyCode;var f=48<=e&&57>=e||65<=e&&90>=e||96<=e&&111>=e||186<=e&&222>=e||32===e;46===e||8===e?(f=D(a[0]),f.length?g=g.substring(0,f.start)+g.substring(f.start+f.length):8===
e&&f.start?g=g.substring(0,f.start-1)+g.substring(f.start+1):46===e&&"undefined"!==typeof f.start&&(g=g.substring(0,f.start)+g.substring(f.start+1))):f&&(e=d.shiftKey,f=String.fromCharCode(d.keyCode),f=e?f.toUpperCase():f.toLowerCase(),g+=f)}e=a.attr("placeholder");!g&&e&&(g=e);if(g){q.$testInput||(q.$testInput=c("<span />").css({position:"absolute",top:-99999,left:-99999,width:"auto",padding:0,whiteSpace:"pre"}).appendTo("body"));q.$testInput.text(g);g=q.$testInput;e=["letterSpacing","fontSize",
"fontFamily","fontWeight","textTransform"];var l,k={};if(e)for(f=0,l=e.length;f<l;f++)k[e[f]]=a.css(e[f]);else k=a.css();g.css(k);g=q.$testInput.width()}else g=0;g+=4;g!==b&&(b=g,a.width(g),a.triggerHandler("resize"))}};a.on("keydown keyup update blur",d);d()},E=function(a){var b=document.createElement("div");b.appendChild(a.cloneNode(!0));return b.innerHTML},I=function(a,b){b||(b={});console.error("Selectize: "+a);b.explanation&&(console.group&&console.group(),console.error(b.explanation),console.group&&
console.groupEnd())},q=function(a,b){var d=a[0];d.selectize=this;var g=(g=(g=window.getComputedStyle&&window.getComputedStyle(d,null))?g.getPropertyValue("direction"):d.currentStyle&&d.currentStyle.direction)||a.parents("[dir]:first").attr("dir")||"";c.extend(this,{order:0,settings:b,$input:a,tabIndex:a.attr("tabindex")||"",tagType:"select"===d.tagName.toLowerCase()?1:2,rtl:/rtl/i.test(g),eventNS:".selectize"+ ++q.count,highlightedValue:null,isBlurring:!1,isOpen:!1,isDisabled:!1,isRequired:a.is("[required]"),
isInvalid:!1,isLocked:!1,isFocused:!1,isInputHidden:!1,isSetup:!1,isShiftDown:!1,isCmdDown:!1,isCtrlDown:!1,ignoreFocus:!1,ignoreBlur:!1,ignoreHover:!1,hasOptions:!1,currentResults:null,lastValue:"",caretPos:0,loading:0,loadedSearches:{},$activeOption:null,$activeItems:[],optgroups:{},options:{},userOptions:{},items:[],renderCache:{},onSearchChange:null===b.loadThrottle?this.onSearchChange:H(this.onSearchChange,b.loadThrottle)});this.sifter=new e(this.options,{diacritics:b.diacritics});if(this.settings.options){d=
0;for(g=this.settings.options.length;d<g;d++)this.registerOption(this.settings.options[d]);delete this.settings.options}if(this.settings.optgroups){d=0;for(g=this.settings.optgroups.length;d<g;d++)this.registerOptionGroup(this.settings.optgroups[d]);delete this.settings.optgroups}this.settings.mode=this.settings.mode||(1===this.settings.maxItems?"single":"multi");"boolean"!==typeof this.settings.hideSelected&&(this.settings.hideSelected="multi"===this.settings.mode);this.initializePlugins(this.settings.plugins);
this.setupCallbacks();this.setupTemplates();this.setup()};p.mixin(q);"undefined"!==typeof u?u.mixin(q):I("Dependency MicroPlugin is missing",{explanation:'Make sure you either: (1) are using the "standalone" version of Selectize, or (2) require MicroPlugin before you load Selectize.'});c.extend(q.prototype,{setup:function(){var a=this,b=a.settings,d=a.eventNS,g=c(window),h=c(document),e=a.$input,l;var k=a.settings.mode;var B=e.attr("class")||"";var p=c("<div>").addClass(b.wrapperClass).addClass(B).addClass(k);
var q=c("<div>").addClass(b.inputClass).addClass("items").appendTo(p);var z=c('<input type="text" autocomplete="off" />').appendTo(q).attr("tabindex",e.is(":disabled")?"-1":a.tabIndex);var r=c(b.dropdownParent||p);r=c("<div>").addClass(b.dropdownClass).addClass(k).hide().appendTo(r);k=c("<div>").addClass(b.dropdownContentClass).appendTo(r);if(l=e.attr("id"))z.attr("id",l+"-selectized"),c("label[for='"+l+"']").attr("for",l+"-selectized");a.settings.copyClassesToDropdown&&r.addClass(B);p.css({width:e[0].style.width});
a.plugins.names.length&&(B="plugin-"+a.plugins.names.join(" plugin-"),p.addClass(B),r.addClass(B));(null===b.maxItems||1<b.maxItems)&&1===a.tagType&&e.attr("multiple","multiple");a.settings.placeholder&&z.attr("placeholder",b.placeholder);!a.settings.splitOn&&a.settings.delimiter&&(B=a.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),a.settings.splitOn=new RegExp("\\s*"+B+"+\\s*"));e.attr("autocorrect")&&z.attr("autocorrect",e.attr("autocorrect"));e.attr("autocapitalize")&&z.attr("autocapitalize",
e.attr("autocapitalize"));z[0].type=e[0].type;a.$wrapper=p;a.$control=q;a.$control_input=z;a.$dropdown=r;a.$dropdown_content=k;r.on("mouseenter mousedown click","[data-disabled]>[data-selectable]",function(a){a.stopImmediatePropagation()});r.on("mouseenter","[data-selectable]",function(){return a.onOptionHover.apply(a,arguments)});r.on("mousedown click","[data-selectable]",function(){return a.onOptionSelect.apply(a,arguments)});t(q,"mousedown","*:not(input)",function(){return a.onItemSelect.apply(a,
arguments)});G(z);q.on({mousedown:function(){return a.onMouseDown.apply(a,arguments)},click:function(){return a.onClick.apply(a,arguments)}});z.on({mousedown:function(a){a.stopPropagation()},keydown:function(){return a.onKeyDown.apply(a,arguments)},keyup:function(){return a.onKeyUp.apply(a,arguments)},keypress:function(){return a.onKeyPress.apply(a,arguments)},resize:function(){a.positionDropdown.apply(a,[])},blur:function(){return a.onBlur.apply(a,arguments)},focus:function(){a.ignoreBlur=!1;return a.onFocus.apply(a,
arguments)},paste:function(){return a.onPaste.apply(a,arguments)}});h.on("keydown"+d,function(b){a.isCmdDown=b[m?"metaKey":"ctrlKey"];a.isCtrlDown=b[m?"altKey":"ctrlKey"];a.isShiftDown=b.shiftKey});h.on("keyup"+d,function(b){b.keyCode===n&&(a.isCtrlDown=!1);16===b.keyCode&&(a.isShiftDown=!1);b.keyCode===x&&(a.isCmdDown=!1)});h.on("mousedown"+d,function(b){if(a.isFocused){if(b.target===a.$dropdown[0]||b.target.parentNode===a.$dropdown[0])return!1;a.$control.has(b.target).length||b.target===a.$control[0]||
a.blur(b.target)}});g.on(["scroll"+d,"resize"+d].join(" "),function(){a.isOpen&&a.positionDropdown.apply(a,arguments)});g.on("mousemove"+d,function(){a.ignoreHover=!1});this.revertSettings={$children:e.children().detach(),tabindex:e.attr("tabindex")};e.attr("tabindex",-1).hide().after(a.$wrapper);c.isArray(b.items)&&(a.setValue(b.items),delete b.items);if(f)e.on("invalid"+d,function(b){b.preventDefault();a.isInvalid=!0;a.refreshState()});a.updateOriginalInput();a.refreshItems();a.refreshState();a.updatePlaceholder();
a.isSetup=!0;e.is(":disabled")&&a.disable();a.on("change",this.onChange);e.data("selectize",a);e.addClass("selectized");a.trigger("initialize");if(!0===b.preload)a.onSearchChange("")},setupTemplates:function(){var a=this.settings.labelField,b=this.settings.optgroupLabelField;this.settings.render=c.extend({},{optgroup:function(a){return'<div class="optgroup">'+a.html+"</div>"},optgroup_header:function(a,c){return'<div class="optgroup-header">'+c(a[b])+"</div>"},option:function(b,c){return'<div class="option">'+
c(b[a])+"</div>"},item:function(b,c){return'<div class="item">'+c(b[a])+"</div>"},option_create:function(a,b){return'<div class="create">Add <strong>'+b(a.input)+"</strong>&hellip;</div>"}},this.settings.render)},setupCallbacks:function(){var a,b,d={initialize:"onInitialize",change:"onChange",item_add:"onItemAdd",item_remove:"onItemRemove",clear:"onClear",option_add:"onOptionAdd",option_remove:"onOptionRemove",option_clear:"onOptionClear",optgroup_add:"onOptionGroupAdd",optgroup_remove:"onOptionGroupRemove",
optgroup_clear:"onOptionGroupClear",dropdown_open:"onDropdownOpen",dropdown_close:"onDropdownClose",type:"onType",load:"onLoad",focus:"onFocus",blur:"onBlur"};for(a in d)if(d.hasOwnProperty(a)&&(b=this.settings[d[a]]))this.on(a,b)},onClick:function(a){this.isFocused&&this.isOpen||(this.focus(),a.preventDefault())},onMouseDown:function(a){var b=this,d=a.isDefaultPrevented();c(a.target);if(b.isFocused){if(a.target!==b.$control_input[0])return"single"===b.settings.mode?b.isOpen?b.close():b.open():d||
b.setActiveItem(null),!1}else d||window.setTimeout(function(){b.focus()},0)},onChange:function(){this.$input.trigger("change")},onPaste:function(a){var b=this;b.isFull()||b.isInputHidden||b.isLocked?a.preventDefault():b.settings.splitOn&&setTimeout(function(){var a=b.$control_input.val();if(a.match(b.settings.splitOn)){a=c.trim(a).split(b.settings.splitOn);for(var g=0,h=a.length;g<h;g++)b.createItem(a[g])}},0)},onKeyPress:function(a){if(this.isLocked)return a&&a.preventDefault();var b=String.fromCharCode(a.keyCode||
a.which);if(this.settings.create&&"multi"===this.settings.mode&&b===this.settings.delimiter)return this.open(),a.preventDefault(),!1},onKeyDown:function(a){if(this.isLocked)9!==a.keyCode&&a.preventDefault();else{switch(a.keyCode){case 65:if(this.isCmdDown){this.selectAll();return}break;case 27:this.isOpen&&(a.preventDefault(),a.stopPropagation());return;case 78:if(!a.ctrlKey||a.altKey)break;case 40:if(!this.isOpen&&this.hasOptions)this.open();else if(this.$activeOption){this.ignoreHover=!0;var b=
this.getAdjacentOption(this.$activeOption,1);b.length&&this.setActiveOption(b,!0,!0)}a.preventDefault();return;case 80:if(!a.ctrlKey||a.altKey)break;case 38:this.$activeOption&&(this.ignoreHover=!0,b=this.getAdjacentOption(this.$activeOption,-1),b.length&&this.setActiveOption(b,!0,!0));a.preventDefault();return;case 13:this.isOpen&&this.$activeOption&&(this.onOptionSelect({currentTarget:this.$activeOption}),a.preventDefault());return;case 37:this.advanceSelection(-1,a);return;case 39:this.advanceSelection(1,
a);return;case 9:this.settings.selectOnTab&&this.isOpen&&this.$activeOption&&(this.onOptionSelect({currentTarget:this.$activeOption}),this.isFull()||a.preventDefault());this.settings.create&&this.createItem()&&a.preventDefault();return;case 8:case 46:this.deleteSelection(a);return}!this.isFull()&&!this.isInputHidden||(m?a.metaKey:a.ctrlKey)||a.preventDefault()}},onKeyUp:function(a){if(this.isLocked)return a&&a.preventDefault();a=this.$control_input.val()||"";this.lastValue!==a&&(this.lastValue=a,
this.onSearchChange(a),this.refreshOptions(),this.trigger("type",a))},onSearchChange:function(a){var b=this,d=b.settings.load;d&&!b.loadedSearches.hasOwnProperty(a)&&(b.loadedSearches[a]=!0,b.load(function(c){d.apply(b,[a,c])}))},onFocus:function(a){var b=this.isFocused;if(this.isDisabled)return this.blur(),a&&a.preventDefault(),!1;if(!this.ignoreFocus){this.isFocused=!0;if("focus"===this.settings.preload)this.onSearchChange("");b||this.trigger("focus");this.$activeItems.length||(this.showInput(),
this.setActiveItem(null),this.refreshOptions(!!this.settings.openOnFocus));this.refreshState()}},onBlur:function(a,b){var d=this;if(d.isFocused&&(d.isFocused=!1,!d.ignoreFocus))if(d.ignoreBlur||document.activeElement!==d.$dropdown_content[0]){var c=function(){d.close();d.setTextboxValue("");d.setActiveItem(null);d.setActiveOption(null);d.setCaret(d.items.length);d.refreshState();b&&b.focus&&b.focus();d.isBlurring=!1;d.ignoreFocus=!1;d.trigger("blur")};d.isBlurring=!0;d.ignoreFocus=!0;d.settings.create&&
d.settings.createOnBlur?d.createItem(null,!1,c):c()}else d.ignoreBlur=!0,d.onFocus(a)},onOptionHover:function(a){this.ignoreHover||this.setActiveOption(a.currentTarget,!1)},onOptionSelect:function(a){var b=this;a.preventDefault&&(a.preventDefault(),a.stopPropagation());var d=c(a.currentTarget);d.hasClass("create")?b.createItem(null,function(){b.settings.closeAfterSelect&&b.close()}):(d=d.attr("data-value"),"undefined"!==typeof d&&(b.lastQuery=null,b.setTextboxValue(""),b.addItem(d),b.settings.closeAfterSelect?
b.close():!b.settings.hideSelected&&a.type&&/mouse/.test(a.type)&&b.setActiveOption(b.getOption(d))))},onItemSelect:function(a){this.isLocked||"multi"!==this.settings.mode||(a.preventDefault(),this.setActiveItem(a.currentTarget,a))},load:function(a){var b=this,c=b.$wrapper.addClass(b.settings.loadingClass);b.loading++;a.apply(b,[function(a){b.loading=Math.max(b.loading-1,0);a&&a.length&&(b.addOption(a),b.refreshOptions(b.isFocused&&!b.isInputHidden));b.loading||c.removeClass(b.settings.loadingClass);
b.trigger("load",a)}])},setTextboxValue:function(a){var b=this.$control_input;b.val()!==a&&(b.val(a).triggerHandler("update"),this.lastValue=a)},getValue:function(){return 1===this.tagType&&this.$input.attr("multiple")?this.items:this.items.join(this.settings.delimiter)},setValue:function(a,b){v(this,b?[]:["change"],function(){this.clear(b);this.addItems(a,b)})},setActiveItem:function(a,b){if("single"!==this.settings.mode)if(a=c(a),a.length){var d=b&&b.type.toLowerCase();if("mousedown"===d&&this.isShiftDown&&
this.$activeItems.length){d=this.$control.children(".active:last");var g=Array.prototype.indexOf.apply(this.$control[0].childNodes,[d[0]]);d=Array.prototype.indexOf.apply(this.$control[0].childNodes,[a[0]]);if(g>d){var h=g;g=d;d=h}for(;g<=d;g++)h=this.$control[0].childNodes[g],-1===this.$activeItems.indexOf(h)&&(c(h).addClass("active"),this.$activeItems.push(h));b.preventDefault()}else"mousedown"===d&&this.isCtrlDown||"keydown"===d&&this.isShiftDown?a.hasClass("active")?(d=this.$activeItems.indexOf(a[0]),
this.$activeItems.splice(d,1),a.removeClass("active")):this.$activeItems.push(a.addClass("active")[0]):(c(this.$activeItems).removeClass("active"),this.$activeItems=[a.addClass("active")[0]]);this.hideInput();this.isFocused||this.focus()}else c(this.$activeItems).removeClass("active"),this.$activeItems=[],this.isFocused&&this.showInput()},setActiveOption:function(a,b,d){this.$activeOption&&this.$activeOption.removeClass("active");this.$activeOption=null;a=c(a);if(a.length&&(this.$activeOption=a.addClass("active"),
b||"undefined"===typeof b)){a=this.$dropdown_content.height();var g=this.$activeOption.outerHeight(!0);b=this.$dropdown_content.scrollTop()||0;var h=this.$activeOption.offset().top-this.$dropdown_content.offset().top+b;var e=h-a+g;h+g>a+b?this.$dropdown_content.stop().animate({scrollTop:e},d?this.settings.scrollDuration:0):h<b&&this.$dropdown_content.stop().animate({scrollTop:h},d?this.settings.scrollDuration:0)}},selectAll:function(){"single"!==this.settings.mode&&(this.$activeItems=Array.prototype.slice.apply(this.$control.children(":not(input)").addClass("active")),
this.$activeItems.length&&(this.hideInput(),this.close()),this.focus())},hideInput:function(){this.setTextboxValue("");this.$control_input.css({opacity:0,position:"absolute",left:this.rtl?1E4:-1E4});this.isInputHidden=!0},showInput:function(){this.$control_input.css({opacity:1,position:"relative",left:0});this.isInputHidden=!1},focus:function(){var a=this;a.isDisabled||(a.ignoreFocus=!0,a.$control_input[0].focus(),window.setTimeout(function(){a.ignoreFocus=!1;a.onFocus()},0))},blur:function(a){this.$control_input[0].blur();
this.onBlur(null,a)},getScoreFunction:function(a){return this.sifter.getScoreFunction(a,this.getSearchOptions())},getSearchOptions:function(){var a=this.settings,b=a.sortField;"string"===typeof b&&(b=[{field:b}]);return{fields:a.searchField,conjunction:a.searchConjunction,sort:b,nesting:a.nesting}},search:function(a){var b=this.settings;var d=this.getSearchOptions();if(b.score){var g=this.settings.score.apply(this,[a]);if("function"!==typeof g)throw Error('Selectize "score" setting must be a function that returns a function');
}a!==this.lastQuery?(this.lastQuery=a,this.currentResults=a=this.sifter.search(a,c.extend(d,{score:g}))):a=c.extend(!0,{},this.currentResults);if(b.hideSelected)for(b=a.items.length-1;0<=b;b--)-1!==this.items.indexOf(w(a.items[b].id))&&a.items.splice(b,1);return a},refreshOptions:function(a){var b,d,g;"undefined"===typeof a&&(a=!0);var h=this;var e=c.trim(h.$control_input.val());var f=h.search(e),l=h.$dropdown_content,k=h.$activeOption&&w(h.$activeOption.attr("data-value"));var n=f.items.length;"number"===
typeof h.settings.maxOptions&&(n=Math.min(n,h.settings.maxOptions));var m={};var p=[];for(b=0;b<n;b++){var r=h.options[f.items[b].id];var q=h.render("option",r);r=r[h.settings.optgroupField]||"";var u=c.isArray(r)?r:[r];var t=0;for(d=u&&u.length;t<d;t++)r=u[t],h.optgroups.hasOwnProperty(r)||(r=""),m.hasOwnProperty(r)||(m[r]=document.createDocumentFragment(),p.push(r)),m[r].appendChild(q)}this.settings.lockOptgroupOrder&&p.sort(function(a,b){return(h.optgroups[a].$order||0)-(h.optgroups[b].$order||
0)});q=document.createDocumentFragment();b=0;for(n=p.length;b<n;b++)r=p[b],h.optgroups.hasOwnProperty(r)&&m[r].childNodes.length?(t=document.createDocumentFragment(),t.appendChild(h.render("optgroup_header",h.optgroups[r])),t.appendChild(m[r]),q.appendChild(h.render("optgroup",c.extend({},h.optgroups[r],{html:E(t),dom:t})))):q.appendChild(m[r]);l.html(q);if(h.settings.highlight&&(l.removeHighlight(),f.query.length&&f.tokens.length))for(b=0,n=f.tokens.length;b<n;b++)y(l,f.tokens[b].regex);if(!h.settings.hideSelected)for(b=
0,n=h.items.length;b<n;b++)h.getOption(h.items[b]).addClass("selected");if(b=h.canCreate(e)){l.prepend(h.render("option_create",{input:e}));var v=c(l[0].childNodes[0])}h.hasOptions=0<f.items.length||b;h.hasOptions?(0<f.items.length?((e=k&&h.getOption(k))&&e.length?g=e:"single"===h.settings.mode&&h.items.length&&(g=h.getOption(h.items[0])),g&&g.length||(g=v&&!h.settings.addPrecedence?h.getAdjacentOption(v,1):l.find("[data-selectable]:first"))):g=v,h.setActiveOption(g),a&&!h.isOpen&&h.open()):(h.setActiveOption(null),
a&&h.isOpen&&h.close())},addOption:function(a){var b;if(c.isArray(a)){var d=0;for(b=a.length;d<b;d++)this.addOption(a[d])}else if(d=this.registerOption(a))this.userOptions[d]=!0,this.lastQuery=null,this.trigger("option_add",d,a)},registerOption:function(a){var b=w(a[this.settings.valueField]);if("undefined"===typeof b||null===b||this.options.hasOwnProperty(b))return!1;a.$order=a.$order||++this.order;this.options[b]=a;return b},registerOptionGroup:function(a){var b=w(a[this.settings.optgroupValueField]);
if(!b)return!1;a.$order=a.$order||++this.order;this.optgroups[b]=a;return b},addOptionGroup:function(a,b){b[this.settings.optgroupValueField]=a;(a=this.registerOptionGroup(b))&&this.trigger("optgroup_add",a,b)},removeOptionGroup:function(a){this.optgroups.hasOwnProperty(a)&&(delete this.optgroups[a],this.renderCache={},this.trigger("optgroup_remove",a))},clearOptionGroups:function(){this.optgroups={};this.renderCache={};this.trigger("optgroup_clear")},updateOption:function(a,b){a=w(a);var d=w(b[this.settings.valueField]);
if(null!==a&&this.options.hasOwnProperty(a)){if("string"!==typeof d)throw Error("Value must be set in option data");var g=this.options[a].$order;if(d!==a){delete this.options[a];var h=this.items.indexOf(a);-1!==h&&this.items.splice(h,1,d)}b.$order=b.$order||g;this.options[d]=b;h=this.renderCache.item;g=this.renderCache.option;h&&(delete h[a],delete h[d]);g&&(delete g[a],delete g[d]);-1!==this.items.indexOf(d)&&(d=this.getItem(a),h=c(this.render("item",b)),d.hasClass("active")&&h.addClass("active"),
d.replaceWith(h));this.lastQuery=null;this.isOpen&&this.refreshOptions(!1)}},removeOption:function(a,b){a=w(a);var c=this.renderCache.item,g=this.renderCache.option;c&&delete c[a];g&&delete g[a];delete this.userOptions[a];delete this.options[a];this.lastQuery=null;this.trigger("option_remove",a);this.removeItem(a,b)},clearOptions:function(){var a=this;a.loadedSearches={};a.userOptions={};a.renderCache={};var b=a.options;c.each(a.options,function(c,g){-1==a.items.indexOf(c)&&delete b[c]});a.options=
a.sifter.items=b;a.lastQuery=null;a.trigger("option_clear")},getOption:function(a){return this.getElementWithValue(a,this.$dropdown_content.find("[data-selectable]"))},getAdjacentOption:function(a,b){var d=this.$dropdown.find("[data-selectable]"),g=d.index(a)+b;return 0<=g&&g<d.length?d.eq(g):c()},getElementWithValue:function(a,b){a=w(a);if("undefined"!==typeof a&&null!==a)for(var d=0,g=b.length;d<g;d++)if(b[d].getAttribute("data-value")===a)return c(b[d]);return c()},getItem:function(a){return this.getElementWithValue(a,
this.$control.children())},addItems:function(a,b){this.buffer=document.createDocumentFragment();for(var d=this.$control[0].childNodes,g=0;g<d.length;g++)this.buffer.appendChild(d[g]);d=c.isArray(a)?a:[a];g=0;for(var h=d.length;g<h;g++)this.isPending=g<h-1,this.addItem(d[g],b);g=this.$control[0];g.insertBefore(this.buffer,g.firstChild);this.buffer=null},addItem:function(a,b){v(this,b?[]:["change"],function(){var d=this.settings.mode;a=w(a);if(-1!==this.items.indexOf(a))"single"===d&&this.close();else if(this.options.hasOwnProperty(a)&&
("single"===d&&this.clear(b),"multi"!==d||!this.isFull())){var g=c(this.render("item",this.options[a]));var h=this.isFull();this.items.splice(this.caretPos,0,a);this.insertAtCaret(g);(!this.isPending||!h&&this.isFull())&&this.refreshState();if(this.isSetup){h=this.$dropdown_content.find("[data-selectable]");if(!this.isPending){var e=this.getOption(a);e=this.getAdjacentOption(e,1).attr("data-value");this.refreshOptions(this.isFocused&&"single"!==d);e&&this.setActiveOption(this.getOption(e))}!h.length||
this.isFull()?this.close():this.isPending||this.positionDropdown();this.updatePlaceholder();this.trigger("item_add",a,g);this.isPending||this.updateOriginalInput({silent:b})}}})},removeItem:function(a,b){var d=a instanceof c?a:this.getItem(a);a=w(d.attr("data-value"));var g=this.items.indexOf(a);if(-1!==g){d.remove();if(d.hasClass("active")){var e=this.$activeItems.indexOf(d[0]);this.$activeItems.splice(e,1)}this.items.splice(g,1);this.lastQuery=null;!this.settings.persist&&this.userOptions.hasOwnProperty(a)&&
this.removeOption(a,b);g<this.caretPos&&this.setCaret(this.caretPos-1);this.refreshState();this.updatePlaceholder();this.updateOriginalInput({silent:b});this.positionDropdown();this.trigger("item_remove",a,d)}},createItem:function(a,b){var d=this,g=d.caretPos;a=a||c.trim(d.$control_input.val()||"");var e=arguments[arguments.length-1];"function"!==typeof e&&(e=function(){});"boolean"!==typeof b&&(b=!0);if(!d.canCreate(a))return e(),!1;d.lock();var f="function"===typeof d.settings.create?this.settings.create:
function(a){var b={};b[d.settings.labelField]=a;b[d.settings.valueField]=a;return b},k=l(function(a){d.unlock();if(!a||"object"!==typeof a)return e();var c=w(a[d.settings.valueField]);if("string"!==typeof c)return e();d.setTextboxValue("");d.addOption(a);d.setCaret(g);d.addItem(c);d.refreshOptions(b&&"single"!==d.settings.mode);e(a)});f=f.apply(this,[a,k]);"undefined"!==typeof f&&k(f);return!0},refreshItems:function(){this.lastQuery=null;this.isSetup&&this.addItem(this.items);this.refreshState();
this.updateOriginalInput()},refreshState:function(){this.refreshValidityState();this.refreshClasses()},refreshValidityState:function(){if(!this.isRequired)return!1;var a=!this.items.length;this.isInvalid=a;this.$control_input.prop("required",a);this.$input.prop("required",!a)},refreshClasses:function(){var a=this.isFull(),b=this.isLocked;this.$wrapper.toggleClass("rtl",this.rtl);this.$control.toggleClass("focus",this.isFocused).toggleClass("disabled",this.isDisabled).toggleClass("required",this.isRequired).toggleClass("invalid",
this.isInvalid).toggleClass("locked",b).toggleClass("full",a).toggleClass("not-full",!a).toggleClass("input-active",this.isFocused&&!this.isInputHidden).toggleClass("dropdown-active",this.isOpen).toggleClass("has-options",!c.isEmptyObject(this.options)).toggleClass("has-items",0<this.items.length);this.$control_input.data("grow",!a&&!b)},isFull:function(){return null!==this.settings.maxItems&&this.items.length>=this.settings.maxItems},updateOriginalInput:function(a){var b;a=a||{};if(1===this.tagType){var c=
[];var g=0;for(b=this.items.length;g<b;g++){var e=this.options[this.items[g]][this.settings.labelField]||"";c.push('<option value="'+A(this.items[g])+'" selected="selected">'+A(e)+"</option>")}c.length||this.$input.attr("multiple")||c.push('<option value="" selected="selected"></option>');this.$input.html(c.join(""))}else this.$input.val(this.getValue()),this.$input.attr("value",this.$input.val());this.isSetup&&(a.silent||this.trigger("change",this.$input.val()))},updatePlaceholder:function(){if(this.settings.placeholder){var a=
this.$control_input;this.items.length?a.removeAttr("placeholder"):a.attr("placeholder",this.settings.placeholder);a.triggerHandler("update",{force:!0})}},open:function(){this.isLocked||this.isOpen||"multi"===this.settings.mode&&this.isFull()||(this.focus(),this.isOpen=!0,this.refreshState(),this.$dropdown.css({visibility:"hidden",display:"block"}),this.positionDropdown(),this.$dropdown.css({visibility:"visible"}),this.trigger("dropdown_open",this.$dropdown))},close:function(){var a=this.isOpen;"single"===
this.settings.mode&&this.items.length&&(this.hideInput(),this.isBlurring||this.$control_input.blur());this.isOpen=!1;this.$dropdown.hide();this.setActiveOption(null);this.refreshState();a&&this.trigger("dropdown_close",this.$dropdown)},positionDropdown:function(){var a=this.$control,b="body"===this.settings.dropdownParent?a.offset():a.position();b.top+=a.outerHeight(!0);this.$dropdown.css({width:a[0].getBoundingClientRect().width,top:b.top,left:b.left})},clear:function(a){this.items.length&&(this.$control.children(":not(input)").remove(),
this.items=[],this.lastQuery=null,this.setCaret(0),this.setActiveItem(null),this.updatePlaceholder(),this.updateOriginalInput({silent:a}),this.refreshState(),this.showInput(),this.trigger("clear"))},insertAtCaret:function(a){var b=Math.min(this.caretPos,this.items.length);a=a[0];var c=this.buffer||this.$control[0];0===b?c.insertBefore(a,c.firstChild):c.insertBefore(a,c.childNodes[b]);this.setCaret(b+1)},deleteSelection:function(a){var b;var d=a&&8===a.keyCode?-1:1;var g=D(this.$control_input[0]);
this.$activeOption&&!this.settings.hideSelected&&(b=this.getAdjacentOption(this.$activeOption,-1).attr("data-value"));var e=[];if(this.$activeItems.length){var f=this.$control.children(".active:"+(0<d?"last":"first"));f=this.$control.children(":not(input)").index(f);0<d&&f++;d=0;for(g=this.$activeItems.length;d<g;d++)e.push(c(this.$activeItems[d]).attr("data-value"));a&&(a.preventDefault(),a.stopPropagation())}else(this.isFocused||"single"===this.settings.mode)&&this.items.length&&(0>d&&0===g.start&&
0===g.length?e.push(this.items[this.caretPos-1]):0<d&&g.start===this.$control_input.val().length&&e.push(this.items[this.caretPos]));if(!e.length||"function"===typeof this.settings.onDelete&&!1===this.settings.onDelete.apply(this,[e]))return!1;for("undefined"!==typeof f&&this.setCaret(f);e.length;)this.removeItem(e.pop());this.showInput();this.positionDropdown();this.refreshOptions(!0);b&&(a=this.getOption(b),a.length&&this.setActiveOption(a));return!0},advanceSelection:function(a,b){if(0!==a){this.rtl&&
(a*=-1);var c=0<a?"last":"first";var g=D(this.$control_input[0]);this.isFocused&&!this.isInputHidden?(c=this.$control_input.val().length,(g=0>a?0===g.start&&0===g.length:g.start===c)&&!c&&this.advanceCaret(a,b)):(g=this.$control.children(".active:"+c),g.length&&(g=this.$control.children(":not(input)").index(g),this.setActiveItem(null),this.setCaret(0<a?g+1:g)))}},advanceCaret:function(a,b){if(0!==a){var c=0<a?"next":"prev";this.isShiftDown?(c=this.$control_input[c](),c.length&&(this.hideInput(),this.setActiveItem(c),
b&&b.preventDefault())):this.setCaret(this.caretPos+a)}},setCaret:function(a){a="single"===this.settings.mode?this.items.length:Math.max(0,Math.min(this.items.length,a));if(!this.isPending){var b;var d=this.$control.children(":not(input)");var g=0;for(b=d.length;g<b;g++){var e=c(d[g]).detach();g<a?this.$control_input.before(e):this.$control.append(e)}}this.caretPos=a},lock:function(){this.close();this.isLocked=!0;this.refreshState()},unlock:function(){this.isLocked=!1;this.refreshState()},disable:function(){this.$input.prop("disabled",
!0);this.$control_input.prop("disabled",!0).prop("tabindex",-1);this.isDisabled=!0;this.lock()},enable:function(){this.$input.prop("disabled",!1);this.$control_input.prop("disabled",!1).prop("tabindex",this.tabIndex);this.isDisabled=!1;this.unlock()},destroy:function(){var a=this.eventNS,b=this.revertSettings;this.trigger("destroy");this.off();this.$wrapper.remove();this.$dropdown.remove();this.$input.html("").append(b.$children).removeAttr("tabindex").removeClass("selectized").attr({tabindex:b.tabindex}).show();
this.$control_input.removeData("grow");this.$input.removeData("selectize");0==--q.count&&q.$testInput&&(q.$testInput.remove(),q.$testInput=void 0);c(window).off(a);c(document).off(a);c(document.body).off(a);delete this.$input[0].selectize},render:function(a,b){var d=!1;if("option"===a||"item"===a){var e=w(b[this.settings.valueField]);d=!!e}if(d&&("undefined"===typeof this.renderCache[a]&&(this.renderCache[a]={}),this.renderCache[a].hasOwnProperty(e)))return this.renderCache[a][e];var h=c(this.settings.render[a].apply(this,
[b,A]));if("option"===a||"option_create"===a)b[this.settings.disabledField]||h.attr("data-selectable","");else if("optgroup"===a){var f=b[this.settings.optgroupValueField]||"";h.attr("data-group",f);b[this.settings.disabledField]&&h.attr("data-disabled","")}"option"!==a&&"item"!==a||h.attr("data-value",e||"");d&&(this.renderCache[a][e]=h[0]);return h[0]},clearCache:function(a){"undefined"===typeof a?this.renderCache={}:delete this.renderCache[a]},canCreate:function(a){if(!this.settings.create)return!1;
var b=this.settings.createFilter;return a.length&&("function"!==typeof b||b.apply(this,[a]))&&("string"!==typeof b||(new RegExp(b)).test(a))&&(!(b instanceof RegExp)||b.test(a))}});q.count=0;q.defaults={options:[],optgroups:[],plugins:[],delimiter:",",splitOn:null,persist:!0,diacritics:!0,create:!1,createOnBlur:!1,createFilter:null,highlight:!0,openOnFocus:!0,maxOptions:1E3,maxItems:null,hideSelected:null,addPrecedence:!1,selectOnTab:!1,preload:!1,allowEmptyOption:!1,closeAfterSelect:!1,scrollDuration:60,
loadThrottle:300,loadingClass:"loading",dataAttr:"data-data",optgroupField:"optgroup",valueField:"value",labelField:"text",disabledField:"disabled",optgroupLabelField:"label",optgroupValueField:"value",lockOptgroupOrder:!1,sortField:"$order",searchField:["text"],searchConjunction:"and",mode:null,wrapperClass:"selectize-control",inputClass:"selectize-input",dropdownClass:"selectize-dropdown",dropdownContentClass:"selectize-dropdown-content",dropdownParent:null,copyClassesToDropdown:!0,render:{}};c.fn.selectize=
function(a){var b=c.fn.selectize.defaults,d=c.extend({},b,a),e=d.dataAttr,f=d.labelField,l=d.valueField,k=d.disabledField,n=d.optgroupField,m=d.optgroupLabelField,p=d.optgroupValueField,t=function(a,b){var g,h=b.options,r={},q=function(a){a=e&&a.attr(e);return"string"===typeof a&&a.length?JSON.parse(a):null},F=function(a,e){a=c(a);var g=w(a.val());if(g||d.allowEmptyOption)if(r.hasOwnProperty(g)){if(e){var m=r[g][n];m?c.isArray(m)?m.push(e):r[g][n]=[m,e]:r[g][n]=e}}else m=q(a)||{},m[f]=m[f]||a.text(),
m[l]=m[l]||g,m[k]=m[k]||a.prop("disabled"),m[n]=m[n]||e,r[g]=m,h.push(m),a.is(":selected")&&b.items.push(g)},C=function(a){var d;a=c(a);if(d=a.attr("label")){var e=q(a)||{};e[m]=d;e[p]=d;e[k]=a.prop("disabled");b.optgroups.push(e)}var g=c("option",a);a=0;for(e=g.length;a<e;a++)F(g[a],d)};b.maxItems=a.attr("multiple")?null:1;var t=a.children();var u=0;for(g=t.length;u<g;u++){var v=t[u].tagName.toLowerCase();"optgroup"===v?C(t[u]):"option"===v&&F(t[u])}};return this.each(function(){if(!this.selectize){var g=
c(this),h=this.tagName.toLowerCase(),k=g.attr("placeholder")||g.attr("data-placeholder");k||d.allowEmptyOption||(k=g.children('option[value=""]').text());k={placeholder:k,options:[],optgroups:[],items:[]};if("select"===h)t(g,k);else{var m;if(h=g.attr(e))for(k.options=JSON.parse(h),h=0,m=k.options.length;h<m;h++)k.items.push(k.options[h][l]);else if(h=c.trim(g.val()||""),d.allowEmptyOption||h.length){var n=h.split(d.delimiter);h=0;for(m=n.length;h<m;h++){var p={};p[f]=n[h];p[l]=n[h];k.options.push(p)}k.items=
n}}new q(g,c.extend(!0,{},b,k,a))}})};c.fn.selectize.defaults=q.defaults;c.fn.selectize.support={validity:f};q.define("drag_drop",function(a){if(!c.fn.sortable)throw Error('The "drag_drop" plugin requires jQuery UI "sortable".');if("multi"===this.settings.mode){var b=this;b.lock=function(){var a=b.lock;return function(){var c=b.$control.data("sortable");c&&c.disable();return a.apply(b,arguments)}}();b.unlock=function(){var a=b.unlock;return function(){var c=b.$control.data("sortable");c&&c.enable();
return a.apply(b,arguments)}}();b.setup=function(){var a=b.setup;return function(){a.apply(this,arguments);var d=b.$control.sortable({items:"[data-value]",forcePlaceholderSize:!0,disabled:b.isLocked,start:function(a,b){b.placeholder.css("width",b.helper.css("width"));d.css({overflow:"visible"})},stop:function(){d.css({overflow:"hidden"});var a=b.$activeItems?b.$activeItems.slice():null,e=[];d.children("[data-value]").each(function(){e.push(c(this).attr("data-value"))});b.setValue(e);b.setActiveItem(a)}})}}()}});
q.define("dropdown_header",function(a){var b=this;a=c.extend({title:"Untitled",headerClass:"selectize-dropdown-header",titleRowClass:"selectize-dropdown-header-title",labelClass:"selectize-dropdown-header-label",closeClass:"selectize-dropdown-header-close",html:function(a){return'<div class="'+a.headerClass+'"><div class="'+a.titleRowClass+'"><span class="'+a.labelClass+'">'+a.title+'</span><a href="javascript:void(0)" class="'+a.closeClass+'">&times;</a></div></div>'}},a);b.setup=function(){var d=
b.setup;return function(){d.apply(b,arguments);b.$dropdown_header=c(a.html(a));b.$dropdown.prepend(b.$dropdown_header)}}()});q.define("optgroup_columns",function(a){var b=this;a=c.extend({equalizeWidth:!0,equalizeHeight:!0},a);this.getAdjacentOption=function(a,b){var d=a.closest("[data-group]").find("[data-selectable]"),e=d.index(a)+b;return 0<=e&&e<d.length?d.eq(e):c()};this.onKeyDown=function(){var a=b.onKeyDown;return function(c){if(!this.isOpen||37!==c.keyCode&&39!==c.keyCode)return a.apply(this,
arguments);b.ignoreHover=!0;var d=this.$activeOption.closest("[data-group]");var e=d.find("[data-selectable]").index(this.$activeOption);d=37===c.keyCode?d.prev("[data-group]"):d.next("[data-group]");d=d.find("[data-selectable]");e=d.eq(Math.min(d.length-1,e));e.length&&this.setActiveOption(e)}}();var d=function(){var a=d.width,b=document;if("undefined"===typeof a){var c=b.createElement("div");c.innerHTML='<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';
c=c.firstChild;b.body.appendChild(c);a=d.width=c.offsetWidth-c.clientWidth;b.body.removeChild(c)}return a},e=function(){var e,g,f;var l=c("[data-group]",b.$dropdown_content);if((g=l.length)&&b.$dropdown_content.width()){if(a.equalizeHeight){for(e=f=0;e<g;e++)f=Math.max(f,l.eq(e).height());l.css({height:f})}a.equalizeWidth&&(f=b.$dropdown_content.innerWidth()-d(),e=Math.round(f/g),l.css({width:e}),1<g&&(e=f-e*(g-1),l.eq(g-1).css({width:e})))}};if(a.equalizeHeight||a.equalizeWidth)k.after(this,"positionDropdown",
e),k.after(this,"refreshOptions",e)});q.define("remove_button",function(a){a=c.extend({label:"&times;",title:"Remove",className:"remove",append:!0},a);var b=function(a,b){b.className="remove-single";var d='<a href="javascript:void(0)" class="'+b.className+'" tabindex="-1" title="'+A(b.title)+'">'+b.label+"</a>";a.setup=function(){var e=a.setup;return function(){if(b.append){var g=c(a.$input.context).attr("id");c("#"+g);var f=a.settings.render.item;a.settings.render.item=function(b){var e=f.apply(a,
arguments);return c("<span>").append(e).append(d)}}e.apply(a,arguments);a.$control.on("click","."+b.className,function(b){b.preventDefault();a.isLocked||a.clear()})}}()},d=function(a,b){var d='<a href="javascript:void(0)" class="'+b.className+'" tabindex="-1" title="'+A(b.title)+'">'+b.label+"</a>";a.setup=function(){var e=a.setup;return function(){if(b.append){var g=a.settings.render.item;a.settings.render.item=function(b){var c=g.apply(a,arguments),e=c.search(/(<\/[^>]+>\s*)$/);return c.substring(0,
e)+d+c.substring(e)}}e.apply(a,arguments);a.$control.on("click","."+b.className,function(b){b.preventDefault();a.isLocked||(b=c(b.currentTarget).parent(),a.setActiveItem(b),a.deleteSelection()&&a.setCaret(a.items.length))})}}()};"single"===this.settings.mode?b(this,a):d(this,a)});q.define("restore_on_backspace",function(a){var b=this;a.text=a.text||function(a){return a[this.settings.labelField]};this.onKeyDown=function(){var c=b.onKeyDown;return function(b){if(8===b.keyCode&&""===this.$control_input.val()&&
!this.$activeItems.length){var d=this.caretPos-1;if(0<=d&&d<this.items.length){d=this.options[this.items[d]];this.deleteSelection(b)&&(this.setTextboxValue(a.text.apply(this,[d])),this.refreshOptions(!0));b.preventDefault();return}}return c.apply(this,arguments)}}()});return q});




 



