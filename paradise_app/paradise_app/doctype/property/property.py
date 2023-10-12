# Copyright (c) 2023, Montego-Arch and contributors
# For license information, please see license.txt
from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Property(Document):
    

    def after_insert(self):
           frappe.msgprint((f'Document {self.name} inserted successfully'));
        
        
	# validate
    def validate(self):
          amenity_prices = 0
          for i in self.amenities:
                amenity_prices+=i.amenity_price
                discount = 0
                self.grand_total = self.property_price+amenity_prices - ((self.discount/100)* (self.property_price+amenity_prices))
                
        # try:
        #     frappe.db.sql("""SELECT name, tenant, friends FROM `tabProperty`;""")
        # except Exception as e:
        #     error = frappe.log_error(frappe.get_traceback(), f"{e}")
        #     frappe.msgprint((f"An error occurred see <a href='/app/error-log/{error.name}'><b>{error.name}</b></a>"));
        #         # print(e)
		# if(self.property_type=="Flat"):
			
		# 	for amenity in self.amenities:
		# 		if(amenity.amenity=="Outdoor Kitchen"):
		# 			frappe.throw((f'Property of type<b>Flat</b> should not have amenity <b>{amenity.amenity}<b>'))
		
			#SQL
			# amenity = frappe.db.sql(f"""SELECT amenity FROM `tabProperty Amenity Detail` WHERE parent="{self.name}" AND parentType="Property" AND amenity="Outdoor Kitchen";""", as_dict=True)
			# print("""\n\n{amenity}""")
			# if(amenity):
			# 	frappe.throw((f"Property of type <b>Flat</b> should not have amenity <b>{amenity[0].amenity}<b>"))