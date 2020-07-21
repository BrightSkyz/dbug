/*


!edit
12345
-e This is what is supposed to happen

*/

$("#outputTextHidden").hide();

function update() {
	let builtCommand = "!edit";
	builtCommand += " " + $("#reportId").val();
	builtCommand += " -e " + $("#expectedResult").val();
	$("#outputText").text(builtCommand);
	$("#outputTextHidden").val(builtCommand);
}

$("#reportId").on("keyup", () => {
	update();
});
$("#expectedResult").on("keyup", () => {
	update();
});

$("#copyButton").on("click", () => {
	$("#outputTextHidden").show();
	$("#outputTextHidden").select();
	document.execCommand("copy");
	$("#outputTextHidden").hide();
});