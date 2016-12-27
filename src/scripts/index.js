var $ = require('./common/libs/zepto-modules/zepto');
require('./common/libs/zepto-modules/event');
require('./common/libs/zepto-modules/ajax');
var $ = require('./common/libs/zepto-modules/touch.js');
var $ = require('./common/libs/zepto-modules/_custom.js');
var Swiper = require('./common/libs/swiper/swiper.min.js');
var swiperAni = require('./common/libs/swiper/swiper.animate1.0.2.min.js');
var IScroll = require('./common/libs/iscroll/iscroll.js');

// edit index
$(".swiper-container").show();
$("#mainContainer").hide();

var swiper = new Swiper('.swiper-container',{
  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    swiperAni.swiperAnimateCache(swiper); //隐藏动画元素 
    swiperAni.swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    swiperAni.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  } 
});

$("#enter").click(function(){
	$(".swiper-container").hide();
	$("#mainContainer").show();
	

	$.post('http://localhost:8000/skill',function(data){
		console.log(data);
		var myScroll;
		myScroll = new IScroll('#wrapper', { mouseWheel: true });
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	})

	
})

var isPlay=false;
$('.music').find('img').on('click',function(){
				if (isPlay) {
					vdo.play();
					isPlay=false;
					$('.music').find('img').css('animation',' circle 3s linear infinite')
				}else{
					vdo.pause();
					isPlay=true;
					$('.music').find('img').css('animation-play-state','paused')
				}
			})
$('.top1').click(function(){
	$('.swiper-container').show();
    $('#mainContainer').hide();
 
})
/*var intro = {
	ajaxData : function(){
		$.post('http://localhost:8000/skill',function(data){
			var skillData = data.skills;
			var str = '';
			for(var i=0; i<4; i++){
				str+='<ul class="skillUl"><li class="ani" swiper-animate-effect="bounceInDown"  swiper-animate-duration="2s" swiper-animate-delay="0.3s">'+'类型：'+skillData[i].category+'</li><li class="ani" swiper-animate-effect="bounceInDown"  swiper-animate-duration="2s" swiper-animate-delay="0.9s">'+'名字：'+skillData[i].name+'</li><li class="ani" swiper-animate-effect="bounceInDown"  swiper-animate-duration="1.8s" swiper-animate-delay="1.7s">'+'使用时间：'+skillData[i].time+'</li><li class="ani" swiper-animate-effect="bounceInDown"  swiper-animate-duration="2s" swiper-animate-delay="2.5s">'+'熟练度：'+skillData[i].level+'</li></ul>'
			}
			$('#scroller').find('ul').append(str);
		})
	}
}*/
     

    $.post('http://localhost:8000/skill',function(data){
    	var html='';
    	for(var i=0;i<data.length;i++){
    		html+='<img src="'+data[i].img+'"/>'+'<li>'+'种类：'+data[i].category+'</li>'+'<li>'+'名称：'+data[i].name+'</li>'+'<li>'+'使用时间：'+data[i].time+'</li>'+'<li>'+'熟练度：'+data[i].level+'</li>';
    	}
    	$('#scroller ul').html(html);
    	myScroll=new IScroll('#wrapper',{mouseWheel:true});
    	document.addEventListener('touchmove',function(e){e.preventDefault();},false);
    });



  $('#footer .button').tap(function(){
    var targetApi=$(this).attr('id');
    if (targetApi=='skill') {
    	$.post('http://localhost:8000/'+targetApi,function(data){
    		var html="";
    		for(var i=0;i<data.length;i++){
    		html+='<img src="'+data[i].img+'"/>'+'<li>'+'种类：'+data[i].category+'</li>'+'<li>'+'名称：'+data[i].name+'</li>'+'<li>'+'使用时间：'+data[i].time+'</li>'+'<li>'+'熟练度：'+data[i].level+'</li>';
    		}
    		$('#scroller ul').html(html);
    		myScroll.scrollTo(0,0);
    		myScroll.refresh();
    	})
    }
    if (targetApi=='work') {
    	$.post('http://localhost:8000/'+targetApi,function(data){
    		var html="";
    		for(var i=0;i<data.length;i++){
    			html+='<img src="'+data[i].img+'"/>'+"<li>"+'企业类型：'+data[i].category+"</li>"+"<li>"+'企业名称：'+data[i].name+"</li>"+"<li>"+'时间：'+data[i].time+"</li>"+"<li>"+'职位：'+data[i].reportto+"</li>"+"<li>"+'项目：'+data[i].projects+"</li>";
    		}
    		$('#scroller ul').html(html);
    		myScroll.scrollTo(0,0);
    		myScroll.refresh();
    	})
    }
    if (targetApi=='project') {
    	$.post('http://localhost:8000/'+targetApi,function(data){
    		var html="";
    		for(var i=0;i<data.length;i++){
    			html+='<img src="'+data[i].img+'"/>'+"<li>"+'项目类型：'+data[i].category+"</li>"+"<li>"+'项目名称：'+data[i].name+"</li>"+"<li>"+'项目描述：'+data[i].description+"</li>"+"<li>"+'详述：'+data[i].detail+"</li>"+"<li>"+'相关技术：'+data[i].projects+"</li>";
    		}
    		$('#scroller ul').html(html);
    		myScroll.scrollTo(0,0);
    		myScroll.refresh();
    	})
    }
    if (targetApi=='my') {
    	$.post('http://localhost:8000/'+targetApi,function(data){
    		var html="";
    		for(var i=0;i<data.length;i++){
    			html+='<img src="'+data[i].img+'"/>'+"<li>"+'姓名：'+data[i].name+"</li>"+"<li>"+'性别：'+data[i].fex+"</li>"+"<li>"+'生日：'+data[i].bir+"</li>"+"<li>"+'个人爱好：'+data[i].like+"</li>"+"<li>"+'求职意向：'+data[i].work+"</li>";
    		}
    		$('#scroller ul').html(html);
    		myScroll.scrollTo(0,0);
    		myScroll.refresh();
    	})
    }
    });
 



