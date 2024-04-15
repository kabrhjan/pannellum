






// let viewer = pannellum.viewer('panorama', {
//     "type": "equirectangular",
//     "panorama": "/mapa/panellum/images/360_0087_stitched_straightened_injected.JPG",
//     "hotSpots": [
//         {
//             "pitch": 2,
//             "yaw": 0,
//             "cssClass": "custom-hotspot",
//             "createTooltipFunc": hotspot,
//             "createTooltipArgs": "Geoinfo — IGG - Universität Bonn"
//         }],
// 	"autoLoad": true,
// 	"autoRotate": -2,
// 	"title": "Poppelsdorfer Schloss",
//     "author": "Daham",
// 	"pitch":7.9534115504439242,
//     "yaw": 16.56778482806146,
//     "hfov": 350
// });


// // rout a tour 
let viewer = pannellum.viewer('panorama', {   
    "default": {
        "firstScene": "58",
        "author": "Daham Mustafa",
        "sceneFadeDuration": 1000
    },

    "scenes": {
        "58": {
            "type": "equirectangular",
            "panorama": "/mapa/panellum/images/360_0058_stitched_straightened_injected.JPG",
            "autoLoad": true,
            "autoRotate": 2,
            "title": "Botanische Gärten der Universität Bonn",
            "author": "Daham",
            "pitch":-6.9534115504439242,
            "yaw": 159.56778482806146,
            "hfov": 350,
            
            "hotSpots": [
                {
                    "pitch": -0.9952675995577372,
                    "yaw": -171,
                    "type": "scene",
                    "sceneId": "59",
                    "text": "turn right",
                }, 
                {
                    "pitch": 3,
                    "yaw": -152,
                    "cssClass": "custom-hotspot",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "you can see the online map of Garden in this link shorturl.at/zMQ89"
                },
            ]
        },

        "59": {
            "type": "equirectangular",
            "panorama": "/mapa/panellum/images/360_0059_stitched_straightened_injected.JPG",
            "autoLoad": true,
            "autoRotate": 2,
            "title": "Botanische Gärten der Universität Bonn",
            "author": "Daham",
            "pitch":-1.9534115504439242,
            "yaw": -83.56778482806146,
            "hfov": 360,
            "hotSpots": [
                {
                    "pitch": -1,
                    "yaw": -88,
                    "type": "scene",
                    "text": "go stright",
                    "sceneId": "61",
                }
            ]
        },
        "61": {
            "hfov": -1,
            "yaw": -4,
            "hfov": 360,
            "type": "equirectangular",
            "panorama": "/mapa/panellum/images/360_0061_stitched_straightened_injected.JPG",
            "hotSpots": [
                {
                    "pitch": -1,
                    "yaw": -4,
                    "type": "scene",
                    "text": "turn left to garden",
                    "sceneId": "63",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        },
        "63": {
            "type": "equirectangular",
            "panorama": "/mapa/panellum/images/360_0063_stitched_straightened_injected.JPG",
            "autoLoad": true,
            "autoRotate": 2,
            "title": "Botanische Gärten der Universität Bonn",
            "author": "Daham",
            "pitch":1.9534115504439242,
            "yaw": -163.56778482806146,
            "hfov": 360,
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": -178,
                    "type": "scene",
                    "text": "go",
                    "sceneId": "64",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        },
        "64": {
            "type": "equirectangular",
            "panorama": "/mapa/panellum/images/360_0064_stitched_straightened_injected.JPG",
            "autoLoad": true,
            "autoRotate": 2,
            "title": "Botanische Gärten der Universität Bonn",
            "author": "Daham",
            "pitch":-2.9534115504439242,
            "yaw": -4.56778482806146,
            "hfov": 360,
            "hotSpots": [
                {
                    "pitch": 0.8984355713498038,
                    "yaw": -0.3166352018959664,
                    "type": "scene",
                    "text": "go",
                    "sceneId": "65",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        },
        "65": {
            "type": "equirectangular",
            "panorama": "/mapa/panellum/images/360_0065_stitched_straightened_injected.JPG",
            "autoLoad": true,
            "autoRotate": 2,
            "title": "Botanische Gärten der Universität Bonn",
            "author": "Daham",
            "pitch":-0.9534115504439242,
            "yaw": 15.56778482806146,
            "hfov": 360,
            "hotSpots": [
                {
                    "pitch": -2.8984355713498038,
                    "yaw": 12.3166352018959664,
                    "type": "scene",
                    "text": "go",
                    "sceneId": "66",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        },
        "66": {
            "type": "equirectangular",
            "panorama": "/mapa/panellum/images/360_0066_stitched_straightened_injected.JPG",
            "autoLoad": true,
            "autoRotate": 2,
            "title": "Botanische Gärten der Universität Bonn",
            "author": "Daham",
            "pitch":1.9534115504439242,
            "yaw": -34.56778482806146,
            "hfov": 360,
            "hotSpots": [
                {
                    "pitch": 0.8984355713498038,
                    "yaw": -0.3166352018959664,
                    "type": "scene",
                    "text": "go",
                    "sceneId": "67",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        },
        "67": {
            "type": "equirectangular",
            "panorama": "/mapa/panellum/images/360_0067_stitched_straightened_injected.JPG",
            "autoLoad": true,
            "autoRotate": 2,
            "title": "Botanische Gärten der Universität Bonn",
            "author": "Daham",
            "pitch":1.9534115504439242,
            "yaw": 26.56778482806146,
            "hfov": 360,
            "hotSpots": [
                {
                    "pitch": -3.8984355713498038,
                    "yaw": -0.3166352018959664,
                    "type": "scene",
                    "text": "go",
                    "sceneId": "68",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        },
        "68": {
            "type": "equirectangular",
            "panorama": "/mapa/panellum/images/360_0068_stitched_straightened_injected.JPG",
            "autoLoad": true,
            "autoRotate": 2,
            "title": "Botanische Gärten der Universität Bonn",
            "author": "Daham",
            "pitch":-4.9534115504439242,
            "yaw": -14.56778482806146,
            "hfov": 360,
            "hotSpots": [
                {
                    "pitch": -0.8984355713498038,
                    "yaw": -15.3166352018959664,
                    "type": "scene",
                    "text": "go",
                    "sceneId": "69",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        },
        "69": {
            "type": "equirectangular",
            "panorama": "/mapa/panellum/images/360_0069_stitched_straightened_injected.JPG",
            "autoLoad": true,
            "autoRotate": 2,
            "title": "Botanische Gärten der Universität Bonn",
            "author": "Daham",
            "pitch":1.9534115504439242,
            "yaw": 26.56778482806146,
            "hfov": 360,
            "hotSpots": [
                {
                    "pitch": -5.8984355713498038,
                    "yaw": -19.3166352018959664,
                    "type": "scene",
                    "text": "go",
                    "sceneId": "70",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        },
        "70": {
            "type": "equirectangular",
            "panorama": "/mapa/panellum/images/360_0070_stitched_straightened_injected.JPG",
            "autoLoad": true,
            "autoRotate": 2,
            "title": "Botanische Gärten der Universität Bonn",
            "author": "Daham",
            "pitch":3.9534115504439242,
            "yaw": 130.56778482806146,
            "hfov": 360,
            "hotSpots": [
                {
                    "pitch": -2.8984355713498038,
                    "yaw": 14.3166352018959664,
                    "type": "scene",
                    "text": "go",
                    "sceneId": "71",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        },
        "71": {
            "type": "equirectangular",
            "panorama": "/mapa/panellum/images/360_0071_stitched_straightened_injected.JPG",
            "autoLoad": true,
            "autoRotate": 2,
            "title": "Botanische Gärten der Universität Bonn",
            "author": "Daham",
            "pitch":-2.9534115504439242,
            "yaw": 75.56778482806146,
            "hfov": 360,
            "hotSpots": [
                {
                    "pitch": -5.8984355713498038,
                    "yaw": 7.3166352018959664,
                    "type": "scene",
                    "text": "go",
                    "sceneId": "72",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        },
        "72": {
            "type": "equirectangular",
            "panorama": "/mapa/panellum/images/360_0072_stitched_straightened_injected.JPG",
            "autoLoad": true,
            "autoRotate": 2,
            "title": "Botanische Gärten der Universität Bonn",
            "author": "Daham",
            "pitch":-10.9534115504439242,
            "yaw": 16.56778482806146,
            "hfov": 360,
            "hotSpots": [
                {
                    "pitch": -6.8984355713498038,
                    "yaw": 0.3166352018959664,
                    "type": "scene",
                    "text": "go",
                    "sceneId": "73",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        },
        "73": {
            "type": "equirectangular",
            "panorama": "/mapa/panellum/images/360_0073_stitched_straightened_injected.JPG",
            "autoLoad": true,
            "autoRotate": 2,
            "title": "Botanische Gärten der Universität Bonn",
            "author": "Daham",
            "pitch":-1.9534115504439242,
            "yaw": 4.56778482806146,
            "hfov": 360,
            "hotSpots": [
                {
                    "pitch": -2.8984355713498038,
                    "yaw": 9.3166352018959664,
                    "type": "scene",
                    "text": "go",
                    "sceneId": "74",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        },
        "74": {
            "type": "equirectangular",
            "panorama": "/mapa/panellum/images/360_0074_stitched_straightened_injected.JPG",
            "autoLoad": true,
            "autoRotate": 2,
            "title": "Botanische Gärten der Universität Bonn",
            "author": "Daham",
            "pitch":-1.9534115504439242,
            "yaw": 4.56778482806146,
            "hfov": 360,
            "hotSpots": [
                {
                    "pitch": -2.8984355713498038,
                    "yaw": 2.3166352018959664,
                    "type": "scene",
                    "text": "go",
                    "sceneId": "75",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        },
        "75": {
            "type": "equirectangular",
            "panorama": "/mapa/panellum/images/360_0075_stitched_straightened_injected.JPG",
            "autoLoad": true,
            "autoRotate": 2,
            "title": "Botanische Gärten der Universität Bonn",
            "author": "Daham",
            "pitch":-3.9534115504439242,
            "yaw": 23.56778482806146,
            "hfov": 360,
            "hotSpots": [
                {
                    "pitch": -0.8984355713498038,
                    "yaw": 26.3166352018959664,
                    "type": "scene",
                    "text": "go",
                    "sceneId": "76",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        },
        "76": {
            "type": "equirectangular",
            "panorama": "/mapa/panellum/images/360_0076_stitched_straightened_injected.JPG",
            "autoLoad": true,
            "autoRotate": 2,
            "title": "Botanische Gärten der Universität Bonn",
            "author": "Daham",
            "pitch":-6.9534115504439242,
            "yaw": 59.56778482806146,
            "hfov": 360,
            "hotSpots": [
                {
                    "pitch": -4.8984355713498038,
                    "yaw": 34.3166352018959664,
                    "type": "scene",
                    "text": "go",
                    "sceneId": "78",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        },
        "78": {
            "type": "equirectangular",
            "panorama": "/mapa/panellum/images/360_0078_stitched_straightened_injected.JPG",
            "autoLoad": true,
            "autoRotate": 2,
            "title": "Botanische Gärten der Universität Bonn",
            "author": "Daham",
            "pitch":-8.9534115504439242,
            "yaw": 24.56778482806146,
            "hfov": 360,
            "hotSpots": [
                {
                    "pitch": -1.8984355713498038,
                    "yaw": 10.3166352018959664,
                    "type": "scene",
                    "text": "go",
                    "sceneId": "79",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        },
        "79": {
            "type": "equirectangular",
            "panorama": "/mapa/panellum/images/360_0079_stitched_straightened_injected.JPG",
            "autoLoad": true,
            "autoRotate": 2,
            "title": "Botanische Gärten der Universität Bonn",
            "author": "Daham",
            "pitch":-11.9534115504439242,
            "yaw": -5.56778482806146,
            "hfov": 360,
            "hotSpots": [
                {
                    "pitch": -1.8984355713498038,
                    "yaw": 10.3166352018959664,
                    "type": "scene",
                    "text": "go",
                    "sceneId": "81",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        },
        "81": {
            "type": "equirectangular",
            "panorama": "/mapa/panellum/images/360_0081_stitched_straightened_injected.JPG",
            "autoLoad": true,
            "autoRotate": 2,
            "title": "Botanische Gärten der Universität Bonn",
            "author": "Daham",
            "pitch":-11.9534115504439242,
            "yaw": -5.56778482806146,
            "hfov": 360,
            "hotSpots": [
                {
                    "pitch": 3.8984355713498038,
                    "yaw": 13.3166352018959664,
                    "type": "scene",
                    "text": "go",
                    "sceneId": "82",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        },
        "82": {
            "type": "equirectangular",
            "panorama": "/mapa/panellum/images/360_0082_stitched_straightened_injected.JPG",
            "autoLoad": true,
            "autoRotate": 2,
            "title": "Botanische Gärten der Universität Bonn",
            "author": "Daham",
            "pitch":-6.9534115504439242,
            "yaw": 149.56778482806146,
            "hfov": 360,
            "hotSpots": [
                {
                    "pitch": -1.8984355713498038,
                    "yaw": 154.3166352018959664,
                    "type": "scene",
                    "text": "go",
                    "sceneId": "83",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        },
        "83": {
            "type": "equirectangular",
            "panorama": "/mapa/panellum/images/360_0083_stitched_straightened_injected.JPG",
            "autoLoad": true,
            "autoRotate": 2,
            "title": "Botanische Gärten der Universität Bonn",
            "author": "Daham",
            "pitch":-8.9534115504439242,
            "yaw": 146.56778482806146,
            "hfov": 360,
            "hotSpots": [
                {
                    "pitch": -1.8984355713498038,
                    "yaw": 154.3166352018959664,
                    "type": "scene",
                    "text": "go",
                    "sceneId": "84",
                    // "targetYaw": -23,
                    // "targetPitch": 2
                }
            ]
        },
        "84": {
            "type": "equirectangular",
            "panorama": "/mapa/panellum/images/360_0084_stitched_straightened_injected.JPG",
            "autoLoad": true,
            "autoRotate": 2,
            "title": "Botanische Gärten der Universität Bonn",
            "author": "Daham",
            "pitch":-10.9534115504439242,
            "yaw": 0.56778482806146,
            "hfov": 360,
            "hotSpots": [
                {
                    "pitch": -2.8984355713498038,
                    "yaw": -8.3166352018959664,
                    "type": "scene",
                    "text": "go",
                    "sceneId": "85",
                    // "targetYaw": -23,
                    // "targetPitch": 2
                }
            ]
        },
        "85": {
            "type": "equirectangular",
            "panorama": "/mapa/panellum/images/360_0085_stitched_straightened_injected.JPG",
            "autoLoad": true,
            "autoRotate": 2,
            "title": "Botanische Gärten der Universität Bonn",
            "author": "Daham",
            "pitch":-9.9534115504439242,
            "yaw": -71.56778482806146,
            "hfov": 360,
            "hotSpots": [
                {
                    "pitch": -9.8984355713498038,
                    "yaw": -71.3166352018959664,
                    "type": "scene",
                    "text": "go to exit ",
                    "sceneId": "86",
                    // "targetYaw": -23,
                    // "targetPitch": 2
                }
            ]
        },
        "86": {
            "type": "equirectangular",
            "panorama": "/mapa/panellum/images/360_0086_stitched_straightened_injected.JPG",
            "autoLoad": true,
            "autoRotate": 2,
            "title": "Botanische Gärten der Universität Bonn",
            "author": "Daham",
            "pitch":-3.9534115504439242,
            "yaw": 139.56778482806146,
            "hfov": 360,
            "hotSpots": [
                {
                    "pitch": 3.8984355713498038,
                    "yaw": 144.3166352018959664,
                    "type": "scene",
                    "text": "go to IGG ",
                    "sceneId": "87",
                    // "targetYaw": -23,
                    // "targetPitch": 2
                },
                {
                    "pitch": -7,
                    "yaw": 135,
                    "cssClass": "custom-hotspot",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "Geoinformation Meckenheimer Allee 172 53115 Bonn"
                }
            ]
        },
        "87": {
            "type": "equirectangular",
            "panorama": "/mapa/panellum/images/360_0087_stitched_straightened_injected.JPG",
            "hotSpots": [
                {
                    "pitch": 2,
                    "yaw": 0,
                    "cssClass": "custom-hotspot",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "Geoinfo — IGG - Universität Bonn"
                }
            ],
            "autoLoad": true,
            "autoRotate": -2,
            "title": "Poppelsdorfer Schloss",
            "author": "Daham",
            "pitch":7.9534115504439242,
            "yaw": 16.56778482806146,
            "hfov": 350 
    }
}
});


// Hot spot creation function
function hotspot(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-tooltip');
    var span = document.createElement('span');
    span.innerHTML = args;
    hotSpotDiv.appendChild(span);
    span.style.width = span.scrollWidth - 20 + 'px';
    span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
    span.style.marginTop = -span.scrollHeight - 12 + 'px';
}

// // Make buttons work
document.getElementById('pan-up').addEventListener('click', function(e) {
    viewer.setPitch(viewer.getPitch() + 10);
});
document.getElementById('pan-down').addEventListener('click', function(e) {
    viewer.setPitch(viewer.getPitch() - 10);
});
document.getElementById('pan-left').addEventListener('click', function(e) {
    viewer.setYaw(viewer.getYaw() - 10);
});
document.getElementById('pan-right').addEventListener('click', function(e) {
    viewer.setYaw(viewer.getYaw() + 10);
});
document.getElementById('zoom-in').addEventListener('click', function(e) {
    viewer.setHfov(viewer.getHfov() - 10);
});
document.getElementById('zoom-out').addEventListener('click', function(e) {
    viewer.setHfov(viewer.getHfov() + 10);
});
document.getElementById('fullscreen').addEventListener('click', function(e) {
    viewer.toggleFullscreen();
});



viewer.on('mousedown', function(event) {
    // For pitch and yaw of center of viewer
    //// coords[0] is pitch, coords[1] is yaw
    console.log(viewer.getPitch(), viewer.getYaw());
    // For pitch and yaw of mouse location
    console.log(viewer.mouseEventToCoords(event));
})
