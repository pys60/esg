FROM node:lts as dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install -f


FROM node:lts as builder
WORKDIR /app
COPY ./ .
COPY --from=dependencies /app/node_modules ./node_modules
ENV NODE_ENV production
ENV NEXT_PUBLIC_IS_PROD=true
ENV BACKEND_URL=https://prod-api.zerocarbon.one
ENV NEXT_PUBLIC_DASHBOARD_BACKEND_URL=https://prod-api.zerocarbon.one
ENV NEXT_PUBLIC_ONCHAIN_ADDRESS=0xC8d9e09b233D53c310c9068BD0aAA00aE610c6cF
RUN yarn run build
FROM node:lts as runner
WORKDIR /app
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
ENV HOSTNAME="0.0.0.0"
EXPOSE 4000

CMD ["npm", "run", "start"]