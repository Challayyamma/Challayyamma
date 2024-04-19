const ham = document.querySelector(".ham");
const mylinks = document.querySelector(".mylinks");

ham.addEventListener("click", function buttonclicked() {
  mylinks.classList.toggle("navigation-active");
});
function myFunction() {
    var x = document.getElementById("mylinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  var username = document.getElementById("username");
var pass = document.getElementById("pass");

pass.onfocus = function () {
    if (pass.value === "ENTER PASSWORD") {
        pass.value = "";
    }
};

username.onfocus = function () {
    if (this.value === "ENTER USERNAME") {
        this.value = "";
    }
  };

  pass.onblur = function () {
      if (this.value === "") {
          pass.value = "ENTER PASSWORD";
      }
  };
  
  username.onblur = function () {
      if (this.value === "") {
          this.value = "ENTER USERNAME";
      }
  };