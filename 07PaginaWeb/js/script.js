$(document).ready(function(){

	$('.categoria .Objeto[categoria="all"]').addClass('ct_item-active');

	$('.Objeto').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		$('.Objeto').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		$('.product-item').css('transform', 'scale(0)');
		function hideProduct(){
			$('.product-item').hide();
		} setTimeout(hideProduct,400);

		function showProduct(){
			$('.product-item[category="'+catProduct+'"]').show();
			$('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	$('.Objeto[category="all"]').click(function(){
		function showAll(){
			$('.product-item').show();
			$('.product-item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});