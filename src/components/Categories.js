import React from 'react';

const Categories = ({ selected, data }) => {
  return (
    <div className='section-center'>
      {data?.map((item) => {
        if (item.category === selected || selected === 'All') {
          return (
            <article className='menu-item' key={item.id}>
              <img src={item.img} alt={item.title} className='photo' />
              <div className='item-info'>
                <header>
                  <h4>{item.title}</h4>
                  <h4 className='price'>${item.price}</h4>
                </header>
                <p className='item-text'>{item.desc}</p>
              </div>
            </article>
          );
        }
        return true;
      })}
    </div>
  );
};

export default Categories;
