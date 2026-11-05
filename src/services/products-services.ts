
import { ServiceBase } from "./service-base";

export class ProductService extends ServiceBase {

    static getProducts = async () => {
        const productResp = await fetch(this.getUrl('/products'));
        const products = await productResp.json();
        return products.products;
    }

    static getProductById = async (id: number) => {
        const productResp = await fetch(this.getUrl(`/products/${id}`));
        const product = await productResp.json();
        return product;
    }

    static searchProducts = async (query: string) => {
        const products = await this.getProducts();

        const searchText = query.toLowerCase();

        const matchingProducts = products.filter((p: any) =>
            p.title.toLowerCase().includes(searchText)
        );

        matchingProducts.sort((a: any, b: any) => {
            const aStarts = a.title.toLowerCase().startsWith(searchText);
            const bStarts = b.title.toLowerCase().startsWith(searchText);

            return Number(bStarts) - Number(aStarts);
        });

        return matchingProducts;
    }
}
