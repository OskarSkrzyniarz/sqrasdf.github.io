var number = 1;

function changeSlide()
{
  number++;
  if (number > 4)
  {
    number = 1;
  }

  var code = "<img src=\"images/" + number + ".jpg\">"

  document.getElementById("photo").innerHTML = code;

  setTimeout("changeSlide()", 3000);
}
