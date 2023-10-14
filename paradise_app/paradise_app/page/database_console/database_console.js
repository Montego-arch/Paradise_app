
frappe.pages['database-console'].on_page_load = function(wrapper) {
	new MyPage(wrapper);

}

//PAGE CONTENT
MyPage = Class.extend({
	init: function(wrapper){
		this.page = frappe.ui.make_app_page({
			parent: wrapper,
			title: 'Data Base Console',
			single_column: true
		});
		// make page
		this.make();
		
	},

	// make page
	make: function(){
		// grab the class
		let me = $(this);

	


		//push dom element to page
		$(frappe.render_template(frappe.paradise_app_page.body, this)).appendTo(this.page.main)
		let scrtag = document.createElement('script');
		scrtag.src = "https://unpkg.com/frappe-datatable@latest";
		scrtag.type = "text/javascript";
		// append script tag to page
		document.head.appendChild(scrtag);
		// execute methods

			// form query
			function makeTable(data){

				let datatable = new DataTable('#queryResult',{
					columns: data.tablehead,
					data: data.content,
					inlineFilters: true,
					dropdownButton: '▼',
				});
			
			}
	
	
			// get form data
			function makeQuery(formQuery){
				// document.querySelector("#queryResult").innerText = formQuery;
				frappe.call({
					method: "paradise_app.paradise_app.page.database_console.database_console.query_database", //dotted path to server method
					args: {query:formQuery},
					callback: function(r) {
						// code snipet
						let el = $("#queryResult");
						let result = r.message;
						console.log(result)
						if(result.reply==0){
							frappe.throw(result.content)
						} else if(result.reply==2){
							el.addClass("text-danger");
							el[0].innerText = result.content;							
						}else {
							if(result.content.length>1){
								makeTable(result);
							} else {
								frappe.msgprint("Empty Set")
							}
							
						}
						// code snippet
					}
				});
				
	
			}
			// get form data
			$("#queryForm").submit(e=>{
				e.preventDefault();
				let formquery = $("#query")[0].value;
				console.log(formquery);
				if(formquery.length>1){
					makeQuery(formquery);
				}
				
			})


	}

	// end of class
})


// HTML CONTENT
let body = `	
		<div id="">
			<form id="queryForm">
				<div class="form-group">
					<label for="query">Enter SQL query</label>
					<textarea lass="form-control" id="query" aria-describedby="query" placeholder="Enter Query"></textarea>
					<small id="emailHelp" class="form-text text-muted text-danger">Think before you type.</small>
				</div>			
				<button type="submit" class="btn btn-primary">Submit</button>
			</form>
			<br>
		</div>
		<div id="queryResult">

		</div>
`;
// frappe.paradise_app_page = {}
frappe.paradise_app_page = {
	body: body

}



