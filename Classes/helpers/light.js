export class Light {

    isOn = false;

    switchOn() {
        this.isOn = true;
        if(this.isOn) {
            console.log("It's already on!")
        } else {
            console.log("Is on!");
        }
    }

    switchOff() {
        this.isOn = false;
        if(!this.isOn) {
            console.log("It's already off!")
        } else {
            console.log("Is off!");
        }
    }

}