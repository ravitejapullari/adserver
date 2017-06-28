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
            for (var i = 0, j = _kruxSegments.ranks.length; i < j; i++) {
                _segmentpair += 'b' + (i + 1) + '/Segments=' + _kruxSegments.ranks[i] + ',' + _kruxSegments.products[i] + '/Location_AccountType=' + _kruxSegments.accounttype;
            }
            console.log(_segmentpair);

            /*for (var i = 0, j = _segKeys.length; i < j; i++) {
                _sasSegPar[i] = _segKeys[i] + '=' + _segmentObj[_segKeys[i]];
            }
            _sasSegPar = _sasSegPar.join('/');
            var _srcimage = _kruxSegments.saswebsever + '/' +
                _kruxSegments['adcallmethod'] + '/' + _sasSegPar;
            //$('#barclayscarloan').attr('src', _srcimage); //_srcimage);

            var _script = document.createElement("script");
            _script.type = 'text/javascript';
            _script.src = _srcimage;
            //_script.onload = call
            //$('#barclayscarloan').append(_script);*/





        },
        _aemServCall: function() {
            _barclaysAdserver._adAjaxServ();
            console.log('AEM service call');
        }
    }
})($);