# jala la imagen donde basaremos el contenedor que se va a crear.
FROM nginx:alpine

# dejamos limpio la carpeta donde almacenaremos los archivos estáticos
RUN rm -Rf /usr/share/ngnix/html/*

# copiamos los archivos estáticos que se crean en el build desde la carpeta dist al 
# origen dentro del contenedor creado
COPY ./dist /usr/share/nginx/html

# cambiamos el grupo y el usuario que inicialmente por defecto es root por ngnix , ya que 
# este usuario es el dueño del proceso que se genera ( el de escuchar y realizar peticiones, etc)
RUN chown -R nginx:nginx /var/cache/nginx /var/run /var/log/nginx 

# exponemos el puerto 80 ya que es el que viene por defecto para el contenedor
EXPOSE 80