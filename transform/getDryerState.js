var returnValue = 'OFF'
JSON.parse(input).data.devices.forEach(function(element, index, array) {
    if (element.id == 'ZWayVDev_4:0:37') {
        returnValue = element.metrics.level.toUpperCase();
    }});
returnValue;