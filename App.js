import { StyleSheet, Text, View, SafeAreaView, Image, TouchableNativeFeedback, Button, Alert, Platform, StatusBar } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

const App = () => {
  let { landscape } = useDeviceOrientation();
  console.log(landscape);

  return (
    // <SafeAreaView style={[styles.container, styles.contText]}>
    //   <Text>Hello World.competitive.</Text>
    //   <TouchableNativeFeedback onPress={() => console.log('logged.')}>
    //     {/* <Image source={{
    //       uri: "https://picsum.photos/200/300",
    //       width: 200,
    //       height: 300,
    //     }}></Image> */}
    //     <View style={{
    //       height: 70, width: 100, backgroundColor: '#f6e'
    //     }}></View>
    //   </TouchableNativeFeedback>
    // </SafeAreaView>

    // <SafeAreaView style={styles.container}>
    //   <View style={{
    //     backgroundColor: 'gold',
    //     width: '100%',
    //     height: landscape ? '100%' : '30%'
    //   }}></View>
    // </SafeAreaView>
    <View style={{
      backgroundColor: '#fff', flex: 1,
      flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center',
      flexWrap: 'wrap',
      alignContent: 'center'
    }}>
      <View style={{
        backgroundColor: '#44f',
        width: 100, height: 100,
        // alignSelf: 'flex-start'
      }} />

      <View style={{
        backgroundColor: '#4cf',
        width: 100, height: 220
      }} />
      <View style={{
        backgroundColor: '#f2c',
        width: 100, height: 200
      }} />
      <View style={{
        backgroundColor: '#10c',
        width: 200, height: 200
      }} />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  contText: {
    backgroundColor: '#de4'
  }
});

export default App;
