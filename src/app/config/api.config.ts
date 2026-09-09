import axios from "axios";

// Environment-aware API Base URL
export const getBaseUrl = (): string => {
  if (typeof window !== "undefined") {
    const host = window.location.hostname;
    if (host === "localhost" || host === "127.0.0.1") {
      return process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api/v1";
    }
  }
  return process.env.NEXT_PUBLIC_API_URL || (process.env.NODE_ENV === "development" ? "http://localhost:4000/api/v1" : "https://hiverift.com/hiverift_api");
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
