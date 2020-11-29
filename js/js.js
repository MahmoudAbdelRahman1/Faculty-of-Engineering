
let boxLi = Array.from(document.querySelectorAll('.box_ul ul li'));
let chLi = document.getElementsByClassName('smole');
let fo = document.getElementById('focus');
let plus = 1;
console.log(chLi.childElementCount);

setInterval(function(){  
plus++  
remove();
ifImgs();    
actli();
actBox();
}, 2000);

function ifImgs(){if(plus >= 5){ plus = 1}};

function actli(){
    boxLi[plus-1].classList.add('actli');
    boxLi[plus-1].children[0].classList.add('actblur');
    boxLi[plus-1].children[1].classList.add('acticon');
}

function remove(){
   boxLi.forEach( function(li){
    li.classList.remove('actli');
    li.children[0].classList.remove('actblur');
    li.children[1].classList.remove('acticon');
   })
}

function actBox(){
    if(plus == 1)
    {
        fo.classList.add('focus1');
        fo.classList.remove('focus2');
        fo.classList.remove('focus4');
    }
    else if( plus == 2){
        fo.classList.add('focus2');
        fo.classList.remove('focus3');
        fo.classList.remove('focus4');
    } else if(plus == 3)
    {
        fo.classList.add('focus3');
        fo.classList.remove('focus2');
        fo.classList.remove('focus4');
    }
    else if(plus == 4)
    {
        fo.classList.add('focus4');
        fo.classList.remove('focus2');
        fo.classList.remove('focus3');
    }
};

