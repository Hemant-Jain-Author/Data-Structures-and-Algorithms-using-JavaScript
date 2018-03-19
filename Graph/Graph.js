const MAX_VALUE = 99999;

class Graph {
	constructor(cnt) {
		function AdjList() {
			this.head = null;
		}

		Graph.AdjList = AdjList;

		function AdjNode(src, dst, cst) {
			if (cst === void 0) {
				cst = 1;
			}
			this.source = src;
			this.destination = dst;
			this.cost = cst;
			this.next = null;
		}

		Graph.AdjNode = AdjNode;

		this.count = cnt;
		this.array = new Array(cnt);
		for (let i = 0; i < cnt; i++) {
			this.array[i] = new AdjList();
			this.array[i].head = null;
		}
	}

	AddEdge(source, destination, cost) {
		if (cost === void 0) {
			cost = 1;
		}
		const node = new Graph.AdjNode(source, destination, cost);
		node.next = this.array[source].head;
		this.array[source].head = node;
	}

	AddBiEdge(source, destination, cost) {
		if (cost === void 0) {
			cost = 1;
		}
		this.AddEdge(source, destination, cost);
		this.AddEdge(destination, source, cost);
	}

	Print() {
		let ad;
		for (let i = 0; i < this.count; i++) {
			ad = this.array[i].head;
			if (ad != null) {
				console.log(`Vertex ${i} is connected to : `);
				while ((ad != null)) {
					console.log(`${ad.destination} `);
					ad = ad.next;
				}
				;
			}
		}
	}

	static Dijkstra(gph, source) {
		const previous = new Array(gph.count);
		const dist = new Array(gph.count);
		for (var i = 0; i < gph.count; i++) {
			previous[i] = -1;
			dist[i] = MAX_VALUE;
		}
		dist[source] = 0;
		previous[source] = -1;
		const queue = new PriorityQueue(null, compare);
		let node = new Graph.AdjNode(source, source, 0);
		queue.add(node);
		while ((queue.isEmpty() === false)) {
			node = queue.remove();
			const adl = gph.array[node.destination];
			let adn = adl.head;
			while ((adn != null)) {
				const alt = adn.cost + dist[adn.source];
				if (alt < dist[adn.destination]) {
					dist[adn.destination] = alt;
					previous[adn.destination] = adn.source;
					node = new Graph.AdjNode(adn.source, adn.destination, alt);
					queue.add(node);
				}
				adn = adn.next;
			};
		};
		const count = gph.count;
		for (var i = 0; i < count; i++) {
			if (dist[i] === MAX_VALUE) {
				console.log(` node id ${i}  prev ${previous[i]} distance : Unreachable`);
			} else {
				console.log(` node id ${i}  prev ${previous[i]} distance : ${dist[i]}`);
			}
		}
	}

	static Prims(gph) {
		const previous = new Array(gph.count);
		const dist = new Array(gph.count);
		const source = 1;
		for (var i = 0; i < gph.count; i++) {
			previous[i] = -1;
			dist[i] = MAX_VALUE;
		}
		dist[source] = 0;
		previous[source] = -1;
		const queue = new PriorityQueue(null, compare);
		let node = new Graph.AdjNode(source, source, 0);
		queue.add(node);
		while ((queue.isEmpty() !== true)) {
			node = queue.remove();
			if (dist[node.destination] < node.cost)
				continue;
			dist[node.destination] = node.cost;
			previous[node.destination] = node.source;
			const adl = gph.array[node.destination];
			let adn = adl.head;
			while ((adn != null)) {
				if (previous[adn.destination] === -1) {
					node = new Graph.AdjNode(adn.source, adn.destination, adn.cost);
					queue.add(node);
				}
				adn = adn.next;
			};
		};
		const count = gph.count;
		for (var i = 0; i < count; i++) {
			if (dist[i] === MAX_VALUE) {
				console.log(` node id ${i}  prev ${previous[i]} distance : Unreachable`);
			} else {
				console.log(` node id ${i}  prev ${previous[i]} distance : ${dist[i]}`);
			}
		}
	}

	static TopologicalSort(gph) {
		const stk = [];
		const count = gph.count;
		const visited = new Array(count);
		for (var i = 0; i < count; i++) {
			visited[i] = 0;
		}
		for (var i = 0; i < count; i++) {
			if (visited[i] === 0) {
				visited[i] = 1;
				Graph.TopologicalSortDFS(gph, i, visited, stk);
			}
		}
		while ((stk.length !== 0)) {
			console.log(stk.pop());
		};
	}

	static TopologicalSortDFS(gph, index, visited, stk) {
		let head = gph.array[index].head;
		while ((head != null)) {
			if (visited[head.destination] === 0) {
				visited[head.destination] = 1;
				Graph.TopologicalSortDFS(gph, head.destination, visited, stk);
			}
			head = head.next;
		};
		stk.push(index);
	}

	static PathExist(gph, source, destination) {
		const count = gph.count;
		const visited = new Array(count);
		for (let i = 0; i < count; i++) {
			visited[i] = 0;
		}
		visited[source] = 1;
		Graph.DFSRecUtil(gph, source, visited);
		return visited[destination];
	}

	static DFSStack(gph, index) {
		const count = gph.count;
		const visited = new Array(count);
		let curr;
		const stk = [];
		for (let i = 0; i < count; i++) {
			visited[i] = 0;
		}
		visited[index] = 1;
		console.log(`visited: ${index}`);
		stk.push(index);
		while ((stk.length != 0)) {
			curr = stk.pop();
			let head = gph.array[curr].head;
			while ((head != null)) {
				if (visited[head.destination] === 0) {
					console.log(`visited: ${head.destination}`);
					visited[head.destination] = 1;
					stk.push(head.destination);
				}
				head = head.next;
			};
		};
	}

	static DFSRec(gph, index) {
		const count = gph.count;
		const visited = new Array(count);
		for (let i = 0; i < count; i++) {
			visited[i] = 0;
		}
		visited[index] = 1;
		console.log(`visited: ${index}`);
		Graph.DFSRecUtil(gph, index, visited);
	}

	static DFSRecUtil(gph, index, visited) {
		let head = gph.array[index].head;
		while ((head != null)) {
			if (visited[head.destination] === 0) {
				visited[head.destination] = 1;
				console.log(`visited: ${head.destination}`);
				Graph.DFSRecUtil(gph, head.destination, visited);
			}
			head = head.next;
		};
	}

	static BFS(gph, index) {
		const count = gph.count;
		const visited = new Array(count);
		for (let i = 0; i < count; i++) {
			visited[i] = 0;
		}
		visited[index] = 1;
		let curr;
		const que = new Queue();
		visited[index] = 1;
		console.log(`visited: ${index}`);
		que.add(index);
		while ((que.isEmpty() === false)) {
			curr = que.remove();
			let head = gph.array[curr].head;
			while ((head != null)) {
				if (visited[head.destination] === 0) {
					visited[head.destination] = 1;
					console.log(`visited: ${head.destination}`);
					que.add(head.destination);
				}
				head = head.next;
			};
		};
	}

	static isConnected(gph) {
		const count = gph.count;
		const visited = new Array(count);
		for (var i = 0; i < count; i++) {
			visited[i] = 0;
		}
		visited[0] = 1;
		Graph.DFSRecUtil(gph, 0, visited);
		for (var i = 0; i < count; i++) {
			if (visited[i] === 0) {
				console.log("Not a connected Graph");
				return false;
			}
		}
		console.log("Is a connected Graph");
		return true;
	}

	static ShortestPath(gph, source) {
		let curr;
		const count = gph.count;
		const distance = new Array(count);
		const path = new Array(count);
		const que = new Queue();
		for (var i = 0; i < count; i++) {
			distance[i] = -1;
		}
		que.add(source);
		distance[source] = 0;
		while ((que.isEmpty() === false)) {
			curr = que.remove();
			let head = gph.array[curr].head;
			while ((head != null)) {
				if (distance[head.destination] === -1) {
					distance[head.destination] = distance[curr] + 1;
					path[head.destination] = curr;
					que.add(head.destination);
				}
				head = head.next;
			};
		};
		for (var i = 0; i < count; i++) {
			console.log(`${path[i]} to ${i} weight ${distance[i]}`);
		}
	}

	static BellmanFordShortestPath(gph, source) {
		const count = gph.count;
		const distance = new Array(count);
		const path = new Array(count);
		for (var i = 0; i < count; i++) {
			distance[i] = MAX_VALUE;
		}
		distance[source] = 0;
		for (var i = 0; i < count - 1; i++) {
			for (let j = 0; j < count; j++) {
				let head = gph.array[j].head;
				while ((head != null)) {
					const newDistance = distance[j] + head.cost;
					if (distance[head.destination] > newDistance) {
						distance[head.destination] = newDistance;
						path[head.destination] = j;
					}
					head = head.next;
				};
			}
		}
		for (var i = 0; i < count; i++) {
			console.log(`${path[i]} to ${i} weight ${distance[i]}`);
		}
	}
}

function compare(x, y) {
	if (typeof x === 'AdjNode' && typeof y === 'AdjNode') {
		return (x.cost - y.cost);
	}
}
defaultCmp = (x, y) => x - y;

class PriorityQueue {
	constructor(array, cmp) {
		this.comp = (typeof cmp === 'function' && cmp != null) ? cmp : defaultCmp;

		if (array != null && array instanceof Array) {
			this.length = array.length;
			this.arr = [0].concat(array);
			for (let i = Math.floor(this.length / 2); i > 0; i--) {
				this.proclateDown(i);
			}
		}
		else if (array === undefined || array === null) {
			this.length = 0;
			this.arr = [0];
		}
		else
			throw new Error('invalid arguments');
	}

	proclateDown(position) {
		const lChild = 2 * position;
		const rChild = lChild + 1;
		let small = -1;
		let temp;
		if (lChild <= this.length) {
			small = lChild;
		}
		if (rChild <= this.length && this.comp(this.arr[rChild], this.arr[lChild]) < 0) {
			small = rChild;
		}
		if (small !== -1 && this.comp(this.arr[small], this.arr[position]) < 0) {
			temp = this.arr[position];
			this.arr[position] = this.arr[small];
			this.arr[small] = temp;
			this.proclateDown(small);
		}
	}

	proclateUp(position) {
		const parent = Math.floor(position / 2);
		let temp;
		if (parent === 0) {
			return;
		}
		if (this.comp(this.arr[parent], this.arr[position]) < 0) {
			temp = this.arr[position];
			this.arr[position] = this.arr[parent];
			this.arr[parent] = temp;
			this.proclateUp(parent);
		}
	}

	add(value) {
		++this.length;
		this.arr[this.length] = value;
		this.proclateUp(this.length);
	}

	remove() {
		if (this.isEmpty()) {
			throw new Error();
		}
		const value = this.arr[1];
		this.arr[1] = this.arr[this.length];
		this.length--;
		this.proclateDown(1);
		return value;
	}

	print() {
		for (let i = 1; i <= this.length; i++) {
			console.log(` ${this.arr[i]}`);
		}
	}

	isEmpty() {
		return (this.length === 0);
	}

	size() {
		return this.length;
	}

	peek() {
		if (this.isEmpty()) {
			throw new Error();
		}
		return this.arr[1];
	}

	HeapSort(array, cmp) {
		const hp = new PriorityQueue(array, cmp);
		for (let i = 0; i < array.length; i++) {
			array[i] = hp.remove();
		}
	}
}

class Queue {
	constructor() {
		this.stk1 = [];
		this.stk2 = [];
	}

	add(value) {
		this.stk1.push(value);
	}

	remove() {
		let value;
		if ((this.stk2).length > 0) {
			return this.stk2.pop();
		}
		while ((this.stk1).length > 0) {
			value = this.stk1.pop();
			this.stk2.push(value);
		};
		return this.stk2.pop();
	}

	isEmpty() {
		return (this.stk1.length + this.stk2.length) === 0
	}
}

function main() {
	const gph = new Graph(9);
	gph.AddBiEdge(0, 2, 1);
	gph.AddBiEdge(1, 2, 5);
	gph.AddBiEdge(1, 3, 7);
	gph.AddBiEdge(1, 4, 9);
	gph.AddBiEdge(3, 2, 2);
	gph.AddBiEdge(3, 5, 4);
	gph.AddBiEdge(4, 5, 6);
	gph.AddBiEdge(4, 6, 3);
	gph.AddBiEdge(5, 7, 1);
	gph.AddBiEdge(6, 7, 7);
	gph.AddBiEdge(7, 8, 17);
	gph.Print();
	// console.log(Graph.PathExist(gph, 0, 7));
	Graph.Prims(gph);
	Graph.Dijkstra(gph, 0);
	Graph.DFSStack(gph, 0);
	Graph.DFSRec(gph, 0);
	Graph.BFS(gph, 0);
	Graph.isConnected(gph);
}

function main2() {
	const g = new Graph(6);
	g.AddEdge(5, 2);
	g.AddEdge(5, 0);
	g.AddEdge(4, 0);
	g.AddEdge(4, 1);
	g.AddEdge(2, 3);
	g.AddEdge(3, 1);
	console.log("Following is a Topological Sort of the given graph.");
	Graph.TopologicalSort(g);
}

main();
main2();