import { get } from "axios";

export function getAccounts() {
  return get("/api/accounts.json").then((res) => res.data);
}

export function getTransactionsForAccount(accountId) {
  if (!accountId) {
    throw Error("Invalid account");
  }

  return get(`/api/accounts/${accountId}/transactions.json`).then(
    (res) => res.data
  );
}

export function getTransactionDetails(transactionId, accountId) {
  if (!transactionId || !accountId) {
    throw Error("Invalid request");
  }

  return get(`/api/accounts/${accountId}/transactions.json`).then(
    ({ data: transactions }) => {
      return transactions.find(
        (transaction) => transaction.id === transactionId
      );
    }
  );
}
