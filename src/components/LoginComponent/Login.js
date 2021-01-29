import React,{useState} from 'react'
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Login.css'

function Login() {
    const  [openSignUp,setOpenSignUp]=useState(false)
    const  [openLogin,setOpenLogin]=useState(true)
    

    
    return (<>
        {!openSignUp ? (
           <> 
                    <div className='login--container'>
                        <h2> Login</h2>
                        <div className='login--content'>
                        
                            <button className='google--login'>Continue with Google</button>
                            <p>OR</p>
                            <form className='login--form'>
                                <input type='email' placeholder='Email Address' />
                                <input type='text' placeholder='Password' />
                                <button type='submit' >Continue</button>
                                <label>
                                <input type='checkbox' />
                                <p>It's okay to send me emails about this Slack clone</p>
                                </label>
                            </form>
                            <p>Don't have an account.     
                            <span onClick={() => { setOpenSignUp(!openSignUp) }}>
                                Sign up here
                            </span>
                            </p>
                        </div>
                            <p>By continuing, you’re agreeing to our Customer Terms of Service, Privacy Policy, and Cookie Policy.</p>
                            <div className='login--footer'>
                                <p>
                                Privacy & Terms
                                </p>
                                <p>
                                Contact Us
                                </p>
                                <p>
                                <LanguageIcon/>
                                Change region
                                <ExpandMoreIcon/>
                                </p>
                            </div>
                    </div>
        </>
        ) : (
                <>
                                <div className='login--container'>
                        <h2> Sign Up</h2>
                        <div className='login--content'>
                        
                            <button className='google--login'>Continue with Google</button>
                            <p>OR</p>
                            <form className='login--form'>
                                {/* <input type='text'  placeholder='Full name' /> */}
                                <input type='text'  placeholder='Display name' />
                                <input type='email' placeholder='Email Address' />
                                <input type='password' placeholder='Password' />
                                <input type='password' placeholder='Confirm Password' />
                                <button type='submit' >Continue</button>
                                <label>
                                <input type='checkbox' />
                                <p>It's okay to send me emails about this Slack clone</p>
                                </label>
                            </form>
                            <p>Already have an account.     
                            <span onClick={() => { setOpenSignUp(!openSignUp) }}>
                                Log in here
                            </span>
                            </p>
                        </div>
                            <p>By continuing, you’re agreeing to our Customer Terms of Service, Privacy Policy, and Cookie Policy.</p>
                            <div className='login--footer'>
                                <p>
                                Privacy & Terms
                                </p>
                                <p>
                                Contact Us
                                </p>
                                <p>
                                <LanguageIcon/>
                                Change region
                                <ExpandMoreIcon/>
                                </p>
                            </div>
                    </div>
        
                    </>
        ) }
                        </>

                    )
}

export default Login
