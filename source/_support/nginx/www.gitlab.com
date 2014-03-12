# Located in: /etc/nginx/sites-available/www.gitlab.com

# You may add here your
# server {
#	...
# }
# statements for each of your virtual hosts to this file

##
# You should look at the following URL's in order to grasp a solid understanding
# of Nginx configuration files in order to fully unleash the power of Nginx.
# http://wiki.nginx.org/Pitfalls
# http://wiki.nginx.org/QuickStart
# http://wiki.nginx.org/Configuration
#
# Generally, you will want to move this file somewhere, and start with a clean
# file but keep this around for reference. Or just disable in sites-enabled.
#
# Please see /usr/share/doc/nginx-doc/examples/ for more detailed examples.
##

server {
  listen 80;
  server_name localhost www.gitlab.com blue-moon.gitlap.com;
  server_tokens off;
  return 301 https://www.gitlab.com$request_uri;
}

# HTTPS server
#
server {
  listen 443;
  root /home/deploy/public;
  index index.html;
  add_header X-Frame-Options DENY;
  server_name localhost www.gitlab.com blue-moon.gitlap.com;
  server_tokens off;

  ssl on;
  ssl_certificate /etc/ssl/www.gitlab.com.bundle;
  ssl_certificate_key /etc/ssl/www.gitlab.com.key;
  ssl_session_timeout 5m;
  # ssl_protocols SSLv3 TLSv1;
  ssl_ciphers RC4:HIGH:!aNULL:!MD5;
  ssl_prefer_server_ciphers on;

  gzip on; # Enable gzip compression
  gzip_comp_level 6; # Compression level
  gzip_vary on; # Proxies can store both compressed and uncompressed version of the content
  gzip_proxied any; # Enable compression for all requests when request is coming from a proxy
  gzip_types text/plain text/css application/json application/javascript application/x-javascript text/javascript text/xml application/xml application/rss+xml application/atom+xml application/rdf+xml;
  gzip_buffers 16 8k; # Number and the size of the compression buffers
  gzip_disable "MSIE [1-6].(?!.*SV1)"; # Disables gzip compression for browsers not supporting it, < IE 6

  rewrite ^/features/ https://www.gitlab.com/gitlab-ee/ permanent;
  rewrite ^/features https://www.gitlab.com/gitlab-ee/ permanent;
  location / {
  }
  location ~ ^/subscription/(basic|standard|success)$ {
     proxy_pass http://localhost:4567;
     proxy_set_header  X-Real-IP  $remote_addr;
  }
  location ~*  \.(jpg|jpeg|png|gif|ico|css|js)$ {
   expires 365d;
  }
}
