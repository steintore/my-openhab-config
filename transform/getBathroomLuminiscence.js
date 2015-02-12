var returnValue = 0
JSON.parse(input).data.devices.forEach(function(element, index, array) {
    if (element.id == 'ZWayVDev_zway_15-0-49-3') {
        returnValue = element.metrics.level;
    }});
returnValue;