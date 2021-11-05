
import request  from '../util/request'


export const getGeshou = (params) => {
    return request({
        url: '/artist/list',
        method:'get',
        params
    })
}



