import React from "react";
import AccountsInfo from "../../components/AccountsInfo";

const Home = ({ accounts = [] }) => {
  return (
    <div>
      <AccountsInfo accounts={accounts}/>
    </div>
  );
};

export default Home;
