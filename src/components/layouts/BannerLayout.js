import {Outlet} from 'react-router-dom';
import MainBanner from "../MainBanner";

const BannerLayout = () => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <MainBanner/>
                    <Outlet/>
                </div>
            </div>
        </>
    );
}
export {BannerLayout}