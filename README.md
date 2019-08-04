# eslin-item
### ESLint属于一种QA工具，是一个ECMAScript/JavaScript语法规则和代码风格的检查工具，可以用来保证写出语法正确、风格统一的代码。


##### 1. eslint的安装与使用
##### 2. eslint的所有配置
##### 3. eslint官方文档：eslint的一些常用的规则
##### 4. 实践，选取一套好的基础规则，再自己配置一些符合自己风格的规则。

[推荐归纳](https://juejin.im/post/5b9cb8b0f265da0ae343e3c0)
[推荐归纳](https://blog.ironmaxi.com/Technique/Lint/eslint/)
[link](https://juejin.im/post/5bab946cf265da0ae92a75ca#heading-0)
[中文文档--很详细真的](http://eslint.cn/)
[不错配置介绍](https://www.404forest.com/2017/05/24/practice-strict-code-style-check/)

本地安装执行命令：
```
./node_modules/.bin/eslint --init
./node_modules/.bin/eslint index.js
```

总结一下本地安装eslint的问题：
1. vscode的终端问题：切换cmd终端来执行npm或者色cnpm命令，否则可能会失败。./xxxx无法在win的cmd执行，需要改成反斜杠。.\xxx
2. eslint命令无效：混淆使用了全局的eslint命令，依赖的相关包也需要本地安装，否则命令的解析等功能失效
3. 应该正确使用的命令：记住./node_modules/.bin/eslint是命令，file是当前文件目录下的文件。
cmd:
```
.\node_modules\.bin\eslint file 
.\node_modules\.bin\eslint file  --fix
```

全局安装：

<ul>
<li>全局安装之后，可以直接使用 <code>eslint</code> 指令，而不用添加路径。</li>
<li><strong>但是!</strong> 由于是全局指令，那么配置文件里面的依赖也要求是全局安装才行。相应地，运行本地指令时，配置文件里面的依赖也要相应的安装在本地。</li>
</ul>

[eslint rule选项](eslint.cn/docs/rules/)
eslint的自定义规则
```
rules: {
    "eqeqeq": "warn",
    //你也可以使用对应的数字定义规则严重程度
    "curly": 2,
    //如果某条规则有额外的选项，你可以使用数组字面量指定它们
    //选项可以是字符串，也可以是对象
    "quotes": ["error", "double"],
    "one-var": ["error", {
      "var": "always",
      "let": "never",
      "const": "never"
    }],
}
```

vscode eslint自动校验、保存自动根据配置的eslint规则格式化代码
[link]([vscode保存、自动按照eslint规范格式化代码设置](https://www.haorooms.com/post/vscode_eslint))
[link](https://www.jianshu.com/p/69bfcb95b8d7)

###### 困扰我的vscode无法自动检测、保存后自动按照eslint自己定义的规则格式化代码的问题解决了

解决方案：

1. 关键看下面控制台输出（vscode eslint插件的报错信息）
<img src='https://note.youdao.com/yws/api/personal/file/1095CFDB07874BEAB0487ECC865683AB?method=download&shareKey=2bab3b762975d1dd8aed53766f71ce92'>

2. 信息说的很清楚，vscode使用自己的eslint扩展插件去按照你的eslint配置文件自动化检测代码、格式化代码的时候Cannot find module 'eslint-plugin-import'。eslint-plugin-import要么没有装这个插件，如果本地装了，还是这样应该就是与全局eslint有关，应该全局去安装这个插件。
