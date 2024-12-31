import React, { createContext } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const MetadataContext = createContext();

const MetadataProvider = ({ children }) => {
   const { item } = useSelector((state) => state.products);
  const defaultMetadata = {
    title: 'Exclusive',
    description: 'South Asia’s premier online shopping makterplace with an active presense in Bangladesh.',
    keywords: 'exclusive, marketplace, ecommerce, website',
    author: 'Anonymous',
  };

  const metadata = {
    home: {
      title: 'Exclusive',
      description: 'This is Home page, you can find our latest and best selling product here.',
      keywords: 'Home, exclusive, marketplace, ecommerce, website',
      author: 'Anonymous',
    },
    about: {
      title: 'About Us | Exclusive',
      description: 'This is About page, you can find our mission & vision, and our team member here.',
      keywords: 'About Us, Team, exclusive, marketplace, ecommerce, website',
      author: 'Anonymous',
    },
    productDetail: {
      title: `${item.title} | Exclusive`,
      description: 'This is Our Blog Page, you can find our latest blog or article posts here.',
      keywords: 'Product Detail, exclusive, marketplace, ecommerce, website',
      author: 'Anonymous',
    },
    bestSelling: {
      title: 'Best Selling | Exclusive',
      description: 'This is Best Selling page, you can find our best selling product here.',
      keywords: 'Best Selling, exclusive, marketplace, ecommerce, website',
      author: 'Anonymous',
    },
    alllProduct: {
      title: 'All Product | Exclusive',
      description: 'This is All Product page, you can find all product here.',
      keywords: 'All Product, exclusive, marketplace, ecommerce, website',
      author: 'Anonymous',
    },
    contact: {
      title: 'Contact Us | Exclusive',
      description: 'This is Contact Us page, you can find our contact information here.',
      keywords: 'Contact Us, exclusive, marketplace, ecommerce, website',
      author: 'Anonymous',
    }
  };

  return (
    <MetadataContext.Provider value={{ defaultMetadata, metadata }}>
      {children}
    </MetadataContext.Provider>
  );
};

MetadataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MetadataProvider, MetadataContext };