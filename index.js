function onClick() {
  const closedIcon = document.querySelector(
    'ion-icon[name="lock-closed-outline"]'
  );
  const openIcon = document.querySelector('ion-icon[name="lock-open-outline"]');

  const textInput = document.querySelector("#password");

  if (closedIcon.style.display === "") {
    closedIcon.style.display = "none";
    openIcon.style.display = "";
    textInput.type = "text";
  } else {
    closedIcon.style.display = "";
    openIcon.style.display = "none";
    textInput.type = "password";
  }
}
