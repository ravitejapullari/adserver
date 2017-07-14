'use strict';

(function($) {
    _barclaysAdserver = {
        _checklogin: function(k, l) {
            var _userdata = _logindata;
            sessionStorage.removeItem('username');
            sessionStorage.removeItem('segment');
            for (var i = 0, j = _userdata.length; i < j; i++) {
                if (_userdata[i]['username'] === k) {
                    if (_userdata[i]['password'] === l) {
                        _barclaysUser = _userdata[i]; // location.href = 'barclays-in.html';
                        sessionStorage.setItem('username', k);
                        location.href = 'account.html';
                    }
                }
            }
        },
        _setSegment: function(_segment) {
            var _setSegment = sessionStorage.setItem('segment', _segment);
            _barclaysAdserver._selectedProduct(_segment);

        },
        _executeLogin: function() {
            var _uname = $('#username').val(),
                _pword = $('#userpassword').val();

            console.log($('#username'));
            if (_uname != '' && _pword != '') {
                _barclaysAdserver._checklogin(_uname, _pword);
            }
        },
        _accessStorageData: function(username) {
            if (typeof(Storage) != undefined) {
                //_barclaysAdserver._accessStorageData(k);
            }
            dataLayer.user.userId = "raviteja.pullari@barclayscorp.com"; //username;
            console.log(dataLayer);
            //$("#kruxid").html(localStorage.getItem("kxbarclays_kuid"));
            $('#b_username').html(username);
            var i = 0,
                oJson = {},
                sKey;
            for (; sKey = window.localStorage.key(i); i++) {
                oJson[sKey] = window.localStorage.getItem(sKey);
                //$('#storagedata').append('<tr><td>' + sKey + '</td><td>' + window.localStorage.getItem(sKey) + '</td></tr>');
            }
            console.log(oJson);
            oJson['userdata'] = _sasObj.account[username];
            var _segment = sessionStorage.getItem('segment');
            if (_segment) {
                _barclaysAdserver._selectedProduct(_segment);
            } else {
                _barclaysAdserver._sasAdServCall(oJson.userdata['segments']);
            }
        },
        _adAjaxServ: function(serviceUrl, servProd) {
            var _ajaxCall = $.ajax({
                method: "GET",
                crossDomain: true,
                url: serviceUrl,
                dataType: 'jsonp'
            }).done(function() {
                console.log('Success');
            });
            var _timerSet = setTimeout(function() {
                _barclaysAdserver._updateSegments(servProd);
            }, 1000);
        },
        _selectedProduct: function(selProd) {
            var _seleprod = _sasObj.csegment[selProd];
            console.log(_seleprod);
            _barclaysAdserver._sasAdServCall(_seleprod['segments'], selProd);
        },
        _sasAdServCall: function(sData, sProd) {
            var _kruxSegments = sData,
                _segmentpair = '',
                _adserver = _sasObj.saswebsever + _sasObj.adcallmethod;
            for (var i = 0, j = _kruxSegments.ranks.length; i < j; i++) {
                _segmentpair += '/b' + (i + 1) + '/Segments=' + _kruxSegments.ranks[i] + ',' + _kruxSegments.products[i] + '/Location_AccountType=' + _kruxSegments.accounttype;
            }
            //_segmentpair = _segmentpair.slice(0, _segmentpair.length - 1);
            console.log(_segmentpair);
            var _aimRnd = Math.round(Math.random() * 100000000);
            var _allAdTags = "/ball/random=" + _aimRnd + "/viewid=" + _aimRnd;
            var _urlCall = _adserver + _allAdTags + _segmentpair + '?api_key=rlMrAZKoTouXh0SNxInC';
            _barclaysAdserver._adAjaxServ(_urlCall, sProd);
        },
        _updateSegments: function(segment) {
            $('#adserve1').html(b1);
            $('#adserve2').html(b2);
            $('#adserve3').html(b3);
        }
    }
})(jQuery);