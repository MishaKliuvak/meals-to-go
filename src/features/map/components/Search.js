import React, { useContext, useState, useEffect } from 'react'
import { Searchbar } from "react-native-paper"
import styled from "styled-components/native"
import { LocationContext } from "../../../services/location/locationContext"

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
  position: absolute;
  z-index: 99;
  top: 30px;
  width: 100%;
`

export const Search = () => {
  const { keyword, search } = useContext(LocationContext)
  const [searchKeyword, setSearchKeyword] = useState(keyword)

  useEffect(() => {
    setSearchKeyword(keyword)
  }, [keyword])

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        icon="map"
        onSubmitEditing={() => {
          search(searchKeyword)
        }}
        onChangeText={(text) => setSearchKeyword(text)}
      />
    </SearchContainer>
  )
}
