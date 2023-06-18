let btn_burguer = document.getElementById('burguer')
let itens_menu = document.getElementsByTagName('ul')[0]
let menu = document.getElementsByTagName('menu')[0]

function tm(){
    if(innerWidth > 524){
        menu.style.display='block'
    }else{
        itens_menu.style.diplay='none'
    }
}

btn_burguer.addEventListener('click',()=>{
    if(menu.style.display == 'none'){
        menu.style.display='block'
    }else{
        menu.style.display='none'
    }
})
