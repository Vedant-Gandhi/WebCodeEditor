let defaultfont = fonts["Default"]; // Stores the defaultfont
/**
 *
 * @param {String} nameofthefont
 * This method sets the font for the web page
 */
function setfont(nameofthefont) {
  document
    .querySelector("body")
    .style.setProperty("--page-font", nameofthefont);
}
if (typeof Storage === undefined) {
  alert(
    "You can experience problems with the website and your settings will not be remembered.Please use a compatible and modern browser"
  );
} else {
  let font = localStorage.getItem("defaultfontforwebcode"); //Gets the stored font from the web browser
  if (font === null) {
    localStorage.setItem("defaultfontforwebcode", defaultfont); //Stores the font in the browser local storage
    setfont(defaultfont);
  } else {
    setfont(font);
  }
}
