$(function() {
	var slide = $('#slide');
	var contents = $('#slide-contents');
	//開くボタン
	var openBtn = $('#open-btn img');
	var btnOpenFlug = false;
	var openFlug = false;
	var panelSwitch = function() {
		//閉じる
		if (openFlug == true ) {
			slide.stop().animate({'width' : '200px','height' : '30px'}, 500);
			openBtn.show();		//開くボタンにする
		}
		//開く
		else if (openFlug == false) {
			slide.stop().animate({'width' : '400px','height' : '200px'}, 500);
			openBtn.hide();		//閉じるボタンにする
		}
	};
	//開くボタンクリックしたら
	$('#open-btn').click(function(){
		panelSwitch();
		openFlug = !openFlug;
		btnOpenFlug = true;
	});
	//画面下位置を取得
	var bottomPos = $(document).height() - $(window).height() - 500;
	$(window).scroll(function () {
		if (!btnOpenFlug) {
			if ($(this).scrollTop() >= bottomPos) {
				if (openFlug == false) {
					panelSwitch();
					openFlug = true;
				}
			} else {
				if (openFlug) {
					panelSwitch();
					openFlug = false;
				}
			}
		}
	});
});
