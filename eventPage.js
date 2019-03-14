const menuItem = {
   "id": "youTubeIt",
   "title": "YouTube it",
   "contexts": ["selection"]
}

// create the option in contextMenus
chrome.contextMenus.create(menuItem)

// function that replace spaces into + sign
function replaceSpacing(data) {
   return encodeURI(data).replace(/\s/g, '+')
}


chrome.contextMenus.onClicked.addListener((selectedData) => {
   if (selectedData.menuItemId == 'youTubeIt' && selectedData.selectionText) {
      let yt = `https://www.youtube.com/results?search_query=${replaceSpacing(selectedData.selectionText)}`
      // create new tab
      chrome.tabs.create({ url: yt })
   }
})