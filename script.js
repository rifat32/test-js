</script>


<script>
/*<![CDATA[*/

var permanentAddressSelectionWarningMessage = "\u0986\u09AA\u09A8\u09BF \u0986\u09AA\u09A8\u09BE\u09B0 \u0985\u09AB\u09BF\u09B8 \u099F\u09BE\u0987\u09AA \u09B9\u09BF\u09B8\u09C7\u09AC\u09C7 \u09B8\u09CD\u09A5\u09BE\u09DF\u09C0 \u09A0\u09BF\u0995\u09BE\u09A8\u09BE \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8 \u0995\u09B0\u09C7\u099B\u09C7\u09A8\u0964 \u09A4\u09BE\u0987 \u0986\u09AA\u09A8\u09BE\u09B0 \u09B8\u09CD\u09A5\u09BE\u09DF\u09C0 \u09A0\u09BF\u0995\u09BE\u09A8\u09BE \u0985\u09AC\u09B6\u09CD\u09AF\u0987 \u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6\u09C7 \u09B9\u09A4\u09C7 \u09B9\u09AC\u09C7\u0964 \u09AF\u09A6\u09BF \u0986\u09AA\u09A8\u09BE\u09B0 \u09B8\u09CD\u09A5\u09BE\u09DF\u09C0 \u09A0\u09BF\u0995\u09BE\u09A8\u09BE \u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6\u09C7 \u09A8\u09BE \u09B9\u09DF, \u09A4\u09BE\u09B9\u09B2\u09C7 \u0985\u09AB\u09BF\u09B8 \u099F\u09BE\u0987\u09AA \u09B9\u09BF\u09B8\u09C7\u09AC\u09C7 \u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u09AE\u09BF\u09B6\u09A8 \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8 \u0995\u09B0\u09C1\u09A8\u0964";
var presentAddressSelectionWarningMessage = "\u0986\u09AA\u09A8\u09BF \u0986\u09AA\u09A8\u09BE\u09B0 \u0985\u09AB\u09BF\u09B8 \u099F\u09BE\u0987\u09AA \u09B9\u09BF\u09B8\u09C7\u09AC\u09C7 \u09AC\u09B0\u09CD\u09A4\u09AE\u09BE\u09A8 \u09A0\u09BF\u0995\u09BE\u09A8\u09BE \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8 \u0995\u09B0\u09C7\u099B\u09C7\u09A8\u0964 \u09A4\u09BE\u0987 \u0986\u09AA\u09A8\u09BE\u09B0 \u09AC\u09B0\u09CD\u09A4\u09AE\u09BE\u09A8 \u09A0\u09BF\u0995\u09BE\u09A8\u09BE \u0985\u09AC\u09B6\u09CD\u09AF\u0987 \u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6\u09C7 \u09B9\u09A4\u09C7 \u09B9\u09AC\u09C7\u0964 \u09AF\u09A6\u09BF \u0986\u09AA\u09A8\u09BE\u09B0 \u09AC\u09B0\u09CD\u09A4\u09AE\u09BE\u09A8 \u09A0\u09BF\u0995\u09BE\u09A8\u09BE \u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6\u09C7 \u09A8\u09BE \u09B9\u09DF, \u09A4\u09BE\u09B9\u09B2\u09C7 \u0985\u09AB\u09BF\u09B8 \u099F\u09BE\u0987\u09AA \u09B9\u09BF\u09B8\u09C7\u09AC\u09C7 \u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u09AE\u09BF\u09B6\u09A8 \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8 \u0995\u09B0\u09C1\u09A8\u0964";

function hideAllOptionsInCountrySelectListExceptBdInAGeoGroup( geoGroupToHideCountries ){

$( "#" + geoGroupToHideCountries + "Country option" ).hide();

$( "#" + geoGroupToHideCountries + "Country option[value=-1]" ).show();
$( "#" + geoGroupToHideCountries + "Country option[value=" + bangladeshId + "]" ).show();

if( typeof publicPage != 'undefined' && publicPage == true ){

    $( "#" + geoGroupToHideCountries + "Country" ).val(-1);
}
else{

    $( "#" + geoGroupToHideCountries + "Country" ).val( bangladeshId );
}

}

function showAllOptionsInCountrySelectListInAGeoGroup( geoGroupToShowCountries ){

$( "#" + geoGroupToShowCountries + "Country option" ).show();
}

$( "#brOfficeSelectionNextBtn" ).on( "click", function(e){

var officeAddressType = $("input[type='radio'][name='officeAddressType']:checked").val();

if( officeAddressType == 'BIRTHPLACE' ){

    var birthPlaceCountryId = $( "#" + birthPlaceGeoGroup + "Country" ).val();

    if( birthPlaceCountryId != bangladeshId ){

        resetAllElementsInGeoGroup( birthPlaceGeoGroup );
    }

    hideAllOptionsInCountrySelectListExceptBdInAGeoGroup( birthPlaceGeoGroup );
    showAllOptionsInCountrySelectListInAGeoGroup( permanentAddressGeoGroup );
    showAllOptionsInCountrySelectListInAGeoGroup( presentAddressGeoGroup );
}
else if( officeAddressType == 'PERMANENT' ){

    var permAddrCountryId = $( "#" + permanentAddressGeoGroup + "Country" ).val();

    if( permAddrCountryId != bangladeshId ){

        resetAllElementsInGeoGroup( permanentAddressGeoGroup );
    }

    hideAllOptionsInCountrySelectListExceptBdInAGeoGroup( permanentAddressGeoGroup );
    showAllOptionsInCountrySelectListInAGeoGroup( birthPlaceGeoGroup );
    showAllOptionsInCountrySelectListInAGeoGroup( presentAddressGeoGroup );
}
else if( officeAddressType == 'PRESENT' ){

    var prsntAddrCountryId = $( "#" + presentAddressGeoGroup + "Country" ).val();

    if( prsntAddrCountryId != bangladeshId ){

        resetAllElementsInGeoGroup( presentAddressGeoGroup );
    }

    hideAllOptionsInCountrySelectListExceptBdInAGeoGroup( presentAddressGeoGroup );
    showAllOptionsInCountrySelectListInAGeoGroup( permanentAddressGeoGroup );
    showAllOptionsInCountrySelectListInAGeoGroup( birthPlaceGeoGroup );
}
});

$( document ).on( "change", "input:radio[name='permanentAddress']:checked", function(){

var permanentAddressTypeVal = $("input[name='permanentAddress']:checked").val();
var officeAddressType = $("input[type='radio'][name='officeAddressType']:checked").val();

if( permanentAddressTypeVal != 'NONE' && officeAddressType == 'PERMANENT' ){

    $( "#warning-message-span" ).text( permanentAddressSelectionWarningMessage );
    $( "#warning-message-div" ).show();
}
});

$( document ).on( "change", "input:radio[name='presentAddress']:checked", function(){

var presentAddressTypeVal = $("input[name='presentAddress']:checked").val();
var officeAddressType = $("input[type='radio'][name='officeAddressType']:checked").val();

if( presentAddressTypeVal != 'NONE' && officeAddressType == 'PRESENT' ){

    $( "#warning-message-span" ).text( presentAddressSelectionWarningMessage );
    $( "#warning-message-div" ).show();
}
});

$(document).ready( function(){

});

/*]]>*/
</script>


<script>
/*<![CDATA[*/

var textboxRequired = "\u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0998\u09B0\u099F\u09BF \u09AA\u09C2\u09B0\u09A3 \u0995\u09B0\u09C1\u09A8!";
var textboxMinlength = "\u09B8\u09B0\u09CD\u09AC\u09A8\u09BF\u09AE\u09CD\u09A8 {0} \u0985\u0995\u09CD\u09B7\u09B0 \u09B9\u09A4\u09C7 \u09B9\u09AC\u09C7!";
var textboxMaxlength = "\u09B8\u09B0\u09CD\u09AC\u09CB\u099A\u09CD\u099A {0} \u0985\u0995\u09CD\u09B7\u09B0 \u09B2\u09C7\u0996\u09BE \u09AF\u09BE\u09AC\u09C7!";
var textboxLettersonly = "\u09B6\u09C1\u09A7\u09C1\u09AE\u09BE\u09A4\u09CD\u09B0 \u0985\u0995\u09CD\u09B7\u09B0 \u09B2\u09C7\u0996\u09BE \u09AF\u09BE\u09AC\u09C7!";
var textboxEnglishLettersOnly = "\u09B6\u09C1\u09A7\u09C1\u09AE\u09BE\u09A4\u09CD\u09B0 \u0987\u0982\u09B0\u09C7\u099C\u09BF \u0985\u0995\u09CD\u09B7\u09B0 \u09B2\u09C7\u0996\u09BE \u09AF\u09BE\u09AC\u09C7!";
var textboxBanglaLettersOnly = "\u09B6\u09C1\u09A7\u09C1\u09AE\u09BE\u09A4\u09CD\u09B0 \u09AC\u09BE\u0982\u09B2\u09BE \u0985\u0995\u09CD\u09B7\u09B0 \u09B2\u09C7\u0996\u09BE \u09AF\u09BE\u09AC\u09C7!";
var textboxDigits = "\u09B6\u09C1\u09A7\u09C1\u09AE\u09BE\u09A4\u09CD\u09B0 \u0987\u0982\u09B0\u09C7\u099C\u09BF \u09B8\u0982\u0996\u09CD\u09AF\u09BE \u09B2\u09C7\u0996\u09BE \u09AF\u09BE\u09AC\u09C7!";
var textboxAlphanumeric = "\u09B6\u09C1\u09A7\u09C1\u09AE\u09BE\u09A4\u09CD\u09B0 \u0985\u0995\u09CD\u09B7\u09B0 \u0993 \u09B8\u0982\u0996\u09CD\u09AF\u09BE \u09B2\u09C7\u0996\u09BE \u09AF\u09BE\u09AC\u09C7!";
var textboxNumber = "\u09B6\u09C1\u09A7\u09C1\u09AE\u09BE\u09A4\u09CD\u09B0 \u0987\u0982\u09B0\u09C7\u099C\u09BF \u09B8\u0982\u0996\u09CD\u09AF\u09BE \u09B2\u09C7\u0996\u09BE \u09AF\u09BE\u09AC\u09C7!";

var dobEqualMsg = "\u099C\u09A8\u09CD\u09AE\u09A4\u09BE\u09B0\u09BF\u0996\u099F\u09BF \u09AA\u09C2\u09B0\u09CD\u09AC\u09C7 \u09AA\u09CD\u09B0\u09A6\u09BE\u09A8\u0995\u09C3\u09A4 \u099C\u09A8\u09CD\u09AE\u09A4\u09BE\u09B0\u09BF\u0996\u09C7\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09AE\u09C7\u09B2\u09C7\u09A8\u09BF";
var dodEqualMsg = "\u09AE\u09C3\u09A4\u09CD\u09AF\u09C1\u09B0 \u09A4\u09BE\u09B0\u09BF\u0996\u099F\u09BF \u09AA\u09C2\u09B0\u09CD\u09AC\u09C7 \u09AA\u09CD\u09B0\u09A6\u09BE\u09A8\u0995\u09C3\u09A4 \u09AE\u09C3\u09A4\u09CD\u09AF\u09C1\u09B0 \u09A4\u09BE\u09B0\u09BF\u0996\u09C7\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09AE\u09C7\u09B2\u09C7\u09A8\u09BF";
var passwordEqualMsg = "\u09AA\u09BE\u09B8\u0993\u09DF\u09BE\u09B0\u09CD\u09A1 \u09AE\u09C7\u09B2\u09C7\u09A8\u09BF";

var radioCheckboxSelectRequired = "\u09AF\u09C7\u0995\u09CB\u09A8\u09CB \u098F\u0995\u099F\u09BF \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8 \u0995\u09B0\u09C1\u09A8!";

var personAliveRequiredMsg = "\u098F\u0987 \u09AC\u09CD\u09AF\u0995\u09CD\u09A4\u09BF \u0987\u09A4\u09BF\u09AE\u09A7\u09CD\u09AF\u09C7 \u09AE\u09C3\u09A4\u09CD\u09AF\u09C1 \u09A8\u09BF\u09AC\u09A8\u09CD\u09A7\u09A8 \u09A8\u09A5\u09BF\u09AD\u09C1\u0995\u09CD\u09A4 \u0995\u09B0\u09BE \u09B9\u09AF\u09BC\u09C7\u099B\u09C7";

var usernameAvailableRequiredMsg = "\u098F\u0987 \u0987\u0989\u099C\u09BE\u09B0\u09A8\u09C7\u09AE \u0987\u09A4\u09CB\u09AE\u09A7\u09CD\u09AF\u09C7 \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7";

var dateValidFormat = "\u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u09B8\u09A0\u09BF\u0995\u09AD\u09BE\u09AC\u09C7 \u09A4\u09BE\u09B0\u09BF\u0996 \u09B2\u09BF\u0996\u09C1\u09A8!";
var dateNotFuture = "\u09AD\u09AC\u09BF\u09B7\u09CD\u09AF\u09A4\u09C7\u09B0 \u09A4\u09BE\u09B0\u09BF\u0996 \u09B2\u09C7\u0996\u09BE \u09AF\u09BE\u09AC\u09C7 \u09A8\u09BE!";


var fileRequired = "\u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u098F\u0995\u099F\u09BF \u09AB\u09BE\u0987\u09B2 \u09AA\u09CD\u09B0\u09A6\u09BE\u09A8 \u0995\u09B0\u09C1\u09A8!";
var fileExtension = "\u09AB\u09BE\u0987\u09B2 \u099F\u09BE\u0987\u09AA {0} \u09B9\u09A4\u09C7 \u09B9\u09AC\u09C7!";
var fileSize = "\u09AB\u09BE\u0987\u09B2 \u098F\u09B0 \u09B8\u09BE\u0987\u099C  \u09EB \u0995\u09BF\u09B2\u09CB\u09AC\u09BE\u0987\u099F \u098F\u09B0 \u09AC\u09C7\u09B6\u09BF \u09B9\u09A4\u09C7 \u09AA\u09BE\u09B0\u09AC\u09C7 \u09A8\u09BE!";

var minGapInDaysAmongUterineSiblingsInBrApplication = "180";

/*]]>*/
</script>


<script>
/*<![CDATA[*/


$.validator.setDefaults({

    ignore: ':hidden, [readonly=readonly], *:not([name])',

    debug: true,

    errorElement: 'div',

    errorClass: 'invalid-feedback',

    errorPlacement: function (error, element) {

        if (element.prop('type') == 'radio' && $(element).attr('name') == 'officeAddressType') {

            var group = $('input:radio[name="officeAddressType"]');
            var radioElement;

            for (var i = 0; i < group.length; ++i) {

                radioElement = $(group[i]);
            }
            var lastElementParent = radioElement.parent();
            error.insertAfter(lastElementParent.parent());
        } else if (element.prop('type') == 'radio' && $(element).attr('name') == 'gender') {

            var group = $('input:radio[name="gender"]');
            var radioElement;

            for (var i = 0; i < group.length; ++i) {

                radioElement = $(group[i]);
            }
            var lastElementParent = radioElement.parent();
            error.insertAfter(lastElementParent.parent());
        } else if (element.prop('type') == 'radio' && $(element).attr('name') == 'relationWithApplicant') {

            var group = $('input:radio[name="relationWithApplicant"]');
            var radioElement;

            for (var i = 0; i < group.length; ++i) {

                radioElement = $(group[i]);
            }
            var lastElementParent = radioElement.parent();
            error.insertAfter(lastElementParent.parent());
        } else if (element.prop('type') == 'radio' && $(element).attr('name') == 'reportFlag') {

            var group = $('input:radio[name="reportFlag"]');
            var radioElement;

            for (var i = 0; i < group.length; ++i) {

                radioElement = $(group[i]);
            }
            var lastElementParent = radioElement.parent();
            error.insertAfter(lastElementParent.parent());
        } else if (element.prop('type') == 'radio' && $(element).attr('name') == 'permanentAddress') {

            var group = $('input:radio[name="permanentAddress"]');
            var radioElement;

            for (var i = 0; i < group.length; ++i) {

                radioElement = $(group[i]);
            }
            var lastElementParent = radioElement.parent();
            error.insertAfter(lastElementParent.parent());
        } else if (element.prop('type') == 'radio' && $(element).attr('name') == 'presentAddress') {

            var group = $('input:radio[name="presentAddress"]');
            var radioElement;

            for (var i = 0; i < group.length; ++i) {

                radioElement = $(group[i]);
            }
            var lastElementParent = radioElement.parent();
            error.insertAfter(lastElementParent.parent());
        } else if (element.prop('type') == 'text' && $(element).attr('name') == 'personBirthDate') {
            var group = $('input:text[name="personBirthDate"]');
            var radioElement;
            for (var i = 0; i < group.length; ++i) {
                radioElement = $(group[i]);
            }
            var lastElementParent = radioElement.parent();
            error.insertAfter(lastElementParent);
        } else if (element.prop('type') == 'text' && $(element).attr('name') == 'reportFromDate') {
            var group = $('input:text[name="reportFromDate"]');
            var radioElement;
            for (var i = 0; i < group.length; ++i) {
                radioElement = $(group[i]);
            }
            var lastElementParent = radioElement.parent();
            lastElementParent.append(error);
        } else if (element.prop('type') == 'text' && $(element).attr('name') == 'reportToDate') {
            var group = $('input:text[name="reportToDate"]');
            var selectElement;
            for (var i = 0; i < group.length; ++i) {
                selectElement = $(group[i]);
            }
            var lastElementParent = selectElement.parent();
            lastElementParent.append(error);
        } else if (element.prop('type') == 'text' && $(element).attr('name') == 'brSearchDob') {
            var group = $('input:text[name="brSearchDob"]');
            var radioElement;
            for (var i = 0; i < group.length; ++i) {
                radioElement = $(group[i]);
            }
            var lastElementParent = radioElement.parent();
            error.append(lastElementParent);
        } else if (element.prop('type') == 'text' && $(element).attr('name') == 'drSearchDod') {

            var group = $('input:text[name="drSearchDod"]');
            var radioElement;
            for (var i = 0; i < group.length; ++i) {
                radioElement = $(group[i]);
            }
            var lastElementParent = radioElement.parent();
            error.insertAfter(lastElementParent);
        } else if (element.prop('type') == 'text' && $(element).attr('name') == 'registrationDate') {
            var group = $('input:text[name="registrationDate"]');
            var radioElement;
            for (var i = 0; i < group.length; ++i) {
                radioElement = $(group[i]);
            }
            var lastElementParent = radioElement.parent();
            error.insertAfter(lastElementParent);
        } else if (element.prop('type') == 'text' && $(element).attr('name') == 'issueDate') {
            var group = $('input:text[name="issueDate"]');
            var radioElement;
            for (var i = 0; i < group.length; ++i) {
                radioElement = $(group[i]);
            }
            var lastElementParent = radioElement.parent();
            error.insertAfter(lastElementParent);
        } else if (element.prop('type') == 'text' && $(element).attr('name') == 'father.personBirthDate') {

            var group = $('input:text[name="father.personBirthDate"]');
            var radioElement;

            for (var i = 0; i < group.length; ++i) {

                radioElement = $(group[i]);
            }
            var lastElementParent = radioElement.parent();
            error.insertAfter(lastElementParent);
        } else if (element.prop('type') == 'text' && $(element).attr('name') == 'mother.personBirthDate') {

            var group = $('input:text[name="mother.personBirthDate"]');
            var radioElement;

            for (var i = 0; i < group.length; ++i) {

                radioElement = $(group[i]);
            }
            var lastElementParent = radioElement.parent();
            error.insertAfter(lastElementParent);
        } else if (element.prop('type') == 'text' && $(element).attr('name') == 'repeatedPersonBirthDate') {

            var group = $('input:text[name="repeatedPersonBirthDate"]');
            var radioElement;

            for (var i = 0; i < group.length; ++i) {

                radioElement = $(group[i]);
            }
            var lastElementParent = radioElement.parent();
            error.insertAfter(lastElementParent);
        } else if (element.prop('type') == 'text' && $(element).attr('name') == 'personDeathDate') {

            var group = $('input:text[name="personDeathDate"]');
            var radioElement;

            for (var i = 0; i < group.length; ++i) {

                radioElement = $(group[i]);
            }
            var lastElementParent = radioElement.parent().parent();
            error.addClass('col-md-6');
            error.appendTo(lastElementParent);
        } else if (element.prop('type') == 'text' && $(element).attr('name') == 'repeatedPersonDeathDate') {

            var group = $('input:text[name="repeatedPersonDeathDate"]');
            var radioElement;

            for (var i = 0; i < group.length; ++i) {

                radioElement = $(group[i]);
            }

            var lastElementParent = radioElement.parent().parent();
            error.addClass('col-md-6');
            error.appendTo(lastElementParent);
        } else if (element.prop('type') == 'text' && $(element).attr('name') == 'expiryDate') {

            var group = $('input:text[name="expiryDate"]');
            var radioElement;

            for (var i = 0; i < group.length; ++i) {

                radioElement = $(group[i]);
            }
            var lastElementParent = radioElement.parent().parent();
            error.addClass('col-md-6');
            error.appendTo(lastElementParent);
        } else if (element.prop('type') == 'text' && $(element).attr('name') == 'activationDate') {

            var group = $('input:text[name="activationDate"]');
            var radioElement;

            for (var i = 0; i < group.length; ++i) {

                radioElement = $(group[i]);
            }
            var lastElementParent = radioElement.parent().parent();
            error.addClass('col-md-6');
            error.appendTo(lastElementParent);
        } else if (element.prop('type') == 'text' && $(element).attr('name') == 'birthPlaceAndDobVerificationDate') {

            var group = $('input:text[name="birthPlaceAndDobVerificationDate"]');
            var radioElement;

            for (var i = 0; i < group.length; ++i) {

                radioElement = $(group[i]);
            }
            var lastElementParent = radioElement.parent().parent();
            error.addClass('col-md-6');
            error.appendTo(lastElementParent);
        } else if (element.prop('type') == 'text' && $(element).attr('name') == 'permAddrVerificationDate') {

            var group = $('input:text[name="permAddrVerificationDate"]');
            var radioElement;

            for (var i = 0; i < group.length; ++i) {

                radioElement = $(group[i]);
            }
            var lastElementParent = radioElement.parent().parent();
            error.addClass('col-md-6');
            error.appendTo(lastElementParent);
        } else {
            error.insertAfter(element);
        }
    },

    highlight: function (element, errorClass, validClass) {

        $(element).removeClass("is-valid").addClass("is-invalid");
    },

    unhighlight: function (element, errorClass, validClass) {

        $(element).removeClass("is-invalid").addClass("is-valid");
    },

    rules: {

        // office Address
        officeAddressType: {

            required: true
        },

        officeAddrDiv: {

            dropdown: true
        },

        officeAddrDist: {

            dropdown: true
        },

        officeAddrCountry: {

            dropdown: true
        },

        officeAddrCityCorpCantOrUpazila: {

            dropdown: true
        },

        officeAddrPaurasavaOrUnion: {

            dropdown: true
        },

        officeAddrWardInCityCorp: {

            geoLocationDropdown: true
        },

        officeAddrArea: {

            dropdown: true
        },

        officeAddrCity: {

            dropdown: true
        },

        officeAddrWardInPaurasavaOrUnion: {

            geoLocationDropdown: true
        },

        attachments: {

            extension: "jpeg,jpg,pdf,png",
            limitFileSize: 512000
        },

        // person info
        personNameBn: {

            required: true,
            banglaLettersOnly: true,
            minlength: 2,
            maxlength: 120
        },

        personFirstNameBn: {
            required: true,
            banglaLettersOnly: true,
            minlength: 2,
            maxlength: 120
        },

        personLastNameBn: {

            required: true,
            banglaLettersOnly: true,
            minlength: 2,
            maxlength: 120
        },

        personNameEn: {

            required: true,
            englishLettersOnly: true,
            minlength: 2,
            maxlength: 120
        },

        personFirstNameEn: {
            required: true,
            englishLettersOnly: true,
            minlength: 2,
            maxlength: 120
        },

        personLastNameEn: {

            required: true,
            englishLettersOnly: false,
            minlength: 2,
            maxlength: 120
        },

        personBirthDate: {
            required: true,
            dateFormatValidate: true,
            notFutureDate: true
        },
        repeatedPersonBirthDate: {
            required: true,
            dateFormatValidate: true,
            notFutureDate: true,
            equalTo: "#personBirthDate"
        },
        reportFlag: {
            required: true,
        },
        reportFromDate: {
            required: true,
            dateFormatValidate: true,
            notFutureDate: true
        },
        reportToDate: {
            required: true,
            dateFormatValidate: true,
            notFutureDate: true
        },
        thChild: {

            required: true
        },

        gender: {

            required: true
        },

        // father

        "father.personNameBn": {

            required: true,
            banglaLettersOnly: true,
            minlength: 2,
            maxlength: 120
        },

        "father.personNameEn": {

            required: true,
            englishLettersOnly: true,
            minlength: 2,
            maxlength: 120
        },

        "ubrn": {
            required: true,
            digits: true,
            minlength: 17,
            maxlength: 17,
        },

        "father.ubrn": {

            required: function (element) {

                return parentsUbrnMandatory && !ignoreFatherUbrnFieldRequiredCheck;
            },
            digits: true,
            minlength: 17,
            maxlength: 17,
            fatherZeroBirthRecord: true,
            fatherMultipleBirthRecord: true,
            fatherGenderNotMale: true,
            fatherDobBeforePersonDob: true
        },

        "father.personBirthDate": {

            required: function (element) {

                return parentsUbrnMandatory;
            },
            dateFormatValidate: true,
            notFutureDate: true
        },

        "personNid": {

            digits: true,
            minlength: 10,
            maxlength: 17
        },

        "father.personNid": {

            /*required: function(element) {
                return $("#fatherBrn").val().length == 0;
            },*/
            digits: true,
            minlength: 10,
            maxlength: 17
        },

        "father.passportNumber": {

            //required: true,
            alphanumeric: true,
            minlength: 3,
            maxlength: 20
        },

        "father.personNationality": {

            required: true,
            bothParentsBangladeshi: true,
            atleastOneParentBangladeshi: true
        },

        // mother

        "mother.personNameBn": {

            required: true,
            banglaLettersOnly: true,
            minlength: 2,
            maxlength: 120
        },

        "mother.personNameEn": {

            required: true,
            minlength: 2,
            maxlength: 120,
            englishLettersOnly: true
        },

        "mother.ubrn": {

            required: function (element) {

                return parentsUbrnMandatory && !ignoreMotherUbrnFieldRequiredCheck;
            },
            digits: true,
            minlength: 17,
            maxlength: 17,
            motherZeroBirthRecord: true,
            motherMultipleBirthRecord: true,
            motherGenderNotFemale: true,
            isGapAmongUterineSiblingsAccToPolicy: true,
            motherDobBeforePersonDob: true,
            isThChildAvailable: true
        },

        "mother.personBirthDate": {

            required: function (element) {

                return parentsUbrnMandatory;
            },
            dateFormatValidate: true,
            notFutureDate: true
        },

        "mother.personNid": {

            /*required: function(element) {
                return $("#motherBrn").val().length == 0;
            },*/
            digits: true,
            minlength: 10,
            maxlength: 17
        },

        "mother.passportNumber": {

            //required: true,
            alphanumeric: true,
            minlength: 3,
            maxlength: 20
        },

        "mother.personNationality": {

            required: true,
            bothParentsBangladeshi: true,
            atleastOneParentBangladeshi: true
        },

        phone: {

            required: true,
            maxlength: 30,
            digitOrPlus: true,
            bangladeshiPhoneNumberLengthRestriction: true,
            bangladeshiPhoneNumberDoubleZeroInPrefixRestriction: true
        },

        otp: {

            required: false
        },

        forgotPassOtp: {
            required: true
        },

        mobile: {

            required: true,
            maxlength: 30,
            digitOrPlus: true,
            bangladeshiPhoneNumberLengthRestriction: true,
            bangladeshiPhoneNumberDoubleZeroInPrefixRestriction: true
        },

        // permanent and present address selection

        permanentAddress: {

            required: true
        },

        presentAddress: {

            required: true
        },

        // applicant

        applicantName: {

            required: true,
            minlength: 2,
            maxlength: 120,
            //englishLettersOnly: true
        },

        applicantAddress: {

            required: true,
            minlength: 2,
            maxlength: 120
        },

        // applicant address for dr application
        applicantAddrDiv: {

            dropdown: true
        },

        applicantAddrDist: {

            dropdown: true
        },

        applicantAddrCountry: {

            dropdown: true
        },

        applicantAddrCityCorpCantOrUpazila: {

            dropdown: true
        },

        applicantAddrPaurasavaOrUnion: {

            dropdown: true
        },

        applicantAddrWardInCityCorp: {

            geoLocationDropdown: true
        },

        applicantAddrArea: {

            dropdown: true
        },

        applicantAddrCity: {

            dropdown: true
        },

        applicantAddrWardInPaurasavaOrUnion: {

            geoLocationDropdown: true
        },

        applicantAddrPostOfc: {

            required: true
        },

        applicantAddrVilAreaTownBn: {
            required: true,
            banglaLettersWithPunctuation: true
        },

        applicantAddrVilAreaTownEn: {

            required: true
        },

        applicantAddrHouseRoadBn: {

            //required: true
        },

        applicantAddrHouseRoadEn: {

            //required: true
        },

        applicantAddrPostCode: {

            required: true
        },

        applicantNid: {

            required: function (element) {

                return $("#applicantBrn").val().length == 0;
            },
            digits: true,
            minlength: 10,
            maxlength: 17
        },

        applicantBrn: {

            required: function (element) {

                return $("#applicantNid").val().length == 0;
            },
            digits: true,
            minlength: 17,
            maxlength: 17,
            isPersonAlive: true,
            notEqual: "#brSearchBrn"
        },

        relationWithApplicant: {

            required: true
        },

        applicantParentsBrn: {
            required: function (element) {
                return $("#applicantParentsBrn").val().length == 0;
            },
            digits: true,
            minlength: 17,
            maxlength: 17,
            isPersonAlive: true
        },

        applicantNotParentsBrn: {
            required: true,
            digits: true,
            minlength: 17,
            maxlength: 17,
            isPersonAlive: true
        },

        applicantNotParentsNid: {
            digits: true,
            minlength: 10,
            maxlength: 17
        },

        email: {

            email: true
        },

        // information provider

        informationProviderName: {

            required: true,
            minlength: 2,
            maxlength: 120,
            //englishLettersOnly: true
        },

        informationProviderBrn: {

            required: function (element) {

                return $("#informationProviderNid").val().length == 0;
            },
            digits: true,
            minlength: 17,
            maxlength: 17,
            isPersonAlive: true,
            notEqual: "#brSearchBrn"
        },

        informationProviderNid: {

            required: function (element) {

                return $("#informationProviderBrn").val().length == 0;
            },
            digits: true,
            minlength: 10,
            maxlength: 17
        },

        // birth place and dob information provider

        birthPlaceAndDobInformationProviderName: {

            required: true,
            minlength: 2,
            maxlength: 120,
            //englishLettersOnly: true
        },

        birthPlaceAndDobInformationProviderBrn: {

            required: function (element) {

                return $("#birthPlaceAndDobInformationProviderNid").val().length == 0;
            },
            digits: true,
            minlength: 17,
            maxlength: 17,
            isPersonAlive: true
        },

        birthPlaceAndDobInformationProviderNid: {

            required: function (element) {

                return $("#birthPlaceAndDobInformationProviderBrn").val().length == 0;
            },
            digits: true,
            minlength: 10,
            maxlength: 17
        },

        // permanent address information provider

        permAddrInformationProviderName: {

            required: true,
            minlength: 2,
            maxlength: 120,
            //englishLettersOnly: true
        },

        permAddrInformationProviderBrn: {

            required: function (element) {

                return $("#permAddrInformationProviderNid").val().length == 0;
            },
            digits: true,
            minlength: 17,
            maxlength: 17,
            isPersonAlive: true
        },

        permAddrInformationProviderNid: {

            required: function (element) {

                return $("#permAddrInformationProviderBrn").val().length == 0;
            },
            digits: true,
            minlength: 10,
            maxlength: 17
        },

        // birth place and dob information verifier

        birthPlaceAndDobVerifierName: {

            required: true,
            minlength: 2,
            maxlength: 120,
            //englishLettersOnly: true
        },

        birthPlaceAndDobVerifierBrn: {

            dropdown: true,
            isPersonAlive: true
        },

        birthPlaceAndDobVerifierNid: {

            required: function (element) {

                return $("#birthPlaceAndDobVerifierBrn").val() == -1;
            },
            digits: true,
            minlength: 10,
            maxlength: 17
        },

        birthPlaceAndDobVerificationDate: {

            required: true,
            dateFormatValidate: true,
            notFutureDate: true
        },

        // permanent address information provider

        permAddrVerifierName: {

            required: true,
            minlength: 2,
            maxlength: 120,
            //englishLettersOnly: true
        },

        permAddrVerifierBrn: {

            dropdown: true,
            isPersonAlive: true
        },

        permAddrVerifierNid: {

            required: function (element) {

                return $("#permAddrVerifierBrn").val() == -1;
            },
            digits: true,
            minlength: 10,
            maxlength: 17
        },

        permAddrVerificationDate: {

            required: true,
            dateFormatValidate: true,
            notFutureDate: true
        },

        // birth place

        birthPlaceDiv: {

            required: true,
            dropdown: true
        },

        birthPlaceDist: {

            required: true,
            dropdown: true
        },

        birthPlaceCountry: {

            required: true,
            dropdown: true
        },

        birthPlaceCityCorpCantOrUpazila: {

            required: true,
            dropdown: true
        },

        birthPlacePaurasavaOrUnion: {

            required: true,
            dropdown: true
        },

        birthPlaceWardInCityCorp: {

            required: true,
            geoLocationDropdown: true
        },

        birthPlaceArea: {

            required: true,
            dropdown: true
        },

        birthPlaceCity: {

            required: true,
            dropdown: true
        },

        birthPlaceWardInPaurasavaOrUnion: {

            required: true,
            geoLocationDropdown: true
        },

        birthPlacePostOfc: {

            required: true
        },

        birthPlaceVilAreaTownBn: {
            required: true,
            banglaAlphaNumericWithPunctuation: true,
            minlength: 2,
            maxlength: 120
        },

        birthPlaceVilAreaTownEn: {
            minlength: 2,
            maxlength: 120,
            required: true
        },

        birthPlaceHouseRoadBn: {
            banglaAlphaNumericWithPunctuation: true,
            minlength: 2,
            maxlength: 120
        },

        birthPlaceHouseRoadEn: {
            minlength: 2,
            maxlength: 120
        },

        // permanent address

        permAddrDiv: {
            required: true,
            dropdown: true
        },

        permAddrDist: {
            required: true,
            dropdown: true
        },

        permAddrCountry: {
            required: true,
            dropdown: true
        },

        permAddrCityCorpCantOrUpazila: {
            required: true,
            dropdown: true
        },

        permAddrPaurasavaOrUnion: {

            required: true,
            dropdown: true
        },

        permAddrWardInCityCorp: {

            required: true,
            geoLocationDropdown: true
        },

        permAddrArea: {

            required: true,
            dropdown: true
        },

        permAddrCity: {

            required: true,
            dropdown: true
        },

        permAddrWardInPaurasavaOrUnion: {

            required: true,
            geoLocationDropdown: true
        },

        permAddrPostOfc: {

            required: true
        },

        permAddrVilAreaTownBn: {
            required: true,
            banglaAlphaNumericWithPunctuation: true,
        },

        permAddrVilAreaTownEn: {

            required: true
        },

        permAddrHouseRoadBn: {

            //required: true
        },

        permAddrHouseRoadEn: {

            //required: true
        },

        // present address

        prsntAddrDiv: {

            required: true,
            dropdown: true
        },

        prsntAddrDist: {

            required: true,
            dropdown: true
        },

        prsntAddrCountry: {

            required: true,
            dropdown: true
        },

        prsntAddrCityCorpCantOrUpazila: {

            required: true,
            dropdown: true
        },

        prsntAddrPaurasavaOrUnion: {

            required: true,
            dropdown: true
        },

        prsntAddrWardInCityCorp: {

            required: true,
            geoLocationDropdown: true
        },

        prsntAddrArea: {

            required: true,
            dropdown: true
        },

        prsntAddrCity: {

            required: true,
            dropdown: true
        },

        prsntAddrWardInPaurasavaOrUnion: {

            required: true,
            geoLocationDropdown: true
        },

        prsntAddrPostOfc: {

            required: true
        },

        prsntAddrVilAreaTownBn: {
            required: true,
            banglaAlphaNumericWithPunctuation: true,
        },

        prsntAddrVilAreaTownEn: {

            required: true
        },

        prsntAddrHouseRoadBn: {

            //required: true
        },

        prsntAddrHouseRoadEn: {

            //required: true
        },

        // correction and reprint ubrn search validation

        "brSearchBrn": {

            required: true,
            digits: true,
            minlength: 17,
            maxlength: 17
        },

        "brSearchAliveBrn": {

            required: true,
            digits: true,
            minlength: 17,
            maxlength: 17,
            isPersonAlive: true
        },
        "brSearchAliveBrnCorr": {
            required: true,
            digits: true,
            isPersonAlive: true
        },
        "brSearchDob": {

            required: true,
            dateFormatValidate: true,
            notFutureDate: true
        },

        // correction and reprint udrn search validation

        "drSearchDrn": {

            required: true,
            digits: true,
            minlength: 17,
            maxlength: 17
        },

        "drSearchDod": {

            required: true,
            dateFormatValidate: true,
            notFutureDate: true
        },

        // certificate cancellation

        causeOfCancellation: {

            required: true,
            dropdown: true
        },

        // person death info
        personDeathDate: {

            required: true,
            dateFormatValidate: true,
            notFutureDate: true
        },

        repeatedPersonDeathDate: {

            required: true,
            dateFormatValidate: true,
            notFutureDate: true,
            equalTo: "#personDeathDate"
        },
        causeOfDeath: {

            dropdown: true
        },
        spouseName: {

            //required: true,
            //englishLettersOnly: true,
            minlength: 2,
            maxlength: 120
        },
        spouseBrn: {

            //required: true,
            digits: true,
            minlength: 17,
            maxlength: 17
        },
        spouseNid: {

            //required: true,
            digits: true,
            minlength: 10,
            maxlength: 17
        },

        // death place
        deathPlaceDiv: {

            dropdown: true
        },

        deathPlaceDist: {

            dropdown: true
        },

        deathPlaceCountry: {

            dropdown: true
        },

        deathPlaceCityCorpCantOrUpazila: {

            dropdown: true
        },

        deathPlacePaurasavaOrUnion: {

            dropdown: true
        },

        deathPlaceWardInCityCorp: {

            geoLocationDropdown: true
        },

        deathPlaceArea: {

            dropdown: true
        },

        deathPlaceCity: {

            dropdown: true
        },

        deathPlaceWardInPaurasavaOrUnion: {

            geoLocationDropdown: true
        },

        deathPlacePostOfc: {
            required: true
        },

        deathPlaceVilAreaTownBn: {
            required: true,
            banglaAlphaNumericWithPunctuation: true
        },

        deathPlaceVilAreaTownEn: {

            required: true
        },

        deathPlaceHouseRoadBn: {

            //required: true
        },

        deathPlaceHouseRoadEn: {

            //required: true
        },

        deathPlacePostCode: {

            required: true
        },

        // death residence
        deathResidenceDiv: {

            dropdown: true
        },

        deathResidenceDist: {

            dropdown: true
        },

        deathResidenceCountry: {

            dropdown: true
        },

        deathResidenceCityCorpCantOrUpazila: {

            dropdown: true
        },

        deathResidencePaurasavaOrUnion: {

            dropdown: true
        },

        deathResidenceWardInCityCorp: {

            geoLocationDropdown: true
        },

        deathResidenceArea: {

            dropdown: true
        },

        deathResidenceCity: {

            dropdown: true
        },

        deathResidenceWardInPaurasavaOrUnion: {

            geoLocationDropdown: true
        },

        deathResidencePostOfc: {

            required: true
        },

        deathResidenceVilAreaTownBn: {
            required: true,
            banglaAlphaNumericWithPunctuation: true
        },

        deathResidenceVilAreaTownEn: {

            required: true
        },

        deathResidenceHouseRoadBn: {

            //required: true
        },

        deathResidenceHouseRoadEn: {

            //required: true
        },

        deathResidencePostCode: {

            required: true
        },

        // dr attachments
        brnRelatedAttachments: {

            extension: "jpeg,jpg,pdf,png",
            limitFileSize: 512000
        },
        deathRelatedAttachments: {

            extension: "jpeg,jpg,pdf,png",
            limitFileSize: 512000
        },

        username: {

            required: true,
            isUsernameAvailable: true
        },
        userId: {
            required: true,
        },

        password: {
            strongPassword: true,
            required: true
        },

        retype_password: {

            required: true,
            equalTo: "#password"
        },

        expiryDate: {

            required: true,
            dateFormatValidate: true,
        },

        // geolocation add

        geoLevelId: {

            dropdown: true
        },

        // parent geo for geolocation add according to geo type

        parentGeoAddrAccordingToGeoTypeDiv: {

            dropdown: true
        },

        parentGeoAddrAccordingToGeoTypeDist: {

            dropdown: true
        },

        parentGeoAddrAccordingToGeoTypeCountry: {

            dropdown: true
        },

        parentGeoAddrAccordingToGeoTypeCityCorpCantOrUpazila: {

            dropdown: true
        },

        parentGeoAddrAccordingToGeoTypePaurasavaOrUnion: {

            dropdown: true
        },

        parentGeoAddrAccordingToGeoTypeWardInCityCorp: {

            geoLocationDropdown: true
        },

        parentGeoAddrAccordingToGeoTypeArea: {

            dropdown: true
        },

        parentGeoAddrAccordingToGeoTypeCity: {

            dropdown: true
        },

        parentGeoAddrAccordingToGeoTypeWardInPaurasavaOrUnion: {

            geoLocationDropdown: true
        },

        // geolocation add form

        nameEn: {

            required: true,
            englishLettersOnly: true
        },

        nameBn: {

            required: true,
            banglaLettersOnly: true
        },

        geoNameEn: {

            required: true,
            alphanumeric: true
        },

        geoNameBn: {

            required: true,
            banglaAlphaNumericWithPunctuation: true
        },

        geoCode: {

            required: true,
            digits: true
        },

        rmoCode: {

            required: true,
            digits: true
        },

        population: {

            digits: true
        },

        popnYear: {

            digits: true
        },

        popnGrowthRate: {

            number: true
        },

        popnMale: {

            digits: true
        },

        popnFemale: {

            digits: true
        },

        //Office add/edit page
        addressEn: {

            required: true
        },

        addressBn: {

            required: true,
            banglaLettersWithPunctuation: true
        },

        officeNameBn: {

            required: true,
            banglaLettersOnly: true
        },

        officeNameEn: {

            required: true
        },

        lat: {

            required: true
        },

        lng: {

            required: true
        },

        registrarPostEn: {

            required: true
        },

        registrarPostBn: {

            required: true,
            banglaLettersOnly: true
        },

        // add payments config

        currency: {

            required: true
        },

        dobCorrectionCharge: {

            required: true
        },

        correctionFeeExceptDOB: {

            required: true
        },

        certificateDeliveryCharge: {

            required: true
        },

        certificateCopyDeliveryCharge: {

            required: true
        },

        certificateCancellationCharge: {

            required: true
        },

        vatPercentage: {

            required: true
        },

        activationDate: {

            required: true
        },

        //Nationality add/edit page
        nationalityEn: {
            required: true,
        },
        nationalityBn: {
            required: true,
            banglaLettersOnly: true
        },
        countryId: {
            required: true
        },
        // cancellation
        cancellationSearchType: {
            required: true
        },
        brCancellationSearchBrn1: {
            required: true,
            exactLength: 17,
            digits: true
        },
        brCancellationSearchBrn2: {
            required: true,
            exactLength: 17,
            digits: true
        },
        brCancellationSearchBrn3: {
            required: true,
            exactLength: 17,
            digits: true
        },
        brCancellationSearchBrn4: {
            required: true,
            exactLength: 17,
            digits: true
        },
        brCancellationSearchBrn5: {
            required: true,
            exactLength: 17,
            digits: true
        },
        drCancellationSearchBrn: {
            required: true,
            exactLength: 17,
            digits: true
        },
        registrationDate: {
            required: true,
            dateFormatValidate: true,
            notFutureDate: true
        },
        issueDate: {
            required: true,
            dateFormatValidate: true,
            notFutureDate: true
        },
        declaration: {
            required: true
        },
    },

    messages: {

        // office Address
        officeAddressType: {

            required: radioCheckboxSelectRequired
        },

        officeAddrDiv: {

            dropdown: radioCheckboxSelectRequired
        },

        officeAddrDist: {

            dropdown: radioCheckboxSelectRequired
        },

        officeAddrCountry: {

            dropdown: radioCheckboxSelectRequired
        },

        officeAddrCityCorpCantOrUpazila: {

            dropdown: radioCheckboxSelectRequired
        },

        officeAddrPaurasavaOrUnion: {

            dropdown: radioCheckboxSelectRequired
        },

        officeAddrWardInCityCorp: {

            geoLocationDropdown: radioCheckboxSelectRequired
        },

        officeAddrArea: {

            dropdown: radioCheckboxSelectRequired
        },

        officeAddrCity: {

            dropdown: radioCheckboxSelectRequired
        },

        officeAddrWardInPaurasavaOrUnion: {

            geoLocationDropdown: radioCheckboxSelectRequired
        },

        attachments: {

            extension: jQuery.validator.format(fileExtension),
            limitFileSize: fileSize
        },

        personNameBn: {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            banglaLettersOnly: textboxBanglaLettersOnly
        },

        personFirstNameBn: {
            textboxRequired,
            maxlength: jQuery.validator.format(textboxMaxlength),
            banglaLettersOnly: textboxBanglaLettersOnly
        },

        personLastNameBn: {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            banglaLettersOnly: textboxBanglaLettersOnly
        },

        personNameEn: {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            englishLettersOnly: textboxEnglishLettersOnly
        },

        personFirstNameEn: {
            textboxRequired,
            maxlength: jQuery.validator.format(textboxMaxlength),
            englishLettersOnly: textboxEnglishLettersOnly
        },

        personLastNameEn: {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            englishLettersOnly: textboxEnglishLettersOnly
        },

        personBirthDate: {
            required: textboxRequired,
            dateFormatValidate: dateValidFormat,
            notFutureDate: dateNotFuture
        },

        repeatedPersonBirthDate: {
            required: textboxRequired,
            dateFormatValidate: dateValidFormat,
            notFutureDate: dateNotFuture,
            equalTo: dobEqualMsg
        },

        reportFlag: {
            required: radioCheckboxSelectRequired,
        },
        reportFromDate: {
            required: textboxRequired,
            dateFormatValidate: dateValidFormat,
            notFutureDate: dateNotFuture
        },

        reportToDate: {
            required: textboxRequired,
            dateFormatValidate: dateValidFormat,
            notFutureDate: dateNotFuture
        },

        thChild: {

            required: radioCheckboxSelectRequired
        },

        gender: {

            required: radioCheckboxSelectRequired
        },

        // father

        "father.personNameBn": {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            banglaLettersOnly: textboxBanglaLettersOnly
        },

        "father.personNameEn": {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            englishLettersOnly: textboxEnglishLettersOnly
        },
        "ubrn": {
            required: textboxRequired,
            digits: textboxDigits,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
        },

        "father.ubrn": {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            digits: textboxDigits,
            fatherZeroBirthRecord: "Zero Birth Record Found With Father UBRN",
            fatherMultipleBirthRecord: "Multiple Birth Record Found With Father UBRN",
            fatherGenderNotMale: "Father's UBRN found record with Female Gender",
            fatherDobBeforePersonDob: "Parents must be older than child"
        },

        "father.personBirthDate": {

            required: textboxRequired,
            dateFormatValidate: dateValidFormat,
            notFutureDate: dateNotFuture
        },

        "personNid": {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            digits: textboxDigits
        },

        "father.personNid": {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            digits: textboxDigits
        },

        "father.passportNumber": {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            alphanumeric: textboxAlphanumeric
        },

        "father.personNationality": {

            required: radioCheckboxSelectRequired,
            bothParentsBangladeshi: "Both Parents need to be Bangladeshi",
            atleastOneParentBangladeshi: "At least One Parent need to be Bangladeshi"
        },

        // mother

        "mother.personNameBn": {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            banglaLettersOnly: textboxBanglaLettersOnly
        },

        "mother.personNameEn": {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            englishLettersOnly: textboxEnglishLettersOnly
        },

        "mother.ubrn": {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            digits: textboxDigits,
            motherZeroBirthRecord: "Zero Birth Record Found With Mother UBRN",
            motherMultipleBirthRecord: "Multiple Birth Record Found With Mother UBRN",
            motherGenderNotFemale: "Mother's UBRN found record with Male Gender",
            isGapAmongUterineSiblingsAccToPolicy: "Difference of age among children needs to be at least " + minGapInDaysAmongUterineSiblingsInBrApplication + " days",
            motherDobBeforePersonDob: "Parents must be older than child",
            isThChildAvailable: function () {

                var thChild = $("#thChild").val();
                return "Mother already has a " + thChild + "th Child";
            }
        },

        "mother.personBirthDate": {

            required: textboxRequired,
            dateFormatValidate: dateValidFormat,
            notFutureDate: dateNotFuture
        },

        "mother.personNid": {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            digits: textboxDigits
        },

        "mother.passportNumber": {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            alphanumeric: textboxAlphanumeric
        },

        "mother.personNationality": {

            required: radioCheckboxSelectRequired,
            bothParentsBangladeshi: "Both Parents need to be Bangladeshi",
            atleastOneParentBangladeshi: "At least One Parent need to be Bangladeshi"
        },

        phone: {

            required: textboxRequired,
            maxlength: jQuery.validator.format(textboxMaxlength),
            digitOrPlus: textboxDigits,
            bangladeshiPhoneNumberLengthRestriction: "Bangladeshi Phone Numbers need to contain 11 digits",
            bangladeshiPhoneNumberDoubleZeroInPrefixRestriction: "Bangladeshi Phone Numbers cannot start with Two Zeros"
        },

        otp: {

            required: textboxRequired
        },

        forgotPassOtp: {
            required: textboxRequired
        },

        mobile: {

            required: textboxRequired,
            maxlength: jQuery.validator.format(textboxMaxlength),
            digitOrPlus: textboxDigits,
            bangladeshiPhoneNumberLengthRestriction: "Bangladeshi Phone Numbers need to contain 11 digits",
            bangladeshiPhoneNumberDoubleZeroInPrefixRestriction: "Bangladeshi Phone Numbers cannot start with Two Zeros"
        },

        // permanent and present address selection

        permanentAddress: {

            required: radioCheckboxSelectRequired
        },

        presentAddress: {

            required: radioCheckboxSelectRequired
        },

        // applicant

        applicantName: {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            //englishLettersOnly: textboxEnglishLettersOnly
        },

        applicantAddress: {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
        },

        // applicant address for dr application
        applicantAddrDiv: {

            dropdown: radioCheckboxSelectRequired
        },

        applicantAddrDist: {

            dropdown: radioCheckboxSelectRequired
        },

        applicantAddrCountry: {

            dropdown: radioCheckboxSelectRequired
        },

        applicantAddrCityCorpCantOrUpazila: {

            dropdown: radioCheckboxSelectRequired
        },

        applicantAddrPaurasavaOrUnion: {

            dropdown: radioCheckboxSelectRequired
        },

        applicantAddrWardInCityCorp: {

            geoLocationDropdown: radioCheckboxSelectRequired
        },

        applicantAddrArea: {

            dropdown: radioCheckboxSelectRequired
        },

        applicantAddrCity: {

            dropdown: radioCheckboxSelectRequired
        },

        applicantAddrWardInPaurasavaOrUnion: {

            geoLocationDropdown: radioCheckboxSelectRequired
        },

        applicantAddrPostOfc: {

            required: textboxRequired
        },

        applicantAddrVilAreaTownBn: {
            required: textboxRequired,
            banglaAlphaNumericWithPunctuation: textboxBanglaLettersOnly
        },

        applicantAddrVilAreaTownEn: {
            required: textboxRequired
        },

        applicantAddrHouseRoadBn: {
            banglaAlphaNumericWithPunctuation: textboxBanglaLettersOnly
        },

        applicantAddrHouseRoadEn: {
            required: textboxRequired
        },

        applicantAddrPostCode: {
            required: textboxRequired
        },

        applicantNid: {
            required: textboxRequired,
            digits: textboxDigits,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength)
        },

        applicantBrn: {
            required: textboxRequired,
            digits: textboxDigits,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            isPersonAlive: personAliveRequiredMsg
        },

        relationWithApplicant: {
            required: radioCheckboxSelectRequired
        },
        applicantParentsBrn: {
            required: textboxRequired,
            digits: textboxDigits,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            isPersonAlive: personAliveRequiredMsg
        },
        applicantNotParentsBrn: {
            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            digits: textboxDigits,
            isPersonAlive: personAliveRequiredMsg
        },

        applicantNotParentsNid: {
            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            digits: textboxDigits
        },

        email: {
            email: "Email has to be in appropriate format like abc@def.com"
        },

        // information provider

        informationProviderName: {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            //englishLettersOnly: textboxEnglishLettersOnly
        },

        informationProviderBrn: {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            digits: textboxDigits,
            isPersonAlive: personAliveRequiredMsg
        },

        informationProviderNid: {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            digits: textboxDigits
        },

        // birth place and dob information provider

        birthPlaceAndDobInformationProviderName: {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            //englishLettersOnly: textboxEnglishLettersOnly
        },

        birthPlaceAndDobInformationProviderBrn: {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            digits: textboxDigits,
            isPersonAlive: personAliveRequiredMsg
        },

        birthPlaceAndDobInformationProviderNid: {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            digits: textboxDigits
        },

        // permanent address information provider

        permAddrInformationProviderName: {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            //englishLettersOnly: textboxEnglishLettersOnly
        },

        permAddrInformationProviderBrn: {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            digits: textboxDigits,
            isPersonAlive: personAliveRequiredMsg
        },

        permAddrInformationProviderNid: {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            digits: textboxDigits
        },

        // birth place and dob information verifier

        birthPlaceAndDobVerifierName: {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            //englishLettersOnly: textboxEnglishLettersOnly
        },

        birthPlaceAndDobVerifierBrn: {

            required: textboxRequired,
            dropdown: radioCheckboxSelectRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            digits: textboxDigits,
            isPersonAlive: personAliveRequiredMsg
        },

        birthPlaceAndDobVerifierNid: {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            digits: textboxDigits
        },

        birthPlaceAndDobVerificationDate: {

            required: textboxRequired,
            dateFormatValidate: dateValidFormat,
            notFutureDate: dateNotFuture
        },
        // permanent address information provider

        permAddrVerifierName: {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            //englishLettersOnly: textboxEnglishLettersOnly
        },

        permAddrVerifierBrn: {

            required: textboxRequired,
            dropdown: radioCheckboxSelectRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            digits: textboxDigits,
            isPersonAlive: personAliveRequiredMsg
        },

        permAddrVerifierNid: {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            digits: textboxDigits
        },

        permAddrVerificationDate: {

            required: textboxRequired,
            dateFormatValidate: dateValidFormat,
            notFutureDate: dateNotFuture
        },

        // birth place

        birthPlaceDiv: {

            required: radioCheckboxSelectRequired,
            dropdown: radioCheckboxSelectRequired
        },

        birthPlaceDist: {

            required: radioCheckboxSelectRequired,
            dropdown: radioCheckboxSelectRequired
        },

        birthPlaceCountry: {

            required: radioCheckboxSelectRequired,
            dropdown: radioCheckboxSelectRequired
        },

        birthPlaceCityCorpCantOrUpazila: {

            required: radioCheckboxSelectRequired,
            dropdown: radioCheckboxSelectRequired
        },

        birthPlacePaurasavaOrUnion: {

            required: radioCheckboxSelectRequired,
            dropdown: radioCheckboxSelectRequired
        },

        birthPlaceWardInCityCorp: {

            required: radioCheckboxSelectRequired,
            geoLocationDropdown: radioCheckboxSelectRequired
        },

        birthPlaceArea: {

            required: radioCheckboxSelectRequired,
            dropdown: radioCheckboxSelectRequired
        },

        birthPlaceCity: {

            required: radioCheckboxSelectRequired,
            dropdown: radioCheckboxSelectRequired
        },

        birthPlaceWardInPaurasavaOrUnion: {

            required: radioCheckboxSelectRequired,
            geoLocationDropdown: radioCheckboxSelectRequired
        },

        birthPlacePostOfc: {

            required: textboxRequired
        },

        birthPlaceVilAreaTownBn: {
            required: textboxRequired,
            banglaAlphaNumericWithPunctuation: textboxBanglaLettersOnly
        },

        birthPlaceVilAreaTownEn: {
            required: textboxRequired
        },

        birthPlaceHouseRoadBn: {
            banglaAlphaNumericWithPunctuation: textboxBanglaLettersOnly
        },

        birthPlaceHouseRoadEn: {

            required: textboxRequired
        },

        // permanent address

        permAddrDiv: {

            required: radioCheckboxSelectRequired,
            dropdown: radioCheckboxSelectRequired
        },

        permAddrDist: {

            required: radioCheckboxSelectRequired,
            dropdown: radioCheckboxSelectRequired
        },

        permAddrCountry: {

            required: radioCheckboxSelectRequired,
            dropdown: radioCheckboxSelectRequired
        },

        permAddrCityCorpCantOrUpazila: {

            required: radioCheckboxSelectRequired,
            dropdown: radioCheckboxSelectRequired
        },

        permAddrPaurasavaOrUnion: {

            required: radioCheckboxSelectRequired,
            dropdown: radioCheckboxSelectRequired
        },

        permAddrWardInCityCorp: {

            required: radioCheckboxSelectRequired,
            geoLocationDropdown: radioCheckboxSelectRequired
        },

        permAddrArea: {

            required: radioCheckboxSelectRequired,
            dropdown: radioCheckboxSelectRequired
        },

        permAddrCity: {

            required: radioCheckboxSelectRequired,
            dropdown: radioCheckboxSelectRequired
        },

        permAddrWardInPaurasavaOrUnion: {

            required: radioCheckboxSelectRequired,
            geoLocationDropdown: radioCheckboxSelectRequired
        },

        permAddrPostOfc: {

            required: textboxRequired
        },

        permAddrVilAreaTownBn: {
            required: textboxRequired,
            banglaAlphaNumericWithPunctuation: textboxBanglaLettersOnly
        },

        permAddrVilAreaTownEn: {

            required: textboxRequired
        },

        permAddrHouseRoadBn: {
            banglaAlphaNumericWithPunctuation: textboxBanglaLettersOnly
        },

        permAddrHouseRoadEn: {

            required: textboxRequired
        },

        // present address

        prsntAddrDiv: {

            required: radioCheckboxSelectRequired,
            dropdown: radioCheckboxSelectRequired
        },

        prsntAddrDist: {

            required: radioCheckboxSelectRequired,
            dropdown: radioCheckboxSelectRequired
        },

        prsntAddrCountry: {

            required: radioCheckboxSelectRequired,
            dropdown: radioCheckboxSelectRequired
        },

        prsntAddrCityCorpCantOrUpazila: {

            required: radioCheckboxSelectRequired,
            dropdown: radioCheckboxSelectRequired
        },

        prsntAddrPaurasavaOrUnion: {

            required: radioCheckboxSelectRequired,
            dropdown: radioCheckboxSelectRequired
        },

        prsntAddrWardInCityCorp: {

            required: radioCheckboxSelectRequired,
            geoLocationDropdown: radioCheckboxSelectRequired
        },

        prsntAddrArea: {

            required: radioCheckboxSelectRequired,
            dropdown: radioCheckboxSelectRequired
        },

        prsntAddrCity: {

            required: radioCheckboxSelectRequired,
            dropdown: radioCheckboxSelectRequired
        },

        prsntAddrWardInPaurasavaOrUnion: {

            required: radioCheckboxSelectRequired,
            geoLocationDropdown: radioCheckboxSelectRequired
        },

        prsntAddrPostOfc: {

            required: textboxRequired
        },

        prsntAddrVilAreaTownBn: {
            required: textboxRequired,
            banglaAlphaNumericWithPunctuation: textboxBanglaLettersOnly
        },

        prsntAddrVilAreaTownEn: {

            required: textboxRequired
        },

        prsntAddrHouseRoadBn: {
            banglaAlphaNumericWithPunctuation: textboxBanglaLettersOnly
        },

        prsntAddrHouseRoadEn: {

            required: textboxRequired
        },

        // correction and reprint ubrn search validation

        "brSearchBrn": {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            digits: textboxDigits
        },

        "brSearchAliveBrn": {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            digits: textboxDigits,
            isPersonAlive: personAliveRequiredMsg
        },

        "brSearchAliveBrnCorr": {
            required: textboxRequired,
            digits: textboxDigits,
            isPersonAlive: personAliveRequiredMsg
        },

        "brSearchDob": {

            required: textboxRequired,
            dateFormatValidate: dateValidFormat,
            notFutureDate: dateNotFuture
        },

        // correction and reprint udrn search validation

        "drSearchDrn": {

            required: textboxRequired,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength),
            digits: textboxDigits
        },

        "drSearchDod": {

            required: textboxRequired,
            dateFormatValidate: dateValidFormat,
            notFutureDate: dateNotFuture
        },

        // certificate cancellation

        causeOfCancellation: {

            required: radioCheckboxSelectRequired,
            dropdown: radioCheckboxSelectRequired
        },

        // person death info
        personDeathDate: {

            required: textboxRequired,
            dateFormatValidate: dateValidFormat,
            notFutureDate: dateNotFuture
        },

        repeatedPersonDeathDate: {

            required: textboxRequired,
            dateFormatValidate: dateValidFormat,
            notFutureDate: dateNotFuture,
            equalTo: dodEqualMsg
        },
        causeOfDeath: {

            dropdown: radioCheckboxSelectRequired
        },
        spouseName: {

            //required: textboxRequired,
            //englishLettersOnly: textboxEnglishLettersOnly,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength)
        },
        spouseBrn: {

            //required: textboxRequired,
            digits: textboxDigits,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength)
        },
        spouseNid: {

            //required: textboxRequired,
            digits: textboxDigits,
            minlength: jQuery.validator.format(textboxMinlength),
            maxlength: jQuery.validator.format(textboxMaxlength)
        },

        // death place
        deathPlaceDiv: {

            dropdown: radioCheckboxSelectRequired
        },

        deathPlaceDist: {

            dropdown: radioCheckboxSelectRequired
        },

        deathPlaceCountry: {

            dropdown: radioCheckboxSelectRequired
        },

        deathPlaceCityCorpCantOrUpazila: {

            dropdown: radioCheckboxSelectRequired
        },

        deathPlacePaurasavaOrUnion: {

            dropdown: radioCheckboxSelectRequired
        },

        deathPlaceWardInCityCorp: {

            geoLocationDropdown: radioCheckboxSelectRequired
        },

        deathPlaceArea: {

            dropdown: radioCheckboxSelectRequired
        },

        deathPlaceCity: {

            dropdown: radioCheckboxSelectRequired
        },

        deathPlaceWardInPaurasavaOrUnion: {

            geoLocationDropdown: radioCheckboxSelectRequired
        },

        deathPlacePostOfc: {

            required: textboxRequired
        },

        deathPlaceVilAreaTownBn: {
            required: textboxRequired,
            banglaAlphaNumericWithPunctuation: textboxBanglaLettersOnly
        },

        deathPlaceVilAreaTownEn: {
            required: textboxRequired
        },

        deathPlaceHouseRoadBn: {
            banglaAlphaNumericWithPunctuation: textboxBanglaLettersOnly
        },

        deathPlaceHouseRoadEn: {

            required: textboxRequired
        },

        deathPlacePostCode: {

            required: textboxRequired
        },

        // death residence
        deathResidenceDiv: {

            dropdown: radioCheckboxSelectRequired
        },

        deathResidenceDist: {

            dropdown: radioCheckboxSelectRequired
        },

        deathResidenceCountry: {

            dropdown: radioCheckboxSelectRequired
        },

        deathResidenceCityCorpCantOrUpazila: {

            dropdown: radioCheckboxSelectRequired
        },

        deathResidencePaurasavaOrUnion: {

            dropdown: radioCheckboxSelectRequired
        },

        deathResidenceWardInCityCorp: {

            geoLocationDropdown: radioCheckboxSelectRequired
        },

        deathResidenceArea: {

            dropdown: radioCheckboxSelectRequired
        },

        deathResidenceCity: {

            dropdown: radioCheckboxSelectRequired
        },

        deathResidenceWardInPaurasavaOrUnion: {

            geoLocationDropdown: radioCheckboxSelectRequired
        },

        deathResidencePostOfc: {

            required: textboxRequired
        },

        deathResidenceVilAreaTownBn: {
            required: textboxRequired,
            banglaAlphaNumericWithPunctuation: textboxBanglaLettersOnly
        },

        deathResidenceVilAreaTownEn: {

            required: textboxRequired
        },

        deathResidenceHouseRoadBn: {
            banglaAlphaNumericWithPunctuation: textboxBanglaLettersOnly
        },

        deathResidenceHouseRoadEn: {

            required: textboxRequired
        },

        deathResidencePostCode: {

            required: textboxRequired
        },

        brnRelatedAttachments: {

            extension: fileExtension,
            limitFileSize: fileSize
        },
        deathRelatedAttachments: {

            extension: fileExtension,
            limitFileSize: fileSize
        },

        username: {

            required: textboxRequired,
            isUsernameAvailable: usernameAvailableRequiredMsg
        },

        userId: {
            required: textboxRequired
        },
        password: {

            required: textboxRequired
        },

        retype_password: {

            required: textboxRequired,
            equalTo: passwordEqualMsg
        },

        expiryDate: {

            required: textboxRequired,
            dateFormatValidate: dateValidFormat,
        },

        // geolocation add

        geoLevelId: {

            dropdown: radioCheckboxSelectRequired
        },

        // parent geo for geolocation add according to geo type

        parentGeoAddrAccordingToGeoTypeDiv: {

            dropdown: radioCheckboxSelectRequired
        },

        parentGeoAddrAccordingToGeoTypeDist: {

            dropdown: radioCheckboxSelectRequired
        },

        parentGeoAddrAccordingToGeoTypeCountry: {

            dropdown: radioCheckboxSelectRequired
        },

        parentGeoAddrAccordingToGeoTypeCityCorpCantOrUpazila: {

            dropdown: radioCheckboxSelectRequired
        },

        parentGeoAddrAccordingToGeoTypePaurasavaOrUnion: {

            dropdown: radioCheckboxSelectRequired
        },

        parentGeoAddrAccordingToGeoTypeWardInCityCorp: {

            geoLocationDropdown: radioCheckboxSelectRequired
        },

        parentGeoAddrAccordingToGeoTypeArea: {

            dropdown: radioCheckboxSelectRequired
        },

        parentGeoAddrAccordingToGeoTypeCity: {

            dropdown: radioCheckboxSelectRequired
        },

        parentGeoAddrAccordingToGeoTypeWardInPaurasavaOrUnion: {

            geoLocationDropdown: radioCheckboxSelectRequired
        },

        // geolocation add form

        nameEn: {

            required: textboxRequired,
            englishLettersOnly: textboxEnglishLettersOnly
        },

        nameBn: {

            required: textboxRequired,
            banglaLettersOnly: textboxBanglaLettersOnly
        },

        geoNameEn: {

            required: textboxRequired,
            alphanumeric: textboxEnglishLettersOnly
        },

        geoNameBn: {

            required: textboxRequired,
            banglaAlphaNumericWithPunctuation: textboxBanglaLettersOnly
        },

        geoCode: {

            required: textboxRequired,
            digits: textboxDigits
        },

        rmoCode: {

            required: textboxRequired,
            digits: textboxDigits
        },

        population: {

            digits: textboxDigits
        },

        popnYear: {

            digits: textboxDigits
        },

        popnGrowthRate: {

            number: textboxNumber
        },

        popnMale: {

            digits: textboxDigits
        },

        popnFemale: {

            digits: textboxDigits
        },

        //Office add/edit page
        addressEn: {

            required: textboxRequired
        },

        addressBn: {

            required: textboxRequired,
            banglaLettersWithPunctuation: textboxBanglaLettersOnly
        },

        officeNameBn: {

            required: textboxRequired,
            banglaLettersOnly: textboxBanglaLettersOnly
        },

        officeNameEn: {

            required: textboxRequired
        },

        lat: {

            required: textboxRequired
        },

        lng: {

            required: textboxRequired
        },

        registrarPostEn: {

            required: textboxRequired
        },

        registrarPostBn: {

            required: textboxRequired,
            banglaLettersOnly: textboxBanglaLettersOnly
        },

        // add payments config

        currency: {

            required: textboxRequired
        },

        dobCorrectionCharge: {

            required: textboxRequired
        },

        correctionFeeExceptDOB: {

            required: textboxRequired
        },

        certificateDeliveryCharge: {

            required: textboxRequired
        },

        certificateCopyDeliveryCharge: {

            required: textboxRequired
        },

        certificateCancellationCharge: {

            required: textboxRequired
        },

        vatPercentage: {

            required: textboxRequired
        },

        activationDate: {

            required: textboxRequired
        },
        brCancellationSearchType: {
            dropdown: true
        },
        //Nationality add/edit page
        nationalityEn: {
            required: textboxRequired
        },
        nationalityBn: {
            required: textboxRequired,
            banglaLettersOnly: textboxBanglaLettersOnly
        },
        countryId: {
            required: radioCheckboxSelectRequired
        },
        // cancellation
        cancellationSearchType: {
            required: radioCheckboxSelectRequired,
        },
        brCancellationSearchBrn1: {
            required: textboxRequired, digits: textboxDigits,
        },
        brCancellationSearchBrn2: {
            required: textboxRequired, digits: textboxDigits,
        },
        brCancellationSearchBrn3: {
            required: textboxRequired, digits: textboxDigits,
        },
        brCancellationSearchBrn4: {
            required: textboxRequired, digits: textboxDigits,
        },
        brCancellationSearchBrn5: {
            required: textboxRequired, digits: textboxDigits,
        },
        drCancellationSearchBrn: {
            required: textboxRequired, digits: textboxDigits,
        },
        registrationDate: {
            required: textboxRequired,
            dateFormatValidate: dateValidFormat,
            notFutureDate: dateNotFuture
        },
        issueDate: {
            required: textboxRequired,
            dateFormatValidate: dateValidFormat,
            notFutureDate: dateNotFuture
        },
        declaration: {
            required: textboxRequired
        },
    },
});

/*]]>*/
</script>
