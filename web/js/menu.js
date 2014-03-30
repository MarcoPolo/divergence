jQuery(document).ready(function($) {

	ShowMenu = (function() {


		if ($('#lightbox').length > 0) { // #lightbox exists

			//show lightbox window - you could use .show('fast') for a transition
			$('#lightbox').show();
		}

		else { //#lightbox does not exist - create and insert (runs 1st time only)

			//create HTML markup for lightbox window
			var lightbox =
			'<div id="lightbox">' +
				'<div id="content">' + //insert clicked link's href into img src
					'<br><br><br><br><br>' +
					'<img src="/images/menu_pause.png"/>' +
					'<br><br>' +
					'<input type="image" src="/images/menu_resume.png" id="menu_button" onclick="callResume()">' +
					'<br><br>' +
					'<input type="image" src="/images/menu_reset.png" id="menu_button" onclick="callResetGame()">' +
					'<br><br>' +
					'<input type="image" src="/images/menu_load.png" id="menu_button">' +
					'<br><br>' +
					'<input type="image" src="/images/menu_settings.png" id="menu_button" onclick="callSettingsMenu()">' +
					'<br><br>' +
				'</div>' +
			'</div>';

			//insert lightbox HTML into page
			$('body').append(lightbox);
		}

	});

	//Click anywhere on the page to get rid of lightbox window
	HideMenu = (function() {
		$('#lightbox').hide();
	});

	});
