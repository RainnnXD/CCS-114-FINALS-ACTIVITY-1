function escapeHTML(text) {
  let div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function getInitials(name) {
  let cleanName = name.trim();
  if (cleanName == "") {
    return "?";
  }

  let first = cleanName.charAt(0);
  let lastSpace = cleanName.lastIndexOf(" ");

  // If there is only one word, use just one letter
  if (lastSpace == -1) {
    return first.toUpperCase();
  }

  let last = cleanName.charAt(lastSpace + 1);
  return (first + last).toUpperCase();
}

function makeRow(label, value) {
  let valueClass = "row-value";
  let text = "";

  if (value == "") {
    valueClass = "row-value empty";
    text = "Not provided";
  } else {
    text = escapeHTML(value);
  }

  return (
    '<div class="row">' +
    '<span class="row-label">' +
    label +
    "</span>" +
    '<span class="' +
    valueClass +
    '">' +
    text +
    "</span>" +
    "</div>"
  );
}

function showInfo() {
  let fullName = document.getElementById("fullName").value.trim();
  let email = document.getElementById("email").value.trim();
  let age = document.getElementById("age").value;
  let phone = document.getElementById("phone").value.trim();
  let birthday = document.getElementById("birthday").value;
  let country = document.getElementById("country").value;
  let course = document.getElementById("course").value.trim();
  let address = document.getElementById("address").value.trim();
  let bio = document.getElementById("bio").value.trim();

  let genderChoice = document.querySelector('input[name="gender"]:checked');
  let colorChoice = document.querySelector('input[name="color"]:checked');

  let gender = "";
  if (genderChoice != null) {
    gender = genderChoice.value;
  }

  let color = "";
  if (colorChoice != null) {
    color = colorChoice.value;
  }

  let checkedHobbies = document.querySelectorAll(".hobby:checked");
  let hobbies = "";
  for (let i = 0; i < checkedHobbies.length; i++) {
    if (i > 0) {
      hobbies = hobbies + ", ";
    }
    hobbies = hobbies + checkedHobbies[i].value;
  }

  document.getElementById("avatar").textContent = getInitials(fullName);

  if (fullName == "") {
    document.getElementById("cardName").textContent = "No name entered";
  } else {
    document.getElementById("cardName").textContent = fullName;
  }

  if (email == "") {
    document.getElementById("cardEmail").textContent = "No email entered";
  } else {
    document.getElementById("cardEmail").textContent = email;
  }

  let html = "";
  html = html + makeRow("Age", age);
  html = html + makeRow("Phone", phone);
  html = html + makeRow("Birthday", birthday);
  html = html + makeRow("Country", country);
  html = html + makeRow("Course", course);
  html = html + makeRow("Address", address);
  html = html + makeRow("Gender", gender);
  html = html + makeRow("Favorite color", color);
  html = html + makeRow("Hobbies", hobbies);
  html = html + makeRow("About me", bio);

  document.getElementById("output").innerHTML = html;
}

function clearInfo() {
  document.getElementById("infoForm").reset();
  document.getElementById("avatar").textContent = "?";
  document.getElementById("cardName").textContent = "Your name";
  document.getElementById("cardEmail").textContent = "Your email";
  document.getElementById("output").innerHTML =
    '<p class="placeholder">Nothing to show yet. Your details will appear here.</p>';
}

document.getElementById("showBtn").addEventListener("click", showInfo);
document.getElementById("clearBtn").addEventListener("click", clearInfo);

let fieldGroups = document.getElementsByClassName("field");
let allInputs = document.getElementsByTagName("input");
console.log(
  "Loaded " +
    allInputs.length +
    " inputs in " +
    fieldGroups.length +
    " field groups.",
);
