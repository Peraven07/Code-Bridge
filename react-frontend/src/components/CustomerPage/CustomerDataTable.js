
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const CustomerDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.CustomerId}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.customername}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.address}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.contactNum}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="CustomerId" header="Customer ID" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="customername" header="Name" body={pTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="address" header="Address" body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="contactNum" header="Contact Number" body={pTemplate3} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default CustomerDataTable;