
// onload
  window.onload = function () {
        
            
// 1.btn
   $("btn").onclick = function () {
// 1.1 have comment and username
    var content = $("comment").value;
    var username = $("username").value;
    var imgSrc = "";

// 1.2 whether input nothing
    if (content.length === 0) {
     alert("Please input something!");
 // stop
    return;
            }

            if ($("upload").files.length !== 0) {
                // 1.3.1 get img
                var file = $("upload").files[0];
                // 1.3.2 create FileReader 
                var reader = new FileReader();
                // 1.3.3 read picture
                reader.readAsDataURL(file);
                // 1.3.4 show picture
                reader.onload = function (e) {
                // set max height and width
                var img = document.createElement("img");
                img.src = this.result;
                img.className = "comment-img";
                img.style.maxWidth = "400px";
                img.style.maxHeight = "400px";
                img.onload = function () {
                    // if picture is too large,make it smaller
                    if (img.width > 400 || img.height > 400) {
                    var scale = Math.min(400 / img.width, 400 / img.height);
                    img.style.width = img.width * scale + "px";
                    img.style.height = img.height * scale + "px";
                    }
                    imgSrc = img.outerHTML;
                    insertComment();
                };
                };
            } else {
                insertComment();
            }


            // insert to dom
            function insertComment() {
                // 1.4 create li into ul
                var newLi = document.createElement("li");
                newLi.innerHTML =
                '<div class="comment-header"><span>' +'\u{1F464}'+
                "&nbsp&nbsp&nbsp" + username + "&nbsp&nbsp&nbsp "+
                "</span><span>" +
                new Date().toLocaleString() +
                "</span></div>" +
                '<div class="comment-body">' +
                content +
                imgSrc +
                "</div>";

                $("comment_content").insertBefore(
                newLi,
                $("comment_content").children[0]
                );

                // 1.5 clear
                $("comment").value = "";
                $("username").value = "";
                $("upload").value = "";
            };
            };
        };
        // get id
        function $(id) {
            return typeof id === "string" ? document.getElementById(id) : null;
        }
    
//player detailed
    // get images
var images = document.getElementsByTagName("img");

// add listener
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    // get value of img
    var imgSrc = this.src;
    var imgAlt = this.alt;
    
    // get popup
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    // set value
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