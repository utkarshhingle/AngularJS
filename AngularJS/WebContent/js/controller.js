(function () {
    var as = angular.module('AngularJS', ['ngGrid']);

   
    as.controller('MainController', function ($scope, $rootScope, $http) {
    	
    	$scope.divisionList = [];
    	$scope.userLevelList = [];
    	$scope.selectedDivision;
    	$scope.selectedUserLevel;
    	$scope.IsVisible = false;
    	
    	allDivisions = function() {
    		console.log("here in this52525");
//    		alert('here..');
//    		$scope.divisionList = ["CP-MNT","CP-ASF","FV","CC","FV1","FF"];
//    		console.log("divison list : ", JSON.stringify($scope.divisionList, null));
    		
    		// 'dataType' and 'data' are explicitly required for the Content-Type header to be sent
    	    
    		$http({
    		    url: 'http://jsonstub.com/division/list',
    		    method: 'GET',
    		    dataType: 'json', 
    		    data: '',         
    		    headers: {
    		        'Content-Type': 'application/json',
    		        'JsonStub-User-Key': 'ec626583-eaa0-4712-a0b1-eeb4b77ccef8',
    		        'JsonStub-Project-Key': 'd8507457-dfc4-4211-8186-b6ef3f4989f5'
    		    }
    		}).success(function (data, status, headers, config) {
//    		    alert(JSON.stringify(data, null, 4));
    		    $scope.divisionList = data;
    		});
    	};
    	allDivisions();
    	
    	$scope.onDivisionSelect = function() {
    		var userLevelListAll = null;
    		$http({
    		    url: 'http://jsonstub.com/userLevel/list',
    		    method: 'GET',
    		    dataType: 'json', 
    		    data: '',         
    		    headers: {
    		        'Content-Type': 'application/json',
    		        'JsonStub-User-Key': 'ec626583-eaa0-4712-a0b1-eeb4b77ccef8',
    		        'JsonStub-Project-Key': 'd8507457-dfc4-4211-8186-b6ef3f4989f5'
    		    }
    		}).success(function (data, status, headers, config) {
//    		    console.log(JSON.stringify(data, null, 4));
    			 console.log(JSON.stringify($scope.selectedDivision.id, null, 4));
    			$scope.userLevelList = data[$scope.selectedDivision.id];    		    
    		});
    	};
    	
    	//on UserLevel change show Grid
    	
    	$scope.onUseLevelSelect = function() {
    		 /*console.log(JSON.stringify($scope.selectedUserLevel.userLevel, null, 4));*/
                 $scope.IsVisible = true;
    	};
    	
    	//Grid Data Start
    	
		  $scope.myData = [{name: "Moroni", read: false, write: false, both: true},
		         		  {name: "Tiancum", read: false, write: false, both: true},
		         		  {name: "Jacob",  read: true, write: false, both: true},
		         		  {name: "Nephi", read: true, write: false, both: true},
		         		  {name: "Enos", read: false, write: false, both: true}];
		         		  /* $scope.gridOptions = { data: 'myData' }; */

		         /* 		  					var cellEditTemplate = '<input type="checkbox" ng-checked="row.entity.value==\'on\'" ng-input="COL_FIELD" /></div>'; */
		         					
		         					var checkBoxCellReadTemplate = '<input type="checkbox"  ng-checked="row.entity.read" ng-click="readClick(row)"/></div>';
		         					var checkBoxCellWriteTemplate = '<input type="checkbox"  ng-checked="row.entity.write" ng-click="writeClick(row)" /></div>';
		         					var checkBoxCellBothTemplate = '<input type="checkbox"  ng-checked="row.entity.both" ng-click="bothClick(row)" /></div>';
		         		  
		         			$scope.gridOptions = {
//		         					data : 'myData',
		         					data : 'selectedUserLevel.userLevel',
		         					rowHeight : 25,
		         					multiSelect : false,
		         					enableRowSelection : false,

		         					columnDefs : [ {
		         						field : "name",
		         						displayName : "Name",
		         						width : '25%',
		         						height : '50px',
		         					},  {
		         						field : "read",
		         						displayName : "Read",
		         						enableCellEdit : true,
		         						enableCellEditOnFocus: false,
		         						enableCellSelection: false,
		         						cellTemplate : checkBoxCellReadTemplate,
//		         						editableCellTemplate : cellEditTemplate
		         					}, {
		         						field : "write",
		         						displayName : "Write",
		         						enableCellEdit : true,
		         						cellTemplate : checkBoxCellWriteTemplate,
//		         						editableCellTemplate : cellEditTemplate
		         					}, {
		         						field : "both",
		         						displayName : "Both",
		         						enableCellEdit : true,
		         						cellTemplate : checkBoxCellBothTemplate,
//		         						editableCellTemplate : cellEditTemplate
		         					}

		         					]
		         				};
		         			
		         	    	$scope.readClick = function(row) {
		         		    	/* 	$scope.myData[row.rowIndex].entity.write = !row.entity.read; */
		         		    	$scope.selectedUserLevel.userLevel[row.rowIndex].read = !row.entity.read;
		         	
		         		    	if ($scope.selectedUserLevel.userLevel[row.rowIndex].read) {
		         		    		$scope.selectedUserLevel.userLevel[row.rowIndex].write = false;
		         		    		$scope.selectedUserLevel.userLevel[row.rowIndex].both = false;
		         		    	}
		         	    	
		         	    	};
		         	    	
		         	    	$scope.writeClick = function(row) {
		         		    	/* 	$scope.myData[row.rowIndex].entity.write = !row.entity.read; */
		         		    	$scope.selectedUserLevel.userLevel[row.rowIndex].write = !$scope.selectedUserLevel.userLevel[row.rowIndex].write;
		         	
		         		    	if ($scope.selectedUserLevel.userLevel[row.rowIndex].write) {
		         		    		$scope.selectedUserLevel.userLevel[row.rowIndex].read = false;
		         		    		$scope.selectedUserLevel.userLevel[row.rowIndex].both = false;
		         		    	}
		         	    	
		         	    	};
		         		  
		         	    	$scope.bothClick = function(row) {
		         		    	/* 	$scope.myData[row.rowIndex].entity.write = !row.entity.read; */
		         		    	$scope.selectedUserLevel.userLevel[row.rowIndex].both = !$scope.selectedUserLevel.userLevel[row.rowIndex].both;
		         	
		         		    	if ($scope.selectedUserLevel.userLevel[row.rowIndex].both) {
		         		    		$scope.selectedUserLevel.userLevel[row.rowIndex].read = false;
		         		    		$scope.selectedUserLevel.userLevel[row.rowIndex].write = false;
		         		    	}
		         	    	
		         	    	};
		         		  $scope.title = "ng-grid example7";
    	
    	//Grid End
		         		  
//Save Button
		         	    	$scope.saveGridData = function() {
		         	    		 console.log(JSON.stringify($scope.selectedUserLevel.userLevel, null, 4));
		         	    		 
		         	    	/*	var dataObj = {
		         	   				name : $scope.name,
		         	   				employees : $scope.employees,
		         	   				headoffice : $scope.headoffice
			         	   		};	
			         	   		var res = $http.post('/savecompany_json', dataObj);
			         	   		res.success(function(data, status, headers, config) {
			         	   			$scope.message = data;
			         	   		});
			         	   		res.error(function(data, status, headers, config) {
			         	   			alert( "failure message: " + JSON.stringify({data: data}));
			         	   		});
*/
		         	    	};        		  
//Save Button		         		  
    	
    });
    
}());