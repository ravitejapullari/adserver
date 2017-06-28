'use strict';

(function($) {
    _barclaysAdserver = {
        _checklogin: function(k, l) {
            var _userdata = _logindata;
            for (var i = 0, j = _userdata.length; i < j; i++) {
                if (_userdata[i]['username'] === k) {
                    if (_userdata[i]['password'] === l) {
                        console.log(_userdata[i]['username']);
                        $('#loginpage').hide();
                        $('#sucessfull').show();
                        _barclaysUser = _userdata[i]; // location.href = 'barclays-in.html';
                        $('#b_username').html(_barclaysUser['username']);
                        if (typeof(Storage) != undefined) {
                            _barclaysAdserver._accessStorageData(k);
                        }
                    }
                }
            }
        },
        _executeLogin: function() {
            var _uname = $('#username').val(),
                _pword = $('#userpassword').val();
            if (_uname != '' && _pword != '') {
                _barclaysAdserver._checklogin(_uname, _pword);
            }
        },
        _accessStorageData: function(username) {
            $("#kruxid").html(localStorage.getItem("kxbarclays_kuid"));
            var i = 0,
                oJson = {},
                sKey;
            for (; sKey = window.localStorage.key(i); i++) {
                oJson[sKey] = window.localStorage.getItem(sKey);
                //$('#storagedata').append('<tr><td>' + sKey + '</td><td>' + window.localStorage.getItem(sKey) + '</td></tr>');
            }
            oJson['userdata'] = _sasObj.account[username];
            console.log(oJson);
            //_barclaysAdserver._kruxServCall(oJson);
            _barclaysAdserver._sasAdServCall(oJson);
            //_barclaysAdserver._aemServCall();
        },
        _adAjaxServ: function() {
            $.ajax({
                method: "GET",
                url: "",
                data: {},
                dataType: "json"
            }).done(function(msg) {

            });
        },
        // Service calls to KRUX, SaS and AEM
        _kruxServCall: function(kData) {
            _barclaysAdserver._adAjaxServ();
        },
        _sasAdServCall: function(sData) {
            var _kruxSegments = sData.userdata['segments'],
                _segmentpair = '';
            var head = document.getElementsByTagName('head')[0];
            _adserver = _sasObj.saswebsever + _sasObj.adcallmethod;
            for (var i = 0, j = _kruxSegments.ranks.length; i < j; i++) {
                _segmentpair += 'b' + (i + 1) + '/Segments=' + _kruxSegments.ranks[i] + ',' + _kruxSegments.products[i] + '/Location_AccountType=' + _kruxSegments.accounttype + '/';
            }
            _segmentpair = _segmentpair.slice(0, _segmentpair.length - 1);
            console.log(_segmentpair);
            var _aimRnd = Math.round(Math.random() * 100000000);
            var _allAdTags = "/ball/random=" + _aimRnd + "/viewid=" + _aimRnd;
            // bserver ad call – insert the adx variables 
            head.appendChild('<scr' + 'ipt src="' + _adserver + _allAdTags + _segmentpair + '?api_key=rlMrAZKoTouXh0SNxInC" type="text/JavaScript" language="JavaScript"></scr' + 'ipt>'); //</scr' + 'ipt>');
            //document.writeln('</scr' + 'ipt>');
        },
        _aemServCall: function() {
            _barclaysAdserver._adAjaxServ();
            console.log('AEM service call');
        }
    }
})($);