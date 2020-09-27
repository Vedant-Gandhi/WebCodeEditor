//This script stores the global variables that will be used throughout the program
var code_screen_variables = {
  html: "",
  css: "",
  js: "",
}; //This variable stores the CodeMirror Objects
var codescreenwidth = "100%"; //Stores the code screen width
var codescreenheight = "100%"; //Stores the code screen height
var outputscreencodeinsertionelement = document.getElementById("output-screen"); //Keep track of output screen so that we dont have to call DOM each time
var fonts = {
  //All the fonts
  ComicNue: "codecomicnue",
  Roboto: "coderoboto",
  Default: "Times New Roman,Times,serif",
  Ubuntu: "codeubuntu",
  PermanentMarker: "codepermanentmarker",
  Flamenco: "codeflamenco",
  Lexandapete: "codelexendapete",
};
var htmlcodescreen; //The coding screen for html
var csscodescreen; //The coding screen for css
var jscodescreen; //The coding screen for Javascript
var storethelinktag; //Stores the link tag
//Stores the names of all themes
const themes = [
  "3024-day",
  "3024-night",
  "abcdef",
  "ambiance-mobile",
  "ambiance",
  "ayu-dark",
  "ayu-mirage",
  "base16-dark",
  "base16-light",
  "bespin",
  "blackboard",
  "cobalt",
  "colorforth",
  "darcula",
  "dracula",
  "duotone-dark",
  "duotone-light",
  "eclipse",
  "elegant",
  "erlang-dark",
  "gruvbox-dark",
  "hopscotch",
  "icecoder",
  "idea",
  "isotope",
  "lesser-dark",
  "liquibyte",
  "lucario",
  "material-darke",
  "material-ocean",
  "material-palenight",
  "material",
  "mbo",
  "mdn-like",
  "midnight",
  "monokai",
  "moxer",
  "neat",
  "neo",
  "night",
  "nord",
  "oceanic-next",
  "panda-syntax",
  "paraiso-dark",
  "paraiso-light",
  "pastel-on-dark",
  "railscasts",
  "seti",
  "shadowfox",
  "solarized",
  "ssms",
  "the-matrix",
  "tomorrow-night-bright",
  "tomorrow-night-eighties",
  "ttcn",

  "yeti",
  "yonce",
  "zenburn",
];
var currenttheme; //Stores the current theme
