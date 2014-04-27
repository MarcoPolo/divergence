var lightbox =
    '<div id="lightbox" class="menu">' +
    '<div id="content">' +
    '<img src="assets/img/menu/menu_pause.png"/>' +
    '<input type="image" src="assets/img/menu/menu_resume.png" class="button" onclick="callResume()">' +
    '<input type="image" src="assets/img/menu/menu_reset.png" class="button" onclick="callResetGame()">' +
    '<input type="image" src="assets/img/menu/menu_save.png" class="button" onclick="callSaveGame()">' +
    '<input type="image" src="assets/img/menu/menu_load.png" class="button" onclick="callLoadGame()">' +
    '<input type="image" src="assets/img/menu/menu_settings.png" class="button" onclick="callSettingsMenu()">' +
    '</div>' +
    '</div>';

var lightbox2 =
    '<div id="lightbox2" class="menu">' +
    '<div id="content">' +
    '<br><br><br><br><br>' +
    '<img src="assets/img/menu/menu_settings_text.png"/>' +
    '<input type="image" src="assets/img/menu/menu_resume.png" class="button" onclick="callSettingsResume()">' +
    '<input type="image" src="assets/img/menu/menu_audio.png" class="button" onclick="callAudioMenu()">' +
    '<input type="image" src="assets/img/menu/menu_controls.png" class="button" onclick="">' +
    '</div>' +
    '</div>';

var audiomenu = "<div id='audiomenu' class='menu'><h2>Audio</h2>"+
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

var overlay = "<div class='overlay'></div>";

jQuery(document).ready(function() {

/**********************
 *Main Menu
 ***********************/
    ShowMenu = (function() {
        if ($('#lightbox').length > 0) { // #lightbox exists
          //show lightbox window - you could use .show('fast') for a transition
          $('body').css("overflow","hidden");
          $('#lightbox').show();
          openMenu();
        }
        else { //#lightbox does not exist - create and insert (runs 1st time only)
          //insert lightbox HTML into page
          $('body').css("overflow","hidden");
          $('#game-container').append(lightbox);
          openMenu();
        }
      });

    //Click anywhere on the page to get rid of lightbox window
    HideMenu = (function() {
      //$('#game-container').css("overflow","auto");
      closeMenu();
      $('#lightbox').hide();
    });

/**********************
 *Settings Menu
 ***********************/
    ShowSettingsMenu = (function() {
        if ($('#lightbox2').length > 0) { // #lightbox exists

          //show lightbox window - you could use .show('fast') for a transition
          $('#game-container').css("overflow","hidden");
          $('#lightbox2').show();
          openMenu();
        }
        else { //#lightbox does not exist - create and insert (runs 1st time only)
          //insert lightbox HTML into page
          $('#game-container').css("overflow","hidden");
          $('#game-container').append(lightbox2);
          openMenu();
        }
      });

      //Click anywhere on the page to get rid of lightbox window
    HideSettingsMenu = (function() {
       // $('#game-container').css("overflow","auto");
      closeMenu();
        $('#lightbox2').hide();
      });

/**********************
 *Audio Menu
 ***********************/
    ShowAudioMenu = (function(){
        if($('#audiomenu').length > 0){
          $('#game-container').css('overflow', 'hidden');
          $('#audiomenu').show();
          openMenu();
        }//endif
        else {

          $('#game-container').css("overflow","hidden");
          $('#game-container').append(audiomenu);
          openMenu();
        }
      });
    HideAudioMenu = (function() {
        //$('#game-container').css("overflow","auto");
        closeMenu();
        $('#audiomenu').hide();
    });

});//end .ready

function openMenu(){
  $('#game-container').append(overlay)
  $(".overlay").addClass("lightbox-overlay");
}
function closeMenu(){
  $('#game-container').find('.overlay').remove();
  $(".overlay").removeClass("lightbox-overlay");
}
