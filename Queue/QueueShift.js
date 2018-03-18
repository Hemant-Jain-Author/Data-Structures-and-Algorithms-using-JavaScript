function Queue() {
	this.data = [];
}

Queue.prototype.add = function(value) {
	this.data.push(value);
};

Queue.prototype.remove = function() {
	var value = this.data.shift();
	return value;
};

Queue.prototype.isEmpty = function() {
	return (this.data.length === 0);
};

Queue.prototype.length = function() {
	return this.data.length;
};

main = function(args) {
	var que = new Queue();
	for (var i = 0; i < 20; i++) {
		que.add(i);
	}
	for (var i = 0; i < 22; i++) {
		console.log(que.remove());
	}
};

main(null);