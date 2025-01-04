import React from 'react';

const Card = ({ title, description, imgSrc }) => {
  return (
    <div className="flex-none w-48 h-64 bg-gray-200 rounded-lg p-4 shadow-md bg-cover bg-center" style={{ backgroundImage: `url(${imgSrc})` }}>
      <div className="flex flex-col mt-36 h-1/3  p-2 bg-black bg-opacity-40 rounded-lg">
        <h3 className="text-base font-bold text-white">{title}</h3>
        <p className="text-sm text-white">{description}</p>
      </div>
    </div>
  );
};

const TopCityHotels = () => {
  const cities = [
    { 
      title: 'The Plaza', 
      description: 'A luxury hotel in New York', 
      imgSrc: 'https://i.ibb.co/z2CxQqv/kelly-sikkema-dq-U02-E4i-SAs-unsplash.jpg' 
    },
    { 
      title: 'Ritz-Carlton', 
      description: 'Accommodations in Los Angeles', 
      imgSrc: 'https://i.ibb.co.com/0rrDnhC/bilderboken-rlw-E8f8an-Oc-unsplash.jpg' 
    },
    { 
      title: 'The Langham', 
      description: 'Elegant hotels in Chicago', 
      imgSrc: 'https://i.ibb.co.com/9GL06Dx/sasha-kaunas-TAg-GZWz6-Qg8-unsplash.jpg' 
    },
    { 
      title: 'Eden Roc', 
      description: 'A luxury resort in Miami', 
      imgSrc: 'https://i.ibb.co.com/8285xR4/ben-grayland-z-Wn-Po-FMTXCs-unsplash.jpg' 
    },
    { 
      title: 'Fairmont ', 
      description: 'Luxury resort in San Francisco', 
      imgSrc: 'https://i.ibb.co.com/1JpXvC0/manuel-moreno-DGa0-LQ0y-DPc-unsplash.jpg' 
    },
    { 
      title: 'The Venetian', 
      description: 'An upscale hotel in Las Vegas', 
      imgSrc: 'https://i.ibb.co.com/bWjxrZH/rktkn-ss-Oty-GE8-Cy-E-unsplash.jpg' 
    },
    { 
      title: 'Le Meurice', 
      description: 'Luxury hotel in Paris', 
      imgSrc: 'https://i.ibb.co.com/cQysJLG/jason-briscoe-76-58-Hpxvp-Q-unsplash.jpg' 
    },
    { 
      title: 'The Dorchester', 
      description: 'Iconic London hotel', 
      imgSrc: 'https://i.ibb.co.com/jkpKL2D/mp-f-V2d-M2-Wv-Kv-E-unsplash.jpg' 
    },
    { 
      title: 'Park Hyatt', 
      description: 'Luxury hotel in Tokyo', 
      imgSrc: 'https://i.ibb.co.com/12Vp5bn/valeriia-bugaiova-p-PHge-Hz1uk-unsplash-1.jpg' 
    },
  ];

  return (
    <div className='w-11/12 mx-auto mt-20 bg-[#181024] p-8'>
      <h1 className='text-[#d3a955] shadow-lg font-extrabold text-xl mb-2 md:text-5xl'>Hotels In Top Cities</h1>
      <div className="flex overflow-x-auto gap-4 mt-4 text-white ">
        {cities.map((city, index) => (
          <Card key={index} title={city.title} description={city.description} imgSrc={city.imgSrc} />
        ))}
        
      </div>
     
    </div>
  );
};

export default TopCityHotels;
