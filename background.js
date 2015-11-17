var urls = [
	"https://class.coursera.org/neuralnets-2012-001/lecture",
	"https://www.youtube.com/playlist?list=PLE6Wd9FR--EfW8dtjAuPoTuPcqmOV53Fu",
	"http://arxiv.org/list/cs.LG/recent",
	"http://nc.oxfordjournals.org/",
	"http://journal.frontiersin.org/journal/neuroscience/section/neuromorphic-engineering",
	"https://wikileaks.org/",
	"http://www.instructables.com/tag/type-id/category-technology/",
	"http://codeforces.com",
	"https://wordpress.com",
	"https://stallman.org",
	"http://agar.io/",
	"http://play.typeracer.com/"
];

chrome.browserAction.onClicked.addListener(function(tab) {
	var url = urls[Math.floor(Math.random() * urls.length)];
	chrome.tabs.update({url: url});
});
