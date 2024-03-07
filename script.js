var nodes = new vis.DataSet([
    {id: 1, label: 'DevOps', shape: 'box', color: {background: 'purple', border: 'purple'}, font: {color: 'white'}, font: {size: 30}, size: 50}, // Super nó DevOps
    // Nós de Cultura
    {id: 2, label: 'Cultura DevOps',shape: 'circle', color: {background: 'orange', border: 'orange'}, font: {color: 'white'}, x: 300, y: -100},
    {id: 3, label: 'Cultura de Colaboração', shape: 'ellipse', color: {background: 'orange', border: 'orange'}, font: {color: 'white'}},
    {id: 4, label: 'Empatia, Parcerias e Confiança', shape: 'ellipse', color: {background: 'orange', border: 'orange'}, font: {color: 'white'}},
    {id: 5, label: 'Propriedade Coletiva e Accountability', shape: 'ellipse', color: {background: 'orange', border: 'orange'}, font: {color: 'white'}},
    {id: 6, label: 'Foco no Cliente', shape: 'ellipse', color: {background: 'orange', border: 'orange'}, font: {color: 'white'}},
    {id: 7, label: 'Segurança desde a concepção', shape: 'ellipse', color: {background: 'orange', border: 'orange'}, font: {color: 'white'}},
    {id: 8, label: 'Aprendizagem e Inovação Contínua', shape: 'ellipse', color: {background: 'orange', border: 'orange'}, font: {color: 'white'}},
    {id: 9, label: 'Melhoria Contínua', shape: 'ellipse', color: {background: 'orange', border: 'orange'}, font: {color: 'white'}},
    {id: 10, label: 'Práticas de Comunicação e Transparência', shape: 'ellipse', color: {background: 'orange', border: 'orange'}, font: {color: 'white'}},
    // Nós de Ferramentas
    {id: 11, label: 'Ferramentas DevOps', shape: 'circle', color: {background: 'red', border: 'red'}, font: {color: 'white'}, x: -300, y: -100},
    {id: 12, label: 'Ferramentas de CI/CD\n(Jenkins, Travis CI, GitLab, AWS CodeBuild, AWS CodeDeploy)', shape: 'ellipse', color: {background: 'red', border: 'red'}, font: {color: 'white'}},
    {id: 13, label: 'Controle de Versão\n(Git, AWS CodeCommit)', shape: 'ellipse', color: {background: 'red', border: 'red'}, font: {color: 'white'}},
    {id: 14, label: 'Orquestração de Contêineres\n(Kubernetes, Amazon ECS, Amazon EKS)', shape: 'ellipse', color: {background: 'red', border: 'red'}, font: {color: 'white'}},
    {id: 15, label: 'AWS CodeDeploy, AWS CloudFormation', shape: 'ellipse', color: {background: 'red', border: 'red'}, font: {color: 'white'}},
    {id: 16, label: 'Terraform, AWS Elastic Beanstalk', shape: 'ellipse', color: {background: 'red', border: 'red'}, font: {color: 'white'}},
    {id: 17, label: 'Chef, Puppet, AWS OpsWorks', shape: 'ellipse', color: {background: 'red', border: 'red'}, font: {color: 'white'}},
    {id: 18, label: 'AWS Lambda, AWS Fargate', shape: 'ellipse', color: {background: 'red', border: 'red'}, font: {color: 'white'}},
    {id: 19, label: 'Docker, Containerd', shape: 'ellipse', color: {background: 'red', border: 'red'}, font: {color: 'white'}},
    {id: 20, label: 'Amazon ECS, Amazon EKS', shape: 'ellipse', color: {background: 'red', border: 'red'}, font: {color: 'white'}},
    {id: 21, label: 'AWS X-Ray, AWS Config, AWS CloudTrail', shape: 'ellipse', color: {background: 'red', border: 'red'}, font: {color: 'white'}},
    // Nós de Práticas
    {id: 22, label: 'Práticas DevOps', shape: 'circle', color: {background: 'green', border: 'green'}, font: {color: 'white'}, x: 0, y: 100},
    {id: 23, label: 'Integração Contínua (CI)', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 24, label: 'Entrega Contínua (CD)', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 25, label: 'Automação de Infraestrutura', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 26, label: 'Contêinerização', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 27, label: 'Serverless', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 28, label: 'Monitoramento e Observabilidade', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 29, label: 'Segurança em DevOps (DevSecOps)', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 30, label: 'Testes Contínuos', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 31, label: 'Práticas Ágeis e Lean', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 32, label: 'Ciclo de Vida de DevOps', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 33, label: 'Gerenciamento de Release', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 34, label: 'Versionamento Semântico', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 35, label: 'Estratégias de Versionamento', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 36, label: 'Estratégias de Suporte e Manutenção', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 37, label: 'Práticas de Código Aberto', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 38, label: 'Governança de Código', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 39, label: 'Escalabilidade de Aplicações', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 40, label: 'Consistência de Ambientes', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 41, label: 'Configuração de Sandboxes', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 42, label: 'Práticas de Integração de Dados', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 43, label: 'Segurança de Aplicações', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 44, label: 'Gerenciamento de Incidentes de Segurança', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 45, label: 'Avaliação de Riscos', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 46, label: 'Compatibilidade de Versões Anteriores', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 47, label: 'Estratégias de Rollback', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 48, label: 'Automação de Correções de Segurança', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 49, label: 'Gerenciamento de Chaves de Segurança', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 50, label: 'Monitoramento de Conformidade', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 51, label: 'Práticas de Documentação de Software', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 52, label: 'Estratégias de Feedback do Cliente', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 53, label: 'Gerenciamento de Dependências Transversais', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 54, label: 'Práticas de Desenvolvimento Sustentável', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 55, label: 'Automação de Testes de Aceitação', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 56, label: 'Testes de Acessibilidade', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 57, label: 'Estratégias de Desenvolvimento Responsivo', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 58, label: 'Gerenciamento de Versões', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 59, label: 'Monitoramento de Aplicações', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 60, label: 'Observabilidade', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 61, label: 'Logs, Métricas, e Dados de Rastreamento', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 62, label: 'Teste Funcional e Não Funcional', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 63, label: 'Teste de Integração', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 64, label: 'Teste de Carga', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 65, label: 'Teste de Segurança', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 66, label: 'Teste de Aceitação', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 67, label: 'Estratégias de Deployment', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 68, label: 'Ambientes de Desenvolvimento, Teste, e Produção', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 69, label: 'Automatização de Tarefas', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 70, label: 'Métricas e KPIs específicos', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}},
    {id: 71, label: 'Abordagem Iterativa e Incremental', shape: 'ellipse', color: {background: 'green', border: 'green'}, font: {color: 'white'}}
]);
nodes.update([
    {id: 1, color: {background: 'purple', border: 'purple'}, font: {color: 'white'}}, // DevOps
    {id: 2, color: {background: 'orange', border: 'orange'}, font: {color: 'white'}}, // Cultura DevOps
    {id: 11, color: {background: 'red', border: 'red'}, font: {color: 'white'}}, // Ferramentas DevOps
    {id: 22, color: {background: 'green', border: 'green'}, font: {color: 'white'}}, // Práticas DevOps
]);

var edges = new vis.DataSet([
    // Conexão com o node de DevOps com Cultura, Ferramentas e Práticas
    {from: 1, to: 2},{from: 1, to: 11},{from: 1, to: 22},
    // Conexões entre os nodes de Cultura e Práticas
    {from: 6, to: 23},{from: 7, to: 28},{from: 8, to: 32},{from: 9, to: 32},{from: 10, to: 31}
]);

for(let i = 3; i <= 10; i++) {
    edges.add({from: 2, to: i});
}
for(let i = 13; i <= 21; i++) {
    edges.add({from: 11, to: i});
}
for(let i = 23; i <= 71; i++) {
    edges.add({from: 22, to: i});
}

var praticaParaFerramentaMappings = [];

for (let praticaId = 23; praticaId <= 71; praticaId++) {
    if (![31, 37, 38, 42, 54, 57].includes(praticaId)) {
        praticaParaFerramentaMappings.push({praticaId: praticaId, ferramentaId: 11});
    }
}

praticaParaFerramentaMappings.forEach(mapping => {
    edges.add({from: mapping.praticaId, to: mapping.ferramentaId});
});

var options = {
    physics: {
        enabled: false
    },
    edges: {
        color: {
            color: 'gray',
            highlight: 'gray',
            hover: 'gray',
            inherit: false,
        },
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