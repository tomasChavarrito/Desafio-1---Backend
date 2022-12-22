import { writeFile, readFile } from 'fs/promises';
import { existsSync } from 'fs';

class ProductManager {
    constructor(path){
        this.path = path
    }
    async getProducts() {
        try{
            if (existsSync(this.path)){
                const products = await fs.readFile(this.path, 'utf-8')
                if(products.length > 0){
                    const parsedProducts = JSON.parse(products)
                    return parsedProducts
                }
                else return []
            }
            else return []
        }
        catch(error){
            console.log(error.message)
        }
    }
    async addProduct(product) {
        try{
            const savedProducts = await this.getProducts()
            const DuplicatedProduct = savedProducts.find(item => item.code == product.code)
            if (DuplicatedProduct){
                throw new Error(`ERROR: No se pudo añadir. El siguiente código ya se encuentra registrado: ${product.code}`)
            }
            if (Object.keys(product).length < 6) {
                throw new Error(`ERROR: No se pudo añadir. Deben incluirse todos los campos`)
            }
            const newId = savedProducts.length > 0 ? savedProducts[savedProducts.length -1 ].id + 1 : 1
            const newProduct = {
                id: newId,
                ...product
            }
            savedProducts.push(newProduct)
            const productListString = JSON.stringify(savedProducts, null, '\t')
            await fs.writeFile(this.path, productListString)
            console.log(`${product.title} añadido`)
        }
        catch(error){
            console.log(error.message)
        }
    }
    async createProduct(product){
        try{
            const productArray = await this.getProducts()
            const newProduct = {id: productArray.length+1, ...product}
            productArray.push(newProduct)

            const productString = JSON.stringify(productArray,null,"\t")

            await this.writeFile(productString)
            console.log("Product saved succesfully")
        } catch(error){
            console.log(error)
        }
    }

    async getProductById(id) {
        try{
            const savedProducts = await this.getProducts();
            const selectedProduct = savedProducts.find(prod => prod.id === id)
            if(!selectedProduct){
                throw new Error('ERROR: ningún producto coincide con la id especificada')
            }
            return selectedProduct
        }
        catch(error){
            console.log(error.message)
        }
    }

    async updateProduct(id, product) {
        try{
            const savedProducts = await this.getProducts()
            const targetProduct = await this.getProductById(id)
            if(targetProduct){
                const updatedProduct = {...targetProduct, ...product}
                const updatedList = savedProducts.map(prod =>{
                    if(prod.id === id){
                        return updatedProduct
                    }else{
                        return prod
                    }
                })
                const productListString = JSON.stringify(updatedList, null, '\t')
                await fs.writeFile(this.path, productListString)
                console.log('producto modificado')
            }
        }
        catch(error){
            console.log(error.message)
        }
    }

    async deleteProduct(id) {
        try{
            const savedProducts = await this.getProducts();
            const targetProduct = await this.getProductById(id)
            const filteredList = savedProducts.filter(prod => prod.id !== id)
            if(!targetProduct){
                throw new Error('ERROR: No se encuentra la id especificada')
            }
            else{
                const productListString = JSON.stringify(filteredList, null, '\t')
                await fs.writeFile(this.path, productListString)
                console.log(`${targetProduct.title} eliminado`)
            }
        }
        catch(error){
            console.log(error.message)
        }
    }
}

export default ProductManager;