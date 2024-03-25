var intervalID = window.setInterval(process_text, 150)

strings = ["Student", "Developer", "Software Engineer"];
topsubtitle = document.getElementById("top-subtitle");
topsubtitle.innerHTML = strings[0];
index = 0
changed = false;
decrementing = true;

function process_text() {
  length = topsubtitle.innerHTML.length;
  if (length == 0 && decrementing) {
    decrementing = false;
    index += 1;
    if (index == 3) {
      index = 0;
    }
  } else if (decrementing) {
    if (length == strings[index].length) {
      intervalID = window.clearInterval(intervalID);
      intervalID = window.setInterval(process_text, 150);  
    }
    topsubtitle.innerHTML = ((strings[index]).substring(0, length-1));
  } else if (length == strings[index].length && !decrementing) {
    decrementing = true;
    intervalID = window.clearInterval(intervalID);
    intervalID = window.setInterval(process_text, 3000);
  } else {
    topsubtitle.innerHTML = ((strings[index]).substring(0, length+1));
  }
}