# Formulário simples de autorização em React

Este é um projeto simples em React que simula uma página de contato. A página pede ao usuário uma senha para acessar informações de contato, como links para o GitHub e LinkedIn. Se a senha fornecida estiver correta, o usuário verá as informações de contato.

![Senha](https://raw.githubusercontent.com/Lydson/formulario-autorizacao-react/main/assets/images/senha.png)

Senha: lydson

![Contato](https://raw.githubusercontent.com/Lydson/formulario-autorizacao-react/main/assets/images/contato.png)

## Funcionalidades

- Tela inicial com um campo de senha.
- Após inserir a senha correta, o usuário tem acesso a informações de contato.
- Links para o **GitHub** e **LinkedIn** com ícones representando cada uma das redes sociais.
- Interface simples e moderna utilizando o **React**.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface.
- **React Icons**: Biblioteca para incluir ícones nas páginas (utilizada para os ícones do GitHub e LinkedIn).
- **CSS**: Estilização simples para deixar a interface mais bonita.

## Como Rodar o Projeto Localmente

### Passo 1: Clonar o repositório

Primeiro, clone este repositório para sua máquina local utilizando o comando abaixo:

```bash
git clone https://github.com/lydson/formulario-autorizacao-react.git
```

### Passo 2: Instalar as dependências

Depois de clonar o repositório, entre no diretório do projeto e instale as dependências utilizando o **npm** (ou **yarn**, se preferir):

```bash
cd formulario-autorizacao-react
npm install
```

### Passo 3: Rodar o projeto

Após a instalação das dependências, execute o seguinte comando para iniciar o servidor de desenvolvimento:

```bash
npm start
```

O projeto estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

- `src/`: Contém os arquivos principais do projeto.
  - `App.js`: Arquivo principal que renderiza o componente `Contact`.
  - `Contact.js`: Componente que exibe o formulário de senha e informações de contato.
  - `styles.css`: Arquivo de estilos para a página.

## Contribuindo

Se quiser contribuir para este projeto, siga os passos abaixo:

1. Faça um **fork** deste repositório.
2. Crie uma nova branch (`git checkout -b minha-branch`).
3. Faça as alterações que deseja.
4. Faça o commit das suas alterações (`git commit -am 'Descrição das alterações'`).
5. Envie para o repositório remoto (`git push origin minha-branch`).
6. Abra um **pull request**.

## Licença

Este projeto está licenciado sob a **MIT License** - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
