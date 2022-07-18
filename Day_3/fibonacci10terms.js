let n1 = 0;
let n2 = 1;
let nextTerm = 0;

for (let i = 0; i < 10; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
