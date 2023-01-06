import { useEffect, useState } from "react";
import verifySameWord from "../functions/verifySameWord";
import words from "../mock/words";

function useFlashGame() {
  const [wordList, setWordList] = useState(words);
  const [currentWordQuestion, setCurrentWordQuestion] = useState("");

  const [currentHearts, setCurrentHearts] = useState(3);
  const [answered, setAnswered] = useState(0);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (wordList[wordList.length - 1]) {
      return setCurrentWordQuestion(wordList[wordList.length - 1].answer);
    }
    return setCurrentWordQuestion("");
  }, [wordList]);
  useEffect(() => {
    const lengthTotalWordList = words.length; // 100%

    const calc = (answered * 100) / lengthTotalWordList;
    setPercent(calc);
  }, [answered]);

  const onVerify = (
    tryInput: string,
    successCallback: () => void,
    failCallback: () => void
  ) => {
    const isSameWord = verifySameWord(tryInput, currentWordQuestion);
    if (isSameWord) {
      setAnswered((curr) => curr + 1);
      return successCallback();
    } else {
      setCurrentHearts((curr) => curr - 1);
      return failCallback();
    }
  };

  return {
    percent,
    wordList,
    lengthTotalWordList: words.length,
    answered,
    setWordList,
    currentHearts,
    onVerify,
  };
}

export default useFlashGame;
