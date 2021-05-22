import React from 'react';
// import { ContadorScreen } from './src/screens/ContadorScreen';

// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { SafeAreaView } from 'react-native';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { PositionsScreen } from './src/screens/PositionsScreen';

 const App = () => {
  return (
    
    <SafeAreaView style={{flex:1}}>
     {/* <HolaMundoScreen/> */}
     {/* <ContadorScreen/> */}
    {/* <BoxObjectModelScreen/> */}
    {/* <DimensionesScreen/> */}
    <PositionsScreen/>
    </SafeAreaView>


  )
}

export default App;
