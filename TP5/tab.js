function abss(numbers){
    let tab = numbers.map(function(number){
        return Math.abs(number);
    });
    return tab;
}

function evenOnly(numbers){
    // if(numbers % 2 == 0){
    //     return numbers
    // }
    let filteredNumbers = numbers.filter(function(number){
        return number%2 == 0 ;
    }
    );
   // console.log(filteredNumbers);
   return filteredNumbers;
    
}

function sum(numbers){
    let initial = 0;
    let sumNumber = numbers.reduce(function (min, number){
        return number+min;},
        initial
    );

    return sumNumber;
}

function flatten2D(numbers){
    let tab = [];
    // tab = numbers.reduce((val, number) => val.concat(number), tab);

    tab = numbers.reduce(function(val, number){
        return val.concat((number),tab);}
    );
    return tab;
}

function removeDuplicates(values){
    // let newArray = Array.from(new Set(values));
    // return newArray;
   
     let NoDoublon = values.filter(function (value){
            return 
         });
    
    return NoDoublon;
}


function main(){
    console.log("*****Exercice1*****")
    let numbers = [-42, 3, 0, -1, 100];
    console.log(abss(numbers)); // => [42, 3, 0, 1, 100]
    console.log(numbers);
        
    console.log("\n*****Exercice2*****")
    console.log( evenOnly([0,1,2,3,4])); // => [0, 2, 4]

    console.log("\n*****Exercice3*****")
    console.log( sum([]) ); // => 0
    console.log( sum([42,404,1337]) ); // => 1783


    console.log("\n*****Exercice4*****")
    console.log( flatten2D([[1,2], [3,4], [5,6]])); // [1, 2, 3, 4, 5, 6]
    console.log( flatten2D([[1,2], [3,4,5], [6]])); // [1, 2, 3, 4, 5, 6]
    
    console.log("\n*****[Exercice5]*****")
    console.log( removeDuplicates([]) );                  // => []
    console.log( removeDuplicates([1,2,3,4]) );           // => [1,2,3,4]
    console.log( removeDuplicates([1,2,3,2,4,3,1,1]) );   // => [1,2,3,4]
}

main();