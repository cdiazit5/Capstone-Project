import React from 'react';
import './aggrid.css';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function NbosPipelineOppGrid({ opportunityDetail }) {
  // map through array of relationship data?

  // const rowData = [
  //   {
  //     relationship: `Relationship 1`,
  //     product: 'loan',
  //     sales: 'Opportunity',
  //     revenue: '$4.81 MM',
  //     date: '1/1/2021',
  //     details: 'Details',
  //   },
  //   {
  //     relationship: 'Relationship 2',
  //     product: 'Lease',
  //     sales: 'Proposal',
  //     revenue: '$5.67 MM',
  //     date: '2/1/2021',
  //     details: 'Details',
  //   },
  //   {
  //     headerName: 'Relationship',
  //     relationship: 'Relationship 3',
  //     product: 'Term Loan',
  //     sales: 'Pending',
  //     revenue: '$4.81 MM',
  //     date: '2/1/2021',
  //     details: 'Details',
  //   },
  //   {
  //     relationship: 'Relationship 4',
  //     product: 'Revolving Credit',
  //     sales: 'Pending',
  //     revenue: '$3.78 MM',
  //     date: '2/1/2021',
  //     details: 'Details',
  //   },
  //   {
  //     relationship: 'Relationship 5',
  //     product: 'Line of Credit',
  //     sales: 'Commitment',
  //     revenue: '$3.78 MM',
  //     date: '5/2/2021',
  //     details: 'Details',
  //   },
  // ];
  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: 400,
        minwidth: 1000,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
      }}
    >
      <AgGridReact rowData={opportunityDetail.opportunities}>
        <AgGridColumn field="id" headerName="Relationship"></AgGridColumn>
        <AgGridColumn field="product_type"></AgGridColumn>
        <AgGridColumn
          field="sales_stage"
          headerName="Sales Stage"
        ></AgGridColumn>
        <AgGridColumn
          field="revenue"
          sort="desc"
          sortable={true}
        ></AgGridColumn>
        <AgGridColumn
          field="date_closed"
          headerName="Date Closed"
        ></AgGridColumn>
        <AgGridColumn field="details"></AgGridColumn>
      </AgGridReact>
    </div>
  );
}
