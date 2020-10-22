// 试试用td 他是不能创建出来的,根据语法他是不符合规范.那么什么标签可以容纳其他元素
// template 

let div=document.querySelector('div')

window.dom.attr(div,'data-color','red')
dom.text(div,'我真棒啊')
dom.style(div,{border:'1px solid red'})
const t=dom.find('#travel')[0]
console.log(dom.children(t))
dom.each(dom.children(t),(n)=>dom.style(n,'border','1px solid green'))
console.log(dom.siblings(div))