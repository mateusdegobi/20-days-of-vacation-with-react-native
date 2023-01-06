export default function verifySameWord(word1: string, word2: string): boolean {
  if (word1.toLocaleLowerCase() === word2.toLocaleLowerCase()) {
    return true;
  }
  return false;
}
