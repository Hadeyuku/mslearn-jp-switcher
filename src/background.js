chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.url) return;

  let newUrl = tab.url;

  // 英語 → 日本語
  if (/\/en-us\//i.test(tab.url)) {
    newUrl = tab.url.replace(/\/en-us\//i, "/ja-jp/");
  }
  // 日本語 → 英語
  else if (/\/ja-jp\//i.test(tab.url)) {
    newUrl = tab.url.replace(/\/ja-jp\//i, "/en-us/");
  }

  if (newUrl !== tab.url) {
    await chrome.tabs.update(tab.id, { url: newUrl });
  }
});
