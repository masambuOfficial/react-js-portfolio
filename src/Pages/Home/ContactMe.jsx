import React from 'react'

const ContactMe = () => {
  return (
    <section id='Contact' className='contact--section'>
        <div>
            <p className='sub--title'>Get In Touch</p>
            <h2>Contact Me</h2>
            <p className='text-lg'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus porro eaque voluptas omnis ducimus, sit quaerat quos amet architecto dolore perferendis non eos sunt. Natus, minima libero? Minus, corrupti distinctio.
            </p>
        </div>
        <form className='contact--form--container'>
            <div className='container'>
                <label htmlFor="first-name"
                className='contact--label'
                >
                    <span className='text-md'>First Name</span>
                    <input type="text" name="first-name" id="first-name" className='contact--input text-md'required/>
                </label>
                <label htmlFor="last-name"
                className='contact--label'
                >
                    <span className='text-md'>Last Name</span>
                    <input type="text" name="last-name" id="last-name" className='contact--input text-md'required/>
                </label>
                <label htmlFor="email"
                className='contact--label'
                >
                    <span className='text-md'>Email</span>
                    <input type="email" name="email" id="email" className='contact--input text-md'required/>
                </label>
                <label htmlFor="phone-number"
                className='contact--label'
                >
                    <span className='text-md'>Phone Number</span>
                    <input type="number" name="phone-number" id="phone-number" className='contact--input text-md'required/>
                </label>
            </div>
            <label htmlFor="choose-topic"
                className='contact--label'
                >
                    <span className='text-md'>Choose a topic</span>
                    <select name="" id="choose-topic" className='contact--input text-md'>
                        <option>Select One...</option>
                        <option>Item 1</option>
                        <option>Item 2</option>
                        <option>item 3</option>
                    </select>
                </label>
                <label htmlFor="message"
                className='contact--label'
                >
                    <span className='text-md'>Message</span>
                    <textarea name="message" id="message" className='contact--input text-md'
                    rows='8' placeholder='Type your message...'
                    ></textarea>
                </label>
                <label htmlFor="checkbox" className='checkbox--label'>
                    <input type="checkbox" required name='checkbox' id='checkbox' />
                    <span className='text-md'>I accept the terms</span>
                </label>
                <div><button className='btn btn-primary contact--form--btn'>Submit</button></div>
        </form>
    </section>
  )
}

export default ContactMe
