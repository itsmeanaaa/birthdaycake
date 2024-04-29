function makeWish() {
  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;

  if (name && age) {
    alert("Happy " + age + "th Birthday, " + name + "!");
    document.getElementById('flame').style.visibility = "visible";
    setTimeout(function() {
      document.getElementById('flame').style.visibility = "hidden";
    }, 1000);
  } else {
    alert("Please enter your name and age.");
  }
}