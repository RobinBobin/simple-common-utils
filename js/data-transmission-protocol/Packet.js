import StaticUtils from "../StaticUtils";

export default class Packet {
   /**
    * Creates a packet of the specified format. Valid invocation variants:
    *    1) new Packet(format[, <command number>[, byte1, ..., byteN]]);
    *    2) new Packet(format, buffer, start, end);
    * 
    **/
   constructor() {
      this._format = arguments[0];
      
      if (arguments.length > 1) {
         if (Array.isArray(arguments[1])) {
            this._buf = arguments[1].slice(arguments[2], arguments[3]);
      
            StaticUtils.verify(this._format.isValid(this._buf), `[ ${this._buf.join(", ")} ] is not a valid packet.`);
         } else {
            const params = Array.from(arguments);
            params.shift();
            
            this._buf = [];
            
            this._format.setStartMarker(this._buf);
            this._format.setCommandNumber(this._buf, params.shift());
            
            this.setParams(params);
         }
      }
   }
   
   setParams(params) {
      this._format.setParams(this._buf, params);
   }
   
   getRawBuffer() {
      return this._buf;
   }
   
   _verifyCmdValidity(cmd) {
      const commandNumber = this._format.getCommandNumber(this._buf);
      
      StaticUtils.verify(commandNumber == cmd, `${this.constructor.name}: the command number must be ${cmd}, not ${commandNumber}.`);
   }
   
   _verifySizeValidity(size) {
      const packetSize = this._format.getPacketSize(this._buf);
      
      StaticUtils.verify(this._buf.length == packetSize, `${this.constructor.name}: the internal buffer length (${this._buf.length}) isn't equal to the packet size stored in it (${packetSize}).`);
      
      const wholeSize = size + this._format.getMinPacketSize();
      
      StaticUtils.verify(packetSize == wholeSize, `${this.constructor.name}: the packet size must be ${wholeSize}, not ${packetSize}.`);
   }
}
