let fail = "<p style='color: red; margin-top: 0px;'>failed</p>";
let pass = "<p style='color: green; margin-top: 0px;'>passed</p>";

let assert = {
  isTrue: assertionToCheck => {
    if (!assertionToCheck) {
      document.write(fail);
      throw new Error(
        "Assertion failed: " + assertionToCheck + "is not truthy"
      );
    } else {
      document.write(pass);
    }
  },
  isSame: (one, two) => {
    if (one !== two) {
      document.write(fail);
      throw new Error("Yo! Those aren't the same things!!!");
    } else {
      document.write(pass);
    }
  },
  includes: (obj, message) => {
    if (Object.values(obj).indexOf(message) > -1) {
      document.write(pass);
    } else {
      document.write(fail);
      throw new Error(`Hey, hey, hey! your object doesnt include ${message}`);
    }
  },
  isSameLength: (one, two) => {
    if (one.length !== two.length) {
      document.write(fail);
      throw new Error("Come on now, you know those two aren't the same length");
    } else {
      document.write(pass);
    }
  },
  isEmpty: arr => {
    if (arr.length !== 0) {
      document.write(fail);
      throw new Error(`You thought that was empty? DEFINETELY NOT!`);
    } else {
      document.write(pass);
    }
  },
  isArray: arr => {
    if (Array.isArray(arr)) {
      document.write(pass);
    } else {
      document.write(fail);
      throw new Error(
        `Why do you think this is an Array? Failed, it's not an array`
      );
    }
  },
  isInstanceOf: (instance, object) => {
    if (instance instanceof object) {
      document.write(pass);
    } else {
      document.write(fail);
      throw new Error(
        `Why do you think this is an Array? Failed, it's not an array`
      );
    }
  }
};
