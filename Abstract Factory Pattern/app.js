var Device = /** @class */ (function () {
    function Device() {
    }
    Device.prototype.createMobileDevice = function () {
        return new MobileDevice();
    };
    Device.prototype.createDesktopDevice = function () {
        return new DesktopDevice();
    };
    return Device;
}());
var MobileDevice = /** @class */ (function () {
    function MobileDevice() {
    }
    MobileDevice.prototype.creatingMobileDevice = function () {
        return "Mobile device is created";
    };
    return MobileDevice;
}());
var DesktopDevice = /** @class */ (function () {
    function DesktopDevice() {
    }
    DesktopDevice.prototype.creatingDesktopDevice = function () {
        return "Desktop device is created";
    };
    return DesktopDevice;
}());
function clientOrder(factory) {
    var mobile = factory.createMobileDevice();
    var desktop = factory.createDesktopDevice();
    console.log(mobile.creatingMobileDevice());
    console.log(desktop.creatingDesktopDevice());
}
clientOrder(new Device());
