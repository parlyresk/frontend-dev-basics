/*
    URL 다루기

*/

// 예1) 리다이렉트
// location.href = url;

// 예2) ajax 통신
// $.ajax(url)
// fetch(url)
// axios(url)

var url = "http://www.mysite.com/user?name=세윤&email=ksy98325@gmail.com";
console.log(url);
// 1. escape: URL 전부를 encoding, 사용하지 말자, deprecated 됨
var url2 = escape(url);
console.log(url2);

//2. encodeURI: URL 전체중 파라미터만 encoding 한다. url 전체를 encoding 해야 하는 경우 사용(o)
var url3 = encodeURI(url);
console.log(url3);

//3. encodeURIComponent: 값만 encoding해야 하는 경우 사용(o), url 전체를 encoding할떄 쓰지 말것
var url4 = encodeURIComponent(url);
console.log(url4);

//4. encodeURIComponent 사용 예
// 만들어야할 url http://www.mysite.com/user?name=세윤&email=ksy98325@gmail.com

var url = "http://www.mysite.com/user";
var formData = {
    name : '둘리',
    email : 'dooli@naver.com'
};

var toQueryString = function(o){
    var qs = [];
    for(prop in o){
        qs.push(prop + "=" + encodeURIComponent(o[prop]));
    }

    return qs.join("&");
}

console.log(url + "?" + toQueryString(formData));