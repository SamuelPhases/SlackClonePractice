import React,{useState} from 'react'
import './Help.css'
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
// M

function Help({setHelpQA,setHelpSearch}) {
    const  [qaOne,setQAOne]=useState(false)
    const  [qaTwo,setQATwo]=useState(false)
    const  [qaThree,setQAThree]=useState(false)
    return (
        <div className='help--container'>
            <div className='help--content'>
                <div className='help--content--header'>
                    <h2>help</h2>
                    <div onClick={() => {
                     setHelpSearch(false)
                        setHelpQA(false)
                    }}>

                    <CloseIcon/>
                    </div>
                </div>
                <div className='help--content--QA'>

                <label className='help--content--search'>
                    <SearchIcon/>
                    <input type='text' placeholder='Search the Help Center' />
                </label>
                <div className='help--content--body'>
                    <div className='help--qa'>
                            <div className='help--qa--header' onClick={() => {
                                setQAThree(false)
                                setQATwo(false)
                                setQAOne(!qaOne)
                            }}>
                                <h4>Getting Started</h4>
                                {qaOne ? (
                                    <ExpandMoreIcon/>
                                ) : (
                                    <ExpandLessIcon/>
                                ) }
                            </div>
                        {qaOne  &&  (
                        <div className='help--qa--body'>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        )}
                    </div>
                    <div className='help--qa'>
                            <div className='help--qa--header' onClick={() => {
                                setQAOne(false)
                                setQAThree(false)
                                setQATwo(!qaTwo)
                            }}>
                                <h4>Using Slack Clone</h4>
                                {qaTwo ? (
                                    <ExpandMoreIcon/>
                                    ): (
                                    <ExpandLessIcon/>    
                                )  }
                            </div>
                            {
                                qaTwo && (
                        <div className='help--qa--body'>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                                )
                            }
                    </div>
                        <div className='help--qa' onClick={() => {
                            setQATwo(false)
                            setQAOne(false)
                            setQAThree(!qaThree)
                        }} >
                            <div className='help--qa--header'>
                                <h4>Getting Started</h4>
                                {qaThree ? (
                                    <ExpandMoreIcon/>
                                ) : (
                                <ExpandLessIcon/>
                                    ) }
                            </div>
                            {qaThree && (
                            <div className='help--qa--body'>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                            )}
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Help
