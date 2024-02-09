import products from './data.js';




const productList = document.getElementById("card");

products.map(product=>{
    const card = document.createElement("div");
    card.classList.add("row");
    card.classList.add("row-cols-1");
    card.classList.add("row-cols-xs-2");
    card.classList.add("row-cols-sm-2");
    card.classList.add("row-cols-lg-4");
    card.classList.add("g-3");
    card.innerHTML=`
    <div class="col hp">
            <div class="card h-100 shadow-sm">
              <a target="_blank" href="https://amzn.to/3qeS1Fe">
                <img src="${product.image.url}" class="card-img-top"  alt=${product.name}" />
              </a>
      
              <div class="label-top shadow-sm">
                <a class="text-white" target="_blank" href="https://amzn.to/3qeS1Fe">${product.name}</a>
              </div>
              <div class="card-body">
                <div class="clearfix mb-3">
                   <span class="float-start badge rounded-pill bg-success">${product.price}</span>
                  
                  ${product.details.specs.map(product=> {
                    return `<span class="float-start badge rounded-pill bg-success">${product.specName}:${product.specValue}</span>`
                  })}
      
                  <span class="float-end"><a href="#" class="small text-muted text-uppercase aff-link">reviews</a></span>
                </div>
                <h5 class="card-title">
                  <a target="_blank" href="#">${product.details.description}</a>
                </h5>
      
                <div class="d-grid gap-2 my-4">
      
                  <a href="#" class="btn btn-warning bold-btn">add to cart</a>
      
                </div>
                <div class="clearfix mb-1">
      
                  <span class="float-start"><a href="#"><i class="fas fa-question-circle"></i></a></span>
      
                  <span class="float-end">
                    <i class="far fa-heart" style="cursor: pointer"></i>
      
                  </span>
                </div>
              </div>
            </div>
          </div>
    `
    productList.appendChild(card)
} )

console.log(products)