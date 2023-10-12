frappe.pages['paradise'].on_page_load = function(wrapper) {
	new MyPage(wrapper);

}

//PAGE CONTENT
MyPage = Class.extend({
	init: function(wrapper){
		this.page = frappe.ui.make_app_page({
			parent: wrapper,
			title: 'Paradise Homes',
			single_column: true
		});
		// make page
		this.make();
		
	},

	// make page
	make: function(){
		// grab the class
		let me = $(this);

		// money formmater
		let currency = function currency(n){
			let money = new Intl.NumberFormat('en-NG',
			{ style: 'currency', currency: 'NGN' }).format(n);
		return money
		}

		// refresh total
		


		// get total price
		let total = function(){
			frappe.call({
				method: "paradise_app.paradise_app.page.paradise.paradise.get_total_price",
				callback: function(r) {

					console.log(r);
					// set price data
					$("#total-price")[0].innerText = currency(r.message);
				}
			})
		}




		//push dom element to page
		$(frappe.render_template(frappe.paradise_app_page.body, this)).appendTo(this.page.main)
		// execute methods
		total();
		// refresh total
		document.querySelector("#refresh-total").addEventListener('click',
		()=>{
			console.log("Refresh Clicked")
			total();

		})


	}

	// end of class
})


// HTML CONTENT
let body = `
	<div class="widget-group ">
		<div class="widget-group-head">
			
			<div class="widget-group-control"></div>
		</div>
		<div class="widget-group-body grid-col-3"><div class="widget         widget-shadow    number-widget-box" data-widget-name="Total Declaration Submitted">
		<div class="widget-head">
		<div class="widget-label">
			<div class="widget-title">
			<div class="number-label text-danger">Total Property Price</div></div>
			<div class="widget-subtitle"></div>
		</div>
		<div class="widget-control"><div class="card-actions dropdown pull-right">
		<a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		...
		</a>
		<ul class="dropdown-menu" style="max-height: 300px; overflow-y: auto;">
			<li class="dropdown-item">
							<a data-action="action-refresh" id="refresh-total">Refresh</a>
						</li><li class="dropdown-item">
							<a data-action="action-edit">Edit</a>
						</li>
		</ul>
		</div></div>
		</div>
		<div class="widget-body"><div class="widget-content">
		<div class="number" style="color:undefined" id="total-price">
			0
		</div>
		</div></div>
		<div class="widget-footer">
		</div>
		</div><div class="widget         widget-shadow    number-widget-box" data-widget-name="Total Salary Structure">
		<div class="widget-head">
		<div class="widget-label">
			<div class="widget-title"><div class="number-label">Total Salary Structure</div></div>
			<div class="widget-subtitle"></div>
		</div>
		<div class="widget-control"><div class="card-actions dropdown pull-right">
		<a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		...
		</a>
		<ul class="dropdown-menu" style="max-height: 300px; overflow-y: auto;">
			<li class="dropdown-item">
							<a data-action="action-refresh" id="refresh-total">Refresh</a>
						</li><li class="dropdown-item">
							<a data-action="action-edit">Edit</a>
						</li>
		</ul>
		</div></div>
		</div>
		<div class="widget-body"><div class="widget-content">
		<div class="number" style="color:undefined">0</div>
		</div></div>
		<div class="widget-footer">
		</div>
		</div><div class="widget         widget-shadow    number-widget-box" data-widget-name="Total Incentive Given(Last month)">
		<div class="widget-head">
		<div class="widget-label">
			<div class="widget-title"><div class="number-label">Total Incentive Given(Last month)</div></div>
			<div class="widget-subtitle"></div>
		</div>
		<div class="widget-control"><div class="card-actions dropdown pull-right">
		<a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		...
		</a>
		<ul class="dropdown-menu" style="max-height: 300px; overflow-y: auto;">
			<li class="dropdown-item">
							<a data-action="action-refresh">Refresh</a>
						</li><li class="dropdown-item">
							<a data-action="action-edit">Edit</a>
						</li>
		</ul>
		</div></div>
		</div>
		<div class="widget-body"><div class="widget-content">
		<div class="number" style="color:undefined">₦ 0.00 </div>
		</div></div>
		<div class="widget-footer">
		</div>
		</div><div class="widget         widget-shadow    number-widget-box" data-widget-name="Total Outgoing Salary(Last month)">
		<div class="widget-head">
		<div class="widget-label">
			<div class="widget-title"><div class="number-label">Total Outgoing Salary(Last month)</div></div>
			<div class="widget-subtitle"></div>
		</div>
		<div class="widget-control"><div class="card-actions dropdown pull-right">
		<a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		...
		</a>
		<ul class="dropdown-menu" style="max-height: 300px; overflow-y: auto;">
			<li class="dropdown-item">
							<a data-action="action-refresh">Refresh</a>
						</li><li class="dropdown-item">
							<a data-action="action-edit">Edit</a>
						</li>
		</ul>
		</div></div>
		</div>
		<div class="widget-body"><div class="widget-content">
		<div class="number" style="color:undefined">₦ 0.00 </div>
		</div></div>
		<div class="widget-footer">
		</div>
		</div></div>
		<div class="widget-group-body grid-col-3"><div class="widget         widget-shadow    number-widget-box" data-widget-name="Total Declaration Submitted">
		<div class="widget-head">
		<div class="widget-label">
			<div class="widget-title"><div class="number-label">Total Declaration Submitted</div></div>
			<div class="widget-subtitle"></div>
		</div>
		<div class="widget-control"><div class="card-actions dropdown pull-right">
		<a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		...
		</a>
		<ul class="dropdown-menu" style="max-height: 300px; overflow-y: auto;">
			<li class="dropdown-item">
							<a data-action="action-refresh">Refresh</a>
						</li><li class="dropdown-item">
							<a data-action="action-edit">Edit</a>
						</li>
		</ul>
		</div></div>
		</div>
		<div class="widget-body"><div class="widget-content">
		<div class="number" style="color:undefined">0</div>
		</div></div>
		<div class="widget-footer">
		</div>
		</div><div class="widget         widget-shadow    number-widget-box" data-widget-name="Total Salary Structure">
		<div class="widget-head">
		<div class="widget-label">
			<div class="widget-title"><div class="number-label">Total Salary Structure</div></div>
			<div class="widget-subtitle"></div>
		</div>
		<div class="widget-control"><div class="card-actions dropdown pull-right">
		<a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		...
		</a>
		<ul class="dropdown-menu" style="max-height: 300px; overflow-y: auto;">
			<li class="dropdown-item">
							<a data-action="action-refresh">Refresh</a>
						</li><li class="dropdown-item">
							<a data-action="action-edit">Edit</a>
						</li>
		</ul>
		</div></div>
		</div>
		<div class="widget-body"><div class="widget-content">
		<div class="number" style="color:undefined">0</div>
		</div></div>
		<div class="widget-footer">
		</div>
		</div><div class="widget         widget-shadow    number-widget-box" data-widget-name="Total Incentive Given(Last month)">
		<div class="widget-head">
		<div class="widget-label">
			<div class="widget-title"><div class="number-label">Total Incentive Given(Last month)</div></div>
			<div class="widget-subtitle"></div>
		</div>
		<div class="widget-control"><div class="card-actions dropdown pull-right">
		<a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		...
		</a>
		<ul class="dropdown-menu" style="max-height: 300px; overflow-y: auto;">
			<li class="dropdown-item">
							<a data-action="action-refresh">Refresh</a>
						</li><li class="dropdown-item">
							<a data-action="action-edit">Edit</a>
						</li>
		</ul>
		</div></div>
		</div>
		<div class="widget-body"><div class="widget-content">
		<div class="number" style="color:undefined">₦ 0.00 </div>
		</div></div>
		<div class="widget-footer">
		</div>
		</div><div class="widget         widget-shadow    number-widget-box" data-widget-name="Total Outgoing Salary(Last month)">
		<div class="widget-head">
		<div class="widget-label">
			<div class="widget-title"><div class="number-label">Total Outgoing Salary(Last month)</div></div>
			<div class="widget-subtitle"></div>
		</div>
		<div class="widget-control"><div class="card-actions dropdown pull-right">
		<a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		...
		</a>
		<ul class="dropdown-menu" style="max-height: 300px; overflow-y: auto;">
			<li class="dropdown-item">
							<a data-action="action-refresh">Refresh</a>
						</li><li class="dropdown-item">
							<a data-action="action-edit">Edit</a>
						</li>
		</ul>
		</div></div>
		</div>
		<div class="widget-body"><div class="widget-content">
		<div class="number" style="color:undefined">₦ 0.00 </div>
		</div></div>
		<div class="widget-footer">
		</div>
		</div></div>
			</div>


`;


// frappe.paradise_app_page = {}
frappe.paradise_app_page = {
	body: body

}



