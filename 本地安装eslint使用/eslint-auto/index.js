(function() {
  function app() {
    const way = {
      version: '1.0.0',
      name: 'eslint',
      run() {
        console.log('------ \n 忽略eslint检测 \n ------')
      }
    }
  }
  app.way.run()

  // 关闭下一行的校验
  // eslint-disable-next-line
   var a = 1;
  var b = 1024

  //  关闭段落的检测

  /* eslint-disable */
        var c = `${a}+${10}`;
        var str = '这两行关闭eslint检验'
  /* eslint-enable  */

  var e = 'global'
})()
