var app = angular.module('myApp', [ 'ngGrid' ]);
app
		.controller(
				'MyCtrl',
				function($scope) {
					

					$scope.myData1 = [ {
						name : "Moroni",
						age : 50,
						address : "bangalore",
						pin_code : 44555,
						value:'on'
					}, {
						name : "Tiancum",
						age : 43,
						address : "mysore",
						pin_code : 74034,
						value:'on'
					}, {
						name : "Jacob",
						age : 27,
						address : "bellary",
						pin_code : 88394,
						value:'on'
					}, {
						name : "Nephi",
						age : 29,
						address : "ramanagara",
						pin_code : 73883,
						value:'on'
					}, {
						name : "Enos",
						age : 34,
						address : "cpt",
						pin_code : 34456,
						value:'off'
					} ];
					
					var cellTemplate = "<div ng-class=\"'ngCellText colt' + $index\">"
						+ "	<span ng-cell-text>{{COL_FIELD}}</span>"
						+ "</div>";
					var cellEditTemplate = '<input type="checkbox" ng-checked="row.entity.value==\'on\'" ng-input="COL_FIELD" /></div>';
					
					var checkBoxCellTemplate = '<input type="checkbox"  ng-checked="row.selected" /></div>';
					
					$scope.gridOptions1 = {
						data : 'myData1',
						rowHeight : 25,
						multiSelect : false,
						enableRowSelection : true,
						columnDefs : [ {
							field : "name",
							displayName : "Name",
							width : '25%',
							height : '50px',
						}, {
							field : "age",
							displayName : "Age",
							width : '25%',
							height : '50px',

						}, {
							field : "address",
							displayName : "Address",
							width : '25%',
							height : '50px'
						}, {
							field : "pin_code",
							displayName : "PIN",
							width : '12%',
							height : '50px',
						}, {
							field : "value",
							displayName : "Value",
							enableCellEdit : true,
							cellTemplate : checkBoxCellTemplate,
//							editableCellTemplate : cellEditTemplate
						}

						]
					};
				});