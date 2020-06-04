import React from "react";
import { Table, Button } from "semantic-ui-react";
import TransactionDetailsModal from "../TransactionDetails";
import stripSpecialChar from '../../helpers/stripSpecialChar';
import "./style.css";

const TransactionTable = ({ headers, rows }) => (
  <Table celled striped stackable structured>
    <Table.Header>
      <Table.Row>
        {headers.map((header, ix) => (
          <Table.HeaderCell className="table-header-cell" key={ix}>
            {stripSpecialChar(header)}
          </Table.HeaderCell>
        ))}
        <Table.HeaderCell key={-1}>Details</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {rows.map((row) => (
        <Table.Row>
          {headers.map((header) => (
            <Table.Cell>{row[header]}</Table.Cell>
          ))}
          <Table.Cell>
            <TransactionDetailsModal
              accountId={row.account_id}
              transactionId={row.id}
              trigger={<Button>View Details</Button>}
            />
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

export default TransactionTable;
