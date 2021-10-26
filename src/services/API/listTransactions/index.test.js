import {  ListTransactions } from "./index";

import axios from 'axios';

jest.mock("axios");


describe("ListTransactions", () => {
    describe("when API call is successful", () => {
      it("should return transactions list", async () => {

        const transactions = [
            {
                date: new Date(),
                quantidade: Math.floor(Math.random() * 1000),
                compra: Math.floor(Math.random() * 1000),
                atual: Math.floor(Math.random() * 1000),
                variancia: Math.floor(Math.random() * 1000),
            }
          ];
          axios.get.mockResolvedValueOnce(transactions);
    
          // when
          const result = await ListTransactions();
    
          // then
          expect(axios.get).toHaveBeenCalledWith(`https://gama-backend-api.herokuapp.com/transactions`);
          expect(result).toEqual(transactions);
        
        });
    });
  
    describe("when API call fails", () => {
      it("should return empty transactions list", async () => {

        const message = "Network Error";
        axios.get.mockRejectedValueOnce(new Error(message));

        // when
        const result = await ListTransactions();

        // then
        expect(axios.get).toHaveBeenCalledWith(`https://gama-backend-api.herokuapp.com/transactions`);
        expect(result).toEqual([]);
      });
    });
  });