//super temp, will be refactoring
goog.require("divergence.audio");

function mute(){
  var speaker = $('div.speaker');
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

function adjustVolume(element){
  element.parent().prevAll().find('.volume-bar').addClass('current-volume');
}

function setupAdjust(){
  $('.current-volume').click(function(event){
    $('.current-volume').removeClass('current-volume');
    $(this).addClass('current-volume');
    adjustVolume($(this));
  });
}
