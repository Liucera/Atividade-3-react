# Rotas e componentes em React

Terceira atividade de React: site com páginas em português, estrutura compartilhada, carregamento sob demanda, tratamento de rotas inválidas e parâmetros de URL.

## Executar

Requisito: Node.js 22.12 ou superior, com npm.

Na pasta do projeto, instale as dependências:

```sh
npm ci
```

Inicie o servidor:

```sh
npm run dev
```

Abra o endereço exibido no terminal, normalmente `http://127.0.0.1:5173`.

No Windows, os mesmos comandos podem ser executados como `npm.cmd ci` e `npm.cmd run dev`.

Para gerar a versão de produção:

```sh
npm run build
```

Para visualizar essa versão localmente:

```sh
npm run preview
```

## Rotas

| Endereço | Página |
| --- | --- |
| `/` | Início |
| `/sobre` | Sobre |
| `/contato` | Contato |
| `/usuario/1` | Perfil de Ana Silva |
| `/usuario/2` | Perfil de Bruno Santos |
| `/usuario/:id` | Perfil identificado pelo parâmetro `id`; outros identificadores exibem uma mensagem de usuário não encontrado |
| Outros endereços | Página 404 |

Os perfis são dados locais de exemplo.

## Organização

```text
src/
├── main.jsx
├── App.jsx
├── App.css
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── Layout.jsx
└── pages/
    ├── Home.jsx
    ├── About.jsx
    ├── Contact.jsx
    ├── User.jsx
    └── NotFound.jsx
```

- `App.jsx` configura `BrowserRouter`, `Routes` e `Route`.
- As páginas usam `Link` para a navegação.
- `Layout` reúne o cabeçalho (`Header`), o rodapé (`Footer`) e `Outlet`, mantendo o conteúdo das páginas dentro da estrutura comum.
- As páginas são importadas com `React.lazy`. `React.Suspense` exibe uma mensagem enquanto o arquivo da página é carregado.
- `User` lê o identificador com `useParams`.
- A rota `*` apresenta `NotFound` quando o caminho não existe.

## Conferir o funcionamento

1. Navegue entre Início, Sobre e Contato pelo cabeçalho e pelos atalhos das páginas.
2. Abra os perfis de Ana e Bruno e observe a mudança do identificador e do conteúdo.
3. Acesse `/pagina-inexistente` para visualizar a página 404.
4. Observe que o cabeçalho e o rodapé permanecem presentes em todas as páginas.

## Tecnologias

React, React DOM, React Router DOM, Vite e CSS.
