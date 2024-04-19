Blockly.Blocks['kservo270'] = {
  init: function () {
    this.jsonInit({
      "type": "kservo270",
      "message0": Blockly.Msg.KSERVO_KSERVO270_MSG,
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
      "tooltip": Blockly.Msg.KSERVO_KSERVO270_TOOLTIP,
      "helpUrl": Blockly.Msg.KSERVO_HELP_URL
    });
  },
  xmlToolbox: function () {
    return `
		<block type="kservo270">
			<value name="DEGREE_VALUE">
				<shadow type="kservo270.degree_number">
					<field name="VALUE">135</field>
				</shadow>
			</value>
		</block>
		`;
  }
};

Blockly.Blocks['kservo360'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "kservo360",
        "message0": Blockly.Msg.KSERVO_KSERVO360_MSG,
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
        "tooltip": Blockly.Msg.KSERVO_KSERVO360_TOOLTIP,
        "helpUrl": Blockly.Msg.KSERVO_HELP_URL
      });
  },
  xmlToolbox: function () {
    return `
		<block type="kservo360">
			<value name="SPEED_VALUE">
				<shadow type="kservo360.speed_number">
					<field name="VALUE">50</field>
				</shadow>
			</value>
		</block>
		`;
  }
};

Blockly.Blocks['kservostop'] = {
  init: function () {
    this.jsonInit({
      "type": "kservostop",
      "message0": Blockly.Msg.KSERVO_KSERVO_STOP_MSG,
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
      "colour": 330,
      "tooltip": Blockly.Msg.KSERVO_KSERVO_STOP_TOOLTIP,
      "helpUrl": Blockly.Msg.KSERVO_HELP_URL
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
      "helpUrl": Blockly.Msg.KSERVO_HELP_URL
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
      "helpUrl": Blockly.Msg.KSERVO_HELP_URL
    });
  },
  xmlToolbox: function () {
    return `
		<block type="jrbot">
			<value name="SPEED_VALUE">
				<shadow type="kservo360.speed_number">
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
      "helpUrl": Blockly.Msg.KSERVO_HELP_URL
    });
  },
  xmlToolbox: function () {
    return `
		<block type="jrbotlrspd">
			<value name="LEFT_SPEED_VALUE">
				<shadow type="kservo360.speed_number">
					<field name="VALUE">50</field>
				</shadow>
			</value>
			<value name="RIGHT_SPEED_VALUE">
				<shadow type="kservo360.speed_number">
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
      "args0": [
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
      "helpUrl": Blockly.Msg.KSERVO_HELP_URL
    });
  }
};

Blockly.Blocks["kservo270.degree_number"] = {
  // Numeric value.
  init: function () {
    this.jsonInit({
      "type": "block_type",
      "message0": "%1",
      "args0": [
        {
          "type": "field_number",
          "name": "VALUE",
          "value": 135,
          "min": 0,
          "max": 270,
          "precision": 1
        }
      ],
      "output": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    });
  },
	// custom xmlToolbox
	xmlToolbox: function() {
		return null; // hidden block
	}
};

Blockly.Blocks["kservo360.speed_number"] = {
  // Numeric value.
  init: function () {
    this.jsonInit({
      "type": "block_type",
      "message0": "%1",
      "args0": [
        {
          "type": "field_number",
          "name": "VALUE",
          "value": 50,
          "min": 0,
          "max": 100,
          "precision": 1
        }
      ],
      "output": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    });
  },
	// custom xmlToolbox
	xmlToolbox: function() {
		return null; // hidden block
	}
};