const title = document.getElementById("title-text");

const subtitle = document.getElementById("subtitle-text");



const firstText = "Master the ";

const mypText = "MYP.";

const subtitleText =
"Achieve Your Academic Goals.";



let firstIndex = 0;



function typeFirstPart(){


    if(firstIndex < firstText.length){


        title.innerHTML =

        `<span class="white-text">

        ${firstText.substring(0,firstIndex)}

        </span>`;


        firstIndex++;


        setTimeout(typeFirstPart,80);


    }

    else{


        typeMYP();


    }

}




let mypIndex=0;



function typeMYP(){


    if(mypIndex < mypText.length){


        title.innerHTML =


        `<span class="white-text">

        ${firstText}

        </span>


        <span class="myp-color">

        ${mypText.substring(0,mypIndex)}

        </span>`;



        mypIndex++;


        setTimeout(typeMYP,100);


    }


    else{


        setTimeout(typeSubtitle,300);


    }


}





let subtitleIndex=0;



function typeSubtitle(){


    if(subtitleIndex < subtitleText.length){


        subtitle.innerHTML =

        subtitleText.substring(0,subtitleIndex);



        subtitleIndex++;


        setTimeout(typeSubtitle,70);


    }


}



typeFirstPart();






// CONFETTI + REDIRECT


const button =

document.getElementById("unlock-button");



let alreadyClicked=false;



button.addEventListener("click",()=>{


    if(alreadyClicked)

    return;


    alreadyClicked=true;


    createConfetti();



    setTimeout(()=>{


        window.location.href=

        "https://your-link.com";


    },500);



});







function createConfetti(){


    const colors=[

    "#FF4D6D",

    "#FFD23F",

    "#39D6C0",

    "#8B5CF6"

    ];



    for(let i=0;i<80;i++){


        const particle=

        document.createElement("span");



        particle.className="confetti";



        particle.style.left="50%";

        particle.style.top="50%";



        particle.style.background=

        colors[Math.floor(Math.random()*colors.length)];



        document.body.appendChild(particle);



        const x=

        (Math.random()-0.5)*700;


        const y=

        (Math.random()-0.5)*700;



        particle.animate([


            {

                transform:"translate(0,0)",

                opacity:1

            },


            {

                transform:

                `translate(${x}px,${y}px)`,

                opacity:0

            }


        ],{


            duration:500,

            easing:"ease-out"


        });



        setTimeout(()=>{


            particle.remove();


        },500);



    }


}
