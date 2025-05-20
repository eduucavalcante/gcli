Claro! Aqui está o `README.md` traduzido para o inglês, com base na sua versão atualizada do projeto `gcli`:

---

````md
# gcli – Git Command Line Assistant

`gcli` is a command line assistant for Git, written in Node.js. It simplifies common Git commands with shorter, intuitive alternatives.

---

## 📑 Table of Contents

- [Installation](#installation)
- [Available Commands](#available-commands)

---

## 🚀 Installation

> ⚠️ You must have both [Node.js](https://nodejs.org/) **and [Git](https://git-scm.com/)** installed on your machine.

1. Clone this repository:

```bash
git clone https://github.com/your-username/gcli.git
cd gcli
````

2. Install it globally:

```bash
npm install -g .
```

3. Inside your project, initialize a local Git repository:

```bash
git init
```

4. You can now use the `gcli` command globally in your terminal.

---

## 🆘 Help Command

You can run the following command to see the available commands directly in your terminal:

```bash
gcli help
```

---

## 📘 Available Commands

| `gcli` Command       | Git Equivalent                             | Description                                      |
| -------------------- | ------------------------------------------ | ------------------------------------------------ |
| `gcli repo [url]`    | `git remote add origin [url]`              | Adds a remote repository                         |
| `gcli deploy`        | `git add . && git push origin main`        | Stages all changes and pushes to the main branch |
| `gcli commit [msg]`  | `git commit -m "[msg]"`                    | Commits with the provided message                |
| `gcli main`          | `git branch -M main`                       | Renames the current branch to "main"             |
| `gcli name [name]`   | `git config --global user.name "[name]"`   | Sets the global Git username                     |
| `gcli email [email]` | `git config --global user.email "[email]"` | Sets the global Git email                        |

---

## 📌 Final Notes

* This project is under **active development** and will be updated soon with new commands and improvements.
* Suggestions, issues, or contributions are welcome! Feel free to open an issue or a pull request.
