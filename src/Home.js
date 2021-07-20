import React from 'react'
import Hero from './Hero'
import Banner from './Banner'
import { Link } from 'react-router-dom'
import Services from './Services'
import FeaturedRooms from './FeaturedRooms'


export default function Home() {
    return (
        <React.Fragment>
            <Hero >
                <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                    <Link to='/rooms' className="btn-primary">our rooms</Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />

        </React.Fragment>
    )
}

