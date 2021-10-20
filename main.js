var text = document.getElementById("text");
var listas = document.getElementById("listas")
function callApi(){
    console.log("holi");
    $.get("https://api.chucknorris.io/jokes/random", function(data){
        console.log(data);
        text.innerHTML=data.value;
    });
 console.log("llama a funcion");
}

function callApi2(){
    $.get("https://api.chucknorris.io/jokes/categories", function(data){
  console.log(data)
  for(let i=0; i<data.length;i++){
      var li= document.createElement("li");
      li.onclick=()=>{
          selectCategori(data[i])
      }
      var a = document.createElement("a");
      a.classList.add("dropdown-item");
      a.text=data[i];
      li.appendChild(a);
 listas.appendChild(li);
  }
});
}
function selectCategori(categoria){
    $.get("https://api.chucknorris.io/jokes/random?category=" + categoria, function(data){
      text.innerHTML=data.value;
      
    })
    $("#dropdownMenuButton1").html(categoria);
}
