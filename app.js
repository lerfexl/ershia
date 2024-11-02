let filimoTabAction = "#serial";
console.log(filimoTabAction);
let filimoSlide =[...document.querySelectorAll(filimoTabAction+" .filimo-tab__content > a")]
let filimoSlideContent =[...document.querySelectorAll(filimoTabAction+" .filimo-tab__content-detail > .tab-pane")]
const filimoTab = document.querySelector(".filimo-tab");
filimoTab.addEventListener('click',(e)=>{
console.log(filimoSlide,filimoSlideContent);
})

const mainFilimoTab =[...document.querySelectorAll(".main-filimo-tab > div")];
const mainFilimoDataTarget =[...document.querySelectorAll(".filimo-tab__title > div  span")];

mainFilimoDataTarget.forEach((item)=>{
    
    item.addEventListener('click',(e)=>{
        filimoTabAction = e.target.getAttribute("data-bs-target");
        console.log(e.target.getAttribute("data-bs-target"));
        filimoSlide =[...document.querySelectorAll(filimoTabAction+" .filimo-tab__content > a")]
        filimoSlideContent =[...document.querySelectorAll(filimoTabAction+" .filimo-tab__content-detail > .tab-pane")]
        counter=0;
    })
})

let counter = 0;

setInterval(changeActive,3000)



function changeActive(){
    for(item of filimoSlide){
        item.classList.remove("active");
        
        item.children[0].classList.remove("imgHover");
    }
    filimoSlide[counter].classList.add("active");
    filimoSlide[counter].children[0].classList.add("imgHover");


    for(item of filimoSlideContent){
        item.classList.remove("active","show");

        
    }
    filimoSlideContent[counter].classList.add("active");
    filimoSlideContent[counter].classList.add("show");

    if(counter < filimoSlide.length -1){
        
        counter++;
    }else{
        counter = 0;
    }

}
