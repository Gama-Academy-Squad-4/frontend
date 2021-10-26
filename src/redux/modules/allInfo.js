export const Types = {
  SET_BTC_24H: 'allInfo/SET_BTC_24H',
  SET_CONSOLIDADO: 'allInfo/SET_CONSOLIDADO',
  SET_SALDO_SEMANA: 'allInfo/SET_SALDO_SEMANA',
  SET_SALDO_MES: 'allInfo/SET_SALDO_MES',
  SET_DATA_CHART: 'allInfo/SET_DATA_CHART',
  SET_TRANSACTIONS: 'allInfo/SET_TRANSACTIONS',
  SET_SEARCHED: 'allInfo/SET_SEARCHED',
};

const initialState = {
  btc24h: {
    atual: 0,
    maximo: 0,
    minimo: 0,
  },
  consolidado: {
    investido: 0,
    atual: 0,
    lucro: 0,
  },
  saldoSemana: {
    saldo: 0,
    percent: 0,
  },
  saldoMes: {
    saldo: 0,
    percent: 0,
  },
  dataChart: [
    {
      date: new Date(),
      value: 0,
    },
  ],
  transactions: [
    {
      date: new Date(),
      quantidade: 0,
      compra: 0,
      atual: 0,
      variancia: 0,
    },
  ],
  searched: [
    {
      date: new Date(),
      quantidade: 0,
      compra: 0,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_BTC_24H:
      return { ...state, btc24h: action.payload };
    case Types.SET_CONSOLIDADO:
      return { ...state, consolidado: action.payload };
    case Types.SET_SALDO_SEMANA:
      return { ...state, saldoSemana: action.payload };
    case Types.SET_SALDO_MES:
      return { ...state, saldoMes: action.payload };
    case Types.SET_DATA_CHART:
      return { ...state, dataChart: action.payload };
    case Types.SET_TRANSACTIONS:
      return { ...state, transactions: action.payload };
    case Types.SET_SEARCHED:
      return { ...state, searched: action.payload };

    default:
      return state;
  }
};
export default reducer;

export const setBtc24h = (btc24h) => {
  return {
    type: Types.SET_BTC_24H,
    payload: btc24h,
  };
};

export const setConsolidado = (consolidado) => {
  return {
    type: Types.SET_CONSOLIDADO,
    payload: consolidado,
  };
};

export const setSaldoSemana = (saldoSemana) => {
  return {
    type: Types.SET_SALDO_SEMANA,
    payload: saldoSemana,
  };
};

export const setSaldoMes = (saldoMes) => {
  return {
    type: Types.SET_SALDO_MES,
    payload: saldoMes,
  };
};

export const setDataChart = (dataChart) => {
  return {
    type: Types.SET_DATA_CHART,
    payload: dataChart,
  };
};

export const setTransactions = (transactions) => {
  return {
    type: Types.SET_TRANSACTIONS,
    payload: transactions,
  };
};

export const setSearched = (searched) => {
  return {
    type: Types.SET_SEARCHED,
    payload: searched,
  };
};
