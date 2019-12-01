FROM nginx
ADD ./config/default.conf /etc/nginx/conf.d/default.conf
COPY ./build /usr/share/nginx/html
