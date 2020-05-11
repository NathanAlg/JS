 function sumTest(){
   console.log("*****Exercice1*****")
    console.log( sum([]) ); // => 0
    console.log( sum([42,404,1337]) ); // => 1783
 }
 
 function longestWordsTest(){
   console.log("\n*****Exercice2*****")
    console.log( longestWord(["lot", "of", "words", "of", "different", "sizes"]) ); // => different 
 }
 
 
 function rangeTest(){
   console.log("\n*****Exercice3*****")
    console.log( range(3, 8, 1) ); // => [3, 4, 5, 6, 7, 8]
    console.log( range(40, 90, 20) ); // => [40, 60, 80]
}

function nbOccurencesTest(){
   console.log("\n*****Exercice4*****")
    let text = "bar qux baz foo bar foo qux foo";
    console.log(nbOccurences(text, "foo")); // => 3
    console.log(nbOccurences(text, "quux")); // => 0
    console.log(nbOccurences(text, "baz")); // => 1
}

function flatten2DTest(){
   console.log("\n*****Exercice5*****")
   console.log( flatten2D([[1,2], [3,4], [5,6]])); // [1, 2, 3, 4, 5, 6]
   console.log( flatten2D([[1,2], [3,4,5], [6]])); // [1, 2, 3, 4, 5, 6]

 }
function mysterieTest(){
   console.log("\n*****Exercice6*****")
   console.log(["Marie","Joseph","Julien"]);
   console.log(mysterie(["Marie","Joseph","Julien"],"Nathan"));
}

function tableMultTest(){
   console.log("\n*****Exercice7*****")
   console.log(tableMul());
}

function CesarTest(){
   console.log("\n*****Exercice8*****");
   console.log(Cesar("attaquez asterix"));
}