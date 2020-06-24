import request from '@/business/api/request.mock'
export function GetList (query) {
  return request({
    url: '/cropper/page',
    method: 'get'
  })
}

export function AddObj (obj) {
  return request({
    url: '/cropper/add',
    method: 'post',
    data: obj
  })
}

export function UpdateObj (obj) {
  return request({
    url: '/cropper/update',
    method: 'post',
    data: obj
  })
}
export function DelObj (id) {
  return request({
    url: '/cropper/delete',
    method: 'post',
    data: { id }
  })
}
