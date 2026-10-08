export const fetchProductCatalog = (): Promise<
  { id: number; name: string; price: number }[]
> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve([
          { id: 1, name: "Laptop", price: 1200 },
          { id: 2, name: "Headphones", price: 200 }
        ]);
      } else {
        reject(new NetworkError("Failed to fetch product catalog"));
      }
    }, 1000);
  });
};

interface Product {
  productId: number;
  review: string;
}

export const fetchProductReviews = (productId: number): Promise<Product[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //let product: Product[] = [{ productId: productId, review:"amazing product 5 stars"}];
      if (Math.random() < 0.8) {
        if (productId === 1) {
                    resolve([
                        {
                            productId: 1,
                            review: "amazing product 5 stars"
                        }
                    ]);
                } 
                else if (productId === 2) {
                    resolve([
                        {
                            productId: 2,
                            review: "terrible product it came broken"
                        }
                    ]);
                }
      } else {
        reject(
          new DataError(`Failed to fetch reviews for product ID ${productId}`),
        );
      }
    }, 1500);
  });
};

export const fetchSalesReport = (): Promise<
  { totalSales: number; unitesSold: number; averagePrice: number }[]
> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve([{ totalSales: 2, unitesSold: 5, averagePrice: 3 }]);
      } else {
        reject(new NetworkError("Failed to fetch sales report"));
      }
    }, 1000);
  });
};

export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
  }
}

export class DataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DataError";
  }
}
