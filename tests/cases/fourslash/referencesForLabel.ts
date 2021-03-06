/// <reference path='fourslash.ts'/>

// Valid References for a label

////[|label|]: while (true) {
////    if (false) break [|label|];
////    if (true) continue [|label|];
////}
////
////[|label|]: while (false) { }
////var label = "label";

const [r0, r1, r2, r3] = test.ranges();
verify.rangesReferenceEachOther([r0, r1, r2]);
verify.referencesOf(r3, [r3]);
