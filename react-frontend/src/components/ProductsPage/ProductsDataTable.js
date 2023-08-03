
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';


const ProductsDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.productName}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.productId}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.productPrice}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.productType}</p>
    const checkboxTemplate4 = (rowData, { rowIndex }) => <Checkbox checked={rowData.productStock}  ></Checkbox>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="productName" header="Product" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="productId" header="Product ID" body={pTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="productPrice" header="Price" body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="productType" header="Product Type" body={pTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="productStock" header="Stock Availability" body={checkboxTemplate4} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default ProductsDataTable;