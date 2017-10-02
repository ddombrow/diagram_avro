const dimensionType = require("./dimensions");

module.exports = function() {
	return {
		type: "record",
		name: "ObjectMeta",
		fields: objectMetaFields()
	};
};

function objectMetaFields() {
	return [
		{name: "image", type: "string"},
		{name: "legacy_id", type: "long"},
		{name: "path_def", type: "string"},
		{name: "steps", type: "int"},
		{name: "tile_dimensions", type: dimensionType("TileDimensions")},
		{name: "line_thickness", type: "int"},
		{name: "rope_number", type: "int"},
		{name: "tents", type: tentType()}
	];
}

function tentType() {
	return {
		type: "record",
		name: "Tents",
		fields: [
			{name: "hor", type: "float"},
			{name: "ver", type: "float"},
			{name: "type", type: "string"}
		]
	};
}