export default async function ProductIdList({params}){
    const response = await fetch(`https://dummyjson.com/products/`);
    const request = await response.json();
    const products = request.products
    console.log(products);
    return(
        <></>
    )
}