# 🏐 Arena Dunas - Atividade N2 (Web II)

Landing page interativa e responsiva desenvolvida em **React + Vite** para a **Arena Dunas**, apresentando modalidades de esportes de areia e um sistema de cadastro de novos participantes.

---

## 📌 Sobre o Projeto

Este projeto foi desenvolvido como parte da avaliação **N2 da disciplina de Web II**. O objetivo principal foi aplicar na prática conceitos fundamentais do React, como:

- Divisão e organização de componentes;
- Passagem de propriedades (**props**) com desestruturação;
- Manipulação de estado com o hook **`useState`**;
- Formulários controlados com tratamento de eventos (`onChange` e `onSubmit`);
- Validação de dados e feedback ao usuário;
- Responsividade completa para dispositivos móveis (smartphones e tablets).

---

## 🚀 Tecnologias Utilizadas

- **React 19**
- **Vite**
- **CSS Modules** (estilização modular e isolada)
- **Google Fonts** (família tipográfica *Inter*)

---

## 📂 Estrutura de Componentes

```text
src/
├── assets/                  # Imagens, vetores e ícones das modalidades
├── components/
│   ├── Header/              # Cabeçalho com logo, navegação e botão de ação
│   ├── Hero/                # Banner principal com chamada, textos e ilustração
│   ├── CardModalidades/     # Componente CardModalidade (recebe props com desestruturação)
│   ├── Modalidades/         # Seção que lista as modalidades disponíveis
│   ├── CadastroClientes/    # Formulário controlado de inscrição com validação
│   ├── Footer/              # Rodapé com identificação do projeto
│   └── ui/                  # Componentes reutilizáveis (Button)
├── App.jsx                  # Montagem da interface principal
├── main.jsx                 # Ponto de entrada da aplicação
└── index.css                # Estilos globais e reset
```

---

## ⚙️ Funcionalidades Implementadas

### 1. Cards de Modalidades (Props e Desestruturação)

- O componente `CardModalidade` recebe via desestruturação as propriedades:
  - `nome`: Nome da modalidade (Beach Tennis, Vôlei de praia, Futevôlei);
  - `descricao`: Texto descritivo breve;
  - `icone`: Imagem/vetor correspondente.

### 2. Formulário de Cadastro Controlado

- Estados controlados com `useState`:
  - `nome`, `email`, `telefone` e `modalidade`.
- Atualização em tempo real através do evento `onChange`.
- Submissão com `onSubmit` e prevenção do recarregamento de página com `event.preventDefault()`.
- Utilização do botão componentizado `<Button type="submit" />`.

### 3. Validação e Feedback

- **Validação de campos vazios:** Impede o envio se algum campo obrigatório não estiver preenchido.
- **Validação de e-mail:** Verifica se o e-mail informado possui formato válido (`@` e domínio).
- **Mensagens dinâmicas:** Exibe alertas visuais claros em vermelho (erro) ou verde (sucesso).
- **Limpeza do formulário:** Limpa todos os campos automaticamente após o sucesso.

### 4. Responsividade

- Layout adaptativo para telas de computadores, tablets e celulares (smartphones pequenos até 390px/480px).

---

## 💻 Como Rodar o Projeto Localmente

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/SEU-USUARIO/atv-n2.git
   ```
2. **Acesse a pasta do projeto:**

   ```bash
   cd atv-n2
   ```
3. **Instale as dependências:**

   ```bash
   npm install
   ```
4. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```
5. Abra o navegador no endereço indicado (geralmente `http://localhost:5173`).

---

## 👨‍💻 Autor

Desenvolvido para a disciplina de **Web II** por **Liandro Chaves**.
