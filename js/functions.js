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

function inTime(startTime, endTime, meetTime, time){
  const start = startTime.split(':');
  const end = endTime.split(':');
  const meet = meetTime.split(':');
  const startTimeInMinutes = Number(start[0]) * 60 + Number(start[1]);
  const endTimeInMinutes = Number(end[0]) * 60 + Number(end[1]);
  const meetTimeInMinutes = Number(meet[0]) * 60 + Number(meet[1]);
  const endMeetTimeInMinutes = meetTimeInMinutes + time;

  if(endMeetTimeInMinutes <= endTimeInMinutes && endMeetTimeInMinutes >= startTimeInMinutes){
    return true;
  }
  return false;
}

