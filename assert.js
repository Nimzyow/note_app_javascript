let assert = {
  isTrue: assertionToCheck => {
    if (!assertionToCheck) {
      throw new Error(
        "Assertion failed: " + assertionToCheck + "is not truthy"
      );
    } else {
      return true;
    }
  },
  isSame: (one, two) => {
    if (one !== two) {
      throw new Error("Yo! Those aren't the same things!!!");
    } else {
      console.log();
    }
  },
  includes: (obj, message) => {
    if (Object.values(obj).indexOf(message) > -1) {
      document.write("<p style='color: green; margin-top: 0px;'>passed</p>");
    } else {
      document.write("<p style='color: green; margin-top: 0px;'>failed</p>");
      throw new Error(`Hey, hey, hey! your object doesnt include ${message}`);
    }
  },
  isSameLength: (one, two) => {
    if (one.length !== two.length) {
      throw new Error("Come on now, you know those two aren't the same length");
    } else {
      return true;
    }
  }
};
