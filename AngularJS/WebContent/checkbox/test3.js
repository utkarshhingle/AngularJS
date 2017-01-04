var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
    var json = {
        "modules": [{
            "myid": "70",
            "realname": "Kishore",
            "full_name": "Kishore Chandra",
            "category": "professional",
            "firm_name": "Yes",
            "designation": "Design-Build Firm",
            "address": "Dwarakanagar 5th lane"
        }, {
            "myid": "87",
            "realname": "Pradeep",
            "full_name": "",
            "category": "professional",
            "firm_name": "",
            "designation": null,
            "address": null
        }, {
            "myid": "88",
            "realname": "Pradeep",
            "full_name": "",
            "category": "professional",
            "firm_name": "",
            "designation": null,
            "address": null
        }, {
            "myid": "89",
            "realname": "Pradeep",
            "full_name": "",
            "category": "professional",
            "firm_name": "",
            "designation": null,
            "address": null
        }, {
            "myid": "72",
            "realname": "recobee",
            "full_name": "Kishore Chandra",
            "category": "vendor",
            "firm_name": "Recobee",
            "designation": "Hardware",
            "address": "55-2-27\/1, Old Venkojipalem, Near Andhra Bank, Hb Colony Road"
        }, {
            "myid": "90",
            "realname": "Vinod kumar",
            "full_name": "Tiles Vendor",
            "category": "vendor",
            "firm_name": "Vendor1",
            "designation": "Tiles",
            "address": "akkayapalem, "
        }, {
            "myid": "92",
            "realname": "Vamsi Vytla",
            "full_name": "vamsi vytla",
            "category": "vendor",
            "firm_name": "vytla cements",
            "designation": "Cement Suppliers",
            "address": "akkayapalem"
        }, {
            "myid": "93",
            "realname": "Bhaskar",
            "full_name": "Surya Bhaskar",
            "category": "vendor",
            "firm_name": "Talatam",
            "designation": "Doors and Windows",
            "address": "Hitech city"
        }, {
            "myid": "94",
            "realname": "Naren",
            "full_name": "Naren Mandala",
            "category": "vendor",
            "firm_name": "Mandala Hardwares",
            "designation": "Hardware",
            "address": "Malleshwaram road"
        }, {
            "myid": "95",
            "realname": "Sreetej",
            "full_name": "Sreetej Vincent",
            "category": "vendor",
            "firm_name": "Vincent Paints",
            "designation": "Paintings",
            "address": "Navi Mumbai"
        }, {
            "myid": "96",
            "realname": "Raja",
            "full_name": "Ramesh Raja Galla",
            "category": "vendor",
            "firm_name": "Galla plumbing ",
            "designation": "Plumbing & Bathware",
            "address": "Karol Bagh "
        }, {
            "myid": "97",
            "realname": "Prasanna kumar",
            "full_name": "Prasanna kumar",
            "category": "vendor",
            "firm_name": "JP cement",
            "designation": "Cement Suppliers",
            "address": "poonamalle road"
        }, {
            "myid": "98",
            "realname": "Phalgun",
            "full_name": "Phalgun Moturu",
            "category": "vendor",
            "firm_name": "Moturu Tiles",
            "designation": "Tiles",
            "address": "benz circle"
        }, {
            "myid": "99",
            "realname": "Pavan",
            "full_name": "Pavan kumar",
            "category": "vendor",
            "firm_name": "Pavan Constructions",
            "designation": "Cement Suppliers",
            "address": "Jubliee hills"
        }]
    };

    $scope.ocw = json;

    var allCategories = json.modules.map(function(item) {
        return item.designation
    });
    var filteredCategories = [];


    allCategories.forEach(function(item) {
        if (filteredCategories.indexOf(item) < 0 && item) {
            filteredCategories.push(item);
        }
    });

    $scope.search = {
        designation: ""
    }

    $scope.categories = filteredCategories;

    $scope.isFiltered = function(val) {
        return $scope.search.designations[val.designation];
    }
});