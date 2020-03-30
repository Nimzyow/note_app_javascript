function testCircleRadiusDefaultsTo10() {
  let circle = new Circle();
  assert.isTrue(circle.radius === 10);
}

testCircleRadiusDefaultsTo10();

//random tests to test the functionality of assert.js
// assert.isSame(2, 2);
// let x = [1, 2, 3];
// assert.includes(x, 2);
// assert.isSameLength([1, 2, 5], [5, 3, 1]);

//the following will fail isSame and includes tests:
// assert.isSame(2, 1);
// assert.includes(x, 4);
