const nWindowHeight = window.innerHeight;
const nHeaderHeight = 55;


function AJAX_GET(sURL, fnSuccessCallback, fnFailCallback) {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                // 必要的时候，使用 getResponseHeader() 检查首部信息
                fnSuccessCallback && fnSuccessCallback(xhr.responseText);
            } else {
                fnFailCallback && fnFailCallback(xhr.status);
            }
        }
    }, false);
    xhr.open("get", sURL, true);
    xhr.send(null);
}

function AJAX_POST(sURL, data, fnSuccessCallback, fnFailCallback)
{
	let xhr = new XMLHttpRequest();
	xhr.addEventListener('readystatechange', function()
	{
		if (xhr.readyState == 4)
		{
			if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
				// 必要的时候，使用 getResponseHeader() 检查首部信息
				fnSuccessCallback && fnSuccessCallback( xhr.responseText );
			}
			else{
				fnFailCallback && fnFailCallback( xhr.status );
			}
		}
	}, false);
	xhr.open("post", sURL, true);
	// 如果发送FormDate，则不需要设置Content-Type，但截至2017.5，FormDate的浏览器支持并不理想
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(data);
}

// Return the document's cookies as an object of name/value pairs.
// Assume that cookie values are encoded with encodeURIComponent().
function getCookies()
{
    var cookies = {}; // The object we will return
    var all = document.cookie; // Get all cookies in one big string

	if (all === ""){ // If the property is the empty string
		return cookies; // return an empty object
	}

	var list = all.split("; "); // Split into individual name=value pairs

	for(var i = 0; i < list.length; i++) { // For each cookie
		var cookie = list[i];
		var p = cookie.indexOf("="); // Find the first = sign
		var name = cookie.substring(0,p); // Get cookie name
		var value = cookie.substring(p+1); // Get cookie value
		value = decodeURIComponent(value); // Decode the value
		cookies[name] = value; // Store name and value in object
	}

	return cookies;
}


// 根据ID跳转到具体的某个详情页
function toDetail(id){
    this.$parent.$parent.detailID = id;
    location.hash = "#/detail";
}

export {nWindowHeight, nHeaderHeight, AJAX_GET, AJAX_POST, getCookies, toDetail};
