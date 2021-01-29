import React from 'react'
import './AddChannel.css'

function AddChannel() {
    return (
        <div className='add-channel'>
            <form>
                <input type='text' placeholder='Enter Channel name' />
                <button type='submit'>Save</button>
            </form>
        </div>
    )
}

export default AddChannel
