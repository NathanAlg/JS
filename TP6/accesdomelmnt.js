function main(){
    console.log("---------------------------------------");
    let titre = document.getElementById("titre");
    alert(titre.innerHTML)
    console.log(titre.innerHTML);
    let bande_annonce = document.querySelector('a');
    //let contenu = document.getElements("body");
    console.log(bande_annonce.innerHTML);

    let gone = document.querySelector('.b');
    console.log(gone);
    let paragraphe = document.getElementsByTagName('p').length;
    let images = document.getElementsByTagName('img').length;
    console.log("Notre page contient",paragraphe, "et", images);

    let synopsis = document.getElementsByClassName('synopsis').length;
    console.log("Notre page contient %d synopsis",synopsis);

    console.log("-----------------------------------------------------------")
    let synopsisText = document.querySelectorAll('.synopsis');
    for(let i = 0; i< synopsisText.length; i++){
        if(i == 1){
        console.log(synopsisText[i].innerHTML);
        }
        let newPara = document.createElement('p');
        newPara.id = 'nouveau';
        //let texteInsert = document.title;
        let texte = document.createTextNode('texteInsert');
        newPara.appendChild(texte);
        body.appendChild(newPara);
    }
    }
    
}


main();