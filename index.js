const btns=document.querySelectorAll('.btn');
const cards=document.querySelectorAll('.cards');
for(const btn of btns){
    btn.addEventListener('click',function(){
 const name=(event.target.parentNode.childNodes[1].innerText)
 const price=event.target.parentNode.childNodes[3].innerText
 const catagory=event.target.parentNode.childNodes[5]
 console.log(catagory)
 console.log(price)

 const nameDIv2=document.getElementById('nameDiv');
 const priceDIv2=document.getElementById('priceDiv');
 const catagoryDIv2=document.getElementById('catagoryDiv');
// const p=document.createElement('p');
// p.innerText=name;
// nameDIv2.appendChild(p);
creatElement(nameDIv2,name)
creatElement(priceDIv2,price)
creatElement(catagoryDIv2,catagory)
    })
}


function creatElement(div,value){
    const p=document.createElement('p');
    p.innerText=value;
    div.appendChild(p);
}