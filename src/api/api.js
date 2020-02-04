
import server from '../utils/server.js';


export function addAccount(data){
  return server({
      url: '/bill',
      method: 'post',
      dataType: "json",
      contentType: "application/json;charset=UTF-8",
      data: data
  })
}

export function getAccount(data){
  return server({
      url: '/bill/list',
      method: 'get',
      dataType: "json",
      contentType: "application/json;charset=UTF-8",
      data: data
  })
}

export function delAccount(data){
  return server({
      url: '/bill',
      method: 'delete',
      dataType: "json",
      contentType: "application/json;charset=UTF-8",
      data: data
  })
}