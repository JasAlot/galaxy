// start slider block
// variables
var n = 1;

var sliderElements = document.getElementsByClassName("sliderItem");

var wrapper = document.getElementById("sliderWrapper");

var widthSlide = 100;

var prev = document.getElementById("arrowLeft") ;

var next = document.getElementById("arrowRight");

// main slider function

function sliding(index){
    index = n;
    if (index < 1 || index == sliderElements.length || index > sliderElements.length){
        n = 1;
        widthSlide = 0;
        wrapper.style.transform = `translateX(-${widthSlide}vw)`;
        widthSlide+=100;
    }
    else {
        wrapper.style.transform = `translateX(-${widthSlide}vw)`;
        widthSlide+=100;
        n += 1;
    }
    setTimeout(sliding, 20000, n);
} 

setTimeout(sliding,20000, n);



// prev slide function
prev.addEventListener("click", function slidingPrev(index){
    index = n;
    if (index < 1 || index == 1){
        n = 3;
        widthSlide = 200;
        wrapper.style.transform = `translateX(-${widthSlide}vw)`;
        widthSlide -= 100;
    }
    else  {
        widthSlide = n == 3 ? 100 : 0;
        wrapper.style.transform = `translateX(-${widthSlide}vw)`;
        n -= 1;
    }
    

} );

// next slide function
next.addEventListener("click", function slidingNext(index){
    index = n;
    if (index < 1 || index == sliderElements.length || index > sliderElements.length){
        n = 1;
        widthSlide = 0;
        wrapper.style.transform = `translateX(-${widthSlide}vw)`;
        widthSlide+=100;
    }
    else {
        widthSlide = n == 1 ? 100 : 200;
        n += 1;
        wrapper.style.transform = `translateX(-${widthSlide}vw)`;
        widthSlide+=100;
    }
    
} );


//end slider block



// on scroll up / scroll down

//Varriables

    var offset = document.getElementById("content");
    var staticOffsetInPx = getComputedStyle(offset).height;
    var staticOffset =+ staticOffsetInPx.match(/\d+\.?\d+/g)  // ElementsHeight
    var pageOffset = + window.pageYOffset; // Текущий скролл
    var header = document.getElementById("_header");
    headerTransform = 0;
    
// function


window.onwheel = function (e){

    if(e.deltaY > 0 && pageOffset < staticOffset * 4 && staticOffset == getComputedStyle(document.getElementById("content")).height.match(/\d+\.?\d+/g)){
        pageOffset += staticOffset; 
        document.body.style.transform = `translateY(-${pageOffset}px)`;
        headerTransform+=100;
        this.header.style.transform = `translateY(${headerTransform}vh)`;
    }
    
    else if(staticOffset != getComputedStyle(document.getElementById("content")).height.match(/\d+\.?\d+/g)){
        document.body.style.transform = `translateY(0px)`;
        document.body.style.overflow = `visible`;
        
    }

    else if(e.deltaY < 0 && pageOffset>=staticOffset && staticOffset == getComputedStyle(document.getElementById("content")).height.match(/\d+\.?\d+/g)) {
        pageOffset-=staticOffset;
        document.body.style.transform = `translateY(-${pageOffset}px)`;
        if(headerTransform>0) {headerTransform-=100;
            this.header.style.transform = `translateY(${headerTransform}vh)`;
        }
    }
    
    else if(pageOffset < staticOffset){
        pageOffset = staticOffset;
        
    }
    
}

// on touch move 

window.onmousemove = function (e){

    if(e.deltaY> 0 && pageOffset < staticOffset * 4 && staticOffset == getComputedStyle(document.getElementById("content")).height.match(/\d+\.?\d+/g)){
        pageOffset += staticOffset; 
        document.body.style.transform = `translateY(-${pageOffset}px)`;
        headerTransform+=100;
        this.header.style.transform = `translateY(${headerTransform}vh)`;
    }
    
    else if(staticOffset != getComputedStyle(document.getElementById("content")).height.match(/\d+\.?\d+/g)){
        document.body.style.transform = `translateY(0px)`;
        document.body.style.overflow = `visible`;
        
    }

    else if(e.deltaY < 0 && pageOffset>=staticOffset && staticOffset == getComputedStyle(document.getElementById("content")).height.match(/\d+\.?\d+/g)) {
        pageOffset-=staticOffset;
        document.body.style.transform = `translateY(-${pageOffset}px)`;
        if(headerTransform>0) {headerTransform-=100;
            this.header.style.transform = `translateY(${headerTransform}vh)`;
        }
    }
    
    else if(pageOffset < staticOffset){
        pageOffset = staticOffset;
        
    }
    
}



// Button call onclick func

var butt = document.getElementById("buttonCall");

function buttonClick(e){
    //e.preventDefault();
        /*butt.innerHTML = ("Мы вам перезвоним, спасибо!");
        butt.style.backgroundColor = "rgba(26, 170, 57, 0.6)";*/
    
}

butt.addEventListener("click", buttonClick);


// menu nav

var btnArray = document.getElementsByClassName("menuTab");

class btns{
    constructor(arr){
        this.btns = arr;
    }
    trans(){
        document.body.style.transform = `translateY(-${staticOffset*this.num}px)`;
    }
}

const btnsEx = new btns(btnArray);

class menuBtns extends btns{
    constructor(num){
        super();
        this.num = num;
        this.but = btnsEx.btns[num];
    }
}

const mainButtonFunc = new menuBtns(0);
const historyButtonFunc = new menuBtns(1);
const thirdButtonFunc = new menuBtns(2);
const fourtButtonFunc = new menuBtns(3);
const contactsButtonFunc = new menuBtns(4);

btnArray[0].addEventListener("click",function(){
    mainButtonFunc.trans();
    pageOffset = staticOffset * mainButtonFunc.num;
    header.style.transform = `translateY(${mainButtonFunc.num * 100}vh)`
    headerTransform = 100 * mainButtonFunc.num;
});

btnArray[1].addEventListener("click",function(){
    historyButtonFunc.trans();
    pageOffset = staticOffset * historyButtonFunc.num;
    header.style.transform = `translateY(${historyButtonFunc.num * 100}vh)`
    headerTransform = 100 * historyButtonFunc.num;
});

btnArray[2].addEventListener("click",function(){
    thirdButtonFunc.trans();
    pageOffset = staticOffset * thirdButtonFunc.num;
    header.style.transform = `translateY(${thirdButtonFunc.num * 100}vh)`
    headerTransform = 100 * thirdButtonFunc.num;
});

btnArray[3].addEventListener("click",function(){
    fourtButtonFunc.trans();
    pageOffset = staticOffset * fourtButtonFunc.num;
    header.style.transform = `translateY(${fourtButtonFunc.num * 100}vh)`
    headerTransform = 100 * fourtButtonFunc.num;
});

btnArray[4].addEventListener("click",function(){
    contactsButtonFunc.trans();
    pageOffset = staticOffset * contactsButtonFunc.num;
    header.style.transform = `translateY(${contactsButtonFunc.num * 100}vh)`
    headerTransform = 100 * contactsButtonFunc.num;
});

// ==========
// ==========