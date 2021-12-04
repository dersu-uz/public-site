FROM node:lts-slim AS builder
WORKDIR /usr/src/app/dersu-site
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
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
COPY public public
COPY src src
COPY _posts _posts
RUN npm run export

FROM nginx:1.19.2-alpine AS final
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dersu-site/out /usr/share/nginx/html
