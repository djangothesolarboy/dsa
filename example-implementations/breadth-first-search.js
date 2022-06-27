/*
    breadth first search:
*/
let graph = { // adjacency list
    'A': ['B', 'C'],
    'B': ['D', 'E', 'F'],
    'C': ['G'],
    'D': [],
    'E': [],
    'F': ['H'],
    'G': ['I'],
    'H': [],
    'I': []
};

const bfs = function(graph, node) {
    let visited = [];
    let queue = [];

    // visited.push(node);
    queue.push(node);
    visited[node] = true;

    while (queue.length > 0) {
        let n = queue.shift();
        console.log(n, " ");

        for (let i = 1; i < graph[node].length; i++) {
            if (graph[node][i] && !visited[i]) {
                visited[i] = true;
                queue.push(i);
            }
        }
    }
    return visited;
}

bfs(graph, 'A')