// Copyright (c) 2016, ridhosribumi and contributors
// For license information, please see license.txt

frappe.require("assets/erpnext/js/checking_coa.js", function() {
	frappe.query_reports["List Account"] = {
		"filters": [
			{
				"fieldname": "company",
				"label": __("Company"),
				"fieldtype": "Link",
				"options": "Company",
				"default": frappe.defaults.get_user_default("Company"),
				"reqd": 1
			},

		],
		"formatter": erpnext.financial_statements.formatter,
		"tree": true,
		"name_field": "account",
		"parent_field": "parent_account",
		"initial_depth": 3
	}
});
