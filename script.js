const eventX = 'eventX'
const eventY = 'eventY'

const atomA = declareAtom('atomA', [

], [
    eventX
]);
const atomB = declareAtom('atomB', [
], [
    eventX,
    eventY
]);
const atomD = declareAtom('atomD', [
    atomA, atomB
], [
]);

const manager = createManager([
    atomA,
    atomB,
    atomD,
]);

manager.dispatch(eventX);
manager.getDeps(atomA); // [atomD]
manager.getDeps(atomD); // []