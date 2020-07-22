/*


!detach
12345
Video Demonstration

*/

$("#outputTextHidden").hide();

function update() {
	let builtCommand = "!detach";
	builtCommand += " " + $("#reportId").val();
	builtCommand += " " + $("#attachmentName").val();
	$("#outputText").text(builtCommand);
	$("#outputTextHidden").val(builtCommand);
}

$("#reportId").on("keyup", () => {
	update();
});
$("#attachmentName").on("keyup", () => {
	update();
});

$("#copyButton").on("click", () => {
	$("#outputTextHidden").show();
	$("#outputTextHidden").select();
	document.execCommand("copy");
	$("#outputTextHidden").hide();
});