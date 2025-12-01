# Arithimancia - Frontend

![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)
![React](https://img.shields.io/badge/React-18.3-61dafb)
![Vite](https://img.shields.io/badge/Vite-5.4-646cff)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

**Arithimancia** é um RPG educacional que transforma o aprendizado de matemática em uma aventura épica. Os jogadores assumem o papel de Reconstrutores, heróis que utilizam o poder dos números para restaurar a realidade fragmentada.

## 📖 Sobre o Projeto

Este é o frontend do Arithimancia, uma aplicação web moderna construída com React e TypeScript que oferece:

- 🎮 Sistema de combate baseado em resolução de problemas matemáticos
- ⚔️ Batalhas épicas contra monstros usando cálculos como armas
- 🏫 Escolas de magia matemática (Álgebra, Geometria, Teoria dos Números, Trigonometria)
- 📊 Sistema de progressão com níveis, experiência e estatísticas
- 🎒 Inventário e sistema de itens
- 🏆 Ranking global de jogadores

## 🚀 Tecnologias

### Core
- **React 18.3** - Biblioteca UI
- **TypeScript 5.8** - Tipagem estática
- **Vite 5.4** - Build tool e dev server
- **React Router DOM 6** - Roteamento

### UI & Styling
- **Tailwind CSS 3.4** - Framework CSS utility-first
- **shadcn/ui** - Componentes acessíveis e customizáveis
- **Radix UI** - Primitivos de UI headless
- **Lucide React** - Ícones
- **Sonner** - Notificações toast

### Estado e Dados
- **TanStack Query (React Query)** - Gerenciamento de estado do servidor
- **Axios** - Cliente HTTP
- **Zod** - Validação de schemas

### Outras
- **React Hook Form** - Gerenciamento de formulários
- **date-fns** - Manipulação de datas
- **Recharts** - Gráficos e visualizações

## 📁 Estrutura do Projeto

```
arithimancia_frontend/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── ui/             # Componentes shadcn/ui
│   │   └── game/           # Componentes específicos do jogo
│   │       └── Battle.tsx  # Sistema de batalha
│   ├── contexts/           # Contextos React
│   │   └── AuthContext.tsx # Contexto de autenticação
│   ├── pages/              # Páginas da aplicação
│   │   ├── Auth.tsx        # Login/Registro
│   │   ├── Characters.tsx  # Seleção de personagens
│   │   ├── CharacterCreate.tsx
│   │   ├── Game.tsx        # Jogo principal
│   │   ├── Profile.tsx     # Perfil do usuário
│   │   └── NotFound.tsx    # 404
│   ├── services/           # Serviços e API
│   │   └── api.ts          # Cliente API e serviços
│   ├── types/              # Tipos TypeScript
│   │   └── api.ts          # Tipos de dados da API
│   ├── lib/                # Utilitários
│   ├── App.tsx             # Componente raiz
│   └── main.tsx            # Entry point
├── public/                 # Arquivos estáticos
├── index.html
├── vite.config.ts
├── tailwind.config.ts
└── package.json
```

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js 20.x ou superior
- npm ou yarn

### Passos

1. **Clone o repositório**
```bash
git clone <repository-url>
cd arithimancia/arithimancia_frontend
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**

O projeto se conecta à API hospedada no AWS Lambda. A URL da API está hardcoded em `src/services/api.ts`:
```typescript
const API_BASE_URL = 'https://d75p4b63x4.execute-api.us-east-2.amazonaws.com/api/v1';
```

4. **Execute em modo desenvolvimento**
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:8080`

5. **Build para produção**
```bash
npm run build
```

Os arquivos de build serão gerados em `dist/`

## 🎮 Features Principais

### Autenticação
- Sistema completo de login/registro
- Validação de formulários com feedback visual
- Gerenciamento de tokens JWT (access + refresh)
- Interceptor Axios para refresh automático de tokens
- Proteção de rotas autenticadas

### Gerenciamento de Personagens
- Criação de até 3 personagens por jogador
- Seleção de escola mágica matemática
- Visualização de estatísticas (HP, XP, Gold, Level)
- Sistema de progressão e níveis

### Sistema de Batalha
- Interface de batalha imersiva e animada
- Resolução de problemas matemáticos em tempo real
- Animações de ataque/dano
- Cálculo de dano baseado em precisão e velocidade
- Progressão através de múltiplos problemas por combate
- Log de combate em tempo real

### Sistema de Progresso
- Experiência e níveis
- Estatísticas detalhadas do personagem
- Histórico de conquistas
- Ranking global

## 🔌 Integração com API

A aplicação se comunica com a API backend através de serviços organizados em `src/services/api.ts`:

### Serviços Disponíveis

#### `authService`
- `login()` - Autenticação
- `register()` - Criação de conta
- `logout()` - Encerrar sessão
- `getMe()` - Dados do usuário atual

#### `characterService`
- `getCharacters()` - Lista personagens
- `createCharacter()` - Criar personagem
- `deleteCharacter()` - Deletar personagem
- `getCharacterStats()` - Estatísticas detalhadas

#### `gameService`
- `startEncounter()` - Iniciar combate
- `solveProblem()` - Resolver problema matemático
- `fleeFromEncounter()` - Fugir do combate
- `getActiveEncounters()` - Combates ativos
- `getSchools()` - Escolas disponíveis

### Interceptors

**Request Interceptor**: Adiciona token de autenticação em todas as requisições

**Response Interceptor**:
- Retry automático para erros 429 (Rate Limiting) com backoff exponencial
- Refresh automático de token expirado
- Exclusão de endpoints de autenticação do fluxo de refresh

## 🎨 Tema e Estilo

O projeto usa um tema dark customizado com gradientes místicos:

- **Cores primárias**: Roxo/Violeta (#7c3aed, #8b5cf6)
- **Backgrounds**: Dark (#0f0b15, #1a1625)
- **Gradientes**:
  - `bg-gradient-void` - Background principal
  - `bg-gradient-mystic` - Botões e destaques

## 🧪 Validação

Todas as entradas de usuário são validadas usando **Zod** tanto no frontend quanto no backend para garantir consistência:

- Validação de formulários
- Validação de respostas da API
- Tipos TypeScript inferidos automaticamente dos schemas

## 📱 Responsividade

A interface é totalmente responsiva e otimizada para:
- Desktop (1920px+)
- Tablets (768px - 1024px)
- Mobile (320px - 767px)

## 🔒 Segurança

- Tokens JWT armazenados em localStorage
- Refresh automático antes da expiração
- Proteção CSRF através de tokens
- Validação client-side e server-side
- Rate limiting com retry exponencial

## 🚀 Deploy

O projeto pode ser deployado em qualquer serviço de hospedagem estática:

- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages

Basta executar `npm run build` e fazer upload da pasta `dist/`

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é licenciado sob a licença MIT.

## 👥 Autores

Desenvolvido como parte do projeto Arithimancia - RPG Educacional de Matemática

## 🐛 Bugs Conhecidos

Nenhum bug crítico conhecido no momento. Reporte problemas na aba Issues.

## 📞 Suporte

Para suporte e dúvidas, abra uma issue no GitHub.

---

**Arithimancia** - Onde a matemática se torna magia ✨🔢
