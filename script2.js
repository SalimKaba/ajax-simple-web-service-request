document.getElementById("button").addEventListener("click", loadQuotes);
function loadQuotes(){
    var xhr = new XMLHttpRequest(); //maak een verzoek/brief
    console.log(xhr);
    xhr.open("GET", "https://thatsthespir.it/api", true); //brief sturen
    xhr.onload = function () { //terugvragen via onload, brief terugvragen
      if(xhr.status == 200) {
        var x = JSON.parse(this.responseText);
        document.getElementById('quotes').innerHTML = x.quote;//quote omdat we enkel de quote willen van de website
        }
    }
    xhr.onerror = function () {
      alert("not ok");
    };

    xhr.send(); //terug antwoord van de ontvanger
}

















// document.getElementById("button").addEventListener("click", loadUsers);
//
// //load github loadUsers
// function loadUsers(){
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://thatsthespir.it/api", true);
//   xhr.onload = function(){
//     if(this.status == 200){
//       var users = JSON.parse(this.responseText);
//
//       var output = "";
//       for(var i in users){
//         output +=
//         '<div class="user">' +
//           "<img src="'+users[i].avatar_url+'" width="70" height="70">" +
//           "<ul>" +
//           "<li>ID: "+users[i].id+"</li>" +
//           "</ul>" +
//           </div>";
//       }
//       document.getElementById("users").innerHTML = output;
//
//     }
//   }
//   xhr.send();
// }
