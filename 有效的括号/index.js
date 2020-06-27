var isValid = function(s) {
      let map = new Map([['}', '{'], [')', '('], [']', '[']])
      let arr = []
      let len = s.length
      for (let i = 0; i < len; i++) {
          let e = s[i]
          if (map.get(e) == undefined) {
              arr.push(e)
          } else if (arr.length == 0 || arr.pop() != map.get(e)) {
              return false
          }
      }
    
      return arr.length == 0
    };
    console.log(isValid("()"))
    