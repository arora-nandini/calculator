let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenval='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttontext=e.target.innerText;
        console.log('button text is',buttontext);
        if (buttontext=='X'){
            buttontext='*';
        screen.value +=buttontext;
        screen.value=screenval;
        
        }
        else if(buttontext=='C'){
            screen.value=" ";
            screen.value=screenval;
}

        else if(buttontext=='='){
screen.value=eval(screenval);
        }
        else {
            screen.value +=buttontext;
            screen.value=screenval;
        }
   })
}