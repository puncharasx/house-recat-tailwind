import React,{useState} from 'react'
import styled from 'styled-components'
import Section from './Section'
import data from '../data'

const Home = () => {

    return (
        <>
        <Container>
        {data.map((d,index) => {
            return (
            <Section
                key={index}
                title={d.name}
                description={d.detail}
                backgroundImage={d.url}
                leftBtnText="Visit"
                rightBtnText="learn more"

                
            />
            )
            

            
        })}
        </Container>
        </>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
