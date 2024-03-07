var nodes = new vis.DataSet([
    {id: 1, label: 'DevOps', shape: 'box'},
    {id: 2, label: 'Cultura DevOps', shape: 'ellipse'},
    {id: 3, label: 'Ferramentas', shape: 'ellipse'},
    {id: 4, label: 'Práticas', shape: 'ellipse'},
    {id: 5, label: 'Cultura de Colaboração', shape: 'circle'},
    {id: 6, label: 'Foco no Cliente', shape: 'circle'},
    {id: 7, label: 'Ferramentas de CI/CD', shape: 'circle'},
    {id: 8, label: 'Controle de Versão', shape: 'circle'},
    {id: 9, label: 'Práticas Ágeis e Lean', shape: 'circle'},
    {id: 10, label: 'Segurança em DevOps (DevSecOps)', shape: 'circle'},
    {id: 11, label: 'Desenvolvimento (Dev)', shape: 'ellipse'},
    {id: 12, label: 'Operações (Ops)', shape: 'ellipse'},
    {id: 13, label: 'Monitoramento e Observabilidade', shape: 'ellipse'},
    {id: 14, label: 'Testes', shape: 'ellipse'}
  ]);
  
  var edges = new vis.DataSet([
    {from: 1, to: 2},
    {from: 1, to: 3},
    {from: 1, to: 4},
    {from: 2, to: 5},
    {from: 2, to: 6},
    {from: 3, to: 7},
    {from: 3, to: 8},
    {from: 4, to: 9},
    {from: 4, to: 10},
    {from: 1, to: 11},
    {from: 1, to: 12},
    {from: 1, to: 13},
    {from: 1, to: 14}
  ]);
  
  var options = {
    layout: {
      hierarchical: {
        direction: "UD",
        sortMethod: "directed"
      }
    },
    edges: {
      arrows: 'to'
    }
  };
  
  var container = document.getElementById('mynetwork');
  var data = {nodes: nodes, edges: edges};
  var network = new vis.Network(container, data, options);  