var soapMessageHeader =
  '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">';
soapMessageHeader += "<soap12:Body>";
var soapMessageFooter = "</soap12:Body>";
soapMessageFooter += "</soap12:Envelope>";
function GetCustomerWaselNotCancelled(
  UserName,
  Password,
  id,
  idType,
  sequenceNumber,
  laborOffice
) {
  var soapMessage = "";
  UserName = 'intrarcom'	
  UserName = '$p@rC0n!8'
  var soapMessageBody = "<UserName>" + UserName + "</UserName>";  
  soapMessageBody += "<Password>" + Password + "</Password>";
  soapMessageBody += "<id>" + id + "</id>";
  soapMessageBody += "<idType>" + idType + "</idType>";
  soapMessageBody += "<sequenceNumber>" + sequenceNumber + "</sequenceNumber>";
  soapMessageBody += "<laborOffice>" + laborOffice + "</laborOffice>";
  soapMessage = soapMessageHeader + soapMessageBody + soapMessageFooter;
  baseSaopRequest(
    "http://rhmtissstg/CRMSubscriptionGDSServiceMT/CRMSubscriptionGDSMTService.svc",
    soapMessage
  );
}

function SendSMS(Mobileno, Message, UserName, Password) {
  var soapMessage = "";
  var soapMessageBody = "<Mobileno>" + Mobileno + "</Mobileno>";
  soapMessageBody += "<Message>" + Message + "</Message>";
  soapMessageBody += "<UserName>" + UserName + "</UserName>";
  soapMessageBody += "<Password>" + Password + "</Password>";
  soapMessage = soapMessageHeader + soapMessageBody + soapMessageFooter;
  baseSaopRequest("http://ws.sp.com.sa/sendsms_STC/service.asmx", soapMessage);
}

function SendMail(Attachment, Body, CCTo, Credential, From, To, subject) {
  var soapMessage = "";
  var soapMessageBody = "<Attachment>" + Attachment + "</Attachment>";
  soapMessageBody += "<Body>" + Body + "</Body>";
  soapMessageBody += "<CCTo>" + CCTo + "</CCTo>";
  soapMessageBody += "<Credential>" + Credential + "</Credential>";
  soapMessageBody += "<From>" + From + "</From>";
  soapMessageBody += "<To>" + To + "</To>";
  soapMessageBody += "<subject>" + To + "</subject>";
  soapMessage = soapMessageHeader + soapMessageBody + soapMessageFooter;
  baseSaopRequest("http://rhmtissprd/SendMailMT/SendMails.svc", soapMessage);
}

function GetPoBox(userName, password, cityID, poboxNumber, zipCode, OfficeId) {
  var soapMessage = "";
  var soapMessageBody = "<userName>" + userName + "</userName>";
  soapMessageBody += "<password>" + password + "</password>";
  soapMessageBody += "<cityID>" + cityID + "</cityID>";
  soapMessageBody += "<poboxNumber>" + poboxNumber + "</poboxNumber>";
  soapMessageBody += "<zipCode>" + zipCode + "</zipCode>";
  soapMessageBody += "<poboxNumber>" + poboxNumber + "</poboxNumber>";
  soapMessage = soapMessageHeader + soapMessageBody + soapMessageFooter;
  baseSaopRequest(
    "http://rhmtiss.int.sp.com.sa/CRMSubscriptionPOBoxServiceMT/SubscriptionPOBoxMTService.svc",
    soapMessage
  );
}
function GetCustomersandWaselAddressDetails(
  userName,
  password,
  pidCid,
  idType,
  customerCategory,
  customerType,
  sequenceNumber,
  laborOffice,
  myBaridiID,
  mobileNumber,
  serviceNo,
  itsServiceNo,
  nationalAddressCode,
  boxNo,
  cityId,
  officeId,
  buildingNo,
  additionalNo,
  zipcode,
  unitNo
) {
  var soapMessage = "";
  userName = 'intrarcom'	
  password = '$p@rC0n!8'
  var soapMessageBody = "<userName>" + userName + "</userName>";
  soapMessageBody += "<password>" + password + "</password>";
  soapMessageBody += "<pidCid>" + pidCid + "</pidCid>";
  soapMessageBody += "<idType>" + idType + "</idType>";
  soapMessageBody +=
    "<customerCategory>" + customerCategory + "</customerCategory>";
  soapMessageBody += "<customerType>" + customerType + "</customerType>";
  soapMessageBody += "<laborOffice>" + laborOffice + "</laborOffice>";
  soapMessageBody += "<myBaridiID>" + myBaridiID + "</myBaridiID>";
  soapMessageBody += "<mobileNumber>" + mobileNumber + "</mobileNumber>";
  soapMessageBody += "<serviceNo>" + serviceNo + "</serviceNo>";
  soapMessageBody += "<itsServiceNo>" + itsServiceNo + "</itsServiceNo>";
  soapMessageBody +=
    "<nationalAddressCode>" + nationalAddressCode + "</nationalAddressCode>";
  soapMessageBody += "<boxNo>" + boxNo + "</boxNo>";
  soapMessageBody += "<cityId>" + cityId + "</cityId>";
  soapMessageBody += "<officeId>" + officeId + "</officeId>";
  soapMessageBody += "<buildingNo>" + buildingNo + "</buildingNo>";
  soapMessageBody += "<additionalNo>" + additionalNo + "</additionalNo>";
  soapMessageBody += "<zipcode>" + zipcode + "</zipcode>";
  soapMessageBody += "<unitNo>" + unitNo + "</unitNo>";
  soapMessage = soapMessageHeader + soapMessageBody + soapMessageFooter;
  baseSaopRequest(
    "http://rhmtissstg/CRMSubscriptionMT/SubscriptionMTService.svc",
    soapMessage
  );
}

function GetDistributionInfoByAddress(
  UserName,
  Password,
  LocationX,
  LocationY,
  ZipCode,
  UnitNo,
  MailTypeId,
  ConsiderSpecialRegestered
) {
  var soapMessage = "";
  var soapMessageBody = "<userName>" + UserName + "</userName>";
  soapMessageBody += "<password>" + Password + "</password>";
  soapMessageBody += "<LocationX>" + LocationX + "</LocationX>";
  soapMessageBody += "<LocationY>" + LocationY + "</LocationY>";
  soapMessageBody += "<ZipCode>" + ZipCode + "</ZipCode>";
  soapMessageBody += "<UnitNo>" + UnitNo + "</UnitNo>";
  soapMessageBody += "<MailTypeId>" + MailTypeId + "</MailTypeId>";
  soapMessageBody +=
    "<ConsiderSpecialRegestered>" +
    ConsiderSpecialRegestered +
    "</ConsiderSpecialRegestered>";

  soapMessage = soapMessageHeader + soapMessageBody + soapMessageFooter;
  baseSaopRequest(
    "http://rhmtissstg/UniSysIntegrationMTService/UniSysIntegrationService.svc      ",
    soapMessage
  );
}

function GetOfficeInfoByBoxNoAndzipCode(boxno, zipcode, UserName, Password) {

  var soapMessage = "";
  var soapMessageBody = "<userName>" + UserName + "</userName>";
  soapMessageBody += "<password>" + Password + "</password>";
  soapMessageBody += "<boxno>" + boxno + "</boxno>";
  soapMessageBody += "<zipcode>" + zipcode + "</zipcode>";

  soapMessage = soapMessageHeader + soapMessageBody + soapMessageFooter;
  baseSaopRequest(
    "http://rhmtissstg/UniSysIntegrationMTService/UniSysIntegrationService.svc      ",
    soapMessage
  );
}

function baseSaopRequest(webServiceURL, soapMessage) {
  $.ajax({
    url: webServiceURL,
    type: "POST",
    dataType: "xml",
    data: soapMessage,
    processData: false,
    contentType: 'text/xml; charset="utf-8"',
    success: OnSuccess,
    error: OnError,
  });
}

function OnSuccess(data, status) {
  alert(data.d);
}

function OnError(request, status, error) {
  alert("error");
}
