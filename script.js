var closebtn =document.getElementById('close')
var mynav =document.getElementById('nav')
var menu=document.getElementById('menu')
var blur = document.getElementById('blur')
closebtn.onclick= ()=>{
    mynav.style.right="-350px"
    blur.style.display='none'

}
menu.onclick= ()=>{
    
    mynav.style.right="0"
    blur.style.display='initial'
}
