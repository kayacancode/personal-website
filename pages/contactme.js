import React, {useState} from 'react'
import axios from 'axios' 
import Head from 'next/head'
const contactme = () => {
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [subject, setSubject] = useState('')
    // const [message, setMessage]  = useState('')

    // handle inputs 
    // setName= () => {
    //     this.setState({
    //         name:e.target.value
    //     })
    // }
    // setEmail= () => {
    //     this.setState({
    //         email:e.target.value
    //     })
    // }
    // setSubject= () => {
    //     this.setState({
    //         subject:e.target.value
    //     })
    // }
    // setMessage= () => {
    //     this.setState({
    //         message:e.target.value
    //     })
    // }

    // end of handle inputs 

    // formSubmit = (e) => {
    //     e.preventDefault();

    //     let data = {
    //         name: this.state.name,
    //         subject: this.state.subject,
    //         email: this.state.email,
    //         message: this.state.message
    //     }

    // axios.post('/api/forma',data)
    // .then(res => {
    //     this.setState({
    //         sent:true,
    //     },this.resetForm())
    // }).catch(() =>{
    //     console.log('message not sent ')
    // })
    // }
  return (
    <div>
             <Head>
      {/* developed by: Kaya Jones
  website: https://kayacancode.com/ */}
        <title>Kayacancode</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name ="title" content = "Kayacancode" />
        <meta name="description" content="Kayacancode · Web Development · Data Science · Computer Science · Full Stack Web Development ·" />
        <meta property="og:title" content="Kayacancode"/>
        <meta name="og:description" content="Kayacancode · Web Development · Data Science · Computer Science · Full Stack Web Development ·" />
        <meta name="og:url" content="kayacancode.com/ " />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Kayacancode"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="flex items-center justify-center ">
                <h1 className="text-3xl font-bold ">/contact-me</h1>
                

        </div>
        <section className="hero container max-w-screen-lg mx-auto pb-10 pt-5 px-10">
    <p className="text-center text-[#3C3939] pt-5">Want to work together on a project? Does your business need an updated and refreshed technical presence? Have an opportunity that you would love to share or maybe you just want to say hello?
    <br/> <a href="mailto:kayacancode@gmail.com?subject= Services Inquiry" className="text-lg pt-2">📧: kayacancode@gmail.com</a>

</p>
</section>
        
{/* <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div class="w-full shadow rounded p-8 sm:p-12 ">
            <form action="" method="post">
                <div class="md:flex items-center mt-12">
                    <div class="w-full md:w-1/2 flex flex-col">
                        <label class="font-semibold leading-none">Name</label>
                        <input 
                        type="text" 
                        class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" 
                        value = {this.state.name}
                        onChange={this.handleName}
                        />
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label class="font-semibold leading-none">Email</label>
                        <input type="email" 
                        class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                        value = {this.state.email}
                        onChange={this.handleEmail}
                        />
                    </div>
                </div>
                <div class="md:flex items-center mt-8">
                    <div class="w-full flex flex-col">
                        <label class="font-semibold leading-none">Subject</label>
                        <input type="text" 
                        class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                        value = {this.state.subject}
                        onChange={this.handleSubject}
                        />
                    </div>
                    
                </div>
                <div>
                    <div class="w-full flex flex-col mt-8">
                        <label class="font-semibold leading-none">Message</label>
                        <textarea type="text" 
                        class="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                        value = {this.state.message}
                        onChange={this.handleMessage}></textarea>
                    </div>
                </div>
                <div class="flex items-center justify-center w-full">
                    <button class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-[#BBB8E7] rounded hover:bg-[#fcb040] focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Send message
                    </button>
                </div>
            </form>
        </div>
    </div>
  */}
    </div> 
  )
}

export default contactme