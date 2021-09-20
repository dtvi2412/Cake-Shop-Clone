import React from 'react';
import './Customers.scss';
import StarRateIcon from '@material-ui/icons/StarRate';
function Customers() {
  const customer = [
    {
      id: 0,
      name: 'Wilma Mumduya',
      linkImage:
        'https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xcustomer1.png.pagespeed.ic.ysUAeEBkl6.webp',
    },
    {
      id: 1,
      name: 'Wilma Mumduya',
      linkImage:
        'https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xcustomer2.png.pagespeed.ic.LvEfMvNkuu.webp',
    },
    {
      id: 2,
      name: 'Wilma Mumduya',
      linkImage:
        'https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xcustomer3.png.pagespeed.ic.i96B6HhlMU.webp',
    },
  ];
  // const renderStar = () => {
  //   for (let i = 0; i <= 5; i++) {
  //     return <StarRateIcon />;
  //   }
  // };
  //Handle Render Customer
  const renderCustomer = () => {
    return customer.map((item, index) => {
      return (
        <div className="customers__content__item">
          <div className="customers__content__item__icon">
            {/* {renderStar()} */}
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            architecto illum inventore veniam voluptates.
          </p>
          <div className="customers__content__item__image">
            <img src={item.linkImage} alt={`customer-${item.id}`} />
            <span>{item.name}</span>
          </div>
        </div>
      );
    });
  };

  return (
    <section className="customers">
      <h1>Food Lover's Sat</h1>
      <div className="customers__content">{renderCustomer()}</div>
    </section>
  );
}

export default Customers;
