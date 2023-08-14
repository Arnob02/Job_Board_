function SendMail() {
  var params = {
    from_name: document.getElementById("yourname").value,
    email_id: document.getElementById("youremail").value,
    message: document.getElementById("yourmessage").value,
  };
  emailjs
    .send("service_5a5wrsh", "template_t9qup3r", params)
    .then(function (res) {
      alert("Success!" + res.status);
    });
}
