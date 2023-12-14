import { createContext } from "react";
import axios from 'axios';

export default createContext(axios.create({
  baseURL: process.env.REACT_APP_API_URL
}));
