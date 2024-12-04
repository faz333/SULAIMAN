var APP_DATA = {
  "scenes": [
    {
      "id": "0-dining-room",
      "name": "DINING ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.04027682889219264,
        "pitch": 0.03947489336211163,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.43462364650075,
          "pitch": 0.11428562492264938,
          "rotation": 3.141592653589793,
          "target": "2-break-fast-counter"
        },
        {
          "yaw": -1.6072487203870303,
          "pitch": 0.13006416905102647,
          "rotation": 0.7853981633974483,
          "target": "3-wash-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen-area",
      "name": "KITCHEN AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.630647539076313,
          "pitch": 0.19715728172835334,
          "rotation": 3.141592653589793,
          "target": "2-break-fast-counter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-break-fast-counter",
      "name": "BREAK FAST COUNTER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7555308354289672,
          "pitch": 0.2791657080534584,
          "rotation": 3.141592653589793,
          "target": "1-kitchen-area"
        },
        {
          "yaw": -2.9303591961577418,
          "pitch": 0.22620583255031512,
          "rotation": 0,
          "target": "0-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-wash-area",
      "name": "WASH AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4302267046738892,
          "pitch": 0.08245812555414389,
          "rotation": 0,
          "target": "0-dining-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
