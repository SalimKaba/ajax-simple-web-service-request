// verschil met js is dat jquery minder code heeft maar ingewikkelder
function jquery() {
  $.ajax({ // het openen, doorsturen en terugkrijgen bij js, komt allemaal samen in de ajax functie
    url: "https://thatsthespir.it/api", datatype: "JSON",
    success:  function (data) { //data = alles van https://thatsthespir.it/api
      var x = data;
      quote = x.quote; //de quote element van https://thatsthespir.it/api
      $("#quotes").html(quote); //ga naar div en laat de tekst (html) zien, dus hier is dat quote
    },
    error: function () {
      alert("not ok");
    }

        })

                  }
$("#button").click(jquery);
