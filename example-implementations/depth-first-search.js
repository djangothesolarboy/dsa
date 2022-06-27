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

        for (let i = 0; i <adj[v].length; i++) {
            let w = adj[v][i];
            if (!visited[w]) this.dfs(goal, w, visited);
        }

        return visited[goal] || false;
    }
}

dfs(graph, 'A');