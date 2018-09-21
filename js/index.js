var count=1;
function met(){
  //document.getElementById("IdTeste") é um jeito de pegar o OBJETO
  console.log(document.getElementById("IdTeste"));
  //o atributo innerHTML tem a função de alterar o HTML em si, se for value ela tem a função de alterar o valor da variavel assim por diante, em Jquery existe outra forma de pegar o valor.
  
  var a= document.getElementById("IdTeste").innerHTML;
  var inputText=$("#inputText").val();
  var inputDate=$("#inputDate").val();
  var inputSelect=$("#inputSelect").val();
  console.log(inputText);
  //devo pegar o valor atual do atributo e concatenar com outro texto
  a+=('<p id='+count+'>Texto: '+inputText+' Data: '+inputDate+' Select: '+inputSelect+'<button onclick= metodoExcluir('+this.count+')> exluir</button><button onclick= metodoEditar('+this.count+')> editar</button></p>');
  this.count++;
  //em seguida armazeno novamente dentro da div de idTeste o conteudo armazenado.
  document.getElementById("IdTeste").innerHTML=a;
}

function metodo(){
  alert("estou aqui")
}

function metodoExcluir(id){
  alert('exluir item: '+id);
  alert('exluir item: '+$('#'+id).html());
  'exluir item: '+$('#'+id).html("");
}

function metodoEditar(id){
  alert('editar item: '+id)
  alert('editar item: '+$("#"+id).html());
}