import React from 'react'
import styled from 'styled-components/native'
import { Text } from '../Text'
import { Platform } from 'react-native'
import WebView from "react-native-webview"
import { Card } from "react-native-paper"

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`
const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`

const isAndroid = Platform.OS === 'android'

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebView : CompactImage

  return (
    <Item>
      <Image
        source={{ uri: restaurant.photos[0] }}
      />
      <Text variant='body' center numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  )
}
