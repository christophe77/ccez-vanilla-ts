chrome.runtime.onInstalled.addListener(() => {
	console.log('Extensionz installed !');
});

chrome.action.onClicked.addListener((tab: chrome.tabs.Tab) => {
	console.log("Clicked tab : :", tab);
});
