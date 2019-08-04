1. 手动检查、修正--命令方式
cmd:
```
.\node_modules\.bin\eslint file 
.\node_modules\.bin\eslint file  --fix
```
2. vscode下自动检查、修正
  2.1 [vscode保存、自动按照eslint规范格式化代码设置](https://www.haorooms.com/post/vscode_eslint)
  2.2 本质还是eslint 的脚本命令，只是基于vscode的eslint插件，以及一些相关配置实现eslint命令的自动化。如果脚本命令正常，说明我们安装的eslint依赖等是没有问题的。但是vscode的eslint插件无效。那么此时看看控制台输出eslint选项报什么错误。有没有可能是vscode的eslint插件执行的是全局的eslint命令，但是我们是本地安装eslint，所以相关npm包也只是本地安装。导致的失败。或者是vscode插件、配置的问题。
  2.3 核心是：根据你的eslint配置文件，不同配置文件它依赖的插件是不同的，比如你采用第三方的规则包，那么你肯定需要安装相关的依赖包，对这些规则进行解析。比如你在配置文件里面的plugin选项里面包含一些其他需要的插件，那么你的项目肯定需要安装这些依赖包。而依赖包的安装就会有本地与全局安装问题。看你的eslint是本地安装还是全局安装。而vscode的eslint插件是自动化的根据你的eslint配置文件去执行命令，如果本地安装了依赖还是报依赖找不到，那么应该是vscode的eslitn插件执行的是全局eslint命令。你需要全局安装控制台报错的这些依赖。
