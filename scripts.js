function loginUser() {
  clevertap.onUserLogin.push({
    Site: {
      Name: document.getElementById("name").value,
      Identity: document.getElementById("identity").value,
      Email: document.getElementById("emailid").value,
      Phone: document.getElementById("mobno").value,
      "MSG-email": true,
      "MSG-push": true,
      "MSG-sms": true,
      "MSG-whatsapp": true,
    },
  });
  clevertap.event.push("Web Login Successful");
  //snackbar
  var x = document.getElementById("sb6");
  x.classList.add("show");
  setTimeout(function () {
    x.className = x.className.replace("show1", "");
  }, 3000);

  console.log(clevertap.getCleverTapID());
}

// clevertap.onUserLogin.push({
//   Site: {
//     Name: "Snow John",
//     Identity: 68877102,
//     Email: "snow@gmail.com",
//     Phone: "+91155551234",
//     Gender: "M",
//     DOB: new Date(),

//     "MSG-email": true,
//     "MSG-push": true,
//     "MSG-sms": true,
//     "MSG-whatsapp": true,
//   },
// });
