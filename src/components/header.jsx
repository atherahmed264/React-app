
export const Header = (props) => {
  
  return (
    <header id="header">
      <div className="intro">
        
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h3 className="khaki title" data-aos="zoom-in">
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h3>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a 
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        
      </div>
    </header>
  );
};
