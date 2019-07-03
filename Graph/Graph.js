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

class GraphEdge {
    constructor(dst, cst) {
        if (cst === undefined)
            cst = 1
        this.dest = dst
        this.cost = cst      
    }
}

GraphEdgeComparator = (x, y) => ( x.cost - y.cost ) > 0;

class Graph {
    constructor(cnt) {
        if (cnt === undefined)
            throw new Error('Invalid argument')

        this.count = cnt
        this.Adj = new Array()
     
        for (let i = 0; i < cnt; i++) {
            this.Adj[i] = new Array()
        }
    }

    addDirectedEdge(source, dest, cost) {
        if ((typeof source === 'number') && (typeof dest === 'number') && 
            (typeof cost === 'number')) {
            var edge = new GraphEdge(dest, cost)
            this.Adj[source].push(edge)
        }
        else if ((typeof source === 'number') && (typeof dest === 'number') && 
            cost === undefined) {
            var edge = new GraphEdge(dest, 1)
            this.Adj[source].push(edge)
        }
        else
            throw new Error('Invalid argument')
    }

    addUndirectedEdge(source, dest, cost) {
        this.addDirectedEdge(source, dest, cost)
        this.addDirectedEdge(dest, source, cost)
    }

    print() {
        for (let i = 0; i < this.count; i++) {
            const ad = this.Adj[i];
            let output = ""
            output += `Vertex ${i} is connected to : `
            for (let j = 0; j < ad.length; j++) {
                const adn = ad[j];
                output += `${adn.dest}(${adn.cost}) `
            }
            console.log(output)
        }
    }

    dfsStack(source, target) {
        const count = this.count;
        const visited = new Array(count).fill(false);
        const stk = ([]);
        const path = [];
        stk.push(source)
        visited[source] = true
        
        while (stk.length != 0) {
            const curr = stk.pop();
            path.push(curr);
            const adl = this.Adj[curr];
            for (let index = adl.length - 1; index >=  0; index--) {
                const adn = adl[index];
                if (visited[adn.dest] === false) {
                    visited[adn.dest] = true
                    stk.push(adn.dest)
                }
            }
        }
        console.log("DFS Path is : ", path)
        return visited[target]
    }

    dfs(source, target) {
        const count = this.count;
        const visited = new Array(count).fill(false);
        const path = []
        this.dfsUtil(source, visited, path)
        console.log("DFS Path is : ", path)
            return visited[target]
    }

    dfsUtil(index, visited, path) {
        visited[index] = true
        const adl = this.Adj[index];
        path.push(index)
        for (var index = 0; index < adl.length; index++) {
            const adn = adl[index];
            if (visited[adn.dest] === false)
                this.dfsUtil(adn.dest, visited, path)
        }
    }

    bfs(source, target) {
        const count = this.count;
        const visited = new Array(count).fill(false);
        const que = new Queue();
        const path = []
        que.add(source)
        visited[source] = true

        while (que.isEmpty() === false) {
            const curr = que.remove();
            path.push(curr)
            const adl = this.Adj[curr];
            for (let index = 0; index < adl.length; index++) {
                const adn = adl[index];
                if (visited[adn.dest] === false) {
                    visited[adn.dest] = true
                    que.add(adn.dest)
                }
            }
        }
        console.log("BFS Path is : ", path)
        return visited[target]
    }

    dfsUtil2(src, visited, stk) {
        visited[src] = true
        const adl = this.Adj[src];
        for (let index = 0; index < adl.length; index++) {
            const adn = adl[index];
            if (visited[adn.dest] === false) {
                this.dfsUtil2(adn.dest, visited, stk)
            }
        }
        stk.push(src)
    }

    topologicalSort() {
        const stk = ([]);
        const count = this.count;
        const visited = new Array(count).fill(false);
        const output = []  
        for (let i = 0; i < count; i++) {
            if (visited[i] === false) {
                this.dfsUtil2(i, visited, stk)
            }
        }
       
        while (stk.length != 0) {
            output.push(stk.pop())
        }
        console.log(output)
    }

    dfsUtil3(index, visited) {
        visited[index] = true
        const adl = this.Adj[index];
        for (var index = 0; index < adl.length; index++) {
            const adn = adl[index];
            if (visited[adn.dest] === false)
                this.dfsUtil3(adn.dest, visited)
        }
    }

    pathExist(source, dest) {
        const count = this.count;
        const visited = new Array(count).fill(false);
        this.dfsUtil3(source, visited)
        return visited[dest]
    }

    countAllPathDFS(visited, source, dest) {
        if (source === dest) {
            return 1
        }
        let count = 0;
        visited[source] = true
        const adl = this.Adj[source];
        
        for (let index = 0; index < adl.length; index++) {
            const adn = adl[index];
            if (visited[adn.dest] === false) {
                count += this.countAllPathDFS(visited, adn.dest, dest)
            }
        }
        visited[source] = false
        return count
    }

    countAllPath(src, dest) {
        const count = this.count;
        const visited = new Array(count).fill(false);
        return this.countAllPathDFS(visited, src, dest)
    }

    printAllPathDFS(visited, source, dest, path) {
        path.push(source)
        if (source === dest) {
            console.log(path)
            path.pop()
            return
        }

        visited[source] = true
        const adl = this.Adj[source];
        
        for (let index = 0; index < adl.length; index++) {
            const adn = adl[index];
            if (visited[adn.dest] === false) {
                this.printAllPathDFS(visited, adn.dest, dest, path)
            }
        }
        visited[source] = false
        path.pop()
    }

    printAllPath(src, dest) {
        const count = this.count;
        const visited = new Array(count).fill(false);
        const path = ([]);
        this.printAllPathDFS(visited, src, dest, path)
    }

    rootVertex() {
        const count = this.count;
        const visited = new Array(count).fill(false);
        let retVal = -1;
        for (let i = 0; i < count; i++) {
            if (visited[i] === false) {
                this.dfsUtil3(i, visited)
                retVal = i
            }
        }
        console.log(`Root vertex is :: ${retVal}`)
        return retVal
    }

    transitiveClosureUtil(source, dest, tc) {
        tc[source][dest] = 1
        const adl = this.Adj[dest];
        for (let index = 0; index < adl.length; index++) {
            const adn = adl[index];
            if (tc[source][adn.dest] === 0)
                this.transitiveClosureUtil(source, adn.dest, tc)
        }
    }

    transitiveClosure() {
        const count = this.count;
        const tc = new Array(count);
        for (var i = 0; i < count; i++) {
            tc[i] = new Array(count).fill(0);
        }

        for (var i = 0; i < count; i++) {
            this.transitiveClosureUtil(i, i, tc)
        }
        return tc
    }

    bfsLevelNode(source) {
        const count = this.count;
        const visited = new Array(count).fill(false);
        const level = new Array(count).fill(0);

        visited[source] = true
        level[source] = 0
        const que = new Queue();
        que.add(source)

        console.log('Node  - Level')
        while (que.isEmpty() === false) {
            let curr = que.remove()
            const depth = level[curr];
            const adl = this.Adj[curr];
            console.log(`${curr} - ${depth}`)
            for (let index = 0; index < adl.length; index++) {
                const adn = adl[index];
                if (visited[adn.dest] === false) {
                    visited[adn.dest] = true
                    que.add(adn.dest)
                    level[adn.dest] = depth + 1
                }
            }
        }
    }

    bfsDistance(source, dest) {
        const count = this.count;
        const visited = new Array(count).fill(false);
        const level = new Array(count).fill(0);

        visited[source] = true
        level[source] = 0
        const que = new Queue();
        que.add(source)

        while (que.isEmpty() === false) {
            const curr = que.remove();
            const depth = level[curr];
            const adl = this.Adj[curr];
            for (let index = 0; index < adl.length; index++) {
                const adn = adl[index];
                if (adn.dest === dest) {
                    return depth + 1
                }
                if (visited[adn.dest] === false) {
                    visited[adn.dest] = true
                    que.add(adn.dest)
                    level[adn.dest] = depth + 1
                }
            }
        }
        return -1
    }

    isCyclePresentUndirectedDFS(src, parentIndex, visited) {
        visited[src] = true
        let dest;
        const adl = this.Adj[src];

        for (let index = 0; index < adl.length; index++) {
            const adn = adl[index];
            dest = adn.dest
            if (visited[dest] === false) {
                if (this.isCyclePresentUndirectedDFS(dest, src, visited))
                    return true
            }
            else if (parentIndex !== dest)
                return true
        }
        return false
    }

    isCyclePresentUndirected() {
        const count = this.count;
        const visited = new Array(count).fill(false);

        for (let i = 0; i < count; i++) {
            if (visited[i] === false)
                if (this.isCyclePresentUndirectedDFS(i, -1, visited))
                    return true
        }
        return false
    }

    isCyclePresentDFS(index, visited, marked) {
        visited[index] = true
        marked[index] = 1
        const adl = this.Adj[index];
        for (var index = 0; index < adl.length; index++) {
            const adn = adl[index];
            const dest = adn.dest;
            if (marked[dest] === 1)
                return true
            if (visited[dest] === false)
                if (this.isCyclePresentDFS(dest, visited, marked))
                    return true
        }
        marked[index] = 0
        return false
    }

    isCyclePresent() {
        const count = this.count;
        const visited = new Array(count).fill(false);
        const marked = new Array(count).fill(0);

        for (let index = 0; index < count; index++) {
            if (visited[index] === false)
                if (this.isCyclePresentDFS(index, visited, marked))
                    return true
        }
        return false
    }

    isCyclePresentDFSColor(index, visited) {
        visited[index] = 1
        let dest;
        const adl = this.Adj[index];
        for (var index = 0; index < adl.length; index++) {
            const adn = adl[index];
            dest = adn.dest
            if (visited[dest] === 1)
                return true
            if (visited[dest] === 0)
                if (this.isCyclePresentDFSColor(dest, visited))
                    return true
        }
        visited[index] = 2
        return false
    }

    isCyclePresentColor() {
        const count = this.count;
        const visited = new Array(count).fill(0); // fill with 0

        for (let i = 0; i < count; i++) {
            if (visited[i] === 0)
                if (this.isCyclePresentDFSColor(i, visited))
                    return true
        }
        return false
    }

    transposeGraph() {
        const count = this.count;
        const g = new Graph(count);
        for (let i = 0; i < count; i++) {
            const adl = this.Adj[i];
            for (let index = 0; index < adl.length; index++) {
                const adn = adl[index];
                const dest = adn.dest;
                g.addDirectedEdge(dest, i)
            }
        }
        return g
    }

    isConnectedUndirected() {
        const count = this.count;
        const visited = new Array(count).fill(false);

        this.dfsUtil3(0, visited)
        for (let i = 0; i < count; i++) {
            if (visited[i] === false) {
                return false
            }
        }
        return true
    }

    isStronglyConnected() {
        const count = this.count;
        const visited = new Array(count).fill(false);

        this.dfsUtil3(0, visited)
        for (var i = 0; i < count; i++) {
            if (visited[i] === false) {
                return false
            }
        }
        const gReversed = this.transposeGraph();
        visited.fill(false)

        gReversed.dfsUtil3(0, visited)
        for (var i = 0; i < count; i++) {
            if (visited[i] === false) {
                return false
            }
        }
        return true
    }

    stronglyConnectedComponent() {
        const count = this.count;
        const visited = new Array(count).fill(false);
        const stk = ([]);

        for (let i = 0; i < count; i++) {
            if (visited[i] === false) {
                this.dfsUtil2(i, visited, stk)
            }
        }
        const gReversed = this.transposeGraph();
        visited.fill(false)

        const stk2 = ([]);
        while (stk.length != 0) {
            const curr = stk.pop();
            if (visited[curr] === false) {
                stk2.length = 0
                gReversed.dfsUtil2(curr, visited, stk2)
                console.log(stk2)
            }
        }
    }

prims() {
    const count = this.count;
    const previous = new Array(count).fill(-1);
    const infi = 2147483647;
    const dist = new Array(count).fill(infi);
    const visited = new Array(count).fill(false);
    let source = 0;
    dist[source] = 0

    const queue = new PriorityQueue(null, GraphEdgeComparator);
    let node = new GraphEdge(source, 0);
    queue.add(node)

    while (queue.isEmpty() === false) {
        node = queue.remove()
        source = node.dest
        
        if (visited[source] == true) {
            continue
        }
        visited[source] = true
        
        const adl = this.Adj[source];
        for (let index = 0; index < adl.length; index++) {
            const adn = adl[index];
            const dest = adn.dest;
            const alt = adn.cost;
            if (dist[dest] > alt && visited[dest] === false) {
                dist[dest] = alt
                previous[dest] = source
                node = new GraphEdge(dest, alt)
                queue.add(node)
            }
        }
    }
    for (let i = 0; i < count; i++) {
        if (dist[i] === infi) {
            console.log(`Node id ${i} is Unreachable`)
        } else {
            console.log(`Node id ${i}, prev : ${previous[i]}, cost : ${dist[i]}`)
        }
    }
}

dijkstra(source) {
    const count = this.count;
    const previous = new Array(count).fill(-1);
    const Infinity = 2147483647;
    const dist = new Array(count).fill(Infinity);
    const visited = new Array(count).fill(false);

    dist[source] = 0
    previous[source] = -1

    const queue = new PriorityQueue(null, GraphEdgeComparator);
    let node = new GraphEdge(source, 0);
    queue.add(node)

    while (queue.isEmpty() === false) {
        node = queue.remove()
        source = node.dest
        
        if (visited[source] == true) {
            continue
        }
        visited[source] = true
        
        const adl = this.Adj[source];
        for (let index = 0; index < adl.length; index++) {
            const adn = adl[index];
            const dest = adn.dest;
            const alt = adn.cost + dist[source];
            if (dist[dest] > alt && visited[dest] === false) {
                dist[dest] = alt
                previous[dest] = source
                node = new GraphEdge(dest, alt)
                queue.add(node)
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

    shortestPath(source) {
        let curr;
        const count = this.count;
        const infi = 2147483647;
        const distance = new Array(count).fill(infi);
        const path = new Array(count).fill(0);

        const que = new Queue();
        que.add(source)
        distance[source] = 0

        while (que.isEmpty() === false) {
            curr = que.remove()
            const adl = this.Adj[curr];
            for (let index = 0; index < adl.length; index++) {
                const adn = adl[index];
                if (distance[adn.dest] === infi) {
                    distance[adn.dest] = distance[curr] + 1
                    path[adn.dest] = curr
                    que.add(adn.dest)
                }
            }
        }

        for (let i = 0; i < count; i++) {
            console.log(`${path[i]} to ${i} weight ${distance[i]}`)
        }
    }

    bellmanFordshortestPath(source) {
        const count = this.count;
        const path = new Array(count).fill(-1);
        const infi = 2147483647;
        const distance = new Array(count).fill(infi);

        distance[source] = 0
        for (var i = 0; i < count - 1; i++) {
            for (let j = 0; j < count; j++) {
                const adl = this.Adj[j];
                for (let index = 0; index < adl.length; index++) {
                    const adn = adl[index];
                    const newDistance = distance[j] + adn.cost;
                    if (distance[adn.dest] > newDistance) {
                        distance[adn.dest] = newDistance
                        path[adn.dest] = j
                    }
                }
            }
        }
        for (var i = 0; i < count; i++) {
            console.log(`${path[i]} to ${i} weight ${distance[i]}`)
        }
    }

    bestFirstSearchPQ(source, dest) {
        const count = this.count;
        const previous = new Array(count).fill(-1);
        const infi = 2147483647;
        const dist = new Array(count).fill(infi);
        const visited = new Array(count).fill(false);

        dist[source] = 0
        previous[source] = -1

        const pq = new PriorityQueue(null, GraphEdgeComparator);
        let node = new GraphEdge(source, 0);
        pq.add(node)

        while (pq.isEmpty() !== false) {
            node = pq.remove()
            source = node.dest
            if (source === dest) {
                return node.cost
            }
            visited[source] = true
            const adl = this.Adj[source];
            for (let index = 0; index < adl.length; index++) {
                const adn = adl[index];
                const curr = adn.dest;
                const cost = adn.cost;
                const alt = cost + dist[source];
                if (dist[curr] > alt && visited[curr] === false) {
                    dist[curr] = alt
                    previous[curr] = source
                    node = new GraphEdge(curr, alt)
                    pq.add(node)
                }
            }
        }
        return -1
    }

    isConnected() {
        const count = this.count;
        const visited = new Array(count).fill(false);
        let adl;
        for (var i = 0; i < count; i++) {
            adl = this.Adj[i]
            if (adl.length > 0) {
                this.dfsUtil3(i, visited)
                break
            }
        }
        for (var i = 0; i < count; i++) {
            adl = this.Adj[i]
            if (adl.length > 0)
                if (visited[i] === false)
                    return false
        }
        return true
    }

    isEulerian() {
        const count = this.count;

        if (this.isConnected() === false) {
            console.log('graph is not Eulerian')
            return 0
        }
        let odd = 0;
        const inDegree = new Array(count).fill(0);
        const outDegree = new Array(count).fill(0);

        for (var i = 0; i < count; i++) {
            let adl = this.Adj[i]
            for (let index = 0; index < adl.length; index++) {
                const adn = adl[index];
                outDegree[i] += 1
                inDegree[adn.dest] += 1
            }
        }
        for (var i = 0; i < count; i++) {
            if ((inDegree[i] + outDegree[i]) % 2 !== 0) {
                odd += 1
            }
        }

        if (odd === 0) {
            console.log('graph is Eulerian')
            return 2
        } else if (odd === 2) {
            console.log('graph is Semi-Eulerian')
            return 1
        } else {
            console.log('graph is not Eulerian')
            return 0
        }
    }

    isStronglyConnected2() {
        const count = this.count;
        const visited = new Array(count).fill(false);
        let adl;

        for (var index = 0; index < count; index++) {
            adl = this.Adj[index]
            if (adl.length > 0)
                break
        }

        this.dfsUtil3(index, visited)
        for (var i = 0; i < count; i++) {
            adl = this.Adj[i]
            if (visited[i] === false && adl.length > 0)
                return false
        }

        const gReversed = this.transposeGraph();
        visited.fill(false)

        gReversed.dfsUtil3(index, visited)
        for (var i = 0; i < count; i++) {
            adl = gReversed.Adj[i]
            if (visited[i] === false && adl.length > 0)
                return false
        }
        return true
    }

    isEulerianCycle() {
        const count = this.count;
        const inDegree = new Array(count).fill(0);
        const outDegree = new Array(count).fill(0);

        if (!this.isStronglyConnected2())
            return false

        for (var i = 0; i < count; i++) {
            const adl = this.Adj[i];
            for (let index = 0; index < adl.length; index++) {
                const adn = adl[index];
                outDegree[i] += 1
                inDegree[adn.dest] += 1
            }
        }

        for (var i = 0; i < count; i++) {
            if (inDegree[i] !== outDegree[i])
                return false
        }
        return true
    }
}

function test1(){
    const graph = new Graph(4);
    graph.addUndirectedEdge(0, 1, 1);
    graph.addUndirectedEdge(0, 2, 1);
    graph.addUndirectedEdge(1, 2, 1);
    graph.addUndirectedEdge(2, 3, 1);
    graph.print();
};
//test1()

function test2(){
    const gph = new Graph(8);
    gph.ddUndirecbtedEdge(0, 1)
    gph.addUndirectedEdge(0, 2)
    gph.addUndirectedEdge(0, 3)
    gph.addUndirectedEdge(1, 4)
    gph.addUndirectedEdge(2, 5)
    gph.addUndirectedEdge(3, 6)
    gph.addUndirectedEdge(4, 7)
    gph.addUndirectedEdge(5, 7)
    gph.addUndirectedEdge(6, 7)
    console.log("Path between 0 & 6 : ", gph.dfs(0, 6))
    console.log("Path between 0 & 6 : ", gph.bfs(0, 6))
    console.log("Path between 0 & 6 : ", gph.dfsStack(0, 6))
}

//test2()

function test3(){
    const gph = new Graph(6);
    gph.addDirectedEdge(5, 2, 1)
    gph.addDirectedEdge(5, 0, 1)
    gph.addDirectedEdge(4, 0, 1)
    gph.addDirectedEdge(4, 1, 1)
    gph.addDirectedEdge(2, 3, 1)
    gph.addDirectedEdge(3, 1, 1)
    //gph.print()
    gph.topologicalSort()
}

//test3()

function test4(){
    const gph = new Graph(5);
    gph.addDirectedEdge(0, 1, 1)
    gph.addDirectedEdge(0, 2, 1)
    gph.addDirectedEdge(2, 3, 1)
    gph.addDirectedEdge(1, 3, 1)
    gph.addDirectedEdge(3, 4, 1)
    gph.addDirectedEdge(1, 4, 1)
    console.log(`PathExist :: ${gph.pathExist(0, 4)}`)
    console.log("Path Count :: " , gph.countAllPath(0, 4))
    gph.printAllPath(0, 4)
}

//test4()

function test5(){
    const gph = new Graph(7);
    gph.addDirectedEdge(0, 1, 1)
    gph.addDirectedEdge(0, 2, 1)
    gph.addDirectedEdge(1, 3, 1)
    gph.addDirectedEdge(4, 1, 1)
    gph.addDirectedEdge(6, 4, 1)
    gph.addDirectedEdge(5, 6, 1)
    gph.addDirectedEdge(5, 2, 1)
    gph.addDirectedEdge(6, 0, 1)
    gph.rootVertex()
}

//test5()

function test6(){
    const gph = new Graph(4);
    gph.addDirectedEdge(0, 1, 1)
    gph.addDirectedEdge(0, 2, 1)
    gph.addDirectedEdge(1, 2, 1)
    gph.addDirectedEdge(2, 0, 1)
    gph.addDirectedEdge(2, 3, 1)
    gph.addDirectedEdge(3, 3, 1)
    const tc = gph.transitiveClosure();
    for (let i = 0; i < 4; i++) {
        console.log(tc[i])
    }
}

//test6()

function test7(){
    const gph = new Graph(7);
    gph.addUndirectedEdge(0, 1, 1)
    gph.addUndirectedEdge(0, 2, 1)
    gph.addUndirectedEdge(0, 4, 1)
    gph.addUndirectedEdge(1, 2, 1)
    gph.addUndirectedEdge(2, 5, 1)
    gph.addUndirectedEdge(3, 4, 1)
    gph.addUndirectedEdge(4, 5, 1)
    gph.addUndirectedEdge(4, 6, 1)
    //gph.bfsLevelNode(1)
    console.log("BfsDistance :: " , gph.bfsDistance(1, 6))
}

//test7()

function test8(){
    const gph = new Graph(6);
    gph.addUndirectedEdge(0, 1, 1)
    gph.addUndirectedEdge(1, 2, 1)
    gph.addUndirectedEdge(3, 4, 1)
    gph.addUndirectedEdge(4, 2, 1)
    gph.addUndirectedEdge(2, 5, 1)
    gph.addUndirectedEdge(3, 5, 1)
    console.log(gph.isCyclePresentUndirected())
    console.log("IsConnectedUndirected : ", gph.isConnectedUndirected())
}

//test8()

function test9(){
    const gph = new Graph(5);
    gph.addDirectedEdge(0, 1, 1)
    gph.addDirectedEdge(0, 2, 1)
    gph.addDirectedEdge(2, 3, 1)
    gph.addDirectedEdge(1, 3, 1)
    gph.addDirectedEdge(3, 4, 1)
    gph.addDirectedEdge(4, 1, 1)
    console.log(gph.isCyclePresent())
    console.log(gph.isCyclePresentColor())
}
//test9()

function test10(){
    const graph = new Graph(4);
    graph.addDirectedEdge(0, 1);
    graph.addDirectedEdge(0, 2);
    graph.addDirectedEdge(1, 2);
    graph.addDirectedEdge(2, 3);
    const g = graph.transposeGraph()
    g.print();
};

//test10()

function test11(){
    const gph = new Graph(5);
    gph.addDirectedEdge(0, 1, 1)
    gph.addDirectedEdge(1, 2, 1)
    gph.addDirectedEdge(2, 3, 1)
    gph.addDirectedEdge(3, 0, 1)
    gph.addDirectedEdge(2, 4, 1)
    gph.addDirectedEdge(4, 2, 1)
    console.log(`IsStronglyConnected:: ${gph.isStronglyConnected()}`)
}

//test11()

function test12(){
    const gph = new Graph(7);
    gph.addDirectedEdge(0, 1, 1)
    gph.addDirectedEdge(1, 2, 1)
    gph.addDirectedEdge(2, 0, 1)
    gph.addDirectedEdge(2, 3, 1)
    gph.addDirectedEdge(3, 4, 1)
    gph.addDirectedEdge(4, 5, 1)
    gph.addDirectedEdge(5, 3, 1)
    gph.addDirectedEdge(5, 6, 1)
    gph.stronglyConnectedComponent()
}

//test12()

function test13(){
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
    gph.dijkstra(1)
}
test13()

/*
Node id 0, prev : 1, cost : 4
Node id 1, prev : -1, cost : 0
Node id 2, prev : 1, cost : 8
Node id 3, prev : 2, cost : 15
Node id 4, prev : 5, cost : 22
Node id 5, prev : 2, cost : 12
Node id 6, prev : 7, cost : 12
Node id 7, prev : 1, cost : 11
Node id 8, prev : 2, cost : 10


Node id 0, prev : -1, cost : 0
Node id 1, prev : 0, cost : 4
Node id 2, prev : 5, cost : 4
Node id 3, prev : 2, cost : 7
Node id 4, prev : 3, cost : 9
Node id 5, prev : 6, cost : 2
Node id 6, prev : 7, cost : 1
Node id 7, prev : 0, cost : 8
Node id 8, prev : 2, cost : 2
*/

function test14(){
    const gph = new Graph(9);
    gph.addDirectedEdge(0, 1, 4)
    gph.addDirectedEdge(0, 7, 8)
    gph.addDirectedEdge(1, 2, 8)
    gph.addDirectedEdge(1, 7, 11)
    gph.addDirectedEdge(2, 3, 7)
    gph.addDirectedEdge(2, 8, 2)
    gph.addDirectedEdge(2, 5, 4)
    gph.addDirectedEdge(3, 4, 9)
    gph.addDirectedEdge(3, 5, 14)
    gph.addDirectedEdge(4, 5, 10)
    gph.addDirectedEdge(5, 6, 2)
    gph.addDirectedEdge(6, 7, 1)
    gph.addDirectedEdge(6, 8, 6)
    gph.addDirectedEdge(7, 8, 7)
    //gph.dijkstra(0)
    gph.shortestPath(0)

}

//test14()

function test15(){
    const gph = new Graph(9);
    gph.addUndirectedEdge(0, 2, 1)
    gph.addUndirectedEdge(1, 2, 5)
    gph.addUndirectedEdge(1, 3, 7)
    gph.addUndirectedEdge(1, 4, 9)
    gph.addUndirectedEdge(3, 2, 2)
    gph.addUndirectedEdge(3, 5, 4)
    gph.addUndirectedEdge(4, 5, 6)
    gph.addUndirectedEdge(4, 6, 3)
    gph.addUndirectedEdge(5, 7, 1)
    gph.addUndirectedEdge(6, 7, 7)
    gph.addUndirectedEdge(7, 8, 17)
    gph.bellmanFordshortestPath(1)
    console.log(`isConnectedUndirected :: ${gph.isConnectedUndirected()}`)
}

//test15()

function test16(){
    const gph = new Graph(5);
    gph.addDirectedEdge(0, 1, 3)
    gph.addDirectedEdge(0, 4, 2)
    gph.addDirectedEdge(1, 2, 1)
    gph.addDirectedEdge(2, 3, 1)
    gph.addDirectedEdge(4, 1, -2)
    gph.addDirectedEdge(4, 3, 1)
    gph.bellmanFordshortestPath(0)
}

//test16()

function heightTreeParentArr(arr){
    const count = arr.length;
    const heightArr = new Array(count).fill(0);
    const gph = new Graph(count);
    const visited = new Array(count).fill(false);
    let source = 0;

    for (let i = 0; i < count; i++) {
        if (arr[i] !== -1) {
            gph.addDirectedEdge(arr[i], i)
        } else {
            source = i
        }
    }
    visited[source] = true
    heightArr[source] = 0
    let maxHight = 0;
    const que = new Queue();
    que.add(source)

    while (que.isEmpty() === false) {
        curr = que.remove()
        const height = heightArr[curr];
        if (height > maxHight) {
            maxHight = height
        }
        const adl = gph.Adj[curr];
        for (let index = 0; index < adl.length; index++) {
            const adn = adl[index];
            if (visited[adn.dest] === false) {
                visited[adn.dest] = true
                que.add(adn.dest)
                heightArr[adn.dest] = height + 1
            }
        }
    }
    return maxHight
}

function getHeight(arr, height, index){
    if (arr[index] === -1) {
        return 0
    } else {
        return getHeight(arr, height, arr[index]) + 1
    }
}

function heightTreeParentArr2(arr ){
    const count = arr.length;
    const height = new Array(count).fill(0);
    let maxHeight = -1;

    for (let i = 0; i < count; i++) {
        height[i] = getHeight(arr, height, i)
        maxHeight = (maxHeight > height[i]) ? maxHeight : height[i]
    }
    return maxHeight
}

function test17(){
    const parentArray = [-1, 0, 1, 2, 3];
    console.log(heightTreeParentArr(parentArray))
    console.log(heightTreeParentArr2(parentArray))
}

//test17()

function test18(){
    const gph = new Graph(5);
    gph.addDirectedEdge(1, 0, 1)
    gph.addDirectedEdge(0, 2, 1)
    gph.addDirectedEdge(2, 1, 1)
    gph.addDirectedEdge(0, 3, 1)
    gph.addDirectedEdge(3, 4, 1)
    console.log(gph.isEulerian())
}

//test18()

function test19(){
    const gph = new Graph(5);
    gph.addDirectedEdge(0, 1, 1)
    gph.addDirectedEdge(1, 2, 1)
    gph.addDirectedEdge(2, 0, 1)
    gph.addDirectedEdge(0, 4, 1)
    gph.addDirectedEdge(4, 3, 1)
    gph.addDirectedEdge(3, 0, 1)
    console.log(gph.isEulerianCycle())
}

//test19()