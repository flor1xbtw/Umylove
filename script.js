let mouseX=0;
let mouseY=0;

document.addEventListener("mousemove",e=>{
    mouseX=e.clientX;
    mouseY=e.clientY;
});

/* котик */

let cat;
let catActive=false;
let catX=200;
let catY=200;

function toggleCat(){

    if(catActive){
        cat.remove();
        catActive=false;
        return;
    }

    cat=document.createElement("div");
    cat.className="cat";
    cat.innerHTML="🐱";

    document.body.appendChild(cat);

    catActive=true;

    moveCat();
}

function moveCat(){

    if(!catActive) return;

    catX+=(mouseX-catX)*0.05;
    catY+=(mouseY-catY)*0.05;

    cat.style.left=catX+"px";
    cat.style.top=catY+"px";

    requestAnimationFrame(moveCat);
}

/* зайка */

let bunny;
let bunnyActive=false;
let bunnyX=400;
let bunnyY=300;

function toggleBunny(){

    if(bunnyActive){
        bunny.remove();
        bunnyActive=false;
        return;
    }

    bunny=document.createElement("div");
    bunny.className="bunny";
    bunny.innerHTML="🐰";

    document.body.appendChild(bunny);

    bunnyActive=true;

    moveBunny();
}

function moveBunny(){

    if(!bunnyActive) return;

    bunnyX+=(mouseX-bunnyX)*0.03;
    bunnyY+=(mouseY-bunnyY)*0.03;

    bunny.style.left=bunnyX+"px";
    bunny.style.top=bunnyY+"px";

    requestAnimationFrame(moveBunny);
}

/* сердечки */

let hearts=5;

function addHearts(){

    for(let i=0;i<hearts;i++){

        let h=document.createElement("div");

        h.className="heart";
        h.innerHTML="❤️";

        h.style.left=Math.random()*window.innerWidth+"px";
        h.style.fontSize=(20+Math.random()*20)+"px";
        h.style.animationDuration=(3+Math.random()*3)+"s";

        document.body.appendChild(h);

        setTimeout(()=>h.remove(),6000);

    }

    hearts+=3;

}

/* письмо */

function showSecret(){
    document.getElementById("letterContainer").classList.add("active");
}

function closeLetter(){
    document.getElementById("letterContainer").classList.remove("active");
}

/* карусель */

let index=0;

const track=document.getElementById("track");
const slides=track.children;

function next(){

    index++;

    if(index>=slides.length) index=0;

    track.style.transform="translateX(-"+(index*700)+"px)";

}

function prev(){

    index--;

    if(index<0) index=slides.length-1;

    track.style.transform="translateX(-"+(index*700)+"px)";

}

/* частицы */

const canvas=document.getElementById("bg");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

for(let i=0;i<120;i++){

    particles.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        size:Math.random()*2,
        speed:Math.random()*0.5
    })

}

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{

        p.y-=p.speed;

        if(p.y<0)p.y=canvas.height;

        ctx.beginPath();
        ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
        ctx.fillStyle="rgba(255,255,255,0.3)";
        ctx.fill();

    });

    requestAnimationFrame(animate);

}

animate();