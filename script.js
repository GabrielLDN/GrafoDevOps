var edges = new vis.DataSet([
    // Conexões iniciais estáticas
    {from: 1, to: 2}, {from: 1, to: 11}, {from: 1, to: 22},
    {from: 6, to: 23}, {from: 7, to: 28}, {from: 8, to: 32}, {from: 9, to: 32}, {from: 10, to: 31},
    // Expandindo conexões dinâmicas
    ...gerarConexoes(2, 3, 10),
    ...gerarConexoes(11, 12, 21),
    ...gerarConexoes(22, 23, 71),
    // Mapeamento de práticas para ferramentas, exceto IDs específicos
    ...praticaParaFerramentaMappings(23, 71, [31, 37, 38, 42, 54, 57], 11)
]);

// Função para gerar conexões dinâmicas entre os nós
function gerarConexoes(de, inicio, fim) {
    let conexoes = [];
    for (let i = inicio; i <= fim; i++) {
        conexoes.push({from: de, to: i});
    }
    return conexoes;
}

// Função para mapear práticas para ferramentas com exceções
function praticaParaFerramentaMappings(inicio, fim, excecoes, ferramentaId) {
    let mapeamentos = [];
    for (let praticaId = inicio; praticaId <= fim; praticaId++) {
        if (!excecoes.includes(praticaId)) {
            mapeamentos.push({from: praticaId, to: ferramentaId});
        }
    }
    return mapeamentos;
}

// Atualiza o nó específico para ser fixo e centralizado
window.nodes.update([
    {id: 1, fixed: {x: true, y: true}, x: 0, y: 0},
    {id: 2, fixed: {x: true, y: true}, x: 0, y: -250}, // 50px acima do nó 1
    {id: 11, fixed: {x: true, y: true}, x: -250, y: 250}, // 100px à esquerda e 50px abaixo do nó 1
    {id: 22, fixed: {x: true, y: true}, x: 250, y: 250}, // 100px à direita e 50px abaixo do nó 1
]);

// Refatoração da gestão de eventos
function configurarEventos(network, nodes) {
    network.on("dragStart", function (params) {
        arrastarNodosConexos(params.nodes[0], network, nodes);
    });

    network.on("dragEnd", function () {
        network.unselectAll();
    });

    document.getElementById('searchInput').addEventListener('input', function() {
        filtrarNodos(this.value, network, nodes);
    });
}

function arrastarNodosConexos(nodeId, network) {
    const draggedNode = window.nodes.get(nodeId);
    if (!draggedNode) return;

    const coresRelevantes = ['purple', 'orange', 'red', 'green'];
    if (coresRelevantes.includes(draggedNode.color.background)) {
        const nodesToDrag = window.nodes.get({
            filter: function (node) {
                return node.color.background === draggedNode.color.background;
            }
        }).map(node => node.id);

        network.selectNodes(nodesToDrag);
    }
}

function filtrarNodos(input, network, nodes) {
    const list = document.getElementById('nodeList');
    list.innerHTML = '';
    if (input.trim() === '') {
        list.style.display = 'none';
        return;
    }

    const filteredNodes = nodes.get({
        filter: function (node) {
            return node.label.toLowerCase().includes(input.toLowerCase());
        }
    });

    if (filteredNodes.length > 0) {
        list.style.display = 'block';
        mostrarNodosFiltrados(filteredNodes, list, network);
    } else {
        list.style.display = 'none';
    }
}

function mostrarNodosFiltrados(nodos, list, network) {
    nodos.forEach(function(node) {
        const div = document.createElement('div');
        div.textContent = node.label;
        div.onclick = function() {
            network.focus(node.id, {scale: network.getScale() * 2, animation: true});
            alert("O nó selecionado está conectado aos seguintes nós: " + getConnectedNodesLabels(node.id, network).join(", "));
            list.style.display = 'none';
        };
        list.appendChild(div);
    });
}

function getConnectedNodesLabels(nodeId, network) {
    const connectedNodes = network.getConnectedNodes(nodeId);
    return connectedNodes.map(id => nodes.get(id).label);
}
// Refatoração das opções de exibição e interação
const options = {
    physics: {
        enabled: true,
        barnesHut: {
            gravitationalConstant: -2000,
            centralGravity: 0.0,
            springLength: 200,
            springConstant: 0.01,
            damping: 0.9,
            avoidOverlap: 0.5
        },
        stabilization: {enabled: true, iterations: 1000}
    },
    edges: {smooth: false},
    interaction: {dragNodes: true, dragView: true, zoomView: true}
};

// Inicialização do network
const container = document.getElementById('mynetwork');
const networkData = {
    nodes: window.nodes,
    edges: edges
};
const network = new vis.Network(container, networkData, options);

configurarEventos(network, window.nodes); 
window.definirCorDasLigacoes(edges, window.nodes);