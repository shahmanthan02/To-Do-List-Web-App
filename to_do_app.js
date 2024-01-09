let title = document.getElementById('title_h')
let description = document.getElementById('description')
let text_title= document.getElementById('title_span')
let text_des= document.getElementById('title_span')


function Add() {
    if(title.value  == '' && description.value == ''){
        alert('Please Enter Title And Description')
    }
    else{
        let newEle= document.createElement('ul');
        let newEle1= document.createElement('ul');
        newEle1.setAttribute("id", "des");
        newEle.innerHTML = `<span style="color:black;">Task:</span>${title.value /*+  '          ' + description.value*/} <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>`;
        newEle1.innerHTML = `<span style="color:black;">Note:</span>${description.value} `;
        text_title.appendChild(newEle);
        text_des.appendChild(newEle1);
        title.value='';
        description.value='';
        let del_t=newEle.querySelector('svg').addEventListener('click',remove);
        let del_d=newEle1.querySelector('svg').addEventListener('click',remove);
        del_t=del_d
        function remove(){
            newEle.remove();
            newEle1.remove();
        }
    }
    
}