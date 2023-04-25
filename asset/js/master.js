let _sec1 = document.getElementById("sec-Login");
let _btnLogin = document.getElementById("Login");
let _sec2 = document.getElementById("sec-Signup");
let _btnSingup = document.getElementById("Singup");

_sec2.classList.add("d-none");

_btnLogin.addEventListener("click", () => {
  _sec2.classList.remove("d-none");
  _sec1.classList.add("d-none");
});
_btnSingup.addEventListener("click", () => {
  _sec1.classList.remove("d-none");
  _sec2.classList.add("d-none");
});

// reggggg

let allError = [...document.getElementsByClassName("errorReq")];
allError.map((item) => {
  item.style.cssText = "transform:scale(0)";
});
let inp = document.getElementsByTagName("input");

for (i = 0; i < inp.length; i++) {
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  let email = document.getElementById("email");

  inp[i].addEventListener("input", function () {
    // username == '' ||
    //     username == null ||
    //     (username.search('<script/')) >= 0

    if (this.getAttribute("id") == username.getAttribute("id")) {
      this.nextElementSibling.style.cssText = "transform:scale(0)";
      if (this.value.search(/[!@#$%^&()=\s?<>:;"',/*-+-,-]/i) != -1) {
        this.nextElementSibling.style.cssText = "transform:scale(1);color:red";
      }
    }

    if (this.getAttribute("id") == password.getAttribute("id")) {
      this.nextElementSibling.style.cssText = "transform:scale(0)";
      if (this.value.search(/[!@#$%^&()=\s?<>:;"',/*-+-,]/i) != -1) {
        this.nextElementSibling.style.cssText = "transform:scale(1);color:red";
      }
    }
    if (this.getAttribute("id") == email.getAttribute("id")) {
      this.nextElementSibling.style.cssText = "transform:scale(0)";
      if (
        this.value.search(/[!#$%^&()=\s?<>:;"',/*-+,-]/i) != -1 ||
        this.value.length <= 3
      ) {
        this.nextElementSibling.style.cssText = "transform:scale(1);color:red";
      }
    }
  });
}
