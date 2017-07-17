'use strict';

var _barclaysAdserver = _barclaysAdserver || {},
    _barclaysUser = {},
    //https: //demo-ads.aimatch.com/demo/hserver/
    //site=barclays.com/area=barclayshomepage/kruxinterestcategory=cars/kruxgender=female/random=33

    _sasObj = {
        "account": {
            "raviteja": {
                "segments": {
                    "ranks": ["homeins1", "fsmoments2", "mortgage2"],
                    "products": ["homeinsgeneric", "fsmomentscar", "mortgageneeds"],
                    "accounttype": "accountPromo_current"
                }
            },
            "kishore": {
                "segments": {
                    "ranks": ["overdraft1", "homeins1", "fspack1"],
                    "products": ["overdraftunexpected", "homeinspricing", "fspackhomeprotect"],
                    "accounttype": "accountPromo_current"
                }
            },
            "rohit": {
                "segments": {
                    "ranks": ["fsmoments2", "homeins1", "fspack2"],
                    "products": ["fsmomentstravel", "homeinsgeneric", "fspacktech"],
                    "accounttype": "accountPromo_current"
                }
            }
        },
        "adcallmethod": "bserver",
        "saswebsever": "https://bclays-ads.aimatch.com/bclays/",
        "csegment": {
            "mortgage": {
                "segments": {
                    "ranks": ["mortgage2", "fsmoments2", "mortgage2"],
                    "products": ["mortgageneeds", "fsmomentscar", "mortgageneeds"],
                    "accounttype": "accountPromo_current"
                }
            },
            "home": {
                "segments": {
                    "ranks": ["fsmoments1", "fsmoments2", "mortgage2"],
                    "products": ["fsmomentshome", "fsmomentscar", "mortgageneeds"],
                    "accounttype": "accountPromo_current"
                }
            }
        },
        segments: [
            { "fsmoments1": "rz50tr7f5" },
            { "fsmomentshome": "rz501emcp" },
            { "fspack2": "rz51f40uj" },
            { "fspackhomeprotect": "rz51qefi5" },
            { "mortgage1": "rz53rcn97" },
            { "mortgagecosts": "rz53w9t8u" },
            { "homeins1": "rz5288m62" },
            { "homeinspricing": "rz53lp9xl" },
            { "overdraft1": "rz533ra90" },
            { "overdraftunexpected": "rz536u2oa" }
        ]
    };

var _segmentsUrl1 = "/b1/Segments=rz533ra90,rz536u2oa/Location_AccountType=accountPromo_current" +
    "/b2/Segments=rz51f40uj,rz51qefi5/Location_AccountType=accountPromo_current";
var _segmentsUrl2 = "/b1/Segments=rz53rcn97,rz53w9t8u/Location_AccountType=accountPromo_current" +
    "/b2/Segments=rz51f40uj,rz51qefi5/Location_AccountType=accountPromo_current";
var _segmentsUrl3 = "/b1/Segments=rz5288m62,rz53lp9xl/Location_AccountType=accountPromo_current" +
    "/b2/Segments=rz51f40uj,rz51qefi5/Location_AccountType=accountPromo_current";

// Cache-busting and viewid value 
var aimRnd = Math.round(Math.random() * 100000000);

// adserver URL 
//var adserver = _sasObj.saswebsever + _sasObj.adcallmethod;

// Ad tag targeting values which will be appended to each ad request section in the bserver ad call 
//var allAdTags = "/ball/random=" + aimRnd + "/viewid=" + aimRnd;



// Individual tags for each ad request - increment the adx variable name and the ‘/bx/’ parameter. 
/*var ad1 = "/b1/Segments=" + _sasObj.segment.FLIGHTID,
    ad2 = "/b2/Segments=" + _sasObj.segment.FCID[0],
    ad3 = "/b3/Segments=" + _sasObj.segment.FCID[1];*/
//console.log(adserver, ad1, ad2, ad3);
// bserver ad call – insert the adx variables 
//document.write('<scr' + 'ipt src="' + adserver + ad1 + ad2 + ad3 + '?" type="text/JavaScript" language="JavaScript">');
//document.write('</scr' + 'ipt>');
// End Hide --> 

$(document).ready(function() {
    $('.adserver').on('click', function() {
        var _getId = $(this).attr('id');
        $('.adserver-images').hide();
        $('.' + _getId).show();
        $('.' + _getId + ' img').addClass('img-responsive');
    });
})