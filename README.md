# eslin-item
### ESLint属于一种QA工具，是一个ECMAScript/JavaScript语法规则和代码风格的检查工具，可以用来保证写出语法正确、风格统一的代码。


##### 1. eslint的安装、根据自己的需求进行配置
##### 2. eslint的使用
 ###### 2.1 eslint命令行
 ###### 2.2 配置vscode自动化校验、保存自动格式化
##### 3. eslint官方文档
##### 4. 实践，选取一套好的eslint规则，再加上自己的配置，配置一套符合自己风格的规则。
##### 5. 参考教程网站分享

[推荐归纳](https://juejin.im/post/5b9cb8b0f265da0ae343e3c0)
[推荐归纳](https://blog.ironmaxi.com/Technique/Lint/eslint/)
[link](https://juejin.im/post/5bab946cf265da0ae92a75ca#heading-0)
[中文文档--很详细真的](http://eslint.cn/)
[不错配置介绍](https://www.404forest.com/2017/05/24/practice-strict-code-style-check/)


##### eslint的安装、根据自己的需求进行配置
 ###### 1. eslint命令行

- 本地安装：

执行命令
```
npm i eslint --save-dev
```


- 全局安装：
···
npm i eslint --global
···

<ul>
<li>全局安装之后，可以直接使用 <code>eslint</code> 指令，而不用添加路径。</li>
<li><strong>但是!</strong> 由于是全局指令，那么配置文件里面的依赖也要求是全局安装才行。相应地，运行本地指令时，配置文件里面的依赖也要相应的安装在本地。</li>
</ul>

- 根据自己的需求进行配置

配置关键是配置文件：<b>.eslintrc.js</b>
弄清除配置文件里面的相关配置参数，根据自己的需要进行配置。推荐看中文文档
[配置文件参考](https://link.juejin.im/?target=https%3A%2F%2Fgist.github.com%2Frswanderer%2F29dc65efc421b3b5b0442f1bd3dcd046)

##### eslint的使用

- 手动执行eslint命令

```
本地安装的话：
./node_modules/.bin/eslint --init // 初始化、创建eslint配置文件、根据指引安装相关依赖包
./node_modules/.bin/eslint index.js // 校验index.js文件
./node_modules/.bin/eslint index.js --fix// 修复index.js文件

全局安装的话：
eslint index.js
eslint index.js --fix
```
总结这过程可能会出现的问题：
1. vscode的终端问题：切换cmd终端来执行npm或者色cnpm命令，否则可能会失败。./xxxx无法在win的cmd执行，需要改成反斜杠。.\xxx
2. eslint命令无效：混淆使用了全局的eslint命令，依赖的相关包也需要本地安装，否则命令的解析等功能失效
3. 应该正确使用的命令：记住./node_modules/.bin/eslint是命令，file是当前文件目录下的文件。
cmd下:
```
.\node_modules\.bin\eslint file 
.\node_modules\.bin\eslint file  --fix
```

###### 2. 配置vscode自动化校验、保存自动格式化

- 创建eslint项目
###### ps:注意是全局安装还是本地安装，相关依赖npm插件要全部安装好
- vscode下载扩展插件：Eslint、Vetur
- vscode修改用户设置文件
```
"files.autoSave": "off",
    "breadcrumbs.enabled": true,
    "eslint.autoFixOnSave": true, //  启用保存时自动修复,默认只支持.js文件
    "eslint.validate": [
        "javascript", //  用eslint的规则检测js文件
        {
            "language": "vue", // 检测vue文件
            "autoFix": true //  为vue文件开启保存自动修复的功能
        },
        {
            "language": "html",
            "autoFix": true
        },
    ],
```
- 如果还是无效的话：建议看下面控制台输出（vscode eslint插件的报错信息）
<img src='https://note.youdao.com/yws/api/personal/file/1095CFDB07874BEAB0487ECC865683AB?method=download&shareKey=2bab3b762975d1dd8aed53766f71ce92'>
上面信息说的很清楚，Cannot find module 'eslint-plugin-import'。eslint-plugin-import要么没有装这个插件，如果本地装了，可能全局eslint命令有关，尝试全局去安装这个插件。

##### [eslint中文文档](http://eslint.cn/)
- 建议去看看，里面介绍的很详细

#####  实践，选取一套好的eslint规则，再加上自己的配置，配置一套符合自己风格的规则。

- 建议还可以把配置规则共享出来，共享方法如下：

1. 新建一个文件比如eslint-config-public.js，在文件内容添加一两个规则
```
module.exports = {
extends: 'eslint:recommended',
env: {
node: true,
},
rules: {
'no-console': 'off',
'indent': [ 'error', 4 ],
'quotes': [ 'error', 'single' ],
},
};

```
2. 然后将原来的.eslintrc.js文件改成这样：
```
module.exports = {
  extends: './eslint-config-public.js',};
```

##### 参考教程网站分享

[推荐归纳](https://juejin.im/post/5b9cb8b0f265da0ae343e3c0)
[推荐归纳](https://blog.ironmaxi.com/Technique/Lint/eslint/)
[link](https://juejin.im/post/5bab946cf265da0ae92a75ca#heading-0)
[中文文档--很详细真的](http://eslint.cn/)
[不错配置介绍](https://www.404forest.com/2017/05/24/practice-strict-code-style-check/)
[vscode保存、自动按照eslint规范格式化代码设置](https://www.haorooms.com/post/vscode_eslint))
[link](https://www.jianshu.com/p/69bfcb95b8d7)


