import frappe


def validate(doc, event):
    print("\n\n\n\n{doc}, {event}")
    frappe.throw("Error Occured")