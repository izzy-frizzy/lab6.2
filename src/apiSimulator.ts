export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
        resolve([
            { id: 1, name: "Laptop", price: 1200 },
            { id: 2, name: "Headphones", price: 200 },
        ]);
        } else {
        reject("Failed to fetch product catalog");
        }
    }, 1000);
    });
};

interface Product{
    productId: number;
}

export const fetchProductReviews = (productId:number):Promise<Product[]> => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            let product:Product[] = [{productId:productId}]
            if(Math.random() < 0.8){
                resolve(product)
            }else{
                reject(`Failed to fetch reviews for product ID ${productId}`)
            }

        }, 1500)
    })
}

export const fetchSalesReport = ():Promise<{totalSales:number, unitesSold:number, averagePrice:number}[]> =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
        if (Math.random() < 0.8) {
        resolve([
            {totalSales: 2, unitesSold:5, averagePrice:3}
        ]);
        } else {
        reject("Failed to fetch sales report");
        }
    }, 1000);
    })

}

// fetchProductReviews().then((review) =>{
//     console.log(review);
// }).catch((error)=>{console.error(error)})