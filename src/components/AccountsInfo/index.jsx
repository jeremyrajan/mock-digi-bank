import React, { useState, useEffect } from "react";
import { Accordion, Icon, Header } from "semantic-ui-react";
import TransactionTable from "../TransactionTable";
import { getTransactionsForAccount } from "../../services/accountService";
import "./style.css";

const AccountsInfo = (props) => {
  const [state, setState] = useState({
    activeIndex: 0,
    accountId: 0,
    transactions: [],
  });

  const handleClick = async (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = state;
    const newIndex = activeIndex === index ? -1 : index;
    const accountId = titleProps["data-id"];

    if (!accountId) {
      setState({ activeIndex: newIndex, accountId });
    } else {
      const transactions = await getTransactionsForAccount(
        titleProps["data-id"]
      );
      setState({ activeIndex: newIndex, accountId, transactions });
    }
  };

  const { activeIndex, accountId } = state;

  if (accountId === 0 && props.accounts.length > 0) {
    handleClick({}, { index: 0 });
  }

  const accordianData = props.accounts.map((data, ix) => (
    <div key={data.id}>
      <Accordion.Title
        className="accordian-title"
        data-active={data.is_active}
        data-id={data.id}
        active={activeIndex === ix}
        index={ix}
        onClick={handleClick}
      >
        <div className="accordian-title-details">
          <Icon name="dropdown" />
          <div className="accoridian-title-left">{`${data.account_name} - ${data.account_number}`}</div>
          <div className="accoridian-title-right">{`${data.currency}  ${data.balance}`}</div>
        </div>
      </Accordion.Title>
      <Accordion.Content
        className="accordian-content"
        active={activeIndex === ix}
      >
        {state.transactions && state.transactions.length ? (
          <div>
            <Header
              textAlign="left"
              content="Transactions"
              icon="dollar sign"
              dividing
              as="h5"
              subheader={`Viewing transactions for account: ${accountId}`}
            >
            </Header>
            <TransactionTable
              headers={Object.keys(state.transactions[0])}
              rows={state.transactions}
            />
          </div>
        ) : (
          "Loading..."
        )}
      </Accordion.Content>
    </div>
  ));

  return (
    <Accordion fluid styled>
      {accordianData}
    </Accordion>
  );
};

export default AccountsInfo;
