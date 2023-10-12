

doc_events = {
	# "*": {
	# 	"on_update": "method",
	# 	"on_cancel": "method",
	# 	"on_trash": "method"
	# },
    "Property": {
        "validate": "paradise_app.paradise_app.doctype.property.events.validate",
        "on_update": "paradise_app.paradise_app.doctype.property.events.on_update",
        "after_insert": "paradise_app.paradise_app.doctype.property.events.after_insert"
	}
}