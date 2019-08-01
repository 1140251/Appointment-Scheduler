export class Utils {

    static s4(): any {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    public static guid(): string {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }

    public static customCode(name: string): string {
        return name + "_" + this.guid();
    }
}