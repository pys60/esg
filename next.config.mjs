import MillionLint from '@million/lint';
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  experimental: {
    missingSuspenseWithCSRBailout: false
  }
};
export default MillionLint.next({
  rsc: true
})(nextConfig);