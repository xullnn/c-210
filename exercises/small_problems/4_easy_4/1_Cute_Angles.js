function divMod(base, dividor) {
  return [Math.floor(base / dividor), Math.floor(base % dividor)];
}

function formatAngle(num) {
  var numStr = String(num);
  return numStr.length >= 2 ? numStr : ('0' + numStr);
}

function dms(angle) {
  if (angle < 0) angle = 360 + (angle % 360); // handle nagetive angles
  if (angle > 360) angle = angle % 360;       // handle angles > 360

  let degrees = String(Math.floor(angle));
  let minutes, seconds;
  [minutes, seconds] = divMod((angle % 1) * 3600, 60).map(e => formatAngle(e));
  return (degrees + '°' + minutes + '\'' + seconds + '\"');
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

dms(-1);   // 359°00'00"
dms(400);  // 0°00'00"
dms(-40);  // 320°00'00"
dms(-420); // 300°00'00"
