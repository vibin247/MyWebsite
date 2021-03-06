export default function Experience(props) {
    const experience = props.experience;

    const handleClick = () => {
        props.handleClick(experience);
    }

    return (
        <div className="experience disable-text-select" onClick={handleClick}>
            <div className="duration">
                {experience.duration}
            </div>
            <div className="designation">
                {experience.designation}
            </div>
        </div>
    );
}