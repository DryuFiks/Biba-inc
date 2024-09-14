import type { Product, ProductFilters, ProductId, ProductWithOutId } from "../features/products/types";
import type { User, UserSignIn, UserSignUp } from "../features/auth/types";
import { searchParams } from "../features/functions/SovietUnion";


export const fetchLoadProducts = async (filters: ProductFilters): Promise<Product[]> => {
    const query = searchParams(filters);
    const url = `/api/products?${query}`
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    const data: { products: Product[] } = (await res.json()) as { products: Product[] };
    return data.products;
  };

  export const fetchAddProduct = async (product: ProductWithOutId): Promise<Product> => {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      const data: { product: Product } = (await res.json()) as { product: Product };
      return data.product;
    };
  
    export const fetchProductRemove = async (id: ProductId): Promise<ProductId> => {
      const res = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      });
      const data: { message: string; productId: ProductId } = (await res.json()) as {
        message: string;
        productId: ProductId;
      };
      if (data.message !== 'success') {
          throw new Error(data.message);
      }
      return data.productId;
    };

export const fetchCheckUser = async (): Promise<User> => {
    const res = await fetch('/api/auth/check');
    const data: { user: User } = (await res.json()) as { user: User };
    return data.user ;
};

export const fetchLoadUsers = async (): Promise<User[]> => {
    const res = await fetch('/api/users');
    const data: { users: User[] } = (await res.json()) as { users: User[] };
    return data.users;
};

  export const fetchSignIn = async (user: UserSignIn ): Promise<User> => {
    const res = await fetch('/api/auth/sign-in', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data: { message: string; user: User } = (await res.json()) as {
      message: string;
      user: User;
    };
    return data.user;
  };

  export const fetchSignUp= async (user: UserSignUp): Promise<User> => {
    const res = await fetch('/api/auth/sign-up', {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      if(res.status >= 400) {
        const data:{message: string} = (await res.json()) as {message: string};
        throw new Error(data.message);
      }
      const data: { message: string; user: User } = (await res.json()) as {
        message: string;
        user: User;
      };
      return data.user;
    };

export const fetchLogOut = async (): Promise<void> => {
    const res = await fetch('/api/auth/logout');
    const data: { message: string } = (await res.json()) as { message: string };
    if (data.message !== 'success') {
      throw new Error(data.message);
    }
  };
