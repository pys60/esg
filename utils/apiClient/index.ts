import ky from 'ky';
const BACKEND_URL = process.env.NEXT_PUBLIC_DASHBOARD_BACKEND_URL || 'https://alpha-api.zerocarbon.one'

const isBrowser = typeof window !== 'undefined';


const apiClient = ky.create({
  prefixUrl: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const token = isBrowser ? localStorage.getItem('token') : null;

const apiClientWithAuth = ky.create({
  prefixUrl: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

//formdata
const apiClientFormDataWithAuth = ky.create({
  prefixUrl: BACKEND_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});


export { apiClient, apiClientFormDataWithAuth, apiClientWithAuth };

