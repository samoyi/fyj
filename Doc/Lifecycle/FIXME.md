# FIXME List

## 使用方法
 * 从一开始就建立独立的 FIXME List ，每一项 FIXME 都进行记录
 * 在正式上线前检查 FIXME List，保证上面没有影响使用的项目。
 * 修改的项目不能删除，只能标记完成


## 优先级管理
* 错误：功能无法正常使用
* 安全：存在安全漏洞
* 视觉：影响视觉体验，但不影响功能，同时不明显影响使用效率
* 效率：产品设计逻辑不良、视觉设计混乱以及程序效率低下导致的用户使用效率降低
* 维护：增加维护成本,增加错误风险

## 列表
优先级 | 内容 | 不修改的影响 | 最晚修改期限 | 修改完成日期 | 原因、解决方法或备注
--|--|--|--|--|--|--
1 | 维护 |使用压缩时，命令行会出现如下错误 `ERROR in bundle.js from UglifyJs Unexpected token: punc (() [bundle.js:10843,8]` 但网页运行时正常 | | -- ||
2 | 维护 | 通过`import Vue from "Vue";`直接引用时命令行出现错误，网页也有如下错误`vue.runtime.esm.js:430 [Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.`。 整理该问题|  | -- | 6.28 | https://zhuanlan.zhihu.com/p/22115243
3 | 维护 | 只在main.js里加严格模式，是否可以影响全局？ ||||
4 | 维护 | 在其他地方加载模块模块时，路径前面必须要有`./`，但是main.js中加载vue时，则不能有 ||||
5 | 维护 | 我在common.scss中定义了一些通用的变量，每个vue文件中需要使用这些变量时都要单独import，有没有只引用一遍的方法 ||||
6 | 维护 | 首页新品模块的vue文件中，为了修改子组件的样式，没有使用scoped | 有可能和其他样式冲突 | | 6.30 | scss的最外层节点采用语义明确的ID命名，降低冲突的可能性
7 | 维护 | 有些解析后的JSON数据是数组，但命名变量时用了oParsed ||||
8 | 维护 | 在数据插值是，用了后端的键名。有些键名不规范，且存在变动的可能。应该在解析之后先转换为自定义的键名 ||||
9 | 维护 | 新增地址时遇到的不能立刻编译导致新加地址不能删除的情况。暂时的解决方法是，比如实际只有两个收货地址，则让数据收货地址数组的第三项为null，让数据有三项，但只渲染非null的。在新加地址后，将null变为地址数据。这样处理，看起来即使是null也进行了编译，但没有渲染，所以从null改为具体的数据后，其上绑定的点击处理程序可以立刻使用 | | | | [解决方法](https://github.com/samoyi/VueStudy/issues/8)
