//ele表示哪个元素需要加载更多
export function loadMore(ele,cb){
    let timer;
    ele.addEventListener('scroll',function(){

        clearTimeout(timer)
        timer = setTimeout(()=>{
            //offsetheight屏幕总高 scrolltop 卷去的高度  scrollheight 内容总高
           let {offsetHeight,scrollTop,scrollHeight} = ele
            if(offsetHeight+scrollTop+20>scrollHeight){
               cb();
            }
        },30)
    },false)
}

export function pullRefresh(ele,cb){
    let distance = ele.offsetTop;
    let startY;
    let move;
    function touchmove(e){
         move = e.touches[0].pageY - startY;
        if(move>0){
            if(move>80){
                move = 80
            }
            ele.style.top = move + distance +"px";
        }else{
            ele.removeEventListener('touchmove',touchmove)
            ele.removeEventListener('touchend',touchend)
        }
    }
    function touchend(){
        if(move<80){
            return ele.style.top = distance +"px";
        }
        let timer = setInterval(()=>{
            move--;
            if(move === 0){
                clearInterval(timer);
                cb();//刷新课程列表
            }
            ele.style.top = move + distance +"px";
        },8)
        ele.removeEventListener('touchmove',touchmove)
        ele.removeEventListener('touchend',touchend)
    }
    function touchstart (e){
        startY = e.touches[0].pageY;
        if(ele.scrollTop === 0&&ele.offsetTop === distance){
            ele.addEventListener('touchmove',touchmove)
            ele.addEventListener('touchend',touchend)
        }
    }
    ele.addEventListener('touchstart',touchstart,false)
}