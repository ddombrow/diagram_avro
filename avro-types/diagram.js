const floorElementType = require("./floor-elements");

module.exports = () => {
	return({
		type: "record",
		name: "Diagram",
		fields: diagramFields()
	})
};

function diagramFields() {
	return [
		{name: "id", type: "string"},
		{name: "space_id", type: "long"},
		{name: "event_id", type: "string"},
		{name: "legacy_event_id", type: "long"},
		{name: "guestlist_id", type: ["null", "string"], default: null},
		{name: "name", type: ["null", "string"], default: null},
		{name: "width", type: ["null","int"], default: null},
		{name: "length", type: ["null", "int"], default: null},
		{name: "rotation", type: ["null","int"], default: null},
		{name: "prefunction_perimeter", type: ["null", "int"], default: null},
		{name: "service_perimeter", type: ["null", "int"], default: null},
		{name: "notes", type: ["null", "string"], default: null},
		{name: "update_id", type: ["null", "string"], default: null},
		{name: "layout_id", type: ["null", "string"], default: null},
		{name: "created_at", type: ["null", "string"], default: null},
		{name: "updated_at", type: ["null", "string"], default: null},
		{name: "floor_elements", type: floorElementType(), default: {}}
		//{"groups": }
		//{"floorPlan": } make record type
		//{"table_numbering": } make table_numbering type
	];
}