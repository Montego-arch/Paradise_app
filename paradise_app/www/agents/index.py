import frappe

def get_context(context):
    context.name = 'Montego'
    context.car = 'Toyota'
    return context