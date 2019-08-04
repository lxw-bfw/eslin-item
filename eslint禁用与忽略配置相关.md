###### 8.eslint禁用相关

> ESLint提供了多种临时禁用规则的方式，比如我们可以通过一条eslint-disable-next-line备注来使得下一行可以跳过检查：

1. 关闭下一行校验
```
// eslint-disable-next-line
var a = 123;
var b = 456;
```

>在上面的示例代码中，var a = 123不会受到检查，而var b = 456则又恢复检查，在上文我们使用的eslint-config-lei的配置规则下，由于不允许使用var声明变量，则var b这一行会报告一个error。
我们还可以通过成对的eslint-enable和eslint-disable备注来禁用对某一段代码的检查，但是稍不小心少写了一个eslint-disable就可能会导致后面所有文件的检查都被禁用，所以我并不推荐使用。

2. 关闭段落校验
```
/* eslint-disable */
some code......
...
...
/* eslint-enable  */
下面的代码重新开启校验

```

3. 关闭当前行校验

```
some code // eslint-disable-line
```

4. [忽略特定文件或目录](https://zhuanlan.zhihu.com/p/37918096)

- .eslintignore文件
- 文件路径规则：
```
例如，以下将忽略所有的 JavaScript 文件：
**/*.js
以 # 开头的行被当作注释，不影响忽略模式。
路径是相对于 .eslintignore 的位置或当前工作目录。
忽略模式同 .gitignore 规范
以 ! 开头的行是否定模式，它将会重新包含一个之前被忽略的模式。
```

例子：

```
 node_modules/* 
 **/vendor/*.js 
```

如果.eslintignore未找到文件并且未指定备用文件，ESLint将在package.json中查找eslintIgnore密钥以检查要忽略的文件。

```
{
  "name": "mypackage",
  "version": "0.0.1",
  "eslintConfig": {
      "env": {
          "browser": true,
          "node": true
      }
  },
  "eslintIgnore": ["hello.js", "world.js"]}
```
