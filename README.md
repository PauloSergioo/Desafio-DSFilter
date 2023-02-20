# DESAFIO: Eventos e estado global

# Sobre o desafio

### Premissas

- Principal premissa foi dar introdução nos Eventos, e Estados Globais do REACT, com o objetivo de filtrar um script para implementar a base de dados de produtos, bem como a função que busca
os produtos por preço:
- O sistema possibilita a aplicação de vários conhecimentos importantes das
disciplinas de fundamentos.
- O sistema contem as principais funcionalidades que se espera de um
profissional iniciante deve saber construir.

## 

### Visão geral do sistema

Foi desenvolvido um sistema para gerenciar as informações dos participantes das atividades de um
evento acadêmico. As atividades deste evento podem ser, por exemplo, palestras, cursos, oficinas
práticas, etc. Cada atividade que ocorre possui nome, descrição, preço, e pode ser dividida em vários
blocos de horários (por exemplo: um curso de HTML pode ocorrer em dois blocos, sendo necessário
armazenar o dia e os horários de início de fim do bloco daquele dia). Para cada participante, deseja-se
cadastrar seu nome e email.


### Respeitando o seguinte caso de uso:

- O corpo da tela deve ser um componente (na imagem abaixo: ListingBody) que possui dois filhos: o card de
filtro, e o card de listagem. Você DEVE implementar um evento para fazer o componente de filtro notificar os
parâmetros de filtragem dos produtos:

![image](https://user-images.githubusercontent.com/88008441/220121688-00d7ef48-37be-40e4-8f3e-063ca69cc36e.png)

- No cabeçalho DEVE aparecer o número de produtos listados. Esse número DEVE observar e reagir às
mudanças na listagem. Para isto, mantenha um estado global utilizando a Context API.

![image](https://user-images.githubusercontent.com/88008441/220121814-a80a9558-ffdd-4390-bf16-312558ab5df6.png)


# Tecnologias utilizadas

- JavaScript
- ReactJS
- TypeScript

# Como executar o projeto

## Pré-requisitos: npm / yarn

```bash


# clonar repositório
git clone https://github.com/PauloSergioo/Desafio-DSFilter

# instalar dependências
yarn install

# executar o projeto
yarn dev

```

# Educador

[DevSuperior - Escola de programação](https://devsuperior.com.br/)

[![DevSuperior no Instagram](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/ig-icon.png)](https://instagram.com/devsuperior.ig) ![DevSuperior no Youtube](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/yt-icon.png)
