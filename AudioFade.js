/*
AudioFade v1.0
Copyright (c) 2015 by Kameron Black
This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License.
To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/
or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.
*/
alert("The audio on this site will not autoplay using Google Chrome. Please try using Firefox or Edge instead!");

function AudioFade(element, fadeIn, fadeOut, fadeDuration) {
	console.log("Code is working");

	this.element = $(element).get(0);
	this.fadeIn = fadeIn;
	this.fadeOut = fadeOut;
	if (fadeDuration === undefined) {
		this.fadeDuration = 500;
	} else {
		this.fadeDuration = fadeDuration;
	}

	if (this.element.hasAttribute("loop")) {
		this.element.play();
	} else {
		var noLoop = true;
	}
	this.element.volume = 0;

	this.init = function() {
	$(window).scroll(function() {

		this.element = $(element).get(0);
		this.fadeIn = fadeIn;
		this.fadeOut = fadeOut;
		if (fadeDuration === undefined) {
			this.fadeDuration = 500;
		} else {
			this.fadeDuration = fadeDuration;
		}

		if (noLoop === true) {

			var loopFlag = false;
			if ($(window).scrollLeft() > this.fadeIn && loopFlag === false) {
				this.element.play();
				this.element.volume = 1;
				loopFlag = true;
			}

		} else {

			if ($(window).scrollLeft() >= this.fadeIn && $(window).scrollLeft() <= this.fadeIn + this.fadeDuration) { //fade in
				console.log("fading in");
				this.element.volume = ($(window).scrollLeft() - this.fadeIn) / this.fadeDuration;
			} else if ($(window).scrollLeft() >= this.fadeOut && $(window).scrollLeft() <= this.fadeOut + this.fadeDuration) { //fade out
					console.log("fading out");
				this.element.volume = 1 - (($(window).scrollLeft() - this.fadeOut) / this.fadeDuration);
			} else if ($(window).scrollLeft() > this.fadeIn + this.fadeDuration && $(window).scrollLeft() < this.fadeOut) {//peak
					console.log("peak");
				if (this.element.volume !== 1) {
				this.element.volume = 1;
				}
			} else {//not playing
				if (this.element.volume !== 0) {
				this.element.volume = 0;
				}
			}

		}
	});
	};
}
