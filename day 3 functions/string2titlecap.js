const stringArray = ["hello world", "javascript is fun", "title caps example"];

const convertToTitleCaps = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
};

convertToTitleCaps(stringArray);

console.log(stringArray);
