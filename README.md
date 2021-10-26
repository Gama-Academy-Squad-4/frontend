
# Programa Gama Coders

## Squad 4 - Projeto GamaBTC.


![](https://img.shields.io/badge/React-17.0.2-green.svg)
![](https://img.shields.io/badge/license-MIT-blue.svg)

---



## Prévia

    https://gama-academy-squad-4.github.io/frontend


---

## Objetivo

Construir um sistema web para monitorar as transações com bitcoin do usuário. Permitindo o acompanhamento da evolução do valor consolidado, comparando o valor de bitcoin na data da compra e o valor atual.



---


## Tecnologias
O projeto foi desenvolvido utilizando:
* React
* Styled-componentes
* React-Date-Picker
* Recharts
* Axios
* Redux
* Jest (Mock da API)

---

## Telas
### Login
* Valores tratados, mas sem envio para a API
* Botão Desabilitado com qualquer dos campos vazio

### Dashboard
* Valor Bitcloin/ R$ nas últimas 24h
* Consolidado de transações do usuário
* Saldo da Semana
* Saldo do mês
* Gráfico Posição consolidada x semana

### Detalhes
* Tabela com a evolução de cada transação do usuário

### Cadastro
* Cadastro de Transações
* Edição de transações (busca por data)


---

## Atualização de dados
* Dados organizados em uma store Redux
* Consumo da API a cada 30s atualiza os dados.


---


