<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

//PEDIDOS
let height, width, color;

$("#sizePicker").submit(function (evt) {
  evt.preventDefault();
  height = $("#inputHeight").val();
  width = $("#inputWidth").val();
  makeGrid(height, width);
});

function makeGrid(a, b) {
  $("tr").remove();

  for (var i = 1; i <= a; i++) {
    $("#pixelCanvas").append("<tr class=table" + i + "></tr>");
    for (var j = 1; j <= b; j++) {
      $(".table" + i).append("<td></td>");
    }
  }

  $("td").click(function addColor() {
    color = $("#colorPicker").val();
    if ($(this).attr("style")) {
      $(this).removeAttr("style");
    } else {
      $(this).attr("style", "background-color:" + color);
    }
  });
}

