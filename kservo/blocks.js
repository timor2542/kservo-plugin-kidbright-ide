Blockly.Blocks['kservo270angle'] = {
  init: function () {
    this.jsonInit({
      "type": "kservo270angle",
      "message0": Blockly.Msg.KSERVO_KSERVO270_ANGLE_MSG,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN_VALUE",
          "options": [
            [
              "OUT1",
              "26"
            ],
            [
              "OUT2",
              "27"
            ],
            [
              "SERVO1",
              "15"
            ],
            [
              "SERVO2",
              "17"
            ],
            [
              "18",
              "18"
            ],
            [
              "19",
              "19"
            ],
            [
              "23",
              "23"
            ],
          ]
        },
        {
          "type": "input_value",
          "name": "DEGREE_VALUE",
          "check": "Number"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "tooltip": Blockly.Msg.KSERVO_KSERVO270_ANGLE_TOOLTIP,
      "helpUrl": "https://github.com/timor2542/kservo-plugin-kidbright-ide"
    });
  },
	xmlToolbox: function() {
		return `
		<block type="kservo270angle">
			<value name="DEGREE_VALUE">
				<shadow type="math_number">
					<field name="VALUE">135</field>
				</shadow>
			</value>
		</block>
		`;
	}
};

Blockly.Blocks['kservo270stop'] = {
  init: function () {
    this.jsonInit({
      "type": "kservo270stop",
      "message0": Blockly.Msg.KSERVO_KSERVO270_STOP_MSG,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN_VALUE",
          "options": [
            [
              "OUT1",
              "26"
            ],
            [
              "OUT2",
              "27"
            ],
            [
              "SERVO1",
              "15"
            ],
            [
              "SERVO2",
              "17"
            ],
            [
              "18",
              "18"
            ],
            [
              "19",
              "19"
            ],
            [
              "23",
              "23"
            ],
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "tooltip": Blockly.Msg.KSERVO_KSERVO270_STOP_TOOLTIP,
      "helpUrl": "https://github.com/timor2542/kservo-plugin-kidbright-ide"
    });
  }
};

Blockly.Blocks['kservo360angle'] = {
  init: function () {
    this.jsonInit({
      "type": "kservo360angle",
      "message0": Blockly.Msg.KSERVO_KSERVO360_ANGLE_MSG,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN_VALUE",
          "options": [
            [
              "OUT1",
              "26"
            ],
            [
              "OUT2",
              "27"
            ],
            [
              "SERVO1",
              "15"
            ],
            [
              "SERVO2",
              "17"
            ],
            [
              "18",
              "18"
            ],
            [
              "19",
              "19"
            ],
            [
              "23",
              "23"
            ],
          ]
        },
        {
          "type": "input_value",
          "name": "DEGREE_VALUE",
          "check": "Number"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 15,
      "tooltip": Blockly.Msg.KSERVO_KSERVO360_ANGLE_TOOLTIP,
      "helpUrl": "https://github.com/timor2542/kservo-plugin-kidbright-ide"
    });
  },
	xmlToolbox: function() {
		return `
		<block type="kservo360angle">
			<value name="DEGREE_VALUE">
				<shadow type="math_number">
					<field name="VALUE">90</field>
				</shadow>
			</value>
		</block>
		`;
	}
};

Blockly.Blocks['kservo360continuous'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "kservo360continuous",
        "message0": Blockly.Msg.KSERVO_KSERVO360_CONTINUOUS_MSG,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "PIN_VALUE",
            "options": [
              [
                "OUT1",
                "26"
              ],
              [
                "OUT2",
                "27"
              ],
              [
                "SERVO1",
                "15"
              ],
              [
                "SERVO2",
                "17"
              ],
              [
                "18",
                "18"
              ],
              [
                "19",
                "19"
              ],
              [
                "23",
                "23"
              ],
            ]
          },
          {
            "type": "field_dropdown",
            "name": "DIRECTION",
            "options": [
              [
                Blockly.Msg.KSERVO_KSERVO360_DIRECTION_CCW_MSG,
                "0"
              ],
              [
                Blockly.Msg.KSERVO_KSERVO360_DIRECTION_CW_MSG,
                "1"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "SPEED_VALUE",
            "check": "Number"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 15,
        "tooltip": Blockly.Msg.KSERVO_KSERVO360_CONTINUOUS_TOOLTIP,
        "helpUrl": "https://github.com/timor2542/kservo-plugin-kidbright-ide"
      });
  },
	xmlToolbox: function() {
		return `
		<block type="kservo360continuous">
			<value name="SPEED_VALUE">
				<shadow type="math_number">
					<field name="VALUE">50</field>
				</shadow>
			</value>
		</block>
		`;
	}
};

Blockly.Blocks['kservo360stop'] = {
  init: function () {
    this.jsonInit({
      "type": "kservo360stop",
      "message0": Blockly.Msg.KSERVO_KSERVO360_STOP_MSG,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PIN_VALUE",
          "options": [
            [
              "OUT1",
              "26"
            ],
            [
              "OUT2",
              "27"
            ],
            [
              "SERVO1",
              "15"
            ],
            [
              "SERVO2",
              "17"
            ],
            [
              "18",
              "18"
            ],
            [
              "19",
              "19"
            ],
            [
              "23",
              "23"
            ],
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 15,
      "tooltip": Blockly.Msg.KSERVO_KSERVO360_STOP_TOOLTIP,
      "helpUrl": "https://github.com/timor2542/kservo-plugin-kidbright-ide"
    });
  }
};

Blockly.Blocks['setoutpinjrbot'] = {
  init: function () {
    this.jsonInit({
      "type": "setoutpinjrbot",
      "message0": Blockly.Msg.KSERVO_SETOUTPUTPIN_2WDJRBOT_MSG,
      "args0": [
        {
          "type": "field_image",
          "src": "https://a.lnwpic.com/4p6j61.png",
          "width": 15,
          "height": 15,
          "alt": "*",
          "flipRtl": false
        },
        {
          "type": "field_dropdown",
          "name": "LEFT_PIN_VALUE",
          "options": [
            [
              "OUT1",
              "26"
            ],
            [
              "OUT2",
              "27"
            ],
            [
              "SERVO1",
              "15"
            ],
            [
              "SERVO2",
              "17"
            ],
            [
              "18",
              "18"
            ],
            [
              "19",
              "19"
            ],
            [
              "23",
              "23"
            ],
          ]
        },
        {
          "type": "field_dropdown",
          "name": "RIGHT_PIN_VALUE",
          "options": [
            [
              "OUT2",
              "27"
            ],
            [
              "OUT1",
              "26"
            ],
            [
              "SERVO1",
              "15"
            ],
            [
              "SERVO2",
              "17"
            ],
            [
              "18",
              "18"
            ],
            [
              "19",
              "19"
            ],
            [
              "23",
              "23"
            ],
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180,
      "tooltip": Blockly.Msg.KSERVO_SETOUTPUTPIN_2WDJRBOT_TOOLTIP,
      "helpUrl": "https://github.com/timor2542/kservo-plugin-kidbright-ide"
    });
  }
};

Blockly.Blocks['jrbot'] = {
  init: function () {
    this.jsonInit({
      "type": "jrbot",
      "message0": Blockly.Msg.KSERVO_2WDJRBOT_MOVE_MSG,
      "args0": [
        {
          "type": "field_image",
          "src": "https://a.lnwpic.com/4p6j61.png",
          "width": 15,
          "height": 15,
          "alt": "*",
          "flipRtl": false
        },
        {
          "type": "field_dropdown",
          "name": "DIRECTION",
          "options": [
            [
              Blockly.Msg.KSERVO_2WDJRBOT_MOVE_DIRECTION_FD_MSG,
              "0"
            ],
            [
              Blockly.Msg.KSERVO_2WDJRBOT_MOVE_DIRECTION_BK_MSG,
              "1"
            ],
            [
              Blockly.Msg.KSERVO_2WDJRBOT_MOVE_DIRECTION_TL_MSG,
              "2"
            ],
            [
              Blockly.Msg.KSERVO_2WDJRBOT_MOVE_DIRECTION_TR_MSG,
              "3"
            ],
            [
              Blockly.Msg.KSERVO_2WDJRBOT_MOVE_DIRECTION_SL_MSG,
              "4"
            ],
            [
              Blockly.Msg.KSERVO_2WDJRBOT_MOVE_DIRECTION_SR_MSG,
              "5"
            ]
          ]
        },
        {
          "type": "input_value",
          "name": "SPEED_VALUE",
          "check": "Number"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180,
      "tooltip": Blockly.Msg.KSERVO_2WDJRBOT_MOVE_TOOLTIP,
      "helpUrl": "https://github.com/timor2542/kservo-plugin-kidbright-ide"
    });
  },
	xmlToolbox: function() {
		return `
		<block type="jrbot">
			<value name="SPEED_VALUE">
				<shadow type="math_number">
					<field name="VALUE">50</field>
				</shadow>
			</value>
		</block>
		`;
	}
};
Blockly.Blocks['jrbotlrspd'] = {
  init: function () {
    this.jsonInit({
      "type": "jrbotlrspd",
      "message0": Blockly.Msg.KSERVO_2WDJRBOT_MOVE_2_MSG,
      "args0": [
        {
          "type": "field_image",
          "src": "https://a.lnwpic.com/4p6j61.png",
          "width": 15,
          "height": 15,
          "alt": "*",
          "flipRtl": false
        },
        {
          "type": "field_dropdown",
          "name": "DIRECTION",
          "options": [
            [
              Blockly.Msg.KSERVO_2WDJRBOT_MOVE_DIRECTION_FD_MSG,
              "0"
            ],
            [
              Blockly.Msg.KSERVO_2WDJRBOT_MOVE_DIRECTION_BK_MSG,
              "1"
            ]
          ]
        },
        {
          "type": "input_value",
          "name": "LEFT_SPEED_VALUE",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "RIGHT_SPEED_VALUE",
          "check": "Number"
        },
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180,
      "tooltip": Blockly.Msg.KSERVO_2WDJRBOT_MOVE_2_TOOLTIP,
      "helpUrl": "https://github.com/timor2542/kservo-plugin-kidbright-ide"
    });
  },
	xmlToolbox: function() {
		return `
		<block type="jrbotlrspd">
			<value name="LEFT_SPEED_VALUE">
				<shadow type="math_number">
					<field name="VALUE">50</field>
				</shadow>
			</value>
			<value name="RIGHT_SPEED_VALUE">
				<shadow type="math_number">
					<field name="VALUE">50</field>
				</shadow>
			</value>
		</block>
		`;
	}
};
Blockly.Blocks['jrbot_stop_moving'] = {
  init: function () {
    this.jsonInit({
      "type": "jrbot_stop_moving",
      "message0": Blockly.Msg.KSERVO_2WDJRBOT_STOP_MOVING_MSG,
      "args0":[
        {
          "type": "field_image",
          "src": "https://a.lnwpic.com/4p6j61.png",
          "width": 15,
          "height": 15,
          "alt": "*",
          "flipRtl": false
        },
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180,
      "tooltip": Blockly.Msg.KSERVO_2WDJRBOT_STOP_MOVING_TOOLTIP,
      "helpUrl": "https://github.com/timor2542/kservo-plugin-kidbright-ide"
    });
  }
};
