 import { FormStep } from "@egovernments/digit-ui-react-components";
 import React, { useState } from "react";


// const Selecthouseno = ({ config, onSelect, onSkip, t }) => {
//   return <FormStep config={config} onSelect={onSelect} t={t}></FormStep>;
// };

// export default Selecthouseno;



const Selecthouseno = ({ t, config, onSelect, value }) => {
  const [houseno, sethouseno] = useState(() => {
    const { houseno } = value;
    return houseno ? houseno : "";
  });

  const onChange = (event) => {
    const { value } = event.target;
    sethouseno(value);
  };

  return <FormStep config={config} onChange={onChange} onSelect={() => onSelect({ houseno })} value={houseno} t={t} />;
};

export default Selecthouseno;
