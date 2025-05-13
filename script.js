function login() {
  var email = document.getElementById("user124").value;
  var password = document.getElementById("6464").value;
  // Έλεγχος εγκυρότητας
  if (users.hasOwnProperty(email) && users[email] === password) {
    var name = email.split('@')[0];
    alert("Καλώς ήρθες, " + name + "!");
    // Πρόσβαση στη σελίδα
    window.location.href = "before.html"; // Αντικαταστήστε το "welcome.html" με τη σελίδα προσβασης
  } else {
    alert("Άκυρα στοιχεία σύνδεσης. Παρακαλούμε δοκιμάστε ξανά.");
  }
}
