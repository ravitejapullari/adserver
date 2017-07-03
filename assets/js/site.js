'use strict';

var _barclaysAdserver = _barclaysAdserver || {},
    _barclaysUser = {},
    //https: //demo-ads.aimatch.com/demo/hserver/
    //site=barclays.com/area=barclayshomepage/kruxinterestcategory=cars/kruxgender=female/random=33

    _sasObj = {
        "account": {
            "raviteja": {
                "segments": {
                    "ranks": ["fsmoments1", "fsmoments2", "mortgage2"],
                    "products": ["fsmomentscar", "fsmomentstravel", "mortgageneeds"],
                    "accounttype": "accountPromo_current"
                }
            },
            "kishore": {
                "segments": {
                    "ranks": ["fsmoments1", "homeins1", "fspack1"],
                    "products": ["fsmomentstravel", "homeinspricing", "fspackhomeprotect"],
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
        "saswebsever": "https://bclays-ads.aimatch.com/bclays/"
    };


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