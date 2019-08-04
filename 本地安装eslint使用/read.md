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