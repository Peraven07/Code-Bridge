import React, { useState } from "react";
import { connect } from "react-redux";
import { TabMenu } from 'primereact/tabmenu';
import { NavLink } from 'react-router-dom';
import { DataView } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Rating } from "primereact/rating";

const Navbar = () => {
  const items = [
    { label: 'Home', icon: 'pi pi-fw pi-home', path: '/' },
    { label: 'Cart', icon: 'pi pi-fw pi-calendar', path: '/cart' },
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
    <div className="card">
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
              {activeItem === index && (
                <div className="submenu">
                  {<NavLink to="/userdetails">Customer</NavLink>}
                  {/* Example: <NavLink to="/submenu">Submenu Item</NavLink> */}
                </div>
              )}
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
    { id: 'KnM1', name: 'Wireless Keyboard and Mouse Combo, Loigys Full-Sized 2.4GHz Comfortable Palm Rest and Optical Wireless Mouse for Windows, Mac OS PC/Desktops/Computer/Laptops', imageUrl: 'https://m.media-amazon.com/images/I/61WLb8FKFRL._AC_SL1500_.jpg' },
    { id: 'KnM2', name: 'Full Size Slim Thin Wireless Keyboard and Mouse Combo with Numeric Keypad with On/Off Switch - White & Silver', imageUrl: 'https://m.media-amazon.com/images/I/61uLF07L+7L._AC_SL1500_.jpg' },
    { id: 'KnM3', name: 'Logitech POP Wireless Mouse and POP Keys Mechanical Keyboard Combo - Customisable Emojis, SilentTouch, Precision/Speed Scroll, Design, Bluetooth, Multi-Device, OS Compatible – Blast Yellow', imageUrl: 'https://m.media-amazon.com/images/I/71O99e+cplL._AC_SL1500_.jpg' },
    { id: 'KnM4', name: 'Veilzor Wireless Keyboard and Mouse Combo, 2.4GHz Lag-Free Ergonomic Keyboard Full-Size with Phone Holder & 10 Independent Shortcuts, Silent Mouse with 4 DPI for Computer, Desktop, Laptop', imageUrl: 'https://m.media-amazon.com/images/I/71SqqCmHjuL._AC_SL1500_.jpg' },
    { id: 'Watch', name: 'Military Smartwatch with Bluetooth Call, Waterproof Smart Sport Watches Rugged Outdoor Mens Watch for iPhone Android Smartwatch with HR Monitor (Black)', imageUrl: 'https://m.media-amazon.com/images/I/61swN9qXXZL._AC_SL1200_.jpg' },
    { id: 'EarBud', name: 'SYNTRAVA Wireless Ear Clip Bone Conduction Headphones Bluetooth Open Ear Headphones Wireless Bluetooth, Waterproof Sport Running Earring Earphone for Android iPhone[Q80-S603]', imageUrl: 'https://m.media-amazon.com/images/I/61aoi5s+dkL._AC_SL1500_.jpg' },
    { id: 'Watch', name: 'Invicta Mens Pro Diver Collection Chronograph Watch', imageUrl: 'https://m.media-amazon.com/images/I/71XuxT+R-EL._AC_UY879_.jpg' },
    { id: 'Watch', name: 'Anne Klein Womens Leather Strap Watch', imageUrl: 'https://m.media-amazon.com/images/I/71Sbjr41u5L._AC_UY879_.jpg' },
    { id: 'TV', name: 'HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)', imageUrl: 'https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_SL1500_.jpg' },

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
  
  const ProductItem = ({ name, imageUrl, quantity, onAdd, onRemove }) => {
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
              <Button label=  "Add to Cart" />
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
      <div className="data-view">
        <DataView value={products} layout="grid-nogutter" itemTemplate={itemTemplate} style={{ gap: '3rem' }} />
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
