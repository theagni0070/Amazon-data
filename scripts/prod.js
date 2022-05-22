let data = JSON.parse(localStorage.getItem("Products")) || [];

function display(data){
    document.getElementById("counter").innerHTML=null;
    data.forEach(function(elem){
    var div = document.createElement("div")
    var image = document.createElement("img")
    image.setAttribute("src",elem.image)
    var name = document.createElement("h3")
    name.innerText = elem.name
    var category = document.createElement("h4")
    category.innerText = elem.category
    var price = document.createElement("h3")
    price.innerText = elem.price
    var gender = document.createElement("p")
    gender.innerText = elem.gender
    var sold = document.createElement("p")
    sold.innerText = "Stock Avail  =>  "+elem.sold
    var btn1 = document.createElement("button")
    btn1.innerText = "Remove"
    btn1.addEventListener("click",function(){
              REMOVE(elem)
    })
    var btn2 = document.createElement("button")
    btn2.innerText = "Sold"
    btn2.addEventListener("click",function(){
        Change(elem)
    })
    div.append(image,name,category,price,gender,sold,btn1,btn2);
    counter.append(div);  
})
}

display(data);

function REMOVE(elem){
    data = data.filter(function(element){
        return elem!==element
    })
    localStorage.setItem("Products",JSON.stringify(data))
    display(data);
}
function Change(elem) {
   data = data.filter(function(element){
       if (elem==element){
           if (elem.sold=="true"){
           elem.sold = "false"
           }
           if(elem.sold=="false"){
               elem.sold="true"
           }
       }
   })
}
