let title = document.getElementById("title");
let desc = document.getElementById("desc");

let i = 0;

let slides = [
    {
        title: "About Drift Lab",
        desc: "Drift Lab is a modern streetwear brand focused on style and self-expression."
    },
    {
        title: "Mission",
        desc: "To create high-quality streetwear that represents individuality and confidence."
    },
    {
        title: "Vision",
        desc: "To become a global streetwear brand inspiring modern fashion culture."
    }
];

function update(){

    title.style.opacity = 0;
    desc.style.opacity = 0;

    setTimeout(() => {

        title.textContent = slides[i].title;
        desc.textContent = slides[i].desc;

        title.style.opacity = 1;
        desc.style.opacity = 1;

        i++;

        if(i >= slides.length){
            i = 0;
        }

    }, 400);
}

update();
setInterval(update, 3000);