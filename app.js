function search(){
    const searchbox = document.querySelector('#search-product').value.toUpperCase();
    const product = document.querySelectorAll(".product-item");

    for(var i=0; i < product.length ; i++){
        let match = product[i].getElementsByTagName('h2')[0];
        let v = match.textContent || match.innerText;
        if (v.toUpperCase().indexOf(searchbox) > -1){
            product[i].style.display = "";
        }else{
            product[i].style.display='none';
        }

    }
}
