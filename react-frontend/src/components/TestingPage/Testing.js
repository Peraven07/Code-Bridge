import React, { useState,useRef } from "react";
import { connect } from "react-redux";
import { TabMenu } from 'primereact/tabmenu';
import { NavLink } from 'react-router-dom';
import { DataView } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Rating } from "primereact/rating";
import { Toast } from 'primereact/toast';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useHistory } from 'react-router-dom'; // Import useHistory

const OrderDetails = () => {

  const toast = useRef(null);
  const history = useHistory(); // Get history from React Router

  const [orderItems, setOrderItems] = useState([]);
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");

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
              detail: 'Cart is Empty',
          });
      }
  };

  const handleProceedToPayment = () => {
    // Navigate to the payment page
    history.push('/orderdetails');
  };

  return (
      <div className="card">
          <Toast ref={toast} />

          <div className="p-mt-4">
              <h3>Order Summary</h3>
              <DataTable value={orderItems}>
                  <Column field="productName" header="Product Name"></Column>
                  <Column field="quantity" header="Quantity"></Column>
              </DataTable>
              <Button
                  label="Proceed to Payment"
                  onClick={handleProceedToPayment}
              />
          </div>
      </div>
  );
};


{/*Menu bar in the Product Page */}
const Navbar = () => {
  const items = [
    { label: 'Home', icon: 'pi pi-fw pi-home', path: '/' },
    { label: 'Product', icon: 'pi pi-fw pi-pencil', path: '/testing' },
    { label: 'Customer', icon: 'pi pi-fw pi-file', path: '/userdetails' },
    { label: 'Order', icon: 'pi pi-fw pi-cog', path: '/orderdetails' }
  ];

  const [activeItem, setActiveItem] = useState(null);

  const onMenuItemMouseEnter = (index) => {
    setActiveItem(index);
  };

  const onMenuItemMouseLeave = () => {
    setActiveItem(null);
  };

  return (
    <div className="col-12 card">
      <TabMenu
        model={items.map((item, index) => ({
          label: (
            <div
              onMouseEnter={() => onMenuItemMouseEnter(index)}
              onMouseLeave={onMenuItemMouseLeave}
              className={`p-tabmenu ${activeItem === index ? 'active' : ''}`}
            >
              <NavLink to={item.path} className="p-tabmenu">
                <span className="p-menuitem-icon pi pi-fw pi-home"></span>
                <span className="p-menuitem-text">{item.label}</span>
              </NavLink>
            </div>
          )
        }))}
      />
    </div>
  );
};

const Data_View = () => {

  const [value, setValue] = useState(null);

  const products = [
    { id: 1, name: 'Wireless Keyboard and Mouse Combo, Loigys Full-Sized 2.4GHz Comfortable Palm Rest and Optical Wireless Mouse for Windows, Mac OS PC/Desktops/Computer/Laptops', imageUrl: 'https://m.media-amazon.com/images/I/61WLb8FKFRL._AC_SL1500_.jpg' },
    { id: 2, name: 'Full Size Slim Thin Wireless Keyboard and Mouse Combo with Numeric Keypad with On/Off Switch - White & Silver', imageUrl: 'https://m.media-amazon.com/images/I/61uLF07L+7L._AC_SL1500_.jpg' },
    { id: 3, name: 'Logitech POP Wireless Mouse and POP Keys Mechanical Keyboard Combo - Customisable Emojis, SilentTouch, Precision/Speed Scroll, Design, Bluetooth, Multi-Device, OS Compatible – Blast Yellow', imageUrl: 'https://m.media-amazon.com/images/I/71O99e+cplL._AC_SL1500_.jpg' },
    { id: 4, name: 'Veilzor Wireless Keyboard and Mouse Combo, 2.4GHz Lag-Free Ergonomic Keyboard Full-Size with Phone Holder & 10 Independent Shortcuts, Silent Mouse with 4 DPI for Computer, Desktop, Laptop', imageUrl: 'https://m.media-amazon.com/images/I/71SqqCmHjuL._AC_SL1500_.jpg' },
    { id: 5, name: 'Military Smartwatch with Bluetooth Call, Waterproof Smart Sport Watches Rugged Outdoor Mens Watch for iPhone Android Smartwatch with HR Monitor (Black)', imageUrl: 'https://m.media-amazon.com/images/I/61swN9qXXZL._AC_SL1200_.jpg' },
    { id: 6, name: 'SYNTRAVA Wireless Ear Clip Bone Conduction Headphones Bluetooth Open Ear Headphones Wireless Bluetooth, Waterproof Sport Running Earring Earphone for Android iPhone[Q80-S603]', imageUrl: 'https://m.media-amazon.com/images/I/61aoi5s+dkL._AC_SL1500_.jpg' },
    { id: 7, name: 'Invicta Mens Pro Diver Collection Chronograph Watch', imageUrl: 'https://m.media-amazon.com/images/I/71XuxT+R-EL._AC_UY879_.jpg' },
    { id: 8, name: 'Anne Klein Womens Leather Strap Watch', imageUrl: 'https://m.media-amazon.com/images/I/71Sbjr41u5L._AC_UY879_.jpg' },
    { id: 9, name: 'HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)', imageUrl: 'https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_SL1500_.jpg' },

    // Add more product sets here
  ];
    
  const [quantities, setQuantities] = useState({});

  const handleAdd = (setId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [setId]: (prevQuantities[setId] || 0) + 1,
    }));
  };

  const handleRemove = (setId) => {
    if (quantities[setId] > 0) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [setId]: prevQuantities[setId] - 1,
      }));
    }
  };
  
  const ProductItem = ({ name, imageUrl, quantity, onAdd, onRemove}) => {
    return (
      <div  className="card w-3">
        <div className="product-image-container ">
          <img src={imageUrl} alt={name} className="product-image" style={{ height: '10rem' }} />
        </div>
        <div className="product-details">
          <p className="product-name">{name}</p>
          <div className="flex product-control ">
            <div className="card product-control"><button onClick={onRemove}>-</button></div>
            <div className="product-quantity">{quantity}</div>
            <div className="card product-control"><button onClick={onAdd}>+</button></div>
          </div>
          <div className="flex product-control ">
            <span className="p-buttonset">
              <Button label=  "Add to Cart"/>
              <Button label= "Buy Now" />
            </span>
          </div>
        <div><Rating value={value} onChange={(e) => setValue(e.value)} cancel={true}/></div>
        </div>
      </div>
    );
  };

  const itemTemplate = (product) => {
    return (
      <ProductItem
        name={product.name}
        imageUrl={product.imageUrl}
        quantity={quantities[product.id] || 0}
        onAdd={() => handleAdd(product.id)}
        onRemove={() => handleRemove(product.id)}
      />
    );
  };

  return (
    <div>
      <Navbar />
      <div className="col-12 flex">
        <div className="col-12 md:col-6 lg:col-8 data-view ">
          <DataView value={products} layout="grid-nogutter" itemTemplate={itemTemplate} style={{ gap: '3rem' }}  />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <OrderDetails/>
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {};
};

const mapDispatch = (dispatch) => {
  return {};
};

export default connect(mapState, mapDispatch)(Data_View);
