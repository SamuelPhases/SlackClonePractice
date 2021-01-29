import React from 'react'
import "./WhatsNew.css"
import CloseIcon from '@material-ui/icons/Close';


function WhatsNew({setWNew,setHelpSearch}) {
    return (
        <div className='whatsnew--container'>
            <div className='whatsnew--content'>
                <div className='whatsnew--content--container'>
                    <div className='whatsnew--content--container--header'>
                        <h2>What's New</h2>
                        <div onClick={() => {
                            setWNew(false)
                            setHelpSearch(false)
                        }}>
                             <CloseIcon/>
                        </div>
                    </div>

                <div className='whatsnew--content--header'>
                    <p>October 13th, 2020</p>
                    <h4>A simpler and oragnized Slack Clone</h4>
                </div>
                <div className='whatsnew--content--body'>
                    <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                    </p>
                </div>

                    </div>
                </div>
        </div>
    )
}

export default WhatsNew
