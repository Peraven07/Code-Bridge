import React, {useState } from "react";
import { connect } from "react-redux";
import { Button } from 'primereact/button';
import { TabMenu } from 'primereact/tabmenu';
import { NavLink } from 'react-router-dom';
import { Carousel } from 'primereact/carousel';
import ContactUsPage from "../ContactPage/ContactUsPage";

const CarouselComponent = () => {
    const images = [
        { source: 'https://www.akunatech.com/blog/wp-content/uploads/2018/05/ecommerce-services.jpg', alt: 'Image 1' },
        { source: 'https://www.redbax.com.au/images/eCommerce.jpg', alt: 'Image 2' },
        { source: 'https://www.crazydomains.com/learn/wp-content/uploads/2021/04/5-eCommerce-Products-To-Sell-in-2021-main-image_3840X1200-scaled.jpg', alt: 'Image 3' },
    ];
  
    const itemTemplate = (item) => {
      return (
        <div>
          <img src={item.source} alt={item.alt} />
        </div>
      );
    };
 
    return (
      <div className="col-12 m-0 align-items-center carousel-demo">
        <Carousel value={images} itemTemplate={itemTemplate} numVisible={1} numScroll={1}/>
      </div>
    );
  };

const Dashboard = (props) => {
    {/*Menu bar in the Product Page */}
    const items = [
        { label: 'Home', icon: 'pi pi-fw pi-home', path: '/' },
        { label: 'Product', icon: 'pi pi-fw pi-pencil', path: '/testing' },
        { label: 'User Details', icon: 'pi pi-fw pi-file', path: '/userdetails' },
        { label: 'Order', icon: 'pi pi-fw pi-cog', path: '/orderdetails' },
        { label: 'About Us', icon: 'pi pi-fw pi-cog', path: '/aboutus' },
        { label: 'Customer', icon: 'pi pi-fw pi-cog', path: '/customer' },
        { label: 'Contact Us', icon: 'pi pi-fw pi-cog', path: '/contactus'}
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
                  className={`p-tabmenu ${activeItem === index ? 'active' : ''}`}>
                  <NavLink to={item.path} className="p-tabmenu">
                    <span className="p-menuitem-icon pi pi-fw pi-home"></span>
                    <span className="p-menuitem-text">{item.label}</span>
                  </NavLink>
                </div>
              )
            }))}/>
        <div className="grid grid-nogutter surface-0 text-800">
        <ContactUsPage />
        <CarouselComponent/>
            <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                <section>
                    <span className="block text-6xl font-bold mb-1">Create the screens</span>
                    <div className="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
                    <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        
                    <Button label="Learn More" type="button" className="mr-3 p-button-raised" />
                    <Button label="Live Demo" type="button" className="p-button-outlined" />
                </section>
            </div>
            <div className="col-12 md:col-6 overflow-hidden">
                <img src="https://tse1.mm.bing.net/th?id=OIP.LbWj8r52NjMD18EBNk2kYQHaEK&pid=Api&P=0&h=180" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
            </div>
        </div>
        </div>
    );
};


const mapState = (state) => {
    //
    return {};
};

const mapDispatch = (dispatch) => ({
    //
});

export default connect(mapState, mapDispatch)(Dashboard);
