import  request  from '../untils/request' //引入导出的ajax

//第二种方式
export function getData3(data) { //post
  console.log(process.env.VUE_APP_BASEURL)
  return request({
    url: 'data/list',
    method: 'post',
    data: { ...data }
  })
}

export function getData4(id) { //get
  return request({
    url: 'data/one?id=' + id,
    method: 'GET'
  })
}
