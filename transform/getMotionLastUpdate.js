var returnValue = 0
JSON.parse(input).data.devices.forEach(function(element, index, array) {
    if (element.id == 'ZWayVDev_zway_12-0-48-1') {
        returnValue = element.updateTime;
    }});
returnValue;