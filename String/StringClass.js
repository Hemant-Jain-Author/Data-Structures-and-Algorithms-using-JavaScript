/* Generated from Java with JSweet 1.2.0 - http://www.jsweet.org */
function demo1() {
	const str1 = "hello";
	const str2 = "hello";
	const str3 = "Hello";
	console.log(`str1 equals str2 :${str1 === str2}`);
	console.log(`str1 equals str3 :${str1 === str3}`);
}

function demo2() {
	const str1 = "hello";
	const str2 = "hello";
	const str3 = "Hello";
	console.log(`str1 equals str2 :${str1 == str2}`);
	console.log(`str1 equals str3 :${str1 == str3}`);
};

function demo3() {
	const arr = [ 'H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!' ];
	const hello = arr.join("");
	console.log(hello);
	console.log(hello.length);
};

function demo4() {
	const str1 = "Hello, ";
	const str2 = "World!";
	const str3 = str1 + str2;
	console.log(str3);
	;
};

const str = "Hello, World!";
console.log(str[4])
demo1();
demo2()
demo3()
demo4()