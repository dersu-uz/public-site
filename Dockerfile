FROM ruby:2.5 AS builder
RUN bundle config --global frozen 1
WORKDIR /usr/src/app
COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock
RUN bundle install
COPY favicon.ico favicon.ico
COPY robots.txt robots.txt
COPY assets assets
COPY _config.yml _config.yml
COPY _layouts _layouts
COPY _includes _includes
COPY _sass _sass
COPY en en
COPY es es
COPY index.md index.md
RUN jekyll build
CMD ["jekyll", "serve", "--watch", "--future", "--host=0.0.0.0"]

FROM nginx:1.19.2-alpine AS final
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/_site /usr/share/nginx/html
COPY --from=builder /usr/src/app/assets /usr/share/nginx/html/assets
