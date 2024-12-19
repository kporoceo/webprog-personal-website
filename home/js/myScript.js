function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }

  function myFunction2() {
    const element = document.getElementsByTagName("p"); 
  }

  document.getElementById("demo").innerHTML = '<br> The text in the first paragraph (index 0) is: <br>' + element[0].innerHTML;