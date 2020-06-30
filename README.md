### 解决react不支持装饰器@ 符号的问题， 在删除node_modules后，必须 再次执行：
```
    找到 create.js  路径如下 '项目名\node_modules\babel-preset-react-app' 下 create.js 
     跳转到146行 ，将false 改为{legacy:true}, 即可
```