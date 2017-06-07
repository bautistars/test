<link  type="text/css" rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.0/themes/start/jquery-ui.css" /> 
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script> 
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.0/jquery-ui.min.js"></script> 
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.SPServices/0.7.2/jquery.SPServices-0.7.2.min.js"></script> 

<script type="text/javascript" src="../SiteAssets/stratus-forms-1.3.js"></script>
<script type="text/javascript" src="../SiteAssets/stratus-forms-data-SPServices-1.3.js"></script>

<!-- NEEDED FOR THE PEOPLE PICKER IN SHAREPOINT 2013. PEOPLE PICKER DOES NOT WORK IN SHAREPOINT 2010 -->
<script type="text/javascript" src="/_layouts/15/clientforms.js" ></script> 
<script type="text/javascript" src="/_layouts/15/clientpeoplepicker.js" ></script> 
<script type="text/javascript" src="/_layouts/15/autofill.js" ></script> 


<script type='text/javascript'>

	ExecuteOrDelayUntilScriptLoaded(Init,"SP.js");

		function Init(){
			 //Initialization function. Tells SF which Query String Variable
			 //has the ID of the form, and the name of the list to read data from
			 $("#SFForm").StratusFormsInitialize({
				queryStringVar: "formID",
				listName: "New Organization Application",
			 });
		 }
		 
		function SubmitForm()
		{
			//When the form is submitted store it to the specified list
			//also pasas in the x and y offset of error messages for elements
			//this allows you to change their location in reference to the form field
			$("#SFForm").StratusFormsSubmit({
				listName: "New Organization Application",
				errorOffsetTop: 0,
				errorOffsetLeft: 5,
				completefunc: function(id) { 
					alert("Save was successful. ID = " + id);
					window.location = window.location.pathname + "?formID=" + id; 
				}
			});
		}
		
</script>


<div id='SFForm'>
<!----  HTML FOR Student Organization Name---------------->
Student Organization Name: 
<input id="StudentOrganizationName"  class="required" type="text" />
<br>
<!-------------------------------------------------->

<!----  HTML FOR Acronym---------------->
Acronym: 
<input id="Acronym"   type="text" />
<br>
<!-------------------------------------------------->

<!----  HTML FOR Detailed Purpose/Mission---------------->
Detailed Purpose/Mission: 
<textarea id="DetailedPurpose/Mission"  class="required" ></textarea>
<br>
<!-------------------------------------------------->

<!----  HTML FOR School---------------->
School: 
<input id="School"  class="required" type="text" />
<br>
<!-------------------------------------------------->

<!----  HTML FOR Category---------------->
Category: 
<input id="Category" class="required"  type="checkbox"  />
<br>
<!-------------------------------------------------->

<!----  HTML FOR Social Media---------------->
Social Media: 
<input id="SocialMedia"   type="checkbox"  />
<br>
<!-------------------------------------------------->

<!----  HTML FOR Social Media URL---------------->
Social Media URL: 
<textarea id="SocialMediaURL"   ></textarea>
<br>
<!-------------------------------------------------->

<!----  HTML FOR Point of Contact---------------->
Point of Contact: 
<input id="PointofContact"  class="required" type="text" />
<br>
<!-------------------------------------------------->

<!----  HTML FOR Point of Contact Email---------------->
Point of Contact Email: 
<input id="PointofContactEmail"  class="required" type="text" validate="validEmail" />
<br>
<!-------------------------------------------------->

<!----  HTML FOR Point of Contact Phone Number---------------->
Point of Contact Phone Number: 
<input id="PointofContactPhoneNumber" class="required"  type="text" validate="validPhone" />
<br>
<!-------------------------------------------------->

<!----  HTML FOR Faculty Advisor Name---------------->
Faculty Advisor Name: 
<input id="FacultyAdvisorName"  class="required" type="text" />
<br>
<!-------------------------------------------------->

<!----  HTML FOR Faculty Advisor Email---------------->
Faculty Advisor Email: 
<input id="FacultyAdvisorEmail"  class="required" type="text" validate="validEmail" />
<br>
<!-------------------------------------------------->

<!----  HTML FOR President Name---------------->
President Name: 
<input id="PresidentName"  class="required" type="text" />
<br>
<!-------------------------------------------------->

<!----  HTML FOR President Email---------------->
President Email: 
<input id="PresidentEmail"  class="required" type="text" validate="validEmail" />
<br>
<!-------------------------------------------------->

<!----  HTML FOR Treasurer---------------->
Treasurer: 
<input id="Treasurer"  class="required" type="text" />
<br>
<!-------------------------------------------------->

<!----  HTML FOR Treasurer Email---------------->
Treasurer Email: 
<input id="TreasurerEmail" class="required"  type="text" validate="validEmail" />
<br>
<!-------------------------------------------------->

<!----  HTML FOR Member Roster---------------->
Member Roster: 
<textarea id="MemberRoster"  class="required" ></textarea>
<br>
<!-------------------------------------------------->

<input type='button' value='Submit/Update Form'' onclick='SubmitForm();'>
</div>