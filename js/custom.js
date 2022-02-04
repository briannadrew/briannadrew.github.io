
//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
			});
		});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
});

window.addEventListener("DOMContentLoaded", () => {
	const recipe = document.getElementById("recipe");
	const repo = document.getElementById("repo");
	const rps = document.getElementById("rps");
	const datamine = document.getElementById("datamine");
	const maps = document.getElementById("maps");
	const voting = document.getElementById("voting");
	const ropes = document.getElementById("ropes");

	recipe.addEventListener("click", () => {
		window.open("https://drive.google.com/drive/folders/19K0qJz2B0O_37BulTV22Qz-Y-pLyviYD?usp=sharing", "_blank").focus();
	});

	repo.addEventListener("click", () => {
		window.open("https://drive.google.com/drive/folders/1BJzmtZuWxKxJDSupwi4oJi7uLYI8pktf?usp=sharing", "_blank").focus();
	});

	rps.addEventListener("click", () => {
		window.open("https://drive.google.com/drive/folders/1ZMvdryStyir_OpOyt2vHHYP4GIcNypyJ?usp=sharing", "_blank").focus();
	});

	datamine.addEventListener("click", () => {
		window.open("https://drive.google.com/drive/folders/1V5KT3R0fL8N0LbHT1sjrKy-sIIzKyNWB?usp=sharing", "_blank").focus();
	});

	maps.addEventListener("click", () => {
		window.open("https://drive.google.com/drive/folders/1J2Z5e9TTM_TbSYDezN-SpC7iidh-BfZj?usp=sharing", "_blank").focus();
	});

	voting.addEventListener("click", () => {
		window.open("https://drive.google.com/drive/folders/1D2VVlgm0YFEmVP0lQcgL5pg0mJZkfPSI?usp=sharing", "_blank").focus();
	});

	ropes.addEventListener("click", () => {
		window.open("https://drive.google.com/drive/folders/1w6lPvXdrWhTlgsjb_2g-onFX5cIWeG8i?usp=sharing", "_blank").focus();
	});
});
