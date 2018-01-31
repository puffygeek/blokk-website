function hideAuthenticatedUser() {
  document.getElementById("user-not-authenticated").classList.add("show");
  document.getElementById("user-not-authenticated").classList.remove("hide");
  document.getElementById("user-authenticated").classList.add("hide");
  document.getElementById("user-authenticated").classList.remove("show");
  document.getElementById("user-authenticated-signout").classList.add("hide");
  document.getElementById("user-authenticated-signout").classList.remove("show");
}
function showAuthenticatedUser(user) {

  var name = user.name ? user.name : "user";

  document.getElementById("user-not-authenticated").classList.add("hide");
  document.getElementById("user-not-authenticated").classList.remove("show");
  document.getElementById("user-authenticated").classList.add("show");
  document.getElementById("user-authenticated").classList.remove("hide");
  document.getElementById("user-authenticated-signout").classList.add("show");
  document.getElementById("user-authenticated-signout").classList.remove("hide");

  document.getElementById("user-authenticated-name").innerHTML = "" + name;
}

function hideFirebaseLoginWindow() {
  document.getElementById("firebaseui-auth-container").classList.add("hide");
}

function showFirebaseLoginWindow() {
  document.getElementById("firebaseui-auth-container").classList.add("show");
}