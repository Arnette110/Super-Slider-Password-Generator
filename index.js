// possible values for pw
var lwrCase = "abcdefghijklmnopqrstuvwxyz";
var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var spChar = "!@#$%^&*()_+-=?";

// set default length display 16
document.getElementById("length").innerHTML = "Password Length: 16";

// function to set #length based on slider position
document.getElementById("slider").oninput = function() {
  if (document.getElementById("slider").value > 0) {
    document.getElementById("length").innerHTML = " Password Length: " + document.getElementById("slider").value;
  }
};

// generate pw
function generate() {
  // make sure at least one checkbox is checked
  if (
    document.getElementById("lwrCase").checked == false &&
    document.getElementById("upCase").checked == false &&
    document.getElementById("num").checked == false &&
    document.getElementById("spChar").checked == false
  ) {
    alert("At least one selection is required");
  } else {
    // set pw length/complex
    var complexity = document.getElementById("slider").value;

    var values = "";
    var password = "";
    if (document.getElementById("lwrCase").checked) {
      values = values + lwrCase;
    }
    if (document.getElementById("upCase").checked) {
      values = values + upCase;
    }
    if (document.getElementById("num").checked) {
      values = values + number;
    }
    if (document.getElementById("spChar").checked) {
      values = values + spChar;
    };


    // create for loop to choose pw characters from selected criteria
    for (var i = 0; i < complexity; i++) {
      password =
        password +
        values.charAt(
          Math.floor(Math.random() * Math.floor(values.length - 1))
        );
    }

    // add pw to textbox
    document.getElementById("password").value = password;
  }
};


function copyToClipboard() {
  var passwordText = document.querySelector("#password");

  passwordText.select();
  document.execCommand("copy");

  alert(
    "Your password " + passwordText.value + " was copied to your clipboard."
  );
};

