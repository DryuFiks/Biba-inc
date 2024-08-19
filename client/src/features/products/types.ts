export type Product = {
    id: number;
    name: string;
    description: string;
    img: string;
    price: number;
    count: number;
  };

  export type ProductId = Product['id'];
  
  export type ProductWithOutId = Omit<Product, 'id'>;
  
export type ProductsState = {
    products: Product[];
    error: string | undefined;
    loading: boolean;
  }

