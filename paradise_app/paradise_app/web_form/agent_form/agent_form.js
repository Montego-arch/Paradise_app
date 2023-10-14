frappe.ready(function() {
	// bind events here
	document.querySelector('.page-header').innerHTML = `
	<h2 class='text-danger'>New Agent Forms</h2>`;

	frappe.web_form.after_load = () => {
		
		// // validate email
		frappe.web_form.on('email', (field, value)=>{
			if (!value.includes('@')){
				frappe.throw(__('Invalid Email'));
			}
		});

		frappe.web_form.validate = () => {
			let data = frappe.web_form.get_values();
			if(!data.email.includes('@')){
				frappe.msgprint("Please enter a valid email");
				return false;
			}
			return true;
				
			};


		}


	})
		

