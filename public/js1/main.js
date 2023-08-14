(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").css("top", "0px");
    } else {
      $(".sticky-top").css("top", "-100px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Header carousel
  $(".header-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: true,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 24,
    dots: true,
    loop: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
})(jQuery);

// RESUME      BUILDER

function addNewWEField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}

// generating CV

function generateCV() {
  let nameField = document.getElementById("nameField").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = nameField;

  //direct

  document.getElementById("nameT2").innerHTML = nameField;

  //contact

  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;

  //address

  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;

  //links

  document.getElementById("fbT").innerHTML =
    document.getElementById("fbField").value;

  document.getElementById("instaT").innerHTML =
    document.getElementById("instaField").value;

  document.getElementById("linkedT").innerHTML =
    document.getElementById("linkedField").value;

  //objectve

  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectiveField").value;

  //we

  let wes = document.getElementsByClassName("weField");
  let str = "";
  for (let e of wes) {
    str = str + `<li> ${e.value} </li>`;
  }

  document.getElementById("weT").innerHTML = str;

  //aq

  let aqs = document.getElementsByClassName("eqField");
  let str1 = "";
  for (let e of aqs) {
    str1 = str1 + `<li> ${e.value} </li>`;
  }

  document.getElementById("aqT").innerHTML = str1;

  //code for setting image

  let file = document.getElementById("imgField").files[0];
  console.log(file);

  let reader = new FileReader();

  reader.readAsDataURL(file);

  console.log(reader.result);

  //set img to template

  reader.onloadend = function () {
    document.getElementById("imgTemplate").src = reader.result;
  };

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}

// print CV

// function printCV() {
//   window.print();
// }

function printCV() {
  const printContent = document.getElementById("cv-template").innerHTML;
  const newWindow = window.open("", "_blank");
  newWindow.document.write("<html><head><title>CV</title></head><body>");
  newWindow.document.write(printContent);
  newWindow.document.write("</body></html>");
  newWindow.document.close();
  newWindow.print();
}

// email js

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

// company job show

hbs.registerHelper("times", function (n, block) {
  let accum = "";
  for (let i = 0; i < n; i++) {
    accum += block.fn(i);
  }
  return accum;
});
