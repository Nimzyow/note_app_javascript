let assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error(
        "Assertion failed: " + assertionToCheck + "is not truthy"
      );
    } else {
      console.log("test of " + assertionToCheck + "has passed");
    }
  },
  isSame: function(one, two) {
    if (one !== two) {
      throw new Error("Yo! Those aren't the same things!!!");
    } else {
      console.log();
    }
  },
  includes: function(obj, message) {
    if (Object.values(obj).indexOf(message) > -1) {
      return true;
    } else {
      throw new Error(`Hey, hey, hey! your object doesnt include ${message}`);
    }
  }
};
