import Personal from "../steper/personal";
import Business from "../steper/business";
import Verification from "../steper/Verification";
import Stepper from 'react-stepper-horizontal';
import { useState } from "react";


function Login() {

    const [activeStep, setActiveStep] = useState(0);



    const handleStepsPlus = () => {
        setActiveStep(activeStep + 1);
    }
    const handleStepsMinus = () => {
        setActiveStep(activeStep - 1);
    }

    function getSectionComponent() {
        switch (activeStep) {
            case 0: return <Personal activeStep={activeStep} handleStepsPlus={handleStepsPlus} />;
            case 1: return <Business activeStep={activeStep} handleStepsPlus={handleStepsPlus} handleStepsMinus={handleStepsMinus} />;
            case 2: return <Verification activeStep={activeStep} handleStepsPlus={handleStepsPlus} handleStepsMinus={handleStepsMinus} />;
            default: return null;
        }
    }

    return (
        <div className='login'>
            
            <div style={{ padding: '20px' }}>
                {getSectionComponent()}
                {/* {activeStep == 0 && <Personal activeStep={activeStep} handleStepsPlus={handleStepsPlus} />}
                {activeStep == 0 && <Personal activeStep={activeStep} handleStepsPlus={handleStepsPlus} />}
                {activeStep == 0 && <Personal activeStep={activeStep} handleStepsPlus={handleStepsPlus} />} */}
            </div>
        </div>
    )
}
export default Login;