
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

        if (this.stk2.length > 0) {
            return this.stk2.pop();
        }
        while (this.stk1.length > 0) {
            value = this.stk1.pop();
            this.stk2.push(value);
        };
        return this.stk2.pop();
    }

    isEmpty() {
        return (this.stk1.length + this.stk2.length) === 0
    }
}

defaultCmp = (x, y) => (x - y) > 0;

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
            throw new Error('Invalid arguments');
    }

proclateDown(position) {
        const lChild = 2 * position;
        const rChild = lChild + 1;
        let child = -1;
        let temp;
        if (lChild <= this.length) {
            child = lChild;
        }
        if (rChild <= this.length && this.comp(this.arr[lChild], this.arr[rChild]) ) {
            child = rChild;
        }
        if (child !== -1 && this.comp(this.arr[position], this.arr[child])) {
            temp = this.arr[position];
            this.arr[position] = this.arr[child];
            this.arr[child] = temp;
            this.proclateDown(child);
        }
    }

    proclateUp(position) {
        const parent = Math.floor(position / 2);
        let temp;
        if (parent === 0) {
            return;
        }
        if (this.comp(this.arr[parent], this.arr[position])) {
            temp = this.arr[position];
            this.arr[position] = this.arr[parent];
            this.arr[parent] = temp;
            this.proclateUp(parent);
        }
    }

    add(value) {
        this.length++;
        this.arr[this.length] = value;
        this.proclateUp(this.length);
    }

    remove() {
        if (this.isEmpty()) {
            throw new Error('Queue Empty');
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
            throw new Error('Queue Empty');
        }
        return this.arr[1];
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

    addDirectedEdge(src, dst, cost) {
        this.adj[src][dst] = cost;
    }

    addUndirectedEdge(src, dst, cost) {
        this.addDirectedEdge(src, dst, cost);
        this.addDirectedEdge(dst, src, cost);
    }

    print() {
        console.info(this.adj);
    }

    print2() {
        for (let i = 0; i < this.count; i++) {
            let t = `Node index [ ${i} ] is connected with : `;
            for (let j = 0; j < this.count; j++) {
                if (this.adj[i][j] !== 0)
                    t += j +"(" + this.adj[i][j] +") "
            }
            console.info(t)
        }
    }

dijkstra(source) {
    const count = this.count
    const previous = new Array(count).fill(-1);
    const dist = new Array(count).fill(Infinity);
    const visited = new Array(count).fill(false);

    dist[source] = 0
    previous[source] = -1

    const queue = new PriorityQueue(null, GraphEdgeComparator);
    let node = new GraphEdge(source, 0);
    queue.add(node)

    while (queue.isEmpty() === false) {
        node = queue.remove();
        source = node.dest;
        visited[source] = true;
        for (let dest = 0; dest < count; dest++) {
            const cost = this.adj[source][dest];
            if (cost !== 0) {
                const alt = cost + dist[source];
                if (dist[dest] > alt && visited[dest] === false) {
                    dist[dest] = alt;
                    previous[dest] = source;
                    node = new GraphEdge(dest, alt);
                    queue.add(node);
                }
            }
        }
    }
    for (let i = 0; i < count; i++) {
        if (dist[i] === Infinity) {
            console.log(`Node id ${i} is Unreachable`)
        } else {
            console.log(`Node id ${i}, prev : ${previous[i]}, cost : ${dist[i]}`)
        }
    }
}

prims(gph) {
    const count = this.count;
    const previous = new Array(count).fill(-1);
    const dist = new Array(count).fill(Infinity);
    const visited = new Array(count).fill(false);

    let source = 0;
    dist[source] = 0
    previous[source] = -1

    const queue = new PriorityQueue(null, GraphEdgeComparator);
    let node = new GraphEdge(source, 0);
    queue.add(node)

    while (queue.isEmpty() === false) {
        node = queue.remove();
        source = node.dest;
        visited[source] = true;

        for (let dest = 0; dest < count; dest++) {
            const cost = this.adj[source][dest];
            if (cost !== 0) {
                const alt = cost;
                if (dist[dest] > alt && visited[dest] === false) {
                    dist[dest] = alt;
                    previous[dest] = source;
                    node = new GraphEdge(dest, alt);
                    queue.add(node);
                }
            }
        }
    }
    for (let i = 0; i < count; i++) {
        if (dist[i] === Infinity) {
            console.info(`Node id ${i},  prev : ${previous[i]}, cost : Unreachable`);
        }
        else {
            console.info(`Node id ${i},  prev : ${previous[i]}, cost : ${dist[i]}`);
        }
    }
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
        console.info("Hamiltonian Path found :: " , path);
        return true;
    }
    console.info("Hamiltonian Path not found");
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
        console.info("Hamiltonian Cycle found :: ", path);
        return true;
    }
    console.info("Hamiltonian Cycle not found");
    return false;
}
}

function test1(){
    const graph = new Graph(4);
    graph.addUndirectedEdge(0, 1, 1);
    graph.addUndirectedEdge(0, 2, 1);
    graph.addUndirectedEdge(1, 2, 1);
    graph.addUndirectedEdge(2, 3, 1);
    graph.print2();
};

//test1()

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
    gph.print2();
    console.log("")
    gph.prims();
    console.log("")
//    gph.dijkstra(0);
};

//test2()

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
    //gph.prims()
    gph.dijkstra(1);
};

//test3()

function test4(){
    const count = 5;
    const graph = new Graph(count);
    const adj =
        [[0, 1, 0, 1, 0],
        [1, 0, 1, 1, 0],
        [0, 1, 0, 0, 1],
        [1, 1, 0, 0, 1],
        [0, 1, 1, 1, 0]];

    for (var i = 0; i < count; i++) {
        for (var j = 0; j < count; j++) {
            if (adj[i][j] === 1)
                graph.addDirectedEdge(i, j, 1);
        }
    }

    console.info(`hamiltonianPath : ${graph.hamiltonianPath()}`);

    const graph2 = new Graph(count);
    const adj2 =
        [[0, 1, 0, 1, 0],
        [1, 0, 1, 1, 0],
        [0, 1, 0, 0, 1],
        [1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0]];

    for (var i = 0; i < count; i++) {
        for (var j = 0; j < count; j++) {
            if (adj2[i][j] === 1)
                graph2.addDirectedEdge(i, j, 1);
        }
    }
    console.info(`hamiltonianPath :  ${graph2.hamiltonianPath()}`);
};

test4()

function test5(){
    const count = 5;
    const graph = new Graph(count);
    const adj =
        [[0, 1, 0, 1, 0],
        [1, 0, 1, 1, 0],
        [0, 1, 0, 0, 1],
        [1, 1, 0, 0, 1],
        [0, 1, 1, 1, 0]];

    for (var i = 0; i < count; i++) {
        for (var j = 0; j < count; j++) {
            if (adj[i][j] === 1)
                graph.addDirectedEdge(i, j, 1);
        }
    }

    console.info(`hamiltonianCycle : ${graph.hamiltonianCycle()}`);

    const graph2 = new Graph(count);
    const adj2 =
        [[0, 1, 0, 1, 0],
        [1, 0, 1, 1, 0],
        [0, 1, 0, 0, 1],
        [1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0]];

    for (var i = 0; i < count; i++) {
        for (var j = 0; j < count; j++) {
            if (adj2[i][j] === 1)
                graph2.addDirectedEdge(i, j, 1);
        }
    }
    console.info(`hamiltonianCycle :  ${graph2.hamiltonianCycle()}`);
};

test5()
