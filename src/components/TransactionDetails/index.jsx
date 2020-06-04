import React, { useState } from "react";
import {Header, Modal, Segment } from "semantic-ui-react";
import { getTransactionDetails } from "../../services/accountService";
import stripSpecialChar from '../../helpers/stripSpecialChar';
import './style.css';

const TransactionDetailsModal = ({ trigger, accountId, transactionId }) => {
  const [transactionDetails, setTransactionDetails] = useState({});

  const fetchTransactionDetails = async () => {
    const transactionDetails = await getTransactionDetails(
      transactionId,
      accountId
    );
    setTransactionDetails(transactionDetails);
  };

  return (
    <Modal trigger={trigger} onOpen={fetchTransactionDetails}>
      <Modal.Header>Transaction #{transactionId}</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <dl>
            {Object.keys(transactionDetails).map((trDetail) => {
              return (
                <div className="transaction-detail-row">
                  <Header className="transaction-detail-row-title" dividing size="small" as='dt'>{stripSpecialChar(trDetail)}</Header>
                  <Segment.Inline as='dd'>{transactionDetails[trDetail] || '-'}</Segment.Inline>
                </div>
              );
            })}
          </dl>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default TransactionDetailsModal;
