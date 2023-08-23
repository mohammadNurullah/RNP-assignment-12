// api.js
import axios from "axios";

const API_BASE_URL = "https://basic-blog.teamrabbil.com/api"; // Replace with the actual API URL

export async function getBlogPosts() {
  const response = await axios.get(`${API_BASE_URL}/post-categories`);
  if (response.status === 200) {
    return response.data;
  } else {
    return [];
  }
}

// Add other API functions as needed
