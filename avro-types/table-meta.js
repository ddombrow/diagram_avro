const chairType = require("./chairs");

module.exports = function tableMetaType() {
	return {
		type: "record",
		name: "TableMeta",
		fields: tableMetaFields()
	}
};

function tableMetaFields() {
	return [
		{name: "legacy_id", type: ["null", "long"], default: null},
		{name: "removed", type: ["null", "int"], default: null},
		{name: "theater_curve", type: ["null","int"], default: null},
		{name: "useCustomSeatNumbering", type: ["null", "boolean"], default: null},
		{name: "theaterChairNumberOffset", type: ["null", "int"], default: null},
		{name: "theaterChairNumberIsOddEven", type: ["null", theaterChairNumberIsOddEvenType()], default: null},
		{name: "theaterChairNumberIsReverse", type: ["null", "boolean"], default: null},
		//{name: "sectionLabelling", type: ""}, //TODO
		{name: "useCustomSectionLabelling", type: ["null", "boolean"], default: null},
		{name: "chairs", type: ["null", chairType()], default: null}
	];
}

function theaterChairNumberIsOddEvenType() {
	return {
		type: "enum",
		name: "TheaterChairNumberIsOddEven",
		symbols: ["odd", "even"]
	};
}