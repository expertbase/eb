// prettify larger numbers

function prettify(labelValue) {
	return Math.ceil(Number(labelValue)) >= 1.0e9 ?
		Math.ceil(Number(labelValue)) / 1.0e9 + " Billion" :
		Math.ceil(Number(labelValue)) >= 1.0e6 ?
		Math.ceil(Number(labelValue)) / 1.0e6 + " Million" :
		Math.ceil(Number(labelValue)) >= 1.0e3 ?
		Math.ceil(Number(labelValue)) / 1.0e3 + " Thousand" :
		Math.abs(Number(labelValue));
}



// nodes with class limit will be hidden from 10th item onward
$('.limit').each(function() {
	var LiN = $(this).find('.lmt').length;
	var rest = LiN - 8;
	if (LiN > 8) {
		$('.lmt', this).eq(7).nextAll().hide().addClass('togl');
		$(this).append('<div class="more"><svg><use href="/s.svg#chevron-down"></use></svg>' + rest + ' More</div>');
	}
});

$('.m25,.limit').on('click', '.more', function() {



	$(this).hasClass('less') ? $(this).html('<svg><use href="/s.svg#chevron-down"></use></svg>More').removeClass('less') :
		$(this).html('<svg><use href="/s.svg#chevron-up"></use></svg>Less').addClass('less');

	$(this).parent().find('.togl').slideToggle("slow");

});


//  profile getintouch 
$(document).on('click', 'a[href="#just_ask"]', function() {
	sidepanelclose();
	$("body").addClass("stopscroll");
	profileid = $("#ebp").data("pid");
	online = $(this).data("online");
	$("#more").empty().load("/profile_contact", { id: profileid, o: online }, function() {
		autosize($('textarea'));
		new $.Zebra_Tooltips($('.pop_tip'));
	});
});




// Claps

// clap from jsfiddle.net/urft14zr/425/  12/19 06/20

$(function($) {

	if ($('.clap_fixed_right').length) {

		let accCounter = 0;
		let t = +document.getElementById('totalCounter').innerText;
		let totalCount = t;

		const wpid = $("#ebp").data('aid');
		const minDeg = 1;
		const maxDeg = 72;
		const particlesClasses = [{
				class: "pop-top"
			},
			{
				class: "pop-top-left"
			},
			{
				class: "pop-top-right"
			},
			{
				class: "pop-bottom-right"
			},
			{
				class: "pop-bottom-left"
			},
		];


		document.getElementById('clap').onmouseover = function() {
			let sonarClap = document.getElementById('sonar-clap');
			sonarClap.classList.add('hover-active');
			setTimeout(() => {
				sonarClap.classList.remove('hover-active');
			}, 2000);
		}

		document.getElementById('clap').onclick = function() {
			const clap = document.getElementById('clap');
			const clickCounter = document.getElementById("clicker");
			const particles = document.getElementById('particles-1');
			const particles2 = document.getElementById('particles-2');
			const particles3 = document.getElementById('particles-3');
			clap.classList.add('clicked');
			upClickCounter();

			runAnimationCycle(clap, 'scale');

			if (!particles.classList.contains('animating')) {
				animateParticles(particles, 700);
			} else if (!particles2.classList.contains('animating')) {
				animateParticles(particles2, 700);
			} else if (!particles3.classList.contains('animating')) {
				animateParticles(particles3, 700);
			}
		}

		function upClickCounter() {
			const clickCounter = document.getElementById("clicker");
			const totalClickCounter = document.getElementById('totalCounter');

			accCounter++;
			if (accCounter < 11) {
				clickCounter.children[0].innerText = '+' + accCounter;
				totalClickCounter.innerText = totalCount + accCounter;
				if (clickCounter.classList.contains('first-active')) {
					runAnimationCycle(clickCounter, 'active');
				} else {
					runAnimationCycle(clickCounter, 'first-active');
				}
				runAnimationCycle(totalClickCounter, 'fader');
				$.ajax({ type: 'Post', data: { 'wpid': wpid }, url: 'ajax_claps_handler', });
				tot = t + accCounter;
				$("#clp").text(tot);
			} else {
				totalClickCounter.innerText = "Nice!";
				return false;
			}
		}

		function runAnimationCycle(el, className, duration) {
			if (el && !el.classList.contains(className)) {
				el.classList.add(className);
			} else {
				el.classList.remove(className);
				void el.offsetWidth;
				el.classList.add(className);
			}
		}

		function runParticleAnimationCycle(el, className, duration) {
			if (el && !el.classList.contains(className)) {
				el.classList.add(className);
				setTimeout(() => {
					el.classList.remove(className);
				}, duration);
			}
		}

		function animateParticles(particles, dur) {
			addRandomParticlesRotation(particles.id, minDeg, maxDeg);
			for (let i = 0; i < particlesClasses.length; i++) {
				runParticleAnimationCycle(particles.children[i], particlesClasses[i].class, dur);
			}
			particles.classList.add('animating');
			setTimeout(() => {
				particles.classList.remove('animating');
			}, dur);
		}

		function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		function addRandomParticlesRotation(particlesName, minDeg, maxDeg) {
			const particles = document.getElementById(particlesName);
			const randomRotationAngle = getRandomInt(minDeg, maxDeg) + 'deg';
			particles.style.transform = `rotate(${randomRotationAngle})`;
		}
	}
});







// comment submit for articles
$('body').on('click', 'a[href="#comment"]', function() {
	sidepanelclose();
	$("body").addClass("stopscroll");
	profileid = $("#ebp").data("pid");
	aid = $("#ebp").data("aid");
	$("#more").empty().load("article_comment", { id: profileid, aid: aid }, function() {
		autosize($('#wpcomments'));
		new $.Zebra_Tooltips($('.tips'));
	});
});






// if hash found in url on load open respective popups
if (location.hash && location.hash.length) {
	var hash = decodeURIComponent(location.hash.substr(1)); // minus '#'
	if (hash == 'comment') { $('a[href="#comment"]').trigger('click'); }
}



// comment form validator


$('body').on('click', '#comment_submit', function() {


	p1 = $("#calc").data("p1");
	p2 = $("#calc").data("p2");

	antispam_correct = p1 * p2;

	$.validator.addMethod("isequal", function(value, element) {
		return value == antispam_correct
	}, "Got to do this: Try " + antispam_correct + " :-)");


	// validate wp.php popup comments form (article_comment)
	$("#article_comment").validate({

		ignore: ".ignore",

		rules: {
			name: {
				required: true,
				minlength: 2
			},
			email: {
				validateEmail: true,
				required: true,
			},
			country: {
				required: true,
				minlength: 1
			},
			comment: {
				required: true,
				minlength: 10
			},
			calculate: {
				required: true,
				digits: true,
				isequal: true
			}
		},

		messages: {
			name: "Enter at least 2 characters",
			email: "Something wrong here!",
			country: "Your city / country?",
			comment: "Your comments? (10+ chars)"
		},
		submitHandler: submitForm
	});



	function submitForm() {

		var data = $("#article_comment").serialize();

		$.ajax({

			type: 'POST',
			url: 'article_comment_submit',
			data: data,
			success: function(data) {
				$("#article_comment")
					.fadeOut(500)
					.hide(function() {
						$(".result")
							.fadeIn(3000)
							.show(function() {
								$(".result").html(data);
							});
					});
			},
		});
		return false;
	}

});


// Articles to / from fav on wp.php 01/20
$(document).on('click', '.fav', function() {
	$(this).toggleClass("bookmark");

	var this_id = $(this).data("id");


	$.ajax({
		type: 'POST',
		url: 'fav',
		data: { cp_wp_delete_this_id: this_id }
	});
	return false;

});



// bottom bar hide / show on scroll down
$(window).scroll(function() {
	if (isScrolledIntoView('footer'))
		$('.btm_bar_mobile').fadeOut();
	else {
		$('.btm_bar_mobile').fadeIn();
	}
});


function isScrolledIntoView(elem) {
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height() - 200;

	var elemTop = $(elem).offset().top;
	var elemBottom = elemTop + $(elem).height();

	return ((elemTop < docViewBottom));
}