FROM node:lts AS builder
WORKDIR /app
COPY package.json package.json
COPY yarn.lock yarn.lock
COPY package.json package.json
COPY .yarn/cache .yarn/cache/
COPY .yarn/releases .yarn/releases/
COPY .yarnrc.yml .yarnrc.yml
COPY .pnp.cjs .pnp.cjs
RUN yarn rebuild
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
RUN yarn build
CMD ["yarn", "dev"]

FROM node:lts-slim AS final
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
RUN rm -rf .yarn
COPY yarn.lock yarn.lock
COPY .yarn/cache .yarn/cache/
COPY .yarn/releases .yarn/releases/
COPY .yarnrc.yml .yarnrc.yml
COPY .pnp.cjs .pnp.cjs
RUN yarn rebuild
ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000
CMD ["yarn", "node", "server.js"]
