<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<fieldset>
		<legend> Menu Configuration </legend>
		<table width="80%" cellpadding="0" cellspacing="0"
			style="text-align: left;" border="0">
			<tr>
				<td><span id="ctl00_ContentPlaceHolder1_lbl_Div"
					style="font-family: Verdana; font-size: 8pt;">Division *</span> <select
					name="ctl00$ContentPlaceHolder1$ddlDiv"
					onchange="javascript:setTimeout('__doPostBack(\'ctl00$ContentPlaceHolder1$ddlDiv\',\'\')', 0)"
					id="ctl00_ContentPlaceHolder1_ddlDiv"
					style="font-family: Verdana; font-size: 8pt; width: 160px;">
						<option selected="selected" value="0">--Select--</option>
						<option value="1">CP-MNT</option>
						<option value="2">CP-ASF</option>
						<option value="3">FV</option>
						<option value="4">CC</option>
						<option value="5">FV1</option>
						<option value="6">FF</option>

				</select>
				</td>
				<td><span id="ctl00_ContentPlaceHolder1_lbl"
					style="font-family: Verdana; font-size: 8pt;">User Level *</span> <select
					name="ctl00$ContentPlaceHolder1$ddllevel"
					onchange="javascript:setTimeout('__doPostBack(\'ctl00$ContentPlaceHolder1$ddllevel\',\'\')', 0)"
					id="ctl00_ContentPlaceHolder1_ddllevel"
					style="font-family: Verdana; font-size: 8pt; width: 160px;">
						<option selected="selected" value="0">--Select--</option>

				</select>
				</td>
				<td><input type="button" id="btnsa" onclick="SaveGridData()"
					value="Save" title="Click here to Save changes!" visible="true" />
				</td>
				<td></td>
			</tr>
		</table>


	</fieldset>

	<table width="100%">
		<tr>
			<td align="center"><span id="ctl00_ContentPlaceHolder1_txtsave"
				style="display: inline-block; color: Blue; font-family: Verdana; font-size: 8pt; font-weight: bold; width: 373px; display: none;">Updated
					Successfully.</span> <span id="ctl00_ContentPlaceHolder1_txtexist"
				style="display: inline-block; color: Red; font-family: Verdana; font-size: 8pt; font-weight: bold; width: 373px; display: none;">Problem
					Occured while processing.Please Try again...</span>
				<div>
					<div id="a_1" style="color: red; font-size: small; display: none;">
						Loading data....</div>
				</div>
				<div id="MenuMaster" style="width: 80%; height: 300px"></div>
				<div>
					<span id="pagingArea"></span>&nbsp;<span id="infoArea"></span>
				</div> <span id="recfound"></span>
			</td>
		</tr>
	</table>
</body>
</html>