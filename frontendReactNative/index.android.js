'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  WebView
} = React;

var HEADER = '#3b5998';
var BGWASH = 'rgba(255,255,255,0.8)';

var DEFAULT_URL = 'http://localhost:3000';

var PettyCashWebView = React.createClass({

  getInitialState: function() {
    return {
      url: DEFAULT_URL,
      forwardButtonEnabled: false,
      loading: true,
      scalesPageToFit: true,
    };
  },

  inputText: '',

  handleTextInputChange: function(event) {
    this.inputText = event.nativeEvent.text;
  },

  render: function() {
    this.inputText = this.state.url;

    return (
      <View style={[styles.container]}>
        <WebView
          ref={WEBVIEW_REF}
          automaticallyAdjustContentInsets={false}
          style={styles.webView}
          url={this.state.url}
          javaScriptEnabledAndroid={true}
          domStorageEnabledAndroid={true}
          onNavigationStateChange={this.onNavigationStateChange}
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
          startInLoadingState={true}
          scalesPageToFit={this.state.scalesPageToFit}
        />
      </View>
    );
  },

  onShouldStartLoadWithRequest: function(event) {
    // Implement any custom loading logic here, don't forget to return!
    return true;
  },

  onNavigationStateChange: function(navState) {
    this.setState({
      forwardButtonEnabled: navState.canGoForward,
      url: navState.url,
      loading: navState.loading,
      scalesPageToFit: true
    });
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: HEADER,
  },
  webView: {
    backgroundColor: BGWASH
  }
});

AppRegistry.registerComponent('PettyCashWebView', () => PettyCashWebView);
