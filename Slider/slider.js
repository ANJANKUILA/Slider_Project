const left =document.querySelector(".left");
const right =document.querySelector(".right");
const slider =document.querySelector(".slider");
const array =document.querySelectorAll(".Image");//returns nodeList(array)
const bottom =document.querySelector(".bottom");


let slideNumber=1;
const length=array.length;

  for(let i=0;i<length;i++){
    const div=document.createElement("div");
    div.className="button";
    bottom.appendChild(div);//The appendChild method is used on the element referred
    // to by the bottom variable to add the div element as a child of the bottom 
    //element. This means the new div element will be placed inside the bottom 
    //element in the HTML structure.
  }
  const buttons =document.querySelectorAll(".button");
  buttons[0].style.backgroundColor="white";

  const resetBg=()=>{
    buttons.forEach(button=>{
      button.style.backgroundColor="transparent";
    })
  }

  buttons.forEach((button,i)=>{
    button.addEventListener("click",()=>{
      resetBg();
      slider.style.transform =`translateX(-${i*800}px)`;
      slideNumber=i+1;
      button.style.backgroundColor="white";
      // The i variable is the index of the button that was clicked, 
      //so it corresponds to the button's position in the collection.
      //For example, if you click the first button (i.e., index 0),
      // it will set slider.style.transform to "translateX(0px)". 
      //If you click the second button (i.e., index 1), 
      //it will set slider.style.transform to "translateX(-800px)", and so on.
    })
  })

const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;// translate (move) 
    //the element to the left. slider.style.transform = `translateX(-800px)`;
    //because value is negative.....
    slideNumber++;
  };
  const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
    slideNumber--;
    //slider.style.transform = `translateX(800px)`; 
    // value should be positive to move right
  };
  const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
  };
  const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
    slideNumber = length;
  };
  

  
  right.addEventListener("click", () => {
    slideNumber < length ? nextSlide() : getFirstSlide();
    resetBg();
    buttons[slideNumber-1].style.backgroundColor="white";
    
  });
  
  left.addEventListener("click", () => {
    slideNumber > 1 ? prevSlide() : getLastSlide();
    buttons[slideNumber-1].style.backgroundColor="white";
    
  });

