import DEMO_TRACK_DATA from "../../DemoData";
import { FaGear } from "react-icons/fa6";

function Mainscreen() {
  return (
    
    
    <div className="w-full space-between ">
        <div className="flex w-full">
            <div className="flex-none grow">
                <div className="m-11 ">
                    <img className="size-max" src={DEMO_TRACK_DATA.jacket}/>
                </div>
                <div className="ml-11 border-2 rounded-md">
                    <h1 className="font-sans text-4xl mt-4 mb-4 ml-2">
                        {DEMO_TRACK_DATA.trackName}
                    </h1>
                </div>
            </div>

            <div className="flex-initial grow">
             <div className="m-11">
                <h1 className="">アーティスト名</h1>
             </div>
                <div className="m-11 border-2 rounded-md">
                    <p className="h-40">
                        {DEMO_TRACK_DATA.description}
                    </p>
                </div>
                <div className="ml-11 mr-11">
                    <div className="md-4">
                        {
                            (() => {
                                    return (
                                        DEMO_TRACK_DATA.links.map((link) => {
                                            return (
                                            <div className ="h-20 mt-7 md-7 border-2 rounded-md">
                                            <p className=" mr-7">DemoSite</p>
                                            <a className="underline text-cyan-400"href = {link}>{link}</a>
                                            </div>
                                            )
                                        })
                                    );
                                })()

                            }
                        </div>
                    </div>
            </div>

            
            <div className="flex-initial grow mt-11" >
                <a href=""><FaGear /></a>
            </div>


        </div>
        
    </div>
  );
}

export default Mainscreen;


