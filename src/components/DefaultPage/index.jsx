import { Outlet } from "react-router";
import Banner from "../Banner";

const DefaultPage = () => {
    return(
        <main>
            <Banner/>
            <Outlet/>
        </main>
    );
}

export default DefaultPage;