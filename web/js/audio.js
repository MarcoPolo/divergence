//super temp, will be refactoring
goog.require("divergence.audio");
function mute(){
  var speaker = $('img.volume-bar');
  if(!speaker.hasClass('mute')) {
    speaker.removeClass('mute');
    divergence.audio.unmute();
  }
  else {
    speaker.addClass('mute');
    divergence.audio.mute();
  }
}
