function say(word) {
    console.log(word);
}

function execute(someFunction, value) {
    someFunction(value);
}

execute(say, "Hello");

function printHello(){
    console.log( "Hello, World!");
}
// 两秒后执行以上函数
setInterval(printHello, 2000);