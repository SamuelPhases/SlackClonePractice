import React,{useState} from "react";
import "./SearchHelp.css";
import CallMadeIcon from "@material-ui/icons/CallMade";
import Help from "../ChatScreenComponent/Help";
import WhatsNew from "../ChatScreenComponent/WhatsNew";

function SearchHelp({setHelpSearch}) {
  const [helpQA, setHelpQA] = useState(false)
  const [wNew,setWNew]=useState(false)

  return (
  <>
    <div className="search--help--container">
      <div className="search--help">
          <p onClick={() => {setHelpQA(true)}}>Get help</p>
        <div>
          <p>Quick start guide</p>
          <CallMadeIcon />
        </div>
        <p onClick={()=>{setWNew(true)}}>What's new</p>
      </div>
    </div>
      {
        helpQA  &&  <Help setHelpQA={setHelpQA} setHelpSearch={setHelpSearch} />
      }
      {
        wNew  &&  <WhatsNew setWNew={setWNew} setHelpSearch={setHelpSearch} />
      }
  </>);
}

export default SearchHelp;
