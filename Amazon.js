var images=['./assets/header1.jpg','./assets/header2.jpg','./assets/header3.jpg','./assets/header4.jpg','./assets/header5.jpg','./assets/header6.jpg'];
var i=0;
function prevImage(){
var img=document.getElementById("imgs");
if(i>0){
    img.src=images[i];
    i--
}
else{
i=images.length-1;
img.src=images[i];
}
}
function nextImage(){
    var img=document.getElementById("imgs");
    if(i<images.length-1){
        img.src=images[i];
        i++;
    }
    else{
        i=0;
    img.src=images[i];
    }
    }
    const scrollContainer=document.querySelectorAll('.products');
    for(const item of scrollContainer){
        item.addEventListener('wheel',(evt)=>{
            evt.preventDefault();
            item.scrollLeft += evt.deltaY;
        });
    }
