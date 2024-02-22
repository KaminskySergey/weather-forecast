import axios from "axios";
import { getContentType } from "./helper";

export const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
    headers: getContentType(),
        params: {
            unitGroup: 'metric',
            include: 'days',
            key: process.env.NEXT_PUBLIC_SECRET_KEY,
            contentType: 'json',
    }
})