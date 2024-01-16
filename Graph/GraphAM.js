class Queue {
    constructor() {
        this.arr = [];
    }

    add(value) {
        this.arr.push(value);
    }

    remove() {
        const value = this.arr[0];
        this.arr.shift();
        return value;
    }

    front() {
        return this.arr[0];
    }

    isEmpty() {
        return this.arr.length === 0
    }

    size() {
        return this.arr.length
    }
}

defaultCmp = (x, y) => (x - y) > 0;

class PriorityQueue {
    constructor(cmp) {
		this.comp = cmp;
        this.size = 0;
        this.arr = [];
    }
    
    /* Other methods */
    percolateDown(parent) {
        const lChild = 2 * parent + 1;
        const rChild = lChild + 1;
        let child = -1;
        let temp;
        if (lChild <= this.size) {
            child = lChild;
        }
        if (rChild <= this.size && this.comp(this.arr[lChild], this.arr[rChild])) {
            child = rChild;
        }
        if (child !== -1 && this.comp(this.arr[parent], this.arr[child])) {
            temp = this.arr[parent];
            this.arr[parent] = this.arr[child];
            this.arr[child] = temp;
            this.percolateDown(child);
        }
    }

    percolateUp(child) {
        const parent = Math.floor((child - 1) / 2);
        if (parent < 0) {
            return;
        }
        if (this.comp(this.arr[parent], this.arr[child])) {
            const temp = this.arr[child];
            this.arr[child] = this.arr[parent];
            this.arr[parent] = temp;
            this.percolateUp(parent);
        }
    }

    add(value) {
        this.arr[this.size] = value;
        this.size += 1;
        this.percolateUp(this.size - 1);
    }

    remove() {
        if (this.isEmpty()) {
            throw new Error("IllegalStateException");
        }
        const value = this.arr[0];
        this.arr[0] = this.arr[this.size - 1];
        this.size--;
        this.percolateDown(0);
        return value;
    }

    print() {
        console.log(this.arr);
    }

    isEmpty() {
        return (this.size === 0);
    }

    length() {
        return this.size;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("IllegalStateException");
        }
        return this.arr[0]
    }
}

GraphEdgeComparator = (x, y) => (x.cost - y.cost) > 0;

class GraphEdge {
    constructor(dst, cst) {
        if (cst === undefined)
            cst = 1
        this.dest = dst
        this.cost = cst      
    }
}

class Graph {
    constructor(cnt) {
        if (cnt === undefined)
            throw new Error('Invalid argument')

        this.count = cnt;
        this.adj = new Array(cnt)
        for (let i = 0; i < cnt; i++) {
            this.adj[i] = new Array(cnt).fill(0);
        }
    }

    addDirectedEdge(src, dst, cost = 1) {
        this.adj[src][dst] = cost;
    }

    addUndirectedEdge(src, dst, cost = 1) {
        this.addDirectedEdge(src, dst, cost);
        this.addDirectedEdge(dst, src, cost);
    }

    print() {
        for (let i = 0; i < this.count; i++) {
            let t = `Vertex ${i} is connected to : `;
            for (let j = 0; j < this.count; j++) {
                if (this.adj[i][j] !== 0)
                    t += j +"(cost: " + this.adj[i][j] +") "
            }
            console.log(t)
        }
    }

    dijkstra(source) {
        const count = this.count
        const previous = new Array(count).fill(-1);
        const dist = new Array(count).fill(Infinity);
        const visited = new Array(count).fill(false);

        dist[source] = 0
        previous[source] = source

        const queue = new PriorityQueue(GraphEdgeComparator);
        let node = new GraphEdge(source, 0);
        queue.add(node)
        let curr;

        while (queue.isEmpty() === false) {
            node = queue.remove();
            curr = node.dest;
            visited[curr] = true;
            for (let dest = 0; dest < count; dest++) {
                const cost = this.adj[curr][dest];
                if (cost !== 0) {
                    const alt = cost + dist[curr];
                    if (dist[dest] > alt && visited[dest] === false) {
                        dist[dest] = alt;
                        previous[dest] = curr;
                        node = new GraphEdge(dest, alt);
                        queue.add(node);
                    }
                }
            }
        }
        this.printPath(previous, dist, count, source)
    }

    primsMST(gph) {
        const count = this.count;
        const previous = new Array(count).fill(-1);
        const dist = new Array(count).fill(Infinity);
        const visited = new Array(count).fill(false);

        let source = 0;
        dist[source] = 0
        previous[source] = source

        const queue = new PriorityQueue(GraphEdgeComparator);
        let node = new GraphEdge(source, 0);
        queue.add(node)
        let curr;

        while (queue.isEmpty() === false) {
            node = queue.remove();
            curr = node.dest;
            visited[curr] = true;

            for (let dest = 0; dest < count; dest++) {
                const cost = this.adj[curr][dest];
                if (cost !== 0) {
                    const alt = cost;
                    if (dist[dest] > alt && visited[dest] === false) {
                        dist[dest] = alt;
                        previous[dest] = curr;
                        node = new GraphEdge(dest, alt);
                        queue.add(node);
                    }
                }
            }
        }
        let total = 0;
        let output = "Edges are " ;
        for (let i = 0; i < count; i++) {
            if (dist[i] === Infinity) {
                output += `( ${i},  Unreachable)`
            } else if (previous[i] != i) {
                output += `(${previous[i]}->${i} @ ${dist[i]}) `
                total += dist[i];
            }
        }
        console.log(output);
        console.log(`Total MST cost : ${total}`)
    }

	printPathUtil(previous, source, dest) {
		let path = "";
		if (dest == source)
			path += source;
		else {
			path += this.printPathUtil(previous, source, previous[dest]);
			path += ("->" + dest);
		}
		return path;
	}

	printPath(previous, dist, count, source) {
		let output = "Shortest Paths: ";
		for (let i = 0; i < count; i++) {
			if (dist[i] == 99999)
				output += ("(" + source + "->" + i + " @ Unreachable) ");
			else if (i != previous[i]) {
				output += "(";
				output += this.printPathUtil(previous, source, i);
				output += (" @ " + dist[i] + ") ");
			}
		}
		console.log(output);
	}


    hamiltonianPathUtil(path, pSize, added) {
        if (pSize === this.count)
            return true;

        for (let vertex = 0; vertex < this.count; vertex++) {
            if (pSize === 0 || (this.adj[path[pSize - 1]][vertex] === 1 && added[vertex] === 0)) {
                path[pSize++] = vertex;
                added[vertex] = 1;
                
                if (this.hamiltonianPathUtil(path, pSize, added))
                    return true;
                
                pSize--;
                added[vertex] = 0;
            }
        }
        return false;
    }

    hamiltonianPath() {
        const count = this.count;
        const path = new Array(count).fill(0);
        const added = new Array(count).fill(0);

        if (this.hamiltonianPathUtil(path, 0, added)) {
            console.log("Hamiltonian Path found :: " , path);
            return true;
        }
        console.log("Hamiltonian Path not found");
        return false;
    }

    hamiltonianCycleUtil(path, pSize, added) {
        const count = this.count;
        if (pSize === count) {
            if (this.adj[path[pSize - 1]][path[0]] === 1) {
                path[pSize] = path[0];
                return true;
            }
            else
                return false;
        }

        for (let vertex = 0; vertex < count; vertex++) {
            if (pSize === 0 || (this.adj[path[pSize - 1]][vertex] === 1 && added[vertex] === 0)) {
                path[pSize++] = vertex;
                added[vertex] = 1;
                if (this.hamiltonianCycleUtil(path, pSize, added))
                    return true;
                pSize--;
                added[vertex] = 0;
            }
        }
        return false;
    }

    hamiltonianCycle() {
        const count = this.count;
        const path = new Array(count + 1).fill(0);
        const added = new Array(count).fill(0);

        if (this.hamiltonianCycleUtil(path, 0, added)) {
            console.log("Hamiltonian Cycle found :: ", path);
            return true;
        }
        console.log("Hamiltonian Cycle not found");
        return false;
    }
}

/* Testing Code */
function test1(){
    const graph = new Graph(4);
    graph.addUndirectedEdge(0, 1);
    graph.addUndirectedEdge(0, 2);
    graph.addUndirectedEdge(1, 2);
    graph.addUndirectedEdge(2, 3);
    graph.print();
}

/*
Vertex 0 is connected to : 1(cost: 1) 2(cost: 1) 
Vertex 1 is connected to : 0(cost: 1) 2(cost: 1) 
Vertex 2 is connected to : 0(cost: 1) 1(cost: 1) 3(cost: 1) 
Vertex 3 is connected to : 2(cost: 1) 
*/

/* Testing Code */
function test2(){
    const gph = new Graph(9);
    gph.addUndirectedEdge(0, 1, 4);
    gph.addUndirectedEdge(0, 7, 8);
    gph.addUndirectedEdge(1, 2, 8);
    gph.addUndirectedEdge(1, 7, 11);
    gph.addUndirectedEdge(2, 3, 7);
    gph.addUndirectedEdge(2, 8, 2);
    gph.addUndirectedEdge(2, 5, 4);
    gph.addUndirectedEdge(3, 4, 9);
    gph.addUndirectedEdge(3, 5, 14);
    gph.addUndirectedEdge(4, 5, 10);
    gph.addUndirectedEdge(5, 6, 2);
    gph.addUndirectedEdge(6, 7, 1);
    gph.addUndirectedEdge(6, 8, 6);
    gph.addUndirectedEdge(7, 8, 7);
    console.log("")
    gph.primsMST();
    console.log("")
}

/*
Edges are (0->1 @ 4) (5->2 @ 4) (2->3 @ 7) (3->4 @ 9) (6->5 @ 2) (7->6 @ 1) (0->7 @ 8) (2->8 @ 2) 
Total MST cost : 37
*/

/* Testing Code */
function test3(){
    const gph = new Graph(9);
    gph.addUndirectedEdge(0, 1, 4)
    gph.addUndirectedEdge(0, 7, 8)
    gph.addUndirectedEdge(1, 2, 8)
    gph.addUndirectedEdge(1, 7, 11)
    gph.addUndirectedEdge(2, 3, 7)
    gph.addUndirectedEdge(2, 8, 2)
    gph.addUndirectedEdge(2, 5, 4)
    gph.addUndirectedEdge(3, 4, 9)
    gph.addUndirectedEdge(3, 5, 14)
    gph.addUndirectedEdge(4, 5, 10)
    gph.addUndirectedEdge(5, 6, 2)
    gph.addUndirectedEdge(6, 7, 1)
    gph.addUndirectedEdge(6, 8, 6)
    gph.addUndirectedEdge(7, 8, 7)
    gph.dijkstra(1);
}

/*
Shortest Paths: (1->0 @ 4) (1->2 @ 8) (1->2->3 @ 15) (1->2->5->4 @ 22) (1->2->5 @ 12) (1->7->6 @ 12) (1->7 @ 11) (1->2->8 @ 10) 
*/

/* Testing Code */
function test4(){
    const count = 5;
    const graph = new Graph(count);
    const adj =
        [[0, 1, 0, 1, 0],
        [1, 0, 1, 1, 0],
        [0, 1, 0, 0, 1],
        [1, 1, 0, 0, 1],
        [0, 1, 1, 1, 0]];

    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
            if (adj[i][j] === 1)
                graph.addDirectedEdge(i, j, 1);
        }
    }

    console.log(`hamiltonianPath : ${graph.hamiltonianPath()}`);

    const graph2 = new Graph(count);
    const adj2 =
        [[0, 1, 0, 1, 0],
        [1, 0, 1, 1, 0],
        [0, 1, 0, 0, 1],
        [1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0]];

    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
            if (adj2[i][j] === 1)
                graph2.addDirectedEdge(i, j, 1);
        }
    }
    console.log(`hamiltonianPath :  ${graph2.hamiltonianPath()}`);
}

/*
Hamiltonian Path found ::  [ 0, 1, 2, 4, 3 ]
hamiltonianPath : true

Hamiltonian Path found ::  [ 0, 3, 1, 2, 4 ]
hamiltonianPath :  true
*/

/* Testing Code */
function test5(){
    const count = 5;
    const graph = new Graph(count);
    const adj =
        [[0, 1, 0, 1, 0],
        [1, 0, 1, 1, 0],
        [0, 1, 0, 0, 1],
        [1, 1, 0, 0, 1],
        [0, 1, 1, 1, 0]];

    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
            if (adj[i][j] === 1)
                graph.addDirectedEdge(i, j, 1);
        }
    }

    console.log(`hamiltonianCycle : ${graph.hamiltonianCycle()}`);

    const graph2 = new Graph(count);
    const adj2 =
        [[0, 1, 0, 1, 0],
        [1, 0, 1, 1, 0],
        [0, 1, 0, 0, 1],
        [1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0]];

    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
            if (adj2[i][j] === 1)
                graph2.addDirectedEdge(i, j, 1);
        }
    }
    console.log(`hamiltonianCycle :  ${graph2.hamiltonianCycle()}`);
}

/*
Hamiltonian Cycle found ::  [ 0, 1, 2, 4, 3, 0 ]
hamiltonianCycle : true

Hamiltonian Cycle not found
hamiltonianCycle :  false
*/

test1()
test2()
test3()
test4()
test5()