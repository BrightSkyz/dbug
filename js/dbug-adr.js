/*


!approve/deny/revoke
12345
Discord Canary, 1337, Windows Pro 10

*/

$("#outputTextHidden").hide();

function update() {
	let builtCommand = "!" + $("#commandOption").val();
	builtCommand += " " + $("#reportId").val();
	builtCommand += " " + $("#clientVersion").val();
	builtCommand += ", " + $("#systemSettings").val();
	$("#outputText").text(builtCommand);
	$("#outputTextHidden").val(builtCommand);
}

$("#commandOption").on("change", () => {
	update();
});
$("#reportId").on("keyup", () => {
	update();
});
$("#clientVersion").on("keyup", () => {
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