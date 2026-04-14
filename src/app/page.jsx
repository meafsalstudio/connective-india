import React from 'react';
import Hero from '../components/Hero';
import ClientLogo from '../components/clientLogo';
// import TaglineSection from '../components/TaglineSection';
import Tagline from '../components/Tagline';
import WhatIsConnectiveIndia from '../components/WhatIsConnectiveIndia';
import ServiceQuote from '../components/ServiceQuote';
import SolutionPillars from '../components/SolutionPillars';
import ProblemsAddressed from '../components/ProblemsAddressed';
import Categories from '../components/Categories';
import PositioningHighlight from '../components/PositioningHighlight';
import Accountability from '../components/Accountability';
import GetStarted from '../components/GetStarted';
import DownloadApp from '../components/DownloadApp';
import HomeService from '../components/homeService';

export default function Home() {
    return (
        <>
            <Hero />
            {/* <TaglineSection /> */}
            <ClientLogo />
            <Tagline />
            <DownloadApp />
            <HomeService />
            <Categories />
            <WhatIsConnectiveIndia />
            <ServiceQuote />
            <SolutionPillars />
            <ProblemsAddressed />
            <PositioningHighlight />
            <Accountability />
            <GetStarted />
        </>
    );
}
