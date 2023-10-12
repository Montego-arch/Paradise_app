import requests
import random
import frappe
from faker import Faker
fake = Faker()
Faker.seed(0)


def populate_property():
    Faker.seed(0)
    #GET AGENTS
    agents = [agent.name for agent in frappe.db.sql("""SELECT name FROM `tabAgent`;""", as_dict=True)]
    # get status
    status = ['Sale', 'Lease', 'Rent']

    property_types = [property.name for property in frappe.db.sql("""SELECT name FROM `tabProperty`;""", as_dict=True)]
    #get city
    cities = [city.name for city in frappe.db.sql("""SELECT name FROM `tabCity`;""", as_dict=True)]
    #get amenities
    amenities = frappe.db.sql("""SELECT amenity, amenity_price FROM `tabProperty Amenity Item`;""", as_dict=True)


    # house image and name api
    house_images = []
    for n in range(10):
        house_image_url = "https://api.unsplash.com/search/photos?client_id=4FoziFrwX8d0gLNh71fsGq4kdAfd6DzBW6StV9qD0BE&query=house"
        img_api = requests.get(house_image_url)
        house_images += [
            {'doctype': 'Property',
             'amenities': [amenities[random.randint(0, len(amenities)-1)]], 
             'description': fake.paragraph(nb_sentences=5), 
             'discount':random.randint(0, 11), 
             'property_price': random.randint(100000, 200000000), 
             'property_type': random.choice(property_types), 
             'status': random.choice (status),
             'city': random.choice(cities), 
             'agent': random.choice(agents), 
             'address': fake.address().replace('\n', ', '), 
             'property_name':i.get('alt_description'),
             'image': i.get('urls').get('small')} for i in img_api.json().get('results')
            ]
        
        #EXECUTE POPULATION
    for p in house_images:
        # try:
        pr = frappe.get_doc(p)
        pr.insert(ignore_permissions=True)
        frappe.db.commit()
        # print("Inserted property", pr.name)
    # except Exception as e:
        #     pass

    
        



  # This will raise a TypeError
