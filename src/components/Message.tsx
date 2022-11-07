import { CometChat } from '@cometchat-pro/react-native-chat'
import { useEffect, useRef, useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native'
import { Avatar, Input, Text } from 'react-native-elements'


const Message = ({ message, currentUser, owner }) => {
    const dateToTime = (date) => {
      let hours = date.getHours()
      let minutes = date.getMinutes()
      let ampm = hours >= 12 ? 'pm' : 'am'
      hours = hours % 12
      hours = hours ? hours : 12
      minutes = minutes < 10 ? '0' + minutes : minutes
      let strTime = hours + ':' + minutes + ' ' + ampm
      return strTime
    }
    
    const isDateToday = (date) => {
      const today = new Date().getDate()
      const day = new Date(date * 1000).getDate()
  
      return today == day
    }
  
    return currentUser == owner ? (
      <View style={[styles.flexify, styles.spaceMsg]}>
        <Avatar
          placeholderStyle={{ opacity: 0 }}
          rounded
          source={{ uri: message.sender.avatar }}
        />
  
        <View style={[styles.msgBg, { marginLeft: 10 }]}>
          <Text
            style={{
              fontWeight: 800,
              fontSize: 13,
              color: '#4c4c4c',
              textTransform: 'capitalize',
            }}
          >
            {message.sender.name}
          </Text>
          <Text style={{ fontWeight: 600, marginVertical: 5 }}>
            {message.text}
          </Text>
          <Text style={{ fontWeight: 600 }}>
            {dateToTime(new Date(message.sentAt * 1000))}
          </Text>
        </View>
      </View>
    ) : (
      <View style={[styles.flexify, styles.spaceMsg]}>
        <View
          style={[styles.msgBg, { backgroundColor: '#c5c5c5', marginRight: 10 }]}
        >
          <Text
            style={{
              fontWeight: 800,
              fontSize: 13,
              color: '#4c4c4c',
              textTransform: 'capitalize',
            }}
          >
            {message.sender.name}
          </Text>
          <Text styles={{ fontWeight: 600, marginVertical: 5 }}>
            {message.text}
          </Text>
          <Text style={{ fontWeight: 600 }}>
            {dateToTime(new Date(message.sentAt * 1000))}
          </Text>
        </View>
  
        <Avatar
          placeholderStyle={{ opacity: 0 }}
          rounded
          source={{ uri: message.sender.avatar }}
        />
      </View>
    )
  }