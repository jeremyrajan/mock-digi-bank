import React from "react";
import AccountsInfo from "../../components/AccountsInfo";
import { Header } from "semantic-ui-react";

const Home = ({ accounts = [] }) => {
  return (
    <div>
      <Header textAlign="left" as="h1">Accounts</Header>
      <AccountsInfo accounts={accounts}/>
    </div>
  );
};

export default Home;
