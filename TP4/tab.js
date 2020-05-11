function sum(Numbers){
    let result=0; 
    for(let i=0; i<Numbers.length; i++){
        result=result+Numbers[i];
    }
    return result; 
}
function sum2(Numbers){
    for(let somme of Numbers){
        somme=somme;
    }
}

/*function longestWord(words){
    let taille=0;
    let mot;
    for(let i=0; i<words.length; i++){
        if(words[i].length >taille){
            taille=words[i].length;
            mot=words.slice(i,i);
        }
    }
    return mot;
}*/
function longestWord(words){
    let mot;
    let tailleMax=0;
    for(let i=0; i<words.length; i++){
            if(words[i].length>tailleMax){
                tailleMax=words[i].length;
                mot=words[i];
            }
        }
    return mot;
}

function range(min, max, step){
    let tab=[];
    tab.push(min);
    for(let i=1; tab[i-1]<max; i++){
        if(tab[i-1]+step<=max){
            tab.push(tab[i-1]+step);
        }
    }
    return tab;
}

function nbOccurences(wordList, word){
    let number=0;
    let tab=wordList.split(" ");
    for(let i=0; i<tab.length; i++){
        if(tab[i] == word){
            number++;
        }
    }
    return number;
}

function flatten2D(array){
    let tab=[];
    for(let i=0; i<array.length; i++){
        for(let j=0; j<array[i].length; j++){
            tab.push(array[i][j]);
        }
    }
    return tab;



}

function mysterie(Names,ajNames){
    // for(let i=0; i<Names.length; i++){
    //     console.log(Names[i]);// ---------------------Afficher les noms du tableau
    // }
    Names.pop();
    Names.push(ajNames);
    return Names;
}

function tableMul(){
    let n=0;
    let result = [];
    for(let i= 0; i<=10;i++){
        for(let j=0; j<=10; j++){
            result[n] = i*j;
            n++;
            //console.log(result[i]);
        }
    }
     return result;
}

function Cesar(Message){
    let tab =[];
    let i=0
    for(let letter of Message){
        tab.push(letter);
    }
    let tab1 =[]
    for(i =0; i<tab.length; i++){
        if (tab[i].charCodeAt()>=97 && tab[i].charCodeAt()<=122){
            tab1[i] =tab[i].charCodeAt();
        }
    }
        for(let j = 0; j<tab1.length; j++){
            if(tab1[j] !=124 && tab1[j]>96 && tab1[j]< 120){
                tab1[j] =(tab1[j]+3);
            }
            else if(tab1[j] == 120){
                tab1[j] = 97;
            }

            else if(tab1[j] == 121){
                tab1[j] = 98;
            }

            else if(tab1[j] == 122){
                tab1[j] = 99;
            }  
        } 
        for(let k = 0; k<tab1.length; k++){
            tab[k] = String.fromCharCode(tab1[k]);
        }
        let Code = tab.join('');
        return Code;
    }  
    

    // for(let i =0; i<tab.length;i++){
    //     if(tab[i].charCodeAt() !=124 && tab[i].charCodeAt()>=97 && tab[i].charCodeAt()<=119){
    //         tab[i]=tab[i].charCodeAt(tab)+3;
    //     }
    //     if(tab[i].charCodeAt() == 120){
    //         tab[i]='a';
    //     }
    //     if(tab[i].charCodeAt() == 121){
    //         tab[i]= 'b';
    //     }
    //     if(tab[i].charCodeAt() == 122){
    //         tab[i]= 'c';
    //     }
    // }
//}
    