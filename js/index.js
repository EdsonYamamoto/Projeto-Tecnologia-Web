var count = 1;
function met() {

  var a = document.getElementById("IdTeste").innerHTML;
  var inputText = $("#inputText").val();
  var inputDate = $("#inputDate").val();
  var inputSelect = $("#inputSelect").val();
  console.log(inputText);
  //devo pegar o valor atual do atributo e concatenar com outro texto

  a += (
    '<p id=' + count +
    '>Texto: <label id="idLabel' + count + '">' + inputText +
    '</label> Data: <label id="idData' + count + '"> ' + inputDate +
    '</label>  Select: <label id="idSelect' + count + '"> ' + inputSelect +
    '</label> <button class="btnExcluir" onclick= metodoExcluir(' + this.count +
    ')> exluir</button><button class="btnEditar" onclick= metodoEditar(' + this.count + ')> editar</button></p>');
  this.count++;
  //em seguida armazeno novamente dentro da div de idTeste o conteudo armazenado.
  document.getElementById("IdTeste").innerHTML = a;
}

function metodo() {
  alert("estou aqui")
}

function metodoExcluir(id) {
  alert('exluir item: ' + id);
  alert('exluir item: ' + $('#' + id).html());
  'exluir item: ' + $('#' + id).html("");
}

function metodoEditar(id) {
  alert('editar item: ' + id)
  alert('editar item: ' + $("#" + id).html());
}