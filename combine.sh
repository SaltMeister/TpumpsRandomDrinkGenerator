#!/bin/bash

# Copy contents of subdir1, subdir2, subdir3 into /app/combined
cp -a /static/html/. /static/
cp -a /static/js/. /static/
cp -a /static/css/. /static/
cp -a /static/favicon/. /static/

echo "Directories combined into /static/"

nginx -g 'daemon off;'

echo "Nginx running"