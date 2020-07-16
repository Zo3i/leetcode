/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    // 判空
    if (s.length == 0 || t.length == 0) {
        return true
    }
    
    if (s.length != t.length) {
        return false
    }
    var fSet = new Map()
    var bSet = new Map()
    var len = s.length
    for (var i=0;i<len;i++) {
        // 处理前一个单词
        if (fSet.get(s[i])) {
            fSet.set(s[i], fSet.get(s[i]) + 1)
        } else {
            fSet.set(s[i], 1)
        }
        // 处理后一个单词
        if (bSet.get(t[i])) {
            bSet.set(t[i], bSet.get(t[i]) + 1)
        } else {
            bSet.set(t[i], 1)
        }
    }

    for (var key of bSet.keys()) {
        if (bSet.get(key) != fSet.get(key)) {
            return false
        }
    }

    return true
};


console.log(isAnagram("aa", "bb"))