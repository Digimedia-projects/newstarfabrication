// pages/index.tsx

import React from 'react';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import About from '@/components/About';
import Service from '@/components/Service';
import Cta from '@/components/Cta';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import PopupForm from '@/components/CallButton';
import Head from 'next/head';





// The component that renders the page
const HomePage = () => {
  return (
<div>
<Head>
        <title>New Star Fabrication</title>
        <meta
          name="description"
          content="New Star Fabrication offers top-notch metal fabrication services, specializing in custom steel, aluminum, and other metals for various industries."
        />
        <meta
          name="keywords"
          content="metal fabrication, steel fabrication, aluminum fabrication, custom fabrication, welding services, fabrication shop"
        />
        <meta name="author" content="New Star Fabrication" />
        <meta property="og:title" content="New Star Fabrication - Leading Metal Fabricators" />
        <meta
          property="og:description"
          content="New Star Fabrication offers top-notch metal fabrication services, specializing in custom steel, aluminum, and other metals for various industries."
        />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:url" content="https://www.newstarfabrication.live/" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

    <Header />
    <Banner />
    <About />
    <Service/>
    <Cta/>
<Location/>
<Footer/>
<PopupForm />
    
    </div>
  );
};

export default HomePage;
