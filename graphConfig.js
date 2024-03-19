window.definirCorDasLigacoes = function(edges, nodes) {
    edges.forEach((edge) => {
        const fromNode = nodes.get(edge.from);
        const toNode = nodes.get(edge.to);
        const fromNodeCategory = identificarCategoriaDoNo(fromNode.id);
        const toNodeCategory = identificarCategoriaDoNo(toNode.id);

        if ((fromNodeCategory === 'Práticas DevOps' && toNodeCategory === 'Ferramentas DevOps') ||
            (toNodeCategory === 'Práticas DevOps' && fromNodeCategory === 'Ferramentas DevOps')) {
            edge.color = {color:'#FFFF00'}; // Amarelo
        } else if ((fromNodeCategory === 'Práticas DevOps' && toNodeCategory === 'Cultura DevOps') ||
                   (toNodeCategory === 'Práticas DevOps' && fromNodeCategory === 'Cultura DevOps')) {
            edge.color = {color:'#C8D03F'}; // Verde amarelado
        } else if ((fromNodeCategory === 'Ferramentas DevOps' && toNodeCategory === 'Cultura DevOps') ||
                   (toNodeCategory === 'Ferramentas DevOps' && fromNodeCategory === 'Cultura DevOps')) {
            edge.color = {color:'#FF6347'}; // Vermelho Tomate
        }
        edges.update(edge);
    });
};

function identificarCategoriaDoNo(nodeId) {
    if (nodeId === 22) {
        return 'Práticas DevOps';
    } else if (nodeId >= 11 && nodeId <= 21) {
        return 'Ferramentas DevOps';
    } else if (nodeId >= 2 && nodeId <= 10) {
        return 'Cultura DevOps';
    } else {
        return 'Outros';
    }
}