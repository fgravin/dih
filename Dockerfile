FROM node:16-alpine AS build

COPY package.json package-lock.json /app/
WORKDIR /app
RUN npm ci
COPY . /app
RUN npm run build

FROM nginxinc/nginx-unprivileged:latest  AS run

WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist/ .
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

USER root

RUN chown -R nginx:nginx /usr/share/nginx/html

USER nginx

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
