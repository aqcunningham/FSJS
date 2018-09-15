  // describe("`getInitials` utility method", () => {
  //   it("takes a string and returns a string", () => {
  //     const initials = utils.getInitials("Corey Greenwald");
  //     expect(initials).to.be.a("string");
  //   });

  //   it("returns the first letter of each word in the input string, capitalized", () => {
  //     const initialsGHA = utils.getInitials("Grace Hopper Academy");
  //     expect(initialsGHA).to.equal("GHA");
  //     const initialsHATEOAS = utils.getInitials(
  //       "hypermedia as the engine of application state"
  //     );
  //     expect(initialsHATEOAS).to.equal("HATEOAS");
  //   });
  // });
  
  utils.getInitials = (one, two, three, four) => {
  // let mnem = "";
  // for (var i = 0; i < arr.length; i++) {
  //   var w = arr[i];
  //   var ch = w[0];
  //   mnem += ch;
  // }
  // return mnem;
  let mnem = "";
  if (one !== undefined) mnem += one[0];
  if (two !== undefined) mnem += two[0];
  if (three !== undefined) mnem += three[0];
  if (four !== undefined) mnem += four[0];
  return mnem;
};
