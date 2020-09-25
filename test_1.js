// ZADATAK 1

function toBase(inputNumber, baseFrom, baseTo) {
	if (baseFrom == 10)
		return (parseInt(inputNumber)).toString(baseTo)
	else if (baseTo == 10)
		return parseInt(inputNumber, baseFrom);
	else {
		var number = parseInt(inputNumber, baseFrom);
		return (parseInt(number)).toString(baseTo);
	}
}

$("#btnConvert").click(function () {
	var inputNumber = $("#txtNumber").val(),
		baseFrom = $("#txtFromBase").val(),
		baseTo = $("#txtToBase").val();
	$("#Result").text(toBase(inputNumber, baseFrom, baseTo));
});

// ZADATAK 2

function format() {
	var x = document.getElementById("number").value;
	var y = document.getElementById("step").value;
	var num = new RegExp("\\B(?<!\\.\\d*)(?=(\\d{" + y + "})+(?!\\d))", "g");
	document.getElementById("result").innerHTML = (x.toString().replace(num, "."));
}

// ZADATAK 3

document.getElementById("num").addEventListener("input", function () {
	this.value = this.value.replace(/[^0-9 \,]/, "");
});

function unformatNumber(inputNumber) {
	inputNumber = document.getElementById("num").value.toString();
	document.getElementById("demo1").innerHTML = parseFloat(inputNumber.replace(/,/g, ""));
}

// ZADATAK 4

function parseFamilies(inputString) {
	inputString = " Mr. Mario Mucalo, Tonka Mucalo, Mrs. Paola Gemić, Mrs. Ana Mucalo, Mr. Juraj Gemić, Lara Gemić, Toma Mucalo";
	document.getElementById("parse").classList.add("hidden");
	document.getElementById("next").classList.remove("hidden");
	var res = inputString.split(",");
	document.getElementById("demo").innerHTML = "Family members: " + res;

	var result = res.map(function (s) {
		return s.split(/\s+/).slice(1, 4);
	});

	var familyArr = [];
	var newArr = [];
	var childArr = [];

	for (var i = 0; i < result.length; i++) {
		if (result[i].includes("Mr.")) {
			var family = result[i][2];
			familyArr.push(family);
		}
	}

	for (var i = document.getElementById("counter").value; i < familyArr.length; i++) {
		if (document.getElementById("counter").value >= familyArr.length) {
			document.getElementById("demo2").innerHTML = "No more families"
		} else {
			var surname = familyArr[i];

			for (var i = 0; i < result.length; i++) {

				if (result[i].includes(surname)) {
					newArr.push(result[i]);
				}
			}
		}
	}

	if (document.getElementById("counter").value >= familyArr.length) {
		document.getElementById("demo2").innerHTML = "No more families"
	} else {

		for (var i = 0; i < newArr.length; i++) {
			if (newArr[i].includes("Mr.")) {
				var father = newArr[i][1];
				var indexf = newArr.indexOf(newArr[i]);

			} else if (newArr[i].includes("Mrs.")) {
				var mother = newArr[i][1];
				var indexm = newArr.indexOf(newArr[i]);

			} else {
				var children = newArr.length - 2;
				if (!newArr[i].includes("Mr.") & !newArr[i].includes("Mrs.")) {
					childArr.push(newArr[i][0]);
				}
			}
		}

		if (children >= 2) {
			child = "children";
		} else {
			child = "child";
		}

		var str = "In the " + surname + " family Mother " + mother + " and Father " + father + " have " + children + " " + child + ": " + childArr.toString();

		document.getElementById("demo2").innerHTML = str;

	}
}

var i = 0;

function buttonClick() {
	document.getElementById("counter").value = ++i;

}

document.getElementById("next").addEventListener("click", parseFamilies);