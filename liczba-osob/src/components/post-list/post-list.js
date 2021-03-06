
import React from 'react';

import './post-list.css'
import styled from "styled-components";


const TitleBus = styled.div `

  margin-top: 110px;
  margin-left: 20px;
  margin-bottom: 15px;


  h1 {
    color: #000000;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    transition: 0.5s;

    :hover {
      color: darkcyan;
    }
`

const Item = styled.div`
  color: #000000;
  font-size: 18px;
  font-weight: 500;
  font-family: Roboto, sans-serif;
  text-align: center;

`

const PostList = ({peopleInfo, bus, line, max}) => {
    const elements = peopleInfo.map( (item) => {
        if ( typeof item === 'object' && isEmpty(item) ){
            const {people, date} = item;
            const buses = Object.keys(bus),
                busNumber = 0, // choose bus
                busStation = bus[buses[busNumber]]
            return (
                <div key={date}>
                    <TitleBus color="secondary title"><h1>Autobus: {buses[busNumber]}</h1></TitleBus>
                    <div  className='list'>
                        <Item>Czas:<br/>{`${date}`}</Item>
                        <Item>Linia:<br/>{line}</Item>
                        <Item>Przystanek Poprzedni:<br/>{busStation[(peopleInfo.length%busStation.length)-1]}</Item>
                        <Item>Przystanek Końcowy:<br/>{busStation[busStation.length-1]}</Item>
                        <Item>Zajęte miejsca:<br/>{people}/{max}</Item>
                    </div>
                </div>
            )
        }
    })
    function isEmpty(obj) {
        for(let key in obj)
        {
            return true;
        }
        return false;
    }

    return (
        <div className="app-list list-group">
            {elements[elements.length-1]}
        </div>
    )
}

export default PostList;