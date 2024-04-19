
Blockly.JavaScript['kservo270'] = function(block) {
  var dropdown_pin_value = block.getFieldValue('PIN_VALUE');
  var value_degree_value = Blockly.JavaScript.valueToCode(block, 'DEGREE_VALUE', Blockly.JavaScript.ORDER_ATOMIC) || "0";
  // TODO: Assemble javascript into code variable.
  var code = 'DEV_IO.kservo().kservo270(' + dropdown_pin_value + ', ' + value_degree_value + ');\n';
  return code;
};

Blockly.JavaScript['kservo360'] = function(block) {
  var dropdown_pin_value = block.getFieldValue('PIN_VALUE');
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var value_speed_value = Blockly.JavaScript.valueToCode(block, 'SPEED_VALUE', Blockly.JavaScript.ORDER_ATOMIC) || "0";
  // TODO: Assemble javascript into code variable.
  var code = 'DEV_IO.kservo().kservo360(' + dropdown_pin_value + ', ' + dropdown_direction + ', ' + value_speed_value + ');\n';
  return code;
};

Blockly.JavaScript['kservostop'] = function(block) {
  var dropdown_pin_value = block.getFieldValue('PIN_VALUE');
  // TODO: Assemble javascript into code variable.
  var code = 'DEV_IO.kservo().kservostop(' + dropdown_pin_value + ');\n';
  return code;
};

Blockly.JavaScript['setoutpinjrbot'] = function(block) {
  var dropdown_left_pin_value = block.getFieldValue('LEFT_PIN_VALUE');
  var dropdown_right_pin_value = block.getFieldValue('RIGHT_PIN_VALUE');
  // TODO: Assemble javascript into code variable.
  var code = 'DEV_IO.kservo().setJRBOTkServoPin(' + dropdown_left_pin_value + ', ' + dropdown_right_pin_value + ');\n';
  return code;
};

Blockly.JavaScript['jrbot'] = function(block) {
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var value_speed_value = Blockly.JavaScript.valueToCode(block, 'SPEED_VALUE', Blockly.JavaScript.ORDER_ATOMIC) || "0";
  // TODO: Assemble javascript into code variable.
  var code = 'DEV_IO.kservo().JRBOTMove(' + dropdown_direction + ', ' + value_speed_value + ');\n';
  return code;
};

Blockly.JavaScript['jrbotlrspd'] = function(block) {
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var value_left_speed_value = Blockly.JavaScript.valueToCode(block, 'LEFT_SPEED_VALUE', Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var value_right_speed_value = Blockly.JavaScript.valueToCode(block, 'RIGHT_SPEED_VALUE', Blockly.JavaScript.ORDER_ATOMIC) || "0";
  // TODO: Assemble javascript into code variable.
  var code = 'DEV_IO.kservo().JRBOTMove2(' + dropdown_direction + ', ' + value_left_speed_value + ', ' + value_right_speed_value + ');\n';
  return code;
};

Blockly.JavaScript['jrbot_stop_moving'] = function(block) {
  // TODO: Assemble javascript into code variable.
  var code = 'DEV_IO.kservo().JRBOTStop();\n';
  return code;
};

Blockly.JavaScript["kservo270.degree_number"] = function(block) {
	// Numeric value.
	var code = parseFloat(block.getFieldValue('VALUE'));
	var order = code >= 0 ? Blockly.JavaScript.ORDER_ATOMIC : Blockly.JavaScript.ORDER_UNARY_NEGATION;
	return [code, order];
};

Blockly.JavaScript["kservo360.speed_number"] = function(block) {
	// Numeric value.
	var code = parseFloat(block.getFieldValue('VALUE'));
	var order = code >= 0 ? Blockly.JavaScript.ORDER_ATOMIC : Blockly.JavaScript.ORDER_UNARY_NEGATION;
	return [code, order];
};
