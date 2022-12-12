import React from 'react'

export default function Form() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.title.value + "\n" + e.target.message.value)
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <fieldset>
          <legend>Add a routine!</legend>
          <ul>
            <li className='input'>
              <label>Title</label>
              <input name="title" type="title" id="title" required />
            </li>
            <li className='input'>
              <label>Message</label>
              <input name="message" type="message" id="message" required 
                     style={{"height": "100px"}}/>
            </li>
          </ul>
        </fieldset>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}
