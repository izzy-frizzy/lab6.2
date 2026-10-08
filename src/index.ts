import { fetchProductCatalog } from "./apiSimulator.js";
import { fetchProductReviews } from "./apiSimulator.js";
import { fetchSalesReport } from "./apiSimulator.js";

function processData() {
  fetchProductCatalog()
    .then((catalog) => {
    console.log("product catalog:");
      console.log(catalog);
      return Promise.all(
                catalog.map((product) => {
                    return fetchProductReviews(product.id);
                })
            );

        })
    .then((reviews) => {
        console.log("reviews:")
      console.log(reviews);
      return fetchSalesReport();
    })
    .then((report) => {
      console.log(report);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log("Finished fetching product information.");
    });
}

processData();
