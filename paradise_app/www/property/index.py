import frappe
from paradise_app.utils import paginate
def get_context(context):
    # print(f"\n\n\n{frappe.form_dict}\n\n{frappe.form_dict.hello}\n")
    

    # properties = frappe.db.sql("""
    #     SELECT name, property_name, status, address, grand_total, image FROM `tabProperty` ORDER BY creation DESC;
    #     """, as_dict=True)
    page = frappe.form_dict.page
    pagination = paginate('Property', page)
    context.properties = pagination.get('properties')
    context.prev = pagination.get('prev')
    context.next = pagination.get('next')

    return context