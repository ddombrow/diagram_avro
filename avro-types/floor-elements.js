const objectMetaType = require("./object-meta");
const tableMetaType = require("./table-meta");
const dimensionType = require("./dimensions");

module.exports = () => {
	return({
		type: "map",
		name: "FloorElements",
		values: {
			type: "record",
			name: "FloorElement",
			fields: floorElementFields()
		}
	})
};

function floorElementFields() {
	return [
		{name: "id", type: "string"},
		{name: "color", type: "string"},
		{name: "dimensions", type: dimensionType("FeDimensions")},
		{name: "group_id", type:["null", "string"], default: null},
		{name: "is_locked", type: "boolean", default: false},
		{name: "layer", type: "int", default: 0},
		{name: "name", type: ["null", "string"], default: null},
		{name: "number", type: ["null", "int"], default: null},
		{name: "rotation", type: "int"},
		{name: "layout", type: "string"},
		{name: "font_size", type: "int"},
		{name: "isObjectLabelToggled", type: ["null","boolean"], default: null},
		{name: "objectLabelSize", type: ["null", "int"], default: null},
		{name: "objectLabelType", type: ["null", objectLabelType()], default: null},
		{name: "position", type: positionType()},
		{name: "object_meta", type: ["null", objectMetaType()], default: null},
		{name: "table_meta", type: ["null", tableMetaType()], default: null}
	];
}

function objectLabelType() {
	return {
		type: "enum",
		name: "ObjectLabelType",
		symbols: ["text", "icon"]
	};
}

function positionType() {
	return {
		type: "record",
		name: "Position",
		fields: [
			{name: "x", type: "float"},
			{name: "y", type: "float"}
		]
	};
}