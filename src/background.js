chrome.action.onClicked.addListener(async (tab) => {
    if (!tab.url) return;
    const jp = tab.url.replace(/\/en-us\//i, "/ja-jp/");
    if (jp !== tab.url) await chrome.tabs.update(tab.id, { url: jp });
  });
  