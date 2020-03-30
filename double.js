//make a double
//we eventually want to be able to have:
// let a = new Double("double", [["method1", "return1"], ["method2", "return2"]])
//we will create a new instance of Double by:
//new Double("double", [{method: "return1"}, {method2: "return2"}])

(function(exports) {
  class Double {
    constructor(name, methods = {}) {
      this.name = name;
      this.methods = methods;
      return this.methods;
    }
  }
  exports.Double = Double;
})(this);
