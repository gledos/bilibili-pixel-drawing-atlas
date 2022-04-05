/*
    ========================================================================
    The /r/place Atlas
    
    An Atlas of Reddit's /r/place, with information to each
    artwork    of the canvas provided by the community.
    
    Copyright (C) 2017 Roland Rytz <roland@draemm.li>
    Licensed under the GNU Affero General Public License Version 3
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
    For more information, see:
    https://draemm.li/various/place-atlas/license.txt
    
    ========================================================================
*/




window.addEventListener("error", function (e) {
    console.log(e);
    var errorMessage = "<p class=\"error\">An error has occurred:</p>";
    errorMessage += "<p class=\"errorBody\">" + e.message + "</p>";
    errorMessage += "<p class=\"errorBody\">on line " + e.lineno + "</p>";
    errorMessage += "<p class=\"error\">If this keeps happening, feel free to send me a <a href=\"mailto:roland.rytz@gmail.com\">mail</a>.</p>";
    document.getElementById("loadingContent").innerHTML = errorMessage;
});

var atlas = [{
        "id": 0,
        "name": "哔哩哔哩",
        "description": "",
        "website": "https://www.bilibili.com/",
        "subreddit": "",
        "center": [
            77.5,
            24.5
        ],
        "path": [
            [
                156.5,
                0.5
            ],
            [
                155.5,
                45.5
            ],
            [
                133.5,
                45.5
            ],
            [
                126.5,
                47.5
            ],
            [
                66.5,
                47.5
            ],
            [
                61.5,
                43.5
            ],
            [
                56.5,
                43.5
            ],
            [
                47.5,
                49.5
            ],
            [
                0.5,
                49.5
            ],
            [
                0.5,
                0.5
            ]
        ]
    },
    {
        "id": 0,
        "name": "薮猫",
        "description": "《兽娘动物园》的主角、吉祥物，薮猫的画像。",
        "website": "https://zh.moegirl.org.cn/zh-hans/兽娘动物园:薮猫",
        "subreddit": "",
        "center": [
            276.5,
            512.5
        ],
        "path": [
            [
                243.5,
                483.5
            ],
            [
                242.5,
                484.5
            ],
            [
                242.5,
                486.5
            ],
            [
                243.5,
                487.5
            ],
            [
                243.5,
                536.5
            ],
            [
                242.5,
                537.5
            ],
            [
                242.5,
                539.5
            ],
            [
                244.5,
                541.5
            ],
            [
                246.5,
                541.5
            ],
            [
                247.5,
                540.5
            ],
            [
                304.5,
                540.5
            ],
            [
                305.5,
                541.5
            ],
            [
                307.5,
                541.5
            ],
            [
                309.5,
                539.5
            ],
            [
                309.5,
                537.5
            ],
            [
                308.5,
                536.5
            ],
            [
                308.5,
                487.5
            ],
            [
                309.5,
                486.5
            ],
            [
                309.5,
                484.5
            ],
            [
                307.5,
                482.5
            ],
            [
                305.5,
                482.5
            ],
            [
                304.5,
                483.5
            ]
        ]
    },
    {
        "id": 0,
        "name": "2233娘",
        "description": "这是哔哩哔哩网站的吉祥物萌娘。",
        "website": "https://zh.moegirl.org.cn/Bilibili娘",
        "subreddit": "",
        "center": [
            631.5,
            408.5
        ],
        "path": [
            [
                536.5,
                280.5
            ],
            [
                523.5,
                286.5
            ],
            [
                524.5,
                292.5
            ],
            [
                528.5,
                294.5
            ],
            [
                511.5,
                312.5
            ],
            [
                511.5,
                297.5
            ],
            [
                506.5,
                288.5
            ],
            [
                492.5,
                297.5
            ],
            [
                484.5,
                281.5
            ],
            [
                475.5,
                288.5
            ],
            [
                468.5,
                306.5
            ],
            [
                472.5,
                320.5
            ],
            [
                482.5,
                328.5
            ],
            [
                490.5,
                329.5
            ],
            [
                500.5,
                338.5
            ],
            [
                499.5,
                342.5
            ],
            [
                491.5,
                349.5
            ],
            [
                492.5,
                359.5
            ],
            [
                496.5,
                363.5
            ],
            [
                496.5,
                373.5
            ],
            [
                511.5,
                392.5
            ],
            [
                512.5,
                398.5
            ],
            [
                518.5,
                400.5
            ],
            [
                517.5,
                416.5
            ],
            [
                511.5,
                430.5
            ],
            [
                503.5,
                439.5
            ],
            [
                499.5,
                434.5
            ],
            [
                495.5,
                434.5
            ],
            [
                492.5,
                438.5
            ],
            [
                481.5,
                425.5
            ],
            [
                474.5,
                431.5
            ],
            [
                470.5,
                445.5
            ],
            [
                472.5,
                454.5
            ],
            [
                480.5,
                462.5
            ],
            [
                491.5,
                463.5
            ],
            [
                499.5,
                459.5
            ],
            [
                506.5,
                462.5
            ],
            [
                507.5,
                466.5
            ],
            [
                503.5,
                471.5
            ],
            [
                506.5,
                479.5
            ],
            [
                515.5,
                487.5
            ],
            [
                526.5,
                492.5
            ],
            [
                530.5,
                489.5
            ],
            [
                547.5,
                485.5
            ],
            [
                547.5,
                492.5
            ],
            [
                551.5,
                494.5
            ],
            [
                560.5,
                491.5
            ],
            [
                564.5,
                492.5
            ],
            [
                559.5,
                507.5
            ],
            [
                555.5,
                518.5
            ],
            [
                562.5,
                528.5
            ],
            [
                573.5,
                532.5
            ],
            [
                574.5,
                529.5
            ],
            [
                576.5,
                523.5
            ],
            [
                588.5,
                500.5
            ],
            [
                601.5,
                526.5
            ],
            [
                605.5,
                540.5
            ],
            [
                614.5,
                539.5
            ],
            [
                624.5,
                530.5
            ],
            [
                622.5,
                518.5
            ],
            [
                615.5,
                504.5
            ],
            [
                612.5,
                488.5
            ],
            [
                616.5,
                483.5
            ],
            [
                616.5,
                479.5
            ],
            [
                607.5,
                470.5
            ],
            [
                627.5,
                466.5
            ],
            [
                627.5,
                463.5
            ],
            [
                622.5,
                460.5
            ],
            [
                617.5,
                453.5
            ],
            [
                627.5,
                452.5
            ],
            [
                630.5,
                449.5
            ],
            [
                618.5,
                440.5
            ],
            [
                618.5,
                435.5
            ],
            [
                626.5,
                428.5
            ],
            [
                626.5,
                424.5
            ],
            [
                628.5,
                418.5
            ],
            [
                636.5,
                412.5
            ],
            [
                633.5,
                421.5
            ],
            [
                627.5,
                427.5
            ],
            [
                629.5,
                431.5
            ],
            [
                638.5,
                432.5
            ],
            [
                641.5,
                449.5
            ],
            [
                637.5,
                458.5
            ],
            [
                642.5,
                462.5
            ],
            [
                647.5,
                462.5
            ],
            [
                656.5,
                469.5
            ],
            [
                657.5,
                461.5
            ],
            [
                659.5,
                460.5
            ],
            [
                664.5,
                467.5
            ],
            [
                670.5,
                463.5
            ],
            [
                671.5,
                465.5
            ],
            [
                659.5,
                478.5
            ],
            [
                657.5,
                488.5
            ],
            [
                658.5,
                500.5
            ],
            [
                657.5,
                504.5
            ],
            [
                658.5,
                509.5
            ],
            [
                664.5,
                516.5
            ],
            [
                671.5,
                525.5
            ],
            [
                671.5,
                534.5
            ],
            [
                668.5,
                545.5
            ],
            [
                671.5,
                547.5
            ],
            [
                677.5,
                545.5
            ],
            [
                686.5,
                551.5
            ],
            [
                693.5,
                571.5
            ],
            [
                706.5,
                570.5
            ],
            [
                711.5,
                566.5
            ],
            [
                711.5,
                563.5
            ],
            [
                709.5,
                560.5
            ],
            [
                709.5,
                549.5
            ],
            [
                716.5,
                547.5
            ],
            [
                722.5,
                567.5
            ],
            [
                721.5,
                573.5
            ],
            [
                724.5,
                575.5
            ],
            [
                729.5,
                575.5
            ],
            [
                741.5,
                568.5
            ],
            [
                740.5,
                561.5
            ],
            [
                741.5,
                552.5
            ],
            [
                735.5,
                528.5
            ],
            [
                726.5,
                518.5
            ],
            [
                730.5,
                515.5
            ],
            [
                736.5,
                515.5
            ],
            [
                741.5,
                508.5
            ],
            [
                741.5,
                481.5
            ],
            [
                735.5,
                473.5
            ],
            [
                743.5,
                479.5
            ],
            [
                750.5,
                479.5
            ],
            [
                758.5,
                485.5
            ],
            [
                765.5,
                490.5
            ],
            [
                772.5,
                490.5
            ],
            [
                776.5,
                487.5
            ],
            [
                771.5,
                482.5
            ],
            [
                771.5,
                475.5
            ],
            [
                781.5,
                456.5
            ],
            [
                793.5,
                425.5
            ],
            [
                794.5,
                421.5
            ],
            [
                793.5,
                397.5
            ],
            [
                787.5,
                384.5
            ],
            [
                781.5,
                379.5
            ],
            [
                790.5,
                374.5
            ],
            [
                791.5,
                364.5
            ],
            [
                782.5,
                359.5
            ],
            [
                777.5,
                361.5
            ],
            [
                775.5,
                357.5
            ],
            [
                772.5,
                356.5
            ],
            [
                768.5,
                358.5
            ],
            [
                767.5,
                353.5
            ],
            [
                761.5,
                352.5
            ],
            [
                759.5,
                354.5
            ],
            [
                757.5,
                347.5
            ],
            [
                747.5,
                343.5
            ],
            [
                742.5,
                349.5
            ],
            [
                742.5,
                354.5
            ],
            [
                727.5,
                347.5
            ],
            [
                713.5,
                345.5
            ],
            [
                723.5,
                333.5
            ],
            [
                718.5,
                330.5
            ],
            [
                710.5,
                330.5
            ],
            [
                699.5,
                333.5
            ],
            [
                695.5,
                337.5
            ],
            [
                694.5,
                344.5
            ],
            [
                681.5,
                346.5
            ],
            [
                667.5,
                352.5
            ],
            [
                653.5,
                364.5
            ],
            [
                648.5,
                366.5
            ],
            [
                649.5,
                357.5
            ],
            [
                654.5,
                350.5
            ],
            [
                652.5,
                342.5
            ],
            [
                655.5,
                333.5
            ],
            [
                652.5,
                327.5
            ],
            [
                646.5,
                324.5
            ],
            [
                641.5,
                311.5
            ],
            [
                644.5,
                307.5
            ],
            [
                644.5,
                299.5
            ],
            [
                653.5,
                287.5
            ],
            [
                653.5,
                274.5
            ],
            [
                645.5,
                264.5
            ],
            [
                633.5,
                258.5
            ],
            [
                623.5,
                259.5
            ],
            [
                619.5,
                273.5
            ],
            [
                608.5,
                270.5
            ],
            [
                606.5,
                285.5
            ],
            [
                601.5,
                283.5
            ],
            [
                604.5,
                277.5
            ],
            [
                593.5,
                281.5
            ],
            [
                577.5,
                279.5
            ],
            [
                585.5,
                276.5
            ],
            [
                584.5,
                270.5
            ],
            [
                574.5,
                267.5
            ],
            [
                553.5,
                279.5
            ]
        ]
    }
]




//console.log("There are "+atlas.length+" entries in the Atlas.");

/*
atlas.sort(function(a, b){
    if (a.id < b.id) {
        return -1;
    }
    if (a.id > b.id) {
        return 1;
    }
        // a must be equal to b
    return 0;
});

for(var i = 0; i < atlas.length; i++){
    if(atlas[i-1]){
        if(atlas[i-1].id == atlas[i].id){
            console.log(atlas[i-1].id + ": "+ atlas[i-1].name);
            console.log(atlas[i  ].id + ": "+ atlas[i  ].name);
        }
    }
}

console.log("biggest id: "+atlas[atlas.length-1].id + ", " + atlas[atlas.length-1].name);
*/


/*
for(var i = 0; i < atlas.length; i++){
    if(typeof atlas[i].website == "undefined"){
        console.log(atlas[i].name);
    } else if(atlas[i].website.trim() != ""){
        if(atlas[i].website.trim().substring(0, 4) != "http"){
            console.log(atlas[i].name + ": " + atlas[i].website);
        }
    }
}
*/

// sort by center.y, so that lines will overlap less
atlas.sort(function (a, b) {
    if (a.center[1] < b.center[1]) {
        return -1;
    }
    if (a.center[1] > b.center[1]) {
        return 1;
    }
    // a must be equal to b
    return 0;
});




/*

// Populate with test data

for(var i = 0; i < 10000; i++){
    var x = ~~(Math.random() * 1000)+0.5;
    var y = ~~(Math.random() * 1000)+0.5;
    var w = ~~(Math.random()*100);
    var h = ~~(Math.random()*100);
    atlas.push({
        "id": 5,
        "name": "test"+(i+3),
        "website": "",
        "subreddit": "",
        "center": [0, 0],
        "path":[
            [x, y],
            [x+w, y],
            [x+w, y+h],
            [x, y+h]
        ]
    });
}

*/