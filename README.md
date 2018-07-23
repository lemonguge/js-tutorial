# JavaScript tutorial

---

网景开发了JavaScript，一年后微软又模仿JavaScript开发了JScript，为了让JavaScript成为全球标准，几个公司联合ECMA（European Computer Manufacturers Association）组织定制了JavaScript语言的标准，被称为ECMAScript标准。

> ECMAScript是一种语言标准，而JavaScript是网景公司对ECMAScript标准的一种实现。

由于JavaScript的标准——ECMAScript在不断发展，最新版ECMAScript 6标准（简称ES6）已经在2015年6月正式发布了。不过JavaScript的核心语法并没有多大变化，会先讲JavaScript最核心的用法，然后针对ES6讲解新增特性。

## 入门

JavaScript代码可以直接嵌在网页的任何地方，不过通常我们都把JavaScript代码放到`<head>`中：

    <html>
        <head>
            <script>
                alert('Hello, world');
            </script>
        </head>
        <body>
            JavaScript Tutorial
        </body>
    </html>

由`<script>...</script>`包含的代码就是JavaScript代码，它将直接被浏览器执行。

第二种方法是把JavaScript代码放到一个单独的`.js`文件，然后在HTML中通过`<script src="..."></script>`引入这个文件：

    <html>
        <head>
            <script src="/static/js/abc.js"></script>
        </head>
        <body>
            JavaScript Tutorial
        </body>
    </html>

这样`/static/js/abc.js`就会被浏览器执行。

把JavaScript代码放入一个单独的`.js`文件中更利于维护代码，并且多个页面可以各自引用同一份`.js`文件。

可以在同一个页面中引入多个`.js`文件，还可以在页面中多次编写`<script> js代码... </script>`，浏览器按照顺序依次执行。

有些时候你会看到`<script>`标签还设置了一个`type`属性：

    <script type="text/javascript">
        ...
    </script>

但这是没有必要的，因为默认的`type`就是JavaScript，所以不必显式地把`type`指定为`text/JavaScript`。

### 基本语法

JavaScript的语法和Java语言类似，每个语句以`;`结束，语句块用`{...}`。但是JavaScript并不强制要求在每个语句的结尾加`;`，浏览器中负责执行JavaScript代码的引擎会自动在每个语句的结尾补上`;`。

> 自动加分号在某些情况下会改变程序的语义，导致运行结果与期望不一致，建议所有语句都会添加`;`。

    // 这是行注释
    // 下面的一行代码就是一个完整的赋值语句
    var x = 1;
    // 下面的一行代码是一个字符串，但仍然可以视为一个完整的语句
    'Hello, world';
    var m = 1; var n = 2; // 不建议一行写多个语句
    // 语句块是一组语句的集合，下面判断条件成立，将执行{...}中的所有语句
    if (2 > 1) {
        x = 1;
        y = 2;
        z = 3;
    }
    // {...}还可以嵌套，形成层级结构
    if (2 > 1) {
        x = 1;
        y = 2;
        z = 3;
        if (x < y) {
            z = 4;
        }
        if (x > y) {
            z = 5;
        }
    }
    /* 从这里开始是块注释
    仍然是注释
    仍然是注释
    注释结束 */

> 缩进通常是4个空格，不是JavaScript语法要求必须的，但缩进有助于我们理解代码的层次。

### 数据类型和变量

不同的数据，需要定义不同的数据类型。在JavaScript中定义了以下几种数据类型：

#### Number

JavaScript不区分整数和浮点数，统一用Number表示，以下都是合法的Number类型：

    123; // 整数123
    0.456; // 浮点数0.456
    1.2345e3; // 科学计数法表示1.2345x1000，等同于1234.5
    -99; // 负数
    NaN; // NaN表示Not a Number，当无法计算结果时用NaN表示
    Infinity; // Infinity表示无限大，当数值超过了JavaScript的Number所能表示的最大值时，就表示为Infinity
    0xff00; // 十六进制表示

Number可以直接做四则运算，规则和数学一致：

    1 + 2; // 3
    (1 + 2) * 5 / 2; // 7.5
    2 / 0; // Infinity
    0 / 0; // NaN
    10 % 3; // 1
    10.5 % 3; // 1.5

#### 字符串

字符串是以单引号`'`或双引号`"`括起来的任意文本，比如`'abc'`，`"xyz"`等等。请注意，`''`或`""`本身只是一种表示方式，不是字符串的一部分，因此，字符串`'abc'`只有`a`，`b`，`c`这3个字符。

如果字符串内部既包含`'`又包含`"`怎么办？可以用转义字符`\`来标识，比如：

    'I\'m \"OK\"!';

表示的字符串内容是：`I'm "OK"!`

转义字符`\`可以转义很多字符，比如`\n`表示换行，`\t`表示制表符，字符`\`本身也要转义，所以`\\`表示的字符就是`\`。

ASCII字符可以以`\x##`形式的十六进制表示，例如：

    '\x41'; // 完全等同于 'A'

由于多行字符串用`\n`写起来比较费事，所以最新的ES6标准新增了一种多行字符串的表示方法，用反引号<code>&#96;...&#96;</code>表示：

    `这是一个
    多行
    字符串`;

要把多个字符串连接起来，可以用`+`号连接：

    var name = '小明';
    var age = 20;
    var message = '你好, ' + name + ', 你今年' + age + '岁了!';
    console.log(message);

如果有很多变量需要连接，用`+`号就比较麻烦。ES6新增了一种模板字符串，表示方法和上面的多行字符串一样，但是它会自动替换字符串中的变量：

    var name = '小明';
    var age = 20;
    var message = `你好, ${name}, 你今年${age}岁了!`;
    console.log(message);

字符串常见的操作如下：

    var s = 'Hello, world!';
    s.length; // 13

要获取字符串某个指定位置的字符，使用类似Array的下标操作，索引号从0开始：

    var s = 'Hello, world!';
    
    s[0]; // 'H'
    s[6]; // ' '
    s[7]; // 'w'
    s[12]; // '!'
    s[13]; // undefined 超出范围的索引不会报错，但一律返回undefined

需要特别注意的是，字符串是不可变的，如果对字符串的某个索引赋值，不会有任何错误，但是也没有任何效果：

    var s = 'Test';
    s[0] = 'X';
    console.log(s); // s仍然为'Test'

JavaScript为字符串提供了一些常用方法，注意，调用这些方法本身不会改变原有字符串的内容，而是返回一个新字符串：

`toUpperCase()`把一个字符串全部变为大写：

    var s = 'Hello';
    s.toUpperCase(); // 返回'HELLO'

`toLowerCase()`把一个字符串全部变为小写：

    var s = 'Hello';
    var lower = s.toLowerCase(); // 返回'hello'并赋值给变量lower
    lower; // 'hello'

`indexOf()`会搜索指定字符串出现的位置：

    var s = 'hello, world';
    s.indexOf('world'); // 返回7
    s.indexOf('World'); // 没有找到指定的子串，返回-1

`substring()`返回指定索引区间的子串：

    var s = 'hello, world'
    s.substring(0, 5); // 从索引0开始到5（不包括5），返回'hello'
    s.substring(7); // 从索引7开始到结束，返回'world'

#### 布尔值

一个布尔值只有`true`、`false`两种值，要么是`true`，要么是`false`。可以直接用`true`、`false`表示布尔值，也可以通过布尔运算计算出来：

    true; // 这是一个true值
    false; // 这是一个false值
    2 > 1; // 这是一个true值
    2 >= 3; // 这是一个false值

`&&`运算是与运算，只有所有都为`true`，`&&`运算结果才是`true`：

    true && true; // 这个&&语句计算结果为true
    true && false; // 这个&&语句计算结果为false
    false && true && false; // 这个&&语句计算结果为false

`||`运算是或运算，只要其中有一个为`true`，`||`运算结果就是`true`：

    false || false; // 这个||语句计算结果为false
    true || false; // 这个||语句计算结果为true
    false || true || false; // 这个||语句计算结果为true

`!`运算是非运算，它是一个单目运算符，把`true`变成`false`，`false`变成`true`：

    ! true; // 结果为false
    ! false; // 结果为true
    ! (2 > 5); // 结果为true

下面是逻辑运算符的说明：

|运算符|示例|说明|
| --- | --- | --- |
|`&&`|`expr1 && expr2`|如果`expr1`能转换成`false`则返回`expr1`，否则返回`expr2`。|
|<code>&#124;&#124;</code>|<code>expr1 &#124;&#124; expr2</code>|如果`expr1`能转换成`true`则返回`expr1`，否则返回`expr2`。|
|`！`|`!expr`|如果`expr`能转换为`true`，返回`false`；如果`expr`能转换为`false`，则返回`true`。|

能够转换为`false`的表达式有：

 - `null`
 - `NaN`
 - `0`
 - 空字符串（`""`）
 - `undefined`

#### 比较运算符

当我们对Number做比较时，可以通过比较运算符得到一个布尔值：

    2 > 5; // false
    5 >= 2; // true
    7 == 7; // true

实际上JavaScript允许对任意数据类型做比较：

    false == 0; // true
    false === 0; // false

要特别注意相等运算符`==`。JavaScript在设计时，有两种比较运算符：

第一种是`==`比较，它会自动转换数据类型再比较，很多时候，会得到非常诡异的结果；

第二种是`===`比较，它不会自动转换数据类型，如果数据类型不一致，返回`false`，如果一致，再比较。

> 由于JavaScript的设计缺陷，不要使用`==`比较，始终坚持使用`===`比较。

另一个例外是`NaN`这个特殊的Number与所有其他值都不相等，包括它自己：

    NaN === NaN; // false

唯一能判断NaN的方法是通过`isNaN()`函数：

    isNaN(NaN); // true

最后要注意浮点数的相等比较：

    1 / 3 === (1 - 2 / 3); // false

这不是JavaScript的设计缺陷。浮点数在运算过程中会产生误差，因为计算机无法精确表示无限循环小数。要比较两个浮点数是否相等，只能计算它们之差的绝对值，看是否小于某个阈值：

    Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001; // true

#### null和undefined

`null`表示一个“空”的值，它和`0`以及空字符串`''`不同，`0`是一个数值，`''`表示长度为0的字符串，而`null`表示“空”。

在其他语言中，也有类似JavaScript的`null`的表示，例如Java也用`null`，Swift用`nil`，Python用`None`表示。但是在JavaScript中，还有一个和`null`类似的`undefined`，它表示“未定义”。

JavaScript的设计者希望用`null`表示一个空的值，而`undefined`表示值未定义。事实证明，这并没有什么卵用，区分两者的意义不大。大多数情况下，我们都应该用`null`。`undefined`仅仅在判断函数参数是否传递的情况下有用。

#### 数组

数组是一组按顺序排列的集合，集合的每个值称为元素。JavaScript的数组可以包括任意数据类型。例如：

    [1, 2, 3.14, 'Hello', null, true];

上述数组包含6个元素。数组用`[]`表示，元素之间用`,`分隔。

另一种创建数组的方法是通过`Array()`函数实现：

    new Array(1, 2, 3); // 创建了数组[1, 2, 3]

然而，出于代码的可读性考虑，强烈建议直接使用`[]`。

数组的元素可以通过索引来访问。请注意，索引的起始值为`0`：

    var arr = [1, 2, 3.14, 'Hello', null, true];
    arr[0]; // 返回索引为0的元素，即1
    arr[5]; // 返回索引为5的元素，即true
    arr[6]; // 索引超出了范围，返回undefined

要取得`Array`的长度，直接访问`length`属性：

    var arr = [1, 2, 3.14, 'Hello', null, true];
    arr.length; // 6

直接给`Array`的`length`赋一个新的值会导致`Array`大小的变化：

    var arr = [1, 2, 3];
    arr.length; // 3
    arr.length = 6;
    arr; // arr变为[1, 2, 3, undefined, undefined, undefined]
    arr.length = 2;
    arr; // arr变为[1, 2]

`Array`可以通过索引把对应的元素修改为新的值，因此，对`Array`的索引进行赋值会直接修改这个`Array`：

    var arr = ['A', 'B', 'C'];
    arr[1] = 99;
    arr; // arr现在变为['A', 99, 'C']

如果通过索引赋值时，索引超过了范围，同样会引起`Array`大小的变化：

    var arr = [1, 2, 3];
    arr[5] = 'x';
    arr; // arr变为[1, 2, 3, undefined, undefined, 'x']

> 在编写代码时，不建议直接修改`Array`的大小，访问索引时要确保索引不会越界。

与String类似，`Array`也可以通过`indexOf()`来搜索一个指定的元素的位置：

    var arr = [10, 20, '30', 'xyz'];
    arr.indexOf(10); // 元素10的索引为0
    arr.indexOf(20); // 元素20的索引为1
    arr.indexOf(30); // 元素30没有找到，返回-1
    arr.indexOf('30'); // 元素'30'的索引为2

`slice()`就是对应String的`substring()`版本，它截取`Array`的部分元素，然后返回一个新的`Array`：

    var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    arr.slice(0, 3); // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
    arr.slice(3); // 从索引3开始到结束: ['D', 'E', 'F', 'G']

如果不给`slice()`传递任何参数，它就会从头到尾截取所有元素。利用这一点，我们可以很容易地复制一个`Array`：

    var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    var aCopy = arr.slice();
    aCopy; // ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    aCopy === arr; // false

`push()`向`Array`的末尾添加若干元素，`pop()`则把`Array`的最后一个元素删除掉：

    var arr = [1, 2];
    arr.push('A', 'B'); // 返回Array新的长度: 4
    arr; // [1, 2, 'A', 'B']
    arr.pop(); // pop()返回'B'
    arr; // [1, 2, 'A']
    arr.pop(); arr.pop(); arr.pop(); // 连续pop 3次
    arr; // []
    arr.pop(); // 空数组继续pop不会报错，而是返回undefined
    arr; // []

如果要往`Array`的头部添加若干元素，使用`unshift()`方法，`shift()`方法则把Array的第一个元素删掉：

    var arr = [1, 2];
    arr.unshift('A', 'B'); // 返回Array新的长度: 4
    arr; // ['A', 'B', 1, 2]
    arr.shift(); // 'A'
    arr; // ['B', 1, 2]
    arr.shift(); arr.shift(); arr.shift(); // 连续shift 3次
    arr; // []
    arr.shift(); // 空数组继续shift不会报错，而是返回undefined
    arr; // []

`sort()`可以对当前`Array`进行排序，它会直接修改当前`Array`的元素位置，直接调用时，按照默认顺序排序：

    var arr = ['B', 'C', 'A'];
    arr.sort();
    arr; // ['A', 'B', 'C']

`reverse()`把整个`Array`的元素反转：

    var arr = ['one', 'two', 'three'];
    arr.reverse(); 
    arr; // ['three', 'two', 'one']

`splice()`方法是修改`Array`的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素：

    var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
    // 从索引2开始删除3个元素,然后再添加两个元素:
    arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
    arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
    // 只删除,不添加:
    arr.splice(2, 2); // ['Google', 'Facebook']
    arr; // ['Microsoft', 'Apple', 'Oracle']
    // 只添加,不删除:
    arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
    arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']

`concat()`方法把当前的`Array`和另一个`Array`连接起来，并返回一个新的`Array`：

    var arr = ['A', 'B', 'C'];
    var added = arr.concat([1, 2, 3]);
    added; // ['A', 'B', 'C', 1, 2, 3]
    arr; // ['A', 'B', 'C']

实际上，`concat()`方法可以接收任意个元素和`Array`，并且自动把`Array`拆开，然后全部添加到新的`Array`里：

    var arr = ['A', 'B', 'C'];
    arr.concat(1, 2, [3, 4]); // ['A', 'B', 'C', 1, 2, 3, 4]

`join()`方法是一个非常实用的方法，它把当前`Array`的每个元素都用指定的字符串连接起来，然后返回连接后的字符串：

    var arr = ['A', 'B', 'C', 1, 2, 3];
    arr.join('-'); // 'A-B-C-1-2-3'

如果`Array`的元素不是字符串，将自动转换为字符串后再连接。

如果数组的某个元素又是一个`Array`，则可以形成多维数组，例如：

    var arr = [[1, 2, 3], [400, 500, 600], '-'];

上述`Array`包含3个元素，其中头两个元素本身也是`Array`。

#### 对象

JavaScript的对象是一组由键-值组成的无序集合，例如：

    var person = {
        name: 'Bob',
        age: 20,
        tags: ['js', 'web', 'mobile'],
        city: 'Beijing',
        hasCar: true,
        zipcode: null
    };

JavaScript对象的键都是**字符串**类型，值可以是任意数据类型。上述`person`对象一共定义了6个键值对，其中每个键又称为对象的属性，例如，`person`的`name`属性为`'Bob'`，`zipcode`属性为`null`。

JavaScript用一个`{...}`表示一个对象，键值对以`xxx: xxx`形式申明，用`,`隔开。注意，最后一个键值对不需要在末尾加`,`，如果加了，有的浏览器（如低版本的IE）将报错。

要获取一个对象的属性，我们用`对象变量.属性名`的方式：

    person.name; // 'Bob'
    person.zipcode; // null

访问属性是通过`.`操作符完成的，但这要求属性名必须是一个有效的变量名。如果属性名包含特殊字符，就必须用`''`括起来：

    var xiaohong = {
        name: '小红',
        'middle-school': 'No.1 Middle School'
    };

`xiaohong`的属性名`middle-school`不是一个有效的变量，就需要用`''`括起来。访问这个属性也无法使用`.`操作符，必须用`['xxx']`来访问：

    xiaohong['middle-school']; // 'No.1 Middle School'
    xiaohong['name']; // '小红'
    xiaohong.name; // '小红'

> 在编写JavaScript代码的时候，属性名尽量使用标准的变量名，这样就可以直接通过`object.prop`的形式访问一个属性了。

JavaScript规定，访问不存在的属性不报错，而是返回`undefined`。

由于JavaScript的对象是动态类型，你可以自由地给一个对象添加或删除属性：

    var xiaoming = {
        name: '小明'
    };
    xiaoming.age; // undefined
    xiaoming.age = 18; // 新增一个age属性
    xiaoming.age; // 18
    delete xiaoming.age; // 删除age属性
    xiaoming.age; // undefined
    delete xiaoming['name']; // 删除name属性
    xiaoming.name; // undefined
    delete xiaoming.school; // 删除一个不存在的school属性也不会报错

如果我们要检测`xiaoming`是否拥有某一属性，可以用`in`操作符：

    var xiaoming = {
        name: '小明',
        birth: 1990,
        school: 'No.1 Middle School',
        height: 1.70,
        weight: 65,
        score: null
    };
    'name' in xiaoming; // true
    'grade' in xiaoming; // false

不过要小心，如果`in`判断一个属性存在，这个属性不一定是`xiaoming`的，它可能是`xiaoming`继承得到的：

    'toString' in xiaoming; // true

因为`toString`定义在`object`对象中，而所有对象最终都会在原型链上指向`object`，所以`xiaoming`也拥有`toString`属性。

要判断一个属性是否是`xiaoming`自身拥有的，而不是继承得到的，可以用`hasOwnProperty()`方法：

    var xiaoming = {
        name: '小明'
    };
    xiaoming.hasOwnProperty('name'); // true
    xiaoming.hasOwnProperty('toString'); // false

#### 变量

变量在JavaScript中就是用一个变量名表示，变量名是大小写英文、数字、`$`和`_`的组合，且不能用数字开头。变量名也不能是JavaScript的关键字，如`if`、`while`等。申明一个变量用`var`语句，比如：

    var a; // 申明了变量a，此时a的值为undefined
    var $b = 1; // 申明了变量$b，同时给$b赋值，此时$b的值为1
    var s_007 = '007'; // s_007是一个字符串
    var Answer = true; // Answer是一个布尔值true
    var t = null; // t的值是null

变量名也可以用中文，但是请不要给自己找麻烦。

在JavaScript中，使用等号`=`对变量进行赋值。可以把任意数据类型赋值给变量，同一个变量可以反复赋值，而且可以是不同类型的变量，但是要注意只能用`var`申明一次，例如：

    var a = 123; // a的值是整数123
    a = 'ABC'; // a变为字符串

这种变量本身类型不固定的语言称之为动态语言，与之对应的是静态语言。静态语言在定义变量时必须指定变量类型，如果赋值的时候类型不匹配就会报错。和静态语言相比，动态语言更灵活。

#### strict模式

JavaScript在设计之初，为了方便初学者学习，并不强制要求用`var`申明变量。这个设计错误带来了严重的后果：如果一个变量没有通过`var`申明就被使用，那么该变量就自动被申明为全局变量：

    i = 10; // i现在是全局变量

在同一个页面的不同的JavaScript文件中，如果都不用`var`申明，恰好都使用了变量`i`，将造成变量`i`互相影响，产生难以调试的错误结果。

使用`var`申明的变量则不是全局变量，它的范围被限制在该变量被申明的函数体内（函数的概念将稍后讲解），同名变量在不同的函数体内互不冲突。

为了修补JavaScript这一严重设计缺陷，ECMA在后续规范中推出了strict模式，在strict模式下运行的JavaScript代码，强制通过`var`申明变量，未使用`var`申明变量就使用的，将导致运行错误。

启用strict模式的方法是在JavaScript代码的第一行写上：

> 'use strict';

这是一个字符串，不支持strict模式的浏览器会把它当做一个字符串语句执行，支持strict模式的浏览器将开启strict模式运行JavaScript。

> 为了避免这一缺陷，所有的JavaScript代码都应该使用strict模式。

### 循环

JavaScript的循环有两种，一种是`for`循环，通过初始条件、结束条件和递增条件来循环执行语句块：

    var x = 0;
    var i;
    for (i=1; i<=10000; i++) {
        x = x + i;
    }
    x; // 50005000

`for`循环的3个条件都是可以省略的，如果没有退出循环的判断条件，就必须使用`break`语句退出循环，否则就是死循环：

    var x = 0;
    for (;;) { // 将无限循环下去
        if (x > 100) {
            break; // 通过if判断来退出循环
        }
        x ++;
    }

#### for ... in

`for`循环的一个变体是`for ... in`循环，它可以把一个对象的所有属性依次循环出来：

    var o = {
        name: 'Jack',
        age: 20,
        city: 'Beijing'
    };
    for (var key in o) {
        console.log(key); // 'name', 'age', 'city'
    }

由于`Array`也是对象，而它的每个元素的索引被视为对象的属性，因此`for ... in`循环可以直接循环出`Array`的索引：

    var a = ['A', 'B', 'C'];
    for (var i in a) {
        console.log(i); // '0', '1', '2'
        console.log(a[i]); // 'A', 'B', 'C'
    }

> 注意`for ... in`对`Array`的循环得到的是`String`而不是`Number`。

#### while

`while`循环只有一个判断条件，条件满足，就不断循环，条件不满足时则退出循环。

    var x = 0;
    var n = 99;
    while (n > 0) {
        x = x + n;
        n = n - 2;
    }
    x; // 2500

#### do ... while

最后一种循环是`do { ... } while()`循环，它和`while`循环的唯一区别在于，不是在每次循环开始的时候判断条件，而是在每次循环完成的时候判断条件：

    var n = 0;
    do {
        n = n + 1;
    } while (n < 100);
    n; // 100

### Map和Set

JavaScript的默认对象表示方式`{}`可以视为其他语言中的`Map`或`Dictionary`的数据结构，即一组键值对。

但是JavaScript的对象有个小问题，就是键必须是字符串。但实际上Number或者其他数据类型作为键也是非常合理的。

> `Map`和`Set`是ES6标准新增的数据类型。

#### Map

> `Map`是一组键值对的结构，具有极快的查找速度。

例如用Map一个“名字”-“成绩”的对照表，直接根据名字查找成绩，无论这个表有多大，查找速度都不会变慢。

    var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
    m.get('Michael'); // 95

初始化`Map`需要一个**二维数组**，或者直接初始化一个空`Map`。`Map`具有以下方法：

    var m = new Map(); // 空Map
    m.set('Adam', 67); // 添加新的key-value
    m.set('Bob', 59);
    m.has('Adam'); // 是否存在key 'Adam': true
    m.get('Adam'); // 67
    m.delete('Adam'); // 删除key 'Adam'
    m.get('Adam'); // undefined

由于一个`key`只能对应一个`value`，所以，多次对一个`key`放入`value`，后面的值会把前面的值替换：

    var m = new Map();
    m.set('Adam', 67);
    m.set('Adam', 88);
    m.get('Adam'); // 88

#### Set

`Set`和`Map`类似，也是一组`key`的集合，但不存储`value`。

> 由于`key`不能重复，所以在`Set`中没有重复的`key`。

要创建一个`Set`，需要提供一个`Array`作为输入，或者直接创建一个空`Set`：

    var s1 = new Set(); // 空Set
    var s2 = new Set([1, 2, 3]); // 含1, 2, 3

重复元素在`Set`中自动被过滤：

    var s = new Set([1, 2, 3, 3, '3']);
    s; // Set {1, 2, 3, "3"}

通过`add(key)`方法可以添加元素到`Set`中，可以重复添加，但不会有效果：

    s.add(4);
    s; // Set {1, 2, 3, 4}
    s.add(4);
    s; // 仍然是 Set {1, 2, 3, 4}

通过`delete(key)`方法可以删除元素：

    var s = new Set([1, 2, 3]);
    s; // Set {1, 2, 3}
    s.delete(3);
    s; // Set {1, 2}

### iterable

遍历`Array`可以采用下标循环，遍历`Map`和`Set`就无法使用下标。为了统一集合类型，ES6标准引入了新的`iterable`类型，`Array`、`Map`和`Set`都属于iterable类型。

> 具有`iterable`类型的集合可以通过新的`for ... of`循环来遍历。

用`for ... of`循环遍历集合，用法如下：

    var a = ['A', 'B', 'C'];
    var s = new Set(['A', 'B', 'C']);
    var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
    for (var x of a) { // 遍历Array
        console.log(x);
    }
    for (var x of s) { // 遍历Set
        console.log(x);
    }
    for (var x of m) { // 遍历Map
        console.log(x[0] + '=' + x[1]);
    }

你可能会有疑问，`for ... of`循环和`for ... in`循环有何区别？

`for ... in`循环由于历史遗留问题，它遍历的实际上是对象的属性名称。一个`Array`数组实际上也是一个对象，它的每个元素的索引被视为一个属性。

当我们手动给`Array`对象添加了额外的属性后，`for ... in`循环将带来意想不到的意外效果：

    var a = ['A', 'B', 'C'];
    a.name = 'Hello';
    for (var x in a) {
        console.log(x); // '0', '1', '2', 'name'
    }

`for ... in`循环将把`name`包括在内，但`Array`的`length`属性却不包括在内。

`for ... of`循环则完全修复了这些问题，它只循环集合本身的元素：

    var a = ['A', 'B', 'C'];
    a.name = 'Hello';
    for (var x of a) {
        console.log(x); // 'A', 'B', 'C'
    }

然而，更好的方式是直接使用`iterable`内置的`forEach`方法，它接收一个函数，每次迭代就自动回调该函数。以`Array`为例：

    var a = ['A', 'B', 'C'];
    a.forEach(function (element, index, array) {
        // element: 指向当前元素的值
        // index: 指向当前索引
        // array: 指向Array对象本身
        console.log(element + ', index = ' + index);
    }); /* A, index = 0
           B, index = 1
           C, index = 2 */

> 注意：`forEach()`方法是ES5.1标准引入的。

`Set`与`Array`类似，但`Set`没有索引，因此回调函数的前两个参数都是元素本身：

    var s = new Set(['A', 'B', 'C']);
    s.forEach(function (element, sameElement, set) {
        console.log(element);
    });

`Map`的回调函数参数依次为`value`、`key`和`map`本身：

    var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
    m.forEach(function (value, key, map) {
        console.log(value);
    });

由于JavaScript的函数调用不要求参数必须一致，因此可以忽略它们。例如只需要获得`Array`的`element`：

    var a = ['A', 'B', 'C'];
    a.forEach(function (element) {
        console.log(element);
    });

## 函数

JavaScript的函数不但是“头等公民”，而且可以像变量一样使用，具有非常强大的抽象能力。

> 函数就是最基本的一种代码抽象的方式。

### 定义函数

看一个简单的函数定义：

    function abs(x) {
        if (x >= 0) {
            return x;
        } else {
            return -x;
        }
    }

上述`abs()`函数的定义如下：

 - `function`指出这是一个函数定义；
 - `abs`是函数的名称；
 - `(x)`括号内列出函数的参数，多个参数以`,`分隔；
 - `{ ... }`之间的代码是函数体，可以包含若干语句，甚至可以没有任何语句。

> 函数体内部的语句在执行时，一旦执行到`return`时，函数就执行完毕，并将结果返回。如果没有`return`语句，函数执行完毕后也会返回结果，只是结果为`undefined`。

由于JavaScript的函数也是一个对象，上述定义的`abs()`函数实际上是一个函数对象，而函数名`abs`可以视为指向该函数的变量。因此，第二种定义函数的方式如下：

    var abs = function (x) {
        if (x >= 0) {
            return x;
        } else {
            return -x;
        }
    };

在这种方式下，`function (x) { ... }`是一个匿名函数，它没有函数名。但是这个匿名函数赋值给了变量`abs`，所以通过变量`abs`就可以调用该函数。

上述两种定义完全等价，注意第二种方式按照完整语法需要在函数体末尾加一个`;`，表示赋值语句结束。

### 调用函数

调用函数时，按顺序传入参数即可：

    abs(10); // 返回10
    abs(-9); // 返回9

由于JavaScript允许传入任意个参数而不影响调用，因此传入的参数比定义的参数多也没有问题，虽然函数内部并不需要这些参数：

    abs(10, 'blablabla'); // 返回10
    abs(-9, 'haha', 'hehe', null); // 返回9

传入的参数比定义的少也没有问题：

    abs(); // 返回NaN

此时`abs(x)`函数的参数`x`将收到`undefined`，计算结果为`NaN`。

要避免收到`undefined`，可以对参数进行检查：

    function abs(x) {
        if (typeof x !== 'number') {
            throw 'Not a number';
        }
        if (x >= 0) {
            return x;
        } else {
            return -x;
        }
    }

#### arguments

JavaScript还有一个免费赠送的关键字`arguments`，它只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数。`arguments`类似`Array`但它不是一个`Array`：

    function foo(x) {
        console.log('x = ' + x); // 10
        for (var i=0; i<arguments.length; i++) {
            console.log('arg ' + i + ' = ' + arguments[i]); // 10, 20, 30
        }
    }
    foo(10, 20, 30); /* x = 10
                        arg 0 = 10
                        arg 1 = 20
                        arg 2 = 30 */

利用`arguments`，你可以获得调用者传入的所有参数。也就是说，即使函数不定义任何参数，还是可以拿到参数的值：

    function abs() {
        if (arguments.length === 0) {
            return 0;
        }
        var x = arguments[0];
        return x >= 0 ? x : -x;
    }
    
    abs(); // 0
    abs(10); // 10
    abs(-9); // 9

实际上`arguments`最常用于判断传入参数的个数。你可能会看到这样的写法：

    // 接收2~3个参数，b是可选参数，如果只传2个参数，b默认为null：
    function foo(a, b, c) {
        if (arguments.length === 2) {
            // 实际拿到的参数是a和b，c为undefined
            c = b; // 把b赋给c
            b = null; // b变为默认值
        }
        // ...
    }

要把中间的参数`b`变为“可选”参数，就只能通过`arguments`判断，然后重新调整参数并赋值。

#### rest参数

ES6标准引入了rest参数，例如：

    function foo(a, b, ...rest) {
        console.log('a = ' + a);
        console.log('b = ' + b);
        console.log(rest);
    }
    
    foo(1, 2, 3, 4, 5);
    // 结果:
    // a = 1
    // b = 2
    // Array [ 3, 4, 5 ]
    
    foo(1);
    // 结果:
    // a = 1
    // b = undefined
    // Array []

> rest参数只能写在最后，前面用`...`标识。

从运行结果可知，传入的参数先绑定`a`、`b`，多余的参数以数组形式交给变量`rest`。如果传入的参数连正常定义的参数都没填满，也不要紧，`rest`参数会接收一个空数组（注意不是`undefined`）。

### 变量作用域与解构赋值

在JavaScript中，用`var`申明的变量实际上是有作用域的。

如果一个变量在函数体内部申明，则该变量的作用域为整个函数体，在函数体外不可引用该变量：

    'use strict';
    
    function foo() {
        var x = 1;
        x = x + 1;
    }
    
    x = x + 2; // ReferenceError! 无法在函数体外引用变量x

如果两个不同的函数各自申明了同一个变量，那么该变量只在各自的函数体内起作用。换句话说，不同函数内部的同名变量互相独立，互不影响：

    'use strict';
    
    function foo() {
        var x = 1;
        x = x + 1;
    }
    
    function bar() {
        var x = 'A';
        x = x + 'B';
    }

由于JavaScript的函数可以嵌套，此时内部函数可以访问外部函数定义的变量，反过来则不行：

    'use strict';
    
    function foo() {
        var x = 1;
        function bar() {
            var y = x + 1; // bar可以访问foo的变量x!
        }
        var z = y + 1; // ReferenceError! foo不可以访问bar的变量y!
    }

如果内部函数定义了与外部函数重名的变量，则内部函数的变量将“屏蔽”外部函数的变量。

    'use strict';
    function foo() {
        var x = 1;
        function bar() {
            var x = 'A';
            console.log('x in bar() = ' + x); // 'A'
        }
        console.log('x in foo() = ' + x); // 1
        bar();
    }
    
    foo(); /* x in foo() = 1
              x in bar() = A */

#### 变量提升

JavaScript的函数定义有个特点，它会先扫描整个函数体的语句，把所有申明的变量“提升”到函数顶部：

    'use strict';
    
    function foo() {
        var x = 'Hello, ' + y;
        console.log(x);
        var y = 'Bob';
    }
    
    foo();

虽然是strict模式，但语句`var x = 'Hello, ' + y;`并不报错，原因是变量`y`在稍后申明了。但是`console.log`显示`Hello, undefined`，说明变量`y`的值为`undefined`。这正是因为JavaScript引擎自动提升了变量`y`的声明，但不会提升变量`y`的赋值。

对于上述`foo()`函数，JavaScript引擎看到的代码相当于：

    function foo() {
        var y; // 提升变量y的申明，此时y为undefined
        var x = 'Hello, ' + y;
        console.log(x);
        y = 'Bob';
    }

由于JavaScript的这一怪异的“特性”，我们在函数内部定义变量时，请严格遵守“在函数内部首先申明所有变量”这一规则。最常见的做法是用一个`var`申明函数内部用到的所有变量：

    function foo() {
        var
            x = 1, // x初始化为1
            y = x + 1, // y初始化为2
            z, i; // z和i为undefined
        // 其他语句:
        for (i=0; i<100; i++) {
            ...
        }
    }

#### 全局作用域

不在任何函数内定义的变量就具有全局作用域。实际上JavaScript默认有一个全局对象`window`，全局作用域的变量实际上被绑定到`window`的一个属性：

    'use strict';
    
    var course = 'Learn JavaScript';
    alert(course); // 'Learn JavaScript'
    alert(window.course); // 'Learn JavaScript'

因此，直接访问全局变量`course`和访问`window.course`是完全一样的。

由于函数定义有两种方式，以变量方式`var foo = function () {}`义的函数实际上也是一个全局变量，因此顶层函数的定义也被视为一个全局变量，并绑定到`window`对象：

    'use strict';
    
    function foo() {
        alert('foo');
    }
    
    foo(); // 直接调用foo()
    window.foo(); // 通过window.foo()调用

我们每次直接调用的`alert()`函数其实也是`window`的一个变量：

    'use strict';
    
    window.alert('调用window.alert()');
    // 把alert保存到另一个变量:
    var old_alert = window.alert;
    // 给alert赋一个新函数:
    window.alert = function () {}
    
    alert('无法用alert()显示了!');
    
    // 恢复alert:
    window.alert = old_alert;
    alert('又可以用alert()了!');

> JavaScript实际上只有一个全局作用域。任何变量（函数也视为变量），如果没有在当前函数作用域中找到，就会继续往上查找，最后如果在全局作用域中也没有找到，则报`ReferenceError`错误。

#### 名字空间

全局变量会绑定到`window`上，不同的JavaScript文件如果使用了相同的全局变量，或者定义了相同名字的顶层函数，都会造成命名冲突，并且很难被发现。

减少冲突的一个方法是把自己的所有变量和函数全部绑定到一个全局变量中。例如：

    // 唯一的全局变量MYAPP:
    var MYAPP = {};
    
    // 其他变量:
    MYAPP.name = 'myapp';
    MYAPP.version = 1.0;
    
    // 其他函数:
    MYAPP.foo = function () {
        return 'foo';
    };

把自己的代码全部放入唯一的名字空间`MYAPP`中，会大大减少全局变量冲突的可能。许多著名的JavaScript库都是这么干的：jQuery，YUI，underscore等等。

#### 局部作用域

由于JavaScript的变量作用域实际上是函数内部，我们在`for`循环等语句块中是无法定义具有局部作用域的变量的：

    'use strict';
    
    function foo() {
        for (var i=0; i<100; i++) {
            //
        }
        i += 100; // 仍然可以引用变量i
    }

为了解决块级作用域，ES6引入了新的关键字`let`，用`let`替代`var`可以申明一个块级作用域的变量：

    'use strict';
    
    function foo() {
        var sum = 0;
        for (let i=0; i<100; i++) {
            sum += i;
        }
        // SyntaxError:
        i += 1;
    }

#### 常量

由于`var`和`let`申明的是变量，如果要申明一个常量，ES6标准引入了新的关键字`const`来定义常量，`const`与`let`都具有块级作用域：

    'use strict';
    
    const PI = 3.14;
    PI = 3; // 某些浏览器不报错，但是无效果！
    PI; // 3.14

#### 解构赋值

从ES6开始，JavaScript引入了解构赋值，可以同时对一组变量进行赋值。

什么是解构赋值？我们先看看传统的做法，如何把一个数组的元素分别赋值给几个变量：

    var array = ['hello', 'JavaScript', 'ES6'];
    var x = array[0];
    var y = array[1];
    var z = array[2];

在ES6中，可以使用解构赋值，直接对多个变量同时赋值：

    'use strict';
    
    // 如果浏览器支持解构赋值就不会报错:
    var [x, y, z] = ['hello', 'JavaScript', 'ES6'];
    // x, y, z分别被赋值为数组对应元素:
    console.log('x = ' + x + ', y = ' + y + ', z = ' + z);

注意，对数组元素进行解构赋值时，多个变量要用`[...]`括起来。

    let [x, [y, z]] = ['hello', ['JavaScript', 'ES6']];
    x; // 'hello'
    y; // 'JavaScript'
    z; // 'ES6'

解构赋值还可以忽略某些元素：

    let [, , z] = ['hello', 'JavaScript', 'ES6']; // 忽略前两个元素，只对z赋值第三个元素
    z; // 'ES6'

如果需要从一个对象中取出若干属性，也可以使用解构赋值，便于快速获取对象的指定属性：

    'use strict';
    
    var person = {
        name: '小明',
        age: 20,
        gender: 'male',
        passport: 'G-12345678',
        school: 'No.4 middle school'
    };
    var {name, age, passport} = person;
    // name, age, passport分别被赋值为对应属性:
    console.log('name = ' + name + ', age = ' + age + ', passport = ' + passport);

对一个对象进行解构赋值时，同样可以直接对嵌套的对象属性进行赋值，只要保证对应的层次是一致的：

    var person = {
        name: '小明',
        age: 20,
        gender: 'male',
        passport: 'G-12345678',
        school: 'No.4 middle school',
        address: {
            city: 'Beijing',
            street: 'No.1 Road',
            zipcode: '100001'
        }
    };
    var {name, address: {city, zip}} = person;
    name; // '小明'
    city; // 'Beijing'
    zip; // undefined, 因为属性名是zipcode而不是zip
    // 注意: address不是变量，而是为了让city和zip获得嵌套的address对象的属性:
    address; // Uncaught ReferenceError: address is not defined

使用解构赋值对对象属性进行赋值时，如果对应的属性不存在，变量将被赋值为`undefined`，这和引用一个不存在的属性获得`undefined`是一致的。如果要使用的变量名和属性名不一致，可以用下面的语法获取：

    var person = {
        name: '小明',
        age: 20,
        gender: 'male',
        passport: 'G-12345678',
        school: 'No.4 middle school'
    };
    
    // 把passport属性赋值给变量id:
    let {name, passport:id} = person;
    name; // '小明'
    id; // 'G-12345678'
    // 注意: passport不是变量，而是为了让变量id获得passport属性:
    passport; // Uncaught ReferenceError: passport is not defined

解构赋值还可以使用默认值，这样就避免了不存在的属性返回`undefined`的问题：

    var person = {
        name: '小明',
        age: 20,
        gender: 'male',
        passport: 'G-12345678'
    };
    
    // 如果person对象没有single属性，默认赋值为true:
    var {name, single=true} = person;
    name; // '小明'
    single; // true

有些时候，如果变量已经被声明了，再次赋值的时候，正确的写法也会报语法错误：

    // 声明变量:
    var x, y;
    // 解构赋值:
    {x, y} = { name: '小明', x: 100, y: 200};
    // 语法错误: Uncaught SyntaxError: Unexpected token =

这是因为JavaScript引擎把`{`开头的语句当作了块处理，于是`=`不再合法，解决方法是用小括号括起来：

    ({x, y} = { name: '小明', x: 100, y: 200});

交换变量，不再需要临时变量：

    var x=1, y=2;
    [x, y] = [y, x]

如果一个函数接收一个对象作为参数，那么可以使用解构直接把对象的属性绑定到变量中。例如下面的函数可以快速创建一个`Date`对象：

    function buildDate({year, month, day, hour=0, minute=0, second=0}) {
        return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
    }

### 方法

> 在一个对象中绑定函数，称为这个对象的方法。

在JavaScript中，对象的定义是这样的：

    var xiaoming = {
        name: '小明',
        birth: 1990
    };

如果我们给`xiaoming`绑定一个函数，就可以做更多的事情。比如写个`age()`方法，返回`xiaoming`的年龄：

    var xiaoming = {
        name: '小明',
        birth: 1994,
        age: function () {
            var y = new Date().getFullYear();
            return y - this.birth;
        }
    };
    
    xiaoming.age; // function xiaoming.age()
    xiaoming.age(); // 今年调用是25,明年调用就变成26了

绑定到对象上的函数称为方法，和普通函数也没啥区别。在一个方法内部，`this`是一个特殊变量，它始终指向当前对象，也就是`xiaoming`这个变量。所以`this.birth`可以拿到`xiaoming`的`birth`属性。

让我们拆开写：

    function getAge() {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
    
    var xiaoming = {
        name: '小明',
        birth: 1990,
        age: getAge
    };
    
    xiaoming.age(); // 25, 正常结果
    getAge(); // NaN

单独调用函数`getAge()`怎么返回了`NaN`？JavaScript的函数内部如果调用了`this`，那么这个`this`到底指向谁？视情况而定。如果以对象的方法形式调用，比如`xiaoming.age()`，该函数的`this`指向被调用的对象，也就是`xiaoming`，这是符合我们预期的。如果单独调用函数，比如`getAge()`，此时该函数的`this`指向全局对象，也就是`window`。

如果这么写：

    var fn = xiaoming.age; // 先拿到xiaoming的age函数
    fn(); // NaN

> 要保证`this`指向正确，必须用`obj.xxx()`的形式调用！

由于这是一个巨大的设计错误，要想纠正可没那么简单。ECMA决定，在strict模式下让函数的`this`指向`undefined`，因此在strict模式下，你会得到一个错误：

    'use strict';
    
    var xiaoming = {
        name: '小明',
        birth: 1990,
        age: function () {
            var y = new Date().getFullYear();
            return y - this.birth;
        }
    };
    
    var fn = xiaoming.age;
    fn(); // Uncaught TypeError: Cannot read property 'birth' of undefined

这个决定只是让错误及时暴露出来，并没有解决`this`应该指向的正确位置。

有些时候，喜欢重构的你把方法重构了一下：

    'use strict';
    
    var xiaoming = {
        name: '小明',
        birth: 1990,
        age: function () {
            function getAgeFromBirth() {
                var y = new Date().getFullYear();
                return y - this.birth;
            }
            return getAgeFromBirth();
        }
    };
    
    xiaoming.age(); // Uncaught TypeError: Cannot read property 'birth' of undefined

结果又报错了！原因是`this`指针只在`age`方法的函数内指向`xiaoming`，在函数内部定义的函数，`this`又指向`undefined`了！（在非strict模式下，它重新指向全局对象`window`！）修复的办法也不是没有，我们用一个`that`变量首先捕获`this`：

    'use strict';
    
    var xiaoming = {
        name: '小明',
        birth: 1990,
        age: function () {
            var that = this; // 在方法内部一开始就捕获this
            function getAgeFromBirth() {
                var y = new Date().getFullYear();
                return y - that.birth; // 用that而不是this
            }
            return getAgeFromBirth();
        }
    };
    
    xiaoming.age(); // 25

用`var that = this;`，你就可以放心地在方法内部定义其他函数，而不是把所有语句都堆到一个方法中。

#### apply

虽然在一个独立的函数调用中，根据是否是strict模式，`this`指向`undefined`或`window`，不过我们还是可以控制`this`的指向的！

要指定函数的`this`指向哪个对象，可以用函数本身的`apply`方法，它接收两个参数，第一个参数就是需要绑定的`this`变量，第二个参数是`Array`，表示函数本身的参数。

用`apply`修复`getAge()`调用：

    function getAge() {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
    
    var xiaoming = {
        name: '小明',
        birth: 1990,
        age: getAge
    };
    
    xiaoming.age(); // 25
    getAge.apply(xiaoming, []); // 25, this指向xiaoming, 参数为空

另一个与`apply()`类似的方法是`call()`，唯一区别是：

 - `apply()`把参数打包成`Array`再传入；
 - `call()`把参数按顺序传入。

比如调用`Math.max(3, 5, 4)`，分别用`apply()`和`call()`实现如下：

    Math.max.apply(null, [3, 5, 4]); // 5
    Math.max.call(null, 3, 5, 4); // 5

对普通函数调用，我们通常把`this`绑定为`null`。

### 高级函数


