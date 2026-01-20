Auth & Dashboard App - Angular 17+
Este projeto consiste em uma aplicação Angular completa com fluxo de autenticação (Login, Primeiro Acesso, Recuperação de Senha) e um Dashboard funcional com KPIs e listagem de pedidos.

-------Como Rodar o Projeto
Instalar dependências:

Bash

npm install
Iniciar o servidor de desenvolvimento:

Bash

ng serve
Acessar no navegador: Abra http://localhost:4200. A aplicação redirecionará automaticamente para /auth devido ao AuthGuard.

-------Dados para Teste
Para validar as regras de negócio e o ApiMockService, utilize os seguintes dados:

Código de Confirmação (Mock): 123456

Usuário Sugerido: teste@exemplo.com

Senha Sugerida: senha1234 (Mínimo de 8 caracteres)

Nota: O Login só funcionará se você primeiro realizar o fluxo de "Primeiro Acesso" para simular a criação da senha no sistema.

-------Decisões Técnicas
Arquitetura: Organizado em camadas (Core, Auth, Dashboard) para garantir a separação de responsabilidades.

Segurança: Utilização de AuthGuard para proteger a rota /dashboard, verificando a existência de um token no localStorage.

Formulários: Uso de Reactive Forms com validadores customizados para comparação de senhas e indicadores de força.

Simulação de API: Implementação do ApiMockService utilizando Observables com operadores of e delay (600ms a 1200ms) para simular latência de rede real.

Tratamento de Estados: O Dashboard gerencia estados de Loading, Erro e Vazio para garantir uma melhor experiência do usuário.

-------Melhorias Futuras
Implementação de um backend real (Node.js/Firebase).

Adição de gráficos avançados utilizando bibliotecas como Chart.js ou ngx-charts.

Aprimoramento do design responsivo com Tailwind CSS ou Angular Material.

Internacionalização (i18n) para suporte a múltiplos idiomas.