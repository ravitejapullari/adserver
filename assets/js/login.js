'use strict';

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
        var _username = $('#username').val(),
            _password = $('#userpassword').val();
        if (_username != '' && _password != '') {
            _barclaysAdserver._checklogin(_username, _password);
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
            console.log(skey);
        }
        _barclaysAdserver._sasAdService(oJson);
    },
    _sasAdService: function(kdata) {
        console.log('end');
    }
}