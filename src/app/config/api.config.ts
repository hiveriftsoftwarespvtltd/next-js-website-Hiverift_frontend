import axios from "axios";

// Environment-aware API Base URL
export const getBaseUrl = (): string => {
  let envUrl = process.env.NEXT_PUBLIC_API_URL?.trim();
  if (envUrl) {
    if (!envUrl.endsWith("/api/v1")) {
      envUrl = envUrl.replace(/\/+$/, "") + "/api/v1";
    }
    return envUrl;
  }
  return "https://api.hiverift.com/api/v1";
};

export const API_BASE_URL = getBaseUrl();

export const ENDPOINTS = {
  BLOGS: "/blogs",
  BLOG_SEED: "/blogs/seed",
  SUBMIT_FORM: "/submitfrom",
  LOGIN: "/auth/login",
};

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});
