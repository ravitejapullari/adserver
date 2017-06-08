'use strict';

var _barclaysAdserver = _barclaysAdserver || {},
    _barclaysUser = {},

    //https: //demo-ads.aimatch.com/demo/hserver/
    //site=barclays.com/area=barclayshomepage/kruxinterestcategory=cars/kruxgender=female/random=33

    _sasObj = {
        "segment": {
            "FLIGHTID": 1494
        },
        "adcallmethod": "jserver",
        "saswebsever": "https://crtlt2.aimatch.com/demo"
    };


// Cache-busting and viewid value 
var aimRnd = Math.round(Math.random() * 100000000);

// adserver URL 
var adserver = _sasObj.saswebsever + '/bserver';

// Ad tag targeting values which will be appended to each ad request section in the bserver ad call 
var allAdTags = "/ball/random=" + aimRnd + "/viewid=" + aimRnd;

// Individual tags for each ad request - increment the adx variable name and the ‘/bx/’ parameter. 
var ad1 = "/b1/" + _sasObj.segment.FLIGHTID;

// bserver ad call – insert the adx variables 
document.write('<scr' + 'ipt src="' + adserver + allAdTags + ad1 + '?" type="text/JavaScript" language="JavaScript">');
document.write('</scr' + 'ipt>');
// End Hide -->