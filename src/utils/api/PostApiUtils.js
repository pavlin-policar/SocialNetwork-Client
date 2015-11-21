import { get, post, put, del } from './WebApiUtils';

const BASE_URL = `localhost:3000/v1/`;

export async function getAllPosts() {
  return await get(`${BASE_URL}/posts`);
}

export async function getAllPostsByUserId(userId) {
  return await get(`${BASE_URL}/posts/${userId}`);
}

export async function getAllPostsByUserSlug(userSlug) {
  return await get(`${BASE_URL}/posts/${userSlug}`);
}

export async function createPost(postObj) {
  return await post(`${BASE_URL}/posts`, postObj);
}

export async function updatePost(postObj) {
  return await put(`${BASE_URL}/posts/${postObj.postId}`, postObj);
}

export async function deletePost(postObj) {
  return await del(`${BASE_URL}/posts/${postObj.postId}`, postObj);
}