[link]([vscode保存、自动按照eslint规范格式化代码设置](https://www.haorooms.com/post/vscode_eslint))
[link](https://www.jianshu.com/p/69bfcb95b8d7)

###### 困扰我的vscode无法自动检测、保存后自动按照eslint自己定义的规则格式化代码的问题解决了

解决方案：

1. 关键看下面控制台输出（vscode eslint插件的报错信息）
<img src='https://note.youdao.com/yws/api/personal/file/1095CFDB07874BEAB0487ECC865683AB?method=download&shareKey=2bab3b762975d1dd8aed53766f71ce92'>

2. 信息说的很清楚，vscode使用自己的eslint扩展插件去按照你的eslint配置文件自动化检测代码、格式化代码的时候Cannot find module 'eslint-plugin-import'。eslint-plugin-import要么没有装这个插件，如果本地装了，还是这样应该就是与全局eslint有关，应该全局去安装这个插件。