/*


!edit
12345
-r Step 1 ~ Step 2 ~ Step 3 ~ Step 4

*/

let stepCount = 1;

$("#outputTextHidden").hide();

$("#step1").on("keyup", () => {
	update();
});

function update() {
	let builtCommand = "!edit";
	builtCommand += " " + $("#reportId").val();
	builtCommand += " -r";
	for (let i = 1; i < stepCount + 1; i++) {
		if (i == 1) {
			builtCommand += " " + $("#step" + i).val();
		} else {
			builtCommand += " - " + $("#step" + i).val();
		}
	}
	$("#outputText").text(builtCommand);
	$("#outputTextHidden").val(builtCommand);
}

$("#addStep").on("click", () => {
	if (stepCount > 7) {
		return;
	}
	stepCount++;
	$("#steps").append($(`<div class="form-group row" id="step` + stepCount + `Div">
		<label for="staticEmail" class="col-sm-2 col-form-label">Step ` + stepCount + `</label>
		<div class="col-sm-10">
			<input type="text" class="form-control" id="step` + stepCount + `">
		</div>
	</div>`));
	$("#step" + stepCount).on("keyup", () => {
		update();
	});
	update();
});

$("#removeStep").on("click", () => {
	if (stepCount < 2) {
		return;
	}
	$("#step" + stepCount + "Div").remove();
	stepCount--;
	update();
});

$("#reportId").on("keyup", () => {
	update();
});

$("#copyButton").on("click", () => {
	$("#outputTextHidden").show();
	$("#outputTextHidden").select();
	document.execCommand("copy");
	$("#outputTextHidden").hide();
});
