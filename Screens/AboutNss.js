import { View, Text } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

export default function AboutNss() {
  return (
    <WebView style={{flex:1}} source={{uri : 'https://nss.gov.in/'}}/>
  )
}