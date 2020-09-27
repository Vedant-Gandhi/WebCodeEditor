"use strict";
outputscreencodeinsertionelement = document.getElementById("output-screen");
function getCodeWindowsValues() {}
//Download the file
/**
 *
 * @param {String} filetype
 * @param {String} text
 */
function download(filetype, text) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/" + filetype + ";charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", "index");

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

//Gets the code of html css and js and returns the combined code as a DOM code would look like.Returns a String
/**
 *
 * @param {String} htmlcode
 * @param {String} csscode
 * @param {String} jscode
 */
function combineCode(htmlcode, csscode, jscode) {
  let parser = new DOMParser().parseFromString(htmlcode, "text/html");
  let link = parser.createElement("style");
  let scripttag = parser.createElement("script");
  link.innerHTML = csscode;
  scripttag.innerHTML = jscode;
  parser.getElementsByTagName("head")[0].appendChild(link);
  parser.getElementsByTagName("body")[0].appendChild(scripttag);
  return parser.documentElement.innerHTML;
}

//Displays the code into the iframe screen
function DisplayonOutput() {
  outputscreencodeinsertionelement.srcdoc = combineCode(
    code_screen_variables["html"],
    code_screen_variables["css"],
    code_screen_variables["js"]
  );
}

//Function used to change font in the storage
/**
 *
 * @param {Object} event
 */
function addfonttostorage(event) {
  localStorage.setItem("defaultfontforwebcode", fonts[event]);
}

//Function used to write the code to local storage
/**
 *
 * @param {String} htmlscreen
 * @param {String} cssscreen
 * @param {String} jsscreen
 */
function save(htmlscreen, cssscreen, jsscreen) {
  code_screen_variables["html"] = htmlscreen;
  code_screen_variables["css"] = cssscreen;
  code_screen_variables["js"] = jsscreen;
  localStorage.setItem("htmlcodeforweb", htmlscreen);
  localStorage.setItem("csscodeforweb", cssscreen);
  localStorage.setItem("javascriptcodeforweb", jsscreen);
}

//Clears the sorage of code
function clearthecodestorage() {
  localStorage.setItem("htmlcodeforweb", "");
  localStorage.setItem("csscodeforweb", "");
  localStorage.setItem("javascriptcodeforweb", "");
}

//Clears the screen
/**
 *
 * @param {Object} htmlscreen
 * @param {Object}cssscreen
 * @param {Object} jsscreen
 */
function clearthescreen(htmlscreen, cssscreen, jsscreen) {
  htmlscreen.setValue("");
  code_screen_variables["html"] = "";
  cssscreen.setValue("");
  code_screen_variables["css"] = "";
  jsscreen.setValue("");
  code_screen_variables["js"] = "";
}

//Sets the theme on an event input:takes an event
/**
 *
 * @param {Object} event
 */
function settheme(event) {
  event.preventDefault();
  currenttheme = event.target.value;
  let storethelinktag = document.createElement("link");
  storethelinktag.type = "text/css";
  storethelinktag.rel = "stylesheet";
  storethelinktag.href = getthemepath(currenttheme);
  document.head.appendChild(storethelinktag);
  localStorage.setItem("defaultthemeforwebide", currenttheme);
  save(
    htmlcodescreen.getValue(),
    csscodescreen.getValue(),
    jscodescreen.getValue()
  );
  htmlcodescreen.setOption("theme", currenttheme);
  csscodescreen.setOption("theme", currenttheme);
  jscodescreen.setOption("theme", currenttheme);
}

//Loads the last saved code from the local storage
function load_the_last_code() {
  code_screen_variables["html"] = localStorage.getItem("htmlcodeforweb") || "";
  code_screen_variables["css"] = localStorage.getItem("csscodeforweb") || "";
  code_screen_variables["js"] =
    localStorage.getItem("javascriptcodeforweb") || " ";

  htmlcodescreen.setValue(code_screen_variables["html"]);
  csscodescreen.setValue(code_screen_variables["css"]);
  jscodescreen.setValue(code_screen_variables["js"]);
}

//Changes the font of the page
/**
 *
 * @param {Object} event
 */
function changefont(event) {
  let __name_____ = event.target.value;

  addfonttostorage(__name_____);
  save(
    htmlcodescreen.getValue(),
    csscodescreen.getValue(),
    jscodescreen.getValue()
  );
  alert(
    "Your code has been saved automatically.Page will refresh now to see the change in new fonts"
  );
  location.reload();
}
//Download all the contents of the code
function downloadAllCodes() {
  download("html", code_screen_variables["html"]);
  download("css", code_screen_variables["css"]);
  download("javascript", code_screen_variables["js"]);
}

/**The code is for first creation and configuration of code elements */
{
  themes.forEach((element) => {
    let themebtn = document.getElementById("thememenu");
    let childisthis = document.createElement("option");
    childisthis.value = element;
    childisthis.innerHTML = element;
    childisthis.setAttribute("onclick", "settheme(event)");
    childisthis.className = "dropdown-item";
    themebtn.appendChild(childisthis);
  });
}

/**Creates the code sections  */

let x = new getDefaultoptionsforhtmlcssjavascript();

htmlcodescreen = CodeMirror.fromTextArea(
  document.getElementById("htmlarea"),
  x.getHtmlOptions()
);
csscodescreen = CodeMirror.fromTextArea(
  document.getElementById("cssarea"),
  x.getCssOptions()
);
jscodescreen = CodeMirror.fromTextArea(
  document.getElementById("jsarea"),
  x.getJavaScriptOptions()
);

//This is the size of the screen
htmlcodescreen.setSize(codescreenwidth, codescreenheight);
csscodescreen.setSize(codescreenwidth, codescreenheight);
jscodescreen.setSize(codescreenwidth, codescreenheight);

load_the_last_code();

/**Menu bar buttons functionality */
document.getElementById("run-btn").addEventListener("click", function (event) {
  save(
    htmlcodescreen.getValue(),
    csscodescreen.getValue(),
    jscodescreen.getValue()
  );
  console.log(jscodescreen.getValue());
  DisplayonOutput();
});
//Add the functionality of clearing the data in all code editors
document
  .getElementById("clear-proj-btn")
  .addEventListener("click", function (event) {
    clearthecodestorage();
    clearthescreen(htmlcodescreen, csscodescreen, jscodescreen);
  });

//Add the functionality to the download button
document.getElementById("download-btn").addEventListener("click", function () {
  downloadAllCodes();
});

//Add the functionality to the save button
document.getElementById("save-btn").addEventListener("click", function () {
  save(
    htmlcodescreen.getValue(),
    csscodescreen.getValue(),
    jscodescreen.getValue()
  );
});

//Add the Ctrl+S as the save functionality
window.addEventListener("keydown", function (event) {
  if (event.keyCode === 83 && event.ctrlKey) {
    event.preventDefault();
    save(
      htmlcodescreen.getValue(),
      csscodescreen.getValue(),
      jscodescreen.getValue()
    );
  }
});
