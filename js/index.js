var count = 1;

$(document).on('keypress', 'input.inputCPF', function(e) {
  var key = (window.event)?event.keyCode:e.which;
  if((key > 47 && key < 58)) {
      return true;   
    } 
    else {
     return (key == 8 || key == 0)?true:false;
   }
});

$(function () {

  function Excluir(){
    var par = $(this).parent().parent();
    if (confirm('Deseja excluir o registro?'))
      par.remove();
  };

  function Editar(){
    var par = $(this).parent().parent(); //tr
    var tdNome = par.children("td:nth-child(1)");
    var tdEmail = par.children("td:nth-child(2)");
    var tdCPF = par.children("td:nth-child(3)");
    var tdData = par.children("td:nth-child(4)");
    var tdSexo = par.children("td:nth-child(5)");

    tdNome.html("<input type ='text' value='"+tdNome.html()+"'/td>");
    tdEmail.html("<input type='text' id='txtEmail' value='"+tdEmail.html()+"'/>");
    tdCPF.html("<input type='text'id='txtDN' value='"+tdCPF.html()+"'/>");
    tdData.html("<input type='text'id='txtDN' value='"+tdData.html()+"'/>");
    tdSexo.html("<input type='text'id='txtDN' value='"+tdSexo.html()+"'/>");
  }

  function FunSal(){
    var par = $(this).parent().parent(); //tr
    var tdNome = par.children("td:nth-child(1)");
    var tdEmail = par.children("td:nth-child(2)");
    var tdCPF = par.children("td:nth-child(3)");
    var tdData = par.children("td:nth-child(4)");
    var tdSexo = par.children("td:nth-child(5)");

    tdNome.html(tdNome.children("input[type=text]").val());
    tdEmail.html(tdEmail.children("input[type=text]").val());
    tdCPF.html(tdCPF.children("input[type=text]").val());
    tdData.html(tdData.children("input[type=text]").val());
    tdSexo.html(tdSexo.children("input[type=text]").val());
  };

  $("#tabCrud").on("click", ".ExBut", Excluir);
  $("#tabCrud").on("click", ".AltBut", Editar);
  $("#tabCrud").on("click", ".salBut", FunSal);
});

function met() {

  var emailReg = new RegExp(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i);
  var inputNome = $("#inputNome").val();
  var inputDate = $("#inputDate").val();
  var inputSexo = $("#inputSexo").val();
  var inputEmail = $("#inputEmail").val();
  var inputCPF = $("#inputCPF").val();

  var linha = $('<tr><td class="idNome" ' + count + '" id="idNome' + count + '">'+ inputNome +
                '</td> <td  id="idEmail' + count + '"> ' + inputEmail + 
                '</td> <td id="idCPF' + count + '">' + inputCPF + 
                '</td> <td id="idData' + count + '">' + inputDate + 
                '</td> <td id="idSexo' + count + '">' + inputSexo + 
                '</td> <td><input type="button" class="ExBut" value="Excluir"/>' + 
                '</td> <td><input type="button" class="AltBut" value="Alterar"/>' + 
                '</td> <td><input type="button" class="salBut" value="Salvar"/></td></tr>'
  )

  this.count++;

  if(inputNome == undefined || inputNome==""){
    alert("O campo Nome é obrigatório")
  }
  else if(inputEmail == undefined || inputEmail=="")
  {
    alert("O campo E-mail é obrigatório!")
  }
  else if(!emailReg.test(inputEmail)){
    alert("E-mail com formato invalido")
  }
  else if(inputCPF == undefined || inputCPF=="")
  {
    alert("O campo CPF é obrigatório!")
  }
  else if(inputDate == undefined || inputDate=="")
  {
    alert("Selecione uma data válida")
  }
  else{
    $('#tabCrud').append(linha);

    $("#inputNome").val("");
    $("#inputEmail").val("");
    $("#inputDate").val("");
    $("#inputSexo").val("Homem");
    $("#inputCPF").val("");
  }
}