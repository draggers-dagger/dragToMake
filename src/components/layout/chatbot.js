import React,{Component} from 'react'

class Chatbot extends Component {
    render() {
        return (
            <div>
                <button class="btn  btn-default collapse-button"type="button" data-toggle="collapse" data-target="#chat" aria-expanded="false" aria-controls="collapseExample" >
                    <i class="fa fa-comments" style={{fontSize: "5vh"}} aria-hidden="true"></i>
                </button>
                <div id="chat" class="box collapse">
                    {/* <div class="header">
                        <div class="bot-header">
                            <img src="./images/back.jpg" height="100%" width="100%" />
                        </div>
                        <div class="bot-avtar">
                            <img src="./images/chat_bot.jpg" height="100%" width="100%" />
                        </div>
                    </div> */}
                    <div className="header">
                        <center style={{marginTop:"5vh"}}>
                            <i style={{fontSize:"10vh"}} className="fa fa-user"></i>
                            <br></br><h4>Welcome to D.N.D</h4>
                        <br/>
                        
                        </center>
                        {/* <br></br> */}

                    </div>
                    <br/>
                        <div id="box" class="chatBox">
                            <div class="responseData">Hi, how can I assist you ?</div><br/>
                               
                        </div>
                    <div class="bome">  
                        <i onclick="myFunction()" style={{marginTop:"3vh", marginLeft: "2vh"}} class="fa fa-refresh" aria-hidden="true"></i>
                                    <input id="input" type="text" placeholder="Write your query" />
                            </div>
                    </div>
            </div>
                        )
                    }
}

export default Chatbot