
import axios from 'axios'


const server = axios.create({
    baseURL:"/api",   // 代理了 
    // timeout:5000
})


export default server