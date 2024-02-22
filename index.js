const btns=document.querySelectorAll('.btn');
const cards=document.querySelectorAll('.cards');
for(const btn of btns){
    btn.addEventListener('click',function(){
 const name=(event.target.parentNode.childNodes[1].innerText)
 const price=event.target.parentNode.childNodes[3].innerText
 console.log(price)
    })
}