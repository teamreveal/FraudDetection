window.checkMouseInteraction = function () {
    var hasCtrlKey = false;
    var hasTabKey = false;

    document.addEventListener('keydown', function (event) {
        if (event.ctrlKey && event.code === 'KeyT') {
            console.log("alert");
            hasCtrlKey = true;
            hasTabKey = true;
        }
    });

    window.addEventListener('blur', function () {
        if (hasCtrlKey && hasTabKey) {
            DotNet.invokeMethodAsync('BlazorApp1', 'HandleMouseInteraction', 'newTab');

            DotNet.invokeMethodAsync('BlazorApp1', 'HandleMouseInteraction', 'newTab');
            hasCtrlKey = false;
            hasTabKey = false;
        }
    });

    window.addEventListener('focus', function () {
        hasCtrlKey = false;
        hasTabKey = false;
    });

    return !hasCtrlKey;
};
window.blazorMouseInterop = {
    handleMouseClick: function (elementId) {
        var element = document.getElementById(elementId);
        element.click();
    }
};