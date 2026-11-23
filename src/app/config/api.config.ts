import axios from "axios";

// Environment-aware API Base URL
export const getBaseUrl = (): string => {
  // If running in browser on localhost, point to local backend port 7001
  if (typeof window !== "undefined") {
    const isLocalhost =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";
    if (isLocalhost) {
      return "http://localhost:7001/api/v1";
    }
  }

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
  timeout: 30000,
});

// Request interceptor to ensure requests from localhost always target localhost backend
apiClient.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const isLocal =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";
    if (isLocal) {
      config.baseURL = "http://localhost:7001/api/v1";
    }
  }
  return config;
});
