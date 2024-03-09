import DEMO_TRACK_DATA from "../../DemoData";
import { FaGear } from "react-icons/fa6";
import SmallTrackItem from "../../components/SmallTrackItem";
import AppHeader from "../../components/AppHeader";

function Mainscreen() {
    return (
        <div>
            <AppHeader tailIcon={<FaGear size={26} />} />
            <div className="w-full space-between ">
                <div className="flex size-full">
                    <div className="flex-1 grow h-max ml-10 mr-10">
                        <div>
                            <img
                                className="size-full aspect-square rounded-lg"
                                src={DEMO_TRACK_DATA.jacket}
                            />
                        </div>
                        <div className="rounded-md text-start">
                            <h1 className="font-sans text-4xl mt-4 ml-2">
                                {DEMO_TRACK_DATA.trackName}
                            </h1>
                        </div>
                    </div>

                    <div className="flex-1 grow flex flex-col space-between mr-10">
                        <div className="flex w-[500px] border-b">
                            <p className="ml-3 text-left text-2xl flex-1 justify-center">
                                {DEMO_TRACK_DATA.artistName}
                            </p>
                            <div className="flex mb-2">
                                <button
                                    onClick={() => {
                                        console.log("clicked");
                                    }}
                                    className="w-8 h-8 rounded-full bg-red-600"
                                ></button>
                                <button
                                    onClick={() => {
                                        console.log("clicked");
                                    }}
                                    className="w-8 h-8 rounded-full bg-green-500 ml-1"
                                ></button>
                            </div>
                        </div>

                        <div className="mt-4 border-2 rounded-md text-start p-2 flex-1">
                            <p className="h-40 overflow-auto">
                                {DEMO_TRACK_DATA.description}
                            </p>
                        </div>
                        {/* おすすめの曲リスト */}
                        <div className="flex">
                            <SmallTrackItem />
                            <SmallTrackItem />
                            <SmallTrackItem />
                            <SmallTrackItem />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mainscreen;
