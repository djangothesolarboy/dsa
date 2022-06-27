/*
    depth first search:
    all the nodes discoverable by root node
*/
class Graph {
    constructor() {
        this.vertices = [];
        this.adjacent = {};
        this.edges = 0;
    }
    addVertex(v) {
        this.vertices.push(v);
        this.adjacent[v] = [];
    }
    addEdge(v, w) {
        this.adjacent[v].push(w);
        this.adjacent[w].push(v);
        this.edges++;
    }
    dfs(goal, v = this.vertices[0], visited = []) {
        let adj = this.adjacent;

        visited[v] = true;

        for (let i = 0; i < adj[v].length; i++) {
            let w = adj[v][i];
            if (!visited[w]) this.dfs(goal, w, visited);
        }

        return visited[goal] || false;
    }
}

const g = new Graph();
// vertices
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addVertex("G");
// edges
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("A", "D");
g.addEdge("B", "C");
g.addEdge("B", "D");
g.addEdge("C", "D");
g.addEdge("C", "E");
g.addEdge("D", "F");
g.addEdge("F", "G");

// test example/s
console.log(g.dfs("A")); // output: true
console.log(g.dfs("G")); // output: true
console.log(g.dfs("H")); // output: false