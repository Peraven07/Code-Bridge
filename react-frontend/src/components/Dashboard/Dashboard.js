import React, {useState } from "react";
import { connect } from "react-redux";
import { Button } from 'primereact/button';
import { TabMenu } from 'primereact/tabmenu';
import { NavLink } from 'react-router-dom';
import { Carousel } from 'primereact/carousel';

const CarouselComponent = () => {
    const images = [
        { source: 'https://i.pinimg.com/originals/d1/85/27/d18527807ab8ad236eae846cf5818bc4.png', alt: 'Image 1' },
        { source: 'https://sakai.primereact.org/demo/images/galleria/galleria1.jpg', alt: 'Image 2' },
        { source: 'https://sakai.primereact.org/demo/images/product/galaxy-earrings.jpg', alt: 'Image 3' },
    ];
  
    const itemTemplate = (item) => {
      return (
        <div>
          <img src={item.source} alt={item.alt} />
        </div>
      );
    };
 
    return (
      <div className="col-10 align-items-center carousel-demo">
        <Carousel value={images} itemTemplate={itemTemplate} numVisible={1} numScroll={1} circular
        autoplayInterval={500} />
      </div>
    );
  };

const Dashboard = (props) => {
    {/*Menu bar in the Product Page */}
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
                  className={`p-tabmenu ${activeItem === index ? 'active' : ''}`}>
                  <NavLink to={item.path} className="p-tabmenu">
                    <span className="p-menuitem-icon pi pi-fw pi-home"></span>
                    <span className="p-menuitem-text">{item.label}</span>
                  </NavLink>
                </div>
              )
            }))}/>
        <div className="grid grid-nogutter surface-0 text-800">
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
