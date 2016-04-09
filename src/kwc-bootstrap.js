(() => {
  "use strict";
  
  class KwcBootstrap {
    beforeRegister() {
      this.is = "kwc-bootstrap";

      this.properties = {
        property: {
          type: String,
          value: "none"
        }
      };
    }
  }

  Polymer(KwcBootstrap);
})();