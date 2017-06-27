# Munin-moe

#### 这是一个可定制化的Munin监控面板

Munin自己生成的那套页面不太好用，于是乎脑洞大开决定自己弄一个，当然现在还不是很完善。o(*////▽////*)q

---

使用方法

``` bash
git clone https://github.com/Alleysakura/munin-moe
cd munin-moe
npm install
```

本品基于vue与express，如需定制，请查阅相关文档。

默认是`/status/`目录下，如果您想更改路径，可以去app.js与server.js里更改路由。
默认使用了`eth0` `netstat` `memory` `cpu` 的日监控图表，如需定制，在`/client/index.js`里进行定制修改。

#### Debian/Ubuntu
``` bash
cd ./server/public/static/status
rm -f ./*.png
ln -s /var/cache/munin/www/youdominpath/cpu-day.png cpu-day.png
ln -s /var/cache/munin/www/youdominpath/netstat-day.png netstat-day.png
ln -s /var/cache/munin/www/youdominpath/if_eth0-day.png if_eth0-day.png
ln -s /var/cache/munin/www/youdominpath/memory-day.png memory-day.png
cd ../../../../
npm run build && npm start
```
#### Centos
``` bash
cd ./server/public/static/status
rm -f ./*.png
ln -s /var/www/html/munin/youdominpath/cpu-day.png cpu-day.png
ln -s /var/www/html/munin/www/youdominpath/netstat-day.png netstat-day.png
ln -s /var/www/html/munin/www/youdominpath/if_eth0-day.png if_eth0-day.png
ln -s /var/www/html/munin/youdominpath/memory-day.png memory-day.png
cd ../../../../
npm run build && npm start
```

---


### 下一版目标：

 + 模板配置文件
 + 更方便使用
 + 一键部署脚本

#### 欢迎发pr哟φ(≧ω≦*)♪
---

MIT license
