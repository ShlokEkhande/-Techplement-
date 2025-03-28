
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1200,
  });
});

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
});

function submitHandler() {
  alert("You Have Successfuly Sent the messege");
}

function courseHandler(courseId) {
  document.getElementById("card1").addEventListener("click", function (e) {
    e.preventDefault();

    if (localStorage.getItem(courseId)) {
      alert("You have already bought this course.");
    } else {
      let user = confirm("Do you want to proceed with the payment?");
      if (user) {
        localStorage.setItem(courseId, true);

        alert("You Have Bought The Course");
      } else {
        alert("You have Cancelled The Payment");
      }
    }

    window.location.href = "index.html";
  });
}
