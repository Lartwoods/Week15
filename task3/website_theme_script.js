//function showTheme() {
///if (document.getElementById("theme").value == "Winter")
//document.body.style.background = "#B1C3DA";
//if (document.getElementById("theme").value == "Spring")
//document.body.style.background = "#97BC70";
//}
function showTheme() {
  switch (document.getElementById("theme").value) {
    case "Winter":
      document.body.style.background = "#B1C3DA";
      break;
    case "Spring":
      document.body.style.background = "#97BC70";
      break;
    case "Summer":
      document.body.style.background = "#FFE5CD";
      break;
    case "Autumn":
      document.body.style.background = "#E55E2B";
      break;
  }
}
