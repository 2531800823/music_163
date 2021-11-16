
import axios from 'axios'
import { Message } from '_element-ui@2.15.6@element-ui';


const server = axios.create({
    baseURL: "/api",   // 代理了 
    // timeout:5000
})

server.interceptors.response.use(config => {
    console.log(config);
    return config
}, err => {
    Message.error(err.response.data.msg)
    // console.log(err.response.data.msg);
})

export default server