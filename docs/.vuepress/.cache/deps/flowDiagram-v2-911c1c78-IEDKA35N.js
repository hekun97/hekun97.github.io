import {
  flowRendererV2,
  flowStyles
} from "./chunk-SFEHN7CM.js";
import {
  flowDb,
  parser$1
} from "./chunk-BX3FVN5L.js";
import "./chunk-B2YKX4WE.js";
import "./chunk-2LTW34W2.js";
import "./chunk-CBAROFL4.js";
import "./chunk-TWJ5CXT6.js";
import "./chunk-5XA3EM3J.js";
import "./chunk-URXXRCDJ.js";
import "./chunk-YV43AHMX.js";
import {
  require_dist
} from "./chunk-5G4YUUOS.js";
import "./chunk-R5262Q2Q.js";
import "./chunk-7CESJEJ3.js";
import {
  require_dayjs_min,
  setConfig
} from "./chunk-W3FTNUPT.js";
import {
  __toESM
} from "./chunk-OZI5HTJH.js";

// node_modules/mermaid/dist/flowDiagram-v2-911c1c78.js
var import_sanitize_url = __toESM(require_dist(), 1);
var import_dayjs = __toESM(require_dayjs_min(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-911c1c78-IEDKA35N.js.map
