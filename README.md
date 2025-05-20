# gcli – Git Command Line Assistant

[Click here to read the documentation in English](./docs/README-en.md)

`gcli` é uma ferramenta simples de linha de comando auxiliar para Git, escrita em Node.js, que simplifica comandos Git comuns com instruções mais curtas e intuitivas.

---

## 📑 Sumário

- [Instalação](#instalação)
- [Comandos disponíveis](#comandos-disponíveis)

---

## 🚀 Instalação

> ⚠️ É necessário ter o [Node.js](https://nodejs.org/) **e o [Git](https://git-scm.com/)** instalados na máquina.

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/gcli.git
cd gcli
```

2. Instale o projeto globalmente:

```bash
npm install -g .
```

3. Dentro do seu projeto, inicie um repositório Git local:

```bash
git init
```

4. Agora, o comando gcli estará disponível globalmente no terminal.

## 🆘 Comando help

Você pode executar o comando abaixo para ver os comandos disponíveis diretamente no terminal:

```bash
gcli help
```

## 📘 Comandos disponíveis

| Comando `gcli`       | Equivalente Git                            | Descrição                                  |
| -------------------- | ------------------------------------------ | ------------------------------------------ |
| `gcli repo [url]`    | `git remote add origin [url]`              | Adiciona um repositório remoto             |
| `gcli deploy`        | `git push origin main`                     | Adiciona todas as alterações e faz o push  |
| `gcli commit [msg]`  | `git add . && commit -m "[msg]"`           | Realiza um commit com a mensagem informada |
| `gcli main`          | `git branch -M main`                       | Renomeia a branch atual para "main"        |
| `gcli name [nome]`   | `git config --global user.name "[nome]"`   | Define o nome de usuário global            |
| `gcli email [email]` | `git config --global user.email "[email]"` | Define o e-mail do usuário global          |

## 📌 Informações adicionais

- Este projeto está em desenvolvimento ativo e será atualizado em breve com novos comandos e melhorias.
- Sugestões, issues ou contribuições são bem-vindas! Fique à vontade para abrir uma issue ou pull request.