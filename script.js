var nodes = new vis.DataSet([
    {id: 1, label: 'DevOps', shape: 'box', color: '#FFC107', font: {size: 30}, size: 50}, // Super nó DevOps
    // Nós de Cultura
    {id: 2, label: 'Cultura DevOps',shape: 'circle', color: '#FFEB3B', x: 300, y: -100, fixed: {x:true, y:true}},
    {id: 3, label: 'Cultura de Colaboração', shape: 'ellipse', color: '#FFEB3B'},
    {id: 4, label: 'Empatia, Parcerias e Confiança', shape: 'ellipse', color: '#FFEB3B'},
    {id: 5, label: 'Propriedade Coletiva e Accountability', shape: 'ellipse', color: '#FFEB3B'},
    {id: 6, label: 'Foco no Cliente', shape: 'ellipse', color: '#FFEB3B'},
    {id: 7, label: 'Segurança desde a concepção', shape: 'ellipse', color: '#FFEB3B'},
    {id: 8, label: 'Aprendizagem e Inovação Contínua', shape: 'ellipse', color: '#FFEB3B'},
    {id: 9, label: 'Melhoria Contínua', shape: 'ellipse', color: '#FFEB3B'},
    {id: 10, label: 'Práticas de Comunicação e Transparência', shape: 'ellipse', color: '#FFEB3B'},
    // Nós de Ferramentas
    {id: 11, label: 'Ferramentas de CI/CD\n(Jenkins, Travis CI, GitLab, AWS CodeBuild, AWS CodeDeploy)', x: -300, y: -100, fixed: {x:true, y:true}},
    {id: 12, label: 'Ferramentas de CI/CD\n(Jenkins, Travis CI, GitLab, AWS CodeBuild, AWS CodeDeploy)', shape: 'ellipse', color: '#90CAF9'},
    {id: 13, label: 'Controle de Versão\n(Git, AWS CodeCommit)', shape: 'ellipse', color: '#90CAF9'},
    {id: 14, label: 'Orquestração de Contêineres\n(Kubernetes, Amazon ECS, Amazon EKS)', shape: 'ellipse', color: '#90CAF9'},
    {id: 15, label: 'AWS CodeDeploy, AWS CloudFormation', shape: 'ellipse', color: '#90CAF9'},
    {id: 16, label: 'Terraform, AWS Elastic Beanstalk', shape: 'ellipse', color: '#90CAF9'},
    {id: 17, label: 'Chef, Puppet, AWS OpsWorks', shape: 'ellipse', color: '#90CAF9'},
    {id: 18, label: 'AWS Lambda, AWS Fargate', shape: 'ellipse', color: '#90CAF9'},
    {id: 19, label: 'Docker, Containerd', shape: 'ellipse', color: '#90CAF9'},
    {id: 20, label: 'Amazon ECS, Amazon EKS', shape: 'ellipse', color: '#90CAF9'},
    {id: 21, label: 'AWS X-Ray, AWS Config, AWS CloudTrail', shape: 'ellipse', color: '#90CAF9'},
    {id: 22, label: 'Práticas', shape: 'ellipse', color: '#81C784', x: 0, y: 300, fixed: {x:true, y:true}},
    
]);

var edges = new vis.DataSet([
    // Conexões do super nó DevOps com elementos de Cultura
    {from: 1, to: 2},
    {from: 2, to: 3},
    {from: 2, to: 4},
    {from: 2, to: 5},
    {from: 2, to: 6},
    {from: 2, to: 7},
    {from: 2, to: 8},
    {from: 2, to: 9},
    {from: 2, to: 10},
    {from: 1, to: 11},
    {from: 11, to: 12},
    {from: 11, to: 13},
    {from: 11, to: 14},
    {from: 11, to: 15},
    {from: 11, to: 16},
    {from: 11, to: 17},
    {from: 11, to: 18},
    {from: 11, to: 19},
    {from: 11, to: 20},
    {from: 11, to: 21},
]);

var options = {
    physics: {
        enabled: false
    },
    edges: {
        arrows: 'to',
        smooth: true
    },
    interaction: {
        dragNodes: true,
        dragView: true,
        zoomView: true
    }
};

var container = document.getElementById('mynetwork');
var data = {nodes: nodes, edges: edges};
var network = new vis.Network(container, data, options);

//network.on("dragEnd", function (params) {
//    for (var i = 0; i < params.nodes.length; i++) {
//        if (params.nodes[i] == params.nodes[i]) { // Verifica se é um nó que foi arrastado
//            network.setOptions({ physics: {enabled: false} }); // Desabilita a física
//            break; // Sai do loop após encontrar e desabilitar a física
//        }
//    }
//});