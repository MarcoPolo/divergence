var ShowAudioMenu = function(){
    if($('#audiomenu').length > 0){
      $('body').css('overflow', 'hidden');
      $('#audiomenu').show();
    }//endif
    else {
      var audiomenu = "<div class=''><h2>Audio</h2>"+
                      "<div class='audio-control'>"+
                      "<a href=''><img class='volume-bar' src='/'></a>"+
                      "<a href=''><div class='volume-bar'></div></a>"+
                      "<a href=''><div class='volume-bar'></div></a>"+
                      "<a href=''><div class='volume-bar'></div></a>"+
                      "<a href=''><div class='volume-bar'></div></a>"+
                      "<a href=''><div class='volume-bar'></div></a>"+
                      "<a href=''><div class='volume-bar'></div></a>"+
                      "<div class='clear'></div>"+
                      "<button class=''>&#8592</button>"+
                      "</div><!--Volume Control--></div><!--Container-->";

      $('body').css("overflow","hidden");
			$('body').append(audiomenu);
    }
  };
