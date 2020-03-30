function testCircleRadiusDefaultsTo10() {
  let circle = new Circle();
  assert.isTrue(circle.radius === 10);
}

testCircleRadiusDefaultsTo10();
