import * as bootstrap from "bootstrap";
import $ from "jquery";
import "./scss/main.scss";

$(".carousel").carousel({
	interval: false,
	keyboard: false,
});

$(".calc-btn").each((i, btn) => {
	$(btn).on("click", function (e) {
		e.preventDefault();

		let months = parseInt($(btn).find(".month-numb").attr("data-months"));
		let monthPrice = parseInt($(btn).find(".price-numb").attr("data-month-price"));
		let insuranceNumb = months * monthPrice;

		$(".calc-btn").each((i, btn) => {
			$(btn).removeClass("active");
		});

		$(btn).addClass("active");

		$(".sum-numb").text(insuranceNumb);
		$(".month-sum").text(months);
	});
});
