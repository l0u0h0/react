// describe("expect test", () => {
//   it("37 to equal 37", () => {
//     expect(37).toBe(37);
//     // 1 + 2 = 3 이여야 한다. 라는 뜻
//   });
//   it("{age: 39} to equal {age: 39}", () => {
//     expect({ age: 39 }).toEqual({ age: 39 });
//     // 1 + 2 = 3 이여야 한다. 라는 뜻
//   });
//   it(".toHaveLength", () => {
//     expect("hello").toHaveLength(5);
//   });
//   it(".toHaveProperty", () => {
//     expect({ name: "lee" }).toHaveProperty("name");
//     expect({ name: "lee" }).toHaveProperty("name", "lee");
//   });
//   it(".toBeDefined", () => {
//     expect({ name: "lee" }.name).toBeDefined();
//     expect({ name: "lee" }.age).toBeDefined();
//   });
//   it(".toBeFalsy", () => {
//     expect(0).toBeFalsy();
//     expect(false).toBeFalsy();
//     expect("").toBeFalsy();
//     expect(null).toBeFalsy();
//     expect(undefined).toBeFalsy();
//     expect(NaN).toBeFalsy();
//   });
//   it(".toBeGreaterThan", () => {
//     expect(10).toBeGreaterThan(9);
//   });
//   it(".toBeGreaterThanOrEqual", () => {
//     expect(10).toBeGreaterThanOrEqual(10);
//   });
//   it(".toBeInstanceOf", () => {
//     class test {}
//     expect(new test()).toBeInstanceOf(test);
//     // error를 쓰로우 한 뒤 정말 에러인지 자식인지
//   });
// });
