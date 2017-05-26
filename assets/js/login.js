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
                            _barclaysAdserver._accessStorageData();
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
        _accessStorageData: function() {
            $("#kruxid").html(localStorage.getItem("kxbarclays_kuid"));
            var i = 0,
                oJson = {},
                sKey;
            for (; sKey = window.localStorage.key(i); i++) {
                oJson[sKey] = window.localStorage.getItem(sKey);
                $('#storagedata').append('<tr><td>' + sKey + '</td><td>' + window.localStorage.getItem(sKey) + '</td></tr>');
                oJson['segments'] = _sasObj;
                console.log(oJson);
            }
            _barclaysAdserver._kruxServCall(oJson);
            _barclaysAdserver._sasAdServCall(oJson);
            _barclaysAdserver._aemServCall();
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
            console.log('KRUX service call');
        },
        _sasAdServCall: function(sData) {
            var _kruxSegments = sData['segments'];
            var _segmentObj = _kruxSegments['segment'];
            var _segKeys = Object.keys(_kruxSegments['segment']);
            var _sasSegPar = '';
            for (var i = 0, j = _segKeys.length; i < j; i++) {
                _sasSegPar += _segKeys[i] + '=' + _segmentObj[_segKeys[i]] + '/';
            }
            console.log(_sasSegPar);
            var _srcimage = _kruxSegments.saswebsever + '/' +
                _kruxSegments.adcallmethod + '/' +
                _kruxSegments['segment'].adcallmethod + '/' + _sasSegPar;
            _barclaysAdserver._adAjaxServ();
            console.log(_srcimage);
            $('#barclayscarloan').attr('src', _srcimage);
        },
        _aemServCall: function() {
            _barclaysAdserver._adAjaxServ();
            console.log('AEM service call');
        }
    }
})($);