/**
 *This class contains all the options for the CodeMirror initialization
 */
class getDefaultoptionsforhtmlcssjavascript {
  constructor() {}
  getHtmlOptions() {
    return {
      mode: "text/html",
      extraKeys: { "Ctrl-Space": "autocomplete" },
      theme: currenttheme,
      lineNumbers: true,
      scrollbarStyle: "simple",
    };
  }
  getCssOptions() {
    return {
      mode: "css",
      extraKeys: { "Ctrl-Space": "autocomplete" },
      theme: currenttheme,
      lineNumbers: true,
      scrollbarStyle: "simple",
    };
  }

  getJavaScriptOptions() {
    return {
      mode: "javascript",
      extraKeys: { "Ctrl-Space": "autocomplete" },
      theme: currenttheme,
      lineNumbers: true,
      scrollbarStyle: "simple",
    };
  }
}
