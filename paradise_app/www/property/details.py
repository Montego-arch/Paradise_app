import frappe

def get_context(context):
    # print(f"\n\n\n\n{frappe.form_dict}\n\n\n\n")
    
    try:
        docname = frappe.form_dict.docname
        context.property = frappe.get_doc("Property", frappe.form_dict.docname)
        context.agent = frappe.get_doc("Agent", context.property.agent)

    except Exception as e:
        frappe.local.flags.redirect_location = '/404'
        raise frappe.Redirect
    
    return context