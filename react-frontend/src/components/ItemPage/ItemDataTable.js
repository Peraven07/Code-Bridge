
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const ItemDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.itemID}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.productId}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.orderid}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.Itemquantity}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.subTotal}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="itemID" header="Item ID" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="productId" header="Product ID" body={pTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="orderid" header="Order ID" body={pTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="Itemquantity" header="Quantity" body={pTemplate3} sortable style={{ minWidth: "8rem" }} />
            <Column field="subTotal" header="Sub Total" body={pTemplate4} sortable style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default ItemDataTable;