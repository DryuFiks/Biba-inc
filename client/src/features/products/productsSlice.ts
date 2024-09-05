import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAddProduct, fetchProductRemove, fetchLoadProducts } from "../../App/api";
import { ProductFilters, SORT_BY, SORT_ORDER, type ProductId, type ProductWithOutId, type ProductsState } from "./types";

const initialState: ProductsState = {
    products: [],
    error: undefined,
    loading: false,
    filters: {
        name: '',
        price: 0,
        sortBy: SORT_BY.NAME,
        sortOrder: SORT_ORDER.ASC,
        skip: 0,
        limit: 10000
    }
};



export const loadProducts = createAsyncThunk('products/load', (filters: ProductFilters) => fetchLoadProducts(filters));

export const addProduct = createAsyncThunk('products/add', (product: ProductWithOutId) => fetchAddProduct(product));

export const removeProduct = createAsyncThunk('products/remove', (productId: ProductId) => fetchProductRemove(productId));

const  productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        stopLoading(state) {
            state.loading = false;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loadProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        })
        .addCase(loadProducts.pending, (state) => {
            state.loading = true;
        })
        .addCase(loadProducts.rejected, (state, action) => {
            state.error = action.error.message;
        })
        .addCase(addProduct.fulfilled, (state, action) => {
            state.products.push(action.payload);
        })
        .addCase(addProduct.rejected, (state, action) => {
            state.error = action.error.message;
        })
        .addCase(removeProduct.fulfilled, (state, action) => {
            state.products = state.products.filter((product) => product.id !== +action.payload);
        })
        .addCase(removeProduct.rejected, (state, action) => {
            state.error = action.error.message;
        })
    },
});

export const { stopLoading } = productsSlice.actions

export default productsSlice.reducer
