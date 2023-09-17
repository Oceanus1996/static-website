
  // GET image element
  var images = document.getElementsByTagName("img");
  // add event listener
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function() {
      var imgSrc = this.src;
      var imgAlt = this.alt;
      
      // get window's element
      var modal = document.getElementById("myModal");
      var modalImg = document.getElementById("img01");
      var captionText = document.getElementById("caption");
  
      // set elements
      modal.style.display = "block";
      modalImg.src = imgSrc;
      captionText.innerHTML = imgAlt+"<br><br>";
  
      // get close button
      var span = document.getElementsByClassName("close")[0];
      span.onclick = function() { 
        modal.style.display = "none";
      }
    });
  }




