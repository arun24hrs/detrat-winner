
const getProducts = async() => {
    try {
        let response = await fetch(`https://fakestoreapi.com/products/`);
        response = await response.json();
        return(response);
    } catch (error) {
        console.log(error)
    }
}

export default getProducts;