QUnit.module("metodusok tesztelese", function () {
    QUnit.test("masodfoku egyenlet letezik e", function(assert) {
        assert.ok(masodfokuEgyenletMegoldasa, "Létezik a leptetes");
      }); 

    QUnit.test("masodfoku egyenlet fügvény e", function(assert) {
        assert.ok(typeof masodfokuEgyenletMegoldasa == "function", "a leptetes fuggvény");
      });
      QUnit.test("masodfokuEgyenletMegoldasa(0,0,0)", function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(0, 0, 0), "{\nX1: 0,\n X2: 0\n}",);
      });
      QUnit.test("masodfokuEgyenletMegoldasa(a,0,0)", function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa("a", 0, 0), "Hiba nem megfelelő charater");
      });
      QUnit.test("masodfokuEgyenletMegoldasa(0,a,0)", function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(0, "a", 0), "Hiba nem megfelelő charater");
      });
      QUnit.test("masodfokuEgyenletMegoldasa(0,0,a)", function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(0, 0, "a"), "Hiba nem megfelelő charater");
      });
      QUnit.test("Math.sqrt(b * b - 4 * a * c) > 0", function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(2, 1, 0), "{\nX1: 0,\n X2: -0,5\n}");
      });
      QUnit.test("Math.sqrt(b * b - 4 * a * c) < 0", function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(2, 1, 1), "discriminans negativ");
      });
      QUnit.test("Math.sqrt(b * b - 4 * a * c) = 0", function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(1, 2, 1), "{\nX1: -1,\n X2: -1\n}");
      });
      QUnit.test("a negativ text", function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(-1, 2, 1), "{\nX1: -0.41421356237309515,\n X2: 2.414213562373095\n}");
      });
      QUnit.test("a és c negativ text", function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(-1, 2, -1), "{\nX1: 1,\n X2: 1\n}");
      });
      QUnit.test("a, b, c negativ text", function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(-1, -2, -1), "{\nX1: 1,\n X2: 1\n}");
      });
      QUnit.test("a tort, b, c negativ text", function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(-1.5, 2, 1), "{\nX1: 1,\n X2: 1\n}");
      });
      QUnit.test("a, b tort, c negativ text", function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(1, -2.5, 1), "{\nX1: 1,\n X2: 1\n}");
      });
      QUnit.test("a, b , c tort negativ text", function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(1, 2, -1.5), "{\nX1: 1,\n X2: 1\n}");
      });
      QUnit.test("3tort negativ text", function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(-1.5, -2.5, -1.5), "{\nX1: 1,\n X2: 1\n}");
      });
      QUnit.test("b negativ text", function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(1, -3, 1), "{\nX1: 2.618033988749895,\n X2: 0.3819660112501051\n}");
      });
      QUnit.test("a tört", function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(1.5, 3, 1), "{\nX1: 2.618033988749895,\n X2: 0.3819660112501051\n}");
      });
      QUnit.test("b tört", function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(1, 3.5, 1), "{\nX1: -0.6972243622680054,\n X2: -4.302775637731995\n}");
      });
      QUnit.test("c tört", function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(1, 3, 1.5), "{\nX1: -0.6339745962155614,\n X2: -2.3660254037844384\n}");
      });


});