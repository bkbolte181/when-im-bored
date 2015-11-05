var urls = [
	"https://code.google.com/codejam/contests.html",
	"https://wikileaks.org/",
	"http://www.instructables.com/tag/type-id/category-technology/",
	"http://www.getworkdonemusic.com",
	"http://codeforces.com",
	"http://reprap.org/wiki/Prusa_i3",
	"https://wordpress.com",
	"https://stallman.org",
	"http://agar.io/",
	"http://play.typeracer.com/"
];

chrome.browserAction.onClicked.addListener(function(tab) {
	var url = urls[Math.floor(Math.random() * urls.length)];
	chrome.tabs.update({url: url});
});
