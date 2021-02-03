import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import TitleList from './titleList';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HTMLView from 'react-native-htmlview';

const Stack = createStackNavigator();

function DetailsScreen({route}) {
  const {itemId, otherParam, algo} = route.params;
  return (
    <ScrollView>
      <HTMLView value={algo} />
    </ScrollView>
  );
}

class Index extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="TitleList" component={TitleList} />
          <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Index;
/*
{
  "_nsMap": {},
  "attributes": {
    "_ownerElement": [Circular]
  },
  "childNodes": {
    "0": {
      "_nsMap": [Object],
      "attributes": [Object],
      "childNodes": [Object],
      "columnNumber": 8,
      "firstChild": [Text],
      "lastChild": [Text],
      "lineNumber": 4,
      "localName": "strong",
      "namespaceURI": "http://www.w3.org/1999/xhtml",
      "nextSibling": [Text],
      "nodeName": "strong",
      "ownerDocument": [Document],
      "parentNode": [Circular],
      "previousSibling": null,
      "tagName": "strong"
    },
    "1": {
      "columnNumber": 59,
      "data": ". Se trata de un smartphone de gama media-alta que de no ser por un aspecto muy particular, no llamaría tanto la atención como lo hace: se trata del primer smartphone del mundo con cámara bajo la pantalla. ",
      "length": 206,
      "lineNumber": 4,
      "nextSibling": null,
      "nodeValue": ". Se trata de un smartphone de gama media-alta que de no ser por un aspecto muy particular, no llamaría tanto la atención como lo hace: se trata del primer smartphone del mundo con cámara bajo la pantalla. ",
      "ownerDocument": [Document],
      "parentNode": [Circular],
      "previousSibling": [Element]},
      "length": 2},
      "columnNumber": 5,
      "firstChild": {"_nsMap": {}, "attributes": {"_ownerElement": [Circular]}, "childNodes": {"0": [Text], "length": 1}, "columnNumber": 8, "firstChild": {"columnNumber": 16, "data": "El ZTE Axon 20 5G llegará a México", "length": 34, "lineNumber": 4, "nextSibling": null, "nodeValue": "El ZTE Axon 20 5G llegará a México", "ownerDocument": [Document], "parentNode": [Circular], "previousSibling": null}, "lastChild": {"columnNumber": 16, "data": "El ZTE Axon 20 5G llegará a México", "length": 34, "lineNumber": 4, "nextSibling": null, "nodeValue": "El ZTE Axon 20 5G llegará a México", "ownerDocument": [Document], "parentNode": [Circular], "previousSibling": null}, "lineNumber": 4, "localName": "strong", "namespaceURI": "http://www.w3.org/1999/xhtml", "nextSibling": {"columnNumber": 59, "data": ". Se trata de un smartphone de gama media-alta que de no ser por un aspecto muy particular, no llamaría tanto la atención como lo hace: se trata del primer smartphone del mundo con cámara bajo la pantalla. ", "length": 206, "lineNumber": 4, "nextSibling": null, "nodeValue": ". Se trata de un smartphone de gama media-alta que de no ser por un aspecto muy particular, no llamaría tanto la atención como lo hace: se trata del primer smartphone del mundo con cámara bajo la pantalla. ", "ownerDocument": [Document], "parentNode": [Circular], "previousSibling": [Circular]}, "nodeName": "strong", "ownerDocument": {"_inc": 123, "childNodes": [Object], "doctype": null, "documentElement": [Element], "documentURI": undefined, "firstChild": [Element], "implementation": [Object], "lastChild": [Element]}, "parentNode": [Circular], "previousSibling": null, "tagName": "strong"}, "lastChild": {"columnNumber": 59, "data": ". Se trata de un smartphone de gama media-alta que de no ser por un aspecto muy particular, no llamaría tanto la atención como lo hace: se trata del primer smartphone del mundo con cámara bajo la pantalla. ", "length": 206, "lineNumber": 4, "nextSibling": null, "nodeValue": ". Se trata de un smartphone de gama media-alta que de no ser por un aspecto muy particular, no llamaría tanto la atención como lo hace: se trata del primer smartphone del mundo con cámara bajo la pantalla. ", "ownerDocument": {"_inc": 123, "childNodes": [Object], "doctype": null, "documentElement": [Element], "documentURI": undefined, "firstChild": [Element], "implementation": [Object], "lastChild": [Element]}, "parentNode": [Circular], "previousSibling": {"_nsMap": [Object], "attributes": [Object], "childNodes": [Object], "columnNumber": 8, "firstChild": [Text], "lastChild": [Text], "lineNumber": 4, "localName": "strong", "namespaceURI": "http://www.w3.org/1999/xhtml", "nextSibling": [Circular], "nodeName": "strong", "ownerDocument": [Document], "parentNode": [Circular], "previousSibling": null, "tagName": "strong"}}, "lineNumber": 4, "localName": "p", "namespaceURI": "http://www.w3.org/1999/xhtml", "nextSibling": {"columnNumber": 269, "data": "
", "length": 2, "lineNumber": 4, "nextSibling": {"columnNumber": 1, "data": " BREAK 1 ", "length": 9, "lineNumber": 5, "nextSibling": [Text], "nodeValue": " BREAK 1 ", "ownerDocument": [Document], "parentNode": [Element], "previousSibling": [Circular]}, "nodeValue": "
", "ownerDocument": {"_inc": 123, "childNodes": [Object], "doctype": null, "documentElement": [Element], "documentURI": undefined, "firstChild": [Element], "implementation": [Object], "lastChild": [Element]}, "parentNode": {"_nsMap": [Object], "attributes": [Object], "childNodes": [Object], "columnNumber": 7, "firstChild": [Text], "lastChild": [Element], "lineNumber": 2, "localName": "img", "namespaceURI": "http://www.w3.org/1999/xhtml", "nextSibling": null, "nodeName": "img", "ownerDocument": [Document], "parentNode": [Element], "previousSibling": [Text], "tagName": "img"}, "previousSibling": [Circular]}, "nodeName": "p", "ownerDocument": {"_inc": 123, "childNodes": {"0": [Element], "length": 1}, "doctype": null, "documentElement": {"_nsMap": [Object], "attributes": [Object], "childNodes": [Object], "columnNumber": 1, "firstChild": [Text], "lastChild": [Element], "lineNumber": 1, "localName": "p", "namespaceURI": "http://www.w3.org/1999/xhtml", "nextSibling": null, "nodeName": "p", "ownerDocument": [Circular], "parentNode": [Circular], "previousSibling": null, "tagName": "p"}, "documentURI": undefined, "firstChild": {"_nsMap": [Object], "attributes": [Object], "childNodes": [Object], "columnNumber": 1, "firstChild": [Text], "lastChild": [Element], "lineNumber": 1, "localName": "p", "namespaceURI": "http://www.w3.org/1999/xhtml", "nextSibling": null, "nodeName": "p", "ownerDocument": [Circular], "parentNode": [Circular], "previousSibling": null, "tagName": "p"}, "implementation": {"_features": [Object]}, "lastChild": {"_nsMap": [Object], "attributes": [Object], "childNodes": [Object], "columnNumber": 1, "firstChild": [Text], "lastChild": [Element], "lineNumber": 1, "localName": "p", "namespaceURI": "http://www.w3.org/1999/xhtml", "nextSibling": null, "nodeName": "p", "ownerDocument": [Circular], "parentNode": [Circular], "previousSibling": null, "tagName": "p"}}, "parentNode": {"_nsMap": {}, "attributes": {"0": [Attr], "1": [Attr], "2": [Attr], "_ownerElement": [Circular], "length": 3}, "childNodes": {"0": [Text], "1": [Circular], "10": [Text], "11": [Element], "12": [Element], "2": [Text], "3": [Comment], "4": [Text], "5": [Comment], "6": [Text], "7": [Element], "8": [Text], "9": [Comment], "length": 12}, "columnNumber": 7, "firstChild": {"columnNumber": 202, "data": "
    
    ", "length": 12, "lineNumber": 2, "nextSibling": [Circular], "nodeValue": "
    
    ", "ownerDocument": [Document], "parentNode": [Circular], "previousSibling": null}, "lastChild": {"_nsMap": [Object], "attributes": [Object], "childNodes": [Object], "columnNumber": 1, "firstChild": [Element], "lastChild": [Element], "lineNumber": 10, "localName": "div", "namespaceURI": "http://www.w3.org/1999/xhtml", "nextSibling": null, "nodeName": "div", "ownerDocument": [Document], "parentNode": [Circular], "previousSibling": [Text], "tagName": "div"}, "lineNumber": 2, "localName": "img", "namespaceURI": "http://www.w3.org/1999/xhtml", "nextSibling": null, "nodeName": "img", "ownerDocument": {"_inc": 123, "childNodes": [Object], "doctype": null, "documentElement": [Element], "documentURI": undefined, "firstChild": [Element], "implementation": [Object], "lastChild": [Element]}, "parentNode": {"_nsMap": [Object], "attributes": [Object], "childNodes": [Object], "columnNumber": 1, "firstChild": [Text], "lastChild": [Circular], "lineNumber": 1, "localName": "p", "namespaceURI": "http://www.w3.org/1999/xhtml", "nextSibling": null, "nodeName": "p", "ownerDocument": [Document], "parentNode": [Document], "previousSibling": null, "tagName": "p"}, "previousSibling": {"columnNumber": 4, "data": "
      ", "length": 8, "lineNumber": 1, "nextSibling": [Circular], "nodeValue": "
      ", "ownerDocument": [Document], "parentNode": [Element], "previousSibling": null}, "tagName": "img"}, "previousSibling": {"columnNumber": 202, "data": "
    
    ", "length": 12, "lineNumber": 2, "nextSibling": [Circular], "nodeValue": "
    
    ", "ownerDocument": {"_inc": 123, "childNodes": [Object], "doctype": null, "documentElement": [Element], "documentURI": undefined, "firstChild": [Element], "implementation": [Object], "lastChild": [Element]}, "parentNode": {"_nsMap": [Object], "attributes": [Object], "childNodes": [Object], "columnNumber": 7, "firstChild": [Circular], "lastChild": [Element], "lineNumber": 2, "localName": "img", "namespaceURI": "http://www.w3.org/1999/xhtml", "nextSibling": null, "nodeName": "img", "ownerDocument": [Document], "parentNode": [Element], "previousSibling": [Text], "tagName": "img"}, "previousSibling": null}, "tagName": "p"}
    */
