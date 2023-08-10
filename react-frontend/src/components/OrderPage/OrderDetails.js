import React, { useState,useRef } from "react";
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const OrderDetails = () => {
    const toast = useRef(null);

    const [orderItems, setOrderItems] = useState([]);
    const [productName, setProductName] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleProductNameChange = (event) => {
        setProductName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleAddItem = () => {
        if (productName && quantity) {
            const newItem = {
                productName,
                quantity: parseInt(quantity),
            };
            setOrderItems([...orderItems, newItem]);
            setProductName("");
            setQuantity("");
        } else {
            toast.current.show({
                severity: 'warn',
                summary: 'Input Error',
                detail: 'Please enter both product name and quantity.',
            });
        }
    };

    return (
        <div className="col-12">
            <Toast ref={toast} />

            <div className="p-mt-4">
                <h3>Order Summary</h3>
                <DataTable value={orderItems}>
                    <Column field="productName" header="Product Name"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>
        </div>
    );
};

export default OrderDetails;
