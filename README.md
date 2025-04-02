# BuzzFeed: Você é Herói ou Vilão?

Este projeto foi desenvolvido como parte dos estudos na Digital Innovation One (DIO), com o objetivo de aprender a criar projetos utilizando Angular.

## Sobre o Projeto

O "BuzzFeed: Você é Herói ou Vilão?" é um quiz interativo que permite ao usuário responder a uma série de perguntas e, ao final, descobrir se seu perfil é mais próximo de um herói ou de um vilão. O projeto utiliza Angular para a criação dos componentes e lógica de interatividade, enquanto o Bootstrap é utilizado para estilização e responsividade da interface.

## Tecnologias Utilizadas

- **Angular**: Framework para desenvolvimento de aplicações web SPA.
- **TypeScript**: Linguagem utilizada para a implementação da lógica do quiz.
- **Bootstrap**: Framework CSS para estilização responsiva.
- **HTML5 e CSS3**: Marção e estilização da aplicação.

## Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── quizz/              # Componente principal do quiz
│   │   └── theme-toggle/       # Alternador de tema claro/escuro
│   ├── pages/
│   │   └── home/               # Página inicial
│   │       ├── home.component.css
│   │       ├── home.component.html
│   │       └── home.component.ts
│   ├── services/               # Serviços Angular
│   ├── assets/
│   │   ├── data/               # Dados em JSON
│   │   └── images/             # Imagens do projeto
│   ├── app.component.*         # Componente raiz
│   ├── app.config.ts           # Configurações
│   └── app.routes.ts           # Rotas
├── styles.css                  # Estilos globais
└── main.ts                     # Ponto de entrada
```

## Como Executar o Projeto

Para rodar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/RehDias/buzzfeed.git
   ```

2. **Acesse a pasta do projeto:**
   ```sh
   cd buzzfeed
   ```

3. **Instale as dependências:**
   ```sh
   npm install
   ```

4. **Execute o projeto:**
   ```sh
   ng serve
   ```

5. **Acesse no navegador:**
   ```
   http://localhost:4200/
   ```

## Demonstração
<div align="center" >
  <img src="https://github.com/user-attachments/assets/8dd6246e-4980-4905-a17e-d8f60ed8be90" alt="imagem da página" width=70%  />
</div>

## Status do Projeto

🚧 Em desenvolvimento 🚧


