module.exports = function dimensionType(typeName) {
	return {
		type: "record",
		name: typeName || "Dimensions",
		fields: [
			{ name: "width", type: ["null", "float"], default: null },
			{ name: "length", type: ["null", "float"], default: null },
			{ name: "radius", type: ["null", "float"], default: null }
		]
	};
};