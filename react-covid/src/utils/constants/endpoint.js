const BASE_URL = "https://covid19.mathdro.id/api";

const ENDPOINTS = {
  GLOBAL: `${BASE_URL}`,
  GLOBAL_SUMMARY: `${BASE_URL}/og`,
  INDONESIA: `${BASE_URL}/countries/indonesia`,
  INDONESIA_SUMMARY: `${BASE_URL}/countries/indonesia/og` 
};

export default ENDPOINTS;