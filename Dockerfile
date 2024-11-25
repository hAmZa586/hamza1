#BASE IMAGE 
FROM nginx:alpine

#copy code
COPY . /usr/share/nginx/html
 
#Port on 80
EXPOSE 8080:80

