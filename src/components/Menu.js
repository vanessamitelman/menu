const Menu = ({ categories, setSelected }) => {
  return (
    <>
      <div className='title'>
        <h2>Our Menu</h2>
        <div className='underline' />
      </div>
      <div className='btn-container'>
        <button className='filter-btn' onClick={() => setSelected('All')}>
          All
        </button>
        {categories?.map((item, index) => {
          return (
            <button
              key={index}
              className='filter-btn'
              onClick={() => setSelected(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
