
Blockly.JavaScript['kservo270'] = function(block) {
  var dropdown_pin_value = block.getFieldValue('PIN_VALUE');
  var value_degree_value = Blockly.JavaScript.valueToCode(block, 'DEGREE_VALUE', Blockly.JavaScript.ORDER_ATOMIC) || "0";
  // TODO: Assemble javascript into code variable.
  var code = 'DEV_IO.kservo().kservo270(' + dropdown_pin_value + ', ' + value_degree_value + ');\n';
  return code;
};

Blockly.JavaScript['kservo270stop'] = function(block) {
  var dropdown_pin_value = block.getFieldValue('PIN_VALUE');
  // TODO: Assemble javascript into code variable.
  var code = 'DEV_IO.kservo().kservo270stop(' + dropdown_pin_value + ');\n';
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

Blockly.JavaScript['kservo360stop'] = function(block) {
  var dropdown_pin_value = block.getFieldValue('PIN_VALUE');
  // TODO: Assemble javascript into code variable.
  var code = 'DEV_IO.kservo().kservo360stop(' + dropdown_pin_value + ');\n';
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

Blockly.JavaScript['jrbot_stop_moving'] = function(block) {
  // TODO: Assemble javascript into code variable.
  var code = 'DEV_IO.kservo().JRBOTStop();\n';
  return code;
};
