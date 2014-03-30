jQuery(document).ready(function($) {

  	ShowSettingsMenu = (function() {

		if ($('#lightbox2').length > 0) { // #lightbox exists

			//show lightbox window - you could use .show('fast') for a transition
			$('#lightbox2').show();
		}

		else { //#lightbox does not exist - create and insert (runs 1st time only)

			//create HTML markup for lightbox window
			var lightbox2 =
			'<div id="lightbox2">' +
				'<div id="content">' + //insert clicked link's href into img src
					'<br><br><br><br><br>' +
					'<img src="/images/menu_settings_text.png"/>' +
					'<br><br>' +
					'<input type="image" src="/images/menu_resume.png" id="menu_button" onclick="callSettingsResume()">' +
					'<br><br>' +
					'<input type="image" src="/images/menu_load.png" id="menu_button">' +
					'<br><br>' +
					'<input type="image" src="/images/menu_audio.png" id="menu_button">' +
					'<br><br>' +
					'<input type="image" src="/images/menu_controls.png" id="menu_button">' +
					'<br><br>' +
				'</div>' +
			'</div>';

			//insert lightbox HTML into page
			$('body').append(lightbox2);
		}

	});

	//Click anywhere on the page to get rid of lightbox window
	HideSettingsMenu = (function() {
    $('#lightbox2').hide();
	});

	});
