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
--|--|--|--|--|
维护 |使用压缩时，命令行会出现如下错误 `ERROR in bundle.js from UglifyJs Unexpected token: punc (() [bundle.js:10843,8]` 但网页运行时正常 | | -- ||
维护 | 通过`import Vue from "Vue";`直接引用时命令行出现错误，网页也有如下错误`vue.runtime.esm.js:430 [Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.`。 整理该问题|  | -- | 6.28 | https://zhuanlan.zhihu.com/p/22115243
