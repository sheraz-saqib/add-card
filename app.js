// const input = document.getElementById('protuct-quantiy');
// const plusIcon = document.querySelector(".fa-plus");
// const minusIcon = document.querySelector('.fa-minus');
let initial_total = document.getElementById('initial-total');
let final_amt = document.getElementById('final_amt');
// let product_name = document.querySelector('product-name')
let product_list = document.querySelector('.product-list');
let product_list2 = document.querySelector('.product-list2');
let product_value = document.querySelector('product-right')
let sweep_img = document.querySelector('.card-img img')
let add_product_icon = document.querySelector('.fa-plus')
let remove_product_icon = document.querySelector('.fa-minus')

const sweep_img_funtion = () => {
    add_product_icon.addEventListener('click',()=>{
        setTimeout(()=>{
            sweep_img.classList.remove('sweep-reverse-img-animation')
            sweep_img.classList.add('sweep-img-animation')
        }),
        sweep_img.classList.remove('sweep-img-animation')
    },100);


    remove_product_icon.addEventListener('click',()=>{
        setTimeout(()=>{
            sweep_img.classList.remove('sweep-img-animation')
            sweep_img.classList.add('sweep-reverse-img-animation')
        }),
        sweep_img.classList.remove('sweep-reverse-img-animation')
    },100)
    }

sweep_img_funtion()

const increase = (plus,price,product_name) =>{
    const input = document.getElementById(plus);
    let total_price = document.getElementById(price);
let product = document.getElementById(product_name)

if(input.value >= 5){
    input.value= 5
}

else{


    input.value= parseInt( input.value) + 1;
total_price.innerHTML=parseInt(total_price.innerHTML) + 480;
initial_total.innerHTML = parseInt(initial_total.innerHTML) + 480;
final_amt.innerHTML = parseInt(initial_total.innerHTML) ;
// localStorage.setItem('total',final_amt.innerHTML)

// final_amt.innerHTML = localStorage.getItem('total')
// let get = localStorage.getItem('total')
// console.log(get);
// final_amt.innerHTML = get
let create_list = `<div class="product-card">
    <div class="product-left"><span>${product.innerHTML}</span></div>
    <div class="product-right">piece : <span id="shipping">${input.value}</span></div>
    
    </div>`
     if(product.innerHTML.toLowerCase() == 'shoes nike white pich colour'){
    
        product_list.innerHTML = create_list
// console.log('1');
        
       
    }
    else if (product.innerHTML.toLowerCase() == 'headphones' ){
        product_list2.innerHTML= create_list;
        // console.log('2');
    }
    
}

}

const decrease = (minus,price,product_name) =>{
    const input = document.getElementById(minus);
    let product = document.getElementById(product_name)
    let total_price = document.getElementById(price)

if(input.value <= 0){
    input.value= 0
        total_price.innerHTML = "0.00" 
     
}



else{
  
    input.value= parseInt( input.value) - 1;
    total_price.innerHTML=parseInt(total_price.innerHTML)-480;
    initial_total.innerHTML= parseInt(initial_total.innerHTML ) - 480;
    final_amt.innerHTML = parseInt(initial_total.innerHTML) ;
    localStorage.setItem('total',final_amt.innerHTML)
let get = localStorage.getItem('total')
console.log(get);
final_amt.innerHTML = get
let create_list = `<div class="product-card">
    <div class="product-left"><span>${product.innerHTML}</span></div>
    <div class="product-right">piece : <span id="shipping">${input.value}</span></div>
    
    </div>`
     if(product.innerHTML.toLowerCase() == 'shoes nike white pich colour'){
    
        product_list.innerHTML = create_list
// console.log('1');
        
       
    }
    else if (product.innerHTML.toLowerCase() == 'headphones'){
        product_list2.innerHTML= create_list;
        // console.log('2');
    }
    else if(product_value.innerHTML == 0){
        product_list.innerHTML = ''
        product_list2.innerHTML = ''
       }
}

}


    
