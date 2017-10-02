module.exports = function chairType() {
	return {
		type: "map",
		name: "Chairs",
		values: {
			type: "record",
			name: "Chair",
			fields: chairFields()
		}
	}
}

function chairFields() {
	return [
		{name: "id", type: "string"},
		{name: "type", type: "string"}, //enum?
		{name: "dimensions", type: ["null", chairDimensionsType()], default: null},
		{name: "side", type: ["null", "int"], default: null},
		{name: "side_index", type: "int"},
		{name: "orientation", type: ["null", chairOrientationType()], default: null},
		{name: "guest_id", type: ["null", "string"], default: null}
	];
}

function chairDimensionsType() {
	return {
		type: "record",
		name: "ChairDimensions",
		fields: [
			{name: "width", type: "float"},
			{name: "length", type: "float"}
		]
	};
}

function chairOrientationType() {
	return {
		type: "enum",
		name: "ChairOrientation",
		symbols: ["top", "bottom", "left", "right", "default"]
	};
}
