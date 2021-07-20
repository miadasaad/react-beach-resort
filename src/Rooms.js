import React from 'react'
import Hero from './Hero'
import Banner from './Banner'
import { Link } from 'react-router-dom'
import RoomsContainer from './RoomsContainer'
export default function Rooms({ hero }) {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="our rooms" >
                    <Link className="btn-primary" to='/'>return Home</Link>
                </Banner>
            </Hero>
            <RoomsContainer />
        </>
    )
}
