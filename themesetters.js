/**
 * Contains the theme names that the users can set
 * Contain all the code used to lead the theme for first time
 */

//Pass the name without css extension
/**
 *
 * @param {String} name
 */
function getthemepath(name) {
  return "./codemirror/theme/" + name + ".css";
}
var ctheme = localStorage.getItem("defaultthemeforwebide");
if (ctheme === null) {
  localStorage.setItem("defaultthemeforwebide", themes[0]);
  currenttheme = themes[0];
} else {
  currenttheme = ctheme;
}
storethelinktag = document.createElement("link");
storethelinktag.href = getthemepath(currenttheme);
storethelinktag.type = "text/css";
storethelinktag.rel = "stylesheet";
document.head.appendChild(storethelinktag);
