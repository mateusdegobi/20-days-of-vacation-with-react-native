import { Animated, Keyboard, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Text from "../../styles/Text";
import { IndicatorsArea } from "./styles";
import Card from "./components/Card/Card";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import HeartCounter from "./components/HeartCounter/HeartCounter";
import ButtonSolid from "../../components/ButtonSolid/ButtonSolid";
import TextInputOutline from "../../components/TextInput/TextInput";
import useFlashGame from "./hooks/useFlashGame";
import useFlipControl from "./hooks/useFlipControl";
import words from "./mock/words";

const BOX_MAX_HEIGHT = 285;
const BOX_MIN_HEIGHT = 185;

export default function FlashCard() {
  const [tryInput, setTryInput] = useState("");
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  const {
    percent,
    wordList,
    answered,
    lengthTotalWordList,
    currentHearts,
    setWordList,
    onVerify,
  } = useFlashGame();

  const {
    interpolateBackCard,
    interpolateFrontCard,
    opacityValueCard,
    onFlip,
    onResetFlip,
  } = useFlipControl();

  const handleVerify = () => {
    const resetInput = () => {
      setTryInput("");
    };
    const handleSuccess = () => {
      const list = [...wordList];
      list.pop();
      setWordList(list);
    };
    const handleFail = () => {
      onFlip();
      setTimeout(() => {
        onResetFlip();
      }, 2000);

      setTimeout(() => {
        const list = [...wordList];
        list.pop();
        setWordList(list);
      }, 2000);
    };

    resetInput();
    onVerify(tryInput, handleSuccess, handleFail);
  };

  useEffect(() => {
    const list = words.map((item) => ({ ...item, isActive: true }));
    setWordList(list);
  }, []);

  const heightBox = useRef(new Animated.Value(BOX_MAX_HEIGHT)).current;

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      setIsKeyboardVisible(true);
      Animated.timing(heightBox, {
        toValue: BOX_MIN_HEIGHT,
        duration: 200,
        useNativeDriver: false,
      }).start();
    });
    Keyboard.addListener("keyboardDidHide", () => {
      setIsKeyboardVisible(false);
      Animated.timing(heightBox, {
        toValue: BOX_MAX_HEIGHT,
        duration: 200,
        useNativeDriver: false,
      }).start();
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f4f4f4",
        marginHorizontal: 24,
        marginBottom: 24,
      }}
    >
      {/* ProgressBar */}
      <View>
        <ProgressBar percent={percent} />
        <IndicatorsArea>
          <View>
            <Text color="#340C30" weight="600" size={15}>
              {answered}/{lengthTotalWordList}
            </Text>
            <Text color="#340C30" weight="600" size={15}>
              5
            </Text>
          </View>

          <View>
            <Text color="#340C30" weight="600" size={15}>
              {percent}%
            </Text>
          </View>
        </IndicatorsArea>
      </View>

      {/* Card */}
      <Animated.View style={{ marginTop: isKeyboardVisible ? 80 : 24 }}>
        <Animated.View style={{ height: isKeyboardVisible ? 130 : 280 }}>
          {wordList.map((item, index) => {
            if (item.isActive) {
              return (
                <Card
                  key={index}
                  heightBox={heightBox}
                  index={index}
                  question={item.question}
                  answer={item.answer}
                  interpolateBack={interpolateBackCard}
                  interpolateFront={interpolateFrontCard}
                  opacityValueCard={opacityValueCard}
                />
              );
            }
          })}
        </Animated.View>
      </Animated.View>

      {/* Hearts and Input */}
      <View style={{ marginTop: 24 }}>
        <View style={{ alignItems: "center" }}>
          <HeartCounter current={currentHearts} total={3} />
        </View>

        <View style={{ marginTop: 24 }}>
          <TextInputOutline value={tryInput} onChangeText={setTryInput} />
        </View>
      </View>

      {/* Button */}
      <View style={{ marginTop: 24 }}>
        <ButtonSolid
          disabled={tryInput.length === 0 || currentHearts === 0}
          onPress={handleVerify}
        >
          Verificar
        </ButtonSolid>
      </View>
    </View>
  );
}
