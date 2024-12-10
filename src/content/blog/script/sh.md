---
title: "脚本"
description: ""
date: 2024-03-19
tags: ["sh"]
---

### 基本语法
* #!告诉系统这个脚本需要什么解释器来执行
* Shell 变量分为系统变量和自定义变量。系统变量有$HOME、$PWD、$USER等，显示当前 Shell 中所有变量：set
* 定义变量：变量名=变量值，等号两侧不能有空格，变量名一般习惯用大写。
* 删除变量：unset 变量名 。
* 声明静态变量：readonly 变量名，静态变量不能unset。
* 使用变量：$变量名
* 将命令返回值赋给变量（重点）
```sh
A=`ls` 反引号,执行里面的命令
A=$(ls) 等价于反引号
```
* export 变量名=变量值，将 Shell 变量输出为环境变量。
* source 配置文件路径，让修改后的配置信息立即生效。
* echo $变量名，检查环境变量是否生效
* $n ：$0 代表命令本身、$1-$9 代表第1到9个参数，10以上参数用花括号，如 ${10}。
* $* ：命令行中所有参数，且把所有参数看成一个整体。
* $@ ：命令行中所有参数，且把每个参数区分对待。
* $# ：所有参数个数。
* $$ ：当前进程的 PID 进程号。
* $! ：后台运行的最后一个进程的 PID 进程号。
* $? ：最后一次执行的命令的返回状态，0为执行正确，非0执行失败。
* $((运算式)) 或 $[运算式] expr m + n 注意 expr 运算符间要有空格
* 条件判断[ condition ] 注意condition前后要有空格。非空返回0，0为 true，否则为 false 
```sh
#!/bin/bash 
if [ 'test01' = 'test' ] 
then
     echo '等于' 
fi  

# 20是否大于10 
if [ 20 -gt 10] 
then
     echo '大于' 
fi  

# 是否存在文件/root/shell/a.txt 
if [ -e /root/shell/a.txt ] 
then
     echo '存在' 
fi  

if [ 'test02' = 'test02' ] && echo 'hello' || echo 'world' 
then
     echo '条件满足，执行后面的语句' 
fi

case $变量名 in
"值1")
如果变量值等于值1，则执行此处程序1
;;
"值2")
如果变量值等于值2，则执行此处程序2
;;
...省略其它分支...
*)
如果变量值不等于以上列出的值，则执行此处程序
;;
esac
```
* 循环
```sh
# 语法1
for 变量名 in 值1 值2 值3...
do
    程序
done

# 语法2
for ((初始值;循环控制条件;变量变化))
do
    程序
done

#!/bin/bash  

# 使用$* 
for i in "$*" 
do     
    echo "the arg is $i" 
done 
echo "=================="  

# 使用$@ 
for j in "$@" 
do     
    echo "the arg is $j" 
done

while [ 条件判断式 ]
do
    程序
done 
```
* 读取控制台输入 read(选项)(参数)
 -p：指定读取值时的提示符
 -t：指定读取值时等待的时间（秒），如果没有在指定时间内输入，就不再等待了。

* 函数 basename [pathname] [suffix], basename [string] [suffix], 如果指定 suffix，也会删掉pathname或string的后缀部分。
```
# basename /usr/bin/sort  
sort  

# basename include/stdio.h  
stdio.h  

# basename include/stdio.h .h 
stdio
```
* dirname，删掉路径最后一个 / 后的所有部分（包括/），常用于获取文件路径。
* 自定义函数
```sh
[ function ] funname[()]
{
    Action;
    [return int;]
}

# 调用
funname 参数1 参数2...
function getSum(){
    SUM=$[$n1+$n2]
    echo "sum=$SUM"
}   

```
### 运行
```
chmod +x test.sh 
./test.sh
```
