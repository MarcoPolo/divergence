//super temp, will be refactoring
goog.require("divergence.audio");

function mute(){
  var speaker = $('img.volume-bar');
  if(speaker.hasClass('mute')) {
    speaker.removeClass('mute');
    divergence.audio.unmute();
  }
  else {
    speaker.addClass('mute');
    divergence.audio.mute();
  }
}

function setVolume(volume){
  divergence.audio.setVolume(volume);
}

function setupAdjust(){
  ($('.current-volume').on('click', function($){
    $('.current-volume').removeClass('current-volume');
    $(this).addClass('current-volume');
    adjustVolume($(this));
  })(jQuery));
}

function adjustVolume(element){
  element.prevAll().addClass('current-volume');
}
