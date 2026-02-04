//  let a = document.getElementById("title");

// console.log(a);

// let abcd=document.querySelectorAll("h1");
// console.dir(abcd);

// let h1 = document.querySelector("h1");

// h1.textContent = "Me badhiya hu !"
// h1.innerHTML = "<i>All Good !</i>"
// h1.innerText = "Me badhiya hu !"




// let a=document.querySelector("a");

// a.href="https://www.google.com";



// let img =document.querySelector("img");
// img.setAttribute("src","https://images.unsplash.com/photo-1768595408288-22f8215ba8e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D");

// img.removeAttribute('src');

// let list = document.querySelectorAll("li");

// list.forEach(function (val) {
//    console.log(val.textContent);

// });

// for(let i=0; i<list.length; i++){
//     console.log(list[i].textContent);

// }

// let h1 = document.createElement("h1");

// h1.innerText="Hello guys kaiose ho !";

// document.body.appendChild(h1);

// document.body.removeChild(h1);


// let ul=document.querySelector("ul");
// let li=document.createElement("li");

// li.innerText="New Task";

// ul.prepend(li);


// let img = document.createElement("img");

// img.setAttribute("src","https://tse3.mm.bing.net/th/id/OIP.x4kLtCWrUGSmcmlE0mx6RgHaHa?pid=Api&P=0&h=180");

// img.classList.add("placeholder");

// document.querySelector("div").prepend(img);

// let ul=document.querySelector("ul");
// let li=document.querySelector("li");

// ul.removeChild(li);


// let p=document.querySelectorAll("p");

// p.forEach(function(el){
//     el.style.color="yellow";
// });

// let h1=document.querySelectorAll("h1")
// h1.style.color="red"

// let h1s = document.querySelectorAll("h1");

// h1s.forEach(h1 => {
//   h1.style.color = "red";
//   h1.style.textTransform= "uppercase";
//   h1.style.fontFamily="Segoe UI";
// });

// let p=document.querySelectorAll("p");

// p.forEach(p => {
//     p.style.color="yellow";

// });

// let h1=document.querySelector("h1");

// h1.classList.toggle();


// ---------Events and Event Handling -----------

// let p=document.querySelector("p");

// p.addEventListener("mouseover",function(){
//     console.log("Mouse enterd in the paragraph !");

// })

//  -----------------------Input EventListener -----------

// let inp = document.querySelector("input");

// inp.addEventListener("input", function (evnt) {
//     if (evnt.data !== null) {
//         console.log(evnt.data);
//     }

// })

// let inp=document.querySelector("input");

// inp.addEventListener("input",function(detl){
//     if(detl!==null){
//     //  console.log(`${detl.target.value}`);
//     console.log(detl.target.value);



//     }
// })

// --------------- Change EventListener ------------->>>>>>>

// let branch=document.querySelector("#branch");
// let sel=document.querySelector("select");

// sel.addEventListener("change",function(detl){
//  branch.textContent=`${detl.target.value} Branch Selected `;

// });

// let sel=document.querySelector("select");
// let h1=document.querySelector("#sex");

// sel.addEventListener("change",function(detl){
//     h1.textContent= `you are ${detl.target.value}`;
// });


// --------------------------------keyup , keydown , keypress ---------------

// let h1 = document.querySelector("h1");

// window.addEventListener("keydown", function (detl) {
//     if (detl.key === " ") {
//         h1.textContent = "SPC";

//     }
//     else {
//         h1.textContent = detl.key;
//     }
// })


//  ----------  File Upload Button --------!!

// let btn=document.querySelector("#btn");
// let fileinp=document.querySelector("#fileinp");

// btn.addEventListener("click",function(){
// fileinp.click();
// });

// fileinp.addEventListener("change",function(detl){
//     const file =detl.target.files[0];
//     if(file){
//         btn.textContent=file.name
//     }

// })

// let btn = document.querySelector("#btn")
// let inp = document.querySelector("#inp");

// btn.addEventListener("click", function () {
//     inp.click();
// })

// inp.addEventListener("change",function(detl){
//     const file=detl.target.files[0];
//     if(file){
//         btn.textContent=file.name;
//     }

// })

// let form = document.querySelector("form");
// let input = document.querySelectorAll("input");
// let main = document.querySelector("#main")

// form.addEventListener("submit", function (detl) {
//     detl.preventDefault();

//     let card = document.createElement("div");

//     card.classList.add("card");

//     let profile = document.createElement("div");
//     profile.classList.add("profile");

//     let img = document.createElement("img");
//     img.setAttribute("src", input[0].value);

//     let h2 = document.createElement("h2");
//     h2.textContent = input[1].value;
//     let h5 = document.createElement("h5");
//     h5.textContent = input[2].value;
//     let p = document.createElement("p");
//     p.textContent = input[3].value;

//     profile.appendChild(img);
//     card.appendChild(profile);

//     card.appendChild(h2);
//     card.appendChild(h5)
//     card.appendChild(p);

//     main.appendChild(card)

//     input.forEach(function (inp) {
//         if (inp.type  !== "submit") {
//             inp.value = ""; 
//         }

//     })
// })


// let ab=document.querySelector("#ab");

// ab.addEventListener("mouseover",function(){
//     ab.style.backgroundColor="yellow";
// })
// ab.addEventListener("mouseout",function(){
//     ab.style.backgroundColor="red";
// })


// let ab=document.querySelector("#ab");

// window.addEventListener("mousemove", function(detl){
//     ab.style.top=detl.clientY+"px";
//     ab.style.left=detl.clientX+"px";
// })

// let inp=document.querySelector("#box");

// inp.addEventListener("keyup", function(){
//    console.log("you typed ");
//     console.log(input.value);

// });

//  ------------------------Event Object ------------------!!!!!!!!!!!


// let ab = document.querySelector("#ab");

// ab.addEventListener("click",function(detl){
//     console.log(detl);

// })

//  ------------------------ !!!! Event Object !!!!------------------!!!!!!!!!!!

// let nav=document.querySelector("#nav");

// nav.addEventListener("click",function(){
//     alert("clicked");
// })


// let ul=document.querySelector("ul");

// ul.addEventListener("click",function(dets){
//     dets.target.classList.toggle("lt");
// })


//                                    ---------!!!!!!!!!! EVENT CAPTURING !!!!!!!!!!!---------

// let a = document.querySelector(".a");
// let b = document.querySelector(".b");
// let c = document.querySelector(".c");
// let button = document.querySelector("button");


// button.addEventListener("click", function () {
//     console.log("button clicked ");

// })
// c.addEventListener("click", function () {
//     console.log("c clicked ");

// },true)
// b.addEventListener("click", function () {
//     console.log("b clicked ");

// })

// a.addEventListener("click", function () {
//     console.log("a clicked");

// },true)



//  !!!!!!!!!!!!!!!!!!!!! ------------------ CHARACTER COUNT  !!!!!!!!!!!!!!!----------------

// let inp = document.querySelector("input");
// let span=document.querySelector("span");

// inp.addEventListener("input",function(){
// let left=20-inp.value.length;
// span.textContent=left;
// if(left<0){
//     span.style.color="red";
// }
// else{
//     span.style.color="white";
// }
    
// });




// -------------!!!!!!!! Forms And Form Validation !!!!!!!!--------------

let form=document.querySelector("form");
let nm=document.querySelector("#name");

form.addEventListener("submit",function(dets){
dets.preventDefault();

if(nm.value.length <=2){
    document.querySelector("#hide").style.display="initial"
}
else{
    document.querySelector("#hide").style.display="none"
}
})