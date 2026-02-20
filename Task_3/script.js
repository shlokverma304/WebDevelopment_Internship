// IMAGE CAROUSEL

let images = [
    "https://picsum.photos/id/1015/400/250",
    "https://picsum.photos/id/1016/400/250",
    "https://picsum.photos/id/1018/400/250"
];

let index = 0;

function nextImage(){
    index++;
    if(index >= images.length){
        index = 0;
    }
    document.getElementById("carouselImage").src = images[index];
}

function prevImage(){
    index--;
    if(index < 0){
        index = images.length - 1;
    }
    document.getElementById("carouselImage").src = images[index];
}


// FETCH API (JOKE)

async function getJoke(){
    let response = await fetch("https://official-joke-api.appspot.com/random_joke");
    let data = await response.json();

    document.getElementById("joke").innerText =
        data.setup + " - " + data.punchline;
}