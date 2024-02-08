import axios, { type AxiosResponse } from 'axios';
import { type Product } from '@/models/ProductModel';
const BASE_URL = 'http://localhost/api/v1';

export const getAllProducts = async (): Promise<Product[]> => {
    const response: AxiosResponse<Product[]> = await axios.get(`${BASE_URL}/product`);
    return response.data;
};