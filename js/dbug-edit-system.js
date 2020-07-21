/*


!edit
12345
-s Windows Pro 10

*/

$("#outputTextHidden").hide();

function update() {
	let builtCommand = "!edit";
	builtCommand += " " + $("#reportId").val();
	builtCommand += " -s " + $("#systemSettings").val();
	$("#outputText").text(builtCommand);
	$("#outputTextHidden").val(builtCommand);
}

$("#reportId").on("keyup", () => {
	update();
});
$("#systemSettings").on("keyup", () => {
	update();
});

$("#copyButton").on("click", () => {
	$("#outputTextHidden").show();
	$("#outputTextHidden").select();
	document.execCommand("copy");
	$("#outputTextHidden").hide();
});