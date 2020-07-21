/*


!edit
12345
-a This is what actually happens

*/

$("#outputTextHidden").hide();

function update() {
	let builtCommand = "!edit";
	builtCommand += " " + $("#reportId").val();
	builtCommand += " -a " + $("#actualResult").val();
	$("#outputText").text(builtCommand);
	$("#outputTextHidden").val(builtCommand);
}

$("#reportId").on("keyup", () => {
	update();
});
$("#actualResult").on("keyup", () => {
	update();
});

$("#copyButton").on("click", () => {
	$("#outputTextHidden").show();
	$("#outputTextHidden").select();
	document.execCommand("copy");
	$("#outputTextHidden").hide();
});