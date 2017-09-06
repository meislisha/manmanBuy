$(function() {
	//首页nav ajax 数据获取
	nav();
	//首页的折扣列表
	discount();
	//返回顶部按钮
	toTop();
	
//	$.ajax({
//		url:"http://127.0.0.1:9090/api/getindexmenu",
//	})
})
//首页nav ajax 数据获取
function nav() {
	$.ajax({
		type: "get",
		url: "http://127.0.0.1:9090/api/getindexmenu",
		success: function(data) {
//			console.log(data);
			var moreIndex = 0;
			for(var i = 0; i < data.result.length; i++) {
				$('#nav .navul').append(template('navTemplate', data.result[i]));
				if(data.result[i].name == "更多") {
					moreIndex = i;
					break;
				}
			}
			for(var i = moreIndex + 1; i < data.result.length; i++) {
				$('#nav .hidenavul').append(template('navTemplate', data.result[i]));
			}
			$('#nav .hidenavul').hide();
			moreIndex = 7;
			$('#nav .navul li').eq(moreIndex).click(function() {
				$('#nav .hidenavul').fadeToggle(0);
			})

		}
	});
}
//首页的折扣列表
function discount() {
	$.ajax({
		url: 'http://127.0.0.1:9090/api/getmoneyctrl',
		success: function(data) {
			console.log(data.result);
			$('#discount .discount-body .discountUl').append(template('discountTemplate',data))
		}
	})
}
//返回顶部按钮2个
function toTop(){
	
	$(window).scroll(function(){
		var showWidth=$('#header').height()+$('#search').height()+$('#nav').height();
	console.log(showWidth);
		if($(window).scrollTop()>showWidth){
		$('#toTop').show();
	}else{
		$('#toTop').hide();
	}
	})
	$('#toTop').click(function(){
		$('body').scrollTop(0)
	})
	$('#footer .back').click(function(){
		$('body').scrollTop(0)
	})
}

