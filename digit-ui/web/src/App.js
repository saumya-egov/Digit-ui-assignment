import { PGRModule, PGRLinks, PGRReducers } from "@egovernments/digit-ui-module-pgr";
import { FSMModule, FSMLinks } from "@egovernments/digit-ui-module-fsm";
import { DigitUI } from "@egovernments/digit-ui-module-core";
import { pgrComponents } from "./pgr";
import Registry from "./ComponentRegistry";

const enabledModules = ["PGR", "FSM"];
const registry = new Registry({
  ...pgrComponents,
  PGRLinks,
  PGRModule,
  FSMModule,
  FSMLinks,
});
const moduleReducers = (initData) => ({
  pgr: PGRReducers(initData),
});

function App() {
  return (
    <DigitUI stateCode="pb" registry={registry} enabledModules={enabledModules} moduleReducers={moduleReducers} />
  );
}

export default App;
