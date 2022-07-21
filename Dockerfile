FROM node:lts-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install --legacy-peer-deps

FROM node:lts-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY .env .env
COPY .eslintignore .eslintignore
COPY .eslintrc.js .eslintrc.js
COPY tsconfig.json tsconfig.json
COPY next-env.d.ts next-env.d.ts
COPY next.config.js next.config.js
COPY postcss.config.js postcss.config.js
COPY prettier.config.js prettier.config.js
COPY stylelint.config.js stylelint.config.js
COPY tailwind.config.js tailwind.config.js
COPY jest.config.js jest.config.js
COPY jest.setup.js jest.setup.js
COPY public public
COPY src src
COPY _posts _posts
RUN npm run build
CMD [ "npm", "run", "dev" ]

FROM node:lts-alpine AS final
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000
CMD ["node", "server.js"]
