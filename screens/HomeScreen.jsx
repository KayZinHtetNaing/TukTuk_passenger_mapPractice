import 'react-native-gesture-handler';
// import MapView from 'react-native-maps';
import { StyleSheet,View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
//import 'react-native-animated';
function HomeScreen() {
  return (
    <View>
      <Text>Home</Text>
     {/* <MapView style={styles.map} /> */}
    </View>
  );
  // const interpolate: typeof interpolateNode = interpolateNode ?? interpolateDeprecated;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default HomeScreen;