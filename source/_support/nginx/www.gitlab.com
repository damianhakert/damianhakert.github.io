# Located in: /etc/nginx/sites-available/www.gitlab.com

# You may add here your
# server {
# ...
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
  return 301 https://about.gitlab.com$request_uri;
}

server {
  listen 80;
  server_name about.gitlab.com;
  server_tokens off;
  return 301 https://about.gitlab.com$request_uri;
}

server {
  listen 80;
  server_name gitlab.org gitlabhq.com www.gitlabhq.com;
  server_name_in_redirect off;

  include /etc/nginx/conf.d/org_to_com_rewrite_rules.rules;

  location / {
    rewrite ^/$ https://about.gitlab.com/ permanent;
  }

  if ($http_host != "gitlab.org") {
    rewrite ^ http://gitlab.org$request_uri permanent;
  }
}

server {
  listen 80;
  server_name api.gitlab.org;
  server_name_in_redirect off;

  rewrite ^ http://doc.gitlab.com/ce/api$request_uri permanent;
}

server {
  listen 80;
  server_name blog.gitlabhq.com blog.gitlab.org blog.gitlab.com;
  server_name_in_redirect off;

  if ($http_host != "blog.gitlab.org") {
    rewrite ^ http://blog.gitlab.org$request_uri permanent;
  }

  include /etc/nginx/conf.d/blog_rewrite_rules.rules;

  location / {
    rewrite ^/$ https://about.gitlab.com/blog permanent;
  }
}

server {
  listen 80;
  server_name status.gitlab.com;
  root /home/deploy/status-gitlab-com/_site;
  location / {
    index index.html;
  }
}

# HTTPS server
#

server {
  listen 443;
  root /home/deploy/public;
  index index.html;
  add_header X-Frame-Options DENY;
  server_name about.gitlab.com;
  server_tokens off;

  ssl on;
  ssl_certificate /etc/ssl/about.gitlab.com.crt;
  ssl_certificate_key /etc/ssl/about.gitlab.com.key;
  ssl_session_timeout 5m;
  ssl_protocols  TLSv1 TLSv1.1 TLSv1.2;
  ssl_ciphers 'ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-SHA384:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA:ECDHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES128-SHA256:DHE-RSA-AES256-SHA:DHE-RSA-AES128-SHA:ECDHE-RSA-DES-CBC3-SHA:EDH-RSA-DES-CBC3-SHA:AES256-GCM-SHA384:AES128-GCM-SHA256:AES256-SHA256:AES128-SHA256:AES256-SHA:AES128-SHA:DES-CBC3-SHA:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!MD5:!PSK:!RC4';
  ssl_prefer_server_ciphers on;

  gzip on; # Enable gzip compression
  gzip_comp_level 6; # Compression level
  gzip_vary on; # Proxies can store both compressed and uncompressed version of the content
  gzip_proxied any; # Enable compression for all requests when request is coming from a proxy
  gzip_types text/plain text/css application/json application/javascript application/x-javascript text/javascript text/xml application/xml application/rss+xml application/atom+xml application/rdf+xml;
  gzip_buffers 16 8k; # Number and the size of the compression buffers
  gzip_disable "MSIE [1-6].(?!.*SV1)"; # Disables gzip compression for browsers not supporting it, < IE 6

  location / {
  }
  location ~ ^/subscription/(basic|standard|plus|success)$ {
     proxy_pass http://localhost:4567;
     proxy_set_header  X-Real-IP  $remote_addr;
  }
  location ~*  \.(jpg|jpeg|png|gif|ico|css|js)$ {
   expires 60m;
  }
  location ~ ^/webhook$ {
    proxy_pass http://localhost:5555;
    proxy_set_header  X-Real-IP  $remote_addr;
    allow   54.243.197.170;
    deny    all;
  }
  location ^~ /gitlab-ce/ {
    return 301 /features;
  }
  location ^~ /gitlab-ee/ {
    return 301 /features/#enterprise;
  }
  rewrite ^/upgrade/?$ /update/ permanent;
  rewrite ^/team-handbook/?$ /handbook/ permanent;
  location ^~ /services/ {
    return 301 /pricing/#services;
  }
  location = /subscription/ {
    return 301 /pricing;
  }
}

server {
  listen 443;
  server_name localhost www.gitlab.com blue-moon.gitlap.com;
  server_name_in_redirect off;

  ssl on;
  ssl_certificate /etc/ssl/www.gitlab.com.crt;
  ssl_certificate_key /etc/ssl/www.gitlab.com.key;
  ssl_protocols  TLSv1 TLSv1.1 TLSv1.2;
  ssl_ciphers 'ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-SHA384:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA:ECDHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES128-SHA256:DHE-RSA-AES256-SHA:DHE-RSA-AES128-SHA:ECDHE-RSA-DES-CBC3-SHA:EDH-RSA-DES-CBC3-SHA:AES256-GCM-SHA384:AES128-GCM-SHA256:AES256-SHA256:AES128-SHA256:AES256-SHA:AES128-SHA:DES-CBC3-SHA:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!MD5:!PSK:!RC4';

  rewrite ^ https://about.gitlab.com$request_uri permanent;
}

server {
  listen 443;
  server_name gitlabhq.com www.gitlabhq.com;
  server_name_in_redirect off;

  ssl on;
  ssl_certificate /etc/ssl/gitlabhq.com.crt;
  ssl_certificate_key /etc/ssl/gitlabhq.com.key;
  ssl_protocols  TLSv1 TLSv1.1 TLSv1.2;
  ssl_ciphers 'ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-SHA384:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA:ECDHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES128-SHA256:DHE-RSA-AES256-SHA:DHE-RSA-AES128-SHA:ECDHE-RSA-DES-CBC3-SHA:EDH-RSA-DES-CBC3-SHA:AES256-GCM-SHA384:AES128-GCM-SHA256:AES256-SHA256:AES128-SHA256:AES256-SHA:AES128-SHA:DES-CBC3-SHA:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!MD5:!PSK:!RC4';

  rewrite ^ https://about.gitlab.com$request_uri permanent;
}
