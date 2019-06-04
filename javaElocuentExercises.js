'use strict';
$_$wp(1);
class Group {
    constructor() {
        $_$wf(1);
        $_$w(1, 0), this.group = [];
    }
    add(value) {
        $_$wf(1);
        if ($_$w(1, 1), this.has(value)) {
            return $_$w(1, 2);
        }
        $_$w(1, 3), this.group.push(value);
    }
    delete(value) {
        $_$wf(1);
        if ($_$w(1, 4), this.has(value)) {
            $_$w(1, 5), this.group.splice(this.group.indexOf(value), 1);
        }
    }
    has(value) {
        $_$wf(1);
        if ($_$w(1, 6), this.group.indexOf(value) > -1) {
            return $_$w(1, 7), true;
        }
        return $_$w(1, 8), false;
    }
    static from(obj) {
        $_$wf(1);
        let tempGroup = ($_$w(1, 9), new Group());
        $_$w(1, 10), obj.forEach(value => {
            $_$wf(1);
            return $_$w(1, 11), tempGroup.add(value);
        });
        return $_$w(1, 12), tempGroup;
    }
}
$_$w(1, 13), Group.prototype[Symbol.iterator] = function () {
    $_$wf(1);
    return $_$w(1, 14), new GroupIterable(this);
};
class GroupIterable {
    constructor(vector) {
        $_$wf(1);
        $_$w(1, 15), this.vector = vector;
        $_$w(1, 16), this.x = 0;
        $_$w(1, 17), this.done = false;
    }
    next() {
        $_$wf(1);
        if ($_$w(1, 18), this.x > this.vector.lenght) {
            return $_$w(1, 19), { done: true };
        }
        let nextValue = ($_$w(1, 20), {
            x: this.x,
            value: this.vector[this.x],
            done: false
        });
        $_$w(1, 21), this.x++;
        return $_$w(1, 22), nextValue;
    }
}
let myGroup = ($_$w(1, 23), $_$wv(1, 23, '1,23', 'new Group()', new Group(), '$_$ne', 0, 0));
$_$w(1, 24), myGroup.add(1);
$_$w(1, 25), myGroup.add(2);
$_$w(1, 26), myGroup.add(3);
$_$w(1, 27), myGroup.delete(2);
$_$w(1, 28), myGroup.delete(0);
$_$w(1, 29), $_$wv(1, 29, '1,29', 'myGroup', myGroup, '$_$ne', 1, 0);
for (let i of ($_$w(1, 30), myGroup)) {
    $_$w(1, 31), $_$wv(1, 31, '1,31', 'myGroup[i]', myGroup[i], '$_$ne', 0, 0);
}
$_$wpe(1);