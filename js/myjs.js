$('document').ready(function(){
    $('#menubtn').on('click',openNav);
    $('#sideclosebtn').on('click',closeNav);
    $('.illust-button').on('click',showIllustration);
    $('.gotoTopbtn').on('click',gotoTop);
    $('.illust-button2').on('click',showIllustration2);
    $(document).on('click','.card-link', changearrow);

    $('.dd').on('click', function(event){
      event.preventDefault();
      event.stopPropagation();
      $(this).children('.h-dd').slideToggle();
      $(this).children("a").toggleClass('active-cd');
      $(this).find('.ddarrow').toggleClass('fa-angle-up fa-angle-down');
      $(this).find('.foractive').toggleClass('d-none');
      $('.dd').find('a').css('color','black');   
    })

    $('.h-dd li').on('click', function(event){
        event.preventDefault();
        event.stopPropagation();
        $(this).children('.third-dd').slideToggle();
    });
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $(".menubar").addClass("shadow");
    }
	else{
		$(".menubar").removeClass("shadow");
	}
});

$(document).mouseup(function(e){
var obj = $('.header-search-input');
var btn = $('.search-btn');
if (!obj.is(e.target) && obj.has(e.target).length === 0 && !btn.is(e.target) && btn.has(e.target).length === 0) {
	obj.removeClass('active-search');
	obj.val('');
	}
});

$('.header-search-input').keypress(function (e) {
  if (e.which == 13 && this.value != '') {
    searchKeyword();
    return false;
  }
});
function changearrow(event){
  var accord = $(this).closest('.accordions');
  accord.find('i.fa-angle-up').toggleClass('fa-angle-up fa-angle-down');
  if($(this).attr('aria-expanded') == 'true'){
    $(this).find('i').toggleClass('fa-angle-up fa-angle-down');
  }
}

function showIllustration(event){
  event.preventDefault();
  $('.hiddencontents').toggleClass('showhidden');
  $(this).find('i').toggleClass('fa-angle-down fa-angle-up');
}

function showIllustration2(event){
	event.preventDefault();
	$(this).prev().slideToggle(800);
	$(this).find('i').toggleClass('fa-angle-down fa-angle-up');
}

function openNav() {
  if(parseInt(window.screen.width) <= 576){
    $("#mySidenav").css('width',"100%");
	$("#mySidenav > ul").fadeIn(700);
  }
  else{
    $("#mySidenav").css('width',"350px");
	$("#mySidenav > ul").fadeIn(700);
  }
  onOverlay();
}

function closeNav() {
  event.preventDefault();
  $("#mySidenav").css('width',"0");
  $("#main").css('margin-left',"0");
  $("#mySidenav > ul").fadeOut(100);
  offOverlay();
}

function onOverlay() {
  document.getElementById("overlay").style.display = "block";
}

function offOverlay() {
  document.getElementById("overlay").style.display = "none";
}

function gotoTop(){
  $("html, body").animate({ scrollTop: 0 }, "slow");
}

function showSearch(){
	var searchBox = $('.header-search-input');
	if(searchBox.val() === ''){
		searchBox.addClass('active-search');
	}
	else{
		searchKeyword();
	}
}

function searchKeyword(){
	alert('hey!');
}