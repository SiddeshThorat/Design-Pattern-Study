interface DeviceCreator{
    createMobileDevice(): MobileDevice;
    createDesktopDevice(): DesktopDevice;
}

class Device implements DeviceCreator{
    public createMobileDevice(): MobileDevice{
        return new MobileDevice();
    }
    public createDesktopDevice(): DesktopDevice{
        return new DesktopDevice();
    }
}

interface MobileDeviceInterface{
    creatingMobileDevice(): String;
}
interface DesktopDeviceInterface{
    creatingDesktopDevice(): string;
}

class MobileDevice implements MobileDeviceInterface{
    public creatingMobileDevice():string{
        return "Mobile device is created"
    }
}

class DesktopDevice implements DesktopDeviceInterface{
    public creatingDesktopDevice():string{
        return "Desktop device is created"
    }
}

function clientOrder(factory: Device){
    const mobile = factory.createMobileDevice();
    const desktop = factory.createDesktopDevice();

    console.log(mobile.creatingMobileDevice());
    console.log(desktop.creatingDesktopDevice());
}

clientOrder(new Device());
