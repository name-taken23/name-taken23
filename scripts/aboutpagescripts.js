var i = 0;
var txt = 'visitor@portfolio:~$ loading about.md..'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}