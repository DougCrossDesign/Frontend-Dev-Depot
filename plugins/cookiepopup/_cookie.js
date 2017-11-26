/*!
	* Cookie Pop Up v0.1
	* Author: Doug Cross for AYC Media
	* Dual licensed under the MIT and GPL licenses:
	* http://www.opensource.org/licenses/mit-license.php
	* http://www.gnu.org/licenses/gpl.html
**/


var cookieHelper = (function() {
	var checkCookie = function(key, value) {
		var cookieToCheck = readCookie(key);
		return cookieToCheck === value ? true : false;
	};
	var writeCookie = function(key, value, days) {
		var expires = null;
		if (days) {
			expires = new Date();
			expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
		} else {
			expires = 'Thu, 01 Jan 1970 00:00:01 GMT';
		}
		document.cookie = key + '=' + value + '; expires=' + expires + '; path=/;';
	};
	var readCookie = function(key) {
		var keyAndEquals = key + '=';
		var cookieArray = document.cookie.split(';');
		for (var i = 0; i < cookieArray.length; i++) {
			var cookie = cookieArray[i];
			while (cookie.charAt(0) == ' ') cookie = cookie.substring(1, cookie.length);
			if (cookie.indexOf(keyAndEquals) === 0) return cookie.substring(keyAndEquals.length, cookie.length);
		}
		return null;
	};
	var eraseCookie = function(key) {
		writeCookie(key, 'on', false);
	};
	return {
		checkCookie: checkCookie,
		writeCookie: writeCookie,
		readCookie: readCookie,
		eraseCookie: eraseCookie
	};
})();


var modalHelper = (function() {
	var closeBtns = document.querySelectorAll('.modal .close');
	for (var i = 0; i < closeBtns.length; i++) {
		closeBtns[i].addEventListener('click', function(e) {
			e.preventDefault;
			var el = this;
			while ((el = el.parentElement) && !el.classList.contains('modal'));
			toggleModal(el, 'hide');
			return false;
		}, false);
	}
	var toggleModal = function(modal, state) {
		if(state === 'show') {
			modal.classList.remove('hidden');
		} else if(state === 'hide') {
			modal.classList.add('hidden');
		}
	};
	return {
		toggleModal: toggleModal
	};
})();


(function() {
	var modalEl = document.getElementById('signup-modal'),
		cookieKey = 'warning';
	if(modalEl) {
		if (cookieHelper.checkCookie(cookieKey, 'off')) {
			modalHelper.toggleModal(modalEl, 'hide');
		} else {
			modalHelper.toggleModal(modalEl, 'show');
		}
		document.getElementById('nothanks').addEventListener('click', function() {
			cookieHelper.writeCookie(cookieKey, 'off', 60);
		}, false);
		document.getElementById('subscribe').addEventListener('click', function() {
			alert('redirect to Signup page');
		}, false);
	}
})();
