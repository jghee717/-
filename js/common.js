$(document).ready(function(){
	/* re_bt클래스 클릭시 동작(댓글입력) */
	$(".re_bt").click(function(){
		var params = $("form").serialize();
				$.ajax({
					type: 'post',
					url: 'dogsta_reply_ok.php?=<?php echo dogsta["idx"]; ?>',
					data : params,
					dataType : 'html',
					success: function(data){
						$(".reply_view").html(data);
						$(".reply_content").val('');
					}
				});
			});

	$(".dat_edit_bt").click(function(){
		/* dat_edit_bt클래스 클릭시 동작(댓글 수정) */
			var obj = $(this).closest(".dap_lo").find(".dat_edit");
			obj.dialog({
				modal:true,
				width:650,
				height:200,
				title:"댓글 수정"});
		});

	$(".dat_delete_bt").click(function(){
		/* dat_delete_bt클래스 클릭시 동작(댓글 삭제) */
		var obj = $(this).closest(".dap_lo").find(".dat_delete");
		obj.dialog({
			modal:true,
			width:400,
			title:"댓글 삭제확인"});
		});
	});
