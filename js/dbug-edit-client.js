/*


!edit
12345
-c Discord Canary, 1337

*/

$("#outputTextHidden").hide();

function update() {
	let builtCommand = "!edit";
	builtCommand += " " + $("#reportId").val();
	builtCommand += " -c " + $("#clientVersion").val();
	$("#outputText").text(builtCommand);
	$("#outputTextHidden").val(builtCommand);
}

$("#reportId").on("keyup", () => {
	update();
});
$("#clientVersion").on("keyup", () => {
	update();
});

$("#copyButton").on("click", () => {
	$("#outputTextHidden").show();
	$("#outputTextHidden").select();
	document.execCommand("copy");
	$("#outputTextHidden").hide();
});