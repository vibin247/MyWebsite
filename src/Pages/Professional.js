import Experience from "../Components/Professional/Experience";
import experiececonfig from "../Configs/experiececonfig";
import { useState } from "react";

export default function Professional(){

    const [selectedExperience, SetSelectedExperience] = useState(false);

    const setDescription = (experience) => {
        if(experience.name === selectedExperience.name){
            SetSelectedExperience(false);
            return;
        }
        SetSelectedExperience(experience);
    };

    return (
        <section>
            <div className="professional-page tab-section align-items-center flex-column">
                <div className="content-header">Professional experience</div>
                <div className="experience-wrapper">
                    {
                        experiececonfig.map((element) => (
                            <Experience key={element.name} experience={element} handleClick={setDescription}/>
                        ))
                    }
                </div>
                <div className="experience-description disable-text-select ">
                    { selectedExperience && <selectedExperience.descriptionComponent/>}
                </div>
            </div>
        </section>
    );
}