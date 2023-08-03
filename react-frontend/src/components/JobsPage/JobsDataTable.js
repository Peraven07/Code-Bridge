
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';


const JobsDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.companyname}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.addrescompany}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.emailcompany}</p>
    const inputTemplate3 = (rowData, { rowIndex }) => <InputText value={rowData.phonenumber}  />
    const checkboxTemplate4 = (rowData, { rowIndex }) => <Checkbox checked={rowData.joboffer}  ></Checkbox>
    const inputTemplate5 = (rowData, { rowIndex }) => <InputText value={rowData.numofstaff}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="companyname" header="Company Name" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="addrescompany" header="Company Address" body={pTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="emailcompany" header="Email Address" body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="phonenumber" header="Contact Number" body={inputTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="joboffer" header="Job Vacancy" body={checkboxTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="numofstaff" header="Number of Staff " body={inputTemplate5} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default JobsDataTable;