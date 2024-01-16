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

class Sets {
    constructor(p, r) {
        this.parent = p;
        this.rank = r;
    }
}
// Get root of set
function find(sets, index) {
    let p = sets[index].parent;
    while (p != index) {
        index = p;
        p = sets[index].parent;
    }
    return index;
}
// consider x and y are roots of sets.
function union(sets, x, y) {
    if (sets[x].rank < sets[y].rank) {
        sets[x].parent = y;
    } else if (sets[y].rank < sets[x].rank) {
        sets[y].parent = x;
    } else {
        sets[x].parent = y;
        sets[y].rank++;
    }
}

function find1(parent, index) {
    let p = parent[index];
    while (p != -1) {
        index = p;
        p = parent[index];
    }
    return index;
}

function union1(parent, x, y) {
    parent[y] = x;
}

class GraphEdge {
    constructor(src, dst, cst = 1) {
        this.src = src
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
        this.Adj = new Array(cnt)
     
        for (let i = 0; i < cnt; i++) {
            this.Adj[i] = new Array()
        }
    }

    addDirectedEdge(source, dest, cost = 1) {
        let edge = new GraphEdge(source, dest, cost)
        this.Adj[source].push(edge)
    }

    addUndirectedEdge(source, dest, cost = 1) {
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
                output += `${adn.dest}(cost: ${adn.cost}) `
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
        console.log("DFS Path is : " + path)
        return visited[target]
    }

    dfs(source, target) {
        const count = this.count;
        const visited = new Array(count).fill(false);
        const path = []
        this.dfsUtil(source, visited, path)
        console.log("DFS Path is : " + path)
        return visited[target]
    }

    dfsUtil(index, visited, path) {
        visited[index] = true
        const adl = this.Adj[index];
        path.push(index)
        for (let index = 0; index < adl.length; index++) {
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
        console.log("BFS Path is : " + path)
        return visited[target]
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
        console.log("Topological sort : " + output)
    }

    dfsUtil3(index, visited) {
        visited[index] = true
        const adl = this.Adj[index];
        for (let index = 0; index < adl.length; index++) {
            const adn = adl[index];
            if (visited[adn.dest] === false)
                this.dfsUtil3(adn.dest, visited)
        }
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
        for (let i = 0; i < count; i++) {
            tc[i] = new Array(count).fill(0);
        }

        for (let i = 0; i < count; i++) {
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
            } else if (parentIndex !== dest)
                return true
        }
        return false
    }

    isCyclePresentUndirected() {
        const count = this.count;
        const visited = new Array(count).fill(false);

        for (let i = 0; i < count; i++) {
            if (visited[i] === false &&
                    this.isCyclePresentUndirectedDFS(i, -1, visited))
                    return true
        }
        return false
    }

    isCyclePresentUndirected2() {
		const count = this.count;
		const parent = new Array(count).fill(-1);
		let edge = [];
		const flags = new Array(count).fill(false).map(() => new Array(count).fill(false));
		for (let i = 0; i < count; i++) {
			let ad = this.Adj[i];
			for (const adn of ad) {
				// Using flags[][] array, if considered edge x to y, 
				// then ignore edge y to x.
				if (flags[adn.dest][adn.src] == false) {
					edge.push(adn);
					flags[adn.src][adn.dest] = true;
				}
			}
		}
		for (const e of edge) {
			let x = find1(parent, e.src);
			let y = find1(parent, e.dest);
			if (x == y) {
				return true;
			}
			union1(parent, x, y);
		}
		return false;
	}

	isCyclePresentUndirected3() {
		const count = this.count;
		//Different subsets are created.
		const sets = new Array(count);
		for (let i = 0; i < count; i++) {
			sets[i] = new Sets(i, 0);
		}
		let edge = [];
		const flags = new Array(count).fill(false).map(() => new Array(count).fill(false));
		for (let i = 0; i < count; i++) {
			let ad = this.Adj[i];
			for (const adn of ad) {
				// Using flags[][] array, if considered edge x to y, 
				// then ignore edge y to x.
				if (flags[adn.dest][adn.src] == false) {
					edge.push(adn);
					flags[adn.src][adn.dest] = true;
				}
			}
		}
		for (const e of edge) {
			let x = find(sets, e.src);
			let y = find(sets, e.dest);
			if (x == y) {
				return true;
			}
			union(sets, x, y);
		}
		return false;
	}



    isCyclePresentDFS(index, visited, marked) {
        visited[index] = true
        marked[index] = 1
        const adl = this.Adj[index];
        for (let index = 0; index < adl.length; index++) {
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
        for (let index = 0; index < adl.length; index++) {
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
        for (let i = 0; i < count; i++) {
            if (visited[i] === false) {
                return false
            }
        }
        const gReversed = this.transposeGraph();
        visited.fill(false)

        gReversed.dfsUtil3(0, visited)
        for (let i = 0; i < count; i++) {
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

    primsMST() {
        const count = this.count;
        const previous = new Array(count).fill(-1);
        const infi = 2147483647;
        const dist = new Array(count).fill(infi);
        const visited = new Array(count).fill(false);
        
        let source = 0;
        dist[source] = 0;
        previous[source] = 0;

        const queue = new PriorityQueue(GraphEdgeComparator);
        let node = new GraphEdge(source, source, 0);
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
                    node = new GraphEdge(source, dest, alt)
                    queue.add(node)
                }
            }
        }
        let total = 0;
        let output = "Edges are " ;
        for (let i = 0; i < count; i++) {
            if (dist[i] === infi) {
                output += `( ${i},  Unreachable)`
            } else if (previous[i] != i) {
                output += `(${previous[i]}->${i} @ ${dist[i]}) `
                total += dist[i];
            }
        }
        console.log(output);
        console.log(`Total MST cost : ${total}`)
    }

    kruskalMST() {
        const count = this.count;
        //Different subsets are created.
        const sets = new Array(count);
        for (let i = 0; i < count; i++) {
            sets[i] = new Sets(i, 0);
        }
        // Edges are added to array and sorted.
        let E = 0;
        let edge = [];
        for (let i = 0; i < count; i++) {
            let ad = this.Adj[i];
            for (const adn of ad) {
                edge.push(adn);
                E++
            }
        }
        edge.sort(function (a, b){	return (a.cost - b.cost);});
        let sum = 0;
        let output = "Edges are "
        for (let i = 0; i < E; i++) {
            let x = find(sets, edge[i].src);
            let y = find(sets, edge[i].dest);
            if (x != y) {
                output += ("(" + edge[i].src + "->" + edge[i].dest + " @ " + edge[i].cost + ") ");
                sum += edge[i].cost;
                union(sets, x, y);
            }
        }
        console.log(output);
        console.log(`Total MST cost : ${sum}`)
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

    dijkstra(source) {
        const count = this.count;
        const previous = new Array(count).fill(-1);
        const Infinity = 999999;
        const dist = new Array(count).fill(Infinity);
        const visited = new Array(count).fill(false);

        dist[source] = 0
        previous[source] = source

        const queue = new PriorityQueue(GraphEdgeComparator);
        let node = new GraphEdge(source, source, 0);
        queue.add(node)
        let curr;

        while (queue.isEmpty() === false) {
            node = queue.remove()
            curr = node.dest
            
            if (visited[curr] == true) {
                continue
            }
            visited[curr] = true
            
            const adl = this.Adj[curr];
            for (let index = 0; index < adl.length; index++) {
                const adn = adl[index];
                const dest = adn.dest;
                const alt = adn.cost + dist[curr];
                if (dist[dest] > alt && visited[dest] === false) {
                    dist[dest] = alt
                    previous[dest] = curr
                    node = new GraphEdge(curr, dest, alt)
                    queue.add(node)
                }
            }
        }
        this.printPath(previous, dist, count, source);
    }

    shortestPath(source) {
        const count = this.count;
        const infi = 2147483647;
        const distance = new Array(count).fill(infi);
        const previous = new Array(count).fill(-1);

        const que = new Queue();
        que.add(source)
        distance[source] = 0
        previous[source] = source
        let curr;
        while (que.isEmpty() === false) {
            curr = que.remove()
            const adl = this.Adj[curr];
            for (let index = 0; index < adl.length; index++) {
                const adn = adl[index];
                if (distance[adn.dest] === infi) {
                    distance[adn.dest] = distance[curr] + 1
                    previous[adn.dest] = curr
                    que.add(adn.dest)
                }
            }
        }
        this.printPath(previous, distance, count, source);
    }

    bellmanFordshortestPath(source) {
        const count = this.count;
        const previous = new Array(count).fill(-1);
        const infi = 2147483647;
        const distance = new Array(count).fill(infi);

        distance[source] = 0
        previous[source] = source
        for (let i = 0; i < count - 1; i++) {
            for (let j = 0; j < count; j++) {
                const adl = this.Adj[j];
                for (let index = 0; index < adl.length; index++) {
                    const adn = adl[index];
                    const newDistance = distance[j] + adn.cost;
                    if (distance[adn.dest] > newDistance) {
                        distance[adn.dest] = newDistance
                        previous[adn.dest] = j
                    }
                }
            }
        }
        this.printPath(previous, distance, count, source);
    }

    bestFirstSearchPQ(source, dest) {
        const count = this.count;
        const previous = new Array(count).fill(-1);
        const infi = 2147483647;
        const dist = new Array(count).fill(infi);
        const visited = new Array(count).fill(false);

        dist[source] = 0
        previous[source] = -1

        const pq = new PriorityQueue(GraphEdgeComparator);
        let node = new GraphEdge(source, source, 0);
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
                    node = new GraphEdge(source, curr, alt)
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
        for (let i = 0; i < count; i++) {
            adl = this.Adj[i]
            if (adl.length > 0) {
                this.dfsUtil3(i, visited)
                break
            }
        }
        for (let i = 0; i < count; i++) {
            adl = this.Adj[i]
            if (adl.length > 0 && visited[i] === false)
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

        for (let i = 0; i < count; i++) {
            let adl = this.Adj[i]
            for (let index = 0; index < adl.length; index++) {
                const adn = adl[index];
                outDegree[i] += 1
                inDegree[adn.dest] += 1
            }
        }
        for (let i = 0; i < count; i++) {
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
        let index;
        for (index = 0; index < count; index++) {
            adl = this.Adj[index]
            if (adl.length > 0)
                break
        }

        this.dfsUtil3(index, visited)
        for (let i = 0; i < count; i++) {
            adl = this.Adj[i]
            if (visited[i] === false && adl.length > 0)
                return false
        }

        const gReversed = this.transposeGraph();
        visited.fill(false)

        gReversed.dfsUtil3(index, visited)
        for (let i = 0; i < count; i++) {
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

        for (let i = 0; i < count; i++) {
            const adl = this.Adj[i];
            for (let index = 0; index < adl.length; index++) {
                const adn = adl[index];
                outDegree[i] += 1
                inDegree[adn.dest] += 1
            }
        }

        for (let i = 0; i < count; i++) {
            if (inDegree[i] !== outDegree[i])
                return false
        }
        return true
    }

    floydWarshall() {
        const V = this.count;
        const INF = Number.MAX_VALUE;
        const dist = Array(V).fill(0).map(() => new Array(V).fill(INF));
        const path = Array(V).fill(0).map(() => new Array(V).fill(-1));
        for (let i = 0; i < V; i++) {
            path[i][i] = 0;
        }

        for (let i = 0; i < V; i++) {
            const adl = this.Adj[i];
            for (let index = 0; index < adl.length; index++) {
                const adn = adl[index];
                path[i][adn.dest] = i;
                dist[i][adn.dest] = adn.cost;
            }
        }
        
        for (let k = 0; k < V; k++) { // Pick intermediate vertices.
            for (let i = 0; i < V; i++) { // Pick source vertices one by one.
                for (let j = 0; j < V; j++) { // Pick destination vertices.
                    // If we have a shorter path from i to j via k.
                    // then update dist[i][j] and  and path[i][j]
                    if (dist[i][k] + dist[k][j] < dist[i][j]) {
                        dist[i][j] = dist[i][k] + dist[k][j];
                        path[i][j] = path[k][j];
                    }
                }
                // dist[i][i] is 0 in the start.
                // If there is a better path from i to i and is better path then we have -ve cycle.                //
                if (dist[i][i] < 0) {
                    console.log("Negative-weight cycle found.");
                    return;
                }
            }
        }
        Graph.printSolution(dist, path, V);
    }

    static 	printSolution(cost, path, V) {
        let output = "Shortest Paths : ";
        for (let u = 0; u < V; u++) {
            for (let v = 0; v < V; v++) {
                if (u != v && path[u][v] != -1) {
                    output += "(";
                    output += Graph.printPath(path, u, v);
                    output += " @ " + cost[u][v] + ") "
                }
            }
        }
        console.log(output);
    }

    static printPath(path, u, v) {
        if (path[u][v] == u) {
            return (u + "->" + v );
        }
        let output = Graph.printPath(path, u, path[u][v]);
        output += ("->" + v);
        return output;
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
    const gph = new Graph(8);
    gph.addUndirectedEdge(0, 3);
    gph.addUndirectedEdge(0, 2);
    gph.addUndirectedEdge(0, 1);
    gph.addUndirectedEdge(1, 4);
    gph.addUndirectedEdge(2, 5);
    gph.addUndirectedEdge(3, 6);
    gph.addUndirectedEdge(6, 7);
    gph.addUndirectedEdge(5, 7);
    gph.addUndirectedEdge(4, 7);
    console.log("Path between 0 & 6 :", gph.dfs(0, 6))
    console.log("Path between 0 & 6 :", gph.bfs(0, 6))
    console.log("Path between 0 & 6 :", gph.dfsStack(0, 6))
}

/*
DFS Path is : 0,1,4,7,5,2,6,3
Path between 0 & 6 : true
BFS Path is : 0,1,2,3,4,5,6,7
Path between 0 & 6 : true
DFS Path is : 0,1,4,7,5,6,2,3
Path between 0 & 6 : true
*/

/* Testing Code */
function test3(){
    const gph = new Graph(9);
    gph.addDirectedEdge(0, 2);
    gph.addDirectedEdge(1, 2);
    gph.addDirectedEdge(1, 3);
    gph.addDirectedEdge(1, 4);
    gph.addDirectedEdge(3, 2);
    gph.addDirectedEdge(3, 5);
    gph.addDirectedEdge(4, 5);
    gph.addDirectedEdge(4, 6);
    gph.addDirectedEdge(5, 7);
    gph.addDirectedEdge(6, 7);
    gph.addDirectedEdge(7, 8);
    gph.topologicalSort()
}

/*
Topological sort : 1,4,6,3,5,7,8,0,2
*/

/* Testing Code */
function test4(){
    const gph = new Graph(5);
    gph.addDirectedEdge(0, 1)
    gph.addDirectedEdge(0, 2)
    gph.addDirectedEdge(2, 3)
    gph.addDirectedEdge(1, 3)
    gph.addDirectedEdge(3, 4)
    gph.addDirectedEdge(1, 4)
    console.log(`PathExist :: ${gph.pathExist(0, 4)}`)
    console.log(`Path Count :: ${gph.countAllPath(0, 4)}`)
    gph.printAllPath(0, 4)
}

/*
PathExist :: true
Path Count :: 3
[ 0, 1, 3, 4 ]
[ 0, 1, 4 ]
[ 0, 2, 3, 4 ]
*/

/* Testing Code */
function test5(){
    const gph = new Graph(7);
    gph.addDirectedEdge(0, 1)
    gph.addDirectedEdge(0, 2)
    gph.addDirectedEdge(1, 3)
    gph.addDirectedEdge(4, 1)
    gph.addDirectedEdge(6, 4)
    gph.addDirectedEdge(5, 6)
    gph.addDirectedEdge(5, 2)
    gph.addDirectedEdge(6, 0)
    gph.rootVertex()
}

/*
Root vertex is :: 5
*/

/* Testing Code */
function test6(){
    const gph = new Graph(4);
    gph.addDirectedEdge(0, 1)
    gph.addDirectedEdge(0, 2)
    gph.addDirectedEdge(1, 2)
    gph.addDirectedEdge(2, 0)
    gph.addDirectedEdge(2, 3)
    gph.addDirectedEdge(3, 3)
    const tc = gph.transitiveClosure();
    for (let i = 0; i < 4; i++)
        console.log(tc[i])
}

/*
[ 1, 1, 1, 1 ]
[ 1, 1, 1, 1 ]
[ 1, 1, 1, 1 ]
[ 0, 0, 0, 1 ]
*/

/* Testing Code */
function test7(){
    const gph = new Graph(7);
    gph.addUndirectedEdge(0, 1)
    gph.addUndirectedEdge(0, 2)
    gph.addUndirectedEdge(0, 4)
    gph.addUndirectedEdge(1, 2)
    gph.addUndirectedEdge(2, 5)
    gph.addUndirectedEdge(3, 4)
    gph.addUndirectedEdge(4, 5)
    gph.addUndirectedEdge(4, 6)
    gph.bfsLevelNode(1)
    console.log("BfsDistance ::" , gph.bfsDistance(1, 6))
}

/*
Node  - Level
1 - 0
0 - 1
2 - 1
4 - 2
5 - 2
3 - 3
6 - 3

BfsDistance :: 3
*/

/* Testing Code */
function test8(){
    const gph = new Graph(6);
    gph.addUndirectedEdge(0, 1)
    gph.addUndirectedEdge(1, 2)
    gph.addUndirectedEdge(3, 4)
    gph.addUndirectedEdge(4, 2)
    gph.addUndirectedEdge(2, 5)
    console.log("isCyclePresentUndirected:", gph.isCyclePresentUndirected())
    console.log("isCyclePresentUndirected:", gph.isCyclePresentUndirected2());
    console.log("isCyclePresentUndirected:", gph.isCyclePresentUndirected3());
    gph.addUndirectedEdge(3, 5, 1)
    console.log("isCyclePresentUndirected:", gph.isCyclePresentUndirected())
    console.log("isCyclePresentUndirected:", gph.isCyclePresentUndirected2());
    console.log("isCyclePresentUndirected:", gph.isCyclePresentUndirected3());
    console.log("IsConnectedUndirected :", gph.isConnectedUndirected())
}

/*
false
false
false
true
true
true
IsConnectedUndirected : true
*/

/* Testing Code */
function test9(){
    const gph = new Graph(5);
    gph.addDirectedEdge(0, 1, 1)
    gph.addDirectedEdge(0, 2, 1)
    gph.addDirectedEdge(2, 3, 1)
    gph.addDirectedEdge(1, 3, 1)
    gph.addDirectedEdge(3, 4, 1)
    console.log("isCyclePresent : " + gph.isCyclePresent())
    console.log("isCyclePresent : " + gph.isCyclePresentColor())
    gph.addDirectedEdge(4, 1, 1)
    console.log("isCyclePresent : " + gph.isCyclePresent())
    console.log("isCyclePresent : " + gph.isCyclePresentColor())
}

/*
true
true
*/

/* Testing Code */
function test10(){
    const gph = new Graph(5);
    gph.addDirectedEdge(0, 1);
    gph.addDirectedEdge(0, 2);
    gph.addDirectedEdge(2, 3);
    gph.addDirectedEdge(1, 3);
    gph.addDirectedEdge(3, 4);
    gph.addDirectedEdge(4, 1);
    const g = gph.transposeGraph()
    g.print();
}

/*
Vertex 0 is connected to : 
Vertex 1 is connected to : 0(cost: 1) 4(cost: 1) 
Vertex 2 is connected to : 0(cost: 1) 
Vertex 3 is connected to : 1(cost: 1) 2(cost: 1) 
Vertex 4 is connected to : 3(cost: 1) 
*/

/* Testing Code */
function test11(){
    const gph = new Graph(5);
    gph.addDirectedEdge(0, 1)
    gph.addDirectedEdge(1, 2)
    gph.addDirectedEdge(2, 3)
    gph.addDirectedEdge(3, 0)
    gph.addDirectedEdge(2, 4)
    gph.addDirectedEdge(4, 2)
    console.log(`IsStronglyConnected:: ${gph.isStronglyConnected()}`)
}

/*
IsStronglyConnected:: true
*/

/* Testing Code */
function test12(){
    const gph = new Graph(7);
    gph.addDirectedEdge(0, 1)
    gph.addDirectedEdge(1, 2)
    gph.addDirectedEdge(2, 0)
    gph.addDirectedEdge(2, 3)
    gph.addDirectedEdge(3, 4)
    gph.addDirectedEdge(4, 5)
    gph.addDirectedEdge(5, 3)
    gph.addDirectedEdge(5, 6)
    gph.stronglyConnectedComponent()
}

/*
[ 1, 2, 0 ]
[ 4, 5, 3 ]
[ 6 ]
*/

/* Testing Code */
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
    gph.primsMST()
    gph.kruskalMST()
    gph.dijkstra(0)
}

/*
Edges are (0->1 @ 4) (5->2 @ 4) (2->3 @ 7) (3->4 @ 9) (6->5 @ 2) (7->6 @ 1) (0->7 @ 8) (2->8 @ 2) 
Total MST cost : 37

Edges are (6->7 @ 1) (2->8 @ 2) (5->6 @ 2) (0->1 @ 4) (2->5 @ 4) (2->3 @ 7) (0->7 @ 8) (3->4 @ 9) 
Total MST cost : 37

Shortest Paths: (0->1 @ 4) (0->1->2 @ 12) (0->1->2->3 @ 19) (0->7->6->5->4 @ 21) (0->7->6->5 @ 11) (0->7->6 @ 9) (0->7 @ 8) (0->1->2->8 @ 14) 

*/

/* Testing Code */
function test14(){
    const gph = new Graph(9);
    gph.addDirectedEdge(0, 1)
    gph.addDirectedEdge(0, 7)
    gph.addDirectedEdge(1, 2)
    gph.addDirectedEdge(1, 7)
    gph.addDirectedEdge(2, 3)
    gph.addDirectedEdge(2, 8)
    gph.addDirectedEdge(2, 5)
    gph.addDirectedEdge(3, 4)
    gph.addDirectedEdge(3, 5)
    gph.addDirectedEdge(4, 5)
    gph.addDirectedEdge(5, 6)
    gph.addDirectedEdge(6, 7)
    gph.addDirectedEdge(6, 8)
    gph.addDirectedEdge(7, 8)
    gph.shortestPath(0)

}

/*
Shortest Paths: (0->1 @ 1) (0->1->2 @ 2) (0->1->2->3 @ 3) (0->1->2->3->4 @ 4) (0->1->2->5 @ 3) (0->1->2->5->6 @ 4) (0->7 @ 1) (0->7->8 @ 2) 

*/

/* Testing Code */
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
    console.log(`isConnectedUndirected :: ${gph.isConnectedUndirected()}`)
}

/*
Shortest Paths: (1->2->0 @ 6) (1->2 @ 5) (1->3 @ 7) (1->4 @ 9) (1->3->5 @ 11) (1->4->6 @ 12) (1->3->5->7 @ 12) (1->3->5->7->8 @ 29) 

isConnectedUndirected :: true
*/

/* Testing Code */
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

/*
Shortest Paths: (0->4->1 @ 0) (0->4->1->2 @ 1) (0->4->1->2->3 @ 2) (0->4 @ 2) 

*/

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

/* Testing Code */
function test17(){
    const parentArray = [-1, 0, 1, 2, 3];
    console.log(heightTreeParentArr(parentArray))
    console.log(heightTreeParentArr2(parentArray))
}

/*
4
4
*/

/* Testing Code */
function test18(){
    const gph = new Graph(5);
    gph.addDirectedEdge(1, 0)
    gph.addDirectedEdge(0, 2)
    gph.addDirectedEdge(2, 1)
    gph.addDirectedEdge(0, 3)
    gph.addDirectedEdge(3, 4)
    gph.isEulerian()
    gph.addDirectedEdge(4, 0);
    gph.isEulerian();
}

/*
graph is Semi-Eulerian
graph is Eulerian
*/

/* Testing Code */
function test19(){
    const gph = new Graph(5);
    gph.addDirectedEdge(0, 1)
    gph.addDirectedEdge(1, 2)
    gph.addDirectedEdge(2, 0)
    gph.addDirectedEdge(0, 4)
    gph.addDirectedEdge(4, 3)
    gph.addDirectedEdge(3, 0)
    console.log(gph.isEulerianCycle())
}

/*
true
*/

/* Testing Code */
function test20() {
    const gph = new Graph(4);
    gph.addDirectedEdge(0, 0, 0);
    gph.addDirectedEdge(1, 1, 0);
    gph.addDirectedEdge(2, 2, 0);
    gph.addDirectedEdge(3, 3, 0);
    gph.addDirectedEdge(0, 1, 5);
    gph.addDirectedEdge(0, 3, 10);
    gph.addDirectedEdge(1, 2, 3);
    gph.addDirectedEdge(2, 3, 1);
    gph.floydWarshall();
}

/*
Shortest Paths : (0->1 @ 5) (0->1->2 @ 8) (0->1->2->3 @ 9) (1->2 @ 3) (1->2->3 @ 4) (2->3 @ 1) 
*/

test1()
test2()
test3()
test4()
test5()
test6()
test7()
test8()
test9()
test10()
test11()
test12()
test13()
test14()
test15()
test16()
test17()
test18()
test19()
test20()