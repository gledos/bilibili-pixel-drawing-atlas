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
    https://bilipda.gledos.science/1st/license.txt
    
    ========================================================================
*/

// code from: https://github.com/placeAtlas/atlas/commit/9a177b814d5da9a094b6a028ce3fa4a13458b9f5

window.addEventListener("error", function (e) {
    console.log(e);
    var errorMessage = "<p class=\"error\">An error has occurred:</p>";
    errorMessage += "<p class=\"errorBody\">" + e.message + "</p>";
    errorMessage += "<p class=\"errorBody\">on line " + e.lineno + "</p>";
    errorMessage += "<p class=\"error\">If this keeps happening, feel free to send me a <a href=\"mailto:cngledos@gmail.com\">mail</a>.</p>";
    document.getElementById("loadingContent").innerHTML = errorMessage;
});

function getPositionOfEntry(entry) {
    let startX = 2000,
        startY = 2000;
    for (let [x, y] of entry.path) {
        startX = Math.min(x, startX);
        startY = Math.min(y, startY)
    }
    if (startX === 2000 || startY === 2000) return null;
    return [parseInt(startX), parseInt(startY)];
}

// Modified from https://stackoverflow.com/a/33670691 
function calcPolygonArea(vertices) {
    var total = 0;

    for (var i = 0, l = vertices.length; i < l; i++) {
        var addX = vertices[i][0];
        var addY = vertices[i == vertices.length - 1 ? 0 : i + 1][1];
        var subX = vertices[i == vertices.length - 1 ? 0 : i + 1][0];
        var subY = vertices[i][1];

        total += (addX * addY * 0.5);
        total -= (subX * subY * 0.5);
    }

    return Math.floor(Math.abs(total));
}