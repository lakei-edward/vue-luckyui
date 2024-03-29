#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'update 优化文档'

# 如果发布到 https://<USERNAME>.github.io
#git push -f https://github.com/lakei-edward/luckyui.github.io.git master

# 上传至服务器
scp -r * root@43.142.176.173:/data/nginx/html/vue-luckyui/