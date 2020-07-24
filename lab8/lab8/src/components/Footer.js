import React from "react"


// https://mdbootstrap.com/docs/jquery/navigation/footer/

const Footer=() =>{
    return(

        // <!-- Footer -->
        <footer className="page-footer font-small bg-dark pt-4" sticky="bottom">
        
       
          <div className="container">
        
            
            <div className="row">
              
              
              <div className="form-group mx-auto">

                    <form className="form-inline my-2 my-lg-0"> 
                                <input className="form-control mr-sm-2" type="email" placeholder="Your email" required/> 
                                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Sign up!</button> 
                    </form>
        
              </div>
        
            </div>
        
          </div>
        
          <div className="footer-copyright text-center text-white py-3">© 2020 Copyright:
            <a class="text-danger" href="https://mdbootstrap.com/"> TastyRecipy</a>
          </div>
        
        
        </footer>
        



    )



};



export default Footer
