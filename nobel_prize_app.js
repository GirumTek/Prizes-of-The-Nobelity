//Stores data from different columns of a table into variables
var FirstNameList= getColumn("Nobel Prize Winners 1901-2016","First name");
var LastNameList= getColumn("Nobel Prize Winners 1901-2016", "Last name");
var DOBList= getColumn("Nobel Prize Winners 1901-2016","Date of birth");
var BirthCountryList= getColumn("Nobel Prize Winners 1901-2016","Country of birth");
var BirthCityList= getColumn("Nobel Prize Winners 1901-2016","City of birth");
var AwardYearList= getColumn("Nobel Prize Winners 1901-2016","Year of award");
var CategoryList= getColumn("Nobel Prize Winners 1901-2016","Category");
var MotivationList= getColumn("Nobel Prize Winners 1901-2016","Motivation");

//When the user clicks the button it filters through their previous inputs
//and outputs the Nobel Prize Winners from that year and category
onEvent("WinnerButton","click", function(){
var categoryInput= getText("categoryDropdown");
var yearInput=getText("yearDropdown");
Filter(categoryInput,yearInput);
});

//Create the global variable FilteredIndexList
var FilteredIndexList=[];

//Creates a function that filters through the users inputs and outputs an answers based on it
function Filter(cat,year){
var FilteredNameList=[];
for(var i=0;i<CategoryList.length;i++){
  if (CategoryList[i]==cat && AwardYearList[i]==year){
    appendItem(FilteredNameList,FirstNameList[i]+" "+LastNameList[i]);
    appendItem(FilteredIndexList,i);
  }
} 
if(FilteredNameList.length==0){
  appendItem(FilteredNameList,"No Data Available");
  
}

setText("NameOutput",FilteredNameList.join("\n")); 
}
//When the user clicks the more info button it will give them more information about
//the Nobel Prize Winners outputted from their inputs
var info = "";
onEvent("MoreInfoButton", "click", function(){
   setScreen("MoreInformation");
   info = "";
   for(var i = 0; i<FilteredIndexList.length;i++){
info = info + FirstNameList[FilteredIndexList[i]]+" "+LastNameList[FilteredIndexList[i]]
+" was born on "+DOBList[FilteredIndexList[i]]+" in "
+ BirthCityList[FilteredIndexList[i]]+", "
+ BirthCountryList[FilteredIndexList[i]]
+" and won the Nobel Prize for "+CategoryList[FilteredIndexList[i]]+ " in "
+AwardYearList[FilteredIndexList[i]]+", "+ MotivationList[FilteredIndexList[i]]+"." 
+ "\n" + "\n";
   }
setText("MoreInfoOutput",info);
if(FilteredIndexList==0){
  setText("MoreInfoOutput","No Data Available");
}
});
//Takes the user back to the home screen
onEvent("backButton", "click", function( ) {
  setScreen("HomeScreen");
  FilteredIndexList=[];
});
