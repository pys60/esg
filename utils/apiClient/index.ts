import ky from "ky";
const BACKEND_URL =
  process.env.NEXT_PUBLIC_DASHBOARD_BACKEND_URL ||
  "https://alpha-api.zerocarbon.one";

const isBrowser = typeof window !== "undefined";

const getBackendURL = () => {
  //check if ref=alpha is in the url
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("ref") === "alpha") {
      return "https://alpha-api.zerocarbon.one";
    }
    return BACKEND_URL;
  }

  return BACKEND_URL;
};

const apiClient = ky.create({
  prefixUrl: getBackendURL(),
  headers: {
    "Content-Type": "application/json",
  },
});

const token = isBrowser ? localStorage.getItem("token") : null;

const apiClientWithAuth = ky.create({
  prefixUrl: getBackendURL(),
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

//formdata
const apiClientFormDataWithAuth = ky.create({
  prefixUrl: getBackendURL(),
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { apiClient, apiClientFormDataWithAuth, apiClientWithAuth };
