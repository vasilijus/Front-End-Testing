import test from 'ava';

function sum(a,b) {
    return a+b;
}


test('foo is being tested ', t => {
    t.pass();
})

test('bar is being tested', async t => {
    const bar = Promise.resolve('bar');
    t.is(await bar, 'bar');
});
test('sum of 2 numbers', t => {
    t.plan(2);
    t.pass('this assertion passed');
    t.is( sum(2,3), 5);
})