window.dom={
    each(nodeList,fn) {
        for(let i=0;i<nodeList.length;i++) {
                fn.call(null,nodeList[i])
        }

    },
    style(node,obj,value) {
        if(arguments.length===3) {
          node.style[obj]=value
        } else if(arguments.length===2) {
          //   读取值
              if(typeof obj==='string'){
                  return node.style[obj]
              }
          else if(obj instanceof Object) {
              for(let key in obj) {
                      node.style[key]=obj[key]
              }
  
          }
        }
        
      },
    find(node,scope) {
        return (scope ||document).querySelectorAll(node)
    },
    // 新增节点
    create(string) {
        // template 只会容纳,但是不会显示出来
        const container=document.createElement('template')
        container.innerHTML=string.trim();
        //
        return container.content.firstChild
    },
    children(node) {
            return node.children
    },
    attr(node,name,value) {
        console.dir(node)
        // 根据参数写不同的代码叫重载
        // 根据参数的长度来判断是要读取属性,还是设置属性
      if(arguments.length==3) {
        node.setAttribute(name,value)
      } else if(arguments.length==2) {
        return node.getArrribut(name)
      }
    },
    text(node,string) {
        // 适配浏览器
          // 判断是不是IE
        // 和innherhtml 有啥区别
        node.innerText=string
        if(arguments.length===3) {
            if('innerText' in node) {
                node.innerText=string
            }
            else {
                node.textContent=string
            }
        }
        else if (arguments.length===2) {
            if('innerText' in node ) {
                    return node.innerText
                }
            else{
                    return node.textContent
                }
        }  
    },
    html(node,string) {
        node.innerHTML=string
    },
    style(node,obj,value) {
      if(arguments.length===3) {
        node.style[obj]=value
      } else if(arguments.length===2) {
        //   读取值
            if(typeof obj==='string'){
                return node.style[obj]
            }
        else if(obj instanceof Object) {
            for(let key in obj) {
                    node.style[key]=obj[key]
            }

        }
      }
      
    },
    class:{
        add(node,className) {
            node.classList.add(className)
        },
        remove(node,className) {
            node.classList.remove(className)
        },
        has(node,className) {
           return node.classList.contains(className)
        },
       
    },
    on (node,eventName,fn) {
        node.addEventlistener(eventName,fn)
      },
    off(node,eventName,fn) {
          node.removeEventlistener(eventName,fn)
      },

   
    parent(node) {
        return node.parentNode
    },
    siblings(node) {
        return Array.from(node.parentNode.children).filter(n=>n!==node)
    }
 
    // 新增直接子元素
};
