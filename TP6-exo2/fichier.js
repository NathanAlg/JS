function main(){
    let newPara = document.createElement('p');
    newPara.id = 'nouveau';
    //let texteInsert = document.title;
    let texte = document.createTextNode('texteInsert');
    newPara.appendChild(texte);
    document.body.appendChild(newPara);




}

main();