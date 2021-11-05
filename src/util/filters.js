
// 全局过滤器
import dayjs from 'dayjs'

// 过滤多个歌手
export function geshou(list) {
    let str = ''
    list.forEach(item => {
        str+= item.name +' / '
    });
    // 如果有多个歌手 / 拼接一起 ， 没有就删除 ‘ / ’
    return  str.slice(0,str.length-3)
}

// 过滤歌手多少万
export function geshouNum(val) {
    return val-0 > 10000?(val/10000).toFixed(0)+'万':val
}



// 过滤排行榜更新日期
export function formatDate(val) {
    return dayjs(val).format('M月d日');
}

// 过滤音乐的时长
export function formatDateMu(val) {
    return dayjs(val).format('mm:ss');
}

// 过滤评论时间
export function formatDatePing(val) {
    return dayjs(val).format('YYYY年MM月DD日');
}

