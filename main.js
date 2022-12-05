class ProductManager {
    static idIncremento = 0;
    
        constructor(){
            this.products = [];
        }
    
        getProducts(){
            return this.products;
        }
        
        addProducts(titulo, descripcion, precio, imagen, codigo, stock){
            ProductManager.idIncremento++;
            const code = this.products.find(c => c.codigo === codigo); 
                const nuevoProducto = {
                    id:ProductManager.idIncremento,
                    title: titulo,
                    desc: descripcion,
                    price: precio,
                    thumbnail: imagen,
                    codigo: codigo,
                    stock: stock,
                } 
              if(code){
                console.error('ya existe este codigo');
                return;
            }
                return this.products.push(nuevoProducto);
           
        }
    
        
    
        getProductsById(idP){
            const encontrar = this.products.findIndex(e => e.id === idP);
            if(encontrar < 0){
                console.error('Not found');
                return;
            }
            const productoEncontrado = this.products[encontrar];
            return productoEncontrado; 
        }
    };
    
    const myProductManager = new ProductManager();
    console.log(myProductManager.getProducts());
    console.log(myProductManager.addProducts( 'Camiseta Argentina Titular','Esta camiseta es la diseñada por Adidas para la Seleccion Argentina de Futbol para los partidos de titular en el Mundial de Qatar 2022', 24000, 'Sin imagen', 'cst009', 600));
    console.log(myProductManager.addProducts('Camiseta Argentina Suplente', 'Esta camiseta es la diseñada por Adidas para la Seleccion Argentina de Futbol para los partidos de visitante en el Mundial de Qatar 2022', 22000, 'Sin imagen', 'csa010', 600));
    console.log(myProductManager.addProducts( 'Camiseta Argentina Training','Esta camiseta es la diseñada por Adidas para la Seleccion Argentina de Futbol para los entrenamientos del Mundial de Qatar 2022', 15000, 'Sin imagen', 'cse002', 300));
    console.log(myProductManager.getProducts());
    console.log(myProductManager.getProductsById(1));