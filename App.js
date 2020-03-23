import React from 'react';
import { View, Text, ScrollView, StatusBar, Image, StyleSheet } from 'react-native';

export default function App() {
  return(
      <View style={{flex:1, paddingTop: StatusBar.currentHeight || 0}}>
        <StatusBar barStyle='dark-content'></StatusBar>
        <View style={[sty.head,{flexDirection: 'row', width: '100%'}]}>
          <View style={[sty.tengah, {flex:1}]}>
            <Image
              style={{width: 50, height: 70}}
              source={{uri: 'https://cdn.clipart.email/4d1682843769f1df76970c4388053dc1_kobe-bryant-logo-logodix_3840-2160.png'}}
            />
          </View>
          <View style={[sty.tengah,{flex:4}]}>
            <Text style={{fontSize: 24, color: 'white', fontWeight: 'bold'}}>
              BLACK MAMBA
            </Text>
          </View>
          <View style={[sty.tengah, {flex:1}]}>
            <Image
              style={{width: 50, height: 70}}
              source={{uri: 'https://cdn.clipart.email/4d1682843769f1df76970c4388053dc1_kobe-bryant-logo-logodix_3840-2160.png'}}
            />
          </View>
        </View>
        <View style={{flex: 9}}>
          <ScrollView>
            <View style={{height: 100}}>
              <ScrollView horizontal={true}>
                <View style={{flexDirection:'row', paddingVertical: 10}}>
                  <View style={[sty.scrHorizontal, sty.tengah]}>
                    <Text>
                        Hey
                    </Text>
                  </View>
                  <View style={[sty.scrHorizontal, sty.tengah]}>
                    <Text>
                        Hey
                    </Text>
                  </View>
                  <View style={[sty.scrHorizontal, sty.tengah]}>
                    <Text>
                        Hey
                    </Text>
                  </View>
                  <View style={[sty.scrHorizontal, sty.tengah]}>
                    <Text>
                        Hey
                    </Text>
                  </View>
                  <View style={[sty.scrHorizontal, sty.tengah]}>
                    <Text>
                        Hey
                    </Text>
                  </View>
                  <View style={[sty.scrHorizontal, sty.tengah]}>
                    <Text>
                        Hey
                    </Text>
                  </View>
                  <View style={[sty.scrHorizontal, sty.tengah]}>
                    <Text>
                        Hey
                    </Text>
                  </View>
                  <View style={[sty.scrHorizontal, sty.tengah]}>
                    <Text>
                        Hey
                    </Text>
                  </View>
                  <View style={[sty.scrHorizontal, sty.tengah]}>
                    <Text>
                        Hey
                    </Text>
                  </View>
                </View>
              </ScrollView>
            </View>
            <View style={{flex: 8}}>
                <View style={[sty.mtext, sty.tengah,{height: 80, marginVertical: 15}]}>
                  <Text>
                    Content
                  </Text>
                </View>
                <View style={[sty.mtext, sty.tengah,{height: 80, marginVertical: 15}]}>
                  <Text>
                    Content
                  </Text>
                </View>
                <View style={[sty.mtext, sty.tengah,{height: 80, marginVertical: 15}]}>
                  <Text>
                    Content
                  </Text>
                </View>
                <View style={[sty.mtext, sty.tengah,{height: 80, marginVertical: 15}]}>
                  <Text>
                    Content
                  </Text>
                </View>
                <View style={[sty.mtext, sty.tengah,{height: 80, marginVertical: 15}]}>
                  <Text>
                    Content
                  </Text>
                </View>
                <View style={[sty.mtext, sty.tengah,{height: 80, marginVertical: 15}]}>
                  <Text>
                    Content
                  </Text>
                </View>
                <View style={[sty.mtext, sty.tengah,{height: 80, marginVertical: 15}]}>
                  <Text>
                    Content
                  </Text>
                </View>
                <View style={[sty.mtext, sty.tengah,{height: 80, marginVertical: 15}]}>
                  <Text>
                    Content
                  </Text>
                </View>
                <View style={[sty.mtext, sty.tengah,{height: 80, marginVertical: 15}]}>
                  <Text>
                    Content
                  </Text>
                </View>
                <View style={[sty.mtext, sty.tengah,{height: 80, marginVertical: 15}]}>
                  <Text>
                    Content
                  </Text>
                </View>
            </View>
          </ScrollView>
        </View>
        <View style={{height: 80, backgroundColor: '#222', flexDirection: 'row'}}>
          <View style={sty.bawah}>
            <Text style={sty.tBawah}>
              1
            </Text>
          </View>
          <View style={sty.bawah}>
            <Text style={sty.tBawah}>
              2
            </Text>
          </View>
          <View style={sty.bawah}>
            <Text style={sty.tBawah}>
              3
            </Text>
          </View>
          <View style={sty.bawah}>
            <Text style={sty.tBawah}>
              4
            </Text>
          </View>
        </View>
      </View>
    );
}

const sty = StyleSheet.create({
  tengah: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  head: {
    flex: 2,
    backgroundColor: '#0075b8',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  foot: {
    flex: 1,
  },
  scrHorizontal: {
    width: 75,
    height: 75,
    borderWidth: 3,
    borderColor: '#ccc',
    margin: 5,
    borderRadius: 12
  },
  mtext: {
    margin: 16,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  bawah: {
    backgroundColor: '#ed553b',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1
  },
  tBawah: {
    fontSize: 40,
  }
});