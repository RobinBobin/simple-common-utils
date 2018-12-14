import BaseFormat from "./formats/BaseFormat";

export default class Format {
   static zx55v1 = new BaseFormat(0x55, 1, 1, 1, 2);
   static zx55v2 = new BaseFormat(0x55, 1, 2, 1, 2);
}
