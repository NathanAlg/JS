let time;
let time2;
let ms = 0;
let s = 0;
let m= 0;
let= 0;

function Chronometre() {
    
    ms+=1;
    if(ms == 10){
        ms=1;
        s+=1;
    }
    if(s == 60){
        s = 0;
        m+= 1;
    }
    if(m == 60){
        m = 0;
        h+=1;
    }
    if(s>= 58 || m>= 1 || h>= 1){
        goodSmiley();
    
    }
    console.log(h,m,s,ms);
}

function get2DContext(id){
	let canvas = document.getElementById(id);
	let context = canvas.getContext("2d");
	return context;
}
function Play() {
    time = setInterval(Chronometre, 100);
    time2 = setInterval(create, 100);
    
}

function goodSmiley(){
    // dessin après chaque 30 secondes
    let context = get2DContext("canvas");

    context.beginPath();
    context.fillStyle = "white";
    context.lineWidth = 1;
    context.rect(10,15,190,190);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.fillStyle = "yellow";
    context.lineWidth = 3;
    context.arc(100, 100, 75, 0, Math.PI*2);
    context.closePath();
    context.fill();
    context.stroke();
    

    context.beginPath();
    context.lineWidth = 3;
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.arc(135, 70, 5, 0, Math.PI*2);
    context.closePath();
    context.fill();
    context.stroke();
    

    context.beginPath();
    context.lineWidth = 3;
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.arc(65, 70, 5, 0, Math.PI*2);
    context.closePath();
    context.fill();
    context.stroke();
    

    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 20;
    context.arc(99, 120, 50, 0, Math.PI);
    context.closePath();
    context.stroke();

    context.beginPath();
    context.textBaselin = "middle";
    // context.textAlign = "center";
    context.font = "20px sans serif";
    context.fillText("Hello Canvas!", 45, 200);
    context.closePath();
    

}

function create(){
    let b = document.getElementById("nouveau");
    b.innerHTML = hour();

}



function displayDateTime(){
    const event = new Date();
    const option = {weekday: 'long',month: 'long', year: 'numeric', day: 'numeric'};

    //console.log("Nous sommes le "+event.toLocaleDateString(undefined, option));
    let date = event.toLocaleDateString(undefined, option);
    return date;
}

function dispDecrementSeconds(){


}

function hour(node){
//     let time = new Date();
//    time.toLocaleTimeString(undefined);
//    node.repalceChild()
//    console.log(setTimeout(time, 1000))

const event = new Date();

//console.log("Nous sommes le "+event.toLocaleDateString(undefined, option));
let hour = event.toLocaleTimeString(undefined);
return hour;
}


function main(){

    let para1 = document.createElement('p');
    let hello =("Nous sommes le "+displayDateTime())
    let insert = document.createTextNode(hello);
    para1.appendChild(insert);
    document.body.insertBefore(para1, canvas);


    let para2 = document.createElement('p');
    para2.id = "nouveau";
    let hello2 =("Nous sommes le "+hour())
    let insert2 = document.createTextNode(hello2);
    para2.appendChild(insert2);
    document.body.insertBefore(para2, canvas);
    
    ms = 0;
    s = 0;
    m= 0;
    h= 0;
    Play();
    
    // console.log("Nous sommes le "+displayDateTime());
    // let para2 = document.createElement('p');
    // let bonjour =(hour())
    // let insert = document.createTextNode(hello);
    // para1.appendChild(insert);
    // document.body.insertBefore(para1, canvas);
    
    // setInterval(hour(para2), 1000);
    
    //console.log(cercle(can, 100, 100, 75, 124, 3, 123, 0, 2*(Math.PI)));



}

main();