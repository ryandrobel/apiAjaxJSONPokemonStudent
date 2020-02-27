pokemon.forEach(p => {
  console.log(p.name);
});

var output="";

for(var one_pokemon in pokemon) {
  console.log(pokemon[one_pokemon].name)
  var name = pokemon[one_pokemon].name;

  output += "<h1>"+name+"</h1>"

  console.log(output);
}


$("section").html(output);

console.log(pokemon[0])

//Image
$("#bulb").attr("src", pokemon[0].image);
$("#ivy").attr("src", pokemon[1].image);
$("#ven").attr("src", pokemon[2].image);
$("#charma").attr("src", pokemon[3].image);
$("#charme").attr("src", pokemon[4].image);

//name
$("#name").text(pokemon[0].name);
$("#name2").text(pokemon[1].name);
$("#name3").text(pokemon[2].name);
$("#name4").text(pokemon[3].name);
$("#name5").text(pokemon[4].name);

//id
$("#id1").text(pokemon[0].id);
$("#id2").text(pokemon[1].id);
$("#id3").text(pokemon[2].id);
$("#id4").text(pokemon[3].id);
$("#id5").text(pokemon[4].id);

//weight
$("#weight1").text(pokemon[0].weight);
$("#weight2").text(pokemon[1].weight);
$("#weight3").text(pokemon[2].weight);
$("#weight4").text(pokemon[3].weight);
$("#weight5").text(pokemon[4].weight);

//moves
moves1output = ""
for(var i=0;i<pokemon[0].moves.length;i++){
  moves1output += "<li>"+pokemon[0].moves[i]+"</li>"
}

$("#moves1").html(moves1output);

moves2output = ""
for(var i=0;i<pokemon[1].moves.length;i++){
  moves2output += "<li>"+pokemon[1].moves[i]+"</li>"
}

$("#moves2").html(moves2output);

moves3output = ""
for(var i=0;i<pokemon[2].moves.length;i++){
  moves3output += "<li>"+pokemon[2].moves[i]+"</li>"
}

$("#moves3").html(moves3output);

moves4output = ""
for(var i=0;i<pokemon[3].moves.length;i++){
  moves4output += "<li>"+pokemon[3].moves[i]+"</li>"
}

$("#moves3").html(moves4output);

moves4output = ""
for(var i=0;i<pokemon[3].moves.length;i++){
  moves4output += "<li>"+pokemon[3].moves[i]+"</li>"
}

$("#moves4").html(moves4output);

moves5output = ""
for(var i=0;i<pokemon[4].moves.length;i++){
  moves5output += "<li>"+pokemon[4].moves[i]+"</li>"
}

$("#moves5").html(moves5output);


