import React, {useState} from 'react';
import { 
  View, 
  Text,
  TouchableOpacity,
  Image, 
  StyleSheet,
} from 'react-native';

import DiceOne from "./assets/dice1.png";
import DiceTwo from "./assets/dice2.png";
import DiceThree from "./assets/dice3.png";
import DiceFour from "./assets/dice4.png";
import DiceFive from "./assets/dice5.png";
import DiceSix from "./assets/dice6.png";

const App = () => {
  
  const [uri, setUri] = useState(DiceOne);
  const [second, setSecond] = useState(DiceTwo);

 
  const playButtonTapped = () =>{

    let randomNumber = Math.floor (Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setUri(DiceOne);
      break;
      case 2:
        setUri(DiceTwo);
      break;
      case 3:
        setUri(DiceThree);
      break;
      case 4:
        setUri(DiceFour);
      break;
      case 5:
        setUri(DiceFive);
      break;
      case 6:
        setUri(DiceSix);
      break;
      default:
        setUri(DiceOne);
      break;
    }

  };

  const playSecond = () =>{

    let randomNumber = Math.floor (Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setSecond(DiceOne);
      break;
      case 2:
        setSecond(DiceTwo);
      break;
      case 3:
        setSecond(DiceThree);
      break;
      case 4:
        setSecond(DiceFour);
      break;
      case 5:
        setSecond(DiceFive);
      break;
      case 6:
        setSecond(DiceSix);
      break;
      default:
        setSecond(DiceOne);
      break;
    }

  };

  const playBoth = () =>{
    playButtonTapped ();
    playSecond();
  };
    

  return (
    <>
      <View style = {styles.container}>
        <Image style={styles.image} source={second} />
        <Image style={styles.image} source={uri} />
        <TouchableOpacity onPress = {playBoth}>
          <Text style={styles.playGameButton}> Play Game</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height:200,
    width:200,
  },
  playGameButton: {
    fontSize:20,
    marginTop: 30,
    color: "#f2a365",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor:"#30475e",
    borderRadius: 5,
    borderWidth:3,
    fontWeight: "bold"

  }

});

