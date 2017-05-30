'use strict';

var _barclaysAdserver = _barclaysAdserver || {},
    _barclaysUser = {},

    //https: //demo-ads.aimatch.com/demo/hserver/
    //site=barclays.com/area=barclayshomepage/kruxinterestcategory=cars/kruxgender=female/random=33

    _sasObj = {
        "segment": {
            "site": "barclays.com",
            "area": "barcleyshomepage",
            "kruxinterestcategory": "cars",
            "kruxgender": "male",
            "random": "33"
        },
        "adcallmethod": "iserver",
        "saswebsever": "https://demo-ads.aimatch.com/demo"
    };