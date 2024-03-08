import DEMO_TRACK_DATA from "../../DemoData";

function Mainscreen() {
  return (
    
    <div className="w-full space-between">
        <div className="flex w-full">
            <div className="flex-none grow">
                <div className="container m-12">
                    <img className="size-96" src={DEMO_TRACK_DATA.jacket}/>
                    <h1 className="mt-10 text-7xl">{DEMO_TRACK_DATA.trackName}</h1>
                </div>
            </div>
            <div className="flex-initial grow">
                <div className="container m-11">
                    <div className="w-96 h-24">
                        <p>{DEMO_TRACK_DATA.description}</p>
                    </div>
                    
                </div>
            </div>

        </div>
        
    </div>
  );
}

export default Mainscreen;

