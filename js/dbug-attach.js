/*


!attach
12345
https://i.imgur.com/blah.png
Video Demonstration

*/

$("#outputTextHidden").hide();

function update() {
	let builtCommand = "!attach";
	builtCommand += " " + $("#reportId").val();
	builtCommand += " " + $("#attachmentUrl").val();
	builtCommand += " " + $("#attachmentName").val();
	$("#outputText").text(builtCommand);
	$("#outputTextHidden").val(builtCommand);
}

$("#reportId").on("keyup", () => {
	update();
});
$("#attachmentUrl").on("keyup", () => {
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