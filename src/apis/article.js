//封装文章的相关接口函数

import { request } from "@/utils";

//获取频道列表
export function getChannelAPI() {
  return request({
    url: "/channels",
    method: "GET",
  });
}

//提交文章
export function createArticleAPI(data) {
  return request({
    url: "/mp/articles?draft=false",
    method: "POST",
    data,
  });
}

//获取文章列表
export function getAtricleListAPI(data) {
  return request({
    url: "/mp/articles",
    method: "GET",
    data,
  });
}

//删除文章
export function delAtricleAPI(id) {
  return request({
    url: `/mp/articles/${id}`,
    method: "DELETE",
  });
}

//获取文章
export function getAtricleById(id) {
  return request({
    url: `/mp/articles/${id}`,
  });
}

//获取文章列表
export function updateAtricleAPI(data) {
  return request({
    url: `/mp/articles/${data.id}?draft=false`,
    method: "PUT",
    data,
  });
}
