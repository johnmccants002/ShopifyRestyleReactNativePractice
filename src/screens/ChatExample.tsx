/*
 * Below is a bare functioning example of how I made a React-Native Chat messaging component that shifts the input up when
 * the keyboard is active, and scrolls back down when the keyboard is inactive from a TextInput blur.
 *
 * The only thing I haven't been able to figure out yet is getting the ListView to render from the bottom, not sure if it's
 * possible yet via styles.
 *
 * NOTE: This uses from iOS-only properties
*/

'use strict';
 
var React = require('react-native');
var TimerMixin = require('react-timer-mixin');
var moment = require('moment');

var {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  Component,
  TouchableHighlight,
} = React;

import ListView from 'deprecated-react-native-listview'
 
var Chat = React.createClass({
  mixins: [TimerMixin],
  
  onCancel() {
    this.props.navigator.pop();
  },
  
  componentDidMount() {
    // Load messages from Flux instead of example dataSource
  },
  
  getInitialState() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    
    return {
      newMessage: '',
      user: {
        id: 1,
      },
      dataSource: ds.cloneWithRows([{
        user_id: 1,
        content: "Hello World!",
        created_at: new Date(),
      },
      {
        user_id: 2,
        content: "World isn't here, please leave a message.",
        created_at: new Date(),
      }]),
    };
  },
  
  inputFocused(refName) {
    this.setTimeout(
      () => {
        var scrollResponder = this.refs.scrollView.getScrollResponder();
        scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
          React.findNodeHandle(this.refs[refName]),
          60, //additionalOffset
          true
        );
      },
      50
    );
  },
  
  updateMessageState(text){
    this.setState({newMessage: text});
  },
  
  sendMessage() {
    // Send your message via Flux
    console.log("Sending: " + this.state.newMessage);
  },
  
  render() {
    return (
      <ScrollView
          automaticallyAdjustContentInsets={false}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps={false}
          showsVerticalScrollIndicator={false}
          ref='scrollView'
          contentContainerStyle={styles.container}>
        <ListView style={styles.listView}
            automaticallyAdjustContentInsets={false}
            scrollEnabled={false}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow} />
        <TextInput
          style={styles.newInput}
          value={this.state.newMessage}
          onSubmitEditing={this.sendMessage}
          placeholder="Message..."
          returnKeyType="send"
          ref="newMessage"
          onFocus={this.inputFocused.bind(this, "newMessage")}
          onBlur={() => {this.refs.scrollView.scrollTo(0,0)}}
          onChangeText={this.updateMessageState} />
      </ScrollView>
    );
  },
  
  renderRow(rowData, sectionID, rowID) {
    return (
      <View style={[styles.messageRow, rowData.user_id == this.state.user.id && styles.meRow]}>
        <TouchableHighlight
          underlayColor='#dddddd'
          style={[styles.messageContent, rowData.user_id == this.state.user.id && styles.me]}>
            <View>
                <Text style={styles.message}>{rowData.content}</Text>
            </View>
        </TouchableHighlight>
        <Text style={styles.messageDate}>{moment(rowData.created_at).fromNow()}</Text>
      </View>
    );
  },
  
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:60,
    marginBottom:50,
  },
  listView: {
    flex: 2,
    padding: 10,
  },
  newInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
    padding:10,
    height:50,
  },
  messageRow: {
    alignItems:'flex-start',
    marginBottom:5,
  },
  meRow: {
    alignItems:'flex-end'
  },
  messageContent: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 10,
    borderRadius:10,
    backgroundColor:'#ebebeb',
  },
  me: {
    alignItems: 'flex-end',
    backgroundColor:'#d2fffd',
  },
  message: {
    fontSize: 16,
    color: '#888'
  },
  messageDate: {
    fontSize: 12,
    color: '#656565',
    padding:2,
  },
  text: {
    color:'#000',
  },
});
 
export default Chat