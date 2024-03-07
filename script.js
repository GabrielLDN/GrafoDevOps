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
    {id: 22, label: 'Práticas Devops', shape: 'ellipse', color: '#81C784', x: 0, y: 300, fixed: {x:true, y:true}},
    {id: 23, label: 'Integração Contínua (CI)', shape: 'ellipse', color: '#81C784'},
    {id: 24, label: 'Entrega Contínua (CD)', shape: 'ellipse', color: '#81C784'},
    {id: 25, label: 'Automação de Infraestrutura', shape: 'ellipse', color: '#81C784'},
    {id: 26, label: 'Contêinerização', shape: 'ellipse', color: '#81C784'},
    {id: 27, label: 'Serverless', shape: 'ellipse', color: '#81C784'},
    {id: 28, label: 'Monitoramento e Observabilidade', shape: 'ellipse', color: '#81C784'},
    {id: 29, label: 'Segurança em DevOps (DevSecOps)', shape: 'ellipse', color: '#81C784'},
    {id: 30, label: 'Testes Contínuos', shape: 'ellipse', color: '#81C784'},
    {id: 31, label: 'Práticas Ágeis e Lean', shape: 'ellipse', color: '#81C784'},
    {id: 32, label: 'Ciclo de Vida de DevOps', shape: 'ellipse', color: '#81C784'},
    {id: 33, label: 'Gerenciamento de Release', shape: 'ellipse', color: '#81C784'},
    {id: 34, label: 'Versionamento Semântico', shape: 'ellipse', color: '#81C784'},
    {id: 35, label: 'Estratégias de Versionamento', shape: 'ellipse', color: '#81C784'},
    {id: 36, label: 'Estratégias de Suporte e Manutenção', shape: 'ellipse', color: '#81C784'},
    {id: 37, label: 'Práticas de Código Aberto', shape: 'ellipse', color: '#81C784'},
    {id: 38, label: 'Governança de Código', shape: 'ellipse', color: '#81C784'},
    {id: 39, label: 'Escalabilidade de Aplicações', shape: 'ellipse', color: '#81C784'},
    {id: 40, label: 'Consistência de Ambientes', shape: 'ellipse', color: '#81C784'},
    {id: 41, label: 'Configuração de Sandboxes', shape: 'ellipse', color: '#81C784'},
    {id: 42, label: 'Práticas de Integração de Dados', shape: 'ellipse', color: '#81C784'},
    {id: 43, label: 'Segurança de Aplicações', shape: 'ellipse', color: '#81C784'},
    {id: 44, label: 'Gerenciamento de Incidentes de Segurança', shape: 'ellipse', color: '#81C784'},
    {id: 45, label: 'Avaliação de Riscos', shape: 'ellipse', color: '#81C784'},
    {id: 46, label: 'Compatibilidade de Versões Anteriores', shape: 'ellipse', color: '#81C784'},
    {id: 47, label: 'Estratégias de Rollback', shape: 'ellipse', color: '#81C784'},
    {id: 48, label: 'Automação de Correções de Segurança', shape: 'ellipse', color: '#81C784'},
    {id: 49, label: 'Gerenciamento de Chaves de Segurança', shape: 'ellipse', color: '#81C784'},
    {id: 50, label: 'Monitoramento de Conformidade', shape: 'ellipse', color: '#81C784'},
    {id: 51, label: 'Práticas de Documentação de Software', shape: 'ellipse', color: '#81C784'},
    {id: 52, label: 'Estratégias de Feedback do Cliente', shape: 'ellipse', color: '#81C784'},
    {id: 53, label: 'Gerenciamento de Dependências Transversais', shape: 'ellipse', color: '#81C784'},
    {id: 54, label: 'Práticas de Desenvolvimento Sustentável', shape: 'ellipse', color: '#81C784'},
    {id: 55, label: 'Automação de Testes de Aceitação', shape: 'ellipse', color: '#81C784'},
    {id: 56, label: 'Testes de Acessibilidade', shape: 'ellipse', color: '#81C784'},
    {id: 57, label: 'Estratégias de Desenvolvimento Responsivo', shape: 'ellipse', color: '#81C784'},
    {id: 58, label: 'Gerenciamento de Versões', shape: 'ellipse', color: '#81C784'},
    {id: 59, label: 'Monitoramento de Aplicações', shape: 'ellipse', color: '#81C784'},
    {id: 60, label: 'Observabilidade', shape: 'ellipse', color: '#81C784'},
    {id: 61, label: 'Logs, Métricas, e Dados de Rastreamento', shape: 'ellipse', color: '#81C784'},
    {id: 62, label: 'Teste Funcional e Não Funcional', shape: 'ellipse', color: '#81C784'},
    {id: 63, label: 'Teste de Integração', shape: 'ellipse', color: '#81C784'},
    {id: 64, label: 'Teste de Carga', shape: 'ellipse', color: '#81C784'},
    {id: 65, label: 'Teste de Segurança', shape: 'ellipse', color: '#81C784'},
    {id: 66, label: 'Teste de Aceitação', shape: 'ellipse', color: '#81C784'},
    {id: 67, label: 'Estratégias de Deployment', shape: 'ellipse', color: '#81C784'},
    {id: 68, label: 'Ambientes de Desenvolvimento, Teste, e Produção', shape: 'ellipse', color: '#81C784'},
    {id: 69, label: 'Automatização de Tarefas', shape: 'ellipse', color: '#81C784'},
    {id: 70, label: 'Métricas e KPIs específicos', shape: 'ellipse', color: '#81C784'},
    {id: 71, label: 'Abordagem Iterativa e Incremental', shape: 'ellipse', color: '#81C784'}
]);

var edges = new vis.DataSet([
    {from: 1, to: 2},
    {from: 1, to: 11},
    {from: 1, to: 22},
]);

for(let i = 3; i <= 10; i++) {
    edges.add({from: 2, to: i});
}

for(let i = 13; i <= 21; i++) {
    edges.add({from: 12, to: i});
}

for(let i = 23; i <= 71; i++) {
    edges.add({from: 22, to: i});
}

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