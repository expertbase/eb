// 07/20
// ------------------------------------------------------------------------------------------------------
// tabs handler
// ------------------------------------------------------------------------------------------------------

$(document).ready(function(){

	
	$('.item').on("click", function() { 
		$('.hilite').removeClass('hilite');
	    $(this).addClass('hilite');
	});
	
	$(window).on("hashchange", function(e) { 


		// prevent hash scrolling around when clicked
		var x = window.pageXOffset,
		    y = window.pageYOffset;
		$(window).one('scroll', function () {
		    window.scrollTo(x, y);
		})
		 
		// default tab: #account  
		var has 	= location.hash;
		if(!has || has=="#!") {
			has="#account"; 
			$('.hilite').removeClass('hilite');
			$('#fst').addClass('hilite');
		}

		// else highlight tab whatever hash we can find in URL: USE "ITEM" class!!!
		else{$('.item[href="' + has + '"]').addClass("hilite");}
		    
		// 3- liner tabs with hash!
		$('.hdr-tab').hide();
		$(has).fadeIn("slow");	


	}).trigger("hashchange");




// ------------------------------------------------------------------------------------------------------
// #account Contact Save
// ------------------------------------------------------------------------------------------------------




	$("#contact-form").validate	
	({
	    ignore: ".ignore",	
	
		rules: 
		{
			first: 			{ required: true },
			last: 			{ required: true },
			mob: 			{ required: true },
			officephone:	{ required: true },
			www: 			{ required: true },
			company:		{ required: true },
			stadt:			{ required: true },
			land:			{ required: true },
		},
		
		messages:
		{
			first: 		 	"Required",
			last: 			"Required",
			mob: 		 	"Required",
			officephone: 	"Required. If you don't have one type 'N/A'",
			www:		 	"Required. If you don't have one type 'N/A'",
			company:	 	"Required",
			stadt:	 	 	"Required",
			land:			"Required"
	
		},
		
		
	});


		// show badge in Account tab on invalid submission
		$("#contact-form").on("invalid-form.validate", function (event, validator) {
		  var errors = validator.numberOfInvalids();
		  if (errors) {
		    $("#err").html("<span class='badge tips' title='May we request you to <b>please complete your contact details?</b>'>"+errors+"</span>");
		    new $.Zebra_Tooltips($('.tips'),{position:'center'});
		  }
		});	
	$('#contact-form').valid(); 

}); // close document ready


	$('body').on('click', '#Contact_Save', function(e){
	e.preventDefault();
	
	if ($('#contact-form').valid()) 
		// Contact Form Validator
	{
		  $.ajax({
		  
		  type : 'POST',
		  url  : 'dashboard_contact_save',
		  data :  $("#contact-form").serialize(),
		  success :  
		  		  
		  	  	function() {
				swal("Contact Details Updated", {
					  buttons: false,
					  icon: "success",
					  timer: 3000,
					});
				// remove content update nagger 	
				
				 $("#err").remove();
				
	  			}	  
		  	  });
	}
	});


// change email / pass buttons

	$('.tgl_email').on('click', function() {
		$('#eml,#comms,#chan').slideToggle();
	});
	
	$('.tgl_pass').on('click', function() {
		$('#pass,#comms,#chan').slideToggle();
	});



// ------------------------------------------------------------------------------------------------------
// change EMAIL
// ------------------------------------------------------------------------------------------------------
 
	jQuery.validator.addMethod( 'EmailMatch', function(value, element) {
	    
	    var e1 = $("#e1").val();
	    var e2 = $("#e2").val();
	
	    if (e1 != e2 ) {
	        return false;
	    } else {
	        return true;
	    }
	
	}, "These don't match");
	
	
		
		
	$("#emailform").validate
	({
	
	rules: 
	{
		e1: {
		    required: true,
	},
		e2: {
		    required: true,
		    EmailMatch: true
	}
	},
	
	messages: 
	{
	    e1: {
	        required: "New Email here",
	    },
	    e2: {
	        required: "Retype Email here",
	        EmailMatch: "These don't match. Try again?" // custom message for mismatched passwords
	    }
	},
	
	submitHandler: eForm	
 });

   
	   
function eForm()
{		
   
	 swal({
	  title: "Sure Update?",
	  text: "Don't forget to use your NEW EMAIL next time you log in!",
	  icon: "warning",
	  buttons: true
	})
	.then((willDelete) => 
	{
	  if (willDelete) 
	  {
	      $.ajax({ 
		  type : 'POST',
		  url  : 'email_change',
		  data :  $("#emailform").serialize(),
		  success : function(data)
				    {
						$("#eml,#comms,#chan").slideToggle();
						swal("Done!", {
							text: "New Sign-in email is " + data +". We've just sent you a quick test email. Please check if you received it.",
							icon: "success"
						});
						$("#main_email").text(data);
				    }
		  });
	   }
	});
}




// ------------------------------------------------------------------------------------------------------
// Changed email 
// ------------------------------------------------------------------------------------------------------
$("#e1").on("focusout",function() {
$("#stat").html("");
var usr = $("#e1").val();

    $.ajax({ 
    type: "POST", 
    url: "check", 
    data: "email="+ usr,
    dataType: 'text',
    success: function(msg){
			
			if(msg === 'tkb') { 
               $("#stat").html("This email address is already in our database! Please use another email.");
			   $("#update_email").prop('disabled', true);
           }
            if(msg === 'facebook') {
               $("#stat").html('You are already signed up via FACEBOOK. Please use another email.');
			   $("#update_email").prop('disabled', true);
           }
            if(msg === 'twitter') {
               $("#stat").html('You are already signed up via TWITTER. Please use another email.');
			   $("#update_email").prop('disabled', true);
           }
            if(msg === 'google') {
               $("#stat").html('You already signed up via GOOGLE. Please use another email.');
			   $("#update_email").prop('disabled', true);
           }
            if(msg === 'linkedin') {
               $("#stat").html('You are already signed up via LINKEDIN. You cannot use this email.');
			   $("#update_email").prop('disabled', true);

           }
            if(msg === 'ok') {
               $("#stat").html('');
			   $("#update_email").prop('disabled', false);

           }

        }

    });

});




// ------------------------------------------------------------------------------------------------------
// change pass
// ------------------------------------------------------------------------------------------------------

// password strengths
$(document).on('keyup', '#p1', function(){
	$('#pass_stat').html(checkStrength($('#p1').val()))
})
function checkStrength(password) {
	var strength = 0
	if (password.length < 6) {
		$('#pass_stat').removeClass()
		$('#pass_stat').addClass('text-danger')
		return '6 + characters.'
	}
	if (password.length > 20) {
		$('#pass_stat').removeClass()
		$('#pass_stat').addClass('text-danger')
		return 'Enough!'
	}
	
	if (password.length > 6) strength += 1
	if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1
	if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1
	if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
	if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
	if (strength < 2) {
		$('#pass_stat').removeClass()
		$('#pass_stat').addClass('text-warning')
		return 'Weak but fine'
	} else if (strength == 2) {
		$('#pass_stat').removeClass()
		$('#pass_stat').addClass('text-success')
		return 'Good Enough'
	} else {
		$('#pass_stat').removeClass()
		$('#pass_stat').addClass('text-success')
		return 'Solid & Strong!'
	}
}			  



jQuery.validator.addMethod( 'passwordMatch', function(value, element) {
    
    var password = $("#p1").val();
    var conf = $("#p2").val();

    if (password != conf ) {
        return false;
    } else {
        return true;
    }

}, "Your Passwords Must Match");


	
	
 $("#passform").validate
 ({
  
  
 rules: 
 {
    p1: {
        required: true,
        minlength: 6
    },
    p2: {
        required: true,
        minlength: 6,
        passwordMatch: true
    }
},

messages: 
{
    p1: {
        required: "New password here",
        minlength: "At least 6 characters"
    },
    p2: {
        required: "Confirm password here",
        passwordMatch: "These don't match. Try again?" // custom message for mismatched passwords
    }
},

submitHandler: submitForm	
 });

   
	   
function submitForm()
{		
   
	 swal({
	  title: "Sure Update?",
	  text: "Don't forget to use your new Password next time you log in!",
	  icon: "warning",
	  buttons: true
	})
	.then((willDelete) => 
	{
	  if (willDelete) 
	  {
	      $.ajax({ 
		  type : 'POST',
		  url  : 'pass_change',
		  data :  $("#passform").serialize(),
		  success : function(data)
				    {
					  $("#pass,#comms,#chan").slideToggle();
					  swal("Done!", {
						  buttons: false,
						  icon: "success",
						  timer: 3000,
						});
				    $("#p1,#p2").val('');
				    }
		  });
	   }
	});
}






// ------------------------------------------------------------------------------------------------------
// PROFILE TAB
// ------------------------------------------------------------------------------------------------------



$('#profile_pause').on('click', function() 
{
		$("div.Zebra_Tooltip,.since").remove();

		

		$(this).toggleClass("profile_paused");
	   
	   	var tip, status, set_to, a, x= $(".profi").text();

		
		if( $(this).hasClass('profile_paused'))
		{
		   	tip		= 	`<div class='text-warning'><b><svg><use href='/s.svg#exclamation-triangle'></use></svg>PROFILE NOW PAUSED</b></div>`; 
			status	=	"<svg><use href='/s.svg#pause'></use></svg>PAUSED";
			set_to 	=	1;
			a		=	"Paused";
			$(".profi").text("is now paused").toggleClass("text-warning text-success"); 
    	}


	    else
	    {
			tip 	= 	`<div class='text-success'><b><svg><use href='/s.svg#check'></use></svg>PROFILE NOW LIVE</b></div>`; 
		   	status	=	"<svg><use href='/s.svg#pause'></use></svg>Pause";
		   	set_to 	=	0;
			a		=	"Live";
			$(".profi").text("is now live").toggleClass("text-warning text-success");
	    }
    
		$(this).prop('title', tip).html(status);
		
		new $.Zebra_Tooltips($('.tips'),{position:'center'});
		

    
		$.ajax({
		type : 'POST',
		url  : 'alerts_save',
		data: {"paused":set_to},
		success :  
	  		  function() 
	  		  {
				swal("Your Profile is now "+a, {
					  buttons: false,
					  icon: "success",
					  timer: 3000,
					});
  			  }
		 
		});

});


function copy(s){ 
	var $temp 	= $("<div>");
	$(s).append($temp);
	$temp.attr("contenteditable", true)
	   .html($(s).html()).select()
	   .on("focus", function() { document.execCommand('selectAll',false,null); })
	   .focus();
	document.execCommand("copy");
	$temp.remove();
	$(s).html("<span class='text-success'><svg><use href='/s.svg#check'></use></svg>Copied!</span>");
}


$('.copy_1').on('click', function() {
	 copy('.copy_1')
});

$('.copy_2').on('click', function() {
	 copy('.copy_2')
});



// ------------------------------------------------------------------------------------------------------
// DEL ALL! User wants to leave us completely. 'Forget me' feature
// ------------------------------------------------------------------------------------------------------
$("#delall").on("click",function() {


	 swal({
	  title: "Sure Delete Account?",
	  text:  "We'd be sad to see you go! This can't be un-done.",
	  icon:  "warning",
	  buttons: true
	})
	.then((willDelete) => 
	{
	  if (willDelete) 
	  {  
		  $.ajax({
			  type : 'POST',
			  url  : 'logout_killswitch',
			  data: { killall : 1},
			  success :  
			  		  function() {
			  		  
			  		  
			  		swal("Thanks for using Expertbase. Signing you out...", {
					  buttons: false,
					  icon: "success",
					  timer: 3000,
					});
	  		  
	  	  	  	  setTimeout(function() {
	 			      
						window.location.hash = ""
						window.location.replace("https://www.expertbase.org");
				      
	 				  },3000)
	 				  
		  }
		  });
	   }
	});
});


// ------------------------------------------------------------------------------------------------------
// Delete FAV OPPS
// ------------------------------------------------------------------------------------------------------

$(".delopp").on("click",function() {
 
	swal({
		title		: "Sure remove?",
		icon		: "warning",
		buttons		: true,
		dangerMode	: true,
	})
	.then((willDelete) => {
	  if (willDelete) {

	  	var del_id = $(this).attr('id');
	    var rowElement = $(this).closest(".similar"); //grab the row
	    
			$.ajax({
			
				type 	: 'POST',
				url 	: 'fav',
				data	: {cp_opp_delete_this_id : del_id},	
						      
				success: function(html) 
				{
					rowElement.fadeOut(1000, function(){
					$(this).remove();
					var anyleft = $('.favopps').length;
					
					if (anyleft==0) 
					{
						$( "div.favopp" ).replaceWith( "<h4>All bookmarks are now deleted.</h4>" );
					}
					});
				} 
			});
		}
	});
});



// ------------------------------------------------------------------------------------------------------
// Delete FAV EXPERTS
// ------------------------------------------------------------------------------------------------------


$(".delfav").on("click",function() {
  

swal({
	title		: "Sure remove?",
	icon		: "warning",
	buttons		: true,
	dangerMode	: true,
})
.then((willDelete) => {
  if (willDelete) {

  	var del_id 		= $(this).attr('id');
    var rowElement 	= $(this).closest(".similar") //grab the row
	
	$.ajax({
	  
		type : 'POST',
		url  : 'fav',
		data : {cp_fav_delete_this_id : del_id},	
	  			      
		success: function(html) 
		{
			rowElement.fadeOut(1000, function(){
				$(this).remove();
				var anyleft = $('.favexperts').length;
				if (anyleft==0) 
				{
					$( "div.favex" ).replaceWith( "<h4>All bookmarks are now deleted.</h4>" );
				}
			});
		}	      
	});
	return false;

}
});

});


// ------------------------------------------------------------------------------------------------------
// Delete FAV ARTICLES
// ------------------------------------------------------------------------------------------------------


$(".delart").on("click",function() {
 
 
swal({
	title		: "Sure remove?",
	icon		: "warning",
	buttons		: true,
	dangerMode	: true,
})
.then((willDelete) => {
	if (willDelete) 
	{
		var del_id = $(this).attr('id');
		var rowElement = $(this).closest(".similar"); //grab the row
	
			$.ajax({
		  	type 	: 'POST',
		  	url  	: 'fav',
		  	data	: {cp_wp_delete_this_id : del_id},	
		  			      
			success	: function(html) 
			{
				rowElement.fadeOut(1000, function(){
					$(this).remove();
					var anyleft = $('.favarticles').length;
					
					if (anyleft==0) 
					{
						$( "div.favar" ).replaceWith( "<h4>All bookmarks are now deleted.</h4>" );
					}
				});
			}	      
		  });
		  return false;
	} 
	});
});




// ------------------------------------------------------------------------------------------------------
// Delete ARTICLES (articles tab)
// ------------------------------------------------------------------------------------------------------


$(".del_posted_article").on("click",function() {

 
	swal({
		title		: "Really Delete?",
		text		: "This can't be undone!",
		icon		: "warning",
		buttons		: true,
		dangerMode	: true,
	})
	.then((willDelete) => {
		if (willDelete) {
	
	 
	  
	  	var del_id 		= $(this).attr('id');
		var rowElement 	= $(this).closest(".similar"); //grab the row
	    
	  		  $.ajax({
			  
				type 	: 'POST',
				url  	: 'fav',
				data	: { cp_article_delete_this_id : del_id },	
			  			      
				success	: function(html) 
				{
					rowElement.fadeOut(1000, function(){
						$(this).remove(); 
						var anyleft = $('.user_articles').length;
						$("#art_count").text(anyleft);
						$(".takeaway").remove();
						
						if (anyleft==0) 
						{
							$( "div.user_wp" ).replaceWith( "<h4>All Articles are now deleted.</h4>" );
						}
					});
					
				}	      				      
			  });
			  return false;
		}
	});
});




// ------------------------------------------------------------------------------------------------------
// PAUSE / UNPAUSE ARTICLES (articles tab)
// ------------------------------------------------------------------------------------------------------


var i=0;
$(document).on("click", '.article_status', function() {

	// get the id of this article clicked to either pause or unpause
	var article_id 		= $(this).attr('id');
	// splits and returns into currentstate either "artpaused" or "artlive" => now we know the current state of this article
	var currentstate	= article_id.substr(0, article_id.indexOf('_'));  
	// and the part after the underscore is our id
	var art_id			= article_id.split("_").pop();
	
	
	
	
	if (currentstate == 'artlive')
	{
		
		$(this).parent().addClass("bg_warning");
		$(this).siblings('.lgreen').replaceWith("<div class='lyell mtb30'><svg><use href='/s.svg#pause'></use></svg>PAUSED</div>");
		$(this).replaceWith("<div class='bordered_btn article_status' id='artpaused_"+art_id+"'><svg><use href='/s.svg#play'></use></svg>Go Live</div>");

		$.ajax({
			type : 'POST',
			url  : 'alerts_save',
			data: {"article_status":"0","aid":art_id},
		});
	
	}
	if (currentstate == 'artpaused')
	{
		
		$(this).parent().removeClass("bg_warning");
		$(this).siblings('.lyell').replaceWith("<div class='lgreen mtb30'><svg><use href='/s.svg#check'></use></svg>LIVE</div>");
		$(this).replaceWith("<div class='bordered_btn article_status' id='artlive_"+art_id+"'><svg><use href='/s.svg#pause'></use></svg>Pause</div>");

		$.ajax({
			type : 'POST',
			url  : 'alerts_save',
			data: {"article_status":"1","aid":art_id},
		});
	
	}
});




// ------------------------------------------------------------------------------------------------------
// TRIPS HANDLER
// ------------------------------------------------------------------------------------------------------



if ($("#loc").length)
{
    //Autocomplete variables google dropdown 

 
	var placeSearch, autocomplete;
	var componentForm = {
	  locality: 'long_name',
	  country: 'long_name',
	};
	
	function initAutocomplete() {
	  autocomplete = new google.maps.places.Autocomplete(
	      (document.getElementById('loc')),
	      {types: ['(cities)']});
	
	  autocomplete.addListener('place_changed', fillInAddress);
	}
	
	function fillInAddress() {
	  var place = autocomplete.getPlace();
	
	  for (var component in componentForm) {
	    document.getElementById(component).value = '';
	    document.getElementById(component).disabled = false;
	  }
	
	  for (var i = 0; i < place.address_components.length; i++) {
	    var addressType = place.address_components[i].types[0];
	    if (componentForm[addressType]) {
	      var val = place.address_components[i][componentForm[addressType]];
	      document.getElementById(addressType).value = val;
	    }
	  }
	}
}



	// init datepicker
	$('[data-toggle="trip_start_date"]').datepicker({
	  format: 'dd/mm/yyyy',
	  weekStart:1,
	  startDate: new Date()
    });
	$('[data-toggle="trip_end_date"]').datepicker({
	  format: 'dd/mm/yyyy',
	  weekStart:1,
	});






$(document).on('change', '[data-toggle="trip_start_date"]', (e) => {
    e.preventDefault();

    const date = $(e.target).val();
    $('[data-toggle="trip_end_date"]').datepicker('setStartDate', date);
    $('[data-toggle="trip_end_date"]').datepicker('setDate', date);
});


$('body').on('click', '#trip_sub', function(e){

	// Contact Form Validator

	$("#trips_add").validate	
	({
	    ignore: ".ignore",	
	
		rules: 
		{
			trip_location: 	{ required: true },
			trip_start_date:{ required: true },
			trip_end_date: 	{ required: true },
		},
		
		
	    submitHandler: submitTripForm,
	});







	function submitTripForm()
	{	  
	 
		$.ajax({
		
		type 		: 'POST',
		url  		: 'dashboard_trips_handler',
		data 		:  $("#trips_add").serialize()+ "&add=1",
		success 	:  
	  		  
	  	  	function(html) {
			swal("Trip Added.", {
				  buttons: false,
				  icon: "success",
				  timer: 3000,
				});
			 	
			$("#trips_add").find("input[type=text], input[type=hidden]").val("");	// empty all fields to prep for next entry
			$('[data-toggle="trip_start_date"]').datepicker('reset');				// reset datepicker so that the prev date entered is forgotten
			$('[data-toggle="trip_end_date"]').datepicker('reset');
			$('.mgr').show(); 														// if we add a trip show the Manage my Trips box in any case
			$('#placeholder').remove();							 					// if there was a placeholder needed (if all trips removed) and a new added then remove placeholder
			$(".trips_grid").prepend(html); 										// new trip is retured and appended as the first child in the grid 
	  			var anyleft = $('.del_trip').length;
	  			if (anyleft>=5)
	  			{
					$( "#trip_sub" ).replaceWith("<div class='disabled tips' id='disitis' title='<b>Limit Reached</b><p>Hey - somebody is busy! Well done!<p>You have reached the limit of 5 active Trips. Now you need to either wait unit they expire so you can enter new ones again - or delete one or more Trips below to enter new ones.'><svg><use href='/s.svg#info_circle'></use></svg>Limit Reached</div>");
					new $.Zebra_Tooltips($('.tips'),{position:'center'});
	  			}
  			}	  
	  	  });
	} 

});



// ------------------------------------------------------------------------------------------------------
// DELETE A TRIP
// ------------------------------------------------------------------------------------------------------

$('body').on('click', ".del_trip" ,function() {

 
	swal({
		title		: "Really Delete?",
		text		: "This can't be undone!",
		icon		: "warning",
		buttons		: true,
		dangerMode	: true,
	})
	.then((willDelete) => {
		if (willDelete) {
	
	 
	  
	  	var del_trip	= $(this).data('id');
		var rowElement 	= $(this).closest(".current_trips"); //grab the row
	    
	  		  $.ajax({
			  
				type 	: 'POST',
				url  	: 'dashboard_trips_handler',
				data	: { del_trip : del_trip },	
			  			      
				success	: function(html) 
				{
					rowElement.fadeOut(1000, function(){
						$(this).remove(); 

						
						if ($('.del_trip').length==0) 
						{
							$( "div.trips_grid" ).html( "<div id='placeholder'><b>All Trips are now deleted.</b></div>" );
						}
						if($('#disitis').length<=5){
							$( "#disitis" ).replaceWith('<button type="submit" class="submit_btn" id="trip_sub"><svg><use href="/s.svg#plus"></use></svg>Add</button>');
						}
					});
					
				}	      				      
			  });
			  return false;
		}
	});
});




// ------------------------------------------------------------------------------------------------------
// OPPS HANDLER
// ------------------------------------------------------------------------------------------------------

// 
$('body').on('click', ".posted_showall" ,function() {
	t=$(this).text(); t=="▸ Show Closed Opps"?o="▸ Hide Closed Opps":o="▸ Show Closed Opps"; t=$(this).text(o);
	$('.user_posted.softhide').slideToggle();
});


$('body').on('click', ".applied_showall" ,function() {
	t=$(this).text(); t=="▸ Show All"?o="▸ Show Only Relevant Applications":o="▸ Show All"; t=$(this).text(o);
	$('.user_posted.softhide').slideToggle();
});

	
$(function(){
	// nifty one: filter finds hidden divs even in a hidden parent
	var check_for_live_opps = $('.user_posted').filter(function(){
	return $(this).css('display') == "none";
 }).length;
	check_for_live_opps==0 ? $('.user_posted.softhide').show("slow")&&$(".posted_showall").hide() : false; // if not, show what's left
});



// Opens the application-review popup
$('body').on('click', '.application_details', function() {  			
    sidepanelclose();
    opp_application_id= $(this).data("id");
    $("#more").empty().load("application_review",{opp_application_id:opp_application_id},function(){
    	new $.Zebra_Tooltips($('.tips'),{position:'center'});
    	dothewizard();
    });
	$("body").addClass("stopscroll");
	
});



// Close Handler: A client decides to prematurely close an opp

$('body').on('click', ".post_delopp" ,function() {

		
	var opp_id		= $(this).data('id');
		
	
	swal({
		title		: "Really Close?",
		text		: "Please let us know why:",
		content		: "input",
		icon		: "warning",
		buttons		: true,
		dangerMode	: true,
        			
	})
	.then((msg) => {
		if (msg) {
	
		    
	  		  $.ajax({
			  
				type 	: 'POST',
				url  	: 'dashboard_opps_handler',
				data	: { opp_id : opp_id, msg : msg },	
			  			      
				success	: function(html) 
				{
					
				  	$(".flex[data-id="+opp_id+"],.text-center[data-id="+opp_id+"]").remove();
				  	$(".lgreen[data-id="+opp_id+"],.lyell[data-id="+opp_id+"]").replaceWith(`<div class="lblck mtb30 tips" title="This Opportunity is <b>Closed / Completed</b>.<p>Should you have queries about it please <a href=&quot;#contact&quot;><b>Get in touch</b></a>."><svg><use href="/s.svg#info-circle"></use></svg>Closed</div>`);
				  	new $.Zebra_Tooltips($('.tips'));
					
				}	      				      
			  });
			  return false;
			  
		}
	});
});



// Withdraw handler - An expert decided to withdraw his application from an opp

$('body').on('click', ".applied_withdraw" ,function() {

		
	var withdraw_id	= $(this).data('id');
	var opp_id		= $(this).data('opp_id');
		
	
	swal({
		title		: "Really Withdraw?",
		text		: "Please let us know why:",
		content		: "input",
		icon		: "warning",
		buttons		: true,
		dangerMode	: true,
        			
	})
	.then((msg) => {
		if (msg) {
	
		    
	  		  $.ajax({
			  
				type 	: 'POST',
				url  	: 'dashboard_opps_handler',
				data	: { withdraw_id : withdraw_id, msg : msg, opp_id : opp_id},	
		  			      
				success	: function(html) 
				{
					
				  	$(".flex.a"+withdraw_id).remove();
				  	$(".do.a"+withdraw_id).replaceWith(`<div class="lgry mtb30 tips" title="You have widthdrawn / pulled out from this Opportunity. You will no longer be considered as a candidate<p>Should you have queries about it please <a href=&quot;#contact&quot;><b>Get in touch</b></a>."><svg><use href="/s.svg#info-circle"></use></svg>Withdrawn</div>`);
				  	new $.Zebra_Tooltips($('.tips'));
					
				}	      				      
			  });
			  return false;
			  
		}
	});
});




// form2wizard

(function(c){c.fn.formToWizard=function(e,u){function y(){e=c(n).data("options");k={GotoStep:function(e){var f="step"+--e;if(void 0===c("#"+f)[0])throw"Step No "+e+" not found!";"none"===c("#"+f).css("display")&&(c(n).find(".stepDetails").slideUp(),c("#"+f).slideDown("slow"),x(e))},NextStep:function(){c(".stepDetails:visible").find("a.next").click()},PreviousStep:function(){c(".stepDetails:visible").find("a.prev").click()}}}function p(f){var l="step"+f;c("#"+l+"commands").append("<"+e.buttonTag+' href="#" class="'+
l+'Prev pref">'+e.prevBtnName+"</"+e.buttonTag+">");c("."+l+"Prev").on("click",function(e){c("#"+l).slideUp();c("#step"+(f-1)).slideDown("slow");x(f-1);return!1})}
function m(f){var l="step"+f;c("#"+l+"commands").append("<"+e.buttonTag+' tabindex="0" href="#" class="'+l+'Next next">'+e.nextBtnName+"</"+e.buttonTag+">");c("."+l+"Next").on("click",function(k){!0===e.validateBeforeNext(n,c("#"+l))&&(c("#"+l).slideUp(),c("#step"+(f+1)).slideDown("slow"),x(f+1));return!1})}
function x(f){"function"===typeof e.progress?e.progress(f,w):e.showProgress&&(c("#steps li").removeClass("current"),c("#stepDesc"+f).addClass("current"));e.select&&e.select(n,c("#step"+f))}
if(0==this.length)return this;"string"!==typeof e&&(e=c.extend({submitButton:"applybutton",showProgress:!0,showStepNo:!0,validateBeforeNext:!0,select:null,progress:!0,nextBtnName:"Next <svg class='vanxt'><use href='/s.svg#arr_r'></use></svg>",prevBtnName:"<svg><use href='/s.svg#arr_l'></use></svg>Back",buttonTag:"a",nextBtnClass:"btn next",prevBtnClass:"btn prev",GotoStep:"2"},e));var n=this,f=c(n).find("fieldset"),w=f.length,A="#"+e.submitButton,k=null;c(".wizcount").text(w-1);if("string"!==typeof e)c(n).data("options",e),"function"!==typeof e.validateBeforeNext&&(e.validateBeforeNext=function(){return!0}),e.showProgress&&"function"!==typeof e.progress&&(e.showStepNo?c(n).before("<ul id='steps' class='steps'></ul>"):c(n).before("<ul id='steps' class='steps breadcrumb'></ul>")),f.each(function(f){c(this).wrap('<div id="step'+f+'" class="stepDetails"></div>');c(this).append('<p id="step'+f+'commands" class="commands"></p>');e.showProgress&&"function"!==typeof e.progress&&(e.showStepNo?c("#steps").append("<li id='stepDesc"+f+"'>Step "+(f+1)+"<span>"+c(this).find("legend").html()+"</span></li>"):c("#steps").append("<li id='stepDesc"+f+"'>"+c(this).find("legend").html()+"</li>"));0==f?(m(f),x(f)):f==w-1?(c("#step"+f).hide(),p(f),c(A).addClass("next").detach().appendTo("#step"+f+"commands")):(c("#step"+f).hide(),p(f),m(f))});else if("string"===typeof e)if(f=e,y(),"function"===typeof k[f])k[f](u);else throw f+" is invalid command!";return this}})(jQuery);
    
    


// form2wizard validate each step
function dothewizard() 
{
	
	var $signupForm = $('#applyforthis');

	$signupForm.formToWizard({
		buttonTag: 'applybutton',
		progress: function(i, count) {
			 $('#progress-complete').width(''+(i/count*100+25)+'%');
		},
	});
}



// ------------------------------------------------------------------------------------------------------
// Show / Hide Received Testimonials 
// ------------------------------------------------------------------------------------------------------

$(".t_").on("click",function() {
 
  	var t_id 		= 	$(this).data('t_id');
    var state		= 	$(this).text().slice(0,1);
    
		$.ajax({
		
			type 	: 	'POST',
			url 	: 	'fav',
			data	: 	{cp_testi_show_hide : t_id, state:state},	
		});
	
	
	state 			== 	"S" 
					? 	$(this).text("HIDE") && $(this).siblings(".t_go").html("<div class='text-success t_go'><svg><use href='/s.svg#check'></use></svg>Is Live</div>") 
					: 	$(this).text("SWITCH LIVE") && $(this).siblings(".t_go").html("<div class='text-danger t_go'><svg><use href='/s.svg#exclamation-circle'></use></svg>Not Live</div>");

});




// ------------------------------------------------------------------------------------------------------
// Delete Testimonial Written by this user
// ------------------------------------------------------------------------------------------------------

$(".del_t").on("click",function() {
 
	swal({
		title		: "Sure remove?",
		icon		: "warning",
		buttons		: true,
		dangerMode	: true,
	})
	.then((willDelete) => {
	  if (willDelete) {

	  	var del_id = $(this).attr('id');
	    var rowElement = $(this).closest(".similar"); //grab the row
	    
			$.ajax({
			
				type 	: 'POST',
				url 	: 'fav',
				data	: {cp_testimonial_id : del_id},	
						      
				success: function(html) 
				{
					rowElement.fadeOut(1000, function(){
					$(this).remove();
					var anyleft = $('.testi').length;
					
					if (anyleft==0) 
					{
						$( "div.wtestis" ).replaceWith( "<h4>All Testimonials are now deleted.</h4>" );
					}
					});
				} 
			});
		}
	});
});

