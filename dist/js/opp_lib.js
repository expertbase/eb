/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
*/
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";function b(a){if(a instanceof Date)return a;if(String(a).match(g))return String(a).match(/^[0-9]*$/)&&(a=Number(a)),String(a).match(/\-/)&&(a=String(a).replace(/\-/g,"/")),new Date(a);throw new Error("Couldn't cast `"+a+"` to a date object.")}function c(a){var b=a.toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return new RegExp(b)}function d(a){return function(b){var d=b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(d)for(var f=0,g=d.length;f<g;++f){var h=d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),j=c(h[0]),k=h[1]||"",l=h[3]||"",m=null;h=h[2],i.hasOwnProperty(h)&&(m=i[h],m=Number(a[m])),null!==m&&("!"===k&&(m=e(l,m)),""===k&&m<10&&(m="0"+m.toString()),b=b.replace(j,m.toString()))}return b=b.replace(/%%/,"%")}}function e(a,b){var c="s",d="";return a&&(a=a.replace(/(:|;|\s)/gi,"").split(/\,/),1===a.length?c=a[0]:(d=a[0],c=a[1])),Math.abs(b)>1?c:d}var f=[],g=[],h={precision:100,elapse:!1,defer:!1};g.push(/^[0-9]*$/.source),g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g=new RegExp(g.join("|"));var i={Y:"years",m:"months",n:"daysToMonth",d:"daysToWeek",w:"weeks",W:"weeksToMonth",H:"hours",M:"minutes",S:"seconds",D:"totalDays",I:"totalHours",N:"totalMinutes",T:"totalSeconds"},j=function(b,c,d){this.el=b,this.$el=a(b),this.interval=null,this.offset={},this.options=a.extend({},h),this.instanceNumber=f.length,f.push(this),this.$el.data("countdown-instance",this.instanceNumber),d&&("function"==typeof d?(this.$el.on("update.countdown",d),this.$el.on("stoped.countdown",d),this.$el.on("finish.countdown",d)):this.options=a.extend({},h,d)),this.setFinalDate(c),this.options.defer===!1&&this.start()};a.extend(j.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval);var a=this;this.update(),this.interval=setInterval(function(){a.update.call(a)},this.options.precision)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},toggle:function(){this.interval?this.stop():this.start()},pause:function(){this.stop()},resume:function(){this.start()},remove:function(){this.stop.call(this),f[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(a){this.finalDate=b(a)},update:function(){if(0===this.$el.closest("html").length)return void this.remove();var b,c=void 0!==a._data(this.el,"events"),d=new Date;b=this.finalDate.getTime()-d.getTime(),b=Math.ceil(b/1e3),b=!this.options.elapse&&b<0?0:Math.abs(b),this.totalSecsLeft!==b&&c&&(this.totalSecsLeft=b,this.elapsed=d>=this.finalDate,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToWeek:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToMonth:Math.floor(this.totalSecsLeft/60/60/24%30.4368),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),weeksToMonth:Math.floor(this.totalSecsLeft/60/60/24/7)%4,months:Math.floor(this.totalSecsLeft/60/60/24/30.4368),years:Math.abs(this.finalDate.getFullYear()-d.getFullYear()),totalDays:Math.floor(this.totalSecsLeft/60/60/24),totalHours:Math.floor(this.totalSecsLeft/60/60),totalMinutes:Math.floor(this.totalSecsLeft/60),totalSeconds:this.totalSecsLeft},this.options.elapse||0!==this.totalSecsLeft?this.dispatchEvent("update"):(this.stop(),this.dispatchEvent("finish")))},dispatchEvent:function(b){var c=a.Event(b+".countdown");c.finalDate=this.finalDate,c.elapsed=this.elapsed,c.offset=a.extend({},this.offset),c.strftime=d(this.offset),this.$el.trigger(c)}}),a.fn.countdown=function(){var b=Array.prototype.slice.call(arguments,0);return this.each(function(){var c=a(this).data("countdown-instance");if(void 0!==c){var d=f[c],e=b[0];j.prototype.hasOwnProperty(e)?d[e].apply(d,b.slice(1)):null===String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(d.setFinalDate.call(d,e),d.start()):a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,e))}else new j(this,b[0],b[1])})}});




// COUNTDOWN
var dt=$('.clock').data("dt");
var to_close = moment.utc(dt, "YYYY-MM-DD");
$('.clock').countdown(to_close.toDate(), function(event) {
  
  $(this).html(event.strftime('%-D Day%!D %Hh:%Mm:%Ss'));
  })
  
  .on('finish.countdown', function(event) {
  	$('#apply').html('Applications Closed');
    $('#apply').addClass('disabled');

});



$(function($) {
	
	// swing to
    $(".up").on("click",function(event){
		var body = $("html, body");
			body.stop().animate({scrollTop:0}, 1200, 'swing', function() { 
		});    
	});
	
	
	// Fonts big/small
	$(document).on('click', '.font', function(e){
	  x		=	$(this).parents(".opp_main").find(".bigsmall");
	  fs	=	x.css('font-size').slice(0,-2); 
      fs<17 ? f=20 : f=16;
	  x.animate({fontSize: f}, 800);
	});
});








function prettify(labelValue) {
	return Math.ceil(Number(labelValue)) >= 1.0e9
		? Math.ceil(Number(labelValue)) / 1.0e9 + " Billion"
		: Math.ceil(Number(labelValue)) >= 1.0e6
		? Math.ceil(Number(labelValue)) / 1.0e6 + " Million"
		: Math.ceil(Number(labelValue)) >= 1.0e3
		? Math.ceil(Number(labelValue)) / 1.0e3 + " Thousand"
		: Math.abs(Number(labelValue));
}





// Fonts big/small

$(function() { 
	$('.fontbigsmall').on("click", function() {
	  $('.bigsmall').css('font-size', function(_, v) {
	    return 16 + (parseInt(v, 10) + 6) % 6;
	  });
	});
});





// Opens the application popup
$('body').on('click', 'a[href="#apply"]', function() {  			
    sidepanelclose();
    opp_application_id= $("#ebp").data("opp_application_id");
    $("#more").empty().load("opportunity_apply",{opp_application_id:opp_application_id},function(){
    	autosize($('textarea')); new $.Zebra_Tooltips($('.pop_tip'));
    	dothewizard();
    });
	$("body").addClass("stopscroll");
	
});





//   Form To Wizard https://github.com/artoodetoo/formToWizard


// form2wizard

(function(c){c.fn.formToWizard=function(e,u){function y(){e=c(n).data("options");k={GotoStep:function(e){var f="step"+--e;if(void 0===c("#"+f)[0])throw"Step No "+e+" not found!";"none"===c("#"+f).css("display")&&(c(n).find(".stepDetails").slideUp(),c("#"+f).slideDown("slow"),x(e))},NextStep:function(){c(".stepDetails:visible").find("a.next").click()},PreviousStep:function(){c(".stepDetails:visible").find("a.prev").click()}}}function p(f){var l="step"+f;c("#"+l+"commands").append("<"+e.buttonTag+' href="#" class="'+
l+'Prev pref">'+e.prevBtnName+"</"+e.buttonTag+">");c("."+l+"Prev").on("click",function(e){c("#"+l).slideUp();c("#step"+(f-1)).slideDown("slow");x(f-1);return!1})}
function m(f){var l="step"+f;c("#"+l+"commands").append("<"+e.buttonTag+' tabindex="0" href="#" class="'+l+'Next next">'+e.nextBtnName+"</"+e.buttonTag+">");c("."+l+"Next").on("click",function(k){!0===e.validateBeforeNext(n,c("#"+l))&&(c("#"+l).slideUp(),c("#step"+(f+1)).slideDown("slow"),x(f+1));return!1})}
function x(f){"function"===typeof e.progress?e.progress(f,w):e.showProgress&&(c("#steps li").removeClass("current"),c("#stepDesc"+f).addClass("current"));e.select&&e.select(n,c("#step"+f))}
if(0==this.length)return this;"string"!==typeof e&&(e=c.extend({submitButton:"applybutton",showProgress:!0,showStepNo:!0,validateBeforeNext:!0,select:null,progress:!0,nextBtnName:"Next <svg class='vanxt'><use href='s.svg#arr_r'></use></svg>",prevBtnName:"<svg><use href='s.svg#arr_l'></use></svg>Back",buttonTag:"a",nextBtnClass:"btn next",prevBtnClass:"btn prev",GotoStep:"2"},e));var n=this,f=c(n).find("fieldset"),w=f.length,A="#"+e.submitButton,k=null;c(".wizcount").text(w-1);if("string"!==typeof e)c(n).data("options",e),"function"!==typeof e.validateBeforeNext&&(e.validateBeforeNext=function(){return!0}),e.showProgress&&"function"!==typeof e.progress&&(e.showStepNo?c(n).before("<ul id='steps' class='steps'></ul>"):c(n).before("<ul id='steps' class='steps breadcrumb'></ul>")),f.each(function(f){c(this).wrap('<div id="step'+f+'" class="stepDetails"></div>');c(this).append('<p id="step'+f+'commands" class="commands"></p>');e.showProgress&&"function"!==typeof e.progress&&(e.showStepNo?c("#steps").append("<li id='stepDesc"+f+"'>Step "+(f+1)+"<span>"+c(this).find("legend").html()+"</span></li>"):c("#steps").append("<li id='stepDesc"+f+"'>"+c(this).find("legend").html()+"</li>"));0==f?(m(f),x(f)):f==w-1?(c("#step"+f).hide(),p(f),c(A).addClass("next").detach().appendTo("#step"+f+"commands")):(c("#step"+f).hide(),p(f),m(f))});else if("string"===typeof e)if(f=e,y(),"function"===typeof k[f])k[f](u);else throw f+" is invalid command!";return this}})(jQuery);
    
    


// form2wizard validate each step
function dothewizard() 
{
	
	var $signupForm = $('#applyforthis');

	$signupForm.formToWizard({
		buttonTag: 'applybutton',
		progress: function(i, count) {
			 $('#progress-complete').width(''+(i/count*100+25)+'%');
		},
		validateBeforeNext: function(form, step) {
	        var stepIsValid = true;
	        var validator = form.validate();
	        $(":input", step).each( function(index) {
	            var x = validator.element(this);
	            stepIsValid = stepIsValid && (typeof x == 'undefined' || x);
	        });
	        return stepIsValid;
	    },
	});



	$("#applyforthis").validate	
	({
				            
	    ignore: 						".ignore",
	    
	rules: 
	{
	    terms:							{
		         							required: true,
	     								},
	    opp_application_specialisation_comments:{
		                					required: true,
											minlength: 10,
											maxlength: 500
					            		},
	    opp_application_profile:		{
							                required: true,
							                minlength: 10,
							                maxlength: 5000
							            },
	    opp_application_fees: 			{
							                number: true,
							                required: function () {
											 	return $('#opp_application_fees').val().length > 0;
						                	}
						             	},
	    type:							{
						         			required: true,
					     				},
	    lang:							{
						         			required: true,
					     				},
	    pref:							{
						         			required: true,
					     				},
		       				
	},
    
    	submitHandler: 	function(html) 
						{
							$.ajax({
							
							type : 'POST',
							url  : 'opportunity_application_submit',
							data :  $("#applyforthis").serialize(),
							success :  function(html)
							{
								$('#applier').replaceWith("<div class='disabled'><svg><use href='/s.svg#exclamation-circle'></use></svg>Just Applied</div>");
								
								$('#2breplaced').fadeOut("slow", function(){
								   var div = $(
								   `<div id='ll'>
					   					<div class='text-center lpro mt50'><svg><use href='/s.svg#check'></use></svg>You Successfully Applied!</div>
					   					<div class='text-center mt30 size-16' id='cls'><svg><use href='/s.svg#times'></use></svg>CLOSE</div>
					   				</div>`).hide();
								   $(this).replaceWith(div);  // Hmm neat! 
								   $('#ll').fadeIn("slow");
					
								}); 
															}
							});
						}
	});
}; 


// Opps to / from fav on wp.php 01/20

$(document).on('click', '.favopps', function(){
   $(this).toggleClass("fav_is_set");
   	
    var this_id = $("#ebp").data("opp_application_id");
    

  		  $.ajax({
		  
		  type : 'POST',
		  url  : 'fav',
		  data :  {cp_opp_delete_this_id : this_id}
		  });
		  return false;
});



