## 1. Transações (CRUD e Upload de Arquivos)
React Query (TanStack Query): Mesmo com Next.js, o React Query continua sendo excelente para o gerenciamento de requisições e cache, além de otimizar as chamadas para o back-end.
Next.js API Routes: Para lidar com processamento de arquivos de upload diretamente no back-end (Server Side). Você pode utilizar isso para enviar arquivos XLSX e processá-los diretamente no servidor.
React Hook Form: Continua sendo uma ótima escolha para o gerenciamento de formulários de criação e edição de transações.
Zod: Pode ser utilizado tanto no front-end quanto nas validações feitas nas API routes do Next.js, com código compartilhado.
FilePond ou Dropzone: Para a interface de upload de arquivos XLSX de forma amigável e funcional.

## 2. Lista de Arquivos
getServerSideProps / getStaticProps: O Next.js oferece essas opções de Data Fetching que podem ser usadas para buscar os arquivos do back-end e listá-los diretamente na renderização do servidor.
React Table: Para tabelas dinâmicas e interativas, que exibem os arquivos que foram enviados.
Material-UI ou Ant Design: Utilização dessas bibliotecas para tabelas e componentes estilizados, com suporte a temas e responsividade.

## 3. User (Autenticação - SignIn e SignUp)
NextAuth.js: Uma das soluções mais utilizadas para autenticação no Next.js, oferecendo suporte para OAuth, JWT, e autenticação via e-mail. Facilita a implementação de SignIn/SignUp.
React Hook Form + Zod: Para o formulário de login e registro, garantindo validação eficiente e integração com a API do Next.js.
getServerSideProps: Para rotas protegidas, você pode usar essa função para garantir que a autenticação do usuário esteja correta antes de carregar a página.

## 4. Autenticação (Esqueceu a senha e Redefinir senha)
NextAuth.js + API Routes: As rotas de redefinição de senha podem ser gerenciadas com NextAuth.js e as API routes, criando uma experiência server-side para o envio e validação de tokens de redefinição de senha.
React Hook Form: Para lidar com o front-end dos formulários de "esqueci a senha" e "redefinir senha".
Next.js Dynamic Routes: Aproveite as rotas dinâmicas do Next.js (pages/reset/[token].js) para criar a página de redefinição de senha com base no token enviado ao usuário.

## 5. State Management (Gerenciamento de Estado)
Zustand: Continua sendo uma excelente escolha para gerenciamento de estado leve em aplicações Next.js.
Redux Toolkit: Se a aplicação demandar um fluxo mais robusto de estados, você pode integrar o Redux Toolkit ao Next.js sem problemas.

## 6. Autorização e Proteção de Rotas
NextAuth.js: Como mencionado, é uma solução integrada com Next.js para autenticação e proteção de rotas, tanto no server-side quanto no client-side.
Middleware (Edge Middleware): Next.js 12+ permite que você utilize middlewares para proteger rotas de maneira eficiente, executando lógica antes de o usuário acessar determinadas páginas.

## 7. Estilização
Tailwind CSS: Extremamente eficiente em Next.js, combinando com a estratégia de CSS em componentes.
Styled Components: Você pode configurá-lo no Next.js para estilos mais modulares e dinâmicos.

## 8. Design e Componentes Visuais
Material-UI ou Ant Design: Ambas as bibliotecas são perfeitamente compatíveis com Next.js e fornecem componentes prontos para construção de UI.
Framer Motion: Para animações interativas e suaves, funciona muito bem em conjunto com a renderização estática ou no lado do cliente.

## 9. SEO e Otimização de Performance
Next.js Image Optimization: Para otimização automática de imagens, especialmente útil se você tiver avatares de usuário ou gráficos gerados pela aplicação.
next-seo: Uma biblioteca para gerenciar as meta tags e melhorar a otimização para mecanismos de busca (SEO).
Lighthouse Audits: Use Lighthouse para garantir que a performance da aplicação esteja otimizada, especialmente no que diz respeito a tempos de carregamento e responsividade.

## 10. SSR (Server-Side Rendering) e ISR (Incremental Static Regeneration)
SSR: Para rotas que requerem dados dinâmicos e precisam ser renderizadas no servidor a cada requisição, como páginas de transações ou arquivos.
ISR: Caso sua lista de transações ou arquivos não mude com tanta frequência, você pode usar o ISR para melhorar a performance. Ele gera as páginas estaticamente e as revalida conforme a necessidade.

## 11. Deploy e Hospedagem
Vercel: Ideal para Next.js, oferecendo integração completa, builds otimizados e suporte a serverless functions (API routes).
GitHub Actions: Para automação de deploys, integração com testes e linting, e monitoramento contínuo da aplicação.

<!-- TODO BACK -->
- [] -> Fazer Reports retornar da API em JSON
- [] -> Fazer buscas por cliente (TBD)