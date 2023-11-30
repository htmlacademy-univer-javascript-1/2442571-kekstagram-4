function isCorrectLength(line, length) {
  if(line.length <= length){
    return true;
  }
  return false;
}

function isPalindrome(line){
  line = line.toLowerCase().replaceAll(' ');
  let reverseLine = '';
  for(let i = line.length - 1; i >= 0; i--){
    reverseLine += line[i];
  }
  if (line === reverseLine){
    return true;
  }
  return false;
}

function returnNamber(line){
  let num = '';
  const lineWithoutSpaces = line.replaceAll(' ');
  for(let i = 0; i < line.length; i++){
    if(Number.isInteger(+lineWithoutSpaces[i])){
      num += lineWithoutSpaces[i];
    }
  }
  return num;
}

isCorrectLength('проверяемая строка', 20);
isPalindrome('ДовОд');
returnNamber('2023 год');
