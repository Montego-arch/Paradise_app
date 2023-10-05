# Copyright (c) 2023, Montego-Arch and contributors
# For license information, please see license.txt
from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Property(Document):
    def after_insert(self):
        frappe.msgprint((f"Document {self.name} inserted successfully"));
	# validate
	# def validate(self):
		# if(self.property_type=="Flat"):
			
		# 	for amenity in self.amenities:
		# 		if(amenity.amenity=="Outdoor Kitchen"):
		# 			frappe.throw((f'Property of type<b>Flat</b> should not have amenity <b>{amenity.amenity}<b>'))
		
			#SQL
			# amenity = frappe.db.sql(f"""SELECT amenity FROM `tabProperty Amenity Detail` WHERE parent="{self.name}" AND parentType="Property" AND amenity="Outdoor Kitchen";""", as_dict=True)
			# print("""\n\n{amenity}""")
			# if(amenity):
			# 	frappe.throw((f"Property of type <b>Flat</b> should not have amenity <b>{amenity[0].amenity}<b>"))