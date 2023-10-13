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

		// GRAPH CALL


		let status = function(){
			frappe.call({
				method: "paradise_app.paradise_app.page.paradise.paradise.get_property_price_by_status",
				callback: function(r) {

					console.log(r);
					// let price_tuple = ()
					let statuses = []
					let prices = []
					let message = r.message
					r.message.forEach((item) => {
						statuses.push(item[0]);
						prices.push(item[1]);
						// price_tuple.push(item[1])
					});;
					// console.log(statuses, prices)
					// START CHART
					let chart = new frappe.Chart( "#frost-chart", { // or DOM element
						data: {
						labels: statuses,

						datasets: [
							{
								name: statuses[0], chartType: 'bar',
								values: [prices[0], 0, 0]
							},
							{
								name: statuses[1], chartType: 'bar',
								values: [0, prices[1], 0]
							},
							{
								name: statuses[2], chartType: 'bar',
								values: [0, 0, prices[2]]
							},
							
						],

						yMarkers: [{ label: "Marker", value: 5000000000,
							options: { labelPos: 'left' }}],
						yRegions: [{ label: "Region", start:0, 
						end: 5000000000,
							options: { labelPos: 'right' }}]
						},

						title: "Paradise Price Chart",
						type: 'axis-mixed', // or 'bar', 'line', 'pie', 'percentage'
						height: 300,
						colors: ['red', 'blue', 'green'],

						tooltipOptions: {
							formatTooltipX: d => (d + '').toUpperCase(),
							formatTooltipY: d => d + ' pts',
						}
						});
						console.log('ready')
						alert('Ready')
				}
			})
		}


		// FRAPPE CHARTS
		// let page_chart = function(){

			// let chart = new frappe.Chart( "#frost-chart", { // or DOM element
			// 	data: {
			// 	labels: ["12am-3am", "3am-6am", "6am-9am", "9am-12pm",
			// 		"12pm-3pm", "3pm-6pm", "6pm-9pm", "9pm-12am"],

			// 	datasets: [
			// 		{
			// 			name: "Some Data", chartType: 'bar',
			// 			values: [25, 40, 30, 35, 8, 52, 17, -4]
			// 		},
			// 		{
			// 			name: "Another Set", chartType: 'bar',
			// 			values: [25, 50, -10, 15, 18, 32, 27, 14]
			// 		},
			// 		{
			// 			name: "Yet Another", chartType: 'bar',
			// 			values: [15, 20, -3, -15, 58, 12, -17, 37]
			// 		}
			// 	],

			// 	yMarkers: [{ label: "Marker", value: 70,
			// 		options: { labelPos: 'left' }}],
			// 	yRegions: [{ label: "Region", start: -10, end: 50,
			// 		options: { labelPos: 'right' }}]
			// 	},

			// 	title: "Paradise Price Chart",
			// 	type: 'axis-mixed', // or 'bar', 'line', 'pie', 'percentage'
			// 	height: 300,
			// 	colors: ['blue', 'white', 'red'],

			// 	tooltipOptions: {
			// 		formatTooltipX: d => (d + '').toUpperCase(),
			// 		formatTooltipY: d => d + ' pts',
			// 	}
 			//     });
				//  chart.export();

		// }




		//push dom element to page
		$(frappe.render_template(frappe.paradise_app_page.body, this)).appendTo(this.page.main)
		// execute methods
		total();
		status()
		// page_chart();
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
			<div id="frost-chart"></div>


`;


// frappe.paradise_app_page = {}
frappe.paradise_app_page = {
	body: body

}



