// 종로하이미디어컴퓨터 좌표 : 37.5718652,126.985028
// 일산하이미디어컴퓨터 좌표 : 37.6565411,126.770651
			function initialize() {
		    var markers = [];
		    var locations = [
		        // ['Bondi Beach', 'Some text goes here<br />text', 'Walk', -33.890542, 151.274856, 4],
		        // ['Coogee Beach', 'Some text goes here<br />text', 'Fish', -33.923036, 151.259052, 5],
		        // ['Cronulla Beach', 'Some text goes here<br />text', 'Fish', -34.028249, 151.157507, 3],
		        // ['Manly Beach', 'Some text goes here<br />text', 'Walk', -33.80010128657071, 151.28747820854187, 2],
		        // ['Maroubra Beach', 'Some text goes here<br />text', 'Walk', -33.950198, 151.259302, 1] // 지도 좌표 표시
		        ['일산하이미디어컴퓨터학원', 'Tel : 031-000-0000', 'http://abc.com',  37.6565411,126.770651]
		    ];

		    var map = new google.maps.Map(document.getElementById('map'), {
		        zoom: 10,
		        center: new google.maps.LatLng(37.6565411,126.770651), // 마커의 위치 표시
		        mapTypeId: google.maps.MapTypeId.ROADMAP
		    });

		    var infowindow = new google.maps.InfoWindow();

		    var marker, i;

		    for (i = 0; i < locations.length; i++) {
		        marker = new google.maps.Marker({
		            position: new google.maps.LatLng(locations[i][3], locations[i][4]),
		            map: map
		        });

		        markers.push(marker);

		        google.maps.event.addListener(marker, 'click', (function (marker, i) {
		            return function () {
		                infowindow.setContent(
		                	locations[i][0] + "<br />" + locations[i][1] + "<br />" + "<a href='http://abc.com' alt='하이미디어 웹사이트 링크'>" + locations[i][2] + "</a>"
		                );
		                infowindow.open(map, marker);
		            }
		        })(marker, i));
		    }
		}