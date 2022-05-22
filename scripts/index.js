let arr = JSON.parse(localStorage.getItem("Products")) || [];
    
document.querySelector("#form").addEventListener("submit", onclicked);
function onclicked(){
    event.preventDefault();
    let name = form.name.value;
    let category = form.category.value;
    let image = form.image.value;
    let price = form.price.value;
    let gender = form.gender.value;
    let sold = form.Sold.value;

    let p = new Products(name,category,image,price,gender,sold);

    arr.push(p);

    localStorage.setItem("Products",JSON.stringify(arr));
    console.log(name,category,image,price,gender,sold);
    console.log(arr);
}


 function Products(n,c,i,p,g,s){
    this.name = n;
    this.category = c;
    this.image = i;
    this.price = p;
    this.gender = g;
    this.sold = s;
}

console.log(arr);

// function Submitproducts(event){
//     event.preventDefault();
//     let form = document.getElementById("products")
//     let name = form.name.value;
//     let brand = form.brand.value;
//     let price = form.price.value;

//     let p = new Products(name,brand,price)
//     arr.push(p);
//     console.log(arr);
// }