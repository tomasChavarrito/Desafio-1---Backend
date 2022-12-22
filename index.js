const ProductManager = require("./manager/productManager");

const manager = new ProductManager("./data/users.json")

const queries = async () => {
    try{
        console.log("Primera consulta")
        let product = await manager.getProduct()
        console.log(product);
        console.log("Nuevo producto")
        const productDemo1 = { 
                        "id": 1,
                        "title":"Camiseta Argentina Titular",
                        "desc":"Esta camiseta es la diseñada por Adidas para la Seleccion Argentina de Futbol para los partidos de titular en el Mundial de Qatar 2022",
                        "price":"AR$24000",
                        "thumbnail":"Sin imagen",
                        "codigo": "cts009",
                        "stock":"600"};
        await manager.createProduct(productDemo1)

        console.log("Segunda consulta")
        product = await manager.getProduct()
        console.log(product);
        console.log("Nuevo producto")
        const productDemo2 = {
                        "id": 2,
                        "title":"Camiseta Argentina Suplente",
                        "desc":"Esta camiseta es la diseñada por Adidas para la Seleccion Argentina de Futbol para los partidos de visitante en el Mundial de Qatar 2022",
                        "price":"AR$24000",
                        "thumbnail":"Sin imagen",
                        "codigo": "css010",
                        "stock":"600"};
        await manager.createProduct(productDemo2)

        console.log("Tercera consulta")
        product = await manager.getProduct()
        console.log(product);
        console.log("Nuevo producto")
        const productDemo3 = {
                        "id": 3,
                        "title":"Camiseta Argentina Entrenamiento",
                        "desc":"Esta camiseta es la diseñada por Adidas para la Seleccion Argentina de Futbol para los entrenamientos en el Mundial de Qatar 2022",
                        "price":"AR$15000",
                        "thumbnail":"Sin imagen",
                        "codigo": "ces011",
                        "stock":"600"};
        await manager.createProduct(productDemo3)

        console.log("Cuarta consulta")
        product = await manager.getProduct()
        console.log(product);
    } catch(error) {
        console.log(error)
    }
}

queries()