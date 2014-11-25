var returnValue = null
JSON.parse(input).data.devices.forEach(function(element, index, array) {
    if (element.id == 'ZWayVDev_2:0:49:4') {
        returnValue = element.metrics.level;
    }});
returnValue;