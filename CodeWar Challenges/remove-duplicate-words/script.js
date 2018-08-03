function removeDuplicateWords(str) {
  str = str.split(" ");
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== str[i]) {
      str += str[i];
    }
  }
  str = str.join(" ");
  return str;
}
