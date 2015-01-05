var returnValue = null
JSON.parse(input).data.devices.forEach(function(element, index, array) {
    if (element.id == 'ZWayVDev_zway_5-0-49-4') {
        returnValue = element.metrics.level;
    }});
returnValue;