let assert = {
  isTrue: assertionToCheck => {
    if (!assertionToCheck) {
      document.write("<p style='color: red; margin-top: 0px;'>failed</p>");
      throw new Error(
        "Assertion failed: " + assertionToCheck + "is not truthy"
      );
    } else {
      document.write("<p style='color: green; margin-top: 0px;'>passed</p>");
    }
  },
  isSame: (one, two) => {
    if (one !== two) {
      document.write("<p style='color: red; margin-top: 0px;'>failed</p>");
      throw new Error("Yo! Those aren't the same things!!!");
    } else {
      document.write("<p style='color: green; margin-top: 0px;'>passed</p>");
    }
  },
  includes: (obj, message) => {
    if (Object.values(obj).indexOf(message) > -1) {
      document.write("<p style='color: green; margin-top: 0px;'>passed</p>");
    } else {
      document.write("<p style='color: red; margin-top: 0px;'>failed</p>");
      throw new Error(`Hey, hey, hey! your object doesnt include ${message}`);
    }
  },
  isSameLength: (one, two) => {
    if (one.length !== two.length) {
      document.write("<p style='color: red; margin-top: 0px;'>failed</p>");
      throw new Error("Come on now, you know those two aren't the same length");
    } else {
      document.write("<p style='color: green; margin-top: 0px;'>passed</p>");
    }
  }
};
