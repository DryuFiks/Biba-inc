export type Product = {
    id: number;
    name: string;
    description: string;
    img: string;
    price: number;
    count: number;

  };

  export enum SORT_ORDER {
    ASC = 1,
    DESC = -1,
  }

  export enum SORT_BY {
    NAME = 'name',
    PRICE = 'price',
  }
  
  export type ProductFilters = {
    name: string;
    price: number;
    sortBy: SORT_BY;
    sortOrder: SORT_ORDER;
    skip: number;
    limit: number;
  }
  
  export type ProductId = Product['id'];
  
  export type ProductWithOutId = Omit<Product, 'id'>;
  
export type ProductsState = {
    products: Product[];
    error: string | undefined;
    loading: boolean;
    filters: ProductFilters;
  }

