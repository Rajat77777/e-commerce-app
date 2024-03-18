export function fetchAllProducts() {
  return new Promise(async(resolve) =>{
    //TODO: wel will not hard-code server URL here
  const response= await fetch('http://localhost:8080/products');
  const data = await response.json();
  resolve({data});
  }
  );
}
export function fetchProductsByFilters(filter) {
  let queryString='';
  for(let key in filter){
    queryString+=`${key}=${filter[key]}&`
  }
  return new Promise(async(resolve) =>{
    //TODO: wel will not hard-code server URL here
  const response= await fetch('http://localhost:8080/products?');
  const data = await response.json();
  resolve({data});
  }
  );
}
