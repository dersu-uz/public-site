FROM ruby:2.5
RUN bundle config --global frozen 1
WORKDIR /usr/src/app
COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock
RUN bundle install
COPY _config.yml _config.yml
COPY _layouts _layouts
COPY en en
COPY es es
COPY index.html index.html
CMD ["jekyll", "serve", "--watch", "--future", "--host=0.0.0.0"]
