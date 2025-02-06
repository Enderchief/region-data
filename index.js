import ab from "./src/ab.json" with { type: "json" };
import bc from "./src/bc.json" with { type: "json" };
import mb from "./src/mb.json" with { type: "json" };
import nb from "./src/nb.json" with { type: "json" };
import nl from "./src/nl.json" with { type: "json" };
import ns from "./src/ns.json" with { type: "json" };
import nt from "./src/nt.json" with { type: "json" };
import nu from "./src/nu.json" with { type: "json" };
import on from "./src/on.json" with { type: "json" };
import pe from "./src/pe.json" with { type: "json" };
import qc from "./src/qc.json" with { type: "json" };
import sk from "./src/sk.json" with { type: "json" };
import yt from "./src/yt.json" with { type: "json" };

export function getPlace(province) {
  switch (province) {
    case "alberta":
      return ab;
    case "british_columbia":
      return bc;
    case "manitoba":
      return mb;
    case "new_brunswick":
      return nb;
    case "newfoundland_and_labrador":
      return nl;
    case "nova_scotia":
      return ns;
    case "northwest_territories":
      return nt;
    case "nunavut":
      return nu;
    case "ontario":
      return on;
    case "prince_edward_island":
      return pe;
    case "quebec":
      return qc;
    case "saskatchewan":
      return sk;
    case "yukon":
      return yt;
    default:
      return null;
  }
}
