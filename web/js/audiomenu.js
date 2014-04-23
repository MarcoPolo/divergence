$(document).ready(function($){
  ShowAudioMenu = (function(){
    if($('#audiomenu').length > 0){
      $('body').css('overflow', 'hidden');
      $('#audiomenu').show();
    }//endif
    else {
      var audiomenu = "<div id='audiomenu'><h2>Audio</h2>"+
                      "<div class='audio-control'>"+
                      "<a href='javascript:mute()'><img class='volume-bar' src='assets/img/speaker.png'></a>"+
                      "<div class='volume-bars'>"+
                      "<a href=''><div class='volume-bar'></div></a>"+
                      "<a href=''><div class='volume-bar'></div></a>"+
                      "<a href=''><div class='volume-bar'></div></a>"+
                      "<a href=''><div class='volume-bar'></div></a>"+
                      "<a href=''><div class='volume-bar'></div></a>"+
                      "<a href=''><div class='volume-bar'></div></a>"+
                      "</div>"+
                      "<div class='clr'></div>"+
                      "<button class='button' onclick='HideMenus(); ShowSettingsMenu();'>&#8592</button>"+
                      "</div><!--Volume Control--></div><!--Container-->";

      $('body').css("overflow","hidden");
			$('body').append(audiomenu);
    }
  });
  HideAudioMenu = (function() {
    $('body').css("overflow","auto");
    $('#audiomenu').hide();
	});
});
