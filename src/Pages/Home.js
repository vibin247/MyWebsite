import HomeInfo from "../Components/Home/HomeInfo";
import scroll from "../js/Navigation";

export default function Home(props){

    const scrollToPage = () => {
        scroll.scrollToPage(props.tabs[1].name);
    };

    return (
        <section className="home-page">
            <div>
                <HomeInfo src="./images/MyFace.png"/>
                <div className="scroll-buttons">
                    <div className="scroll scroll-down" onClick={scrollToPage}></div>
                    <div className="scroll scroll-down" onClick={scrollToPage}></div>
                </div>
            </div>
        </section>
    );
}