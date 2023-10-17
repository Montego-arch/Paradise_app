import click, frappe
from frappe.commands import pass_context, get_site
from frappe.exceptions import SiteNotSpecifiedError


@click.command('show-user', help='Show user in system')
@click.argument('email')
@pass_context
def show_user(context, email):
    site = get_site(context)
    print(site)
    #connect site database
    with frappe.init_site(site):
        frappe.connect()
        users = frappe.db.sql(f"""
            SELECT name, last_active
            FROM tabUser WHERE name='{email}'
            ;""", as_dict=1)
        
        for i in users:
            print(f"{i.name} - {i.last_active}")



commands = [
    show_user,
]

