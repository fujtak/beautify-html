
const getHTML = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  await chrome.scripting.executeScript({
    func: () => {
      chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if(message.action === 'getHTML') {
          sendResponse({ html: document.documentElement.outerHTML })
        }
      })
    },
    target: {
      tabId: tab.id
    }
  })
  const response = await chrome.tabs.sendMessage(tab.id, { action: "getHTML" })
  return response.html
}

export { getHTML }